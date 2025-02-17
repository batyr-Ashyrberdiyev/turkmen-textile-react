var lu = (e) => {
  throw TypeError(e);
};
var Qo = (e, t, n) => t.has(e) || lu("Cannot " + n);
var C = (e, t, n) => (
    Qo(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  ee = (e, t, n) =>
    t.has(e)
      ? lu("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  H = (e, t, n, r) => (
    Qo(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  fe = (e, t, n) => (Qo(e, t, "access private method"), n);
var Ri = (e, t, n, r) => ({
  set _(s) {
    H(e, t, s, n);
  },
  get _() {
    return C(e, t, r);
  },
});
import {
  r as Hy,
  a as x,
  R as qy,
  b as sh,
  c as Zy,
  d as ve,
  L as Me,
  e as ki,
} from "./react-vendor-OnsDvTPE.js";
var Xo = { exports: {} },
  gs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uu;
function Gy() {
  if (uu) return gs;
  uu = 1;
  var e = Hy(),
    t = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    r = Object.prototype.hasOwnProperty,
    s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, c, l) {
    var u,
      d = {},
      f = null,
      p = null;
    l !== void 0 && (f = "" + l),
      c.key !== void 0 && (f = "" + c.key),
      c.ref !== void 0 && (p = c.ref);
    for (u in c) r.call(c, u) && !i.hasOwnProperty(u) && (d[u] = c[u]);
    if (a && a.defaultProps)
      for (u in ((c = a.defaultProps), c)) d[u] === void 0 && (d[u] = c[u]);
    return {
      $$typeof: t,
      type: a,
      key: f,
      ref: p,
      props: d,
      _owner: s.current,
    };
  }
  return (gs.Fragment = n), (gs.jsx = o), (gs.jsxs = o), gs;
}
var du;
function Ky() {
  return du || ((du = 1), (Xo.exports = Gy())), Xo.exports;
}
var y = Ky();
function mt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (s) {
    if ((e == null || e(s), n === !1 || !s.defaultPrevented))
      return t == null ? void 0 : t(s);
  };
}
function fu(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function ih(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((s) => {
      const i = fu(s, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : fu(e[s], null);
        }
      };
  };
}
function It(...e) {
  return x.useCallback(ih(...e), e);
}
function Qy(e, t) {
  const n = x.createContext(t),
    r = (i) => {
      const { children: o, ...a } = i,
        c = x.useMemo(() => a, Object.values(a));
      return y.jsx(n.Provider, { value: c, children: o });
    };
  r.displayName = e + "Provider";
  function s(i) {
    const o = x.useContext(n);
    if (o) return o;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, s];
}
function Mc(e, t = []) {
  let n = [];
  function r(i, o) {
    const a = x.createContext(o),
      c = n.length;
    n = [...n, o];
    const l = (d) => {
      var v;
      const { scope: f, children: p, ...m } = d,
        h = ((v = f == null ? void 0 : f[e]) == null ? void 0 : v[c]) || a,
        g = x.useMemo(() => m, Object.values(m));
      return y.jsx(h.Provider, { value: g, children: p });
    };
    l.displayName = i + "Provider";
    function u(d, f) {
      var h;
      const p = ((h = f == null ? void 0 : f[e]) == null ? void 0 : h[c]) || a,
        m = x.useContext(p);
      if (m) return m;
      if (o !== void 0) return o;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [l, u];
  }
  const s = () => {
    const i = n.map((o) => x.createContext(o));
    return function (a) {
      const c = (a == null ? void 0 : a[e]) || i;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: c } }), [a, c]);
    };
  };
  return (s.scopeName = e), [r, Xy(s, ...t)];
}
function Xy(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (i) {
      const o = r.reduce((a, { useScope: c, scopeName: l }) => {
        const d = c(i)[`__scope${l}`];
        return { ...a, ...d };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var ur =
    globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
  Yy = qy.useId || (() => {}),
  Jy = 0;
function zi(e) {
  const [t, n] = x.useState(Yy());
  return (
    ur(() => {
      n((r) => r ?? String(Jy++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
function On(e) {
  const t = x.useRef(e);
  return (
    x.useEffect(() => {
      t.current = e;
    }),
    x.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function oh({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, s] = ev({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    o = i ? e : r,
    a = On(n),
    c = x.useCallback(
      (l) => {
        if (i) {
          const d = typeof l == "function" ? l(e) : l;
          d !== e && a(d);
        } else s(l);
      },
      [i, e, s, a]
    );
  return [o, c];
}
function ev({ defaultProp: e, onChange: t }) {
  const n = x.useState(e),
    [r] = n,
    s = x.useRef(r),
    i = On(t);
  return (
    x.useEffect(() => {
      s.current !== r && (i(r), (s.current = r));
    }, [r, s, i]),
    n
  );
}
var rs = x.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    s = x.Children.toArray(n),
    i = s.find(nv);
  if (i) {
    const o = i.props.children,
      a = s.map((c) =>
        c === i
          ? x.Children.count(o) > 1
            ? x.Children.only(null)
            : x.isValidElement(o)
            ? o.props.children
            : null
          : c
      );
    return y.jsx(Oa, {
      ...r,
      ref: t,
      children: x.isValidElement(o) ? x.cloneElement(o, void 0, a) : null,
    });
  }
  return y.jsx(Oa, { ...r, ref: t, children: n });
});
rs.displayName = "Slot";
var Oa = x.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (x.isValidElement(n)) {
    const s = sv(n);
    return x.cloneElement(n, { ...rv(r, n.props), ref: t ? ih(t, s) : s });
  }
  return x.Children.count(n) > 1 ? x.Children.only(null) : null;
});
Oa.displayName = "SlotClone";
var tv = ({ children: e }) => y.jsx(y.Fragment, { children: e });
function nv(e) {
  return x.isValidElement(e) && e.type === tv;
}
function rv(e, t) {
  const n = { ...t };
  for (const r in t) {
    const s = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? s && i
        ? (n[r] = (...a) => {
            i(...a), s(...a);
          })
        : s && (n[r] = s)
      : r === "style"
      ? (n[r] = { ...s, ...i })
      : r === "className" && (n[r] = [s, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function sv(e) {
  var r, s;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var iv = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  it = iv.reduce((e, t) => {
    const n = x.forwardRef((r, s) => {
      const { asChild: i, ...o } = r,
        a = i ? rs : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        y.jsx(a, { ...o, ref: s })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function ov(e, t) {
  e && sh.flushSync(() => e.dispatchEvent(t));
}
function av(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = On(e);
  x.useEffect(() => {
    const r = (s) => {
      s.key === "Escape" && n(s);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var cv = "DismissableLayer",
  Na = "dismissableLayer.update",
  lv = "dismissableLayer.pointerDownOutside",
  uv = "dismissableLayer.focusOutside",
  hu,
  ah = x.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Fc = x.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: o,
        onDismiss: a,
        ...c
      } = e,
      l = x.useContext(ah),
      [u, d] = x.useState(null),
      f =
        (u == null ? void 0 : u.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, p] = x.useState({}),
      m = It(t, (R) => d(R)),
      h = Array.from(l.layers),
      [g] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
      v = h.indexOf(g),
      b = u ? h.indexOf(u) : -1,
      w = l.layersWithOutsidePointerEventsDisabled.size > 0,
      T = b >= v,
      S = hv((R) => {
        const A = R.target,
          N = [...l.branches].some((D) => D.contains(A));
        !T ||
          N ||
          (s == null || s(R),
          o == null || o(R),
          R.defaultPrevented || a == null || a());
      }, f),
      E = pv((R) => {
        const A = R.target;
        [...l.branches].some((D) => D.contains(A)) ||
          (i == null || i(R),
          o == null || o(R),
          R.defaultPrevented || a == null || a());
      }, f);
    return (
      av((R) => {
        b === l.layers.size - 1 &&
          (r == null || r(R),
          !R.defaultPrevented && a && (R.preventDefault(), a()));
      }, f),
      x.useEffect(() => {
        if (u)
          return (
            n &&
              (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((hu = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              l.layersWithOutsidePointerEventsDisabled.add(u)),
            l.layers.add(u),
            pu(),
            () => {
              n &&
                l.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = hu);
            }
          );
      }, [u, f, n, l]),
      x.useEffect(
        () => () => {
          u &&
            (l.layers.delete(u),
            l.layersWithOutsidePointerEventsDisabled.delete(u),
            pu());
        },
        [u, l]
      ),
      x.useEffect(() => {
        const R = () => p({});
        return (
          document.addEventListener(Na, R),
          () => document.removeEventListener(Na, R)
        );
      }, []),
      y.jsx(it.div, {
        ...c,
        ref: m,
        style: {
          pointerEvents: w ? (T ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: mt(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: mt(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: mt(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        ),
      })
    );
  });
Fc.displayName = cv;
var dv = "DismissableLayerBranch",
  fv = x.forwardRef((e, t) => {
    const n = x.useContext(ah),
      r = x.useRef(null),
      s = It(t, r);
    return (
      x.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      y.jsx(it.div, { ...e, ref: s })
    );
  });
fv.displayName = dv;
function hv(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = On(e),
    r = x.useRef(!1),
    s = x.useRef(() => {});
  return (
    x.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let c = function () {
              ch(lv, n, l, { discrete: !0 });
            };
            const l = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", s.current),
                (s.current = c),
                t.addEventListener("click", s.current, { once: !0 }))
              : c();
          } else t.removeEventListener("click", s.current);
          r.current = !1;
        },
        o = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(o),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", s.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function pv(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = On(e),
    r = x.useRef(!1);
  return (
    x.useEffect(() => {
      const s = (i) => {
        i.target &&
          !r.current &&
          ch(uv, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function pu() {
  const e = new CustomEvent(Na);
  document.dispatchEvent(e);
}
function ch(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && s.addEventListener(e, t, { once: !0 }),
    r ? ov(s, i) : s.dispatchEvent(i);
}
var Yo = "focusScope.autoFocusOnMount",
  Jo = "focusScope.autoFocusOnUnmount",
  mu = { bubbles: !1, cancelable: !0 },
  mv = "FocusScope",
  Lc = x.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: s,
        onUnmountAutoFocus: i,
        ...o
      } = e,
      [a, c] = x.useState(null),
      l = On(s),
      u = On(i),
      d = x.useRef(null),
      f = It(t, (h) => c(h)),
      p = x.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    x.useEffect(() => {
      if (r) {
        let h = function (w) {
            if (p.paused || !a) return;
            const T = w.target;
            a.contains(T) ? (d.current = T) : bn(d.current, { select: !0 });
          },
          g = function (w) {
            if (p.paused || !a) return;
            const T = w.relatedTarget;
            T !== null && (a.contains(T) || bn(d.current, { select: !0 }));
          },
          v = function (w) {
            if (document.activeElement === document.body)
              for (const S of w) S.removedNodes.length > 0 && bn(a);
          };
        document.addEventListener("focusin", h),
          document.addEventListener("focusout", g);
        const b = new MutationObserver(v);
        return (
          a && b.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", h),
              document.removeEventListener("focusout", g),
              b.disconnect();
          }
        );
      }
    }, [r, a, p.paused]),
      x.useEffect(() => {
        if (a) {
          yu.add(p);
          const h = document.activeElement;
          if (!a.contains(h)) {
            const v = new CustomEvent(Yo, mu);
            a.addEventListener(Yo, l),
              a.dispatchEvent(v),
              v.defaultPrevented ||
                (gv(wv(lh(a)), { select: !0 }),
                document.activeElement === h && bn(a));
          }
          return () => {
            a.removeEventListener(Yo, l),
              setTimeout(() => {
                const v = new CustomEvent(Jo, mu);
                a.addEventListener(Jo, u),
                  a.dispatchEvent(v),
                  v.defaultPrevented || bn(h ?? document.body, { select: !0 }),
                  a.removeEventListener(Jo, u),
                  yu.remove(p);
              }, 0);
          };
        }
      }, [a, l, u, p]);
    const m = x.useCallback(
      (h) => {
        if ((!n && !r) || p.paused) return;
        const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey,
          v = document.activeElement;
        if (g && v) {
          const b = h.currentTarget,
            [w, T] = yv(b);
          w && T
            ? !h.shiftKey && v === T
              ? (h.preventDefault(), n && bn(w, { select: !0 }))
              : h.shiftKey &&
                v === w &&
                (h.preventDefault(), n && bn(T, { select: !0 }))
            : v === b && h.preventDefault();
        }
      },
      [n, r, p.paused]
    );
    return y.jsx(it.div, { tabIndex: -1, ...o, ref: f, onKeyDown: m });
  });
Lc.displayName = mv;
function gv(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((bn(r, { select: t }), document.activeElement !== n)) return;
}
function yv(e) {
  const t = lh(e),
    n = gu(t, e),
    r = gu(t.reverse(), e);
  return [n, r];
}
function lh(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const s = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || s
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function gu(e, t) {
  for (const n of e) if (!vv(n, { upTo: t })) return n;
}
function vv(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function xv(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function bn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && xv(e) && t && e.select();
  }
}
var yu = bv();
function bv() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = vu(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = vu(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function vu(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function wv(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Sv = "Portal",
  Ic = x.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [s, i] = x.useState(!1);
    ur(() => i(!0), []);
    const o =
      n ||
      (s &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return o ? Zy.createPortal(y.jsx(it.div, { ...r, ref: t }), o) : null;
  });
Ic.displayName = Sv;
function _v(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var ss = (e) => {
  const { present: t, children: n } = e,
    r = Tv(t),
    s =
      typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n),
    i = It(r.ref, Cv(s));
  return typeof n == "function" || r.isPresent
    ? x.cloneElement(s, { ref: i })
    : null;
};
ss.displayName = "Presence";
function Tv(e) {
  const [t, n] = x.useState(),
    r = x.useRef({}),
    s = x.useRef(e),
    i = x.useRef("none"),
    o = e ? "mounted" : "unmounted",
    [a, c] = _v(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    x.useEffect(() => {
      const l = Oi(r.current);
      i.current = a === "mounted" ? l : "none";
    }, [a]),
    ur(() => {
      const l = r.current,
        u = s.current;
      if (u !== e) {
        const f = i.current,
          p = Oi(l);
        e
          ? c("MOUNT")
          : p === "none" || (l == null ? void 0 : l.display) === "none"
          ? c("UNMOUNT")
          : c(u && f !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e);
      }
    }, [e, c]),
    ur(() => {
      if (t) {
        let l;
        const u = t.ownerDocument.defaultView ?? window,
          d = (p) => {
            const h = Oi(r.current).includes(p.animationName);
            if (p.target === t && h && (c("ANIMATION_END"), !s.current)) {
              const g = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (l = u.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = g);
                }));
            }
          },
          f = (p) => {
            p.target === t && (i.current = Oi(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            u.clearTimeout(l),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d);
          }
        );
      } else c("ANIMATION_END");
    }, [t, c]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: x.useCallback((l) => {
        l && (r.current = getComputedStyle(l)), n(l);
      }, []),
    }
  );
}
function Oi(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Cv(e) {
  var r, s;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var ea = 0;
function uh() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? xu()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? xu()),
      ea++,
      () => {
        ea === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          ea--;
      }
    );
  }, []);
}
function xu() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var Gt = function () {
  return (
    (Gt =
      Object.assign ||
      function (t) {
        for (var n, r = 1, s = arguments.length; r < s; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    Gt.apply(this, arguments)
  );
};
function dh(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
      t.indexOf(r[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[s]) &&
        (n[r[s]] = e[r[s]]);
  return n;
}
function Av(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, s = t.length, i; r < s; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Wi = "right-scroll-bar-position",
  Hi = "width-before-scroll-bar",
  Ev = "with-scroll-bars-hidden",
  Pv = "--removed-body-scroll-bar-size";
function ta(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Rv(e, t) {
  var n = x.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var s = n.value;
          s !== r && ((n.value = r), n.callback(r, s));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var kv = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
  bu = new WeakMap();
function Ov(e, t) {
  var n = Rv(null, function (r) {
    return e.forEach(function (s) {
      return ta(s, r);
    });
  });
  return (
    kv(
      function () {
        var r = bu.get(n);
        if (r) {
          var s = new Set(r),
            i = new Set(e),
            o = n.current;
          s.forEach(function (a) {
            i.has(a) || ta(a, null);
          }),
            i.forEach(function (a) {
              s.has(a) || ta(a, o);
            });
        }
        bu.set(n, e);
      },
      [e]
    ),
    n
  );
}
function Nv(e) {
  return e;
}
function jv(e, t) {
  t === void 0 && (t = Nv);
  var n = [],
    r = !1,
    s = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var o = t(i, r);
        return (
          n.push(o),
          function () {
            n = n.filter(function (a) {
              return a !== o;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var o = n;
          (n = []), o.forEach(i);
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var o = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(i), (o = n);
        }
        var c = function () {
            var u = o;
            (o = []), u.forEach(i);
          },
          l = function () {
            return Promise.resolve().then(c);
          };
        l(),
          (n = {
            push: function (u) {
              o.push(u), l();
            },
            filter: function (u) {
              return (o = o.filter(u)), n;
            },
          });
      },
    };
  return s;
}
function Dv(e) {
  e === void 0 && (e = {});
  var t = jv(null);
  return (t.options = Gt({ async: !0, ssr: !1 }, e)), t;
}
var fh = function (e) {
  var t = e.sideCar,
    n = dh(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return x.createElement(r, Gt({}, n));
};
fh.isSideCarExport = !0;
function Mv(e, t) {
  return e.useMedium(t), fh;
}
var hh = Dv(),
  na = function () {},
  Po = x.forwardRef(function (e, t) {
    var n = x.useRef(null),
      r = x.useState({
        onScrollCapture: na,
        onWheelCapture: na,
        onTouchMoveCapture: na,
      }),
      s = r[0],
      i = r[1],
      o = e.forwardProps,
      a = e.children,
      c = e.className,
      l = e.removeScrollBar,
      u = e.enabled,
      d = e.shards,
      f = e.sideCar,
      p = e.noIsolation,
      m = e.inert,
      h = e.allowPinchZoom,
      g = e.as,
      v = g === void 0 ? "div" : g,
      b = e.gapMode,
      w = dh(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      T = f,
      S = Ov([n, t]),
      E = Gt(Gt({}, w), s);
    return x.createElement(
      x.Fragment,
      null,
      u &&
        x.createElement(T, {
          sideCar: hh,
          removeScrollBar: l,
          shards: d,
          noIsolation: p,
          inert: m,
          setCallbacks: i,
          allowPinchZoom: !!h,
          lockRef: n,
          gapMode: b,
        }),
      o
        ? x.cloneElement(x.Children.only(a), Gt(Gt({}, E), { ref: S }))
        : x.createElement(v, Gt({}, E, { className: c, ref: S }), a)
    );
  });
Po.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Po.classNames = { fullWidth: Hi, zeroRight: Wi };
var Fv = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function Lv() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Fv();
  return t && e.setAttribute("nonce", t), e;
}
function Iv(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function Vv(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Bv = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = Lv()) && (Iv(t, n), Vv(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  Uv = function () {
    var e = Bv();
    return function (t, n) {
      x.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  ph = function () {
    var e = Uv(),
      t = function (n) {
        var r = n.styles,
          s = n.dynamic;
        return e(r, s), null;
      };
    return t;
  },
  $v = { left: 0, top: 0, right: 0, gap: 0 },
  ra = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  zv = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      s = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [ra(n), ra(r), ra(s)];
  },
  Wv = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return $v;
    var t = zv(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  Hv = ph(),
  Or = "data-scroll-locked",
  qv = function (e, t, n, r) {
    var s = e.left,
      i = e.top,
      o = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          Ev,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          Or,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  s,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  o,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Wi,
          ` {
    right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Hi,
          ` {
    margin-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Wi, " .")
        .concat(
          Wi,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Hi, " .")
        .concat(
          Hi,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          Or,
          `] {
    `
        )
        .concat(Pv, ": ")
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  wu = function () {
    var e = parseInt(document.body.getAttribute(Or) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  Zv = function () {
    x.useEffect(function () {
      return (
        document.body.setAttribute(Or, (wu() + 1).toString()),
        function () {
          var e = wu() - 1;
          e <= 0
            ? document.body.removeAttribute(Or)
            : document.body.setAttribute(Or, e.toString());
        }
      );
    }, []);
  },
  Gv = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      s = r === void 0 ? "margin" : r;
    Zv();
    var i = x.useMemo(
      function () {
        return Wv(s);
      },
      [s]
    );
    return x.createElement(Hv, { styles: qv(i, !t, s, n ? "" : "!important") });
  },
  ja = !1;
if (typeof window < "u")
  try {
    var Ni = Object.defineProperty({}, "passive", {
      get: function () {
        return (ja = !0), !0;
      },
    });
    window.addEventListener("test", Ni, Ni),
      window.removeEventListener("test", Ni, Ni);
  } catch {
    ja = !1;
  }
var br = ja ? { passive: !1 } : !1,
  Kv = function (e) {
    return e.tagName === "TEXTAREA";
  },
  mh = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !Kv(e) && n[t] === "visible")
    );
  },
  Qv = function (e) {
    return mh(e, "overflowY");
  },
  Xv = function (e) {
    return mh(e, "overflowX");
  },
  Su = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var s = gh(e, r);
      if (s) {
        var i = yh(e, r),
          o = i[1],
          a = i[2];
        if (o > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  Yv = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  Jv = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  gh = function (e, t) {
    return e === "v" ? Qv(t) : Xv(t);
  },
  yh = function (e, t) {
    return e === "v" ? Yv(t) : Jv(t);
  },
  ex = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  tx = function (e, t, n, r, s) {
    var i = ex(e, window.getComputedStyle(t).direction),
      o = i * r,
      a = n.target,
      c = t.contains(a),
      l = !1,
      u = o > 0,
      d = 0,
      f = 0;
    do {
      var p = yh(e, a),
        m = p[0],
        h = p[1],
        g = p[2],
        v = h - g - i * m;
      (m || v) && gh(e, a) && ((d += v), (f += m)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!c && a !== document.body) || (c && (t.contains(a) || t === a)));
    return ((u && Math.abs(d) < 1) || (!u && Math.abs(f) < 1)) && (l = !0), l;
  },
  ji = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  _u = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Tu = function (e) {
    return e && "current" in e ? e.current : e;
  },
  nx = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  rx = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  sx = 0,
  wr = [];
function ix(e) {
  var t = x.useRef([]),
    n = x.useRef([0, 0]),
    r = x.useRef(),
    s = x.useState(sx++)[0],
    i = x.useState(ph)[0],
    o = x.useRef(e);
  x.useEffect(
    function () {
      o.current = e;
    },
    [e]
  ),
    x.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(s));
          var h = Av([e.lockRef.current], (e.shards || []).map(Tu), !0).filter(
            Boolean
          );
          return (
            h.forEach(function (g) {
              return g.classList.add("allow-interactivity-".concat(s));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(s)),
                h.forEach(function (g) {
                  return g.classList.remove("allow-interactivity-".concat(s));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var a = x.useCallback(function (h, g) {
      if (
        ("touches" in h && h.touches.length === 2) ||
        (h.type === "wheel" && h.ctrlKey)
      )
        return !o.current.allowPinchZoom;
      var v = ji(h),
        b = n.current,
        w = "deltaX" in h ? h.deltaX : b[0] - v[0],
        T = "deltaY" in h ? h.deltaY : b[1] - v[1],
        S,
        E = h.target,
        R = Math.abs(w) > Math.abs(T) ? "h" : "v";
      if ("touches" in h && R === "h" && E.type === "range") return !1;
      var A = Su(R, E);
      if (!A) return !0;
      if ((A ? (S = R) : ((S = R === "v" ? "h" : "v"), (A = Su(R, E))), !A))
        return !1;
      if (
        (!r.current && "changedTouches" in h && (w || T) && (r.current = S), !S)
      )
        return !0;
      var N = r.current || S;
      return tx(N, g, h, N === "h" ? w : T);
    }, []),
    c = x.useCallback(function (h) {
      var g = h;
      if (!(!wr.length || wr[wr.length - 1] !== i)) {
        var v = "deltaY" in g ? _u(g) : ji(g),
          b = t.current.filter(function (S) {
            return (
              S.name === g.type &&
              (S.target === g.target || g.target === S.shadowParent) &&
              nx(S.delta, v)
            );
          })[0];
        if (b && b.should) {
          g.cancelable && g.preventDefault();
          return;
        }
        if (!b) {
          var w = (o.current.shards || [])
              .map(Tu)
              .filter(Boolean)
              .filter(function (S) {
                return S.contains(g.target);
              }),
            T = w.length > 0 ? a(g, w[0]) : !o.current.noIsolation;
          T && g.cancelable && g.preventDefault();
        }
      }
    }, []),
    l = x.useCallback(function (h, g, v, b) {
      var w = { name: h, delta: g, target: v, should: b, shadowParent: ox(v) };
      t.current.push(w),
        setTimeout(function () {
          t.current = t.current.filter(function (T) {
            return T !== w;
          });
        }, 1);
    }, []),
    u = x.useCallback(function (h) {
      (n.current = ji(h)), (r.current = void 0);
    }, []),
    d = x.useCallback(function (h) {
      l(h.type, _u(h), h.target, a(h, e.lockRef.current));
    }, []),
    f = x.useCallback(function (h) {
      l(h.type, ji(h), h.target, a(h, e.lockRef.current));
    }, []);
  x.useEffect(function () {
    return (
      wr.push(i),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", c, br),
      document.addEventListener("touchmove", c, br),
      document.addEventListener("touchstart", u, br),
      function () {
        (wr = wr.filter(function (h) {
          return h !== i;
        })),
          document.removeEventListener("wheel", c, br),
          document.removeEventListener("touchmove", c, br),
          document.removeEventListener("touchstart", u, br);
      }
    );
  }, []);
  var p = e.removeScrollBar,
    m = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    m ? x.createElement(i, { styles: rx(s) }) : null,
    p ? x.createElement(Gv, { gapMode: e.gapMode }) : null
  );
}
function ox(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const ax = Mv(hh, ix);
var Vc = x.forwardRef(function (e, t) {
  return x.createElement(Po, Gt({}, e, { ref: t, sideCar: ax }));
});
Vc.classNames = Po.classNames;
var cx = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Sr = new WeakMap(),
  Di = new WeakMap(),
  Mi = {},
  sa = 0,
  vh = function (e) {
    return e && (e.host || vh(e.parentNode));
  },
  lx = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = vh(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  ux = function (e, t, n, r) {
    var s = lx(t, Array.isArray(e) ? e : [e]);
    Mi[n] || (Mi[n] = new WeakMap());
    var i = Mi[n],
      o = [],
      a = new Set(),
      c = new Set(s),
      l = function (d) {
        !d || a.has(d) || (a.add(d), l(d.parentNode));
      };
    s.forEach(l);
    var u = function (d) {
      !d ||
        c.has(d) ||
        Array.prototype.forEach.call(d.children, function (f) {
          if (a.has(f)) u(f);
          else
            try {
              var p = f.getAttribute(r),
                m = p !== null && p !== "false",
                h = (Sr.get(f) || 0) + 1,
                g = (i.get(f) || 0) + 1;
              Sr.set(f, h),
                i.set(f, g),
                o.push(f),
                h === 1 && m && Di.set(f, !0),
                g === 1 && f.setAttribute(n, "true"),
                m || f.setAttribute(r, "true");
            } catch (v) {
              console.error("aria-hidden: cannot operate on ", f, v);
            }
        });
    };
    return (
      u(t),
      a.clear(),
      sa++,
      function () {
        o.forEach(function (d) {
          var f = Sr.get(d) - 1,
            p = i.get(d) - 1;
          Sr.set(d, f),
            i.set(d, p),
            f || (Di.has(d) || d.removeAttribute(r), Di.delete(d)),
            p || d.removeAttribute(n);
        }),
          sa--,
          sa ||
            ((Sr = new WeakMap()),
            (Sr = new WeakMap()),
            (Di = new WeakMap()),
            (Mi = {}));
      }
    );
  },
  xh = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      s = cx(e);
    return s
      ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live]"))),
        ux(r, s, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Bc = "Dialog",
  [bh, Nk] = Mc(Bc),
  [dx, Vt] = bh(Bc),
  wh = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: s,
        onOpenChange: i,
        modal: o = !0,
      } = e,
      a = x.useRef(null),
      c = x.useRef(null),
      [l = !1, u] = oh({ prop: r, defaultProp: s, onChange: i });
    return y.jsx(dx, {
      scope: t,
      triggerRef: a,
      contentRef: c,
      contentId: zi(),
      titleId: zi(),
      descriptionId: zi(),
      open: l,
      onOpenChange: u,
      onOpenToggle: x.useCallback(() => u((d) => !d), [u]),
      modal: o,
      children: n,
    });
  };
wh.displayName = Bc;
var Sh = "DialogTrigger",
  _h = x.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = Vt(Sh, n),
      i = It(t, s.triggerRef);
    return y.jsx(it.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": s.open,
      "aria-controls": s.contentId,
      "data-state": zc(s.open),
      ...r,
      ref: i,
      onClick: mt(e.onClick, s.onOpenToggle),
    });
  });
_h.displayName = Sh;
var Uc = "DialogPortal",
  [fx, Th] = bh(Uc, { forceMount: void 0 }),
  Ch = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: s } = e,
      i = Vt(Uc, t);
    return y.jsx(fx, {
      scope: t,
      forceMount: n,
      children: x.Children.map(r, (o) =>
        y.jsx(ss, {
          present: n || i.open,
          children: y.jsx(Ic, { asChild: !0, container: s, children: o }),
        })
      ),
    });
  };
Ch.displayName = Uc;
var to = "DialogOverlay",
  Ah = x.forwardRef((e, t) => {
    const n = Th(to, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...s } = e,
      i = Vt(to, e.__scopeDialog);
    return i.modal
      ? y.jsx(ss, {
          present: r || i.open,
          children: y.jsx(hx, { ...s, ref: t }),
        })
      : null;
  });
Ah.displayName = to;
var hx = x.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = Vt(to, n);
    return y.jsx(Vc, {
      as: rs,
      allowPinchZoom: !0,
      shards: [s.contentRef],
      children: y.jsx(it.div, {
        "data-state": zc(s.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  dr = "DialogContent",
  Eh = x.forwardRef((e, t) => {
    const n = Th(dr, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...s } = e,
      i = Vt(dr, e.__scopeDialog);
    return y.jsx(ss, {
      present: r || i.open,
      children: i.modal
        ? y.jsx(px, { ...s, ref: t })
        : y.jsx(mx, { ...s, ref: t }),
    });
  });
Eh.displayName = dr;
var px = x.forwardRef((e, t) => {
    const n = Vt(dr, e.__scopeDialog),
      r = x.useRef(null),
      s = It(t, n.contentRef, r);
    return (
      x.useEffect(() => {
        const i = r.current;
        if (i) return xh(i);
      }, []),
      y.jsx(Ph, {
        ...e,
        ref: s,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: mt(e.onCloseAutoFocus, (i) => {
          var o;
          i.preventDefault(), (o = n.triggerRef.current) == null || o.focus();
        }),
        onPointerDownOutside: mt(e.onPointerDownOutside, (i) => {
          const o = i.detail.originalEvent,
            a = o.button === 0 && o.ctrlKey === !0;
          (o.button === 2 || a) && i.preventDefault();
        }),
        onFocusOutside: mt(e.onFocusOutside, (i) => i.preventDefault()),
      })
    );
  }),
  mx = x.forwardRef((e, t) => {
    const n = Vt(dr, e.__scopeDialog),
      r = x.useRef(!1),
      s = x.useRef(!1);
    return y.jsx(Ph, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (i) => {
        var o, a;
        (o = e.onCloseAutoFocus) == null || o.call(e, i),
          i.defaultPrevented ||
            (r.current || (a = n.triggerRef.current) == null || a.focus(),
            i.preventDefault()),
          (r.current = !1),
          (s.current = !1);
      },
      onInteractOutside: (i) => {
        var c, l;
        (c = e.onInteractOutside) == null || c.call(e, i),
          i.defaultPrevented ||
            ((r.current = !0),
            i.detail.originalEvent.type === "pointerdown" && (s.current = !0));
        const o = i.target;
        ((l = n.triggerRef.current) == null ? void 0 : l.contains(o)) &&
          i.preventDefault(),
          i.detail.originalEvent.type === "focusin" &&
            s.current &&
            i.preventDefault();
      },
    });
  }),
  Ph = x.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: s,
        onCloseAutoFocus: i,
        ...o
      } = e,
      a = Vt(dr, n),
      c = x.useRef(null),
      l = It(t, c);
    return (
      uh(),
      y.jsxs(y.Fragment, {
        children: [
          y.jsx(Lc, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: s,
            onUnmountAutoFocus: i,
            children: y.jsx(Fc, {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": zc(a.open),
              ...o,
              ref: l,
              onDismiss: () => a.onOpenChange(!1),
            }),
          }),
          y.jsxs(y.Fragment, {
            children: [
              y.jsx(gx, { titleId: a.titleId }),
              y.jsx(vx, { contentRef: c, descriptionId: a.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  $c = "DialogTitle",
  Rh = x.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = Vt($c, n);
    return y.jsx(it.h2, { id: s.titleId, ...r, ref: t });
  });
Rh.displayName = $c;
var kh = "DialogDescription",
  Oh = x.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = Vt(kh, n);
    return y.jsx(it.p, { id: s.descriptionId, ...r, ref: t });
  });
Oh.displayName = kh;
var Nh = "DialogClose",
  jh = x.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = Vt(Nh, n);
    return y.jsx(it.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: mt(e.onClick, () => s.onOpenChange(!1)),
    });
  });
jh.displayName = Nh;
function zc(e) {
  return e ? "open" : "closed";
}
var Dh = "DialogTitleWarning",
  [jk, Mh] = Qy(Dh, { contentName: dr, titleName: $c, docsSlug: "dialog" }),
  gx = ({ titleId: e }) => {
    const t = Mh(Dh),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      x.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  yx = "DialogDescriptionWarning",
  vx = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
      Mh(yx).contentName
    }}.`;
    return (
      x.useEffect(() => {
        var i;
        const s =
          (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
        t && s && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  xx = wh,
  bx = _h,
  wx = Ch,
  Fh = Ah,
  Lh = Eh,
  Ih = Rh,
  Vh = Oh,
  Bh = jh;
function Uh(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = Uh(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function $h() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = Uh(e)) && (r && (r += " "), (r += t));
  return r;
}
const Cu = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Au = $h,
  Wc = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Au(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: s, defaultVariants: i } = t,
      o = Object.keys(s).map((l) => {
        const u = n == null ? void 0 : n[l],
          d = i == null ? void 0 : i[l];
        if (u === null) return null;
        const f = Cu(u) || Cu(d);
        return s[l][f];
      }),
      a =
        n &&
        Object.entries(n).reduce((l, u) => {
          let [d, f] = u;
          return f === void 0 || (l[d] = f), l;
        }, {}),
      c =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((l, u) => {
              let { class: d, className: f, ...p } = u;
              return Object.entries(p).every((m) => {
                let [h, g] = m;
                return Array.isArray(g)
                  ? g.includes({ ...i, ...a }[h])
                  : { ...i, ...a }[h] === g;
              })
                ? [...l, d, f]
                : l;
            }, []);
    return Au(
      e,
      o,
      c,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sx = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  zh = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var _x = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tx = x.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: s = "",
      children: i,
      iconNode: o,
      ...a
    },
    c
  ) =>
    x.createElement(
      "svg",
      {
        ref: c,
        ..._x,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: zh("lucide", s),
        ...a,
      },
      [
        ...o.map(([l, u]) => x.createElement(l, u)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Un = (e, t) => {
  const n = x.forwardRef(({ className: r, ...s }, i) =>
    x.createElement(Tx, {
      ref: i,
      iconNode: t,
      className: zh(`lucide-${Sx(e)}`, r),
      ...s,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cx = [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }],
  ],
  Ax = Un("ArrowUpRight", Cx);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ex = [
    [
      "path",
      {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        key: "1jg4f8",
      },
    ],
  ],
  Px = Un("Facebook", Ex);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rx = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  Wh = Un("LoaderCircle", Rx);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kx = [
    ["path", { d: "M12 2v4", key: "3427ic" }],
    ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
    ["path", { d: "M18 12h4", key: "wj9ykh" }],
    ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
    ["path", { d: "M12 18v4", key: "jadmvz" }],
    ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
    ["path", { d: "M2 12h4", key: "j09sii" }],
    ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
  ],
  Dk = Un("Loader", kx);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ox = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  Nx = Un("MapPin", Ox);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jx = [
    [
      "rect",
      {
        width: "14",
        height: "20",
        x: "5",
        y: "2",
        rx: "2",
        ry: "2",
        key: "1yt0o3",
      },
    ],
    ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ],
  Dx = Un("Smartphone", jx);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mx = [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
    ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
  ],
  Fx = Un("Upload", Mx);
/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lx = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Ix = Un("X", Lx),
  Hc = "-",
  Vx = (e) => {
    const t = Ux(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (o) => {
        const a = o.split(Hc);
        return a[0] === "" && a.length !== 1 && a.shift(), Hh(a, t) || Bx(o);
      },
      getConflictingClassGroupIds: (o, a) => {
        const c = n[o] || [];
        return a && r[o] ? [...c, ...r[o]] : c;
      },
    };
  },
  Hh = (e, t) => {
    var o;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      s = r ? Hh(e.slice(1), r) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const i = e.join(Hc);
    return (o = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : o.classGroupId;
  },
  Eu = /^\[(.+)\]$/,
  Bx = (e) => {
    if (Eu.test(e)) {
      const t = Eu.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Ux = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      zx(Object.entries(e.classGroups), n).forEach(([i, o]) => {
        Da(o, r, i, t);
      }),
      r
    );
  },
  Da = (e, t, n, r) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const i = s === "" ? t : Pu(t, s);
        i.classGroupId = n;
        return;
      }
      if (typeof s == "function") {
        if ($x(s)) {
          Da(s(r), t, n, r);
          return;
        }
        t.validators.push({ validator: s, classGroupId: n });
        return;
      }
      Object.entries(s).forEach(([i, o]) => {
        Da(o, Pu(t, i), n, r);
      });
    });
  },
  Pu = (e, t) => {
    let n = e;
    return (
      t.split(Hc).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  $x = (e) => e.isThemeGetter,
  zx = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const s = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([o, a]) => [t + o, a])
                )
              : i
          );
          return [n, s];
        })
      : e,
  Wx = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const s = (i, o) => {
      n.set(i, o), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let o = n.get(i);
        if (o !== void 0) return o;
        if ((o = r.get(i)) !== void 0) return s(i, o), o;
      },
      set(i, o) {
        n.has(i) ? n.set(i, o) : s(i, o);
      },
    };
  },
  qh = "!",
  Hx = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      s = t[0],
      i = t.length,
      o = (a) => {
        const c = [];
        let l = 0,
          u = 0,
          d;
        for (let g = 0; g < a.length; g++) {
          let v = a[g];
          if (l === 0) {
            if (v === s && (r || a.slice(g, g + i) === t)) {
              c.push(a.slice(u, g)), (u = g + i);
              continue;
            }
            if (v === "/") {
              d = g;
              continue;
            }
          }
          v === "[" ? l++ : v === "]" && l--;
        }
        const f = c.length === 0 ? a : a.substring(u),
          p = f.startsWith(qh),
          m = p ? f.substring(1) : f,
          h = d && d > u ? d - u : void 0;
        return {
          modifiers: c,
          hasImportantModifier: p,
          baseClassName: m,
          maybePostfixModifierPosition: h,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: o }) : o;
  },
  qx = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  Zx = (e) => ({ cache: Wx(e.cacheSize), parseClassName: Hx(e), ...Vx(e) }),
  Gx = /\s+/,
  Kx = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: s,
      } = t,
      i = [],
      o = e.trim().split(Gx);
    let a = "";
    for (let c = o.length - 1; c >= 0; c -= 1) {
      const l = o[c],
        {
          modifiers: u,
          hasImportantModifier: d,
          baseClassName: f,
          maybePostfixModifierPosition: p,
        } = n(l);
      let m = !!p,
        h = r(m ? f.substring(0, p) : f);
      if (!h) {
        if (!m) {
          a = l + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((h = r(f)), !h)) {
          a = l + (a.length > 0 ? " " + a : a);
          continue;
        }
        m = !1;
      }
      const g = qx(u).join(":"),
        v = d ? g + qh : g,
        b = v + h;
      if (i.includes(b)) continue;
      i.push(b);
      const w = s(h, m);
      for (let T = 0; T < w.length; ++T) {
        const S = w[T];
        i.push(v + S);
      }
      a = l + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function Qx() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Zh(t)) && (r && (r += " "), (r += n));
  return r;
}
const Zh = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Zh(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function Xx(e, ...t) {
  let n,
    r,
    s,
    i = o;
  function o(c) {
    const l = t.reduce((u, d) => d(u), e());
    return (n = Zx(l)), (r = n.cache.get), (s = n.cache.set), (i = a), a(c);
  }
  function a(c) {
    const l = r(c);
    if (l) return l;
    const u = Kx(c, n);
    return s(c, u), u;
  }
  return function () {
    return i(Qx.apply(null, arguments));
  };
}
const Te = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Gh = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Yx = /^\d+\/\d+$/,
  Jx = new Set(["px", "full", "screen"]),
  eb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  tb =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  nb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  rb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  sb =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  on = (e) => Nr(e) || Jx.has(e) || Yx.test(e),
  vn = (e) => is(e, "length", fb),
  Nr = (e) => !!e && !Number.isNaN(Number(e)),
  ia = (e) => is(e, "number", Nr),
  ys = (e) => !!e && Number.isInteger(Number(e)),
  ib = (e) => e.endsWith("%") && Nr(e.slice(0, -1)),
  ce = (e) => Gh.test(e),
  xn = (e) => eb.test(e),
  ob = new Set(["length", "size", "percentage"]),
  ab = (e) => is(e, ob, Kh),
  cb = (e) => is(e, "position", Kh),
  lb = new Set(["image", "url"]),
  ub = (e) => is(e, lb, pb),
  db = (e) => is(e, "", hb),
  vs = () => !0,
  is = (e, t, n) => {
    const r = Gh.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  fb = (e) => tb.test(e) && !nb.test(e),
  Kh = () => !1,
  hb = (e) => rb.test(e),
  pb = (e) => sb.test(e),
  mb = () => {
    const e = Te("colors"),
      t = Te("spacing"),
      n = Te("blur"),
      r = Te("brightness"),
      s = Te("borderColor"),
      i = Te("borderRadius"),
      o = Te("borderSpacing"),
      a = Te("borderWidth"),
      c = Te("contrast"),
      l = Te("grayscale"),
      u = Te("hueRotate"),
      d = Te("invert"),
      f = Te("gap"),
      p = Te("gradientColorStops"),
      m = Te("gradientColorStopPositions"),
      h = Te("inset"),
      g = Te("margin"),
      v = Te("opacity"),
      b = Te("padding"),
      w = Te("saturate"),
      T = Te("scale"),
      S = Te("sepia"),
      E = Te("skew"),
      R = Te("space"),
      A = Te("translate"),
      N = () => ["auto", "contain", "none"],
      D = () => ["auto", "hidden", "clip", "visible", "scroll"],
      L = () => ["auto", ce, t],
      j = () => [ce, t],
      $ = () => ["", on, vn],
      W = () => ["auto", Nr, ce],
      ne = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      X = () => ["solid", "dashed", "dotted", "double", "none"],
      Z = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      q = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      se = () => ["", "0", ce],
      me = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      ge = () => [Nr, ce];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [vs],
        spacing: [on, vn],
        blur: ["none", "", xn, ce],
        brightness: ge(),
        borderColor: [e],
        borderRadius: ["none", "", "full", xn, ce],
        borderSpacing: j(),
        borderWidth: $(),
        contrast: ge(),
        grayscale: se(),
        hueRotate: ge(),
        invert: se(),
        gap: j(),
        gradientColorStops: [e],
        gradientColorStopPositions: [ib, vn],
        inset: L(),
        margin: L(),
        opacity: ge(),
        padding: j(),
        saturate: ge(),
        scale: ge(),
        sepia: se(),
        skew: ge(),
        space: j(),
        translate: j(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", ce] }],
        container: ["container"],
        columns: [{ columns: [xn] }],
        "break-after": [{ "break-after": me() }],
        "break-before": [{ "break-before": me() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...ne(), ce] }],
        overflow: [{ overflow: D() }],
        "overflow-x": [{ "overflow-x": D() }],
        "overflow-y": [{ "overflow-y": D() }],
        overscroll: [{ overscroll: N() }],
        "overscroll-x": [{ "overscroll-x": N() }],
        "overscroll-y": [{ "overscroll-y": N() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [h] }],
        "inset-x": [{ "inset-x": [h] }],
        "inset-y": [{ "inset-y": [h] }],
        start: [{ start: [h] }],
        end: [{ end: [h] }],
        top: [{ top: [h] }],
        right: [{ right: [h] }],
        bottom: [{ bottom: [h] }],
        left: [{ left: [h] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", ys, ce] }],
        basis: [{ basis: L() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", ce] }],
        grow: [{ grow: se() }],
        shrink: [{ shrink: se() }],
        order: [{ order: ["first", "last", "none", ys, ce] }],
        "grid-cols": [{ "grid-cols": [vs] }],
        "col-start-end": [{ col: ["auto", { span: ["full", ys, ce] }, ce] }],
        "col-start": [{ "col-start": W() }],
        "col-end": [{ "col-end": W() }],
        "grid-rows": [{ "grid-rows": [vs] }],
        "row-start-end": [{ row: ["auto", { span: [ys, ce] }, ce] }],
        "row-start": [{ "row-start": W() }],
        "row-end": [{ "row-end": W() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ce] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ce] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...q()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...q(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...q(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [b] }],
        px: [{ px: [b] }],
        py: [{ py: [b] }],
        ps: [{ ps: [b] }],
        pe: [{ pe: [b] }],
        pt: [{ pt: [b] }],
        pr: [{ pr: [b] }],
        pb: [{ pb: [b] }],
        pl: [{ pl: [b] }],
        m: [{ m: [g] }],
        mx: [{ mx: [g] }],
        my: [{ my: [g] }],
        ms: [{ ms: [g] }],
        me: [{ me: [g] }],
        mt: [{ mt: [g] }],
        mr: [{ mr: [g] }],
        mb: [{ mb: [g] }],
        ml: [{ ml: [g] }],
        "space-x": [{ "space-x": [R] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [R] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ce, t] }],
        "min-w": [{ "min-w": [ce, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              ce,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [xn] },
              xn,
            ],
          },
        ],
        h: [{ h: [ce, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [ce, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [ce, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [ce, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", xn, vn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              ia,
            ],
          },
        ],
        "font-family": [{ font: [vs] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              ce,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Nr, ia] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              on,
              ce,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", ce] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", ce] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [v] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [v] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...X(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", on, vn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", on, ce] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: j() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ce,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ce] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [v] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...ne(), cb] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", ab] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              ub,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [m] }],
        "gradient-via-pos": [{ via: [m] }],
        "gradient-to-pos": [{ to: [m] }],
        "gradient-from": [{ from: [p] }],
        "gradient-via": [{ via: [p] }],
        "gradient-to": [{ to: [p] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [v] }],
        "border-style": [{ border: [...X(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [v] }],
        "divide-style": [{ divide: X() }],
        "border-color": [{ border: [s] }],
        "border-color-x": [{ "border-x": [s] }],
        "border-color-y": [{ "border-y": [s] }],
        "border-color-s": [{ "border-s": [s] }],
        "border-color-e": [{ "border-e": [s] }],
        "border-color-t": [{ "border-t": [s] }],
        "border-color-r": [{ "border-r": [s] }],
        "border-color-b": [{ "border-b": [s] }],
        "border-color-l": [{ "border-l": [s] }],
        "divide-color": [{ divide: [s] }],
        "outline-style": [{ outline: ["", ...X()] }],
        "outline-offset": [{ "outline-offset": [on, ce] }],
        "outline-w": [{ outline: [on, vn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: $() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [v] }],
        "ring-offset-w": [{ "ring-offset": [on, vn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", xn, db] }],
        "shadow-color": [{ shadow: [vs] }],
        opacity: [{ opacity: [v] }],
        "mix-blend": [{ "mix-blend": [...Z(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": Z() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [c] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", xn, ce] }],
        grayscale: [{ grayscale: [l] }],
        "hue-rotate": [{ "hue-rotate": [u] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [w] }],
        sepia: [{ sepia: [S] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [c] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [l] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [v] }],
        "backdrop-saturate": [{ "backdrop-saturate": [w] }],
        "backdrop-sepia": [{ "backdrop-sepia": [S] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [o] }],
        "border-spacing-x": [{ "border-spacing-x": [o] }],
        "border-spacing-y": [{ "border-spacing-y": [o] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              ce,
            ],
          },
        ],
        duration: [{ duration: ge() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", ce] }],
        delay: [{ delay: ge() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", ce] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [T] }],
        "scale-x": [{ "scale-x": [T] }],
        "scale-y": [{ "scale-y": [T] }],
        rotate: [{ rotate: [ys, ce] }],
        "translate-x": [{ "translate-x": [A] }],
        "translate-y": [{ "translate-y": [A] }],
        "skew-x": [{ "skew-x": [E] }],
        "skew-y": [{ "skew-y": [E] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              ce,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ce,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": j() }],
        "scroll-mx": [{ "scroll-mx": j() }],
        "scroll-my": [{ "scroll-my": j() }],
        "scroll-ms": [{ "scroll-ms": j() }],
        "scroll-me": [{ "scroll-me": j() }],
        "scroll-mt": [{ "scroll-mt": j() }],
        "scroll-mr": [{ "scroll-mr": j() }],
        "scroll-mb": [{ "scroll-mb": j() }],
        "scroll-ml": [{ "scroll-ml": j() }],
        "scroll-p": [{ "scroll-p": j() }],
        "scroll-px": [{ "scroll-px": j() }],
        "scroll-py": [{ "scroll-py": j() }],
        "scroll-ps": [{ "scroll-ps": j() }],
        "scroll-pe": [{ "scroll-pe": j() }],
        "scroll-pt": [{ "scroll-pt": j() }],
        "scroll-pr": [{ "scroll-pr": j() }],
        "scroll-pb": [{ "scroll-pb": j() }],
        "scroll-pl": [{ "scroll-pl": j() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", ce] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [on, vn, ia] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  gb = Xx(mb);
function re(...e) {
  return gb($h(e));
}
const yb = xx,
  vb = bx,
  xb = Bh,
  bb = wx,
  Qh = x.forwardRef(({ className: e, ...t }, n) =>
    y.jsx(Fh, {
      className: re(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
      ref: n,
    })
  );
Qh.displayName = Fh.displayName;
const wb = Wc(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          right:
            "inset-y-0 right-0 h-full w-full data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
      },
      defaultVariants: { side: "right" },
    }
  ),
  Xh = x.forwardRef(
    ({ side: e = "right", className: t, children: n, ...r }, s) =>
      y.jsxs(bb, {
        children: [
          y.jsx(Qh, {}),
          y.jsxs(Lh, {
            ref: s,
            className: re(wb({ side: e }), t),
            ...r,
            children: [
              y.jsxs(Bh, {
                className:
                  "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none  disabled:pointer-events-none data-[state=open]:bg-secondary",
                children: [
                  y.jsx(Ix, { className: "size-8" }),
                  y.jsx("span", { className: "sr-only", children: "Close" }),
                ],
              }),
              n,
            ],
          }),
        ],
      })
  );
Xh.displayName = Lh.displayName;
const Yh = ({ className: e, ...t }) =>
  y.jsx("div", {
    className: re("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t,
  });
Yh.displayName = "SheetHeader";
const Sb = x.forwardRef(({ className: e, ...t }, n) =>
  y.jsx(Ih, {
    ref: n,
    className: re("text-lg font-semibold text-foreground", e),
    ...t,
  })
);
Sb.displayName = Ih.displayName;
const _b = x.forwardRef(({ className: e, ...t }, n) =>
  y.jsx(Vh, { ref: n, className: re("text-sm text-muted-foreground", e), ...t })
);
_b.displayName = Vh.displayName;
const Tb = Wc(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-[18px] leading-[140%] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-on_primary shadow hover:bg-primary/90",
          teritary: "bg-teritary hover:bg-teritary/90 text-on_surface",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline: "border border-outline text-on_surface",
          secondary:
            "bg-secondary_container hover:bg-secondary_container/80 text-on_secondary_container",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-white h-8",
        },
        size: {
          default: "h-12 px-5 py-2 rounded-[2px]",
          sm: "h-10 text-base px-4 rounded-[2px]",
          lg: "lg:h-[88px] h-12 rounded-[2px] px-8 ",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  ut = x.forwardRef(
    (
      {
        className: e,
        variant: t,
        size: n,
        loading: r,
        children: s,
        asChild: i = !1,
        ...o
      },
      a
    ) => {
      const c = i ? rs : "button";
      return y.jsx(c, {
        className: re(Tb({ variant: t, size: n, className: e })),
        ref: a,
        ...o,
        children: r ? y.jsx(Wh, { className: "w-5 h-5 animate-spin" }) : s,
      });
    }
  );
ut.displayName = "Button";
const Ma = [
    {
      data: [
        {
          title: "Путеводитель",
          link: "https://turkmentextile.turkmenexpo.com/app/storage/app/media/travel_guide/Travel_guide_ru.pdf",
          blank: !0,
        },
        {
          title: "Новости",
          dropDown: !0,
          dropDownContent: [
            { text: "Новости", link: "" },
            { text: "Подписаться на новости" },
          ],
        },
        { title: "Контакты", link: "/contacts" },
        {
          title: "О выставке",
          dropDown: !0,
          dropDownContent: [
            { text: "О выставке", link: "/about" },
            { text: "Медиа", link: "" },
          ],
        },
        {
          title: "Посетителям",
          dropDown: !0,
          dropDownContent: [
            { text: "Почему стоит посетить?", link: "", blank: !0 },
            { text: "Список участников", link: "", blank: !0 },
            {
              text: "Путеводитель",
              link: "https://turkmentextile.turkmenexpo.com/app/storage/app/media/travel_guide/Travel_guide_ru.pdf",
              blank: !0,
            },
          ],
        },
        {
          title: "Участникам",
          dropDown: !0,
          dropDownContent: [
            { text: "Забронировать стенд", link: "/stend-form" },
            { text: "Почему стоить участвовать?", link: "" },
            { text: "Тематические разделы ", link: "" },
          ],
        },
      ],
    },
    {
      data: [
        {
          title: "Travel Guide",
          link: "https://turkmentextile.turkmenexpo.com/app/storage/app/media/travel_guide/Travel_guide_eng.pdf",
          blank: !0,
        },
        { title: "Contact us", link: "/contacts" },
        {
          title: "News",
          dropDown: !0,
          dropDownContent: [
            { text: "News", link: "" },
            { text: "Subscribe to the news" },
          ],
        },
        {
          title: "About exhibition",
          dropDown: !0,
          dropDownContent: [
            { text: "About exhibition", link: "/about" },
            { text: "Media", link: "" },
          ],
        },
        {
          title: "Visitors",
          dropDown: !0,
          dropDownContent: [
            { text: "Why visit?", link: "" },
            { text: "List of Participants", link: "", blank: !0 },
            { text: "Programme", link: "", blank: !0 },
            {
              text: "Travel Guide",
              link: "https://turkmentextile.turkmenexpo.com/app/storage/app/media/travel_guide/Travel_guide_eng.pdf",
              blank: !0,
            },
          ],
        },
        {
          title: "Exhibitors",
          dropDown: !0,
          dropDownContent: [
            { text: "Book a stand", link: "/stend-form" },
            { text: "Why exhibit?", link: "" },
            { text: "Thematic areas of the exhibition", link: "" },
          ],
        },
      ],
    },
  ],
  Ru = (e) => {
    let t;
    const n = new Set(),
      r = (l, u) => {
        const d = typeof l == "function" ? l(t) : l;
        if (!Object.is(d, t)) {
          const f = t;
          (t =
            u ?? (typeof d != "object" || d === null)
              ? d
              : Object.assign({}, t, d)),
            n.forEach((p) => p(t, f));
        }
      },
      s = () => t,
      a = {
        setState: r,
        getState: s,
        getInitialState: () => c,
        subscribe: (l) => (n.add(l), () => n.delete(l)),
      },
      c = (t = e(r, s, a));
    return a;
  },
  Cb = (e) => (e ? Ru(e) : Ru),
  Ab = (e) => e;
function Eb(e, t = Ab) {
  const n = ve.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return ve.useDebugValue(n), n;
}
const Pb = (e) => {
    const t = Cb(e),
      n = (r) => Eb(t, r);
    return Object.assign(n, t), n;
  },
  Rb = (e) => Pb;
function kb(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var i;
      const o = (c) => (c === null ? null : JSON.parse(c, void 0)),
        a = (i = n.getItem(s)) != null ? i : null;
      return a instanceof Promise ? a.then(o) : o(a);
    },
    setItem: (s, i) => n.setItem(s, JSON.stringify(i, void 0)),
    removeItem: (s) => n.removeItem(s),
  };
}
const Fa = (e) => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return Fa(r)(n);
            },
            catch(r) {
              return this;
            },
          };
    } catch (n) {
      return {
        then(r) {
          return this;
        },
        catch(r) {
          return Fa(r)(n);
        },
      };
    }
  },
  Ob = (e, t) => (n, r, s) => {
    let i = {
        storage: kb(() => localStorage),
        partialize: (h) => h,
        version: 0,
        merge: (h, g) => ({ ...g, ...h }),
        ...t,
      },
      o = !1;
    const a = new Set(),
      c = new Set();
    let l = i.storage;
    if (!l)
      return e(
        (...h) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
          ),
            n(...h);
        },
        r,
        s
      );
    const u = () => {
        const h = i.partialize({ ...r() });
        return l.setItem(i.name, { state: h, version: i.version });
      },
      d = s.setState;
    s.setState = (h, g) => {
      d(h, g), u();
    };
    const f = e(
      (...h) => {
        n(...h), u();
      },
      r,
      s
    );
    s.getInitialState = () => f;
    let p;
    const m = () => {
      var h, g;
      if (!l) return;
      (o = !1),
        a.forEach((b) => {
          var w;
          return b((w = r()) != null ? w : f);
        });
      const v =
        ((g = i.onRehydrateStorage) == null
          ? void 0
          : g.call(i, (h = r()) != null ? h : f)) || void 0;
      return Fa(l.getItem.bind(l))(i.name)
        .then((b) => {
          if (b)
            if (typeof b.version == "number" && b.version !== i.version) {
              if (i.migrate) {
                const w = i.migrate(b.state, b.version);
                return w instanceof Promise ? w.then((T) => [!0, T]) : [!0, w];
              }
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided"
              );
            } else return [!1, b.state];
          return [!1, void 0];
        })
        .then((b) => {
          var w;
          const [T, S] = b;
          if (((p = i.merge(S, (w = r()) != null ? w : f)), n(p, !0), T))
            return u();
        })
        .then(() => {
          v == null || v(p, void 0),
            (p = r()),
            (o = !0),
            c.forEach((b) => b(p));
        })
        .catch((b) => {
          v == null || v(void 0, b);
        });
    };
    return (
      (s.persist = {
        setOptions: (h) => {
          (i = { ...i, ...h }), h.storage && (l = h.storage);
        },
        clearStorage: () => {
          l == null || l.removeItem(i.name);
        },
        getOptions: () => i,
        rehydrate: () => m(),
        hasHydrated: () => o,
        onHydrate: (h) => (
          a.add(h),
          () => {
            a.delete(h);
          }
        ),
        onFinishHydration: (h) => (
          c.add(h),
          () => {
            c.delete(h);
          }
        ),
      }),
      i.skipHydration || m(),
      p || f
    );
  },
  Nb = Ob;
var pt = ((e) => ((e.EN = "en"), (e.RU = "ru"), e))(pt || {});
const Le = Rb()(
    Nb((e) => ({ lang: "en", setLang: (t) => e({ lang: t }) }), {
      name: "lang-storage",
    })
  ),
  We = (e) => (e === pt.RU ? 0 : 1),
  jb = () => {
    const [e, t] = x.useState(!1),
      n = Le((r) => r.lang);
    return y.jsxs(yb, {
      onOpenChange: () => t(!e),
      open: e,
      children: [
        y.jsx(vb, {
          children: y.jsxs("div", {
            className:
              "flex flex-col gap-1 lg:hidden items-center justify-center size-10",
            children: [
              y.jsx("div", {
                className: "w-[18px] h-0.5 bg-white rounded-[2px]",
              }),
              y.jsx("div", {
                className: "w-[18px] h-0.5 bg-white rounded-[2px]",
              }),
              y.jsx("div", {
                className: "w-[18px] h-0.5 bg-white rounded-[2px]",
              }),
            ],
          }),
        }),
        y.jsxs(Xh, {
          className: "overflow-y-auto",
          children: [
            y.jsx(xb, {}),
            y.jsxs(Yh, {
              className: "mt-16 flex flex-col gap-2",
              children: [
                y.jsx(Me, {
                  to: "",
                  children: y.jsx(ut, {
                    variant: "secondary",
                    size: "sm",
                    className:
                      "bg-teritary w-full text-on_teritary hover:bg-teritary/90",
                    children: "Официальная поддержка",
                  }),
                }),
                y.jsx(Me, {
                  to: "/B2B-B2G",
                  onClick: () => t(!1),
                  children: y.jsx(ut, {
                    className: "text-base w-full",
                    size: "sm",
                    children: "B2B | B2G встречи",
                  }),
                }),
              ],
            }),
            y.jsx("hr", { className: "border-slate-500/20 my-8" }),
            y.jsx("div", {
              className: "flex flex-col gap-6",
              children: Ma[We(n)].data.map((r) =>
                y.jsx(
                  Me,
                  {
                    onClick: () => t(!1),
                    className: "h-10 text-on_surface",
                    to: r.link || "",
                    children: r.title,
                  },
                  r.title
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  Jh = ({ className: e }) =>
    y.jsx("div", {
      className: re("", e),
      children: y.jsx("img", {
        src: "/logo.svg",
        alt: "logo",
        className: "md:size-auto h-10",
      }),
    }),
  ep = ({ className: e, image: t, title: n, iconClassName: r }) =>
    y.jsxs("article", {
      className: re(
        "bg-surface_container relative hover:bg-teritary_surface_container transition-all md:px-6 px-2 md:h-[224px] h-[124px]",
        e
      ),
      children: [
        y.jsx("div", {
          className: "bg-primary size-full -z-[10] absolute top-2.5 left-2.5",
        }),
        y.jsx("div", {
          className: re("md:size-[84px] size-12 bg-teritary p-3", r),
          children: y.jsx("img", { src: t.path, alt: "theme icon" }),
        }),
        y.jsx("h3", {
          className: "md:mt-6 mt-2 md:text-xl text-sm",
          children: n,
        }),
      ],
    }),
  Db = ({ className: e, title: t, text: n }) =>
    y.jsxs("article", {
      className: re(
        "px-6 py-4 relative bg-surface_container h-[160px] w-full overflow-hidden",
        e
      ),
      children: [
        y.jsx("img", {
          src: "/about-card-bg.svg",
          className: "absolute top-2 right-0",
        }),
        y.jsx("h2", {
          className: "text-primary text-[32px] semibold leading-[130%] mb-4",
          children: n,
        }),
        y.jsx("h4", {
          className: "text-on_surface normal text-base",
          children: t,
        }),
      ],
    }),
  Mb = ({ className: e, title: t, text: n, img: r, link: s, btnText: i }) =>
    y.jsxs("article", {
      className: re(
        "md:px-8 md:py-6 p-4 relative overflow-hidden h-[296px] md:w-full w-[300px] text-on_primary",
        e
      ),
      children: [
        y.jsx("div", {
          className:
            "absolute size-full z-10  top-0 left-0 bg-gradient-to-r from-25% from-primary to-primary/20 ",
        }),
        y.jsx("img", {
          src: r,
          className: "absolute size-full top-0 right-0 object-cover",
        }),
        y.jsxs("div", {
          className: "relative z-20 h-full",
          children: [
            y.jsxs("div", {
              className: "",
              children: [
                y.jsx("h4", {
                  className: "md:text-2xl text-lg mb-4 max-w-[444px] z-20 h-16",
                  children: t,
                }),
                y.jsx("p", {
                  className: "md:text-base text-sm normal max-w-[360px] z-20",
                  children: n,
                }),
              ],
            }),
            y.jsx(Me, {
              className: "absolute bottom-0 left-0",
              target: "_blank",
              to: s,
              children: y.jsxs(ut, {
                className: "text-sm px-0 h-fit py-0 z-20",
                variant: "link",
                children: [i, " ", y.jsx(Ax, {})],
              }),
            }),
          ],
        }),
      ],
    }),
  tp = ({ className: e, title: t, text: n, bottomClassName: r }) =>
    y.jsxs("div", {
      className: re("rounded-t-[4px] overflow-hidden", e),
      children: [
        y.jsx("div", {
          className: "bg-teritary text-white flex items-center h-11 px-4",
          children: t,
        }),
        y.jsx("div", {
          className: re(
            "h-14 bg-surface_container semibold flex items-center text-lg px-4",
            r
          ),
          children: n,
        }),
      ],
    }),
  Fb = ({ className: e, text: t, title: n, image: r }) =>
    y.jsxs("div", {
      className: re("flex items-center gap-4", e),
      children: [
        y.jsx("div", {
          className: "bg-secondary_container size-16 rounded-[2px] p-3",
          children: y.jsx("img", {
            src: r.path,
            alt: "contact icon",
            className: "size-full",
          }),
        }),
        y.jsxs("div", {
          className: "flex flex-col gap-2",
          children: [
            y.jsx("h5", { className: "text-sm text-[#454545]", children: n }),
            y.jsx("h4", { className: "text-[#171717] semibold", children: t }),
          ],
        }),
      ],
    }),
  qc = x.createContext({});
function Zc(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Ro = x.createContext(null),
  Gc = x.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class Lb extends x.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent,
        s = (r instanceof HTMLElement && r.offsetWidth) || 0,
        i = this.props.sizeRef.current;
      (i.height = n.offsetHeight || 0),
        (i.width = n.offsetWidth || 0),
        (i.top = n.offsetTop),
        (i.left = n.offsetLeft),
        (i.right = s - i.width - i.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Ib({ children: e, isPresent: t, anchorX: n }) {
  const r = x.useId(),
    s = x.useRef(null),
    i = x.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: o } = x.useContext(Gc);
  return (
    x.useInsertionEffect(() => {
      const { width: a, height: c, top: l, left: u, right: d } = i.current;
      if (t || !s.current || !a || !c) return;
      const f = n === "left" ? `left: ${u}` : `right: ${d}`;
      s.current.dataset.motionPopId = r;
      const p = document.createElement("style");
      return (
        o && (p.nonce = o),
        document.head.appendChild(p),
        p.sheet &&
          p.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${c}px !important;
            ${f}px !important;
            top: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(p);
        }
      );
    }, [t]),
    y.jsx(Lb, {
      isPresent: t,
      childRef: s,
      sizeRef: i,
      children: x.cloneElement(e, { ref: s }),
    })
  );
}
const Vb = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: s,
  presenceAffectsLayout: i,
  mode: o,
  anchorX: a,
}) => {
  const c = Zc(Bb),
    l = x.useId(),
    u = x.useCallback(
      (f) => {
        c.set(f, !0);
        for (const p of c.values()) if (!p) return;
        r && r();
      },
      [c, r]
    ),
    d = x.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: s,
        onExitComplete: u,
        register: (f) => (c.set(f, !1), () => c.delete(f)),
      }),
      i ? [Math.random(), u] : [n, u]
    );
  return (
    x.useMemo(() => {
      c.forEach((f, p) => c.set(p, !1));
    }, [n]),
    x.useEffect(() => {
      !n && !c.size && r && r();
    }, [n]),
    o === "popLayout" &&
      (e = y.jsx(Ib, { isPresent: n, anchorX: a, children: e })),
    y.jsx(Ro.Provider, { value: d, children: e })
  );
};
function Bb() {
  return new Map();
}
function np(e = !0) {
  const t = x.useContext(Ro);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: s } = t,
    i = x.useId();
  x.useEffect(() => {
    e && s(i);
  }, [e]);
  const o = x.useCallback(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Fi = (e) => e.key || "";
function ku(e) {
  const t = [];
  return (
    x.Children.forEach(e, (n) => {
      x.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Kc = typeof window < "u",
  rp = Kc ? x.useLayoutEffect : x.useEffect,
  Mk = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: s = !0,
    mode: i = "sync",
    propagate: o = !1,
    anchorX: a = "left",
  }) => {
    const [c, l] = np(o),
      u = x.useMemo(() => ku(e), [e]),
      d = o && !c ? [] : u.map(Fi),
      f = x.useRef(!0),
      p = x.useRef(u),
      m = Zc(() => new Map()),
      [h, g] = x.useState(u),
      [v, b] = x.useState(u);
    rp(() => {
      (f.current = !1), (p.current = u);
      for (let S = 0; S < v.length; S++) {
        const E = Fi(v[S]);
        d.includes(E) ? m.delete(E) : m.get(E) !== !0 && m.set(E, !1);
      }
    }, [v, d.length, d.join("-")]);
    const w = [];
    if (u !== h) {
      let S = [...u];
      for (let E = 0; E < v.length; E++) {
        const R = v[E],
          A = Fi(R);
        d.includes(A) || (S.splice(E, 0, R), w.push(R));
      }
      i === "wait" && w.length && (S = w), b(ku(S)), g(u);
      return;
    }
    const { forceRender: T } = x.useContext(qc);
    return y.jsx(y.Fragment, {
      children: v.map((S) => {
        const E = Fi(S),
          R = o && !c ? !1 : u === v || d.includes(E),
          A = () => {
            if (m.has(E)) m.set(E, !0);
            else return;
            let N = !0;
            m.forEach((D) => {
              D || (N = !1);
            }),
              N &&
                (T == null || T(),
                b(p.current),
                o && (l == null || l()),
                r && r());
          };
        return y.jsx(
          Vb,
          {
            isPresent: R,
            initial: !f.current || n ? void 0 : !1,
            custom: R ? void 0 : t,
            presenceAffectsLayout: s,
            mode: i,
            onExitComplete: R ? void 0 : A,
            anchorX: a,
            children: S,
          },
          E
        );
      }),
    });
  },
  gt = (e) => e;
let La = gt;
const Ub = { skipAnimations: !1, useManualTiming: !1 };
function $b(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    s = !1;
  const i = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(l) {
    i.has(l) && (c.schedule(l), e()), l(o);
  }
  const c = {
    schedule: (l, u = !1, d = !1) => {
      const p = d && r ? t : n;
      return u && i.add(l), p.has(l) || p.add(l), l;
    },
    cancel: (l) => {
      n.delete(l), i.delete(l);
    },
    process: (l) => {
      if (((o = l), r)) {
        s = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        s && ((s = !1), c.process(l));
    },
  };
  return c;
}
const Li = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  zb = 40;
function sp(e, t) {
  let n = !1,
    r = !0;
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    o = Li.reduce((v, b) => ((v[b] = $b(i)), v), {}),
    {
      read: a,
      resolveKeyframes: c,
      update: l,
      preRender: u,
      render: d,
      postRender: f,
    } = o,
    p = () => {
      const v = performance.now();
      (n = !1),
        (s.delta = r ? 1e3 / 60 : Math.max(Math.min(v - s.timestamp, zb), 1)),
        (s.timestamp = v),
        (s.isProcessing = !0),
        a.process(s),
        c.process(s),
        l.process(s),
        u.process(s),
        d.process(s),
        f.process(s),
        (s.isProcessing = !1),
        n && t && ((r = !1), e(p));
    },
    m = () => {
      (n = !0), (r = !0), s.isProcessing || e(p);
    };
  return {
    schedule: Li.reduce((v, b) => {
      const w = o[b];
      return (v[b] = (T, S = !1, E = !1) => (n || m(), w.schedule(T, S, E))), v;
    }, {}),
    cancel: (v) => {
      for (let b = 0; b < Li.length; b++) o[Li[b]].cancel(v);
    },
    state: s,
    steps: o,
  };
}
const {
    schedule: Ce,
    cancel: Nn,
    state: $e,
    steps: oa,
  } = sp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : gt, !0),
  ip = x.createContext({ strict: !1 }),
  Ou = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Kr = {};
for (const e in Ou) Kr[e] = { isEnabled: (t) => Ou[e].some((n) => !!t[n]) };
function Wb(e) {
  for (const t in e) Kr[t] = { ...Kr[t], ...e[t] };
}
const Hb = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function no(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    Hb.has(e)
  );
}
let op = (e) => !no(e);
function qb(e) {
  e && (op = (t) => (t.startsWith("on") ? !no(t) : e(t)));
}
try {
  qb(require("@emotion/is-prop-valid").default);
} catch {}
function Zb(e, t, n) {
  const r = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      ((op(s) ||
        (n === !0 && no(s)) ||
        (!t && !no(s)) ||
        (e.draggable && s.startsWith("onDrag"))) &&
        (r[s] = e[s]));
  return r;
}
function Gb(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, s) =>
      s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s)),
  });
}
const ko = x.createContext({});
function Ls(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Oo(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Qc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Xc = ["initial", ...Qc];
function No(e) {
  return Oo(e.animate) || Xc.some((t) => Ls(e[t]));
}
function ap(e) {
  return !!(No(e) || e.variants);
}
function Kb(e, t) {
  if (No(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ls(n) ? n : void 0,
      animate: Ls(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Qb(e) {
  const { initial: t, animate: n } = Kb(e, x.useContext(ko));
  return x.useMemo(() => ({ initial: t, animate: n }), [Nu(t), Nu(n)]);
}
function Nu(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Xb = Symbol.for("motionComponentSymbol");
function Cr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Yb(e, t, n) {
  return x.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Cr(n) && (n.current = r));
    },
    [t]
  );
}
const Yc = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Jb = "framerAppearId",
  cp = "data-" + Yc(Jb),
  { schedule: Jc, cancel: Fk } = sp(queueMicrotask, !1),
  lp = x.createContext({});
function ew(e, t, n, r, s) {
  var i, o;
  const { visualElement: a } = x.useContext(ko),
    c = x.useContext(ip),
    l = x.useContext(Ro),
    u = x.useContext(Gc).reducedMotion,
    d = x.useRef(null);
  (r = r || c.renderer),
    !d.current &&
      r &&
      (d.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: u,
      }));
  const f = d.current,
    p = x.useContext(lp);
  f &&
    !f.projection &&
    s &&
    (f.type === "html" || f.type === "svg") &&
    tw(d.current, n, s, p);
  const m = x.useRef(!1);
  x.useInsertionEffect(() => {
    f && m.current && f.update(n, l);
  });
  const h = n[cp],
    g = x.useRef(
      !!h &&
        !(
          !((i = window.MotionHandoffIsComplete) === null || i === void 0) &&
          i.call(window, h)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, h))
    );
  return (
    rp(() => {
      f &&
        ((m.current = !0),
        (window.MotionIsMounted = !0),
        f.updateFeatures(),
        Jc.render(f.render),
        g.current && f.animationState && f.animationState.animateChanges());
    }),
    x.useEffect(() => {
      f &&
        (!g.current && f.animationState && f.animationState.animateChanges(),
        g.current &&
          (queueMicrotask(() => {
            var v;
            (v = window.MotionHandoffMarkAsComplete) === null ||
              v === void 0 ||
              v.call(window, h);
          }),
          (g.current = !1)));
    }),
    f
  );
}
function tw(e, t, n, r) {
  const {
    layoutId: s,
    layout: i,
    drag: o,
    dragConstraints: a,
    layoutScroll: c,
    layoutRoot: l,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : up(e.parent)
  )),
    e.projection.setOptions({
      layoutId: s,
      layout: i,
      alwaysMeasureLayout: !!o || (a && Cr(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      layoutScroll: c,
      layoutRoot: l,
    });
}
function up(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : up(e.parent);
}
function nw({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: s,
}) {
  var i, o;
  e && Wb(e);
  function a(l, u) {
    let d;
    const f = { ...x.useContext(Gc), ...l, layoutId: rw(l) },
      { isStatic: p } = f,
      m = Qb(l),
      h = r(l, p);
    if (!p && Kc) {
      sw();
      const g = iw(f);
      (d = g.MeasureLayout),
        (m.visualElement = ew(s, h, f, t, g.ProjectionNode));
    }
    return y.jsxs(ko.Provider, {
      value: m,
      children: [
        d && m.visualElement
          ? y.jsx(d, { visualElement: m.visualElement, ...f })
          : null,
        n(s, l, Yb(h, m.visualElement, u), h, p, m.visualElement),
      ],
    });
  }
  a.displayName = `motion.${
    typeof s == "string"
      ? s
      : `create(${
          (o = (i = s.displayName) !== null && i !== void 0 ? i : s.name) !==
            null && o !== void 0
            ? o
            : ""
        })`
  }`;
  const c = x.forwardRef(a);
  return (c[Xb] = s), c;
}
function rw({ layoutId: e }) {
  const t = x.useContext(qc).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function sw(e, t) {
  x.useContext(ip).strict;
}
function iw(e) {
  const { drag: t, layout: n } = Kr;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const ow = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function el(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(ow.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function ju(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function tl(e, t, n, r) {
  if (typeof t == "function") {
    const [s, i] = ju(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [s, i] = ju(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  return t;
}
const Ia = (e) => Array.isArray(e),
  aw = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  cw = (e) => (Ia(e) ? e[e.length - 1] || 0 : e),
  Qe = (e) => !!(e && e.getVelocity);
function qi(e) {
  const t = Qe(e) ? e.get() : e;
  return aw(t) ? t.toValue() : t;
}
function lw(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  s,
  i
) {
  const o = { latestValues: uw(r, s, i, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (a) => n({ props: r, current: a, ...o })),
      (o.onUpdate = (a) => n(a))),
    o
  );
}
const dp = (e) => (t, n) => {
  const r = x.useContext(ko),
    s = x.useContext(Ro),
    i = () => lw(e, t, r, s);
  return n ? i() : Zc(i);
};
function uw(e, t, n, r) {
  const s = {},
    i = r(e, {});
  for (const f in i) s[f] = qi(i[f]);
  let { initial: o, animate: a } = e;
  const c = No(e),
    l = ap(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || o === !1;
  const d = u ? a : o;
  if (d && typeof d != "boolean" && !Oo(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let p = 0; p < f.length; p++) {
      const m = tl(e, f[p]);
      if (m) {
        const { transitionEnd: h, transition: g, ...v } = m;
        for (const b in v) {
          let w = v[b];
          if (Array.isArray(w)) {
            const T = u ? w.length - 1 : 0;
            w = w[T];
          }
          w !== null && (s[b] = w);
        }
        for (const b in h) s[b] = h[b];
      }
    }
  }
  return s;
}
const os = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  xr = new Set(os),
  fp = (e) => (t) => typeof t == "string" && t.startsWith(e),
  nl = fp("--"),
  dw = fp("var(--"),
  rl = (e) => (dw(e) ? fw.test(e.split("/*")[0].trim()) : !1),
  fw =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  hp = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  pn = (e, t, n) => (n > t ? t : n < e ? e : n),
  as = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Is = { ...as, transform: (e) => pn(0, 1, e) },
  Ii = { ...as, default: 1 },
  pi = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  wn = pi("deg"),
  Xt = pi("%"),
  Y = pi("px"),
  hw = pi("vh"),
  pw = pi("vw"),
  Du = {
    ...Xt,
    parse: (e) => Xt.parse(e) / 100,
    transform: (e) => Xt.transform(e * 100),
  },
  mw = {
    borderWidth: Y,
    borderTopWidth: Y,
    borderRightWidth: Y,
    borderBottomWidth: Y,
    borderLeftWidth: Y,
    borderRadius: Y,
    radius: Y,
    borderTopLeftRadius: Y,
    borderTopRightRadius: Y,
    borderBottomRightRadius: Y,
    borderBottomLeftRadius: Y,
    width: Y,
    maxWidth: Y,
    height: Y,
    maxHeight: Y,
    top: Y,
    right: Y,
    bottom: Y,
    left: Y,
    padding: Y,
    paddingTop: Y,
    paddingRight: Y,
    paddingBottom: Y,
    paddingLeft: Y,
    margin: Y,
    marginTop: Y,
    marginRight: Y,
    marginBottom: Y,
    marginLeft: Y,
    backgroundPositionX: Y,
    backgroundPositionY: Y,
  },
  gw = {
    rotate: wn,
    rotateX: wn,
    rotateY: wn,
    rotateZ: wn,
    scale: Ii,
    scaleX: Ii,
    scaleY: Ii,
    scaleZ: Ii,
    skew: wn,
    skewX: wn,
    skewY: wn,
    distance: Y,
    translateX: Y,
    translateY: Y,
    translateZ: Y,
    x: Y,
    y: Y,
    z: Y,
    perspective: Y,
    transformPerspective: Y,
    opacity: Is,
    originX: Du,
    originY: Du,
    originZ: Y,
  },
  Mu = { ...as, transform: Math.round },
  sl = {
    ...mw,
    ...gw,
    zIndex: Mu,
    size: Y,
    fillOpacity: Is,
    strokeOpacity: Is,
    numOctaves: Mu,
  },
  yw = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  vw = os.length;
function xw(e, t, n) {
  let r = "",
    s = !0;
  for (let i = 0; i < vw; i++) {
    const o = os[i],
      a = e[o];
    if (a === void 0) continue;
    let c = !0;
    if (
      (typeof a == "number"
        ? (c = a === (o.startsWith("scale") ? 1 : 0))
        : (c = parseFloat(a) === 0),
      !c || n)
    ) {
      const l = hp(a, sl[o]);
      if (!c) {
        s = !1;
        const u = yw[o] || o;
        r += `${u}(${l}) `;
      }
      n && (t[o] = l);
    }
  }
  return (r = r.trim()), n ? (r = n(t, s ? "" : r)) : s && (r = "none"), r;
}
function il(e, t, n) {
  const { style: r, vars: s, transformOrigin: i } = e;
  let o = !1,
    a = !1;
  for (const c in t) {
    const l = t[c];
    if (xr.has(c)) {
      o = !0;
      continue;
    } else if (nl(c)) {
      s[c] = l;
      continue;
    } else {
      const u = hp(l, sl[c]);
      c.startsWith("origin") ? ((a = !0), (i[c] = u)) : (r[c] = u);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = xw(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: c = "50%", originY: l = "50%", originZ: u = 0 } = i;
    r.transformOrigin = `${c} ${l} ${u}`;
  }
}
const bw = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  ww = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Sw(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? bw : ww;
  e[i.offset] = Y.transform(-r);
  const o = Y.transform(t),
    a = Y.transform(n);
  e[i.array] = `${o} ${a}`;
}
function Fu(e, t, n) {
  return typeof e == "string" ? e : Y.transform(t + n * e);
}
function _w(e, t, n) {
  const r = Fu(t, e.x, e.width),
    s = Fu(n, e.y, e.height);
  return `${r} ${s}`;
}
function ol(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: s,
    originY: i,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: c = 0,
    ...l
  },
  u,
  d
) {
  if ((il(e, l, d), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: p, dimensions: m } = e;
  f.transform && (m && (p.transform = f.transform), delete f.transform),
    m &&
      (s !== void 0 || i !== void 0 || p.transform) &&
      (p.transformOrigin = _w(
        m,
        s !== void 0 ? s : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && Sw(f, o, a, c, !1);
}
const al = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  pp = () => ({ ...al(), attrs: {} }),
  cl = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function mp(e, { style: t, vars: n }, r, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const gp = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function yp(e, t, n, r) {
  mp(e, t, void 0, r);
  for (const s in t.attrs) e.setAttribute(gp.has(s) ? s : Yc(s), t.attrs[s]);
}
const Vs = {};
function Tw(e) {
  for (const t in e) (Vs[t] = e[t]), nl(t) && (Vs[t].isCSSVariable = !0);
}
function vp(e, { layout: t, layoutId: n }) {
  return (
    xr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Vs[e] || e === "opacity"))
  );
}
function ll(e, t, n) {
  var r;
  const { style: s } = e,
    i = {};
  for (const o in s)
    (Qe(s[o]) ||
      (t.style && Qe(t.style[o])) ||
      vp(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[o] = s[o]);
  return i;
}
function xp(e, t, n) {
  const r = ll(e, t, n);
  for (const s in e)
    if (Qe(e[s]) || Qe(t[s])) {
      const i =
        os.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      r[i] = e[s];
    }
  return r;
}
function Cw(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Lu = ["x", "y", "width", "height", "cx", "cy", "r"],
  Aw = {
    useVisualState: dp({
      scrapeMotionValuesFromProps: xp,
      createRenderState: pp,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: s,
      }) => {
        if (!n) return;
        let i = !!e.drag;
        if (!i) {
          for (const a in s)
            if (xr.has(a)) {
              i = !0;
              break;
            }
        }
        if (!i) return;
        let o = !t;
        if (t)
          for (let a = 0; a < Lu.length; a++) {
            const c = Lu[a];
            e[c] !== t[c] && (o = !0);
          }
        o &&
          Ce.read(() => {
            Cw(n, r),
              Ce.render(() => {
                ol(r, s, cl(n.tagName), e.transformTemplate), yp(n, r);
              });
          });
      },
    }),
  },
  Ew = {
    useVisualState: dp({
      scrapeMotionValuesFromProps: ll,
      createRenderState: al,
    }),
  };
function bp(e, t, n) {
  for (const r in t) !Qe(t[r]) && !vp(r, n) && (e[r] = t[r]);
}
function Pw({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = al();
    return il(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Rw(e, t) {
  const n = e.style || {},
    r = {};
  return bp(r, n, e), Object.assign(r, Pw(e, t)), r;
}
function kw(e, t) {
  const n = {},
    r = Rw(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function Ow(e, t, n, r) {
  const s = x.useMemo(() => {
    const i = pp();
    return (
      ol(i, t, cl(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    bp(i, e.style, e), (s.style = { ...i, ...s.style });
  }
  return s;
}
function Nw(e = !1) {
  return (n, r, s, { latestValues: i }, o) => {
    const c = (el(n) ? Ow : kw)(r, i, o, n),
      l = Zb(r, typeof n == "string", e),
      u = n !== x.Fragment ? { ...l, ...c, ref: s } : {},
      { children: d } = r,
      f = x.useMemo(() => (Qe(d) ? d.get() : d), [d]);
    return x.createElement(n, { ...u, children: f });
  };
}
function jw(e, t) {
  return function (r, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const o = {
      ...(el(r) ? Aw : Ew),
      preloadedFeatures: e,
      useRender: Nw(s),
      createVisualElement: t,
      Component: r,
    };
    return nw(o);
  };
}
function wp(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function jo(e, t, n) {
  const r = e.getProps();
  return tl(r, t, n !== void 0 ? n : r.custom, e);
}
function ul(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Sp = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...os,
]);
let Zi;
function Dw() {
  Zi = void 0;
}
const Yt = {
  now: () => (
    Zi === void 0 &&
      Yt.set(
        $e.isProcessing || Ub.useManualTiming ? $e.timestamp : performance.now()
      ),
    Zi
  ),
  set: (e) => {
    (Zi = e), queueMicrotask(Dw);
  },
};
function dl(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function fl(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class hl {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return dl(this.subscriptions, t), () => fl(this.subscriptions, t);
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < s; i++) {
          const o = this.subscriptions[i];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function _p(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Iu = 30,
  Mw = (e) => !isNaN(parseFloat(e));
class Fw {
  constructor(t, n = {}) {
    (this.version = "12.0.6"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, s = !0) => {
        const i = Yt.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          s &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Yt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = Mw(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new hl());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            Ce.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Yt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Iu
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Iu);
    return _p(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Bs(e, t) {
  return new Fw(e, t);
}
function Lw(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Bs(n));
}
function Iw(e, t) {
  const n = jo(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const o in i) {
    const a = cw(i[o]);
    Lw(e, o, a);
  }
}
function Vw(e) {
  return !!(Qe(e) && e.add);
}
function Va(e, t) {
  const n = e.getValue("willChange");
  if (Vw(n)) return n.add(t);
}
function Tp(e) {
  return e.props[cp];
}
function pl(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Bw = pl(() => window.ScrollTimeline !== void 0);
class Uw {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t))
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((s) => {
      if (Bw() && s.attachTimeline) return s.attachTimeline(t);
      if (typeof n == "function") return n(s);
    });
    return () => {
      r.forEach((s, i) => {
        s && s(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class $w extends Uw {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
const fn = (e) => e * 1e3,
  hn = (e) => e / 1e3;
function ml(e) {
  return typeof e == "function";
}
function Vu(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const gl = (e) => Array.isArray(e) && typeof e[0] == "number",
  zw = { linearEasing: void 0 };
function Ww(e, t) {
  const n = pl(e);
  return () => {
    var r;
    return (r = zw[t]) !== null && r !== void 0 ? r : n();
  };
}
const ro = Ww(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Qr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Cp = (e, t, n = 10) => {
    let r = "";
    const s = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < s; i++) r += e(Qr(0, s - 1, i)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function Ap(e) {
  return !!(
    (typeof e == "function" && ro()) ||
    !e ||
    (typeof e == "string" && (e in Ba || ro())) ||
    gl(e) ||
    (Array.isArray(e) && e.every(Ap))
  );
}
const _s = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Ba = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: _s([0, 0.65, 0.55, 1]),
    circOut: _s([0.55, 0, 1, 0.45]),
    backIn: _s([0.31, 0.01, 0.66, -0.59]),
    backOut: _s([0.33, 1.53, 0.69, 0.99]),
  };
function Ep(e, t) {
  if (e)
    return typeof e == "function" && ro()
      ? Cp(e, t)
      : gl(e)
      ? _s(e)
      : Array.isArray(e)
      ? e.map((n) => Ep(n, t) || Ba.easeOut)
      : Ba[e];
}
const Pp = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Hw = 1e-7,
  qw = 12;
function Zw(e, t, n, r, s) {
  let i,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (i = Pp(o, r, s) - e), i > 0 ? (n = o) : (t = o);
  while (Math.abs(i) > Hw && ++a < qw);
  return o;
}
function mi(e, t, n, r) {
  if (e === t && n === r) return gt;
  const s = (i) => Zw(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : Pp(s(i), t, r));
}
const Rp = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  kp = (e) => (t) => 1 - e(1 - t),
  Op = mi(0.33, 1.53, 0.69, 0.99),
  yl = kp(Op),
  Np = Rp(yl),
  jp = (e) =>
    (e *= 2) < 1 ? 0.5 * yl(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  vl = (e) => 1 - Math.sin(Math.acos(e)),
  Dp = kp(vl),
  Mp = Rp(vl),
  Fp = (e) => /^0[^.\s]+$/u.test(e);
function Gw(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Fp(e)
    : !0;
}
const ks = (e) => Math.round(e * 1e5) / 1e5,
  xl = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Kw(e) {
  return e == null;
}
const Qw =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  bl = (e, t) => (n) =>
    !!(
      (typeof n == "string" && Qw.test(n) && n.startsWith(e)) ||
      (t && !Kw(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Lp = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [s, i, o, a] = r.match(xl);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(i),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Xw = (e) => pn(0, 255, e),
  aa = { ...as, transform: (e) => Math.round(Xw(e)) },
  Kn = {
    test: bl("rgb", "red"),
    parse: Lp("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      aa.transform(e) +
      ", " +
      aa.transform(t) +
      ", " +
      aa.transform(n) +
      ", " +
      ks(Is.transform(r)) +
      ")",
  };
function Yw(e) {
  let t = "",
    n = "",
    r = "",
    s = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (s = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (s = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
const Ua = { test: bl("#"), parse: Yw, transform: Kn.transform },
  Ar = {
    test: bl("hsl", "hue"),
    parse: Lp("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Xt.transform(ks(t)) +
      ", " +
      Xt.transform(ks(n)) +
      ", " +
      ks(Is.transform(r)) +
      ")",
  },
  Ge = {
    test: (e) => Kn.test(e) || Ua.test(e) || Ar.test(e),
    parse: (e) =>
      Kn.test(e) ? Kn.parse(e) : Ar.test(e) ? Ar.parse(e) : Ua.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? Kn.transform(e)
        : Ar.transform(e),
  },
  Jw =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function e0(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(xl)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Jw)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Ip = "number",
  Vp = "color",
  t0 = "var",
  n0 = "var(",
  Bu = "${}",
  r0 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Us(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    s = [];
  let i = 0;
  const a = t
    .replace(
      r0,
      (c) => (
        Ge.test(c)
          ? (r.color.push(i), s.push(Vp), n.push(Ge.parse(c)))
          : c.startsWith(n0)
          ? (r.var.push(i), s.push(t0), n.push(c))
          : (r.number.push(i), s.push(Ip), n.push(parseFloat(c))),
        ++i,
        Bu
      )
    )
    .split(Bu);
  return { values: n, split: a, indexes: r, types: s };
}
function Bp(e) {
  return Us(e).values;
}
function Up(e) {
  const { split: t, types: n } = Us(e),
    r = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (((i += t[o]), s[o] !== void 0)) {
        const a = n[o];
        a === Ip
          ? (i += ks(s[o]))
          : a === Vp
          ? (i += Ge.transform(s[o]))
          : (i += s[o]);
      }
    return i;
  };
}
const s0 = (e) => (typeof e == "number" ? 0 : e);
function i0(e) {
  const t = Bp(e);
  return Up(e)(t.map(s0));
}
const jn = {
    test: e0,
    parse: Bp,
    createTransformer: Up,
    getAnimatableNone: i0,
  },
  o0 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function a0(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(xl) || [];
  if (!r) return e;
  const s = n.replace(r, "");
  let i = o0.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + s + ")";
}
const c0 = /\b([a-z-]*)\(.*?\)/gu,
  $a = {
    ...jn,
    getAnimatableNone: (e) => {
      const t = e.match(c0);
      return t ? t.map(a0).join(" ") : e;
    },
  },
  l0 = {
    ...sl,
    color: Ge,
    backgroundColor: Ge,
    outlineColor: Ge,
    fill: Ge,
    stroke: Ge,
    borderColor: Ge,
    borderTopColor: Ge,
    borderRightColor: Ge,
    borderBottomColor: Ge,
    borderLeftColor: Ge,
    filter: $a,
    WebkitFilter: $a,
  },
  wl = (e) => l0[e];
function $p(e, t) {
  let n = wl(e);
  return (
    n !== $a && (n = jn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const u0 = new Set(["auto", "none", "0"]);
function d0(e, t, n) {
  let r = 0,
    s;
  for (; r < e.length && !s; ) {
    const i = e[r];
    typeof i == "string" && !u0.has(i) && Us(i).values.length && (s = e[r]),
      r++;
  }
  if (s && n) for (const i of t) e[i] = $p(n, s);
}
const Uu = (e) => e === as || e === Y,
  $u = (e, t) => parseFloat(e.split(", ")[t]),
  zu =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const s = r.match(/^matrix3d\((.+)\)$/u);
      if (s) return $u(s[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? $u(i[1], e) : 0;
      }
    },
  f0 = new Set(["x", "y", "z"]),
  h0 = os.filter((e) => !f0.has(e));
function p0(e) {
  const t = [];
  return (
    h0.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Xr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: zu(4, 13),
  y: zu(5, 14),
};
Xr.translateX = Xr.x;
Xr.translateY = Xr.y;
const or = new Set();
let za = !1,
  Wa = !1;
function zp() {
  if (Wa) {
    const e = Array.from(or).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const s = p0(r);
      s.length && (n.set(r, s), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const s = n.get(r);
        s &&
          s.forEach(([i, o]) => {
            var a;
            (a = r.getValue(i)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Wa = !1), (za = !1), or.forEach((e) => e.complete()), or.clear();
}
function Wp() {
  or.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Wa = !0);
  });
}
function m0() {
  Wp(), zp();
}
class Sl {
  constructor(t, n, r, s, i, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = s),
      (this.element = i),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (or.add(this),
          za || ((za = !0), Ce.read(Wp), Ce.resolveKeyframes(zp)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: s,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const o = s == null ? void 0 : s.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const c = r.readValue(n, a);
            c != null && (t[0] = c);
          }
          t[0] === void 0 && (t[0] = a), s && o === void 0 && s.set(t[0]);
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      or.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), or.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Hp = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  g0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function y0(e) {
  const t = g0.exec(e);
  if (!t) return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s];
}
function qp(e, t, n = 1) {
  const [r, s] = y0(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return Hp(o) ? parseFloat(o) : o;
  }
  return rl(s) ? qp(s, t, n + 1) : s;
}
const Zp = (e) => (t) => t.test(e),
  v0 = { test: (e) => e === "auto", parse: (e) => e },
  Gp = [as, Y, Xt, wn, pw, hw, v0],
  Wu = (e) => Gp.find(Zp(e));
class Kp extends Sl {
  constructor(t, n, r, s, i) {
    super(t, n, r, s, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let l = t[c];
      if (typeof l == "string" && ((l = l.trim()), rl(l))) {
        const u = qp(l, n.current);
        u !== void 0 && (t[c] = u),
          c === t.length - 1 && (this.finalKeyframe = l);
      }
    }
    if ((this.resolveNoneKeyframes(), !Sp.has(r) || t.length !== 2)) return;
    const [s, i] = t,
      o = Wu(s),
      a = Wu(i);
    if (o !== a)
      if (Uu(o) && Uu(a))
        for (let c = 0; c < t.length; c++) {
          const l = t[c];
          typeof l == "string" && (t[c] = parseFloat(l));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let s = 0; s < t.length; s++) Gw(t[s]) && r.push(s);
    r.length && d0(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Xr[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(r, s).jump(s, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: s } = this;
    if (!n || !n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1,
      a = s[o];
    (s[o] = Xr[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([c, l]) => {
          n.getValue(c).set(l);
        }),
      this.resolveNoneKeyframes();
  }
}
const Hu = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (jn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function x0(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function b0(e, t, n, r) {
  const s = e[0];
  if (s === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    o = Hu(s, t),
    a = Hu(i, t);
  return !o || !a ? !1 : x0(e) || ((n === "spring" || ml(n)) && r);
}
const w0 = (e) => e !== null;
function Do(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(w0),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !i || r === void 0 ? s[i] : r;
}
const S0 = 40;
class Qp {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: s = 0,
    repeatDelay: i = 0,
    repeatType: o = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Yt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: s,
        repeatDelay: i,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > S0
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && m0(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = Yt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: s,
      velocity: i,
      delay: o,
      onComplete: a,
      onUpdate: c,
      isGenerator: l,
    } = this.options;
    if (!l && !b0(t, r, s, i))
      if (o) this.options.duration = 0;
      else {
        c && c(Do(t, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(t, n);
    u !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...u }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const Ha = 2e4;
function Xp(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ha; ) (t += n), (r = e.next(t));
  return t >= Ha ? 1 / 0 : t;
}
const Ee = (e, t, n) => e + (t - e) * n;
function ca(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function _0({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let s = 0,
    i = 0,
    o = 0;
  if (!t) s = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      c = 2 * n - a;
    (s = ca(c, a, e + 1 / 3)), (i = ca(c, a, e)), (o = ca(c, a, e - 1 / 3));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function so(e, t) {
  return (n) => (n > 0 ? t : e);
}
const la = (e, t, n) => {
    const r = e * e,
      s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  T0 = [Ua, Kn, Ar],
  C0 = (e) => T0.find((t) => t.test(e));
function qu(e) {
  const t = C0(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Ar && (n = _0(n)), n;
}
const Zu = (e, t) => {
    const n = qu(e),
      r = qu(t);
    if (!n || !r) return so(e, t);
    const s = { ...n };
    return (i) => (
      (s.red = la(n.red, r.red, i)),
      (s.green = la(n.green, r.green, i)),
      (s.blue = la(n.blue, r.blue, i)),
      (s.alpha = Ee(n.alpha, r.alpha, i)),
      Kn.transform(s)
    );
  },
  A0 = (e, t) => (n) => t(e(n)),
  gi = (...e) => e.reduce(A0),
  qa = new Set(["none", "hidden"]);
function E0(e, t) {
  return qa.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function P0(e, t) {
  return (n) => Ee(e, t, n);
}
function _l(e) {
  return typeof e == "number"
    ? P0
    : typeof e == "string"
    ? rl(e)
      ? so
      : Ge.test(e)
      ? Zu
      : O0
    : Array.isArray(e)
    ? Yp
    : typeof e == "object"
    ? Ge.test(e)
      ? Zu
      : R0
    : so;
}
function Yp(e, t) {
  const n = [...e],
    r = n.length,
    s = e.map((i, o) => _l(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++) n[o] = s[o](i);
    return n;
  };
}
function R0(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = _l(e[s])(e[s], t[s]));
  return (s) => {
    for (const i in r) n[i] = r[i](s);
    return n;
  };
}
function k0(e, t) {
  var n;
  const r = [],
    s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i],
      a = e.indexes[o][s[o]],
      c = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[i] = c), s[o]++;
  }
  return r;
}
const O0 = (e, t) => {
  const n = jn.createTransformer(t),
    r = Us(e),
    s = Us(t);
  return r.indexes.var.length === s.indexes.var.length &&
    r.indexes.color.length === s.indexes.color.length &&
    r.indexes.number.length >= s.indexes.number.length
    ? (qa.has(e) && !s.values.length) || (qa.has(t) && !r.values.length)
      ? E0(e, t)
      : gi(Yp(k0(r, s), s.values), n)
    : so(e, t);
};
function Jp(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? Ee(e, t, n)
    : _l(e)(e, t);
}
const N0 = 5;
function em(e, t, n) {
  const r = Math.max(t - N0, 0);
  return _p(n - e(r), t - r);
}
const ke = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Gu = 0.001;
function j0({
  duration: e = ke.duration,
  bounce: t = ke.bounce,
  velocity: n = ke.velocity,
  mass: r = ke.mass,
}) {
  let s,
    i,
    o = 1 - t;
  (o = pn(ke.minDamping, ke.maxDamping, o)),
    (e = pn(ke.minDuration, ke.maxDuration, hn(e))),
    o < 1
      ? ((s = (l) => {
          const u = l * o,
            d = u * e,
            f = u - n,
            p = Za(l, o),
            m = Math.exp(-d);
          return Gu - (f / p) * m;
        }),
        (i = (l) => {
          const d = l * o * e,
            f = d * n + n,
            p = Math.pow(o, 2) * Math.pow(l, 2) * e,
            m = Math.exp(-d),
            h = Za(Math.pow(l, 2), o);
          return ((-s(l) + Gu > 0 ? -1 : 1) * ((f - p) * m)) / h;
        }))
      : ((s = (l) => {
          const u = Math.exp(-l * e),
            d = (l - n) * e + 1;
          return -0.001 + u * d;
        }),
        (i = (l) => {
          const u = Math.exp(-l * e),
            d = (n - l) * (e * e);
          return u * d;
        }));
  const a = 5 / e,
    c = M0(s, i, a);
  if (((e = fn(e)), isNaN(c)))
    return { stiffness: ke.stiffness, damping: ke.damping, duration: e };
  {
    const l = Math.pow(c, 2) * r;
    return { stiffness: l, damping: o * 2 * Math.sqrt(r * l), duration: e };
  }
}
const D0 = 12;
function M0(e, t, n) {
  let r = n;
  for (let s = 1; s < D0; s++) r = r - e(r) / t(r);
  return r;
}
function Za(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const F0 = ["duration", "bounce"],
  L0 = ["stiffness", "damping", "mass"];
function Ku(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function I0(e) {
  let t = {
    velocity: ke.velocity,
    stiffness: ke.stiffness,
    damping: ke.damping,
    mass: ke.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Ku(e, L0) && Ku(e, F0))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        s = r * r,
        i = 2 * pn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = { ...t, mass: ke.mass, stiffness: s, damping: i };
    } else {
      const n = j0(e);
      (t = { ...t, ...n, mass: ke.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function tm(e = ke.visualDuration, t = ke.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: s } = n;
  const i = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: c,
      damping: l,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p,
    } = I0({ ...n, velocity: -hn(n.velocity || 0) }),
    m = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    g = o - i,
    v = hn(Math.sqrt(c / u)),
    b = Math.abs(g) < 5;
  r || (r = b ? ke.restSpeed.granular : ke.restSpeed.default),
    s || (s = b ? ke.restDelta.granular : ke.restDelta.default);
  let w;
  if (h < 1) {
    const S = Za(v, h);
    w = (E) => {
      const R = Math.exp(-h * v * E);
      return (
        o - R * (((m + h * v * g) / S) * Math.sin(S * E) + g * Math.cos(S * E))
      );
    };
  } else if (h === 1) w = (S) => o - Math.exp(-v * S) * (g + (m + v * g) * S);
  else {
    const S = v * Math.sqrt(h * h - 1);
    w = (E) => {
      const R = Math.exp(-h * v * E),
        A = Math.min(S * E, 300);
      return (
        o - (R * ((m + h * v * g) * Math.sinh(A) + S * g * Math.cosh(A))) / S
      );
    };
  }
  const T = {
    calculatedDuration: (p && d) || null,
    next: (S) => {
      const E = w(S);
      if (p) a.done = S >= d;
      else {
        let R = 0;
        h < 1 && (R = S === 0 ? fn(m) : em(w, S, E));
        const A = Math.abs(R) <= r,
          N = Math.abs(o - E) <= s;
        a.done = A && N;
      }
      return (a.value = a.done ? o : E), a;
    },
    toString: () => {
      const S = Math.min(Xp(T), Ha),
        E = Cp((R) => T.next(S * R).value, S, 30);
      return S + "ms " + E;
    },
  };
  return T;
}
function Qu({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: s = 10,
  bounceStiffness: i = 500,
  modifyTarget: o,
  min: a,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    p = (A) => (a !== void 0 && A < a) || (c !== void 0 && A > c),
    m = (A) =>
      a === void 0
        ? c
        : c === void 0 || Math.abs(a - A) < Math.abs(c - A)
        ? a
        : c;
  let h = n * t;
  const g = d + h,
    v = o === void 0 ? g : o(g);
  v !== g && (h = v - d);
  const b = (A) => -h * Math.exp(-A / r),
    w = (A) => v + b(A),
    T = (A) => {
      const N = b(A),
        D = w(A);
      (f.done = Math.abs(N) <= l), (f.value = f.done ? v : D);
    };
  let S, E;
  const R = (A) => {
    p(f.value) &&
      ((S = A),
      (E = tm({
        keyframes: [f.value, m(f.value)],
        velocity: em(w, A, f.value),
        damping: s,
        stiffness: i,
        restDelta: l,
        restSpeed: u,
      })));
  };
  return (
    R(0),
    {
      calculatedDuration: null,
      next: (A) => {
        let N = !1;
        return (
          !E && S === void 0 && ((N = !0), T(A), R(A)),
          S !== void 0 && A >= S ? E.next(A - S) : (!N && T(A), f)
        );
      },
    }
  );
}
const V0 = mi(0.42, 0, 1, 1),
  B0 = mi(0, 0, 0.58, 1),
  nm = mi(0.42, 0, 0.58, 1),
  U0 = (e) => Array.isArray(e) && typeof e[0] != "number",
  Xu = {
    linear: gt,
    easeIn: V0,
    easeInOut: nm,
    easeOut: B0,
    circIn: vl,
    circInOut: Mp,
    circOut: Dp,
    backIn: yl,
    backInOut: Np,
    backOut: Op,
    anticipate: jp,
  },
  Yu = (e) => {
    if (gl(e)) {
      La(e.length === 4);
      const [t, n, r, s] = e;
      return mi(t, n, r, s);
    } else if (typeof e == "string") return La(Xu[e] !== void 0), Xu[e];
    return e;
  };
function $0(e, t, n) {
  const r = [],
    s = n || Jp,
    i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[o] || gt : t;
      a = gi(c, a);
    }
    r.push(a);
  }
  return r;
}
function z0(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if ((La(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = $0(t, r, s),
    c = a.length,
    l = (u) => {
      if (o && u < e[0]) return t[0];
      let d = 0;
      if (c > 1) for (; d < e.length - 2 && !(u < e[d + 1]); d++);
      const f = Qr(e[d], e[d + 1], u);
      return a[d](f);
    };
  return n ? (u) => l(pn(e[0], e[i - 1], u)) : l;
}
function W0(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = Qr(0, t, r);
    e.push(Ee(n, 1, s));
  }
}
function H0(e) {
  const t = [0];
  return W0(t, e.length - 1), t;
}
function q0(e, t) {
  return e.map((n) => n * t);
}
function Z0(e, t) {
  return e.map(() => t || nm).splice(0, e.length - 1);
}
function io({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const s = U0(r) ? r.map(Yu) : Yu(r),
    i = { done: !1, value: t[0] },
    o = q0(n && n.length === t.length ? n : H0(t), e),
    a = z0(o, t, { ease: Array.isArray(s) ? s : Z0(t, s) });
  return {
    calculatedDuration: e,
    next: (c) => ((i.value = a(c)), (i.done = c >= e), i),
  };
}
const G0 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Ce.update(t, !0),
      stop: () => Nn(t),
      now: () => ($e.isProcessing ? $e.timestamp : Yt.now()),
    };
  },
  K0 = { decay: Qu, inertia: Qu, tween: io, keyframes: io, spring: tm },
  Q0 = (e) => e / 100;
class Tl extends Qp {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: c } = this.options;
        c && c();
      });
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options,
      o = (s == null ? void 0 : s.KeyframeResolver) || Sl,
      a = (c, l) => this.onKeyframesResolved(c, l);
    (this.resolver = new o(i, a, n, r, s)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: s = 0,
        repeatType: i,
        velocity: o = 0,
      } = this.options,
      a = ml(n) ? n : K0[n] || io;
    let c, l;
    a !== io &&
      typeof t[0] != "number" &&
      ((c = gi(Q0, Jp(t[0], t[1]))), (t = [0, 100]));
    const u = a({ ...this.options, keyframes: t });
    i === "mirror" &&
      (l = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      u.calculatedDuration === null && (u.calculatedDuration = Xp(u));
    const { calculatedDuration: d } = u,
      f = d + s,
      p = f * (r + 1) - s;
    return {
      generator: u,
      mirroredGenerator: l,
      mapPercentToKeyframes: c,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: p,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: A } = this.options;
      return { done: !0, value: A[A.length - 1] };
    }
    const {
      finalKeyframe: s,
      generator: i,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: c,
      calculatedDuration: l,
      totalDuration: u,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: f,
      repeat: p,
      repeatType: m,
      repeatDelay: h,
      onUpdate: g,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - u / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const v = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      b = this.speed >= 0 ? v < 0 : v > u;
    (this.currentTime = Math.max(v, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = u);
    let w = this.currentTime,
      T = i;
    if (p) {
      const A = Math.min(this.currentTime, u) / d;
      let N = Math.floor(A),
        D = A % 1;
      !D && A >= 1 && (D = 1),
        D === 1 && N--,
        (N = Math.min(N, p + 1)),
        !!(N % 2) &&
          (m === "reverse"
            ? ((D = 1 - D), h && (D -= h / d))
            : m === "mirror" && (T = o)),
        (w = pn(0, 1, D) * d);
    }
    const S = b ? { done: !1, value: c[0] } : T.next(w);
    a && (S.value = a(S.value));
    let { done: E } = S;
    !b &&
      l !== null &&
      (E = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const R =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && E));
    return (
      R && s !== void 0 && (S.value = Do(c, this.options, s)),
      g && g(S.value),
      R && this.finish(),
      S
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? hn(t.calculatedDuration) : 0;
  }
  get time() {
    return hn(this.currentTime);
  }
  set time(t) {
    (t = fn(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = hn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = G0, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const s = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = s - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = s)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const X0 = new Set(["opacity", "clipPath", "filter", "transform"]);
function Y0(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: s = 300,
    repeat: i = 0,
    repeatType: o = "loop",
    ease: a = "easeInOut",
    times: c,
  } = {}
) {
  const l = { [t]: n };
  c && (l.offset = c);
  const u = Ep(a, s);
  return (
    Array.isArray(u) && (l.easing = u),
    e.animate(l, {
      delay: r,
      duration: s,
      easing: Array.isArray(u) ? "linear" : u,
      fill: "both",
      iterations: i + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const J0 = pl(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  oo = 10,
  eS = 2e4;
function tS(e) {
  return ml(e.type) || e.type === "spring" || !Ap(e.ease);
}
function nS(e, t) {
  const n = new Tl({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const s = [];
  let i = 0;
  for (; !r.done && i < eS; ) (r = n.sample(i)), s.push(r.value), (i += oo);
  return { times: void 0, keyframes: s, duration: i - oo, ease: "linear" };
}
const rm = { anticipate: jp, backInOut: Np, circInOut: Mp };
function rS(e) {
  return e in rm;
}
class Ju extends Qp {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options;
    (this.resolver = new Kp(
      i,
      (o, a) => this.onKeyframesResolved(o, a),
      n,
      r,
      s
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: s,
      ease: i,
      type: o,
      motionValue: a,
      name: c,
      startTime: l,
    } = this.options;
    if (!a.owner || !a.owner.current) return !1;
    if (
      (typeof i == "string" && ro() && rS(i) && (i = rm[i]), tS(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: f,
          motionValue: p,
          element: m,
          ...h
        } = this.options,
        g = nS(t, h);
      (t = g.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = g.duration),
        (s = g.times),
        (i = g.ease),
        (o = "keyframes");
    }
    const u = Y0(a.owner.current, c, t, {
      ...this.options,
      duration: r,
      times: s,
      ease: i,
    });
    return (
      (u.startTime = l ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Vu(u, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (u.onfinish = () => {
            const { onComplete: d } = this.options;
            a.set(Do(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: u, duration: r, times: s, type: o, ease: i, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return hn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return hn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = fn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return gt;
      const { animation: r } = n;
      Vu(r, t);
    }
    return gt;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: s,
      type: i,
      ease: o,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: l,
          onUpdate: u,
          onComplete: d,
          element: f,
          ...p
        } = this.options,
        m = new Tl({
          ...p,
          keyframes: r,
          duration: s,
          type: i,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        h = fn(this.time);
      l.setWithVelocity(m.sample(h - oo).value, m.sample(h).value, oo);
    }
    const { onStop: c } = this.options;
    c && c(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: s,
      repeatType: i,
      damping: o,
      type: a,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: c, transformTemplate: l } = n.owner.getProps();
    return (
      J0() &&
      r &&
      X0.has(r) &&
      !c &&
      !l &&
      !s &&
      i !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const sS = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  iS = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  oS = { type: "keyframes", duration: 0.8 },
  aS = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  cS = (e, { keyframes: t }) =>
    t.length > 2
      ? oS
      : xr.has(e)
      ? e.startsWith("scale")
        ? iS(t[1])
        : sS
      : aS;
function lS({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: s,
  repeat: i,
  repeatType: o,
  repeatDelay: a,
  from: c,
  elapsed: l,
  ...u
}) {
  return !!Object.keys(u).length;
}
const Cl =
  (e, t, n, r = {}, s, i) =>
  (o) => {
    const a = ul(r, e) || {},
      c = a.delay || r.delay || 0;
    let { elapsed: l = 0 } = r;
    l = l - fn(c);
    let u = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -l,
      onUpdate: (f) => {
        t.set(f), a.onUpdate && a.onUpdate(f);
      },
      onComplete: () => {
        o(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: i ? void 0 : s,
    };
    lS(a) || (u = { ...u, ...cS(e, u) }),
      u.duration && (u.duration = fn(u.duration)),
      u.repeatDelay && (u.repeatDelay = fn(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from);
    let d = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        ((u.duration = 0), u.delay === 0 && (d = !0)),
      d && !i && t.get() !== void 0)
    ) {
      const f = Do(u.keyframes, a);
      if (f !== void 0)
        return (
          Ce.update(() => {
            u.onUpdate(f), u.onComplete();
          }),
          new $w([])
        );
    }
    return !i && Ju.supports(u) ? new Ju(u) : new Tl(u);
  };
function uS({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function sm(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  var i;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...c } = t;
  r && (o = r);
  const l = [],
    u = s && e.animationState && e.animationState.getState()[s];
  for (const d in c) {
    const f = e.getValue(
        d,
        (i = e.latestValues[d]) !== null && i !== void 0 ? i : null
      ),
      p = c[d];
    if (p === void 0 || (u && uS(u, d))) continue;
    const m = { delay: n, ...ul(o || {}, d) };
    let h = !1;
    if (window.MotionHandoffAnimation) {
      const v = Tp(e);
      if (v) {
        const b = window.MotionHandoffAnimation(v, d, Ce);
        b !== null && ((m.startTime = b), (h = !0));
      }
    }
    Va(e, d),
      f.start(
        Cl(d, f, p, e.shouldReduceMotion && Sp.has(d) ? { type: !1 } : m, e, h)
      );
    const g = f.animation;
    g && l.push(g);
  }
  return (
    a &&
      Promise.all(l).then(() => {
        Ce.update(() => {
          a && Iw(e, a);
        });
      }),
    l
  );
}
function Ga(e, t, n = {}) {
  var r;
  const s = jo(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(sm(e, s, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return dS(e, t, u + l, d, f, n);
          }
        : () => Promise.resolve(),
    { when: c } = i;
  if (c) {
    const [l, u] = c === "beforeChildren" ? [o, a] : [a, o];
    return l().then(() => u());
  } else return Promise.all([o(), a(n.delay)]);
}
function dS(e, t, n = 0, r = 0, s = 1, i) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    c = s === 1 ? (l = 0) => l * r : (l = 0) => a - l * r;
  return (
    Array.from(e.variantChildren)
      .sort(fS)
      .forEach((l, u) => {
        l.notify("AnimationStart", t),
          o.push(
            Ga(l, t, { ...i, delay: n + c(u) }).then(() =>
              l.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function fS(e, t) {
  return e.sortNodePosition(t);
}
function hS(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => Ga(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string") r = Ga(e, t, n);
  else {
    const s = typeof t == "function" ? jo(e, t, n.custom) : t;
    r = Promise.all(sm(e, s, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const pS = Xc.length;
function im(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? im(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < pS; n++) {
    const r = Xc[n],
      s = e.props[r];
    (Ls(s) || s === !1) && (t[r] = s);
  }
  return t;
}
const mS = [...Qc].reverse(),
  gS = Qc.length;
function yS(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => hS(e, n, r)));
}
function vS(e) {
  let t = yS(e),
    n = ed(),
    r = !0;
  const s = (c) => (l, u) => {
    var d;
    const f = jo(
      e,
      u,
      c === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (f) {
      const { transition: p, transitionEnd: m, ...h } = f;
      l = { ...l, ...h, ...m };
    }
    return l;
  };
  function i(c) {
    t = c(e);
  }
  function o(c) {
    const { props: l } = e,
      u = im(e.parent) || {},
      d = [],
      f = new Set();
    let p = {},
      m = 1 / 0;
    for (let g = 0; g < gS; g++) {
      const v = mS[g],
        b = n[v],
        w = l[v] !== void 0 ? l[v] : u[v],
        T = Ls(w),
        S = v === c ? b.isActive : null;
      S === !1 && (m = g);
      let E = w === u[v] && w !== l[v] && T;
      if (
        (E && r && e.manuallyAnimateOnMount && (E = !1),
        (b.protectedKeys = { ...p }),
        (!b.isActive && S === null) ||
          (!w && !b.prevProp) ||
          Oo(w) ||
          typeof w == "boolean")
      )
        continue;
      const R = xS(b.prevProp, w);
      let A = R || (v === c && b.isActive && !E && T) || (g > m && T),
        N = !1;
      const D = Array.isArray(w) ? w : [w];
      let L = D.reduce(s(v), {});
      S === !1 && (L = {});
      const { prevResolvedValues: j = {} } = b,
        $ = { ...j, ...L },
        W = (Z) => {
          (A = !0),
            f.has(Z) && ((N = !0), f.delete(Z)),
            (b.needsAnimating[Z] = !0);
          const q = e.getValue(Z);
          q && (q.liveStyle = !1);
        };
      for (const Z in $) {
        const q = L[Z],
          se = j[Z];
        if (p.hasOwnProperty(Z)) continue;
        let me = !1;
        Ia(q) && Ia(se) ? (me = !wp(q, se)) : (me = q !== se),
          me
            ? q != null
              ? W(Z)
              : f.add(Z)
            : q !== void 0 && f.has(Z)
            ? W(Z)
            : (b.protectedKeys[Z] = !0);
      }
      (b.prevProp = w),
        (b.prevResolvedValues = L),
        b.isActive && (p = { ...p, ...L }),
        r && e.blockInitialAnimation && (A = !1),
        A &&
          (!(E && R) || N) &&
          d.push(...D.map((Z) => ({ animation: Z, options: { type: v } })));
    }
    if (f.size) {
      const g = {};
      f.forEach((v) => {
        const b = e.getBaseTarget(v),
          w = e.getValue(v);
        w && (w.liveStyle = !0), (g[v] = b ?? null);
      }),
        d.push({ animation: g });
    }
    let h = !!d.length;
    return (
      r &&
        (l.initial === !1 || l.initial === l.animate) &&
        !e.manuallyAnimateOnMount &&
        (h = !1),
      (r = !1),
      h ? t(d) : Promise.resolve()
    );
  }
  function a(c, l) {
    var u;
    if (n[c].isActive === l) return Promise.resolve();
    (u = e.variantChildren) === null ||
      u === void 0 ||
      u.forEach((f) => {
        var p;
        return (p = f.animationState) === null || p === void 0
          ? void 0
          : p.setActive(c, l);
      }),
      (n[c].isActive = l);
    const d = o(c);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      (n = ed()), (r = !0);
    },
  };
}
function xS(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !wp(t, e) : !1;
}
function qn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function ed() {
  return {
    animate: qn(!0),
    whileInView: qn(),
    whileHover: qn(),
    whileTap: qn(),
    whileDrag: qn(),
    whileFocus: qn(),
    exit: qn(),
  };
}
class $n {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class bS extends $n {
  constructor(t) {
    super(t), t.animationState || (t.animationState = vS(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Oo(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let wS = 0;
class SS extends $n {
  constructor() {
    super(...arguments), (this.id = wS++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const s = this.node.animationState.setActive("exit", !t);
    n && !t && s.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const _S = { animation: { Feature: bS }, exit: { Feature: SS } },
  Et = { x: !1, y: !1 };
function om() {
  return Et.x || Et.y;
}
function TS(e) {
  return e === "x" || e === "y"
    ? Et[e]
      ? null
      : ((Et[e] = !0),
        () => {
          Et[e] = !1;
        })
    : Et.x || Et.y
    ? null
    : ((Et.x = Et.y = !0),
      () => {
        Et.x = Et.y = !1;
      });
}
const Al = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function $s(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function yi(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const CS = (e) => (t) => Al(t) && e(t, yi(t));
function Os(e, t, n, r) {
  return $s(e, t, CS(n), r);
}
const td = (e, t) => Math.abs(e - t);
function AS(e, t) {
  const n = td(e.x, t.x),
    r = td(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class am {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: s, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = da(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          p = AS(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !p) return;
        const { point: m } = d,
          { timestamp: h } = $e;
        this.history.push({ ...m, timestamp: h });
        const { onStart: g, onMove: v } = this.handlers;
        f ||
          (g && g(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          v && v(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = ua(f, this.transformPagePoint)),
          Ce.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: p, onSessionEnd: m, resumeAnimation: h } = this.handlers;
        if (
          (this.dragSnapToOrigin && h && h(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const g = da(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : ua(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && p && p(d, g), m && m(d, g);
      }),
      !Al(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = s || window);
    const o = yi(t),
      a = ua(o, this.transformPagePoint),
      { point: c } = a,
      { timestamp: l } = $e;
    this.history = [{ ...c, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(t, da(a, this.history)),
      (this.removeListeners = gi(
        Os(this.contextWindow, "pointermove", this.handlePointerMove),
        Os(this.contextWindow, "pointerup", this.handlePointerUp),
        Os(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Nn(this.updatePoint);
  }
}
function ua(e, t) {
  return t ? { point: t(e.point) } : e;
}
function nd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function da({ point: e }, t) {
  return {
    point: e,
    delta: nd(e, cm(t)),
    offset: nd(e, ES(t)),
    velocity: PS(t, 0.1),
  };
}
function ES(e) {
  return e[0];
}
function cm(e) {
  return e[e.length - 1];
}
function PS(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const s = cm(e);
  for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > fn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = hn(s.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
const lm = 1e-4,
  RS = 1 - lm,
  kS = 1 + lm,
  um = 0.01,
  OS = 0 - um,
  NS = 0 + um;
function nt(e) {
  return e.max - e.min;
}
function jS(e, t, n) {
  return Math.abs(e - t) <= n;
}
function rd(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Ee(t.min, t.max, e.origin)),
    (e.scale = nt(n) / nt(t)),
    (e.translate = Ee(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= RS && e.scale <= kS) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= OS && e.translate <= NS) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Ns(e, t, n, r) {
  rd(e.x, t.x, n.x, r ? r.originX : void 0),
    rd(e.y, t.y, n.y, r ? r.originY : void 0);
}
function sd(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + nt(t));
}
function DS(e, t, n) {
  sd(e.x, t.x, n.x), sd(e.y, t.y, n.y);
}
function id(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + nt(t));
}
function js(e, t, n) {
  id(e.x, t.x, n.x), id(e.y, t.y, n.y);
}
function MS(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Ee(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Ee(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function od(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function FS(e, { top: t, left: n, bottom: r, right: s }) {
  return { x: od(e.x, n, s), y: od(e.y, t, r) };
}
function ad(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function LS(e, t) {
  return { x: ad(e.x, t.x), y: ad(e.y, t.y) };
}
function IS(e, t) {
  let n = 0.5;
  const r = nt(e),
    s = nt(t);
  return (
    s > r
      ? (n = Qr(t.min, t.max - r, e.min))
      : r > s && (n = Qr(e.min, e.max - s, t.min)),
    pn(0, 1, n)
  );
}
function VS(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Ka = 0.35;
function BS(e = Ka) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Ka),
    { x: cd(e, "left", "right"), y: cd(e, "top", "bottom") }
  );
}
function cd(e, t, n) {
  return { min: ld(e, t), max: ld(e, n) };
}
function ld(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const ud = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Er = () => ({ x: ud(), y: ud() }),
  dd = () => ({ min: 0, max: 0 }),
  je = () => ({ x: dd(), y: dd() });
function St(e) {
  return [e("x"), e("y")];
}
function dm({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function US({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function $S(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function fa(e) {
  return e === void 0 || e === 1;
}
function Qa({ scale: e, scaleX: t, scaleY: n }) {
  return !fa(e) || !fa(t) || !fa(n);
}
function Zn(e) {
  return (
    Qa(e) ||
    fm(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function fm(e) {
  return fd(e.x) || fd(e.y);
}
function fd(e) {
  return e && e !== "0%";
}
function ao(e, t, n) {
  const r = e - n,
    s = t * r;
  return n + s;
}
function hd(e, t, n, r, s) {
  return s !== void 0 && (e = ao(e, s, r)), ao(e, n, r) + t;
}
function Xa(e, t = 0, n = 1, r, s) {
  (e.min = hd(e.min, t, n, r, s)), (e.max = hd(e.max, t, n, r, s));
}
function hm(e, { x: t, y: n }) {
  Xa(e.x, t.translate, t.scale, t.originPoint),
    Xa(e.y, n.translate, n.scale, n.originPoint);
}
const pd = 0.999999999999,
  md = 1.0000000000001;
function zS(e, t, n, r = !1) {
  const s = n.length;
  if (!s) return;
  t.x = t.y = 1;
  let i, o;
  for (let a = 0; a < s; a++) {
    (i = n[a]), (o = i.projectionDelta);
    const { visualElement: c } = i.options;
    (c && c.props.style && c.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Rr(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), hm(e, o)),
      r && Zn(i.latestValues) && Rr(e, i.latestValues));
  }
  t.x < md && t.x > pd && (t.x = 1), t.y < md && t.y > pd && (t.y = 1);
}
function Pr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function gd(e, t, n, r, s = 0.5) {
  const i = Ee(e.min, e.max, s);
  Xa(e, t, n, i, r);
}
function Rr(e, t) {
  gd(e.x, t.x, t.scaleX, t.scale, t.originX),
    gd(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function pm(e, t) {
  return dm($S(e.getBoundingClientRect(), t));
}
function WS(e, t, n) {
  const r = pm(e, n),
    { scroll: s } = t;
  return s && (Pr(r.x, s.offset.x), Pr(r.y, s.offset.y)), r;
}
const mm = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  HS = new WeakMap();
class qS {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = je()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const s = (u) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(yi(u).point);
      },
      i = (u, d) => {
        const { drag: f, dragPropagation: p, onDragStart: m } = this.getProps();
        if (
          f &&
          !p &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = TS(f)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          St((g) => {
            let v = this.getAxisMotionValue(g).get() || 0;
            if (Xt.test(v)) {
              const { projection: b } = this.visualElement;
              if (b && b.layout) {
                const w = b.layout.layoutBox[g];
                w && (v = nt(w) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[g] = v;
          }),
          m && Ce.postRender(() => m(u, d)),
          Va(this.visualElement, "transform");
        const { animationState: h } = this.visualElement;
        h && h.setActive("whileDrag", !0);
      },
      o = (u, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: p,
          onDirectionLock: m,
          onDrag: h,
        } = this.getProps();
        if (!f && !this.openDragLock) return;
        const { offset: g } = d;
        if (p && this.currentDirection === null) {
          (this.currentDirection = ZS(g)),
            this.currentDirection !== null && m && m(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, g),
          this.updateAxis("y", d.point, g),
          this.visualElement.render(),
          h && h(u, d);
      },
      a = (u, d) => this.stop(u, d),
      c = () =>
        St((u) => {
          var d;
          return (
            this.getAnimationState(u) === "paused" &&
            ((d = this.getAxisMotionValue(u).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: l } = this.getProps();
    this.panSession = new am(
      t,
      {
        onSessionStart: s,
        onStart: i,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: c,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: l,
        contextWindow: mm(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: i } = this.getProps();
    i && Ce.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !Vi(t, s, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = MS(o, this.constraints[t], this.elastic[t])),
      i.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      i = this.constraints;
    n && Cr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && s
      ? (this.constraints = FS(s.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = BS(r)),
      i !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        St((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = VS(s.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Cr(t)) return !1;
    const r = t.current,
      { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const i = WS(r, s.root, this.visualElement.getTransformPagePoint());
    let o = LS(s.layout.layoutBox, i);
    if (n) {
      const a = n(US(o));
      (this.hasMutatedConstraints = !!a), a && (o = dm(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: s,
        dragTransition: i,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      c = this.constraints || {},
      l = St((u) => {
        if (!Vi(u, n, this.currentDirection)) return;
        let d = c[u] || {};
        o && (d = { min: 0, max: 0 });
        const f = s ? 200 : 1e6,
          p = s ? 40 : 1e7,
          m = {
            type: "inertia",
            velocity: r ? t[u] : 0,
            bounceStiffness: f,
            bounceDamping: p,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(u, m);
      });
    return Promise.all(l).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Va(this.visualElement, t), r.start(Cl(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    St((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    St((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      s = r[n];
    return (
      s ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    St((n) => {
      const { drag: r } = this.getProps();
      if (!Vi(n, r, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n];
        i.set(t[n] - Ee(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Cr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    St((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const c = a.get();
        s[o] = IS({ min: c, max: c }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      St((o) => {
        if (!Vi(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: c, max: l } = this.constraints[o];
        a.set(Ee(c, l, s[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    HS.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Os(t, "pointerdown", (c) => {
        const { drag: l, dragListener: u = !0 } = this.getProps();
        l && u && this.start(c);
      }),
      r = () => {
        const { dragConstraints: c } = this.getProps();
        Cr(c) && c.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: s } = this.visualElement,
      i = s.addEventListener("measure", r);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      Ce.read(r);
    const o = $s(window, "resize", () => this.scalePositionWithinConstraints()),
      a = s.addEventListener(
        "didUpdate",
        ({ delta: c, hasLayoutChanged: l }) => {
          this.isDragging &&
            l &&
            (St((u) => {
              const d = this.getAxisMotionValue(u);
              d &&
                ((this.originPoint[u] += c[u].translate),
                d.set(d.get() + c[u].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: s = !1,
        dragConstraints: i = !1,
        dragElastic: o = Ka,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: i,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function Vi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function ZS(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class GS extends $n {
  constructor(t) {
    super(t),
      (this.removeGroupControls = gt),
      (this.removeListeners = gt),
      (this.controls = new qS(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || gt);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const yd = (e) => (t, n) => {
  e && Ce.postRender(() => e(t, n));
};
class KS extends $n {
  constructor() {
    super(...arguments), (this.removePointerDownListener = gt);
  }
  onPointerDown(t) {
    this.session = new am(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: mm(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: s,
    } = this.node.getProps();
    return {
      onSessionStart: yd(t),
      onStart: yd(n),
      onMove: r,
      onEnd: (i, o) => {
        delete this.session, s && Ce.postRender(() => s(i, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Os(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Gi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function vd(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const xs = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (Y.test(e)) e = parseFloat(e);
        else return e;
      const n = vd(e, t.target.x),
        r = vd(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  QS = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        s = jn.parse(e);
      if (s.length > 5) return r;
      const i = jn.createTransformer(e),
        o = typeof s[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        c = n.y.scale * t.y;
      (s[0 + o] /= a), (s[1 + o] /= c);
      const l = Ee(a, c, 0.5);
      return (
        typeof s[2 + o] == "number" && (s[2 + o] /= l),
        typeof s[3 + o] == "number" && (s[3 + o] /= l),
        i(s)
      );
    },
  };
class XS extends x.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: s,
      } = this.props,
      { projection: i } = t;
    Tw(YS),
      i &&
        (n.group && n.group.add(i),
        r && r.register && s && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Gi.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: s,
        isPresent: i,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = i),
        s || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? o.promote()
            : o.relegate() ||
              Ce.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Jc.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: s } = t;
    s &&
      (s.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(s),
      r && r.deregister && r.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function gm(e) {
  const [t, n] = np(),
    r = x.useContext(qc);
  return y.jsx(XS, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: x.useContext(lp),
    isPresent: t,
    safeToRemove: n,
  });
}
const YS = {
  borderRadius: {
    ...xs,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: xs,
  borderTopRightRadius: xs,
  borderBottomLeftRadius: xs,
  borderBottomRightRadius: xs,
  boxShadow: QS,
};
function JS(e, t, n) {
  const r = Qe(e) ? e : Bs(e);
  return r.start(Cl("", r, t, n)), r.animation;
}
function e_(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const t_ = (e, t) => e.depth - t.depth;
class n_ {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    dl(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    fl(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(t_),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function r_(e, t) {
  const n = Yt.now(),
    r = ({ timestamp: s }) => {
      const i = s - n;
      i >= t && (Nn(r), e(i - t));
    };
  return Ce.read(r, !0), () => Nn(r);
}
const ym = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  s_ = ym.length,
  xd = (e) => (typeof e == "string" ? parseFloat(e) : e),
  bd = (e) => typeof e == "number" || Y.test(e);
function i_(e, t, n, r, s, i) {
  s
    ? ((e.opacity = Ee(0, n.opacity !== void 0 ? n.opacity : 1, o_(r))),
      (e.opacityExit = Ee(t.opacity !== void 0 ? t.opacity : 1, 0, a_(r))))
    : i &&
      (e.opacity = Ee(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < s_; o++) {
    const a = `border${ym[o]}Radius`;
    let c = wd(t, a),
      l = wd(n, a);
    if (c === void 0 && l === void 0) continue;
    c || (c = 0),
      l || (l = 0),
      c === 0 || l === 0 || bd(c) === bd(l)
        ? ((e[a] = Math.max(Ee(xd(c), xd(l), r), 0)),
          (Xt.test(l) || Xt.test(c)) && (e[a] += "%"))
        : (e[a] = l);
  }
  (t.rotate || n.rotate) && (e.rotate = Ee(t.rotate || 0, n.rotate || 0, r));
}
function wd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const o_ = vm(0, 0.5, Dp),
  a_ = vm(0.5, 0.95, gt);
function vm(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Qr(e, t, r)));
}
function Sd(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function wt(e, t) {
  Sd(e.x, t.x), Sd(e.y, t.y);
}
function _d(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Td(e, t, n, r, s) {
  return (
    (e -= t), (e = ao(e, 1 / n, r)), s !== void 0 && (e = ao(e, 1 / s, r)), e
  );
}
function c_(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (
    (Xt.test(t) &&
      ((t = parseFloat(t)), (t = Ee(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = Ee(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = Td(e.min, t, n, a, s)),
    (e.max = Td(e.max, t, n, a, s));
}
function Cd(e, t, [n, r, s], i, o) {
  c_(e, t[n], t[r], t[s], t.scale, i, o);
}
const l_ = ["x", "scaleX", "originX"],
  u_ = ["y", "scaleY", "originY"];
function Ad(e, t, n, r) {
  Cd(e.x, t, l_, n ? n.x : void 0, r ? r.x : void 0),
    Cd(e.y, t, u_, n ? n.y : void 0, r ? r.y : void 0);
}
function Ed(e) {
  return e.translate === 0 && e.scale === 1;
}
function xm(e) {
  return Ed(e.x) && Ed(e.y);
}
function Pd(e, t) {
  return e.min === t.min && e.max === t.max;
}
function d_(e, t) {
  return Pd(e.x, t.x) && Pd(e.y, t.y);
}
function Rd(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function bm(e, t) {
  return Rd(e.x, t.x) && Rd(e.y, t.y);
}
function kd(e) {
  return nt(e.x) / nt(e.y);
}
function Od(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class f_ {
  constructor() {
    this.members = [];
  }
  add(t) {
    dl(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (fl(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0) return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const i = this.members[s];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: s } = t.options;
      s === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function h_(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x,
    i = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: l,
      rotate: u,
      rotateX: d,
      rotateY: f,
      skewX: p,
      skewY: m,
    } = n;
    l && (r = `perspective(${l}px) ${r}`),
      u && (r += `rotate(${u}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      p && (r += `skewX(${p}deg) `),
      m && (r += `skewY(${m}deg) `);
  }
  const a = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return (a !== 1 || c !== 1) && (r += `scale(${a}, ${c})`), r || "none";
}
const Gn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Ts = typeof window < "u" && window.MotionDebug !== void 0,
  ha = ["", "X", "Y", "Z"],
  p_ = { visibility: "hidden" },
  Nd = 1e3;
let m_ = 0;
function pa(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && ((n[e] = s[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function wm(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Tp(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Ce, !(s || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && wm(r);
}
function Sm({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: s,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = m_++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Ts &&
              (Gn.totalNodes =
                Gn.resolvedTargetDeltas =
                Gn.recalculatedProjection =
                  0),
            this.nodes.forEach(v_),
            this.nodes.forEach(__),
            this.nodes.forEach(T_),
            this.nodes.forEach(x_),
            Ts && window.MotionDebug.record(Gn);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new n_());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new hl()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const c = this.eventHandlers.get(o);
      c && c.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = e_(o)), (this.instance = o);
      const { layoutId: c, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (l || c) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = r_(f, 250)),
            Gi.hasAnimatedSinceResize &&
              ((Gi.hasAnimatedSinceResize = !1), this.nodes.forEach(Dd));
        });
      }
      c && this.root.registerSharedNode(c, this),
        this.options.animate !== !1 &&
          u &&
          (c || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeLayoutChanged: p,
              layout: m,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const h =
                  this.options.transition || u.getDefaultTransition() || R_,
                { onLayoutAnimationStart: g, onLayoutAnimationComplete: v } =
                  u.getProps(),
                b = !this.targetLayout || !bm(this.targetLayout, m),
                w = !f && p;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                w ||
                (f && (b || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, w);
                const T = { ...ul(h, "layout"), onPlay: g, onComplete: v };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((T.delay = 0), (T.type = !1)),
                  this.startAnimation(T);
              } else
                f || Dd(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = m;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Nn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(C_),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          wm(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: c } = this.options;
      if (a === void 0 && !c) return;
      const l = this.getTransformTemplate();
      (this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(jd);
        return;
      }
      this.isUpdating || this.nodes.forEach(w_),
        (this.isUpdating = !1),
        this.nodes.forEach(S_),
        this.nodes.forEach(g_),
        this.nodes.forEach(y_),
        this.clearAllSnapshots();
      const a = Yt.now();
      ($e.delta = pn(0, 1e3 / 60, a - $e.timestamp)),
        ($e.timestamp = a),
        ($e.isProcessing = !0),
        oa.update.process($e),
        oa.preRender.process($e),
        oa.render.process($e),
        ($e.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Jc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(b_), this.sharedNodes.forEach(A_);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Ce.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ce.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !nt(this.snapshot.measuredBox.x) &&
          !nt(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++) this.path[c].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = je()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const c = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: c,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c,
        };
      }
    }
    resetTransform() {
      if (!s) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !xm(this.projectionDelta),
        c = this.getTransformTemplate(),
        l = c ? c(this.latestValues, "") : void 0,
        u = l !== this.prevTransformTemplateValue;
      o &&
        (a || Zn(this.latestValues) || u) &&
        (s(this.instance, l),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let c = this.removeElementScroll(a);
      return (
        o && (c = this.removeTransform(c)),
        k_(c),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: c,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return je();
      const c = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(O_)
        )
      ) {
        const { scroll: u } = this.root;
        u && (Pr(c.x, u.offset.x), Pr(c.y, u.offset.y));
      }
      return c;
    }
    removeElementScroll(o) {
      var a;
      const c = je();
      if (
        (wt(c, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return c;
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: d, options: f } = u;
        u !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && wt(c, o), Pr(c.x, d.offset.x), Pr(c.y, d.offset.y));
      }
      return c;
    }
    applyTransform(o, a = !1) {
      const c = je();
      wt(c, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          Rr(c, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          Zn(u.latestValues) && Rr(c, u.latestValues);
      }
      return Zn(this.latestValues) && Rr(c, this.latestValues), c;
    }
    removeTransform(o) {
      const a = je();
      wt(a, o);
      for (let c = 0; c < this.path.length; c++) {
        const l = this.path[c];
        if (!l.instance || !Zn(l.latestValues)) continue;
        Qa(l.latestValues) && l.updateSnapshot();
        const u = je(),
          d = l.measurePageBox();
        wt(u, d),
          Ad(a, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, u);
      }
      return Zn(this.latestValues) && Ad(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== $e.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const c = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = c.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== c;
      if (
        !(
          o ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = $e.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1
            ? ((this.relativeParent = p),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = je()),
              (this.relativeTargetOrigin = je()),
              js(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                p.layout.layoutBox
              ),
              wt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = je()), (this.targetWithTransforms = je())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                DS(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : wt(this.target, this.layout.layoutBox),
                hm(this.target, this.targetDelta))
              : wt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p &&
            !!p.resumingFrom == !!this.resumingFrom &&
            !p.options.layoutScroll &&
            p.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = je()),
                (this.relativeTargetOrigin = je()),
                js(this.relativeTargetOrigin, this.target, p.target),
                wt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Ts && Gn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Qa(this.parent.latestValues) ||
          fm(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        c = !!this.resumingFrom || this !== a;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (l = !1),
        c &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === $e.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || d))
      )
        return;
      wt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        p = this.treeScale.y;
      zS(this.layoutCorrected, this.treeScale, this.path, c),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = je()));
      const { target: m } = a;
      if (!m) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (_d(this.prevProjectionDelta.x, this.projectionDelta.x),
          _d(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Ns(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== p ||
          !Od(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Od(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", m)),
        Ts && Gn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        o)
      ) {
        const c = this.getStack();
        c && c.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Er()),
        (this.projectionDelta = Er()),
        (this.projectionDeltaWithTransform = Er());
    }
    setAnimationOrigin(o, a = !1) {
      const c = this.snapshot,
        l = c ? c.latestValues : {},
        u = { ...this.latestValues },
        d = Er();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = je(),
        p = c ? c.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        h = p !== m,
        g = this.getStack(),
        v = !g || g.members.length <= 1,
        b = !!(h && !v && this.options.crossfade === !0 && !this.path.some(P_));
      this.animationProgress = 0;
      let w;
      (this.mixTargetDelta = (T) => {
        const S = T / 1e3;
        Md(d.x, o.x, S),
          Md(d.y, o.y, S),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (js(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            E_(this.relativeTarget, this.relativeTargetOrigin, f, S),
            w && d_(this.relativeTarget, w) && (this.isProjectionDirty = !1),
            w || (w = je()),
            wt(w, this.relativeTarget)),
          h &&
            ((this.animationValues = u), i_(u, l, this.latestValues, S, b, v)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Nn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ce.update(() => {
          (Gi.hasAnimatedSinceResize = !0),
            (this.currentAnimation = JS(0, Nd, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Nd),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: c,
        layout: l,
        latestValues: u,
      } = o;
      if (!(!a || !c || !l)) {
        if (
          this !== o &&
          this.layout &&
          l &&
          _m(this.options.animationType, this.layout.layoutBox, l.layoutBox)
        ) {
          c = this.target || je();
          const d = nt(this.layout.layoutBox.x);
          (c.x.min = o.target.x.min), (c.x.max = c.x.min + d);
          const f = nt(this.layout.layoutBox.y);
          (c.y.min = o.target.y.min), (c.y.max = c.y.min + f);
        }
        wt(a, c),
          Rr(a, u),
          Ns(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new f_()),
        this.sharedNodes.get(o).add(a);
      const l = a.options.initialPromotionConfig;
      a.promote({
        transition: l ? l.transition : void 0,
        preserveFollowOpacity:
          l && l.shouldPreserveFollowOpacity
            ? l.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: c } = {}) {
      const l = this.getStack();
      l && l.promote(this, c),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: c } = o;
      if (
        ((c.z ||
          c.rotate ||
          c.rotateX ||
          c.rotateY ||
          c.rotateZ ||
          c.skewX ||
          c.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const l = {};
      c.z && pa("z", o, l, this.animationValues);
      for (let u = 0; u < ha.length; u++)
        pa(`rotate${ha[u]}`, o, l, this.animationValues),
          pa(`skew${ha[u]}`, o, l, this.animationValues);
      o.render();
      for (const u in l)
        o.setStaticValue(u, l[u]),
          this.animationValues && (this.animationValues[u] = l[u]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, c;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return p_;
      const l = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (l.opacity = ""),
          (l.pointerEvents = qi(o == null ? void 0 : o.pointerEvents) || ""),
          (l.transform = u ? u(this.latestValues, "") : "none"),
          l
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const h = {};
        return (
          this.options.layoutId &&
            ((h.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (h.pointerEvents = qi(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !Zn(this.latestValues) &&
            ((h.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          h
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (l.transform = h_(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        u && (l.transform = u(f, l.transform));
      const { x: p, y: m } = this.projectionDelta;
      (l.transformOrigin = `${p.origin * 100}% ${m.origin * 100}% 0`),
        d.animationValues
          ? (l.opacity =
              d === this
                ? (c =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && c !== void 0
                  ? c
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (l.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const h in Vs) {
        if (f[h] === void 0) continue;
        const { correct: g, applyTo: v, isCSSVariable: b } = Vs[h],
          w = l.transform === "none" ? f[h] : g(f[h], d);
        if (v) {
          const T = v.length;
          for (let S = 0; S < T; S++) l[v[S]] = w;
        } else
          b ? (this.options.visualElement.renderState.vars[h] = w) : (l[h] = w);
      }
      return (
        this.options.layoutId &&
          (l.pointerEvents =
            d === this
              ? qi(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        l
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(jd),
        this.root.sharedNodes.clear();
    }
  };
}
function g_(e) {
  e.updateLayout();
}
function y_(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout,
      { animationType: i } = e.options,
      o = n.source !== e.layout.source;
    i === "size"
      ? St((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            p = nt(f);
          (f.min = r[d].min), (f.max = f.min + p);
        })
      : _m(i, n.layoutBox, r) &&
        St((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            p = nt(r[d]);
          (f.max = f.min + p),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + p));
        });
    const a = Er();
    Ns(a, r, n.layoutBox);
    const c = Er();
    o ? Ns(c, e.applyTransform(s, !0), n.measuredBox) : Ns(c, r, n.layoutBox);
    const l = !xm(a);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const m = je();
          js(m, n.layoutBox, f.layoutBox);
          const h = je();
          js(h, r, p.layoutBox),
            bm(m, h) || (u = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = h),
              (e.relativeTargetOrigin = m),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: c,
      layoutDelta: a,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: u,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function v_(e) {
  Ts && Gn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function x_(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function b_(e) {
  e.clearSnapshot();
}
function jd(e) {
  e.clearMeasurements();
}
function w_(e) {
  e.isLayoutDirty = !1;
}
function S_(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Dd(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function __(e) {
  e.resolveTargetDelta();
}
function T_(e) {
  e.calcProjection();
}
function C_(e) {
  e.resetSkewAndRotation();
}
function A_(e) {
  e.removeLeadSnapshot();
}
function Md(e, t, n) {
  (e.translate = Ee(t.translate, 0, n)),
    (e.scale = Ee(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Fd(e, t, n, r) {
  (e.min = Ee(t.min, n.min, r)), (e.max = Ee(t.max, n.max, r));
}
function E_(e, t, n, r) {
  Fd(e.x, t.x, n.x, r), Fd(e.y, t.y, n.y, r);
}
function P_(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const R_ = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ld = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Id = Ld("applewebkit/") && !Ld("chrome/") ? Math.round : gt;
function Vd(e) {
  (e.min = Id(e.min)), (e.max = Id(e.max));
}
function k_(e) {
  Vd(e.x), Vd(e.y);
}
function _m(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !jS(kd(t), kd(n), 0.2))
  );
}
function O_(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const N_ = Sm({
    attachResizeListener: (e, t) => $s(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  ma = { current: void 0 },
  Tm = Sm({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!ma.current) {
        const e = new N_({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (ma.current = e);
      }
      return ma.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  j_ = {
    pan: { Feature: KS },
    drag: { Feature: GS, ProjectionNode: Tm, MeasureLayout: gm },
  };
function D_(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let s = document;
    const i = (r = void 0) !== null && r !== void 0 ? r : s.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function Cm(e, t) {
  const n = D_(e),
    r = new AbortController(),
    s = { passive: !0, ...t, signal: r.signal };
  return [n, s, () => r.abort()];
}
function Bd(e) {
  return !(e.pointerType === "touch" || om());
}
function M_(e, t, n = {}) {
  const [r, s, i] = Cm(e, n),
    o = (a) => {
      if (!Bd(a)) return;
      const { target: c } = a,
        l = t(c, a);
      if (typeof l != "function" || !c) return;
      const u = (d) => {
        Bd(d) && (l(d), c.removeEventListener("pointerleave", u));
      };
      c.addEventListener("pointerleave", u, s);
    };
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, s);
    }),
    i
  );
}
function Ud(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n,
    i = r[s];
  i && Ce.postRender(() => i(t, yi(t)));
}
class F_ extends $n {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = M_(
        t,
        (n, r) => (Ud(this.node, r, "Start"), (s) => Ud(this.node, s, "End"))
      ));
  }
  unmount() {}
}
class L_ extends $n {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = gi(
      $s(this.node.current, "focus", () => this.onFocus()),
      $s(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Am = (e, t) => (t ? (e === t ? !0 : Am(e, t.parentElement)) : !1),
  I_ = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function V_(e) {
  return I_.has(e.tagName) || e.tabIndex !== -1;
}
const Cs = new WeakSet();
function $d(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function ga(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const B_ = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = $d(() => {
    if (Cs.has(n)) return;
    ga(n, "down");
    const s = $d(() => {
        ga(n, "up");
      }),
      i = () => ga(n, "cancel");
    n.addEventListener("keyup", s, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function zd(e) {
  return Al(e) && !om();
}
function U_(e, t, n = {}) {
  const [r, s, i] = Cm(e, n),
    o = (a) => {
      const c = a.currentTarget;
      if (!zd(a) || Cs.has(c)) return;
      Cs.add(c);
      const l = t(c, a),
        u = (p, m) => {
          window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            !(!zd(p) || !Cs.has(c)) &&
              (Cs.delete(c), typeof l == "function" && l(p, { success: m }));
        },
        d = (p) => {
          u(p, n.useGlobalTarget || Am(c, p.target));
        },
        f = (p) => {
          u(p, !1);
        };
      window.addEventListener("pointerup", d, s),
        window.addEventListener("pointercancel", f, s);
    };
  return (
    r.forEach((a) => {
      !V_(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s),
        a.addEventListener("focus", (l) => B_(l, s), s);
    }),
    i
  );
}
function Wd(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n),
    i = r[s];
  i && Ce.postRender(() => i(t, yi(t)));
}
class $_ extends $n {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = U_(
        t,
        (n, r) => (
          Wd(this.node, r, "Start"),
          (s, { success: i }) => Wd(this.node, s, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Ya = new WeakMap(),
  ya = new WeakMap(),
  z_ = (e) => {
    const t = Ya.get(e.target);
    t && t(e);
  },
  W_ = (e) => {
    e.forEach(z_);
  };
function H_({ root: e, ...t }) {
  const n = e || document;
  ya.has(n) || ya.set(n, {});
  const r = ya.get(n),
    s = JSON.stringify(t);
  return r[s] || (r[s] = new IntersectionObserver(W_, { root: e, ...t })), r[s];
}
function q_(e, t, n) {
  const r = H_(t);
  return (
    Ya.set(e, n),
    r.observe(e),
    () => {
      Ya.delete(e), r.unobserve(e);
    }
  );
}
const Z_ = { some: 0, all: 1 };
class G_ extends $n {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: s = "some", once: i } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof s == "number" ? s : Z_[s],
      },
      a = (c) => {
        const { isIntersecting: l } = c;
        if (
          this.isInView === l ||
          ((this.isInView = l), i && !l && this.hasEnteredView)
        )
          return;
        l && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", l);
        const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(),
          f = l ? u : d;
        f && f(c);
      };
    return q_(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(K_(t, n)) && this.startObserver();
  }
  unmount() {}
}
function K_({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Q_ = {
    inView: { Feature: G_ },
    tap: { Feature: $_ },
    focus: { Feature: L_ },
    hover: { Feature: F_ },
  },
  X_ = { layout: { ProjectionNode: Tm, MeasureLayout: gm } },
  Ja = { current: null },
  Em = { current: !1 };
function Y_() {
  if (((Em.current = !0), !!Kc))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Ja.current = e.matches);
      e.addListener(t), t();
    } else Ja.current = !1;
}
const J_ = [...Gp, Ge, jn],
  eT = (e) => J_.find(Zp(e)),
  Hd = new WeakMap();
function tT(e, t, n) {
  for (const r in t) {
    const s = t[r],
      i = n[r];
    if (Qe(s)) e.addValue(r, s);
    else if (Qe(i)) e.addValue(r, Bs(s, { owner: e }));
    else if (i !== s)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Bs(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const qd = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class nT {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: s,
      blockInitialAnimation: i,
      visualState: o,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Sl),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const p = Yt.now();
        this.renderScheduledAt < p &&
          ((this.renderScheduledAt = p), Ce.render(this.render, !1, !0));
      });
    const { latestValues: c, renderState: l, onUpdate: u } = o;
    (this.onUpdate = u),
      (this.latestValues = c),
      (this.baseTarget = { ...c }),
      (this.initialValues = n.initial ? { ...c } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = No(n)),
      (this.isVariantNode = ap(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const p in f) {
      const m = f[p];
      c[p] !== void 0 && Qe(m) && m.set(c[p], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Hd.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Em.current || Y_(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Ja.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Hd.delete(this.current),
      this.projection && this.projection.unmount(),
      Nn(this.notifyUpdate),
      Nn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = xr.has(t),
      s = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && Ce.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        s(), i(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Kr) {
      const n = Kr[t];
      if (!n) continue;
      const { isEnabled: r, Feature: s } = n;
      if (
        (!this.features[t] &&
          s &&
          r(this.props) &&
          (this.features[t] = new s(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : je();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < qd.length; r++) {
      const s = qd[r];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const i = "on" + s,
        o = t[i];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    (this.prevMotionValues = tT(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Bs(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let s =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      s != null &&
        (typeof s == "string" && (Hp(s) || Fp(s))
          ? (s = parseFloat(s))
          : !eT(s) && jn.test(n) && (s = $p(t, n)),
        this.setBaseTarget(t, Qe(s) ? s.get() : s)),
      Qe(s) ? s.get() : s
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let s;
    if (typeof r == "string" || typeof r == "object") {
      const o = tl(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      o && (s = o[t]);
    }
    if (r && s !== void 0) return s;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Qe(i)
      ? i
      : this.initialValues[t] !== void 0 && s === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new hl()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Pm extends nT {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Kp);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Qe(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function rT(e) {
  return window.getComputedStyle(e);
}
class sT extends Pm {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = mp);
  }
  readValueFromInstance(t, n) {
    if (xr.has(n)) {
      const r = wl(n);
      return (r && r.default) || 0;
    } else {
      const r = rT(t),
        s = (nl(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return pm(t, n);
  }
  build(t, n, r) {
    il(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ll(t, n, r);
  }
}
class iT extends Pm {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = je);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (xr.has(n)) {
      const r = wl(n);
      return (r && r.default) || 0;
    }
    return (n = gp.has(n) ? n : Yc(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return xp(t, n, r);
  }
  build(t, n, r) {
    ol(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, s) {
    yp(t, n, r, s);
  }
  mount(t) {
    (this.isSVGTag = cl(t.tagName)), super.mount(t);
  }
}
const oT = (e, t) =>
    el(e) ? new iT(t) : new sT(t, { allowProjection: e !== x.Fragment }),
  aT = jw({ ..._S, ...Q_, ...j_, ...X_ }, oT),
  Ki = Gb(aT);
var va, Zd;
function cT() {
  if (Zd) return va;
  Zd = 1;
  var e = "Expected a function",
    t = NaN,
    n = "[object Symbol]",
    r = /^\s+|\s+$/g,
    s = /^[-+]0x[0-9a-f]+$/i,
    i = /^0b[01]+$/i,
    o = /^0o[0-7]+$/i,
    a = parseInt,
    c = typeof ki == "object" && ki && ki.Object === Object && ki,
    l = typeof self == "object" && self && self.Object === Object && self,
    u = c || l || Function("return this")(),
    d = Object.prototype,
    f = d.toString,
    p = Math.max,
    m = Math.min,
    h = function () {
      return u.Date.now();
    };
  function g(S, E, R) {
    var A,
      N,
      D,
      L,
      j,
      $,
      W = 0,
      ne = !1,
      X = !1,
      Z = !0;
    if (typeof S != "function") throw new TypeError(e);
    (E = T(E) || 0),
      v(R) &&
        ((ne = !!R.leading),
        (X = "maxWait" in R),
        (D = X ? p(T(R.maxWait) || 0, E) : D),
        (Z = "trailing" in R ? !!R.trailing : Z));
    function q(ue) {
      var ye = A,
        Oe = N;
      return (A = N = void 0), (W = ue), (L = S.apply(Oe, ye)), L;
    }
    function se(ue) {
      return (W = ue), (j = setTimeout(He, E)), ne ? q(ue) : L;
    }
    function me(ue) {
      var ye = ue - $,
        Oe = ue - W,
        Ie = E - ye;
      return X ? m(Ie, D - Oe) : Ie;
    }
    function ge(ue) {
      var ye = ue - $,
        Oe = ue - W;
      return $ === void 0 || ye >= E || ye < 0 || (X && Oe >= D);
    }
    function He() {
      var ue = h();
      if (ge(ue)) return dt(ue);
      j = setTimeout(He, me(ue));
    }
    function dt(ue) {
      return (j = void 0), Z && A ? q(ue) : ((A = N = void 0), L);
    }
    function qe() {
      j !== void 0 && clearTimeout(j), (W = 0), (A = $ = N = j = void 0);
    }
    function At() {
      return j === void 0 ? L : dt(h());
    }
    function Ye() {
      var ue = h(),
        ye = ge(ue);
      if (((A = arguments), (N = this), ($ = ue), ye)) {
        if (j === void 0) return se($);
        if (X) return (j = setTimeout(He, E)), q($);
      }
      return j === void 0 && (j = setTimeout(He, E)), L;
    }
    return (Ye.cancel = qe), (Ye.flush = At), Ye;
  }
  function v(S) {
    var E = typeof S;
    return !!S && (E == "object" || E == "function");
  }
  function b(S) {
    return !!S && typeof S == "object";
  }
  function w(S) {
    return typeof S == "symbol" || (b(S) && f.call(S) == n);
  }
  function T(S) {
    if (typeof S == "number") return S;
    if (w(S)) return t;
    if (v(S)) {
      var E = typeof S.valueOf == "function" ? S.valueOf() : S;
      S = v(E) ? E + "" : E;
    }
    if (typeof S != "string") return S === 0 ? S : +S;
    S = S.replace(r, "");
    var R = i.test(S);
    return R || o.test(S) ? a(S.slice(2), R ? 2 : 8) : s.test(S) ? t : +S;
  }
  return (va = g), va;
}
cT();
var lT = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
  uT = typeof window > "u";
function ec(e, { defaultValue: t = !1, initializeWithValue: n = !0 } = {}) {
  const r = (a) => (uT ? t : window.matchMedia(a).matches),
    [s, i] = x.useState(() => (n ? r(e) : t));
  function o() {
    i(r(e));
  }
  return (
    lT(() => {
      const a = window.matchMedia(e);
      return (
        o(),
        a.addListener ? a.addListener(o) : a.addEventListener("change", o),
        () => {
          a.removeListener
            ? a.removeListener(o)
            : a.removeEventListener("change", o);
        }
      );
    }, [e]),
    s
  );
}
const Ik = ({ className: e, stage: t }) => {
  const n = ec("(min-width: 768px");
  return y.jsx("div", {
    className: e,
    children: y.jsx("div", {
      className: "max-w-[808px] md:mx-auto my-20 mx-5",
      children: y.jsxs("div", {
        className: "relative h-14 w-full",
        children: [
          y.jsx("div", {
            className: re(
              "h-2 absolute bg-[#D0D3D8] rounded-[2px] w-full top-0 left-0"
            ),
          }),
          y.jsx(Ki.div, {
            initial: { width: 0 },
            animate: t === 2 ? { width: "20%" } : t === 3 && { width: "75%" },
            transition: { delay: 0.5, duration: 0.5 },
            className: re(
              "h-2 absolute bg-primary rounded-[2px] top-0 left-0 z-[5]",
              {
                "w-0 bg-opacity-0": t === 1,
                "w-[20%]": t === 2,
                "w-[75%]": t === 3,
              }
            ),
          }),
          y.jsx(Ki.div, {
            initial: { width: n ? "50%" : "35%" },
            animate: t === 2 ? { width: "75%" } : t === 3 && { width: "100%" },
            className: re(
              "bg-reverse_primary w-1/2 absolute top-0 left-0 rounded-[2px] z-[3] h-2"
            ),
          }),
          y.jsx(Ki.div, {
            className: re(
              "progress-circle absolute transition-all duration-500 -top-6 flex items-center justify-center",
              {
                "bg-reverse_primary md:left-1/2 left-1/3": t === 1,
                "bg-primary left-[20%] !text-on_primary": t === 2 || t === 3,
              }
            ),
            children: "1",
          }),
          y.jsx("div", {
            className: re(
              "progress-circle absolute -top-6 right-[17%] transition-all -translate-x-1/2 flex items-center justify-center",
              {
                "bg-[#D0D3D8]": t === 1,
                "bg-reverse_primary": t === 2,
                "bg-primary !text-on_primary": t === 3,
              }
            ),
            children: "2",
          }),
          y.jsx("div", {
            className: re(
              "progress-circle absolute -top-6 right-0 transition-all duration-500 flex items-center justify-center",
              {
                "bg-[#D0D3D8]": t === 1 || t === 2,
                "bg-reverse_primary": t === 3,
              }
            ),
            children: "3",
          }),
        ],
      }),
    }),
  });
};
var vi = (e) => e.type === "checkbox",
  Qn = (e) => e instanceof Date,
  tt = (e) => e == null;
const Rm = (e) => typeof e == "object";
var Fe = (e) => !tt(e) && !Array.isArray(e) && Rm(e) && !Qn(e),
  km = (e) =>
    Fe(e) && e.target ? (vi(e.target) ? e.target.checked : e.target.value) : e,
  dT = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  Om = (e, t) => e.has(dT(t)),
  fT = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return Fe(t) && t.hasOwnProperty("isPrototypeOf");
  },
  El =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function ot(e) {
  let t;
  const n = Array.isArray(e),
    r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (!(El && (e instanceof Blob || r)) && (n || Fe(e)))
    if (((t = n ? [] : {}), !n && !fT(e))) t = e;
    else for (const s in e) e.hasOwnProperty(s) && (t[s] = ot(e[s]));
  else return e;
  return t;
}
var Mo = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  De = (e) => e === void 0,
  V = (e, t, n) => {
    if (!t || !Fe(e)) return n;
    const r = Mo(t.split(/[,[\].]+?/)).reduce((s, i) => (tt(s) ? s : s[i]), e);
    return De(r) || r === e ? (De(e[t]) ? n : e[t]) : r;
  },
  Ct = (e) => typeof e == "boolean",
  Pl = (e) => /^\w*$/.test(e),
  Nm = (e) => Mo(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  xe = (e, t, n) => {
    let r = -1;
    const s = Pl(t) ? [t] : Nm(t),
      i = s.length,
      o = i - 1;
    for (; ++r < i; ) {
      const a = s[r];
      let c = n;
      if (r !== o) {
        const l = e[a];
        c = Fe(l) || Array.isArray(l) ? l : isNaN(+s[r + 1]) ? {} : [];
      }
      if (a === "__proto__" || a === "constructor" || a === "prototype") return;
      (e[a] = c), (e = e[a]);
    }
    return e;
  };
const co = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  Ot = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  an = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  jm = ve.createContext(null),
  Fo = () => ve.useContext(jm),
  hT = (e) => {
    const { children: t, ...n } = e;
    return ve.createElement(jm.Provider, { value: n }, t);
  };
var Dm = (e, t, n, r = !0) => {
    const s = { defaultValues: t._defaultValues };
    for (const i in e)
      Object.defineProperty(s, i, {
        get: () => {
          const o = i;
          return (
            t._proxyFormState[o] !== Ot.all &&
              (t._proxyFormState[o] = !r || Ot.all),
            n && (n[o] = !0),
            e[o]
          );
        },
      });
    return s;
  },
  ct = (e) => Fe(e) && !Object.keys(e).length,
  Mm = (e, t, n, r) => {
    n(e);
    const { name: s, ...i } = e;
    return (
      ct(i) ||
      Object.keys(i).length >= Object.keys(t).length ||
      Object.keys(i).find((o) => t[o] === (!r || Ot.all))
    );
  },
  Ds = (e) => (Array.isArray(e) ? e : [e]),
  Fm = (e, t, n) =>
    !e ||
    !t ||
    e === t ||
    Ds(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function Rl(e) {
  const t = ve.useRef(e);
  (t.current = e),
    ve.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
function pT(e) {
  const t = Fo(),
    { control: n = t.control, disabled: r, name: s, exact: i } = e,
    [o, a] = ve.useState(n._formState),
    c = ve.useRef(!0),
    l = ve.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    u = ve.useRef(s);
  return (
    (u.current = s),
    Rl({
      disabled: r,
      next: (d) =>
        c.current &&
        Fm(u.current, d.name, i) &&
        Mm(d, l.current, n._updateFormState) &&
        a({ ...n._formState, ...d }),
      subject: n._subjects.state,
    }),
    ve.useEffect(
      () => (
        (c.current = !0),
        l.current.isValid && n._updateValid(!0),
        () => {
          c.current = !1;
        }
      ),
      [n]
    ),
    ve.useMemo(() => Dm(o, n, l.current, !1), [o, n])
  );
}
var Qt = (e) => typeof e == "string",
  Lm = (e, t, n, r, s) =>
    Qt(e)
      ? (r && t.watch.add(e), V(n, e, s))
      : Array.isArray(e)
      ? e.map((i) => (r && t.watch.add(i), V(n, i)))
      : (r && (t.watchAll = !0), n);
function mT(e) {
  const t = Fo(),
    {
      control: n = t.control,
      name: r,
      defaultValue: s,
      disabled: i,
      exact: o,
    } = e,
    a = ve.useRef(r);
  (a.current = r),
    Rl({
      disabled: i,
      subject: n._subjects.values,
      next: (u) => {
        Fm(a.current, u.name, o) &&
          l(ot(Lm(a.current, n._names, u.values || n._formValues, !1, s)));
      },
    });
  const [c, l] = ve.useState(n._getWatch(r, s));
  return ve.useEffect(() => n._removeUnmounted()), c;
}
function gT(e) {
  const t = Fo(),
    { name: n, disabled: r, control: s = t.control, shouldUnregister: i } = e,
    o = Om(s._names.array, n),
    a = mT({
      control: s,
      name: n,
      defaultValue: V(s._formValues, n, V(s._defaultValues, n, e.defaultValue)),
      exact: !0,
    }),
    c = pT({ control: s, name: n, exact: !0 }),
    l = ve.useRef(
      s.register(n, {
        ...e.rules,
        value: a,
        ...(Ct(e.disabled) ? { disabled: e.disabled } : {}),
      })
    ),
    u = ve.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!V(c.errors, n) },
            isDirty: { enumerable: !0, get: () => !!V(c.dirtyFields, n) },
            isTouched: { enumerable: !0, get: () => !!V(c.touchedFields, n) },
            isValidating: {
              enumerable: !0,
              get: () => !!V(c.validatingFields, n),
            },
            error: { enumerable: !0, get: () => V(c.errors, n) },
          }
        ),
      [c, n]
    ),
    d = ve.useMemo(
      () => ({
        name: n,
        value: a,
        ...(Ct(r) || c.disabled ? { disabled: c.disabled || r } : {}),
        onChange: (f) =>
          l.current.onChange({
            target: { value: km(f), name: n },
            type: co.CHANGE,
          }),
        onBlur: () =>
          l.current.onBlur({
            target: { value: V(s._formValues, n), name: n },
            type: co.BLUR,
          }),
        ref: (f) => {
          const p = V(s._fields, n);
          p &&
            f &&
            (p._f.ref = {
              focus: () => f.focus(),
              select: () => f.select(),
              setCustomValidity: (m) => f.setCustomValidity(m),
              reportValidity: () => f.reportValidity(),
            });
        },
      }),
      [n, s._formValues, r, c.disabled, a, s._fields]
    );
  return (
    ve.useEffect(() => {
      const f = s._options.shouldUnregister || i,
        p = (m, h) => {
          const g = V(s._fields, m);
          g && g._f && (g._f.mount = h);
        };
      if ((p(n, !0), f)) {
        const m = ot(V(s._options.defaultValues, n));
        xe(s._defaultValues, n, m),
          De(V(s._formValues, n)) && xe(s._formValues, n, m);
      }
      return (
        !o && s.register(n),
        () => {
          (o ? f && !s._state.action : f) ? s.unregister(n) : p(n, !1);
        }
      );
    }, [n, s, o, i]),
    ve.useEffect(() => {
      s._updateDisabledField({ disabled: r, fields: s._fields, name: n });
    }, [r, n, s]),
    ve.useMemo(() => ({ field: d, formState: c, fieldState: u }), [d, c, u])
  );
}
const yT = (e) => e.render(gT(e));
var Im = (e, t, n, r, s) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: s || !0 },
        }
      : {},
  Gd = (e) => ({
    isOnSubmit: !e || e === Ot.onSubmit,
    isOnBlur: e === Ot.onBlur,
    isOnChange: e === Ot.onChange,
    isOnAll: e === Ot.all,
    isOnTouch: e === Ot.onTouched,
  }),
  Kd = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
      ));
const Ms = (e, t, n, r) => {
  for (const s of n || Object.keys(e)) {
    const i = V(e, s);
    if (i) {
      const { _f: o, ...a } = i;
      if (o) {
        if (o.refs && o.refs[0] && t(o.refs[0], s) && !r) return !0;
        if (o.ref && t(o.ref, o.name) && !r) return !0;
        if (Ms(a, t)) break;
      } else if (Fe(a) && Ms(a, t)) break;
    }
  }
};
var vT = (e, t, n) => {
    const r = Ds(V(e, n));
    return xe(r, "root", t[n]), xe(e, n, r), e;
  },
  kl = (e) => e.type === "file",
  Kt = (e) => typeof e == "function",
  lo = (e) => {
    if (!El) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  Qi = (e) => Qt(e),
  Ol = (e) => e.type === "radio",
  uo = (e) => e instanceof RegExp;
const Qd = { value: !1, isValid: !1 },
  Xd = { value: !0, isValid: !0 };
var Vm = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !De(e[0].attributes.value)
        ? De(e[0].value) || e[0].value === ""
          ? Xd
          : { value: e[0].value, isValid: !0 }
        : Xd
      : Qd;
  }
  return Qd;
};
const Yd = { isValid: !1, value: null };
var Bm = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        Yd
      )
    : Yd;
function Jd(e, t, n = "validate") {
  if (Qi(e) || (Array.isArray(e) && e.every(Qi)) || (Ct(e) && !e))
    return { type: n, message: Qi(e) ? e : "", ref: t };
}
var _r = (e) => (Fe(e) && !uo(e) ? e : { value: e, message: "" }),
  ef = async (e, t, n, r, s, i) => {
    const {
        ref: o,
        refs: a,
        required: c,
        maxLength: l,
        minLength: u,
        min: d,
        max: f,
        pattern: p,
        validate: m,
        name: h,
        valueAsNumber: g,
        mount: v,
      } = e._f,
      b = V(n, h);
    if (!v || t.has(h)) return {};
    const w = a ? a[0] : o,
      T = (j) => {
        s &&
          w.reportValidity &&
          (w.setCustomValidity(Ct(j) ? "" : j || ""), w.reportValidity());
      },
      S = {},
      E = Ol(o),
      R = vi(o),
      A = E || R,
      N =
        ((g || kl(o)) && De(o.value) && De(b)) ||
        (lo(o) && o.value === "") ||
        b === "" ||
        (Array.isArray(b) && !b.length),
      D = Im.bind(null, h, r, S),
      L = (j, $, W, ne = an.maxLength, X = an.minLength) => {
        const Z = j ? $ : W;
        S[h] = { type: j ? ne : X, message: Z, ref: o, ...D(j ? ne : X, Z) };
      };
    if (
      i
        ? !Array.isArray(b) || !b.length
        : c &&
          ((!A && (N || tt(b))) ||
            (Ct(b) && !b) ||
            (R && !Vm(a).isValid) ||
            (E && !Bm(a).isValid))
    ) {
      const { value: j, message: $ } = Qi(c)
        ? { value: !!c, message: c }
        : _r(c);
      if (
        j &&
        ((S[h] = {
          type: an.required,
          message: $,
          ref: w,
          ...D(an.required, $),
        }),
        !r)
      )
        return T($), S;
    }
    if (!N && (!tt(d) || !tt(f))) {
      let j, $;
      const W = _r(f),
        ne = _r(d);
      if (!tt(b) && !isNaN(b)) {
        const X = o.valueAsNumber || (b && +b);
        tt(W.value) || (j = X > W.value), tt(ne.value) || ($ = X < ne.value);
      } else {
        const X = o.valueAsDate || new Date(b),
          Z = (me) => new Date(new Date().toDateString() + " " + me),
          q = o.type == "time",
          se = o.type == "week";
        Qt(W.value) &&
          b &&
          (j = q
            ? Z(b) > Z(W.value)
            : se
            ? b > W.value
            : X > new Date(W.value)),
          Qt(ne.value) &&
            b &&
            ($ = q
              ? Z(b) < Z(ne.value)
              : se
              ? b < ne.value
              : X < new Date(ne.value));
      }
      if ((j || $) && (L(!!j, W.message, ne.message, an.max, an.min), !r))
        return T(S[h].message), S;
    }
    if ((l || u) && !N && (Qt(b) || (i && Array.isArray(b)))) {
      const j = _r(l),
        $ = _r(u),
        W = !tt(j.value) && b.length > +j.value,
        ne = !tt($.value) && b.length < +$.value;
      if ((W || ne) && (L(W, j.message, $.message), !r))
        return T(S[h].message), S;
    }
    if (p && !N && Qt(b)) {
      const { value: j, message: $ } = _r(p);
      if (
        uo(j) &&
        !b.match(j) &&
        ((S[h] = { type: an.pattern, message: $, ref: o, ...D(an.pattern, $) }),
        !r)
      )
        return T($), S;
    }
    if (m) {
      if (Kt(m)) {
        const j = await m(b, n),
          $ = Jd(j, w);
        if ($ && ((S[h] = { ...$, ...D(an.validate, $.message) }), !r))
          return T($.message), S;
      } else if (Fe(m)) {
        let j = {};
        for (const $ in m) {
          if (!ct(j) && !r) break;
          const W = Jd(await m[$](b, n), w, $);
          W &&
            ((j = { ...W, ...D($, W.message) }), T(W.message), r && (S[h] = j));
        }
        if (!ct(j) && ((S[h] = { ref: w, ...j }), !r)) return S;
      }
    }
    return T(!0), S;
  };
function xT(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = De(e) ? r++ : e[t[r++]];
  return e;
}
function bT(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !De(e[t])) return !1;
  return !0;
}
function Be(e, t) {
  const n = Array.isArray(t) ? t : Pl(t) ? [t] : Nm(t),
    r = n.length === 1 ? e : xT(e, n),
    s = n.length - 1,
    i = n[s];
  return (
    r && delete r[i],
    s !== 0 &&
      ((Fe(r) && ct(r)) || (Array.isArray(r) && bT(r))) &&
      Be(e, n.slice(0, -1)),
    e
  );
}
var xa = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (s) => {
        for (const i of e) i.next && i.next(s);
      },
      subscribe: (s) => (
        e.push(s),
        {
          unsubscribe: () => {
            e = e.filter((i) => i !== s);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  tc = (e) => tt(e) || !Rm(e);
function _n(e, t) {
  if (tc(e) || tc(t)) return e === t;
  if (Qn(e) && Qn(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const s of n) {
    const i = e[s];
    if (!r.includes(s)) return !1;
    if (s !== "ref") {
      const o = t[s];
      if (
        (Qn(i) && Qn(o)) ||
        (Fe(i) && Fe(o)) ||
        (Array.isArray(i) && Array.isArray(o))
          ? !_n(i, o)
          : i !== o
      )
        return !1;
    }
  }
  return !0;
}
var Um = (e) => e.type === "select-multiple",
  wT = (e) => Ol(e) || vi(e),
  ba = (e) => lo(e) && e.isConnected,
  $m = (e) => {
    for (const t in e) if (Kt(e[t])) return !0;
    return !1;
  };
function fo(e, t = {}) {
  const n = Array.isArray(e);
  if (Fe(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (Fe(e[r]) && !$m(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), fo(e[r], t[r]))
        : tt(e[r]) || (t[r] = !0);
  return t;
}
function zm(e, t, n) {
  const r = Array.isArray(e);
  if (Fe(e) || r)
    for (const s in e)
      Array.isArray(e[s]) || (Fe(e[s]) && !$m(e[s]))
        ? De(t) || tc(n[s])
          ? (n[s] = Array.isArray(e[s]) ? fo(e[s], []) : { ...fo(e[s]) })
          : zm(e[s], tt(t) ? {} : t[s], n[s])
        : (n[s] = !_n(e[s], t[s]));
  return n;
}
var bs = (e, t) => zm(e, t, fo(t)),
  Wm = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    De(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : n && Qt(e)
      ? new Date(e)
      : r
      ? r(e)
      : e;
function wa(e) {
  const t = e.ref;
  return kl(t)
    ? t.files
    : Ol(t)
    ? Bm(e.refs).value
    : Um(t)
    ? [...t.selectedOptions].map(({ value: n }) => n)
    : vi(t)
    ? Vm(e.refs).value
    : Wm(De(t.value) ? e.ref.value : t.value, e);
}
var ST = (e, t, n, r) => {
    const s = {};
    for (const i of e) {
      const o = V(t, i);
      o && xe(s, i, o._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: s,
      shouldUseNativeValidation: r,
    };
  },
  ws = (e) =>
    De(e)
      ? e
      : uo(e)
      ? e.source
      : Fe(e)
      ? uo(e.value)
        ? e.value.source
        : e.value
      : e;
const tf = "AsyncFunction";
var _T = (e) =>
    !!e &&
    !!e.validate &&
    !!(
      (Kt(e.validate) && e.validate.constructor.name === tf) ||
      (Fe(e.validate) &&
        Object.values(e.validate).find((t) => t.constructor.name === tf))
    ),
  TT = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function nf(e, t, n) {
  const r = V(e, n);
  if (r || Pl(n)) return { error: r, name: n };
  const s = n.split(".");
  for (; s.length; ) {
    const i = s.join("."),
      o = V(t, i),
      a = V(e, i);
    if (o && !Array.isArray(o) && n !== i) return { name: n };
    if (a && a.type) return { name: i, error: a };
    s.pop();
  }
  return { name: n };
}
var CT = (e, t, n, r, s) =>
    s.isOnAll
      ? !1
      : !n && s.isOnTouch
      ? !(t || e)
      : (n ? r.isOnBlur : s.isOnBlur)
      ? !e
      : (n ? r.isOnChange : s.isOnChange)
      ? e
      : !0,
  AT = (e, t) => !Mo(V(e, t)).length && Be(e, t);
const ET = {
  mode: Ot.onSubmit,
  reValidateMode: Ot.onChange,
  shouldFocusError: !0,
};
function PT(e = {}) {
  let t = { ...ET, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Kt(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    r = {},
    s =
      Fe(t.defaultValues) || Fe(t.values)
        ? ot(t.defaultValues || t.values) || {}
        : {},
    i = t.shouldUnregister ? {} : ot(s),
    o = { action: !1, mount: !1, watch: !1 },
    a = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    c,
    l = 0;
  const u = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    d = { values: xa(), array: xa(), state: xa() },
    f = Gd(t.mode),
    p = Gd(t.reValidateMode),
    m = t.criteriaMode === Ot.all,
    h = (_) => (P) => {
      clearTimeout(l), (l = setTimeout(_, P));
    },
    g = async (_) => {
      if (!t.disabled && (u.isValid || _)) {
        const P = t.resolver ? ct((await A()).errors) : await D(r, !0);
        P !== n.isValid && d.state.next({ isValid: P });
      }
    },
    v = (_, P) => {
      !t.disabled &&
        (u.isValidating || u.validatingFields) &&
        ((_ || Array.from(a.mount)).forEach((O) => {
          O && (P ? xe(n.validatingFields, O, P) : Be(n.validatingFields, O));
        }),
        d.state.next({
          validatingFields: n.validatingFields,
          isValidating: !ct(n.validatingFields),
        }));
    },
    b = (_, P = [], O, B, I = !0, F = !0) => {
      if (B && O && !t.disabled) {
        if (((o.action = !0), F && Array.isArray(V(r, _)))) {
          const Q = O(V(r, _), B.argA, B.argB);
          I && xe(r, _, Q);
        }
        if (F && Array.isArray(V(n.errors, _))) {
          const Q = O(V(n.errors, _), B.argA, B.argB);
          I && xe(n.errors, _, Q), AT(n.errors, _);
        }
        if (u.touchedFields && F && Array.isArray(V(n.touchedFields, _))) {
          const Q = O(V(n.touchedFields, _), B.argA, B.argB);
          I && xe(n.touchedFields, _, Q);
        }
        u.dirtyFields && (n.dirtyFields = bs(s, i)),
          d.state.next({
            name: _,
            isDirty: j(_, P),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          });
      } else xe(i, _, P);
    },
    w = (_, P) => {
      xe(n.errors, _, P), d.state.next({ errors: n.errors });
    },
    T = (_) => {
      (n.errors = _), d.state.next({ errors: n.errors, isValid: !1 });
    },
    S = (_, P, O, B) => {
      const I = V(r, _);
      if (I) {
        const F = V(i, _, De(O) ? V(s, _) : O);
        De(F) || (B && B.defaultChecked) || P
          ? xe(i, _, P ? F : wa(I._f))
          : ne(_, F),
          o.mount && g();
      }
    },
    E = (_, P, O, B, I) => {
      let F = !1,
        Q = !1;
      const ae = { name: _ };
      if (!t.disabled) {
        const Ve = !!(V(r, _) && V(r, _)._f && V(r, _)._f.disabled);
        if (!O || B) {
          u.isDirty &&
            ((Q = n.isDirty),
            (n.isDirty = ae.isDirty = j()),
            (F = Q !== ae.isDirty));
          const Ne = Ve || _n(V(s, _), P);
          (Q = !!(!Ve && V(n.dirtyFields, _))),
            Ne || Ve ? Be(n.dirtyFields, _) : xe(n.dirtyFields, _, !0),
            (ae.dirtyFields = n.dirtyFields),
            (F = F || (u.dirtyFields && Q !== !Ne));
        }
        if (O) {
          const Ne = V(n.touchedFields, _);
          Ne ||
            (xe(n.touchedFields, _, O),
            (ae.touchedFields = n.touchedFields),
            (F = F || (u.touchedFields && Ne !== O)));
        }
        F && I && d.state.next(ae);
      }
      return F ? ae : {};
    },
    R = (_, P, O, B) => {
      const I = V(n.errors, _),
        F = u.isValid && Ct(P) && n.isValid !== P;
      if (
        (t.delayError && O
          ? ((c = h(() => w(_, O))), c(t.delayError))
          : (clearTimeout(l),
            (c = null),
            O ? xe(n.errors, _, O) : Be(n.errors, _)),
        (O ? !_n(I, O) : I) || !ct(B) || F)
      ) {
        const Q = {
          ...B,
          ...(F && Ct(P) ? { isValid: P } : {}),
          errors: n.errors,
          name: _,
        };
        (n = { ...n, ...Q }), d.state.next(Q);
      }
    },
    A = async (_) => {
      v(_, !0);
      const P = await t.resolver(
        i,
        t.context,
        ST(_ || a.mount, r, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return v(_), P;
    },
    N = async (_) => {
      const { errors: P } = await A(_);
      if (_)
        for (const O of _) {
          const B = V(P, O);
          B ? xe(n.errors, O, B) : Be(n.errors, O);
        }
      else n.errors = P;
      return P;
    },
    D = async (_, P, O = { valid: !0 }) => {
      for (const B in _) {
        const I = _[B];
        if (I) {
          const { _f: F, ...Q } = I;
          if (F) {
            const ae = a.array.has(F.name),
              Ve = I._f && _T(I._f);
            Ve && u.validatingFields && v([B], !0);
            const Ne = await ef(
              I,
              a.disabled,
              i,
              m,
              t.shouldUseNativeValidation && !P,
              ae
            );
            if (
              (Ve && u.validatingFields && v([B]),
              Ne[F.name] && ((O.valid = !1), P))
            )
              break;
            !P &&
              (V(Ne, F.name)
                ? ae
                  ? vT(n.errors, Ne, F.name)
                  : xe(n.errors, F.name, Ne[F.name])
                : Be(n.errors, F.name));
          }
          !ct(Q) && (await D(Q, P, O));
        }
      }
      return O.valid;
    },
    L = () => {
      for (const _ of a.unMount) {
        const P = V(r, _);
        P &&
          (P._f.refs ? P._f.refs.every((O) => !ba(O)) : !ba(P._f.ref)) &&
          Ye(_);
      }
      a.unMount = new Set();
    },
    j = (_, P) => !t.disabled && (_ && P && xe(i, _, P), !_n(ge(), s)),
    $ = (_, P, O) =>
      Lm(_, a, { ...(o.mount ? i : De(P) ? s : Qt(_) ? { [_]: P } : P) }, O, P),
    W = (_) => Mo(V(o.mount ? i : s, _, t.shouldUnregister ? V(s, _, []) : [])),
    ne = (_, P, O = {}) => {
      const B = V(r, _);
      let I = P;
      if (B) {
        const F = B._f;
        F &&
          (!F.disabled && xe(i, _, Wm(P, F)),
          (I = lo(F.ref) && tt(P) ? "" : P),
          Um(F.ref)
            ? [...F.ref.options].forEach(
                (Q) => (Q.selected = I.includes(Q.value))
              )
            : F.refs
            ? vi(F.ref)
              ? F.refs.length > 1
                ? F.refs.forEach(
                    (Q) =>
                      (!Q.defaultChecked || !Q.disabled) &&
                      (Q.checked = Array.isArray(I)
                        ? !!I.find((ae) => ae === Q.value)
                        : I === Q.value)
                  )
                : F.refs[0] && (F.refs[0].checked = !!I)
              : F.refs.forEach((Q) => (Q.checked = Q.value === I))
            : kl(F.ref)
            ? (F.ref.value = "")
            : ((F.ref.value = I),
              F.ref.type || d.values.next({ name: _, values: { ...i } })));
      }
      (O.shouldDirty || O.shouldTouch) &&
        E(_, I, O.shouldTouch, O.shouldDirty, !0),
        O.shouldValidate && me(_);
    },
    X = (_, P, O) => {
      for (const B in P) {
        const I = P[B],
          F = `${_}.${B}`,
          Q = V(r, F);
        (a.array.has(_) || Fe(I) || (Q && !Q._f)) && !Qn(I)
          ? X(F, I, O)
          : ne(F, I, O);
      }
    },
    Z = (_, P, O = {}) => {
      const B = V(r, _),
        I = a.array.has(_),
        F = ot(P);
      xe(i, _, F),
        I
          ? (d.array.next({ name: _, values: { ...i } }),
            (u.isDirty || u.dirtyFields) &&
              O.shouldDirty &&
              d.state.next({
                name: _,
                dirtyFields: bs(s, i),
                isDirty: j(_, F),
              }))
          : B && !B._f && !tt(F)
          ? X(_, F, O)
          : ne(_, F, O),
        Kd(_, a) && d.state.next({ ...n }),
        d.values.next({ name: o.mount ? _ : void 0, values: { ...i } });
    },
    q = async (_) => {
      o.mount = !0;
      const P = _.target;
      let O = P.name,
        B = !0;
      const I = V(r, O),
        F = () => (P.type ? wa(I._f) : km(_)),
        Q = (ae) => {
          B =
            Number.isNaN(ae) ||
            (Qn(ae) && isNaN(ae.getTime())) ||
            _n(ae, V(i, O, ae));
        };
      if (I) {
        let ae, Ve;
        const Ne = F(),
          Ut = _.type === co.BLUR || _.type === co.FOCUS_OUT,
          ps =
            (!TT(I._f) && !t.resolver && !V(n.errors, O) && !I._f.deps) ||
            CT(Ut, V(n.touchedFields, O), n.isSubmitted, p, f),
          $t = Kd(O, a, Ut);
        xe(i, O, Ne),
          Ut
            ? (I._f.onBlur && I._f.onBlur(_), c && c(0))
            : I._f.onChange && I._f.onChange(_);
        const Wn = E(O, Ne, Ut, !1),
          ms = !ct(Wn) || $t;
        if (
          (!Ut && d.values.next({ name: O, type: _.type, values: { ...i } }),
          ps)
        )
          return (
            u.isValid && (t.mode === "onBlur" && Ut ? g() : Ut || g()),
            ms && d.state.next({ name: O, ...($t ? {} : Wn) })
          );
        if ((!Ut && $t && d.state.next({ ...n }), t.resolver)) {
          const { errors: Hn } = await A([O]);
          if ((Q(Ne), B)) {
            const Ko = nf(n.errors, r, O),
              Pi = nf(Hn, r, Ko.name || O);
            (ae = Pi.error), (O = Pi.name), (Ve = ct(Hn));
          }
        } else
          v([O], !0),
            (ae = (await ef(I, a.disabled, i, m, t.shouldUseNativeValidation))[
              O
            ]),
            v([O]),
            Q(Ne),
            B && (ae ? (Ve = !1) : u.isValid && (Ve = await D(r, !0)));
        B && (I._f.deps && me(I._f.deps), R(O, Ve, ae, Wn));
      }
    },
    se = (_, P) => {
      if (V(n.errors, P) && _.focus) return _.focus(), 1;
    },
    me = async (_, P = {}) => {
      let O, B;
      const I = Ds(_);
      if (t.resolver) {
        const F = await N(De(_) ? _ : I);
        (O = ct(F)), (B = _ ? !I.some((Q) => V(F, Q)) : O);
      } else
        _
          ? ((B = (
              await Promise.all(
                I.map(async (F) => {
                  const Q = V(r, F);
                  return await D(Q && Q._f ? { [F]: Q } : Q);
                })
              )
            ).every(Boolean)),
            !(!B && !n.isValid) && g())
          : (B = O = await D(r));
      return (
        d.state.next({
          ...(!Qt(_) || (u.isValid && O !== n.isValid) ? {} : { name: _ }),
          ...(t.resolver || !_ ? { isValid: O } : {}),
          errors: n.errors,
        }),
        P.shouldFocus && !B && Ms(r, se, _ ? I : a.mount),
        B
      );
    },
    ge = (_) => {
      const P = { ...(o.mount ? i : s) };
      return De(_) ? P : Qt(_) ? V(P, _) : _.map((O) => V(P, O));
    },
    He = (_, P) => ({
      invalid: !!V((P || n).errors, _),
      isDirty: !!V((P || n).dirtyFields, _),
      error: V((P || n).errors, _),
      isValidating: !!V(n.validatingFields, _),
      isTouched: !!V((P || n).touchedFields, _),
    }),
    dt = (_) => {
      _ && Ds(_).forEach((P) => Be(n.errors, P)),
        d.state.next({ errors: _ ? n.errors : {} });
    },
    qe = (_, P, O) => {
      const B = (V(r, _, { _f: {} })._f || {}).ref,
        I = V(n.errors, _) || {},
        { ref: F, message: Q, type: ae, ...Ve } = I;
      xe(n.errors, _, { ...Ve, ...P, ref: B }),
        d.state.next({ name: _, errors: n.errors, isValid: !1 }),
        O && O.shouldFocus && B && B.focus && B.focus();
    },
    At = (_, P) =>
      Kt(_)
        ? d.values.subscribe({ next: (O) => _($(void 0, P), O) })
        : $(_, P, !0),
    Ye = (_, P = {}) => {
      for (const O of _ ? Ds(_) : a.mount)
        a.mount.delete(O),
          a.array.delete(O),
          P.keepValue || (Be(r, O), Be(i, O)),
          !P.keepError && Be(n.errors, O),
          !P.keepDirty && Be(n.dirtyFields, O),
          !P.keepTouched && Be(n.touchedFields, O),
          !P.keepIsValidating && Be(n.validatingFields, O),
          !t.shouldUnregister && !P.keepDefaultValue && Be(s, O);
      d.values.next({ values: { ...i } }),
        d.state.next({ ...n, ...(P.keepDirty ? { isDirty: j() } : {}) }),
        !P.keepIsValid && g();
    },
    ue = ({ disabled: _, name: P, field: O, fields: B }) => {
      ((Ct(_) && o.mount) || _ || a.disabled.has(P)) &&
        (_ ? a.disabled.add(P) : a.disabled.delete(P),
        E(P, wa(O ? O._f : V(B, P)._f), !1, !1, !0));
    },
    ye = (_, P = {}) => {
      let O = V(r, _);
      const B = Ct(P.disabled) || Ct(t.disabled);
      return (
        xe(r, _, {
          ...(O || {}),
          _f: {
            ...(O && O._f ? O._f : { ref: { name: _ } }),
            name: _,
            mount: !0,
            ...P,
          },
        }),
        a.mount.add(_),
        O
          ? ue({
              field: O,
              disabled: Ct(P.disabled) ? P.disabled : t.disabled,
              name: _,
            })
          : S(_, !0, P.value),
        {
          ...(B ? { disabled: P.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!P.required,
                min: ws(P.min),
                max: ws(P.max),
                minLength: ws(P.minLength),
                maxLength: ws(P.maxLength),
                pattern: ws(P.pattern),
              }
            : {}),
          name: _,
          onChange: q,
          onBlur: q,
          ref: (I) => {
            if (I) {
              ye(_, P), (O = V(r, _));
              const F =
                  (De(I.value) &&
                    I.querySelectorAll &&
                    I.querySelectorAll("input,select,textarea")[0]) ||
                  I,
                Q = wT(F),
                ae = O._f.refs || [];
              if (Q ? ae.find((Ve) => Ve === F) : F === O._f.ref) return;
              xe(r, _, {
                _f: {
                  ...O._f,
                  ...(Q
                    ? {
                        refs: [
                          ...ae.filter(ba),
                          F,
                          ...(Array.isArray(V(s, _)) ? [{}] : []),
                        ],
                        ref: { type: F.type, name: _ },
                      }
                    : { ref: F }),
                },
              }),
                S(_, !1, void 0, F);
            } else
              (O = V(r, _, {})),
                O._f && (O._f.mount = !1),
                (t.shouldUnregister || P.shouldUnregister) &&
                  !(Om(a.array, _) && o.action) &&
                  a.unMount.add(_);
          },
        }
      );
    },
    Oe = () => t.shouldFocusError && Ms(r, se, a.mount),
    Ie = (_) => {
      Ct(_) &&
        (d.state.next({ disabled: _ }),
        Ms(
          r,
          (P, O) => {
            const B = V(r, O);
            B &&
              ((P.disabled = B._f.disabled || _),
              Array.isArray(B._f.refs) &&
                B._f.refs.forEach((I) => {
                  I.disabled = B._f.disabled || _;
                }));
          },
          0,
          !1
        ));
    },
    we = (_, P) => async (O) => {
      let B;
      O && (O.preventDefault && O.preventDefault(), O.persist && O.persist());
      let I = ot(i);
      if (a.disabled.size) for (const F of a.disabled) xe(I, F, void 0);
      if ((d.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: F, values: Q } = await A();
        (n.errors = F), (I = Q);
      } else await D(r);
      if ((Be(n.errors, "root"), ct(n.errors))) {
        d.state.next({ errors: {} });
        try {
          await _(I, O);
        } catch (F) {
          B = F;
        }
      } else P && (await P({ ...n.errors }, O)), Oe(), setTimeout(Oe);
      if (
        (d.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: ct(n.errors) && !B,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        B)
      )
        throw B;
    },
    G = (_, P = {}) => {
      V(r, _) &&
        (De(P.defaultValue)
          ? Z(_, ot(V(s, _)))
          : (Z(_, P.defaultValue), xe(s, _, ot(P.defaultValue))),
        P.keepTouched || Be(n.touchedFields, _),
        P.keepDirty ||
          (Be(n.dirtyFields, _),
          (n.isDirty = P.defaultValue ? j(_, ot(V(s, _))) : j())),
        P.keepError || (Be(n.errors, _), u.isValid && g()),
        d.state.next({ ...n }));
    },
    de = (_, P = {}) => {
      const O = _ ? ot(_) : s,
        B = ot(O),
        I = ct(_),
        F = I ? s : B;
      if ((P.keepDefaultValues || (s = O), !P.keepValues)) {
        if (P.keepDirtyValues) {
          const Q = new Set([...a.mount, ...Object.keys(bs(s, i))]);
          for (const ae of Array.from(Q))
            V(n.dirtyFields, ae) ? xe(F, ae, V(i, ae)) : Z(ae, V(F, ae));
        } else {
          if (El && De(_))
            for (const Q of a.mount) {
              const ae = V(r, Q);
              if (ae && ae._f) {
                const Ve = Array.isArray(ae._f.refs)
                  ? ae._f.refs[0]
                  : ae._f.ref;
                if (lo(Ve)) {
                  const Ne = Ve.closest("form");
                  if (Ne) {
                    Ne.reset();
                    break;
                  }
                }
              }
            }
          r = {};
        }
        (i = t.shouldUnregister ? (P.keepDefaultValues ? ot(s) : {}) : ot(F)),
          d.array.next({ values: { ...F } }),
          d.values.next({ values: { ...F } });
      }
      (a = {
        mount: P.keepDirtyValues ? a.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (o.mount = !u.isValid || !!P.keepIsValid || !!P.keepDirtyValues),
        (o.watch = !!t.shouldUnregister),
        d.state.next({
          submitCount: P.keepSubmitCount ? n.submitCount : 0,
          isDirty: I
            ? !1
            : P.keepDirty
            ? n.isDirty
            : !!(P.keepDefaultValues && !_n(_, s)),
          isSubmitted: P.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: I
            ? {}
            : P.keepDirtyValues
            ? P.keepDefaultValues && i
              ? bs(s, i)
              : n.dirtyFields
            : P.keepDefaultValues && _
            ? bs(s, _)
            : P.keepDirty
            ? n.dirtyFields
            : {},
          touchedFields: P.keepTouched ? n.touchedFields : {},
          errors: P.keepErrors ? n.errors : {},
          isSubmitSuccessful: P.keepIsSubmitSuccessful
            ? n.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    Se = (_, P) => de(Kt(_) ? _(i) : _, P);
  return {
    control: {
      register: ye,
      unregister: Ye,
      getFieldState: He,
      handleSubmit: we,
      setError: qe,
      _executeSchema: A,
      _getWatch: $,
      _getDirty: j,
      _updateValid: g,
      _removeUnmounted: L,
      _updateFieldArray: b,
      _updateDisabledField: ue,
      _getFieldArray: W,
      _reset: de,
      _resetDefaultValues: () =>
        Kt(t.defaultValues) &&
        t.defaultValues().then((_) => {
          Se(_, t.resetOptions), d.state.next({ isLoading: !1 });
        }),
      _updateFormState: (_) => {
        n = { ...n, ..._ };
      },
      _disableForm: Ie,
      _subjects: d,
      _proxyFormState: u,
      _setErrors: T,
      get _fields() {
        return r;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return o;
      },
      set _state(_) {
        o = _;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return a;
      },
      set _names(_) {
        a = _;
      },
      get _formState() {
        return n;
      },
      set _formState(_) {
        n = _;
      },
      get _options() {
        return t;
      },
      set _options(_) {
        t = { ...t, ..._ };
      },
    },
    trigger: me,
    register: ye,
    handleSubmit: we,
    watch: At,
    setValue: Z,
    getValues: ge,
    reset: Se,
    resetField: G,
    clearErrors: dt,
    unregister: Ye,
    setError: qe,
    setFocus: (_, P = {}) => {
      const O = V(r, _),
        B = O && O._f;
      if (B) {
        const I = B.refs ? B.refs[0] : B.ref;
        I.focus && (I.focus(), P.shouldSelect && Kt(I.select) && I.select());
      }
    },
    getFieldState: He,
  };
}
function RT(e = {}) {
  const t = ve.useRef(void 0),
    n = ve.useRef(void 0),
    [r, s] = ve.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Kt(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: Kt(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...PT(e), formState: r });
  const i = t.current.control;
  return (
    (i._options = e),
    Rl({
      subject: i._subjects.state,
      next: (o) => {
        Mm(o, i._proxyFormState, i._updateFormState, !0) &&
          s({ ...i._formState });
      },
    }),
    ve.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]),
    ve.useEffect(() => {
      if (i._proxyFormState.isDirty) {
        const o = i._getDirty();
        o !== r.isDirty && i._subjects.state.next({ isDirty: o });
      }
    }, [i, r.isDirty]),
    ve.useEffect(() => {
      e.values && !_n(e.values, n.current)
        ? (i._reset(e.values, i._options.resetOptions),
          (n.current = e.values),
          s((o) => ({ ...o })))
        : i._resetDefaultValues();
    }, [e.values, i]),
    ve.useEffect(() => {
      e.errors && i._setErrors(e.errors);
    }, [e.errors, i]),
    ve.useEffect(() => {
      i._state.mount || (i._updateValid(), (i._state.mount = !0)),
        i._state.watch &&
          ((i._state.watch = !1), i._subjects.state.next({ ...i._formState })),
        i._removeUnmounted();
    }),
    ve.useEffect(() => {
      e.shouldUnregister && i._subjects.values.next({ values: i._getWatch() });
    }, [e.shouldUnregister, i]),
    (t.current.formState = Dm(r, i)),
    t.current
  );
}
var kT = "Label",
  Hm = x.forwardRef((e, t) =>
    y.jsx(it.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var s;
        n.target.closest("button, input, select, textarea") ||
          ((s = e.onMouseDown) == null || s.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    })
  );
Hm.displayName = kT;
var qm = Hm;
const OT = Wc(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  Zm = x.forwardRef(({ className: e, ...t }, n) =>
    y.jsx(qm, { ref: n, className: re(OT(), e), ...t })
  );
Zm.displayName = qm.displayName;
const Vk = hT,
  Gm = x.createContext({}),
  NT = ({ ...e }) =>
    y.jsx(Gm.Provider, {
      value: { name: e.name },
      children: y.jsx(yT, { ...e }),
    }),
  Lo = () => {
    const e = x.useContext(Gm),
      t = x.useContext(Km),
      { getFieldState: n, formState: r } = Fo(),
      s = n(e.name, r);
    if (!e) throw new Error("useFormField should be used within <FormField>");
    const { id: i } = t;
    return {
      id: i,
      name: e.name,
      formItemId: `${i}-form-item`,
      formDescriptionId: `${i}-form-item-description`,
      formMessageId: `${i}-form-item-message`,
      ...s,
    };
  },
  Km = x.createContext({}),
  Qm = x.forwardRef(({ className: e, ...t }, n) => {
    const r = x.useId();
    return y.jsx(Km.Provider, {
      value: { id: r },
      children: y.jsx("div", { ref: n, className: re("space-y-2", e), ...t }),
    });
  });
Qm.displayName = "FormItem";
const Xm = x.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: s } = Lo();
  return y.jsx(Zm, {
    ref: n,
    className: re(r && "text-destructive", e),
    htmlFor: s,
    ...t,
  });
});
Xm.displayName = "FormLabel";
const Ym = x.forwardRef(({ ...e }, t) => {
  const {
    error: n,
    formItemId: r,
    formDescriptionId: s,
    formMessageId: i,
  } = Lo();
  return y.jsx(rs, {
    ref: t,
    id: r,
    "aria-describedby": n ? `${s} ${i}` : `${s}`,
    "aria-invalid": !!n,
    ...e,
  });
});
Ym.displayName = "FormControl";
const jT = x.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = Lo();
  return y.jsx("p", {
    ref: n,
    id: r,
    className: re("text-[0.8rem] text-muted-foreground", e),
    ...t,
  });
});
jT.displayName = "FormDescription";
const Jm = x.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: s, formMessageId: i } = Lo(),
    o = s ? String(s == null ? void 0 : s.message) : t;
  return o
    ? y.jsx("p", {
        ref: r,
        id: i,
        className: re("text-[0.8rem] font-medium text-destructive", e),
        ...n,
        children: o,
      })
    : null;
});
Jm.displayName = "FormMessage";
const nc = x.forwardRef(({ className: e, type: t, ...n }, r) =>
  t !== "file"
    ? y.jsx("input", {
        type: t,
        className: re(
          "flex h-14 rounded-[2px] border p-4 focus:border-[3px] focus:outline-none focus:border-primary transition-all hover:border-on_surface border-outline bg-transparent text-base w-regular file:border-0 file:bg-secondary_container file:outline-none file:text-sm file:w-fit file:text-on_secondary_container file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          e
        ),
        ref: r,
        ...n,
      })
    : y.jsxs("div", {
        className: "relative w-[160px] h-9 overflow-hidden !cursor-pointer",
        children: [
          y.jsx("input", {
            ref: r,
            accept: ".pdf, .png, .jpeg, .jpg",
            type: t,
            className: re(
              "h-9 absolute top-0 left-0 !cursor-pointer opacity-0 z-20 size-full"
            ),
            ...n,
          }),
          y.jsxs("div", {
            className:
              "absolute rounded-[2px] cursor-pointer size-full flex items-center gap-4 px-3 py-2.5 top-0 left-0 bg-secondary_container",
            children: [
              y.jsx(Fx, { className: "cursor-pointer", size: 16 }),
              " Upload file",
            ],
          }),
        ],
      })
);
nc.displayName = "Input";
const eg = x.forwardRef(({ className: e, ...t }, n) =>
  y.jsx("textarea", {
    className: re(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ref: n,
    ...t,
  })
);
eg.displayName = "Textarea";
const Bk = ({
    control: e,
    name: t,
    label: n,
    placeholder: r,
    error: s,
    type: i = "text",
    className: o,
    disabled: a,
    textArea: c = !1,
    textDark: l,
    supporText: u,
    handleChange: d,
    onPrimary: f = !1,
  }) =>
    y.jsx(NT, {
      control: e,
      name: t,
      render: ({ field: p }) =>
        y.jsxs(Qm, {
          className: re(o, "flex flex-col w-full relative"),
          children: [
            y.jsx(Xm, {
              className: re(
                "text-xl",
                f && "!text-on_primary",
                l ? "text-on_surface" : "text-on_surface_v"
              ),
              children: n,
            }),
            y.jsx(Ym, {
              children: y.jsx(y.Fragment, {
                children: c
                  ? y.jsx(eg, {
                      rows: 3,
                      ...p,
                      placeholder: r,
                      className: re(
                        s && "border-[#BA1A1A]",
                        f &&
                          "border-primary_outline_reverse focus:border-white hover:border-white focus:border-1 text-on_primary"
                      ),
                    })
                  : i !== "file"
                  ? y.jsx(nc, {
                      ...p,
                      type: i,
                      placeholder: r,
                      disabled: a,
                      className: re(
                        s && "border-[#BA1A1A]",
                        f &&
                          "border-primary_outline_reverse focus:border-white hover:border-white focus:border-1 text-on_primary"
                      ),
                    })
                  : y.jsxs("div", {
                      className: "relative",
                      children: [
                        y.jsx(nc, {
                          type: "file",
                          placeholder: r,
                          onChange: (m) => {
                            var g;
                            const h =
                              ((g = m.target.files) == null ? void 0 : g[0]) ||
                              null;
                            console.log("Выбранный файл:", h),
                              p.onChange(h),
                              d && d(m);
                          },
                          disabled: a,
                        }),
                        p.value &&
                          y.jsxs("div", {
                            className:
                              "text-sm mt-2 text-gray-500 absolute top-8",
                            children: ["Выбранный файл: ", p.value.name],
                          }),
                      ],
                    }),
              }),
            }),
            y.jsx(Jm, {
              className: re(
                "absolute -bottom-5 left-0 text-sm font-medium leading-[130%]",
                s && f ? "text-teritary_04" : "text-[#BA1A1A]"
              ),
              children: s ? s.message : u,
            }),
          ],
        }),
    }),
  Uk = ({ className: e, delay: t = 0.15 }) =>
    y.jsxs(Ki.div, {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0, transition: { delay: t } },
      className: re("flex flex-col gap-8 my-16", e),
      children: [
        y.jsx("h3", {
          className: "text-3xl text-center",
          children: "Форма успешно отправлена!",
        }),
        y.jsx(Me, {
          className: "w-fit mx-auto",
          to: "/",
          children: y.jsx(ut, {
            variant: "outline",
            children: "Вернуться на главную",
          }),
        }),
      ],
    }),
  DT = ({ className: e, slides: t, active: n, scrollTo: r }) =>
    y.jsx("div", {
      className: re("flex items-center justify-center gap-2", e),
      children: Array.from({ length: t }).map((s, i) =>
        y.jsx(
          "span",
          {
            onClick: () => (r == null ? void 0 : r(i)),
            className: re(n === i ? "dot-active" : "dot"),
          },
          i
        )
      ),
    }),
  MT = ["top", "right", "bottom", "left"],
  Dn = Math.min,
  ht = Math.max,
  ho = Math.round,
  Bi = Math.floor,
  Jt = (e) => ({ x: e, y: e }),
  FT = { left: "right", right: "left", bottom: "top", top: "bottom" },
  LT = { start: "end", end: "start" };
function rc(e, t, n) {
  return ht(e, Dn(t, n));
}
function mn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gn(e) {
  return e.split("-")[0];
}
function cs(e) {
  return e.split("-")[1];
}
function Nl(e) {
  return e === "x" ? "y" : "x";
}
function jl(e) {
  return e === "y" ? "height" : "width";
}
function Mn(e) {
  return ["top", "bottom"].includes(gn(e)) ? "y" : "x";
}
function Dl(e) {
  return Nl(Mn(e));
}
function IT(e, t, n) {
  n === void 0 && (n = !1);
  const r = cs(e),
    s = Dl(e),
    i = jl(s);
  let o =
    s === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (o = po(o)), [o, po(o)];
}
function VT(e) {
  const t = po(e);
  return [sc(e), t, sc(t)];
}
function sc(e) {
  return e.replace(/start|end/g, (t) => LT[t]);
}
function BT(e, t, n) {
  const r = ["left", "right"],
    s = ["right", "left"],
    i = ["top", "bottom"],
    o = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? s : r) : t ? r : s;
    case "left":
    case "right":
      return t ? i : o;
    default:
      return [];
  }
}
function UT(e, t, n, r) {
  const s = cs(e);
  let i = BT(gn(e), n === "start", r);
  return (
    s && ((i = i.map((o) => o + "-" + s)), t && (i = i.concat(i.map(sc)))), i
  );
}
function po(e) {
  return e.replace(/left|right|bottom|top/g, (t) => FT[t]);
}
function $T(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function tg(e) {
  return typeof e != "number"
    ? $T(e)
    : { top: e, right: e, bottom: e, left: e };
}
function mo(e) {
  const { x: t, y: n, width: r, height: s } = e;
  return {
    width: r,
    height: s,
    top: n,
    left: t,
    right: t + r,
    bottom: n + s,
    x: t,
    y: n,
  };
}
function rf(e, t, n) {
  let { reference: r, floating: s } = e;
  const i = Mn(t),
    o = Dl(t),
    a = jl(o),
    c = gn(t),
    l = i === "y",
    u = r.x + r.width / 2 - s.width / 2,
    d = r.y + r.height / 2 - s.height / 2,
    f = r[a] / 2 - s[a] / 2;
  let p;
  switch (c) {
    case "top":
      p = { x: u, y: r.y - s.height };
      break;
    case "bottom":
      p = { x: u, y: r.y + r.height };
      break;
    case "right":
      p = { x: r.x + r.width, y: d };
      break;
    case "left":
      p = { x: r.x - s.width, y: d };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (cs(t)) {
    case "start":
      p[o] -= f * (n && l ? -1 : 1);
      break;
    case "end":
      p[o] += f * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const zT = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: s = "absolute",
      middleware: i = [],
      platform: o,
    } = n,
    a = i.filter(Boolean),
    c = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let l = await o.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: u, y: d } = rf(l, r, c),
    f = r,
    p = {},
    m = 0;
  for (let h = 0; h < a.length; h++) {
    const { name: g, fn: v } = a[h],
      {
        x: b,
        y: w,
        data: T,
        reset: S,
      } = await v({
        x: u,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: s,
        middlewareData: p,
        rects: l,
        platform: o,
        elements: { reference: e, floating: t },
      });
    (u = b ?? u),
      (d = w ?? d),
      (p = { ...p, [g]: { ...p[g], ...T } }),
      S &&
        m <= 50 &&
        (m++,
        typeof S == "object" &&
          (S.placement && (f = S.placement),
          S.rects &&
            (l =
              S.rects === !0
                ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: s,
                  })
                : S.rects),
          ({ x: u, y: d } = rf(l, f, c))),
        (h = -1));
  }
  return { x: u, y: d, placement: f, strategy: s, middlewareData: p };
};
async function zs(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: s, platform: i, rects: o, elements: a, strategy: c } = e,
    {
      boundary: l = "clippingAncestors",
      rootBoundary: u = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: p = 0,
    } = mn(t, e),
    m = tg(p),
    g = a[f ? (d === "floating" ? "reference" : "floating") : d],
    v = mo(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(g))) == null ||
          n
            ? g
            : g.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: l,
        rootBoundary: u,
        strategy: c,
      })
    ),
    b =
      d === "floating"
        ? { x: r, y: s, width: o.floating.width, height: o.floating.height }
        : o.reference,
    w = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    T = (await (i.isElement == null ? void 0 : i.isElement(w)))
      ? (await (i.getScale == null ? void 0 : i.getScale(w))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = mo(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: b,
            offsetParent: w,
            strategy: c,
          })
        : b
    );
  return {
    top: (v.top - S.top + m.top) / T.y,
    bottom: (S.bottom - v.bottom + m.bottom) / T.y,
    left: (v.left - S.left + m.left) / T.x,
    right: (S.right - v.right + m.right) / T.x,
  };
}
const WT = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: s,
          rects: i,
          platform: o,
          elements: a,
          middlewareData: c,
        } = t,
        { element: l, padding: u = 0 } = mn(e, t) || {};
      if (l == null) return {};
      const d = tg(u),
        f = { x: n, y: r },
        p = Dl(s),
        m = jl(p),
        h = await o.getDimensions(l),
        g = p === "y",
        v = g ? "top" : "left",
        b = g ? "bottom" : "right",
        w = g ? "clientHeight" : "clientWidth",
        T = i.reference[m] + i.reference[p] - f[p] - i.floating[m],
        S = f[p] - i.reference[p],
        E = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
      let R = E ? E[w] : 0;
      (!R || !(await (o.isElement == null ? void 0 : o.isElement(E)))) &&
        (R = a.floating[w] || i.floating[m]);
      const A = T / 2 - S / 2,
        N = R / 2 - h[m] / 2 - 1,
        D = Dn(d[v], N),
        L = Dn(d[b], N),
        j = D,
        $ = R - h[m] - L,
        W = R / 2 - h[m] / 2 + A,
        ne = rc(j, W, $),
        X =
          !c.arrow &&
          cs(s) != null &&
          W !== ne &&
          i.reference[m] / 2 - (W < j ? D : L) - h[m] / 2 < 0,
        Z = X ? (W < j ? W - j : W - $) : 0;
      return {
        [p]: f[p] + Z,
        data: {
          [p]: ne,
          centerOffset: W - ne - Z,
          ...(X && { alignmentOffset: Z }),
        },
        reset: X,
      };
    },
  }),
  HT = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: s,
              middlewareData: i,
              rects: o,
              initialPlacement: a,
              platform: c,
              elements: l,
            } = t,
            {
              mainAxis: u = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: p = "bestFit",
              fallbackAxisSideDirection: m = "none",
              flipAlignment: h = !0,
              ...g
            } = mn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const v = gn(s),
            b = Mn(a),
            w = gn(a) === a,
            T = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)),
            S = f || (w || !h ? [po(a)] : VT(a)),
            E = m !== "none";
          !f && E && S.push(...UT(a, h, m, T));
          const R = [a, ...S],
            A = await zs(t, g),
            N = [];
          let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((u && N.push(A[v]), d)) {
            const W = IT(s, o, T);
            N.push(A[W[0]], A[W[1]]);
          }
          if (
            ((D = [...D, { placement: s, overflows: N }]),
            !N.every((W) => W <= 0))
          ) {
            var L, j;
            const W = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1,
              ne = R[W];
            if (ne)
              return {
                data: { index: W, overflows: D },
                reset: { placement: ne },
              };
            let X =
              (j = D.filter((Z) => Z.overflows[0] <= 0).sort(
                (Z, q) => Z.overflows[1] - q.overflows[1]
              )[0]) == null
                ? void 0
                : j.placement;
            if (!X)
              switch (p) {
                case "bestFit": {
                  var $;
                  const Z =
                    ($ = D.filter((q) => {
                      if (E) {
                        const se = Mn(q.placement);
                        return se === b || se === "y";
                      }
                      return !0;
                    })
                      .map((q) => [
                        q.placement,
                        q.overflows
                          .filter((se) => se > 0)
                          .reduce((se, me) => se + me, 0),
                      ])
                      .sort((q, se) => q[1] - se[1])[0]) == null
                      ? void 0
                      : $[0];
                  Z && (X = Z);
                  break;
                }
                case "initialPlacement":
                  X = a;
                  break;
              }
            if (s !== X) return { reset: { placement: X } };
          }
          return {};
        },
      }
    );
  };
function sf(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function of(e) {
  return MT.some((t) => e[t] >= 0);
}
const qT = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...s } = mn(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await zs(t, { ...s, elementContext: "reference" }),
              o = sf(i, n.reference);
            return {
              data: { referenceHiddenOffsets: o, referenceHidden: of(o) },
            };
          }
          case "escaped": {
            const i = await zs(t, { ...s, altBoundary: !0 }),
              o = sf(i, n.floating);
            return { data: { escapedOffsets: o, escaped: of(o) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function ZT(e, t) {
  const { placement: n, platform: r, elements: s } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)),
    o = gn(n),
    a = cs(n),
    c = Mn(n) === "y",
    l = ["left", "top"].includes(o) ? -1 : 1,
    u = i && c ? -1 : 1,
    d = mn(t, e);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: m,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    a && typeof m == "number" && (p = a === "end" ? m * -1 : m),
    c ? { x: p * u, y: f * l } : { x: f * l, y: p * u }
  );
}
const GT = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: s, y: i, placement: o, middlewareData: a } = t,
            c = await ZT(t, e);
          return o === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: s + c.x, y: i + c.y, data: { ...c, placement: o } };
        },
      }
    );
  },
  KT = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: s } = t,
            {
              mainAxis: i = !0,
              crossAxis: o = !1,
              limiter: a = {
                fn: (g) => {
                  let { x: v, y: b } = g;
                  return { x: v, y: b };
                },
              },
              ...c
            } = mn(e, t),
            l = { x: n, y: r },
            u = await zs(t, c),
            d = Mn(gn(s)),
            f = Nl(d);
          let p = l[f],
            m = l[d];
          if (i) {
            const g = f === "y" ? "top" : "left",
              v = f === "y" ? "bottom" : "right",
              b = p + u[g],
              w = p - u[v];
            p = rc(b, p, w);
          }
          if (o) {
            const g = d === "y" ? "top" : "left",
              v = d === "y" ? "bottom" : "right",
              b = m + u[g],
              w = m - u[v];
            m = rc(b, m, w);
          }
          const h = a.fn({ ...t, [f]: p, [d]: m });
          return {
            ...h,
            data: { x: h.x - n, y: h.y - r, enabled: { [f]: i, [d]: o } },
          };
        },
      }
    );
  },
  QT = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: s, rects: i, middlewareData: o } = t,
            { offset: a = 0, mainAxis: c = !0, crossAxis: l = !0 } = mn(e, t),
            u = { x: n, y: r },
            d = Mn(s),
            f = Nl(d);
          let p = u[f],
            m = u[d];
          const h = mn(a, t),
            g =
              typeof h == "number"
                ? { mainAxis: h, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...h };
          if (c) {
            const w = f === "y" ? "height" : "width",
              T = i.reference[f] - i.floating[w] + g.mainAxis,
              S = i.reference[f] + i.reference[w] - g.mainAxis;
            p < T ? (p = T) : p > S && (p = S);
          }
          if (l) {
            var v, b;
            const w = f === "y" ? "width" : "height",
              T = ["top", "left"].includes(gn(s)),
              S =
                i.reference[d] -
                i.floating[w] +
                ((T && ((v = o.offset) == null ? void 0 : v[d])) || 0) +
                (T ? 0 : g.crossAxis),
              E =
                i.reference[d] +
                i.reference[w] +
                (T ? 0 : ((b = o.offset) == null ? void 0 : b[d]) || 0) -
                (T ? g.crossAxis : 0);
            m < S ? (m = S) : m > E && (m = E);
          }
          return { [f]: p, [d]: m };
        },
      }
    );
  },
  XT = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: s, rects: i, platform: o, elements: a } = t,
            { apply: c = () => {}, ...l } = mn(e, t),
            u = await zs(t, l),
            d = gn(s),
            f = cs(s),
            p = Mn(s) === "y",
            { width: m, height: h } = i.floating;
          let g, v;
          d === "top" || d === "bottom"
            ? ((g = d),
              (v =
                f ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((v = d), (g = f === "end" ? "top" : "bottom"));
          const b = h - u.top - u.bottom,
            w = m - u.left - u.right,
            T = Dn(h - u[g], b),
            S = Dn(m - u[v], w),
            E = !t.middlewareData.shift;
          let R = T,
            A = S;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (A = w),
            (r = t.middlewareData.shift) != null && r.enabled.y && (R = b),
            E && !f)
          ) {
            const D = ht(u.left, 0),
              L = ht(u.right, 0),
              j = ht(u.top, 0),
              $ = ht(u.bottom, 0);
            p
              ? (A = m - 2 * (D !== 0 || L !== 0 ? D + L : ht(u.left, u.right)))
              : (R =
                  h - 2 * (j !== 0 || $ !== 0 ? j + $ : ht(u.top, u.bottom)));
          }
          await c({ ...t, availableWidth: A, availableHeight: R });
          const N = await o.getDimensions(a.floating);
          return m !== N.width || h !== N.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Io() {
  return typeof window < "u";
}
function ls(e) {
  return ng(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function yt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function sn(e) {
  var t;
  return (t = (ng(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function ng(e) {
  return Io() ? e instanceof Node || e instanceof yt(e).Node : !1;
}
function Mt(e) {
  return Io() ? e instanceof Element || e instanceof yt(e).Element : !1;
}
function tn(e) {
  return Io() ? e instanceof HTMLElement || e instanceof yt(e).HTMLElement : !1;
}
function af(e) {
  return !Io() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof yt(e).ShadowRoot;
}
function xi(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: s } = Ft(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(s)
  );
}
function YT(e) {
  return ["table", "td", "th"].includes(ls(e));
}
function Vo(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Ml(e) {
  const t = Fl(),
    n = Mt(e) ? Ft(e) : e;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((r) =>
      n[r] ? n[r] !== "none" : !1
    ) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (r) => (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function JT(e) {
  let t = Fn(e);
  for (; tn(t) && !Yr(t); ) {
    if (Ml(t)) return t;
    if (Vo(t)) return null;
    t = Fn(t);
  }
  return null;
}
function Fl() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Yr(e) {
  return ["html", "body", "#document"].includes(ls(e));
}
function Ft(e) {
  return yt(e).getComputedStyle(e);
}
function Bo(e) {
  return Mt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Fn(e) {
  if (ls(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (af(e) && e.host) || sn(e);
  return af(t) ? t.host : t;
}
function rg(e) {
  const t = Fn(e);
  return Yr(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : tn(t) && xi(t)
    ? t
    : rg(t);
}
function Ws(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = rg(e),
    i = s === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = yt(s);
  if (i) {
    const a = ic(o);
    return t.concat(
      o,
      o.visualViewport || [],
      xi(s) ? s : [],
      a && n ? Ws(a) : []
    );
  }
  return t.concat(s, Ws(s, [], n));
}
function ic(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function sg(e) {
  const t = Ft(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const s = tn(e),
    i = s ? e.offsetWidth : n,
    o = s ? e.offsetHeight : r,
    a = ho(n) !== i || ho(r) !== o;
  return a && ((n = i), (r = o)), { width: n, height: r, $: a };
}
function Ll(e) {
  return Mt(e) ? e : e.contextElement;
}
function jr(e) {
  const t = Ll(e);
  if (!tn(t)) return Jt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: s, $: i } = sg(t);
  let o = (i ? ho(n.width) : n.width) / r,
    a = (i ? ho(n.height) : n.height) / s;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: o, y: a }
  );
}
const eC = Jt(0);
function ig(e) {
  const t = yt(e);
  return !Fl() || !t.visualViewport
    ? eC
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function tC(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== yt(e)) ? !1 : t;
}
function fr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(),
    i = Ll(e);
  let o = Jt(1);
  t && (r ? Mt(r) && (o = jr(r)) : (o = jr(e)));
  const a = tC(i, n, r) ? ig(i) : Jt(0);
  let c = (s.left + a.x) / o.x,
    l = (s.top + a.y) / o.y,
    u = s.width / o.x,
    d = s.height / o.y;
  if (i) {
    const f = yt(i),
      p = r && Mt(r) ? yt(r) : r;
    let m = f,
      h = ic(m);
    for (; h && r && p !== m; ) {
      const g = jr(h),
        v = h.getBoundingClientRect(),
        b = Ft(h),
        w = v.left + (h.clientLeft + parseFloat(b.paddingLeft)) * g.x,
        T = v.top + (h.clientTop + parseFloat(b.paddingTop)) * g.y;
      (c *= g.x),
        (l *= g.y),
        (u *= g.x),
        (d *= g.y),
        (c += w),
        (l += T),
        (m = yt(h)),
        (h = ic(m));
    }
  }
  return mo({ width: u, height: d, x: c, y: l });
}
function Il(e, t) {
  const n = Bo(e).scrollLeft;
  return t ? t.left + n : fr(sn(e)).left + n;
}
function og(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    s = r.left + t.scrollLeft - (n ? 0 : Il(e, r)),
    i = r.top + t.scrollTop;
  return { x: s, y: i };
}
function nC(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: s } = e;
  const i = s === "fixed",
    o = sn(r),
    a = t ? Vo(t.floating) : !1;
  if (r === o || (a && i)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = Jt(1);
  const u = Jt(0),
    d = tn(r);
  if (
    (d || (!d && !i)) &&
    ((ls(r) !== "body" || xi(o)) && (c = Bo(r)), tn(r))
  ) {
    const p = fr(r);
    (l = jr(r)), (u.x = p.x + r.clientLeft), (u.y = p.y + r.clientTop);
  }
  const f = o && !d && !i ? og(o, c, !0) : Jt(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
  };
}
function rC(e) {
  return Array.from(e.getClientRects());
}
function sC(e) {
  const t = sn(e),
    n = Bo(e),
    r = e.ownerDocument.body,
    s = ht(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = ht(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + Il(e);
  const a = -n.scrollTop;
  return (
    Ft(r).direction === "rtl" && (o += ht(t.clientWidth, r.clientWidth) - s),
    { width: s, height: i, x: o, y: a }
  );
}
function iC(e, t) {
  const n = yt(e),
    r = sn(e),
    s = n.visualViewport;
  let i = r.clientWidth,
    o = r.clientHeight,
    a = 0,
    c = 0;
  if (s) {
    (i = s.width), (o = s.height);
    const l = Fl();
    (!l || (l && t === "fixed")) && ((a = s.offsetLeft), (c = s.offsetTop));
  }
  return { width: i, height: o, x: a, y: c };
}
function oC(e, t) {
  const n = fr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    s = n.left + e.clientLeft,
    i = tn(e) ? jr(e) : Jt(1),
    o = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    c = s * i.x,
    l = r * i.y;
  return { width: o, height: a, x: c, y: l };
}
function cf(e, t, n) {
  let r;
  if (t === "viewport") r = iC(e, n);
  else if (t === "document") r = sC(sn(e));
  else if (Mt(t)) r = oC(t, n);
  else {
    const s = ig(e);
    r = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
  }
  return mo(r);
}
function ag(e, t) {
  const n = Fn(e);
  return n === t || !Mt(n) || Yr(n)
    ? !1
    : Ft(n).position === "fixed" || ag(n, t);
}
function aC(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Ws(e, [], !1).filter((a) => Mt(a) && ls(a) !== "body"),
    s = null;
  const i = Ft(e).position === "fixed";
  let o = i ? Fn(e) : e;
  for (; Mt(o) && !Yr(o); ) {
    const a = Ft(o),
      c = Ml(o);
    !c && a.position === "fixed" && (s = null),
      (
        i
          ? !c && !s
          : (!c &&
              a.position === "static" &&
              !!s &&
              ["absolute", "fixed"].includes(s.position)) ||
            (xi(o) && !c && ag(e, o))
      )
        ? (r = r.filter((u) => u !== o))
        : (s = a),
      (o = Fn(o));
  }
  return t.set(e, r), r;
}
function cC(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: s } = e;
  const o = [
      ...(n === "clippingAncestors"
        ? Vo(t)
          ? []
          : aC(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = o[0],
    c = o.reduce((l, u) => {
      const d = cf(t, u, s);
      return (
        (l.top = ht(d.top, l.top)),
        (l.right = Dn(d.right, l.right)),
        (l.bottom = Dn(d.bottom, l.bottom)),
        (l.left = ht(d.left, l.left)),
        l
      );
    }, cf(t, a, s));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top,
  };
}
function lC(e) {
  const { width: t, height: n } = sg(e);
  return { width: t, height: n };
}
function uC(e, t, n) {
  const r = tn(t),
    s = sn(t),
    i = n === "fixed",
    o = fr(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const c = Jt(0);
  if (r || (!r && !i))
    if (((ls(t) !== "body" || xi(s)) && (a = Bo(t)), r)) {
      const f = fr(t, !0, i, t);
      (c.x = f.x + t.clientLeft), (c.y = f.y + t.clientTop);
    } else s && (c.x = Il(s));
  const l = s && !r && !i ? og(s, a) : Jt(0),
    u = o.left + a.scrollLeft - c.x - l.x,
    d = o.top + a.scrollTop - c.y - l.y;
  return { x: u, y: d, width: o.width, height: o.height };
}
function Sa(e) {
  return Ft(e).position === "static";
}
function lf(e, t) {
  if (!tn(e) || Ft(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return sn(e) === n && (n = n.ownerDocument.body), n;
}
function cg(e, t) {
  const n = yt(e);
  if (Vo(e)) return n;
  if (!tn(e)) {
    let s = Fn(e);
    for (; s && !Yr(s); ) {
      if (Mt(s) && !Sa(s)) return s;
      s = Fn(s);
    }
    return n;
  }
  let r = lf(e, t);
  for (; r && YT(r) && Sa(r); ) r = lf(r, t);
  return r && Yr(r) && Sa(r) && !Ml(r) ? n : r || JT(e) || n;
}
const dC = async function (e) {
  const t = this.getOffsetParent || cg,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: uC(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function fC(e) {
  return Ft(e).direction === "rtl";
}
const hC = {
  convertOffsetParentRelativeRectToViewportRelativeRect: nC,
  getDocumentElement: sn,
  getClippingRect: cC,
  getOffsetParent: cg,
  getElementRects: dC,
  getClientRects: rC,
  getDimensions: lC,
  getScale: jr,
  isElement: Mt,
  isRTL: fC,
};
function lg(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function pC(e, t) {
  let n = null,
    r;
  const s = sn(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function o(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), i();
    const l = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: p } = l;
    if ((a || t(), !f || !p)) return;
    const m = Bi(d),
      h = Bi(s.clientWidth - (u + f)),
      g = Bi(s.clientHeight - (d + p)),
      v = Bi(u),
      w = {
        rootMargin: -m + "px " + -h + "px " + -g + "px " + -v + "px",
        threshold: ht(0, Dn(1, c)) || 1,
      };
    let T = !0;
    function S(E) {
      const R = E[0].intersectionRatio;
      if (R !== c) {
        if (!T) return o();
        R
          ? o(!1, R)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      R === 1 && !lg(l, e.getBoundingClientRect()) && o(), (T = !1);
    }
    try {
      n = new IntersectionObserver(S, { ...w, root: s.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, w);
    }
    n.observe(e);
  }
  return o(!0), i;
}
function mC(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: i = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: c = !1,
    } = r,
    l = Ll(e),
    u = s || i ? [...(l ? Ws(l) : []), ...Ws(t)] : [];
  u.forEach((v) => {
    s && v.addEventListener("scroll", n, { passive: !0 }),
      i && v.addEventListener("resize", n);
  });
  const d = l && a ? pC(l, n) : null;
  let f = -1,
    p = null;
  o &&
    ((p = new ResizeObserver((v) => {
      let [b] = v;
      b &&
        b.target === l &&
        p &&
        (p.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var w;
          (w = p) == null || w.observe(t);
        }))),
        n();
    })),
    l && !c && p.observe(l),
    p.observe(t));
  let m,
    h = c ? fr(e) : null;
  c && g();
  function g() {
    const v = fr(e);
    h && !lg(h, v) && n(), (h = v), (m = requestAnimationFrame(g));
  }
  return (
    n(),
    () => {
      var v;
      u.forEach((b) => {
        s && b.removeEventListener("scroll", n),
          i && b.removeEventListener("resize", n);
      }),
        d == null || d(),
        (v = p) == null || v.disconnect(),
        (p = null),
        c && cancelAnimationFrame(m);
    }
  );
}
const gC = GT,
  yC = KT,
  vC = HT,
  xC = XT,
  bC = qT,
  uf = WT,
  wC = QT,
  SC = (e, t, n) => {
    const r = new Map(),
      s = { platform: hC, ...n },
      i = { ...s.platform, _c: r };
    return zT(e, t, { ...s, platform: i });
  };
var Xi = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function go(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!go(e[r], t[r])) return !1;
      return !0;
    }
    if (((s = Object.keys(e)), (n = s.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, s[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = s[r];
      if (!(i === "_owner" && e.$$typeof) && !go(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ug(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function df(e, t) {
  const n = ug(e);
  return Math.round(t * n) / n;
}
function _a(e) {
  const t = x.useRef(e);
  return (
    Xi(() => {
      t.current = e;
    }),
    t
  );
}
function _C(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: s,
      elements: { reference: i, floating: o } = {},
      transform: a = !0,
      whileElementsMounted: c,
      open: l,
    } = e,
    [u, d] = x.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, p] = x.useState(r);
  go(f, r) || p(r);
  const [m, h] = x.useState(null),
    [g, v] = x.useState(null),
    b = x.useCallback((q) => {
      q !== E.current && ((E.current = q), h(q));
    }, []),
    w = x.useCallback((q) => {
      q !== R.current && ((R.current = q), v(q));
    }, []),
    T = i || m,
    S = o || g,
    E = x.useRef(null),
    R = x.useRef(null),
    A = x.useRef(u),
    N = c != null,
    D = _a(c),
    L = _a(s),
    j = _a(l),
    $ = x.useCallback(() => {
      if (!E.current || !R.current) return;
      const q = { placement: t, strategy: n, middleware: f };
      L.current && (q.platform = L.current),
        SC(E.current, R.current, q).then((se) => {
          const me = { ...se, isPositioned: j.current !== !1 };
          W.current &&
            !go(A.current, me) &&
            ((A.current = me),
            sh.flushSync(() => {
              d(me);
            }));
        });
    }, [f, t, n, L, j]);
  Xi(() => {
    l === !1 &&
      A.current.isPositioned &&
      ((A.current.isPositioned = !1), d((q) => ({ ...q, isPositioned: !1 })));
  }, [l]);
  const W = x.useRef(!1);
  Xi(
    () => (
      (W.current = !0),
      () => {
        W.current = !1;
      }
    ),
    []
  ),
    Xi(() => {
      if ((T && (E.current = T), S && (R.current = S), T && S)) {
        if (D.current) return D.current(T, S, $);
        $();
      }
    }, [T, S, $, D, N]);
  const ne = x.useMemo(
      () => ({ reference: E, floating: R, setReference: b, setFloating: w }),
      [b, w]
    ),
    X = x.useMemo(() => ({ reference: T, floating: S }), [T, S]),
    Z = x.useMemo(() => {
      const q = { position: n, left: 0, top: 0 };
      if (!X.floating) return q;
      const se = df(X.floating, u.x),
        me = df(X.floating, u.y);
      return a
        ? {
            ...q,
            transform: "translate(" + se + "px, " + me + "px)",
            ...(ug(X.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: se, top: me };
    }, [n, a, X.floating, u.x, u.y]);
  return x.useMemo(
    () => ({ ...u, update: $, refs: ne, elements: X, floatingStyles: Z }),
    [u, $, ne, X, Z]
  );
}
const TC = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: s } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? uf({ element: r.current, padding: s }).fn(n)
            : {}
          : r
          ? uf({ element: r, padding: s }).fn(n)
          : {};
      },
    };
  },
  CC = (e, t) => ({ ...gC(e), options: [e, t] }),
  AC = (e, t) => ({ ...yC(e), options: [e, t] }),
  EC = (e, t) => ({ ...wC(e), options: [e, t] }),
  PC = (e, t) => ({ ...vC(e), options: [e, t] }),
  RC = (e, t) => ({ ...xC(e), options: [e, t] }),
  kC = (e, t) => ({ ...bC(e), options: [e, t] }),
  OC = (e, t) => ({ ...TC(e), options: [e, t] });
var NC = "Arrow",
  dg = x.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: s = 5, ...i } = e;
    return y.jsx(it.svg, {
      ...i,
      ref: t,
      width: r,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : y.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
dg.displayName = NC;
var jC = dg;
function DC(e) {
  const [t, n] = x.useState(void 0);
  return (
    ur(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const i = s[0];
          let o, a;
          if ("borderBoxSize" in i) {
            const c = i.borderBoxSize,
              l = Array.isArray(c) ? c[0] : c;
            (o = l.inlineSize), (a = l.blockSize);
          } else (o = e.offsetWidth), (a = e.offsetHeight);
          n({ width: o, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var Vl = "Popper",
  [fg, hg] = Mc(Vl),
  [MC, pg] = fg(Vl),
  mg = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, s] = x.useState(null);
    return y.jsx(MC, { scope: t, anchor: r, onAnchorChange: s, children: n });
  };
mg.displayName = Vl;
var gg = "PopperAnchor",
  yg = x.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...s } = e,
      i = pg(gg, n),
      o = x.useRef(null),
      a = It(t, o);
    return (
      x.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || o.current);
      }),
      r ? null : y.jsx(it.div, { ...s, ref: a })
    );
  });
yg.displayName = gg;
var Bl = "PopperContent",
  [FC, LC] = fg(Bl),
  vg = x.forwardRef((e, t) => {
    var ue, ye, Oe, Ie, we, G;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: s = 0,
        align: i = "center",
        alignOffset: o = 0,
        arrowPadding: a = 0,
        avoidCollisions: c = !0,
        collisionBoundary: l = [],
        collisionPadding: u = 0,
        sticky: d = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: p = "optimized",
        onPlaced: m,
        ...h
      } = e,
      g = pg(Bl, n),
      [v, b] = x.useState(null),
      w = It(t, (de) => b(de)),
      [T, S] = x.useState(null),
      E = DC(T),
      R = (E == null ? void 0 : E.width) ?? 0,
      A = (E == null ? void 0 : E.height) ?? 0,
      N = r + (i !== "center" ? "-" + i : ""),
      D =
        typeof u == "number"
          ? u
          : { top: 0, right: 0, bottom: 0, left: 0, ...u },
      L = Array.isArray(l) ? l : [l],
      j = L.length > 0,
      $ = { padding: D, boundary: L.filter(VC), altBoundary: j },
      {
        refs: W,
        floatingStyles: ne,
        placement: X,
        isPositioned: Z,
        middlewareData: q,
      } = _C({
        strategy: "fixed",
        placement: N,
        whileElementsMounted: (...de) =>
          mC(...de, { animationFrame: p === "always" }),
        elements: { reference: g.anchor },
        middleware: [
          CC({ mainAxis: s + A, alignmentAxis: o }),
          c &&
            AC({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? EC() : void 0,
              ...$,
            }),
          c && PC({ ...$ }),
          RC({
            ...$,
            apply: ({
              elements: de,
              rects: Se,
              availableWidth: Ue,
              availableHeight: ft,
            }) => {
              const { width: bt, height: _ } = Se.reference,
                P = de.floating.style;
              P.setProperty("--radix-popper-available-width", `${Ue}px`),
                P.setProperty("--radix-popper-available-height", `${ft}px`),
                P.setProperty("--radix-popper-anchor-width", `${bt}px`),
                P.setProperty("--radix-popper-anchor-height", `${_}px`);
            },
          }),
          T && OC({ element: T, padding: a }),
          BC({ arrowWidth: R, arrowHeight: A }),
          f && kC({ strategy: "referenceHidden", ...$ }),
        ],
      }),
      [se, me] = wg(X),
      ge = On(m);
    ur(() => {
      Z && (ge == null || ge());
    }, [Z, ge]);
    const He = (ue = q.arrow) == null ? void 0 : ue.x,
      dt = (ye = q.arrow) == null ? void 0 : ye.y,
      qe = ((Oe = q.arrow) == null ? void 0 : Oe.centerOffset) !== 0,
      [At, Ye] = x.useState();
    return (
      ur(() => {
        v && Ye(window.getComputedStyle(v).zIndex);
      }, [v]),
      y.jsx("div", {
        ref: W.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ne,
          transform: Z ? ne.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: At,
          "--radix-popper-transform-origin": [
            (Ie = q.transformOrigin) == null ? void 0 : Ie.x,
            (we = q.transformOrigin) == null ? void 0 : we.y,
          ].join(" "),
          ...(((G = q.hide) == null ? void 0 : G.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: y.jsx(FC, {
          scope: n,
          placedSide: se,
          onArrowChange: S,
          arrowX: He,
          arrowY: dt,
          shouldHideArrow: qe,
          children: y.jsx(it.div, {
            "data-side": se,
            "data-align": me,
            ...h,
            ref: w,
            style: { ...h.style, animation: Z ? void 0 : "none" },
          }),
        }),
      })
    );
  });
vg.displayName = Bl;
var xg = "PopperArrow",
  IC = { top: "bottom", right: "left", bottom: "top", left: "right" },
  bg = x.forwardRef(function (t, n) {
    const { __scopePopper: r, ...s } = t,
      i = LC(xg, r),
      o = IC[i.placedSide];
    return y.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [o]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: y.jsx(jC, {
        ...s,
        ref: n,
        style: { ...s.style, display: "block" },
      }),
    });
  });
bg.displayName = xg;
function VC(e) {
  return e !== null;
}
var BC = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, v, b;
    const { placement: n, rects: r, middlewareData: s } = t,
      o = ((g = s.arrow) == null ? void 0 : g.centerOffset) !== 0,
      a = o ? 0 : e.arrowWidth,
      c = o ? 0 : e.arrowHeight,
      [l, u] = wg(n),
      d = { start: "0%", center: "50%", end: "100%" }[u],
      f = (((v = s.arrow) == null ? void 0 : v.x) ?? 0) + a / 2,
      p = (((b = s.arrow) == null ? void 0 : b.y) ?? 0) + c / 2;
    let m = "",
      h = "";
    return (
      l === "bottom"
        ? ((m = o ? d : `${f}px`), (h = `${-c}px`))
        : l === "top"
        ? ((m = o ? d : `${f}px`), (h = `${r.floating.height + c}px`))
        : l === "right"
        ? ((m = `${-c}px`), (h = o ? d : `${p}px`))
        : l === "left" &&
          ((m = `${r.floating.width + c}px`), (h = o ? d : `${p}px`)),
      { data: { x: m, y: h } }
    );
  },
});
function wg(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var UC = mg,
  Sg = yg,
  $C = vg,
  zC = bg,
  Ul = "Popover",
  [_g, $k] = Mc(Ul, [hg]),
  bi = hg(),
  [WC, zn] = _g(Ul),
  Tg = (e) => {
    const {
        __scopePopover: t,
        children: n,
        open: r,
        defaultOpen: s,
        onOpenChange: i,
        modal: o = !1,
      } = e,
      a = bi(t),
      c = x.useRef(null),
      [l, u] = x.useState(!1),
      [d = !1, f] = oh({ prop: r, defaultProp: s, onChange: i });
    return y.jsx(UC, {
      ...a,
      children: y.jsx(WC, {
        scope: t,
        contentId: zi(),
        triggerRef: c,
        open: d,
        onOpenChange: f,
        onOpenToggle: x.useCallback(() => f((p) => !p), [f]),
        hasCustomAnchor: l,
        onCustomAnchorAdd: x.useCallback(() => u(!0), []),
        onCustomAnchorRemove: x.useCallback(() => u(!1), []),
        modal: o,
        children: n,
      }),
    });
  };
Tg.displayName = Ul;
var Cg = "PopoverAnchor",
  HC = x.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = zn(Cg, n),
      i = bi(n),
      { onCustomAnchorAdd: o, onCustomAnchorRemove: a } = s;
    return (
      x.useEffect(() => (o(), () => a()), [o, a]),
      y.jsx(Sg, { ...i, ...r, ref: t })
    );
  });
HC.displayName = Cg;
var Ag = "PopoverTrigger",
  Eg = x.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = zn(Ag, n),
      i = bi(n),
      o = It(t, s.triggerRef),
      a = y.jsx(it.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": Ng(s.open),
        ...r,
        ref: o,
        onClick: mt(e.onClick, s.onOpenToggle),
      });
    return s.hasCustomAnchor
      ? a
      : y.jsx(Sg, { asChild: !0, ...i, children: a });
  });
Eg.displayName = Ag;
var $l = "PopoverPortal",
  [qC, ZC] = _g($l, { forceMount: void 0 }),
  Pg = (e) => {
    const { __scopePopover: t, forceMount: n, children: r, container: s } = e,
      i = zn($l, t);
    return y.jsx(qC, {
      scope: t,
      forceMount: n,
      children: y.jsx(ss, {
        present: n || i.open,
        children: y.jsx(Ic, { asChild: !0, container: s, children: r }),
      }),
    });
  };
Pg.displayName = $l;
var Jr = "PopoverContent",
  Rg = x.forwardRef((e, t) => {
    const n = ZC(Jr, e.__scopePopover),
      { forceMount: r = n.forceMount, ...s } = e,
      i = zn(Jr, e.__scopePopover);
    return y.jsx(ss, {
      present: r || i.open,
      children: i.modal
        ? y.jsx(GC, { ...s, ref: t })
        : y.jsx(KC, { ...s, ref: t }),
    });
  });
Rg.displayName = Jr;
var GC = x.forwardRef((e, t) => {
    const n = zn(Jr, e.__scopePopover),
      r = x.useRef(null),
      s = It(t, r),
      i = x.useRef(!1);
    return (
      x.useEffect(() => {
        const o = r.current;
        if (o) return xh(o);
      }, []),
      y.jsx(Vc, {
        as: rs,
        allowPinchZoom: !0,
        children: y.jsx(kg, {
          ...e,
          ref: s,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: mt(e.onCloseAutoFocus, (o) => {
            var a;
            o.preventDefault(),
              i.current || (a = n.triggerRef.current) == null || a.focus();
          }),
          onPointerDownOutside: mt(
            e.onPointerDownOutside,
            (o) => {
              const a = o.detail.originalEvent,
                c = a.button === 0 && a.ctrlKey === !0,
                l = a.button === 2 || c;
              i.current = l;
            },
            { checkForDefaultPrevented: !1 }
          ),
          onFocusOutside: mt(e.onFocusOutside, (o) => o.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
        }),
      })
    );
  }),
  KC = x.forwardRef((e, t) => {
    const n = zn(Jr, e.__scopePopover),
      r = x.useRef(!1),
      s = x.useRef(!1);
    return y.jsx(kg, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (i) => {
        var o, a;
        (o = e.onCloseAutoFocus) == null || o.call(e, i),
          i.defaultPrevented ||
            (r.current || (a = n.triggerRef.current) == null || a.focus(),
            i.preventDefault()),
          (r.current = !1),
          (s.current = !1);
      },
      onInteractOutside: (i) => {
        var c, l;
        (c = e.onInteractOutside) == null || c.call(e, i),
          i.defaultPrevented ||
            ((r.current = !0),
            i.detail.originalEvent.type === "pointerdown" && (s.current = !0));
        const o = i.target;
        ((l = n.triggerRef.current) == null ? void 0 : l.contains(o)) &&
          i.preventDefault(),
          i.detail.originalEvent.type === "focusin" &&
            s.current &&
            i.preventDefault();
      },
    });
  }),
  kg = x.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        trapFocus: r,
        onOpenAutoFocus: s,
        onCloseAutoFocus: i,
        disableOutsidePointerEvents: o,
        onEscapeKeyDown: a,
        onPointerDownOutside: c,
        onFocusOutside: l,
        onInteractOutside: u,
        ...d
      } = e,
      f = zn(Jr, n),
      p = bi(n);
    return (
      uh(),
      y.jsx(Lc, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: s,
        onUnmountAutoFocus: i,
        children: y.jsx(Fc, {
          asChild: !0,
          disableOutsidePointerEvents: o,
          onInteractOutside: u,
          onEscapeKeyDown: a,
          onPointerDownOutside: c,
          onFocusOutside: l,
          onDismiss: () => f.onOpenChange(!1),
          children: y.jsx($C, {
            "data-state": Ng(f.open),
            role: "dialog",
            id: f.contentId,
            ...p,
            ...d,
            ref: t,
            style: {
              ...d.style,
              "--radix-popover-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-popover-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-popover-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-popover-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-popover-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          }),
        }),
      })
    );
  }),
  Og = "PopoverClose",
  QC = x.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = zn(Og, n);
    return y.jsx(it.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: mt(e.onClick, () => s.onOpenChange(!1)),
    });
  });
QC.displayName = Og;
var XC = "PopoverArrow",
  YC = x.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = bi(n);
    return y.jsx(zC, { ...s, ...r, ref: t });
  });
YC.displayName = XC;
function Ng(e) {
  return e ? "open" : "closed";
}
var JC = Tg,
  eA = Eg,
  tA = Pg,
  jg = Rg;
const Dg = JC,
  Mg = eA,
  zl = x.forwardRef(
    ({ className: e, align: t = "center", sideOffset: n = 4, ...r }, s) =>
      y.jsx(tA, {
        children: y.jsx(jg, {
          ref: s,
          align: t,
          sideOffset: n,
          className: re(
            "z-50 w-32 rounded-[2px] s bg-white p-4 text-popover-foreground drop-shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            e
          ),
          ...r,
        }),
      })
  );
zl.displayName = jg.displayName;
const nA = [{ lang: pt.RU }, { lang: pt.EN }],
  ff = ({ className: e, light: t = !1 }) => {
    const n = Le((o) => o.lang),
      r = Le((o) => o.setLang),
      [s, i] = x.useState(!1);
    return y.jsxs(Dg, {
      open: s,
      onOpenChange: () => i(!s),
      children: [
        y.jsxs(Mg, {
          className: re(
            "flex text-white items-center gap-2",
            t ? "text-white" : "text-black",
            e
          ),
          children: [
            y.jsx("img", {
              src: n === pt.RU ? "/ru.svg" : "/english.svg",
              alt: "",
            }),
            n === pt.RU ? "Ру" : "En",
            y.jsx("svg", {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: y.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.23021 8.01443C4.35919 7.70304 4.66305 7.5 5.00011 7.5H15.0001C15.3372 7.5 15.641 7.70304 15.77 8.01443C15.899 8.32583 15.8277 8.68426 15.5894 8.92259L10.5894 13.9226C10.2639 14.248 9.73629 14.248 9.41085 13.9226L4.41085 8.92259C4.17252 8.68426 4.10122 8.32583 4.23021 8.01443ZM7.01195 9.16667L10.0001 12.1548L12.9883 9.16667H7.01195Z",
                fill: t ? "#fff" : "#000",
              }),
            }),
          ],
        }),
        y.jsx(zl, {
          className: "flex flex-col gap-6",
          children: nA
            .filter((o) => o.lang !== n)
            .map((o, a) =>
              y.jsxs(
                "div",
                {
                  onClick: () => {
                    r(o.lang), i(!1);
                  },
                  className: "flex gap-3 py-1  items-center cursor-pointer",
                  children: [
                    y.jsx("img", {
                      src: o.lang === pt.RU ? "/ru.svg" : "/english.svg",
                      alt: "flag",
                    }),
                    y.jsx("h5", {
                      children: o.lang === pt.RU ? "Русский" : "English",
                    }),
                  ],
                },
                a
              )
            ),
        }),
      ],
    });
  },
  hf = ({ title: e, dropDownContent: t, color: n, onMenu: r }) => {
    const [s, i] = x.useState(!1);
    return y.jsxs(Dg, {
      open: s,
      onOpenChange: () => i(!s),
      children: [
        y.jsxs(Mg, {
          className: "flex items-center gap-2",
          children: [e, y.jsx(rA, { color: n })],
        }),
        y.jsx(zl, {
          className: "w-fit px-0 py-2 cursor-pointer bg-surface_container",
          children:
            t &&
            t.map((o) =>
              o.link
                ? y.jsxs(
                    Me,
                    {
                      onClick: () => i(!1),
                      className:
                        "h-14 px-3 flex gap-3 items-center hover:bg-slate-300/50 transition-all",
                      target: o.blank ? "_blank" : "",
                      to: o.link,
                      children: [
                        o.text,
                        o.blank && y.jsx("img", { src: "/pdf.svg" }),
                      ],
                    },
                    o.text
                  )
                : y.jsx(
                    "div",
                    {
                      className:
                        "h-14 px-3 flex items-center hover:bg-slate-300/50 transition-all",
                      onClick: () => {
                        i(!1), r == null || r();
                      },
                      children: o.text,
                    },
                    o.text
                  )
            ),
        }),
      ],
    });
  },
  rA = ({ color: e = "white" }) =>
    y.jsx("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: y.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.23021 8.01443C4.35919 7.70304 4.66305 7.5 5.00011 7.5H15.0001C15.3372 7.5 15.641 7.70304 15.77 8.01443C15.899 8.32583 15.8277 8.68426 15.5894 8.92259L10.5894 13.9226C10.2639 14.248 9.73629 14.248 9.41085 13.9226L4.41085 8.92259C4.17252 8.68426 4.10122 8.32583 4.23021 8.01443ZM7.01195 9.16667L10.0001 12.1548L12.9883 9.16667H7.01195Z",
        fill: e,
      }),
    }),
  us = ({ className: e }) =>
    y.jsx(st, {
      className: re("w-full py-20 h-full flex items-center justify-between", e),
      children: y.jsx(Wh, {
        className: "animate-spin mx-auto text-primary size-16",
      }),
    }),
  oc = [
    {
      title: "Тематические направления выставки",
      bottom_text: `
    Участники смогут продемонстрировать свои инновационные решения, наладить взаимовыгодные партнерства и выйти на новые рынки.`,
      data: [
        { title: "Текстильные машины и оборудование", img: "/theme/1.svg" },
        { title: "Одежда, обувь, кожаные изделия", img: "/theme/2.svg" },
        { title: "Переработка натуральных волокон", img: "/theme/3.svg" },
        { title: "Домашний текстиль и эко-текстиль", img: "/theme/4.svg" },
        {
          title: "Запасные части и вспомогательные материалы",
          img: "/theme/5.svg",
        },
        { title: "Химические средства и красители", img: "/theme/6.svg" },
        { title: "Аксессуары и швейная фурнитура", img: "/theme/7.svg" },
        { title: "Мода и дизайн", img: "/theme/8.svg" },
      ],
    },
    {
      title: "Thematic areas of the exhibition",
      bottom_text: `
    Participants will be able to showcase innovative solutions, establish mutually beneficial partnerships, and enter new markets.`,
      data: [
        { title: "Textile machinery and equipment", img: "/theme/1.svg" },
        { title: "Clothing, footwear, leather goods", img: "/theme/2.svg" },
        { title: "Natural fibre processing", img: "/theme/3.svg" },
        { title: "Home textiles and eco-textiles", img: "/theme/4.svg" },
        { title: "Spare parts and auxiliary materials", img: "/theme/5.svg" },
        { title: "Chemicals and dyes", img: "/theme/6.svg" },
        { title: "Accessories and sewing supplies", img: "/theme/7.svg" },
        { title: "Fashion and design", img: "/theme/8.svg" },
      ],
    },
  ];
function Fg(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: sA } = Object.prototype,
  { getPrototypeOf: Wl } = Object,
  Uo = ((e) => (t) => {
    const n = sA.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Bt = (e) => ((e = e.toLowerCase()), (t) => Uo(t) === e),
  $o = (e) => (t) => typeof t === e,
  { isArray: ds } = Array,
  Hs = $o("undefined");
function iA(e) {
  return (
    e !== null &&
    !Hs(e) &&
    e.constructor !== null &&
    !Hs(e.constructor) &&
    vt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Lg = Bt("ArrayBuffer");
function oA(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Lg(e.buffer)),
    t
  );
}
const aA = $o("string"),
  vt = $o("function"),
  Ig = $o("number"),
  zo = (e) => e !== null && typeof e == "object",
  cA = (e) => e === !0 || e === !1,
  Yi = (e) => {
    if (Uo(e) !== "object") return !1;
    const t = Wl(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  lA = Bt("Date"),
  uA = Bt("File"),
  dA = Bt("Blob"),
  fA = Bt("FileList"),
  hA = (e) => zo(e) && vt(e.pipe),
  pA = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (vt(e.append) &&
          ((t = Uo(e)) === "formdata" ||
            (t === "object" &&
              vt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  mA = Bt("URLSearchParams"),
  [gA, yA, vA, xA] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Bt
  ),
  bA = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function wi(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), ds(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = i.length;
    let a;
    for (r = 0; r < o; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function Vg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const Xn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Bg = (e) => !Hs(e) && e !== Xn;
function ac() {
  const { caseless: e } = (Bg(this) && this) || {},
    t = {},
    n = (r, s) => {
      const i = (e && Vg(t, s)) || s;
      Yi(t[i]) && Yi(r)
        ? (t[i] = ac(t[i], r))
        : Yi(r)
        ? (t[i] = ac({}, r))
        : ds(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && wi(arguments[r], n);
  return t;
}
const wA = (e, t, n, { allOwnKeys: r } = {}) => (
    wi(
      t,
      (s, i) => {
        n && vt(s) ? (e[i] = Fg(s, n)) : (e[i] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  SA = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  _A = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  TA = (e, t, n, r) => {
    let s, i, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
        (o = s[i]), (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = n !== !1 && Wl(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  CA = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  AA = (e) => {
    if (!e) return null;
    if (ds(e)) return e;
    let t = e.length;
    if (!Ig(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  EA = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Wl(Uint8Array)),
  PA = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const i = s.value;
      t.call(e, i[0], i[1]);
    }
  },
  RA = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  kA = Bt("HTMLFormElement"),
  OA = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  pf = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  NA = Bt("RegExp"),
  Ug = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    wi(n, (s, i) => {
      let o;
      (o = t(s, i, e)) !== !1 && (r[i] = o || s);
    }),
      Object.defineProperties(e, r);
  },
  jA = (e) => {
    Ug(e, (t, n) => {
      if (vt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (vt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  DA = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((i) => {
          n[i] = !0;
        });
      };
    return ds(e) ? r(e) : r(String(e).split(t)), n;
  },
  MA = () => {},
  FA = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Ta = "abcdefghijklmnopqrstuvwxyz",
  mf = "0123456789",
  $g = { DIGIT: mf, ALPHA: Ta, ALPHA_DIGIT: Ta + Ta.toUpperCase() + mf },
  LA = (e = 16, t = $g.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function IA(e) {
  return !!(
    e &&
    vt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const VA = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (zo(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const i = ds(r) ? [] : {};
            return (
              wi(r, (o, a) => {
                const c = n(o, s + 1);
                !Hs(c) && (i[a] = c);
              }),
              (t[s] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  BA = Bt("AsyncFunction"),
  UA = (e) => e && (zo(e) || vt(e)) && vt(e.then) && vt(e.catch),
  zg = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          Xn.addEventListener(
            "message",
            ({ source: s, data: i }) => {
              s === Xn && i === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), Xn.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    vt(Xn.postMessage)
  ),
  $A =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Xn)
      : (typeof process < "u" && process.nextTick) || zg,
  k = {
    isArray: ds,
    isArrayBuffer: Lg,
    isBuffer: iA,
    isFormData: pA,
    isArrayBufferView: oA,
    isString: aA,
    isNumber: Ig,
    isBoolean: cA,
    isObject: zo,
    isPlainObject: Yi,
    isReadableStream: gA,
    isRequest: yA,
    isResponse: vA,
    isHeaders: xA,
    isUndefined: Hs,
    isDate: lA,
    isFile: uA,
    isBlob: dA,
    isRegExp: NA,
    isFunction: vt,
    isStream: hA,
    isURLSearchParams: mA,
    isTypedArray: EA,
    isFileList: fA,
    forEach: wi,
    merge: ac,
    extend: wA,
    trim: bA,
    stripBOM: SA,
    inherits: _A,
    toFlatObject: TA,
    kindOf: Uo,
    kindOfTest: Bt,
    endsWith: CA,
    toArray: AA,
    forEachEntry: PA,
    matchAll: RA,
    isHTMLForm: kA,
    hasOwnProperty: pf,
    hasOwnProp: pf,
    reduceDescriptors: Ug,
    freezeMethods: jA,
    toObjectSet: DA,
    toCamelCase: OA,
    noop: MA,
    toFiniteNumber: FA,
    findKey: Vg,
    global: Xn,
    isContextDefined: Bg,
    ALPHABET: $g,
    generateString: LA,
    isSpecCompliantForm: IA,
    toJSONObject: VA,
    isAsyncFn: BA,
    isThenable: UA,
    setImmediate: zg,
    asap: $A,
  };
function ie(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
k.inherits(ie, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: k.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Wg = ie.prototype,
  Hg = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Hg[e] = { value: e };
});
Object.defineProperties(ie, Hg);
Object.defineProperty(Wg, "isAxiosError", { value: !0 });
ie.from = (e, t, n, r, s, i) => {
  const o = Object.create(Wg);
  return (
    k.toFlatObject(
      e,
      o,
      function (c) {
        return c !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    ie.call(o, e.message, t, n, r, s),
    (o.cause = e),
    (o.name = e.name),
    i && Object.assign(o, i),
    o
  );
};
const zA = null;
function cc(e) {
  return k.isPlainObject(e) || k.isArray(e);
}
function qg(e) {
  return k.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function gf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, i) {
          return (s = qg(s)), !n && i ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function WA(e) {
  return k.isArray(e) && !e.some(cc);
}
const HA = k.toFlatObject(k, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Wo(e, t, n) {
  if (!k.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = k.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (h, g) {
        return !k.isUndefined(g[h]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || u,
    i = n.dots,
    o = n.indexes,
    c = (n.Blob || (typeof Blob < "u" && Blob)) && k.isSpecCompliantForm(t);
  if (!k.isFunction(s)) throw new TypeError("visitor must be a function");
  function l(m) {
    if (m === null) return "";
    if (k.isDate(m)) return m.toISOString();
    if (!c && k.isBlob(m))
      throw new ie("Blob is not supported. Use a Buffer instead.");
    return k.isArrayBuffer(m) || k.isTypedArray(m)
      ? c && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function u(m, h, g) {
    let v = m;
    if (m && !g && typeof m == "object") {
      if (k.endsWith(h, "{}"))
        (h = r ? h : h.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (k.isArray(m) && WA(m)) ||
        ((k.isFileList(m) || k.endsWith(h, "[]")) && (v = k.toArray(m)))
      )
        return (
          (h = qg(h)),
          v.forEach(function (w, T) {
            !(k.isUndefined(w) || w === null) &&
              t.append(
                o === !0 ? gf([h], T, i) : o === null ? h : h + "[]",
                l(w)
              );
          }),
          !1
        );
    }
    return cc(m) ? !0 : (t.append(gf(g, h, i), l(m)), !1);
  }
  const d = [],
    f = Object.assign(HA, {
      defaultVisitor: u,
      convertValue: l,
      isVisitable: cc,
    });
  function p(m, h) {
    if (!k.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      d.push(m),
        k.forEach(m, function (v, b) {
          (!(k.isUndefined(v) || v === null) &&
            s.call(t, v, k.isString(b) ? b.trim() : b, h, f)) === !0 &&
            p(v, h ? h.concat(b) : [b]);
        }),
        d.pop();
    }
  }
  if (!k.isObject(e)) throw new TypeError("data must be an object");
  return p(e), t;
}
function yf(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Hl(e, t) {
  (this._pairs = []), e && Wo(e, this, t);
}
const Zg = Hl.prototype;
Zg.append = function (t, n) {
  this._pairs.push([t, n]);
};
Zg.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, yf);
      }
    : yf;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function qA(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Gg(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || qA;
  k.isFunction(n) && (n = { serialize: n });
  const s = n && n.serialize;
  let i;
  if (
    (s
      ? (i = s(t, n))
      : (i = k.isURLSearchParams(t) ? t.toString() : new Hl(t, n).toString(r)),
    i)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class vf {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    k.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Kg = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  ZA = typeof URLSearchParams < "u" ? URLSearchParams : Hl,
  GA = typeof FormData < "u" ? FormData : null,
  KA = typeof Blob < "u" ? Blob : null,
  QA = {
    isBrowser: !0,
    classes: { URLSearchParams: ZA, FormData: GA, Blob: KA },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  ql = typeof window < "u" && typeof document < "u",
  lc = (typeof navigator == "object" && navigator) || void 0,
  XA =
    ql &&
    (!lc || ["ReactNative", "NativeScript", "NS"].indexOf(lc.product) < 0),
  YA =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  JA = (ql && window.location.href) || "http://localhost",
  eE = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: ql,
        hasStandardBrowserEnv: XA,
        hasStandardBrowserWebWorkerEnv: YA,
        navigator: lc,
        origin: JA,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ke = { ...eE, ...QA };
function tE(e, t) {
  return Wo(
    e,
    new Ke.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, i) {
          return Ke.isNode && k.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function nE(e) {
  return k
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function rE(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function Qg(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o),
      c = i >= n.length;
    return (
      (o = !o && k.isArray(s) ? s.length : o),
      c
        ? (k.hasOwnProp(s, o) ? (s[o] = [s[o], r]) : (s[o] = r), !a)
        : ((!s[o] || !k.isObject(s[o])) && (s[o] = []),
          t(n, r, s[o], i) && k.isArray(s[o]) && (s[o] = rE(s[o])),
          !a)
    );
  }
  if (k.isFormData(e) && k.isFunction(e.entries)) {
    const n = {};
    return (
      k.forEachEntry(e, (r, s) => {
        t(nE(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function sE(e, t, n) {
  if (k.isString(e))
    try {
      return (t || JSON.parse)(e), k.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const Si = {
  transitional: Kg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        i = k.isObject(t);
      if ((i && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t)))
        return s ? JSON.stringify(Qg(t)) : t;
      if (
        k.isArrayBuffer(t) ||
        k.isBuffer(t) ||
        k.isStream(t) ||
        k.isFile(t) ||
        k.isBlob(t) ||
        k.isReadableStream(t)
      )
        return t;
      if (k.isArrayBufferView(t)) return t.buffer;
      if (k.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return tE(t, this.formSerializer).toString();
        if ((a = k.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return Wo(
            a ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return i || s ? (n.setContentType("application/json", !1), sE(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Si.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (k.isResponse(t) || k.isReadableStream(t)) return t;
      if (t && k.isString(t) && ((r && !this.responseType) || s)) {
        const o = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? ie.from(a, ie.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ke.classes.FormData, Blob: Ke.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
k.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Si.headers[e] = {};
});
const iE = k.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  oE = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (s = o.indexOf(":")),
              (n = o.substring(0, s).trim().toLowerCase()),
              (r = o.substring(s + 1).trim()),
              !(!n || (t[n] && iE[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  xf = Symbol("internals");
function Ss(e) {
  return e && String(e).trim().toLowerCase();
}
function Ji(e) {
  return e === !1 || e == null ? e : k.isArray(e) ? e.map(Ji) : String(e);
}
function aE(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const cE = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ca(e, t, n, r, s) {
  if (k.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!k.isString(t))) {
    if (k.isString(r)) return t.indexOf(r) !== -1;
    if (k.isRegExp(r)) return r.test(t);
  }
}
function lE(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function uE(e, t) {
  const n = k.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0,
    });
  });
}
class lt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(a, c, l) {
      const u = Ss(c);
      if (!u) throw new Error("header name must be a non-empty string");
      const d = k.findKey(s, u);
      (!d || s[d] === void 0 || l === !0 || (l === void 0 && s[d] !== !1)) &&
        (s[d || c] = Ji(a));
    }
    const o = (a, c) => k.forEach(a, (l, u) => i(l, u, c));
    if (k.isPlainObject(t) || t instanceof this.constructor) o(t, n);
    else if (k.isString(t) && (t = t.trim()) && !cE(t)) o(oE(t), n);
    else if (k.isHeaders(t)) for (const [a, c] of t.entries()) i(c, a, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Ss(t)), t)) {
      const r = k.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return aE(s);
        if (k.isFunction(n)) return n.call(this, s, r);
        if (k.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Ss(t)), t)) {
      const r = k.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ca(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (((o = Ss(o)), o)) {
        const a = k.findKey(r, o);
        a && (!n || Ca(r, r[a], a, n)) && (delete r[a], (s = !0));
      }
    }
    return k.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Ca(this, this[i], i, t, !0)) && (delete this[i], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      k.forEach(this, (s, i) => {
        const o = k.findKey(r, i);
        if (o) {
          (n[o] = Ji(s)), delete n[i];
          return;
        }
        const a = t ? lE(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = Ji(s)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      k.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && k.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[xf] = this[xf] = { accessors: {} }).accessors,
      s = this.prototype;
    function i(o) {
      const a = Ss(o);
      r[a] || (uE(s, o), (r[a] = !0));
    }
    return k.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
lt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
k.reduceDescriptors(lt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
k.freezeMethods(lt);
function Aa(e, t) {
  const n = this || Si,
    r = t || n,
    s = lt.from(r.headers);
  let i = r.data;
  return (
    k.forEach(e, function (a) {
      i = a.call(n, i, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    i
  );
}
function Xg(e) {
  return !!(e && e.__CANCEL__);
}
function fs(e, t, n) {
  ie.call(this, e ?? "canceled", ie.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
k.inherits(fs, ie, { __CANCEL__: !0 });
function Yg(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new ie(
          "Request failed with status code " + n.status,
          [ie.ERR_BAD_REQUEST, ie.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function dE(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function fE(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    i = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const l = Date.now(),
        u = r[i];
      o || (o = l), (n[s] = c), (r[s] = l);
      let d = i,
        f = 0;
      for (; d !== s; ) (f += n[d++]), (d = d % e);
      if (((s = (s + 1) % e), s === i && (i = (i + 1) % e), l - o < t)) return;
      const p = u && l - u;
      return p ? Math.round((f * 1e3) / p) : void 0;
    }
  );
}
function hE(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    i;
  const o = (l, u = Date.now()) => {
    (n = u), (s = null), i && (clearTimeout(i), (i = null)), e.apply(null, l);
  };
  return [
    (...l) => {
      const u = Date.now(),
        d = u - n;
      d >= r
        ? o(l, u)
        : ((s = l),
          i ||
            (i = setTimeout(() => {
              (i = null), o(s);
            }, r - d)));
    },
    () => s && o(s),
  ];
}
const yo = (e, t, n = 3) => {
    let r = 0;
    const s = fE(50, 250);
    return hE((i) => {
      const o = i.loaded,
        a = i.lengthComputable ? i.total : void 0,
        c = o - r,
        l = s(c),
        u = o <= a;
      r = o;
      const d = {
        loaded: o,
        total: a,
        progress: a ? o / a : void 0,
        bytes: c,
        rate: l || void 0,
        estimated: l && a && u ? (a - o) / l : void 0,
        event: i,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(d);
    }, n);
  },
  bf = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  wf =
    (e) =>
    (...t) =>
      k.asap(() => e(...t)),
  pE = Ke.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, Ke.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(Ke.origin),
        Ke.navigator && /(msie|trident)/i.test(Ke.navigator.userAgent)
      )
    : () => !0,
  mE = Ke.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, i) {
          const o = [e + "=" + encodeURIComponent(t)];
          k.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            k.isString(r) && o.push("path=" + r),
            k.isString(s) && o.push("domain=" + s),
            i === !0 && o.push("secure"),
            (document.cookie = o.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function gE(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function yE(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Jg(e, t) {
  return e && !gE(t) ? yE(e, t) : t;
}
const Sf = (e) => (e instanceof lt ? { ...e } : e);
function hr(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, d, f) {
    return k.isPlainObject(l) && k.isPlainObject(u)
      ? k.merge.call({ caseless: f }, l, u)
      : k.isPlainObject(u)
      ? k.merge({}, u)
      : k.isArray(u)
      ? u.slice()
      : u;
  }
  function s(l, u, d, f) {
    if (k.isUndefined(u)) {
      if (!k.isUndefined(l)) return r(void 0, l, d, f);
    } else return r(l, u, d, f);
  }
  function i(l, u) {
    if (!k.isUndefined(u)) return r(void 0, u);
  }
  function o(l, u) {
    if (k.isUndefined(u)) {
      if (!k.isUndefined(l)) return r(void 0, l);
    } else return r(void 0, u);
  }
  function a(l, u, d) {
    if (d in t) return r(l, u);
    if (d in e) return r(void 0, l);
  }
  const c = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (l, u, d) => s(Sf(l), Sf(u), d, !0),
  };
  return (
    k.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const d = c[u] || s,
        f = d(e[u], t[u], u);
      (k.isUndefined(f) && d !== a) || (n[u] = f);
    }),
    n
  );
}
const ey = (e) => {
    const t = hr({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: i,
      headers: o,
      auth: a,
    } = t;
    (t.headers = o = lt.from(o)),
      (t.url = Gg(Jg(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        o.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : "")
            )
        );
    let c;
    if (k.isFormData(n)) {
      if (Ke.hasStandardBrowserEnv || Ke.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0);
      else if ((c = o.getContentType()) !== !1) {
        const [l, ...u] = c
          ? c
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        o.setContentType([l || "multipart/form-data", ...u].join("; "));
      }
    }
    if (
      Ke.hasStandardBrowserEnv &&
      (r && k.isFunction(r) && (r = r(t)), r || (r !== !1 && pE(t.url)))
    ) {
      const l = s && i && mE.read(i);
      l && o.set(s, l);
    }
    return t;
  },
  vE = typeof XMLHttpRequest < "u",
  xE =
    vE &&
    function (e) {
      return new Promise(function (n, r) {
        const s = ey(e);
        let i = s.data;
        const o = lt.from(s.headers).normalize();
        let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = s,
          u,
          d,
          f,
          p,
          m;
        function h() {
          p && p(),
            m && m(),
            s.cancelToken && s.cancelToken.unsubscribe(u),
            s.signal && s.signal.removeEventListener("abort", u);
        }
        let g = new XMLHttpRequest();
        g.open(s.method.toUpperCase(), s.url, !0), (g.timeout = s.timeout);
        function v() {
          if (!g) return;
          const w = lt.from(
              "getAllResponseHeaders" in g && g.getAllResponseHeaders()
            ),
            S = {
              data:
                !a || a === "text" || a === "json"
                  ? g.responseText
                  : g.response,
              status: g.status,
              statusText: g.statusText,
              headers: w,
              config: e,
              request: g,
            };
          Yg(
            function (R) {
              n(R), h();
            },
            function (R) {
              r(R), h();
            },
            S
          ),
            (g = null);
        }
        "onloadend" in g
          ? (g.onloadend = v)
          : (g.onreadystatechange = function () {
              !g ||
                g.readyState !== 4 ||
                (g.status === 0 &&
                  !(g.responseURL && g.responseURL.indexOf("file:") === 0)) ||
                setTimeout(v);
            }),
          (g.onabort = function () {
            g &&
              (r(new ie("Request aborted", ie.ECONNABORTED, e, g)), (g = null));
          }),
          (g.onerror = function () {
            r(new ie("Network Error", ie.ERR_NETWORK, e, g)), (g = null);
          }),
          (g.ontimeout = function () {
            let T = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const S = s.transitional || Kg;
            s.timeoutErrorMessage && (T = s.timeoutErrorMessage),
              r(
                new ie(
                  T,
                  S.clarifyTimeoutError ? ie.ETIMEDOUT : ie.ECONNABORTED,
                  e,
                  g
                )
              ),
              (g = null);
          }),
          i === void 0 && o.setContentType(null),
          "setRequestHeader" in g &&
            k.forEach(o.toJSON(), function (T, S) {
              g.setRequestHeader(S, T);
            }),
          k.isUndefined(s.withCredentials) ||
            (g.withCredentials = !!s.withCredentials),
          a && a !== "json" && (g.responseType = s.responseType),
          l && (([f, m] = yo(l, !0)), g.addEventListener("progress", f)),
          c &&
            g.upload &&
            (([d, p] = yo(c)),
            g.upload.addEventListener("progress", d),
            g.upload.addEventListener("loadend", p)),
          (s.cancelToken || s.signal) &&
            ((u = (w) => {
              g &&
                (r(!w || w.type ? new fs(null, e, g) : w),
                g.abort(),
                (g = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(u),
            s.signal &&
              (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
        const b = dE(s.url);
        if (b && Ke.protocols.indexOf(b) === -1) {
          r(new ie("Unsupported protocol " + b + ":", ie.ERR_BAD_REQUEST, e));
          return;
        }
        g.send(i || null);
      });
    },
  bE = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const i = function (l) {
        if (!s) {
          (s = !0), a();
          const u = l instanceof Error ? l : this.reason;
          r.abort(
            u instanceof ie ? u : new fs(u instanceof Error ? u.message : u)
          );
        }
      };
      let o =
        t &&
        setTimeout(() => {
          (o = null), i(new ie(`timeout ${t} of ms exceeded`, ie.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (o && clearTimeout(o),
          (o = null),
          e.forEach((l) => {
            l.unsubscribe
              ? l.unsubscribe(i)
              : l.removeEventListener("abort", i);
          }),
          (e = null));
      };
      e.forEach((l) => l.addEventListener("abort", i));
      const { signal: c } = r;
      return (c.unsubscribe = () => k.asap(a)), c;
    }
  },
  wE = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  SE = async function* (e, t) {
    for await (const n of _E(e)) yield* wE(n, t);
  },
  _E = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  _f = (e, t, n, r) => {
    const s = SE(e, t);
    let i = 0,
      o,
      a = (c) => {
        o || ((o = !0), r && r(c));
      };
    return new ReadableStream(
      {
        async pull(c) {
          try {
            const { done: l, value: u } = await s.next();
            if (l) {
              a(), c.close();
              return;
            }
            let d = u.byteLength;
            if (n) {
              let f = (i += d);
              n(f);
            }
            c.enqueue(new Uint8Array(u));
          } catch (l) {
            throw (a(l), l);
          }
        },
        cancel(c) {
          return a(c), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Ho =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  ty = Ho && typeof ReadableStream == "function",
  TE =
    Ho &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  ny = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  CE =
    ty &&
    ny(() => {
      let e = !1;
      const t = new Request(Ke.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Tf = 64 * 1024,
  uc = ty && ny(() => k.isReadableStream(new Response("").body)),
  vo = { stream: uc && ((e) => e.body) };
Ho &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !vo[t] &&
        (vo[t] = k.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new ie(
                `Response type '${t}' is not supported`,
                ie.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const AE = async (e) => {
    if (e == null) return 0;
    if (k.isBlob(e)) return e.size;
    if (k.isSpecCompliantForm(e))
      return (
        await new Request(Ke.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (k.isArrayBufferView(e) || k.isArrayBuffer(e)) return e.byteLength;
    if ((k.isURLSearchParams(e) && (e = e + ""), k.isString(e)))
      return (await TE(e)).byteLength;
  },
  EE = async (e, t) => {
    const n = k.toFiniteNumber(e.getContentLength());
    return n ?? AE(t);
  },
  PE =
    Ho &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: i,
        timeout: o,
        onDownloadProgress: a,
        onUploadProgress: c,
        responseType: l,
        headers: u,
        withCredentials: d = "same-origin",
        fetchOptions: f,
      } = ey(e);
      l = l ? (l + "").toLowerCase() : "text";
      let p = bE([s, i && i.toAbortSignal()], o),
        m;
      const h =
        p &&
        p.unsubscribe &&
        (() => {
          p.unsubscribe();
        });
      let g;
      try {
        if (
          c &&
          CE &&
          n !== "get" &&
          n !== "head" &&
          (g = await EE(u, r)) !== 0
        ) {
          let S = new Request(t, { method: "POST", body: r, duplex: "half" }),
            E;
          if (
            (k.isFormData(r) &&
              (E = S.headers.get("content-type")) &&
              u.setContentType(E),
            S.body)
          ) {
            const [R, A] = bf(g, yo(wf(c)));
            r = _f(S.body, Tf, R, A);
          }
        }
        k.isString(d) || (d = d ? "include" : "omit");
        const v = "credentials" in Request.prototype;
        m = new Request(t, {
          ...f,
          signal: p,
          method: n.toUpperCase(),
          headers: u.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: v ? d : void 0,
        });
        let b = await fetch(m);
        const w = uc && (l === "stream" || l === "response");
        if (uc && (a || (w && h))) {
          const S = {};
          ["status", "statusText", "headers"].forEach((N) => {
            S[N] = b[N];
          });
          const E = k.toFiniteNumber(b.headers.get("content-length")),
            [R, A] = (a && bf(E, yo(wf(a), !0))) || [];
          b = new Response(
            _f(b.body, Tf, R, () => {
              A && A(), h && h();
            }),
            S
          );
        }
        l = l || "text";
        let T = await vo[k.findKey(vo, l) || "text"](b, e);
        return (
          !w && h && h(),
          await new Promise((S, E) => {
            Yg(S, E, {
              data: T,
              headers: lt.from(b.headers),
              status: b.status,
              statusText: b.statusText,
              config: e,
              request: m,
            });
          })
        );
      } catch (v) {
        throw (
          (h && h(),
          v && v.name === "TypeError" && /fetch/i.test(v.message)
            ? Object.assign(new ie("Network Error", ie.ERR_NETWORK, e, m), {
                cause: v.cause || v,
              })
            : ie.from(v, v && v.code, e, m))
        );
      }
    }),
  dc = { http: zA, xhr: xE, fetch: PE };
k.forEach(dc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Cf = (e) => `- ${e}`,
  RE = (e) => k.isFunction(e) || e === null || e === !1,
  ry = {
    getAdapter: (e) => {
      e = k.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let o;
        if (
          ((r = n),
          !RE(n) && ((r = dc[(o = String(n)).toLowerCase()]), r === void 0))
        )
          throw new ie(`Unknown adapter '${o}'`);
        if (r) break;
        s[o || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(s).map(
          ([a, c]) =>
            `adapter ${a} ` +
            (c === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = t
          ? i.length > 1
            ? `since :
` +
              i.map(Cf).join(`
`)
            : " " + Cf(i[0])
          : "as no adapter specified";
        throw new ie(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: dc,
  };
function Ea(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new fs(null, e);
}
function Af(e) {
  return (
    Ea(e),
    (e.headers = lt.from(e.headers)),
    (e.data = Aa.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    ry
      .getAdapter(e.adapter || Si.adapter)(e)
      .then(
        function (r) {
          return (
            Ea(e),
            (r.data = Aa.call(e, e.transformResponse, r)),
            (r.headers = lt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            Xg(r) ||
              (Ea(e),
              r &&
                r.response &&
                ((r.response.data = Aa.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = lt.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const sy = "1.7.9",
  qo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    qo[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Ef = {};
qo.transitional = function (t, n, r) {
  function s(i, o) {
    return (
      "[Axios v" +
      sy +
      "] Transitional option '" +
      i +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (i, o, a) => {
    if (t === !1)
      throw new ie(
        s(o, " has been removed" + (n ? " in " + n : "")),
        ie.ERR_DEPRECATED
      );
    return (
      n &&
        !Ef[o] &&
        ((Ef[o] = !0),
        console.warn(
          s(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, o, a) : !0
    );
  };
};
qo.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function kE(e, t, n) {
  if (typeof e != "object")
    throw new ie("options must be an object", ie.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s],
      o = t[i];
    if (o) {
      const a = e[i],
        c = a === void 0 || o(a, i, e);
      if (c !== !0)
        throw new ie("option " + i + " must be " + c, ie.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ie("Unknown option " + i, ie.ERR_BAD_OPTION);
  }
}
const eo = { assertOptions: kE, validators: qo },
  zt = eo.validators;
class ar {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new vf(), response: new vf() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = hr(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 &&
      eo.assertOptions(
        r,
        {
          silentJSONParsing: zt.transitional(zt.boolean),
          forcedJSONParsing: zt.transitional(zt.boolean),
          clarifyTimeoutError: zt.transitional(zt.boolean),
        },
        !1
      ),
      s != null &&
        (k.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : eo.assertOptions(
              s,
              { encode: zt.function, serialize: zt.function },
              !0
            )),
      eo.assertOptions(
        n,
        {
          baseUrl: zt.spelling("baseURL"),
          withXsrfToken: zt.spelling("withXSRFToken"),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = i && k.merge(i.common, i[n.method]);
    i &&
      k.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (m) => {
          delete i[m];
        }
      ),
      (n.headers = lt.concat(o, i));
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function (h) {
      (typeof h.runWhen == "function" && h.runWhen(n) === !1) ||
        ((c = c && h.synchronous), a.unshift(h.fulfilled, h.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function (h) {
      l.push(h.fulfilled, h.rejected);
    });
    let u,
      d = 0,
      f;
    if (!c) {
      const m = [Af.bind(this), void 0];
      for (
        m.unshift.apply(m, a),
          m.push.apply(m, l),
          f = m.length,
          u = Promise.resolve(n);
        d < f;

      )
        u = u.then(m[d++], m[d++]);
      return u;
    }
    f = a.length;
    let p = n;
    for (d = 0; d < f; ) {
      const m = a[d++],
        h = a[d++];
      try {
        p = m(p);
      } catch (g) {
        h.call(this, g);
        break;
      }
    }
    try {
      u = Af.call(this, p);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, f = l.length; d < f; ) u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = hr(this.defaults, t);
    const n = Jg(t.baseURL, t.url);
    return Gg(n, t.params, t.paramsSerializer);
  }
}
k.forEach(["delete", "get", "head", "options"], function (t) {
  ar.prototype[t] = function (n, r) {
    return this.request(
      hr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
k.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, o, a) {
      return this.request(
        hr(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: o,
        })
      );
    };
  }
  (ar.prototype[t] = n()), (ar.prototype[t + "Form"] = n(!0));
});
class Zl {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let i;
        const o = new Promise((a) => {
          r.subscribe(a), (i = a);
        }).then(s);
        return (
          (o.cancel = function () {
            r.unsubscribe(i);
          }),
          o
        );
      }),
      t(function (i, o, a) {
        r.reason || ((r.reason = new fs(i, o, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Zl(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function OE(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function NE(e) {
  return k.isObject(e) && e.isAxiosError === !0;
}
const fc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(fc).forEach(([e, t]) => {
  fc[t] = e;
});
function iy(e) {
  const t = new ar(e),
    n = Fg(ar.prototype.request, t);
  return (
    k.extend(n, ar.prototype, t, { allOwnKeys: !0 }),
    k.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return iy(hr(e, s));
    }),
    n
  );
}
const _e = iy(Si);
_e.Axios = ar;
_e.CanceledError = fs;
_e.CancelToken = Zl;
_e.isCancel = Xg;
_e.VERSION = sy;
_e.toFormData = Wo;
_e.AxiosError = ie;
_e.Cancel = _e.CanceledError;
_e.all = function (t) {
  return Promise.all(t);
};
_e.spread = OE;
_e.isAxiosError = NE;
_e.mergeConfig = hr;
_e.AxiosHeaders = lt;
_e.formToJSON = (e) => Qg(k.isHTMLForm(e) ? new FormData(e) : e);
_e.getAdapter = ry.getAdapter;
_e.HttpStatusCode = fc;
_e.default = _e;
const hs = "https://turkmentextile.turkmenexpo.com/app/api/v1",
  Gl = _e.create({
    baseURL: "https://turkmentextile.turkmenexpo.com/app/api/v1/",
  }),
  zk = async (e) => (await _e.post(`${hs}/book_stand_form`, e)).status === 201,
  Wk = async (e) =>
    (await _e.post(`${hs}/become_sponsor_form`, e)).status === 201,
  Hk = async (e) => (await _e.post(`${hs}/contact_form`, e)).status === 201,
  jE = async (e) => (await Gl.post("subscribe_news_form", e)).status === 201,
  DE = async (e, t) =>
    _e.get(`${hs}/pages/${t}`, { headers: { "Accept-Language": e } }),
  ME = async (e) => Gl.get("/stats", { headers: { "Accept-Language": e } }),
  FE = async (e) => Gl("contact_data", { headers: { "Accept-Language": e } }),
  LE = async (e) =>
    _e.get(`${hs}/industries`, { headers: { "Accept-Language": e } }),
  IE = async (e) =>
    _e.get(`${hs}/exhibition_time`, { headers: { "Accept-Language": e } });
var _i = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  pr = typeof window > "u" || "Deno" in globalThis;
function Tt() {}
function VE(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function hc(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function oy(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Dr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pf(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: s,
    predicate: i,
    queryKey: o,
    stale: a,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== Kl(o, t.options)) return !1;
    } else if (!Zs(t.queryKey, o)) return !1;
  }
  if (n !== "all") {
    const c = t.isActive();
    if ((n === "active" && !c) || (n === "inactive" && c)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (s && s !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Rf(e, t) {
  const { exact: n, status: r, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (qs(t.options.mutationKey) !== qs(i)) return !1;
    } else if (!Zs(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (s && !s(t)));
}
function Kl(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || qs)(e);
}
function qs(e) {
  return JSON.stringify(e, (t, n) =>
    mc(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, s) => ((r[s] = n[s]), r), {})
      : n
  );
}
function Zs(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !Zs(e[n], t[n]))
    : !1;
}
function ay(e, t) {
  if (e === t) return e;
  const n = kf(e) && kf(t);
  if (n || (mc(e) && mc(t))) {
    const r = n ? e : Object.keys(e),
      s = r.length,
      i = n ? t : Object.keys(t),
      o = i.length,
      a = n ? [] : {};
    let c = 0;
    for (let l = 0; l < o; l++) {
      const u = n ? l : i[l];
      ((!n && r.includes(u)) || n) && e[u] === void 0 && t[u] === void 0
        ? ((a[u] = void 0), c++)
        : ((a[u] = ay(e[u], t[u])), a[u] === e[u] && e[u] !== void 0 && c++);
    }
    return s === o && c === s ? e : a;
  }
  return t;
}
function pc(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function kf(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function mc(e) {
  if (!Of(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Of(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Of(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function BE(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function gc(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? ay(e, t)
    : t;
}
function UE(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function $E(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Ql = Symbol();
function cy(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Ql
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var Yn,
  Tn,
  Fr,
  Kf,
  zE =
    ((Kf = class extends _i {
      constructor() {
        super();
        ee(this, Yn);
        ee(this, Tn);
        ee(this, Fr);
        H(this, Fr, (t) => {
          if (!pr && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        C(this, Tn) || this.setEventListener(C(this, Fr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = C(this, Tn)) == null || t.call(this), H(this, Tn, void 0));
      }
      setEventListener(t) {
        var n;
        H(this, Fr, t),
          (n = C(this, Tn)) == null || n.call(this),
          H(
            this,
            Tn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        C(this, Yn) !== t && (H(this, Yn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof C(this, Yn) == "boolean"
          ? C(this, Yn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Yn = new WeakMap()),
    (Tn = new WeakMap()),
    (Fr = new WeakMap()),
    Kf),
  Xl = new zE(),
  Lr,
  Cn,
  Ir,
  Qf,
  WE =
    ((Qf = class extends _i {
      constructor() {
        super();
        ee(this, Lr, !0);
        ee(this, Cn);
        ee(this, Ir);
        H(this, Ir, (t) => {
          if (!pr && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        C(this, Cn) || this.setEventListener(C(this, Ir));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = C(this, Cn)) == null || t.call(this), H(this, Cn, void 0));
      }
      setEventListener(t) {
        var n;
        H(this, Ir, t),
          (n = C(this, Cn)) == null || n.call(this),
          H(this, Cn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        C(this, Lr) !== t &&
          (H(this, Lr, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return C(this, Lr);
      }
    }),
    (Lr = new WeakMap()),
    (Cn = new WeakMap()),
    (Ir = new WeakMap()),
    Qf),
  xo = new WE();
function yc() {
  let e, t;
  const n = new Promise((s, i) => {
    (e = s), (t = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(s) {
    Object.assign(n, s), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (s) => {
      r({ status: "fulfilled", value: s }), e(s);
    }),
    (n.reject = (s) => {
      r({ status: "rejected", reason: s }), t(s);
    }),
    n
  );
}
function HE(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function ly(e) {
  return (e ?? "online") === "online" ? xo.isOnline() : !0;
}
var uy = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Pa(e) {
  return e instanceof uy;
}
function dy(e) {
  let t = !1,
    n = 0,
    r = !1,
    s;
  const i = yc(),
    o = (h) => {
      var g;
      r || (f(new uy(h)), (g = e.abort) == null || g.call(e));
    },
    a = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () =>
      Xl.isFocused() &&
      (e.networkMode === "always" || xo.isOnline()) &&
      e.canRun(),
    u = () => ly(e.networkMode) && e.canRun(),
    d = (h) => {
      var g;
      r ||
        ((r = !0),
        (g = e.onSuccess) == null || g.call(e, h),
        s == null || s(),
        i.resolve(h));
    },
    f = (h) => {
      var g;
      r ||
        ((r = !0),
        (g = e.onError) == null || g.call(e, h),
        s == null || s(),
        i.reject(h));
    },
    p = () =>
      new Promise((h) => {
        var g;
        (s = (v) => {
          (r || l()) && h(v);
        }),
          (g = e.onPause) == null || g.call(e);
      }).then(() => {
        var h;
        (s = void 0), r || (h = e.onContinue) == null || h.call(e);
      }),
    m = () => {
      if (r) return;
      let h;
      const g = n === 0 ? e.initialPromise : void 0;
      try {
        h = g ?? e.fn();
      } catch (v) {
        h = Promise.reject(v);
      }
      Promise.resolve(h)
        .then(d)
        .catch((v) => {
          var E;
          if (r) return;
          const b = e.retry ?? (pr ? 0 : 3),
            w = e.retryDelay ?? HE,
            T = typeof w == "function" ? w(n, v) : w,
            S =
              b === !0 ||
              (typeof b == "number" && n < b) ||
              (typeof b == "function" && b(n, v));
          if (t || !S) {
            f(v);
            return;
          }
          n++,
            (E = e.onFail) == null || E.call(e, n, v),
            BE(T)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                t ? f(v) : m();
              });
        });
    };
  return {
    promise: i,
    cancel: o,
    continue: () => (s == null || s(), i),
    cancelRetry: a,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? m() : p().then(m), i),
  };
}
function qE() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    s = (a) => setTimeout(a, 0);
  const i = (a) => {
      t
        ? e.push(a)
        : s(() => {
            n(a);
          });
    },
    o = () => {
      const a = e;
      (e = []),
        a.length &&
          s(() => {
            r(() => {
              a.forEach((c) => {
                n(c);
              });
            });
          });
    };
  return {
    batch: (a) => {
      let c;
      t++;
      try {
        c = a();
      } finally {
        t--, t || o();
      }
      return c;
    },
    batchCalls:
      (a) =>
      (...c) => {
        i(() => {
          a(...c);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      s = a;
    },
  };
}
var ze = qE(),
  Jn,
  Xf,
  fy =
    ((Xf = class {
      constructor() {
        ee(this, Jn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          hc(this.gcTime) &&
            H(
              this,
              Jn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (pr ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        C(this, Jn) && (clearTimeout(C(this, Jn)), H(this, Jn, void 0));
      }
    }),
    (Jn = new WeakMap()),
    Xf),
  Vr,
  Br,
  _t,
  er,
  Ze,
  ui,
  tr,
  Pt,
  cn,
  Yf,
  ZE =
    ((Yf = class extends fy {
      constructor(t) {
        super();
        ee(this, Pt);
        ee(this, Vr);
        ee(this, Br);
        ee(this, _t);
        ee(this, er);
        ee(this, Ze);
        ee(this, ui);
        ee(this, tr);
        H(this, tr, !1),
          H(this, ui, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          H(this, er, t.client),
          H(this, _t, C(this, er).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          H(this, Vr, GE(this.options)),
          (this.state = t.state ?? C(this, Vr)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = C(this, Ze)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...C(this, ui), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          C(this, _t).remove(this);
      }
      setData(t, n) {
        const r = gc(this.state.data, t, this.options);
        return (
          fe(this, Pt, cn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        fe(this, Pt, cn).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, s;
        const n = (r = C(this, Ze)) == null ? void 0 : r.promise;
        return (
          (s = C(this, Ze)) == null || s.cancel(t),
          n ? n.then(Tt).catch(Tt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(C(this, Vr));
      }
      isActive() {
        return this.observers.some((t) => kt(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Ql ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !oy(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = C(this, Ze)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = C(this, Ze)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          C(this, _t).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (C(this, Ze) &&
              (C(this, tr)
                ? C(this, Ze).cancel({ revert: !0 })
                : C(this, Ze).cancelRetry()),
            this.scheduleGc()),
          C(this, _t).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          fe(this, Pt, cn).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var c, l, u;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (C(this, Ze))
            return C(this, Ze).continueRetry(), C(this, Ze).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const d = this.observers.find((f) => f.options.queryFn);
          d && this.setOptions(d.options);
        }
        const r = new AbortController(),
          s = (d) => {
            Object.defineProperty(d, "signal", {
              enumerable: !0,
              get: () => (H(this, tr, !0), r.signal),
            });
          },
          i = () => {
            const d = cy(this.options, n),
              f = {
                client: C(this, er),
                queryKey: this.queryKey,
                meta: this.meta,
              };
            return (
              s(f),
              H(this, tr, !1),
              this.options.persister ? this.options.persister(d, f, this) : d(f)
            );
          },
          o = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            client: C(this, er),
            state: this.state,
            fetchFn: i,
          };
        s(o),
          (c = this.options.behavior) == null || c.onFetch(o, this),
          H(this, Br, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((l = o.fetchOptions) == null ? void 0 : l.meta)) &&
            fe(this, Pt, cn).call(this, {
              type: "fetch",
              meta: (u = o.fetchOptions) == null ? void 0 : u.meta,
            });
        const a = (d) => {
          var f, p, m, h;
          (Pa(d) && d.silent) ||
            fe(this, Pt, cn).call(this, { type: "error", error: d }),
            Pa(d) ||
              ((p = (f = C(this, _t).config).onError) == null ||
                p.call(f, d, this),
              (h = (m = C(this, _t).config).onSettled) == null ||
                h.call(m, this.state.data, d, this)),
            this.scheduleGc();
        };
        return (
          H(
            this,
            Ze,
            dy({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: o.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (d) => {
                var f, p, m, h;
                if (d === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(d);
                } catch (g) {
                  a(g);
                  return;
                }
                (p = (f = C(this, _t).config).onSuccess) == null ||
                  p.call(f, d, this),
                  (h = (m = C(this, _t).config).onSettled) == null ||
                    h.call(m, d, this.state.error, this),
                  this.scheduleGc();
              },
              onError: a,
              onFail: (d, f) => {
                fe(this, Pt, cn).call(this, {
                  type: "failed",
                  failureCount: d,
                  error: f,
                });
              },
              onPause: () => {
                fe(this, Pt, cn).call(this, { type: "pause" });
              },
              onContinue: () => {
                fe(this, Pt, cn).call(this, { type: "continue" });
              },
              retry: o.options.retry,
              retryDelay: o.options.retryDelay,
              networkMode: o.options.networkMode,
              canRun: () => !0,
            })
          ),
          C(this, Ze).start()
        );
      }
    }),
    (Vr = new WeakMap()),
    (Br = new WeakMap()),
    (_t = new WeakMap()),
    (er = new WeakMap()),
    (Ze = new WeakMap()),
    (ui = new WeakMap()),
    (tr = new WeakMap()),
    (Pt = new WeakSet()),
    (cn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...hy(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const s = t.error;
            return Pa(s) && s.revert && C(this, Br)
              ? { ...C(this, Br), fetchStatus: "idle" }
              : {
                  ...r,
                  error: s,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        ze.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            C(this, _t).notify({ query: this, type: "updated", action: t });
        });
    }),
    Yf);
function hy(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: ly(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function GE(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Wt,
  Jf,
  KE =
    ((Jf = class extends _i {
      constructor(t = {}) {
        super();
        ee(this, Wt);
        (this.config = t), H(this, Wt, new Map());
      }
      build(t, n, r) {
        const s = n.queryKey,
          i = n.queryHash ?? Kl(s, n);
        let o = this.get(i);
        return (
          o ||
            ((o = new ZE({
              client: t,
              queryKey: s,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(s),
            })),
            this.add(o)),
          o
        );
      }
      add(t) {
        C(this, Wt).has(t.queryHash) ||
          (C(this, Wt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = C(this, Wt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && C(this, Wt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        ze.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return C(this, Wt).get(t);
      }
      getAll() {
        return [...C(this, Wt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Pf(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Pf(t, r)) : n;
      }
      notify(t) {
        ze.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        ze.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        ze.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Wt = new WeakMap()),
    Jf),
  Ht,
  Je,
  nr,
  qt,
  Sn,
  eh,
  QE =
    ((eh = class extends fy {
      constructor(t) {
        super();
        ee(this, qt);
        ee(this, Ht);
        ee(this, Je);
        ee(this, nr);
        (this.mutationId = t.mutationId),
          H(this, Je, t.mutationCache),
          H(this, Ht, []),
          (this.state = t.state || XE()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        C(this, Ht).includes(t) ||
          (C(this, Ht).push(t),
          this.clearGcTimeout(),
          C(this, Je).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        H(
          this,
          Ht,
          C(this, Ht).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          C(this, Je).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        C(this, Ht).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : C(this, Je).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = C(this, nr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var s, i, o, a, c, l, u, d, f, p, m, h, g, v, b, w, T, S, E, R;
        H(
          this,
          nr,
          dy({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (A, N) => {
              fe(this, qt, Sn).call(this, {
                type: "failed",
                failureCount: A,
                error: N,
              });
            },
            onPause: () => {
              fe(this, qt, Sn).call(this, { type: "pause" });
            },
            onContinue: () => {
              fe(this, qt, Sn).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => C(this, Je).canRun(this),
          })
        );
        const n = this.state.status === "pending",
          r = !C(this, nr).canStart();
        try {
          if (!n) {
            fe(this, qt, Sn).call(this, {
              type: "pending",
              variables: t,
              isPaused: r,
            }),
              await ((i = (s = C(this, Je).config).onMutate) == null
                ? void 0
                : i.call(s, t, this));
            const N = await ((a = (o = this.options).onMutate) == null
              ? void 0
              : a.call(o, t));
            N !== this.state.context &&
              fe(this, qt, Sn).call(this, {
                type: "pending",
                context: N,
                variables: t,
                isPaused: r,
              });
          }
          const A = await C(this, nr).start();
          return (
            await ((l = (c = C(this, Je).config).onSuccess) == null
              ? void 0
              : l.call(c, A, t, this.state.context, this)),
            await ((d = (u = this.options).onSuccess) == null
              ? void 0
              : d.call(u, A, t, this.state.context)),
            await ((p = (f = C(this, Je).config).onSettled) == null
              ? void 0
              : p.call(
                  f,
                  A,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((h = (m = this.options).onSettled) == null
              ? void 0
              : h.call(m, A, null, t, this.state.context)),
            fe(this, qt, Sn).call(this, { type: "success", data: A }),
            A
          );
        } catch (A) {
          try {
            throw (
              (await ((v = (g = C(this, Je).config).onError) == null
                ? void 0
                : v.call(g, A, t, this.state.context, this)),
              await ((w = (b = this.options).onError) == null
                ? void 0
                : w.call(b, A, t, this.state.context)),
              await ((S = (T = C(this, Je).config).onSettled) == null
                ? void 0
                : S.call(
                    T,
                    void 0,
                    A,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((R = (E = this.options).onSettled) == null
                ? void 0
                : R.call(E, void 0, A, t, this.state.context)),
              A)
            );
          } finally {
            fe(this, qt, Sn).call(this, { type: "error", error: A });
          }
        } finally {
          C(this, Je).runNext(this);
        }
      }
    }),
    (Ht = new WeakMap()),
    (Je = new WeakMap()),
    (nr = new WeakMap()),
    (qt = new WeakSet()),
    (Sn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        ze.batch(() => {
          C(this, Ht).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            C(this, Je).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    eh);
function XE() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var dn,
  Rt,
  di,
  th,
  YE =
    ((th = class extends _i {
      constructor(t = {}) {
        super();
        ee(this, dn);
        ee(this, Rt);
        ee(this, di);
        (this.config = t),
          H(this, dn, new Set()),
          H(this, Rt, new Map()),
          H(this, di, 0);
      }
      build(t, n, r) {
        const s = new QE({
          mutationCache: this,
          mutationId: ++Ri(this, di)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(s), s;
      }
      add(t) {
        C(this, dn).add(t);
        const n = Ui(t);
        if (typeof n == "string") {
          const r = C(this, Rt).get(n);
          r ? r.push(t) : C(this, Rt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (C(this, dn).delete(t)) {
          const n = Ui(t);
          if (typeof n == "string") {
            const r = C(this, Rt).get(n);
            if (r)
              if (r.length > 1) {
                const s = r.indexOf(t);
                s !== -1 && r.splice(s, 1);
              } else r[0] === t && C(this, Rt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = Ui(t);
        if (typeof n == "string") {
          const r = C(this, Rt).get(n),
            s =
              r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !s || s === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = Ui(t);
        if (typeof n == "string") {
          const s =
            (r = C(this, Rt).get(n)) == null
              ? void 0
              : r.find((i) => i !== t && i.state.isPaused);
          return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        ze.batch(() => {
          C(this, dn).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            C(this, dn).clear(),
            C(this, Rt).clear();
        });
      }
      getAll() {
        return Array.from(C(this, dn));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Rf(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Rf(t, n));
      }
      notify(t) {
        ze.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return ze.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(Tt)))
        );
      }
    }),
    (dn = new WeakMap()),
    (Rt = new WeakMap()),
    (di = new WeakMap()),
    th);
function Ui(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function Nf(e) {
  return {
    onFetch: (t, n) => {
      var u, d, f, p, m;
      const r = t.options,
        s =
          (f =
            (d = (u = t.fetchOptions) == null ? void 0 : u.meta) == null
              ? void 0
              : d.fetchMore) == null
            ? void 0
            : f.direction,
        i = ((p = t.state.data) == null ? void 0 : p.pages) || [],
        o = ((m = t.state.data) == null ? void 0 : m.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        c = 0;
      const l = async () => {
        let h = !1;
        const g = (w) => {
            Object.defineProperty(w, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (h = !0)
                  : t.signal.addEventListener("abort", () => {
                      h = !0;
                    }),
                t.signal
              ),
            });
          },
          v = cy(t.options, t.fetchOptions),
          b = async (w, T, S) => {
            if (h) return Promise.reject();
            if (T == null && w.pages.length) return Promise.resolve(w);
            const E = {
              client: t.client,
              queryKey: t.queryKey,
              pageParam: T,
              direction: S ? "backward" : "forward",
              meta: t.options.meta,
            };
            g(E);
            const R = await v(E),
              { maxPages: A } = t.options,
              N = S ? $E : UE;
            return {
              pages: N(w.pages, R, A),
              pageParams: N(w.pageParams, T, A),
            };
          };
        if (s && i.length) {
          const w = s === "backward",
            T = w ? JE : jf,
            S = { pages: i, pageParams: o },
            E = T(r, S);
          a = await b(S, E, w);
        } else {
          const w = e ?? i.length;
          do {
            const T = c === 0 ? o[0] ?? r.initialPageParam : jf(r, a);
            if (c > 0 && T == null) break;
            (a = await b(a, T)), c++;
          } while (c < w);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var h, g;
            return (g = (h = t.options).persister) == null
              ? void 0
              : g.call(
                  h,
                  l,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = l);
    },
  };
}
function jf(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function JE(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var Re,
  An,
  En,
  Ur,
  $r,
  Pn,
  zr,
  Wr,
  nh,
  qk =
    ((nh = class {
      constructor(e = {}) {
        ee(this, Re);
        ee(this, An);
        ee(this, En);
        ee(this, Ur);
        ee(this, $r);
        ee(this, Pn);
        ee(this, zr);
        ee(this, Wr);
        H(this, Re, e.queryCache || new KE()),
          H(this, An, e.mutationCache || new YE()),
          H(this, En, e.defaultOptions || {}),
          H(this, Ur, new Map()),
          H(this, $r, new Map()),
          H(this, Pn, 0);
      }
      mount() {
        Ri(this, Pn)._++,
          C(this, Pn) === 1 &&
            (H(
              this,
              zr,
              Xl.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), C(this, Re).onFocus());
              })
            ),
            H(
              this,
              Wr,
              xo.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), C(this, Re).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Ri(this, Pn)._--,
          C(this, Pn) === 0 &&
            ((e = C(this, zr)) == null || e.call(this),
            H(this, zr, void 0),
            (t = C(this, Wr)) == null || t.call(this),
            H(this, Wr, void 0));
      }
      isFetching(e) {
        return C(this, Re).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return C(this, An).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = C(this, Re).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = C(this, Re).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Dr(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return C(this, Re)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          s = C(this, Re).get(r.queryHash),
          i = s == null ? void 0 : s.state.data,
          o = VE(t, i);
        if (o !== void 0)
          return C(this, Re)
            .build(this, r)
            .setData(o, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return ze.batch(() =>
          C(this, Re)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = C(this, Re).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = C(this, Re);
        ze.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = C(this, Re),
          r = { type: "active", ...e };
        return ze.batch(
          () => (
            n.findAll(e).forEach((s) => {
              s.reset();
            }),
            this.refetchQueries(r, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = ze.batch(() =>
            C(this, Re)
              .findAll(e)
              .map((s) => s.cancel(n))
          );
        return Promise.all(r).then(Tt).catch(Tt);
      }
      invalidateQueries(e, t = {}) {
        return ze.batch(() => {
          if (
            (C(this, Re)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none")
          )
            return Promise.resolve();
          const n = {
            ...e,
            type:
              (e == null ? void 0 : e.refetchType) ??
              (e == null ? void 0 : e.type) ??
              "active",
          };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = ze.batch(() =>
            C(this, Re)
              .findAll(e)
              .filter((s) => !s.isDisabled())
              .map((s) => {
                let i = s.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(Tt)),
                  s.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(Tt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = C(this, Re).build(this, t);
        return n.isStaleByTime(Dr(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Tt).catch(Tt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Nf(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Tt).catch(Tt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = Nf(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return xo.isOnline()
          ? C(this, An).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return C(this, Re);
      }
      getMutationCache() {
        return C(this, An);
      }
      getDefaultOptions() {
        return C(this, En);
      }
      setDefaultOptions(e) {
        H(this, En, e);
      }
      setQueryDefaults(e, t) {
        C(this, Ur).set(qs(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...C(this, Ur).values()],
          n = {};
        return (
          t.forEach((r) => {
            Zs(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        C(this, $r).set(qs(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...C(this, $r).values()];
        let n = {};
        return (
          t.forEach((r) => {
            Zs(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...C(this, En).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Kl(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === Ql && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...C(this, En).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        C(this, Re).clear(), C(this, An).clear();
      }
    }),
    (Re = new WeakMap()),
    (An = new WeakMap()),
    (En = new WeakMap()),
    (Ur = new WeakMap()),
    ($r = new WeakMap()),
    (Pn = new WeakMap()),
    (zr = new WeakMap()),
    (Wr = new WeakMap()),
    nh),
  at,
  he,
  fi,
  et,
  rr,
  Hr,
  Rn,
  Zt,
  hi,
  qr,
  Zr,
  sr,
  ir,
  kn,
  Gr,
  be,
  As,
  vc,
  xc,
  bc,
  wc,
  Sc,
  _c,
  Tc,
  py,
  rh,
  eP =
    ((rh = class extends _i {
      constructor(t, n) {
        super();
        ee(this, be);
        ee(this, at);
        ee(this, he);
        ee(this, fi);
        ee(this, et);
        ee(this, rr);
        ee(this, Hr);
        ee(this, Rn);
        ee(this, Zt);
        ee(this, hi);
        ee(this, qr);
        ee(this, Zr);
        ee(this, sr);
        ee(this, ir);
        ee(this, kn);
        ee(this, Gr, new Set());
        (this.options = n),
          H(this, at, t),
          H(this, Zt, null),
          H(this, Rn, yc()),
          this.options.experimental_prefetchInRender ||
            C(this, Rn).reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled"
              )
            ),
          this.bindMethods(),
          this.setOptions(n);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (C(this, he).addObserver(this),
          Df(C(this, he), this.options)
            ? fe(this, be, As).call(this)
            : this.updateResult(),
          fe(this, be, wc).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return Cc(C(this, he), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return Cc(C(this, he), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          fe(this, be, Sc).call(this),
          fe(this, be, _c).call(this),
          C(this, he).removeObserver(this);
      }
      setOptions(t, n) {
        const r = this.options,
          s = C(this, he);
        if (
          ((this.options = C(this, at).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof kt(this.options.enabled, C(this, he)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean"
          );
        fe(this, be, Tc).call(this),
          C(this, he).setOptions(this.options),
          r._defaulted &&
            !pc(this.options, r) &&
            C(this, at)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: C(this, he),
                observer: this,
              });
        const i = this.hasListeners();
        i && Mf(C(this, he), s, this.options, r) && fe(this, be, As).call(this),
          this.updateResult(n),
          i &&
            (C(this, he) !== s ||
              kt(this.options.enabled, C(this, he)) !==
                kt(r.enabled, C(this, he)) ||
              Dr(this.options.staleTime, C(this, he)) !==
                Dr(r.staleTime, C(this, he))) &&
            fe(this, be, vc).call(this);
        const o = fe(this, be, xc).call(this);
        i &&
          (C(this, he) !== s ||
            kt(this.options.enabled, C(this, he)) !==
              kt(r.enabled, C(this, he)) ||
            o !== C(this, kn)) &&
          fe(this, be, bc).call(this, o);
      }
      getOptimisticResult(t) {
        const n = C(this, at).getQueryCache().build(C(this, at), t),
          r = this.createResult(n, t);
        return (
          nP(this, r) &&
            (H(this, et, r),
            H(this, Hr, this.options),
            H(this, rr, C(this, he).state)),
          r
        );
      }
      getCurrentResult() {
        return C(this, et);
      }
      trackResult(t, n) {
        const r = {};
        return (
          Object.keys(t).forEach((s) => {
            Object.defineProperty(r, s, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(s), n == null || n(s), t[s]),
            });
          }),
          r
        );
      }
      trackProp(t) {
        C(this, Gr).add(t);
      }
      getCurrentQuery() {
        return C(this, he);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const n = C(this, at).defaultQueryOptions(t),
          r = C(this, at).getQueryCache().build(C(this, at), n);
        return r.fetch().then(() => this.createResult(r, n));
      }
      fetch(t) {
        return fe(this, be, As)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), C(this, et)));
      }
      createResult(t, n) {
        var A;
        const r = C(this, he),
          s = this.options,
          i = C(this, et),
          o = C(this, rr),
          a = C(this, Hr),
          l = t !== r ? t.state : C(this, fi),
          { state: u } = t;
        let d = { ...u },
          f = !1,
          p;
        if (n._optimisticResults) {
          const N = this.hasListeners(),
            D = !N && Df(t, n),
            L = N && Mf(t, r, n, s);
          (D || L) && (d = { ...d, ...hy(u.data, t.options) }),
            n._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
        }
        let { error: m, errorUpdatedAt: h, status: g } = d;
        if (n.select && d.data !== void 0)
          if (
            i &&
            d.data === (o == null ? void 0 : o.data) &&
            n.select === C(this, hi)
          )
            p = C(this, qr);
          else
            try {
              H(this, hi, n.select),
                (p = n.select(d.data)),
                (p = gc(i == null ? void 0 : i.data, p, n)),
                H(this, qr, p),
                H(this, Zt, null);
            } catch (N) {
              H(this, Zt, N);
            }
        else p = d.data;
        if (n.placeholderData !== void 0 && p === void 0 && g === "pending") {
          let N;
          if (
            i != null &&
            i.isPlaceholderData &&
            n.placeholderData === (a == null ? void 0 : a.placeholderData)
          )
            N = i.data;
          else if (
            ((N =
              typeof n.placeholderData == "function"
                ? n.placeholderData(
                    (A = C(this, Zr)) == null ? void 0 : A.state.data,
                    C(this, Zr)
                  )
                : n.placeholderData),
            n.select && N !== void 0)
          )
            try {
              (N = n.select(N)), H(this, Zt, null);
            } catch (D) {
              H(this, Zt, D);
            }
          N !== void 0 &&
            ((g = "success"),
            (p = gc(i == null ? void 0 : i.data, N, n)),
            (f = !0));
        }
        C(this, Zt) &&
          ((m = C(this, Zt)),
          (p = C(this, qr)),
          (h = Date.now()),
          (g = "error"));
        const v = d.fetchStatus === "fetching",
          b = g === "pending",
          w = g === "error",
          T = b && v,
          S = p !== void 0,
          R = {
            status: g,
            fetchStatus: d.fetchStatus,
            isPending: b,
            isSuccess: g === "success",
            isError: w,
            isInitialLoading: T,
            isLoading: T,
            data: p,
            dataUpdatedAt: d.dataUpdatedAt,
            error: m,
            errorUpdatedAt: h,
            failureCount: d.fetchFailureCount,
            failureReason: d.fetchFailureReason,
            errorUpdateCount: d.errorUpdateCount,
            isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
            isFetchedAfterMount:
              d.dataUpdateCount > l.dataUpdateCount ||
              d.errorUpdateCount > l.errorUpdateCount,
            isFetching: v,
            isRefetching: v && !b,
            isLoadingError: w && !S,
            isPaused: d.fetchStatus === "paused",
            isPlaceholderData: f,
            isRefetchError: w && S,
            isStale: Yl(t, n),
            refetch: this.refetch,
            promise: C(this, Rn),
          };
        if (this.options.experimental_prefetchInRender) {
          const N = (j) => {
              R.status === "error"
                ? j.reject(R.error)
                : R.data !== void 0 && j.resolve(R.data);
            },
            D = () => {
              const j = H(this, Rn, (R.promise = yc()));
              N(j);
            },
            L = C(this, Rn);
          switch (L.status) {
            case "pending":
              t.queryHash === r.queryHash && N(L);
              break;
            case "fulfilled":
              (R.status === "error" || R.data !== L.value) && D();
              break;
            case "rejected":
              (R.status !== "error" || R.error !== L.reason) && D();
              break;
          }
        }
        return R;
      }
      updateResult(t) {
        const n = C(this, et),
          r = this.createResult(C(this, he), this.options);
        if (
          (H(this, rr, C(this, he).state),
          H(this, Hr, this.options),
          C(this, rr).data !== void 0 && H(this, Zr, C(this, he)),
          pc(r, n))
        )
          return;
        H(this, et, r);
        const s = {},
          i = () => {
            if (!n) return !0;
            const { notifyOnChangeProps: o } = this.options,
              a = typeof o == "function" ? o() : o;
            if (a === "all" || (!a && !C(this, Gr).size)) return !0;
            const c = new Set(a ?? C(this, Gr));
            return (
              this.options.throwOnError && c.add("error"),
              Object.keys(C(this, et)).some((l) => {
                const u = l;
                return C(this, et)[u] !== n[u] && c.has(u);
              })
            );
          };
        (t == null ? void 0 : t.listeners) !== !1 && i() && (s.listeners = !0),
          fe(this, be, py).call(this, { ...s, ...t });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && fe(this, be, wc).call(this);
      }
    }),
    (at = new WeakMap()),
    (he = new WeakMap()),
    (fi = new WeakMap()),
    (et = new WeakMap()),
    (rr = new WeakMap()),
    (Hr = new WeakMap()),
    (Rn = new WeakMap()),
    (Zt = new WeakMap()),
    (hi = new WeakMap()),
    (qr = new WeakMap()),
    (Zr = new WeakMap()),
    (sr = new WeakMap()),
    (ir = new WeakMap()),
    (kn = new WeakMap()),
    (Gr = new WeakMap()),
    (be = new WeakSet()),
    (As = function (t) {
      fe(this, be, Tc).call(this);
      let n = C(this, he).fetch(this.options, t);
      return (t != null && t.throwOnError) || (n = n.catch(Tt)), n;
    }),
    (vc = function () {
      fe(this, be, Sc).call(this);
      const t = Dr(this.options.staleTime, C(this, he));
      if (pr || C(this, et).isStale || !hc(t)) return;
      const r = oy(C(this, et).dataUpdatedAt, t) + 1;
      H(
        this,
        sr,
        setTimeout(() => {
          C(this, et).isStale || this.updateResult();
        }, r)
      );
    }),
    (xc = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(C(this, he))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (bc = function (t) {
      fe(this, be, _c).call(this),
        H(this, kn, t),
        !(
          pr ||
          kt(this.options.enabled, C(this, he)) === !1 ||
          !hc(C(this, kn)) ||
          C(this, kn) === 0
        ) &&
          H(
            this,
            ir,
            setInterval(() => {
              (this.options.refetchIntervalInBackground || Xl.isFocused()) &&
                fe(this, be, As).call(this);
            }, C(this, kn))
          );
    }),
    (wc = function () {
      fe(this, be, vc).call(this),
        fe(this, be, bc).call(this, fe(this, be, xc).call(this));
    }),
    (Sc = function () {
      C(this, sr) && (clearTimeout(C(this, sr)), H(this, sr, void 0));
    }),
    (_c = function () {
      C(this, ir) && (clearInterval(C(this, ir)), H(this, ir, void 0));
    }),
    (Tc = function () {
      const t = C(this, at).getQueryCache().build(C(this, at), this.options);
      if (t === C(this, he)) return;
      const n = C(this, he);
      H(this, he, t),
        H(this, fi, t.state),
        this.hasListeners() &&
          (n == null || n.removeObserver(this), t.addObserver(this));
    }),
    (py = function (t) {
      ze.batch(() => {
        t.listeners &&
          this.listeners.forEach((n) => {
            n(C(this, et));
          }),
          C(this, at)
            .getQueryCache()
            .notify({ query: C(this, he), type: "observerResultsUpdated" });
      });
    }),
    rh);
function tP(e, t) {
  return (
    kt(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function Df(e, t) {
  return tP(e, t) || (e.state.data !== void 0 && Cc(e, t, t.refetchOnMount));
}
function Cc(e, t, n) {
  if (kt(t.enabled, e) !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && Yl(e, t));
  }
  return !1;
}
function Mf(e, t, n, r) {
  return (
    (e !== t || kt(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    Yl(e, n)
  );
}
function Yl(e, t) {
  return kt(t.enabled, e) !== !1 && e.isStaleByTime(Dr(t.staleTime, e));
}
function nP(e, t) {
  return !pc(e.getCurrentResult(), t);
}
var my = x.createContext(void 0),
  rP = (e) => {
    const t = x.useContext(my);
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  Zk = ({ client: e, children: t }) => (
    x.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    y.jsx(my.Provider, { value: e, children: t })
  ),
  gy = x.createContext(!1),
  sP = () => x.useContext(gy);
gy.Provider;
function iP() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var oP = x.createContext(iP()),
  aP = () => x.useContext(oP);
function cP(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function Ff() {}
var lP = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  uP = (e) => {
    x.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  dP = ({
    result: e,
    errorResetBoundary: t,
    throwOnError: n,
    query: r,
    suspense: s,
  }) =>
    e.isError &&
    !t.isReset() &&
    !e.isFetching &&
    r &&
    ((s && e.data === void 0) || cP(n, [e.error, r])),
  fP = (e) => {
    const t = e.staleTime;
    e.suspense &&
      ((e.staleTime =
        typeof t == "function"
          ? (...n) => Math.max(t(...n), 1e3)
          : Math.max(t ?? 1e3, 1e3)),
      typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
  },
  hP = (e, t) => e.isLoading && e.isFetching && !t,
  pP = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  Lf = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function mP(e, t, n) {
  var d, f, p, m, h;
  const r = rP(),
    s = sP(),
    i = aP(),
    o = r.defaultQueryOptions(e);
  (f =
    (d = r.getDefaultOptions().queries) == null
      ? void 0
      : d._experimental_beforeQuery) == null || f.call(d, o),
    (o._optimisticResults = s ? "isRestoring" : "optimistic"),
    fP(o),
    lP(o, i),
    uP(i);
  const a = !r.getQueryCache().get(o.queryHash),
    [c] = x.useState(() => new t(r, o)),
    l = c.getOptimisticResult(o),
    u = !s && e.subscribed !== !1;
  if (
    (x.useSyncExternalStore(
      x.useCallback(
        (g) => {
          const v = u ? c.subscribe(ze.batchCalls(g)) : Ff;
          return c.updateResult(), v;
        },
        [c, u]
      ),
      () => c.getCurrentResult(),
      () => c.getCurrentResult()
    ),
    x.useEffect(() => {
      c.setOptions(o, { listeners: !1 });
    }, [o, c]),
    pP(o, l))
  )
    throw Lf(o, c, i);
  if (
    dP({
      result: l,
      errorResetBoundary: i,
      throwOnError: o.throwOnError,
      query: r.getQueryCache().get(o.queryHash),
      suspense: o.suspense,
    })
  )
    throw l.error;
  if (
    ((m =
      (p = r.getDefaultOptions().queries) == null
        ? void 0
        : p._experimental_afterQuery) == null || m.call(p, o, l),
    o.experimental_prefetchInRender && !pr && hP(l, s))
  ) {
    const g = a
      ? Lf(o, c, i)
      : (h = r.getQueryCache().get(o.queryHash)) == null
      ? void 0
      : h.promise;
    g == null ||
      g.catch(Ff).finally(() => {
        c.updateResult();
      });
  }
  return o.notifyOnChangeProps ? l : c.trackResult(l);
}
function Ti(e, t) {
  return mP(e, eP);
}
const yy = () => {
    const e = Le((r) => r.lang),
      { data: t, isPending: n } = Ti({
        queryKey: ["industries", e],
        queryFn: () => LE(e),
        select: ({ data: r }) => r.data,
      });
    return { data: t, isPending: n };
  },
  Gk = ({ className: e }) => {
    const t = Le((s) => s.lang),
      { data: n, isPending: r } = yy();
    return y.jsx("section", {
      className: re("relative w-full bg-[#FDEDEE] -z-10 py-10", e),
      children: y.jsx(st, {
        children: r
          ? y.jsx(us, {})
          : y.jsxs(y.Fragment, {
              children: [
                y.jsx("h3", {
                  className: "h2 mb-4",
                  children: oc[We(t)].title,
                }),
                y.jsx("div", {
                  className: "grid md:grid-cols-4 grid-cols-2 gap-6",
                  children:
                    n == null
                      ? void 0
                      : n.map((s, i) => y.jsx(ep, { ...s }, i)),
                }),
                y.jsxs("div", {
                  className:
                    "flex items-center gap-3 mt-8 text-on_surface_v text-lg",
                  children: [
                    y.jsx("div", {
                      className: "md:w-1 w-4 md:h-[38px] h-40 bg-teritary_08",
                    }),
                    y.jsx("p", {
                      className: "text-18",
                      children: oc[We(t)].bottom_text,
                    }),
                  ],
                }),
              ],
            }),
      }),
    });
  },
  vy = [
    {
      title: "Время выставки",
      data: [
        { name: "Монтаж выставки", date: "12 Мая – 10 Июня 2025 года" },
        { name: "Работа", date: "11–13 Июня 2025 года" },
        { name: "Демонтаж", date: "13–14 Июня 2025 года" },
      ],
    },
    {
      title: "Exhibition time",
      data: [
        { name: "Exhibition assembly", date: "12 May — 10 June 2025" },
        { name: "Exhibition days", date: "11–13 June 2025" },
        { name: "Exhibition dismantling", date: "13–14 June 2025" },
      ],
    },
  ],
  xy = () => {
    const e = Le((r) => r.lang),
      { data: t, isPending: n } = Ti({
        queryKey: ["exhibiton-time", e],
        queryFn: () => IE(e),
        select: ({ data: r }) => r.data,
      });
    return { data: t, isPending: n };
  },
  Kk = ({ className: e }) => {
    const t = Le((s) => s.lang),
      { data: n, isPending: r } = xy();
    return y.jsx("section", {
      className: re("bg-surface_container py-10 md:py-20", e),
      children: y.jsx(st, {
        children: r
          ? y.jsx(us, {})
          : y.jsxs(y.Fragment, {
              children: [
                y.jsx("h2", {
                  className: "h2 mb-6",
                  children: vy[We(t)].title,
                }),
                y.jsx("div", {
                  className: "flex flex-col md:flex-row items-center gap-6",
                  children:
                    n == null
                      ? void 0
                      : n.map((s, i) =>
                          x.createElement(tp, {
                            bottomClassName: "!bg-white rounded-b-[2px]",
                            ...s,
                            key: i,
                            className: "w-full",
                          })
                        ),
                }),
              ],
            }),
      }),
    });
  },
  If = [
    {
      title: "Место проведения",
      data: [
        "Выставочный центр Торгово-промышленной палаты Туркменистана – это современная площадка для проведения международных выставок, конференций, форумов и деловых встреч",
        "Центр оснащен передовыми техническими решениями, включая мультимедийное оборудование, системы звукоусиления и освещения, конференц-залы с синхронным переводом, а также удобные зоны для переговоров. Просторные выставочные павильоны обеспечивают комфортные условия для демонстрации продукции и услуг.  ",
      ],
    },
    {
      title: "Venue",
      data: [
        "The Exhibition Centre of the Chamber of Commerce and Industry of Turkmenistan is a modern venue designed for international exhibitions, conferences, forums, and business meetings.",
        "The centre is equipped with cutting-edge technical solutions, including multimedia equipment, sound and lighting systems, conference rooms with simultaneous translation, and comfortable areas for negotiations. Spacious exhibition pavilions provide ideal conditions for showcasing products and services.",
      ],
    },
  ],
  Qk = ({ className: e }) => {
    const t = Le((n) => n.lang);
    return y.jsx("section", {
      className: re("gap-6 relative overflow-hidden", e),
      children: y.jsxs(st, {
        className:
          "md:py-20 py-10 grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-0 grid",
        children: [
          y.jsxs("div", {
            className: "flex-[0_0_50%]",
            children: [
              y.jsx("h3", { className: "h2 mb-6", children: If[We(t)].title }),
              y.jsx("div", {
                className:
                  "text-lg flex flex-col gap-6 text-on_surface_v normal  mb-10",
                children: If[We(t)].data.map((n) =>
                  y.jsx("p", { children: n }, n)
                ),
              }),
            ],
          }),
          y.jsx("div", {
            className: "h-full max-size-[600px] flex-[0_0_50%]",
            children: y.jsx("img", {
              src: "/about-place.jpg",
              alt: "",
              className: "size-full object-contain",
            }),
          }),
        ],
      }),
    });
  },
  $i = [
    {
      title: "Приглашение к участию",
      p: "Министерство текстильной промышленности Туркменистана приглашает бизнес-сообщество со всего мира присоединиться к этому уникальному событию, которое станет важным шагом к укреплению позиций Туркменистана в международной экономической арене.",
      button1: "Забронировать стенд",
      button2: "B2B | B2G встречи",
    },
    {
      title: "Invitation to Participate",
      p: "Ministry of Textile Industry of Turkmenistan invites the global business community to join this unique event, which will be a significant step toward strengthening Turkmenistan’s position on the global economic stage",
      button1: "Book a stand",
      button2: "B2B | B2G meetings",
    },
  ],
  Xk = ({ className: e }) => {
    const t = Le((n) => n.lang);
    return y.jsxs("section", {
      className: re("md:py-20 py-10 relative overflow-hidden", e),
      children: [
        y.jsx("img", {
          src: "/CTA.png",
          className: "absolute top-0 left-0 size-full -z-10 object-cover",
        }),
        y.jsxs(st, {
          children: [
            y.jsx("h3", {
              className: "h2 text-center !text-on_primary mb-6",
              children: $i[We(t)].title,
            }),
            y.jsx("p", {
              className:
                "text-center md:text-lg text-sm  text-primary_03 max-w-[828px] px-5 mx-auto mb-10",
              children: $i[We(t)].p,
            }),
            y.jsxs("div", {
              className: "flex flex-col md:flex-row items-center gap-6",
              children: [
                y.jsx(Me, {
                  to: "/stend-form",
                  className: "w-full",
                  children: y.jsx(ut, {
                    className:
                      "bg-reverse_primary w-full text-primary hover:bg-reverse_primary/90",
                    children: $i[We(t)].button1,
                  }),
                }),
                y.jsx(Me, {
                  to: "/B2B-B2GS",
                  className: "w-full",
                  children: y.jsx(ut, {
                    className:
                      "bg-reverse_primary w-full hover:bg-reverse_primary/90 text-primary",
                    children: $i[We(t)].button2,
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  by = (e) => {
    const t = Le((s) => s.lang),
      { data: n, isPending: r } = Ti({
        queryKey: ["static-words", t, e],
        queryFn: () => DE(t, e),
        select: ({ data: s }) => s.data,
      });
    return { data: n, isPending: r };
  },
  gP = (e, t, n, r) => {
    var i, o, a, c;
    const s = [n, { code: t, ...(r || {}) }];
    if (
      (o = (i = e == null ? void 0 : e.services) == null ? void 0 : i.logger) !=
        null &&
      o.forward
    )
      return e.services.logger.forward(s, "warn", "react-i18next::", !0);
    cr(s[0]) && (s[0] = `react-i18next:: ${s[0]}`),
      (c = (a = e == null ? void 0 : e.services) == null ? void 0 : a.logger) !=
        null && c.warn
        ? e.services.logger.warn(...s)
        : console != null && console.warn && console.warn(...s);
  },
  Vf = {},
  Ac = (e, t, n, r) => {
    (cr(n) && Vf[n]) || (cr(n) && (Vf[n] = new Date()), gP(e, t, n, r));
  },
  wy = (e, t) => () => {
    if (e.isInitialized) t();
    else {
      const n = () => {
        setTimeout(() => {
          e.off("initialized", n);
        }, 0),
          t();
      };
      e.on("initialized", n);
    }
  },
  Ec = (e, t, n) => {
    e.loadNamespaces(t, wy(e, n));
  },
  Bf = (e, t, n, r) => {
    if (
      (cr(n) && (n = [n]),
      e.options.preload && e.options.preload.indexOf(t) > -1)
    )
      return Ec(e, n, r);
    n.forEach((s) => {
      e.options.ns.indexOf(s) < 0 && e.options.ns.push(s);
    }),
      e.loadLanguages(t, wy(e, r));
  },
  yP = (e, t, n = {}) =>
    !t.languages || !t.languages.length
      ? (Ac(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
          languages: t.languages,
        }),
        !0)
      : t.hasLoadedNamespace(e, {
          lng: n.lng,
          precheck: (r, s) => {
            var i;
            if (
              ((i = n.bindI18n) == null
                ? void 0
                : i.indexOf("languageChanging")) > -1 &&
              r.services.backendConnector.backend &&
              r.isLanguageChangingTo &&
              !s(r.isLanguageChangingTo, e)
            )
              return !1;
          },
        }),
  cr = (e) => typeof e == "string",
  vP = (e) => typeof e == "object" && e !== null,
  xP =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  bP = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  wP = (e) => bP[e],
  SP = (e) => e.replace(xP, wP);
let Pc = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: SP,
};
const _P = (e = {}) => {
    Pc = { ...Pc, ...e };
  },
  TP = () => Pc;
let Sy;
const CP = (e) => {
    Sy = e;
  },
  AP = () => Sy,
  Yk = {
    type: "3rdParty",
    init(e) {
      _P(e.options.react), CP(e);
    },
  },
  EP = x.createContext();
class PP {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const RP = (e, t) => {
    const n = x.useRef();
    return (
      x.useEffect(() => {
        n.current = e;
      }, [e, t]),
      n.current
    );
  },
  _y = (e, t, n, r) => e.getFixedT(t, n, r),
  kP = (e, t, n, r) => x.useCallback(_y(e, t, n, r), [e, t, n, r]),
  Ty = (e, t = {}) => {
    var T, S, E, R;
    const { i18n: n } = t,
      { i18n: r, defaultNS: s } = x.useContext(EP) || {},
      i = n || r || AP();
    if ((i && !i.reportNamespaces && (i.reportNamespaces = new PP()), !i)) {
      Ac(
        i,
        "NO_I18NEXT_INSTANCE",
        "useTranslation: You will need to pass in an i18next instance by using initReactI18next"
      );
      const A = (D, L) =>
          cr(L)
            ? L
            : vP(L) && cr(L.defaultValue)
            ? L.defaultValue
            : Array.isArray(D)
            ? D[D.length - 1]
            : D,
        N = [A, {}, !1];
      return (N.t = A), (N.i18n = {}), (N.ready = !1), N;
    }
    (T = i.options.react) != null &&
      T.wait &&
      Ac(
        i,
        "DEPRECATED_OPTION",
        "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
      );
    const o = { ...TP(), ...i.options.react, ...t },
      { useSuspense: a, keyPrefix: c } = o;
    let l = e || s || ((S = i.options) == null ? void 0 : S.defaultNS);
    (l = cr(l) ? [l] : l || ["translation"]),
      (R = (E = i.reportNamespaces).addUsedNamespaces) == null || R.call(E, l);
    const u =
        (i.isInitialized || i.initializedStoreOnce) &&
        l.every((A) => yP(A, i, o)),
      d = kP(i, t.lng || null, o.nsMode === "fallback" ? l : l[0], c),
      f = () => d,
      p = () => _y(i, t.lng || null, o.nsMode === "fallback" ? l : l[0], c),
      [m, h] = x.useState(f);
    let g = l.join();
    t.lng && (g = `${t.lng}${g}`);
    const v = RP(g),
      b = x.useRef(!0);
    x.useEffect(() => {
      const { bindI18n: A, bindI18nStore: N } = o;
      (b.current = !0),
        !u &&
          !a &&
          (t.lng
            ? Bf(i, t.lng, l, () => {
                b.current && h(p);
              })
            : Ec(i, l, () => {
                b.current && h(p);
              })),
        u && v && v !== g && b.current && h(p);
      const D = () => {
        b.current && h(p);
      };
      return (
        A && (i == null || i.on(A, D)),
        N && (i == null || i.store.on(N, D)),
        () => {
          (b.current = !1),
            i && (A == null || A.split(" ").forEach((L) => i.off(L, D))),
            N && i && N.split(" ").forEach((L) => i.store.off(L, D));
        }
      );
    }, [i, g]),
      x.useEffect(() => {
        b.current && u && h(f);
      }, [i, c, u]);
    const w = [m, i, u];
    if (((w.t = m), (w.i18n = i), (w.ready = u), u || (!u && !a))) return w;
    throw new Promise((A) => {
      t.lng ? Bf(i, t.lng, l, () => A()) : Ec(i, l, () => A());
    });
  },
  Jk = () => {
    var f, p, m, h, g, v, b, w;
    const e = Le((T) => T.lang),
      { t } = Ty("about"),
      { data: n, isPending: r } = by("2"),
      s =
        (f = n == null ? void 0 : n.find((T) => T.key === "about_1")) == null
          ? void 0
          : f.text,
      i =
        (p = n == null ? void 0 : n.find((T) => T.key === "about_2")) == null
          ? void 0
          : p.text,
      o =
        (m = n == null ? void 0 : n.find((T) => T.key === "about_3")) == null
          ? void 0
          : m.text,
      a =
        (h = n == null ? void 0 : n.find((T) => T.key === "about_4")) == null
          ? void 0
          : h.text,
      c =
        (g = n == null ? void 0 : n.find((T) => T.key === "about_5")) == null
          ? void 0
          : g.list,
      l =
        (v = n == null ? void 0 : n.find((T) => T.key === "about_6")) == null
          ? void 0
          : v.text,
      u =
        (b = n == null ? void 0 : n.find((T) => T.key === "about_7")) == null
          ? void 0
          : b.text,
      d =
        (w = n == null ? void 0 : n.find((T) => T.key === "about_8")) == null
          ? void 0
          : w.list;
    return r
      ? y.jsx(us, {})
      : y.jsxs(st, {
          className: "flex flex-col md:my-20 my-10 gap-16",
          children: [
            y.jsxs("div", {
              className: "flex flex-col gap-6",
              children: [
                y.jsx("h2", { className: "h2", children: s }),
                y.jsx("div", {
                  className: "flex flex-col p gap-3",
                  dangerouslySetInnerHTML: { __html: i ?? "" },
                }),
              ],
            }),
            y.jsxs("div", {
              className: "flex flex-col gap-6",
              children: [
                y.jsx("h3", { className: "h2", children: o }),
                y.jsx("h4", { className: "p", children: a }),
                y.jsx("ol", {
                  type: "1",
                  className: "list-decimal pl-8 flex flex-col gap-3 ",
                  children:
                    c == null
                      ? void 0
                      : c.map((T, S) =>
                          y.jsx(
                            "li",
                            {
                              className: "p",
                              children: e === "ru" ? T.text_ru : T.text_en,
                            },
                            S
                          )
                        ),
                }),
              ],
            }),
            y.jsxs("div", {
              className: "flex flex-col gap-6",
              children: [
                y.jsx("h2", { className: "h2", children: l }),
                y.jsx("h3", { className: "p", children: u }),
                y.jsx("ul", {
                  className: "list-disc pl-8 flex flex-col gap-3 p",
                  children:
                    d == null
                      ? void 0
                      : d.map((T, S) =>
                          y.jsxs(
                            "li",
                            {
                              children: [
                                " ",
                                e === "ru" ? T.text_ru : T.text_en,
                              ],
                            },
                            S
                          )
                        ),
                }),
              ],
            }),
            y.jsx(Me, {
              className: "w-fit mx-auto",
              to: "/become-sponsor",
              children: y.jsx(ut, { children: t("main.button") }),
            }),
          ],
        });
  };
function OP(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Uf(e) {
  return OP(e) || Array.isArray(e);
}
function NP() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function Jl(e, t) {
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const s = JSON.stringify(Object.keys(e.breakpoints || {})),
    i = JSON.stringify(Object.keys(t.breakpoints || {}));
  return s !== i
    ? !1
    : n.every((o) => {
        const a = e[o],
          c = t[o];
        return typeof a == "function"
          ? `${a}` == `${c}`
          : !Uf(a) || !Uf(c)
          ? a === c
          : Jl(a, c);
      });
}
function $f(e) {
  return e
    .concat()
    .sort((t, n) => (t.name > n.name ? 1 : -1))
    .map((t) => t.options);
}
function jP(e, t) {
  if (e.length !== t.length) return !1;
  const n = $f(e),
    r = $f(t);
  return n.every((s, i) => {
    const o = r[i];
    return Jl(s, o);
  });
}
function eu(e) {
  return typeof e == "number";
}
function Rc(e) {
  return typeof e == "string";
}
function Zo(e) {
  return typeof e == "boolean";
}
function zf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Pe(e) {
  return Math.abs(e);
}
function tu(e) {
  return Math.sign(e);
}
function Fs(e, t) {
  return Pe(e - t);
}
function DP(e, t) {
  if (e === 0 || t === 0 || Pe(e) <= Pe(t)) return 0;
  const n = Fs(Pe(e), Pe(t));
  return Pe(n / e);
}
function MP(e) {
  return Math.round(e * 100) / 100;
}
function Gs(e) {
  return Ks(e).map(Number);
}
function jt(e) {
  return e[Ci(e)];
}
function Ci(e) {
  return Math.max(0, e.length - 1);
}
function nu(e, t) {
  return t === Ci(e);
}
function Wf(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Ks(e) {
  return Object.keys(e);
}
function Cy(e, t) {
  return [e, t].reduce(
    (n, r) => (
      Ks(r).forEach((s) => {
        const i = n[s],
          o = r[s],
          a = zf(i) && zf(o);
        n[s] = a ? Cy(i, o) : o;
      }),
      n
    ),
    {}
  );
}
function kc(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function FP(e, t) {
  const n = { start: r, center: s, end: i };
  function r() {
    return 0;
  }
  function s(c) {
    return i(c) / 2;
  }
  function i(c) {
    return t - c;
  }
  function o(c, l) {
    return Rc(e) ? n[e](c) : e(t, c, l);
  }
  return { measure: o };
}
function Qs() {
  let e = [];
  function t(s, i, o, a = { passive: !0 }) {
    let c;
    if ("addEventListener" in s)
      s.addEventListener(i, o, a), (c = () => s.removeEventListener(i, o, a));
    else {
      const l = s;
      l.addListener(o), (c = () => l.removeListener(o));
    }
    return e.push(c), r;
  }
  function n() {
    e = e.filter((s) => s());
  }
  const r = { add: t, clear: n };
  return r;
}
function LP(e, t, n, r) {
  const s = Qs(),
    i = 1e3 / 60;
  let o = null,
    a = 0,
    c = 0;
  function l() {
    s.add(e, "visibilitychange", () => {
      e.hidden && m();
    });
  }
  function u() {
    p(), s.clear();
  }
  function d(g) {
    if (!c) return;
    o || ((o = g), n(), n());
    const v = g - o;
    for (o = g, a += v; a >= i; ) n(), (a -= i);
    const b = a / i;
    r(b), c && (c = t.requestAnimationFrame(d));
  }
  function f() {
    c || (c = t.requestAnimationFrame(d));
  }
  function p() {
    t.cancelAnimationFrame(c), (o = null), (a = 0), (c = 0);
  }
  function m() {
    (o = null), (a = 0);
  }
  return { init: l, destroy: u, start: f, stop: p, update: n, render: r };
}
function IP(e, t) {
  const n = t === "rtl",
    r = e === "y",
    s = r ? "y" : "x",
    i = r ? "x" : "y",
    o = !r && n ? -1 : 1,
    a = u(),
    c = d();
  function l(m) {
    const { height: h, width: g } = m;
    return r ? h : g;
  }
  function u() {
    return r ? "top" : n ? "right" : "left";
  }
  function d() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function f(m) {
    return m * o;
  }
  return {
    scroll: s,
    cross: i,
    startEdge: a,
    endEdge: c,
    measureSize: l,
    direction: f,
  };
}
function mr(e = 0, t = 0) {
  const n = Pe(e - t);
  function r(l) {
    return l < e;
  }
  function s(l) {
    return l > t;
  }
  function i(l) {
    return r(l) || s(l);
  }
  function o(l) {
    return i(l) ? (r(l) ? e : t) : l;
  }
  function a(l) {
    return n ? l - n * Math.ceil((l - t) / n) : l;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: o,
    reachedAny: i,
    reachedMax: s,
    reachedMin: r,
    removeOffset: a,
  };
}
function Ay(e, t, n) {
  const { constrain: r } = mr(0, e),
    s = e + 1;
  let i = o(t);
  function o(f) {
    return n ? Pe((s + f) % s) : r(f);
  }
  function a() {
    return i;
  }
  function c(f) {
    return (i = o(f)), d;
  }
  function l(f) {
    return u().set(a() + f);
  }
  function u() {
    return Ay(e, a(), n);
  }
  const d = { get: a, set: c, add: l, clone: u };
  return d;
}
function VP(e, t, n, r, s, i, o, a, c, l, u, d, f, p, m, h, g, v, b) {
  const { cross: w, direction: T } = e,
    S = ["INPUT", "SELECT", "TEXTAREA"],
    E = { passive: !1 },
    R = Qs(),
    A = Qs(),
    N = mr(50, 225).constrain(p.measure(20)),
    D = { mouse: 300, touch: 400 },
    L = { mouse: 500, touch: 600 },
    j = m ? 43 : 25;
  let $ = !1,
    W = 0,
    ne = 0,
    X = !1,
    Z = !1,
    q = !1,
    se = !1;
  function me(G) {
    if (!b) return;
    function de(Ue) {
      (Zo(b) || b(G, Ue)) && Ye(Ue);
    }
    const Se = t;
    R.add(Se, "dragstart", (Ue) => Ue.preventDefault(), E)
      .add(Se, "touchmove", () => {}, E)
      .add(Se, "touchend", () => {})
      .add(Se, "touchstart", de)
      .add(Se, "mousedown", de)
      .add(Se, "touchcancel", ye)
      .add(Se, "contextmenu", ye)
      .add(Se, "click", Oe, !0);
  }
  function ge() {
    R.clear(), A.clear();
  }
  function He() {
    const G = se ? n : t;
    A.add(G, "touchmove", ue, E)
      .add(G, "touchend", ye)
      .add(G, "mousemove", ue, E)
      .add(G, "mouseup", ye);
  }
  function dt(G) {
    const de = G.nodeName || "";
    return S.includes(de);
  }
  function qe() {
    return (m ? L : D)[se ? "mouse" : "touch"];
  }
  function At(G, de) {
    const Se = d.add(tu(G) * -1),
      Ue = u.byDistance(G, !m).distance;
    return m || Pe(G) < N
      ? Ue
      : g && de
      ? Ue * 0.5
      : u.byIndex(Se.get(), 0).distance;
  }
  function Ye(G) {
    const de = kc(G, r);
    (se = de),
      (q = m && de && !G.buttons && $),
      ($ = Fs(s.get(), o.get()) >= 2),
      !(de && G.button !== 0) &&
        (dt(G.target) ||
          ((X = !0),
          i.pointerDown(G),
          l.useFriction(0).useDuration(0),
          s.set(o),
          He(),
          (W = i.readPoint(G)),
          (ne = i.readPoint(G, w)),
          f.emit("pointerDown")));
  }
  function ue(G) {
    if (!kc(G, r) && G.touches.length >= 2) return ye(G);
    const Se = i.readPoint(G),
      Ue = i.readPoint(G, w),
      ft = Fs(Se, W),
      bt = Fs(Ue, ne);
    if (!Z && !se && (!G.cancelable || ((Z = ft > bt), !Z))) return ye(G);
    const _ = i.pointerMove(G);
    ft > h && (q = !0),
      l.useFriction(0.3).useDuration(0.75),
      a.start(),
      s.add(T(_)),
      G.preventDefault();
  }
  function ye(G) {
    const Se = u.byDistance(0, !1).index !== d.get(),
      Ue = i.pointerUp(G) * qe(),
      ft = At(T(Ue), Se),
      bt = DP(Ue, ft),
      _ = j - 10 * bt,
      P = v + bt / 50;
    (Z = !1),
      (X = !1),
      A.clear(),
      l.useDuration(_).useFriction(P),
      c.distance(ft, !m),
      (se = !1),
      f.emit("pointerUp");
  }
  function Oe(G) {
    q && (G.stopPropagation(), G.preventDefault(), (q = !1));
  }
  function Ie() {
    return X;
  }
  return { init: me, destroy: ge, pointerDown: Ie };
}
function BP(e, t) {
  let r, s;
  function i(d) {
    return d.timeStamp;
  }
  function o(d, f) {
    const m = `client${(f || e.scroll) === "x" ? "X" : "Y"}`;
    return (kc(d, t) ? d : d.touches[0])[m];
  }
  function a(d) {
    return (r = d), (s = d), o(d);
  }
  function c(d) {
    const f = o(d) - o(s),
      p = i(d) - i(r) > 170;
    return (s = d), p && (r = d), f;
  }
  function l(d) {
    if (!r || !s) return 0;
    const f = o(s) - o(r),
      p = i(d) - i(r),
      m = i(d) - i(s) > 170,
      h = f / p;
    return p && !m && Pe(h) > 0.1 ? h : 0;
  }
  return { pointerDown: a, pointerMove: c, pointerUp: l, readPoint: o };
}
function UP() {
  function e(n) {
    const { offsetTop: r, offsetLeft: s, offsetWidth: i, offsetHeight: o } = n;
    return {
      top: r,
      right: s + i,
      bottom: r + o,
      left: s,
      width: i,
      height: o,
    };
  }
  return { measure: e };
}
function $P(e) {
  function t(r) {
    return e * (r / 100);
  }
  return { measure: t };
}
function zP(e, t, n, r, s, i, o) {
  const a = [e].concat(r);
  let c,
    l,
    u = [],
    d = !1;
  function f(g) {
    return s.measureSize(o.measure(g));
  }
  function p(g) {
    if (!i) return;
    (l = f(e)), (u = r.map(f));
    function v(b) {
      for (const w of b) {
        if (d) return;
        const T = w.target === e,
          S = r.indexOf(w.target),
          E = T ? l : u[S],
          R = f(T ? e : r[S]);
        if (Pe(R - E) >= 0.5) {
          g.reInit(), t.emit("resize");
          break;
        }
      }
    }
    (c = new ResizeObserver((b) => {
      (Zo(i) || i(g, b)) && v(b);
    })),
      n.requestAnimationFrame(() => {
        a.forEach((b) => c.observe(b));
      });
  }
  function m() {
    (d = !0), c && c.disconnect();
  }
  return { init: p, destroy: m };
}
function WP(e, t, n, r, s, i) {
  let o = 0,
    a = 0,
    c = s,
    l = i,
    u = e.get(),
    d = 0;
  function f() {
    const E = r.get() - e.get(),
      R = !c;
    let A = 0;
    return (
      R
        ? ((o = 0), n.set(r), e.set(r), (A = E))
        : (n.set(e), (o += E / c), (o *= l), (u += o), e.add(o), (A = u - d)),
      (a = tu(A)),
      (d = u),
      S
    );
  }
  function p() {
    const E = r.get() - t.get();
    return Pe(E) < 0.001;
  }
  function m() {
    return c;
  }
  function h() {
    return a;
  }
  function g() {
    return o;
  }
  function v() {
    return w(s);
  }
  function b() {
    return T(i);
  }
  function w(E) {
    return (c = E), S;
  }
  function T(E) {
    return (l = E), S;
  }
  const S = {
    direction: h,
    duration: m,
    velocity: g,
    seek: f,
    settled: p,
    useBaseFriction: b,
    useBaseDuration: v,
    useFriction: T,
    useDuration: w,
  };
  return S;
}
function HP(e, t, n, r, s) {
  const i = s.measure(10),
    o = s.measure(50),
    a = mr(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function u(p) {
    if (!l()) return;
    const m = e.reachedMin(t.get()) ? "min" : "max",
      h = Pe(e[m] - t.get()),
      g = n.get() - t.get(),
      v = a.constrain(h / o);
    n.subtract(g * v),
      !p &&
        Pe(g) < i &&
        (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function d(p) {
    c = !p;
  }
  return { shouldConstrain: l, constrain: u, toggleActive: d };
}
function qP(e, t, n, r, s) {
  const i = mr(-t + e, 0),
    o = d(),
    a = u(),
    c = f();
  function l(m, h) {
    return Fs(m, h) <= 1;
  }
  function u() {
    const m = o[0],
      h = jt(o),
      g = o.lastIndexOf(m),
      v = o.indexOf(h) + 1;
    return mr(g, v);
  }
  function d() {
    return n
      .map((m, h) => {
        const { min: g, max: v } = i,
          b = i.constrain(m),
          w = !h,
          T = nu(n, h);
        return w ? v : T || l(g, b) ? g : l(v, b) ? v : b;
      })
      .map((m) => parseFloat(m.toFixed(3)));
  }
  function f() {
    if (t <= e + s) return [i.max];
    if (r === "keepSnaps") return o;
    const { min: m, max: h } = a;
    return o.slice(m, h);
  }
  return { snapsContained: c, scrollContainLimit: a };
}
function ZP(e, t, n) {
  const r = t[0],
    s = n ? r - e : jt(t);
  return { limit: mr(s, r) };
}
function GP(e, t, n, r) {
  const i = t.min + 0.1,
    o = t.max + 0.1,
    { reachedMin: a, reachedMax: c } = mr(i, o);
  function l(f) {
    return f === 1 ? c(n.get()) : f === -1 ? a(n.get()) : !1;
  }
  function u(f) {
    if (!l(f)) return;
    const p = e * (f * -1);
    r.forEach((m) => m.add(p));
  }
  return { loop: u };
}
function KP(e) {
  const { max: t, length: n } = e;
  function r(i) {
    const o = i - t;
    return n ? o / -n : 0;
  }
  return { get: r };
}
function QP(e, t, n, r, s) {
  const { startEdge: i, endEdge: o } = e,
    { groupSlides: a } = s,
    c = d().map(t.measure),
    l = f(),
    u = p();
  function d() {
    return a(r)
      .map((h) => jt(h)[o] - h[0][i])
      .map(Pe);
  }
  function f() {
    return r.map((h) => n[i] - h[i]).map((h) => -Pe(h));
  }
  function p() {
    return a(l)
      .map((h) => h[0])
      .map((h, g) => h + c[g]);
  }
  return { snaps: l, snapsAligned: u };
}
function XP(e, t, n, r, s, i) {
  const { groupSlides: o } = s,
    { min: a, max: c } = r,
    l = u();
  function u() {
    const f = o(i),
      p = !e || t === "keepSnaps";
    return n.length === 1
      ? [i]
      : p
      ? f
      : f.slice(a, c).map((m, h, g) => {
          const v = !h,
            b = nu(g, h);
          if (v) {
            const w = jt(g[0]) + 1;
            return Wf(w);
          }
          if (b) {
            const w = Ci(i) - jt(g)[0] + 1;
            return Wf(w, jt(g)[0]);
          }
          return m;
        });
  }
  return { slideRegistry: l };
}
function YP(e, t, n, r, s) {
  const { reachedAny: i, removeOffset: o, constrain: a } = r;
  function c(m) {
    return m.concat().sort((h, g) => Pe(h) - Pe(g))[0];
  }
  function l(m) {
    const h = e ? o(m) : a(m),
      g = t
        .map((b, w) => ({ diff: u(b - h, 0), index: w }))
        .sort((b, w) => Pe(b.diff) - Pe(w.diff)),
      { index: v } = g[0];
    return { index: v, distance: h };
  }
  function u(m, h) {
    const g = [m, m + n, m - n];
    if (!e) return m;
    if (!h) return c(g);
    const v = g.filter((b) => tu(b) === h);
    return v.length ? c(v) : jt(g) - n;
  }
  function d(m, h) {
    const g = t[m] - s.get(),
      v = u(g, h);
    return { index: m, distance: v };
  }
  function f(m, h) {
    const g = s.get() + m,
      { index: v, distance: b } = l(g),
      w = !e && i(g);
    if (!h || w) return { index: v, distance: m };
    const T = t[v] - b,
      S = m + u(T, 0);
    return { index: v, distance: S };
  }
  return { byDistance: f, byIndex: d, shortcut: u };
}
function JP(e, t, n, r, s, i, o) {
  function a(d) {
    const f = d.distance,
      p = d.index !== t.get();
    i.add(f),
      f && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())),
      p && (n.set(t.get()), t.set(d.index), o.emit("select"));
  }
  function c(d, f) {
    const p = s.byDistance(d, f);
    a(p);
  }
  function l(d, f) {
    const p = t.clone().set(d),
      m = s.byIndex(p.get(), f);
    a(m);
  }
  return { distance: c, index: l };
}
function eR(e, t, n, r, s, i, o, a) {
  const c = { passive: !0, capture: !0 };
  let l = 0;
  function u(p) {
    if (!a) return;
    function m(h) {
      if (new Date().getTime() - l > 10) return;
      o.emit("slideFocusStart"), (e.scrollLeft = 0);
      const b = n.findIndex((w) => w.includes(h));
      eu(b) && (s.useDuration(0), r.index(b, 0), o.emit("slideFocus"));
    }
    i.add(document, "keydown", d, !1),
      t.forEach((h, g) => {
        i.add(
          h,
          "focus",
          (v) => {
            (Zo(a) || a(p, v)) && m(g);
          },
          c
        );
      });
  }
  function d(p) {
    p.code === "Tab" && (l = new Date().getTime());
  }
  return { init: u };
}
function Es(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(c) {
    t = o(c);
  }
  function s(c) {
    t += o(c);
  }
  function i(c) {
    t -= o(c);
  }
  function o(c) {
    return eu(c) ? c : c.get();
  }
  return { get: n, set: r, add: s, subtract: i };
}
function Ey(e, t) {
  const n = e.scroll === "x" ? o : a,
    r = t.style;
  let s = null,
    i = !1;
  function o(f) {
    return `translate3d(${f}px,0px,0px)`;
  }
  function a(f) {
    return `translate3d(0px,${f}px,0px)`;
  }
  function c(f) {
    if (i) return;
    const p = MP(e.direction(f));
    p !== s && ((r.transform = n(p)), (s = p));
  }
  function l(f) {
    i = !f;
  }
  function u() {
    i ||
      ((r.transform = ""),
      t.getAttribute("style") || t.removeAttribute("style"));
  }
  return { clear: u, to: c, toggleActive: l };
}
function tR(e, t, n, r, s, i, o, a, c) {
  const u = Gs(s),
    d = Gs(s).reverse(),
    f = v().concat(b());
  function p(R, A) {
    return R.reduce((N, D) => N - s[D], A);
  }
  function m(R, A) {
    return R.reduce((N, D) => (p(N, A) > 0 ? N.concat([D]) : N), []);
  }
  function h(R) {
    return i.map((A, N) => ({
      start: A - r[N] + 0.5 + R,
      end: A + t - 0.5 + R,
    }));
  }
  function g(R, A, N) {
    const D = h(A);
    return R.map((L) => {
      const j = N ? 0 : -n,
        $ = N ? n : 0,
        W = N ? "end" : "start",
        ne = D[L][W];
      return {
        index: L,
        loopPoint: ne,
        slideLocation: Es(-1),
        translate: Ey(e, c[L]),
        target: () => (a.get() > ne ? j : $),
      };
    });
  }
  function v() {
    const R = o[0],
      A = m(d, R);
    return g(A, n, !1);
  }
  function b() {
    const R = t - o[0] - 1,
      A = m(u, R);
    return g(A, -n, !0);
  }
  function w() {
    return f.every(({ index: R }) => {
      const A = u.filter((N) => N !== R);
      return p(A, t) <= 0.1;
    });
  }
  function T() {
    f.forEach((R) => {
      const { target: A, translate: N, slideLocation: D } = R,
        L = A();
      L !== D.get() && (N.to(L), D.set(L));
    });
  }
  function S() {
    f.forEach((R) => R.translate.clear());
  }
  return { canLoop: w, clear: S, loop: T, loopPoints: f };
}
function nR(e, t, n) {
  let r,
    s = !1;
  function i(c) {
    if (!n) return;
    function l(u) {
      for (const d of u)
        if (d.type === "childList") {
          c.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    (r = new MutationObserver((u) => {
      s || ((Zo(n) || n(c, u)) && l(u));
    })),
      r.observe(e, { childList: !0 });
  }
  function o() {
    r && r.disconnect(), (s = !0);
  }
  return { init: i, destroy: o };
}
function rR(e, t, n, r) {
  const s = {};
  let i = null,
    o = null,
    a,
    c = !1;
  function l() {
    (a = new IntersectionObserver(
      (m) => {
        c ||
          (m.forEach((h) => {
            const g = t.indexOf(h.target);
            s[g] = h;
          }),
          (i = null),
          (o = null),
          n.emit("slidesInView"));
      },
      { root: e.parentElement, threshold: r }
    )),
      t.forEach((m) => a.observe(m));
  }
  function u() {
    a && a.disconnect(), (c = !0);
  }
  function d(m) {
    return Ks(s).reduce((h, g) => {
      const v = parseInt(g),
        { isIntersecting: b } = s[v];
      return ((m && b) || (!m && !b)) && h.push(v), h;
    }, []);
  }
  function f(m = !0) {
    if (m && i) return i;
    if (!m && o) return o;
    const h = d(m);
    return m && (i = h), m || (o = h), h;
  }
  return { init: l, destroy: u, get: f };
}
function sR(e, t, n, r, s, i) {
  const { measureSize: o, startEdge: a, endEdge: c } = e,
    l = n[0] && s,
    u = m(),
    d = h(),
    f = n.map(o),
    p = g();
  function m() {
    if (!l) return 0;
    const b = n[0];
    return Pe(t[a] - b[a]);
  }
  function h() {
    if (!l) return 0;
    const b = i.getComputedStyle(jt(r));
    return parseFloat(b.getPropertyValue(`margin-${c}`));
  }
  function g() {
    return n
      .map((b, w, T) => {
        const S = !w,
          E = nu(T, w);
        return S ? f[w] + u : E ? f[w] + d : T[w + 1][a] - b[a];
      })
      .map(Pe);
  }
  return { slideSizes: f, slideSizesWithGaps: p, startGap: u, endGap: d };
}
function iR(e, t, n, r, s, i, o, a, c) {
  const { startEdge: l, endEdge: u, direction: d } = e,
    f = eu(n);
  function p(v, b) {
    return Gs(v)
      .filter((w) => w % b === 0)
      .map((w) => v.slice(w, w + b));
  }
  function m(v) {
    return v.length
      ? Gs(v)
          .reduce((b, w, T) => {
            const S = jt(b) || 0,
              E = S === 0,
              R = w === Ci(v),
              A = s[l] - i[S][l],
              N = s[l] - i[w][u],
              D = !r && E ? d(o) : 0,
              L = !r && R ? d(a) : 0,
              j = Pe(N - L - (A + D));
            return T && j > t + c && b.push(w), R && b.push(v.length), b;
          }, [])
          .map((b, w, T) => {
            const S = Math.max(T[w - 1] || 0);
            return v.slice(S, b);
          })
      : [];
  }
  function h(v) {
    return f ? p(v, n) : m(v);
  }
  return { groupSlides: h };
}
function oR(e, t, n, r, s, i, o) {
  const {
      align: a,
      axis: c,
      direction: l,
      startIndex: u,
      loop: d,
      duration: f,
      dragFree: p,
      dragThreshold: m,
      inViewThreshold: h,
      slidesToScroll: g,
      skipSnaps: v,
      containScroll: b,
      watchResize: w,
      watchSlides: T,
      watchDrag: S,
      watchFocus: E,
    } = i,
    R = 2,
    A = UP(),
    N = A.measure(t),
    D = n.map(A.measure),
    L = IP(c, l),
    j = L.measureSize(N),
    $ = $P(j),
    W = FP(a, j),
    ne = !d && !!b,
    X = d || !!b,
    {
      slideSizes: Z,
      slideSizesWithGaps: q,
      startGap: se,
      endGap: me,
    } = sR(L, N, D, n, X, s),
    ge = iR(L, j, g, d, N, D, se, me, R),
    { snaps: He, snapsAligned: dt } = QP(L, W, N, D, ge),
    qe = -jt(He) + jt(q),
    { snapsContained: At, scrollContainLimit: Ye } = qP(j, qe, dt, b, R),
    ue = ne ? At : dt,
    { limit: ye } = ZP(qe, ue, d),
    Oe = Ay(Ci(ue), u, d),
    Ie = Oe.clone(),
    we = Gs(n),
    G = ({
      dragHandler: $t,
      scrollBody: Wn,
      scrollBounds: ms,
      options: { loop: Hn },
    }) => {
      Hn || ms.constrain($t.pointerDown()), Wn.seek();
    },
    de = (
      {
        scrollBody: $t,
        translate: Wn,
        location: ms,
        offsetLocation: Hn,
        previousLocation: Ko,
        scrollLooper: Pi,
        slideLooper: Vy,
        dragHandler: By,
        animation: Uy,
        eventHandler: su,
        scrollBounds: $y,
        options: { loop: iu },
      },
      ou
    ) => {
      const au = $t.settled(),
        zy = !$y.shouldConstrain(),
        cu = iu ? au : au && zy;
      cu && !By.pointerDown() && (Uy.stop(), su.emit("settle")),
        cu || su.emit("scroll");
      const Wy = ms.get() * ou + Ko.get() * (1 - ou);
      Hn.set(Wy), iu && (Pi.loop($t.direction()), Vy.loop()), Wn.to(Hn.get());
    },
    Se = LP(
      r,
      s,
      () => G(ps),
      ($t) => de(ps, $t)
    ),
    Ue = 0.68,
    ft = ue[Oe.get()],
    bt = Es(ft),
    _ = Es(ft),
    P = Es(ft),
    O = Es(ft),
    B = WP(bt, P, _, O, f, Ue),
    I = YP(d, ue, qe, ye, O),
    F = JP(Se, Oe, Ie, B, I, O, o),
    Q = KP(ye),
    ae = Qs(),
    Ve = rR(t, n, o, h),
    { slideRegistry: Ne } = XP(ne, b, ue, Ye, ge, we),
    Ut = eR(e, n, Ne, F, B, ae, o, E),
    ps = {
      ownerDocument: r,
      ownerWindow: s,
      eventHandler: o,
      containerRect: N,
      slideRects: D,
      animation: Se,
      axis: L,
      dragHandler: VP(
        L,
        e,
        r,
        s,
        O,
        BP(L, s),
        bt,
        Se,
        F,
        B,
        I,
        Oe,
        o,
        $,
        p,
        m,
        v,
        Ue,
        S
      ),
      eventStore: ae,
      percentOfView: $,
      index: Oe,
      indexPrevious: Ie,
      limit: ye,
      location: bt,
      offsetLocation: P,
      previousLocation: _,
      options: i,
      resizeHandler: zP(t, o, s, n, L, w, A),
      scrollBody: B,
      scrollBounds: HP(ye, P, O, B, $),
      scrollLooper: GP(qe, ye, P, [bt, P, _, O]),
      scrollProgress: Q,
      scrollSnapList: ue.map(Q.get),
      scrollSnaps: ue,
      scrollTarget: I,
      scrollTo: F,
      slideLooper: tR(L, j, qe, Z, q, He, ue, P, n),
      slideFocus: Ut,
      slidesHandler: nR(t, o, T),
      slidesInView: Ve,
      slideIndexes: we,
      slideRegistry: Ne,
      slidesToScroll: ge,
      target: O,
      translate: Ey(L, t),
    };
  return ps;
}
function aR() {
  let e = {},
    t;
  function n(l) {
    t = l;
  }
  function r(l) {
    return e[l] || [];
  }
  function s(l) {
    return r(l).forEach((u) => u(t, l)), c;
  }
  function i(l, u) {
    return (e[l] = r(l).concat([u])), c;
  }
  function o(l, u) {
    return (e[l] = r(l).filter((d) => d !== u)), c;
  }
  function a() {
    e = {};
  }
  const c = { init: n, emit: s, off: o, on: i, clear: a };
  return c;
}
const cR = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0,
};
function lR(e) {
  function t(i, o) {
    return Cy(i, o || {});
  }
  function n(i) {
    const o = i.breakpoints || {},
      a = Ks(o)
        .filter((c) => e.matchMedia(c).matches)
        .map((c) => o[c])
        .reduce((c, l) => t(c, l), {});
    return t(i, a);
  }
  function r(i) {
    return i
      .map((o) => Ks(o.breakpoints || {}))
      .reduce((o, a) => o.concat(a), [])
      .map(e.matchMedia);
  }
  return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: r };
}
function uR(e) {
  let t = [];
  function n(i, o) {
    return (
      (t = o.filter(({ options: a }) => e.optionsAtMedia(a).active !== !1)),
      t.forEach((a) => a.init(i, e)),
      o.reduce((a, c) => Object.assign(a, { [c.name]: c }), {})
    );
  }
  function r() {
    t = t.filter((i) => i.destroy());
  }
  return { init: n, destroy: r };
}
function bo(e, t, n) {
  const r = e.ownerDocument,
    s = r.defaultView,
    i = lR(s),
    o = uR(i),
    a = Qs(),
    c = aR(),
    { mergeOptions: l, optionsAtMedia: u, optionsMediaQueries: d } = i,
    { on: f, off: p, emit: m } = c,
    h = L;
  let g = !1,
    v,
    b = l(cR, bo.globalOptions),
    w = l(b),
    T = [],
    S,
    E,
    R;
  function A() {
    const { container: we, slides: G } = w;
    E = (Rc(we) ? e.querySelector(we) : we) || e.children[0];
    const Se = Rc(G) ? E.querySelectorAll(G) : G;
    R = [].slice.call(Se || E.children);
  }
  function N(we) {
    const G = oR(e, E, R, r, s, we, c);
    if (we.loop && !G.slideLooper.canLoop()) {
      const de = Object.assign({}, we, { loop: !1 });
      return N(de);
    }
    return G;
  }
  function D(we, G) {
    g ||
      ((b = l(b, we)),
      (w = u(b)),
      (T = G || T),
      A(),
      (v = N(w)),
      d([b, ...T.map(({ options: de }) => de)]).forEach((de) =>
        a.add(de, "change", L)
      ),
      w.active &&
        (v.translate.to(v.location.get()),
        v.animation.init(),
        v.slidesInView.init(),
        v.slideFocus.init(Ie),
        v.eventHandler.init(Ie),
        v.resizeHandler.init(Ie),
        v.slidesHandler.init(Ie),
        v.options.loop && v.slideLooper.loop(),
        E.offsetParent && R.length && v.dragHandler.init(Ie),
        (S = o.init(Ie, T))));
  }
  function L(we, G) {
    const de = ge();
    j(), D(l({ startIndex: de }, we), G), c.emit("reInit");
  }
  function j() {
    v.dragHandler.destroy(),
      v.eventStore.clear(),
      v.translate.clear(),
      v.slideLooper.clear(),
      v.resizeHandler.destroy(),
      v.slidesHandler.destroy(),
      v.slidesInView.destroy(),
      v.animation.destroy(),
      o.destroy(),
      a.clear();
  }
  function $() {
    g || ((g = !0), a.clear(), j(), c.emit("destroy"), c.clear());
  }
  function W(we, G, de) {
    !w.active ||
      g ||
      (v.scrollBody.useBaseFriction().useDuration(G === !0 ? 0 : w.duration),
      v.scrollTo.index(we, de || 0));
  }
  function ne(we) {
    const G = v.index.add(1).get();
    W(G, we, -1);
  }
  function X(we) {
    const G = v.index.add(-1).get();
    W(G, we, 1);
  }
  function Z() {
    return v.index.add(1).get() !== ge();
  }
  function q() {
    return v.index.add(-1).get() !== ge();
  }
  function se() {
    return v.scrollSnapList;
  }
  function me() {
    return v.scrollProgress.get(v.location.get());
  }
  function ge() {
    return v.index.get();
  }
  function He() {
    return v.indexPrevious.get();
  }
  function dt() {
    return v.slidesInView.get();
  }
  function qe() {
    return v.slidesInView.get(!1);
  }
  function At() {
    return S;
  }
  function Ye() {
    return v;
  }
  function ue() {
    return e;
  }
  function ye() {
    return E;
  }
  function Oe() {
    return R;
  }
  const Ie = {
    canScrollNext: Z,
    canScrollPrev: q,
    containerNode: ye,
    internalEngine: Ye,
    destroy: $,
    off: p,
    on: f,
    emit: m,
    plugins: At,
    previousScrollSnap: He,
    reInit: h,
    rootNode: ue,
    scrollNext: ne,
    scrollPrev: X,
    scrollProgress: me,
    scrollSnapList: se,
    scrollTo: W,
    selectedScrollSnap: ge,
    slideNodes: Oe,
    slidesInView: dt,
    slidesNotInView: qe,
  };
  return D(t, n), setTimeout(() => c.emit("init"), 0), Ie;
}
bo.globalOptions = void 0;
function Ai(e = {}, t = []) {
  const n = x.useRef(e),
    r = x.useRef(t),
    [s, i] = x.useState(),
    [o, a] = x.useState(),
    c = x.useCallback(() => {
      s && s.reInit(n.current, r.current);
    }, [s]);
  return (
    x.useEffect(() => {
      Jl(n.current, e) || ((n.current = e), c());
    }, [e, c]),
    x.useEffect(() => {
      jP(r.current, t) || ((r.current = t), c());
    }, [t, c]),
    x.useEffect(() => {
      if (NP() && o) {
        bo.globalOptions = Ai.globalOptions;
        const l = bo(o, n.current, r.current);
        return i(l), () => l.destroy();
      } else i(void 0);
    }, [o, i]),
    [a, s]
  );
}
Ai.globalOptions = void 0;
const dR = [
    {
      lang: pt.RU,
      data: [
        {
          title: "План выставки",
          link: "https://turkmentextile.turkmenexpo.com/app/storage/app/media/Floor%20plan/floor%20plan.pdf",
          blank: !0,
        },
        { title: "Забронировать стенд", link: "/stend-form" },
        { title: "Список участников", link: "" },
        { title: "B2B | B2G встречи", link: "/B2B-B2G" },
      ],
    },
    {
      lang: pt.EN,
      data: [
        {
          title: "Floor Plan",
          link: "https://turkmentextile.turkmenexpo.com/app/storage/app/media/Floor%20plan/floor%20plan.pdf",
          blank: !0,
        },
        { title: "Book a stand", link: "/stend-form" },
        { title: "List of participants", link: "/" },
        { title: "B2B | B2G meetings", link: "/B2B-B2G" },
      ],
    },
  ],
  e1 = () => {
    const [e] = Ai(),
      t = Le((o) => o.lang),
      { t: n } = Ty("home"),
      r = ec("(min-width: 1024px)"),
      s = ec("(min-width: 768px)");
    function i() {
      return n(r ? "banners.lg" : s ? "banners.md" : "banners.sm");
    }
    return y.jsxs("section", {
      className: "flex flex-col gap-5",
      children: [
        y.jsx("div", {
          ref: e,
          className: "embla",
          children: y.jsx("div", {
            className: "embla__container",
            children: y.jsx("div", {
              className: "embla__slide",
              children: y.jsx("img", {
                src: i(),
                alt: "",
                className:
                  "size-full object-cover lg:max-h-[600px] lg:min-h-[320px]",
              }),
            }),
          }),
        }),
        y.jsx(st, {
          className:
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6 text-2xl",
          children: dR[We(t)].data.map(({ title: o, link: a, blank: c }) =>
            y.jsx(
              Me,
              {
                target: c ? "_blank" : "",
                to: a,
                className: "w-full",
                children: y.jsx(ut, {
                  size: "lg",
                  variant: "teritary",
                  className:
                    "w-full drop-shadow-sm shadow-md text-xl bg-teritary text-on_teritary hover:bg-teritary/90",
                  children: o,
                }),
              },
              o
            )
          ),
        }),
      ],
    });
  },
  fR = () => {
    const e = Le((r) => r.lang),
      { data: t, isPending: n } = Ti({
        queryKey: ["home-contacts", e],
        queryFn: () => FE(e),
        select: ({ data: r }) => r.data,
      });
    return { data: t, isPending: n };
  },
  t1 = ({ className: e }) => {
    const t = Le((i) => i.lang),
      { data: n, isPending: r } = xy(),
      { data: s } = fR();
    return r
      ? y.jsx(us, {})
      : y.jsx("section", {
          className: re("bg-surface_high pt-10 pb-20", e),
          children: y.jsxs(st, {
            children: [
              y.jsx("h2", { className: "h2 mb-6", children: vy[We(t)].title }),
              y.jsxs("div", {
                className: "flex flex-col gap-6",
                children: [
                  y.jsx("div", {
                    className: "flex flex-col md:flex-row items-center gap-6",
                    children:
                      n == null
                        ? void 0
                        : n.map((i, o) =>
                            x.createElement(tp, {
                              ...i,
                              key: o,
                              className: "w-full",
                            })
                          ),
                  }),
                  y.jsx("div", {
                    className:
                      "md:p-10 pt-16 flex flex-col md:flex-row items-center gap-6",
                    children:
                      s == null
                        ? void 0
                        : s.map((i, o) =>
                            x.createElement(Fb, {
                              ...i,
                              key: o,
                              className: "w-full",
                            })
                          ),
                  }),
                  y.jsx(Me, {
                    to: "/stend-form",
                    className: "md:w-fit w-full  mx-auto",
                    children: y.jsx(ut, {
                      className: "w-full",
                      children:
                        t === pt.RU ? "Забронируйте стенд" : "Book a stand",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
  },
  hR = [
    {
      h2: "Выставка-ярмарка «TurkmenTextile Expo-2025» в Ашхабаде",
      p: `Международная выставка-ярмарка, которая объединит мировых лидеров отрасли, инновационных производителей и творческих дизайнеров.
    Наша миссия – укрепить позиции Туркменистана как ключевого центра текстильной и модной индустрии.
         
    `,
      p_2: `Выставка станет платформой для изучения устойчивых практик, современных технологий и дизайнерских решений, вдохновляя на развитие индустрии.
    «Turkmentextile Expo-2025» – это платформа, соединяющий традиции и инновации, производителей и потребителей, Туркменистан и весь мир!`,
      data: [
        { nums: "10,000 m²", text: "Выставочной площади" },
        { nums: "10000+", text: "Ожидаемых посетителей " },
        { nums: "100+", text: "Экспонентов из более чем 30 стран" },
        { nums: "80%", text: "Участников топ-менеджмента" },
      ],
      button: "Подробнее о выставке",
    },
    {
      h2: "TurkmenTextile Expo-2025 in Ashgabat",
      p: `An international exhibition will unite global industry leaders, innovative manufacturers, and creative designers.
    Our mission is to strengthen Turkmenistan's position as a key hub for the textile and fashion industry. 
    `,
      p_2: "The exhibition will serve as a platform to explore sustainable practices, modern technologies, and design solutions, inspiring the development of the industry.",
      data: [
        { nums: "10,000 m²", text: "Exhibition area" },
        { nums: "10000+", text: "Expected visitors " },
        { nums: "100+", text: "Exhibitors from over 30 countries" },
        { nums: "80%", text: "Participants are top-management" },
      ],
      button: "More about the exhibition",
    },
  ],
  pR = () => {
    const e = Le((r) => r.lang),
      { data: t, isPending: n } = Ti({
        queryKey: ["stats", e],
        queryFn: () => ME(e),
        select: ({ data: r }) => r.data,
      });
    return { data: t, isPending: n };
  },
  n1 = () => {
    var a, c;
    const [e] = Ai(),
      t = Le((l) => l.lang),
      { data: n, isPending: r } = by("1"),
      { data: s } = pR(),
      i =
        (a = n == null ? void 0 : n.find((l) => l.key === "index_1")) == null
          ? void 0
          : a.text,
      o =
        (c = n == null ? void 0 : n.find((l) => l.key === "index_2")) == null
          ? void 0
          : c.text;
    return r
      ? y.jsx(us, {})
      : y.jsx("section", {
          children: y.jsxs(st, {
            className: "flex flex-col gap-6",
            children: [
              y.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6 items-center",
                children: [
                  y.jsxs("div", {
                    className: "flex flex-col gap-6",
                    children: [
                      y.jsx("h2", { className: "h2 text-left", children: i }),
                      y.jsx("div", {
                        dangerouslySetInnerHTML: { __html: o || "" },
                        className:
                          "md:text-base flex flex-col gap-6 text-sm normal text-left text-[#454545]",
                      }),
                      y.jsx(Me, {
                        to: "/about",
                        className: "w-fit",
                        children: y.jsx(ut, {
                          variant: "outline",
                          children: hR[We(t)].button,
                        }),
                      }),
                    ],
                  }),
                  y.jsx("video", {
                    src: "https://turkmentextile.turkmenexpo.com/app/storage/app/media/video/Textile2025.mp4",
                    muted: !0,
                    controls: !0,
                    autoPlay: !0,
                    loop: !0,
                    className: "w-full h-auto",
                  }),
                ],
              }),
              y.jsx("div", {
                ref: e,
                className: "embla overflow-hidden",
                children: y.jsx("div", {
                  className: "flex embla__container items-center gap-6",
                  children:
                    s == null
                      ? void 0
                      : s.map((l) =>
                          y.jsx(
                            Db,
                            {
                              ...l,
                              className: "embla__slide flex-[0_0_288px]",
                            },
                            l.text
                          )
                        ),
                }),
              }),
            ],
          }),
        });
  },
  r1 = () => {
    const e = Le((r) => r.lang),
      { data: t, isPending: n } = yy();
    return n
      ? y.jsx(us, {})
      : y.jsx("section", {
          className: "",
          children: y.jsxs(st, {
            children: [
              y.jsx("h2", {
                className: "h2 mb-10 text-center",
                children: oc[We(e)].title,
              }),
              y.jsx("div", {
                className: "grid md:grid-cols-4 grid-cols-2 gap-6",
                children:
                  t == null ? void 0 : t.map((r, s) => y.jsx(ep, { ...r }, s)),
              }),
            ],
          }),
        });
  },
  mR = [
    {
      data: [
        {
          img: "/offer-1.png",
          title: "Гостиницы, трансфер, визы",
          btnText: "Скачать путеводитель",
          text: "По вопросам размещения в гостиницах, визовой поддержки, транспортного и экскурсионного обслуживания Вы можете ознакомиться с путеводителем",
          link: "https://turkmentextile.turkmenexpo.com/app/storage/app/media/travel_guide/Travel_guide_ru.pdf",
        },
        {
          img: "/offer-2.png",
          title: "Ознакомьтесь с планом выставки TurkmenTextile Expo 2025",
          btnText: "Скачать план выставки",
          text: "Как выбрать лучшее место на выставке? Вы всегда должны помнить, что удачное расположение выставочной экспозиции повышает Ваши шансы привлечь внимание Ваших потенциальных клиентов",
          link: "https://turkmentextile.turkmenexpo.com/app/storage/app/media/Floor%20plan/floor%20plan.pdf",
        },
      ],
    },
    {
      data: [
        {
          img: "/offer-2.png",
          title: "Hotels, transfer, visas;",
          btnText: "Download Travel Guide",
          text: "For inquiries regarding hotel accommodations, visa support, transportation, and tour services, please refer to the travel guide;",
          link: "https://turkmentextile.turkmenexpo.com/app/storage/app/media/travel_guide/Travel_guide_eng.pdf",
        },
        {
          img: "/offer-2.png",
          title: "Explore “TurkmenTextile Expo-2025” plan;",
          btnText: "Download exhibition plan.",
          text: "How to choose the best location at the exhibition? A prime spot increases your chances to attract potential clients;",
          link: "https://turkmentextile.turkmenexpo.com/app/storage/app/media/Floor%20plan/floor%20plan.pdf",
        },
      ],
    },
  ],
  s1 = () => {
    const [e, t] = Ai({ align: "start" }),
      [n, r] = x.useState(0),
      s = Le((o) => o.lang),
      i = x.useCallback(
        (o) => {
          t && t.scrollTo(o);
        },
        [t]
      );
    return (
      x.useEffect(() => {
        if (!t) return;
        const o = () => {
          r(t.selectedScrollSnap());
        };
        return (
          t.on("select", o),
          () => {
            t.off("select", o);
          }
        );
      }, [t]),
      y.jsx("section", {
        className: "bg-surface_high py-10 relative overflow-hidden",
        children: y.jsx(st, {
          children: y.jsxs("div", {
            ref: e,
            className: "embla ",
            children: [
              y.jsx("div", {
                className: "mb-2 flex gap-6 embla__container",
                children: mR[We(s)].data.map((o) =>
                  x.createElement(Mb, {
                    ...o,
                    key: o.title,
                    className:
                      "embla__slide flex-[0_0_300px] sm:flex-[0_0_600px]",
                  })
                ),
              }),
              y.jsx(DT, {
                className: "xl:hidden",
                scrollTo: i,
                active: n,
                slides: 2,
              }),
            ],
          }),
        }),
      })
    );
  },
  i1 = () => {
    const e = Le((t) => t.lang);
    return y.jsxs("header", {
      children: [
        y.jsx("div", {
          className:
            "h-12 hidden lg:flex bg-sur text-surface-bg items-center overflow-hidden",
          children: y.jsxs(st, {
            className: "flex items-center justify-between",
            children: [
              y.jsxs("div", {
                className: "gap-8 flex items-center justify-between",
                children: [
                  y.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      y.jsx(Nx, {}),
                      y.jsx("h4", {
                        className: "text-sm",
                        children:
                          e === "ru"
                            ? "Ашхабад, Туркменистан"
                            : "Ashgabat, Turkmenistan",
                      }),
                    ],
                  }),
                  y.jsx("nav", {
                    className: "flex items-center gap-6",
                    children: Ma[We(e)].data.slice(0, 3).map((t) =>
                      t.dropDown
                        ? y.jsx(
                            hf,
                            {
                              color: "black",
                              dropDownContent: t.dropDownContent,
                              title: t.title,
                            },
                            t.title
                          )
                        : y.jsx(
                            Me,
                            {
                              target: t.blank ? "_blank" : "",
                              className: "py-2",
                              to: t.link || "",
                              children: t.title,
                            },
                            t.title
                          )
                    ),
                  }),
                ],
              }),
              y.jsxs("div", {
                className: "flex items-center gap-6",
                children: [
                  y.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      y.jsx(Dx, { size: 16, strokeWidth: "3px" }),
                      y.jsx("h4", {
                        className: "text-sm",
                        children: "+99371871812",
                      }),
                    ],
                  }),
                  y.jsx(ff, { className: "!text-on_surface" }),
                ],
              }),
            ],
          }),
        }),
        y.jsx("div", {
          className:
            "bg-primary py-2 flex items-center justify-between h-20 overflow-hidden",
          children: y.jsxs(st, {
            className: "flex items-center justify-between ",
            children: [
              y.jsxs("div", {
                className: "flex items-center gap-8",
                children: [
                  y.jsx(Me, { to: "/", children: y.jsx(Jh, {}) }),
                  y.jsx("nav", {
                    className: "lg:flex hidden items-center gap-6 text-white",
                    children: Ma[We(e)].data.slice(3, 6).map((t) =>
                      t.dropDown
                        ? y.jsx(
                            hf,
                            {
                              dropDownContent: t.dropDownContent,
                              title: t.title,
                              color: "white",
                            },
                            t.title
                          )
                        : y.jsx(
                            Me,
                            {
                              className: "py-2",
                              to: t.link || "",
                              children: t.title,
                            },
                            t.title
                          )
                    ),
                  }),
                ],
              }),
              y.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  y.jsx(ff, { className: "lg:hidden", light: !0 }),
                  y.jsx(jb, {}),
                ],
              }),
              y.jsxs("div", {
                className: "lg:flex hidden items-center gap-2",
                children: [
                  y.jsx(Me, {
                    to:
                      e === pt.RU
                        ? "https://turkmentextile.turkmenexpo.com/app/storage/app/media/official_support/official_support_ru.pdf"
                        : "https://turkmentextile.turkmenexpo.com/app/storage/app/media/official_support/official_support_eng.pdf",
                    target: "_blank",
                    children: y.jsx(ut, {
                      variant: "secondary",
                      size: "sm",
                      className: "bg-white text-primary hover:bg-white/90",
                      children:
                        e === "ru"
                          ? "Официальная поддержка"
                          : "Official Support",
                    }),
                  }),
                  y.jsx(Me, {
                    to: "/become-sponsor",
                    children: y.jsx(ut, {
                      variant: "secondary",
                      size: "sm",
                      className: "bg-teritary text-white hover:bg-teritary/90",
                      children:
                        e === "ru" ? "Стать спонсором" : "Become a sponsor",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Hf = (e, t, n) => {
    if (e && "reportValidity" in e) {
      const r = V(n, t);
      e.setCustomValidity((r && r.message) || ""), e.reportValidity();
    }
  },
  Py = (e, t) => {
    for (const n in t.fields) {
      const r = t.fields[n];
      r && r.ref && "reportValidity" in r.ref
        ? Hf(r.ref, n, e)
        : r.refs && r.refs.forEach((s) => Hf(s, n, e));
    }
  },
  gR = (e, t) => {
    t.shouldUseNativeValidation && Py(e, t);
    const n = {};
    for (const r in e) {
      const s = V(t.fields, r),
        i = Object.assign(e[r] || {}, { ref: s && s.ref });
      if (yR(t.names || Object.keys(e), r)) {
        const o = Object.assign({}, V(n, r));
        xe(o, "root", i), xe(n, r, o);
      } else xe(n, r, i);
    }
    return n;
  },
  yR = (e, t) => e.some((n) => n.startsWith(t + "."));
var vR = function (e, t) {
    for (var n = {}; e.length; ) {
      var r = e[0],
        s = r.code,
        i = r.message,
        o = r.path.join(".");
      if (!n[o])
        if ("unionErrors" in r) {
          var a = r.unionErrors[0].errors[0];
          n[o] = { message: a.message, type: a.code };
        } else n[o] = { message: i, type: s };
      if (
        ("unionErrors" in r &&
          r.unionErrors.forEach(function (u) {
            return u.errors.forEach(function (d) {
              return e.push(d);
            });
          }),
        t)
      ) {
        var c = n[o].types,
          l = c && c[r.code];
        n[o] = Im(o, t, n, s, l ? [].concat(l, r.message) : r.message);
      }
      e.shift();
    }
    return n;
  },
  xR = function (e, t, n) {
    return (
      n === void 0 && (n = {}),
      function (r, s, i) {
        try {
          return Promise.resolve(
            (function (o, a) {
              try {
                var c = Promise.resolve(
                  e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)
                ).then(function (l) {
                  return (
                    i.shouldUseNativeValidation && Py({}, i),
                    { errors: {}, values: n.raw ? r : l }
                  );
                });
              } catch (l) {
                return a(l);
              }
              return c && c.then ? c.then(void 0, a) : c;
            })(0, function (o) {
              if (
                (function (a) {
                  return Array.isArray(a == null ? void 0 : a.errors);
                })(o)
              )
                return {
                  values: {},
                  errors: gR(
                    vR(
                      o.errors,
                      !i.shouldUseNativeValidation && i.criteriaMode === "all"
                    ),
                    i
                  ),
                };
              throw o;
            })
          );
        } catch (o) {
          return Promise.reject(o);
        }
      }
    );
  },
  pe;
(function (e) {
  e.assertEqual = (s) => s;
  function t(s) {}
  e.assertIs = t;
  function n(s) {
    throw new Error();
  }
  (e.assertNever = n),
    (e.arrayToEnum = (s) => {
      const i = {};
      for (const o of s) i[o] = o;
      return i;
    }),
    (e.getValidEnumValues = (s) => {
      const i = e.objectKeys(s).filter((a) => typeof s[s[a]] != "number"),
        o = {};
      for (const a of i) o[a] = s[a];
      return e.objectValues(o);
    }),
    (e.objectValues = (s) =>
      e.objectKeys(s).map(function (i) {
        return s[i];
      })),
    (e.objectKeys =
      typeof Object.keys == "function"
        ? (s) => Object.keys(s)
        : (s) => {
            const i = [];
            for (const o in s)
              Object.prototype.hasOwnProperty.call(s, o) && i.push(o);
            return i;
          }),
    (e.find = (s, i) => {
      for (const o of s) if (i(o)) return o;
    }),
    (e.isInteger =
      typeof Number.isInteger == "function"
        ? (s) => Number.isInteger(s)
        : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s);
  function r(s, i = " | ") {
    return s.map((o) => (typeof o == "string" ? `'${o}'` : o)).join(i);
  }
  (e.joinValues = r),
    (e.jsonStringifyReplacer = (s, i) =>
      typeof i == "bigint" ? i.toString() : i);
})(pe || (pe = {}));
var Oc;
(function (e) {
  e.mergeShapes = (t, n) => ({ ...t, ...n });
})(Oc || (Oc = {}));
const z = pe.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  un = (e) => {
    switch (typeof e) {
      case "undefined":
        return z.undefined;
      case "string":
        return z.string;
      case "number":
        return isNaN(e) ? z.nan : z.number;
      case "boolean":
        return z.boolean;
      case "function":
        return z.function;
      case "bigint":
        return z.bigint;
      case "symbol":
        return z.symbol;
      case "object":
        return Array.isArray(e)
          ? z.array
          : e === null
          ? z.null
          : e.then &&
            typeof e.then == "function" &&
            e.catch &&
            typeof e.catch == "function"
          ? z.promise
          : typeof Map < "u" && e instanceof Map
          ? z.map
          : typeof Set < "u" && e instanceof Set
          ? z.set
          : typeof Date < "u" && e instanceof Date
          ? z.date
          : z.object;
      default:
        return z.unknown;
    }
  },
  M = pe.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  bR = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class xt extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(),
      (this.issues = []),
      (this.addIssue = (r) => {
        this.issues = [...this.issues, r];
      }),
      (this.addIssues = (r = []) => {
        this.issues = [...this.issues, ...r];
      });
    const n = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, n)
      : (this.__proto__ = n),
      (this.name = "ZodError"),
      (this.issues = t);
  }
  format(t) {
    const n =
        t ||
        function (i) {
          return i.message;
        },
      r = { _errors: [] },
      s = (i) => {
        for (const o of i.issues)
          if (o.code === "invalid_union") o.unionErrors.map(s);
          else if (o.code === "invalid_return_type") s(o.returnTypeError);
          else if (o.code === "invalid_arguments") s(o.argumentsError);
          else if (o.path.length === 0) r._errors.push(n(o));
          else {
            let a = r,
              c = 0;
            for (; c < o.path.length; ) {
              const l = o.path[c];
              c === o.path.length - 1
                ? ((a[l] = a[l] || { _errors: [] }), a[l]._errors.push(n(o)))
                : (a[l] = a[l] || { _errors: [] }),
                (a = a[l]),
                c++;
            }
          }
      };
    return s(this), r;
  }
  static assert(t) {
    if (!(t instanceof xt)) throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, pe.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {},
      r = [];
    for (const s of this.issues)
      s.path.length > 0
        ? ((n[s.path[0]] = n[s.path[0]] || []), n[s.path[0]].push(t(s)))
        : r.push(t(s));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
xt.create = (e) => new xt(e);
const es = (e, t) => {
  let n;
  switch (e.code) {
    case M.invalid_type:
      e.received === z.undefined
        ? (n = "Required")
        : (n = `Expected ${e.expected}, received ${e.received}`);
      break;
    case M.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(
        e.expected,
        pe.jsonStringifyReplacer
      )}`;
      break;
    case M.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${pe.joinValues(e.keys, ", ")}`;
      break;
    case M.invalid_union:
      n = "Invalid input";
      break;
    case M.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${pe.joinValues(e.options)}`;
      break;
    case M.invalid_enum_value:
      n = `Invalid enum value. Expected ${pe.joinValues(
        e.options
      )}, received '${e.received}'`;
      break;
    case M.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case M.invalid_return_type:
      n = "Invalid function return type";
      break;
    case M.invalid_date:
      n = "Invalid date";
      break;
    case M.invalid_string:
      typeof e.validation == "object"
        ? "includes" in e.validation
          ? ((n = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == "number" &&
              (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
          : "startsWith" in e.validation
          ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
          : "endsWith" in e.validation
          ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
          : pe.assertNever(e.validation)
        : e.validation !== "regex"
        ? (n = `Invalid ${e.validation}`)
        : (n = "Invalid");
      break;
    case M.too_small:
      e.type === "array"
        ? (n = `Array must contain ${
            e.exact ? "exactly" : e.inclusive ? "at least" : "more than"
          } ${e.minimum} element(s)`)
        : e.type === "string"
        ? (n = `String must contain ${
            e.exact ? "exactly" : e.inclusive ? "at least" : "over"
          } ${e.minimum} character(s)`)
        : e.type === "number"
        ? (n = `Number must be ${
            e.exact
              ? "exactly equal to "
              : e.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${e.minimum}`)
        : e.type === "date"
        ? (n = `Date must be ${
            e.exact
              ? "exactly equal to "
              : e.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${new Date(Number(e.minimum))}`)
        : (n = "Invalid input");
      break;
    case M.too_big:
      e.type === "array"
        ? (n = `Array must contain ${
            e.exact ? "exactly" : e.inclusive ? "at most" : "less than"
          } ${e.maximum} element(s)`)
        : e.type === "string"
        ? (n = `String must contain ${
            e.exact ? "exactly" : e.inclusive ? "at most" : "under"
          } ${e.maximum} character(s)`)
        : e.type === "number"
        ? (n = `Number must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "less than or equal to"
              : "less than"
          } ${e.maximum}`)
        : e.type === "bigint"
        ? (n = `BigInt must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "less than or equal to"
              : "less than"
          } ${e.maximum}`)
        : e.type === "date"
        ? (n = `Date must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "smaller than or equal to"
              : "smaller than"
          } ${new Date(Number(e.maximum))}`)
        : (n = "Invalid input");
      break;
    case M.custom:
      n = "Invalid input";
      break;
    case M.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case M.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case M.not_finite:
      n = "Number must be finite";
      break;
    default:
      (n = t.defaultError), pe.assertNever(e);
  }
  return { message: n };
};
let Ry = es;
function wR(e) {
  Ry = e;
}
function wo() {
  return Ry;
}
const So = (e) => {
    const { data: t, path: n, errorMaps: r, issueData: s } = e,
      i = [...n, ...(s.path || [])],
      o = { ...s, path: i };
    if (s.message !== void 0) return { ...s, path: i, message: s.message };
    let a = "";
    const c = r
      .filter((l) => !!l)
      .slice()
      .reverse();
    for (const l of c) a = l(o, { data: t, defaultError: a }).message;
    return { ...s, path: i, message: a };
  },
  SR = [];
function U(e, t) {
  const n = wo(),
    r = So({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [
        e.common.contextualErrorMap,
        e.schemaErrorMap,
        n,
        n === es ? void 0 : es,
      ].filter((s) => !!s),
    });
  e.common.issues.push(r);
}
class Xe {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const s of n) {
      if (s.status === "aborted") return te;
      s.status === "dirty" && t.dirty(), r.push(s.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const s of n) {
      const i = await s.key,
        o = await s.value;
      r.push({ key: i, value: o });
    }
    return Xe.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const s of n) {
      const { key: i, value: o } = s;
      if (i.status === "aborted" || o.status === "aborted") return te;
      i.status === "dirty" && t.dirty(),
        o.status === "dirty" && t.dirty(),
        i.value !== "__proto__" &&
          (typeof o.value < "u" || s.alwaysSet) &&
          (r[i.value] = o.value);
    }
    return { status: t.value, value: r };
  }
}
const te = Object.freeze({ status: "aborted" }),
  kr = (e) => ({ status: "dirty", value: e }),
  rt = (e) => ({ status: "valid", value: e }),
  Nc = (e) => e.status === "aborted",
  jc = (e) => e.status === "dirty",
  gr = (e) => e.status === "valid",
  Xs = (e) => typeof Promise < "u" && e instanceof Promise;
function _o(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it"
    );
  return t.get(e);
}
function ky(e, t, n, r, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e))
    throw new TypeError(
      "Cannot write private member to an object whose class did not declare it"
    );
  return t.set(e, n), n;
}
var K;
(function (e) {
  (e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
    (e.toString = (t) =>
      typeof t == "string" ? t : t == null ? void 0 : t.message);
})(K || (K = {}));
var Ps, Rs;
class nn {
  constructor(t, n, r, s) {
    (this._cachedPath = []),
      (this.parent = t),
      (this.data = n),
      (this._path = r),
      (this._key = s);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const qf = (e, t) => {
  if (gr(t)) return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const n = new xt(e.common.issues);
      return (this._error = n), this._error;
    },
  };
};
function oe(e) {
  if (!e) return {};
  const {
    errorMap: t,
    invalid_type_error: n,
    required_error: r,
    description: s,
  } = e;
  if (t && (n || r))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return t
    ? { errorMap: t, description: s }
    : {
        errorMap: (o, a) => {
          var c, l;
          const { message: u } = e;
          return o.code === "invalid_enum_value"
            ? { message: u ?? a.defaultError }
            : typeof a.data > "u"
            ? {
                message:
                  (c = u ?? r) !== null && c !== void 0 ? c : a.defaultError,
              }
            : o.code !== "invalid_type"
            ? { message: a.defaultError }
            : {
                message:
                  (l = u ?? n) !== null && l !== void 0 ? l : a.defaultError,
              };
        },
        description: s,
      };
}
class le {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return un(t.data);
  }
  _getOrReturnCtx(t, n) {
    return (
      n || {
        common: t.parent.common,
        data: t.data,
        parsedType: un(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      }
    );
  }
  _processInputParams(t) {
    return {
      status: new Xe(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: un(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      },
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Xs(n)) throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const s = {
        common: {
          issues: [],
          async:
            (r = n == null ? void 0 : n.async) !== null && r !== void 0
              ? r
              : !1,
          contextualErrorMap: n == null ? void 0 : n.errorMap,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: un(t),
      },
      i = this._parseSync({ data: t, path: s.path, parent: s });
    return qf(s, i);
  }
  "~validate"(t) {
    var n, r;
    const s = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: un(t),
    };
    if (!this["~standard"].async)
      try {
        const i = this._parseSync({ data: t, path: [], parent: s });
        return gr(i) ? { value: i.value } : { issues: s.common.issues };
      } catch (i) {
        !(
          (r =
            (n = i == null ? void 0 : i.message) === null || n === void 0
              ? void 0
              : n.toLowerCase()) === null || r === void 0
        ) &&
          r.includes("encountered") &&
          (this["~standard"].async = !0),
          (s.common = { issues: [], async: !0 });
      }
    return this._parseAsync({ data: t, path: [], parent: s }).then((i) =>
      gr(i) ? { value: i.value } : { issues: s.common.issues }
    );
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
        common: {
          issues: [],
          contextualErrorMap: n == null ? void 0 : n.errorMap,
          async: !0,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: un(t),
      },
      s = this._parse({ data: t, path: r.path, parent: r }),
      i = await (Xs(s) ? s : Promise.resolve(s));
    return qf(r, i);
  }
  refine(t, n) {
    const r = (s) =>
      typeof n == "string" || typeof n > "u"
        ? { message: n }
        : typeof n == "function"
        ? n(s)
        : n;
    return this._refinement((s, i) => {
      const o = t(s),
        a = () => i.addIssue({ code: M.custom, ...r(s) });
      return typeof Promise < "u" && o instanceof Promise
        ? o.then((c) => (c ? !0 : (a(), !1)))
        : o
        ? !0
        : (a(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, s) =>
      t(r) ? !0 : (s.addIssue(typeof n == "function" ? n(r, s) : n), !1)
    );
  }
  _refinement(t) {
    return new Lt({
      schema: this,
      typeName: J.ZodEffects,
      effect: { type: "refinement", refinement: t },
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  constructor(t) {
    (this.spa = this.safeParseAsync),
      (this._def = t),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (n) => this["~validate"](n),
      });
  }
  optional() {
    return en.create(this, this._def);
  }
  nullable() {
    return Bn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Dt.create(this);
  }
  promise() {
    return ns.create(this, this._def);
  }
  or(t) {
    return ti.create([this, t], this._def);
  }
  and(t) {
    return ni.create(this, t, this._def);
  }
  transform(t) {
    return new Lt({
      ...oe(this._def),
      schema: this,
      typeName: J.ZodEffects,
      effect: { type: "transform", transform: t },
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ai({
      ...oe(this._def),
      innerType: this,
      defaultValue: n,
      typeName: J.ZodDefault,
    });
  }
  brand() {
    return new ru({ typeName: J.ZodBranded, type: this, ...oe(this._def) });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ci({
      ...oe(this._def),
      innerType: this,
      catchValue: n,
      typeName: J.ZodCatch,
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({ ...this._def, description: t });
  }
  pipe(t) {
    return Ei.create(this, t);
  }
  readonly() {
    return li.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const _R = /^c[^\s-]{8,}$/i,
  TR = /^[0-9a-z]+$/,
  CR = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  AR =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  ER = /^[a-z0-9_-]{21}$/i,
  PR = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  RR =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  kR =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  OR = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ra;
const NR =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  jR =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  DR =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  MR =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  FR = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  LR = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  Oy =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  IR = new RegExp(`^${Oy}$`);
function Ny(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    e.precision
      ? (t = `${t}\\.\\d{${e.precision}}`)
      : e.precision == null && (t = `${t}(\\.\\d+)?`),
    t
  );
}
function VR(e) {
  return new RegExp(`^${Ny(e)}$`);
}
function jy(e) {
  let t = `${Oy}T${Ny(e)}`;
  const n = [];
  return (
    n.push(e.local ? "Z?" : "Z"),
    e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
    (t = `${t}(${n.join("|")})`),
    new RegExp(`^${t}$`)
  );
}
function BR(e, t) {
  return !!(
    ((t === "v4" || !t) && NR.test(e)) ||
    ((t === "v6" || !t) && DR.test(e))
  );
}
function UR(e, t) {
  if (!PR.test(e)) return !1;
  try {
    const [n] = e.split("."),
      r = n
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(n.length + ((4 - (n.length % 4)) % 4), "="),
      s = JSON.parse(atob(r));
    return !(
      typeof s != "object" ||
      s === null ||
      !s.typ ||
      !s.alg ||
      (t && s.alg !== t)
    );
  } catch {
    return !1;
  }
}
function $R(e, t) {
  return !!(
    ((t === "v4" || !t) && jR.test(e)) ||
    ((t === "v6" || !t) && MR.test(e))
  );
}
class Nt extends le {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = String(t.data)),
      this._getType(t) !== z.string)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        U(i, {
          code: M.invalid_type,
          expected: z.string,
          received: i.parsedType,
        }),
        te
      );
    }
    const r = new Xe();
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min")
        t.data.length < i.value &&
          ((s = this._getOrReturnCtx(t, s)),
          U(s, {
            code: M.too_small,
            minimum: i.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "max")
        t.data.length > i.value &&
          ((s = this._getOrReturnCtx(t, s)),
          U(s, {
            code: M.too_big,
            maximum: i.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "length") {
        const o = t.data.length > i.value,
          a = t.data.length < i.value;
        (o || a) &&
          ((s = this._getOrReturnCtx(t, s)),
          o
            ? U(s, {
                code: M.too_big,
                maximum: i.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: i.message,
              })
            : a &&
              U(s, {
                code: M.too_small,
                minimum: i.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: i.message,
              }),
          r.dirty());
      } else if (i.kind === "email")
        kR.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          U(s, {
            validation: "email",
            code: M.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "emoji")
        Ra || (Ra = new RegExp(OR, "u")),
          Ra.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            U(s, {
              validation: "emoji",
              code: M.invalid_string,
              message: i.message,
            }),
            r.dirty());
      else if (i.kind === "uuid")
        AR.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          U(s, {
            validation: "uuid",
            code: M.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "nanoid")
        ER.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          U(s, {
            validation: "nanoid",
            code: M.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "cuid")
        _R.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          U(s, {
            validation: "cuid",
            code: M.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "cuid2")
        TR.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          U(s, {
            validation: "cuid2",
            code: M.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "ulid")
        CR.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          U(s, {
            validation: "ulid",
            code: M.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "url")
        try {
          new URL(t.data);
        } catch {
          (s = this._getOrReturnCtx(t, s)),
            U(s, {
              validation: "url",
              code: M.invalid_string,
              message: i.message,
            }),
            r.dirty();
        }
      else
        i.kind === "regex"
          ? ((i.regex.lastIndex = 0),
            i.regex.test(t.data) ||
              ((s = this._getOrReturnCtx(t, s)),
              U(s, {
                validation: "regex",
                code: M.invalid_string,
                message: i.message,
              }),
              r.dirty()))
          : i.kind === "trim"
          ? (t.data = t.data.trim())
          : i.kind === "includes"
          ? t.data.includes(i.value, i.position) ||
            ((s = this._getOrReturnCtx(t, s)),
            U(s, {
              code: M.invalid_string,
              validation: { includes: i.value, position: i.position },
              message: i.message,
            }),
            r.dirty())
          : i.kind === "toLowerCase"
          ? (t.data = t.data.toLowerCase())
          : i.kind === "toUpperCase"
          ? (t.data = t.data.toUpperCase())
          : i.kind === "startsWith"
          ? t.data.startsWith(i.value) ||
            ((s = this._getOrReturnCtx(t, s)),
            U(s, {
              code: M.invalid_string,
              validation: { startsWith: i.value },
              message: i.message,
            }),
            r.dirty())
          : i.kind === "endsWith"
          ? t.data.endsWith(i.value) ||
            ((s = this._getOrReturnCtx(t, s)),
            U(s, {
              code: M.invalid_string,
              validation: { endsWith: i.value },
              message: i.message,
            }),
            r.dirty())
          : i.kind === "datetime"
          ? jy(i).test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            U(s, {
              code: M.invalid_string,
              validation: "datetime",
              message: i.message,
            }),
            r.dirty())
          : i.kind === "date"
          ? IR.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            U(s, {
              code: M.invalid_string,
              validation: "date",
              message: i.message,
            }),
            r.dirty())
          : i.kind === "time"
          ? VR(i).test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            U(s, {
              code: M.invalid_string,
              validation: "time",
              message: i.message,
            }),
            r.dirty())
          : i.kind === "duration"
          ? RR.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            U(s, {
              validation: "duration",
              code: M.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "ip"
          ? BR(t.data, i.version) ||
            ((s = this._getOrReturnCtx(t, s)),
            U(s, {
              validation: "ip",
              code: M.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "jwt"
          ? UR(t.data, i.alg) ||
            ((s = this._getOrReturnCtx(t, s)),
            U(s, {
              validation: "jwt",
              code: M.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "cidr"
          ? $R(t.data, i.version) ||
            ((s = this._getOrReturnCtx(t, s)),
            U(s, {
              validation: "cidr",
              code: M.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "base64"
          ? FR.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            U(s, {
              validation: "base64",
              code: M.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "base64url"
          ? LR.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            U(s, {
              validation: "base64url",
              code: M.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : pe.assertNever(i);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((s) => t.test(s), {
      validation: n,
      code: M.invalid_string,
      ...K.errToObj(r),
    });
  }
  _addCheck(t) {
    return new Nt({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...K.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...K.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...K.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...K.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...K.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...K.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...K.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...K.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...K.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({ kind: "base64url", ...K.errToObj(t) });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...K.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...K.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...K.errToObj(t) });
  }
  datetime(t) {
    var n, r;
    return typeof t == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: t,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (t == null ? void 0 : t.precision) > "u"
              ? null
              : t == null
              ? void 0
              : t.precision,
          offset:
            (n = t == null ? void 0 : t.offset) !== null && n !== void 0
              ? n
              : !1,
          local:
            (r = t == null ? void 0 : t.local) !== null && r !== void 0
              ? r
              : !1,
          ...K.errToObj(t == null ? void 0 : t.message),
        });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string"
      ? this._addCheck({ kind: "time", precision: null, message: t })
      : this._addCheck({
          kind: "time",
          precision:
            typeof (t == null ? void 0 : t.precision) > "u"
              ? null
              : t == null
              ? void 0
              : t.precision,
          ...K.errToObj(t == null ? void 0 : t.message),
        });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...K.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({ kind: "regex", regex: t, ...K.errToObj(n) });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...K.errToObj(n == null ? void 0 : n.message),
    });
  }
  startsWith(t, n) {
    return this._addCheck({ kind: "startsWith", value: t, ...K.errToObj(n) });
  }
  endsWith(t, n) {
    return this._addCheck({ kind: "endsWith", value: t, ...K.errToObj(n) });
  }
  min(t, n) {
    return this._addCheck({ kind: "min", value: t, ...K.errToObj(n) });
  }
  max(t, n) {
    return this._addCheck({ kind: "max", value: t, ...K.errToObj(n) });
  }
  length(t, n) {
    return this._addCheck({ kind: "length", value: t, ...K.errToObj(n) });
  }
  nonempty(t) {
    return this.min(1, K.errToObj(t));
  }
  trim() {
    return new Nt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new Nt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new Nt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((t) => t.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((t) => t.kind === "base64url");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Nt.create = (e) => {
  var t;
  return new Nt({
    checks: [],
    typeName: J.ZodString,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...oe(e),
  });
};
function zR(e, t) {
  const n = (e.toString().split(".")[1] || "").length,
    r = (t.toString().split(".")[1] || "").length,
    s = n > r ? n : r,
    i = parseInt(e.toFixed(s).replace(".", "")),
    o = parseInt(t.toFixed(s).replace(".", ""));
  return (i % o) / Math.pow(10, s);
}
class Ln extends le {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = Number(t.data)),
      this._getType(t) !== z.number)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        U(i, {
          code: M.invalid_type,
          expected: z.number,
          received: i.parsedType,
        }),
        te
      );
    }
    let r;
    const s = new Xe();
    for (const i of this._def.checks)
      i.kind === "int"
        ? pe.isInteger(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          U(r, {
            code: M.invalid_type,
            expected: "integer",
            received: "float",
            message: i.message,
          }),
          s.dirty())
        : i.kind === "min"
        ? (i.inclusive ? t.data < i.value : t.data <= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          U(r, {
            code: M.too_small,
            minimum: i.value,
            type: "number",
            inclusive: i.inclusive,
            exact: !1,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "max"
        ? (i.inclusive ? t.data > i.value : t.data >= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          U(r, {
            code: M.too_big,
            maximum: i.value,
            type: "number",
            inclusive: i.inclusive,
            exact: !1,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "multipleOf"
        ? zR(t.data, i.value) !== 0 &&
          ((r = this._getOrReturnCtx(t, r)),
          U(r, {
            code: M.not_multiple_of,
            multipleOf: i.value,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "finite"
        ? Number.isFinite(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          U(r, { code: M.not_finite, message: i.message }),
          s.dirty())
        : pe.assertNever(i);
    return { status: s.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, K.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, K.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, K.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, K.toString(n));
  }
  setLimit(t, n, r, s) {
    return new Ln({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: K.toString(s) },
      ],
    });
  }
  _addCheck(t) {
    return new Ln({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: "int", message: K.toString(t) });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: K.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: K.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: K.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: K.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: K.toString(n),
    });
  }
  finite(t) {
    return this._addCheck({ kind: "finite", message: K.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: K.toString(t),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: K.toString(t),
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find(
      (t) =>
        t.kind === "int" || (t.kind === "multipleOf" && pe.isInteger(t.value))
    );
  }
  get isFinite() {
    let t = null,
      n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min"
        ? (n === null || r.value > n) && (n = r.value)
        : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
Ln.create = (e) =>
  new Ln({
    checks: [],
    typeName: J.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...oe(e),
  });
class In extends le {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(t) {
    if (this._def.coerce)
      try {
        t.data = BigInt(t.data);
      } catch {
        return this._getInvalidInput(t);
      }
    if (this._getType(t) !== z.bigint) return this._getInvalidInput(t);
    let r;
    const s = new Xe();
    for (const i of this._def.checks)
      i.kind === "min"
        ? (i.inclusive ? t.data < i.value : t.data <= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          U(r, {
            code: M.too_small,
            type: "bigint",
            minimum: i.value,
            inclusive: i.inclusive,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "max"
        ? (i.inclusive ? t.data > i.value : t.data >= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          U(r, {
            code: M.too_big,
            type: "bigint",
            maximum: i.value,
            inclusive: i.inclusive,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "multipleOf"
        ? t.data % i.value !== BigInt(0) &&
          ((r = this._getOrReturnCtx(t, r)),
          U(r, {
            code: M.not_multiple_of,
            multipleOf: i.value,
            message: i.message,
          }),
          s.dirty())
        : pe.assertNever(i);
    return { status: s.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return (
      U(n, {
        code: M.invalid_type,
        expected: z.bigint,
        received: n.parsedType,
      }),
      te
    );
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, K.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, K.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, K.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, K.toString(n));
  }
  setLimit(t, n, r, s) {
    return new In({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: K.toString(s) },
      ],
    });
  }
  _addCheck(t) {
    return new In({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: K.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: K.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: K.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: K.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: K.toString(n),
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
In.create = (e) => {
  var t;
  return new In({
    checks: [],
    typeName: J.ZodBigInt,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...oe(e),
  });
};
class Ys extends le {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = !!t.data), this._getType(t) !== z.boolean)
    ) {
      const r = this._getOrReturnCtx(t);
      return (
        U(r, {
          code: M.invalid_type,
          expected: z.boolean,
          received: r.parsedType,
        }),
        te
      );
    }
    return rt(t.data);
  }
}
Ys.create = (e) =>
  new Ys({
    typeName: J.ZodBoolean,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...oe(e),
  });
class yr extends le {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = new Date(t.data)),
      this._getType(t) !== z.date)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        U(i, {
          code: M.invalid_type,
          expected: z.date,
          received: i.parsedType,
        }),
        te
      );
    }
    if (isNaN(t.data.getTime())) {
      const i = this._getOrReturnCtx(t);
      return U(i, { code: M.invalid_date }), te;
    }
    const r = new Xe();
    let s;
    for (const i of this._def.checks)
      i.kind === "min"
        ? t.data.getTime() < i.value &&
          ((s = this._getOrReturnCtx(t, s)),
          U(s, {
            code: M.too_small,
            message: i.message,
            inclusive: !0,
            exact: !1,
            minimum: i.value,
            type: "date",
          }),
          r.dirty())
        : i.kind === "max"
        ? t.data.getTime() > i.value &&
          ((s = this._getOrReturnCtx(t, s)),
          U(s, {
            code: M.too_big,
            message: i.message,
            inclusive: !0,
            exact: !1,
            maximum: i.value,
            type: "date",
          }),
          r.dirty())
        : pe.assertNever(i);
    return { status: r.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new yr({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: K.toString(n),
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: K.toString(n),
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
yr.create = (e) =>
  new yr({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: J.ZodDate,
    ...oe(e),
  });
class To extends le {
  _parse(t) {
    if (this._getType(t) !== z.symbol) {
      const r = this._getOrReturnCtx(t);
      return (
        U(r, {
          code: M.invalid_type,
          expected: z.symbol,
          received: r.parsedType,
        }),
        te
      );
    }
    return rt(t.data);
  }
}
To.create = (e) => new To({ typeName: J.ZodSymbol, ...oe(e) });
class Js extends le {
  _parse(t) {
    if (this._getType(t) !== z.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        U(r, {
          code: M.invalid_type,
          expected: z.undefined,
          received: r.parsedType,
        }),
        te
      );
    }
    return rt(t.data);
  }
}
Js.create = (e) => new Js({ typeName: J.ZodUndefined, ...oe(e) });
class ei extends le {
  _parse(t) {
    if (this._getType(t) !== z.null) {
      const r = this._getOrReturnCtx(t);
      return (
        U(r, {
          code: M.invalid_type,
          expected: z.null,
          received: r.parsedType,
        }),
        te
      );
    }
    return rt(t.data);
  }
}
ei.create = (e) => new ei({ typeName: J.ZodNull, ...oe(e) });
class ts extends le {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return rt(t.data);
  }
}
ts.create = (e) => new ts({ typeName: J.ZodAny, ...oe(e) });
class lr extends le {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return rt(t.data);
  }
}
lr.create = (e) => new lr({ typeName: J.ZodUnknown, ...oe(e) });
class yn extends le {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return (
      U(n, { code: M.invalid_type, expected: z.never, received: n.parsedType }),
      te
    );
  }
}
yn.create = (e) => new yn({ typeName: J.ZodNever, ...oe(e) });
class Co extends le {
  _parse(t) {
    if (this._getType(t) !== z.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        U(r, {
          code: M.invalid_type,
          expected: z.void,
          received: r.parsedType,
        }),
        te
      );
    }
    return rt(t.data);
  }
}
Co.create = (e) => new Co({ typeName: J.ZodVoid, ...oe(e) });
class Dt extends le {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t),
      s = this._def;
    if (n.parsedType !== z.array)
      return (
        U(n, {
          code: M.invalid_type,
          expected: z.array,
          received: n.parsedType,
        }),
        te
      );
    if (s.exactLength !== null) {
      const o = n.data.length > s.exactLength.value,
        a = n.data.length < s.exactLength.value;
      (o || a) &&
        (U(n, {
          code: o ? M.too_big : M.too_small,
          minimum: a ? s.exactLength.value : void 0,
          maximum: o ? s.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: s.exactLength.message,
        }),
        r.dirty());
    }
    if (
      (s.minLength !== null &&
        n.data.length < s.minLength.value &&
        (U(n, {
          code: M.too_small,
          minimum: s.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.minLength.message,
        }),
        r.dirty()),
      s.maxLength !== null &&
        n.data.length > s.maxLength.value &&
        (U(n, {
          code: M.too_big,
          maximum: s.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.maxLength.message,
        }),
        r.dirty()),
      n.common.async)
    )
      return Promise.all(
        [...n.data].map((o, a) => s.type._parseAsync(new nn(n, o, n.path, a)))
      ).then((o) => Xe.mergeArray(r, o));
    const i = [...n.data].map((o, a) =>
      s.type._parseSync(new nn(n, o, n.path, a))
    );
    return Xe.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new Dt({
      ...this._def,
      minLength: { value: t, message: K.toString(n) },
    });
  }
  max(t, n) {
    return new Dt({
      ...this._def,
      maxLength: { value: t, message: K.toString(n) },
    });
  }
  length(t, n) {
    return new Dt({
      ...this._def,
      exactLength: { value: t, message: K.toString(n) },
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Dt.create = (e, t) =>
  new Dt({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: J.ZodArray,
    ...oe(t),
  });
function Tr(e) {
  if (e instanceof Ae) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = en.create(Tr(r));
    }
    return new Ae({ ...e._def, shape: () => t });
  } else
    return e instanceof Dt
      ? new Dt({ ...e._def, type: Tr(e.element) })
      : e instanceof en
      ? en.create(Tr(e.unwrap()))
      : e instanceof Bn
      ? Bn.create(Tr(e.unwrap()))
      : e instanceof rn
      ? rn.create(e.items.map((t) => Tr(t)))
      : e;
}
class Ae extends le {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      n = pe.objectKeys(t);
    return (this._cached = { shape: t, keys: n });
  }
  _parse(t) {
    if (this._getType(t) !== z.object) {
      const l = this._getOrReturnCtx(t);
      return (
        U(l, {
          code: M.invalid_type,
          expected: z.object,
          received: l.parsedType,
        }),
        te
      );
    }
    const { status: r, ctx: s } = this._processInputParams(t),
      { shape: i, keys: o } = this._getCached(),
      a = [];
    if (
      !(this._def.catchall instanceof yn && this._def.unknownKeys === "strip")
    )
      for (const l in s.data) o.includes(l) || a.push(l);
    const c = [];
    for (const l of o) {
      const u = i[l],
        d = s.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new nn(s, d, s.path, l)),
        alwaysSet: l in s.data,
      });
    }
    if (this._def.catchall instanceof yn) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of a)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] },
          });
      else if (l === "strict")
        a.length > 0 &&
          (U(s, { code: M.unrecognized_keys, keys: a }), r.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of a) {
        const d = s.data[u];
        c.push({
          key: { status: "valid", value: u },
          value: l._parse(new nn(s, d, s.path, u)),
          alwaysSet: u in s.data,
        });
      }
    }
    return s.common.async
      ? Promise.resolve()
          .then(async () => {
            const l = [];
            for (const u of c) {
              const d = await u.key,
                f = await u.value;
              l.push({ key: d, value: f, alwaysSet: u.alwaysSet });
            }
            return l;
          })
          .then((l) => Xe.mergeObjectSync(r, l))
      : Xe.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      K.errToObj,
      new Ae({
        ...this._def,
        unknownKeys: "strict",
        ...(t !== void 0
          ? {
              errorMap: (n, r) => {
                var s, i, o, a;
                const c =
                  (o =
                    (i = (s = this._def).errorMap) === null || i === void 0
                      ? void 0
                      : i.call(s, n, r).message) !== null && o !== void 0
                    ? o
                    : r.defaultError;
                return n.code === "unrecognized_keys"
                  ? {
                      message:
                        (a = K.errToObj(t).message) !== null && a !== void 0
                          ? a
                          : c,
                    }
                  : { message: c };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new Ae({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new Ae({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(t) {
    return new Ae({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...t }),
    });
  }
  merge(t) {
    return new Ae({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: J.ZodObject,
    });
  }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  catchall(t) {
    return new Ae({ ...this._def, catchall: t });
  }
  pick(t) {
    const n = {};
    return (
      pe.objectKeys(t).forEach((r) => {
        t[r] && this.shape[r] && (n[r] = this.shape[r]);
      }),
      new Ae({ ...this._def, shape: () => n })
    );
  }
  omit(t) {
    const n = {};
    return (
      pe.objectKeys(this.shape).forEach((r) => {
        t[r] || (n[r] = this.shape[r]);
      }),
      new Ae({ ...this._def, shape: () => n })
    );
  }
  deepPartial() {
    return Tr(this);
  }
  partial(t) {
    const n = {};
    return (
      pe.objectKeys(this.shape).forEach((r) => {
        const s = this.shape[r];
        t && !t[r] ? (n[r] = s) : (n[r] = s.optional());
      }),
      new Ae({ ...this._def, shape: () => n })
    );
  }
  required(t) {
    const n = {};
    return (
      pe.objectKeys(this.shape).forEach((r) => {
        if (t && !t[r]) n[r] = this.shape[r];
        else {
          let i = this.shape[r];
          for (; i instanceof en; ) i = i._def.innerType;
          n[r] = i;
        }
      }),
      new Ae({ ...this._def, shape: () => n })
    );
  }
  keyof() {
    return Dy(pe.objectKeys(this.shape));
  }
}
Ae.create = (e, t) =>
  new Ae({
    shape: () => e,
    unknownKeys: "strip",
    catchall: yn.create(),
    typeName: J.ZodObject,
    ...oe(t),
  });
Ae.strictCreate = (e, t) =>
  new Ae({
    shape: () => e,
    unknownKeys: "strict",
    catchall: yn.create(),
    typeName: J.ZodObject,
    ...oe(t),
  });
Ae.lazycreate = (e, t) =>
  new Ae({
    shape: e,
    unknownKeys: "strip",
    catchall: yn.create(),
    typeName: J.ZodObject,
    ...oe(t),
  });
class ti extends le {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = this._def.options;
    function s(i) {
      for (const a of i) if (a.result.status === "valid") return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return n.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((a) => new xt(a.ctx.common.issues));
      return U(n, { code: M.invalid_union, unionErrors: o }), te;
    }
    if (n.common.async)
      return Promise.all(
        r.map(async (i) => {
          const o = { ...n, common: { ...n.common, issues: [] }, parent: null };
          return {
            result: await i._parseAsync({
              data: n.data,
              path: n.path,
              parent: o,
            }),
            ctx: o,
          };
        })
      ).then(s);
    {
      let i;
      const o = [];
      for (const c of r) {
        const l = { ...n, common: { ...n.common, issues: [] }, parent: null },
          u = c._parseSync({ data: n.data, path: n.path, parent: l });
        if (u.status === "valid") return u;
        u.status === "dirty" && !i && (i = { result: u, ctx: l }),
          l.common.issues.length && o.push(l.common.issues);
      }
      if (i) return n.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((c) => new xt(c));
      return U(n, { code: M.invalid_union, unionErrors: a }), te;
    }
  }
  get options() {
    return this._def.options;
  }
}
ti.create = (e, t) => new ti({ options: e, typeName: J.ZodUnion, ...oe(t) });
const ln = (e) =>
  e instanceof si
    ? ln(e.schema)
    : e instanceof Lt
    ? ln(e.innerType())
    : e instanceof ii
    ? [e.value]
    : e instanceof Vn
    ? e.options
    : e instanceof oi
    ? pe.objectValues(e.enum)
    : e instanceof ai
    ? ln(e._def.innerType)
    : e instanceof Js
    ? [void 0]
    : e instanceof ei
    ? [null]
    : e instanceof en
    ? [void 0, ...ln(e.unwrap())]
    : e instanceof Bn
    ? [null, ...ln(e.unwrap())]
    : e instanceof ru || e instanceof li
    ? ln(e.unwrap())
    : e instanceof ci
    ? ln(e._def.innerType)
    : [];
class Go extends le {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== z.object)
      return (
        U(n, {
          code: M.invalid_type,
          expected: z.object,
          received: n.parsedType,
        }),
        te
      );
    const r = this.discriminator,
      s = n.data[r],
      i = this.optionsMap.get(s);
    return i
      ? n.common.async
        ? i._parseAsync({ data: n.data, path: n.path, parent: n })
        : i._parseSync({ data: n.data, path: n.path, parent: n })
      : (U(n, {
          code: M.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [r],
        }),
        te);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(t, n, r) {
    const s = new Map();
    for (const i of n) {
      const o = ln(i.shape[t]);
      if (!o.length)
        throw new Error(
          `A discriminator value for key \`${t}\` could not be extracted from all schema options`
        );
      for (const a of o) {
        if (s.has(a))
          throw new Error(
            `Discriminator property ${String(t)} has duplicate value ${String(
              a
            )}`
          );
        s.set(a, i);
      }
    }
    return new Go({
      typeName: J.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: s,
      ...oe(r),
    });
  }
}
function Dc(e, t) {
  const n = un(e),
    r = un(t);
  if (e === t) return { valid: !0, data: e };
  if (n === z.object && r === z.object) {
    const s = pe.objectKeys(t),
      i = pe.objectKeys(e).filter((a) => s.indexOf(a) !== -1),
      o = { ...e, ...t };
    for (const a of i) {
      const c = Dc(e[a], t[a]);
      if (!c.valid) return { valid: !1 };
      o[a] = c.data;
    }
    return { valid: !0, data: o };
  } else if (n === z.array && r === z.array) {
    if (e.length !== t.length) return { valid: !1 };
    const s = [];
    for (let i = 0; i < e.length; i++) {
      const o = e[i],
        a = t[i],
        c = Dc(o, a);
      if (!c.valid) return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else
    return n === z.date && r === z.date && +e == +t
      ? { valid: !0, data: e }
      : { valid: !1 };
}
class ni extends le {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      s = (i, o) => {
        if (Nc(i) || Nc(o)) return te;
        const a = Dc(i.value, o.value);
        return a.valid
          ? ((jc(i) || jc(o)) && n.dirty(), { status: n.value, value: a.data })
          : (U(r, { code: M.invalid_intersection_types }), te);
      };
    return r.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r,
          }),
        ]).then(([i, o]) => s(i, o))
      : s(
          this._def.left._parseSync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseSync({ data: r.data, path: r.path, parent: r })
        );
  }
}
ni.create = (e, t, n) =>
  new ni({ left: e, right: t, typeName: J.ZodIntersection, ...oe(n) });
class rn extends le {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== z.array)
      return (
        U(r, {
          code: M.invalid_type,
          expected: z.array,
          received: r.parsedType,
        }),
        te
      );
    if (r.data.length < this._def.items.length)
      return (
        U(r, {
          code: M.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        te
      );
    !this._def.rest &&
      r.data.length > this._def.items.length &&
      (U(r, {
        code: M.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      n.dirty());
    const i = [...r.data]
      .map((o, a) => {
        const c = this._def.items[a] || this._def.rest;
        return c ? c._parse(new nn(r, o, r.path, a)) : null;
      })
      .filter((o) => !!o);
    return r.common.async
      ? Promise.all(i).then((o) => Xe.mergeArray(n, o))
      : Xe.mergeArray(n, i);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new rn({ ...this._def, rest: t });
  }
}
rn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new rn({ items: e, typeName: J.ZodTuple, rest: null, ...oe(t) });
};
class ri extends le {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== z.object)
      return (
        U(r, {
          code: M.invalid_type,
          expected: z.object,
          received: r.parsedType,
        }),
        te
      );
    const s = [],
      i = this._def.keyType,
      o = this._def.valueType;
    for (const a in r.data)
      s.push({
        key: i._parse(new nn(r, a, r.path, a)),
        value: o._parse(new nn(r, r.data[a], r.path, a)),
        alwaysSet: a in r.data,
      });
    return r.common.async
      ? Xe.mergeObjectAsync(n, s)
      : Xe.mergeObjectSync(n, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof le
      ? new ri({ keyType: t, valueType: n, typeName: J.ZodRecord, ...oe(r) })
      : new ri({
          keyType: Nt.create(),
          valueType: t,
          typeName: J.ZodRecord,
          ...oe(n),
        });
  }
}
class Ao extends le {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== z.map)
      return (
        U(r, { code: M.invalid_type, expected: z.map, received: r.parsedType }),
        te
      );
    const s = this._def.keyType,
      i = this._def.valueType,
      o = [...r.data.entries()].map(([a, c], l) => ({
        key: s._parse(new nn(r, a, r.path, [l, "key"])),
        value: i._parse(new nn(r, c, r.path, [l, "value"])),
      }));
    if (r.common.async) {
      const a = new Map();
      return Promise.resolve().then(async () => {
        for (const c of o) {
          const l = await c.key,
            u = await c.value;
          if (l.status === "aborted" || u.status === "aborted") return te;
          (l.status === "dirty" || u.status === "dirty") && n.dirty(),
            a.set(l.value, u.value);
        }
        return { status: n.value, value: a };
      });
    } else {
      const a = new Map();
      for (const c of o) {
        const l = c.key,
          u = c.value;
        if (l.status === "aborted" || u.status === "aborted") return te;
        (l.status === "dirty" || u.status === "dirty") && n.dirty(),
          a.set(l.value, u.value);
      }
      return { status: n.value, value: a };
    }
  }
}
Ao.create = (e, t, n) =>
  new Ao({ valueType: t, keyType: e, typeName: J.ZodMap, ...oe(n) });
class vr extends le {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== z.set)
      return (
        U(r, { code: M.invalid_type, expected: z.set, received: r.parsedType }),
        te
      );
    const s = this._def;
    s.minSize !== null &&
      r.data.size < s.minSize.value &&
      (U(r, {
        code: M.too_small,
        minimum: s.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: s.minSize.message,
      }),
      n.dirty()),
      s.maxSize !== null &&
        r.data.size > s.maxSize.value &&
        (U(r, {
          code: M.too_big,
          maximum: s.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: s.maxSize.message,
        }),
        n.dirty());
    const i = this._def.valueType;
    function o(c) {
      const l = new Set();
      for (const u of c) {
        if (u.status === "aborted") return te;
        u.status === "dirty" && n.dirty(), l.add(u.value);
      }
      return { status: n.value, value: l };
    }
    const a = [...r.data.values()].map((c, l) =>
      i._parse(new nn(r, c, r.path, l))
    );
    return r.common.async ? Promise.all(a).then((c) => o(c)) : o(a);
  }
  min(t, n) {
    return new vr({
      ...this._def,
      minSize: { value: t, message: K.toString(n) },
    });
  }
  max(t, n) {
    return new vr({
      ...this._def,
      maxSize: { value: t, message: K.toString(n) },
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
vr.create = (e, t) =>
  new vr({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: J.ZodSet,
    ...oe(t),
  });
class Mr extends le {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== z.function)
      return (
        U(n, {
          code: M.invalid_type,
          expected: z.function,
          received: n.parsedType,
        }),
        te
      );
    function r(a, c) {
      return So({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          wo(),
          es,
        ].filter((l) => !!l),
        issueData: { code: M.invalid_arguments, argumentsError: c },
      });
    }
    function s(a, c) {
      return So({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          wo(),
          es,
        ].filter((l) => !!l),
        issueData: { code: M.invalid_return_type, returnTypeError: c },
      });
    }
    const i = { errorMap: n.common.contextualErrorMap },
      o = n.data;
    if (this._def.returns instanceof ns) {
      const a = this;
      return rt(async function (...c) {
        const l = new xt([]),
          u = await a._def.args.parseAsync(c, i).catch((p) => {
            throw (l.addIssue(r(c, p)), l);
          }),
          d = await Reflect.apply(o, this, u);
        return await a._def.returns._def.type.parseAsync(d, i).catch((p) => {
          throw (l.addIssue(s(d, p)), l);
        });
      });
    } else {
      const a = this;
      return rt(function (...c) {
        const l = a._def.args.safeParse(c, i);
        if (!l.success) throw new xt([r(c, l.error)]);
        const u = Reflect.apply(o, this, l.data),
          d = a._def.returns.safeParse(u, i);
        if (!d.success) throw new xt([s(u, d.error)]);
        return d.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new Mr({ ...this._def, args: rn.create(t).rest(lr.create()) });
  }
  returns(t) {
    return new Mr({ ...this._def, returns: t });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new Mr({
      args: t || rn.create([]).rest(lr.create()),
      returns: n || lr.create(),
      typeName: J.ZodFunction,
      ...oe(r),
    });
  }
}
class si extends le {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
si.create = (e, t) => new si({ getter: e, typeName: J.ZodLazy, ...oe(t) });
class ii extends le {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return (
        U(n, {
          received: n.data,
          code: M.invalid_literal,
          expected: this._def.value,
        }),
        te
      );
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
ii.create = (e, t) => new ii({ value: e, typeName: J.ZodLiteral, ...oe(t) });
function Dy(e, t) {
  return new Vn({ values: e, typeName: J.ZodEnum, ...oe(t) });
}
class Vn extends le {
  constructor() {
    super(...arguments), Ps.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        U(n, {
          expected: pe.joinValues(r),
          received: n.parsedType,
          code: M.invalid_type,
        }),
        te
      );
    }
    if (
      (_o(this, Ps) || ky(this, Ps, new Set(this._def.values)),
      !_o(this, Ps).has(t.data))
    ) {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        U(n, { received: n.data, code: M.invalid_enum_value, options: r }), te
      );
    }
    return rt(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return Vn.create(t, { ...this._def, ...n });
  }
  exclude(t, n = this._def) {
    return Vn.create(
      this.options.filter((r) => !t.includes(r)),
      { ...this._def, ...n }
    );
  }
}
Ps = new WeakMap();
Vn.create = Dy;
class oi extends le {
  constructor() {
    super(...arguments), Rs.set(this, void 0);
  }
  _parse(t) {
    const n = pe.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(t);
    if (r.parsedType !== z.string && r.parsedType !== z.number) {
      const s = pe.objectValues(n);
      return (
        U(r, {
          expected: pe.joinValues(s),
          received: r.parsedType,
          code: M.invalid_type,
        }),
        te
      );
    }
    if (
      (_o(this, Rs) ||
        ky(this, Rs, new Set(pe.getValidEnumValues(this._def.values))),
      !_o(this, Rs).has(t.data))
    ) {
      const s = pe.objectValues(n);
      return (
        U(r, { received: r.data, code: M.invalid_enum_value, options: s }), te
      );
    }
    return rt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Rs = new WeakMap();
oi.create = (e, t) =>
  new oi({ values: e, typeName: J.ZodNativeEnum, ...oe(t) });
class ns extends le {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== z.promise && n.common.async === !1)
      return (
        U(n, {
          code: M.invalid_type,
          expected: z.promise,
          received: n.parsedType,
        }),
        te
      );
    const r = n.parsedType === z.promise ? n.data : Promise.resolve(n.data);
    return rt(
      r.then((s) =>
        this._def.type.parseAsync(s, {
          path: n.path,
          errorMap: n.common.contextualErrorMap,
        })
      )
    );
  }
}
ns.create = (e, t) => new ns({ type: e, typeName: J.ZodPromise, ...oe(t) });
class Lt extends le {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === J.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      s = this._def.effect || null,
      i = {
        addIssue: (o) => {
          U(r, o), o.fatal ? n.abort() : n.dirty();
        },
        get path() {
          return r.path;
        },
      };
    if (((i.addIssue = i.addIssue.bind(i)), s.type === "preprocess")) {
      const o = s.transform(r.data, i);
      if (r.common.async)
        return Promise.resolve(o).then(async (a) => {
          if (n.value === "aborted") return te;
          const c = await this._def.schema._parseAsync({
            data: a,
            path: r.path,
            parent: r,
          });
          return c.status === "aborted"
            ? te
            : c.status === "dirty" || n.value === "dirty"
            ? kr(c.value)
            : c;
        });
      {
        if (n.value === "aborted") return te;
        const a = this._def.schema._parseSync({
          data: o,
          path: r.path,
          parent: r,
        });
        return a.status === "aborted"
          ? te
          : a.status === "dirty" || n.value === "dirty"
          ? kr(a.value)
          : a;
      }
    }
    if (s.type === "refinement") {
      const o = (a) => {
        const c = s.refinement(a, i);
        if (r.common.async) return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return a;
      };
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return a.status === "aborted"
          ? te
          : (a.status === "dirty" && n.dirty(),
            o(a.value),
            { status: n.value, value: a.value });
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((a) =>
            a.status === "aborted"
              ? te
              : (a.status === "dirty" && n.dirty(),
                o(a.value).then(() => ({ status: n.value, value: a.value })))
          );
    }
    if (s.type === "transform")
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        if (!gr(o)) return o;
        const a = s.transform(o.value, i);
        if (a instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: n.value, value: a };
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((o) =>
            gr(o)
              ? Promise.resolve(s.transform(o.value, i)).then((a) => ({
                  status: n.value,
                  value: a,
                }))
              : o
          );
    pe.assertNever(s);
  }
}
Lt.create = (e, t, n) =>
  new Lt({ schema: e, typeName: J.ZodEffects, effect: t, ...oe(n) });
Lt.createWithPreprocess = (e, t, n) =>
  new Lt({
    schema: t,
    effect: { type: "preprocess", transform: e },
    typeName: J.ZodEffects,
    ...oe(n),
  });
class en extends le {
  _parse(t) {
    return this._getType(t) === z.undefined
      ? rt(void 0)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
en.create = (e, t) =>
  new en({ innerType: e, typeName: J.ZodOptional, ...oe(t) });
class Bn extends le {
  _parse(t) {
    return this._getType(t) === z.null
      ? rt(null)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Bn.create = (e, t) =>
  new Bn({ innerType: e, typeName: J.ZodNullable, ...oe(t) });
class ai extends le {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return (
      n.parsedType === z.undefined && (r = this._def.defaultValue()),
      this._def.innerType._parse({ data: r, path: n.path, parent: n })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ai.create = (e, t) =>
  new ai({
    innerType: e,
    typeName: J.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...oe(t),
  });
class ci extends le {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = { ...n, common: { ...n.common, issues: [] } },
      s = this._def.innerType._parse({
        data: r.data,
        path: r.path,
        parent: { ...r },
      });
    return Xs(s)
      ? s.then((i) => ({
          status: "valid",
          value:
            i.status === "valid"
              ? i.value
              : this._def.catchValue({
                  get error() {
                    return new xt(r.common.issues);
                  },
                  input: r.data,
                }),
        }))
      : {
          status: "valid",
          value:
            s.status === "valid"
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new xt(r.common.issues);
                  },
                  input: r.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ci.create = (e, t) =>
  new ci({
    innerType: e,
    typeName: J.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...oe(t),
  });
class Eo extends le {
  _parse(t) {
    if (this._getType(t) !== z.nan) {
      const r = this._getOrReturnCtx(t);
      return (
        U(r, { code: M.invalid_type, expected: z.nan, received: r.parsedType }),
        te
      );
    }
    return { status: "valid", value: t.data };
  }
}
Eo.create = (e) => new Eo({ typeName: J.ZodNaN, ...oe(e) });
const WR = Symbol("zod_brand");
class ru extends le {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = n.data;
    return this._def.type._parse({ data: r, path: n.path, parent: n });
  }
  unwrap() {
    return this._def.type;
  }
}
class Ei extends le {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return i.status === "aborted"
          ? te
          : i.status === "dirty"
          ? (n.dirty(), kr(i.value))
          : this._def.out._parseAsync({
              data: i.value,
              path: r.path,
              parent: r,
            });
      })();
    {
      const s = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r,
      });
      return s.status === "aborted"
        ? te
        : s.status === "dirty"
        ? (n.dirty(), { status: "dirty", value: s.value })
        : this._def.out._parseSync({ data: s.value, path: r.path, parent: r });
    }
  }
  static create(t, n) {
    return new Ei({ in: t, out: n, typeName: J.ZodPipeline });
  }
}
class li extends le {
  _parse(t) {
    const n = this._def.innerType._parse(t),
      r = (s) => (gr(s) && (s.value = Object.freeze(s.value)), s);
    return Xs(n) ? n.then((s) => r(s)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
li.create = (e, t) =>
  new li({ innerType: e, typeName: J.ZodReadonly, ...oe(t) });
function My(e, t = {}, n) {
  return e
    ? ts.create().superRefine((r, s) => {
        var i, o;
        if (!e(r)) {
          const a =
              typeof t == "function"
                ? t(r)
                : typeof t == "string"
                ? { message: t }
                : t,
            c =
              (o = (i = a.fatal) !== null && i !== void 0 ? i : n) !== null &&
              o !== void 0
                ? o
                : !0,
            l = typeof a == "string" ? { message: a } : a;
          s.addIssue({ code: "custom", ...l, fatal: c });
        }
      })
    : ts.create();
}
const HR = { object: Ae.lazycreate };
var J;
(function (e) {
  (e.ZodString = "ZodString"),
    (e.ZodNumber = "ZodNumber"),
    (e.ZodNaN = "ZodNaN"),
    (e.ZodBigInt = "ZodBigInt"),
    (e.ZodBoolean = "ZodBoolean"),
    (e.ZodDate = "ZodDate"),
    (e.ZodSymbol = "ZodSymbol"),
    (e.ZodUndefined = "ZodUndefined"),
    (e.ZodNull = "ZodNull"),
    (e.ZodAny = "ZodAny"),
    (e.ZodUnknown = "ZodUnknown"),
    (e.ZodNever = "ZodNever"),
    (e.ZodVoid = "ZodVoid"),
    (e.ZodArray = "ZodArray"),
    (e.ZodObject = "ZodObject"),
    (e.ZodUnion = "ZodUnion"),
    (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (e.ZodIntersection = "ZodIntersection"),
    (e.ZodTuple = "ZodTuple"),
    (e.ZodRecord = "ZodRecord"),
    (e.ZodMap = "ZodMap"),
    (e.ZodSet = "ZodSet"),
    (e.ZodFunction = "ZodFunction"),
    (e.ZodLazy = "ZodLazy"),
    (e.ZodLiteral = "ZodLiteral"),
    (e.ZodEnum = "ZodEnum"),
    (e.ZodEffects = "ZodEffects"),
    (e.ZodNativeEnum = "ZodNativeEnum"),
    (e.ZodOptional = "ZodOptional"),
    (e.ZodNullable = "ZodNullable"),
    (e.ZodDefault = "ZodDefault"),
    (e.ZodCatch = "ZodCatch"),
    (e.ZodPromise = "ZodPromise"),
    (e.ZodBranded = "ZodBranded"),
    (e.ZodPipeline = "ZodPipeline"),
    (e.ZodReadonly = "ZodReadonly");
})(J || (J = {}));
const qR = (e, t = { message: `Input not instance of ${e.name}` }) =>
    My((n) => n instanceof e, t),
  Fy = Nt.create,
  Ly = Ln.create,
  ZR = Eo.create,
  GR = In.create,
  Iy = Ys.create,
  KR = yr.create,
  QR = To.create,
  XR = Js.create,
  YR = ei.create,
  JR = ts.create,
  ek = lr.create,
  tk = yn.create,
  nk = Co.create,
  rk = Dt.create,
  sk = Ae.create,
  ik = Ae.strictCreate,
  ok = ti.create,
  ak = Go.create,
  ck = ni.create,
  lk = rn.create,
  uk = ri.create,
  dk = Ao.create,
  fk = vr.create,
  hk = Mr.create,
  pk = si.create,
  mk = ii.create,
  gk = Vn.create,
  yk = oi.create,
  vk = ns.create,
  Zf = Lt.create,
  xk = en.create,
  bk = Bn.create,
  wk = Lt.createWithPreprocess,
  Sk = Ei.create,
  _k = () => Fy().optional(),
  Tk = () => Ly().optional(),
  Ck = () => Iy().optional(),
  Ak = {
    string: (e) => Nt.create({ ...e, coerce: !0 }),
    number: (e) => Ln.create({ ...e, coerce: !0 }),
    boolean: (e) => Ys.create({ ...e, coerce: !0 }),
    bigint: (e) => In.create({ ...e, coerce: !0 }),
    date: (e) => yr.create({ ...e, coerce: !0 }),
  },
  Ek = te;
var Gf = Object.freeze({
  __proto__: null,
  defaultErrorMap: es,
  setErrorMap: wR,
  getErrorMap: wo,
  makeIssue: So,
  EMPTY_PATH: SR,
  addIssueToContext: U,
  ParseStatus: Xe,
  INVALID: te,
  DIRTY: kr,
  OK: rt,
  isAborted: Nc,
  isDirty: jc,
  isValid: gr,
  isAsync: Xs,
  get util() {
    return pe;
  },
  get objectUtil() {
    return Oc;
  },
  ZodParsedType: z,
  getParsedType: un,
  ZodType: le,
  datetimeRegex: jy,
  ZodString: Nt,
  ZodNumber: Ln,
  ZodBigInt: In,
  ZodBoolean: Ys,
  ZodDate: yr,
  ZodSymbol: To,
  ZodUndefined: Js,
  ZodNull: ei,
  ZodAny: ts,
  ZodUnknown: lr,
  ZodNever: yn,
  ZodVoid: Co,
  ZodArray: Dt,
  ZodObject: Ae,
  ZodUnion: ti,
  ZodDiscriminatedUnion: Go,
  ZodIntersection: ni,
  ZodTuple: rn,
  ZodRecord: ri,
  ZodMap: Ao,
  ZodSet: vr,
  ZodFunction: Mr,
  ZodLazy: si,
  ZodLiteral: ii,
  ZodEnum: Vn,
  ZodNativeEnum: oi,
  ZodPromise: ns,
  ZodEffects: Lt,
  ZodTransformer: Lt,
  ZodOptional: en,
  ZodNullable: Bn,
  ZodDefault: ai,
  ZodCatch: ci,
  ZodNaN: Eo,
  BRAND: WR,
  ZodBranded: ru,
  ZodPipeline: Ei,
  ZodReadonly: li,
  custom: My,
  Schema: le,
  ZodSchema: le,
  late: HR,
  get ZodFirstPartyTypeKind() {
    return J;
  },
  coerce: Ak,
  any: JR,
  array: rk,
  bigint: GR,
  boolean: Iy,
  date: KR,
  discriminatedUnion: ak,
  effect: Zf,
  enum: gk,
  function: hk,
  instanceof: qR,
  intersection: ck,
  lazy: pk,
  literal: mk,
  map: dk,
  nan: ZR,
  nativeEnum: yk,
  never: tk,
  null: YR,
  nullable: bk,
  number: Ly,
  object: sk,
  oboolean: Ck,
  onumber: Tk,
  optional: xk,
  ostring: _k,
  pipeline: Sk,
  preprocess: wk,
  promise: vk,
  record: uk,
  set: fk,
  strictObject: ik,
  string: Fy,
  symbol: QR,
  transformer: Zf,
  tuple: lk,
  undefined: XR,
  union: ok,
  unknown: ek,
  void: nk,
  NEVER: Ek,
  ZodIssueCode: M,
  quotelessJson: bR,
  ZodError: xt,
});
const ka = (e, t) => (Le((r) => r.lang) === "ru" ? e : t),
  Pk = Gf.object({ email: Gf.string().email() }),
  Rk = () => {
    var s, i;
    const [e, t] = x.useState(!1),
      n = RT({ resolver: xR(Pk), defaultValues: { email: "" } });
    async function r(o) {
      try {
        const a = await jE(o);
        n.reset(), t(a);
      } catch (a) {
        console.error("POST subscribe", a);
      }
    }
    return y.jsx("form", {
      onSubmit: n.handleSubmit(r),
      className: "py-8 bg-surface_container",
      children: y.jsxs(st, {
        className:
          "flex lg:flex-row flex-col gap-6 lg:items-center justify-between",
        children: [
          y.jsx("h2", {
            className: "h2",
            children: ka("Подпишитесь на новости:", "Subscribe to the news:"),
          }),
          y.jsxs("div", {
            className: "relative",
            children: [
              y.jsx("input", {
                ...n.register("email"),
                placeholder: "Email",
                className: "input xl:w-[392px] lg:w-[320px] w-full",
              }),
              y.jsx("span", {
                className:
                  "text-error absolute text-red-600 -bottom-6 text-sm left-0",
                children:
                  (i = (s = n.formState.errors) == null ? void 0 : s.email) ==
                  null
                    ? void 0
                    : i.message,
              }),
            ],
          }),
          y.jsx(ut, {
            loading: n.formState.isSubmitting,
            disabled: e,
            className: "xl:w-[288px] lg:w-[220px] w-full",
            children: e
              ? ka("Отправлено", "Submitted")
              : ka("Подписаться", "Subscribe"),
          }),
        ],
      }),
    });
  },
  o1 = () => {
    const e = Le((t) => t.lang);
    return y.jsxs("footer", {
      children: [
        y.jsx(Rk, {}),
        y.jsx("div", {
          className: "py-5 bg-primary",
          children: y.jsxs(st, {
            className: "flex flex-col gap-6",
            children: [
              y.jsxs("div", {
                className:
                  "flex flex-col md:flex-row gap-6 md:items-end md:justify-between items-center",
                children: [
                  y.jsx(Jh, {}),
                  y.jsxs("div", {
                    className: "flex items-center gap-6",
                    children: [
                      y.jsx(Me, {
                        target: "_blank",
                        to: "https://www.facebook.com/profile.php?id=61567254728028",
                        children: y.jsx(Px, { className: "text-white" }),
                      }),
                      y.jsx(Me, {
                        target: "_blank",
                        to: "https://www.instagram.com/turkmenexpo_tm?igsh=bnhkOWpmNWcwcHBq",
                        children: y.jsx("img", { src: "/inst.svg" }),
                      }),
                      y.jsx(Me, {
                        target: "_blank",
                        to: "https://www.linkedin.com/company/turkmen-expo",
                        children: y.jsx("img", { src: "/in.svg" }),
                      }),
                      y.jsx(Me, {
                        target: "_blank",
                        to: "https://x.com/turkmenexpo?t=D-XSa8d0AC8GAv5peAzteA&s=09",
                        children: y.jsx("img", { src: "/x.svg" }),
                      }),
                    ],
                  }),
                ],
              }),
              y.jsx("hr", { className: "border-white/50" }),
              y.jsx("h5", {
                className: "text-base text-center normal text-white",
                children:
                  e === pt.RU
                    ? "©2025 Все права защищены"
                    : "All rights reserved",
              }),
            ],
          }),
        }),
      ],
    });
  },
  st = ({ className: e, children: t }) =>
    y.jsx("div", {
      className: re("w-full mx-auto max-w-[1240px] px-4", e),
      children: t,
    }),
  a1 = ({ title: e }) =>
    y.jsxs("div", {
      className: "relative flex items-center h-[216px] w-full justify-center",
      children: [
        y.jsx("img", {
          src: "/cover.png",
          className: "-z-10 absolute size-full object-cover top-0 left-0",
        }),
        y.jsx("h1", {
          className: "text-on_primary md:text-5xl text-3xl",
          children: e,
        }),
      ],
    });
export {
  st as $,
  Jk as A,
  ut as B,
  a1 as C,
  Mk as D,
  Uk as E,
  o1 as F,
  xR as G,
  i1 as H,
  _e as I,
  Ik as J,
  Wk as K,
  pt as L,
  zk as M,
  Mc as N,
  It as O,
  oh as P,
  qk as Q,
  On as R,
  rs as S,
  it as T,
  mt as U,
  zi as V,
  ss as W,
  DC as X,
  Ty as Y,
  Wh as Z,
  Hk as _,
  Zk as a,
  e1 as b,
  n1 as c,
  s1 as d,
  r1 as e,
  t1 as f,
  re as g,
  Gk as h,
  Yk as i,
  y as j,
  Kk as k,
  Qk as l,
  Xk as m,
  Fo as n,
  Ki as o,
  We as p,
  NT as q,
  Qm as r,
  Xm as s,
  Ym as t,
  Le as u,
  Bk as v,
  Dk as w,
  RT as x,
  Vk as y,
  Gf as z,
};
