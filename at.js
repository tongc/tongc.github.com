/*!
 * at.js v0.8.0
 *
 * Copyright 1996-2016. Adobe Systems Incorporated. All rights reserved.
 * 
 */
! function(SETTINGS) {
    ! function() {
        function e(e) {
            var i;
            t[e] !== i && (SETTINGS[e] = t[e])
        }
        var t = window.targetGlobalSettings || {};
        e("clientCode"), e("serverDomain"), e("crossDomain"), e("timeout"), e("globalMboxAutoCreate"), e("visitorApiTimeout"), e("enabled"), e("defaultContentHiddenStyle"), e("defaultContentVisibleStyle"), e("bodyHidingEnabled"), e("bodyHiddenStyle"), e("imsOrgId"), e("overrideMboxEdgeServer")
    }();
    if (SETTINGS.enabled === false) return;
    ! function() {
        "use strict";

        function e(e) {
            e.fn.isHead = function() {
                return e(this).is("head")
            }, e.fn.isBody = function() {
                return e(this).is("body")
            }, e.fn.isHeadOrBody = function() {
                var t = e(this);
                return t.isHead() || t.isBody()
            }
        }

        function t(e) {
            e.fn.showElement = function() {
                var t = e(this),
                    n = e.trim(t.attr("style")),
                    r = [SETTINGS.defaultContentVisibleStyle];
                return n && (";" !== n[n.length - 1] && (n += ";"), r.unshift(e.trim(n))), t.addClass(ku), t.attr("style", r.join(" "))
            }, e.fn.exists = function() {
                return e(this).length > 0
            }, e.isElement = function(t) {
                return !!t && 1 === t.nodeType && "object" === e.type(t) && !e.isPlainObject(t)
            }, e.sequential = function(t) {
                var n = e.Deferred().resolve([]);
                return e.each(t, function(e, t) {
                    n = n.then(t)
                }), n
            }
        }

        function n(e) {
            for (var t = _r.exec(e), n = {}, r = 14; r--;) n[Mr[r]] = t[r] || "";
            return n.queryParams = {}, n.query.replace(jr, function(e, t, r) {
                var o = Kr(t),
                    i = Kr(r);
                O(o) && O(i) && (n.queryParams[o] = i)
            }), n
        }

        function r(e) {
            var t = n(e);
            return t.queryParams
        }

        function o(e, t) {
            var n = r(e);
            return w(n[t]) ? null : n[t]
        }

        function i(e) {
            var t, r, o, i, u, a = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            return _(a) ? e : (t = {}, r = [], o = n(e), i = e.split("?")[0], C(o.queryParams, function(e, n) {
                return t[n] = e
            }), v(t, a), C(t, function(e, t) {
                return r.push(zr(t) + "=" + zr(e))
            }), u = r.join("&"), O(o.anchor) && (u = u + "#" + o.anchor), i + "?" + u)
        }

        function u(e) {
            var t = {},
                r = n("?" + e);
            return C(r.queryParams, function(e, n) {
                return t[n] = e
            }), t
        }

        function a(e) {
            return e.split("=")
        }

        function s(e) {
            return !F(e) && 2 === e.length && O(e[0]) && O(e[1])
        }

        function c(e) {
            var t = {},
                n = N(e, function(e) {
                    return O(e)
                }),
                r = E(n, function(e) {
                    return [a(e)]
                }),
                o = N(r, function(e) {
                    return s(e)
                });
            return C(o, function(e) {
                return t[Kr(e[0])] = Kr(e[1])
            }), t
        }

        function l(e, t, n) {
            C(e, function(e, r) {
                j(e) ? (t.push(r), l(e, t, n), t.pop()) : F(t) ? n[r] = e : n[t.concat(r).join(".")] = e
            })
        }

        function f(e) {
            var t, n;
            if (!k(e)) return {};
            t = null, n = {};
            try {
                t = e()
            } catch (r) {}
            return L(t) ? {} : P(t) ? c(t) : O(t) ? u(t) : j(t) ? (l(t, [], n), n) : {}
        }

        function d(e) {
            return Lu(e).showElement()
        }

        function p(e) {
            return Lu(e).html()
        }

        function h(e) {
            return Lu(e).isHead()
        }

        function m(e) {
            return Lu(e).isBody()
        }

        function g(e) {
            return Lu(e).isHeadOrBody()
        }

        function v(e, t) {
            return C(t, function(t, n) {
                return e[n] = t
            }), e
        }

        function y() {
            var e, t, n = [],
                r = "0123456789abcdef";
            for (e = 0; 36 > e; e++) n[e] = r.substr(Math.floor(16 * Math.random()), 1);
            return n[14] = "4", n[19] = r.substr(3 & n[19] | 8, 1), n[8] = n[13] = n[18] = n[23] = "-", t = n.join(""), t.replace(/-/g, "")
        }

        function T() {
            return "atjs-" + y()
        }

        function b(e, t, r, o, i) {
            var u = n(e),
                a = {},
                s = [];
            return C(u.queryParams, function(e, t) {
                return s.push(zr(t) + "=" + zr(e))
            }), C(t, function(e, t) {
                return O(o[t]) ? void(a[t] = o[t]) : void(O(e) && (a[t] = e))
            }), C(r, function(e, n) {
                return O(i[n]) ? void(a[n] = i[n]) : void((I(o[n]) || w(t[n])) && O(e) && (a[n] = e))
            }), C(a, function(e, t) {
                return s.push(zr(t) + "=" + zr(e))
            }), u.path + "?" + s.join("&")
        }

        function x(e) {
            var t, n = Fr.exec(e)[1];
            return Hr.test(n) ? "" : (t = qr.exec(n), L(t) || F(t) ? "" : (n = t[0], 0 === n.indexOf(Br) ? n.substr(4) : n))
        }

        function E(e, t) {
            return Lu.map(e, t)
        }

        function C(e, t) {
            Lu.each(e, function(e, n) {
                return t(n, e)
            })
        }

        function N(e, t) {
            return Lu.grep(e, t)
        }

        function S(e, t) {
            return e.length > t
        }

        function A(e) {
            return "string" === Lu.type(e)
        }

        function O(e) {
            return A(e) && Lu.trim(e).length > 0
        }

        function I(e) {
            return !A(e) || 0 === e.length
        }

        function R(e) {
            return "boolean" === Lu.type(e)
        }

        function D(e) {
            return "number" === Lu.type(e)
        }

        function w(e) {
            return "undefined" === Lu.type(e)
        }

        function P(e) {
            return Lu.isArray(e)
        }

        function k(e) {
            return Lu.isFunction(e)
        }

        function L(e) {
            return "null" === Lu.type(e)
        }

        function _(e) {
            return Lu.isEmptyObject(e)
        }

        function j(e) {
            return "object" === Lu.type(e)
        }

        function M(e) {
            return Lu.isElement(e)
        }

        function H(e) {
            return !M(e)
        }

        function F(e) {
            return !(P(e) && e.length > 0)
        }

        function q(e, t) {
            var n = e.is("div." + Ar);
            return w(t) ? n : n && e.hasClass(Sr + t)
        }

        function B(e, t) {
            se(e).append(t)
        }

        function U(e, t) {
            se(e).prepend(t)
        }

        function G(e, t) {
            se(e).after(t)
        }

        function W(e, t) {
            se(e).before(t)
        }

        function V(e) {
            se(e).remove()
        }

        function $(e, t) {
            Lu(e).before(t)
        }

        function X(e) {
            var t, r = ["protocol", "host"];
            return O(e) && (t = function() {
                var t = n(e),
                    o = N(r, function(e) {
                        return I(t[e])
                    });
                return {
                    v: F(o)
                }
            }(), "object" == typeof t) ? t.v : !1
        }

        function Y(e) {
            var t = Lu("." + e);
            return t.last()
        }

        function z(e) {
            var t = Y(Sr + e);
            return t.exists() ? t : Y(Ar)
        }

        function K(e, t) {
            return Lu(e).text(t)
        }

        function J(e, t) {
            return Lu(e).html(t)
        }

        function Q(e) {
            return Lu("<div></div>").append(e)
        }

        function Z(e) {
            return O(fe(e, "src"))
        }

        function ee(e) {
            return '<script type="text/atjs-marker-script" class="' + Wr + "-" + e + '"></script>'
        }

        function te(e) {
            var t = Q(e),
                n = -1;
            return C(t.find("script"), function(e) {
                var t = Z(e);
                t || (n += 1, $(e, ee(n))), se(e).remove()
            }), t.html()
        }

        function ne(e) {
            var t = Q(e),
                n = t.find("img");
            return C(n, function(e) {
                return re(e, "src", Gr)
            }), t.html()
        }

        function re(e, t, n) {
            var r = fe(e, t);
            pe(e, n, r), de(e, t)
        }

        function oe(e) {
            var t = se(e),
                n = t.find("img");
            C(n, function(e) {
                var t = fe(e, Gr);
                pe(e, "src", t), de(e, Gr)
            })
        }

        function ie(e) {
            var t = te(e);
            return ne(t)
        }

        function ue() {
            SETTINGS.bodyHidingEnabled === !0 && Lu("#" + Vr).remove()
        }

        function ae(e) {
            return Lu(e).exists()
        }

        function se(e) {
            return Lu(e)
        }

        function ce(e) {
            return se(e).parent()
        }

        function le() {
            return Lu.Deferred()
        }

        function fe(e, t) {
            return Lu(e).attr(t)
        }

        function de(e, t) {
            Lu(e).removeAttr(t)
        }

        function pe(e, t, n) {
            Lu(e).attr(t, n)
        }

        function he() {
            return Lu.isReady
        }

        function me(e) {
            var t = {};
            return N(e, function(e) {
                return w(t[e]) ? (t[e] = !0, !0) : !1
            })
        }

        function ge(e) {
            return Lu.sequential(e)
        }

        function ve(e) {
            return Lu.when.apply(null, e)
        }

        function ye(e) {
            return Lu.when(e)
        }

        function Te(e, t) {
            function i(e) {
                Lu(T).trigger(e)
            }

            function u() {
                i(Yr)
            }

            function a() {
                i(Xr)
            }

            function s() {
                i($r)
            }

            function l(e, t) {
                var n, r, o, i;
                return F(t) ? void a() : (n = t.join(","), r = n + " {" + SETTINGS.defaultContentHiddenStyle + "}", Lu.isReady ? (o = T.getElementsByTagName("script")[0], i = T.createElement("style"), i.id = e, i.appendChild(T.createTextNode(r)), o.parentNode.insertBefore(i, o), void a()) : (T[Ur]('<style id="' + e + '">' + r + "</style>"), void a()))
            }

            function d() {
                SETTINGS.bodyHidingEnabled !== !0 || Lu.isReady || (T[Ur]('<style id="' + Vr + '">' + SETTINGS.bodyHiddenStyle + "</style>"), Lu(T).one(Xr, ue))
            }

            function p(e) {
                he() ? e() : h(Yr, e)
            }

            function h(e, t) {
                Lu(T).one(e, t)
            }

            function m(e, t) {
                Lu(T).off(e, t)
            }

            function g(e) {
                var t = Lu.ajax(e);
                return h($r, function() {
                    return t.abort()
                }), t
            }
            var T = e.document;
            return {
                hideBody: d,
                hideElements: l,
                triggerRedirectEvent: s,
                triggerShowBody: a,
                parseUri: n,
                getAjax: g,
                getPageParameters: r,
                getPageParameter: o,
                generateId: y,
                buildDynamicContentUrl: b,
                getParametersFromArray: c,
                mergeParameters: v,
                encode: zr,
                decode: Kr,
                getTargetPageParameters: function(n) {
                    var r = t.globalMboxName;
                    return r !== n ? {} : f(e.targetPageParams)
                },
                getTargetPageParametersAll: function() {
                    return f(e.targetPageParamsAll)
                },
                getCookieDomain: function() {
                    return x(e.location.hostname)
                },
                delayCallback: function(t) {
                    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; n > o; o++) r[o - 1] = arguments[o];
                    e.setTimeout(function() {
                        return t.apply(t, r)
                    }, 0)
                },
                findLastMboxNode: z,
                isNull: L,
                isMboxDiv: q,
                onDomReady: p,
                redirect: function(t) {
                    e.location.replace(t)
                },
                subscribeOnce: h,
                trigger: i,
                triggerDomReady: u,
                unsubscribe: m
            }
        }

        function be(e, t) {
            return w(e.documentElement) ? e.body[t] : e.documentElement[t]
        }

        function xe(e, t, n, r) {
            return w(e[n]) ? be(t, r) : e[n]
        }

        function Ee(e, t) {
            return function() {
                var n = {};
                return n.width = xe(e, t, "innerWidth", "clientWidth"), n.height = xe(e, t, "innerHeight", "clientHeight"), n.screenWidth = e.screen.width, n.screenHeight = e.screen.height, n.colorDepth = e.screen.colorDepth, n.timeOffset = -(new Date).getTimezoneOffset(), n
            }
        }

        function Ce(e, t, n, r) {
            return function() {
                var o = r.crossDomain !== kr,
                    i = e(),
                    u = {};
                return u[ro] = i.screenHeight, u[oo] = i.screenWidth, u[no] = i.colorDepth, u[ao] = i.width, u[io] = i.height, u[uo] = i.timeOffset, u[go] = n, u[Eo] = r.version, u[ho] = t.location.hostname, u[xo] = t.location.href, u[yo] = t.referrer, o && (u[fo] = r.crossDomain), u
            }
        }

        function Ne(e, t) {
            return D(e) ? e : t
        }

        function Se(e, t) {
            var n = {
                status: e
            };
            return O(t) && (n.message = t), n
        }

        function Ae(e) {
            return Se(Ao, e)
        }

        function Oe(e) {
            return Se(No, e)
        }

        function Ie(e) {
            return k(e) ? e : Co
        }

        function Re(e) {
            return j(e.console) && k(e.console.log) && k(e.console.error)
        }

        function De(e, t) {
            var n = e.location.search;
            return O(t.getPageParameter(n, Oo))
        }

        function we(e, t, n) {
            var r = {
                log: Co,
                error: Co
            };
            return Re(e) && (r.error = function() {
                e.console.error.apply(e.console, [].concat.apply([Do], arguments))
            }, De(t, n) && (r.log = function() {
                e.console.log.apply(e.console, [].concat.apply([Do], arguments))
            })), r
        }

        function Pe(e, t, n, r) {
            if (r.path = r.path || "/", D(r.expires)) {
                var o = new Date;
                o = new Date(o.getTime() + r.expires), r.expires = o
            }
            t = zr(t + ""), n = zr(n + ""), e.cookie = t + "=" + n + (r.expires ? "; expires=" + r.expires.toUTCString() : "") + (r.path ? "; path=" + r.path : "") + (r.domain ? "; domain=" + r.domain : "")
        }

        function ke(e, t) {
            var n = RegExp("(^|; )" + t + "=([^;]*)").exec(e.cookie);
            return L(n) || 3 !== n.length ? null : Kr(n[2])
        }

        function Le(e, t, n) {
            return {
                name: e,
                value: t,
                expires: n
            }
        }

        function _e(e) {
            return zr(e.name) + "#" + zr(e.value) + "#" + e.expires
        }

        function je(e) {
            var t = e.split("#");
            return F(t) || t.length < 3 ? null : isNaN(parseInt(t[2], 10)) ? null : Le(Kr(t[0]), Kr(t[1]), +t[2])
        }

        function Me(e) {
            return I(e) ? [] : e.split("|")
        }

        function He(e) {
            return e.expires
        }

        function Fe(e) {
            return Math.max.apply(null, E(e, He))
        }

        function qe(e, t, n) {
            function r(t) {
                var n = ke(e, zr(t)),
                    r = E(Me(n), function(e) {
                        return je(e)
                    }),
                    o = new Date,
                    i = Math.ceil(o.getTime() / 1e3),
                    u = {},
                    a = N(r, function(e) {
                        return j(e) && i <= e.expires
                    });
                return C(a, function(e) {
                    return u[e.name] = e
                }), u
            }

            function o(t, n) {
                var r = new Date,
                    o = E(n, function(e) {
                        return e
                    }),
                    i = Math.abs(1e3 * Fe(o) - r.getTime()),
                    u = E(o, function(e) {
                        return _e(e)
                    });
                Pe(e, Po, u.join("|"), {
                    domain: t,
                    expires: i
                })
            }
            var i = t.getCookieDomain(),
                u = n.crossDomain === Pr,
                a = {
                    isEnabled: function() {
                        Pe(e, wo, "true", {
                            domain: i
                        });
                        var t = !L(ke(e, wo));
                        return Pe(e, wo, "", {
                            domain: i,
                            expires: -36e5
                        }), t
                    },
                    setCookie: function(e, t, n) {
                        var a, s, c;
                        u || I(e) || I(t) || !D(n) || (a = r(Po), s = new Date, c = Math.ceil(n + s.getTime() / 1e3), a[e] = Le(e, t, c), o(i, a))
                    },
                    getCookie: function(e) {
                        var t, n;
                        return u ? null : (t = r(Po), n = t[e], j(n) ? n : null)
                    }
                };
            return a
        }

        function Be(e) {
            var t = e.getCookie(ko);
            return j(t) && O(t.value) ? t.value : ""
        }

        function Ue(e, t, n) {
            e.setCookie(ko, t, n)
        }

        function Ge(e, t) {
            var n = t.deviceIdLifetime / 1e3,
                r = Be(e);
            return O(r) && Ue(e, r, n), {
                getId: function() {
                    return r
                },
                setId: function(t) {
                    r = t, Ue(e, t, n)
                }
            }
        }

        function We(e) {
            var t = e.getCookie(Lo);
            return j(t) && O(t.value) ? t.value : ""
        }

        function Ve(e, t) {
            return t.getPageParameter(e.location.search, vo)
        }

        function $e(e, t, n) {
            e.setCookie(Lo, t, n)
        }

        function Xe(e, t, n, r) {
            var o = r.sessionIdLifetime / 1e3,
                i = Ve(e, n);
            return i = i || We(t) || n.generateId(), $e(t, i, o), {
                getId: function() {
                    return i
                },
                setId: function(e) {
                    return i = e, $e(t, i, o)
                }
            }
        }

        function Ye(e) {
            return e.replace(/"/g, "&quot;").replace(/>/g, "&gt;")
        }

        function ze(e) {
            return Or.replace("{clientCode}", e)
        }

        function Ke(e, t) {
            return Mo + e + ze(t) + "?"
        }

        function Je(e) {
            if (jo.exec(e)) throw Error('Parameter "' + e + '" contains invalid characters.')
        }

        function Qe() {
            var e = new Date;
            return e.getTime() - e.getTimezoneOffset() * Nr
        }

        function Ze(e, t, n) {
            var r = O(e) && (R(t) || D(t) || O(t));
            r && (e += "", t += "", Je(e), n[e] = t)
        }

        function et(e, t) {
            var n, r = t.serverDomain;
            return t.overrideMboxEdgeServer ? (n = ke(e, _o), I(n) ? r : n) : r
        }

        function tt(e, t, n, r, o, i) {
            function u(e, t) {
                C(e, function(e, n) {
                    return Ze(n, e, t)
                })
            }

            function a(a) {
                var c, l = et(e, i),
                    f = Ke(l, i.clientCode),
                    d = {},
                    p = t();
                return u(p, s), u(o.getTargetPageParametersAll(), s), Ze(vo, n.getId(), s), Ze(bo, r.getId(), s), Ze(To, Qe(), s), C(s, function(e, t) {
                    return d[t] = e
                }), j(a) && C(a, function(e, t) {
                    return Ze(t, e, d)
                }), c = E(d, function(e, t) {
                    return o.encode(t) + "=" + o.encode(e)
                }), Ye(f + c.join("&"))
            }
            var s = {},
                c = {
                    buildUrl: a
                };
            return c
        }

        function nt(e) {
            var t = {};
            return C(e.params, function(e) {
                w(t[e.type]) && (t[e.type] = {}), t[e.type][e.name] = e.defaultValue
            }), t
        }

        function rt(e) {
            var t = [];
            return w(e.request) || (t = e.request), t
        }

        function ot(e) {
            return -1 !== e.indexOf("mbox")
        }

        function it(e) {
            var t = {};
            return w(e.mbox) || C(e.mbox, function(e, n) {
                ot(n) || (t[n] = e)
            }), t
        }

        function ut(e, t, n) {
            return {
                extract: function(r, o) {
                    var i = r.offer.content.url,
                        u = nt(r.offer.content),
                        a = rt(u),
                        s = it(u),
                        c = e.location.search,
                        l = t.getPageParameters(c),
                        f = r.params,
                        d = t.buildDynamicContentUrl(i, a, s, l, f),
                        p = function() {
                            o(Ho)
                        };
                    t.getAjax({
                        url: d,
                        timeout: n.timeout,
                        success: o,
                        error: p
                    })
                }
            }
        }

        function at(e, t, n, r, o) {
            function i() {
                var e = L(r.getPageParameter(t.location.search, Io));
                return c || (e = e && n.isEnabled()), e
            }

            function u(e) {
                return !L(r.getPageParameter(e, Ro))
            }

            function a() {
                return u(t.location.search) || u(t.referrer)
            }

            function s(e) {
                return "XMLHttpRequest" in e && "withCredentials" in new e.XMLHttpRequest
            }
            var c = o.crossDomain === Pr,
                l = 0;
            return {
                isEnabled: function() {
                    return i()
                },
                isMboxEdit: function() {
                    return a()
                },
                isCorsSupported: function() {
                    return s(e)
                },
                requests: {
                    incrementAndGet: function() {
                        return ++l
                    }
                }
            }
        }

        function st() {
            function e(e) {
                return n[e]
            }

            function t(e) {
                return P(n[e])
            }
            var n = {};
            return {
                add: function(e, r) {
                    return t(e) ? void n[e].push(r) : void(n[e] = [r])
                },
                getKeys: function() {
                    return E(n, function(e, t) {
                        return t
                    })
                },
                findAll: function() {
                    var e = {};
                    return C(n, function(t, n) {
                        return e[n] = t
                    }), e
                },
                remove: function(e, t) {
                    if (k(t)) {
                        var r = N(this.findByKey(e), function(e) {
                            return !t(e)
                        });
                        n[e] = r
                    } else delete n[e]
                },
                clear: function() {
                    n = {}
                },
                findByKey: function(t) {
                    var n = e(t);
                    return P(n) ? n : []
                }
            }
        }

        function ct(e, t, n) {
            function r() {
                var t = void 0,
                    n = le();
                return w(e.Visitor) || L(e.Visitor) || !k(e.Visitor.getInstance) ? (n.reject(), n.promise()) : (t = e.Visitor.getInstance(p), j(t) && k(t.isAllowed) && t.isAllowed() ? n.resolve(t) : n.reject(), n.promise())
            }

            function o(e, t, n) {
                var r = le();
                return k(e[t]) ? (e[t](function(e) {
                    r.resolve({
                        key: n,
                        value: e
                    })
                }, !0), r.promise()) : (r.resolve(void 0), r.promise())
            }

            function i(e) {
                var t = [o(e, "getMarketingCloudVisitorID", eo), o(e, "getAudienceManagerBlob", Qr), o(e, "getAnalyticsVisitorID", Jr), o(e, "getAudienceManagerLocationHint", Zr)];
                return ve(t)
            }

            function u(e) {
                var t = {},
                    n = N(e, function(e) {
                        return !w(e)
                    });
                return C(n, function(e) {
                    return t[e.key] = e.value
                }), t
            }

            function a(e) {
                return "vst." + e
            }

            function s(e, t, n) {
                C(e, function(e, r) {
                    j(e) ? (t.push(r), s(e, t, n), t.pop()) : F(t) ? n[a(r)] = e : n[a(t.concat(r).join("."))] = e
                })
            }

            function c(e) {
                var t, n;
                return k(e.getCustomerIDs) ? (t = e.getCustomerIDs(), j(t) ? (n = {}, s(t, [], n), n) : {}) : {}
            }

            function l(e, n) {
                var r = le();
                return w(e.loadTimeout) || (e.loadTimeout = m), t.log(Fo, "requests sent"), i(e).done(function() {
                    var o, i, a, s;
                    for (o = arguments.length, i = Array(o), a = 0; o > a; a++) i[a] = arguments[a];
                    s = u(i), v(s, c(e)), d(s, e, n), t.log(Fo, "success", s), r.resolve(s)
                }).fail(function() {
                    return r.reject()
                }), r.promise()
            }

            function f(e) {
                return r().then(function(t) {
                    return l(t, e)
                }, function() {
                    return null
                })
            }

            function d(e, t, n) {
                k(t.getSupplementalDataID) && (e[to] = t.getSupplementalDataID("mbox:" + h + ":" + n))
            }
            var p = n.imsOrgId,
                h = n.clientCode,
                m = n.visitorApiTimeout,
                g = {
                    getParameters: f
                };
            return g
        }

        function lt(e, t, n) {
            var r = {
                name: e,
                valid: function(n) {
                    return t(n[e])
                }
            };
            return O(n) && (r.message = n), r
        }

        function ft(e, t) {
            return {
                message: t,
                valid: function(t) {
                    return e(t)
                }
            }
        }

        function dt(e) {
            return 'missing mandatory parameter: "' + e + '"'
        }

        function pt(e, t) {
            var n, r, o = "";
            for (n = 0; n < t.length; n += 1)
                if (r = t[n], !r.valid(e)) {
                    o = r.message;
                    break
                }
            return I(o) ? Oe() : Ae(o)
        }

        function ht(e) {
            return O(e) && !S(e, Ir)
        }

        function mt(e, t, n) {
            function r(e) {
                var t = Oe();
                return C(si, function(n) {
                    var r = n.valid(e);
                    r.status === Ao && t.status === No && (t = r)
                }), t
            }
            return function(o) {
                var i, u, a = {},
                    s = le(),
                    c = pt(o, ei);
                return c.status === Ao ? (t.error(Uo, c.message), s.reject(), s.promise()) : (o.type = o.type || ti.JSON, c = r(o), c.status === Ao ? (t.error(c.message), s.reject(), s.promise()) : (i = o.type.toLowerCase(), u = Ne(o.timeout, n.timeout), i === ti.JSON && (a.xhrFields = {
                    withCredentials: !0
                }), i === ti.JSONP && O(o.jsonp) && (a.jsonp = o.jsonp), O(o.method) && (a.method = o.method), j(o.params) && (a.data = o.params), a.timeout = u, a.dataType = i, a.url = o.url, a.success = function(e, n) {
                    t.log(Uo, n), o.success(e)
                }, a.error = function(e, n, r) {
                    O(r) ? (t.error(Uo, n + ":", r), o.error(n, r)) : 0 === e.status && t.log(Uo, So + ":", "cancelled")
                }, t.log(Uo, "params:", o), e.getAjax(a)))
            }
        }

        function gt(e, t, n) {
            function r(r) {
                var o = {
                    url: t.buildUrl(r.params),
                    timeout: r.timeout,
                    error: r.error,
                    success: r.success
                };
                return e.isCorsSupported() || (o.type = ti.JSONP, o.jsonp = so), n(o)
            }
            return {
                fetch: r
            }
        }

        function vt(e, t) {
            return {
                fetch: function(n) {
                    return t.getParameters(n.params[mo]).then(function(t) {
                        return C(t, function(e, t) {
                            return n.params[t] = e
                        }), e.fetch(n)
                    }, function() {
                        return e.fetch(n)
                    })
                }
            }
        }

        function yt(e, t, n, r) {
            return {
                fetch: function(o) {
                    var i = Ne(o.timeout, r.timeout),
                        u = Ie(o.error),
                        a = Ie(o.success),
                        s = j(o.params) ? o.params : {};
                    s[go] = t.generateId(), n.log(ci, "request params:", s), e.fetch({
                        params: s,
                        timeout: i,
                        success: function(e) {
                            try {
                                n.log(ci, "success:", e), a()
                            } catch (t) {
                                var r = t.message || t;
                                n.error(ci, "error:", r), u(Ao, r)
                            }
                        },
                        error: u
                    })
                }
            }
        }

        function Tt(e) {
            return {
                eventType: "click",
                tagName: "a",
                valid: function(t) {
                    return !M(t) || I(t.href) ? Ae(li) : j(e) && j(e.location) ? Oe() : Ae(fi)
                },
                getAction: function(t) {
                    return function() {
                        e.location.href = t.href
                    }
                }
            }
        }

        function bt() {
            return {
                eventType: "submit",
                tagName: "form",
                valid: function() {
                    return Oe()
                },
                getAction: function(e) {
                    return function(t) {
                        e.submit()
                    }
                }
            }
        }

        function xt(e, t) {
            var n, r, o = O(e) && O(t);
            return o ? (n = vi[e], w(n) ? Ae(mi.replace("{0}", e)) : (r = N(n, function(e) {
                return e === t
            }), F(r) ? Ae(pi.replace("{0}", t).replace("{1}", e)) : Oe())) : Ae(hi)
        }

        function Et(e) {
            vi[e.tagName] = [e.eventType], gi[e.tagName] = e
        }

        function Ct(e) {
            return gi[e]
        }

        function Nt(e, t) {
            return Et(bt()), Et(Tt(e)), {
                build: function(e, n) {
                    var r, o, i, u;
                    return H(e) ? (t.log(di, So + ": no element."), Co) : (r = e.tagName.toLowerCase(), o = xt(r, n), o.status === Ao ? (t.log(di, So + ": " + o.message), Co) : (i = Ct(r), u = i.valid(e), u.status === Ao ? (t.log(di, So + ": " + u.message), Co) : i.getAction(e)))
                }
            }
        }

        function St(e, t) {
            function n(e, n) {
                t.error(yi, e + ":", n)
            }

            function r(e) {
                var t = Q(e),
                    n = E(t.find(bi), function(e) {
                        return e
                    });
                return N(n, function(e) {
                    return O(fe(e, "src"))
                })
            }

            function o(e) {
                var t = Q(e);
                return E(t.find(Ti), function(e) {
                    return e
                })
            }

            function i(e, t, n) {
                return function() {
                    var r = le(),
                        o = se(t).find(n);
                    return $(o, e), V(o), r.resolve(), r.promise()
                }
            }

            function u(r) {
                return function() {
                    var o = le(),
                        i = {
                            dataType: "script",
                            timeout: SETTINGS.timeout,
                            url: r
                        };
                    return t.log(yi, "start:", r), e.getAjax(i).done(function() {
                        t.log(yi, "end:", r), o.resolve()
                    }).fail(function(e, t, r) {
                        n(t, r), o.reject()
                    }), o.promise()
                }
            }

            function a(e, t, n) {
                var r = fe(e, "src");
                return O(r) ? u(r) : i(e, t, n)
            }

            function s(e) {
                var t = fe(e, "src"),
                    n = le(),
                    r = new Image;
                return r.onload = n.resolve, r.onerror = n.reject, r.src = t, n.promise()
            }

            function c(e, n) {
                var i, u = o(e),
                    c = r(e),
                    l = E(c, function(e) {
                        return s(e)
                    }),
                    f = -1,
                    d = E(u, function(e) {
                        return Z(e) || (f += 1), a(e, n, "." + Wr + "-" + f)
                    });
                return F(l) ? ge(d) : (t.log(yi, "images: start"), i = ve(l), i.done(function() {
                    oe(n), t.log(yi, "images: end")
                }), i.then(function() {
                    return ge(d)
                }))
            }
            var l = {
                fetch: c
            };
            return l
        }

        function At(e, t) {
            var n = Lu(t),
                r = function(t, n) {
                    return e.after(n)
                };
            n.filter("script").each(r), n.find("script").each(r), Ot(e, n.not("script"))
        }

        function Ot(e, t) {
            e.append(t)
        }

        function It(e, t) {
            var n = Q(t),
                r = n.find(Si);
            n.remove(), Lu(e).append(r)
        }

        function Rt(e) {
            return g(e) ? h(e) ? It : m(e) ? Ot : void 0 : At
        }

        function Dt(e) {
            return function(t) {
                var n = le();
                return e(se(t[Ei.SELECTOR]), t), n.resolve(t), n.promise()
            }
        }

        function wt(e, t, n, r) {
            function o(t) {
                return function(n) {
                    var r = le(),
                        o = t(n),
                        i = o.context,
                        u = o.content,
                        a = o.revert;
                    return e.fetch(u, i).fail(a).always(function() {
                        return r.resolve(n)
                    }), r.promise()
                }
            }

            function i(e, t) {
                B(e, t[Ei.CONTENT])
            }

            function u(e, t) {
                U(e, t[Ei.CONTENT])
            }

            function a(e, t) {
                return h(e) ? void B(e, t[Ei.CONTENT]) : void s(e, t)
            }

            function s(e, t) {
                W(e, t[Ei.CONTENT])
            }

            function c(e, t) {
                G(e, t[Ei.CONTENT])
            }

            function l(e, t) {
                s(e, t), e.remove()
            }

            function f(e) {
                var t = e[Ei.SELECTOR],
                    n = e[Ei.CONTENT],
                    r = ie(n);
                return a(t, {
                    content: r
                }), {
                    context: "head" === t ? t : ce(t),
                    content: n
                }
            }

            function d(e, t) {
                var n = e[Ei.SELECTOR],
                    r = e[Ei.CONTENT],
                    o = ie(r);
                return t(n, {
                    content: o
                }), {
                    context: n,
                    content: r
                }
            }

            function p(e) {
                return d(e, u)
            }

            function m(e) {
                return d(e, i)
            }

            function g(e) {
                var t = e[Ei.SELECTOR],
                    n = e[Ei.CONTENT],
                    r = e[Ei.CONTENT_TYPE],
                    o = r === Ni.TEXT ? K : J,
                    i = ie(n);
                return o(t, i), {
                    context: t,
                    content: n
                }
            }

            function v(e, t) {
                e.css(t[Ei.CONTENT])
            }

            function y(e, t) {
                C(t.content, function(t, n) {
                    "src" === n && de(e, "src"), e.attr(n, t)
                })
            }

            function T(e, t) {
                t[Ei.PRIORITY] && Lu.isFunction(e[0].style.setProperty) ? e.each(function(e, n) {
                    n.style.setProperty(t[Ei.PROPERTY], t[Ei.VALUE], t[Ei.PRIORITY])
                }) : e.css(t[Ei.PROPERTY], t[Ei.VALUE])
            }

            function b(e) {
                e.remove()
            }

            function x(e, t) {
                n({
                    element: e,
                    clickToken: t[Ei.CLICK_TRACK_ID]
                })
            }

            function E(e, t) {
                var n = t[Ei.FROM],
                    r = t[Ei.TO],
                    o = e.children(),
                    i = o.eq(n),
                    u = o.eq(r);
                return i.exists() && u.exists() ? void(r > n ? u.after(i) : u.before(i)) : !1
            }

            function N(e, n) {
                t.redirect(n[Ei.URL])
            }
            return {
                getStrategyByAction: function(e) {
                    switch (e) {
                        case xi.APPEND_CONTENT:
                            return o(m);
                        case xi.CUSTOM_CODE:
                            return o(f);
                        case xi.INSERT_AFTER:
                            return Dt(c);
                        case xi.INSERT_BEFORE:
                            return Dt(s);
                        case xi.MOVE:
                            return Dt(v);
                        case xi.SET_CONTENT:
                            return o(g);
                        case xi.SET_ATTRIBUTE:
                            return Dt(y);
                        case xi.SET_STYLE:
                            return Dt(T);
                        case xi.PREPEND_CONTENT:
                            return o(p);
                        case xi.RESIZE:
                            return Dt(v);
                        case xi.REMOVE:
                            return Dt(b);
                        case xi.REARRANGE:
                            return Dt(E);
                        case xi.REDIRECT:
                            return Dt(N);
                        case xi.REPLACE_CONTENT:
                            return Dt(l);
                        case xi.TRACK_CLICK:
                            return Dt(x);
                        default:
                            return r.error("Unknown action:", e),
                                function() {}
                    }
                }
            }
        }

        function Pt(e, t) {
            return {
                success: function() {
                    return It(e, t)
                },
                error: Co
            }
        }

        function kt(e, t) {
            var n = te(p(e)),
                r = ie(t);
            return J(e, r), {
                success: Co,
                error: function() {
                    return J(e, n)
                }
            }
        }

        function Lt(e, t) {
            return h(e) ? Pt(e, t) : kt(e, t)
        }

        function _t(e) {
            return function(t, n) {
                var r = Lt(t, n);
                return e.fetch(n, t).done(r.success).fail(r.error)
            }
        }

        function jt() {
            return function(e, t) {
                if (P(t)) {
                    var n = Rt(e);
                    C(t, function(t) {
                        return n(se(e), t)
                    })
                }
            }
        }

        function Mt(e) {
            return {
                build: function(t) {
                    var n = {};
                    return O(t.name) ? (n[mo] = t.name + wr, n[co] = t.clickToken) : e.error(Rr), n
                }
            }
        }

        function Ht(e, t, n, r) {
            var o = n.currentTarget,
                i = o && o.tagName && o.tagName.toLowerCase() === Oi,
                u = r.build(o, Ai);
            i && n.preventDefault(), e.fetch({
                params: t,
                success: function() {
                    return u()
                },
                error: function() {
                    return u()
                }
            })
        }

        function Ft(e, t, n) {
            return function(r) {
                var o, i = t.build(r);
                _(i) || (o = r.element, se(o).on(Ai, function(t) {
                    return Ht(e, i, t, n)
                }))
            }
        }

        function qt(e, t, n) {
            function r(e) {
                var t = e.element,
                    r = e.name,
                    o = e.clickToken;
                g(t) || O(o) && n({
                    name: r,
                    element: t,
                    clickToken: o
                })
            }

            function o(n) {
                var o = n.element,
                    i = n.content,
                    u = n.plugins;
                e(o, i).then(function() {
                    return t(o, u)
                }).done(function() {
                    return r(n)
                }).always(function() {
                    return d(o)
                })
            }
            var i = {
                handle: o
            };
            return i
        }

        function Bt(e) {
            return O(e.clickToken)
        }

        function Ut(e, t) {
            function n(e) {
                var t = void 0;
                return P(e) && (t = N(e, function(e) {
                    return j(e) && "default" === e.type
                })[0]), t
            }

            function r(r) {
                var o, i, u, a = r.element;
                return H(a) ? !1 : (o = n(r.offers), j(o) ? (e(a, o.plugins), Bt(o) && (i = r.name, u = o.clickToken, t({
                    name: i,
                    element: a,
                    clickToken: u
                })), d(a), !1) : (d(a), !1))
            }
            return {
                handle: r
            }
        }

        function Gt(e) {
            return N(e, function(e) {
                return "html" === e.type
            })[0]
        }

        function Wt(e) {
            return {
                handle: function(t) {
                    var n, r, o, i, u, a = t.element;
                    return H(a) || !P(t.offers) ? !0 : (n = Gt(t.offers), j(n) ? (r = t.name, o = n.plugins, i = n.content, u = n.clickToken, e.handle({
                        name: r,
                        element: a,
                        content: i,
                        plugins: o,
                        clickToken: u
                    }), !1) : !0)
                }
            }
        }

        function Vt(e) {
            return N(e, function(e) {
                return "redirect" === e.type
            })[0]
        }

        function $t(e) {
            return {
                handle: function(t) {
                    if (L(t.element) || !P(t.offers)) return !0;
                    var n = Vt(t.offers);
                    return j(n) ? (e.trigger($r), e.redirect(n.content), !1) : !0
                }
            }
        }

        function Xt(e) {
            return {
                build: function(t) {
                    if (!Bt(t)) return {};
                    var n = {};
                    return n[mo] = e.globalMboxName + wr, n[lo] = t.clickToken, n
                }
            }
        }

        function Yt(e, t, n) {
            if (!j(e) || F(t)) return !1;
            var r = N(t, function(t) {
                return n(e[t])
            });
            return F(r)
        }

        function zt(e, t) {
            return Yt(e, t, function(e) {
                return I(e)
            })
        }

        function Kt(e, t) {
            return Yt(e, t, function(e) {
                return !D(e)
            })
        }

        function Jt(e) {
            var t = {};
            return P(e) ? (C(e, function(e) {
                w(t[e.selector]) && (t[e.selector] = []), t[e.selector].push(e)
            }), E(t, function(e, t) {
                return {
                    selector: t,
                    group: e
                }
            })) : []
        }

        function Qt(e) {
            return O(e[Ei.CSS_SELECTOR]) && !(e[Ei.ACTION] === xi.TRACK_CLICK || e[Ei.ACTION] === xi.PREPEND_CONTENT || e[Ei.ACTION] === xi.APPEND_CONTENT || e[Ei.ACTION] === xi.INSERT_AFTER || e[Ei.ACTION] === xi.INSERT_BEFORE)
        }

        function Zt(e) {
            return e[Ei.ACTION] !== xi.REPLACE_CONTENT && Qt(e) ? e.action === xi.SET_STYLE && "visibility" === e[Ei.PROPERTY] : !0
        }

        function en(e) {
            return zt(e, [Ei.SELECTOR, Ei.ACTION])
        }

        function tn(e) {
            return zt(e, [Ei.ACTION])
        }

        function nn(e) {
            return zt(e, [Ei.CONTENT])
        }

        function rn(e) {
            return zt(e, [Ei.ASSET, Ei.VALUE])
        }

        function on(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1],
                n = {};
            return t.push(Ei.ACTION), an(e, n, t), n
        }

        function un(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1];
            return t.push(Ei.SELECTOR), O(e[Ei.CSS_SELECTOR]) && t.push(Ei.CSS_SELECTOR), on(e, t)
        }

        function an(e, t, n) {
            var r = N(n, function(t) {
                return !w(e[t])
            });
            C(r, function(n) {
                return t[n] = e[n]
            })
        }

        function sn(e, t) {
            return {
                build: function(n) {
                    var r, o, a = on(n),
                        s = n[Ei.URL];
                    return R(n[Ei.INCLUDE_ALL_URL_PARAMETERS]) && n[Ei.INCLUDE_ALL_URL_PARAMETERS] && (r = u(e.location.search.substring(1)), s = i(s, r)), R(n[Ei.PASS_MBOX_SESSION]) && n[Ei.PASS_MBOX_SESSION] && (o = t.getId(), s = i(s, {
                        mboxSession: o
                    })), a[Ei.URL] = s, a
                },
                valid: function(e) {
                    return zt(e, [Ei.ACTION, Ei.URL]) && X(e[Ei.URL])
                }
            }
        }

        function cn() {
            return {
                build: function(e) {
                    return un(e, [Ei.CLICK_TRACK_ID])
                },
                valid: function(e) {
                    return en(e) && zt(e, [Ei.CLICK_TRACK_ID])
                }
            }
        }

        function ln() {
            return {
                build: function(e) {
                    return un(e, [Ei.FROM, Ei.TO])
                },
                valid: function(e) {
                    return en(e) && Kt(e, [Ei.FROM, Ei.TO])
                }
            }
        }

        function fn() {
            return {
                build: function(e) {
                    return un(e)
                },
                valid: function(e) {
                    return en(e)
                }
            }
        }

        function dn() {
            return {
                build: function(e) {
                    var t = un(e);
                    return t[Ei.CONTENT] = {
                        height: e[Ei.FINAL_HEIGHT],
                        width: e[Ei.FINAL_WIDTH]
                    }, t
                },
                valid: function(e) {
                    return en(e) && zt(e, [Ei.FINAL_HEIGHT, Ei.FINAL_WIDTH])
                }
            }
        }

        function pn() {
            return {
                build: function(e) {
                    var t = un(e),
                        n = [Ei.PROPERTY, Ei.VALUE, Ei.SELECTOR];
                    return C(n.concat(), function(n) {
                        return t[n] = e[n]
                    }), e[Ei.PRIORITY] === Ci.IMPORTANT && (t[Ei.PRIORITY] = e[Ei.PRIORITY]), t
                },
                valid: function(e) {
                    return en(e) && zt(e, [Ei.PROPERTY, Ei.VALUE])
                }
            }
        }

        function hn() {
            return {
                build: function(e) {
                    var t = un(e),
                        n = Ni.HTML;
                    return e[Ei.CONTENT_TYPE] === Ni.TEXT && (n = Ni.TEXT), t[Ei.CONTENT_TYPE] = n, t[Ei.CONTENT] = e[Ei.CONTENT], t
                },
                valid: function(e) {
                    return en(e) && nn(e)
                }
            }
        }

        function mn() {
            return {
                build: function(e) {
                    var t, n = {},
                        r = e[Ei.ATTRIBUTE],
                        o = e[Ei.VALUE];
                    return n[r] = o, t = un(e), t[Ei.CONTENT] = n, t
                },
                valid: function(e) {
                    return en(e) && zt(e, [Ei.ATTRIBUTE, Ei.VALUE])
                }
            }
        }

        function gn() {
            return {
                build: function(e) {
                    var t = un(e),
                        n = {
                            left: e[Ei.FINAL_LEFT_POSITION],
                            top: e[Ei.FINAL_TOP_POSITION]
                        };
                    return O(e[Ei.POSITION]) && (n.position = e[Ei.POSITION]), t[Ei.CONTENT] = n, t
                },
                valid: function(e) {
                    return en(e) && Kt(e, [Ei.FINAL_LEFT_POSITION, Ei.FINAL_TOP_POSITION])
                }
            }
        }

        function vn() {
            return {
                build: function(e) {
                    var t = on(e);
                    return t[Ei.CONTENT] = e[Ei.CONTENT], O(e[Ei.SELECTOR]) ? t[Ei.SELECTOR] = e[Ei.SELECTOR] : t[Ei.SELECTOR] = "head", t
                },
                valid: function(e) {
                    return tn(e) && nn(e)
                }
            }
        }

        function yn() {
            return {
                build: function(e) {
                    return un(e, [Ei.CONTENT])
                },
                valid: function(e) {
                    return en(e) && nn(e)
                }
            }
        }

        function Tn() {
            return {
                build: function(e) {
                    var t = un(e, [Ei.CONTENT]);
                    return rn(e) && (t[Ei.CONTENT] = '<img src="' + e[Ei.VALUE] + '" />'), t
                },
                valid: function(e) {
                    return en(e) && (rn(e) || nn(e))
                }
            }
        }

        function bn(e, t) {
            var n = {},
                r = Tn(),
                o = yn();
            return n[xi.APPEND_CONTENT] = o, n[xi.CUSTOM_CODE] = vn(), n[xi.INSERT_AFTER] = r, n[xi.INSERT_BEFORE] = r, n[xi.MOVE] = gn(), n[xi.SET_ATTRIBUTE] = mn(), n[xi.SET_CONTENT] = hn(), n[xi.SET_STYLE] = pn(), n[xi.RESIZE] = dn(), n[xi.PREPEND_CONTENT] = o, n[xi.REMOVE] = fn(), n[xi.REARRANGE] = ln(), n[xi.REPLACE_CONTENT] = o, n[xi.TRACK_CLICK] = cn(), n[xi.REDIRECT] = sn(e, t), n
        }

        function xn(e) {
            function t(t) {
                var n = [],
                    r = N(t, function(e) {
                        return tn(e)
                    });
                return C(r, function(t) {
                    var r = t[Ei.ACTION],
                        o = e[r];
                    o.valid(t) && n.push(o.build(t))
                }), n
            }
            return {
                transform: t,
                isSupported: function(t) {
                    return j(e[t[Ei.ACTION]])
                }
            }
        }

        function En(e) {
            function t(t) {
                return k(e.requestAnimationFrame) ? function(t) {
                    return e.requestAnimationFrame(t)
                } : function(e) {
                    return r(e, t)
                }
            }

            function n(e) {
                var t = e();
                t && o(function() {
                    return n(e)
                })
            }
            var r = function(t, n) {
                    var r = e.setTimeout(t, n);
                    return {
                        dispose: function() {
                            return e.clearTimeout(r)
                        }
                    }
                },
                o = t(Ii);
            return {
                getFutureScheduler: t,
                scheduleFuture: r,
                scheduleRecursive: n
            }
        }

        function Cn(e, t, n, r) {
            function o() {
                r.log(wi), n.trigger(wi)
            }

            function i() {
                r.log("trigger " + wi + " in " + SETTINGS.pollingAfterDomReadyTimeout + "ms"), l = t.scheduleFuture(o, SETTINGS.pollingAfterDomReadyTimeout)
            }

            function u(e) {
                var t = le(),
                    o = function() {
                        return t.reject()
                    };
                return n.subscribeOnce(wi, o), t.promise().fail(function() {
                        return r.error(Ri, JSON.stringify(e))
                    }).done(function() {
                        return n.unsubscribe(wi, o)
                    }),
                    function() {
                        return a(t, e.selector).then(function() {
                            return s(e)
                        })
                    }
            }

            function a(e, n) {
                return t.scheduleRecursive(function() {
                    return ae(n) ? (e.resolve(), !1) : "pending" === e.state()
                }), e.promise()
            }

            function s(e) {
                var t = le(),
                    n = E(e.group, function(e) {
                        return function() {
                            return c(e)
                        }
                    }),
                    r = F(N(e.group, Zt));
                return ge(n).always(function() {
                    r && d(e.selector), t.resolve()
                }), t.promise()
            }

            function c(t) {
                var n = le(),
                    o = e.getStrategyByAction(t[Ei.ACTION]);
                return o(t).then(function() {
                    return r.log(Di, JSON.stringify(t))
                }).then(n.resolve), n.promise()
            }
            var l = void 0,
                f = {
                    createDeferred: u
                };
            return n.subscribeOnce($r, function() {
                w(l) || l.dispose(), o()
            }), n.onDomReady(i), f
        }

        function Nn(e) {
            return N(e, function(e) {
                return "actions" === e.type
            })
        }

        function Sn(e) {
            var t = [];
            return C(e, function(e) {
                return t.push.apply(t, e.content)
            }), t
        }

        function An(e) {
            var t = [];
            return C(e, function(e) {
                F(e.plugins) || t.push.apply(t, e.plugins)
            }), t
        }

        function On(e, t, n, r, o, i) {
            function u(e, t) {
                return N(e, function(e) {
                    return t(e)
                })
            }

            function a(e) {
                return u(e, function(e) {
                    return !t.isSupported(e)
                })
            }

            function s(e) {
                return u(e, t.isSupported)
            }

            function c(e) {
                var n = s(e);
                return t.transform(n)
            }
            var l = {
                handle: function(t) {
                    var u, s, l, f, d, p, h, m, g, v, y, b, x, S = Nn(t.offers);
                    return F(S) ? !0 : (u = Sn(S), s = N(u, function(e) {
                        return e[Ei.ACTION] === xi.REDIRECT
                    }), l = c(s), j(l[0]) ? (f = l[0], d = n.getStrategyByAction(xi.REDIRECT), o.trigger($r), d(f), !1) : (p = An(S), h = [], m = se("head"), g = c(u), C(g, function(e) {
                        Qt(e) && h.push(e[Ei.CSS_SELECTOR])
                    }), i.log("pre-hide", me(h)), v = T(), o.hideElements(v, me(h)), y = Jt(g), b = E(y, r.createDeferred), ge(b).always(function() {
                        se("#" + v).remove(), e(m[0], p)
                    }), x = a(u), C(x, function(e) {
                        return i.log("unsupported offer", e)
                    }), !0))
                }
            };
            return l
        }

        function In(e) {
            return "dynamic" === e.type
        }

        function Rn(e) {
            return N(e, function(e) {
                return In(e)
            })[0]
        }

        function Dn(e, t) {
            return {
                handle: function(n) {
                    var r, o, i, u, a, s = n.element;
                    return H(s) || !P(n.offers) ? !0 : (r = Rn(n.offers), j(r) ? (o = n.name, i = n.params, u = r.plugins, a = r.clickToken, e.extract({
                        offer: r,
                        params: i
                    }, function(e) {
                        I(e) || t.handle({
                            name: o,
                            element: s,
                            content: e,
                            plugins: u,
                            clickToken: a
                        })
                    }), !1) : !0)
                }
            }
        }

        function wn(e) {
            return P(e.plugins)
        }

        function Pn(e) {
            return w(e.actions) && w(e.dynamic) && w(e.html) && w(e.redirect)
        }

        function kn(e) {
            return P(e.actions) && !F(e.actions)
        }

        function Ln(e) {
            return j(e.dynamic) && O(e.dynamic.url)
        }

        function _n(e) {
            return O(e.html)
        }

        function jn(e) {
            return O(e.redirect)
        }

        function Mn(e) {
            return {
                type: "redirect",
                content: e.redirect
            }
        }

        function Hn(e) {
            var t = {
                type: "html",
                content: e.html
            };
            return Un(t, e), Gn(t, e), t
        }

        function Fn(e) {
            var t = {
                type: "dynamic",
                content: e.dynamic
            };
            return Un(t, e), Gn(t, e), t
        }

        function qn(e) {
            var t = {
                type: "default"
            };
            return Un(t, e), Gn(t, e), t
        }

        function Bn(e) {
            var t = {
                type: "actions",
                content: e.actions
            };
            return Gn(t, e), t
        }

        function Un(e, t) {
            Bt(t) && (e.clickToken = t.clickToken)
        }

        function Gn(e, t) {
            wn(t) && (e.plugins = t.plugins)
        }

        function Wn(e, t, n) {
            var r = N(e, function(e) {
                return t(e)
            });
            return E(r, function(e) {
                return n(e)
            })
        }

        function Vn(e) {
            var t = Wn(e, _n, Hn),
                n = Wn(e, Ln, Fn),
                r = Wn(e, kn, Bn),
                o = Wn(e, Pn, qn);
            return [].concat(t, n, o, r)
        }

        function $n(e) {
            if (!kn(e)) return !1;
            var t = Xn(e.actions);
            return !F(t)
        }

        function Xn(e) {
            return N(e, function(e) {
                return e[Ei.ACTION] === xi.REDIRECT
            })
        }

        function Yn(e) {
            var t, n = Wn(e, jn, Mn);
            return F(n) ? (t = Wn(e, $n, zn), F(t) ? [] : t) : n
        }

        function zn(e) {
            var t = "actions",
                n = Xn(e.actions).slice(0, 1);
            return {
                type: t,
                content: n
            }
        }

        function Kn() {
            var e = {
                extract: function(e) {
                    var t, n = e.offers;
                    return P(n) ? (t = Yn(n), F(t) ? Vn(n) : t) : []
                }
            };
            return e
        }

        function Jn(e, t) {
            return {
                process: function(n, r, o, i) {
                    var u, a, s, c = e.extract(i),
                        l = t.length;
                    for (u = 0; l > u && (a = t[u], s = a.handle({
                            name: n,
                            params: r,
                            element: o,
                            offers: c
                        }), s); u++);
                }
            }
        }

        function Qn() {
            return {
                handle: function(e) {
                    var t = e.content;
                    return O(t) ? Ae(t) : Oe()
                }
            }
        }

        function Zn(e) {
            return {
                handle: function(t) {
                    var n = t.content;
                    return O(n) && e.setId(n), Oe()
                }
            }
        }

        function er(e) {
            return !L(ke(e, _o))
        }

        function tr(e) {
            var t = e.split(".");
            return 2 !== t.length || I(t[1]) ? null : (t = t[1].split("_"), 2 !== t.length || I(t[0]) ? null : t[0])
        }

        function nr(e, t) {
            var n = e.clientCode,
                r = e.serverDomain;
            return r.replace(n, Lr + t)
        }

        function rr(e, t, n) {
            var r, o, i;
            t.overrideMboxEdgeServer && (er(e) || (r = tr(n), I(r) || (o = t.overrideMboxEdgeServerTimeout, i = nr(t, r), Pe(e, _o, i, {
                expires: o
            }))))
        }

        function or(e, t, n) {
            return {
                handle: function(r) {
                    var o = r.content;
                    return O(o) && (n.setId(o), rr(e, t, o)), Oe()
                }
            }
        }

        function ir(e) {
            function t(e) {
                o.push(e), 1 === o.length && n()
            }

            function n() {
                0 !== o.length && ye(o[0]()).done(function() {
                    o.shift(), n()
                })
            }
            var r, o = [];
            return e.subscribeOnce($r, function() {
                return o = []
            }), r = {
                addTask: t
            }
        }

        function ur(e, t) {
            function n(t, n, r) {
                var o = e[n],
                    i = r[n];
                return j(o) ? o.handle({
                    name: t,
                    content: i
                }) : Oe()
            }

            function r(e, n) {
                var r, o;
                if (e === SETTINGS.globalMboxName && SETTINGS.globalMboxAutoCreate !== !1) {
                    if (w(n.offers)) return void t.triggerShowBody();
                    r = N(n.offers, function(e) {
                        return kn(e)
                    }), o = N(n.offers, function(e) {
                        return jn(e)
                    }), F(r) && F(o) && t.triggerShowBody()
                }
            }
            return {
                process: function(e, t) {
                    var o, i;
                    return r(e, t), o = E(t, function(r, o) {
                        return n(e, o, t)
                    }), i = N(o, function(e) {
                        return Ao === e.status
                    }), F(i) ? Oe() : i[0]
                }
            }
        }

        function ar(e) {
            return !(M(e.element) && O(e.selector))
        }

        function sr(e, t) {
            function n(n) {
                var r, o, i, u = !0,
                    a = le(),
                    s = pt(n, _i);
                return s.status === Ao ? (t.error(Pi, s.message), a.reject(), a.promise()) : (r = se(n.element || n.selector || "head"), o = n.offer, i = n.mbox, C(r, function(t) {
                    var n, r, a;
                    for (n = 0; n < e.length; n++)
                        if (r = e[n], a = r.handle({
                                name: i,
                                element: t,
                                offers: o
                            }), !a) {
                            u = !1;
                            break
                        }
                }), u ? a.resolve() : a.reject(), a.promise())
            }
            return n
        }

        function cr(e) {
            return !In(e)
        }

        function lr(e, t, n, r, o, i, u, a, s) {
            function c(e) {
                return N(e, function(e) {
                    return In(e)
                })[0]
            }

            function l(e) {
                return N(e, function(e) {
                    return cr(e)
                })
            }

            function f(e, t, i, u, s) {
                var f, d, p, h = n.process(e, t);
                return Ao === h.status ? (a.error(Mi, "error:", t), void s(Ao, h.message)) : (f = r.extract(t), d = c(f), p = l(f), j(d) ? (a.log(Mi, "offer on your site", d), void o.extract({
                    offer: d,
                    params: i
                }, function(e) {
                    return I(e) ? (a.error(Mi, "offer on your site content could not be retrieved"), void u(p)) : (d.type = "html", d.content = e, p.push(d), void u(p))
                })) : void u(f))
            }

            function d(e) {
                var t = e.error;
                a.log(Mi, So + ":", Dr), u.delayCallback(t, So, Dr)
            }

            function p(n) {
                var r = n.mbox,
                    o = Ne(n.timeout, s.timeout),
                    i = n.error,
                    c = n.success,
                    l = j(n.params) ? n.params : {};
                return l[mo] = r, l[po] = e.requests.incrementAndGet(), a.log(Mi, "params:", l), t.fetch({
                    params: u.mergeParameters(u.getTargetPageParameters(r), l),
                    timeout: o,
                    success: function(e) {
                        try {
                            a.log(Mi, No + ":", e), f(r, e, l, c, i)
                        } catch (t) {
                            var n = t.message || t;
                            a.error(Mi, Ao + ":", n), i(Ao, n)
                        }
                    },
                    error: function(e, t) {
                        a.error(Mi, e + ":", t), i(e, t)
                    }
                })
            }
            return function(t) {
                return i.addTask(function() {
                    var n, r = pt(t, ji),
                        o = le();
                    return o.resolve(), n = o.promise(), r.status === Ao ? (a.error(Mi, r.message), n) : e.isEnabled() ? p(t) : (d(t), n)
                })
            }
        }

        function fr(e, t, n) {
            t.log(Fi, So + ":", Dr), k(n.error) && e.delayCallback(n.error, So, Dr)
        }

        function dr(e, t, n, r) {
            return r ? e.build(t, n) : Co
        }

        function pr(e, t, n, r) {
            var o = t.mbox,
                i = Ie(t.error),
                u = Ie(t.success),
                a = j(t.params) ? t.params : {};
            a[mo] = o, e.fetch({
                timeout: r,
                params: a,
                success: function() {
                    u(), n()
                },
                error: function() {
                    i(), n()
                }
            })
        }

        function hr(e, t) {
            j(e) && k(e.preventDefault) && t && e.preventDefault()
        }

        function mr(e, t, n, r) {
            var o = n.type,
                i = n.selector,
                u = !!n.preventDefault,
                a = se(i);
            C(a, function(i) {
                var a = dr(t, i, o, u);
                se(i).on(o, function(t) {
                    hr(t, u), pr(e, n, a, r)
                })
            })
        }

        function gr(e, t, n, r, o) {
            var i = !!n.preventDefault,
                u = r.currentTarget,
                a = r.type,
                s = dr(t, u, a, i);
            hr(r, i), pr(e, n, s, o)
        }

        function vr(e, t, n, r, o, i, u) {
            return function(a) {
                var s, c, l, f, d, p, h = pt(a, Hi);
                return h.status === Ao ? void i.error(Fi, h.message) : e.isEnabled() ? (s = a.type, c = O(s), l = a.selector, f = O(l), d = Ne(a.timeout, u.timeout), c && f ? void mr(n, r, a, d) : (p = t.event, j(p) ? void gr(n, r, a, p, d) : void pr(n, a, Co, d))) : void fr(o, i, a)
            }
        }

        function yr(e, t, n) {
            return e[mo] = t, e[po] = n, e
        }

        function Tr() {
            return "<style>." + Ar + " {" + SETTINGS.defaultContentHiddenStyle + "}</style>"
        }

        function br(e, t, n, r, o, i, u, a) {
            function s(e, t, i) {
                return n.fetch({
                    params: t,
                    timeout: SETTINGS.timeout,
                    success: function(n) {
                        try {
                            var a = r.process(e, n);
                            if (a.status === Ao) return u.error(Bi, "request error:", n), void d(i);
                            o.process(e, t, i[0], n), u.log(Bi, "request success:", n)
                        } catch (s) {
                            u.error(Bi, "request error:", s), d(i)
                        }
                    },
                    error: function(e, t) {
                        u.error(Bi, "request error:", e, t), d(i)
                    }
                })
            }

            function c() {
                e.isEnabled() && se("head").append(Tr())
            }

            function l(n, r) {
                var o, a, s, c, l, f;
                if (e.isEnabled() || e.isMboxEdit()) {
                    if (I(n)) return void u.error(Bi, "DOM node ID not provided for mbox: ", r);
                    if (!ae("#" + n)) return void u.error(Bi, "DOM node not found for mbox: ", r);
                    for (o = se("#" + n), o.addClass(Sr + r), a = arguments.length, s = Array(a > 2 ? a - 2 : 0), c = 2; a > c; c++) s[c - 2] = arguments[c];
                    if (l = i.getParametersFromArray(s), f = pt({
                            mbox: r
                        }, qi), f.status === Ao) return void u.error(Bi, f.message);
                    yr(l, r, e.requests.incrementAndGet()), t.add(r, {
                        name: r,
                        params: l,
                        node: o
                    }), u.log(Bi, "create mbox, params:", l)
                }
            }

            function f(n) {
                var r, o, c, l, f;
                for (r = arguments.length, o = Array(r > 1 ? r - 1 : 0), c = 1; r > c; c++) o[c - 1] = arguments[c];
                if (e.isEnabled()) {
                    if (l = pt({
                            mbox: n
                        }, qi), l.status === Ao) return void u.error(Bi, l.message);
                    f = t.findByKey(n), C(f, function(e) {
                        var t = i.mergeParameters(i.getTargetPageParameters(n), i.getParametersFromArray(o));
                        t = i.mergeParameters(e.params, t), t[go] = i.generateId(), a.addTask(function() {
                            return u.log(Bi, "execute mbox request, params:", t), s(n, t, e.node)
                        })
                    })
                }
            }

            function p(n) {
                var r, o, c, l, f, d;
                if (e.isEnabled() || e.isMboxEdit()) {
                    if (r = pt({
                            mbox: n
                        }, qi), r.status === Ao) return void u.error(Bi, r.value);
                    if (o = i.findLastMboxNode(n), !ae(o)) return void u.error(Bi, "DOM node not found for mbox: ", n);
                    for (o.addClass(Sr + n), c = arguments.length, l = Array(c > 1 ? c - 1 : 0), f = 1; c > f; f++) l[f - 1] = arguments[f];
                    d = i.mergeParameters(i.getTargetPageParameters(n), i.getParametersFromArray(l)), yr(d, n, e.requests.incrementAndGet()), t.add(n, {
                        name: n,
                        params: d,
                        node: o
                    }), e.isEnabled() && a.addTask(function() {
                        return u.log(Bi, "create mbox and execute mbox request, params:", d), s(n, d, o)
                    })
                }
            }
            return {
                hideDefaultContent: c,
                createMbox: l,
                fetchAndDisplayMbox: f,
                createFetchAndDisplayMbox: p
            }
        }

        function xr(e) {
            e.document.addEventListener("click", function(t) {
                k(e._AT.clickHandlerForExperienceEditor) && e._AT.clickHandlerForExperienceEditor(t)
            }, !0)
        }

        function Er(e, t, n, r) {
            e.isMboxEdit() && (t._AT = t._AT || {}, t._AT.querySelectorAll = se, n({
                url: Ui.experienceEditorUrl,
                type: ti.SCRIPT,
                success: function() {
                    return xr(t)
                },
                error: function() {
                    return r.error("Unable to load target-vec.js for experience creation.")
                }
            }))
        }

        function Cr(e, t, n, r, o) {
            o.globalMboxAutoCreate === !0 && O(o.globalMboxName) && e.isEnabled() && (t({
                mbox: o.globalMboxName,
                params: r.getTargetPageParameters(),
                success: function(e) {
                    n({
                        mbox: o.globalMboxName,
                        offer: e
                    })
                },
                error: ue
            }), r.hideBody())
        }
        var Nr, Sr, Ar, Or, Ir, Rr, Dr, wr, Pr, kr, Lr, _r, jr, Mr, Hr, Fr, qr, Br, Ur, Gr, Wr, Vr, $r, Xr, Yr, zr, Kr, Jr, Qr, Zr, eo, to, no, ro, oo, io, uo, ao, so, co, lo, fo, po, ho, mo, go, vo, yo, To, bo, xo, Eo, Co, No, So, Ao, Oo, Io, Ro, Do, wo, Po, ko, Lo, _o, jo, Mo, Ho, Fo, qo, Bo, Uo, Go, Wo, Vo, $o, Xo, Yo, zo, Ko, Jo, Qo, Zo, ei, ti, ni, ri, oi, ii, ui, ai, si, ci, li, fi, di, pi, hi, mi, gi, vi, yi, Ti, bi, xi, Ei, Ci, Ni, Si, Ai, Oi, Ii, Ri, Di, wi, Pi, ki, Li, _i, ji, Mi, Hi, Fi, qi, Bi, Ui, Gi, Wi, Vi, $i, Xi, Yi, zi, Ki, Ji, Qi, Zi, eu, tu, nu, ru, ou, iu, uu, au, su, cu, lu, fu, du, pu, hu, mu, gu, vu, yu, Tu, bu, xu, Eu, Cu, Nu, Su, Au, Ou, Iu, Ru, Du, wu, Pu, ku = "at-element-marker",
            Lu = function(e, t) {
                return t(e)
            }("undefined" != typeof window ? window : void 0, function(e) {
                function t(e) {
                    var t = !!e && "length" in e && e.length,
                        n = Tt.type(e);
                    return "function" === n || Tt.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
                }

                function n(e, t, n) {
                    if (Tt.isFunction(t)) return Tt.grep(e, function(e, r) {
                        return !!t.call(e, r, e) !== n
                    });
                    if (t.nodeType) return Tt.grep(e, function(e) {
                        return e === t !== n
                    });
                    if ("string" == typeof t) {
                        if (U.test(t)) return Tt.filter(t, e, n);
                        t = Tt.filter(t, e)
                    }
                    return Tt.grep(e, function(e) {
                        return pt.call(t, e) > -1 !== n
                    })
                }

                function r() {
                    this.expando = Tt.expando + r.uid++
                }

                function o() {
                    return !0
                }

                function i() {
                    return !1
                }

                function u() {
                    try {
                        return ct.activeElement
                    } catch (e) {}
                }

                function a(e, t, n, r, o, u) {
                    var s, c;
                    if ("object" == typeof t) {
                        "string" != typeof n && (r = r || n, n = void 0);
                        for (c in t) a(e, c, n, r, t[c], u);
                        return e
                    }
                    if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), o === !1) o = i;
                    else if (!o) return e;
                    return 1 === u && (s = o, o = function(e) {
                        return Tt().off(e), s.apply(this, arguments)
                    }, o.guid = s.guid || (s.guid = Tt.guid++)), e.each(function() {
                        Tt.event.add(this, t, o, r, n)
                    })
                }

                function s(e) {
                    var t = {};
                    return Tt.each(e.match($) || [], function(e, n) {
                        t[n] = !0
                    }), t
                }

                function c(e) {
                    return function(t, n) {
                        "string" != typeof t && (n = t, t = "*");
                        var r, o = 0,
                            i = t.toLowerCase().match($) || [];
                        if (Tt.isFunction(n))
                            for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                    }
                }

                function l(e, t, n, r) {
                    function o(a) {
                        var s;
                        return i[a] = !0, Tt.each(e[a] || [], function(e, a) {
                            var c = a(t, n, r);
                            return "string" != typeof c || u || i[c] ? u ? !(s = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
                        }), s
                    }
                    var i = {},
                        u = e === ce;
                    return o(t.dataTypes[0]) || !i["*"] && o("*")
                }

                function f(e, t) {
                    var n, r, o = Tt.ajaxSettings.flatOptions || {};
                    for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
                    return r && Tt.extend(!0, e, r), e
                }

                function d(e, t, n) {
                    for (var r, o, i, u, a = e.contents, s = e.dataTypes;
                        "*" === s[0];) s.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (o in a)
                            if (a[o] && a[o].test(r)) {
                                s.unshift(o);
                                break
                            }
                    if (s[0] in n) i = s[0];
                    else {
                        for (o in n) {
                            if (!s[0] || e.converters[o + " " + s[0]]) {
                                i = o;
                                break
                            }
                            u || (u = o)
                        }
                        i = i || u
                    }
                    return i ? (i !== s[0] && s.unshift(i), n[i]) : void 0
                }

                function p(e, t, n, r) {
                    var o, i, u, a, s, c = {},
                        l = e.dataTypes.slice();
                    if (l[1])
                        for (u in e.converters) c[u.toLowerCase()] = e.converters[u];
                    for (i = l.shift(); i;)
                        if (e.responseFields[i] && (n[e.responseFields[i]] = t), !s && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = i, i = l.shift())
                            if ("*" === i) i = s;
                            else if ("*" !== s && s !== i) {
                        if (u = c[s + " " + i] || c["* " + i], !u)
                            for (o in c)
                                if (a = o.split(" "), a[1] === i && (u = c[s + " " + a[0]] || c["* " + a[0]])) {
                                    u === !0 ? u = c[o] : c[o] !== !0 && (i = a[0], l.unshift(a[1]));
                                    break
                                }
                        if (u !== !0)
                            if (u && e["throws"]) t = u(t);
                            else try {
                                t = u(t)
                            } catch (f) {
                                return {
                                    state: "parsererror",
                                    error: u ? f : "No conversion from " + s + " to " + i
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }

                function h(e, t) {
                    var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                    return void 0 === t || t && Tt.nodeName(e, t) ? Tt.merge([e], n) : n
                }

                function m(e, t) {
                    for (var n = 0, r = e.length; r > n; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
                }

                function g(e, t, n, r, o) {
                    for (var i, u, a, s, c, l, f = t.createDocumentFragment(), d = [], p = 0, g = e.length; g > p; p++)
                        if (i = e[p], i || 0 === i)
                            if ("object" === Tt.type(i)) Tt.merge(d, i.nodeType ? [i] : i);
                            else if (xe.test(i)) {
                        for (u = u || f.appendChild(t.createElement("div")), a = (ye.exec(i) || ["", ""])[1].toLowerCase(), s = be[a] || be._default, u.innerHTML = s[1] + Tt.htmlPrefilter(i) + s[2], l = s[0]; l--;) u = u.lastChild;
                        Tt.merge(d, u.childNodes), u = f.firstChild, u.textContent = ""
                    } else d.push(t.createTextNode(i));
                    for (f.textContent = "", p = 0; i = d[p++];)
                        if (r && Tt.inArray(i, r) > -1) o && o.push(i);
                        else if (c = Tt.contains(i.ownerDocument, i), u = h(f.appendChild(i), "script"), c && m(u), n)
                        for (l = 0; i = u[l++];) Te.test(i.type || "") && n.push(i);
                    return f
                }

                function v(e, t) {
                    for (;
                        (e = e[t]) && 1 !== e.nodeType;);
                    return e
                }

                function y(e, t) {
                    return Tt.nodeName(e, "table") && Tt.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
                }

                function T(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                }

                function b(e) {
                    var t = De.exec(e.type);
                    return t ? e.type = t[1] : e.removeAttribute("type"), e
                }

                function x(e, t) {
                    var n, r, o, i, u, a, s, c;
                    if (1 === t.nodeType) {
                        if (J.hasData(e) && (i = J.access(e), u = J.set(t, i), c = i.events)) {
                            delete u.handle, u.events = {};
                            for (o in c)
                                for (n = 0, r = c[o].length; r > n; n++) Tt.event.add(t, o, c[o][n])
                        }
                        Ee.hasData(e) && (a = Ee.access(e), s = Tt.extend({}, a), Ee.set(t, s))
                    }
                }

                function E(e, t) {
                    var n = t.nodeName.toLowerCase();
                    "input" === n && ve.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
                }

                function C(e, t, n, r) {
                    t = ft.apply([], t);
                    var o, i, u, a, s, c, l = 0,
                        f = e.length,
                        d = f - 1,
                        p = t[0],
                        m = Tt.isFunction(p);
                    if (m || f > 1 && "string" == typeof p && !vt.checkClone && Re.test(p)) return e.each(function(o) {
                        var i = e.eq(o);
                        m && (t[0] = p.call(this, o, i.html())), C(i, t, n, r)
                    });
                    if (f && (o = g(t, e[0].ownerDocument, !1, e, r), i = o.firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
                        for (u = Tt.map(h(o, "script"), T), a = u.length; f > l; l++) s = o, l !== d && (s = Tt.clone(s, !0, !0), a && Tt.merge(u, h(s, "script"))), n.call(e[l], s, l);
                        if (a)
                            for (c = u[u.length - 1].ownerDocument, Tt.map(u, b), l = 0; a > l; l++) s = u[l], Te.test(s.type || "") && !J.access(s, "globalEval") && Tt.contains(c, s) && (s.src ? Tt._evalUrl && Tt._evalUrl(s.src) : Tt.globalEval(s.textContent.replace(we, "")))
                    }
                    return e
                }

                function N(e, t, n) {
                    for (var r, o = t ? Tt.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || Tt.cleanData(h(r)), r.parentNode && (n && Tt.contains(r.ownerDocument, r) && m(h(r, "script")), r.parentNode.removeChild(r));
                    return e
                }

                function S(e, t, n) {
                    var r;
                    if (void 0 === n && 1 === e.nodeType)
                        if (r = "data-" + t.replace(ke, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                            try {
                                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Pe.test(n) ? Tt.parseJSON(n) : n
                            } catch (o) {}
                            Ee.set(e, t, n)
                        } else n = void 0;
                    return n
                }

                function A(e, t, n) {
                    var r, o, i, u, a = e.style;
                    return n = n || qe(e), u = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== u && void 0 !== u || Tt.contains(e.ownerDocument, e) || (u = Tt.style(e, t)), n && !vt.pixelMarginRight() && Me.test(u) && _e.test(t) && (r = a.width, o = a.minWidth, i = a.maxWidth, a.minWidth = a.maxWidth = a.width = u, u = n.width, a.width = r, a.minWidth = o, a.maxWidth = i), void 0 !== u ? u + "" : u
                }

                function O(e, t, n, r) {
                    var o, i = 1,
                        u = 20,
                        a = r ? function() {
                            return r.cur()
                        } : function() {
                            return Tt.css(e, t, "")
                        },
                        s = a(),
                        c = n && n[3] || (Tt.cssNumber[t] ? "" : "px"),
                        l = (Tt.cssNumber[t] || "px" !== c && +s) && je.exec(Tt.css(e, t));
                    if (l && l[3] !== c) {
                        c = c || l[3], n = n || [], l = +s || 1;
                        do i = i || ".5", l /= i, Tt.style(e, t, l + c); while (i !== (i = a() / s) && 1 !== i && --u)
                    }
                    return n && (l = +l || +s || 0, o = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = o)), o
                }

                function I(e, t) {
                    var n = Tt(t.createElement(e)).appendTo(t.body),
                        r = Tt.css(n[0], "display");
                    return n.detach(), r
                }

                function R(e) {
                    var t = ct,
                        n = We[e];
                    return n || (n = I(e, t), "none" !== n && n || (Ge = (Ge || Tt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ge[0].contentDocument, t.write(), t.close(), n = I(e, t), Ge.detach()), We[e] = n), n
                }

                function D(e, t) {
                    return {
                        get: function() {
                            return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                        }
                    }
                }

                function w() {
                    ct.removeEventListener("DOMContentLoaded", w), e.removeEventListener("load", w), Tt.ready()
                }

                function P(e) {
                    if (e in Ke) return e;
                    for (var t = e[0].toUpperCase() + e.slice(1), n = ze.length; n--;)
                        if (e = ze[n] + t, e in Ke) return e
                }

                function k(e, t, n) {
                    var r = je.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                }

                function L(e, t, n, r, o) {
                    for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, u = 0; 4 > i; i += 2) "margin" === n && (u += Tt.css(e, n + He[i], !0, o)), r ? ("content" === n && (u -= Tt.css(e, "padding" + He[i], !0, o)), "margin" !== n && (u -= Tt.css(e, "border" + He[i] + "Width", !0, o))) : (u += Tt.css(e, "padding" + He[i], !0, o), "padding" !== n && (u += Tt.css(e, "border" + He[i] + "Width", !0, o)));
                    return u
                }

                function _(t, n, r) {
                    var o = !0,
                        i = "width" === n ? t.offsetWidth : t.offsetHeight,
                        u = qe(t),
                        a = "border-box" === Tt.css(t, "boxSizing", !1, u);
                    if (ct.msFullscreenElement && e.top !== e && t.getClientRects().length && (i = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= i || null == i) {
                        if (i = A(t, n, u), (0 > i || null == i) && (i = t.style[n]), Me.test(i)) return i;
                        o = a && (vt.boxSizingReliable() || i === t.style[n]), i = parseFloat(i) || 0
                    }
                    return i + L(t, n, r || (a ? "border" : "content"), o, u) + "px"
                }

                function j(e, t) {
                    for (var n, r, o, i = [], u = 0, a = e.length; a > u; u++) r = e[u], r.style && (i[u] = J.get(r, "olddisplay"), n = r.style.display, t ? (i[u] || "none" !== n || (r.style.display = ""), "" === r.style.display && Fe(r) && (i[u] = J.access(r, "olddisplay", R(r.nodeName)))) : (o = Fe(r), "none" === n && o || J.set(r, "olddisplay", o ? n : Tt.css(r, "display"))));
                    for (u = 0; a > u; u++) r = e[u], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[u] || "" : "none"));
                    return e
                }

                function M(e) {
                    return e.getAttribute && e.getAttribute("class") || ""
                }

                function H(e, t, n, r) {
                    var o;
                    if (Tt.isArray(t)) Tt.each(t, function(t, o) {
                        n || ot.test(e) ? r(e, o) : H(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
                    });
                    else if (n || "object" !== Tt.type(t)) r(e, t);
                    else
                        for (o in t) H(e + "[" + o + "]", t[o], n, r)
                }
                var F, q, B, U, G, W, V, $, X, Y, z, K, J, Q, Z, ee, te, ne, re, oe, ie, ue, ae, se, ce, le, fe, de, pe, he, me, ge, ve, ye, Te, be, xe, Ee, Ce, Ne, Se, Ae, Oe, Ie, Re, De, we, Pe, ke, Le, _e, je, Me, He, Fe, qe, Be, Ue, Ge, We, Ve, $e, Xe, Ye, ze, Ke, Je, Qe, Ze, et, tt, nt, rt, ot, it, ut, at, st = [],
                    ct = e.document,
                    lt = st.slice,
                    ft = st.concat,
                    dt = st.push,
                    pt = st.indexOf,
                    ht = {},
                    mt = ht.toString,
                    gt = ht.hasOwnProperty,
                    vt = {},
                    yt = "2.2.2-pre",
                    Tt = function(e, t) {
                        return new Tt.fn.init(e, t)
                    },
                    bt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                    xt = /^-ms-/,
                    Et = /-([\da-z])/gi,
                    Ct = function(e, t) {
                        return t.toUpperCase()
                    };
                return Tt.fn = Tt.prototype = {
                        jquery: yt,
                        constructor: Tt,
                        selector: "",
                        length: 0,
                        toArray: function() {
                            return lt.call(this)
                        },
                        get: function(e) {
                            return null != e ? 0 > e ? this[e + this.length] : this[e] : lt.call(this)
                        },
                        pushStack: function(e) {
                            var t = Tt.merge(this.constructor(), e);
                            return t.prevObject = this, t.context = this.context, t
                        },
                        each: function(e) {
                            return Tt.each(this, e)
                        },
                        map: function(e) {
                            return this.pushStack(Tt.map(this, function(t, n) {
                                return e.call(t, n, t)
                            }))
                        },
                        slice: function() {
                            return this.pushStack(lt.apply(this, arguments))
                        },
                        first: function() {
                            return this.eq(0)
                        },
                        last: function() {
                            return this.eq(-1)
                        },
                        eq: function(e) {
                            var t = this.length,
                                n = +e + (0 > e ? t : 0);
                            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                        },
                        end: function() {
                            return this.prevObject || this.constructor()
                        },
                        push: dt,
                        sort: st.sort,
                        splice: st.splice
                    }, Tt.extend = Tt.fn.extend = function() {
                        var e, t, n, r, o, i, u = arguments[0] || {},
                            a = 1,
                            s = arguments.length,
                            c = !1;
                        for ("boolean" == typeof u && (c = u, u = arguments[a] || {}, a++), "object" == typeof u || Tt.isFunction(u) || (u = {}), a === s && (u = this, a--); s > a; a++)
                            if (null != (e = arguments[a]))
                                for (t in e) n = u[t], r = e[t], u !== r && (c && r && (Tt.isPlainObject(r) || (o = Tt.isArray(r))) ? (o ? (o = !1, i = n && Tt.isArray(n) ? n : []) : i = n && Tt.isPlainObject(n) ? n : {}, u[t] = Tt.extend(c, i, r)) : void 0 !== r && (u[t] = r));
                        return u
                    }, Tt.extend({
                        expando: "ATJS" + (yt + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function(e) {
                            throw Error(e)
                        },
                        noop: function() {},
                        isFunction: function(e) {
                            return "function" === Tt.type(e)
                        },
                        isArray: Array.isArray,
                        isWindow: function(e) {
                            return null != e && e === e.window
                        },
                        isNumeric: function(e) {
                            var t = e && "" + e;
                            return !Tt.isArray(e) && t - parseFloat(t) + 1 >= 0
                        },
                        isPlainObject: function(e) {
                            var t;
                            if ("object" !== Tt.type(e) || e.nodeType || Tt.isWindow(e)) return !1;
                            if (e.constructor && !gt.call(e.constructor.prototype, "isPrototypeOf")) return !1;
                            for (t in e);
                            return void 0 === t || gt.call(e, t)
                        },
                        isEmptyObject: function(e) {
                            var t;
                            for (t in e) return !1;
                            return !0
                        },
                        type: function(e) {
                            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ht[mt.call(e)] || "object" : typeof e
                        },
                        globalEval: function(e) {
                            var t, n = eval;
                            e = Tt.trim(e), e && (1 === e.indexOf("use strict") ? (t = ct.createElement("script"), t.text = e, ct.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                        },
                        camelCase: function(e) {
                            return e.replace(xt, "ms-").replace(Et, Ct)
                        },
                        nodeName: function(e, t) {
                            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                        },
                        each: function(e, n) {
                            var r, o = 0;
                            if (t(e))
                                for (r = e.length; r > o && n.call(e[o], o, e[o]) !== !1; o++);
                            else
                                for (o in e)
                                    if (n.call(e[o], o, e[o]) === !1) break;
                            return e
                        },
                        trim: function(e) {
                            return null == e ? "" : (e + "").replace(bt, "")
                        },
                        makeArray: function(e, n) {
                            var r = n || [];
                            return null != e && (t(Object(e)) ? Tt.merge(r, "string" == typeof e ? [e] : e) : dt.call(r, e)), r
                        },
                        inArray: function(e, t, n) {
                            return null == t ? -1 : pt.call(t, e, n)
                        },
                        merge: function(e, t) {
                            for (var n = +t.length, r = 0, o = e.length; n > r; r++) e[o++] = t[r];
                            return e.length = o, e
                        },
                        grep: function(e, t, n) {
                            for (var r, o = [], i = 0, u = e.length, a = !n; u > i; i++) r = !t(e[i], i), r !== a && o.push(e[i]);
                            return o
                        },
                        map: function(e, n, r) {
                            var o, i, u = 0,
                                a = [];
                            if (t(e))
                                for (o = e.length; o > u; u++) i = n(e[u], u, r), null != i && a.push(i);
                            else
                                for (u in e) i = n(e[u], u, r), null != i && a.push(i);
                            return ft.apply([], a)
                        },
                        guid: 1,
                        proxy: function Nt(e, t) {
                            var n, r, Nt;
                            return "string" == typeof t && (n = e[t], t = e, e = n), Tt.isFunction(e) ? (r = lt.call(arguments, 2), Nt = function() {
                                return e.apply(t || this, r.concat(lt.call(arguments)))
                            }, Nt.guid = e.guid = e.guid || Tt.guid++, Nt) : void 0
                        },
                        now: Date.now,
                        support: vt
                    }), "function" == typeof Symbol && (Tt.fn[Symbol.iterator] = st[Symbol.iterator]), Tt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                        ht["[object " + t + "]"] = t.toLowerCase()
                    }), F = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, q = function(e) {
                        function t(e, t, n, r) {
                            var o, i, u, a, s, c, f, p, h = t && t.ownerDocument,
                                m = t ? t.nodeType : 9;
                            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
                            if (!r && ((t ? t.ownerDocument || t : q) !== P && w(t), t = t || P, L)) {
                                if (11 !== m && (c = ve.exec(e)))
                                    if (o = c[1]) {
                                        if (9 === m) {
                                            if (!(u = t.getElementById(o))) return n;
                                            if (u.id === o) return n.push(u), n
                                        } else if (h && (u = h.getElementById(o)) && H(t, u) && u.id === o) return n.push(u), n
                                    } else {
                                        if (c[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                                        if ((o = c[3]) && x.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(o)), n
                                    }
                                if (x.qsa && !V[e + " "] && (!_ || !_.test(e))) {
                                    if (1 !== m) h = t, p = e;
                                    else if ("object" !== t.nodeName.toLowerCase()) {
                                        for ((a = t.getAttribute("id")) ? a = a.replace(Te, "\\$&") : t.setAttribute("id", a = F), f = S(e), i = f.length, s = de.test(a) ? "#" + a : "[id='" + a + "']"; i--;) f[i] = s + " " + d(f[i]);
                                        p = f.join(","), h = ye.test(e) && l(t.parentNode) || t
                                    }
                                    if (p) try {
                                        return Q.apply(n, h.querySelectorAll(p)), n
                                    } catch (g) {} finally {
                                        a === F && t.removeAttribute("id")
                                    }
                                }
                            }
                            return O(e.replace(ae, "$1"), t, n, r)
                        }

                        function n() {
                            function e(n, r) {
                                return t.push(n + " ") > E.cacheLength && delete e[t.shift()], e[n + " "] = r
                            }
                            var t = [];
                            return e
                        }

                        function r(e) {
                            return e[F] = !0, e
                        }

                        function o(e) {
                            var t = P.createElement("div");
                            try {
                                return !!e(t)
                            } catch (n) {
                                return !1
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t), t = null
                            }
                        }

                        function i(e, t) {
                            for (var n = e.split("|"), r = n.length; r--;) E.attrHandle[n[r]] = t
                        }

                        function u(e, t) {
                            var n = t && e,
                                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
                            if (r) return r;
                            if (n)
                                for (; n = n.nextSibling;)
                                    if (n === t) return -1;
                            return e ? 1 : -1
                        }

                        function a(e) {
                            return function(t) {
                                var n = t.nodeName.toLowerCase();
                                return "input" === n && t.type === e
                            }
                        }

                        function s(e) {
                            return function(t) {
                                var n = t.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && t.type === e
                            }
                        }

                        function c(e) {
                            return r(function(t) {
                                return t = +t, r(function(n, r) {
                                    for (var o, i = e([], n.length, t), u = i.length; u--;) n[o = i[u]] && (n[o] = !(r[o] = n[o]))
                                })
                            })
                        }

                        function l(e) {
                            return e && void 0 !== e.getElementsByTagName && e
                        }

                        function f() {}

                        function d(e) {
                            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                            return r
                        }

                        function p(e, t, n) {
                            var r = t.dir,
                                o = n && "parentNode" === r,
                                i = U++;
                            return t.first ? function(t, n, i) {
                                for (; t = t[r];)
                                    if (1 === t.nodeType || o) return e(t, n, i)
                            } : function(t, n, u) {
                                var a, s, c, l = [B, i];
                                if (u) {
                                    for (; t = t[r];)
                                        if ((1 === t.nodeType || o) && e(t, n, u)) return !0
                                } else
                                    for (; t = t[r];)
                                        if (1 === t.nodeType || o) {
                                            if (c = t[F] || (t[F] = {}), s = c[t.uniqueID] || (c[t.uniqueID] = {}), (a = s[r]) && a[0] === B && a[1] === i) return l[2] = a[2];
                                            if (s[r] = l, l[2] = e(t, n, u)) return !0
                                        }
                            }
                        }

                        function h(e) {
                            return e.length > 1 ? function(t, n, r) {
                                for (var o = e.length; o--;)
                                    if (!e[o](t, n, r)) return !1;
                                return !0
                            } : e[0]
                        }

                        function m(e, n, r) {
                            for (var o = 0, i = n.length; i > o; o++) t(e, n[o], r);
                            return r
                        }

                        function g(e, t, n, r, o) {
                            for (var i, u = [], a = 0, s = e.length, c = null != t; s > a; a++)(i = e[a]) && (!n || n(i, r, o)) && (u.push(i), c && t.push(a));
                            return u
                        }

                        function v(e, t, n, o, i, u) {
                            return o && !o[F] && (o = v(o)), i && !i[F] && (i = v(i, u)), r(function(r, u, a, s) {
                                var c, l, f, d = [],
                                    p = [],
                                    h = u.length,
                                    v = r || m(t || "*", a.nodeType ? [a] : a, []),
                                    y = !e || !r && t ? v : g(v, d, e, a, s),
                                    T = n ? i || (r ? e : h || o) ? [] : u : y;
                                if (n && n(y, T, a, s), o)
                                    for (c = g(T, p), o(c, [], a, s), l = c.length; l--;)(f = c[l]) && (T[p[l]] = !(y[p[l]] = f));
                                if (r) {
                                    if (i || e) {
                                        if (i) {
                                            for (c = [], l = T.length; l--;)(f = T[l]) && c.push(y[l] = f);
                                            i(null, T = [], c, s)
                                        }
                                        for (l = T.length; l--;)(f = T[l]) && (c = i ? ee(r, f) : d[l]) > -1 && (r[c] = !(u[c] = f))
                                    }
                                } else T = g(T === u ? T.splice(h, T.length) : T), i ? i(null, u, T, s) : Q.apply(u, T)
                            })
                        }

                        function y(e) {
                            for (var t, n, r, o = e.length, i = E.relative[e[0].type], u = i || E.relative[" "], a = i ? 1 : 0, s = p(function(e) {
                                    return e === t
                                }, u, !0), c = p(function(e) {
                                    return ee(t, e) > -1
                                }, u, !0), l = [function(e, n, r) {
                                    var o = !i && (r || n !== I) || ((t = n).nodeType ? s(e, n, r) : c(e, n, r));
                                    return t = null, o
                                }]; o > a; a++)
                                if (n = E.relative[e[a].type]) l = [p(h(l), n)];
                                else {
                                    if (n = E.filter[e[a].type].apply(null, e[a].matches), n[F]) {
                                        for (r = ++a; o > r && !E.relative[e[r].type]; r++);
                                        return v(a > 1 && h(l), a > 1 && d(e.slice(0, a - 1).concat({
                                            value: " " === e[a - 2].type ? "*" : ""
                                        })).replace(ae, "$1"), n, r > a && y(e.slice(a, r)), o > r && y(e = e.slice(r)), o > r && d(e))
                                    }
                                    l.push(n)
                                }
                            return h(l)
                        }

                        function T(e, n) {
                            var o = n.length > 0,
                                i = e.length > 0,
                                u = function(r, u, a, s, c) {
                                    var l, f, d, p = 0,
                                        h = "0",
                                        m = r && [],
                                        v = [],
                                        y = I,
                                        T = r || i && E.find.TAG("*", c),
                                        b = B += null == y ? 1 : Math.random() || .1,
                                        x = T.length;
                                    for (c && (I = u === P || u || c); h !== x && null != (l = T[h]); h++) {
                                        if (i && l) {
                                            for (f = 0, u || l.ownerDocument === P || (w(l), a = !L); d = e[f++];)
                                                if (d(l, u || P, a)) {
                                                    s.push(l);
                                                    break
                                                }
                                            c && (B = b)
                                        }
                                        o && ((l = !d && l) && p--, r && m.push(l))
                                    }
                                    if (p += h, o && h !== p) {
                                        for (f = 0; d = n[f++];) d(m, v, u, a);
                                        if (r) {
                                            if (p > 0)
                                                for (; h--;) m[h] || v[h] || (v[h] = K.call(s));
                                            v = g(v)
                                        }
                                        Q.apply(s, v), c && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(s)
                                    }
                                    return c && (B = b, I = y), m
                                };
                            return o ? r(u) : u
                        }
                        var b, x, E, C, N, S, A, O, I, R, D, w, P, k, L, _, j, M, H, F = "sizzle" + 1 * new Date,
                            q = e.document,
                            B = 0,
                            U = 0,
                            G = n(),
                            W = n(),
                            V = n(),
                            $ = function(e, t) {
                                return e === t && (D = !0), 0
                            },
                            X = 1 << 31,
                            Y = {}.hasOwnProperty,
                            z = [],
                            K = z.pop,
                            J = z.push,
                            Q = z.push,
                            Z = z.slice,
                            ee = function(e, t) {
                                for (var n = 0, r = e.length; r > n; n++)
                                    if (e[n] === t) return n;
                                return -1
                            },
                            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            ne = "[\\x20\\t\\r\\n\\f]",
                            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                            oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
                            ie = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                            ue = RegExp(ne + "+", "g"),
                            ae = RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                            se = RegExp("^" + ne + "*," + ne + "*"),
                            ce = RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                            le = RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                            fe = RegExp(ie),
                            de = RegExp("^" + re + "$"),
                            pe = {
                                ID: RegExp("^#(" + re + ")"),
                                CLASS: RegExp("^\\.(" + re + ")"),
                                TAG: RegExp("^(" + re + "|[*])"),
                                ATTR: RegExp("^" + oe),
                                PSEUDO: RegExp("^" + ie),
                                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                                bool: RegExp("^(?:" + te + ")$", "i"),
                                needsContext: RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                            },
                            he = /^(?:input|select|textarea|button)$/i,
                            me = /^h\d$/i,
                            ge = /^[^{]+\{\s*\[native \w/,
                            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            ye = /[+~]/,
                            Te = /'|\\/g,
                            be = RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                            xe = function(e, t, n) {
                                var r = "0x" + t - 65536;
                                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                            },
                            Ee = function() {
                                w()
                            };
                        try {
                            Q.apply(z = Z.call(q.childNodes), q.childNodes), z[q.childNodes.length].nodeType
                        } catch (Ce) {
                            Q = {
                                apply: z.length ? function(e, t) {
                                    J.apply(e, Z.call(t))
                                } : function(e, t) {
                                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                                    e.length = n - 1
                                }
                            }
                        }
                        x = t.support = {}, N = t.isXML = function(e) {
                            var t = e && (e.ownerDocument || e).documentElement;
                            return t ? "HTML" !== t.nodeName : !1
                        }, w = t.setDocument = function(e) {
                            var t, n, r = e ? e.ownerDocument || e : q;
                            return r !== P && 9 === r.nodeType && r.documentElement ? (P = r, k = P.documentElement, L = !N(P), (n = P.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ee, !1) : n.attachEvent && n.attachEvent("onunload", Ee)), x.attributes = o(function(e) {
                                return e.className = "i", !e.getAttribute("className")
                            }), x.getElementsByTagName = o(function(e) {
                                return e.appendChild(P.createComment("")), !e.getElementsByTagName("*").length
                            }), x.getElementsByClassName = ge.test(P.getElementsByClassName), x.getById = o(function(e) {
                                return k.appendChild(e).id = F, !P.getElementsByName || !P.getElementsByName(F).length
                            }), x.getById ? (E.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && L) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : []
                                }
                            }, E.filter.ID = function(e) {
                                var t = e.replace(be, xe);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }) : (delete E.find.ID, E.filter.ID = function(e) {
                                var t = e.replace(be, xe);
                                return function(e) {
                                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }), E.find.TAG = x.getElementsByTagName ? function(e, t) {
                                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                            } : function(e, t) {
                                var n, r = [],
                                    o = 0,
                                    i = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                                    return r
                                }
                                return i
                            }, E.find.CLASS = x.getElementsByClassName && function(e, t) {
                                return void 0 !== t.getElementsByClassName && L ? t.getElementsByClassName(e) : void 0
                            }, j = [], _ = [], (x.qsa = ge.test(P.querySelectorAll)) && (o(function(e) {
                                k.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && _.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || _.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + F + "-]").length || _.push("~="), e.querySelectorAll(":checked").length || _.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || _.push(".#.+[+~]")
                            }), o(function(e) {
                                var t = P.createElement("input");
                                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && _.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || _.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), _.push(",.*:")
                            })), (x.matchesSelector = ge.test(M = k.matches || k.webkitMatchesSelector || k.mozMatchesSelector || k.oMatchesSelector || k.msMatchesSelector)) && o(function(e) {
                                x.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), j.push("!=", ie)
                            }), _ = _.length && RegExp(_.join("|")), j = j.length && RegExp(j.join("|")), t = ge.test(k.compareDocumentPosition), H = t || ge.test(k.contains) ? function(e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e,
                                    r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                            } : function(e, t) {
                                if (t)
                                    for (; t = t.parentNode;)
                                        if (t === e) return !0;
                                return !1
                            }, $ = t ? function(e, t) {
                                if (e === t) return D = !0, 0;
                                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === P || e.ownerDocument === q && H(q, e) ? -1 : t === P || t.ownerDocument === q && H(q, t) ? 1 : R ? ee(R, e) - ee(R, t) : 0 : 4 & n ? -1 : 1)
                            } : function(e, t) {
                                if (e === t) return D = !0, 0;
                                var n, r = 0,
                                    o = e.parentNode,
                                    i = t.parentNode,
                                    a = [e],
                                    s = [t];
                                if (!o || !i) return e === P ? -1 : t === P ? 1 : o ? -1 : i ? 1 : R ? ee(R, e) - ee(R, t) : 0;
                                if (o === i) return u(e, t);
                                for (n = e; n = n.parentNode;) a.unshift(n);
                                for (n = t; n = n.parentNode;) s.unshift(n);
                                for (; a[r] === s[r];) r++;
                                return r ? u(a[r], s[r]) : a[r] === q ? -1 : s[r] === q ? 1 : 0
                            }, P) : P
                        }, t.matches = function(e, n) {
                            return t(e, null, null, n)
                        }, t.matchesSelector = function(e, n) {
                            if ((e.ownerDocument || e) !== P && w(e), n = n.replace(le, "='$1']"), x.matchesSelector && L && !V[n + " "] && (!j || !j.test(n)) && (!_ || !_.test(n))) try {
                                var r = M.call(e, n);
                                if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                            } catch (o) {}
                            return t(n, P, null, [e]).length > 0
                        }, t.contains = function(e, t) {
                            return (e.ownerDocument || e) !== P && w(e), H(e, t)
                        }, t.attr = function(e, t) {
                            (e.ownerDocument || e) !== P && w(e);
                            var n = E.attrHandle[t.toLowerCase()],
                                r = n && Y.call(E.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
                            return void 0 !== r ? r : x.attributes || !L ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                        }, t.error = function(e) {
                            throw Error("Syntax error, unrecognized expression: " + e)
                        }, t.uniqueSort = function(e) {
                            var t, n = [],
                                r = 0,
                                o = 0;
                            if (D = !x.detectDuplicates, R = !x.sortStable && e.slice(0), e.sort($), D) {
                                for (; t = e[o++];) t === e[o] && (r = n.push(o));
                                for (; r--;) e.splice(n[r], 1)
                            }
                            return R = null, e
                        }, C = t.getText = function(e) {
                            var t, n = "",
                                r = 0,
                                o = e.nodeType;
                            if (o) {
                                if (1 === o || 9 === o || 11 === o) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                                } else if (3 === o || 4 === o) return e.nodeValue
                            } else
                                for (; t = e[r++];) n += C(t);
                            return n
                        }, E = t.selectors = {
                            cacheLength: 50,
                            createPseudo: r,
                            match: pe,
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
                                ATTR: function(e) {
                                    return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                },
                                CHILD: function(e) {
                                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                                },
                                PSEUDO: function(e) {
                                    var t, n = !e[6] && e[2];
                                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function(e) {
                                    var t = e.replace(be, xe).toLowerCase();
                                    return "*" === e ? function() {
                                        return !0
                                    } : function(e) {
                                        return e.nodeName && e.nodeName.toLowerCase() === t
                                    }
                                },
                                CLASS: function(e) {
                                    var t = G[e + " "];
                                    return t || (t = RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && G(e, function(e) {
                                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                    })
                                },
                                ATTR: function(e, n, r) {
                                    return function(o) {
                                        var i = t.attr(o, e);
                                        return null == i ? "!=" === n : n ? (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(ue, " ") + " ").indexOf(r) > -1 : "|=" === n ? i === r || i.slice(0, r.length + 1) === r + "-" : !1) : !0
                                    }
                                },
                                CHILD: function(e, t, n, r, o) {
                                    var i = "nth" !== e.slice(0, 3),
                                        u = "last" !== e.slice(-4),
                                        a = "of-type" === t;
                                    return 1 === r && 0 === o ? function(e) {
                                        return !!e.parentNode
                                    } : function(t, n, s) {
                                        var c, l, f, d, p, h, m = i !== u ? "nextSibling" : "previousSibling",
                                            g = t.parentNode,
                                            v = a && t.nodeName.toLowerCase(),
                                            y = !s && !a,
                                            T = !1;
                                        if (g) {
                                            if (i) {
                                                for (; m;) {
                                                    for (d = t; d = d[m];)
                                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                                    h = m = "only" === e && !h && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (h = [u ? g.firstChild : g.lastChild], u && y) {
                                                for (d = g, f = d[F] || (d[F] = {}), l = f[d.uniqueID] || (f[d.uniqueID] = {}), c = l[e] || [], p = c[0] === B && c[1], T = p && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (T = p = 0) || h.pop();)
                                                    if (1 === d.nodeType && ++T && d === t) {
                                                        l[e] = [B, p, T];
                                                        break
                                                    }
                                            } else if (y && (d = t, f = d[F] || (d[F] = {}), l = f[d.uniqueID] || (f[d.uniqueID] = {}), c = l[e] || [], p = c[0] === B && c[1], T = p), T === !1)
                                                for (;
                                                    (d = ++p && d && d[m] || (T = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++T || (y && (f = d[F] || (d[F] = {}), l = f[d.uniqueID] || (f[d.uniqueID] = {}), l[e] = [B, T]), d !== t)););
                                            return T -= o, T === r || T % r === 0 && T / r >= 0
                                        }
                                    }
                                },
                                PSEUDO: function(e, n) {
                                    var o, i = E.pseudos[e] || E.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                    return i[F] ? i(n) : i.length > 1 ? (o = [e, e, "", n], E.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                        for (var r, o = i(e, n), u = o.length; u--;) r = ee(e, o[u]), e[r] = !(t[r] = o[u])
                                    }) : function(e) {
                                        return i(e, 0, o)
                                    }) : i
                                }
                            },
                            pseudos: {
                                not: r(function(e) {
                                    var t = [],
                                        n = [],
                                        o = A(e.replace(ae, "$1"));
                                    return o[F] ? r(function(e, t, n, r) {
                                        for (var i, u = o(e, null, r, []), a = e.length; a--;)(i = u[a]) && (e[a] = !(t[a] = i))
                                    }) : function(e, r, i) {
                                        return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
                                    }
                                }),
                                has: r(function(e) {
                                    return function(n) {
                                        return t(e, n).length > 0
                                    }
                                }),
                                contains: r(function(e) {
                                    return e = e.replace(be, xe),
                                        function(t) {
                                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                                        }
                                }),
                                lang: r(function(e) {
                                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(),
                                        function(t) {
                                            var n;
                                            do
                                                if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                            while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1
                                        }
                                }),
                                target: function(t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id
                                },
                                root: function(e) {
                                    return e === k
                                },
                                focus: function(e) {
                                    return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                },
                                enabled: function(e) {
                                    return e.disabled === !1
                                },
                                disabled: function(e) {
                                    return e.disabled === !0
                                },
                                checked: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                                },
                                selected: function(e) {
                                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                                },
                                empty: function(e) {
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        if (e.nodeType < 6) return !1;
                                    return !0
                                },
                                parent: function(e) {
                                    return !E.pseudos.empty(e)
                                },
                                header: function(e) {
                                    return me.test(e.nodeName)
                                },
                                input: function(e) {
                                    return he.test(e.nodeName)
                                },
                                button: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && "button" === e.type || "button" === t
                                },
                                text: function(e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                },
                                first: c(function() {
                                    return [0]
                                }),
                                last: c(function(e, t) {
                                    return [t - 1]
                                }),
                                eq: c(function(e, t, n) {
                                    return [0 > n ? n + t : n]
                                }),
                                even: c(function(e, t) {
                                    for (var n = 0; t > n; n += 2) e.push(n);
                                    return e
                                }),
                                odd: c(function(e, t) {
                                    for (var n = 1; t > n; n += 2) e.push(n);
                                    return e
                                }),
                                lt: c(function(e, t, n) {
                                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                                    return e
                                }),
                                gt: c(function(e, t, n) {
                                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                                    return e
                                })
                            }
                        }, E.pseudos.nth = E.pseudos.eq;
                        for (b in {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            }) E.pseudos[b] = a(b);
                        for (b in {
                                submit: !0,
                                reset: !0
                            }) E.pseudos[b] = s(b);
                        return f.prototype = E.filters = E.pseudos, E.setFilters = new f, S = t.tokenize = function(e, n) {
                            var r, o, i, u, a, s, c, l = W[e + " "];
                            if (l) return n ? 0 : l.slice(0);
                            for (a = e, s = [], c = E.preFilter; a;) {
                                (!r || (o = se.exec(a))) && (o && (a = a.slice(o[0].length) || a), s.push(i = [])), r = !1, (o = ce.exec(a)) && (r = o.shift(), i.push({
                                    value: r,
                                    type: o[0].replace(ae, " ")
                                }), a = a.slice(r.length));
                                for (u in E.filter) !(o = pe[u].exec(a)) || c[u] && !(o = c[u](o)) || (r = o.shift(), i.push({
                                    value: r,
                                    type: u,
                                    matches: o
                                }), a = a.slice(r.length));
                                if (!r) break
                            }
                            return n ? a.length : a ? t.error(e) : W(e, s).slice(0)
                        }, A = t.compile = function(e, t) {
                            var n, r = [],
                                o = [],
                                i = V[e + " "];
                            if (!i) {
                                for (t || (t = S(e)), n = t.length; n--;) i = y(t[n]), i[F] ? r.push(i) : o.push(i);
                                i = V(e, T(o, r)), i.selector = e
                            }
                            return i
                        }, O = t.select = function(e, t, n, r) {
                            var o, i, u, a, s, c = "function" == typeof e && e,
                                f = !r && S(e = c.selector || e);
                            if (n = n || [], 1 === f.length) {
                                if (i = f[0] = f[0].slice(0), i.length > 2 && "ID" === (u = i[0]).type && x.getById && 9 === t.nodeType && L && E.relative[i[1].type]) {
                                    if (t = (E.find.ID(u.matches[0].replace(be, xe), t) || [])[0], !t) return n;
                                    c && (t = t.parentNode), e = e.slice(i.shift().value.length)
                                }
                                for (o = pe.needsContext.test(e) ? 0 : i.length; o-- && (u = i[o], !E.relative[a = u.type]);)
                                    if ((s = E.find[a]) && (r = s(u.matches[0].replace(be, xe), ye.test(i[0].type) && l(t.parentNode) || t))) {
                                        if (i.splice(o, 1), e = r.length && d(i), !e) return Q.apply(n, r), n;
                                        break
                                    }
                            }
                            return (c || A(e, f))(r, t, !L, n, !t || ye.test(e) && l(t.parentNode) || t), n
                        }, x.sortStable = F.split("").sort($).join("") === F, x.detectDuplicates = !!D, w(), x.sortDetached = o(function(e) {
                            return 1 & e.compareDocumentPosition(P.createElement("div"))
                        }), o(function(e) {
                            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                        }) || i("type|href|height|width", function(e, t, n) {
                            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                        }), x.attributes && o(function(e) {
                            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                        }) || i("value", function(e, t, n) {
                            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                        }), o(function(e) {
                            return null == e.getAttribute("disabled")
                        }) || i(te, function(e, t, n) {
                            var r;
                            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                        }), t
                    }(e), Tt.find = q, Tt.expr = q.selectors, Tt.expr[":"] = Tt.expr.pseudos, Tt.uniqueSort = Tt.unique = q.uniqueSort, Tt.text = q.getText, Tt.isXMLDoc = q.isXML, Tt.contains = q.contains, B = Tt.expr.match.needsContext, U = /^.[^:#\[\.,]*$/, Tt.filter = function(e, t, n) {
                        var r = t[0];
                        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Tt.find.matchesSelector(r, e) ? [r] : [] : Tt.find.matches(e, Tt.grep(t, function(e) {
                            return 1 === e.nodeType
                        }))
                    }, Tt.fn.extend({
                        find: function(e) {
                            var t, n = this.length,
                                r = [],
                                o = this;
                            if ("string" != typeof e) return this.pushStack(Tt(e).filter(function() {
                                for (t = 0; n > t; t++)
                                    if (Tt.contains(o[t], this)) return !0
                            }));
                            for (t = 0; n > t; t++) Tt.find(e, o[t], r);
                            return r = this.pushStack(n > 1 ? Tt.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
                        },
                        filter: function(e) {
                            return this.pushStack(n(this, e || [], !1))
                        },
                        not: function(e) {
                            return this.pushStack(n(this, e || [], !0))
                        },
                        is: function(e) {
                            return !!n(this, "string" == typeof e && B.test(e) ? Tt(e) : e || [], !1).length
                        }
                    }), W = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, V = Tt.fn.init = function(e, t, n) {
                        var r, o;
                        if (!e) return this;
                        if (n = n || G, "string" == typeof e) {
                            if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : W.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                            if (r[1]) {
                                if (t = t instanceof Tt ? t[0] : t, Tt.merge(this, Tt.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ct, !0)), F.test(r[1]) && Tt.isPlainObject(t))
                                    for (r in t) Tt.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                                return this
                            }
                            return o = ct.getElementById(r[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = ct, this.selector = e, this
                        }
                        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Tt.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(Tt) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Tt.makeArray(e, this))
                    }, V.prototype = Tt.fn, G = Tt(ct), $ = /\S+/g, X = e.location, Y = Tt.now(), z = /\?/, Tt.parseJSON = function(e) {
                        return JSON.parse(e + "")
                    }, Tt.parseXML = function(t) {
                        var n;
                        if (!t || "string" != typeof t) return null;
                        try {
                            n = (new e.DOMParser).parseFromString(t, "text/xml")
                        } catch (r) {
                            n = void 0
                        }
                        return (!n || n.getElementsByTagName("parsererror").length) && Tt.error("Invalid XML: " + t), n
                    }, K = function(e) {
                        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                    }, r.uid = 1, r.prototype = {
                        register: function(e, t) {
                            var n = t || {};
                            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                                value: n,
                                writable: !0,
                                configurable: !0
                            }), e[this.expando]
                        },
                        cache: function(e) {
                            if (!K(e)) return {};
                            var t = e[this.expando];
                            return t || (t = {}, K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: !0
                            }))), t
                        },
                        set: function(e, t, n) {
                            var r, o = this.cache(e);
                            if ("string" == typeof t) o[t] = n;
                            else
                                for (r in t) o[r] = t[r];
                            return o
                        },
                        get: function(e, t) {
                            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
                        },
                        access: function(e, t, n) {
                            var r;
                            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Tt.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
                        },
                        remove: function(e, t) {
                            var n, r, o, i = e[this.expando];
                            if (void 0 !== i) {
                                if (void 0 === t) this.register(e);
                                else {
                                    Tt.isArray(t) ? r = t.concat(t.map(Tt.camelCase)) : (o = Tt.camelCase(t), t in i ? r = [t, o] : (r = o, r = r in i ? [r] : r.match($) || [])), n = r.length;
                                    for (; n--;) delete i[r[n]]
                                }(void 0 === t || Tt.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                            }
                        },
                        hasData: function(e) {
                            var t = e[this.expando];
                            return void 0 !== t && !Tt.isEmptyObject(t)
                        }
                    }, J = new r, Q = /^key/, Z = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ee = /^([^.]*)(?:\.(.+)|)/, Tt.event = {
                        global: {},
                        add: function(e, t, n, r, o) {
                            var i, u, a, s, c, l, f, d, p, h, m, g = J.get(e);
                            if (g)
                                for (n.handler && (i = n, n = i.handler, o = i.selector), n.guid || (n.guid = Tt.guid++), (s = g.events) || (s = g.events = {}), (u = g.handle) || (u = g.handle = function(t) {
                                        return void 0 !== Tt && Tt.event.triggered !== t.type ? Tt.event.dispatch.apply(e, arguments) : void 0
                                    }), t = (t || "").match($) || [""], c = t.length; c--;) a = ee.exec(t[c]) || [], p = m = a[1], h = (a[2] || "").split(".").sort(), p && (f = Tt.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, f = Tt.event.special[p] || {}, l = Tt.extend({
                                    type: p,
                                    origType: m,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: o,
                                    needsContext: o && Tt.expr.match.needsContext.test(o),
                                    namespace: h.join(".")
                                }, i), (d = s[p]) || (d = s[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, h, u) !== !1 || e.addEventListener && e.addEventListener(p, u)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, l) : d.push(l), Tt.event.global[p] = !0)
                        },
                        remove: function(e, t, n, r, o) {
                            var i, u, a, s, c, l, f, d, p, h, m, g = J.hasData(e) && J.get(e);
                            if (g && (s = g.events)) {
                                for (t = (t || "").match($) || [""], c = t.length; c--;)
                                    if (a = ee.exec(t[c]) || [], p = m = a[1], h = (a[2] || "").split(".").sort(), p) {
                                        for (f = Tt.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = s[p] || [], a = a[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = i = d.length; i--;) l = d[i], !o && m !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (d.splice(i, 1), l.selector && d.delegateCount--, f.remove && f.remove.call(e, l));
                                        u && !d.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || Tt.removeEvent(e, p, g.handle), delete s[p])
                                    } else
                                        for (p in s) Tt.event.remove(e, p + t[c], n, r, !0);
                                Tt.isEmptyObject(s) && J.remove(e, "handle events")
                            }
                        },
                        dispatch: function(e) {
                            e = Tt.event.fix(e);
                            var t, n, r, o, i, u = [],
                                a = lt.call(arguments),
                                s = (J.get(this, "events") || {})[e.type] || [],
                                c = Tt.event.special[e.type] || {};
                            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                                for (u = Tt.event.handlers.call(this, e, s), t = 0;
                                    (o = u[t++]) && !e.isPropagationStopped();)
                                    for (e.currentTarget = o.elem, n = 0;
                                        (i = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((Tt.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                                return c.postDispatch && c.postDispatch.call(this, e), e.result
                            }
                        },
                        handlers: function(e, t) {
                            var n, r, o, i, u = [],
                                a = t.delegateCount,
                                s = e.target;
                            if (a && s.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                                for (; s !== this; s = s.parentNode || this)
                                    if (1 === s.nodeType && (s.disabled !== !0 || "click" !== e.type)) {
                                        for (r = [], n = 0; a > n; n++) i = t[n], o = i.selector + " ", void 0 === r[o] && (r[o] = i.needsContext ? Tt(o, this).index(s) > -1 : Tt.find(o, this, null, [s]).length), r[o] && r.push(i);
                                        r.length && u.push({
                                            elem: s,
                                            handlers: r
                                        })
                                    }
                            return a < t.length && u.push({
                                elem: this,
                                handlers: t.slice(a)
                            }), u
                        },
                        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                        fixHooks: {},
                        keyHooks: {
                            props: "char charCode key keyCode".split(" "),
                            filter: function(e, t) {
                                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                            }
                        },
                        mouseHooks: {
                            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                            filter: function(e, t) {
                                var n, r, o, i = t.button;
                                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || ct, r = n.documentElement, o = n.body, e.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
                            }
                        },
                        fix: function(e) {
                            if (e[Tt.expando]) return e;
                            var t, n, r, o = e.type,
                                i = e,
                                u = this.fixHooks[o];
                            for (u || (this.fixHooks[o] = u = Z.test(o) ? this.mouseHooks : Q.test(o) ? this.keyHooks : {}), r = u.props ? this.props.concat(u.props) : this.props, e = new Tt.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
                            return e.target || (e.target = ct), 3 === e.target.nodeType && (e.target = e.target.parentNode), u.filter ? u.filter(e, i) : e
                        },
                        special: {
                            load: {
                                noBubble: !0
                            },
                            focus: {
                                trigger: function() {
                                    return this !== u() && this.focus ? (this.focus(), !1) : void 0
                                },
                                delegateType: "focusin"
                            },
                            blur: {
                                trigger: function() {
                                    return this === u() && this.blur ? (this.blur(), !1) : void 0
                                },
                                delegateType: "focusout"
                            },
                            click: {
                                trigger: function() {
                                    return "checkbox" === this.type && this.click && Tt.nodeName(this, "input") ? (this.click(), !1) : void 0
                                },
                                _default: function(e) {
                                    return Tt.nodeName(e.target, "a")
                                }
                            },
                            beforeunload: {
                                postDispatch: function(e) {
                                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                                }
                            }
                        }
                    }, Tt.removeEvent = function(e, t, n) {
                        e.removeEventListener && e.removeEventListener(t, n)
                    }, Tt.Event = function(e, t) {
                        return this instanceof Tt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? o : i) : this.type = e, t && Tt.extend(this, t), this.timeStamp = e && e.timeStamp || Tt.now(), void(this[Tt.expando] = !0)) : new Tt.Event(e, t)
                    }, Tt.Event.prototype = {
                        constructor: Tt.Event,
                        isDefaultPrevented: i,
                        isPropagationStopped: i,
                        isImmediatePropagationStopped: i,
                        preventDefault: function() {
                            var e = this.originalEvent;
                            this.isDefaultPrevented = o, e && e.preventDefault()
                        },
                        stopPropagation: function() {
                            var e = this.originalEvent;
                            this.isPropagationStopped = o, e && e.stopPropagation()
                        },
                        stopImmediatePropagation: function() {
                            var e = this.originalEvent;
                            this.isImmediatePropagationStopped = o, e && e.stopImmediatePropagation(), this.stopPropagation()
                        }
                    }, Tt.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    }, function(e, t) {
                        Tt.event.special[e] = {
                            delegateType: t,
                            bindType: t,
                            handle: function(e) {
                                var n, r = this,
                                    o = e.relatedTarget,
                                    i = e.handleObj;
                                return (!o || o !== r && !Tt.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                            }
                        }
                    }), Tt.fn.extend({
                        on: function(e, t, n, r) {
                            return a(this, e, t, n, r)
                        },
                        one: function(e, t, n, r) {
                            return a(this, e, t, n, r, 1)
                        },
                        off: function(e, t, n) {
                            var r, o;
                            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Tt(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                            if ("object" == typeof e) {
                                for (o in e) this.off(o, t, e[o]);
                                return this
                            }
                            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = i), this.each(function() {
                                Tt.event.remove(this, e, n, t)
                            })
                        }
                    }), te = /^(?:focusinfocus|focusoutblur)$/, Tt.extend(Tt.event, {
                        trigger: function(t, n, r, o) {
                            var i, u, a, s, c, l, f, d = [r || ct],
                                p = gt.call(t, "type") ? t.type : t,
                                h = gt.call(t, "namespace") ? t.namespace.split(".") : [];
                            if (u = a = r = r || ct, 3 !== r.nodeType && 8 !== r.nodeType && !te.test(p + Tt.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[Tt.expando] ? t : new Tt.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Tt.makeArray(n, [t]), f = Tt.event.special[p] || {}, o || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                                if (!o && !f.noBubble && !Tt.isWindow(r)) {
                                    for (s = f.delegateType || p, te.test(s + p) || (u = u.parentNode); u; u = u.parentNode) d.push(u), a = u;
                                    a === (r.ownerDocument || ct) && d.push(a.defaultView || a.parentWindow || e)
                                }
                                for (i = 0;
                                    (u = d[i++]) && !t.isPropagationStopped();) t.type = i > 1 ? s : f.bindType || p, l = (J.get(u, "events") || {})[t.type] && J.get(u, "handle"), l && l.apply(u, n), l = c && u[c], l && l.apply && K(u) && (t.result = l.apply(u, n), t.result === !1 && t.preventDefault());
                                return t.type = p, o || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !K(r) || c && Tt.isFunction(r[p]) && !Tt.isWindow(r) && (a = r[c], a && (r[c] = null), Tt.event.triggered = p, r[p](), Tt.event.triggered = void 0, a && (r[c] = a)), t.result
                            }
                        },
                        simulate: function(e, t, n) {
                            var r = Tt.extend(new Tt.Event, n, {
                                type: e,
                                isSimulated: !0
                            });
                            Tt.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
                        }
                    }), Tt.fn.extend({
                        trigger: function(e, t) {
                            return this.each(function() {
                                Tt.event.trigger(e, t, this)
                            })
                        },
                        triggerHandler: function(e, t) {
                            var n = this[0];
                            return n ? Tt.event.trigger(e, t, n, !0) : void 0
                        }
                    }), Tt.Callbacks = function(e) {
                        e = "string" == typeof e ? s(e) : Tt.extend({}, e);
                        var t, n, r, o, i = [],
                            u = [],
                            a = -1,
                            c = function() {
                                for (o = e.once, r = t = !0; u.length; a = -1)
                                    for (n = u.shift(); ++a < i.length;) i[a].apply(n[0], n[1]) === !1 && e.stopOnFalse && (a = i.length, n = !1);
                                e.memory || (n = !1), t = !1, o && (i = n ? [] : "")
                            },
                            l = {
                                add: function() {
                                    return i && (n && !t && (a = i.length - 1, u.push(n)), function r(t) {
                                        Tt.each(t, function(t, n) {
                                            Tt.isFunction(n) ? e.unique && l.has(n) || i.push(n) : n && n.length && "string" !== Tt.type(n) && r(n)
                                        })
                                    }(arguments), n && !t && c()), this
                                },
                                remove: function() {
                                    return Tt.each(arguments, function(e, t) {
                                        for (var n;
                                            (n = Tt.inArray(t, i, n)) > -1;) i.splice(n, 1), a >= n && a--
                                    }), this
                                },
                                has: function(e) {
                                    return e ? Tt.inArray(e, i) > -1 : i.length > 0
                                },
                                empty: function() {
                                    return i && (i = []), this
                                },
                                disable: function() {
                                    return o = u = [], i = n = "", this
                                },
                                disabled: function() {
                                    return !i
                                },
                                lock: function() {
                                    return o = u = [], n || (i = n = ""), this
                                },
                                locked: function() {
                                    return !!o
                                },
                                fireWith: function(e, n) {
                                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], u.push(n), t || c()), this
                                },
                                fire: function() {
                                    return l.fireWith(this, arguments), this
                                },
                                fired: function() {
                                    return !!r
                                }
                            };
                        return l
                    }, Tt.extend({
                        Deferred: function(e) {
                            var t = [
                                    ["resolve", "done", Tt.Callbacks("once memory"), "resolved"],
                                    ["reject", "fail", Tt.Callbacks("once memory"), "rejected"],
                                    ["notify", "progress", Tt.Callbacks("memory")]
                                ],
                                n = "pending",
                                r = {
                                    state: function() {
                                        return n
                                    },
                                    always: function() {
                                        return o.done(arguments).fail(arguments), this
                                    },
                                    then: function() {
                                        var e = arguments;
                                        return Tt.Deferred(function(n) {
                                            Tt.each(t, function(t, i) {
                                                var u = Tt.isFunction(e[t]) && e[t];
                                                o[i[1]](function() {
                                                    var e = u && u.apply(this, arguments);
                                                    e && Tt.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                                                })
                                            }), e = null
                                        }).promise()
                                    },
                                    promise: function(e) {
                                        return null != e ? Tt.extend(e, r) : r
                                    }
                                },
                                o = {};
                            return r.pipe = r.then, Tt.each(t, function(e, i) {
                                var u = i[2],
                                    a = i[3];
                                r[i[1]] = u.add, a && u.add(function() {
                                    n = a
                                }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function() {
                                    return o[i[0] + "With"](this === o ? r : this, arguments), this
                                }, o[i[0] + "With"] = u.fireWith
                            }), r.promise(o), e && e.call(o, o), o
                        },
                        when: function(e) {
                            var t, n, r, o = 0,
                                i = lt.call(arguments),
                                u = i.length,
                                a = 1 !== u || e && Tt.isFunction(e.promise) ? u : 0,
                                s = 1 === a ? e : Tt.Deferred(),
                                c = function(e, n, r) {
                                    return function(o) {
                                        n[e] = this, r[e] = arguments.length > 1 ? lt.call(arguments) : o, r === t ? s.notifyWith(n, r) : --a || s.resolveWith(n, r)
                                    }
                                };
                            if (u > 1)
                                for (t = Array(u), n = Array(u), r = Array(u); u > o; o++) i[o] && Tt.isFunction(i[o].promise) ? i[o].promise().progress(c(o, n, t)).done(c(o, r, i)).fail(s.reject) : --a;
                            return a || s.resolveWith(r, i), s.promise()
                        }
                    }), ne = /#.*$/, re = /([?&])_=[^&]*/, oe = /^(.*?):[ \t]*([^\r\n]*)$/gm, ie = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ue = /^(?:GET|HEAD)$/, ae = /^\/\//, se = {}, ce = {}, le = "*/".concat("*"), fe = ct.createElement("a"), fe.href = X.href, Tt.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: X.href,
                            type: "GET",
                            isLocal: ie.test(X.protocol),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": le,
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
                                "text json": Tt.parseJSON,
                                "text xml": Tt.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function(e, t) {
                            return t ? f(f(e, Tt.ajaxSettings), t) : f(Tt.ajaxSettings, e)
                        },
                        ajaxPrefilter: c(se),
                        ajaxTransport: c(ce),
                        ajax: function(t, n) {
                            function r(t, n, r, a) {
                                var c, l, h, x, E, N = n;
                                2 !== C && (C = 2, s && e.clearTimeout(s), o = void 0, u = a || "", S.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, r && (x = d(m, S, r)), x = p(m, x, S, c), c ? (m.ifModified && (E = S.getResponseHeader("Last-Modified"), E && (Tt.lastModified[i] = E), E = S.getResponseHeader("etag"), E && (Tt.etag[i] = E)), 204 === t || "HEAD" === m.type ? N = "nocontent" : 304 === t ? N = "notmodified" : (N = x.state, l = x.data, h = x.error, c = !h)) : (h = N, (t || !N) && (N = "error", 0 > t && (t = 0))), S.status = t, S.statusText = (n || N) + "", c ? y.resolveWith(g, [l, N, S]) : y.rejectWith(g, [S, N, h]), S.statusCode(b), b = void 0, f && v.trigger(c ? "ajaxSuccess" : "ajaxError", [S, m, c ? l : h]), T.fireWith(g, [S, N]), f && (v.trigger("ajaxComplete", [S, m]), --Tt.active || Tt.event.trigger("ajaxStop")))
                            }
                            "object" == typeof t && (n = t, t = void 0), n = n || {};
                            var o, i, u, a, s, c, f, h, m = Tt.ajaxSetup({}, n),
                                g = m.context || m,
                                v = m.context && (g.nodeType || g.jquery) ? Tt(g) : Tt.event,
                                y = Tt.Deferred(),
                                T = Tt.Callbacks("once memory"),
                                b = m.statusCode || {},
                                x = {},
                                E = {},
                                C = 0,
                                N = "canceled",
                                S = {
                                    readyState: 0,
                                    getResponseHeader: function(e) {
                                        var t;
                                        if (2 === C) {
                                            if (!a)
                                                for (a = {}; t = oe.exec(u);) a[t[1].toLowerCase()] = t[2];
                                            t = a[e.toLowerCase()]
                                        }
                                        return null == t ? null : t
                                    },
                                    getAllResponseHeaders: function() {
                                        return 2 === C ? u : null
                                    },
                                    setRequestHeader: function(e, t) {
                                        var n = e.toLowerCase();
                                        return C || (e = E[n] = E[n] || e, x[e] = t), this
                                    },
                                    overrideMimeType: function(e) {
                                        return C || (m.mimeType = e), this
                                    },
                                    statusCode: function(e) {
                                        var t;
                                        if (e)
                                            if (2 > C)
                                                for (t in e) b[t] = [b[t], e[t]];
                                            else S.always(e[S.status]);
                                        return this
                                    },
                                    abort: function(e) {
                                        var t = e || N;
                                        return o && o.abort(t), r(0, t), this
                                    }
                                };
                            if (y.promise(S).complete = T.add, S.success = S.done, S.error = S.fail, m.url = ((t || m.url || X.href) + "").replace(ne, "").replace(ae, X.protocol + "//"), m.type = n.method || n.type || m.method || m.type, m.dataTypes = Tt.trim(m.dataType || "*").toLowerCase().match($) || [""], null == m.crossDomain) {
                                c = ct.createElement("a");
                                try {
                                    c.href = m.url, c.href = c.href, m.crossDomain = fe.protocol + "//" + fe.host != c.protocol + "//" + c.host
                                } catch (A) {
                                    m.crossDomain = !0
                                }
                            }
                            if (m.data && m.processData && "string" != typeof m.data && (m.data = Tt.param(m.data, m.traditional)), l(se, m, n, S), 2 === C) return S;
                            f = Tt.event && m.global, f && 0 === Tt.active++ && Tt.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !ue.test(m.type), i = m.url, m.hasContent || (m.data && (i = m.url += (z.test(i) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = re.test(i) ? i.replace(re, "$1_=" + Y++) : i + (z.test(i) ? "&" : "?") + "_=" + Y++)), m.ifModified && (Tt.lastModified[i] && S.setRequestHeader("If-Modified-Since", Tt.lastModified[i]), Tt.etag[i] && S.setRequestHeader("If-None-Match", Tt.etag[i])), (m.data && m.hasContent && m.contentType !== !1 || n.contentType) && S.setRequestHeader("Content-Type", m.contentType), S.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + le + "; q=0.01" : "") : m.accepts["*"]);
                            for (h in m.headers) S.setRequestHeader(h, m.headers[h]);
                            if (m.beforeSend && (m.beforeSend.call(g, S, m) === !1 || 2 === C)) return S.abort();
                            N = "abort";
                            for (h in {
                                    success: 1,
                                    error: 1,
                                    complete: 1
                                }) S[h](m[h]);
                            if (o = l(ce, m, n, S)) {
                                if (S.readyState = 1, f && v.trigger("ajaxSend", [S, m]), 2 === C) return S;
                                m.async && m.timeout > 0 && (s = e.setTimeout(function() {
                                    S.abort("timeout")
                                }, m.timeout));
                                try {
                                    C = 1, o.send(x, r)
                                } catch (A) {
                                    if (!(2 > C)) throw A;
                                    r(-1, A)
                                }
                            } else r(-1, "No Transport");
                            return S
                        },
                        getJSON: function(e, t, n) {
                            return Tt.get(e, t, n, "json")
                        },
                        getScript: function(e, t) {
                            return Tt.get(e, void 0, t, "script")
                        }
                    }), Tt.each(["get", "post"], function(e, t) {
                        Tt[t] = function(e, n, r, o) {
                            return Tt.isFunction(n) && (o = o || r, r = n, n = void 0), Tt.ajax(Tt.extend({
                                url: e,
                                type: t,
                                dataType: o,
                                data: n,
                                success: r
                            }, Tt.isPlainObject(e) && e))
                        }
                    }), de = [], pe = /(=)\?(?=&|$)|\?\?/, Tt.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function() {
                            var e = de.pop() || Tt.expando + "_" + Y++;
                            return this[e] = !0, e
                        }
                    }), Tt.ajaxPrefilter("json jsonp", function(t, n, r) {
                        var o, i, u, a = t.jsonp !== !1 && (pe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && pe.test(t.data) && "data");
                        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = Tt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(pe, "$1" + o) : t.jsonp !== !1 && (t.url += (z.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                            return u || Tt.error(o + " was not called"), u[0]
                        }, t.dataTypes[0] = "json", i = e[o], e[o] = function() {
                            u = arguments
                        }, r.always(function() {
                            void 0 === i ? Tt(e).removeProp(o) : e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, de.push(o)), u && Tt.isFunction(i) && i(u[0]), u = i = void 0
                        }), "script") : void 0
                    }), Tt.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /\b(?:java|ecma)script\b/
                        },
                        converters: {
                            "text script": function(e) {
                                return Tt.globalEval(e), e
                            }
                        }
                    }), Tt.ajaxPrefilter("script", function(e) {
                        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
                    }), Tt.ajaxTransport("script", function(e) {
                        if (e.crossDomain) {
                            var t, n;
                            return {
                                send: function(r, o) {
                                    t = Tt("<script>").prop({
                                        charset: e.scriptCharset,
                                        src: e.url
                                    }).on("load error", n = function(e) {
                                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                                    }), ct.head.appendChild(t[0])
                                },
                                abort: function() {
                                    n && n()
                                }
                            }
                        }
                    }), Tt.ajaxSettings.xhr = function() {
                        try {
                            return new e.XMLHttpRequest
                        } catch (t) {}
                    }, he = {
                        0: 200,
                        1223: 204
                    }, me = Tt.ajaxSettings.xhr(), vt.cors = !!me && "withCredentials" in me, vt.ajax = me = !!me, Tt.ajaxTransport(function(t) {
                        var n, r;
                        return vt.cors || me && !t.crossDomain ? {
                            send: function(o, i) {
                                var u, a = t.xhr();
                                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                                    for (u in t.xhrFields) a[u] = t.xhrFields[u];
                                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                                for (u in o) a.setRequestHeader(u, o[u]);
                                n = function(e) {
                                    return function() {
                                        n && (n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? i(0, "error") : i(a.status, a.statusText) : i(he[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                            binary: a.response
                                        } : {
                                            text: a.responseText
                                        }, a.getAllResponseHeaders()))
                                    }
                                }, a.onload = n(), r = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                                    4 === a.readyState && e.setTimeout(function() {
                                        n && r()
                                    })
                                }, n = n("abort");
                                try {
                                    a.send(t.hasContent && t.data || null)
                                } catch (s) {
                                    if (n) throw s
                                }
                            },
                            abort: function() {
                                n && n()
                            }
                        } : void 0
                    }), ge = function St(e, t, n, r, o, i, u) {
                        var a = 0,
                            s = e.length,
                            c = null == n;
                        if ("object" === Tt.type(n)) {
                            o = !0;
                            for (a in n) St(e, t, a, n[a], !0, i, u)
                        } else if (void 0 !== r && (o = !0, Tt.isFunction(r) || (u = !0), c && (u ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                                return c.call(Tt(e), n)
                            })), t))
                            for (; s > a; a++) t(e[a], n, u ? r : r.call(e[a], a, t(e[a], n)));
                        return o ? e : c ? t.call(e) : s ? t(e[0], n) : i
                    }, ve = /^(?:checkbox|radio)$/i, ye = /<([\w:-]+)/, Te = /^$|\/(?:java|ecma)script/i, be = {
                        option: [1, "<select multiple='multiple'>", "</select>"],
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""]
                    }, be.optgroup = be.option, be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, be.th = be.td, xe = /<|&#?\w+;/,
                    function() {
                        var e = ct.createDocumentFragment(),
                            t = e.appendChild(ct.createElement("div")),
                            n = ct.createElement("input");
                        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), vt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", vt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
                    }(), Ee = new r, Ce = function(e, t, n) {
                        for (var r = [], o = void 0 !== n;
                            (e = e[t]) && 9 !== e.nodeType;)
                            if (1 === e.nodeType) {
                                if (o && Tt(e).is(n)) break;
                                r.push(e)
                            }
                        return r
                    }, Ne = function(e, t) {
                        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                        return n
                    }, Se = /^(?:parents|prev(?:Until|All))/, Ae = {
                        children: !0,
                        contents: !0,
                        next: !0,
                        prev: !0
                    }, Tt.fn.extend({
                        has: function(e) {
                            var t = Tt(e, this),
                                n = t.length;
                            return this.filter(function() {
                                for (var e = 0; n > e; e++)
                                    if (Tt.contains(this, t[e])) return !0
                            })
                        },
                        closest: function(e, t) {
                            for (var n, r = 0, o = this.length, i = [], u = B.test(e) || "string" != typeof e ? Tt(e, t || this.context) : 0; o > r; r++)
                                for (n = this[r]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (u ? u.index(n) > -1 : 1 === n.nodeType && Tt.find.matchesSelector(n, e))) {
                                        i.push(n);
                                        break
                                    }
                            return this.pushStack(i.length > 1 ? Tt.uniqueSort(i) : i)
                        },
                        index: function(e) {
                            return e ? "string" == typeof e ? pt.call(Tt(e), this[0]) : pt.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                        },
                        add: function(e, t) {
                            return this.pushStack(Tt.uniqueSort(Tt.merge(this.get(), Tt(e, t))))
                        },
                        addBack: function(e) {
                            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                        }
                    }), Tt.each({
                        parent: function At(e) {
                            var At = e.parentNode;
                            return At && 11 !== At.nodeType ? At : null
                        },
                        parents: function(e) {
                            return Ce(e, "parentNode")
                        },
                        parentsUntil: function(e, t, n) {
                            return Ce(e, "parentNode", n)
                        },
                        next: function(e) {
                            return v(e, "nextSibling")
                        },
                        prev: function(e) {
                            return v(e, "previousSibling")
                        },
                        nextAll: function(e) {
                            return Ce(e, "nextSibling")
                        },
                        prevAll: function(e) {
                            return Ce(e, "previousSibling")
                        },
                        nextUntil: function(e, t, n) {
                            return Ce(e, "nextSibling", n)
                        },
                        prevUntil: function(e, t, n) {
                            return Ce(e, "previousSibling", n)
                        },
                        siblings: function(e) {
                            return Ne((e.parentNode || {}).firstChild, e)
                        },
                        children: function(e) {
                            return Ne(e.firstChild)
                        },
                        contents: function(e) {
                            return e.contentDocument || Tt.merge([], e.childNodes)
                        }
                    }, function(e, t) {
                        Tt.fn[e] = function(n, r) {
                            var o = Tt.map(this, t, n);
                            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = Tt.filter(r, o)), this.length > 1 && (Ae[e] || Tt.uniqueSort(o), Se.test(e) && o.reverse()), this.pushStack(o)
                        }
                    }), Oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Ie = /<script|<style|<link/i, Re = /checked\s*(?:[^=]|=\s*.checked.)/i, De = /^true\/(.*)/, we = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Tt.extend({
                        htmlPrefilter: function(e) {
                            return e.replace(Oe, "<$1></$2>")
                        },
                        clone: function Ot(e, t, n) {
                            var r, o, i, u, Ot = e.cloneNode(!0),
                                a = Tt.contains(e.ownerDocument, e);
                            if (!(vt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Tt.isXMLDoc(e)))
                                for (u = h(Ot), i = h(e), r = 0, o = i.length; o > r; r++) E(i[r], u[r]);
                            if (t)
                                if (n)
                                    for (i = i || h(e), u = u || h(Ot), r = 0, o = i.length; o > r; r++) x(i[r], u[r]);
                                else x(e, Ot);
                            return u = h(Ot, "script"), u.length > 0 && m(u, !a && h(e, "script")), Ot
                        },
                        cleanData: function(e) {
                            for (var t, n, r, o = Tt.event.special, i = 0; void 0 !== (n = e[i]); i++)
                                if (K(n)) {
                                    if (t = n[J.expando]) {
                                        if (t.events)
                                            for (r in t.events) o[r] ? Tt.event.remove(n, r) : Tt.removeEvent(n, r, t.handle);
                                        n[J.expando] = void 0
                                    }
                                    n[Ee.expando] && (n[Ee.expando] = void 0)
                                }
                        }
                    }), Tt.fn.extend({
                        domManip: C,
                        detach: function(e) {
                            return N(this, e, !0)
                        },
                        remove: function(e) {
                            return N(this, e)
                        },
                        text: function(e) {
                            return ge(this, function(e) {
                                return void 0 === e ? Tt.text(this) : this.empty().each(function() {
                                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                                })
                            }, null, e, arguments.length)
                        },
                        append: function() {
                            return C(this, arguments, function(e) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var t = y(this, e);
                                    t.appendChild(e)
                                }
                            })
                        },
                        prepend: function() {
                            return C(this, arguments, function(e) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var t = y(this, e);
                                    t.insertBefore(e, t.firstChild)
                                }
                            })
                        },
                        before: function() {
                            return C(this, arguments, function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this)
                            })
                        },
                        after: function() {
                            return C(this, arguments, function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                            })
                        },
                        empty: function() {
                            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Tt.cleanData(h(e, !1)), e.textContent = "");
                            return this
                        },
                        clone: function(e, t) {
                            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                                return Tt.clone(this, e, t)
                            })
                        },
                        html: function(e) {
                            return ge(this, function(e) {
                                var t = this[0] || {},
                                    n = 0,
                                    r = this.length;
                                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                if ("string" == typeof e && !Ie.test(e) && !be[(ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                                    e = Tt.htmlPrefilter(e);
                                    try {
                                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Tt.cleanData(h(t, !1)), t.innerHTML = e);
                                        t = 0
                                    } catch (o) {}
                                }
                                t && this.empty().append(e)
                            }, null, e, arguments.length)
                        },
                        replaceWith: function() {
                            var e = [];
                            return C(this, arguments, function(t) {
                                var n = this.parentNode;
                                Tt.inArray(this, e) < 0 && (Tt.cleanData(h(this)), n && n.replaceChild(t, this))
                            }, e)
                        }
                    }), Tt.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    }, function(e, t) {
                        Tt.fn[e] = function(e) {
                            for (var n, r = [], o = Tt(e), i = o.length - 1, u = 0; i >= u; u++) n = u === i ? this : this.clone(!0), Tt(o[u])[t](n), dt.apply(r, n.get());
                            return this.pushStack(r)
                        }
                    }), Tt.parseHTML = function(e, t, n) {
                        if (!e || "string" != typeof e) return null;
                        "boolean" == typeof t && (n = t, t = !1), t = t || ct;
                        var r = F.exec(e),
                            o = !n && [];
                        return r ? [t.createElement(r[1])] : (r = g([e], t, o), o && o.length && Tt(o).remove(), Tt.merge([], r.childNodes))
                    }, Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ke = /[A-Z]/g, Tt.extend({
                        hasData: function(e) {
                            return Ee.hasData(e) || J.hasData(e)
                        },
                        data: function(e, t, n) {
                            return Ee.access(e, t, n)
                        },
                        removeData: function(e, t) {
                            Ee.remove(e, t)
                        },
                        _data: function(e, t, n) {
                            return J.access(e, t, n)
                        },
                        _removeData: function(e, t) {
                            J.remove(e, t)
                        }
                    }), Tt.fn.extend({
                        data: function It(e, t) {
                            var n, r, It, o = this[0],
                                i = o && o.attributes;
                            if (void 0 === e) {
                                if (this.length && (It = Ee.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                                    for (n = i.length; n--;) i[n] && (r = i[n].name, 0 === r.indexOf("data-") && (r = Tt.camelCase(r.slice(5)), S(o, r, It[r])));
                                    J.set(o, "hasDataAttrs", !0)
                                }
                                return It
                            }
                            return "object" == typeof e ? this.each(function() {
                                Ee.set(this, e)
                            }) : ge(this, function(t) {
                                var n, r;
                                if (o && void 0 === t) {
                                    if (n = Ee.get(o, e) || Ee.get(o, e.replace(ke, "-$&").toLowerCase()), void 0 !== n) return n;
                                    if (r = Tt.camelCase(e), n = Ee.get(o, r), void 0 !== n) return n;
                                    if (n = S(o, r, void 0), void 0 !== n) return n
                                } else r = Tt.camelCase(e), this.each(function() {
                                    var n = Ee.get(this, r);
                                    Ee.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && Ee.set(this, e, t)
                                })
                            }, null, t, arguments.length > 1, null, !0)
                        },
                        removeData: function(e) {
                            return this.each(function() {
                                Ee.remove(this, e)
                            })
                        }
                    }), Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, _e = /^margin/, je = RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$", "i"), Me = RegExp("^(" + Le + ")(?!px)[a-z%]+$", "i"), He = ["Top", "Right", "Bottom", "Left"], Fe = function(e, t) {
                        return e = t || e, "none" === Tt.css(e, "display") || !Tt.contains(e.ownerDocument, e)
                    }, qe = function(t) {
                        var n = t.ownerDocument.defaultView;
                        return n && n.opener || (n = e), n.getComputedStyle(t)
                    }, Be = function(e, t, n, r) {
                        var o, i, u = {};
                        for (i in t) u[i] = e.style[i], e.style[i] = t[i];
                        o = n.apply(e, r || []);
                        for (i in t) e.style[i] = u[i];
                        return o
                    }, Ue = ct.documentElement,
                    function() {
                        function t() {
                            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ue.appendChild(u);
                            var t = e.getComputedStyle(a);
                            n = "1%" !== t.top, i = "2px" === t.marginLeft, r = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Ue.removeChild(u)
                        }
                        var n, r, o, i, u = ct.createElement("div"),
                            a = ct.createElement("div");
                        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", vt.clearCloneStyle = "content-box" === a.style.backgroundClip, u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.appendChild(a), Tt.extend(vt, {
                            pixelPosition: function() {
                                return t(), n
                            },
                            boxSizingReliable: function() {
                                return null == r && t(), r
                            },
                            pixelMarginRight: function() {
                                return null == r && t(), o
                            },
                            reliableMarginLeft: function() {
                                return null == r && t(), i
                            },
                            reliableMarginRight: function() {
                                var t, n = a.appendChild(ct.createElement("div"));
                                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Ue.appendChild(u), t = !parseFloat(e.getComputedStyle(n).marginRight), Ue.removeChild(u), a.removeChild(n), t
                            }
                        }))
                    }(), We = {
                        HTML: "block",
                        BODY: "block"
                    }, Tt.fn.ready = function(e) {
                        return Tt.ready.promise().done(e), this
                    }, Tt.extend({
                        isReady: !1,
                        readyWait: 1,
                        holdReady: function(e) {
                            e ? Tt.readyWait++ : Tt.ready(!0)
                        },
                        ready: function(e) {
                            (e === !0 ? --Tt.readyWait : Tt.isReady) || (Tt.isReady = !0, e !== !0 && --Tt.readyWait > 0 || (Ve.resolveWith(ct, [Tt]), Tt.fn.triggerHandler && (Tt(ct).triggerHandler("ready"), Tt(ct).off("ready"))))
                        }
                    }), Tt.ready.promise = function(t) {
                        return Ve || (Ve = Tt.Deferred(), "complete" === ct.readyState || "loading" !== ct.readyState && !ct.documentElement.doScroll ? e.setTimeout(Tt.ready) : (ct.addEventListener("DOMContentLoaded", w), e.addEventListener("load", w))), Ve.promise(t)
                    }, Tt.ready.promise(), $e = /^(none|table(?!-c[ea]).+)/, Xe = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    }, Ye = {
                        letterSpacing: "0",
                        fontWeight: "400"
                    }, ze = ["Webkit", "O", "Moz", "ms"], Ke = ct.createElement("div").style, Tt.extend({
                        cssHooks: {
                            opacity: {
                                get: function(e, t) {
                                    if (t) {
                                        var n = A(e, "opacity");
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
                            "float": "cssFloat"
                        },
                        style: function Rt(e, t, n, r) {
                            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                var o, i, u, a = Tt.camelCase(t),
                                    Rt = e.style;
                                return t = Tt.cssProps[a] || (Tt.cssProps[a] = P(a) || a), u = Tt.cssHooks[t] || Tt.cssHooks[a], void 0 === n ? u && "get" in u && void 0 !== (o = u.get(e, !1, r)) ? o : Rt[t] : (i = typeof n, "string" === i && (o = je.exec(n)) && o[1] && (n = O(e, t, o), i = "number"), null != n && n === n && ("number" === i && (n += o && o[3] || (Tt.cssNumber[a] ? "" : "px")), vt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (Rt[t] = "inherit"), u && "set" in u && void 0 === (n = u.set(e, n, r)) || (Rt[t] = n)), void 0)
                            }
                        },
                        css: function(e, t, n, r) {
                            var o, i, u, a = Tt.camelCase(t);
                            return t = Tt.cssProps[a] || (Tt.cssProps[a] = P(a) || a), u = Tt.cssHooks[t] || Tt.cssHooks[a], u && "get" in u && (o = u.get(e, !0, n)), void 0 === o && (o = A(e, t, r)), "normal" === o && t in Ye && (o = Ye[t]), "" === n || n ? (i = parseFloat(o), n === !0 || isFinite(i) ? i || 0 : o) : o
                        }
                    }), Tt.each(["height", "width"], function(e, t) {
                        Tt.cssHooks[t] = {
                            get: function(e, n, r) {
                                return n ? $e.test(Tt.css(e, "display")) && 0 === e.offsetWidth ? Be(e, Xe, function() {
                                    return _(e, t, r)
                                }) : _(e, t, r) : void 0
                            },
                            set: function(e, n, r) {
                                var o, i = r && qe(e),
                                    u = r && L(e, t, r, "border-box" === Tt.css(e, "boxSizing", !1, i), i);
                                return u && (o = je.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = Tt.css(e, t)), k(e, n, u)
                            }
                        }
                    }), Tt.cssHooks.marginLeft = D(vt.reliableMarginLeft, function(e, t) {
                        return t ? (parseFloat(A(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
                            marginLeft: 0
                        }, function() {
                            return e.getBoundingClientRect().left
                        })) + "px" : void 0
                    }), Tt.cssHooks.marginRight = D(vt.reliableMarginRight, function(e, t) {
                        return t ? Be(e, {
                            display: "inline-block"
                        }, A, [e, "marginRight"]) : void 0
                    }), Tt.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    }, function(e, t) {
                        Tt.cssHooks[e + t] = {
                            expand: function(n) {
                                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + He[r] + t] = i[r] || i[r - 2] || i[0];
                                return o
                            }
                        }, _e.test(e) || (Tt.cssHooks[e + t].set = k)
                    }), Tt.fn.extend({
                        css: function(e, t) {
                            return ge(this, function(e, t, n) {
                                var r, o, i = {},
                                    u = 0;
                                if (Tt.isArray(t)) {
                                    for (r = qe(e), o = t.length; o > u; u++) i[t[u]] = Tt.css(e, t[u], !1, r);
                                    return i
                                }
                                return void 0 !== n ? Tt.style(e, t, n) : Tt.css(e, t)
                            }, e, t, arguments.length > 1)
                        },
                        show: function() {
                            return j(this, !0)
                        },
                        hide: function() {
                            return j(this)
                        },
                        toggle: function(e) {
                            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                                Fe(this) ? Tt(this).show() : Tt(this).hide()
                            })
                        }
                    }),
                    function() {
                        var e = ct.createElement("input"),
                            t = ct.createElement("select"),
                            n = t.appendChild(ct.createElement("option"));
                        e.type = "checkbox", vt.checkOn = "" !== e.value, vt.optSelected = n.selected, t.disabled = !0, vt.optDisabled = !n.disabled, e = ct.createElement("input"), e.value = "t", e.type = "radio", vt.radioValue = "t" === e.value
                    }(), Qe = Tt.expr.attrHandle, Tt.fn.extend({
                        attr: function(e, t) {
                            return ge(this, Tt.attr, e, t, arguments.length > 1)
                        },
                        removeAttr: function(e) {
                            return this.each(function() {
                                Tt.removeAttr(this, e)
                            })
                        }
                    }), Tt.extend({
                        attr: function(e, t, n) {
                            var r, o, i = e.nodeType;
                            if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? Tt.prop(e, t, n) : (1 === i && Tt.isXMLDoc(e) || (t = t.toLowerCase(), o = Tt.attrHooks[t] || (Tt.expr.match.bool.test(t) ? Je : void 0)), void 0 !== n ? null === n ? void Tt.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : (r = Tt.find.attr(e, t), null == r ? void 0 : r))
                        },
                        attrHooks: {
                            type: {
                                set: function(e, t) {
                                    if (!vt.radioValue && "radio" === t && Tt.nodeName(e, "input")) {
                                        var n = e.value;
                                        return e.setAttribute("type", t), n && (e.value = n), t
                                    }
                                }
                            }
                        },
                        removeAttr: function(e, t) {
                            var n, r, o = 0,
                                i = t && t.match($);
                            if (i && 1 === e.nodeType)
                                for (; n = i[o++];) r = Tt.propFix[n] || n, Tt.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
                        }
                    }), Je = {
                        set: function(e, t, n) {
                            return t === !1 ? Tt.removeAttr(e, n) : e.setAttribute(n, n), n
                        }
                    }, Tt.each(Tt.expr.match.bool.source.match(/\w+/g), function(e, t) {
                        var n = Qe[t] || Tt.find.attr;
                        Qe[t] = function(e, t, r) {
                            var o, i;
                            return r || (i = Qe[t], Qe[t] = o, o = null != n(e, t, r) ? t.toLowerCase() : null, Qe[t] = i), o
                        }
                    }), Ze = /^(?:input|select|textarea|button)$/i, et = /^(?:a|area)$/i, Tt.fn.extend({
                        prop: function(e, t) {
                            return ge(this, Tt.prop, e, t, arguments.length > 1)
                        },
                        removeProp: function(e) {
                            return this.each(function() {
                                delete this[Tt.propFix[e] || e]
                            })
                        }
                    }), Tt.extend({
                        prop: function(e, t, n) {
                            var r, o, i = e.nodeType;
                            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && Tt.isXMLDoc(e) || (t = Tt.propFix[t] || t, o = Tt.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
                        },
                        propHooks: {
                            tabIndex: {
                                get: function(e) {
                                    var t = Tt.find.attr(e, "tabindex");
                                    return t ? parseInt(t, 10) : Ze.test(e.nodeName) || et.test(e.nodeName) && e.href ? 0 : -1
                                }
                            }
                        },
                        propFix: {
                            "for": "htmlFor",
                            "class": "className"
                        }
                    }), vt.optSelected || (Tt.propHooks.selected = {
                        get: function(e) {
                            var t = e.parentNode;
                            return t && t.parentNode && t.parentNode.selectedIndex, null
                        },
                        set: function(e) {
                            var t = e.parentNode;
                            t && (t.selectedIndex, t && t.parentNode && t.parentNode.selectedIndex)
                        }
                    }), Tt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                        Tt.propFix[this.toLowerCase()] = this
                    }), tt = /[\t\r\n\f]/g, Tt.fn.extend({
                        addClass: function(e) {
                            var t, n, r, o, i, u, a, s = 0;
                            if (Tt.isFunction(e)) return this.each(function(t) {
                                Tt(this).addClass(e.call(this, t, M(this)))
                            });
                            if ("string" == typeof e && e)
                                for (t = e.match($) || []; n = this[s++];)
                                    if (o = M(n), r = 1 === n.nodeType && (" " + o + " ").replace(tt, " ")) {
                                        for (u = 0; i = t[u++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                        a = Tt.trim(r), o !== a && n.setAttribute("class", a)
                                    }
                            return this
                        },
                        removeClass: function(e) {
                            var t, n, r, o, i, u, a, s = 0;
                            if (Tt.isFunction(e)) return this.each(function(t) {
                                Tt(this).removeClass(e.call(this, t, M(this)))
                            });
                            if (!arguments.length) return this.attr("class", "");
                            if ("string" == typeof e && e)
                                for (t = e.match($) || []; n = this[s++];)
                                    if (o = M(n), r = 1 === n.nodeType && (" " + o + " ").replace(tt, " ")) {
                                        for (u = 0; i = t[u++];)
                                            for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                                        a = Tt.trim(r), o !== a && n.setAttribute("class", a)
                                    }
                            return this
                        },
                        toggleClass: function(e, t) {
                            var n = typeof e;
                            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Tt.isFunction(e) ? this.each(function(n) {
                                Tt(this).toggleClass(e.call(this, n, M(this), t), t)
                            }) : this.each(function() {
                                var t, r, o, i;
                                if ("string" === n)
                                    for (r = 0, o = Tt(this), i = e.match($) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                                else(void 0 === e || "boolean" === n) && (t = M(this), t && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : J.get(this, "__className__") || ""))
                            })
                        },
                        hasClass: function(e) {
                            var t, n, r = 0;
                            for (t = " " + e + " "; n = this[r++];)
                                if (1 === n.nodeType && (" " + M(n) + " ").replace(tt, " ").indexOf(t) > -1) return !0;
                            return !1
                        }
                    }), nt = /\r/g, Tt.fn.extend({
                        val: function(e) {
                            var t, n, r, o = this[0]; {
                                if (arguments.length) return r = Tt.isFunction(e), this.each(function(n) {
                                    var o;
                                    1 === this.nodeType && (o = r ? e.call(this, n, Tt(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Tt.isArray(o) && (o = Tt.map(o, function(e) {
                                        return null == e ? "" : e + ""
                                    })), t = Tt.valHooks[this.type] || Tt.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                                });
                                if (o) return t = Tt.valHooks[o.type] || Tt.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(nt, "") : null == n ? "" : n)
                            }
                        }
                    }), Tt.extend({
                        valHooks: {
                            option: {
                                get: function(e) {
                                    return Tt.trim(e.value)
                                }
                            },
                            select: {
                                get: function(e) {
                                    for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, u = i ? null : [], a = i ? o + 1 : r.length, s = 0 > o ? a : i ? o : 0; a > s; s++)
                                        if (n = r[s], (n.selected || s === o) && (vt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Tt.nodeName(n.parentNode, "optgroup"))) {
                                            if (t = Tt(n).val(), i) return t;
                                            u.push(t)
                                        }
                                    return u
                                },
                                set: function(e, t) {
                                    for (var n, r, o = e.options, i = Tt.makeArray(t), u = o.length; u--;) r = o[u], (r.selected = Tt.inArray(Tt.valHooks.option.get(r), i) > -1) && (n = !0);
                                    return n || (e.selectedIndex = -1), i
                                }
                            }
                        }
                    }), Tt.each(["radio", "checkbox"], function() {
                        Tt.valHooks[this] = {
                            set: function(e, t) {
                                return Tt.isArray(t) ? e.checked = Tt.inArray(Tt(e).val(), t) > -1 : void 0
                            }
                        }, vt.checkOn || (Tt.valHooks[this].get = function(e) {
                            return null === e.getAttribute("value") ? "on" : e.value
                        })
                    }), rt = /%20/g, ot = /\[\]$/, it = /\r?\n/g, ut = /^(?:submit|button|image|reset|file)$/i, at = /^(?:input|select|textarea|keygen)/i, Tt.param = function(e, t) {
                        var n, r = [],
                            o = function(e, t) {
                                t = Tt.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                            };
                        if (void 0 === t && (t = Tt.ajaxSettings && Tt.ajaxSettings.traditional), Tt.isArray(e) || e.jquery && !Tt.isPlainObject(e)) Tt.each(e, function() {
                            o(this.name, this.value)
                        });
                        else
                            for (n in e) H(n, e[n], t, o);
                        return r.join("&").replace(rt, "+")
                    }, Tt.fn.extend({
                        serialize: function() {
                            return Tt.param(this.serializeArray())
                        },
                        serializeArray: function() {
                            return this.map(function() {
                                var e = Tt.prop(this, "elements");
                                return e ? Tt.makeArray(e) : this
                            }).filter(function() {
                                var e = this.type;
                                return this.name && !Tt(this).is(":disabled") && at.test(this.nodeName) && !ut.test(e) && (this.checked || !ve.test(e))
                            }).map(function(e, t) {
                                var n = Tt(this).val();
                                return null == n ? null : Tt.isArray(n) ? Tt.map(n, function(e) {
                                    return {
                                        name: t.name,
                                        value: e.replace(it, "\r\n")
                                    }
                                }) : {
                                    name: t.name,
                                    value: n.replace(it, "\r\n")
                                }
                            }).get()
                        }
                    }), Tt
            });
        e(Lu), t(Lu), Nr = 6e4, Sr = "mbox-name-", Ar = "mboxDefault", Or = "/m2/{clientCode}/mbox/json", Ir = 250, Rr = "Mbox name is not present or is too long.", Dr = "the mbox environment is disabled.", wr = "-clicked", Pr = "x-only", kr = "disabled", Lr = "mboxedge", _r = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, jr = /(?:^|&)([^&=]*)=?([^&]*)/gi, Mr = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"], Hr = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/, Fr = /([^:]*)(:[0-9]{0,5})?/, qr = /([^\.]+\.[^\.]{3}|[^\.]+\.[^\.]+\.[^\.]{2})$/, Br = "www.", Ur = "write", Gr = "at-data-src", Wr = "at-script-marker", Vr = "at-id-body-style", $r = "redirect:event", Xr = "show:body", Yr = "ready:dom", zr = encodeURIComponent, Kr = decodeURIComponent, Jr = "mboxMCAVID", Qr = "mboxAAMB", Zr = "mboxMCGLH", eo = "mboxMCGVID", to = "mboxMCSDID", no = "colorDepth", ro = "screenHeight", oo = "screenWidth", io = "browserHeight", uo = "browserTimeOffset", ao = "browserWidth", so = "mboxCallback", co = "mboxTarget", lo = "clickTrackId", fo = "mboxXDomain", po = "mboxCount", ho = "mboxHost", mo = "mbox", go = "mboxPage", vo = "mboxSession", yo = "mboxReferrer", To = "mboxTime", bo = "mboxPC", xo = "mboxURL", Eo = "mboxVersion", Co = function() {}, No = "success", So = "warning", Ao = "error", Oo = "mboxDebug", Io = "mboxDisable", Ro = "mboxEdit", Do = "[Target]", wo = "check", Po = "mbox", ko = "PC", Lo = "session", _o = "mboxEdgeServer", jo = RegExp("('|\")"), Mo = "https://", Ho = "", Fo = "Visitor Api:", qo = "Options argument is required", Bo = {
            MBOX_PARAM_VALIDATOR: lt("mbox", ht, Rr),
            OPTIONS_IS_REQUIRED: ft(j, qo),
            URL_PARAM_IS_MANDATORY: lt("url", O, dt("url")),
            SUCCESS_PARAM_IS_MANDATORY: lt("success", k, dt("success")),
            ERROR_PARAM_IS_MANDATORY: lt("error", k, dt("error")),
            MBOX_OPTION_PARAM_VALIDATOR: lt("mbox", ht, Rr)
        }, Uo = "executeAjax():", Go = Uo + " jsonp param requires type param to be jsonp", Wo = Uo + ' unknown method "{0}"', Vo = Uo + ' unknown type "{0}"', $o = Uo + " timeout param is not a number", Xo = Uo + ' invalid method "{0}" for request type "{1}"', Yo = Uo + " invalid params, should be object", zo = "type", Ko = "method", Jo = "jsonp", Qo = "params", Zo = "timeout", ei = [Bo.OPTIONS_IS_REQUIRED, Bo.URL_PARAM_IS_MANDATORY, Bo.SUCCESS_PARAM_IS_MANDATORY, Bo.ERROR_PARAM_IS_MANDATORY], ti = {
            JSON: "json",
            JSONP: "jsonp",
            SCRIPT: "script"
        }, ni = {
            GET: "get",
            POST: "post"
        }, ri = {
            valid: function(e) {
                var t = e[zo];
                return w(ti[t.toUpperCase()]) ? Ae(Vo.replace("{0}", t)) : Oe()
            }
        }, oi = {
            valid: function(e) {
                var t = e[Ko],
                    n = e[zo];
                return O(t) ? w(ni[t.toUpperCase()]) ? Ae(Wo.replace("{0}", t)) : t.toUpperCase() !== ni.GET && n !== ti.JSON ? Ae(Xo.replace("{0}", t).replace("{1}", n)) : Oe() : Oe()
            }
        }, ii = {
            valid: function(e) {
                return O(e[Jo]) && e[zo] !== ti.JSONP ? Ae(Go) : Oe()
            }
        }, ui = {
            valid: function(e) {
                var t = e[Zo];
                return w(t) || D(t) ? Oe() : Ae($o)
            }
        }, ai = {
            valid: function(e) {
                var t = e[Qo];
                return j(t) || w(t) ? Oe() : j(t) ? void 0 : Ae(Yo)
            }
        }, si = [ri, oi, ii, ui, ai], ci = "Track Event:", li = "Invalid element: expect object with href attribute.", fi = "Invalid initialization. Cannot access document.location.", di = "DEFINED-BEHAVIOR-BUILDER:", pi = 'cannot preventDefault. Unsupported event: "{0}" for "{1}" element.', hi = "undefined element type or event type.", mi = 'cannot preventDefault. Unsupported tag: "{0}".', gi = {}, vi = {}, yi = "fetch()", Ti = "script", bi = "img", xi = {
            SET_CONTENT: "setContent",
            SET_ATTRIBUTE: "setAttribute",
            SET_STYLE: "setStyle",
            REARRANGE: "rearrange",
            RESIZE: "resize",
            MOVE: "move",
            REMOVE: "remove",
            CUSTOM_CODE: "customCode",
            APPEND_CONTENT: "appendContent",
            REDIRECT: "redirect",
            TRACK_CLICK: "trackClick",
            INSERT_BEFORE: "insertBefore",
            INSERT_AFTER: "insertAfter",
            PREPEND_CONTENT: "prependContent",
            REPLACE_CONTENT: "replaceContent"
        }, Ei = {
            ACTION: "action",
            ATTRIBUTE: "attribute",
            ASSET: "asset",
            CLICK_TRACK_ID: "clickTrackId",
            CONTENT: "content",
            CONTENT_TYPE: "contentType",
            INCLUDE_ALL_URL_PARAMETERS: "includeAllUrlParameters",
            FINAL_HEIGHT: "finalHeight",
            FINAL_LEFT_POSITION: "finalLeftPosition",
            FINAL_TOP_POSITION: "finalTopPosition",
            FINAL_WIDTH: "finalWidth",
            FROM: "from",
            PASS_MBOX_SESSION: "passMboxSession",
            POSITION: "position",
            PRIORITY: "priority",
            PROPERTY: "property",
            SELECTOR: "selector",
            CSS_SELECTOR: "cssSelector",
            TO: "to",
            URL: "url",
            VALUE: "value"
        }, Ci = {
            IMPORTANT: "important"
        }, Ni = {
            HTML: "html",
            TEXT: "text"
        }, Si = "script,style,link", Ai = "click", Oi = "a", Ii = 50, Ri = "offer not applied (this or previous selector is missing)", Di = "applied:", wi = "polling:end", Pi = "applyOffer():", ki = "Either element or selector is redundant", Li = "offer parameter is mandatory", _i = [Bo.OPTIONS_IS_REQUIRED, lt("offer", P, Li), ft(ar, ki)], ji = [Bo.OPTIONS_IS_REQUIRED, Bo.MBOX_OPTION_PARAM_VALIDATOR, Bo.SUCCESS_PARAM_IS_MANDATORY, Bo.ERROR_PARAM_IS_MANDATORY], Mi = "getOffer():", Hi = [Bo.OPTIONS_IS_REQUIRED, Bo.MBOX_OPTION_PARAM_VALIDATOR], Fi = "Track Event:", qi = [Bo.MBOX_PARAM_VALIDATOR], Bi = "Classic:", Ui = {
            experienceEditorUrl: "//cdn.tt.omtrdc.net/cdn/target-vec.js"
        }, Gi = window, Wi = Gi.document, Vi = Te(Gi, SETTINGS), $i = Vi.generateId(), Xi = Ce(Ee(Gi, Wi), Wi, $i, SETTINGS), Yi = we(Gi, Wi, Vi), zi = qe(Wi, Vi, SETTINGS), Ki = Ge(zi, SETTINGS), Ji = Xe(Wi, zi, Vi, SETTINGS), Qi = tt(Wi, Xi, Ji, Ki, Vi, SETTINGS), Zi = ut(Wi, Vi, SETTINGS), eu = at(Gi, Wi, zi, Vi, SETTINGS), tu = st(), nu = ct(Gi, Yi, SETTINGS), ru = mt(Vi, Yi, SETTINGS), ou = vt(gt(eu, Qi, ru), nu), iu = yt(ou, Vi, Yi, SETTINGS), uu = Nt(Wi, Yi), au = St(Vi, Yi), su = _t(au), cu = jt(), lu = Ft(iu, Mt(Yi), uu), fu = qt(su, cu, lu), du = Ut(cu, lu), pu = Wt(fu), hu = $t(Vi), mu = Ft(iu, Xt(SETTINGS), uu), gu = wt(au, Vi, mu, Yi), vu = bn(Gi, Ji), yu = xn(vu), Tu = En(Gi), bu = Cn(gu, Tu, Vi, Yi), xu = On(cu, yu, gu, bu, Vi, Yi), Eu = [], Cu = [], Eu.push(hu), Eu.push(xu), Eu.push(pu), Eu.push(du), Cu.push(hu), Cu.push(xu), Cu.push(pu), Cu.push(Dn(Zi, fu)), Cu.push(du), Nu = Kn(), Su = Jn(Nu, Cu), Gi.adobe = Gi.adobe || {}, Gi.adobe.target = {}, Gi.adobe.target.VERSION = SETTINGS.version, Au = {
            tntId: or(Wi, SETTINGS, Ki),
            sessionId: Zn(Ji),
            error: Qn()
        }, Ou = ir(Vi), Iu = ur(Au, Vi), Ru = sr(Eu, Yi), Du = lr(eu, ou, Iu, Nu, Zi, Ou, Vi, Yi, SETTINGS), wu = vr(eu, Gi, iu, uu, Vi, Yi, SETTINGS), Gi.adobe.target.getOffer = Du, Gi.adobe.target.applyOffer = Ru, Gi.adobe.target.trackEvent = wu, Gi.adobe.target.executeAjax = ru, Gi.adobe.target.getTracking = function() {
            return {
                sessionId: Ji.getId(),
                deviceId: Ki.getId()
            }
        }, Gi.adobe.target.getSettings = function() {
            return {
                clientCode: SETTINGS.clientCode,
                serverDomain: SETTINGS.serverDomain,
                timeout: SETTINGS.timeout,
                globalMboxAutoCreate: SETTINGS.globalMboxAutoCreate,
                globalMboxName: SETTINGS.globalMboxName
            }
        }, Pu = br(eu, tu, ou, Iu, Su, Vi, Yi, Ou), Pu.hideDefaultContent(), Gi.mboxDefine = Pu.createMbox, Gi.mboxUpdate = Pu.fetchAndDisplayMbox, Gi.mboxCreate = Pu.createFetchAndDisplayMbox, Er(eu, Gi, ru, Yi), Cr(eu, Du, Ru, Vi, SETTINGS), Vi.onDomReady(Vi.triggerDomReady())
    }(this.adobe = {});
}({
    clientCode: 'ubsag',
    imsOrgId: '73FAC51D54C72AE50A4C98BC@AdobeOrg',
    serverDomain: 'ubsag.tt.omtrdc.net',
    crossDomain: 'enabled',
    timeout: 15000,
    globalMboxName: 'target-global-mbox',
    globalMboxAutoCreate: true,
    version: '0.8.0',
    defaultContentHiddenStyle: 'visibility:hidden;',
    defaultContentVisibleStyle: 'visibility:visible;',
    bodyHiddenStyle: 'body{opacity:0}',
    bodyHidingEnabled: true,
    deviceIdLifetime: 63244800000,
    sessionIdLifetime: 1860000,
    pollingAfterDomReadyTimeout: 180000,
    visitorApiTimeout: 2000,
    overrideMboxEdgeServer: false,
    overrideMboxEdgeServerTimeout: 1860000
});
