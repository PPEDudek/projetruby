// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = !!t && "length" in t && t.length,
            n = ft.type(t);
        return "function" !== n && !ft.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function r(t, e, n) {
        if (ft.isFunction(e)) return ft.grep(t, function(t, r) {
            return !!e.call(t, r, t) !== n
        });
        if (e.nodeType) return ft.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (St.test(e)) return ft.filter(e, t, n);
            e = ft.filter(e, t)
        }
        return ft.grep(t, function(t) {
            return ft.inArray(t, e) > -1 !== n
        })
    }

    function i(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function o(t) {
        var e = {};
        return ft.each(t.match(Nt) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function s() {
        rt.addEventListener ? (rt.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (rt.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
        (rt.addEventListener || "load" === t.event.type || "complete" === rt.readyState) && (s(), ft.ready())
    }

    function u(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var r = "data-" + e.replace(Pt, "-$1").toLowerCase();
            if (n = t.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : jt.test(n) ? ft.parseJSON(n) : n)
                } catch (t) {}
                ft.data(t, e, n)
            } else n = void 0
        }
        return n
    }

    function l(t) {
        var e;
        for (e in t)
            if (("data" !== e || !ft.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function c(t, e, n, r) {
        if (qt(t)) {
            var i, o, s = ft.expando,
                a = t.nodeType,
                u = a ? ft.cache : t,
                l = a ? t[s] : t[s] && s;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof e) return l || (l = a ? t[s] = nt.pop() || ft.guid++ : s), u[l] || (u[l] = a ? {} : {
                toJSON: ft.noop
            }), "object" != typeof e && "function" != typeof e || (r ? u[l] = ft.extend(u[l], e) : u[l].data = ft.extend(u[l].data, e)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ft.camelCase(e)] = n), "string" == typeof e ? (i = o[e], null == i && (i = o[ft.camelCase(e)])) : i = o, i
        }
    }

    function d(t, e, n) {
        if (qt(t)) {
            var r, i, o = t.nodeType,
                s = o ? ft.cache : t,
                a = o ? t[ft.expando] : ft.expando;
            if (s[a]) {
                if (e && (r = n ? s[a] : s[a].data)) {
                    ft.isArray(e) ? e = e.concat(ft.map(e, ft.camelCase)) : e in r ? e = [e] : (e = ft.camelCase(e), e = e in r ? [e] : e.split(" ")), i = e.length;
                    for (; i--;) delete r[e[i]];
                    if (n ? !l(r) : !ft.isEmptyObject(r)) return
                }(n || (delete s[a].data, l(s[a]))) && (o ? ft.cleanData([t], !0) : dt.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
            }
        }
    }

    function p(t, e, n, r) {
        var i, o = 1,
            s = 20,
            a = r ? function() {
                return r.cur()
            } : function() {
                return ft.css(t, e, "")
            },
            u = a(),
            l = n && n[3] || (ft.cssNumber[e] ? "" : "px"),
            c = (ft.cssNumber[e] || "px" !== l && +u) && It.exec(ft.css(t, e));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do o = o || ".5", c /= o, ft.style(t, e, c + l); while (o !== (o = a() / u) && 1 !== o && --s)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function f(t) {
        var e = zt.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function h(t, e) {
        var n, r, i = 0,
            o = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
        if (!o)
            for (o = [], n = t.childNodes || t; null != (r = n[i]); i++) !e || ft.nodeName(r, e) ? o.push(r) : ft.merge(o, h(r, e));
        return void 0 === e || e && ft.nodeName(t, e) ? ft.merge([t], o) : o
    }

    function m(t, e) {
        for (var n, r = 0; null != (n = t[r]); r++) ft._data(n, "globalEval", !e || ft._data(e[r], "globalEval"))
    }

    function y(t) {
        Ot.test(t.type) && (t.defaultChecked = t.checked)
    }

    function g(t, e, n, r, i) {
        for (var o, s, a, u, l, c, d, p = t.length, g = f(e), v = [], b = 0; b < p; b++)
            if (s = t[b], s || 0 === s)
                if ("object" === ft.type(s)) ft.merge(v, s.nodeType ? [s] : s);
                else if (Ut.test(s)) {
            for (u = u || g.appendChild(e.createElement("div")), l = (_t.exec(s) || ["", ""])[1].toLowerCase(), d = Vt[l] || Vt._default, u.innerHTML = d[1] + ft.htmlPrefilter(s) + d[2], o = d[0]; o--;) u = u.lastChild;
            if (!dt.leadingWhitespace && $t.test(s) && v.push(e.createTextNode($t.exec(s)[0])), !dt.tbody)
                for (s = "table" !== l || Xt.test(s) ? "<table>" !== d[1] || Xt.test(s) ? 0 : u : u.firstChild, o = s && s.childNodes.length; o--;) ft.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
            for (ft.merge(v, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
            u = g.lastChild
        } else v.push(e.createTextNode(s));
        for (u && g.removeChild(u), dt.appendChecked || ft.grep(h(v, "input"), y), b = 0; s = v[b++];)
            if (r && ft.inArray(s, r) > -1) i && i.push(s);
            else if (a = ft.contains(s.ownerDocument, s), u = h(g.appendChild(s), "script"), a && m(u), n)
            for (o = 0; s = u[o++];) Wt.test(s.type || "") && n.push(s);
        return u = null, g
    }

    function v() {
        return !0
    }

    function b() {
        return !1
    }

    function x() {
        try {
            return rt.activeElement
        } catch (t) {}
    }

    function w(t, e, n, r, i, o) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (a in e) w(t, a, n, r, e[a], o);
            return t
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = b;
        else if (!i) return t;
        return 1 === o && (s = i, i = function(t) {
            return ft().off(t), s.apply(this, arguments)
        }, i.guid = s.guid || (s.guid = ft.guid++)), t.each(function() {
            ft.event.add(this, e, i, r, n)
        })
    }

    function C(t, e) {
        return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function S(t) {
        return t.type = (null !== ft.find.attr(t, "type")) + "/" + t.type, t
    }

    function E(t) {
        var e = ie.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function T(t, e) {
        if (1 === e.nodeType && ft.hasData(t)) {
            var n, r, i, o = ft._data(t),
                s = ft._data(e, o),
                a = o.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (r = 0, i = a[n].length; r < i; r++) ft.event.add(e, n, a[n][r])
            }
            s.data && (s.data = ft.extend({}, s.data))
        }
    }

    function k(t, e) {
        var n, r, i;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !dt.noCloneEvent && e[ft.expando]) {
                i = ft._data(e);
                for (r in i.events) ft.removeEvent(e, r, i.handle);
                e.removeAttribute(ft.expando)
            }
            "script" === n && e.text !== t.text ? (S(e).text = t.text, E(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), dt.html5Clone && t.innerHTML && !ft.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ot.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }
    }

    function A(t, e, n, r) {
        e = ot.apply([], e);
        var i, o, s, a, u, l, c = 0,
            d = t.length,
            p = d - 1,
            f = e[0],
            m = ft.isFunction(f);
        if (m || d > 1 && "string" == typeof f && !dt.checkClone && re.test(f)) return t.each(function(i) {
            var o = t.eq(i);
            m && (e[0] = f.call(this, i, o.html())), A(o, e, n, r)
        });
        if (d && (l = g(e, t[0].ownerDocument, !1, t, r), i = l.firstChild, 1 === l.childNodes.length && (l = i), i || r)) {
            for (a = ft.map(h(l, "script"), S), s = a.length; c < d; c++) o = l, c !== p && (o = ft.clone(o, !0, !0), s && ft.merge(a, h(o, "script"))), n.call(t[c], o, c);
            if (s)
                for (u = a[a.length - 1].ownerDocument, ft.map(a, E), c = 0; c < s; c++) o = a[c], Wt.test(o.type || "") && !ft._data(o, "globalEval") && ft.contains(u, o) && (o.src ? ft._evalUrl && ft._evalUrl(o.src) : ft.globalEval((o.text || o.textContent || o.innerHTML || "").replace(oe, "")));
            l = i = null
        }
        return t
    }

    function L(t, e, n) {
        for (var r, i = e ? ft.filter(e, t) : t, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ft.cleanData(h(r)), r.parentNode && (n && ft.contains(r.ownerDocument, r) && m(h(r, "script")), r.parentNode.removeChild(r));
        return t
    }

    function N(t, e) {
        var n = ft(e.createElement(t)).appendTo(e.body),
            r = ft.css(n[0], "display");
        return n.detach(), r
    }

    function R(t) {
        var e = rt,
            n = le[t];
        return n || (n = N(t, e), "none" !== n && n || (ue = (ue || ft("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (ue[0].contentWindow || ue[0].contentDocument).document, e.write(), e.close(), n = N(t, e), ue.detach()), le[t] = n), n
    }

    function D(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function q(t) {
        if (t in Ee) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = Se.length; n--;)
            if (t = Se[n] + e, t in Ee) return t
    }

    function j(t, e) {
        for (var n, r, i, o = [], s = 0, a = t.length; s < a; s++) r = t[s], r.style && (o[s] = ft._data(r, "olddisplay"), n = r.style.display, e ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Mt(r) && (o[s] = ft._data(r, "olddisplay", R(r.nodeName)))) : (i = Mt(r), (n && "none" !== n || !i) && ft._data(r, "olddisplay", i ? n : ft.css(r, "display"))));
        for (s = 0; s < a; s++) r = t[s], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[s] || "" : "none"));
        return t
    }

    function P(t, e, n) {
        var r = xe.exec(e);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
    }

    function H(t, e, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += ft.css(t, n + Ft[o], !0, i)), r ? ("content" === n && (s -= ft.css(t, "padding" + Ft[o], !0, i)), "margin" !== n && (s -= ft.css(t, "border" + Ft[o] + "Width", !0, i))) : (s += ft.css(t, "padding" + Ft[o], !0, i), "padding" !== n && (s += ft.css(t, "border" + Ft[o] + "Width", !0, i)));
        return s
    }

    function I(t, e, n) {
        var r = !0,
            i = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = he(t),
            s = dt.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (i = me(t, e, o), (i < 0 || null == i) && (i = t.style[e]), de.test(i)) return i;
            r = s && (dt.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
        }
        return i + H(t, e, n || (s ? "border" : "content"), r, o) + "px"
    }

    function F(t, e, n, r, i) {
        return new F.prototype.init(t, e, n, r, i)
    }

    function M() {
        return t.setTimeout(function() {
            Te = void 0
        }), Te = ft.now()
    }

    function B(t, e) {
        var n, r = {
                height: t
            },
            i = 0;
        for (e = e ? 1 : 0; i < 4; i += 2 - e) n = Ft[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function O(t, e, n) {
        for (var r, i = ($.tweeners[e] || []).concat($.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, e, t)) return r
    }

    function _(t, e, n) {
        var r, i, o, s, a, u, l, c, d = this,
            p = {},
            f = t.style,
            h = t.nodeType && Mt(t),
            m = ft._data(t, "fxshow");
        n.queue || (a = ft._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--, ft.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], l = ft.css(t, "display"), c = "none" === l ? ft._data(t, "olddisplay") || R(t.nodeName) : l, "inline" === c && "none" === ft.css(t, "float") && (dt.inlineBlockNeedsLayout && "inline" !== R(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", dt.shrinkWrapBlocks() || d.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (r in e)
            if (i = e[r], Ae.exec(i)) {
                if (delete e[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    h = !0
                }
                p[r] = m && m[r] || ft.style(t, r)
            } else l = void 0;
        if (ft.isEmptyObject(p)) "inline" === ("none" === l ? R(t.nodeName) : l) && (f.display = l);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = ft._data(t, "fxshow", {}), o && (m.hidden = !h), h ? ft(t).show() : d.done(function() {
                ft(t).hide()
            }), d.done(function() {
                var e;
                ft._removeData(t, "fxshow");
                for (e in p) ft.style(t, e, p[e])
            });
            for (r in p) s = O(h ? m[r] : 0, r, d), r in m || (m[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function W(t, e) {
        var n, r, i, o, s;
        for (n in t)
            if (r = ft.camelCase(n), i = e[r], o = t[n], ft.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), s = ft.cssHooks[r], s && "expand" in s) {
                o = s.expand(o), delete t[r];
                for (n in o) n in t || (t[n] = o[n], e[n] = i)
            } else e[r] = i
    }

    function $(t, e, n) {
        var r, i, o = 0,
            s = $.prefilters.length,
            a = ft.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var e = Te || M(), n = Math.max(0, l.startTime + l.duration - e), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; s < u; s++) l.tweens[s].run(o);
                return a.notifyWith(t, [l, o, n]), o < 1 && u ? n : (a.resolveWith(t, [l]), !1)
            },
            l = a.promise({
                elem: t,
                props: ft.extend({}, e),
                opts: ft.extend(!0, {
                    specialEasing: {},
                    easing: ft.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Te || M(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var r = ft.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(e) {
                    var n = 0,
                        r = e ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [l, 1, 0]), a.resolveWith(t, [l, e])) : a.rejectWith(t, [l, e]), this
                }
            }),
            c = l.props;
        for (W(c, l.opts.specialEasing); o < s; o++)
            if (r = $.prefilters[o].call(l, t, c, l.opts)) return ft.isFunction(r.stop) && (ft._queueHooks(l.elem, l.opts.queue).stop = ft.proxy(r.stop, r)), r;
        return ft.map(c, O, l), ft.isFunction(l.opts.start) && l.opts.start.call(t, l), ft.fx.timer(ft.extend(u, {
            elem: t,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function z(t) {
        return ft.attr(t, "class") || ""
    }

    function V(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var r, i = 0,
                o = e.toLowerCase().match(Nt) || [];
            if (ft.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
        }
    }

    function U(t, e, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, ft.each(t[a] || [], function(t, a) {
                var l = a(e, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (e.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            s = t === Qe;
        return i(e.dataTypes[0]) || !o["*"] && i("*")
    }

    function X(t, e) {
        var n, r, i = ft.ajaxSettings.flatOptions || {};
        for (r in e) void 0 !== e[r] && ((i[r] ? t : n || (n = {}))[r] = e[r]);
        return n && ft.extend(!0, t, n), t
    }

    function K(t, e, n) {
        for (var r, i, o, s, a = t.contents, u = t.dataTypes;
            "*" === u[0];) u.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (s in a)
                if (a[s] && a[s].test(i)) {
                    u.unshift(s);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (s in n) {
                if (!u[0] || t.converters[s + " " + u[0]]) {
                    o = s;
                    break
                }
                r || (r = s)
            }
            o = o || r
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function J(t, e, n, r) {
        var i, o, s, a, u, l = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters) l[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s)
                for (i in l)
                    if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (t) {
                    return {
                        state: "parsererror",
                        error: s ? t : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function G(t) {
        return t.style && t.style.display || ft.css(t, "display")
    }

    function Y(t) {
        if (!ft.contains(t.ownerDocument || rt, t)) return !0;
        for (; t && 1 === t.nodeType;) {
            if ("none" === G(t) || "hidden" === t.type) return !0;
            t = t.parentNode
        }
        return !1
    }

    function Q(t, e, n, r) {
        var i;
        if (ft.isArray(e)) ft.each(e, function(e, i) {
            n || rn.test(t) ? r(t, i) : Q(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r)
        });
        else if (n || "object" !== ft.type(e)) r(t, e);
        else
            for (i in e) Q(t + "[" + i + "]", e[i], n, r)
    }

    function Z() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    }

    function tt() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function et(t) {
        return ft.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var nt = [],
        rt = t.document,
        it = nt.slice,
        ot = nt.concat,
        st = nt.push,
        at = nt.indexOf,
        ut = {},
        lt = ut.toString,
        ct = ut.hasOwnProperty,
        dt = {},
        pt = "1.12.4",
        ft = function(t, e) {
            return new ft.fn.init(t, e)
        },
        ht = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        mt = /^-ms-/,
        yt = /-([\da-z])/gi,
        gt = function(t, e) {
            return e.toUpperCase()
        };
    ft.fn = ft.prototype = {
        jquery: pt,
        constructor: ft,
        selector: "",
        length: 0,
        toArray: function() {
            return it.call(this)
        },
        get: function(t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : it.call(this)
        },
        pushStack: function(t) {
            var e = ft.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return ft.each(this, t)
        },
        map: function(t) {
            return this.pushStack(ft.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(it.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: st,
        sort: nt.sort,
        splice: nt.splice
    }, ft.extend = ft.fn.extend = function() {
        var t, e, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || ft.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
            if (null != (i = arguments[a]))
                for (r in i) t = s[r], n = i[r], s !== n && (l && n && (ft.isPlainObject(n) || (e = ft.isArray(n))) ? (e ? (e = !1, o = t && ft.isArray(t) ? t : []) : o = t && ft.isPlainObject(t) ? t : {}, s[r] = ft.extend(l, o, n)) : void 0 !== n && (s[r] = n));
        return s
    }, ft.extend({
        expando: "jQuery" + (pt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === ft.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === ft.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !ft.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== ft.type(t) || t.nodeType || ft.isWindow(t)) return !1;
            try {
                if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            if (!dt.ownFirst)
                for (e in t) return ct.call(t, e);
            for (e in t);
            return void 0 === e || ct.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ut[lt.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && ft.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(mt, "ms-").replace(yt, gt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var r, i = 0;
            if (n(t))
                for (r = t.length; i < r && e.call(t[i], i, t[i]) !== !1; i++);
            else
                for (i in t)
                    if (e.call(t[i], i, t[i]) === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(ht, "")
        },
        makeArray: function(t, e) {
            var r = e || [];
            return null != t && (n(Object(t)) ? ft.merge(r, "string" == typeof t ? [t] : t) : st.call(r, t)), r
        },
        inArray: function(t, e, n) {
            var r;
            if (e) {
                if (at) return at.call(e, t, n);
                for (r = e.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, r = 0, i = t.length; r < n;) t[i++] = e[r++];
            if (n !== n)
                for (; void 0 !== e[r];) t[i++] = e[r++];
            return t.length = i, t
        },
        grep: function(t, e, n) {
            for (var r, i = [], o = 0, s = t.length, a = !n; o < s; o++) r = !e(t[o], o), r !== a && i.push(t[o]);
            return i
        },
        map: function(t, e, r) {
            var i, o, s = 0,
                a = [];
            if (n(t))
                for (i = t.length; s < i; s++) o = e(t[s], s, r), null != o && a.push(o);
            else
                for (s in t) o = e(t[s], s, r), null != o && a.push(o);
            return ot.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, r, i;
            if ("string" == typeof e && (i = t[e], e = t, t = i), ft.isFunction(t)) return n = it.call(arguments, 2), r = function() {
                return t.apply(e || this, n.concat(it.call(arguments)))
            }, r.guid = t.guid = t.guid || ft.guid++, r
        },
        now: function() {
            return +new Date
        },
        support: dt
    }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = nt[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        ut["[object " + e + "]"] = e.toLowerCase()
    });
    var vt = function(t) {
        function e(t, e, n, r) {
            var i, o, s, a, u, l, d, f, h = e && e.ownerDocument,
                m = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!r && ((e ? e.ownerDocument || e : O) !== q && D(e), e = e || q, P)) {
                if (11 !== m && (l = gt.exec(t)))
                    if (i = l[1]) {
                        if (9 === m) {
                            if (!(s = e.getElementById(i))) return n;
                            if (s.id === i) return n.push(s), n
                        } else if (h && (s = h.getElementById(i)) && M(e, s) && s.id === i) return n.push(s), n
                    } else {
                        if (l[2]) return Q.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = l[3]) && w.getElementsByClassName && e.getElementsByClassName) return Q.apply(n, e.getElementsByClassName(i)), n
                    }
                if (w.qsa && !V[t + " "] && (!H || !H.test(t))) {
                    if (1 !== m) h = e, f = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = B), d = T(t), o = d.length, u = pt.test(a) ? "#" + a : "[id='" + a + "']"; o--;) d[o] = u + " " + p(d[o]);
                        f = d.join(","), h = vt.test(t) && c(e.parentNode) || e
                    }
                    if (f) try {
                        return Q.apply(n, h.querySelectorAll(f)), n
                    } catch (t) {} finally {
                        a === B && e.removeAttribute("id")
                    }
                }
            }
            return A(t.replace(at, "$1"), e, n, r)
        }

        function n() {
            function t(n, r) {
                return e.push(n + " ") > C.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
            var e = [];
            return t
        }

        function r(t) {
            return t[B] = !0, t
        }

        function i(t) {
            var e = q.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), r = n.length; r--;) C.attrHandle[n[r]] = e
        }

        function s(t, e) {
            var n = e && t,
                r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function u(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function l(t) {
            return r(function(e) {
                return e = +e, r(function(n, r) {
                    for (var i, o = t([], n.length, e), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function d() {}

        function p(t) {
            for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
            return r
        }

        function f(t, e, n) {
            var r = e.dir,
                i = n && "parentNode" === r,
                o = W++;
            return e.first ? function(e, n, o) {
                for (; e = e[r];)
                    if (1 === e.nodeType || i) return t(e, n, o)
            } : function(e, n, s) {
                var a, u, l, c = [_, o];
                if (s) {
                    for (; e = e[r];)
                        if ((1 === e.nodeType || i) && t(e, n, s)) return !0
                } else
                    for (; e = e[r];)
                        if (1 === e.nodeType || i) {
                            if (l = e[B] || (e[B] = {}), u = l[e.uniqueID] || (l[e.uniqueID] = {}), (a = u[r]) && a[0] === _ && a[1] === o) return c[2] = a[2];
                            if (u[r] = c, c[2] = t(e, n, s)) return !0
                        }
            }
        }

        function h(t) {
            return t.length > 1 ? function(e, n, r) {
                for (var i = t.length; i--;)
                    if (!t[i](e, n, r)) return !1;
                return !0
            } : t[0]
        }

        function m(t, n, r) {
            for (var i = 0, o = n.length; i < o; i++) e(t, n[i], r);
            return r
        }

        function y(t, e, n, r, i) {
            for (var o, s = [], a = 0, u = t.length, l = null != e; a < u; a++)(o = t[a]) && (n && !n(o, r, i) || (s.push(o), l && e.push(a)));
            return s
        }

        function g(t, e, n, i, o, s) {
            return i && !i[B] && (i = g(i)), o && !o[B] && (o = g(o, s)), r(function(r, s, a, u) {
                var l, c, d, p = [],
                    f = [],
                    h = s.length,
                    g = r || m(e || "*", a.nodeType ? [a] : a, []),
                    v = !t || !r && e ? g : y(g, p, t, a, u),
                    b = n ? o || (r ? t : h || i) ? [] : s : v;
                if (n && n(v, b, a, u), i)
                    for (l = y(b, f), i(l, [], a, u), c = l.length; c--;)(d = l[c]) && (b[f[c]] = !(v[f[c]] = d));
                if (r) {
                    if (o || t) {
                        if (o) {
                            for (l = [], c = b.length; c--;)(d = b[c]) && l.push(v[c] = d);
                            o(null, b = [], l, u)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (l = o ? tt(r, d) : p[c]) > -1 && (r[l] = !(s[l] = d))
                    }
                } else b = y(b === s ? b.splice(h, b.length) : b), o ? o(null, s, b, u) : Q.apply(s, b)
            })
        }

        function v(t) {
            for (var e, n, r, i = t.length, o = C.relative[t[0].type], s = o || C.relative[" "], a = o ? 1 : 0, u = f(function(t) {
                    return t === e
                }, s, !0), l = f(function(t) {
                    return tt(e, t) > -1
                }, s, !0), c = [function(t, n, r) {
                    var i = !o && (r || n !== L) || ((e = n).nodeType ? u(t, n, r) : l(t, n, r));
                    return e = null, i
                }]; a < i; a++)
                if (n = C.relative[t[a].type]) c = [f(h(c), n)];
                else {
                    if (n = C.filter[t[a].type].apply(null, t[a].matches), n[B]) {
                        for (r = ++a; r < i && !C.relative[t[r].type]; r++);
                        return g(a > 1 && h(c), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(at, "$1"), n, a < r && v(t.slice(a, r)), r < i && v(t = t.slice(r)), r < i && p(t))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function b(t, n) {
            var i = n.length > 0,
                o = t.length > 0,
                s = function(r, s, a, u, l) {
                    var c, d, p, f = 0,
                        h = "0",
                        m = r && [],
                        g = [],
                        v = L,
                        b = r || o && C.find.TAG("*", l),
                        x = _ += null == v ? 1 : Math.random() || .1,
                        w = b.length;
                    for (l && (L = s === q || s || l); h !== w && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (d = 0, s || c.ownerDocument === q || (D(c), a = !P); p = t[d++];)
                                if (p(c, s || q, a)) {
                                    u.push(c);
                                    break
                                }
                            l && (_ = x)
                        }
                        i && ((c = !p && c) && f--, r && m.push(c))
                    }
                    if (f += h, i && h !== f) {
                        for (d = 0; p = n[d++];) p(m, g, s, a);
                        if (r) {
                            if (f > 0)
                                for (; h--;) m[h] || g[h] || (g[h] = G.call(u));
                            g = y(g)
                        }
                        Q.apply(u, g), l && !r && g.length > 0 && f + n.length > 1 && e.uniqueSort(u)
                    }
                    return l && (_ = x, L = v), m
                };
            return i ? r(s) : s
        }
        var x, w, C, S, E, T, k, A, L, N, R, D, q, j, P, H, I, F, M, B = "sizzle" + 1 * new Date,
            O = t.document,
            _ = 0,
            W = 0,
            $ = n(),
            z = n(),
            V = n(),
            U = function(t, e) {
                return t === e && (R = !0), 0
            },
            X = 1 << 31,
            K = {}.hasOwnProperty,
            J = [],
            G = J.pop,
            Y = J.push,
            Q = J.push,
            Z = J.slice,
            tt = function(t, e) {
                for (var n = 0, r = t.length; n < r; n++)
                    if (t[n] === e) return n;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            it = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]",
            ot = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
            st = new RegExp(nt + "+", "g"),
            at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            ut = new RegExp("^" + nt + "*," + nt + "*"),
            lt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            dt = new RegExp(ot),
            pt = new RegExp("^" + rt + "$"),
            ft = {
                ID: new RegExp("^#(" + rt + ")"),
                CLASS: new RegExp("^\\.(" + rt + ")"),
                TAG: new RegExp("^(" + rt + "|[*])"),
                ATTR: new RegExp("^" + it),
                PSEUDO: new RegExp("^" + ot),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            ht = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            yt = /^[^{]+\{\s*\[native \w/,
            gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            vt = /[+~]/,
            bt = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            wt = function(t, e, n) {
                var r = "0x" + e - 65536;
                return r !== r || n ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            Ct = function() {
                D()
            };
        try {
            Q.apply(J = Z.call(O.childNodes), O.childNodes), J[O.childNodes.length].nodeType
        } catch (t) {
            Q = {
                apply: J.length ? function(t, e) {
                    Y.apply(t, Z.call(e))
                } : function(t, e) {
                    for (var n = t.length, r = 0; t[n++] = e[r++];);
                    t.length = n - 1
                }
            }
        }
        w = e.support = {}, E = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, D = e.setDocument = function(t) {
            var e, n, r = t ? t.ownerDocument || t : O;
            return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, j = q.documentElement, P = !E(q), (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), w.attributes = i(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = i(function(t) {
                return t.appendChild(q.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = yt.test(q.getElementsByClassName), w.getById = i(function(t) {
                return j.appendChild(t).id = B, !q.getElementsByName || !q.getElementsByName(B).length
            }), w.getById ? (C.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && P) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }, C.filter.ID = function(t) {
                var e = t.replace(xt, wt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete C.find.ID, C.filter.ID = function(t) {
                var e = t.replace(xt, wt);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), C.find.TAG = w.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n, r = [],
                    i = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, C.find.CLASS = w.getElementsByClassName && function(t, e) {
                if ("undefined" != typeof e.getElementsByClassName && P) return e.getElementsByClassName(t)
            }, I = [], H = [], (w.qsa = yt.test(q.querySelectorAll)) && (i(function(t) {
                j.appendChild(t).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || H.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + B + "-]").length || H.push("~="), t.querySelectorAll(":checked").length || H.push(":checked"), t.querySelectorAll("a#" + B + "+*").length || H.push(".#.+[+~]")
            }), i(function(t) {
                var e = q.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && H.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), H.push(",.*:")
            })), (w.matchesSelector = yt.test(F = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && i(function(t) {
                w.disconnectedMatch = F.call(t, "div"), F.call(t, "[s!='']:x"), I.push("!=", ot)
            }), H = H.length && new RegExp(H.join("|")), I = I.length && new RegExp(I.join("|")), e = yt.test(j.compareDocumentPosition), M = e || yt.test(j.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    r = e && e.parentNode;
                return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, U = e ? function(t, e) {
                if (t === e) return R = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === q || t.ownerDocument === O && M(O, t) ? -1 : e === q || e.ownerDocument === O && M(O, e) ? 1 : N ? tt(N, t) - tt(N, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return R = !0, 0;
                var n, r = 0,
                    i = t.parentNode,
                    o = e.parentNode,
                    a = [t],
                    u = [e];
                if (!i || !o) return t === q ? -1 : e === q ? 1 : i ? -1 : o ? 1 : N ? tt(N, t) - tt(N, e) : 0;
                if (i === o) return s(t, e);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (; a[r] === u[r];) r++;
                return r ? s(a[r], u[r]) : a[r] === O ? -1 : u[r] === O ? 1 : 0
            }, q) : q
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== q && D(t), n = n.replace(ct, "='$1']"), w.matchesSelector && P && !V[n + " "] && (!I || !I.test(n)) && (!H || !H.test(n))) try {
                var r = F.call(t, n);
                if (r || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
            } catch (t) {}
            return e(n, q, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== q && D(t), M(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== q && D(t);
            var n = C.attrHandle[e.toLowerCase()],
                r = n && K.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !P) : void 0;
            return void 0 !== r ? r : w.attributes || !P ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                r = 0,
                i = 0;
            if (R = !w.detectDuplicates, N = !w.sortStable && t.slice(0), t.sort(U), R) {
                for (; e = t[i++];) e === t[i] && (r = n.push(i));
                for (; r--;) t.splice(n[r], 1)
            }
            return N = null, t
        }, S = e.getText = function(t) {
            var e, n = "",
                r = 0,
                i = t.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += S(t)
                } else if (3 === i || 4 === i) return t.nodeValue
            } else
                for (; e = t[r++];) n += S(e);
            return n
        }, C = e.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(xt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xt, wt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = $[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && $(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, r) {
                    return function(i) {
                        var o = e.attr(i, t);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(t, e, n, r, i) {
                    var o = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === r && 0 === i ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, u) {
                        var l, c, d, p, f, h, m = o !== s ? "nextSibling" : "previousSibling",
                            y = e.parentNode,
                            g = a && e.nodeName.toLowerCase(),
                            v = !u && !a,
                            b = !1;
                        if (y) {
                            if (o) {
                                for (; m;) {
                                    for (p = e; p = p[m];)
                                        if (a ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                    h = m = "only" === t && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? y.firstChild : y.lastChild], s && v) {
                                for (p = y, d = p[B] || (p[B] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), l = c[t] || [], f = l[0] === _ && l[1], b = f && l[2], p = f && y.childNodes[f]; p = ++f && p && p[m] || (b = f = 0) || h.pop();)
                                    if (1 === p.nodeType && ++b && p === e) {
                                        c[t] = [_, f, b];
                                        break
                                    }
                            } else if (v && (p = e, d = p[B] || (p[B] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), l = c[t] || [], f = l[0] === _ && l[1], b = f), b === !1)
                                for (;
                                    (p = ++f && p && p[m] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (v && (d = p[B] || (p[B] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), c[t] = [_, b]), p !== e)););
                            return b -= i, b === r || b % r === 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var i, o = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[B] ? o(n) : o.length > 1 ? (i = [t, t, "", n], C.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
                        for (var r, i = o(t, n), s = i.length; s--;) r = tt(t, i[s]), t[r] = !(e[r] = i[s])
                    }) : function(t) {
                        return o(t, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(t) {
                    var e = [],
                        n = [],
                        i = k(t.replace(at, "$1"));
                    return i[B] ? r(function(t, e, n, r) {
                        for (var o, s = i(t, null, r, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, r, o) {
                        return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                    }
                }),
                has: r(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: r(function(t) {
                    return t = t.replace(xt, wt),
                        function(e) {
                            return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                        }
                }),
                lang: r(function(t) {
                    return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, wt).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === j
                },
                focus: function(t) {
                    return t === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !C.pseudos.empty(t)
                },
                header: function(t) {
                    return mt.test(t.nodeName)
                },
                input: function(t) {
                    return ht.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(t, e) {
                    return [e - 1]
                }),
                eq: l(function(t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: l(function(t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t
                }),
                odd: l(function(t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t
                }),
                lt: l(function(t, e, n) {
                    for (var r = n < 0 ? n + e : n; --r >= 0;) t.push(r);
                    return t
                }),
                gt: l(function(t, e, n) {
                    for (var r = n < 0 ? n + e : n; ++r < e;) t.push(r);
                    return t
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[x] = a(x);
        for (x in {
                submit: !0,
                reset: !0
            }) C.pseudos[x] = u(x);
        return d.prototype = C.filters = C.pseudos, C.setFilters = new d, T = e.tokenize = function(t, n) {
            var r, i, o, s, a, u, l, c = z[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = t, u = [], l = C.preFilter; a;) {
                r && !(i = ut.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = lt.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(at, " ")
                }), a = a.slice(r.length));
                for (s in C.filter) !(i = ft[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? e.error(t) : z(t, u).slice(0)
        }, k = e.compile = function(t, e) {
            var n, r = [],
                i = [],
                o = V[t + " "];
            if (!o) {
                for (e || (e = T(t)), n = e.length; n--;) o = v(e[n]), o[B] ? r.push(o) : i.push(o);
                o = V(t, b(i, r)), o.selector = t
            }
            return o
        }, A = e.select = function(t, e, n, r) {
            var i, o, s, a, u, l = "function" == typeof t && t,
                d = !r && T(t = l.selector || t);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === e.nodeType && P && C.relative[o[1].type]) {
                    if (e = (C.find.ID(s.matches[0].replace(xt, wt), e) || [])[0], !e) return n;
                    l && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (i = ft.needsContext.test(t) ? 0 : o.length; i-- && (s = o[i], !C.relative[a = s.type]);)
                    if ((u = C.find[a]) && (r = u(s.matches[0].replace(xt, wt), vt.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(i, 1), t = r.length && p(o), !t) return Q.apply(n, r), n;
                        break
                    }
            }
            return (l || k(t, d))(r, e, !P, n, !e || vt.test(t) && c(e.parentNode) || e), n
        }, w.sortStable = B.split("").sort(U).join("") === B, w.detectDuplicates = !!R, D(), w.sortDetached = i(function(t) {
            return 1 & t.compareDocumentPosition(q.createElement("div"))
        }), i(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), i(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function(t, e, n) {
            var r;
            if (!n) return t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }), e
    }(t);
    ft.find = vt, ft.expr = vt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = vt.uniqueSort, ft.text = vt.getText, ft.isXMLDoc = vt.isXML, ft.contains = vt.contains;
    var bt = function(t, e, n) {
            for (var r = [], i = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (i && ft(t).is(n)) break;
                    r.push(t)
                }
            return r
        },
        xt = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        wt = ft.expr.match.needsContext,
        Ct = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        St = /^.[^:#\[\.,]*$/;
    ft.filter = function(t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? ft.find.matchesSelector(r, t) ? [r] : [] : ft.find.matches(t, ft.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, ft.fn.extend({
        find: function(t) {
            var e, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof t) return this.pushStack(ft(t).filter(function() {
                for (e = 0; e < i; e++)
                    if (ft.contains(r[e], this)) return !0
            }));
            for (e = 0; e < i; e++) ft.find(t, r[e], n);
            return n = this.pushStack(i > 1 ? ft.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(r(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(r(this, t || [], !0))
        },
        is: function(t) {
            return !!r(this, "string" == typeof t && wt.test(t) ? ft(t) : t || [], !1).length
        }
    });
    var Et, Tt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        kt = ft.fn.init = function(t, e, n) {
            var r, i;
            if (!t) return this;
            if (n = n || Et, "string" == typeof t) {
                if (r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Tt.exec(t), !r || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (r[1]) {
                    if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : rt, !0)), Ct.test(r[1]) && ft.isPlainObject(e))
                        for (r in e) ft.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                    return this
                }
                if (i = rt.getElementById(r[2]), i && i.parentNode) {
                    if (i.id !== r[2]) return Et.find(t);
                    this.length = 1, this[0] = i
                }
                return this.context = rt, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ft.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(ft) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ft.makeArray(t, this))
        };
    kt.prototype = ft.fn, Et = ft(rt);
    var At = /^(?:parents|prev(?:Until|All))/,
        Lt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ft.fn.extend({
        has: function(t) {
            var e, n = ft(t, this),
                r = n.length;
            return this.filter(function() {
                for (e = 0; e < r; e++)
                    if (ft.contains(this, n[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, r = 0, i = this.length, o = [], s = wt.test(t) || "string" != typeof t ? ft(t, e || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ft.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? ft.inArray(this[0], ft(t)) : ft.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ft.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return bt(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return bt(t, "parentNode", n)
        },
        next: function(t) {
            return i(t, "nextSibling")
        },
        prev: function(t) {
            return i(t, "previousSibling")
        },
        nextAll: function(t) {
            return bt(t, "nextSibling")
        },
        prevAll: function(t) {
            return bt(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return bt(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return bt(t, "previousSibling", n)
        },
        siblings: function(t) {
            return xt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return xt(t.firstChild)
        },
        contents: function(t) {
            return ft.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ft.merge([], t.childNodes)
        }
    }, function(t, e) {
        ft.fn[t] = function(n, r) {
            var i = ft.map(this, e, n);
            return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = ft.filter(r, i)), this.length > 1 && (Lt[t] || (i = ft.uniqueSort(i)), At.test(t) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var Nt = /\S+/g;
    ft.Callbacks = function(t) {
        t = "string" == typeof t ? o(t) : ft.extend({}, t);
        var e, n, r, i, s = [],
            a = [],
            u = -1,
            l = function() {
                for (i = t.once, r = e = !0; a.length; u = -1)
                    for (n = a.shift(); ++u < s.length;) s[u].apply(n[0], n[1]) === !1 && t.stopOnFalse && (u = s.length, n = !1);
                t.memory || (n = !1), e = !1, i && (s = n ? [] : "")
            },
            c = {
                add: function() {
                    return s && (n && !e && (u = s.length - 1, a.push(n)), function e(n) {
                        ft.each(n, function(n, r) {
                            ft.isFunction(r) ? t.unique && c.has(r) || s.push(r) : r && r.length && "string" !== ft.type(r) && e(r)
                        })
                    }(arguments), n && !e && l()), this
                },
                remove: function() {
                    return ft.each(arguments, function(t, e) {
                        for (var n;
                            (n = ft.inArray(e, s, n)) > -1;) s.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function(t) {
                    return t ? ft.inArray(t, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return i = a = [], s = n = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return i = !0, n || c.disable(), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(t, n) {
                    return i || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, ft.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", ft.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ft.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ft.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return ft.Deferred(function(n) {
                            ft.each(e, function(e, o) {
                                var s = ft.isFunction(t[e]) && t[e];
                                i[o[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && ft.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? ft.extend(t, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, ft.each(e, function(t, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), t && t.call(i, i), i
        },
        when: function(t) {
            var e, n, r, i = 0,
                o = it.call(arguments),
                s = o.length,
                a = 1 !== s || t && ft.isFunction(t.promise) ? s : 0,
                u = 1 === a ? t : ft.Deferred(),
                l = function(t, n, r) {
                    return function(i) {
                        n[t] = this, r[t] = arguments.length > 1 ? it.call(arguments) : i, r === e ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), r = new Array(s); i < s; i++) o[i] && ft.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, e)).done(l(i, r, o)).fail(u.reject) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    });
    var Rt;
    ft.fn.ready = function(t) {
        return ft.ready.promise().done(t), this
    }, ft.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? ft.readyWait++ : ft.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --ft.readyWait : ft.isReady) || (ft.isReady = !0, t !== !0 && --ft.readyWait > 0 || (Rt.resolveWith(rt, [ft]), ft.fn.triggerHandler && (ft(rt).triggerHandler("ready"), ft(rt).off("ready"))))
        }
    }), ft.ready.promise = function(e) {
        if (!Rt)
            if (Rt = ft.Deferred(), "complete" === rt.readyState || "loading" !== rt.readyState && !rt.documentElement.doScroll) t.setTimeout(ft.ready);
            else if (rt.addEventListener) rt.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a);
        else {
            rt.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == t.frameElement && rt.documentElement
            } catch (t) {}
            n && n.doScroll && ! function e() {
                if (!ft.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (n) {
                        return t.setTimeout(e, 50)
                    }
                    s(), ft.ready()
                }
            }()
        }
        return Rt.promise(e)
    }, ft.ready.promise();
    var Dt;
    for (Dt in ft(dt)) break;
    dt.ownFirst = "0" === Dt, dt.inlineBlockNeedsLayout = !1, ft(function() {
            var t, e, n, r;
            n = rt.getElementsByTagName("body")[0], n && n.style && (e = rt.createElement("div"), r = rt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", dt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function() {
            var t = rt.createElement("div");
            dt.deleteExpando = !0;
            try {
                delete t.test
            } catch (t) {
                dt.deleteExpando = !1
            }
            t = null
        }();
    var qt = function(t) {
            var e = ft.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return (1 === n || 9 === n) && (!e || e !== !0 && t.getAttribute("classid") === e)
        },
        jt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Pt = /([A-Z])/g;
    ft.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? ft.cache[t[ft.expando]] : t[ft.expando], !!t && !l(t)
            },
            data: function(t, e, n) {
                return c(t, e, n)
            },
            removeData: function(t, e) {
                return d(t, e)
            },
            _data: function(t, e, n) {
                return c(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return d(t, e, !0)
            }
        }), ft.fn.extend({
            data: function(t, e) {
                var n, r, i, o = this[0],
                    s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (i = ft.data(o), 1 === o.nodeType && !ft._data(o, "parsedAttrs"))) {
                        for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = ft.camelCase(r.slice(5)), u(o, r, i[r])));
                        ft._data(o, "parsedAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof t ? this.each(function() {
                    ft.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    ft.data(this, t, e)
                }) : o ? u(o, t, ft.data(o, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    ft.removeData(this, t)
                })
            }
        }), ft.extend({
            queue: function(t, e, n) {
                var r;
                if (t) return e = (e || "fx") + "queue", r = ft._data(t, e), n && (!r || ft.isArray(n) ? r = ft._data(t, e, ft.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = ft.queue(t, e),
                    r = n.length,
                    i = n.shift(),
                    o = ft._queueHooks(t, e),
                    s = function() {
                        ft.dequeue(t, e)
                    };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, s, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return ft._data(t, n) || ft._data(t, n, {
                    empty: ft.Callbacks("once memory").add(function() {
                        ft._removeData(t, e + "queue"), ft._removeData(t, n)
                    })
                })
            }
        }), ft.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = ft.queue(this, t, e);
                    ft._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ft.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    ft.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, r = 1,
                    i = ft.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --r || i.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = ft._data(o[s], t + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
                return a(), i.promise(e)
            }
        }),
        function() {
            var t;
            dt.shrinkWrapBlocks = function() {
                if (null != t) return t;
                t = !1;
                var e, n, r;
                return n = rt.getElementsByTagName("body")[0], n && n.style ? (e = rt.createElement("div"), r = rt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(rt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(r), t) : void 0
            }
        }();
    var Ht = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        It = new RegExp("^(?:([+-])=|)(" + Ht + ")([a-z%]*)$", "i"),
        Ft = ["Top", "Right", "Bottom", "Left"],
        Mt = function(t, e) {
            return t = e || t, "none" === ft.css(t, "display") || !ft.contains(t.ownerDocument, t)
        },
        Bt = function(t, e, n, r, i, o, s) {
            var a = 0,
                u = t.length,
                l = null == n;
            if ("object" === ft.type(n)) {
                i = !0;
                for (a in n) Bt(t, e, a, n[a], !0, o, s)
            } else if (void 0 !== r && (i = !0, ft.isFunction(r) || (s = !0), l && (s ? (e.call(t, r), e = null) : (l = e, e = function(t, e, n) {
                    return l.call(ft(t), n)
                })), e))
                for (; a < u; a++) e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)));
            return i ? t : l ? e.call(t) : u ? e(t[0], n) : o
        },
        Ot = /^(?:checkbox|radio)$/i,
        _t = /<([\w:-]+)/,
        Wt = /^$|\/(?:java|ecma)script/i,
        $t = /^\s+/,
        zt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var t = rt.createElement("div"),
            e = rt.createDocumentFragment(),
            n = rt.createElement("input");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", dt.leadingWhitespace = 3 === t.firstChild.nodeType, dt.tbody = !t.getElementsByTagName("tbody").length, dt.htmlSerialize = !!t.getElementsByTagName("link").length, dt.html5Clone = "<:nav></:nav>" !== rt.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), dt.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", dt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), n = rt.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), dt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, dt.noCloneEvent = !!t.addEventListener, t[ft.expando] = 1, dt.attributes = !t.getAttribute(ft.expando)
    }();
    var Vt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: dt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Vt.optgroup = Vt.option, Vt.tbody = Vt.tfoot = Vt.colgroup = Vt.caption = Vt.thead, Vt.th = Vt.td;
    var Ut = /<|&#?\w+;/,
        Xt = /<tbody/i;
    ! function() {
        var e, n, r = rt.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + e, (dt[e] = n in t) || (r.setAttribute(n, "t"), dt[e] = r.attributes[n].expando === !1);
        r = null
    }();
    var Kt = /^(?:input|select|textarea)$/i,
        Jt = /^key/,
        Gt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Yt = /^(?:focusinfocus|focusoutblur)$/,
        Qt = /^([^.]*)(?:\.(.+)|)/;
    ft.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, s, a, u, l, c, d, p, f, h, m, y = ft._data(t);
            if (y) {
                for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = ft.guid++), (s = y.events) || (s = y.events = {}), (c = y.handle) || (c = y.handle = function(t) {
                        return "undefined" == typeof ft || t && ft.event.triggered === t.type ? void 0 : ft.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = t), e = (e || "").match(Nt) || [""], a = e.length; a--;) o = Qt.exec(e[a]) || [], f = m = o[1], h = (o[2] || "").split(".").sort(), f && (l = ft.event.special[f] || {}, f = (i ? l.delegateType : l.bindType) || f, l = ft.event.special[f] || {}, d = ft.extend({
                    type: f,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ft.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, u), (p = s[f]) || (p = s[f] = [], p.delegateCount = 0, l.setup && l.setup.call(t, r, h, c) !== !1 || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))), l.add && (l.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, d) : p.push(d), ft.event.global[f] = !0);
                t = null
            }
        },
        remove: function(t, e, n, r, i) {
            var o, s, a, u, l, c, d, p, f, h, m, y = ft.hasData(t) && ft._data(t);
            if (y && (c = y.events)) {
                for (e = (e || "").match(Nt) || [""], l = e.length; l--;)
                    if (a = Qt.exec(e[l]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f) {
                        for (d = ft.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, p = c[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;) s = p[o], !i && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || r && r !== s.selector && ("**" !== r || !s.selector) || (p.splice(o, 1), s.selector && p.delegateCount--, d.remove && d.remove.call(t, s));
                        u && !p.length && (d.teardown && d.teardown.call(t, h, y.handle) !== !1 || ft.removeEvent(t, f, y.handle), delete c[f])
                    } else
                        for (f in c) ft.event.remove(t, f + e[l], n, r, !0);
                ft.isEmptyObject(c) && (delete y.handle, ft._removeData(t, "events"))
            }
        },
        trigger: function(e, n, r, i) {
            var o, s, a, u, l, c, d, p = [r || rt],
                f = ct.call(e, "type") ? e.type : e,
                h = ct.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = r = r || rt, 3 !== r.nodeType && 8 !== r.nodeType && !Yt.test(f + ft.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), s = f.indexOf(":") < 0 && "on" + f, e = e[ft.expando] ? e : new ft.Event(f, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : ft.makeArray(n, [e]), l = ft.event.special[f] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!i && !l.noBubble && !ft.isWindow(r)) {
                    for (u = l.delegateType || f, Yt.test(u + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), c = a;
                    c === (r.ownerDocument || rt) && p.push(c.defaultView || c.parentWindow || t)
                }
                for (d = 0;
                    (a = p[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? u : l.bindType || f, o = (ft._data(a, "events") || {})[e.type] && ft._data(a, "handle"), o && o.apply(a, n), o = s && a[s], o && o.apply && qt(a) && (e.result = o.apply(a, n), e.result === !1 && e.preventDefault());
                if (e.type = f, !i && !e.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), n) === !1) && qt(r) && s && r[f] && !ft.isWindow(r)) {
                    c = r[s], c && (r[s] = null), ft.event.triggered = f;
                    try {
                        r[f]()
                    } catch (t) {}
                    ft.event.triggered = void 0, c && (r[s] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = ft.event.fix(t);
            var e, n, r, i, o, s = [],
                a = it.call(arguments),
                u = (ft._data(this, "events") || {})[t.type] || [],
                l = ft.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, t) !== !1) {
                for (s = ft.event.handlers.call(this, t, u), e = 0;
                    (i = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, r = ((ft.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, r, i, o, s = [],
                a = e.delegateCount,
                u = t.target;
            if (a && u.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                        for (r = [], n = 0; n < a; n++) o = e[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? ft(i, this).index(u) > -1 : ft.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        fix: function(t) {
            if (t[ft.expando]) return t;
            var e, n, r, i = t.type,
                o = t,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Gt.test(i) ? this.mouseHooks : Jt.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, t = new ft.Event(o), e = r.length; e--;) n = r[e], t[n] = o[n];
            return t.target || (t.target = o.srcElement || rt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, r, i, o = e.button,
                    s = e.fromElement;
                return null == t.pageX && null != e.clientX && (r = t.target.ownerDocument || rt, i = r.documentElement, n = r.body, t.pageX = e.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === x() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (ft.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(t) {
                    return ft.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n) {
            var r = ft.extend(new ft.Event, n, {
                type: t,
                isSimulated: !0
            });
            ft.event.trigger(r, null, e), r.isDefaultPrevented() && n.preventDefault()
        }
    }, ft.removeEvent = rt.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    } : function(t, e, n) {
        var r = "on" + e;
        t.detachEvent && ("undefined" == typeof t[r] && (t[r] = null), t.detachEvent(r, n))
    }, ft.Event = function(t, e) {
        return this instanceof ft.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? v : b) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), void(this[ft.expando] = !0)) : new ft.Event(t, e)
    }, ft.Event.prototype = {
        constructor: ft.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = v, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = v, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = v, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ft.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        ft.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, r = this,
                    i = t.relatedTarget,
                    o = t.handleObj;
                return i && (i === r || ft.contains(r, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), dt.submit || (ft.event.special.submit = {
        setup: function() {
            return !ft.nodeName(this, "form") && void ft.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    n = ft.nodeName(e, "input") || ft.nodeName(e, "button") ? ft.prop(e, "form") : void 0;
                n && !ft._data(n, "submit") && (ft.event.add(n, "submit._submit", function(t) {
                    t._submitBubble = !0
                }), ft._data(n, "submit", !0))
            })
        },
        postDispatch: function(t) {
            t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && ft.event.simulate("submit", this.parentNode, t))
        },
        teardown: function() {
            return !ft.nodeName(this, "form") && void ft.event.remove(this, "._submit")
        }
    }), dt.change || (ft.event.special.change = {
        setup: function() {
            return Kt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ft.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
            }), ft.event.add(this, "click._change", function(t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1), ft.event.simulate("change", this, t)
            })), !1) : void ft.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Kt.test(e.nodeName) && !ft._data(e, "change") && (ft.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || ft.event.simulate("change", this.parentNode, t)
                }), ft._data(e, "change", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return ft.event.remove(this, "._change"), !Kt.test(this.nodeName)
        }
    }), dt.focusin || ft.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            ft.event.simulate(e, t.target, ft.event.fix(t))
        };
        ft.event.special[e] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = ft._data(r, e);
                i || r.addEventListener(t, n, !0), ft._data(r, e, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = ft._data(r, e) - 1;
                i ? ft._data(r, e, i) : (r.removeEventListener(t, n, !0), ft._removeData(r, e))
            }
        }
    }), ft.fn.extend({
        on: function(t, e, n, r) {
            return w(this, t, e, n, r)
        },
        one: function(t, e, n, r) {
            return w(this, t, e, n, r, 1)
        },
        off: function(t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj) return r = t.handleObj, ft(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof t) {
                for (i in t) this.off(i, e, t[i]);
                return this
            }
            return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = b), this.each(function() {
                ft.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                ft.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n) return ft.event.trigger(t, e, n, !0)
        }
    });
    var Zt = / jQuery\d+="(?:null|\d+)"/g,
        te = new RegExp("<(?:" + zt + ")[\\s/>]", "i"),
        ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ne = /<script|<style|<link/i,
        re = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ie = /^true\/(.*)/,
        oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        se = f(rt),
        ae = se.appendChild(rt.createElement("div"));
    ft.extend({
        htmlPrefilter: function(t) {
            return t.replace(ee, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var r, i, o, s, a, u = ft.contains(t.ownerDocument, t);
            if (dt.html5Clone || ft.isXMLDoc(t) || !te.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (ae.innerHTML = t.outerHTML, ae.removeChild(o = ae.firstChild)), !(dt.noCloneEvent && dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))
                for (r = h(o), a = h(t), s = 0; null != (i = a[s]); ++s) r[s] && k(i, r[s]);
            if (e)
                if (n)
                    for (a = a || h(t), r = r || h(o), s = 0; null != (i = a[s]); s++) T(i, r[s]);
                else T(t, o);
            return r = h(o, "script"), r.length > 0 && m(r, !u && h(t, "script")), r = a = i = null, o
        },
        cleanData: function(t, e) {
            for (var n, r, i, o, s = 0, a = ft.expando, u = ft.cache, l = dt.attributes, c = ft.event.special; null != (n = t[s]); s++)
                if ((e || qt(n)) && (i = n[a], o = i && u[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? ft.event.remove(n, r) : ft.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i], l || "undefined" == typeof n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a), nt.push(i))
                }
        }
    }), ft.fn.extend({
        domManip: A,
        detach: function(t) {
            return L(this, t, !0)
        },
        remove: function(t) {
            return L(this, t)
        },
        text: function(t) {
            return Bt(this, function(t) {
                return void 0 === t ? ft.text(this) : this.empty().append((this[0] && this[0].ownerDocument || rt).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return A(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = C(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return A(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = C(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return A(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return A(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && ft.cleanData(h(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && ft.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return ft.clone(this, t, e)
            })
        },
        html: function(t) {
            return Bt(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Zt, "") : void 0;
                if ("string" == typeof t && !ne.test(t) && (dt.htmlSerialize || !te.test(t)) && (dt.leadingWhitespace || !$t.test(t)) && !Vt[(_t.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ft.htmlPrefilter(t);
                    try {
                        for (; n < r; n++) e = this[n] || {}, 1 === e.nodeType && (ft.cleanData(h(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return A(this, arguments, function(e) {
                var n = this.parentNode;
                ft.inArray(this, t) < 0 && (ft.cleanData(h(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), ft.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ft.fn[t] = function(t) {
            for (var n, r = 0, i = [], o = ft(t), s = o.length - 1; r <= s; r++) n = r === s ? this : this.clone(!0), ft(o[r])[e](n), st.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var ue, le = {
            HTML: "block",
            BODY: "block"
        },
        ce = /^margin/,
        de = new RegExp("^(" + Ht + ")(?!px)[a-z%]+$", "i"),
        pe = function(t, e, n, r) {
            var i, o, s = {};
            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
            i = n.apply(t, r || []);
            for (o in e) t.style[o] = s[o];
            return i
        },
        fe = rt.documentElement;
    ! function() {
        function e() {
            var e, c, d = rt.documentElement;
            d.appendChild(u), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = i = a = !1, r = s = !0, t.getComputedStyle && (c = t.getComputedStyle(l), n = "1%" !== (c || {}).top, a = "2px" === (c || {}).marginLeft, i = "4px" === (c || {
                width: "4px"
            }).width, l.style.marginRight = "50%", r = "4px" === (c || {
                marginRight: "4px"
            }).marginRight, e = l.appendChild(rt.createElement("div")), e.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", l.style.width = "1px", s = !parseFloat((t.getComputedStyle(e) || {}).marginRight), l.removeChild(e)), l.style.display = "none", o = 0 === l.getClientRects().length, o && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", l.childNodes[0].style.borderCollapse = "separate", e = l.getElementsByTagName("td"),
                e[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === e[0].offsetHeight, o && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)), d.removeChild(u)
        }
        var n, r, i, o, s, a, u = rt.createElement("div"),
            l = rt.createElement("div");
        l.style && (l.style.cssText = "float:left;opacity:.5", dt.opacity = "0.5" === l.style.opacity, dt.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", dt.clearCloneStyle = "content-box" === l.style.backgroundClip, u = rt.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", u.appendChild(l), dt.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, ft.extend(dt, {
            reliableHiddenOffsets: function() {
                return null == n && e(), o
            },
            boxSizingReliable: function() {
                return null == n && e(), i
            },
            pixelMarginRight: function() {
                return null == n && e(), r
            },
            pixelPosition: function() {
                return null == n && e(), n
            },
            reliableMarginRight: function() {
                return null == n && e(), s
            },
            reliableMarginLeft: function() {
                return null == n && e(), a
            }
        }))
    }();
    var he, me, ye = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (he = function(e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e)
    }, me = function(t, e, n) {
        var r, i, o, s, a = t.style;
        return n = n || he(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== s && void 0 !== s || ft.contains(t.ownerDocument, t) || (s = ft.style(t, e)), n && !dt.pixelMarginRight() && de.test(s) && ce.test(e) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o), void 0 === s ? s : s + ""
    }) : fe.currentStyle && (he = function(t) {
        return t.currentStyle
    }, me = function(t, e, n) {
        var r, i, o, s, a = t.style;
        return n = n || he(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), de.test(s) && !ye.test(e) && (r = a.left, i = t.runtimeStyle, o = i && i.left, o && (i.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = r, o && (i.left = o)), void 0 === s ? s : s + "" || "auto"
    });
    var ge = /alpha\([^)]*\)/i,
        ve = /opacity\s*=\s*([^)]*)/i,
        be = /^(none|table(?!-c[ea]).+)/,
        xe = new RegExp("^(" + Ht + ")(.*)$", "i"),
        we = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ce = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Se = ["Webkit", "O", "Moz", "ms"],
        Ee = rt.createElement("div").style;
    ft.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = me(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": dt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i, o, s, a = ft.camelCase(e),
                    u = t.style;
                if (e = ft.cssProps[a] || (ft.cssProps[a] = q(a) || a), s = ft.cssHooks[e] || ft.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(t, !1, r)) ? i : u[e];
                if (o = typeof n, "string" === o && (i = It.exec(n)) && i[1] && (n = p(t, e, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (ft.cssNumber[a] ? "" : "px")), dt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, r))))) try {
                    u[e] = n
                } catch (t) {}
            }
        },
        css: function(t, e, n, r) {
            var i, o, s, a = ft.camelCase(e);
            return e = ft.cssProps[a] || (ft.cssProps[a] = q(a) || a), s = ft.cssHooks[e] || ft.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = me(t, e, r)), "normal" === o && e in Ce && (o = Ce[e]), "" === n || n ? (i = parseFloat(o), n === !0 || isFinite(i) ? i || 0 : o) : o
        }
    }), ft.each(["height", "width"], function(t, e) {
        ft.cssHooks[e] = {
            get: function(t, n, r) {
                if (n) return be.test(ft.css(t, "display")) && 0 === t.offsetWidth ? pe(t, we, function() {
                    return I(t, e, r)
                }) : I(t, e, r)
            },
            set: function(t, n, r) {
                var i = r && he(t);
                return P(t, n, r ? H(t, e, r, dt.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, i), i) : 0)
            }
        }
    }), dt.opacity || (ft.cssHooks.opacity = {
        get: function(t, e) {
            return ve.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                r = t.currentStyle,
                i = ft.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === ft.trim(o.replace(ge, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || r && !r.filter) || (n.filter = ge.test(o) ? o.replace(ge, i) : o + " " + i)
        }
    }), ft.cssHooks.marginRight = D(dt.reliableMarginRight, function(t, e) {
        if (e) return pe(t, {
            display: "inline-block"
        }, me, [t, "marginRight"])
    }), ft.cssHooks.marginLeft = D(dt.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat(me(t, "marginLeft")) || (ft.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - pe(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        }) : 0)) + "px"
    }), ft.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ft.cssHooks[t + e] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[t + Ft[r] + e] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, ce.test(t) || (ft.cssHooks[t + e].set = P)
    }), ft.fn.extend({
        css: function(t, e) {
            return Bt(this, function(t, e, n) {
                var r, i, o = {},
                    s = 0;
                if (ft.isArray(e)) {
                    for (r = he(t), i = e.length; s < i; s++) o[e[s]] = ft.css(t, e[s], !1, r);
                    return o
                }
                return void 0 !== n ? ft.style(t, e, n) : ft.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return j(this, !0)
        },
        hide: function() {
            return j(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Mt(this) ? ft(this).show() : ft(this).hide()
            })
        }
    }), ft.Tween = F, F.prototype = {
        constructor: F,
        init: function(t, e, n, r, i, o) {
            this.elem = t, this.prop = n, this.easing = i || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ft.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = F.propHooks[this.prop];
            return t && t.get ? t.get(this) : F.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = F.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ft.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, ft.fx = F.prototype.init, ft.fx.step = {};
    var Te, ke, Ae = /^(?:toggle|show|hide)$/,
        Le = /queueHooks$/;
    ft.Animation = ft.extend($, {
            tweeners: {
                "*": [function(t, e) {
                    var n = this.createTween(t, e);
                    return p(n.elem, t, It.exec(e), n), n
                }]
            },
            tweener: function(t, e) {
                ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Nt);
                for (var n, r = 0, i = t.length; r < i; r++) n = t[r], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(e)
            },
            prefilters: [_],
            prefilter: function(t, e) {
                e ? $.prefilters.unshift(t) : $.prefilters.push(t)
            }
        }), ft.speed = function(t, e, n) {
            var r = t && "object" == typeof t ? ft.extend({}, t) : {
                complete: n || !n && e || ft.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !ft.isFunction(e) && e
            };
            return r.duration = ft.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ft.fx.speeds ? ft.fx.speeds[r.duration] : ft.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                ft.isFunction(r.old) && r.old.call(this), r.queue && ft.dequeue(this, r.queue)
            }, r
        }, ft.fn.extend({
            fadeTo: function(t, e, n, r) {
                return this.filter(Mt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, r)
            },
            animate: function(t, e, n, r) {
                var i = ft.isEmptyObject(t),
                    o = ft.speed(e, n, r),
                    s = function() {
                        var e = $(this, ft.extend({}, t), o);
                        (i || ft._data(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(t, e, n) {
                var r = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        i = null != t && t + "queueHooks",
                        o = ft.timers,
                        s = ft._data(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                        for (i in s) s[i] && s[i].stop && Le.test(i) && r(s[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                    !e && n || ft.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = ft._data(this),
                        r = n[t + "queue"],
                        i = n[t + "queueHooks"],
                        o = ft.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, ft.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < s; e++) r[e] && r[e].finish && r[e].finish.call(this);
                    delete n.finish
                })
            }
        }), ft.each(["toggle", "show", "hide"], function(t, e) {
            var n = ft.fn[e];
            ft.fn[e] = function(t, r, i) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(B(e, !0), t, r, i)
            }
        }), ft.each({
            slideDown: B("show"),
            slideUp: B("hide"),
            slideToggle: B("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            ft.fn[t] = function(t, n, r) {
                return this.animate(e, t, n, r)
            }
        }), ft.timers = [], ft.fx.tick = function() {
            var t, e = ft.timers,
                n = 0;
            for (Te = ft.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || ft.fx.stop(), Te = void 0
        }, ft.fx.timer = function(t) {
            ft.timers.push(t), t() ? ft.fx.start() : ft.timers.pop()
        }, ft.fx.interval = 13, ft.fx.start = function() {
            ke || (ke = t.setInterval(ft.fx.tick, ft.fx.interval))
        }, ft.fx.stop = function() {
            t.clearInterval(ke), ke = null
        }, ft.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ft.fn.delay = function(e, n) {
            return e = ft.fx ? ft.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, r) {
                var i = t.setTimeout(n, e);
                r.stop = function() {
                    t.clearTimeout(i)
                }
            })
        },
        function() {
            var t, e = rt.createElement("input"),
                n = rt.createElement("div"),
                r = rt.createElement("select"),
                i = r.appendChild(rt.createElement("option"));
            n = rt.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), n.appendChild(e), t = n.getElementsByTagName("a")[0], t.style.cssText = "top:1px", dt.getSetAttribute = "t" !== n.className, dt.style = /top/.test(t.getAttribute("style")), dt.hrefNormalized = "/a" === t.getAttribute("href"), dt.checkOn = !!e.value, dt.optSelected = i.selected, dt.enctype = !!rt.createElement("form").enctype, r.disabled = !0, dt.optDisabled = !i.disabled, e = rt.createElement("input"), e.setAttribute("value", ""), dt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), dt.radioValue = "t" === e.value
        }();
    var Ne = /\r/g,
        Re = /[\x20\t\r\n\f]+/g;
    ft.fn.extend({
        val: function(t) {
            var e, n, r, i = this[0]; {
                if (arguments.length) return r = ft.isFunction(t), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? t.call(this, n, ft(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : ft.isArray(i) && (i = ft.map(i, function(t) {
                        return null == t ? "" : t + ""
                    })), e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                });
                if (i) return e = ft.valHooks[i.type] || ft.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Ne, "") : null == n ? "" : n)
            }
        }
    }), ft.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ft.find.attr(t, "value");
                    return null != e ? e : ft.trim(ft.text(t)).replace(Re, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
                        if (n = r[u], (n.selected || u === i) && (dt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ft.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ft(n).val(), o) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, r, i = t.options, o = ft.makeArray(e), s = i.length; s--;)
                        if (r = i[s], ft.inArray(ft.valHooks.option.get(r), o) > -1) try {
                            r.selected = n = !0
                        } catch (t) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (t.selectedIndex = -1), i
                }
            }
        }
    }), ft.each(["radio", "checkbox"], function() {
        ft.valHooks[this] = {
            set: function(t, e) {
                if (ft.isArray(e)) return t.checked = ft.inArray(ft(t).val(), e) > -1
            }
        }, dt.checkOn || (ft.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var De, qe, je = ft.expr.attrHandle,
        Pe = /^(?:checked|selected)$/i,
        He = dt.getSetAttribute,
        Ie = dt.input;
    ft.fn.extend({
        attr: function(t, e) {
            return Bt(this, ft.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ft.removeAttr(this, t)
            })
        }
    }), ft.extend({
        attr: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? ft.prop(t, e, n) : (1 === o && ft.isXMLDoc(t) || (e = e.toLowerCase(), i = ft.attrHooks[e] || (ft.expr.match.bool.test(e) ? qe : De)), void 0 !== n ? null === n ? void ft.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = ft.find.attr(t, e), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!dt.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, r, i = 0,
                o = e && e.match(Nt);
            if (o && 1 === t.nodeType)
                for (; n = o[i++];) r = ft.propFix[n] || n, ft.expr.match.bool.test(n) ? Ie && He || !Pe.test(n) ? t[r] = !1 : t[ft.camelCase("default-" + n)] = t[r] = !1 : ft.attr(t, n, ""), t.removeAttribute(He ? n : r)
        }
    }), qe = {
        set: function(t, e, n) {
            return e === !1 ? ft.removeAttr(t, n) : Ie && He || !Pe.test(n) ? t.setAttribute(!He && ft.propFix[n] || n, n) : t[ft.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = je[e] || ft.find.attr;
        Ie && He || !Pe.test(e) ? je[e] = function(t, e, r) {
            var i, o;
            return r || (o = je[e], je[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, je[e] = o), i
        } : je[e] = function(t, e, n) {
            if (!n) return t[ft.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Ie && He || (ft.attrHooks.value = {
        set: function(t, e, n) {
            return ft.nodeName(t, "input") ? void(t.defaultValue = e) : De && De.set(t, e, n)
        }
    }), He || (De = {
        set: function(t, e, n) {
            var r = t.getAttributeNode(n);
            if (r || t.setAttributeNode(r = t.ownerDocument.createAttribute(n)), r.value = e += "", "value" === n || e === t.getAttribute(n)) return e
        }
    }, je.id = je.name = je.coords = function(t, e, n) {
        var r;
        if (!n) return (r = t.getAttributeNode(e)) && "" !== r.value ? r.value : null
    }, ft.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            if (n && n.specified) return n.value
        },
        set: De.set
    }, ft.attrHooks.contenteditable = {
        set: function(t, e, n) {
            De.set(t, "" !== e && e, n)
        }
    }, ft.each(["width", "height"], function(t, e) {
        ft.attrHooks[e] = {
            set: function(t, n) {
                if ("" === n) return t.setAttribute(e, "auto"), n
            }
        }
    })), dt.style || (ft.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Fe = /^(?:input|select|textarea|button|object)$/i,
        Me = /^(?:a|area)$/i;
    ft.fn.extend({
        prop: function(t, e) {
            return Bt(this, ft.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = ft.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (t) {}
            })
        }
    }), ft.extend({
        prop: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, i = ft.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ft.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Fe.test(t.nodeName) || Me.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), dt.hrefNormalized || ft.each(["href", "src"], function(t, e) {
        ft.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), dt.optSelected || (ft.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ft.propFix[this.toLowerCase()] = this
    }), dt.enctype || (ft.propFix.enctype = "encoding");
    var Be = /[\t\r\n\f]/g;
    ft.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, s, a, u = 0;
            if (ft.isFunction(t)) return this.each(function(e) {
                ft(this).addClass(t.call(this, e, z(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(Nt) || []; n = this[u++];)
                    if (i = z(n), r = 1 === n.nodeType && (" " + i + " ").replace(Be, " ")) {
                        for (s = 0; o = e[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        a = ft.trim(r), i !== a && ft.attr(n, "class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, s, a, u = 0;
            if (ft.isFunction(t)) return this.each(function(e) {
                ft(this).removeClass(t.call(this, e, z(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Nt) || []; n = this[u++];)
                    if (i = z(n), r = 1 === n.nodeType && (" " + i + " ").replace(Be, " ")) {
                        for (s = 0; o = e[s++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        a = ft.trim(r), i !== a && ft.attr(n, "class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function(n) {
                ft(this).toggleClass(t.call(this, n, z(this), e), e)
            }) : this.each(function() {
                var e, r, i, o;
                if ("string" === n)
                    for (r = 0, i = ft(this), o = t.match(Nt) || []; e = o[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else void 0 !== t && "boolean" !== n || (e = z(this), e && ft._data(this, "__className__", e), ft.attr(this, "class", e || t === !1 ? "" : ft._data(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, r = 0;
            for (e = " " + t + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + z(n) + " ").replace(Be, " ").indexOf(e) > -1) return !0;
            return !1
        }
    }), ft.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        ft.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), ft.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var Oe = t.location,
        _e = ft.now(),
        We = /\?/,
        $e = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ft.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, r = null,
            i = ft.trim(e + "");
        return i && !ft.trim(i.replace($e, function(t, e, i, o) {
            return n && e && (r = 0), 0 === r ? t : (n = i || e, r += !o - !i, "")
        })) ? Function("return " + i)() : ft.error("Invalid JSON: " + e)
    }, ft.parseXML = function(e) {
        var n, r;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (r = new t.DOMParser, n = r.parseFromString(e, "text/xml")) : (n = new t.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (t) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e), n
    };
    var ze = /#.*$/,
        Ve = /([?&])_=[^&]*/,
        Ue = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Xe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ke = /^(?:GET|HEAD)$/,
        Je = /^\/\//,
        Ge = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ye = {},
        Qe = {},
        Ze = "*/".concat("*"),
        tn = Oe.href,
        en = Ge.exec(tn.toLowerCase()) || [];
    ft.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tn,
            type: "GET",
            isLocal: Xe.test(en[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ze,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ft.parseJSON,
                "text xml": ft.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? X(X(t, ft.ajaxSettings), e) : X(ft.ajaxSettings, t)
        },
        ajaxPrefilter: V(Ye),
        ajaxTransport: V(Qe),
        ajax: function(e, n) {
            function r(e, n, r, i) {
                var o, d, v, b, w, S = n;
                2 !== x && (x = 2, u && t.clearTimeout(u), c = void 0, a = i || "", C.readyState = e > 0 ? 4 : 0, o = e >= 200 && e < 300 || 304 === e, r && (b = K(p, C, r)), b = J(p, b, C, o), o ? (p.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (ft.lastModified[s] = w), w = C.getResponseHeader("etag"), w && (ft.etag[s] = w)), 204 === e || "HEAD" === p.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = b.state, d = b.data, v = b.error, o = !v)) : (v = S, !e && S || (S = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || S) + "", o ? m.resolveWith(f, [d, S, C]) : m.rejectWith(f, [C, S, v]), C.statusCode(g), g = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [C, p, o ? d : v]), y.fireWith(f, [C, S]), l && (h.trigger("ajaxComplete", [C, p]), --ft.active || ft.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var i, o, s, a, u, l, c, d, p = ft.ajaxSetup({}, n),
                f = p.context || p,
                h = p.context && (f.nodeType || f.jquery) ? ft(f) : ft.event,
                m = ft.Deferred(),
                y = ft.Callbacks("once memory"),
                g = p.statusCode || {},
                v = {},
                b = {},
                x = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === x) {
                            if (!d)
                                for (d = {}; e = Ue.exec(a);) d[e[1].toLowerCase()] = e[2];
                            e = d[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? a : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return x || (t = b[n] = b[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return x || (p.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (x < 2)
                                for (e in t) g[e] = [g[e], t[e]];
                            else C.always(t[C.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return c && c.abort(e), r(0, e), this
                    }
                };
            if (m.promise(C).complete = y.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || tn) + "").replace(ze, "").replace(Je, en[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ft.trim(p.dataType || "*").toLowerCase().match(Nt) || [""], null == p.crossDomain && (i = Ge.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === en[1] && i[2] === en[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ft.param(p.data, p.traditional)), U(Ye, p, n, C), 2 === x) return C;
            l = ft.event && p.global, l && 0 === ft.active++ && ft.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ke.test(p.type), s = p.url, p.hasContent || (p.data && (s = p.url += (We.test(s) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Ve.test(s) ? s.replace(Ve, "$1_=" + _e++) : s + (We.test(s) ? "&" : "?") + "_=" + _e++)), p.ifModified && (ft.lastModified[s] && C.setRequestHeader("If-Modified-Since", ft.lastModified[s]), ft.etag[s] && C.setRequestHeader("If-None-Match", ft.etag[s])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ze + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers) C.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === x)) return C.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) C[o](p[o]);
            if (c = U(Qe, p, n, C)) {
                if (C.readyState = 1, l && h.trigger("ajaxSend", [C, p]), 2 === x) return C;
                p.async && p.timeout > 0 && (u = t.setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, c.send(v, r)
                } catch (t) {
                    if (!(x < 2)) throw t;
                    r(-1, t)
                }
            } else r(-1, "No Transport");
            return C
        },
        getJSON: function(t, e, n) {
            return ft.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return ft.get(t, void 0, e, "script")
        }
    }), ft.each(["get", "post"], function(t, e) {
        ft[e] = function(t, n, r, i) {
            return ft.isFunction(n) && (i = i || r, r = n, n = void 0), ft.ajax(ft.extend({
                url: t,
                type: e,
                dataType: i,
                data: n,
                success: r
            }, ft.isPlainObject(t) && t))
        }
    }), ft._evalUrl = function(t) {
        return ft.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ft.fn.extend({
        wrapAll: function(t) {
            if (ft.isFunction(t)) return this.each(function(e) {
                ft(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = ft(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return ft.isFunction(t) ? this.each(function(e) {
                ft(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = ft(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = ft.isFunction(t);
            return this.each(function(n) {
                ft(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ft.nodeName(this, "body") || ft(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ft.expr.filters.hidden = function(t) {
        return dt.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : Y(t)
    }, ft.expr.filters.visible = function(t) {
        return !ft.expr.filters.hidden(t)
    };
    var nn = /%20/g,
        rn = /\[\]$/,
        on = /\r?\n/g,
        sn = /^(?:submit|button|image|reset|file)$/i,
        an = /^(?:input|select|textarea|keygen)/i;
    ft.param = function(t, e) {
        var n, r = [],
            i = function(t, e) {
                e = ft.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = ft.ajaxSettings && ft.ajaxSettings.traditional), ft.isArray(t) || t.jquery && !ft.isPlainObject(t)) ft.each(t, function() {
            i(this.name, this.value)
        });
        else
            for (n in t) Q(n, t[n], e, i);
        return r.join("&").replace(nn, "+")
    }, ft.fn.extend({
        serialize: function() {
            return ft.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ft.prop(this, "elements");
                return t ? ft.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ft(this).is(":disabled") && an.test(this.nodeName) && !sn.test(t) && (this.checked || !Ot.test(t))
            }).map(function(t, e) {
                var n = ft(this).val();
                return null == n ? null : ft.isArray(n) ? ft.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(on, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }), ft.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return this.isLocal ? tt() : rt.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || tt()
    } : Z;
    var un = 0,
        ln = {},
        cn = ft.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in ln) ln[t](void 0, !0)
    }), dt.cors = !!cn && "withCredentials" in cn, cn = dt.ajax = !!cn, cn && ft.ajaxTransport(function(e) {
        if (!e.crossDomain || dt.cors) {
            var n;
            return {
                send: function(r, i) {
                    var o, s = e.xhr(),
                        a = ++un;
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) s[o] = e.xhrFields[o];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r) void 0 !== r[o] && s.setRequestHeader(o, r[o] + "");
                    s.send(e.hasContent && e.data || null), n = function(t, r) {
                        var o, u, l;
                        if (n && (r || 4 === s.readyState))
                            if (delete ln[a], n = void 0, s.onreadystatechange = ft.noop, r) 4 !== s.readyState && s.abort();
                            else {
                                l = {}, o = s.status, "string" == typeof s.responseText && (l.text = s.responseText);
                                try {
                                    u = s.statusText
                                } catch (t) {
                                    u = ""
                                }
                                o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                            }
                        l && i(o, u, l, s.getAllResponseHeaders())
                    }, e.async ? 4 === s.readyState ? t.setTimeout(n) : s.onreadystatechange = ln[a] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }), ft.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return ft.globalEval(t), t
            }
        }
    }), ft.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), ft.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n = rt.head || ft("head")[0] || rt.documentElement;
            return {
                send: function(r, i) {
                    e = rt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || i(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var dn = [],
        pn = /(=)\?(?=&|$)|\?\?/;
    ft.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = dn.pop() || ft.expando + "_" + _e++;
            return this[t] = !0, t
        }
    }), ft.ajaxPrefilter("json jsonp", function(e, n, r) {
        var i, o, s, a = e.jsonp !== !1 && (pn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && pn.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(pn, "$1" + i) : e.jsonp !== !1 && (e.url += (We.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return s || ft.error(i + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[i], t[i] = function() {
            s = arguments
        }, r.always(function() {
            void 0 === o ? ft(t).removeProp(i) : t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, dn.push(i)), s && ft.isFunction(o) && o(s[0]), s = o = void 0
        }), "script"
    }), ft.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || rt;
        var r = Ct.exec(t),
            i = !n && [];
        return r ? [e.createElement(r[1])] : (r = g([t], e, i), i && i.length && ft(i).remove(), ft.merge([], r.childNodes))
    };
    var fn = ft.fn.load;
    ft.fn.load = function(t, e, n) {
        if ("string" != typeof t && fn) return fn.apply(this, arguments);
        var r, i, o, s = this,
            a = t.indexOf(" ");
        return a > -1 && (r = ft.trim(t.slice(a, t.length)), t = t.slice(0, a)), ft.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), s.length > 0 && ft.ajax({
            url: t,
            type: i || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, s.html(r ? ft("<div>").append(ft.parseHTML(t)).find(r) : t)
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        ft.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), ft.expr.filters.animated = function(t) {
        return ft.grep(ft.timers, function(e) {
            return t === e.elem
        }).length
    }, ft.offset = {
        setOffset: function(t, e, n) {
            var r, i, o, s, a, u, l, c = ft.css(t, "position"),
                d = ft(t),
                p = {};
            "static" === c && (t.style.position = "relative"), a = d.offset(), o = ft.css(t, "top"), u = ft.css(t, "left"), l = ("absolute" === c || "fixed" === c) && ft.inArray("auto", [o, u]) > -1, l ? (r = d.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, a))), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + i), "using" in e ? e.using.call(t, p) : d.css(p)
        }
    }, ft.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                ft.offset.setOffset(this, t, e)
            });
            var e, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            if (o) return e = o.documentElement, ft.contains(e, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = et(o), {
                top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : r
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === ft.css(r, "position") ? e = r.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ft.nodeName(t[0], "html") || (n = t.offset()), n.top += ft.css(t[0], "borderTopWidth", !0), n.left += ft.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - ft.css(r, "marginTop", !0),
                    left: e.left - n.left - ft.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && !ft.nodeName(t, "html") && "static" === ft.css(t, "position");) t = t.offsetParent;
                return t || fe
            })
        }
    }), ft.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        ft.fn[t] = function(r) {
            return Bt(this, function(t, r, i) {
                var o = et(t);
                return void 0 === i ? o ? e in o ? o[e] : o.document.documentElement[r] : t[r] : void(o ? o.scrollTo(n ? ft(o).scrollLeft() : i, n ? i : ft(o).scrollTop()) : t[r] = i)
            }, t, r, arguments.length, null)
        }
    }), ft.each(["top", "left"], function(t, e) {
        ft.cssHooks[e] = D(dt.pixelPosition, function(t, n) {
            if (n) return n = me(t, e), de.test(n) ? ft(t).position()[e] + "px" : n
        })
    }), ft.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        ft.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, r) {
            ft.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || i === !0 ? "margin" : "border");
                return Bt(this, function(e, n, r) {
                    var i;
                    return ft.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? ft.css(e, n, s) : ft.style(e, n, r, s)
                }, e, o ? r : void 0, o, null)
            }
        })
    }), ft.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, r) {
            return this.on(e, t, n, r)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), ft.fn.size = function() {
        return this.length
    }, ft.fn.andSelf = ft.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ft
    });
    var hn = t.jQuery,
        mn = t.$;
    return ft.noConflict = function(e) {
        return t.$ === ft && (t.$ = mn), e && t.jQuery === ft && (t.jQuery = hn), ft
    }, e || (t.jQuery = t.$ = ft), ft
}),
function(t, e) {
    "use strict";
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, r = t(document);
    t.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return t("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return t("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(t) {
            var e = n.csrfToken();
            e && t.setRequestHeader("X-CSRF-Token", e)
        },
        refreshCSRFTokens: function() {
            t('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function(e, n, r) {
            var i = t.Event(n);
            return e.trigger(i, r), i.result !== !1
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(e) {
            return t.ajax(e)
        },
        href: function(t) {
            return t[0].href
        },
        isRemote: function(t) {
            return t.data("remote") !== e && t.data("remote") !== !1
        },
        handleRemote: function(r) {
            var i, o, s, a, u, l;
            if (n.fire(r, "ajax:before")) {
                if (a = r.data("with-credentials") || null, u = r.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, r.is("form")) {
                    i = r.data("ujs:submit-button-formmethod") || r.attr("method"), o = r.data("ujs:submit-button-formaction") || r.attr("action"), s = t(r[0]).serializeArray();
                    var c = r.data("ujs:submit-button");
                    c && (s.push(c), r.data("ujs:submit-button", null)), r.data("ujs:submit-button-formmethod", null), r.data("ujs:submit-button-formaction", null)
                } else r.is(n.inputChangeSelector) ? (i = r.data("method"), o = r.data("url"), s = r.serialize(), r.data("params") && (s = s + "&" + r.data("params"))) : r.is(n.buttonClickSelector) ? (i = r.data("method") || "get", o = r.data("url"), s = r.serialize(), r.data("params") && (s = s + "&" + r.data("params"))) : (i = r.data("method"), o = n.href(r), s = r.data("params") || null);
                return l = {
                    type: i || "GET",
                    data: s,
                    dataType: u,
                    beforeSend: function(t, i) {
                        return i.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), !!n.fire(r, "ajax:beforeSend", [t, i]) && void r.trigger("ajax:send", t)
                    },
                    success: function(t, e, n) {
                        r.trigger("ajax:success", [t, e, n])
                    },
                    complete: function(t, e) {
                        r.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, n) {
                        r.trigger("ajax:error", [t, e, n])
                    },
                    crossDomain: n.isCrossDomain(o)
                }, a && (l.xhrFields = {
                    withCredentials: a
                }), o && (l.url = o), n.ajax(l)
            }
            return !1
        },
        isCrossDomain: function(t) {
            var e = document.createElement("a");
            e.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = t, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
            } catch (t) {
                return !0
            }
        },
        handleMethod: function(r) {
            var i = n.href(r),
                o = r.data("method"),
                s = r.attr("target"),
                a = n.csrfToken(),
                u = n.csrfParam(),
                l = t('<form method="post" action="' + i + '"></form>'),
                c = '<input name="_method" value="' + o + '" type="hidden" />';
            u === e || a === e || n.isCrossDomain(i) || (c += '<input name="' + u + '" value="' + a + '" type="hidden" />'), s && l.attr("target", s), l.hide().append(c).appendTo("body"), l.submit()
        },
        formElements: function(e, n) {
            return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
        },
        disableFormElements: function(e) {
            n.formElements(e, n.disableSelector).each(function() {
                n.disableFormElement(t(this))
            })
        },
        disableFormElement: function(t) {
            var n, r;
            n = t.is("button") ? "html" : "val", r = t.data("disable-with"), r !== e && (t.data("ujs:enable-with", t[n]()), t[n](r)), t.prop("disabled", !0), t.data("ujs:disabled", !0)
        },
        enableFormElements: function(e) {
            n.formElements(e, n.enableSelector).each(function() {
                n.enableFormElement(t(this))
            })
        },
        enableFormElement: function(t) {
            var n = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") !== e && (t[n](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.prop("disabled", !1), t.removeData("ujs:disabled")
        },
        allowAction: function(t) {
            var e, r = t.data("confirm"),
                i = !1;
            if (!r) return !0;
            if (n.fire(t, "confirm")) {
                try {
                    i = n.confirm(r)
                } catch (t) {
                    (console.error || console.log).call(console, t.stack || t)
                }
                e = n.fire(t, "confirm:complete", [i])
            }
            return i && e
        },
        blankInputs: function(e, n, r) {
            var i, o, s, a, u = t(),
                l = n || "input,textarea",
                c = e.find(l),
                d = {};
            return c.each(function() {
                i = t(this), i.is("input[type=radio]") ? (a = i.attr("name"), d[a] || (0 === e.find('input[type=radio]:checked[name="' + a + '"]').length && (s = e.find('input[type=radio][name="' + a + '"]'), u = u.add(s)), d[a] = a)) : (o = i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : !!i.val(), o === r && (u = u.add(i)))
            }), !!u.length && u
        },
        nonBlankInputs: function(t, e) {
            return n.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function(t) {
            var r = t.data("disable-with");
            r !== e && (t.data("ujs:enable-with", t.html()), t.html(r)), t.bind("click.railsDisable", function(t) {
                return n.stopEverything(t)
            }), t.data("ujs:disabled", !0)
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable"), t.removeData("ujs:disabled")
        }
    }, n.fire(r, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, r) {
        t.crossDomain || n.CSRFProtection(r)
    }), t(window).on("pageshow.rails", function() {
        t(t.rails.enableSelector).each(function() {
            var e = t(this);
            e.data("ujs:disabled") && t.rails.enableFormElement(e)
        }), t(t.rails.linkDisableSelector).each(function() {
            var e = t(this);
            e.data("ujs:disabled") && t.rails.enableElement(e)
        })
    }), r.on("ajax:complete", n.linkDisableSelector, function() {
        n.enableElement(t(this))
    }), r.on("ajax:complete", n.buttonDisableSelector, function() {
        n.enableFormElement(t(this))
    }), r.on("click.rails", n.linkClickSelector, function(e) {
        var r = t(this),
            i = r.data("method"),
            o = r.data("params"),
            s = e.metaKey || e.ctrlKey;
        if (!n.allowAction(r)) return n.stopEverything(e);
        if (!s && r.is(n.linkDisableSelector) && n.disableElement(r), n.isRemote(r)) {
            if (s && (!i || "GET" === i) && !o) return !0;
            var a = n.handleRemote(r);
            return a === !1 ? n.enableElement(r) : a.fail(function() {
                n.enableElement(r)
            }), !1
        }
        return i ? (n.handleMethod(r), !1) : void 0
    }), r.on("click.rails", n.buttonClickSelector, function(e) {
        var r = t(this);
        if (!n.allowAction(r) || !n.isRemote(r)) return n.stopEverything(e);
        r.is(n.buttonDisableSelector) && n.disableFormElement(r);
        var i = n.handleRemote(r);
        return i === !1 ? n.enableFormElement(r) : i.fail(function() {
            n.enableFormElement(r)
        }), !1
    }), r.on("change.rails", n.inputChangeSelector, function(e) {
        var r = t(this);
        return n.allowAction(r) && n.isRemote(r) ? (n.handleRemote(r), !1) : n.stopEverything(e)
    }), r.on("submit.rails", n.formSubmitSelector, function(r) {
        var i, o, s = t(this),
            a = n.isRemote(s);
        if (!n.allowAction(s)) return n.stopEverything(r);
        if (s.attr("novalidate") === e)
            if (s.data("ujs:formnovalidate-button") === e) {
                if (i = n.blankInputs(s, n.requiredInputSelector, !1), i && n.fire(s, "ajax:aborted:required", [i])) return n.stopEverything(r)
            } else s.data("ujs:formnovalidate-button", e);
        if (a) {
            if (o = n.nonBlankInputs(s, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(s)
                }, 13);
                var u = n.fire(s, "ajax:aborted:file", [o]);
                return u || setTimeout(function() {
                    n.enableFormElements(s)
                }, 13), u
            }
            return n.handleRemote(s), !1
        }
        setTimeout(function() {
            n.disableFormElements(s)
        }, 13)
    }), r.on("click.rails", n.formInputClickSelector, function(e) {
        var r = t(this);
        if (!n.allowAction(r)) return n.stopEverything(e);
        var i = r.attr("name"),
            o = i ? {
                name: i,
                value: r.val()
            } : null,
            s = r.closest("form");
        0 === s.length && (s = t("#" + r.attr("form"))), s.data("ujs:submit-button", o), s.data("ujs:formnovalidate-button", r.attr("formnovalidate")), s.data("ujs:submit-button-formaction", r.attr("formaction")), s.data("ujs:submit-button-formmethod", r.attr("formmethod"))
    }), r.on("ajax:send.rails", n.formSubmitSelector, function(e) {
        this === e.target && n.disableFormElements(t(this))
    }), r.on("ajax:complete.rails", n.formSubmitSelector, function(e) {
        this === e.target && n.enableFormElements(t(this))
    }), t(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery),
function() {
    (function() {
        (function() {
            this.Turbolinks = {
                supported: function() {
                    return null != window.history.pushState && null != window.requestAnimationFrame
                }(),
                visit: function(e, n) {
                    return t.controller.visit(e, n)
                },
                clearCache: function() {
                    return t.controller.clearCache()
                }
            }
        }).call(this)
    }).call(this);
    var t = this.Turbolinks;
    (function() {
        (function() {
            var e, n;
            t.copyObject = function(t) {
                var e, n, r;
                n = {};
                for (e in t) r = t[e], n[e] = r;
                return n
            }, t.closest = function(t, n) {
                return e.call(t, n)
            }, e = function() {
                var t, e;
                return t = document.documentElement, null != (e = t.closest) ? e : function(t) {
                    var e;
                    for (e = this; e;) {
                        if (e.nodeType === Node.ELEMENT_NODE && n.call(e, t)) return e;
                        e = e.parentNode
                    }
                }
            }(), t.defer = function(t) {
                return setTimeout(t, 1)
            }, t.dispatch = function(t, e) {
                var n, r, i, o, s;
                return o = null != e ? e : {}, s = o.target, n = o.cancelable, r = o.data, i = document.createEvent("Events"), i.initEvent(t, !0, n === !0), i.data = null != r ? r : {}, (null != s ? s : document).dispatchEvent(i), i
            }, t.match = function(t, e) {
                return n.call(t, e)
            }, n = function() {
                var t, e, n, r;
                return t = document.documentElement, null != (e = null != (n = null != (r = t.matchesSelector) ? r : t.webkitMatchesSelector) ? n : t.msMatchesSelector) ? e : t.mozMatchesSelector
            }(), t.uuid = function() {
                var t, e, n;
                for (n = "", t = e = 1; 36 >= e; t = ++e) n += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
                return n
            }
        }).call(this),
            function() {
                t.Location = function() {
                    function t(t) {
                        var e, n;
                        null == t && (t = ""), n = document.createElement("a"), n.href = t.toString(), this.absoluteURL = n.href, e = n.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = n.hash.slice(1))
                    }
                    var e, n, r, i;
                    return t.wrap = function(t) {
                        return t instanceof this ? t : new this(t)
                    }, t.prototype.getOrigin = function() {
                        return this.absoluteURL.split("/", 3).join("/")
                    }, t.prototype.getPath = function() {
                        var t, e;
                        return null != (t = null != (e = this.absoluteURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/"
                    }, t.prototype.getPathComponents = function() {
                        return this.getPath().split("/").slice(1)
                    }, t.prototype.getLastPathComponent = function() {
                        return this.getPathComponents().slice(-1)[0]
                    }, t.prototype.getExtension = function() {
                        var t, e;
                        return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : ""
                    }, t.prototype.isHTML = function() {
                        return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)
                    }, t.prototype.isPrefixedBy = function(t) {
                        var e;
                        return e = n(t), this.isEqualTo(t) || i(this.absoluteURL, e)
                    }, t.prototype.isEqualTo = function(t) {
                        return this.absoluteURL === (null != t ? t.absoluteURL : void 0)
                    }, t.prototype.toCacheKey = function() {
                        return this.requestURL
                    }, t.prototype.toJSON = function() {
                        return this.absoluteURL
                    }, t.prototype.toString = function() {
                        return this.absoluteURL
                    }, t.prototype.valueOf = function() {
                        return this.absoluteURL
                    }, n = function(t) {
                        return e(t.getOrigin() + t.getPath())
                    }, e = function(t) {
                        return r(t, "/") ? t : t + "/"
                    }, i = function(t, e) {
                        return t.slice(0, e.length) === e
                    }, r = function(t, e) {
                        return t.slice(-e.length) === e
                    }, t
                }()
            }.call(this),
            function() {
                var e = function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                };
                t.HttpRequest = function() {
                    function n(n, r, i) {
                        this.delegate = n, this.requestCanceled = e(this.requestCanceled, this), this.requestTimedOut = e(this.requestTimedOut, this), this.requestFailed = e(this.requestFailed, this), this.requestLoaded = e(this.requestLoaded, this), this.requestProgressed = e(this.requestProgressed, this), this.url = t.Location.wrap(r).requestURL, this.referrer = t.Location.wrap(i).absoluteURL, this.createXHR()
                    }
                    return n.NETWORK_FAILURE = 0, n.TIMEOUT_FAILURE = -1, n.timeout = 60, n.prototype.send = function() {
                        var t;
                        return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof(t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0
                    }, n.prototype.cancel = function() {
                        return this.xhr && this.sent ? this.xhr.abort() : void 0
                    }, n.prototype.requestProgressed = function(t) {
                        return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0
                    }, n.prototype.requestLoaded = function() {
                        return this.endRequest(function(t) {
                            return function() {
                                var e;
                                return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText))
                            }
                        }(this))
                    }, n.prototype.requestFailed = function() {
                        return this.endRequest(function(t) {
                            return function() {
                                return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)
                            }
                        }(this))
                    }, n.prototype.requestTimedOut = function() {
                        return this.endRequest(function(t) {
                            return function() {
                                return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)
                            }
                        }(this))
                    }, n.prototype.requestCanceled = function() {
                        return this.endRequest()
                    }, n.prototype.notifyApplicationBeforeRequestStart = function() {
                        return t.dispatch("turbolinks:request-start", {
                            data: {
                                url: this.url,
                                xhr: this.xhr
                            }
                        })
                    }, n.prototype.notifyApplicationAfterRequestEnd = function() {
                        return t.dispatch("turbolinks:request-end", {
                            data: {
                                url: this.url,
                                xhr: this.xhr
                            }
                        })
                    }, n.prototype.createXHR = function() {
                        return this.xhr = new XMLHttpRequest, this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled
                    }, n.prototype.endRequest = function(t) {
                        return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0
                    }, n.prototype.setProgress = function(t) {
                        var e;
                        return this.progress = t, "function" == typeof(e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0
                    }, n.prototype.destroy = function() {
                        var t;
                        return this.setProgress(1), "function" == typeof(t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null
                    }, n
                }()
            }.call(this),
            function() {
                var e = function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                };
                t.ProgressBar = function() {
                    function t() {
                        this.trickle = e(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement()
                    }
                    var n;
                    return n = 300, t.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + n + "ms ease-out, opacity " + n / 2 + "ms " + n / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", t.prototype.show = function() {
                        return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling())
                    }, t.prototype.hide = function() {
                        return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function(t) {
                            return function() {
                                return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1
                            }
                        }(this))) : void 0
                    }, t.prototype.setValue = function(t) {
                        return this.value = t, this.refresh()
                    }, t.prototype.installStylesheetElement = function() {
                        return document.head.insertBefore(this.stylesheetElement, document.head.firstChild)
                    }, t.prototype.installProgressElement = function() {
                        return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh()
                    }, t.prototype.fadeProgressElement = function(t) {
                        return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * n)
                    }, t.prototype.uninstallProgressElement = function() {
                        return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0
                    }, t.prototype.startTrickling = function() {
                        return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, n)
                    }, t.prototype.stopTrickling = function() {
                        return clearInterval(this.trickleInterval), this.trickleInterval = null
                    }, t.prototype.trickle = function() {
                        return this.setValue(this.value + Math.random() / 100)
                    }, t.prototype.refresh = function() {
                        return requestAnimationFrame(function(t) {
                            return function() {
                                return t.progressElement.style.width = 10 + 90 * t.value + "%"
                            }
                        }(this))
                    }, t.prototype.createStylesheetElement = function() {
                        var t;
                        return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t
                    }, t.prototype.createProgressElement = function() {
                        var t;
                        return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t
                    }, t
                }()
            }.call(this),
            function() {
                var e = function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                };
                t.BrowserAdapter = function() {
                    function n(n) {
                        this.controller = n, this.showProgressBar = e(this.showProgressBar, this), this.progressBar = new t.ProgressBar
                    }
                    var r, i, o, s;
                    return s = t.HttpRequest, r = s.NETWORK_FAILURE, o = s.TIMEOUT_FAILURE, i = 500, n.prototype.visitProposedToLocationWithAction = function(t, e) {
                        return this.controller.startVisitToLocationWithAction(t, e)
                    }, n.prototype.visitStarted = function(t) {
                        return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot()
                    }, n.prototype.visitRequestStarted = function(t) {
                        return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar()
                    }, n.prototype.visitRequestProgressed = function(t) {
                        return this.progressBar.setValue(t.progress)
                    }, n.prototype.visitRequestCompleted = function(t) {
                        return t.loadResponse()
                    }, n.prototype.visitRequestFailedWithStatusCode = function(t, e) {
                        switch (e) {
                            case r:
                            case o:
                                return this.reload();
                            default:
                                return t.loadResponse()
                        }
                    }, n.prototype.visitRequestFinished = function() {
                        return this.hideProgressBar()
                    }, n.prototype.visitCompleted = function(t) {
                        return t.followRedirect()
                    }, n.prototype.pageInvalidated = function() {
                        return this.reload()
                    }, n.prototype.showProgressBarAfterDelay = function() {
                        return this.progressBarTimeout = setTimeout(this.showProgressBar, i)
                    }, n.prototype.showProgressBar = function() {
                        return this.progressBar.show()
                    }, n.prototype.hideProgressBar = function() {
                        return this.progressBar.hide(), clearTimeout(this.progressBarTimeout)
                    }, n.prototype.reload = function() {
                        return window.location.reload()
                    }, n
                }()
            }.call(this),
            function() {
                var e, n = function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                };
                e = !1, addEventListener("load", function() {
                    return t.defer(function() {
                        return e = !0
                    })
                }, !1), t.History = function() {
                    function r(t) {
                        this.delegate = t, this.onPopState = n(this.onPopState, this)
                    }
                    return r.prototype.start = function() {
                        return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), this.started = !0)
                    }, r.prototype.stop = function() {
                        return this.started ? (removeEventListener("popstate", this.onPopState, !1), this.started = !1) : void 0
                    }, r.prototype.push = function(e, n) {
                        return e = t.Location.wrap(e), this.update("push", e, n)
                    }, r.prototype.replace = function(e, n) {
                        return e = t.Location.wrap(e), this.update("replace", e, n)
                    }, r.prototype.onPopState = function(e) {
                        var n, r, i, o;
                        return this.shouldHandlePopState() && (o = null != (r = e.state) ? r.turbolinks : void 0) ? (n = t.Location.wrap(window.location), i = o.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(n, i)) : void 0
                    }, r.prototype.shouldHandlePopState = function() {
                        return e === !0
                    }, r.prototype.update = function(t, e, n) {
                        var r;
                        return r = {
                            turbolinks: {
                                restorationIdentifier: n
                            }
                        }, history[t + "State"](r, null, e)
                    }, r
                }()
            }.call(this),
            function() {
                t.Snapshot = function() {
                    function e(t) {
                        var e, n;
                        n = t.head, e = t.body, this.head = null != n ? n : document.createElement("head"), this.body = null != e ? e : document.createElement("body")
                    }
                    return e.wrap = function(t) {
                        return t instanceof this ? t : this.fromHTML(t)
                    }, e.fromHTML = function(t) {
                        var e;
                        return e = document.createElement("html"), e.innerHTML = t, this.fromElement(e)
                    }, e.fromElement = function(t) {
                        return new this({
                            head: t.querySelector("head"),
                            body: t.querySelector("body")
                        })
                    }, e.prototype.clone = function() {
                        return new e({
                            head: this.head.cloneNode(!0),
                            body: this.body.cloneNode(!0)
                        })
                    }, e.prototype.getRootLocation = function() {
                        var e, n;
                        return n = null != (e = this.getSetting("root")) ? e : "/", new t.Location(n)
                    }, e.prototype.getCacheControlValue = function() {
                        return this.getSetting("cache-control")
                    }, e.prototype.hasAnchor = function(t) {
                        try {
                            return null != this.body.querySelector("[id='" + t + "']")
                        } catch (t) {}
                    }, e.prototype.isPreviewable = function() {
                        return "no-preview" !== this.getCacheControlValue()
                    }, e.prototype.isCacheable = function() {
                        return "no-cache" !== this.getCacheControlValue()
                    }, e.prototype.getSetting = function(t) {
                        var e, n;
                        return n = this.head.querySelectorAll("meta[name='turbolinks-" + t + "']"), e = n[n.length - 1], null != e ? e.getAttribute("content") : void 0
                    }, e
                }()
            }.call(this),
            function() {
                var e = [].slice;
                t.Renderer = function() {
                    function t() {}
                    var n;
                    return t.render = function() {
                        var t, n, r, i;
                        return r = arguments[0], n = arguments[1], t = 3 <= arguments.length ? e.call(arguments, 2) : [], i = function(t, e, n) {
                            n.prototype = t.prototype;
                            var r = new n,
                                i = t.apply(r, e);
                            return Object(i) === i ? i : r
                        }(this, t, function() {}), i.delegate = r, i.render(n), i
                    }, t.prototype.renderView = function(t) {
                        return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody)
                    }, t.prototype.invalidateView = function() {
                        return this.delegate.viewInvalidated()
                    }, t.prototype.createScriptElement = function(t) {
                        var e;
                        return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, n(e, t), e)
                    }, n = function(t, e) {
                        var n, r, i, o, s, a, u;
                        for (o = e.attributes, a = [], n = 0, r = o.length; r > n; n++) s = o[n], i = s.name, u = s.value, a.push(t.setAttribute(i, u));
                        return a
                    }, t
                }()
            }.call(this),
            function() {
                t.HeadDetails = function() {
                    function t(t) {
                        var e, n, o, s, a, u, l;
                        for (this.element = t, this.elements = {}, l = this.element.childNodes, s = 0, u = l.length; u > s; s++) o = l[s], o.nodeType === Node.ELEMENT_NODE && (a = o.outerHTML, n = null != (e = this.elements)[a] ? e[a] : e[a] = {
                            type: i(o),
                            tracked: r(o),
                            elements: []
                        }, n.elements.push(o))
                    }
                    var e, n, r, i;
                    return t.prototype.hasElementWithKey = function(t) {
                        return t in this.elements
                    }, t.prototype.getTrackedElementSignature = function() {
                        var t, e;
                        return function() {
                            var n, r;
                            n = this.elements, r = [];
                            for (t in n) e = n[t].tracked, e && r.push(t);
                            return r
                        }.call(this).join("")
                    }, t.prototype.getScriptElementsNotInDetails = function(t) {
                        return this.getElementsMatchingTypeNotInDetails("script", t)
                    }, t.prototype.getStylesheetElementsNotInDetails = function(t) {
                        return this.getElementsMatchingTypeNotInDetails("stylesheet", t)
                    }, t.prototype.getElementsMatchingTypeNotInDetails = function(t, e) {
                        var n, r, i, o, s, a;
                        i = this.elements, s = [];
                        for (r in i) o = i[r], a = o.type, n = o.elements, a !== t || e.hasElementWithKey(r) || s.push(n[0]);
                        return s
                    }, t.prototype.getProvisionalElements = function() {
                        var t, e, n, r, i, o, s;
                        n = [], r = this.elements;
                        for (e in r) i = r[e], s = i.type, o = i.tracked, t = i.elements, null != s || o ? t.length > 1 && n.push.apply(n, t.slice(1)) : n.push.apply(n, t);
                        return n
                    }, i = function(t) {
                        return e(t) ? "script" : n(t) ? "stylesheet" : void 0
                    }, r = function(t) {
                        return "reload" === t.getAttribute("data-turbolinks-track")
                    }, e = function(t) {
                        var e;
                        return e = t.tagName.toLowerCase(), "script" === e
                    }, n = function(t) {
                        var e;
                        return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel")
                    }, t
                }()
            }.call(this),
            function() {
                var e = function(t, e) {
                        function r() {
                            this.constructor = t
                        }
                        for (var i in e) n.call(e, i) && (t[i] = e[i]);
                        return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
                    },
                    n = {}.hasOwnProperty;
                t.SnapshotRenderer = function(n) {
                    function r(e, n) {
                        this.currentSnapshot = e, this.newSnapshot = n, this.currentHeadDetails = new t.HeadDetails(this.currentSnapshot.head), this.newHeadDetails = new t.HeadDetails(this.newSnapshot.head), this.newBody = this.newSnapshot.body
                    }
                    return e(r, n), r.prototype.render = function(t) {
                        return this.trackedElementsAreIdentical() ? (this.mergeHead(), this.renderView(function(e) {
                            return function() {
                                return e.replaceBody(), e.focusFirstAutofocusableElement(), t()
                            }
                        }(this))) : this.invalidateView()
                    }, r.prototype.mergeHead = function() {
                        return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements()
                    }, r.prototype.replaceBody = function() {
                        return this.activateBodyScriptElements(), this.importBodyPermanentElements(), this.assignNewBody()
                    }, r.prototype.trackedElementsAreIdentical = function() {
                        return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature()
                    }, r.prototype.copyNewHeadStylesheetElements = function() {
                        var t, e, n, r, i;
                        for (r = this.getNewHeadStylesheetElements(), i = [], e = 0, n = r.length; n > e; e++) t = r[e], i.push(document.head.appendChild(t));
                        return i
                    }, r.prototype.copyNewHeadScriptElements = function() {
                        var t, e, n, r, i;
                        for (r = this.getNewHeadScriptElements(), i = [], e = 0, n = r.length; n > e; e++) t = r[e], i.push(document.head.appendChild(this.createScriptElement(t)));
                        return i
                    }, r.prototype.removeCurrentHeadProvisionalElements = function() {
                        var t, e, n, r, i;
                        for (r = this.getCurrentHeadProvisionalElements(), i = [], e = 0, n = r.length; n > e; e++) t = r[e], i.push(document.head.removeChild(t));
                        return i
                    }, r.prototype.copyNewHeadProvisionalElements = function() {
                        var t, e, n, r, i;
                        for (r = this.getNewHeadProvisionalElements(), i = [], e = 0, n = r.length; n > e; e++) t = r[e], i.push(document.head.appendChild(t));
                        return i
                    }, r.prototype.importBodyPermanentElements = function() {
                        var t, e, n, r, i, o;
                        for (r = this.getNewBodyPermanentElements(), o = [], e = 0, n = r.length; n > e; e++) i = r[e], (t = this.findCurrentBodyPermanentElement(i)) ? o.push(i.parentNode.replaceChild(t, i)) : o.push(void 0);
                        return o
                    }, r.prototype.activateBodyScriptElements = function() {
                        var t, e, n, r, i, o;
                        for (r = this.getNewBodyScriptElements(), o = [], e = 0, n = r.length; n > e; e++) i = r[e], t = this.createScriptElement(i), o.push(i.parentNode.replaceChild(t, i));
                        return o
                    }, r.prototype.assignNewBody = function() {
                        return document.body = this.newBody
                    }, r.prototype.focusFirstAutofocusableElement = function() {
                        var t;
                        return null != (t = this.findFirstAutofocusableElement()) ? t.focus() : void 0
                    }, r.prototype.getNewHeadStylesheetElements = function() {
                        return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)
                    }, r.prototype.getNewHeadScriptElements = function() {
                        return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)
                    }, r.prototype.getCurrentHeadProvisionalElements = function() {
                        return this.currentHeadDetails.getProvisionalElements()
                    }, r.prototype.getNewHeadProvisionalElements = function() {
                        return this.newHeadDetails.getProvisionalElements()
                    }, r.prototype.getNewBodyPermanentElements = function() {
                        return this.newBody.querySelectorAll("[id][data-turbolinks-permanent]")
                    }, r.prototype.findCurrentBodyPermanentElement = function(t) {
                        return document.body.querySelector("#" + t.id + "[data-turbolinks-permanent]")
                    }, r.prototype.getNewBodyScriptElements = function() {
                        return this.newBody.querySelectorAll("script")
                    }, r.prototype.findFirstAutofocusableElement = function() {
                        return document.body.querySelector("[autofocus]")
                    }, r
                }(t.Renderer)
            }.call(this),
            function() {
                var e = function(t, e) {
                        function r() {
                            this.constructor = t
                        }
                        for (var i in e) n.call(e, i) && (t[i] = e[i]);
                        return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
                    },
                    n = {}.hasOwnProperty;
                t.ErrorRenderer = function(t) {
                    function n(t) {
                        this.html = t
                    }
                    return e(n, t), n.prototype.render = function(t) {
                        return this.renderView(function(e) {
                            return function() {
                                return e.replaceDocumentHTML(), e.activateBodyScriptElements(), t()
                            }
                        }(this))
                    }, n.prototype.replaceDocumentHTML = function() {
                        return document.documentElement.innerHTML = this.html
                    }, n.prototype.activateBodyScriptElements = function() {
                        var t, e, n, r, i, o;
                        for (r = this.getScriptElements(), o = [], e = 0, n = r.length; n > e; e++) i = r[e], t = this.createScriptElement(i), o.push(i.parentNode.replaceChild(t, i));
                        return o
                    }, n.prototype.getScriptElements = function() {
                        return document.documentElement.querySelectorAll("script")
                    }, n
                }(t.Renderer)
            }.call(this),
            function() {
                t.View = function() {
                    function e(t) {
                        this.delegate = t, this.element = document.documentElement
                    }
                    return e.prototype.getRootLocation = function() {
                        return this.getSnapshot().getRootLocation()
                    }, e.prototype.getSnapshot = function() {
                        return t.Snapshot.fromElement(this.element)
                    }, e.prototype.render = function(t, e) {
                        var n, r, i;
                        return i = t.snapshot, n = t.error, r = t.isPreview, this.markAsPreview(r), null != i ? this.renderSnapshot(i, e) : this.renderError(n, e)
                    }, e.prototype.markAsPreview = function(t) {
                        return t ? this.element.setAttribute("data-turbolinks-preview", "") : this.element.removeAttribute("data-turbolinks-preview")
                    }, e.prototype.renderSnapshot = function(e, n) {
                        return t.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), t.Snapshot.wrap(e))
                    }, e.prototype.renderError = function(e, n) {
                        return t.ErrorRenderer.render(this.delegate, n, e)
                    }, e
                }()
            }.call(this),
            function() {
                var e = function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                };
                t.ScrollManager = function() {
                    function t(t) {
                        this.delegate = t, this.onScroll = e(this.onScroll, this)
                    }
                    return t.prototype.start = function() {
                        return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0)
                    }, t.prototype.stop = function() {
                        return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0
                    }, t.prototype.scrollToElement = function(t) {
                        return t.scrollIntoView()
                    }, t.prototype.scrollToPosition = function(t) {
                        var e, n;
                        return e = t.x, n = t.y, window.scrollTo(e, n)
                    }, t.prototype.onScroll = function() {
                        return this.updatePosition({
                            x: window.pageXOffset,
                            y: window.pageYOffset
                        })
                    }, t.prototype.updatePosition = function(t) {
                        var e;
                        return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0
                    }, t
                }()
            }.call(this),
            function() {
                t.SnapshotCache = function() {
                    function e(t) {
                        this.size = t, this.keys = [], this.snapshots = {}
                    }
                    var n;
                    return e.prototype.has = function(t) {
                        var e;
                        return e = n(t), e in this.snapshots
                    }, e.prototype.get = function(t) {
                        var e;
                        if (this.has(t)) return e = this.read(t), this.touch(t), e
                    }, e.prototype.put = function(t, e) {
                        return this.write(t, e), this.touch(t), e
                    }, e.prototype.read = function(t) {
                        var e;
                        return e = n(t), this.snapshots[e]
                    }, e.prototype.write = function(t, e) {
                        var r;
                        return r = n(t), this.snapshots[r] = e
                    }, e.prototype.touch = function(t) {
                        var e, r;
                        return r = n(t), e = this.keys.indexOf(r), e > -1 && this.keys.splice(e, 1), this.keys.unshift(r), this.trim()
                    }, e.prototype.trim = function() {
                        var t, e, n, r, i;
                        for (r = this.keys.splice(this.size), i = [], t = 0, n = r.length; n > t; t++) e = r[t], i.push(delete this.snapshots[e]);
                        return i
                    }, n = function(e) {
                        return t.Location.wrap(e).toCacheKey()
                    }, e
                }()
            }.call(this),
            function() {
                var e = function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                };
                t.Visit = function() {
                    function n(n, r, i) {
                        this.controller = n, this.action = i, this.performScroll = e(this.performScroll, this), this.identifier = t.uuid(), this.location = t.Location.wrap(r), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {}
                    }
                    var r;
                    return n.prototype.start = function() {
                        return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0
                    }, n.prototype.cancel = function() {
                        var t;
                        return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0
                    }, n.prototype.complete = function() {
                        var t;
                        return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof(t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0
                    }, n.prototype.fail = function() {
                        var t;
                        return "started" === this.state ? (this.state = "failed", "function" == typeof(t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0
                    }, n.prototype.changeHistory = function() {
                        var t, e;
                        return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = r(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0)
                    }, n.prototype.issueRequest = function() {
                        return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new t.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0
                    }, n.prototype.getCachedSnapshot = function() {
                        var t;
                        return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t
                    }, n.prototype.hasCachedSnapshot = function() {
                        return null != this.getCachedSnapshot()
                    }, n.prototype.loadCachedSnapshot = function() {
                        var t, e;
                        return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function() {
                            var n;
                            return this.cacheSnapshot(), this.controller.render({
                                snapshot: e,
                                isPreview: t
                            }, this.performScroll), "function" == typeof(n = this.adapter).visitRendered && n.visitRendered(this), t ? void 0 : this.complete()
                        })) : void 0
                    }, n.prototype.loadResponse = function() {
                        return null != this.response ? this.render(function() {
                            var t, e;
                            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
                                error: this.response
                            }, this.performScroll), "function" == typeof(t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
                                snapshot: this.response
                            }, this.performScroll), "function" == typeof(e = this.adapter).visitRendered && e.visitRendered(this), this.complete())
                        }) : void 0
                    }, n.prototype.followRedirect = function() {
                        return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0
                    }, n.prototype.requestStarted = function() {
                        var t;
                        return this.recordTimingMetric("requestStart"), "function" == typeof(t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
                    }, n.prototype.requestProgressed = function(t) {
                        var e;
                        return this.progress = t, "function" == typeof(e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0
                    }, n.prototype.requestCompletedWithResponse = function(e, n) {
                        return this.response = e, null != n && (this.redirectedToLocation = t.Location.wrap(n)), this.adapter.visitRequestCompleted(this)
                    }, n.prototype.requestFailedWithStatusCode = function(t, e) {
                        return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t)
                    }, n.prototype.requestFinished = function() {
                        var t;
                        return this.recordTimingMetric("requestEnd"), "function" == typeof(t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0
                    }, n.prototype.performScroll = function() {
                        return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0)
                    }, n.prototype.scrollToRestoredPosition = function() {
                        var t, e;
                        return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0
                    }, n.prototype.scrollToAnchor = function() {
                        return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0
                    }, n.prototype.scrollToTop = function() {
                        return this.controller.scrollToPosition({
                            x: 0,
                            y: 0
                        })
                    }, n.prototype.recordTimingMetric = function(t) {
                        var e;
                        return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = (new Date).getTime()
                    }, n.prototype.getTimingMetrics = function() {
                        return t.copyObject(this.timingMetrics)
                    }, r = function(t) {
                        switch (t) {
                            case "replace":
                                return "replaceHistoryWithLocationAndRestorationIdentifier";
                            case "advance":
                            case "restore":
                                return "pushHistoryWithLocationAndRestorationIdentifier"
                        }
                    }, n.prototype.shouldIssueRequest = function() {
                        return "restore" !== this.action || !this.hasCachedSnapshot()
                    }, n.prototype.cacheSnapshot = function() {
                        return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0)
                    }, n.prototype.render = function(t) {
                        return this.cancelRender(), this.frame = requestAnimationFrame(function(e) {
                            return function() {
                                return e.frame = null, t.call(e)
                            }
                        }(this))
                    }, n.prototype.cancelRender = function() {
                        return this.frame ? cancelAnimationFrame(this.frame) : void 0
                    }, n
                }()
            }.call(this),
            function() {
                var e = function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                };
                t.Controller = function() {
                    function n() {
                        this.clickBubbled = e(this.clickBubbled, this), this.clickCaptured = e(this.clickCaptured, this), this.pageLoaded = e(this.pageLoaded, this), this.history = new t.History(this), this.view = new t.View(this), this.scrollManager = new t.ScrollManager(this), this.restorationData = {}, this.clearCache()
                    }
                    return n.prototype.start = function() {
                        return t.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0
                    }, n.prototype.disable = function() {
                        return this.enabled = !1
                    }, n.prototype.stop = function() {
                        return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0
                    }, n.prototype.clearCache = function() {
                        return this.cache = new t.SnapshotCache(10)
                    }, n.prototype.visit = function(e, n) {
                        var r, i;
                        return null == n && (n = {}), e = t.Location.wrap(e), this.applicationAllowsVisitingLocation(e) ? this.locationIsVisitable(e) ? (r = null != (i = n.action) ? i : "advance", this.adapter.visitProposedToLocationWithAction(e, r)) : window.location = e : void 0
                    }, n.prototype.startVisitToLocationWithAction = function(e, n, r) {
                        var i;
                        return t.supported ? (i = this.getRestorationDataForIdentifier(r), this.startVisit(e, n, {
                            restorationData: i
                        })) : window.location = e
                    }, n.prototype.startHistory = function() {
                        return this.location = t.Location.wrap(window.location), this.restorationIdentifier = t.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier)
                    }, n.prototype.stopHistory = function() {
                        return this.history.stop()
                    }, n.prototype.pushHistoryWithLocationAndRestorationIdentifier = function(e, n) {
                        return this.restorationIdentifier = n, this.location = t.Location.wrap(e), this.history.push(this.location, this.restorationIdentifier)
                    }, n.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function(e, n) {
                        return this.restorationIdentifier = n, this.location = t.Location.wrap(e), this.history.replace(this.location, this.restorationIdentifier)
                    }, n.prototype.historyPoppedToLocationWithRestorationIdentifier = function(e, n) {
                        var r;
                        return this.restorationIdentifier = n, this.enabled ? (r = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(e, "restore", {
                            restorationIdentifier: this.restorationIdentifier,
                            restorationData: r,
                            historyChanged: !0
                        }), this.location = t.Location.wrap(e)) : this.adapter.pageInvalidated()
                    }, n.prototype.getCachedSnapshotForLocation = function(t) {
                        var e;
                        return e = this.cache.get(t), e ? e.clone() : void 0
                    }, n.prototype.shouldCacheSnapshot = function() {
                        return this.view.getSnapshot().isCacheable()
                    }, n.prototype.cacheSnapshot = function() {
                        var t;
                        return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), t = this.view.getSnapshot(), this.cache.put(this.lastRenderedLocation, t.clone())) : void 0
                    }, n.prototype.scrollToAnchor = function(t) {
                        var e;
                        return (e = document.getElementById(t)) ? this.scrollToElement(e) : this.scrollToPosition({
                            x: 0,
                            y: 0
                        })
                    }, n.prototype.scrollToElement = function(t) {
                        return this.scrollManager.scrollToElement(t)
                    }, n.prototype.scrollToPosition = function(t) {
                        return this.scrollManager.scrollToPosition(t)
                    }, n.prototype.scrollPositionChanged = function(t) {
                        var e;
                        return e = this.getCurrentRestorationData(), e.scrollPosition = t
                    }, n.prototype.render = function(t, e) {
                        return this.view.render(t, e)
                    }, n.prototype.viewInvalidated = function() {
                        return this.adapter.pageInvalidated()
                    }, n.prototype.viewWillRender = function(t) {
                        return this.notifyApplicationBeforeRender(t)
                    }, n.prototype.viewRendered = function() {
                        return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender()
                    }, n.prototype.pageLoaded = function() {
                        return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad()
                    }, n.prototype.clickCaptured = function() {
                        return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1)
                    }, n.prototype.clickBubbled = function(t) {
                        var e, n, r;
                        return this.enabled && this.clickEventIsSignificant(t) && (n = this.getVisitableLinkForNode(t.target)) && (r = this.getVisitableLocationForLink(n)) && this.applicationAllowsFollowingLinkToLocation(n, r) ? (t.preventDefault(), e = this.getActionForLink(n), this.visit(r, {
                            action: e
                        })) : void 0
                    }, n.prototype.applicationAllowsFollowingLinkToLocation = function(t, e) {
                        var n;
                        return n = this.notifyApplicationAfterClickingLinkToLocation(t, e), !n.defaultPrevented
                    }, n.prototype.applicationAllowsVisitingLocation = function(t) {
                        var e;
                        return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented
                    }, n.prototype.notifyApplicationAfterClickingLinkToLocation = function(e, n) {
                        return t.dispatch("turbolinks:click", {
                            target: e,
                            data: {
                                url: n.absoluteURL
                            },
                            cancelable: !0
                        })
                    }, n.prototype.notifyApplicationBeforeVisitingLocation = function(e) {
                        return t.dispatch("turbolinks:before-visit", {
                            data: {
                                url: e.absoluteURL
                            },
                            cancelable: !0
                        })
                    }, n.prototype.notifyApplicationAfterVisitingLocation = function(e) {
                        return t.dispatch("turbolinks:visit", {
                            data: {
                                url: e.absoluteURL
                            }
                        })
                    }, n.prototype.notifyApplicationBeforeCachingSnapshot = function() {
                        return t.dispatch("turbolinks:before-cache")
                    }, n.prototype.notifyApplicationBeforeRender = function(e) {
                        return t.dispatch("turbolinks:before-render", {
                            data: {
                                newBody: e
                            }
                        })
                    }, n.prototype.notifyApplicationAfterRender = function() {
                        return t.dispatch("turbolinks:render")
                    }, n.prototype.notifyApplicationAfterPageLoad = function(e) {
                        return null == e && (e = {}), t.dispatch("turbolinks:load", {
                            data: {
                                url: this.location.absoluteURL,
                                timing: e
                            }
                        })
                    }, n.prototype.startVisit = function(t, e, n) {
                        var r;
                        return null != (r = this.currentVisit) && r.cancel(), this.currentVisit = this.createVisit(t, e, n), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t)
                    }, n.prototype.createVisit = function(e, n, r) {
                        var i, o, s, a, u;
                        return o = null != r ? r : {}, a = o.restorationIdentifier, s = o.restorationData, i = o.historyChanged, u = new t.Visit(this, e, n), u.restorationIdentifier = null != a ? a : t.uuid(), u.restorationData = t.copyObject(s), u.historyChanged = i, u.referrer = this.location, u
                    }, n.prototype.visitCompleted = function(t) {
                        return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())
                    }, n.prototype.clickEventIsSignificant = function(t) {
                        return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey)
                    }, n.prototype.getVisitableLinkForNode = function(e) {
                        return this.nodeIsVisitable(e) ? t.closest(e, "a[href]:not([target])") : void 0
                    }, n.prototype.getVisitableLocationForLink = function(e) {
                        var n;
                        return n = new t.Location(e.getAttribute("href")), this.locationIsVisitable(n) ? n : void 0
                    }, n.prototype.getActionForLink = function(t) {
                        var e;
                        return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance"
                    }, n.prototype.nodeIsVisitable = function(e) {
                        var n;
                        return !(n = t.closest(e, "[data-turbolinks]")) || "false" !== n.getAttribute("data-turbolinks")
                    }, n.prototype.locationIsVisitable = function(t) {
                        return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML()
                    }, n.prototype.getCurrentRestorationData = function() {
                        return this.getRestorationDataForIdentifier(this.restorationIdentifier)
                    }, n.prototype.getRestorationDataForIdentifier = function(t) {
                        var e;
                        return null != (e = this.restorationData)[t] ? e[t] : e[t] = {}
                    }, n
                }()
            }.call(this),
            function() {
                var e, n, r;
                t.start = function() {
                    return n() ? (null == t.controller && (t.controller = e()), t.controller.start()) : void 0
                }, n = function() {
                    return null == window.Turbolinks && (window.Turbolinks = t), r()
                }, e = function() {
                    var e;
                    return e = new t.Controller, e.adapter = new t.BrowserAdapter(e), e
                }, r = function() {
                    return window.Turbolinks === t
                }, r() && t.start()
            }.call(this)
    }).call(this), "object" == typeof module && module.exports ? module.exports = t : "function" == typeof define && define.amd && define(t)
}.call(this),
    function() {
        var t = [].slice;
        this.ActionCable = {
            INTERNAL: {
                message_types: {
                    welcome: "welcome",
                    ping: "ping",
                    confirmation: "confirm_subscription",
                    rejection: "reject_subscription"
                },
                default_mount_path: "/cable",
                protocols: ["actioncable-v1-json", "actioncable-unsupported"]
            },
            createConsumer: function(t) {
                var e;
                return null == t && (t = null != (e = this.getConfig("url")) ? e : this.INTERNAL.default_mount_path), new ActionCable.Consumer(this.createWebSocketURL(t))
            },
            getConfig: function(t) {
                var e;
                return e = document.head.querySelector("meta[name='action-cable-" + t + "']"), null != e ? e.getAttribute("content") : void 0
            },
            createWebSocketURL: function(t) {
                var e;
                return t && !/^wss?:/i.test(t) ? (e = document.createElement("a"), e.href = t, e.href = e.href, e.protocol = e.protocol.replace("http", "ws"), e.href) : t
            },
            startDebugging: function() {
                return this.debugging = !0
            },
            stopDebugging: function() {
                return this.debugging = null
            },
            log: function() {
                var e;
                if (e = 1 <= arguments.length ? t.call(arguments, 0) : [], this.debugging) return e.push(Date.now()), console.log.apply(console, ["[ActionCable]"].concat(t.call(e)))
            }
        }, "undefined" != typeof window && null !== window && (window.ActionCable = this.ActionCable), "undefined" != typeof module && null !== module && (module.exports = this.ActionCable)
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        ActionCable.ConnectionMonitor = function() {
            function e(e) {
                this.connection = e, this.visibilityDidChange = t(this.visibilityDidChange, this), this.reconnectAttempts = 0
            }
            var n, r, i;
            return e.pollInterval = {
                min: 3,
                max: 30
            }, e.staleThreshold = 6, e.prototype.start = function() {
                if (!this.isRunning()) return this.startedAt = r(), delete this.stoppedAt, this.startPolling(), document.addEventListener("visibilitychange", this.visibilityDidChange), ActionCable.log("ConnectionMonitor started. pollInterval = " + this.getPollInterval() + " ms")
            }, e.prototype.stop = function() {
                if (this.isRunning()) return this.stoppedAt = r(), this.stopPolling(), document.removeEventListener("visibilitychange", this.visibilityDidChange), ActionCable.log("ConnectionMonitor stopped")
            }, e.prototype.isRunning = function() {
                return null != this.startedAt && null == this.stoppedAt
            }, e.prototype.recordPing = function() {
                return this.pingedAt = r()
            }, e.prototype.recordConnect = function() {
                return this.reconnectAttempts = 0, this.recordPing(), delete this.disconnectedAt, ActionCable.log("ConnectionMonitor recorded connect")
            }, e.prototype.recordDisconnect = function() {
                return this.disconnectedAt = r(), ActionCable.log("ConnectionMonitor recorded disconnect")
            }, e.prototype.startPolling = function() {
                return this.stopPolling(), this.poll()
            }, e.prototype.stopPolling = function() {
                return clearTimeout(this.pollTimeout)
            }, e.prototype.poll = function() {
                return this.pollTimeout = setTimeout(function(t) {
                    return function() {
                        return t.reconnectIfStale(), t.poll()
                    }
                }(this), this.getPollInterval())
            }, e.prototype.getPollInterval = function() {
                var t, e, r, i;
                return i = this.constructor.pollInterval, r = i.min, e = i.max, t = 5 * Math.log(this.reconnectAttempts + 1), Math.round(1e3 * n(t, r, e))
            }, e.prototype.reconnectIfStale = function() {
                if (this.connectionIsStale()) return ActionCable.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + this.getPollInterval() + " ms, time disconnected = " + i(this.disconnectedAt) + " s, stale threshold = " + this.constructor.staleThreshold + " s"), this.reconnectAttempts++, this.disconnectedRecently() ? ActionCable.log("ConnectionMonitor skipping reopening recent disconnect") : (ActionCable.log("ConnectionMonitor reopening"), this.connection.reopen())
            }, e.prototype.connectionIsStale = function() {
                var t;
                return i(null != (t = this.pingedAt) ? t : this.startedAt) > this.constructor.staleThreshold
            }, e.prototype.disconnectedRecently = function() {
                return this.disconnectedAt && i(this.disconnectedAt) < this.constructor.staleThreshold
            }, e.prototype.visibilityDidChange = function() {
                if ("visible" === document.visibilityState) return setTimeout(function(t) {
                    return function() {
                        if (t.connectionIsStale() || !t.connection.isOpen()) return ActionCable.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = " + document.visibilityState), t.connection.reopen()
                    }
                }(this), 200)
            }, r = function() {
                return (new Date).getTime()
            }, i = function(t) {
                return (r() - t) / 1e3
            }, n = function(t, e, n) {
                return Math.max(e, Math.min(n, t))
            }, e
        }()
    }.call(this),
    function() {
        var t, e, n, r, i, o, s = [].slice,
            a = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            u = [].indexOf || function(t) {
                for (var e = 0, n = this.length; e < n; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        r = ActionCable.INTERNAL, e = r.message_types, n = r.protocols, i = 2 <= n.length ? s.call(n, 0, t = n.length - 1) : (t = 0, []), o = n[t++], ActionCable.Connection = function() {
            function t(t) {
                this.consumer = t, this.open = a(this.open, this), this.subscriptions = this.consumer.subscriptions, this.monitor = new ActionCable.ConnectionMonitor(this), this.disconnected = !0
            }
            return t.reopenDelay = 500, t.prototype.send = function(t) {
                return !!this.isOpen() && (this.webSocket.send(JSON.stringify(t)), !0)
            }, t.prototype.open = function() {
                if (this.isActive()) throw ActionCable.log("Attempted to open WebSocket, but existing socket is " + this.getState()), new Error("Existing connection must be closed before opening");
                return ActionCable.log("Opening WebSocket, current state is " + this.getState() + ", subprotocols: " + n), null != this.webSocket && this.uninstallEventHandlers(), this.webSocket = new WebSocket(this.consumer.url, n), this.installEventHandlers(), this.monitor.start(), !0
            }, t.prototype.close = function(t) {
                var e, n;
                if (e = (null != t ? t : {
                        allowReconnect: !0
                    }).allowReconnect, e || this.monitor.stop(), this.isActive()) return null != (n = this.webSocket) ? n.close() : void 0
            }, t.prototype.reopen = function() {
                var t;
                if (ActionCable.log("Reopening WebSocket, current state is " + this.getState()), !this.isActive()) return this.open();
                try {
                    return this.close()
                } catch (e) {
                    return t = e, ActionCable.log("Failed to reopen WebSocket", t)
                } finally {
                    ActionCable.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms"), setTimeout(this.open, this.constructor.reopenDelay)
                }
            }, t.prototype.getProtocol = function() {
                var t;
                return null != (t = this.webSocket) ? t.protocol : void 0
            }, t.prototype.isOpen = function() {
                return this.isState("open")
            }, t.prototype.isActive = function() {
                return this.isState("open", "connecting")
            }, t.prototype.isProtocolSupported = function() {
                var t;
                return t = this.getProtocol(), u.call(i, t) >= 0
            }, t.prototype.isState = function() {
                var t, e;
                return e = 1 <= arguments.length ? s.call(arguments, 0) : [], t = this.getState(), u.call(e, t) >= 0
            }, t.prototype.getState = function() {
                var t, e, n;
                for (e in WebSocket)
                    if (n = WebSocket[e], n === (null != (t = this.webSocket) ? t.readyState : void 0)) return e.toLowerCase();
                return null
            }, t.prototype.installEventHandlers = function() {
                var t, e;
                for (t in this.events) e = this.events[t].bind(this), this.webSocket["on" + t] = e
            }, t.prototype.uninstallEventHandlers = function() {
                var t;
                for (t in this.events) this.webSocket["on" + t] = function() {}
            }, t.prototype.events = {
                message: function(t) {
                    var n, r, i, o;
                    if (this.isProtocolSupported()) switch (i = JSON.parse(t.data), n = i.identifier, r = i.message, o = i.type, o) {
                        case e.welcome:
                            return this.monitor.recordConnect(), this.subscriptions.reload();
                        case e.ping:
                            return this.monitor.recordPing();
                        case e.confirmation:
                            return this.subscriptions.notify(n, "connected");
                        case e.rejection:
                            return this.subscriptions.reject(n);
                        default:
                            return this.subscriptions.notify(n, "received", r)
                    }
                },
                open: function() {
                    if (ActionCable.log("WebSocket onopen event, using '" + this.getProtocol() + "' subprotocol"), this.disconnected = !1, !this.isProtocolSupported()) return ActionCable.log("Protocol is unsupported. Stopping monitor and disconnecting."), this.close({
                        allowReconnect: !1
                    })
                },
                close: function() {
                    if (ActionCable.log("WebSocket onclose event"), !this.disconnected) return this.disconnected = !0, this.monitor.recordDisconnect(), this.subscriptions.notifyAll("disconnected", {
                        willAttemptReconnect: this.monitor.isRunning()
                    })
                },
                error: function() {
                    return ActionCable.log("WebSocket onerror event")
                }
            }, t
        }()
    }.call(this),
    function() {
        var t = [].slice;
        ActionCable.Subscriptions = function() {
            function e(t) {
                this.consumer = t, this.subscriptions = []
            }
            return e.prototype.create = function(t, e) {
                var n, r, i;
                return n = t, r = "object" == typeof n ? n : {
                    channel: n
                }, i = new ActionCable.Subscription(this.consumer, r, e), this.add(i)
            }, e.prototype.add = function(t) {
                return this.subscriptions.push(t), this.consumer.ensureActiveConnection(), this.notify(t, "initialized"), this.sendCommand(t, "subscribe"), t
            }, e.prototype.remove = function(t) {
                return this.forget(t), this.findAll(t.identifier).length || this.sendCommand(t, "unsubscribe"), t
            }, e.prototype.reject = function(t) {
                var e, n, r, i, o;
                for (r = this.findAll(t), i = [], e = 0, n = r.length; e < n; e++) o = r[e], this.forget(o), this.notify(o, "rejected"), i.push(o);
                return i
            }, e.prototype.forget = function(t) {
                var e;
                return this.subscriptions = function() {
                    var n, r, i, o;
                    for (i = this.subscriptions, o = [], n = 0, r = i.length; n < r; n++) e = i[n], e !== t && o.push(e);
                    return o
                }.call(this), t
            }, e.prototype.findAll = function(t) {
                var e, n, r, i, o;
                for (r = this.subscriptions, i = [], e = 0, n = r.length; e < n; e++) o = r[e], o.identifier === t && i.push(o);
                return i
            }, e.prototype.reload = function() {
                var t, e, n, r, i;
                for (n = this.subscriptions, r = [], t = 0, e = n.length; t < e; t++) i = n[t], r.push(this.sendCommand(i, "subscribe"));
                return r
            }, e.prototype.notifyAll = function() {
                var e, n, r, i, o, s, a;
                for (n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], o = this.subscriptions, s = [], r = 0, i = o.length; r < i; r++) a = o[r], s.push(this.notify.apply(this, [a, n].concat(t.call(e))));
                return s
            }, e.prototype.notify = function() {
                var e, n, r, i, o, s, a;
                for (s = arguments[0], n = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], a = "string" == typeof s ? this.findAll(s) : [s], o = [], r = 0, i = a.length; r < i; r++) s = a[r], o.push("function" == typeof s[n] ? s[n].apply(s, e) : void 0);
                return o
            }, e.prototype.sendCommand = function(t, e) {
                var n;
                return n = t.identifier, this.consumer.send({
                    command: e,
                    identifier: n
                })
            }, e
        }()
    }.call(this),
    function() {
        ActionCable.Subscription = function() {
            function t(t, n, r) {
                this.consumer = t, null == n && (n = {}), this.identifier = JSON.stringify(n), e(this, r)
            }
            var e;
            return t.prototype.perform = function(t, e) {
                return null == e && (e = {}), e.action = t, this.send(e)
            }, t.prototype.send = function(t) {
                return this.consumer.send({
                    command: "message",
                    identifier: this.identifier,
                    data: JSON.stringify(t)
                })
            }, t.prototype.unsubscribe = function() {
                return this.consumer.subscriptions.remove(this)
            }, e = function(t, e) {
                var n, r;
                if (null != e)
                    for (n in e) r = e[n], t[n] = r;
                return t
            }, t
        }()
    }.call(this),
    function() {
        ActionCable.Consumer = function() {
            function t(t) {
                this.url = t, this.subscriptions = new ActionCable.Subscriptions(this), this.connection = new ActionCable.Connection(this)
            }
            return t.prototype.send = function(t) {
                return this.connection.send(t)
            }, t.prototype.connect = function() {
                return this.connection.open()
            }, t.prototype.disconnect = function() {
                return this.connection.close({
                    allowReconnect: !1
                })
            }, t.prototype.ensureActiveConnection = function() {
                if (!this.connection.isActive()) return this.connection.open()
            }, t
        }()
    }.call(this),
    function() {
        this.App || (this.App = {}), App.cable = ActionCable.createConsumer()
    }.call(this), $(document).on("turbolinks:load", function() {
        initModal = function(t) {
            that = $(t), window.listingId = that.data("id"), $("form").removeClass("busy"), $("form").find("[name='message']").val("")
        }, $("[data-do='showContactModal']").click(function(t) {
            if ("" != $(this).data("user")) return t.preventDefault(), initModal(this), $("[data-is='contactModal']").modal(), !1
        }), $("[data-is='contactForm']").submit(function() {
            return form = $(this), $.ajax({
                method: "post",
                url: form.attr("action"),
                beforeSend: function() {
                    form.addClass("busy")
                },
                data: {
                    listing_id: window.listingId,
                    message: form.find("[name='message']").val()
                }
            }).done(function() {
                $("[data-is='contactModal']").modal("hide")
            }), !1
        }), $("[data-do='setLocale']").change(function() {
            window.location.href = $(this).val()
        })
    });
