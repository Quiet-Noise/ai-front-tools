import ar, { forwardRef as nr, createElement as Pe, useRef as ie, useState as z, useEffect as be, useCallback as je } from "react";
var Fe = { exports: {} }, ge = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function Nr() {
  if (Ke)
    return ge;
  Ke = 1;
  var c = ar, u = Symbol.for("react.element"), f = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, w = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(d, b, $) {
    var x, U = {}, A = null, X = null;
    $ !== void 0 && (A = "" + $), b.key !== void 0 && (A = "" + b.key), b.ref !== void 0 && (X = b.ref);
    for (x in b)
      v.call(b, x) && !o.hasOwnProperty(x) && (U[x] = b[x]);
    if (d && d.defaultProps)
      for (x in b = d.defaultProps, b)
        U[x] === void 0 && (U[x] = b[x]);
    return { $$typeof: u, type: d, key: A, ref: X, props: U, _owner: w.current };
  }
  return ge.Fragment = f, ge.jsx = _, ge.jsxs = _, ge;
}
var ve = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Sr() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var c = ar, u = Symbol.for("react.element"), f = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), d = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), X = Symbol.for("react.offscreen"), O = Symbol.iterator, Q = "@@iterator";
    function te(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = O && e[O] || e[Q];
      return typeof t == "function" ? t : null;
    }
    var q = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        J("error", e, a);
      }
    }
    function J(e, t, a) {
      {
        var l = q.ReactDebugCurrentFrame, y = l.getStackAddendum();
        y !== "" && (t += "%s", a = a.concat([y]));
        var j = a.map(function(g) {
          return String(g);
        });
        j.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, j);
      }
    }
    var Z = !1, ce = !1, s = !1, fe = !1, ae = !1, le;
    le = Symbol.for("react.module.reference");
    function ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === o || ae || e === w || e === $ || e === x || fe || e === X || Z || ce || s || typeof e == "object" && e !== null && (e.$$typeof === A || e.$$typeof === U || e.$$typeof === _ || e.$$typeof === d || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function ee(e, t, a) {
      var l = e.displayName;
      if (l)
        return l;
      var y = t.displayName || t.name || "";
      return y !== "" ? a + "(" + y + ")" : a;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function M(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case f:
          return "Portal";
        case o:
          return "Profiler";
        case w:
          return "StrictMode";
        case $:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var t = e;
            return se(t) + ".Consumer";
          case _:
            var a = e;
            return se(a._context) + ".Provider";
          case b:
            return ee(e, e.render, "ForwardRef");
          case U:
            var l = e.displayName || null;
            return l !== null ? l : M(e.type) || "Memo";
          case A: {
            var y = e, j = y._payload, g = y._init;
            try {
              return M(g(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, re = 0, m, S, k, C, P, n, i;
    function p() {
    }
    p.__reactDisabledLog = !0;
    function E() {
      {
        if (re === 0) {
          m = console.log, S = console.info, k = console.warn, C = console.error, P = console.group, n = console.groupCollapsed, i = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: p,
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
        re++;
      }
    }
    function H() {
      {
        if (re--, re === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, e, {
              value: m
            }),
            info: Y({}, e, {
              value: S
            }),
            warn: Y({}, e, {
              value: k
            }),
            error: Y({}, e, {
              value: C
            }),
            group: Y({}, e, {
              value: P
            }),
            groupCollapsed: Y({}, e, {
              value: n
            }),
            groupEnd: Y({}, e, {
              value: i
            })
          });
        }
        re < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var R = q.ReactCurrentDispatcher, L;
    function I(e, t, a) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (y) {
            var l = y.stack.trim().match(/\n( *(at )?)/);
            L = l && l[1] || "";
          }
        return `
` + L + e;
      }
    }
    var B = !1, W;
    {
      var we = typeof WeakMap == "function" ? WeakMap : Map;
      W = new we();
    }
    function ue(e, t) {
      if (!e || B)
        return "";
      {
        var a = W.get(e);
        if (a !== void 0)
          return a;
      }
      var l;
      B = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = R.current, R.current = null, E();
      try {
        if (t) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (V) {
              l = V;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (V) {
              l = V;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            l = V;
          }
          e();
        }
      } catch (V) {
        if (V && l && typeof V.stack == "string") {
          for (var h = V.stack.split(`
`), D = l.stack.split(`
`), N = h.length - 1, F = D.length - 1; N >= 1 && F >= 0 && h[N] !== D[F]; )
            F--;
          for (; N >= 1 && F >= 0; N--, F--)
            if (h[N] !== D[F]) {
              if (N !== 1 || F !== 1)
                do
                  if (N--, F--, F < 0 || h[N] !== D[F]) {
                    var K = `
` + h[N].replace(" at new ", " at ");
                    return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, K), K;
                  }
                while (N >= 1 && F >= 0);
              break;
            }
        }
      } finally {
        B = !1, R.current = j, H(), Error.prepareStackTrace = y;
      }
      var me = e ? e.displayName || e.name : "", oe = me ? I(me) : "";
      return typeof e == "function" && W.set(e, oe), oe;
    }
    function Ae(e, t, a) {
      return ue(e, !1);
    }
    function Re(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function xe(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ue(e, Re(e));
      if (typeof e == "string")
        return I(e);
      switch (e) {
        case $:
          return I("Suspense");
        case x:
          return I("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return Ae(e.render);
          case U:
            return xe(e.type, t, a);
          case A: {
            var l = e, y = l._payload, j = l._init;
            try {
              return xe(j(y), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    var pe = Object.prototype.hasOwnProperty, $e = {}, Me = q.ReactDebugCurrentFrame;
    function _e(e) {
      if (e) {
        var t = e._owner, a = xe(e.type, e._source, t ? t.type : null);
        Me.setExtraStackFrame(a);
      } else
        Me.setExtraStackFrame(null);
    }
    function ir(e, t, a, l, y) {
      {
        var j = Function.call.bind(pe);
        for (var g in e)
          if (j(e, g)) {
            var h = void 0;
            try {
              if (typeof e[g] != "function") {
                var D = Error((l || "React class") + ": " + a + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw D.name = "Invariant Violation", D;
              }
              h = e[g](t, g, l, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              h = N;
            }
            h && !(h instanceof Error) && (_e(y), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", a, g, typeof h), _e(null)), h instanceof Error && !(h.message in $e) && ($e[h.message] = !0, _e(y), T("Failed %s type: %s", a, h.message), _e(null));
          }
      }
    }
    var cr = Array.isArray;
    function Ce(e) {
      return cr(e);
    }
    function lr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function ur(e) {
      try {
        return Ie(e), !1;
      } catch {
        return !0;
      }
    }
    function Ie(e) {
      return "" + e;
    }
    function De(e) {
      if (ur(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", lr(e)), Ie(e);
    }
    var he = q.ReactCurrentOwner, dr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ze, Ue, Te;
    Te = {};
    function mr(e) {
      if (pe.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function fr(e) {
      if (pe.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function pr(e, t) {
      if (typeof e.ref == "string" && he.current && t && he.current.stateNode !== t) {
        var a = M(he.current.type);
        Te[a] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(he.current.type), e.ref), Te[a] = !0);
      }
    }
    function hr(e, t) {
      {
        var a = function() {
          ze || (ze = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function gr(e, t) {
      {
        var a = function() {
          Ue || (Ue = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var vr = function(e, t, a, l, y, j, g) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: a,
        props: g,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function br(e, t, a, l, y) {
      {
        var j, g = {}, h = null, D = null;
        a !== void 0 && (De(a), h = "" + a), fr(t) && (De(t.key), h = "" + t.key), mr(t) && (D = t.ref, pr(t, y));
        for (j in t)
          pe.call(t, j) && !dr.hasOwnProperty(j) && (g[j] = t[j]);
        if (e && e.defaultProps) {
          var N = e.defaultProps;
          for (j in N)
            g[j] === void 0 && (g[j] = N[j]);
        }
        if (h || D) {
          var F = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && hr(g, F), D && gr(g, F);
        }
        return vr(e, h, D, y, l, he.current, g);
      }
    }
    var ke = q.ReactCurrentOwner, Le = q.ReactDebugCurrentFrame;
    function de(e) {
      if (e) {
        var t = e._owner, a = xe(e.type, e._source, t ? t.type : null);
        Le.setExtraStackFrame(a);
      } else
        Le.setExtraStackFrame(null);
    }
    var Ee;
    Ee = !1;
    function Ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function Be() {
      {
        if (ke.current) {
          var e = M(ke.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function yr(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + t + ":" + a + ".";
        }
        return "";
      }
    }
    var We = {};
    function wr(e) {
      {
        var t = Be();
        if (!t) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (t = `

Check the top-level render call using <` + a + ">.");
        }
        return t;
      }
    }
    function Ve(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = wr(t);
        if (We[a])
          return;
        We[a] = !0;
        var l = "";
        e && e._owner && e._owner !== ke.current && (l = " It was passed a child from " + M(e._owner.type) + "."), de(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, l), de(null);
      }
    }
    function Ye(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Ce(e))
          for (var a = 0; a < e.length; a++) {
            var l = e[a];
            Ne(l) && Ve(l, t);
          }
        else if (Ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var y = te(e);
          if (typeof y == "function" && y !== e.entries)
            for (var j = y.call(e), g; !(g = j.next()).done; )
              Ne(g.value) && Ve(g.value, t);
        }
      }
    }
    function xr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var a;
        if (typeof t == "function")
          a = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === U))
          a = t.propTypes;
        else
          return;
        if (a) {
          var l = M(t);
          ir(a, e.props, "prop", l, e);
        } else if (t.PropTypes !== void 0 && !Ee) {
          Ee = !0;
          var y = M(t);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(e) {
      {
        for (var t = Object.keys(e.props), a = 0; a < t.length; a++) {
          var l = t[a];
          if (l !== "children" && l !== "key") {
            de(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), de(null);
            break;
          }
        }
        e.ref !== null && (de(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), de(null));
      }
    }
    var He = {};
    function qe(e, t, a, l, y, j) {
      {
        var g = ne(e);
        if (!g) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var D = yr(y);
          D ? h += D : h += Be();
          var N;
          e === null ? N = "null" : Ce(e) ? N = "array" : e !== void 0 && e.$$typeof === u ? (N = "<" + (M(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : N = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, h);
        }
        var F = br(e, t, a, y, j);
        if (F == null)
          return F;
        if (g) {
          var K = t.children;
          if (K !== void 0)
            if (l)
              if (Ce(K)) {
                for (var me = 0; me < K.length; me++)
                  Ye(K[me], e);
                Object.freeze && Object.freeze(K);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(K, e);
        }
        if (pe.call(t, "key")) {
          var oe = M(e), V = Object.keys(t).filter(function(Er) {
            return Er !== "key";
          }), Se = V.length > 0 ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!He[oe + Se]) {
            var kr = V.length > 0 ? "{" + V.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Se, oe, kr, oe), He[oe + Se] = !0;
          }
        }
        return e === v ? _r(F) : xr(F), F;
      }
    }
    function jr(e, t, a) {
      return qe(e, t, a, !0);
    }
    function Rr(e, t, a) {
      return qe(e, t, a, !1);
    }
    var Cr = Rr, Tr = jr;
    ve.Fragment = v, ve.jsx = Cr, ve.jsxs = Tr;
  }()), ve;
}
process.env.NODE_ENV === "production" ? Fe.exports = Nr() : Fe.exports = Sr();
var r = Fe.exports;
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Fr = (c) => c.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (u, f, v) => v ? v.toUpperCase() : f.toLowerCase()
), Ge = (c) => {
  const u = Fr(c);
  return u.charAt(0).toUpperCase() + u.slice(1);
}, sr = (...c) => c.filter((u, f, v) => !!u && u.trim() !== "" && v.indexOf(u) === f).join(" ").trim(), Or = (c) => {
  for (const u in c)
    if (u.startsWith("aria-") || u === "role" || u === "title")
      return !0;
};
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ar = {
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
const $r = nr(
  ({
    color: c = "currentColor",
    size: u = 24,
    strokeWidth: f = 2,
    absoluteStrokeWidth: v,
    className: w = "",
    children: o,
    iconNode: _,
    ...d
  }, b) => Pe(
    "svg",
    {
      ref: b,
      ...Ar,
      width: u,
      height: u,
      stroke: c,
      strokeWidth: v ? Number(f) * 24 / Number(u) : f,
      className: sr("lucide", w),
      ...!o && !Or(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ..._.map(([$, x]) => Pe($, x)),
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
const G = (c, u) => {
  const f = nr(
    ({ className: v, ...w }, o) => Pe($r, {
      ref: o,
      iconNode: u,
      className: sr(
        `lucide-${Pr(Ge(c))}`,
        `lucide-${c}`,
        v
      ),
      ...w
    })
  );
  return f.displayName = Ge(c), f;
};
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mr = [
  [
    "path",
    {
      d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
      key: "18u6gg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
], Xe = G("camera", Mr);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
], or = G("file", Ir);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dr = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], zr = G("image", Dr);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], Lr = G("message-circle", Ur);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], Wr = G("mic", Br);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
], Yr = G("paperclip", Vr);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hr = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], qr = G("plus", Hr);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], Ze = G("send", Kr);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], Gr = G("video", Jr);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], Zr = G("volume-2", Xr);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ye = G("x", Qr), Qe = ({ message: c, showTimestamp: u = !1 }) => {
  const f = c.type === "user", v = (w, o) => {
    switch (w.type) {
      case "image":
        return /* @__PURE__ */ r.jsx(
          "img",
          {
            src: w.url,
            alt: w.name,
            className: "message-media-image",
            style: { maxWidth: "200px", maxHeight: "150px", borderRadius: "8px", marginTop: "8px" }
          },
          o
        );
      case "video":
        return /* @__PURE__ */ r.jsx(
          "video",
          {
            src: w.url,
            controls: !0,
            className: "message-media-video",
            style: { maxWidth: "200px", maxHeight: "150px", borderRadius: "8px", marginTop: "8px" }
          },
          o
        );
      case "audio":
        return /* @__PURE__ */ r.jsx("div", { className: "message-media-audio", style: { marginTop: "8px" }, children: /* @__PURE__ */ r.jsx("audio", { src: w.url, controls: !0, style: { width: "200px" } }) }, o);
      default:
        return /* @__PURE__ */ r.jsxs("div", { className: "message-media-document", style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px",
          backgroundColor: "rgba(0,0,0,0.1)",
          borderRadius: "8px",
          marginTop: "8px",
          maxWidth: "200px"
        }, children: [
          /* @__PURE__ */ r.jsx(or, { size: 16 }),
          /* @__PURE__ */ r.jsx("span", { style: { fontSize: "14px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: w.name })
        ] }, o);
    }
  };
  return /* @__PURE__ */ r.jsxs("div", { className: `message-bubble ${f ? "user" : "bot"}`, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "message-content", children: [
      c.content.trim() && /* @__PURE__ */ r.jsx("p", { children: c.content }),
      c.files && c.files.map((w, o) => v(w, o))
    ] }),
    u && /* @__PURE__ */ r.jsx("div", { className: "message-timestamp", children: c.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) })
  ] });
}, er = ({ visible: c }) => c ? /* @__PURE__ */ r.jsx("div", { className: "typing-indicator", children: /* @__PURE__ */ r.jsxs("div", { className: "typing-indicator__content", children: [
  /* @__PURE__ */ r.jsx("span", { className: "typing-indicator__dot" }),
  /* @__PURE__ */ r.jsx("span", { className: "typing-indicator__dot" }),
  /* @__PURE__ */ r.jsx("span", { className: "typing-indicator__dot" })
] }) }) : null;
function Oe() {
  const c = window.innerWidth, u = window.innerHeight, f = navigator.userAgent.toLowerCase(), v = "ontouchstart" in window || navigator.maxTouchPoints > 0, w = c < 768, o = v || w, _ = f.includes("arc") || f.includes("company.thebrowser.browser") || window.ArcBrowser !== void 0, d = /safari/.test(f) && !/chrome/.test(f) && !_, b = /chrome/.test(f) && !_, $ = !!window.visualViewport;
  return {
    isMobile: o,
    isDesktop: !o,
    screenWidth: c,
    screenHeight: u,
    isArc: _,
    isSafari: d,
    isChrome: b,
    supportsVisualViewport: $
  };
}
const rr = ({
  onFilesSelected: c,
  maxFiles: u,
  maxFileSize: f,
  allowedTypes: v,
  enableCamera: w,
  enableAudio: o
}) => {
  const _ = ie(null), d = ie(null), b = ie(null), [$, x] = z(!1), [U, A] = z(!1), [X, O] = z(null), [Q, te] = z(0), [q, T] = z(null), [J, Z] = z(!1), ce = ie(null), s = Oe();
  be(() => {
    const n = (i) => {
      ce.current && !ce.current.contains(i.target) && Z(!1);
    };
    return J && document.addEventListener("mousedown", n), () => {
      document.removeEventListener("mousedown", n);
    };
  }, [J]);
  const fe = () => `${Date.now()}-${Math.random()}`, ae = (n) => n.type.startsWith("image/") ? "image" : n.type.startsWith("video/") ? "video" : n.type.startsWith("audio/") ? "audio" : "document", le = async (n, i = 1) => new Promise((p) => {
    const E = document.createElement("canvas"), H = E.getContext("2d"), R = new Image();
    R.onload = () => {
      let { width: L, height: I } = R;
      const B = 1920;
      L > I && L > B ? (I = I * B / L, L = B) : I > B && (L = L * B / I, I = B), E.width = L, E.height = I, H == null || H.drawImage(R, 0, 0, L, I);
      let W = 0.8;
      const we = () => {
        E.toBlob((ue) => {
          if (ue)
            if (ue.size / 1048576 > i && W > 0.1)
              W -= 0.1, we();
            else {
              const Re = new File([ue], n.name, {
                type: "image/jpeg",
                lastModified: Date.now()
              });
              p(Re);
            }
          else
            p(n);
        }, "image/jpeg", W);
      };
      we();
    }, R.onerror = () => p(n), R.src = URL.createObjectURL(n);
  }), ne = async (n) => {
    const p = n.size / 1048576;
    if (p <= 1)
      return n;
    if (n.type.startsWith("image/"))
      try {
        return await le(n, 1);
      } catch (E) {
        return console.warn("Image compression failed, using original:", E), n;
      }
    return p > 1 && console.warn(`File ${n.name} is ${p.toFixed(1)}MB, which may be too large`), n;
  }, ee = async (n) => {
    const i = await ne(n);
    return {
      file: i,
      id: fe(),
      type: ae(i),
      url: URL.createObjectURL(i),
      name: n.name,
      // Keep original name
      size: i.size
    };
  }, se = (n) => n.size > f * 1024 * 1024 ? (alert(`File ${n.name} is too large. Maximum size is ${f}MB.`), !1) : v.length > 0 && !v.some(
    (p) => p === "*" || n.type.includes(p) || n.name.endsWith(p)
  ) ? (alert(`File type not allowed: ${n.type}`), !1) : !0, M = async (n) => {
    if (!n)
      return;
    const i = [], p = Array.from(n);
    for (const E of p) {
      if (i.length >= u) {
        alert(`Maximum ${u} files allowed`);
        break;
      }
      if (se(E))
        try {
          const H = await ee(E);
          i.push(H);
        } catch (H) {
          console.error("Error processing file:", E.name, H), alert(`Error processing file: ${E.name}`);
        }
    }
    i.length > 0 && c(i);
  }, Y = () => {
    var n;
    (n = _.current) == null || n.click();
  }, re = async () => {
    if (console.log("📷 Opening camera..."), !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error("❌ getUserMedia not supported"), alert("Camera is not supported in this browser.");
      return;
    }
    if (s.isArc) {
      console.log("🌐 Arc browser detected - applying compatibility fixes...");
      try {
        const n = { video: { facingMode: "user" } };
        if (console.log("🔧 Arc: Using enhanced video constraints"), navigator.permissions && (await navigator.permissions.query({ name: "camera" })).state === "denied") {
          alert(`Camera access is blocked in Arc. Please:
1. Click the shield icon in the address bar
2. Allow camera access
3. Refresh the page`);
          return;
        }
      } catch {
        console.log("🔧 Arc: Could not check permissions, continuing...");
      }
    }
    if (location.protocol !== "https:" && location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
      console.error("❌ Camera requires HTTPS"), alert("Camera access requires HTTPS. Please use a secure connection.");
      return;
    }
    try {
      if (console.log("🔍 Checking camera permissions..."), navigator.permissions)
        try {
          const i = await navigator.permissions.query({ name: "camera" });
          if (console.log("📋 Camera permission state:", i.state), i.state === "denied") {
            alert("Camera permission is denied. Please enable camera access in your browser settings and reload the page.");
            return;
          }
        } catch (i) {
          console.log("⚠️ Could not check permissions:", i);
        }
      console.log("🎥 Requesting camera access...");
      const n = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user"
        }
      });
      console.log("✅ Camera access granted, stream:", n), console.log("📊 Video tracks:", n.getVideoTracks().length), d.current ? (console.log("📹 Setting up video element..."), d.current.srcObject = n, d.current.autoplay = !0, d.current.playsInline = !0, d.current.muted = !0, d.current.onloadedmetadata = () => {
        var i, p;
        console.log("📹 Video metadata loaded, dimensions:", (i = d.current) == null ? void 0 : i.videoWidth, "x", (p = d.current) == null ? void 0 : p.videoHeight), d.current && d.current.play().then(() => {
          console.log("▶️ Video playing successfully"), x(!0);
        }).catch((E) => {
          console.error("❌ Error playing video:", E), alert("Could not start camera preview. Please try again.");
        });
      }, d.current.oncanplay = () => {
        console.log("📹 Video can play");
      }, d.current.onerror = (i) => {
        console.error("❌ Video element error:", i), alert("Video playback error.");
      }) : (console.error("❌ Video ref not available"), alert("Video element not ready. Please try again."));
    } catch (n) {
      console.error("❌ Error accessing camera:", n);
      const i = n;
      if (i.name === "NotAllowedError")
        alert(`Camera permission denied. Please:
1. Click "Allow" when prompted
2. Check your browser settings
3. Reload the page and try again`);
      else if (i.name === "NotFoundError")
        alert(`No camera found. Please:
1. Connect a camera
2. Check camera connections
3. Try again`);
      else if (i.name === "NotReadableError")
        alert(`Camera is already in use by another application. Please:
1. Close other camera apps
2. Try again`);
      else if (i.name === "OverconstrainedError") {
        alert("Camera constraints not supported. Trying with basic settings...");
        try {
          const p = await navigator.mediaDevices.getUserMedia({ video: !0 });
          d.current && (d.current.srcObject = p, x(!0));
        } catch {
          alert("Could not access camera with any settings.");
        }
      } else
        alert(`Camera error: ${i.message || "Unknown error"}

Please:
1. Allow camera permissions
2. Use HTTPS
3. Try a different browser`);
    }
  }, m = async () => {
    if (!d.current || !b.current)
      return;
    const n = d.current, i = b.current, p = i.getContext("2d");
    p && (i.width = n.videoWidth, i.height = n.videoHeight, p.drawImage(n, 0, 0), i.toBlob(async (E) => {
      if (E) {
        const H = new File([E], `photo-${Date.now()}.jpg`, { type: "image/jpeg" });
        try {
          const R = await ee(H);
          c([R]);
        } catch (R) {
          console.error("Error processing captured photo:", R), alert("Error processing captured photo");
        }
      }
    }, "image/jpeg", 0.8), S());
  }, S = () => {
    var n;
    (n = d.current) != null && n.srcObject && (d.current.srcObject.getTracks().forEach((p) => p.stop()), d.current.srcObject = null), x(!1);
  }, k = async () => {
    if (console.log("🎤 Starting audio recording..."), !MediaRecorder || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error("❌ MediaRecorder or getUserMedia not supported"), alert("Audio recording is not supported in this browser.");
      return;
    }
    if (s.isArc) {
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
      let i = {};
      s.isArc ? MediaRecorder.isTypeSupported("audio/webm;codecs=opus") ? i.mimeType = "audio/webm;codecs=opus" : MediaRecorder.isTypeSupported("audio/mp4") && (i.mimeType = "audio/mp4") : MediaRecorder.isTypeSupported("audio/webm") && (i.mimeType = "audio/webm");
      const p = new MediaRecorder(n, i), E = [];
      p.ondataavailable = (R) => {
        console.log("📊 Audio data available:", R.data.size, "bytes"), R.data.size > 0 && E.push(R.data);
      }, p.onstop = async () => {
        console.log("🛑 Recording stopped, creating file...");
        const R = p.mimeType || "audio/wav", L = new Blob(E, { type: R }), I = R.includes("webm") ? "webm" : "wav", B = new File([L], `recording-${Date.now()}.${I}`, { type: R });
        console.log("📁 Created audio file:", B.name, B.size, "bytes");
        try {
          const W = await ee(B);
          c([W]);
        } catch (W) {
          console.error("Error processing audio recording:", W), alert("Error processing audio recording");
        }
        n.getTracks().forEach((W) => W.stop());
      }, p.onerror = (R) => {
        console.error("❌ Recording error:", R), alert("Recording failed. Please try again.");
      }, p.start(1e3), O(p), A(!0), te(0), console.log("🔴 Recording started");
      const H = setInterval(() => {
        te((R) => R + 1);
      }, 1e3);
      T(H);
    } catch (n) {
      console.error("❌ Error accessing microphone:", n);
      const i = n;
      i.name === "NotAllowedError" ? alert("Microphone permission denied. Please allow microphone access and try again.") : i.name === "NotFoundError" ? alert("No microphone found. Please connect a microphone and try again.") : alert(`Could not access microphone: ${i.message || "Unknown error"}`);
    }
  }, C = () => {
    X && X.state === "recording" && X.stop(), A(!1), O(null), q && (clearInterval(q), T(null));
  }, P = (n) => {
    const i = Math.floor(n / 60), p = n % 60;
    return `${i}:${p.toString().padStart(2, "0")}`;
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "file-upload", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        ref: _,
        type: "file",
        multiple: !0,
        accept: v.length > 0 ? v.join(",") : "*",
        onChange: (n) => M(n.target.files),
        style: { display: "none" }
      }
    ),
    $ && /* @__PURE__ */ r.jsx("div", { className: "camera-modal", children: /* @__PURE__ */ r.jsxs("div", { className: "camera-container", children: [
      /* @__PURE__ */ r.jsx("video", { ref: d, autoPlay: !0, playsInline: !0, className: "camera-video" }),
      /* @__PURE__ */ r.jsx("canvas", { ref: b, style: { display: "none" } }),
      /* @__PURE__ */ r.jsxs("div", { className: "camera-controls", children: [
        /* @__PURE__ */ r.jsx("button", { onClick: m, className: "capture-button", children: /* @__PURE__ */ r.jsx(Xe, { size: 24 }) }),
        /* @__PURE__ */ r.jsx("button", { onClick: S, className: "close-camera-button", children: /* @__PURE__ */ r.jsx(ye, { size: 20 }) })
      ] })
    ] }) }),
    /* @__PURE__ */ r.jsx("div", { className: "upload-menu", ref: ce, children: U ? /* @__PURE__ */ r.jsxs(
      "button",
      {
        onClick: C,
        className: "upload-button recording",
        title: `Recording ${P(Q)}`,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "recording-indicator" }),
          P(Q)
        ]
      }
    ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: () => Z(!J),
          className: "upload-button menu-toggle",
          title: "Add media",
          children: /* @__PURE__ */ r.jsx(qr, { size: 18 })
        }
      ),
      J && /* @__PURE__ */ r.jsxs("div", { className: "upload-menu-dropdown", children: [
        /* @__PURE__ */ r.jsxs(
          "button",
          {
            onClick: () => {
              Y(), Z(!1);
            },
            className: "upload-menu-item",
            title: "Upload files",
            children: [
              /* @__PURE__ */ r.jsx(Yr, { size: 16 }),
              /* @__PURE__ */ r.jsx("span", { children: "Files" })
            ]
          }
        ),
        w && /* @__PURE__ */ r.jsxs(
          "button",
          {
            onClick: () => {
              re(), Z(!1);
            },
            className: "upload-menu-item",
            title: "Take photo",
            children: [
              /* @__PURE__ */ r.jsx(Xe, { size: 16 }),
              /* @__PURE__ */ r.jsx("span", { children: "Camera" })
            ]
          }
        ),
        o && /* @__PURE__ */ r.jsxs(
          "button",
          {
            onClick: () => {
              k(), Z(!1);
            },
            className: "upload-menu-item",
            title: "Record audio",
            children: [
              /* @__PURE__ */ r.jsx(Wr, { size: 16 }),
              /* @__PURE__ */ r.jsx("span", { children: "Audio" })
            ]
          }
        )
      ] })
    ] }) })
  ] });
}, tr = ({
  files: c,
  onRemoveFile: u
}) => {
  if (c.length === 0)
    return null;
  const f = (o) => {
    if (o === 0)
      return "0 B";
    const _ = 1024, d = ["B", "KB", "MB", "GB"], b = Math.floor(Math.log(o) / Math.log(_));
    return parseFloat((o / Math.pow(_, b)).toFixed(1)) + " " + d[b];
  }, v = (o) => {
    switch (o) {
      case "image":
        return /* @__PURE__ */ r.jsx(zr, { size: 16 });
      case "video":
        return /* @__PURE__ */ r.jsx(Gr, { size: 16 });
      case "audio":
        return /* @__PURE__ */ r.jsx(Zr, { size: 16 });
      default:
        return /* @__PURE__ */ r.jsx(or, { size: 16 });
    }
  }, w = (o) => {
    switch (o.type) {
      case "image":
        return /* @__PURE__ */ r.jsx(
          "img",
          {
            src: o.url,
            alt: o.name,
            className: "media-preview-image"
          }
        );
      case "video":
        return /* @__PURE__ */ r.jsx(
          "video",
          {
            src: o.url,
            className: "media-preview-video",
            controls: !0,
            preload: "metadata"
          }
        );
      case "audio":
        return /* @__PURE__ */ r.jsx(
          "audio",
          {
            src: o.url,
            className: "media-preview-audio",
            controls: !0,
            preload: "metadata"
          }
        );
      default:
        return /* @__PURE__ */ r.jsxs("div", { className: "media-preview-document", children: [
          v(o.type),
          /* @__PURE__ */ r.jsx("span", { className: "document-name", children: o.name })
        ] });
    }
  };
  return /* @__PURE__ */ r.jsx("div", { className: "media-preview", children: /* @__PURE__ */ r.jsx("div", { className: "media-preview-list", children: c.map((o) => /* @__PURE__ */ r.jsxs("div", { className: "media-preview-item", children: [
    /* @__PURE__ */ r.jsx("div", { className: "media-preview-content", children: w(o) }),
    /* @__PURE__ */ r.jsxs("div", { className: "media-preview-info", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "media-preview-details", children: [
        /* @__PURE__ */ r.jsx("span", { className: "file-name", title: o.name, children: o.name.length > 20 ? `${o.name.substring(0, 20)}...` : o.name }),
        /* @__PURE__ */ r.jsx("span", { className: "file-size", children: f(o.size) })
      ] }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: () => u(o.id),
          className: "remove-file-button",
          title: "Remove file",
          children: /* @__PURE__ */ r.jsx(ye, { size: 14 })
        }
      )
    ] })
  ] }, o.id)) }) });
}, et = ({
  isOpen: c,
  onClick: u,
  position: f,
  primaryColor: v
}) => {
  const [w, o] = z(!1);
  be(() => {
    if (c)
      o(!1);
    else {
      const b = setTimeout(() => {
        o(!0);
      }, 5e3);
      return () => clearTimeout(b);
    }
  }, [c]);
  const _ = () => {
    o(!1), u();
  }, d = () => {
    o(!1), u();
  };
  return /* @__PURE__ */ r.jsxs("div", { className: `chat-toggle-container chat-toggle-button--${f}`, children: [
    w && !c && /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: `chat-popup-message chat-popup-message--${f}`,
        onClick: d,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "chat-popup-content", children: "Hey! How can I help you?" }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              className: "chat-popup-close",
              onClick: (b) => {
                b.stopPropagation(), o(!1);
              },
              children: "×"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ r.jsx(
      "button",
      {
        onClick: _,
        className: "chat-toggle-button",
        style: {
          backgroundColor: v,
          "--chat-primary": v
        },
        "aria-label": c ? "Close chat" : "Open chat",
        children: c ? /* @__PURE__ */ r.jsx(ye, { size: 24, className: "toggle-icon" }) : /* @__PURE__ */ r.jsx(Lr, { size: 24, className: "toggle-icon" })
      }
    )
  ] });
};
function rt() {
  const [c, u] = z(() => typeof window > "u" ? {
    isMobile: !1,
    isDesktop: !0,
    screenWidth: 1024,
    screenHeight: 768,
    isArc: !1,
    isSafari: !1,
    isChrome: !1,
    supportsVisualViewport: !1
  } : Oe());
  return be(() => {
    const f = () => {
      u(Oe());
    };
    return window.addEventListener("resize", f), window.addEventListener("orientationchange", f), () => {
      window.removeEventListener("resize", f), window.removeEventListener("orientationchange", f);
    };
  }, []), c;
}
const at = ({
  config: c,
  onMessage: u,
  onError: f,
  onClose: v
}) => {
  const [w, o] = z([]), [_, d] = z(""), [b, $] = z(!1), [x, U] = z(!1), [A, X] = z(c.initialState !== "closed"), [O, Q] = z([]), [te] = z(() => {
    let m = localStorage.getItem("n8n_session_id");
    return m || (m = "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9), localStorage.setItem("n8n_session_id", m)), m;
  }), q = rt(), T = ie(null), J = ie(null), Z = ie(null), s = { ...{
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
    showTypingIndicator: !0,
    showTimestamps: !1,
    position: "bottom-right",
    width: 350,
    height: 500,
    zIndex: 1e3,
    initialState: "open",
    showToggleButton: !1,
    enableFileUpload: !1,
    enableCamera: !1,
    enableAudio: !1,
    maxFileSize: 10,
    maxFiles: 5,
    allowedFileTypes: []
  }, ...c }, fe = () => {
    var m;
    (m = T.current) == null || m.scrollIntoView();
  };
  be(() => {
    fe();
  }, [w]), be(() => {
    if (A) {
      const m = setTimeout(() => {
        J.current && J.current.focus();
      }, 100);
      return () => clearTimeout(m);
    }
  }, [A]);
  const ae = () => `${Date.now()}-${Math.random()}`, le = async (m, S) => {
    try {
      if (S && S.length > 0) {
        const k = new FormData();
        k.append("sessionId", te), k.append("chatInput", m), S.forEach((n, i) => {
          k.append(`file_${i}`, n.file);
        });
        const C = await fetch(c.n8nWebhookUrl, {
          method: "POST",
          body: k
        });
        if (!C.ok)
          throw new Error(`HTTP error! status: ${C.status}`);
        const P = await C.json();
        return P.output || P.response || P.message || P.text || "Response received";
      } else {
        const k = {
          sessionId: te,
          chatInput: m
        }, C = await fetch(c.n8nWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(k)
        });
        if (!C.ok)
          throw new Error(`HTTP error! status: ${C.status}`);
        const P = await C.json();
        return P.output || P.response || P.message || P.text || "Response received";
      }
    } catch (k) {
      throw console.error("Error sending to n8n:", k), k;
    }
  }, ne = je(async () => {
    if (!_.trim() && O.length === 0 || x)
      return;
    const m = _.trim() || "", S = {
      id: ae(),
      type: "user",
      content: m,
      timestamp: /* @__PURE__ */ new Date(),
      files: O.length > 0 ? [...O] : void 0
    };
    o((C) => [...C, S]), d("");
    const k = [...O];
    Q([]), U(!0), c.showTypingIndicator && $(!0), u == null || u(S);
    try {
      const C = await le(m, k.length > 0 ? k : void 0), P = {
        id: ae(),
        type: "bot",
        content: C,
        timestamp: /* @__PURE__ */ new Date()
      };
      o((n) => [...n, P]), u == null || u(P);
    } catch (C) {
      const P = {
        id: ae(),
        type: "bot",
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: /* @__PURE__ */ new Date()
      };
      o((n) => [...n, P]), f == null || f(C);
    } finally {
      U(!1), $(!1), k.forEach((C) => URL.revokeObjectURL(C.url));
    }
  }, [_, O, x, c, u, f]), ee = (m) => {
    m.key === "Enter" && !m.shiftKey && (m.preventDefault(), ne());
  }, se = je((m) => {
    Q((S) => [...S, ...m].slice(0, s.maxFiles));
  }, [s.maxFiles]), M = je((m) => {
    Q((S) => {
      const k = S.find((C) => C.id === m);
      return k && URL.revokeObjectURL(k.url), S.filter((C) => C.id !== m);
    });
  }, []), Y = je(() => {
    X((m) => {
      const S = !m;
      return !S && v && v(), S;
    });
  }, [v]);
  return s.position !== "inline" && s.showToggleButton ? /* @__PURE__ */ r.jsxs("div", { className: `chat-widget-container chat-widget-container--${s.position}${A ? "" : " chat-closed"}`, children: [
    /* @__PURE__ */ r.jsx(
      et,
      {
        isOpen: A,
        onClick: Y,
        position: s.position,
        primaryColor: s.colors.primary || "#007bff"
      }
    ),
    A && /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: Z,
        className: `chat-embed chat-embed--${s.theme} chat-embed--${s.position}${q.isMobile ? " chat-embed--mobile" : ""} chat-embed--open`,
        style: {
          "--chat-primary": s.colors.primary,
          "--chat-background": s.colors.background,
          "--chat-user-bubble": s.colors.userBubble,
          "--chat-bot-bubble": s.colors.botBubble,
          "--chat-text": s.colors.text,
          "--chat-width": `${s.width}px`,
          "--chat-height": `${s.height}px`,
          zIndex: s.zIndex
        },
        children: [
          /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__header", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__header-content", children: [
              /* @__PURE__ */ r.jsx("h3", { className: "chat-embed__title", children: s.title }),
              s.subtitle && /* @__PURE__ */ r.jsx("p", { className: "chat-embed__subtitle", children: s.subtitle })
            ] }),
            s.position !== "inline" && /* @__PURE__ */ r.jsx(
              "button",
              {
                className: "chat-embed__close-button",
                onClick: Y,
                "aria-label": "Close chat",
                children: /* @__PURE__ */ r.jsx(ye, { size: 18 })
              }
            )
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__messages", children: [
            w.map((m) => /* @__PURE__ */ r.jsx(
              Qe,
              {
                message: m,
                showTimestamp: s.showTimestamps
              },
              m.id
            )),
            /* @__PURE__ */ r.jsx(er, { visible: b }),
            /* @__PURE__ */ r.jsx("div", { ref: T })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__input-area", children: [
            O.length > 0 && /* @__PURE__ */ r.jsx(
              tr,
              {
                files: O,
                onRemoveFile: M
              }
            ),
            /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__input-row", children: [
              s.enableFileUpload && /* @__PURE__ */ r.jsx(
                rr,
                {
                  onFilesSelected: se,
                  maxFiles: s.maxFiles,
                  maxFileSize: s.maxFileSize,
                  allowedTypes: s.allowedFileTypes,
                  enableCamera: s.enableCamera,
                  enableAudio: s.enableAudio
                }
              ),
              /* @__PURE__ */ r.jsx("div", { className: "chat-embed__input-container", children: /* @__PURE__ */ r.jsx(
                "textarea",
                {
                  ref: J,
                  className: "chat-embed__input",
                  value: _,
                  onChange: (m) => d(m.target.value),
                  onKeyPress: ee,
                  placeholder: s.placeholder,
                  disabled: x,
                  rows: 1,
                  style: { resize: "none" }
                }
              ) }),
              /* @__PURE__ */ r.jsx(
                "button",
                {
                  className: "chat-embed__send-button",
                  onClick: ne,
                  disabled: x || !_.trim() && O.length === 0,
                  children: x ? /* @__PURE__ */ r.jsx("div", { className: "chat-embed__loading-spinner" }) : /* @__PURE__ */ r.jsx(Ze, { size: 18, className: "chat-embed__send-icon" })
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] }) : /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: Z,
      className: `chat-embed chat-embed--${s.theme} chat-embed--${s.position}${q.isMobile ? " chat-embed--mobile" : ""}`,
      style: {
        "--chat-primary": s.colors.primary,
        "--chat-background": s.colors.background,
        "--chat-user-bubble": s.colors.userBubble,
        "--chat-bot-bubble": s.colors.botBubble,
        "--chat-text": s.colors.text,
        "--chat-width": `${s.width}px`,
        "--chat-height": `${s.height}px`,
        zIndex: s.zIndex
      },
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__header", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__header-content", children: [
            /* @__PURE__ */ r.jsx("h3", { className: "chat-embed__title", children: s.title }),
            s.subtitle && /* @__PURE__ */ r.jsx("p", { className: "chat-embed__subtitle", children: s.subtitle })
          ] }),
          s.position !== "inline" && /* @__PURE__ */ r.jsx(
            "button",
            {
              className: "chat-embed__close-button",
              onClick: Y,
              "aria-label": "Close chat",
              children: /* @__PURE__ */ r.jsx(ye, { size: 18 })
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__messages", children: [
          w.map((m) => /* @__PURE__ */ r.jsx(
            Qe,
            {
              message: m,
              showTimestamp: s.showTimestamps
            },
            m.id
          )),
          /* @__PURE__ */ r.jsx(er, { visible: b }),
          /* @__PURE__ */ r.jsx("div", { ref: T })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__input-area", children: [
          O.length > 0 && /* @__PURE__ */ r.jsx(
            tr,
            {
              files: O,
              onRemoveFile: M
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__input-row", children: [
            s.enableFileUpload && /* @__PURE__ */ r.jsx(
              rr,
              {
                onFilesSelected: se,
                maxFiles: s.maxFiles,
                maxFileSize: s.maxFileSize,
                allowedTypes: s.allowedFileTypes,
                enableCamera: s.enableCamera,
                enableAudio: s.enableAudio
              }
            ),
            /* @__PURE__ */ r.jsx("div", { className: "chat-embed__input-container", children: /* @__PURE__ */ r.jsx(
              "textarea",
              {
                ref: J,
                className: "chat-embed__input",
                value: _,
                onChange: (m) => d(m.target.value),
                onKeyPress: ee,
                placeholder: s.placeholder,
                disabled: x,
                rows: 1,
                style: { resize: "none" }
              }
            ) }),
            /* @__PURE__ */ r.jsx(
              "button",
              {
                className: "chat-embed__send-button",
                onClick: ne,
                disabled: x || !_.trim() && O.length === 0,
                children: x ? /* @__PURE__ */ r.jsx("div", { className: "chat-embed__loading-spinner" }) : /* @__PURE__ */ r.jsx(Ze, { size: 18, className: "chat-embed__send-icon" })
              }
            )
          ] })
        ] })
      ]
    }
  );
};
export {
  at as ChatEmbed,
  Qe as MessageBubble,
  er as TypingIndicator,
  rt as useDeviceDetection
};
