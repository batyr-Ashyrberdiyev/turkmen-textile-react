function fp(i, u) {
  for (var a = 0; a < u.length; a++) {
    const c = u[a];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const f in c)
        if (f !== "default" && !(f in i)) {
          const d = Object.getOwnPropertyDescriptor(c, f);
          d &&
            Object.defineProperty(
              i,
              f,
              d.get ? d : { enumerable: !0, get: () => c[f] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(i, Symbol.toStringTag, { value: "Module" })
  );
}
var vm =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function oc(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var Bu = { exports: {} },
  we = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zf;
function cp() {
  if (zf) return we;
  zf = 1;
  var i = Symbol.for("react.element"),
    u = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    h = Symbol.for("react.context"),
    v = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    S = Symbol.for("react.memo"),
    D = Symbol.for("react.lazy"),
    O = Symbol.iterator;
  function L(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (O && E[O]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var N = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    z = Object.assign,
    $ = {};
  function H(E, F, se) {
    (this.props = E),
      (this.context = F),
      (this.refs = $),
      (this.updater = se || N);
  }
  (H.prototype.isReactComponent = {}),
    (H.prototype.setState = function (E, F) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, E, F, "setState");
    }),
    (H.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    });
  function M() {}
  M.prototype = H.prototype;
  function b(E, F, se) {
    (this.props = E),
      (this.context = F),
      (this.refs = $),
      (this.updater = se || N);
  }
  var J = (b.prototype = new M());
  (J.constructor = b), z(J, H.prototype), (J.isPureReactComponent = !0);
  var ae = Array.isArray,
    C = Object.prototype.hasOwnProperty,
    le = { current: null },
    pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ie(E, F, se) {
    var he,
      me = {},
      Ee = null,
      De = null;
    if (F != null)
      for (he in (F.ref !== void 0 && (De = F.ref),
      F.key !== void 0 && (Ee = "" + F.key),
      F))
        C.call(F, he) && !pe.hasOwnProperty(he) && (me[he] = F[he]);
    var Re = arguments.length - 2;
    if (Re === 1) me.children = se;
    else if (1 < Re) {
      for (var ye = Array(Re), Ye = 0; Ye < Re; Ye++)
        ye[Ye] = arguments[Ye + 2];
      me.children = ye;
    }
    if (E && E.defaultProps)
      for (he in ((Re = E.defaultProps), Re))
        me[he] === void 0 && (me[he] = Re[he]);
    return {
      $$typeof: i,
      type: E,
      key: Ee,
      ref: De,
      props: me,
      _owner: le.current,
    };
  }
  function ge(E, F) {
    return {
      $$typeof: i,
      type: E.type,
      key: F,
      ref: E.ref,
      props: E.props,
      _owner: E._owner,
    };
  }
  function Ce(E) {
    return typeof E == "object" && E !== null && E.$$typeof === i;
  }
  function Ke(E) {
    var F = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (se) {
        return F[se];
      })
    );
  }
  var rt = /\/+/g;
  function We(E, F) {
    return typeof E == "object" && E !== null && E.key != null
      ? Ke("" + E.key)
      : F.toString(36);
  }
  function ut(E, F, se, he, me) {
    var Ee = typeof E;
    (Ee === "undefined" || Ee === "boolean") && (E = null);
    var De = !1;
    if (E === null) De = !0;
    else
      switch (Ee) {
        case "string":
        case "number":
          De = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case i:
            case u:
              De = !0;
          }
      }
    if (De)
      return (
        (De = E),
        (me = me(De)),
        (E = he === "" ? "." + We(De, 0) : he),
        ae(me)
          ? ((se = ""),
            E != null && (se = E.replace(rt, "$&/") + "/"),
            ut(me, F, se, "", function (Ye) {
              return Ye;
            }))
          : me != null &&
            (Ce(me) &&
              (me = ge(
                me,
                se +
                  (!me.key || (De && De.key === me.key)
                    ? ""
                    : ("" + me.key).replace(rt, "$&/") + "/") +
                  E
              )),
            F.push(me)),
        1
      );
    if (((De = 0), (he = he === "" ? "." : he + ":"), ae(E)))
      for (var Re = 0; Re < E.length; Re++) {
        Ee = E[Re];
        var ye = he + We(Ee, Re);
        De += ut(Ee, F, se, ye, me);
      }
    else if (((ye = L(E)), typeof ye == "function"))
      for (E = ye.call(E), Re = 0; !(Ee = E.next()).done; )
        (Ee = Ee.value),
          (ye = he + We(Ee, Re++)),
          (De += ut(Ee, F, se, ye, me));
    else if (Ee === "object")
      throw (
        ((F = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (F === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : F) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return De;
  }
  function _e(E, F, se) {
    if (E == null) return E;
    var he = [],
      me = 0;
    return (
      ut(E, he, "", "", function (Ee) {
        return F.call(se, Ee, me++);
      }),
      he
    );
  }
  function Ge(E) {
    if (E._status === -1) {
      var F = E._result;
      (F = F()),
        F.then(
          function (se) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = se));
          },
          function (se) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = se));
          }
        ),
        E._status === -1 && ((E._status = 0), (E._result = F));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var Ne = { current: null },
    V = { transition: null },
    re = {
      ReactCurrentDispatcher: Ne,
      ReactCurrentBatchConfig: V,
      ReactCurrentOwner: le,
    };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (we.Children = {
      map: _e,
      forEach: function (E, F, se) {
        _e(
          E,
          function () {
            F.apply(this, arguments);
          },
          se
        );
      },
      count: function (E) {
        var F = 0;
        return (
          _e(E, function () {
            F++;
          }),
          F
        );
      },
      toArray: function (E) {
        return (
          _e(E, function (F) {
            return F;
          }) || []
        );
      },
      only: function (E) {
        if (!Ce(E))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return E;
      },
    }),
    (we.Component = H),
    (we.Fragment = a),
    (we.Profiler = f),
    (we.PureComponent = b),
    (we.StrictMode = c),
    (we.Suspense = g),
    (we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re),
    (we.act = Q),
    (we.cloneElement = function (E, F, se) {
      if (E == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            E +
            "."
        );
      var he = z({}, E.props),
        me = E.key,
        Ee = E.ref,
        De = E._owner;
      if (F != null) {
        if (
          (F.ref !== void 0 && ((Ee = F.ref), (De = le.current)),
          F.key !== void 0 && (me = "" + F.key),
          E.type && E.type.defaultProps)
        )
          var Re = E.type.defaultProps;
        for (ye in F)
          C.call(F, ye) &&
            !pe.hasOwnProperty(ye) &&
            (he[ye] = F[ye] === void 0 && Re !== void 0 ? Re[ye] : F[ye]);
      }
      var ye = arguments.length - 2;
      if (ye === 1) he.children = se;
      else if (1 < ye) {
        Re = Array(ye);
        for (var Ye = 0; Ye < ye; Ye++) Re[Ye] = arguments[Ye + 2];
        he.children = Re;
      }
      return {
        $$typeof: i,
        type: E.type,
        key: me,
        ref: Ee,
        props: he,
        _owner: De,
      };
    }),
    (we.createContext = function (E) {
      return (
        (E = {
          $$typeof: h,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (E.Provider = { $$typeof: d, _context: E }),
        (E.Consumer = E)
      );
    }),
    (we.createElement = ie),
    (we.createFactory = function (E) {
      var F = ie.bind(null, E);
      return (F.type = E), F;
    }),
    (we.createRef = function () {
      return { current: null };
    }),
    (we.forwardRef = function (E) {
      return { $$typeof: v, render: E };
    }),
    (we.isValidElement = Ce),
    (we.lazy = function (E) {
      return { $$typeof: D, _payload: { _status: -1, _result: E }, _init: Ge };
    }),
    (we.memo = function (E, F) {
      return { $$typeof: S, type: E, compare: F === void 0 ? null : F };
    }),
    (we.startTransition = function (E) {
      var F = V.transition;
      V.transition = {};
      try {
        E();
      } finally {
        V.transition = F;
      }
    }),
    (we.unstable_act = Q),
    (we.useCallback = function (E, F) {
      return Ne.current.useCallback(E, F);
    }),
    (we.useContext = function (E) {
      return Ne.current.useContext(E);
    }),
    (we.useDebugValue = function () {}),
    (we.useDeferredValue = function (E) {
      return Ne.current.useDeferredValue(E);
    }),
    (we.useEffect = function (E, F) {
      return Ne.current.useEffect(E, F);
    }),
    (we.useId = function () {
      return Ne.current.useId();
    }),
    (we.useImperativeHandle = function (E, F, se) {
      return Ne.current.useImperativeHandle(E, F, se);
    }),
    (we.useInsertionEffect = function (E, F) {
      return Ne.current.useInsertionEffect(E, F);
    }),
    (we.useLayoutEffect = function (E, F) {
      return Ne.current.useLayoutEffect(E, F);
    }),
    (we.useMemo = function (E, F) {
      return Ne.current.useMemo(E, F);
    }),
    (we.useReducer = function (E, F, se) {
      return Ne.current.useReducer(E, F, se);
    }),
    (we.useRef = function (E) {
      return Ne.current.useRef(E);
    }),
    (we.useState = function (E) {
      return Ne.current.useState(E);
    }),
    (we.useSyncExternalStore = function (E, F, se) {
      return Ne.current.useSyncExternalStore(E, F, se);
    }),
    (we.useTransition = function () {
      return Ne.current.useTransition();
    }),
    (we.version = "18.3.1"),
    we
  );
}
var Ff;
function uc() {
  return Ff || ((Ff = 1), (Bu.exports = cp())), Bu.exports;
}
var T = uc();
const dp = oc(T),
  gm = fp({ __proto__: null, default: dp }, [T]);
var Vu = { exports: {} },
  Et = {},
  Wu = { exports: {} },
  Qu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Of;
function pp() {
  return (
    Of ||
      ((Of = 1),
      (function (i) {
        function u(V, re) {
          var Q = V.length;
          V.push(re);
          e: for (; 0 < Q; ) {
            var E = (Q - 1) >>> 1,
              F = V[E];
            if (0 < f(F, re)) (V[E] = re), (V[Q] = F), (Q = E);
            else break e;
          }
        }
        function a(V) {
          return V.length === 0 ? null : V[0];
        }
        function c(V) {
          if (V.length === 0) return null;
          var re = V[0],
            Q = V.pop();
          if (Q !== re) {
            V[0] = Q;
            e: for (var E = 0, F = V.length, se = F >>> 1; E < se; ) {
              var he = 2 * (E + 1) - 1,
                me = V[he],
                Ee = he + 1,
                De = V[Ee];
              if (0 > f(me, Q))
                Ee < F && 0 > f(De, me)
                  ? ((V[E] = De), (V[Ee] = Q), (E = Ee))
                  : ((V[E] = me), (V[he] = Q), (E = he));
              else if (Ee < F && 0 > f(De, Q))
                (V[E] = De), (V[Ee] = Q), (E = Ee);
              else break e;
            }
          }
          return re;
        }
        function f(V, re) {
          var Q = V.sortIndex - re.sortIndex;
          return Q !== 0 ? Q : V.id - re.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var d = performance;
          i.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            v = h.now();
          i.unstable_now = function () {
            return h.now() - v;
          };
        }
        var g = [],
          S = [],
          D = 1,
          O = null,
          L = 3,
          N = !1,
          z = !1,
          $ = !1,
          H = typeof setTimeout == "function" ? setTimeout : null,
          M = typeof clearTimeout == "function" ? clearTimeout : null,
          b = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function J(V) {
          for (var re = a(S); re !== null; ) {
            if (re.callback === null) c(S);
            else if (re.startTime <= V)
              c(S), (re.sortIndex = re.expirationTime), u(g, re);
            else break;
            re = a(S);
          }
        }
        function ae(V) {
          if ((($ = !1), J(V), !z))
            if (a(g) !== null) (z = !0), Ge(C);
            else {
              var re = a(S);
              re !== null && Ne(ae, re.startTime - V);
            }
        }
        function C(V, re) {
          (z = !1), $ && (($ = !1), M(ie), (ie = -1)), (N = !0);
          var Q = L;
          try {
            for (
              J(re), O = a(g);
              O !== null && (!(O.expirationTime > re) || (V && !Ke()));

            ) {
              var E = O.callback;
              if (typeof E == "function") {
                (O.callback = null), (L = O.priorityLevel);
                var F = E(O.expirationTime <= re);
                (re = i.unstable_now()),
                  typeof F == "function"
                    ? (O.callback = F)
                    : O === a(g) && c(g),
                  J(re);
              } else c(g);
              O = a(g);
            }
            if (O !== null) var se = !0;
            else {
              var he = a(S);
              he !== null && Ne(ae, he.startTime - re), (se = !1);
            }
            return se;
          } finally {
            (O = null), (L = Q), (N = !1);
          }
        }
        var le = !1,
          pe = null,
          ie = -1,
          ge = 5,
          Ce = -1;
        function Ke() {
          return !(i.unstable_now() - Ce < ge);
        }
        function rt() {
          if (pe !== null) {
            var V = i.unstable_now();
            Ce = V;
            var re = !0;
            try {
              re = pe(!0, V);
            } finally {
              re ? We() : ((le = !1), (pe = null));
            }
          } else le = !1;
        }
        var We;
        if (typeof b == "function")
          We = function () {
            b(rt);
          };
        else if (typeof MessageChannel < "u") {
          var ut = new MessageChannel(),
            _e = ut.port2;
          (ut.port1.onmessage = rt),
            (We = function () {
              _e.postMessage(null);
            });
        } else
          We = function () {
            H(rt, 0);
          };
        function Ge(V) {
          (pe = V), le || ((le = !0), We());
        }
        function Ne(V, re) {
          ie = H(function () {
            V(i.unstable_now());
          }, re);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (V) {
            V.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            z || N || ((z = !0), Ge(C));
          }),
          (i.unstable_forceFrameRate = function (V) {
            0 > V || 125 < V
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ge = 0 < V ? Math.floor(1e3 / V) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return L;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return a(g);
          }),
          (i.unstable_next = function (V) {
            switch (L) {
              case 1:
              case 2:
              case 3:
                var re = 3;
                break;
              default:
                re = L;
            }
            var Q = L;
            L = re;
            try {
              return V();
            } finally {
              L = Q;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (V, re) {
            switch (V) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                V = 3;
            }
            var Q = L;
            L = V;
            try {
              return re();
            } finally {
              L = Q;
            }
          }),
          (i.unstable_scheduleCallback = function (V, re, Q) {
            var E = i.unstable_now();
            switch (
              (typeof Q == "object" && Q !== null
                ? ((Q = Q.delay),
                  (Q = typeof Q == "number" && 0 < Q ? E + Q : E))
                : (Q = E),
              V)
            ) {
              case 1:
                var F = -1;
                break;
              case 2:
                F = 250;
                break;
              case 5:
                F = 1073741823;
                break;
              case 4:
                F = 1e4;
                break;
              default:
                F = 5e3;
            }
            return (
              (F = Q + F),
              (V = {
                id: D++,
                callback: re,
                priorityLevel: V,
                startTime: Q,
                expirationTime: F,
                sortIndex: -1,
              }),
              Q > E
                ? ((V.sortIndex = Q),
                  u(S, V),
                  a(g) === null &&
                    V === a(S) &&
                    ($ ? (M(ie), (ie = -1)) : ($ = !0), Ne(ae, Q - E)))
                : ((V.sortIndex = F), u(g, V), z || N || ((z = !0), Ge(C))),
              V
            );
          }),
          (i.unstable_shouldYield = Ke),
          (i.unstable_wrapCallback = function (V) {
            var re = L;
            return function () {
              var Q = L;
              L = re;
              try {
                return V.apply(this, arguments);
              } finally {
                L = Q;
              }
            };
          });
      })(Qu)),
    Qu
  );
}
var If;
function hp() {
  return If || ((If = 1), (Wu.exports = pp())), Wu.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uf;
function mp() {
  if (Uf) return Et;
  Uf = 1;
  var i = uc(),
    u = hp();
  function a(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var c = new Set(),
    f = {};
  function d(e, t) {
    h(e, t), h(e + "Capture", t);
  }
  function h(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var v = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    g = Object.prototype.hasOwnProperty,
    S =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    D = {},
    O = {};
  function L(e) {
    return g.call(O, e)
      ? !0
      : g.call(D, e)
      ? !1
      : S.test(e)
      ? (O[e] = !0)
      : ((D[e] = !0), !1);
  }
  function N(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function z(e, t, n, r) {
    if (t === null || typeof t > "u" || N(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function $(e, t, n, r, l, o, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = s);
  }
  var H = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      H[e] = new $(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      H[t] = new $(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      H[e] = new $(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      H[e] = new $(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        H[e] = new $(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      H[e] = new $(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      H[e] = new $(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      H[e] = new $(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      H[e] = new $(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var M = /[\-:]([a-z])/g;
  function b(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clipRule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fillRule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(M, b);
      H[t] = new $(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(M, b);
        H[t] = new $(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(M, b);
      H[t] = new $(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      H[e] = new $(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (H.xlinkHref = new $(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      H[e] = new $(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function J(e, t, n, r) {
    var l = H.hasOwnProperty(t) ? H[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (z(t, n, l, r) && (n = null),
      r || l === null
        ? L(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ae = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    C = Symbol.for("react.element"),
    le = Symbol.for("react.portal"),
    pe = Symbol.for("react.fragment"),
    ie = Symbol.for("react.strict_mode"),
    ge = Symbol.for("react.profiler"),
    Ce = Symbol.for("react.provider"),
    Ke = Symbol.for("react.context"),
    rt = Symbol.for("react.forward_ref"),
    We = Symbol.for("react.suspense"),
    ut = Symbol.for("react.suspense_list"),
    _e = Symbol.for("react.memo"),
    Ge = Symbol.for("react.lazy"),
    Ne = Symbol.for("react.offscreen"),
    V = Symbol.iterator;
  function re(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (V && e[V]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Q = Object.assign,
    E;
  function F(e) {
    if (E === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        E = (t && t[1]) || "";
      }
    return (
      `
` +
      E +
      e
    );
  }
  var se = !1;
  function he(e, t) {
    if (!e || se) return "";
    se = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (P) {
            var r = P;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (P) {
            r = P;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (P) {
          r = P;
        }
        e();
      }
    } catch (P) {
      if (P && r && typeof P.stack == "string") {
        for (
          var l = P.stack.split(`
`),
            o = r.stack.split(`
`),
            s = l.length - 1,
            p = o.length - 1;
          1 <= s && 0 <= p && l[s] !== o[p];

        )
          p--;
        for (; 1 <= s && 0 <= p; s--, p--)
          if (l[s] !== o[p]) {
            if (s !== 1 || p !== 1)
              do
                if ((s--, p--, 0 > p || l[s] !== o[p])) {
                  var m =
                    `
` + l[s].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      m.includes("<anonymous>") &&
                      (m = m.replace("<anonymous>", e.displayName)),
                    m
                  );
                }
              while (1 <= s && 0 <= p);
            break;
          }
      }
    } finally {
      (se = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? F(e) : "";
  }
  function me(e) {
    switch (e.tag) {
      case 5:
        return F(e.type);
      case 16:
        return F("Lazy");
      case 13:
        return F("Suspense");
      case 19:
        return F("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = he(e.type, !1)), e;
      case 11:
        return (e = he(e.type.render, !1)), e;
      case 1:
        return (e = he(e.type, !0)), e;
      default:
        return "";
    }
  }
  function Ee(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case pe:
        return "Fragment";
      case le:
        return "Portal";
      case ge:
        return "Profiler";
      case ie:
        return "StrictMode";
      case We:
        return "Suspense";
      case ut:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ke:
          return (e.displayName || "Context") + ".Consumer";
        case Ce:
          return (e._context.displayName || "Context") + ".Provider";
        case rt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case _e:
          return (
            (t = e.displayName || null), t !== null ? t : Ee(e.type) || "Memo"
          );
        case Ge:
          (t = e._payload), (e = e._init);
          try {
            return Ee(e(t));
          } catch {}
      }
    return null;
  }
  function De(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ee(t);
      case 8:
        return t === ie ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Re(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ye(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ye(e) {
    var t = ye(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (s) {
            (r = "" + s), o.call(this, s);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (s) {
            r = "" + s;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Qn(e) {
    e._valueTracker || (e._valueTracker = Ye(e));
  }
  function jl(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ye(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Tt(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Vr(e, t) {
    var n = t.checked;
    return Q({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function $l(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Re(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Wr(e, t) {
    (t = t.checked), t != null && J(e, "checked", t, !1);
  }
  function Qr(e, t) {
    Wr(e, t);
    var n = Re(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Kr(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Kr(e, t.type, Re(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Al(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Kr(e, t, n) {
    (t !== "number" || Tt(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Kn = Array.isArray;
  function ht(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Re(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function rn(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return Q({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Yr(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(a(92));
        if (Kn(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Re(n) };
  }
  function hr(e, t) {
    var n = Re(t.value),
      r = Re(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function $t(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Nt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function mr(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Nt(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var yn,
    Hl = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          yn = yn || document.createElement("div"),
            yn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = yn.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function mt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var vn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Bl = ["Webkit", "ms", "Moz", "O"];
  Object.keys(vn).forEach(function (e) {
    Bl.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (vn[t] = vn[e]);
    });
  });
  function Xr(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (vn.hasOwnProperty(e) && vn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Vl(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Xr(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var Wl = Q(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function gn(e, t) {
    if (t) {
      if (Wl[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function yr(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Yn = null;
  function Gr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var vr = null,
    wn = null,
    ln = null;
  function Xn(e) {
    if ((e = hl(e))) {
      if (typeof vr != "function") throw Error(a(280));
      var t = e.stateNode;
      t && ((t = ci(t)), vr(e.stateNode, e.type, t));
    }
  }
  function Gn(e) {
    wn ? (ln ? ln.push(e) : (ln = [e])) : (wn = e);
  }
  function Ql() {
    if (wn) {
      var e = wn,
        t = ln;
      if (((ln = wn = null), Xn(e), t)) for (e = 0; e < t.length; e++) Xn(t[e]);
    }
  }
  function Kl(e, t) {
    return e(t);
  }
  function y() {}
  var k = !1;
  function _(e, t, n) {
    if (k) return e(t, n);
    k = !0;
    try {
      return Kl(e, t, n);
    } finally {
      (k = !1), (wn !== null || ln !== null) && (y(), Ql());
    }
  }
  function U(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ci(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var K = !1;
  if (v)
    try {
      var te = {};
      Object.defineProperty(te, "passive", {
        get: function () {
          K = !0;
        },
      }),
        window.addEventListener("test", te, te),
        window.removeEventListener("test", te, te);
    } catch {
      K = !1;
    }
  function fe(e, t, n, r, l, o, s, p, m) {
    var P = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, P);
    } catch (j) {
      this.onError(j);
    }
  }
  var X = !1,
    q = null,
    W = !1,
    ce = null,
    ve = {
      onError: function (e) {
        (X = !0), (q = e);
      },
    };
  function ze(e, t, n, r, l, o, s, p, m) {
    (X = !1), (q = null), fe.apply(ve, arguments);
  }
  function Je(e, t, n, r, l, o, s, p, m) {
    if ((ze.apply(this, arguments), X)) {
      if (X) {
        var P = q;
        (X = !1), (q = null);
      } else throw Error(a(198));
      W || ((W = !0), (ce = P));
    }
  }
  function Pe(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Me(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Be(e) {
    if (Pe(e) !== e) throw Error(a(188));
  }
  function Sn(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Pe(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return Be(l), e;
          if (o === r) return Be(l), t;
          o = o.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) (n = l), (r = o);
      else {
        for (var s = !1, p = l.child; p; ) {
          if (p === n) {
            (s = !0), (n = l), (r = o);
            break;
          }
          if (p === r) {
            (s = !0), (r = l), (n = o);
            break;
          }
          p = p.sibling;
        }
        if (!s) {
          for (p = o.child; p; ) {
            if (p === n) {
              (s = !0), (n = o), (r = l);
              break;
            }
            if (p === r) {
              (s = !0), (r = o), (n = l);
              break;
            }
            p = p.sibling;
          }
          if (!s) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function En(e) {
    return (e = Sn(e)), e !== null ? Dt(e) : null;
  }
  function Dt(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Dt(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var kt = u.unstable_scheduleCallback,
    gr = u.unstable_cancelCallback,
    Jn = u.unstable_shouldYield,
    on = u.unstable_requestPaint,
    Fe = u.unstable_now,
    wr = u.unstable_getCurrentPriorityLevel,
    Le = u.unstable_ImmediatePriority,
    Ze = u.unstable_UserBlockingPriority,
    un = u.unstable_NormalPriority,
    Zn = u.unstable_LowPriority,
    $e = u.unstable_IdlePriority,
    At = null,
    xt = null;
  function uo(e) {
    if (xt && typeof xt.onCommitFiberRoot == "function")
      try {
        xt.onCommitFiberRoot(At, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Ht = Math.clz32 ? Math.clz32 : Tc,
    Lc = Math.log,
    _c = Math.LN2;
  function Tc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Lc(e) / _c) | 0)) | 0;
  }
  var Yl = 64,
    Xl = 4194304;
  function Jr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Gl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      s = n & 268435455;
    if (s !== 0) {
      var p = s & ~l;
      p !== 0 ? (r = Jr(p)) : ((o &= s), o !== 0 && (r = Jr(o)));
    } else (s = n & ~l), s !== 0 ? (r = Jr(s)) : o !== 0 && (r = Jr(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - Ht(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function Nc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Dc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var s = 31 - Ht(o),
        p = 1 << s,
        m = l[s];
      m === -1
        ? (!(p & n) || p & r) && (l[s] = Nc(p, t))
        : m <= t && (e.expiredLanes |= p),
        (o &= ~p);
    }
  }
  function ao(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function sa() {
    var e = Yl;
    return (Yl <<= 1), !(Yl & 4194240) && (Yl = 64), e;
  }
  function so(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Zr(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Ht(t)),
      (e[t] = n);
  }
  function Mc(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Ht(n),
        o = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
  }
  function fo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Ht(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var Te = 0;
  function fa(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var ca,
    co,
    da,
    pa,
    ha,
    po = !1,
    Jl = [],
    kn = null,
    xn = null,
    Cn = null,
    qr = new Map(),
    br = new Map(),
    Rn = [],
    zc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function ma(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        kn = null;
        break;
      case "dragenter":
      case "dragleave":
        xn = null;
        break;
      case "mouseover":
      case "mouseout":
        Cn = null;
        break;
      case "pointerover":
      case "pointerout":
        qr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        br.delete(t.pointerId);
    }
  }
  function el(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = hl(t)), t !== null && co(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Fc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (kn = el(kn, e, t, n, r, l)), !0;
      case "dragenter":
        return (xn = el(xn, e, t, n, r, l)), !0;
      case "mouseover":
        return (Cn = el(Cn, e, t, n, r, l)), !0;
      case "pointerover":
        var o = l.pointerId;
        return qr.set(o, el(qr.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (o = l.pointerId), br.set(o, el(br.get(o) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function ya(e) {
    var t = qn(e.target);
    if (t !== null) {
      var n = Pe(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Me(n)), t !== null)) {
            (e.blockedOn = t),
              ha(e.priority, function () {
                da(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Zl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = mo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Yn = r), n.target.dispatchEvent(r), (Yn = null);
      } else return (t = hl(n)), t !== null && co(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function va(e, t, n) {
    Zl(e) && n.delete(t);
  }
  function Oc() {
    (po = !1),
      kn !== null && Zl(kn) && (kn = null),
      xn !== null && Zl(xn) && (xn = null),
      Cn !== null && Zl(Cn) && (Cn = null),
      qr.forEach(va),
      br.forEach(va);
  }
  function tl(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      po ||
        ((po = !0),
        u.unstable_scheduleCallback(u.unstable_NormalPriority, Oc)));
  }
  function nl(e) {
    function t(l) {
      return tl(l, e);
    }
    if (0 < Jl.length) {
      tl(Jl[0], e);
      for (var n = 1; n < Jl.length; n++) {
        var r = Jl[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      kn !== null && tl(kn, e),
        xn !== null && tl(xn, e),
        Cn !== null && tl(Cn, e),
        qr.forEach(t),
        br.forEach(t),
        n = 0;
      n < Rn.length;
      n++
    )
      (r = Rn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rn.length && ((n = Rn[0]), n.blockedOn === null); )
      ya(n), n.blockedOn === null && Rn.shift();
  }
  var Sr = ae.ReactCurrentBatchConfig,
    ql = !0;
  function Ic(e, t, n, r) {
    var l = Te,
      o = Sr.transition;
    Sr.transition = null;
    try {
      (Te = 1), ho(e, t, n, r);
    } finally {
      (Te = l), (Sr.transition = o);
    }
  }
  function Uc(e, t, n, r) {
    var l = Te,
      o = Sr.transition;
    Sr.transition = null;
    try {
      (Te = 4), ho(e, t, n, r);
    } finally {
      (Te = l), (Sr.transition = o);
    }
  }
  function ho(e, t, n, r) {
    if (ql) {
      var l = mo(e, t, n, r);
      if (l === null) Mo(e, t, r, bl, n), ma(e, r);
      else if (Fc(l, e, t, n, r)) r.stopPropagation();
      else if ((ma(e, r), t & 4 && -1 < zc.indexOf(e))) {
        for (; l !== null; ) {
          var o = hl(l);
          if (
            (o !== null && ca(o),
            (o = mo(e, t, n, r)),
            o === null && Mo(e, t, r, bl, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Mo(e, t, r, null, n);
    }
  }
  var bl = null;
  function mo(e, t, n, r) {
    if (((bl = null), (e = Gr(r)), (e = qn(e)), e !== null))
      if (((t = Pe(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Me(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (bl = e), null;
  }
  function ga(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (wr()) {
          case Le:
            return 1;
          case Ze:
            return 4;
          case un:
          case Zn:
            return 16;
          case $e:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Pn = null,
    yo = null,
    ei = null;
  function wa() {
    if (ei) return ei;
    var e,
      t = yo,
      n = t.length,
      r,
      l = "value" in Pn ? Pn.value : Pn.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === l[o - r]; r++);
    return (ei = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function ti(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ni() {
    return !0;
  }
  function Sa() {
    return !1;
  }
  function Ct(e) {
    function t(n, r, l, o, s) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = s),
        (this.currentTarget = null);
      for (var p in e)
        e.hasOwnProperty(p) && ((n = e[p]), (this[p] = n ? n(o) : o[p]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? ni
          : Sa),
        (this.isPropagationStopped = Sa),
        this
      );
    }
    return (
      Q(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = ni));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = ni));
        },
        persist: function () {},
        isPersistent: ni,
      }),
      t
    );
  }
  var Er = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    vo = Ct(Er),
    rl = Q({}, Er, { view: 0, detail: 0 }),
    jc = Ct(rl),
    go,
    wo,
    ll,
    ri = Q({}, rl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Eo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ll &&
              (ll && e.type === "mousemove"
                ? ((go = e.screenX - ll.screenX), (wo = e.screenY - ll.screenY))
                : (wo = go = 0),
              (ll = e)),
            go);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : wo;
      },
    }),
    Ea = Ct(ri),
    $c = Q({}, ri, { dataTransfer: 0 }),
    Ac = Ct($c),
    Hc = Q({}, rl, { relatedTarget: 0 }),
    So = Ct(Hc),
    Bc = Q({}, Er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Vc = Ct(Bc),
    Wc = Q({}, Er, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Qc = Ct(Wc),
    Kc = Q({}, Er, { data: 0 }),
    ka = Ct(Kc),
    Yc = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Xc = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Gc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Jc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Gc[e])
      ? !!t[e]
      : !1;
  }
  function Eo() {
    return Jc;
  }
  var Zc = Q({}, rl, {
      key: function (e) {
        if (e.key) {
          var t = Yc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ti(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Xc[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Eo,
      charCode: function (e) {
        return e.type === "keypress" ? ti(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ti(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    qc = Ct(Zc),
    bc = Q({}, ri, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    xa = Ct(bc),
    ed = Q({}, rl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Eo,
    }),
    td = Ct(ed),
    nd = Q({}, Er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    rd = Ct(nd),
    ld = Q({}, ri, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    id = Ct(ld),
    od = [9, 13, 27, 32],
    ko = v && "CompositionEvent" in window,
    il = null;
  v && "documentMode" in document && (il = document.documentMode);
  var ud = v && "TextEvent" in window && !il,
    Ca = v && (!ko || (il && 8 < il && 11 >= il)),
    Ra = " ",
    Pa = !1;
  function La(e, t) {
    switch (e) {
      case "keyup":
        return od.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function _a(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var kr = !1;
  function ad(e, t) {
    switch (e) {
      case "compositionend":
        return _a(t);
      case "keypress":
        return t.which !== 32 ? null : ((Pa = !0), Ra);
      case "textInput":
        return (e = t.data), e === Ra && Pa ? null : e;
      default:
        return null;
    }
  }
  function sd(e, t) {
    if (kr)
      return e === "compositionend" || (!ko && La(e, t))
        ? ((e = wa()), (ei = yo = Pn = null), (kr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ca && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var fd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ta(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!fd[e.type] : t === "textarea";
  }
  function Na(e, t, n, r) {
    Gn(r),
      (t = ai(t, "onChange")),
      0 < t.length &&
        ((n = new vo("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var ol = null,
    ul = null;
  function cd(e) {
    Xa(e, 0);
  }
  function li(e) {
    var t = Lr(e);
    if (jl(t)) return e;
  }
  function dd(e, t) {
    if (e === "change") return t;
  }
  var Da = !1;
  if (v) {
    var xo;
    if (v) {
      var Co = "oninput" in document;
      if (!Co) {
        var Ma = document.createElement("div");
        Ma.setAttribute("oninput", "return;"),
          (Co = typeof Ma.oninput == "function");
      }
      xo = Co;
    } else xo = !1;
    Da = xo && (!document.documentMode || 9 < document.documentMode);
  }
  function za() {
    ol && (ol.detachEvent("onpropertychange", Fa), (ul = ol = null));
  }
  function Fa(e) {
    if (e.propertyName === "value" && li(ul)) {
      var t = [];
      Na(t, ul, e, Gr(e)), _(cd, t);
    }
  }
  function pd(e, t, n) {
    e === "focusin"
      ? (za(), (ol = t), (ul = n), ol.attachEvent("onpropertychange", Fa))
      : e === "focusout" && za();
  }
  function hd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return li(ul);
  }
  function md(e, t) {
    if (e === "click") return li(t);
  }
  function yd(e, t) {
    if (e === "input" || e === "change") return li(t);
  }
  function vd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Bt = typeof Object.is == "function" ? Object.is : vd;
  function al(e, t) {
    if (Bt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!g.call(t, l) || !Bt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Oa(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ia(e, t) {
    var n = Oa(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Oa(n);
    }
  }
  function Ua(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Ua(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function ja() {
    for (var e = window, t = Tt(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Tt(e.document);
    }
    return t;
  }
  function Ro(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function gd(e) {
    var t = ja(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Ua(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Ro(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          (r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = Ia(n, o));
          var s = Ia(n, r);
          l &&
            s &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== s.node ||
              e.focusOffset !== s.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(s.node, s.offset))
              : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var wd = v && "documentMode" in document && 11 >= document.documentMode,
    xr = null,
    Po = null,
    sl = null,
    Lo = !1;
  function $a(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Lo ||
      xr == null ||
      xr !== Tt(r) ||
      ((r = xr),
      "selectionStart" in r && Ro(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (sl && al(sl, r)) ||
        ((sl = r),
        (r = ai(Po, "onSelect")),
        0 < r.length &&
          ((t = new vo("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = xr))));
  }
  function ii(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Cr = {
      animationend: ii("Animation", "AnimationEnd"),
      animationiteration: ii("Animation", "AnimationIteration"),
      animationstart: ii("Animation", "AnimationStart"),
      transitionend: ii("Transition", "TransitionEnd"),
    },
    _o = {},
    Aa = {};
  v &&
    ((Aa = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Cr.animationend.animation,
      delete Cr.animationiteration.animation,
      delete Cr.animationstart.animation),
    "TransitionEvent" in window || delete Cr.transitionend.transition);
  function oi(e) {
    if (_o[e]) return _o[e];
    if (!Cr[e]) return e;
    var t = Cr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Aa) return (_o[e] = t[n]);
    return e;
  }
  var Ha = oi("animationend"),
    Ba = oi("animationiteration"),
    Va = oi("animationstart"),
    Wa = oi("transitionend"),
    Qa = new Map(),
    Ka =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Ln(e, t) {
    Qa.set(e, t), d(t, [e]);
  }
  for (var To = 0; To < Ka.length; To++) {
    var No = Ka[To],
      Sd = No.toLowerCase(),
      Ed = No[0].toUpperCase() + No.slice(1);
    Ln(Sd, "on" + Ed);
  }
  Ln(Ha, "onAnimationEnd"),
    Ln(Ba, "onAnimationIteration"),
    Ln(Va, "onAnimationStart"),
    Ln("dblclick", "onDoubleClick"),
    Ln("focusin", "onFocus"),
    Ln("focusout", "onBlur"),
    Ln(Wa, "onTransitionEnd"),
    h("onMouseEnter", ["mouseout", "mouseover"]),
    h("onMouseLeave", ["mouseout", "mouseover"]),
    h("onPointerEnter", ["pointerout", "pointerover"]),
    h("onPointerLeave", ["pointerout", "pointerover"]),
    d(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    d(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    d(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var fl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    kd = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(fl)
    );
  function Ya(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Je(r, t, void 0, e), (e.currentTarget = null);
  }
  function Xa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var s = r.length - 1; 0 <= s; s--) {
            var p = r[s],
              m = p.instance,
              P = p.currentTarget;
            if (((p = p.listener), m !== o && l.isPropagationStopped()))
              break e;
            Ya(l, p, P), (o = m);
          }
        else
          for (s = 0; s < r.length; s++) {
            if (
              ((p = r[s]),
              (m = p.instance),
              (P = p.currentTarget),
              (p = p.listener),
              m !== o && l.isPropagationStopped())
            )
              break e;
            Ya(l, p, P), (o = m);
          }
      }
    }
    if (W) throw ((e = ce), (W = !1), (ce = null), e);
  }
  function Ie(e, t) {
    var n = t[jo];
    n === void 0 && (n = t[jo] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ga(t, e, 2, !1), n.add(r));
  }
  function Do(e, t, n) {
    var r = 0;
    t && (r |= 4), Ga(n, e, r, t);
  }
  var ui = "_reactListening" + Math.random().toString(36).slice(2);
  function cl(e) {
    if (!e[ui]) {
      (e[ui] = !0),
        c.forEach(function (n) {
          n !== "selectionchange" && (kd.has(n) || Do(n, !1, e), Do(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ui] || ((t[ui] = !0), Do("selectionchange", !1, t));
    }
  }
  function Ga(e, t, n, r) {
    switch (ga(t)) {
      case 1:
        var l = Ic;
        break;
      case 4:
        l = Uc;
        break;
      default:
        l = ho;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !K ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function Mo(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
          var p = r.stateNode.containerInfo;
          if (p === l || (p.nodeType === 8 && p.parentNode === l)) break;
          if (s === 4)
            for (s = r.return; s !== null; ) {
              var m = s.tag;
              if (
                (m === 3 || m === 4) &&
                ((m = s.stateNode.containerInfo),
                m === l || (m.nodeType === 8 && m.parentNode === l))
              )
                return;
              s = s.return;
            }
          for (; p !== null; ) {
            if (((s = qn(p)), s === null)) return;
            if (((m = s.tag), m === 5 || m === 6)) {
              r = o = s;
              continue e;
            }
            p = p.parentNode;
          }
        }
        r = r.return;
      }
    _(function () {
      var P = o,
        j = Gr(n),
        A = [];
      e: {
        var I = Qa.get(e);
        if (I !== void 0) {
          var Y = vo,
            Z = e;
          switch (e) {
            case "keypress":
              if (ti(n) === 0) break e;
            case "keydown":
            case "keyup":
              Y = qc;
              break;
            case "focusin":
              (Z = "focus"), (Y = So);
              break;
            case "focusout":
              (Z = "blur"), (Y = So);
              break;
            case "beforeblur":
            case "afterblur":
              Y = So;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Y = Ea;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = Ac;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = td;
              break;
            case Ha:
            case Ba:
            case Va:
              Y = Vc;
              break;
            case Wa:
              Y = rd;
              break;
            case "scroll":
              Y = jc;
              break;
            case "wheel":
              Y = id;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = Qc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = xa;
          }
          var ee = (t & 4) !== 0,
            Qe = !ee && e === "scroll",
            x = ee ? (I !== null ? I + "Capture" : null) : I;
          ee = [];
          for (var w = P, R; w !== null; ) {
            R = w;
            var B = R.stateNode;
            if (
              (R.tag === 5 &&
                B !== null &&
                ((R = B),
                x !== null &&
                  ((B = U(w, x)), B != null && ee.push(dl(w, B, R)))),
              Qe)
            )
              break;
            w = w.return;
          }
          0 < ee.length &&
            ((I = new Y(I, Z, null, n, j)),
            A.push({ event: I, listeners: ee }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((I = e === "mouseover" || e === "pointerover"),
            (Y = e === "mouseout" || e === "pointerout"),
            I &&
              n !== Yn &&
              (Z = n.relatedTarget || n.fromElement) &&
              (qn(Z) || Z[an]))
          )
            break e;
          if (
            (Y || I) &&
            ((I =
              j.window === j
                ? j
                : (I = j.ownerDocument)
                ? I.defaultView || I.parentWindow
                : window),
            Y
              ? ((Z = n.relatedTarget || n.toElement),
                (Y = P),
                (Z = Z ? qn(Z) : null),
                Z !== null &&
                  ((Qe = Pe(Z)), Z !== Qe || (Z.tag !== 5 && Z.tag !== 6)) &&
                  (Z = null))
              : ((Y = null), (Z = P)),
            Y !== Z)
          ) {
            if (
              ((ee = Ea),
              (B = "onMouseLeave"),
              (x = "onMouseEnter"),
              (w = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ee = xa),
                (B = "onPointerLeave"),
                (x = "onPointerEnter"),
                (w = "pointer")),
              (Qe = Y == null ? I : Lr(Y)),
              (R = Z == null ? I : Lr(Z)),
              (I = new ee(B, w + "leave", Y, n, j)),
              (I.target = Qe),
              (I.relatedTarget = R),
              (B = null),
              qn(j) === P &&
                ((ee = new ee(x, w + "enter", Z, n, j)),
                (ee.target = R),
                (ee.relatedTarget = Qe),
                (B = ee)),
              (Qe = B),
              Y && Z)
            )
              t: {
                for (ee = Y, x = Z, w = 0, R = ee; R; R = Rr(R)) w++;
                for (R = 0, B = x; B; B = Rr(B)) R++;
                for (; 0 < w - R; ) (ee = Rr(ee)), w--;
                for (; 0 < R - w; ) (x = Rr(x)), R--;
                for (; w--; ) {
                  if (ee === x || (x !== null && ee === x.alternate)) break t;
                  (ee = Rr(ee)), (x = Rr(x));
                }
                ee = null;
              }
            else ee = null;
            Y !== null && Ja(A, I, Y, ee, !1),
              Z !== null && Qe !== null && Ja(A, Qe, Z, ee, !0);
          }
        }
        e: {
          if (
            ((I = P ? Lr(P) : window),
            (Y = I.nodeName && I.nodeName.toLowerCase()),
            Y === "select" || (Y === "input" && I.type === "file"))
          )
            var ne = dd;
          else if (Ta(I))
            if (Da) ne = yd;
            else {
              ne = hd;
              var oe = pd;
            }
          else
            (Y = I.nodeName) &&
              Y.toLowerCase() === "input" &&
              (I.type === "checkbox" || I.type === "radio") &&
              (ne = md);
          if (ne && (ne = ne(e, P))) {
            Na(A, ne, n, j);
            break e;
          }
          oe && oe(e, I, P),
            e === "focusout" &&
              (oe = I._wrapperState) &&
              oe.controlled &&
              I.type === "number" &&
              Kr(I, "number", I.value);
        }
        switch (((oe = P ? Lr(P) : window), e)) {
          case "focusin":
            (Ta(oe) || oe.contentEditable === "true") &&
              ((xr = oe), (Po = P), (sl = null));
            break;
          case "focusout":
            sl = Po = xr = null;
            break;
          case "mousedown":
            Lo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Lo = !1), $a(A, n, j);
            break;
          case "selectionchange":
            if (wd) break;
          case "keydown":
          case "keyup":
            $a(A, n, j);
        }
        var ue;
        if (ko)
          e: {
            switch (e) {
              case "compositionstart":
                var de = "onCompositionStart";
                break e;
              case "compositionend":
                de = "onCompositionEnd";
                break e;
              case "compositionupdate":
                de = "onCompositionUpdate";
                break e;
            }
            de = void 0;
          }
        else
          kr
            ? La(e, n) && (de = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (de = "onCompositionStart");
        de &&
          (Ca &&
            n.locale !== "ko" &&
            (kr || de !== "onCompositionStart"
              ? de === "onCompositionEnd" && kr && (ue = wa())
              : ((Pn = j),
                (yo = "value" in Pn ? Pn.value : Pn.textContent),
                (kr = !0))),
          (oe = ai(P, de)),
          0 < oe.length &&
            ((de = new ka(de, e, null, n, j)),
            A.push({ event: de, listeners: oe }),
            ue
              ? (de.data = ue)
              : ((ue = _a(n)), ue !== null && (de.data = ue)))),
          (ue = ud ? ad(e, n) : sd(e, n)) &&
            ((P = ai(P, "onBeforeInput")),
            0 < P.length &&
              ((j = new ka("onBeforeInput", "beforeinput", null, n, j)),
              A.push({ event: j, listeners: P }),
              (j.data = ue)));
      }
      Xa(A, t);
    });
  }
  function dl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ai(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = U(e, n)),
        o != null && r.unshift(dl(e, o, l)),
        (o = U(e, t)),
        o != null && r.push(dl(e, o, l))),
        (e = e.return);
    }
    return r;
  }
  function Rr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ja(e, t, n, r, l) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
      var p = n,
        m = p.alternate,
        P = p.stateNode;
      if (m !== null && m === r) break;
      p.tag === 5 &&
        P !== null &&
        ((p = P),
        l
          ? ((m = U(n, o)), m != null && s.unshift(dl(n, m, p)))
          : l || ((m = U(n, o)), m != null && s.push(dl(n, m, p)))),
        (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var xd = /\r\n?/g,
    Cd = /\u0000|\uFFFD/g;
  function Za(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        xd,
        `
`
      )
      .replace(Cd, "");
  }
  function si(e, t, n) {
    if (((t = Za(t)), Za(e) !== t && n)) throw Error(a(425));
  }
  function fi() {}
  var zo = null,
    Fo = null;
  function Oo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Io = typeof setTimeout == "function" ? setTimeout : void 0,
    Rd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    qa = typeof Promise == "function" ? Promise : void 0,
    Pd =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof qa < "u"
        ? function (e) {
            return qa.resolve(null).then(e).catch(Ld);
          }
        : Io;
  function Ld(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Uo(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), nl(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    nl(t);
  }
  function _n(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function ba(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Pr = Math.random().toString(36).slice(2),
    Jt = "__reactFiber$" + Pr,
    pl = "__reactProps$" + Pr,
    an = "__reactContainer$" + Pr,
    jo = "__reactEvents$" + Pr,
    _d = "__reactListeners$" + Pr,
    Td = "__reactHandles$" + Pr;
  function qn(e) {
    var t = e[Jt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[an] || n[Jt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = ba(e); e !== null; ) {
            if ((n = e[Jt])) return n;
            e = ba(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function hl(e) {
    return (
      (e = e[Jt] || e[an]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Lr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function ci(e) {
    return e[pl] || null;
  }
  var $o = [],
    _r = -1;
  function Tn(e) {
    return { current: e };
  }
  function Ue(e) {
    0 > _r || ((e.current = $o[_r]), ($o[_r] = null), _r--);
  }
  function Oe(e, t) {
    _r++, ($o[_r] = e.current), (e.current = t);
  }
  var Nn = {},
    at = Tn(Nn),
    yt = Tn(!1),
    bn = Nn;
  function Tr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Nn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function vt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function di() {
    Ue(yt), Ue(at);
  }
  function es(e, t, n) {
    if (at.current !== Nn) throw Error(a(168));
    Oe(at, t), Oe(yt, n);
  }
  function ts(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(a(108, De(e) || "Unknown", l));
    return Q({}, n, r);
  }
  function pi(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Nn),
      (bn = at.current),
      Oe(at, e),
      Oe(yt, yt.current),
      !0
    );
  }
  function ns(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n
      ? ((e = ts(e, t, bn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Ue(yt),
        Ue(at),
        Oe(at, e))
      : Ue(yt),
      Oe(yt, n);
  }
  var sn = null,
    hi = !1,
    Ao = !1;
  function rs(e) {
    sn === null ? (sn = [e]) : sn.push(e);
  }
  function Nd(e) {
    (hi = !0), rs(e);
  }
  function Dn() {
    if (!Ao && sn !== null) {
      Ao = !0;
      var e = 0,
        t = Te;
      try {
        var n = sn;
        for (Te = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (sn = null), (hi = !1);
      } catch (l) {
        throw (sn !== null && (sn = sn.slice(e + 1)), kt(Le, Dn), l);
      } finally {
        (Te = t), (Ao = !1);
      }
    }
    return null;
  }
  var Nr = [],
    Dr = 0,
    mi = null,
    yi = 0,
    Mt = [],
    zt = 0,
    er = null,
    fn = 1,
    cn = "";
  function tr(e, t) {
    (Nr[Dr++] = yi), (Nr[Dr++] = mi), (mi = e), (yi = t);
  }
  function ls(e, t, n) {
    (Mt[zt++] = fn), (Mt[zt++] = cn), (Mt[zt++] = er), (er = e);
    var r = fn;
    e = cn;
    var l = 32 - Ht(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - Ht(t) + l;
    if (30 < o) {
      var s = l - (l % 5);
      (o = (r & ((1 << s) - 1)).toString(32)),
        (r >>= s),
        (l -= s),
        (fn = (1 << (32 - Ht(t) + l)) | (n << l) | r),
        (cn = o + e);
    } else (fn = (1 << o) | (n << l) | r), (cn = e);
  }
  function Ho(e) {
    e.return !== null && (tr(e, 1), ls(e, 1, 0));
  }
  function Bo(e) {
    for (; e === mi; )
      (mi = Nr[--Dr]), (Nr[Dr] = null), (yi = Nr[--Dr]), (Nr[Dr] = null);
    for (; e === er; )
      (er = Mt[--zt]),
        (Mt[zt] = null),
        (cn = Mt[--zt]),
        (Mt[zt] = null),
        (fn = Mt[--zt]),
        (Mt[zt] = null);
  }
  var Rt = null,
    Pt = null,
    je = !1,
    Vt = null;
  function is(e, t) {
    var n = Ut(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function os(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Rt = e), (Pt = _n(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Rt = e), (Pt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = er !== null ? { id: fn, overflow: cn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Ut(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Rt = e),
              (Pt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Vo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Wo(e) {
    if (je) {
      var t = Pt;
      if (t) {
        var n = t;
        if (!os(e, t)) {
          if (Vo(e)) throw Error(a(418));
          t = _n(n.nextSibling);
          var r = Rt;
          t && os(e, t)
            ? is(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (je = !1), (Rt = e));
        }
      } else {
        if (Vo(e)) throw Error(a(418));
        (e.flags = (e.flags & -4097) | 2), (je = !1), (Rt = e);
      }
    }
  }
  function us(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Rt = e;
  }
  function vi(e) {
    if (e !== Rt) return !1;
    if (!je) return us(e), (je = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Oo(e.type, e.memoizedProps))),
      t && (t = Pt))
    ) {
      if (Vo(e)) throw (as(), Error(a(418)));
      for (; t; ) is(e, t), (t = _n(t.nextSibling));
    }
    if ((us(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Pt = _n(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Pt = null;
      }
    } else Pt = Rt ? _n(e.stateNode.nextSibling) : null;
    return !0;
  }
  function as() {
    for (var e = Pt; e; ) e = _n(e.nextSibling);
  }
  function Mr() {
    (Pt = Rt = null), (je = !1);
  }
  function Qo(e) {
    Vt === null ? (Vt = [e]) : Vt.push(e);
  }
  var Dd = ae.ReactCurrentBatchConfig;
  function ml(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var l = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (s) {
              var p = l.refs;
              s === null ? delete p[o] : (p[o] = s);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function gi(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        a(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function ss(e) {
    var t = e._init;
    return t(e._payload);
  }
  function fs(e) {
    function t(x, w) {
      if (e) {
        var R = x.deletions;
        R === null ? ((x.deletions = [w]), (x.flags |= 16)) : R.push(w);
      }
    }
    function n(x, w) {
      if (!e) return null;
      for (; w !== null; ) t(x, w), (w = w.sibling);
      return null;
    }
    function r(x, w) {
      for (x = new Map(); w !== null; )
        w.key !== null ? x.set(w.key, w) : x.set(w.index, w), (w = w.sibling);
      return x;
    }
    function l(x, w) {
      return (x = $n(x, w)), (x.index = 0), (x.sibling = null), x;
    }
    function o(x, w, R) {
      return (
        (x.index = R),
        e
          ? ((R = x.alternate),
            R !== null
              ? ((R = R.index), R < w ? ((x.flags |= 2), w) : R)
              : ((x.flags |= 2), w))
          : ((x.flags |= 1048576), w)
      );
    }
    function s(x) {
      return e && x.alternate === null && (x.flags |= 2), x;
    }
    function p(x, w, R, B) {
      return w === null || w.tag !== 6
        ? ((w = Iu(R, x.mode, B)), (w.return = x), w)
        : ((w = l(w, R)), (w.return = x), w);
    }
    function m(x, w, R, B) {
      var ne = R.type;
      return ne === pe
        ? j(x, w, R.props.children, B, R.key)
        : w !== null &&
          (w.elementType === ne ||
            (typeof ne == "object" &&
              ne !== null &&
              ne.$$typeof === Ge &&
              ss(ne) === w.type))
        ? ((B = l(w, R.props)), (B.ref = ml(x, w, R)), (B.return = x), B)
        : ((B = Bi(R.type, R.key, R.props, null, x.mode, B)),
          (B.ref = ml(x, w, R)),
          (B.return = x),
          B);
    }
    function P(x, w, R, B) {
      return w === null ||
        w.tag !== 4 ||
        w.stateNode.containerInfo !== R.containerInfo ||
        w.stateNode.implementation !== R.implementation
        ? ((w = Uu(R, x.mode, B)), (w.return = x), w)
        : ((w = l(w, R.children || [])), (w.return = x), w);
    }
    function j(x, w, R, B, ne) {
      return w === null || w.tag !== 7
        ? ((w = sr(R, x.mode, B, ne)), (w.return = x), w)
        : ((w = l(w, R)), (w.return = x), w);
    }
    function A(x, w, R) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return (w = Iu("" + w, x.mode, R)), (w.return = x), w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case C:
            return (
              (R = Bi(w.type, w.key, w.props, null, x.mode, R)),
              (R.ref = ml(x, null, w)),
              (R.return = x),
              R
            );
          case le:
            return (w = Uu(w, x.mode, R)), (w.return = x), w;
          case Ge:
            var B = w._init;
            return A(x, B(w._payload), R);
        }
        if (Kn(w) || re(w))
          return (w = sr(w, x.mode, R, null)), (w.return = x), w;
        gi(x, w);
      }
      return null;
    }
    function I(x, w, R, B) {
      var ne = w !== null ? w.key : null;
      if ((typeof R == "string" && R !== "") || typeof R == "number")
        return ne !== null ? null : p(x, w, "" + R, B);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case C:
            return R.key === ne ? m(x, w, R, B) : null;
          case le:
            return R.key === ne ? P(x, w, R, B) : null;
          case Ge:
            return (ne = R._init), I(x, w, ne(R._payload), B);
        }
        if (Kn(R) || re(R)) return ne !== null ? null : j(x, w, R, B, null);
        gi(x, R);
      }
      return null;
    }
    function Y(x, w, R, B, ne) {
      if ((typeof B == "string" && B !== "") || typeof B == "number")
        return (x = x.get(R) || null), p(w, x, "" + B, ne);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case C:
            return (
              (x = x.get(B.key === null ? R : B.key) || null), m(w, x, B, ne)
            );
          case le:
            return (
              (x = x.get(B.key === null ? R : B.key) || null), P(w, x, B, ne)
            );
          case Ge:
            var oe = B._init;
            return Y(x, w, R, oe(B._payload), ne);
        }
        if (Kn(B) || re(B)) return (x = x.get(R) || null), j(w, x, B, ne, null);
        gi(w, B);
      }
      return null;
    }
    function Z(x, w, R, B) {
      for (
        var ne = null, oe = null, ue = w, de = (w = 0), nt = null;
        ue !== null && de < R.length;
        de++
      ) {
        ue.index > de ? ((nt = ue), (ue = null)) : (nt = ue.sibling);
        var xe = I(x, ue, R[de], B);
        if (xe === null) {
          ue === null && (ue = nt);
          break;
        }
        e && ue && xe.alternate === null && t(x, ue),
          (w = o(xe, w, de)),
          oe === null ? (ne = xe) : (oe.sibling = xe),
          (oe = xe),
          (ue = nt);
      }
      if (de === R.length) return n(x, ue), je && tr(x, de), ne;
      if (ue === null) {
        for (; de < R.length; de++)
          (ue = A(x, R[de], B)),
            ue !== null &&
              ((w = o(ue, w, de)),
              oe === null ? (ne = ue) : (oe.sibling = ue),
              (oe = ue));
        return je && tr(x, de), ne;
      }
      for (ue = r(x, ue); de < R.length; de++)
        (nt = Y(ue, x, de, R[de], B)),
          nt !== null &&
            (e &&
              nt.alternate !== null &&
              ue.delete(nt.key === null ? de : nt.key),
            (w = o(nt, w, de)),
            oe === null ? (ne = nt) : (oe.sibling = nt),
            (oe = nt));
      return (
        e &&
          ue.forEach(function (An) {
            return t(x, An);
          }),
        je && tr(x, de),
        ne
      );
    }
    function ee(x, w, R, B) {
      var ne = re(R);
      if (typeof ne != "function") throw Error(a(150));
      if (((R = ne.call(R)), R == null)) throw Error(a(151));
      for (
        var oe = (ne = null), ue = w, de = (w = 0), nt = null, xe = R.next();
        ue !== null && !xe.done;
        de++, xe = R.next()
      ) {
        ue.index > de ? ((nt = ue), (ue = null)) : (nt = ue.sibling);
        var An = I(x, ue, xe.value, B);
        if (An === null) {
          ue === null && (ue = nt);
          break;
        }
        e && ue && An.alternate === null && t(x, ue),
          (w = o(An, w, de)),
          oe === null ? (ne = An) : (oe.sibling = An),
          (oe = An),
          (ue = nt);
      }
      if (xe.done) return n(x, ue), je && tr(x, de), ne;
      if (ue === null) {
        for (; !xe.done; de++, xe = R.next())
          (xe = A(x, xe.value, B)),
            xe !== null &&
              ((w = o(xe, w, de)),
              oe === null ? (ne = xe) : (oe.sibling = xe),
              (oe = xe));
        return je && tr(x, de), ne;
      }
      for (ue = r(x, ue); !xe.done; de++, xe = R.next())
        (xe = Y(ue, x, de, xe.value, B)),
          xe !== null &&
            (e &&
              xe.alternate !== null &&
              ue.delete(xe.key === null ? de : xe.key),
            (w = o(xe, w, de)),
            oe === null ? (ne = xe) : (oe.sibling = xe),
            (oe = xe));
      return (
        e &&
          ue.forEach(function (sp) {
            return t(x, sp);
          }),
        je && tr(x, de),
        ne
      );
    }
    function Qe(x, w, R, B) {
      if (
        (typeof R == "object" &&
          R !== null &&
          R.type === pe &&
          R.key === null &&
          (R = R.props.children),
        typeof R == "object" && R !== null)
      ) {
        switch (R.$$typeof) {
          case C:
            e: {
              for (var ne = R.key, oe = w; oe !== null; ) {
                if (oe.key === ne) {
                  if (((ne = R.type), ne === pe)) {
                    if (oe.tag === 7) {
                      n(x, oe.sibling),
                        (w = l(oe, R.props.children)),
                        (w.return = x),
                        (x = w);
                      break e;
                    }
                  } else if (
                    oe.elementType === ne ||
                    (typeof ne == "object" &&
                      ne !== null &&
                      ne.$$typeof === Ge &&
                      ss(ne) === oe.type)
                  ) {
                    n(x, oe.sibling),
                      (w = l(oe, R.props)),
                      (w.ref = ml(x, oe, R)),
                      (w.return = x),
                      (x = w);
                    break e;
                  }
                  n(x, oe);
                  break;
                } else t(x, oe);
                oe = oe.sibling;
              }
              R.type === pe
                ? ((w = sr(R.props.children, x.mode, B, R.key)),
                  (w.return = x),
                  (x = w))
                : ((B = Bi(R.type, R.key, R.props, null, x.mode, B)),
                  (B.ref = ml(x, w, R)),
                  (B.return = x),
                  (x = B));
            }
            return s(x);
          case le:
            e: {
              for (oe = R.key; w !== null; ) {
                if (w.key === oe)
                  if (
                    w.tag === 4 &&
                    w.stateNode.containerInfo === R.containerInfo &&
                    w.stateNode.implementation === R.implementation
                  ) {
                    n(x, w.sibling),
                      (w = l(w, R.children || [])),
                      (w.return = x),
                      (x = w);
                    break e;
                  } else {
                    n(x, w);
                    break;
                  }
                else t(x, w);
                w = w.sibling;
              }
              (w = Uu(R, x.mode, B)), (w.return = x), (x = w);
            }
            return s(x);
          case Ge:
            return (oe = R._init), Qe(x, w, oe(R._payload), B);
        }
        if (Kn(R)) return Z(x, w, R, B);
        if (re(R)) return ee(x, w, R, B);
        gi(x, R);
      }
      return (typeof R == "string" && R !== "") || typeof R == "number"
        ? ((R = "" + R),
          w !== null && w.tag === 6
            ? (n(x, w.sibling), (w = l(w, R)), (w.return = x), (x = w))
            : (n(x, w), (w = Iu(R, x.mode, B)), (w.return = x), (x = w)),
          s(x))
        : n(x, w);
    }
    return Qe;
  }
  var zr = fs(!0),
    cs = fs(!1),
    wi = Tn(null),
    Si = null,
    Fr = null,
    Ko = null;
  function Yo() {
    Ko = Fr = Si = null;
  }
  function Xo(e) {
    var t = wi.current;
    Ue(wi), (e._currentValue = t);
  }
  function Go(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Or(e, t) {
    (Si = e),
      (Ko = Fr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (gt = !0), (e.firstContext = null));
  }
  function Ft(e) {
    var t = e._currentValue;
    if (Ko !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Fr === null)) {
        if (Si === null) throw Error(a(308));
        (Fr = e), (Si.dependencies = { lanes: 0, firstContext: e });
      } else Fr = Fr.next = e;
    return t;
  }
  var nr = null;
  function Jo(e) {
    nr === null ? (nr = [e]) : nr.push(e);
  }
  function ds(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Jo(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      dn(e, r)
    );
  }
  function dn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Mn = !1;
  function Zo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function ps(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function pn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function zn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ke & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        dn(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Jo(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      dn(e, n)
    );
  }
  function Ei(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), fo(e, n);
    }
  }
  function hs(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var s = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (l = o = s) : (o = o.next = s), (n = n.next);
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function ki(e, t, n, r) {
    var l = e.updateQueue;
    Mn = !1;
    var o = l.firstBaseUpdate,
      s = l.lastBaseUpdate,
      p = l.shared.pending;
    if (p !== null) {
      l.shared.pending = null;
      var m = p,
        P = m.next;
      (m.next = null), s === null ? (o = P) : (s.next = P), (s = m);
      var j = e.alternate;
      j !== null &&
        ((j = j.updateQueue),
        (p = j.lastBaseUpdate),
        p !== s &&
          (p === null ? (j.firstBaseUpdate = P) : (p.next = P),
          (j.lastBaseUpdate = m)));
    }
    if (o !== null) {
      var A = l.baseState;
      (s = 0), (j = P = m = null), (p = o);
      do {
        var I = p.lane,
          Y = p.eventTime;
        if ((r & I) === I) {
          j !== null &&
            (j = j.next =
              {
                eventTime: Y,
                lane: 0,
                tag: p.tag,
                payload: p.payload,
                callback: p.callback,
                next: null,
              });
          e: {
            var Z = e,
              ee = p;
            switch (((I = t), (Y = n), ee.tag)) {
              case 1:
                if (((Z = ee.payload), typeof Z == "function")) {
                  A = Z.call(Y, A, I);
                  break e;
                }
                A = Z;
                break e;
              case 3:
                Z.flags = (Z.flags & -65537) | 128;
              case 0:
                if (
                  ((Z = ee.payload),
                  (I = typeof Z == "function" ? Z.call(Y, A, I) : Z),
                  I == null)
                )
                  break e;
                A = Q({}, A, I);
                break e;
              case 2:
                Mn = !0;
            }
          }
          p.callback !== null &&
            p.lane !== 0 &&
            ((e.flags |= 64),
            (I = l.effects),
            I === null ? (l.effects = [p]) : I.push(p));
        } else
          (Y = {
            eventTime: Y,
            lane: I,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            j === null ? ((P = j = Y), (m = A)) : (j = j.next = Y),
            (s |= I);
        if (((p = p.next), p === null)) {
          if (((p = l.shared.pending), p === null)) break;
          (I = p),
            (p = I.next),
            (I.next = null),
            (l.lastBaseUpdate = I),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (j === null && (m = A),
        (l.baseState = m),
        (l.firstBaseUpdate = P),
        (l.lastBaseUpdate = j),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (s |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (ir |= s), (e.lanes = s), (e.memoizedState = A);
    }
  }
  function ms(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(a(191, l));
          l.call(r);
        }
      }
  }
  var yl = {},
    Zt = Tn(yl),
    vl = Tn(yl),
    gl = Tn(yl);
  function rr(e) {
    if (e === yl) throw Error(a(174));
    return e;
  }
  function qo(e, t) {
    switch ((Oe(gl, t), Oe(vl, e), Oe(Zt, yl), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : mr(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = mr(t, e));
    }
    Ue(Zt), Oe(Zt, t);
  }
  function Ir() {
    Ue(Zt), Ue(vl), Ue(gl);
  }
  function ys(e) {
    rr(gl.current);
    var t = rr(Zt.current),
      n = mr(t, e.type);
    t !== n && (Oe(vl, e), Oe(Zt, n));
  }
  function bo(e) {
    vl.current === e && (Ue(Zt), Ue(vl));
  }
  var Ae = Tn(0);
  function xi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var eu = [];
  function tu() {
    for (var e = 0; e < eu.length; e++)
      eu[e]._workInProgressVersionPrimary = null;
    eu.length = 0;
  }
  var Ci = ae.ReactCurrentDispatcher,
    nu = ae.ReactCurrentBatchConfig,
    lr = 0,
    He = null,
    qe = null,
    et = null,
    Ri = !1,
    wl = !1,
    Sl = 0,
    Md = 0;
  function st() {
    throw Error(a(321));
  }
  function ru(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Bt(e[n], t[n])) return !1;
    return !0;
  }
  function lu(e, t, n, r, l, o) {
    if (
      ((lr = o),
      (He = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Ci.current = e === null || e.memoizedState === null ? Id : Ud),
      (e = n(r, l)),
      wl)
    ) {
      o = 0;
      do {
        if (((wl = !1), (Sl = 0), 25 <= o)) throw Error(a(301));
        (o += 1),
          (et = qe = null),
          (t.updateQueue = null),
          (Ci.current = jd),
          (e = n(r, l));
      } while (wl);
    }
    if (
      ((Ci.current = _i),
      (t = qe !== null && qe.next !== null),
      (lr = 0),
      (et = qe = He = null),
      (Ri = !1),
      t)
    )
      throw Error(a(300));
    return e;
  }
  function iu() {
    var e = Sl !== 0;
    return (Sl = 0), e;
  }
  function qt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return et === null ? (He.memoizedState = et = e) : (et = et.next = e), et;
  }
  function Ot() {
    if (qe === null) {
      var e = He.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = qe.next;
    var t = et === null ? He.memoizedState : et.next;
    if (t !== null) (et = t), (qe = e);
    else {
      if (e === null) throw Error(a(310));
      (qe = e),
        (e = {
          memoizedState: qe.memoizedState,
          baseState: qe.baseState,
          baseQueue: qe.baseQueue,
          queue: qe.queue,
          next: null,
        }),
        et === null ? (He.memoizedState = et = e) : (et = et.next = e);
    }
    return et;
  }
  function El(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ou(e) {
    var t = Ot(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = qe,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var s = l.next;
        (l.next = o.next), (o.next = s);
      }
      (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
      (o = l.next), (r = r.baseState);
      var p = (s = null),
        m = null,
        P = o;
      do {
        var j = P.lane;
        if ((lr & j) === j)
          m !== null &&
            (m = m.next =
              {
                lane: 0,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null,
              }),
            (r = P.hasEagerState ? P.eagerState : e(r, P.action));
        else {
          var A = {
            lane: j,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null,
          };
          m === null ? ((p = m = A), (s = r)) : (m = m.next = A),
            (He.lanes |= j),
            (ir |= j);
        }
        P = P.next;
      } while (P !== null && P !== o);
      m === null ? (s = r) : (m.next = p),
        Bt(r, t.memoizedState) || (gt = !0),
        (t.memoizedState = r),
        (t.baseState = s),
        (t.baseQueue = m),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (He.lanes |= o), (ir |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function uu(e) {
    var t = Ot(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var s = (l = l.next);
      do (o = e(o, s.action)), (s = s.next);
      while (s !== l);
      Bt(o, t.memoizedState) || (gt = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function vs() {}
  function gs(e, t) {
    var n = He,
      r = Ot(),
      l = t(),
      o = !Bt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (gt = !0)),
      (r = r.queue),
      au(Es.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (et !== null && et.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        kl(9, Ss.bind(null, n, r, l, t), void 0, null),
        tt === null)
      )
        throw Error(a(349));
      lr & 30 || ws(n, t, l);
    }
    return l;
  }
  function ws(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = He.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (He.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Ss(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), ks(t) && xs(e);
  }
  function Es(e, t, n) {
    return n(function () {
      ks(t) && xs(e);
    });
  }
  function ks(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Bt(e, n);
    } catch {
      return !0;
    }
  }
  function xs(e) {
    var t = dn(e, 1);
    t !== null && Yt(t, e, 1, -1);
  }
  function Cs(e) {
    var t = qt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: El,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Od.bind(null, He, e)),
      [t.memoizedState, e]
    );
  }
  function kl(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = He.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (He.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Rs() {
    return Ot().memoizedState;
  }
  function Pi(e, t, n, r) {
    var l = qt();
    (He.flags |= e),
      (l.memoizedState = kl(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Li(e, t, n, r) {
    var l = Ot();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (qe !== null) {
      var s = qe.memoizedState;
      if (((o = s.destroy), r !== null && ru(r, s.deps))) {
        l.memoizedState = kl(t, n, o, r);
        return;
      }
    }
    (He.flags |= e), (l.memoizedState = kl(1 | t, n, o, r));
  }
  function Ps(e, t) {
    return Pi(8390656, 8, e, t);
  }
  function au(e, t) {
    return Li(2048, 8, e, t);
  }
  function Ls(e, t) {
    return Li(4, 2, e, t);
  }
  function _s(e, t) {
    return Li(4, 4, e, t);
  }
  function Ts(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ns(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Li(4, 4, Ts.bind(null, t, e), n)
    );
  }
  function su() {}
  function Ds(e, t) {
    var n = Ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ru(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Ms(e, t) {
    var n = Ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ru(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function zs(e, t, n) {
    return lr & 21
      ? (Bt(n, t) ||
          ((n = sa()), (He.lanes |= n), (ir |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (gt = !0)), (e.memoizedState = n));
  }
  function zd(e, t) {
    var n = Te;
    (Te = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = nu.transition;
    nu.transition = {};
    try {
      e(!1), t();
    } finally {
      (Te = n), (nu.transition = r);
    }
  }
  function Fs() {
    return Ot().memoizedState;
  }
  function Fd(e, t, n) {
    var r = Un(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Os(e))
    )
      Is(t, n);
    else if (((n = ds(e, t, n, r)), n !== null)) {
      var l = pt();
      Yt(n, e, r, l), Us(n, t, r);
    }
  }
  function Od(e, t, n) {
    var r = Un(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Os(e)) Is(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var s = t.lastRenderedState,
            p = o(s, n);
          if (((l.hasEagerState = !0), (l.eagerState = p), Bt(p, s))) {
            var m = t.interleaved;
            m === null
              ? ((l.next = l), Jo(t))
              : ((l.next = m.next), (m.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = ds(e, t, l, r)),
        n !== null && ((l = pt()), Yt(n, e, r, l), Us(n, t, r));
    }
  }
  function Os(e) {
    var t = e.alternate;
    return e === He || (t !== null && t === He);
  }
  function Is(e, t) {
    wl = Ri = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Us(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), fo(e, n);
    }
  }
  var _i = {
      readContext: Ft,
      useCallback: st,
      useContext: st,
      useEffect: st,
      useImperativeHandle: st,
      useInsertionEffect: st,
      useLayoutEffect: st,
      useMemo: st,
      useReducer: st,
      useRef: st,
      useState: st,
      useDebugValue: st,
      useDeferredValue: st,
      useTransition: st,
      useMutableSource: st,
      useSyncExternalStore: st,
      useId: st,
      unstable_isNewReconciler: !1,
    },
    Id = {
      readContext: Ft,
      useCallback: function (e, t) {
        return (qt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Ft,
      useEffect: Ps,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Pi(4194308, 4, Ts.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Pi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Pi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = qt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = qt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Fd.bind(null, He, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = qt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Cs,
      useDebugValue: su,
      useDeferredValue: function (e) {
        return (qt().memoizedState = e);
      },
      useTransition: function () {
        var e = Cs(!1),
          t = e[0];
        return (e = zd.bind(null, e[1])), (qt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = He,
          l = qt();
        if (je) {
          if (n === void 0) throw Error(a(407));
          n = n();
        } else {
          if (((n = t()), tt === null)) throw Error(a(349));
          lr & 30 || ws(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Ps(Es.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          kl(9, Ss.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = qt(),
          t = tt.identifierPrefix;
        if (je) {
          var n = cn,
            r = fn;
          (n = (r & ~(1 << (32 - Ht(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Sl++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Md++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Ud = {
      readContext: Ft,
      useCallback: Ds,
      useContext: Ft,
      useEffect: au,
      useImperativeHandle: Ns,
      useInsertionEffect: Ls,
      useLayoutEffect: _s,
      useMemo: Ms,
      useReducer: ou,
      useRef: Rs,
      useState: function () {
        return ou(El);
      },
      useDebugValue: su,
      useDeferredValue: function (e) {
        var t = Ot();
        return zs(t, qe.memoizedState, e);
      },
      useTransition: function () {
        var e = ou(El)[0],
          t = Ot().memoizedState;
        return [e, t];
      },
      useMutableSource: vs,
      useSyncExternalStore: gs,
      useId: Fs,
      unstable_isNewReconciler: !1,
    },
    jd = {
      readContext: Ft,
      useCallback: Ds,
      useContext: Ft,
      useEffect: au,
      useImperativeHandle: Ns,
      useInsertionEffect: Ls,
      useLayoutEffect: _s,
      useMemo: Ms,
      useReducer: uu,
      useRef: Rs,
      useState: function () {
        return uu(El);
      },
      useDebugValue: su,
      useDeferredValue: function (e) {
        var t = Ot();
        return qe === null ? (t.memoizedState = e) : zs(t, qe.memoizedState, e);
      },
      useTransition: function () {
        var e = uu(El)[0],
          t = Ot().memoizedState;
        return [e, t];
      },
      useMutableSource: vs,
      useSyncExternalStore: gs,
      useId: Fs,
      unstable_isNewReconciler: !1,
    };
  function Wt(e, t) {
    if (e && e.defaultProps) {
      (t = Q({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function fu(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : Q({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ti = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Pe(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = pt(),
        l = Un(e),
        o = pn(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = zn(e, o, l)),
        t !== null && (Yt(t, e, l, r), Ei(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = pt(),
        l = Un(e),
        o = pn(r, l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = zn(e, o, l)),
        t !== null && (Yt(t, e, l, r), Ei(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = pt(),
        r = Un(e),
        l = pn(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = zn(e, l, r)),
        t !== null && (Yt(t, e, r, n), Ei(t, e, r));
    },
  };
  function js(e, t, n, r, l, o, s) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, s)
        : t.prototype && t.prototype.isPureReactComponent
        ? !al(n, r) || !al(l, o)
        : !0
    );
  }
  function $s(e, t, n) {
    var r = !1,
      l = Nn,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = Ft(o))
        : ((l = vt(t) ? bn : at.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Tr(e, l) : Nn)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ti),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function As(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Ti.enqueueReplaceState(t, t.state, null);
  }
  function cu(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Zo(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (l.context = Ft(o))
      : ((o = vt(t) ? bn : at.current), (l.context = Tr(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (fu(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Ti.enqueueReplaceState(l, l.state, null),
        ki(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Ur(e, t) {
    try {
      var n = "",
        r = t;
      do (n += me(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function du(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function pu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var $d = typeof WeakMap == "function" ? WeakMap : Map;
  function Hs(e, t, n) {
    (n = pn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Ii || ((Ii = !0), (_u = r)), pu(e, t);
      }),
      n
    );
  }
  function Bs(e, t, n) {
    (n = pn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          pu(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          pu(e, t),
            typeof r != "function" &&
              (On === null ? (On = new Set([this])) : On.add(this));
          var s = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : "",
          });
        }),
      n
    );
  }
  function Vs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new $d();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = bd.bind(null, e, t, n)), t.then(e, e));
  }
  function Ws(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Qs(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = pn(-1, 1)), (t.tag = 2), zn(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var Ad = ae.ReactCurrentOwner,
    gt = !1;
  function dt(e, t, n, r) {
    t.child = e === null ? cs(t, null, n, r) : zr(t, e.child, n, r);
  }
  function Ks(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Or(t, l),
      (r = lu(e, t, n, r, o, l)),
      (n = iu()),
      e !== null && !gt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          hn(e, t, l))
        : (je && n && Ho(t), (t.flags |= 1), dt(e, t, r, l), t.child)
    );
  }
  function Ys(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Ou(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Xs(e, t, o, r, l))
        : ((e = Bi(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
      var s = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : al), n(s, r) && e.ref === t.ref)
      )
        return hn(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = $n(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Xs(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (al(o, r) && e.ref === t.ref)
        if (((gt = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          e.flags & 131072 && (gt = !0);
        else return (t.lanes = e.lanes), hn(e, t, l);
    }
    return hu(e, t, n, r, l);
  }
  function Gs(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Oe($r, Lt),
          (Lt |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Oe($r, Lt),
            (Lt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          Oe($r, Lt),
          (Lt |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Oe($r, Lt),
        (Lt |= r);
    return dt(e, t, l, n), t.child;
  }
  function Js(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function hu(e, t, n, r, l) {
    var o = vt(n) ? bn : at.current;
    return (
      (o = Tr(t, o)),
      Or(t, l),
      (n = lu(e, t, n, r, o, l)),
      (r = iu()),
      e !== null && !gt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          hn(e, t, l))
        : (je && r && Ho(t), (t.flags |= 1), dt(e, t, n, l), t.child)
    );
  }
  function Zs(e, t, n, r, l) {
    if (vt(n)) {
      var o = !0;
      pi(t);
    } else o = !1;
    if ((Or(t, l), t.stateNode === null))
      Di(e, t), $s(t, n, r), cu(t, n, r, l), (r = !0);
    else if (e === null) {
      var s = t.stateNode,
        p = t.memoizedProps;
      s.props = p;
      var m = s.context,
        P = n.contextType;
      typeof P == "object" && P !== null
        ? (P = Ft(P))
        : ((P = vt(n) ? bn : at.current), (P = Tr(t, P)));
      var j = n.getDerivedStateFromProps,
        A =
          typeof j == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function";
      A ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((p !== r || m !== P) && As(t, s, r, P)),
        (Mn = !1);
      var I = t.memoizedState;
      (s.state = I),
        ki(t, r, s, l),
        (m = t.memoizedState),
        p !== r || I !== m || yt.current || Mn
          ? (typeof j == "function" && (fu(t, n, j, r), (m = t.memoizedState)),
            (p = Mn || js(t, n, p, r, I, m, P))
              ? (A ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = m)),
            (s.props = r),
            (s.state = m),
            (s.context = P),
            (r = p))
          : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (s = t.stateNode),
        ps(e, t),
        (p = t.memoizedProps),
        (P = t.type === t.elementType ? p : Wt(t.type, p)),
        (s.props = P),
        (A = t.pendingProps),
        (I = s.context),
        (m = n.contextType),
        typeof m == "object" && m !== null
          ? (m = Ft(m))
          : ((m = vt(n) ? bn : at.current), (m = Tr(t, m)));
      var Y = n.getDerivedStateFromProps;
      (j =
        typeof Y == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function") ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((p !== A || I !== m) && As(t, s, r, m)),
        (Mn = !1),
        (I = t.memoizedState),
        (s.state = I),
        ki(t, r, s, l);
      var Z = t.memoizedState;
      p !== A || I !== Z || yt.current || Mn
        ? (typeof Y == "function" && (fu(t, n, Y, r), (Z = t.memoizedState)),
          (P = Mn || js(t, n, P, r, I, Z, m) || !1)
            ? (j ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(r, Z, m),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(r, Z, m)),
              typeof s.componentDidUpdate == "function" && (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (p === e.memoizedProps && I === e.memoizedState) ||
                (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (p === e.memoizedProps && I === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = Z)),
          (s.props = r),
          (s.state = Z),
          (s.context = m),
          (r = P))
        : (typeof s.componentDidUpdate != "function" ||
            (p === e.memoizedProps && I === e.memoizedState) ||
            (t.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (p === e.memoizedProps && I === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return mu(e, t, n, r, o, l);
  }
  function mu(e, t, n, r, l, o) {
    Js(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return l && ns(t, n, !1), hn(e, t, o);
    (r = t.stateNode), (Ad.current = t);
    var p =
      s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && s
        ? ((t.child = zr(t, e.child, null, o)), (t.child = zr(t, null, p, o)))
        : dt(e, t, p, o),
      (t.memoizedState = r.state),
      l && ns(t, n, !0),
      t.child
    );
  }
  function qs(e) {
    var t = e.stateNode;
    t.pendingContext
      ? es(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && es(e, t.context, !1),
      qo(e, t.containerInfo);
  }
  function bs(e, t, n, r, l) {
    return Mr(), Qo(l), (t.flags |= 256), dt(e, t, n, r), t.child;
  }
  var yu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function vu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ef(e, t, n) {
    var r = t.pendingProps,
      l = Ae.current,
      o = !1,
      s = (t.flags & 128) !== 0,
      p;
    if (
      ((p = s) ||
        (p = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      p
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      Oe(Ae, l & 1),
      e === null)
    )
      return (
        Wo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((s = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (s = { mode: "hidden", children: s }),
                !(r & 1) && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = s))
                  : (o = Vi(s, r, 0, null)),
                (e = sr(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = vu(n)),
                (t.memoizedState = yu),
                e)
              : gu(t, s))
      );
    if (((l = e.memoizedState), l !== null && ((p = l.dehydrated), p !== null)))
      return Hd(e, t, s, r, p, l, n);
    if (o) {
      (o = r.fallback), (s = t.mode), (l = e.child), (p = l.sibling);
      var m = { mode: "hidden", children: r.children };
      return (
        !(s & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = m),
            (t.deletions = null))
          : ((r = $n(l, m)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        p !== null ? (o = $n(p, o)) : ((o = sr(o, s, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (s = e.child.memoizedState),
        (s =
          s === null
            ? vu(n)
            : {
                baseLanes: s.baseLanes | n,
                cachePool: null,
                transitions: s.transitions,
              }),
        (o.memoizedState = s),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = yu),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = $n(o, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function gu(e, t) {
    return (
      (t = Vi({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ni(e, t, n, r) {
    return (
      r !== null && Qo(r),
      zr(t, e.child, null, n),
      (e = gu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Hd(e, t, n, r, l, o, s) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = du(Error(a(422)))), Ni(e, t, s, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Vi({ mode: "visible", children: r.children }, l, 0, null)),
          (o = sr(o, l, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && zr(t, e.child, null, s),
          (t.child.memoizedState = vu(s)),
          (t.memoizedState = yu),
          o);
    if (!(t.mode & 1)) return Ni(e, t, s, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var p = r.dgst;
      return (
        (r = p), (o = Error(a(419))), (r = du(o, r, void 0)), Ni(e, t, s, r)
      );
    }
    if (((p = (s & e.childLanes) !== 0), gt || p)) {
      if (((r = tt), r !== null)) {
        switch (s & -s) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | s) ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), dn(e, l), Yt(r, e, l, -1));
      }
      return Fu(), (r = du(Error(a(421)))), Ni(e, t, s, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = ep.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (Pt = _n(l.nextSibling)),
        (Rt = t),
        (je = !0),
        (Vt = null),
        e !== null &&
          ((Mt[zt++] = fn),
          (Mt[zt++] = cn),
          (Mt[zt++] = er),
          (fn = e.id),
          (cn = e.overflow),
          (er = t)),
        (t = gu(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function tf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Go(e.return, t, n);
  }
  function wu(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function nf(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((dt(e, t, r.children, n), (r = Ae.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && tf(e, n, t);
          else if (e.tag === 19) tf(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((Oe(Ae, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && xi(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            wu(t, !1, l, n, o);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && xi(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          wu(t, !0, n, null, o);
          break;
        case "together":
          wu(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Di(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function hn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (ir |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (
        e = t.child, n = $n(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = $n(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Bd(e, t, n) {
    switch (t.tag) {
      case 3:
        qs(t), Mr();
        break;
      case 5:
        ys(t);
        break;
      case 1:
        vt(t.type) && pi(t);
        break;
      case 4:
        qo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        Oe(wi, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Oe(Ae, Ae.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? ef(e, t, n)
            : (Oe(Ae, Ae.current & 1),
              (e = hn(e, t, n)),
              e !== null ? e.sibling : null);
        Oe(Ae, Ae.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return nf(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Oe(Ae, Ae.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Gs(e, t, n);
    }
    return hn(e, t, n);
  }
  var rf, Su, lf, of;
  (rf = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Su = function () {}),
    (lf = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), rr(Zt.current);
        var o = null;
        switch (n) {
          case "input":
            (l = Vr(e, l)), (r = Vr(e, r)), (o = []);
            break;
          case "select":
            (l = Q({}, l, { value: void 0 })),
              (r = Q({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (l = rn(e, l)), (r = rn(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = fi);
        }
        gn(n, r);
        var s;
        n = null;
        for (P in l)
          if (!r.hasOwnProperty(P) && l.hasOwnProperty(P) && l[P] != null)
            if (P === "style") {
              var p = l[P];
              for (s in p) p.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
            } else
              P !== "dangerouslySetInnerHTML" &&
                P !== "children" &&
                P !== "suppressContentEditableWarning" &&
                P !== "suppressHydrationWarning" &&
                P !== "autoFocus" &&
                (f.hasOwnProperty(P)
                  ? o || (o = [])
                  : (o = o || []).push(P, null));
        for (P in r) {
          var m = r[P];
          if (
            ((p = l != null ? l[P] : void 0),
            r.hasOwnProperty(P) && m !== p && (m != null || p != null))
          )
            if (P === "style")
              if (p) {
                for (s in p)
                  !p.hasOwnProperty(s) ||
                    (m && m.hasOwnProperty(s)) ||
                    (n || (n = {}), (n[s] = ""));
                for (s in m)
                  m.hasOwnProperty(s) &&
                    p[s] !== m[s] &&
                    (n || (n = {}), (n[s] = m[s]));
              } else n || (o || (o = []), o.push(P, n)), (n = m);
            else
              P === "dangerouslySetInnerHTML"
                ? ((m = m ? m.__html : void 0),
                  (p = p ? p.__html : void 0),
                  m != null && p !== m && (o = o || []).push(P, m))
                : P === "children"
                ? (typeof m != "string" && typeof m != "number") ||
                  (o = o || []).push(P, "" + m)
                : P !== "suppressContentEditableWarning" &&
                  P !== "suppressHydrationWarning" &&
                  (f.hasOwnProperty(P)
                    ? (m != null && P === "onScroll" && Ie("scroll", e),
                      o || p === m || (o = []))
                    : (o = o || []).push(P, m));
        }
        n && (o = o || []).push("style", n);
        var P = o;
        (t.updateQueue = P) && (t.flags |= 4);
      }
    }),
    (of = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function xl(e, t) {
    if (!je)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function ft(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Vd(e, t, n) {
    var r = t.pendingProps;
    switch ((Bo(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ft(t), null;
      case 1:
        return vt(t.type) && di(), ft(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Ir(),
          Ue(yt),
          Ue(at),
          tu(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (vi(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Vt !== null && (Du(Vt), (Vt = null)))),
          Su(e, t),
          ft(t),
          null
        );
      case 5:
        bo(t);
        var l = rr(gl.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          lf(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return ft(t), null;
          }
          if (((e = rr(Zt.current)), vi(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[Jt] = t), (r[pl] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                Ie("cancel", r), Ie("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ie("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < fl.length; l++) Ie(fl[l], r);
                break;
              case "source":
                Ie("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Ie("error", r), Ie("load", r);
                break;
              case "details":
                Ie("toggle", r);
                break;
              case "input":
                $l(r, o), Ie("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  Ie("invalid", r);
                break;
              case "textarea":
                Yr(r, o), Ie("invalid", r);
            }
            gn(n, o), (l = null);
            for (var s in o)
              if (o.hasOwnProperty(s)) {
                var p = o[s];
                s === "children"
                  ? typeof p == "string"
                    ? r.textContent !== p &&
                      (o.suppressHydrationWarning !== !0 &&
                        si(r.textContent, p, e),
                      (l = ["children", p]))
                    : typeof p == "number" &&
                      r.textContent !== "" + p &&
                      (o.suppressHydrationWarning !== !0 &&
                        si(r.textContent, p, e),
                      (l = ["children", "" + p]))
                  : f.hasOwnProperty(s) &&
                    p != null &&
                    s === "onScroll" &&
                    Ie("scroll", r);
              }
            switch (n) {
              case "input":
                Qn(r), Al(r, o, !0);
                break;
              case "textarea":
                Qn(r), $t(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = fi);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (s = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Nt(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = s.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
                : (e = s.createElementNS(e, n)),
              (e[Jt] = t),
              (e[pl] = r),
              rf(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((s = yr(n, r)), n)) {
                case "dialog":
                  Ie("cancel", e), Ie("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ie("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < fl.length; l++) Ie(fl[l], e);
                  l = r;
                  break;
                case "source":
                  Ie("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  Ie("error", e), Ie("load", e), (l = r);
                  break;
                case "details":
                  Ie("toggle", e), (l = r);
                  break;
                case "input":
                  $l(e, r), (l = Vr(e, r)), Ie("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = Q({}, r, { value: void 0 })),
                    Ie("invalid", e);
                  break;
                case "textarea":
                  Yr(e, r), (l = rn(e, r)), Ie("invalid", e);
                  break;
                default:
                  l = r;
              }
              gn(n, l), (p = l);
              for (o in p)
                if (p.hasOwnProperty(o)) {
                  var m = p[o];
                  o === "style"
                    ? Vl(e, m)
                    : o === "dangerouslySetInnerHTML"
                    ? ((m = m ? m.__html : void 0), m != null && Hl(e, m))
                    : o === "children"
                    ? typeof m == "string"
                      ? (n !== "textarea" || m !== "") && mt(e, m)
                      : typeof m == "number" && mt(e, "" + m)
                    : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      (f.hasOwnProperty(o)
                        ? m != null && o === "onScroll" && Ie("scroll", e)
                        : m != null && J(e, o, m, s));
                }
              switch (n) {
                case "input":
                  Qn(e), Al(e, r, !1);
                  break;
                case "textarea":
                  Qn(e), $t(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Re(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? ht(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        ht(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = fi);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return ft(t), null;
      case 6:
        if (e && t.stateNode != null) of(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (((n = rr(gl.current)), rr(Zt.current), vi(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Jt] = t),
              (o = r.nodeValue !== n) && ((e = Rt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  si(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    si(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Jt] = t),
              (t.stateNode = r);
        }
        return ft(t), null;
      case 13:
        if (
          (Ue(Ae),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (je && Pt !== null && t.mode & 1 && !(t.flags & 128))
            as(), Mr(), (t.flags |= 98560), (o = !1);
          else if (((o = vi(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(a(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(a(317));
              o[Jt] = t;
            } else
              Mr(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            ft(t), (o = !1);
          } else Vt !== null && (Du(Vt), (Vt = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || Ae.current & 1 ? be === 0 && (be = 3) : Fu())),
            t.updateQueue !== null && (t.flags |= 4),
            ft(t),
            null);
      case 4:
        return (
          Ir(),
          Su(e, t),
          e === null && cl(t.stateNode.containerInfo),
          ft(t),
          null
        );
      case 10:
        return Xo(t.type._context), ft(t), null;
      case 17:
        return vt(t.type) && di(), ft(t), null;
      case 19:
        if ((Ue(Ae), (o = t.memoizedState), o === null)) return ft(t), null;
        if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
          if (r) xl(o, !1);
          else {
            if (be !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((s = xi(e)), s !== null)) {
                  for (
                    t.flags |= 128,
                      xl(o, !1),
                      r = s.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (s = o.alternate),
                      s === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = s.childLanes),
                          (o.lanes = s.lanes),
                          (o.child = s.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = s.memoizedProps),
                          (o.memoizedState = s.memoizedState),
                          (o.updateQueue = s.updateQueue),
                          (o.type = s.type),
                          (e = s.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return Oe(Ae, (Ae.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Fe() > Ar &&
              ((t.flags |= 128), (r = !0), xl(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = xi(s)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                xl(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !s.alternate &&
                  !je)
              )
                return ft(t), null;
            } else
              2 * Fe() - o.renderingStartTime > Ar &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), xl(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((s.sibling = t.child), (t.child = s))
            : ((n = o.last),
              n !== null ? (n.sibling = s) : (t.child = s),
              (o.last = s));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Fe()),
            (t.sibling = null),
            (n = Ae.current),
            Oe(Ae, r ? (n & 1) | 2 : n & 1),
            t)
          : (ft(t), null);
      case 22:
      case 23:
        return (
          zu(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? Lt & 1073741824 &&
              (ft(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ft(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Wd(e, t) {
    switch ((Bo(t), t.tag)) {
      case 1:
        return (
          vt(t.type) && di(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Ir(),
          Ue(yt),
          Ue(at),
          tu(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return bo(t), null;
      case 13:
        if (
          (Ue(Ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(a(340));
          Mr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Ue(Ae), null;
      case 4:
        return Ir(), null;
      case 10:
        return Xo(t.type._context), null;
      case 22:
      case 23:
        return zu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Mi = !1,
    ct = !1,
    Qd = typeof WeakSet == "function" ? WeakSet : Set,
    G = null;
  function jr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Ve(e, t, r);
        }
      else n.current = null;
  }
  function Eu(e, t, n) {
    try {
      n();
    } catch (r) {
      Ve(e, t, r);
    }
  }
  var uf = !1;
  function Kd(e, t) {
    if (((zo = ql), (e = ja()), Ro(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var s = 0,
              p = -1,
              m = -1,
              P = 0,
              j = 0,
              A = e,
              I = null;
            t: for (;;) {
              for (
                var Y;
                A !== n || (l !== 0 && A.nodeType !== 3) || (p = s + l),
                  A !== o || (r !== 0 && A.nodeType !== 3) || (m = s + r),
                  A.nodeType === 3 && (s += A.nodeValue.length),
                  (Y = A.firstChild) !== null;

              )
                (I = A), (A = Y);
              for (;;) {
                if (A === e) break t;
                if (
                  (I === n && ++P === l && (p = s),
                  I === o && ++j === r && (m = s),
                  (Y = A.nextSibling) !== null)
                )
                  break;
                (A = I), (I = A.parentNode);
              }
              A = Y;
            }
            n = p === -1 || m === -1 ? null : { start: p, end: m };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Fo = { focusedElem: e, selectionRange: n }, ql = !1, G = t;
      G !== null;

    )
      if (((t = G), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (G = e);
      else
        for (; G !== null; ) {
          t = G;
          try {
            var Z = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Z !== null) {
                    var ee = Z.memoizedProps,
                      Qe = Z.memoizedState,
                      x = t.stateNode,
                      w = x.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ee : Wt(t.type, ee),
                        Qe
                      );
                    x.__reactInternalSnapshotBeforeUpdate = w;
                  }
                  break;
                case 3:
                  var R = t.stateNode.containerInfo;
                  R.nodeType === 1
                    ? (R.textContent = "")
                    : R.nodeType === 9 &&
                      R.documentElement &&
                      R.removeChild(R.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (B) {
            Ve(t, t.return, B);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (G = e);
            break;
          }
          G = t.return;
        }
    return (Z = uf), (uf = !1), Z;
  }
  function Cl(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && Eu(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function zi(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ku(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function af(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), af(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Jt],
          delete t[pl],
          delete t[jo],
          delete t[_d],
          delete t[Td])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function sf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ff(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || sf(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function xu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = fi));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (xu(e, t, n), e = e.sibling; e !== null; )
        xu(e, t, n), (e = e.sibling);
  }
  function Cu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Cu(e, t, n), e = e.sibling; e !== null; )
        Cu(e, t, n), (e = e.sibling);
  }
  var lt = null,
    Qt = !1;
  function Fn(e, t, n) {
    for (n = n.child; n !== null; ) cf(e, t, n), (n = n.sibling);
  }
  function cf(e, t, n) {
    if (xt && typeof xt.onCommitFiberUnmount == "function")
      try {
        xt.onCommitFiberUnmount(At, n);
      } catch {}
    switch (n.tag) {
      case 5:
        ct || jr(n, t);
      case 6:
        var r = lt,
          l = Qt;
        (lt = null),
          Fn(e, t, n),
          (lt = r),
          (Qt = l),
          lt !== null &&
            (Qt
              ? ((e = lt),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : lt.removeChild(n.stateNode));
        break;
      case 18:
        lt !== null &&
          (Qt
            ? ((e = lt),
              (n = n.stateNode),
              e.nodeType === 8
                ? Uo(e.parentNode, n)
                : e.nodeType === 1 && Uo(e, n),
              nl(e))
            : Uo(lt, n.stateNode));
        break;
      case 4:
        (r = lt),
          (l = Qt),
          (lt = n.stateNode.containerInfo),
          (Qt = !0),
          Fn(e, t, n),
          (lt = r),
          (Qt = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !ct &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              s = o.destroy;
            (o = o.tag),
              s !== void 0 && (o & 2 || o & 4) && Eu(n, t, s),
              (l = l.next);
          } while (l !== r);
        }
        Fn(e, t, n);
        break;
      case 1:
        if (
          !ct &&
          (jr(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (p) {
            Ve(n, t, p);
          }
        Fn(e, t, n);
        break;
      case 21:
        Fn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((ct = (r = ct) || n.memoizedState !== null), Fn(e, t, n), (ct = r))
          : Fn(e, t, n);
        break;
      default:
        Fn(e, t, n);
    }
  }
  function df(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Qd()),
        t.forEach(function (r) {
          var l = tp.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function Kt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            s = t,
            p = s;
          e: for (; p !== null; ) {
            switch (p.tag) {
              case 5:
                (lt = p.stateNode), (Qt = !1);
                break e;
              case 3:
                (lt = p.stateNode.containerInfo), (Qt = !0);
                break e;
              case 4:
                (lt = p.stateNode.containerInfo), (Qt = !0);
                break e;
            }
            p = p.return;
          }
          if (lt === null) throw Error(a(160));
          cf(o, s, l), (lt = null), (Qt = !1);
          var m = l.alternate;
          m !== null && (m.return = null), (l.return = null);
        } catch (P) {
          Ve(l, t, P);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) pf(t, e), (t = t.sibling);
  }
  function pf(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Kt(t, e), bt(e), r & 4)) {
          try {
            Cl(3, e, e.return), zi(3, e);
          } catch (ee) {
            Ve(e, e.return, ee);
          }
          try {
            Cl(5, e, e.return);
          } catch (ee) {
            Ve(e, e.return, ee);
          }
        }
        break;
      case 1:
        Kt(t, e), bt(e), r & 512 && n !== null && jr(n, n.return);
        break;
      case 5:
        if (
          (Kt(t, e),
          bt(e),
          r & 512 && n !== null && jr(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            mt(l, "");
          } catch (ee) {
            Ve(e, e.return, ee);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            s = n !== null ? n.memoizedProps : o,
            p = e.type,
            m = e.updateQueue;
          if (((e.updateQueue = null), m !== null))
            try {
              p === "input" && o.type === "radio" && o.name != null && Wr(l, o),
                yr(p, s);
              var P = yr(p, o);
              for (s = 0; s < m.length; s += 2) {
                var j = m[s],
                  A = m[s + 1];
                j === "style"
                  ? Vl(l, A)
                  : j === "dangerouslySetInnerHTML"
                  ? Hl(l, A)
                  : j === "children"
                  ? mt(l, A)
                  : J(l, j, A, P);
              }
              switch (p) {
                case "input":
                  Qr(l, o);
                  break;
                case "textarea":
                  hr(l, o);
                  break;
                case "select":
                  var I = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var Y = o.value;
                  Y != null
                    ? ht(l, !!o.multiple, Y, !1)
                    : I !== !!o.multiple &&
                      (o.defaultValue != null
                        ? ht(l, !!o.multiple, o.defaultValue, !0)
                        : ht(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[pl] = o;
            } catch (ee) {
              Ve(e, e.return, ee);
            }
        }
        break;
      case 6:
        if ((Kt(t, e), bt(e), r & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (ee) {
            Ve(e, e.return, ee);
          }
        }
        break;
      case 3:
        if (
          (Kt(t, e), bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            nl(t.containerInfo);
          } catch (ee) {
            Ve(e, e.return, ee);
          }
        break;
      case 4:
        Kt(t, e), bt(e);
        break;
      case 13:
        Kt(t, e),
          bt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Lu = Fe())),
          r & 4 && df(e);
        break;
      case 22:
        if (
          ((j = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((ct = (P = ct) || j), Kt(t, e), (ct = P)) : Kt(t, e),
          bt(e),
          r & 8192)
        ) {
          if (
            ((P = e.memoizedState !== null),
            (e.stateNode.isHidden = P) && !j && e.mode & 1)
          )
            for (G = e, j = e.child; j !== null; ) {
              for (A = G = j; G !== null; ) {
                switch (((I = G), (Y = I.child), I.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Cl(4, I, I.return);
                    break;
                  case 1:
                    jr(I, I.return);
                    var Z = I.stateNode;
                    if (typeof Z.componentWillUnmount == "function") {
                      (r = I), (n = I.return);
                      try {
                        (t = r),
                          (Z.props = t.memoizedProps),
                          (Z.state = t.memoizedState),
                          Z.componentWillUnmount();
                      } catch (ee) {
                        Ve(r, n, ee);
                      }
                    }
                    break;
                  case 5:
                    jr(I, I.return);
                    break;
                  case 22:
                    if (I.memoizedState !== null) {
                      yf(A);
                      continue;
                    }
                }
                Y !== null ? ((Y.return = I), (G = Y)) : yf(A);
              }
              j = j.sibling;
            }
          e: for (j = null, A = e; ; ) {
            if (A.tag === 5) {
              if (j === null) {
                j = A;
                try {
                  (l = A.stateNode),
                    P
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((p = A.stateNode),
                        (m = A.memoizedProps.style),
                        (s =
                          m != null && m.hasOwnProperty("display")
                            ? m.display
                            : null),
                        (p.style.display = Xr("display", s)));
                } catch (ee) {
                  Ve(e, e.return, ee);
                }
              }
            } else if (A.tag === 6) {
              if (j === null)
                try {
                  A.stateNode.nodeValue = P ? "" : A.memoizedProps;
                } catch (ee) {
                  Ve(e, e.return, ee);
                }
            } else if (
              ((A.tag !== 22 && A.tag !== 23) ||
                A.memoizedState === null ||
                A === e) &&
              A.child !== null
            ) {
              (A.child.return = A), (A = A.child);
              continue;
            }
            if (A === e) break e;
            for (; A.sibling === null; ) {
              if (A.return === null || A.return === e) break e;
              j === A && (j = null), (A = A.return);
            }
            j === A && (j = null),
              (A.sibling.return = A.return),
              (A = A.sibling);
          }
        }
        break;
      case 19:
        Kt(t, e), bt(e), r & 4 && df(e);
        break;
      case 21:
        break;
      default:
        Kt(t, e), bt(e);
    }
  }
  function bt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (sf(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (mt(l, ""), (r.flags &= -33));
            var o = ff(e);
            Cu(e, o, l);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo,
              p = ff(e);
            xu(e, p, s);
            break;
          default:
            throw Error(a(161));
        }
      } catch (m) {
        Ve(e, e.return, m);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Yd(e, t, n) {
    (G = e), hf(e);
  }
  function hf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; G !== null; ) {
      var l = G,
        o = l.child;
      if (l.tag === 22 && r) {
        var s = l.memoizedState !== null || Mi;
        if (!s) {
          var p = l.alternate,
            m = (p !== null && p.memoizedState !== null) || ct;
          p = Mi;
          var P = ct;
          if (((Mi = s), (ct = m) && !P))
            for (G = l; G !== null; )
              (s = G),
                (m = s.child),
                s.tag === 22 && s.memoizedState !== null
                  ? vf(l)
                  : m !== null
                  ? ((m.return = s), (G = m))
                  : vf(l);
          for (; o !== null; ) (G = o), hf(o), (o = o.sibling);
          (G = l), (Mi = p), (ct = P);
        }
        mf(e);
      } else
        l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (G = o)) : mf(e);
    }
  }
  function mf(e) {
    for (; G !== null; ) {
      var t = G;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                ct || zi(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !ct)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Wt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && ms(t, o, r);
                break;
              case 3:
                var s = t.updateQueue;
                if (s !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  ms(t, s, n);
                }
                break;
              case 5:
                var p = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = p;
                  var m = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      m.autoFocus && n.focus();
                      break;
                    case "img":
                      m.src && (n.src = m.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var P = t.alternate;
                  if (P !== null) {
                    var j = P.memoizedState;
                    if (j !== null) {
                      var A = j.dehydrated;
                      A !== null && nl(A);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a(163));
            }
          ct || (t.flags & 512 && ku(t));
        } catch (I) {
          Ve(t, t.return, I);
        }
      }
      if (t === e) {
        G = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (G = n);
        break;
      }
      G = t.return;
    }
  }
  function yf(e) {
    for (; G !== null; ) {
      var t = G;
      if (t === e) {
        G = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (G = n);
        break;
      }
      G = t.return;
    }
  }
  function vf(e) {
    for (; G !== null; ) {
      var t = G;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              zi(4, t);
            } catch (m) {
              Ve(t, n, m);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (m) {
                Ve(t, l, m);
              }
            }
            var o = t.return;
            try {
              ku(t);
            } catch (m) {
              Ve(t, o, m);
            }
            break;
          case 5:
            var s = t.return;
            try {
              ku(t);
            } catch (m) {
              Ve(t, s, m);
            }
        }
      } catch (m) {
        Ve(t, t.return, m);
      }
      if (t === e) {
        G = null;
        break;
      }
      var p = t.sibling;
      if (p !== null) {
        (p.return = t.return), (G = p);
        break;
      }
      G = t.return;
    }
  }
  var Xd = Math.ceil,
    Fi = ae.ReactCurrentDispatcher,
    Ru = ae.ReactCurrentOwner,
    It = ae.ReactCurrentBatchConfig,
    ke = 0,
    tt = null,
    Xe = null,
    it = 0,
    Lt = 0,
    $r = Tn(0),
    be = 0,
    Rl = null,
    ir = 0,
    Oi = 0,
    Pu = 0,
    Pl = null,
    wt = null,
    Lu = 0,
    Ar = 1 / 0,
    mn = null,
    Ii = !1,
    _u = null,
    On = null,
    Ui = !1,
    In = null,
    ji = 0,
    Ll = 0,
    Tu = null,
    $i = -1,
    Ai = 0;
  function pt() {
    return ke & 6 ? Fe() : $i !== -1 ? $i : ($i = Fe());
  }
  function Un(e) {
    return e.mode & 1
      ? ke & 2 && it !== 0
        ? it & -it
        : Dd.transition !== null
        ? (Ai === 0 && (Ai = sa()), Ai)
        : ((e = Te),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ga(e.type))),
          e)
      : 1;
  }
  function Yt(e, t, n, r) {
    if (50 < Ll) throw ((Ll = 0), (Tu = null), Error(a(185)));
    Zr(e, n, r),
      (!(ke & 2) || e !== tt) &&
        (e === tt && (!(ke & 2) && (Oi |= n), be === 4 && jn(e, it)),
        St(e, r),
        n === 1 &&
          ke === 0 &&
          !(t.mode & 1) &&
          ((Ar = Fe() + 500), hi && Dn()));
  }
  function St(e, t) {
    var n = e.callbackNode;
    Dc(e, t);
    var r = Gl(e, e === tt ? it : 0);
    if (r === 0)
      n !== null && gr(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && gr(n), t === 1))
        e.tag === 0 ? Nd(wf.bind(null, e)) : rs(wf.bind(null, e)),
          Pd(function () {
            !(ke & 6) && Dn();
          }),
          (n = null);
      else {
        switch (fa(r)) {
          case 1:
            n = Le;
            break;
          case 4:
            n = Ze;
            break;
          case 16:
            n = un;
            break;
          case 536870912:
            n = $e;
            break;
          default:
            n = un;
        }
        n = Lf(n, gf.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function gf(e, t) {
    if ((($i = -1), (Ai = 0), ke & 6)) throw Error(a(327));
    var n = e.callbackNode;
    if (Hr() && e.callbackNode !== n) return null;
    var r = Gl(e, e === tt ? it : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Hi(e, r);
    else {
      t = r;
      var l = ke;
      ke |= 2;
      var o = Ef();
      (tt !== e || it !== t) && ((mn = null), (Ar = Fe() + 500), ur(e, t));
      do
        try {
          Zd();
          break;
        } catch (p) {
          Sf(e, p);
        }
      while (!0);
      Yo(),
        (Fi.current = o),
        (ke = l),
        Xe !== null ? (t = 0) : ((tt = null), (it = 0), (t = be));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = ao(e)), l !== 0 && ((r = l), (t = Nu(e, l)))),
        t === 1)
      )
        throw ((n = Rl), ur(e, 0), jn(e, r), St(e, Fe()), n);
      if (t === 6) jn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !Gd(l) &&
            ((t = Hi(e, r)),
            t === 2 && ((o = ao(e)), o !== 0 && ((r = o), (t = Nu(e, o)))),
            t === 1))
        )
          throw ((n = Rl), ur(e, 0), jn(e, r), St(e, Fe()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            ar(e, wt, mn);
            break;
          case 3:
            if (
              (jn(e, r),
              (r & 130023424) === r && ((t = Lu + 500 - Fe()), 10 < t))
            ) {
              if (Gl(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                pt(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Io(ar.bind(null, e, wt, mn), t);
              break;
            }
            ar(e, wt, mn);
            break;
          case 4:
            if ((jn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var s = 31 - Ht(r);
              (o = 1 << s), (s = t[s]), s > l && (l = s), (r &= ~o);
            }
            if (
              ((r = l),
              (r = Fe() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * Xd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Io(ar.bind(null, e, wt, mn), r);
              break;
            }
            ar(e, wt, mn);
            break;
          case 5:
            ar(e, wt, mn);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return St(e, Fe()), e.callbackNode === n ? gf.bind(null, e) : null;
  }
  function Nu(e, t) {
    var n = Pl;
    return (
      e.current.memoizedState.isDehydrated && (ur(e, t).flags |= 256),
      (e = Hi(e, t)),
      e !== 2 && ((t = wt), (wt = n), t !== null && Du(t)),
      e
    );
  }
  function Du(e) {
    wt === null ? (wt = e) : wt.push.apply(wt, e);
  }
  function Gd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!Bt(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function jn(e, t) {
    for (
      t &= ~Pu,
        t &= ~Oi,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Ht(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function wf(e) {
    if (ke & 6) throw Error(a(327));
    Hr();
    var t = Gl(e, 0);
    if (!(t & 1)) return St(e, Fe()), null;
    var n = Hi(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ao(e);
      r !== 0 && ((t = r), (n = Nu(e, r)));
    }
    if (n === 1) throw ((n = Rl), ur(e, 0), jn(e, t), St(e, Fe()), n);
    if (n === 6) throw Error(a(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      ar(e, wt, mn),
      St(e, Fe()),
      null
    );
  }
  function Mu(e, t) {
    var n = ke;
    ke |= 1;
    try {
      return e(t);
    } finally {
      (ke = n), ke === 0 && ((Ar = Fe() + 500), hi && Dn());
    }
  }
  function or(e) {
    In !== null && In.tag === 0 && !(ke & 6) && Hr();
    var t = ke;
    ke |= 1;
    var n = It.transition,
      r = Te;
    try {
      if (((It.transition = null), (Te = 1), e)) return e();
    } finally {
      (Te = r), (It.transition = n), (ke = t), !(ke & 6) && Dn();
    }
  }
  function zu() {
    (Lt = $r.current), Ue($r);
  }
  function ur(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Rd(n)), Xe !== null))
      for (n = Xe.return; n !== null; ) {
        var r = n;
        switch ((Bo(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && di();
            break;
          case 3:
            Ir(), Ue(yt), Ue(at), tu();
            break;
          case 5:
            bo(r);
            break;
          case 4:
            Ir();
            break;
          case 13:
            Ue(Ae);
            break;
          case 19:
            Ue(Ae);
            break;
          case 10:
            Xo(r.type._context);
            break;
          case 22:
          case 23:
            zu();
        }
        n = n.return;
      }
    if (
      ((tt = e),
      (Xe = e = $n(e.current, null)),
      (it = Lt = t),
      (be = 0),
      (Rl = null),
      (Pu = Oi = ir = 0),
      (wt = Pl = null),
      nr !== null)
    ) {
      for (t = 0; t < nr.length; t++)
        if (((n = nr[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var s = o.next;
            (o.next = l), (r.next = s);
          }
          n.pending = r;
        }
      nr = null;
    }
    return e;
  }
  function Sf(e, t) {
    do {
      var n = Xe;
      try {
        if ((Yo(), (Ci.current = _i), Ri)) {
          for (var r = He.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          Ri = !1;
        }
        if (
          ((lr = 0),
          (et = qe = He = null),
          (wl = !1),
          (Sl = 0),
          (Ru.current = null),
          n === null || n.return === null)
        ) {
          (be = 1), (Rl = t), (Xe = null);
          break;
        }
        e: {
          var o = e,
            s = n.return,
            p = n,
            m = t;
          if (
            ((t = it),
            (p.flags |= 32768),
            m !== null && typeof m == "object" && typeof m.then == "function")
          ) {
            var P = m,
              j = p,
              A = j.tag;
            if (!(j.mode & 1) && (A === 0 || A === 11 || A === 15)) {
              var I = j.alternate;
              I
                ? ((j.updateQueue = I.updateQueue),
                  (j.memoizedState = I.memoizedState),
                  (j.lanes = I.lanes))
                : ((j.updateQueue = null), (j.memoizedState = null));
            }
            var Y = Ws(s);
            if (Y !== null) {
              (Y.flags &= -257),
                Qs(Y, s, p, o, t),
                Y.mode & 1 && Vs(o, P, t),
                (t = Y),
                (m = P);
              var Z = t.updateQueue;
              if (Z === null) {
                var ee = new Set();
                ee.add(m), (t.updateQueue = ee);
              } else Z.add(m);
              break e;
            } else {
              if (!(t & 1)) {
                Vs(o, P, t), Fu();
                break e;
              }
              m = Error(a(426));
            }
          } else if (je && p.mode & 1) {
            var Qe = Ws(s);
            if (Qe !== null) {
              !(Qe.flags & 65536) && (Qe.flags |= 256),
                Qs(Qe, s, p, o, t),
                Qo(Ur(m, p));
              break e;
            }
          }
          (o = m = Ur(m, p)),
            be !== 4 && (be = 2),
            Pl === null ? (Pl = [o]) : Pl.push(o),
            (o = s);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = Hs(o, m, t);
                hs(o, x);
                break e;
              case 1:
                p = m;
                var w = o.type,
                  R = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof w.getDerivedStateFromError == "function" ||
                    (R !== null &&
                      typeof R.componentDidCatch == "function" &&
                      (On === null || !On.has(R))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var B = Bs(o, p, t);
                  hs(o, B);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        xf(n);
      } catch (ne) {
        (t = ne), Xe === n && n !== null && (Xe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ef() {
    var e = Fi.current;
    return (Fi.current = _i), e === null ? _i : e;
  }
  function Fu() {
    (be === 0 || be === 3 || be === 2) && (be = 4),
      tt === null || (!(ir & 268435455) && !(Oi & 268435455)) || jn(tt, it);
  }
  function Hi(e, t) {
    var n = ke;
    ke |= 2;
    var r = Ef();
    (tt !== e || it !== t) && ((mn = null), ur(e, t));
    do
      try {
        Jd();
        break;
      } catch (l) {
        Sf(e, l);
      }
    while (!0);
    if ((Yo(), (ke = n), (Fi.current = r), Xe !== null)) throw Error(a(261));
    return (tt = null), (it = 0), be;
  }
  function Jd() {
    for (; Xe !== null; ) kf(Xe);
  }
  function Zd() {
    for (; Xe !== null && !Jn(); ) kf(Xe);
  }
  function kf(e) {
    var t = Pf(e.alternate, e, Lt);
    (e.memoizedProps = e.pendingProps),
      t === null ? xf(e) : (Xe = t),
      (Ru.current = null);
  }
  function xf(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = Wd(n, t)), n !== null)) {
          (n.flags &= 32767), (Xe = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (be = 6), (Xe = null);
          return;
        }
      } else if (((n = Vd(n, t, Lt)), n !== null)) {
        Xe = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Xe = t;
        return;
      }
      Xe = t = e;
    } while (t !== null);
    be === 0 && (be = 5);
  }
  function ar(e, t, n) {
    var r = Te,
      l = It.transition;
    try {
      (It.transition = null), (Te = 1), qd(e, t, n, r);
    } finally {
      (It.transition = l), (Te = r);
    }
    return null;
  }
  function qd(e, t, n, r) {
    do Hr();
    while (In !== null);
    if (ke & 6) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(a(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (Mc(e, o),
      e === tt && ((Xe = tt = null), (it = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Ui ||
        ((Ui = !0),
        Lf(un, function () {
          return Hr(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
    ) {
      (o = It.transition), (It.transition = null);
      var s = Te;
      Te = 1;
      var p = ke;
      (ke |= 4),
        (Ru.current = null),
        Kd(e, n),
        pf(n, e),
        gd(Fo),
        (ql = !!zo),
        (Fo = zo = null),
        (e.current = n),
        Yd(n),
        on(),
        (ke = p),
        (Te = s),
        (It.transition = o);
    } else e.current = n;
    if (
      (Ui && ((Ui = !1), (In = e), (ji = l)),
      (o = e.pendingLanes),
      o === 0 && (On = null),
      uo(n.stateNode),
      St(e, Fe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Ii) throw ((Ii = !1), (e = _u), (_u = null), e);
    return (
      ji & 1 && e.tag !== 0 && Hr(),
      (o = e.pendingLanes),
      o & 1 ? (e === Tu ? Ll++ : ((Ll = 0), (Tu = e))) : (Ll = 0),
      Dn(),
      null
    );
  }
  function Hr() {
    if (In !== null) {
      var e = fa(ji),
        t = It.transition,
        n = Te;
      try {
        if (((It.transition = null), (Te = 16 > e ? 16 : e), In === null))
          var r = !1;
        else {
          if (((e = In), (In = null), (ji = 0), ke & 6)) throw Error(a(331));
          var l = ke;
          for (ke |= 4, G = e.current; G !== null; ) {
            var o = G,
              s = o.child;
            if (G.flags & 16) {
              var p = o.deletions;
              if (p !== null) {
                for (var m = 0; m < p.length; m++) {
                  var P = p[m];
                  for (G = P; G !== null; ) {
                    var j = G;
                    switch (j.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Cl(8, j, o);
                    }
                    var A = j.child;
                    if (A !== null) (A.return = j), (G = A);
                    else
                      for (; G !== null; ) {
                        j = G;
                        var I = j.sibling,
                          Y = j.return;
                        if ((af(j), j === P)) {
                          G = null;
                          break;
                        }
                        if (I !== null) {
                          (I.return = Y), (G = I);
                          break;
                        }
                        G = Y;
                      }
                  }
                }
                var Z = o.alternate;
                if (Z !== null) {
                  var ee = Z.child;
                  if (ee !== null) {
                    Z.child = null;
                    do {
                      var Qe = ee.sibling;
                      (ee.sibling = null), (ee = Qe);
                    } while (ee !== null);
                  }
                }
                G = o;
              }
            }
            if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (G = s);
            else
              e: for (; G !== null; ) {
                if (((o = G), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cl(9, o, o.return);
                  }
                var x = o.sibling;
                if (x !== null) {
                  (x.return = o.return), (G = x);
                  break e;
                }
                G = o.return;
              }
          }
          var w = e.current;
          for (G = w; G !== null; ) {
            s = G;
            var R = s.child;
            if (s.subtreeFlags & 2064 && R !== null) (R.return = s), (G = R);
            else
              e: for (s = w; G !== null; ) {
                if (((p = G), p.flags & 2048))
                  try {
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        zi(9, p);
                    }
                  } catch (ne) {
                    Ve(p, p.return, ne);
                  }
                if (p === s) {
                  G = null;
                  break e;
                }
                var B = p.sibling;
                if (B !== null) {
                  (B.return = p.return), (G = B);
                  break e;
                }
                G = p.return;
              }
          }
          if (
            ((ke = l),
            Dn(),
            xt && typeof xt.onPostCommitFiberRoot == "function")
          )
            try {
              xt.onPostCommitFiberRoot(At, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (Te = n), (It.transition = t);
      }
    }
    return !1;
  }
  function Cf(e, t, n) {
    (t = Ur(n, t)),
      (t = Hs(e, t, 1)),
      (e = zn(e, t, 1)),
      (t = pt()),
      e !== null && (Zr(e, 1, t), St(e, t));
  }
  function Ve(e, t, n) {
    if (e.tag === 3) Cf(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Cf(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (On === null || !On.has(r)))
          ) {
            (e = Ur(n, e)),
              (e = Bs(t, e, 1)),
              (t = zn(t, e, 1)),
              (e = pt()),
              t !== null && (Zr(t, 1, e), St(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function bd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = pt()),
      (e.pingedLanes |= e.suspendedLanes & n),
      tt === e &&
        (it & n) === n &&
        (be === 4 || (be === 3 && (it & 130023424) === it && 500 > Fe() - Lu)
          ? ur(e, 0)
          : (Pu |= n)),
      St(e, t);
  }
  function Rf(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Xl), (Xl <<= 1), !(Xl & 130023424) && (Xl = 4194304))
        : (t = 1));
    var n = pt();
    (e = dn(e, t)), e !== null && (Zr(e, t, n), St(e, n));
  }
  function ep(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Rf(e, n);
  }
  function tp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    r !== null && r.delete(t), Rf(e, n);
  }
  var Pf;
  Pf = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || yt.current) gt = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (gt = !1), Bd(e, t, n);
        gt = !!(e.flags & 131072);
      }
    else (gt = !1), je && t.flags & 1048576 && ls(t, yi, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Di(e, t), (e = t.pendingProps);
        var l = Tr(t, at.current);
        Or(t, n), (l = lu(null, t, r, e, l, n));
        var o = iu();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              vt(r) ? ((o = !0), pi(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Zo(t),
              (l.updater = Ti),
              (t.stateNode = l),
              (l._reactInternals = t),
              cu(t, r, e, n),
              (t = mu(null, t, r, !0, o, n)))
            : ((t.tag = 0), je && o && Ho(t), dt(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Di(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = rp(r)),
            (e = Wt(r, e)),
            l)
          ) {
            case 0:
              t = hu(null, t, r, e, n);
              break e;
            case 1:
              t = Zs(null, t, r, e, n);
              break e;
            case 11:
              t = Ks(null, t, r, e, n);
              break e;
            case 14:
              t = Ys(null, t, r, Wt(r.type, e), n);
              break e;
          }
          throw Error(a(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Wt(r, l)),
          hu(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Wt(r, l)),
          Zs(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((qs(t), e === null)) throw Error(a(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            ps(e, t),
            ki(t, r, null, n);
          var s = t.memoizedState;
          if (((r = s.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: s.cache,
                pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                transitions: s.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (l = Ur(Error(a(423)), t)), (t = bs(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Ur(Error(a(424)), t)), (t = bs(e, t, r, n, l));
              break e;
            } else
              for (
                Pt = _n(t.stateNode.containerInfo.firstChild),
                  Rt = t,
                  je = !0,
                  Vt = null,
                  n = cs(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Mr(), r === l)) {
              t = hn(e, t, n);
              break e;
            }
            dt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ys(t),
          e === null && Wo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (s = l.children),
          Oo(r, l) ? (s = null) : o !== null && Oo(r, o) && (t.flags |= 32),
          Js(e, t),
          dt(e, t, s, n),
          t.child
        );
      case 6:
        return e === null && Wo(t), null;
      case 13:
        return ef(e, t, n);
      case 4:
        return (
          qo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = zr(t, null, r, n)) : dt(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Wt(r, l)),
          Ks(e, t, r, l, n)
        );
      case 7:
        return dt(e, t, t.pendingProps, n), t.child;
      case 8:
        return dt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return dt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (s = l.value),
            Oe(wi, r._currentValue),
            (r._currentValue = s),
            o !== null)
          )
            if (Bt(o.value, s)) {
              if (o.children === l.children && !yt.current) {
                t = hn(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var p = o.dependencies;
                if (p !== null) {
                  s = o.child;
                  for (var m = p.firstContext; m !== null; ) {
                    if (m.context === r) {
                      if (o.tag === 1) {
                        (m = pn(-1, n & -n)), (m.tag = 2);
                        var P = o.updateQueue;
                        if (P !== null) {
                          P = P.shared;
                          var j = P.pending;
                          j === null
                            ? (m.next = m)
                            : ((m.next = j.next), (j.next = m)),
                            (P.pending = m);
                        }
                      }
                      (o.lanes |= n),
                        (m = o.alternate),
                        m !== null && (m.lanes |= n),
                        Go(o.return, n, t),
                        (p.lanes |= n);
                      break;
                    }
                    m = m.next;
                  }
                } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((s = o.return), s === null)) throw Error(a(341));
                  (s.lanes |= n),
                    (p = s.alternate),
                    p !== null && (p.lanes |= n),
                    Go(s, n, t),
                    (s = o.sibling);
                } else s = o.child;
                if (s !== null) s.return = o;
                else
                  for (s = o; s !== null; ) {
                    if (s === t) {
                      s = null;
                      break;
                    }
                    if (((o = s.sibling), o !== null)) {
                      (o.return = s.return), (s = o);
                      break;
                    }
                    s = s.return;
                  }
                o = s;
              }
          dt(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Or(t, n),
          (l = Ft(l)),
          (r = r(l)),
          (t.flags |= 1),
          dt(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = Wt(r, t.pendingProps)),
          (l = Wt(r.type, l)),
          Ys(e, t, r, l, n)
        );
      case 15:
        return Xs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Wt(r, l)),
          Di(e, t),
          (t.tag = 1),
          vt(r) ? ((e = !0), pi(t)) : (e = !1),
          Or(t, n),
          $s(t, r, l),
          cu(t, r, l, n),
          mu(null, t, r, !0, e, n)
        );
      case 19:
        return nf(e, t, n);
      case 22:
        return Gs(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function Lf(e, t) {
    return kt(e, t);
  }
  function np(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ut(e, t, n, r) {
    return new np(e, t, n, r);
  }
  function Ou(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function rp(e) {
    if (typeof e == "function") return Ou(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === rt)) return 11;
      if (e === _e) return 14;
    }
    return 2;
  }
  function $n(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Ut(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Bi(e, t, n, r, l, o) {
    var s = 2;
    if (((r = e), typeof e == "function")) Ou(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
      e: switch (e) {
        case pe:
          return sr(n.children, l, o, t);
        case ie:
          (s = 8), (l |= 8);
          break;
        case ge:
          return (
            (e = Ut(12, n, t, l | 2)), (e.elementType = ge), (e.lanes = o), e
          );
        case We:
          return (e = Ut(13, n, t, l)), (e.elementType = We), (e.lanes = o), e;
        case ut:
          return (e = Ut(19, n, t, l)), (e.elementType = ut), (e.lanes = o), e;
        case Ne:
          return Vi(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ce:
                s = 10;
                break e;
              case Ke:
                s = 9;
                break e;
              case rt:
                s = 11;
                break e;
              case _e:
                s = 14;
                break e;
              case Ge:
                (s = 16), (r = null);
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Ut(s, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function sr(e, t, n, r) {
    return (e = Ut(7, e, r, t)), (e.lanes = n), e;
  }
  function Vi(e, t, n, r) {
    return (
      (e = Ut(22, e, r, t)),
      (e.elementType = Ne),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Iu(e, t, n) {
    return (e = Ut(6, e, null, t)), (e.lanes = n), e;
  }
  function Uu(e, t, n) {
    return (
      (t = Ut(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function lp(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = so(0)),
      (this.expirationTimes = so(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = so(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function ju(e, t, n, r, l, o, s, p, m) {
    return (
      (e = new lp(e, t, n, p, m)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = Ut(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Zo(o),
      e
    );
  }
  function ip(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: le,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function _f(e) {
    if (!e) return Nn;
    e = e._reactInternals;
    e: {
      if (Pe(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (vt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (vt(n)) return ts(e, n, t);
    }
    return t;
  }
  function Tf(e, t, n, r, l, o, s, p, m) {
    return (
      (e = ju(n, r, !0, e, l, o, s, p, m)),
      (e.context = _f(null)),
      (n = e.current),
      (r = pt()),
      (l = Un(n)),
      (o = pn(r, l)),
      (o.callback = t ?? null),
      zn(n, o, l),
      (e.current.lanes = l),
      Zr(e, l, r),
      St(e, r),
      e
    );
  }
  function Wi(e, t, n, r) {
    var l = t.current,
      o = pt(),
      s = Un(l);
    return (
      (n = _f(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = pn(o, s)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = zn(l, t, s)),
      e !== null && (Yt(e, l, s, o), Ei(e, l, s)),
      s
    );
  }
  function Qi(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Nf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function $u(e, t) {
    Nf(e, t), (e = e.alternate) && Nf(e, t);
  }
  var Df =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Au(e) {
    this._internalRoot = e;
  }
  (Ki.prototype.render = Au.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      Wi(e, t, null, null);
    }),
    (Ki.prototype.unmount = Au.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          or(function () {
            Wi(null, e, null, null);
          }),
            (t[an] = null);
        }
      });
  function Ki(e) {
    this._internalRoot = e;
  }
  Ki.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = pa();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Rn.length && t !== 0 && t < Rn[n].priority; n++);
      Rn.splice(n, 0, e), n === 0 && ya(e);
    }
  };
  function Hu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Yi(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Mf() {}
  function op(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var P = Qi(s);
          o.call(P);
        };
      }
      var s = Tf(t, r, e, 0, null, !1, !1, "", Mf);
      return (
        (e._reactRootContainer = s),
        (e[an] = s.current),
        cl(e.nodeType === 8 ? e.parentNode : e),
        or(),
        s
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var p = r;
      r = function () {
        var P = Qi(m);
        p.call(P);
      };
    }
    var m = ju(e, 0, !1, null, null, !1, !1, "", Mf);
    return (
      (e._reactRootContainer = m),
      (e[an] = m.current),
      cl(e.nodeType === 8 ? e.parentNode : e),
      or(function () {
        Wi(t, m, n, r);
      }),
      m
    );
  }
  function Xi(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var s = o;
      if (typeof l == "function") {
        var p = l;
        l = function () {
          var m = Qi(s);
          p.call(m);
        };
      }
      Wi(t, s, e, l);
    } else s = op(n, t, e, l, r);
    return Qi(s);
  }
  (ca = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Jr(t.pendingLanes);
          n !== 0 &&
            (fo(t, n | 1), St(t, Fe()), !(ke & 6) && ((Ar = Fe() + 500), Dn()));
        }
        break;
      case 13:
        or(function () {
          var r = dn(e, 1);
          if (r !== null) {
            var l = pt();
            Yt(r, e, 1, l);
          }
        }),
          $u(e, 1);
    }
  }),
    (co = function (e) {
      if (e.tag === 13) {
        var t = dn(e, 134217728);
        if (t !== null) {
          var n = pt();
          Yt(t, e, 134217728, n);
        }
        $u(e, 134217728);
      }
    }),
    (da = function (e) {
      if (e.tag === 13) {
        var t = Un(e),
          n = dn(e, t);
        if (n !== null) {
          var r = pt();
          Yt(n, e, t, r);
        }
        $u(e, t);
      }
    }),
    (pa = function () {
      return Te;
    }),
    (ha = function (e, t) {
      var n = Te;
      try {
        return (Te = e), t();
      } finally {
        Te = n;
      }
    }),
    (vr = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Qr(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = ci(r);
                if (!l) throw Error(a(90));
                jl(r), Qr(r, l);
              }
            }
          }
          break;
        case "textarea":
          hr(e, n);
          break;
        case "select":
          (t = n.value), t != null && ht(e, !!n.multiple, t, !1);
      }
    }),
    (Kl = Mu),
    (y = or);
  var up = { usingClientEntryPoint: !1, Events: [hl, Lr, ci, Gn, Ql, Mu] },
    _l = {
      findFiberByHostInstance: qn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    ap = {
      bundleType: _l.bundleType,
      version: _l.version,
      rendererPackageName: _l.rendererPackageName,
      rendererConfig: _l.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ae.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = En(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: _l.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gi.isDisabled && Gi.supportsFiber)
      try {
        (At = Gi.inject(ap)), (xt = Gi);
      } catch {}
  }
  return (
    (Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = up),
    (Et.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Hu(t)) throw Error(a(200));
      return ip(e, t, null, n);
    }),
    (Et.createRoot = function (e, t) {
      if (!Hu(e)) throw Error(a(299));
      var n = !1,
        r = "",
        l = Df;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = ju(e, 1, !1, null, null, n, !1, r, l)),
        (e[an] = t.current),
        cl(e.nodeType === 8 ? e.parentNode : e),
        new Au(t)
      );
    }),
    (Et.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(a(188))
          : ((e = Object.keys(e).join(",")), Error(a(268, e)));
      return (e = En(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Et.flushSync = function (e) {
      return or(e);
    }),
    (Et.hydrate = function (e, t, n) {
      if (!Yi(t)) throw Error(a(200));
      return Xi(null, e, t, !0, n);
    }),
    (Et.hydrateRoot = function (e, t, n) {
      if (!Hu(e)) throw Error(a(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        s = Df;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = Tf(t, null, e, 1, n ?? null, l, !1, o, s)),
        (e[an] = t.current),
        cl(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Ki(t);
    }),
    (Et.render = function (e, t, n) {
      if (!Yi(t)) throw Error(a(200));
      return Xi(null, e, t, !1, n);
    }),
    (Et.unmountComponentAtNode = function (e) {
      if (!Yi(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (or(function () {
            Xi(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[an] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Et.unstable_batchedUpdates = Mu),
    (Et.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Yi(n)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return Xi(e, t, n, !1, r);
    }),
    (Et.version = "18.3.1-next-f1338f8080-20240426"),
    Et
  );
}
var jf;
function yp() {
  if (jf) return Vu.exports;
  jf = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (u) {
        console.error(u);
      }
  }
  return i(), (Vu.exports = mp()), Vu.exports;
}
var Tl = {},
  $f;
function vp() {
  if ($f) return Tl;
  ($f = 1),
    Object.defineProperty(Tl, "__esModule", { value: !0 }),
    (Tl.parse = h),
    (Tl.serialize = S);
  const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    u = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    c = /^[\u0020-\u003A\u003D-\u007E]*$/,
    f = Object.prototype.toString,
    d = (() => {
      const L = function () {};
      return (L.prototype = Object.create(null)), L;
    })();
  function h(L, N) {
    const z = new d(),
      $ = L.length;
    if ($ < 2) return z;
    const H = (N == null ? void 0 : N.decode) || D;
    let M = 0;
    do {
      const b = L.indexOf("=", M);
      if (b === -1) break;
      const J = L.indexOf(";", M),
        ae = J === -1 ? $ : J;
      if (b > ae) {
        M = L.lastIndexOf(";", b - 1) + 1;
        continue;
      }
      const C = v(L, M, b),
        le = g(L, b, C),
        pe = L.slice(C, le);
      if (z[pe] === void 0) {
        let ie = v(L, b + 1, ae),
          ge = g(L, ae, ie);
        const Ce = H(L.slice(ie, ge));
        z[pe] = Ce;
      }
      M = ae + 1;
    } while (M < $);
    return z;
  }
  function v(L, N, z) {
    do {
      const $ = L.charCodeAt(N);
      if ($ !== 32 && $ !== 9) return N;
    } while (++N < z);
    return z;
  }
  function g(L, N, z) {
    for (; N > z; ) {
      const $ = L.charCodeAt(--N);
      if ($ !== 32 && $ !== 9) return N + 1;
    }
    return z;
  }
  function S(L, N, z) {
    const $ = (z == null ? void 0 : z.encode) || encodeURIComponent;
    if (!i.test(L)) throw new TypeError(`argument name is invalid: ${L}`);
    const H = $(N);
    if (!u.test(H)) throw new TypeError(`argument val is invalid: ${N}`);
    let M = L + "=" + H;
    if (!z) return M;
    if (z.maxAge !== void 0) {
      if (!Number.isInteger(z.maxAge))
        throw new TypeError(`option maxAge is invalid: ${z.maxAge}`);
      M += "; Max-Age=" + z.maxAge;
    }
    if (z.domain) {
      if (!a.test(z.domain))
        throw new TypeError(`option domain is invalid: ${z.domain}`);
      M += "; Domain=" + z.domain;
    }
    if (z.path) {
      if (!c.test(z.path))
        throw new TypeError(`option path is invalid: ${z.path}`);
      M += "; Path=" + z.path;
    }
    if (z.expires) {
      if (!O(z.expires) || !Number.isFinite(z.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${z.expires}`);
      M += "; Expires=" + z.expires.toUTCString();
    }
    if (
      (z.httpOnly && (M += "; HttpOnly"),
      z.secure && (M += "; Secure"),
      z.partitioned && (M += "; Partitioned"),
      z.priority)
    )
      switch (
        typeof z.priority == "string" ? z.priority.toLowerCase() : void 0
      ) {
        case "low":
          M += "; Priority=Low";
          break;
        case "medium":
          M += "; Priority=Medium";
          break;
        case "high":
          M += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${z.priority}`);
      }
    if (z.sameSite)
      switch (
        typeof z.sameSite == "string" ? z.sameSite.toLowerCase() : z.sameSite
      ) {
        case !0:
        case "strict":
          M += "; SameSite=Strict";
          break;
        case "lax":
          M += "; SameSite=Lax";
          break;
        case "none":
          M += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${z.sameSite}`);
      }
    return M;
  }
  function D(L) {
    if (L.indexOf("%") === -1) return L;
    try {
      return decodeURIComponent(L);
    } catch {
      return L;
    }
  }
  function O(L) {
    return f.call(L) === "[object Date]";
  }
  return Tl;
}
vp();
/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Af = "popstate";
function gp(i = {}) {
  function u(c, f) {
    let { pathname: d, search: h, hash: v } = c.location;
    return Fl(
      "",
      { pathname: d, search: h, hash: v },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || "default"
    );
  }
  function a(c, f) {
    return typeof f == "string" ? f : Vn(f);
  }
  return Sp(u, a, null, i);
}
function Se(i, u) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(u);
}
function ot(i, u) {
  if (!i) {
    typeof console < "u" && console.warn(u);
    try {
      throw new Error(u);
    } catch {}
  }
}
function wp() {
  return Math.random().toString(36).substring(2, 10);
}
function Hf(i, u) {
  return { usr: i.state, key: i.key, idx: u };
}
function Fl(i, u, a = null, c) {
  return {
    pathname: typeof i == "string" ? i : i.pathname,
    search: "",
    hash: "",
    ...(typeof u == "string" ? Wn(u) : u),
    state: a,
    key: (u && u.key) || c || wp(),
  };
}
function Vn({ pathname: i = "/", search: u = "", hash: a = "" }) {
  return (
    u && u !== "?" && (i += u.charAt(0) === "?" ? u : "?" + u),
    a && a !== "#" && (i += a.charAt(0) === "#" ? a : "#" + a),
    i
  );
}
function Wn(i) {
  let u = {};
  if (i) {
    let a = i.indexOf("#");
    a >= 0 && ((u.hash = i.substring(a)), (i = i.substring(0, a)));
    let c = i.indexOf("?");
    c >= 0 && ((u.search = i.substring(c)), (i = i.substring(0, c))),
      i && (u.pathname = i);
  }
  return u;
}
function Sp(i, u, a, c = {}) {
  let { window: f = document.defaultView, v5Compat: d = !1 } = c,
    h = f.history,
    v = "POP",
    g = null,
    S = D();
  S == null && ((S = 0), h.replaceState({ ...h.state, idx: S }, ""));
  function D() {
    return (h.state || { idx: null }).idx;
  }
  function O() {
    v = "POP";
    let H = D(),
      M = H == null ? null : H - S;
    (S = H), g && g({ action: v, location: $.location, delta: M });
  }
  function L(H, M) {
    v = "PUSH";
    let b = Fl($.location, H, M);
    S = D() + 1;
    let J = Hf(b, S),
      ae = $.createHref(b);
    try {
      h.pushState(J, "", ae);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      f.location.assign(ae);
    }
    d && g && g({ action: v, location: $.location, delta: 1 });
  }
  function N(H, M) {
    v = "REPLACE";
    let b = Fl($.location, H, M);
    S = D();
    let J = Hf(b, S),
      ae = $.createHref(b);
    h.replaceState(J, "", ae),
      d && g && g({ action: v, location: $.location, delta: 0 });
  }
  function z(H) {
    let M = f.location.origin !== "null" ? f.location.origin : f.location.href,
      b = typeof H == "string" ? H : Vn(H);
    return (
      (b = b.replace(/ $/, "%20")),
      Se(
        M,
        `No window.location.(origin|href) available to create URL for href: ${b}`
      ),
      new URL(b, M)
    );
  }
  let $ = {
    get action() {
      return v;
    },
    get location() {
      return i(f, h);
    },
    listen(H) {
      if (g) throw new Error("A history only accepts one active listener");
      return (
        f.addEventListener(Af, O),
        (g = H),
        () => {
          f.removeEventListener(Af, O), (g = null);
        }
      );
    },
    createHref(H) {
      return u(f, H);
    },
    createURL: z,
    encodeLocation(H) {
      let M = z(H);
      return { pathname: M.pathname, search: M.search, hash: M.hash };
    },
    push: L,
    replace: N,
    go(H) {
      return h.go(H);
    },
  };
  return $;
}
var Ep = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function kp(i) {
  return i.index === !0;
}
function to(i, u, a = [], c = {}) {
  return i.map((f, d) => {
    let h = [...a, String(d)],
      v = typeof f.id == "string" ? f.id : h.join("-");
    if (
      (Se(
        f.index !== !0 || !f.children,
        "Cannot specify children on an index route"
      ),
      Se(
        !c[v],
        `Found a route id collision on id "${v}".  Route id's must be globally unique within Data Router usages`
      ),
      kp(f))
    ) {
      let g = { ...f, ...u(f), id: v };
      return (c[v] = g), g;
    } else {
      let g = { ...f, ...u(f), id: v, children: void 0 };
      return (
        (c[v] = g), f.children && (g.children = to(f.children, u, h, c)), g
      );
    }
  });
}
function Bn(i, u, a = "/") {
  return qi(i, u, a, !1);
}
function qi(i, u, a, c) {
  let f = typeof u == "string" ? Wn(u) : u,
    d = Gt(f.pathname || "/", a);
  if (d == null) return null;
  let h = ac(i);
  Cp(h);
  let v = null;
  for (let g = 0; v == null && g < h.length; ++g) {
    let S = Op(d);
    v = zp(h[g], S, c);
  }
  return v;
}
function xp(i, u) {
  let { route: a, pathname: c, params: f } = i;
  return { id: a.id, pathname: c, params: f, data: u[a.id], handle: a.handle };
}
function ac(i, u = [], a = [], c = "") {
  let f = (d, h, v) => {
    let g = {
      relativePath: v === void 0 ? d.path || "" : v,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: h,
      route: d,
    };
    g.relativePath.startsWith("/") &&
      (Se(
        g.relativePath.startsWith(c),
        `Absolute route path "${g.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (g.relativePath = g.relativePath.slice(c.length)));
    let S = en([c, g.relativePath]),
      D = a.concat(g);
    d.children &&
      d.children.length > 0 &&
      (Se(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${S}".`
      ),
      ac(d.children, u, D, S)),
      !(d.path == null && !d.index) &&
        u.push({ path: S, score: Dp(S, d.index), routesMeta: D });
  };
  return (
    i.forEach((d, h) => {
      var v;
      if (d.path === "" || !((v = d.path) != null && v.includes("?"))) f(d, h);
      else for (let g of sc(d.path)) f(d, h, g);
    }),
    u
  );
}
function sc(i) {
  let u = i.split("/");
  if (u.length === 0) return [];
  let [a, ...c] = u,
    f = a.endsWith("?"),
    d = a.replace(/\?$/, "");
  if (c.length === 0) return f ? [d, ""] : [d];
  let h = sc(c.join("/")),
    v = [];
  return (
    v.push(...h.map((g) => (g === "" ? d : [d, g].join("/")))),
    f && v.push(...h),
    v.map((g) => (i.startsWith("/") && g === "" ? "/" : g))
  );
}
function Cp(i) {
  i.sort((u, a) =>
    u.score !== a.score
      ? a.score - u.score
      : Mp(
          u.routesMeta.map((c) => c.childrenIndex),
          a.routesMeta.map((c) => c.childrenIndex)
        )
  );
}
var Rp = /^:[\w-]+$/,
  Pp = 3,
  Lp = 2,
  _p = 1,
  Tp = 10,
  Np = -2,
  Bf = (i) => i === "*";
function Dp(i, u) {
  let a = i.split("/"),
    c = a.length;
  return (
    a.some(Bf) && (c += Np),
    u && (c += Lp),
    a
      .filter((f) => !Bf(f))
      .reduce((f, d) => f + (Rp.test(d) ? Pp : d === "" ? _p : Tp), c)
  );
}
function Mp(i, u) {
  return i.length === u.length && i.slice(0, -1).every((c, f) => c === u[f])
    ? i[i.length - 1] - u[u.length - 1]
    : 0;
}
function zp(i, u, a = !1) {
  let { routesMeta: c } = i,
    f = {},
    d = "/",
    h = [];
  for (let v = 0; v < c.length; ++v) {
    let g = c[v],
      S = v === c.length - 1,
      D = d === "/" ? u : u.slice(d.length) || "/",
      O = no(
        { path: g.relativePath, caseSensitive: g.caseSensitive, end: S },
        D
      ),
      L = g.route;
    if (
      (!O &&
        S &&
        a &&
        !c[c.length - 1].route.index &&
        (O = no(
          { path: g.relativePath, caseSensitive: g.caseSensitive, end: !1 },
          D
        )),
      !O)
    )
      return null;
    Object.assign(f, O.params),
      h.push({
        params: f,
        pathname: en([d, O.pathname]),
        pathnameBase: jp(en([d, O.pathnameBase])),
        route: L,
      }),
      O.pathnameBase !== "/" && (d = en([d, O.pathnameBase]));
  }
  return h;
}
function no(i, u) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [a, c] = Fp(i.path, i.caseSensitive, i.end),
    f = u.match(a);
  if (!f) return null;
  let d = f[0],
    h = d.replace(/(.)\/+$/, "$1"),
    v = f.slice(1);
  return {
    params: c.reduce((S, { paramName: D, isOptional: O }, L) => {
      if (D === "*") {
        let z = v[L] || "";
        h = d.slice(0, d.length - z.length).replace(/(.)\/+$/, "$1");
      }
      const N = v[L];
      return (
        O && !N ? (S[D] = void 0) : (S[D] = (N || "").replace(/%2F/g, "/")), S
      );
    }, {}),
    pathname: d,
    pathnameBase: h,
    pattern: i,
  };
}
function Fp(i, u = !1, a = !0) {
  ot(
    i === "*" || !i.endsWith("*") || i.endsWith("/*"),
    `Route path "${i}" will be treated as if it were "${i.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let c = [],
    f =
      "^" +
      i
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (h, v, g) => (
            c.push({ paramName: v, isOptional: g != null }),
            g ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    i.endsWith("*")
      ? (c.push({ paramName: "*" }),
        (f += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
      ? (f += "\\/*$")
      : i !== "" && i !== "/" && (f += "(?:(?=\\/|$))"),
    [new RegExp(f, u ? void 0 : "i"), c]
  );
}
function Op(i) {
  try {
    return i
      .split("/")
      .map((u) => decodeURIComponent(u).replace(/\//g, "%2F"))
      .join("/");
  } catch (u) {
    return (
      ot(
        !1,
        `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`
      ),
      i
    );
  }
}
function Gt(i, u) {
  if (u === "/") return i;
  if (!i.toLowerCase().startsWith(u.toLowerCase())) return null;
  let a = u.endsWith("/") ? u.length - 1 : u.length,
    c = i.charAt(a);
  return c && c !== "/" ? null : i.slice(a) || "/";
}
function Ip(i, u = "/") {
  let {
    pathname: a,
    search: c = "",
    hash: f = "",
  } = typeof i == "string" ? Wn(i) : i;
  return {
    pathname: a ? (a.startsWith("/") ? a : Up(a, u)) : u,
    search: $p(c),
    hash: Ap(f),
  };
}
function Up(i, u) {
  let a = u.replace(/\/+$/, "").split("/");
  return (
    i.split("/").forEach((f) => {
      f === ".." ? a.length > 1 && a.pop() : f !== "." && a.push(f);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function Ku(i, u, a, c) {
  return `Cannot include a '${i}' character in a manually specified \`to.${u}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function fc(i) {
  return i.filter(
    (u, a) => a === 0 || (u.route.path && u.route.path.length > 0)
  );
}
function bu(i) {
  let u = fc(i);
  return u.map((a, c) => (c === u.length - 1 ? a.pathname : a.pathnameBase));
}
function ea(i, u, a, c = !1) {
  let f;
  typeof i == "string"
    ? (f = Wn(i))
    : ((f = { ...i }),
      Se(
        !f.pathname || !f.pathname.includes("?"),
        Ku("?", "pathname", "search", f)
      ),
      Se(
        !f.pathname || !f.pathname.includes("#"),
        Ku("#", "pathname", "hash", f)
      ),
      Se(!f.search || !f.search.includes("#"), Ku("#", "search", "hash", f)));
  let d = i === "" || f.pathname === "",
    h = d ? "/" : f.pathname,
    v;
  if (h == null) v = a;
  else {
    let O = u.length - 1;
    if (!c && h.startsWith("..")) {
      let L = h.split("/");
      for (; L[0] === ".."; ) L.shift(), (O -= 1);
      f.pathname = L.join("/");
    }
    v = O >= 0 ? u[O] : "/";
  }
  let g = Ip(f, v),
    S = h && h !== "/" && h.endsWith("/"),
    D = (d || h === ".") && a.endsWith("/");
  return !g.pathname.endsWith("/") && (S || D) && (g.pathname += "/"), g;
}
var en = (i) => i.join("/").replace(/\/\/+/g, "/"),
  jp = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
  $p = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
  Ap = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i),
  ro = class {
    constructor(i, u, a, c = !1) {
      (this.status = i),
        (this.statusText = u || ""),
        (this.internal = c),
        a instanceof Error
          ? ((this.data = a.toString()), (this.error = a))
          : (this.data = a);
    }
  };
function lo(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.internal == "boolean" &&
    "data" in i
  );
}
var cc = ["POST", "PUT", "PATCH", "DELETE"],
  Hp = new Set(cc),
  Bp = ["GET", ...cc],
  Vp = new Set(Bp),
  Wp = new Set([301, 302, 303, 307, 308]),
  Qp = new Set([307, 308]),
  Yu = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Kp = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Nl = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  ta = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Yp = (i) => ({ hasErrorBoundary: !!i.hasErrorBoundary }),
  dc = "remix-router-transitions",
  pc = Symbol("ResetLoaderData");
function Xp(i) {
  const u = i.window ? i.window : typeof window < "u" ? window : void 0,
    a =
      typeof u < "u" &&
      typeof u.document < "u" &&
      typeof u.document.createElement < "u";
  Se(
    i.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let c = i.mapRouteProperties || Yp,
    f = {},
    d = to(i.routes, c, void 0, f),
    h,
    v = i.basename || "/",
    g = i.dataStrategy || bp,
    S = i.patchRoutesOnNavigation,
    D = { ...i.future },
    O = null,
    L = new Set(),
    N = null,
    z = null,
    $ = null,
    H = i.hydrationData != null,
    M = Bn(d, i.history.location, v),
    b = null;
  if (M == null && !S) {
    let y = jt(404, { pathname: i.history.location.pathname }),
      { matches: k, route: _ } = bf(d);
    (M = k), (b = { [_.id]: y });
  }
  M &&
    !i.hydrationData &&
    Xn(M, d, i.history.location.pathname).active &&
    (M = null);
  let J;
  if (M)
    if (M.some((y) => y.route.lazy)) J = !1;
    else if (!M.some((y) => y.route.loader)) J = !0;
    else {
      let y = i.hydrationData ? i.hydrationData.loaderData : null,
        k = i.hydrationData ? i.hydrationData.errors : null;
      if (k) {
        let _ = M.findIndex((U) => k[U.route.id] !== void 0);
        J = M.slice(0, _ + 1).every((U) => !Zu(U.route, y, k));
      } else J = M.every((_) => !Zu(_.route, y, k));
    }
  else {
    (J = !1), (M = []);
    let y = Xn(null, d, i.history.location.pathname);
    y.active && y.matches && (M = y.matches);
  }
  let ae,
    C = {
      historyAction: i.history.action,
      location: i.history.location,
      matches: M,
      initialized: J,
      navigation: Yu,
      restoreScrollPosition: i.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (i.hydrationData && i.hydrationData.loaderData) || {},
      actionData: (i.hydrationData && i.hydrationData.actionData) || null,
      errors: (i.hydrationData && i.hydrationData.errors) || b,
      fetchers: new Map(),
      blockers: new Map(),
    },
    le = "POP",
    pe = !1,
    ie,
    ge = !1,
    Ce = new Map(),
    Ke = null,
    rt = !1,
    We = !1,
    ut = new Set(),
    _e = new Map(),
    Ge = 0,
    Ne = -1,
    V = new Map(),
    re = new Set(),
    Q = new Map(),
    E = new Map(),
    F = new Set(),
    se = new Map(),
    he,
    me = null;
  function Ee() {
    if (
      ((O = i.history.listen(({ action: y, location: k, delta: _ }) => {
        if (he) {
          he(), (he = void 0);
          return;
        }
        ot(
          se.size === 0 || _ != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let U = yr({
          currentLocation: C.location,
          nextLocation: k,
          historyAction: y,
        });
        if (U && _ != null) {
          let K = new Promise((te) => {
            he = te;
          });
          i.history.go(_ * -1),
            gn(U, {
              state: "blocked",
              location: k,
              proceed() {
                gn(U, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  K.then(() => i.history.go(_));
              },
              reset() {
                let te = new Map(C.blockers);
                te.set(U, Nl), ye({ blockers: te });
              },
            });
          return;
        }
        return Tt(y, k);
      })),
      a)
    ) {
      fh(u, Ce);
      let y = () => ch(u, Ce);
      u.addEventListener("pagehide", y),
        (Ke = () => u.removeEventListener("pagehide", y));
    }
    return C.initialized || Tt("POP", C.location, { initialHydration: !0 }), ae;
  }
  function De() {
    O && O(),
      Ke && Ke(),
      L.clear(),
      ie && ie.abort(),
      C.fetchers.forEach((y, k) => yn(k)),
      C.blockers.forEach((y, k) => Wl(k));
  }
  function Re(y) {
    return L.add(y), () => L.delete(y);
  }
  function ye(y, k = {}) {
    C = { ...C, ...y };
    let _ = [],
      U = [];
    C.fetchers.forEach((K, te) => {
      K.state === "idle" && (F.has(te) ? _.push(te) : U.push(te));
    }),
      F.forEach((K) => {
        !C.fetchers.has(K) && !_e.has(K) && _.push(K);
      }),
      [...L].forEach((K) =>
        K(C, {
          deletedFetchers: _,
          viewTransitionOpts: k.viewTransitionOpts,
          flushSync: k.flushSync === !0,
        })
      ),
      _.forEach((K) => yn(K)),
      U.forEach((K) => C.fetchers.delete(K));
  }
  function Ye(y, k, { flushSync: _ } = {}) {
    var W, ce;
    let U =
        C.actionData != null &&
        C.navigation.formMethod != null &&
        Xt(C.navigation.formMethod) &&
        C.navigation.state === "loading" &&
        ((W = y.state) == null ? void 0 : W._isRedirect) !== !0,
      K;
    k.actionData
      ? Object.keys(k.actionData).length > 0
        ? (K = k.actionData)
        : (K = null)
      : U
      ? (K = C.actionData)
      : (K = null);
    let te = k.loaderData
        ? Zf(C.loaderData, k.loaderData, k.matches || [], k.errors)
        : C.loaderData,
      fe = C.blockers;
    fe.size > 0 && ((fe = new Map(fe)), fe.forEach((ve, ze) => fe.set(ze, Nl)));
    let X =
      pe === !0 ||
      (C.navigation.formMethod != null &&
        Xt(C.navigation.formMethod) &&
        ((ce = y.state) == null ? void 0 : ce._isRedirect) !== !0);
    h && ((d = h), (h = void 0)),
      rt ||
        le === "POP" ||
        (le === "PUSH"
          ? i.history.push(y, y.state)
          : le === "REPLACE" && i.history.replace(y, y.state));
    let q;
    if (le === "POP") {
      let ve = Ce.get(C.location.pathname);
      ve && ve.has(y.pathname)
        ? (q = { currentLocation: C.location, nextLocation: y })
        : Ce.has(y.pathname) &&
          (q = { currentLocation: y, nextLocation: C.location });
    } else if (ge) {
      let ve = Ce.get(C.location.pathname);
      ve
        ? ve.add(y.pathname)
        : ((ve = new Set([y.pathname])), Ce.set(C.location.pathname, ve)),
        (q = { currentLocation: C.location, nextLocation: y });
    }
    ye(
      {
        ...k,
        actionData: K,
        loaderData: te,
        historyAction: le,
        location: y,
        initialized: !0,
        navigation: Yu,
        revalidation: "idle",
        restoreScrollPosition: ln(y, k.matches || C.matches),
        preventScrollReset: X,
        blockers: fe,
      },
      { viewTransitionOpts: q, flushSync: _ === !0 }
    ),
      (le = "POP"),
      (pe = !1),
      (ge = !1),
      (rt = !1),
      (We = !1),
      me == null || me.resolve(),
      (me = null);
  }
  async function Qn(y, k) {
    if (typeof y == "number") {
      i.history.go(y);
      return;
    }
    let _ = Ju(
        C.location,
        C.matches,
        v,
        y,
        k == null ? void 0 : k.fromRouteId,
        k == null ? void 0 : k.relative
      ),
      { path: U, submission: K, error: te } = Vf(!1, _, k),
      fe = C.location,
      X = Fl(C.location, U, k && k.state);
    X = { ...X, ...i.history.encodeLocation(X) };
    let q = k && k.replace != null ? k.replace : void 0,
      W = "PUSH";
    q === !0
      ? (W = "REPLACE")
      : q === !1 ||
        (K != null &&
          Xt(K.formMethod) &&
          K.formAction === C.location.pathname + C.location.search &&
          (W = "REPLACE"));
    let ce =
        k && "preventScrollReset" in k ? k.preventScrollReset === !0 : void 0,
      ve = (k && k.flushSync) === !0,
      ze = yr({ currentLocation: fe, nextLocation: X, historyAction: W });
    if (ze) {
      gn(ze, {
        state: "blocked",
        location: X,
        proceed() {
          gn(ze, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: X,
          }),
            Qn(y, k);
        },
        reset() {
          let Je = new Map(C.blockers);
          Je.set(ze, Nl), ye({ blockers: Je });
        },
      });
      return;
    }
    await Tt(W, X, {
      submission: K,
      pendingError: te,
      preventScrollReset: ce,
      replace: k && k.replace,
      enableViewTransition: k && k.viewTransition,
      flushSync: ve,
    });
  }
  function jl() {
    me || (me = dh()), hr(), ye({ revalidation: "loading" });
    let y = me.promise;
    return C.navigation.state === "submitting"
      ? y
      : C.navigation.state === "idle"
      ? (Tt(C.historyAction, C.location, {
          startUninterruptedRevalidation: !0,
        }),
        y)
      : (Tt(le || C.historyAction, C.navigation.location, {
          overrideNavigation: C.navigation,
          enableViewTransition: ge === !0,
        }),
        y);
  }
  async function Tt(y, k, _) {
    ie && ie.abort(),
      (ie = null),
      (le = y),
      (rt = (_ && _.startUninterruptedRevalidation) === !0),
      wn(C.location, C.matches),
      (pe = (_ && _.preventScrollReset) === !0),
      (ge = (_ && _.enableViewTransition) === !0);
    let U = h || d,
      K = _ && _.overrideNavigation,
      te = Bn(U, k, v),
      fe = (_ && _.flushSync) === !0,
      X = Xn(te, U, k.pathname);
    if ((X.active && X.matches && (te = X.matches), !te)) {
      let { error: Pe, notFoundMatches: Me, route: Be } = Yn(k.pathname);
      Ye(
        k,
        { matches: Me, loaderData: {}, errors: { [Be.id]: Pe } },
        { flushSync: fe }
      );
      return;
    }
    if (
      C.initialized &&
      !We &&
      ih(C.location, k) &&
      !(_ && _.submission && Xt(_.submission.formMethod))
    ) {
      Ye(k, { matches: te }, { flushSync: fe });
      return;
    }
    ie = new AbortController();
    let q = Br(i.history, k, ie.signal, _ && _.submission),
      W;
    if (_ && _.pendingError)
      W = [fr(te).route.id, { type: "error", error: _.pendingError }];
    else if (_ && _.submission && Xt(_.submission.formMethod)) {
      let Pe = await Vr(q, k, _.submission, te, X.active, {
        replace: _.replace,
        flushSync: fe,
      });
      if (Pe.shortCircuited) return;
      if (Pe.pendingActionResult) {
        let [Me, Be] = Pe.pendingActionResult;
        if (_t(Be) && lo(Be.error) && Be.error.status === 404) {
          (ie = null),
            Ye(k, {
              matches: Pe.matches,
              loaderData: {},
              errors: { [Me]: Be.error },
            });
          return;
        }
      }
      (te = Pe.matches || te),
        (W = Pe.pendingActionResult),
        (K = Xu(k, _.submission)),
        (fe = !1),
        (X.active = !1),
        (q = Br(i.history, q.url, q.signal));
    }
    let {
      shortCircuited: ce,
      matches: ve,
      loaderData: ze,
      errors: Je,
    } = await $l(
      q,
      k,
      te,
      X.active,
      K,
      _ && _.submission,
      _ && _.fetcherSubmission,
      _ && _.replace,
      _ && _.initialHydration === !0,
      fe,
      W
    );
    ce ||
      ((ie = null),
      Ye(k, { matches: ve || te, ...qf(W), loaderData: ze, errors: Je }));
  }
  async function Vr(y, k, _, U, K, te = {}) {
    hr();
    let fe = ah(k, _);
    if ((ye({ navigation: fe }, { flushSync: te.flushSync === !0 }), K)) {
      let W = await Gn(U, k.pathname, y.signal);
      if (W.type === "aborted") return { shortCircuited: !0 };
      if (W.type === "error") {
        let ce = fr(W.partialMatches).route.id;
        return {
          matches: W.partialMatches,
          pendingActionResult: [ce, { type: "error", error: W.error }],
        };
      } else if (W.matches) U = W.matches;
      else {
        let { notFoundMatches: ce, error: ve, route: ze } = Yn(k.pathname);
        return {
          matches: ce,
          pendingActionResult: [ze.id, { type: "error", error: ve }],
        };
      }
    }
    let X,
      q = zl(U, k);
    if (!q.route.action && !q.route.lazy)
      X = {
        type: "error",
        error: jt(405, {
          method: y.method,
          pathname: k.pathname,
          routeId: q.route.id,
        }),
      };
    else if (
      ((X = (await rn("action", C, y, [q], U, null))[q.route.id]),
      y.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (cr(X)) {
      let W;
      return (
        te && te.replace != null
          ? (W = te.replace)
          : (W =
              Xf(X.response.headers.get("Location"), new URL(y.url), v) ===
              C.location.pathname + C.location.search),
        await ht(y, X, !0, { submission: _, replace: W }),
        { shortCircuited: !0 }
      );
    }
    if (_t(X)) {
      let W = fr(U, q.route.id);
      return (
        (te && te.replace) !== !0 && (le = "PUSH"),
        { matches: U, pendingActionResult: [W.route.id, X] }
      );
    }
    return { matches: U, pendingActionResult: [q.route.id, X] };
  }
  async function $l(y, k, _, U, K, te, fe, X, q, W, ce) {
    let ve = K || Xu(k, te),
      ze = te || fe || tc(ve),
      Je = !rt && !q;
    if (U) {
      if (Je) {
        let Ze = Wr(ce);
        ye(
          { navigation: ve, ...(Ze !== void 0 ? { actionData: Ze } : {}) },
          { flushSync: W }
        );
      }
      let Le = await Gn(_, k.pathname, y.signal);
      if (Le.type === "aborted") return { shortCircuited: !0 };
      if (Le.type === "error") {
        let Ze = fr(Le.partialMatches).route.id;
        return {
          matches: Le.partialMatches,
          loaderData: {},
          errors: { [Ze]: Le.error },
        };
      } else if (Le.matches) _ = Le.matches;
      else {
        let { error: Ze, notFoundMatches: un, route: Zn } = Yn(k.pathname);
        return { matches: un, loaderData: {}, errors: { [Zn.id]: Ze } };
      }
    }
    let Pe = h || d,
      [Me, Be] = Qf(
        i.history,
        C,
        _,
        ze,
        k,
        q === !0,
        We,
        ut,
        F,
        Q,
        re,
        Pe,
        v,
        ce
      );
    if (((Ne = ++Ge), Me.length === 0 && Be.length === 0)) {
      let Le = Bl();
      return (
        Ye(
          k,
          {
            matches: _,
            loaderData: {},
            errors: ce && _t(ce[1]) ? { [ce[0]]: ce[1].error } : null,
            ...qf(ce),
            ...(Le ? { fetchers: new Map(C.fetchers) } : {}),
          },
          { flushSync: W }
        ),
        { shortCircuited: !0 }
      );
    }
    if (Je) {
      let Le = {};
      if (!U) {
        Le.navigation = ve;
        let Ze = Wr(ce);
        Ze !== void 0 && (Le.actionData = Ze);
      }
      Be.length > 0 && (Le.fetchers = Qr(Be)), ye(Le, { flushSync: W });
    }
    Be.forEach((Le) => {
      mt(Le.key), Le.controller && _e.set(Le.key, Le.controller);
    });
    let Sn = () => Be.forEach((Le) => mt(Le.key));
    ie && ie.signal.addEventListener("abort", Sn);
    let { loaderResults: En, fetcherResults: Dt } = await Yr(C, _, Me, Be, y);
    if (y.signal.aborted) return { shortCircuited: !0 };
    ie && ie.signal.removeEventListener("abort", Sn),
      Be.forEach((Le) => _e.delete(Le.key));
    let kt = Ji(En);
    if (kt)
      return await ht(y, kt.result, !0, { replace: X }), { shortCircuited: !0 };
    if (((kt = Ji(Dt)), kt))
      return (
        re.add(kt.key),
        await ht(y, kt.result, !0, { replace: X }),
        { shortCircuited: !0 }
      );
    let { loaderData: gr, errors: Jn } = Jf(C, _, En, ce, Be, Dt);
    q && C.errors && (Jn = { ...C.errors, ...Jn });
    let on = Bl(),
      Fe = Xr(Ne),
      wr = on || Fe || Be.length > 0;
    return {
      matches: _,
      loaderData: gr,
      errors: Jn,
      ...(wr ? { fetchers: new Map(C.fetchers) } : {}),
    };
  }
  function Wr(y) {
    if (y && !_t(y[1])) return { [y[0]]: y[1].data };
    if (C.actionData)
      return Object.keys(C.actionData).length === 0 ? null : C.actionData;
  }
  function Qr(y) {
    return (
      y.forEach((k) => {
        let _ = C.fetchers.get(k.key),
          U = Dl(void 0, _ ? _.data : void 0);
        C.fetchers.set(k.key, U);
      }),
      new Map(C.fetchers)
    );
  }
  async function Al(y, k, _, U) {
    mt(y);
    let K = (U && U.flushSync) === !0,
      te = h || d,
      fe = Ju(C.location, C.matches, v, _, k, U == null ? void 0 : U.relative),
      X = Bn(te, fe, v),
      q = Xn(X, te, fe);
    if ((q.active && q.matches && (X = q.matches), !X)) {
      Nt(y, k, jt(404, { pathname: fe }), { flushSync: K });
      return;
    }
    let { path: W, submission: ce, error: ve } = Vf(!0, fe, U);
    if (ve) {
      Nt(y, k, ve, { flushSync: K });
      return;
    }
    let ze = zl(X, W),
      Je = (U && U.preventScrollReset) === !0;
    if (ce && Xt(ce.formMethod)) {
      await Kr(y, k, W, ze, X, q.active, K, Je, ce);
      return;
    }
    Q.set(y, { routeId: k, path: W }),
      await Kn(y, k, W, ze, X, q.active, K, Je, ce);
  }
  async function Kr(y, k, _, U, K, te, fe, X, q) {
    hr(), Q.delete(y);
    function W($e) {
      if (!$e.route.action && !$e.route.lazy) {
        let At = jt(405, { method: q.formMethod, pathname: _, routeId: k });
        return Nt(y, k, At, { flushSync: fe }), !0;
      }
      return !1;
    }
    if (!te && W(U)) return;
    let ce = C.fetchers.get(y);
    $t(y, sh(q, ce), { flushSync: fe });
    let ve = new AbortController(),
      ze = Br(i.history, _, ve.signal, q);
    if (te) {
      let $e = await Gn(K, _, ze.signal);
      if ($e.type === "aborted") return;
      if ($e.type === "error") {
        Nt(y, k, $e.error, { flushSync: fe });
        return;
      } else if ($e.matches) {
        if (((K = $e.matches), (U = zl(K, _)), W(U))) return;
      } else {
        Nt(y, k, jt(404, { pathname: _ }), { flushSync: fe });
        return;
      }
    }
    _e.set(y, ve);
    let Je = Ge,
      Me = (await rn("action", C, ze, [U], K, y))[U.route.id];
    if (ze.signal.aborted) {
      _e.get(y) === ve && _e.delete(y);
      return;
    }
    if (F.has(y)) {
      if (cr(Me) || _t(Me)) {
        $t(y, Hn(void 0));
        return;
      }
    } else {
      if (cr(Me))
        if ((_e.delete(y), Ne > Je)) {
          $t(y, Hn(void 0));
          return;
        } else
          return (
            re.add(y),
            $t(y, Dl(q)),
            ht(ze, Me, !1, { fetcherSubmission: q, preventScrollReset: X })
          );
      if (_t(Me)) {
        Nt(y, k, Me.error);
        return;
      }
    }
    let Be = C.navigation.location || C.location,
      Sn = Br(i.history, Be, ve.signal),
      En = h || d,
      Dt =
        C.navigation.state !== "idle"
          ? Bn(En, C.navigation.location, v)
          : C.matches;
    Se(Dt, "Didn't find any matches after fetcher action");
    let kt = ++Ge;
    V.set(y, kt);
    let gr = Dl(q, Me.data);
    C.fetchers.set(y, gr);
    let [Jn, on] = Qf(i.history, C, Dt, q, Be, !1, We, ut, F, Q, re, En, v, [
      U.route.id,
      Me,
    ]);
    on
      .filter(($e) => $e.key !== y)
      .forEach(($e) => {
        let At = $e.key,
          xt = C.fetchers.get(At),
          uo = Dl(void 0, xt ? xt.data : void 0);
        C.fetchers.set(At, uo),
          mt(At),
          $e.controller && _e.set(At, $e.controller);
      }),
      ye({ fetchers: new Map(C.fetchers) });
    let Fe = () => on.forEach(($e) => mt($e.key));
    ve.signal.addEventListener("abort", Fe);
    let { loaderResults: wr, fetcherResults: Le } = await Yr(C, Dt, Jn, on, Sn);
    if (ve.signal.aborted) return;
    ve.signal.removeEventListener("abort", Fe),
      V.delete(y),
      _e.delete(y),
      on.forEach(($e) => _e.delete($e.key));
    let Ze = Ji(wr);
    if (Ze) return ht(Sn, Ze.result, !1, { preventScrollReset: X });
    if (((Ze = Ji(Le)), Ze))
      return re.add(Ze.key), ht(Sn, Ze.result, !1, { preventScrollReset: X });
    let { loaderData: un, errors: Zn } = Jf(C, Dt, wr, void 0, on, Le);
    if (C.fetchers.has(y)) {
      let $e = Hn(Me.data);
      C.fetchers.set(y, $e);
    }
    Xr(kt),
      C.navigation.state === "loading" && kt > Ne
        ? (Se(le, "Expected pending action"),
          ie && ie.abort(),
          Ye(C.navigation.location, {
            matches: Dt,
            loaderData: un,
            errors: Zn,
            fetchers: new Map(C.fetchers),
          }))
        : (ye({
            errors: Zn,
            loaderData: Zf(C.loaderData, un, Dt, Zn),
            fetchers: new Map(C.fetchers),
          }),
          (We = !1));
  }
  async function Kn(y, k, _, U, K, te, fe, X, q) {
    let W = C.fetchers.get(y);
    $t(y, Dl(q, W ? W.data : void 0), { flushSync: fe });
    let ce = new AbortController(),
      ve = Br(i.history, _, ce.signal);
    if (te) {
      let Me = await Gn(K, _, ve.signal);
      if (Me.type === "aborted") return;
      if (Me.type === "error") {
        Nt(y, k, Me.error, { flushSync: fe });
        return;
      } else if (Me.matches) (K = Me.matches), (U = zl(K, _));
      else {
        Nt(y, k, jt(404, { pathname: _ }), { flushSync: fe });
        return;
      }
    }
    _e.set(y, ce);
    let ze = Ge,
      Pe = (await rn("loader", C, ve, [U], K, y))[U.route.id];
    if ((_e.get(y) === ce && _e.delete(y), !ve.signal.aborted)) {
      if (F.has(y)) {
        $t(y, Hn(void 0));
        return;
      }
      if (cr(Pe))
        if (Ne > ze) {
          $t(y, Hn(void 0));
          return;
        } else {
          re.add(y), await ht(ve, Pe, !1, { preventScrollReset: X });
          return;
        }
      if (_t(Pe)) {
        Nt(y, k, Pe.error);
        return;
      }
      $t(y, Hn(Pe.data));
    }
  }
  async function ht(
    y,
    k,
    _,
    {
      submission: U,
      fetcherSubmission: K,
      preventScrollReset: te,
      replace: fe,
    } = {}
  ) {
    k.response.headers.has("X-Remix-Revalidate") && (We = !0);
    let X = k.response.headers.get("Location");
    Se(X, "Expected a Location header on the redirect Response"),
      (X = Xf(X, new URL(y.url), v));
    let q = Fl(C.location, X, { _isRedirect: !0 });
    if (a) {
      let Pe = !1;
      if (k.response.headers.has("X-Remix-Reload-Document")) Pe = !0;
      else if (ta.test(X)) {
        const Me = i.history.createURL(X);
        Pe = Me.origin !== u.location.origin || Gt(Me.pathname, v) == null;
      }
      if (Pe) {
        fe ? u.location.replace(X) : u.location.assign(X);
        return;
      }
    }
    ie = null;
    let W =
        fe === !0 || k.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: ce, formAction: ve, formEncType: ze } = C.navigation;
    !U && !K && ce && ve && ze && (U = tc(C.navigation));
    let Je = U || K;
    if (Qp.has(k.response.status) && Je && Xt(Je.formMethod))
      await Tt(W, q, {
        submission: { ...Je, formAction: X },
        preventScrollReset: te || pe,
        enableViewTransition: _ ? ge : void 0,
      });
    else {
      let Pe = Xu(q, U);
      await Tt(W, q, {
        overrideNavigation: Pe,
        fetcherSubmission: K,
        preventScrollReset: te || pe,
        enableViewTransition: _ ? ge : void 0,
      });
    }
  }
  async function rn(y, k, _, U, K, te) {
    let fe,
      X = {};
    try {
      fe = await eh(g, y, k, _, U, K, te, f, c);
    } catch (q) {
      return (
        U.forEach((W) => {
          X[W.route.id] = { type: "error", error: q };
        }),
        X
      );
    }
    for (let [q, W] of Object.entries(fe))
      if (oh(W)) {
        let ce = W.result;
        X[q] = { type: "redirect", response: rh(ce, _, q, K, v) };
      } else X[q] = await nh(W);
    return X;
  }
  async function Yr(y, k, _, U, K) {
    let te = rn("loader", y, K, _, k, null),
      fe = Promise.all(
        U.map(async (W) => {
          if (W.matches && W.match && W.controller) {
            let ve = (
              await rn(
                "loader",
                y,
                Br(i.history, W.path, W.controller.signal),
                [W.match],
                W.matches,
                W.key
              )
            )[W.match.route.id];
            return { [W.key]: ve };
          } else
            return Promise.resolve({
              [W.key]: { type: "error", error: jt(404, { pathname: W.path }) },
            });
        })
      ),
      X = await te,
      q = (await fe).reduce((W, ce) => Object.assign(W, ce), {});
    return { loaderResults: X, fetcherResults: q };
  }
  function hr() {
    (We = !0),
      Q.forEach((y, k) => {
        _e.has(k) && ut.add(k), mt(k);
      });
  }
  function $t(y, k, _ = {}) {
    C.fetchers.set(y, k),
      ye(
        { fetchers: new Map(C.fetchers) },
        { flushSync: (_ && _.flushSync) === !0 }
      );
  }
  function Nt(y, k, _, U = {}) {
    let K = fr(C.matches, k);
    yn(y),
      ye(
        { errors: { [K.route.id]: _ }, fetchers: new Map(C.fetchers) },
        { flushSync: (U && U.flushSync) === !0 }
      );
  }
  function mr(y) {
    return (
      E.set(y, (E.get(y) || 0) + 1),
      F.has(y) && F.delete(y),
      C.fetchers.get(y) || Kp
    );
  }
  function yn(y) {
    let k = C.fetchers.get(y);
    _e.has(y) && !(k && k.state === "loading" && V.has(y)) && mt(y),
      Q.delete(y),
      V.delete(y),
      re.delete(y),
      F.delete(y),
      ut.delete(y),
      C.fetchers.delete(y);
  }
  function Hl(y) {
    let k = (E.get(y) || 0) - 1;
    k <= 0 ? (E.delete(y), F.add(y)) : E.set(y, k),
      ye({ fetchers: new Map(C.fetchers) });
  }
  function mt(y) {
    let k = _e.get(y);
    k && (k.abort(), _e.delete(y));
  }
  function vn(y) {
    for (let k of y) {
      let _ = mr(k),
        U = Hn(_.data);
      C.fetchers.set(k, U);
    }
  }
  function Bl() {
    let y = [],
      k = !1;
    for (let _ of re) {
      let U = C.fetchers.get(_);
      Se(U, `Expected fetcher: ${_}`),
        U.state === "loading" && (re.delete(_), y.push(_), (k = !0));
    }
    return vn(y), k;
  }
  function Xr(y) {
    let k = [];
    for (let [_, U] of V)
      if (U < y) {
        let K = C.fetchers.get(_);
        Se(K, `Expected fetcher: ${_}`),
          K.state === "loading" && (mt(_), V.delete(_), k.push(_));
      }
    return vn(k), k.length > 0;
  }
  function Vl(y, k) {
    let _ = C.blockers.get(y) || Nl;
    return se.get(y) !== k && se.set(y, k), _;
  }
  function Wl(y) {
    C.blockers.delete(y), se.delete(y);
  }
  function gn(y, k) {
    let _ = C.blockers.get(y) || Nl;
    Se(
      (_.state === "unblocked" && k.state === "blocked") ||
        (_.state === "blocked" && k.state === "blocked") ||
        (_.state === "blocked" && k.state === "proceeding") ||
        (_.state === "blocked" && k.state === "unblocked") ||
        (_.state === "proceeding" && k.state === "unblocked"),
      `Invalid blocker state transition: ${_.state} -> ${k.state}`
    );
    let U = new Map(C.blockers);
    U.set(y, k), ye({ blockers: U });
  }
  function yr({ currentLocation: y, nextLocation: k, historyAction: _ }) {
    if (se.size === 0) return;
    se.size > 1 && ot(!1, "A router only supports one blocker at a time");
    let U = Array.from(se.entries()),
      [K, te] = U[U.length - 1],
      fe = C.blockers.get(K);
    if (
      !(fe && fe.state === "proceeding") &&
      te({ currentLocation: y, nextLocation: k, historyAction: _ })
    )
      return K;
  }
  function Yn(y) {
    let k = jt(404, { pathname: y }),
      _ = h || d,
      { matches: U, route: K } = bf(_);
    return { notFoundMatches: U, route: K, error: k };
  }
  function Gr(y, k, _) {
    if (((N = y), ($ = k), (z = _ || null), !H && C.navigation === Yu)) {
      H = !0;
      let U = ln(C.location, C.matches);
      U != null && ye({ restoreScrollPosition: U });
    }
    return () => {
      (N = null), ($ = null), (z = null);
    };
  }
  function vr(y, k) {
    return (
      (z &&
        z(
          y,
          k.map((U) => xp(U, C.loaderData))
        )) ||
      y.key
    );
  }
  function wn(y, k) {
    if (N && $) {
      let _ = vr(y, k);
      N[_] = $();
    }
  }
  function ln(y, k) {
    if (N) {
      let _ = vr(y, k),
        U = N[_];
      if (typeof U == "number") return U;
    }
    return null;
  }
  function Xn(y, k, _) {
    if (S)
      if (y) {
        if (Object.keys(y[0].params).length > 0)
          return { active: !0, matches: qi(k, _, v, !0) };
      } else return { active: !0, matches: qi(k, _, v, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Gn(y, k, _) {
    if (!S) return { type: "success", matches: y };
    let U = y;
    for (;;) {
      let K = h == null,
        te = h || d,
        fe = f;
      try {
        await S({
          path: k,
          matches: U,
          patch: (W, ce) => {
            _.aborted || Yf(W, ce, te, fe, c);
          },
        });
      } catch (W) {
        return { type: "error", error: W, partialMatches: U };
      } finally {
        K && !_.aborted && (d = [...d]);
      }
      if (_.aborted) return { type: "aborted" };
      let X = Bn(te, k, v);
      if (X) return { type: "success", matches: X };
      let q = qi(te, k, v, !0);
      if (
        !q ||
        (U.length === q.length &&
          U.every((W, ce) => W.route.id === q[ce].route.id))
      )
        return { type: "success", matches: null };
      U = q;
    }
  }
  function Ql(y) {
    (f = {}), (h = to(y, c, void 0, f));
  }
  function Kl(y, k) {
    let _ = h == null;
    Yf(y, k, h || d, f, c), _ && ((d = [...d]), ye({}));
  }
  return (
    (ae = {
      get basename() {
        return v;
      },
      get future() {
        return D;
      },
      get state() {
        return C;
      },
      get routes() {
        return d;
      },
      get window() {
        return u;
      },
      initialize: Ee,
      subscribe: Re,
      enableScrollRestoration: Gr,
      navigate: Qn,
      fetch: Al,
      revalidate: jl,
      createHref: (y) => i.history.createHref(y),
      encodeLocation: (y) => i.history.encodeLocation(y),
      getFetcher: mr,
      deleteFetcher: Hl,
      dispose: De,
      getBlocker: Vl,
      deleteBlocker: Wl,
      patchRoutes: Kl,
      _internalFetchControllers: _e,
      _internalSetRoutes: Ql,
    }),
    ae
  );
}
function Gp(i) {
  return (
    i != null &&
    (("formData" in i && i.formData != null) ||
      ("body" in i && i.body !== void 0))
  );
}
function Ju(i, u, a, c, f, d) {
  let h, v;
  if (f) {
    h = [];
    for (let S of u)
      if ((h.push(S), S.route.id === f)) {
        v = S;
        break;
      }
  } else (h = u), (v = u[u.length - 1]);
  let g = ea(c || ".", bu(h), Gt(i.pathname, a) || i.pathname, d === "path");
  if (
    (c == null && ((g.search = i.search), (g.hash = i.hash)),
    (c == null || c === "" || c === ".") && v)
  ) {
    let S = na(g.search);
    if (v.route.index && !S)
      g.search = g.search ? g.search.replace(/^\?/, "?index&") : "?index";
    else if (!v.route.index && S) {
      let D = new URLSearchParams(g.search),
        O = D.getAll("index");
      D.delete("index"),
        O.filter((N) => N).forEach((N) => D.append("index", N));
      let L = D.toString();
      g.search = L ? `?${L}` : "";
    }
  }
  return (
    a !== "/" && (g.pathname = g.pathname === "/" ? a : en([a, g.pathname])),
    Vn(g)
  );
}
function Vf(i, u, a) {
  if (!a || !Gp(a)) return { path: u };
  if (a.formMethod && !uh(a.formMethod))
    return { path: u, error: jt(405, { method: a.formMethod }) };
  let c = () => ({ path: u, error: jt(400, { type: "invalid-body" }) }),
    d = (a.formMethod || "get").toUpperCase(),
    h = mc(u);
  if (a.body !== void 0) {
    if (a.formEncType === "text/plain") {
      if (!Xt(d)) return c();
      let O =
        typeof a.body == "string"
          ? a.body
          : a.body instanceof FormData || a.body instanceof URLSearchParams
          ? Array.from(a.body.entries()).reduce(
              (L, [N, z]) => `${L}${N}=${z}
`,
              ""
            )
          : String(a.body);
      return {
        path: u,
        submission: {
          formMethod: d,
          formAction: h,
          formEncType: a.formEncType,
          formData: void 0,
          json: void 0,
          text: O,
        },
      };
    } else if (a.formEncType === "application/json") {
      if (!Xt(d)) return c();
      try {
        let O = typeof a.body == "string" ? JSON.parse(a.body) : a.body;
        return {
          path: u,
          submission: {
            formMethod: d,
            formAction: h,
            formEncType: a.formEncType,
            formData: void 0,
            json: O,
            text: void 0,
          },
        };
      } catch {
        return c();
      }
    }
  }
  Se(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let v, g;
  if (a.formData) (v = qu(a.formData)), (g = a.formData);
  else if (a.body instanceof FormData) (v = qu(a.body)), (g = a.body);
  else if (a.body instanceof URLSearchParams) (v = a.body), (g = Gf(v));
  else if (a.body == null) (v = new URLSearchParams()), (g = new FormData());
  else
    try {
      (v = new URLSearchParams(a.body)), (g = Gf(v));
    } catch {
      return c();
    }
  let S = {
    formMethod: d,
    formAction: h,
    formEncType: (a && a.formEncType) || "application/x-www-form-urlencoded",
    formData: g,
    json: void 0,
    text: void 0,
  };
  if (Xt(S.formMethod)) return { path: u, submission: S };
  let D = Wn(u);
  return (
    i && D.search && na(D.search) && v.append("index", ""),
    (D.search = `?${v}`),
    { path: Vn(D), submission: S }
  );
}
function Wf(i, u, a = !1) {
  let c = i.findIndex((f) => f.route.id === u);
  return c >= 0 ? i.slice(0, a ? c + 1 : c) : i;
}
function Qf(i, u, a, c, f, d, h, v, g, S, D, O, L, N) {
  let z = N ? (_t(N[1]) ? N[1].error : N[1].data) : void 0,
    $ = i.createURL(u.location),
    H = i.createURL(f),
    M = a;
  d && u.errors
    ? (M = Wf(a, Object.keys(u.errors)[0], !0))
    : N && _t(N[1]) && (M = Wf(a, N[0]));
  let b = N ? N[1].statusCode : void 0,
    J = b && b >= 400,
    ae = M.filter((le, pe) => {
      let { route: ie } = le;
      if (ie.lazy) return !0;
      if (ie.loader == null) return !1;
      if (d) return Zu(ie, u.loaderData, u.errors);
      if (Jp(u.loaderData, u.matches[pe], le)) return !0;
      let ge = u.matches[pe],
        Ce = le;
      return Kf(le, {
        currentUrl: $,
        currentParams: ge.params,
        nextUrl: H,
        nextParams: Ce.params,
        ...c,
        actionResult: z,
        actionStatus: b,
        defaultShouldRevalidate: J
          ? !1
          : h ||
            $.pathname + $.search === H.pathname + H.search ||
            $.search !== H.search ||
            Zp(ge, Ce),
      });
    }),
    C = [];
  return (
    S.forEach((le, pe) => {
      if (d || !a.some((rt) => rt.route.id === le.routeId) || g.has(pe)) return;
      let ie = Bn(O, le.path, L);
      if (!ie) {
        C.push({
          key: pe,
          routeId: le.routeId,
          path: le.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let ge = u.fetchers.get(pe),
        Ce = zl(ie, le.path),
        Ke = !1;
      D.has(pe)
        ? (Ke = !1)
        : v.has(pe)
        ? (v.delete(pe), (Ke = !0))
        : ge && ge.state !== "idle" && ge.data === void 0
        ? (Ke = h)
        : (Ke = Kf(Ce, {
            currentUrl: $,
            currentParams: u.matches[u.matches.length - 1].params,
            nextUrl: H,
            nextParams: a[a.length - 1].params,
            ...c,
            actionResult: z,
            actionStatus: b,
            defaultShouldRevalidate: J ? !1 : h,
          })),
        Ke &&
          C.push({
            key: pe,
            routeId: le.routeId,
            path: le.path,
            matches: ie,
            match: Ce,
            controller: new AbortController(),
          });
    }),
    [ae, C]
  );
}
function Zu(i, u, a) {
  if (i.lazy) return !0;
  if (!i.loader) return !1;
  let c = u != null && u[i.id] !== void 0,
    f = a != null && a[i.id] !== void 0;
  return !c && f
    ? !1
    : typeof i.loader == "function" && i.loader.hydrate === !0
    ? !0
    : !c && !f;
}
function Jp(i, u, a) {
  let c = !u || a.route.id !== u.route.id,
    f = !i.hasOwnProperty(a.route.id);
  return c || f;
}
function Zp(i, u) {
  let a = i.route.path;
  return (
    i.pathname !== u.pathname ||
    (a != null && a.endsWith("*") && i.params["*"] !== u.params["*"])
  );
}
function Kf(i, u) {
  if (i.route.shouldRevalidate) {
    let a = i.route.shouldRevalidate(u);
    if (typeof a == "boolean") return a;
  }
  return u.defaultShouldRevalidate;
}
function Yf(i, u, a, c, f) {
  let d;
  if (i) {
    let g = c[i];
    Se(g, `No route found to patch children into: routeId = ${i}`),
      g.children || (g.children = []),
      (d = g.children);
  } else d = a;
  let h = u.filter((g) => !d.some((S) => hc(g, S))),
    v = to(
      h,
      f,
      [i || "_", "patch", String((d == null ? void 0 : d.length) || "0")],
      c
    );
  d.push(...v);
}
function hc(i, u) {
  return "id" in i && "id" in u && i.id === u.id
    ? !0
    : i.index === u.index &&
      i.path === u.path &&
      i.caseSensitive === u.caseSensitive
    ? (!i.children || i.children.length === 0) &&
      (!u.children || u.children.length === 0)
      ? !0
      : i.children.every((a, c) => {
          var f;
          return (f = u.children) == null ? void 0 : f.some((d) => hc(a, d));
        })
    : !1;
}
async function qp(i, u, a) {
  if (!i.lazy) return;
  let c = await i.lazy();
  if (!i.lazy) return;
  let f = a[i.id];
  Se(f, "No route found in manifest");
  let d = {};
  for (let h in c) {
    let g = f[h] !== void 0 && h !== "hasErrorBoundary";
    ot(
      !g,
      `Route "${f.id}" has a static property "${h}" defined but its lazy function is also returning a value for this property. The lazy route property "${h}" will be ignored.`
    ),
      !g && !Ep.has(h) && (d[h] = c[h]);
  }
  Object.assign(f, d), Object.assign(f, { ...u(f), lazy: void 0 });
}
async function bp({ matches: i }) {
  let u = i.filter((c) => c.shouldLoad);
  return (await Promise.all(u.map((c) => c.resolve()))).reduce(
    (c, f, d) => Object.assign(c, { [u[d].route.id]: f }),
    {}
  );
}
async function eh(i, u, a, c, f, d, h, v, g, S) {
  let D = d.map((N) => (N.route.lazy ? qp(N.route, g, v) : void 0)),
    O = d.map((N, z) => {
      let $ = D[z],
        H = f.some((b) => b.route.id === N.route.id);
      return {
        ...N,
        shouldLoad: H,
        resolve: async (b) => (
          b &&
            c.method === "GET" &&
            (N.route.lazy || N.route.loader) &&
            (H = !0),
          H
            ? th(u, c, N, $, b, S)
            : Promise.resolve({ type: "data", result: void 0 })
        ),
      };
    }),
    L = await i({
      matches: O,
      request: c,
      params: d[0].params,
      fetcherKey: h,
      context: S,
    });
  try {
    await Promise.all(D);
  } catch {}
  return L;
}
async function th(i, u, a, c, f, d) {
  let h,
    v,
    g = (S) => {
      let D,
        O = new Promise((z, $) => (D = $));
      (v = () => D()), u.signal.addEventListener("abort", v);
      let L = (z) =>
          typeof S != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${i}" [routeId: ${a.route.id}]`
                )
              )
            : S(
                { request: u, params: a.params, context: d },
                ...(z !== void 0 ? [z] : [])
              ),
        N = (async () => {
          try {
            return { type: "data", result: await (f ? f(($) => L($)) : L()) };
          } catch (z) {
            return { type: "error", result: z };
          }
        })();
      return Promise.race([N, O]);
    };
  try {
    let S = a.route[i];
    if (c)
      if (S) {
        let D,
          [O] = await Promise.all([
            g(S).catch((L) => {
              D = L;
            }),
            c,
          ]);
        if (D !== void 0) throw D;
        h = O;
      } else if ((await c, (S = a.route[i]), S)) h = await g(S);
      else if (i === "action") {
        let D = new URL(u.url),
          O = D.pathname + D.search;
        throw jt(405, { method: u.method, pathname: O, routeId: a.route.id });
      } else return { type: "data", result: void 0 };
    else if (S) h = await g(S);
    else {
      let D = new URL(u.url),
        O = D.pathname + D.search;
      throw jt(404, { pathname: O });
    }
  } catch (S) {
    return { type: "error", result: S };
  } finally {
    v && u.signal.removeEventListener("abort", v);
  }
  return h;
}
async function nh(i) {
  var c, f, d, h;
  let { result: u, type: a } = i;
  if (yc(u)) {
    let v;
    try {
      let g = u.headers.get("Content-Type");
      g && /\bapplication\/json\b/.test(g)
        ? u.body == null
          ? (v = null)
          : (v = await u.json())
        : (v = await u.text());
    } catch (g) {
      return { type: "error", error: g };
    }
    return a === "error"
      ? {
          type: "error",
          error: new ro(u.status, u.statusText, v),
          statusCode: u.status,
          headers: u.headers,
        }
      : { type: "data", data: v, statusCode: u.status, headers: u.headers };
  }
  if (a === "error") {
    if (ec(u)) {
      if (u.data instanceof Error)
        return {
          type: "error",
          error: u.data,
          statusCode: (c = u.init) == null ? void 0 : c.status,
        };
      u = new ro(
        ((f = u.init) == null ? void 0 : f.status) || 500,
        void 0,
        u.data
      );
    }
    return { type: "error", error: u, statusCode: lo(u) ? u.status : void 0 };
  }
  return ec(u)
    ? {
        type: "data",
        data: u.data,
        statusCode: (d = u.init) == null ? void 0 : d.status,
        headers:
          (h = u.init) != null && h.headers
            ? new Headers(u.init.headers)
            : void 0,
      }
    : { type: "data", data: u };
}
function rh(i, u, a, c, f) {
  let d = i.headers.get("Location");
  if (
    (Se(
      d,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !ta.test(d))
  ) {
    let h = c.slice(0, c.findIndex((v) => v.route.id === a) + 1);
    (d = Ju(new URL(u.url), h, f, d)), i.headers.set("Location", d);
  }
  return i;
}
function Xf(i, u, a) {
  if (ta.test(i)) {
    let c = i,
      f = c.startsWith("//") ? new URL(u.protocol + c) : new URL(c),
      d = Gt(f.pathname, a) != null;
    if (f.origin === u.origin && d) return f.pathname + f.search + f.hash;
  }
  return i;
}
function Br(i, u, a, c) {
  let f = i.createURL(mc(u)).toString(),
    d = { signal: a };
  if (c && Xt(c.formMethod)) {
    let { formMethod: h, formEncType: v } = c;
    (d.method = h.toUpperCase()),
      v === "application/json"
        ? ((d.headers = new Headers({ "Content-Type": v })),
          (d.body = JSON.stringify(c.json)))
        : v === "text/plain"
        ? (d.body = c.text)
        : v === "application/x-www-form-urlencoded" && c.formData
        ? (d.body = qu(c.formData))
        : (d.body = c.formData);
  }
  return new Request(f, d);
}
function qu(i) {
  let u = new URLSearchParams();
  for (let [a, c] of i.entries())
    u.append(a, typeof c == "string" ? c : c.name);
  return u;
}
function Gf(i) {
  let u = new FormData();
  for (let [a, c] of i.entries()) u.append(a, c);
  return u;
}
function lh(i, u, a, c = !1, f = !1) {
  let d = {},
    h = null,
    v,
    g = !1,
    S = {},
    D = a && _t(a[1]) ? a[1].error : void 0;
  return (
    i.forEach((O) => {
      if (!(O.route.id in u)) return;
      let L = O.route.id,
        N = u[L];
      if (
        (Se(!cr(N), "Cannot handle redirect results in processLoaderData"),
        _t(N))
      ) {
        let z = N.error;
        if ((D !== void 0 && ((z = D), (D = void 0)), (h = h || {}), f))
          h[L] = z;
        else {
          let $ = fr(i, L);
          h[$.route.id] == null && (h[$.route.id] = z);
        }
        c || (d[L] = pc),
          g || ((g = !0), (v = lo(N.error) ? N.error.status : 500)),
          N.headers && (S[L] = N.headers);
      } else
        (d[L] = N.data),
          N.statusCode && N.statusCode !== 200 && !g && (v = N.statusCode),
          N.headers && (S[L] = N.headers);
    }),
    D !== void 0 && a && ((h = { [a[0]]: D }), (d[a[0]] = void 0)),
    { loaderData: d, errors: h, statusCode: v || 200, loaderHeaders: S }
  );
}
function Jf(i, u, a, c, f, d) {
  let { loaderData: h, errors: v } = lh(u, a, c);
  return (
    f.forEach((g) => {
      let { key: S, match: D, controller: O } = g,
        L = d[S];
      if (
        (Se(L, "Did not find corresponding fetcher result"),
        !(O && O.signal.aborted))
      )
        if (_t(L)) {
          let N = fr(i.matches, D == null ? void 0 : D.route.id);
          (v && v[N.route.id]) || (v = { ...v, [N.route.id]: L.error }),
            i.fetchers.delete(S);
        } else if (cr(L)) Se(!1, "Unhandled fetcher revalidation redirect");
        else {
          let N = Hn(L.data);
          i.fetchers.set(S, N);
        }
    }),
    { loaderData: h, errors: v }
  );
}
function Zf(i, u, a, c) {
  let f = Object.entries(u)
    .filter(([, d]) => d !== pc)
    .reduce((d, [h, v]) => ((d[h] = v), d), {});
  for (let d of a) {
    let h = d.route.id;
    if (
      (!u.hasOwnProperty(h) &&
        i.hasOwnProperty(h) &&
        d.route.loader &&
        (f[h] = i[h]),
      c && c.hasOwnProperty(h))
    )
      break;
  }
  return f;
}
function qf(i) {
  return i
    ? _t(i[1])
      ? { actionData: {} }
      : { actionData: { [i[0]]: i[1].data } }
    : {};
}
function fr(i, u) {
  return (
    (u ? i.slice(0, i.findIndex((c) => c.route.id === u) + 1) : [...i])
      .reverse()
      .find((c) => c.route.hasErrorBoundary === !0) || i[0]
  );
}
function bf(i) {
  let u =
    i.length === 1
      ? i[0]
      : i.find((a) => a.index || !a.path || a.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: u }],
    route: u,
  };
}
function jt(
  i,
  { pathname: u, routeId: a, method: c, type: f, message: d } = {}
) {
  let h = "Unknown Server Error",
    v = "Unknown @remix-run/router error";
  return (
    i === 400
      ? ((h = "Bad Request"),
        c && u && a
          ? (v = `You made a ${c} request to "${u}" but did not provide a \`loader\` for route "${a}", so there is no way to handle the request.`)
          : f === "invalid-body" && (v = "Unable to encode submission body"))
      : i === 403
      ? ((h = "Forbidden"), (v = `Route "${a}" does not match URL "${u}"`))
      : i === 404
      ? ((h = "Not Found"), (v = `No route matches URL "${u}"`))
      : i === 405 &&
        ((h = "Method Not Allowed"),
        c && u && a
          ? (v = `You made a ${c.toUpperCase()} request to "${u}" but did not provide an \`action\` for route "${a}", so there is no way to handle the request.`)
          : c && (v = `Invalid request method "${c.toUpperCase()}"`)),
    new ro(i || 500, h, new Error(v), !0)
  );
}
function Ji(i) {
  let u = Object.entries(i);
  for (let a = u.length - 1; a >= 0; a--) {
    let [c, f] = u[a];
    if (cr(f)) return { key: c, result: f };
  }
}
function mc(i) {
  let u = typeof i == "string" ? Wn(i) : i;
  return Vn({ ...u, hash: "" });
}
function ih(i, u) {
  return i.pathname !== u.pathname || i.search !== u.search
    ? !1
    : i.hash === ""
    ? u.hash !== ""
    : i.hash === u.hash
    ? !0
    : u.hash !== "";
}
function oh(i) {
  return yc(i.result) && Wp.has(i.result.status);
}
function _t(i) {
  return i.type === "error";
}
function cr(i) {
  return (i && i.type) === "redirect";
}
function ec(i) {
  return (
    typeof i == "object" &&
    i != null &&
    "type" in i &&
    "data" in i &&
    "init" in i &&
    i.type === "DataWithResponseInit"
  );
}
function yc(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.headers == "object" &&
    typeof i.body < "u"
  );
}
function uh(i) {
  return Vp.has(i.toUpperCase());
}
function Xt(i) {
  return Hp.has(i.toUpperCase());
}
function na(i) {
  return new URLSearchParams(i).getAll("index").some((u) => u === "");
}
function zl(i, u) {
  let a = typeof u == "string" ? Wn(u).search : u.search;
  if (i[i.length - 1].route.index && na(a || "")) return i[i.length - 1];
  let c = fc(i);
  return c[c.length - 1];
}
function tc(i) {
  let {
    formMethod: u,
    formAction: a,
    formEncType: c,
    text: f,
    formData: d,
    json: h,
  } = i;
  if (!(!u || !a || !c)) {
    if (f != null)
      return {
        formMethod: u,
        formAction: a,
        formEncType: c,
        formData: void 0,
        json: void 0,
        text: f,
      };
    if (d != null)
      return {
        formMethod: u,
        formAction: a,
        formEncType: c,
        formData: d,
        json: void 0,
        text: void 0,
      };
    if (h !== void 0)
      return {
        formMethod: u,
        formAction: a,
        formEncType: c,
        formData: void 0,
        json: h,
        text: void 0,
      };
  }
}
function Xu(i, u) {
  return u
    ? {
        state: "loading",
        location: i,
        formMethod: u.formMethod,
        formAction: u.formAction,
        formEncType: u.formEncType,
        formData: u.formData,
        json: u.json,
        text: u.text,
      }
    : {
        state: "loading",
        location: i,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function ah(i, u) {
  return {
    state: "submitting",
    location: i,
    formMethod: u.formMethod,
    formAction: u.formAction,
    formEncType: u.formEncType,
    formData: u.formData,
    json: u.json,
    text: u.text,
  };
}
function Dl(i, u) {
  return i
    ? {
        state: "loading",
        formMethod: i.formMethod,
        formAction: i.formAction,
        formEncType: i.formEncType,
        formData: i.formData,
        json: i.json,
        text: i.text,
        data: u,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: u,
      };
}
function sh(i, u) {
  return {
    state: "submitting",
    formMethod: i.formMethod,
    formAction: i.formAction,
    formEncType: i.formEncType,
    formData: i.formData,
    json: i.json,
    text: i.text,
    data: u ? u.data : void 0,
  };
}
function Hn(i) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: i,
  };
}
function fh(i, u) {
  try {
    let a = i.sessionStorage.getItem(dc);
    if (a) {
      let c = JSON.parse(a);
      for (let [f, d] of Object.entries(c || {}))
        d && Array.isArray(d) && u.set(f, new Set(d || []));
    }
  } catch {}
}
function ch(i, u) {
  if (u.size > 0) {
    let a = {};
    for (let [c, f] of u) a[c] = [...f];
    try {
      i.sessionStorage.setItem(dc, JSON.stringify(a));
    } catch (c) {
      ot(
        !1,
        `Failed to save applied view transitions in sessionStorage (${c}).`
      );
    }
  }
}
function dh() {
  let i,
    u,
    a = new Promise((c, f) => {
      (i = async (d) => {
        c(d);
        try {
          await a;
        } catch {}
      }),
        (u = async (d) => {
          f(d);
          try {
            await a;
          } catch {}
        });
    });
  return { promise: a, resolve: i, reject: u };
}
var dr = T.createContext(null);
dr.displayName = "DataRouter";
var Ol = T.createContext(null);
Ol.displayName = "DataRouterState";
var ra = T.createContext({ isTransitioning: !1 });
ra.displayName = "ViewTransition";
var vc = T.createContext(new Map());
vc.displayName = "Fetchers";
var ph = T.createContext(null);
ph.displayName = "Await";
var tn = T.createContext(null);
tn.displayName = "Navigation";
var io = T.createContext(null);
io.displayName = "Location";
var nn = T.createContext({ outlet: null, matches: [], isDataRoute: !1 });
nn.displayName = "Route";
var la = T.createContext(null);
la.displayName = "RouteError";
function hh(i, { relative: u } = {}) {
  Se(
    Il(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: a, navigator: c } = T.useContext(tn),
    { hash: f, pathname: d, search: h } = Ul(i, { relative: u }),
    v = d;
  return (
    a !== "/" && (v = d === "/" ? a : en([a, d])),
    c.createHref({ pathname: v, search: h, hash: f })
  );
}
function Il() {
  return T.useContext(io) != null;
}
function pr() {
  return (
    Se(
      Il(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    T.useContext(io).location
  );
}
var gc =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function wc(i) {
  T.useContext(tn).static || T.useLayoutEffect(i);
}
function mh() {
  let { isDataRoute: i } = T.useContext(nn);
  return i ? Nh() : yh();
}
function yh() {
  Se(
    Il(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let i = T.useContext(dr),
    { basename: u, navigator: a } = T.useContext(tn),
    { matches: c } = T.useContext(nn),
    { pathname: f } = pr(),
    d = JSON.stringify(bu(c)),
    h = T.useRef(!1);
  return (
    wc(() => {
      h.current = !0;
    }),
    T.useCallback(
      (g, S = {}) => {
        if ((ot(h.current, gc), !h.current)) return;
        if (typeof g == "number") {
          a.go(g);
          return;
        }
        let D = ea(g, JSON.parse(d), f, S.relative === "path");
        i == null &&
          u !== "/" &&
          (D.pathname = D.pathname === "/" ? u : en([u, D.pathname])),
          (S.replace ? a.replace : a.push)(D, S.state, S);
      },
      [u, a, d, f, i]
    )
  );
}
var vh = T.createContext(null);
function gh(i) {
  let u = T.useContext(nn).outlet;
  return u && T.createElement(vh.Provider, { value: i }, u);
}
function Ul(i, { relative: u } = {}) {
  let { matches: a } = T.useContext(nn),
    { pathname: c } = pr(),
    f = JSON.stringify(bu(a));
  return T.useMemo(() => ea(i, JSON.parse(f), c, u === "path"), [i, f, c, u]);
}
function wh(i, u, a, c) {
  Se(
    Il(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: f } = T.useContext(tn),
    { matches: d } = T.useContext(nn),
    h = d[d.length - 1],
    v = h ? h.params : {},
    g = h ? h.pathname : "/",
    S = h ? h.pathnameBase : "/",
    D = h && h.route;
  {
    let M = (D && D.path) || "";
    Sc(
      g,
      !D || M.endsWith("*") || M.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${
        M === "/" ? "*" : `${M}/*`
      }">.`
    );
  }
  let O = pr(),
    L;
  L = O;
  let N = L.pathname || "/",
    z = N;
  if (S !== "/") {
    let M = S.replace(/^\//, "").split("/");
    z = "/" + N.replace(/^\//, "").split("/").slice(M.length).join("/");
  }
  let $ = Bn(i, { pathname: z });
  return (
    ot(
      D || $ != null,
      `No routes matched location "${L.pathname}${L.search}${L.hash}" `
    ),
    ot(
      $ == null ||
        $[$.length - 1].route.element !== void 0 ||
        $[$.length - 1].route.Component !== void 0 ||
        $[$.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    Ch(
      $ &&
        $.map((M) =>
          Object.assign({}, M, {
            params: Object.assign({}, v, M.params),
            pathname: en([
              S,
              f.encodeLocation
                ? f.encodeLocation(M.pathname).pathname
                : M.pathname,
            ]),
            pathnameBase:
              M.pathnameBase === "/"
                ? S
                : en([
                    S,
                    f.encodeLocation
                      ? f.encodeLocation(M.pathnameBase).pathname
                      : M.pathnameBase,
                  ]),
          })
        ),
      d,
      a,
      c
    )
  );
}
function Sh() {
  let i = Th(),
    u = lo(i)
      ? `${i.status} ${i.statusText}`
      : i instanceof Error
      ? i.message
      : JSON.stringify(i),
    a = i instanceof Error ? i.stack : null,
    c = "rgba(200,200,200, 0.5)",
    f = { padding: "0.5rem", backgroundColor: c },
    d = { padding: "2px 4px", backgroundColor: c },
    h = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", i),
    (h = T.createElement(
      T.Fragment,
      null,
      T.createElement("p", null, "💿 Hey developer 👋"),
      T.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        T.createElement("code", { style: d }, "ErrorBoundary"),
        " or",
        " ",
        T.createElement("code", { style: d }, "errorElement"),
        " prop on your route."
      )
    )),
    T.createElement(
      T.Fragment,
      null,
      T.createElement("h2", null, "Unexpected Application Error!"),
      T.createElement("h3", { style: { fontStyle: "italic" } }, u),
      a ? T.createElement("pre", { style: f }, a) : null,
      h
    )
  );
}
var Eh = T.createElement(Sh, null),
  kh = class extends T.Component {
    constructor(i) {
      super(i),
        (this.state = {
          location: i.location,
          revalidation: i.revalidation,
          error: i.error,
        });
    }
    static getDerivedStateFromError(i) {
      return { error: i };
    }
    static getDerivedStateFromProps(i, u) {
      return u.location !== i.location ||
        (u.revalidation !== "idle" && i.revalidation === "idle")
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : u.error,
            location: u.location,
            revalidation: i.revalidation || u.revalidation,
          };
    }
    componentDidCatch(i, u) {
      console.error(
        "React Router caught the following error during render",
        i,
        u
      );
    }
    render() {
      return this.state.error !== void 0
        ? T.createElement(
            nn.Provider,
            { value: this.props.routeContext },
            T.createElement(la.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function xh({ routeContext: i, match: u, children: a }) {
  let c = T.useContext(dr);
  return (
    c &&
      c.static &&
      c.staticContext &&
      (u.route.errorElement || u.route.ErrorBoundary) &&
      (c.staticContext._deepestRenderedBoundaryId = u.route.id),
    T.createElement(nn.Provider, { value: i }, a)
  );
}
function Ch(i, u = [], a = null, c = null) {
  if (i == null) {
    if (!a) return null;
    if (a.errors) i = a.matches;
    else if (u.length === 0 && !a.initialized && a.matches.length > 0)
      i = a.matches;
    else return null;
  }
  let f = i,
    d = a == null ? void 0 : a.errors;
  if (d != null) {
    let g = f.findIndex(
      (S) => S.route.id && (d == null ? void 0 : d[S.route.id]) !== void 0
    );
    Se(
      g >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        d
      ).join(",")}`
    ),
      (f = f.slice(0, Math.min(f.length, g + 1)));
  }
  let h = !1,
    v = -1;
  if (a)
    for (let g = 0; g < f.length; g++) {
      let S = f[g];
      if (
        ((S.route.HydrateFallback || S.route.hydrateFallbackElement) && (v = g),
        S.route.id)
      ) {
        let { loaderData: D, errors: O } = a,
          L =
            S.route.loader &&
            !D.hasOwnProperty(S.route.id) &&
            (!O || O[S.route.id] === void 0);
        if (S.route.lazy || L) {
          (h = !0), v >= 0 ? (f = f.slice(0, v + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((g, S, D) => {
    let O,
      L = !1,
      N = null,
      z = null;
    a &&
      ((O = d && S.route.id ? d[S.route.id] : void 0),
      (N = S.route.errorElement || Eh),
      h &&
        (v < 0 && D === 0
          ? (Sc(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (L = !0),
            (z = null))
          : v === D &&
            ((L = !0), (z = S.route.hydrateFallbackElement || null))));
    let $ = u.concat(f.slice(0, D + 1)),
      H = () => {
        let M;
        return (
          O
            ? (M = N)
            : L
            ? (M = z)
            : S.route.Component
            ? (M = T.createElement(S.route.Component, null))
            : S.route.element
            ? (M = S.route.element)
            : (M = g),
          T.createElement(xh, {
            match: S,
            routeContext: { outlet: g, matches: $, isDataRoute: a != null },
            children: M,
          })
        );
      };
    return a && (S.route.ErrorBoundary || S.route.errorElement || D === 0)
      ? T.createElement(kh, {
          location: a.location,
          revalidation: a.revalidation,
          component: N,
          error: O,
          children: H(),
          routeContext: { outlet: null, matches: $, isDataRoute: !0 },
        })
      : H();
  }, null);
}
function ia(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Rh(i) {
  let u = T.useContext(dr);
  return Se(u, ia(i)), u;
}
function Ph(i) {
  let u = T.useContext(Ol);
  return Se(u, ia(i)), u;
}
function Lh(i) {
  let u = T.useContext(nn);
  return Se(u, ia(i)), u;
}
function oa(i) {
  let u = Lh(i),
    a = u.matches[u.matches.length - 1];
  return (
    Se(
      a.route.id,
      `${i} can only be used on routes that contain a unique "id"`
    ),
    a.route.id
  );
}
function _h() {
  return oa("useRouteId");
}
function Th() {
  var c;
  let i = T.useContext(la),
    u = Ph("useRouteError"),
    a = oa("useRouteError");
  return i !== void 0 ? i : (c = u.errors) == null ? void 0 : c[a];
}
function Nh() {
  let { router: i } = Rh("useNavigate"),
    u = oa("useNavigate"),
    a = T.useRef(!1);
  return (
    wc(() => {
      a.current = !0;
    }),
    T.useCallback(
      async (f, d = {}) => {
        ot(a.current, gc),
          a.current &&
            (typeof f == "number"
              ? i.navigate(f)
              : await i.navigate(f, { fromRouteId: u, ...d }));
      },
      [i, u]
    )
  );
}
var nc = {};
function Sc(i, u, a) {
  !u && !nc[i] && ((nc[i] = !0), ot(!1, a));
}
var rc = {};
function lc(i, u) {
  !i && !rc[u] && ((rc[u] = !0), console.warn(u));
}
function Dh(i) {
  let u = {
    hasErrorBoundary:
      i.hasErrorBoundary || i.ErrorBoundary != null || i.errorElement != null,
  };
  return (
    i.Component &&
      (i.element &&
        ot(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        ),
      Object.assign(u, {
        element: T.createElement(i.Component),
        Component: void 0,
      })),
    i.HydrateFallback &&
      (i.hydrateFallbackElement &&
        ot(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        ),
      Object.assign(u, {
        hydrateFallbackElement: T.createElement(i.HydrateFallback),
        HydrateFallback: void 0,
      })),
    i.ErrorBoundary &&
      (i.errorElement &&
        ot(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        ),
      Object.assign(u, {
        errorElement: T.createElement(i.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    u
  );
}
var Mh = class {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((i, u) => {
        (this.resolve = (a) => {
          this.status === "pending" && ((this.status = "resolved"), i(a));
        }),
          (this.reject = (a) => {
            this.status === "pending" && ((this.status = "rejected"), u(a));
          });
      }));
  }
};
function zh({ router: i, flushSync: u }) {
  let [a, c] = T.useState(i.state),
    [f, d] = T.useState(),
    [h, v] = T.useState({ isTransitioning: !1 }),
    [g, S] = T.useState(),
    [D, O] = T.useState(),
    [L, N] = T.useState(),
    z = T.useRef(new Map()),
    $ = T.useCallback(
      (J, { deletedFetchers: ae, flushSync: C, viewTransitionOpts: le }) => {
        J.fetchers.forEach((ie, ge) => {
          ie.data !== void 0 && z.current.set(ge, ie.data);
        }),
          ae.forEach((ie) => z.current.delete(ie)),
          lc(
            C === !1 || u != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          );
        let pe =
          i.window != null &&
          i.window.document != null &&
          typeof i.window.document.startViewTransition == "function";
        if (
          (lc(
            le == null || pe,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
          ),
          !le || !pe)
        ) {
          u && C ? u(() => c(J)) : T.startTransition(() => c(J));
          return;
        }
        if (u && C) {
          u(() => {
            D && (g && g.resolve(), D.skipTransition()),
              v({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: le.currentLocation,
                nextLocation: le.nextLocation,
              });
          });
          let ie = i.window.document.startViewTransition(() => {
            u(() => c(J));
          });
          ie.finished.finally(() => {
            u(() => {
              S(void 0), O(void 0), d(void 0), v({ isTransitioning: !1 });
            });
          }),
            u(() => O(ie));
          return;
        }
        D
          ? (g && g.resolve(),
            D.skipTransition(),
            N({
              state: J,
              currentLocation: le.currentLocation,
              nextLocation: le.nextLocation,
            }))
          : (d(J),
            v({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: le.currentLocation,
              nextLocation: le.nextLocation,
            }));
      },
      [i.window, u, D, g]
    );
  T.useLayoutEffect(() => i.subscribe($), [i, $]),
    T.useEffect(() => {
      h.isTransitioning && !h.flushSync && S(new Mh());
    }, [h]),
    T.useEffect(() => {
      if (g && f && i.window) {
        let J = f,
          ae = g.promise,
          C = i.window.document.startViewTransition(async () => {
            T.startTransition(() => c(J)), await ae;
          });
        C.finished.finally(() => {
          S(void 0), O(void 0), d(void 0), v({ isTransitioning: !1 });
        }),
          O(C);
      }
    }, [f, g, i.window]),
    T.useEffect(() => {
      g && f && a.location.key === f.location.key && g.resolve();
    }, [g, D, a.location, f]),
    T.useEffect(() => {
      !h.isTransitioning &&
        L &&
        (d(L.state),
        v({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: L.currentLocation,
          nextLocation: L.nextLocation,
        }),
        N(void 0));
    }, [h.isTransitioning, L]);
  let H = T.useMemo(
      () => ({
        createHref: i.createHref,
        encodeLocation: i.encodeLocation,
        go: (J) => i.navigate(J),
        push: (J, ae, C) =>
          i.navigate(J, {
            state: ae,
            preventScrollReset: C == null ? void 0 : C.preventScrollReset,
          }),
        replace: (J, ae, C) =>
          i.navigate(J, {
            replace: !0,
            state: ae,
            preventScrollReset: C == null ? void 0 : C.preventScrollReset,
          }),
      }),
      [i]
    ),
    M = i.basename || "/",
    b = T.useMemo(
      () => ({ router: i, navigator: H, static: !1, basename: M }),
      [i, H, M]
    );
  return T.createElement(
    T.Fragment,
    null,
    T.createElement(
      dr.Provider,
      { value: b },
      T.createElement(
        Ol.Provider,
        { value: a },
        T.createElement(
          vc.Provider,
          { value: z.current },
          T.createElement(
            ra.Provider,
            { value: h },
            T.createElement(
              Ih,
              {
                basename: M,
                location: a.location,
                navigationType: a.historyAction,
                navigator: H,
              },
              T.createElement(Fh, {
                routes: i.routes,
                future: i.future,
                state: a,
              })
            )
          )
        )
      )
    ),
    null
  );
}
var Fh = T.memo(Oh);
function Oh({ routes: i, future: u, state: a }) {
  return wh(i, void 0, a, u);
}
function wm(i) {
  return gh(i.context);
}
function Ih({
  basename: i = "/",
  children: u = null,
  location: a,
  navigationType: c = "POP",
  navigator: f,
  static: d = !1,
}) {
  Se(
    !Il(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = i.replace(/^\/*/, "/"),
    v = T.useMemo(
      () => ({ basename: h, navigator: f, static: d, future: {} }),
      [h, f, d]
    );
  typeof a == "string" && (a = Wn(a));
  let {
      pathname: g = "/",
      search: S = "",
      hash: D = "",
      state: O = null,
      key: L = "default",
    } = a,
    N = T.useMemo(() => {
      let z = Gt(g, h);
      return z == null
        ? null
        : {
            location: { pathname: z, search: S, hash: D, state: O, key: L },
            navigationType: c,
          };
    }, [h, g, S, D, O, L, c]);
  return (
    ot(
      N != null,
      `<Router basename="${h}"> is not able to match the URL "${g}${S}${D}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    N == null
      ? null
      : T.createElement(
          tn.Provider,
          { value: v },
          T.createElement(io.Provider, { children: u, value: N })
        )
  );
}
var bi = "get",
  eo = "application/x-www-form-urlencoded";
function oo(i) {
  return i != null && typeof i.tagName == "string";
}
function Uh(i) {
  return oo(i) && i.tagName.toLowerCase() === "button";
}
function jh(i) {
  return oo(i) && i.tagName.toLowerCase() === "form";
}
function $h(i) {
  return oo(i) && i.tagName.toLowerCase() === "input";
}
function Ah(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function Hh(i, u) {
  return i.button === 0 && (!u || u === "_self") && !Ah(i);
}
var Zi = null;
function Bh() {
  if (Zi === null)
    try {
      new FormData(document.createElement("form"), 0), (Zi = !1);
    } catch {
      Zi = !0;
    }
  return Zi;
}
var Vh = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Gu(i) {
  return i != null && !Vh.has(i)
    ? (ot(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${eo}"`
      ),
      null)
    : i;
}
function Wh(i, u) {
  let a, c, f, d, h;
  if (jh(i)) {
    let v = i.getAttribute("action");
    (c = v ? Gt(v, u) : null),
      (a = i.getAttribute("method") || bi),
      (f = Gu(i.getAttribute("enctype")) || eo),
      (d = new FormData(i));
  } else if (Uh(i) || ($h(i) && (i.type === "submit" || i.type === "image"))) {
    let v = i.form;
    if (v == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let g = i.getAttribute("formaction") || v.getAttribute("action");
    if (
      ((c = g ? Gt(g, u) : null),
      (a = i.getAttribute("formmethod") || v.getAttribute("method") || bi),
      (f =
        Gu(i.getAttribute("formenctype")) ||
        Gu(v.getAttribute("enctype")) ||
        eo),
      (d = new FormData(v, i)),
      !Bh())
    ) {
      let { name: S, type: D, value: O } = i;
      if (D === "image") {
        let L = S ? `${S}.` : "";
        d.append(`${L}x`, "0"), d.append(`${L}y`, "0");
      } else S && d.append(S, O);
    }
  } else {
    if (oo(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (a = bi), (c = null), (f = eo), (h = i);
  }
  return (
    d && f === "text/plain" && ((h = d), (d = void 0)),
    { action: c, method: a.toLowerCase(), encType: f, formData: d, body: h }
  );
}
function ua(i, u) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(u);
}
async function Qh(i, u) {
  if (i.id in u) return u[i.id];
  try {
    let a = await import(i.module);
    return (u[i.id] = a), a;
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${i.module}\`, reloading page...`
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Kh(i) {
  return i == null
    ? !1
    : i.href == null
    ? i.rel === "preload" &&
      typeof i.imageSrcSet == "string" &&
      typeof i.imageSizes == "string"
    : typeof i.rel == "string" && typeof i.href == "string";
}
async function Yh(i, u, a) {
  let c = await Promise.all(
    i.map(async (f) => {
      let d = u.routes[f.route.id];
      if (d) {
        let h = await Qh(d, a);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return Zh(
    c
      .flat(1)
      .filter(Kh)
      .filter((f) => f.rel === "stylesheet" || f.rel === "preload")
      .map((f) =>
        f.rel === "stylesheet"
          ? { ...f, rel: "prefetch", as: "style" }
          : { ...f, rel: "prefetch" }
      )
  );
}
function ic(i, u, a, c, f, d) {
  let h = (g, S) => (a[S] ? g.route.id !== a[S].route.id : !0),
    v = (g, S) => {
      var D;
      return (
        a[S].pathname !== g.pathname ||
        (((D = a[S].route.path) == null ? void 0 : D.endsWith("*")) &&
          a[S].params["*"] !== g.params["*"])
      );
    };
  return d === "assets"
    ? u.filter((g, S) => h(g, S) || v(g, S))
    : d === "data"
    ? u.filter((g, S) => {
        var O;
        let D = c.routes[g.route.id];
        if (!D || !D.hasLoader) return !1;
        if (h(g, S) || v(g, S)) return !0;
        if (g.route.shouldRevalidate) {
          let L = g.route.shouldRevalidate({
            currentUrl: new URL(f.pathname + f.search + f.hash, window.origin),
            currentParams: ((O = a[0]) == null ? void 0 : O.params) || {},
            nextUrl: new URL(i, window.origin),
            nextParams: g.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof L == "boolean") return L;
        }
        return !0;
      })
    : [];
}
function Xh(i, u) {
  return Gh(
    i
      .map((a) => {
        let c = u.routes[a.route.id];
        if (!c) return [];
        let f = [c.module];
        return c.imports && (f = f.concat(c.imports)), f;
      })
      .flat(1)
  );
}
function Gh(i) {
  return [...new Set(i)];
}
function Jh(i) {
  let u = {},
    a = Object.keys(i).sort();
  for (let c of a) u[c] = i[c];
  return u;
}
function Zh(i, u) {
  let a = new Set();
  return (
    new Set(u),
    i.reduce((c, f) => {
      let d = JSON.stringify(Jh(f));
      return a.has(d) || (a.add(d), c.push({ key: d, link: f })), c;
    }, [])
  );
}
function qh(i) {
  let u =
    typeof i == "string"
      ? new URL(
          i,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : i;
  return (
    u.pathname === "/"
      ? (u.pathname = "_root.data")
      : (u.pathname = `${u.pathname.replace(/\/$/, "")}.data`),
    u
  );
}
function bh() {
  let i = T.useContext(dr);
  return (
    ua(
      i,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    i
  );
}
function em() {
  let i = T.useContext(Ol);
  return (
    ua(
      i,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    i
  );
}
var aa = T.createContext(void 0);
aa.displayName = "FrameworkContext";
function Ec() {
  let i = T.useContext(aa);
  return (
    ua(i, "You must render this element inside a <HydratedRouter> element"), i
  );
}
function tm(i, u) {
  let a = T.useContext(aa),
    [c, f] = T.useState(!1),
    [d, h] = T.useState(!1),
    {
      onFocus: v,
      onBlur: g,
      onMouseEnter: S,
      onMouseLeave: D,
      onTouchStart: O,
    } = u,
    L = T.useRef(null);
  T.useEffect(() => {
    if ((i === "render" && h(!0), i === "viewport")) {
      let $ = (M) => {
          M.forEach((b) => {
            h(b.isIntersecting);
          });
        },
        H = new IntersectionObserver($, { threshold: 0.5 });
      return (
        L.current && H.observe(L.current),
        () => {
          H.disconnect();
        }
      );
    }
  }, [i]),
    T.useEffect(() => {
      if (c) {
        let $ = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout($);
        };
      }
    }, [c]);
  let N = () => {
      f(!0);
    },
    z = () => {
      f(!1), h(!1);
    };
  return a
    ? i !== "intent"
      ? [d, L, {}]
      : [
          d,
          L,
          {
            onFocus: Ml(v, N),
            onBlur: Ml(g, z),
            onMouseEnter: Ml(S, N),
            onMouseLeave: Ml(D, z),
            onTouchStart: Ml(O, N),
          },
        ]
    : [!1, L, {}];
}
function Ml(i, u) {
  return (a) => {
    i && i(a), a.defaultPrevented || u(a);
  };
}
function nm({ page: i, ...u }) {
  let { router: a } = bh(),
    c = T.useMemo(() => Bn(a.routes, i, a.basename), [a.routes, i, a.basename]);
  return c ? T.createElement(lm, { page: i, matches: c, ...u }) : null;
}
function rm(i) {
  let { manifest: u, routeModules: a } = Ec(),
    [c, f] = T.useState([]);
  return (
    T.useEffect(() => {
      let d = !1;
      return (
        Yh(i, u, a).then((h) => {
          d || f(h);
        }),
        () => {
          d = !0;
        }
      );
    }, [i, u, a]),
    c
  );
}
function lm({ page: i, matches: u, ...a }) {
  let c = pr(),
    { manifest: f, routeModules: d } = Ec(),
    { loaderData: h, matches: v } = em(),
    g = T.useMemo(() => ic(i, u, v, f, c, "data"), [i, u, v, f, c]),
    S = T.useMemo(() => ic(i, u, v, f, c, "assets"), [i, u, v, f, c]),
    D = T.useMemo(() => {
      if (i === c.pathname + c.search + c.hash) return [];
      let N = new Set(),
        z = !1;
      if (
        (u.forEach((H) => {
          var b;
          let M = f.routes[H.route.id];
          !M ||
            !M.hasLoader ||
            ((!g.some((J) => J.route.id === H.route.id) &&
              H.route.id in h &&
              (b = d[H.route.id]) != null &&
              b.shouldRevalidate) ||
            M.hasClientLoader
              ? (z = !0)
              : N.add(H.route.id));
        }),
        N.size === 0)
      )
        return [];
      let $ = qh(i);
      return (
        z &&
          N.size > 0 &&
          $.searchParams.set(
            "_routes",
            u
              .filter((H) => N.has(H.route.id))
              .map((H) => H.route.id)
              .join(",")
          ),
        [$.pathname + $.search]
      );
    }, [h, c, f, g, u, i, d]),
    O = T.useMemo(() => Xh(S, f), [S, f]),
    L = rm(S);
  return T.createElement(
    T.Fragment,
    null,
    D.map((N) =>
      T.createElement("link", {
        key: N,
        rel: "prefetch",
        as: "fetch",
        href: N,
        ...a,
      })
    ),
    O.map((N) =>
      T.createElement("link", { key: N, rel: "modulepreload", href: N, ...a })
    ),
    L.map(({ key: N, link: z }) => T.createElement("link", { key: N, ...z }))
  );
}
function im(...i) {
  return (u) => {
    i.forEach((a) => {
      typeof a == "function" ? a(u) : a != null && (a.current = u);
    });
  };
}
var kc =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  kc && (window.__reactRouterVersion = "7.1.3");
} catch {}
function Sm(i, u) {
  return Xp({
    basename: u == null ? void 0 : u.basename,
    future: u == null ? void 0 : u.future,
    history: gp({ window: u == null ? void 0 : u.window }),
    hydrationData: om(),
    routes: i,
    mapRouteProperties: Dh,
    dataStrategy: u == null ? void 0 : u.dataStrategy,
    patchRoutesOnNavigation: u == null ? void 0 : u.patchRoutesOnNavigation,
    window: u == null ? void 0 : u.window,
  }).initialize();
}
function om() {
  let i = window == null ? void 0 : window.__staticRouterHydrationData;
  return i && i.errors && (i = { ...i, errors: um(i.errors) }), i;
}
function um(i) {
  if (!i) return null;
  let u = Object.entries(i),
    a = {};
  for (let [c, f] of u)
    if (f && f.__type === "RouteErrorResponse")
      a[c] = new ro(f.status, f.statusText, f.data, f.internal === !0);
    else if (f && f.__type === "Error") {
      if (f.__subType) {
        let d = window[f.__subType];
        if (typeof d == "function")
          try {
            let h = new d(f.message);
            (h.stack = ""), (a[c] = h);
          } catch {}
      }
      if (a[c] == null) {
        let d = new Error(f.message);
        (d.stack = ""), (a[c] = d);
      }
    } else a[c] = f;
  return a;
}
var xc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Cc = T.forwardRef(function (
    {
      onClick: u,
      discover: a = "render",
      prefetch: c = "none",
      relative: f,
      reloadDocument: d,
      replace: h,
      state: v,
      target: g,
      to: S,
      preventScrollReset: D,
      viewTransition: O,
      ...L
    },
    N
  ) {
    let { basename: z } = T.useContext(tn),
      $ = typeof S == "string" && xc.test(S),
      H,
      M = !1;
    if (typeof S == "string" && $ && ((H = S), kc))
      try {
        let ge = new URL(window.location.href),
          Ce = S.startsWith("//") ? new URL(ge.protocol + S) : new URL(S),
          Ke = Gt(Ce.pathname, z);
        Ce.origin === ge.origin && Ke != null
          ? (S = Ke + Ce.search + Ce.hash)
          : (M = !0);
      } catch {
        ot(
          !1,
          `<Link to="${S}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let b = hh(S, { relative: f }),
      [J, ae, C] = tm(c, L),
      le = cm(S, {
        replace: h,
        state: v,
        target: g,
        preventScrollReset: D,
        relative: f,
        viewTransition: O,
      });
    function pe(ge) {
      u && u(ge), ge.defaultPrevented || le(ge);
    }
    let ie = T.createElement("a", {
      ...L,
      ...C,
      href: H || b,
      onClick: M || d ? u : pe,
      ref: im(N, ae),
      target: g,
      "data-discover": !$ && a === "render" ? "true" : void 0,
    });
    return J && !$
      ? T.createElement(T.Fragment, null, ie, T.createElement(nm, { page: b }))
      : ie;
  });
Cc.displayName = "Link";
var am = T.forwardRef(function (
  {
    "aria-current": u = "page",
    caseSensitive: a = !1,
    className: c = "",
    end: f = !1,
    style: d,
    to: h,
    viewTransition: v,
    children: g,
    ...S
  },
  D
) {
  let O = Ul(h, { relative: S.relative }),
    L = pr(),
    N = T.useContext(Ol),
    { navigator: z, basename: $ } = T.useContext(tn),
    H = N != null && ym(O) && v === !0,
    M = z.encodeLocation ? z.encodeLocation(O).pathname : O.pathname,
    b = L.pathname,
    J =
      N && N.navigation && N.navigation.location
        ? N.navigation.location.pathname
        : null;
  a ||
    ((b = b.toLowerCase()),
    (J = J ? J.toLowerCase() : null),
    (M = M.toLowerCase())),
    J && $ && (J = Gt(J, $) || J);
  const ae = M !== "/" && M.endsWith("/") ? M.length - 1 : M.length;
  let C = b === M || (!f && b.startsWith(M) && b.charAt(ae) === "/"),
    le =
      J != null &&
      (J === M || (!f && J.startsWith(M) && J.charAt(M.length) === "/")),
    pe = { isActive: C, isPending: le, isTransitioning: H },
    ie = C ? u : void 0,
    ge;
  typeof c == "function"
    ? (ge = c(pe))
    : (ge = [
        c,
        C ? "active" : null,
        le ? "pending" : null,
        H ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Ce = typeof d == "function" ? d(pe) : d;
  return T.createElement(
    Cc,
    {
      ...S,
      "aria-current": ie,
      className: ge,
      ref: D,
      style: Ce,
      to: h,
      viewTransition: v,
    },
    typeof g == "function" ? g(pe) : g
  );
});
am.displayName = "NavLink";
var sm = T.forwardRef(
  (
    {
      discover: i = "render",
      fetcherKey: u,
      navigate: a,
      reloadDocument: c,
      replace: f,
      state: d,
      method: h = bi,
      action: v,
      onSubmit: g,
      relative: S,
      preventScrollReset: D,
      viewTransition: O,
      ...L
    },
    N
  ) => {
    let z = hm(),
      $ = mm(v, { relative: S }),
      H = h.toLowerCase() === "get" ? "get" : "post",
      M = typeof v == "string" && xc.test(v),
      b = (J) => {
        if ((g && g(J), J.defaultPrevented)) return;
        J.preventDefault();
        let ae = J.nativeEvent.submitter,
          C = (ae == null ? void 0 : ae.getAttribute("formmethod")) || h;
        z(ae || J.currentTarget, {
          fetcherKey: u,
          method: C,
          navigate: a,
          replace: f,
          state: d,
          relative: S,
          preventScrollReset: D,
          viewTransition: O,
        });
      };
    return T.createElement("form", {
      ref: N,
      method: H,
      action: $,
      onSubmit: c ? g : b,
      ...L,
      "data-discover": !M && i === "render" ? "true" : void 0,
    });
  }
);
sm.displayName = "Form";
function fm(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Rc(i) {
  let u = T.useContext(dr);
  return Se(u, fm(i)), u;
}
function cm(
  i,
  {
    target: u,
    replace: a,
    state: c,
    preventScrollReset: f,
    relative: d,
    viewTransition: h,
  } = {}
) {
  let v = mh(),
    g = pr(),
    S = Ul(i, { relative: d });
  return T.useCallback(
    (D) => {
      if (Hh(D, u)) {
        D.preventDefault();
        let O = a !== void 0 ? a : Vn(g) === Vn(S);
        v(i, {
          replace: O,
          state: c,
          preventScrollReset: f,
          relative: d,
          viewTransition: h,
        });
      }
    },
    [g, v, S, a, c, u, i, f, d, h]
  );
}
var dm = 0,
  pm = () => `__${String(++dm)}__`;
function hm() {
  let { router: i } = Rc("useSubmit"),
    { basename: u } = T.useContext(tn),
    a = _h();
  return T.useCallback(
    async (c, f = {}) => {
      let { action: d, method: h, encType: v, formData: g, body: S } = Wh(c, u);
      if (f.navigate === !1) {
        let D = f.fetcherKey || pm();
        await i.fetch(D, a, f.action || d, {
          preventScrollReset: f.preventScrollReset,
          formData: g,
          body: S,
          formMethod: f.method || h,
          formEncType: f.encType || v,
          flushSync: f.flushSync,
        });
      } else
        await i.navigate(f.action || d, {
          preventScrollReset: f.preventScrollReset,
          formData: g,
          body: S,
          formMethod: f.method || h,
          formEncType: f.encType || v,
          replace: f.replace,
          state: f.state,
          fromRouteId: a,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [i, u, a]
  );
}
function mm(i, { relative: u } = {}) {
  let { basename: a } = T.useContext(tn),
    c = T.useContext(nn);
  Se(c, "useFormAction must be used inside a RouteContext");
  let [f] = c.matches.slice(-1),
    d = { ...Ul(i || ".", { relative: u }) },
    h = pr();
  if (i == null) {
    d.search = h.search;
    let v = new URLSearchParams(d.search),
      g = v.getAll("index");
    if (g.some((D) => D === "")) {
      v.delete("index"),
        g.filter((O) => O).forEach((O) => v.append("index", O));
      let D = v.toString();
      d.search = D ? `?${D}` : "";
    }
  }
  return (
    (!i || i === ".") &&
      f.route.index &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    a !== "/" && (d.pathname = d.pathname === "/" ? a : en([a, d.pathname])),
    Vn(d)
  );
}
function ym(i, u = {}) {
  let a = T.useContext(ra);
  Se(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Rc("useViewTransitionState"),
    f = Ul(i, { relative: u.relative });
  if (!a.isTransitioning) return !1;
  let d = Gt(a.currentLocation.pathname, c) || a.currentLocation.pathname,
    h = Gt(a.nextLocation.pathname, c) || a.nextLocation.pathname;
  return no(f.pathname, h) != null || no(f.pathname, d) != null;
}
new TextEncoder();
var Pc = yp();
const Em = oc(Pc);
/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function km(i) {
  return T.createElement(zh, { flushSync: Pc.flushSync, ...i });
}
export {
  Cc as L,
  wm as O,
  gm as R,
  T as a,
  Pc as b,
  Em as c,
  dp as d,
  vm as e,
  yp as f,
  Sm as g,
  km as h,
  uc as r,
};
