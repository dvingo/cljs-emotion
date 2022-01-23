goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47648 = arguments.length;
var i__4865__auto___47650 = (0);
while(true){
if((i__4865__auto___47650 < len__4864__auto___47648)){
args__4870__auto__.push((arguments[i__4865__auto___47650]));

var G__47651 = (i__4865__auto___47650 + (1));
i__4865__auto___47650 = G__47651;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((4) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq47355){
var G__47356 = cljs.core.first(seq47355);
var seq47355__$1 = cljs.core.next(seq47355);
var G__47357 = cljs.core.first(seq47355__$1);
var seq47355__$2 = cljs.core.next(seq47355__$1);
var G__47358 = cljs.core.first(seq47355__$2);
var seq47355__$3 = cljs.core.next(seq47355__$2);
var G__47359 = cljs.core.first(seq47355__$3);
var seq47355__$4 = cljs.core.next(seq47355__$3);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47356,G__47357,G__47358,G__47359,seq47355__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47662 = arguments.length;
var i__4865__auto___47663 = (0);
while(true){
if((i__4865__auto___47663 < len__4864__auto___47662)){
args__4870__auto__.push((arguments[i__4865__auto___47663]));

var G__47664 = (i__4865__auto___47663 + (1));
i__4865__auto___47663 = G__47664;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__47267__auto__,rest__47268__auto__){
var convert_case__47269__auto__ = (function (p1__47266__47270__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__47266__47270__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47268__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47267__auto__,convert_case__47269__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq47378){
var G__47379 = cljs.core.first(seq47378);
var seq47378__$1 = cljs.core.next(seq47378);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47379,seq47378__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47666 = arguments.length;
var i__4865__auto___47667 = (0);
while(true){
if((i__4865__auto___47667 < len__4864__auto___47666)){
args__4870__auto__.push((arguments[i__4865__auto___47667]));

var G__47668 = (i__4865__auto___47667 + (1));
i__4865__auto___47667 = G__47668;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq47391){
var G__47392 = cljs.core.first(seq47391);
var seq47391__$1 = cljs.core.next(seq47391);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47392,seq47391__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47675 = arguments.length;
var i__4865__auto___47676 = (0);
while(true){
if((i__4865__auto___47676 < len__4864__auto___47675)){
args__4870__auto__.push((arguments[i__4865__auto___47676]));

var G__47679 = (i__4865__auto___47676 + (1));
i__4865__auto___47676 = G__47679;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq47406){
var G__47407 = cljs.core.first(seq47406);
var seq47406__$1 = cljs.core.next(seq47406);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47407,seq47406__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47685 = arguments.length;
var i__4865__auto___47686 = (0);
while(true){
if((i__4865__auto___47686 < len__4864__auto___47685)){
args__4870__auto__.push((arguments[i__4865__auto___47686]));

var G__47687 = (i__4865__auto___47686 + (1));
i__4865__auto___47686 = G__47687;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq47411){
var G__47412 = cljs.core.first(seq47411);
var seq47411__$1 = cljs.core.next(seq47411);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47412,seq47411__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47690 = arguments.length;
var i__4865__auto___47692 = (0);
while(true){
if((i__4865__auto___47692 < len__4864__auto___47690)){
args__4870__auto__.push((arguments[i__4865__auto___47692]));

var G__47693 = (i__4865__auto___47692 + (1));
i__4865__auto___47692 = G__47693;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47267__auto__,rest__47268__auto__){
var convert_case__47269__auto__ = (function (p1__47266__47270__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__47266__47270__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47268__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47267__auto__,convert_case__47269__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq47420){
var G__47421 = cljs.core.first(seq47420);
var seq47420__$1 = cljs.core.next(seq47420);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47421,seq47420__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47695 = arguments.length;
var i__4865__auto___47696 = (0);
while(true){
if((i__4865__auto___47696 < len__4864__auto___47695)){
args__4870__auto__.push((arguments[i__4865__auto___47696]));

var G__47697 = (i__4865__auto___47696 + (1));
i__4865__auto___47696 = G__47697;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq47428){
var G__47429 = cljs.core.first(seq47428);
var seq47428__$1 = cljs.core.next(seq47428);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47429,seq47428__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47700 = arguments.length;
var i__4865__auto___47702 = (0);
while(true){
if((i__4865__auto___47702 < len__4864__auto___47700)){
args__4870__auto__.push((arguments[i__4865__auto___47702]));

var G__47703 = (i__4865__auto___47702 + (1));
i__4865__auto___47702 = G__47703;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq47444){
var G__47445 = cljs.core.first(seq47444);
var seq47444__$1 = cljs.core.next(seq47444);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47445,seq47444__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47704 = arguments.length;
var i__4865__auto___47705 = (0);
while(true){
if((i__4865__auto___47705 < len__4864__auto___47704)){
args__4870__auto__.push((arguments[i__4865__auto___47705]));

var G__47706 = (i__4865__auto___47705 + (1));
i__4865__auto___47705 = G__47706;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq47454){
var G__47455 = cljs.core.first(seq47454);
var seq47454__$1 = cljs.core.next(seq47454);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47455,seq47454__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47709 = arguments.length;
var i__4865__auto___47710 = (0);
while(true){
if((i__4865__auto___47710 < len__4864__auto___47709)){
args__4870__auto__.push((arguments[i__4865__auto___47710]));

var G__47712 = (i__4865__auto___47710 + (1));
i__4865__auto___47710 = G__47712;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__47267__auto__,rest__47268__auto__){
var convert_case__47269__auto__ = (function (p1__47266__47270__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__47266__47270__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47268__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47267__auto__,convert_case__47269__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq47459){
var G__47460 = cljs.core.first(seq47459);
var seq47459__$1 = cljs.core.next(seq47459);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47460,seq47459__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47715 = arguments.length;
var i__4865__auto___47716 = (0);
while(true){
if((i__4865__auto___47716 < len__4864__auto___47715)){
args__4870__auto__.push((arguments[i__4865__auto___47716]));

var G__47717 = (i__4865__auto___47716 + (1));
i__4865__auto___47716 = G__47717;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq47461){
var G__47462 = cljs.core.first(seq47461);
var seq47461__$1 = cljs.core.next(seq47461);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47462,seq47461__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47720 = arguments.length;
var i__4865__auto___47721 = (0);
while(true){
if((i__4865__auto___47721 < len__4864__auto___47720)){
args__4870__auto__.push((arguments[i__4865__auto___47721]));

var G__47722 = (i__4865__auto___47721 + (1));
i__4865__auto___47721 = G__47722;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq47465){
var G__47466 = cljs.core.first(seq47465);
var seq47465__$1 = cljs.core.next(seq47465);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47466,seq47465__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47728 = arguments.length;
var i__4865__auto___47729 = (0);
while(true){
if((i__4865__auto___47729 < len__4864__auto___47728)){
args__4870__auto__.push((arguments[i__4865__auto___47729]));

var G__47730 = (i__4865__auto___47729 + (1));
i__4865__auto___47729 = G__47730;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq47470){
var G__47471 = cljs.core.first(seq47470);
var seq47470__$1 = cljs.core.next(seq47470);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47471,seq47470__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47733 = arguments.length;
var i__4865__auto___47734 = (0);
while(true){
if((i__4865__auto___47734 < len__4864__auto___47733)){
args__4870__auto__.push((arguments[i__4865__auto___47734]));

var G__47735 = (i__4865__auto___47734 + (1));
i__4865__auto___47734 = G__47735;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__47267__auto__,rest__47268__auto__){
var convert_case__47269__auto__ = (function (p1__47266__47270__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__47266__47270__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47268__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47267__auto__,convert_case__47269__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq47484){
var G__47485 = cljs.core.first(seq47484);
var seq47484__$1 = cljs.core.next(seq47484);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47485,seq47484__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47736 = arguments.length;
var i__4865__auto___47737 = (0);
while(true){
if((i__4865__auto___47737 < len__4864__auto___47736)){
args__4870__auto__.push((arguments[i__4865__auto___47737]));

var G__47738 = (i__4865__auto___47737 + (1));
i__4865__auto___47737 = G__47738;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq47487){
var G__47488 = cljs.core.first(seq47487);
var seq47487__$1 = cljs.core.next(seq47487);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47488,seq47487__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47742 = arguments.length;
var i__4865__auto___47743 = (0);
while(true){
if((i__4865__auto___47743 < len__4864__auto___47742)){
args__4870__auto__.push((arguments[i__4865__auto___47743]));

var G__47744 = (i__4865__auto___47743 + (1));
i__4865__auto___47743 = G__47744;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq47490){
var G__47491 = cljs.core.first(seq47490);
var seq47490__$1 = cljs.core.next(seq47490);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47491,seq47490__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47750 = arguments.length;
var i__4865__auto___47751 = (0);
while(true){
if((i__4865__auto___47751 < len__4864__auto___47750)){
args__4870__auto__.push((arguments[i__4865__auto___47751]));

var G__47752 = (i__4865__auto___47751 + (1));
i__4865__auto___47751 = G__47752;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq47492){
var G__47493 = cljs.core.first(seq47492);
var seq47492__$1 = cljs.core.next(seq47492);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47493,seq47492__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47757 = arguments.length;
var i__4865__auto___47759 = (0);
while(true){
if((i__4865__auto___47759 < len__4864__auto___47757)){
args__4870__auto__.push((arguments[i__4865__auto___47759]));

var G__47760 = (i__4865__auto___47759 + (1));
i__4865__auto___47759 = G__47760;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47267__auto__,rest__47268__auto__){
var convert_case__47269__auto__ = (function (p1__47266__47270__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__47266__47270__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47268__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47267__auto__,convert_case__47269__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq47498){
var G__47499 = cljs.core.first(seq47498);
var seq47498__$1 = cljs.core.next(seq47498);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47499,seq47498__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47762 = arguments.length;
var i__4865__auto___47763 = (0);
while(true){
if((i__4865__auto___47763 < len__4864__auto___47762)){
args__4870__auto__.push((arguments[i__4865__auto___47763]));

var G__47764 = (i__4865__auto___47763 + (1));
i__4865__auto___47763 = G__47764;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq47509){
var G__47510 = cljs.core.first(seq47509);
var seq47509__$1 = cljs.core.next(seq47509);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47510,seq47509__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47773 = arguments.length;
var i__4865__auto___47774 = (0);
while(true){
if((i__4865__auto___47774 < len__4864__auto___47773)){
args__4870__auto__.push((arguments[i__4865__auto___47774]));

var G__47776 = (i__4865__auto___47774 + (1));
i__4865__auto___47774 = G__47776;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq47512){
var G__47513 = cljs.core.first(seq47512);
var seq47512__$1 = cljs.core.next(seq47512);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47513,seq47512__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47778 = arguments.length;
var i__4865__auto___47779 = (0);
while(true){
if((i__4865__auto___47779 < len__4864__auto___47778)){
args__4870__auto__.push((arguments[i__4865__auto___47779]));

var G__47781 = (i__4865__auto___47779 + (1));
i__4865__auto___47779 = G__47781;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq47515){
var G__47516 = cljs.core.first(seq47515);
var seq47515__$1 = cljs.core.next(seq47515);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47516,seq47515__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47787 = arguments.length;
var i__4865__auto___47788 = (0);
while(true){
if((i__4865__auto___47788 < len__4864__auto___47787)){
args__4870__auto__.push((arguments[i__4865__auto___47788]));

var G__47789 = (i__4865__auto___47788 + (1));
i__4865__auto___47788 = G__47789;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47267__auto__,rest__47268__auto__){
var convert_case__47269__auto__ = (function (p1__47266__47270__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__47266__47270__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47268__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47267__auto__,convert_case__47269__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq47523){
var G__47524 = cljs.core.first(seq47523);
var seq47523__$1 = cljs.core.next(seq47523);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47524,seq47523__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47791 = arguments.length;
var i__4865__auto___47792 = (0);
while(true){
if((i__4865__auto___47792 < len__4864__auto___47791)){
args__4870__auto__.push((arguments[i__4865__auto___47792]));

var G__47794 = (i__4865__auto___47792 + (1));
i__4865__auto___47792 = G__47794;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq47535){
var G__47536 = cljs.core.first(seq47535);
var seq47535__$1 = cljs.core.next(seq47535);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47536,seq47535__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47796 = arguments.length;
var i__4865__auto___47797 = (0);
while(true){
if((i__4865__auto___47797 < len__4864__auto___47796)){
args__4870__auto__.push((arguments[i__4865__auto___47797]));

var G__47798 = (i__4865__auto___47797 + (1));
i__4865__auto___47797 = G__47798;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq47545){
var G__47546 = cljs.core.first(seq47545);
var seq47545__$1 = cljs.core.next(seq47545);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47546,seq47545__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47804 = arguments.length;
var i__4865__auto___47805 = (0);
while(true){
if((i__4865__auto___47805 < len__4864__auto___47804)){
args__4870__auto__.push((arguments[i__4865__auto___47805]));

var G__47806 = (i__4865__auto___47805 + (1));
i__4865__auto___47805 = G__47806;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq47550){
var G__47551 = cljs.core.first(seq47550);
var seq47550__$1 = cljs.core.next(seq47550);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47551,seq47550__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47809 = arguments.length;
var i__4865__auto___47811 = (0);
while(true){
if((i__4865__auto___47811 < len__4864__auto___47809)){
args__4870__auto__.push((arguments[i__4865__auto___47811]));

var G__47812 = (i__4865__auto___47811 + (1));
i__4865__auto___47811 = G__47812;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47267__auto__,rest__47268__auto__){
var convert_case__47269__auto__ = (function (p1__47266__47270__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__47266__47270__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47268__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47267__auto__,convert_case__47269__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq47559){
var G__47560 = cljs.core.first(seq47559);
var seq47559__$1 = cljs.core.next(seq47559);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47560,seq47559__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47814 = arguments.length;
var i__4865__auto___47815 = (0);
while(true){
if((i__4865__auto___47815 < len__4864__auto___47814)){
args__4870__auto__.push((arguments[i__4865__auto___47815]));

var G__47818 = (i__4865__auto___47815 + (1));
i__4865__auto___47815 = G__47818;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq47570){
var G__47571 = cljs.core.first(seq47570);
var seq47570__$1 = cljs.core.next(seq47570);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47571,seq47570__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47822 = arguments.length;
var i__4865__auto___47823 = (0);
while(true){
if((i__4865__auto___47823 < len__4864__auto___47822)){
args__4870__auto__.push((arguments[i__4865__auto___47823]));

var G__47824 = (i__4865__auto___47823 + (1));
i__4865__auto___47823 = G__47824;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq47584){
var G__47586 = cljs.core.first(seq47584);
var seq47584__$1 = cljs.core.next(seq47584);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47586,seq47584__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47826 = arguments.length;
var i__4865__auto___47827 = (0);
while(true){
if((i__4865__auto___47827 < len__4864__auto___47826)){
args__4870__auto__.push((arguments[i__4865__auto___47827]));

var G__47829 = (i__4865__auto___47827 + (1));
i__4865__auto___47827 = G__47829;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47280__auto__,rest__47281__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__47280__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47281__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq47614){
var G__47615 = cljs.core.first(seq47614);
var seq47614__$1 = cljs.core.next(seq47614);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47615,seq47614__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
