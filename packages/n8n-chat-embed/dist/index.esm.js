import dt, { forwardRef as ut, createElement as Xe, useRef as ve, useState as B, useEffect as De, useCallback as Me } from "react";
var He = { exports: {} }, Ce = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var et;
function Nt() {
  if (et)
    return Ce;
  et = 1;
  var c = dt, s = Symbol.for("react.element"), d = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, f = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(R, w, F) {
    var v, $ = {}, A = null, p = null;
    F !== void 0 && (A = "" + F), w.key !== void 0 && (A = "" + w.key), w.ref !== void 0 && (p = w.ref);
    for (v in w)
      h.call(w, v) && !o.hasOwnProperty(v) && ($[v] = w[v]);
    if (R && R.defaultProps)
      for (v in w = R.defaultProps, w)
        $[v] === void 0 && ($[v] = w[v]);
    return { $$typeof: s, type: R, key: A, ref: p, props: $, _owner: f.current };
  }
  return Ce.Fragment = d, Ce.jsx = g, Ce.jsxs = g, Ce;
}
var Se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt;
function Ft() {
  return tt || (tt = 1, process.env.NODE_ENV !== "production" && function() {
    var c = dt, s = Symbol.for("react.element"), d = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), R = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), j = Symbol.iterator, P = "@@iterator";
    function O(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = j && e[j] || e[P];
      return typeof r == "function" ? r : null;
    }
    var M = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
          a[l - 1] = arguments[l];
        D("error", e, a);
      }
    }
    function D(e, r, a) {
      {
        var l = M.ReactDebugCurrentFrame, _ = l.getStackAddendum();
        _ !== "" && (r += "%s", a = a.concat([_]));
        var k = a.map(function(y) {
          return String(y);
        });
        k.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, k);
      }
    }
    var U = !1, I = !1, G = !1, re = !1, Z = !1, Q;
    Q = Symbol.for("react.module.reference");
    function ae(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === o || Z || e === f || e === F || e === v || re || e === p || U || I || G || typeof e == "object" && e !== null && (e.$$typeof === A || e.$$typeof === $ || e.$$typeof === g || e.$$typeof === R || e.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function le(e, r, a) {
      var l = e.displayName;
      if (l)
        return l;
      var _ = r.displayName || r.name || "";
      return _ !== "" ? a + "(" + _ + ")" : a;
    }
    function de(e) {
      return e.displayName || "Context";
    }
    function z(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case d:
          return "Portal";
        case o:
          return "Profiler";
        case f:
          return "StrictMode";
        case F:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return de(r) + ".Consumer";
          case g:
            var a = e;
            return de(a._context) + ".Provider";
          case w:
            return le(e, e.render, "ForwardRef");
          case $:
            var l = e.displayName || null;
            return l !== null ? l : z(e.type) || "Memo";
          case A: {
            var _ = e, k = _._payload, y = _._init;
            try {
              return z(y(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, X = 0, ue, ze, i, Fe, K, be, pe;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function xe() {
      {
        if (X === 0) {
          ue = console.log, ze = console.info, i = console.warn, Fe = console.error, K = console.group, be = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        X++;
      }
    }
    function Pe() {
      {
        if (X--, X === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, e, {
              value: ue
            }),
            info: q({}, e, {
              value: ze
            }),
            warn: q({}, e, {
              value: i
            }),
            error: q({}, e, {
              value: Fe
            }),
            group: q({}, e, {
              value: K
            }),
            groupCollapsed: q({}, e, {
              value: be
            }),
            groupEnd: q({}, e, {
              value: pe
            })
          });
        }
        X < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var we = M.ReactCurrentDispatcher, me;
    function ne(e, r, a) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (_) {
            var l = _.stack.trim().match(/\n( *(at )?)/);
            me = l && l[1] || "";
          }
        return `
` + me + e;
      }
    }
    var fe = !1, se;
    {
      var $e = typeof WeakMap == "function" ? WeakMap : Map;
      se = new $e();
    }
    function _e(e, r) {
      if (!e || fe)
        return "";
      {
        var a = se.get(e);
        if (a !== void 0)
          return a;
      }
      var l;
      fe = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = we.current, we.current = null, xe();
      try {
        if (r) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (W) {
              l = W;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch (W) {
              l = W;
            }
            e.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            l = W;
          }
          e();
        }
      } catch (W) {
        if (W && l && typeof W.stack == "string") {
          for (var b = W.stack.split(`
`), L = l.stack.split(`
`), S = b.length - 1, N = L.length - 1; S >= 1 && N >= 0 && b[S] !== L[N]; )
            N--;
          for (; S >= 1 && N >= 0; S--, N--)
            if (b[S] !== L[N]) {
              if (S !== 1 || N !== 1)
                do
                  if (S--, N--, N < 0 || b[S] !== L[N]) {
                    var H = `
` + b[S].replace(" at new ", " at ");
                    return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), typeof e == "function" && se.set(e, H), H;
                  }
                while (S >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        fe = !1, we.current = k, Pe(), Error.prepareStackTrace = _;
      }
      var ge = e ? e.displayName || e.name : "", ce = ge ? ne(ge) : "";
      return typeof e == "function" && se.set(e, ce), ce;
    }
    function je(e, r, a) {
      return _e(e, !1);
    }
    function Le(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function oe(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return _e(e, Le(e));
      if (typeof e == "string")
        return ne(e);
      switch (e) {
        case F:
          return ne("Suspense");
        case v:
          return ne("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            return je(e.render);
          case $:
            return oe(e.type, r, a);
          case A: {
            var l = e, _ = l._payload, k = l._init;
            try {
              return oe(k(_), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var n = Object.prototype.hasOwnProperty, m = {}, u = M.ReactDebugCurrentFrame;
    function x(e) {
      if (e) {
        var r = e._owner, a = oe(e.type, e._source, r ? r.type : null);
        u.setExtraStackFrame(a);
      } else
        u.setExtraStackFrame(null);
    }
    function C(e, r, a, l, _) {
      {
        var k = Function.call.bind(n);
        for (var y in e)
          if (k(e, y)) {
            var b = void 0;
            try {
              if (typeof e[y] != "function") {
                var L = Error((l || "React class") + ": " + a + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              b = e[y](r, y, l, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              b = S;
            }
            b && !(b instanceof Error) && (x(_), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", a, y, typeof b), x(null)), b instanceof Error && !(b.message in m) && (m[b.message] = !0, x(_), T("Failed %s type: %s", a, b.message), x(null));
          }
      }
    }
    var E = Array.isArray;
    function ee(e) {
      return E(e);
    }
    function Re(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function te(e) {
      try {
        return V(e), !1;
      } catch {
        return !0;
      }
    }
    function V(e) {
      return "" + e;
    }
    function Ie(e) {
      if (te(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Re(e)), V(e);
    }
    var J = M.ReactCurrentOwner, ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ie, Oe, Te;
    Te = {};
    function Ee(e) {
      if (n.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ft(e) {
      if (n.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ht(e, r) {
      if (typeof e.ref == "string" && J.current && r && J.current.stateNode !== r) {
        var a = z(J.current.type);
        Te[a] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(J.current.type), e.ref), Te[a] = !0);
      }
    }
    function gt(e, r) {
      {
        var a = function() {
          ie || (ie = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function vt(e, r) {
      {
        var a = function() {
          Oe || (Oe = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var bt = function(e, r, a, l, _, k, y) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
        props: y,
        // Record the component responsible for creating this element.
        _owner: k
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function yt(e, r, a, l, _) {
      {
        var k, y = {}, b = null, L = null;
        a !== void 0 && (Ie(a), b = "" + a), ft(r) && (Ie(r.key), b = "" + r.key), Ee(r) && (L = r.ref, ht(r, _));
        for (k in r)
          n.call(r, k) && !ke.hasOwnProperty(k) && (y[k] = r[k]);
        if (e && e.defaultProps) {
          var S = e.defaultProps;
          for (k in S)
            y[k] === void 0 && (y[k] = S[k]);
        }
        if (b || L) {
          var N = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && gt(y, N), L && vt(y, N);
        }
        return bt(e, b, L, _, l, J.current, y);
      }
    }
    var Ue = M.ReactCurrentOwner, Ye = M.ReactDebugCurrentFrame;
    function he(e) {
      if (e) {
        var r = e._owner, a = oe(e.type, e._source, r ? r.type : null);
        Ye.setExtraStackFrame(a);
      } else
        Ye.setExtraStackFrame(null);
    }
    var We;
    We = !1;
    function Be(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function qe() {
      {
        if (Ue.current) {
          var e = z(Ue.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function xt(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
    }
    var Ke = {};
    function wt(e) {
      {
        var r = qe();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function Je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = wt(r);
        if (Ke[a])
          return;
        Ke[a] = !0;
        var l = "";
        e && e._owner && e._owner !== Ue.current && (l = " It was passed a child from " + z(e._owner.type) + "."), he(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, l), he(null);
      }
    }
    function Ge(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var a = 0; a < e.length; a++) {
            var l = e[a];
            Be(l) && Je(l, r);
          }
        else if (Be(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var _ = O(e);
          if (typeof _ == "function" && _ !== e.entries)
            for (var k = _.call(e), y; !(y = k.next()).done; )
              Be(y.value) && Je(y.value, r);
        }
      }
    }
    function _t(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === w || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === $))
          a = r.propTypes;
        else
          return;
        if (a) {
          var l = z(r);
          C(a, e.props, "prop", l, e);
        } else if (r.PropTypes !== void 0 && !We) {
          We = !0;
          var _ = z(r);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jt(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var l = r[a];
          if (l !== "children" && l !== "key") {
            he(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), he(null);
            break;
          }
        }
        e.ref !== null && (he(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), he(null));
      }
    }
    var Ze = {};
    function Qe(e, r, a, l, _, k) {
      {
        var y = ae(e);
        if (!y) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = xt(_);
          L ? b += L : b += qe();
          var S;
          e === null ? S = "null" : ee(e) ? S = "array" : e !== void 0 && e.$$typeof === s ? (S = "<" + (z(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : S = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, b);
        }
        var N = yt(e, r, a, _, k);
        if (N == null)
          return N;
        if (y) {
          var H = r.children;
          if (H !== void 0)
            if (l)
              if (ee(H)) {
                for (var ge = 0; ge < H.length; ge++)
                  Ge(H[ge], e);
                Object.freeze && Object.freeze(H);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ge(H, e);
        }
        if (n.call(r, "key")) {
          var ce = z(e), W = Object.keys(r).filter(function(St) {
            return St !== "key";
          }), Ve = W.length > 0 ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ze[ce + Ve]) {
            var Ct = W.length > 0 ? "{" + W.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ve, ce, Ct, ce), Ze[ce + Ve] = !0;
          }
        }
        return e === h ? jt(N) : _t(N), N;
      }
    }
    function Rt(e, r, a) {
      return Qe(e, r, a, !0);
    }
    function kt(e, r, a) {
      return Qe(e, r, a, !1);
    }
    var Tt = kt, Et = Rt;
    Se.Fragment = h, Se.jsx = Tt, Se.jsxs = Et;
  }()), Se;
}
process.env.NODE_ENV === "production" ? He.exports = Nt() : He.exports = Ft();
var t = He.exports;
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pt = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $t = (c) => c.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (s, d, h) => h ? h.toUpperCase() : d.toLowerCase()
), rt = (c) => {
  const s = $t(c);
  return s.charAt(0).toUpperCase() + s.slice(1);
}, pt = (...c) => c.filter((s, d, h) => !!s && s.trim() !== "" && h.indexOf(s) === d).join(" ").trim(), It = (c) => {
  for (const s in c)
    if (s.startsWith("aria-") || s === "role" || s === "title")
      return !0;
};
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ot = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mt = ut(
  ({
    color: c = "currentColor",
    size: s = 24,
    strokeWidth: d = 2,
    absoluteStrokeWidth: h,
    className: f = "",
    children: o,
    iconNode: g,
    ...R
  }, w) => Xe(
    "svg",
    {
      ref: w,
      ...Ot,
      width: s,
      height: s,
      stroke: c,
      strokeWidth: h ? Number(d) * 24 / Number(s) : d,
      className: pt("lucide", f),
      ...!o && !It(R) && { "aria-hidden": "true" },
      ...R
    },
    [
      ...g.map(([F, v]) => Xe(F, v)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y = (c, s) => {
  const d = ut(
    ({ className: h, ...f }, o) => Xe(Mt, {
      ref: o,
      iconNode: s,
      className: pt(
        `lucide-${Pt(rt(c))}`,
        `lucide-${c}`,
        h
      ),
      ...f
    })
  );
  return d.displayName = rt(c), d;
};
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const At = [
  [
    "path",
    {
      d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
      key: "18u6gg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
], Dt = Y("camera", At);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zt = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
], mt = Y("file", zt);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Ut = Y("image", Lt);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wt = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], Bt = Y("message-circle", Wt);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vt = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], at = Y("mic", Vt);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xt = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
], Ht = Y("paperclip", Xt);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yt = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], Ae = Y("send", Yt);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qt = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], nt = Y("trash-2", qt);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kt = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], Jt = Y("video", Kt);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gt = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], Zt = Y("volume-2", Gt);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qt = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ne = Y("x", Qt), er = (c) => {
  let s = c;
  const d = {};
  let h = 0;
  return s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (f, o, g) => {
    const R = encodeURI(g.trim()), w = `XXXXXURLPLACEHOLDER${h++}XXXXX`;
    return d[w] = `<a href="${R}" target="_blank" rel="noopener noreferrer">${o}</a>`, w;
  }), s = s.replace(/(https?:\/\/[^\s<]+)/g, (f, o) => {
    const g = encodeURI(o.trim()), R = `XXXXXURLPLACEHOLDER${h++}XXXXX`;
    return d[R] = `<a href="${g}" target="_blank" rel="noopener noreferrer">${o}</a>`, R;
  }), s = s.replace(/\*\*((?:(?!\*\*).)+)\*\*/g, "<strong>$1</strong>"), s = s.replace(/__((?:(?!__).)+)__/g, "<strong>$1</strong>"), s = s.replace(/\*([^*\n]+?)\*/g, "<em>$1</em>"), s = s.replace(new RegExp("(?<!_)_([^_\\n]+?)_(?!_)", "g"), "<em>$1</em>"), s = s.replace(/\n/g, "<br>"), Object.keys(d).forEach((f) => {
    s = s.replace(f, d[f]);
  }), s;
}, st = ({ message: c, showTimestamp: s = !1 }) => {
  const d = c.type === "user", h = (f, o) => {
    switch (f.type) {
      case "image":
        return /* @__PURE__ */ t.jsx(
          "img",
          {
            src: f.url,
            alt: f.name,
            className: "message-media-image",
            style: { maxWidth: "200px", maxHeight: "150px", borderRadius: "8px", marginTop: "8px" }
          },
          o
        );
      case "video":
        return /* @__PURE__ */ t.jsx(
          "video",
          {
            src: f.url,
            controls: !0,
            className: "message-media-video",
            style: { maxWidth: "200px", maxHeight: "150px", borderRadius: "8px", marginTop: "8px" }
          },
          o
        );
      case "audio":
        return /* @__PURE__ */ t.jsx("div", { className: "message-media-audio", style: { marginTop: "8px" }, children: /* @__PURE__ */ t.jsx("audio", { src: f.url, controls: !0, style: { width: "200px" } }) }, o);
      default:
        return /* @__PURE__ */ t.jsxs("div", { className: "message-media-document", style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px",
          backgroundColor: "rgba(0,0,0,0.1)",
          borderRadius: "8px",
          marginTop: "8px",
          maxWidth: "200px"
        }, children: [
          /* @__PURE__ */ t.jsx(mt, { size: 16 }),
          /* @__PURE__ */ t.jsx("span", { style: { fontSize: "14px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: f.name })
        ] }, o);
    }
  };
  return /* @__PURE__ */ t.jsxs("div", { className: `message-bubble ${d ? "user" : "bot"}`, children: [
    /* @__PURE__ */ t.jsxs("div", { className: "message-content", children: [
      c.content.trim() && (d ? /* @__PURE__ */ t.jsx("p", { children: c.content }) : /* @__PURE__ */ t.jsx("p", { dangerouslySetInnerHTML: { __html: er(c.content) } })),
      c.files && c.files.map((f, o) => h(f, o))
    ] }),
    s && /* @__PURE__ */ t.jsx("div", { className: "message-timestamp", children: c.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) })
  ] });
}, ot = ({ visible: c }) => c ? /* @__PURE__ */ t.jsx("div", { className: "typing-indicator", children: /* @__PURE__ */ t.jsxs("div", { className: "typing-indicator__content", children: [
  /* @__PURE__ */ t.jsx("span", { className: "typing-indicator__dot" }),
  /* @__PURE__ */ t.jsx("span", { className: "typing-indicator__dot" }),
  /* @__PURE__ */ t.jsx("span", { className: "typing-indicator__dot" })
] }) }) : null, it = ({
  onFilesSelected: c,
  maxFiles: s,
  maxFileSize: d,
  allowedTypes: h
}) => {
  const f = ve(null), o = () => `${Date.now()}-${Math.random()}`, g = (p) => p.type.startsWith("image/") ? "image" : p.type.startsWith("video/") ? "video" : p.type.startsWith("audio/") ? "audio" : "document", R = async (p, j = 1) => new Promise((P) => {
    const O = document.createElement("canvas"), M = O.getContext("2d"), T = new Image();
    T.onload = () => {
      let { width: D, height: U } = T;
      const I = 1920;
      D > U && D > I ? (U = U * I / D, D = I) : U > I && (D = D * I / U, U = I), O.width = D, O.height = U, M == null || M.drawImage(T, 0, 0, D, U);
      let G = 0.8;
      const re = () => {
        O.toBlob((Z) => {
          if (Z)
            if (Z.size / 1048576 > j && G > 0.1)
              G -= 0.1, re();
            else {
              const ae = new File([Z], p.name, {
                type: "image/jpeg",
                lastModified: Date.now()
              });
              P(ae);
            }
          else
            P(p);
        }, "image/jpeg", G);
      };
      re();
    }, T.onerror = () => P(p), T.src = URL.createObjectURL(p);
  }), w = async (p) => {
    const P = p.size / 1048576;
    if (P <= 1)
      return p;
    if (p.type.startsWith("image/"))
      try {
        return await R(p, 1);
      } catch (O) {
        return console.warn("Image compression failed, using original:", O), p;
      }
    return P > 1 && console.warn(`File ${p.name} is ${P.toFixed(1)}MB, which may be too large`), p;
  }, F = async (p) => {
    const j = await w(p);
    return {
      file: j,
      id: o(),
      type: g(j),
      url: URL.createObjectURL(j),
      name: p.name,
      // Keep original name
      size: j.size
    };
  }, v = (p) => p.size > d * 1024 * 1024 ? (alert(`File ${p.name} is too large. Maximum size is ${d}MB.`), !1) : h.length > 0 && !h.some(
    (P) => P === "*" || p.type.includes(P) || p.name.endsWith(P)
  ) ? (alert(`File type not allowed: ${p.type}`), !1) : !0, $ = async (p) => {
    if (!p)
      return;
    const j = [], P = Array.from(p);
    for (const O of P) {
      if (j.length >= s) {
        alert(`Maximum ${s} files allowed`);
        break;
      }
      if (v(O))
        try {
          const M = await F(O);
          j.push(M);
        } catch (M) {
          console.error("Error processing file:", O.name, M), alert(`Error processing file: ${O.name}`);
        }
    }
    j.length > 0 && c(j), f.current && (f.current.value = "");
  }, A = () => {
    var p;
    (p = f.current) == null || p.click();
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "file-upload", children: [
    /* @__PURE__ */ t.jsx(
      "input",
      {
        ref: f,
        type: "file",
        multiple: !0,
        accept: h.length > 0 ? h.join(",") : "*",
        onChange: (p) => $(p.target.files),
        style: { display: "none" }
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: A,
        className: "upload-button",
        title: "Attach files",
        children: /* @__PURE__ */ t.jsx(Ht, { size: 18 })
      }
    )
  ] });
}, ct = ({
  files: c,
  onRemoveFile: s
}) => {
  if (c.length === 0)
    return null;
  const d = (o) => {
    if (o === 0)
      return "0 B";
    const g = 1024, R = ["B", "KB", "MB", "GB"], w = Math.floor(Math.log(o) / Math.log(g));
    return parseFloat((o / Math.pow(g, w)).toFixed(1)) + " " + R[w];
  }, h = (o) => {
    switch (o) {
      case "image":
        return /* @__PURE__ */ t.jsx(Ut, { size: 16 });
      case "video":
        return /* @__PURE__ */ t.jsx(Jt, { size: 16 });
      case "audio":
        return /* @__PURE__ */ t.jsx(Zt, { size: 16 });
      default:
        return /* @__PURE__ */ t.jsx(mt, { size: 16 });
    }
  }, f = (o) => {
    switch (o.type) {
      case "image":
        return /* @__PURE__ */ t.jsx(
          "img",
          {
            src: o.url,
            alt: o.name,
            className: "media-preview-image"
          }
        );
      case "video":
        return /* @__PURE__ */ t.jsx(
          "video",
          {
            src: o.url,
            className: "media-preview-video",
            controls: !0,
            preload: "metadata"
          }
        );
      case "audio":
        return /* @__PURE__ */ t.jsx(
          "audio",
          {
            src: o.url,
            className: "media-preview-audio",
            controls: !0,
            preload: "metadata"
          }
        );
      default:
        return /* @__PURE__ */ t.jsxs("div", { className: "media-preview-document", children: [
          h(o.type),
          /* @__PURE__ */ t.jsx("span", { className: "document-name", children: o.name })
        ] });
    }
  };
  return /* @__PURE__ */ t.jsx("div", { className: "media-preview", children: /* @__PURE__ */ t.jsx("div", { className: "media-preview-list", children: c.map((o) => /* @__PURE__ */ t.jsxs("div", { className: "media-preview-item", children: [
    /* @__PURE__ */ t.jsx("div", { className: "media-preview-content", children: f(o) }),
    /* @__PURE__ */ t.jsxs("div", { className: "media-preview-info", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "media-preview-details", children: [
        /* @__PURE__ */ t.jsx("span", { className: "file-name", title: o.name, children: o.name.length > 20 ? `${o.name.substring(0, 20)}...` : o.name }),
        /* @__PURE__ */ t.jsx("span", { className: "file-size", children: d(o.size) })
      ] }),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: () => s(o.id),
          className: "remove-file-button",
          title: "Remove file",
          children: /* @__PURE__ */ t.jsx(Ne, { size: 14 })
        }
      )
    ] })
  ] }, o.id)) }) });
}, tr = ({
  isOpen: c,
  onClick: s,
  position: d,
  primaryColor: h,
  popupMessage: f = "How can I help you?"
}) => {
  const [o, g] = B(!1);
  De(() => {
    const v = sessionStorage.getItem("n8n-chat-popup-shown");
    if (!c && !v) {
      const $ = setTimeout(() => {
        g(!0);
      }, 5e3);
      return () => clearTimeout($);
    } else
      g(!1);
  }, [c]);
  const R = () => {
    g(!1), s();
  }, w = () => {
    g(!1), sessionStorage.setItem("n8n-chat-popup-shown", "true"), s();
  }, F = (v) => {
    v.stopPropagation(), g(!1), sessionStorage.setItem("n8n-chat-popup-shown", "true");
  };
  return /* @__PURE__ */ t.jsxs("div", { className: `chat-toggle-container chat-toggle-button--${d}`, children: [
    o && !c && /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: `chat-popup-message chat-popup-message--${d}`,
        onClick: w,
        children: [
          /* @__PURE__ */ t.jsx("div", { className: "chat-popup-content", children: f }),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              className: "chat-popup-close",
              onClick: F,
              children: "×"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: R,
        className: "chat-toggle-button",
        style: {
          backgroundColor: h,
          "--chat-primary": h
        },
        "aria-label": c ? "Close chat" : "Open chat",
        children: c ? /* @__PURE__ */ t.jsx(Ne, { size: 24, className: "toggle-icon" }) : /* @__PURE__ */ t.jsx(Bt, { size: 24, className: "toggle-icon" })
      }
    )
  ] });
};
function lt() {
  const c = window.innerWidth, s = window.innerHeight, d = navigator.userAgent.toLowerCase(), h = "ontouchstart" in window || navigator.maxTouchPoints > 0, f = c < 768, o = h || f, g = d.includes("arc") || d.includes("company.thebrowser.browser") || window.ArcBrowser !== void 0, R = /safari/.test(d) && !/chrome/.test(d) && !g, w = /chrome/.test(d) && !g, F = !!window.visualViewport;
  return {
    isMobile: o,
    isDesktop: !o,
    screenWidth: c,
    screenHeight: s,
    isArc: g,
    isSafari: R,
    isChrome: w,
    supportsVisualViewport: F
  };
}
function rr() {
  const [c, s] = B(() => typeof window > "u" ? {
    isMobile: !1,
    isDesktop: !0,
    screenWidth: 1024,
    screenHeight: 768,
    isArc: !1,
    isSafari: !1,
    isChrome: !1,
    supportsVisualViewport: !1
  } : lt());
  return De(() => {
    const d = () => {
      s(lt());
    };
    return window.addEventListener("resize", d), window.addEventListener("orientationchange", d), () => {
      window.removeEventListener("resize", d), window.removeEventListener("orientationchange", d);
    };
  }, []), c;
}
const nr = ({
  config: c,
  onMessage: s,
  onError: d,
  onClose: h
}) => {
  const [f, o] = B([]), [g, R] = B(""), [w, F] = B(!1), [v, $] = B(!1), [A, p] = B(c.initialState !== "closed"), [j, P] = B([]), [O] = B(() => {
    let n = localStorage.getItem("n8n_session_id");
    return n || (n = "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9), localStorage.setItem("n8n_session_id", n)), n;
  }), [M, T] = B(!1), [D, U] = B(!1), [I, G] = B(null), [re, Z] = B(0), [Q, ae] = B(null), le = rr(), de = ve(null), z = ve(null), q = ve(null), X = ve(null), ue = ve(null), i = { ...{
    title: "Chat",
    subtitle: "How can I help you?",
    placeholder: "Type your message...",
    theme: "light",
    colors: {
      primary: "#007bff",
      background: "#ffffff",
      userBubble: "#007bff",
      botBubble: "#f1f3f4",
      text: "#333333"
    },
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
    showTypingIndicator: !0,
    showTimestamps: !1,
    position: "bottom-right",
    width: 350,
    height: 500,
    zIndex: 1e3,
    initialState: "open",
    showToggleButton: !1,
    popupMessage: "How can I help you?",
    enableFileUpload: !1,
    enableCamera: !1,
    enableAudio: !1,
    maxFileSize: 10,
    maxFiles: 5,
    allowedFileTypes: []
  }, ...c }, Fe = () => {
    var n;
    (n = de.current) == null || n.scrollIntoView();
  };
  De(() => {
    Fe();
  }, [f]), De(() => {
    if (A) {
      const n = setTimeout(() => {
        z.current && z.current.focus();
      }, 100);
      return () => clearTimeout(n);
    }
  }, [A]);
  const K = () => `${Date.now()}-${Math.random()}`, be = async (n, m) => {
    try {
      if (m) {
        const u = new FormData();
        u.append("sessionId", O), u.append("chatInput", n), u.append("data", m.file);
        const x = await fetch(c.n8nWebhookUrl, {
          method: "POST",
          body: u
        });
        if (!x.ok)
          throw new Error(`HTTP error! status: ${x.status}`);
        const C = await x.json();
        return C.output || C.response || C.message || C.text || "Response received";
      } else {
        const u = {
          sessionId: O,
          chatInput: n
        }, x = await fetch(c.n8nWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(u)
        });
        if (!x.ok)
          throw new Error(`HTTP error! status: ${x.status}`);
        const C = await x.json();
        return C.output || C.response || C.message || C.text || "Response received";
      }
    } catch (u) {
      throw console.error("Error sending to n8n:", u), u;
    }
  }, pe = Me(async () => {
    if (!g.trim() && j.length === 0 || v)
      return;
    sessionStorage.setItem("n8n-chat-popup-shown", "true");
    const n = g.trim() || "", m = [...j];
    R(""), P([]), $(!0), c.showTypingIndicator && F(!0);
    try {
      for (let u = 0; u < m.length; u++) {
        const x = m[u], E = u === m.length - 1 && n ? n : "", ee = {
          id: K(),
          type: "user",
          content: E,
          timestamp: /* @__PURE__ */ new Date(),
          files: [x]
        };
        o((V) => [...V, ee]), s == null || s(ee);
        const Re = await be(E, x), te = {
          id: K(),
          type: "bot",
          content: Re,
          timestamp: /* @__PURE__ */ new Date()
        };
        o((V) => [...V, te]), s == null || s(te);
      }
      if (n && m.length === 0) {
        const u = {
          id: K(),
          type: "user",
          content: n,
          timestamp: /* @__PURE__ */ new Date()
        };
        o((E) => [...E, u]), s == null || s(u);
        const x = await be(n), C = {
          id: K(),
          type: "bot",
          content: x,
          timestamp: /* @__PURE__ */ new Date()
        };
        o((E) => [...E, C]), s == null || s(C);
      }
    } catch (u) {
      const x = {
        id: K(),
        type: "bot",
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: /* @__PURE__ */ new Date()
      };
      o((C) => [...C, x]), d == null || d(u);
    } finally {
      $(!1), F(!1), m.forEach((u) => URL.revokeObjectURL(u.url));
    }
  }, [g, j, v, c, s, d]), ye = (n) => {
    n.key === "Enter" && !n.shiftKey && (n.preventDefault(), pe());
  }, xe = Me((n) => {
    P((m) => [...m, ...n].slice(0, i.maxFiles));
  }, [i.maxFiles]), Pe = Me((n) => {
    P((m) => {
      const u = m.find((x) => x.id === n);
      return u && URL.revokeObjectURL(u.url), m.filter((x) => x.id !== n);
    });
  }, []), we = async () => {
    if (!X.current || !ue.current)
      return;
    const n = X.current, m = ue.current, u = m.getContext("2d");
    u && (m.width = n.videoWidth, m.height = n.videoHeight, u.drawImage(n, 0, 0), m.toBlob(async (x) => {
      if (x) {
        const C = new File([x], `photo-${Date.now()}.jpg`, { type: "image/jpeg" });
        try {
          const E = await _e(C);
          xe([E]);
        } catch (E) {
          console.error("Error processing captured photo:", E), alert("Error processing captured photo");
        }
      }
    }, "image/jpeg", 0.8), me());
  }, me = () => {
    var n;
    (n = X.current) != null && n.srcObject && (X.current.srcObject.getTracks().forEach((u) => u.stop()), X.current.srcObject = null), T(!1);
  }, ne = async () => {
    if (console.log("🎤 Starting audio recording..."), !MediaRecorder || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error("❌ MediaRecorder or getUserMedia not supported"), alert("Audio recording is not supported in this browser.");
      return;
    }
    if (le.isArc) {
      console.log("🌐 Arc browser detected - using enhanced audio recording...");
      try {
        if (navigator.permissions && (await navigator.permissions.query({ name: "microphone" })).state === "denied") {
          alert(`Microphone access is blocked in Arc. Please:
1. Click the shield icon in the address bar
2. Allow microphone access
3. Refresh the page`);
          return;
        }
      } catch {
        console.log("🔧 Arc: Could not check microphone permissions, continuing...");
      }
    }
    try {
      console.log("🔍 Requesting microphone permission...");
      const n = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: !0,
          noiseSuppression: !0,
          sampleRate: 44100
        }
      });
      console.log("✅ Microphone access granted");
      let m = {};
      le.isArc ? MediaRecorder.isTypeSupported("audio/webm;codecs=opus") ? m.mimeType = "audio/webm;codecs=opus" : MediaRecorder.isTypeSupported("audio/mp4") && (m.mimeType = "audio/mp4") : MediaRecorder.isTypeSupported("audio/webm") && (m.mimeType = "audio/webm");
      const u = new MediaRecorder(n, m), x = [];
      u.ondataavailable = (E) => {
        console.log("📊 Audio data available:", E.data.size, "bytes"), E.data.size > 0 && x.push(E.data);
      }, u.onstop = async () => {
        console.log("🛑 Recording stopped, creating file...");
        const E = u.mimeType || "audio/wav", ee = new Blob(x, { type: E }), Re = E.includes("webm") ? "webm" : "wav", te = new File([ee], `recording-${Date.now()}.${Re}`, { type: E });
        console.log("📁 Created audio file:", te.name, te.size, "bytes");
        try {
          const V = await _e(te);
          sessionStorage.setItem("n8n-chat-popup-shown", "true"), $(!0), c.showTypingIndicator && F(!0);
          const Ie = {
            id: K(),
            type: "user",
            content: "",
            files: [V],
            timestamp: /* @__PURE__ */ new Date()
          };
          o((Ee) => [...Ee, Ie]);
          const J = new FormData();
          J.append("sessionId", O), J.append("chatInput", ""), J.append("data", V.file);
          const ke = await fetch(c.n8nWebhookUrl, {
            method: "POST",
            body: J
          });
          if (!ke.ok)
            throw new Error(`HTTP error! status: ${ke.status}`);
          const ie = await ke.json(), Oe = ie.output || ie.response || ie.message || ie.text || "Response received", Te = {
            id: K(),
            type: "bot",
            content: Oe,
            timestamp: /* @__PURE__ */ new Date()
          };
          o((Ee) => [...Ee, Te]);
        } catch (V) {
          console.error("Error processing audio recording:", V), alert("Error processing audio recording");
        } finally {
          $(!1), F(!1);
        }
        n.getTracks().forEach((V) => V.stop());
      }, u.onerror = (E) => {
        console.error("❌ Recording error:", E), alert("Recording failed. Please try again.");
      }, u.start(1e3), G(u), U(!0), Z(0), console.log("🔴 Recording started");
      const C = setInterval(() => {
        Z((E) => E + 1);
      }, 1e3);
      ae(C);
    } catch (n) {
      console.error("❌ Error accessing microphone:", n);
      const m = n;
      m.name === "NotAllowedError" ? alert("Microphone permission denied. Please allow microphone access and try again.") : m.name === "NotFoundError" ? alert("No microphone found. Please connect a microphone and try again.") : alert(`Could not access microphone: ${m.message || "Unknown error"}`);
    }
  }, fe = () => {
    I && I.state === "recording" && I.stop(), U(!1), G(null), Q && (clearInterval(Q), ae(null));
  }, se = () => {
    I && I.state === "recording" && (I.onstop = null, I.stop(), I.stream && I.stream.getTracks().forEach((n) => n.stop())), U(!1), G(null), Q && (clearInterval(Q), ae(null)), Z(0);
  }, $e = (n) => {
    const m = Math.floor(n / 60), u = n % 60;
    return `${m}:${u.toString().padStart(2, "0")}`;
  }, _e = async (n) => {
    const m = () => `${Date.now()}-${Math.random()}`, u = (x) => x.type.startsWith("image/") ? "image" : x.type.startsWith("video/") ? "video" : x.type.startsWith("audio/") ? "audio" : "document";
    return {
      file: n,
      id: m(),
      type: u(n),
      url: URL.createObjectURL(n),
      name: n.name,
      size: n.size
    };
  }, je = Me(() => {
    p((n) => {
      const m = !n;
      return !m && h && h(), m;
    });
  }, [h]), Le = i.position !== "inline" && i.showToggleButton, oe = M && /* @__PURE__ */ t.jsx("div", { className: "camera-modal", children: /* @__PURE__ */ t.jsxs("div", { className: "camera-container", children: [
    /* @__PURE__ */ t.jsx("video", { ref: X, autoPlay: !0, playsInline: !0, className: "camera-video" }),
    /* @__PURE__ */ t.jsx("canvas", { ref: ue, style: { display: "none" } }),
    /* @__PURE__ */ t.jsxs("div", { className: "camera-controls", children: [
      /* @__PURE__ */ t.jsx("button", { onClick: we, className: "capture-button", children: /* @__PURE__ */ t.jsx(Dt, { size: 24 }) }),
      /* @__PURE__ */ t.jsx("button", { onClick: me, className: "close-camera-button", children: /* @__PURE__ */ t.jsx(Ne, { size: 20 }) })
    ] })
  ] }) });
  return Le ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    oe,
    /* @__PURE__ */ t.jsxs("div", { className: `chat-widget-container chat-widget-container--${i.position}${A ? "" : " chat-closed"}`, children: [
      /* @__PURE__ */ t.jsx(
        tr,
        {
          isOpen: A,
          onClick: je,
          position: i.position,
          primaryColor: i.colors.primary || "#007bff",
          popupMessage: i.popupMessage
        }
      ),
      A && /* @__PURE__ */ t.jsxs(
        "div",
        {
          ref: q,
          className: `chat-embed chat-embed--${i.theme} chat-embed--${i.position}${le.isMobile ? " chat-embed--mobile" : ""} chat-embed--open`,
          style: {
            "--chat-primary": i.colors.primary,
            "--chat-background": i.colors.background,
            "--chat-user-bubble": i.colors.userBubble,
            "--chat-bot-bubble": i.colors.botBubble,
            "--chat-text": i.colors.text,
            "--chat-font-family": i.fontFamily,
            "--chat-width": `${i.width}px`,
            "--chat-height": `${i.height}px`,
            zIndex: i.zIndex
          },
          children: [
            /* @__PURE__ */ t.jsxs("div", { className: "chat-embed__header", children: [
              /* @__PURE__ */ t.jsxs("div", { className: "chat-embed__header-content", children: [
                /* @__PURE__ */ t.jsx("h3", { className: "chat-embed__title", children: i.title }),
                i.subtitle && /* @__PURE__ */ t.jsx("p", { className: "chat-embed__subtitle", children: i.subtitle })
              ] }),
              i.position !== "inline" && /* @__PURE__ */ t.jsx(
                "button",
                {
                  className: "chat-embed__close-button",
                  onClick: je,
                  "aria-label": "Close chat",
                  children: /* @__PURE__ */ t.jsx(Ne, { size: 18 })
                }
              )
            ] }),
            /* @__PURE__ */ t.jsxs("div", { className: "chat-embed__messages", children: [
              f.map((n) => /* @__PURE__ */ t.jsx(
                st,
                {
                  message: n,
                  showTimestamp: i.showTimestamps
                },
                n.id
              )),
              /* @__PURE__ */ t.jsx(ot, { visible: w }),
              /* @__PURE__ */ t.jsx("div", { ref: de })
            ] }),
            /* @__PURE__ */ t.jsxs("div", { className: "chat-embed__input-area", children: [
              j.length > 0 && /* @__PURE__ */ t.jsx(
                ct,
                {
                  files: j,
                  onRemoveFile: Pe
                }
              ),
              /* @__PURE__ */ t.jsx("div", { className: `chat-embed__input-row ${D ? "chat-embed__input-row--recording" : ""}`, children: D ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                /* @__PURE__ */ t.jsx(
                  "button",
                  {
                    onClick: se,
                    className: "upload-button",
                    title: "Stop and discard recording",
                    disabled: v,
                    children: /* @__PURE__ */ t.jsx(nt, { size: 18 })
                  }
                ),
                /* @__PURE__ */ t.jsxs("div", { className: "recording-time-display", children: [
                  /* @__PURE__ */ t.jsx("div", { className: "recording-indicator" }),
                  $e(re)
                ] }),
                /* @__PURE__ */ t.jsx(
                  "button",
                  {
                    className: "chat-embed__send-button",
                    onClick: fe,
                    disabled: v,
                    title: "Stop recording and send",
                    children: /* @__PURE__ */ t.jsx(Ae, { size: 18, className: "chat-embed__send-icon" })
                  }
                )
              ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                i.enableFileUpload && /* @__PURE__ */ t.jsx(
                  it,
                  {
                    onFilesSelected: xe,
                    maxFiles: i.maxFiles,
                    maxFileSize: i.maxFileSize,
                    allowedTypes: i.allowedFileTypes
                  }
                ),
                /* @__PURE__ */ t.jsx(
                  "textarea",
                  {
                    ref: z,
                    className: "chat-embed__input",
                    value: g,
                    onChange: (n) => R(n.target.value),
                    onKeyPress: ye,
                    placeholder: i.placeholder,
                    disabled: v,
                    rows: 1,
                    style: { resize: "none" }
                  }
                ),
                g.trim() || j.length > 0 ? /* @__PURE__ */ t.jsx(
                  "button",
                  {
                    className: "chat-embed__send-button",
                    onClick: pe,
                    disabled: v || !g.trim() && j.length === 0,
                    children: v ? /* @__PURE__ */ t.jsx("div", { className: "chat-embed__loading-spinner" }) : /* @__PURE__ */ t.jsx(Ae, { size: 18, className: "chat-embed__send-icon" })
                  }
                ) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                  i.enableCamera && !1,
                  i.enableAudio && /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      onClick: ne,
                      className: "upload-button",
                      title: "Record audio",
                      disabled: v,
                      children: /* @__PURE__ */ t.jsx(at, { size: 18 })
                    }
                  )
                ] })
              ] }) })
            ] })
          ]
        }
      )
    ] })
  ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    oe,
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        ref: q,
        className: `chat-embed chat-embed--${i.theme} chat-embed--${i.position}${le.isMobile ? " chat-embed--mobile" : ""}`,
        style: {
          "--chat-primary": i.colors.primary,
          "--chat-background": i.colors.background,
          "--chat-user-bubble": i.colors.userBubble,
          "--chat-bot-bubble": i.colors.botBubble,
          "--chat-text": i.colors.text,
          "--chat-font-family": i.fontFamily,
          "--chat-width": `${i.width}px`,
          "--chat-height": `${i.height}px`,
          zIndex: i.zIndex
        },
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: "chat-embed__header", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "chat-embed__header-content", children: [
              /* @__PURE__ */ t.jsx("h3", { className: "chat-embed__title", children: i.title }),
              i.subtitle && /* @__PURE__ */ t.jsx("p", { className: "chat-embed__subtitle", children: i.subtitle })
            ] }),
            i.position !== "inline" && /* @__PURE__ */ t.jsx(
              "button",
              {
                className: "chat-embed__close-button",
                onClick: je,
                "aria-label": "Close chat",
                children: /* @__PURE__ */ t.jsx(Ne, { size: 18 })
              }
            )
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "chat-embed__messages", children: [
            f.map((n) => /* @__PURE__ */ t.jsx(
              st,
              {
                message: n,
                showTimestamp: i.showTimestamps
              },
              n.id
            )),
            /* @__PURE__ */ t.jsx(ot, { visible: w }),
            /* @__PURE__ */ t.jsx("div", { ref: de })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "chat-embed__input-area", children: [
            j.length > 0 && /* @__PURE__ */ t.jsx(
              ct,
              {
                files: j,
                onRemoveFile: Pe
              }
            ),
            /* @__PURE__ */ t.jsx("div", { className: `chat-embed__input-row ${D ? "chat-embed__input-row--recording" : ""}`, children: D ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              /* @__PURE__ */ t.jsx(
                "button",
                {
                  onClick: se,
                  className: "upload-button",
                  title: "Stop and discard recording",
                  disabled: v,
                  children: /* @__PURE__ */ t.jsx(nt, { size: 18 })
                }
              ),
              /* @__PURE__ */ t.jsxs("div", { className: "recording-time-display", children: [
                /* @__PURE__ */ t.jsx("div", { className: "recording-indicator" }),
                $e(re)
              ] }),
              /* @__PURE__ */ t.jsx(
                "button",
                {
                  className: "chat-embed__send-button",
                  onClick: fe,
                  disabled: v,
                  title: "Stop recording and send",
                  children: /* @__PURE__ */ t.jsx(Ae, { size: 18, className: "chat-embed__send-icon" })
                }
              )
            ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              i.enableFileUpload && /* @__PURE__ */ t.jsx(
                it,
                {
                  onFilesSelected: xe,
                  maxFiles: i.maxFiles,
                  maxFileSize: i.maxFileSize,
                  allowedTypes: i.allowedFileTypes
                }
              ),
              /* @__PURE__ */ t.jsx(
                "textarea",
                {
                  ref: z,
                  className: "chat-embed__input",
                  value: g,
                  onChange: (n) => R(n.target.value),
                  onKeyPress: ye,
                  placeholder: i.placeholder,
                  disabled: v,
                  rows: 1,
                  style: { resize: "none" }
                }
              ),
              g.trim() || j.length > 0 ? /* @__PURE__ */ t.jsx(
                "button",
                {
                  className: "chat-embed__send-button",
                  onClick: pe,
                  disabled: v || !g.trim() && j.length === 0,
                  children: v ? /* @__PURE__ */ t.jsx("div", { className: "chat-embed__loading-spinner" }) : /* @__PURE__ */ t.jsx(Ae, { size: 18, className: "chat-embed__send-icon" })
                }
              ) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                i.enableCamera && !1,
                i.enableAudio && /* @__PURE__ */ t.jsx(
                  "button",
                  {
                    onClick: ne,
                    className: "upload-button",
                    title: "Record audio",
                    disabled: v,
                    children: /* @__PURE__ */ t.jsx(at, { size: 18 })
                  }
                )
              ] })
            ] }) })
          ] })
        ]
      }
    )
  ] });
};
export {
  nr as ChatEmbed,
  st as MessageBubble,
  ot as TypingIndicator,
  rr as useDeviceDetection
};
