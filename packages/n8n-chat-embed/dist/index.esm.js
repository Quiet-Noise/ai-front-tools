import ar, { forwardRef as nr, createElement as Pe, useRef as ie, useState as V, useEffect as je, useCallback as _e } from "react";
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
function Sr() {
  if (Ke)
    return ge;
  Ke = 1;
  var i = ar, d = Symbol.for("react.element"), f = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, x = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(m, y, $) {
    var w, z = {}, A = null, X = null;
    $ !== void 0 && (A = "" + $), y.key !== void 0 && (A = "" + y.key), y.ref !== void 0 && (X = y.ref);
    for (w in y)
      v.call(y, w) && !c.hasOwnProperty(w) && (z[w] = y[w]);
    if (m && m.defaultProps)
      for (w in y = m.defaultProps, y)
        z[w] === void 0 && (z[w] = y[w]);
    return { $$typeof: d, type: m, key: A, ref: X, props: z, _owner: x.current };
  }
  return ge.Fragment = f, ge.jsx = j, ge.jsxs = j, ge;
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
function Nr() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var i = ar, d = Symbol.for("react.element"), f = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), m = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), X = Symbol.for("react.offscreen"), O = Symbol.iterator, Q = "@@iterator";
    function te(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = O && e[O] || e[Q];
      return typeof t == "function" ? t : null;
    }
    var H = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        J("error", e, a);
      }
    }
    function J(e, t, a) {
      {
        var l = H.ReactDebugCurrentFrame, b = l.getStackAddendum();
        b !== "" && (t += "%s", a = a.concat([b]));
        var _ = a.map(function(g) {
          return String(g);
        });
        _.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, _);
      }
    }
    var Z = !1, ce = !1, s = !1, fe = !1, ae = !1, le;
    le = Symbol.for("react.module.reference");
    function ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === c || ae || e === x || e === $ || e === w || fe || e === X || Z || ce || s || typeof e == "object" && e !== null && (e.$$typeof === A || e.$$typeof === z || e.$$typeof === j || e.$$typeof === m || e.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function ee(e, t, a) {
      var l = e.displayName;
      if (l)
        return l;
      var b = t.displayName || t.name || "";
      return b !== "" ? a + "(" + b + ")" : a;
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
        case c:
          return "Profiler";
        case x:
          return "StrictMode";
        case $:
          return "Suspense";
        case w:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var t = e;
            return se(t) + ".Consumer";
          case j:
            var a = e;
            return se(a._context) + ".Provider";
          case y:
            return ee(e, e.render, "ForwardRef");
          case z:
            var l = e.displayName || null;
            return l !== null ? l : M(e.type) || "Memo";
          case A: {
            var b = e, _ = b._payload, g = b._init;
            try {
              return M(g(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, re = 0, u, N, E, C, P, n, o;
    function p() {
    }
    p.__reactDisabledLog = !0;
    function k() {
      {
        if (re === 0) {
          u = console.log, N = console.info, E = console.warn, C = console.error, P = console.group, n = console.groupCollapsed, o = console.groupEnd;
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
    function q() {
      {
        if (re--, re === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, e, {
              value: u
            }),
            info: Y({}, e, {
              value: N
            }),
            warn: Y({}, e, {
              value: E
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
              value: o
            })
          });
        }
        re < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var R = H.ReactCurrentDispatcher, U;
    function I(e, t, a) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (b) {
            var l = b.stack.trim().match(/\n( *(at )?)/);
            U = l && l[1] || "";
          }
        return `
` + U + e;
      }
    }
    var L = !1, B;
    {
      var ye = typeof WeakMap == "function" ? WeakMap : Map;
      B = new ye();
    }
    function de(e, t) {
      if (!e || L)
        return "";
      {
        var a = B.get(e);
        if (a !== void 0)
          return a;
      }
      var l;
      L = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = R.current, R.current = null, k();
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
            } catch (W) {
              l = W;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (W) {
              l = W;
            }
            e.call(g.prototype);
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
          for (var h = W.stack.split(`
`), D = l.stack.split(`
`), S = h.length - 1, F = D.length - 1; S >= 1 && F >= 0 && h[S] !== D[F]; )
            F--;
          for (; S >= 1 && F >= 0; S--, F--)
            if (h[S] !== D[F]) {
              if (S !== 1 || F !== 1)
                do
                  if (S--, F--, F < 0 || h[S] !== D[F]) {
                    var K = `
` + h[S].replace(" at new ", " at ");
                    return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, K), K;
                  }
                while (S >= 1 && F >= 0);
              break;
            }
        }
      } finally {
        L = !1, R.current = _, q(), Error.prepareStackTrace = b;
      }
      var me = e ? e.displayName || e.name : "", oe = me ? I(me) : "";
      return typeof e == "function" && B.set(e, oe), oe;
    }
    function Ae(e, t, a) {
      return de(e, !1);
    }
    function Re(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function we(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Re(e));
      if (typeof e == "string")
        return I(e);
      switch (e) {
        case $:
          return I("Suspense");
        case w:
          return I("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            return Ae(e.render);
          case z:
            return we(e.type, t, a);
          case A: {
            var l = e, b = l._payload, _ = l._init;
            try {
              return we(_(b), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    var pe = Object.prototype.hasOwnProperty, $e = {}, Me = H.ReactDebugCurrentFrame;
    function xe(e) {
      if (e) {
        var t = e._owner, a = we(e.type, e._source, t ? t.type : null);
        Me.setExtraStackFrame(a);
      } else
        Me.setExtraStackFrame(null);
    }
    function ir(e, t, a, l, b) {
      {
        var _ = Function.call.bind(pe);
        for (var g in e)
          if (_(e, g)) {
            var h = void 0;
            try {
              if (typeof e[g] != "function") {
                var D = Error((l || "React class") + ": " + a + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw D.name = "Invariant Violation", D;
              }
              h = e[g](t, g, l, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              h = S;
            }
            h && !(h instanceof Error) && (xe(b), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", a, g, typeof h), xe(null)), h instanceof Error && !(h.message in $e) && ($e[h.message] = !0, xe(b), T("Failed %s type: %s", a, h.message), xe(null));
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
    function dr(e) {
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
      if (dr(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", lr(e)), Ie(e);
    }
    var he = H.ReactCurrentOwner, ur = {
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
    var vr = function(e, t, a, l, b, _, g) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: a,
        props: g,
        // Record the component responsible for creating this element.
        _owner: _
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
        value: b
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function br(e, t, a, l, b) {
      {
        var _, g = {}, h = null, D = null;
        a !== void 0 && (De(a), h = "" + a), fr(t) && (De(t.key), h = "" + t.key), mr(t) && (D = t.ref, pr(t, b));
        for (_ in t)
          pe.call(t, _) && !ur.hasOwnProperty(_) && (g[_] = t[_]);
        if (e && e.defaultProps) {
          var S = e.defaultProps;
          for (_ in S)
            g[_] === void 0 && (g[_] = S[_]);
        }
        if (h || D) {
          var F = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && hr(g, F), D && gr(g, F);
        }
        return vr(e, h, D, b, l, he.current, g);
      }
    }
    var Ee = H.ReactCurrentOwner, Le = H.ReactDebugCurrentFrame;
    function ue(e) {
      if (e) {
        var t = e._owner, a = we(e.type, e._source, t ? t.type : null);
        Le.setExtraStackFrame(a);
      } else
        Le.setExtraStackFrame(null);
    }
    var ke;
    ke = !1;
    function Se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function Be() {
      {
        if (Ee.current) {
          var e = M(Ee.current.type);
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
        e && e._owner && e._owner !== Ee.current && (l = " It was passed a child from " + M(e._owner.type) + "."), ue(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, l), ue(null);
      }
    }
    function Ye(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Ce(e))
          for (var a = 0; a < e.length; a++) {
            var l = e[a];
            Se(l) && Ve(l, t);
          }
        else if (Se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = te(e);
          if (typeof b == "function" && b !== e.entries)
            for (var _ = b.call(e), g; !(g = _.next()).done; )
              Se(g.value) && Ve(g.value, t);
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
        else if (typeof t == "object" && (t.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === z))
          a = t.propTypes;
        else
          return;
        if (a) {
          var l = M(t);
          ir(a, e.props, "prop", l, e);
        } else if (t.PropTypes !== void 0 && !ke) {
          ke = !0;
          var b = M(t);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(e) {
      {
        for (var t = Object.keys(e.props), a = 0; a < t.length; a++) {
          var l = t[a];
          if (l !== "children" && l !== "key") {
            ue(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), ue(null);
            break;
          }
        }
        e.ref !== null && (ue(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), ue(null));
      }
    }
    var qe = {};
    function He(e, t, a, l, b, _) {
      {
        var g = ne(e);
        if (!g) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var D = yr(b);
          D ? h += D : h += Be();
          var S;
          e === null ? S = "null" : Ce(e) ? S = "array" : e !== void 0 && e.$$typeof === d ? (S = "<" + (M(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : S = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, h);
        }
        var F = br(e, t, a, b, _);
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
          var oe = M(e), W = Object.keys(t).filter(function(kr) {
            return kr !== "key";
          }), Ne = W.length > 0 ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!qe[oe + Ne]) {
            var Er = W.length > 0 ? "{" + W.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ne, oe, Er, oe), qe[oe + Ne] = !0;
          }
        }
        return e === v ? _r(F) : xr(F), F;
      }
    }
    function jr(e, t, a) {
      return He(e, t, a, !0);
    }
    function Rr(e, t, a) {
      return He(e, t, a, !1);
    }
    var Cr = Rr, Tr = jr;
    ve.Fragment = v, ve.jsx = Cr, ve.jsxs = Tr;
  }()), ve;
}
process.env.NODE_ENV === "production" ? Fe.exports = Sr() : Fe.exports = Nr();
var r = Fe.exports;
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Fr = (i) => i.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (d, f, v) => v ? v.toUpperCase() : f.toLowerCase()
), Ge = (i) => {
  const d = Fr(i);
  return d.charAt(0).toUpperCase() + d.slice(1);
}, sr = (...i) => i.filter((d, f, v) => !!d && d.trim() !== "" && v.indexOf(d) === f).join(" ").trim(), Or = (i) => {
  for (const d in i)
    if (d.startsWith("aria-") || d === "role" || d === "title")
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
    color: i = "currentColor",
    size: d = 24,
    strokeWidth: f = 2,
    absoluteStrokeWidth: v,
    className: x = "",
    children: c,
    iconNode: j,
    ...m
  }, y) => Pe(
    "svg",
    {
      ref: y,
      ...Ar,
      width: d,
      height: d,
      stroke: i,
      strokeWidth: v ? Number(f) * 24 / Number(d) : f,
      className: sr("lucide", x),
      ...!c && !Or(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ...j.map(([$, w]) => Pe($, w)),
      ...Array.isArray(c) ? c : [c]
    ]
  )
);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G = (i, d) => {
  const f = nr(
    ({ className: v, ...x }, c) => Pe($r, {
      ref: c,
      iconNode: d,
      className: sr(
        `lucide-${Pr(Ge(i))}`,
        `lucide-${i}`,
        v
      ),
      ...x
    })
  );
  return f.displayName = Ge(i), f;
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
const qr = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Hr = G("plus", qr);
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
], be = G("x", Qr), Qe = ({ message: i, showTimestamp: d = !1 }) => {
  const f = i.type === "user", v = (x, c) => {
    switch (x.type) {
      case "image":
        return /* @__PURE__ */ r.jsx(
          "img",
          {
            src: x.url,
            alt: x.name,
            className: "message-media-image",
            style: { maxWidth: "200px", maxHeight: "150px", borderRadius: "8px", marginTop: "8px" }
          },
          c
        );
      case "video":
        return /* @__PURE__ */ r.jsx(
          "video",
          {
            src: x.url,
            controls: !0,
            className: "message-media-video",
            style: { maxWidth: "200px", maxHeight: "150px", borderRadius: "8px", marginTop: "8px" }
          },
          c
        );
      case "audio":
        return /* @__PURE__ */ r.jsx("div", { className: "message-media-audio", style: { marginTop: "8px" }, children: /* @__PURE__ */ r.jsx("audio", { src: x.url, controls: !0, style: { width: "200px" } }) }, c);
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
          /* @__PURE__ */ r.jsx("span", { style: { fontSize: "14px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: x.name })
        ] }, c);
    }
  };
  return /* @__PURE__ */ r.jsxs("div", { className: `message-bubble ${f ? "user" : "bot"}`, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "message-content", children: [
      i.content.trim() && /* @__PURE__ */ r.jsx("p", { children: i.content }),
      i.files && i.files.map((x, c) => v(x, c))
    ] }),
    d && /* @__PURE__ */ r.jsx("div", { className: "message-timestamp", children: i.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) })
  ] });
}, er = ({ visible: i }) => i ? /* @__PURE__ */ r.jsx("div", { className: "typing-indicator", children: /* @__PURE__ */ r.jsxs("div", { className: "typing-indicator__content", children: [
  /* @__PURE__ */ r.jsx("span", { className: "typing-indicator__dot" }),
  /* @__PURE__ */ r.jsx("span", { className: "typing-indicator__dot" }),
  /* @__PURE__ */ r.jsx("span", { className: "typing-indicator__dot" })
] }) }) : null;
function Oe() {
  const i = window.innerWidth, d = window.innerHeight, f = navigator.userAgent.toLowerCase(), v = "ontouchstart" in window || navigator.maxTouchPoints > 0, x = i < 768, c = v || x, j = f.includes("arc") || f.includes("company.thebrowser.browser") || window.ArcBrowser !== void 0, m = /safari/.test(f) && !/chrome/.test(f) && !j, y = /chrome/.test(f) && !j, $ = !!window.visualViewport;
  return {
    isMobile: c,
    isDesktop: !c,
    screenWidth: i,
    screenHeight: d,
    isArc: j,
    isSafari: m,
    isChrome: y,
    supportsVisualViewport: $
  };
}
const rr = ({
  onFilesSelected: i,
  maxFiles: d,
  maxFileSize: f,
  allowedTypes: v,
  enableCamera: x,
  enableAudio: c
}) => {
  const j = ie(null), m = ie(null), y = ie(null), [$, w] = V(!1), [z, A] = V(!1), [X, O] = V(null), [Q, te] = V(0), [H, T] = V(null), [J, Z] = V(!1), ce = ie(null), s = Oe();
  je(() => {
    const n = (o) => {
      ce.current && !ce.current.contains(o.target) && Z(!1);
    };
    return J && document.addEventListener("mousedown", n), () => {
      document.removeEventListener("mousedown", n);
    };
  }, [J]);
  const fe = () => `${Date.now()}-${Math.random()}`, ae = (n) => n.type.startsWith("image/") ? "image" : n.type.startsWith("video/") ? "video" : n.type.startsWith("audio/") ? "audio" : "document", le = async (n, o = 1) => new Promise((p) => {
    const k = document.createElement("canvas"), q = k.getContext("2d"), R = new Image();
    R.onload = () => {
      let { width: U, height: I } = R;
      const L = 1920;
      U > I && U > L ? (I = I * L / U, U = L) : I > L && (U = U * L / I, I = L), k.width = U, k.height = I, q == null || q.drawImage(R, 0, 0, U, I);
      let B = 0.8;
      const ye = () => {
        k.toBlob((de) => {
          if (de)
            if (de.size / 1048576 > o && B > 0.1)
              B -= 0.1, ye();
            else {
              const Re = new File([de], n.name, {
                type: "image/jpeg",
                lastModified: Date.now()
              });
              p(Re);
            }
          else
            p(n);
        }, "image/jpeg", B);
      };
      ye();
    }, R.onerror = () => p(n), R.src = URL.createObjectURL(n);
  }), ne = async (n) => {
    const p = n.size / 1048576;
    if (p <= 1)
      return n;
    if (n.type.startsWith("image/"))
      try {
        return await le(n, 1);
      } catch (k) {
        return console.warn("Image compression failed, using original:", k), n;
      }
    return p > 1 && console.warn(`File ${n.name} is ${p.toFixed(1)}MB, which may be too large`), n;
  }, ee = async (n) => {
    const o = await ne(n);
    return {
      file: o,
      id: fe(),
      type: ae(o),
      url: URL.createObjectURL(o),
      name: n.name,
      // Keep original name
      size: o.size
    };
  }, se = (n) => n.size > f * 1024 * 1024 ? (alert(`File ${n.name} is too large. Maximum size is ${f}MB.`), !1) : v.length > 0 && !v.some(
    (p) => p === "*" || n.type.includes(p) || n.name.endsWith(p)
  ) ? (alert(`File type not allowed: ${n.type}`), !1) : !0, M = async (n) => {
    if (!n)
      return;
    const o = [], p = Array.from(n);
    for (const k of p) {
      if (o.length >= d) {
        alert(`Maximum ${d} files allowed`);
        break;
      }
      if (se(k))
        try {
          const q = await ee(k);
          o.push(q);
        } catch (q) {
          console.error("Error processing file:", k.name, q), alert(`Error processing file: ${k.name}`);
        }
    }
    o.length > 0 && i(o);
  }, Y = () => {
    var n;
    (n = j.current) == null || n.click();
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
          const o = await navigator.permissions.query({ name: "camera" });
          if (console.log("📋 Camera permission state:", o.state), o.state === "denied") {
            alert("Camera permission is denied. Please enable camera access in your browser settings and reload the page.");
            return;
          }
        } catch (o) {
          console.log("⚠️ Could not check permissions:", o);
        }
      console.log("🎥 Requesting camera access...");
      const n = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user"
        }
      });
      console.log("✅ Camera access granted, stream:", n), console.log("📊 Video tracks:", n.getVideoTracks().length), m.current ? (console.log("📹 Setting up video element..."), m.current.srcObject = n, m.current.autoplay = !0, m.current.playsInline = !0, m.current.muted = !0, m.current.onloadedmetadata = () => {
        var o, p;
        console.log("📹 Video metadata loaded, dimensions:", (o = m.current) == null ? void 0 : o.videoWidth, "x", (p = m.current) == null ? void 0 : p.videoHeight), m.current && m.current.play().then(() => {
          console.log("▶️ Video playing successfully"), w(!0);
        }).catch((k) => {
          console.error("❌ Error playing video:", k), alert("Could not start camera preview. Please try again.");
        });
      }, m.current.oncanplay = () => {
        console.log("📹 Video can play");
      }, m.current.onerror = (o) => {
        console.error("❌ Video element error:", o), alert("Video playback error.");
      }) : (console.error("❌ Video ref not available"), alert("Video element not ready. Please try again."));
    } catch (n) {
      console.error("❌ Error accessing camera:", n);
      const o = n;
      if (o.name === "NotAllowedError")
        alert(`Camera permission denied. Please:
1. Click "Allow" when prompted
2. Check your browser settings
3. Reload the page and try again`);
      else if (o.name === "NotFoundError")
        alert(`No camera found. Please:
1. Connect a camera
2. Check camera connections
3. Try again`);
      else if (o.name === "NotReadableError")
        alert(`Camera is already in use by another application. Please:
1. Close other camera apps
2. Try again`);
      else if (o.name === "OverconstrainedError") {
        alert("Camera constraints not supported. Trying with basic settings...");
        try {
          const p = await navigator.mediaDevices.getUserMedia({ video: !0 });
          m.current && (m.current.srcObject = p, w(!0));
        } catch {
          alert("Could not access camera with any settings.");
        }
      } else
        alert(`Camera error: ${o.message || "Unknown error"}

Please:
1. Allow camera permissions
2. Use HTTPS
3. Try a different browser`);
    }
  }, u = async () => {
    if (!m.current || !y.current)
      return;
    const n = m.current, o = y.current, p = o.getContext("2d");
    p && (o.width = n.videoWidth, o.height = n.videoHeight, p.drawImage(n, 0, 0), o.toBlob(async (k) => {
      if (k) {
        const q = new File([k], `photo-${Date.now()}.jpg`, { type: "image/jpeg" });
        try {
          const R = await ee(q);
          i([R]);
        } catch (R) {
          console.error("Error processing captured photo:", R), alert("Error processing captured photo");
        }
      }
    }, "image/jpeg", 0.8), N());
  }, N = () => {
    var n;
    (n = m.current) != null && n.srcObject && (m.current.srcObject.getTracks().forEach((p) => p.stop()), m.current.srcObject = null), w(!1);
  }, E = async () => {
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
      let o = {};
      s.isArc ? MediaRecorder.isTypeSupported("audio/webm;codecs=opus") ? o.mimeType = "audio/webm;codecs=opus" : MediaRecorder.isTypeSupported("audio/mp4") && (o.mimeType = "audio/mp4") : MediaRecorder.isTypeSupported("audio/webm") && (o.mimeType = "audio/webm");
      const p = new MediaRecorder(n, o), k = [];
      p.ondataavailable = (R) => {
        console.log("📊 Audio data available:", R.data.size, "bytes"), R.data.size > 0 && k.push(R.data);
      }, p.onstop = async () => {
        console.log("🛑 Recording stopped, creating file...");
        const R = p.mimeType || "audio/wav", U = new Blob(k, { type: R }), I = R.includes("webm") ? "webm" : "wav", L = new File([U], `recording-${Date.now()}.${I}`, { type: R });
        console.log("📁 Created audio file:", L.name, L.size, "bytes");
        try {
          const B = await ee(L);
          i([B]);
        } catch (B) {
          console.error("Error processing audio recording:", B), alert("Error processing audio recording");
        }
        n.getTracks().forEach((B) => B.stop());
      }, p.onerror = (R) => {
        console.error("❌ Recording error:", R), alert("Recording failed. Please try again.");
      }, p.start(1e3), O(p), A(!0), te(0), console.log("🔴 Recording started");
      const q = setInterval(() => {
        te((R) => R + 1);
      }, 1e3);
      T(q);
    } catch (n) {
      console.error("❌ Error accessing microphone:", n);
      const o = n;
      o.name === "NotAllowedError" ? alert("Microphone permission denied. Please allow microphone access and try again.") : o.name === "NotFoundError" ? alert("No microphone found. Please connect a microphone and try again.") : alert(`Could not access microphone: ${o.message || "Unknown error"}`);
    }
  }, C = () => {
    X && X.state === "recording" && X.stop(), A(!1), O(null), H && (clearInterval(H), T(null));
  }, P = (n) => {
    const o = Math.floor(n / 60), p = n % 60;
    return `${o}:${p.toString().padStart(2, "0")}`;
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "file-upload", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        ref: j,
        type: "file",
        multiple: !0,
        accept: v.length > 0 ? v.join(",") : "*",
        onChange: (n) => M(n.target.files),
        style: { display: "none" }
      }
    ),
    $ && /* @__PURE__ */ r.jsx("div", { className: "camera-modal", children: /* @__PURE__ */ r.jsxs("div", { className: "camera-container", children: [
      /* @__PURE__ */ r.jsx("video", { ref: m, autoPlay: !0, playsInline: !0, className: "camera-video" }),
      /* @__PURE__ */ r.jsx("canvas", { ref: y, style: { display: "none" } }),
      /* @__PURE__ */ r.jsxs("div", { className: "camera-controls", children: [
        /* @__PURE__ */ r.jsx("button", { onClick: u, className: "capture-button", children: /* @__PURE__ */ r.jsx(Xe, { size: 24 }) }),
        /* @__PURE__ */ r.jsx("button", { onClick: N, className: "close-camera-button", children: /* @__PURE__ */ r.jsx(be, { size: 20 }) })
      ] })
    ] }) }),
    /* @__PURE__ */ r.jsx("div", { className: "upload-menu", ref: ce, children: z ? /* @__PURE__ */ r.jsxs(
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
          children: /* @__PURE__ */ r.jsx(Hr, { size: 18 })
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
        x && /* @__PURE__ */ r.jsxs(
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
        c && /* @__PURE__ */ r.jsxs(
          "button",
          {
            onClick: () => {
              E(), Z(!1);
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
  files: i,
  onRemoveFile: d
}) => {
  if (i.length === 0)
    return null;
  const f = (c) => {
    if (c === 0)
      return "0 B";
    const j = 1024, m = ["B", "KB", "MB", "GB"], y = Math.floor(Math.log(c) / Math.log(j));
    return parseFloat((c / Math.pow(j, y)).toFixed(1)) + " " + m[y];
  }, v = (c) => {
    switch (c) {
      case "image":
        return /* @__PURE__ */ r.jsx(zr, { size: 16 });
      case "video":
        return /* @__PURE__ */ r.jsx(Gr, { size: 16 });
      case "audio":
        return /* @__PURE__ */ r.jsx(Zr, { size: 16 });
      default:
        return /* @__PURE__ */ r.jsx(or, { size: 16 });
    }
  }, x = (c) => {
    switch (c.type) {
      case "image":
        return /* @__PURE__ */ r.jsx(
          "img",
          {
            src: c.url,
            alt: c.name,
            className: "media-preview-image"
          }
        );
      case "video":
        return /* @__PURE__ */ r.jsx(
          "video",
          {
            src: c.url,
            className: "media-preview-video",
            controls: !0,
            preload: "metadata"
          }
        );
      case "audio":
        return /* @__PURE__ */ r.jsx(
          "audio",
          {
            src: c.url,
            className: "media-preview-audio",
            controls: !0,
            preload: "metadata"
          }
        );
      default:
        return /* @__PURE__ */ r.jsxs("div", { className: "media-preview-document", children: [
          v(c.type),
          /* @__PURE__ */ r.jsx("span", { className: "document-name", children: c.name })
        ] });
    }
  };
  return /* @__PURE__ */ r.jsx("div", { className: "media-preview", children: /* @__PURE__ */ r.jsx("div", { className: "media-preview-list", children: i.map((c) => /* @__PURE__ */ r.jsxs("div", { className: "media-preview-item", children: [
    /* @__PURE__ */ r.jsx("div", { className: "media-preview-content", children: x(c) }),
    /* @__PURE__ */ r.jsxs("div", { className: "media-preview-info", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "media-preview-details", children: [
        /* @__PURE__ */ r.jsx("span", { className: "file-name", title: c.name, children: c.name.length > 20 ? `${c.name.substring(0, 20)}...` : c.name }),
        /* @__PURE__ */ r.jsx("span", { className: "file-size", children: f(c.size) })
      ] }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: () => d(c.id),
          className: "remove-file-button",
          title: "Remove file",
          children: /* @__PURE__ */ r.jsx(be, { size: 14 })
        }
      )
    ] })
  ] }, c.id)) }) });
}, et = ({
  isOpen: i,
  onClick: d,
  position: f,
  primaryColor: v
}) => /* @__PURE__ */ r.jsx(
  "button",
  {
    onClick: d,
    className: `chat-toggle-button chat-toggle-button--${f}`,
    style: {
      backgroundColor: v,
      "--chat-primary": v
    },
    "aria-label": i ? "Close chat" : "Open chat",
    children: i ? /* @__PURE__ */ r.jsx(be, { size: 24, className: "toggle-icon" }) : /* @__PURE__ */ r.jsx(Lr, { size: 24, className: "toggle-icon" })
  }
);
function rt() {
  const [i, d] = V(() => typeof window > "u" ? {
    isMobile: !1,
    isDesktop: !0,
    screenWidth: 1024,
    screenHeight: 768,
    isArc: !1,
    isSafari: !1,
    isChrome: !1,
    supportsVisualViewport: !1
  } : Oe());
  return je(() => {
    const f = () => {
      d(Oe());
    };
    return window.addEventListener("resize", f), window.addEventListener("orientationchange", f), () => {
      window.removeEventListener("resize", f), window.removeEventListener("orientationchange", f);
    };
  }, []), i;
}
const at = ({
  config: i,
  onMessage: d,
  onError: f,
  onClose: v
}) => {
  const [x, c] = V([]), [j, m] = V(""), [y, $] = V(!1), [w, z] = V(!1), [A, X] = V(i.initialState !== "closed"), [O, Q] = V([]), [te] = V(() => {
    let u = localStorage.getItem("n8n_session_id");
    return u || (u = "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9), localStorage.setItem("n8n_session_id", u)), u;
  }), H = rt(), T = ie(null), J = ie(null), Z = ie(null), s = { ...{
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
  }, ...i }, fe = () => {
    var u;
    (u = T.current) == null || u.scrollIntoView();
  };
  je(() => {
    fe();
  }, [x]), je(() => {
    if (A) {
      const u = setTimeout(() => {
        J.current && J.current.focus();
      }, 100);
      return () => clearTimeout(u);
    }
  }, [A]);
  const ae = () => `${Date.now()}-${Math.random()}`, le = async (u, N) => {
    try {
      if (N && N.length > 0) {
        const E = new FormData();
        E.append("sessionId", te), E.append("chatInput", u), N.forEach((n, o) => {
          E.append(`file_${o}`, n.file);
        });
        const C = await fetch(i.n8nWebhookUrl, {
          method: "POST",
          body: E
        });
        if (!C.ok)
          throw new Error(`HTTP error! status: ${C.status}`);
        const P = await C.json();
        return P.output || P.response || P.message || P.text || "Response received";
      } else {
        const E = {
          sessionId: te,
          chatInput: u
        }, C = await fetch(i.n8nWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(E)
        });
        if (!C.ok)
          throw new Error(`HTTP error! status: ${C.status}`);
        const P = await C.json();
        return P.output || P.response || P.message || P.text || "Response received";
      }
    } catch (E) {
      throw console.error("Error sending to n8n:", E), E;
    }
  }, ne = _e(async () => {
    if (!j.trim() && O.length === 0 || w)
      return;
    const u = j.trim() || "", N = {
      id: ae(),
      type: "user",
      content: u,
      timestamp: /* @__PURE__ */ new Date(),
      files: O.length > 0 ? [...O] : void 0
    };
    c((C) => [...C, N]), m("");
    const E = [...O];
    Q([]), z(!0), i.showTypingIndicator && $(!0), d == null || d(N);
    try {
      const C = await le(u, E.length > 0 ? E : void 0), P = {
        id: ae(),
        type: "bot",
        content: C,
        timestamp: /* @__PURE__ */ new Date()
      };
      c((n) => [...n, P]), d == null || d(P);
    } catch (C) {
      const P = {
        id: ae(),
        type: "bot",
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: /* @__PURE__ */ new Date()
      };
      c((n) => [...n, P]), f == null || f(C);
    } finally {
      z(!1), $(!1), E.forEach((C) => URL.revokeObjectURL(C.url));
    }
  }, [j, O, w, i, d, f]), ee = (u) => {
    u.key === "Enter" && !u.shiftKey && (u.preventDefault(), ne());
  }, se = _e((u) => {
    Q((N) => [...N, ...u].slice(0, s.maxFiles));
  }, [s.maxFiles]), M = _e((u) => {
    Q((N) => {
      const E = N.find((C) => C.id === u);
      return E && URL.revokeObjectURL(E.url), N.filter((C) => C.id !== u);
    });
  }, []), Y = _e(() => {
    X((u) => {
      const N = !u;
      return !N && v && v(), N;
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
        className: `chat-embed chat-embed--${s.theme} chat-embed--${s.position}${H.isMobile ? " chat-embed--mobile" : ""} chat-embed--open`,
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
                children: /* @__PURE__ */ r.jsx(be, { size: 18 })
              }
            )
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__messages", children: [
            x.map((u) => /* @__PURE__ */ r.jsx(
              Qe,
              {
                message: u,
                showTimestamp: s.showTimestamps
              },
              u.id
            )),
            /* @__PURE__ */ r.jsx(er, { visible: y }),
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
                  value: j,
                  onChange: (u) => m(u.target.value),
                  onKeyPress: ee,
                  placeholder: s.placeholder,
                  disabled: w,
                  rows: 1,
                  style: { resize: "none" }
                }
              ) }),
              /* @__PURE__ */ r.jsx(
                "button",
                {
                  className: "chat-embed__send-button",
                  onClick: ne,
                  disabled: w || !j.trim() && O.length === 0,
                  children: w ? /* @__PURE__ */ r.jsx("div", { className: "chat-embed__loading-spinner" }) : /* @__PURE__ */ r.jsx(Ze, { size: 18, className: "chat-embed__send-icon" })
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
      className: `chat-embed chat-embed--${s.theme} chat-embed--${s.position}${H.isMobile ? " chat-embed--mobile" : ""}`,
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
              children: /* @__PURE__ */ r.jsx(be, { size: 18 })
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__messages", children: [
          x.map((u) => /* @__PURE__ */ r.jsx(
            Qe,
            {
              message: u,
              showTimestamp: s.showTimestamps
            },
            u.id
          )),
          /* @__PURE__ */ r.jsx(er, { visible: y }),
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
                value: j,
                onChange: (u) => m(u.target.value),
                onKeyPress: ee,
                placeholder: s.placeholder,
                disabled: w,
                rows: 1,
                style: { resize: "none" }
              }
            ) }),
            /* @__PURE__ */ r.jsx(
              "button",
              {
                className: "chat-embed__send-button",
                onClick: ne,
                disabled: w || !j.trim() && O.length === 0,
                children: w ? /* @__PURE__ */ r.jsx("div", { className: "chat-embed__loading-spinner" }) : /* @__PURE__ */ r.jsx(Ze, { size: 18, className: "chat-embed__send-icon" })
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
