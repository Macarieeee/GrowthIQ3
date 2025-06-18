(self.webpackChunk = self.webpackChunk || []).push([
  ["119"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new w.Bare().init(e, t);
        }
        function a(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function n(e, t, a) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | a).toString(16).slice(1)
          );
        }
        function i() {}
        function o(e, t, a) {
          if ((void 0 !== t && (a = t), void 0 === e)) return a;
          var n = a;
          return (
            $.test(e) || !Z.test(e)
              ? (n = parseInt(e, 10))
              : Z.test(e) && (n = 1e3 * parseFloat(e)),
            0 > n && (n = 0),
            n == n ? n : a
          );
        }
        function d(e) {
          Q.debug && window && window.console.warn(e);
        }
        var r,
          l,
          c,
          s = (function (e, t, a) {
            function n(e) {
              return "object" == typeof e;
            }
            function i(e) {
              return "function" == typeof e;
            }
            function o() {}
            return function d(r, l) {
              function c() {
                var e = new s();
                return i(e.init) && e.init.apply(e, arguments), e;
              }
              function s() {}
              l === a && ((l = r), (r = Object)), (c.Bare = s);
              var u,
                f = (o[e] = r[e]),
                p = (s[e] = c[e] = new o());
              return (
                (p.constructor = c),
                (c.mixin = function (t) {
                  return (s[e] = c[e] = d(c, t)[e]), c;
                }),
                (c.open = function (e) {
                  if (
                    ((u = {}),
                    i(e) ? (u = e.call(c, p, f, c, r)) : n(e) && (u = e),
                    n(u))
                  )
                    for (var a in u) t.call(u, a) && (p[a] = u[a]);
                  return i(p.init) || (p.init = r), c;
                }),
                c.open(l)
              );
            };
          })("prototype", {}.hasOwnProperty),
          u = {
            ease: [
              "ease",
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  o = i * e;
                return (
                  t +
                  a *
                    (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  o = i * e;
                return t + a * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  o = i * e;
                return (
                  t +
                  a *
                    (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  o = i * e;
                return t + a * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
              },
            ],
            linear: [
              "linear",
              function (e, t, a, n) {
                return (a * e) / n + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, a, n) {
                return a * (e /= n) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, a, n) {
                return -a * (e /= n) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e + t
                  : (-a / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, a, n) {
                return a * (e /= n) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, a, n) {
                return a * ((e = e / n - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e * e + t
                  : (a / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, a, n) {
                return a * (e /= n) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, a, n) {
                return -a * ((e = e / n - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e * e * e + t
                  : (-a / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, a, n) {
                return a * (e /= n) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, a, n) {
                return a * ((e = e / n - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e * e * e * e + t
                  : (a / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, a, n) {
                return -a * Math.cos((e / n) * (Math.PI / 2)) + a + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, a, n) {
                return a * Math.sin((e / n) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, a, n) {
                return (-a / 2) * (Math.cos((Math.PI * e) / n) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, a, n) {
                return 0 === e ? t : a * Math.pow(2, 10 * (e / n - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, a, n) {
                return e === n
                  ? t + a
                  : a * (-Math.pow(2, (-10 * e) / n) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, a, n) {
                return 0 === e
                  ? t
                  : e === n
                  ? t + a
                  : (e /= n / 2) < 1
                  ? (a / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (a / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, a, n) {
                return -a * (Math.sqrt(1 - (e /= n) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, a, n) {
                return a * Math.sqrt(1 - (e = e / n - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (-a / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (a / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, a, n, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  a * (e /= n) * e * ((i + 1) * e - i) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, a, n, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  a * ((e = e / n - 1) * e * ((i + 1) * e + i) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, a, n, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  (e /= n / 2) < 1
                    ? (a / 2) * e * e * (((i *= 1.525) + 1) * e - i) + t
                    : (a / 2) *
                        ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          g = "bkwld-tram",
          I = /[\-\.0-9]/g,
          E = /[A-Z]/,
          T = "number",
          y = /^(rgb|#)/,
          m = /(em|cm|mm|in|pt|pc|px)$/,
          b = /(em|cm|mm|in|pt|pc|px|%)$/,
          O = /(deg|rad|turn)$/,
          v = "unitless",
          R = /(all|none) 0s ease 0s/,
          S = /^(width|height)$/,
          _ = document.createElement("a"),
          A = ["Webkit", "Moz", "O", "ms"],
          L = ["-webkit-", "-moz-", "-o-", "-ms-"],
          h = function (e) {
            if (e in _.style) return { dom: e, css: e };
            var t,
              a,
              n = "",
              i = e.split("-");
            for (t = 0; t < i.length; t++)
              n += i[t].charAt(0).toUpperCase() + i[t].slice(1);
            for (t = 0; t < A.length; t++)
              if ((a = A[t] + n) in _.style) return { dom: a, css: L[t] + e };
          },
          N = (t.support = {
            bind: Function.prototype.bind,
            transform: h("transform"),
            transition: h("transition"),
            backface: h("backface-visibility"),
            timing: h("transition-timing-function"),
          });
        if (N.transition) {
          var C = N.timing.dom;
          if (((_.style[C] = u["ease-in-back"][0]), !_.style[C]))
            for (var U in f) u[U][0] = f[U];
        }
        var V = (t.frame =
            (r =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && N.bind
              ? r.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          M = (t.now =
            (c =
              (l = p.performance) &&
              (l.now || l.webkitNow || l.msNow || l.mozNow)) && N.bind
              ? c.bind(l)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          x = s(function (t) {
            function a(e, t) {
              var a = (function (e) {
                  for (var t = -1, a = e ? e.length : 0, n = []; ++t < a; ) {
                    var i = e[t];
                    i && n.push(i);
                  }
                  return n;
                })(("" + e).split(" ")),
                n = a[0];
              t = t || {};
              var i = z[n];
              if (!i) return d("Unsupported property: " + n);
              if (!t.weak || !this.props[n]) {
                var o = i[0],
                  r = this.props[n];
                return (
                  r || (r = this.props[n] = new o.Bare()),
                  r.init(this.$el, a, i, t),
                  r
                );
              }
            }
            function n(e, t, n) {
              if (e) {
                var d = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == d && t)
                )
                  return (
                    (this.timer = new X({
                      duration: e,
                      context: this,
                      complete: i,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == d && t) {
                  switch (e) {
                    case "hide":
                      l.call(this);
                      break;
                    case "stop":
                      r.call(this);
                      break;
                    case "redraw":
                      c.call(this);
                      break;
                    default:
                      a.call(this, e, n && n[1]);
                  }
                  return i.call(this);
                }
                if ("function" == d) return void e.call(this, this);
                if ("object" == d) {
                  var f = 0;
                  u.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > f && (f = e.span), e.stop(), e.animate(t);
                    },
                    function (e) {
                      "wait" in e && (f = o(e.wait, 0));
                    }
                  ),
                    s.call(this),
                    f > 0 &&
                      ((this.timer = new X({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = i));
                  var p = this,
                    g = !1,
                    I = {};
                  V(function () {
                    u.call(p, e, function (e) {
                      e.active && ((g = !0), (I[e.name] = e.nextStyle));
                    }),
                      g && p.$el.css(I);
                  });
                }
              }
            }
            function i() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                n.call(this, e.options, !0, e.args);
              }
            }
            function r(e) {
              var t;
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                u.call(this, t, f),
                s.call(this);
            }
            function l() {
              r.call(this), (this.el.style.display = "none");
            }
            function c() {
              this.el.offsetHeight;
            }
            function s() {
              var e,
                t,
                a = [];
              for (e in (this.upstream && a.push(this.upstream), this.props))
                (t = this.props[e]).active && a.push(t.string);
              (a = a.join(",")),
                this.style !== a &&
                  ((this.style = a), (this.el.style[N.transition.dom] = a));
            }
            function u(e, t, n) {
              var i,
                o,
                d,
                r,
                l = t !== f,
                c = {};
              for (i in e)
                (d = e[i]),
                  i in j
                    ? (c.transform || (c.transform = {}), (c.transform[i] = d))
                    : (E.test(i) &&
                        (i = i.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      i in z ? (c[i] = d) : (r || (r = {}), (r[i] = d)));
              for (i in c) {
                if (((d = c[i]), !(o = this.props[i]))) {
                  if (!l) continue;
                  o = a.call(this, i);
                }
                t.call(this, o, d);
              }
              n && r && n.call(this, r);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function I(e) {
              this.$el.css(e);
            }
            function T(e, a) {
              t[e] = function () {
                return this.children
                  ? y.call(this, a, arguments)
                  : (this.el && a.apply(this, arguments), this);
              };
            }
            function y(e, t) {
              var a,
                n = this.children.length;
              for (a = 0; n > a; a++) e.apply(this.children[a], t);
              return this;
            }
            (t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                Q.keepInherited && !Q.fallback)
              ) {
                var a = Y(this.el, "transition");
                a && !R.test(a) && (this.upstream = a);
              }
              N.backface &&
                Q.hideBackface &&
                H(this.el, N.backface.css, "hidden");
            }),
              T("add", a),
              T("start", n),
              T("wait", function (e) {
                (e = o(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new X({
                        duration: e,
                        context: this,
                        complete: i,
                      })),
                      (this.active = !0));
              }),
              T("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = i))
                  : d(
                      "No active transition timer. Use start() or wait() before then()."
                    );
              }),
              T("next", i),
              T("stop", r),
              T("set", function (e) {
                r.call(this, e), u.call(this, e, p, I);
              }),
              T("show", function (e) {
                "string" != typeof e && (e = "block"),
                  (this.el.style.display = e);
              }),
              T("hide", l),
              T("redraw", c),
              T("destroy", function () {
                r.call(this),
                  e.removeData(this.el, g),
                  (this.$el = this.el = null);
              });
          }),
          w = s(x, function (t) {
            function a(t, a) {
              var n = e.data(t, g) || e.data(t, g, new x.Bare());
              return n.el || n.init(t), a ? n.start(a) : n;
            }
            t.init = function (t, n) {
              var i = e(t);
              if (!i.length) return this;
              if (1 === i.length) return a(i[0], n);
              var o = [];
              return (
                i.each(function (e, t) {
                  o.push(a(t, n));
                }),
                (this.children = o),
                this
              );
            };
          }),
          G = s(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t;
            }
            var a = 500,
              i = "ease",
              r = 0;
            (e.init = function (e, t, n, d) {
              (this.$el = e), (this.el = e[0]);
              var l,
                c,
                s,
                f = t[0];
              n[2] && (f = n[2]),
                W[f] && (f = W[f]),
                (this.name = f),
                (this.type = n[1]),
                (this.duration = o(t[1], this.duration, a)),
                (this.ease =
                  ((l = t[2]),
                  (c = this.ease),
                  (s = i),
                  void 0 !== c && (s = c),
                  l in u ? l : s)),
                (this.delay = o(t[3], this.delay, r)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = S.test(this.name)),
                (this.unit = d.unit || this.unit || Q.defaultUnit),
                (this.angle = d.angle || this.angle || Q.defaultAngle),
                Q.fallback || d.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + u[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : "")));
            }),
              (e.set = function (e) {
                (e = this.convert(e, this.type)), this.update(e), this.redraw();
              }),
              (e.transition = function (e) {
                (this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e);
              }),
              (e.fallback = function (e) {
                var a =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == a && (a = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new D({
                    from: a,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  }));
              }),
              (e.get = function () {
                return Y(this.el, this.name);
              }),
              (e.update = function (e) {
                H(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  H(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var a,
                  i,
                  o,
                  r,
                  l = "number" == typeof e,
                  c = "string" == typeof e;
                switch (t) {
                  case T:
                    if (l) return e;
                    if (c && "" === e.replace(I, "")) return +e;
                    r = "number(unitless)";
                    break;
                  case y:
                    if (c) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e)) {
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((a = e),
                            ((i = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a))
                              ? n(i[1], i[2], i[3])
                              : a
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3"));
                      }
                    }
                    r = "hex or rgb string";
                    break;
                  case m:
                    if (l) return e + this.unit;
                    if (c && t.test(e)) return e;
                    r = "number(px) or string(unit)";
                    break;
                  case b:
                    if (l) return e + this.unit;
                    if (c && t.test(e)) return e;
                    r = "number(px) or string(unit or %)";
                    break;
                  case O:
                    if (l) return e + this.angle;
                    if (c && t.test(e)) return e;
                    r = "number(deg) or string(angle)";
                    break;
                  case v:
                    if (l || (c && b.test(e))) return e;
                    r = "number(unitless) or string(unit or %)";
                }
                return (
                  d(
                    "Type warning: Expected: [" +
                      r +
                      "] Got: [" +
                      typeof (o = e) +
                      "] " +
                      o
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              });
          }),
          P = s(G, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), y));
            };
          }),
          k = s(G, function (e, t) {
            (e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback);
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              });
          }),
          F = s(G, function (e, t) {
            function a(e, t) {
              var a, n, i, o, d;
              for (a in e)
                (i = (o = j[a])[0]),
                  (n = o[1] || a),
                  (d = this.convert(e[a], i)),
                  t.call(this, n, d, i);
            }
            (e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  j.perspective &&
                    Q.perspective &&
                    ((this.current.perspective = Q.perspective),
                    H(this.el, this.name, this.style(this.current)),
                    this.redraw()));
            }),
              (e.set = function (e) {
                a.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  H(this.el, this.name, this.style(this.current)),
                  this.redraw();
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new B({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var a,
                  n = {};
                for (a in this.current) n[a] = a in t ? t[a] : this.current[a];
                (this.active = !0), (this.nextStyle = this.style(n));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new B({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                H(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  a = "";
                for (t in e) a += t + "(" + e[t] + ") ";
                return a;
              }),
              (e.values = function (e) {
                var t,
                  n = {};
                return (
                  a.call(this, e, function (e, a, i) {
                    (n[e] = a),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, i)));
                  }),
                  n
                );
              });
          }),
          D = s(function (t) {
            function o() {
              var e,
                t,
                a,
                n = l.length;
              if (n)
                for (V(o), t = M(), e = n; e--; ) (a = l[e]) && a.render(t);
            }
            var r = { ease: u.ease[1], from: 0, to: 1 };
            (t.init = function (e) {
              (this.duration = e.duration || 0), (this.delay = e.delay || 0);
              var t = e.ease || r.ease;
              u[t] && (t = u[t][1]),
                "function" != typeof t && (t = r.ease),
                (this.ease = t),
                (this.update = e.update || i),
                (this.complete = e.complete || i),
                (this.context = e.context || this),
                (this.name = e.name);
              var a = e.from,
                n = e.to;
              void 0 === a && (a = r.from),
                void 0 === n && (n = r.to),
                (this.unit = e.unit || ""),
                "number" == typeof a && "number" == typeof n
                  ? ((this.begin = a), (this.change = n - a))
                  : this.format(n, a),
                (this.value = this.begin + this.unit),
                (this.start = M()),
                !1 !== e.autoplay && this.play();
            }),
              (t.play = function () {
                var e;
                this.active ||
                  (this.start || (this.start = M()),
                  (this.active = !0),
                  (e = this),
                  1 === l.push(e) && V(o));
              }),
              (t.stop = function () {
                var t, a, n;
                this.active &&
                  ((this.active = !1),
                  (t = this),
                  (n = e.inArray(t, l)) >= 0 &&
                    ((a = l.slice(n + 1)),
                    (l.length = n),
                    a.length && (l = l.concat(a))));
              }),
              (t.render = function (e) {
                var t,
                  a = e - this.start;
                if (this.delay) {
                  if (a <= this.delay) return;
                  a -= this.delay;
                }
                if (a < this.duration) {
                  var i,
                    o,
                    d,
                    r = this.ease(a, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((i = this.startRGB),
                        (o = this.endRGB),
                        (d = r),
                        n(
                          i[0] + d * (o[0] - i[0]),
                          i[1] + d * (o[1] - i[1]),
                          i[2] + d * (o[2] - i[2])
                        ))
                      : Math.round((this.begin + r * this.change) * c) / c),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                (t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy();
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = a(t)),
                    (this.endRGB = a(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var n = t.replace(I, "");
                  n !== e.replace(I, "") &&
                    d("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = n);
                }
                (t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t);
              }),
              (t.destroy = function () {
                this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = i);
              });
            var l = [],
              c = 1e3;
          }),
          X = s(D, function (e) {
            (e.init = function (e) {
              (this.duration = e.duration || 0),
                (this.complete = e.complete || i),
                (this.context = e.context),
                this.play();
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              });
          }),
          B = s(D, function (e, t) {
            (e.init = function (e) {
              var t, a;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (a = e.values[t]),
                  this.current[t] !== a &&
                    this.tweens.push(
                      new D({
                        name: t,
                        from: this.current[t],
                        to: a,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      })
                    );
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  a,
                  n = this.tweens.length,
                  i = !1;
                for (t = n; t--; )
                  (a = this.tweens[t]).context &&
                    (a.render(e), (this.current[a.name] = a.value), (i = !0));
                return i
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e, a;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  (this.tweens = null), (this.current = null);
                }
              });
          }),
          Q = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !N.transition,
            agentTests: [],
          });
        (t.fallback = function (e) {
          if (!N.transition) return (Q.fallback = !0);
          Q.agentTests.push("(" + e + ")");
          var t = RegExp(Q.agentTests.join("|"), "i");
          Q.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new D(e);
          }),
          (t.delay = function (e, t, a) {
            return new X({ complete: t, duration: e, context: a });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          });
        var H = e.style,
          Y = e.css,
          W = { transform: N.transform && N.transform.css },
          z = {
            color: [P, y],
            background: [P, y, "background-color"],
            "outline-color": [P, y],
            "border-color": [P, y],
            "border-top-color": [P, y],
            "border-right-color": [P, y],
            "border-bottom-color": [P, y],
            "border-left-color": [P, y],
            "border-width": [G, m],
            "border-top-width": [G, m],
            "border-right-width": [G, m],
            "border-bottom-width": [G, m],
            "border-left-width": [G, m],
            "border-spacing": [G, m],
            "letter-spacing": [G, m],
            margin: [G, m],
            "margin-top": [G, m],
            "margin-right": [G, m],
            "margin-bottom": [G, m],
            "margin-left": [G, m],
            padding: [G, m],
            "padding-top": [G, m],
            "padding-right": [G, m],
            "padding-bottom": [G, m],
            "padding-left": [G, m],
            "outline-width": [G, m],
            opacity: [G, T],
            top: [G, b],
            right: [G, b],
            bottom: [G, b],
            left: [G, b],
            "font-size": [G, b],
            "text-indent": [G, b],
            "word-spacing": [G, b],
            width: [G, b],
            "min-width": [G, b],
            "max-width": [G, b],
            height: [G, b],
            "min-height": [G, b],
            "max-height": [G, b],
            "line-height": [G, v],
            "scroll-top": [k, T, "scrollTop"],
            "scroll-left": [k, T, "scrollLeft"],
          },
          j = {};
        N.transform &&
          ((z.transform = [F]),
          (j = {
            x: [b, "translateX"],
            y: [b, "translateY"],
            rotate: [O],
            rotateX: [O],
            rotateY: [O],
            scale: [T],
            scaleX: [T],
            scaleY: [T],
            skew: [O],
            skewX: [O],
            skewY: [O],
          })),
          N.transform &&
            N.backface &&
            ((j.z = [b, "translateZ"]),
            (j.rotateZ = [O]),
            (j.scaleZ = [T]),
            (j.perspective = [m]));
        var $ = /ms/,
          Z = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, a) {
      "use strict";
      var n,
        i,
        o,
        d,
        r,
        l,
        c,
        s,
        u,
        f,
        p,
        g,
        I,
        E,
        T,
        y,
        m,
        b,
        O,
        v,
        R = window.$,
        S = a(5487) && R.tram;
      e.exports =
        (((n = {}).VERSION = "1.6.0-Webflow"),
        (i = {}),
        (o = Array.prototype),
        (d = Object.prototype),
        (r = Function.prototype),
        o.push,
        (l = o.slice),
        (c = (o.concat, d.toString, d.hasOwnProperty)),
        (s = o.forEach),
        (u = o.map),
        (f = (o.reduce, o.reduceRight, o.filter)),
        (p = (o.every, o.some)),
        (g = o.indexOf),
        (I = (o.lastIndexOf, Object.keys)),
        r.bind,
        (E =
          n.each =
          n.forEach =
            function (e, t, a) {
              if (null == e) return e;
              if (s && e.forEach === s) e.forEach(t, a);
              else if (e.length === +e.length) {
                for (var o = 0, d = e.length; o < d; o++)
                  if (t.call(a, e[o], o, e) === i) return;
              } else {
                for (var r = n.keys(e), o = 0, d = r.length; o < d; o++)
                  if (t.call(a, e[r[o]], r[o], e) === i) return;
              }
              return e;
            }),
        (n.map = n.collect =
          function (e, t, a) {
            var n = [];
            return null == e
              ? n
              : u && e.map === u
              ? e.map(t, a)
              : (E(e, function (e, i, o) {
                  n.push(t.call(a, e, i, o));
                }),
                n);
          }),
        (n.find = n.detect =
          function (e, t, a) {
            var n;
            return (
              T(e, function (e, i, o) {
                if (t.call(a, e, i, o)) return (n = e), !0;
              }),
              n
            );
          }),
        (n.filter = n.select =
          function (e, t, a) {
            var n = [];
            return null == e
              ? n
              : f && e.filter === f
              ? e.filter(t, a)
              : (E(e, function (e, i, o) {
                  t.call(a, e, i, o) && n.push(e);
                }),
                n);
          }),
        (T =
          n.some =
          n.any =
            function (e, t, a) {
              t || (t = n.identity);
              var o = !1;
              return null == e
                ? o
                : p && e.some === p
                ? e.some(t, a)
                : (E(e, function (e, n, d) {
                    if (o || (o = t.call(a, e, n, d))) return i;
                  }),
                  !!o);
            }),
        (n.contains = n.include =
          function (e, t) {
            return (
              null != e &&
              (g && e.indexOf === g
                ? -1 != e.indexOf(t)
                : T(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (n.delay = function (e, t) {
          var a = l.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, a);
          }, t);
        }),
        (n.defer = function (e) {
          return n.delay.apply(n, [e, 1].concat(l.call(arguments, 1)));
        }),
        (n.throttle = function (e) {
          var t, a, n;
          return function () {
            !t &&
              ((t = !0),
              (a = arguments),
              (n = this),
              S.frame(function () {
                (t = !1), e.apply(n, a);
              }));
          };
        }),
        (n.debounce = function (e, t, a) {
          var i,
            o,
            d,
            r,
            l,
            c = function () {
              var s = n.now() - r;
              s < t
                ? (i = setTimeout(c, t - s))
                : ((i = null), !a && ((l = e.apply(d, o)), (d = o = null)));
            };
          return function () {
            (d = this), (o = arguments), (r = n.now());
            var s = a && !i;
            return (
              !i && (i = setTimeout(c, t)),
              s && ((l = e.apply(d, o)), (d = o = null)),
              l
            );
          };
        }),
        (n.defaults = function (e) {
          if (!n.isObject(e)) return e;
          for (var t = 1, a = arguments.length; t < a; t++) {
            var i = arguments[t];
            for (var o in i) void 0 === e[o] && (e[o] = i[o]);
          }
          return e;
        }),
        (n.keys = function (e) {
          if (!n.isObject(e)) return [];
          if (I) return I(e);
          var t = [];
          for (var a in e) n.has(e, a) && t.push(a);
          return t;
        }),
        (n.has = function (e, t) {
          return c.call(e, t);
        }),
        (n.isObject = function (e) {
          return e === Object(e);
        }),
        (n.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (n.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (y = /(.)^/),
        (m = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (b = /\\|'|\r|\n|\u2028|\u2029/g),
        (O = function (e) {
          return "\\" + m[e];
        }),
        (v = /^\s*(\w|\$)+\s*$/),
        (n.template = function (e, t, a) {
          !t && a && (t = a);
          var i,
            o = RegExp(
              [
                ((t = n.defaults({}, t, n.templateSettings)).escape || y)
                  .source,
                (t.interpolate || y).source,
                (t.evaluate || y).source,
              ].join("|") + "|$",
              "g"
            ),
            d = 0,
            r = "__p+='";
          e.replace(o, function (t, a, n, i, o) {
            return (
              (r += e.slice(d, o).replace(b, O)),
              (d = o + t.length),
              a
                ? (r += "'+\n((__t=(" + a + "))==null?'':_.escape(__t))+\n'")
                : n
                ? (r += "'+\n((__t=(" + n + "))==null?'':__t)+\n'")
                : i && (r += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (r += "';\n");
          var l = t.variable;
          if (l) {
            if (!v.test(l))
              throw Error("variable is not a bare identifier: " + l);
          } else (r = "with(obj||{}){\n" + r + "}\n"), (l = "obj");
          r =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            r +
            "return __p;\n";
          try {
            i = Function(t.variable || "obj", "_", r);
          } catch (e) {
            throw ((e.source = r), e);
          }
          var c = function (e) {
            return i.call(this, e, n);
          };
          return (c.source = "function(" + l + "){\n" + r + "}"), c;
        }),
        n);
    },
    9461: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "brand",
        (e.exports = function (e) {
          var t,
            a = {},
            i = document,
            o = e("html"),
            d = e("body"),
            r = window.location,
            l = /PhantomJS/i.test(navigator.userAgent),
            c =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function s() {
            var a =
              i.fullScreen ||
              i.mozFullScreen ||
              i.webkitIsFullScreen ||
              i.msFullscreenElement ||
              !!i.webkitFullscreenElement;
            e(t).attr("style", a ? "display: none !important;" : "");
          }
          a.ready = function () {
            var a = o.attr("data-wf-status"),
              n = o.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(n) && r.hostname !== n && (a = !0),
              a &&
                !l &&
                ((t =
                  t ||
                  (function () {
                    var t = e('').attr(
                        "href",
                        "https://webflow.com?utm_campaign=brandjs"
                      ),
                      a = e("<img>")
                        .attr(
                          "src",
                          "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
                        )
                        .attr("alt", "")
                        .css({ marginRight: "4px", width: "26px" }),
                      n = e("<img>")
                        .attr(
                          "src",
                          "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
                        )
                        .attr("alt", "Made in Webflow");
                    return t.append(a, n), t[0];
                  })()),
                u(),
                setTimeout(u, 500),
                e(i).off(c, s).on(c, s));
          };
          function u() {
            var e = d.children(".w-webflow-badge"),
              a = e.length && e.get(0) === t,
              i = n.env("editor");
            if (a) {
              i && e.remove();
              return;
            }
            e.length && e.remove(), !i && d.append(t);
          }
          return a;
        })
      );
    },
    322: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "edit",
        (e.exports = function (e, t, a) {
          if (
            ((a = a || {}),
            (n.env("test") || n.env("frame")) &&
              !a.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var i,
            o = e(window),
            d = e(document.documentElement),
            r = document.location,
            l = "hashchange",
            c =
              a.load ||
              function () {
                (i = !0),
                  (window.WebflowEditor = !0),
                  o.off(l, u),
                  (function (e) {
                    var t = window.document.createElement("iframe");
                    (t.src =
                      "https://webflow.com/site/third-party-cookie-check.html"),
                      (t.style.display = "none"),
                      (t.sandbox = "allow-scripts allow-same-origin");
                    var a = function (n) {
                      "WF_third_party_cookies_unsupported" === n.data
                        ? (g(t, a), e(!1))
                        : "WF_third_party_cookies_supported" === n.data &&
                          (g(t, a), e(!0));
                    };
                    (t.onerror = function () {
                      g(t, a), e(!1);
                    }),
                      window.addEventListener("message", a, !1),
                      window.document.body.appendChild(t);
                  })(function (t) {
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: d.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success: (function (t) {
                        return function (a) {
                          if (!a) {
                            console.error("Could not load editor data");
                            return;
                          }
                          (a.thirdPartyCookiesSupported = t),
                            (function (t, a) {
                              e.ajax({
                                type: "GET",
                                url: t,
                                dataType: "script",
                                cache: !0,
                              }).then(a, f);
                            })(
                              (function (e) {
                                return e.indexOf("//") >= 0
                                  ? e
                                  : p("https://editor-api.webflow.com" + e);
                              })(a.scriptPath),
                              function () {
                                window.WebflowEditor(a);
                              }
                            );
                        };
                      })(t),
                    });
                  });
              },
            s = !1;
          try {
            s =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function u() {
            if (!i) /\?edit/.test(r.hash) && c();
          }
          s
            ? c()
            : r.search
            ? (/[?&](edit)(?:[=&?]|$)/.test(r.search) ||
                /\?edit$/.test(r.href)) &&
              c()
            : o.on(l, u).triggerHandler(l);
          function f(e, t, a) {
            throw (console.error("Could not load editor script: " + t), a);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function g(e, t) {
            window.removeEventListener("message", t, !1), e.remove();
          }
          return {};
        })
      );
    },
    2338: function (e, t, a) {
      "use strict";
      a(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      a = !1,
                      n = null,
                      i = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function o(e) {
                      return (
                        (!!e &&
                          e !== document &&
                          "HTML" !== e.nodeName &&
                          "BODY" !== e.nodeName &&
                          "classList" in e &&
                          "contains" in e.classList) ||
                        !1
                      );
                    }
                    function d(e) {
                      if (!e.getAttribute("data-wf-focus-visible"))
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function r() {
                      t = !1;
                    }
                    function l() {
                      document.addEventListener("mousemove", c),
                        document.addEventListener("mousedown", c),
                        document.addEventListener("mouseup", c),
                        document.addEventListener("pointermove", c),
                        document.addEventListener("pointerdown", c),
                        document.addEventListener("pointerup", c),
                        document.addEventListener("touchmove", c),
                        document.addEventListener("touchstart", c),
                        document.addEventListener("touchend", c);
                    }
                    function c(e) {
                      if (
                        !e.target.nodeName ||
                        "html" !== e.target.nodeName.toLowerCase()
                      )
                        (t = !1),
                          document.removeEventListener("mousemove", c),
                          document.removeEventListener("mousedown", c),
                          document.removeEventListener("mouseup", c),
                          document.removeEventListener("pointermove", c),
                          document.removeEventListener("pointerdown", c),
                          document.removeEventListener("pointerup", c),
                          document.removeEventListener("touchmove", c),
                          document.removeEventListener("touchstart", c),
                          document.removeEventListener("touchend", c);
                    }
                    document.addEventListener(
                      "keydown",
                      function (a) {
                        if (!a.metaKey && !a.altKey && !a.ctrlKey)
                          o(e.activeElement) && d(e.activeElement), (t = !0);
                      },
                      !0
                    ),
                      document.addEventListener("mousedown", r, !0),
                      document.addEventListener("pointerdown", r, !0),
                      document.addEventListener("touchstart", r, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (a && (t = !0), l());
                        },
                        !0
                      ),
                      l(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          var a, n, r;
                          if (!!o(e.target)) {
                            if (
                              t ||
                              ((n = (a = e.target).type),
                              ("INPUT" === (r = a.tagName) &&
                                i[n] &&
                                !a.readOnly) ||
                                ("TEXTAREA" === r && !a.readOnly) ||
                                a.isContentEditable)
                            )
                              d(e.target);
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (!!o(e.target))
                            e.target.hasAttribute("data-wf-focus-visible") &&
                              ((a = !0),
                              window.clearTimeout(n),
                              (n = window.setTimeout(function () {
                                a = !1;
                              }, 100)),
                              !(function (e) {
                                if (!!e.getAttribute("data-wf-focus-visible"))
                                  e.removeAttribute("data-wf-focus-visible");
                              })(e.target));
                        },
                        !0
                      );
                  })(document);
                }
            },
          };
        })
      );
    },
    8334: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function a(a) {
            t &&
              (a.preventDefault(),
              a.stopPropagation(),
              a.stopImmediatePropagation(),
              e.unshift(a));
          }
          function i(a) {
            var n, i;
            if (
              ((i = (n = a.target).tagName),
              (/^a$/i.test(i) && null != n.href) ||
                (/^(button|textarea)$/i.test(i) && !0 !== n.disabled) ||
                (/^input$/i.test(i) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(n.type) &&
                  !n.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(i) &&
                  !Number.isNaN(Number.parseFloat(n.tabIndex))) ||
                /^audio$/i.test(i) ||
                (/^video$/i.test(i) && !0 === n.controls))
            )
              (t = !0),
                setTimeout(() => {
                  for (t = !1, a.target.focus(); e.length > 0; ) {
                    var n = e.pop();
                    n.target.dispatchEvent(new MouseEvent(n.type, n));
                  }
                }, 0);
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                n.env.safari &&
                (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", a, !0),
                document.addEventListener("click", a, !0));
            },
          };
        })
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        a = {},
        n = [],
        i = ".w-ix",
        o = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, n) {
            if (!n.__wf_intro)
              (n.__wf_intro = !0), t(n).triggerHandler(a.types.INTRO);
          },
          outro: function (e, n) {
            if (!!n.__wf_intro)
              (n.__wf_intro = null), t(n).triggerHandler(a.types.OUTRO);
          },
        };
      (a.triggers = {}),
        (a.types = { INTRO: "w-ix-intro" + i, OUTRO: "w-ix-outro" + i }),
        (a.init = function () {
          for (var e = n.length, i = 0; i < e; i++) {
            var d = n[i];
            d[0](0, d[1]);
          }
          (n = []), t.extend(a.triggers, o);
        }),
        (a.async = function () {
          for (var e in o) {
            var t = o[e];
            if (!!o.hasOwnProperty(e))
              a.triggers[e] = function (e, a) {
                n.push([t, a]);
              };
          }
        }),
        a.async(),
        (e.exports = a);
    },
    5134: function (e, t, a) {
      "use strict";
      var n = a(7199);
      function i(e, t) {
        var a = document.createEvent("CustomEvent");
        a.initCustomEvent(t, !0, !0, null), e.dispatchEvent(a);
      }
      var o = window.jQuery,
        d = {},
        r = ".w-ix";
      (d.triggers = {}),
        (d.types = { INTRO: "w-ix-intro" + r, OUTRO: "w-ix-outro" + r }),
        o.extend(d.triggers, {
          reset: function (e, t) {
            n.triggers.reset(e, t);
          },
          intro: function (e, t) {
            n.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE");
          },
          outro: function (e, t) {
            n.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE");
          },
        }),
        (e.exports = d);
    },
    941: function (e, t, a) {
      "use strict";
      var n = a(3949),
        i = a(6011);
      i.setEnv(n.env),
        n.define(
          "ix2",
          (e.exports = function () {
            return i;
          })
        );
    },
    3949: function (e, t, a) {
      "use strict";
      var n,
        i,
        o = {},
        d = {},
        r = [],
        l = window.Webflow || [],
        c = window.jQuery,
        s = c(window),
        u = c(document),
        f = c.isFunction,
        p = (o._ = a(5756)),
        g = (o.tram = a(5487) && c.tram),
        I = !1,
        E = !1;
      function T(e) {
        o.env() &&
          (f(e.design) && s.on("__wf_design", e.design),
          f(e.preview) && s.on("__wf_preview", e.preview)),
          f(e.destroy) && s.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (I) {
                e.ready();
                return;
              }
              if (!p.contains(r, e.ready)) r.push(e.ready);
            })(e);
      }
      (g.config.hideBackface = !1),
        (g.config.keepInherited = !0),
        (o.define = function (e, t, a) {
          d[e] && y(d[e]);
          var n = (d[e] = t(c, p, a) || {});
          return T(n), n;
        }),
        (o.require = function (e) {
          return d[e];
        });
      function y(e) {
        f(e.design) && s.off("__wf_design", e.design),
          f(e.preview) && s.off("__wf_preview", e.preview),
          f(e.destroy) && s.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              r = p.filter(r, function (t) {
                return t !== e.ready;
              });
            })(e);
      }
      (o.push = function (e) {
        if (I) {
          f(e) && e();
          return;
        }
        l.push(e);
      }),
        (o.env = function (e) {
          var t = window.__wf_design,
            a = void 0 !== t;
          return e
            ? "design" === e
              ? a && t
              : "preview" === e
              ? a && !t
              : "slug" === e
              ? a && window.__wf_slug
              : "editor" === e
              ? window.WebflowEditor
              : "test" === e
              ? window.__wf_test
              : "frame" === e
              ? window !== window.top
              : void 0
            : a;
        });
      var m = navigator.userAgent.toLowerCase(),
        b = (o.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        O = (o.env.chrome =
          /chrome/.test(m) &&
          /Google/.test(navigator.vendor) &&
          parseInt(m.match(/chrome\/(\d+)\./)[1], 10)),
        v = (o.env.ios = /(ipod|iphone|ipad)/.test(m));
      (o.env.safari = /safari/.test(m) && !O && !v),
        b &&
          u.on("touchstart mousedown", function (e) {
            n = e.target;
          }),
        (o.validClick = b
          ? function (e) {
              return e === n || c.contains(e, n);
            }
          : function () {
              return !0;
            });
      var R = "resize.webflow orientationchange.webflow load.webflow",
        S = "scroll.webflow " + R;
      function _(e, t) {
        var a = [],
          n = {};
        return (
          (n.up = p.throttle(function (e) {
            p.each(a, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, n.up),
          (n.on = function (e) {
            if (!("function" != typeof e || p.contains(a, e))) a.push(e);
          }),
          (n.off = function (e) {
            if (!arguments.length) {
              a = [];
              return;
            }
            a = p.filter(a, function (t) {
              return t !== e;
            });
          }),
          n
        );
      }
      function A(e) {
        f(e) && e();
      }
      (o.resize = _(s, R)),
        (o.scroll = _(s, S)),
        (o.redraw = _()),
        (o.location = function (e) {
          window.location = e;
        }),
        o.env() && (o.location = function () {}),
        (o.ready = function () {
          (I = !0),
            E
              ? (function () {
                  (E = !1), p.each(d, T);
                })()
              : p.each(r, A),
            p.each(l, A),
            o.resize.up();
        });
      function L() {
        i && (i.reject(), s.off("load", i.resolve)),
          (i = new c.Deferred()),
          s.on("load", i.resolve);
      }
      (o.load = function (e) {
        i.then(e);
      }),
        (o.destroy = function (e) {
          (e = e || {}),
            (E = !0),
            s.triggerHandler("__wf_destroy"),
            null != e.domready && (I = e.domready),
            p.each(d, y),
            o.resize.off(),
            o.scroll.off(),
            o.redraw.off(),
            (r = []),
            (l = []),
            "pending" === i.state() && L();
        }),
        c(o.ready),
        L(),
        (e.exports = window.Webflow = o);
    },
    7624: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "links",
        (e.exports = function (e, t) {
          var a,
            i,
            o,
            d = {},
            r = e(window),
            l = n.env(),
            c = window.location,
            s = document.createElement("a"),
            u = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          d.ready =
            d.design =
            d.preview =
              function () {
                (a = l && n.env("design")),
                  (o = n.env("slug") || c.pathname || ""),
                  n.scroll.off(g),
                  (i = []);
                for (var t = document.links, d = 0; d < t.length; ++d)
                  (function (t) {
                    if (t.getAttribute("hreflang")) return;
                    var n =
                      (a && t.getAttribute("href-disabled")) ||
                      t.getAttribute("href");
                    if (((s.href = n), n.indexOf(":") >= 0)) return;
                    var d = e(t);
                    if (
                      s.hash.length > 1 &&
                      s.host + s.pathname === c.host + c.pathname
                    ) {
                      if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                      var r = e(s.hash);
                      r.length && i.push({ link: d, sec: r, active: !1 });
                      return;
                    }
                    if ("#" !== n && "" !== n)
                      I(
                        d,
                        u,
                        s.href === c.href || n === o || (f.test(n) && p.test(o))
                      );
                  })(t[d]);
                i.length && (n.scroll.on(g), g());
              };
          function g() {
            var e = r.scrollTop(),
              a = r.height();
            t.each(i, function (t) {
              if (t.link.attr("hreflang")) return;
              var n = t.link,
                i = t.sec,
                o = i.offset().top,
                d = i.outerHeight(),
                r = 0.5 * a,
                l = i.is(":visible") && o + d - r >= e && o + r <= e + a;
              if (t.active !== l) (t.active = l), I(n, u, l);
            });
          }
          function I(e, t, a) {
            var n = e.hasClass(t);
            if ((!a || !n) && (!!a || !!n))
              a ? e.addClass(t) : e.removeClass(t);
          }
          return d;
        })
      );
    },
    286: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            a = window.location,
            i = (function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? null
              : window.history,
            o = e(window),
            d = e(document),
            r = e(document.body),
            l =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            c = n.env("editor") ? ".w-editor-body" : "body",
            s =
              "header, " +
              c +
              " > .header, " +
              c +
              " > .w-nav:not([data-no-scroll])",
            u = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            )
          );
          var g = /^#[a-zA-Z0-9][\w:.-]*$/;
          let I =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function E(e, t) {
            var a;
            switch (t) {
              case "add":
                (a = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", a)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (a = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", a),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function T(t) {
            var d,
              c = t.currentTarget;
            if (
              !(
                n.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(c.className))
              )
            ) {
              var u = ((d = c),
              g.test(d.hash) && d.host + d.pathname === a.host + a.pathname)
                ? c.hash
                : "";
              if ("" !== u) {
                var f = e(u);
                if (!f.length) return;
                t && (t.preventDefault(), t.stopPropagation()),
                  (function (e) {
                    a.hash !== e &&
                      i &&
                      i.pushState &&
                      !(n.env.chrome && "file:" === a.protocol) &&
                      (i.state && i.state.hash) !== e &&
                      i.pushState({ hash: e }, "", e);
                  })(u, t),
                  window.setTimeout(
                    function () {
                      (function (t, a) {
                        var n = o.scrollTop(),
                          i = (function (t) {
                            var a = e(s),
                              n =
                                "fixed" === a.css("position")
                                  ? a.outerHeight()
                                  : 0,
                              i = t.offset().top - n;
                            if ("mid" === t.data("scroll")) {
                              var d = o.height() - n,
                                r = t.outerHeight();
                              r < d && (i -= Math.round((d - r) / 2));
                            }
                            return i;
                          })(t);
                        if (n !== i) {
                          var d = (function (e, t, a) {
                              if (
                                "none" ===
                                  document.body.getAttribute(
                                    "data-wf-scroll-motion"
                                  ) ||
                                I.matches
                              )
                                return 0;
                              var n = 1;
                              return (
                                r.add(e).each(function (e, t) {
                                  var a = parseFloat(
                                    t.getAttribute("data-scroll-time")
                                  );
                                  !isNaN(a) && a >= 0 && (n = a);
                                }),
                                (472.143 * Math.log(Math.abs(t - a) + 125) -
                                  2e3) *
                                  n
                              );
                            })(t, n, i),
                            c = Date.now(),
                            u = function () {
                              var e = Date.now() - c;
                              window.scroll(
                                0,
                                (function (e, t, a, n) {
                                  return a > n
                                    ? t
                                    : e +
                                        (t - e) *
                                          (function (e) {
                                            return e < 0.5
                                              ? 4 * e * e * e
                                              : (e - 1) *
                                                  (2 * e - 2) *
                                                  (2 * e - 2) +
                                                  1;
                                          })(a / n);
                                })(n, i, e, d)
                              ),
                                e <= d ? l(u) : "function" == typeof a && a();
                            };
                          l(u);
                        }
                      })(f, function () {
                        E(f, "add"),
                          f.get(0).focus({ preventScroll: !0 }),
                          E(f, "remove");
                      });
                    },
                    t ? 0 : 300
                  );
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: a } = t;
              d.on(a, f, T),
                d.on(e, u, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild);
            },
          };
        })
      );
    },
    3695: function (e, t, a) {
      "use strict";
      a(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            a = window.getSelection;
          function n(t) {
            var n,
              i,
              o = !1,
              d = !1,
              r = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function l(e) {
              var t = e.touches;
              if (!t || !(t.length > 1))
                (o = !0),
                  t ? ((d = !0), (n = t[0].clientX)) : (n = e.clientX),
                  (i = n);
            }
            function c(t) {
              if (!!o) {
                if (d && "mousemove" === t.type) {
                  t.preventDefault(), t.stopPropagation();
                  return;
                }
                var n = t.touches,
                  l = n ? n[0].clientX : t.clientX,
                  c = l - i;
                (i = l),
                  Math.abs(c) > r &&
                    a &&
                    "" === String(a()) &&
                    ((function (t, a, n) {
                      var i = e.Event(t, { originalEvent: a });
                      e(a.target).trigger(i, n);
                    })("swipe", t, { direction: c > 0 ? "right" : "left" }),
                    u());
              }
            }
            function s(e) {
              if (!!o) {
                if (((o = !1), d && "mouseup" === e.type)) {
                  e.preventDefault(), e.stopPropagation(), (d = !1);
                  return;
                }
              }
            }
            function u() {
              o = !1;
            }
            t.addEventListener("touchstart", l, !1),
              t.addEventListener("touchmove", c, !1),
              t.addEventListener("touchend", s, !1),
              t.addEventListener("touchcancel", u, !1),
              t.addEventListener("mousedown", l, !1),
              t.addEventListener("mousemove", c, !1),
              t.addEventListener("mouseup", s, !1),
              t.addEventListener("mouseout", u, !1);
            this.destroy = function () {
              t.removeEventListener("touchstart", l, !1),
                t.removeEventListener("touchmove", c, !1),
                t.removeEventListener("touchend", s, !1),
                t.removeEventListener("touchcancel", u, !1),
                t.removeEventListener("mousedown", l, !1),
                t.removeEventListener("mousemove", c, !1),
                t.removeEventListener("mouseup", s, !1),
                t.removeEventListener("mouseout", u, !1),
                (t = null);
            };
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new n(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        })
      );
    },
    9858: function (e, t, a) {
      "use strict";
      var n = a(3949),
        i = a(5134);
      let o = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          ESCAPE: 27,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35,
        },
        d = /^#[a-zA-Z0-9\-_]+$/;
      n.define(
        "dropdown",
        (e.exports = function (e, t) {
          var a,
            r,
            l = t.debounce,
            c = {},
            s = n.env(),
            u = !1,
            f = n.env.touch,
            p = ".w-dropdown",
            g = "w--open",
            I = i.triggers,
            E = "focusout" + p,
            T = "keydown" + p,
            y = "mouseenter" + p,
            m = "mousemove" + p,
            b = "mouseleave" + p,
            O = (f ? "click" : "mouseup") + p,
            v = "w-close" + p,
            R = "setting" + p,
            S = e(document);
          function _() {
            (a = s && n.env("design")), (r = S.find(p)).each(A);
          }
          function A(t, i) {
            var r = e(i),
              c = e.data(i, p);
            !c &&
              (c = e.data(i, p, {
                open: !1,
                el: r,
                config: {},
                selectedIdx: -1,
              })),
              (c.toggle = c.el.children(".w-dropdown-toggle")),
              (c.list = c.el.children(".w-dropdown-list")),
              (c.links = c.list.find("a:not(.w-dropdown .w-dropdown a)")),
              (c.complete = (function (e) {
                return function () {
                  e.list.removeClass(g),
                    e.toggle.removeClass(g),
                    e.manageZ && e.el.css("z-index", "");
                };
              })(c)),
              (c.mouseLeave = (function (e) {
                return function () {
                  (e.hovering = !1), !e.links.is(":focus") && C(e);
                };
              })(c)),
              (c.mouseUpOutside = (function (t) {
                return (
                  t.mouseUpOutside && S.off(O, t.mouseUpOutside),
                  l(function (a) {
                    if (!t.open) return;
                    var i = e(a.target);
                    if (!i.closest(".w-dropdown-toggle").length) {
                      var o = -1 === e.inArray(t.el[0], i.parents(p)),
                        d = n.env("editor");
                      if (o) {
                        if (d) {
                          var r =
                              1 === i.parents().length &&
                              1 === i.parents("svg").length,
                            l = i.parents(
                              ".w-editor-bem-EditorHoverControls"
                            ).length;
                          if (r || l) return;
                        }
                        C(t);
                      }
                    }
                  })
                );
              })(c)),
              (c.mouseMoveOutside = (function (t) {
                return l(function (a) {
                  if (!!t.open) {
                    var n = e(a.target);
                    if (-1 === e.inArray(t.el[0], n.parents(p))) {
                      var i = n.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length,
                        o = n.parents(".w-editor-bem-RTToolbar").length,
                        d = e(".w-editor-bem-EditorOverlay"),
                        r =
                          d.find(".w-editor-edit-outline").length ||
                          d.find(".w-editor-bem-RTToolbar").length;
                      if (i || o || r) return;
                      (t.hovering = !1), C(t);
                    }
                  }
                });
              })(c)),
              L(c);
            var u = c.toggle.attr("id"),
              f = c.list.attr("id");
            !u && (u = "w-dropdown-toggle-" + t),
              !f && (f = "w-dropdown-list-" + t),
              c.toggle.attr("id", u),
              c.toggle.attr("aria-controls", f),
              c.toggle.attr("aria-haspopup", "menu"),
              c.toggle.attr("aria-expanded", "false"),
              c.toggle
                .find(".w-icon-dropdown-toggle")
                .attr("aria-hidden", "true"),
              "BUTTON" !== c.toggle.prop("tagName") &&
                (c.toggle.attr("role", "button"),
                !c.toggle.attr("tabindex") && c.toggle.attr("tabindex", "0")),
              c.list.attr("id", f),
              c.list.attr("aria-labelledby", u),
              c.links.each(function (e, t) {
                !t.hasAttribute("tabindex") && t.setAttribute("tabindex", "0"),
                  d.test(t.hash) &&
                    t.addEventListener("click", C.bind(null, c));
              }),
              c.el.off(p),
              c.toggle.off(p),
              c.nav && c.nav.off(p);
            var I = h(c, !0);
            a &&
              c.el.on(
                R,
                (function (e) {
                  return function (t, a) {
                    (a = a || {}),
                      L(e),
                      !0 === a.open && N(e),
                      !1 === a.open && C(e, { immediate: !0 });
                  };
                })(c)
              ),
              !a &&
                (s && ((c.hovering = !1), C(c)),
                c.config.hover &&
                  c.toggle.on(
                    y,
                    (function (e) {
                      return function () {
                        (e.hovering = !0), N(e);
                      };
                    })(c)
                  ),
                c.el.on(v, I),
                c.el.on(
                  T,
                  (function (e) {
                    return function (t) {
                      if (!a && !!e.open)
                        switch (
                          ((e.selectedIdx = e.links.index(
                            document.activeElement
                          )),
                          t.keyCode)
                        ) {
                          case o.HOME:
                            if (!e.open) return;
                            return (
                              (e.selectedIdx = 0), U(e), t.preventDefault()
                            );
                          case o.END:
                            if (!e.open) return;
                            return (
                              (e.selectedIdx = e.links.length - 1),
                              U(e),
                              t.preventDefault()
                            );
                          case o.ESCAPE:
                            return C(e), e.toggle.focus(), t.stopPropagation();
                          case o.ARROW_RIGHT:
                          case o.ARROW_DOWN:
                            return (
                              (e.selectedIdx = Math.min(
                                e.links.length - 1,
                                e.selectedIdx + 1
                              )),
                              U(e),
                              t.preventDefault()
                            );
                          case o.ARROW_LEFT:
                          case o.ARROW_UP:
                            return (
                              (e.selectedIdx = Math.max(-1, e.selectedIdx - 1)),
                              U(e),
                              t.preventDefault()
                            );
                        }
                    };
                  })(c)
                ),
                c.el.on(
                  E,
                  (function (e) {
                    return l(function (t) {
                      var { relatedTarget: a, target: n } = t,
                        i = e.el[0];
                      return (
                        !(i.contains(a) || i.contains(n)) && C(e),
                        t.stopPropagation()
                      );
                    });
                  })(c)
                ),
                c.toggle.on(O, I),
                c.toggle.on(
                  T,
                  (function (e) {
                    var t = h(e, !0);
                    return function (n) {
                      if (!a) {
                        if (!e.open)
                          switch (n.keyCode) {
                            case o.ARROW_UP:
                            case o.ARROW_DOWN:
                              return n.stopPropagation();
                          }
                        switch (n.keyCode) {
                          case o.SPACE:
                          case o.ENTER:
                            return t(), n.stopPropagation(), n.preventDefault();
                        }
                      }
                    };
                  })(c)
                ),
                (c.nav = c.el.closest(".w-nav")),
                c.nav.on(v, I));
          }
          function L(e) {
            var t = Number(e.el.css("z-index"));
            (e.manageZ = 900 === t || 901 === t),
              (e.config = {
                hover: "true" === e.el.attr("data-hover") && !f,
                delay: e.el.attr("data-delay"),
              });
          }
          (c.ready = _),
            (c.design = function () {
              u &&
                (function () {
                  S.find(p).each(function (t, a) {
                    e(a).triggerHandler(v);
                  });
                })(),
                (u = !1),
                _();
            }),
            (c.preview = function () {
              (u = !0), _();
            });
          function h(e, t) {
            return l(function (a) {
              if (e.open || (a && "w-close" === a.type))
                return C(e, { forceClose: t });
              N(e);
            });
          }
          function N(t) {
            if (!t.open) {
              (function (t) {
                var a = t.el[0];
                r.each(function (t, n) {
                  var i = e(n);
                  if (!i.is(a) && !i.has(a).length) i.triggerHandler(v);
                });
              })(t),
                (t.open = !0),
                t.list.addClass(g),
                t.toggle.addClass(g),
                t.toggle.attr("aria-expanded", "true"),
                I.intro(0, t.el[0]),
                n.redraw.up(),
                t.manageZ && t.el.css("z-index", 901);
              var i = n.env("editor");
              !a && S.on(O, t.mouseUpOutside),
                t.hovering && !i && t.el.on(b, t.mouseLeave),
                t.hovering && i && S.on(m, t.mouseMoveOutside),
                window.clearTimeout(t.delayId);
            }
          }
          function C(e, { immediate: t, forceClose: a } = {}) {
            if (!!e.open && (!e.config.hover || !e.hovering || !!a)) {
              e.toggle.attr("aria-expanded", "false"), (e.open = !1);
              var n = e.config;
              if (
                (I.outro(0, e.el[0]),
                S.off(O, e.mouseUpOutside),
                S.off(m, e.mouseMoveOutside),
                e.el.off(b, e.mouseLeave),
                window.clearTimeout(e.delayId),
                !n.delay || t)
              )
                return e.complete();
              e.delayId = window.setTimeout(e.complete, n.delay);
            }
          }
          function U(e) {
            e.links[e.selectedIdx] && e.links[e.selectedIdx].focus();
          }
          return c;
        })
      );
    },
    6524: function (e, t) {
      "use strict";
      function a(e, t, a, n, i, o, d, r, l, c, s, u, f) {
        return function (p) {
          e(p);
          var g = p.form,
            I = {
              name: g.attr("data-name") || g.attr("name") || "Untitled Form",
              pageId: g.attr("data-wf-page-id") || "",
              elementId: g.attr("data-wf-element-id") || "",
              domain: u("html").attr("data-wf-domain") || null,
              source: t.href,
              test: a.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                g.html()
              ),
              trackingCookies: n(),
            };
          let E = g.attr("data-wf-flow");
          E && (I.wfFlow = E), i(p);
          var T = o(g, I.fields);
          if (T) return d(T);
          if (((I.fileUploads = r(g)), l(p), !c)) {
            s(p);
            return;
          }
          u.ajax({
            url: f,
            type: "POST",
            data: I,
            dataType: "json",
            crossDomain: !0,
          })
            .done(function (e) {
              e && 200 === e.code && (p.success = !0), s(p);
            })
            .fail(function () {
              s(p);
            });
        };
      }
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    },
    7527: function (e, t, a) {
      "use strict";
      var n = a(3949);
      let i = (e, t, a, n) => {
        let i = document.createElement("div");
        t.appendChild(i),
          turnstile.render(i, {
            sitekey: e,
            callback: function (e) {
              a(e);
            },
            "error-callback": function () {
              n();
            },
          });
      };
      n.define(
        "forms",
        (e.exports = function (e, t) {
          let o;
          let d = "TURNSTILE_LOADED";
          var r,
            l,
            c,
            s,
            u,
            f = {},
            p = e(document),
            g = window.location,
            I = window.XDomainRequest && !window.atob,
            E = ".w-form",
            T = /e(-)?mail/i,
            y = /^\S+@\S+$/,
            m = window.alert,
            b = n.env();
          let O = p.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
          var v = /list-manage[1-9]?.com/i,
            R = t.debounce(function () {
              m(
                "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
              );
            }, 100);
          f.ready =
            f.design =
            f.preview =
              function () {
                (function () {
                  O &&
                    (((o = document.createElement("script")).src =
                      "https://challenges.cloudflare.com/turnstile/v0/api.js"),
                    document.head.appendChild(o),
                    (o.onload = () => {
                      p.trigger(d);
                    }));
                })(),
                  (function () {
                    if (
                      ((s =
                        "https://webflow.com/api/v1/form/" +
                        (l = e("html").attr("data-wf-site"))),
                      I &&
                        s.indexOf("https://webflow.com") >= 0 &&
                        (s = s.replace(
                          "https://webflow.com",
                          "https://formdata.webflow.com"
                        )),
                      (u = `${s}/signFile`),
                      !!(r = e(E + " form")).length)
                    )
                      r.each(S);
                  })(),
                  !b &&
                    !c &&
                    (function () {
                      (c = !0),
                        p.on("submit", E + " form", function (t) {
                          var a = e.data(this, E);
                          a.handler && ((a.evt = t), a.handler(a));
                        });
                      let t = ".w-checkbox-input",
                        a = ".w-radio-input",
                        n = "w--redirected-checked",
                        i = "w--redirected-focus",
                        o = "w--redirected-focus-visible",
                        d = [
                          ["checkbox", t],
                          ["radio", a],
                        ];
                      p.on(
                        "change",
                        E + ' form input[type="checkbox"]:not(' + t + ")",
                        (a) => {
                          e(a.target).siblings(t).toggleClass(n);
                        }
                      ),
                        p.on("change", E + ' form input[type="radio"]', (i) => {
                          e(`input[name="${i.target.name}"]:not(${t})`).map(
                            (t, i) => e(i).siblings(a).removeClass(n)
                          );
                          let o = e(i.target);
                          !o.hasClass("w-radio-input") &&
                            o.siblings(a).addClass(n);
                        }),
                        d.forEach(([t, a]) => {
                          p.on(
                            "focus",
                            E + ` form input[type="${t}"]:not(` + a + ")",
                            (t) => {
                              e(t.target).siblings(a).addClass(i),
                                e(t.target)
                                  .filter(
                                    ":focus-visible, [data-wf-focus-visible]"
                                  )
                                  .siblings(a)
                                  .addClass(o);
                            }
                          ),
                            p.on(
                              "blur",
                              E + ` form input[type="${t}"]:not(` + a + ")",
                              (t) => {
                                e(t.target)
                                  .siblings(a)
                                  .removeClass(`${i} ${o}`);
                              }
                            );
                        });
                    })();
              };
          function S(t, o) {
            var r = e(o),
              c = e.data(o, E);
            !c && (c = e.data(o, E, { form: r })), _(c);
            var f = r.closest("div.w-form");
            (c.done = f.find("> .w-form-done")),
              (c.fail = f.find("> .w-form-fail")),
              (c.fileUploads = f.find(".w-file-upload")),
              c.fileUploads.each(function (t) {
                (function (t, a) {
                  if (!!a.fileUploads && !!a.fileUploads[t]) {
                    var n,
                      i = e(a.fileUploads[t]),
                      o = i.find("> .w-file-upload-default"),
                      d = i.find("> .w-file-upload-uploading"),
                      r = i.find("> .w-file-upload-success"),
                      l = i.find("> .w-file-upload-error"),
                      c = o.find(".w-file-upload-input"),
                      s = o.find(".w-file-upload-label"),
                      f = s.children(),
                      p = l.find(".w-file-upload-error-msg"),
                      g = r.find(".w-file-upload-file"),
                      I = r.find(".w-file-remove-link"),
                      E = g.find(".w-file-upload-file-name"),
                      T = p.attr("data-w-size-error"),
                      y = p.attr("data-w-type-error"),
                      m = p.attr("data-w-generic-error");
                    if (
                      (!b &&
                        s.on("click keydown", function (e) {
                          if (
                            "keydown" !== e.type ||
                            13 === e.which ||
                            32 === e.which
                          )
                            e.preventDefault(), c.click();
                        }),
                      s
                        .find(".w-icon-file-upload-icon")
                        .attr("aria-hidden", "true"),
                      I.find(".w-icon-file-upload-remove").attr(
                        "aria-hidden",
                        "true"
                      ),
                      b)
                    )
                      c.on("click", function (e) {
                        e.preventDefault();
                      }),
                        s.on("click", function (e) {
                          e.preventDefault();
                        }),
                        f.on("click", function (e) {
                          e.preventDefault();
                        });
                    else {
                      I.on("click keydown", function (e) {
                        if ("keydown" === e.type) {
                          if (13 !== e.which && 32 !== e.which) return;
                          e.preventDefault();
                        }
                        c.removeAttr("data-value"),
                          c.val(""),
                          E.html(""),
                          o.toggle(!0),
                          r.toggle(!1),
                          s.focus();
                      }),
                        c.on("change", function (i) {
                          if (
                            !!(n =
                              i.target && i.target.files && i.target.files[0])
                          )
                            o.toggle(!1),
                              l.toggle(!1),
                              d.toggle(!0),
                              d.focus(),
                              E.text(n.name),
                              !L() && A(a),
                              (a.fileUploads[t].uploading = !0),
                              (function (t, a) {
                                var n = new URLSearchParams({
                                  name: t.name,
                                  size: t.size,
                                });
                                e.ajax({
                                  type: "GET",
                                  url: `${u}?${n}`,
                                  crossDomain: !0,
                                })
                                  .done(function (e) {
                                    a(null, e);
                                  })
                                  .fail(function (e) {
                                    a(e);
                                  });
                              })(n, R);
                        });
                      var O = s.outerHeight();
                      c.height(O), c.width(1);
                    }
                  }
                  function v(e) {
                    var n = e.responseJSON && e.responseJSON.msg,
                      i = m;
                    "string" == typeof n &&
                    0 === n.indexOf("InvalidFileTypeError")
                      ? (i = y)
                      : "string" == typeof n &&
                        0 === n.indexOf("MaxFileSizeError") &&
                        (i = T),
                      p.text(i),
                      c.removeAttr("data-value"),
                      c.val(""),
                      d.toggle(!1),
                      o.toggle(!0),
                      l.toggle(!0),
                      l.focus(),
                      (a.fileUploads[t].uploading = !1),
                      !L() && _(a);
                  }
                  function R(t, a) {
                    if (t) return v(t);
                    var i = a.fileName,
                      o = a.postData,
                      d = a.fileId,
                      r = a.s3Url;
                    c.attr("data-value", d),
                      (function (t, a, n, i, o) {
                        var d = new FormData();
                        for (var r in a) d.append(r, a[r]);
                        d.append("file", n, i),
                          e
                            .ajax({
                              type: "POST",
                              url: t,
                              data: d,
                              processData: !1,
                              contentType: !1,
                            })
                            .done(function () {
                              o(null);
                            })
                            .fail(function (e) {
                              o(e);
                            });
                      })(r, o, n, i, S);
                  }
                  function S(e) {
                    if (e) return v(e);
                    d.toggle(!1),
                      r.css("display", "inline-block"),
                      r.focus(),
                      (a.fileUploads[t].uploading = !1),
                      !L() && _(a);
                  }
                  function L() {
                    return (
                      (a.fileUploads && a.fileUploads.toArray()) ||
                      []
                    ).some(function (e) {
                      return e.uploading;
                    });
                  }
                })(t, c);
              }),
              O &&
                ((c.wait = !1),
                A(c),
                p.on(
                  "undefined" != typeof turnstile ? "ready" : d,
                  function () {
                    i(
                      O,
                      o,
                      (e) => {
                        (c.turnstileToken = e), _(c);
                      },
                      () => {
                        A(c);
                      }
                    );
                  }
                ));
            var I =
              c.form.attr("aria-label") || c.form.attr("data-name") || "Form";
            !c.done.attr("aria-label") && c.form.attr("aria-label", I),
              c.done.attr("tabindex", "-1"),
              c.done.attr("role", "region"),
              !c.done.attr("aria-label") &&
                c.done.attr("aria-label", I + " success"),
              c.fail.attr("tabindex", "-1"),
              c.fail.attr("role", "region"),
              !c.fail.attr("aria-label") &&
                c.fail.attr("aria-label", I + " failure");
            var T = (c.action = r.attr("action"));
            if (
              ((c.handler = null),
              (c.redirect = r.attr("data-redirect")),
              v.test(T))
            ) {
              c.handler = U;
              return;
            }
            if (!T) {
              if (l) {
                c.handler = (0, a(6524).default)(
                  _,
                  g,
                  n,
                  C,
                  M,
                  L,
                  m,
                  h,
                  A,
                  l,
                  V,
                  e,
                  s
                );
                return;
              }
              R();
            }
          }
          function _(e) {
            var t = (e.btn = e.form.find(':input[type="submit"]'));
            (e.wait = e.btn.attr("data-wait") || null),
              (e.success = !1),
              t.prop("disabled", !!(O && !e.turnstileToken)),
              e.label && t.val(e.label);
          }
          function A(e) {
            var t = e.btn,
              a = e.wait;
            t.prop("disabled", !0), a && ((e.label = t.val()), t.val(a));
          }
          function L(t, a) {
            var n = null;
            return (
              (a = a || {}),
              t
                .find(
                  ':input:not([type="submit"]):not([type="file"]):not([type="button"])'
                )
                .each(function (i, o) {
                  var d = e(o),
                    r = d.attr("type"),
                    l =
                      d.attr("data-name") ||
                      d.attr("name") ||
                      "Field " + (i + 1);
                  l = encodeURIComponent(l);
                  var c = d.val();
                  if ("checkbox" === r) c = d.is(":checked");
                  else if ("radio" === r) {
                    if (null === a[l] || "string" == typeof a[l]) return;
                    c =
                      t
                        .find('input[name="' + d.attr("name") + '"]:checked')
                        .val() || null;
                  }
                  "string" == typeof c && (c = e.trim(c)),
                    (a[l] = c),
                    (n =
                      n ||
                      (function (e, t, a, n) {
                        var i = null;
                        return (
                          "password" === t
                            ? (i = "Passwords cannot be submitted.")
                            : e.attr("required")
                            ? n
                              ? T.test(e.attr("type")) &&
                                !y.test(n) &&
                                (i =
                                  "Please enter a valid email address for: " +
                                  a)
                              : (i = "Please fill out the required field: " + a)
                            : "g-recaptcha-response" === a &&
                              !n &&
                              (i = "Please confirm youâ€™re not a robot."),
                          i
                        );
                      })(d, r, l, c));
                }),
              n
            );
          }
          function h(t) {
            var a = {};
            return (
              t.find(':input[type="file"]').each(function (t, n) {
                var i = e(n),
                  o =
                    i.attr("data-name") || i.attr("name") || "File " + (t + 1),
                  d = i.attr("data-value");
                "string" == typeof d && (d = e.trim(d)), (a[o] = d);
              }),
              a
            );
          }
          let N = { _mkto_trk: "marketo" };
          function C() {
            return document.cookie.split("; ").reduce(function (e, t) {
              let a = t.split("="),
                n = a[0];
              if (n in N) {
                let t = N[n],
                  i = a.slice(1).join("=");
                e[t] = i;
              }
              return e;
            }, {});
          }
          function U(a) {
            _(a);
            var n,
              i = a.form,
              o = {};
            if (/^https/.test(g.href) && !/^https/.test(a.action)) {
              i.attr("method", "post");
              return;
            }
            M(a);
            var d = L(i, o);
            if (d) return m(d);
            A(a),
              t.each(o, function (e, t) {
                T.test(t) && (o.EMAIL = e),
                  /^((full[ _-]?)?name)$/i.test(t) && (n = e),
                  /^(first[ _-]?name)$/i.test(t) && (o.FNAME = e),
                  /^(last[ _-]?name)$/i.test(t) && (o.LNAME = e);
              }),
              n &&
                !o.FNAME &&
                ((n = n.split(" ")),
                (o.FNAME = n[0]),
                (o.LNAME = o.LNAME || n[1]));
            var r = a.action.replace("/post?", "/post-json?") + "&c=?",
              l = r.indexOf("u=") + 2;
            l = r.substring(l, r.indexOf("&", l));
            var c = r.indexOf("id=") + 3;
            (o["b_" + l + "_" + (c = r.substring(c, r.indexOf("&", c)))] = ""),
              e
                .ajax({ url: r, data: o, dataType: "jsonp" })
                .done(function (e) {
                  (a.success = "success" === e.result || /already/.test(e.msg)),
                    !a.success && console.info("MailChimp error: " + e.msg),
                    V(a);
                })
                .fail(function () {
                  V(a);
                });
          }
          function V(e) {
            var t = e.form,
              a = e.redirect,
              i = e.success;
            if (i && a) {
              n.location(a);
              return;
            }
            e.done.toggle(i),
              e.fail.toggle(!i),
              i ? e.done.focus() : e.fail.focus(),
              t.toggle(!i),
              _(e);
          }
          function M(e) {
            e.evt && e.evt.preventDefault(), (e.evt = null);
          }
          return f;
        })
      );
    },
    1655: function (e, t, a) {
      "use strict";
      var n = a(3949),
        i = a(5134);
      let o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
      n.define(
        "navbar",
        (e.exports = function (e, t) {
          var a,
            d,
            r,
            l,
            c = {},
            s = e.tram,
            u = e(window),
            f = e(document),
            p = t.debounce,
            g = n.env(),
            I = ".w-nav",
            E = "w--open",
            T = "w--nav-dropdown-open",
            y = "w--nav-dropdown-toggle-open",
            m = "w--nav-dropdown-list-open",
            b = "w--nav-link-open",
            O = i.triggers,
            v = e();
          (c.ready =
            c.design =
            c.preview =
              function () {
                if (
                  ((r = g && n.env("design")),
                  (l = n.env("editor")),
                  (a = e(document.body)),
                  !!(d = f.find(I)).length)
                )
                  d.each(_),
                    R(),
                    (function () {
                      n.resize.on(S);
                    })();
              }),
            (c.destroy = function () {
              (v = e()), R(), d && d.length && d.each(A);
            });
          function R() {
            n.resize.off(S);
          }
          function S() {
            d.each(x);
          }
          function _(a, n) {
            var i = e(n),
              d = e.data(n, I);
            !d &&
              (d = e.data(n, I, {
                open: !1,
                el: i,
                config: {},
                selectedIdx: -1,
              })),
              (d.menu = i.find(".w-nav-menu")),
              (d.links = d.menu.find(".w-nav-link")),
              (d.dropdowns = d.menu.find(".w-dropdown")),
              (d.dropdownToggle = d.menu.find(".w-dropdown-toggle")),
              (d.dropdownList = d.menu.find(".w-dropdown-list")),
              (d.button = i.find(".w-nav-button")),
              (d.container = i.find(".w-container")),
              (d.overlayContainerId = "w-nav-overlay-" + a),
              (d.outside = (function (t) {
                return (
                  t.outside && f.off("click" + I, t.outside),
                  function (a) {
                    var n = e(a.target);
                    if (!l || !n.closest(".w-editor-bem-EditorOverlay").length)
                      M(t, n);
                  }
                );
              })(d));
            var c = i.find(".w-nav-brand");
            c &&
              "/" === c.attr("href") &&
              null == c.attr("aria-label") &&
              c.attr("aria-label", "home"),
              d.button.attr("style", "-webkit-user-select: text;"),
              null == d.button.attr("aria-label") &&
                d.button.attr("aria-label", "menu"),
              d.button.attr("role", "button"),
              d.button.attr("tabindex", "0"),
              d.button.attr("aria-controls", d.overlayContainerId),
              d.button.attr("aria-haspopup", "menu"),
              d.button.attr("aria-expanded", "false"),
              d.el.off(I),
              d.button.off(I),
              d.menu.off(I),
              h(d),
              r
                ? (L(d),
                  d.el.on(
                    "setting" + I,
                    (function (e) {
                      return function (a, n) {
                        n = n || {};
                        var i = u.width();
                        h(e),
                          !0 === n.open && k(e, !0),
                          !1 === n.open && D(e, !0),
                          e.open &&
                            t.defer(function () {
                              i !== u.width() && C(e);
                            });
                      };
                    })(d)
                  ))
                : ((function (t) {
                    if (!t.overlay)
                      (t.overlay = e(
                        '<div class="w-nav-overlay" data-wf-ignore />'
                      ).appendTo(t.el)),
                        t.overlay.attr("id", t.overlayContainerId),
                        (t.parent = t.menu.parent()),
                        D(t, !0);
                  })(d),
                  d.button.on("click" + I, U(d)),
                  d.menu.on("click" + I, "a", V(d)),
                  d.button.on(
                    "keydown" + I,
                    (function (e) {
                      return function (t) {
                        switch (t.keyCode) {
                          case o.SPACE:
                          case o.ENTER:
                            return (
                              U(e)(), t.preventDefault(), t.stopPropagation()
                            );
                          case o.ESCAPE:
                            return (
                              D(e), t.preventDefault(), t.stopPropagation()
                            );
                          case o.ARROW_RIGHT:
                          case o.ARROW_DOWN:
                          case o.HOME:
                          case o.END:
                            if (!e.open)
                              return t.preventDefault(), t.stopPropagation();
                            return (
                              t.keyCode === o.END
                                ? (e.selectedIdx = e.links.length - 1)
                                : (e.selectedIdx = 0),
                              N(e),
                              t.preventDefault(),
                              t.stopPropagation()
                            );
                        }
                      };
                    })(d)
                  ),
                  d.el.on(
                    "keydown" + I,
                    (function (e) {
                      return function (t) {
                        if (!!e.open)
                          switch (
                            ((e.selectedIdx = e.links.index(
                              document.activeElement
                            )),
                            t.keyCode)
                          ) {
                            case o.HOME:
                            case o.END:
                              return (
                                t.keyCode === o.END
                                  ? (e.selectedIdx = e.links.length - 1)
                                  : (e.selectedIdx = 0),
                                N(e),
                                t.preventDefault(),
                                t.stopPropagation()
                              );
                            case o.ESCAPE:
                              return (
                                D(e),
                                e.button.focus(),
                                t.preventDefault(),
                                t.stopPropagation()
                              );
                            case o.ARROW_LEFT:
                            case o.ARROW_UP:
                              return (
                                (e.selectedIdx = Math.max(
                                  -1,
                                  e.selectedIdx - 1
                                )),
                                N(e),
                                t.preventDefault(),
                                t.stopPropagation()
                              );
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                              return (
                                (e.selectedIdx = Math.min(
                                  e.links.length - 1,
                                  e.selectedIdx + 1
                                )),
                                N(e),
                                t.preventDefault(),
                                t.stopPropagation()
                              );
                          }
                      };
                    })(d)
                  )),
              x(a, n);
          }
          function A(t, a) {
            var n = e.data(a, I);
            n && (L(n), e.removeData(a, I));
          }
          function L(e) {
            if (!!e.overlay) D(e, !0), e.overlay.remove(), (e.overlay = null);
          }
          function h(e) {
            var a = {},
              n = e.config || {},
              i = (a.animation = e.el.attr("data-animation") || "default");
            (a.animOver = /^over/.test(i)),
              (a.animDirect = /left$/.test(i) ? -1 : 1),
              n.animation !== i && e.open && t.defer(C, e),
              (a.easing = e.el.attr("data-easing") || "ease"),
              (a.easing2 = e.el.attr("data-easing2") || "ease");
            var o = e.el.attr("data-duration");
            (a.duration = null != o ? Number(o) : 400),
              (a.docHeight = e.el.attr("data-doc-height")),
              (e.config = a);
          }
          function N(e) {
            if (e.links[e.selectedIdx]) {
              var t = e.links[e.selectedIdx];
              t.focus(), V(t);
            }
          }
          function C(e) {
            if (!!e.open) D(e, !0), k(e, !0);
          }
          function U(e) {
            return p(function () {
              e.open ? D(e) : k(e);
            });
          }
          function V(t) {
            return function (a) {
              var i = e(this).attr("href");
              if (!n.validClick(a.currentTarget)) {
                a.preventDefault();
                return;
              }
              i && 0 === i.indexOf("#") && t.open && D(t);
            };
          }
          var M = p(function (e, t) {
            if (!!e.open) {
              var a = t.closest(".w-nav-menu");
              !e.menu.is(a) && D(e);
            }
          });
          function x(t, a) {
            var n = e.data(a, I),
              i = (n.collapsed = "none" !== n.button.css("display"));
            if ((n.open && !i && !r && D(n, !0), n.container.length)) {
              var o = (function (t) {
                var a = t.container.css(w);
                return (
                  "none" === a && (a = ""),
                  function (t, n) {
                    (n = e(n)).css(w, ""), "none" === n.css(w) && n.css(w, a);
                  }
                );
              })(n);
              n.links.each(o), n.dropdowns.each(o);
            }
            n.open && F(n);
          }
          var w = "max-width";
          function G(e, t) {
            t.setAttribute("data-nav-menu-open", "");
          }
          function P(e, t) {
            t.removeAttribute("data-nav-menu-open");
          }
          function k(e, t) {
            if (!e.open) {
              (e.open = !0),
                e.menu.each(G),
                e.links.addClass(b),
                e.dropdowns.addClass(T),
                e.dropdownToggle.addClass(y),
                e.dropdownList.addClass(m),
                e.button.addClass(E);
              var a = e.config;
              ("none" === a.animation ||
                !s.support.transform ||
                a.duration <= 0) &&
                (t = !0);
              var i = F(e),
                o = e.menu.outerHeight(!0),
                d = e.menu.outerWidth(!0),
                l = e.el.height(),
                c = e.el[0];
              if (
                (x(0, c),
                O.intro(0, c),
                n.redraw.up(),
                !r && f.on("click" + I, e.outside),
                t)
              ) {
                p();
                return;
              }
              var u = "transform " + a.duration + "ms " + a.easing;
              if (
                (e.overlay &&
                  ((v = e.menu.prev()), e.overlay.show().append(e.menu)),
                a.animOver)
              ) {
                s(e.menu)
                  .add(u)
                  .set({ x: a.animDirect * d, height: i })
                  .start({ x: 0 })
                  .then(p),
                  e.overlay && e.overlay.width(d);
                return;
              }
              s(e.menu)
                .add(u)
                .set({ y: -(l + o) })
                .start({ y: 0 })
                .then(p);
            }
            function p() {
              e.button.attr("aria-expanded", "true");
            }
          }
          function F(e) {
            var t = e.config,
              n = t.docHeight ? f.height() : a.height();
            return (
              t.animOver
                ? e.menu.height(n)
                : "fixed" !== e.el.css("position") &&
                  (n -= e.el.outerHeight(!0)),
              e.overlay && e.overlay.height(n),
              n
            );
          }
          function D(e, t) {
            if (!!e.open) {
              (e.open = !1), e.button.removeClass(E);
              var a = e.config;
              if (
                (("none" === a.animation ||
                  !s.support.transform ||
                  a.duration <= 0) &&
                  (t = !0),
                O.outro(0, e.el[0]),
                f.off("click" + I, e.outside),
                t)
              ) {
                s(e.menu).stop(), r();
                return;
              }
              var n = "transform " + a.duration + "ms " + a.easing2,
                i = e.menu.outerHeight(!0),
                o = e.menu.outerWidth(!0),
                d = e.el.height();
              if (a.animOver) {
                s(e.menu)
                  .add(n)
                  .start({ x: o * a.animDirect })
                  .then(r);
                return;
              }
              s(e.menu)
                .add(n)
                .start({ y: -(d + i) })
                .then(r);
            }
            function r() {
              e.menu.height(""),
                s(e.menu).set({ x: 0, y: 0 }),
                e.menu.each(P),
                e.links.removeClass(b),
                e.dropdowns.removeClass(T),
                e.dropdownToggle.removeClass(y),
                e.dropdownList.removeClass(m),
                e.overlay &&
                  e.overlay.children().length &&
                  (v.length
                    ? e.menu.insertAfter(v)
                    : e.menu.prependTo(e.parent),
                  e.overlay.attr("style", "").hide()),
                e.el.triggerHandler("w-close"),
                e.button.attr("aria-expanded", "false");
            }
          }
          return c;
        })
      );
    },
    3946: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        actionListPlaybackChanged: function () {
          return Q;
        },
        animationFrameChanged: function () {
          return P;
        },
        clearRequested: function () {
          return M;
        },
        elementStateChanged: function () {
          return B;
        },
        eventListenerAdded: function () {
          return x;
        },
        eventStateChanged: function () {
          return G;
        },
        instanceAdded: function () {
          return F;
        },
        instanceRemoved: function () {
          return X;
        },
        instanceStarted: function () {
          return D;
        },
        mediaQueriesDefined: function () {
          return Y;
        },
        parameterChanged: function () {
          return k;
        },
        playbackRequested: function () {
          return U;
        },
        previewRequested: function () {
          return C;
        },
        rawDataImported: function () {
          return A;
        },
        sessionInitialized: function () {
          return L;
        },
        sessionStarted: function () {
          return h;
        },
        sessionStopped: function () {
          return N;
        },
        stopRequested: function () {
          return V;
        },
        testFrameRendered: function () {
          return w;
        },
        viewportWidthChanged: function () {
          return H;
        },
      });
      let n = a(7087),
        i = a(9468),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_INITIALIZED: d,
          IX2_SESSION_STARTED: r,
          IX2_SESSION_STOPPED: l,
          IX2_PREVIEW_REQUESTED: c,
          IX2_PLAYBACK_REQUESTED: s,
          IX2_STOP_REQUESTED: u,
          IX2_CLEAR_REQUESTED: f,
          IX2_EVENT_LISTENER_ADDED: p,
          IX2_TEST_FRAME_RENDERED: g,
          IX2_EVENT_STATE_CHANGED: I,
          IX2_ANIMATION_FRAME_CHANGED: E,
          IX2_PARAMETER_CHANGED: T,
          IX2_INSTANCE_ADDED: y,
          IX2_INSTANCE_STARTED: m,
          IX2_INSTANCE_REMOVED: b,
          IX2_ELEMENT_STATE_CHANGED: O,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: v,
          IX2_VIEWPORT_WIDTH_CHANGED: R,
          IX2_MEDIA_QUERIES_DEFINED: S,
        } = n.IX2EngineActionTypes,
        { reifyState: _ } = i.IX2VanillaUtils,
        A = (e) => ({ type: o, payload: { ..._(e) } }),
        L = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: d,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        h = () => ({ type: r }),
        N = () => ({ type: l }),
        C = ({ rawData: e, defer: t }) => ({
          type: c,
          payload: { defer: t, rawData: e },
        }),
        U = ({
          actionTypeId: e = n.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: a,
          eventId: i,
          allowEvents: o,
          immediate: d,
          testManual: r,
          verbose: l,
          rawData: c,
        }) => ({
          type: s,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: a,
            testManual: r,
            eventId: i,
            allowEvents: o,
            immediate: d,
            verbose: l,
            rawData: c,
          },
        }),
        V = (e) => ({ type: u, payload: { actionListId: e } }),
        M = () => ({ type: f }),
        x = (e, t) => ({ type: p, payload: { target: e, listenerParams: t } }),
        w = (e = 1) => ({ type: g, payload: { step: e } }),
        G = (e, t) => ({ type: I, payload: { stateKey: e, newState: t } }),
        P = (e, t) => ({ type: E, payload: { now: e, parameters: t } }),
        k = (e, t) => ({ type: T, payload: { key: e, value: t } }),
        F = (e) => ({ type: y, payload: { ...e } }),
        D = (e, t) => ({ type: m, payload: { instanceId: e, time: t } }),
        X = (e) => ({ type: b, payload: { instanceId: e } }),
        B = (e, t, a, n) => ({
          type: O,
          payload: { elementId: e, actionTypeId: t, current: a, actionItem: n },
        }),
        Q = ({ actionListId: e, isPlaying: t }) => ({
          type: v,
          payload: { actionListId: e, isPlaying: t },
        }),
        H = ({ width: e, mediaQueries: t }) => ({
          type: R,
          payload: { width: e, mediaQueries: t },
        }),
        Y = () => ({ type: S });
    },
    6011: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        actions: function () {
          return d;
        },
        destroy: function () {
          return u;
        },
        init: function () {
          return s;
        },
        setEnv: function () {
          return c;
        },
        store: function () {
          return l;
        },
      });
      let n = a(9516),
        i = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(a(7243)),
        o = a(1970),
        d = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var a = r(t);
          if (a && a.has(e)) return a.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              d && (d.get || d.set)
                ? Object.defineProperty(n, o, d)
                : (n[o] = e[o]);
            }
          return (n.default = e), a && a.set(e, n), n;
        })(a(3946));
      function r(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (r = function (e) {
          return e ? a : t;
        })(e);
      }
      let l = (0, n.createStore)(i.default);
      function c(e) {
        e() && (0, o.observeRequests)(l);
      }
      function s(e) {
        u(), (0, o.startEngine)({ store: l, rawData: e, allowEvents: !0 });
      }
      function u() {
        (0, o.stopEngine)(l);
      }
    },
    5012: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        elementContains: function () {
          return T;
        },
        getChildElements: function () {
          return m;
        },
        getClosestElement: function () {
          return O;
        },
        getProperty: function () {
          return f;
        },
        getQuerySelector: function () {
          return g;
        },
        getRefType: function () {
          return v;
        },
        getSiblingElements: function () {
          return b;
        },
        getStyle: function () {
          return u;
        },
        getValidDocument: function () {
          return I;
        },
        isSiblingNode: function () {
          return y;
        },
        matchSelector: function () {
          return p;
        },
        queryDocument: function () {
          return E;
        },
        setStyle: function () {
          return s;
        },
      });
      let n = a(9468),
        i = a(7087),
        { ELEMENT_MATCHES: o } = n.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: d,
          HTML_ELEMENT: r,
          PLAIN_OBJECT: l,
          WF_PAGE: c,
        } = i.IX2EngineConstants;
      function s(e, t, a) {
        e.style[t] = a;
      }
      function u(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function f(e, t) {
        return e[t];
      }
      function p(e) {
        return (t) => t[o](e);
      }
      function g({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(d)) {
            let a = e.split(d),
              n = a[0];
            if (((t = a[1]), n !== document.documentElement.getAttribute(c)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function I(e) {
        return null == e || e === document.documentElement.getAttribute(c)
          ? document
          : null;
      }
      function E(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }
      function T(e, t) {
        return e.contains(t);
      }
      function y(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function m(e) {
        let t = [];
        for (let a = 0, { length: n } = e || []; a < n; a++) {
          let { children: n } = e[a],
            { length: i } = n;
          if (!!i) for (let e = 0; e < i; e++) t.push(n[e]);
        }
        return t;
      }
      function b(e = []) {
        let t = [],
          a = [];
        for (let n = 0, { length: i } = e; n < i; n++) {
          let { parentNode: i } = e[n];
          if (!i || !i.children || !i.children.length || -1 !== a.indexOf(i))
            continue;
          a.push(i);
          let o = i.firstElementChild;
          for (; null != o; )
            -1 === e.indexOf(o) && t.push(o), (o = o.nextElementSibling);
        }
        return t;
      }
      let O = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let a = e;
            do {
              if (a[o] && a[o](t)) return a;
              a = a.parentNode;
            } while (null != a);
            return null;
          };
      function v(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? r
            : l
          : null;
      }
    },
    1970: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        observeRequests: function () {
          return $;
        },
        startActionGroup: function () {
          return ef;
        },
        startEngine: function () {
          return et;
        },
        stopActionGroup: function () {
          return eu;
        },
        stopAllActionGroups: function () {
          return es;
        },
        stopEngine: function () {
          return ea;
        },
      });
      let n = E(a(9777)),
        i = E(a(4738)),
        o = E(a(4659)),
        d = E(a(3452)),
        r = E(a(6633)),
        l = E(a(3729)),
        c = E(a(2397)),
        s = E(a(5082)),
        u = a(7087),
        f = a(9468),
        p = a(3946),
        g = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var a = T(t);
          if (a && a.has(e)) return a.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              d && (d.get || d.set)
                ? Object.defineProperty(n, o, d)
                : (n[o] = e[o]);
            }
          return (n.default = e), a && a.set(e, n), n;
        })(a(5012)),
        I = E(a(8955));
      function E(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function T(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (T = function (e) {
          return e ? a : t;
        })(e);
      }
      let y = Object.keys(u.QuickEffectIds),
        m = (e) => y.includes(e),
        {
          COLON_DELIMITER: b,
          BOUNDARY_SELECTOR: O,
          HTML_ELEMENT: v,
          RENDER_GENERAL: R,
          W_MOD_IX: S,
        } = u.IX2EngineConstants,
        {
          getAffectedElements: _,
          getElementId: A,
          getDestinationValues: L,
          observeStore: h,
          getInstanceId: N,
          renderHTMLElement: C,
          clearAllStyles: U,
          getMaxDurationItemIndex: V,
          getComputedStyle: M,
          getInstanceOrigin: x,
          reduceListToGroup: w,
          shouldNamespaceEventParameter: G,
          getNamespacedParameterId: P,
          shouldAllowMediaQuery: k,
          cleanupHTMLElement: F,
          clearObjectCache: D,
          stringifyTarget: X,
          mediaQueriesEqual: B,
          shallowEqual: Q,
        } = f.IX2VanillaUtils,
        {
          isPluginType: H,
          createPluginInstance: Y,
          getPluginDuration: W,
        } = f.IX2VanillaPlugins,
        z = navigator.userAgent,
        j = z.match(/iPad/i) || z.match(/iPhone/);
      function $(e) {
        h({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          h({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: K,
          }),
          h({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: J }),
          h({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: ee });
      }
      function Z({ rawData: e, defer: t }, a) {
        let n = () => {
          et({ store: a, rawData: e, allowEvents: !0 }), q();
        };
        t ? setTimeout(n, 0) : n();
      }
      function q() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function K(e, t) {
        let {
            actionTypeId: a,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: d,
            immediate: r,
            testManual: l,
            verbose: c = !0,
          } = e,
          { rawData: s } = e;
        if (n && i && s && r) {
          let e = s.actionLists[n];
          e && (s = w({ actionList: e, actionItemId: i, rawData: s }));
        }
        if (
          (et({ store: t, rawData: s, allowEvents: d, testManual: l }),
          (n && a === u.ActionTypeConsts.GENERAL_START_ACTION) || m(a))
        ) {
          eu({ store: t, actionListId: n }),
            ec({ store: t, actionListId: n, eventId: o });
          let e = ef({
            store: t,
            eventId: o,
            actionListId: n,
            immediate: r,
            verbose: c,
          });
          c &&
            e &&
            t.dispatch(
              (0, p.actionListPlaybackChanged)({
                actionListId: n,
                isPlaying: !r,
              })
            );
        }
      }
      function J({ actionListId: e }, t) {
        e ? eu({ store: t, actionListId: e }) : es({ store: t }), ea(t);
      }
      function ee(e, t) {
        ea(t), U({ store: t, elementApi: g });
      }
      function et({ store: e, rawData: t, allowEvents: a, testManual: d }) {
        let { ixSession: r } = e.getState();
        if ((t && e.dispatch((0, p.rawDataImported)(t)), !r.active)) {
          if (
            (e.dispatch(
              (0, p.sessionInitialized)({
                hasBoundaryNodes: !!document.querySelector(O),
                reducedMotion:
                  document.body.hasAttribute("data-wf-ix-vacation") &&
                  window.matchMedia("(prefers-reduced-motion)").matches,
              })
            ),
            a &&
              ((function (e) {
                let { ixData: t } = e.getState(),
                  { eventTypeMap: a } = t;
                eo(e),
                  (0, c.default)(a, (t, a) => {
                    let d = I.default[a];
                    if (!d) {
                      console.warn(`IX2 event type not configured: ${a}`);
                      return;
                    }
                    (function ({ logic: e, store: t, events: a }) {
                      (function (e) {
                        if (!j) return;
                        let t = {},
                          a = "";
                        for (let n in e) {
                          let { eventTypeId: i, target: o } = e[n],
                            d = g.getQuerySelector(o);
                          if (!t[d])
                            (i === u.EventTypeConsts.MOUSE_CLICK ||
                              i === u.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                              ((t[d] = !0),
                              (a +=
                                d +
                                "{cursor: pointer;touch-action: manipulation;}"));
                        }
                        if (a) {
                          let e = document.createElement("style");
                          (e.textContent = a), document.body.appendChild(e);
                        }
                      })(a);
                      let { types: d, handler: r } = e,
                        { ixData: l } = t.getState(),
                        { actionLists: f } = l,
                        I = ed(a, el);
                      if (!(0, o.default)(I)) return;
                      (0, c.default)(I, (e, o) => {
                        let d = a[o],
                          {
                            action: r,
                            id: c,
                            mediaQueries: s = l.mediaQueryKeys,
                          } = d,
                          { actionListId: I } = r.config;
                        !B(s, l.mediaQueryKeys) &&
                          t.dispatch((0, p.mediaQueriesDefined)()),
                          r.actionTypeId ===
                            u.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                            (Array.isArray(d.config)
                              ? d.config
                              : [d.config]
                            ).forEach((a) => {
                              let { continuousParameterGroupId: o } = a,
                                d = (0, i.default)(
                                  f,
                                  `${I}.continuousParameterGroups`,
                                  []
                                ),
                                r = (0, n.default)(d, ({ id: e }) => e === o),
                                l = (a.smoothing || 0) / 100,
                                s = (a.restingState || 0) / 100;
                              if (!!r)
                                e.forEach((e, n) => {
                                  !(function ({
                                    store: e,
                                    eventStateKey: t,
                                    eventTarget: a,
                                    eventId: n,
                                    eventConfig: o,
                                    actionListId: d,
                                    parameterGroup: r,
                                    smoothing: l,
                                    restingValue: c,
                                  }) {
                                    let { ixData: s, ixSession: f } =
                                        e.getState(),
                                      { events: p } = s,
                                      I = p[n],
                                      { eventTypeId: E } = I,
                                      T = {},
                                      y = {},
                                      m = [],
                                      { continuousActionGroups: v } = r,
                                      { id: R } = r;
                                    G(E, o) && (R = P(t, R));
                                    let S =
                                      f.hasBoundaryNodes && a
                                        ? g.getClosestElement(a, O)
                                        : null;
                                    v.forEach((e) => {
                                      let { keyframe: t, actionItems: n } = e;
                                      n.forEach((e) => {
                                        let { actionTypeId: n } = e,
                                          { target: i } = e.config;
                                        if (!i) return;
                                        let o = i.boundaryMode ? S : null,
                                          d = X(i) + b + n;
                                        if (
                                          ((y[d] = (function (e = [], t, a) {
                                            let n;
                                            let i = [...e];
                                            return (
                                              i.some(
                                                (e, a) =>
                                                  e.keyframe === t &&
                                                  ((n = a), !0)
                                              ),
                                              null == n &&
                                                ((n = i.length),
                                                i.push({
                                                  keyframe: t,
                                                  actionItems: [],
                                                })),
                                              i[n].actionItems.push(a),
                                              i
                                            );
                                          })(y[d], t, e)),
                                          !T[d])
                                        ) {
                                          T[d] = !0;
                                          let { config: t } = e;
                                          _({
                                            config: t,
                                            event: I,
                                            eventTarget: a,
                                            elementRoot: o,
                                            elementApi: g,
                                          }).forEach((e) => {
                                            m.push({ element: e, key: d });
                                          });
                                        }
                                      });
                                    }),
                                      m.forEach(({ element: t, key: a }) => {
                                        let o = y[a],
                                          r = (0, i.default)(
                                            o,
                                            "[0].actionItems[0]",
                                            {}
                                          ),
                                          { actionTypeId: s } = r,
                                          f = (
                                            s === u.ActionTypeConsts.PLUGIN_RIVE
                                              ? 0 ===
                                                (
                                                  r.config?.target
                                                    ?.selectorGuids || []
                                                ).length
                                              : H(s)
                                          )
                                            ? Y(s)?.(t, r)
                                            : null,
                                          p = L(
                                            {
                                              element: t,
                                              actionItem: r,
                                              elementApi: g,
                                            },
                                            f
                                          );
                                        ep({
                                          store: e,
                                          element: t,
                                          eventId: n,
                                          actionListId: d,
                                          actionItem: r,
                                          destination: p,
                                          continuous: !0,
                                          parameterId: R,
                                          actionGroups: o,
                                          smoothing: l,
                                          restingValue: c,
                                          pluginInstance: f,
                                        });
                                      });
                                  })({
                                    store: t,
                                    eventStateKey: c + b + n,
                                    eventTarget: e,
                                    eventId: c,
                                    eventConfig: a,
                                    actionListId: I,
                                    parameterGroup: r,
                                    smoothing: l,
                                    restingValue: s,
                                  });
                                });
                            }),
                          (r.actionTypeId ===
                            u.ActionTypeConsts.GENERAL_START_ACTION ||
                            m(r.actionTypeId)) &&
                            ec({ store: t, actionListId: I, eventId: c });
                      });
                      let E = (e) => {
                          let { ixSession: n } = t.getState();
                          er(I, (i, o, d) => {
                            let c = a[o],
                              s = n.eventState[d],
                              {
                                action: f,
                                mediaQueries: g = l.mediaQueryKeys,
                              } = c;
                            if (!k(g, n.mediaQueryKey)) return;
                            let I = (a = {}) => {
                              let n = r(
                                {
                                  store: t,
                                  element: i,
                                  event: c,
                                  eventConfig: a,
                                  nativeEvent: e,
                                  eventStateKey: d,
                                },
                                s
                              );
                              !Q(n, s) &&
                                t.dispatch((0, p.eventStateChanged)(d, n));
                            };
                            f.actionTypeId ===
                            u.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                              ? (Array.isArray(c.config)
                                  ? c.config
                                  : [c.config]
                                ).forEach(I)
                              : I();
                          });
                        },
                        T = (0, s.default)(E, 12),
                        y = ({
                          target: e = document,
                          types: a,
                          throttle: n,
                        }) => {
                          a.split(" ")
                            .filter(Boolean)
                            .forEach((a) => {
                              let i = n ? T : E;
                              e.addEventListener(a, i),
                                t.dispatch(
                                  (0, p.eventListenerAdded)(e, [a, i])
                                );
                            });
                        };
                      Array.isArray(d)
                        ? d.forEach(y)
                        : "string" == typeof d && y(e);
                    })({ logic: d, store: e, events: t });
                  });
                let { ixSession: d } = e.getState();
                d.eventListeners.length &&
                  (function (e) {
                    let t = () => {
                      eo(e);
                    };
                    ei.forEach((a) => {
                      window.addEventListener(a, t),
                        e.dispatch((0, p.eventListenerAdded)(window, [a, t]));
                    }),
                      t();
                  })(e);
              })(e),
              (function () {
                let { documentElement: e } = document;
                -1 === e.className.indexOf(S) && (e.className += ` ${S}`);
              })(),
              e.getState().ixSession.hasDefinedMediaQueries))
          ) {
            var l;
            h({
              store: (l = e),
              select: ({ ixSession: e }) => e.mediaQueryKey,
              onChange: () => {
                ea(l),
                  U({ store: l, elementApi: g }),
                  et({ store: l, allowEvents: !0 }),
                  q();
              },
            });
          }
          e.dispatch((0, p.sessionStarted)()),
            (function (e, t) {
              let a = (n) => {
                let { ixSession: i, ixParameters: o } = e.getState();
                i.active &&
                  (e.dispatch((0, p.animationFrameChanged)(n, o)),
                  t
                    ? !(function (e, t) {
                        let a = h({
                          store: e,
                          select: ({ ixSession: e }) => e.tick,
                          onChange: (e) => {
                            t(e), a();
                          },
                        });
                      })(e, a)
                    : requestAnimationFrame(a));
              };
              a(window.performance.now());
            })(e, d);
        }
      }
      function ea(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: a } = t;
          a.forEach(en), D(), e.dispatch((0, p.sessionStopped)());
        }
      }
      function en({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let ei = ["resize", "orientationchange"];
      function eo(e) {
        let { ixSession: t, ixData: a } = e.getState(),
          n = window.innerWidth;
        if (n !== t.viewportWidth) {
          let { mediaQueries: t } = a;
          e.dispatch(
            (0, p.viewportWidthChanged)({ width: n, mediaQueries: t })
          );
        }
      }
      let ed = (e, t) => (0, d.default)((0, l.default)(e, t), r.default),
        er = (e, t) => {
          (0, c.default)(e, (e, a) => {
            e.forEach((e, n) => {
              t(e, a, a + b + n);
            });
          });
        },
        el = (e) =>
          _({
            config: { target: e.target, targets: e.targets },
            elementApi: g,
          });
      function ec({ store: e, actionListId: t, eventId: a }) {
        let { ixData: n, ixSession: o } = e.getState(),
          { actionLists: d, events: r } = n,
          l = r[a],
          c = d[t];
        if (c && c.useFirstGroupAsInitialState) {
          let d = (0, i.default)(c, "actionItemGroups[0].actionItems", []);
          if (
            !k(
              (0, i.default)(l, "mediaQueries", n.mediaQueryKeys),
              o.mediaQueryKey
            )
          )
            return;
          d.forEach((n) => {
            let { config: i, actionTypeId: o } = n,
              d = _({
                config:
                  i?.target?.useEventTarget === !0 &&
                  i?.target?.objectId == null
                    ? { target: l.target, targets: l.targets }
                    : i,
                event: l,
                elementApi: g,
              }),
              r = H(o);
            d.forEach((i) => {
              let d = r ? Y(o)?.(i, n) : null;
              ep({
                destination: L({ element: i, actionItem: n, elementApi: g }, d),
                immediate: !0,
                store: e,
                element: i,
                eventId: a,
                actionItem: n,
                actionListId: t,
                pluginInstance: d,
              });
            });
          });
        }
      }
      function es({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, c.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: a, verbose: n } = t;
            eg(t, e),
              n &&
                e.dispatch(
                  (0, p.actionListPlaybackChanged)({
                    actionListId: a,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eu({
        store: e,
        eventId: t,
        eventTarget: a,
        eventStateKey: n,
        actionListId: o,
      }) {
        let { ixInstances: d, ixSession: r } = e.getState(),
          l = r.hasBoundaryNodes && a ? g.getClosestElement(a, O) : null;
        (0, c.default)(d, (a) => {
          let d = (0, i.default)(a, "actionItem.config.target.boundaryMode"),
            r = !n || a.eventStateKey === n;
          if (a.actionListId === o && a.eventId === t && r) {
            if (l && d && !g.elementContains(l, a.element)) return;
            eg(a, e),
              a.verbose &&
                e.dispatch(
                  (0, p.actionListPlaybackChanged)({
                    actionListId: o,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function ef({
        store: e,
        eventId: t,
        eventTarget: a,
        eventStateKey: n,
        actionListId: o,
        groupIndex: d = 0,
        immediate: r,
        verbose: l,
      }) {
        let { ixData: c, ixSession: s } = e.getState(),
          { events: u } = c,
          f = u[t] || {},
          { mediaQueries: p = c.mediaQueryKeys } = f,
          { actionItemGroups: I, useFirstGroupAsInitialState: E } = (0,
          i.default)(c, `actionLists.${o}`, {});
        if (!I || !I.length) return !1;
        d >= I.length && (0, i.default)(f, "config.loop") && (d = 0),
          0 === d && E && d++;
        let T =
            (0 === d || (1 === d && E)) && m(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          y = (0, i.default)(I, [d, "actionItems"], []);
        if (!y.length || !k(p, s.mediaQueryKey)) return !1;
        let b = s.hasBoundaryNodes && a ? g.getClosestElement(a, O) : null,
          v = V(y),
          R = !1;
        return (
          y.forEach((i, c) => {
            let { config: s, actionTypeId: u } = i,
              p = H(u),
              { target: I } = s;
            if (!!I)
              _({
                config: s,
                event: f,
                eventTarget: a,
                elementRoot: I.boundaryMode ? b : null,
                elementApi: g,
              }).forEach((s, f) => {
                let I = p ? Y(u)?.(s, i) : null,
                  E = p ? W(u)(s, i) : null;
                R = !0;
                let y = M({ element: s, actionItem: i }),
                  m = L({ element: s, actionItem: i, elementApi: g }, I);
                ep({
                  store: e,
                  element: s,
                  actionItem: i,
                  eventId: t,
                  eventTarget: a,
                  eventStateKey: n,
                  actionListId: o,
                  groupIndex: d,
                  isCarrier: v === c && 0 === f,
                  computedStyle: y,
                  destination: m,
                  immediate: r,
                  verbose: l,
                  pluginInstance: I,
                  pluginDuration: E,
                  instanceDelay: T,
                });
              });
          }),
          R
        );
      }
      function ep(e) {
        let t;
        let { store: a, computedStyle: n, ...i } = e,
          {
            element: o,
            actionItem: d,
            immediate: r,
            pluginInstance: l,
            continuous: c,
            restingValue: s,
            eventId: f,
          } = i,
          I = N(),
          { ixElements: E, ixSession: T, ixData: y } = a.getState(),
          m = A(E, o),
          { refState: b } = E[m] || {},
          O = g.getRefType(o),
          v = T.reducedMotion && u.ReducedMotionTypes[d.actionTypeId];
        if (v && c)
          switch (y.events[f]?.eventTypeId) {
            case u.EventTypeConsts.MOUSE_MOVE:
            case u.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = s;
              break;
            default:
              t = 0.5;
          }
        let R = x(o, b, n, d, g, l);
        if (
          (a.dispatch(
            (0, p.instanceAdded)({
              instanceId: I,
              elementId: m,
              origin: R,
              refType: O,
              skipMotion: v,
              skipToValue: t,
              ...i,
            })
          ),
          eI(document.body, "ix2-animation-started", I),
          r)
        ) {
          (function (e, t) {
            let { ixParameters: a } = e.getState();
            e.dispatch((0, p.instanceStarted)(t, 0)),
              e.dispatch((0, p.animationFrameChanged)(performance.now(), a));
            let { ixInstances: n } = e.getState();
            eE(n[t], e);
          })(a, I);
          return;
        }
        h({ store: a, select: ({ ixInstances: e }) => e[I], onChange: eE }),
          !c && a.dispatch((0, p.instanceStarted)(I, T.tick));
      }
      function eg(e, t) {
        eI(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: a, actionItem: n } = e,
          { ixElements: i } = t.getState(),
          { ref: o, refType: d } = i[a] || {};
        d === v && F(o, n, g), t.dispatch((0, p.instanceRemoved)(e.id));
      }
      function eI(e, t, a) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, a), e.dispatchEvent(n);
      }
      function eE(e, t) {
        let {
            active: a,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: d,
            actionTypeId: r,
            renderType: l,
            current: c,
            groupIndex: s,
            eventId: u,
            eventTarget: f,
            eventStateKey: I,
            actionListId: E,
            isCarrier: T,
            styleProp: y,
            verbose: m,
            pluginInstance: b,
          } = e,
          { ixData: O, ixSession: S } = t.getState(),
          { events: _ } = O,
          { mediaQueries: A = O.mediaQueryKeys } = _ && _[u] ? _[u] : {};
        if (!!k(A, S.mediaQueryKey)) {
          if (n || a || i) {
            if (c || (l === R && i)) {
              t.dispatch((0, p.elementStateChanged)(o, r, c, d));
              let { ixElements: e } = t.getState(),
                { ref: a, refType: n, refState: i } = e[o] || {},
                s = i && i[r];
              (n === v || H(r)) && C(a, i, s, u, d, y, g, l, b);
            }
            if (i) {
              if (T) {
                let e = ef({
                  store: t,
                  eventId: u,
                  eventTarget: f,
                  eventStateKey: I,
                  actionListId: E,
                  groupIndex: s + 1,
                  verbose: m,
                });
                m &&
                  !e &&
                  t.dispatch(
                    (0, p.actionListPlaybackChanged)({
                      actionListId: E,
                      isPlaying: !1,
                    })
                  );
              }
              eg(e, t);
            }
          }
        }
      }
    },
    8955: function (e, t, a) {
      "use strict";
      let n, i, o;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return eI;
          },
        });
      let d = p(a(5801)),
        r = p(a(4738)),
        l = p(a(3789)),
        c = a(7087),
        s = a(1970),
        u = a(3946),
        f = a(9468);
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: g,
          MOUSE_SECOND_CLICK: I,
          MOUSE_DOWN: E,
          MOUSE_UP: T,
          MOUSE_OVER: y,
          MOUSE_OUT: m,
          DROPDOWN_CLOSE: b,
          DROPDOWN_OPEN: O,
          SLIDER_ACTIVE: v,
          SLIDER_INACTIVE: R,
          TAB_ACTIVE: S,
          TAB_INACTIVE: _,
          NAVBAR_CLOSE: A,
          NAVBAR_OPEN: L,
          MOUSE_MOVE: h,
          PAGE_SCROLL_DOWN: N,
          SCROLL_INTO_VIEW: C,
          SCROLL_OUT_OF_VIEW: U,
          PAGE_SCROLL_UP: V,
          SCROLLING_IN_VIEW: M,
          PAGE_FINISH: x,
          ECOMMERCE_CART_CLOSE: w,
          ECOMMERCE_CART_OPEN: G,
          PAGE_START: P,
          PAGE_SCROLL: k,
        } = c.EventTypeConsts,
        F = "COMPONENT_ACTIVE",
        D = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: X } = c.IX2EngineConstants,
        { getNamespacedParameterId: B } = f.IX2VanillaUtils,
        Q = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        H = Q(({ element: e, nativeEvent: t }) => e === t.target),
        Y = Q(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        W = (0, d.default)([H, Y]),
        z = (e, t) => {
          if (t) {
            let { ixData: a } = e.getState(),
              { events: n } = a,
              i = n[t];
            if (i && !ea[i.eventTypeId]) return i;
          }
          return null;
        },
        j = ({ store: e, event: t }) => {
          let { action: a } = t,
            { autoStopEventId: n } = a.config;
          return !!z(e, n);
        },
        $ = ({ store: e, event: t, element: a, eventStateKey: n }, i) => {
          let { action: o, id: d } = t,
            { actionListId: l, autoStopEventId: c } = o.config,
            u = z(e, c);
          return (
            u &&
              (0, s.stopActionGroup)({
                store: e,
                eventId: c,
                eventTarget: a,
                eventStateKey: c + X + n.split(X)[1],
                actionListId: (0, r.default)(u, "action.config.actionListId"),
              }),
            (0, s.stopActionGroup)({
              store: e,
              eventId: d,
              eventTarget: a,
              eventStateKey: n,
              actionListId: l,
            }),
            (0, s.startActionGroup)({
              store: e,
              eventId: d,
              eventTarget: a,
              eventStateKey: n,
              actionListId: l,
            }),
            i
          );
        },
        Z = (e, t) => (a, n) => !0 === e(a, n) ? t(a, n) : n,
        q = { handler: Z(W, $) },
        K = { ...q, types: [F, D].join(" ") },
        J = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        ee = "mouseover mouseout",
        et = { types: J },
        ea = { PAGE_START: P, PAGE_FINISH: x },
        en = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, l.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        ei = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        eo = ({ element: e, nativeEvent: t }) => {
          let { type: a, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if ("mouseover" === a && o) return !0;
          let d = e.contains(i);
          return ("mouseout" === a && !!o && !!d) || !1;
        },
        ed = (e) => {
          let {
              element: t,
              event: { config: a },
            } = e,
            { clientWidth: n, clientHeight: i } = en(),
            o = a.scrollOffsetValue,
            d = a.scrollOffsetUnit,
            r = "PX" === d ? o : (i * (o || 0)) / 100;
          return ei(t.getBoundingClientRect(), {
            left: 0,
            top: r,
            right: n,
            bottom: i - r,
          });
        },
        er = (e) => (t, a) => {
          let { type: n } = t.nativeEvent,
            i = -1 !== [F, D].indexOf(n) ? n === F : a.isActive,
            o = { ...a, isActive: i };
          return a && o.isActive === a.isActive ? o : e(t, o) || o;
        },
        el = (e) => (t, a) => {
          let n = { elementHovered: eo(t) };
          return (
            ((a ? n.elementHovered !== a.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        },
        ec =
          (e) =>
          (t, a = {}) => {
            let n, i;
            let { stiffScrollTop: o, scrollHeight: d, innerHeight: r } = en(),
              {
                event: { config: l, eventTypeId: c },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: u } = l,
              f = d - r,
              p = Number((o / f).toFixed(2));
            if (a && a.percentTop === p) return a;
            let g = ("PX" === u ? s : (r * (s || 0)) / 100) / f,
              I = 0;
            a &&
              ((n = p > a.percentTop),
              (I = (i = a.scrollingDown !== n) ? p : a.anchorTop));
            let E = c === N ? p >= I + g : p <= I - g,
              T = {
                ...a,
                percentTop: p,
                inBounds: E,
                anchorTop: I,
                scrollingDown: n,
              };
            return (a && E && (i || T.inBounds !== a.inBounds) && e(t, T)) || T;
          },
        es = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        eu =
          (e) =>
          (t, a = { clickCount: 0 }) => {
            let n = { clickCount: (a.clickCount % 2) + 1 };
            return (n.clickCount !== a.clickCount && e(t, n)) || n;
          },
        ef = (e = !0) => ({
          ...K,
          handler: Z(
            e ? W : H,
            er((e, t) => (t.isActive ? q.handler(e, t) : t))
          ),
        }),
        ep = (e = !0) => ({
          ...K,
          handler: Z(
            e ? W : H,
            er((e, t) => (t.isActive ? t : q.handler(e, t)))
          ),
        });
      let eg = {
        ...et,
        handler:
          ((n = (e, t) => {
            let { elementVisible: a } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: d } = o;
            return !d[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === C) === a
              ? ($(e), { ...t, triggered: !0 })
              : t;
          }),
          (e, t) => {
            let a = { ...t, elementVisible: ed(e) };
            return (
              ((t ? a.elementVisible !== t.elementVisible : a.elementVisible) &&
                n(e, a)) ||
              a
            );
          }),
      };
      let eI = {
        [v]: ef(),
        [R]: ep(),
        [O]: ef(),
        [b]: ep(),
        [L]: ef(!1),
        [A]: ep(!1),
        [S]: ef(),
        [_]: ep(),
        [G]: { types: "ecommerce-cart-open", handler: Z(W, $) },
        [w]: { types: "ecommerce-cart-close", handler: Z(W, $) },
        [g]: {
          types: "click",
          handler: Z(
            W,
            eu((e, { clickCount: t }) => {
              j(e) ? 1 === t && $(e) : $(e);
            })
          ),
        },
        [I]: {
          types: "click",
          handler: Z(
            W,
            eu((e, { clickCount: t }) => {
              2 === t && $(e);
            })
          ),
        },
        [E]: { ...q, types: "mousedown" },
        [T]: { ...q, types: "mouseup" },
        [y]: {
          types: ee,
          handler: Z(
            W,
            el((e, t) => {
              t.elementHovered && $(e);
            })
          ),
        },
        [m]: {
          types: ee,
          handler: Z(
            W,
            el((e, t) => {
              !t.elementHovered && $(e);
            })
          ),
        },
        [h]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: a,
              nativeEvent: n,
              eventStateKey: i,
            },
            o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: d,
                selectedAxis: r,
                continuousParameterGroupId: l,
                reverse: s,
                restingState: f = 0,
              } = a,
              {
                clientX: p = o.clientX,
                clientY: g = o.clientY,
                pageX: I = o.pageX,
                pageY: E = o.pageY,
              } = n,
              T = "X_AXIS" === r,
              y = "mouseout" === n.type,
              m = f / 100,
              b = l,
              O = !1;
            switch (d) {
              case c.EventBasedOn.VIEWPORT:
                m = T
                  ? Math.min(p, window.innerWidth) / window.innerWidth
                  : Math.min(g, window.innerHeight) / window.innerHeight;
                break;
              case c.EventBasedOn.PAGE: {
                let {
                  scrollLeft: e,
                  scrollTop: t,
                  scrollWidth: a,
                  scrollHeight: n,
                } = en();
                m = T ? Math.min(e + I, a) / a : Math.min(t + E, n) / n;
                break;
              }
              case c.EventBasedOn.ELEMENT:
              default: {
                b = B(i, l);
                let e = 0 === n.type.indexOf("mouse");
                if (e && !0 !== W({ element: t, nativeEvent: n })) break;
                let a = t.getBoundingClientRect(),
                  { left: o, top: d, width: r, height: c } = a;
                if (!e && !es({ left: p, top: g }, a)) break;
                (O = !0), (m = T ? (p - o) / r : (g - d) / c);
              }
            }
            return (
              y && (m > 0.95 || m < 0.05) && (m = Math.round(m)),
              (d !== c.EventBasedOn.ELEMENT || O || O !== o.elementHovered) &&
                ((m = s ? 1 - m : m),
                e.dispatch((0, u.parameterChanged)(b, m))),
              { elementHovered: O, clientX: p, clientY: g, pageX: I, pageY: E }
            );
          },
        },
        [k]: {
          types: J,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: a, reverse: n } = t,
              { scrollTop: i, scrollHeight: o, clientHeight: d } = en(),
              r = i / (o - d);
            (r = n ? 1 - r : r), e.dispatch((0, u.parameterChanged)(a, r));
          },
        },
        [M]: {
          types: J,
          handler: (
            { element: e, store: t, eventConfig: a, eventStateKey: n },
            i = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: o,
                scrollTop: d,
                scrollWidth: r,
                scrollHeight: l,
                clientHeight: s,
              } = en(),
              {
                basedOn: f,
                selectedAxis: p,
                continuousParameterGroupId: g,
                startsEntering: I,
                startsExiting: E,
                addEndOffset: T,
                addStartOffset: y,
                addOffsetValue: m = 0,
                endOffsetValue: b = 0,
              } = a;
            if (f === c.EventBasedOn.VIEWPORT) {
              let e = "X_AXIS" === p ? o / r : d / l;
              return (
                e !== i.scrollPercent &&
                  t.dispatch((0, u.parameterChanged)(g, e)),
                { scrollPercent: e }
              );
            }
            {
              let a = B(n, g),
                o = e.getBoundingClientRect(),
                d = (y ? m : 0) / 100,
                r = (T ? b : 0) / 100;
              (d = I ? d : 1 - d), (r = E ? r : 1 - r);
              let c = o.top + Math.min(o.height * d, s),
                f = o.top + o.height * r,
                p = Math.min(s + (f - c), l),
                O = Math.min(Math.max(0, s - c), p) / p;
              return (
                O !== i.scrollPercent &&
                  t.dispatch((0, u.parameterChanged)(a, O)),
                { scrollPercent: O }
              );
            }
          },
        },
        [C]: eg,
        [U]: eg,
        [N]: {
          ...et,
          handler: ec((e, t) => {
            t.scrollingDown && $(e);
          }),
        },
        [V]: {
          ...et,
          handler: ec((e, t) => {
            !t.scrollingDown && $(e);
          }),
        },
        [x]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Z(
            H,
            ((i = $),
            (e, t) => {
              let a = { finished: "complete" === document.readyState };
              return a.finished && !(t && t.finshed) && i(e), a;
            })
          ),
        },
        [P]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Z(H, ((o = $), (e, t) => (t || o(e), { started: !0 }))),
        },
      };
    },
    4609: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: n } = a(7087).IX2EngineActionTypes,
        i = (e = Object.freeze({}), t) => {
          if (t.type === n) return t.payload.ixData || Object.freeze({});
          return e;
        };
    },
    7718: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return O;
          },
        });
      let n = a(7087),
        i = a(9468),
        o = a(1185),
        {
          IX2_RAW_DATA_IMPORTED: d,
          IX2_SESSION_STOPPED: r,
          IX2_INSTANCE_ADDED: l,
          IX2_INSTANCE_STARTED: c,
          IX2_INSTANCE_REMOVED: s,
          IX2_ANIMATION_FRAME_CHANGED: u,
        } = n.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: g,
        } = i.IX2EasingUtils,
        { RENDER_GENERAL: I } = n.IX2EngineConstants,
        {
          getItemConfigByKey: E,
          getRenderType: T,
          getStyleProp: y,
        } = i.IX2VanillaUtils,
        m = (e, t) => {
          let a, n, i, d;
          let {
              position: r,
              parameterId: l,
              actionGroups: c,
              destinationKeys: s,
              smoothing: u,
              restingValue: g,
              actionTypeId: I,
              customEasingFn: T,
              skipMotion: y,
              skipToValue: m,
            } = e,
            { parameters: b } = t.payload,
            O = Math.max(1 - u, 0.01),
            v = b[l];
          null == v && ((O = 1), (v = g));
          let R = f((Math.max(v, 0) || 0) - r),
            S = y ? m : f(r + R * O),
            _ = 100 * S;
          if (S === r && e.current) return e;
          for (let e = 0, { length: t } = c; e < t; e++) {
            let { keyframe: t, actionItems: o } = c[e];
            if ((0 === e && (a = o[0]), _ >= t)) {
              a = o[0];
              let r = c[e + 1],
                l = r && _ !== t;
              (n = l ? r.actionItems[0] : null),
                l && ((i = t / 100), (d = (r.keyframe - t) / 100));
            }
          }
          let A = {};
          if (a && !n)
            for (let e = 0, { length: t } = s; e < t; e++) {
              let t = s[e];
              A[t] = E(I, t, a.config);
            }
          else if (a && n && void 0 !== i && void 0 !== d) {
            let e = (S - i) / d,
              t = p(a.config.easing, e, T);
            for (let e = 0, { length: i } = s; e < i; e++) {
              let i = s[e],
                o = E(I, i, a.config),
                d = (E(I, i, n.config) - o) * t + o;
              A[i] = d;
            }
          }
          return (0, o.merge)(e, { position: S, current: A });
        },
        b = (e, t) => {
          let {
              active: a,
              origin: n,
              start: i,
              immediate: d,
              renderType: r,
              verbose: l,
              actionItem: c,
              destination: s,
              destinationKeys: u,
              pluginDuration: g,
              instanceDelay: E,
              customEasingFn: T,
              skipMotion: y,
            } = e,
            m = c.config.easing,
            { duration: b, delay: O } = c.config;
          null != g && (b = g),
            (O = null != E ? E : O),
            r === I ? (b = 0) : (d || y) && (b = O = 0);
          let { now: v } = t.payload;
          if (a && n) {
            let t = v - (i + O);
            if (l) {
              let t = b + O,
                a = f(Math.min(Math.max(0, (v - i) / t), 1));
              e = (0, o.set)(e, "verboseTimeElapsed", t * a);
            }
            if (t < 0) return e;
            let a = f(Math.min(Math.max(0, t / b), 1)),
              d = p(m, a, T),
              r = {},
              c = null;
            return (
              u.length &&
                (c = u.reduce((e, t) => {
                  let a = s[t],
                    i = parseFloat(n[t]) || 0,
                    o = parseFloat(a) - i;
                  return (e[t] = o * d + i), e;
                }, {})),
              (r.current = c),
              (r.position = a),
              1 === a && ((r.active = !1), (r.complete = !0)),
              (0, o.merge)(e, r)
            );
          }
          return e;
        },
        O = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case d:
              return t.payload.ixInstances || Object.freeze({});
            case r:
              return Object.freeze({});
            case l: {
              let {
                  instanceId: a,
                  elementId: n,
                  actionItem: i,
                  eventId: d,
                  eventTarget: r,
                  eventStateKey: l,
                  actionListId: c,
                  groupIndex: s,
                  isCarrier: u,
                  origin: f,
                  destination: p,
                  immediate: I,
                  verbose: E,
                  continuous: m,
                  parameterId: b,
                  actionGroups: O,
                  smoothing: v,
                  restingValue: R,
                  pluginInstance: S,
                  pluginDuration: _,
                  instanceDelay: A,
                  skipMotion: L,
                  skipToValue: h,
                } = t.payload,
                { actionTypeId: N } = i,
                C = T(N),
                U = y(C, N),
                V = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e]
                ),
                { easing: M } = i.config;
              return (0, o.set)(e, a, {
                id: a,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: V,
                immediate: I,
                verbose: E,
                current: null,
                actionItem: i,
                actionTypeId: N,
                eventId: d,
                eventTarget: r,
                eventStateKey: l,
                actionListId: c,
                groupIndex: s,
                renderType: C,
                isCarrier: u,
                styleProp: U,
                continuous: m,
                parameterId: b,
                actionGroups: O,
                smoothing: v,
                restingValue: R,
                pluginInstance: S,
                pluginDuration: _,
                instanceDelay: A,
                skipMotion: L,
                skipToValue: h,
                customEasingFn:
                  Array.isArray(M) && 4 === M.length ? g(M) : void 0,
              });
            }
            case c: {
              let { instanceId: a, time: n } = t.payload;
              return (0, o.mergeIn)(e, [a], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case s: {
              let { instanceId: a } = t.payload;
              if (!e[a]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let t = 0; t < o; t++) {
                let o = i[t];
                o !== a && (n[o] = e[o]);
              }
              return n;
            }
            case u: {
              let a = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let d = 0; d < i; d++) {
                let i = n[d],
                  r = e[i],
                  l = r.continuous ? m : b;
                a = (0, o.set)(a, i, l(r, t));
              }
              return a;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: n,
          IX2_SESSION_STOPPED: i,
          IX2_PARAMETER_CHANGED: o,
        } = a(7087).IX2EngineActionTypes,
        d = (e = {}, t) => {
          switch (t.type) {
            case n:
              return t.payload.ixParameters || {};
            case i:
              return {};
            case o: {
              let { key: a, value: n } = t.payload;
              return (e[a] = n), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let n = a(9516),
        i = a(4609),
        o = a(628),
        d = a(5862),
        r = a(9468),
        l = a(7718),
        c = a(1540),
        { ixElements: s } = r.IX2ElementsReducer,
        u = (0, n.combineReducers)({
          ixData: i.ixData,
          ixRequest: o.ixRequest,
          ixSession: d.ixSession,
          ixElements: s,
          ixInstances: l.ixInstances,
          ixParameters: c.ixParameters,
        });
    },
    628: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let n = a(7087),
        i = a(1185),
        {
          IX2_PREVIEW_REQUESTED: o,
          IX2_PLAYBACK_REQUESTED: d,
          IX2_STOP_REQUESTED: r,
          IX2_CLEAR_REQUESTED: l,
        } = n.IX2EngineActionTypes,
        c = { preview: {}, playback: {}, stop: {}, clear: {} },
        s = Object.create(null, {
          [o]: { value: "preview" },
          [d]: { value: "playback" },
          [r]: { value: "stop" },
          [l]: { value: "clear" },
        }),
        u = (e = c, t) => {
          if (t.type in s) {
            let a = [s[t.type]];
            return (0, i.setIn)(e, [a], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return E;
          },
        });
      let n = a(7087),
        i = a(1185),
        {
          IX2_SESSION_INITIALIZED: o,
          IX2_SESSION_STARTED: d,
          IX2_TEST_FRAME_RENDERED: r,
          IX2_SESSION_STOPPED: l,
          IX2_EVENT_LISTENER_ADDED: c,
          IX2_EVENT_STATE_CHANGED: s,
          IX2_ANIMATION_FRAME_CHANGED: u,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: g,
        } = n.IX2EngineActionTypes,
        I = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        E = (e = I, t) => {
          switch (t.type) {
            case o: {
              let { hasBoundaryNodes: a, reducedMotion: n } = t.payload;
              return (0, i.merge)(e, { hasBoundaryNodes: a, reducedMotion: n });
            }
            case d:
              return (0, i.set)(e, "active", !0);
            case r: {
              let {
                payload: { step: a = 20 },
              } = t;
              return (0, i.set)(e, "tick", e.tick + a);
            }
            case l:
              return I;
            case u: {
              let {
                payload: { now: a },
              } = t;
              return (0, i.set)(e, "tick", a);
            }
            case c: {
              let a = (0, i.addLast)(e.eventListeners, t.payload);
              return (0, i.set)(e, "eventListeners", a);
            }
            case s: {
              let { stateKey: a, newState: n } = t.payload;
              return (0, i.setIn)(e, ["eventState", a], n);
            }
            case f: {
              let { actionListId: a, isPlaying: n } = t.payload;
              return (0, i.setIn)(e, ["playbackState", a], n);
            }
            case p: {
              let { width: a, mediaQueries: n } = t.payload,
                o = n.length,
                d = null;
              for (let e = 0; e < o; e++) {
                let { key: t, min: i, max: o } = n[e];
                if (a >= i && a <= o) {
                  d = t;
                  break;
                }
              }
              return (0, i.merge)(e, { viewportWidth: a, mediaQueryKey: d });
            }
            case g:
              return (0, i.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        clearPlugin: function () {
          return l;
        },
        createPluginInstance: function () {
          return d;
        },
        getPluginConfig: function () {
          return a;
        },
        getPluginDestination: function () {
          return o;
        },
        getPluginDuration: function () {
          return n;
        },
        getPluginOrigin: function () {
          return i;
        },
        renderPlugin: function () {
          return r;
        },
      });
      let a = (e) => e.value,
        n = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let a = parseFloat(e.getAttribute("data-duration"));
          return a > 0
            ? 1e3 * a
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        i = (e) => e || { value: 0 },
        o = (e) => ({ value: e.value }),
        d = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let a = t.createInstance(e);
          return a.stop(), a.setSubframe(!0), a;
        },
        r = (e, t, a) => {
          if (!e) return;
          let n = t[a.actionTypeId].value / 100;
          e.goToFrame(e.frames * n);
        },
        l = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        clearPlugin: function () {
          return f;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return d;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return r;
        },
        getPluginOrigin: function () {
          return l;
        },
        renderPlugin: function () {
          return u;
        },
      });
      let a = "--wf-rive-fit",
        n = "--wf-rive-alignment",
        i = (e) => document.querySelector(`[data-w-id="${e}"]`),
        o = () => window.Webflow.require("rive"),
        d = (e, t) => e.value.inputs[t],
        r = () => null,
        l = (e, t) => {
          if (e) return e;
          let a = {},
            { inputs: n = {} } = t.config.value;
          for (let e in n) null == n[e] && (a[e] = 0);
          return a;
        },
        c = (e) => e.value.inputs ?? {},
        s = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let a = t?.config?.target?.pluginElement;
          return a ? i(a) : null;
        },
        u = (e, { PLUGIN_RIVE: t }, i) => {
          let d = o();
          if (!d) return;
          let r = d.getInstance(e),
            l = d.rive.StateMachineInputType,
            { name: c, inputs: s = {} } = i.config.value || {};
          function u(e) {
            if (e.loaded) i();
            else {
              let t = () => {
                i(), e?.off("load", t);
              };
              e?.on("load", t);
            }
            function i() {
              let i = e.stateMachineInputs(c);
              if (null != i) {
                if ((!e.isPlaying && e.play(c, !1), a in s || n in s)) {
                  let t = e.layout,
                    i = s[a] ?? t.fit,
                    o = s[n] ?? t.alignment;
                  (i !== t.fit || o !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: i, alignment: o }));
                }
                for (let e in s) {
                  if (e === a || e === n) continue;
                  let o = i.find((t) => t.name === e);
                  if (null != o)
                    switch (o.type) {
                      case l.Boolean:
                        if (null != s[e]) {
                          let t = !!s[e];
                          o.value = t;
                        }
                        break;
                      case l.Number: {
                        let a = t[e];
                        null != a && (o.value = a);
                        break;
                      }
                      case l.Trigger:
                        s[e] && o.fire();
                    }
                }
              }
            }
          }
          r?.rive ? u(r.rive) : d.setLoadHandler(e, u);
        },
        f = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        clearPlugin: function () {
          return f;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return o;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return l;
        },
        renderPlugin: function () {
          return u;
        },
      });
      let a = (e) => document.querySelector(`[data-w-id="${e}"]`),
        n = () => window.Webflow.require("spline"),
        i = (e, t) => e.filter((e) => !t.includes(e)),
        o = (e, t) => e.value[t],
        d = () => null,
        r = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        l = (e, t) => {
          let a = Object.keys(t.config.value);
          if (e) {
            let t = i(a, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = r[t]), e), e) : e;
          }
          return a.reduce((e, t) => ((e[t] = r[t]), e), {});
        },
        c = (e) => e.value,
        s = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? a(n) : null;
        },
        u = (e, t, a) => {
          let i = n();
          if (!i) return;
          let o = i.getInstance(e),
            d = a.config.target.objectId,
            r = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let a = d && e.findObjectById(d);
              if (!a) return;
              let { PLUGIN_SPLINE: n } = t;
              null != n.positionX && (a.position.x = n.positionX),
                null != n.positionY && (a.position.y = n.positionY),
                null != n.positionZ && (a.position.z = n.positionZ),
                null != n.rotationX && (a.rotation.x = n.rotationX),
                null != n.rotationY && (a.rotation.y = n.rotationY),
                null != n.rotationZ && (a.rotation.z = n.rotationZ),
                null != n.scaleX && (a.scale.x = n.scaleX),
                null != n.scaleY && (a.scale.y = n.scaleY),
                null != n.scaleZ && (a.scale.z = n.scaleZ);
            };
          o ? r(o.spline) : i.setLoadHandler(e, r);
        },
        f = () => null;
    },
    1407: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        clearPlugin: function () {
          return u;
        },
        createPluginInstance: function () {
          return l;
        },
        getPluginConfig: function () {
          return i;
        },
        getPluginDestination: function () {
          return r;
        },
        getPluginDuration: function () {
          return o;
        },
        getPluginOrigin: function () {
          return d;
        },
        renderPlugin: function () {
          return s;
        },
      });
      let n = a(380),
        i = (e, t) => e.value[t],
        o = () => null,
        d = (e, t) => {
          if (e) return e;
          let a = t.config.value,
            i = t.config.target.objectId,
            o = getComputedStyle(document.documentElement).getPropertyValue(i);
          return null != a.size
            ? { size: parseInt(o, 10) }
            : "%" === a.unit || "-" === a.unit
            ? { size: parseFloat(o) }
            : null != a.red && null != a.green && null != a.blue
            ? (0, n.normalizeColor)(o)
            : void 0;
        },
        r = (e) => e.value,
        l = () => null,
        c = {
          color: {
            match: ({ red: e, green: t, blue: a, alpha: n }) =>
              [e, t, a, n].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: a, alpha: n }) =>
              `rgba(${e}, ${t}, ${a}, ${n})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => {
              if ("-" === t) return e;
              return `${e}${t}`;
            },
          },
        },
        s = (e, t, a) => {
          let {
              target: { objectId: n },
              value: { unit: i },
            } = a.config,
            o = t.PLUGIN_VARIABLE,
            d = Object.values(c).find((e) => e.match(o, i));
          d && document.documentElement.style.setProperty(n, d.getValue(o, i));
        },
        u = (e, t) => {
          let a = t.config.target.objectId;
          document.documentElement.style.removeProperty(a);
        };
    },
    3690: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = a(7087),
        i = c(a(7377)),
        o = c(a(2866)),
        d = c(a(2570)),
        r = c(a(1407));
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (l = function (e) {
          return e ? a : t;
        })(e);
      }
      function c(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var a = l(t);
        if (a && a.has(e)) return a.get(e);
        var n = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            d && (d.get || d.set)
              ? Object.defineProperty(n, o, d)
              : (n[o] = e[o]);
          }
        return (n.default = e), a && a.set(e, n), n;
      }
      let s = new Map([
        [n.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
        [n.ActionTypeConsts.PLUGIN_SPLINE, { ...o }],
        [n.ActionTypeConsts.PLUGIN_RIVE, { ...d }],
        [n.ActionTypeConsts.PLUGIN_VARIABLE, { ...r }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return y;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return f;
        },
        IX2_CLEAR_REQUESTED: function () {
          return c;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return T;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return s;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return u;
        },
        IX2_INSTANCE_ADDED: function () {
          return g;
        },
        IX2_INSTANCE_REMOVED: function () {
          return E;
        },
        IX2_INSTANCE_STARTED: function () {
          return I;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return b;
        },
        IX2_PARAMETER_CHANGED: function () {
          return p;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return r;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return d;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return a;
        },
        IX2_SESSION_INITIALIZED: function () {
          return n;
        },
        IX2_SESSION_STARTED: function () {
          return i;
        },
        IX2_SESSION_STOPPED: function () {
          return o;
        },
        IX2_STOP_REQUESTED: function () {
          return l;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return O;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return m;
        },
      });
      let a = "IX2_RAW_DATA_IMPORTED",
        n = "IX2_SESSION_INITIALIZED",
        i = "IX2_SESSION_STARTED",
        o = "IX2_SESSION_STOPPED",
        d = "IX2_PREVIEW_REQUESTED",
        r = "IX2_PLAYBACK_REQUESTED",
        l = "IX2_STOP_REQUESTED",
        c = "IX2_CLEAR_REQUESTED",
        s = "IX2_EVENT_LISTENER_ADDED",
        u = "IX2_EVENT_STATE_CHANGED",
        f = "IX2_ANIMATION_FRAME_CHANGED",
        p = "IX2_PARAMETER_CHANGED",
        g = "IX2_INSTANCE_ADDED",
        I = "IX2_INSTANCE_STARTED",
        E = "IX2_INSTANCE_REMOVED",
        T = "IX2_ELEMENT_STATE_CHANGED",
        y = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        m = "IX2_VIEWPORT_WIDTH_CHANGED",
        b = "IX2_MEDIA_QUERIES_DEFINED",
        O = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        ABSTRACT_NODE: function () {
          return J;
        },
        AUTO: function () {
          return B;
        },
        BACKGROUND: function () {
          return G;
        },
        BACKGROUND_COLOR: function () {
          return w;
        },
        BAR_DELIMITER: function () {
          return Y;
        },
        BORDER_COLOR: function () {
          return P;
        },
        BOUNDARY_SELECTOR: function () {
          return d;
        },
        CHILDREN: function () {
          return W;
        },
        COLON_DELIMITER: function () {
          return H;
        },
        COLOR: function () {
          return k;
        },
        COMMA_DELIMITER: function () {
          return Q;
        },
        CONFIG_UNIT: function () {
          return g;
        },
        CONFIG_VALUE: function () {
          return s;
        },
        CONFIG_X_UNIT: function () {
          return u;
        },
        CONFIG_X_VALUE: function () {
          return r;
        },
        CONFIG_Y_UNIT: function () {
          return f;
        },
        CONFIG_Y_VALUE: function () {
          return l;
        },
        CONFIG_Z_UNIT: function () {
          return p;
        },
        CONFIG_Z_VALUE: function () {
          return c;
        },
        DISPLAY: function () {
          return F;
        },
        FILTER: function () {
          return U;
        },
        FLEX: function () {
          return D;
        },
        FONT_VARIATION_SETTINGS: function () {
          return V;
        },
        HEIGHT: function () {
          return x;
        },
        HTML_ELEMENT: function () {
          return q;
        },
        IMMEDIATE_CHILDREN: function () {
          return z;
        },
        IX2_ID_DELIMITER: function () {
          return a;
        },
        OPACITY: function () {
          return C;
        },
        PARENT: function () {
          return $;
        },
        PLAIN_OBJECT: function () {
          return K;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return et;
        },
        RENDER_PLUGIN: function () {
          return en;
        },
        RENDER_STYLE: function () {
          return ea;
        },
        RENDER_TRANSFORM: function () {
          return ee;
        },
        ROTATE_X: function () {
          return S;
        },
        ROTATE_Y: function () {
          return _;
        },
        ROTATE_Z: function () {
          return A;
        },
        SCALE_3D: function () {
          return R;
        },
        SCALE_X: function () {
          return b;
        },
        SCALE_Y: function () {
          return O;
        },
        SCALE_Z: function () {
          return v;
        },
        SIBLINGS: function () {
          return j;
        },
        SKEW: function () {
          return L;
        },
        SKEW_X: function () {
          return h;
        },
        SKEW_Y: function () {
          return N;
        },
        TRANSFORM: function () {
          return I;
        },
        TRANSLATE_3D: function () {
          return m;
        },
        TRANSLATE_X: function () {
          return E;
        },
        TRANSLATE_Y: function () {
          return T;
        },
        TRANSLATE_Z: function () {
          return y;
        },
        WF_PAGE: function () {
          return n;
        },
        WIDTH: function () {
          return M;
        },
        WILL_CHANGE: function () {
          return X;
        },
        W_MOD_IX: function () {
          return o;
        },
        W_MOD_JS: function () {
          return i;
        },
      });
      let a = "|",
        n = "data-wf-page",
        i = "w-mod-js",
        o = "w-mod-ix",
        d = ".w-dyn-item",
        r = "xValue",
        l = "yValue",
        c = "zValue",
        s = "value",
        u = "xUnit",
        f = "yUnit",
        p = "zUnit",
        g = "unit",
        I = "transform",
        E = "translateX",
        T = "translateY",
        y = "translateZ",
        m = "translate3d",
        b = "scaleX",
        O = "scaleY",
        v = "scaleZ",
        R = "scale3d",
        S = "rotateX",
        _ = "rotateY",
        A = "rotateZ",
        L = "skew",
        h = "skewX",
        N = "skewY",
        C = "opacity",
        U = "filter",
        V = "font-variation-settings",
        M = "width",
        x = "height",
        w = "backgroundColor",
        G = "background",
        P = "borderColor",
        k = "color",
        F = "display",
        D = "flex",
        X = "willChange",
        B = "AUTO",
        Q = ",",
        H = ":",
        Y = "|",
        W = "CHILDREN",
        z = "IMMEDIATE_CHILDREN",
        j = "SIBLINGS",
        $ = "PARENT",
        Z = "preserve-3d",
        q = "HTML_ELEMENT",
        K = "PLAIN_OBJECT",
        J = "ABSTRACT_NODE",
        ee = "RENDER_TRANSFORM",
        et = "RENDER_GENERAL",
        ea = "RENDER_STYLE",
        en = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        ActionAppliesTo: function () {
          return n;
        },
        ActionTypeConsts: function () {
          return a;
        },
      });
      let a = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        n = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        ActionTypeConsts: function () {
          return i.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return o;
        },
        IX2EngineConstants: function () {
          return d;
        },
        QuickEffectIds: function () {
          return n.QuickEffectIds;
        },
      });
      let n = r(a(1833), t),
        i = r(a(262), t);
      r(a(8704), t), r(a(3213), t);
      let o = c(a(8023)),
        d = c(a(2686));
      function r(e, t) {
        return (
          Object.keys(e).forEach(function (a) {
            "default" !== a &&
              !Object.prototype.hasOwnProperty.call(t, a) &&
              Object.defineProperty(t, a, {
                enumerable: !0,
                get: function () {
                  return e[a];
                },
              });
          }),
          e
        );
      }
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (l = function (e) {
          return e ? a : t;
        })(e);
      }
      function c(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var a = l(t);
        if (a && a.has(e)) return a.get(e);
        var n = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            d && (d.get || d.set)
              ? Object.defineProperty(n, o, d)
              : (n[o] = e[o]);
          }
        return (n.default = e), a && a.set(e, n), n;
      }
    },
    3213: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let {
          TRANSFORM_MOVE: n,
          TRANSFORM_SCALE: i,
          TRANSFORM_ROTATE: o,
          TRANSFORM_SKEW: d,
          STYLE_SIZE: r,
          STYLE_FILTER: l,
          STYLE_FONT_VARIATION: c,
        } = a(262).ActionTypeConsts,
        s = { [n]: !0, [i]: !0, [o]: !0, [d]: !0, [r]: !0, [l]: !0, [c]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        EventAppliesTo: function () {
          return n;
        },
        EventBasedOn: function () {
          return i;
        },
        EventContinuousMouseAxes: function () {
          return o;
        },
        EventLimitAffectedElements: function () {
          return d;
        },
        EventTypeConsts: function () {
          return a;
        },
        QuickEffectDirectionConsts: function () {
          return l;
        },
        QuickEffectIds: function () {
          return r;
        },
      });
      let a = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        n = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        i = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        o = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        d = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        r = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        l = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let a = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let a = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function n(e) {
        let t, n, i;
        let o = 1,
          d = e.replace(/\s/g, "").toLowerCase(),
          r = ("string" == typeof a[d] ? a[d].toLowerCase() : null) || d;
        if (r.startsWith("#")) {
          let e = r.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (n = parseInt(e[1] + e[1], 16)),
              (i = parseInt(e[2] + e[2], 16)),
              4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (n = parseInt(e.substring(2, 4), 16)),
              (i = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255));
        } else if (r.startsWith("rgba")) {
          let e = r.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (n = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)),
            (o = parseFloat(e[3]));
        } else if (r.startsWith("rgb")) {
          let e = r.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (n = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10));
        } else if (r.startsWith("hsla")) {
          let e, a, d;
          let l = r.match(/hsla\(([^)]+)\)/)[1].split(","),
            c = parseFloat(l[0]),
            s = parseFloat(l[1].replace("%", "")) / 100,
            u = parseFloat(l[2].replace("%", "")) / 100;
          o = parseFloat(l[3]);
          let f = (1 - Math.abs(2 * u - 1)) * s,
            p = f * (1 - Math.abs(((c / 60) % 2) - 1)),
            g = u - f / 2;
          c >= 0 && c < 60
            ? ((e = f), (a = p), (d = 0))
            : c >= 60 && c < 120
            ? ((e = p), (a = f), (d = 0))
            : c >= 120 && c < 180
            ? ((e = 0), (a = f), (d = p))
            : c >= 180 && c < 240
            ? ((e = 0), (a = p), (d = f))
            : c >= 240 && c < 300
            ? ((e = p), (a = 0), (d = f))
            : ((e = f), (a = 0), (d = p)),
            (t = Math.round((e + g) * 255)),
            (n = Math.round((a + g) * 255)),
            (i = Math.round((d + g) * 255));
        } else if (r.startsWith("hsl")) {
          let e, a, o;
          let d = r.match(/hsl\(([^)]+)\)/)[1].split(","),
            l = parseFloat(d[0]),
            c = parseFloat(d[1].replace("%", "")) / 100,
            s = parseFloat(d[2].replace("%", "")) / 100,
            u = (1 - Math.abs(2 * s - 1)) * c,
            f = u * (1 - Math.abs(((l / 60) % 2) - 1)),
            p = s - u / 2;
          l >= 0 && l < 60
            ? ((e = u), (a = f), (o = 0))
            : l >= 60 && l < 120
            ? ((e = f), (a = u), (o = 0))
            : l >= 120 && l < 180
            ? ((e = 0), (a = u), (o = f))
            : l >= 180 && l < 240
            ? ((e = 0), (a = f), (o = u))
            : l >= 240 && l < 300
            ? ((e = f), (a = 0), (o = u))
            : ((e = u), (a = 0), (o = f)),
            (t = Math.round((e + p) * 255)),
            (n = Math.round((a + p) * 255)),
            (i = Math.round((o + p) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(i))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return { red: t, green: n, blue: i, alpha: o };
      }
    },
    9468: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        IX2BrowserSupport: function () {
          return n;
        },
        IX2EasingUtils: function () {
          return o;
        },
        IX2Easings: function () {
          return i;
        },
        IX2ElementsReducer: function () {
          return d;
        },
        IX2VanillaPlugins: function () {
          return r;
        },
        IX2VanillaUtils: function () {
          return l;
        },
      });
      let n = s(a(2662)),
        i = s(a(8686)),
        o = s(a(3767)),
        d = s(a(5861)),
        r = s(a(1799)),
        l = s(a(4124));
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (c = function (e) {
          return e ? a : t;
        })(e);
      }
      function s(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var a = c(t);
        if (a && a.has(e)) return a.get(e);
        var n = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            d && (d.get || d.set)
              ? Object.defineProperty(n, o, d)
              : (n[o] = e[o]);
          }
        return (n.default = e), a && a.set(e, n), n;
      }
    },
    2662: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        ELEMENT_MATCHES: function () {
          return d;
        },
        FLEX_PREFIXED: function () {
          return r;
        },
        IS_BROWSER_ENV: function () {
          return i;
        },
        TRANSFORM_PREFIXED: function () {
          return l;
        },
        TRANSFORM_STYLE_PREFIXED: function () {
          return s;
        },
        withBrowser: function () {
          return o;
        },
      });
      let n = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(a(9777)),
        i = "undefined" != typeof window,
        o = (e, t) => (i ? e() : t),
        d = o(() =>
          (0, n.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        r = o(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: a } = t;
            for (let n = 0; n < a; n++) {
              let a = t[n];
              if (((e.style.display = a), e.style.display === a)) return a;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        l = o(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: a } = t;
            for (let n = 0; n < a; n++) {
              let a = t[n] + "Transform";
              if (void 0 !== e.style[a]) return a;
            }
          }
          return "transform";
        }, "transform"),
        c = l.split("transform")[0],
        s = c ? c + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        applyEasing: function () {
          return l;
        },
        createBezierEasing: function () {
          return r;
        },
        optimizeFloat: function () {
          return d;
        },
      });
      let n = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var a = o(t);
          if (a && a.has(e)) return a.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var d in e)
            if ("default" !== d && Object.prototype.hasOwnProperty.call(e, d)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, d) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(n, d, r)
                : (n[d] = e[d]);
            }
          return (n.default = e), a && a.set(e, n), n;
        })(a(8686)),
        i = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(a(1361));
      function o(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (o = function (e) {
          return e ? a : t;
        })(e);
      }
      function d(e, t = 5, a = 10) {
        let n = Math.pow(a, t),
          i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0;
      }
      function r(e) {
        return (0, i.default)(...e);
      }
      function l(e, t, a) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : a
          ? d(t > 0 ? a(t) : t)
          : d(t > 0 && e && n[e] ? n[e](t) : t);
      }
    },
    8686: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        bounce: function () {
          return F;
        },
        bouncePast: function () {
          return D;
        },
        ease: function () {
          return i;
        },
        easeIn: function () {
          return o;
        },
        easeInOut: function () {
          return r;
        },
        easeOut: function () {
          return d;
        },
        inBack: function () {
          return C;
        },
        inCirc: function () {
          return A;
        },
        inCubic: function () {
          return u;
        },
        inElastic: function () {
          return M;
        },
        inExpo: function () {
          return R;
        },
        inOutBack: function () {
          return V;
        },
        inOutCirc: function () {
          return h;
        },
        inOutCubic: function () {
          return p;
        },
        inOutElastic: function () {
          return w;
        },
        inOutExpo: function () {
          return _;
        },
        inOutQuad: function () {
          return s;
        },
        inOutQuart: function () {
          return E;
        },
        inOutQuint: function () {
          return m;
        },
        inOutSine: function () {
          return v;
        },
        inQuad: function () {
          return l;
        },
        inQuart: function () {
          return g;
        },
        inQuint: function () {
          return T;
        },
        inSine: function () {
          return b;
        },
        outBack: function () {
          return U;
        },
        outBounce: function () {
          return N;
        },
        outCirc: function () {
          return L;
        },
        outCubic: function () {
          return f;
        },
        outElastic: function () {
          return x;
        },
        outExpo: function () {
          return S;
        },
        outQuad: function () {
          return c;
        },
        outQuart: function () {
          return I;
        },
        outQuint: function () {
          return y;
        },
        outSine: function () {
          return O;
        },
        swingFrom: function () {
          return P;
        },
        swingFromTo: function () {
          return G;
        },
        swingTo: function () {
          return k;
        },
      });
      let n = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(a(1361)),
        i = (0, n.default)(0.25, 0.1, 0.25, 1),
        o = (0, n.default)(0.42, 0, 1, 1),
        d = (0, n.default)(0, 0, 0.58, 1),
        r = (0, n.default)(0.42, 0, 0.58, 1);
      function l(e) {
        return Math.pow(e, 2);
      }
      function c(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function s(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function u(e) {
        return Math.pow(e, 3);
      }
      function f(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function g(e) {
        return Math.pow(e, 4);
      }
      function I(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function E(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function T(e) {
        return Math.pow(e, 5);
      }
      function y(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function m(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function b(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function O(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function v(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function R(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function S(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function _(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function A(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function L(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function h(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function N(e) {
        if (e < 1 / 2.75) return 7.5625 * e * e;
        if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + 0.75;
        if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375;
        else return 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function C(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function U(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function V(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function M(e) {
        let t = 1.70158,
          a = 0,
          n = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (!a && (a = 0.3),
            n < 1
              ? ((n = 1), (t = a / 4))
              : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            -(
              n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / a)
            ));
      }
      function x(e) {
        let t = 1.70158,
          a = 0,
          n = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (!a && (a = 0.3),
            n < 1
              ? ((n = 1), (t = a / 4))
              : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            n * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / a) +
              1);
      }
      function w(e) {
        let t = 1.70158,
          a = 0,
          n = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (!a && (a = 0.3 * 1.5),
            n < 1
              ? ((n = 1), (t = a / 4))
              : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            e < 1)
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / a))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / a) *
              0.5 +
            1;
      }
      function G(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function P(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function k(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function F(e) {
        if (e < 1 / 2.75) return 7.5625 * e * e;
        if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + 0.75;
        if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375;
        else return 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function D(e) {
        if (e < 1 / 2.75) return 7.5625 * e * e;
        if (e < 2 / 2.75) return 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75);
        if (e < 2.5 / 2.75)
          return 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375);
        else return 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return u;
        },
        getPluginConfig: function () {
          return r;
        },
        getPluginDestination: function () {
          return s;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return l;
        },
        isPluginType: function () {
          return o;
        },
        renderPlugin: function () {
          return f;
        },
      });
      let n = a(2662),
        i = a(3690);
      function o(e) {
        return i.pluginMethodMap.has(e);
      }
      let d = (e) => (t) => {
          if (!n.IS_BROWSER_ENV) return () => null;
          let a = i.pluginMethodMap.get(t);
          if (!a) throw Error(`IX2 no plugin configured for: ${t}`);
          let o = a[e];
          if (!o) throw Error(`IX2 invalid plugin method: ${e}`);
          return o;
        },
        r = d("getPluginConfig"),
        l = d("getPluginOrigin"),
        c = d("getPluginDuration"),
        s = d("getPluginDestination"),
        u = d("createPluginInstance"),
        f = d("renderPlugin"),
        p = d("clearPlugin");
    },
    4124: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        cleanupHTMLElement: function () {
          return eQ;
        },
        clearAllStyles: function () {
          return eD;
        },
        clearObjectCache: function () {
          return ec;
        },
        getActionListProgress: function () {
          return ez;
        },
        getAffectedElements: function () {
          return ey;
        },
        getComputedStyle: function () {
          return em;
        },
        getDestinationValues: function () {
          return eL;
        },
        getElementId: function () {
          return ep;
        },
        getInstanceId: function () {
          return eu;
        },
        getInstanceOrigin: function () {
          return eR;
        },
        getItemConfigByKey: function () {
          return eA;
        },
        getMaxDurationItemIndex: function () {
          return eW;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eh;
        },
        getStyleProp: function () {
          return eN;
        },
        mediaQueriesEqual: function () {
          return eK;
        },
        observeStore: function () {
          return eE;
        },
        reduceListToGroup: function () {
          return ej;
        },
        reifyState: function () {
          return eg;
        },
        renderHTMLElement: function () {
          return eC;
        },
        shallowEqual: function () {
          return l.default;
        },
        shouldAllowMediaQuery: function () {
          return eq;
        },
        shouldNamespaceEventParameter: function () {
          return e$;
        },
        stringifyTarget: function () {
          return eJ;
        },
      });
      let n = p(a(4075)),
        i = p(a(1455)),
        o = p(a(5720)),
        d = a(1185),
        r = a(7087),
        l = p(a(7164)),
        c = a(3767),
        s = a(380),
        u = a(1799),
        f = a(2662);
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: g,
          TRANSFORM: I,
          TRANSLATE_3D: E,
          SCALE_3D: T,
          ROTATE_X: y,
          ROTATE_Y: m,
          ROTATE_Z: b,
          SKEW: O,
          PRESERVE_3D: v,
          FLEX: R,
          OPACITY: S,
          FILTER: _,
          FONT_VARIATION_SETTINGS: A,
          WIDTH: L,
          HEIGHT: h,
          BACKGROUND_COLOR: N,
          BORDER_COLOR: C,
          COLOR: U,
          CHILDREN: V,
          IMMEDIATE_CHILDREN: M,
          SIBLINGS: x,
          PARENT: w,
          DISPLAY: G,
          WILL_CHANGE: P,
          AUTO: k,
          COMMA_DELIMITER: F,
          COLON_DELIMITER: D,
          BAR_DELIMITER: X,
          RENDER_TRANSFORM: B,
          RENDER_GENERAL: Q,
          RENDER_STYLE: H,
          RENDER_PLUGIN: Y,
        } = r.IX2EngineConstants,
        {
          TRANSFORM_MOVE: W,
          TRANSFORM_SCALE: z,
          TRANSFORM_ROTATE: j,
          TRANSFORM_SKEW: $,
          STYLE_OPACITY: Z,
          STYLE_FILTER: q,
          STYLE_FONT_VARIATION: K,
          STYLE_SIZE: J,
          STYLE_BACKGROUND_COLOR: ee,
          STYLE_BORDER: et,
          STYLE_TEXT_COLOR: ea,
          GENERAL_DISPLAY: en,
          OBJECT_VALUE: ei,
        } = r.ActionTypeConsts,
        eo = (e) => e.trim(),
        ed = Object.freeze({ [ee]: N, [et]: C, [ea]: U }),
        er = Object.freeze({
          [f.TRANSFORM_PREFIXED]: I,
          [N]: g,
          [S]: S,
          [_]: _,
          [L]: L,
          [h]: h,
          [A]: A,
        }),
        el = new Map();
      function ec() {
        el.clear();
      }
      let es = 1;
      function eu() {
        return "i" + es++;
      }
      let ef = 1;
      function ep(e, t) {
        for (let a in e) {
          let n = e[a];
          if (n && n.ref === t) return n.id;
        }
        return "e" + ef++;
      }
      function eg({ events: e, actionLists: t, site: a } = {}) {
        let n = (0, i.default)(
            e,
            (e, t) => {
              let { eventTypeId: a } = t;
              return !e[a] && (e[a] = {}), (e[a][t.id] = t), e;
            },
            {}
          ),
          o = a && a.mediaQueries,
          d = [];
        return (
          o
            ? (d = o.map((e) => e.key))
            : ((o = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: n,
              mediaQueries: o,
              mediaQueryKeys: d,
            },
          }
        );
      }
      let eI = (e, t) => e === t;
      function eE({ store: e, select: t, onChange: a, comparator: n = eI }) {
        let { getState: i, subscribe: o } = e,
          d = o(function () {
            let o = t(i());
            if (null == o) {
              d();
              return;
            }
            !n(o, r) && a((r = o), e);
          }),
          r = t(i());
        return d;
      }
      function eT(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: a,
            selector: n,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: d,
          } = e;
          return {
            id: t,
            objectId: a,
            selector: n,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: d,
          };
        }
        return {};
      }
      function ey({
        config: e,
        event: t,
        eventTarget: a,
        elementRoot: n,
        elementApi: i,
      }) {
        let o, d, l;
        if (!i) throw Error("IX2 missing elementApi");
        let { targets: c } = e;
        if (Array.isArray(c) && c.length > 0)
          return c.reduce(
            (e, o) =>
              e.concat(
                ey({
                  config: { target: o },
                  event: t,
                  eventTarget: a,
                  elementRoot: n,
                  elementApi: i,
                })
              ),
            []
          );
        let {
            getValidDocument: s,
            getQuerySelector: u,
            queryDocument: p,
            getChildElements: g,
            getSiblingElements: I,
            matchSelector: E,
            elementContains: T,
            isSiblingNode: y,
          } = i,
          { target: m } = e;
        if (!m) return [];
        let {
          id: b,
          objectId: O,
          selector: v,
          selectorGuids: R,
          appliesTo: S,
          useEventTarget: _,
        } = eT(m);
        if (O) return [el.has(O) ? el.get(O) : el.set(O, {}).get(O)];
        if (S === r.EventAppliesTo.PAGE) {
          let e = s(b);
          return e ? [e] : [];
        }
        let A = (t?.action?.config?.affectedElements ?? {})[b || v] || {},
          L = !!(A.id || A.selector),
          h = t && u(eT(t.target));
        if (
          (L
            ? ((o = A.limitAffectedElements), (d = h), (l = u(A)))
            : (d = l = u({ id: b, selector: v, selectorGuids: R })),
          t && _)
        ) {
          let e = a && (l || !0 === _) ? [a] : p(h);
          if (l) {
            if (_ === w) return p(l).filter((t) => e.some((e) => T(t, e)));
            if (_ === V) return p(l).filter((t) => e.some((e) => T(e, t)));
            if (_ === x) return p(l).filter((t) => e.some((e) => y(e, t)));
          }
          return e;
        }
        if (null == d || null == l) return [];
        if (f.IS_BROWSER_ENV && n) return p(l).filter((e) => n.contains(e));
        if (o === V) return p(d, l);
        if (o === M) return g(p(d)).filter(E(l));
        if (o === x) return I(p(d)).filter(E(l));
        else return p(l);
      }
      function em({ element: e, actionItem: t }) {
        if (!f.IS_BROWSER_ENV) return {};
        let { actionTypeId: a } = t;
        switch (a) {
          case J:
          case ee:
          case et:
          case ea:
          case en:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let eb = /px/,
        eO = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eV[t.type]), e),
            e || {}
          ),
        ev = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eM[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );
      function eR(e, t = {}, a = {}, i, o) {
        let { getStyle: d } = o,
          { actionTypeId: r } = i;
        if ((0, u.isPluginType)(r)) return (0, u.getPluginOrigin)(r)(t[r], i);
        switch (i.actionTypeId) {
          case W:
          case z:
          case j:
          case $:
            return t[i.actionTypeId] || eU[i.actionTypeId];
          case q:
            return eO(t[i.actionTypeId], i.config.filters);
          case K:
            return ev(t[i.actionTypeId], i.config.fontVariations);
          case Z:
            return { value: (0, n.default)(parseFloat(d(e, S)), 1) };
          case J: {
            let t, o;
            let r = d(e, L),
              l = d(e, h);
            return (
              (t =
                i.config.widthUnit === k
                  ? eb.test(r)
                    ? parseFloat(r)
                    : parseFloat(a.width)
                  : (0, n.default)(parseFloat(r), parseFloat(a.width))),
              {
                widthValue: t,
                heightValue: (o =
                  i.config.heightUnit === k
                    ? eb.test(l)
                      ? parseFloat(l)
                      : parseFloat(a.height)
                    : (0, n.default)(parseFloat(l), parseFloat(a.height))),
              }
            );
          }
          case ee:
          case et:
          case ea:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: a,
              getStyle: i,
            }) {
              let o = ed[t],
                d = i(e, o),
                r = (function (e, t) {
                  let a = e.exec(t);
                  return a ? a[1] : "";
                })(eP, eG.test(d) ? d : a[o]).split(F);
              return {
                rValue: (0, n.default)(parseInt(r[0], 10), 255),
                gValue: (0, n.default)(parseInt(r[1], 10), 255),
                bValue: (0, n.default)(parseInt(r[2], 10), 255),
                aValue: (0, n.default)(parseFloat(r[3]), 1),
              };
            })({
              element: e,
              actionTypeId: i.actionTypeId,
              computedStyle: a,
              getStyle: d,
            });
          case en:
            return { value: (0, n.default)(d(e, G), a.display) };
          case ei:
            return t[i.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
        e_ = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eA = (e, t, a) => {
          if ((0, u.isPluginType)(e)) return (0, u.getPluginConfig)(e)(a, t);
          switch (e) {
            case q: {
              let e = (0, o.default)(a.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case K: {
              let e = (0, o.default)(
                a.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return a[t];
          }
        };
      function eL({ element: e, actionItem: t, elementApi: a }) {
        if ((0, u.isPluginType)(t.actionTypeId))
          return (0, u.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case W:
          case z:
          case j:
          case $: {
            let { xValue: e, yValue: a, zValue: n } = t.config;
            return { xValue: e, yValue: a, zValue: n };
          }
          case J: {
            let { getStyle: n, setStyle: i, getProperty: o } = a,
              { widthUnit: d, heightUnit: r } = t.config,
              { widthValue: l, heightValue: c } = t.config;
            if (!f.IS_BROWSER_ENV) return { widthValue: l, heightValue: c };
            if (d === k) {
              let t = n(e, L);
              i(e, L, ""), (l = o(e, "offsetWidth")), i(e, L, t);
            }
            if (r === k) {
              let t = n(e, h);
              i(e, h, ""), (c = o(e, "offsetHeight")), i(e, h, t);
            }
            return { widthValue: l, heightValue: c };
          }
          case ee:
          case et:
          case ea: {
            let {
              rValue: n,
              gValue: i,
              bValue: o,
              aValue: d,
              globalSwatchId: r,
            } = t.config;
            if (r && r.startsWith("--")) {
              let { getStyle: t } = a,
                n = t(e, r),
                i = (0, s.normalizeColor)(n);
              return {
                rValue: i.red,
                gValue: i.green,
                bValue: i.blue,
                aValue: i.alpha,
              };
            }
            return { rValue: n, gValue: i, bValue: o, aValue: d };
          }
          case q:
            return t.config.filters.reduce(eS, {});
          case K:
            return t.config.fontVariations.reduce(e_, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eh(e) {
        return /^TRANSFORM_/.test(e)
          ? B
          : /^STYLE_/.test(e)
          ? H
          : /^GENERAL_/.test(e)
          ? Q
          : /^PLUGIN_/.test(e)
          ? Y
          : void 0;
      }
      function eN(e, t) {
        return e === H ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eC(e, t, a, n, o, d, r, l, c) {
        switch (l) {
          case B:
            return (function (e, t, a, n, i) {
              let o = ew
                  .map((e) => {
                    let a = eU[e],
                      {
                        xValue: n = a.xValue,
                        yValue: i = a.yValue,
                        zValue: o = a.zValue,
                        xUnit: d = "",
                        yUnit: r = "",
                        zUnit: l = "",
                      } = t[e] || {};
                    switch (e) {
                      case W:
                        return `${E}(${n}${d}, ${i}${r}, ${o}${l})`;
                      case z:
                        return `${T}(${n}${d}, ${i}${r}, ${o}${l})`;
                      case j:
                        return `${y}(${n}${d}) ${m}(${i}${r}) ${b}(${o}${l})`;
                      case $:
                        return `${O}(${n}${d}, ${i}${r})`;
                      default:
                        return "";
                    }
                  })
                  .join(" "),
                { setStyle: d } = i;
              ek(e, f.TRANSFORM_PREFIXED, i),
                d(e, f.TRANSFORM_PREFIXED, o),
                (function (
                  { actionTypeId: e },
                  { xValue: t, yValue: a, zValue: n }
                ) {
                  return (
                    (e === W && void 0 !== n) ||
                    (e === z && void 0 !== n) ||
                    (e === j && (void 0 !== t || void 0 !== a))
                  );
                })(n, a) && d(e, f.TRANSFORM_STYLE_PREFIXED, v);
            })(e, t, a, o, r);
          case H:
            return (function (e, t, a, n, o, d) {
              let { setStyle: r } = d;
              switch (n.actionTypeId) {
                case J: {
                  let { widthUnit: t = "", heightUnit: i = "" } = n.config,
                    { widthValue: o, heightValue: l } = a;
                  void 0 !== o &&
                    (t === k && (t = "px"), ek(e, L, d), r(e, L, o + t)),
                    void 0 !== l &&
                      (i === k && (i = "px"), ek(e, h, d), r(e, h, l + i));
                  break;
                }
                case q:
                  !(function (e, t, a, n) {
                    let o = (0, i.default)(
                        t,
                        (e, t, n) => `${e} ${n}(${t}${ex(n, a)})`,
                        ""
                      ),
                      { setStyle: d } = n;
                    ek(e, _, n), d(e, _, o);
                  })(e, a, n.config, d);
                  break;
                case K:
                  !(function (e, t, a, n) {
                    let o = (0, i.default)(
                        t,
                        (e, t, a) => (e.push(`"${a}" ${t}`), e),
                        []
                      ).join(", "),
                      { setStyle: d } = n;
                    ek(e, A, n), d(e, A, o);
                  })(e, a, n.config, d);
                  break;
                case ee:
                case et:
                case ea: {
                  let t = ed[n.actionTypeId],
                    i = Math.round(a.rValue),
                    o = Math.round(a.gValue),
                    l = Math.round(a.bValue),
                    c = a.aValue;
                  ek(e, t, d),
                    r(
                      e,
                      t,
                      c >= 1
                        ? `rgb(${i},${o},${l})`
                        : `rgba(${i},${o},${l},${c})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = n.config;
                  ek(e, o, d), r(e, o, a.value + t);
                }
              }
            })(e, t, a, o, d, r);
          case Q:
            return (function (e, t, a) {
              let { setStyle: n } = a;
              if (t.actionTypeId === en) {
                let { value: a } = t.config;
                n(e, G, a === R && f.IS_BROWSER_ENV ? f.FLEX_PREFIXED : a);
                return;
              }
            })(e, o, r);
          case Y: {
            let { actionTypeId: e } = o;
            if ((0, u.isPluginType)(e)) return (0, u.renderPlugin)(e)(c, t, o);
          }
        }
      }
      let eU = {
          [W]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [z]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [j]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [$]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eV = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eM = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        ex = (e, t) => {
          let a = (0, o.default)(t.filters, ({ type: t }) => t === e);
          if (a && a.unit) return a.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        ew = Object.keys(eU),
        eG = /^rgb/,
        eP = RegExp("rgba?\\(([^)]+)\\)");
      function ek(e, t, a) {
        if (!f.IS_BROWSER_ENV) return;
        let n = er[t];
        if (!n) return;
        let { getStyle: i, setStyle: o } = a,
          d = i(e, P);
        if (!d) {
          o(e, P, n);
          return;
        }
        let r = d.split(F).map(eo);
        -1 === r.indexOf(n) && o(e, P, r.concat(n).join(F));
      }
      function eF(e, t, a) {
        if (!f.IS_BROWSER_ENV) return;
        let n = er[t];
        if (!n) return;
        let { getStyle: i, setStyle: o } = a,
          d = i(e, P);
        if (!!d && -1 !== d.indexOf(n))
          o(
            e,
            P,
            d
              .split(F)
              .map(eo)
              .filter((e) => e !== n)
              .join(F)
          );
      }
      function eD({ store: e, elementApi: t }) {
        let { ixData: a } = e.getState(),
          { events: n = {}, actionLists: i = {} } = a;
        Object.keys(n).forEach((e) => {
          let a = n[e],
            { config: o } = a.action,
            { actionListId: d } = o,
            r = i[d];
          r && eX({ actionList: r, event: a, elementApi: t });
        }),
          Object.keys(i).forEach((e) => {
            eX({ actionList: i[e], elementApi: t });
          });
      }
      function eX({ actionList: e = {}, event: t, elementApi: a }) {
        let { actionItemGroups: n, continuousParameterGroups: i } = e;
        n &&
          n.forEach((e) => {
            eB({ actionGroup: e, event: t, elementApi: a });
          }),
          i &&
            i.forEach((e) => {
              let { continuousActionGroups: n } = e;
              n.forEach((e) => {
                eB({ actionGroup: e, event: t, elementApi: a });
              });
            });
      }
      function eB({ actionGroup: e, event: t, elementApi: a }) {
        let { actionItems: n } = e;
        n.forEach((e) => {
          let n;
          let { actionTypeId: i, config: o } = e;
          (n = (0, u.isPluginType)(i)
            ? (t) => (0, u.clearPlugin)(i)(t, e)
            : eH({ effect: eY, actionTypeId: i, elementApi: a })),
            ey({ config: o, event: t, elementApi: a }).forEach(n);
        });
      }
      function eQ(e, t, a) {
        let { setStyle: n, getStyle: i } = a,
          { actionTypeId: o } = t;
        if (o === J) {
          let { config: a } = t;
          a.widthUnit === k && n(e, L, ""), a.heightUnit === k && n(e, h, "");
        }
        i(e, P) && eH({ effect: eF, actionTypeId: o, elementApi: a })(e);
      }
      let eH =
        ({ effect: e, actionTypeId: t, elementApi: a }) =>
        (n) => {
          switch (t) {
            case W:
            case z:
            case j:
            case $:
              e(n, f.TRANSFORM_PREFIXED, a);
              break;
            case q:
              e(n, _, a);
              break;
            case K:
              e(n, A, a);
              break;
            case Z:
              e(n, S, a);
              break;
            case J:
              e(n, L, a), e(n, h, a);
              break;
            case ee:
            case et:
            case ea:
              e(n, ed[t], a);
              break;
            case en:
              e(n, G, a);
          }
        };
      function eY(e, t, a) {
        let { setStyle: n } = a;
        eF(e, t, a),
          n(e, t, ""),
          t === f.TRANSFORM_PREFIXED && n(e, f.TRANSFORM_STYLE_PREFIXED, "");
      }
      function eW(e) {
        let t = 0,
          a = 0;
        return (
          e.forEach((e, n) => {
            let { config: i } = e,
              o = i.delay + i.duration;
            o >= t && ((t = o), (a = n));
          }),
          a
        );
      }
      function ez(e, t) {
        let { actionItemGroups: a, useFirstGroupAsInitialState: n } = e,
          { actionItem: i, verboseTimeElapsed: o = 0 } = t,
          d = 0,
          r = 0;
        return (
          a.forEach((e, t) => {
            if (n && 0 === t) return;
            let { actionItems: a } = e,
              l = a[eW(a)],
              { config: c, actionTypeId: s } = l;
            i.id === l.id && (r = d + o);
            let u = eh(s) === Q ? 0 : c.duration;
            d += c.delay + u;
          }),
          d > 0 ? (0, c.optimizeFloat)(r / d) : 0
        );
      }
      function ej({ actionList: e, actionItemId: t, rawData: a }) {
        let { actionItemGroups: n, continuousParameterGroups: i } = e,
          o = [],
          r = (e) => (
            o.push((0, d.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          n && n.some(({ actionItems: e }) => e.some(r)),
          i &&
            i.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(r));
            }),
          (0, d.setIn)(a, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
          })
        );
      }
      function e$(e, { basedOn: t }) {
        return (
          (e === r.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === r.EventBasedOn.ELEMENT || null == t)) ||
          (e === r.EventTypeConsts.MOUSE_MOVE && t === r.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + D + t;
      }
      function eq(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function eK(e, t) {
        return (0, l.default)(e && e.sort(), t && t.sort());
      }
      function eJ(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + X + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: a = "", useEventTarget: n = "" } = e;
        return t + X + a + X + n;
      }
    },
    7164: function (e, t) {
      "use strict";
      function a(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = function (e, t) {
        if (a(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let n = Object.keys(e),
          i = Object.keys(t);
        if (n.length !== i.length) return !1;
        for (let i = 0; i < n.length; i++)
          if (!Object.hasOwn(t, n[i]) || !a(e[n[i]], t[n[i]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      })(t, {
        createElementState: function () {
          return O;
        },
        ixElements: function () {
          return b;
        },
        mergeActionState: function () {
          return v;
        },
      });
      let n = a(1185),
        i = a(7087),
        {
          HTML_ELEMENT: o,
          PLAIN_OBJECT: d,
          ABSTRACT_NODE: r,
          CONFIG_X_VALUE: l,
          CONFIG_Y_VALUE: c,
          CONFIG_Z_VALUE: s,
          CONFIG_VALUE: u,
          CONFIG_X_UNIT: f,
          CONFIG_Y_UNIT: p,
          CONFIG_Z_UNIT: g,
          CONFIG_UNIT: I,
        } = i.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: E,
          IX2_INSTANCE_ADDED: T,
          IX2_ELEMENT_STATE_CHANGED: y,
        } = i.IX2EngineActionTypes,
        m = {},
        b = (e = m, t = {}) => {
          switch (t.type) {
            case E:
              return m;
            case T: {
              let {
                  elementId: a,
                  element: i,
                  origin: o,
                  actionItem: d,
                  refType: r,
                } = t.payload,
                { actionTypeId: l } = d,
                c = e;
              return (
                (0, n.getIn)(c, [a, i]) !== i && (c = O(c, i, r, a, d)),
                v(c, a, l, o, d)
              );
            }
            case y: {
              let {
                elementId: a,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return v(e, a, n, i, o);
            }
            default:
              return e;
          }
        };
      function O(e, t, a, i, o) {
        let r =
          a === d ? (0, n.getIn)(o, ["config", "target", "objectId"]) : null;
        return (0, n.mergeIn)(e, [i], { id: i, ref: t, refId: r, refType: a });
      }
      function v(e, t, a, i, o) {
        let d = (function (e) {
          let { config: t } = e;
          return R.reduce((e, a) => {
            let n = a[0],
              i = a[1],
              o = t[n],
              d = t[i];
            return null != o && null != d && (e[i] = d), e;
          }, {});
        })(o);
        return (0, n.mergeIn)(e, [t, "refState", a], i, d);
      }
      let R = [
        [l, f],
        [c, p],
        [s, g],
        [u, I],
      ];
    },
    1433: function () {
      Webflow.require("ix2").init({
        events: {
          "e-15": {
            id: "e-15",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-16",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "b6951e6b-60e9-44a3-42d0-c76a6d52a492",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "b6951e6b-60e9-44a3-42d0-c76a6d52a492",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191fa394372,
          },
          "e-16": {
            id: "e-16",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-113",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-15",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "b6951e6b-60e9-44a3-42d0-c76a6d52a492",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "b6951e6b-60e9-44a3-42d0-c76a6d52a492",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191fa394372,
          },
          "e-19": {
            id: "e-19",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-617",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".footer-link-wrapper",
              originalId: "fbad8f96-1925-c977-f4fe-81acceccf176",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".footer-link-wrapper",
                originalId: "fbad8f96-1925-c977-f4fe-81acceccf176",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191b18c5dda,
          },
          "e-20": {
            id: "e-20",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-614",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".footer-link-wrapper",
              originalId: "fbad8f96-1925-c977-f4fe-81acceccf176",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".footer-link-wrapper",
                originalId: "fbad8f96-1925-c977-f4fe-81acceccf176",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191b18c5ddf,
          },
          "e-36": {
            id: "e-36",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-37",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "bbe70ef4-67d7-8d67-30dc-46a75f07dbd9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "bbe70ef4-67d7-8d67-30dc-46a75f07dbd9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19206838768,
          },
          "e-46": {
            id: "e-46",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-47",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".work-slide-wrapper",
              originalId:
                "67d1a26598ed21d474e1dc96|d3e5b88c-e642-b30c-dc14-9f49b7c2a4b9",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".work-slide-wrapper",
                originalId:
                  "67d1a26598ed21d474e1dc96|d3e5b88c-e642-b30c-dc14-9f49b7c2a4b9",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19209c4848a,
          },
          "e-47": {
            id: "e-47",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-46",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".work-slide-wrapper",
              originalId:
                "67d1a26598ed21d474e1dc96|d3e5b88c-e642-b30c-dc14-9f49b7c2a4b9",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".work-slide-wrapper",
                originalId:
                  "67d1a26598ed21d474e1dc96|d3e5b88c-e642-b30c-dc14-9f49b7c2a4b9",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19209c4848b,
          },
          "e-48": {
            id: "e-48",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-49",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".slider-nav-arrow",
              originalId:
                "67d1a26598ed21d474e1dc96|1c23be1b-e2c5-2ec9-bce3-006197e34540",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".slider-nav-arrow",
                originalId:
                  "67d1a26598ed21d474e1dc96|1c23be1b-e2c5-2ec9-bce3-006197e34540",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19209ecbddd,
          },
          "e-49": {
            id: "e-49",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-48",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".slider-nav-arrow",
              originalId:
                "67d1a26598ed21d474e1dc96|1c23be1b-e2c5-2ec9-bce3-006197e34540",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".slider-nav-arrow",
                originalId:
                  "67d1a26598ed21d474e1dc96|1c23be1b-e2c5-2ec9-bce3-006197e34540",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19209ecbddd,
          },
          "e-102": {
            id: "e-102",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-103",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "a2e4ede9-03be-fc1b-6071-9a7d06f014b6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "a2e4ede9-03be-fc1b-6071-9a7d06f014b6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1920ae5be2f,
          },
          "e-103": {
            id: "e-103",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-36",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-102",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "a2e4ede9-03be-fc1b-6071-9a7d06f014b6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "a2e4ede9-03be-fc1b-6071-9a7d06f014b6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1920ae5be30,
          },
          "e-117": {
            id: "e-117",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-196",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1a26598ed21d474e1dc96",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-196-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-196-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
            ],
            createdOn: 0x1920b7bc7d8,
          },
          "e-138": {
            id: "e-138",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-139",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "927dffb1-6aac-78e2-62b8-3c6aafe602be",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "927dffb1-6aac-78e2-62b8-3c6aafe602be",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1920b8c3349,
          },
          "e-168": {
            id: "e-168",
            name: "",
            animationType: "custom",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-169",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "51e4b855-d29a-c7d2-d7af-78ea1dffdf68",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "51e4b855-d29a-c7d2-d7af-78ea1dffdf68",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1920ee075b7,
          },
          "e-169": {
            id: "e-169",
            name: "",
            animationType: "custom",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-49",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-168",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "51e4b855-d29a-c7d2-d7af-78ea1dffdf68",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "51e4b855-d29a-c7d2-d7af-78ea1dffdf68",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1920ee075b7,
          },
          "e-178": {
            id: "e-178",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-54",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-179",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".work-slide-thumbnail",
              originalId:
                "67d1a26598ed21d474e1dc96|a544708b-b9a9-3e3d-40d4-6c9184ca8576",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".work-slide-thumbnail",
                originalId:
                  "67d1a26598ed21d474e1dc96|a544708b-b9a9-3e3d-40d4-6c9184ca8576",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192106ddecc,
          },
          "e-180": {
            id: "e-180",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-55",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-181",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".work-slide",
              originalId:
                "67d1a26598ed21d474e1dc96|1c23be1b-e2c5-2ec9-bce3-006197e3453e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".work-slide",
                originalId:
                  "67d1a26598ed21d474e1dc96|1c23be1b-e2c5-2ec9-bce3-006197e3453e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192106fe70a,
          },
          "e-181": {
            id: "e-181",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-56",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-180",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".work-slide",
              originalId:
                "67d1a26598ed21d474e1dc96|1c23be1b-e2c5-2ec9-bce3-006197e3453e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".work-slide",
                originalId:
                  "67d1a26598ed21d474e1dc96|1c23be1b-e2c5-2ec9-bce3-006197e3453e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192106fe70b,
          },
          "e-318": {
            id: "e-318",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-84",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-329",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "3495fcf3-e8a2-b86e-8e9a-c7c0b81e543a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "3495fcf3-e8a2-b86e-8e9a-c7c0b81e543a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1948f55332f,
          },
          "e-324": {
            id: "e-324",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-87",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-314",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "3495fcf3-e8a2-b86e-8e9a-c7c0b81e5439",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "3495fcf3-e8a2-b86e-8e9a-c7c0b81e5439",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1948f55332f,
          },
          "e-329": {
            id: "e-329",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-83",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-318",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "3495fcf3-e8a2-b86e-8e9a-c7c0b81e543a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "3495fcf3-e8a2-b86e-8e9a-c7c0b81e543a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1948f55332f,
          },
          "e-331": {
            id: "e-331",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-85",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "3495fcf3-e8a2-b86e-8e9a-c7c0b81e543a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "3495fcf3-e8a2-b86e-8e9a-c7c0b81e543a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-85-p",
                selectedAxis: "X_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 95,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-85-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 95,
                restingState: 50,
              },
            ],
            createdOn: 0x1948f55332f,
          },
          "e-413": {
            id: "e-413",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-102",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-506",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".skill-bar",
              originalId:
                "66f00efc0ba3b86a13792a52|ab55a4f9-5cd7-156a-326f-ee297684867e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".skill-bar",
                originalId:
                  "66f00efc0ba3b86a13792a52|ab55a4f9-5cd7-156a-326f-ee297684867e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19002350584,
          },
          "e-415": {
            id: "e-415",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-103",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-416",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "7737de7f-1930-acb2-d45e-84422bf06d82",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "7737de7f-1930-acb2-d45e-84422bf06d82",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1949ce9042f,
          },
          "e-442": {
            id: "e-442",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-443",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1a26598ed21d474e1dc96|917ca85e-85a1-11a5-1df7-6279d4a80511",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|917ca85e-85a1-11a5-1df7-6279d4a80511",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194a6662874,
          },
          "e-468": {
            id: "e-468",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-66",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-469",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc99|20a28071-f777-8d57-3f08-dc73eace4219",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc99|20a28071-f777-8d57-3f08-dc73eace4219",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194c5d4b691,
          },
          "e-469": {
            id: "e-469",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-67",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-468",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc99|20a28071-f777-8d57-3f08-dc73eace4219",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc99|20a28071-f777-8d57-3f08-dc73eace4219",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194c5d4b691,
          },
          "e-470": {
            id: "e-470",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-471",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1a26598ed21d474e1dc99|20a28071-f777-8d57-3f08-dc73eace421d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc99|20a28071-f777-8d57-3f08-dc73eace421d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194c5d4b691,
          },
          "e-471": {
            id: "e-471",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-36",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-470",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1a26598ed21d474e1dc99|20a28071-f777-8d57-3f08-dc73eace421d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc99|20a28071-f777-8d57-3f08-dc73eace421d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194c5d4b691,
          },
          "e-472": {
            id: "e-472",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-66",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-473",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc9a|20a28071-f777-8d57-3f08-dc73eace4219",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc9a|20a28071-f777-8d57-3f08-dc73eace4219",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194c5d4de35,
          },
          "e-473": {
            id: "e-473",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-67",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-472",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc9a|20a28071-f777-8d57-3f08-dc73eace4219",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc9a|20a28071-f777-8d57-3f08-dc73eace4219",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194c5d4de35,
          },
          "e-482": {
            id: "e-482",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-146",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-528",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".footer-social-icon-wrapper",
              originalId:
                "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c2830",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".footer-social-icon-wrapper",
                originalId:
                  "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c2830",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1920b89ecc5,
          },
          "e-484": {
            id: "e-484",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-144",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-490",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".pointer",
              originalId:
                "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c231f",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".pointer",
                originalId:
                  "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c231f",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1928b670f0e,
          },
          "e-490": {
            id: "e-490",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-146",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-484",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".pointer",
              originalId:
                "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c231f",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".pointer",
                originalId:
                  "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c231f",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1928b670f08,
          },
          "e-491": {
            id: "e-491",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-120",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-563",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".gradient-color",
              originalId:
                "66e53864f0ccaa6615d22d2e|6be5a531-2d7e-1f52-dd5f-5fbfe1362ff1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".gradient-color",
                originalId:
                  "66e53864f0ccaa6615d22d2e|6be5a531-2d7e-1f52-dd5f-5fbfe1362ff1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191f544a9ad,
          },
          "e-507": {
            id: "e-507",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-133",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-476",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c2367",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c2367",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1922ec4ae20,
          },
          "e-511": {
            id: "e-511",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-121",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-531",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c2337",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c2337",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1928774517f,
          },
          "e-528": {
            id: "e-528",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-144",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-482",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".footer-social-icon-wrapper",
              originalId:
                "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c2830",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".footer-social-icon-wrapper",
                originalId:
                  "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c2830",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1920b89ecc5,
          },
          "e-529": {
            id: "e-529",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-140",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-608",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: "._2px-height-border",
              originalId:
                "66c4834eda51b2445f0451dd|0c6ad41c-911e-f325-a9e0-4a5826b17566",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: "._2px-height-border",
                originalId:
                  "66c4834eda51b2445f0451dd|0c6ad41c-911e-f325-a9e0-4a5826b17566",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18e3bf955c4,
          },
          "e-538": {
            id: "e-538",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-123",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-621",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".nav-dropdown-wrapper",
              originalId:
                "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c225c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-dropdown-wrapper",
                originalId:
                  "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c225c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1929b08e2cc,
          },
          "e-550": {
            id: "e-550",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-122",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1597",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".title-divider",
              originalId: "2d447679-4706-91d2-9ca4-2f7f6cbc8c69",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".title-divider",
                originalId: "2d447679-4706-91d2-9ca4-2f7f6cbc8c69",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f0061c811,
          },
          "e-556": {
            id: "e-556",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-131",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-538",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".nav-dropdown-wrapper",
              originalId:
                "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c225c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-dropdown-wrapper",
                originalId:
                  "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c225c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1929b08e2d4,
          },
          "e-558": {
            id: "e-558",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-133",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-513",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c26e1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c26e1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1922dc64e57,
          },
          "e-564": {
            id: "e-564",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-142",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-493",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c2377",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c2377",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1922e6a6f89,
          },
          "e-566": {
            id: "e-566",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-136",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-485",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c2356",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c2356",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1922fb02975,
          },
          "e-570": {
            id: "e-570",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-148",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-571",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "261ead34-8c30-17c8-8736-8ef598c7fc67",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "261ead34-8c30-17c8-8736-8ef598c7fc67",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1955803c998,
          },
          "e-571": {
            id: "e-571",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-149",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-570",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "261ead34-8c30-17c8-8736-8ef598c7fc67",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "261ead34-8c30-17c8-8736-8ef598c7fc67",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1955803c998,
          },
          "e-572": {
            id: "e-572",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-146",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-573",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "261ead34-8c30-17c8-8736-8ef598c7fc67",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "261ead34-8c30-17c8-8736-8ef598c7fc67",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1955805e82d,
          },
          "e-573": {
            id: "e-573",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-144",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-572",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "261ead34-8c30-17c8-8736-8ef598c7fc67",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "261ead34-8c30-17c8-8736-8ef598c7fc67",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1955805e82e,
          },
          "e-574": {
            id: "e-574",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-154",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-583",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".center-arrow-right",
              originalId:
                "67d1a26598ed21d474e1dc96|fa713c55-4866-c3bc-6426-35fb177f0016",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".center-arrow-right",
                originalId:
                  "67d1a26598ed21d474e1dc96|fa713c55-4866-c3bc-6426-35fb177f0016",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1924947bcd5,
          },
          "e-576": {
            id: "e-576",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-158",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-581",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".testimonial-margin",
              originalId:
                "678de14f2f97a222033b30b9|48190eee-7918-4607-1cea-7186faf6e892",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".testimonial-margin",
                originalId:
                  "678de14f2f97a222033b30b9|48190eee-7918-4607-1cea-7186faf6e892",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192495922f6,
          },
          "e-581": {
            id: "e-581",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-151",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-576",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".testimonial-margin",
              originalId:
                "678de14f2f97a222033b30b9|48190eee-7918-4607-1cea-7186faf6e892",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".testimonial-margin",
                originalId:
                  "678de14f2f97a222033b30b9|48190eee-7918-4607-1cea-7186faf6e892",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192495922f4,
          },
          "e-583": {
            id: "e-583",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-159",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-574",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".center-arrow-right",
              originalId:
                "67d1a26598ed21d474e1dc96|fa713c55-4866-c3bc-6426-35fb177f0016",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".center-arrow-right",
                originalId:
                  "67d1a26598ed21d474e1dc96|fa713c55-4866-c3bc-6426-35fb177f0016",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1924947bcd4,
          },
          "e-590": {
            id: "e-590",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-160",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-591",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".testimonial-slide",
              originalId:
                "67d1a26598ed21d474e1dc96|b2fb724e-7855-5499-2e35-25da2c155ae2",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".testimonial-slide",
                originalId:
                  "67d1a26598ed21d474e1dc96|b2fb724e-7855-5499-2e35-25da2c155ae2",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1955c5e7602,
          },
          "e-591": {
            id: "e-591",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-161",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-590",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".testimonial-slide",
              originalId:
                "67d1a26598ed21d474e1dc96|b2fb724e-7855-5499-2e35-25da2c155ae2",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".testimonial-slide",
                originalId:
                  "67d1a26598ed21d474e1dc96|b2fb724e-7855-5499-2e35-25da2c155ae2",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1955c5e7602,
          },
          "e-592": {
            id: "e-592",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-146",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-593",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "516b6ba2-820b-250b-c87d-eea92d525827",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "516b6ba2-820b-250b-c87d-eea92d525827",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1955cf4e9ad,
          },
          "e-593": {
            id: "e-593",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-144",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-592",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "516b6ba2-820b-250b-c87d-eea92d525827",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "516b6ba2-820b-250b-c87d-eea92d525827",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1955cf4e9ad,
          },
          "e-609": {
            id: "e-609",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-168",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-616",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-accordion",
              originalId:
                "67d1a26598ed21d474e1dc96|dfef6c35-9fee-1e4d-9fba-072d3b42ff80",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-accordion",
                originalId:
                  "67d1a26598ed21d474e1dc96|dfef6c35-9fee-1e4d-9fba-072d3b42ff80",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19232219dcc,
          },
          "e-616": {
            id: "e-616",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-167",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-609",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-accordion",
              originalId:
                "67d1a26598ed21d474e1dc96|dfef6c35-9fee-1e4d-9fba-072d3b42ff80",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-accordion",
                originalId:
                  "67d1a26598ed21d474e1dc96|dfef6c35-9fee-1e4d-9fba-072d3b42ff80",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19232219dcc,
          },
          "e-629": {
            id: "e-629",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-146",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-630",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".faq-accordion",
              originalId:
                "67d1a26598ed21d474e1dc96|dfef6c35-9fee-1e4d-9fba-072d3b42ff80",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-accordion",
                originalId:
                  "67d1a26598ed21d474e1dc96|dfef6c35-9fee-1e4d-9fba-072d3b42ff80",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19561c54063,
          },
          "e-630": {
            id: "e-630",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-144",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-629",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".faq-accordion",
              originalId:
                "67d1a26598ed21d474e1dc96|dfef6c35-9fee-1e4d-9fba-072d3b42ff80",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-accordion",
                originalId:
                  "67d1a26598ed21d474e1dc96|dfef6c35-9fee-1e4d-9fba-072d3b42ff80",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19561c54064,
          },
          "e-633": {
            id: "e-633",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-170",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-634",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".pricing-card",
              originalId:
                "6769a691d690a8acc66b50ed|902d77e1-92f2-c7ac-ba2b-339a1dfba299",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".pricing-card",
                originalId:
                  "6769a691d690a8acc66b50ed|902d77e1-92f2-c7ac-ba2b-339a1dfba299",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19296749d70,
          },
          "e-634": {
            id: "e-634",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-171",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-633",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".pricing-card",
              originalId:
                "6769a691d690a8acc66b50ed|902d77e1-92f2-c7ac-ba2b-339a1dfba299",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".pricing-card",
                originalId:
                  "6769a691d690a8acc66b50ed|902d77e1-92f2-c7ac-ba2b-339a1dfba299",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19296749d77,
          },
          "e-648": {
            id: "e-648",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-179",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "7708e344-4683-d7d0-7b5e-18d584e26c36",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "7708e344-4683-d7d0-7b5e-18d584e26c36",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-179-p",
                selectedAxis: "X_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 95,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-179-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 95,
                restingState: 50,
              },
            ],
            createdOn: 0x1948f55332f,
          },
          "e-684": {
            id: "e-684",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-177",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-685",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "7708e344-4683-d7d0-7b5e-18d584e26c36",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "7708e344-4683-d7d0-7b5e-18d584e26c36",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1957113859b,
          },
          "e-685": {
            id: "e-685",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-178",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-684",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "7708e344-4683-d7d0-7b5e-18d584e26c36",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "7708e344-4683-d7d0-7b5e-18d584e26c36",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1957113859b,
          },
          "e-686": {
            id: "e-686",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-687",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "4581ff3c-1df2-8873-705f-0568407a029d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "4581ff3c-1df2-8873-705f-0568407a029d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19574f53529,
          },
          "e-687": {
            id: "e-687",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-118",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-686",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "4581ff3c-1df2-8873-705f-0568407a029d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "4581ff3c-1df2-8873-705f-0568407a029d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19574f53529,
          },
          "e-689": {
            id: "e-689",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-187",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-698",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|ffcb8d19-21d9-a686-e396-392ad6bdd9ad",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|ffcb8d19-21d9-a686-e396-392ad6bdd9ad",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1945ac08079,
          },
          "e-704": {
            id: "e-704",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-146",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-705",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1a26598ed21d474e1dc96|9ca7cc37-629a-2fb3-cec7-932e8fd4be5a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|9ca7cc37-629a-2fb3-cec7-932e8fd4be5a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x193e8c51944,
          },
          "e-705": {
            id: "e-705",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-144",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-704",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1a26598ed21d474e1dc96|9ca7cc37-629a-2fb3-cec7-932e8fd4be5a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|9ca7cc37-629a-2fb3-cec7-932e8fd4be5a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x193e8c51944,
          },
          "e-706": {
            id: "e-706",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-191",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-707",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|9ca7cc37-629a-2fb3-cec7-932e8fd4be5a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|9ca7cc37-629a-2fb3-cec7-932e8fd4be5a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x193e8c689ed,
          },
          "e-707": {
            id: "e-707",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-192",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-706",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|9ca7cc37-629a-2fb3-cec7-932e8fd4be5a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|9ca7cc37-629a-2fb3-cec7-932e8fd4be5a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x193e8c689ee,
          },
          "e-710": {
            id: "e-710",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-193",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-711",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|38592c2e-ba10-d558-999a-95c2d60349fe",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|38592c2e-ba10-d558-999a-95c2d60349fe",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195769ccb1b,
          },
          "e-712": {
            id: "e-712",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-713",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "55c476db-d4b5-c7cf-5fd9-6ee85ff1c089",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "55c476db-d4b5-c7cf-5fd9-6ee85ff1c089",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195778c2050,
          },
          "e-713": {
            id: "e-713",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-113",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-712",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "55c476db-d4b5-c7cf-5fd9-6ee85ff1c089",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "55c476db-d4b5-c7cf-5fd9-6ee85ff1c089",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195778c2051,
          },
          "e-716": {
            id: "e-716",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-146",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-717",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "7708e344-4683-d7d0-7b5e-18d584e26c36",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "7708e344-4683-d7d0-7b5e-18d584e26c36",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19577a0e249,
          },
          "e-717": {
            id: "e-717",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-144",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-716",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "7708e344-4683-d7d0-7b5e-18d584e26c36",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "7708e344-4683-d7d0-7b5e-18d584e26c36",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19577a0e249,
          },
          "e-718": {
            id: "e-718",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-194",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-719",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "9a96b02d-8ef7-1e01-7587-a899f2e2e3ad",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "9a96b02d-8ef7-1e01-7587-a899f2e2e3ad",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1920f15d79a,
          },
          "e-719": {
            id: "e-719",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-195",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-718",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "9a96b02d-8ef7-1e01-7587-a899f2e2e3ad",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "9a96b02d-8ef7-1e01-7587-a899f2e2e3ad",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1920f15d79c,
          },
          "e-724": {
            id: "e-724",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-40",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-40-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-40-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
            ],
            createdOn: 0x1957c6843f2,
          },
          "e-727": {
            id: "e-727",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-728",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "e03376db-9680-8cb5-fc8b-1d99a29ae667",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "e03376db-9680-8cb5-fc8b-1d99a29ae667",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1957c84e504,
          },
          "e-728": {
            id: "e-728",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-36",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-727",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "e03376db-9680-8cb5-fc8b-1d99a29ae667",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "e03376db-9680-8cb5-fc8b-1d99a29ae667",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1957c84e504,
          },
          "e-729": {
            id: "e-729",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-182",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-730",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".animated-counter",
              originalId:
                "67d1a26598ed21d474e1dc96|8b90d738-cc0a-2f53-78a4-8bc05924c2cd",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animated-counter",
                originalId:
                  "67d1a26598ed21d474e1dc96|8b90d738-cc0a-2f53-78a4-8bc05924c2cd",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1957c8a76bc,
          },
          "e-731": {
            id: "e-731",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-146",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-732",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "4581ff3c-1df2-8873-705f-0568407a029d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "4581ff3c-1df2-8873-705f-0568407a029d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1957c8b3f18,
          },
          "e-732": {
            id: "e-732",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-144",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-731",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "4581ff3c-1df2-8873-705f-0568407a029d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "4581ff3c-1df2-8873-705f-0568407a029d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1957c8b3f19,
          },
          "e-733": {
            id: "e-733",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-146",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-734",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "b6951e6b-60e9-44a3-42d0-c76a6d52a492",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "b6951e6b-60e9-44a3-42d0-c76a6d52a492",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1957c8b783e,
          },
          "e-734": {
            id: "e-734",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-144",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-733",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "b6951e6b-60e9-44a3-42d0-c76a6d52a492",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "b6951e6b-60e9-44a3-42d0-c76a6d52a492",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1957c8b783e,
          },
          "e-735": {
            id: "e-735",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-66",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-736",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".main-body",
              originalId: "67d1a26598ed21d474e1dc96|66e7f4c59572369a92923be3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".main-body",
                originalId: "67d1a26598ed21d474e1dc96|66e7f4c59572369a92923be3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1957c8c6c3b,
          },
          "e-736": {
            id: "e-736",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-67",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-735",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".main-body",
              originalId: "67d1a26598ed21d474e1dc96|66e7f4c59572369a92923be3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".main-body",
                originalId: "67d1a26598ed21d474e1dc96|66e7f4c59572369a92923be3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1957c8c6c3b,
          },
          "e-737": {
            id: "e-737",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-738",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "516b6ba2-820b-250b-c87d-eea92d525878",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "516b6ba2-820b-250b-c87d-eea92d525878",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1957ca52d24,
          },
          "e-738": {
            id: "e-738",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-118",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-737",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "516b6ba2-820b-250b-c87d-eea92d525878",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "516b6ba2-820b-250b-c87d-eea92d525878",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1957ca52d24,
          },
          "e-739": {
            id: "e-739",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-146",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-740",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".footer-social-icon",
              originalId: "aac83d4d-a525-7650-b0e5-0bd9af40d46e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".footer-social-icon",
                originalId: "aac83d4d-a525-7650-b0e5-0bd9af40d46e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1958122932b,
          },
          "e-740": {
            id: "e-740",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-144",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-739",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".footer-social-icon",
              originalId: "aac83d4d-a525-7650-b0e5-0bd9af40d46e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".footer-social-icon",
                originalId: "aac83d4d-a525-7650-b0e5-0bd9af40d46e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1958122932c,
          },
          "e-741": {
            id: "e-741",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-146",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-742",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "ae4630f3-25c8-1af0-bf6f-a34696446e8b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "ae4630f3-25c8-1af0-bf6f-a34696446e8b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1958122d4c7,
          },
          "e-742": {
            id: "e-742",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-144",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-741",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "ae4630f3-25c8-1af0-bf6f-a34696446e8b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "ae4630f3-25c8-1af0-bf6f-a34696446e8b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1958122d4c7,
          },
          "e-743": {
            id: "e-743",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-156",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-744",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|ffcb8d19-21d9-a686-e396-392ad6bdd9ae",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|ffcb8d19-21d9-a686-e396-392ad6bdd9ae",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19586a381ff,
          },
          "e-745": {
            id: "e-745",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-197",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-746",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|ffcb8d19-21d9-a686-e396-392ad6bdd997",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|ffcb8d19-21d9-a686-e396-392ad6bdd997",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19586a43ec4,
          },
          "e-747": {
            id: "e-747",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-748",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|ffcb8d19-21d9-a686-e396-392ad6bdd993",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|ffcb8d19-21d9-a686-e396-392ad6bdd993",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19586a4dfa8,
          },
          "e-749": {
            id: "e-749",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-198",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-750",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|ffcb8d19-21d9-a686-e396-392ad6bdd9a9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|ffcb8d19-21d9-a686-e396-392ad6bdd9a9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19586a5041b,
          },
          "e-751": {
            id: "e-751",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-63",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-752",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|9ca7cc37-629a-2fb3-cec7-932e8fd4be5a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|9ca7cc37-629a-2fb3-cec7-932e8fd4be5a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19586a5c167,
          },
          "e-753": {
            id: "e-753",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-54",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-754",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|ffcb8d19-21d9-a686-e396-392ad6bdd994",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|ffcb8d19-21d9-a686-e396-392ad6bdd994",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19586a67940,
          },
          "e-755": {
            id: "e-755",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-184",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-756",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|ffcb8d19-21d9-a686-e396-392ad6bdd9aa",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|ffcb8d19-21d9-a686-e396-392ad6bdd9aa",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19586a6c42c,
          },
          "e-757": {
            id: "e-757",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-758",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".product-bar-texts-vertical",
              originalId:
                "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c2416",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".product-bar-texts-vertical",
                originalId:
                  "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c2416",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19586a935d7,
          },
          "e-759": {
            id: "e-759",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-63",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-760",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|1e985d14-052f-938f-1fcd-ed8fcdb0ada5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|1e985d14-052f-938f-1fcd-ed8fcdb0ada5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19586a999f2,
          },
          "e-773": {
            id: "e-773",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-774",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c275f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|6a38a641-5cca-1029-8d13-02aa314c275f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19586aa91d6,
          },
          "e-779": {
            id: "e-779",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-40",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1a26598ed21d474e1dc98",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc98",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-40-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-40-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
            ],
            createdOn: 0x19586b5c8ad,
          },
          "e-780": {
            id: "e-780",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-196",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc98",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc98",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-196-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-196-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
            ],
            createdOn: 0x19586b5e9c0,
          },
          "e-781": {
            id: "e-781",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-40",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1a26598ed21d474e1dc99",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc99",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-40-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-40-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
            ],
            createdOn: 0x19586b647dc,
          },
          "e-782": {
            id: "e-782",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-196",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1a26598ed21d474e1dc99",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc99",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-196-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-196-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
            ],
            createdOn: 0x19586b66b56,
          },
          "e-783": {
            id: "e-783",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-40",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1a26598ed21d474e1dc9a",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc9a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-40-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-40-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
            ],
            createdOn: 0x19586b69fc6,
          },
          "e-784": {
            id: "e-784",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-196",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1a26598ed21d474e1dc9a",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc9a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-196-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-196-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
            ],
            createdOn: 0x19586b6cf05,
          },
          "e-785": {
            id: "e-785",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-199",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-786",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "bd580cc7-f640-8c81-fd02-cec679ac6e43",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "bd580cc7-f640-8c81-fd02-cec679ac6e43",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1958ac139d2,
          },
          "e-786": {
            id: "e-786",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-200",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-785",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "bd580cc7-f640-8c81-fd02-cec679ac6e43",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "bd580cc7-f640-8c81-fd02-cec679ac6e43",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1958ac139d3,
          },
          "e-787": {
            id: "e-787",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-146",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-788",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "bd580cc7-f640-8c81-fd02-cec679ac6e43",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "bd580cc7-f640-8c81-fd02-cec679ac6e43",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1958ac3cb4c,
          },
          "e-788": {
            id: "e-788",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-144",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-787",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "bd580cc7-f640-8c81-fd02-cec679ac6e43",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "bd580cc7-f640-8c81-fd02-cec679ac6e43",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1958ac3cb4c,
          },
          "e-789": {
            id: "e-789",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-40",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1b5ae11178b61706bcf43",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b5ae11178b61706bcf43",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-40-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-40-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
            ],
            createdOn: 0x1958b2d4c63,
          },
          "e-790": {
            id: "e-790",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-196",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1b5ae11178b61706bcf43",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b5ae11178b61706bcf43",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-196-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-196-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
            ],
            createdOn: 0x1958b2d72a9,
          },
          "e-791": {
            id: "e-791",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-40",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1b6502ecb16b08d294839",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6502ecb16b08d294839",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-40-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-40-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
            ],
            createdOn: 0x1958b2f2f84,
          },
          "e-792": {
            id: "e-792",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-196",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1b6502ecb16b08d294839",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6502ecb16b08d294839",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-196-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-196-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
            ],
            createdOn: 0x1958b2f2f84,
          },
          "e-793": {
            id: "e-793",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-40",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1b65d4b3eea2e90bf391c",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b65d4b3eea2e90bf391c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-40-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-40-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
            ],
            createdOn: 0x1958b2f6266,
          },
          "e-794": {
            id: "e-794",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-196",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1b65d4b3eea2e90bf391c",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b65d4b3eea2e90bf391c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-196-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-196-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
            ],
            createdOn: 0x1958b2f6266,
          },
          "e-795": {
            id: "e-795",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-40",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1b668d67709b1b03b2a4f",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b668d67709b1b03b2a4f",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-40-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-40-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
            ],
            createdOn: 0x1958b2f8c66,
          },
          "e-796": {
            id: "e-796",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-196",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1b668d67709b1b03b2a4f",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b668d67709b1b03b2a4f",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-196-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-196-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
            ],
            createdOn: 0x1958b2f8c66,
          },
          "e-797": {
            id: "e-797",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-40",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1b692a7ba6c4544253c66",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b692a7ba6c4544253c66",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-40-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-40-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
            ],
            createdOn: 0x1958b3031b2,
          },
          "e-798": {
            id: "e-798",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-196",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1b692a7ba6c4544253c66",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b692a7ba6c4544253c66",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-196-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-196-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
            ],
            createdOn: 0x1958b3031b2,
          },
          "e-799": {
            id: "e-799",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-40",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1b6ab2ccaa19889409ae0",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6ab2ccaa19889409ae0",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-40-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-40-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
            ],
            createdOn: 0x1958b3095f3,
          },
          "e-800": {
            id: "e-800",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-196",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1b6ab2ccaa19889409ae0",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6ab2ccaa19889409ae0",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-196-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-196-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
            ],
            createdOn: 0x1958b3095f3,
          },
          "e-801": {
            id: "e-801",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-40",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1b6beafa5a9afd4df85d0",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6beafa5a9afd4df85d0",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-40-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-40-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 96,
                restingState: 50,
              },
            ],
            createdOn: 0x1958b30dc7d,
          },
          "e-802": {
            id: "e-802",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-196",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1b6beafa5a9afd4df85d0",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6beafa5a9afd4df85d0",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-196-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-196-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
            ],
            createdOn: 0x1958b30dc7d,
          },
          "e-803": {
            id: "e-803",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-804",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1b6502ecb16b08d294839|a9c9d40c-4779-9ec0-4974-1d174d22d595",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6502ecb16b08d294839|a9c9d40c-4779-9ec0-4974-1d174d22d595",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195951b11fe,
          },
          "e-805": {
            id: "e-805",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-156",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-806",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1b6502ecb16b08d294839|a9c9d40c-4779-9ec0-4974-1d174d22d5a0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6502ecb16b08d294839|a9c9d40c-4779-9ec0-4974-1d174d22d5a0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195951b11fe,
          },
          "e-807": {
            id: "e-807",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-63",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-808",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1b6502ecb16b08d294839|22caada0-f21b-36d6-9d29-23478a9f7dfa",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6502ecb16b08d294839|22caada0-f21b-36d6-9d29-23478a9f7dfa",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195951bb0b5,
          },
          "e-809": {
            id: "e-809",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-156",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-810",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1b6502ecb16b08d294839|22caada0-f21b-36d6-9d29-23478a9f7e63",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6502ecb16b08d294839|22caada0-f21b-36d6-9d29-23478a9f7e63",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195951bb0b5,
          },
          "e-811": {
            id: "e-811",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-201",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-812",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "259da7d2-82a8-86f8-321e-8442556adf80",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "259da7d2-82a8-86f8-321e-8442556adf80",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1959656cbab,
          },
          "e-812": {
            id: "e-812",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-202",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-811",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "259da7d2-82a8-86f8-321e-8442556adf80",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "259da7d2-82a8-86f8-321e-8442556adf80",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1959656cbab,
          },
          "e-815": {
            id: "e-815",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-203",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-816",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "b9171ec2-b616-5c16-228b-ddc76abf1d0f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "b9171ec2-b616-5c16-228b-ddc76abf1d0f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19599ce5480,
          },
          "e-816": {
            id: "e-816",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-204",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-815",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "b9171ec2-b616-5c16-228b-ddc76abf1d0f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "b9171ec2-b616-5c16-228b-ddc76abf1d0f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19599ce5480,
          },
          "e-819": {
            id: "e-819",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-820",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|cf4b541c-6c74-cd1b-4fbb-b8fbd3d6951b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|cf4b541c-6c74-cd1b-4fbb-b8fbd3d6951b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1959a1be02d,
          },
          "e-825": {
            id: "e-825",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-133",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-826",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "e1793698-4632-da87-d8ef-f148cda224cd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "e1793698-4632-da87-d8ef-f148cda224cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1959ad05ba0,
          },
          "e-827": {
            id: "e-827",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-207",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-828",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1b6502ecb16b08d294839|f3830f5b-4a70-39d5-8722-434983df8538",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6502ecb16b08d294839|f3830f5b-4a70-39d5-8722-434983df8538",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x193eae1a036,
          },
          "e-829": {
            id: "e-829",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-208",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-830",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".animated-counter-2",
              originalId: "5424f450-c531-1ab4-edea-07daee82723e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".animated-counter-2",
                originalId: "5424f450-c531-1ab4-edea-07daee82723e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18e80517a9d,
          },
          "e-833": {
            id: "e-833",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-210",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-834",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1b6502ecb16b08d294839|f3830f5b-4a70-39d5-8722-434983df85cc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6502ecb16b08d294839|f3830f5b-4a70-39d5-8722-434983df85cc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x193eae0c2c0,
          },
          "e-835": {
            id: "e-835",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-211",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-836",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1b6502ecb16b08d294839|7ad6642a-fe88-a82a-1486-ae75a6ce5b30",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6502ecb16b08d294839|7ad6642a-fe88-a82a-1486-ae75a6ce5b30",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1949e2b02dc,
          },
          "e-837": {
            id: "e-837",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-197",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-838",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1b6502ecb16b08d294839|55da5194-d097-8457-6ec5-dceb7694ce41",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6502ecb16b08d294839|55da5194-d097-8457-6ec5-dceb7694ce41",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1959bb0844d,
          },
          "e-839": {
            id: "e-839",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-133",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-840",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1b6502ecb16b08d294839|4b7a548a-7abc-03a6-0c3f-b00d7d1d83b9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6502ecb16b08d294839|4b7a548a-7abc-03a6-0c3f-b00d7d1d83b9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1924c1e1a9f,
          },
          "e-841": {
            id: "e-841",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-212",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1597",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".title-divider-2",
              originalId: "2d447679-4706-91d2-9ca4-2f7f6cbc8c69",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".title-divider-2",
                originalId: "2d447679-4706-91d2-9ca4-2f7f6cbc8c69",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f0061c811,
          },
          "e-845": {
            id: "e-845",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-213",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-846",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".contact-card-with-bg-image",
              originalId:
                "67d1b65d4b3eea2e90bf391c|4f01ccfd-ecf6-a4bd-d587-40a52d1d0140",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".contact-card-with-bg-image",
                originalId:
                  "67d1b65d4b3eea2e90bf391c|4f01ccfd-ecf6-a4bd-d587-40a52d1d0140",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927d347f99,
          },
          "e-846": {
            id: "e-846",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-214",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-845",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".contact-card-with-bg-image",
              originalId:
                "67d1b65d4b3eea2e90bf391c|4f01ccfd-ecf6-a4bd-d587-40a52d1d0140",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".contact-card-with-bg-image",
                originalId:
                  "67d1b65d4b3eea2e90bf391c|4f01ccfd-ecf6-a4bd-d587-40a52d1d0140",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927d347f9f,
          },
          "e-858": {
            id: "e-858",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-218",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-854",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".input-field-2",
              originalId:
                "67d1b65d4b3eea2e90bf391c|fbb7ae4a-a4a7-c677-4346-910359b1edba",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".input-field-2",
                originalId:
                  "67d1b65d4b3eea2e90bf391c|fbb7ae4a-a4a7-c677-4346-910359b1edba",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19215b56423,
          },
          "e-865": {
            id: "e-865",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-221",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-866",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1b65d4b3eea2e90bf391c|173aad23-c5b0-a17e-e3c3-7da456da1dbc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b65d4b3eea2e90bf391c|173aad23-c5b0-a17e-e3c3-7da456da1dbc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191efa09cbf,
          },
          "e-867": {
            id: "e-867",
            name: "",
            animationType: "custom",
            eventTypeId: "TAB_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-222",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-868",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".address-tab-link",
              originalId:
                "66ff95122e8acf6f7f29fcc1|60ea4224-51dd-afb7-c5d4-98009f7b3a4a",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".address-tab-link",
                originalId:
                  "66ff95122e8acf6f7f29fcc1|60ea4224-51dd-afb7-c5d4-98009f7b3a4a",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192685a854b,
          },
          "e-868": {
            id: "e-868",
            name: "",
            animationType: "custom",
            eventTypeId: "TAB_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-223",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-867",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".address-tab-link",
              originalId:
                "66ff95122e8acf6f7f29fcc1|60ea4224-51dd-afb7-c5d4-98009f7b3a4a",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".address-tab-link",
                originalId:
                  "66ff95122e8acf6f7f29fcc1|60ea4224-51dd-afb7-c5d4-98009f7b3a4a",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192685a8551,
          },
          "e-881": {
            id: "e-881",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-882",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1b65d4b3eea2e90bf391c|7883779e-405a-1ce7-c074-c8544d5006c7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b65d4b3eea2e90bf391c|7883779e-405a-1ce7-c074-c8544d5006c7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195a03f3ff2,
          },
          "e-887": {
            id: "e-887",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-888",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1b65d4b3eea2e90bf391c|7883779e-405a-1ce7-c074-c8544d5006dc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b65d4b3eea2e90bf391c|7883779e-405a-1ce7-c074-c8544d5006dc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195a03f3ff2,
          },
          "e-889": {
            id: "e-889",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-890",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1b65d4b3eea2e90bf391c|7883779e-405a-1ce7-c074-c8544d5006df",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b65d4b3eea2e90bf391c|7883779e-405a-1ce7-c074-c8544d5006df",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195a03f3ff2,
          },
          "e-890": {
            id: "e-890",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-113",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-889",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1b65d4b3eea2e90bf391c|7883779e-405a-1ce7-c074-c8544d5006df",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b65d4b3eea2e90bf391c|7883779e-405a-1ce7-c074-c8544d5006df",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195a03f3ff2,
          },
          "e-891": {
            id: "e-891",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-224",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|795f049e-d96d-d716-8485-9b3c178b24cb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|795f049e-d96d-d716-8485-9b3c178b24cb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-224-p",
                smoothing: 95,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x195a98be767,
          },
          "e-892": {
            id: "e-892",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-224",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1b668d67709b1b03b2a4f|a8b85c8d-5e46-abfb-63e1-5352eece55df",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b668d67709b1b03b2a4f|a8b85c8d-5e46-abfb-63e1-5352eece55df",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-224-p",
                smoothing: 95,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x195a9f2d212,
          },
          "e-893": {
            id: "e-893",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-894",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|af966f10-4d73-c4c0-625f-c2308d4223d2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|af966f10-4d73-c4c0-625f-c2308d4223d2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195a9f6130c,
          },
          "e-895": {
            id: "e-895",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-164",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-896",
              },
            },
            mediaQueries: ["main", "medium", "small"],
            target: {
              id: "67d1a26598ed21d474e1dc96|af966f10-4d73-c4c0-625f-c2308d4223d3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|af966f10-4d73-c4c0-625f-c2308d4223d3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195a9f6130c,
          },
          "e-897": {
            id: "e-897",
            name: "",
            animationType: "preset",
            eventTypeId: "TAB_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-162",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-898",
              },
            },
            mediaQueries: ["main", "medium", "small"],
            target: {
              id: "67d1a26598ed21d474e1dc96|af966f10-4d73-c4c0-625f-c2308d4223d7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|af966f10-4d73-c4c0-625f-c2308d4223d7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195a9f6130c,
          },
          "e-901": {
            id: "e-901",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-63",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-902",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|af966f10-4d73-c4c0-625f-c2308d4223dd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|af966f10-4d73-c4c0-625f-c2308d4223dd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195a9f6130c,
          },
          "e-903": {
            id: "e-903",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-63",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-904",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|5ce5f9fb-af7b-a6ab-eb76-687efd2f64e1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|5ce5f9fb-af7b-a6ab-eb76-687efd2f64e1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195a9f6309b,
          },
          "e-905": {
            id: "e-905",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-63",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-906",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|c8f13964-5e93-6723-0a08-2c3409ac28d5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|c8f13964-5e93-6723-0a08-2c3409ac28d5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195a9f63bdd,
          },
          "e-907": {
            id: "e-907",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-63",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-908",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|7b76fd9e-fe26-c4cb-7f43-3c581bfc9a8c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|7b76fd9e-fe26-c4cb-7f43-3c581bfc9a8c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195aa1354e5,
          },
          "e-909": {
            id: "e-909",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-156",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-910",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|7b76fd9e-fe26-c4cb-7f43-3c581bfc9af5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|7b76fd9e-fe26-c4cb-7f43-3c581bfc9af5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195aa1354e5,
          },
          "e-911": {
            id: "e-911",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-225",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-912",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|408a9648-0cac-5f1a-677f-a807aac99bb9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|408a9648-0cac-5f1a-677f-a807aac99bb9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195aeff9ff1,
          },
          "e-912": {
            id: "e-912",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-226",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-911",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|408a9648-0cac-5f1a-677f-a807aac99bb9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|408a9648-0cac-5f1a-677f-a807aac99bb9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195aeff9ff2,
          },
          "e-913": {
            id: "e-913",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-146",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-914",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1a26598ed21d474e1dc96|408a9648-0cac-5f1a-677f-a807aac99bb9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|408a9648-0cac-5f1a-677f-a807aac99bb9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195af063ba0,
          },
          "e-914": {
            id: "e-914",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-144",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-913",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1a26598ed21d474e1dc96|408a9648-0cac-5f1a-677f-a807aac99bb9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|408a9648-0cac-5f1a-677f-a807aac99bb9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195af063ba1,
          },
          "e-915": {
            id: "e-915",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-146",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-916",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1b6ab2ccaa19889409ae0|8079c9f7-5ae8-2e8b-a50c-17f8d2573729",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6ab2ccaa19889409ae0|8079c9f7-5ae8-2e8b-a50c-17f8d2573729",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195af08c8fc,
          },
          "e-916": {
            id: "e-916",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-144",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-915",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67d1b6ab2ccaa19889409ae0|8079c9f7-5ae8-2e8b-a50c-17f8d2573729",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6ab2ccaa19889409ae0|8079c9f7-5ae8-2e8b-a50c-17f8d2573729",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195af08c8fc,
          },
          "e-917": {
            id: "e-917",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-225",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-918",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1b6ab2ccaa19889409ae0|8079c9f7-5ae8-2e8b-a50c-17f8d2573729",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6ab2ccaa19889409ae0|8079c9f7-5ae8-2e8b-a50c-17f8d2573729",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195af08c8fc,
          },
          "e-918": {
            id: "e-918",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-226",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-917",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1b6ab2ccaa19889409ae0|8079c9f7-5ae8-2e8b-a50c-17f8d2573729",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6ab2ccaa19889409ae0|8079c9f7-5ae8-2e8b-a50c-17f8d2573729",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195af08c8fc,
          },
          "e-919": {
            id: "e-919",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-920",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1b6beafa5a9afd4df85d0|12510538-c188-8750-f6ab-09ccbe4b7d11",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6beafa5a9afd4df85d0|12510538-c188-8750-f6ab-09ccbe4b7d11",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195af09763e,
          },
          "e-921": {
            id: "e-921",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-156",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-922",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1b6beafa5a9afd4df85d0|12510538-c188-8750-f6ab-09ccbe4b7d1c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1b6beafa5a9afd4df85d0|12510538-c188-8750-f6ab-09ccbe4b7d1c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195af09763e,
          },
          "e-929": {
            id: "e-929",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-227",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-930",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1ae74f767a92cf62eda5a|58a98d67-2142-6145-1485-92886cfa02fd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1ae74f767a92cf62eda5a|58a98d67-2142-6145-1485-92886cfa02fd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19286887d2a,
          },
          "e-930": {
            id: "e-930",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-228",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-929",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1ae74f767a92cf62eda5a|58a98d67-2142-6145-1485-92886cfa02fd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1ae74f767a92cf62eda5a|58a98d67-2142-6145-1485-92886cfa02fd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19286887d30,
          },
          "e-931": {
            id: "e-931",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-146",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-932",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".contact-card-with-bg-image",
              originalId:
                "67d1b65d4b3eea2e90bf391c|4f01ccfd-ecf6-a4bd-d587-40a52d1d0164",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".contact-card-with-bg-image",
                originalId:
                  "67d1b65d4b3eea2e90bf391c|4f01ccfd-ecf6-a4bd-d587-40a52d1d0164",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195c4963945,
          },
          "e-932": {
            id: "e-932",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-144",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-931",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".contact-card-with-bg-image",
              originalId:
                "67d1b65d4b3eea2e90bf391c|4f01ccfd-ecf6-a4bd-d587-40a52d1d0164",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".contact-card-with-bg-image",
                originalId:
                  "67d1b65d4b3eea2e90bf391c|4f01ccfd-ecf6-a4bd-d587-40a52d1d0164",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195c4963946,
          },
          "e-933": {
            id: "e-933",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-133",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-934",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67d1a26598ed21d474e1dc96|81cc5f8c-1f9d-c74c-b144-e141bdac25be",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67d1a26598ed21d474e1dc96|81cc5f8c-1f9d-c74c-b144-e141bdac25be",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195e761196f,
          },
        },
        actionLists: {
          "a-8": {
            id: "a-8",
            title: "Button Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-8-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".hover-color",
                        selectorGuids: ["5f0bf806-47ec-26ef-ba49-6f71903c7ee3"],
                      },
                      widthValue: 0,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-8-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".default-text",
                        selectorGuids: ["5f0bf806-47ec-26ef-ba49-6f71903c7f09"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-8-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".hover-color",
                        selectorGuids: ["5f0bf806-47ec-26ef-ba49-6f71903c7ee3"],
                      },
                      widthValue: 100,
                      heightValue: 400,
                      widthUnit: "%",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18d9be167d4,
          },
          "a-113": {
            id: "a-113",
            title: "Button Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-113-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".default-text",
                        selectorGuids: ["5f0bf806-47ec-26ef-ba49-6f71903c7f09"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-113-n-7",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".hover-color",
                        selectorGuids: ["5f0bf806-47ec-26ef-ba49-6f71903c7ee3"],
                      },
                      widthValue: 0,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18d9be167d4,
          },
          "a-13": {
            id: "a-13",
            title: "Footer Link Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-13-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-border",
                        selectorGuids: ["b1093454-5302-54e7-2c4f-b9967beff4b6"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-13-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-border",
                        selectorGuids: ["b1093454-5302-54e7-2c4f-b9967beff4b6"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-13-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-border",
                        selectorGuids: ["b1093454-5302-54e7-2c4f-b9967beff4b6"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-13-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text",
                        selectorGuids: ["09405b8e-322e-b91d-c318-defe8ccca0a0"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-13-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 100,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-border",
                        selectorGuids: ["b1093454-5302-54e7-2c4f-b9967beff4b6"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18e6b0fd629,
          },
          "a-14": {
            id: "a-14",
            title: "Footer Link Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-14-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-border",
                        selectorGuids: ["b1093454-5302-54e7-2c4f-b9967beff4b6"],
                      },
                      xValue: 100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-14-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text",
                        selectorGuids: ["09405b8e-322e-b91d-c318-defe8ccca0a0"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-14-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-border",
                        selectorGuids: ["b1093454-5302-54e7-2c4f-b9967beff4b6"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-14-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-border",
                        selectorGuids: ["b1093454-5302-54e7-2c4f-b9967beff4b6"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18e6b0fd629,
          },
          "a-26": {
            id: "a-26",
            title: "Work Slide Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-26-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-26-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-26-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutCubic",
                      duration: 500,
                      target: {},
                      heightValue: 50,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-26-n-5",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutCubic",
                      duration: 500,
                      target: {},
                      heightValue: 50,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-26-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-slide-thumbnail",
                        selectorGuids: ["4589f97e-72ee-125f-7a12-9354d8b27771"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19209c48bc5,
          },
          "a-27": {
            id: "a-27",
            title: "Work Slide Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-27-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 500,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-27-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 500,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-27-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-slide-thumbnail",
                        selectorGuids: ["4589f97e-72ee-125f-7a12-9354d8b27771"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19209c48bc5,
          },
          "a-21": {
            id: "a-21",
            title: "Nav Arrow Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-21-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-21-n-3",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {},
                      globalSwatchId: "--secondary",
                      rValue: 37,
                      bValue: 50,
                      gValue: 36,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-21-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-21-n-4",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {},
                      filters: [
                        {
                          type: "invert",
                          filterId: "e758",
                          value: 100,
                          unit: "%",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19205fc50da,
          },
          "a-28": {
            id: "a-28",
            title: "Nav Arrow Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-28-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {},
                      globalSwatchId: "--white",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-28-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-28-n-4",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {},
                      filters: [
                        {
                          type: "invert",
                          filterId: "e758",
                          value: 0,
                          unit: "%",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19205fc50da,
          },
          "a-35": {
            id: "a-35",
            title: "Navbar Hide",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-35-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-hide-show-effect",
                        selectorGuids: ["3eb4179f-9174-67be-d1f9-899c79b53705"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-35-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".navbar",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbeb9"],
                      },
                      yValue: -130,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1920acdc58d,
          },
          "a-36": {
            id: "a-36",
            title: "Navbar Show",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-36-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".navbar",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbeb9"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1920acdc58d,
          },
          "a-196": {
            id: "a-196",
            title: "Cursor Move",
            continuousParameterGroups: [
              {
                id: "a-196-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-196-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".cursor-mouse",
                            selectorGuids: [
                              "e97cd2f4-48d3-3b86-014e-0aa1092bbec8",
                            ],
                          },
                          xValue: -50,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-196-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".cursor-mouse",
                            selectorGuids: [
                              "e97cd2f4-48d3-3b86-014e-0aa1092bbec8",
                            ],
                          },
                          xValue: 50,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-196-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-196-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".cursor-mouse",
                            selectorGuids: [
                              "e97cd2f4-48d3-3b86-014e-0aa1092bbec8",
                            ],
                          },
                          yValue: -50,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-196-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".cursor-mouse",
                            selectorGuids: [
                              "e97cd2f4-48d3-3b86-014e-0aa1092bbec8",
                            ],
                          },
                          yValue: 50,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1920b1f3ecd,
          },
          "a-48": {
            id: "a-48",
            title: "Navbar Open On Tab",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-48-n-7",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".bar-wrapper",
                        selectorGuids: ["0e630cfd-2ac8-9fac-0853-f65ef061e5b0"],
                      },
                      widthUnit: "AUTO",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-48-n-8",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".bar-wrapper",
                        selectorGuids: ["0e630cfd-2ac8-9fac-0853-f65ef061e5b0"],
                      },
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1920ee090c0,
          },
          "a-49": {
            id: "a-49",
            title: "Navbar Close On Tab",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-49-n-7",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".bar-wrapper",
                        selectorGuids: ["0e630cfd-2ac8-9fac-0853-f65ef061e5b0"],
                      },
                      widthUnit: "AUTO",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1920ee090c0,
          },
          "a-54": {
            id: "a-54",
            title: "Image Scale Down 0.3S",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-54-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|582f4864-d02a-8a04-6518-88fbe48d3de6",
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-54-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 300,
                      easing: "inOutQuad",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|582f4864-d02a-8a04-6518-88fbe48d3de6",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x192106aea0f,
          },
          "a-55": {
            id: "a-55",
            title: "Work Slide",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-55-n",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|1c23be1b-e2c5-2ec9-bce3-006197e3453e",
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "56c6",
                          value: 2,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-55-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-slide-thumbnail",
                        selectorGuids: ["4589f97e-72ee-125f-7a12-9354d8b27771"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-55-n-2",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|1c23be1b-e2c5-2ec9-bce3-006197e3453e",
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "05c4",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-55-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-slide-thumbnail",
                        selectorGuids: ["4589f97e-72ee-125f-7a12-9354d8b27771"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x192106ff732,
          },
          "a-56": {
            id: "a-56",
            title: "Work Slide Change",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-56-n-3",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|1c23be1b-e2c5-2ec9-bce3-006197e3453e",
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "05c4",
                          value: 2,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-56-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work-slide-thumbnail",
                        selectorGuids: ["4589f97e-72ee-125f-7a12-9354d8b27771"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x192106ff732,
          },
          "a-84": {
            id: "a-84",
            title: "Testimonial Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-84-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-84-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-84-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-84-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-84-n-5",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      filters: [
                        {
                          type: "blur",
                          filterId: "4cf0",
                          value: 5,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-84-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-84-n-7",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 700,
                      target: {},
                      widthUnit: "AUTO",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-84-n-8",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 700,
                      target: {},
                      widthUnit: "AUTO",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-84-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inQuad",
                      duration: 700,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-84-n-10",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 700,
                      target: {},
                      widthValue: 60,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-84-n-11",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 700,
                      target: {},
                      filters: [
                        {
                          type: "blur",
                          filterId: "2497",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-84-n-12",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 700,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x193c6d3fd5e,
          },
          "a-87": {
            id: "a-87",
            title: "Testimonial Card Opens",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-87-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "none",
                    },
                  },
                  {
                    id: "a-87-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-87-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: -40,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-87-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-87-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "flex",
                    },
                  },
                  {
                    id: "a-87-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-87-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-87-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x193c702078c,
          },
          "a-83": {
            id: "a-83",
            title: "Testimonial Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-83-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {},
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-83-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-83-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-83-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {},
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-83-n-5",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      filters: [
                        {
                          type: "blur",
                          filterId: "2497",
                          value: 5,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-83-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x193c6d3fd5e,
          },
          "a-85": {
            id: "a-85",
            title: "Testimonial Mouse Move Over",
            continuousParameterGroups: [
              {
                id: "a-85-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-85-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: -20,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-85-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 20,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-85-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-85-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: -5,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-85-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 5,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19247eb61cb,
          },
          "a-102": {
            id: "a-102",
            title: "Skill Bar Animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-102-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-102-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text",
                        selectorGuids: ["09405b8e-322e-b91d-c318-defe8ccca0a0"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-102-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutSine",
                      duration: 2e3,
                      target: {},
                      widthUnit: "AUTO",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-102-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1e3,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text",
                        selectorGuids: ["09405b8e-322e-b91d-c318-defe8ccca0a0"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1900231dbdc,
          },
          "a-103": {
            id: "a-103",
            title: "Infinity Heading",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-103-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 2500,
                      easing: "outExpo",
                      duration: 500,
                      target: {},
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-103-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 2500,
                      easing: "outExpo",
                      duration: 500,
                      target: {},
                      yValue: -200,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-103-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 2500,
                      easing: "outExpo",
                      duration: 500,
                      target: {},
                      yValue: -300,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-103-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1949ce91358,
          },
          "a-62": {
            id: "a-62",
            title: "Slide From Bottom",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-62-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      yValue: 50,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-62-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-62-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-62-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1921523fa80,
          },
          "a-66": {
            id: "a-66",
            title: "Show Custom Cursor",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-66-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".cursor-mouse-wrapper",
                        selectorGuids: ["c0b7f38f-d57a-b2fc-8ee2-a2233d776982"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-66-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".cursor-mouse-wrapper",
                        selectorGuids: ["c0b7f38f-d57a-b2fc-8ee2-a2233d776982"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-66-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".cursor-mouse-wrapper",
                        selectorGuids: ["c0b7f38f-d57a-b2fc-8ee2-a2233d776982"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x192154ad9ef,
          },
          "a-67": {
            id: "a-67",
            title: "Hide Custom Cursor",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-67-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cursor-mouse-wrapper",
                        selectorGuids: ["c0b7f38f-d57a-b2fc-8ee2-a2233d776982"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x192154ad9ef,
          },
          "a-146": {
            id: "a-146",
            title: "Cursor Scale Up",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-146-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".cursor-mouse",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbec8"],
                      },
                      widthValue: 30,
                      heightValue: 30,
                      widthUnit: "px",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1920b302c98,
          },
          "a-144": {
            id: "a-144",
            title: "Cursor Scale Down",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-144-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 300,
                      target: {
                        selector: ".cursor-mouse",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbec8"],
                      },
                      widthValue: 10,
                      heightValue: 10,
                      widthUnit: "px",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1920b302c98,
          },
          "a-120": {
            id: "a-120",
            title: "Gradient Loop",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-120-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "66e53864f0ccaa6615d22d2e|6be5a531-2d7e-1f52-dd5f-5fbfe1362ff1",
                      },
                      yValue: null,
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-120-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 1e4,
                      target: {
                        useEventTarget: !0,
                        id: "66e53864f0ccaa6615d22d2e|6be5a531-2d7e-1f52-dd5f-5fbfe1362ff1",
                      },
                      yValue: null,
                      zValue: 360,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-120-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: "66e53864f0ccaa6615d22d2e|6be5a531-2d7e-1f52-dd5f-5fbfe1362ff1",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x191f54311b0,
          },
          "a-133": {
            id: "a-133",
            title: "Infinity Slider Main",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-133-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".infinity-item-container",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe4b"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-133-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 3e4,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".infinity-item-container",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe4b"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-133-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".infinity-item-container",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe4b"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18962f4896e,
          },
          "a-121": {
            id: "a-121",
            title: "Hero Section Circle Moving Loop",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-121-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 5e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".circle-hero",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe25"],
                      },
                      xValue: -50,
                      yValue: 30,
                      xUnit: "vw",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-121-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inQuad",
                      duration: 5e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".circle-left-top",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe3e"],
                      },
                      xValue: 40,
                      yValue: 20,
                      xUnit: "vw",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-121-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 4e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".circle-left-top",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe3e"],
                      },
                      xValue: 50,
                      yValue: 0,
                      xUnit: "vw",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-121-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outBack",
                      duration: 5e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".circle-hero",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe25"],
                      },
                      xValue: -30,
                      yValue: 40,
                      xUnit: "vw",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-121-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 5e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".circle-hero",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe25"],
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "vw",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-121-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 5e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".circle-left-top",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe3e"],
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "vw",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19287745999,
          },
          "a-140": {
            id: "a-140",
            title: "0% To 100%",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-140-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "678de14f2f97a222033b30b0|ab196a87-875f-280a-b393-7f5e9858da82",
                      },
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-140-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 400,
                      easing: "inOutQuad",
                      duration: 3e3,
                      target: {
                        useEventTarget: !0,
                        id: "678de14f2f97a222033b30b0|ab196a87-875f-280a-b393-7f5e9858da82",
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19209ff9b06,
          },
          "a-123": {
            id: "a-123",
            title: "Nav Dropdown Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-123-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-icon",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe37"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-123-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-contents",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe75"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-123-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-contents",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe75"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-123-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-contents",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe75"],
                      },
                      value: "block",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-123-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-contents",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe75"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-123-n-7",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-icon",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe37"],
                      },
                      zValue: -180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-123-n-8",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-contents",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe75"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17d1c97a2c0,
          },
          "a-122": {
            id: "a-122",
            title: "Title Divider Animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-122-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-122-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 2e3,
                      target: {},
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-122-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 2e3,
                      target: {},
                      xValue: 100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-122-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18f0061d176,
          },
          "a-131": {
            id: "a-131",
            title: "Nav Dropdown Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-131-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-icon",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe37"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-131-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-contents",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe75"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-131-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-contents",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe75"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17d1c97a2c0,
          },
          "a-142": {
            id: "a-142",
            title: "Infinity Slider Main Reverse",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-142-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".infinity-item-container",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe4b"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-142-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 2e4,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".infinity-item-container",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe4b"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-142-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".infinity-item-container",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbe4b"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18962f4896e,
          },
          "a-136": {
            id: "a-136",
            title: "Rotate Loop 10s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-136-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "678de14f2f97a222033b30b0|1eed80d3-2885-d8fb-3d12-1a54c4fbac15",
                      },
                      yValue: null,
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-136-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 1e4,
                      target: {
                        useEventTarget: !0,
                        id: "678de14f2f97a222033b30b0|1eed80d3-2885-d8fb-3d12-1a54c4fbac15",
                      },
                      yValue: null,
                      zValue: 360,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-136-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: "678de14f2f97a222033b30b0|1eed80d3-2885-d8fb-3d12-1a54c4fbac15",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19205d7a569,
          },
          "a-148": {
            id: "a-148",
            title: "Team Card Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-148-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".overlay-wrapper",
                        selectorGuids: ["cee766dd-4c5c-87fa-529f-eba80c44ac73"],
                      },
                      globalSwatchId: "--transparent",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 0,
                    },
                  },
                  {
                    id: "a-148-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-member-name",
                        selectorGuids: ["db51e33b-eff9-3e4b-cbd5-aa7c3c8b002a"],
                      },
                      xValue: -20,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-148-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-member-designation",
                        selectorGuids: ["f2c53fe4-2824-6738-aea9-df7732b13f3d"],
                      },
                      xValue: 20,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-148-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-social-icons",
                        selectorGuids: ["e8a27cb3-52c7-4722-6d74-b6936156f0e0"],
                      },
                      yValue: 30,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-148-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".overlay-wrapper",
                        selectorGuids: ["cee766dd-4c5c-87fa-529f-eba80c44ac73"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-148-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".overlay-wrapper",
                        selectorGuids: ["cee766dd-4c5c-87fa-529f-eba80c44ac73"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-148-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-member-name",
                        selectorGuids: ["db51e33b-eff9-3e4b-cbd5-aa7c3c8b002a"],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-148-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-member-designation",
                        selectorGuids: ["f2c53fe4-2824-6738-aea9-df7732b13f3d"],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-148-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-social-icons",
                        selectorGuids: ["e8a27cb3-52c7-4722-6d74-b6936156f0e0"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-148-n-4",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".overlay-wrapper",
                        selectorGuids: ["cee766dd-4c5c-87fa-529f-eba80c44ac73"],
                      },
                      globalSwatchId: "--overlay-color",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 0.8,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1955803e673,
          },
          "a-149": {
            id: "a-149",
            title: "Team Card Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-149-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".overlay-wrapper",
                        selectorGuids: ["cee766dd-4c5c-87fa-529f-eba80c44ac73"],
                      },
                      globalSwatchId: "--transparent",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 0,
                    },
                  },
                  {
                    id: "a-149-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-member-name",
                        selectorGuids: ["db51e33b-eff9-3e4b-cbd5-aa7c3c8b002a"],
                      },
                      xValue: -20,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-149-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-member-designation",
                        selectorGuids: ["f2c53fe4-2824-6738-aea9-df7732b13f3d"],
                      },
                      xValue: 20,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-149-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-social-icons",
                        selectorGuids: ["e8a27cb3-52c7-4722-6d74-b6936156f0e0"],
                      },
                      yValue: 30,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-149-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".overlay-wrapper",
                        selectorGuids: ["cee766dd-4c5c-87fa-529f-eba80c44ac73"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-149-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".overlay-wrapper",
                        selectorGuids: ["cee766dd-4c5c-87fa-529f-eba80c44ac73"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-149-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-member-name",
                        selectorGuids: ["db51e33b-eff9-3e4b-cbd5-aa7c3c8b002a"],
                      },
                      xValue: -20,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-149-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-member-designation",
                        selectorGuids: ["f2c53fe4-2824-6738-aea9-df7732b13f3d"],
                      },
                      xValue: 20,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-149-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-social-icons",
                        selectorGuids: ["e8a27cb3-52c7-4722-6d74-b6936156f0e0"],
                      },
                      yValue: 30,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-149-n-10",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".overlay-wrapper",
                        selectorGuids: ["cee766dd-4c5c-87fa-529f-eba80c44ac73"],
                      },
                      globalSwatchId: "--transparent",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1955803e673,
          },
          "a-154": {
            id: "a-154",
            title: "Slider Nav Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-154-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-icon-image",
                        selectorGuids: ["89adfbb3-ad9d-9873-f762-9b635dfe2e6c"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-154-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-icon-wrapper",
                        selectorGuids: ["1b715715-9090-1275-71b5-e0441ee60ee3"],
                      },
                      globalSwatchId:
                        "@var_variable-cf335edf-92a8-5bd7-fb06-aa072186960b",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-154-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-icon-wrapper",
                        selectorGuids: ["1b715715-9090-1275-71b5-e0441ee60ee3"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19205fc50da,
          },
          "a-158": {
            id: "a-158",
            title: "Testimonial Slide Out Of View",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-158-n",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {},
                      filters: [
                        {
                          type: "grayscale",
                          filterId: "df88",
                          value: 100,
                          unit: "%",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-158-n-2",
                    actionTypeId: "STYLE_BORDER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      globalSwatchId: "--transparent",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 0,
                    },
                  },
                  {
                    id: "a-158-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {},
                      xValue: 0.8,
                      yValue: 0.8,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1924959cb9d,
          },
          "a-151": {
            id: "a-151",
            title: "Testimonial Slide In View",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-151-n",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      filters: [
                        {
                          type: "grayscale",
                          filterId: "1031",
                          value: 100,
                          unit: "%",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-151-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 0.8,
                      yValue: 0.8,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-151-n-3",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {},
                      filters: [
                        {
                          type: "grayscale",
                          filterId: "df88",
                          value: 0,
                          unit: "%",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-151-n-4",
                    actionTypeId: "STYLE_BORDER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {},
                      globalSwatchId: "--primary",
                      rValue: 192,
                      bValue: 72,
                      gValue: 247,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-151-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1924959cb9d,
          },
          "a-159": {
            id: "a-159",
            title: "Slider Nav Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-159-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-icon-image",
                        selectorGuids: ["89adfbb3-ad9d-9873-f762-9b635dfe2e6c"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-159-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-icon-wrapper",
                        selectorGuids: ["1b715715-9090-1275-71b5-e0441ee60ee3"],
                      },
                      globalSwatchId: "--primary",
                      rValue: 200,
                      bValue: 29,
                      gValue: 242,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-159-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-icon-wrapper",
                        selectorGuids: ["1b715715-9090-1275-71b5-e0441ee60ee3"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19205fc50da,
          },
          "a-160": {
            id: "a-160",
            title: "Slide In View",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-160-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".testimonial-card",
                        selectorGuids: ["5571ec93-3fe8-e2f9-d274-c47e893ba91e"],
                      },
                      xValue: 0.8,
                      yValue: 0.8,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-160-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".testimonial-text",
                        selectorGuids: ["ec9a03d8-e01b-9934-6c57-4ef25eff5f89"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-160-n-2",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".testimonial-card",
                        selectorGuids: ["5571ec93-3fe8-e2f9-d274-c47e893ba91e"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "863f",
                          value: 5,
                          unit: "px",
                        },
                        {
                          type: "grayscale",
                          filterId: "1372",
                          value: 100,
                          unit: "%",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-160-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".testimonial-card",
                        selectorGuids: ["5571ec93-3fe8-e2f9-d274-c47e893ba91e"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-160-n-7",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".testimonial-text",
                        selectorGuids: ["ec9a03d8-e01b-9934-6c57-4ef25eff5f89"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-160-n-5",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".testimonial-card",
                        selectorGuids: ["5571ec93-3fe8-e2f9-d274-c47e893ba91e"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "7c0a",
                          value: 0,
                          unit: "px",
                        },
                        {
                          type: "grayscale",
                          filterId: "91e9",
                          value: 0,
                          unit: "%",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1955c5e7ed6,
          },
          "a-161": {
            id: "a-161",
            title: "Slide Out Of View",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-161-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".testimonial-card",
                        selectorGuids: ["5571ec93-3fe8-e2f9-d274-c47e893ba91e"],
                      },
                      xValue: 0.8,
                      yValue: 0.8,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-161-n-5",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".testimonial-text",
                        selectorGuids: ["ec9a03d8-e01b-9934-6c57-4ef25eff5f89"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-161-n-6",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".testimonial-card",
                        selectorGuids: ["5571ec93-3fe8-e2f9-d274-c47e893ba91e"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "7c0a",
                          value: 5,
                          unit: "px",
                        },
                        {
                          type: "grayscale",
                          filterId: "91e9",
                          value: 100,
                          unit: "%",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1955c5e7ed6,
          },
          "a-168": {
            id: "a-168",
            title: "Faq Dropdown Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-168-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-body",
                        selectorGuids: ["bdbb4d3b-3bed-1bb6-d512-8ea3a9e650b3"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-168-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus-sign-vertical",
                        selectorGuids: ["bdbb4d3b-3bed-1bb6-d512-8ea3a9e650b0"],
                      },
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-168-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-body",
                        selectorGuids: ["bdbb4d3b-3bed-1bb6-d512-8ea3a9e650b3"],
                      },
                      xValue: 0.96,
                      yValue: 0.96,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-168-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-body",
                        selectorGuids: ["bdbb4d3b-3bed-1bb6-d512-8ea3a9e650b3"],
                      },
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-168-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-body",
                        selectorGuids: ["bdbb4d3b-3bed-1bb6-d512-8ea3a9e650b3"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17d3e54cb26,
          },
          "a-167": {
            id: "a-167",
            title: "FAQ Dropdown Opens",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-167-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-body",
                        selectorGuids: ["bdbb4d3b-3bed-1bb6-d512-8ea3a9e650b3"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-167-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus-sign-vertical",
                        selectorGuids: ["bdbb4d3b-3bed-1bb6-d512-8ea3a9e650b0"],
                      },
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-167-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-body",
                        selectorGuids: ["bdbb4d3b-3bed-1bb6-d512-8ea3a9e650b3"],
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-167-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-body",
                        selectorGuids: ["bdbb4d3b-3bed-1bb6-d512-8ea3a9e650b3"],
                      },
                      xValue: null,
                      yValue: 20,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-167-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-body",
                        selectorGuids: ["bdbb4d3b-3bed-1bb6-d512-8ea3a9e650b3"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-167-n-6",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-body",
                        selectorGuids: ["bdbb4d3b-3bed-1bb6-d512-8ea3a9e650b3"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-167-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 300,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-167-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 300,
                      target: {},
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-167-n-9",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 400,
                      target: {},
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-167-n-10",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 400,
                      target: {},
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-167-n-11",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 400,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-167-n-12",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus-sign-vertical",
                        selectorGuids: ["bdbb4d3b-3bed-1bb6-d512-8ea3a9e650b0"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-167-n-13",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-body",
                        selectorGuids: ["bdbb4d3b-3bed-1bb6-d512-8ea3a9e650b3"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-167-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-body",
                        selectorGuids: ["bdbb4d3b-3bed-1bb6-d512-8ea3a9e650b3"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-167-n-15",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-body",
                        selectorGuids: ["bdbb4d3b-3bed-1bb6-d512-8ea3a9e650b3"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17d3e4eed93,
          },
          "a-170": {
            id: "a-170",
            title: "Pricing Card Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-170-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".border-primary",
                        selectorGuids: ["3809bebb-cbdf-7f5b-c404-a98a1ee9e0c4"],
                      },
                      xValue: -100,
                      yValue: null,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-170-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".border-primary",
                        selectorGuids: ["3809bebb-cbdf-7f5b-c404-a98a1ee9e0c4"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-170-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._16px-text",
                        selectorGuids: ["732cf6c9-dfef-8d93-c50d-50597696e610"],
                      },
                      globalSwatchId: "--heading-2",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-170-n-4",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".package-name",
                        selectorGuids: ["3809bebb-cbdf-7f5b-c404-a98a1ee9e0c2"],
                      },
                      globalSwatchId: "--primary",
                      rValue: 187,
                      bValue: 64,
                      gValue: 243,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18e70ec489b,
          },
          "a-171": {
            id: "a-171",
            title: "Pricing Card Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-171-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".border-primary",
                        selectorGuids: ["3809bebb-cbdf-7f5b-c404-a98a1ee9e0c4"],
                      },
                      xValue: 100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-171-n-2",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._16px-text",
                        selectorGuids: ["732cf6c9-dfef-8d93-c50d-50597696e610"],
                      },
                      globalSwatchId: "--heading",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-171-n-3",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".package-name",
                        selectorGuids: ["3809bebb-cbdf-7f5b-c404-a98a1ee9e0c2"],
                      },
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 0.1,
                    },
                  },
                  {
                    id: "a-171-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".border-primary",
                        selectorGuids: ["3809bebb-cbdf-7f5b-c404-a98a1ee9e0c4"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18e70ec489b,
          },
          "a-179": {
            id: "a-179",
            title: "Service Card Mouse Hover",
            continuousParameterGroups: [
              {
                id: "a-179-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-179-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".service-thumbnail-wrapper",
                            selectorGuids: [
                              "772d46a0-a8b2-9c2c-ef8c-e0dcaa66e684",
                            ],
                          },
                          xValue: -30,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-179-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".service-thumbnail-wrapper",
                            selectorGuids: [
                              "772d46a0-a8b2-9c2c-ef8c-e0dcaa66e684",
                            ],
                          },
                          xValue: 30,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-179-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-179-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".service-thumbnail-wrapper",
                            selectorGuids: [
                              "772d46a0-a8b2-9c2c-ef8c-e0dcaa66e684",
                            ],
                          },
                          yValue: -5,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-179-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".service-thumbnail-wrapper",
                            selectorGuids: [
                              "772d46a0-a8b2-9c2c-ef8c-e0dcaa66e684",
                            ],
                          },
                          yValue: 5,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19247eb61cb,
          },
          "a-177": {
            id: "a-177",
            title: "Service Card Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-177-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".client-info",
                        selectorGuids: ["772d46a0-a8b2-9c2c-ef8c-e0dcaa66e677"],
                      },
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-177-n-13",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-thumbnail",
                        selectorGuids: ["772d46a0-a8b2-9c2c-ef8c-e0dcaa66e671"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-177-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._14px-text-600",
                        selectorGuids: ["772d46a0-a8b2-9c2c-ef8c-e0dcaa66e679"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-177-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".testimonial-divider",
                        selectorGuids: ["772d46a0-a8b2-9c2c-ef8c-e0dcaa66e67a"],
                      },
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-177-n-5",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-thumbnail",
                        selectorGuids: ["772d46a0-a8b2-9c2c-ef8c-e0dcaa66e671"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "4cf0",
                          value: 5,
                          unit: "px",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-177-n-14",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-thumbnail",
                        selectorGuids: ["772d46a0-a8b2-9c2c-ef8c-e0dcaa66e671"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-177-n-8",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".client-info",
                        selectorGuids: ["772d46a0-a8b2-9c2c-ef8c-e0dcaa66e677"],
                      },
                      widthUnit: "AUTO",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-177-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inQuad",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._14px-text-600",
                        selectorGuids: ["772d46a0-a8b2-9c2c-ef8c-e0dcaa66e679"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-177-n-10",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".testimonial-divider",
                        selectorGuids: ["772d46a0-a8b2-9c2c-ef8c-e0dcaa66e67a"],
                      },
                      widthValue: 60,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-177-n-11",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-thumbnail",
                        selectorGuids: ["772d46a0-a8b2-9c2c-ef8c-e0dcaa66e671"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "2497",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x193c6d3fd5e,
          },
          "a-178": {
            id: "a-178",
            title: "Service Card Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-178-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-thumbnail",
                        selectorGuids: ["772d46a0-a8b2-9c2c-ef8c-e0dcaa66e671"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-178-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".client-info",
                        selectorGuids: ["772d46a0-a8b2-9c2c-ef8c-e0dcaa66e677"],
                      },
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-178-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._14px-text-600",
                        selectorGuids: ["772d46a0-a8b2-9c2c-ef8c-e0dcaa66e679"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-178-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".testimonial-divider",
                        selectorGuids: ["772d46a0-a8b2-9c2c-ef8c-e0dcaa66e67a"],
                      },
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-178-n-5",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-thumbnail",
                        selectorGuids: ["772d46a0-a8b2-9c2c-ef8c-e0dcaa66e671"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "2497",
                          value: 5,
                          unit: "px",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x193c6d3fd5e,
          },
          "a-130": {
            id: "a-130",
            title: "Nav Link Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-130-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".absolute-hover-bottom",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbec5"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-130-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".absolute-hover-bottom",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbec5"],
                      },
                      heightValue: 100,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-130-n-5",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: !0,
                        id: "4581ff3c-1df2-8873-705f-0568407a029d",
                      },
                      globalSwatchId: "--heading-2",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18e6b0fd629,
          },
          "a-118": {
            id: "a-118",
            title: "Nav Link Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-118-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".absolute-hover-bottom",
                        selectorGuids: ["e97cd2f4-48d3-3b86-014e-0aa1092bbec5"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-118-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: !0,
                        id: "4581ff3c-1df2-8873-705f-0568407a029d",
                      },
                      globalSwatchId: "--heading",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18e6b0fd629,
          },
          "a-187": {
            id: "a-187",
            title: "Scale Up",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-187-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|ffcb8d19-21d9-a686-e396-392ad6bdd9ad",
                      },
                      xValue: 0.6,
                      yValue: 0.6,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-187-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|ffcb8d19-21d9-a686-e396-392ad6bdd9ad",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-187-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 1e3,
                      easing: "inOutQuad",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|ffcb8d19-21d9-a686-e396-392ad6bdd9ad",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-187-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1e3,
                      easing: "inOutQuad",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|ffcb8d19-21d9-a686-e396-392ad6bdd9ad",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1945ac08802,
          },
          "a-191": {
            id: "a-191",
            title: "Arc Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-191-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".circle-color",
                        selectorGuids: ["c930fe17-1a4d-a09a-f122-6db1a521d54b"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-191-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".circle-color",
                        selectorGuids: ["c930fe17-1a4d-a09a-f122-6db1a521d54b"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-191-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".circle-color",
                        selectorGuids: ["c930fe17-1a4d-a09a-f122-6db1a521d54b"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-191-n-6",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|9ca7cc37-629a-2fb3-cec7-932e8fd4be5a",
                      },
                      globalSwatchId: "--heading",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-191-n-5",
                    actionTypeId: "STYLE_BORDER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arc-icon-block",
                        selectorGuids: ["c930fe17-1a4d-a09a-f122-6db1a521d548"],
                      },
                      globalSwatchId: "--white",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1926dbc6365,
          },
          "a-192": {
            id: "a-192",
            title: "Arc Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-192-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".circle-color",
                        selectorGuids: ["c930fe17-1a4d-a09a-f122-6db1a521d54b"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-192-n-4",
                    actionTypeId: "STYLE_BORDER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arc-icon-block",
                        selectorGuids: ["c930fe17-1a4d-a09a-f122-6db1a521d548"],
                      },
                      globalSwatchId: "--border",
                      rValue: 65,
                      bValue: 65,
                      gValue: 65,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-192-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|9ca7cc37-629a-2fb3-cec7-932e8fd4be5a",
                      },
                      globalSwatchId: "--heading-2",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1926dbc6365,
          },
          "a-193": {
            id: "a-193",
            title: "Rotate Loop",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-193-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 1e4,
                      target: {
                        useEventTarget: !0,
                        id: "670f7de6dec5c0c82ae618dd|38f1705d-a313-04c4-3752-411e88d982e4",
                      },
                      zValue: 360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-193-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: "670f7de6dec5c0c82ae618dd|38f1705d-a313-04c4-3752-411e88d982e4",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18d167b7267,
          },
          "a-194": {
            id: "a-194",
            title: "Hamburger Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-194-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._5px-hover-style",
                        selectorGuids: ["0e630cfd-2ac8-9fac-0853-f65ef061e5ad"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-194-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._5px-hover-style",
                        selectorGuids: ["0e630cfd-2ac8-9fac-0853-f65ef061e5ad"],
                      },
                      xValue: -5,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-194-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._5px-hover-style._1",
                        selectorGuids: [
                          "0e630cfd-2ac8-9fac-0853-f65ef061e5ad",
                          "0e630cfd-2ac8-9fac-0853-f65ef061e5b4",
                        ],
                      },
                      xValue: 22,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-194-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._5px-hover-style._2",
                        selectorGuids: [
                          "0e630cfd-2ac8-9fac-0853-f65ef061e5ad",
                          "0e630cfd-2ac8-9fac-0853-f65ef061e5b6",
                        ],
                      },
                      xValue: 22,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-194-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 900,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._5px-hover-style._3",
                        selectorGuids: [
                          "0e630cfd-2ac8-9fac-0853-f65ef061e5ad",
                          "0e630cfd-2ac8-9fac-0853-f65ef061e5b2",
                        ],
                      },
                      xValue: 25,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1920f15df5d,
          },
          "a-195": {
            id: "a-195",
            title: "Hamburger Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-195-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._5px-hover-style._3",
                        selectorGuids: [
                          "0e630cfd-2ac8-9fac-0853-f65ef061e5ad",
                          "0e630cfd-2ac8-9fac-0853-f65ef061e5b2",
                        ],
                      },
                      xValue: -5,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-195-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._5px-hover-style._2",
                        selectorGuids: [
                          "0e630cfd-2ac8-9fac-0853-f65ef061e5ad",
                          "0e630cfd-2ac8-9fac-0853-f65ef061e5b6",
                        ],
                      },
                      xValue: -5,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-195-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._5px-hover-style._1",
                        selectorGuids: [
                          "0e630cfd-2ac8-9fac-0853-f65ef061e5ad",
                          "0e630cfd-2ac8-9fac-0853-f65ef061e5b4",
                        ],
                      },
                      xValue: -5,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1920f15df5d,
          },
          "a-40": {
            id: "a-40",
            title: "Cursor Circle Move",
            continuousParameterGroups: [
              {
                id: "a-40-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-40-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".cursor-circle",
                            selectorGuids: [
                              "e97cd2f4-48d3-3b86-014e-0aa1092bbe51",
                            ],
                          },
                          xValue: -50,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-40-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".cursor-circle",
                            selectorGuids: [
                              "e97cd2f4-48d3-3b86-014e-0aa1092bbe51",
                            ],
                          },
                          xValue: 50,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-40-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-40-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".cursor-circle",
                            selectorGuids: [
                              "e97cd2f4-48d3-3b86-014e-0aa1092bbe51",
                            ],
                          },
                          yValue: -50,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-40-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".cursor-circle",
                            selectorGuids: [
                              "e97cd2f4-48d3-3b86-014e-0aa1092bbe51",
                            ],
                          },
                          yValue: 50,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1920b1f3ecd,
          },
          "a-182": {
            id: "a-182",
            title: "Counter Animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-182-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".counter-number-wrapper",
                        selectorGuids: ["30285e58-ff3e-b65d-9fc9-d20af2ac67ea"],
                      },
                      yValue: -1e3,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-182-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".counter-number-wrapper-reverse",
                        selectorGuids: ["30285e58-ff3e-b65d-9fc9-d20af2ac67e0"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-182-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.784, 0.325, 0.222, 0.98],
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".counter-number-wrapper",
                        selectorGuids: ["30285e58-ff3e-b65d-9fc9-d20af2ac67ea"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-182-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.784, 0.325, 0.222, 0.98],
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".counter-number-wrapper-reverse",
                        selectorGuids: ["30285e58-ff3e-b65d-9fc9-d20af2ac67e0"],
                      },
                      yValue: -1e3,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18e7e38e919,
          },
          "a-156": {
            id: "a-156",
            title: "Slide From Right",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-156-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "678de14f2f97a222033b30b0|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      xValue: 50,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-156-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "678de14f2f97a222033b30b0|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-156-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 700,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "678de14f2f97a222033b30b0|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-156-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 700,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "678de14f2f97a222033b30b0|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1921523fa80,
          },
          "a-197": {
            id: "a-197",
            title: "Slide From Left",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-197-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "678de14f2f97a222033b30b0|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      xValue: -50,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-197-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "678de14f2f97a222033b30b0|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-197-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "678de14f2f97a222033b30b0|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-197-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "678de14f2f97a222033b30b0|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1921523fa80,
          },
          "a-198": {
            id: "a-198",
            title: "Slide From Up",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-198-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      yValue: -50,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-198-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-198-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-198-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1921523fa80,
          },
          "a-63": {
            id: "a-63",
            title: "Slide From Bottom 0.5S",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-63-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      yValue: 50,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-63-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-63-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-63-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "67d1a26598ed21d474e1dc96|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1921523fa80,
          },
          "a-184": {
            id: "a-184",
            title: "Image Scale Down 0.5s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-184-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6769a691d690a8acc66b4f4c|582f4864-d02a-8a04-6518-88fbe48d3de6",
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-184-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 500,
                      easing: "inOutQuad",
                      duration: 2e3,
                      target: {
                        useEventTarget: !0,
                        id: "6769a691d690a8acc66b4f4c|582f4864-d02a-8a04-6518-88fbe48d3de6",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x192106aea0f,
          },
          "a-199": {
            id: "a-199",
            title: "Portfolio Card Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-199-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".portfolio-info-card",
                        selectorGuids: ["9313d617-5b5d-3930-8076-eaeb4a9f551a"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-199-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".black-overlay",
                        selectorGuids: ["9313d617-5b5d-3930-8076-eaeb4a9f5519"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-199-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".portfolio-info-card",
                        selectorGuids: ["9313d617-5b5d-3930-8076-eaeb4a9f551a"],
                      },
                      xValue: 0.8,
                      yValue: 0.8,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-199-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".portfolio-info-card",
                        selectorGuids: ["9313d617-5b5d-3930-8076-eaeb4a9f551a"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-199-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".portfolio-thumbnail",
                        selectorGuids: ["9313d617-5b5d-3930-8076-eaeb4a9f5518"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-199-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".black-overlay",
                        selectorGuids: ["9313d617-5b5d-3930-8076-eaeb4a9f5519"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-199-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".portfolio-info-card",
                        selectorGuids: ["9313d617-5b5d-3930-8076-eaeb4a9f551a"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1958ac14454,
          },
          "a-200": {
            id: "a-200",
            title: "Portfolio Card Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-200-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".portfolio-info-card",
                        selectorGuids: ["9313d617-5b5d-3930-8076-eaeb4a9f551a"],
                      },
                      xValue: 0.8,
                      yValue: 0.8,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-200-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".portfolio-thumbnail",
                        selectorGuids: ["9313d617-5b5d-3930-8076-eaeb4a9f5518"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-200-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".black-overlay",
                        selectorGuids: ["9313d617-5b5d-3930-8076-eaeb4a9f5519"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-200-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".portfolio-info-card",
                        selectorGuids: ["9313d617-5b5d-3930-8076-eaeb4a9f551a"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1958ac14454,
          },
          "a-201": {
            id: "a-201",
            title: "Award Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-201-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".award-thumbnail-absolute",
                        selectorGuids: ["30242450-fbaf-0520-9594-736946420cca"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-201-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".award-thumbnail-absolute",
                        selectorGuids: ["30242450-fbaf-0520-9594-736946420cca"],
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-201-n-19",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".award-logo",
                        selectorGuids: ["166f09f8-d19a-006f-482d-c50d4e9b6906"],
                      },
                      filters: [
                        {
                          type: "invert",
                          filterId: "32e9",
                          value: 100,
                          unit: "%",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-201-n-18",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._30px-text",
                        selectorGuids: ["6b70b0c4-53ee-41df-7823-f511091986fd"],
                      },
                      globalSwatchId: "--heading-2",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-201-n-10",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._24px-text-white-500",
                        selectorGuids: ["c25fbcf2-18e2-76d8-4381-db0c0eea06e5"],
                      },
                      globalSwatchId: "--heading-2",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-201-n-12",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".absolute-hover-center",
                        selectorGuids: ["f068248f-a96d-037b-08bd-d656a11986cf"],
                      },
                      heightValue: 100,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-201-n-14",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".award-thumbnail-absolute",
                        selectorGuids: ["30242450-fbaf-0520-9594-736946420cca"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-201-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".award-thumbnail-absolute",
                        selectorGuids: ["30242450-fbaf-0520-9594-736946420cca"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-201-n-17",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-block",
                        selectorGuids: ["ebafd743-4578-07c3-50dc-7a53582a2d89"],
                      },
                      globalSwatchId: "--heading-2",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-201-n-20",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".initial-image",
                        selectorGuids: ["86258a8a-5b56-7e3d-c259-267b0eec3894"],
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-201-n-21",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".initial-image",
                        selectorGuids: ["86258a8a-5b56-7e3d-c259-267b0eec3894"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1926cd9c033,
          },
          "a-202": {
            id: "a-202",
            title: "Award Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-202-n-4",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".award-logo",
                        selectorGuids: ["166f09f8-d19a-006f-482d-c50d4e9b6906"],
                      },
                      filters: [
                        {
                          type: "invert",
                          filterId: "32e9",
                          value: 0,
                          unit: "%",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-202-n-5",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._30px-text",
                        selectorGuids: ["6b70b0c4-53ee-41df-7823-f511091986fd"],
                      },
                      globalSwatchId: "--heading",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-202-n-7",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._24px-text-white-500",
                        selectorGuids: ["c25fbcf2-18e2-76d8-4381-db0c0eea06e5"],
                      },
                      globalSwatchId: "--heading",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-202-n-8",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".absolute-hover-center",
                        selectorGuids: ["f068248f-a96d-037b-08bd-d656a11986cf"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-202-n-9",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".award-thumbnail-absolute",
                        selectorGuids: ["30242450-fbaf-0520-9594-736946420cca"],
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-202-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".award-thumbnail-absolute",
                        selectorGuids: ["30242450-fbaf-0520-9594-736946420cca"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-202-n-11",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-block",
                        selectorGuids: ["ebafd743-4578-07c3-50dc-7a53582a2d89"],
                      },
                      globalSwatchId: "--heading",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-202-n-12",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".initial-image",
                        selectorGuids: ["86258a8a-5b56-7e3d-c259-267b0eec3894"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-202-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".initial-image",
                        selectorGuids: ["86258a8a-5b56-7e3d-c259-267b0eec3894"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1926cd9c033,
          },
          "a-203": {
            id: "a-203",
            title: "Blog Hover In 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-203-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blog-thumbnail-300px",
                        selectorGuids: ["2294bfb7-398f-4ba3-e80f-565156745aaf"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-203-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blog-hover-divider",
                        selectorGuids: ["2294bfb7-398f-4ba3-e80f-565156745aa7"],
                      },
                      widthValue: 100,
                      heightValue: 100,
                      widthUnit: "%",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-203-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blog-category",
                        selectorGuids: ["2294bfb7-398f-4ba3-e80f-565156745ab4"],
                      },
                      globalSwatchId: "--primary",
                      rValue: 192,
                      bValue: 72,
                      gValue: 247,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-203-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blog-thumbnail-300px",
                        selectorGuids: ["2294bfb7-398f-4ba3-e80f-565156745aaf"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1913d672eb6,
          },
          "a-204": {
            id: "a-204",
            title: "Blog Hover Out 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-204-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blog-hover-divider",
                        selectorGuids: ["2294bfb7-398f-4ba3-e80f-565156745aa7"],
                      },
                      widthValue: 0,
                      heightValue: 100,
                      widthUnit: "%",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-204-n-2",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blog-category",
                        selectorGuids: ["2294bfb7-398f-4ba3-e80f-565156745ab4"],
                      },
                      globalSwatchId: "--heading",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-204-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blog-thumbnail-300px",
                        selectorGuids: ["2294bfb7-398f-4ba3-e80f-565156745aaf"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1913d672eb6,
          },
          "a-207": {
            id: "a-207",
            title: "Slide From Left 0.5s",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-207-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6746e0effd914c6da9cfab6b|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      xValue: -50,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-207-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6746e0effd914c6da9cfab6b|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-207-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "6746e0effd914c6da9cfab6b|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-207-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "6746e0effd914c6da9cfab6b|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1921523fa80,
          },
          "a-208": {
            id: "a-208",
            title: "Counter Animation 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-208-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: -1e3,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-208-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-208-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.784, 0.325, 0.222, 0.98],
                      duration: 2e3,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-208-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.784, 0.325, 0.222, 0.98],
                      duration: 2e3,
                      target: {},
                      yValue: -1e3,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18e7e38e919,
          },
          "a-210": {
            id: "a-210",
            title: "Slide From Right 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-210-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6746e0effd914c6da9cfab6b|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      xValue: 50,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-210-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6746e0effd914c6da9cfab6b|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-210-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1e3,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "6746e0effd914c6da9cfab6b|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-210-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1e3,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "6746e0effd914c6da9cfab6b|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1921523fa80,
          },
          "a-211": {
            id: "a-211",
            title: "Techs Loop",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-211-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 2e4,
                      target: {
                        useEventTarget: !0,
                        id: "67d1b6502ecb16b08d294839|7ad6642a-fe88-a82a-1486-ae75a6ce5b30",
                      },
                      zValue: 360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-211-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 2e4,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tech-logo",
                        selectorGuids: ["cdfd973e-4c64-7031-8d03-a975b1f2b146"],
                      },
                      zValue: -360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-211-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 2e4,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".circle-image",
                        selectorGuids: ["cdfd973e-4c64-7031-8d03-a975b1f2b145"],
                      },
                      zValue: -360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-211-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: "67d1b6502ecb16b08d294839|7ad6642a-fe88-a82a-1486-ae75a6ce5b30",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-211-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".circle-image",
                        selectorGuids: ["cdfd973e-4c64-7031-8d03-a975b1f2b145"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-211-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tech-logo",
                        selectorGuids: ["cdfd973e-4c64-7031-8d03-a975b1f2b146"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1949e2b0c1c,
          },
          "a-212": {
            id: "a-212",
            title: "Title Divider Animation 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-212-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-212-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 2e3,
                      target: {},
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-212-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 2e3,
                      target: {},
                      xValue: 100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-212-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18f0061d176,
          },
          "a-213": {
            id: "a-213",
            title: "Contact Card With Image Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-213-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".absolute-full-image",
                        selectorGuids: ["b1cf50e6-c48a-594f-e210-f6b8120adc65"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-213-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".absolute-full-image",
                        selectorGuids: ["b1cf50e6-c48a-594f-e210-f6b8120adc65"],
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-213-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".absolute-full-image",
                        selectorGuids: ["b1cf50e6-c48a-594f-e210-f6b8120adc65"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-213-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".absolute-full-image-active",
                        selectorGuids: ["d5508adb-c72e-6cc3-e7bc-e2a610fadf85"],
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-213-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".absolute-full-image-active",
                        selectorGuids: ["d5508adb-c72e-6cc3-e7bc-e2a610fadf85"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-213-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".absolute-full-image",
                        selectorGuids: ["b1cf50e6-c48a-594f-e210-f6b8120adc65"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1927d348829,
          },
          "a-214": {
            id: "a-214",
            title: "Contact Card With Image Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-214-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".absolute-full-image",
                        selectorGuids: ["b1cf50e6-c48a-594f-e210-f6b8120adc65"],
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-214-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".absolute-full-image-active",
                        selectorGuids: ["d5508adb-c72e-6cc3-e7bc-e2a610fadf85"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-214-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".absolute-full-image-active",
                        selectorGuids: ["d5508adb-c72e-6cc3-e7bc-e2a610fadf85"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-214-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".absolute-full-image",
                        selectorGuids: ["b1cf50e6-c48a-594f-e210-f6b8120adc65"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1927d348829,
          },
          "a-218": {
            id: "a-218",
            title: "Slide From Bottom 0.5S 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-218-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "66f00efc0ba3b86a13792a52|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      yValue: 70,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-218-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "66f00efc0ba3b86a13792a52|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-218-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "66f00efc0ba3b86a13792a52|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-218-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "66f00efc0ba3b86a13792a52|28c67447-94d1-f92d-0c7b-2825d0a20c6e",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1921523fa80,
          },
          "a-221": {
            id: "a-221",
            title: "Heading Show Style",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-221-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".absolute-style-text",
                        selectorGuids: ["b1cf50e6-c48a-594f-e210-f6b8120adc5c"],
                      },
                      xValue: -50,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-221-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".absolute-style-text",
                        selectorGuids: ["b1cf50e6-c48a-594f-e210-f6b8120adc5c"],
                      },
                      value: "block",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-221-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "inOutQuad",
                      duration: 2500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".absolute-style-text",
                        selectorGuids: ["b1cf50e6-c48a-594f-e210-f6b8120adc5c"],
                      },
                      xValue: 50,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-221-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".absolute-style-text",
                        selectorGuids: ["b1cf50e6-c48a-594f-e210-f6b8120adc5c"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x190740f38d3,
          },
          "a-222": {
            id: "a-222",
            title: "About Tab Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-222-n",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._30px-text-2",
                        selectorGuids: ["5c67076a-882f-dc9c-6cc3-34f843802e63"],
                      },
                      globalSwatchId: "--primary",
                      rValue: 192,
                      bValue: 72,
                      gValue: 247,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-222-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      globalSwatchId: "--primary",
                      rValue: 192,
                      bValue: 72,
                      gValue: 247,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1926858f811,
          },
          "a-223": {
            id: "a-223",
            title: "About Tab Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-223-n",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._30px-text-2",
                        selectorGuids: ["5c67076a-882f-dc9c-6cc3-34f843802e63"],
                      },
                      globalSwatchId: "--heading",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-223-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      globalSwatchId:
                        "@var_variable-cf335edf-92a8-5bd7-fb06-aa072186960b",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1926858f811,
          },
          "a-224": {
            id: "a-224",
            title: "Service Sticky",
            continuousParameterGroups: [
              {
                id: "a-224-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-224-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "inOutQuad",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".service-sticky-card",
                            selectorGuids: [
                              "7da4fbbc-98fc-d8f8-7ee8-6f54bec3d1ce",
                            ],
                          },
                          xValue: 1.1,
                          yValue: 1.1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-224-n-9",
                        actionTypeId: "STYLE_FILTER",
                        config: {
                          delay: 0,
                          easing: "inOutQuad",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".service-sticky-card",
                            selectorGuids: [
                              "7da4fbbc-98fc-d8f8-7ee8-6f54bec3d1ce",
                            ],
                          },
                          filters: [
                            {
                              type: "blur",
                              filterId: "56ed",
                              value: 5,
                              unit: "px",
                            },
                          ],
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 35,
                    actionItems: [
                      {
                        id: "a-224-n-10",
                        actionTypeId: "STYLE_FILTER",
                        config: {
                          delay: 0,
                          easing: "inOutQuad",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".service-sticky-card",
                            selectorGuids: [
                              "7da4fbbc-98fc-d8f8-7ee8-6f54bec3d1ce",
                            ],
                          },
                          filters: [
                            {
                              type: "blur",
                              filterId: "fe65",
                              value: 0,
                              unit: "px",
                            },
                          ],
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-224-n-11",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".service-sticky-card",
                            selectorGuids: [
                              "7da4fbbc-98fc-d8f8-7ee8-6f54bec3d1ce",
                            ],
                          },
                          xValue: 0.9,
                          yValue: 0.9,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x195a97dde6a,
          },
          "a-164": {
            id: "a-164",
            title: "FAQ Initial Switch",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-164-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 300,
                      target: {
                        selector: ".tab-link-hover",
                        selectorGuids: ["29c187f8-9c04-a3d2-f924-9e64900b8c23"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x195617c2019,
          },
          "a-162": {
            id: "a-162",
            title: "FAQ 2nd Switch",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-162-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 300,
                      target: {
                        selector: ".tab-link-hover",
                        selectorGuids: ["29c187f8-9c04-a3d2-f924-9e64900b8c23"],
                      },
                      xValue: 100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x195617c2019,
          },
          "a-225": {
            id: "a-225",
            title: "Projects Dropdown Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-225-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".projects-mask",
                        selectorGuids: ["55837924-c899-a153-7497-56776a26e585"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-225-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus-sign-vertical",
                        selectorGuids: ["bdbb4d3b-3bed-1bb6-d512-8ea3a9e650b0"],
                      },
                      zValue: -90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-225-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus-sign-vertical",
                        selectorGuids: ["bdbb4d3b-3bed-1bb6-d512-8ea3a9e650b0"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-225-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".projects-mask",
                        selectorGuids: ["55837924-c899-a153-7497-56776a26e585"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x195aeffa779,
          },
          "a-226": {
            id: "a-226",
            title: "Projects Dropdown Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-226-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus-sign-vertical",
                        selectorGuids: ["bdbb4d3b-3bed-1bb6-d512-8ea3a9e650b0"],
                      },
                      zValue: -90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-226-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".projects-mask",
                        selectorGuids: ["55837924-c899-a153-7497-56776a26e585"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x195aeffa779,
          },
          "a-227": {
            id: "a-227",
            title: "Nav Arrow Hover In 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-227-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-icon-image",
                        selectorGuids: ["89adfbb3-ad9d-9873-f762-9b635dfe2e6c"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-227-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {},
                      globalSwatchId: "--primary",
                      rValue: 200,
                      bValue: 29,
                      gValue: 242,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-227-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19205fc50da,
          },
          "a-228": {
            id: "a-228",
            title: "Nav Arrow Hover Out 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-228-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navigation-icon-image",
                        selectorGuids: ["89adfbb3-ad9d-9873-f762-9b635dfe2e6c"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-228-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {},
                      globalSwatchId:
                        "@var_variable-cf335edf-92a8-5bd7-fb06-aa072186960b",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-228-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19205fc50da,
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
