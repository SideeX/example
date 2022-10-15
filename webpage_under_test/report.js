var e,
    t,
    n,
    r,
    l,
    a,
    o,
    i = Object.defineProperty,
    s = Object.defineProperties,
    u = Object.getOwnPropertyDescriptors,
    c = Object.getOwnPropertySymbols,
    f = Object.prototype.hasOwnProperty,
    d = Object.prototype.propertyIsEnumerable,
    m = (e, t, n) =>
        t in e
            ? i(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
              })
            : (e[t] = n),
    p = (e, t) => {
        for (var n in t || (t = {})) f.call(t, n) && m(e, n, t[n]);
        if (c) for (var n of c(t)) d.call(t, n) && m(e, n, t[n]);
        return e;
    },
    h = {},
    v = [],
    _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function g(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
}
function w(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
}
function y(t, n, r) {
    var l,
        a,
        o,
        i = {};
    for (o in n)
        "key" == o ? (l = n[o]) : "ref" == o ? (a = n[o]) : (i[o] = n[o]);
    if (
        (arguments.length > 2 &&
            (i.children = arguments.length > 3 ? e.call(arguments, 2) : r),
        "function" == typeof t && null != t.defaultProps)
    )
        for (o in t.defaultProps) void 0 === i[o] && (i[o] = t.defaultProps[o]);
    return b(t, i, l, a, null);
}
function b(e, r, l, a, o) {
    var i = {
        type: e,
        props: r,
        key: l,
        ref: a,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == o ? ++n : o,
    };
    return null == o && null != t.vnode && t.vnode(i), i;
}
function E() {
    return { current: null };
}
function x(e) {
    return e.children;
}
function k(e, t) {
    (this.props = e), (this.context = t);
}
function S(e, t) {
    if (null == t) return e.__ ? S(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? S(e) : null;
}
function A(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e;
                break;
            }
        return A(e);
    }
}
function C(e) {
    ((!e.__d && (e.__d = !0) && r.push(e) && !N.__r++) ||
        a !== t.debounceRendering) &&
        ((a = t.debounceRendering) || l)(N);
}
function N() {
    for (var e; (N.__r = r.length); )
        (e = r.sort(function (e, t) {
            return e.__v.__b - t.__v.__b;
        })),
            (r = []),
            e.some(function (e) {
                var t, n, r, l, a, o;
                e.__d &&
                    ((a = (l = (t = e).__v).__e),
                    (o = t.__P) &&
                        ((n = []),
                        ((r = g({}, l)).__v = l.__v + 1),
                        R(
                            o,
                            l,
                            r,
                            t.__n,
                            void 0 !== o.ownerSVGElement,
                            null != l.__h ? [a] : null,
                            n,
                            null == a ? S(l) : a,
                            l.__h
                        ),
                        U(n, l),
                        l.__e != a && A(l)));
            });
}
function O(e, t, n, r, l, a, o, i, s, u) {
    var c,
        f,
        d,
        m,
        p,
        _,
        g,
        w = (r && r.__k) || v,
        y = w.length;
    for (n.__k = [], c = 0; c < t.length; c++)
        if (
            null !=
            (m = n.__k[c] =
                null == (m = t[c]) || "boolean" == typeof m
                    ? null
                    : "string" == typeof m ||
                      "number" == typeof m ||
                      "bigint" == typeof m
                    ? b(null, m, null, null, m)
                    : Array.isArray(m)
                    ? b(x, { children: m }, null, null, null)
                    : m.__b > 0
                    ? b(m.type, m.props, m.key, null, m.__v)
                    : m)
        ) {
            if (
                ((m.__ = n),
                (m.__b = n.__b + 1),
                null === (d = w[c]) ||
                    (d && m.key == d.key && m.type === d.type))
            )
                w[c] = void 0;
            else
                for (f = 0; f < y; f++) {
                    if ((d = w[f]) && m.key == d.key && m.type === d.type) {
                        w[f] = void 0;
                        break;
                    }
                    d = null;
                }
            R(e, m, (d = d || h), l, a, o, i, s, u),
                (p = m.__e),
                (f = m.ref) &&
                    d.ref != f &&
                    (g || (g = []),
                    d.ref && g.push(d.ref, null, m),
                    g.push(f, m.__c || p, m)),
                null != p
                    ? (null == _ && (_ = p),
                      "function" == typeof m.type && m.__k === d.__k
                          ? (m.__d = s = M(m, s, e))
                          : (s = T(e, m, d, w, p, s)),
                      "function" == typeof n.type && (n.__d = s))
                    : s && d.__e == s && s.parentNode != e && (s = S(d));
        }
    for (n.__e = _, c = y; c--; )
        null != w[c] &&
            ("function" == typeof n.type &&
                null != w[c].__e &&
                w[c].__e == n.__d &&
                (n.__d = S(r, c + 1)),
            F(w[c], w[c]));
    if (g) for (c = 0; c < g.length; c++) H(g[c], g[++c], g[++c]);
}
function M(e, t, n) {
    for (var r, l = e.__k, a = 0; l && a < l.length; a++)
        (r = l[a]) &&
            ((r.__ = e),
            (t =
                "function" == typeof r.type
                    ? M(r, t, n)
                    : T(n, r, r, l, r.__e, t)));
    return t;
}
function P(e, t) {
    return (
        (t = t || []),
        null == e ||
            "boolean" == typeof e ||
            (Array.isArray(e)
                ? e.some(function (e) {
                      P(e, t);
                  })
                : t.push(e)),
        t
    );
}
function T(e, t, n, r, l, a) {
    var o, i, s;
    if (void 0 !== t.__d) (o = t.__d), (t.__d = void 0);
    else if (null == n || l != a || null == l.parentNode)
        e: if (null == a || a.parentNode !== e) e.appendChild(l), (o = null);
        else {
            for (i = a, s = 0; (i = i.nextSibling) && s < r.length; s += 2)
                if (i == l) break e;
            e.insertBefore(l, a), (o = a);
        }
    return void 0 !== o ? o : l.nextSibling;
}
function D(e, t, n) {
    "-" === t[0]
        ? e.setProperty(t, n)
        : (e[t] =
              null == n
                  ? ""
                  : "number" != typeof n || _.test(t)
                  ? n
                  : n + "px");
}
function I(e, t, n, r, l) {
    var a;
    e: if ("style" === t)
        if ("string" == typeof n) e.style.cssText = n;
        else {
            if (("string" == typeof r && (e.style.cssText = r = ""), r))
                for (t in r) (n && t in n) || D(e.style, t, "");
            if (n) for (t in n) (r && n[t] === r[t]) || D(e.style, t, n[t]);
        }
    else if ("o" === t[0] && "n" === t[1])
        (a = t !== (t = t.replace(/Capture$/, ""))),
            (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + a] = n),
            n
                ? r || e.addEventListener(t, a ? L : j, a)
                : e.removeEventListener(t, a ? L : j, a);
    else if ("dangerouslySetInnerHTML" !== t) {
        if (l) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (
            "href" !== t &&
            "list" !== t &&
            "form" !== t &&
            "tabIndex" !== t &&
            "download" !== t &&
            t in e
        )
            try {
                e[t] = null == n ? "" : n;
                break e;
            } catch (o) {}
        "function" == typeof n ||
            (null != n && (!1 !== n || ("a" === t[0] && "r" === t[1]))
                ? e.setAttribute(t, n)
                : e.removeAttribute(t));
    }
}
function j(e) {
    this.l[e.type + !1](t.event ? t.event(e) : e);
}
function L(e) {
    this.l[e.type + !0](t.event ? t.event(e) : e);
}
function R(n, r, l, a, o, i, s, u, c) {
    var f,
        d,
        m,
        p,
        v,
        _,
        y,
        b,
        E,
        A,
        C,
        N = r.type;
    if (void 0 !== r.constructor) return null;
    null != l.__h &&
        ((c = l.__h), (u = r.__e = l.__e), (r.__h = null), (i = [u])),
        (f = t.__b) && f(r);
    try {
        e: if ("function" == typeof N) {
            if (
                ((b = r.props),
                (E = (f = N.contextType) && a[f.__c]),
                (A = f ? (E ? E.props.value : f.__) : a),
                l.__c
                    ? (y = (d = r.__c = l.__c).__ = d.__E)
                    : ("prototype" in N && N.prototype.render
                          ? (r.__c = d = new N(b, A))
                          : ((r.__c = d = new k(b, A)),
                            (d.constructor = N),
                            (d.render = z)),
                      E && E.sub(d),
                      (d.props = b),
                      d.state || (d.state = {}),
                      (d.context = A),
                      (d.__n = a),
                      (m = d.__d = !0),
                      (d.__h = [])),
                null == d.__s && (d.__s = d.state),
                null != N.getDerivedStateFromProps &&
                    (d.__s == d.state && (d.__s = g({}, d.__s)),
                    g(d.__s, N.getDerivedStateFromProps(b, d.__s))),
                (p = d.props),
                (v = d.state),
                m)
            )
                null == N.getDerivedStateFromProps &&
                    null != d.componentWillMount &&
                    d.componentWillMount(),
                    null != d.componentDidMount &&
                        d.__h.push(d.componentDidMount);
            else {
                if (
                    (null == N.getDerivedStateFromProps &&
                        b !== p &&
                        null != d.componentWillReceiveProps &&
                        d.componentWillReceiveProps(b, A),
                    (!d.__e &&
                        null != d.shouldComponentUpdate &&
                        !1 === d.shouldComponentUpdate(b, d.__s, A)) ||
                        r.__v === l.__v)
                ) {
                    (d.props = b),
                        (d.state = d.__s),
                        r.__v !== l.__v && (d.__d = !1),
                        (d.__v = r),
                        (r.__e = l.__e),
                        (r.__k = l.__k),
                        r.__k.forEach(function (e) {
                            e && (e.__ = r);
                        }),
                        d.__h.length && s.push(d);
                    break e;
                }
                null != d.componentWillUpdate &&
                    d.componentWillUpdate(b, d.__s, A),
                    null != d.componentDidUpdate &&
                        d.__h.push(function () {
                            d.componentDidUpdate(p, v, _);
                        });
            }
            (d.context = A),
                (d.props = b),
                (d.state = d.__s),
                (f = t.__r) && f(r),
                (d.__d = !1),
                (d.__v = r),
                (d.__P = n),
                (f = d.render(d.props, d.state, d.context)),
                (d.state = d.__s),
                null != d.getChildContext &&
                    (a = g(g({}, a), d.getChildContext())),
                m ||
                    null == d.getSnapshotBeforeUpdate ||
                    (_ = d.getSnapshotBeforeUpdate(p, v)),
                (C =
                    null != f && f.type === x && null == f.key
                        ? f.props.children
                        : f),
                O(n, Array.isArray(C) ? C : [C], r, l, a, o, i, s, u, c),
                (d.base = r.__e),
                (r.__h = null),
                d.__h.length && s.push(d),
                y && (d.__E = d.__ = null),
                (d.__e = !1);
        } else
            null == i && r.__v === l.__v
                ? ((r.__k = l.__k), (r.__e = l.__e))
                : (r.__e = (function (t, n, r, l, a, o, i, s) {
                      var u,
                          c,
                          f,
                          d = r.props,
                          m = n.props,
                          p = n.type,
                          v = 0;
                      if (("svg" === p && (a = !0), null != o))
                          for (; v < o.length; v++)
                              if (
                                  (u = o[v]) &&
                                  "setAttribute" in u == !!p &&
                                  (p ? u.localName === p : 3 === u.nodeType)
                              ) {
                                  (t = u), (o[v] = null);
                                  break;
                              }
                      if (null == t) {
                          if (null === p) return document.createTextNode(m);
                          (t = a
                              ? document.createElementNS(
                                    "http://www.w3.org/2000/svg",
                                    p
                                )
                              : document.createElement(p, m.is && m)),
                              (o = null),
                              (s = !1);
                      }
                      if (null === p)
                          d === m || (s && t.data === m) || (t.data = m);
                      else {
                          if (
                              ((o = o && e.call(t.childNodes)),
                              (c = (d = r.props || h).dangerouslySetInnerHTML),
                              (f = m.dangerouslySetInnerHTML),
                              !s)
                          ) {
                              if (null != o)
                                  for (
                                      d = {}, v = 0;
                                      v < t.attributes.length;
                                      v++
                                  )
                                      d[t.attributes[v].name] =
                                          t.attributes[v].value;
                              (f || c) &&
                                  ((f &&
                                      ((c && f.__html == c.__html) ||
                                          f.__html === t.innerHTML)) ||
                                      (t.innerHTML = (f && f.__html) || ""));
                          }
                          if (
                              ((function (e, t, n, r, l) {
                                  var a;
                                  for (a in n)
                                      "children" === a ||
                                          "key" === a ||
                                          a in t ||
                                          I(e, a, null, n[a], r);
                                  for (a in t)
                                      (l && "function" != typeof t[a]) ||
                                          "children" === a ||
                                          "key" === a ||
                                          "value" === a ||
                                          "checked" === a ||
                                          n[a] === t[a] ||
                                          I(e, a, t[a], n[a], r);
                              })(t, m, d, a, s),
                              f)
                          )
                              n.__k = [];
                          else if (
                              ((v = n.props.children),
                              O(
                                  t,
                                  Array.isArray(v) ? v : [v],
                                  n,
                                  r,
                                  l,
                                  a && "foreignObject" !== p,
                                  o,
                                  i,
                                  o ? o[0] : r.__k && S(r, 0),
                                  s
                              ),
                              null != o)
                          )
                              for (v = o.length; v--; ) null != o[v] && w(o[v]);
                          s ||
                              ("value" in m &&
                                  void 0 !== (v = m.value) &&
                                  (v !== d.value ||
                                      v !== t.value ||
                                      ("progress" === p && !v)) &&
                                  I(t, "value", v, d.value, !1),
                              "checked" in m &&
                                  void 0 !== (v = m.checked) &&
                                  v !== t.checked &&
                                  I(t, "checked", v, d.checked, !1));
                      }
                      return t;
                  })(l.__e, r, l, a, o, i, s, c));
        (f = t.diffed) && f(r);
    } catch (M) {
        (r.__v = null),
            (c || null != i) &&
                ((r.__e = u), (r.__h = !!c), (i[i.indexOf(u)] = null)),
            t.__e(M, r, l);
    }
}
function U(e, n) {
    t.__c && t.__c(n, e),
        e.some(function (n) {
            try {
                (e = n.__h),
                    (n.__h = []),
                    e.some(function (e) {
                        e.call(n);
                    });
            } catch (r) {
                t.__e(r, n.__v);
            }
        });
}
function H(e, n, r) {
    try {
        "function" == typeof e ? e(n) : (e.current = n);
    } catch (l) {
        t.__e(l, r);
    }
}
function F(e, n, r) {
    var l, a;
    if (
        (t.unmount && t.unmount(e),
        (l = e.ref) && ((l.current && l.current !== e.__e) || H(l, null, n)),
        null != (l = e.__c))
    ) {
        if (l.componentWillUnmount)
            try {
                l.componentWillUnmount();
            } catch (o) {
                t.__e(o, n);
            }
        l.base = l.__P = null;
    }
    if ((l = e.__k))
        for (a = 0; a < l.length; a++)
            l[a] && F(l[a], n, "function" != typeof e.type);
    r || null == e.__e || w(e.__e), (e.__e = e.__d = void 0);
}
function z(e, t, n) {
    return this.constructor(e, n);
}
function B(n, r, l) {
    var a, o, i;
    t.__ && t.__(n, r),
        (o = (a = "function" == typeof l) ? null : (l && l.__k) || r.__k),
        (i = []),
        R(
            r,
            (n = ((!a && l) || r).__k = y(x, null, [n])),
            o || h,
            h,
            void 0 !== r.ownerSVGElement,
            !a && l
                ? [l]
                : o
                ? null
                : r.firstChild
                ? e.call(r.childNodes)
                : null,
            i,
            !a && l ? l : o ? o.__e : r.firstChild,
            a
        ),
        U(i, n);
}
function W(e, t) {
    B(e, t, W);
}
function V(t, n, r) {
    var l,
        a,
        o,
        i = g({}, t.props);
    for (o in n)
        "key" == o ? (l = n[o]) : "ref" == o ? (a = n[o]) : (i[o] = n[o]);
    return (
        arguments.length > 2 &&
            (i.children = arguments.length > 3 ? e.call(arguments, 2) : r),
        b(t.type, i, l || t.key, a || t.ref, null)
    );
}
function Y(e, t) {
    var n = {
        __c: (t = "__cC" + o++),
        __: e,
        Consumer: function (e, t) {
            return e.children(t);
        },
        Provider: function (e) {
            var n, r;
            return (
                this.getChildContext ||
                    ((n = []),
                    ((r = {})[t] = this),
                    (this.getChildContext = function () {
                        return r;
                    }),
                    (this.shouldComponentUpdate = function (e) {
                        this.props.value !== e.value && n.some(C);
                    }),
                    (this.sub = function (e) {
                        n.push(e);
                        var t = e.componentWillUnmount;
                        e.componentWillUnmount = function () {
                            n.splice(n.indexOf(e), 1), t && t.call(e);
                        };
                    })),
                e.children
            );
        },
    };
    return (n.Provider.__ = n.Consumer.contextType = n);
}
(e = v.slice),
    (t = {
        __e: function (e, t) {
            for (var n, r, l; (t = t.__); )
                if ((n = t.__c) && !n.__)
                    try {
                        if (
                            ((r = n.constructor) &&
                                null != r.getDerivedStateFromError &&
                                (n.setState(r.getDerivedStateFromError(e)),
                                (l = n.__d)),
                            null != n.componentDidCatch &&
                                (n.componentDidCatch(e), (l = n.__d)),
                            l)
                        )
                            return (n.__E = n);
                    } catch (a) {
                        e = a;
                    }
            throw e;
        },
    }),
    (n = 0),
    (k.prototype.setState = function (e, t) {
        var n;
        (n =
            null != this.__s && this.__s !== this.state
                ? this.__s
                : (this.__s = g({}, this.state))),
            "function" == typeof e && (e = e(g({}, n), this.props)),
            e && g(n, e),
            null != e && this.__v && (t && this.__h.push(t), C(this));
    }),
    (k.prototype.forceUpdate = function (e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), C(this));
    }),
    (k.prototype.render = x),
    (r = []),
    (l =
        "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
    (N.__r = 0),
    (o = 0);
var G,
    Z,
    q,
    K = 0,
    X = [],
    Q = t.__b,
    $ = t.__r,
    J = t.diffed,
    ee = t.__c,
    te = t.unmount;
function ne(e, n) {
    t.__h && t.__h(Z, e, K || n), (K = 0);
    var r = Z.__H || (Z.__H = { __: [], __h: [] });
    return e >= r.__.length && r.__.push({}), r.__[e];
}
function re(e) {
    return (K = 1), le(ge, e);
}
function le(e, t, n) {
    var r = ne(G++, 2);
    return (
        (r.t = e),
        r.__c ||
            ((r.__ = [
                n ? n(t) : ge(void 0, t),
                function (e) {
                    var t = r.t(r.__[0], e);
                    r.__[0] !== t &&
                        ((r.__ = [t, r.__[1]]), r.__c.setState({}));
                },
            ]),
            (r.__c = Z)),
        r.__
    );
}
function ae(e, n) {
    var r = ne(G++, 3);
    !t.__s && _e(r.__H, n) && ((r.__ = e), (r.__H = n), Z.__H.__h.push(r));
}
function oe(e, n) {
    var r = ne(G++, 4);
    !t.__s && _e(r.__H, n) && ((r.__ = e), (r.__H = n), Z.__h.push(r));
}
function ie(e) {
    return (
        (K = 5),
        ue(function () {
            return { current: e };
        }, [])
    );
}
function se(e, t, n) {
    (K = 6),
        oe(
            function () {
                "function" == typeof e ? e(t()) : e && (e.current = t());
            },
            null == n ? n : n.concat(e)
        );
}
function ue(e, t) {
    var n = ne(G++, 7);
    return _e(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
}
function ce(e, t) {
    return (
        (K = 8),
        ue(function () {
            return e;
        }, t)
    );
}
function fe(e) {
    var t = Z.context[e.__c],
        n = ne(G++, 9);
    return (
        (n.c = e),
        t ? (null == n.__ && ((n.__ = !0), t.sub(Z)), t.props.value) : e.__
    );
}
function de(e, n) {
    t.useDebugValue && t.useDebugValue(n ? n(e) : e);
}
function me() {
    for (var e; (e = X.shift()); )
        if (e.__P)
            try {
                e.__H.__h.forEach(he), e.__H.__h.forEach(ve), (e.__H.__h = []);
            } catch (n) {
                (e.__H.__h = []), t.__e(n, e.__v);
            }
}
(t.__b = function (e) {
    (Z = null), Q && Q(e);
}),
    (t.__r = function (e) {
        $ && $(e), (G = 0);
        var t = (Z = e.__c).__H;
        t && (t.__h.forEach(he), t.__h.forEach(ve), (t.__h = []));
    }),
    (t.diffed = function (e) {
        J && J(e);
        var n = e.__c;
        n &&
            n.__H &&
            n.__H.__h.length &&
            ((1 !== X.push(n) && q === t.requestAnimationFrame) ||
                (
                    (q = t.requestAnimationFrame) ||
                    function (e) {
                        var t,
                            n = function () {
                                clearTimeout(r),
                                    pe && cancelAnimationFrame(t),
                                    setTimeout(e);
                            },
                            r = setTimeout(n, 100);
                        pe && (t = requestAnimationFrame(n));
                    }
                )(me)),
            (Z = null);
    }),
    (t.__c = function (e, n) {
        n.some(function (e) {
            try {
                e.__h.forEach(he),
                    (e.__h = e.__h.filter(function (e) {
                        return !e.__ || ve(e);
                    }));
            } catch (r) {
                n.some(function (e) {
                    e.__h && (e.__h = []);
                }),
                    (n = []),
                    t.__e(r, e.__v);
            }
        }),
            ee && ee(e, n);
    }),
    (t.unmount = function (e) {
        te && te(e);
        var n,
            r = e.__c;
        r &&
            r.__H &&
            (r.__H.__.forEach(function (e) {
                try {
                    he(e);
                } catch (t) {
                    n = t;
                }
            }),
            n && t.__e(n, r.__v));
    });
var pe = "function" == typeof requestAnimationFrame;
function he(e) {
    var t = Z,
        n = e.__c;
    "function" == typeof n && ((e.__c = void 0), n()), (Z = t);
}
function ve(e) {
    var t = Z;
    (e.__c = e.__()), (Z = t);
}
function _e(e, t) {
    return (
        !e ||
        e.length !== t.length ||
        t.some(function (t, n) {
            return t !== e[n];
        })
    );
}
function ge(e, t) {
    return "function" == typeof t ? t(e) : t;
}
function we(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
}
function ye(e, t) {
    for (var n in e) if ("__source" !== n && !(n in t)) return !0;
    for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
    return !1;
}
function be(e) {
    this.props = e;
}
function Ee(e, t) {
    function n(e) {
        var n = this.props.ref,
            r = n == e.ref;
        return (
            !r && n && (n.call ? n(null) : (n.current = null)),
            t ? !t(this.props, e) || !r : ye(this.props, e)
        );
    }
    function r(t) {
        return (this.shouldComponentUpdate = n), y(e, t);
    }
    return (
        (r.displayName = "Memo(" + (e.displayName || e.name) + ")"),
        (r.prototype.isReactComponent = !0),
        (r.__f = !0),
        r
    );
}
((be.prototype = new k()).isPureReactComponent = !0),
    (be.prototype.shouldComponentUpdate = function (e, t) {
        return ye(this.props, e) || ye(this.state, t);
    });
var xe = t.__b;
t.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
        xe && xe(e);
};
var ke =
    ("undefined" != typeof Symbol &&
        Symbol.for &&
        Symbol.for("react.forward_ref")) ||
    3911;
function Se(e) {
    function t(t, n) {
        var r = we({}, t);
        return (
            delete r.ref,
            e(
                r,
                (n = t.ref || n) && ("object" != typeof n || "current" in n)
                    ? n
                    : null
            )
        );
    }
    return (
        (t.$$typeof = ke),
        (t.render = t),
        (t.prototype.isReactComponent = t.__f = !0),
        (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
        t
    );
}
var Ae = function (e, t) {
        return null == e ? null : P(P(e).map(t));
    },
    Ce = {
        map: Ae,
        forEach: Ae,
        count: function (e) {
            return e ? P(e).length : 0;
        },
        only: function (e) {
            var t = P(e);
            if (1 !== t.length) throw "Children.only";
            return t[0];
        },
        toArray: P,
    },
    Ne = t.__e;
t.__e = function (e, t, n) {
    if (e.then)
        for (var r, l = t; (l = l.__); )
            if ((r = l.__c) && r.__c)
                return (
                    null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)),
                    r.__c(e, t)
                );
    Ne(e, t, n);
};
var Oe = t.unmount;
function Me() {
    (this.__u = 0), (this.t = null), (this.__b = null);
}
function Pe(e) {
    var t = e.__.__c;
    return t && t.__e && t.__e(e);
}
function Te(e) {
    var t, n, r;
    function l(l) {
        if (
            (t ||
                (t = e()).then(
                    function (e) {
                        n = e.default || e;
                    },
                    function (e) {
                        r = e;
                    }
                ),
            r)
        )
            throw r;
        if (!n) throw t;
        return y(n, l);
    }
    return (l.displayName = "Lazy"), (l.__f = !0), l;
}
function De() {
    (this.u = null), (this.o = null);
}
(t.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Oe && Oe(e);
}),
    ((Me.prototype = new k()).__c = function (e, t) {
        var n = t.__c,
            r = this;
        null == r.t && (r.t = []), r.t.push(n);
        var l = Pe(r.__v),
            a = !1,
            o = function () {
                a || ((a = !0), (n.__R = null), l ? l(i) : i());
            };
        n.__R = o;
        var i = function () {
                if (!--r.__u) {
                    if (r.state.__e) {
                        var e = r.state.__e;
                        r.__v.__k[0] = (function e(t, n, r) {
                            return (
                                t &&
                                    ((t.__v = null),
                                    (t.__k =
                                        t.__k &&
                                        t.__k.map(function (t) {
                                            return e(t, n, r);
                                        })),
                                    t.__c &&
                                        t.__c.__P === n &&
                                        (t.__e && r.insertBefore(t.__e, t.__d),
                                        (t.__c.__e = !0),
                                        (t.__c.__P = r))),
                                t
                            );
                        })(e, e.__c.__P, e.__c.__O);
                    }
                    var t;
                    for (r.setState({ __e: (r.__b = null) }); (t = r.t.pop()); )
                        t.forceUpdate();
                }
            },
            s = !0 === t.__h;
        r.__u++ || s || r.setState({ __e: (r.__b = r.__v.__k[0]) }),
            e.then(o, o);
    }),
    (Me.prototype.componentWillUnmount = function () {
        this.t = [];
    }),
    (Me.prototype.render = function (e, t) {
        if (this.__b) {
            if (this.__v.__k) {
                var n = document.createElement("div"),
                    r = this.__v.__k[0].__c;
                this.__v.__k[0] = (function e(t, n, r) {
                    return (
                        t &&
                            (t.__c &&
                                t.__c.__H &&
                                (t.__c.__H.__.forEach(function (e) {
                                    "function" == typeof e.__c && e.__c();
                                }),
                                (t.__c.__H = null)),
                            null != (t = we({}, t)).__c &&
                                (t.__c.__P === r && (t.__c.__P = n),
                                (t.__c = null)),
                            (t.__k =
                                t.__k &&
                                t.__k.map(function (t) {
                                    return e(t, n, r);
                                }))),
                        t
                    );
                })(this.__b, n, (r.__O = r.__P));
            }
            this.__b = null;
        }
        var l = t.__e && y(x, null, e.fallback);
        return l && (l.__h = null), [y(x, null, t.__e ? null : e.children), l];
    });
var Ie = function (e, t, n) {
    if (
        (++n[1] === n[0] && e.o.delete(t),
        e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
    )
        for (n = e.u; n; ) {
            for (; n.length > 3; ) n.pop()();
            if (n[1] < n[0]) break;
            e.u = n = n[2];
        }
};
function je(e) {
    return (
        (this.getChildContext = function () {
            return e.context;
        }),
        e.children
    );
}
function Le(e) {
    var t = this,
        n = e.i;
    (t.componentWillUnmount = function () {
        B(null, t.l), (t.l = null), (t.i = null);
    }),
        t.i && t.i !== n && t.componentWillUnmount(),
        e.__v
            ? (t.l ||
                  ((t.i = n),
                  (t.l = {
                      nodeType: 1,
                      parentNode: n,
                      childNodes: [],
                      appendChild: function (e) {
                          this.childNodes.push(e), t.i.appendChild(e);
                      },
                      insertBefore: function (e, n) {
                          this.childNodes.push(e), t.i.appendChild(e);
                      },
                      removeChild: function (e) {
                          this.childNodes.splice(
                              this.childNodes.indexOf(e) >>> 1,
                              1
                          ),
                              t.i.removeChild(e);
                      },
                  })),
              B(y(je, { context: t.context }, e.__v), t.l))
            : t.l && t.componentWillUnmount();
}
function Re(e, t) {
    return y(Le, { __v: e, i: t });
}
((De.prototype = new k()).__e = function (e) {
    var t = this,
        n = Pe(t.__v),
        r = t.o.get(e);
    return (
        r[0]++,
        function (l) {
            var a = function () {
                t.props.revealOrder ? (r.push(l), Ie(t, e, r)) : l();
            };
            n ? n(a) : a();
        }
    );
}),
    (De.prototype.render = function (e) {
        (this.u = null), (this.o = new Map());
        var t = P(e.children);
        e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
        for (var n = t.length; n--; )
            this.o.set(t[n], (this.u = [1, 0, this.u]));
        return e.children;
    }),
    (De.prototype.componentDidUpdate = De.prototype.componentDidMount =
        function () {
            var e = this;
            this.o.forEach(function (t, n) {
                Ie(e, n, t);
            });
        });
var Ue =
        ("undefined" != typeof Symbol &&
            Symbol.for &&
            Symbol.for("react.element")) ||
        60103,
    He =
        /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Fe = "undefined" != typeof document,
    ze = function (e) {
        return (
            "undefined" != typeof Symbol && "symbol" == typeof Symbol()
                ? /fil|che|rad/i
                : /fil|che|ra/i
        ).test(e);
    };
function Be(e, t, n) {
    return (
        null == t.__k && (t.textContent = ""),
        B(e, t),
        "function" == typeof n && n(),
        e ? e.__c : null
    );
}
function We(e, t, n) {
    return W(e, t), "function" == typeof n && n(), e ? e.__c : null;
}
(k.prototype.isReactComponent = {}),
    [
        "componentWillMount",
        "componentWillReceiveProps",
        "componentWillUpdate",
    ].forEach(function (e) {
        Object.defineProperty(k.prototype, e, {
            configurable: !0,
            get: function () {
                return this["UNSAFE_" + e];
            },
            set: function (t) {
                Object.defineProperty(this, e, {
                    configurable: !0,
                    writable: !0,
                    value: t,
                });
            },
        });
    });
var Ve = t.event;
function Ye() {}
function Ge() {
    return this.cancelBubble;
}
function Ze() {
    return this.defaultPrevented;
}
t.event = function (e) {
    return (
        Ve && (e = Ve(e)),
        (e.persist = Ye),
        (e.isPropagationStopped = Ge),
        (e.isDefaultPrevented = Ze),
        (e.nativeEvent = e)
    );
};
var qe,
    Ke = {
        configurable: !0,
        get: function () {
            return this.class;
        },
    },
    Xe = t.vnode;
t.vnode = function (e) {
    var t = e.type,
        n = e.props,
        r = n;
    if ("string" == typeof t) {
        var l = -1 === t.indexOf("-");
        for (var a in ((r = {}), n)) {
            var o = n[a];
            (Fe && "children" === a && "noscript" === t) ||
                ("value" === a && "defaultValue" in n && null == o) ||
                ("defaultValue" === a && "value" in n && null == n.value
                    ? (a = "value")
                    : "download" === a && !0 === o
                    ? (o = "")
                    : /ondoubleclick/i.test(a)
                    ? (a = "ondblclick")
                    : /^onchange(textarea|input)/i.test(a + t) && !ze(n.type)
                    ? (a = "oninput")
                    : /^onfocus$/i.test(a)
                    ? (a = "onfocusin")
                    : /^onblur$/i.test(a)
                    ? (a = "onfocusout")
                    : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(a)
                    ? (a = a.toLowerCase())
                    : l && He.test(a)
                    ? (a = a.replace(/[A-Z0-9]/, "-$&").toLowerCase())
                    : null === o && (o = void 0),
                (r[a] = o));
        }
        "select" == t &&
            r.multiple &&
            Array.isArray(r.value) &&
            (r.value = P(n.children).forEach(function (e) {
                e.props.selected = -1 != r.value.indexOf(e.props.value);
            })),
            "select" == t &&
                null != r.defaultValue &&
                (r.value = P(n.children).forEach(function (e) {
                    e.props.selected = r.multiple
                        ? -1 != r.defaultValue.indexOf(e.props.value)
                        : r.defaultValue == e.props.value;
                })),
            (e.props = r),
            n.class != n.className &&
                ((Ke.enumerable = "className" in n),
                null != n.className && (r.class = n.className),
                Object.defineProperty(r, "className", Ke));
    }
    (e.$$typeof = Ue), Xe && Xe(e);
};
var Qe = t.__r;
t.__r = function (e) {
    Qe && Qe(e), (qe = e.__c);
};
var $e = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function (e) {
                return qe.__n[e.__c].props.value;
            },
        },
    },
};
function Je(e) {
    return y.bind(null, e);
}
function et(e) {
    return !!e && e.$$typeof === Ue;
}
function tt(e) {
    return et(e) ? V.apply(null, arguments) : e;
}
function nt(e) {
    return !!e.__k && (B(null, e), !0);
}
function rt(e) {
    return (e && (e.base || (1 === e.nodeType && e))) || null;
}
var lt,
    at,
    ot,
    it,
    st = function (e, t) {
        return e(t);
    },
    ut = function (e, t) {
        return e(t);
    },
    ct = x,
    ft = {
        useState: re,
        useReducer: le,
        useEffect: ae,
        useLayoutEffect: oe,
        useRef: ie,
        useImperativeHandle: se,
        useMemo: ue,
        useCallback: ce,
        useContext: fe,
        useDebugValue: de,
        version: "17.0.2",
        Children: Ce,
        render: Be,
        hydrate: We,
        unmountComponentAtNode: nt,
        createPortal: Re,
        createElement: y,
        createContext: Y,
        createFactory: Je,
        cloneElement: tt,
        createRef: E,
        Fragment: x,
        isValidElement: et,
        findDOMNode: rt,
        Component: k,
        PureComponent: be,
        memo: Ee,
        forwardRef: Se,
        flushSync: ut,
        unstable_batchedUpdates: st,
        StrictMode: x,
        Suspense: Me,
        SuspenseList: De,
        lazy: Te,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: $e,
    },
    dt = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: ft,
        version: "17.0.2",
        Children: Ce,
        render: Be,
        hydrate: We,
        unmountComponentAtNode: nt,
        createPortal: Re,
        createFactory: Je,
        cloneElement: tt,
        isValidElement: et,
        findDOMNode: rt,
        PureComponent: be,
        memo: Ee,
        forwardRef: Se,
        flushSync: ut,
        unstable_batchedUpdates: st,
        StrictMode: ct,
        Suspense: Me,
        SuspenseList: De,
        lazy: Te,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: $e,
        createElement: y,
        createContext: Y,
        createRef: E,
        Fragment: x,
        Component: k,
        useState: re,
        useReducer: le,
        useEffect: ae,
        useLayoutEffect: oe,
        useRef: ie,
        useImperativeHandle: se,
        useMemo: ue,
        useCallback: ce,
        useContext: fe,
        useDebugValue: de,
        useErrorBoundary: function (e) {
            var t = ne(G++, 10),
                n = re();
            return (
                (t.__ = e),
                Z.componentDidCatch ||
                    (Z.componentDidCatch = function (e) {
                        t.__ && t.__(e), n[1](e);
                    }),
                [
                    n[0],
                    function () {
                        n[1](void 0);
                    },
                ]
            );
        },
    });
function mt() {
    return (
        (mt =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                            (e[r] = n[r]);
                }
                return e;
            }),
        mt.apply(this, arguments)
    );
}
function pt(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
    return l;
}
function ht(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function vt(e, t) {
    var n;
    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (
            Array.isArray(e) ||
            (n = (function (e, t) {
                if (e) {
                    if ("string" == typeof e) return ht(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        "Object" === n &&
                            e.constructor &&
                            (n = e.constructor.name),
                        "Map" === n || "Set" === n
                            ? Array.from(e)
                            : "Arguments" === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? ht(e, t)
                            : void 0
                    );
                }
            })(e)) ||
            (t && e && "number" == typeof e.length)
        ) {
            n && (e = n);
            var r = 0;
            return function () {
                return r >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[r++] };
            };
        }
        throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
    }
    return (n = e[Symbol.iterator]()).next.bind(n);
}
function _t(e, t) {
    if (e in t) {
        for (
            var n = t[e],
                r = arguments.length,
                l = new Array(r > 2 ? r - 2 : 0),
                a = 2;
            a < r;
            a++
        )
            l[a - 2] = arguments[a];
        return "function" == typeof n ? n.apply(void 0, l) : n;
    }
    var o = new Error(
        'Tried to handle "' +
            e +
            '" but there is no handler defined. Only defined handlers are: ' +
            Object.keys(t)
                .map(function (e) {
                    return '"' + e + '"';
                })
                .join(", ") +
            "."
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(o, _t), o);
}
function gt(e) {
    var t = e.props,
        n = e.slot,
        r = e.defaultTag,
        l = e.features,
        a = e.visible,
        o = void 0 === a || a,
        i = e.name;
    if (o) return wt(t, n, r, i);
    var s = null != l ? l : lt.None;
    if (s & lt.Static) {
        var u = t.static,
            c = void 0 !== u && u,
            f = pt(t, ["static"]);
        if (c) return wt(f, n, r, i);
    }
    if (s & lt.RenderStrategy) {
        var d,
            m = t.unmount,
            p = void 0 === m || m,
            h = pt(t, ["unmount"]);
        return _t(
            p ? ot.Unmount : ot.Hidden,
            (((d = {})[ot.Unmount] = function () {
                return null;
            }),
            (d[ot.Hidden] = function () {
                return wt(
                    mt({}, h, { hidden: !0, style: { display: "none" } }),
                    n,
                    r,
                    i
                );
            }),
            d)
        );
    }
    return wt(t, n, r, i);
}
function wt(e, t, n, r) {
    var l;
    void 0 === t && (t = {});
    var a = bt(e, ["unmount", "static"]),
        o = a.as,
        i = void 0 === o ? n : o,
        s = a.children,
        u = a.refName,
        c = void 0 === u ? "ref" : u,
        f = pt(a, ["as", "children", "refName"]),
        d = void 0 !== e.ref ? (((l = {})[c] = e.ref), l) : {},
        m = "function" == typeof s ? s(t) : s;
    if (
        (f.className &&
            "function" == typeof f.className &&
            (f.className = f.className(t)),
        i === x && Object.keys(f).length > 0)
    ) {
        if (!et(m) || (Array.isArray(m) && m.length > 1))
            throw new Error(
                [
                    'Passing props on "Fragment"!',
                    "",
                    "The current component <" +
                        r +
                        ' /> is rendering a "Fragment".',
                    "However we need to passthrough the following props:",
                    Object.keys(f)
                        .map(function (e) {
                            return "  - " + e;
                        })
                        .join("\n"),
                    "",
                    "You can apply a few solutions:",
                    [
                        'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                        "Render a single element as the child so that we can forward the props onto that element.",
                    ]
                        .map(function (e) {
                            return "  - " + e;
                        })
                        .join("\n"),
                ].join("\n")
            );
        return tt(
            m,
            Object.assign(
                {},
                (function (e, t, n) {
                    for (
                        var r,
                            l = Object.assign({}, e),
                            a = function () {
                                var n,
                                    a = r.value;
                                void 0 !== e[a] &&
                                    void 0 !== t[a] &&
                                    Object.assign(
                                        l,
                                        (((n = {})[a] = function (n) {
                                            n.defaultPrevented || e[a](n),
                                                n.defaultPrevented || t[a](n);
                                        }),
                                        n)
                                    );
                            },
                            o = vt(n);
                        !(r = o()).done;

                    )
                        a();
                    return l;
                })(
                    (function (e) {
                        var t = Object.assign({}, e);
                        for (var n in t) void 0 === t[n] && delete t[n];
                        return t;
                    })(bt(f, ["ref"])),
                    m.props,
                    ["onClick"]
                ),
                d
            )
        );
    }
    return y(i, Object.assign({}, bt(f, ["ref"]), i !== x && d), m);
}
function yt(e) {
    var t;
    return Object.assign(Se(e), {
        displayName: null != (t = e.displayName) ? t : e.name,
    });
}
function bt(e, t) {
    void 0 === t && (t = []);
    for (var n, r = Object.assign({}, e), l = vt(t); !(n = l()).done; ) {
        var a = n.value;
        a in r && delete r[a];
    }
    return r;
}
((at = lt || (lt = {}))[(at.None = 0)] = "None"),
    (at[(at.RenderStrategy = 1)] = "RenderStrategy"),
    (at[(at.Static = 2)] = "Static"),
    ((it = ot || (ot = {}))[(it.Unmount = 0)] = "Unmount"),
    (it[(it.Hidden = 1)] = "Hidden");
var Et,
    xt,
    kt = "undefined" != typeof window ? oe : ae,
    St = { serverHandoffComplete: !1 };
function At() {
    var e = re(St.serverHandoffComplete),
        t = e[0],
        n = e[1];
    return (
        ae(
            function () {
                !0 !== t && n(!0);
            },
            [t]
        ),
        ae(function () {
            !1 === St.serverHandoffComplete && (St.serverHandoffComplete = !0);
        }, []),
        t
    );
}
function Ct() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    var r = ie(t);
    return (
        ae(
            function () {
                r.current = t;
            },
            [t]
        ),
        ce(
            function (e) {
                for (var t, n = vt(r.current); !(t = n()).done; ) {
                    var l = t.value;
                    null != l &&
                        ("function" == typeof l ? l(e) : (l.current = e));
                }
            },
            [r]
        )
    );
}
function Nt(e) {
    for (
        var t, n, r = e.parentElement, l = null;
        r && !(r instanceof HTMLFieldSetElement);

    )
        r instanceof HTMLLegendElement && (l = r), (r = r.parentElement);
    var a =
        null !=
            (t =
                "" ===
                (null == (n = r) ? void 0 : n.getAttribute("disabled"))) && t;
    return (
        (!a ||
            !(function (e) {
                if (!e) return !1;
                var t = e.previousElementSibling;
                for (; null !== t; ) {
                    if (t instanceof HTMLLegendElement) return !1;
                    t = t.previousElementSibling;
                }
                return !0;
            })(l)) &&
        a
    );
}
((xt = Et || (Et = {})).Space = " "),
    (xt.Enter = "Enter"),
    (xt.Escape = "Escape"),
    (xt.Backspace = "Backspace"),
    (xt.ArrowLeft = "ArrowLeft"),
    (xt.ArrowUp = "ArrowUp"),
    (xt.ArrowRight = "ArrowRight"),
    (xt.ArrowDown = "ArrowDown"),
    (xt.Home = "Home"),
    (xt.End = "End"),
    (xt.PageUp = "PageUp"),
    (xt.PageDown = "PageDown"),
    (xt.Tab = "Tab");
var Ot = 0;
function Mt() {
    return ++Ot;
}
function Pt() {
    var e = re(At() ? Mt : null),
        t = e[0],
        n = e[1];
    return (
        kt(
            function () {
                null === t && n(Mt());
            },
            [t]
        ),
        null != t ? "" + t : void 0
    );
}
var Tt,
    Dt,
    It,
    jt,
    Lt,
    Rt,
    Ut,
    Ht = Y(null);
function Ft() {
    return fe(Ht);
}
function zt(e) {
    var t = e.value,
        n = e.children;
    return ft.createElement(Ht.Provider, { value: t }, n);
}
function Bt(e) {
    var t;
    if (e.type) return e.type;
    var n = null != (t = e.as) ? t : "button";
    return "string" == typeof n && "button" === n.toLowerCase()
        ? "button"
        : void 0;
}
(Ht.displayName = "OpenClosedContext"),
    ((Dt = Tt || (Tt = {}))[(Dt.Open = 0)] = "Open"),
    (Dt[(Dt.Closed = 1)] = "Closed"),
    ((Lt = jt || (jt = {}))[(Lt.Open = 0)] = "Open"),
    (Lt[(Lt.Closed = 1)] = "Closed"),
    ((Ut = Rt || (Rt = {}))[(Ut.ToggleDisclosure = 0)] = "ToggleDisclosure"),
    (Ut[(Ut.CloseDisclosure = 1)] = "CloseDisclosure"),
    (Ut[(Ut.SetButtonId = 2)] = "SetButtonId"),
    (Ut[(Ut.SetPanelId = 3)] = "SetPanelId"),
    (Ut[(Ut.LinkPanel = 4)] = "LinkPanel"),
    (Ut[(Ut.UnlinkPanel = 5)] = "UnlinkPanel");
var Wt =
        (((It = {})[Rt.ToggleDisclosure] = function (e) {
            var t;
            return mt({}, e, {
                disclosureState: _t(
                    e.disclosureState,
                    ((t = {}),
                    (t[jt.Open] = jt.Closed),
                    (t[jt.Closed] = jt.Open),
                    t)
                ),
            });
        }),
        (It[Rt.CloseDisclosure] = function (e) {
            return e.disclosureState === jt.Closed
                ? e
                : mt({}, e, { disclosureState: jt.Closed });
        }),
        (It[Rt.LinkPanel] = function (e) {
            return !0 === e.linkedPanel ? e : mt({}, e, { linkedPanel: !0 });
        }),
        (It[Rt.UnlinkPanel] = function (e) {
            return !1 === e.linkedPanel ? e : mt({}, e, { linkedPanel: !1 });
        }),
        (It[Rt.SetButtonId] = function (e, t) {
            return e.buttonId === t.buttonId
                ? e
                : mt({}, e, { buttonId: t.buttonId });
        }),
        (It[Rt.SetPanelId] = function (e, t) {
            return e.panelId === t.panelId
                ? e
                : mt({}, e, { panelId: t.panelId });
        }),
        It),
    Vt = Y(null);
function Yt(e) {
    var t = fe(Vt);
    if (null === t) {
        var n = new Error(
            "<" + e + " /> is missing a parent <" + Qt.name + " /> component."
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(n, Yt), n);
    }
    return t;
}
Vt.displayName = "DisclosureContext";
var Gt = Y(null);
function Zt(e) {
    var t = fe(Gt);
    if (null === t) {
        var n = new Error(
            "<" + e + " /> is missing a parent <" + Qt.name + " /> component."
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(n, Zt), n);
    }
    return t;
}
Gt.displayName = "DisclosureAPIContext";
var qt = Y(null);
function Kt(e, t) {
    return _t(t.type, Wt, e, t);
}
qt.displayName = "DisclosurePanelContext";
var Xt = x;
function Qt(e) {
    var t,
        n = e.defaultOpen,
        r = void 0 !== n && n,
        l = pt(e, ["defaultOpen"]),
        a = "headlessui-disclosure-button-" + Pt(),
        o = "headlessui-disclosure-panel-" + Pt(),
        i = le(Kt, {
            disclosureState: r ? jt.Open : jt.Closed,
            linkedPanel: !1,
            buttonId: a,
            panelId: o,
        }),
        s = i[0].disclosureState,
        u = i[1];
    ae(
        function () {
            return u({ type: Rt.SetButtonId, buttonId: a });
        },
        [a, u]
    ),
        ae(
            function () {
                return u({ type: Rt.SetPanelId, panelId: o });
            },
            [o, u]
        );
    var c = ce(
            function (e) {
                u({ type: Rt.CloseDisclosure });
                var t = e
                    ? e instanceof HTMLElement
                        ? e
                        : e.current instanceof HTMLElement
                        ? e.current
                        : document.getElementById(a)
                    : document.getElementById(a);
                null == t || t.focus();
            },
            [u, a]
        ),
        f = ue(
            function () {
                return { close: c };
            },
            [c]
        ),
        d = ue(
            function () {
                return { open: s === jt.Open, close: c };
            },
            [s, c]
        );
    return ft.createElement(
        Vt.Provider,
        { value: i },
        ft.createElement(
            Gt.Provider,
            { value: f },
            ft.createElement(
                zt,
                {
                    value: _t(
                        s,
                        ((t = {}),
                        (t[jt.Open] = Tt.Open),
                        (t[jt.Closed] = Tt.Closed),
                        t)
                    ),
                },
                gt({ props: l, slot: d, defaultTag: Xt, name: "Disclosure" })
            )
        )
    );
}
var $t,
    Jt,
    en = yt(function e(t, n) {
        var r = Yt([Qt.name, e.name].join(".")),
            l = r[0],
            a = r[1],
            o = ie(null),
            i = Ct(o, n),
            s = fe(qt),
            u = null !== s && s === l.panelId,
            c = ce(
                function (e) {
                    var t;
                    if (u) {
                        if (l.disclosureState === jt.Closed) return;
                        switch (e.key) {
                            case Et.Space:
                            case Et.Enter:
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    a({ type: Rt.ToggleDisclosure }),
                                    null ==
                                        (t = document.getElementById(
                                            l.buttonId
                                        )) || t.focus();
                        }
                    } else
                        switch (e.key) {
                            case Et.Space:
                            case Et.Enter:
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    a({ type: Rt.ToggleDisclosure });
                        }
                },
                [a, u, l.disclosureState]
            ),
            f = ce(function (e) {
                if (e.key === Et.Space) e.preventDefault();
            }, []),
            d = ce(
                function (e) {
                    var n;
                    Nt(e.currentTarget) ||
                        t.disabled ||
                        (u
                            ? (a({ type: Rt.ToggleDisclosure }),
                              null ==
                                  (n = document.getElementById(l.buttonId)) ||
                                  n.focus())
                            : a({ type: Rt.ToggleDisclosure }));
                },
                [a, t.disabled, l.buttonId, u]
            ),
            m = ue(
                function () {
                    return { open: l.disclosureState === jt.Open };
                },
                [l]
            ),
            p = (function (e, t) {
                var n = re(function () {
                        return Bt(e);
                    }),
                    r = n[0],
                    l = n[1];
                return (
                    kt(
                        function () {
                            l(Bt(e));
                        },
                        [e.type, e.as]
                    ),
                    kt(
                        function () {
                            r ||
                                (t.current &&
                                    t.current instanceof HTMLButtonElement &&
                                    !t.current.hasAttribute("type") &&
                                    l("button"));
                        },
                        [r, t]
                    ),
                    r
                );
            })(t, o);
        return gt({
            props: mt(
                {},
                t,
                u
                    ? { ref: i, type: p, onKeyDown: c, onClick: d }
                    : {
                          ref: i,
                          id: l.buttonId,
                          type: p,
                          "aria-expanded": t.disabled
                              ? void 0
                              : l.disclosureState === jt.Open,
                          "aria-controls": l.linkedPanel ? l.panelId : void 0,
                          onKeyDown: c,
                          onKeyUp: f,
                          onClick: d,
                      }
            ),
            slot: m,
            defaultTag: "button",
            name: "Disclosure.Button",
        });
    }),
    tn = lt.RenderStrategy | lt.Static,
    nn = yt(function e(t, n) {
        var r = Yt([Qt.name, e.name].join(".")),
            l = r[0],
            a = r[1],
            o = Zt([Qt.name, e.name].join(".")).close,
            i = Ct(n, function () {
                l.linkedPanel || a({ type: Rt.LinkPanel });
            }),
            s = Ft(),
            u = null !== s ? s === Tt.Open : l.disclosureState === jt.Open;
        ae(
            function () {
                return function () {
                    return a({ type: Rt.UnlinkPanel });
                };
            },
            [a]
        ),
            ae(
                function () {
                    var e;
                    l.disclosureState !== jt.Closed ||
                        (null != (e = t.unmount) && !e) ||
                        a({ type: Rt.UnlinkPanel });
                },
                [l.disclosureState, t.unmount, a]
            );
        var c = ue(
                function () {
                    return { open: l.disclosureState === jt.Open, close: o };
                },
                [l, o]
            ),
            f = { ref: i, id: l.panelId },
            d = t;
        return ft.createElement(
            qt.Provider,
            { value: l.panelId },
            gt({
                props: mt({}, d, f),
                slot: c,
                defaultTag: "div",
                features: tn,
                visible: u,
                name: "Disclosure.Panel",
            })
        );
    });
function rn() {
    var e = [],
        t = {
            requestAnimationFrame: (function (e) {
                function t() {
                    return e.apply(this, arguments);
                }
                return (
                    (t.toString = function () {
                        return e.toString();
                    }),
                    t
                );
            })(function () {
                var e = requestAnimationFrame.apply(void 0, arguments);
                t.add(function () {
                    return cancelAnimationFrame(e);
                });
            }),
            nextFrame: function () {
                for (
                    var e = arguments.length, n = new Array(e), r = 0;
                    r < e;
                    r++
                )
                    n[r] = arguments[r];
                t.requestAnimationFrame(function () {
                    t.requestAnimationFrame.apply(t, n);
                });
            },
            setTimeout: (function (e) {
                function t() {
                    return e.apply(this, arguments);
                }
                return (
                    (t.toString = function () {
                        return e.toString();
                    }),
                    t
                );
            })(function () {
                var e = setTimeout.apply(void 0, arguments);
                t.add(function () {
                    return clearTimeout(e);
                });
            }),
            add: function (t) {
                e.push(t);
            },
            dispose: function () {
                for (var t, n = vt(e.splice(0)); !(t = n()).done; ) {
                    (0, t.value)();
                }
            },
        };
    return t;
}
function ln() {
    var e = ie(!0);
    return (
        ae(function () {
            e.current = !1;
        }, []),
        e.current
    );
}
function an(e) {
    for (
        var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1;
        l < n;
        l++
    )
        r[l - 1] = arguments[l];
    e && r.length > 0 && (t = e.classList).add.apply(t, r);
}
function on(e) {
    for (
        var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1;
        l < n;
        l++
    )
        r[l - 1] = arguments[l];
    e && r.length > 0 && (t = e.classList).remove.apply(t, r);
}
function sn(e, t, n, r, l, a) {
    var o,
        i,
        s = rn(),
        u =
            void 0 !== a
                ? ((o = a),
                  (i = { called: !1 }),
                  function () {
                      if (!i.called)
                          return (i.called = !0), o.apply(void 0, arguments);
                  })
                : function () {};
    return (
        on.apply(void 0, [e].concat(l)),
        an.apply(void 0, [e].concat(t, n)),
        s.nextFrame(function () {
            on.apply(void 0, [e].concat(n)),
                an.apply(void 0, [e].concat(r)),
                s.add(
                    (function (e, t) {
                        var n = rn();
                        if (!e) return n.dispose;
                        var r = getComputedStyle(e),
                            l = [r.transitionDuration, r.transitionDelay].map(
                                function (e) {
                                    var t = e
                                        .split(",")
                                        .filter(Boolean)
                                        .map(function (e) {
                                            return e.includes("ms")
                                                ? parseFloat(e)
                                                : 1e3 * parseFloat(e);
                                        })
                                        .sort(function (e, t) {
                                            return t - e;
                                        })[0];
                                    return void 0 === t ? 0 : t;
                                }
                            ),
                            a = l[0],
                            o = l[1];
                        return (
                            0 !== a
                                ? n.setTimeout(function () {
                                      t($t.Finished);
                                  }, a + o)
                                : t($t.Finished),
                            n.add(function () {
                                return t($t.Cancelled);
                            }),
                            n.dispose
                        );
                    })(e, function (n) {
                        return (
                            on.apply(void 0, [e].concat(r, t)),
                            an.apply(void 0, [e].concat(l)),
                            u(n)
                        );
                    })
                );
        }),
        s.add(function () {
            return on.apply(void 0, [e].concat(t, n, r, l));
        }),
        s.add(function () {
            return u($t.Cancelled);
        }),
        s.dispose
    );
}
function un(e) {
    return (
        void 0 === e && (e = ""),
        ue(
            function () {
                return e.split(" ").filter(function (e) {
                    return e.trim().length > 1;
                });
            },
            [e]
        )
    );
}
(Qt.Button = en),
    (Qt.Panel = nn),
    ((Jt = $t || ($t = {})).Finished = "finished"),
    (Jt.Cancelled = "cancelled");
var cn,
    fn,
    dn = Y(null);
(dn.displayName = "TransitionContext"),
    ((fn = cn || (cn = {})).Visible = "visible"),
    (fn.Hidden = "hidden");
var mn = Y(null);
function pn(e) {
    return "children" in e
        ? pn(e.children)
        : e.current.filter(function (e) {
              return e.state === cn.Visible;
          }).length > 0;
}
function hn(e) {
    var t = ie(e),
        n = ie([]),
        r = (function () {
            var e = ie(!1);
            return (
                ae(function () {
                    return (
                        (e.current = !0),
                        function () {
                            e.current = !1;
                        }
                    );
                }, []),
                e
            );
        })();
    ae(
        function () {
            t.current = e;
        },
        [e]
    );
    var l = ce(
            function (e, l) {
                var a;
                void 0 === l && (l = ot.Hidden);
                var o = n.current.findIndex(function (t) {
                    return t.id === e;
                });
                -1 !== o &&
                    (_t(
                        l,
                        (((a = {})[ot.Unmount] = function () {
                            n.current.splice(o, 1);
                        }),
                        (a[ot.Hidden] = function () {
                            n.current[o].state = cn.Hidden;
                        }),
                        a)
                    ),
                    !pn(n) && r.current && (null == t.current || t.current()));
            },
            [t, r, n]
        ),
        a = ce(
            function (e) {
                var t = n.current.find(function (t) {
                    return t.id === e;
                });
                return (
                    t
                        ? t.state !== cn.Visible && (t.state = cn.Visible)
                        : n.current.push({ id: e, state: cn.Visible }),
                    function () {
                        return l(e, ot.Unmount);
                    }
                );
            },
            [n, l]
        );
    return ue(
        function () {
            return { children: n, register: a, unregister: l };
        },
        [a, l, n]
    );
}
function vn() {}
mn.displayName = "NestingContext";
var _n = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function gn(e) {
    for (var t, n = {}, r = vt(_n); !(t = r()).done; ) {
        var l,
            a = t.value;
        n[a] = null != (l = e[a]) ? l : vn;
    }
    return n;
}
var wn = lt.RenderStrategy;
function yn(e) {
    var t,
        n = e.beforeEnter,
        r = e.afterEnter,
        l = e.beforeLeave,
        a = e.afterLeave,
        o = e.enter,
        i = e.enterFrom,
        s = e.enterTo,
        u = e.entered,
        c = e.leave,
        f = e.leaveFrom,
        d = e.leaveTo,
        m = pt(e, [
            "beforeEnter",
            "afterEnter",
            "beforeLeave",
            "afterLeave",
            "enter",
            "enterFrom",
            "enterTo",
            "entered",
            "leave",
            "leaveFrom",
            "leaveTo",
        ]),
        p = ie(null),
        h = re(cn.Visible),
        v = h[0],
        _ = h[1],
        g = m.unmount ? ot.Unmount : ot.Hidden,
        w = (function () {
            var e = fe(dn);
            if (null === e)
                throw new Error(
                    "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
            return e;
        })(),
        y = w.show,
        b = w.appear,
        E = (function () {
            var e = fe(mn);
            if (null === e)
                throw new Error(
                    "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
            return e;
        })(),
        x = E.register,
        k = E.unregister,
        S = ln(),
        A = Pt(),
        C = ie(!1),
        N = hn(function () {
            C.current || (_(cn.Hidden), k(A), L.current.afterLeave());
        });
    kt(
        function () {
            if (A) return x(A);
        },
        [x, A]
    ),
        kt(
            function () {
                var e;
                g === ot.Hidden &&
                    A &&
                    (y && v !== cn.Visible
                        ? _(cn.Visible)
                        : _t(
                              v,
                              (((e = {})[cn.Hidden] = function () {
                                  return k(A);
                              }),
                              (e[cn.Visible] = function () {
                                  return x(A);
                              }),
                              e)
                          ));
            },
            [v, A, x, k, y, g]
        );
    var O = un(o),
        M = un(i),
        P = un(s),
        T = un(u),
        D = un(c),
        I = un(f),
        j = un(d),
        L = (function (e) {
            var t = ie(gn(e));
            return (
                ae(
                    function () {
                        t.current = gn(e);
                    },
                    [e]
                ),
                t
            );
        })({ beforeEnter: n, afterEnter: r, beforeLeave: l, afterLeave: a }),
        R = At();
    ae(
        function () {
            if (R && v === cn.Visible && null === p.current)
                throw new Error(
                    "Did you forget to passthrough the `ref` to the actual DOM node?"
                );
        },
        [p, v, R]
    );
    var U = S && !b;
    kt(
        function () {
            var e = p.current;
            if (e && !U)
                return (
                    (C.current = !0),
                    y && L.current.beforeEnter(),
                    y || L.current.beforeLeave(),
                    y
                        ? sn(e, O, M, P, T, function (e) {
                              (C.current = !1),
                                  e === $t.Finished && L.current.afterEnter();
                          })
                        : sn(e, D, I, j, T, function (e) {
                              (C.current = !1),
                                  e === $t.Finished &&
                                      (pn(N) ||
                                          (_(cn.Hidden),
                                          k(A),
                                          L.current.afterLeave()));
                          })
                );
        },
        [L, A, C, k, N, p, U, y, O, M, P, D, I, j]
    );
    var H = { ref: p },
        F = m;
    return ft.createElement(
        mn.Provider,
        { value: N },
        ft.createElement(
            zt,
            {
                value: _t(
                    v,
                    ((t = {}),
                    (t[cn.Visible] = Tt.Open),
                    (t[cn.Hidden] = Tt.Closed),
                    t)
                ),
            },
            gt({
                props: mt({}, F, H),
                defaultTag: "div",
                features: wn,
                visible: v === cn.Visible,
                name: "Transition.Child",
            })
        )
    );
}
function bn(e) {
    var t,
        n = e.show,
        r = e.appear,
        l = void 0 !== r && r,
        a = e.unmount,
        o = pt(e, ["show", "appear", "unmount"]),
        i = Ft();
    void 0 === n &&
        null !== i &&
        (n = _t(i, (((t = {})[Tt.Open] = !0), (t[Tt.Closed] = !1), t)));
    if (![!0, !1].includes(n))
        throw new Error(
            "A <Transition /> is used but it is missing a `show={true | false}` prop."
        );
    var s = re(n ? cn.Visible : cn.Hidden),
        u = s[0],
        c = s[1],
        f = hn(function () {
            c(cn.Hidden);
        }),
        d = ln(),
        m = ue(
            function () {
                return { show: n, appear: l || !d };
            },
            [n, l, d]
        );
    ae(
        function () {
            n ? c(cn.Visible) : pn(f) || c(cn.Hidden);
        },
        [n, f]
    );
    var p = { unmount: a };
    return ft.createElement(
        mn.Provider,
        { value: f },
        ft.createElement(
            dn.Provider,
            { value: m },
            gt({
                props: mt({}, p, {
                    as: x,
                    children: ft.createElement(yn, Object.assign({}, p, o)),
                }),
                defaultTag: x,
                features: wn,
                visible: u === cn.Visible,
                name: "Transition",
            })
        )
    );
}
(bn.Child = function (e) {
    var t = null !== fe(dn),
        n = null !== Ft();
    return !t && n
        ? ft.createElement(bn, Object.assign({}, e))
        : ft.createElement(yn, Object.assign({}, e));
}),
    (bn.Root = bn);
var En = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0,
    },
    xn = ft.createContext && ft.createContext(En),
    kn = function () {
        return (
            (kn =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var l in (t = arguments[n]))
                            Object.prototype.hasOwnProperty.call(t, l) &&
                                (e[l] = t[l]);
                    return e;
                }),
            kn.apply(this, arguments)
        );
    };
function Sn(e) {
    return (
        e &&
        e.map(function (e, t) {
            return ft.createElement(e.tag, kn({ key: t }, e.attr), Sn(e.child));
        })
    );
}
function An(e) {
    return function (t) {
        return ft.createElement(
            Cn,
            kn({ attr: kn({}, e.attr) }, t),
            Sn(e.child)
        );
    };
}
function Cn(e) {
    var t = function (t) {
        var n,
            r = e.attr,
            l = e.size,
            a = e.title,
            o = (function (e, t) {
                var n = {};
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) &&
                        t.indexOf(r) < 0 &&
                        (n[r] = e[r]);
                if (
                    null != e &&
                    "function" == typeof Object.getOwnPropertySymbols
                ) {
                    var l = 0;
                    for (r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                        t.indexOf(r[l]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                                e,
                                r[l]
                            ) &&
                            (n[r[l]] = e[r[l]]);
                }
                return n;
            })(e, ["attr", "size", "title"]),
            i = l || t.size || "1em";
        return (
            t.className && (n = t.className),
            e.className && (n = (n ? n + " " : "") + e.className),
            ft.createElement(
                "svg",
                kn(
                    {
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0",
                    },
                    t.attr,
                    r,
                    o,
                    {
                        className: n,
                        style: kn(
                            kn({ color: e.color || t.color }, t.style),
                            e.style
                        ),
                        height: i,
                        width: i,
                        xmlns: "http://www.w3.org/2000/svg",
                    }
                ),
                a && ft.createElement("title", null, a),
                e.children
            )
        );
    };
    return void 0 !== xn
        ? ft.createElement(xn.Consumer, null, function (e) {
              return t(e);
          })
        : t(En);
}
function Nn(e) {
    return An({
        tag: "svg",
        attr: { viewBox: "0 0 496 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z",
                },
            },
        ],
    })(e);
}
function On(e) {
    return An({
        tag: "svg",
        attr: { viewBox: "0 0 512 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M481.92,134.48C440.87,54.18,352.26,8,255.91,8,137.05,8,37.51,91.68,13.47,203.66c26-46.49,86.22-79.14,149.46-79.14,79.27,0,121.09,48.93,122.25,50.18,22,23.8,33,50.39,33,83.1,0,10.4-5.31,25.82-15.11,38.57-1.57,2-6.39,4.84-6.39,11,0,5.06,3.29,9.92,9.14,14,27.86,19.37,80.37,16.81,80.51,16.81A115.39,115.39,0,0,0,444.94,322a118.92,118.92,0,0,0,58.95-102.44C504.39,176.13,488.39,147.26,481.92,134.48ZM212.77,475.67a154.88,154.88,0,0,1-46.64-45c-32.94-47.42-34.24-95.6-20.1-136A155.5,155.5,0,0,1,203,215.75c59-45.2,94.84-5.65,99.06-1a80,80,0,0,0-4.89-10.14c-9.24-15.93-24-36.41-56.56-53.51-33.72-17.69-70.59-18.59-77.64-18.59-38.71,0-77.9,13-107.53,35.69C35.68,183.3,12.77,208.72,8.6,243c-1.08,12.31-2.75,62.8,23,118.27a248,248,0,0,0,248.3,141.61C241.78,496.26,214.05,476.24,212.77,475.67Zm250.72-98.33a7.76,7.76,0,0,0-7.92-.23,181.66,181.66,0,0,1-20.41,9.12,197.54,197.54,0,0,1-69.55,12.52c-91.67,0-171.52-63.06-171.52-144A61.12,61.12,0,0,1,200.61,228,168.72,168.72,0,0,0,161.85,278c-14.92,29.37-33,88.13,13.33,151.66,6.51,8.91,23,30,56,47.67,23.57,12.65,49,19.61,71.7,19.61,35.14,0,115.43-33.44,163-108.87A7.75,7.75,0,0,0,463.49,377.34Z",
                },
            },
        ],
    })(e);
}
function Mn(e) {
    return An({
        tag: "svg",
        attr: { viewBox: "0 0 512 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M189.37,152.86Zm-58.74-29.37C130.79,123.5,130.71,123.5,130.63,123.49Zm351.42,45.35c-10.61-25.5-32.08-53-48.94-61.73,13.72,26.89,21.67,53.88,24.7,74,0,0,0,.14.05.41-27.58-68.75-74.35-96.47-112.55-156.83-1.93-3.05-3.86-6.11-5.74-9.33-1-1.65-1.86-3.34-2.69-5.05A44.88,44.88,0,0,1,333.24.69a.63.63,0,0,0-.55-.66.9.9,0,0,0-.46,0l-.12.07-.18.1.1-.14c-54.23,31.77-76.72,87.38-82.5,122.78a130,130,0,0,0-48.33,12.33,6.25,6.25,0,0,0-3.09,7.75,6.13,6.13,0,0,0,7.79,3.79l.52-.21a117.84,117.84,0,0,1,42.11-11l1.42-.1c2-.12,4-.2,6-.22A122.61,122.61,0,0,1,291,140c.67.2,1.32.42,2,.63,1.89.57,3.76,1.2,5.62,1.87,1.36.5,2.71,1,4.05,1.58,1.09.44,2.18.88,3.25,1.35q2.52,1.13,5,2.35c.75.37,1.5.74,2.25,1.13q2.4,1.26,4.74,2.63,1.51.87,3,1.8a124.89,124.89,0,0,1,42.66,44.13c-13-9.15-36.35-18.19-58.82-14.28,87.74,43.86,64.18,194.9-57.39,189.2a108.43,108.43,0,0,1-31.74-6.12c-2.42-.91-4.8-1.89-7.16-2.93-1.38-.63-2.76-1.27-4.12-2C174.5,346,149.9,316.92,146.83,281.59c0,0,11.25-41.95,80.62-41.95,7.5,0,28.93-20.92,29.33-27-.09-2-42.54-18.87-59.09-35.18-8.85-8.71-13.05-12.91-16.77-16.06a69.58,69.58,0,0,0-6.31-4.77A113.05,113.05,0,0,1,173.92,97c-25.06,11.41-44.55,29.45-58.71,45.37h-.12c-9.67-12.25-9-52.65-8.43-61.08-.12-.53-7.22,3.68-8.15,4.31a178.54,178.54,0,0,0-23.84,20.43A214,214,0,0,0,51.9,133.36l0,0a.08.08,0,0,1,0,0,205.84,205.84,0,0,0-32.73,73.9c-.06.27-2.33,10.21-4,22.48q-.42,2.87-.78,5.74c-.57,3.69-1,7.71-1.44,14,0,.24,0,.48-.05.72-.18,2.71-.34,5.41-.49,8.12,0,.41,0,.82,0,1.24,0,134.7,109.21,243.89,243.92,243.89,120.64,0,220.82-87.58,240.43-202.62.41-3.12.74-6.26,1.11-9.41,4.85-41.83-.54-85.79-15.82-122.55Z",
                },
            },
        ],
    })(e);
}
function Pn(e) {
    return An({
        tag: "svg",
        attr: { viewBox: "0 0 496 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M313.9 32.7c-170.2 0-252.6 223.8-147.5 355.1 36.5 45.4 88.6 75.6 147.5 75.6 36.3 0 70.3-11.1 99.4-30.4-43.8 39.2-101.9 63-165.3 63-3.9 0-8 0-11.9-.3C104.6 489.6 0 381.1 0 248 0 111 111 0 248 0h.8c63.1.3 120.7 24.1 164.4 63.1-29-19.4-63.1-30.4-99.3-30.4zm101.8 397.7c-40.9 24.7-90.7 23.6-132-5.8 56.2-20.5 97.7-91.6 97.7-176.6 0-84.7-41.2-155.8-97.4-176.6 41.8-29.2 91.2-30.3 132.9-5 105.9 98.7 105.5 265.7-1.2 364z",
                },
            },
        ],
    })(e);
}
function Tn(e) {
    return An({
        tag: "svg",
        attr: { viewBox: "0 0 512 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M274.69,274.69l-37.38-37.38L166,346ZM256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8ZM411.85,182.79l14.78-6.13A8,8,0,0,1,437.08,181h0a8,8,0,0,1-4.33,10.46L418,197.57a8,8,0,0,1-10.45-4.33h0A8,8,0,0,1,411.85,182.79ZM314.43,94l6.12-14.78A8,8,0,0,1,331,74.92h0a8,8,0,0,1,4.33,10.45l-6.13,14.78a8,8,0,0,1-10.45,4.33h0A8,8,0,0,1,314.43,94ZM256,60h0a8,8,0,0,1,8,8V84a8,8,0,0,1-8,8h0a8,8,0,0,1-8-8V68A8,8,0,0,1,256,60ZM181,74.92a8,8,0,0,1,10.46,4.33L197.57,94a8,8,0,1,1-14.78,6.12l-6.13-14.78A8,8,0,0,1,181,74.92Zm-63.58,42.49h0a8,8,0,0,1,11.31,0L140,128.72A8,8,0,0,1,140,140h0a8,8,0,0,1-11.31,0l-11.31-11.31A8,8,0,0,1,117.41,117.41ZM60,256h0a8,8,0,0,1,8-8H84a8,8,0,0,1,8,8h0a8,8,0,0,1-8,8H68A8,8,0,0,1,60,256Zm40.15,73.21-14.78,6.13A8,8,0,0,1,74.92,331h0a8,8,0,0,1,4.33-10.46L94,314.43a8,8,0,0,1,10.45,4.33h0A8,8,0,0,1,100.15,329.21Zm4.33-136h0A8,8,0,0,1,94,197.57l-14.78-6.12A8,8,0,0,1,74.92,181h0a8,8,0,0,1,10.45-4.33l14.78,6.13A8,8,0,0,1,104.48,193.24ZM197.57,418l-6.12,14.78a8,8,0,0,1-14.79-6.12l6.13-14.78A8,8,0,1,1,197.57,418ZM264,444a8,8,0,0,1-8,8h0a8,8,0,0,1-8-8V428a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8Zm67-6.92h0a8,8,0,0,1-10.46-4.33L314.43,418a8,8,0,0,1,4.33-10.45h0a8,8,0,0,1,10.45,4.33l6.13,14.78A8,8,0,0,1,331,437.08Zm63.58-42.49h0a8,8,0,0,1-11.31,0L372,383.28A8,8,0,0,1,372,372h0a8,8,0,0,1,11.31,0l11.31,11.31A8,8,0,0,1,394.59,394.59ZM286.25,286.25,110.34,401.66,225.75,225.75,401.66,110.34ZM437.08,331h0a8,8,0,0,1-10.45,4.33l-14.78-6.13a8,8,0,0,1-4.33-10.45h0A8,8,0,0,1,418,314.43l14.78,6.12A8,8,0,0,1,437.08,331ZM444,264H428a8,8,0,0,1-8-8h0a8,8,0,0,1,8-8h16a8,8,0,0,1,8,8h0A8,8,0,0,1,444,264Z",
                },
            },
        ],
    })(e);
}
function Dn(e) {
    return An({
        tag: "svg",
        attr: { viewBox: "0 0 320 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",
                },
            },
        ],
    })(e);
}
function In(e) {
    return An({
        tag: "svg",
        attr: { viewBox: "0 0 384 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z",
                },
            },
        ],
    })(e);
}
function jn(e) {
    return An({
        tag: "svg",
        attr: { viewBox: "0 0 576 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z",
                },
            },
        ],
    })(e);
}
function Ln(e) {
    return ft.createElement(
        bn,
        {
            show: e.show,
            className: "tw-overflow-hidden",
            enter: "tw-transition-max-h tw-duration-500 tw-linear",
            enterFrom: "tw-max-h-0",
            enterTo: "tw-max-h-full",
            leave: "tw-transition-max-h tw-max-h-0 tw-duration-500 tw-linear",
            leaveTo: "tw-max-h-0",
            leaveFrom: "tw-max-h-full",
        },
        e.children
    );
}
function Rn(e) {
    switch (e) {
        case "chrome":
            return Nn;
        case "firefox":
            return Mn;
        case "safari":
            return Tn;
        case "opera":
            return Pn;
        case "msedge":
            return On;
        default:
            return In;
    }
}
function Un(e) {
    var t,
        n,
        r = "";
    if ("string" == typeof e || "number" == typeof e) r += e;
    else if ("object" == typeof e)
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
                e[t] && (n = Un(e[t])) && (r && (r += " "), (r += n));
        else for (t in e) e[t] && (r && (r += " "), (r += t));
    return r;
}
function Hn() {
    for (var e, t, n = 0, r = ""; n < arguments.length; )
        (e = arguments[n++]) && (t = Un(e)) && (r && (r += " "), (r += t));
    return r;
}
class Fn extends k {
    constructor(e) {
        super(e),
            (this.cursor = { idx: -1, sidx: -1 }),
            (this.state = {
                pos: { x: 0, y: 0 },
                show: !1,
                children: null,
                translate: { x: 0, y: 0 },
            }),
            (e.agent.setCursor = (t) => {
                const n = Object.assign({}, this.cursor, { idx: t.cursor.idx }),
                    r = e.update(t, n, this.cursor);
                t.cursor.idx == this.cursor.idx &&
                    this.setShow(t, this.state.pos),
                    (this.cursor.idx = t.cursor.idx),
                    this.afterUpdate(t, r);
            }),
            (e.agent.setSeries = (t, n) => {
                console.log(n);
                const r = Object.assign({}, this.cursor, { sidx: n }),
                    l = e.update(t, r, this.cursor);
                n == this.cursor.sidx && this.setShow(t, this.state.pos),
                    (this.cursor.sidx = n),
                    this.afterUpdate(t, l);
            }),
            (e.agent.onMouseOver = (e) => this.setShow(e, this.state.pos)),
            (e.agent.onMouseLeave = () => this.setState({ show: !1 }));
    }
    afterUpdate(e, t) {
        t &&
            (null !== t.pos &&
                (this.setTooltipTranslate(e, t.pos),
                this.setState({ pos: t.pos })),
            null != t.show && this.setState({ show: t.show }),
            t.children && this.setState({ children: t.children }));
    }
    setShow(e, t) {
        const n =
            Math.abs(e.cursor.left - t.x) > 40 ||
            Math.abs(e.cursor.top - t.y) > 40;
        this.setState({ show: !n });
    }
    setTooltipTranslate(e, t) {
        this.setState({
            translate: {
                x: t.x > e.width / 2 ? -100 : 1,
                y: t.y > e.height / 2 ? -100 : 1,
            },
        });
    }
    render() {
        const { state: e } = this,
            t = !e.children || !e.show;
        return ft.createElement(
            "div",
            {
                className: Hn(
                    "tw-w-max tw-absolute tw-py-1 tw-px-2 tw-text-xs tw-z-[999]",
                    "tw-rounded-lg tw-border tw-shadow-sm tw-bg-gray-200 tw-opacity-90",
                    { "tw-hidden": t }
                ),
                style: {
                    top: `${e.pos.y}px`,
                    left: `${e.pos.x}px`,
                    transform: `translate(${e.translate.x}%,${e.translate.y}%)`,
                },
            },
            e.children
        );
    }
}
function zn(e) {
    const t = document.createElement("div"),
        n = {
            setCursor: null,
            setSeries: null,
            onMouseOver: null,
            onMouseLeave: null,
        };
    return {
        hooks: {
            init(r) {
                const l = r.over;
                l.appendChild(t),
                    Be(ft.createElement(Fn, { agent: n, update: e }), t),
                    l.addEventListener(
                        "mouseover",
                        (e) => n.onMouseOver && n.onMouseOver(e)
                    ),
                    l.addEventListener(
                        "mouseleave",
                        (e) => n.onMouseLeave && n.onMouseLeave(e)
                    );
            },
            setCursor: (...e) => n.setCursor && n.setCursor(...e),
            setSeries: (...e) => n.setSeries && n.setSeries(...e),
        },
    };
}
function Bn(e) {
    return (e * Math.PI) / 180;
}
function Wn(e, t, n) {
    return e > n ? n : e < t ? t : e;
}
function Vn(e, t) {
    return (t / 100) * e;
}
function Yn(e, t) {
    return e + t / 2;
}
function Gn(e, t) {
    var n = Bn(e);
    return { dx: t * Math.cos(n), dy: t * Math.sin(n) };
}
function Zn(e) {
    return "number" == typeof e;
}
function qn(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function Kn(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
    return l;
}
function Xn(e) {
    e.dataEntry, e.dataIndex;
    var t = Kn(e, ["dataEntry", "dataIndex"]);
    return ft.createElement(
        "text",
        Object.assign({ dominantBaseline: "central" }, t)
    );
}
function Qn(e) {
    var t,
        n,
        r = e.labelPosition,
        l = e.lineWidth,
        a = e.labelHorizontalShift,
        o = ((t = a), (n = 1e14), Math.round((t + Number.EPSILON) * n) / n);
    return 0 === o
        ? "middle"
        : r > 100
        ? o > 0
            ? "start"
            : "end"
        : r < 100 - l
        ? o > 0
            ? "end"
            : "start"
        : "middle";
}
function $n(e, t) {
    return e.map(function (e, n) {
        var r,
            l,
            a,
            o,
            i = null != (r = qn(t.segmentsShift, n)) ? r : 0,
            s = Vn(t.radius, t.labelPosition) + i,
            u = Gn(Yn(e.startAngle, e.degrees), s),
            c = u.dx,
            f = u.dy,
            d = {
                x: t.center[0],
                y: t.center[1],
                dx: c,
                dy: f,
                textAnchor: Qn({
                    labelPosition: t.labelPosition,
                    lineWidth: t.lineWidth,
                    labelHorizontalShift: c,
                }),
                dataEntry: e,
                dataIndex: n,
                style: qn(t.labelStyle, n),
            };
        return (
            t.label &&
            ((l = t.label),
            "string" == typeof (o = l((a = d))) || "number" == typeof o
                ? ft.createElement(
                      Xn,
                      Object.assign(
                          { key: "label-" + (a.dataEntry.key || a.dataIndex) },
                          a
                      ),
                      o
                  )
                : ft.isValidElement(o)
                ? o
                : null)
        );
    });
}
var Jn = function (e, t, n, r, l) {
    var a = l - r;
    if (0 === a) return [];
    var o = n * Math.cos(r) + e,
        i = n * Math.sin(r) + t,
        s = n * Math.cos(l) + e,
        u = n * Math.sin(l) + t;
    return [
        ["M", o, i],
        [
            "A",
            n,
            n,
            0,
            Math.abs(a) <= Math.PI ? "0" : "1",
            a < 0 ? "0" : "1",
            s,
            u,
        ],
    ];
};
function er(e) {
    var t,
        n,
        r = e.cx,
        l = e.cy,
        a = e.lengthAngle,
        o = e.lineWidth,
        i = e.radius,
        s = e.shift,
        u = void 0 === s ? 0 : s,
        c = e.reveal,
        f = e.rounded,
        d = e.startAngle,
        m = e.title,
        p = Kn(e, [
            "cx",
            "cy",
            "lengthAngle",
            "lineWidth",
            "radius",
            "shift",
            "reveal",
            "rounded",
            "startAngle",
            "title",
        ]),
        h = i - o / 2,
        v = Gn(Yn(d, a), u),
        _ = (function (e, t, n, r, l) {
            var a = Wn(r, -359.999, 359.999);
            return Jn(e, t, l, Bn(n), Bn(n + a))
                .map(function (e) {
                    return e.join(" ");
                })
                .join(" ");
        })(r + v.dx, l + v.dy, d, a, h);
    if (Zn(c)) {
        var g = Bn(h) * a;
        n = (t = Math.abs(g)) - Vn(t, c);
    }
    return ft.createElement(
        "path",
        Object.assign(
            {
                d: _,
                fill: "none",
                strokeWidth: o,
                strokeDasharray: t,
                strokeDashoffset: n,
                strokeLinecap: f ? "round" : void 0,
            },
            p
        ),
        m && ft.createElement("title", null, m)
    );
}
function tr(e, t) {
    return (
        e &&
        function (n) {
            e(n, t);
        }
    );
}
function nr(e, t, n) {
    var r =
            null != n
                ? n
                : (function (e) {
                      return e.animate && !Zn(e.reveal) ? 100 : e.reveal;
                  })(t),
        l = t.radius,
        a = t.center,
        o = a[0],
        i = a[1],
        s = Vn(l, t.lineWidth),
        u = e.map(function (e, n) {
            var a,
                u,
                c,
                f,
                d = qn(t.segmentsStyle, n);
            return ft.createElement(er, {
                cx: o,
                cy: i,
                key: e.key || n,
                lengthAngle: e.degrees,
                lineWidth: s,
                radius: l,
                rounded: t.rounded,
                reveal: r,
                shift: qn(t.segmentsShift, n),
                startAngle: e.startAngle,
                title: e.title,
                style: Object.assign(
                    {},
                    d,
                    t.animate &&
                        ((a = t.animationDuration),
                        (u = t.animationEasing),
                        (c = d),
                        (f = "stroke-dashoffset " + a + "ms " + u),
                        c && c.transition && (f = f + "," + c.transition),
                        { transition: f })
                ),
                stroke: e.color,
                tabIndex: t.segmentsTabIndex,
                onBlur: tr(t.onBlur, n),
                onClick: tr(t.onClick, n),
                onFocus: tr(t.onFocus, n),
                onKeyDown: tr(t.onKeyDown, n),
                onMouseOver: tr(t.onMouseOver, n),
                onMouseOut: tr(t.onMouseOut, n),
            });
        });
    return (
        t.background &&
            u.unshift(
                ft.createElement(er, {
                    cx: o,
                    cy: i,
                    key: "bg",
                    lengthAngle: t.lengthAngle,
                    lineWidth: s,
                    radius: l,
                    rounded: t.rounded,
                    startAngle: t.startAngle,
                    stroke: t.background,
                })
            ),
        u
    );
}
function rr(e) {
    var t = re(e.animate ? 0 : null),
        n = t[0],
        r = t[1];
    ae(function () {
        if (e.animate)
            return (
                (t = setTimeout(function () {
                    (t = null),
                        (n = requestAnimationFrame(function () {
                            (n = null), r(null);
                        }));
                })),
                function () {
                    t && clearTimeout(t), n && cancelAnimationFrame(n);
                }
            );
        var t, n;
    }, []);
    var l = (function (e) {
        for (
            var t = e.data,
                n = e.lengthAngle,
                r = e.totalValue,
                l = e.paddingAngle,
                a = e.startAngle,
                o =
                    r ||
                    (function (e) {
                        for (var t = 0, n = 0; n < e.length; n++)
                            t += e[n].value;
                        return t;
                    })(t),
                i = Wn(n, -360, 360),
                s = 360 === Math.abs(i) ? t.length : t.length - 1,
                u = Math.abs(l) * Math.sign(n),
                c = i - u * s,
                f = 0,
                d = [],
                m = 0;
            m < t.length;
            m++
        ) {
            var p = t[m],
                h = 0 === o ? 0 : (p.value / o) * 100,
                v = Vn(c, h),
                _ = f + a;
            (f = f + v + u),
                d.push(
                    Object.assign(
                        { percentage: h, startAngle: _, degrees: v },
                        p
                    )
                );
        }
        return d;
    })(e);
    return ft.createElement(
        "svg",
        {
            viewBox: "0 0 " + e.viewBoxSize[0] + " " + e.viewBoxSize[1],
            width: "100%",
            height: "100%",
            className: e.className,
            style: e.style,
        },
        nr(l, e, n),
        e.label && $n(l, e),
        e.children
    );
}
rr.defaultProps = {
    animationDuration: 500,
    animationEasing: "ease-out",
    center: [50, 50],
    data: [],
    labelPosition: 50,
    lengthAngle: 360,
    lineWidth: 100,
    paddingAngle: 0,
    radius: 50,
    startAngle: 0,
    viewBoxSize: [100, 100],
};
"undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self && self;
function lr(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
}
function ar(e) {
    if (e.__esModule) return e;
    var t = Object.defineProperty({}, "__esModule", { value: !0 });
    return (
        Object.keys(e).forEach(function (n) {
            var r = Object.getOwnPropertyDescriptor(e, n);
            Object.defineProperty(
                t,
                n,
                r.get
                    ? r
                    : {
                          enumerable: !0,
                          get: function () {
                              return e[n];
                          },
                      }
            );
        }),
        t
    );
}
var or,
    ir,
    sr,
    ur = { exports: {} };
(or = ur),
    (ir = ur.exports),
    (sr = (function () {
        var e = null,
            t = {};
        h();
        var n = [],
            r = function (t) {
                if (
                    void 0 !== (t = t || {}).seed &&
                    null !== t.seed &&
                    t.seed === parseInt(t.seed, 10)
                )
                    e = t.seed;
                else if ("string" == typeof t.seed) e = w(t.seed);
                else {
                    if (void 0 !== t.seed && null !== t.seed)
                        throw new TypeError(
                            "The seed value must be an integer or string"
                        );
                    e = null;
                }
                var s, u;
                if (null !== t.count && void 0 !== t.count) {
                    for (var c = t.count, f = [], d = 0; d < t.count; d++)
                        n.push(!1);
                    for (t.count = null; c > f.length; ) {
                        var m = r(t);
                        null !== e && (t.seed = e), f.push(m);
                    }
                    return (t.count = c), f;
                }
                return i([(s = l(t)), (u = a(s, t)), o(s, u, t)], t);
            };
        function l(e) {
            if (n.length > 0) {
                var t = d((a = y(e.hue))),
                    r = (a[1] - a[0]) / n.length,
                    l = parseInt((t - a[0]) / r);
                return (
                    !0 === n[l] ? (l = (l + 2) % n.length) : (n[l] = !0),
                    (t = d(
                        (a = [(a[0] + l * r) % 359, (a[0] + (l + 1) * r) % 359])
                    )) < 0 && (t = 360 + t),
                    t
                );
            }
            var a;
            return (t = d((a = u(e.hue)))) < 0 && (t = 360 + t), t;
        }
        function a(e, t) {
            if ("monochrome" === t.hue) return 0;
            if ("random" === t.luminosity) return d([0, 100]);
            var n = c(e),
                r = n[0],
                l = n[1];
            switch (t.luminosity) {
                case "bright":
                    r = 55;
                    break;
                case "dark":
                    r = l - 10;
                    break;
                case "light":
                    l = 55;
            }
            return d([r, l]);
        }
        function o(e, t, n) {
            var r = s(e, t),
                l = 100;
            switch (n.luminosity) {
                case "dark":
                    l = r + 20;
                    break;
                case "light":
                    r = (l + r) / 2;
                    break;
                case "random":
                    (r = 0), (l = 100);
            }
            return d([r, l]);
        }
        function i(e, t) {
            switch (t.format) {
                case "hsvArray":
                    return e;
                case "hslArray":
                    return g(e);
                case "hsl":
                    var n = g(e);
                    return "hsl(" + n[0] + ", " + n[1] + "%, " + n[2] + "%)";
                case "hsla":
                    var r = g(e),
                        l = t.alpha || Math.random();
                    return (
                        "hsla(" +
                        r[0] +
                        ", " +
                        r[1] +
                        "%, " +
                        r[2] +
                        "%, " +
                        l +
                        ")"
                    );
                case "rgbArray":
                    return v(e);
                case "rgb":
                    return "rgb(" + v(e).join(", ") + ")";
                case "rgba":
                    var a = v(e);
                    return (
                        (l = t.alpha || Math.random()),
                        "rgba(" + a.join(", ") + ", " + l + ")"
                    );
                default:
                    return m(e);
            }
        }
        function s(e, t) {
            for (var n = f(e).lowerBounds, r = 0; r < n.length - 1; r++) {
                var l = n[r][0],
                    a = n[r][1],
                    o = n[r + 1][0],
                    i = n[r + 1][1];
                if (t >= l && t <= o) {
                    var s = (i - a) / (o - l);
                    return s * t + (a - s * l);
                }
            }
            return 0;
        }
        function u(e) {
            if ("number" == typeof parseInt(e)) {
                var n = parseInt(e);
                if (n < 360 && n > 0) return [n, n];
            }
            if ("string" == typeof e)
                if (t[e]) {
                    var r = t[e];
                    if (r.hueRange) return r.hueRange;
                } else if (e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
                    var l = _(e)[0];
                    return [l, l];
                }
            return [0, 360];
        }
        function c(e) {
            return f(e).saturationRange;
        }
        function f(e) {
            for (var n in (e >= 334 && e <= 360 && (e -= 360), t)) {
                var r = t[n];
                if (r.hueRange && e >= r.hueRange[0] && e <= r.hueRange[1])
                    return t[n];
            }
            return "Color not found";
        }
        function d(t) {
            if (null === e) {
                var n = 0.618033988749895,
                    r = Math.random();
                return (
                    (r += n), (r %= 1), Math.floor(t[0] + r * (t[1] + 1 - t[0]))
                );
            }
            var l = t[1] || 1,
                a = t[0] || 0,
                o = (e = (9301 * e + 49297) % 233280) / 233280;
            return Math.floor(a + o * (l - a));
        }
        function m(e) {
            var t = v(e);
            function n(e) {
                var t = e.toString(16);
                return 1 == t.length ? "0" + t : t;
            }
            return "#" + n(t[0]) + n(t[1]) + n(t[2]);
        }
        function p(e, n, r) {
            var l = r[0][0],
                a = r[r.length - 1][0],
                o = r[r.length - 1][1],
                i = r[0][1];
            t[e] = {
                hueRange: n,
                lowerBounds: r,
                saturationRange: [l, a],
                brightnessRange: [o, i],
            };
        }
        function h() {
            p("monochrome", null, [
                [0, 0],
                [100, 0],
            ]),
                p(
                    "red",
                    [-26, 18],
                    [
                        [20, 100],
                        [30, 92],
                        [40, 89],
                        [50, 85],
                        [60, 78],
                        [70, 70],
                        [80, 60],
                        [90, 55],
                        [100, 50],
                    ]
                ),
                p(
                    "orange",
                    [18, 46],
                    [
                        [20, 100],
                        [30, 93],
                        [40, 88],
                        [50, 86],
                        [60, 85],
                        [70, 70],
                        [100, 70],
                    ]
                ),
                p(
                    "yellow",
                    [46, 62],
                    [
                        [25, 100],
                        [40, 94],
                        [50, 89],
                        [60, 86],
                        [70, 84],
                        [80, 82],
                        [90, 80],
                        [100, 75],
                    ]
                ),
                p(
                    "green",
                    [62, 178],
                    [
                        [30, 100],
                        [40, 90],
                        [50, 85],
                        [60, 81],
                        [70, 74],
                        [80, 64],
                        [90, 50],
                        [100, 40],
                    ]
                ),
                p(
                    "blue",
                    [178, 257],
                    [
                        [20, 100],
                        [30, 86],
                        [40, 80],
                        [50, 74],
                        [60, 60],
                        [70, 52],
                        [80, 44],
                        [90, 39],
                        [100, 35],
                    ]
                ),
                p(
                    "purple",
                    [257, 282],
                    [
                        [20, 100],
                        [30, 87],
                        [40, 79],
                        [50, 70],
                        [60, 65],
                        [70, 59],
                        [80, 52],
                        [90, 45],
                        [100, 42],
                    ]
                ),
                p(
                    "pink",
                    [282, 334],
                    [
                        [20, 100],
                        [30, 90],
                        [40, 86],
                        [60, 84],
                        [80, 80],
                        [90, 75],
                        [100, 73],
                    ]
                );
        }
        function v(e) {
            var t = e[0];
            0 === t && (t = 1), 360 === t && (t = 359), (t /= 360);
            var n = e[1] / 100,
                r = e[2] / 100,
                l = Math.floor(6 * t),
                a = 6 * t - l,
                o = r * (1 - n),
                i = r * (1 - a * n),
                s = r * (1 - (1 - a) * n),
                u = 256,
                c = 256,
                f = 256;
            switch (l) {
                case 0:
                    (u = r), (c = s), (f = o);
                    break;
                case 1:
                    (u = i), (c = r), (f = o);
                    break;
                case 2:
                    (u = o), (c = r), (f = s);
                    break;
                case 3:
                    (u = o), (c = i), (f = r);
                    break;
                case 4:
                    (u = s), (c = o), (f = r);
                    break;
                case 5:
                    (u = r), (c = o), (f = i);
            }
            return [
                Math.floor(255 * u),
                Math.floor(255 * c),
                Math.floor(255 * f),
            ];
        }
        function _(e) {
            e =
                3 === (e = e.replace(/^#/, "")).length
                    ? e.replace(/(.)/g, "$1$1")
                    : e;
            var t = parseInt(e.substr(0, 2), 16) / 255,
                n = parseInt(e.substr(2, 2), 16) / 255,
                r = parseInt(e.substr(4, 2), 16) / 255,
                l = Math.max(t, n, r),
                a = l - Math.min(t, n, r),
                o = l ? a / l : 0;
            switch (l) {
                case t:
                    return [(((n - r) / a) % 6) * 60 || 0, o, l];
                case n:
                    return [60 * ((r - t) / a + 2) || 0, o, l];
                case r:
                    return [60 * ((t - n) / a + 4) || 0, o, l];
            }
        }
        function g(e) {
            var t = e[0],
                n = e[1] / 100,
                r = e[2] / 100,
                l = (2 - n) * r;
            return [
                t,
                Math.round(((n * r) / (l < 1 ? l : 2 - l)) * 1e4) / 100,
                (l / 2) * 100,
            ];
        }
        function w(e) {
            for (
                var t = 0, n = 0;
                n !== e.length && !(t >= Number.MAX_SAFE_INTEGER);
                n++
            )
                t += e.charCodeAt(n);
            return t;
        }
        function y(e) {
            if (isNaN(e)) {
                if ("string" == typeof e)
                    if (t[e]) {
                        var n = t[e];
                        if (n.hueRange) return n.hueRange;
                    } else if (e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i))
                        return f(_(e)[0]).hueRange;
            } else {
                var r = parseInt(e);
                if (r < 360 && r > 0) return f(e).hueRange;
            }
            return [0, 360];
        }
        return r;
    })()),
    or && or.exports && (ir = or.exports = sr),
    (ir.randomColor = sr);
var cr = ur.exports,
    fr = { exports: {} },
    dr = ar(dt);
function mr(e, t, n, r) {
    let l;
    n = n || 0;
    let a = (r = r || t.length - 1) <= 2147483647;
    for (; r - n > 1; )
        (l = a ? (n + r) >> 1 : Or((n + r) / 2)), t[l] < e ? (n = l) : (r = l);
    return e - t[n] <= t[r] - e ? n : r;
}
function pr(e, t, n, r) {
    for (let l = 1 == r ? t : n; l >= t && l <= n; l += r)
        if (null != e[l]) return l;
    return -1;
}
const hr = [0, 0];
function vr(e, t, n, r) {
    return (hr[0] = n < 0 ? Xr(e, -n) : e), (hr[1] = r < 0 ? Xr(t, -r) : t), hr;
}
function _r(e, t, n, r) {
    let l,
        a,
        o,
        i = jr(e),
        s = 10 == n ? Lr : Rr;
    return (
        e == t && (-1 == i ? ((e *= n), (t /= n)) : ((e /= n), (t *= n))),
        r
            ? ((l = Or(s(e))),
              (a = Pr(s(t))),
              (o = vr(Ir(n, l), Ir(n, a), l, a)),
              (e = o[0]),
              (t = o[1]))
            : ((l = Or(s(Nr(e)))),
              (a = Or(s(Nr(t)))),
              (o = vr(Ir(n, l), Ir(n, a), l, a)),
              (e = Kr(e, o[0])),
              (t = qr(t, o[1]))),
        [e, t]
    );
}
function gr(e, t, n, r) {
    let l = _r(e, t, n, r);
    return 0 == e && (l[0] = 0), 0 == t && (l[1] = 0), l;
}
const wr = { mode: 3, pad: 0.1 },
    yr = { pad: 0, soft: null, mode: 0 },
    br = { min: yr, max: yr };
function Er(e, t, n, r) {
    return al(n)
        ? kr(e, t, n)
        : ((yr.pad = n),
          (yr.soft = r ? 0 : null),
          (yr.mode = r ? 3 : 0),
          kr(e, t, br));
}
function xr(e, t) {
    return null == e ? t : e;
}
function kr(e, t, n) {
    let r = n.min,
        l = n.max,
        a = xr(r.pad, 0),
        o = xr(l.pad, 0),
        i = xr(r.hard, -Hr),
        s = xr(l.hard, Hr),
        u = xr(r.soft, Hr),
        c = xr(l.soft, -Hr),
        f = xr(r.mode, 0),
        d = xr(l.mode, 0),
        m = t - e;
    m < 1e-9 &&
        ((m = 0),
        (0 != e && 0 != t) ||
            ((m = 1e-9),
            2 == f && u != Hr && (a = 0),
            2 == d && c != -Hr && (o = 0)));
    let p = m || Nr(t) || 1e3,
        h = Lr(p),
        v = Ir(10, Or(h)),
        _ = Xr(Kr(e - p * (0 == m ? (0 == e ? 0.1 : 1) : a), v / 10), 9),
        g =
            e >= u && (1 == f || (3 == f && _ <= u) || (2 == f && _ >= u))
                ? u
                : Hr,
        w = Dr(i, _ < g && e >= g ? g : Tr(g, _)),
        y = Xr(qr(t + p * (0 == m ? (0 == t ? 0.1 : 1) : o), v / 10), 9),
        b =
            t <= c && (1 == d || (3 == d && y >= c) || (2 == d && y <= c))
                ? c
                : -Hr,
        E = Tr(s, y > b && t <= b ? b : Dr(b, y));
    return w == E && 0 == w && (E = 100), [w, E];
}
const Sr = new Intl.NumberFormat(navigator.language).format,
    Ar = Math,
    Cr = Ar.PI,
    Nr = Ar.abs,
    Or = Ar.floor,
    Mr = Ar.round,
    Pr = Ar.ceil,
    Tr = Ar.min,
    Dr = Ar.max,
    Ir = Ar.pow,
    jr = Ar.sign,
    Lr = Ar.log10,
    Rr = Ar.log2,
    Ur = (e, t = 1) => Ar.asinh(e / t),
    Hr = 1 / 0;
function Fr(e, t) {
    return Mr(e / t) * t;
}
function zr(e, t, n) {
    return Tr(Dr(e, t), n);
}
function Br(e) {
    return "function" == typeof e ? e : () => e;
}
const Wr = (e) => e,
    Vr = (e, t) => t,
    Yr = (e) => null,
    Gr = (e) => !0,
    Zr = (e, t) => e == t;
function qr(e, t) {
    return Pr(e / t) * t;
}
function Kr(e, t) {
    return Or(e / t) * t;
}
function Xr(e, t) {
    return Mr(e * (t = 10 ** t)) / t;
}
const Qr = new Map();
function $r(e) {
    return (("" + e).split(".")[1] || "").length;
}
function Jr(e, t, n, r) {
    let l = [],
        a = r.map($r);
    for (let o = t; o < n; o++) {
        let t = Nr(o),
            n = Xr(Ir(e, o), t);
        for (let e = 0; e < r.length; e++) {
            let i = r[e] * n,
                s = (i >= 0 && o >= 0 ? 0 : t) + (o >= a[e] ? 0 : a[e]),
                u = Xr(i, s);
            l.push(u), Qr.set(u, s);
        }
    }
    return l;
}
const el = {},
    tl = [],
    nl = [null, null],
    rl = Array.isArray;
function ll(e) {
    return "string" == typeof e;
}
function al(e) {
    let t = !1;
    if (null != e) {
        let n = e.constructor;
        t = null == n || n == Object;
    }
    return t;
}
function ol(e) {
    return null != e && "object" == typeof e;
}
function il(e, t = al) {
    let n;
    if (rl(e)) {
        let r = e.find((e) => null != e);
        if (rl(r) || t(r)) {
            n = Array(e.length);
            for (let r = 0; r < e.length; r++) n[r] = il(e[r], t);
        } else n = e.slice();
    } else if (t(e)) {
        n = {};
        for (let r in e) n[r] = il(e[r], t);
    } else n = e;
    return n;
}
function sl(e) {
    let t = arguments;
    for (let n = 1; n < t.length; n++) {
        let r = t[n];
        for (let t in r) al(e[t]) ? sl(e[t], il(r[t])) : (e[t] = il(r[t]));
    }
    return e;
}
function ul(e, t, n) {
    for (let r, l = 0, a = -1; l < t.length; l++) {
        let o = t[l];
        if (o > a) {
            for (r = o - 1; r >= 0 && null == e[r]; ) e[r--] = null;
            for (r = o + 1; r < n && null == e[r]; ) e[(a = r++)] = null;
        }
    }
}
const cl =
        "undefined" == typeof queueMicrotask
            ? (e) => Promise.resolve().then(e)
            : queueMicrotask,
    fl = "u-off",
    dl = document,
    ml = window;
let pl, hl;
function vl(e, t) {
    if (null != t) {
        let n = e.classList;
        !n.contains(t) && n.add(t);
    }
}
function _l(e, t) {
    let n = e.classList;
    n.contains(t) && n.remove(t);
}
function gl(e, t, n) {
    e.style[t] = n + "px";
}
function wl(e, t, n, r) {
    let l = dl.createElement(e);
    return null != t && vl(l, t), null != n && n.insertBefore(l, r), l;
}
function yl(e, t) {
    return wl("div", e, t);
}
const bl = new WeakMap();
function El(e, t, n, r, l) {
    let a = "translate(" + t + "px," + n + "px)";
    a != bl.get(e) &&
        ((e.style.transform = a),
        bl.set(e, a),
        t < 0 || n < 0 || t > r || n > l ? vl(e, fl) : _l(e, fl));
}
const xl = new WeakMap();
function kl(e, t, n) {
    let r = t + n;
    r != xl.get(e) &&
        (xl.set(e, r), (e.style.background = t), (e.style.borderColor = n));
}
const Sl = new WeakMap();
const Al = { passive: !0 },
    Cl = sl({ capture: !0 }, Al);
function Nl(e, t, n, r) {
    t.addEventListener(e, n, r ? Cl : Al);
}
function Ol(e, t, n, r) {
    t.removeEventListener(e, n, r ? Cl : Al);
}
!(function e() {
    let t = devicePixelRatio;
    pl != t &&
        ((pl = t),
        hl && Ol("change", hl, e),
        (hl = matchMedia(
            `(min-resolution: ${pl - 0.001}dppx) and (max-resolution: ${
                pl + 0.001
            }dppx)`
        )),
        Nl("change", hl, e),
        ml.dispatchEvent(new CustomEvent("dppxchange")));
})();
const Ml = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    Pl = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
function Tl(e) {
    return e.slice(0, 3);
}
const Dl = Pl.map(Tl),
    Il = Ml.map(Tl),
    jl = { MMMM: Ml, MMM: Il, WWWW: Pl, WWW: Dl };
function Ll(e) {
    return (e < 10 ? "0" : "") + e;
}
const Rl = {
    YYYY: (e) => e.getFullYear(),
    YY: (e) => (e.getFullYear() + "").slice(2),
    MMMM: (e, t) => t.MMMM[e.getMonth()],
    MMM: (e, t) => t.MMM[e.getMonth()],
    MM: (e) => Ll(e.getMonth() + 1),
    M: (e) => e.getMonth() + 1,
    DD: (e) => Ll(e.getDate()),
    D: (e) => e.getDate(),
    WWWW: (e, t) => t.WWWW[e.getDay()],
    WWW: (e, t) => t.WWW[e.getDay()],
    HH: (e) => Ll(e.getHours()),
    H: (e) => e.getHours(),
    h: (e) => {
        let t = e.getHours();
        return 0 == t ? 12 : t > 12 ? t - 12 : t;
    },
    AA: (e) => (e.getHours() >= 12 ? "PM" : "AM"),
    aa: (e) => (e.getHours() >= 12 ? "pm" : "am"),
    a: (e) => (e.getHours() >= 12 ? "p" : "a"),
    mm: (e) => Ll(e.getMinutes()),
    m: (e) => e.getMinutes(),
    ss: (e) => Ll(e.getSeconds()),
    s: (e) => e.getSeconds(),
    fff: (e) => {
        return ((t = e.getMilliseconds()) < 10 ? "00" : t < 100 ? "0" : "") + t;
        var t;
    },
};
function Ul(e, t) {
    t = t || jl;
    let n,
        r = [],
        l = /\{([a-z]+)\}|[^{]+/gi;
    for (; (n = l.exec(e)); ) r.push("{" == n[0][0] ? Rl[n[1]] : n[0]);
    return (e) => {
        let n = "";
        for (let l = 0; l < r.length; l++)
            n += "string" == typeof r[l] ? r[l] : r[l](e, t);
        return n;
    };
}
const Hl = new Intl.DateTimeFormat().resolvedOptions().timeZone;
const Fl = (e) => e % 1 == 0,
    zl = [1, 2, 2.5, 5],
    Bl = Jr(10, -16, 0, zl),
    Wl = Jr(10, 0, 16, zl),
    Vl = Wl.filter(Fl),
    Yl = Bl.concat(Wl),
    Gl = "{M}/{D}",
    Zl = "\n" + Gl,
    ql = Zl + "/{YY}",
    Kl = "{h}:{mm}{aa}",
    Xl = null;
function Ql(e) {
    let t = 1e3 * e,
        n = 60 * t,
        r = 60 * n,
        l = 24 * r,
        a = 30 * l,
        o = 365 * l;
    return [
        (1 == e ? Jr(10, 0, 3, zl).filter(Fl) : Jr(10, -3, 0, zl)).concat([
            t,
            5 * t,
            10 * t,
            15 * t,
            30 * t,
            n,
            5 * n,
            10 * n,
            15 * n,
            30 * n,
            r,
            2 * r,
            3 * r,
            4 * r,
            6 * r,
            8 * r,
            12 * r,
            l,
            2 * l,
            3 * l,
            4 * l,
            5 * l,
            6 * l,
            7 * l,
            8 * l,
            9 * l,
            10 * l,
            15 * l,
            a,
            2 * a,
            3 * a,
            4 * a,
            6 * a,
            o,
            2 * o,
            5 * o,
            10 * o,
            25 * o,
            50 * o,
            100 * o,
        ]),
        [
            [o, "{YYYY}", Xl, Xl, Xl, Xl, Xl, Xl, 1],
            [28 * l, "{MMM}", "\n{YYYY}", Xl, Xl, Xl, Xl, Xl, 1],
            [l, Gl, "\n{YYYY}", Xl, Xl, Xl, Xl, Xl, 1],
            [r, "{h}{aa}", ql, Xl, Zl, Xl, Xl, Xl, 1],
            [n, Kl, ql, Xl, Zl, Xl, Xl, Xl, 1],
            [
                t,
                ":{ss}",
                ql + " " + Kl,
                Xl,
                Zl + " " + Kl,
                Xl,
                "\n{h}:{mm}{aa}",
                Xl,
                1,
            ],
            [
                e,
                ":{ss}.{fff}",
                ql + " " + Kl,
                Xl,
                Zl + " " + Kl,
                Xl,
                "\n{h}:{mm}{aa}",
                Xl,
                1,
            ],
        ],
        function (t) {
            return (i, s, u, c, f, d) => {
                let m = [],
                    p = f >= o,
                    h = f >= a && f < o,
                    v = t(u),
                    _ = Xr(v * e, 3),
                    g = oa(
                        v.getFullYear(),
                        p ? 0 : v.getMonth(),
                        h || p ? 1 : v.getDate()
                    ),
                    w = Xr(g * e, 3);
                if (h || p) {
                    let n = h ? f / a : 0,
                        r = p ? f / o : 0,
                        l =
                            _ == w
                                ? _
                                : Xr(
                                      oa(
                                          g.getFullYear() + r,
                                          g.getMonth() + n,
                                          1
                                      ) * e,
                                      3
                                  ),
                        i = new Date(Mr(l / e)),
                        s = i.getFullYear(),
                        u = i.getMonth();
                    for (let a = 0; l <= c; a++) {
                        let o = oa(s + r * a, u + n * a, 1),
                            i = o - t(Xr(o * e, 3));
                        (l = Xr((+o + i) * e, 3)), l <= c && m.push(l);
                    }
                } else {
                    let a = f >= l ? l : f,
                        o = w + (Or(u) - Or(_)) + qr(_ - w, a);
                    m.push(o);
                    let p = t(o),
                        h =
                            p.getHours() +
                            p.getMinutes() / n +
                            p.getSeconds() / r,
                        v = f / r,
                        g = d / i.axes[s]._space;
                    for (; (o = Xr(o + f, 1 == e ? 0 : 3)), !(o > c); )
                        if (v > 1) {
                            let e = Or(Xr(h + v, 6)) % 24,
                                n = t(o).getHours() - e;
                            n > 1 && (n = -1),
                                (o -= n * r),
                                (h = (h + v) % 24),
                                Xr((o - m[m.length - 1]) / f, 3) * g >= 0.7 &&
                                    m.push(o);
                        } else m.push(o);
                }
                return m;
            };
        },
    ];
}
const [$l, Jl, ea] = Ql(1),
    [ta, na, ra] = Ql(0.001);
function la(e, t) {
    return e.map((e) =>
        e.map((n, r) =>
            0 == r || 8 == r || null == n
                ? n
                : t(1 == r || 0 == e[8] ? n : e[1] + n)
        )
    );
}
function aa(e, t) {
    return (n, r, l, a, o) => {
        let i,
            s,
            u,
            c,
            f,
            d,
            m = t.find((e) => o >= e[0]) || t[t.length - 1];
        return r.map((t) => {
            let n = e(t),
                r = n.getFullYear(),
                l = n.getMonth(),
                a = n.getDate(),
                o = n.getHours(),
                p = n.getMinutes(),
                h = n.getSeconds(),
                v =
                    (r != i && m[2]) ||
                    (l != s && m[3]) ||
                    (a != u && m[4]) ||
                    (o != c && m[5]) ||
                    (p != f && m[6]) ||
                    (h != d && m[7]) ||
                    m[1];
            return (i = r), (s = l), (u = a), (c = o), (f = p), (d = h), v(n);
        });
    };
}
function oa(e, t, n) {
    return new Date(e, t, n);
}
function ia(e, t) {
    return t(e);
}
Jr(2, -53, 53, [1]);
function sa(e, t) {
    return (n, r) => t(e(r));
}
const ua = {
    show: !0,
    live: !0,
    isolate: !1,
    markers: {
        show: !0,
        width: 2,
        stroke: function (e, t) {
            let n = e.series[t];
            return n.width
                ? n.stroke(e, t)
                : n.points.width
                ? n.points.stroke(e, t)
                : null;
        },
        fill: function (e, t) {
            return e.series[t].fill(e, t);
        },
        dash: "solid",
    },
    idx: null,
    idxs: null,
    values: [],
};
const ca = [0, 0];
function fa(e, t, n) {
    return (e) => {
        0 == e.button && n(e);
    };
}
function da(e, t, n) {
    return n;
}
const ma = {
        show: !0,
        x: !0,
        y: !0,
        lock: !1,
        move: function (e, t, n) {
            return (ca[0] = t), (ca[1] = n), ca;
        },
        points: {
            show: function (e, t) {
                let n = e.cursor.points,
                    r = yl(),
                    l = n.size(e, t);
                gl(r, "width", l), gl(r, "height", l);
                let a = l / -2;
                gl(r, "marginLeft", a), gl(r, "marginTop", a);
                let o = n.width(e, t, l);
                return o && gl(r, "borderWidth", o), r;
            },
            size: function (e, t) {
                return Pa(e.series[t].points.width, 1);
            },
            width: 0,
            stroke: function (e, t) {
                let n = e.series[t].points;
                return n._stroke || n._fill;
            },
            fill: function (e, t) {
                let n = e.series[t].points;
                return n._fill || n._stroke;
            },
        },
        bind: {
            mousedown: fa,
            mouseup: fa,
            click: fa,
            dblclick: fa,
            mousemove: da,
            mouseleave: da,
            mouseenter: da,
        },
        drag: {
            setScale: !0,
            x: !0,
            y: !1,
            dist: 0,
            uni: null,
            _x: !1,
            _y: !1,
        },
        focus: { prox: -1 },
        left: -10,
        top: -10,
        idx: null,
        dataIdx: function (e, t, n) {
            return n;
        },
        idxs: null,
    },
    pa = { show: !0, stroke: "rgba(0,0,0,0.07)", width: 2, filter: Vr },
    ha = sl({}, pa, { size: 10 }),
    va =
        '12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    _a = "bold " + va,
    ga = {
        show: !0,
        scale: "x",
        stroke: "#000",
        space: 50,
        gap: 5,
        size: 50,
        labelGap: 0,
        labelSize: 30,
        labelFont: _a,
        side: 2,
        grid: pa,
        ticks: ha,
        font: va,
        rotate: 0,
    },
    wa = {
        show: !0,
        scale: "x",
        auto: !1,
        sorted: 1,
        min: Hr,
        max: -Hr,
        idxs: [],
    };
function ya(e, t, n, r, l) {
    return t.map((e) => (null == e ? "" : Sr(e)));
}
function ba(e, t, n, r, l, a, o) {
    let i = [],
        s = Qr.get(l) || 0;
    for (let u = (n = o ? n : Xr(qr(n, l), s)); u <= r; u = Xr(u + l, s))
        i.push(Object.is(u, -0) ? 0 : u);
    return i;
}
function Ea(e, t, n, r, l, a, o) {
    const i = [],
        s = e.scales[e.axes[t].scale].log,
        u = Or((10 == s ? Lr : Rr)(n));
    (l = Ir(s, u)), u < 0 && (l = Xr(l, -u));
    let c = n;
    do {
        i.push(c), (c = Xr(c + l, Qr.get(l))), c >= l * s && (l = c);
    } while (c <= r);
    return i;
}
function xa(e, t, n, r, l, a, o) {
    let i = e.scales[e.axes[t].scale].asinh,
        s = r > i ? Ea(e, t, Dr(i, n), r, l) : [i],
        u = r >= 0 && n <= 0 ? [0] : [];
    return (n < -i ? Ea(e, t, Dr(i, -r), -n, l) : [i])
        .reverse()
        .map((e) => -e)
        .concat(u, s);
}
const ka = /./,
    Sa = /[12357]/,
    Aa = /[125]/,
    Ca = /1/;
function Na(e, t, n, r, l) {
    let a = e.axes[n],
        o = a.scale,
        i = e.scales[o];
    if (3 == i.distr && 2 == i.log) return t;
    let s = e.valToPos,
        u = a._space,
        c = s(10, o),
        f =
            s(9, o) - c >= u
                ? ka
                : s(7, o) - c >= u
                ? Sa
                : s(5, o) - c >= u
                ? Aa
                : Ca;
    return t.map((e) => ((4 == i.distr && 0 == e) || f.test(e) ? e : null));
}
function Oa(e, t) {
    return null == t ? "" : Sr(t);
}
const Ma = {
    show: !0,
    scale: "y",
    stroke: "#000",
    space: 30,
    gap: 5,
    size: 50,
    labelGap: 0,
    labelSize: 30,
    labelFont: _a,
    side: 3,
    grid: pa,
    ticks: ha,
    font: va,
    rotate: 0,
};
function Pa(e, t) {
    return Xr((3 + 2 * (e || 1)) * t, 3);
}
function Ta(e, t, n, r) {
    let l = e.scales[e.series[t].scale],
        a = e.bands && e.bands.some((e) => e.series[0] == t);
    return 3 == l.distr || a ? l.min : 0;
}
const Da = { scale: null, auto: !0, min: Hr, max: -Hr },
    Ia = {
        show: !0,
        auto: !0,
        sorted: 0,
        alpha: 1,
        facets: [sl({}, Da, { scale: "x" }), sl({}, Da, { scale: "y" })],
    },
    ja = {
        scale: "y",
        auto: !0,
        sorted: 0,
        show: !0,
        spanGaps: !1,
        gaps: (e, t, n, r, l) => l,
        alpha: 1,
        points: {
            show: function (e, t) {
                let { scale: n, idxs: r } = e.series[0],
                    l = e._data[0],
                    a = e.valToPos(l[r[0]], n, !0),
                    o = e.valToPos(l[r[1]], n, !0),
                    i = Nr(o - a) / (e.series[t].points.space * pl);
                return r[1] - r[0] <= i;
            },
            filter: null,
        },
        values: null,
        min: Hr,
        max: -Hr,
        idxs: [],
        path: null,
        clip: null,
    };
function La(e, t, n, r, l) {
    return n / 10;
}
const Ra = {
        time: !0,
        auto: !0,
        distr: 1,
        log: 10,
        asinh: 1,
        min: null,
        max: null,
        dir: 1,
        ori: 0,
    },
    Ua = sl({}, Ra, { time: !1, ori: 1 }),
    Ha = {};
function Fa(e, t) {
    let n = Ha[e];
    return (
        n ||
            ((n = {
                key: e,
                plots: [],
                sub(e) {
                    n.plots.push(e);
                },
                unsub(e) {
                    n.plots = n.plots.filter((t) => t != e);
                },
                pub(e, t, r, l, a, o, i) {
                    for (let s = 0; s < n.plots.length; s++)
                        n.plots[s] != t && n.plots[s].pub(e, t, r, l, a, o, i);
                },
            }),
            null != e && (Ha[e] = n)),
        n
    );
}
function za(e, t, n) {
    const r = e.series[t],
        l = e.scales,
        a = e.bbox,
        o = 2 == e.mode ? l[r.facets[0].scale] : l[e.series[0].scale];
    let i = e._data[0],
        s = e._data[t],
        u = o,
        c = 2 == e.mode ? l[r.facets[1].scale] : l[r.scale],
        f = a.left,
        d = a.top,
        m = a.width,
        p = a.height,
        h = e.valToPosH,
        v = e.valToPosV;
    return 0 == u.ori
        ? n(r, i, s, u, c, h, v, f, d, m, p, Ga, qa, Xa, $a, eo)
        : n(r, i, s, u, c, v, h, d, f, p, m, Za, Ka, Qa, Ja, to);
}
function Ba(e, t, n, r, l) {
    return za(e, t, (e, t, a, o, i, s, u, c, f, d, m) => {
        const p = o.dir * (0 == o.ori ? 1 : -1),
            h = 0 == o.ori ? qa : Ka;
        let v, _;
        1 == p ? ((v = n), (_ = r)) : ((v = r), (_ = n));
        let g = Fr(s(t[v], o, d, c), 0.5),
            w = Fr(u(a[v], i, m, f), 0.5),
            y = Fr(s(t[_], o, d, c), 0.5),
            b = Fr(u(i.max, i, m, f), 0.5),
            E = new Path2D(l);
        return h(E, y, b), h(E, g, b), h(E, g, w), E;
    });
}
function Wa(e, t, n, r, l, a) {
    let o = null;
    if (e.length > 0) {
        o = new Path2D();
        const i = 0 == t ? Xa : Qa;
        let s = n;
        for (let t = 0; t < e.length; t++) {
            let n = e[t];
            n[1] > n[0] && (i(o, s, r, n[0] - s, r + a), (s = n[1]));
        }
        i(o, s, r, n + l - s, r + a);
    }
    return o;
}
function Va(e, t, n) {
    let r = e[e.length - 1];
    r && r[0] == t ? (r[1] = n) : e.push([t, n]);
}
function Ya(e) {
    return 0 == e ? Wr : 1 == e ? Mr : (t) => Fr(t, e);
}
function Ga(e, t, n) {
    e.moveTo(t, n);
}
function Za(e, t, n) {
    e.moveTo(n, t);
}
function qa(e, t, n) {
    e.lineTo(t, n);
}
function Ka(e, t, n) {
    e.lineTo(n, t);
}
function Xa(e, t, n, r, l) {
    e.rect(t, n, r, l);
}
function Qa(e, t, n, r, l) {
    e.rect(n, t, l, r);
}
function $a(e, t, n, r, l, a) {
    e.arc(t, n, r, l, a);
}
function Ja(e, t, n, r, l, a) {
    e.arc(n, t, r, l, a);
}
function eo(e, t, n, r, l, a, o) {
    e.bezierCurveTo(t, n, r, l, a, o);
}
function to(e, t, n, r, l, a, o) {
    e.bezierCurveTo(n, t, l, r, o, a);
}
function no(e) {
    return (e, t, n, r, l) =>
        za(e, t, (t, a, o, i, s, u, c, f, d, m, p) => {
            let h,
                v,
                { pxRound: _, points: g } = t;
            0 == i.ori ? ((h = Ga), (v = $a)) : ((h = Za), (v = Ja));
            const w = Xr(g.width * pl, 3);
            let y = ((g.size - g.width) / 2) * pl,
                b = Xr(2 * y, 3),
                E = new Path2D(),
                x = new Path2D(),
                { left: k, top: S, width: A, height: C } = e.bbox;
            Xa(x, k - b, S - b, A + 2 * b, C + 2 * b);
            const N = (e) => {
                if (null != o[e]) {
                    let t = _(u(a[e], i, m, f)),
                        n = _(c(o[e], s, p, d));
                    h(E, t + y, n), v(E, t, n, y, 0, 2 * Cr);
                }
            };
            if (l) l.forEach(N);
            else for (let e = n; e <= r; e++) N(e);
            return { stroke: w > 0 ? E : null, fill: E, clip: x, flags: 3 };
        });
}
function ro(e) {
    return (t, n, r, l, a, o) => {
        r != l &&
            (a != r && o != r && e(t, n, r),
            a != l && o != l && e(t, n, l),
            e(t, n, o));
    };
}
const lo = ro(qa),
    ao = ro(Ka);
function oo() {
    return (e, t, n, r) =>
        za(e, t, (l, a, o, i, s, u, c, f, d, m, p) => {
            let h,
                v,
                _ = l.pxRound;
            0 == i.ori ? ((h = qa), (v = lo)) : ((h = Ka), (v = ao));
            const g = i.dir * (0 == i.ori ? 1 : -1),
                w = {
                    stroke: new Path2D(),
                    fill: null,
                    clip: null,
                    band: null,
                    gaps: null,
                    flags: 1,
                },
                y = w.stroke;
            let b,
                E,
                x,
                k,
                S = Hr,
                A = -Hr,
                C = [],
                N = _(u(a[1 == g ? n : r], i, m, f)),
                O = !1,
                M = !1,
                P = pr(o, n, r, 1 * g),
                T = pr(o, n, r, -1 * g),
                D = Fr(u(a[P], i, m, f), 0.5),
                I = Fr(u(a[T], i, m, f), 0.5);
            D > f && Va(C, f, D);
            for (let e = 1 == g ? n : r; e >= n && e <= r; e += g) {
                let t = _(u(a[e], i, m, f));
                if (t == N)
                    null != o[e]
                        ? ((E = _(c(o[e], s, p, d))),
                          S == Hr && (h(y, t, E), (b = E)),
                          (S = Tr(E, S)),
                          (A = Dr(E, A)))
                        : null === o[e] && (O = M = !0);
                else {
                    let n = !1;
                    S != Hr
                        ? (v(y, N, S, A, b, E), (x = k = N))
                        : O && ((n = !0), (O = !1)),
                        null != o[e]
                            ? ((E = _(c(o[e], s, p, d))),
                              h(y, t, E),
                              (S = A = b = E),
                              M && t - N > 1 && (n = !0),
                              (M = !1))
                            : ((S = Hr),
                              (A = -Hr),
                              null === o[e] &&
                                  ((O = !0), t - N > 1 && (n = !0))),
                        n && Va(C, x, t),
                        (N = t);
                }
            }
            if (
                (S != Hr && S != A && k != N && v(y, N, S, A, b, E),
                I < f + m && Va(C, I, f + m),
                null != l.fill)
            ) {
                let n = (w.fill = new Path2D(y)),
                    r = _(c(l.fillTo(e, t, l.min, l.max), s, p, d));
                h(n, I, r), h(n, D, r);
            }
            return (
                (w.gaps = C = l.gaps(e, t, n, r, C)),
                l.spanGaps || (w.clip = Wa(C, i.ori, f, d, m, p)),
                e.bands.length > 0 && (w.band = Ba(e, t, n, r, y)),
                w
            );
        });
}
function io(e, t, n, r, l, a) {
    const o = e.length;
    if (o < 2) return null;
    const i = new Path2D();
    if ((n(i, e[0], t[0]), 2 == o)) r(i, e[1], t[1]);
    else {
        let n = Array(o),
            r = Array(o - 1),
            a = Array(o - 1),
            s = Array(o - 1);
        for (let l = 0; l < o - 1; l++)
            (a[l] = t[l + 1] - t[l]),
                (s[l] = e[l + 1] - e[l]),
                (r[l] = a[l] / s[l]);
        n[0] = r[0];
        for (let e = 1; e < o - 1; e++)
            0 === r[e] || 0 === r[e - 1] || r[e - 1] > 0 != r[e] > 0
                ? (n[e] = 0)
                : ((n[e] =
                      (3 * (s[e - 1] + s[e])) /
                      ((2 * s[e] + s[e - 1]) / r[e - 1] +
                          (s[e] + 2 * s[e - 1]) / r[e])),
                  isFinite(n[e]) || (n[e] = 0));
        n[o - 1] = r[o - 2];
        for (let u = 0; u < o - 1; u++)
            l(
                i,
                e[u] + s[u] / 3,
                t[u] + (n[u] * s[u]) / 3,
                e[u + 1] - s[u] / 3,
                t[u + 1] - (n[u + 1] * s[u]) / 3,
                e[u + 1],
                t[u + 1]
            );
    }
    return i;
}
const so = new Set();
function uo() {
    so.forEach((e) => {
        e.syncRect(!0);
    });
}
Nl("resize", ml, uo), Nl("scroll", ml, uo, !0);
const co = oo(),
    fo = no();
function mo(e, t, n, r) {
    return (
        r ? [e[0], e[1]].concat(e.slice(2)) : [e[0]].concat(e.slice(1))
    ).map((e, r) => po(e, r, t, n));
}
function po(e, t, n, r) {
    return sl({}, 0 == t ? n : r, e);
}
function ho(e, t, n) {
    return null == t ? nl : [t, n];
}
const vo = ho;
function _o(e, t, n) {
    return null == t ? nl : Er(t, n, 0.1, !0);
}
function go(e, t, n, r) {
    return null == t ? nl : _r(t, n, e.scales[r].log, !1);
}
const wo = go;
function yo(e, t, n, r) {
    return null == t ? nl : gr(t, n, e.scales[r].log, !1);
}
const bo = yo;
function Eo(e) {
    let t, n;
    return [
        (e = e.replace(/(\d+)px/, (e, r) => (t = Mr((n = +r) * pl)) + "px")),
        t,
        n,
    ];
}
function xo(e) {
    e.show &&
        [e.font, e.labelFont].forEach((e) => {
            let t = Xr(e[2] * pl, 1);
            (e[0] = e[0].replace(/[0-9.]+px/, t + "px")), (e[1] = t);
        });
}
function ko(e, t, n) {
    var r;
    const l = { mode: null != (r = e.mode) ? r : 1 },
        a = l.mode;
    function o(e, t) {
        return (
            ((3 == t.distr
                ? Lr(e > 0 ? e : t.clamp(l, e, t.min, t.max, t.key))
                : 4 == t.distr
                ? Ur(e, t.asinh)
                : e) -
                t._min) /
            (t._max - t._min)
        );
    }
    function i(e, t, n, r) {
        let l = o(e, t);
        return r + n * (-1 == t.dir ? 1 - l : l);
    }
    function s(e, t, n, r) {
        let l = o(e, t);
        return r + n * (-1 == t.dir ? l : 1 - l);
    }
    function u(e, t, n, r) {
        return 0 == t.ori ? i(e, t, n, r) : s(e, t, n, r);
    }
    (l.valToPosH = i), (l.valToPosV = s);
    let c = !1;
    l.status = 0;
    const f = (l.root = yl("uplot"));
    if ((null != e.id && (f.id = e.id), vl(f, e.class), e.title)) {
        yl("u-title", f).textContent = e.title;
    }
    const d = wl("canvas"),
        m = (l.ctx = d.getContext("2d")),
        p = yl("u-wrap", f),
        h = (l.under = yl("u-under", p));
    p.appendChild(d);
    const v = (l.over = yl("u-over", p)),
        _ = +xr((e = il(e)).pxAlign, 1),
        g = Ya(_);
    (e.plugins || []).forEach((t) => {
        t.opts && (e = t.opts(l, e) || e);
    });
    const w = e.ms || 0.001,
        y = (l.series =
            1 == a
                ? mo(e.series || [], wa, ja, !1)
                : ((b = e.series || [null]),
                  (E = Ia),
                  b.map((e, t) => (0 == t ? null : sl({}, E, e)))));
    var b, E;
    const x = (l.axes = mo(e.axes || [], ga, Ma, !0)),
        k = (l.scales = {}),
        S = (l.bands = e.bands || []);
    S.forEach((e) => {
        e.fill = Br(e.fill || null);
    });
    const A = 2 == a ? y[1].facets[0].scale : y[0].scale,
        C = {
            axes: function () {
                for (let e = 0; e < x.length; e++) {
                    let t = x[e];
                    if (!t.show || !t._show) return;
                    let n,
                        r,
                        a = t.side,
                        o = a % 2,
                        i = t.stroke(l, e),
                        s = 0 == a || 3 == a ? -1 : 1;
                    if (t.label) {
                        let e = t.labelGap * s,
                            l = Mr((t._lpos + e) * pl);
                        Ze(
                            t.labelFont[0],
                            i,
                            "center",
                            2 == a ? "top" : "bottom"
                        ),
                            m.save(),
                            1 == o
                                ? ((n = r = 0),
                                  m.translate(l, Mr(ue + fe / 2)),
                                  m.rotate((3 == a ? -Cr : Cr) / 2))
                                : ((n = Mr(se + ce / 2)), (r = l)),
                            m.fillText(t.label, n, r),
                            m.restore();
                    }
                    let [c, f] = t._found;
                    if (0 == f) return;
                    let d = k[t.scale],
                        p = 0 == o ? ce : fe,
                        h = 0 == o ? se : ue,
                        v = Mr(t.gap * pl),
                        _ = t._splits,
                        w = 2 == d.distr ? _.map((e) => Be[e]) : _,
                        y = 2 == d.distr ? Be[_[1]] - Be[_[0]] : c,
                        b = t.ticks,
                        E = b.show ? Mr(b.size * pl) : 0,
                        S = (t._rotate * -Cr) / 180,
                        A = g(t._pos * pl),
                        C = A + (E + v) * s;
                    (r = 0 == o ? C : 0), (n = 1 == o ? C : 0);
                    let N = t.font[0],
                        O =
                            1 == t.align
                                ? "left"
                                : 2 == t.align
                                ? "right"
                                : S > 0
                                ? "left"
                                : S < 0
                                ? "right"
                                : 0 == o
                                ? "center"
                                : 3 == a
                                ? "right"
                                : "left";
                    Ze(
                        N,
                        i,
                        O,
                        S || 1 == o ? "middle" : 2 == a ? "top" : "bottom"
                    );
                    let M = 1.5 * t.font[1],
                        P = _.map((e) => g(u(e, d, p, h))),
                        T = t._values;
                    for (let e = 0; e < T.length; e++) {
                        let t = T[e];
                        if (null != t) {
                            0 == o ? (n = P[e]) : (r = P[e]), (t = "" + t);
                            let l =
                                -1 == t.indexOf("\n") ? [t] : t.split(/\n/gm);
                            for (let e = 0; e < l.length; e++) {
                                let t = l[e];
                                S
                                    ? (m.save(),
                                      m.translate(n, r + e * M),
                                      m.rotate(S),
                                      m.fillText(t, 0, 0),
                                      m.restore())
                                    : m.fillText(t, n, r + e * M);
                            }
                        }
                    }
                    b.show &&
                        tt(
                            P,
                            b.filter(l, w, e, f, y),
                            o,
                            a,
                            A,
                            E,
                            Xr(b.width * pl, 3),
                            b.stroke(l, e),
                            b.dash,
                            b.cap
                        );
                    let D = t.grid;
                    D.show &&
                        tt(
                            P,
                            D.filter(l, w, e, f, y),
                            o,
                            0 == o ? 2 : 1,
                            0 == o ? ue : se,
                            0 == o ? fe : ce,
                            Xr(D.width * pl, 3),
                            D.stroke(l, e),
                            D.dash,
                            D.cap
                        );
                }
                en("drawAxes");
            },
            series: function () {
                Ne > 0 &&
                    (y.forEach((e, n) => {
                        if (n > 0 && e.show && null == e._paths) {
                            let r = (function (e) {
                                let t = zr(Oe - 1, 0, Ne - 1),
                                    n = zr(Me + 1, 0, Ne - 1);
                                for (; null == e[t] && t > 0; ) t--;
                                for (; null == e[n] && n < Ne - 1; ) n++;
                                return [t, n];
                            })(t[n]);
                            e._paths = e.paths(l, n, r[0], r[1]);
                        }
                    }),
                    y.forEach((e, t) => {
                        if (t > 0 && e.show) {
                            ze != e.alpha && (m.globalAlpha = ze = e.alpha),
                                Ke(t, !1),
                                e._paths && Xe(t, !1);
                            {
                                Ke(t, !0);
                                let n = e.points.show(l, t, Oe, Me),
                                    r = e.points.filter(
                                        l,
                                        t,
                                        n,
                                        e._paths ? e._paths.gaps : null
                                    );
                                (n || r) &&
                                    ((e.points._paths = e.points.paths(
                                        l,
                                        t,
                                        Oe,
                                        Me,
                                        r
                                    )),
                                    Xe(t, !0));
                            }
                            1 != ze && (m.globalAlpha = ze = 1),
                                en("drawSeries", t);
                        }
                    }));
            },
        },
        N = (e.drawOrder || ["axes", "series"]).map((e) => C[e]);
    function O(t) {
        let n = k[t];
        if (null == n) {
            let r = (e.scales || el)[t] || el;
            if (null != r.from) O(r.from), (k[t] = sl({}, k[r.from], r));
            else {
                (n = k[t] = sl({}, t == A ? Ra : Ua, r)),
                    2 == a && (n.time = !1),
                    (n.key = t);
                let e = n.time,
                    l = n.range,
                    o = rl(l);
                if (
                    (t != A || 2 == a) &&
                    (!o ||
                        (null != l[0] && null != l[1]) ||
                        ((l = {
                            min:
                                null == l[0]
                                    ? wr
                                    : { mode: 1, hard: l[0], soft: l[0] },
                            max:
                                null == l[1]
                                    ? wr
                                    : { mode: 1, hard: l[1], soft: l[1] },
                        }),
                        (o = !1)),
                    !o && al(l))
                ) {
                    let e = l;
                    l = (t, n, r) => (null == n ? nl : Er(n, r, e));
                }
                (n.range = Br(
                    l ||
                        (e
                            ? vo
                            : t == A
                            ? 3 == n.distr
                                ? wo
                                : 4 == n.distr
                                ? bo
                                : ho
                            : 3 == n.distr
                            ? go
                            : 4 == n.distr
                            ? yo
                            : _o)
                )),
                    (n.auto = Br(!o && n.auto)),
                    (n.clamp = Br(n.clamp || La)),
                    (n._min = n._max = null);
            }
        }
    }
    O("x"),
        O("y"),
        1 == a &&
            y.forEach((e) => {
                O(e.scale);
            }),
        x.forEach((e) => {
            O(e.scale);
        });
    for (let on in e.scales) O(on);
    const M = k[A],
        P = M.distr;
    let T, D;
    0 == M.ori
        ? (vl(f, "u-hz"), (T = i), (D = s))
        : (vl(f, "u-vt"), (T = s), (D = i));
    const I = {};
    for (let on in k) {
        let e = k[on];
        (null == e.min && null == e.max) ||
            ((I[on] = { min: e.min, max: e.max }), (e.min = e.max = null));
    }
    const j = e.tzDate || ((e) => new Date(Mr(e / w))),
        L = e.fmtDate || Ul,
        R = 1 == w ? ea(j) : ra(j),
        U = aa(j, la(1 == w ? Jl : na, L)),
        H = sa(j, ia("{YYYY}-{MM}-{DD} {h}:{mm}{aa}", L)),
        F = [],
        z = (l.legend = sl({}, ua, e.legend)),
        B = z.show,
        W = z.markers;
    let V;
    (z.idxs = F),
        (W.width = Br(W.width)),
        (W.dash = Br(W.dash)),
        (W.stroke = Br(W.stroke)),
        (W.fill = Br(W.fill));
    let Y,
        G = [],
        Z = [],
        q = !1,
        K = {};
    if (z.live) {
        const e = y[1] ? y[1].values : null;
        (q = null != e), (Y = q ? e(l, 1, 0) : { _: 0 });
        for (let t in Y) K[t] = "--";
    }
    if (B)
        if (((V = wl("table", "u-legend", f)), q)) {
            let e = wl("tr", "u-thead", V);
            for (var X in (wl("th", null, e), Y))
                wl("th", "u-label", e).textContent = X;
        } else vl(V, "u-inline"), z.live && vl(V, "u-live");
    const Q = { show: !0 },
        $ = { show: !1 };
    const J = new Map();
    function ee(e, t, n) {
        const r = J.get(t) || {},
            a = we.bind[e](l, t, n);
        a && (Nl(e, t, (r[e] = a)), J.set(t, r));
    }
    function te(e, t, n) {
        const r = J.get(t) || {};
        for (let l in r) (null != e && l != e) || (Ol(l, t, r[l]), delete r[l]);
        null == e && J.delete(t);
    }
    let ne = 0,
        re = 0,
        le = 0,
        ae = 0,
        oe = 0,
        ie = 0,
        se = 0,
        ue = 0,
        ce = 0,
        fe = 0;
    l.bbox = {};
    let de = !1,
        me = !1,
        pe = !1,
        he = !1,
        ve = !1;
    function _e(e, t, n) {
        (n || e != l.width || t != l.height) && ge(e, t),
            lt(!1),
            (pe = !0),
            (me = !0),
            (he = ve = we.left >= 0),
            gt();
    }
    function ge(e, t) {
        (l.width = ne = le = e),
            (l.height = re = ae = t),
            (oe = ie = 0),
            (function () {
                let e = !1,
                    t = !1,
                    n = !1,
                    r = !1;
                x.forEach((l, a) => {
                    if (l.show && l._show) {
                        let { side: a, _size: o } = l,
                            i = a % 2,
                            s =
                                o +
                                (l.labelSize =
                                    null != l.label ? l.labelSize || 30 : 0);
                        s > 0 &&
                            (i
                                ? ((le -= s),
                                  3 == a ? ((oe += s), (r = !0)) : (n = !0))
                                : ((ae -= s),
                                  0 == a ? ((ie += s), (e = !0)) : (t = !0)));
                    }
                }),
                    (ke[0] = e),
                    (ke[1] = n),
                    (ke[2] = t),
                    (ke[3] = r),
                    (le -= Ce[1] + Ce[3]),
                    (oe += Ce[3]),
                    (ae -= Ce[2] + Ce[0]),
                    (ie += Ce[0]);
            })(),
            (function () {
                let e = oe + le,
                    t = ie + ae,
                    n = oe,
                    r = ie;
                function l(l, a) {
                    switch (l) {
                        case 1:
                            return (e += a), e - a;
                        case 2:
                            return (t += a), t - a;
                        case 3:
                            return (n -= a), n + a;
                        case 0:
                            return (r -= a), r + a;
                    }
                }
                x.forEach((e, t) => {
                    if (e.show && e._show) {
                        let t = e.side;
                        (e._pos = l(t, e._size)),
                            null != e.label && (e._lpos = l(t, e.labelSize));
                    }
                });
            })();
        let n = l.bbox;
        (se = n.left = Fr(oe * pl, 0.5)),
            (ue = n.top = Fr(ie * pl, 0.5)),
            (ce = n.width = Fr(le * pl, 0.5)),
            (fe = n.height = Fr(ae * pl, 0.5));
    }
    l.setSize = function ({ width: e, height: t }) {
        _e(e, t);
    };
    const we = (l.cursor = sl({}, ma, { drag: { y: 2 == a } }, e.cursor));
    {
        (we.idxs = F), (we._lock = !1);
        let e = we.points;
        (e.show = Br(e.show)),
            (e.size = Br(e.size)),
            (e.stroke = Br(e.stroke)),
            (e.width = Br(e.width)),
            (e.fill = Br(e.fill));
    }
    const ye = (l.focus = sl({}, e.focus || { alpha: 0.3 }, we.focus)),
        be = ye.prox >= 0;
    let Ee = [null];
    function xe(e, t) {
        if (1 == a || t > 0) {
            let t = 1 == a && k[e.scale].time,
                n = e.value;
            (e.value = t ? (ll(n) ? sa(j, ia(n, L)) : n || H) : n || Oa),
                (e.label = e.label || (t ? "Time" : "Value"));
        }
        if (t > 0) {
            (e.width = null == e.width ? 1 : e.width),
                (e.paths = e.paths || co || Yr),
                (e.fillTo = Br(e.fillTo || Ta)),
                (e.pxAlign = +xr(e.pxAlign, _)),
                (e.pxRound = Ya(e.pxAlign)),
                (e.stroke = Br(e.stroke || null)),
                (e.fill = Br(e.fill || null)),
                (e._stroke = e._fill = e._paths = e._focus = null);
            let t = Pa(e.width, 1),
                n = (e.points = sl(
                    {},
                    {
                        size: t,
                        width: Dr(1, 0.2 * t),
                        stroke: e.stroke,
                        space: 2 * t,
                        paths: fo,
                        _stroke: null,
                        _fill: null,
                    },
                    e.points
                ));
            (n.show = Br(n.show)),
                (n.filter = Br(n.filter)),
                (n.fill = Br(n.fill)),
                (n.stroke = Br(n.stroke)),
                (n.paths = Br(n.paths)),
                (n.pxAlign = e.pxAlign);
        }
        if (B) {
            let n = (function (e, t) {
                if (0 == t && (q || !z.live || 2 == a)) return nl;
                let n = [],
                    r = wl("tr", "u-series", V, V.childNodes[t]);
                vl(r, e.class), e.show || vl(r, fl);
                let o = wl("th", null, r);
                if (W.show) {
                    let e = yl("u-marker", o);
                    if (t > 0) {
                        let n = W.width(l, t);
                        n &&
                            (e.style.border =
                                n +
                                "px " +
                                W.dash(l, t) +
                                " " +
                                W.stroke(l, t)),
                            (e.style.background = W.fill(l, t));
                    }
                }
                let i = yl("u-label", o);
                for (var s in ((i.textContent = e.label),
                t > 0 &&
                    (W.show ||
                        (i.style.color =
                            e.width > 0 ? W.stroke(l, t) : W.fill(l, t)),
                    ee("click", o, (t) => {
                        if (we._lock) return;
                        let n = y.indexOf(e);
                        if (t.ctrlKey != z.isolate) {
                            let e = y.some((e, t) => t > 0 && t != n && e.show);
                            y.forEach((t, r) => {
                                r > 0 &&
                                    Ot(
                                        r,
                                        e ? (r == n ? Q : $) : Q,
                                        !0,
                                        tn.setSeries
                                    );
                            });
                        } else Ot(n, { show: !e.show }, !0, tn.setSeries);
                    }),
                    be &&
                        ee("mouseenter", o, (t) => {
                            we._lock || Ot(y.indexOf(e), Dt, !0, tn.setSeries);
                        })),
                Y)) {
                    let e = wl("td", "u-value", r);
                    (e.textContent = "--"), n.push(e);
                }
                return [r, n];
            })(e, t);
            G.splice(t, 0, n[0]), Z.splice(t, 0, n[1]), z.values.push(null);
        }
        if (we.show) {
            F.splice(t, 0, null);
            let n = (function (e, t) {
                if (t > 0) {
                    let n = we.points.show(l, t);
                    if (n)
                        return (
                            vl(n, "u-cursor-pt"),
                            vl(n, e.class),
                            El(n, -10, -10, le, ae),
                            v.insertBefore(n, Ee[t]),
                            n
                        );
                }
            })(e, t);
            n && Ee.splice(t, 0, n);
        }
    }
    (l.addSeries = function (e, t) {
        (e = po(e, (t = null == t ? y.length : t), wa, ja)),
            y.splice(t, 0, e),
            xe(y[t], t);
    }),
        (l.delSeries = function (e) {
            if ((y.splice(e, 1), B)) {
                z.values.splice(e, 1), Z.splice(e, 1);
                let t = G.splice(e, 1)[0];
                te(null, t.firstChild), t.remove();
            }
            we.show &&
                (F.splice(e, 1), Ee.length > 1 && Ee.splice(e, 1)[0].remove());
        });
    const ke = [!1, !1, !1, !1];
    function Se(e, t, n, r) {
        let [l, a, o, i] = n,
            s = t % 2,
            u = 0;
        return (
            0 == s &&
                (i || a) &&
                (u = (0 == t && !l) || (2 == t && !o) ? Mr(ga.size / 3) : 0),
            1 == s &&
                (l || o) &&
                (u = (1 == t && !a) || (3 == t && !i) ? Mr(Ma.size / 2) : 0),
            u
        );
    }
    const Ae = (l.padding = (e.padding || [Se, Se, Se, Se]).map((e) =>
            Br(xr(e, Se))
        )),
        Ce = (l._padding = Ae.map((e, t) => e(l, t, ke, 0)));
    let Ne,
        Oe = null,
        Me = null;
    const Pe = 1 == a ? y[0].idxs : null;
    let Te,
        De,
        Ie,
        je,
        Le,
        Re,
        Ue,
        He,
        Fe,
        ze,
        Be = null,
        We = !1;
    function Ve(e, n) {
        if (2 == a) {
            Ne = 0;
            for (let e = 1; e < y.length; e++) Ne += t[e][0].length;
            l.data = t = e;
        } else
            ((t = (e || []).slice())[0] = t[0] || []),
                (l.data = t.slice()),
                (Be = t[0]),
                (Ne = Be.length),
                2 == P && (t[0] = Be.map((e, t) => t));
        if (((l._data = t), lt(!0), en("setData"), !1 !== n)) {
            let e = M;
            e.auto(l, We) ? Ye() : Nt(A, e.min, e.max),
                (he = we.left >= 0),
                (ve = !0),
                gt();
        }
    }
    function Ye() {
        let e, n;
        (We = !0),
            1 == a &&
                (Ne > 0
                    ? ((Oe = Pe[0] = 0),
                      (Me = Pe[1] = Ne - 1),
                      (e = t[0][Oe]),
                      (n = t[0][Me]),
                      2 == P
                          ? ((e = Oe), (n = Me))
                          : 1 == Ne &&
                            (3 == P
                                ? ([e, n] = _r(e, e, M.log, !1))
                                : 4 == P
                                ? ([e, n] = gr(e, e, M.log, !1))
                                : M.time
                                ? (n = e + Mr(86400 / w))
                                : ([e, n] = Er(e, n, 0.1, !0))))
                    : ((Oe = Pe[0] = e = null), (Me = Pe[1] = n = null))),
            Nt(A, e, n);
    }
    function Ge(e = "#0000", t, n = tl, r = "butt", l = "#0000", a = "round") {
        e != Te && (m.strokeStyle = Te = e),
            l != De && (m.fillStyle = De = l),
            t != Ie && (m.lineWidth = Ie = t),
            a != Le && (m.lineJoin = Le = a),
            r != Re && (m.lineCap = Re = r),
            n != je && m.setLineDash((je = n));
    }
    function Ze(e, t, n, r) {
        t != De && (m.fillStyle = De = t),
            e != Ue && (m.font = Ue = e),
            n != He && (m.textAlign = He = n),
            r != Fe && (m.textBaseline = Fe = r);
    }
    function qe(e, t, n, r) {
        if (e.auto(l, We) && (null == t || null == t.min)) {
            let t = null != Oe ? Oe : 0,
                l = null != Me ? Me : r.length - 1,
                a =
                    null == n.min
                        ? 3 == e.distr
                            ? (function (e, t, n) {
                                  let r = Hr,
                                      l = -Hr;
                                  for (let a = t; a <= n; a++)
                                      e[a] > 0 &&
                                          ((r = Tr(r, e[a])),
                                          (l = Dr(l, e[a])));
                                  return [r == Hr ? 1 : r, l == -Hr ? 10 : l];
                              })(r, t, l)
                            : (function (e, t, n, r) {
                                  let l = Hr,
                                      a = -Hr;
                                  if (1 == r) (l = e[t]), (a = e[n]);
                                  else if (-1 == r) (l = e[n]), (a = e[t]);
                                  else
                                      for (let o = t; o <= n; o++)
                                          null != e[o] &&
                                              ((l = Tr(l, e[o])),
                                              (a = Dr(a, e[o])));
                                  return [l, a];
                              })(r, t, l)
                        : [n.min, n.max];
            (e.min = Tr(e.min, (n.min = a[0]))),
                (e.max = Dr(e.max, (n.max = a[1])));
        }
    }
    function Ke(e, t) {
        let n = t ? y[e].points : y[e];
        (n._stroke = n.stroke(l, e)), (n._fill = n.fill(l, e));
    }
    function Xe(e, t) {
        let n = t ? y[e].points : y[e],
            r = n._stroke,
            a = n._fill,
            { stroke: o, fill: i, clip: s, flags: u } = n._paths,
            c = null,
            f = Xr(n.width * pl, 3),
            d = (f % 2) / 2;
        t && null == a && (a = f > 0 ? "#fff" : r);
        let p = 1 == n.pxAlign;
        if ((p && m.translate(d, d), !t)) {
            let e = se,
                t = ue,
                r = ce,
                l = fe,
                a = (f * pl) / 2;
            0 == n.min && (l += a),
                0 == n.max && ((t -= a), (l += a)),
                (c = new Path2D()),
                c.rect(e, t, r, l);
        }
        t
            ? Qe(r, f, n.dash, n.cap, a, o, i, u, s)
            : (function (e, t, n, r, a, o, i, s, u, c, f) {
                  let d = !1;
                  S.forEach((m, p) => {
                      if (m.series[0] == e) {
                          let e,
                              h = y[m.series[1]],
                              v = (h._paths || el).band,
                              _ = null;
                          h.show && v
                              ? ((_ = m.fill(l, p) || o), (e = h._paths.clip))
                              : (v = null),
                              Qe(t, n, r, a, _, i, s, u, c, f, e, v),
                              (d = !0);
                      }
                  }),
                      d || Qe(t, n, r, a, o, i, s, u, c, f);
              })(e, r, f, n.dash, n.cap, a, o, i, u, c, s),
            p && m.translate(-d, -d);
    }
    l.setData = Ve;
    function Qe(e, t, n, r, l, a, o, i, s, u, c, f) {
        Ge(e, t, n, r, l),
            (s || u || f) && (m.save(), s && m.clip(s), u && m.clip(u)),
            f
                ? 3 == (3 & i)
                    ? (m.clip(f), c && m.clip(c), Je(l, o), $e(e, a, t))
                    : 2 & i
                    ? (Je(l, o), m.clip(f), $e(e, a, t))
                    : 1 & i &&
                      (m.save(),
                      m.clip(f),
                      c && m.clip(c),
                      Je(l, o),
                      m.restore(),
                      $e(e, a, t))
                : (Je(l, o), $e(e, a, t)),
            (s || u || f) && m.restore();
    }
    function $e(e, t, n) {
        e && t && n && m.stroke(t);
    }
    function Je(e, t) {
        e && t && m.fill(t);
    }
    function et(e, t, n, r) {
        let a,
            o = x[e];
        if (r <= 0) a = [0, 0];
        else {
            let i = (o._space = o.space(l, e, t, n, r)),
                s = (o._incrs = o.incrs(l, e, t, n, r, i));
            a = o._found = (function (e, t, n, r, l) {
                let a = r / (t - e),
                    o = ("" + Or(e)).length;
                for (var i = 0; i < n.length; i++) {
                    let e = n[i] * a,
                        t = n[i] < 10 ? Qr.get(n[i]) : 0;
                    if (e >= l && o + t < 17) return [n[i], e];
                }
                return [0, 0];
            })(t, n, s, r, i);
        }
        return a;
    }
    function tt(e, t, n, r, l, a, o, i, s, u) {
        let c = (o % 2) / 2;
        1 == _ && m.translate(c, c), Ge(i, o, s, u, i), m.beginPath();
        let f,
            d,
            p,
            h,
            v = l + (0 == r || 3 == r ? -a : a);
        0 == n ? ((d = l), (h = v)) : ((f = l), (p = v));
        for (let _ = 0; _ < e.length; _++)
            null != t[_] &&
                (0 == n ? (f = p = e[_]) : (d = h = e[_]),
                m.moveTo(f, d),
                m.lineTo(p, h));
        m.stroke(), 1 == _ && m.translate(-c, -c);
    }
    function nt(e) {
        let t = !0;
        return (
            x.forEach((n, r) => {
                if (!n.show) return;
                let a = k[n.scale];
                if (null == a.min)
                    return void (n._show && ((t = !1), (n._show = !1), lt(!1)));
                n._show || ((t = !1), (n._show = !0), lt(!1));
                let o = n.side,
                    i = o % 2,
                    { min: s, max: u } = a,
                    [c, f] = et(r, s, u, 0 == i ? le : ae);
                if (0 == f) return;
                let d = 2 == a.distr,
                    m = (n._splits = n.splits(l, r, s, u, c, f, d)),
                    p = 2 == a.distr ? m.map((e) => Be[e]) : m,
                    h = 2 == a.distr ? Be[m[1]] - Be[m[0]] : c,
                    v = (n._values = n.values(
                        l,
                        n.filter(l, p, r, f, h),
                        r,
                        f,
                        h
                    ));
                n._rotate = 2 == o ? n.rotate(l, v, r, f) : 0;
                let _ = n._size;
                (n._size = Pr(n.size(l, v, r, e))),
                    null != _ && n._size != _ && (t = !1);
            }),
            t
        );
    }
    function rt(e) {
        let t = !0;
        return (
            Ae.forEach((n, r) => {
                let a = n(l, r, ke, e);
                a != Ce[r] && (t = !1), (Ce[r] = a);
            }),
            t
        );
    }
    function lt(e) {
        y.forEach((t, n) => {
            n > 0 &&
                ((t._paths = null),
                e &&
                    (1 == a
                        ? ((t.min = null), (t.max = null))
                        : t.facets.forEach((e) => {
                              (e.min = null), (e.max = null);
                          })));
        });
    }
    let at,
        ot,
        it,
        st,
        ut,
        ct,
        ft,
        dt,
        mt,
        pt,
        ht,
        vt,
        _t = !1;
    function gt() {
        _t || (cl(wt), (_t = !0));
    }
    function wt() {
        de &&
            (!(function () {
                let e = il(k, ol);
                for (let t in e) {
                    let n = e[t],
                        r = I[t];
                    if (null != r && null != r.min) sl(n, r), t == A && lt(!0);
                    else if (t != A || 2 == a)
                        if (0 == Ne && null == n.from) {
                            let e = n.range(l, null, null, t);
                            (n.min = e[0]), (n.max = e[1]);
                        } else (n.min = Hr), (n.max = -Hr);
                }
                if (Ne > 0) {
                    y.forEach((n, r) => {
                        if (1 == a) {
                            let a = n.scale,
                                o = e[a],
                                i = I[a];
                            if (0 == r) {
                                let e = o.range(l, o.min, o.max, a);
                                (o.min = e[0]),
                                    (o.max = e[1]),
                                    (Oe = mr(o.min, t[0])),
                                    (Me = mr(o.max, t[0])),
                                    t[0][Oe] < o.min && Oe++,
                                    t[0][Me] > o.max && Me--,
                                    (n.min = Be[Oe]),
                                    (n.max = Be[Me]);
                            } else n.show && n.auto && qe(o, i, n, t[r]);
                            (n.idxs[0] = Oe), (n.idxs[1] = Me);
                        } else if (r > 0 && n.show && n.auto) {
                            let [l, a] = n.facets,
                                o = l.scale,
                                i = a.scale,
                                [s, u] = t[r];
                            qe(e[o], I[o], l, s),
                                qe(e[i], I[i], a, u),
                                (n.min = a.min),
                                (n.max = a.max);
                        }
                    });
                    for (let t in e) {
                        let n = e[t],
                            r = I[t];
                        if (null == n.from && (null == r || null == r.min)) {
                            let e = n.range(
                                l,
                                n.min == Hr ? null : n.min,
                                n.max == -Hr ? null : n.max,
                                t
                            );
                            (n.min = e[0]), (n.max = e[1]);
                        }
                    }
                }
                for (let t in e) {
                    let n = e[t];
                    if (null != n.from) {
                        let r = e[n.from],
                            a = n.range(l, r.min, r.max, t);
                        (n.min = a[0]), (n.max = a[1]);
                    }
                }
                let n = {},
                    r = !1;
                for (let t in e) {
                    let l = e[t],
                        a = k[t];
                    if (a.min != l.min || a.max != l.max) {
                        (a.min = l.min), (a.max = l.max);
                        let e = a.distr;
                        (a._min =
                            3 == e
                                ? Lr(a.min)
                                : 4 == e
                                ? Ur(a.min, a.asinh)
                                : a.min),
                            (a._max =
                                3 == e
                                    ? Lr(a.max)
                                    : 4 == e
                                    ? Ur(a.max, a.asinh)
                                    : a.max),
                            (n[t] = r = !0);
                    }
                }
                if (r) {
                    y.forEach((e, t) => {
                        2 == a
                            ? t > 0 && n.y && (e._paths = null)
                            : n[e.scale] && (e._paths = null);
                    });
                    for (let e in n) (pe = !0), en("setScale", e);
                    we.show && (he = ve = we.left >= 0);
                }
                for (let t in I) I[t] = null;
            })(),
            (de = !1)),
            pe &&
                (!(function () {
                    let e = !1,
                        t = 0;
                    for (; !e; ) {
                        t++;
                        let n = nt(t),
                            r = rt(t);
                        (e = 3 == t || (n && r)),
                            e || (ge(l.width, l.height), (me = !0));
                    }
                })(),
                (pe = !1)),
            me &&
                (gl(h, "left", oe),
                gl(h, "top", ie),
                gl(h, "width", le),
                gl(h, "height", ae),
                gl(v, "left", oe),
                gl(v, "top", ie),
                gl(v, "width", le),
                gl(v, "height", ae),
                gl(p, "width", ne),
                gl(p, "height", re),
                (d.width = Mr(ne * pl)),
                (d.height = Mr(re * pl)),
                (Te = De = Ie = Le = Re = Ue = He = Fe = je = null),
                (ze = 1),
                Vt(!1),
                en("setSize"),
                (me = !1)),
            ne > 0 &&
                re > 0 &&
                (m.clearRect(0, 0, d.width, d.height),
                en("drawClear"),
                N.forEach((e) => e()),
                en("draw")),
            we.show && he && (Bt(null, !0, !1), (he = !1)),
            c || ((c = !0), (l.status = 1), en("ready")),
            (We = !1),
            (_t = !1);
    }
    function yt(e, n) {
        let r = k[e];
        if (null == r.from) {
            if (0 == Ne) {
                let t = r.range(l, n.min, n.max, e);
                (n.min = t[0]), (n.max = t[1]);
            }
            if (n.min > n.max) {
                let e = n.min;
                (n.min = n.max), (n.max = e);
            }
            if (
                Ne > 1 &&
                null != n.min &&
                null != n.max &&
                n.max - n.min < 1e-16
            )
                return;
            e == A &&
                2 == r.distr &&
                Ne > 0 &&
                ((n.min = mr(n.min, t[0])), (n.max = mr(n.max, t[0]))),
                (I[e] = n),
                (de = !0),
                gt();
        }
    }
    (l.redraw = (e, t) => {
        (pe = t || !1), !1 !== e ? Nt(A, M.min, M.max) : gt();
    }),
        (l.setScale = yt);
    let bt = !1;
    const Et = we.drag;
    let xt = Et.x,
        kt = Et.y;
    we.show &&
        (we.x && (at = yl("u-cursor-x", v)),
        we.y && (ot = yl("u-cursor-y", v)),
        0 == M.ori ? ((it = at), (st = ot)) : ((it = ot), (st = at)),
        (ht = we.left),
        (vt = we.top));
    const St = (l.select = sl(
            { show: !0, over: !0, left: 0, width: 0, top: 0, height: 0 },
            e.select
        )),
        At = St.show ? yl("u-select", St.over ? v : h) : null;
    function Ct(e, t) {
        if (St.show) {
            for (let t in e) gl(At, t, (St[t] = e[t]));
            !1 !== t && en("setSelect");
        }
    }
    function Nt(e, t, n) {
        yt(e, { min: t, max: n });
    }
    function Ot(e, t, n, r) {
        let o = y[e];
        null != t.focus &&
            (function (e) {
                if (e != Tt) {
                    let t = null == e,
                        n = 1 != ye.alpha;
                    y.forEach((r, l) => {
                        let a = t || 0 == l || l == e;
                        (r._focus = t ? null : a),
                            n &&
                                (function (e, t) {
                                    (y[e].alpha = t),
                                        we.show &&
                                            Ee[e] &&
                                            (Ee[e].style.opacity = t);
                                    B && G[e] && (G[e].style.opacity = t);
                                })(l, a ? 1 : ye.alpha);
                    }),
                        (Tt = e),
                        n && gt();
                }
            })(e),
            null != t.show &&
                ((o.show = t.show),
                (function (e, t) {
                    let n = y[e],
                        r = B ? G[e] : null;
                    n.show
                        ? r && _l(r, fl)
                        : (r && vl(r, fl),
                          Ee.length > 1 && El(Ee[e], -10, -10, le, ae));
                })(e, t.show),
                Nt(2 == a ? o.facets[1].scale : o.scale, null, null),
                gt()),
            !1 !== n && en("setSeries", e, t),
            r && ln("setSeries", l, e, t);
    }
    let Mt, Pt, Tt;
    (l.setSelect = Ct),
        (l.setSeries = Ot),
        (l.addBand = function (e, t) {
            (e.fill = Br(e.fill || null)),
                (t = null == t ? S.length : t),
                S.splice(t, 0, e);
        }),
        (l.setBand = function (e, t) {
            sl(S[e], t);
        }),
        (l.delBand = function (e) {
            null == e ? (S.length = 0) : S.splice(e, 1);
        });
    const Dt = { focus: !0 },
        It = { focus: !1 };
    function jt(e, t, n) {
        let r = k[t];
        n && (e = e / pl - (1 == r.ori ? ie : oe));
        let l = le;
        1 == r.ori && ((l = ae), (e = l - e)), -1 == r.dir && (e = l - e);
        let a = r._min,
            o = a + (r._max - a) * (e / l),
            i = r.distr;
        return 3 == i
            ? Ir(10, o)
            : 4 == i
            ? ((e, t = 1) => Ar.sinh(e / t))(o, r.asinh)
            : o;
    }
    function Lt(e, t) {
        gl(At, "left", (St.left = e)), gl(At, "width", (St.width = t));
    }
    function Rt(e, t) {
        gl(At, "top", (St.top = e)), gl(At, "height", (St.height = t));
    }
    B &&
        be &&
        Nl("mouseleave", V, (e) => {
            we._lock || (Ot(null, It, !0, tn.setSeries), Bt(null, !0, !1));
        }),
        (l.valToIdx = (e) => mr(e, t[0])),
        (l.posToIdx = function (e, n) {
            return mr(jt(e, A, n), t[0], Oe, Me);
        }),
        (l.posToVal = jt),
        (l.valToPos = (e, t, n) =>
            0 == k[t].ori
                ? i(e, k[t], n ? ce : le, n ? se : 0)
                : s(e, k[t], n ? fe : ae, n ? ue : 0)),
        (l.batch = function (e) {
            e(l), gt();
        }),
        (l.setCursor = (e, t, n) => {
            (ht = e.left), (vt = e.top), Bt(null, t, n);
        });
    let Ut = 0 == M.ori ? Lt : Rt,
        Ht = 1 == M.ori ? Lt : Rt;
    function Ft(e, t) {
        if (null != e) {
            let t = e.idx;
            (z.idx = t),
                y.forEach((e, n) => {
                    (n > 0 || !q) && zt(n, t);
                });
        }
        B &&
            z.live &&
            (function () {
                if (B && z.live)
                    for (let e = 2 == a ? 1 : 0; e < y.length; e++) {
                        if (0 == e && q) continue;
                        let t = z.values[e],
                            n = 0;
                        for (let r in t) Z[e][n++].firstChild.nodeValue = t[r];
                    }
            })(),
            (ve = !1),
            !1 !== t && en("setLegend");
    }
    function zt(e, n) {
        let r;
        if (null == n) r = K;
        else {
            let a = y[e],
                o = 0 == e && 2 == P ? Be : t[e];
            r = q ? a.values(l, e, n) : { _: a.value(l, o[n], e, n) };
        }
        z.values[e] = r;
    }
    function Bt(e, n, r) {
        let o;
        (mt = ht),
            (pt = vt),
            ([ht, vt] = we.move(l, ht, vt)),
            we.show &&
                (it && El(it, Mr(ht), 0, le, ae),
                st && El(st, 0, Mr(vt), le, ae));
        let i = Oe > Me;
        Mt = Hr;
        let s = 0 == M.ori ? le : ae,
            u = 1 == M.ori ? le : ae;
        if (ht < 0 || 0 == Ne || i) {
            o = null;
            for (let e = 0; e < y.length; e++)
                e > 0 && Ee.length > 1 && El(Ee[e], -10, -10, le, ae);
            if ((be && Ot(null, Dt, !0, null == e && tn.setSeries), z.live)) {
                F.fill(null), (ve = !0);
                for (let e = 0; e < y.length; e++) z.values[e] = K;
            }
        } else {
            let e, n, r;
            1 == a &&
                ((e = 0 == M.ori ? ht : vt),
                (n = jt(e, A)),
                (o = mr(n, t[0], Oe, Me)),
                (r = qr(T(t[0][o], M, s, 0), 0.5)));
            for (let i = 2 == a ? 1 : 0; i < y.length; i++) {
                let e = y[i],
                    c = F[i],
                    m = 1 == a ? t[i][c] : t[i][1][c],
                    p = we.dataIdx(l, i, o, n),
                    h = 1 == a ? t[i][p] : t[i][1][p];
                (ve = ve || h != m || p != c), (F[i] = p);
                let v =
                    p == o
                        ? r
                        : qr(T(1 == a ? t[0][p] : t[i][0][p], M, s, 0), 0.5);
                if (i > 0 && e.show) {
                    let t,
                        n,
                        r =
                            null == h
                                ? -10
                                : qr(
                                      D(
                                          h,
                                          1 == a
                                              ? k[e.scale]
                                              : k[e.facets[1].scale],
                                          u,
                                          0
                                      ),
                                      0.5
                                  );
                    if (r > 0 && 1 == a) {
                        let e = Nr(r - vt);
                        e <= Mt && ((Mt = e), (Pt = i));
                    }
                    0 == M.ori ? ((t = v), (n = r)) : ((t = r), (n = v)),
                        ve &&
                            Ee.length > 1 &&
                            (El(Ee[i], t, n, le, ae),
                            kl(
                                Ee[i],
                                we.points.fill(l, i),
                                we.points.stroke(l, i)
                            ),
                            2 == a &&
                                ((f = Ee[i]),
                                (d = we.points.size(l, i)) != Sl.get(f) &&
                                    (Sl.set(f, d),
                                    (f.style.height = f.style.width = d + "px"),
                                    (f.style.marginLeft = f.style.marginTop =
                                        -d / 2 + "px"))));
                }
                if (z.live) {
                    if (!ve || (0 == i && q)) continue;
                    zt(i, p);
                }
            }
        }
        var f, d;
        if ((ve && ((z.idx = o), Ft()), St.show && bt))
            if (null != e) {
                let [t, n] = tn.scales,
                    [r, l] = tn.match,
                    [a, o] = e.cursor.sync.scales,
                    i = e.cursor.drag;
                (xt = i._x), (kt = i._y);
                let c,
                    f,
                    d,
                    m,
                    p,
                    { left: h, top: v, width: _, height: g } = e.select,
                    w = e.scales[t].ori,
                    y = e.posToVal,
                    b = null != t && r(t, a),
                    E = null != n && l(n, o);
                b &&
                    (0 == w ? ((c = h), (f = _)) : ((c = v), (f = g)),
                    xt
                        ? ((d = k[t]),
                          (m = T(y(c, a), d, s, 0)),
                          (p = T(y(c + f, a), d, s, 0)),
                          Ut(Tr(m, p), Nr(p - m)))
                        : Ut(0, s),
                    E || Ht(0, u)),
                    E &&
                        (1 == w ? ((c = h), (f = _)) : ((c = v), (f = g)),
                        kt
                            ? ((d = k[n]),
                              (m = D(y(c, o), d, u, 0)),
                              (p = D(y(c + f, o), d, u, 0)),
                              Ht(Tr(m, p), Nr(p - m)))
                            : Ht(0, u),
                        b || Ut(0, s));
            } else {
                let e = Nr(mt - ut),
                    t = Nr(pt - ct);
                if (1 == M.ori) {
                    let n = e;
                    (e = t), (t = n);
                }
                (xt = Et.x && e >= Et.dist), (kt = Et.y && t >= Et.dist);
                let n,
                    r,
                    l = Et.uni;
                null != l
                    ? xt &&
                      kt &&
                      ((xt = e >= l),
                      (kt = t >= l),
                      xt || kt || (t > e ? (kt = !0) : (xt = !0)))
                    : Et.x && Et.y && (xt || kt) && (xt = kt = !0),
                    xt &&
                        (0 == M.ori
                            ? ((n = ft), (r = ht))
                            : ((n = dt), (r = vt)),
                        Ut(Tr(n, r), Nr(r - n)),
                        kt || Ht(0, u)),
                    kt &&
                        (1 == M.ori
                            ? ((n = ft), (r = ht))
                            : ((n = dt), (r = vt)),
                        Ht(Tr(n, r), Nr(r - n)),
                        xt || Ut(0, s)),
                    xt || kt || (Ut(0, 0), Ht(0, 0));
            }
        if (
            ((we.idx = o),
            (we.left = ht),
            (we.top = vt),
            (Et._x = xt),
            (Et._y = kt),
            null == e)
        ) {
            if (r) {
                if (null != nn) {
                    let [e, t] = tn.scales;
                    (tn.values[0] =
                        null != e ? jt(0 == M.ori ? ht : vt, e) : null),
                        (tn.values[1] =
                            null != t ? jt(1 == M.ori ? ht : vt, t) : null);
                }
                ln("mousemove", l, ht, vt, le, ae, o);
            }
            if (be) {
                let e = r && tn.setSeries,
                    t = ye.prox;
                null == Tt
                    ? Mt <= t && Ot(Pt, Dt, !0, e)
                    : Mt > t
                    ? Ot(null, Dt, !0, e)
                    : Pt != Tt && Ot(Pt, Dt, !0, e);
            }
        }
        c && !1 !== n && en("setCursor");
    }
    l.setLegend = Ft;
    let Wt = null;
    function Vt(e) {
        !0 === e
            ? (Wt = null)
            : ((Wt = v.getBoundingClientRect()), en("syncRect", Wt));
    }
    function Yt(e, t, n, r, l, a, o) {
        we._lock ||
            (Gt(e, t, n, r, l, a, o, !1, null != e),
            null != e ? Bt(null, !0, !0) : Bt(t, !0, !1));
    }
    function Gt(e, t, n, r, a, o, i, s, c) {
        if ((null == Wt && Vt(!1), null != e))
            (n = e.clientX - Wt.left), (r = e.clientY - Wt.top);
        else {
            if (n < 0 || r < 0) return (ht = -10), void (vt = -10);
            let [e, l] = tn.scales,
                i = t.cursor.sync,
                [s, c] = i.values,
                [f, d] = i.scales,
                [m, p] = tn.match,
                h = 1 == t.scales[f].ori,
                v = 0 == M.ori ? le : ae,
                _ = 1 == M.ori ? le : ae,
                g = h ? o : a,
                w = h ? a : o,
                y = h ? r : n,
                b = h ? n : r;
            if (
                ((n =
                    null != f
                        ? m(e, f)
                            ? u(s, k[e], v, 0)
                            : -10
                        : v * (y / g)),
                (r =
                    null != d
                        ? p(l, d)
                            ? u(c, k[l], _, 0)
                            : -10
                        : _ * (b / w)),
                1 == M.ori)
            ) {
                let e = n;
                (n = r), (r = e);
            }
        }
        c &&
            ((n <= 1 || n >= le - 1) && (n = Fr(n, le)),
            (r <= 1 || r >= ae - 1) && (r = Fr(r, ae))),
            s
                ? ((ut = n), (ct = r), ([ft, dt] = we.move(l, n, r)))
                : ((ht = n), (vt = r));
    }
    function Zt() {
        Ct({ width: 0, height: 0 }, !1);
    }
    function qt(e, t, n, r, a, o, i) {
        (bt = !0),
            (xt = kt = Et._x = Et._y = !1),
            Gt(e, t, n, r, a, o, 0, !0, !1),
            null != e &&
                (ee("mouseup", dl, Kt),
                ln("mousedown", l, ft, dt, le, ae, null));
    }
    function Kt(e, t, n, r, a, o, i) {
        (bt = Et._x = Et._y = !1), Gt(e, t, n, r, a, o, 0, !1, !0);
        let { left: s, top: u, width: c, height: f } = St,
            d = c > 0 || f > 0;
        if ((d && Ct(St), Et.setScale && d)) {
            let e = s,
                t = c,
                n = u,
                r = f;
            if (
                (1 == M.ori && ((e = u), (t = f), (n = s), (r = c)),
                xt && Nt(A, jt(e, A), jt(e + t, A)),
                kt)
            )
                for (let l in k) {
                    let e = k[l];
                    l != A &&
                        null == e.from &&
                        e.min != Hr &&
                        Nt(l, jt(n + r, l), jt(n, l));
                }
            Zt();
        } else
            we.lock && ((we._lock = !we._lock), we._lock || Bt(null, !0, !1));
        null != e &&
            (te("mouseup", dl), ln("mouseup", l, ht, vt, le, ae, null));
    }
    function Xt(e, t, n, r, a, o, i) {
        Ye(), Zt(), null != e && ln("dblclick", l, ht, vt, le, ae, null);
    }
    function Qt() {
        x.forEach(xo), _e(l.width, l.height, !0);
    }
    Nl("dppxchange", ml, Qt);
    const $t = {};
    ($t.mousedown = qt),
        ($t.mousemove = Yt),
        ($t.mouseup = Kt),
        ($t.dblclick = Xt),
        ($t.setSeries = (e, t, n, r) => {
            Ot(n, r, !0, !1);
        }),
        we.show &&
            (ee("mousedown", v, qt),
            ee("mousemove", v, Yt),
            ee("mouseenter", v, Vt),
            ee("mouseleave", v, function (e, t, n, r, l, a, o) {
                if (!we._lock) {
                    let e = bt;
                    if (bt) {
                        let e,
                            t,
                            n = !0,
                            r = !0,
                            l = 10;
                        0 == M.ori
                            ? ((e = xt), (t = kt))
                            : ((e = kt), (t = xt)),
                            e &&
                                t &&
                                ((n = ht <= l || ht >= le - l),
                                (r = vt <= l || vt >= ae - l)),
                            e && n && (ht = ht < ft ? 0 : le),
                            t && r && (vt = vt < dt ? 0 : ae),
                            Bt(null, !0, !0),
                            (bt = !1);
                    }
                    (ht = -10), (vt = -10), Bt(null, !0, !0), e && (bt = e);
                }
            }),
            ee("dblclick", v, Xt),
            so.add(l),
            (l.syncRect = Vt));
    const Jt = (l.hooks = e.hooks || {});
    function en(e, t, n) {
        e in Jt &&
            Jt[e].forEach((e) => {
                e.call(null, l, t, n);
            });
    }
    (e.plugins || []).forEach((e) => {
        for (let t in e.hooks) Jt[t] = (Jt[t] || []).concat(e.hooks[t]);
    });
    const tn = sl(
        {
            key: null,
            setSeries: !1,
            filters: { pub: Gr, sub: Gr },
            scales: [A, y[1] ? y[1].scale : null],
            match: [Zr, Zr],
            values: [null, null],
        },
        we.sync
    );
    we.sync = tn;
    const nn = tn.key,
        rn = Fa(nn);
    function ln(e, t, n, r, l, a, o) {
        tn.filters.pub(e, t, n, r, l, a, o) && rn.pub(e, t, n, r, l, a, o);
    }
    function an() {
        en("init", e, t),
            Ve(t || e.data, !1),
            I[A] ? yt(A, I[A]) : Ye(),
            _e(e.width, e.height),
            Bt(null, !0, !1),
            Ct(St, !1);
    }
    return (
        rn.sub(l),
        (l.pub = function (e, t, n, r, l, a, o) {
            tn.filters.sub(e, t, n, r, l, a, o) &&
                $t[e](null, t, n, r, l, a, o);
        }),
        (l.destroy = function () {
            rn.unsub(l),
                so.delete(l),
                J.clear(),
                Ol("dppxchange", ml, Qt),
                f.remove(),
                en("destroy");
        }),
        y.forEach(xe),
        x.forEach(function (e, t) {
            if (((e._show = e.show), e.show)) {
                let n = e.side % 2,
                    r = k[e.scale];
                null == r && ((e.scale = n ? y[1].scale : A), (r = k[e.scale]));
                let a = r.time;
                (e.size = Br(e.size)),
                    (e.space = Br(e.space)),
                    (e.rotate = Br(e.rotate)),
                    (e.incrs = Br(
                        e.incrs ||
                            (2 == r.distr ? Vl : a ? (1 == w ? $l : ta) : Yl)
                    )),
                    (e.splits = Br(
                        e.splits ||
                            (a && 1 == r.distr
                                ? R
                                : 3 == r.distr
                                ? Ea
                                : 4 == r.distr
                                ? xa
                                : ba)
                    )),
                    (e.stroke = Br(e.stroke)),
                    (e.grid.stroke = Br(e.grid.stroke)),
                    (e.ticks.stroke = Br(e.ticks.stroke));
                let o = e.values;
                (e.values =
                    rl(o) && !rl(o[0])
                        ? Br(o)
                        : a
                        ? rl(o)
                            ? aa(j, la(o, L))
                            : ll(o)
                            ? (function (e, t) {
                                  let n = Ul(t);
                                  return (t, r, l, a, o) =>
                                      r.map((t) => n(e(t)));
                              })(j, o)
                            : o || U
                        : o || ya),
                    (e.filter = Br(e.filter || (r.distr >= 3 ? Na : Vr))),
                    (e.font = Eo(e.font)),
                    (e.labelFont = Eo(e.labelFont)),
                    (e._size = e.size(l, null, t, 0)),
                    (e._space =
                        e._rotate =
                        e._incrs =
                        e._found =
                        e._splits =
                        e._values =
                            null),
                    e._size > 0 && (ke[t] = !0);
            }
        }),
        n
            ? n instanceof HTMLElement
                ? (n.appendChild(f), an())
                : n(l, an)
            : an(),
        l
    );
}
(ko.assign = sl),
    (ko.fmtNum = Sr),
    (ko.rangeNum = Er),
    (ko.rangeLog = _r),
    (ko.rangeAsinh = gr),
    (ko.orient = za),
    (ko.join = function (e, t) {
        let n = new Set();
        for (let o = 0; o < e.length; o++) {
            let t = e[o][0],
                r = t.length;
            for (let e = 0; e < r; e++) n.add(t[e]);
        }
        let r = [Array.from(n).sort((e, t) => e - t)],
            l = r[0].length,
            a = new Map();
        for (let o = 0; o < l; o++) a.set(r[0][o], o);
        for (let o = 0; o < e.length; o++) {
            let n = e[o],
                i = n[0];
            for (let e = 1; e < n.length; e++) {
                let s = n[e],
                    u = Array(l).fill(void 0),
                    c = t ? t[o][e] : 1,
                    f = [];
                for (let e = 0; e < s.length; e++) {
                    let t = s[e],
                        n = a.get(i[e]);
                    null === t
                        ? 0 != c && ((u[n] = t), 2 == c && f.push(n))
                        : (u[n] = t);
                }
                ul(u, f, l), r.push(u);
            }
        }
        return r;
    }),
    (ko.fmtDate = Ul),
    (ko.tzDate = function (e, t) {
        let n;
        return (
            "UTC" == t || "Etc/UTC" == t
                ? (n = new Date(+e + 6e4 * e.getTimezoneOffset()))
                : t == Hl
                ? (n = e)
                : ((n = new Date(e.toLocaleString("en-US", { timeZone: t }))),
                  n.setMilliseconds(e.getMilliseconds())),
            n
        );
    }),
    (ko.sync = Fa);
{
    (ko.addGap = Va), (ko.clipGaps = Wa);
    let e = (ko.paths = { points: no });
    (e.linear = oo),
        (e.stepped = function (e) {
            const t = xr(e.align, 1),
                n = xr(e.ascDesc, !1);
            return (e, r, l, a) =>
                za(e, r, (o, i, s, u, c, f, d, m, p, h, v) => {
                    let _ = o.pxRound,
                        g = 0 == u.ori ? qa : Ka;
                    const w = {
                            stroke: new Path2D(),
                            fill: null,
                            clip: null,
                            band: null,
                            gaps: null,
                            flags: 1,
                        },
                        y = w.stroke,
                        b = 1 * u.dir * (0 == u.ori ? 1 : -1);
                    (l = pr(s, l, a, 1)), (a = pr(s, l, a, -1));
                    let E = [],
                        x = !1,
                        k = _(d(s[1 == b ? l : a], c, v, p)),
                        S = _(f(i[1 == b ? l : a], u, h, m)),
                        A = S;
                    g(y, S, k);
                    for (let e = 1 == b ? l : a; e >= l && e <= a; e += b) {
                        let r = s[e],
                            l = _(f(i[e], u, h, m));
                        if (null == r) {
                            null === r && (Va(E, A, l), (x = !0));
                            continue;
                        }
                        let a = _(d(r, c, v, p));
                        if (x) {
                            if ((Va(E, A, l), k != a)) {
                                let e = (o.width * pl) / 2,
                                    r = E[E.length - 1];
                                (r[0] += n || 1 == t ? e : -e),
                                    (r[1] -= n || -1 == t ? e : -e);
                            }
                            x = !1;
                        }
                        1 == t ? g(y, l, k) : g(y, A, a),
                            g(y, l, a),
                            (k = a),
                            (A = l);
                    }
                    if (null != o.fill) {
                        let t = (w.fill = new Path2D(y)),
                            n = _(d(o.fillTo(e, r, o.min, o.max), c, v, p));
                        g(t, A, n), g(t, S, n);
                    }
                    return (
                        (w.gaps = E = o.gaps(e, r, l, a, E)),
                        o.spanGaps || (w.clip = Wa(E, u.ori, m, p, h, v)),
                        e.bands.length > 0 && (w.band = Ba(e, r, l, a, y)),
                        w
                    );
                });
        }),
        (e.bars = function (e) {
            const t = xr((e = e || el).size, [0.6, Hr, 1]),
                n = e.align || 0,
                r = (e.gap || 0) * pl,
                l = 1 - t[0],
                a = xr(t[1], Hr) * pl,
                o = xr(t[2], 1) * pl,
                i = e.disp,
                s = xr(e.each, (e) => {});
            return (e, t, u, c) =>
                za(e, t, (f, d, m, p, h, v, _, g, w, y, b) => {
                    let E = f.pxRound;
                    const x = p.dir * (0 == p.ori ? 1 : -1),
                        k = h.dir * (1 == h.ori ? 1 : -1);
                    let S,
                        A,
                        C = 0 == p.ori ? Xa : Qa,
                        N =
                            0 == p.ori
                                ? s
                                : (e, t, n, r, l, a, o) => {
                                      s(e, t, n, l, r, o, a);
                                  },
                        O = _(f.fillTo(e, t, f.min, f.max), h, b, w),
                        M = E(f.width * pl);
                    if (null != i) {
                        (d = i.x0.values(e, t, u, c)),
                            2 == i.x0.unit &&
                                (d = d.map((t) =>
                                    e.posToVal(g + t * y, p.key, !0)
                                ));
                        let n = i.size.values(e, t, u, c);
                        (A =
                            2 == i.size.unit
                                ? n[0] * y
                                : v(n[0], p, y, g) - v(0, p, y, g)),
                            (A = E(A - M)),
                            (S = 1 == x ? -M / 2 : A + M / 2);
                    } else {
                        let e = y;
                        if (d.length > 1)
                            for (let t = 1, n = 1 / 0; t < d.length; t++) {
                                let r = Nr(d[t] - d[t - 1]);
                                r < n &&
                                    ((n = r),
                                    (e = Nr(
                                        v(d[t], p, y, g) - v(d[t - 1], p, y, g)
                                    )));
                            }
                        (A = E(Tr(a, Dr(o, e - e * l)) - M - r)),
                            (S =
                                (0 == n ? A / 2 : n == x ? 0 : A) -
                                (n * x * r) / 2);
                    }
                    const P = {
                            stroke: new Path2D(),
                            fill: null,
                            clip: null,
                            band: null,
                            gaps: null,
                            flags: 3,
                        },
                        T = e.bands.length > 0;
                    let D;
                    T &&
                        ((P.band = new Path2D()),
                        (D = Fr(_(h.max, h, b, w), 0.5)));
                    const I = P.stroke,
                        j = P.band;
                    for (let n = 1 == x ? u : c; n >= u && n <= c; n += x) {
                        let r = m[n],
                            l = v(
                                2 != p.distr || null != i ? d[n] : n,
                                p,
                                y,
                                g
                            ),
                            a = _(r, h, b, w),
                            o = E(l - S),
                            s = E(Dr(a, O)),
                            u = E(Tr(a, O)),
                            c = s - u;
                        null != m[n] &&
                            (C(I, o, u, A, c),
                            N(e, t, n, o - M / 2, u - M / 2, A + M, c + M)),
                            T &&
                                (1 == k
                                    ? ((s = u), (u = D))
                                    : ((u = s), (s = D)),
                                (c = s - u),
                                C(j, o - M / 2, u + M / 2, A + M, c - M));
                    }
                    return null != f.fill && (P.fill = new Path2D(I)), P;
                });
        }),
        (e.spline = function (e) {
            return (
                (t = io),
                (e, n, r, l) =>
                    za(e, n, (a, o, i, s, u, c, f, d, m, p, h) => {
                        let v,
                            _,
                            g,
                            w = a.pxRound;
                        0 == s.ori
                            ? ((v = Ga), (g = qa), (_ = eo))
                            : ((v = Za), (g = Ka), (_ = to));
                        const y = 1 * s.dir * (0 == s.ori ? 1 : -1);
                        (r = pr(i, r, l, 1)), (l = pr(i, r, l, -1));
                        let b = [],
                            E = !1,
                            x = w(c(o[1 == y ? r : l], s, p, d)),
                            k = x,
                            S = [],
                            A = [];
                        for (let e = 1 == y ? r : l; e >= r && e <= l; e += y) {
                            let t = i[e],
                                n = c(o[e], s, p, d);
                            null != t
                                ? (E && (Va(b, k, n), (E = !1)),
                                  S.push((k = n)),
                                  A.push(f(i[e], u, h, m)))
                                : null === t && (Va(b, k, n), (E = !0));
                        }
                        const C = {
                                stroke: t(S, A, v, g, _, w),
                                fill: null,
                                clip: null,
                                band: null,
                                gaps: null,
                                flags: 1,
                            },
                            N = C.stroke;
                        if (null != a.fill && null != N) {
                            let t = (C.fill = new Path2D(N)),
                                r = w(f(a.fillTo(e, n, a.min, a.max), u, h, m));
                            g(t, k, r), g(t, x, r);
                        }
                        return (
                            (C.gaps = b = a.gaps(e, n, r, l, b)),
                            a.spanGaps || (C.clip = Wa(b, s.ori, d, m, p, h)),
                            e.bands.length > 0 && (C.band = Ba(e, n, r, l, N)),
                            C
                        );
                    })
            );
            var t;
        });
}
var So,
    Ao,
    Co = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: ko,
    });
window;
var No = lr(
    (fr.exports =
        ((So = dr),
        (Ao = ar(Co)),
        (function (e) {
            var t = {};
            function n(r) {
                if (t[r]) return t[r].exports;
                var l = (t[r] = { i: r, l: !1, exports: {} });
                return (
                    e[r].call(l.exports, l, l.exports, n), (l.l = !0), l.exports
                );
            }
            return (
                (n.m = e),
                (n.c = t),
                (n.d = function (e, t, r) {
                    n.o(e, t) ||
                        Object.defineProperty(e, t, { enumerable: !0, get: r });
                }),
                (n.r = function (e) {
                    "undefined" != typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module",
                        }),
                        Object.defineProperty(e, "__esModule", { value: !0 });
                }),
                (n.t = function (e, t) {
                    if ((1 & t && (e = n(e)), 8 & t)) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule)
                        return e;
                    var r = Object.create(null);
                    if (
                        (n.r(r),
                        Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e,
                        }),
                        2 & t && "string" != typeof e)
                    )
                        for (var l in e)
                            n.d(
                                r,
                                l,
                                function (t) {
                                    return e[t];
                                }.bind(null, l)
                            );
                    return r;
                }),
                (n.n = function (e) {
                    var t =
                        e && e.__esModule
                            ? function () {
                                  return e.default;
                              }
                            : function () {
                                  return e;
                              };
                    return n.d(t, "a", t), t;
                }),
                (n.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (n.p = ""),
                n((n.s = "./react/uplot-react.tsx"))
            );
        })({
            "./common/index.ts": function (e, t, n) {
                n.r(t),
                    n.d(t, "optionsUpdateState", function () {
                        return l;
                    }),
                    n.d(t, "dataMatch", function () {
                        return a;
                    });
                var r = function (e, t) {
                    var n = {};
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) &&
                            t.indexOf(r) < 0 &&
                            (n[r] = e[r]);
                    if (
                        null != e &&
                        "function" == typeof Object.getOwnPropertySymbols
                    ) {
                        var l = 0;
                        for (
                            r = Object.getOwnPropertySymbols(e);
                            l < r.length;
                            l++
                        )
                            t.indexOf(r[l]) < 0 &&
                                Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    r[l]
                                ) &&
                                (n[r[l]] = e[r[l]]);
                    }
                    return n;
                };
                Object.is ||
                    Object.defineProperty(Object, "is", {
                        value: function (e, t) {
                            return (
                                (e === t && (0 !== e || 1 / e == 1 / t)) ||
                                (e != e && t != t)
                            );
                        },
                    });
                var l = function (e, t) {
                        var n = e.width,
                            l = e.height,
                            a = r(e, ["width", "height"]),
                            o = t.width,
                            i = t.height,
                            s = r(t, ["width", "height"]),
                            u = "keep";
                        if (
                            ((l === i && n === o) || (u = "update"),
                            Object.keys(a).length !== Object.keys(s).length)
                        )
                            return "create";
                        for (var c = 0, f = Object.keys(a); c < f.length; c++) {
                            var d = f[c];
                            if (!Object.is(a[d], s[d])) {
                                u = "create";
                                break;
                            }
                        }
                        return u;
                    },
                    a = function (e, t) {
                        return (
                            e.length === t.length &&
                            e.every(function (e, n) {
                                var r = t[n];
                                return (
                                    e.length === r.length &&
                                    e.every(function (e, t) {
                                        return e === r[t];
                                    })
                                );
                            })
                        );
                    };
            },
            "./react/uplot-react.tsx": function (e, t, n) {
                n.r(t),
                    n.d(t, "default", function () {
                        return s;
                    });
                var r = n("react"),
                    l = n.n(r),
                    a = n("uplot"),
                    o = n.n(a),
                    i = n("./common/index.ts");
                function s(e) {
                    var t = e.options,
                        n = e.data,
                        a = e.target,
                        s = e.onDelete,
                        u = void 0 === s ? function () {} : s,
                        c = e.onCreate,
                        f = void 0 === c ? function () {} : c,
                        d = Object(r.useRef)(null),
                        m = Object(r.useRef)(null);
                    function p(e) {
                        e && (u(e), e.destroy(), (d.current = null));
                    }
                    function h() {
                        var e = new o.a(t, n, a || m.current);
                        (d.current = e), f(e);
                    }
                    Object(r.useEffect)(function () {
                        return (
                            h(),
                            function () {
                                p(d.current);
                            }
                        );
                    }, []);
                    var v = Object(r.useRef)({
                        options: t,
                        data: n,
                        target: a,
                    }).current;
                    return (
                        Object(r.useEffect)(
                            function () {
                                var e = d.current;
                                if (v.options !== t) {
                                    var r = Object(i.optionsUpdateState)(
                                        v.options,
                                        t
                                    );
                                    e && "create" !== r
                                        ? "update" === r &&
                                          e.setSize({
                                              width: t.width,
                                              height: t.height,
                                          })
                                        : (p(e), h());
                                }
                                return (
                                    v.data !== n &&
                                        (e
                                            ? Object(i.dataMatch)(v.data, n) ||
                                              e.setData(n)
                                            : h()),
                                    v.target !== a && (p(e), h()),
                                    function () {
                                        (v.options = t),
                                            (v.data = n),
                                            (v.target = a);
                                    }
                                );
                            },
                            [t, n, a]
                        ),
                        a ? null : l.a.createElement("div", { ref: m })
                    );
                }
            },
            react: function (e, t) {
                e.exports = So;
            },
            uplot: function (e, t) {
                e.exports = Ao;
            },
        }).default))
);
function Oo(e) {
    return ft.createElement(
        "div",
        {
            className: "tw-flex tw-align-center tw-py-5 tw-mx-3",
            id: "round-" + e.round,
        },
        ft.createElement(
            "div",
            { className: "tw-mr-5" },
            ft.createElement(Mo, ((t = p({}, e)), s(t, u({ size: 250 }))))
        ),
        ft.createElement(
            "div",
            {
                className:
                    "tw-ml-5 tw-w-full tw-h-[250px] tw-overflow-auto tw-rounded-lg tw-border tw-border-solid",
            },
            ft.createElement(Po, p({}, e))
        )
    );
    var t;
}
function Mo(e) {
    const t = e.info,
        n = [
            { title: "passsed", color: "#22c55e", value: t.passTestNum },
            { title: "failed", color: "#ef4444", value: t.failTestNum },
        ],
        r = e.size + "px";
    return ft.createElement(
        x,
        null,
        ft.createElement(
            "div",
            { className: "tw-relative", style: { width: r, height: r } },
            ft.createElement(rr, {
                lineWidth: 25,
                data: n,
                paddingAngle: 0.5,
                startAngle: -90,
            }),
            ft.createElement(
                "div",
                {
                    className:
                        "tw-top-[100px] absolute-x-center tw-inline-block",
                },
                ft.createElement(
                    "div",
                    {
                        className:
                            "tw-text-[22px] tw-w-full tw-text-center tw-mb-3",
                    },
                    "Round"
                ),
                ft.createElement(
                    "div",
                    { className: "flex-y-center" },
                    ft.createElement("span", {
                        className:
                            "tw-m-1 tw-h-4 tw-w-4 circle tw-bg-green-500",
                    }),
                    ft.createElement(
                        "span",
                        { className: "tw-mx-1" },
                        "passed: ",
                        t.passTestNum
                    )
                ),
                ft.createElement(
                    "div",
                    { className: "flex-y-center" },
                    ft.createElement("span", {
                        className: "tw-m-1 tw-h-4 tw-w-4 circle tw-bg-red-500",
                    }),
                    ft.createElement(
                        "span",
                        { className: "tw-mx-1" },
                        "failed: ",
                        t.failTestNum
                    )
                )
            )
        )
    );
}
function Po(e) {
    const t = Object.values(e.roundReport).reduce(
        (e, t) => (e.push(...t), e),
        []
    );
    return ft.createElement(
        "table",
        {
            className: Hn("tw-text-center tw-min-w-max", e.className),
            style: e.style,
        },
        ft.createElement(
            "thead",
            null,
            ft.createElement(
                "tr",
                null,
                ft.createElement("th", { scope: "col" }, "Session #"),
                ft.createElement("th", { scope: "col" }, "Status"),
                ft.createElement(
                    "th",
                    { scope: "col", className: "tw-text-left" },
                    "Browser"
                ),
                ft.createElement("th", { scope: "col" }, "Platform"),
                ft.createElement("th", { scope: "col" }, "Device"),
                ft.createElement("th", { scope: "col" }, "Lang"),
                ft.createElement("th", { scope: "col" }, "Time")
            )
        ),
        ft.createElement(
            "tbody",
            null,
            t.map((t, n) => {
                const r = Rn(t.type),
                    l = 0 == t.failureSuiteNum,
                    a =
                        "tw-px-4 tw-rounded-xl tw-text-white " +
                        (l ? "tw-bg-green-500" : "tw-bg-red-500");
                return ft.createElement(
                    "tr",
                    { key: n, className: "hover:tw-bg-gray-100" },
                    ft.createElement(
                        "td",
                        null,
                        ft.createElement(
                            "span",
                            {
                                className: "link",
                                onClick: () => e.onItemClick(t.$id),
                            },
                            "Session #",
                            n + 1
                        )
                    ),
                    ft.createElement(
                        "td",
                        null,
                        ft.createElement(
                            "div",
                            { className: a },
                            l ? "Passed" : "Failed"
                        )
                    ),
                    ft.createElement(
                        "td",
                        { className: "tw-flex tw-items-center" },
                        ft.createElement(r, {
                            className: "tw-inline tw-mr-2 tw-text-gray-500",
                        }),
                        t.browser
                    ),
                    ft.createElement("td", null, " ", t.platform, " "),
                    ft.createElement("td", null, " ", t.deviceName, " "),
                    ft.createElement("td", null, " ", t.lang, " "),
                    ft.createElement(
                        "td",
                        null,
                        " ",
                        t.title.replaceAll("-", ":"),
                        " "
                    )
                );
            }),
            ft.createElement(
                "tr",
                null,
                ft.createElement("td", { className: "tw-h-full" })
            )
        )
    );
}
function To(e) {
    const t = 0.84 * (window.innerWidth - 32) - 50;
    return Object.assign(
        {
            width: t,
            height: 0.4 * t,
            scales: { x: { time: !1 } },
            cursor: { y: !1, focus: { prox: 5 } },
        },
        e
    );
}
function Do(e) {
    const t = e.report,
        n = [[-1], [null]],
        r = [],
        l = [],
        a = To({
            title: "Command execution time of each suite (in sequence)",
            id: `command-time-${t.$id}`,
            plugins: [
                zn(function (e, t, l) {
                    if (t.idx == l.idx && t.sidx == l.sidx) return null;
                    if (null == t.idx || null == t.sidx) return null;
                    const a = r[n[0][t.idx]];
                    if (!a) return { show: !1 };
                    const o = e.valToPos(n[0][t.idx], "x"),
                        i = e.valToPos(n[1][t.idx], "y"),
                        s = e.series[t.sidx]._stroke;
                    return {
                        pos: { x: o, y: i },
                        children: ft.createElement(
                            x,
                            null,
                            ft.createElement("div", {
                                className: "tw-w-6 tw-h-1 tw-shadow tw-my-0.5",
                                style: { backgroundColor: s },
                            }),
                            ft.createElement(
                                "div",
                                null,
                                ft.createElement("b", null, " Command: "),
                                ft.createElement("span", null, a.name)
                            ),
                            ft.createElement(
                                "div",
                                null,
                                ft.createElement("b", null, " Execution: "),
                                ft.createElement("span", null, a.time, " ms")
                            ),
                            ft.createElement(
                                "div",
                                null,
                                ft.createElement("b", null, " Case: "),
                                ft.createElement("span", null, a.$case.title)
                            ),
                            ft.createElement(
                                "div",
                                null,
                                ft.createElement("b", null, " Suite: "),
                                ft.createElement("span", null, a.$suite.title)
                            )
                        ),
                    };
                }),
            ],
            series: [
                { label: "Command Name", value: (e, t) => l[t] },
                {
                    label: "All Suites",
                    stroke: cr({ luminosity: "bright" }),
                    width: 2,
                    value: (e, t) => `${t} ms`,
                },
            ],
            axes: [
                {
                    ticks: { show: !1 },
                    label: "Command Name",
                    size: 80,
                    rotate: 45,
                    grid: { show: !1 },
                    values: (e, t) => t.map((e) => l[e]),
                },
                { label: "ms" },
            ],
        });
    for (const o of t.suites)
        for (const e of o.cases) {
            const a = t.cases[e];
            for (const e of a.records) {
                const t = l.push(e.name);
                n[0].push(t - 1), n[1].push(e.time);
                const i = Object.assign({ $suite: o, $case: a }, e);
                r.push(i);
            }
        }
    return (
        n[0].push(l.length),
        n[1].push(null),
        ft.createElement(No, { options: a, data: n })
    );
}
function Io(e) {
    const t = e.report,
        n = [[0], [0]],
        r = [],
        l = [],
        a = To({
            title: "Command execution time of each suite (in sequence, time intervals on X-axis)",
            id: `command-time-${t.$id}`,
            plugins: [
                zn(function (e, t, l) {
                    if (t.idx == l.idx && t.sidx == l.sidx) return null;
                    if (null == t.idx || null == t.sidx) return null;
                    const a = r[t.idx - 1];
                    if (!a) return { show: !1 };
                    const o = e.valToPos(n[0][t.idx], "x"),
                        i = e.valToPos(n[1][t.idx], "y"),
                        s = e.series[t.sidx]._stroke;
                    return {
                        pos: { x: o, y: i },
                        children: ft.createElement(
                            x,
                            null,
                            ft.createElement("div", {
                                className: "tw-w-6 tw-h-1 tw-shadow tw-my-0.5",
                                style: { backgroundColor: s },
                            }),
                            ft.createElement(
                                "div",
                                null,
                                ft.createElement("b", null, " Command: "),
                                ft.createElement("span", null, a.name)
                            ),
                            ft.createElement(
                                "div",
                                null,
                                ft.createElement("b", null, " Execution: "),
                                ft.createElement("span", null, a.time, " ms")
                            ),
                            ft.createElement(
                                "div",
                                null,
                                ft.createElement("b", null, " Time: "),
                                ft.createElement(
                                    "span",
                                    null,
                                    n[0][t.idx],
                                    " ms"
                                )
                            ),
                            ft.createElement(
                                "div",
                                null,
                                ft.createElement("b", null, " Case: "),
                                ft.createElement("span", null, a.$case.title)
                            ),
                            ft.createElement(
                                "div",
                                null,
                                ft.createElement("b", null, " Suite: "),
                                ft.createElement("span", null, a.$suite.title)
                            )
                        ),
                    };
                }),
            ],
            series: [
                { label: "Time", value: (e, t) => `${t} ms` },
                {
                    label: "All Suites",
                    stroke: cr({ luminosity: "bright" }),
                    width: 2,
                    value: (e, t) => (t ? `${t} ms` : "--"),
                },
            ],
            axes: [
                {
                    label: "Time (ms)",
                    size: 80,
                    rotate: 45,
                    grid: { show: !1 },
                },
                { label: "ms" },
            ],
        });
    let o = 0;
    for (const i of t.suites)
        for (const e of i.cases) {
            const a = t.cases[e];
            for (const e of a.records) {
                l.push(e.name), (o += e.time), n[0].push(o), n[1].push(e.time);
                const t = Object.assign({ $suite: i, $case: a }, e);
                r.push(t);
            }
        }
    return (
        n[0].push(1.1 * o),
        n[1].push(null),
        ft.createElement(No, { options: a, data: n })
    );
}
function jo(e) {
    const t = e.report,
        n = [[-1]],
        r = [],
        l = To({
            title: "Command execution time of each suite (in parallel)",
            id: `command-time-${t.$id}`,
            series: [
                {
                    label: "No.",
                    value: (e, t) => (n[0][t + 1] >= 0 ? t + 1 : "--"),
                },
            ],
            plugins: [
                zn(function (e, t, l) {
                    if (t.idx == l.idx && t.sidx == l.sidx) return null;
                    if (null == t.idx || null == t.sidx) return null;
                    const a = r[t.sidx - 1][t.idx - 1];
                    if (!a) return { show: !1 };
                    const o = e.valToPos(n[0][t.idx], "x"),
                        i = e.valToPos(n[t.sidx][t.idx], "y"),
                        s = e.series[t.sidx]._stroke;
                    return {
                        pos: { x: o, y: i },
                        children: ft.createElement(
                            x,
                            null,
                            ft.createElement("div", {
                                className: "tw-w-6 tw-h-1 tw-shadow tw-my-0.5",
                                style: { backgroundColor: s },
                            }),
                            ft.createElement(
                                "div",
                                null,
                                ft.createElement("b", null, " Command: "),
                                ft.createElement("span", null, a.name)
                            ),
                            ft.createElement(
                                "div",
                                null,
                                ft.createElement("b", null, " Execution: "),
                                ft.createElement("span", null, a.time, " ms")
                            ),
                            ft.createElement(
                                "div",
                                null,
                                ft.createElement("b", null, " No.: "),
                                ft.createElement("span", null, t.idx)
                            ),
                            ft.createElement(
                                "div",
                                null,
                                ft.createElement("b", null, " Case: "),
                                ft.createElement("span", null, a.$case.title)
                            ),
                            ft.createElement(
                                "div",
                                null,
                                ft.createElement("b", null, " Suite: "),
                                ft.createElement("span", null, a.$suite.title)
                            )
                        ),
                    };
                }),
            ],
            axes: [
                {
                    ticks: { show: !1 },
                    label: "No.",
                    grid: { show: !1 },
                    values: (e, t) =>
                        t.map((e) => (n[0][e + 1] >= 0 ? e + 1 : null)),
                },
                { label: "ms" },
            ],
        });
    for (let a = 0; a < t.suites.length; a++) {
        const e = t.suites[a];
        l.series.push({
            label: e.title,
            stroke: cr({ luminosity: "bright" }),
            width: 2,
            value: (e, t) => `${t} ms`,
        }),
            n.push([null]),
            r.push([]);
        let o = 0;
        for (let l = 0; l < e.cases.length; l++) {
            const i = t.cases[e.cases[l]];
            if (i)
                for (const t of i.records) {
                    n[0][o + 1] || (n[0][o + 1] = o), o++;
                    const l = Object.assign({ $suite: e, $case: i }, t);
                    r[a].push(l), n[a + 1].push(t.time);
                }
        }
        n[0][o + 1] || (n[0][o + 1] = o), n[a + 1].push(null);
    }
    return console.log(l, n), ft.createElement(No, { options: l, data: n });
}
const Lo = {
    ar: "Arabic",
    am: "Amharic",
    bg: "Bulgarian",
    bn: "Bengali",
    ca: "Catalan",
    cs: "Czech",
    da: "Danish",
    de: "German",
    el: "Greek",
    en: "English",
    en_GB: "English (Great Britain)",
    en_US: "English (USA)",
    es: "Spanish",
    es_419: "Spanish (Latin America and Caribbean)",
    et: "Estonian",
    fa: "Persian",
    fi: "Finnish",
    fil: "Filipino",
    fr: "French",
    gu: "Gujarati",
    he: "Hebrew",
    hi: "Hindi",
    hr: "Croatian",
    hu: "Hungarian",
    id: "Indonesian",
    it: "Italian",
    ja: "Japanese",
    kn: "Kannada",
    ko: "Korean",
    lt: "Lithuanian",
    lv: "Latvian",
    ml: "Malayalam",
    mr: "Marathi",
    ms: "Malay",
    nl: "Dutch",
    no: "Norwegian",
    pl: "Polish",
    pt_BR: "Portuguese (Brazil)",
    pt_PT: "Portuguese (Portugal)",
    ro: "Romanian",
    ru: "Russian",
    sk: "Slovak",
    sl: "Slovenian",
    sr: "Serbian",
    sv: "Swedish",
    sw: "Swahili",
    ta: "Tamil",
    te: "Telugu",
    th: "Thai",
    tr: "Turkish",
    uk: "Ukrainian",
    vi: "Vietnamese",
    zh_CN: "Chinese (China)",
    zh_TW: "Chinese (Taiwan)",
};
var Ro = (function () {
    function e(e, t) {
        for (
            var n,
                r = (function (e) {
                    for (
                        var t = e[0].width,
                            n = e[0].height,
                            r = e[0].duration,
                            l = 1;
                        l < e.length;
                        l++
                    ) {
                        if (e[l].width != t)
                            throw "Frame " + (l + 1) + " has a different width";
                        if (e[l].height != n)
                            throw (
                                "Frame " + (l + 1) + " has a different height"
                            );
                        if (e[l].duration < 0 || e[l].duration > 32767)
                            throw (
                                "Frame " +
                                (l + 1) +
                                " has a weird duration (must be between 0 and 32767)"
                            );
                        r += e[l].duration;
                    }
                    return { duration: r, width: t, height: n };
                })(e),
                l = [
                    {
                        id: 440786851,
                        data: [
                            { data: 1, id: 17030 },
                            { data: 1, id: 17143 },
                            { data: 4, id: 17138 },
                            { data: 8, id: 17139 },
                            { data: "webm", id: 17026 },
                            { data: 2, id: 17031 },
                            { data: 2, id: 17029 },
                        ],
                    },
                    {
                        id: 408125543,
                        data: [
                            {
                                id: 357149030,
                                data: [
                                    { data: 1e6, id: 2807729 },
                                    { data: "whammy", id: 19840 },
                                    { data: "whammy", id: 22337 },
                                    {
                                        data:
                                            ((n = r.duration),
                                            [].slice
                                                .call(
                                                    new Uint8Array(
                                                        new Float64Array([
                                                            n,
                                                        ]).buffer
                                                    ),
                                                    0
                                                )
                                                .map(function (e) {
                                                    return String.fromCharCode(
                                                        e
                                                    );
                                                })
                                                .reverse()
                                                .join("")),
                                        id: 17545,
                                    },
                                ],
                            },
                            {
                                id: 374648427,
                                data: [
                                    {
                                        id: 174,
                                        data: [
                                            { data: 1, id: 215 },
                                            { data: 1, id: 29637 },
                                            { data: 0, id: 156 },
                                            { data: "und", id: 2274716 },
                                            { data: "V_VP8", id: 134 },
                                            { data: "VP8", id: 2459272 },
                                            { data: 1, id: 131 },
                                            {
                                                id: 224,
                                                data: [
                                                    { data: r.width, id: 176 },
                                                    { data: r.height, id: 186 },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            { id: 475249515, data: [] },
                        ],
                    },
                ],
                o = l[1],
                s = o.data[2],
                u = 0,
                c = 0;
            u < e.length;

        ) {
            var f = {
                id: 187,
                data: [
                    { data: Math.round(c), id: 179 },
                    {
                        id: 183,
                        data: [
                            { data: 1, id: 247 },
                            { data: 0, size: 8, id: 241 },
                        ],
                    },
                ],
            };
            s.data.push(f);
            var d = [],
                m = 0;
            do {
                d.push(e[u]), (m += e[u].duration), u++;
            } while (u < e.length && m < 3e4);
            var p = 0,
                h = {
                    id: 524531317,
                    data: [{ data: Math.round(c), id: 231 }].concat(
                        d.map(function (e) {
                            var t = i({
                                discardable: 0,
                                frame: e.data.slice(e.data.indexOf("*") - 3),
                                invisible: 0,
                                keyframe: 1,
                                lacing: 0,
                                trackNum: 1,
                                timecode: Math.round(p),
                            });
                            return (p += e.duration), { data: t, id: 163 };
                        })
                    ),
                };
            o.data.push(h), (c += m);
        }
        for (var v = 0, _ = 0; _ < o.data.length; _++) {
            _ >= 3 && (s.data[_ - 3].data[1].data[1].data = v);
            var g = a([o.data[_]], t);
            (v += g.size || g.byteLength || g.length),
                2 != _ && (o.data[_] = g);
        }
        return a(l, t);
    }
    function t(e) {
        for (var t = []; e > 0; ) t.push(255 & e), (e >>= 8);
        return new Uint8Array(t.reverse());
    }
    function n(e, t) {
        for (var n = new Uint8Array(t), r = t - 1; r >= 0; r--)
            (n[r] = 255 & e), (e >>= 8);
        return n;
    }
    function r(e) {
        for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++)
            t[n] = e.charCodeAt(n);
        return t;
    }
    function l(e) {
        var t = [];
        e = (e.length % 8 ? new Array(9 - (e.length % 8)).join("0") : "") + e;
        for (var n = 0; n < e.length; n += 8)
            t.push(parseInt(e.substr(n, 8), 2));
        return new Uint8Array(t);
    }
    function a(e, i) {
        for (var s = [], u = 0; u < e.length; u++)
            if ("id" in e[u]) {
                var c = e[u].data;
                "object" == typeof c && (c = a(c, i)),
                    "number" == typeof c &&
                        (c =
                            "size" in e[u]
                                ? n(c, e[u].size)
                                : l(c.toString(2))),
                    "string" == typeof c && (c = r(c)),
                    c.length;
                var f = c.size || c.byteLength || c.length,
                    d = Math.ceil(Math.ceil(Math.log(f) / Math.log(2)) / 8),
                    m = f.toString(2),
                    p = new Array(7 * d + 7 + 1 - m.length).join("0") + m,
                    h = new Array(d).join("0") + "1" + p;
                s.push(t(e[u].id)), s.push(l(h)), s.push(c);
            } else s.push(e[u]);
        if (i) {
            var v = o(s);
            return new Uint8Array(v);
        }
        return new Blob(s, { type: "video/webm" });
    }
    function o(e, t) {
        null == t && (t = []);
        for (var n = 0; n < e.length; n++)
            "object" == typeof e[n] ? o(e[n], t) : t.push(e[n]);
        return t;
    }
    function i(e) {
        var t = 0;
        if (
            (e.keyframe && (t |= 128),
            e.invisible && (t |= 8),
            e.lacing && (t |= e.lacing << 1),
            e.discardable && (t |= 1),
            e.trackNum > 127)
        )
            throw "TrackNumber > 127 not supported";
        return (
            [128 | e.trackNum, e.timecode >> 8, 255 & e.timecode, t]
                .map(function (e) {
                    return String.fromCharCode(e);
                })
                .join("") + e.frame
        );
    }
    function s(e) {
        for (
            var t = e.RIFF[0].WEBP[0], n = t.indexOf("*"), r = 0, l = [];
            r < 4;
            r++
        )
            l[r] = t.charCodeAt(n + 3 + r);
        return {
            width: 16383 & ((l[1] << 8) | l[0]),
            height: 16383 & ((l[3] << 8) | l[2]),
            data: t,
            riff: e,
        };
    }
    function u(e) {
        for (var t = 0, n = {}; t < e.length; ) {
            var r = e.substr(t, 4);
            if (((n[r] = n[r] || []), "RIFF" == r || "LIST" == r)) {
                var l = parseInt(
                        e
                            .substr(t + 4, 4)
                            .split("")
                            .map(function (e) {
                                var t = e.charCodeAt(0).toString(2);
                                return (
                                    new Array(8 - t.length + 1).join("0") + t
                                );
                            })
                            .join(""),
                        2
                    ),
                    a = e.substr(t + 4 + 4, l);
                (t += 8 + l), n[r].push(u(a));
            } else
                "WEBP" == r
                    ? (n[r].push(e.substr(t + 8)), (t = e.length))
                    : (n[r].push(e.substr(t + 4)), (t = e.length));
        }
        return n;
    }
    function c(e, t) {
        (this.frames = []),
            (this.duration = 1e3 / e),
            (this.quality = t || 0.8);
    }
    return (
        (c.prototype.add = function (e, t) {
            if (void 0 !== t && this.duration)
                throw "you can't pass a duration if the fps is set";
            if (void 0 === t && !this.duration)
                throw "if you don't have the fps set, you need to have durations here.";
            if ((e.canvas && (e = e.canvas), e.toDataURL))
                e = e.getContext("2d").getImageData(0, 0, e.width, e.height);
            else if ("string" != typeof e)
                throw "frame must be a a HTMLCanvasElement, a CanvasRenderingContext2D or a DataURI formatted string";
            if ("string" == typeof e && !/^data:image\/webp;base64,/gi.test(e))
                throw "Input must be formatted properly as a base64 encoded DataURI of type image/webp";
            this.frames.push({ image: e, duration: t || this.duration });
        }),
        (c.prototype.encodeFrames = function (e) {
            if (this.frames[0].image instanceof ImageData) {
                var t = this.frames,
                    n = document.createElement("canvas"),
                    r = n.getContext("2d");
                (n.width = this.frames[0].image.width),
                    (n.height = this.frames[0].image.height);
                var l = function (a) {
                    console.log("encodeFrame", a);
                    var o = t[a];
                    r.putImageData(o.image, 0, 0),
                        (o.image = n.toDataURL("image/webp", this.quality)),
                        a < t.length - 1
                            ? setTimeout(function () {
                                  l(a + 1);
                              }, 1)
                            : e();
                }.bind(this);
                l(0);
            } else e();
        }),
        (c.prototype.compile = function (t, n) {
            this.encodeFrames(
                function () {
                    var r = new e(
                        this.frames.map(function (e) {
                            var t = s(u(atob(e.image.slice(23))));
                            return (t.duration = e.duration), t;
                        }),
                        t
                    );
                    n(r);
                }.bind(this)
            );
        }),
        {
            Video: c,
            fromImageArray: function (t, n, r) {
                return e(
                    t.map(function (e) {
                        var t = s(u(atob(e.slice(23))));
                        return (t.duration = 1e3 / n), t;
                    }),
                    r
                );
            },
            toWebM: e,
        }
    );
})();
const Uo = document.getElementById("my-modal"),
    Ho = document.getElementById("modal-image"),
    Fo = document.getElementById("modal-video");
async function zo(e, t) {
    await (async function (e, t) {
        const n = new Ro.Video(1);
        await (async function (e, t, n) {
            const r = document.querySelectorAll(
                `#report-${n} .command-snapshot.case-${t} img`
            );
            for (const l of r) {
                const t = l;
                t.src && "" !== t.src && (await Bo(e, t.src));
            }
            return !0;
        })(n, e, t);
        const r = await new Promise((e) => {
            n.compile(!1, e);
        });
        return (Fo.src = URL.createObjectURL(r)), Fo.load(), !0;
    })(e, t),
        (Uo.style.display = "block"),
        (Ho.style.display = "none"),
        (Fo.style.display = "block");
}
async function Bo(e, t) {
    const n = document.createElement("canvas"),
        r = n.getContext("2d"),
        l = document.createElement("img");
    return (
        await new Promise((e) => {
            (l.onload = e), (l.src = t);
        }),
        (n.width = l.width),
        (n.height = l.height),
        r.drawImage(l, 0, 0),
        e.add(r),
        !0
    );
}
var Wo, Vo;
function Yo(e) {
    return ft.createElement(
        "div",
        {
            className: Hn(
                "tw-overflow-y-auto tw-mb-5 tw-shadow tw-rounded-lg",
                e.className
            ),
            style: e.style,
        },
        ft.createElement(
            "table",
            { className: Hn(e.id), id: e.id },
            ft.createElement(
                "thead",
                null,
                ft.createElement(
                    "tr",
                    null,
                    ft.createElement(
                        "th",
                        {
                            scope: "col",
                            className: "table-title",
                            colSpan: e.colSpan,
                        },
                        e.title
                    )
                )
            ),
            ft.createElement("tbody", null, e.children)
        )
    );
}
function Go(e) {
    const { roundReport: t, onItemClick: n } = e,
        r = (function (e) {
            const t = {
                    passTestNum: 0,
                    failTestNum: 0,
                    totalTestNum: 0,
                    reportIdMap: {},
                },
                n = {
                    version: "",
                    browsers: [],
                    platforms: [],
                    startTime: "",
                    endTime: "",
                    totalSession: 0,
                    passedSuite: 0,
                    totalSuite: 0,
                    passedCase: 0,
                    totalCase: 0,
                    roundInfo: t,
                };
            for (const r of Object.values(e))
                if (0 != r.length)
                    for (let e = 0; e < r.length; e++) {
                        const l = r[e];
                        if (null != l) {
                            "" == n.version &&
                                (n.version = l.version.sideex.join(".")),
                                -1 == n.browsers.indexOf(l.browser) &&
                                    n.browsers.push(l.browser),
                                -1 == n.platforms.indexOf(l.platform) &&
                                    n.platforms.push(l.platform),
                                "" == n.startTime &&
                                    (n.startTime = l.startTime),
                                n.totalSession++,
                                (n.endTime = l.endTime),
                                (n.passedSuite += l.successSuiteNum),
                                (n.totalSuite += l.suites.length),
                                (n.passedCase += l.successCaseNum);
                            for (const e of l.suites)
                                n.totalCase += e.cases.length;
                            l.failureSuiteNum > 0
                                ? t.failTestNum++
                                : t.passTestNum++,
                                (t.reportIdMap[l.$id] = l);
                        }
                    }
            return (t.totalTestNum = t.passTestNum + t.failTestNum), n;
        })(t);
    return ft.createElement(
        Yo,
        {
            title: "Overview",
            id: Wo.SUMMARY,
            colSpan: 3,
            className: Hn("table-border tw-mb-8", e.className),
            style: e.style,
        },
        ft.createElement(
            "tr",
            null,
            ft.createElement("td", null, "Total Sessions"),
            ft.createElement("td", null, ":"),
            ft.createElement("td", { id: "language" }, r.totalSession)
        ),
        ft.createElement(
            "tr",
            null,
            ft.createElement("td", null, "SideeX Version"),
            ft.createElement("td", null, ":"),
            ft.createElement("td", { id: "sideex-version" }, r.version)
        ),
        ft.createElement(
            "tr",
            null,
            ft.createElement("td", null, "Browser"),
            ft.createElement("td", null, ":"),
            ft.createElement("td", { id: "browser" }, r.browsers.join(", "))
        ),
        ft.createElement(
            "tr",
            null,
            ft.createElement("td", null, "Platform"),
            ft.createElement("td", null, ":"),
            ft.createElement("td", { id: "platform" }, r.platforms.join(", "))
        ),
        ft.createElement(
            "tr",
            null,
            ft.createElement("td", null, "Start Time"),
            ft.createElement("td", null, ":"),
            ft.createElement("td", { id: "start-time" }, r.startTime)
        ),
        ft.createElement(
            "tr",
            null,
            ft.createElement("td", null, "End Time"),
            ft.createElement("td", null, ":"),
            ft.createElement("td", { id: "end-time" }, r.endTime)
        ),
        ft.createElement(
            "tr",
            null,
            ft.createElement("td", null, "Passed Suite(s)"),
            ft.createElement("td", null, ":"),
            ft.createElement(
                "td",
                { id: "suite-runs" },
                r.passedSuite,
                " / ",
                r.totalSuite
            )
        ),
        ft.createElement(
            "tr",
            null,
            ft.createElement("td", null, "Passed Case(s)"),
            ft.createElement("td", null, ":"),
            ft.createElement(
                "td",
                { id: "case-runs" },
                r.passedCase,
                " / ",
                r.totalCase
            )
        ),
        ft.createElement(
            "tr",
            null,
            ft.createElement(
                "td",
                { colSpan: 3 },
                ft.createElement("div", { className: "tw-flex tw-pl-3" }),
                ft.createElement(
                    x,
                    null,
                    ft.createElement("hr", null),
                    ft.createElement(Oo, {
                        round: 1,
                        roundReport: t,
                        onItemClick: n,
                        info: r.roundInfo,
                    })
                )
            )
        )
    );
}
function Zo(e) {
    var t;
    const { report: n } = e;
    let r = 0;
    for (const a of n.suites) r += a.cases.length;
    const l = n.lang
        ? `${n.lang} (${null != (t = Lo[n.lang]) ? t : "Unknown Language"})`
        : "(default)";
    return ft.createElement(
        Yo,
        {
            title: "Summary",
            id: Wo.SUMMARY,
            colSpan: 3,
            className: Hn("table-border", e.className),
            style: e.style,
        },
        ft.createElement(
            "tr",
            null,
            ft.createElement("td", null, "SideeX Version"),
            ft.createElement("td", null, ":"),
            ft.createElement(
                "td",
                { id: "sideex-version" },
                n.version.sideex.join(".")
            )
        ),
        ft.createElement(
            "tr",
            null,
            ft.createElement("td", null, "Browser"),
            ft.createElement("td", null, ":"),
            ft.createElement("td", { id: "browser" }, n.browser)
        ),
        ft.createElement(
            "tr",
            null,
            ft.createElement("td", null, "Platform"),
            ft.createElement("td", null, ":"),
            ft.createElement("td", { id: "platform" }, n.platform)
        ),
        ft.createElement(
            "tr",
            null,
            ft.createElement("td", null, "Language"),
            ft.createElement("td", null, ":"),
            ft.createElement("td", { id: "language" }, l)
        ),
        ft.createElement(
            "tr",
            null,
            ft.createElement("td", null, "Start Time"),
            ft.createElement("td", null, ":"),
            ft.createElement("td", { id: "start-time" }, n.startTime)
        ),
        ft.createElement(
            "tr",
            null,
            ft.createElement("td", null, "End Time"),
            ft.createElement("td", null, ":"),
            ft.createElement("td", { id: "end-time" }, n.endTime)
        ),
        ft.createElement(
            "tr",
            null,
            ft.createElement("td", null, "Passed Suite(s)"),
            ft.createElement("td", null, ":"),
            ft.createElement(
                "td",
                { id: "suite-runs" },
                n.successSuiteNum,
                " / ",
                n.suites.length
            )
        ),
        ft.createElement(
            "tr",
            null,
            ft.createElement("td", null, "Passed Case(s)"),
            ft.createElement("td", null, ":"),
            ft.createElement(
                "td",
                { id: "case-runs" },
                n.successCaseNum,
                " / ",
                r
            )
        )
    );
}
function qo(e) {
    return ft.createElement(
        Yo,
        {
            title: "Logs",
            id: Wo.LOGS,
            colSpan: 3,
            className: Hn("table-border", e.className),
            style: e.style,
        },
        e.report.logs.map((e, t) =>
            ft.createElement(
                "tr",
                { className: `log ${e.type}`, key: t },
                ft.createElement("td", { className: "log-line" }, t + 1),
                ft.createElement(
                    "td",
                    { className: "log-type" },
                    e.type.toUpperCase()
                ),
                ft.createElement(
                    "td",
                    { className: "log-content" },
                    ft.createElement(
                        "span",
                        { style: { whiteSpace: "pre-wrap" } },
                        e.message
                    )
                )
            )
        )
    );
}
function Ko(e) {
    let t = "";
    const n = [];
    if (null != e || null != e)
        for (const [r, l] of Object.entries(e))
            for (const [e, a] of Object.entries(l))
                "name" == e &&
                    (-1 == n.indexOf(a) ? (t += a) : (t += "Global - " + a),
                    n.push(a),
                    (t += ":")),
                    "value" == e && (t += a + "\n");
    return t;
}
function Xo(e) {
    const { report: t, index: n } = e,
        r = e.case,
        l = t.$id;
    let a = 1;
    return ft.createElement(
        x,
        null,
        ft.createElement(
            "tr",
            { className: `case-title ${r.status}` },
            ft.createElement("td", { colSpan: 10 }, r.title)
        ),
        ft.createElement(
            "tr",
            { className: "case-localVars" },
            ft.createElement("td", { colSpan: 10 }, "Local Variables")
        ),
        ft.createElement(
            "tr",
            null,
            ft.createElement("td", { colSpan: 3 }, "Name"),
            ft.createElement("td", { colSpan: 7 }, "Value")
        ),
        r.localVars.map((e, t) =>
            ft.createElement(
                "tr",
                { className: "local-variable", key: t },
                ft.createElement(
                    "td",
                    { colSpan: 3, className: "variable-name" },
                    e.name
                ),
                ft.createElement(
                    "td",
                    { colSpan: 7, className: "variable-value" },
                    e.value
                )
            )
        ),
        ft.createElement(
            "tr",
            { className: "case-globalVars" },
            ft.createElement("td", { colSpan: 10 }, "Global Variables")
        ),
        ft.createElement(
            "tr",
            null,
            ft.createElement("td", { colSpan: 3 }, "Name"),
            ft.createElement("td", { colSpan: 7 }, "Value")
        ),
        r.globalVars.map((e, t) =>
            ft.createElement(
                "tr",
                { className: "global-variable", key: t },
                ft.createElement(
                    "td",
                    { colSpan: 3, className: "variable-name" },
                    e.name
                ),
                ft.createElement(
                    "td",
                    { colSpan: 7, className: "variable-value" },
                    e.value
                )
            )
        ),
        ft.createElement(
            "tr",
            { className: "case-commands" },
            ft.createElement("td", { colSpan: 10 }, "Commands")
        ),
        ft.createElement(
            "tr",
            null,
            ft.createElement("td", { colSpan: 2 }, "Command"),
            ft.createElement("td", { colSpan: 2 }, "Target"),
            ft.createElement("td", { colSpan: 2 }, "Value"),
            ft.createElement(
                "td",
                { colSpan: 2 },
                ft.createElement(
                    "div",
                    {
                        className: `video-icon case-${n} tw-inline-block tw-cursor-pointer`,
                        onClick: () => zo(n, t.$id),
                    },
                    ft.createElement(jn, { style: { height: "1em" } })
                )
            ),
            ft.createElement("td", { colSpan: 2 }, "Note")
        ),
        r.records.map((e, r) => {
            var o, i;
            const s = ft.createElement(
                "tr",
                {
                    className: `command ${e.status}`,
                    key: r,
                    id: `command-${a}`,
                },
                ft.createElement(
                    "td",
                    { colSpan: 2, className: "command-name" },
                    e.name
                ),
                ft.createElement(
                    "td",
                    { colSpan: 2, className: "command-target" },
                    e.target
                ),
                ft.createElement(
                    "td",
                    { colSpan: 2, className: "command-value" },
                    e.value
                ),
                ft.createElement(
                    "td",
                    {
                        colSpan: 2,
                        className: `command-snapshot case-${n} tw-cursor-pointer`,
                    },
                    e.snapshot
                        ? ft.createElement("img", {
                              className: "snapshot-icon tw-w-full",
                              src: t.snapshot[e.snapshot].url,
                              onClick: () => {
                                  return (
                                      (n = t.snapshot[e.snapshot].url),
                                      (Ho.src = n),
                                      (Uo.style.display = "block"),
                                      (Ho.style.display = "block"),
                                      void (Fo.style.display = "none")
                                  );
                                  var n;
                              },
                          })
                        : "No image"
                ),
                ft.createElement(
                    "td",
                    {
                        colSpan: 2,
                        className: "command-time",
                        style: { display: "none" },
                    },
                    e.time
                ),
                ft.createElement(
                    "td",
                    { colSpan: 2 },
                    ft.createElement(
                        "a",
                        {
                            style: { textDecoration: "none" },
                            href:
                                null == (o = e.metadata)
                                    ? void 0
                                    : o.websiteUrl,
                            title:
                                null == (i = e.metadata)
                                    ? void 0
                                    : i.websiteTitle,
                        },
                        e.metadata ? "🔗" : null
                    ),
                    ft.createElement(
                        "span",
                        { title: Ko(e.valData) },
                        null != e.valData ? "📋" : null
                    ),
                    ft.createElement(
                        "div",
                        {
                            id: `${l}-${n - 1}`,
                            className: `${l}-valData`,
                            key: `${l}-valData`,
                            style: { display: "none" },
                        },
                        Ko(e.valData)
                    )
                )
            );
            return a++, s;
        })
    );
}
function Qo(e) {
    const { report: t } = e;
    let n = 1;
    return ft.createElement(
        Yo,
        {
            title: "Commands",
            id: Wo.COMMANDS,
            colSpan: 10,
            style: { maxHeight: "1000px" },
        },
        t.suites.map((e, r) =>
            ft.createElement(
                x,
                { key: r },
                ft.createElement(
                    "tr",
                    { className: `suite-title ${e.status}` },
                    ft.createElement("td", { colSpan: 10 }, e.title)
                ),
                e.cases.map((e, r) => {
                    const l = t.cases[e];
                    return ft.createElement(Xo, {
                        report: t,
                        case: l,
                        key: r,
                        index: n++,
                    });
                })
            )
        )
    );
}
Uo.addEventListener("click", () => {
    (Uo.style.display = "none"),
        (Ho.style.display = "none"),
        (Fo.style.display = "none");
}),
    Fo.addEventListener("click", function (e) {
        e.stopPropagation(),
            e.preventDefault(),
            this.paused ? this.play() : this.pause();
    }),
    ((Vo = Wo || (Wo = {})).OVERVIEW = "overview"),
    (Vo.SUMMARY = "summary"),
    (Vo.COMMANDS = "commands"),
    (Vo.LOGS = "logs");
let $o = (e = 21) => {
    let t = "",
        n = crypto.getRandomValues(new Uint8Array(e));
    for (; e--; ) {
        let r = 63 & n[e];
        t +=
            r < 36
                ? r.toString(36)
                : r < 62
                ? (r - 26).toString(36).toUpperCase()
                : r < 63
                ? "_"
                : "-";
    }
    return t;
};
function Jo(e) {
    const t = Object.values(e.roundReport);
    return ft.createElement(
        x,
        null,
        Object.entries(t).map(([t, n]) =>
            ft.createElement(ti, {
                key: t + 0,
                browser: t,
                reports: n,
                onItemClick: e.onItemClick,
                activeId: e.activeId,
            })
        )
    );
}
function ei(e, t) {
    const n =
        "list-item nav-border tw-cursor-pointer tw-border-l-4 tw-border-solid";
    if (!e) return Hn(n, "tw-border-l-transparent");
    const r = 0 == e.failureSuiteNum;
    return Hn(
        n,
        r ? "tw-border-l-green-500" : "tw-border-l-red-500",
        t === e.$id
            ? r
                ? "tw-bg-green-100 tw-text-green-900"
                : "tw-bg-red-100 tw-text-red-900"
            : ""
    );
}
function ti(e) {
    console.log("reports: ", e.reports);
    const { reports: t, browser: n } = e;
    if (!t.length) return null;
    const r = Rn(t[0].type);
    if (1 == t.length) {
        const n = t[0];
        return ft.createElement(
            "div",
            {
                className: ei(t[0], e.activeId),
                onClick: e.onItemClick && (() => e.onItemClick(n.$id)),
            },
            ft.createElement(r, {
                className: "tw-inline tw-mr-2 tw-text-gray-500",
            }),
            n.type
        );
    }
    return ft.createElement(
        x,
        null,
        ft.createElement(
            "div",
            { key: n, className: "nav-border" },
            ft.createElement(
                Qt,
                null,
                ft.createElement(
                    Qt.Button,
                    { as: "div", className: ei(null, e.activeId) },
                    ft.createElement(r, {
                        className: "tw-inline tw-mr-2 tw-text-gray-500",
                    }),
                    t[0].type,
                    ft.createElement(Dn, {
                        className: Hn(
                            "tw-absolute tw-right-3 tw-top-1/2 tw--translate-y-1/2"
                        ),
                    })
                ),
                ft.createElement(
                    Ln,
                    null,
                    ft.createElement(
                        Qt.Panel,
                        null,
                        t.map((t) =>
                            ft.createElement(
                                "div",
                                {
                                    className: Hn("tw-pl-8", ei(t, e.activeId)),
                                    key: t.$id,
                                    onClick:
                                        e.onItemClick &&
                                        (() => e.onItemClick(t.$id)),
                                },
                                (function (e) {
                                    var t;
                                    const n = e
                                        ? null != (t = Lo[e])
                                            ? t
                                            : e
                                        : "(default)";
                                    return ft.createElement(
                                        x,
                                        null,
                                        n,
                                        " ",
                                        ft.createElement("br", null),
                                        " ",
                                        Lo[e] ? "" : "(Unknown Language)"
                                    );
                                })(t.lang)
                            )
                        )
                    )
                )
            )
        )
    );
}
function ni(e) {
    const { report: t } = e;
    return ft.createElement(
        "div",
        {
            id: `report-${t.$id}`,
            key: t.$id,
            className: e.className,
            style: e.style,
        },
        ft.createElement(Zo, { report: t, className: "tw-mb-5" }),
        ft.createElement(Qo, { report: t }),
        ft.createElement(
            "div",
            { className: "time-chart" },
            ft.createElement(Do, { report: t })
        ),
        ft.createElement(
            "div",
            { className: "time-chart" },
            ft.createElement(Io, { report: t })
        ),
        ft.createElement(
            "div",
            { className: "time-chart" },
            ft.createElement(jo, { report: t })
        ),
        ft.createElement(qo, { report: t, className: "tw-mb-5" })
    );
}
class ri extends k {
    constructor(e) {
        super(e),
            (this.roundReport = e.report),
            (this.state = { activeId: "overview" });
        for (const t of Object.values(this.roundReport))
            if (0 != t.length)
                for (let e = 0; e < t.length; e++) {
                    t[e].$id = $o();
                }
    }
    render() {
        const e = (e) => {
            this.setState({ activeId: e }),
                window.scrollTo({ top: 0, behavior: "smooth" });
        };
        return ft.createElement(
            x,
            null,
            ft.createElement(
                "div",
                {
                    id: "left-nav",
                    style: { width: "16%" },
                    className:
                        "tw-rounded-3xl tw-shadow-md tw-overflow-x-hidden tw-pb-8",
                },
                ft.createElement(
                    "div",
                    {
                        className:
                            "list-item tw-content-center tw-flex tw-flex-wrap tw-justify-center tw-text-center",
                        style: { backgroundColor: "#213647" },
                    },
                    ft.createElement("img", {
                        className: "tw-m-1",
                        style: { height: "30px" },
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsSAAALEgHS3X78AAANDklEQVR42u2da2wcVxXHf3dmvXbW9naVlNAkFt0IJyaJRDdVoQ8gXYukrQJtHKeliBTZJv2AKMVxhVREC05AQPkA6UOqqqptHEr6SklSwqskKA5NiIAm3Yo8aLFcU5yQlrjerJ34sd65fNjZeL3exzzXm9pHuhp79s7snfM/53/OPTNzF2ZkgvzpV8uCmfvO7bquYWj3Dc1ufJ9nRuVJeeHlxcEKRHscCdCS2n9q16c2adAuYeEMAC7IozuCwQqU9gSyWUN03LLuRAvAmztD4VkoWySENOjwNfylZwYAB+WBF+c3+4TSlJAyjABNyrbGO956eO+vljb4UFs1COtdoxpys1vjmFYArH9hdsiH0lop1AYJAX13p4QDihBX7nq5rj9tPwAaPPKRtX/tcWtM4lJQXN12TwAI+YSKH0/YL1T8woMffSs8+JOfUa1/Vo0avUx4IhuGTwZ8Ql1TiRL2CTVYiYpPqCS3SrQSNVApVCqFig+FyoufqfhQInWNR5e7eW2eElR2iKT7XwUEGacCQ9KtDXFajtCtDfOONkSlUAGSoXWy9QXynCqaQK51+3o9JWLdDcAaXdkBI8eNSI1+JKflCHEk5+QYZ2V8gmuXo1geVwLZsrQx0vOhBCBD6Q1GjxuRGmcZ5YyUro4vAS3XNL65uxi68BRZ8WGgCWi2aJVuDzGqQduKdf/oKJZOPEVUfLtZPi+mLIzH+OToB1Rq8aDcSkC0EC3G9wqXFR/UFd9cbIWmYkCuDKcSlSXEWaaNUJu4QLUcG4/UkijwiGhi0yULQN12z0Zd+YGpsOhMAL6mxJmP5KNIqpAskGNcTI/GFZ+5jSBoE3fReckAoFv91qmmm0wA/ugdzKXkwkDAw+IrtJU8AHXbPQ268gNMsUwCwDdYyNoLARIBWsSXiTg5TsVB5W8CdpWC8rOKqjdPxjZfm9gnhMJ+ucN42lw0D6jb7tlqN9DO6/cwL+qhaliw+D1vcmRC6ls4euUIAP+aG2egXDPvAYFBa/STrQ9sFuucCdDCpuIDwH4gZOa4qiGFq7srWN5dweLTXpa/UwGKRCiAIkEBocjk32rq79RnkjOBBG/PjXOkZoSjC0Z5+/KxwgDMGbRCO/n6dIi14/cNig6AWeUvOu1lxQkfK477WHTaO3kUJgDI7DcwS+PAwhF+s3iII/Pi2QGYO2jP6rNvdwMt4jbrcwbhpvLn9XtYfaSK1a9XMa/fk38UNgBI9UORnPEneG7ZEL/5+DBxrxgHYN6gPavP3TeCoF58wRoIVmfCu/Ip/+ruCjbsDbC8u8KZ+HnNdZR96jqUTyxFmV+DunhpbnobjPFg9zG+232c34qj/FJ0ErvQm7xSZ6w+s09I10d9UTwgX8BddNrLxj2zzSs+wwNEoBrvqlWUrVxF2edvsg3g3n/8iFXvPAiz9YzGDSCgQ9xkPiYIk8rfCGzJFlQ37Atw50G/dSJUJOrHFjCr9VuUrVqF8PtxTM50wqv1SRr7KHCZo3Egvc9msdJcdiRMKD8EvJHN6h/6xdz8HF9oEJf58W16gPLbG92ZA7zfCfvqx5XlBeYB5bbpJ9t2rajHcCnbY1D5AZ3nJsjqI1Vs3DObqiHr87mKDc3Muu9eZy0+m5l505SnAb3AHL1JR4HYKv9Mj1hhbMZs1GzbSd4evCite2ZbpxxA+P1UP/U4nuuvdX8WrGQAkGoxYBiYq3uDM0AEkGwFlhsdWiHrDwMb0/c9+NLltpSvLltC4PD+4ig/5QFlOZoGvAdcKFCO8BgoWYz3CcnDxmKBEe7Ymqn81UeqLOui/I5G/C/90l3KyUVBuZoH6NebufpQvj7t8u+FJ6mKgawn6KTyK3/+U0vKP/lWlz0KKjPQhoGzen/zVj+5KZMzRsMxQA+87an/7zzod0T5ZmTf/oM89sQ2Tr7Vhb+6itjAIAvmX0HjbbfQtH4d/uoqcx4gDbQE0Ad8RAfCXjwIywjNIkSHFQ/YmCotrz5SReue2bY437fpAVPHfOf7P+Ubbd8D4PXX9vD6a3toWn87p06f4bEnOvjq3W3EBgbte0A2SkKnI80y/aS3dqsU1Jo+u7WT7Zjl/Mee2MbOX/8BgJX1n71o6avqPzOBkr56d5v9GJALGOBidcdOYFYJyuO5S/VKDvppBgJVQwoP7rjcVp5vlvNTFp5OQylL37v/0KS4kALKUBbkNdk8wIB+vL3A3G42BrQCbNwze3Lp2CTve29eaZr3M5V8zeduzdP/EI233WJtHmC0DQDVXLw5NKmGIDP+nhwbgvJfNItFk2OBkqPkEFpx3Gcr6Aq/3zTvA8QGzpvqP2AkDggL1p/eFD1Dynf+VFNyekGTUQpqSlGPHam4u7m4ub7ViZjRJoAxC9+bAkUhLHsmVhNyAdBgt74j/H4qNjRZOtZfXWmqf7WRVFSx6QGpJsDm05GteQGo2+4JXd1dEbRDPXatf2X9Z032/4zzHpAPBNWWahoKeUB4w177T5WU32G9rLxg/hXc+/VmQ32X1NUWDsBWPMAISNYkKHsmlicmAPD9Fy+/0e5tRO/NK1FqFtg6x71fbyqo2CV1tTz71BaDnGjR2nO1cuw81hzOCcAtR6vCdq2/7OZVjsTNh35wP49v+SFL6mqzesizT20xXoogI0PxOBCUKy1f2prMYQHQV1MbBN6xq7jA4U7bHpBrgrZg/hUWj+7E1D3zzNpOrnZeb2aTlOC43tM9IGRXSUrNAleUn7L8oqatRjzGj6WHO2XPOA05CoBn2RI+1JIJilefIZuXUDYArrI7PnXZUqadWMvYr8oGgO38U126ZPoB4LEEQtCdGOCvZlrKLGcoKMCMWBOf6XlBIF8taEYs1V9MZ0KhGQCmloYCMwBMoQfMUJDTkir4TaUHaLGBGS8wmQk5CkDixMnpDYBqzXGcA+D4iekNgNceALYXpxg7Ps09QLF3iO03wLXeU2i9p2Y8wJj0OO4BAPHDf53JiCwC8KYjALy6d0a1U0VBAKOv7pveNGRcoq4AADCyY+eMeguICCb1fRGAOb1dPSlesivDT3UgY7ESutwwyXcMwyVl/dkSp04nzi5jMYaf3lZiNtdAcnWF/aUARCQXAAec+obS84J0b9hP8tW34FQN4kAuABxbK1PGYlzY9KMSZuFmku+db3TulGM2PWBOb1fUSRBGduxk9NV9JQxCgOTKCw4t9GUcgM58k+dXnLzE8/fdX6JUlC0+hIoBQEQEcwfhFA05tmipjMWIfemuSwCEkH0QEoZ6bcs1EXOFhgASx0+WeDxIpyQbIIwa6rU7LwC6OP6LESM7dnL+vvsvCRBk76PIPsUNACIiOHGulfVb9ElZh1sglDIdaW8fZHTLeuJPzoIhE8spjRmKAY9k7sgHsyu/mzKyY2fJxoTEX54j/rMvwtA55CmVsd+ZqC8PG5r97jYMgFtekIoJ0evrGSuV0vWFc8SfuYf41nsmjvOAF9ll8D7jSGHrT89+UpLXx/R3Bt7AxafmirJgUz7K+ech4k/fg/zg3+OrMKrjqzSqixN4vnmh8IlO5aWgKLAwGwB5I43uBY+4qYDhpzuI3lDPyMvFraDK/73LyI9vY+QntyLPvpsboC4V7W9lhYPvmHnrL+gBaZ7wBg48vJtT0hbtq/haM97Gda55hHbiEGMHXiBx8Pnc65CmeYBQQFk0hueeodwn7Se5+lZ26RHB3L/CZxSArAv2OQ2AW8tWyvf/Q+Jvv2fswPNo7x7LUHphAFAkZd++gJivWaGfehHMXWU2nGf11dRmXbLSDQAyV8T1fPpawwu3ysEYWvcxtO7jaD3HSBw7hDz7n0kr7JoFQL1xFHXNaHb6+W/O4Twsgvl/d8DUuqF9NbW7wNnl240AYGbpYuFEvywAiJoEZfdloaE+IPtyFRHd+vOWdcxO91rA2R8wuFREnlYmT8w0kov9Zc96Wgop3zQAep1orZPFuksOhAnzBx2ELIYqgsYM1XTBQ09N66cjCLIvwwPO5VS+4WKmpWdD5/R2RaYjCPKcMrH0MJZV+aaqB5Yfzp2uIOSxftPKtwXAtAZheFLxzZLybQOQBsLCaZUdnZuQ7ay1qnxHAEjLjupxqXpaKiKqtXTrT+X5tu4eOvaCxpzeruic3q4Wfa7wYaSk3cqSRIT+izPc5UZTzaIAkAZEB8ml2zs/HKkPUSRt5T87vxZVvsIo9YXKC2aLAK5JX01ts14/ClySpQghO4RCW/mjA655tHDbgPpqagMkHz9rzQlEqQGgyE4UNlc8HnPdi0WxPDkvEKUDQCeK3DzryXNFo09RbErVgWjWgQiWCAAdKHLbrGeiRY9bRQcgA4ww0ISgAUUGigqAIIIqtyHo8D37wZRlbVMKwAQwrvx4WCisQZFhFEIuANCjc/sBFLm78sW+kkiVSwaATOmvWxhGkSFUrhSKDKHIAAohA5YdRZURFBkVCm+iyAgKkapX3u8pxev8P4Cpch3qy7mNAAAAAElFTkSuQmCC",
                    }),
                    ft.createElement(
                        "div",
                        { className: "tw-text-2xl tw-m-1 tw-text-white" },
                        " SideeX Report "
                    )
                ),
                ft.createElement(
                    "div",
                    {
                        className: "list-item round-item nav-border",
                        onClick: () => e("overview"),
                    },
                    ft.createElement("span", null, "Overview")
                ),
                ft.createElement(Jo, {
                    roundReport: this.roundReport,
                    onItemClick: e,
                    activeId: this.state.activeId,
                })
            ),
            ft.createElement(
                "div",
                {
                    className: "tw-pl-8",
                    style: { width: "84%", marginLeft: "16%" },
                },
                ft.createElement(Go, {
                    roundReport: this.roundReport,
                    onItemClick: e,
                    className: Hn({
                        "tw-hidden": "overview" !== this.state.activeId,
                    }),
                }),
                this.AllReports()
            )
        );
    }
    AllReports() {
        const e = [];
        for (const t of Object.values(this.roundReport))
            if (0 != t.length)
                for (let n = 0; n < t.length; n++) {
                    const r = t[n],
                        l = r.$id === this.state.activeId ? "" : "tw-hidden",
                        a = ft.createElement(ni, {
                            report: r,
                            className: l,
                            key: r.$id,
                        });
                    e.push(a);
                }
        return e;
    }
}
console.log("Hello!! Here is SideeX Report.");
