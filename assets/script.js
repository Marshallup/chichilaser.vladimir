/*! lazysizes - v5.2.0-beta1 */
!(function (a, b) {
  var c = b(a, a.document);
  (a.lazySizes = c),
    "object" == typeof module && module.exports && (module.exports = c);
})("undefined" != typeof window ? window : {}, function (a, b) {
  "use strict";
  var c, d;
  if (
    ((function () {
      var b,
        c = {
          lazyClass: "lazyload",
          loadedClass: "lazyloaded",
          loadingClass: "lazyloading",
          preloadClass: "lazypreload",
          errorClass: "lazyerror",
          autosizesClass: "lazyautosizes",
          srcAttr: "data-src",
          srcsetAttr: "data-srcset",
          sizesAttr: "data-sizes",
          minSize: 40,
          customMedia: {},
          init: !0,
          expFactor: 1.5,
          hFac: 0.8,
          loadMode: 2,
          loadHidden: !0,
          ricTimeout: 0,
          throttleDelay: 125,
        };
      d = a.lazySizesConfig || a.lazysizesConfig || {};
      for (b in c) b in d || (d[b] = c[b]);
    })(),
      !b || !b.getElementsByClassName)
  )
    return { init: function () { }, cfg: d, noSupport: !0 };
  var e = b.documentElement,
    f = a.Date,
    g = a.HTMLPictureElement,
    h = "addEventListener",
    i = "getAttribute",
    j = a[h],
    k = a.setTimeout,
    l = a.requestAnimationFrame || k,
    m = a.requestIdleCallback,
    n = /^picture$/i,
    o = ["load", "error", "lazyincluded", "_lazyloaded"],
    p = {},
    q = Array.prototype.forEach,
    r = function (a, b) {
      return (
        p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")),
        p[b].test(a[i]("class") || "") && p[b]
      );
    },
    s = function (a, b) {
      r(a, b) ||
        a.setAttribute("class", (a[i]("class") || "").trim() + " " + b);
    },
    t = function (a, b) {
      var c;
      (c = r(a, b)) &&
        a.setAttribute("class", (a[i]("class") || "").replace(c, " "));
    },
    u = function (a, b, c) {
      var d = c ? h : "removeEventListener";
      c && u(a, b),
        o.forEach(function (c) {
          a[d](c, b);
        });
    },
    v = function (a, d, e, f, g) {
      var h = b.createEvent("Event");
      return (
        e || (e = {}),
        (e.instance = c),
        h.initEvent(d, !f, !g),
        (h.detail = e),
        a.dispatchEvent(h),
        h
      );
    },
    w = function (b, c) {
      var e;
      !g && (e = a.picturefill || d.pf)
        ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src),
          e({ reevaluate: !0, elements: [b] }))
        : c && c.src && (b.src = c.src);
    },
    x = function (a, b) {
      return (getComputedStyle(a, null) || {})[b];
    },
    y = function (a, b, c) {
      for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;)
        (c = b.offsetWidth), (b = b.parentNode);
      return c;
    },
    z = (function () {
      var a,
        c,
        d = [],
        e = [],
        f = d,
        g = function () {
          var b = f;
          for (f = d.length ? e : d, a = !0, c = !1; b.length;) b.shift()();
          a = !1;
        },
        h = function (d, e) {
          a && !e
            ? d.apply(this, arguments)
            : (f.push(d), c || ((c = !0), (b.hidden ? k : l)(g)));
        };
      return (h._lsFlush = g), h;
    })(),
    A = function (a, b) {
      return b
        ? function () {
          z(a);
        }
        : function () {
          var b = this,
            c = arguments;
          z(function () {
            a.apply(b, c);
          });
        };
    },
    B = function (a) {
      var b,
        c = 0,
        e = d.throttleDelay,
        g = d.ricTimeout,
        h = function () {
          (b = !1), (c = f.now()), a();
        },
        i =
          m && g > 49
            ? function () {
              m(h, { timeout: g }), g !== d.ricTimeout && (g = d.ricTimeout);
            }
            : A(function () {
              k(h);
            }, !0);
      return function (a) {
        var d;
        (a = !0 === a) && (g = 33),
          b ||
          ((b = !0),
            (d = e - (f.now() - c)),
            d < 0 && (d = 0),
            a || d < 9 ? i() : k(i, d));
      };
    },
    C = function (a) {
      var b,
        c,
        d = 99,
        e = function () {
          (b = null), a();
        },
        g = function () {
          var a = f.now() - c;
          a < d ? k(g, d - a) : (m || e)(e);
        };
      return function () {
        (c = f.now()), b || (b = k(g, d));
      };
    },
    D = (function () {
      var g,
        m,
        o,
        p,
        y,
        D,
        F,
        G,
        H,
        I,
        J,
        K,
        L = /^img$/i,
        M = /^iframe$/i,
        N = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent),
        O = 0,
        P = 0,
        Q = 0,
        R = -1,
        S = function (a) {
          Q--, (!a || Q < 0 || !a.target) && (Q = 0);
        },
        T = function (a) {
          return (
            null == K && (K = "hidden" == x(b.body, "visibility")),
            K ||
            !(
              "hidden" == x(a.parentNode, "visibility") &&
              "hidden" == x(a, "visibility")
            )
          );
        },
        U = function (a, c) {
          var d,
            f = a,
            g = T(a);
          for (
            G -= c, J += c, H -= c, I += c;
            g && (f = f.offsetParent) && f != b.body && f != e;

          )
            (g = (x(f, "opacity") || 1) > 0) &&
              "visible" != x(f, "overflow") &&
              ((d = f.getBoundingClientRect()),
                (g =
                  I > d.left &&
                  H < d.right &&
                  J > d.top - 1 &&
                  G < d.bottom + 1));
          return g;
        },
        V = function () {
          var a,
            f,
            h,
            j,
            k,
            l,
            n,
            o,
            q,
            r,
            s,
            t,
            u = c.elements;
          if ((p = d.loadMode) && Q < 8 && (a = u.length)) {
            for (f = 0, R++; f < a; f++)
              if (u[f] && !u[f]._lazyRace)
                if (!N || (c.prematureUnveil && c.prematureUnveil(u[f])))
                  ba(u[f]);
                else if (
                  (((o = u[f][i]("data-expand")) && (l = 1 * o)) || (l = P),
                    r ||
                    ((r =
                      !d.expand || d.expand < 1
                        ? e.clientHeight > 500 && e.clientWidth > 500
                          ? 500
                          : 370
                        : d.expand),
                      (c._defEx = r),
                      (s = r * d.expFactor),
                      (t = d.hFac),
                      (K = null),
                      P < s && Q < 1 && R > 2 && p > 2 && !b.hidden
                        ? ((P = s), (R = 0))
                        : (P = p > 1 && R > 1 && Q < 6 ? r : O)),
                    q !== l &&
                    ((D = innerWidth + l * t),
                      (F = innerHeight + l),
                      (n = -1 * l),
                      (q = l)),
                    (h = u[f].getBoundingClientRect()),
                    (J = h.bottom) >= n &&
                    (G = h.top) <= F &&
                    (I = h.right) >= n * t &&
                    (H = h.left) <= D &&
                    (J || I || H || G) &&
                    (d.loadHidden || T(u[f])) &&
                    ((m && Q < 3 && !o && (p < 3 || R < 4)) || U(u[f], l)))
                ) {
                  if ((ba(u[f]), (k = !0), Q > 9)) break;
                } else
                  !k &&
                    m &&
                    !j &&
                    Q < 4 &&
                    R < 4 &&
                    p > 2 &&
                    (g[0] || d.preloadAfterLoad) &&
                    (g[0] ||
                      (!o &&
                        (J ||
                          I ||
                          H ||
                          G ||
                          "auto" != u[f][i](d.sizesAttr)))) &&
                    (j = g[0] || u[f]);
            j && !k && ba(j);
          }
        },
        W = B(V),
        X = function (a) {
          var b = a.target;
          if (b._lazyCache) return void delete b._lazyCache;
          S(a),
            s(b, d.loadedClass),
            t(b, d.loadingClass),
            u(b, Z),
            v(b, "lazyloaded");
        },
        Y = A(X),
        Z = function (a) {
          Y({ target: a.target });
        },
        $ = function (a, b) {
          try {
            a.contentWindow.location.replace(b);
          } catch (c) {
            a.src = b;
          }
        },
        _ = function (a) {
          var b,
            c = a[i](d.srcsetAttr);
          (b = d.customMedia[a[i]("data-media") || a[i]("media")]) &&
            a.setAttribute("media", b),
            c && a.setAttribute("srcset", c);
        },
        aa = A(function (a, b, c, e, f) {
          var g, h, j, l, m, p;
          (m = v(a, "lazybeforeunveil", b)).defaultPrevented ||
            (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)),
              (h = a[i](d.srcsetAttr)),
              (g = a[i](d.srcAttr)),
              f && ((j = a.parentNode), (l = j && n.test(j.nodeName || ""))),
              (p = b.firesLoad || ("src" in a && (h || g || l))),
              (m = { target: a }),
              s(a, d.loadingClass),
              p && (clearTimeout(o), (o = k(S, 2500)), u(a, Z, !0)),
              l && q.call(j.getElementsByTagName("source"), _),
              h
                ? a.setAttribute("srcset", h)
                : g && !l && (M.test(a.nodeName) ? $(a, g) : (a.src = g)),
              f && (h || l) && w(a, { src: g })),
            a._lazyRace && delete a._lazyRace,
            t(a, d.lazyClass),
            z(function () {
              var b = a.complete && a.naturalWidth > 1;
              (p && !b) ||
                (b && s(a, "ls-is-cached"),
                  X(m),
                  (a._lazyCache = !0),
                  k(function () {
                    "_lazyCache" in a && delete a._lazyCache;
                  }, 9)),
                "lazy" == a.loading && Q--;
            }, !0);
        }),
        ba = function (a) {
          if (!a._lazyRace) {
            var b,
              c = L.test(a.nodeName),
              e = c && (a[i](d.sizesAttr) || a[i]("sizes")),
              f = "auto" == e;
            ((!f && m) ||
              !c ||
              (!a[i]("src") && !a.srcset) ||
              a.complete ||
              r(a, d.errorClass) ||
              !r(a, d.lazyClass)) &&
              ((b = v(a, "lazyunveilread").detail),
                f && E.updateElem(a, !0, a.offsetWidth),
                (a._lazyRace = !0),
                Q++,
                aa(a, b, f, e, c));
          }
        },
        ca = C(function () {
          (d.loadMode = 3), W();
        }),
        da = function () {
          3 == d.loadMode && (d.loadMode = 2), ca();
        },
        ea = function () {
          if (!m) {
            if (f.now() - y < 999) return void k(ea, 999);
            (m = !0), (d.loadMode = 3), W(), j("scroll", da, !0);
          }
        };
      return {
        _: function () {
          (y = f.now()),
            (c.elements = b.getElementsByClassName(d.lazyClass)),
            (g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass)),
            j("scroll", W, !0),
            j("resize", W, !0),
            j("pageshow", function (a) {
              if (a.persisted) {
                var c = b.querySelectorAll("." + d.loadingClass);
                c.length &&
                  c.forEach &&
                  l(function () {
                    c.forEach(function (a) {
                      a.complete && ba(a);
                    });
                  });
              }
            }),
            a.MutationObserver
              ? new MutationObserver(W).observe(e, {
                childList: !0,
                subtree: !0,
                attributes: !0,
              })
              : (e[h]("DOMNodeInserted", W, !0),
                e[h]("DOMAttrModified", W, !0),
                setInterval(W, 999)),
            j("hashchange", W, !0),
            [
              "focus",
              "mouseover",
              "click",
              "load",
              "transitionend",
              "animationend",
            ].forEach(function (a) {
              b[h](a, W, !0);
            }),
            /d$|^c/.test(b.readyState)
              ? ea()
              : (j("load", ea), b[h]("DOMContentLoaded", W), k(ea, 2e4)),
            c.elements.length ? (V(), z._lsFlush()) : W();
        },
        checkElems: W,
        unveil: ba,
        _aLSL: da,
      };
    })(),
    E = (function () {
      var a,
        c = A(function (a, b, c, d) {
          var e, f, g;
          if (
            ((a._lazysizesWidth = d),
              (d += "px"),
              a.setAttribute("sizes", d),
              n.test(b.nodeName || ""))
          )
            for (
              e = b.getElementsByTagName("source"), f = 0, g = e.length;
              f < g;
              f++
            )
              e[f].setAttribute("sizes", d);
          c.detail.dataAttr || w(a, c.detail);
        }),
        e = function (a, b, d) {
          var e,
            f = a.parentNode;
          f &&
            ((d = y(a, f, d)),
              (e = v(a, "lazybeforesizes", { width: d, dataAttr: !!b })),
              e.defaultPrevented ||
              ((d = e.detail.width) &&
                d !== a._lazysizesWidth &&
                c(a, f, e, d)));
        },
        f = function () {
          var b,
            c = a.length;
          if (c) for (b = 0; b < c; b++) e(a[b]);
        },
        g = C(f);
      return {
        _: function () {
          (a = b.getElementsByClassName(d.autosizesClass)), j("resize", g);
        },
        checkElems: g,
        updateElem: e,
      };
    })(),
    F = function () {
      !F.i && b.getElementsByClassName && ((F.i = !0), E._(), D._());
    };
  return (
    k(function () {
      d.init && F();
    }),
    (c = {
      cfg: d,
      autoSizer: E,
      loader: D,
      init: F,
      uP: w,
      aC: s,
      rC: t,
      hC: r,
      fire: v,
      gW: y,
      rAF: z,
    })
  );
});
!(function (t, e, n, o) {
  "use strict";
  function i(t) {
    var e = t.currentTarget,
      o = t.data ? t.data.options : {},
      i = t.data ? t.data.items : [],
      a = n(e).attr("data-fancybox") || "",
      s = 0;
    t.preventDefault(),
      t.stopPropagation(),
      a
        ? ((i = i.length
          ? i.filter('[data-fancybox="' + a + '"]')
          : n('[data-fancybox="' + a + '"]')),
          (s = i.index(e)),
          s < 0 && (s = 0))
        : (i = [e]),
      n.fancybox.open(i, o, s);
  }
  if (n) {
    if (n.fn.fancybox) return void n.error("fancyBox already initialized");
    var a = {
      loop: !1,
      margin: [44, 0],
      gutter: 50,
      keyboard: !0,
      arrows: !0,
      infobar: !1,
      toolbar: !0,
      buttons: ["slideShow", "fullScreen", "thumbs", "close"],
      idleTime: 4,
      smallBtn: "auto",
      protect: !1,
      modal: !1,
      image: { preload: "auto" },
      ajax: { settings: { data: { fancybox: !0 } } },
      iframe: {
        tpl:
          '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
        preload: !0,
        css: {},
        attr: { scrolling: "auto" },
      },
      animationEffect: "zoom",
      animationDuration: 366,
      zoomOpacity: "auto",
      transitionEffect: "fade",
      transitionDuration: 366,
      slideClass: "",
      baseClass: "",
      baseTpl:
        '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
      spinnerTpl: '<div class="fancybox-loading"></div>',
      errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
        fullScreen:
          '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
        thumbs:
          '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
        close:
          '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',
        smallBtn:
          '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',
      },
      parentEl: "body",
      autoFocus: !0,
      backFocus: !0,
      trapFocus: !0,
      fullScreen: { autoStart: !1 },
      touch: { vertical: !0, momentum: !0 },
      hash: null,
      media: {},
      slideShow: { autoStart: !1, speed: 4e3 },
      thumbs: { autoStart: !1, hideOnClose: !0 },
      onInit: n.noop,
      beforeLoad: n.noop,
      afterLoad: n.noop,
      beforeShow: n.noop,
      afterShow: n.noop,
      beforeClose: n.noop,
      afterClose: n.noop,
      onActivate: n.noop,
      onDeactivate: n.noop,
      clickContent: function (t, e) {
        return "image" === t.type && "zoom";
      },
      clickSlide: "close",
      clickOutside: "close",
      dblclickContent: !1,
      dblclickSlide: !1,
      dblclickOutside: !1,
      mobile: {
        clickContent: function (t, e) {
          return "image" === t.type && "toggleControls";
        },
        clickSlide: function (t, e) {
          return "image" === t.type ? "toggleControls" : "close";
        },
        dblclickContent: function (t, e) {
          return "image" === t.type && "zoom";
        },
        dblclickSlide: function (t, e) {
          return "image" === t.type && "zoom";
        },
      },
      lang: "en",
      i18n: {
        en: {
          CLOSE: "Close",
          NEXT: "Next",
          PREV: "Previous",
          ERROR:
            "The requested content cannot be loaded. <br/> Please try again later.",
          PLAY_START: "Start slideshow",
          PLAY_STOP: "Pause slideshow",
          FULL_SCREEN: "Full screen",
          THUMBS: "Thumbnails",
        },
        de: {
          CLOSE: "Schliessen",
          NEXT: "Weiter",
          PREV: "Zurück",
          ERROR:
            "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
          PLAY_START: "Diaschau starten",
          PLAY_STOP: "Diaschau beenden",
          FULL_SCREEN: "Vollbild",
          THUMBS: "Vorschaubilder",
        },
      },
    },
      s = n(t),
      r = n(e),
      c = 0,
      l = function (t) {
        return t && t.hasOwnProperty && t instanceof n;
      },
      u = (function () {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function (e) {
            return t.setTimeout(e, 1e3 / 60);
          }
        );
      })(),
      d = (function () {
        var t,
          n = e.createElement("fakeelement"),
          i = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
          };
        for (t in i) if (n.style[t] !== o) return i[t];
      })(),
      f = function (t) {
        return t && t.length && t[0].offsetHeight;
      },
      h = function (t, o, i) {
        var s = this;
        (s.opts = n.extend(!0, { index: i }, a, o || {})),
          o && n.isArray(o.buttons) && (s.opts.buttons = o.buttons),
          (s.id = s.opts.id || ++c),
          (s.group = []),
          (s.currIndex = parseInt(s.opts.index, 10) || 0),
          (s.prevIndex = null),
          (s.prevPos = null),
          (s.currPos = 0),
          (s.firstRun = null),
          s.createGroup(t),
          s.group.length &&
          ((s.$lastFocus = n(e.activeElement).blur()),
            (s.slides = {}),
            s.init(t));
      };
    n.extend(h.prototype, {
      init: function () {
        var t,
          e,
          o,
          i = this,
          a = i.group[i.currIndex].opts;
        (i.scrollTop = r.scrollTop()),
          (i.scrollLeft = r.scrollLeft()),
          n.fancybox.getInstance() ||
          n.fancybox.isMobile ||
          "hidden" === n("body").css("overflow") ||
          ((t = n("body").width()),
            n("html").addClass("fancybox-enabled"),
            (t = n("body").width() - t),
            t > 1 &&
            n("head").append(
              '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' +
              t +
              "px; }</style>"
            )),
          (o = ""),
          n.each(a.buttons, function (t, e) {
            o += a.btnTpl[e] || "";
          }),
          (e = n(i.translate(i, a.baseTpl.replace("{{BUTTONS}}", o)))
            .addClass("fancybox-is-hidden")
            .attr("id", "fancybox-container-" + i.id)
            .addClass(a.baseClass)
            .data("FancyBox", i)
            .prependTo(a.parentEl)),
          (i.$refs = { container: e }),
          ["bg", "inner", "infobar", "toolbar", "stage", "caption"].forEach(
            function (t) {
              i.$refs[t] = e.find(".fancybox-" + t);
            }
          ),
          (!a.arrows || i.group.length < 2) &&
          e.find(".fancybox-navigation").remove(),
          a.infobar || i.$refs.infobar.remove(),
          a.toolbar || i.$refs.toolbar.remove(),
          i.trigger("onInit"),
          i.activate(),
          i.jumpTo(i.currIndex);
      },
      translate: function (t, e) {
        var n = t.opts.i18n[t.opts.lang];
        return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
          var i = n[e];
          return i === o ? t : i;
        });
      },
      createGroup: function (t) {
        var e = this,
          i = n.makeArray(t);
        n.each(i, function (t, i) {
          var a,
            s,
            r,
            c,
            l = {},
            u = {},
            d = [];
          n.isPlainObject(i)
            ? ((l = i), (u = i.opts || i))
            : "object" === n.type(i) && n(i).length
              ? ((a = n(i)),
                (d = a.data()),
                (u = "options" in d ? d.options : {}),
                (u = "object" === n.type(u) ? u : {}),
                (l.src = "src" in d ? d.src : u.src || a.attr("href")),
                ["width", "height", "thumb", "type", "filter"].forEach(function (
                  t
                ) {
                  t in d && (u[t] = d[t]);
                }),
                "srcset" in d && (u.image = { srcset: d.srcset }),
                (u.$orig = a),
                l.type || l.src || ((l.type = "inline"), (l.src = i)))
              : (l = { type: "html", src: i + "" }),
            (l.opts = n.extend(!0, {}, e.opts, u)),
            n.fancybox.isMobile &&
            (l.opts = n.extend(!0, {}, l.opts, l.opts.mobile)),
            (s = l.type || l.opts.type),
            (r = l.src || ""),
            !s &&
            r &&
            (r.match(
              /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
            )
              ? (s = "image")
              : r.match(/\.(pdf)((\?|#).*)?$/i)
                ? (s = "pdf")
                : "#" === r.charAt(0) && (s = "inline")),
            (l.type = s),
            (l.index = e.group.length),
            l.opts.$orig && !l.opts.$orig.length && delete l.opts.$orig,
            !l.opts.$thumb &&
            l.opts.$orig &&
            (l.opts.$thumb = l.opts.$orig.find("img:first")),
            l.opts.$thumb && !l.opts.$thumb.length && delete l.opts.$thumb,
            "function" === n.type(l.opts.caption)
              ? (l.opts.caption = l.opts.caption.apply(i, [e, l]))
              : "caption" in d && (l.opts.caption = d.caption),
            (l.opts.caption = l.opts.caption === o ? "" : l.opts.caption + ""),
            "ajax" === s &&
            ((c = r.split(/\s+/, 2)),
              c.length > 1 &&
              ((l.src = c.shift()), (l.opts.filter = c.shift()))),
            "auto" == l.opts.smallBtn &&
            (n.inArray(s, ["html", "inline", "ajax"]) > -1
              ? ((l.opts.toolbar = !1), (l.opts.smallBtn = !0))
              : (l.opts.smallBtn = !1)),
            "pdf" === s && ((l.type = "iframe"), (l.opts.iframe.preload = !1)),
            l.opts.modal &&
            (l.opts = n.extend(!0, l.opts, {
              infobar: 0,
              toolbar: 0,
              smallBtn: 0,
              keyboard: 0,
              slideShow: 0,
              fullScreen: 0,
              thumbs: 0,
              touch: 0,
              clickContent: !1,
              clickSlide: !1,
              clickOutside: !1,
              dblclickContent: !1,
              dblclickSlide: !1,
              dblclickOutside: !1,
            })),
            e.group.push(l);
        });
      },
      addEvents: function () {
        var o = this;
        o.removeEvents(),
          o.$refs.container
            .on("click.fb-close", "[data-fancybox-close]", function (t) {
              t.stopPropagation(), t.preventDefault(), o.close(t);
            })
            .on(
              "click.fb-prev touchend.fb-prev",
              "[data-fancybox-prev]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), o.previous();
              }
            )
            .on(
              "click.fb-next touchend.fb-next",
              "[data-fancybox-next]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), o.next();
              }
            ),
          s.on("orientationchange.fb resize.fb", function (t) {
            t && t.originalEvent && "resize" === t.originalEvent.type
              ? u(function () {
                o.update();
              })
              : (o.$refs.stage.hide(),
                setTimeout(function () {
                  o.$refs.stage.show(), o.update();
                }, 500));
          }),
          r.on("focusin.fb", function (t) {
            var i = n.fancybox ? n.fancybox.getInstance() : null;
            i.isClosing ||
              !i.current ||
              !i.current.opts.trapFocus ||
              n(t.target).hasClass("fancybox-container") ||
              n(t.target).is(e) ||
              (i &&
                "fixed" !== n(t.target).css("position") &&
                !i.$refs.container.has(t.target).length &&
                (t.stopPropagation(),
                  i.focus(),
                  s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft)));
          }),
          r.on("keydown.fb", function (t) {
            var e = o.current,
              i = t.keyCode || t.which;
            if (
              e &&
              e.opts.keyboard &&
              !n(t.target).is("input") &&
              !n(t.target).is("textarea")
            )
              return 8 === i || 27 === i
                ? (t.preventDefault(), void o.close(t))
                : 37 === i || 38 === i
                  ? (t.preventDefault(), void o.previous())
                  : 39 === i || 40 === i
                    ? (t.preventDefault(), void o.next())
                    : void o.trigger("afterKeydown", t, i);
          }),
          o.group[o.currIndex].opts.idleTime &&
          ((o.idleSecondsCounter = 0),
            r.on(
              "mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
              function () {
                (o.idleSecondsCounter = 0),
                  o.isIdle && o.showControls(),
                  (o.isIdle = !1);
              }
            ),
            (o.idleInterval = t.setInterval(function () {
              o.idleSecondsCounter++,
                o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime &&
                ((o.isIdle = !0),
                  (o.idleSecondsCounter = 0),
                  o.hideControls());
            }, 1e3)));
      },
      removeEvents: function () {
        var e = this;
        s.off("orientationchange.fb resize.fb"),
          r.off("focusin.fb keydown.fb .fb-idle"),
          this.$refs.container.off(".fb-close .fb-prev .fb-next"),
          e.idleInterval &&
          (t.clearInterval(e.idleInterval), (e.idleInterval = null));
      },
      previous: function (t) {
        return this.jumpTo(this.currPos - 1, t);
      },
      next: function (t) {
        return this.jumpTo(this.currPos + 1, t);
      },
      jumpTo: function (t, e, i) {
        var a,
          s,
          r,
          c,
          l,
          u,
          d,
          h = this,
          p = h.group.length;
        if (!(h.isSliding || h.isClosing || (h.isAnimating && h.firstRun))) {
          if (
            ((t = parseInt(t, 10)),
              (s = h.current ? h.current.opts.loop : h.opts.loop),
              !s && (t < 0 || t >= p))
          )
            return !1;
          if (
            ((a = h.firstRun = null === h.firstRun),
              !(p < 2 && !a && h.isSliding))
          ) {
            if (
              ((c = h.current),
                (h.prevIndex = h.currIndex),
                (h.prevPos = h.currPos),
                (r = h.createSlide(t)),
                p > 1 &&
                ((s || r.index > 0) && h.createSlide(t - 1),
                  (s || r.index < p - 1) && h.createSlide(t + 1)),
                (h.current = r),
                (h.currIndex = r.index),
                (h.currPos = r.pos),
                h.trigger("beforeShow", a),
                h.updateControls(),
                (u = n.fancybox.getTranslate(r.$slide)),
                (r.isMoved =
                  (0 !== u.left || 0 !== u.top) &&
                  !r.$slide.hasClass("fancybox-animated")),
                (r.forcedDuration = o),
                n.isNumeric(e)
                  ? (r.forcedDuration = e)
                  : (e = r.opts[a ? "animationDuration" : "transitionDuration"]),
                (e = parseInt(e, 10)),
                a)
            )
              return (
                r.opts.animationEffect &&
                e &&
                h.$refs.container.css("transition-duration", e + "ms"),
                h.$refs.container.removeClass("fancybox-is-hidden"),
                f(h.$refs.container),
                h.$refs.container.addClass("fancybox-is-open"),
                r.$slide.addClass("fancybox-slide--current"),
                h.loadSlide(r),
                void h.preload()
              );
            n.each(h.slides, function (t, e) {
              n.fancybox.stop(e.$slide);
            }),
              r.$slide
                .removeClass("fancybox-slide--next fancybox-slide--previous")
                .addClass("fancybox-slide--current"),
              r.isMoved
                ? ((l = Math.round(r.$slide.width())),
                  n.each(h.slides, function (t, o) {
                    var i = o.pos - r.pos;
                    n.fancybox.animate(
                      o.$slide,
                      { top: 0, left: i * l + i * o.opts.gutter },
                      e,
                      function () {
                        o.$slide
                          .removeAttr("style")
                          .removeClass(
                            "fancybox-slide--next fancybox-slide--previous"
                          ),
                          o.pos === h.currPos &&
                          ((r.isMoved = !1), h.complete());
                      }
                    );
                  }))
                : h.$refs.stage.children().removeAttr("style"),
              r.isLoaded ? h.revealContent(r) : h.loadSlide(r),
              h.preload(),
              c.pos !== r.pos &&
              ((d =
                "fancybox-slide--" + (c.pos > r.pos ? "next" : "previous")),
                c.$slide.removeClass(
                  "fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"
                ),
                (c.isComplete = !1),
                e &&
                (r.isMoved || r.opts.transitionEffect) &&
                (r.isMoved
                  ? c.$slide.addClass(d)
                  : ((d =
                    "fancybox-animated " +
                    d +
                    " fancybox-fx-" +
                    r.opts.transitionEffect),
                    n.fancybox.animate(c.$slide, d, e, function () {
                      c.$slide.removeClass(d).removeAttr("style");
                    }))));
          }
        }
      },
      createSlide: function (t) {
        var e,
          o,
          i = this;
        return (
          (o = t % i.group.length),
          (o = o < 0 ? i.group.length + o : o),
          !i.slides[t] &&
          i.group[o] &&
          ((e = n('<div class="fancybox-slide"></div>').appendTo(
            i.$refs.stage
          )),
            (i.slides[t] = n.extend(!0, {}, i.group[o], {
              pos: t,
              $slide: e,
              isLoaded: !1,
            })),
            i.updateSlide(i.slides[t])),
          i.slides[t]
        );
      },
      scaleToActual: function (t, e, i) {
        var a,
          s,
          r,
          c,
          l,
          u = this,
          d = u.current,
          f = d.$content,
          h = parseInt(d.$slide.width(), 10),
          p = parseInt(d.$slide.height(), 10),
          g = d.width,
          b = d.height;
        "image" != d.type ||
          d.hasError ||
          !f ||
          u.isAnimating ||
          (n.fancybox.stop(f),
            (u.isAnimating = !0),
            (t = t === o ? 0.5 * h : t),
            (e = e === o ? 0.5 * p : e),
            (a = n.fancybox.getTranslate(f)),
            (c = g / a.width),
            (l = b / a.height),
            (s = 0.5 * h - 0.5 * g),
            (r = 0.5 * p - 0.5 * b),
            g > h &&
            ((s = a.left * c - (t * c - t)),
              s > 0 && (s = 0),
              s < h - g && (s = h - g)),
            b > p &&
            ((r = a.top * l - (e * l - e)),
              r > 0 && (r = 0),
              r < p - b && (r = p - b)),
            u.updateCursor(g, b),
            n.fancybox.animate(
              f,
              { top: r, left: s, scaleX: c, scaleY: l },
              i || 330,
              function () {
                u.isAnimating = !1;
              }
            ),
            u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop());
      },
      scaleToFit: function (t) {
        var e,
          o = this,
          i = o.current,
          a = i.$content;
        "image" != i.type ||
          i.hasError ||
          !a ||
          o.isAnimating ||
          (n.fancybox.stop(a),
            (o.isAnimating = !0),
            (e = o.getFitPos(i)),
            o.updateCursor(e.width, e.height),
            n.fancybox.animate(
              a,
              {
                top: e.top,
                left: e.left,
                scaleX: e.width / a.width(),
                scaleY: e.height / a.height(),
              },
              t || 330,
              function () {
                o.isAnimating = !1;
              }
            ));
      },
      getFitPos: function (t) {
        var e,
          o,
          i,
          a,
          r,
          c = this,
          l = t.$content,
          u = t.width,
          d = t.height,
          f = t.opts.margin;
        return (
          !(!l || !l.length || (!u && !d)) &&
          ("number" === n.type(f) && (f = [f, f]),
            2 == f.length && (f = [f[0], f[1], f[0], f[1]]),
            s.width() < 800 && (f = [0, 0, 0, 0]),
            (e = parseInt(c.$refs.stage.width(), 10) - (f[1] + f[3])),
            (o = parseInt(c.$refs.stage.height(), 10) - (f[0] + f[2])),
            (i = Math.min(1, e / u, o / d)),
            (a = Math.floor(i * u)),
            (r = Math.floor(i * d)),
          {
            top: Math.floor(0.5 * (o - r)) + f[0],
            left: Math.floor(0.5 * (e - a)) + f[3],
            width: a,
            height: r,
          })
        );
      },
      update: function () {
        var t = this;
        n.each(t.slides, function (e, n) {
          t.updateSlide(n);
        });
      },
      updateSlide: function (t) {
        var e = this,
          o = t.$content;
        o &&
          (t.width || t.height) &&
          (n.fancybox.stop(o),
            n.fancybox.setTranslate(o, e.getFitPos(t)),
            t.pos === e.currPos && e.updateCursor()),
          t.$slide.trigger("refresh"),
          e.trigger("onUpdate", t);
      },
      updateCursor: function (t, e) {
        var n,
          i = this,
          a = i.$refs.container.removeClass(
            "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut"
          );
        i.current &&
          !i.isClosing &&
          (i.isZoomable()
            ? (a.addClass("fancybox-is-zoomable"),
              (n =
                t !== o && e !== o
                  ? t < i.current.width && e < i.current.height
                  : i.isScaledDown()),
              n
                ? a.addClass("fancybox-can-zoomIn")
                : i.current.opts.touch
                  ? a.addClass("fancybox-can-drag")
                  : a.addClass("fancybox-can-zoomOut"))
            : i.current.opts.touch && a.addClass("fancybox-can-drag"));
      },
      isZoomable: function () {
        var t,
          e = this,
          o = e.current;
        if (o && !e.isClosing)
          return !!(
            "image" === o.type &&
            o.isLoaded &&
            !o.hasError &&
            ("zoom" === o.opts.clickContent ||
              (n.isFunction(o.opts.clickContent) &&
                "zoom" === o.opts.clickContent(o))) &&
            ((t = e.getFitPos(o)), o.width > t.width || o.height > t.height)
          );
      },
      isScaledDown: function () {
        var t = this,
          e = t.current,
          o = e.$content,
          i = !1;
        return (
          o &&
          ((i = n.fancybox.getTranslate(o)),
            (i = i.width < e.width || i.height < e.height)),
          i
        );
      },
      canPan: function () {
        var t = this,
          e = t.current,
          n = e.$content,
          o = !1;
        return (
          n &&
          ((o = t.getFitPos(e)),
            (o =
              Math.abs(n.width() - o.width) > 1 ||
              Math.abs(n.height() - o.height) > 1)),
          o
        );
      },
      loadSlide: function (t) {
        var e,
          o,
          i,
          a = this;
        if (!t.isLoading && !t.isLoaded) {
          switch (
          ((t.isLoading = !0),
            a.trigger("beforeLoad", t),
            (e = t.type),
            (o = t.$slide),
            o
              .off("refresh")
              .trigger("onReset")
              .addClass("fancybox-slide--" + (e || "unknown"))
              .addClass(t.opts.slideClass),
            e)
          ) {
            case "image":
              a.setImage(t);
              break;
            case "iframe":
              a.setIframe(t);
              break;
            case "html":
              a.setContent(t, t.src || t.content);
              break;
            case "inline":
              n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
              break;
            case "ajax":
              a.showLoading(t),
                (i = n.ajax(
                  n.extend({}, t.opts.ajax.settings, {
                    url: t.src,
                    success: function (e, n) {
                      "success" === n && a.setContent(t, e);
                    },
                    error: function (e, n) {
                      e && "abort" !== n && a.setError(t);
                    },
                  })
                )),
                o.one("onReset", function () {
                  i.abort();
                });
              break;
            default:
              a.setError(t);
          }
          return !0;
        }
      },
      setImage: function (e) {
        var o,
          i,
          a,
          s,
          r = this,
          c = e.opts.image.srcset;
        if (c) {
          (a = t.devicePixelRatio || 1),
            (s = t.innerWidth * a),
            (i = c.split(",").map(function (t) {
              var e = {};
              return (
                t
                  .trim()
                  .split(/\s+/)
                  .forEach(function (t, n) {
                    var o = parseInt(t.substring(0, t.length - 1), 10);
                    return 0 === n
                      ? (e.url = t)
                      : void (
                        o && ((e.value = o), (e.postfix = t[t.length - 1]))
                      );
                  }),
                e
              );
            })),
            i.sort(function (t, e) {
              return t.value - e.value;
            });
          for (var l = 0; l < i.length; l++) {
            var u = i[l];
            if (
              ("w" === u.postfix && u.value >= s) ||
              ("x" === u.postfix && u.value >= a)
            ) {
              o = u;
              break;
            }
          }
          !o && i.length && (o = i[i.length - 1]),
            o &&
            ((e.src = o.url),
              e.width &&
              e.height &&
              "w" == o.postfix &&
              ((e.height = (e.width / e.height) * o.value),
                (e.width = o.value)));
        }
        (e.$content = n('<div class="fancybox-image-wrap"></div>')
          .addClass("fancybox-is-hidden")
          .appendTo(e.$slide)),
          e.opts.preload !== !1 &&
            e.opts.width &&
            e.opts.height &&
            (e.opts.thumb || e.opts.$thumb)
            ? ((e.width = e.opts.width),
              (e.height = e.opts.height),
              (e.$ghost = n("<img />")
                .one("error", function () {
                  n(this).remove(), (e.$ghost = null), r.setBigImage(e);
                })
                .one("load", function () {
                  r.afterLoad(e), r.setBigImage(e);
                })
                .addClass("fancybox-image")
                .appendTo(e.$content)
                .attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))))
            : r.setBigImage(e);
      },
      setBigImage: function (t) {
        var e = this,
          o = n("<img />");
        (t.$image = o
          .one("error", function () {
            e.setError(t);
          })
          .one("load", function () {
            clearTimeout(t.timouts),
              (t.timouts = null),
              e.isClosing ||
              ((t.width = this.naturalWidth),
                (t.height = this.naturalHeight),
                t.opts.image.srcset &&
                o.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset),
                e.hideLoading(t),
                t.$ghost
                  ? (t.timouts = setTimeout(function () {
                    (t.timouts = null), t.$ghost.hide();
                  }, Math.min(300, Math.max(1e3, t.height / 1600))))
                  : e.afterLoad(t));
          })
          .addClass("fancybox-image")
          .attr("src", t.src)
          .appendTo(t.$content)),
          o[0].complete
            ? o.trigger("load")
            : o[0].error
              ? o.trigger("error")
              : (t.timouts = setTimeout(function () {
                o[0].complete || t.hasError || e.showLoading(t);
              }, 100));
      },
      setIframe: function (t) {
        var e,
          i = this,
          a = t.opts.iframe,
          s = t.$slide;
        (t.$content = n(
          '<div class="fancybox-content' +
          (a.preload ? " fancybox-is-hidden" : "") +
          '"></div>'
        )
          .css(a.css)
          .appendTo(s)),
          (e = n(a.tpl.replace(/\{rnd\}/g, new Date().getTime()))
            .attr(a.attr)
            .appendTo(t.$content)),
          a.preload
            ? (i.showLoading(t),
              e.on("load.fb error.fb", function (e) {
                (this.isReady = 1), t.$slide.trigger("refresh"), i.afterLoad(t);
              }),
              s.on("refresh.fb", function () {
                var n,
                  i,
                  s,
                  r,
                  c,
                  l = t.$content;
                if (1 === e[0].isReady) {
                  try {
                    (n = e.contents()), (i = n.find("body"));
                  } catch (t) { }
                  i &&
                    i.length &&
                    (a.css.width === o || a.css.height === o) &&
                    ((s =
                      e[0].contentWindow.document.documentElement.scrollWidth),
                      (r = Math.ceil(i.outerWidth(!0) + (l.width() - s))),
                      (c = Math.ceil(i.outerHeight(!0))),
                      l.css({
                        width:
                          a.css.width === o
                            ? r + (l.outerWidth() - l.innerWidth())
                            : a.css.width,
                        height:
                          a.css.height === o
                            ? c + (l.outerHeight() - l.innerHeight())
                            : a.css.height,
                      })),
                    l.removeClass("fancybox-is-hidden");
                }
              }))
            : this.afterLoad(t),
          e.attr("src", t.src),
          t.opts.smallBtn === !0 &&
          t.$content.prepend(i.translate(t, t.opts.btnTpl.smallBtn)),
          s.one("onReset", function () {
            try {
              n(this).find("iframe").hide().attr("src", "//about:blank");
            } catch (t) { }
            n(this).empty(), (t.isLoaded = !1);
          });
      },
      setContent: function (t, e) {
        var o = this;
        o.isClosing ||
          (o.hideLoading(t),
            t.$slide.empty(),
            l(e) && e.parent().length
              ? (e.parent(".fancybox-slide--inline").trigger("onReset"),
                (t.$placeholder = n("<div></div>").hide().insertAfter(e)),
                e.css("display", "inline-block"))
              : t.hasError ||
              ("string" === n.type(e) &&
                ((e = n("<div>").append(n.trim(e)).contents()),
                  3 === e[0].nodeType && (e = n("<div>").html(e))),
                t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
            t.$slide.one("onReset", function () {
              t.$placeholder &&
                (t.$placeholder.after(e.hide()).remove(),
                  (t.$placeholder = null)),
                t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
                t.hasError || (n(this).empty(), (t.isLoaded = !1));
            }),
            (t.$content = n(e).appendTo(t.$slide)),
            t.opts.smallBtn &&
            !t.$smallBtn &&
            (t.$smallBtn = n(o.translate(t, t.opts.btnTpl.smallBtn)).appendTo(
              t.$content
            )),
            this.afterLoad(t));
      },
      setError: function (t) {
        (t.hasError = !0),
          t.$slide.removeClass("fancybox-slide--" + t.type),
          this.setContent(t, this.translate(t, t.opts.errorTpl));
      },
      showLoading: function (t) {
        var e = this;
        (t = t || e.current),
          t &&
          !t.$spinner &&
          (t.$spinner = n(e.opts.spinnerTpl).appendTo(t.$slide));
      },
      hideLoading: function (t) {
        var e = this;
        (t = t || e.current),
          t && t.$spinner && (t.$spinner.remove(), delete t.$spinner);
      },
      afterLoad: function (t) {
        var e = this;
        e.isClosing ||
          ((t.isLoading = !1),
            (t.isLoaded = !0),
            e.trigger("afterLoad", t),
            e.hideLoading(t),
            t.opts.protect &&
            t.$content &&
            !t.hasError &&
            (t.$content.on("contextmenu.fb", function (t) {
              return 2 == t.button && t.preventDefault(), !0;
            }),
              "image" === t.type &&
              n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
            e.revealContent(t));
      },
      revealContent: function (t) {
        var e,
          i,
          a,
          s,
          r,
          c = this,
          l = t.$slide,
          u = !1;
        return (
          (e = t.opts[c.firstRun ? "animationEffect" : "transitionEffect"]),
          (a = t.opts[c.firstRun ? "animationDuration" : "transitionDuration"]),
          (a = parseInt(t.forcedDuration === o ? a : t.forcedDuration, 10)),
          (!t.isMoved && t.pos === c.currPos && a) || (e = !1),
          "zoom" !== e ||
          (t.pos === c.currPos &&
            a &&
            "image" === t.type &&
            !t.hasError &&
            (u = c.getThumbPos(t))) ||
          (e = "fade"),
          "zoom" === e
            ? ((r = c.getFitPos(t)),
              (r.scaleX = Math.round((r.width / u.width) * 100) / 100),
              (r.scaleY = Math.round((r.height / u.height) * 100) / 100),
              delete r.width,
              delete r.height,
              (s = t.opts.zoomOpacity),
              "auto" == s &&
              (s = Math.abs(t.width / t.height - u.width / u.height) > 0.1),
              s && ((u.opacity = 0.1), (r.opacity = 1)),
              n.fancybox.setTranslate(
                t.$content.removeClass("fancybox-is-hidden"),
                u
              ),
              f(t.$content),
              void n.fancybox.animate(t.$content, r, a, function () {
                c.complete();
              }))
            : (c.updateSlide(t),
              e
                ? (n.fancybox.stop(l),
                  (i =
                    "fancybox-animated fancybox-slide--" +
                    (t.pos > c.prevPos ? "next" : "previous") +
                    " fancybox-fx-" +
                    e),
                  l
                    .removeAttr("style")
                    .removeClass(
                      "fancybox-slide--current fancybox-slide--next fancybox-slide--previous"
                    )
                    .addClass(i),
                  t.$content.removeClass("fancybox-is-hidden"),
                  f(l),
                  void n.fancybox.animate(
                    l,
                    "fancybox-slide--current",
                    a,
                    function (e) {
                      l.removeClass(i).removeAttr("style"),
                        t.pos === c.currPos && c.complete();
                    },
                    !0
                  ))
                : (f(l),
                  t.$content.removeClass("fancybox-is-hidden"),
                  void (t.pos === c.currPos && c.complete())))
        );
      },
      getThumbPos: function (o) {
        var i,
          a = this,
          s = !1,
          r = function (e) {
            for (
              var o, i = e[0], a = i.getBoundingClientRect(), s = [];
              null !== i.parentElement;

            )
              ("hidden" !== n(i.parentElement).css("overflow") &&
                "auto" !== n(i.parentElement).css("overflow")) ||
                s.push(i.parentElement.getBoundingClientRect()),
                (i = i.parentElement);
            return (
              (o = s.every(function (t) {
                var e = Math.min(a.right, t.right) - Math.max(a.left, t.left),
                  n = Math.min(a.bottom, t.bottom) - Math.max(a.top, t.top);
                return e > 0 && n > 0;
              })),
              o &&
              a.bottom > 0 &&
              a.right > 0 &&
              a.left < n(t).width() &&
              a.top < n(t).height()
            );
          },
          c = o.opts.$thumb,
          l = c ? c.offset() : 0;
        return (
          l &&
          c[0].ownerDocument === e &&
          r(c) &&
          ((i = a.$refs.stage.offset()),
            (s = {
              top: l.top - i.top + parseFloat(c.css("border-top-width") || 0),
              left:
                l.left - i.left + parseFloat(c.css("border-left-width") || 0),
              width: c.width(),
              height: c.height(),
              scaleX: 1,
              scaleY: 1,
            })),
          s
        );
      },
      complete: function () {
        var t = this,
          o = t.current,
          i = {};
        o.isMoved ||
          !o.isLoaded ||
          o.isComplete ||
          ((o.isComplete = !0),
            o.$slide.siblings().trigger("onReset"),
            f(o.$slide),
            o.$slide.addClass("fancybox-slide--complete"),
            n.each(t.slides, function (e, o) {
              o.pos >= t.currPos - 1 && o.pos <= t.currPos + 1
                ? (i[o.pos] = o)
                : o && (n.fancybox.stop(o.$slide), o.$slide.unbind().remove());
            }),
            (t.slides = i),
            t.updateCursor(),
            t.trigger("afterShow"),
            (n(e.activeElement).is("[disabled]") ||
              (o.opts.autoFocus && "image" != o.type && "iframe" !== o.type)) &&
            t.focus());
      },
      preload: function () {
        var t,
          e,
          n = this;
        n.group.length < 2 ||
          ((t = n.slides[n.currPos + 1]),
            (e = n.slides[n.currPos - 1]),
            t && "image" === t.type && n.loadSlide(t),
            e && "image" === e.type && n.loadSlide(e));
      },
      focus: function () {
        var t,
          e = this.current;
        this.isClosing ||
          ((t =
            e && e.isComplete
              ? e.$slide
                .find("button,:input,[tabindex],a")
                .filter(":not([disabled]):visible:first")
              : null),
            (t = t && t.length ? t : this.$refs.container),
            t.focus());
      },
      activate: function () {
        var t = this;
        n(".fancybox-container").each(function () {
          var e = n(this).data("FancyBox");
          e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate");
        }),
          t.current &&
          (t.$refs.container.index() > 0 &&
            t.$refs.container.prependTo(e.body),
            t.updateControls()),
          t.trigger("onActivate"),
          t.addEvents();
      },
      close: function (t, e) {
        var o,
          i,
          a,
          s,
          r,
          c,
          l = this,
          f = l.current,
          h = function () {
            l.cleanUp(t);
          };
        return (
          !l.isClosing &&
          ((l.isClosing = !0),
            l.trigger("beforeClose", t) === !1
              ? ((l.isClosing = !1),
                u(function () {
                  l.update();
                }),
                !1)
              : (l.removeEvents(),
                f.timouts && clearTimeout(f.timouts),
                (a = f.$content),
                (o = f.opts.animationEffect),
                (i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0),
                f.$slide
                  .off(d)
                  .removeClass(
                    "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                  ),
                f.$slide.siblings().trigger("onReset").remove(),
                i &&
                l.$refs.container
                  .removeClass("fancybox-is-open")
                  .addClass("fancybox-is-closing"),
                l.hideLoading(f),
                l.hideControls(),
                l.updateCursor(),
                "zoom" !== o ||
                (t !== !0 &&
                  a &&
                  i &&
                  "image" === f.type &&
                  !f.hasError &&
                  (c = l.getThumbPos(f))) ||
                (o = "fade"),
                "zoom" === o
                  ? (n.fancybox.stop(a),
                    (r = n.fancybox.getTranslate(a)),
                    (r.width = r.width * r.scaleX),
                    (r.height = r.height * r.scaleY),
                    (s = f.opts.zoomOpacity),
                    "auto" == s &&
                    (s =
                      Math.abs(f.width / f.height - c.width / c.height) > 0.1),
                    s && (c.opacity = 0),
                    (r.scaleX = r.width / c.width),
                    (r.scaleY = r.height / c.height),
                    (r.width = c.width),
                    (r.height = c.height),
                    n.fancybox.setTranslate(f.$content, r),
                    n.fancybox.animate(f.$content, c, i, h),
                    !0)
                  : (o && i
                    ? t === !0
                      ? setTimeout(h, i)
                      : n.fancybox.animate(
                        f.$slide.removeClass("fancybox-slide--current"),
                        "fancybox-animated fancybox-slide--previous fancybox-fx-" +
                        o,
                        i,
                        h
                      )
                    : h(),
                    !0)))
        );
      },
      cleanUp: function (t) {
        var e,
          o = this;
        o.current.$slide.trigger("onReset"),
          o.$refs.container.empty().remove(),
          o.trigger("afterClose", t),
          o.$lastFocus && !o.current.focusBack && o.$lastFocus.focus(),
          (o.current = null),
          (e = n.fancybox.getInstance()),
          e
            ? e.activate()
            : (s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft),
              n("html").removeClass("fancybox-enabled"),
              n("#fancybox-style-noscroll").remove());
      },
      trigger: function (t, e) {
        var o,
          i = Array.prototype.slice.call(arguments, 1),
          a = this,
          s = e && e.opts ? e : a.current;
        return (
          s ? i.unshift(s) : (s = a),
          i.unshift(a),
          n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
          o === !1
            ? o
            : void ("afterClose" === t
              ? r.trigger(t + ".fb", i)
              : a.$refs.container.trigger(t + ".fb", i))
        );
      },
      updateControls: function (t) {
        var e = this,
          o = e.current,
          i = o.index,
          a = o.opts,
          s = a.caption,
          r = e.$refs.caption;
        o.$slide.trigger("refresh"),
          (e.$caption = s && s.length ? r.html(s) : null),
          e.isHiddenControls || e.showControls(),
          n("[data-fancybox-count]").html(e.group.length),
          n("[data-fancybox-index]").html(i + 1),
          n("[data-fancybox-prev]").prop("disabled", !a.loop && i <= 0),
          n("[data-fancybox-next]").prop(
            "disabled",
            !a.loop && i >= e.group.length - 1
          );
      },
      hideControls: function () {
        (this.isHiddenControls = !0),
          this.$refs.container.removeClass(
            "fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav"
          );
      },
      showControls: function () {
        var t = this,
          e = t.current ? t.current.opts : t.opts,
          n = t.$refs.container;
        (t.isHiddenControls = !1),
          (t.idleSecondsCounter = 0),
          n
            .toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))
            .toggleClass(
              "fancybox-show-infobar",
              !!(e.infobar && t.group.length > 1)
            )
            .toggleClass(
              "fancybox-show-nav",
              !!(e.arrows && t.group.length > 1)
            )
            .toggleClass("fancybox-is-modal", !!e.modal),
          t.$caption
            ? n.addClass("fancybox-show-caption ")
            : n.removeClass("fancybox-show-caption");
      },
      toggleControls: function () {
        this.isHiddenControls ? this.showControls() : this.hideControls();
      },
    }),
      (n.fancybox = {
        version: "3.1.20",
        defaults: a,
        getInstance: function (t) {
          var e = n(
            '.fancybox-container:not(".fancybox-is-closing"):first'
          ).data("FancyBox"),
            o = Array.prototype.slice.call(arguments, 1);
          return (
            e instanceof h &&
            ("string" === n.type(t)
              ? e[t].apply(e, o)
              : "function" === n.type(t) && t.apply(e, o),
              e)
          );
        },
        open: function (t, e, n) {
          return new h(t, e, n);
        },
        close: function (t) {
          var e = this.getInstance();
          e && (e.close(), t === !0 && this.close());
        },
        destroy: function () {
          this.close(!0), r.off("click.fb-start");
        },
        isMobile:
          e.createTouch !== o &&
          /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
            navigator.userAgent
          ),
        use3d: (function () {
          var n = e.createElement("div");
          return (
            t.getComputedStyle &&
            t.getComputedStyle(n).getPropertyValue("transform") &&
            !(e.documentMode && e.documentMode < 11)
          );
        })(),
        getTranslate: function (t) {
          var e;
          if (!t || !t.length) return !1;
          if (
            ((e = t.eq(0).css("transform")),
              e && e.indexOf("matrix") !== -1
                ? ((e = e.split("(")[1]),
                  (e = e.split(")")[0]),
                  (e = e.split(",")))
                : (e = []),
              e.length)
          )
            (e =
              e.length > 10
                ? [e[13], e[12], e[0], e[5]]
                : [e[5], e[4], e[0], e[3]]),
              (e = e.map(parseFloat));
          else {
            e = [0, 0, 1, 1];
            var n = /\.*translate\((.*)px,(.*)px\)/i,
              o = n.exec(t.eq(0).attr("style"));
            o && ((e[0] = parseFloat(o[2])), (e[1] = parseFloat(o[1])));
          }
          return {
            top: e[0],
            left: e[1],
            scaleX: e[2],
            scaleY: e[3],
            opacity: parseFloat(t.css("opacity")),
            width: t.width(),
            height: t.height(),
          };
        },
        setTranslate: function (t, e) {
          var n = "",
            i = {};
          if (t && e)
            return (
              (e.left === o && e.top === o) ||
              ((n =
                (e.left === o ? t.position().left : e.left) +
                "px, " +
                (e.top === o ? t.position().top : e.top) +
                "px"),
                (n = this.use3d
                  ? "translate3d(" + n + ", 0px)"
                  : "translate(" + n + ")")),
              e.scaleX !== o &&
              e.scaleY !== o &&
              (n =
                (n.length ? n + " " : "") +
                "scale(" +
                e.scaleX +
                ", " +
                e.scaleY +
                ")"),
              n.length && (i.transform = n),
              e.opacity !== o && (i.opacity = e.opacity),
              e.width !== o && (i.width = e.width),
              e.height !== o && (i.height = e.height),
              t.css(i)
            );
        },
        animate: function (t, e, i, a, s) {
          var r = d || "transitionend";
          n.isFunction(i) && ((a = i), (i = null)),
            n.isPlainObject(e) || t.removeAttr("style"),
            t.on(r, function (i) {
              (!i ||
                !i.originalEvent ||
                (t.is(i.originalEvent.target) &&
                  "z-index" != i.originalEvent.propertyName)) &&
                (t.off(r),
                  n.isPlainObject(e)
                    ? e.scaleX !== o &&
                    e.scaleY !== o &&
                    (t.css("transition-duration", "0ms"),
                      (e.width = t.width() * e.scaleX),
                      (e.height = t.height() * e.scaleY),
                      (e.scaleX = 1),
                      (e.scaleY = 1),
                      n.fancybox.setTranslate(t, e))
                    : s !== !0 && t.removeClass(e),
                  n.isFunction(a) && a(i));
            }),
            n.isNumeric(i) && t.css("transition-duration", i + "ms"),
            n.isPlainObject(e) ? n.fancybox.setTranslate(t, e) : t.addClass(e),
            t.data(
              "timer",
              setTimeout(function () {
                t.trigger("transitionend");
              }, i + 16)
            );
        },
        stop: function (t) {
          clearTimeout(t.data("timer")), t.off(d);
        },
      }),
      (n.fn.fancybox = function (t) {
        var e;
        return (
          (t = t || {}),
          (e = t.selector || !1),
          e
            ? n("body")
              .off("click.fb-start", e)
              .on("click.fb-start", e, { items: n(e), options: t }, i)
            : this.off("click.fb-start").on(
              "click.fb-start",
              { items: this, options: t },
              i
            ),
          this
        );
      }),
      r.on("click.fb-start", "[data-fancybox]", i);
  }
})(window, document, window.jQuery),
  (function (t) {
    "use strict";
    var e = function (e, n, o) {
      if (e)
        return (
          (o = o || ""),
          "object" === t.type(o) && (o = t.param(o, !0)),
          t.each(n, function (t, n) {
            e = e.replace("$" + t, n || "");
          }),
          o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
          e
        );
    },
      n = {
        youtube: {
          matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1,
          },
          paramPlace: 8,
          type: "iframe",
          url: "//www.youtube.com/embed/$4",
          thumb: "//img.youtube.com/vi/$4/hqdefault.jpg",
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
            api: 1,
          },
          paramPlace: 3,
          type: "iframe",
          url: "//player.vimeo.com/video/$2",
        },
        metacafe: {
          matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
          type: "iframe",
          url: "//www.metacafe.com/embed/$1/?ap=1",
        },
        dailymotion: {
          matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
          params: { additionalInfos: 0, autoStart: 1 },
          type: "iframe",
          url: "//www.dailymotion.com/embed/video/$1",
        },
        vine: {
          matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
          type: "iframe",
          url: "//vine.co/v/$1/embed/simple",
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l",
        },
        google_maps: {
          matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/?ll=" +
              (t[9]
                ? t[9] +
                "&z=" +
                Math.floor(t[10]) +
                (t[12] ? t[12].replace(/^\//, "&") : "")
                : t[12]) +
              "&output=" +
              (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            );
          },
        },
      };
    t(document).on("onInit.fb", function (o, i) {
      t.each(i.group, function (o, i) {
        var a,
          s,
          r,
          c,
          l,
          u,
          d,
          f = i.src || "",
          h = !1;
        i.type ||
          ((a = t.extend(!0, {}, n, i.opts.media)),
            t.each(a, function (n, o) {
              if (((r = f.match(o.matcher)), (u = {}), (d = n), r)) {
                if (((h = o.type), o.paramPlace && r[o.paramPlace])) {
                  (l = r[o.paramPlace]),
                    "?" == l[0] && (l = l.substring(1)),
                    (l = l.split("&"));
                  for (var a = 0; a < l.length; ++a) {
                    var p = l[a].split("=", 2);
                    2 == p.length &&
                      (u[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " ")));
                  }
                }
                return (
                  (c = t.extend(!0, {}, o.params, i.opts[n], u)),
                  (f =
                    "function" === t.type(o.url)
                      ? o.url.call(this, r, c, i)
                      : e(o.url, r, c)),
                  (s =
                    "function" === t.type(o.thumb)
                      ? o.thumb.call(this, r, c, i)
                      : e(o.thumb, r)),
                  "vimeo" === d && (f = f.replace("&%23", "#")),
                  !1
                );
              }
            }),
            h
              ? ((i.src = f),
                (i.type = h),
                i.opts.thumb ||
                (i.opts.$thumb && i.opts.$thumb.length) ||
                (i.opts.thumb = s),
                "iframe" === h &&
                (t.extend(!0, i.opts, {
                  iframe: { preload: !1, attr: { scrolling: "no" } },
                }),
                  (i.contentProvider = d),
                  (i.opts.slideClass +=
                    " fancybox-slide--" +
                    ("google_maps" == d ? "map" : "video"))))
              : (i.type = "image"));
      });
    });
  })(window.jQuery),
  (function (t, e, n) {
    "use strict";
    var o = (function () {
      return (
        t.requestAnimationFrame ||
        t.webkitRequestAnimationFrame ||
        t.mozRequestAnimationFrame ||
        t.oRequestAnimationFrame ||
        function (e) {
          return t.setTimeout(e, 1e3 / 60);
        }
      );
    })(),
      i = (function () {
        return (
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function (e) {
            t.clearTimeout(e);
          }
        );
      })(),
      a = function (e) {
        var n = [];
        (e = e.originalEvent || e || t.e),
          (e =
            e.touches && e.touches.length
              ? e.touches
              : e.changedTouches && e.changedTouches.length
                ? e.changedTouches
                : [e]);
        for (var o in e)
          e[o].pageX
            ? n.push({ x: e[o].pageX, y: e[o].pageY })
            : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });
        return n;
      },
      s = function (t, e, n) {
        return e && t
          ? "x" === n
            ? t.x - e.x
            : "y" === n
              ? t.y - e.y
              : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          : 0;
      },
      r = function (t) {
        if (
          t.is("a,button,input,select,textarea") ||
          n.isFunction(t.get(0).onclick)
        )
          return !0;
        for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
          if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
        return !1;
      },
      c = function (e) {
        var n = t.getComputedStyle(e)["overflow-y"],
          o = t.getComputedStyle(e)["overflow-x"],
          i =
            ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
          a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
        return i || a;
      },
      l = function (t) {
        for (var e = !1; ;) {
          if ((e = c(t.get(0)))) break;
          if (
            ((t = t.parent()),
              !t.length || t.hasClass("fancybox-stage") || t.is("body"))
          )
            break;
        }
        return e;
      },
      u = function (t) {
        var e = this;
        (e.instance = t),
          (e.$bg = t.$refs.bg),
          (e.$stage = t.$refs.stage),
          (e.$container = t.$refs.container),
          e.destroy(),
          e.$container.on(
            "touchstart.fb.touch mousedown.fb.touch",
            n.proxy(e, "ontouchstart")
          );
      };
    (u.prototype.destroy = function () {
      this.$container.off(".fb.touch");
    }),
      (u.prototype.ontouchstart = function (o) {
        var i = this,
          c = n(o.target),
          u = i.instance,
          d = u.current,
          f = d.$content,
          h = "touchstart" == o.type;
        if (
          (h && i.$container.off("mousedown.fb.touch"),
            !d || i.instance.isAnimating || i.instance.isClosing)
        )
          return o.stopPropagation(), void o.preventDefault();
        if (
          (!o.originalEvent || 2 != o.originalEvent.button) &&
          c.length &&
          !r(c) &&
          !r(c.parent()) &&
          !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left) &&
          ((i.startPoints = a(o)),
            i.startPoints && !(i.startPoints.length > 1 && u.isSliding))
        ) {
          if (
            ((i.$target = c),
              (i.$content = f),
              (i.canTap = !0),
              n(e).off(".fb.touch"),
              n(e).on(
                h
                  ? "touchend.fb.touch touchcancel.fb.touch"
                  : "mouseup.fb.touch mouseleave.fb.touch",
                n.proxy(i, "ontouchend")
              ),
              n(e).on(
                h ? "touchmove.fb.touch" : "mousemove.fb.touch",
                n.proxy(i, "ontouchmove")
              ),
              o.stopPropagation(),
              (!u.current.opts.touch && !u.canPan()) ||
              (!c.is(i.$stage) && !i.$stage.find(c).length))
          )
            return void (c.is("img") && o.preventDefault());
          (n.fancybox.isMobile && (l(i.$target) || l(i.$target.parent()))) ||
            o.preventDefault(),
            (i.canvasWidth = Math.round(d.$slide[0].clientWidth)),
            (i.canvasHeight = Math.round(d.$slide[0].clientHeight)),
            (i.startTime = new Date().getTime()),
            (i.distanceX = i.distanceY = i.distance = 0),
            (i.isPanning = !1),
            (i.isSwiping = !1),
            (i.isZooming = !1),
            (i.sliderStartPos = i.sliderLastPos || { top: 0, left: 0 }),
            (i.contentStartPos = n.fancybox.getTranslate(i.$content)),
            (i.contentLastPos = null),
            1 !== i.startPoints.length ||
            i.isZooming ||
            ((i.canTap = !u.isSliding),
              "image" === d.type &&
                (i.contentStartPos.width > i.canvasWidth + 1 ||
                  i.contentStartPos.height > i.canvasHeight + 1)
                ? (n.fancybox.stop(i.$content),
                  i.$content.css("transition-duration", "0ms"),
                  (i.isPanning = !0))
                : (i.isSwiping = !0),
              i.$container.addClass("fancybox-controls--isGrabbing")),
            2 !== i.startPoints.length ||
            u.isAnimating ||
            d.hasError ||
            "image" !== d.type ||
            (!d.isLoaded && !d.$ghost) ||
            ((i.isZooming = !0),
              (i.isSwiping = !1),
              (i.isPanning = !1),
              n.fancybox.stop(i.$content),
              i.$content.css("transition-duration", "0ms"),
              (i.centerPointStartX =
                0.5 * (i.startPoints[0].x + i.startPoints[1].x) -
                n(t).scrollLeft()),
              (i.centerPointStartY =
                0.5 * (i.startPoints[0].y + i.startPoints[1].y) -
                n(t).scrollTop()),
              (i.percentageOfImageAtPinchPointX =
                (i.centerPointStartX - i.contentStartPos.left) /
                i.contentStartPos.width),
              (i.percentageOfImageAtPinchPointY =
                (i.centerPointStartY - i.contentStartPos.top) /
                i.contentStartPos.height),
              (i.startDistanceBetweenFingers = s(
                i.startPoints[0],
                i.startPoints[1]
              )));
        }
      }),
      (u.prototype.ontouchmove = function (t) {
        var e = this;
        if (
          ((e.newPoints = a(t)),
            n.fancybox.isMobile && (l(e.$target) || l(e.$target.parent())))
        )
          return t.stopPropagation(), void (e.canTap = !1);
        if (
          (e.instance.current.opts.touch || e.instance.canPan()) &&
          e.newPoints &&
          e.newPoints.length &&
          ((e.distanceX = s(e.newPoints[0], e.startPoints[0], "x")),
            (e.distanceY = s(e.newPoints[0], e.startPoints[0], "y")),
            (e.distance = s(e.newPoints[0], e.startPoints[0])),
            e.distance > 0)
        ) {
          if (!e.$target.is(e.$stage) && !e.$stage.find(e.$target).length)
            return;
          t.stopPropagation(),
            t.preventDefault(),
            e.isSwiping
              ? e.onSwipe()
              : e.isPanning
                ? e.onPan()
                : e.isZooming && e.onZoom();
        }
      }),
      (u.prototype.onSwipe = function () {
        var e,
          a = this,
          s = a.isSwiping,
          r = a.sliderStartPos.left || 0;
        s === !0
          ? Math.abs(a.distance) > 10 &&
          ((a.canTap = !1),
            a.instance.group.length < 2 && a.instance.opts.touch.vertical
              ? (a.isSwiping = "y")
              : a.instance.isSliding ||
                a.instance.opts.touch.vertical === !1 ||
                ("auto" === a.instance.opts.touch.vertical &&
                  n(t).width() > 800)
                ? (a.isSwiping = "x")
                : ((e = Math.abs(
                  (180 * Math.atan2(a.distanceY, a.distanceX)) / Math.PI
                )),
                  (a.isSwiping = e > 45 && e < 135 ? "y" : "x")),
            (a.instance.isSliding = a.isSwiping),
            (a.startPoints = a.newPoints),
            n.each(a.instance.slides, function (t, e) {
              n.fancybox.stop(e.$slide),
                e.$slide.css("transition-duration", "0ms"),
                (e.inTransition = !1),
                e.pos === a.instance.current.pos &&
                (a.sliderStartPos.left = n.fancybox.getTranslate(
                  e.$slide
                ).left);
            }),
            a.instance.SlideShow &&
            a.instance.SlideShow.isActive &&
            a.instance.SlideShow.stop())
          : ("x" == s &&
            (a.distanceX > 0 &&
              (a.instance.group.length < 2 ||
                (0 === a.instance.current.index &&
                  !a.instance.current.opts.loop))
              ? (r += Math.pow(a.distanceX, 0.8))
              : a.distanceX < 0 &&
                (a.instance.group.length < 2 ||
                  (a.instance.current.index === a.instance.group.length - 1 &&
                    !a.instance.current.opts.loop))
                ? (r -= Math.pow(-a.distanceX, 0.8))
                : (r += a.distanceX)),
            (a.sliderLastPos = {
              top: "x" == s ? 0 : a.sliderStartPos.top + a.distanceY,
              left: r,
            }),
            a.requestId && (i(a.requestId), (a.requestId = null)),
            (a.requestId = o(function () {
              a.sliderLastPos &&
                (n.each(a.instance.slides, function (t, e) {
                  var o = e.pos - a.instance.currPos;
                  n.fancybox.setTranslate(e.$slide, {
                    top: a.sliderLastPos.top,
                    left:
                      a.sliderLastPos.left +
                      o * a.canvasWidth +
                      o * e.opts.gutter,
                  });
                }),
                  a.$container.addClass("fancybox-is-sliding"));
            })));
      }),
      (u.prototype.onPan = function () {
        var t,
          e,
          a,
          s = this;
        (s.canTap = !1),
          (t =
            s.contentStartPos.width > s.canvasWidth
              ? s.contentStartPos.left + s.distanceX
              : s.contentStartPos.left),
          (e = s.contentStartPos.top + s.distanceY),
          (a = s.limitMovement(
            t,
            e,
            s.contentStartPos.width,
            s.contentStartPos.height
          )),
          (a.scaleX = s.contentStartPos.scaleX),
          (a.scaleY = s.contentStartPos.scaleY),
          (s.contentLastPos = a),
          s.requestId && (i(s.requestId), (s.requestId = null)),
          (s.requestId = o(function () {
            n.fancybox.setTranslate(s.$content, s.contentLastPos);
          }));
      }),
      (u.prototype.limitMovement = function (t, e, n, o) {
        var i,
          a,
          s,
          r,
          c = this,
          l = c.canvasWidth,
          u = c.canvasHeight,
          d = c.contentStartPos.left,
          f = c.contentStartPos.top,
          h = c.distanceX,
          p = c.distanceY;
        return (
          (i = Math.max(0, 0.5 * l - 0.5 * n)),
          (a = Math.max(0, 0.5 * u - 0.5 * o)),
          (s = Math.min(l - n, 0.5 * l - 0.5 * n)),
          (r = Math.min(u - o, 0.5 * u - 0.5 * o)),
          n > l &&
          (h > 0 && t > i && (t = i - 1 + Math.pow(-i + d + h, 0.8) || 0),
            h < 0 && t < s && (t = s + 1 - Math.pow(s - d - h, 0.8) || 0)),
          o > u &&
          (p > 0 && e > a && (e = a - 1 + Math.pow(-a + f + p, 0.8) || 0),
            p < 0 && e < r && (e = r + 1 - Math.pow(r - f - p, 0.8) || 0)),
          { top: e, left: t }
        );
      }),
      (u.prototype.limitPosition = function (t, e, n, o) {
        var i = this,
          a = i.canvasWidth,
          s = i.canvasHeight;
        return (
          n > a
            ? ((t = t > 0 ? 0 : t), (t = t < a - n ? a - n : t))
            : (t = Math.max(0, a / 2 - n / 2)),
          o > s
            ? ((e = e > 0 ? 0 : e), (e = e < s - o ? s - o : e))
            : (e = Math.max(0, s / 2 - o / 2)),
          { top: e, left: t }
        );
      }),
      (u.prototype.onZoom = function () {
        var e = this,
          a = e.contentStartPos.width,
          r = e.contentStartPos.height,
          c = e.contentStartPos.left,
          l = e.contentStartPos.top,
          u = s(e.newPoints[0], e.newPoints[1]),
          d = u / e.startDistanceBetweenFingers,
          f = Math.floor(a * d),
          h = Math.floor(r * d),
          p = (a - f) * e.percentageOfImageAtPinchPointX,
          g = (r - h) * e.percentageOfImageAtPinchPointY,
          b = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
          m = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
          y = b - e.centerPointStartX,
          v = m - e.centerPointStartY,
          x = c + (p + y),
          w = l + (g + v),
          $ = {
            top: w,
            left: x,
            scaleX: e.contentStartPos.scaleX * d,
            scaleY: e.contentStartPos.scaleY * d,
          };
        (e.canTap = !1),
          (e.newWidth = f),
          (e.newHeight = h),
          (e.contentLastPos = $),
          e.requestId && (i(e.requestId), (e.requestId = null)),
          (e.requestId = o(function () {
            n.fancybox.setTranslate(e.$content, e.contentLastPos);
          }));
      }),
      (u.prototype.ontouchend = function (t) {
        var o = this,
          s = Math.max(new Date().getTime() - o.startTime, 1),
          r = o.isSwiping,
          c = o.isPanning,
          l = o.isZooming;
        return (
          (o.endPoints = a(t)),
          o.$container.removeClass("fancybox-controls--isGrabbing"),
          n(e).off(".fb.touch"),
          o.requestId && (i(o.requestId), (o.requestId = null)),
          (o.isSwiping = !1),
          (o.isPanning = !1),
          (o.isZooming = !1),
          o.canTap
            ? o.onTap(t)
            : ((o.speed = 366),
              (o.velocityX = (o.distanceX / s) * 0.5),
              (o.velocityY = (o.distanceY / s) * 0.5),
              (o.speedX = Math.max(
                0.5 * o.speed,
                Math.min(1.5 * o.speed, (1 / Math.abs(o.velocityX)) * o.speed)
              )),
              void (c ? o.endPanning() : l ? o.endZooming() : o.endSwiping(r)))
        );
      }),
      (u.prototype.endSwiping = function (t) {
        var e = this,
          o = !1;
        (e.instance.isSliding = !1),
          (e.sliderLastPos = null),
          "y" == t && Math.abs(e.distanceY) > 50
            ? (n.fancybox.animate(
              e.instance.current.$slide,
              {
                top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
                opacity: 0,
              },
              150
            ),
              (o = e.instance.close(!0, 300)))
            : "x" == t && e.distanceX > 50 && e.instance.group.length > 1
              ? (o = e.instance.previous(e.speedX))
              : "x" == t &&
              e.distanceX < -50 &&
              e.instance.group.length > 1 &&
              (o = e.instance.next(e.speedX)),
          o !== !1 ||
          ("x" != t && "y" != t) ||
          e.instance.jumpTo(e.instance.current.index, 150),
          e.$container.removeClass("fancybox-is-sliding");
      }),
      (u.prototype.endPanning = function () {
        var t,
          e,
          o,
          i = this;
        i.contentLastPos &&
          (i.instance.current.opts.touch.momentum === !1
            ? ((t = i.contentLastPos.left), (e = i.contentLastPos.top))
            : ((t = i.contentLastPos.left + i.velocityX * i.speed),
              (e = i.contentLastPos.top + i.velocityY * i.speed)),
            (o = i.limitPosition(
              t,
              e,
              i.contentStartPos.width,
              i.contentStartPos.height
            )),
            (o.width = i.contentStartPos.width),
            (o.height = i.contentStartPos.height),
            n.fancybox.animate(i.$content, o, 330));
      }),
      (u.prototype.endZooming = function () {
        var t,
          e,
          o,
          i,
          a = this,
          s = a.instance.current,
          r = a.newWidth,
          c = a.newHeight;
        a.contentLastPos &&
          ((t = a.contentLastPos.left),
            (e = a.contentLastPos.top),
            (i = {
              top: e,
              left: t,
              width: r,
              height: c,
              scaleX: 1,
              scaleY: 1,
            }),
            n.fancybox.setTranslate(a.$content, i),
            r < a.canvasWidth && c < a.canvasHeight
              ? a.instance.scaleToFit(150)
              : r > s.width || c > s.height
                ? a.instance.scaleToActual(
                  a.centerPointStartX,
                  a.centerPointStartY,
                  150
                )
                : ((o = a.limitPosition(t, e, r, c)),
                  n.fancybox.setTranslate(
                    a.content,
                    n.fancybox.getTranslate(a.$content)
                  ),
                  n.fancybox.animate(a.$content, o, 150)));
      }),
      (u.prototype.onTap = function (t) {
        var e,
          o = this,
          i = n(t.target),
          s = o.instance,
          r = s.current,
          c = (t && a(t)) || o.startPoints,
          l = c[0] ? c[0].x - o.$stage.offset().left : 0,
          u = c[0] ? c[0].y - o.$stage.offset().top : 0,
          d = function (e) {
            var i = r.opts[e];
            if ((n.isFunction(i) && (i = i.apply(s, [r, t])), i))
              switch (i) {
                case "close":
                  s.close(o.startEvent);
                  break;
                case "toggleControls":
                  s.toggleControls(!0);
                  break;
                case "next":
                  s.next();
                  break;
                case "nextOrClose":
                  s.group.length > 1 ? s.next() : s.close(o.startEvent);
                  break;
                case "zoom":
                  "image" == r.type &&
                    (r.isLoaded || r.$ghost) &&
                    (s.canPan()
                      ? s.scaleToFit()
                      : s.isScaledDown()
                        ? s.scaleToActual(l, u)
                        : s.group.length < 2 && s.close(o.startEvent));
              }
          };
        if (
          !(
            (t.originalEvent && 2 == t.originalEvent.button) ||
            s.isSliding ||
            l > i[0].clientWidth + i.offset().left
          )
        ) {
          if (
            i.is(
              ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
            )
          )
            e = "Outside";
          else if (i.is(".fancybox-slide")) e = "Slide";
          else {
            if (!s.current.$content || !s.current.$content.has(t.target).length)
              return;
            e = "Content";
          }
          if (o.tapped) {
            if (
              (clearTimeout(o.tapped),
                (o.tapped = null),
                Math.abs(l - o.tapX) > 50 ||
                Math.abs(u - o.tapY) > 50 ||
                s.isSliding)
            )
              return this;
            d("dblclick" + e);
          } else
            (o.tapX = l),
              (o.tapY = u),
              r.opts["dblclick" + e] &&
                r.opts["dblclick" + e] !== r.opts["click" + e]
                ? (o.tapped = setTimeout(function () {
                  (o.tapped = null), d("click" + e);
                }, 300))
                : d("click" + e);
          return this;
        }
      }),
      n(e).on("onActivate.fb", function (t, e) {
        e && !e.Guestures && (e.Guestures = new u(e));
      }),
      n(e).on("beforeClose.fb", function (t, e) {
        e && e.Guestures && e.Guestures.destroy();
      });
  })(window, document, window.jQuery),
  (function (t, e) {
    "use strict";
    var n = function (t) {
      (this.instance = t), this.init();
    };
    e.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      speed: 3e3,
      init: function () {
        var t = this;
        (t.$button = t.instance.$refs.toolbar
          .find("[data-fancybox-play]")
          .on("click", function () {
            t.toggle();
          })),
          (t.instance.group.length < 2 ||
            !t.instance.group[t.instance.currIndex].opts.slideShow) &&
          t.$button.hide();
      },
      set: function () {
        var t = this;
        t.instance &&
          t.instance.current &&
          (t.instance.current.opts.loop ||
            t.instance.currIndex < t.instance.group.length - 1)
          ? (t.timer = setTimeout(function () {
            t.instance.next();
          }, t.instance.current.opts.slideShow.speed || t.speed))
          : (t.stop(),
            (t.instance.idleSecondsCounter = 0),
            t.instance.showControls());
      },
      clear: function () {
        var t = this;
        clearTimeout(t.timer), (t.timer = null);
      },
      start: function () {
        var t = this,
          e = t.instance.current;
        t.instance &&
          e &&
          (e.opts.loop || e.index < t.instance.group.length - 1) &&
          ((t.isActive = !0),
            t.$button
              .attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP)
              .addClass("fancybox-button--pause"),
            e.isComplete && t.set());
      },
      stop: function () {
        var t = this,
          e = t.instance.current;
        t.clear(),
          t.$button
            .attr("title", e.opts.i18n[e.opts.lang].PLAY_START)
            .removeClass("fancybox-button--pause"),
          (t.isActive = !1);
      },
      toggle: function () {
        var t = this;
        t.isActive ? t.stop() : t.start();
      },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e));
        },
        "beforeShow.fb": function (t, e, n, o) {
          var i = e && e.SlideShow;
          o
            ? i && n.opts.slideShow.autoStart && i.start()
            : i && i.isActive && i.clear();
        },
        "afterShow.fb": function (t, e, n) {
          var o = e && e.SlideShow;
          o && o.isActive && o.set();
        },
        "afterKeydown.fb": function (n, o, i, a, s) {
          var r = o && o.SlideShow;
          !r ||
            !i.opts.slideShow ||
            (80 !== s && 32 !== s) ||
            e(t.activeElement).is("button,a,input") ||
            (a.preventDefault(), r.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function (t, e) {
          var n = e && e.SlideShow;
          n && n.stop();
        },
      }),
      e(t).on("visibilitychange", function () {
        var n = e.fancybox.getInstance(),
          o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set());
      });
  })(document, window.jQuery),
  (function (t, e) {
    "use strict";
    var n = (function () {
      var e,
        n,
        o,
        i = [
          [
            "requestFullscreen",
            "exitFullscreen",
            "fullscreenElement",
            "fullscreenEnabled",
            "fullscreenchange",
            "fullscreenerror",
          ],
          [
            "webkitRequestFullscreen",
            "webkitExitFullscreen",
            "webkitFullscreenElement",
            "webkitFullscreenEnabled",
            "webkitfullscreenchange",
            "webkitfullscreenerror",
          ],
          [
            "webkitRequestFullScreen",
            "webkitCancelFullScreen",
            "webkitCurrentFullScreenElement",
            "webkitCancelFullScreen",
            "webkitfullscreenchange",
            "webkitfullscreenerror",
          ],
          [
            "mozRequestFullScreen",
            "mozCancelFullScreen",
            "mozFullScreenElement",
            "mozFullScreenEnabled",
            "mozfullscreenchange",
            "mozfullscreenerror",
          ],
          [
            "msRequestFullscreen",
            "msExitFullscreen",
            "msFullscreenElement",
            "msFullscreenEnabled",
            "MSFullscreenChange",
            "MSFullscreenError",
          ],
        ],
        a = {};
      for (n = 0; n < i.length; n++)
        if (((e = i[n]), e && e[1] in t)) {
          for (o = 0; o < e.length; o++) a[i[0][o]] = e[o];
          return a;
        }
      return !1;
    })();
    if (!n) return void (e.fancybox.defaults.btnTpl.fullScreen = !1);
    var o = {
      request: function (e) {
        (e = e || t.documentElement),
          e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
      },
      exit: function () {
        t[n.exitFullscreen]();
      },
      toggle: function (e) {
        (e = e || t.documentElement),
          this.isFullscreen() ? this.exit() : this.request(e);
      },
      isFullscreen: function () {
        return Boolean(t[n.fullscreenElement]);
      },
      enabled: function () {
        return Boolean(t[n.fullscreenEnabled]);
      },
    };
    e(t).on({
      "onInit.fb": function (t, e) {
        var n,
          i = e.$refs.toolbar.find("[data-fancybox-fullscreen]");
        e && !e.FullScreen && e.group[e.currIndex].opts.fullScreen
          ? ((n = e.$refs.container),
            n.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (
              t
            ) {
              t.stopPropagation(), t.preventDefault(), o.toggle(n[0]);
            }),
            e.opts.fullScreen &&
            e.opts.fullScreen.autoStart === !0 &&
            o.request(n[0]),
            (e.FullScreen = o))
          : i.hide();
      },
      "afterKeydown.fb": function (t, e, n, o, i) {
        e &&
          e.FullScreen &&
          70 === i &&
          (o.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]));
      },
      "beforeClose.fb": function (t) {
        t && t.FullScreen && o.exit();
      },
    }),
      e(t).on(n.fullscreenchange, function () {
        var t = e.fancybox.getInstance();
        t.current &&
          "image" === t.current.type &&
          t.isAnimating &&
          (t.current.$content.css("transition", "none"),
            (t.isAnimating = !1),
            t.update(!0, !0, 0));
      });
  })(document, window.jQuery),
  (function (t, e) {
    "use strict";
    var n = function (t) {
      (this.instance = t), this.init();
    };
    e.extend(n.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      init: function () {
        var t = this,
          e = t.instance.group[0],
          n = t.instance.group[1];
        (t.$button = t.instance.$refs.toolbar.find("[data-fancybox-thumbs]")),
          t.instance.group.length > 1 &&
            t.instance.group[t.instance.currIndex].opts.thumbs &&
            ("image" == e.type || e.opts.thumb || e.opts.$thumb) &&
            ("image" == n.type || n.opts.thumb || n.opts.$thumb)
            ? (t.$button.on("click", function () {
              t.toggle();
            }),
              (t.isActive = !0))
            : (t.$button.hide(), (t.isActive = !1));
      },
      create: function () {
        var t,
          n,
          o = this.instance;
        (this.$grid = e('<div class="fancybox-thumbs"></div>').appendTo(
          o.$refs.container
        )),
          (t = "<ul>"),
          e.each(o.group, function (e, o) {
            (n =
              o.opts.thumb ||
              (o.opts.$thumb ? o.opts.$thumb.attr("src") : null)),
              n || "image" !== o.type || (n = o.src),
              n &&
              n.length &&
              (t +=
                '<li data-index="' +
                e +
                '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' +
                n +
                '" /></li>');
          }),
          (t += "</ul>"),
          (this.$list = e(t)
            .appendTo(this.$grid)
            .on("click", "li", function () {
              o.jumpTo(e(this).data("index"));
            })),
          this.$list
            .find("img")
            .hide()
            .one("load", function () {
              var t,
                n,
                o,
                i,
                a = e(this).parent().removeClass("fancybox-thumbs-loading"),
                s = a.outerWidth(),
                r = a.outerHeight();
              (t = this.naturalWidth || this.width),
                (n = this.naturalHeight || this.height),
                (o = t / s),
                (i = n / r),
                o >= 1 &&
                i >= 1 &&
                (o > i ? ((t /= i), (n = r)) : ((t = s), (n /= o))),
                e(this)
                  .css({
                    width: Math.floor(t),
                    height: Math.floor(n),
                    "margin-top": Math.min(0, Math.floor(0.3 * r - 0.3 * n)),
                    "margin-left": Math.min(0, Math.floor(0.5 * s - 0.5 * t)),
                  })
                  .show();
            })
            .each(function () {
              this.src = e(this).data("src");
            });
      },
      focus: function () {
        this.instance.current &&
          this.$list
            .children()
            .removeClass("fancybox-thumbs-active")
            .filter('[data-index="' + this.instance.current.index + '"]')
            .addClass("fancybox-thumbs-active")
            .focus();
      },
      close: function () {
        this.$grid.hide();
      },
      update: function () {
        this.instance.$refs.container.toggleClass(
          "fancybox-show-thumbs",
          this.isVisible
        ),
          this.isVisible
            ? (this.$grid || this.create(),
              this.instance.trigger("onThumbsShow"),
              this.focus())
            : this.$grid && this.instance.trigger("onThumbsHide"),
          this.instance.update();
      },
      hide: function () {
        (this.isVisible = !1), this.update();
      },
      show: function () {
        (this.isVisible = !0), this.update();
      },
      toggle: function () {
        (this.isVisible = !this.isVisible), this.update();
      },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          e && !e.Thumbs && (e.Thumbs = new n(e));
        },
        "beforeShow.fb": function (t, e, n, o) {
          var i = e && e.Thumbs;
          if (i && i.isActive) {
            if (n.modal) return i.$button.hide(), void i.hide();
            o && e.opts.thumbs.autoStart === !0 && i.show(),
              i.isVisible && i.focus();
          }
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
          var a = e && e.Thumbs;
          a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
        },
        "beforeClose.fb": function (t, e) {
          var n = e && e.Thumbs;
          n && n.isVisible && e.opts.thumbs.hideOnClose !== !1 && n.close();
        },
      });
  })(document, window.jQuery),
  (function (t, e, n) {
    "use strict";
    function o() {
      var t = e.location.hash.substr(1),
        n = t.split("-"),
        o =
          n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
            ? parseInt(n.pop(-1), 10) || 1
            : 1,
        i = n.join("-");
      return o < 1 && (o = 1), { hash: t, index: o, gallery: i };
    }
    function i(t) {
      var e;
      "" !== t.gallery &&
        ((e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(
          t.index - 1
        )),
          e.length
            ? e.trigger("click")
            : n("#" + n.escapeSelector(t.gallery)).trigger("click"));
    }
    function a(t) {
      var e;
      return (
        !!t &&
        ((e = t.current ? t.current.opts : t.opts),
          e.$orig ? e.$orig.data("fancybox") : e.hash || "")
      );
    }
    n.escapeSelector ||
      (n.escapeSelector = function (t) {
        var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          n = function (t, e) {
            return e
              ? "\0" === t
                ? "�"
                : t.slice(0, -1) +
                "\\" +
                t.charCodeAt(t.length - 1).toString(16) +
                " "
              : "\\" + t;
          };
        return (t + "").replace(e, n);
      });
    var s = null,
      r = null;
    n(function () {
      setTimeout(function () {
        n.fancybox.defaults.hash !== !1 &&
          (n(t).on({
            "onInit.fb": function (t, e) {
              var n, i;
              e.group[e.currIndex].opts.hash !== !1 &&
                ((n = o()),
                  (i = a(e)),
                  i &&
                  n.gallery &&
                  i == n.gallery &&
                  (e.currIndex = n.index - 1));
            },
            "beforeShow.fb": function (n, o, i, c) {
              var l;
              i.opts.hash !== !1 &&
                ((l = a(o)),
                  l &&
                  "" !== l &&
                  (e.location.hash.indexOf(l) < 0 &&
                    (o.opts.origHash = e.location.hash),
                    (s = l + (o.group.length > 1 ? "-" + (i.index + 1) : "")),
                    "replaceState" in e.history
                      ? (r && clearTimeout(r),
                        (r = setTimeout(function () {
                          e.history[c ? "pushState" : "replaceState"](
                            {},
                            t.title,
                            e.location.pathname + e.location.search + "#" + s
                          ),
                            (r = null);
                        }, 300)))
                      : (e.location.hash = s)));
            },
            "beforeClose.fb": function (o, i, c) {
              var l, u;
              r && clearTimeout(r),
                c.opts.hash !== !1 &&
                ((l = a(i)),
                  (u = i && i.opts.origHash ? i.opts.origHash : ""),
                  l &&
                  "" !== l &&
                  ("replaceState" in history
                    ? e.history.replaceState(
                      {},
                      t.title,
                      e.location.pathname + e.location.search + u
                    )
                    : ((e.location.hash = u),
                      n(e).scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))),
                  (s = null));
            },
          }),
            n(e).on("hashchange.fb", function () {
              var t = o();
              n.fancybox.getInstance()
                ? !s ||
                s === t.gallery + "-" + t.index ||
                (1 === t.index && s == t.gallery) ||
                ((s = null), n.fancybox.close())
                : "" !== t.gallery && i(t);
            }),
            n(e).one("unload.fb popstate.fb", function () {
              n.fancybox.getInstance("close", !0, 0);
            }),
            i(o()));
      }, 50);
    });
  })(
    document,
    window,
    window.jQuery
  ); /*! Selectric ϟ v1.13.0 (2017-08-22) - git.io/tjl9sQ - Copyright (c) 2017 Leonardo Santos - MIT License */
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof module && module.exports
      ? (module.exports = function (t, s) {
        return (
          void 0 === s &&
          (s =
            "undefined" != typeof window
              ? require("jquery")
              : require("jquery")(t)),
          e(s),
          s
        );
      })
      : e(jQuery);
})(function (e) {
  "use strict";
  var t = e(document),
    s = e(window),
    l = ["a", "e", "i", "o", "u", "n", "c", "y"],
    i = [
      /[\xE0-\xE5]/g,
      /[\xE8-\xEB]/g,
      /[\xEC-\xEF]/g,
      /[\xF2-\xF6]/g,
      /[\xF9-\xFC]/g,
      /[\xF1]/g,
      /[\xE7]/g,
      /[\xFD-\xFF]/g,
    ],
    n = function (t, s) {
      var l = this;
      (l.element = t),
        (l.$element = e(t)),
        (l.state = {
          multiple: !!l.$element.attr("multiple"),
          enabled: !1,
          opened: !1,
          currValue: -1,
          selectedIdx: -1,
          highlightedIdx: -1,
        }),
        (l.eventTriggers = {
          open: l.open,
          close: l.close,
          destroy: l.destroy,
          refresh: l.refresh,
          init: l.init,
        }),
        l.init(s);
    };
  (n.prototype = {
    utils: {
      isMobile: function () {
        return /android|ip(hone|od|ad)/i.test(navigator.userAgent);
      },
      escapeRegExp: function (e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      },
      replaceDiacritics: function (e) {
        for (var t = i.length; t--;) e = e.toLowerCase().replace(i[t], l[t]);
        return e;
      },
      format: function (e) {
        var t = arguments;
        return ("" + e).replace(/\{(?:(\d+)|(\w+))\}/g, function (e, s, l) {
          return l && t[1] ? t[1][l] : t[s];
        });
      },
      nextEnabledItem: function (e, t) {
        for (; e[(t = (t + 1) % e.length)].disabled;);
        return t;
      },
      previousEnabledItem: function (e, t) {
        for (; e[(t = (t > 0 ? t : e.length) - 1)].disabled;);
        return t;
      },
      toDash: function (e) {
        return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      },
      triggerCallback: function (t, s) {
        var l = s.element,
          i = s.options["on" + t],
          n = [l].concat([].slice.call(arguments).slice(1));
        e.isFunction(i) && i.apply(l, n),
          e(l).trigger("selectric-" + this.toDash(t), n);
      },
      arrayToClassname: function (t) {
        var s = e.grep(t, function (e) {
          return !!e;
        });
        return e.trim(s.join(" "));
      },
    },
    init: function (t) {
      var s = this;
      if (
        ((s.options = e.extend(!0, {}, e.fn.selectric.defaults, s.options, t)),
          s.utils.triggerCallback("BeforeInit", s),
          s.destroy(!0),
          s.options.disableOnMobile && s.utils.isMobile())
      )
        return void (s.disableOnMobile = !0);
      s.classes = s.getClassNames();
      var l = e("<input/>", {
        class: s.classes.input,
        readonly: s.utils.isMobile(),
      }),
        i = e("<div/>", { class: s.classes.items, tabindex: -1 }),
        n = e("<div/>", { class: s.classes.scroll }),
        a = e("<div/>", {
          class: s.classes.prefix,
          html: s.options.arrowButtonMarkup,
        }),
        o = e("<span/>", { class: "label" }),
        r = s.$element.wrap("<div/>").parent().append(a.prepend(o), i, l),
        u = e("<div/>", { class: s.classes.hideselect });
      (s.elements = {
        input: l,
        items: i,
        itemsScroll: n,
        wrapper: a,
        label: o,
        outerWrapper: r,
      }),
        s.options.nativeOnMobile &&
        s.utils.isMobile() &&
        ((s.elements.input = void 0),
          u.addClass(s.classes.prefix + "-is-native"),
          s.$element.on("change", function () {
            s.refresh();
          })),
        s.$element.on(s.eventTriggers).wrap(u),
        (s.originalTabindex = s.$element.prop("tabindex")),
        s.$element.prop("tabindex", -1),
        s.populate(),
        s.activate(),
        s.utils.triggerCallback("Init", s);
    },
    activate: function () {
      var e = this,
        t = e.elements.items
          .closest(":visible")
          .children(":hidden")
          .addClass(e.classes.tempshow),
        s = e.$element.width();
      t.removeClass(e.classes.tempshow),
        e.utils.triggerCallback("BeforeActivate", e),
        e.elements.outerWrapper.prop(
          "class",
          e.utils.arrayToClassname([
            e.classes.wrapper,
            e.$element.prop("class").replace(/\S+/g, e.classes.prefix + "-$&"),
            e.options.responsive ? e.classes.responsive : "",
          ])
        ),
        e.options.inheritOriginalWidth &&
        s > 0 &&
        e.elements.outerWrapper.width(s),
        e.unbindEvents(),
        e.$element.prop("disabled")
          ? (e.elements.outerWrapper.addClass(e.classes.disabled),
            e.elements.input && e.elements.input.prop("disabled", !0))
          : ((e.state.enabled = !0),
            e.elements.outerWrapper.removeClass(e.classes.disabled),
            (e.$li = e.elements.items.removeAttr("style").find("li")),
            e.bindEvents()),
        e.utils.triggerCallback("Activate", e);
    },
    getClassNames: function () {
      var t = this,
        s = t.options.customClass,
        l = {};
      return (
        e.each(
          "Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel".split(
            " "
          ),
          function (e, i) {
            var n = s.prefix + i;
            l[i.toLowerCase()] = s.camelCase ? n : t.utils.toDash(n);
          }
        ),
        (l.prefix = s.prefix),
        l
      );
    },
    setLabel: function () {
      var t = this,
        s = t.options.labelBuilder;
      if (t.state.multiple) {
        var l = e.isArray(t.state.currValue)
          ? t.state.currValue
          : [t.state.currValue];
        l = 0 === l.length ? [0] : l;
        var i = e.map(l, function (s) {
          return e.grep(t.lookupItems, function (e) {
            return e.index === s;
          })[0];
        });
        (i = e.grep(i, function (t) {
          return i.length > 1 || 0 === i.length ? "" !== e.trim(t.value) : t;
        })),
          (i = e.map(i, function (l) {
            return e.isFunction(s) ? s(l) : t.utils.format(s, l);
          })),
          t.options.multiple.maxLabelEntries &&
          (i.length >= t.options.multiple.maxLabelEntries + 1
            ? ((i = i.slice(0, t.options.multiple.maxLabelEntries)),
              i.push(
                e.isFunction(s)
                  ? s({ text: "..." })
                  : t.utils.format(s, { text: "..." })
              ))
            : i.slice(i.length - 1)),
          t.elements.label.html(i.join(t.options.multiple.separator));
      } else {
        var n = t.lookupItems[t.state.currValue];
        t.elements.label.html(e.isFunction(s) ? s(n) : t.utils.format(s, n));
      }
    },
    populate: function () {
      var t = this,
        s = t.$element.children(),
        l = t.$element.find("option"),
        i = l.filter(":selected"),
        n = l.index(i),
        a = 0,
        o = t.state.multiple ? [] : 0;
      i.length > 1 &&
        t.state.multiple &&
        ((n = []),
          i.each(function () {
            n.push(e(this).index());
          })),
        (t.state.currValue = ~n ? n : o),
        (t.state.selectedIdx = t.state.currValue),
        (t.state.highlightedIdx = t.state.currValue),
        (t.items = []),
        (t.lookupItems = []),
        s.length &&
        (s.each(function (s) {
          var l = e(this);
          if (l.is("optgroup")) {
            var i = {
              element: l,
              label: l.prop("label"),
              groupDisabled: l.prop("disabled"),
              items: [],
            };
            l.children().each(function (s) {
              var l = e(this);
              (i.items[s] = t.getItemData(
                a,
                l,
                i.groupDisabled || l.prop("disabled")
              )),
                (t.lookupItems[a] = i.items[s]),
                a++;
            }),
              (t.items[s] = i);
          } else (t.items[s] = t.getItemData(a, l, l.prop("disabled"))), (t.lookupItems[a] = t.items[s]), a++;
        }),
          t.setLabel(),
          t.elements.items.append(
            t.elements.itemsScroll.html(t.getItemsMarkup(t.items))
          ));
    },
    getItemData: function (t, s, l) {
      var i = this;
      return {
        index: t,
        element: s,
        value: s.val(),
        className: s.prop("class"),
        text: s.html(),
        slug: e.trim(i.utils.replaceDiacritics(s.html())),
        alt: s.attr("data-alt"),
        selected: s.prop("selected"),
        disabled: l,
      };
    },
    getItemsMarkup: function (t) {
      var s = this,
        l = "<ul>";
      return (
        e.isFunction(s.options.listBuilder) &&
        s.options.listBuilder &&
        (t = s.options.listBuilder(t)),
        e.each(t, function (t, i) {
          void 0 !== i.label
            ? ((l += s.utils.format(
              '<ul class="{1}"><li class="{2}">{3}</li>',
              s.utils.arrayToClassname([
                s.classes.group,
                i.groupDisabled ? "disabled" : "",
                i.element.prop("class"),
              ]),
              s.classes.grouplabel,
              i.element.prop("label")
            )),
              e.each(i.items, function (e, t) {
                l += s.getItemMarkup(t.index, t);
              }),
              (l += "</ul>"))
            : (l += s.getItemMarkup(i.index, i));
        }),
        l + "</ul>"
      );
    },
    getItemMarkup: function (t, s) {
      var l = this,
        i = l.options.optionsItemBuilder,
        n = {
          value: s.value,
          text: s.text,
          slug: s.slug,
          index: s.index,
        };
      return l.utils.format(
        '<li data-index="{1}" class="{2}">{3}</li>',
        t,
        l.utils.arrayToClassname([
          s.className,
          t === l.items.length - 1 ? "last" : "",
          s.disabled ? "disabled" : "",
          s.selected ? "selected" : "",
        ]),
        e.isFunction(i)
          ? l.utils.format(i(s, this.$element, t), s)
          : l.utils.format(i, n)
      );
    },
    unbindEvents: function () {
      var e = this;
      e.elements.wrapper
        .add(e.$element)
        .add(e.elements.outerWrapper)
        .add(e.elements.input)
        .off(".sl");
    },
    bindEvents: function () {
      var t = this;
      t.elements.outerWrapper.on("mouseenter.sl mouseleave.sl", function (s) {
        e(this).toggleClass(t.classes.hover, "mouseenter" === s.type),
          t.options.openOnHover &&
          (clearTimeout(t.closeTimer),
            "mouseleave" === s.type
              ? (t.closeTimer = setTimeout(
                e.proxy(t.close, t),
                t.options.hoverIntentTimeout
              ))
              : t.open());
      }),
        t.elements.wrapper.on("click.sl", function (e) {
          t.state.opened ? t.close() : t.open(e);
        }),
        (t.options.nativeOnMobile && t.utils.isMobile()) ||
        (t.$element.on("focus.sl", function () {
          t.elements.input.focus();
        }),
          t.elements.input
            .prop({ tabindex: t.originalTabindex, disabled: !1 })
            .on("keydown.sl", e.proxy(t.handleKeys, t))
            .on("focusin.sl", function (e) {
              t.elements.outerWrapper.addClass(t.classes.focus),
                t.elements.input.one("blur", function () {
                  t.elements.input.blur();
                }),
                t.options.openOnFocus && !t.state.opened && t.open(e);
            })
            .on("focusout.sl", function () {
              t.elements.outerWrapper.removeClass(t.classes.focus);
            })
            .on("input propertychange", function () {
              var s = t.elements.input.val(),
                l = new RegExp("^" + t.utils.escapeRegExp(s), "i");
              clearTimeout(t.resetStr),
                (t.resetStr = setTimeout(function () {
                  t.elements.input.val("");
                }, t.options.keySearchTimeout)),
                s.length &&
                e.each(t.items, function (e, s) {
                  if (!s.disabled) {
                    if (l.test(s.text) || l.test(s.slug))
                      return void t.highlight(e);
                    if (s.alt)
                      for (
                        var i = s.alt.split("|"), n = 0;
                        n < i.length && i[n];
                        n++
                      )
                        if (l.test(i[n].trim())) return void t.highlight(e);
                  }
                });
            })),
        t.$li.on({
          mousedown: function (e) {
            e.preventDefault(), e.stopPropagation();
          },
          click: function () {
            return t.select(e(this).data("index")), !1;
          },
        });
    },
    handleKeys: function (t) {
      var s = this,
        l = t.which,
        i = s.options.keys,
        n = e.inArray(l, i.previous) > -1,
        a = e.inArray(l, i.next) > -1,
        o = e.inArray(l, i.select) > -1,
        r = e.inArray(l, i.open) > -1,
        u = s.state.highlightedIdx,
        p = (n && 0 === u) || (a && u + 1 === s.items.length),
        c = 0;
      if (((13 !== l && 32 !== l) || t.preventDefault(), n || a)) {
        if (!s.options.allowWrap && p) return;
        n && (c = s.utils.previousEnabledItem(s.lookupItems, u)),
          a && (c = s.utils.nextEnabledItem(s.lookupItems, u)),
          s.highlight(c);
      }
      if (o && s.state.opened)
        return (
          s.select(u),
          void (
            (s.state.multiple && s.options.multiple.keepMenuOpen) ||
            s.close()
          )
        );
      r && !s.state.opened && s.open();
    },
    refresh: function () {
      var e = this;
      e.populate(), e.activate(), e.utils.triggerCallback("Refresh", e);
    },
    setOptionsDimensions: function () {
      var e = this,
        t = e.elements.items
          .closest(":visible")
          .children(":hidden")
          .addClass(e.classes.tempshow),
        s = e.options.maxHeight,
        l = e.elements.items.outerWidth(),
        i = e.elements.wrapper.outerWidth() - (l - e.elements.items.width());
      !e.options.expandToItemText || i > l
        ? (e.finalWidth = i)
        : (e.elements.items.css("overflow", "scroll"),
          e.elements.outerWrapper.width(9e4),
          (e.finalWidth = e.elements.items.width()),
          e.elements.items.css("overflow", ""),
          e.elements.outerWrapper.width("")),
        e.elements.items.width(e.finalWidth).height() > s &&
        e.elements.items.height(s),
        t.removeClass(e.classes.tempshow);
    },
    isInViewport: function () {
      var e = this;
      if (!0 === e.options.forceRenderAbove)
        e.elements.outerWrapper.addClass(e.classes.above);
      else if (!0 === e.options.forceRenderBelow)
        e.elements.outerWrapper.addClass(e.classes.below);
      else {
        var t = s.scrollTop(),
          l = s.height(),
          i = e.elements.outerWrapper.offset().top,
          n = e.elements.outerWrapper.outerHeight(),
          a = i + n + e.itemsHeight <= t + l,
          o = i - e.itemsHeight > t,
          r = !a && o,
          u = !r;
        e.elements.outerWrapper.toggleClass(e.classes.above, r),
          e.elements.outerWrapper.toggleClass(e.classes.below, u);
      }
    },
    detectItemVisibility: function (t) {
      var s = this,
        l = s.$li.filter("[data-index]");
      s.state.multiple &&
        ((t = e.isArray(t) && 0 === t.length ? 0 : t),
          (t = e.isArray(t) ? Math.min.apply(Math, t) : t));
      var i = l.eq(t).outerHeight(),
        n = l[t].offsetTop,
        a = s.elements.itemsScroll.scrollTop(),
        o = n + 2 * i;
      s.elements.itemsScroll.scrollTop(
        o > a + s.itemsHeight ? o - s.itemsHeight : n - i < a ? n - i : a
      );
    },
    open: function (s) {
      var l = this;
      if (l.options.nativeOnMobile && l.utils.isMobile()) return !1;
      l.utils.triggerCallback("BeforeOpen", l),
        s &&
        (s.preventDefault(),
          l.options.stopPropagation && s.stopPropagation()),
        l.state.enabled &&
        (l.setOptionsDimensions(),
          e("." + l.classes.hideselect, "." + l.classes.open)
            .children()
            .selectric("close"),
          (l.state.opened = !0),
          (l.itemsHeight = l.elements.items.outerHeight()),
          (l.itemsInnerHeight = l.elements.items.height()),
          l.elements.outerWrapper.addClass(l.classes.open),
          l.elements.input.val(""),
          s && "focusin" !== s.type && l.elements.input.focus(),
          setTimeout(function () {
            t.on("click.sl", e.proxy(l.close, l)).on(
              "scroll.sl",
              e.proxy(l.isInViewport, l)
            );
          }, 1),
          l.isInViewport(),
          l.options.preventWindowScroll &&
          t.on(
            "mousewheel.sl DOMMouseScroll.sl",
            "." + l.classes.scroll,
            function (t) {
              var s = t.originalEvent,
                i = e(this).scrollTop(),
                n = 0;
              "detail" in s && (n = -1 * s.detail),
                "wheelDelta" in s && (n = s.wheelDelta),
                "wheelDeltaY" in s && (n = s.wheelDeltaY),
                "deltaY" in s && (n = -1 * s.deltaY),
                ((i === this.scrollHeight - l.itemsInnerHeight && n < 0) ||
                  (0 === i && n > 0)) &&
                t.preventDefault();
            }
          ),
          l.detectItemVisibility(l.state.selectedIdx),
          l.highlight(l.state.multiple ? -1 : l.state.selectedIdx),
          l.utils.triggerCallback("Open", l));
    },
    close: function () {
      var e = this;
      e.utils.triggerCallback("BeforeClose", e),
        t.off(".sl"),
        e.elements.outerWrapper.removeClass(e.classes.open),
        (e.state.opened = !1),
        e.utils.triggerCallback("Close", e);
    },
    change: function () {
      var t = this;
      t.utils.triggerCallback("BeforeChange", t),
        t.state.multiple
          ? (e.each(t.lookupItems, function (e) {
            (t.lookupItems[e].selected = !1),
              t.$element.find("option").prop("selected", !1);
          }),
            e.each(t.state.selectedIdx, function (e, s) {
              (t.lookupItems[s].selected = !0),
                t.$element.find("option").eq(s).prop("selected", !0);
            }),
            (t.state.currValue = t.state.selectedIdx),
            t.setLabel(),
            t.utils.triggerCallback("Change", t))
          : t.state.currValue !== t.state.selectedIdx &&
          (t.$element
            .prop("selectedIndex", (t.state.currValue = t.state.selectedIdx))
            .data("value", t.lookupItems[t.state.selectedIdx].text),
            t.setLabel(),
            t.utils.triggerCallback("Change", t));
    },
    highlight: function (e) {
      var t = this,
        s = t.$li.filter("[data-index]").removeClass("highlighted");
      t.utils.triggerCallback("BeforeHighlight", t),
        void 0 === e ||
        -1 === e ||
        t.lookupItems[e].disabled ||
        (s.eq((t.state.highlightedIdx = e)).addClass("highlighted"),
          t.detectItemVisibility(e),
          t.utils.triggerCallback("Highlight", t));
    },
    select: function (t) {
      var s = this,
        l = s.$li.filter("[data-index]");
      if (
        (s.utils.triggerCallback("BeforeSelect", s, t),
          void 0 !== t && -1 !== t && !s.lookupItems[t].disabled)
      ) {
        if (s.state.multiple) {
          s.state.selectedIdx = e.isArray(s.state.selectedIdx)
            ? s.state.selectedIdx
            : [s.state.selectedIdx];
          var i = e.inArray(t, s.state.selectedIdx);
          -1 !== i
            ? s.state.selectedIdx.splice(i, 1)
            : s.state.selectedIdx.push(t),
            l
              .removeClass("selected")
              .filter(function (t) {
                return -1 !== e.inArray(t, s.state.selectedIdx);
              })
              .addClass("selected");
        } else
          l.removeClass("selected")
            .eq((s.state.selectedIdx = t))
            .addClass("selected");
        (s.state.multiple && s.options.multiple.keepMenuOpen) || s.close(),
          s.change(),
          s.utils.triggerCallback("Select", s, t);
      }
    },
    destroy: function (e) {
      var t = this;
      t.state &&
        t.state.enabled &&
        (t.elements.items
          .add(t.elements.wrapper)
          .add(t.elements.input)
          .remove(),
          e || t.$element.removeData("selectric").removeData("value"),
          t.$element
            .prop("tabindex", t.originalTabindex)
            .off(".sl")
            .off(t.eventTriggers)
            .unwrap()
            .unwrap(),
          (t.state.enabled = !1));
    },
  }),
    (e.fn.selectric = function (t) {
      return this.each(function () {
        var s = e.data(this, "selectric");
        s && !s.disableOnMobile
          ? "string" == typeof t && s[t]
            ? s[t]()
            : s.init(t)
          : e.data(this, "selectric", new n(this, t));
      });
    }),
    (e.fn.selectric.defaults = {
      onChange: function (t) {
        e(t).change();
      },
      maxHeight: 300,
      keySearchTimeout: 500,
      arrowButtonMarkup: '<b class="button">&#x25be;</b>',
      disableOnMobile: !1,
      nativeOnMobile: !0,
      openOnFocus: !0,
      openOnHover: !1,
      hoverIntentTimeout: 500,
      expandToItemText: !1,
      responsive: !1,
      preventWindowScroll: !0,
      inheritOriginalWidth: !1,
      allowWrap: !0,
      forceRenderAbove: !1,
      forceRenderBelow: !1,
      stopPropagation: !0,
      optionsItemBuilder: "{text}",
      labelBuilder: "{text}",
      listBuilder: !1,
      keys: {
        previous: [37, 38],
        next: [39, 40],
        select: [9, 13, 27],
        open: [13, 32, 37, 38, 39, 40],
        close: [9, 27],
      },
      customClass: { prefix: "selectric", camelCase: !1 },
      multiple: {
        separator: ", ",
        keepMenuOpen: !0,
        maxLabelEntries: !1,
      },
    });
});
(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
      ? (module.exports = i(require("jquery")))
      : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  (e = (function () {
    function e(e, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(e),
        appendDots: i(e),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(e)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(e).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        "undefined" != typeof document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : "undefined" != typeof document.webkitHidden &&
          ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = t++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    }
    var t = 0;
    return e;
  })()),
    (e.prototype.activateADA = function () {
      var i = this;
      i.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
    (e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
      var s = this;
      if ("boolean" == typeof t) (o = t), (t = null);
      else if (t < 0 || t >= s.slideCount) return !1;
      s.unload(),
        "number" == typeof t
          ? 0 === t && 0 === s.$slides.length
            ? i(e).appendTo(s.$slideTrack)
            : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
          : o === !0
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
        (s.$slides = s.$slideTrack.children(this.options.slide)),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function (e, t) {
          i(t).attr("data-slick-index", e);
        }),
        (s.$slidesCache = s.$slides),
        s.reinit();
    }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        i.options.adaptiveHeight === !0 &&
        i.options.vertical === !1
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        s.options.rtl === !0 && s.options.vertical === !1 && (e = -e),
        s.transformsEnabled === !1
          ? s.options.vertical === !1
            ? s.$slideTrack.animate(
              { left: e },
              s.options.speed,
              s.options.easing,
              t
            )
            : s.$slideTrack.animate(
              { top: e },
              s.options.speed,
              s.options.easing,
              t
            )
          : s.cssTransitions === !1
            ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft),
              i({ animStart: s.currentLeft }).animate(
                { animStart: e },
                {
                  duration: s.options.speed,
                  easing: s.options.easing,
                  step: function (i) {
                    (i = Math.ceil(i)),
                      s.options.vertical === !1
                        ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                          s.$slideTrack.css(o))
                        : ((o[s.animType] = "translate(0px," + i + "px)"),
                          s.$slideTrack.css(o));
                  },
                  complete: function () {
                    t && t.call();
                  },
                }
              ))
            : (s.applyTransition(),
              (e = Math.ceil(e)),
              s.options.vertical === !1
                ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
                : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
              s.$slideTrack.css(o),
              t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this,
        o = t.getNavTarget();
      null !== o &&
        "object" == typeof o &&
        o.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      e.options.fade === !1
        ? (t[e.transitionType] =
          e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
          "opacity " + e.options.speed + "ms " + e.options.cssEase),
        e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
        (i.autoPlayTimer = setInterval(
          i.autoPlayIterator,
          i.options.autoplaySpeed
        ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (i.options.infinite === !1 &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
            ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 === 0 && (i.direction = 1))),
          i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      e.options.arrows === !0 &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
          (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
          e.slideCount > e.options.slidesToShow
            ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
              e.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
              e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
              e.options.infinite !== !0 &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
            : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
        for (
          o.$slider.addClass("slick-dotted"),
          t = i("<ul />").addClass(o.options.dotsClass),
          e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (e.options.centerMode !== !0 && e.options.swipeToSlide !== !0) ||
        (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.options.draggable === !0 && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
          (n = l.$slider.children()),
          l.options.rows > 0)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
          s = Math.ceil(n.length / r),
          i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
            ? (n = d)
            : "min" === r.respondTo && (n = Math.min(a, d)),
          r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (r.originalSettings.mobileFirst === !1
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
            ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                  {},
                  r.originalSettings,
                  r.breakpointSettings[s]
                )),
                  e === !0 && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                  {},
                  r.originalSettings,
                  r.breakpointSettings[s]
                )),
                  e === !0 && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
          ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            e === !0 && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || l === !1 || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
      (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll !== 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
            r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
            r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e,
        t,
        o = this;
      if (((e = o.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var s in e) {
          if (i < e[s]) {
            i = t;
            break;
          }
          t = e[s];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
          e.options.accessibility === !0 &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        e.options.arrows === !0 &&
        e.slideCount > e.options.slidesToShow &&
        (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          e.options.accessibility === !0 &&
          (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        e.options.accessibility === !0 &&
        e.$list.off("keydown.slick", e.keyHandler),
        e.options.focusOnSelect === !0 &&
        i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 0 &&
        ((i = e.$slides.children().children()),
          i.removeAttr("style"),
          e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      var e = this;
      e.shouldClick === !1 &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
        t.$prevArrow.length &&
        (t.$prevArrow
          .removeClass("slick-disabled slick-arrow slick-hidden")
          .removeAttr("aria-hidden aria-disabled tabindex")
          .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
        t.$nextArrow.length &&
        (t.$nextArrow
          .removeClass("slick-disabled slick-arrow slick-hidden")
          .removeAttr("aria-hidden aria-disabled tabindex")
          .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
        (t.$slides
          .removeClass(
            "slick-slide slick-active slick-center slick-visible slick-current"
          )
          .removeAttr("aria-hidden")
          .removeAttr("data-slick-index")
          .each(function () {
            i(this).attr("style", i(this).data("originalStyling"));
          }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      t.cssTransitions === !1
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
          setTimeout(function () {
            t.disableTransition(i), e.call();
          }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      e.cssTransitions === !1
        ? e.$slides
          .eq(i)
          .animate(
            { opacity: 0, zIndex: e.options.zIndex - 2 },
            e.options.speed,
            e.options.easing
          )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
      var e = this;
      null !== i &&
        ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
    }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick", "*", function (t) {
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              o.is(":focus") &&
              ((e.focussed = !0), e.autoPlay());
          }, 0);
        })
        .on("blur.slick", "*", function (t) {
          i(this);
          e.options.pauseOnFocus && ((e.focussed = !1), e.autoPlay());
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
      var i = this;
      return i.currentSlide;
    }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (i.options.infinite === !0)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount;)
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (i.options.centerMode === !0) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount;)
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        n.options.infinite === !0
          ? (n.slideCount > n.options.slidesToShow &&
            ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              n.options.vertical === !0 &&
              n.options.centerMode === !0 &&
              (2 === n.options.slidesToShow
                ? (s = -1.5)
                : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll !== 0 &&
            i + n.options.slidesToScroll > n.slideCount &&
            n.slideCount > n.options.slidesToShow &&
            (i > n.slideCount
              ? ((n.slideOffset =
                (n.options.slidesToShow - (i - n.slideCount)) *
                n.slideWidth *
                -1),
                (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
              : ((n.slideOffset =
                (n.slideCount % n.options.slidesToScroll) *
                n.slideWidth *
                -1),
                (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
          ((n.slideOffset =
            (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
        ((n.slideOffset = 0), (r = 0)),
        n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
            (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
            (n.slideWidth * n.slideCount) / 2)
          : n.options.centerMode === !0 && n.options.infinite === !0
            ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
            : n.options.centerMode === !0 &&
            ((n.slideOffset = 0),
              (n.slideOffset +=
                n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          n.options.vertical === !1
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        n.options.variableWidth === !0 &&
        ((o =
          n.slideCount <= n.options.slidesToShow || n.options.infinite === !1
            ? n.$slideTrack.children(".slick-slide").eq(i)
            : n.$slideTrack
              .children(".slick-slide")
              .eq(i + n.options.slidesToShow)),
          (e =
            n.options.rtl === !0
              ? o[0]
                ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1
                : 0
              : o[0]
                ? o[0].offsetLeft * -1
                : 0),
          n.options.centerMode === !0 &&
          ((o =
            n.slideCount <= n.options.slidesToShow ||
              n.options.infinite === !1
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                .children(".slick-slide")
                .eq(i + n.options.slidesToShow + 1)),
            (e =
              n.options.rtl === !0
                ? o[0]
                  ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1
                  : 0
                : o[0]
                  ? o[0].offsetLeft * -1
                  : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption = function (i) {
      var e = this;
      return e.options[i];
    }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        e.options.infinite === !1
          ? (i = e.slideCount)
          : ((t = e.options.slidesToScroll * -1),
            (o = e.options.slidesToScroll * -1),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o,
        s,
        n = this;
      return (
        (s = n.options.centerMode === !0 ? Math.floor(n.$list.width() / 2) : 0),
        (o = n.swipeLeft * -1 + s),
        n.options.swipeToSlide === !0
          ? (n.$slideTrack.find(".slick-slide").each(function (e, s) {
            var r, l, d;
            if (
              ((r = i(s).outerWidth()),
                (l = s.offsetLeft),
                n.options.centerMode !== !0 && (l += r / 2),
                (d = l + r),
                o < d)
            )
              return (t = s), !1;
          }),
            (e = Math.abs(i(t).attr("data-slick-index") - n.currentSlide) || 1))
          : n.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
      var t = this;
      t.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
    }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
          t.buildRows(),
          t.buildOut(),
          t.setProps(),
          t.startLoad(),
          t.loadSlider(),
          t.initializeEvents(),
          t.updateArrows(),
          t.updateDots(),
          t.checkResponsive(!0),
          t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        t.options.accessibility === !0 && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
        (e.$slides
          .not(e.$slideTrack.find(".slick-cloned"))
          .each(function (t) {
            var s = o.indexOf(t);
            if (
              (i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1,
              }),
                s !== -1)
            ) {
              var n = "slick-slide-control" + e.instanceUid + s;
              i("#" + n).length && i(this).attr({ "aria-describedby": n });
            }
          }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.options.focusOnChange
          ? e.$slides.eq(s).attr({ tabindex: "0" })
          : e.$slides.eq(s).removeAttr("tabindex");
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
          i.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, i.changeSlide),
          i.options.accessibility === !0 &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
            i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      e.options.dots === !0 &&
        e.slideCount > e.options.slidesToShow &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
          e.options.accessibility === !0 &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        e.options.dots === !0 &&
        e.options.pauseOnDotsHover === !0 &&
        e.slideCount > e.options.slidesToShow &&
        i("li", e.$dots)
          .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
          e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        e.options.accessibility === !0 &&
        e.$list.on("keydown.slick", e.keyHandler),
        e.options.focusOnSelect === !0 &&
        i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        i.options.dots === !0 &&
        i.slideCount > i.options.slidesToShow &&
        i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && e.options.accessibility === !0
          ? e.changeSlide({
            data: {
              message: e.options.rtl === !0 ? "next" : "previous",
            },
          })
          : 39 === i.keyCode &&
          e.options.accessibility === !0 &&
          e.changeSlide({
            data: {
              message: e.options.rtl === !0 ? "previous" : "next",
            },
          }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
            n = document.createElement("img");
          (n.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                r.$slider.trigger("lazyLoaded", [r, e, t]);
            });
          }),
            (n.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                r.$slider.trigger("lazyLoadError", [r, e, t]);
            }),
            (n.src = t);
        });
      }
      var t,
        o,
        s,
        n,
        r = this;
      if (
        (r.options.centerMode === !0
          ? r.options.infinite === !0
            ? ((s = r.currentSlide + (r.options.slidesToShow / 2 + 1)),
              (n = s + r.options.slidesToShow + 2))
            : ((s = Math.max(
              0,
              r.currentSlide - (r.options.slidesToShow / 2 + 1)
            )),
              (n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide))
          : ((s = r.options.infinite
            ? r.options.slidesToShow + r.currentSlide
            : r.currentSlide),
            (n = Math.ceil(s + r.options.slidesToShow)),
            r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)),
          (t = r.$slider.find(".slick-slide").slice(s, n)),
          "anticipated" === r.options.lazyLoad)
      )
        for (
          var l = s - 1, d = n, a = r.$slider.find(".slick-slide"), c = 0;
          c < r.options.slidesToScroll;
          c++
        )
          l < 0 && (l = r.slideCount - 1),
            (t = t.add(a.eq(l))),
            (t = t.add(a.eq(d))),
            l--,
            d++;
      e(t),
        r.slideCount <= r.options.slidesToShow
          ? ((o = r.$slider.find(".slick-slide")), e(o))
          : r.currentSlide >= r.slideCount - r.options.slidesToShow
            ? ((o = r.$slider
              .find(".slick-cloned")
              .slice(0, r.options.slidesToShow)),
              e(o))
            : 0 === r.currentSlide &&
            ((o = r.$slider
              .find(".slick-cloned")
              .slice(r.options.slidesToShow * -1)),
              e(o));
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext = function () {
      var i = this;
      i.changeSlide({ data: { message: "next" } });
    }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause = function () {
      var i = this;
      i.autoPlayClear(), (i.paused = !0);
    }),
    (e.prototype.play = e.prototype.slickPlay = function () {
      var i = this;
      i.autoPlay(),
        (i.options.autoplay = !0),
        (i.paused = !1),
        (i.focussed = !1),
        (i.interrupted = !1);
    }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      if (
        !t.unslicked &&
        (t.$slider.trigger("afterChange", [t, e]),
          (t.animating = !1),
          t.slideCount > t.options.slidesToShow && t.setPosition(),
          (t.swipeLeft = null),
          t.options.autoplay && t.autoPlay(),
          t.options.accessibility === !0 &&
          (t.initADA(), t.options.focusOnChange))
      ) {
        var o = i(t.$slides.get(t.currentSlide));
        o.attr("tabindex", 0).focus();
      }
    }),
    (e.prototype.prev = e.prototype.slickPrev = function () {
      var i = this;
      i.changeSlide({ data: { message: "previous" } });
    }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          (r = document.createElement("img")),
          (r.onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              l.options.adaptiveHeight === !0 && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                l.progressiveLazyLoad(e + 1);
              }, 500)
              : (t
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0;)
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
        0 !== e.currentSlide &&
        (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        e.options.focusOnSelect === !0 &&
        i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
          (e.windowDelay = window.setTimeout(function () {
            (e.windowWidth = i(window).width()),
              e.checkResponsive(),
              e.unslicked || e.setPosition();
          }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
      var o = this;
      return (
        "boolean" == typeof i
          ? ((e = i), (i = e === !0 ? 0 : o.slideCount - 1))
          : (i = e === !0 ? --i : i),
        !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) &&
        (o.unload(),
          t === !0
            ? o.$slideTrack.children().remove()
            : o.$slideTrack.children(this.options.slide).eq(i).remove(),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          (o.$slidesCache = o.$slides),
          void o.reinit())
      );
    }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      o.options.rtl === !0 && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        o.transformsEnabled === !1
          ? o.$slideTrack.css(s)
          : ((s = {}),
            o.cssTransitions === !1
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      i.options.vertical === !1
        ? i.options.centerMode === !0 &&
        i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
          i.$slides.first().outerHeight(!0) * i.options.slidesToShow
        ),
          i.options.centerMode === !0 &&
          i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        i.options.vertical === !1 && i.options.variableWidth === !1
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : i.options.variableWidth === !0
            ? i.$slideTrack.width(5e3 * i.slideCount)
            : ((i.slideWidth = Math.ceil(i.listWidth)),
              i.$slideTrack.height(
                Math.ceil(
                  i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
                )
              ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      i.options.variableWidth === !1 &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          t.options.rtl === !0
            ? i(s).css({
              position: "relative",
              right: e,
              top: 0,
              zIndex: t.options.zIndex - 2,
              opacity: 0,
            })
            : i(s).css({
              position: "relative",
              left: e,
              top: 0,
              zIndex: t.options.zIndex - 2,
              opacity: 0,
            });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        i.options.adaptiveHeight === !0 &&
        i.options.vertical === !1
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption = function () {
      var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;
      if (
        ("object" === i.type(arguments[0])
          ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
          : "string" === i.type(arguments[0]) &&
          ((o = arguments[0]),
            (s = arguments[1]),
            (l = arguments[2]),
            "responsive" === arguments[0] && "array" === i.type(arguments[1])
              ? (n = "responsive")
              : "undefined" != typeof arguments[1] && (n = "single")),
          "single" === n)
      )
        r.options[o] = s;
      else if ("multiple" === n)
        i.each(o, function (i, e) {
          r.options[i] = e;
        });
      else if ("responsive" === n)
        for (t in s)
          if ("array" !== i.type(r.options.responsive))
            r.options.responsive = [s[t]];
          else {
            for (e = r.options.responsive.length - 1; e >= 0;)
              r.options.responsive[e].breakpoint === s[t].breakpoint &&
                r.options.responsive.splice(e, 1),
                e--;
            r.options.responsive.push(s[t]);
          }
      l && (r.unload(), r.reinit());
    }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        i.options.fade === !1
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = i.options.vertical === !0 ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
        (i.options.useCSS === !0 && (i.cssTransitions = !0)),
        i.options.fade &&
        ("number" == typeof i.options.zIndex
          ? i.options.zIndex < 3 && (i.options.zIndex = 3)
          : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
        ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
          void 0 === e.webkitPerspective &&
          (i.animType = !1)),
        void 0 !== e.MozTransform &&
        ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
          void 0 === e.MozPerspective &&
          (i.animType = !1)),
        void 0 !== e.webkitTransform &&
        ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
          void 0 === e.webkitPerspective &&
          (i.animType = !1)),
        void 0 !== e.msTransform &&
        ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
        i.animType !== !1 &&
        ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && i.animType !== !1);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
          n.$slides.eq(i).addClass("slick-current"),
          n.options.centerMode === !0)
      ) {
        var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          n.options.infinite === !0 &&
          (i >= e && i <= n.slideCount - 1 - e
            ? n.$slides
              .slice(i - e + r, i + e + 1)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
            : ((o = n.options.slidesToShow + i),
              t
                .slice(o - e + 1 + r, o + e + 2)
                .addClass("slick-active")
                .attr("aria-hidden", "false")),
            0 === i
              ? t
                .eq(t.length - 1 - n.options.slidesToShow)
                .addClass("slick-center")
              : i === n.slideCount - 1 &&
              t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
            .slice(i, i + n.options.slidesToShow)
            .addClass("slick-active")
            .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
            ? t.addClass("slick-active").attr("aria-hidden", "false")
            : ((s = n.slideCount % n.options.slidesToShow),
              (o = n.options.infinite === !0 ? n.options.slidesToShow + i : i),
              n.options.slidesToShow == n.options.slidesToScroll &&
                n.slideCount - i < n.options.slidesToShow
                ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
                : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (s.options.fade === !0 && (s.options.centerMode = !1),
          s.options.infinite === !0 &&
          s.options.fade === !1 &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
          s.options.centerMode === !0
            ? s.options.slidesToShow + 1
            : s.options.slidesToShow,
          e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      return (
        s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? void t.slideHandler(s, !1, !0)
          : void t.slideHandler(s)
      );
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
          !(
            (a.animating === !0 && a.options.waitForAnimate === !0) ||
            (a.options.fade === !0 && a.currentSlide === i)
          ))
      )
        return (
          e === !1 && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          a.options.infinite === !1 &&
            a.options.centerMode === !1 &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)
            ? void (
              a.options.fade === !1 &&
              ((o = a.currentSlide),
                t !== !0 && a.slideCount > a.options.slidesToShow
                  ? a.animateSlide(r, function () {
                    a.postSlide(o);
                  })
                  : a.postSlide(o))
            )
            : a.options.infinite === !1 &&
              a.options.centerMode === !0 &&
              (i < 0 || i > a.slideCount - a.options.slidesToScroll)
              ? void (
                a.options.fade === !1 &&
                ((o = a.currentSlide),
                  t !== !0 && a.slideCount > a.options.slidesToShow
                    ? a.animateSlide(r, function () {
                      a.postSlide(o);
                    })
                    : a.postSlide(o))
              )
              : (a.options.autoplay && clearInterval(a.autoPlayTimer),
                (s =
                  o < 0
                    ? a.slideCount % a.options.slidesToScroll !== 0
                      ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                      : a.slideCount + o
                    : o >= a.slideCount
                      ? a.slideCount % a.options.slidesToScroll !== 0
                        ? 0
                        : o - a.slideCount
                      : o),
                (a.animating = !0),
                a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                (n = a.currentSlide),
                (a.currentSlide = s),
                a.setSlideClasses(a.currentSlide),
                a.options.asNavFor &&
                ((l = a.getNavTarget()),
                  (l = l.slick("getSlick")),
                  l.slideCount <= l.options.slidesToShow &&
                  l.setSlideClasses(a.currentSlide)),
                a.updateDots(),
                a.updateArrows(),
                a.options.fade === !0
                  ? (t !== !0
                    ? (a.fadeSlideOut(n),
                      a.fadeSlide(s, function () {
                        a.postSlide(s);
                      }))
                    : a.postSlide(s),
                    void a.animateHeight())
                  : void (t !== !0 && a.slideCount > a.options.slidesToShow
                    ? a.animateSlide(d, function () {
                      a.postSlide(s);
                    })
                    : a.postSlide(s)))
        );
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        i.options.dots === !0 &&
        i.slideCount > i.options.slidesToShow &&
        i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)),
        o < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? s.options.rtl === !1
            ? "left"
            : "right"
          : o <= 360 && o >= 315
            ? s.options.rtl === !1
              ? "left"
              : "right"
            : o >= 135 && o <= 225
              ? s.options.rtl === !1
                ? "right"
                : "left"
              : s.options.verticalSwiping === !0
                ? o >= 35 && o <= 135
                  ? "down"
                  : "up"
                : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
          (o.shouldClick = !(o.touchObject.swipeLength > 10)),
          void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (o.touchObject.edgeHit === !0 &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
          o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
            (o.touchObject = {}),
            o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          e.options.swipe === !1 ||
          ("ontouchend" in document && e.options.swipe === !1) ||
          (e.options.draggable === !1 && i.type.indexOf("mouse") !== -1)
        )
      )
        switch (
        ((e.touchObject.fingerCount =
          i.originalEvent && void 0 !== i.originalEvent.touches
            ? i.originalEvent.touches.length
            : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          e.options.verticalSwiping === !0 &&
          (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
        ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (l.options.verticalSwiping === !0 &&
              (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
              l.touchObject.swipeLength > 4 &&
              ((l.swiping = !0), i.preventDefault()),
              (s =
                (l.options.rtl === !1 ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              l.options.verticalSwiping === !0 &&
              (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              l.options.infinite === !1 &&
              ((0 === l.currentSlide && "right" === t) ||
                (l.currentSlide >= l.getDotCount() && "left" === t)) &&
              ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              l.options.vertical === !1
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              l.options.verticalSwiping === !0 && (l.swipeLeft = e + o * s),
              l.options.fade !== !0 &&
              l.options.touchMove !== !1 &&
              (l.animating === !0
                ? ((l.swipeLeft = null), !1)
                : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      return (
        (t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow
          ? ((t.touchObject = {}), !1)
          : (void 0 !== i.originalEvent &&
            void 0 !== i.originalEvent.touches &&
            (e = i.originalEvent.touches[0]),
            (t.touchObject.startX = t.touchObject.curX =
              void 0 !== e ? e.pageX : i.clientX),
            (t.touchObject.startY = t.touchObject.curY =
              void 0 !== e ? e.pageY : i.clientY),
            void (t.dragging = !0))
      );
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
      var i = this;
      null !== i.$slidesCache &&
        (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
    }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
        e.htmlExpr.test(e.options.prevArrow) &&
        e.$prevArrow.remove(),
        e.$nextArrow &&
        e.htmlExpr.test(e.options.nextArrow) &&
        e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i,
        e = this;
      (i = Math.floor(e.options.slidesToShow / 2)),
        e.options.arrows === !0 &&
        e.slideCount > e.options.slidesToShow &&
        !e.options.infinite &&
        (e.$prevArrow
          .removeClass("slick-disabled")
          .attr("aria-disabled", "false"),
          e.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === e.currentSlide
            ? (e.$prevArrow
              .addClass("slick-disabled")
              .attr("aria-disabled", "true"),
              e.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : e.currentSlide >= e.slideCount - e.options.slidesToShow &&
              e.options.centerMode === !1
              ? (e.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
                e.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : e.currentSlide >= e.slideCount - 1 &&
              e.options.centerMode === !0 &&
              (e.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
                e.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
          i.$dots
            .find("li")
            .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
            .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || "undefined" == typeof s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
            "undefined" != typeof t)
        )
          return t;
      return o;
    });
});
function ReachGoal(goal) {
  try {
    dataLayer.push({ event: goal });
  } catch (e) {
    console.log("Google Tag Manager не установлен. Цель: ", goal);
  }
}
function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  return elemBottom <= docViewBottom;
}

jQuery(function ($) {
  $(document).ready(function () {
    document.addEventListener(
      "wpcf7mailsent",
      function () {
        if ("132" == event.detail.contactFormId) {
          $(".teaser-form-container").querySelector(".teaser-button").value =
            "Отправка...";
          $(".post-success").fadeIn("slow");
          $(".teaser-form-container").find("form").css("display", "none");
          // $("#wpcf7-f132-o1").css("display", "none");
        } else if ("180" == event.detail.contactFormId) {
          // document.querySelector('#modal-cta-1-form').$('form').fadeOut();
          $("#modal-cta-1-form").find("form").fadeOut();
          setTimeout(function () {
            $("#adv-success").fadeIn(500);
          }, 400);
        } else if ("184" == event.detail.contactFormId) {
          $(".map-form-wrapper").find("form").fadeOut();
          setTimeout(function () {
            $("#map-success").fadeIn(500);
          }, 400);
        } else if ("208" == event.detail.contactFormId) {
          $("#modal-calculator-laser-form").find("form").fadeOut();
          setTimeout(function () {
            $("#modal-calculator-laser-form .post-success").fadeIn(500);
          }, 400);
        } else if ("211" == event.detail.contactFormId) {
          $("#modal-calculator-lpg-form").find("form").fadeOut();
          setTimeout(function () {
            $("#modal-calculator-lpg-form .post-success").fadeIn(500);
          }, 400);
        } else if ("214" == event.detail.contactFormId) {
          $("#modal-calculator-shugaring-form").find("form").fadeOut();
          setTimeout(function () {
            $("#modal-calculator-shugaring-form .post-success").fadeIn(500);
          }, 400);
        }
      },
      false
    );

    $("a[data-scroll]").click(function () {
      var id = $(this).attr("href").match(/#.+$/)[0].substr(1);
      var offsetTop = $("div[id='" + id + "']").offset().top;
      $("body,html").animate({ scrollTop: offsetTop }, 900);
      return !1;
    });
    $("[data-fancybox]").fancybox({
      mobile: { clickContent: "close", clickSlide: "close" },
    });
    $('[data-fancybox^="custom"]').fancybox({
      baseClass: "fancybox-custom-layout",
      infobar: !1,
      buttons: ["close", "thumbs", "share"],
      animationEffect: "fade",
      transitionEffect: "fade",
      preventCaptionOverlap: !1,
      idleTime: !1,
      gutter: 0,
      caption: function (instance) {
        return $(this).data("caption");
      },
      mobile: { clickContent: "close", clickSlide: "close" },
    });
    $(window).on("load", function () {
      $(".animated").each(function () {
        if (isScrolledIntoView($(this))) {
          $(this).addClass("active");
        }
      });
    });
    $(window).on("scroll", function () {
      $(".animated").each(function () {
        if (isScrolledIntoView($(this))) {
          $(this).addClass("active");
        }
      });
    });
  });

  $(document).ready(function () {
    var container, button, menu, links, subMenus, i, len;
    container = document.getElementById("site-navigation");
    if (!container) {
      return;
    }
    button = container.getElementsByTagName("button")[0];
    if ("undefined" === typeof button) {
      return;
    }
    menu = container.getElementsByTagName("ul")[0];
    if ("undefined" === typeof menu) {
      button.style.display = "none";
      return;
    }
    menu.setAttribute("aria-expanded", "false");
    if (-1 === menu.className.indexOf("nav-menu")) {
      menu.className += " nav-menu";
    }
    button.onclick = function () {
      if (-1 !== container.className.indexOf("toggled")) {
        container.className = container.className.replace(" toggled", "");
        button.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-expanded", "false");
      } else {
        container.className += " toggled";
        button.setAttribute("aria-expanded", "true");
        menu.setAttribute("aria-expanded", "true");
      }
    };

    $("body").on("click", '[href*="#"]', function (e) {
      var fixed_offset = 0;
      $("html,body")
        .stop()
        .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
      e.preventDefault();
    });
  });

  $(document).ready(function () {
    $(".reviews-container").slick({
      dots: !0,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 600,
          settings: { slidesToShow: 2, slidesToScroll: 2 },
        },
        {
          breakpoint: 480,
          settings: { slidesToShow: 1, slidesToScroll: 1 },
        },
      ],
    });
  });
  $(document).ready(function () {
    $(".faq-bheader").click(function () {
      $(this).siblings(".faq-text").slideToggle();
      $(this).parent(".faq-block").toggleClass("active");
      return !1;
    });
  });
  $(document).ready(function () {
    ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map(
        "map",
        {
          center: [map_latitude, map_longtitude],
          zoom: parseInt(map_zoom),
          controls: [],
        },
        { searchControlProvider: "yandex#search" }
      );
      myMap.controls.add("zoomControl", { options: { size: "small" } });
      myMap.behaviors.disable("scrollZoom");
      $.each(map_markers, function (index, marker) {
        marker.id = new ymaps.Placemark(
          [marker.latitude, marker.longtitude],
          {
            balloonContentHeader: marker.header,
            balloonContentBody: marker.text,
            balloonContentFooter: marker.footer,
            hintContent: marker.header,
          },
          {
            iconLayout: "default#image",
            iconImageHref: marker.image_src,
            iconImageSize: [
              parseInt(marker.image_width),
              parseInt(marker.image_height),
            ],
            iconImageOffset: [
              parseInt(marker.offset_width),
              parseInt(marker.offset_height),
            ],
            hideIconOnBalloonOpen: !1,
          }
        );
        myMap.geoObjects.add(marker.id);
      });
    }
  });
  $(document).ready(function () {
    $("select").selectric();
    $(".calculator-shugaring-select")
      .selectric()
      .on("change", function () {
        var modal_id = $(this).data("modal_id"),
          select_value = $(this).val();
        $("#" + modal_id + "-input").val(select_value);
        $("#" + modal_id + "-div").html(select_value);
      });
    $(".calculator-shugaring-radio").change(function () {
      var modal_id = $(this).data("modal_id"),
        select_value = $(this).val();
      $("#" + modal_id + "-input").val(select_value);
      $("#" + modal_id + "-div").html(select_value);
    });
    $(".calculator-shugaring-text-input").on("change", function () {
      var modal_id = $(this).data("modal_id"),
        input_value = $(this).val();
      $("#" + modal_id + "-input").val(input_value);
      $("#" + modal_id + "-div").html(input_value);
    });
    $(".calculator-shugaring-checkbox").click(function () {
      var modal_id = $(this).data("modal_id"),
        checkbox_value = $(this).val();
      checkbox_inp = checkbox_value + ", ";
      checkbox_div = checkbox_value + ", ";
      if ($(this).is(":checked")) {
        $("#" + modal_id + "-input").val(
          $("#" + modal_id + "-input").val() + checkbox_inp
        );
        $("#" + modal_id + "-div").append(checkbox_div);
      } else {
        $("#" + modal_id + "-input").val(
          $("#" + modal_id + "-input")
            .val()
            .replace(checkbox_inp, "")
        );
        $("#" + modal_id + "-div").html(
          $("#" + modal_id + "-div")
            .html()
            .replace(checkbox_div, "")
        );
      }
    });
    $(".calculator-shugaring-checkboxes-header").click(function () {
      $(this)
        .parent(".calculator-shugaring-checkboxes-container")
        .toggleClass("active");
      return !1;
    });
  });
  $(document).ready(function () {
    $("select").selectric();
    $(".calculator-laser-select")
      .selectric()
      .on("change", function () {
        var modal_id = $(this).data("modal_id"),
          select_value = $(this).val();
        $("#" + modal_id + "-input").val(select_value);
        $("#" + modal_id + "-div").html(select_value);
      });
    $(".calculator-laser-radio").change(function () {
      var modal_id = $(this).data("modal_id"),
        select_value = $(this).val();
      $("#" + modal_id + "-input").val(select_value);
      $("#" + modal_id + "-div").html(select_value);
    });
    $(".calculator-laser-text-input").on("change", function () {
      var modal_id = $(this).data("modal_id"),
        input_value = $(this).val();
      $("#" + modal_id + "-input").val(input_value);
      $("#" + modal_id + "-div").html(input_value);
    });
    $(".calculator-laser-checkbox").click(function () {
      var modal_id = $(this).data("modal_id"),
        checkbox_value = $(this).val();
      checkbox_inp = checkbox_value + ", ";
      checkbox_div = checkbox_value + ", ";
      if ($(this).is(":checked")) {
        $("#" + modal_id + "-input").val(
          $("#" + modal_id + "-input").val() + checkbox_inp
        );
        $("#" + modal_id + "-div").append(checkbox_div);
      } else {
        $("#" + modal_id + "-input").val(
          $("#" + modal_id + "-input")
            .val()
            .replace(checkbox_inp, "")
        );
        $("#" + modal_id + "-div").html(
          $("#" + modal_id + "-div")
            .html()
            .replace(checkbox_div, "")
        );
      }
    });
    $(".calculator-laser-checkboxes-header").click(function () {
      $(this)
        .parent(".calculator-laser-checkboxes-container")
        .toggleClass("active");
      return !1;
    });
  });
  $(document).ready(function () {
    $("select").selectric();
    $(".calculator-lpg-select")
      .selectric()
      .on("change", function () {
        var modal_id = $(this).data("modal_id"),
          select_value = $(this).val();
        $("#" + modal_id + "-input").val(select_value);
        $("#" + modal_id + "-div").html(select_value);
      });
    $(".calculator-lpg-radio").change(function () {
      var modal_id = $(this).data("modal_id"),
        select_value = $(this).val();
      $("#" + modal_id + "-input").val(select_value);
      $("#" + modal_id + "-div").html(select_value);
    });
    $(".calculator-lpg-text-input").on("change", function () {
      var modal_id = $(this).data("modal_id"),
        input_value = $(this).val();
      $("#" + modal_id + "-input").val(input_value);
      $("#" + modal_id + "-div").html(input_value);
    });
    $(".calculator-lpg-checkbox").click(function () {
      var modal_id = $(this).data("modal_id"),
        checkbox_value = $(this).val();
      checkbox_inp = checkbox_value + ", ";
      checkbox_div = checkbox_value + ", ";
      if ($(this).is(":checked")) {
        $("#" + modal_id + "-input").val(
          $("#" + modal_id + "-input").val() + checkbox_inp
        );
        $("#" + modal_id + "-div").append(checkbox_div);
      } else {
        $("#" + modal_id + "-input").val(
          $("#" + modal_id + "-input")
            .val()
            .replace(checkbox_inp, "")
        );
        $("#" + modal_id + "-div").html(
          $("#" + modal_id + "-div")
            .html()
            .replace(checkbox_div, "")
        );
      }
    });
    $(".calculator-lpg-checkboxes-header").click(function () {
      $(this)
        .parent(".calculator-lpg-checkboxes-container")
        .toggleClass("active");
      return !1;
    });
  });
});
