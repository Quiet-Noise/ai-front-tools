import A, { forwardRef as ba, createElement as cn, useRef as Ke, useState as de, useEffect as Je, useCallback as be, useMemo as Ca } from "react";
function Pa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fn = { exports: {} }, ft = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function xi() {
  if (Vn)
    return ft;
  Vn = 1;
  var e = A, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(d, s, l) {
    var f, $ = {}, h = null, m = null;
    l !== void 0 && (h = "" + l), s.key !== void 0 && (h = "" + s.key), s.ref !== void 0 && (m = s.ref);
    for (f in s)
      r.call(s, f) && !i.hasOwnProperty(f) && ($[f] = s[f]);
    if (d && d.defaultProps)
      for (f in s = d.defaultProps, s)
        $[f] === void 0 && ($[f] = s[f]);
    return { $$typeof: t, type: d, key: h, ref: m, props: $, _owner: a.current };
  }
  return ft.Fragment = n, ft.jsx = o, ft.jsxs = o, ft;
}
var $t = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function Ei() {
  return Kn || (Kn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = A, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), d = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), P = Symbol.iterator, E = "@@iterator";
    function y(u) {
      if (u === null || typeof u != "object")
        return null;
      var g = P && u[P] || u[E];
      return typeof g == "function" ? g : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(u) {
      {
        for (var g = arguments.length, O = new Array(g > 1 ? g - 1 : 0), F = 1; F < g; F++)
          O[F - 1] = arguments[F];
        j("error", u, O);
      }
    }
    function j(u, g, O) {
      {
        var F = x.ReactDebugCurrentFrame, q = F.getStackAddendum();
        q !== "" && (g += "%s", O = O.concat([q]));
        var Q = O.map(function(Y) {
          return String(Y);
        });
        Q.unshift("Warning: " + g), Function.prototype.apply.call(console[u], console, Q);
      }
    }
    var L = !1, v = !1, V = !1, ee = !1, te = !1, ne;
    ne = Symbol.for("react.module.reference");
    function $e(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === r || u === i || te || u === a || u === l || u === f || ee || u === m || L || v || V || typeof u == "object" && u !== null && (u.$$typeof === h || u.$$typeof === $ || u.$$typeof === o || u.$$typeof === d || u.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === ne || u.getModuleId !== void 0));
    }
    function ge(u, g, O) {
      var F = u.displayName;
      if (F)
        return F;
      var q = g.displayName || g.name || "";
      return q !== "" ? O + "(" + q + ")" : O;
    }
    function Ie(u) {
      return u.displayName || "Context";
    }
    function re(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case l:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case d:
            var g = u;
            return Ie(g) + ".Consumer";
          case o:
            var O = u;
            return Ie(O._context) + ".Provider";
          case s:
            return ge(u, u.render, "ForwardRef");
          case $:
            var F = u.displayName || null;
            return F !== null ? F : re(u.type) || "Memo";
          case h: {
            var q = u, Q = q._payload, Y = q._init;
            try {
              return re(Y(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ae = Object.assign, ie = 0, ce, fe, pe, Ce, b, w, U;
    function k() {
    }
    k.__reactDisabledLog = !0;
    function M() {
      {
        if (ie === 0) {
          ce = console.log, fe = console.info, pe = console.warn, Ce = console.error, b = console.group, w = console.groupCollapsed, U = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: k,
            writable: !0
          };
          Object.defineProperties(console, {
            info: u,
            log: u,
            warn: u,
            error: u,
            group: u,
            groupCollapsed: u,
            groupEnd: u
          });
        }
        ie++;
      }
    }
    function G() {
      {
        if (ie--, ie === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ae({}, u, {
              value: ce
            }),
            info: ae({}, u, {
              value: fe
            }),
            warn: ae({}, u, {
              value: pe
            }),
            error: ae({}, u, {
              value: Ce
            }),
            group: ae({}, u, {
              value: b
            }),
            groupCollapsed: ae({}, u, {
              value: w
            }),
            groupEnd: ae({}, u, {
              value: U
            })
          });
        }
        ie < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var D = x.ReactCurrentDispatcher, W;
    function p(u, g, O) {
      {
        if (W === void 0)
          try {
            throw Error();
          } catch (q) {
            var F = q.stack.trim().match(/\n( *(at )?)/);
            W = F && F[1] || "";
          }
        return `
` + W + u;
      }
    }
    var H = !1, R;
    {
      var ue = typeof WeakMap == "function" ? WeakMap : Map;
      R = new ue();
    }
    function S(u, g) {
      if (!u || H)
        return "";
      {
        var O = R.get(u);
        if (O !== void 0)
          return O;
      }
      var F;
      H = !0;
      var q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = D.current, D.current = null, M();
      try {
        if (g) {
          var Y = function() {
            throw Error();
          };
          if (Object.defineProperty(Y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Y, []);
            } catch (ve) {
              F = ve;
            }
            Reflect.construct(u, [], Y);
          } else {
            try {
              Y.call();
            } catch (ve) {
              F = ve;
            }
            u.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ve) {
            F = ve;
          }
          u();
        }
      } catch (ve) {
        if (ve && F && typeof ve.stack == "string") {
          for (var K = ve.stack.split(`
`), ye = F.stack.split(`
`), oe = K.length - 1, se = ye.length - 1; oe >= 1 && se >= 0 && K[oe] !== ye[se]; )
            se--;
          for (; oe >= 1 && se >= 0; oe--, se--)
            if (K[oe] !== ye[se]) {
              if (oe !== 1 || se !== 1)
                do
                  if (oe--, se--, se < 0 || K[oe] !== ye[se]) {
                    var Oe = `
` + K[oe].replace(" at new ", " at ");
                    return u.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", u.displayName)), typeof u == "function" && R.set(u, Oe), Oe;
                  }
                while (oe >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        H = !1, D.current = Q, G(), Error.prepareStackTrace = q;
      }
      var qe = u ? u.displayName || u.name : "", Ve = qe ? p(qe) : "";
      return typeof u == "function" && R.set(u, Ve), Ve;
    }
    function me(u, g, O) {
      return S(u, !1);
    }
    function Te(u) {
      var g = u.prototype;
      return !!(g && g.isReactComponent);
    }
    function Ae(u, g, O) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return S(u, Te(u));
      if (typeof u == "string")
        return p(u);
      switch (u) {
        case l:
          return p("Suspense");
        case f:
          return p("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case s:
            return me(u.render);
          case $:
            return Ae(u.type, g, O);
          case h: {
            var F = u, q = F._payload, Q = F._init;
            try {
              return Ae(Q(q), g, O);
            } catch {
            }
          }
        }
      return "";
    }
    var Ge = Object.prototype.hasOwnProperty, ot = {}, dt = x.ReactDebugCurrentFrame;
    function We(u) {
      if (u) {
        var g = u._owner, O = Ae(u.type, u._source, g ? g.type : null);
        dt.setExtraStackFrame(O);
      } else
        dt.setExtraStackFrame(null);
    }
    function Tt(u, g, O, F, q) {
      {
        var Q = Function.call.bind(Ge);
        for (var Y in u)
          if (Q(u, Y)) {
            var K = void 0;
            try {
              if (typeof u[Y] != "function") {
                var ye = Error((F || "React class") + ": " + O + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ye.name = "Invariant Violation", ye;
              }
              K = u[Y](g, Y, F, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (oe) {
              K = oe;
            }
            K && !(K instanceof Error) && (We(q), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", O, Y, typeof K), We(null)), K instanceof Error && !(K.message in ot) && (ot[K.message] = !0, We(q), T("Failed %s type: %s", O, K.message), We(null));
          }
      }
    }
    var At = Array.isArray;
    function Ye(u) {
      return At(u);
    }
    function Rt(u) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, O = g && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return O;
      }
    }
    function ut(u) {
      try {
        return st(u), !1;
      } catch {
        return !0;
      }
    }
    function st(u) {
      return "" + u;
    }
    function jt(u) {
      if (ut(u))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rt(u)), st(u);
    }
    var De = x.ReactCurrentOwner, N = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, I, _, B;
    B = {};
    function J(u) {
      if (Ge.call(u, "ref")) {
        var g = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function z(u) {
      if (Ge.call(u, "key")) {
        var g = Object.getOwnPropertyDescriptor(u, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Pe(u, g) {
      if (typeof u.ref == "string" && De.current && g && De.current.stateNode !== g) {
        var O = re(De.current.type);
        B[O] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', re(De.current.type), u.ref), B[O] = !0);
      }
    }
    function Re(u, g) {
      {
        var O = function() {
          I || (I = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        O.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: O,
          configurable: !0
        });
      }
    }
    function ke(u, g) {
      {
        var O = function() {
          _ || (_ = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        O.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var Ne = function(u, g, O, F, q, Q, Y) {
      var K = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: u,
        key: g,
        ref: O,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: Q
      };
      return K._store = {}, Object.defineProperty(K._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(K, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.defineProperty(K, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.freeze && (Object.freeze(K.props), Object.freeze(K)), K;
    };
    function Jt(u, g, O, F, q) {
      {
        var Q, Y = {}, K = null, ye = null;
        O !== void 0 && (jt(O), K = "" + O), z(g) && (jt(g.key), K = "" + g.key), J(g) && (ye = g.ref, Pe(g, q));
        for (Q in g)
          Ge.call(g, Q) && !N.hasOwnProperty(Q) && (Y[Q] = g[Q]);
        if (u && u.defaultProps) {
          var oe = u.defaultProps;
          for (Q in oe)
            Y[Q] === void 0 && (Y[Q] = oe[Q]);
        }
        if (K || ye) {
          var se = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          K && Re(Y, se), ye && ke(Y, se);
        }
        return Ne(u, K, ye, q, F, De.current, Y);
      }
    }
    var Le = x.ReactCurrentOwner, ze = x.ReactDebugCurrentFrame;
    function Se(u) {
      if (u) {
        var g = u._owner, O = Ae(u.type, u._source, g ? g.type : null);
        ze.setExtraStackFrame(O);
      } else
        ze.setExtraStackFrame(null);
    }
    var lt;
    lt = !1;
    function Be(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function Ft() {
      {
        if (Le.current) {
          var u = re(Le.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function ct(u) {
      {
        if (u !== void 0) {
          var g = u.fileName.replace(/^.*[\\\/]/, ""), O = u.lineNumber;
          return `

Check your code at ` + g + ":" + O + ".";
        }
        return "";
      }
    }
    var Ln = {};
    function gi(u) {
      {
        var g = Ft();
        if (!g) {
          var O = typeof u == "string" ? u : u.displayName || u.name;
          O && (g = `

Check the top-level render call using <` + O + ">.");
        }
        return g;
      }
    }
    function Bn(u, g) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var O = gi(g);
        if (Ln[O])
          return;
        Ln[O] = !0;
        var F = "";
        u && u._owner && u._owner !== Le.current && (F = " It was passed a child from " + re(u._owner.type) + "."), Se(u), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, F), Se(null);
      }
    }
    function Un(u, g) {
      {
        if (typeof u != "object")
          return;
        if (Ye(u))
          for (var O = 0; O < u.length; O++) {
            var F = u[O];
            Be(F) && Bn(F, g);
          }
        else if (Be(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var q = y(u);
          if (typeof q == "function" && q !== u.entries)
            for (var Q = q.call(u), Y; !(Y = Q.next()).done; )
              Be(Y.value) && Bn(Y.value, g);
        }
      }
    }
    function vi(u) {
      {
        var g = u.type;
        if (g == null || typeof g == "string")
          return;
        var O;
        if (typeof g == "function")
          O = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === $))
          O = g.propTypes;
        else
          return;
        if (O) {
          var F = re(g);
          Tt(O, u.props, "prop", F, u);
        } else if (g.PropTypes !== void 0 && !lt) {
          lt = !0;
          var q = re(g);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function bi(u) {
      {
        for (var g = Object.keys(u.props), O = 0; O < g.length; O++) {
          var F = g[O];
          if (F !== "children" && F !== "key") {
            Se(u), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), Se(null);
            break;
          }
        }
        u.ref !== null && (Se(u), T("Invalid attribute `ref` supplied to `React.Fragment`."), Se(null));
      }
    }
    var Gn = {};
    function Wn(u, g, O, F, q, Q) {
      {
        var Y = $e(u);
        if (!Y) {
          var K = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ye = ct(q);
          ye ? K += ye : K += Ft();
          var oe;
          u === null ? oe = "null" : Ye(u) ? oe = "array" : u !== void 0 && u.$$typeof === t ? (oe = "<" + (re(u.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof u, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, K);
        }
        var se = Jt(u, g, O, q, Q);
        if (se == null)
          return se;
        if (Y) {
          var Oe = g.children;
          if (Oe !== void 0)
            if (F)
              if (Ye(Oe)) {
                for (var qe = 0; qe < Oe.length; qe++)
                  Un(Oe[qe], u);
                Object.freeze && Object.freeze(Oe);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Un(Oe, u);
        }
        if (Ge.call(g, "key")) {
          var Ve = re(u), ve = Object.keys(g).filter(function(wi) {
            return wi !== "key";
          }), Qt = ve.length > 0 ? "{key: someKey, " + ve.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Gn[Ve + Qt]) {
            var Oi = ve.length > 0 ? "{" + ve.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Qt, Ve, Oi, Ve), Gn[Ve + Qt] = !0;
          }
        }
        return u === r ? bi(se) : vi(se), se;
      }
    }
    function Ci(u, g, O) {
      return Wn(u, g, O, !0);
    }
    function Pi(u, g, O) {
      return Wn(u, g, O, !1);
    }
    var Ni = Pi, Si = Ci;
    $t.Fragment = r, $t.jsx = Ni, $t.jsxs = Si;
  }()), $t;
}
process.env.NODE_ENV === "production" ? fn.exports = xi() : fn.exports = Ei();
var c = fn.exports;
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _i = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ii = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Hn = (e) => {
  const t = Ii(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Na = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), Ti = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ai = {
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
const Ri = ba(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: a = "",
    children: i,
    iconNode: o,
    ...d
  }, s) => cn(
    "svg",
    {
      ref: s,
      ...Ai,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Na("lucide", a),
      ...!i && !Ti(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...o.map(([l, f]) => cn(l, f)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _e = (e, t) => {
  const n = ba(
    ({ className: r, ...a }, i) => cn(Ri, {
      ref: i,
      iconNode: t,
      className: Na(
        `lucide-${_i(Hn(e))}`,
        `lucide-${e}`,
        r
      ),
      ...a
    })
  );
  return n.displayName = Hn(e), n;
};
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ji = [
  [
    "path",
    {
      d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
      key: "18u6gg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
], Fi = _e("camera", ji);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mi = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
], Sa = _e("file", Mi);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Di = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], ki = _e("image", Di);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Li = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], Bi = _e("message-circle", Li);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ui = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], Yn = _e("mic", Ui);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gi = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
], Wi = _e("paperclip", Gi);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vi = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], pt = _e("send", Vi);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ki = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], zn = _e("trash-2", Ki);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hi = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], Yi = _e("video", Hi);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zi = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], qi = _e("volume-2", zi);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xi = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], mt = _e("x", Xi), Zi = (e) => {
  let t = e;
  const n = {};
  let r = 0;
  return t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (a, i, o) => {
    const d = encodeURI(o.trim()), s = `XXXXXURLPLACEHOLDER${r++}XXXXX`;
    return n[s] = `<a href="${d}" target="_blank" rel="noopener noreferrer">${i}</a>`, s;
  }), t = t.replace(/(https?:\/\/[^\s<]+)/g, (a, i) => {
    const o = encodeURI(i.trim()), d = `XXXXXURLPLACEHOLDER${r++}XXXXX`;
    return n[d] = `<a href="${o}" target="_blank" rel="noopener noreferrer">${i}</a>`, d;
  }), t = t.replace(/\*\*((?:(?!\*\*).)+)\*\*/g, "<strong>$1</strong>"), t = t.replace(/__((?:(?!__).)+)__/g, "<strong>$1</strong>"), t = t.replace(/\*([^*\n]+?)\*/g, "<em>$1</em>"), t = t.replace(new RegExp("(?<!_)_([^_\\n]+?)_(?!_)", "g"), "<em>$1</em>"), t = t.replace(/\n/g, "<br>"), Object.keys(n).forEach((a) => {
    t = t.replace(a, n[a]);
  }), t;
}, qn = ({ message: e, showTimestamp: t = !1 }) => {
  const n = e.type === "user", r = (a, i) => {
    switch (a.type) {
      case "image":
        return /* @__PURE__ */ c.jsx(
          "img",
          {
            src: a.url,
            alt: a.name,
            className: "message-media-image",
            style: { maxWidth: "200px", maxHeight: "150px", borderRadius: "8px", marginTop: "8px" }
          },
          i
        );
      case "video":
        return /* @__PURE__ */ c.jsx(
          "video",
          {
            src: a.url,
            controls: !0,
            className: "message-media-video",
            style: { maxWidth: "200px", maxHeight: "150px", borderRadius: "8px", marginTop: "8px" }
          },
          i
        );
      case "audio":
        return /* @__PURE__ */ c.jsx("div", { className: "message-media-audio", style: { marginTop: "8px" }, children: /* @__PURE__ */ c.jsx("audio", { src: a.url, controls: !0, style: { width: "200px" } }) }, i);
      default:
        return /* @__PURE__ */ c.jsxs("div", { className: "message-media-document", style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px",
          backgroundColor: "rgba(0,0,0,0.1)",
          borderRadius: "8px",
          marginTop: "8px",
          maxWidth: "200px"
        }, children: [
          /* @__PURE__ */ c.jsx(Sa, { size: 16 }),
          /* @__PURE__ */ c.jsx("span", { style: { fontSize: "14px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: a.name })
        ] }, i);
    }
  };
  return /* @__PURE__ */ c.jsxs("div", { className: `message-bubble ${n ? "user" : "bot"}`, children: [
    /* @__PURE__ */ c.jsxs("div", { className: "message-content", children: [
      e.content.trim() && (n ? /* @__PURE__ */ c.jsx("p", { children: e.content }) : /* @__PURE__ */ c.jsx("p", { dangerouslySetInnerHTML: { __html: Zi(e.content) } })),
      e.files && e.files.map((a, i) => r(a, i))
    ] }),
    t && /* @__PURE__ */ c.jsx("div", { className: "message-timestamp", children: e.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) })
  ] });
}, Xn = ({ visible: e }) => e ? /* @__PURE__ */ c.jsx("div", { className: "typing-indicator", children: /* @__PURE__ */ c.jsxs("div", { className: "typing-indicator__content", children: [
  /* @__PURE__ */ c.jsx("span", { className: "typing-indicator__dot" }),
  /* @__PURE__ */ c.jsx("span", { className: "typing-indicator__dot" }),
  /* @__PURE__ */ c.jsx("span", { className: "typing-indicator__dot" })
] }) }) : null, Zn = ({
  onFilesSelected: e,
  maxFiles: t,
  maxFileSize: n,
  allowedTypes: r
}) => {
  const a = Ke(null), i = () => `${Date.now()}-${Math.random()}`, o = (m) => m.type.startsWith("image/") ? "image" : m.type.startsWith("video/") ? "video" : m.type.startsWith("audio/") ? "audio" : "document", d = async (m, P = 1) => new Promise((E) => {
    const y = document.createElement("canvas"), x = y.getContext("2d"), T = new Image();
    T.onload = () => {
      let { width: j, height: L } = T;
      const v = 1920;
      j > L && j > v ? (L = L * v / j, j = v) : L > v && (j = j * v / L, L = v), y.width = j, y.height = L, x == null || x.drawImage(T, 0, 0, j, L);
      let V = 0.8;
      const ee = () => {
        y.toBlob((te) => {
          if (te)
            if (te.size / 1048576 > P && V > 0.1)
              V -= 0.1, ee();
            else {
              const $e = new File([te], m.name, {
                type: "image/jpeg",
                lastModified: Date.now()
              });
              E($e);
            }
          else
            E(m);
        }, "image/jpeg", V);
      };
      ee();
    }, T.onerror = () => E(m), T.src = URL.createObjectURL(m);
  }), s = async (m) => {
    const E = m.size / 1048576;
    if (E <= 1)
      return m;
    if (m.type.startsWith("image/"))
      try {
        return await d(m, 1);
      } catch (y) {
        return console.warn("Image compression failed, using original:", y), m;
      }
    return E > 1 && console.warn(`File ${m.name} is ${E.toFixed(1)}MB, which may be too large`), m;
  }, l = async (m) => {
    const P = await s(m);
    return {
      file: P,
      id: i(),
      type: o(P),
      url: URL.createObjectURL(P),
      name: m.name,
      // Keep original name
      size: P.size
    };
  }, f = (m) => m.size > n * 1024 * 1024 ? (alert(`File ${m.name} is too large. Maximum size is ${n}MB.`), !1) : r.length > 0 && !r.some(
    (E) => E === "*" || m.type.includes(E) || m.name.endsWith(E)
  ) ? (alert(`File type not allowed: ${m.type}`), !1) : !0, $ = async (m) => {
    if (!m)
      return;
    const P = [], E = Array.from(m);
    for (const y of E) {
      if (P.length >= t) {
        alert(`Maximum ${t} files allowed`);
        break;
      }
      if (f(y))
        try {
          const x = await l(y);
          P.push(x);
        } catch (x) {
          console.error("Error processing file:", y.name, x), alert(`Error processing file: ${y.name}`);
        }
    }
    P.length > 0 && e(P), a.current && (a.current.value = "");
  }, h = () => {
    var m;
    (m = a.current) == null || m.click();
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "file-upload", children: [
    /* @__PURE__ */ c.jsx(
      "input",
      {
        ref: a,
        type: "file",
        multiple: !0,
        accept: r.length > 0 ? r.join(",") : "*",
        onChange: (m) => $(m.target.files),
        style: { display: "none" }
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: h,
        className: "upload-button",
        title: "Attach files",
        children: /* @__PURE__ */ c.jsx(Wi, { size: 18 })
      }
    )
  ] });
}, Jn = ({
  files: e,
  onRemoveFile: t
}) => {
  if (e.length === 0)
    return null;
  const n = (i) => {
    if (i === 0)
      return "0 B";
    const o = 1024, d = ["B", "KB", "MB", "GB"], s = Math.floor(Math.log(i) / Math.log(o));
    return parseFloat((i / Math.pow(o, s)).toFixed(1)) + " " + d[s];
  }, r = (i) => {
    switch (i) {
      case "image":
        return /* @__PURE__ */ c.jsx(ki, { size: 16 });
      case "video":
        return /* @__PURE__ */ c.jsx(Yi, { size: 16 });
      case "audio":
        return /* @__PURE__ */ c.jsx(qi, { size: 16 });
      default:
        return /* @__PURE__ */ c.jsx(Sa, { size: 16 });
    }
  }, a = (i) => {
    switch (i.type) {
      case "image":
        return /* @__PURE__ */ c.jsx(
          "img",
          {
            src: i.url,
            alt: i.name,
            className: "media-preview-image"
          }
        );
      case "video":
        return /* @__PURE__ */ c.jsx(
          "video",
          {
            src: i.url,
            className: "media-preview-video",
            controls: !0,
            preload: "metadata"
          }
        );
      case "audio":
        return /* @__PURE__ */ c.jsx(
          "audio",
          {
            src: i.url,
            className: "media-preview-audio",
            controls: !0,
            preload: "metadata"
          }
        );
      default:
        return /* @__PURE__ */ c.jsxs("div", { className: "media-preview-document", children: [
          r(i.type),
          /* @__PURE__ */ c.jsx("span", { className: "document-name", children: i.name })
        ] });
    }
  };
  return /* @__PURE__ */ c.jsx("div", { className: "media-preview", children: /* @__PURE__ */ c.jsx("div", { className: "media-preview-list", children: e.map((i) => /* @__PURE__ */ c.jsxs("div", { className: "media-preview-item", children: [
    /* @__PURE__ */ c.jsx("div", { className: "media-preview-content", children: a(i) }),
    /* @__PURE__ */ c.jsxs("div", { className: "media-preview-info", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "media-preview-details", children: [
        /* @__PURE__ */ c.jsx("span", { className: "file-name", title: i.name, children: i.name.length > 20 ? `${i.name.substring(0, 20)}...` : i.name }),
        /* @__PURE__ */ c.jsx("span", { className: "file-size", children: n(i.size) })
      ] }),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          onClick: () => t(i.id),
          className: "remove-file-button",
          title: "Remove file",
          children: /* @__PURE__ */ c.jsx(mt, { size: 14 })
        }
      )
    ] })
  ] }, i.id)) }) });
}, Ji = ({
  isOpen: e,
  onClick: t,
  position: n,
  primaryColor: r,
  popupMessage: a = "How can I help you?"
}) => {
  const [i, o] = de(!1);
  Je(() => {
    const f = sessionStorage.getItem("n8n-chat-popup-shown");
    if (!e && !f) {
      const $ = setTimeout(() => {
        o(!0);
      }, 5e3);
      return () => clearTimeout($);
    } else
      o(!1);
  }, [e]);
  const d = () => {
    o(!1), t();
  }, s = () => {
    o(!1), sessionStorage.setItem("n8n-chat-popup-shown", "true"), t();
  }, l = (f) => {
    f.stopPropagation(), o(!1), sessionStorage.setItem("n8n-chat-popup-shown", "true");
  };
  return /* @__PURE__ */ c.jsxs("div", { className: `chat-toggle-container chat-toggle-button--${n}`, children: [
    i && !e && /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: `chat-popup-message chat-popup-message--${n}`,
        onClick: s,
        children: [
          /* @__PURE__ */ c.jsx("div", { className: "chat-popup-content", children: a }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: "chat-popup-close",
              onClick: l,
              children: "×"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: d,
        className: "chat-toggle-button",
        style: {
          backgroundColor: r,
          "--chat-primary": r
        },
        "aria-label": e ? "Close chat" : "Open chat",
        children: e ? /* @__PURE__ */ c.jsx(mt, { size: 24, className: "toggle-icon" }) : /* @__PURE__ */ c.jsx(Bi, { size: 24, className: "toggle-icon" })
      }
    )
  ] });
}, Oa = { version: 4, country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 880: ["BD"], 886: ["TW"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]", "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:2(?:(?:[0-26-9]\\d|3[0-8]|5[0135-9])\\d|4(?:[02-9]\\d|10))|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90))|7(?:[013-57-9]\\d|2[0-8])\\d)\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "(?:[025-7]\\d|44)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[024-7]"]]]], BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], BJ: ["229", "00", "(?:01\\d|[24-689])\\d{7}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]]], BL: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(?:1\\d)?", "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[235]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], BT: ["975", "00", "[178]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-6]|7[246]|8[2-4]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|[78]"]]]], BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|33|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CD: ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]], "0"], CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["60|809"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:10|[2-9])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["46"]], ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|9[14]"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], CU: ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|3[13])"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, "0|180020", 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], GF: ["594", "00", "(?:[56]94\\d|7093)\\d{5}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0|180020", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}", [7, 8, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], HT: ["509", "00", "[2-589]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], ID: ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0|180020", "1624$1", 0, "74576|(?:16|7[56])24"], IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[03]"]]], 0, 0, 0, 0, 0, 0, [["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0|180020", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]", "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[25-9]"], "0$1"]], "0", 0, "(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0", "$1"], KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33622|7", 0, "8~10"], LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], LR: ["231", "00", "(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]], "0", 0, "[08]"], LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|78|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2679]|8[01]"]]]], LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-8]|5[0-5]|8[0-7]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], MF: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], MQ: ["596", "00", "(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], MX: ["52", "0[09]", "[2-9]\\d{9}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], NG: ["234", "009", "(?:20|9\\d)\\d{8}|[78]\\d{9,13}", [10, 11, 12, 13, 14], [["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], NR: ["674", "00", "(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[24-9]"]]]], NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], PM: ["508", "00", "[45]\\d{5}|(?:708|8\\d\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[136]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "00", "709\\d{6}|(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, 0, [["336(?:[013-9]\\d|2[013-9])\\d{5}|(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15-7]|6[0-35-79]|7[1-37-9]))\\d{7}", [10]], ["9\\d{9}", [10]], ["8(?:0[04]|108\\d{3})\\d{7}"], ["80[39]\\d{7}", [10]], ["808\\d{7}", [10]]], "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], SA: ["966", "00", "(?:[15]\\d|800|92)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], SB: ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], SC: ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|7[67]|9[2-9]"]]], "0"], SR: ["597", "00", "(?:[2-5]|[6-8]\\d|90)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-9]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], SY: ["963", "00", "[1-359]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-4]|5[1-3]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1]], "0"], SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], TD: ["235", "00|16", "(?:22|30|[689]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[236-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "(?:[1-6]\\d|71)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:3052(?:0[0-8]|[1-9]\\d)|5056(?:[0-35-9]\\d|4[0-68]))\\d{4}|(?:2742|305[3-9]|(?:472|983)[2-47-9]|505[2-57-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[0135-79]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["305209\\d{4}"]]], UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{4,5})", "$1", ["21"]], ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "00", "(?:20|33|[5-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]]], VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], WF: ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], YT: ["262", "00", "7093\\d{5}|(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"], ["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], ZM: ["260", "00", "800\\d{6}|(?:21|[579]\\d|63)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"]], "0"], ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, nonGeographic: { 800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], 808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], 870: ["870", 0, "7\\d{11}|[235-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"], 0, 0, 0, 0, 0, 0, ["2\\d{8}", [9]]]], 878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], 881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], 882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], 883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], 888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], 979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };
var $n = { exports: {} }, Mt = { exports: {} }, X = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qn;
function Qi() {
  if (Qn)
    return X;
  Qn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, $ = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, P = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function j(v) {
    if (typeof v == "object" && v !== null) {
      var V = v.$$typeof;
      switch (V) {
        case t:
          switch (v = v.type, v) {
            case s:
            case l:
            case r:
            case i:
            case a:
            case $:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case d:
                case f:
                case P:
                case m:
                case o:
                  return v;
                default:
                  return V;
              }
          }
        case n:
          return V;
      }
    }
  }
  function L(v) {
    return j(v) === l;
  }
  return X.AsyncMode = s, X.ConcurrentMode = l, X.ContextConsumer = d, X.ContextProvider = o, X.Element = t, X.ForwardRef = f, X.Fragment = r, X.Lazy = P, X.Memo = m, X.Portal = n, X.Profiler = i, X.StrictMode = a, X.Suspense = $, X.isAsyncMode = function(v) {
    return L(v) || j(v) === s;
  }, X.isConcurrentMode = L, X.isContextConsumer = function(v) {
    return j(v) === d;
  }, X.isContextProvider = function(v) {
    return j(v) === o;
  }, X.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, X.isForwardRef = function(v) {
    return j(v) === f;
  }, X.isFragment = function(v) {
    return j(v) === r;
  }, X.isLazy = function(v) {
    return j(v) === P;
  }, X.isMemo = function(v) {
    return j(v) === m;
  }, X.isPortal = function(v) {
    return j(v) === n;
  }, X.isProfiler = function(v) {
    return j(v) === i;
  }, X.isStrictMode = function(v) {
    return j(v) === a;
  }, X.isSuspense = function(v) {
    return j(v) === $;
  }, X.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === l || v === i || v === a || v === $ || v === h || typeof v == "object" && v !== null && (v.$$typeof === P || v.$$typeof === m || v.$$typeof === o || v.$$typeof === d || v.$$typeof === f || v.$$typeof === y || v.$$typeof === x || v.$$typeof === T || v.$$typeof === E);
  }, X.typeOf = j, X;
}
var Z = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function eo() {
  return er || (er = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, $ = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, P = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function j(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === r || S === l || S === i || S === a || S === $ || S === h || typeof S == "object" && S !== null && (S.$$typeof === P || S.$$typeof === m || S.$$typeof === o || S.$$typeof === d || S.$$typeof === f || S.$$typeof === y || S.$$typeof === x || S.$$typeof === T || S.$$typeof === E);
    }
    function L(S) {
      if (typeof S == "object" && S !== null) {
        var me = S.$$typeof;
        switch (me) {
          case t:
            var Te = S.type;
            switch (Te) {
              case s:
              case l:
              case r:
              case i:
              case a:
              case $:
                return Te;
              default:
                var Ae = Te && Te.$$typeof;
                switch (Ae) {
                  case d:
                  case f:
                  case P:
                  case m:
                  case o:
                    return Ae;
                  default:
                    return me;
                }
            }
          case n:
            return me;
        }
      }
    }
    var v = s, V = l, ee = d, te = o, ne = t, $e = f, ge = r, Ie = P, re = m, ae = n, ie = i, ce = a, fe = $, pe = !1;
    function Ce(S) {
      return pe || (pe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(S) || L(S) === s;
    }
    function b(S) {
      return L(S) === l;
    }
    function w(S) {
      return L(S) === d;
    }
    function U(S) {
      return L(S) === o;
    }
    function k(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function M(S) {
      return L(S) === f;
    }
    function G(S) {
      return L(S) === r;
    }
    function D(S) {
      return L(S) === P;
    }
    function W(S) {
      return L(S) === m;
    }
    function p(S) {
      return L(S) === n;
    }
    function H(S) {
      return L(S) === i;
    }
    function R(S) {
      return L(S) === a;
    }
    function ue(S) {
      return L(S) === $;
    }
    Z.AsyncMode = v, Z.ConcurrentMode = V, Z.ContextConsumer = ee, Z.ContextProvider = te, Z.Element = ne, Z.ForwardRef = $e, Z.Fragment = ge, Z.Lazy = Ie, Z.Memo = re, Z.Portal = ae, Z.Profiler = ie, Z.StrictMode = ce, Z.Suspense = fe, Z.isAsyncMode = Ce, Z.isConcurrentMode = b, Z.isContextConsumer = w, Z.isContextProvider = U, Z.isElement = k, Z.isForwardRef = M, Z.isFragment = G, Z.isLazy = D, Z.isMemo = W, Z.isPortal = p, Z.isProfiler = H, Z.isStrictMode = R, Z.isSuspense = ue, Z.isValidElementType = j, Z.typeOf = L;
  }()), Z;
}
var tr;
function wa() {
  return tr || (tr = 1, process.env.NODE_ENV === "production" ? Mt.exports = Qi() : Mt.exports = eo()), Mt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var en, nr;
function to() {
  if (nr)
    return en;
  nr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var o = {}, d = 0; d < 10; d++)
        o["_" + String.fromCharCode(d)] = d;
      var s = Object.getOwnPropertyNames(o).map(function(f) {
        return o[f];
      });
      if (s.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        l[f] = f;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return en = a() ? Object.assign : function(i, o) {
    for (var d, s = r(i), l, f = 1; f < arguments.length; f++) {
      d = Object(arguments[f]);
      for (var $ in d)
        t.call(d, $) && (s[$] = d[$]);
      if (e) {
        l = e(d);
        for (var h = 0; h < l.length; h++)
          n.call(d, l[h]) && (s[l[h]] = d[l[h]]);
      }
    }
    return s;
  }, en;
}
var tn, rr;
function Tn() {
  if (rr)
    return tn;
  rr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return tn = e, tn;
}
var nn, ar;
function xa() {
  return ar || (ar = 1, nn = Function.call.bind(Object.prototype.hasOwnProperty)), nn;
}
var rn, ir;
function no() {
  if (ir)
    return rn;
  ir = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Tn(), n = {}, r = xa();
    e = function(i) {
      var o = "Warning: " + i;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function a(i, o, d, s, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (r(i, f)) {
          var $;
          try {
            if (typeof i[f] != "function") {
              var h = Error(
                (s || "React class") + ": " + d + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            $ = i[f](o, f, s, d, null, t);
          } catch (P) {
            $ = P;
          }
          if ($ && !($ instanceof Error) && e(
            (s || "React class") + ": type specification of " + d + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof $ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), $ instanceof Error && !($.message in n)) {
            n[$.message] = !0;
            var m = l ? l() : "";
            e(
              "Failed " + d + " type: " + $.message + (m ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, rn = a, rn;
}
var an, or;
function ro() {
  if (or)
    return an;
  or = 1;
  var e = wa(), t = to(), n = Tn(), r = xa(), a = no(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(d) {
    var s = "Warning: " + d;
    typeof console < "u" && console.error(s);
    try {
      throw new Error(s);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return an = function(d, s) {
    var l = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function $(b) {
      var w = b && (l && b[l] || b[f]);
      if (typeof w == "function")
        return w;
    }
    var h = "<<anonymous>>", m = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: T(),
      arrayOf: j,
      element: L(),
      elementType: v(),
      instanceOf: V,
      node: $e(),
      objectOf: te,
      oneOf: ee,
      oneOfType: ne,
      shape: Ie,
      exact: re
    };
    function P(b, w) {
      return b === w ? b !== 0 || 1 / b === 1 / w : b !== b && w !== w;
    }
    function E(b, w) {
      this.message = b, this.data = w && typeof w == "object" ? w : {}, this.stack = "";
    }
    E.prototype = Error.prototype;
    function y(b) {
      if (process.env.NODE_ENV !== "production")
        var w = {}, U = 0;
      function k(G, D, W, p, H, R, ue) {
        if (p = p || h, R = R || W, ue !== n) {
          if (s) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var me = p + ":" + W;
            !w[me] && // Avoid spamming the console because they are often not actionable except for lib authors
            U < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + R + "` prop on `" + p + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), w[me] = !0, U++);
          }
        }
        return D[W] == null ? G ? D[W] === null ? new E("The " + H + " `" + R + "` is marked as required " + ("in `" + p + "`, but its value is `null`.")) : new E("The " + H + " `" + R + "` is marked as required in " + ("`" + p + "`, but its value is `undefined`.")) : null : b(D, W, p, H, R);
      }
      var M = k.bind(null, !1);
      return M.isRequired = k.bind(null, !0), M;
    }
    function x(b) {
      function w(U, k, M, G, D, W) {
        var p = U[k], H = ce(p);
        if (H !== b) {
          var R = fe(p);
          return new E(
            "Invalid " + G + " `" + D + "` of type " + ("`" + R + "` supplied to `" + M + "`, expected ") + ("`" + b + "`."),
            { expectedType: b }
          );
        }
        return null;
      }
      return y(w);
    }
    function T() {
      return y(o);
    }
    function j(b) {
      function w(U, k, M, G, D) {
        if (typeof b != "function")
          return new E("Property `" + D + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var W = U[k];
        if (!Array.isArray(W)) {
          var p = ce(W);
          return new E("Invalid " + G + " `" + D + "` of type " + ("`" + p + "` supplied to `" + M + "`, expected an array."));
        }
        for (var H = 0; H < W.length; H++) {
          var R = b(W, H, M, G, D + "[" + H + "]", n);
          if (R instanceof Error)
            return R;
        }
        return null;
      }
      return y(w);
    }
    function L() {
      function b(w, U, k, M, G) {
        var D = w[U];
        if (!d(D)) {
          var W = ce(D);
          return new E("Invalid " + M + " `" + G + "` of type " + ("`" + W + "` supplied to `" + k + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(b);
    }
    function v() {
      function b(w, U, k, M, G) {
        var D = w[U];
        if (!e.isValidElementType(D)) {
          var W = ce(D);
          return new E("Invalid " + M + " `" + G + "` of type " + ("`" + W + "` supplied to `" + k + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(b);
    }
    function V(b) {
      function w(U, k, M, G, D) {
        if (!(U[k] instanceof b)) {
          var W = b.name || h, p = Ce(U[k]);
          return new E("Invalid " + G + " `" + D + "` of type " + ("`" + p + "` supplied to `" + M + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return y(w);
    }
    function ee(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function w(U, k, M, G, D) {
        for (var W = U[k], p = 0; p < b.length; p++)
          if (P(W, b[p]))
            return null;
        var H = JSON.stringify(b, function(ue, S) {
          var me = fe(S);
          return me === "symbol" ? String(S) : S;
        });
        return new E("Invalid " + G + " `" + D + "` of value `" + String(W) + "` " + ("supplied to `" + M + "`, expected one of " + H + "."));
      }
      return y(w);
    }
    function te(b) {
      function w(U, k, M, G, D) {
        if (typeof b != "function")
          return new E("Property `" + D + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var W = U[k], p = ce(W);
        if (p !== "object")
          return new E("Invalid " + G + " `" + D + "` of type " + ("`" + p + "` supplied to `" + M + "`, expected an object."));
        for (var H in W)
          if (r(W, H)) {
            var R = b(W, H, M, G, D + "." + H, n);
            if (R instanceof Error)
              return R;
          }
        return null;
      }
      return y(w);
    }
    function ne(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var w = 0; w < b.length; w++) {
        var U = b[w];
        if (typeof U != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + pe(U) + " at index " + w + "."
          ), o;
      }
      function k(M, G, D, W, p) {
        for (var H = [], R = 0; R < b.length; R++) {
          var ue = b[R], S = ue(M, G, D, W, p, n);
          if (S == null)
            return null;
          S.data && r(S.data, "expectedType") && H.push(S.data.expectedType);
        }
        var me = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new E("Invalid " + W + " `" + p + "` supplied to " + ("`" + D + "`" + me + "."));
      }
      return y(k);
    }
    function $e() {
      function b(w, U, k, M, G) {
        return ae(w[U]) ? null : new E("Invalid " + M + " `" + G + "` supplied to " + ("`" + k + "`, expected a ReactNode."));
      }
      return y(b);
    }
    function ge(b, w, U, k, M) {
      return new E(
        (b || "React class") + ": " + w + " type `" + U + "." + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function Ie(b) {
      function w(U, k, M, G, D) {
        var W = U[k], p = ce(W);
        if (p !== "object")
          return new E("Invalid " + G + " `" + D + "` of type `" + p + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var H in b) {
          var R = b[H];
          if (typeof R != "function")
            return ge(M, G, D, H, fe(R));
          var ue = R(W, H, M, G, D + "." + H, n);
          if (ue)
            return ue;
        }
        return null;
      }
      return y(w);
    }
    function re(b) {
      function w(U, k, M, G, D) {
        var W = U[k], p = ce(W);
        if (p !== "object")
          return new E("Invalid " + G + " `" + D + "` of type `" + p + "` " + ("supplied to `" + M + "`, expected `object`."));
        var H = t({}, U[k], b);
        for (var R in H) {
          var ue = b[R];
          if (r(b, R) && typeof ue != "function")
            return ge(M, G, D, R, fe(ue));
          if (!ue)
            return new E(
              "Invalid " + G + " `" + D + "` key `" + R + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(U[k], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(b), null, "  ")
            );
          var S = ue(W, R, M, G, D + "." + R, n);
          if (S)
            return S;
        }
        return null;
      }
      return y(w);
    }
    function ae(b) {
      switch (typeof b) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !b;
        case "object":
          if (Array.isArray(b))
            return b.every(ae);
          if (b === null || d(b))
            return !0;
          var w = $(b);
          if (w) {
            var U = w.call(b), k;
            if (w !== b.entries) {
              for (; !(k = U.next()).done; )
                if (!ae(k.value))
                  return !1;
            } else
              for (; !(k = U.next()).done; ) {
                var M = k.value;
                if (M && !ae(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ie(b, w) {
      return b === "symbol" ? !0 : w ? w["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && w instanceof Symbol : !1;
    }
    function ce(b) {
      var w = typeof b;
      return Array.isArray(b) ? "array" : b instanceof RegExp ? "object" : ie(w, b) ? "symbol" : w;
    }
    function fe(b) {
      if (typeof b > "u" || b === null)
        return "" + b;
      var w = ce(b);
      if (w === "object") {
        if (b instanceof Date)
          return "date";
        if (b instanceof RegExp)
          return "regexp";
      }
      return w;
    }
    function pe(b) {
      var w = fe(b);
      switch (w) {
        case "array":
        case "object":
          return "an " + w;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + w;
        default:
          return w;
      }
    }
    function Ce(b) {
      return !b.constructor || !b.constructor.name ? h : b.constructor.name;
    }
    return m.checkPropTypes = a, m.resetWarningCache = a.resetWarningCache, m.PropTypes = m, m;
  }, an;
}
var on, dr;
function ao() {
  if (dr)
    return on;
  dr = 1;
  var e = Tn();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, on = function() {
    function r(o, d, s, l, f, $) {
      if ($ !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, on;
}
if (process.env.NODE_ENV !== "production") {
  var io = wa(), oo = !0;
  $n.exports = ro()(io.isElement, oo);
} else
  $n.exports = ao()();
var uo = $n.exports;
const C = /* @__PURE__ */ Pa(uo);
var Ea = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var i = "", o = 0; o < arguments.length; o++) {
        var d = arguments[o];
        d && (i = a(i, r(d)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return n.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var o = "";
      for (var d in i)
        t.call(i, d) && i[d] && (o = a(o, d));
      return o;
    }
    function a(i, o) {
      return o ? i ? i + " " + o : i + o : i;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Ea);
var so = Ea.exports;
const Lt = /* @__PURE__ */ Pa(so);
function lo(e, t, n) {
  switch (n) {
    case "Backspace":
      t > 0 && (e = e.slice(0, t - 1) + e.slice(t), t--);
      break;
    case "Delete":
      e = e.slice(0, t) + e.slice(t + 1);
      break;
  }
  return {
    value: e,
    caret: t
  };
}
function co(e, t, n) {
  for (var r = {}, a = "", i = 0, o = 0; o < e.length; ) {
    var d = n(e[o], a, r);
    d !== void 0 && (a += d, t !== void 0 && (t === o ? i = a.length - 1 : t > o && (i = a.length))), o++;
  }
  t === void 0 && (i = a.length);
  var s = {
    value: a,
    caret: i
  };
  return s;
}
function fo(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = $o(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $o(e, t) {
  if (e) {
    if (typeof e == "string")
      return ur(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ur(e, t);
  }
}
function ur(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function pn(e, t) {
  for (var n = 0, r = fo(t.split("")), a; !(a = r()).done; ) {
    var i = a.value;
    i === e && n++;
  }
  return n;
}
function po(e, t) {
  for (var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "x", r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : " ", a = e.length, i = pn("(", e), o = pn(")", e), d = i - o; d > 0 && a < t.length; )
    e += t[a].replace(n, r), t[a] === ")" && d--, a++;
  return e;
}
function mo(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = yo(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yo(e, t) {
  if (e) {
    if (typeof e == "string")
      return sr(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return sr(e, t);
  }
}
function sr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ho(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x", n = arguments.length > 2 ? arguments[2] : void 0;
  if (!e)
    return function(a) {
      return {
        text: a
      };
    };
  var r = pn(t, e);
  return function(a) {
    if (!a)
      return {
        text: "",
        template: e
      };
    for (var i = 0, o = "", d = mo(e.split("")), s; !(s = d()).done; ) {
      var l = s.value;
      if (l !== t) {
        o += l;
        continue;
      }
      if (o += a[i], i++, i === a.length && a.length < r)
        break;
    }
    return n && (o = po(o, e)), {
      text: o,
      template: e
    };
  };
}
function go(e, t, n) {
  typeof n == "string" && (n = ho(n));
  var r = n(e) || {}, a = r.text, i = r.template;
  if (a === void 0 && (a = e), i)
    if (t === void 0)
      t = a.length;
    else {
      for (var o = 0, d = !1, s = -1; o < a.length && o < i.length; ) {
        if (a[o] !== i[o]) {
          if (t === 0) {
            d = !0, t = o;
            break;
          }
          s = o, t--;
        }
        o++;
      }
      d || (t = s + 1);
    }
  return {
    text: a,
    caret: t
  };
}
function vo(e) {
  return e.hasAttribute("readonly");
}
function bo(e) {
  if (e.selectionStart !== e.selectionEnd)
    return {
      start: e.selectionStart,
      end: e.selectionEnd
    };
}
var lr = {
  Backspace: 8,
  Delete: 46
};
function Co(e) {
  switch (e.keyCode) {
    case lr.Backspace:
      return "Backspace";
    case lr.Delete:
      return "Delete";
  }
}
function Po(e) {
  return e.selectionStart;
}
function _a(e, t) {
  t !== void 0 && (No() ? setTimeout(function() {
    return e.setSelectionRange(t, t);
  }, 0) : e.setSelectionRange(t, t));
}
function No() {
  if (typeof navigator < "u")
    return So.test(navigator.userAgent);
}
var So = /Android/i;
function Oo(e, t, n, r, a) {
  mn(t, n, r, void 0, a);
}
function wo(e, t, n, r, a) {
  if (!vo(t)) {
    var i = Co(e);
    switch (i) {
      case "Delete":
      case "Backspace":
        e.preventDefault();
        var o = bo(t);
        return o ? (xo(t, o), mn(t, n, r, void 0, a)) : mn(t, n, r, i, a);
    }
  }
}
function xo(e, t) {
  var n = e.value;
  n = n.slice(0, t.start) + n.slice(t.end), e.value = n, _a(e, t.start);
}
function mn(e, t, n, r, a) {
  var i = co(e.value, Po(e), t), o = i.value, d = i.caret;
  if (r) {
    var s = lo(o, d, r);
    o = s.value, d = s.caret;
  }
  var l = go(o, d, n), f = l.text;
  d = l.caret, e.value = f, _a(e, d), a && a(o);
}
var Eo = ["ref", "parse", "format", "value", "defaultValue", "controlled", "onChange", "onKeyDown"];
function cr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cr(Object(n), !0).forEach(function(r) {
      _o(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function _o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Io(e, t) {
  if (e == null)
    return {};
  var n = To(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function To(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Ao(e) {
  var t = e.ref, n = e.parse, r = e.format, a = e.value, i = e.defaultValue, o = e.controlled, d = o === void 0 ? !0 : o, s = e.onChange, l = e.onKeyDown, f = Io(e, Eo), $ = Ke(), h = be(function(y) {
    $.current = y, t && (typeof t == "function" ? t(y) : t.current = y);
  }, [t]), m = be(function(y) {
    return Oo(y, $.current, n, r, s);
  }, [$, n, r, s]), P = be(function(y) {
    if (l && l(y), !y.defaultPrevented)
      return wo(y, $.current, n, r, s);
  }, [$, n, r, s, l]), E = Xe(Xe({}, f), {}, {
    ref: h,
    onChange: m,
    onKeyDown: P
  });
  return d ? Xe(Xe({}, E), {}, {
    value: r(fr(a) ? "" : a).text
  }) : Xe(Xe({}, E), {}, {
    defaultValue: r(fr(i) ? "" : i).text
  });
}
function fr(e) {
  return e == null;
}
var Ro = ["inputComponent", "parse", "format", "value", "defaultValue", "onChange", "controlled", "onKeyDown", "type"];
function $r(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function jo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $r(Object(n), !0).forEach(function(r) {
      Fo(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $r(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Fo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Mo(e, t) {
  if (e == null)
    return {};
  var n = Do(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Do(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Bt(e, t) {
  var n = e.inputComponent, r = n === void 0 ? "input" : n, a = e.parse, i = e.format, o = e.value, d = e.defaultValue, s = e.onChange, l = e.controlled, f = e.onKeyDown, $ = e.type, h = $ === void 0 ? "text" : $, m = Mo(e, Ro), P = Ao(jo({
    ref: t,
    parse: a,
    format: i,
    value: o,
    defaultValue: d,
    onChange: s,
    controlled: l,
    onKeyDown: f,
    type: h
  }, m));
  return /* @__PURE__ */ A.createElement(r, P);
}
Bt = /* @__PURE__ */ A.forwardRef(Bt);
Bt.propTypes = {
  // Parses a single characher of `<input/>` text.
  parse: C.func.isRequired,
  // Formats `value` into `<input/>` text.
  format: C.func.isRequired,
  // Renders `<input/>` by default.
  inputComponent: C.elementType,
  // `<input/>` `type` attribute.
  type: C.string,
  // Is parsed from <input/> text.
  value: C.string,
  // An initial value for an "uncontrolled" <input/>.
  defaultValue: C.string,
  // This handler is called each time `<input/>` text is changed.
  onChange: C.func,
  // Whether this input should be "controlled" or "uncontrolled".
  // The default value is `true` meaning "uncontrolled".
  controlled: C.bool,
  // Passthrough
  onKeyDown: C.func,
  onCut: C.func,
  onPaste: C.func
};
const ko = Bt;
function pr(e, t) {
  e = e.split("-"), t = t.split("-");
  for (var n = e[0].split("."), r = t[0].split("."), a = 0; a < 3; a++) {
    var i = Number(n[a]), o = Number(r[a]);
    if (i > o)
      return 1;
    if (o > i)
      return -1;
    if (!isNaN(i) && isNaN(o))
      return 1;
    if (isNaN(i) && !isNaN(o))
      return -1;
  }
  return e[1] && t[1] ? e[1] > t[1] ? 1 : e[1] < t[1] ? -1 : 0 : !e[1] && t[1] ? 1 : e[1] && !t[1] ? -1 : 0;
}
var Lo = {}.constructor;
function He(e) {
  return e != null && e.constructor === Lo;
}
function nt(e) {
  "@babel/helpers - typeof";
  return nt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nt(e);
}
function Ht(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mr(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Bo(r.key), r);
  }
}
function Yt(e, t, n) {
  return t && mr(e.prototype, t), n && mr(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Bo(e) {
  var t = Uo(e, "string");
  return nt(t) == "symbol" ? t : t + "";
}
function Uo(e, t) {
  if (nt(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (nt(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Go = "1.2.0", Wo = "1.7.35", yr = " ext. ", Vo = /^\d+$/, le = /* @__PURE__ */ function() {
  function e(t) {
    Ht(this, e), Ia(t), this.metadata = t, Aa.call(this, t);
  }
  return Yt(e, [{
    key: "getCountries",
    value: function() {
      return Object.keys(this.metadata.countries).filter(function(n) {
        return n !== "001";
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function(n) {
      return this.metadata.countries[n];
    }
  }, {
    key: "nonGeographic",
    value: function() {
      if (!(this.v1 || this.v2 || this.v3))
        return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function(n) {
      return this.getCountryMetadata(n) !== void 0;
    }
  }, {
    key: "hasCallingCode",
    value: function(n) {
      if (this.getCountryCodesForCallingCode(n))
        return !0;
      if (this.nonGeographic()) {
        if (this.nonGeographic()[n])
          return !0;
      } else {
        var r = this.countryCallingCodes()[n];
        if (r && r.length === 1 && r[0] === "001")
          return !0;
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function(n) {
      return this.nonGeographic() ? !!this.nonGeographic()[n] : !this.getCountryCodesForCallingCode(n);
    }
    // Deprecated.
  }, {
    key: "country",
    value: function(n) {
      return this.selectNumberingPlan(n);
    }
  }, {
    key: "selectNumberingPlan",
    value: function(n, r) {
      if (n && Vo.test(n) && (r = n, n = null), n && n !== "001") {
        if (!this.hasCountry(n))
          throw new Error("Unknown country: ".concat(n));
        this.numberingPlan = new hr(this.getCountryMetadata(n), this);
      } else if (r) {
        if (!this.hasCallingCode(r))
          throw new Error("Unknown calling code: ".concat(r));
        this.numberingPlan = new hr(this.getNumberingPlanMetadata(r), this);
      } else
        this.numberingPlan = void 0;
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function(n) {
      var r = this.countryCallingCodes()[n];
      if (r)
        return r.length === 1 && r[0].length === 3 ? void 0 : r;
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function(n) {
      var r = this.getCountryCodesForCallingCode(n);
      if (r)
        return r[0];
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function(n) {
      var r = this.getCountryCodeForCallingCode(n);
      if (r)
        return this.getCountryMetadata(r);
      if (this.nonGeographic()) {
        var a = this.nonGeographic()[n];
        if (a)
          return a;
      } else {
        var i = this.countryCallingCodes()[n];
        if (i && i.length === 1 && i[0] === "001")
          return this.metadata.countries["001"];
      }
    }
    // Deprecated.
  }, {
    key: "countryCallingCode",
    value: function() {
      return this.numberingPlan.callingCode();
    }
    // Deprecated.
  }, {
    key: "IDDPrefix",
    value: function() {
      return this.numberingPlan.IDDPrefix();
    }
    // Deprecated.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      return this.numberingPlan.defaultIDDPrefix();
    }
    // Deprecated.
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.numberingPlan.nationalNumberPattern();
    }
    // Deprecated.
  }, {
    key: "possibleLengths",
    value: function() {
      return this.numberingPlan.possibleLengths();
    }
    // Deprecated.
  }, {
    key: "formats",
    value: function() {
      return this.numberingPlan.formats();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this.numberingPlan.nationalPrefixForParsing();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.numberingPlan.nationalPrefixTransformRule();
    }
    // Deprecated.
  }, {
    key: "leadingDigits",
    value: function() {
      return this.numberingPlan.leadingDigits();
    }
    // Deprecated.
  }, {
    key: "hasTypes",
    value: function() {
      return this.numberingPlan.hasTypes();
    }
    // Deprecated.
  }, {
    key: "type",
    value: function(n) {
      return this.numberingPlan.type(n);
    }
    // Deprecated.
  }, {
    key: "ext",
    value: function() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function() {
      return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes;
    }
    // Deprecated.
  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function(n) {
      return this.selectNumberingPlan(n);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function() {
      return this.numberingPlan !== void 0;
    }
  }]);
}(), hr = /* @__PURE__ */ function() {
  function e(t, n) {
    Ht(this, e), this.globalMetadataObject = n, this.metadata = t, Aa.call(this, n.metadata);
  }
  return Yt(e, [{
    key: "callingCode",
    value: function() {
      return this.metadata[0];
    }
    // Formatting information for regions which share
    // a country calling code is contained by only one region
    // for performance reasons. For example, for NANPA region
    // ("North American Numbering Plan Administration",
    //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
    // it will be contained in the metadata for `US`.
  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
    // Is always present.
  }, {
    key: "IDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[1];
    }
    // Is only present when a country supports multiple IDD prefixes.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
    }
    // "possible length" data is always present in Google's metadata.
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.v1)
        return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function(n) {
      return n[this.v1 ? 2 : this.v2 ? 3 : 4];
    }
    // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "formats",
    value: function() {
      var n = this, r = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return r.map(function(a) {
        return new Ko(a, n);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function(n) {
      return n[this.v1 ? 4 : this.v2 ? 5 : 6];
    }
    // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }
    // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "leadingDigits",
    value: function() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function() {
      return this.types() && this.types().length === 0 ? !1 : !!this.types();
    }
  }, {
    key: "type",
    value: function(n) {
      if (this.hasTypes() && gr(this.types(), n))
        return new Yo(gr(this.types(), n), this);
    }
  }, {
    key: "ext",
    value: function() {
      return this.v1 || this.v2 ? yr : this.metadata[13] || yr;
    }
  }]);
}(), Ko = /* @__PURE__ */ function() {
  function e(t, n) {
    Ht(this, e), this._format = t, this.metadata = n;
  }
  return Yt(e, [{
    key: "pattern",
    value: function() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function() {
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
    // Checks whether national prefix formatting rule contains national prefix.
  }, {
    key: "usesNationalPrefix",
    value: function() {
      return !!(this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !Ho.test(this.nationalPrefixFormattingRule()));
    }
  }, {
    key: "internationalFormat",
    value: function() {
      return this._format[5] || this.format();
    }
  }]);
}(), Ho = /^\(?\$1\)?$/, Yo = /* @__PURE__ */ function() {
  function e(t, n) {
    Ht(this, e), this.type = t, this.metadata = n;
  }
  return Yt(e, [{
    key: "pattern",
    value: function() {
      return this.metadata.v1 ? this.type : this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.metadata.v1)
        return this.type[1] || this.metadata.possibleLengths();
    }
  }]);
}();
function gr(e, t) {
  switch (t) {
    case "FIXED_LINE":
      return e[0];
    case "MOBILE":
      return e[1];
    case "TOLL_FREE":
      return e[2];
    case "PREMIUM_RATE":
      return e[3];
    case "PERSONAL_NUMBER":
      return e[4];
    case "VOICEMAIL":
      return e[5];
    case "UAN":
      return e[6];
    case "PAGER":
      return e[7];
    case "VOIP":
      return e[8];
    case "SHARED_COST":
      return e[9];
  }
}
function Ia(e) {
  if (!e)
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!He(e) || !He(e.countries))
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(He(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + zo(e) + ": " + e, "."));
}
var zo = function(t) {
  return nt(t);
};
function Ue(e, t) {
  if (t = new le(t), t.hasCountry(e))
    return t.selectNumberingPlan(e).countryCallingCode();
  throw new Error("Unknown country: ".concat(e));
}
function Ta(e, t) {
  return t.countries.hasOwnProperty(e);
}
function Aa(e) {
  var t = e.version;
  typeof t == "number" ? (this.v1 = t === 1, this.v2 = t === 2, this.v3 = t === 3, this.v4 = t === 4) : t ? pr(t, Go) === -1 ? this.v2 = !0 : pr(t, Wo) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
function qo(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Xo(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xo(e, t) {
  if (e) {
    if (typeof e == "string")
      return vr(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vr(e, t) : void 0;
  }
}
function vr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Zo(e, t) {
  for (var n = e.slice(), r = qo(t), a; !(a = r()).done; ) {
    var i = a.value;
    e.indexOf(i) < 0 && n.push(i);
  }
  return n.sort(function(o, d) {
    return o - d;
  });
}
function zt(e, t, n) {
  return Ra(e, t, void 0, n);
}
function Ra(e, t, n, r) {
  t && (r = new le(r.metadata), r.selectNumberingPlan(t));
  var a = r.type(n), i = a && a.possibleLengths() || r.possibleLengths();
  if (!i)
    return "IS_POSSIBLE";
  if (n === "FIXED_LINE_OR_MOBILE") {
    if (!r.type("FIXED_LINE"))
      return Ra(e, t, "MOBILE", r);
    var o = r.type("MOBILE");
    o && (i = Zo(i, o.possibleLengths()));
  } else if (n && !a)
    return "INVALID_LENGTH";
  var d = e.length, s = i[0];
  return s === d ? "IS_POSSIBLE" : s > d ? "TOO_SHORT" : i[i.length - 1] < d ? "TOO_LONG" : i.indexOf(d, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function Jo(e, t, n) {
  if (t === void 0 && (t = {}), n = new le(n), t.v2) {
    if (!e.countryCallingCode)
      throw new Error("Invalid phone number object passed");
    n.selectNumberingPlan(e.countryCallingCode);
  } else {
    if (!e.phone)
      return !1;
    if (e.country) {
      if (!n.hasCountry(e.country))
        throw new Error("Unknown country: ".concat(e.country));
      n.selectNumberingPlan(e.country);
    } else {
      if (!e.countryCallingCode)
        throw new Error("Invalid phone number object passed");
      n.selectNumberingPlan(e.countryCallingCode);
    }
  }
  if (n.possibleLengths())
    return ja(e.phone || e.nationalNumber, e.country, n);
  if (e.countryCallingCode && n.isNonGeographicCallingCode(e.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function ja(e, t, n) {
  switch (zt(e, t, n)) {
    case "IS_POSSIBLE":
      return !0;
    default:
      return !1;
  }
}
function Me(e, t) {
  return e = e || "", new RegExp("^(?:" + t + ")$").test(e);
}
function Qo(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = ed(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ed(e, t) {
  if (e) {
    if (typeof e == "string")
      return br(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? br(e, t) : void 0;
  }
}
function br(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var td = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function An(e, t, n) {
  if (t = t || {}, !(!e.country && !e.countryCallingCode)) {
    n = new le(n), n.selectNumberingPlan(e.country, e.countryCallingCode);
    var r = t.v2 ? e.nationalNumber : e.phone;
    if (Me(r, n.nationalNumberPattern())) {
      if (dn(r, "FIXED_LINE", n))
        return n.type("MOBILE") && n.type("MOBILE").pattern() === "" || !n.type("MOBILE") || dn(r, "MOBILE", n) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var a = Qo(td), i; !(i = a()).done; ) {
        var o = i.value;
        if (dn(r, o, n))
          return o;
      }
    }
  }
}
function dn(e, t, n) {
  return t = n.type(t), !t || !t.pattern() || t.possibleLengths() && t.possibleLengths().indexOf(e.length) < 0 ? !1 : Me(e, t.pattern());
}
function nd(e, t, n) {
  if (t = t || {}, n = new le(n), n.selectNumberingPlan(e.country, e.countryCallingCode), n.hasTypes())
    return An(e, t, n.metadata) !== void 0;
  var r = t.v2 ? e.nationalNumber : e.phone;
  return Me(r, n.nationalNumberPattern());
}
function rd(e, t, n) {
  var r = new le(n), a = r.getCountryCodesForCallingCode(e);
  return a ? a.filter(function(i) {
    return ad(t, i, n);
  }) : [];
}
function ad(e, t, n) {
  var r = new le(n);
  return r.selectNumberingPlan(t), r.numberingPlan.possibleLengths().indexOf(e.length) >= 0;
}
var Rn = 2, id = 17, od = 3, he = "0-9０-９٠-٩۰-۹", dd = "-‐-―−ー－", ud = "／/", sd = "．.", ld = "  ­​⁠　", cd = "()（）［］\\[\\]", fd = "~⁓∼～", Ee = "".concat(dd).concat(ud).concat(sd).concat(ld).concat(cd).concat(fd), qt = "+＋", $d = new RegExp("([" + he + "])");
function Fa(e, t, n, r) {
  if (t) {
    var a = new le(r);
    a.selectNumberingPlan(t, n);
    var i = new RegExp(a.IDDPrefix());
    if (e.search(i) === 0) {
      e = e.slice(e.match(i)[0].length);
      var o = e.match($d);
      if (!(o && o[1] != null && o[1].length > 0 && o[1] === "0"))
        return e;
    }
  }
}
function yn(e, t) {
  if (e && t.numberingPlan.nationalPrefixForParsing()) {
    var n = new RegExp("^(?:" + t.numberingPlan.nationalPrefixForParsing() + ")"), r = n.exec(e);
    if (r) {
      var a, i, o = r.length - 1, d = o > 0 && r[o];
      if (t.nationalPrefixTransformRule() && d)
        a = e.replace(n, t.nationalPrefixTransformRule()), o > 1 && (i = r[1]);
      else {
        var s = r[0];
        a = e.slice(s.length), d && (i = r[1]);
      }
      var l;
      if (d) {
        var f = e.indexOf(r[1]), $ = e.slice(0, f);
        $ === t.numberingPlan.nationalPrefix() && (l = t.numberingPlan.nationalPrefix());
      } else
        l = r[0];
      return {
        nationalNumber: a,
        nationalPrefix: l,
        carrierCode: i
      };
    }
  }
  return {
    nationalNumber: e
  };
}
function pd(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = md(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function md(e, t) {
  if (e) {
    if (typeof e == "string")
      return Cr(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Cr(e, t) : void 0;
  }
}
function Cr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Ma(e, t) {
  var n = t.countries, r = t.metadata;
  r = new le(r);
  for (var a = pd(n), i; !(i = a()).done; ) {
    var o = i.value;
    if (r.selectNumberingPlan(o), r.leadingDigits()) {
      if (e && e.search(r.leadingDigits()) === 0)
        return o;
    } else if (An({
      phone: e,
      country: o
    }, void 0, r.metadata))
      return o;
  }
}
var yd = !1;
function jn(e, t) {
  var n = t.nationalNumber, r = t.metadata;
  if (yd && r.isNonGeographicCallingCode(e))
    return "001";
  var a = r.getCountryCodesForCallingCode(e);
  if (a)
    return a.length === 1 ? a[0] : Ma(n, {
      countries: a,
      metadata: r.metadata
    });
}
function hn(e, t, n) {
  var r = yn(e, n), a = r.carrierCode, i = r.nationalNumber;
  if (i !== e) {
    if (!hd(e, i, n))
      return {
        nationalNumber: e
      };
    if (n.numberingPlan.possibleLengths() && (t || (t = jn(n.numberingPlan.callingCode(), {
      nationalNumber: i,
      metadata: n
    })), !gd(i, t, n)))
      return {
        nationalNumber: e
      };
  }
  return {
    nationalNumber: i,
    carrierCode: a
  };
}
function hd(e, t, n) {
  return !(Me(e, n.nationalNumberPattern()) && !Me(t, n.nationalNumberPattern()));
}
function gd(e, t, n) {
  switch (zt(e, t, n)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function Da(e, t, n, r, a) {
  var i = t || n ? Ue(t || n, a) : r;
  if (e.indexOf(i) === 0) {
    a = new le(a), a.selectNumberingPlan(t || n, i);
    var o = e.slice(i.length), d = hn(o, t, a), s = d.nationalNumber, l = hn(e, t, a), f = l.nationalNumber;
    if (!Me(f, a.nationalNumberPattern()) && Me(s, a.nationalNumberPattern()) || zt(f, t, a) === "TOO_LONG")
      return {
        countryCallingCode: i,
        number: o
      };
  }
  return {
    number: e
  };
}
function Fn(e, t, n, r, a) {
  if (!e)
    return {};
  var i;
  if (e[0] !== "+") {
    var o = Fa(e, t || n, r, a);
    if (o && o !== e)
      i = !0, e = "+" + o;
    else {
      if (t || n || r) {
        var d = Da(e, t, n, r, a), s = d.countryCallingCode, l = d.number;
        if (s)
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode: s,
            number: l
          };
      }
      return {
        // No need to set it to `UNSPECIFIED`. It can be just `undefined`.
        // countryCallingCodeSource: 'UNSPECIFIED',
        number: e
      };
    }
  }
  if (e[1] === "0")
    return {};
  a = new le(a);
  for (var f = 2; f - 1 <= od && f <= e.length; ) {
    var $ = e.slice(1, f);
    if (a.hasCallingCode($))
      return a.selectNumberingPlan($), {
        countryCallingCodeSource: i ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: $,
        number: e.slice(f)
      };
    f++;
  }
  return {};
}
function ka(e) {
  return e.replace(new RegExp("[".concat(Ee, "]+"), "g"), " ").trim();
}
var La = /(\$\d)/;
function Ba(e, t, n) {
  var r = n.useInternationalFormat, a = n.withNationalPrefix;
  n.carrierCode, n.metadata;
  var i = e.replace(new RegExp(t.pattern()), r ? t.internationalFormat() : (
    // This library doesn't use `domestic_carrier_code_formatting_rule`,
    // because that one is only used when formatting phone numbers
    // for dialing from a mobile phone, and this is not a dialing library.
    // carrierCode && format.domesticCarrierCodeFormattingRule()
    // 	// First, replace the $CC in the formatting rule with the desired carrier code.
    // 	// Then, replace the $FG in the formatting rule with the first group
    // 	// and the carrier code combined in the appropriate way.
    // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
    // 	: (
    // 		withNationalPrefix && format.nationalPrefixFormattingRule()
    // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
    // 			: format.format()
    // 	)
    a && t.nationalPrefixFormattingRule() ? t.format().replace(La, t.nationalPrefixFormattingRule()) : t.format()
  ));
  return r ? ka(i) : i;
}
var vd = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function bd(e, t, n) {
  var r = new le(n);
  if (r.selectNumberingPlan(e, t), r.defaultIDDPrefix())
    return r.defaultIDDPrefix();
  if (vd.test(r.IDDPrefix()))
    return r.IDDPrefix();
}
var Cd = ";ext=", Ze = function(t) {
  return "([".concat(he, "]{1,").concat(t, "})");
};
function Ua(e) {
  var t = "20", n = "15", r = "9", a = "6", i = "[  \\t,]*", o = "[:\\.．]?[  \\t,-]*", d = "#?", s = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", l = "(?:[xｘ#＃~～]|int|ｉｎｔ)", f = "[- ]+", $ = "[  \\t]*", h = "(?:,{2}|;)", m = Cd + Ze(t), P = i + s + o + Ze(t) + d, E = i + l + o + Ze(r) + d, y = f + Ze(a) + "#", x = $ + h + o + Ze(n) + d, T = $ + "(?:,)+" + o + Ze(r) + d;
  return m + "|" + P + "|" + E + "|" + y + "|" + x + "|" + T;
}
var Pd = "[" + he + "]{" + Rn + "}", Nd = "[" + qt + "]{0,1}(?:[" + Ee + "]*[" + he + "]){3,}[" + Ee + he + "]*", Sd = new RegExp("^[" + qt + "]{0,1}(?:[" + Ee + "]*[" + he + "]){1,2}$", "i"), Od = Nd + // Phone number extensions
"(?:" + Ua() + ")?", wd = new RegExp(
  // Either a short two-digit-only phone number
  "^" + Pd + "$|^" + Od + "$",
  "i"
);
function xd(e) {
  return e.length >= Rn && wd.test(e);
}
function Ed(e) {
  return Sd.test(e);
}
function _d(e) {
  var t = e.number, n = e.ext;
  if (!t)
    return "";
  if (t[0] !== "+")
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  return "tel:".concat(t).concat(n ? ";ext=" + n : "");
}
function yt(e) {
  "@babel/helpers - typeof";
  return yt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yt(e);
}
function Id(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Td(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Td(e, t) {
  if (e) {
    if (typeof e == "string")
      return Pr(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pr(e, t) : void 0;
  }
}
function Pr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Nr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Sr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nr(Object(n), !0).forEach(function(r) {
      Ad(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ad(e, t, n) {
  return (t = Rd(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Rd(e) {
  var t = jd(e, "string");
  return yt(t) == "symbol" ? t : t + "";
}
function jd(e, t) {
  if (yt(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (yt(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Or = {
  formatExtension: function(t, n, r) {
    return "".concat(t).concat(r.ext()).concat(n);
  }
};
function Fd(e, t, n, r) {
  if (n ? n = Sr(Sr({}, Or), n) : n = Or, r = new le(r), e.country && e.country !== "001") {
    if (!r.hasCountry(e.country))
      throw new Error("Unknown country: ".concat(e.country));
    r.selectNumberingPlan(e.country);
  } else if (e.countryCallingCode)
    r.selectNumberingPlan(e.countryCallingCode);
  else
    return e.phone || "";
  var a = r.countryCallingCode(), i = n.v2 ? e.nationalNumber : e.phone, o;
  switch (t) {
    case "NATIONAL":
      return i ? (o = Ut(i, e.carrierCode, "NATIONAL", r, n), un(o, e.ext, r, n.formatExtension)) : "";
    case "INTERNATIONAL":
      return i ? (o = Ut(i, null, "INTERNATIONAL", r, n), o = "+".concat(a, " ").concat(o), un(o, e.ext, r, n.formatExtension)) : "+".concat(a);
    case "E.164":
      return "+".concat(a).concat(i);
    case "RFC3966":
      return _d({
        number: "+".concat(a).concat(i),
        ext: e.ext
      });
    case "IDD":
      if (!n.fromCountry)
        return;
      var d = Dd(i, e.carrierCode, a, n.fromCountry, r);
      return un(d, e.ext, r, n.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t, '"'));
  }
}
function Ut(e, t, n, r, a) {
  var i = Md(r.formats(), e);
  return i ? Ba(e, i, {
    useInternationalFormat: n === "INTERNATIONAL",
    withNationalPrefix: !(i.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && a && a.nationalPrefix === !1),
    carrierCode: t,
    metadata: r
  }) : e;
}
function Md(e, t) {
  for (var n = Id(e), r; !(r = n()).done; ) {
    var a = r.value;
    if (a.leadingDigitsPatterns().length > 0) {
      var i = a.leadingDigitsPatterns()[a.leadingDigitsPatterns().length - 1];
      if (t.search(i) !== 0)
        continue;
    }
    if (Me(t, a.pattern()))
      return a;
  }
}
function un(e, t, n, r) {
  return t ? r(e, t, n) : e;
}
function Dd(e, t, n, r, a) {
  var i = Ue(r, a.metadata);
  if (i === n) {
    var o = Ut(e, t, "NATIONAL", a);
    return n === "1" ? n + " " + o : o;
  }
  var d = bd(r, void 0, a.metadata);
  if (d)
    return "".concat(d, " ").concat(n, " ").concat(Ut(e, null, "INTERNATIONAL", a));
}
function ht(e) {
  "@babel/helpers - typeof";
  return ht = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ht(e);
}
function wr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function xr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wr(Object(n), !0).forEach(function(r) {
      kd(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function kd(e, t, n) {
  return (t = Ga(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ld(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Er(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ga(r.key), r);
  }
}
function Bd(e, t, n) {
  return t && Er(e.prototype, t), n && Er(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ga(e) {
  var t = Ud(e, "string");
  return ht(t) == "symbol" ? t : t + "";
}
function Ud(e, t) {
  if (ht(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ht(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Wa = /* @__PURE__ */ function() {
  function e(t, n, r) {
    if (Ld(this, e), !t)
      throw new TypeError("First argument is required");
    if (typeof t != "string")
      throw new TypeError("First argument must be a string");
    if (t[0] === "+" && !n)
      throw new TypeError("`metadata` argument not passed");
    if (He(n) && He(n.countries)) {
      r = n;
      var a = t;
      if (!Vd.test(a))
        throw new Error('Invalid `number` argument passed: must consist of a "+" followed by digits');
      var i = Fn(a, void 0, void 0, void 0, r), o = i.countryCallingCode, d = i.number;
      if (n = d, t = o, !n)
        throw new Error("Invalid `number` argument passed: too short");
    }
    if (!n)
      throw new TypeError("`nationalNumber` argument is required");
    if (typeof n != "string")
      throw new TypeError("`nationalNumber` argument must be a string");
    Ia(r);
    var s = Wd(t, r), l = s.country, f = s.countryCallingCode;
    this.country = l, this.countryCallingCode = f, this.nationalNumber = n, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
      return r;
    };
  }
  return Bd(e, [{
    key: "setExt",
    value: function(n) {
      this.ext = n;
    }
  }, {
    key: "getPossibleCountries",
    value: function() {
      return this.country ? [this.country] : rd(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function() {
      return Jo(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function() {
      return nd(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function() {
      var n = new le(this.getMetadata());
      return n.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function(n) {
      return this.number === n.number && this.ext === n.ext;
    }
    // This function was originally meant to be an equivalent for `validatePhoneNumberLength()`,
    // but later it was found out that it doesn't include the possible `TOO_SHORT` result
    // returned from `parsePhoneNumberWithError()` in the original `validatePhoneNumberLength()`,
    // so eventually I simply commented out this method from the `PhoneNumber` class
    // and just left the `validatePhoneNumberLength()` function, even though that one would require
    // and additional step to also validate the actual country / calling code of the phone number.
    // validateLength() {
    // 	const metadata = new Metadata(this.getMetadata())
    // 	metadata.selectNumberingPlan(this.countryCallingCode)
    // 	const result = checkNumberLength(this.nationalNumber, metadata)
    // 	if (result !== 'IS_POSSIBLE') {
    // 		return result
    // 	}
    // }
  }, {
    key: "getType",
    value: function() {
      return An(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "format",
    value: function(n, r) {
      return Fd(this, n, r ? xr(xr({}, r), {}, {
        v2: !0
      }) : {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "formatNational",
    value: function(n) {
      return this.format("NATIONAL", n);
    }
  }, {
    key: "formatInternational",
    value: function(n) {
      return this.format("INTERNATIONAL", n);
    }
  }, {
    key: "getURI",
    value: function(n) {
      return this.format("RFC3966", n);
    }
  }]);
}(), Gd = function(t) {
  return /^[A-Z]{2}$/.test(t);
};
function Wd(e, t) {
  var n, r, a = new le(t);
  return Gd(e) ? (n = e, a.selectNumberingPlan(n), r = a.countryCallingCode()) : r = e, {
    country: n,
    countryCallingCode: r
  };
}
var Vd = /^\+\d+$/;
function rt(e) {
  "@babel/helpers - typeof";
  return rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rt(e);
}
function _r(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Hd(r.key), r);
  }
}
function Kd(e, t, n) {
  return t && _r(e.prototype, t), n && _r(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Hd(e) {
  var t = Yd(e, "string");
  return rt(t) == "symbol" ? t : t + "";
}
function Yd(e, t) {
  if (rt(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (rt(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qd(e, t, n) {
  return t = vt(t), Xd(e, Mn() ? Reflect.construct(t, n || [], vt(e).constructor) : t.apply(e, n));
}
function Xd(e, t) {
  if (t && (rt(t) == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Zd(e);
}
function Zd(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && gt(e, t);
}
function gn(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return gn = function(r) {
    if (r === null || !eu(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(r))
        return t.get(r);
      t.set(r, a);
    }
    function a() {
      return Qd(r, arguments, vt(this).constructor);
    }
    return a.prototype = Object.create(r.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), gt(a, r);
  }, gn(e);
}
function Qd(e, t, n) {
  if (Mn())
    return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, t);
  var a = new (e.bind.apply(e, r))();
  return n && gt(a, n.prototype), a;
}
function Mn() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Mn = function() {
    return !!e;
  })();
}
function eu(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function gt(e, t) {
  return gt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, gt(e, t);
}
function vt(e) {
  return vt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, vt(e);
}
var je = /* @__PURE__ */ function(e) {
  function t(n) {
    var r;
    return zd(this, t), r = qd(this, t, [n]), Object.setPrototypeOf(r, t.prototype), r.name = r.constructor.name, r;
  }
  return Jd(t, e), Kd(t);
}(/* @__PURE__ */ gn(Error)), Ir = new RegExp("(?:" + Ua() + ")$", "i");
function tu(e) {
  var t = e.search(Ir);
  if (t < 0)
    return {};
  for (var n = e.slice(0, t), r = e.match(Ir), a = 1; a < r.length; ) {
    if (r[a])
      return {
        number: n,
        ext: r[a]
      };
    a++;
  }
}
function nu(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = ru(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ru(e, t) {
  if (e) {
    if (typeof e == "string")
      return Tr(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Tr(e, t) : void 0;
  }
}
function Tr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var au = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "０": "0",
  // Fullwidth digit 0
  "１": "1",
  // Fullwidth digit 1
  "２": "2",
  // Fullwidth digit 2
  "３": "3",
  // Fullwidth digit 3
  "４": "4",
  // Fullwidth digit 4
  "５": "5",
  // Fullwidth digit 5
  "６": "6",
  // Fullwidth digit 6
  "７": "7",
  // Fullwidth digit 7
  "８": "8",
  // Fullwidth digit 8
  "９": "9",
  // Fullwidth digit 9
  "٠": "0",
  // Arabic-indic digit 0
  "١": "1",
  // Arabic-indic digit 1
  "٢": "2",
  // Arabic-indic digit 2
  "٣": "3",
  // Arabic-indic digit 3
  "٤": "4",
  // Arabic-indic digit 4
  "٥": "5",
  // Arabic-indic digit 5
  "٦": "6",
  // Arabic-indic digit 6
  "٧": "7",
  // Arabic-indic digit 7
  "٨": "8",
  // Arabic-indic digit 8
  "٩": "9",
  // Arabic-indic digit 9
  "۰": "0",
  // Eastern-Arabic digit 0
  "۱": "1",
  // Eastern-Arabic digit 1
  "۲": "2",
  // Eastern-Arabic digit 2
  "۳": "3",
  // Eastern-Arabic digit 3
  "۴": "4",
  // Eastern-Arabic digit 4
  "۵": "5",
  // Eastern-Arabic digit 5
  "۶": "6",
  // Eastern-Arabic digit 6
  "۷": "7",
  // Eastern-Arabic digit 7
  "۸": "8",
  // Eastern-Arabic digit 8
  "۹": "9"
  // Eastern-Arabic digit 9
};
function Va(e) {
  return au[e];
}
function Gt(e) {
  for (var t = "", n = nu(e.split("")), r; !(r = n()).done; ) {
    var a = r.value, i = Va(a);
    i && (t += i);
  }
  return t;
}
function iu(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = ou(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ou(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ar(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ar(e, t) : void 0;
  }
}
function Ar(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function vn(e) {
  for (var t = "", n = iu(e.split("")), r; !(r = n()).done; ) {
    var a = r.value;
    t += Ka(a, t) || "";
  }
  return t;
}
function Ka(e, t, n) {
  if (e === "+") {
    if (t) {
      typeof n == "function" && n("end");
      return;
    }
    return "+";
  }
  return Va(e);
}
var Ha = "+", du = "[\\-\\.\\(\\)]?", Rr = "([" + he + "]|" + du + ")", uu = "^\\" + Ha + Rr + "*[" + he + "]" + Rr + "*$", su = new RegExp(uu, "g"), bn = he, lu = "[" + bn + "]+((\\-)*[" + bn + "])*", cu = "a-zA-Z", fu = "[" + cu + "]+((\\-)*[" + bn + "])*", $u = "^(" + lu + "\\.)*" + fu + "\\.?$", pu = new RegExp($u, "g"), jr = "tel:", Cn = ";phone-context=", mu = ";isub=";
function yu(e) {
  var t = e.indexOf(Cn);
  if (t < 0)
    return null;
  var n = t + Cn.length;
  if (n >= e.length)
    return "";
  var r = e.indexOf(";", n);
  return r >= 0 ? e.substring(n, r) : e.substring(n);
}
function hu(e) {
  return e === null ? !0 : e.length === 0 ? !1 : su.test(e) || pu.test(e);
}
function gu(e, t) {
  var n = t.extractFormattedPhoneNumber, r = yu(e);
  if (!hu(r))
    throw new je("NOT_A_NUMBER");
  var a;
  if (r === null)
    a = n(e) || "";
  else {
    a = "", r.charAt(0) === Ha && (a += r);
    var i = e.indexOf(jr), o;
    i >= 0 ? o = i + jr.length : o = 0;
    var d = e.indexOf(Cn);
    a += e.substring(o, d);
  }
  var s = a.indexOf(mu);
  if (s > 0 && (a = a.substring(0, s)), a !== "")
    return a;
}
var vu = 250, bu = new RegExp("[" + qt + he + "]"), Cu = new RegExp("[^" + he + "#]+$");
function Pu(e, t, n) {
  if (t = t || {}, n = new le(n), t.defaultCountry && !n.hasCountry(t.defaultCountry))
    throw t.v2 ? new je("INVALID_COUNTRY") : new Error("Unknown country: ".concat(t.defaultCountry));
  var r = Su(e, t.v2, t.extract), a = r.number, i = r.ext, o = r.error;
  if (!a) {
    if (t.v2)
      throw o === "TOO_SHORT" ? new je("TOO_SHORT") : new je("NOT_A_NUMBER");
    return {};
  }
  var d = wu(a, t.defaultCountry, t.defaultCallingCode, n), s = d.country, l = d.nationalNumber, f = d.countryCallingCode, $ = d.countryCallingCodeSource, h = d.carrierCode;
  if (!n.hasSelectedNumberingPlan()) {
    if (t.v2)
      throw new je("INVALID_COUNTRY");
    return {};
  }
  if (!l || l.length < Rn) {
    if (t.v2)
      throw new je("TOO_SHORT");
    return {};
  }
  if (l.length > id) {
    if (t.v2)
      throw new je("TOO_LONG");
    return {};
  }
  if (t.v2) {
    var m = new Wa(f, l, n.metadata);
    return s && (m.country = s), h && (m.carrierCode = h), i && (m.ext = i), m.__countryCallingCodeSource = $, m;
  }
  var P = (t.extended ? n.hasSelectedNumberingPlan() : s) ? Me(l, n.nationalNumberPattern()) : !1;
  return t.extended ? {
    country: s,
    countryCallingCode: f,
    carrierCode: h,
    valid: P,
    possible: P ? !0 : !!(t.extended === !0 && n.possibleLengths() && ja(l, s, n)),
    phone: l,
    ext: i
  } : P ? Ou(s, l, i) : {};
}
function Nu(e, t, n) {
  if (e) {
    if (e.length > vu) {
      if (n)
        throw new je("TOO_LONG");
      return;
    }
    if (t === !1)
      return e;
    var r = e.search(bu);
    if (!(r < 0))
      return e.slice(r).replace(Cu, "");
  }
}
function Su(e, t, n) {
  var r = gu(e, {
    extractFormattedPhoneNumber: function(o) {
      return Nu(o, n, t);
    }
  });
  if (!r)
    return {};
  if (!xd(r))
    return Ed(r) ? {
      error: "TOO_SHORT"
    } : {};
  var a = tu(r);
  return a.ext ? a : {
    number: r
  };
}
function Ou(e, t, n) {
  var r = {
    country: e,
    phone: t
  };
  return n && (r.ext = n), r;
}
function wu(e, t, n, r) {
  var a = Fn(vn(e), void 0, t, n, r.metadata), i = a.countryCallingCodeSource, o = a.countryCallingCode, d = a.number, s;
  if (o)
    r.selectNumberingPlan(o);
  else if (d && (t || n))
    r.selectNumberingPlan(t, n), t && (s = t), o = n || Ue(t, r.metadata);
  else
    return {};
  if (!d)
    return {
      countryCallingCodeSource: i,
      countryCallingCode: o
    };
  var l = hn(vn(d), s, r), f = l.nationalNumber, $ = l.carrierCode, h = jn(o, {
    nationalNumber: f,
    metadata: r
  });
  return h && (s = h, h === "001" || r.selectNumberingPlan(s)), {
    country: s,
    countryCallingCode: o,
    countryCallingCodeSource: i,
    nationalNumber: f,
    carrierCode: $
  };
}
function bt(e) {
  "@babel/helpers - typeof";
  return bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bt(e);
}
function Fr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fr(Object(n), !0).forEach(function(r) {
      xu(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function xu(e, t, n) {
  return (t = Eu(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Eu(e) {
  var t = _u(e, "string");
  return bt(t) == "symbol" ? t : t + "";
}
function _u(e, t) {
  if (bt(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (bt(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Iu(e, t, n) {
  return Pu(e, Mr(Mr({}, t), {}, {
    v2: !0
  }), n);
}
function Ct(e) {
  "@babel/helpers - typeof";
  return Ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ct(e);
}
function Dr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Tu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dr(Object(n), !0).forEach(function(r) {
      Au(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Au(e, t, n) {
  return (t = Ru(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ru(e) {
  var t = ju(e, "string");
  return Ct(t) == "symbol" ? t : t + "";
}
function ju(e, t) {
  if (Ct(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ct(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Fu(e, t) {
  return Lu(e) || ku(e, t) || Du(e, t) || Mu();
}
function Mu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Du(e, t) {
  if (e) {
    if (typeof e == "string")
      return kr(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? kr(e, t) : void 0;
  }
}
function kr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ku(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, i, o, d = [], s = !0, l = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        s = !1;
      } else
        for (; !(s = (r = i.call(n)).done) && (d.push(r.value), d.length !== t); s = !0)
          ;
    } catch (f) {
      l = !0, a = f;
    } finally {
      try {
        if (!s && n.return != null && (o = n.return(), Object(o) !== o))
          return;
      } finally {
        if (l)
          throw a;
      }
    }
    return d;
  }
}
function Lu(e) {
  if (Array.isArray(e))
    return e;
}
function Ya(e) {
  var t = Array.prototype.slice.call(e), n = Fu(t, 4), r = n[0], a = n[1], i = n[2], o = n[3], d, s, l;
  if (typeof r == "string")
    d = r;
  else
    throw new TypeError("A text for parsing must be a string.");
  if (!a || typeof a == "string")
    o ? (s = i, l = o) : (s = void 0, l = i), a && (s = Tu({
      defaultCountry: a
    }, s));
  else if (He(a))
    i ? (s = a, l = i) : l = a;
  else
    throw new Error("Invalid second argument: ".concat(a));
  return {
    text: d,
    options: s,
    metadata: l
  };
}
function Pt(e) {
  "@babel/helpers - typeof";
  return Pt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pt(e);
}
function Lr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lr(Object(n), !0).forEach(function(r) {
      Bu(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Bu(e, t, n) {
  return (t = Uu(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Uu(e) {
  var t = Gu(e, "string");
  return Pt(t) == "symbol" ? t : t + "";
}
function Gu(e, t) {
  if (Pt(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Pt(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function za(e, t, n) {
  t && t.defaultCountry && !Ta(t.defaultCountry, n) && (t = Br(Br({}, t), {}, {
    defaultCountry: void 0
  }));
  try {
    return Iu(e, t, n);
  } catch (r) {
    if (!(r instanceof je))
      throw r;
  }
}
function Wu() {
  var e = Ya(arguments), t = e.text, n = e.options, r = e.metadata;
  return za(t, n, r);
}
function Nt(e) {
  "@babel/helpers - typeof";
  return Nt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nt(e);
}
function Ur(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ur(Object(n), !0).forEach(function(r) {
      Vu(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ur(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Vu(e, t, n) {
  return (t = Ku(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ku(e) {
  var t = Hu(e, "string");
  return Nt(t) == "symbol" ? t : t + "";
}
function Hu(e, t) {
  if (Nt(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Nt(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Yu() {
  var e = Ya(arguments), t = e.text, n = e.options, r = e.metadata;
  n = Gr(Gr({}, n), {}, {
    extract: !1
  });
  var a = za(t, n, r);
  return a && a.isValid() || !1;
}
function St(e) {
  "@babel/helpers - typeof";
  return St = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, St(e);
}
function zu(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wr(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Xu(r.key), r);
  }
}
function qu(e, t, n) {
  return t && Wr(e.prototype, t), n && Wr(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Xu(e) {
  var t = Zu(e, "string");
  return St(t) == "symbol" ? t : t + "";
}
function Zu(e, t) {
  if (St(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (St(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ju = /* @__PURE__ */ function() {
  function e(t) {
    var n = t.onCountryChange, r = t.onCallingCodeChange;
    zu(this, e), this.onCountryChange = n, this.onCallingCodeChange = r;
  }
  return qu(e, [{
    key: "reset",
    value: function(n) {
      var r = n.country, a = n.callingCode;
      this.international = !1, this.missingPlus = !1, this.IDDPrefix = void 0, this.callingCode = void 0, this.digits = "", this.resetNationalSignificantNumber(), this.initCountryAndCallingCode(r, a);
    }
  }, {
    key: "resetNationalSignificantNumber",
    value: function() {
      this.nationalSignificantNumber = this.getNationalDigits(), this.nationalSignificantNumberIsModified = !1, this.nationalPrefix = void 0, this.carrierCode = void 0, this.prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix = void 0;
    }
  }, {
    key: "update",
    value: function(n) {
      for (var r = 0, a = Object.keys(n); r < a.length; r++) {
        var i = a[r];
        this[i] = n[i];
      }
    }
  }, {
    key: "initCountryAndCallingCode",
    value: function(n, r) {
      this.setCountry(n), this.setCallingCode(r);
    }
  }, {
    key: "setCountry",
    value: function(n) {
      this.country = n, this.onCountryChange(n);
    }
  }, {
    key: "setCallingCode",
    value: function(n) {
      this.callingCode = n, this.onCallingCodeChange(n, this.country);
    }
  }, {
    key: "startInternationalNumber",
    value: function(n, r) {
      this.international = !0, this.initCountryAndCallingCode(n, r);
    }
  }, {
    key: "appendDigits",
    value: function(n) {
      this.digits += n;
    }
  }, {
    key: "appendNationalSignificantNumberDigits",
    value: function(n) {
      this.nationalSignificantNumber += n;
    }
    /**
     * Returns the part of `this.digits` that corresponds to the national number.
     * Basically, all digits that have been input by the user, except for the
     * international prefix and the country calling code part
     * (if the number is an international one).
     * @return {string}
     */
  }, {
    key: "getNationalDigits",
    value: function() {
      return this.international ? this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0)) : this.digits;
    }
  }, {
    key: "getDigitsWithoutInternationalPrefix",
    value: function() {
      return this.international && this.IDDPrefix ? this.digits.slice(this.IDDPrefix.length) : this.digits;
    }
  }]);
}();
function Qu(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = es(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function es(e, t) {
  if (e) {
    if (typeof e == "string")
      return Vr(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Vr(e, t) : void 0;
  }
}
function Vr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var xe = "x", sn = new RegExp(xe);
function kt(e, t) {
  if (t < 1)
    return "";
  for (var n = ""; t > 1; )
    t & 1 && (n += e), t >>= 1, e += e;
  return n + e;
}
function Kr(e, t) {
  return e[t] === ")" && t++, ts(e.slice(0, t));
}
function ts(e) {
  for (var t = [], n = 0; n < e.length; )
    e[n] === "(" ? t.push(n) : e[n] === ")" && t.pop(), n++;
  var r = 0, a = "";
  t.push(e.length);
  for (var i = 0, o = t; i < o.length; i++) {
    var d = o[i];
    a += e.slice(r, d), r = d + 1;
  }
  return a;
}
function ns(e, t, n) {
  for (var r = Qu(n.split("")), a; !(a = r()).done; ) {
    var i = a.value;
    if (e.slice(t + 1).search(sn) < 0)
      return;
    t = e.search(sn), e = e.replace(sn, i);
  }
  return [e, t];
}
function rs(e, t, n) {
  var r = n.metadata, a = n.shouldTryNationalPrefixFormattingRule, i = n.getSeparatorAfterNationalPrefix, o = new RegExp("^(?:".concat(t.pattern(), ")$"));
  if (o.test(e.nationalSignificantNumber))
    return is(e, t, {
      metadata: r,
      shouldTryNationalPrefixFormattingRule: a,
      getSeparatorAfterNationalPrefix: i
    });
}
function as(e, t, n) {
  return zt(e, t, n) === "IS_POSSIBLE";
}
function is(e, t, n) {
  var r = n.metadata, a = n.shouldTryNationalPrefixFormattingRule, i = n.getSeparatorAfterNationalPrefix;
  if (e.nationalSignificantNumber, e.international, e.nationalPrefix, e.carrierCode, a(t)) {
    var o = Hr(e, t, {
      useNationalPrefixFormattingRule: !0,
      getSeparatorAfterNationalPrefix: i,
      metadata: r
    });
    if (o)
      return o;
  }
  return Hr(e, t, {
    useNationalPrefixFormattingRule: !1,
    getSeparatorAfterNationalPrefix: i,
    metadata: r
  });
}
function Hr(e, t, n) {
  var r = n.metadata, a = n.useNationalPrefixFormattingRule, i = n.getSeparatorAfterNationalPrefix, o = Ba(e.nationalSignificantNumber, t, {
    carrierCode: e.carrierCode,
    useInternationalFormat: e.international,
    withNationalPrefix: a,
    metadata: r
  });
  if (a || (e.nationalPrefix ? o = e.nationalPrefix + i(t) + o : e.prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix && (o = e.prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix + " " + o)), os(o, e))
    return o;
}
function os(e, t) {
  return Gt(e) === t.getNationalDigits();
}
function Ot(e) {
  "@babel/helpers - typeof";
  return Ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ot(e);
}
function ds(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Yr(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ss(r.key), r);
  }
}
function us(e, t, n) {
  return t && Yr(e.prototype, t), n && Yr(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ss(e) {
  var t = ls(e, "string");
  return Ot(t) == "symbol" ? t : t + "";
}
function ls(e, t) {
  if (Ot(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ot(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var cs = /* @__PURE__ */ function() {
  function e() {
    ds(this, e);
  }
  return us(e, [{
    key: "parse",
    value: function(n) {
      if (this.context = [{
        or: !0,
        instructions: []
      }], this.parsePattern(n), this.context.length !== 1)
        throw new Error("Non-finalized contexts left when pattern parse ended");
      var r = this.context[0], a = r.branches, i = r.instructions;
      if (a)
        return {
          op: "|",
          args: a.concat([ln(i)])
        };
      if (i.length === 0)
        throw new Error("Pattern is required");
      return i.length === 1 ? i[0] : i;
    }
  }, {
    key: "startContext",
    value: function(n) {
      this.context.push(n);
    }
  }, {
    key: "endContext",
    value: function() {
      this.context.pop();
    }
  }, {
    key: "getContext",
    value: function() {
      return this.context[this.context.length - 1];
    }
  }, {
    key: "parsePattern",
    value: function(n) {
      if (!n)
        throw new Error("Pattern is required");
      var r = n.match(ps);
      if (!r) {
        if ($s.test(n))
          throw new Error("Illegal characters found in a pattern: ".concat(n));
        this.getContext().instructions = this.getContext().instructions.concat(n.split(""));
        return;
      }
      var a = r[1], i = n.slice(0, r.index), o = n.slice(r.index + a.length);
      switch (a) {
        case "(?:":
          i && this.parsePattern(i), this.startContext({
            or: !0,
            instructions: [],
            branches: []
          });
          break;
        case ")":
          if (!this.getContext().or)
            throw new Error('")" operator must be preceded by "(?:" operator');
          if (i && this.parsePattern(i), this.getContext().instructions.length === 0)
            throw new Error('No instructions found after "|" operator in an "or" group');
          var d = this.getContext(), s = d.branches;
          s.push(ln(this.getContext().instructions)), this.endContext(), this.getContext().instructions.push({
            op: "|",
            args: s
          });
          break;
        case "|":
          if (!this.getContext().or)
            throw new Error('"|" operator can only be used inside "or" groups');
          if (i && this.parsePattern(i), !this.getContext().branches)
            if (this.context.length === 1)
              this.getContext().branches = [];
            else
              throw new Error('"branches" not found in an "or" group context');
          this.getContext().branches.push(ln(this.getContext().instructions)), this.getContext().instructions = [];
          break;
        case "[":
          i && this.parsePattern(i), this.startContext({
            oneOfSet: !0
          });
          break;
        case "]":
          if (!this.getContext().oneOfSet)
            throw new Error('"]" operator must be preceded by "[" operator');
          this.endContext(), this.getContext().instructions.push({
            op: "[]",
            args: fs(i)
          });
          break;
        default:
          throw new Error("Unknown operator: ".concat(a));
      }
      o && this.parsePattern(o);
    }
  }]);
}();
function fs(e) {
  for (var t = [], n = 0; n < e.length; ) {
    if (e[n] === "-") {
      if (n === 0 || n === e.length - 1)
        throw new Error("Couldn't parse a one-of set pattern: ".concat(e));
      for (var r = e[n - 1].charCodeAt(0) + 1, a = e[n + 1].charCodeAt(0) - 1, i = r; i <= a; )
        t.push(String.fromCharCode(i)), i++;
    } else
      t.push(e[n]);
    n++;
  }
  return t;
}
var $s = /[\(\)\[\]\?\:\|]/, ps = new RegExp(
  // any of:
  "(\\||\\(\\?\\:|\\)|\\[|\\])"
);
function ln(e) {
  return e.length === 1 ? e[0] : e;
}
function zr(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = ms(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ms(e, t) {
  if (e) {
    if (typeof e == "string")
      return qr(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? qr(e, t) : void 0;
  }
}
function qr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function wt(e) {
  "@babel/helpers - typeof";
  return wt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wt(e);
}
function ys(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xr(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, gs(r.key), r);
  }
}
function hs(e, t, n) {
  return t && Xr(e.prototype, t), n && Xr(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function gs(e) {
  var t = vs(e, "string");
  return wt(t) == "symbol" ? t : t + "";
}
function vs(e, t) {
  if (wt(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (wt(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var bs = /* @__PURE__ */ function() {
  function e(t) {
    ys(this, e), this.matchTree = new cs().parse(t);
  }
  return hs(e, [{
    key: "match",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.allowOverflow;
      if (!n)
        throw new Error("String is required");
      var i = Pn(n.split(""), this.matchTree, !0);
      if (i && i.match && delete i.matchedChars, !(i && i.overflow && !a))
        return i;
    }
  }]);
}();
function Pn(e, t, n) {
  if (typeof t == "string") {
    var r = e.join("");
    return t.indexOf(r) === 0 ? e.length === t.length ? {
      match: !0,
      matchedChars: e
    } : {
      partialMatch: !0
      // matchedChars: characters
    } : r.indexOf(t) === 0 ? n && e.length > t.length ? {
      overflow: !0
    } : {
      match: !0,
      matchedChars: e.slice(0, t.length)
    } : void 0;
  }
  if (Array.isArray(t)) {
    for (var a = e.slice(), i = 0; i < t.length; ) {
      var o = t[i], d = Pn(a, o, n && i === t.length - 1);
      if (d) {
        if (d.overflow)
          return d;
        if (d.match) {
          if (a = a.slice(d.matchedChars.length), a.length === 0)
            return i === t.length - 1 ? {
              match: !0,
              matchedChars: e
            } : {
              partialMatch: !0
              // matchedChars: characters
            };
        } else {
          if (d.partialMatch)
            return {
              partialMatch: !0
              // matchedChars: characters
            };
          throw new Error(`Unsupported match result:
`.concat(JSON.stringify(d, null, 2)));
        }
      } else
        return;
      i++;
    }
    return n ? {
      overflow: !0
    } : {
      match: !0,
      matchedChars: e.slice(0, e.length - a.length)
    };
  }
  switch (t.op) {
    case "|":
      for (var s, l = zr(t.args), f; !(f = l()).done; ) {
        var $ = f.value, h = Pn(e, $, n);
        if (h) {
          if (h.overflow)
            return h;
          if (h.match)
            return {
              match: !0,
              matchedChars: h.matchedChars
            };
          if (h.partialMatch)
            s = !0;
          else
            throw new Error(`Unsupported match result:
`.concat(JSON.stringify(h, null, 2)));
        }
      }
      return s ? {
        partialMatch: !0
        // matchedChars: ...
      } : void 0;
    case "[]":
      for (var m = zr(t.args), P; !(P = m()).done; ) {
        var E = P.value;
        if (e[0] === E)
          return e.length === 1 ? {
            match: !0,
            matchedChars: e
          } : n ? {
            overflow: !0
          } : {
            match: !0,
            matchedChars: [E]
          };
      }
      return;
    default:
      throw new Error("Unsupported instruction tree: ".concat(t));
  }
}
function xt(e) {
  "@babel/helpers - typeof";
  return xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xt(e);
}
function Zr(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Cs(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cs(e, t) {
  if (e) {
    if (typeof e == "string")
      return Jr(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Jr(e, t) : void 0;
  }
}
function Jr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Ps(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qr(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ss(r.key), r);
  }
}
function Ns(e, t, n) {
  return t && Qr(e.prototype, t), n && Qr(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ss(e) {
  var t = Os(e, "string");
  return xt(t) == "symbol" ? t : t + "";
}
function Os(e, t) {
  if (xt(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (xt(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Nn = "9", ws = 15, xs = kt(Nn, ws), Es = /[- ]/, _s = function() {
  return /\[([^\[\]])*\]/g;
}, Is = function() {
  return /\d(?=[^,}][^,}])/g;
}, Ts = new RegExp("[" + Ee + "]*\\$1[" + Ee + "]*(\\$\\d[" + Ee + "]*)*$"), ea = 3, As = /* @__PURE__ */ function() {
  function e(t) {
    t.state;
    var n = t.metadata;
    Ps(this, e), this.metadata = n, this.resetFormat();
  }
  return Ns(e, [{
    key: "resetFormat",
    value: function() {
      this.chosenFormat = void 0, this.template = void 0, this.nationalNumberTemplate = void 0, this.populatedNationalNumberTemplate = void 0, this.populatedNationalNumberTemplatePosition = -1;
    }
  }, {
    key: "reset",
    value: function(n, r) {
      this.resetFormat(), n ? (this.isNANP = n.callingCode() === "1", this.matchingFormats = n.formats(), r.nationalSignificantNumber && this.narrowDownMatchingFormats(r)) : (this.isNANP = void 0, this.matchingFormats = []);
    }
    /**
     * Formats an updated phone number.
     * @param  {string} nextDigits — Additional phone number digits.
     * @param  {object} state — `AsYouType` state.
     * @return {[string]} Returns undefined if the updated phone number can't be formatted using any of the available formats.
     */
  }, {
    key: "format",
    value: function(n, r) {
      var a = this;
      if (as(r.nationalSignificantNumber, r.country, this.metadata))
        for (var i = Zr(this.matchingFormats), o; !(o = i()).done; ) {
          var d = o.value, s = rs(r, d, {
            metadata: this.metadata,
            shouldTryNationalPrefixFormattingRule: function(f) {
              return a.shouldTryNationalPrefixFormattingRule(f, {
                international: r.international,
                nationalPrefix: r.nationalPrefix
              });
            },
            getSeparatorAfterNationalPrefix: function(f) {
              return a.getSeparatorAfterNationalPrefix(f);
            }
          });
          if (s)
            return this.resetFormat(), this.chosenFormat = d, this.setNationalNumberTemplate(s.replace(/\d/g, xe), r), this.populatedNationalNumberTemplate = s, this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf(xe), s;
        }
      return this.formatNationalNumberWithNextDigits(n, r);
    }
    // Formats the next phone number digits.
  }, {
    key: "formatNationalNumberWithNextDigits",
    value: function(n, r) {
      var a = this.chosenFormat, i = this.chooseFormat(r);
      if (i)
        return i === a ? this.formatNextNationalNumberDigits(n) : this.formatNextNationalNumberDigits(r.getNationalDigits());
    }
  }, {
    key: "narrowDownMatchingFormats",
    value: function(n) {
      var r = this, a = n.nationalSignificantNumber, i = n.nationalPrefix, o = n.international, d = a, s = d.length - ea;
      s < 0 && (s = 0), this.matchingFormats = this.matchingFormats.filter(function(l) {
        return r.formatSuits(l, o, i) && r.formatMatches(l, d, s);
      }), this.chosenFormat && this.matchingFormats.indexOf(this.chosenFormat) === -1 && this.resetFormat();
    }
  }, {
    key: "formatSuits",
    value: function(n, r, a) {
      return !(a && !n.usesNationalPrefix() && // !format.domesticCarrierCodeFormattingRule() &&
      !n.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !r && !a && n.nationalPrefixIsMandatoryWhenFormattingInNationalFormat());
    }
  }, {
    key: "formatMatches",
    value: function(n, r, a) {
      var i = n.leadingDigitsPatterns().length;
      if (i === 0)
        return !0;
      a = Math.min(a, i - 1);
      var o = n.leadingDigitsPatterns()[a];
      if (r.length < ea)
        try {
          return new bs(o).match(r, {
            allowOverflow: !0
          }) !== void 0;
        } catch (d) {
          return console.error(d), !0;
        }
      return new RegExp("^(".concat(o, ")")).test(r);
    }
  }, {
    key: "getFormatFormat",
    value: function(n, r) {
      return r ? n.internationalFormat() : n.format();
    }
  }, {
    key: "chooseFormat",
    value: function(n) {
      for (var r = this, a = function() {
        var l = d.value;
        return r.chosenFormat === l ? 0 : Ts.test(r.getFormatFormat(l, n.international)) ? r.createTemplateForFormat(l, n) ? (r.chosenFormat = l, 0) : (r.matchingFormats = r.matchingFormats.filter(function(f) {
          return f !== l;
        }), 1) : 1;
      }, i, o = Zr(this.matchingFormats.slice()), d; !(d = o()).done && (i = a(), i !== 0); )
        ;
      return this.chosenFormat || this.resetFormat(), this.chosenFormat;
    }
  }, {
    key: "createTemplateForFormat",
    value: function(n, r) {
      if (!(n.pattern().indexOf("|") >= 0)) {
        var a = this.getTemplateForFormat(n, r);
        if (a)
          return this.setNationalNumberTemplate(a, r), !0;
      }
    }
  }, {
    key: "getSeparatorAfterNationalPrefix",
    value: function(n) {
      return this.isNANP || n && n.nationalPrefixFormattingRule() && Es.test(n.nationalPrefixFormattingRule()) ? " " : "";
    }
  }, {
    key: "getInternationalPrefixBeforeCountryCallingCode",
    value: function(n, r) {
      var a = n.IDDPrefix, i = n.missingPlus;
      return a ? r && r.spacing === !1 ? a : a + " " : i ? "" : "+";
    }
  }, {
    key: "getTemplate",
    value: function(n) {
      if (this.template) {
        for (var r = -1, a = 0, i = n.international ? this.getInternationalPrefixBeforeCountryCallingCode(n, {
          spacing: !1
        }) : ""; a < i.length + n.getDigitsWithoutInternationalPrefix().length; )
          r = this.template.indexOf(xe, r + 1), a++;
        return Kr(this.template, r + 1);
      }
    }
  }, {
    key: "setNationalNumberTemplate",
    value: function(n, r) {
      this.nationalNumberTemplate = n, this.populatedNationalNumberTemplate = n, this.populatedNationalNumberTemplatePosition = -1, r.international ? this.template = this.getInternationalPrefixBeforeCountryCallingCode(r).replace(/[\d\+]/g, xe) + kt(xe, r.callingCode.length) + " " + n : this.template = n;
    }
    /**
     * Generates formatting template for a national phone number,
     * optionally containing a national prefix, for a format.
     * @param  {Format} format
     * @param  {string} nationalPrefix
     * @return {string}
     */
  }, {
    key: "getTemplateForFormat",
    value: function(n, r) {
      var a = r.nationalSignificantNumber, i = r.international, o = r.nationalPrefix, d = r.prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix, s = n.pattern();
      s = s.replace(_s(), "\\d").replace(Is(), "\\d");
      var l = xs.match(s)[0];
      if (!(a.length > l.length)) {
        var f = new RegExp("^" + s + "$"), $ = a.replace(/\d/g, Nn);
        f.test($) && (l = $);
        var h = this.getFormatFormat(n, i), m;
        if (this.shouldTryNationalPrefixFormattingRule(n, {
          international: i,
          nationalPrefix: o
        })) {
          var P = h.replace(La, n.nationalPrefixFormattingRule());
          if (Gt(n.nationalPrefixFormattingRule()) === (o || "") + Gt("$1") && (h = P, m = !0, o))
            for (var E = o.length; E > 0; )
              h = h.replace(/\d/, xe), E--;
        }
        var y = l.replace(new RegExp(s), h).replace(new RegExp(Nn, "g"), xe);
        return m || (d ? y = kt(xe, d.length) + " " + y : o && (y = kt(xe, o.length) + this.getSeparatorAfterNationalPrefix(n) + y)), i && (y = ka(y)), y;
      }
    }
  }, {
    key: "formatNextNationalNumberDigits",
    value: function(n) {
      var r = ns(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, n);
      if (!r) {
        this.resetFormat();
        return;
      }
      return this.populatedNationalNumberTemplate = r[0], this.populatedNationalNumberTemplatePosition = r[1], Kr(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1);
    }
  }, {
    key: "shouldTryNationalPrefixFormattingRule",
    value: function(n, r) {
      var a = r.international, i = r.nationalPrefix;
      if (n.nationalPrefixFormattingRule()) {
        var o = n.usesNationalPrefix();
        if (o && i || !o && !a)
          return !0;
      }
    }
  }]);
}();
function Et(e) {
  "@babel/helpers - typeof";
  return Et = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Et(e);
}
function qa(e, t) {
  return Ms(e) || Fs(e, t) || js(e, t) || Rs();
}
function Rs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function js(e, t) {
  if (e) {
    if (typeof e == "string")
      return ta(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ta(e, t) : void 0;
  }
}
function ta(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Fs(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, i, o, d = [], s = !0, l = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        s = !1;
      } else
        for (; !(s = (r = i.call(n)).done) && (d.push(r.value), d.length !== t); s = !0)
          ;
    } catch (f) {
      l = !0, a = f;
    } finally {
      try {
        if (!s && n.return != null && (o = n.return(), Object(o) !== o))
          return;
      } finally {
        if (l)
          throw a;
      }
    }
    return d;
  }
}
function Ms(e) {
  if (Array.isArray(e))
    return e;
}
function Ds(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function na(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ls(r.key), r);
  }
}
function ks(e, t, n) {
  return t && na(e.prototype, t), n && na(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ls(e) {
  var t = Bs(e, "string");
  return Et(t) == "symbol" ? t : t + "";
}
function Bs(e, t) {
  if (Et(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Et(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Us = "[" + Ee + he + "]+", Gs = new RegExp("^" + Us + "$", "i"), Ws = "(?:[" + qt + "][" + Ee + he + "]*|[" + Ee + he + "]+)", Vs = new RegExp("[^" + Ee + he + "]+.*$"), Ks = /[^\d\[\]]/, Hs = /* @__PURE__ */ function() {
  function e(t) {
    var n = t.defaultCountry, r = t.defaultCallingCode, a = t.metadata, i = t.onNationalSignificantNumberChange;
    Ds(this, e), this.defaultCountry = n, this.defaultCallingCode = r, this.metadata = a, this.onNationalSignificantNumberChange = i;
  }
  return ks(e, [{
    key: "input",
    value: function(n, r) {
      var a = qs(n), i = qa(a, 2), o = i[0], d = i[1], s = Gt(o), l;
      return d && (r.digits || (r.startInternationalNumber(void 0, void 0), s || (l = !0))), s && this.inputDigits(s, r), {
        digits: s,
        justLeadingPlus: l
      };
    }
    /**
     * Inputs "next" phone number digits.
     * @param  {string} digits
     * @return {string} [formattedNumber] Formatted national phone number (if it can be formatted at this stage). Returning `undefined` means "don't format the national phone number at this stage".
     */
  }, {
    key: "inputDigits",
    value: function(n, r) {
      var a = r.digits, i = a.length < 3 && a.length + n.length >= 3;
      if (r.appendDigits(n), i && this.extractIddPrefix(r), this.isWaitingForCountryCallingCode(r)) {
        if (!this.extractCountryCallingCode(r))
          return;
      } else
        r.appendNationalSignificantNumberDigits(n);
      r.international || this.hasExtractedNationalSignificantNumber || this.extractNationalSignificantNumber(r.getNationalDigits(), function(o) {
        return r.update(o);
      });
    }
  }, {
    key: "isWaitingForCountryCallingCode",
    value: function(n) {
      var r = n.international, a = n.callingCode;
      return r && !a;
    }
    // Extracts a country calling code from a number
    // being entered in internatonal format.
  }, {
    key: "extractCountryCallingCode",
    value: function(n) {
      var r = Fn("+" + n.getDigitsWithoutInternationalPrefix(), n.country, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), a = r.countryCallingCode, i = r.number;
      if (a)
        return n.setCallingCode(a), n.update({
          nationalSignificantNumber: i
        }), !0;
    }
  }, {
    key: "reset",
    value: function(n) {
      if (n) {
        this.hasSelectedNumberingPlan = !0;
        var r = n._nationalPrefixForParsing();
        this.couldPossiblyExtractAnotherNationalSignificantNumber = r && Ks.test(r);
      } else
        this.hasSelectedNumberingPlan = void 0, this.couldPossiblyExtractAnotherNationalSignificantNumber = void 0;
    }
    /**
     * Extracts a national (significant) number from user input.
     * Google's library is different in that it only applies `national_prefix_for_parsing`
     * and doesn't apply `national_prefix_transform_rule` after that.
     * https://github.com/google/libphonenumber/blob/a3d70b0487875475e6ad659af404943211d26456/java/libphonenumber/src/com/google/i18n/phonenumbers/AsYouTypeFormatter.java#L539
     * @return {boolean} [extracted]
     */
  }, {
    key: "extractNationalSignificantNumber",
    value: function(n, r) {
      if (this.hasSelectedNumberingPlan) {
        var a = yn(n, this.metadata), i = a.nationalPrefix, o = a.nationalNumber, d = a.carrierCode;
        if (o !== n)
          return this.onExtractedNationalNumber(i, d, o, n, r), !0;
      }
    }
    /**
     * In Google's code this function is called "attempt to extract longer NDD".
     * "Some national prefixes are a substring of others", they say.
     * @return {boolean} [result] — Returns `true` if extracting a national prefix produced different results from what they were.
     */
  }, {
    key: "extractAnotherNationalSignificantNumber",
    value: function(n, r, a) {
      if (!this.hasExtractedNationalSignificantNumber)
        return this.extractNationalSignificantNumber(n, a);
      if (this.couldPossiblyExtractAnotherNationalSignificantNumber) {
        var i = yn(n, this.metadata), o = i.nationalPrefix, d = i.nationalNumber, s = i.carrierCode;
        if (d !== r)
          return this.onExtractedNationalNumber(o, s, d, n, a), !0;
      }
    }
  }, {
    key: "onExtractedNationalNumber",
    value: function(n, r, a, i, o) {
      var d = !1, s, l = i.lastIndexOf(a);
      if (l < 0 || l !== i.length - a.length)
        d = !0;
      else {
        var f = i.slice(0, l);
        f && f !== n && (s = f);
      }
      o({
        nationalPrefix: n,
        carrierCode: r,
        nationalSignificantNumber: a,
        nationalSignificantNumberIsModified: d,
        prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix: s
      }), this.hasExtractedNationalSignificantNumber = !0, this.onNationalSignificantNumberChange();
    }
  }, {
    key: "reExtractNationalSignificantNumber",
    value: function(n) {
      if (this.extractAnotherNationalSignificantNumber(n.getNationalDigits(), n.nationalSignificantNumber, function(r) {
        return n.update(r);
      }))
        return !0;
      if (this.extractIddPrefix(n))
        return this.extractCallingCodeAndNationalSignificantNumber(n), !0;
      if (this.fixMissingPlus(n))
        return this.extractCallingCodeAndNationalSignificantNumber(n), !0;
    }
  }, {
    key: "extractIddPrefix",
    value: function(n) {
      var r = n.international, a = n.IDDPrefix, i = n.digits;
      if (n.nationalSignificantNumber, !(r || a)) {
        var o = Fa(i, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
        if (o !== void 0 && o !== i)
          return n.update({
            IDDPrefix: i.slice(0, i.length - o.length)
          }), this.startInternationalNumber(n, {
            country: void 0,
            callingCode: void 0
          }), !0;
      }
    }
  }, {
    key: "fixMissingPlus",
    value: function(n) {
      if (!n.international) {
        var r = Da(n.digits, n.country, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), a = r.countryCallingCode;
        if (a)
          return n.update({
            missingPlus: !0
          }), this.startInternationalNumber(n, {
            country: n.country,
            callingCode: a
          }), !0;
      }
    }
  }, {
    key: "startInternationalNumber",
    value: function(n, r) {
      var a = r.country, i = r.callingCode;
      n.startInternationalNumber(a, i), n.nationalSignificantNumber && (n.resetNationalSignificantNumber(), this.onNationalSignificantNumberChange(), this.hasExtractedNationalSignificantNumber = void 0);
    }
  }, {
    key: "extractCallingCodeAndNationalSignificantNumber",
    value: function(n) {
      this.extractCountryCallingCode(n) && this.extractNationalSignificantNumber(n.getNationalDigits(), function(r) {
        return n.update(r);
      });
    }
  }]);
}();
function Ys(e) {
  var t = e.search(Ws);
  if (!(t < 0)) {
    e = e.slice(t);
    var n;
    return e[0] === "+" && (n = !0, e = e.slice(1)), e = e.replace(Vs, ""), n && (e = "+" + e), e;
  }
}
function zs(e) {
  var t = Ys(e) || "";
  return t[0] === "+" ? [t.slice(1), !0] : [t];
}
function qs(e) {
  var t = zs(e), n = qa(t, 2), r = n[0], a = n[1];
  return Gs.test(r) || (r = ""), [r, a];
}
function _t(e) {
  "@babel/helpers - typeof";
  return _t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _t(e);
}
function Xs(e, t) {
  return el(e) || Qs(e, t) || Js(e, t) || Zs();
}
function Zs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Js(e, t) {
  if (e) {
    if (typeof e == "string")
      return ra(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ra(e, t) : void 0;
  }
}
function ra(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Qs(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, i, o, d = [], s = !0, l = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        s = !1;
      } else
        for (; !(s = (r = i.call(n)).done) && (d.push(r.value), d.length !== t); s = !0)
          ;
    } catch (f) {
      l = !0, a = f;
    } finally {
      try {
        if (!s && n.return != null && (o = n.return(), Object(o) !== o))
          return;
      } finally {
        if (l)
          throw a;
      }
    }
    return d;
  }
}
function el(e) {
  if (Array.isArray(e))
    return e;
}
function tl(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function aa(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, rl(r.key), r);
  }
}
function nl(e, t, n) {
  return t && aa(e.prototype, t), n && aa(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function rl(e) {
  var t = al(e, "string");
  return _t(t) == "symbol" ? t : t + "";
}
function al(e, t) {
  if (_t(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (_t(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var it = /* @__PURE__ */ function() {
  function e(t, n) {
    tl(this, e), this.metadata = new le(n);
    var r = this.getCountryAndCallingCode(t), a = Xs(r, 2), i = a[0], o = a[1];
    this.defaultCountry = i, this.defaultCallingCode = o, this.reset();
  }
  return nl(e, [{
    key: "getCountryAndCallingCode",
    value: function(n) {
      var r, a;
      return n && (He(n) ? (r = n.defaultCountry, a = n.defaultCallingCode) : r = n), r && !this.metadata.hasCountry(r) && (r = void 0), [r, a];
    }
    /**
     * Inputs "next" phone number characters.
     * @param  {string} text
     * @return {string} Formatted phone number characters that have been input so far.
     */
  }, {
    key: "input",
    value: function(n) {
      var r = this.parser.input(n, this.state), a = r.digits, i = r.justLeadingPlus;
      if (i)
        this.formattedOutput = "+";
      else if (a) {
        this.determineTheCountryIfNeeded(), this.state.nationalSignificantNumber && this.formatter.narrowDownMatchingFormats(this.state);
        var o;
        if (this.metadata.hasSelectedNumberingPlan() && (o = this.formatter.format(a, this.state)), o === void 0 && this.parser.reExtractNationalSignificantNumber(this.state)) {
          this.determineTheCountryIfNeeded();
          var d = this.state.getNationalDigits();
          d && (o = this.formatter.format(d, this.state));
        }
        this.formattedOutput = o ? this.getFullNumber(o) : this.getNonFormattedNumber();
      }
      return this.formattedOutput;
    }
  }, {
    key: "reset",
    value: function() {
      var n = this;
      return this.state = new Ju({
        onCountryChange: function(a) {
          n.country = a;
        },
        onCallingCodeChange: function(a, i) {
          n.metadata.selectNumberingPlan(i, a), n.formatter.reset(n.metadata.numberingPlan, n.state), n.parser.reset(n.metadata.numberingPlan);
        }
      }), this.formatter = new As({
        state: this.state,
        metadata: this.metadata
      }), this.parser = new Hs({
        defaultCountry: this.defaultCountry,
        defaultCallingCode: this.defaultCallingCode,
        metadata: this.metadata,
        state: this.state,
        onNationalSignificantNumberChange: function() {
          n.determineTheCountryIfNeeded(), n.formatter.reset(n.metadata.numberingPlan, n.state);
        }
      }), this.state.reset({
        country: this.defaultCountry,
        callingCode: this.defaultCallingCode
      }), this.formattedOutput = "", this;
    }
    /**
     * Returns `true` if the phone number is being input in international format.
     * In other words, returns `true` if and only if the parsed phone number starts with a `"+"`.
     * @return {boolean}
     */
  }, {
    key: "isInternational",
    value: function() {
      return this.state.international;
    }
    /**
     * Returns the "calling code" part of the phone number when it's being input
     * in an international format.
     * If no valid calling code has been entered so far, returns `undefined`.
     * @return {string} [callingCode]
     */
  }, {
    key: "getCallingCode",
    value: function() {
      if (this.isInternational())
        return this.state.callingCode;
    }
    // A legacy alias.
  }, {
    key: "getCountryCallingCode",
    value: function() {
      return this.getCallingCode();
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * Returns `undefined` if no phone number has been input yet.
     * @return {string} [country]
     */
  }, {
    key: "getCountry",
    value: function() {
      var n = this.state.digits;
      if (n)
        return this._getCountry();
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * @return {string} [country]
     */
  }, {
    key: "_getCountry",
    value: function() {
      var n = this.state.country;
      return n;
    }
  }, {
    key: "determineTheCountryIfNeeded",
    value: function() {
      (!this.state.country || this.isCountryCallingCodeAmbiguous()) && this.determineTheCountry();
    }
    // Prepends `+CountryCode ` in case of an international phone number
  }, {
    key: "getFullNumber",
    value: function(n) {
      var r = this;
      if (this.isInternational()) {
        var a = function(d) {
          return r.formatter.getInternationalPrefixBeforeCountryCallingCode(r.state, {
            spacing: !!d
          }) + d;
        }, i = this.state.callingCode;
        return a(i ? n ? "".concat(i, " ").concat(n) : i : "".concat(this.state.getDigitsWithoutInternationalPrefix()));
      }
      return n;
    }
  }, {
    key: "getNonFormattedNationalNumberWithPrefix",
    value: function() {
      var n = this.state, r = n.nationalSignificantNumber, a = n.prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix, i = n.nationalPrefix, o = r, d = a || i;
      return d && (o = d + o), o;
    }
  }, {
    key: "getNonFormattedNumber",
    value: function() {
      var n = this.state.nationalSignificantNumberIsModified;
      return this.getFullNumber(n ? this.state.getNationalDigits() : this.getNonFormattedNationalNumberWithPrefix());
    }
  }, {
    key: "getNonFormattedTemplate",
    value: function() {
      var n = this.getNonFormattedNumber();
      if (n)
        return n.replace(/[\+\d]/g, xe);
    }
  }, {
    key: "isCountryCallingCodeAmbiguous",
    value: function() {
      var n = this.state.callingCode, r = this.metadata.getCountryCodesForCallingCode(n);
      return r && r.length > 1;
    }
    // Determines the exact country of the phone number
    // entered so far based on the country phone code
    // and the national phone number.
  }, {
    key: "determineTheCountry",
    value: function() {
      this.state.setCountry(jn(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, {
        nationalNumber: this.state.nationalSignificantNumber,
        metadata: this.metadata
      }));
    }
    /**
     * Returns a E.164 phone number value for the user's input.
     *
     * For example, for country `"US"` and input `"(222) 333-4444"`
     * it will return `"+12223334444"`.
     *
     * For international phone number input, it will also auto-correct
     * some minor errors such as using a national prefix when writing
     * an international phone number. For example, if the user inputs
     * `"+44 0 7400 000000"` then it will return an auto-corrected
     * `"+447400000000"` phone number value.
     *
     * Will return `undefined` if no digits have been input,
     * or when inputting a phone number in national format and no
     * default country or default "country calling code" have been set.
     *
     * @return {string} [value]
     */
  }, {
    key: "getNumberValue",
    value: function() {
      var n = this.state, r = n.digits, a = n.callingCode, i = n.country, o = n.nationalSignificantNumber;
      if (r) {
        if (this.isInternational())
          return a ? "+" + a + o : "+" + r;
        if (i || a) {
          var d = i ? this.metadata.countryCallingCode() : a;
          return "+" + d + o;
        }
      }
    }
    /**
     * Returns an instance of `PhoneNumber` class.
     * Will return `undefined` if no national (significant) number
     * digits have been entered so far, or if no `defaultCountry` has been
     * set and the user enters a phone number not in international format.
     */
  }, {
    key: "getNumber",
    value: function() {
      var n = this.state, r = n.nationalSignificantNumber, a = n.carrierCode, i = n.callingCode, o = this._getCountry();
      if (r && !(!o && !i)) {
        if (o && o === this.defaultCountry) {
          var d = new le(this.metadata.metadata);
          d.selectNumberingPlan(o);
          var s = d.numberingPlan.callingCode(), l = this.metadata.getCountryCodesForCallingCode(s);
          if (l.length > 1) {
            var f = Ma(r, {
              countries: l,
              metadata: this.metadata.metadata
            });
            f && (o = f);
          }
        }
        var $ = new Wa(o || i, r, this.metadata.metadata);
        return a && ($.carrierCode = a), $;
      }
    }
    /**
     * Returns `true` if the phone number is "possible".
     * Is just a shortcut for `PhoneNumber.isPossible()`.
     * @return {boolean}
     */
  }, {
    key: "isPossible",
    value: function() {
      var n = this.getNumber();
      return n ? n.isPossible() : !1;
    }
    /**
     * Returns `true` if the phone number is "valid".
     * Is just a shortcut for `PhoneNumber.isValid()`.
     * @return {boolean}
     */
  }, {
    key: "isValid",
    value: function() {
      var n = this.getNumber();
      return n ? n.isValid() : !1;
    }
    /**
     * @deprecated
     * This method is used in `react-phone-number-input/source/input-control.js`
     * in versions before `3.0.16`.
     */
  }, {
    key: "getNationalNumber",
    value: function() {
      return this.state.nationalSignificantNumber;
    }
    /**
     * Returns the phone number characters entered by the user.
     * @return {string}
     */
  }, {
    key: "getChars",
    value: function() {
      return (this.state.international ? "+" : "") + this.state.digits;
    }
    /**
     * Returns the template for the formatted phone number.
     * @return {string}
     */
  }, {
    key: "getTemplate",
    value: function() {
      return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || "";
    }
  }]);
}();
function ia(e) {
  return new le(e).getCountries();
}
function il(e, t, n) {
  return n || (n = t, t = void 0), new it(t, n).input(e);
}
function Xa(e) {
  var t = e.inputFormat, n = e.country, r = e.metadata;
  return t === "NATIONAL_PART_OF_INTERNATIONAL" ? "+".concat(Ue(n, r)) : "";
}
function Sn(e, t) {
  return t && (e = e.slice(t.length), e[0] === " " && (e = e.slice(1))), e;
}
function ol(e, t, n) {
  if (!(n && n.ignoreRest)) {
    var r = function(i) {
      if (n)
        switch (i) {
          case "end":
            n.ignoreRest = !0;
            break;
        }
    };
    return Ka(e, t, r);
  }
}
function Za(e) {
  var t = e.onKeyDown, n = e.inputFormat;
  return be(function(r) {
    if (r.keyCode === ul && n === "INTERNATIONAL" && r.target instanceof HTMLInputElement && dl(r.target) === sl.length) {
      r.preventDefault();
      return;
    }
    t && t(r);
  }, [t, n]);
}
function dl(e) {
  return e.selectionStart;
}
var ul = 8, sl = "+", ll = ["onKeyDown", "country", "inputFormat", "metadata", "international", "withCountryCallingCode"];
function On() {
  return On = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, On.apply(this, arguments);
}
function cl(e, t) {
  if (e == null)
    return {};
  var n = fl(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function fl(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function $l(e) {
  function t(n, r) {
    var a = n.onKeyDown, i = n.country, o = n.inputFormat, d = n.metadata, s = d === void 0 ? e : d;
    n.international, n.withCountryCallingCode;
    var l = cl(n, ll), f = be(function(h) {
      var m = new it(i, s), P = Xa({
        inputFormat: o,
        country: i,
        metadata: s
      }), E = m.input(P + h), y = m.getTemplate();
      return P && (E = Sn(E, P), y && (y = Sn(y, P))), {
        text: E,
        template: y
      };
    }, [i, s]), $ = Za({
      onKeyDown: a,
      inputFormat: o
    });
    return /* @__PURE__ */ A.createElement(ko, On({}, l, {
      ref: r,
      parse: ol,
      format: f,
      onKeyDown: $
    }));
  }
  return t = /* @__PURE__ */ A.forwardRef(t), t.propTypes = {
    /**
     * The parsed phone number.
     * "Parsed" not in a sense of "E.164"
     * but rather in a sense of "having only
     * digits and possibly a leading plus character".
     * Examples: `""`, `"+"`, `"+123"`, `"123"`.
     */
    value: C.string.isRequired,
    /**
     * A function of `value: string`.
     * Updates the `value` property.
     */
    onChange: C.func.isRequired,
    /**
     * A function of `event: Event`.
     * Handles `keydown` events.
     */
    onKeyDown: C.func,
    /**
     * A two-letter country code for formatting `value`
     * as a national phone number (e.g. `(800) 555 35 35`).
     * E.g. "US", "RU", etc.
     * If no `country` is passed then `value`
     * is formatted as an international phone number.
     * (e.g. `+7 800 555 35 35`)
     * This property should've been called `defaultCountry`
     * because it only applies when the user inputs a phone number in a national format
     * and is completely ignored when the user inputs a phone number in an international format.
     */
    country: C.string,
    /**
     * The format that the input field value is being input/output in.
     */
    inputFormat: C.oneOf(["INTERNATIONAL", "NATIONAL_PART_OF_INTERNATIONAL", "NATIONAL", "INTERNATIONAL_OR_NATIONAL"]).isRequired,
    /**
     * `libphonenumber-js` metadata.
     */
    metadata: C.object
  }, t;
}
const pl = $l();
var ml = ["value", "onChange", "onKeyDown", "country", "inputFormat", "metadata", "inputComponent", "international", "withCountryCallingCode"];
function wn() {
  return wn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, wn.apply(this, arguments);
}
function yl(e, t) {
  if (e == null)
    return {};
  var n = hl(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function hl(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function gl(e) {
  function t(n, r) {
    var a = n.value, i = n.onChange, o = n.onKeyDown, d = n.country, s = n.inputFormat, l = n.metadata, f = l === void 0 ? e : l, $ = n.inputComponent, h = $ === void 0 ? "input" : $;
    n.international, n.withCountryCallingCode;
    var m = yl(n, ml), P = Xa({
      inputFormat: s,
      country: d,
      metadata: f
    }), E = be(function(x) {
      var T = vn(x.target.value);
      if (T === a) {
        var j = oa(P, T, d, f);
        j.indexOf(x.target.value) === 0 && (T = T.slice(0, -1));
      }
      i(T);
    }, [P, a, i, d, f]), y = Za({
      onKeyDown: o,
      inputFormat: s
    });
    return /* @__PURE__ */ A.createElement(h, wn({}, m, {
      ref: r,
      value: oa(P, a, d, f),
      onChange: E,
      onKeyDown: y
    }));
  }
  return t = /* @__PURE__ */ A.forwardRef(t), t.propTypes = {
    /**
     * The parsed phone number.
     * "Parsed" not in a sense of "E.164"
     * but rather in a sense of "having only
     * digits and possibly a leading plus character".
     * Examples: `""`, `"+"`, `"+123"`, `"123"`.
     */
    value: C.string.isRequired,
    /**
     * A function of `value: string`.
     * Updates the `value` property.
     */
    onChange: C.func.isRequired,
    /**
     * A function of `event: Event`.
     * Handles `keydown` events.
     */
    onKeyDown: C.func,
    /**
     * A two-letter country code for formatting `value`
     * as a national phone number (e.g. `(800) 555 35 35`).
     * E.g. "US", "RU", etc.
     * If no `country` is passed then `value`
     * is formatted as an international phone number.
     * (e.g. `+7 800 555 35 35`)
     * This property should've been called `defaultCountry`
     * because it only applies when the user inputs a phone number in a national format
     * and is completely ignored when the user inputs a phone number in an international format.
     */
    country: C.string,
    /**
     * The format that the input field value is being input/output in.
     */
    inputFormat: C.oneOf(["INTERNATIONAL", "NATIONAL_PART_OF_INTERNATIONAL", "NATIONAL", "INTERNATIONAL_OR_NATIONAL"]).isRequired,
    /**
     * `libphonenumber-js` metadata.
     */
    metadata: C.object,
    /**
     * The `<input/>` component.
     */
    inputComponent: C.elementType
  }, t;
}
const vl = gl();
function oa(e, t, n, r) {
  return Sn(il(e + t, n, r), e);
}
function bl(e) {
  return da(e[0]) + da(e[1]);
}
function da(e) {
  return String.fromCodePoint(127462 - 65 + e.toUpperCase().charCodeAt(0));
}
var Cl = ["value", "onChange", "options", "disabled", "readOnly"], Pl = ["value", "options", "className", "iconComponent", "getIconAspectRatio", "arrowComponent", "unicodeFlags"];
function Nl(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Sl(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sl(e, t) {
  if (e) {
    if (typeof e == "string")
      return ua(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ua(e, t);
  }
}
function ua(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Wt() {
  return Wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Wt.apply(this, arguments);
}
function Ja(e, t) {
  if (e == null)
    return {};
  var n = Ol(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ol(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Qa(e) {
  var t = e.value, n = e.onChange, r = e.options, a = e.disabled, i = e.readOnly, o = Ja(e, Cl), d = be(function(s) {
    var l = s.target.value;
    n(l === "ZZ" ? void 0 : l);
  }, [n]);
  return Ca(function() {
    return ti(r, t);
  }, [r, t]), /* @__PURE__ */ A.createElement("select", Wt({}, o, {
    disabled: a || i,
    readOnly: i,
    value: t || "ZZ",
    onChange: d
  }), r.map(function(s) {
    var l = s.value, f = s.label, $ = s.divider;
    return /* @__PURE__ */ A.createElement("option", {
      key: $ ? "|" : l || "ZZ",
      value: $ ? "|" : l || "ZZ",
      disabled: !!$,
      style: $ ? wl : void 0
    }, f);
  }));
}
Qa.propTypes = {
  /**
   * A two-letter country code.
   * Example: "US", "RU", etc.
   */
  value: C.string,
  /**
   * A function of `value: string`.
   * Updates the `value` property.
   */
  onChange: C.func.isRequired,
  // `<select/>` options.
  options: C.arrayOf(C.shape({
    value: C.string,
    label: C.string,
    divider: C.bool
  })).isRequired,
  // `readonly` attribute doesn't work on a `<select/>`.
  // https://github.com/catamphetamine/react-phone-number-input/issues/419#issuecomment-1764384480
  // https://www.delftstack.com/howto/html/html-select-readonly/
  // To work around that, if `readOnly: true` property is passed
  // to this component, it behaves analogous to `disabled: true`.
  disabled: C.bool,
  readOnly: C.bool
};
var wl = {
  fontSize: "1px",
  backgroundColor: "currentColor",
  color: "inherit"
};
function ei(e) {
  var t = e.value, n = e.options, r = e.className, a = e.iconComponent;
  e.getIconAspectRatio;
  var i = e.arrowComponent, o = i === void 0 ? xl : i, d = e.unicodeFlags, s = Ja(e, Pl), l = Ca(function() {
    return ti(n, t);
  }, [n, t]);
  return /* @__PURE__ */ A.createElement("div", {
    className: "PhoneInputCountry"
  }, /* @__PURE__ */ A.createElement(Qa, Wt({}, s, {
    value: t,
    options: n,
    className: Lt("PhoneInputCountrySelect", r)
  })), l && (d && t ? /* @__PURE__ */ A.createElement("div", {
    className: "PhoneInputCountryIconUnicode"
  }, bl(t)) : /* @__PURE__ */ A.createElement(a, {
    "aria-hidden": !0,
    country: t,
    label: l.label,
    aspectRatio: d ? 1 : void 0
  })), /* @__PURE__ */ A.createElement(o, null));
}
ei.propTypes = {
  // Country flag component.
  iconComponent: C.elementType,
  // Select arrow component.
  arrowComponent: C.elementType,
  // Set to `true` to render Unicode flag icons instead of SVG images.
  unicodeFlags: C.bool
};
function xl() {
  return /* @__PURE__ */ A.createElement("div", {
    className: "PhoneInputCountrySelectArrow"
  });
}
function ti(e, t) {
  for (var n = Nl(e), r; !(r = n()).done; ) {
    var a = r.value;
    if (!a.divider && El(a.value, t))
      return a;
  }
}
function El(e, t) {
  return e == null ? t == null : e === t;
}
var _l = ["country", "countryName", "flags", "flagUrl"];
function xn() {
  return xn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xn.apply(this, arguments);
}
function Il(e, t) {
  if (e == null)
    return {};
  var n = Tl(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Tl(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Dn(e) {
  var t = e.country, n = e.countryName, r = e.flags, a = e.flagUrl, i = Il(e, _l);
  return r && r[t] ? r[t]({
    title: n
  }) : /* @__PURE__ */ A.createElement("img", xn({}, i, {
    alt: n,
    role: n ? void 0 : "presentation",
    src: a.replace("{XX}", t).replace("{xx}", t.toLowerCase())
  }));
}
Dn.propTypes = {
  // The country to be selected by default.
  // Two-letter country code ("ISO 3166-1 alpha-2").
  country: C.string.isRequired,
  // Will be HTML `title` attribute of the `<img/>`.
  countryName: C.string.isRequired,
  // Country flag icon components.
  // By default flag icons are inserted as `<img/>`s
  // with their `src` pointed to `country-flag-icons` gitlab pages website.
  // There might be cases (e.g. an offline application)
  // where having a large (3 megabyte) `<svg/>` flags
  // bundle is more appropriate.
  // `import flags from 'react-phone-number-input/flags'`.
  flags: C.objectOf(C.elementType),
  // A URL for a country flag icon.
  // By default it points to `country-flag-icons` gitlab pages website.
  flagUrl: C.string.isRequired
};
var Al = ["aspectRatio"], Rl = ["title"], jl = ["title"];
function Vt() {
  return Vt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Vt.apply(this, arguments);
}
function kn(e, t) {
  if (e == null)
    return {};
  var n = Fl(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Fl(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Xt(e) {
  var t = e.aspectRatio, n = kn(e, Al);
  return t === 1 ? /* @__PURE__ */ A.createElement(ri, n) : /* @__PURE__ */ A.createElement(ni, n);
}
Xt.propTypes = {
  title: C.string.isRequired,
  aspectRatio: C.number
};
function ni(e) {
  var t = e.title, n = kn(e, Rl);
  return /* @__PURE__ */ A.createElement("svg", Vt({}, n, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 75 50"
  }), /* @__PURE__ */ A.createElement("title", null, t), /* @__PURE__ */ A.createElement("g", {
    className: "PhoneInputInternationalIconGlobe",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "2",
    strokeMiterlimit: "10"
  }, /* @__PURE__ */ A.createElement("path", {
    strokeLinecap: "round",
    d: "M47.2,36.1C48.1,36,49,36,50,36c7.4,0,14,1.7,18.5,4.3"
  }), /* @__PURE__ */ A.createElement("path", {
    d: "M68.6,9.6C64.2,12.3,57.5,14,50,14c-7.4,0-14-1.7-18.5-4.3"
  }), /* @__PURE__ */ A.createElement("line", {
    x1: "26",
    y1: "25",
    x2: "74",
    y2: "25"
  }), /* @__PURE__ */ A.createElement("line", {
    x1: "50",
    y1: "1",
    x2: "50",
    y2: "49"
  }), /* @__PURE__ */ A.createElement("path", {
    strokeLinecap: "round",
    d: "M46.3,48.7c1.2,0.2,2.5,0.3,3.7,0.3c13.3,0,24-10.7,24-24S63.3,1,50,1S26,11.7,26,25c0,2,0.3,3.9,0.7,5.8"
  }), /* @__PURE__ */ A.createElement("path", {
    strokeLinecap: "round",
    d: "M46.8,48.2c1,0.6,2.1,0.8,3.2,0.8c6.6,0,12-10.7,12-24S56.6,1,50,1S38,11.7,38,25c0,1.4,0.1,2.7,0.2,4c0,0.1,0,0.2,0,0.2"
  })), /* @__PURE__ */ A.createElement("path", {
    className: "PhoneInputInternationalIconPhone",
    stroke: "none",
    fill: "currentColor",
    d: "M12.4,17.9c2.9-2.9,5.4-4.8,0.3-11.2S4.1,5.2,1.3,8.1C-2,11.4,1.1,23.5,13.1,35.6s24.3,15.2,27.5,11.9c2.8-2.8,7.8-6.3,1.4-11.5s-8.3-2.6-11.2,0.3c-2,2-7.2-2.2-11.7-6.7S10.4,19.9,12.4,17.9z"
  }));
}
ni.propTypes = {
  title: C.string.isRequired
};
function ri(e) {
  var t = e.title, n = kn(e, jl);
  return /* @__PURE__ */ A.createElement("svg", Vt({}, n, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 50 50"
  }), /* @__PURE__ */ A.createElement("title", null, t), /* @__PURE__ */ A.createElement("g", {
    className: "PhoneInputInternationalIconGlobe",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /* @__PURE__ */ A.createElement("path", {
    d: "M8.45,13A21.44,21.44,0,1,1,37.08,41.56"
  }), /* @__PURE__ */ A.createElement("path", {
    d: "M19.36,35.47a36.9,36.9,0,0,1-2.28-13.24C17.08,10.39,21.88.85,27.8.85s10.72,9.54,10.72,21.38c0,6.48-1.44,12.28-3.71,16.21"
  }), /* @__PURE__ */ A.createElement("path", {
    d: "M17.41,33.4A39,39,0,0,1,27.8,32.06c6.62,0,12.55,1.5,16.48,3.86"
  }), /* @__PURE__ */ A.createElement("path", {
    d: "M44.29,8.53c-3.93,2.37-9.86,3.88-16.49,3.88S15.25,10.9,11.31,8.54"
  }), /* @__PURE__ */ A.createElement("line", {
    x1: "27.8",
    y1: "0.85",
    x2: "27.8",
    y2: "34.61"
  }), /* @__PURE__ */ A.createElement("line", {
    x1: "15.2",
    y1: "22.23",
    x2: "49.15",
    y2: "22.23"
  })), /* @__PURE__ */ A.createElement("path", {
    className: "PhoneInputInternationalIconPhone",
    stroke: "transparent",
    fill: "currentColor",
    d: "M9.42,26.64c2.22-2.22,4.15-3.59.22-8.49S3.08,17,.93,19.17c-2.49,2.48-.13,11.74,9,20.89s18.41,11.5,20.89,9c2.15-2.15,5.91-4.77,1-8.71s-6.27-2-8.49.22c-1.55,1.55-5.48-1.69-8.86-5.08S7.87,28.19,9.42,26.64Z"
  }));
}
ri.propTypes = {
  title: C.string.isRequired
};
function Ml(e) {
  if (e.length < 2 || e[0] !== "+")
    return !1;
  for (var t = 1; t < e.length; ) {
    var n = e.charCodeAt(t);
    if (!(n >= 48 && n <= 57))
      return !1;
    t++;
  }
  return !0;
}
function ai(e) {
  Ml(e) || console.error("[react-phone-number-input] Expected the initial `value` to be a E.164 phone number. Got", e);
}
function Dl(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = kl(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kl(e, t) {
  if (e) {
    if (typeof e == "string")
      return sa(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return sa(e, t);
  }
}
function sa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Ll(e, t) {
  if (!t)
    return e;
  for (var n = [], r = [], a = n, i = function() {
    var l = d.value;
    if (l === "|")
      a.push({
        divider: !0
      });
    else if (l === "..." || l === "…")
      a = r;
    else {
      var f;
      l === "🌐" ? f = void 0 : f = l;
      var $ = e.indexOf(e.filter(function(m) {
        return m.value === f;
      })[0]), h = e[$];
      e.splice($, 1), a.push(h);
    }
  }, o = Dl(t), d; !(d = o()).done; )
    i();
  return n.concat(e).concat(r);
}
function Bl(e, t) {
  if (e && (e = e.filter(function(n) {
    switch (n) {
      case "🌐":
      case "|":
      case "...":
      case "…":
        return !0;
      default:
        return Zt(n, t);
    }
  }), e.length > 0))
    return e;
}
function Zt(e, t) {
  return Ta(e, t) ? !0 : (console.error("Country not found: ".concat(e)), !1);
}
function ii(e, t) {
  return e && (e = e.filter(function(n) {
    return Zt(n, t);
  }), e.length === 0 && (e = void 0)), e;
}
var Ul = ["country", "label", "aspectRatio"];
function En() {
  return En = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, En.apply(this, arguments);
}
function Gl(e, t) {
  if (e == null)
    return {};
  var n = Wl(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Wl(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function oi(e) {
  var t = e.flags, n = e.flagUrl, r = e.flagComponent, a = e.internationalIcon;
  function i(o) {
    var d = o.country, s = o.label, l = o.aspectRatio, f = Gl(o, Ul), $ = a === Xt ? l : void 0;
    return /* @__PURE__ */ A.createElement("div", En({}, f, {
      className: Lt("PhoneInputCountryIcon", {
        "PhoneInputCountryIcon--square": $ === 1,
        "PhoneInputCountryIcon--border": d
      })
    }), d ? /* @__PURE__ */ A.createElement(r, {
      country: d,
      countryName: s,
      flags: t,
      flagUrl: n,
      className: "PhoneInputCountryIconImg"
    }) : /* @__PURE__ */ A.createElement(a, {
      title: s,
      aspectRatio: $,
      className: "PhoneInputCountryIconImg"
    }));
  }
  return i.propTypes = {
    country: C.string,
    label: C.string.isRequired,
    aspectRatio: C.number
  }, i;
}
oi({
  // Must be equal to `defaultProps.flagUrl` in `./PhoneInputWithCountry.js`.
  flagUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",
  flagComponent: Dn,
  internationalIcon: Xt
});
function Vl(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Kl(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kl(e, t) {
  if (e) {
    if (typeof e == "string")
      return la(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return la(e, t);
  }
}
function la(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Hl(e, t) {
  for (var n = Vl(e), r; !(r = n()).done; ) {
    var a = r.value;
    a && Yl(a, t);
  }
}
function Yl(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
var di = C.shape({
  country_calling_codes: C.object.isRequired,
  countries: C.object.isRequired
}), ui = C.objectOf(C.string);
function Fe(e, t) {
  var n = "+" + Ue(e, t);
  return n;
}
function zl(e) {
  var t = e.value, n = e.phoneNumber, r = e.defaultCountry, a = e.getAnyCountry, i = e.countries, o = e.required, d = e.metadata, s;
  return n && n.country ? s = n.country : r && (!t || et(t, r, d)) && (s = r), i && i.indexOf(s) < 0 && (s = void 0), !s && o && i && i.length > 0 && (s = a()), s;
}
function ql(e) {
  var t = e.countries, n = e.countryNames, r = e.addInternationalOption, a = e.compareStringsLocales, i = e.compareStrings;
  i || (i = nc);
  var o = t.map(function(d) {
    return {
      value: d,
      // All `locale` country names included in this library
      // include all countries (this is checked at build time).
      // The only case when a country name might be missing
      // is when a developer supplies their own `labels` property.
      // To guard against such cases, a missing country name
      // is substituted by country code.
      label: n[d] || d
    };
  });
  return o.sort(function(d, s) {
    return i(d.label, s.label, a);
  }), r && o.unshift({
    label: n.ZZ
  }), o;
}
function si(e, t) {
  return Wu(e || "", t);
}
function Xl(e) {
  return e.formatNational().replace(/\D/g, "");
}
function Zl(e, t) {
  var n = t.prevCountry, r = t.newCountry, a = t.metadata, i = t.useNationalFormat;
  if (n === r)
    return e;
  if (!e)
    return i ? "" : r ? Fe(r, a) : "";
  if (r) {
    if (e[0] === "+") {
      if (i)
        return e.indexOf("+" + Ue(r, a)) === 0 ? rc(e, r, a) : "";
      if (n) {
        var o = Fe(r, a);
        return e.indexOf(o) === 0 ? e : o;
      } else {
        var d = Fe(r, a);
        return e.indexOf(d) === 0 ? e : d;
      }
    }
  } else if (e[0] !== "+")
    return Qe(e, n, a) || "";
  return e;
}
function Qe(e, t, n) {
  if (e) {
    if (e[0] === "+") {
      if (e === "+")
        return;
      var r = new it(t, n);
      return r.input(e), r.getNumberValue();
    }
    if (t) {
      var a = ci(e, t, n);
      return "+".concat(Ue(t, n)).concat(a || "");
    }
  }
}
function Jl(e, t, n) {
  var r = ci(e, t, n);
  if (r) {
    var a = r.length - Ql(t, n);
    if (a > 0)
      return e.slice(0, e.length - a);
  }
  return e;
}
function Ql(e, t) {
  return t = new le(t), t.selectNumberingPlan(e), t.numberingPlan.possibleLengths()[t.numberingPlan.possibleLengths().length - 1];
}
function li(e, t) {
  var n = t.country, r = t.countries, a = t.defaultCountry, i = t.latestCountrySelectedByUser, o = t.required, d = t.metadata;
  if (e === "+")
    return n;
  var s = tc(e, d);
  if (s)
    return !r || r.indexOf(s) >= 0 ? s : void 0;
  if (n) {
    if (et(e, n, d)) {
      if (i && et(e, i, d))
        return i;
      if (a && et(e, a, d))
        return a;
      if (!o)
        return;
    } else if (!o)
      return;
  }
  return n;
}
function ec(e, t) {
  var n = t.prevPhoneDigits, r = t.country, a = t.defaultCountry, i = t.latestCountrySelectedByUser, o = t.countryRequired, d = t.getAnyCountry, s = t.countries, l = t.international, f = t.limitMaxLength, $ = t.countryCallingCodeEditable, h = t.metadata;
  if (l && $ === !1 && r) {
    var m = Fe(r, h);
    if (e.indexOf(m) !== 0) {
      var P, E = e && e[0] !== "+";
      return E ? (e = m + e, P = Qe(e, r, h)) : e = m, {
        phoneDigits: e,
        value: P,
        country: r
      };
    }
  }
  l === !1 && r && e && e[0] === "+" && (e = ca(e, r, h)), e && r && f && (e = Jl(e, r, h)), e && e[0] !== "+" && (!r || l) && (e = "+" + e), !e && n && n[0] === "+" && (l ? r = void 0 : r = a), e === "+" && n && n[0] === "+" && n.length > 1 && (r = void 0);
  var y;
  return e && (e[0] === "+" && (e === "+" || r && Fe(r, h).indexOf(e) === 0) ? y = void 0 : y = Qe(e, r, h)), y && (r = li(y, {
    country: r,
    countries: s,
    defaultCountry: a,
    latestCountrySelectedByUser: i,
    // `countryRequired` flag is not passed here.
    // Instead, it's explicitly checked a bit later in the code.
    required: !1,
    metadata: h
  }), l === !1 && r && e && e[0] === "+" && (e = ca(e, r, h), y = Qe(e, r, h))), !r && o && (r = a || d()), {
    // `phoneDigits` returned here are a "normalized" version of the original `phoneDigits`.
    // The returned `phoneDigits` shouldn't be used anywhere except for passing it as
    // `prevPhoneDigits` parameter to this same function on next input change event.
    phoneDigits: e,
    country: r,
    value: y
  };
}
function ca(e, t, n) {
  if (e.indexOf(Fe(t, n)) === 0) {
    var r = new it(t, n);
    r.input(e);
    var a = r.getNumber();
    return a ? a.formatNational().replace(/\D/g, "") : "";
  } else
    return e.replace(/\D/g, "");
}
function tc(e, t) {
  var n = new it(null, t);
  return n.input(e), n.getCountry();
}
function nc(e, t, n) {
  return String.prototype.localeCompare ? e.localeCompare(t, n) : e < t ? -1 : e > t ? 1 : 0;
}
function rc(e, t, n) {
  if (t) {
    var r = "+" + Ue(t, n);
    if (e.length < r.length) {
      if (r.indexOf(e) === 0)
        return "";
    } else if (e.indexOf(r) === 0)
      return e.slice(r.length);
  }
  for (var a = 0, i = Object.keys(n.country_calling_codes); a < i.length; a++) {
    var o = i[a];
    if (e.indexOf(o) === 1)
      return e.slice(1 + o.length);
  }
  return "";
}
function ci(e, t, n) {
  var r = new it(t, n);
  r.input(e);
  var a = r.getNumber();
  return a && a.nationalNumber;
}
function et(e, t, n) {
  for (var r = Fe(t, n), a = 0; a < e.length && a < r.length; ) {
    if (e[a] !== r[a])
      return !1;
    a++;
  }
  return !0;
}
function fi(e) {
  var t = e.value, n = e.phoneNumber, r = e.defaultCountry, a = e.international, i = e.useNationalFormat, o = e.metadata;
  return (a === !1 || i) && n && n.country ? Xl(n) : !t && a && r ? Fe(r, o) : t;
}
function It(e) {
  "@babel/helpers - typeof";
  return It = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, It(e);
}
function fa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fa(Object(n), !0).forEach(function(r) {
      ac(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fa(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ac(e, t, n) {
  return t = ic(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ic(e) {
  var t = oc(e, "string");
  return It(t) == "symbol" ? t : t + "";
}
function oc(e, t) {
  if (It(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (It(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dc(e, t, n) {
  var r = e.metadata, a = e.countries, i = e.defaultCountry, o = e.value, d = e.reset, s = e.international, l = e.displayInitialValueAsLocalNumber, f = e.initialValueFormat, $ = t.defaultCountry, h = t.value, m = t.reset;
  n.country;
  var P = n.value, E = n.hasUserSelectedACountry, y = n.latestCountrySelectedByUser, x = function(ge) {
    return fi(Dt(Dt({}, ge), {}, {
      international: s,
      useNationalFormat: l || f === "national",
      metadata: r
    }));
  };
  if (d !== m)
    return {
      phoneDigits: x({
        value: void 0,
        defaultCountry: i
      }),
      value: void 0,
      country: i,
      latestCountrySelectedByUser: void 0,
      hasUserSelectedACountry: void 0
    };
  if (i !== $) {
    var T = !i || Zt(i, r), j = (
      // By default, "no value has been entered" means `value` is `undefined`.
      !P || // When `international` is `true`, and some country has been pre-selected,
      // then the `<input/>` contains a pre-filled value of `+${countryCallingCode}${leadingDigits}`,
      // so in case of `international` being `true`, "the user hasn't entered anything" situation
      // doesn't just mean `value` is `undefined`, but could also mean `value` is `+${countryCallingCode}`.
      s && P === x({
        value: void 0,
        defaultCountry: $
      })
    ), L = !o && j;
    if (!E && T && L)
      return {
        country: i,
        // If `phoneDigits` is empty, then automatically select the new `country`
        // and set `phoneDigits` to `+{getCountryCallingCode(newCountry)}`.
        // The code assumes that "no phone number has been entered by the user",
        // and no `value` property has been passed, so the `phoneNumber` parameter
        // of `_getInitialPhoneDigits({ value, phoneNumber, ... })` is `undefined`.
        phoneDigits: x({
          value: void 0,
          defaultCountry: i
        }),
        // `value` is `undefined` and it stays so.
        value: void 0
      };
  }
  if (!$a(o, h) && !$a(o, P)) {
    var v, V;
    if (o) {
      o && ai(o), v = si(o, r);
      var ee = ii(a, r);
      v && v.country ? (!ee || ee.indexOf(v.country) >= 0) && (V = v.country) : (V = li(o, {
        country: void 0,
        countries: ee,
        metadata: r
      }), V || i && o.indexOf(Fe(i, r)) === 0 && (V = i));
    }
    var te;
    if (o) {
      if (y) {
        var ne = V ? y === V : et(o, y, r);
        ne ? V || (V = y) : te = {
          latestCountrySelectedByUser: void 0
        };
      }
    } else
      te = {
        latestCountrySelectedByUser: void 0,
        hasUserSelectedACountry: void 0
      };
    return Dt(Dt({}, te), {}, {
      phoneDigits: x({
        phoneNumber: v,
        value: o,
        defaultCountry: i
      }),
      value: o,
      country: o ? V : i
    });
  }
}
function $a(e, t) {
  return e === null && (e = void 0), t === null && (t = void 0), e === t;
}
var uc = ["name", "disabled", "readOnly", "autoComplete", "style", "className", "inputRef", "inputComponent", "numberInputProps", "smartCaret", "countrySelectComponent", "countrySelectProps", "containerComponent", "containerComponentProps", "defaultCountry", "countries", "countryOptionsOrder", "labels", "flags", "flagComponent", "flagUrl", "addInternationalOption", "internationalIcon", "displayInitialValueAsLocalNumber", "initialValueFormat", "onCountryChange", "limitMaxLength", "countryCallingCodeEditable", "focusInputOnCountrySelection", "reset", "metadata", "international", "locales"];
function at(e) {
  "@babel/helpers - typeof";
  return at = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, at(e);
}
function pa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function $i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pa(Object(n), !0).forEach(function(r) {
      we(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pa(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function tt() {
  return tt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, tt.apply(this, arguments);
}
function sc(e, t) {
  if (e == null)
    return {};
  var n = lc(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function lc(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function cc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ma(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, mi(r.key), r);
  }
}
function fc(e, t, n) {
  return t && ma(e.prototype, t), n && ma(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $c(e, t, n) {
  return t = Kt(t), pc(e, pi() ? Reflect.construct(t, n || [], Kt(e).constructor) : t.apply(e, n));
}
function pc(e, t) {
  if (t && (at(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return mc(e);
}
function mc(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pi() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (pi = function() {
    return !!e;
  })();
}
function Kt(e) {
  return Kt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Kt(e);
}
function yc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && _n(e, t);
}
function _n(e, t) {
  return _n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, _n(e, t);
}
function we(e, t, n) {
  return t = mi(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function mi(e) {
  var t = hc(e, "string");
  return at(t) == "symbol" ? t : t + "";
}
function hc(e, t) {
  if (at(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (at(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gc = /* @__PURE__ */ function(e) {
  function t(n) {
    var r;
    cc(this, t), r = $c(this, t, [n]), we(r, "setInputRef", function(y) {
      Hl([r.props.inputRef, r.inputRef], y);
    }), we(r, "isCountrySupportedWithError", function(y) {
      var x = r.props.metadata;
      return Zt(y, x);
    }), we(r, "onCountryChange", function(y) {
      var x = r.props, T = x.international, j = x.metadata, L = x.onChange, v = x.focusInputOnCountrySelection, V = r.state, ee = V.phoneDigits, te = V.country, ne = Zl(ee, {
        prevCountry: te,
        newCountry: y,
        metadata: j,
        // Convert the phone number to "national" format
        // when the user changes the selected country by hand.
        useNationalFormat: !T
      }), $e = Qe(ne, y, j);
      v && r.inputRef.current.focus(), r.setState({
        country: y,
        latestCountrySelectedByUser: y,
        hasUserSelectedACountry: !0,
        phoneDigits: ne,
        value: $e
      }, function() {
        L($e);
      });
    }), we(r, "onChange", function(y) {
      var x = r.props, T = x.defaultCountry, j = x.onChange, L = x.addInternationalOption, v = x.international, V = x.limitMaxLength, ee = x.countryCallingCodeEditable, te = x.metadata, ne = r.state, $e = ne.countries, ge = ne.phoneDigits, Ie = ne.country, re = ne.latestCountrySelectedByUser, ae = ec(y, {
        prevPhoneDigits: ge,
        country: Ie,
        countryRequired: !L,
        defaultCountry: T,
        latestCountrySelectedByUser: re,
        getAnyCountry: function() {
          return r.getFirstSupportedCountry({
            countries: $e
          });
        },
        countries: $e,
        international: v,
        limitMaxLength: V,
        countryCallingCodeEditable: ee,
        metadata: te
      }), ie = ae.phoneDigits, ce = ae.country, fe = ae.value, pe = {
        phoneDigits: ie,
        value: fe,
        country: ce
      };
      re && fe && !et(fe, re, te) && (pe.latestCountrySelectedByUser = void 0), ee === !1 && !fe && ie === r.state.phoneDigits && (pe.forceRerender = {}), r.setState(
        pe,
        // Update the new `value` property.
        // Doing it after the `state` has been updated
        // because `onChange()` will trigger `getDerivedStateFromProps()`
        // with the new `value` which will be compared to `state.value` there.
        function() {
          return j(fe);
        }
      );
    }), we(r, "_onFocus", function() {
      return r.setState({
        isFocused: !0
      });
    }), we(r, "_onBlur", function() {
      return r.setState({
        isFocused: !1
      });
    }), we(r, "onFocus", function(y) {
      r._onFocus();
      var x = r.props.onFocus;
      x && x(y);
    }), we(r, "onBlur", function(y) {
      var x = r.props.onBlur;
      r._onBlur(), x && x(y);
    }), we(r, "onCountryFocus", function(y) {
      r._onFocus();
      var x = r.props.countrySelectProps;
      if (x) {
        var T = x.onFocus;
        T && T(y);
      }
    }), we(r, "onCountryBlur", function(y) {
      r._onBlur();
      var x = r.props.countrySelectProps;
      if (x) {
        var T = x.onBlur;
        T && T(y);
      }
    }), r.inputRef = /* @__PURE__ */ A.createRef();
    var a = r.props, i = a.value;
    a.labels;
    var o = a.international, d = a.addInternationalOption, s = a.displayInitialValueAsLocalNumber, l = a.initialValueFormat, f = a.metadata, $ = r.props, h = $.defaultCountry, m = $.countries;
    h && (r.isCountrySupportedWithError(h) || (h = void 0)), i && ai(i), m = ii(m, f);
    var P = si(i, f);
    r.CountryIcon = oi(r.props);
    var E = zl({
      value: i,
      phoneNumber: P,
      defaultCountry: h,
      required: !d,
      countries: m || ia(f),
      getAnyCountry: function() {
        return r.getFirstSupportedCountry({
          countries: m
        });
      },
      metadata: f
    });
    return r.state = {
      // Workaround for `this.props` inside `getDerivedStateFromProps()`.
      props: r.props,
      // The country selected.
      country: E,
      // `countries` are stored in `this.state` because they're filtered.
      // For example, a developer might theoretically pass some unsupported
      // countries as part of the `countries` property, and because of that
      // the component uses `this.state.countries` (which are filtered)
      // instead of `this.props.countries`
      // (which could potentially contain unsupported countries).
      countries: m,
      // `phoneDigits` state property holds non-formatted user's input.
      // The reason is that there's no way of finding out
      // in which form should `value` be displayed: international or national.
      // E.g. if `value` is `+78005553535` then it could be input
      // by a user both as `8 (800) 555-35-35` and `+7 800 555 35 35`.
      // Hence storing just `value` is not sufficient for correct formatting.
      // E.g. if a user entered `8 (800) 555-35-35`
      // then value is `+78005553535` and `phoneDigits` are `88005553535`
      // and if a user entered `+7 800 555 35 35`
      // then value is `+78005553535` and `phoneDigits` are `+78005553535`.
      phoneDigits: fi({
        value: i,
        phoneNumber: P,
        defaultCountry: h,
        international: o,
        useNationalFormat: s || l === "national",
        metadata: f
      }),
      // `value` property is duplicated in state.
      // The reason is that `getDerivedStateFromProps()`
      // needs this `value` to compare to the new `value` property
      // to find out if `phoneDigits` needs updating:
      // If the `value` property was changed externally
      // then it won't be equal to `state.value`
      // in which case `phoneDigits` and `country` should be updated.
      value: i
    }, r;
  }
  return yc(t, e), fc(t, [{
    key: "componentDidMount",
    value: function() {
      var r = this.props.onCountryChange, a = this.props.defaultCountry, i = this.state.country;
      r && (a && (this.isCountrySupportedWithError(a) || (a = void 0)), i !== a && r(i));
    }
  }, {
    key: "componentDidUpdate",
    value: function(r, a) {
      var i = this.props.onCountryChange, o = this.state.country;
      i && o !== a.country && i(o);
    }
  }, {
    key: "getCountrySelectOptions",
    value: function(r) {
      var a = r.countries, i = this.props, o = i.international, d = i.countryCallingCodeEditable, s = i.countryOptionsOrder, l = i.addInternationalOption, f = i.labels, $ = i.locales, h = i.metadata;
      return this.useMemoCountrySelectOptions(function() {
        return Ll(ql({
          countries: a || ia(h),
          countryNames: f,
          addInternationalOption: o && d === !1 ? !1 : l,
          compareStringsLocales: $
          // compareStrings
        }), Bl(s, h));
      }, [a, s, l, f, h]);
    }
  }, {
    key: "useMemoCountrySelectOptions",
    value: function(r, a) {
      return (!this.countrySelectOptionsMemoDependencies || !Cc(a, this.countrySelectOptionsMemoDependencies)) && (this.countrySelectOptionsMemo = r(), this.countrySelectOptionsMemoDependencies = a), this.countrySelectOptionsMemo;
    }
  }, {
    key: "getFirstSupportedCountry",
    value: function(r) {
      var a = r.countries, i = this.getCountrySelectOptions({
        countries: a
      });
      return i[0].value;
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, a = r.name, i = r.disabled, o = r.readOnly, d = r.autoComplete, s = r.style, l = r.className;
      r.inputRef;
      var f = r.inputComponent, $ = r.numberInputProps, h = r.smartCaret, m = r.countrySelectComponent, P = r.countrySelectProps, E = r.containerComponent, y = r.containerComponentProps;
      r.defaultCountry, r.countries, r.countryOptionsOrder;
      var x = r.labels;
      r.flags, r.flagComponent, r.flagUrl, r.addInternationalOption, r.internationalIcon, r.displayInitialValueAsLocalNumber, r.initialValueFormat, r.onCountryChange, r.limitMaxLength, r.countryCallingCodeEditable, r.focusInputOnCountrySelection, r.reset;
      var T = r.metadata, j = r.international;
      r.locales;
      var L = sc(r, uc), v = this.state, V = v.country, ee = v.countries, te = v.phoneDigits, ne = v.isFocused, $e = h ? pl : vl, ge = this.getCountrySelectOptions({
        countries: ee
      });
      return /* @__PURE__ */ A.createElement(E, tt({
        style: s,
        className: Lt(l, "PhoneInput", {
          "PhoneInput--focus": ne,
          "PhoneInput--disabled": i,
          "PhoneInput--readOnly": o
        })
      }, y), /* @__PURE__ */ A.createElement(m, tt({
        name: a ? "".concat(a, "Country") : void 0,
        "aria-label": x.country
      }, P, {
        value: V,
        options: ge,
        onChange: this.onCountryChange,
        onFocus: this.onCountryFocus,
        onBlur: this.onCountryBlur,
        disabled: i || P && P.disabled,
        readOnly: o || P && P.readOnly,
        iconComponent: this.CountryIcon
      })), /* @__PURE__ */ A.createElement($e, tt({
        ref: this.setInputRef,
        type: "tel",
        autoComplete: d
      }, $, L, {
        inputFormat: j === !0 ? "INTERNATIONAL" : j === !1 ? "NATIONAL" : "INTERNATIONAL_OR_NATIONAL",
        international: j ? !0 : void 0,
        withCountryCallingCode: j ? !0 : void 0,
        name: a,
        metadata: T,
        country: V,
        value: te || "",
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        disabled: i,
        readOnly: o,
        inputComponent: f,
        className: Lt("PhoneInputInput", $ && $.className, L.className)
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: (
      // `state` holds previous props as `props`, and also:
      // * `country` — The currently selected country, e.g. `"RU"`.
      // * `value` — The currently entered phone number (E.164), e.g. `+78005553535`.
      // * `phoneDigits` — The parsed `<input/>` value, e.g. `8005553535`.
      // (and a couple of other less significant properties)
      function(r, a) {
        return $i({
          // Emulate `prevProps` via `state.props`.
          props: r
        }, dc(r, a.props, a));
      }
    )
  }]);
}(A.PureComponent), yi = /* @__PURE__ */ A.forwardRef(function(e, t) {
  return /* @__PURE__ */ A.createElement(gc, tt({}, vc(e), {
    inputRef: t
  }));
});
yi.propTypes = {
  /**
   * Phone number in `E.164` format.
   *
   * Example:
   *
   * `"+12223333333"`
   *
   * Any "falsy" value like `undefined`, `null` or an empty string `""` is treated like "empty".
   */
  value: C.string,
  /**
   * A function of `value: string?`.
   *
   * Updates the `value` property as the user inputs a phone number.
   *
   * If the user erases the input value, the argument is `undefined`.
   */
  onChange: C.func.isRequired,
  /**
   * Toggles the `--focus` CSS class.
   * @ignore
   */
  onFocus: C.func,
  /**
   * `onBlur` is usually passed by `redux-form`.
   * @ignore
   */
  onBlur: C.func,
  /**
   * Set to `true` to mark both the phone number `<input/>`
   * and the country `<select/>` as `disabled`.
   */
  disabled: C.bool,
  /**
   * Set to `true` to mark both the phone number `<input/>`
   * and the country `<select/>` as `readonly`.
   */
  readOnly: C.bool,
  /**
   * Sets `autoComplete` property for phone number `<input/>`.
   *
   * Web browser's "autocomplete" feature
   * remembers the phone number being input
   * and can also autofill the `<input/>`
   * with previously remembered phone numbers.
   *
   * https://developers.google.com
   * /web/updates/2015/06/checkout-faster-with-autofill
   *
   * For example, can be used to turn it off:
   *
   * "So when should you use `autocomplete="off"`?
   *  One example is when you've implemented your own version
   *  of autocomplete for search. Another example is any form field
   *  where users will input and submit different kinds of information
   *  where it would not be useful to have the browser remember
   *  what was submitted previously".
   */
  // (is `"tel"` by default)
  autoComplete: C.string,
  /**
   * Set to `"national"` to show the initial `value` in
   * "national" format rather than "international".
   *
   * For example, if `initialValueFormat` is `"national"`
   * and the initial `value="+12133734253"` is passed
   * then the `<input/>` value will be `"(213) 373-4253"`.
   *
   * By default, `initialValueFormat` is `undefined`,
   * meaning that if the initial `value="+12133734253"` is passed
   * then the `<input/>` value will be `"+1 213 373 4253"`.
   *
   * The reason for such default behaviour is that
   * the newer generation grows up when there are no stationary phones
   * and therefore everyone inputs phone numbers in international format
   * in their smartphones so people gradually get more accustomed to
   * writing phone numbers in international format rather than in local format.
   * Future people won't be using "national" format, only "international".
   */
  // (is `undefined` by default)
  initialValueFormat: C.oneOf(["national"]),
  // `displayInitialValueAsLocalNumber` property has been
  // superceded by `initialValueFormat` property.
  displayInitialValueAsLocalNumber: C.bool,
  /**
   * The country to be selected by default.
   * For example, can be set after a GeoIP lookup.
   *
   * Example: `"US"`.
   */
  // A two-letter country code ("ISO 3166-1 alpha-2").
  defaultCountry: C.string,
  /**
   * If specified, only these countries will be available for selection.
   *
   * Example:
   *
   * `["RU", "UA", "KZ"]`
   */
  countries: C.arrayOf(C.string),
  /**
   * Custom country `<select/>` option names.
   * Also some labels like "ext" and country `<select/>` `aria-label`.
   *
   * Example:
   *
   * `{ "ZZ": "Международный", RU: "Россия", US: "США", ... }`
   *
   * See the `locales` directory for examples.
   */
  labels: ui,
  /**
   * Country `<select/>` options are sorted by their labels.
   * The default sorting function uses `a.localeCompare(b, locales)`,
   * and, if that's not available, falls back to simple `a > b` / `a < b`.
   * Some languages, like Chinese, support multiple sorting variants
   * (called "collations"), and the user might prefer one or another.
   * Also, sometimes the Operating System language is not always
   * the preferred language for a person using a website or an application,
   * so there should be a way to specify custom locale.
   * This `locales` property mimicks the `locales` argument of `Intl` constructors,
   * and can be either a Unicode BCP 47 locale identifier or an array of such locale identifiers.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
   */
  locales: C.oneOfType([C.string, C.arrayOf(C.string)]),
  /*
   * Custom country `<select/>` options sorting function.
   * The default one uses `a.localeCompare(b)`, and,
   * if that's not available, falls back to simple `a > b`/`a < b`.
   * There have been requests to add custom sorter for cases
   * like Chinese language and "pinyin" (non-default) sorting order.
   * https://stackoverflow.com/questions/22907288/chinese-sorting-by-pinyin-in-javascript-with-localecompare
  compareStrings: PropTypes.func,
   */
  /**
   * A URL template of a country flag, where
   * "{XX}" is a two-letter country code in upper case,
   * or where "{xx}" is a two-letter country code in lower case.
   * By default it points to `country-flag-icons` gitlab pages website.
   * I imagine someone might want to download those country flag icons
   * and host them on their own servers instead
   * (all flags are available in the `country-flag-icons` library).
   * There's a catch though: new countries may be added in future,
   * so when hosting country flag icons on your own server
   * one should check the `CHANGELOG.md` every time before updating this library,
   * otherwise there's a possibility that some new country flag would be missing.
   */
  flagUrl: C.string,
  /**
   * Custom country flag icon components.
   * These flags will be used instead of the default ones.
   * The the "Flags" section of the readme for more info.
   *
   * The shape is an object where keys are country codes
   * and values are flag icon components.
   * Flag icon components receive the same properties
   * as `flagComponent` (see below).
   *
   * Example:
   *
   * `{ "RU": (props) => <img src="..."/> }`
   *
   * Example:
   *
   * `import flags from 'country-flag-icons/react/3x2'`
   *
   * `import PhoneInput from 'react-phone-number-input'`
   *
   * `<PhoneInput flags={flags} .../>`
   */
  flags: C.objectOf(C.elementType),
  /**
   * Country flag icon component.
   *
   * Takes properties:
   *
   * * `country: string` — The country code.
   * * `countryName: string` — The country name.
   * * `flagUrl: string` — The `flagUrl` property (see above).
   * * `flags: object` — The `flags` property (see above).
   */
  flagComponent: C.elementType,
  /**
   * Set to `false` to remove the "International" option from country `<select/>`.
   */
  addInternationalOption: C.bool,
  /**
   * "International" icon component.
   * Should have the same aspect ratio.
   *
   * Receives properties:
   *
   * * `title: string` — "International" country option label.
   */
  internationalIcon: C.elementType,
  /**
   * Can be used to place some countries on top of the list of country `<select/>` options.
   *
   * * `"XX"` — inserts an option for "XX" country.
   * * `"🌐"` — inserts "International" option.
   * * `"|"` — inserts a separator.
   * * `"..."` — inserts options for the rest of the countries (can be omitted, in which case it will be automatically added at the end).
   *
   * Example:
   *
   * `["US", "CA", "AU", "|", "..."]`
   */
  countryOptionsOrder: C.arrayOf(C.string),
  /**
   * `<Phone/>` component CSS style object.
   */
  style: C.object,
  /**
   * `<Phone/>` component CSS class.
   */
  className: C.string,
  /**
   * Country `<select/>` component.
   *
   * Receives properties:
   *
   * * `name: string?` — HTML `name` attribute.
   * * `value: string?` — The currently selected country code.
   * * `onChange(value: string?)` — Updates the `value`.
   * * `onFocus()` — Is used to toggle the `--focus` CSS class.
   * * `onBlur()` — Is used to toggle the `--focus` CSS class.
   * * `options: object[]` — The list of all selectable countries (including "International") each being an object of shape `{ value: string?, label: string }`.
   * * `iconComponent: PropTypes.elementType` — React component that renders a country icon: `<Icon country={value}/>`. If `country` is `undefined` then it renders an "International" icon.
   * * `disabled: boolean?` — HTML `disabled` attribute.
   * * `readOnly: boolean?` — HTML `readOnly` attribute.
   * * `tabIndex: (number|string)?` — HTML `tabIndex` attribute.
   * * `className: string` — CSS class name.
   */
  countrySelectComponent: C.elementType,
  /**
   * Country `<select/>` component props.
   * Along with the usual DOM properties such as `aria-label` and `tabIndex`,
   * some custom properties are supported, such as `arrowComponent` and `unicodeFlags`.
   */
  countrySelectProps: C.object,
  /**
   * Phone number `<input/>` component.
   *
   * Receives properties:
   *
   * * `value: string` — The formatted `value`.
   * * `onChange(event: Event)` — Updates the formatted `value` from `event.target.value`.
   * * `onFocus()` — Is used to toggle the `--focus` CSS class.
   * * `onBlur()` — Is used to toggle the `--focus` CSS class.
   * * Other properties like `type="tel"` or `autoComplete="tel"` that should be passed through to the DOM `<input/>`.
   *
   * Must also either use `React.forwardRef()` to "forward" `ref` to the `<input/>` or implement `.focus()` method.
   */
  inputComponent: C.elementType,
  /**
   * Phone number `<input/>` component props.
   */
  numberInputProps: C.object,
  /**
   * Wrapping `<div/>` component.
   *
   * Receives properties:
   *
   * * `style: object` — A component CSS style object.
   * * `className: string` — Classes to attach to the component, typically changes when component focuses or blurs.
   */
  containerComponent: C.elementType,
  /**
   * Wrapping `<div/>` component props.
   */
  containerComponentProps: C.object,
  /**
   * When the user attempts to insert a digit somewhere in the middle of a phone number,
   * the caret position is moved right before the next available digit skipping
   * any punctuation in between. This is called "smart" caret positioning.
   * Another case would be the phone number format changing as a result of
   * the user inserting the digit somewhere in the middle, which would require
   * re-positioning the caret because all digit positions have changed.
   * This "smart" caret positioning feature can be turned off by passing
   * `smartCaret={false}` property: use it in case of any possible issues
   * with caret position during phone number input.
   */
  // Is `true` by default.
  smartCaret: C.bool,
  /**
   * Set to `true` to force "international" phone number format.
   * Set to `false` to force "national" phone number format.
   * By default it's `undefined` meaning that it doesn't enforce any phone number format:
   * the user can input their phone number in either "national" or "international" format.
   */
  international: C.bool,
  /**
   * If set to `true`, the phone number input will get trimmed
   * if it exceeds the maximum length for the country.
   */
  limitMaxLength: C.bool,
  /**
   * If set to `false`, and `international` is `true`, then
   * users won't be able to erase the "country calling part"
   * of a phone number in the `<input/>`.
   */
  countryCallingCodeEditable: C.bool,
  /**
   * `libphonenumber-js` metadata.
   *
   * Can be used to pass custom `libphonenumber-js` metadata
   * to reduce the overall bundle size for those who compile "custom" metadata.
   */
  metadata: di,
  /**
   * Is called every time the selected country changes:
   * either programmatically or when user selects it manually from the list.
   */
  // People have been asking for a way to get the selected country.
  // @see  https://github.com/catamphetamine/react-phone-number-input/issues/128
  // For some it's just a "business requirement".
  // I guess it's about gathering as much info on the user as a website can
  // without introducing any addional fields that would complicate the form
  // therefore reducing "conversion" (that's a marketing term).
  // Assuming that the phone number's country is the user's country
  // is not 100% correct but in most cases I guess it's valid.
  onCountryChange: C.func,
  /**
   * If set to `false`, will not focus the `<input/>` component
   * when the user selects a country from the list of countries.
   * This can be used to conform to the Web Content Accessibility Guidelines (WCAG).
   * Quote:
   * "On input: Changing the setting of any user interface component
   *  does not automatically cause a change of context unless the user
   *  has been advised of the behaviour before using the component."
   */
  focusInputOnCountrySelection: C.bool
};
var ya = {
  /**
   * Remember (and autofill) the value as a phone number.
   */
  autoComplete: "tel",
  /**
   * Country `<select/>` component.
   */
  countrySelectComponent: ei,
  /**
   * Flag icon component.
   */
  flagComponent: Dn,
  /**
   * By default, uses icons from `country-flag-icons` gitlab pages website.
   */
  // Must be equal to `flagUrl` in `./CountryIcon.js`.
  flagUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",
  /**
   * Default "International" country `<select/>` option icon.
   */
  internationalIcon: Xt,
  /**
   * Phone number `<input/>` component.
   */
  inputComponent: "input",
  /**
   * Wrapping `<div/>` component.
   */
  containerComponent: "div",
  /**
   * Some users requested a way to reset the component:
   * both number `<input/>` and country `<select/>`.
   * Whenever `reset` property changes both number `<input/>`
   * and country `<select/>` are reset.
   * It's not implemented as some instance `.reset()` method
   * because `ref` is forwarded to `<input/>`.
   * It's also not replaced with just resetting `country` on
   * external `value` reset, because a user could select a country
   * and then not input any `value`, and so the selected country
   * would be "stuck", if not using this `reset` property.
   */
  // https://github.com/catamphetamine/react-phone-number-input/issues/300
  reset: C.any,
  /**
   *
   */
  /**
   * Set to `false` to use "basic" caret instead of the "smart" one.
   */
  smartCaret: !0,
  /**
   * Whether to add the "International" option
   * to the list of countries.
   */
  addInternationalOption: !0,
  /**
   * If set to `false`, and `international` is `true`, then
   * users won't be able to erase the "country calling part"
   * of a phone number in the `<input/>`.
   */
  countryCallingCodeEditable: !0,
  /**
   * If set to `false`, will not focus the `<input/>` component
   * when the user selects a country from the list of countries.
   * This can be used to conform to the Web Content Accessibility Guidelines (WCAG).
   * Quote:
   * "On input: Changing the setting of any user interface component
   *  does not automatically cause a change of context unless the user
   *  has been advised of the behaviour before using the component."
   */
  focusInputOnCountrySelection: !0
};
function vc(e) {
  e = $i({}, e);
  for (var t in ya)
    e[t] === void 0 && (e[t] = ya[t]);
  return e;
}
const bc = yi;
function Cc(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; ) {
    if (e[n] !== t[n])
      return !1;
    n++;
  }
  return !0;
}
const Pc = {
  ext: "ext.",
  country: "Phone number country",
  phone: "Phone",
  AB: "Abkhazia",
  AC: "Ascension Island",
  AD: "Andorra",
  AE: "United Arab Emirates",
  AF: "Afghanistan",
  AG: "Antigua and Barbuda",
  AI: "Anguilla",
  AL: "Albania",
  AM: "Armenia",
  AO: "Angola",
  AQ: "Antarctica",
  AR: "Argentina",
  AS: "American Samoa",
  AT: "Austria",
  AU: "Australia",
  AW: "Aruba",
  AX: "Åland Islands",
  AZ: "Azerbaijan",
  BA: "Bosnia and Herzegovina",
  BB: "Barbados",
  BD: "Bangladesh",
  BE: "Belgium",
  BF: "Burkina Faso",
  BG: "Bulgaria",
  BH: "Bahrain",
  BI: "Burundi",
  BJ: "Benin",
  BL: "Saint Barthélemy",
  BM: "Bermuda",
  BN: "Brunei Darussalam",
  BO: "Bolivia",
  BQ: "Bonaire, Sint Eustatius and Saba",
  BR: "Brazil",
  BS: "Bahamas",
  BT: "Bhutan",
  BV: "Bouvet Island",
  BW: "Botswana",
  BY: "Belarus",
  BZ: "Belize",
  CA: "Canada",
  CC: "Cocos (Keeling) Islands",
  CD: "Congo, Democratic Republic of the",
  CF: "Central African Republic",
  CG: "Congo",
  CH: "Switzerland",
  CI: "Cote d'Ivoire",
  CK: "Cook Islands",
  CL: "Chile",
  CM: "Cameroon",
  CN: "China",
  CO: "Colombia",
  CR: "Costa Rica",
  CU: "Cuba",
  CV: "Cape Verde",
  CW: "Curaçao",
  CX: "Christmas Island",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DE: "Germany",
  DJ: "Djibouti",
  DK: "Denmark",
  DM: "Dominica",
  DO: "Dominican Republic",
  DZ: "Algeria",
  EC: "Ecuador",
  EE: "Estonia",
  EG: "Egypt",
  EH: "Western Sahara",
  ER: "Eritrea",
  ES: "Spain",
  ET: "Ethiopia",
  FI: "Finland",
  FJ: "Fiji",
  FK: "Falkland Islands",
  FM: "Federated States of Micronesia",
  FO: "Faroe Islands",
  FR: "France",
  GA: "Gabon",
  GB: "United Kingdom",
  GD: "Grenada",
  GE: "Georgia",
  GF: "French Guiana",
  GG: "Guernsey",
  GH: "Ghana",
  GI: "Gibraltar",
  GL: "Greenland",
  GM: "Gambia",
  GN: "Guinea",
  GP: "Guadeloupe",
  GQ: "Equatorial Guinea",
  GR: "Greece",
  GS: "South Georgia and the South Sandwich Islands",
  GT: "Guatemala",
  GU: "Guam",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HK: "Hong Kong",
  HM: "Heard Island and McDonald Islands",
  HN: "Honduras",
  HR: "Croatia",
  HT: "Haiti",
  HU: "Hungary",
  ID: "Indonesia",
  IE: "Ireland",
  IL: "Israel",
  IM: "Isle of Man",
  IN: "India",
  IO: "British Indian Ocean Territory",
  IQ: "Iraq",
  IR: "Iran",
  IS: "Iceland",
  IT: "Italy",
  JE: "Jersey",
  JM: "Jamaica",
  JO: "Jordan",
  JP: "Japan",
  KE: "Kenya",
  KG: "Kyrgyzstan",
  KH: "Cambodia",
  KI: "Kiribati",
  KM: "Comoros",
  KN: "Saint Kitts and Nevis",
  KP: "North Korea",
  KR: "South Korea",
  KW: "Kuwait",
  KY: "Cayman Islands",
  KZ: "Kazakhstan",
  LA: "Laos",
  LB: "Lebanon",
  LC: "Saint Lucia",
  LI: "Liechtenstein",
  LK: "Sri Lanka",
  LR: "Liberia",
  LS: "Lesotho",
  LT: "Lithuania",
  LU: "Luxembourg",
  LV: "Latvia",
  LY: "Libya",
  MA: "Morocco",
  MC: "Monaco",
  MD: "Moldova",
  ME: "Montenegro",
  MF: "Saint Martin (French Part)",
  MG: "Madagascar",
  MH: "Marshall Islands",
  MK: "North Macedonia",
  ML: "Mali",
  MM: "Myanmar",
  MN: "Mongolia",
  MO: "Macao",
  MP: "Northern Mariana Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MS: "Montserrat",
  MT: "Malta",
  MU: "Mauritius",
  MV: "Maldives",
  MW: "Malawi",
  MX: "Mexico",
  MY: "Malaysia",
  MZ: "Mozambique",
  NA: "Namibia",
  NC: "New Caledonia",
  NE: "Niger",
  NF: "Norfolk Island",
  NG: "Nigeria",
  NI: "Nicaragua",
  NL: "Netherlands",
  NO: "Norway",
  NP: "Nepal",
  NR: "Nauru",
  NU: "Niue",
  NZ: "New Zealand",
  OM: "Oman",
  OS: "South Ossetia",
  PA: "Panama",
  PE: "Peru",
  PF: "French Polynesia",
  PG: "Papua New Guinea",
  PH: "Philippines",
  PK: "Pakistan",
  PL: "Poland",
  PM: "Saint Pierre and Miquelon",
  PN: "Pitcairn",
  PR: "Puerto Rico",
  PS: "Palestine",
  PT: "Portugal",
  PW: "Palau",
  PY: "Paraguay",
  QA: "Qatar",
  RE: "Reunion",
  RO: "Romania",
  RS: "Serbia",
  RU: "Russia",
  RW: "Rwanda",
  SA: "Saudi Arabia",
  SB: "Solomon Islands",
  SC: "Seychelles",
  SD: "Sudan",
  SE: "Sweden",
  SG: "Singapore",
  SH: "Saint Helena",
  SI: "Slovenia",
  SJ: "Svalbard and Jan Mayen",
  SK: "Slovakia",
  SL: "Sierra Leone",
  SM: "San Marino",
  SN: "Senegal",
  SO: "Somalia",
  SR: "Suriname",
  SS: "South Sudan",
  ST: "Sao Tome and Principe",
  SV: "El Salvador",
  SX: "Sint Maarten",
  SY: "Syria",
  SZ: "Swaziland",
  TA: "Tristan da Cunha",
  TC: "Turks and Caicos Islands",
  TD: "Chad",
  TF: "French Southern Territories",
  TG: "Togo",
  TH: "Thailand",
  TJ: "Tajikistan",
  TK: "Tokelau",
  TL: "Timor-Leste",
  TM: "Turkmenistan",
  TN: "Tunisia",
  TO: "Tonga",
  TR: "Turkey",
  TT: "Trinidad and Tobago",
  TV: "Tuvalu",
  TW: "Taiwan",
  TZ: "Tanzania",
  UA: "Ukraine",
  UG: "Uganda",
  UM: "United States Minor Outlying Islands",
  US: "United States",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VA: "Holy See (Vatican City State)",
  VC: "Saint Vincent and the Grenadines",
  VE: "Venezuela",
  VG: "Virgin Islands, British",
  VI: "Virgin Islands, U.S.",
  VN: "Vietnam",
  VU: "Vanuatu",
  WF: "Wallis and Futuna",
  WS: "Samoa",
  XK: "Kosovo",
  YE: "Yemen",
  YT: "Mayotte",
  ZA: "South Africa",
  ZM: "Zambia",
  ZW: "Zimbabwe",
  ZZ: "International"
};
var Nc = ["metadata", "labels"];
function In() {
  return In = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, In.apply(this, arguments);
}
function Sc(e, t) {
  if (e == null)
    return {};
  var n = Oc(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Oc(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function hi(e) {
  var t = /* @__PURE__ */ A.forwardRef(function(n, r) {
    var a = n.metadata, i = a === void 0 ? e : a, o = n.labels, d = o === void 0 ? Pc : o, s = Sc(n, Nc);
    return /* @__PURE__ */ A.createElement(bc, In({}, s, {
      ref: r,
      metadata: i,
      labels: d
    }));
  });
  return t.propTypes = {
    metadata: di,
    labels: ui
  }, t;
}
hi();
function wc(e, t) {
  var n = Array.prototype.slice.call(t);
  return n.push(Oa), e.apply(this, n);
}
const xc = hi(Oa);
function Ec() {
  return wc(Yu, arguments);
}
const ha = ({ onSubmit: e, isLoading: t = !1, requiredFields: n = [] }) => {
  const [r, a] = de({
    name: "",
    email: "",
    phone: ""
  }), [i, o] = de({}), d = () => {
    const $ = {};
    if (n.includes("name"))
      if (!r.name.trim())
        $.name = "Name is required";
      else {
        const h = r.name.trim().split(/\s+/);
        (h.length < 2 || h.some((m) => m.length === 0)) && ($.name = "Please enter both first and last name");
      }
    return n.includes("email") && (r.email.trim() ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email.trim()) || ($.email = "Please enter a valid email address") : $.email = "Email is required"), n.includes("phone") && (r.phone.trim() ? r.phone && !Ec(r.phone) && ($.phone = "Please enter a valid phone number") : $.phone = "Phone number is required"), o($), Object.keys($).length === 0;
  }, s = ($) => {
    $.preventDefault(), d() && e(r);
  }, l = ($) => (h) => {
    const m = h.target.value;
    a((P) => ({ ...P, [$]: m })), i[$] && o((P) => ({ ...P, [$]: void 0 }));
  }, f = ($) => {
    const h = $ || "";
    a((m) => ({ ...m, phone: h })), i.phone && o((m) => ({ ...m, phone: void 0 }));
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "user-info-form", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "user-info-form__header", children: [
      /* @__PURE__ */ c.jsx("h3", { className: "user-info-form__title", children: "Welcome! Let's get started" }),
      /* @__PURE__ */ c.jsx("p", { className: "user-info-form__subtitle", children: "Please provide your information to continue" })
    ] }),
    /* @__PURE__ */ c.jsxs("form", { onSubmit: s, className: "user-info-form__form", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "user-info-form__field", children: [
        /* @__PURE__ */ c.jsxs("label", { htmlFor: "name", className: "user-info-form__label", children: [
          "Full Name ",
          n.includes("name") ? "*" : ""
        ] }),
        /* @__PURE__ */ c.jsx(
          "input",
          {
            type: "text",
            id: "name",
            className: `user-info-form__input ${i.name ? "user-info-form__input--error" : ""}`,
            value: r.name,
            onChange: l("name"),
            placeholder: "Enter your full name",
            disabled: t
          }
        ),
        i.name && /* @__PURE__ */ c.jsx("span", { className: "user-info-form__error", children: i.name })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "user-info-form__field", children: [
        /* @__PURE__ */ c.jsxs("label", { htmlFor: "email", className: "user-info-form__label", children: [
          "Email Address ",
          n.includes("email") ? "*" : ""
        ] }),
        /* @__PURE__ */ c.jsx(
          "input",
          {
            type: "email",
            id: "email",
            className: `user-info-form__input ${i.email ? "user-info-form__input--error" : ""}`,
            value: r.email,
            onChange: l("email"),
            placeholder: "Enter your email address",
            disabled: t
          }
        ),
        i.email && /* @__PURE__ */ c.jsx("span", { className: "user-info-form__error", children: i.email })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "user-info-form__field", children: [
        /* @__PURE__ */ c.jsxs("label", { htmlFor: "phone", className: "user-info-form__label", children: [
          "Phone Number ",
          n.includes("phone") ? "*" : ""
        ] }),
        /* @__PURE__ */ c.jsx(
          xc,
          {
            international: !0,
            countryCallingCodeEditable: !0,
            defaultCountry: "US",
            value: r.phone,
            onChange: f,
            className: `user-info-form__phone-input ${i.phone ? "user-info-form__phone-input--error" : ""}`,
            placeholder: "Enter your phone number",
            disabled: t,
            limitMaxLength: !1
          }
        ),
        i.phone && /* @__PURE__ */ c.jsx("span", { className: "user-info-form__error", children: i.phone })
      ] }),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "submit",
          className: "user-info-form__submit",
          disabled: t,
          children: t ? /* @__PURE__ */ c.jsx("div", { className: "user-info-form__loading-spinner" }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
            /* @__PURE__ */ c.jsx(pt, { size: 18 }),
            "Start Chat"
          ] })
        }
      )
    ] })
  ] });
}, ga = ({
  suggestions: e,
  visible: t,
  onSuggestionClick: n,
  maxVisible: r = 10
}) => {
  if (!t || e.length === 0)
    return null;
  const a = e.slice(0, r), i = (d) => {
    n(d);
  }, o = (d, s) => {
    (d.key === "Enter" || d.key === " ") && (d.preventDefault(), i(s));
  };
  return /* @__PURE__ */ c.jsx("div", { className: "message-suggestions", role: "group", "aria-label": "Message suggestions", children: a.map((d) => /* @__PURE__ */ c.jsx(
    "button",
    {
      className: "suggestion-chip",
      onClick: () => i(d.text),
      onKeyDown: (s) => o(s, d.text),
      type: "button",
      tabIndex: 0,
      "aria-label": `Send message: ${d.text}`,
      children: d.text
    },
    d.id
  )) });
};
function va() {
  const e = window.innerWidth, t = window.innerHeight, n = navigator.userAgent.toLowerCase(), r = "ontouchstart" in window || navigator.maxTouchPoints > 0, a = e < 768, i = r || a, o = n.includes("arc") || n.includes("company.thebrowser.browser") || window.ArcBrowser !== void 0, d = /safari/.test(n) && !/chrome/.test(n) && !o, s = /chrome/.test(n) && !o, l = !!window.visualViewport;
  return {
    isMobile: i,
    isDesktop: !i,
    screenWidth: e,
    screenHeight: t,
    isArc: o,
    isSafari: d,
    isChrome: s,
    supportsVisualViewport: l
  };
}
function _c() {
  const [e, t] = de(() => typeof window > "u" ? {
    isMobile: !1,
    isDesktop: !0,
    screenWidth: 1024,
    screenHeight: 768,
    isArc: !1,
    isSafari: !1,
    isChrome: !1,
    supportsVisualViewport: !1
  } : va());
  return Je(() => {
    const n = () => {
      t(va());
    };
    return window.addEventListener("resize", n), window.addEventListener("orientationchange", n), () => {
      window.removeEventListener("resize", n), window.removeEventListener("orientationchange", n);
    };
  }, []), e;
}
const Tc = ({
  config: e,
  onMessage: t,
  onError: n,
  onClose: r
}) => {
  const [a, i] = de([]), [o, d] = de(""), [s, l] = de(!1), [f, $] = de(!1), [h, m] = de(e.initialState !== "closed"), [P, E] = de([]), [y, x] = de(null), [T, j] = de(!1), [L, v] = de([]), [V, ee] = de(!1), [te] = de(() => {
    let N = localStorage.getItem("n8n_session_id");
    return N ? N.split("|")[0] : Math.floor(Math.random() * 1e8).toString();
  }), [ne, $e] = de(() => localStorage.getItem("n8n_session_id") || te), [ge, Ie] = de(!1), [re, ae] = de(!1), [ie, ce] = de(null), [fe, pe] = de(0), [Ce, b] = de(null), w = _c(), U = Ke(null), k = Ke(null), M = Ke(null), G = Ke(null), D = Ke(null), p = { ...{
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
    allowedFileTypes: [],
    enableUserInfo: !1,
    userInfoRequiredFields: ["email", "phone"],
    enableMessageSuggestions: !1,
    initialSuggestions: [],
    maxSuggestions: 10,
    autoHideSuggestions: !0
  }, ...e }, H = () => {
    var N;
    (N = U.current) == null || N.scrollIntoView();
  };
  Je(() => {
    H();
  }, [a]), Je(() => {
    p.enableMessageSuggestions && p.initialSuggestions && p.initialSuggestions.length > 0 && a.length === 0 && (v(p.initialSuggestions.slice(0, p.maxSuggestions)), ee(!0));
  }, [p.enableMessageSuggestions, p.initialSuggestions, p.maxSuggestions, a.length]), Je(() => {
    if (p.enableUserInfo) {
      const N = localStorage.getItem("n8n_user_info");
      if (N)
        try {
          const I = JSON.parse(N);
          x(I), j(!1);
        } catch (I) {
          console.error("Error parsing saved user info:", I), localStorage.removeItem("n8n_user_info");
        }
      else
        j(!0);
    }
  }, [p.enableUserInfo]), Je(() => {
    if (h) {
      const N = setTimeout(() => {
        k.current && k.current.focus();
      }, 100);
      return () => clearTimeout(N);
    }
  }, [h]);
  const R = () => `${Date.now()}-${Math.random()}`, ue = async (N, I) => {
    try {
      if (I) {
        const _ = new FormData();
        _.append("sessionId", ne), _.append("chatInput", N), _.append("data", I.file), y && (_.append("userName", y.name), _.append("userEmail", y.email), _.append("userPhone", y.phone));
        const B = await fetch(e.n8nWebhookUrl, {
          method: "POST",
          body: _
        });
        if (!B.ok)
          throw new Error(`HTTP error! status: ${B.status}`);
        const J = await B.json(), z = J.output || J.response || J.message || J.text || "Response received", Pe = J.suggestions || [];
        return { content: z, suggestions: Pe };
      } else {
        const _ = {
          sessionId: ne,
          chatInput: N,
          // Include user info in JSON payload
          ...y && {
            userName: y.name,
            userEmail: y.email,
            userPhone: y.phone
          }
        }, B = await fetch(e.n8nWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(_)
        });
        if (!B.ok)
          throw new Error(`HTTP error! status: ${B.status}`);
        const J = await B.json(), z = J.output || J.response || J.message || J.text || "Response received", Pe = J.suggestions || [];
        return { content: z, suggestions: Pe };
      }
    } catch (_) {
      throw console.error("Error sending to n8n:", _), _;
    }
  }, S = be(async () => {
    if (!o.trim() && P.length === 0 || f)
      return;
    sessionStorage.setItem("n8n-chat-popup-shown", "true");
    const N = o.trim() || "", I = [...P];
    d(""), E([]), $(!0), e.showTypingIndicator && l(!0);
    try {
      for (let _ = 0; _ < I.length; _++) {
        const B = I[_], z = _ === I.length - 1 && N ? N : "", Pe = {
          id: R(),
          type: "user",
          content: z,
          timestamp: /* @__PURE__ */ new Date(),
          files: [B]
        };
        i((Ne) => [...Ne, Pe]), t == null || t(Pe);
        const Re = await ue(z, B), ke = {
          id: R(),
          type: "bot",
          content: Re.content,
          timestamp: /* @__PURE__ */ new Date(),
          suggestions: Re.suggestions
        };
        i((Ne) => [...Ne, ke]), t == null || t(ke), p.enableMessageSuggestions && Re.suggestions && Re.suggestions.length > 0 && (v(Re.suggestions.slice(0, p.maxSuggestions)), ee(!0));
      }
      if (N && I.length === 0) {
        const _ = {
          id: R(),
          type: "user",
          content: N,
          timestamp: /* @__PURE__ */ new Date()
        };
        i((z) => [...z, _]), t == null || t(_);
        const B = await ue(N), J = {
          id: R(),
          type: "bot",
          content: B.content,
          timestamp: /* @__PURE__ */ new Date(),
          suggestions: B.suggestions
        };
        i((z) => [...z, J]), t == null || t(J), p.enableMessageSuggestions && B.suggestions && B.suggestions.length > 0 && (v(B.suggestions.slice(0, p.maxSuggestions)), ee(!0));
      }
    } catch (_) {
      const B = {
        id: R(),
        type: "bot",
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: /* @__PURE__ */ new Date()
      };
      i((J) => [...J, B]), n == null || n(_);
    } finally {
      $(!1), l(!1), I.forEach((_) => URL.revokeObjectURL(_.url));
    }
  }, [o, P, f, e, t, n]), me = (N) => {
    N.key === "Enter" && !N.shiftKey && (N.preventDefault(), S());
  }, Te = be((N) => {
    E((I) => [...I, ...N].slice(0, p.maxFiles));
  }, [p.maxFiles]), Ae = be((N) => {
    E((I) => {
      const _ = I.find((B) => B.id === N);
      return _ && URL.revokeObjectURL(_.url), I.filter((B) => B.id !== N);
    });
  }, []), Ge = async () => {
    if (!G.current || !D.current)
      return;
    const N = G.current, I = D.current, _ = I.getContext("2d");
    _ && (I.width = N.videoWidth, I.height = N.videoHeight, _.drawImage(N, 0, 0), I.toBlob(async (B) => {
      if (B) {
        const J = new File([B], `photo-${Date.now()}.jpg`, { type: "image/jpeg" });
        try {
          const z = await Ye(J);
          Te([z]);
        } catch (z) {
          console.error("Error processing captured photo:", z), alert("Error processing captured photo");
        }
      }
    }, "image/jpeg", 0.8), ot());
  }, ot = () => {
    var N;
    (N = G.current) != null && N.srcObject && (G.current.srcObject.getTracks().forEach((_) => _.stop()), G.current.srcObject = null), Ie(!1);
  }, dt = async () => {
    if (console.log("🎤 Starting audio recording..."), !MediaRecorder || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error("❌ MediaRecorder or getUserMedia not supported"), alert("Audio recording is not supported in this browser.");
      return;
    }
    if (w.isArc) {
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
      const N = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: !0,
          noiseSuppression: !0,
          sampleRate: 44100
        }
      });
      console.log("✅ Microphone access granted");
      let I = {};
      w.isArc ? MediaRecorder.isTypeSupported("audio/webm;codecs=opus") ? I.mimeType = "audio/webm;codecs=opus" : MediaRecorder.isTypeSupported("audio/mp4") && (I.mimeType = "audio/mp4") : MediaRecorder.isTypeSupported("audio/webm") && (I.mimeType = "audio/webm");
      const _ = new MediaRecorder(N, I), B = [];
      _.ondataavailable = (z) => {
        console.log("📊 Audio data available:", z.data.size, "bytes"), z.data.size > 0 && B.push(z.data);
      }, _.onstop = async () => {
        console.log("🛑 Recording stopped, creating file...");
        const z = _.mimeType || "audio/wav", Pe = new Blob(B, { type: z }), Re = z.includes("webm") ? "webm" : "wav", ke = new File([Pe], `recording-${Date.now()}.${Re}`, { type: z });
        console.log("📁 Created audio file:", ke.name, ke.size, "bytes");
        try {
          const Ne = await Ye(ke);
          sessionStorage.setItem("n8n-chat-popup-shown", "true"), $(!0), e.showTypingIndicator && l(!0);
          const Jt = {
            id: R(),
            type: "user",
            content: "",
            files: [Ne],
            timestamp: /* @__PURE__ */ new Date()
          };
          i((ct) => [...ct, Jt]);
          const Le = new FormData();
          Le.append("sessionId", ne), Le.append("chatInput", ""), Le.append("data", Ne.file);
          const ze = await fetch(e.n8nWebhookUrl, {
            method: "POST",
            body: Le
          });
          if (!ze.ok)
            throw new Error(`HTTP error! status: ${ze.status}`);
          const Se = await ze.json(), lt = Se.output || Se.response || Se.message || Se.text || "Response received", Be = Se.suggestions || [], Ft = {
            id: R(),
            type: "bot",
            content: lt,
            timestamp: /* @__PURE__ */ new Date(),
            suggestions: Be
          };
          i((ct) => [...ct, Ft]), p.enableMessageSuggestions && Be && Be.length > 0 && (v(Be.slice(0, p.maxSuggestions)), ee(!0));
        } catch (Ne) {
          console.error("Error processing audio recording:", Ne), alert("Error processing audio recording");
        } finally {
          $(!1), l(!1);
        }
        N.getTracks().forEach((Ne) => Ne.stop());
      }, _.onerror = (z) => {
        console.error("❌ Recording error:", z), alert("Recording failed. Please try again.");
      }, _.start(1e3), ce(_), ae(!0), pe(0), console.log("🔴 Recording started");
      const J = setInterval(() => {
        pe((z) => z + 1);
      }, 1e3);
      b(J);
    } catch (N) {
      console.error("❌ Error accessing microphone:", N);
      const I = N;
      I.name === "NotAllowedError" ? alert("Microphone permission denied. Please allow microphone access and try again.") : I.name === "NotFoundError" ? alert("No microphone found. Please connect a microphone and try again.") : alert(`Could not access microphone: ${I.message || "Unknown error"}`);
    }
  }, We = () => {
    ie && ie.state === "recording" && ie.stop(), ae(!1), ce(null), Ce && (clearInterval(Ce), b(null));
  }, Tt = () => {
    ie && ie.state === "recording" && (ie.onstop = null, ie.stop(), ie.stream && ie.stream.getTracks().forEach((N) => N.stop())), ae(!1), ce(null), Ce && (clearInterval(Ce), b(null)), pe(0);
  }, At = (N) => {
    const I = Math.floor(N / 60), _ = N % 60;
    return `${I}:${_.toString().padStart(2, "0")}`;
  }, Ye = async (N) => {
    const I = () => `${Date.now()}-${Math.random()}`, _ = (B) => B.type.startsWith("image/") ? "image" : B.type.startsWith("video/") ? "video" : B.type.startsWith("audio/") ? "audio" : "document";
    return {
      file: N,
      id: I(),
      type: _(N),
      url: URL.createObjectURL(N),
      name: N.name,
      size: N.size
    };
  }, Rt = be((N) => {
    const I = N.name.trim().split(/\s+/).filter((Pe) => Pe.length > 0), _ = I.length > 0 ? I[0] : "", B = I.length > 1 ? I.slice(1).join(" ") : "";
    N.email.trim(), N.phone.trim();
    const J = (/* @__PURE__ */ new Date()).toISOString().split("T")[0], z = `${te}|${_}|${B}|${J}|website`;
    x(N), $e(z), localStorage.setItem("n8n_user_info", JSON.stringify(N)), localStorage.setItem("n8n_session_id", z), j(!1);
  }, [te]), ut = be(() => {
    m((N) => {
      const I = !N;
      return !I && r && r(), I;
    });
  }, [r]), st = be(async (N) => {
    if (sessionStorage.setItem("n8n-chat-popup-shown", "true"), ee(!1), !f) {
      $(!0), e.showTypingIndicator && l(!0);
      try {
        const I = {
          id: R(),
          type: "user",
          content: N,
          timestamp: /* @__PURE__ */ new Date()
        };
        i((J) => [...J, I]), t == null || t(I);
        const _ = await ue(N), B = {
          id: R(),
          type: "bot",
          content: _.content,
          timestamp: /* @__PURE__ */ new Date(),
          suggestions: _.suggestions
        };
        i((J) => [...J, B]), t == null || t(B), p.enableMessageSuggestions && _.suggestions && _.suggestions.length > 0 && (v(_.suggestions.slice(0, p.maxSuggestions)), ee(!0));
      } catch (I) {
        const _ = {
          id: R(),
          type: "bot",
          content: "Sorry, I encountered an error. Please try again.",
          timestamp: /* @__PURE__ */ new Date()
        };
        i((B) => [...B, _]), n == null || n(I);
      } finally {
        $(!1), l(!1);
      }
    }
  }, [f, e, t, n, p.enableMessageSuggestions, p.maxSuggestions]), jt = p.position !== "inline" && p.showToggleButton, De = ge && /* @__PURE__ */ c.jsx("div", { className: "camera-modal", children: /* @__PURE__ */ c.jsxs("div", { className: "camera-container", children: [
    /* @__PURE__ */ c.jsx("video", { ref: G, autoPlay: !0, playsInline: !0, className: "camera-video" }),
    /* @__PURE__ */ c.jsx("canvas", { ref: D, style: { display: "none" } }),
    /* @__PURE__ */ c.jsxs("div", { className: "camera-controls", children: [
      /* @__PURE__ */ c.jsx("button", { onClick: Ge, className: "capture-button", children: /* @__PURE__ */ c.jsx(Fi, { size: 24 }) }),
      /* @__PURE__ */ c.jsx("button", { onClick: ot, className: "close-camera-button", children: /* @__PURE__ */ c.jsx(mt, { size: 20 }) })
    ] })
  ] }) });
  return jt ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    De,
    /* @__PURE__ */ c.jsxs("div", { className: `chat-widget-container chat-widget-container--${p.position}${h ? "" : " chat-closed"}`, children: [
      /* @__PURE__ */ c.jsx(
        Ji,
        {
          isOpen: h,
          onClick: ut,
          position: p.position,
          primaryColor: p.colors.primary || "#007bff",
          popupMessage: p.popupMessage
        }
      ),
      h && /* @__PURE__ */ c.jsxs(
        "div",
        {
          ref: M,
          className: `chat-embed chat-embed--${p.theme} chat-embed--${p.position}${w.isMobile ? " chat-embed--mobile" : ""} chat-embed--open`,
          style: {
            "--chat-primary": p.colors.primary,
            "--chat-background": p.colors.background,
            "--chat-user-bubble": p.colors.userBubble,
            "--chat-bot-bubble": p.colors.botBubble,
            "--chat-text": p.colors.text,
            "--chat-font-family": p.fontFamily,
            "--chat-width": `${p.width}px`,
            "--chat-height": `${p.height}px`,
            zIndex: p.zIndex
          },
          children: [
            /* @__PURE__ */ c.jsxs("div", { className: "chat-embed__header", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "chat-embed__header-content", children: [
                /* @__PURE__ */ c.jsx("h3", { className: "chat-embed__title", children: p.title }),
                p.subtitle && /* @__PURE__ */ c.jsx("p", { className: "chat-embed__subtitle", children: p.subtitle })
              ] }),
              p.position !== "inline" && /* @__PURE__ */ c.jsx(
                "button",
                {
                  className: "chat-embed__close-button",
                  onClick: ut,
                  "aria-label": "Close chat",
                  children: /* @__PURE__ */ c.jsx(mt, { size: 18 })
                }
              )
            ] }),
            p.enableUserInfo && T ? /* @__PURE__ */ c.jsx(
              ha,
              {
                onSubmit: Rt,
                isLoading: !1,
                requiredFields: p.userInfoRequiredFields || []
              }
            ) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
              /* @__PURE__ */ c.jsxs("div", { className: "chat-embed__messages", children: [
                a.map((N) => /* @__PURE__ */ c.jsx(
                  qn,
                  {
                    message: N,
                    showTimestamp: p.showTimestamps
                  },
                  N.id
                )),
                /* @__PURE__ */ c.jsx(Xn, { visible: s }),
                /* @__PURE__ */ c.jsx("div", { ref: U })
              ] }),
              /* @__PURE__ */ c.jsxs("div", { className: "chat-embed__input-area", children: [
                p.enableMessageSuggestions && V && L.length > 0 && /* @__PURE__ */ c.jsx(
                  ga,
                  {
                    suggestions: L.map((N, I) => ({
                      id: `suggestion-${I}`,
                      text: N,
                      type: a.length === 0 ? "starter" : "followup"
                    })),
                    visible: V,
                    onSuggestionClick: st,
                    maxVisible: p.maxSuggestions
                  }
                ),
                P.length > 0 && /* @__PURE__ */ c.jsx(
                  Jn,
                  {
                    files: P,
                    onRemoveFile: Ae
                  }
                ),
                /* @__PURE__ */ c.jsx("div", { className: `chat-embed__input-row ${re ? "chat-embed__input-row--recording" : ""}`, children: re ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                  /* @__PURE__ */ c.jsx(
                    "button",
                    {
                      onClick: Tt,
                      className: "upload-button",
                      title: "Stop and discard recording",
                      disabled: f,
                      children: /* @__PURE__ */ c.jsx(zn, { size: 18 })
                    }
                  ),
                  /* @__PURE__ */ c.jsxs("div", { className: "recording-time-display", children: [
                    /* @__PURE__ */ c.jsx("div", { className: "recording-indicator" }),
                    At(fe)
                  ] }),
                  /* @__PURE__ */ c.jsx(
                    "button",
                    {
                      className: "chat-embed__send-button",
                      onClick: We,
                      disabled: f,
                      title: "Stop recording and send",
                      children: /* @__PURE__ */ c.jsx(pt, { size: 18, className: "chat-embed__send-icon" })
                    }
                  )
                ] }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                  p.enableFileUpload && /* @__PURE__ */ c.jsx(
                    Zn,
                    {
                      onFilesSelected: Te,
                      maxFiles: p.maxFiles,
                      maxFileSize: p.maxFileSize,
                      allowedTypes: p.allowedFileTypes
                    }
                  ),
                  /* @__PURE__ */ c.jsx(
                    "textarea",
                    {
                      ref: k,
                      className: "chat-embed__input",
                      value: o,
                      onChange: (N) => d(N.target.value),
                      onKeyPress: me,
                      placeholder: p.placeholder,
                      disabled: f,
                      rows: 1,
                      style: { resize: "none" }
                    }
                  ),
                  o.trim() || P.length > 0 ? /* @__PURE__ */ c.jsx(
                    "button",
                    {
                      className: "chat-embed__send-button",
                      onClick: S,
                      disabled: f || !o.trim() && P.length === 0,
                      children: f ? /* @__PURE__ */ c.jsx("div", { className: "chat-embed__loading-spinner" }) : /* @__PURE__ */ c.jsx(pt, { size: 18, className: "chat-embed__send-icon" })
                    }
                  ) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                    p.enableCamera && !1,
                    p.enableAudio && /* @__PURE__ */ c.jsx(
                      "button",
                      {
                        onClick: dt,
                        className: "upload-button",
                        title: "Record audio",
                        disabled: f,
                        children: /* @__PURE__ */ c.jsx(Yn, { size: 18 })
                      }
                    )
                  ] })
                ] }) })
              ] })
            ] })
          ]
        }
      )
    ] })
  ] }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    De,
    /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: M,
        className: `chat-embed chat-embed--${p.theme} chat-embed--${p.position}${w.isMobile ? " chat-embed--mobile" : ""}`,
        style: {
          "--chat-primary": p.colors.primary,
          "--chat-background": p.colors.background,
          "--chat-user-bubble": p.colors.userBubble,
          "--chat-bot-bubble": p.colors.botBubble,
          "--chat-text": p.colors.text,
          "--chat-font-family": p.fontFamily,
          "--chat-width": `${p.width}px`,
          "--chat-height": `${p.height}px`,
          zIndex: p.zIndex
        },
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "chat-embed__header", children: [
            /* @__PURE__ */ c.jsxs("div", { className: "chat-embed__header-content", children: [
              /* @__PURE__ */ c.jsx("h3", { className: "chat-embed__title", children: p.title }),
              p.subtitle && /* @__PURE__ */ c.jsx("p", { className: "chat-embed__subtitle", children: p.subtitle })
            ] }),
            p.position !== "inline" && /* @__PURE__ */ c.jsx(
              "button",
              {
                className: "chat-embed__close-button",
                onClick: ut,
                "aria-label": "Close chat",
                children: /* @__PURE__ */ c.jsx(mt, { size: 18 })
              }
            )
          ] }),
          p.enableUserInfo && T ? /* @__PURE__ */ c.jsx(
            ha,
            {
              onSubmit: Rt,
              isLoading: !1,
              requiredFields: p.userInfoRequiredFields || []
            }
          ) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
            /* @__PURE__ */ c.jsxs("div", { className: "chat-embed__messages", children: [
              a.map((N) => /* @__PURE__ */ c.jsx(
                qn,
                {
                  message: N,
                  showTimestamp: p.showTimestamps
                },
                N.id
              )),
              /* @__PURE__ */ c.jsx(Xn, { visible: s }),
              /* @__PURE__ */ c.jsx("div", { ref: U })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "chat-embed__input-area", children: [
              p.enableMessageSuggestions && V && L.length > 0 && /* @__PURE__ */ c.jsx(
                ga,
                {
                  suggestions: L.map((N, I) => ({
                    id: `suggestion-${I}`,
                    text: N,
                    type: a.length === 0 ? "starter" : "followup"
                  })),
                  visible: V,
                  onSuggestionClick: st,
                  maxVisible: p.maxSuggestions
                }
              ),
              P.length > 0 && /* @__PURE__ */ c.jsx(
                Jn,
                {
                  files: P,
                  onRemoveFile: Ae
                }
              ),
              /* @__PURE__ */ c.jsx("div", { className: `chat-embed__input-row ${re ? "chat-embed__input-row--recording" : ""}`, children: re ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                /* @__PURE__ */ c.jsx(
                  "button",
                  {
                    onClick: Tt,
                    className: "upload-button",
                    title: "Stop and discard recording",
                    disabled: f,
                    children: /* @__PURE__ */ c.jsx(zn, { size: 18 })
                  }
                ),
                /* @__PURE__ */ c.jsxs("div", { className: "recording-time-display", children: [
                  /* @__PURE__ */ c.jsx("div", { className: "recording-indicator" }),
                  At(fe)
                ] }),
                /* @__PURE__ */ c.jsx(
                  "button",
                  {
                    className: "chat-embed__send-button",
                    onClick: We,
                    disabled: f,
                    title: "Stop recording and send",
                    children: /* @__PURE__ */ c.jsx(pt, { size: 18, className: "chat-embed__send-icon" })
                  }
                )
              ] }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                p.enableFileUpload && /* @__PURE__ */ c.jsx(
                  Zn,
                  {
                    onFilesSelected: Te,
                    maxFiles: p.maxFiles,
                    maxFileSize: p.maxFileSize,
                    allowedTypes: p.allowedFileTypes
                  }
                ),
                /* @__PURE__ */ c.jsx(
                  "textarea",
                  {
                    ref: k,
                    className: "chat-embed__input",
                    value: o,
                    onChange: (N) => d(N.target.value),
                    onKeyPress: me,
                    placeholder: p.placeholder,
                    disabled: f,
                    rows: 1,
                    style: { resize: "none" }
                  }
                ),
                o.trim() || P.length > 0 ? /* @__PURE__ */ c.jsx(
                  "button",
                  {
                    className: "chat-embed__send-button",
                    onClick: S,
                    disabled: f || !o.trim() && P.length === 0,
                    children: f ? /* @__PURE__ */ c.jsx("div", { className: "chat-embed__loading-spinner" }) : /* @__PURE__ */ c.jsx(pt, { size: 18, className: "chat-embed__send-icon" })
                  }
                ) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                  p.enableCamera && !1,
                  p.enableAudio && /* @__PURE__ */ c.jsx(
                    "button",
                    {
                      onClick: dt,
                      className: "upload-button",
                      title: "Record audio",
                      disabled: f,
                      children: /* @__PURE__ */ c.jsx(Yn, { size: 18 })
                    }
                  )
                ] })
              ] }) })
            ] })
          ] })
        ]
      }
    )
  ] });
};
export {
  Tc as ChatEmbed,
  qn as MessageBubble,
  Xn as TypingIndicator,
  ha as UserInfoForm,
  _c as useDeviceDetection
};
