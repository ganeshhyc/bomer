// Generated by purs version 0.11.7
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Category = require("../Control.Category");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Either = require("../Data.Either");
var Data_Eq = require("../Data.Eq");
var Data_Foldable = require("../Data.Foldable");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Lens_Internal_Forget = require("../Data.Lens.Internal.Forget");
var Data_Lens_Internal_Indexed = require("../Data.Lens.Internal.Indexed");
var Data_Lens_Types = require("../Data.Lens.Types");
var Data_List = require("../Data.List");
var Data_List_Types = require("../Data.List.Types");
var Data_Maybe = require("../Data.Maybe");
var Data_Maybe_First = require("../Data.Maybe.First");
var Data_Maybe_Last = require("../Data.Maybe.Last");
var Data_Monoid = require("../Data.Monoid");
var Data_Monoid_Additive = require("../Data.Monoid.Additive");
var Data_Monoid_Conj = require("../Data.Monoid.Conj");
var Data_Monoid_Disj = require("../Data.Monoid.Disj");
var Data_Monoid_Dual = require("../Data.Monoid.Dual");
var Data_Monoid_Endo = require("../Data.Monoid.Endo");
var Data_Monoid_Multiplicative = require("../Data.Monoid.Multiplicative");
var Data_Newtype = require("../Data.Newtype");
var Data_Ord = require("../Data.Ord");
var Data_Profunctor = require("../Data.Profunctor");
var Data_Profunctor_Choice = require("../Data.Profunctor.Choice");
var Data_Ring = require("../Data.Ring");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Tuple = require("../Data.Tuple");
var Data_Unit = require("../Data.Unit");
var Prelude = require("../Prelude");
var unfolded = function (dictMonoid) {
    return function (f) {
        return function (p) {
            var go = function ($43) {
                return Data_Maybe.maybe(Data_Monoid.mempty(dictMonoid))(function (v) {
                    return Data_Semigroup.append(dictMonoid.Semigroup0())(Data_Newtype.unwrap(Data_Lens_Internal_Forget.newtypeForget)(p)(v.value0))(go(v.value1));
                })(f($43));
            };
            return go;
        };
    };
};
var replicated = function (dictMonoid) {
    return function (i) {
        return function (v) {
            var go = function (v1) {
                return function (x) {
                    if (v1 === 0) {
                        return Data_Monoid.mempty(Data_Monoid.monoidFn(dictMonoid));
                    };
                    return Data_Semigroup.append(Data_Semigroup.semigroupFn(dictMonoid.Semigroup0()))(x)(go(v1 - 1 | 0)(x));
                };
            };
            return go(i)(v);
        };
    };
};
var ifoldMapOf = function (p) {
    return function (f) {
        return Data_Newtype.unwrap(Data_Lens_Internal_Forget.newtypeForget)(p(Data_Lens_Internal_Indexed.Indexed(Data_Tuple.uncurry(f))));
    };
};
var ifoldlOf = function (p) {
    return function (f) {
        return function (r) {
            return function ($44) {
                return Data_Function.flip(Data_Newtype.unwrap(Data_Monoid_Endo.newtypeEndo))(r)(Data_Newtype.unwrap(Data_Monoid_Dual.newtypeDual)(ifoldMapOf(p)(function (i) {
                    return function ($45) {
                        return Data_Monoid_Dual.Dual(Data_Monoid_Endo.Endo(Data_Function.flip(f(i))($45)));
                    };
                })($44)));
            };
        };
    };
};
var ifoldrOf = function (p) {
    return function (f) {
        return function (r) {
            return function ($46) {
                return Data_Function.flip(Data_Newtype.unwrap(Data_Monoid_Endo.newtypeEndo))(r)(ifoldMapOf(p)(function (i) {
                    return function ($47) {
                        return Data_Monoid_Endo.Endo(f(i)($47));
                    };
                })($46));
            };
        };
    };
};
var itoListOf = function (p) {
    return ifoldrOf(p)(function (i) {
        return function (x) {
            return function (xs) {
                return new Data_List_Types.Cons(new Data_Tuple.Tuple(i, x), xs);
            };
        };
    })(Data_List_Types.Nil.value);
};
var itraverseOf_ = function (dictApplicative) {
    return function (p) {
        return function (f) {
            return ifoldrOf(p)(function (i) {
                return function (a) {
                    return function (fu) {
                        return Control_Apply.applySecond(dictApplicative.Apply0())(Data_Functor["void"]((dictApplicative.Apply0()).Functor0())(f(i)(a)))(fu);
                    };
                };
            })(Control_Applicative.pure(dictApplicative)(Data_Unit.unit));
        };
    };
};
var iforOf_ = function (dictApplicative) {
    return function ($48) {
        return Data_Function.flip(itraverseOf_(dictApplicative)($48));
    };
};
var ifindOf = function (p) {
    return function (f) {
        return ifoldrOf(p)(function (i) {
            return function (a) {
                return Data_Maybe.maybe((function () {
                    var $37 = f(i)(a);
                    if ($37) {
                        return new Data_Maybe.Just(a);
                    };
                    return Data_Maybe.Nothing.value;
                })())(Data_Maybe.Just.create);
            };
        })(Data_Maybe.Nothing.value);
    };
};
var ianyOf = function (dictHeytingAlgebra) {
    return function (p) {
        return function (f) {
            return function ($49) {
                return Data_Newtype.unwrap(Data_Monoid_Disj.newtypeDisj)(ifoldMapOf(p)(function (i) {
                    return function ($50) {
                        return Data_Monoid_Disj.Disj(f(i)($50));
                    };
                })($49));
            };
        };
    };
};
var iallOf = function (dictHeytingAlgebra) {
    return function (p) {
        return function (f) {
            return function ($51) {
                return Data_Newtype.unwrap(Data_Monoid_Conj.newtypeConj)(ifoldMapOf(p)(function (i) {
                    return function ($52) {
                        return Data_Monoid_Conj.Conj(f(i)($52));
                    };
                })($51));
            };
        };
    };
};
var folded = function (dictMonoid) {
    return function (dictFoldable) {
        return function (v) {
            return Data_Foldable.foldMap(dictFoldable)(dictMonoid)(v);
        };
    };
};
var foldMapOf = Data_Newtype.under(Data_Lens_Internal_Forget.newtypeForget)(Data_Lens_Internal_Forget.newtypeForget)(Data_Lens_Internal_Forget.Forget);
var foldOf = function (p) {
    return foldMapOf(p)(Control_Category.id(Control_Category.categoryFn));
};
var foldlOf = function (p) {
    return function (f) {
        return function (r) {
            return function ($53) {
                return Data_Function.flip(Data_Newtype.unwrap(Data_Monoid_Endo.newtypeEndo))(r)(Data_Newtype.unwrap(Data_Monoid_Dual.newtypeDual)(foldMapOf(p)(function ($54) {
                    return Data_Monoid_Dual.Dual(Data_Monoid_Endo.Endo(Data_Function.flip(f)($54)));
                })($53)));
            };
        };
    };
};
var foldrOf = function (p) {
    return function (f) {
        return function (r) {
            return function ($55) {
                return Data_Function.flip(Data_Newtype.unwrap(Data_Monoid_Endo.newtypeEndo))(r)(foldMapOf(p)(function ($56) {
                    return Data_Monoid_Endo.Endo(f($56));
                })($55));
            };
        };
    };
};
var maximumOf = function (dictOrd) {
    return function (p) {
        var max = function (a) {
            return function (b) {
                var $39 = Data_Ord.greaterThan(dictOrd)(a)(b);
                if ($39) {
                    return a;
                };
                return b;
            };
        };
        return foldrOf(p)(function (a) {
            return function ($57) {
                return Data_Maybe.Just.create(Data_Maybe.maybe(a)(max(a))($57));
            };
        })(Data_Maybe.Nothing.value);
    };
};
var minimumOf = function (dictOrd) {
    return function (p) {
        var min = function (a) {
            return function (b) {
                var $40 = Data_Ord.lessThan(dictOrd)(a)(b);
                if ($40) {
                    return a;
                };
                return b;
            };
        };
        return foldrOf(p)(function (a) {
            return function ($58) {
                return Data_Maybe.Just.create(Data_Maybe.maybe(a)(min(a))($58));
            };
        })(Data_Maybe.Nothing.value);
    };
};
var toListOf = function (p) {
    return foldrOf(p)(Data_List_Types.Cons.create)(Data_List_Types.Nil.value);
};
var toListOfOn = function (s) {
    return function (p) {
        return toListOf(p)(s);
    };
};
var traverseOf_ = function (dictApplicative) {
    return function (p) {
        return function (f) {
            return foldrOf(p)(function (a) {
                return function (fu) {
                    return Control_Apply.applySecond(dictApplicative.Apply0())(Data_Functor["void"]((dictApplicative.Apply0()).Functor0())(f(a)))(fu);
                };
            })(Control_Applicative.pure(dictApplicative)(Data_Unit.unit));
        };
    };
};
var has = function (dictHeytingAlgebra) {
    return function (p) {
        return function ($59) {
            return Data_Newtype.unwrap(Data_Monoid_Disj.newtypeDisj)(foldMapOf(p)(Data_Function["const"](Data_HeytingAlgebra.tt(dictHeytingAlgebra)))($59));
        };
    };
};
var hasn$primet = function (dictHeytingAlgebra) {
    return function (p) {
        return function ($60) {
            return Data_Newtype.unwrap(Data_Monoid_Conj.newtypeConj)(foldMapOf(p)(Data_Function["const"](Data_HeytingAlgebra.ff(dictHeytingAlgebra)))($60));
        };
    };
};
var lastOf = function (p) {
    return function ($61) {
        return Data_Newtype.unwrap(Data_Maybe_Last.newtypeLast)(foldMapOf(p)(function ($62) {
            return Data_Maybe_Last.Last(Data_Maybe.Just.create($62));
        })($61));
    };
};
var lengthOf = function (p) {
    return function ($63) {
        return Data_Newtype.unwrap(Data_Monoid_Additive.newtypeAdditive)(foldMapOf(p)(Data_Function["const"](1))($63));
    };
};
var preview = function (p) {
    return function ($64) {
        return Data_Newtype.unwrap(Data_Maybe_First.newtypeFirst)(foldMapOf(p)(function ($65) {
            return Data_Maybe_First.First(Data_Maybe.Just.create($65));
        })($64));
    };
};
var previewOn = function (s) {
    return function (p) {
        return preview(p)(s);
    };
};
var productOf = function (dictSemiring) {
    return function (p) {
        return function ($66) {
            return Data_Newtype.unwrap(Data_Monoid_Multiplicative.newtypeMultiplicative)(foldMapOf(p)(Data_Monoid_Multiplicative.Multiplicative)($66));
        };
    };
};
var sequenceOf_ = function (dictApplicative) {
    return function (p) {
        return function ($67) {
            return Data_Function.flip(Data_Newtype.unwrap(Data_Monoid_Endo.newtypeEndo))(Control_Applicative.pure(dictApplicative)(Data_Unit.unit))(foldMapOf(p)(function (f) {
                return function (v) {
                    return Control_Apply.applySecond(dictApplicative.Apply0())(f)(v);
                };
            })($67));
        };
    };
};
var sumOf = function (dictSemiring) {
    return function (p) {
        return function ($68) {
            return Data_Newtype.unwrap(Data_Monoid_Additive.newtypeAdditive)(foldMapOf(p)(Data_Monoid_Additive.Additive)($68));
        };
    };
};
var firstOf = function (p) {
    return function ($69) {
        return Data_Newtype.unwrap(Data_Maybe_First.newtypeFirst)(foldMapOf(p)(function ($70) {
            return Data_Maybe_First.First(Data_Maybe.Just.create($70));
        })($69));
    };
};
var findOf = function (p) {
    return function (f) {
        return foldrOf(p)(function (a) {
            return Data_Maybe.maybe((function () {
                var $41 = f(a);
                if ($41) {
                    return new Data_Maybe.Just(a);
                };
                return Data_Maybe.Nothing.value;
            })())(Data_Maybe.Just.create);
        })(Data_Maybe.Nothing.value);
    };
};
var filtered = function (dictChoice) {
    return function (f) {
        return function ($71) {
            return Data_Profunctor.dimap(dictChoice.Profunctor0())(function (x) {
                var $42 = f(x);
                if ($42) {
                    return new Data_Either.Right(x);
                };
                return new Data_Either.Left(x);
            })(Data_Either.either(Control_Category.id(Control_Category.categoryFn))(Control_Category.id(Control_Category.categoryFn)))(Data_Profunctor_Choice.right(dictChoice)($71));
        };
    };
};
var anyOf = function (dictHeytingAlgebra) {
    return function (p) {
        return function (f) {
            return function ($72) {
                return Data_Newtype.unwrap(Data_Monoid_Disj.newtypeDisj)(foldMapOf(p)(function ($73) {
                    return Data_Monoid_Disj.Disj(f($73));
                })($72));
            };
        };
    };
};
var elemOf = function (dictEq) {
    return function (p) {
        return function (a) {
            return anyOf(Data_HeytingAlgebra.heytingAlgebraBoolean)(p)(function (v) {
                return Data_Eq.eq(dictEq)(v)(a);
            });
        };
    };
};
var orOf = function (dictHeytingAlgebra) {
    return function (p) {
        return anyOf(dictHeytingAlgebra)(p)(Control_Category.id(Control_Category.categoryFn));
    };
};
var allOf = function (dictHeytingAlgebra) {
    return function (p) {
        return function (f) {
            return function ($74) {
                return Data_Newtype.unwrap(Data_Monoid_Conj.newtypeConj)(foldMapOf(p)(function ($75) {
                    return Data_Monoid_Conj.Conj(f($75));
                })($74));
            };
        };
    };
};
var andOf = function (dictHeytingAlgebra) {
    return function (p) {
        return allOf(dictHeytingAlgebra)(p)(Control_Category.id(Control_Category.categoryFn));
    };
};
var notElemOf = function (dictEq) {
    return function (p) {
        return function (a) {
            return allOf(Data_HeytingAlgebra.heytingAlgebraBoolean)(p)(function (v) {
                return Data_Eq.notEq(dictEq)(v)(a);
            });
        };
    };
};
module.exports = {
    previewOn: previewOn,
    toListOfOn: toListOfOn,
    preview: preview,
    foldOf: foldOf,
    foldMapOf: foldMapOf,
    foldrOf: foldrOf,
    foldlOf: foldlOf,
    toListOf: toListOf,
    firstOf: firstOf,
    lastOf: lastOf,
    maximumOf: maximumOf,
    minimumOf: minimumOf,
    allOf: allOf,
    anyOf: anyOf,
    andOf: andOf,
    orOf: orOf,
    elemOf: elemOf,
    notElemOf: notElemOf,
    sumOf: sumOf,
    productOf: productOf,
    lengthOf: lengthOf,
    findOf: findOf,
    sequenceOf_: sequenceOf_,
    traverseOf_: traverseOf_,
    has: has,
    "hasn't": hasn$primet,
    replicated: replicated,
    filtered: filtered,
    folded: folded,
    unfolded: unfolded,
    ifoldMapOf: ifoldMapOf,
    ifoldrOf: ifoldrOf,
    ifoldlOf: ifoldlOf,
    iallOf: iallOf,
    ianyOf: ianyOf,
    itoListOf: itoListOf,
    itraverseOf_: itraverseOf_
};