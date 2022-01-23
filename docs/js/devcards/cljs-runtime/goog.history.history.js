goog.provide("goog.History");
goog.provide("goog.History.Event");
goog.provide("goog.History.EventType");
goog.require("goog.Timer");
goog.require("goog.asserts");
goog.require("goog.dom");
goog.require("goog.dom.InputType");
goog.require("goog.dom.safe");
goog.require("goog.events.Event");
goog.require("goog.events.EventHandler");
goog.require("goog.events.EventTarget");
goog.require("goog.events.EventType");
goog.require("goog.history.Event");
goog.require("goog.history.EventType");
goog.require("goog.html.SafeHtml");
goog.require("goog.html.TrustedResourceUrl");
goog.require("goog.html.uncheckedconversions");
goog.require("goog.labs.userAgent.device");
goog.require("goog.memoize");
goog.require("goog.string");
goog.require("goog.string.Const");
goog.require("goog.userAgent");
goog.requireType("goog.events.BrowserEvent");
goog.History = function(opt_invisible, opt_blankPageUrl, opt_input, opt_iframe) {
  goog.events.EventTarget.call(this);
  if (opt_invisible && !opt_blankPageUrl) {
    throw new Error("Can't use invisible history without providing a blank page.");
  }
  let input;
  if (opt_input) {
    input = opt_input;
  } else {
    const inputId = "history_state" + goog.History.historyCount_;
    const inputHtml = goog.html.SafeHtml.create("input", {type:goog.dom.InputType.TEXT, name:inputId, id:inputId, style:goog.string.Const.from("display:none")});
    goog.dom.safe.documentWrite(document, inputHtml);
    input = goog.dom.getElement(inputId);
  }
  this.hiddenInput_ = input;
  this.window_ = opt_input ? goog.dom.getWindow(goog.dom.getOwnerDocument(opt_input)) : window;
  this.iframeSrc_ = opt_blankPageUrl;
  if (goog.userAgent.IE && !opt_blankPageUrl) {
    if (window.location.protocol == "https") {
      this.iframeSrc_ = goog.html.TrustedResourceUrl.fromConstant(goog.string.Const.from("https:///"));
    } else {
      this.iframeSrc_ = goog.html.TrustedResourceUrl.fromConstant(goog.string.Const.from('javascript:""'));
    }
  }
  this.timer_ = new goog.Timer(goog.History.PollingType.NORMAL);
  this.registerDisposable(this.timer_);
  this.userVisible_ = !opt_invisible;
  this.eventHandler_ = new goog.events.EventHandler(this);
  if (opt_invisible || goog.History.LEGACY_IE) {
    let iframe;
    if (opt_iframe) {
      iframe = opt_iframe;
    } else {
      const iframeId = "history_iframe" + goog.History.historyCount_;
      const iframeHtml = goog.html.SafeHtml.createIframe(this.iframeSrc_, null, {id:iframeId, style:goog.string.Const.from("display:none"), sandbox:undefined});
      goog.dom.safe.documentWrite(document, iframeHtml);
      iframe = goog.dom.getElement(iframeId);
    }
    this.iframe_ = iframe;
    this.unsetIframe_ = true;
  }
  if (goog.History.LEGACY_IE) {
    this.eventHandler_.listen(this.window_, goog.events.EventType.LOAD, this.onDocumentLoaded);
    this.documentLoaded = false;
    this.shouldEnable_ = false;
  }
  if (this.userVisible_) {
    this.setHash_(this.getToken(), true);
  } else {
    this.setIframeToken_(this.hiddenInput_.value);
  }
  goog.History.historyCount_++;
};
goog.inherits(goog.History, goog.events.EventTarget);
goog.History.prototype.enabled_ = false;
goog.History.prototype.longerPolling_ = false;
goog.History.prototype.lastToken_ = null;
goog.History.isOnHashChangeSupported = goog.memoize(function() {
  return goog.userAgent.IE ? goog.userAgent.isDocumentModeOrHigher(8) : "onhashchange" in goog.global;
});
goog.History.LEGACY_IE = goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(8);
goog.History.HASH_ALWAYS_REQUIRED = goog.History.LEGACY_IE;
goog.History.prototype.lockedToken_ = null;
goog.History.prototype.disposeInternal = function() {
  goog.History.superClass_.disposeInternal.call(this);
  this.eventHandler_.dispose();
  this.setEnabled(false);
};
goog.History.prototype.setEnabled = function(enable) {
  if (enable == this.enabled_) {
    return;
  }
  if (goog.History.LEGACY_IE && !this.documentLoaded) {
    this.shouldEnable_ = enable;
    return;
  }
  if (enable) {
    if (goog.userAgent.GECKO) {
      this.eventHandler_.listen(this.window_, "pageshow", this.onShow_);
    }
    if (goog.History.isOnHashChangeSupported() && this.userVisible_) {
      this.eventHandler_.listen(this.window_, goog.events.EventType.HASHCHANGE, this.onHashChange_);
      this.enabled_ = true;
      this.dispatchEvent(new goog.history.Event(this.getToken(), false));
    } else {
      if (!(goog.userAgent.IE && !goog.labs.userAgent.device.isMobile()) || this.documentLoaded) {
        this.eventHandler_.listen(this.timer_, goog.Timer.TICK, goog.bind(this.check_, this, true));
        this.enabled_ = true;
        if (!goog.History.LEGACY_IE) {
          this.lastToken_ = this.getToken();
          this.dispatchEvent(new goog.history.Event(this.getToken(), false));
        }
        this.timer_.start();
      }
    }
  } else {
    this.enabled_ = false;
    this.eventHandler_.removeAll();
    this.timer_.stop();
  }
};
goog.History.prototype.onDocumentLoaded = function() {
  this.documentLoaded = true;
  if (this.hiddenInput_.value) {
    this.setIframeToken_(this.hiddenInput_.value, true);
  }
  this.setEnabled(this.shouldEnable_);
};
goog.History.prototype.onShow_ = function(e) {
  if (e.getBrowserEvent()["persisted"]) {
    this.setEnabled(false);
    this.setEnabled(true);
  }
};
goog.History.prototype.onHashChange_ = function(e) {
  const hash = this.getLocationFragment_(this.window_);
  if (hash != this.lastToken_) {
    this.update_(hash, true);
  }
};
goog.History.prototype.getToken = function() {
  if (this.lockedToken_ != null) {
    return this.lockedToken_;
  } else {
    if (this.userVisible_) {
      return this.getLocationFragment_(this.window_);
    } else {
      return this.getIframeToken_() || "";
    }
  }
};
goog.History.prototype.setToken = function(token, opt_title) {
  this.setHistoryState_(token, false, opt_title);
};
goog.History.prototype.replaceToken = function(token, opt_title) {
  this.setHistoryState_(token, true, opt_title);
};
goog.History.prototype.getLocationFragment_ = function(win) {
  const href = win.location.href;
  const index = href.indexOf("#");
  return index < 0 ? "" : href.substring(index + 1);
};
goog.History.prototype.setHistoryState_ = function(token, replace, opt_title) {
  if (this.getToken() != token) {
    if (this.userVisible_) {
      this.setHash_(token, replace);
      if (!goog.History.isOnHashChangeSupported()) {
        if (goog.userAgent.IE && !goog.labs.userAgent.device.isMobile()) {
          this.setIframeToken_(token, replace, opt_title);
        }
      }
      if (this.enabled_) {
        this.check_(false);
      }
    } else {
      this.setIframeToken_(token, replace);
      this.lockedToken_ = this.lastToken_ = this.hiddenInput_.value = token;
      this.dispatchEvent(new goog.history.Event(token, false));
    }
  }
};
goog.History.prototype.setHash_ = function(token, opt_replace) {
  const loc = this.window_.location;
  let url = loc.href.split("#")[0];
  const hasHash = goog.string.contains(loc.href, "#");
  if (goog.History.HASH_ALWAYS_REQUIRED || hasHash || token) {
    url += "#" + token;
  }
  if (url != loc.href) {
    const safeUrl = goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("URL taken from location.href."), url);
    if (opt_replace) {
      goog.dom.safe.replaceLocation(loc, safeUrl);
    } else {
      goog.dom.safe.setLocationHref(loc, safeUrl);
    }
  }
};
goog.History.prototype.setIframeToken_ = function(token, opt_replace, opt_title) {
  if (this.unsetIframe_ || token != this.getIframeToken_()) {
    this.unsetIframe_ = false;
    token = goog.string.urlEncode(token);
    if (goog.userAgent.IE) {
      const doc = goog.dom.getFrameContentDocument(this.iframe_);
      doc.open("text/html", opt_replace ? "replace" : undefined);
      const iframeSourceHtml = goog.html.SafeHtml.concat(goog.html.SafeHtml.create("title", {}, opt_title || this.window_.document.title), goog.html.SafeHtml.create("body", {}, token));
      goog.dom.safe.documentWrite(doc, iframeSourceHtml);
      doc.close();
    } else {
      goog.asserts.assertInstanceof(this.iframeSrc_, goog.html.TrustedResourceUrl, "this.iframeSrc_ must be set on calls to setIframeToken_");
      const url = goog.html.TrustedResourceUrl.unwrap(this.iframeSrc_) + "#" + token;
      const contentWindow = this.iframe_.contentWindow;
      if (contentWindow) {
        if (opt_replace) {
          goog.dom.safe.replaceLocation(contentWindow.location, url);
        } else {
          goog.dom.safe.setLocationHref(contentWindow.location, url);
        }
      }
    }
  }
};
goog.History.prototype.getIframeToken_ = function() {
  if (goog.userAgent.IE) {
    const doc = goog.dom.getFrameContentDocument(this.iframe_);
    return doc.body ? goog.string.urlDecode(doc.body.innerHTML) : null;
  } else {
    const contentWindow = this.iframe_.contentWindow;
    if (contentWindow) {
      let hash;
      try {
        hash = goog.string.urlDecode(this.getLocationFragment_(contentWindow));
      } catch (e) {
        if (!this.longerPolling_) {
          this.setLongerPolling_(true);
        }
        return null;
      }
      if (this.longerPolling_) {
        this.setLongerPolling_(false);
      }
      return hash || null;
    } else {
      return null;
    }
  }
};
goog.History.prototype.check_ = function(isNavigation) {
  if (this.userVisible_) {
    const hash = this.getLocationFragment_(this.window_);
    if (hash != this.lastToken_) {
      this.update_(hash, isNavigation);
    }
  }
  if (!this.userVisible_ || goog.History.LEGACY_IE) {
    const token = this.getIframeToken_() || "";
    if (this.lockedToken_ == null || token == this.lockedToken_) {
      this.lockedToken_ = null;
      if (token != this.lastToken_) {
        this.update_(token, isNavigation);
      }
    }
  }
};
goog.History.prototype.update_ = function(token, isNavigation) {
  this.lastToken_ = this.hiddenInput_.value = token;
  if (this.userVisible_) {
    if (goog.History.LEGACY_IE) {
      this.setIframeToken_(token);
    }
    this.setHash_(token);
  } else {
    this.setIframeToken_(token);
  }
  this.dispatchEvent(new goog.history.Event(this.getToken(), isNavigation));
};
goog.History.prototype.setLongerPolling_ = function(longerPolling) {
  if (this.longerPolling_ != longerPolling) {
    this.timer_.setInterval(longerPolling ? goog.History.PollingType.LONG : goog.History.PollingType.NORMAL);
  }
  this.longerPolling_ = longerPolling;
};
goog.History.prototype.operaDefibrillator_ = function() {
  this.timer_.stop();
  this.timer_.start();
};
goog.History.INPUT_EVENTS_ = [goog.events.EventType.MOUSEDOWN, goog.events.EventType.KEYDOWN, goog.events.EventType.MOUSEMOVE];
goog.History.historyCount_ = 0;
goog.History.PollingType = {NORMAL:150, LONG:10000};
goog.History.EventType = goog.history.EventType;
goog.History.Event = goog.history.Event;

//# sourceMappingURL=goog.history.history.js.map
