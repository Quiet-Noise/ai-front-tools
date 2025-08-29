import ar, { forwardRef as nr, createElement as Pe, useRef as ce, useState as L, useEffect as be, useCallback as je } from "react";
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
  var c = ar, l = Symbol.for("react.element"), f = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, x = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(m, b, $) {
    var _, U = {}, A = null, X = null;
    $ !== void 0 && (A = "" + $), b.key !== void 0 && (A = "" + b.key), b.ref !== void 0 && (X = b.ref);
    for (_ in b)
      v.call(b, _) && !s.hasOwnProperty(_) && (U[_] = b[_]);
    if (m && m.defaultProps)
      for (_ in b = m.defaultProps, b)
        U[_] === void 0 && (U[_] = b[_]);
    return { $$typeof: l, type: m, key: A, ref: X, props: U, _owner: x.current };
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
function Sr() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var c = ar, l = Symbol.for("react.element"), f = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), m = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), X = Symbol.for("react.offscreen"), I = Symbol.iterator, ee = "@@iterator";
    function ae(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = I && e[I] || e[ee];
      return typeof t == "function" ? t : null;
    }
    var q = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++)
          n[u - 1] = arguments[u];
        J("error", e, n);
      }
    }
    function J(e, t, n) {
      {
        var u = q.ReactDebugCurrentFrame, y = u.getStackAddendum();
        y !== "" && (t += "%s", n = n.concat([y]));
        var R = n.map(function(g) {
          return String(g);
        });
        R.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, R);
      }
    }
    var Z = !1, le = !1, o = !1, fe = !1, Q = !1, ne;
    ne = Symbol.for("react.module.reference");
    function se(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === s || Q || e === x || e === $ || e === _ || fe || e === X || Z || le || o || typeof e == "object" && e !== null && (e.$$typeof === A || e.$$typeof === U || e.$$typeof === j || e.$$typeof === m || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function re(e, t, n) {
      var u = e.displayName;
      if (u)
        return u;
      var y = t.displayName || t.name || "";
      return y !== "" ? n + "(" + y + ")" : n;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function M(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case f:
          return "Portal";
        case s:
          return "Profiler";
        case x:
          return "StrictMode";
        case $:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var t = e;
            return oe(t) + ".Consumer";
          case j:
            var n = e;
            return oe(n._context) + ".Provider";
          case b:
            return re(e, e.render, "ForwardRef");
          case U:
            var u = e.displayName || null;
            return u !== null ? u : M(e.type) || "Memo";
          case A: {
            var y = e, R = y._payload, g = y._init;
            try {
              return M(g(R));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, te = 0, d, N, w, E, S, a, i;
    function p() {
    }
    p.__reactDisabledLog = !0;
    function T() {
      {
        if (te === 0) {
          d = console.log, N = console.info, w = console.warn, E = console.error, S = console.group, a = console.groupCollapsed, i = console.groupEnd;
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
        te++;
      }
    }
    function O() {
      {
        if (te--, te === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, e, {
              value: d
            }),
            info: H({}, e, {
              value: N
            }),
            warn: H({}, e, {
              value: w
            }),
            error: H({}, e, {
              value: E
            }),
            group: H({}, e, {
              value: S
            }),
            groupCollapsed: H({}, e, {
              value: a
            }),
            groupEnd: H({}, e, {
              value: i
            })
          });
        }
        te < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var C = q.ReactCurrentDispatcher, B;
    function D(e, t, n) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (y) {
            var u = y.stack.trim().match(/\n( *(at )?)/);
            B = u && u[1] || "";
          }
        return `
` + B + e;
      }
    }
    var W = !1, V;
    {
      var we = typeof WeakMap == "function" ? WeakMap : Map;
      V = new we();
    }
    function ue(e, t) {
      if (!e || W)
        return "";
      {
        var n = V.get(e);
        if (n !== void 0)
          return n;
      }
      var u;
      W = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var R;
      R = C.current, C.current = null, T();
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
            } catch (Y) {
              u = Y;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (Y) {
              u = Y;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            u = Y;
          }
          e();
        }
      } catch (Y) {
        if (Y && u && typeof Y.stack == "string") {
          for (var h = Y.stack.split(`
`), z = u.stack.split(`
`), P = h.length - 1, F = z.length - 1; P >= 1 && F >= 0 && h[P] !== z[F]; )
            F--;
          for (; P >= 1 && F >= 0; P--, F--)
            if (h[P] !== z[F]) {
              if (P !== 1 || F !== 1)
                do
                  if (P--, F--, F < 0 || h[P] !== z[F]) {
                    var K = `
` + h[P].replace(" at new ", " at ");
                    return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, K), K;
                  }
                while (P >= 1 && F >= 0);
              break;
            }
        }
      } finally {
        W = !1, C.current = R, O(), Error.prepareStackTrace = y;
      }
      var me = e ? e.displayName || e.name : "", ie = me ? D(me) : "";
      return typeof e == "function" && V.set(e, ie), ie;
    }
    function Ae(e, t, n) {
      return ue(e, !1);
    }
    function Re(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function xe(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ue(e, Re(e));
      if (typeof e == "string")
        return D(e);
      switch (e) {
        case $:
          return D("Suspense");
        case _:
          return D("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return Ae(e.render);
          case U:
            return xe(e.type, t, n);
          case A: {
            var u = e, y = u._payload, R = u._init;
            try {
              return xe(R(y), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var pe = Object.prototype.hasOwnProperty, $e = {}, Ie = q.ReactDebugCurrentFrame;
    function _e(e) {
      if (e) {
        var t = e._owner, n = xe(e.type, e._source, t ? t.type : null);
        Ie.setExtraStackFrame(n);
      } else
        Ie.setExtraStackFrame(null);
    }
    function ir(e, t, n, u, y) {
      {
        var R = Function.call.bind(pe);
        for (var g in e)
          if (R(e, g)) {
            var h = void 0;
            try {
              if (typeof e[g] != "function") {
                var z = Error((u || "React class") + ": " + n + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              h = e[g](t, g, u, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (P) {
              h = P;
            }
            h && !(h instanceof Error) && (_e(y), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", n, g, typeof h), _e(null)), h instanceof Error && !(h.message in $e) && ($e[h.message] = !0, _e(y), k("Failed %s type: %s", n, h.message), _e(null));
          }
      }
    }
    var cr = Array.isArray;
    function Ce(e) {
      return cr(e);
    }
    function lr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function ur(e) {
      try {
        return Me(e), !1;
      } catch {
        return !0;
      }
    }
    function Me(e) {
      return "" + e;
    }
    function De(e) {
      if (ur(e))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", lr(e)), Me(e);
    }
    var he = q.ReactCurrentOwner, dr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ze, Le, Te;
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
        var n = M(he.current.type);
        Te[n] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(he.current.type), e.ref), Te[n] = !0);
      }
    }
    function hr(e, t) {
      {
        var n = function() {
          ze || (ze = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function gr(e, t) {
      {
        var n = function() {
          Le || (Le = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var vr = function(e, t, n, u, y, R, g) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: n,
        props: g,
        // Record the component responsible for creating this element.
        _owner: R
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
        value: u
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function br(e, t, n, u, y) {
      {
        var R, g = {}, h = null, z = null;
        n !== void 0 && (De(n), h = "" + n), fr(t) && (De(t.key), h = "" + t.key), mr(t) && (z = t.ref, pr(t, y));
        for (R in t)
          pe.call(t, R) && !dr.hasOwnProperty(R) && (g[R] = t[R]);
        if (e && e.defaultProps) {
          var P = e.defaultProps;
          for (R in P)
            g[R] === void 0 && (g[R] = P[R]);
        }
        if (h || z) {
          var F = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && hr(g, F), z && gr(g, F);
        }
        return vr(e, h, z, y, u, he.current, g);
      }
    }
    var ke = q.ReactCurrentOwner, Ue = q.ReactDebugCurrentFrame;
    function de(e) {
      if (e) {
        var t = e._owner, n = xe(e.type, e._source, t ? t.type : null);
        Ue.setExtraStackFrame(n);
      } else
        Ue.setExtraStackFrame(null);
    }
    var Ee;
    Ee = !1;
    function Ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
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
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
    }
    var We = {};
    function wr(e) {
      {
        var t = Be();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function Ve(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = wr(t);
        if (We[n])
          return;
        We[n] = !0;
        var u = "";
        e && e._owner && e._owner !== ke.current && (u = " It was passed a child from " + M(e._owner.type) + "."), de(e), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, u), de(null);
      }
    }
    function Ye(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Ce(e))
          for (var n = 0; n < e.length; n++) {
            var u = e[n];
            Ne(u) && Ve(u, t);
          }
        else if (Ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var y = ae(e);
          if (typeof y == "function" && y !== e.entries)
            for (var R = y.call(e), g; !(g = R.next()).done; )
              Ne(g.value) && Ve(g.value, t);
        }
      }
    }
    function xr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === U))
          n = t.propTypes;
        else
          return;
        if (n) {
          var u = M(t);
          ir(n, e.props, "prop", u, e);
        } else if (t.PropTypes !== void 0 && !Ee) {
          Ee = !0;
          var y = M(t);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var u = t[n];
          if (u !== "children" && u !== "key") {
            de(e), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), de(null);
            break;
          }
        }
        e.ref !== null && (de(e), k("Invalid attribute `ref` supplied to `React.Fragment`."), de(null));
      }
    }
    var He = {};
    function qe(e, t, n, u, y, R) {
      {
        var g = se(e);
        if (!g) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = yr(y);
          z ? h += z : h += Be();
          var P;
          e === null ? P = "null" : Ce(e) ? P = "array" : e !== void 0 && e.$$typeof === l ? (P = "<" + (M(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : P = typeof e, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", P, h);
        }
        var F = br(e, t, n, y, R);
        if (F == null)
          return F;
        if (g) {
          var K = t.children;
          if (K !== void 0)
            if (u)
              if (Ce(K)) {
                for (var me = 0; me < K.length; me++)
                  Ye(K[me], e);
                Object.freeze && Object.freeze(K);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(K, e);
        }
        if (pe.call(t, "key")) {
          var ie = M(e), Y = Object.keys(t).filter(function(Er) {
            return Er !== "key";
          }), Se = Y.length > 0 ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!He[ie + Se]) {
            var kr = Y.length > 0 ? "{" + Y.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Se, ie, kr, ie), He[ie + Se] = !0;
          }
        }
        return e === v ? _r(F) : xr(F), F;
      }
    }
    function jr(e, t, n) {
      return qe(e, t, n, !0);
    }
    function Rr(e, t, n) {
      return qe(e, t, n, !1);
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
  (l, f, v) => v ? v.toUpperCase() : f.toLowerCase()
), Ge = (c) => {
  const l = Fr(c);
  return l.charAt(0).toUpperCase() + l.slice(1);
}, sr = (...c) => c.filter((l, f, v) => !!l && l.trim() !== "" && v.indexOf(l) === f).join(" ").trim(), Or = (c) => {
  for (const l in c)
    if (l.startsWith("aria-") || l === "role" || l === "title")
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
    size: l = 24,
    strokeWidth: f = 2,
    absoluteStrokeWidth: v,
    className: x = "",
    children: s,
    iconNode: j,
    ...m
  }, b) => Pe(
    "svg",
    {
      ref: b,
      ...Ar,
      width: l,
      height: l,
      stroke: c,
      strokeWidth: v ? Number(f) * 24 / Number(l) : f,
      className: sr("lucide", x),
      ...!s && !Or(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ...j.map(([$, _]) => Pe($, _)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G = (c, l) => {
  const f = nr(
    ({ className: v, ...x }, s) => Pe($r, {
      ref: s,
      iconNode: l,
      className: sr(
        `lucide-${Pr(Ge(c))}`,
        `lucide-${c}`,
        v
      ),
      ...x
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
const Ir = [
  [
    "path",
    {
      d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
      key: "18u6gg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
], Xe = G("camera", Ir);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
], or = G("file", Mr);
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
const Lr = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], Ur = G("message-circle", Lr);
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
], ye = G("x", Qr), Qe = ({ message: c, showTimestamp: l = !1 }) => {
  const f = c.type === "user", v = (x, s) => {
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
          s
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
          s
        );
      case "audio":
        return /* @__PURE__ */ r.jsx("div", { className: "message-media-audio", style: { marginTop: "8px" }, children: /* @__PURE__ */ r.jsx("audio", { src: x.url, controls: !0, style: { width: "200px" } }) }, s);
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
        ] }, s);
    }
  };
  return /* @__PURE__ */ r.jsxs("div", { className: `message-bubble ${f ? "user" : "bot"}`, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "message-content", children: [
      c.content.trim() && /* @__PURE__ */ r.jsx("p", { children: c.content }),
      c.files && c.files.map((x, s) => v(x, s))
    ] }),
    l && /* @__PURE__ */ r.jsx("div", { className: "message-timestamp", children: c.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) })
  ] });
}, er = ({ visible: c }) => c ? /* @__PURE__ */ r.jsx("div", { className: "typing-indicator", children: /* @__PURE__ */ r.jsxs("div", { className: "typing-indicator__content", children: [
  /* @__PURE__ */ r.jsx("span", { className: "typing-indicator__dot" }),
  /* @__PURE__ */ r.jsx("span", { className: "typing-indicator__dot" }),
  /* @__PURE__ */ r.jsx("span", { className: "typing-indicator__dot" })
] }) }) : null;
function Oe() {
  const c = window.innerWidth, l = window.innerHeight, f = navigator.userAgent.toLowerCase(), v = "ontouchstart" in window || navigator.maxTouchPoints > 0, x = c < 768, s = v || x, j = f.includes("arc") || f.includes("company.thebrowser.browser") || window.ArcBrowser !== void 0, m = /safari/.test(f) && !/chrome/.test(f) && !j, b = /chrome/.test(f) && !j, $ = !!window.visualViewport;
  return {
    isMobile: s,
    isDesktop: !s,
    screenWidth: c,
    screenHeight: l,
    isArc: j,
    isSafari: m,
    isChrome: b,
    supportsVisualViewport: $
  };
}
const rr = ({
  onFilesSelected: c,
  maxFiles: l,
  maxFileSize: f,
  allowedTypes: v,
  enableCamera: x,
  enableAudio: s
}) => {
  const j = ce(null), m = ce(null), b = ce(null), [$, _] = L(!1), [U, A] = L(!1), [X, I] = L(null), [ee, ae] = L(0), [q, k] = L(null), [J, Z] = L(!1), le = ce(null), o = Oe();
  be(() => {
    const a = (i) => {
      le.current && !le.current.contains(i.target) && Z(!1);
    };
    return J && document.addEventListener("mousedown", a), () => {
      document.removeEventListener("mousedown", a);
    };
  }, [J]);
  const fe = () => `${Date.now()}-${Math.random()}`, Q = (a) => a.type.startsWith("image/") ? "image" : a.type.startsWith("video/") ? "video" : a.type.startsWith("audio/") ? "audio" : "document", ne = async (a, i = 1) => new Promise((p) => {
    const T = document.createElement("canvas"), O = T.getContext("2d"), C = new Image();
    C.onload = () => {
      let { width: B, height: D } = C;
      const W = 1920;
      B > D && B > W ? (D = D * W / B, B = W) : D > W && (B = B * W / D, D = W), T.width = B, T.height = D, O == null || O.drawImage(C, 0, 0, B, D);
      let V = 0.8;
      const we = () => {
        T.toBlob((ue) => {
          if (ue)
            if (ue.size / 1048576 > i && V > 0.1)
              V -= 0.1, we();
            else {
              const Re = new File([ue], a.name, {
                type: "image/jpeg",
                lastModified: Date.now()
              });
              p(Re);
            }
          else
            p(a);
        }, "image/jpeg", V);
      };
      we();
    }, C.onerror = () => p(a), C.src = URL.createObjectURL(a);
  }), se = async (a) => {
    const p = a.size / 1048576;
    if (p <= 1)
      return a;
    if (a.type.startsWith("image/"))
      try {
        return await ne(a, 1);
      } catch (T) {
        return console.warn("Image compression failed, using original:", T), a;
      }
    return p > 1 && console.warn(`File ${a.name} is ${p.toFixed(1)}MB, which may be too large`), a;
  }, re = async (a) => {
    const i = await se(a);
    return {
      file: i,
      id: fe(),
      type: Q(i),
      url: URL.createObjectURL(i),
      name: a.name,
      // Keep original name
      size: i.size
    };
  }, oe = (a) => a.size > f * 1024 * 1024 ? (alert(`File ${a.name} is too large. Maximum size is ${f}MB.`), !1) : v.length > 0 && !v.some(
    (p) => p === "*" || a.type.includes(p) || a.name.endsWith(p)
  ) ? (alert(`File type not allowed: ${a.type}`), !1) : !0, M = async (a) => {
    if (!a)
      return;
    const i = [], p = Array.from(a);
    for (const T of p) {
      if (i.length >= l) {
        alert(`Maximum ${l} files allowed`);
        break;
      }
      if (oe(T))
        try {
          const O = await re(T);
          i.push(O);
        } catch (O) {
          console.error("Error processing file:", T.name, O), alert(`Error processing file: ${T.name}`);
        }
    }
    i.length > 0 && c(i);
  }, H = () => {
    var a;
    (a = j.current) == null || a.click();
  }, te = async () => {
    if (console.log("📷 Opening camera..."), !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error("❌ getUserMedia not supported"), alert("Camera is not supported in this browser.");
      return;
    }
    if (o.isArc) {
      console.log("🌐 Arc browser detected - applying compatibility fixes...");
      try {
        const a = { video: { facingMode: "user" } };
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
      const a = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user"
        }
      });
      console.log("✅ Camera access granted, stream:", a), console.log("📊 Video tracks:", a.getVideoTracks().length), m.current ? (console.log("📹 Setting up video element..."), m.current.srcObject = a, m.current.autoplay = !0, m.current.playsInline = !0, m.current.muted = !0, m.current.onloadedmetadata = () => {
        var i, p;
        console.log("📹 Video metadata loaded, dimensions:", (i = m.current) == null ? void 0 : i.videoWidth, "x", (p = m.current) == null ? void 0 : p.videoHeight), m.current && m.current.play().then(() => {
          console.log("▶️ Video playing successfully"), _(!0);
        }).catch((T) => {
          console.error("❌ Error playing video:", T), alert("Could not start camera preview. Please try again.");
        });
      }, m.current.oncanplay = () => {
        console.log("📹 Video can play");
      }, m.current.onerror = (i) => {
        console.error("❌ Video element error:", i), alert("Video playback error.");
      }) : (console.error("❌ Video ref not available"), alert("Video element not ready. Please try again."));
    } catch (a) {
      console.error("❌ Error accessing camera:", a);
      const i = a;
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
          m.current && (m.current.srcObject = p, _(!0));
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
  }, d = async () => {
    if (!m.current || !b.current)
      return;
    const a = m.current, i = b.current, p = i.getContext("2d");
    p && (i.width = a.videoWidth, i.height = a.videoHeight, p.drawImage(a, 0, 0), i.toBlob(async (T) => {
      if (T) {
        const O = new File([T], `photo-${Date.now()}.jpg`, { type: "image/jpeg" });
        try {
          const C = await re(O);
          c([C]);
        } catch (C) {
          console.error("Error processing captured photo:", C), alert("Error processing captured photo");
        }
      }
    }, "image/jpeg", 0.8), N());
  }, N = () => {
    var a;
    (a = m.current) != null && a.srcObject && (m.current.srcObject.getTracks().forEach((p) => p.stop()), m.current.srcObject = null), _(!1);
  }, w = async () => {
    if (console.log("🎤 Starting audio recording..."), !MediaRecorder || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error("❌ MediaRecorder or getUserMedia not supported"), alert("Audio recording is not supported in this browser.");
      return;
    }
    if (o.isArc) {
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
      const a = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: !0,
          noiseSuppression: !0,
          sampleRate: 44100
        }
      });
      console.log("✅ Microphone access granted");
      let i = {};
      o.isArc ? MediaRecorder.isTypeSupported("audio/webm;codecs=opus") ? i.mimeType = "audio/webm;codecs=opus" : MediaRecorder.isTypeSupported("audio/mp4") && (i.mimeType = "audio/mp4") : MediaRecorder.isTypeSupported("audio/webm") && (i.mimeType = "audio/webm");
      const p = new MediaRecorder(a, i), T = [];
      p.ondataavailable = (C) => {
        console.log("📊 Audio data available:", C.data.size, "bytes"), C.data.size > 0 && T.push(C.data);
      }, p.onstop = async () => {
        console.log("🛑 Recording stopped, creating file...");
        const C = p.mimeType || "audio/wav", B = new Blob(T, { type: C }), D = C.includes("webm") ? "webm" : "wav", W = new File([B], `recording-${Date.now()}.${D}`, { type: C });
        console.log("📁 Created audio file:", W.name, W.size, "bytes");
        try {
          const V = await re(W);
          c([V]);
        } catch (V) {
          console.error("Error processing audio recording:", V), alert("Error processing audio recording");
        }
        a.getTracks().forEach((V) => V.stop());
      }, p.onerror = (C) => {
        console.error("❌ Recording error:", C), alert("Recording failed. Please try again.");
      }, p.start(1e3), I(p), A(!0), ae(0), console.log("🔴 Recording started");
      const O = setInterval(() => {
        ae((C) => C + 1);
      }, 1e3);
      k(O);
    } catch (a) {
      console.error("❌ Error accessing microphone:", a);
      const i = a;
      i.name === "NotAllowedError" ? alert("Microphone permission denied. Please allow microphone access and try again.") : i.name === "NotFoundError" ? alert("No microphone found. Please connect a microphone and try again.") : alert(`Could not access microphone: ${i.message || "Unknown error"}`);
    }
  }, E = () => {
    X && X.state === "recording" && X.stop(), A(!1), I(null), q && (clearInterval(q), k(null));
  }, S = (a) => {
    const i = Math.floor(a / 60), p = a % 60;
    return `${i}:${p.toString().padStart(2, "0")}`;
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "file-upload", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        ref: j,
        type: "file",
        multiple: !0,
        accept: v.length > 0 ? v.join(",") : "*",
        onChange: (a) => M(a.target.files),
        style: { display: "none" }
      }
    ),
    $ && /* @__PURE__ */ r.jsx("div", { className: "camera-modal", children: /* @__PURE__ */ r.jsxs("div", { className: "camera-container", children: [
      /* @__PURE__ */ r.jsx("video", { ref: m, autoPlay: !0, playsInline: !0, className: "camera-video" }),
      /* @__PURE__ */ r.jsx("canvas", { ref: b, style: { display: "none" } }),
      /* @__PURE__ */ r.jsxs("div", { className: "camera-controls", children: [
        /* @__PURE__ */ r.jsx("button", { onClick: d, className: "capture-button", children: /* @__PURE__ */ r.jsx(Xe, { size: 24 }) }),
        /* @__PURE__ */ r.jsx("button", { onClick: N, className: "close-camera-button", children: /* @__PURE__ */ r.jsx(ye, { size: 20 }) })
      ] })
    ] }) }),
    /* @__PURE__ */ r.jsx("div", { className: "upload-menu", ref: le, children: U ? /* @__PURE__ */ r.jsxs(
      "button",
      {
        onClick: E,
        className: "upload-button recording",
        title: `Recording ${S(ee)}`,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "recording-indicator" }),
          S(ee)
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
              H(), Z(!1);
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
              te(), Z(!1);
            },
            className: "upload-menu-item",
            title: "Take photo",
            children: [
              /* @__PURE__ */ r.jsx(Xe, { size: 16 }),
              /* @__PURE__ */ r.jsx("span", { children: "Camera" })
            ]
          }
        ),
        s && /* @__PURE__ */ r.jsxs(
          "button",
          {
            onClick: () => {
              w(), Z(!1);
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
  onRemoveFile: l
}) => {
  if (c.length === 0)
    return null;
  const f = (s) => {
    if (s === 0)
      return "0 B";
    const j = 1024, m = ["B", "KB", "MB", "GB"], b = Math.floor(Math.log(s) / Math.log(j));
    return parseFloat((s / Math.pow(j, b)).toFixed(1)) + " " + m[b];
  }, v = (s) => {
    switch (s) {
      case "image":
        return /* @__PURE__ */ r.jsx(zr, { size: 16 });
      case "video":
        return /* @__PURE__ */ r.jsx(Gr, { size: 16 });
      case "audio":
        return /* @__PURE__ */ r.jsx(Zr, { size: 16 });
      default:
        return /* @__PURE__ */ r.jsx(or, { size: 16 });
    }
  }, x = (s) => {
    switch (s.type) {
      case "image":
        return /* @__PURE__ */ r.jsx(
          "img",
          {
            src: s.url,
            alt: s.name,
            className: "media-preview-image"
          }
        );
      case "video":
        return /* @__PURE__ */ r.jsx(
          "video",
          {
            src: s.url,
            className: "media-preview-video",
            controls: !0,
            preload: "metadata"
          }
        );
      case "audio":
        return /* @__PURE__ */ r.jsx(
          "audio",
          {
            src: s.url,
            className: "media-preview-audio",
            controls: !0,
            preload: "metadata"
          }
        );
      default:
        return /* @__PURE__ */ r.jsxs("div", { className: "media-preview-document", children: [
          v(s.type),
          /* @__PURE__ */ r.jsx("span", { className: "document-name", children: s.name })
        ] });
    }
  };
  return /* @__PURE__ */ r.jsx("div", { className: "media-preview", children: /* @__PURE__ */ r.jsx("div", { className: "media-preview-list", children: c.map((s) => /* @__PURE__ */ r.jsxs("div", { className: "media-preview-item", children: [
    /* @__PURE__ */ r.jsx("div", { className: "media-preview-content", children: x(s) }),
    /* @__PURE__ */ r.jsxs("div", { className: "media-preview-info", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "media-preview-details", children: [
        /* @__PURE__ */ r.jsx("span", { className: "file-name", title: s.name, children: s.name.length > 20 ? `${s.name.substring(0, 20)}...` : s.name }),
        /* @__PURE__ */ r.jsx("span", { className: "file-size", children: f(s.size) })
      ] }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: () => l(s.id),
          className: "remove-file-button",
          title: "Remove file",
          children: /* @__PURE__ */ r.jsx(ye, { size: 14 })
        }
      )
    ] })
  ] }, s.id)) }) });
}, et = ({
  isOpen: c,
  onClick: l,
  position: f,
  primaryColor: v
}) => {
  const [x, s] = L(!1);
  be(() => {
    if (c)
      s(!1);
    else {
      const b = setTimeout(() => {
        s(!0);
      }, 5e3);
      return () => clearTimeout(b);
    }
  }, [c]);
  const j = () => {
    s(!1), l();
  }, m = () => {
    s(!1), l();
  };
  return /* @__PURE__ */ r.jsxs("div", { className: `chat-toggle-container chat-toggle-button--${f}`, children: [
    x && !c && /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: `chat-popup-message chat-popup-message--${f}`,
        onClick: m,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "chat-popup-content", children: "Hey! How can I help you?" }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              className: "chat-popup-close",
              onClick: (b) => {
                b.stopPropagation(), s(!1);
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
        onClick: j,
        className: "chat-toggle-button",
        style: {
          backgroundColor: v,
          "--chat-primary": v
        },
        "aria-label": c ? "Close chat" : "Open chat",
        children: c ? /* @__PURE__ */ r.jsx(ye, { size: 24, className: "toggle-icon" }) : /* @__PURE__ */ r.jsx(Ur, { size: 24, className: "toggle-icon" })
      }
    )
  ] });
};
function rt() {
  const [c, l] = L(() => typeof window > "u" ? {
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
      l(Oe());
    };
    return window.addEventListener("resize", f), window.addEventListener("orientationchange", f), () => {
      window.removeEventListener("resize", f), window.removeEventListener("orientationchange", f);
    };
  }, []), c;
}
const at = ({
  config: c,
  onMessage: l,
  onError: f,
  onClose: v
}) => {
  const [x, s] = L([]), [j, m] = L(""), [b, $] = L(!1), [_, U] = L(!1), [A, X] = L(c.initialState !== "closed"), [I, ee] = L([]), [ae] = L(() => {
    let d = localStorage.getItem("n8n_session_id");
    return d || (d = "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9), localStorage.setItem("n8n_session_id", d)), d;
  }), q = rt(), k = ce(null), J = ce(null), Z = ce(null), o = { ...{
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
    var d;
    (d = k.current) == null || d.scrollIntoView();
  };
  be(() => {
    fe();
  }, [x]), be(() => {
    if (A) {
      const d = setTimeout(() => {
        J.current && J.current.focus();
      }, 100);
      return () => clearTimeout(d);
    }
  }, [A]);
  const Q = () => `${Date.now()}-${Math.random()}`, ne = async (d, N) => {
    try {
      if (N) {
        const w = new FormData();
        w.append("sessionId", ae), w.append("chatInput", d), w.append("data", N.file);
        const E = await fetch(c.n8nWebhookUrl, {
          method: "POST",
          body: w
        });
        if (!E.ok)
          throw new Error(`HTTP error! status: ${E.status}`);
        const S = await E.json();
        return S.output || S.response || S.message || S.text || "Response received";
      } else {
        const w = {
          sessionId: ae,
          chatInput: d
        }, E = await fetch(c.n8nWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(w)
        });
        if (!E.ok)
          throw new Error(`HTTP error! status: ${E.status}`);
        const S = await E.json();
        return S.output || S.response || S.message || S.text || "Response received";
      }
    } catch (w) {
      throw console.error("Error sending to n8n:", w), w;
    }
  }, se = je(async () => {
    if (!j.trim() && I.length === 0 || _)
      return;
    const d = j.trim() || "", N = [...I];
    m(""), ee([]), U(!0), c.showTypingIndicator && $(!0);
    try {
      for (let w = 0; w < N.length; w++) {
        const E = N[w], a = w === N.length - 1 && d ? d : "", i = {
          id: Q(),
          type: "user",
          content: a,
          timestamp: /* @__PURE__ */ new Date(),
          files: [E]
        };
        s((O) => [...O, i]), l == null || l(i);
        const p = await ne(a, E), T = {
          id: Q(),
          type: "bot",
          content: p,
          timestamp: /* @__PURE__ */ new Date()
        };
        s((O) => [...O, T]), l == null || l(T);
      }
      if (d && N.length === 0) {
        const w = {
          id: Q(),
          type: "user",
          content: d,
          timestamp: /* @__PURE__ */ new Date()
        };
        s((a) => [...a, w]), l == null || l(w);
        const E = await ne(d), S = {
          id: Q(),
          type: "bot",
          content: E,
          timestamp: /* @__PURE__ */ new Date()
        };
        s((a) => [...a, S]), l == null || l(S);
      }
    } catch (w) {
      const E = {
        id: Q(),
        type: "bot",
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: /* @__PURE__ */ new Date()
      };
      s((S) => [...S, E]), f == null || f(w);
    } finally {
      U(!1), $(!1), N.forEach((w) => URL.revokeObjectURL(w.url));
    }
  }, [j, I, _, c, l, f]), re = (d) => {
    d.key === "Enter" && !d.shiftKey && (d.preventDefault(), se());
  }, oe = je((d) => {
    ee((N) => [...N, ...d].slice(0, o.maxFiles));
  }, [o.maxFiles]), M = je((d) => {
    ee((N) => {
      const w = N.find((E) => E.id === d);
      return w && URL.revokeObjectURL(w.url), N.filter((E) => E.id !== d);
    });
  }, []), H = je(() => {
    X((d) => {
      const N = !d;
      return !N && v && v(), N;
    });
  }, [v]);
  return o.position !== "inline" && o.showToggleButton ? /* @__PURE__ */ r.jsxs("div", { className: `chat-widget-container chat-widget-container--${o.position}${A ? "" : " chat-closed"}`, children: [
    /* @__PURE__ */ r.jsx(
      et,
      {
        isOpen: A,
        onClick: H,
        position: o.position,
        primaryColor: o.colors.primary || "#007bff"
      }
    ),
    A && /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: Z,
        className: `chat-embed chat-embed--${o.theme} chat-embed--${o.position}${q.isMobile ? " chat-embed--mobile" : ""} chat-embed--open`,
        style: {
          "--chat-primary": o.colors.primary,
          "--chat-background": o.colors.background,
          "--chat-user-bubble": o.colors.userBubble,
          "--chat-bot-bubble": o.colors.botBubble,
          "--chat-text": o.colors.text,
          "--chat-width": `${o.width}px`,
          "--chat-height": `${o.height}px`,
          zIndex: o.zIndex
        },
        children: [
          /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__header", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__header-content", children: [
              /* @__PURE__ */ r.jsx("h3", { className: "chat-embed__title", children: o.title }),
              o.subtitle && /* @__PURE__ */ r.jsx("p", { className: "chat-embed__subtitle", children: o.subtitle })
            ] }),
            o.position !== "inline" && /* @__PURE__ */ r.jsx(
              "button",
              {
                className: "chat-embed__close-button",
                onClick: H,
                "aria-label": "Close chat",
                children: /* @__PURE__ */ r.jsx(ye, { size: 18 })
              }
            )
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__messages", children: [
            x.map((d) => /* @__PURE__ */ r.jsx(
              Qe,
              {
                message: d,
                showTimestamp: o.showTimestamps
              },
              d.id
            )),
            /* @__PURE__ */ r.jsx(er, { visible: b }),
            /* @__PURE__ */ r.jsx("div", { ref: k })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__input-area", children: [
            I.length > 0 && /* @__PURE__ */ r.jsx(
              tr,
              {
                files: I,
                onRemoveFile: M
              }
            ),
            /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__input-row", children: [
              o.enableFileUpload && /* @__PURE__ */ r.jsx(
                rr,
                {
                  onFilesSelected: oe,
                  maxFiles: o.maxFiles,
                  maxFileSize: o.maxFileSize,
                  allowedTypes: o.allowedFileTypes,
                  enableCamera: o.enableCamera,
                  enableAudio: o.enableAudio
                }
              ),
              /* @__PURE__ */ r.jsx("div", { className: "chat-embed__input-container", children: /* @__PURE__ */ r.jsx(
                "textarea",
                {
                  ref: J,
                  className: "chat-embed__input",
                  value: j,
                  onChange: (d) => m(d.target.value),
                  onKeyPress: re,
                  placeholder: o.placeholder,
                  disabled: _,
                  rows: 1,
                  style: { resize: "none" }
                }
              ) }),
              /* @__PURE__ */ r.jsx(
                "button",
                {
                  className: "chat-embed__send-button",
                  onClick: se,
                  disabled: _ || !j.trim() && I.length === 0,
                  children: _ ? /* @__PURE__ */ r.jsx("div", { className: "chat-embed__loading-spinner" }) : /* @__PURE__ */ r.jsx(Ze, { size: 18, className: "chat-embed__send-icon" })
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
      className: `chat-embed chat-embed--${o.theme} chat-embed--${o.position}${q.isMobile ? " chat-embed--mobile" : ""}`,
      style: {
        "--chat-primary": o.colors.primary,
        "--chat-background": o.colors.background,
        "--chat-user-bubble": o.colors.userBubble,
        "--chat-bot-bubble": o.colors.botBubble,
        "--chat-text": o.colors.text,
        "--chat-width": `${o.width}px`,
        "--chat-height": `${o.height}px`,
        zIndex: o.zIndex
      },
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__header", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__header-content", children: [
            /* @__PURE__ */ r.jsx("h3", { className: "chat-embed__title", children: o.title }),
            o.subtitle && /* @__PURE__ */ r.jsx("p", { className: "chat-embed__subtitle", children: o.subtitle })
          ] }),
          o.position !== "inline" && /* @__PURE__ */ r.jsx(
            "button",
            {
              className: "chat-embed__close-button",
              onClick: H,
              "aria-label": "Close chat",
              children: /* @__PURE__ */ r.jsx(ye, { size: 18 })
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__messages", children: [
          x.map((d) => /* @__PURE__ */ r.jsx(
            Qe,
            {
              message: d,
              showTimestamp: o.showTimestamps
            },
            d.id
          )),
          /* @__PURE__ */ r.jsx(er, { visible: b }),
          /* @__PURE__ */ r.jsx("div", { ref: k })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__input-area", children: [
          I.length > 0 && /* @__PURE__ */ r.jsx(
            tr,
            {
              files: I,
              onRemoveFile: M
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { className: "chat-embed__input-row", children: [
            o.enableFileUpload && /* @__PURE__ */ r.jsx(
              rr,
              {
                onFilesSelected: oe,
                maxFiles: o.maxFiles,
                maxFileSize: o.maxFileSize,
                allowedTypes: o.allowedFileTypes,
                enableCamera: o.enableCamera,
                enableAudio: o.enableAudio
              }
            ),
            /* @__PURE__ */ r.jsx("div", { className: "chat-embed__input-container", children: /* @__PURE__ */ r.jsx(
              "textarea",
              {
                ref: J,
                className: "chat-embed__input",
                value: j,
                onChange: (d) => m(d.target.value),
                onKeyPress: re,
                placeholder: o.placeholder,
                disabled: _,
                rows: 1,
                style: { resize: "none" }
              }
            ) }),
            /* @__PURE__ */ r.jsx(
              "button",
              {
                className: "chat-embed__send-button",
                onClick: se,
                disabled: _ || !j.trim() && I.length === 0,
                children: _ ? /* @__PURE__ */ r.jsx("div", { className: "chat-embed__loading-spinner" }) : /* @__PURE__ */ r.jsx(Ze, { size: 18, className: "chat-embed__send-icon" })
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
