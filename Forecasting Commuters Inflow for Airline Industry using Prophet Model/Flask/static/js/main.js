function slideshow() {
  return window.setInterval(function () {
    loop++,
      (loop %= 2),
      $("#home").attr(
        "style",
        "background: url(img/carousel" +
          loop +
          ".jpg) no-repeat center center fixed; display: table; height: 690px; position: relative; top: 0%; width: 100%; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;"
      );
  }, 6e3);
}
function pageTransition(t, e) {
  if (t != current) {
    if (
      ($("#navigation").css("background-color", "rgba(16, 22, 54, 0.2)"),
      0 == t ? (ss = slideshow()) : window.clearInterval(ss),
      isAnimating)
    )
      return !1;
    (isAnimating = !0),
      setAnimation(e > 0 && 68 > e ? e : Math.floor(67 * Math.random() + 1)),
      (backupnext = t);
    var n = $pages.eq(current),
      i = $pages.eq(t).addClass("pt-page-current");
    n.addClass(outClass).on(animEndEventName, function () {
      n.off(animEndEventName),
        (endCurrPage = !0),
        endNextPage && onEndAnimation(n, i);
    }),
      i.addClass(inClass).on(animEndEventName, function () {
        i.off(animEndEventName),
          (endNextPage = !0),
          endCurrPage && onEndAnimation(n, i);
      }),
      support || onEndAnimation(n, i),
      (current = backupnext);
  }
}
function onEndAnimation(t, e) {
  (endCurrPage = !1), (endNextPage = !1), resetPage(t, e), (isAnimating = !1);
}
function resetPage(t, e) {
  t.attr("class", t.data("originalClassList")),
    e.attr("class", e.data("originalClassList") + " pt-page-current");
}
function setAnimation(t) {
  switch (t) {
    case 1:
      (outClass = "pt-page-moveToLeft"), (inClass = "pt-page-moveFromRight");
      break;
    case 2:
      (outClass = "pt-page-moveToRight"), (inClass = "pt-page-moveFromLeft");
      break;
    case 3:
      (outClass = "pt-page-moveToTop"), (inClass = "pt-page-moveFromBottom");
      break;
    case 4:
      (outClass = "pt-page-moveToBottom"), (inClass = "pt-page-moveFromTop");
      break;
    case 5:
      (outClass = "pt-page-fade"),
        (inClass = "pt-page-moveFromRight pt-page-ontop");
      break;
    case 6:
      (outClass = "pt-page-fade"),
        (inClass = "pt-page-moveFromLeft pt-page-ontop");
      break;
    case 7:
      (outClass = "pt-page-fade"),
        (inClass = "pt-page-moveFromBottom pt-page-ontop");
      break;
    case 8:
      (outClass = "pt-page-fade"),
        (inClass = "pt-page-moveFromTop pt-page-ontop");
      break;
    case 9:
      (outClass = "pt-page-moveToLeftFade"),
        (inClass = "pt-page-moveFromRightFade");
      break;
    case 10:
      (outClass = "pt-page-moveToRightFade"),
        (inClass = "pt-page-moveFromLeftFade");
      break;
    case 11:
      (outClass = "pt-page-moveToTopFade"),
        (inClass = "pt-page-moveFromBottomFade");
      break;
    case 12:
      (outClass = "pt-page-moveToBottomFade"),
        (inClass = "pt-page-moveFromTopFade");
      break;
    case 13:
      (outClass = "pt-page-moveToLeftEasing pt-page-ontop"),
        (inClass = "pt-page-moveFromRight");
      break;
    case 14:
      (outClass = "pt-page-moveToRightEasing pt-page-ontop"),
        (inClass = "pt-page-moveFromLeft");
      break;
    case 15:
      (outClass = "pt-page-moveToTopEasing pt-page-ontop"),
        (inClass = "pt-page-moveFromBottom");
      break;
    case 16:
      (outClass = "pt-page-moveToBottomEasing pt-page-ontop"),
        (inClass = "pt-page-moveFromTop");
      break;
    case 17:
      (outClass = "pt-page-scaleDown"),
        (inClass = "pt-page-moveFromRight pt-page-ontop");
      break;
    case 18:
      (outClass = "pt-page-scaleDown"),
        (inClass = "pt-page-moveFromLeft pt-page-ontop");
      break;
    case 19:
      (outClass = "pt-page-scaleDown"),
        (inClass = "pt-page-moveFromBottom pt-page-ontop");
      break;
    case 20:
      (outClass = "pt-page-scaleDown"),
        (inClass = "pt-page-moveFromTop pt-page-ontop");
      break;
    case 21:
      (outClass = "pt-page-scaleDown"),
        (inClass = "pt-page-scaleUpDown pt-page-delay300");
      break;
    case 22:
      (outClass = "pt-page-scaleDownUp"),
        (inClass = "pt-page-scaleUp pt-page-delay300");
      break;
    case 23:
      (outClass = "pt-page-moveToLeft pt-page-ontop"),
        (inClass = "pt-page-scaleUp");
      break;
    case 24:
      (outClass = "pt-page-moveToRight pt-page-ontop"),
        (inClass = "pt-page-scaleUp");
      break;
    case 25:
      (outClass = "pt-page-moveToTop pt-page-ontop"),
        (inClass = "pt-page-scaleUp");
      break;
    case 26:
      (outClass = "pt-page-moveToBottom pt-page-ontop"),
        (inClass = "pt-page-scaleUp");
      break;
    case 27:
      (outClass = "pt-page-scaleDownCenter"),
        (inClass = "pt-page-scaleUpCenter pt-page-delay400");
      break;
    case 28:
      (outClass = "pt-page-rotateRightSideFirst"),
        (inClass = "pt-page-moveFromRight pt-page-delay200 pt-page-ontop");
      break;
    case 29:
      (outClass = "pt-page-rotateLeftSideFirst"),
        (inClass = "pt-page-moveFromLeft pt-page-delay200 pt-page-ontop");
      break;
    case 30:
      (outClass = "pt-page-rotateTopSideFirst"),
        (inClass = "pt-page-moveFromTop pt-page-delay200 pt-page-ontop");
      break;
    case 31:
      (outClass = "pt-page-rotateBottomSideFirst"),
        (inClass = "pt-page-moveFromBottom pt-page-delay200 pt-page-ontop");
      break;
    case 32:
      (outClass = "pt-page-flipOutRight"),
        (inClass = "pt-page-flipInLeft pt-page-delay500");
      break;
    case 33:
      (outClass = "pt-page-flipOutLeft"),
        (inClass = "pt-page-flipInRight pt-page-delay500");
      break;
    case 34:
      (outClass = "pt-page-flipOutTop"),
        (inClass = "pt-page-flipInBottom pt-page-delay500");
      break;
    case 35:
      (outClass = "pt-page-flipOutBottom"),
        (inClass = "pt-page-flipInTop pt-page-delay500");
      break;
    case 36:
      (outClass = "pt-page-rotateFall pt-page-ontop"),
        (inClass = "pt-page-scaleUp");
      break;
    case 37:
      (outClass = "pt-page-rotateOutNewspaper"),
        (inClass = "pt-page-rotateInNewspaper pt-page-delay500");
      break;
    case 38:
      (outClass = "pt-page-rotatePushLeft"),
        (inClass = "pt-page-moveFromRight");
      break;
    case 39:
      (outClass = "pt-page-rotatePushRight"),
        (inClass = "pt-page-moveFromLeft");
      break;
    case 40:
      (outClass = "pt-page-rotatePushTop"),
        (inClass = "pt-page-moveFromBottom");
      break;
    case 41:
      (outClass = "pt-page-rotatePushBottom"),
        (inClass = "pt-page-moveFromTop");
      break;
    case 42:
      (outClass = "pt-page-rotatePushLeft"),
        (inClass = "pt-page-rotatePullRight pt-page-delay180");
      break;
    case 43:
      (outClass = "pt-page-rotatePushRight"),
        (inClass = "pt-page-rotatePullLeft pt-page-delay180");
      break;
    case 44:
      (outClass = "pt-page-rotatePushTop"),
        (inClass = "pt-page-rotatePullBottom pt-page-delay180");
      break;
    case 45:
      (outClass = "pt-page-rotatePushBottom"),
        (inClass = "pt-page-rotatePullTop pt-page-delay180");
      break;
    case 46:
      (outClass = "pt-page-rotateFoldLeft"),
        (inClass = "pt-page-moveFromRightFade");
      break;
    case 47:
      (outClass = "pt-page-rotateFoldRight"),
        (inClass = "pt-page-moveFromLeftFade");
      break;
    case 48:
      (outClass = "pt-page-rotateFoldTop"),
        (inClass = "pt-page-moveFromBottomFade");
      break;
    case 49:
      (outClass = "pt-page-rotateFoldBottom"),
        (inClass = "pt-page-moveFromTopFade");
      break;
    case 50:
      (outClass = "pt-page-moveToRightFade"),
        (inClass = "pt-page-rotateUnfoldLeft");
      break;
    case 51:
      (outClass = "pt-page-moveToLeftFade"),
        (inClass = "pt-page-rotateUnfoldRight");
      break;
    case 52:
      (outClass = "pt-page-moveToBottomFade"),
        (inClass = "pt-page-rotateUnfoldTop");
      break;
    case 53:
      (outClass = "pt-page-moveToTopFade"),
        (inClass = "pt-page-rotateUnfoldBottom");
      break;
    case 54:
      (outClass = "pt-page-rotateRoomLeftOut pt-page-ontop"),
        (inClass = "pt-page-rotateRoomLeftIn");
      break;
    case 55:
      (outClass = "pt-page-rotateRoomRightOut pt-page-ontop"),
        (inClass = "pt-page-rotateRoomRightIn");
      break;
    case 56:
      (outClass = "pt-page-rotateRoomTopOut pt-page-ontop"),
        (inClass = "pt-page-rotateRoomTopIn");
      break;
    case 57:
      (outClass = "pt-page-rotateRoomBottomOut pt-page-ontop"),
        (inClass = "pt-page-rotateRoomBottomIn");
      break;
    case 58:
      (outClass = "pt-page-rotateCubeLeftOut pt-page-ontop"),
        (inClass = "pt-page-rotateCubeLeftIn");
      break;
    case 59:
      (outClass = "pt-page-rotateCubeRightOut pt-page-ontop"),
        (inClass = "pt-page-rotateCubeRightIn");
      break;
    case 60:
      (outClass = "pt-page-rotateCubeTopOut pt-page-ontop"),
        (inClass = "pt-page-rotateCubeTopIn");
      break;
    case 61:
      (outClass = "pt-page-rotateCubeBottomOut pt-page-ontop"),
        (inClass = "pt-page-rotateCubeBottomIn");
      break;
    case 62:
      (outClass = "pt-page-rotateCarouselLeftOut pt-page-ontop"),
        (inClass = "pt-page-rotateCarouselLeftIn");
      break;
    case 63:
      (outClass = "pt-page-rotateCarouselRightOut pt-page-ontop"),
        (inClass = "pt-page-rotateCarouselRightIn");
      break;
    case 64:
      (outClass = "pt-page-rotateCarouselTopOut pt-page-ontop"),
        (inClass = "pt-page-rotateCarouselTopIn");
      break;
    case 65:
      (outClass = "pt-page-rotateCarouselBottomOut pt-page-ontop"),
        (inClass = "pt-page-rotateCarouselBottomIn");
      break;
    case 66:
      (outClass = "pt-page-rotateSidesOut"),
        (inClass = "pt-page-rotateSidesIn pt-page-delay200");
      break;
    case 67:
      (outClass = "pt-page-rotateSlideOut"),
        (inClass = "pt-page-rotateSlideIn");
  }
}
function setnavbar() {
  $(window).width() < 768
    ? ($(".navcolor").css("height", "70px"),
      $(".top-rht").css("top", "75px"),
      $(".top-lft").css("top", "75px"))
    : ($(".navcolor").css("height", "50px"),
      $(".top-rht").css("top", "55px"),
      $(".top-lft").css("top", "55px"));
}
function onReady(t) {
  function e() {
    void 0 !== document.getElementsByTagName("body")[0] &&
      imagesloaded == totimg &&
      (console.log("totimg" + totimg + " imagesloaded" + imagesloaded),
      (document.getElementById("loading").innerHTML = "100%"),
      window.clearInterval(n),
      t.call(this));
  }
  var n = window.setInterval(e, 300);
}
function show(t, e) {
  document.getElementById(t).style.display = e ? "block" : "none";
}
if (
  (!(function (t, e) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = t.document
          ? e(t, !0)
          : function (t) {
              if (!t.document)
                throw new Error("jQuery requires a window with a document");
              return e(t);
            })
      : e(t);
  })("undefined" != typeof window ? window : this, function (t, e) {
    function n(t) {
      var e = t.length,
        n = J.type(t);
      return "function" === n || J.isWindow(t)
        ? !1
        : 1 === t.nodeType && e
        ? !0
        : "array" === n ||
          0 === e ||
          ("number" == typeof e && e > 0 && e - 1 in t);
    }
    function i(t, e, n) {
      if (J.isFunction(e))
        return J.grep(t, function (t, i) {
          return !!e.call(t, i, t) !== n;
        });
      if (e.nodeType)
        return J.grep(t, function (t) {
          return (t === e) !== n;
        });
      if ("string" == typeof e) {
        if (se.test(e)) return J.filter(e, t, n);
        e = J.filter(e, t);
      }
      return J.grep(t, function (t) {
        return Q.call(e, t) >= 0 !== n;
      });
    }
    function o(t, e) {
      for (; (t = t[e]) && 1 !== t.nodeType; );
      return t;
    }
    function a(t) {
      var e = (he[t] = {});
      return (
        J.each(t.match(fe) || [], function (t, n) {
          e[n] = !0;
        }),
        e
      );
    }
    function r() {
      Z.removeEventListener("DOMContentLoaded", r, !1),
        t.removeEventListener("load", r, !1),
        J.ready();
    }
    function s() {
      Object.defineProperty((this.cache = {}), 0, {
        get: function () {
          return {};
        },
      }),
        (this.expando = J.expando + s.uid++);
    }
    function l(t, e, n) {
      var i;
      if (void 0 === n && 1 === t.nodeType)
        if (
          ((i = "data-" + e.replace(xe, "-$1").toLowerCase()),
          (n = t.getAttribute(i)),
          "string" == typeof n)
        ) {
          try {
            n =
              "true" === n
                ? !0
                : "false" === n
                ? !1
                : "null" === n
                ? null
                : +n + "" === n
                ? +n
                : be.test(n)
                ? J.parseJSON(n)
                : n;
          } catch (o) {}
          ye.set(t, e, n);
        } else n = void 0;
      return n;
    }
    function c() {
      return !0;
    }
    function u() {
      return !1;
    }
    function p() {
      try {
        return Z.activeElement;
      } catch (t) {}
    }
    function d(t, e) {
      return J.nodeName(t, "table") &&
        J.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr")
        ? t.getElementsByTagName("tbody")[0] ||
            t.appendChild(t.ownerDocument.createElement("tbody"))
        : t;
    }
    function f(t) {
      return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
    }
    function h(t) {
      var e = Ne.exec(t.type);
      return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
    }
    function g(t, e) {
      for (var n = 0, i = t.length; i > n; n++)
        ve.set(t[n], "globalEval", !e || ve.get(e[n], "globalEval"));
    }
    function m(t, e) {
      var n, i, o, a, r, s, l, c;
      if (1 === e.nodeType) {
        if (
          ve.hasData(t) &&
          ((a = ve.access(t)), (r = ve.set(e, a)), (c = a.events))
        ) {
          delete r.handle, (r.events = {});
          for (o in c)
            for (n = 0, i = c[o].length; i > n; n++) J.event.add(e, o, c[o][n]);
        }
        ye.hasData(t) &&
          ((s = ye.access(t)), (l = J.extend({}, s)), ye.set(e, l));
      }
    }
    function v(t, e) {
      var n = t.getElementsByTagName
        ? t.getElementsByTagName(e || "*")
        : t.querySelectorAll
        ? t.querySelectorAll(e || "*")
        : [];
      return void 0 === e || (e && J.nodeName(t, e)) ? J.merge([t], n) : n;
    }
    function y(t, e) {
      var n = e.nodeName.toLowerCase();
      "input" === n && ke.test(t.type)
        ? (e.checked = t.checked)
        : ("input" === n || "textarea" === n) &&
          (e.defaultValue = t.defaultValue);
    }
    function b(e, n) {
      var i,
        o = J(n.createElement(e)).appendTo(n.body),
        a =
          t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0]))
            ? i.display
            : J.css(o[0], "display");
      return o.detach(), a;
    }
    function x(t) {
      var e = Z,
        n = Re[t];
      return (
        n ||
          ((n = b(t, e)),
          ("none" !== n && n) ||
            ((He = (
              He || J("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(e.documentElement)),
            (e = He[0].contentDocument),
            e.write(),
            e.close(),
            (n = b(t, e)),
            He.detach()),
          (Re[t] = n)),
        n
      );
    }
    function w(t, e, n) {
      var i,
        o,
        a,
        r,
        s = t.style;
      return (
        (n = n || We(t)),
        n && (r = n.getPropertyValue(e) || n[e]),
        n &&
          ("" !== r || J.contains(t.ownerDocument, t) || (r = J.style(t, e)),
          qe.test(r) &&
            Be.test(e) &&
            ((i = s.width),
            (o = s.minWidth),
            (a = s.maxWidth),
            (s.minWidth = s.maxWidth = s.width = r),
            (r = n.width),
            (s.width = i),
            (s.minWidth = o),
            (s.maxWidth = a))),
        void 0 !== r ? r + "" : r
      );
    }
    function _(t, e) {
      return {
        get: function () {
          return t()
            ? void delete this.get
            : (this.get = e).apply(this, arguments);
        },
      };
    }
    function C(t, e) {
      if (e in t) return e;
      for (var n = e[0].toUpperCase() + e.slice(1), i = e, o = Ye.length; o--; )
        if (((e = Ye[o] + n), e in t)) return e;
      return i;
    }
    function k(t, e, n) {
      var i = ze.exec(e);
      return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e;
    }
    function T(t, e, n, i, o) {
      for (
        var a = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
          r = 0;
        4 > a;
        a += 2
      )
        "margin" === n && (r += J.css(t, n + _e[a], !0, o)),
          i
            ? ("content" === n && (r -= J.css(t, "padding" + _e[a], !0, o)),
              "margin" !== n &&
                (r -= J.css(t, "border" + _e[a] + "Width", !0, o)))
            : ((r += J.css(t, "padding" + _e[a], !0, o)),
              "padding" !== n &&
                (r += J.css(t, "border" + _e[a] + "Width", !0, o)));
      return r;
    }
    function $(t, e, n) {
      var i = !0,
        o = "width" === e ? t.offsetWidth : t.offsetHeight,
        a = We(t),
        r = "border-box" === J.css(t, "boxSizing", !1, a);
      if (0 >= o || null == o) {
        if (
          ((o = w(t, e, a)),
          (0 > o || null == o) && (o = t.style[e]),
          qe.test(o))
        )
          return o;
        (i = r && (K.boxSizingReliable() || o === t.style[e])),
          (o = parseFloat(o) || 0);
      }
      return o + T(t, e, n || (r ? "border" : "content"), i, a) + "px";
    }
    function S(t, e) {
      for (var n, i, o, a = [], r = 0, s = t.length; s > r; r++)
        (i = t[r]),
          i.style &&
            ((a[r] = ve.get(i, "olddisplay")),
            (n = i.style.display),
            e
              ? (a[r] || "none" !== n || (i.style.display = ""),
                "" === i.style.display &&
                  Ce(i) &&
                  (a[r] = ve.access(i, "olddisplay", x(i.nodeName))))
              : ((o = Ce(i)),
                ("none" === n && o) ||
                  ve.set(i, "olddisplay", o ? n : J.css(i, "display"))));
      for (r = 0; s > r; r++)
        (i = t[r]),
          i.style &&
            ((e && "none" !== i.style.display && "" !== i.style.display) ||
              (i.style.display = e ? a[r] || "" : "none"));
      return t;
    }
    function E(t, e, n, i, o) {
      return new E.prototype.init(t, e, n, i, o);
    }
    function A() {
      return (
        setTimeout(function () {
          Ke = void 0;
        }),
        (Ke = J.now())
      );
    }
    function D(t, e) {
      var n,
        i = 0,
        o = { height: t };
      for (e = e ? 1 : 0; 4 > i; i += 2 - e)
        (n = _e[i]), (o["margin" + n] = o["padding" + n] = t);
      return e && (o.opacity = o.width = t), o;
    }
    function j(t, e, n) {
      for (
        var i, o = (nn[e] || []).concat(nn["*"]), a = 0, r = o.length;
        r > a;
        a++
      )
        if ((i = o[a].call(n, e, t))) return i;
    }
    function M(t, e, n) {
      var i,
        o,
        a,
        r,
        s,
        l,
        c,
        u,
        p = this,
        d = {},
        f = t.style,
        h = t.nodeType && Ce(t),
        g = ve.get(t, "fxshow");
      n.queue ||
        ((s = J._queueHooks(t, "fx")),
        null == s.unqueued &&
          ((s.unqueued = 0),
          (l = s.empty.fire),
          (s.empty.fire = function () {
            s.unqueued || l();
          })),
        s.unqueued++,
        p.always(function () {
          p.always(function () {
            s.unqueued--, J.queue(t, "fx").length || s.empty.fire();
          });
        })),
        1 === t.nodeType &&
          ("height" in e || "width" in e) &&
          ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
          (c = J.css(t, "display")),
          (u = "none" === c ? ve.get(t, "olddisplay") || x(t.nodeName) : c),
          "inline" === u &&
            "none" === J.css(t, "float") &&
            (f.display = "inline-block")),
        n.overflow &&
          ((f.overflow = "hidden"),
          p.always(function () {
            (f.overflow = n.overflow[0]),
              (f.overflowX = n.overflow[1]),
              (f.overflowY = n.overflow[2]);
          }));
      for (i in e)
        if (((o = e[i]), Ge.exec(o))) {
          if (
            (delete e[i],
            (a = a || "toggle" === o),
            o === (h ? "hide" : "show"))
          ) {
            if ("show" !== o || !g || void 0 === g[i]) continue;
            h = !0;
          }
          d[i] = (g && g[i]) || J.style(t, i);
        } else c = void 0;
      if (J.isEmptyObject(d))
        "inline" === ("none" === c ? x(t.nodeName) : c) && (f.display = c);
      else {
        g ? "hidden" in g && (h = g.hidden) : (g = ve.access(t, "fxshow", {})),
          a && (g.hidden = !h),
          h
            ? J(t).show()
            : p.done(function () {
                J(t).hide();
              }),
          p.done(function () {
            var e;
            ve.remove(t, "fxshow");
            for (e in d) J.style(t, e, d[e]);
          });
        for (i in d)
          (r = j(h ? g[i] : 0, i, p)),
            i in g ||
              ((g[i] = r.start),
              h &&
                ((r.end = r.start),
                (r.start = "width" === i || "height" === i ? 1 : 0)));
      }
    }
    function O(t, e) {
      var n, i, o, a, r;
      for (n in t)
        if (
          ((i = J.camelCase(n)),
          (o = e[i]),
          (a = t[n]),
          J.isArray(a) && ((o = a[1]), (a = t[n] = a[0])),
          n !== i && ((t[i] = a), delete t[n]),
          (r = J.cssHooks[i]),
          r && "expand" in r)
        ) {
          (a = r.expand(a)), delete t[i];
          for (n in a) n in t || ((t[n] = a[n]), (e[n] = o));
        } else e[i] = o;
    }
    function L(t, e, n) {
      var i,
        o,
        a = 0,
        r = en.length,
        s = J.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (o) return !1;
          for (
            var e = Ke || A(),
              n = Math.max(0, c.startTime + c.duration - e),
              i = n / c.duration || 0,
              a = 1 - i,
              r = 0,
              l = c.tweens.length;
            l > r;
            r++
          )
            c.tweens[r].run(a);
          return (
            s.notifyWith(t, [c, a, n]),
            1 > a && l ? n : (s.resolveWith(t, [c]), !1)
          );
        },
        c = s.promise({
          elem: t,
          props: J.extend({}, e),
          opts: J.extend(!0, { specialEasing: {} }, n),
          originalProperties: e,
          originalOptions: n,
          startTime: Ke || A(),
          duration: n.duration,
          tweens: [],
          createTween: function (e, n) {
            var i = J.Tween(
              t,
              c.opts,
              e,
              n,
              c.opts.specialEasing[e] || c.opts.easing
            );
            return c.tweens.push(i), i;
          },
          stop: function (e) {
            var n = 0,
              i = e ? c.tweens.length : 0;
            if (o) return this;
            for (o = !0; i > n; n++) c.tweens[n].run(1);
            return e ? s.resolveWith(t, [c, e]) : s.rejectWith(t, [c, e]), this;
          },
        }),
        u = c.props;
      for (O(u, c.opts.specialEasing); r > a; a++)
        if ((i = en[a].call(c, t, u, c.opts))) return i;
      return (
        J.map(u, j, c),
        J.isFunction(c.opts.start) && c.opts.start.call(t, c),
        J.fx.timer(J.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always)
      );
    }
    function F(t) {
      return function (e, n) {
        "string" != typeof e && ((n = e), (e = "*"));
        var i,
          o = 0,
          a = e.toLowerCase().match(fe) || [];
        if (J.isFunction(n))
          for (; (i = a[o++]); )
            "+" === i[0]
              ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n))
              : (t[i] = t[i] || []).push(n);
      };
    }
    function N(t, e, n, i) {
      function o(s) {
        var l;
        return (
          (a[s] = !0),
          J.each(t[s] || [], function (t, s) {
            var c = s(e, n, i);
            return "string" != typeof c || r || a[c]
              ? r
                ? !(l = c)
                : void 0
              : (e.dataTypes.unshift(c), o(c), !1);
          }),
          l
        );
      }
      var a = {},
        r = t === xn;
      return o(e.dataTypes[0]) || (!a["*"] && o("*"));
    }
    function P(t, e) {
      var n,
        i,
        o = J.ajaxSettings.flatOptions || {};
      for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
      return i && J.extend(!0, t, i), t;
    }
    function I(t, e, n) {
      for (var i, o, a, r, s = t.contents, l = t.dataTypes; "*" === l[0]; )
        l.shift(),
          void 0 === i &&
            (i = t.mimeType || e.getResponseHeader("Content-Type"));
      if (i)
        for (o in s)
          if (s[o] && s[o].test(i)) {
            l.unshift(o);
            break;
          }
      if (l[0] in n) a = l[0];
      else {
        for (o in n) {
          if (!l[0] || t.converters[o + " " + l[0]]) {
            a = o;
            break;
          }
          r || (r = o);
        }
        a = a || r;
      }
      return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0;
    }
    function H(t, e, n, i) {
      var o,
        a,
        r,
        s,
        l,
        c = {},
        u = t.dataTypes.slice();
      if (u[1]) for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
      for (a = u.shift(); a; )
        if (
          (t.responseFields[a] && (n[t.responseFields[a]] = e),
          !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
          (l = a),
          (a = u.shift()))
        )
          if ("*" === a) a = l;
          else if ("*" !== l && l !== a) {
            if (((r = c[l + " " + a] || c["* " + a]), !r))
              for (o in c)
                if (
                  ((s = o.split(" ")),
                  s[1] === a && (r = c[l + " " + s[0]] || c["* " + s[0]]))
                ) {
                  r === !0
                    ? (r = c[o])
                    : c[o] !== !0 && ((a = s[0]), u.unshift(s[1]));
                  break;
                }
            if (r !== !0)
              if (r && t["throws"]) e = r(e);
              else
                try {
                  e = r(e);
                } catch (p) {
                  return {
                    state: "parsererror",
                    error: r ? p : "No conversion from " + l + " to " + a,
                  };
                }
          }
      return { state: "success", data: e };
    }
    function R(t, e, n, i) {
      var o;
      if (J.isArray(e))
        J.each(e, function (e, o) {
          n || Tn.test(t)
            ? i(t, o)
            : R(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i);
        });
      else if (n || "object" !== J.type(e)) i(t, e);
      else for (o in e) R(t + "[" + o + "]", e[o], n, i);
    }
    function B(t) {
      return J.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
    }
    var q = [],
      W = q.slice,
      U = q.concat,
      z = q.push,
      Q = q.indexOf,
      X = {},
      V = X.toString,
      Y = X.hasOwnProperty,
      K = {},
      Z = t.document,
      G = "2.1.3",
      J = function (t, e) {
        return new J.fn.init(t, e);
      },
      te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ee = /^-ms-/,
      ne = /-([\da-z])/gi,
      ie = function (t, e) {
        return e.toUpperCase();
      };
    (J.fn = J.prototype =
      {
        jquery: G,
        constructor: J,
        selector: "",
        length: 0,
        toArray: function () {
          return W.call(this);
        },
        get: function (t) {
          return null != t
            ? 0 > t
              ? this[t + this.length]
              : this[t]
            : W.call(this);
        },
        pushStack: function (t) {
          var e = J.merge(this.constructor(), t);
          return (e.prevObject = this), (e.context = this.context), e;
        },
        each: function (t, e) {
          return J.each(this, t, e);
        },
        map: function (t) {
          return this.pushStack(
            J.map(this, function (e, n) {
              return t.call(e, n, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(W.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (t) {
          var e = this.length,
            n = +t + (0 > t ? e : 0);
          return this.pushStack(n >= 0 && e > n ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor(null);
        },
        push: z,
        sort: q.sort,
        splice: q.splice,
      }),
      (J.extend = J.fn.extend =
        function () {
          var t,
            e,
            n,
            i,
            o,
            a,
            r = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
          for (
            "boolean" == typeof r && ((c = r), (r = arguments[s] || {}), s++),
              "object" == typeof r || J.isFunction(r) || (r = {}),
              s === l && ((r = this), s--);
            l > s;
            s++
          )
            if (null != (t = arguments[s]))
              for (e in t)
                (n = r[e]),
                  (i = t[e]),
                  r !== i &&
                    (c && i && (J.isPlainObject(i) || (o = J.isArray(i)))
                      ? (o
                          ? ((o = !1), (a = n && J.isArray(n) ? n : []))
                          : (a = n && J.isPlainObject(n) ? n : {}),
                        (r[e] = J.extend(c, a, i)))
                      : void 0 !== i && (r[e] = i));
          return r;
        }),
      J.extend({
        expando: "jQuery" + (G + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
          throw new Error(t);
        },
        noop: function () {},
        isFunction: function (t) {
          return "function" === J.type(t);
        },
        isArray: Array.isArray,
        isWindow: function (t) {
          return null != t && t === t.window;
        },
        isNumeric: function (t) {
          return !J.isArray(t) && t - parseFloat(t) + 1 >= 0;
        },
        isPlainObject: function (t) {
          return "object" !== J.type(t) || t.nodeType || J.isWindow(t)
            ? !1
            : t.constructor && !Y.call(t.constructor.prototype, "isPrototypeOf")
            ? !1
            : !0;
        },
        isEmptyObject: function (t) {
          var e;
          for (e in t) return !1;
          return !0;
        },
        type: function (t) {
          return null == t
            ? t + ""
            : "object" == typeof t || "function" == typeof t
            ? X[V.call(t)] || "object"
            : typeof t;
        },
        globalEval: function (t) {
          var e,
            n = eval;
          (t = J.trim(t)),
            t &&
              (1 === t.indexOf("use strict")
                ? ((e = Z.createElement("script")),
                  (e.text = t),
                  Z.head.appendChild(e).parentNode.removeChild(e))
                : n(t));
        },
        camelCase: function (t) {
          return t.replace(ee, "ms-").replace(ne, ie);
        },
        nodeName: function (t, e) {
          return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function (t, e, i) {
          var o,
            a = 0,
            r = t.length,
            s = n(t);
          if (i) {
            if (s) for (; r > a && ((o = e.apply(t[a], i)), o !== !1); a++);
            else for (a in t) if (((o = e.apply(t[a], i)), o === !1)) break;
          } else if (s)
            for (; r > a && ((o = e.call(t[a], a, t[a])), o !== !1); a++);
          else for (a in t) if (((o = e.call(t[a], a, t[a])), o === !1)) break;
          return t;
        },
        trim: function (t) {
          return null == t ? "" : (t + "").replace(te, "");
        },
        makeArray: function (t, e) {
          var i = e || [];
          return (
            null != t &&
              (n(Object(t))
                ? J.merge(i, "string" == typeof t ? [t] : t)
                : z.call(i, t)),
            i
          );
        },
        inArray: function (t, e, n) {
          return null == e ? -1 : Q.call(e, t, n);
        },
        merge: function (t, e) {
          for (var n = +e.length, i = 0, o = t.length; n > i; i++)
            t[o++] = e[i];
          return (t.length = o), t;
        },
        grep: function (t, e, n) {
          for (var i, o = [], a = 0, r = t.length, s = !n; r > a; a++)
            (i = !e(t[a], a)), i !== s && o.push(t[a]);
          return o;
        },
        map: function (t, e, i) {
          var o,
            a = 0,
            r = t.length,
            s = n(t),
            l = [];
          if (s) for (; r > a; a++) (o = e(t[a], a, i)), null != o && l.push(o);
          else for (a in t) (o = e(t[a], a, i)), null != o && l.push(o);
          return U.apply([], l);
        },
        guid: 1,
        proxy: function (t, e) {
          var n, i, o;
          return (
            "string" == typeof e && ((n = t[e]), (e = t), (t = n)),
            J.isFunction(t)
              ? ((i = W.call(arguments, 2)),
                (o = function () {
                  return t.apply(e || this, i.concat(W.call(arguments)));
                }),
                (o.guid = t.guid = t.guid || J.guid++),
                o)
              : void 0
          );
        },
        now: Date.now,
        support: K,
      }),
      J.each(
        "Boolean Number String Function Array Date RegExp Object Error".split(
          " "
        ),
        function (t, e) {
          X["[object " + e + "]"] = e.toLowerCase();
        }
      );
    var oe = (function (t) {
      function e(t, e, n, i) {
        var o, a, r, s, l, c, p, f, h, g;
        if (
          ((e ? e.ownerDocument || e : R) !== M && j(e),
          (e = e || M),
          (n = n || []),
          (s = e.nodeType),
          "string" != typeof t || !t || (1 !== s && 9 !== s && 11 !== s))
        )
          return n;
        if (!i && L) {
          if (11 !== s && (o = ye.exec(t)))
            if ((r = o[1])) {
              if (9 === s) {
                if (((a = e.getElementById(r)), !a || !a.parentNode)) return n;
                if (a.id === r) return n.push(a), n;
              } else if (
                e.ownerDocument &&
                (a = e.ownerDocument.getElementById(r)) &&
                I(e, a) &&
                a.id === r
              )
                return n.push(a), n;
            } else {
              if (o[2]) return G.apply(n, e.getElementsByTagName(t)), n;
              if ((r = o[3]) && w.getElementsByClassName)
                return G.apply(n, e.getElementsByClassName(r)), n;
            }
          if (w.qsa && (!F || !F.test(t))) {
            if (
              ((f = p = H),
              (h = e),
              (g = 1 !== s && t),
              1 === s && "object" !== e.nodeName.toLowerCase())
            ) {
              for (
                c = T(t),
                  (p = e.getAttribute("id"))
                    ? (f = p.replace(xe, "\\$&"))
                    : e.setAttribute("id", f),
                  f = "[id='" + f + "'] ",
                  l = c.length;
                l--;

              )
                c[l] = f + d(c[l]);
              (h = (be.test(t) && u(e.parentNode)) || e), (g = c.join(","));
            }
            if (g)
              try {
                return G.apply(n, h.querySelectorAll(g)), n;
              } catch (m) {
              } finally {
                p || e.removeAttribute("id");
              }
          }
        }
        return S(t.replace(le, "$1"), e, n, i);
      }
      function n() {
        function t(n, i) {
          return (
            e.push(n + " ") > _.cacheLength && delete t[e.shift()],
            (t[n + " "] = i)
          );
        }
        var e = [];
        return t;
      }
      function i(t) {
        return (t[H] = !0), t;
      }
      function o(t) {
        var e = M.createElement("div");
        try {
          return !!t(e);
        } catch (n) {
          return !1;
        } finally {
          e.parentNode && e.parentNode.removeChild(e), (e = null);
        }
      }
      function a(t, e) {
        for (var n = t.split("|"), i = t.length; i--; ) _.attrHandle[n[i]] = e;
      }
      function r(t, e) {
        var n = e && t,
          i =
            n &&
            1 === t.nodeType &&
            1 === e.nodeType &&
            (~e.sourceIndex || X) - (~t.sourceIndex || X);
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
        return t ? 1 : -1;
      }
      function s(t) {
        return function (e) {
          var n = e.nodeName.toLowerCase();
          return "input" === n && e.type === t;
        };
      }
      function l(t) {
        return function (e) {
          var n = e.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && e.type === t;
        };
      }
      function c(t) {
        return i(function (e) {
          return (
            (e = +e),
            i(function (n, i) {
              for (var o, a = t([], n.length, e), r = a.length; r--; )
                n[(o = a[r])] && (n[o] = !(i[o] = n[o]));
            })
          );
        });
      }
      function u(t) {
        return t && "undefined" != typeof t.getElementsByTagName && t;
      }
      function p() {}
      function d(t) {
        for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
        return i;
      }
      function f(t, e, n) {
        var i = e.dir,
          o = n && "parentNode" === i,
          a = q++;
        return e.first
          ? function (e, n, a) {
              for (; (e = e[i]); ) if (1 === e.nodeType || o) return t(e, n, a);
            }
          : function (e, n, r) {
              var s,
                l,
                c = [B, a];
              if (r) {
                for (; (e = e[i]); )
                  if ((1 === e.nodeType || o) && t(e, n, r)) return !0;
              } else
                for (; (e = e[i]); )
                  if (1 === e.nodeType || o) {
                    if (
                      ((l = e[H] || (e[H] = {})),
                      (s = l[i]) && s[0] === B && s[1] === a)
                    )
                      return (c[2] = s[2]);
                    if (((l[i] = c), (c[2] = t(e, n, r)))) return !0;
                  }
            };
      }
      function h(t) {
        return t.length > 1
          ? function (e, n, i) {
              for (var o = t.length; o--; ) if (!t[o](e, n, i)) return !1;
              return !0;
            }
          : t[0];
      }
      function g(t, n, i) {
        for (var o = 0, a = n.length; a > o; o++) e(t, n[o], i);
        return i;
      }
      function m(t, e, n, i, o) {
        for (var a, r = [], s = 0, l = t.length, c = null != e; l > s; s++)
          (a = t[s]) && (!n || n(a, i, o)) && (r.push(a), c && e.push(s));
        return r;
      }
      function v(t, e, n, o, a, r) {
        return (
          o && !o[H] && (o = v(o)),
          a && !a[H] && (a = v(a, r)),
          i(function (i, r, s, l) {
            var c,
              u,
              p,
              d = [],
              f = [],
              h = r.length,
              v = i || g(e || "*", s.nodeType ? [s] : s, []),
              y = !t || (!i && e) ? v : m(v, d, t, s, l),
              b = n ? (a || (i ? t : h || o) ? [] : r) : y;
            if ((n && n(y, b, s, l), o))
              for (c = m(b, f), o(c, [], s, l), u = c.length; u--; )
                (p = c[u]) && (b[f[u]] = !(y[f[u]] = p));
            if (i) {
              if (a || t) {
                if (a) {
                  for (c = [], u = b.length; u--; )
                    (p = b[u]) && c.push((y[u] = p));
                  a(null, (b = []), c, l);
                }
                for (u = b.length; u--; )
                  (p = b[u]) &&
                    (c = a ? te(i, p) : d[u]) > -1 &&
                    (i[c] = !(r[c] = p));
              }
            } else (b = m(b === r ? b.splice(h, b.length) : b)), a ? a(null, r, b, l) : G.apply(r, b);
          })
        );
      }
      function y(t) {
        for (
          var e,
            n,
            i,
            o = t.length,
            a = _.relative[t[0].type],
            r = a || _.relative[" "],
            s = a ? 1 : 0,
            l = f(
              function (t) {
                return t === e;
              },
              r,
              !0
            ),
            c = f(
              function (t) {
                return te(e, t) > -1;
              },
              r,
              !0
            ),
            u = [
              function (t, n, i) {
                var o =
                  (!a && (i || n !== E)) ||
                  ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                return (e = null), o;
              },
            ];
          o > s;
          s++
        )
          if ((n = _.relative[t[s].type])) u = [f(h(u), n)];
          else {
            if (((n = _.filter[t[s].type].apply(null, t[s].matches)), n[H])) {
              for (i = ++s; o > i && !_.relative[t[i].type]; i++);
              return v(
                s > 1 && h(u),
                s > 1 &&
                  d(
                    t
                      .slice(0, s - 1)
                      .concat({ value: " " === t[s - 2].type ? "*" : "" })
                  ).replace(le, "$1"),
                n,
                i > s && y(t.slice(s, i)),
                o > i && y((t = t.slice(i))),
                o > i && d(t)
              );
            }
            u.push(n);
          }
        return h(u);
      }
      function b(t, n) {
        var o = n.length > 0,
          a = t.length > 0,
          r = function (i, r, s, l, c) {
            var u,
              p,
              d,
              f = 0,
              h = "0",
              g = i && [],
              v = [],
              y = E,
              b = i || (a && _.find.TAG("*", c)),
              x = (B += null == y ? 1 : Math.random() || 0.1),
              w = b.length;
            for (c && (E = r !== M && r); h !== w && null != (u = b[h]); h++) {
              if (a && u) {
                for (p = 0; (d = t[p++]); )
                  if (d(u, r, s)) {
                    l.push(u);
                    break;
                  }
                c && (B = x);
              }
              o && ((u = !d && u) && f--, i && g.push(u));
            }
            if (((f += h), o && h !== f)) {
              for (p = 0; (d = n[p++]); ) d(g, v, r, s);
              if (i) {
                if (f > 0) for (; h--; ) g[h] || v[h] || (v[h] = K.call(l));
                v = m(v);
              }
              G.apply(l, v),
                c && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l);
            }
            return c && ((B = x), (E = y)), g;
          };
        return o ? i(r) : r;
      }
      var x,
        w,
        _,
        C,
        k,
        T,
        $,
        S,
        E,
        A,
        D,
        j,
        M,
        O,
        L,
        F,
        N,
        P,
        I,
        H = "sizzle" + 1 * new Date(),
        R = t.document,
        B = 0,
        q = 0,
        W = n(),
        U = n(),
        z = n(),
        Q = function (t, e) {
          return t === e && (D = !0), 0;
        },
        X = 1 << 31,
        V = {}.hasOwnProperty,
        Y = [],
        K = Y.pop,
        Z = Y.push,
        G = Y.push,
        J = Y.slice,
        te = function (t, e) {
          for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n;
          return -1;
        },
        ee =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ne = "[\\x20\\t\\r\\n\\f]",
        ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        oe = ie.replace("w", "w#"),
        ae =
          "\\[" +
          ne +
          "*(" +
          ie +
          ")(?:" +
          ne +
          "*([*^$|!~]?=)" +
          ne +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          oe +
          "))|)" +
          ne +
          "*\\]",
        re =
          ":(" +
          ie +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          ae +
          ")*)|.*)\\)|)",
        se = new RegExp(ne + "+", "g"),
        le = new RegExp(
          "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
          "g"
        ),
        ce = new RegExp("^" + ne + "*," + ne + "*"),
        ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
        pe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
        de = new RegExp(re),
        fe = new RegExp("^" + oe + "$"),
        he = {
          ID: new RegExp("^#(" + ie + ")"),
          CLASS: new RegExp("^\\.(" + ie + ")"),
          TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + ae),
          PSEUDO: new RegExp("^" + re),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              ne +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              ne +
              "*(?:([+-]|)" +
              ne +
              "*(\\d+)|))" +
              ne +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + ee + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              ne +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              ne +
              "*((?:-\\d)?\\d*)" +
              ne +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        ge = /^(?:input|select|textarea|button)$/i,
        me = /^h\d$/i,
        ve = /^[^{]+\{\s*\[native \w/,
        ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        be = /[+~]/,
        xe = /'|\\/g,
        we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
        _e = function (t, e, n) {
          var i = "0x" + e - 65536;
          return i !== i || n
            ? e
            : 0 > i
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        },
        Ce = function () {
          j();
        };
      try {
        G.apply((Y = J.call(R.childNodes)), R.childNodes),
          Y[R.childNodes.length].nodeType;
      } catch (ke) {
        G = {
          apply: Y.length
            ? function (t, e) {
                Z.apply(t, J.call(e));
              }
            : function (t, e) {
                for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                t.length = n - 1;
              },
        };
      }
      (w = e.support = {}),
        (k = e.isXML =
          function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1;
          }),
        (j = e.setDocument =
          function (t) {
            var e,
              n,
              i = t ? t.ownerDocument || t : R;
            return i !== M && 9 === i.nodeType && i.documentElement
              ? ((M = i),
                (O = i.documentElement),
                (n = i.defaultView),
                n &&
                  n !== n.top &&
                  (n.addEventListener
                    ? n.addEventListener("unload", Ce, !1)
                    : n.attachEvent && n.attachEvent("onunload", Ce)),
                (L = !k(i)),
                (w.attributes = o(function (t) {
                  return (t.className = "i"), !t.getAttribute("className");
                })),
                (w.getElementsByTagName = o(function (t) {
                  return (
                    t.appendChild(i.createComment("")),
                    !t.getElementsByTagName("*").length
                  );
                })),
                (w.getElementsByClassName = ve.test(i.getElementsByClassName)),
                (w.getById = o(function (t) {
                  return (
                    (O.appendChild(t).id = H),
                    !i.getElementsByName || !i.getElementsByName(H).length
                  );
                })),
                w.getById
                  ? ((_.find.ID = function (t, e) {
                      if ("undefined" != typeof e.getElementById && L) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : [];
                      }
                    }),
                    (_.filter.ID = function (t) {
                      var e = t.replace(we, _e);
                      return function (t) {
                        return t.getAttribute("id") === e;
                      };
                    }))
                  : (delete _.find.ID,
                    (_.filter.ID = function (t) {
                      var e = t.replace(we, _e);
                      return function (t) {
                        var n =
                          "undefined" != typeof t.getAttributeNode &&
                          t.getAttributeNode("id");
                        return n && n.value === e;
                      };
                    })),
                (_.find.TAG = w.getElementsByTagName
                  ? function (t, e) {
                      return "undefined" != typeof e.getElementsByTagName
                        ? e.getElementsByTagName(t)
                        : w.qsa
                        ? e.querySelectorAll(t)
                        : void 0;
                    }
                  : function (t, e) {
                      var n,
                        i = [],
                        o = 0,
                        a = e.getElementsByTagName(t);
                      if ("*" === t) {
                        for (; (n = a[o++]); ) 1 === n.nodeType && i.push(n);
                        return i;
                      }
                      return a;
                    }),
                (_.find.CLASS =
                  w.getElementsByClassName &&
                  function (t, e) {
                    return L ? e.getElementsByClassName(t) : void 0;
                  }),
                (N = []),
                (F = []),
                (w.qsa = ve.test(i.querySelectorAll)) &&
                  (o(function (t) {
                    (O.appendChild(t).innerHTML =
                      "<a id='" +
                      H +
                      "'></a><select id='" +
                      H +
                      "-\f]' msallowcapture=''><option selected=''></option></select>"),
                      t.querySelectorAll("[msallowcapture^='']").length &&
                        F.push("[*^$]=" + ne + "*(?:''|\"\")"),
                      t.querySelectorAll("[selected]").length ||
                        F.push("\\[" + ne + "*(?:value|" + ee + ")"),
                      t.querySelectorAll("[id~=" + H + "-]").length ||
                        F.push("~="),
                      t.querySelectorAll(":checked").length ||
                        F.push(":checked"),
                      t.querySelectorAll("a#" + H + "+*").length ||
                        F.push(".#.+[+~]");
                  }),
                  o(function (t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"),
                      t.appendChild(e).setAttribute("name", "D"),
                      t.querySelectorAll("[name=d]").length &&
                        F.push("name" + ne + "*[*^$|!~]?="),
                      t.querySelectorAll(":enabled").length ||
                        F.push(":enabled", ":disabled"),
                      t.querySelectorAll("*,:x"),
                      F.push(",.*:");
                  })),
                (w.matchesSelector = ve.test(
                  (P =
                    O.matches ||
                    O.webkitMatchesSelector ||
                    O.mozMatchesSelector ||
                    O.oMatchesSelector ||
                    O.msMatchesSelector)
                )) &&
                  o(function (t) {
                    (w.disconnectedMatch = P.call(t, "div")),
                      P.call(t, "[s!='']:x"),
                      N.push("!=", re);
                  }),
                (F = F.length && new RegExp(F.join("|"))),
                (N = N.length && new RegExp(N.join("|"))),
                (e = ve.test(O.compareDocumentPosition)),
                (I =
                  e || ve.test(O.contains)
                    ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                          i = e && e.parentNode;
                        return (
                          t === i ||
                          !(
                            !i ||
                            1 !== i.nodeType ||
                            !(n.contains
                              ? n.contains(i)
                              : t.compareDocumentPosition &&
                                16 & t.compareDocumentPosition(i))
                          )
                        );
                      }
                    : function (t, e) {
                        if (e)
                          for (; (e = e.parentNode); ) if (e === t) return !0;
                        return !1;
                      }),
                (Q = e
                  ? function (t, e) {
                      if (t === e) return (D = !0), 0;
                      var n =
                        !t.compareDocumentPosition - !e.compareDocumentPosition;
                      return n
                        ? n
                        : ((n =
                            (t.ownerDocument || t) === (e.ownerDocument || e)
                              ? t.compareDocumentPosition(e)
                              : 1),
                          1 & n ||
                          (!w.sortDetached &&
                            e.compareDocumentPosition(t) === n)
                            ? t === i || (t.ownerDocument === R && I(R, t))
                              ? -1
                              : e === i || (e.ownerDocument === R && I(R, e))
                              ? 1
                              : A
                              ? te(A, t) - te(A, e)
                              : 0
                            : 4 & n
                            ? -1
                            : 1);
                    }
                  : function (t, e) {
                      if (t === e) return (D = !0), 0;
                      var n,
                        o = 0,
                        a = t.parentNode,
                        s = e.parentNode,
                        l = [t],
                        c = [e];
                      if (!a || !s)
                        return t === i
                          ? -1
                          : e === i
                          ? 1
                          : a
                          ? -1
                          : s
                          ? 1
                          : A
                          ? te(A, t) - te(A, e)
                          : 0;
                      if (a === s) return r(t, e);
                      for (n = t; (n = n.parentNode); ) l.unshift(n);
                      for (n = e; (n = n.parentNode); ) c.unshift(n);
                      for (; l[o] === c[o]; ) o++;
                      return o
                        ? r(l[o], c[o])
                        : l[o] === R
                        ? -1
                        : c[o] === R
                        ? 1
                        : 0;
                    }),
                i)
              : M;
          }),
        (e.matches = function (t, n) {
          return e(t, null, null, n);
        }),
        (e.matchesSelector = function (t, n) {
          if (
            ((t.ownerDocument || t) !== M && j(t),
            (n = n.replace(pe, "='$1']")),
            !(!w.matchesSelector || !L || (N && N.test(n)) || (F && F.test(n))))
          )
            try {
              var i = P.call(t, n);
              if (
                i ||
                w.disconnectedMatch ||
                (t.document && 11 !== t.document.nodeType)
              )
                return i;
            } catch (o) {}
          return e(n, M, null, [t]).length > 0;
        }),
        (e.contains = function (t, e) {
          return (t.ownerDocument || t) !== M && j(t), I(t, e);
        }),
        (e.attr = function (t, e) {
          (t.ownerDocument || t) !== M && j(t);
          var n = _.attrHandle[e.toLowerCase()],
            i =
              n && V.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
          return void 0 !== i
            ? i
            : w.attributes || !L
            ? t.getAttribute(e)
            : (i = t.getAttributeNode(e)) && i.specified
            ? i.value
            : null;
        }),
        (e.error = function (t) {
          throw new Error("Syntax error, unrecognized expression: " + t);
        }),
        (e.uniqueSort = function (t) {
          var e,
            n = [],
            i = 0,
            o = 0;
          if (
            ((D = !w.detectDuplicates),
            (A = !w.sortStable && t.slice(0)),
            t.sort(Q),
            D)
          ) {
            for (; (e = t[o++]); ) e === t[o] && (i = n.push(o));
            for (; i--; ) t.splice(n[i], 1);
          }
          return (A = null), t;
        }),
        (C = e.getText =
          function (t) {
            var e,
              n = "",
              i = 0,
              o = t.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) n += C(t);
              } else if (3 === o || 4 === o) return t.nodeValue;
            } else for (; (e = t[i++]); ) n += C(e);
            return n;
          }),
        (_ = e.selectors =
          {
            cacheLength: 50,
            createPseudo: i,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (t) {
                return (
                  (t[1] = t[1].replace(we, _e)),
                  (t[3] = (t[3] || t[4] || t[5] || "").replace(we, _e)),
                  "~=" === t[2] && (t[3] = " " + t[3] + " "),
                  t.slice(0, 4)
                );
              },
              CHILD: function (t) {
                return (
                  (t[1] = t[1].toLowerCase()),
                  "nth" === t[1].slice(0, 3)
                    ? (t[3] || e.error(t[0]),
                      (t[4] = +(t[4]
                        ? t[5] + (t[6] || 1)
                        : 2 * ("even" === t[3] || "odd" === t[3]))),
                      (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                    : t[3] && e.error(t[0]),
                  t
                );
              },
              PSEUDO: function (t) {
                var e,
                  n = !t[6] && t[2];
                return he.CHILD.test(t[0])
                  ? null
                  : (t[3]
                      ? (t[2] = t[4] || t[5] || "")
                      : n &&
                        de.test(n) &&
                        (e = T(n, !0)) &&
                        (e = n.indexOf(")", n.length - e) - n.length) &&
                        ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                    t.slice(0, 3));
              },
            },
            filter: {
              TAG: function (t) {
                var e = t.replace(we, _e).toLowerCase();
                return "*" === t
                  ? function () {
                      return !0;
                    }
                  : function (t) {
                      return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
              },
              CLASS: function (t) {
                var e = W[t + " "];
                return (
                  e ||
                  ((e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) &&
                    W(t, function (t) {
                      return e.test(
                        ("string" == typeof t.className && t.className) ||
                          ("undefined" != typeof t.getAttribute &&
                            t.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (t, n, i) {
                return function (o) {
                  var a = e.attr(o, t);
                  return null == a
                    ? "!=" === n
                    : n
                    ? ((a += ""),
                      "=" === n
                        ? a === i
                        : "!=" === n
                        ? a !== i
                        : "^=" === n
                        ? i && 0 === a.indexOf(i)
                        : "*=" === n
                        ? i && a.indexOf(i) > -1
                        : "$=" === n
                        ? i && a.slice(-i.length) === i
                        : "~=" === n
                        ? (" " + a.replace(se, " ") + " ").indexOf(i) > -1
                        : "|=" === n
                        ? a === i || a.slice(0, i.length + 1) === i + "-"
                        : !1)
                    : !0;
                };
              },
              CHILD: function (t, e, n, i, o) {
                var a = "nth" !== t.slice(0, 3),
                  r = "last" !== t.slice(-4),
                  s = "of-type" === e;
                return 1 === i && 0 === o
                  ? function (t) {
                      return !!t.parentNode;
                    }
                  : function (e, n, l) {
                      var c,
                        u,
                        p,
                        d,
                        f,
                        h,
                        g = a !== r ? "nextSibling" : "previousSibling",
                        m = e.parentNode,
                        v = s && e.nodeName.toLowerCase(),
                        y = !l && !s;
                      if (m) {
                        if (a) {
                          for (; g; ) {
                            for (p = e; (p = p[g]); )
                              if (
                                s
                                  ? p.nodeName.toLowerCase() === v
                                  : 1 === p.nodeType
                              )
                                return !1;
                            h = g = "only" === t && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [r ? m.firstChild : m.lastChild]), r && y)) {
                          for (
                            u = m[H] || (m[H] = {}),
                              c = u[t] || [],
                              f = c[0] === B && c[1],
                              d = c[0] === B && c[2],
                              p = f && m.childNodes[f];
                            (p = (++f && p && p[g]) || (d = f = 0) || h.pop());

                          )
                            if (1 === p.nodeType && ++d && p === e) {
                              u[t] = [B, f, d];
                              break;
                            }
                        } else if (
                          y &&
                          (c = (e[H] || (e[H] = {}))[t]) &&
                          c[0] === B
                        )
                          d = c[1];
                        else
                          for (
                            ;
                            (p =
                              (++f && p && p[g]) || (d = f = 0) || h.pop()) &&
                            ((s
                              ? p.nodeName.toLowerCase() !== v
                              : 1 !== p.nodeType) ||
                              !++d ||
                              (y && ((p[H] || (p[H] = {}))[t] = [B, d]),
                              p !== e));

                          );
                        return (d -= o), d === i || (d % i === 0 && d / i >= 0);
                      }
                    };
              },
              PSEUDO: function (t, n) {
                var o,
                  a =
                    _.pseudos[t] ||
                    _.setFilters[t.toLowerCase()] ||
                    e.error("unsupported pseudo: " + t);
                return a[H]
                  ? a(n)
                  : a.length > 1
                  ? ((o = [t, t, "", n]),
                    _.setFilters.hasOwnProperty(t.toLowerCase())
                      ? i(function (t, e) {
                          for (var i, o = a(t, n), r = o.length; r--; )
                            (i = te(t, o[r])), (t[i] = !(e[i] = o[r]));
                        })
                      : function (t) {
                          return a(t, 0, o);
                        })
                  : a;
              },
            },
            pseudos: {
              not: i(function (t) {
                var e = [],
                  n = [],
                  o = $(t.replace(le, "$1"));
                return o[H]
                  ? i(function (t, e, n, i) {
                      for (var a, r = o(t, null, i, []), s = t.length; s--; )
                        (a = r[s]) && (t[s] = !(e[s] = a));
                    })
                  : function (t, i, a) {
                      return (
                        (e[0] = t), o(e, null, a, n), (e[0] = null), !n.pop()
                      );
                    };
              }),
              has: i(function (t) {
                return function (n) {
                  return e(t, n).length > 0;
                };
              }),
              contains: i(function (t) {
                return (
                  (t = t.replace(we, _e)),
                  function (e) {
                    return (
                      (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                    );
                  }
                );
              }),
              lang: i(function (t) {
                return (
                  fe.test(t || "") || e.error("unsupported lang: " + t),
                  (t = t.replace(we, _e).toLowerCase()),
                  function (e) {
                    var n;
                    do
                      if (
                        (n = L
                          ? e.lang
                          : e.getAttribute("xml:lang") ||
                            e.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()),
                          n === t || 0 === n.indexOf(t + "-")
                        );
                    while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (e) {
                var n = t.location && t.location.hash;
                return n && n.slice(1) === e.id;
              },
              root: function (t) {
                return t === O;
              },
              focus: function (t) {
                return (
                  t === M.activeElement &&
                  (!M.hasFocus || M.hasFocus()) &&
                  !!(t.type || t.href || ~t.tabIndex)
                );
              },
              enabled: function (t) {
                return t.disabled === !1;
              },
              disabled: function (t) {
                return t.disabled === !0;
              },
              checked: function (t) {
                var e = t.nodeName.toLowerCase();
                return (
                  ("input" === e && !!t.checked) ||
                  ("option" === e && !!t.selected)
                );
              },
              selected: function (t) {
                return (
                  t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                );
              },
              empty: function (t) {
                for (t = t.firstChild; t; t = t.nextSibling)
                  if (t.nodeType < 6) return !1;
                return !0;
              },
              parent: function (t) {
                return !_.pseudos.empty(t);
              },
              header: function (t) {
                return me.test(t.nodeName);
              },
              input: function (t) {
                return ge.test(t.nodeName);
              },
              button: function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e && "button" === t.type) || "button" === e;
              },
              text: function (t) {
                var e;
                return (
                  "input" === t.nodeName.toLowerCase() &&
                  "text" === t.type &&
                  (null == (e = t.getAttribute("type")) ||
                    "text" === e.toLowerCase())
                );
              },
              first: c(function () {
                return [0];
              }),
              last: c(function (t, e) {
                return [e - 1];
              }),
              eq: c(function (t, e, n) {
                return [0 > n ? n + e : n];
              }),
              even: c(function (t, e) {
                for (var n = 0; e > n; n += 2) t.push(n);
                return t;
              }),
              odd: c(function (t, e) {
                for (var n = 1; e > n; n += 2) t.push(n);
                return t;
              }),
              lt: c(function (t, e, n) {
                for (var i = 0 > n ? n + e : n; --i >= 0; ) t.push(i);
                return t;
              }),
              gt: c(function (t, e, n) {
                for (var i = 0 > n ? n + e : n; ++i < e; ) t.push(i);
                return t;
              }),
            },
          }),
        (_.pseudos.nth = _.pseudos.eq);
      for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        _.pseudos[x] = s(x);
      for (x in { submit: !0, reset: !0 }) _.pseudos[x] = l(x);
      return (
        (p.prototype = _.filters = _.pseudos),
        (_.setFilters = new p()),
        (T = e.tokenize =
          function (t, n) {
            var i,
              o,
              a,
              r,
              s,
              l,
              c,
              u = U[t + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = t, l = [], c = _.preFilter; s; ) {
              (!i || (o = ce.exec(s))) &&
                (o && (s = s.slice(o[0].length) || s), l.push((a = []))),
                (i = !1),
                (o = ue.exec(s)) &&
                  ((i = o.shift()),
                  a.push({ value: i, type: o[0].replace(le, " ") }),
                  (s = s.slice(i.length)));
              for (r in _.filter)
                !(o = he[r].exec(s)) ||
                  (c[r] && !(o = c[r](o))) ||
                  ((i = o.shift()),
                  a.push({ value: i, type: r, matches: o }),
                  (s = s.slice(i.length)));
              if (!i) break;
            }
            return n ? s.length : s ? e.error(t) : U(t, l).slice(0);
          }),
        ($ = e.compile =
          function (t, e) {
            var n,
              i = [],
              o = [],
              a = z[t + " "];
            if (!a) {
              for (e || (e = T(t)), n = e.length; n--; )
                (a = y(e[n])), a[H] ? i.push(a) : o.push(a);
              (a = z(t, b(o, i))), (a.selector = t);
            }
            return a;
          }),
        (S = e.select =
          function (t, e, n, i) {
            var o,
              a,
              r,
              s,
              l,
              c = "function" == typeof t && t,
              p = !i && T((t = c.selector || t));
            if (((n = n || []), 1 === p.length)) {
              if (
                ((a = p[0] = p[0].slice(0)),
                a.length > 2 &&
                  "ID" === (r = a[0]).type &&
                  w.getById &&
                  9 === e.nodeType &&
                  L &&
                  _.relative[a[1].type])
              ) {
                if (
                  ((e = (_.find.ID(r.matches[0].replace(we, _e), e) || [])[0]),
                  !e)
                )
                  return n;
                c && (e = e.parentNode), (t = t.slice(a.shift().value.length));
              }
              for (
                o = he.needsContext.test(t) ? 0 : a.length;
                o-- && ((r = a[o]), !_.relative[(s = r.type)]);

              )
                if (
                  (l = _.find[s]) &&
                  (i = l(
                    r.matches[0].replace(we, _e),
                    (be.test(a[0].type) && u(e.parentNode)) || e
                  ))
                ) {
                  if ((a.splice(o, 1), (t = i.length && d(a)), !t))
                    return G.apply(n, i), n;
                  break;
                }
            }
            return (
              (c || $(t, p))(i, e, !L, n, (be.test(t) && u(e.parentNode)) || e),
              n
            );
          }),
        (w.sortStable = H.split("").sort(Q).join("") === H),
        (w.detectDuplicates = !!D),
        j(),
        (w.sortDetached = o(function (t) {
          return 1 & t.compareDocumentPosition(M.createElement("div"));
        })),
        o(function (t) {
          return (
            (t.innerHTML = "<a href='#'></a>"),
            "#" === t.firstChild.getAttribute("href")
          );
        }) ||
          a("type|href|height|width", function (t, e, n) {
            return n
              ? void 0
              : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
          }),
        (w.attributes &&
          o(function (t) {
            return (
              (t.innerHTML = "<input/>"),
              t.firstChild.setAttribute("value", ""),
              "" === t.firstChild.getAttribute("value")
            );
          })) ||
          a("value", function (t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase()
              ? void 0
              : t.defaultValue;
          }),
        o(function (t) {
          return null == t.getAttribute("disabled");
        }) ||
          a(ee, function (t, e, n) {
            var i;
            return n
              ? void 0
              : t[e] === !0
              ? e.toLowerCase()
              : (i = t.getAttributeNode(e)) && i.specified
              ? i.value
              : null;
          }),
        e
      );
    })(t);
    (J.find = oe),
      (J.expr = oe.selectors),
      (J.expr[":"] = J.expr.pseudos),
      (J.unique = oe.uniqueSort),
      (J.text = oe.getText),
      (J.isXMLDoc = oe.isXML),
      (J.contains = oe.contains);
    var ae = J.expr.match.needsContext,
      re = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      se = /^.[^:#\[\.,]*$/;
    (J.filter = function (t, e, n) {
      var i = e[0];
      return (
        n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === i.nodeType
          ? J.find.matchesSelector(i, t)
            ? [i]
            : []
          : J.find.matches(
              t,
              J.grep(e, function (t) {
                return 1 === t.nodeType;
              })
            )
      );
    }),
      J.fn.extend({
        find: function (t) {
          var e,
            n = this.length,
            i = [],
            o = this;
          if ("string" != typeof t)
            return this.pushStack(
              J(t).filter(function () {
                for (e = 0; n > e; e++) if (J.contains(o[e], this)) return !0;
              })
            );
          for (e = 0; n > e; e++) J.find(t, o[e], i);
          return (
            (i = this.pushStack(n > 1 ? J.unique(i) : i)),
            (i.selector = this.selector ? this.selector + " " + t : t),
            i
          );
        },
        filter: function (t) {
          return this.pushStack(i(this, t || [], !1));
        },
        not: function (t) {
          return this.pushStack(i(this, t || [], !0));
        },
        is: function (t) {
          return !!i(
            this,
            "string" == typeof t && ae.test(t) ? J(t) : t || [],
            !1
          ).length;
        },
      });
    var le,
      ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      ue = (J.fn.init = function (t, e) {
        var n, i;
        if (!t) return this;
        if ("string" == typeof t) {
          if (
            ((n =
              "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                ? [null, t, null]
                : ce.exec(t)),
            !n || (!n[1] && e))
          )
            return !e || e.jquery
              ? (e || le).find(t)
              : this.constructor(e).find(t);
          if (n[1]) {
            if (
              ((e = e instanceof J ? e[0] : e),
              J.merge(
                this,
                J.parseHTML(
                  n[1],
                  e && e.nodeType ? e.ownerDocument || e : Z,
                  !0
                )
              ),
              re.test(n[1]) && J.isPlainObject(e))
            )
              for (n in e)
                J.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
            return this;
          }
          return (
            (i = Z.getElementById(n[2])),
            i && i.parentNode && ((this.length = 1), (this[0] = i)),
            (this.context = Z),
            (this.selector = t),
            this
          );
        }
        return t.nodeType
          ? ((this.context = this[0] = t), (this.length = 1), this)
          : J.isFunction(t)
          ? "undefined" != typeof le.ready
            ? le.ready(t)
            : t(J)
          : (void 0 !== t.selector &&
              ((this.selector = t.selector), (this.context = t.context)),
            J.makeArray(t, this));
      });
    (ue.prototype = J.fn), (le = J(Z));
    var pe = /^(?:parents|prev(?:Until|All))/,
      de = { children: !0, contents: !0, next: !0, prev: !0 };
    J.extend({
      dir: function (t, e, n) {
        for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
          if (1 === t.nodeType) {
            if (o && J(t).is(n)) break;
            i.push(t);
          }
        return i;
      },
      sibling: function (t, e) {
        for (var n = []; t; t = t.nextSibling)
          1 === t.nodeType && t !== e && n.push(t);
        return n;
      },
    }),
      J.fn.extend({
        has: function (t) {
          var e = J(t, this),
            n = e.length;
          return this.filter(function () {
            for (var t = 0; n > t; t++) if (J.contains(this, e[t])) return !0;
          });
        },
        closest: function (t, e) {
          for (
            var n,
              i = 0,
              o = this.length,
              a = [],
              r =
                ae.test(t) || "string" != typeof t
                  ? J(t, e || this.context)
                  : 0;
            o > i;
            i++
          )
            for (n = this[i]; n && n !== e; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (r
                  ? r.index(n) > -1
                  : 1 === n.nodeType && J.find.matchesSelector(n, t))
              ) {
                a.push(n);
                break;
              }
          return this.pushStack(a.length > 1 ? J.unique(a) : a);
        },
        index: function (t) {
          return t
            ? "string" == typeof t
              ? Q.call(J(t), this[0])
              : Q.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (t, e) {
          return this.pushStack(J.unique(J.merge(this.get(), J(t, e))));
        },
        addBack: function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        },
      }),
      J.each(
        {
          parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
          },
          parents: function (t) {
            return J.dir(t, "parentNode");
          },
          parentsUntil: function (t, e, n) {
            return J.dir(t, "parentNode", n);
          },
          next: function (t) {
            return o(t, "nextSibling");
          },
          prev: function (t) {
            return o(t, "previousSibling");
          },
          nextAll: function (t) {
            return J.dir(t, "nextSibling");
          },
          prevAll: function (t) {
            return J.dir(t, "previousSibling");
          },
          nextUntil: function (t, e, n) {
            return J.dir(t, "nextSibling", n);
          },
          prevUntil: function (t, e, n) {
            return J.dir(t, "previousSibling", n);
          },
          siblings: function (t) {
            return J.sibling((t.parentNode || {}).firstChild, t);
          },
          children: function (t) {
            return J.sibling(t.firstChild);
          },
          contents: function (t) {
            return t.contentDocument || J.merge([], t.childNodes);
          },
        },
        function (t, e) {
          J.fn[t] = function (n, i) {
            var o = J.map(this, e, n);
            return (
              "Until" !== t.slice(-5) && (i = n),
              i && "string" == typeof i && (o = J.filter(i, o)),
              this.length > 1 &&
                (de[t] || J.unique(o), pe.test(t) && o.reverse()),
              this.pushStack(o)
            );
          };
        }
      );
    var fe = /\S+/g,
      he = {};
    (J.Callbacks = function (t) {
      t = "string" == typeof t ? he[t] || a(t) : J.extend({}, t);
      var e,
        n,
        i,
        o,
        r,
        s,
        l = [],
        c = !t.once && [],
        u = function (a) {
          for (
            e = t.memory && a, n = !0, s = o || 0, o = 0, r = l.length, i = !0;
            l && r > s;
            s++
          )
            if (l[s].apply(a[0], a[1]) === !1 && t.stopOnFalse) {
              e = !1;
              break;
            }
          (i = !1),
            l && (c ? c.length && u(c.shift()) : e ? (l = []) : p.disable());
        },
        p = {
          add: function () {
            if (l) {
              var n = l.length;
              !(function a(e) {
                J.each(e, function (e, n) {
                  var i = J.type(n);
                  "function" === i
                    ? (t.unique && p.has(n)) || l.push(n)
                    : n && n.length && "string" !== i && a(n);
                });
              })(arguments),
                i ? (r = l.length) : e && ((o = n), u(e));
            }
            return this;
          },
          remove: function () {
            return (
              l &&
                J.each(arguments, function (t, e) {
                  for (var n; (n = J.inArray(e, l, n)) > -1; )
                    l.splice(n, 1), i && (r >= n && r--, s >= n && s--);
                }),
              this
            );
          },
          has: function (t) {
            return t ? J.inArray(t, l) > -1 : !(!l || !l.length);
          },
          empty: function () {
            return (l = []), (r = 0), this;
          },
          disable: function () {
            return (l = c = e = void 0), this;
          },
          disabled: function () {
            return !l;
          },
          lock: function () {
            return (c = void 0), e || p.disable(), this;
          },
          locked: function () {
            return !c;
          },
          fireWith: function (t, e) {
            return (
              !l ||
                (n && !c) ||
                ((e = e || []),
                (e = [t, e.slice ? e.slice() : e]),
                i ? c.push(e) : u(e)),
              this
            );
          },
          fire: function () {
            return p.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!n;
          },
        };
      return p;
    }),
      J.extend({
        Deferred: function (t) {
          var e = [
              ["resolve", "done", J.Callbacks("once memory"), "resolved"],
              ["reject", "fail", J.Callbacks("once memory"), "rejected"],
              ["notify", "progress", J.Callbacks("memory")],
            ],
            n = "pending",
            i = {
              state: function () {
                return n;
              },
              always: function () {
                return o.done(arguments).fail(arguments), this;
              },
              then: function () {
                var t = arguments;
                return J.Deferred(function (n) {
                  J.each(e, function (e, a) {
                    var r = J.isFunction(t[e]) && t[e];
                    o[a[1]](function () {
                      var t = r && r.apply(this, arguments);
                      t && J.isFunction(t.promise)
                        ? t
                            .promise()
                            .done(n.resolve)
                            .fail(n.reject)
                            .progress(n.notify)
                        : n[a[0] + "With"](
                            this === i ? n.promise() : this,
                            r ? [t] : arguments
                          );
                    });
                  }),
                    (t = null);
                }).promise();
              },
              promise: function (t) {
                return null != t ? J.extend(t, i) : i;
              },
            },
            o = {};
          return (
            (i.pipe = i.then),
            J.each(e, function (t, a) {
              var r = a[2],
                s = a[3];
              (i[a[1]] = r.add),
                s &&
                  r.add(
                    function () {
                      n = s;
                    },
                    e[1 ^ t][2].disable,
                    e[2][2].lock
                  ),
                (o[a[0]] = function () {
                  return (
                    o[a[0] + "With"](this === o ? i : this, arguments), this
                  );
                }),
                (o[a[0] + "With"] = r.fireWith);
            }),
            i.promise(o),
            t && t.call(o, o),
            o
          );
        },
        when: function (t) {
          var e,
            n,
            i,
            o = 0,
            a = W.call(arguments),
            r = a.length,
            s = 1 !== r || (t && J.isFunction(t.promise)) ? r : 0,
            l = 1 === s ? t : J.Deferred(),
            c = function (t, n, i) {
              return function (o) {
                (n[t] = this),
                  (i[t] = arguments.length > 1 ? W.call(arguments) : o),
                  i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i);
              };
            };
          if (r > 1)
            for (
              e = new Array(r), n = new Array(r), i = new Array(r);
              r > o;
              o++
            )
              a[o] && J.isFunction(a[o].promise)
                ? a[o]
                    .promise()
                    .done(c(o, i, a))
                    .fail(l.reject)
                    .progress(c(o, n, e))
                : --s;
          return s || l.resolveWith(i, a), l.promise();
        },
      });
    var ge;
    (J.fn.ready = function (t) {
      return J.ready.promise().done(t), this;
    }),
      J.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
          t ? J.readyWait++ : J.ready(!0);
        },
        ready: function (t) {
          (t === !0 ? --J.readyWait : J.isReady) ||
            ((J.isReady = !0),
            (t !== !0 && --J.readyWait > 0) ||
              (ge.resolveWith(Z, [J]),
              J.fn.triggerHandler &&
                (J(Z).triggerHandler("ready"), J(Z).off("ready"))));
        },
      }),
      (J.ready.promise = function (e) {
        return (
          ge ||
            ((ge = J.Deferred()),
            "complete" === Z.readyState
              ? setTimeout(J.ready)
              : (Z.addEventListener("DOMContentLoaded", r, !1),
                t.addEventListener("load", r, !1))),
          ge.promise(e)
        );
      }),
      J.ready.promise();
    var me = (J.access = function (t, e, n, i, o, a, r) {
      var s = 0,
        l = t.length,
        c = null == n;
      if ("object" === J.type(n)) {
        o = !0;
        for (s in n) J.access(t, e, s, n[s], !0, a, r);
      } else if (
        void 0 !== i &&
        ((o = !0),
        J.isFunction(i) || (r = !0),
        c &&
          (r
            ? (e.call(t, i), (e = null))
            : ((c = e),
              (e = function (t, e, n) {
                return c.call(J(t), n);
              }))),
        e)
      )
        for (; l > s; s++) e(t[s], n, r ? i : i.call(t[s], s, e(t[s], n)));
      return o ? t : c ? e.call(t) : l ? e(t[0], n) : a;
    });
    (J.acceptData = function (t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    }),
      (s.uid = 1),
      (s.accepts = J.acceptData),
      (s.prototype = {
        key: function (t) {
          if (!s.accepts(t)) return 0;
          var e = {},
            n = t[this.expando];
          if (!n) {
            n = s.uid++;
            try {
              (e[this.expando] = { value: n }), Object.defineProperties(t, e);
            } catch (i) {
              (e[this.expando] = n), J.extend(t, e);
            }
          }
          return this.cache[n] || (this.cache[n] = {}), n;
        },
        set: function (t, e, n) {
          var i,
            o = this.key(t),
            a = this.cache[o];
          if ("string" == typeof e) a[e] = n;
          else if (J.isEmptyObject(a)) J.extend(this.cache[o], e);
          else for (i in e) a[i] = e[i];
          return a;
        },
        get: function (t, e) {
          var n = this.cache[this.key(t)];
          return void 0 === e ? n : n[e];
        },
        access: function (t, e, n) {
          var i;
          return void 0 === e || (e && "string" == typeof e && void 0 === n)
            ? ((i = this.get(t, e)),
              void 0 !== i ? i : this.get(t, J.camelCase(e)))
            : (this.set(t, e, n), void 0 !== n ? n : e);
        },
        remove: function (t, e) {
          var n,
            i,
            o,
            a = this.key(t),
            r = this.cache[a];
          if (void 0 === e) this.cache[a] = {};
          else {
            J.isArray(e)
              ? (i = e.concat(e.map(J.camelCase)))
              : ((o = J.camelCase(e)),
                e in r
                  ? (i = [e, o])
                  : ((i = o), (i = i in r ? [i] : i.match(fe) || []))),
              (n = i.length);
            for (; n--; ) delete r[i[n]];
          }
        },
        hasData: function (t) {
          return !J.isEmptyObject(this.cache[t[this.expando]] || {});
        },
        discard: function (t) {
          t[this.expando] && delete this.cache[t[this.expando]];
        },
      });
    var ve = new s(),
      ye = new s(),
      be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      xe = /([A-Z])/g;
    J.extend({
      hasData: function (t) {
        return ye.hasData(t) || ve.hasData(t);
      },
      data: function (t, e, n) {
        return ye.access(t, e, n);
      },
      removeData: function (t, e) {
        ye.remove(t, e);
      },
      _data: function (t, e, n) {
        return ve.access(t, e, n);
      },
      _removeData: function (t, e) {
        ve.remove(t, e);
      },
    }),
      J.fn.extend({
        data: function (t, e) {
          var n,
            i,
            o,
            a = this[0],
            r = a && a.attributes;
          if (void 0 === t) {
            if (
              this.length &&
              ((o = ye.get(a)), 1 === a.nodeType && !ve.get(a, "hasDataAttrs"))
            ) {
              for (n = r.length; n--; )
                r[n] &&
                  ((i = r[n].name),
                  0 === i.indexOf("data-") &&
                    ((i = J.camelCase(i.slice(5))), l(a, i, o[i])));
              ve.set(a, "hasDataAttrs", !0);
            }
            return o;
          }
          return "object" == typeof t
            ? this.each(function () {
                ye.set(this, t);
              })
            : me(
                this,
                function (e) {
                  var n,
                    i = J.camelCase(t);
                  if (a && void 0 === e) {
                    if (((n = ye.get(a, t)), void 0 !== n)) return n;
                    if (((n = ye.get(a, i)), void 0 !== n)) return n;
                    if (((n = l(a, i, void 0)), void 0 !== n)) return n;
                  } else
                    this.each(function () {
                      var n = ye.get(this, i);
                      ye.set(this, i, e),
                        -1 !== t.indexOf("-") &&
                          void 0 !== n &&
                          ye.set(this, t, e);
                    });
                },
                null,
                e,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (t) {
          return this.each(function () {
            ye.remove(this, t);
          });
        },
      }),
      J.extend({
        queue: function (t, e, n) {
          var i;
          return t
            ? ((e = (e || "fx") + "queue"),
              (i = ve.get(t, e)),
              n &&
                (!i || J.isArray(n)
                  ? (i = ve.access(t, e, J.makeArray(n)))
                  : i.push(n)),
              i || [])
            : void 0;
        },
        dequeue: function (t, e) {
          e = e || "fx";
          var n = J.queue(t, e),
            i = n.length,
            o = n.shift(),
            a = J._queueHooks(t, e),
            r = function () {
              J.dequeue(t, e);
            };
          "inprogress" === o && ((o = n.shift()), i--),
            o &&
              ("fx" === e && n.unshift("inprogress"),
              delete a.stop,
              o.call(t, r, a)),
            !i && a && a.empty.fire();
        },
        _queueHooks: function (t, e) {
          var n = e + "queueHooks";
          return (
            ve.get(t, n) ||
            ve.access(t, n, {
              empty: J.Callbacks("once memory").add(function () {
                ve.remove(t, [e + "queue", n]);
              }),
            })
          );
        },
      }),
      J.fn.extend({
        queue: function (t, e) {
          var n = 2;
          return (
            "string" != typeof t && ((e = t), (t = "fx"), n--),
            arguments.length < n
              ? J.queue(this[0], t)
              : void 0 === e
              ? this
              : this.each(function () {
                  var n = J.queue(this, t, e);
                  J._queueHooks(this, t),
                    "fx" === t && "inprogress" !== n[0] && J.dequeue(this, t);
                })
          );
        },
        dequeue: function (t) {
          return this.each(function () {
            J.dequeue(this, t);
          });
        },
        clearQueue: function (t) {
          return this.queue(t || "fx", []);
        },
        promise: function (t, e) {
          var n,
            i = 1,
            o = J.Deferred(),
            a = this,
            r = this.length,
            s = function () {
              --i || o.resolveWith(a, [a]);
            };
          for (
            "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
            r--;

          )
            (n = ve.get(a[r], t + "queueHooks")),
              n && n.empty && (i++, n.empty.add(s));
          return s(), o.promise(e);
        },
      });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      _e = ["Top", "Right", "Bottom", "Left"],
      Ce = function (t, e) {
        return (
          (t = e || t),
          "none" === J.css(t, "display") || !J.contains(t.ownerDocument, t)
        );
      },
      ke = /^(?:checkbox|radio)$/i;
    !(function () {
      var t = Z.createDocumentFragment(),
        e = t.appendChild(Z.createElement("div")),
        n = Z.createElement("input");
      n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        e.appendChild(n),
        (K.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (e.innerHTML = "<textarea>x</textarea>"),
        (K.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
    })();
    var Te = "undefined";
    K.focusinBubbles = "onfocusin" in t;
    var $e = /^key/,
      Se = /^(?:mouse|pointer|contextmenu)|click/,
      Ee = /^(?:focusinfocus|focusoutblur)$/,
      Ae = /^([^.]*)(?:\.(.+)|)$/;
    (J.event = {
      global: {},
      add: function (t, e, n, i, o) {
        var a,
          r,
          s,
          l,
          c,
          u,
          p,
          d,
          f,
          h,
          g,
          m = ve.get(t);
        if (m)
          for (
            n.handler && ((a = n), (n = a.handler), (o = a.selector)),
              n.guid || (n.guid = J.guid++),
              (l = m.events) || (l = m.events = {}),
              (r = m.handle) ||
                (r = m.handle =
                  function (e) {
                    return typeof J !== Te && J.event.triggered !== e.type
                      ? J.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
              e = (e || "").match(fe) || [""],
              c = e.length;
            c--;

          )
            (s = Ae.exec(e[c]) || []),
              (f = g = s[1]),
              (h = (s[2] || "").split(".").sort()),
              f &&
                ((p = J.event.special[f] || {}),
                (f = (o ? p.delegateType : p.bindType) || f),
                (p = J.event.special[f] || {}),
                (u = J.extend(
                  {
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && J.expr.match.needsContext.test(o),
                    namespace: h.join("."),
                  },
                  a
                )),
                (d = l[f]) ||
                  ((d = l[f] = []),
                  (d.delegateCount = 0),
                  (p.setup && p.setup.call(t, i, h, r) !== !1) ||
                    (t.addEventListener && t.addEventListener(f, r, !1))),
                p.add &&
                  (p.add.call(t, u),
                  u.handler.guid || (u.handler.guid = n.guid)),
                o ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                (J.event.global[f] = !0));
      },
      remove: function (t, e, n, i, o) {
        var a,
          r,
          s,
          l,
          c,
          u,
          p,
          d,
          f,
          h,
          g,
          m = ve.hasData(t) && ve.get(t);
        if (m && (l = m.events)) {
          for (e = (e || "").match(fe) || [""], c = e.length; c--; )
            if (
              ((s = Ae.exec(e[c]) || []),
              (f = g = s[1]),
              (h = (s[2] || "").split(".").sort()),
              f)
            ) {
              for (
                p = J.event.special[f] || {},
                  f = (i ? p.delegateType : p.bindType) || f,
                  d = l[f] || [],
                  s =
                    s[2] &&
                    new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  r = a = d.length;
                a--;

              )
                (u = d[a]),
                  (!o && g !== u.origType) ||
                    (n && n.guid !== u.guid) ||
                    (s && !s.test(u.namespace)) ||
                    (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                    (d.splice(a, 1),
                    u.selector && d.delegateCount--,
                    p.remove && p.remove.call(t, u));
              r &&
                !d.length &&
                ((p.teardown && p.teardown.call(t, h, m.handle) !== !1) ||
                  J.removeEvent(t, f, m.handle),
                delete l[f]);
            } else for (f in l) J.event.remove(t, f + e[c], n, i, !0);
          J.isEmptyObject(l) && (delete m.handle, ve.remove(t, "events"));
        }
      },
      trigger: function (e, n, i, o) {
        var a,
          r,
          s,
          l,
          c,
          u,
          p,
          d = [i || Z],
          f = Y.call(e, "type") ? e.type : e,
          h = Y.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((r = s = i = i || Z),
          3 !== i.nodeType &&
            8 !== i.nodeType &&
            !Ee.test(f + J.event.triggered) &&
            (f.indexOf(".") >= 0 &&
              ((h = f.split(".")), (f = h.shift()), h.sort()),
            (c = f.indexOf(":") < 0 && "on" + f),
            (e = e[J.expando] ? e : new J.Event(f, "object" == typeof e && e)),
            (e.isTrigger = o ? 2 : 3),
            (e.namespace = h.join(".")),
            (e.namespace_re = e.namespace
              ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = i),
            (n = null == n ? [e] : J.makeArray(n, [e])),
            (p = J.event.special[f] || {}),
            o || !p.trigger || p.trigger.apply(i, n) !== !1))
        ) {
          if (!o && !p.noBubble && !J.isWindow(i)) {
            for (
              l = p.delegateType || f, Ee.test(l + f) || (r = r.parentNode);
              r;
              r = r.parentNode
            )
              d.push(r), (s = r);
            s === (i.ownerDocument || Z) &&
              d.push(s.defaultView || s.parentWindow || t);
          }
          for (a = 0; (r = d[a++]) && !e.isPropagationStopped(); )
            (e.type = a > 1 ? l : p.bindType || f),
              (u = (ve.get(r, "events") || {})[e.type] && ve.get(r, "handle")),
              u && u.apply(r, n),
              (u = c && r[c]),
              u &&
                u.apply &&
                J.acceptData(r) &&
                ((e.result = u.apply(r, n)),
                e.result === !1 && e.preventDefault());
          return (
            (e.type = f),
            o ||
              e.isDefaultPrevented() ||
              (p._default && p._default.apply(d.pop(), n) !== !1) ||
              !J.acceptData(i) ||
              (c &&
                J.isFunction(i[f]) &&
                !J.isWindow(i) &&
                ((s = i[c]),
                s && (i[c] = null),
                (J.event.triggered = f),
                i[f](),
                (J.event.triggered = void 0),
                s && (i[c] = s))),
            e.result
          );
        }
      },
      dispatch: function (t) {
        t = J.event.fix(t);
        var e,
          n,
          i,
          o,
          a,
          r = [],
          s = W.call(arguments),
          l = (ve.get(this, "events") || {})[t.type] || [],
          c = J.event.special[t.type] || {};
        if (
          ((s[0] = t),
          (t.delegateTarget = this),
          !c.preDispatch || c.preDispatch.call(this, t) !== !1)
        ) {
          for (
            r = J.event.handlers.call(this, t, l), e = 0;
            (o = r[e++]) && !t.isPropagationStopped();

          )
            for (
              t.currentTarget = o.elem, n = 0;
              (a = o.handlers[n++]) && !t.isImmediatePropagationStopped();

            )
              (!t.namespace_re || t.namespace_re.test(a.namespace)) &&
                ((t.handleObj = a),
                (t.data = a.data),
                (i = (
                  (J.event.special[a.origType] || {}).handle || a.handler
                ).apply(o.elem, s)),
                void 0 !== i &&
                  (t.result = i) === !1 &&
                  (t.preventDefault(), t.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, t), t.result;
        }
      },
      handlers: function (t, e) {
        var n,
          i,
          o,
          a,
          r = [],
          s = e.delegateCount,
          l = t.target;
        if (s && l.nodeType && (!t.button || "click" !== t.type))
          for (; l !== this; l = l.parentNode || this)
            if (l.disabled !== !0 || "click" !== t.type) {
              for (i = [], n = 0; s > n; n++)
                (a = e[n]),
                  (o = a.selector + " "),
                  void 0 === i[o] &&
                    (i[o] = a.needsContext
                      ? J(o, this).index(l) >= 0
                      : J.find(o, this, null, [l]).length),
                  i[o] && i.push(a);
              i.length && r.push({ elem: l, handlers: i });
            }
        return s < e.length && r.push({ elem: this, handlers: e.slice(s) }), r;
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (t, e) {
          return (
            null == t.which &&
              (t.which = null != e.charCode ? e.charCode : e.keyCode),
            t
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (t, e) {
          var n,
            i,
            o,
            a = e.button;
          return (
            null == t.pageX &&
              null != e.clientX &&
              ((n = t.target.ownerDocument || Z),
              (i = n.documentElement),
              (o = n.body),
              (t.pageX =
                e.clientX +
                ((i && i.scrollLeft) || (o && o.scrollLeft) || 0) -
                ((i && i.clientLeft) || (o && o.clientLeft) || 0)),
              (t.pageY =
                e.clientY +
                ((i && i.scrollTop) || (o && o.scrollTop) || 0) -
                ((i && i.clientTop) || (o && o.clientTop) || 0))),
            t.which ||
              void 0 === a ||
              (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
            t
          );
        },
      },
      fix: function (t) {
        if (t[J.expando]) return t;
        var e,
          n,
          i,
          o = t.type,
          a = t,
          r = this.fixHooks[o];
        for (
          r ||
            (this.fixHooks[o] = r =
              Se.test(o) ? this.mouseHooks : $e.test(o) ? this.keyHooks : {}),
            i = r.props ? this.props.concat(r.props) : this.props,
            t = new J.Event(a),
            e = i.length;
          e--;

        )
          (n = i[e]), (t[n] = a[n]);
        return (
          t.target || (t.target = Z),
          3 === t.target.nodeType && (t.target = t.target.parentNode),
          r.filter ? r.filter(t, a) : t
        );
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            return this !== p() && this.focus ? (this.focus(), !1) : void 0;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === p() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return "checkbox" === this.type &&
              this.click &&
              J.nodeName(this, "input")
              ? (this.click(), !1)
              : void 0;
          },
          _default: function (t) {
            return J.nodeName(t.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (t) {
            void 0 !== t.result &&
              t.originalEvent &&
              (t.originalEvent.returnValue = t.result);
          },
        },
      },
      simulate: function (t, e, n, i) {
        var o = J.extend(new J.Event(), n, {
          type: t,
          isSimulated: !0,
          originalEvent: {},
        });
        i ? J.event.trigger(o, null, e) : J.event.dispatch.call(e, o),
          o.isDefaultPrevented() && n.preventDefault();
      },
    }),
      (J.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1);
      }),
      (J.Event = function (t, e) {
        return this instanceof J.Event
          ? (t && t.type
              ? ((this.originalEvent = t),
                (this.type = t.type),
                (this.isDefaultPrevented =
                  t.defaultPrevented ||
                  (void 0 === t.defaultPrevented && t.returnValue === !1)
                    ? c
                    : u))
              : (this.type = t),
            e && J.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || J.now()),
            void (this[J.expando] = !0))
          : new J.Event(t, e);
      }),
      (J.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function () {
          var t = this.originalEvent;
          (this.isDefaultPrevented = c),
            t && t.preventDefault && t.preventDefault();
        },
        stopPropagation: function () {
          var t = this.originalEvent;
          (this.isPropagationStopped = c),
            t && t.stopPropagation && t.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var t = this.originalEvent;
          (this.isImmediatePropagationStopped = c),
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      J.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (t, e) {
          J.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
              var n,
                i = this,
                o = t.relatedTarget,
                a = t.handleObj;
              return (
                (!o || (o !== i && !J.contains(i, o))) &&
                  ((t.type = a.origType),
                  (n = a.handler.apply(this, arguments)),
                  (t.type = e)),
                n
              );
            },
          };
        }
      ),
      K.focusinBubbles ||
        J.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
          var n = function (t) {
            J.event.simulate(e, t.target, J.event.fix(t), !0);
          };
          J.event.special[e] = {
            setup: function () {
              var i = this.ownerDocument || this,
                o = ve.access(i, e);
              o || i.addEventListener(t, n, !0), ve.access(i, e, (o || 0) + 1);
            },
            teardown: function () {
              var i = this.ownerDocument || this,
                o = ve.access(i, e) - 1;
              o
                ? ve.access(i, e, o)
                : (i.removeEventListener(t, n, !0), ve.remove(i, e));
            },
          };
        }),
      J.fn.extend({
        on: function (t, e, n, i, o) {
          var a, r;
          if ("object" == typeof t) {
            "string" != typeof e && ((n = n || e), (e = void 0));
            for (r in t) this.on(r, e, n, t[r], o);
            return this;
          }
          if (
            (null == n && null == i
              ? ((i = e), (n = e = void 0))
              : null == i &&
                ("string" == typeof e
                  ? ((i = n), (n = void 0))
                  : ((i = n), (n = e), (e = void 0))),
            i === !1)
          )
            i = u;
          else if (!i) return this;
          return (
            1 === o &&
              ((a = i),
              (i = function (t) {
                return J().off(t), a.apply(this, arguments);
              }),
              (i.guid = a.guid || (a.guid = J.guid++))),
            this.each(function () {
              J.event.add(this, t, i, n, e);
            })
          );
        },
        one: function (t, e, n, i) {
          return this.on(t, e, n, i, 1);
        },
        off: function (t, e, n) {
          var i, o;
          if (t && t.preventDefault && t.handleObj)
            return (
              (i = t.handleObj),
              J(t.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" == typeof t) {
            for (o in t) this.off(o, e, t[o]);
            return this;
          }
          return (
            (e === !1 || "function" == typeof e) && ((n = e), (e = void 0)),
            n === !1 && (n = u),
            this.each(function () {
              J.event.remove(this, t, n, e);
            })
          );
        },
        trigger: function (t, e) {
          return this.each(function () {
            J.event.trigger(t, e, this);
          });
        },
        triggerHandler: function (t, e) {
          var n = this[0];
          return n ? J.event.trigger(t, e, n, !0) : void 0;
        },
      });
    var De =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      je = /<([\w:]+)/,
      Me = /<|&#?\w+;/,
      Oe = /<(?:script|style|link)/i,
      Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Fe = /^$|\/(?:java|ecma)script/i,
      Ne = /^true\/(.*)/,
      Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Ie = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    (Ie.optgroup = Ie.option),
      (Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead),
      (Ie.th = Ie.td),
      J.extend({
        clone: function (t, e, n) {
          var i,
            o,
            a,
            r,
            s = t.cloneNode(!0),
            l = J.contains(t.ownerDocument, t);
          if (
            !(
              K.noCloneChecked ||
              (1 !== t.nodeType && 11 !== t.nodeType) ||
              J.isXMLDoc(t)
            )
          )
            for (r = v(s), a = v(t), i = 0, o = a.length; o > i; i++)
              y(a[i], r[i]);
          if (e)
            if (n)
              for (
                a = a || v(t), r = r || v(s), i = 0, o = a.length;
                o > i;
                i++
              )
                m(a[i], r[i]);
            else m(t, s);
          return (
            (r = v(s, "script")), r.length > 0 && g(r, !l && v(t, "script")), s
          );
        },
        buildFragment: function (t, e, n, i) {
          for (
            var o,
              a,
              r,
              s,
              l,
              c,
              u = e.createDocumentFragment(),
              p = [],
              d = 0,
              f = t.length;
            f > d;
            d++
          )
            if (((o = t[d]), o || 0 === o))
              if ("object" === J.type(o)) J.merge(p, o.nodeType ? [o] : o);
              else if (Me.test(o)) {
                for (
                  a = a || u.appendChild(e.createElement("div")),
                    r = (je.exec(o) || ["", ""])[1].toLowerCase(),
                    s = Ie[r] || Ie._default,
                    a.innerHTML = s[1] + o.replace(De, "<$1></$2>") + s[2],
                    c = s[0];
                  c--;

                )
                  a = a.lastChild;
                J.merge(p, a.childNodes),
                  (a = u.firstChild),
                  (a.textContent = "");
              } else p.push(e.createTextNode(o));
          for (u.textContent = "", d = 0; (o = p[d++]); )
            if (
              (!i || -1 === J.inArray(o, i)) &&
              ((l = J.contains(o.ownerDocument, o)),
              (a = v(u.appendChild(o), "script")),
              l && g(a),
              n)
            )
              for (c = 0; (o = a[c++]); ) Fe.test(o.type || "") && n.push(o);
          return u;
        },
        cleanData: function (t) {
          for (
            var e, n, i, o, a = J.event.special, r = 0;
            void 0 !== (n = t[r]);
            r++
          ) {
            if (
              J.acceptData(n) &&
              ((o = n[ve.expando]), o && (e = ve.cache[o]))
            ) {
              if (e.events)
                for (i in e.events)
                  a[i] ? J.event.remove(n, i) : J.removeEvent(n, i, e.handle);
              ve.cache[o] && delete ve.cache[o];
            }
            delete ye.cache[n[ye.expando]];
          }
        },
      }),
      J.fn.extend({
        text: function (t) {
          return me(
            this,
            function (t) {
              return void 0 === t
                ? J.text(this)
                : this.empty().each(function () {
                    (1 === this.nodeType ||
                      11 === this.nodeType ||
                      9 === this.nodeType) &&
                      (this.textContent = t);
                  });
            },
            null,
            t,
            arguments.length
          );
        },
        append: function () {
          return this.domManip(arguments, function (t) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var e = d(this, t);
              e.appendChild(t);
            }
          });
        },
        prepend: function () {
          return this.domManip(arguments, function (t) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var e = d(this, t);
              e.insertBefore(t, e.firstChild);
            }
          });
        },
        before: function () {
          return this.domManip(arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this);
          });
        },
        after: function () {
          return this.domManip(arguments, function (t) {
            this.parentNode &&
              this.parentNode.insertBefore(t, this.nextSibling);
          });
        },
        remove: function (t, e) {
          for (
            var n, i = t ? J.filter(t, this) : this, o = 0;
            null != (n = i[o]);
            o++
          )
            e || 1 !== n.nodeType || J.cleanData(v(n)),
              n.parentNode &&
                (e && J.contains(n.ownerDocument, n) && g(v(n, "script")),
                n.parentNode.removeChild(n));
          return this;
        },
        empty: function () {
          for (var t, e = 0; null != (t = this[e]); e++)
            1 === t.nodeType && (J.cleanData(v(t, !1)), (t.textContent = ""));
          return this;
        },
        clone: function (t, e) {
          return (
            (t = null == t ? !1 : t),
            (e = null == e ? t : e),
            this.map(function () {
              return J.clone(this, t, e);
            })
          );
        },
        html: function (t) {
          return me(
            this,
            function (t) {
              var e = this[0] || {},
                n = 0,
                i = this.length;
              if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
              if (
                "string" == typeof t &&
                !Oe.test(t) &&
                !Ie[(je.exec(t) || ["", ""])[1].toLowerCase()]
              ) {
                t = t.replace(De, "<$1></$2>");
                try {
                  for (; i > n; n++)
                    (e = this[n] || {}),
                      1 === e.nodeType &&
                        (J.cleanData(v(e, !1)), (e.innerHTML = t));
                  e = 0;
                } catch (o) {}
              }
              e && this.empty().append(t);
            },
            null,
            t,
            arguments.length
          );
        },
        replaceWith: function () {
          var t = arguments[0];
          return (
            this.domManip(arguments, function (e) {
              (t = this.parentNode),
                J.cleanData(v(this)),
                t && t.replaceChild(e, this);
            }),
            t && (t.length || t.nodeType) ? this : this.remove()
          );
        },
        detach: function (t) {
          return this.remove(t, !0);
        },
        domManip: function (t, e) {
          t = U.apply([], t);
          var n,
            i,
            o,
            a,
            r,
            s,
            l = 0,
            c = this.length,
            u = this,
            p = c - 1,
            d = t[0],
            g = J.isFunction(d);
          if (
            g ||
            (c > 1 && "string" == typeof d && !K.checkClone && Le.test(d))
          )
            return this.each(function (n) {
              var i = u.eq(n);
              g && (t[0] = d.call(this, n, i.html())), i.domManip(t, e);
            });
          if (
            c &&
            ((n = J.buildFragment(t, this[0].ownerDocument, !1, this)),
            (i = n.firstChild),
            1 === n.childNodes.length && (n = i),
            i)
          ) {
            for (o = J.map(v(n, "script"), f), a = o.length; c > l; l++)
              (r = n),
                l !== p &&
                  ((r = J.clone(r, !0, !0)), a && J.merge(o, v(r, "script"))),
                e.call(this[l], r, l);
            if (a)
              for (
                s = o[o.length - 1].ownerDocument, J.map(o, h), l = 0;
                a > l;
                l++
              )
                (r = o[l]),
                  Fe.test(r.type || "") &&
                    !ve.access(r, "globalEval") &&
                    J.contains(s, r) &&
                    (r.src
                      ? J._evalUrl && J._evalUrl(r.src)
                      : J.globalEval(r.textContent.replace(Pe, "")));
          }
          return this;
        },
      }),
      J.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (t, e) {
          J.fn[t] = function (t) {
            for (var n, i = [], o = J(t), a = o.length - 1, r = 0; a >= r; r++)
              (n = r === a ? this : this.clone(!0)),
                J(o[r])[e](n),
                z.apply(i, n.get());
            return this.pushStack(i);
          };
        }
      );
    var He,
      Re = {},
      Be = /^margin/,
      qe = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
      We = function (e) {
        return e.ownerDocument.defaultView.opener
          ? e.ownerDocument.defaultView.getComputedStyle(e, null)
          : t.getComputedStyle(e, null);
      };
    !(function () {
      function e() {
        (r.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
          (r.innerHTML = ""),
          o.appendChild(a);
        var e = t.getComputedStyle(r, null);
        (n = "1%" !== e.top), (i = "4px" === e.width), o.removeChild(a);
      }
      var n,
        i,
        o = Z.documentElement,
        a = Z.createElement("div"),
        r = Z.createElement("div");
      r.style &&
        ((r.style.backgroundClip = "content-box"),
        (r.cloneNode(!0).style.backgroundClip = ""),
        (K.clearCloneStyle = "content-box" === r.style.backgroundClip),
        (a.style.cssText =
          "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
        a.appendChild(r),
        t.getComputedStyle &&
          J.extend(K, {
            pixelPosition: function () {
              return e(), n;
            },
            boxSizingReliable: function () {
              return null == i && e(), i;
            },
            reliableMarginRight: function () {
              var e,
                n = r.appendChild(Z.createElement("div"));
              return (
                (n.style.cssText = r.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                (n.style.marginRight = n.style.width = "0"),
                (r.style.width = "1px"),
                o.appendChild(a),
                (e = !parseFloat(t.getComputedStyle(n, null).marginRight)),
                o.removeChild(a),
                r.removeChild(n),
                e
              );
            },
          }));
    })(),
      (J.swap = function (t, e, n, i) {
        var o,
          a,
          r = {};
        for (a in e) (r[a] = t.style[a]), (t.style[a] = e[a]);
        o = n.apply(t, i || []);
        for (a in e) t.style[a] = r[a];
        return o;
      });
    var Ue = /^(none|table(?!-c[ea]).+)/,
      ze = new RegExp("^(" + we + ")(.*)$", "i"),
      Qe = new RegExp("^([+-])=(" + we + ")", "i"),
      Xe = { position: "absolute", visibility: "hidden", display: "block" },
      Ve = { letterSpacing: "0", fontWeight: "400" },
      Ye = ["Webkit", "O", "Moz", "ms"];
    J.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var n = w(t, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
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
        zoom: !0,
      },
      cssProps: { float: "cssFloat" },
      style: function (t, e, n, i) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var o,
            a,
            r,
            s = J.camelCase(e),
            l = t.style;
          return (
            (e = J.cssProps[s] || (J.cssProps[s] = C(l, s))),
            (r = J.cssHooks[e] || J.cssHooks[s]),
            void 0 === n
              ? r && "get" in r && void 0 !== (o = r.get(t, !1, i))
                ? o
                : l[e]
              : ((a = typeof n),
                "string" === a &&
                  (o = Qe.exec(n)) &&
                  ((n = (o[1] + 1) * o[2] + parseFloat(J.css(t, e))),
                  (a = "number")),
                void (
                  null != n &&
                  n === n &&
                  ("number" !== a || J.cssNumber[s] || (n += "px"),
                  K.clearCloneStyle ||
                    "" !== n ||
                    0 !== e.indexOf("background") ||
                    (l[e] = "inherit"),
                  (r && "set" in r && void 0 === (n = r.set(t, n, i))) ||
                    (l[e] = n))
                ))
          );
        }
      },
      css: function (t, e, n, i) {
        var o,
          a,
          r,
          s = J.camelCase(e);
        return (
          (e = J.cssProps[s] || (J.cssProps[s] = C(t.style, s))),
          (r = J.cssHooks[e] || J.cssHooks[s]),
          r && "get" in r && (o = r.get(t, !0, n)),
          void 0 === o && (o = w(t, e, i)),
          "normal" === o && e in Ve && (o = Ve[e]),
          "" === n || n
            ? ((a = parseFloat(o)), n === !0 || J.isNumeric(a) ? a || 0 : o)
            : o
        );
      },
    }),
      J.each(["height", "width"], function (t, e) {
        J.cssHooks[e] = {
          get: function (t, n, i) {
            return n
              ? Ue.test(J.css(t, "display")) && 0 === t.offsetWidth
                ? J.swap(t, Xe, function () {
                    return $(t, e, i);
                  })
                : $(t, e, i)
              : void 0;
          },
          set: function (t, n, i) {
            var o = i && We(t);
            return k(
              t,
              n,
              i
                ? T(t, e, i, "border-box" === J.css(t, "boxSizing", !1, o), o)
                : 0
            );
          },
        };
      }),
      (J.cssHooks.marginRight = _(K.reliableMarginRight, function (t, e) {
        return e
          ? J.swap(t, { display: "inline-block" }, w, [t, "marginRight"])
          : void 0;
      })),
      J.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
        (J.cssHooks[t + e] = {
          expand: function (n) {
            for (
              var i = 0, o = {}, a = "string" == typeof n ? n.split(" ") : [n];
              4 > i;
              i++
            )
              o[t + _e[i] + e] = a[i] || a[i - 2] || a[0];
            return o;
          },
        }),
          Be.test(t) || (J.cssHooks[t + e].set = k);
      }),
      J.fn.extend({
        css: function (t, e) {
          return me(
            this,
            function (t, e, n) {
              var i,
                o,
                a = {},
                r = 0;
              if (J.isArray(e)) {
                for (i = We(t), o = e.length; o > r; r++)
                  a[e[r]] = J.css(t, e[r], !1, i);
                return a;
              }
              return void 0 !== n ? J.style(t, e, n) : J.css(t, e);
            },
            t,
            e,
            arguments.length > 1
          );
        },
        show: function () {
          return S(this, !0);
        },
        hide: function () {
          return S(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                Ce(this) ? J(this).show() : J(this).hide();
              });
        },
      }),
      (J.Tween = E),
      (E.prototype = {
        constructor: E,
        init: function (t, e, n, i, o, a) {
          (this.elem = t),
            (this.prop = n),
            (this.easing = o || "swing"),
            (this.options = e),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = a || (J.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var t = E.propHooks[this.prop];
          return t && t.get ? t.get(this) : E.propHooks._default.get(this);
        },
        run: function (t) {
          var e,
            n = E.propHooks[this.prop];
          return (
            (this.pos = e =
              this.options.duration
                ? J.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration
                  )
                : t),
            (this.now = (this.end - this.start) * e + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : E.propHooks._default.set(this),
            this
          );
        },
      }),
      (E.prototype.init.prototype = E.prototype),
      (E.propHooks = {
        _default: {
          get: function (t) {
            var e;
            return null == t.elem[t.prop] ||
              (t.elem.style && null != t.elem.style[t.prop])
              ? ((e = J.css(t.elem, t.prop, "")), e && "auto" !== e ? e : 0)
              : t.elem[t.prop];
          },
          set: function (t) {
            J.fx.step[t.prop]
              ? J.fx.step[t.prop](t)
              : t.elem.style &&
                (null != t.elem.style[J.cssProps[t.prop]] || J.cssHooks[t.prop])
              ? J.style(t.elem, t.prop, t.now + t.unit)
              : (t.elem[t.prop] = t.now);
          },
        },
      }),
      (E.propHooks.scrollTop = E.propHooks.scrollLeft =
        {
          set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          },
        }),
      (J.easing = {
        linear: function (t) {
          return t;
        },
        swing: function (t) {
          return 0.5 - Math.cos(t * Math.PI) / 2;
        },
      }),
      (J.fx = E.prototype.init),
      (J.fx.step = {});
    var Ke,
      Ze,
      Ge = /^(?:toggle|show|hide)$/,
      Je = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
      tn = /queueHooks$/,
      en = [M],
      nn = {
        "*": [
          function (t, e) {
            var n = this.createTween(t, e),
              i = n.cur(),
              o = Je.exec(e),
              a = (o && o[3]) || (J.cssNumber[t] ? "" : "px"),
              r =
                (J.cssNumber[t] || ("px" !== a && +i)) &&
                Je.exec(J.css(n.elem, t)),
              s = 1,
              l = 20;
            if (r && r[3] !== a) {
              (a = a || r[3]), (o = o || []), (r = +i || 1);
              do (s = s || ".5"), (r /= s), J.style(n.elem, t, r + a);
              while (s !== (s = n.cur() / i) && 1 !== s && --l);
            }
            return (
              o &&
                ((r = n.start = +r || +i || 0),
                (n.unit = a),
                (n.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2])),
              n
            );
          },
        ],
      };
    (J.Animation = J.extend(L, {
      tweener: function (t, e) {
        J.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.split(" "));
        for (var n, i = 0, o = t.length; o > i; i++)
          (n = t[i]), (nn[n] = nn[n] || []), nn[n].unshift(e);
      },
      prefilter: function (t, e) {
        e ? en.unshift(t) : en.push(t);
      },
    })),
      (J.speed = function (t, e, n) {
        var i =
          t && "object" == typeof t
            ? J.extend({}, t)
            : {
                complete: n || (!n && e) || (J.isFunction(t) && t),
                duration: t,
                easing: (n && e) || (e && !J.isFunction(e) && e),
              };
        return (
          (i.duration = J.fx.off
            ? 0
            : "number" == typeof i.duration
            ? i.duration
            : i.duration in J.fx.speeds
            ? J.fx.speeds[i.duration]
            : J.fx.speeds._default),
          (null == i.queue || i.queue === !0) && (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            J.isFunction(i.old) && i.old.call(this),
              i.queue && J.dequeue(this, i.queue);
          }),
          i
        );
      }),
      J.fn.extend({
        fadeTo: function (t, e, n, i) {
          return this.filter(Ce)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: e }, t, n, i);
        },
        animate: function (t, e, n, i) {
          var o = J.isEmptyObject(t),
            a = J.speed(e, n, i),
            r = function () {
              var e = L(this, J.extend({}, t), a);
              (o || ve.get(this, "finish")) && e.stop(!0);
            };
          return (
            (r.finish = r),
            o || a.queue === !1 ? this.each(r) : this.queue(a.queue, r)
          );
        },
        stop: function (t, e, n) {
          var i = function (t) {
            var e = t.stop;
            delete t.stop, e(n);
          };
          return (
            "string" != typeof t && ((n = e), (e = t), (t = void 0)),
            e && t !== !1 && this.queue(t || "fx", []),
            this.each(function () {
              var e = !0,
                o = null != t && t + "queueHooks",
                a = J.timers,
                r = ve.get(this);
              if (o) r[o] && r[o].stop && i(r[o]);
              else for (o in r) r[o] && r[o].stop && tn.test(o) && i(r[o]);
              for (o = a.length; o--; )
                a[o].elem !== this ||
                  (null != t && a[o].queue !== t) ||
                  (a[o].anim.stop(n), (e = !1), a.splice(o, 1));
              (e || !n) && J.dequeue(this, t);
            })
          );
        },
        finish: function (t) {
          return (
            t !== !1 && (t = t || "fx"),
            this.each(function () {
              var e,
                n = ve.get(this),
                i = n[t + "queue"],
                o = n[t + "queueHooks"],
                a = J.timers,
                r = i ? i.length : 0;
              for (
                n.finish = !0,
                  J.queue(this, t, []),
                  o && o.stop && o.stop.call(this, !0),
                  e = a.length;
                e--;

              )
                a[e].elem === this &&
                  a[e].queue === t &&
                  (a[e].anim.stop(!0), a.splice(e, 1));
              for (e = 0; r > e; e++)
                i[e] && i[e].finish && i[e].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      J.each(["toggle", "show", "hide"], function (t, e) {
        var n = J.fn[e];
        J.fn[e] = function (t, i, o) {
          return null == t || "boolean" == typeof t
            ? n.apply(this, arguments)
            : this.animate(D(e, !0), t, i, o);
        };
      }),
      J.each(
        {
          slideDown: D("show"),
          slideUp: D("hide"),
          slideToggle: D("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (t, e) {
          J.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i);
          };
        }
      ),
      (J.timers = []),
      (J.fx.tick = function () {
        var t,
          e = 0,
          n = J.timers;
        for (Ke = J.now(); e < n.length; e++)
          (t = n[e]), t() || n[e] !== t || n.splice(e--, 1);
        n.length || J.fx.stop(), (Ke = void 0);
      }),
      (J.fx.timer = function (t) {
        J.timers.push(t), t() ? J.fx.start() : J.timers.pop();
      }),
      (J.fx.interval = 13),
      (J.fx.start = function () {
        Ze || (Ze = setInterval(J.fx.tick, J.fx.interval));
      }),
      (J.fx.stop = function () {
        clearInterval(Ze), (Ze = null);
      }),
      (J.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (J.fn.delay = function (t, e) {
        return (
          (t = J.fx ? J.fx.speeds[t] || t : t),
          (e = e || "fx"),
          this.queue(e, function (e, n) {
            var i = setTimeout(e, t);
            n.stop = function () {
              clearTimeout(i);
            };
          })
        );
      }),
      (function () {
        var t = Z.createElement("input"),
          e = Z.createElement("select"),
          n = e.appendChild(Z.createElement("option"));
        (t.type = "checkbox"),
          (K.checkOn = "" !== t.value),
          (K.optSelected = n.selected),
          (e.disabled = !0),
          (K.optDisabled = !n.disabled),
          (t = Z.createElement("input")),
          (t.value = "t"),
          (t.type = "radio"),
          (K.radioValue = "t" === t.value);
      })();
    var on,
      an,
      rn = J.expr.attrHandle;
    J.fn.extend({
      attr: function (t, e) {
        return me(this, J.attr, t, e, arguments.length > 1);
      },
      removeAttr: function (t) {
        return this.each(function () {
          J.removeAttr(this, t);
        });
      },
    }),
      J.extend({
        attr: function (t, e, n) {
          var i,
            o,
            a = t.nodeType;
          return t && 3 !== a && 8 !== a && 2 !== a
            ? typeof t.getAttribute === Te
              ? J.prop(t, e, n)
              : ((1 === a && J.isXMLDoc(t)) ||
                  ((e = e.toLowerCase()),
                  (i =
                    J.attrHooks[e] || (J.expr.match.bool.test(e) ? an : on))),
                void 0 === n
                  ? i && "get" in i && null !== (o = i.get(t, e))
                    ? o
                    : ((o = J.find.attr(t, e)), null == o ? void 0 : o)
                  : null !== n
                  ? i && "set" in i && void 0 !== (o = i.set(t, n, e))
                    ? o
                    : (t.setAttribute(e, n + ""), n)
                  : void J.removeAttr(t, e))
            : void 0;
        },
        removeAttr: function (t, e) {
          var n,
            i,
            o = 0,
            a = e && e.match(fe);
          if (a && 1 === t.nodeType)
            for (; (n = a[o++]); )
              (i = J.propFix[n] || n),
                J.expr.match.bool.test(n) && (t[i] = !1),
                t.removeAttribute(n);
        },
        attrHooks: {
          type: {
            set: function (t, e) {
              if (!K.radioValue && "radio" === e && J.nodeName(t, "input")) {
                var n = t.value;
                return t.setAttribute("type", e), n && (t.value = n), e;
              }
            },
          },
        },
      }),
      (an = {
        set: function (t, e, n) {
          return e === !1 ? J.removeAttr(t, n) : t.setAttribute(n, n), n;
        },
      }),
      J.each(J.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = rn[e] || J.find.attr;
        rn[e] = function (t, e, i) {
          var o, a;
          return (
            i ||
              ((a = rn[e]),
              (rn[e] = o),
              (o = null != n(t, e, i) ? e.toLowerCase() : null),
              (rn[e] = a)),
            o
          );
        };
      });
    var sn = /^(?:input|select|textarea|button)$/i;
    J.fn.extend({
      prop: function (t, e) {
        return me(this, J.prop, t, e, arguments.length > 1);
      },
      removeProp: function (t) {
        return this.each(function () {
          delete this[J.propFix[t] || t];
        });
      },
    }),
      J.extend({
        propFix: { for: "htmlFor", class: "className" },
        prop: function (t, e, n) {
          var i,
            o,
            a,
            r = t.nodeType;
          return t && 3 !== r && 8 !== r && 2 !== r
            ? ((a = 1 !== r || !J.isXMLDoc(t)),
              a && ((e = J.propFix[e] || e), (o = J.propHooks[e])),
              void 0 !== n
                ? o && "set" in o && void 0 !== (i = o.set(t, n, e))
                  ? i
                  : (t[e] = n)
                : o && "get" in o && null !== (i = o.get(t, e))
                ? i
                : t[e])
            : void 0;
        },
        propHooks: {
          tabIndex: {
            get: function (t) {
              return t.hasAttribute("tabindex") || sn.test(t.nodeName) || t.href
                ? t.tabIndex
                : -1;
            },
          },
        },
      }),
      K.optSelected ||
        (J.propHooks.selected = {
          get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null;
          },
        }),
      J.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          J.propFix[this.toLowerCase()] = this;
        }
      );
    var ln = /[\t\r\n\f]/g;
    J.fn.extend({
      addClass: function (t) {
        var e,
          n,
          i,
          o,
          a,
          r,
          s = "string" == typeof t && t,
          l = 0,
          c = this.length;
        if (J.isFunction(t))
          return this.each(function (e) {
            J(this).addClass(t.call(this, e, this.className));
          });
        if (s)
          for (e = (t || "").match(fe) || []; c > l; l++)
            if (
              ((n = this[l]),
              (i =
                1 === n.nodeType &&
                (n.className
                  ? (" " + n.className + " ").replace(ln, " ")
                  : " ")))
            ) {
              for (a = 0; (o = e[a++]); )
                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              (r = J.trim(i)), n.className !== r && (n.className = r);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          i,
          o,
          a,
          r,
          s = 0 === arguments.length || ("string" == typeof t && t),
          l = 0,
          c = this.length;
        if (J.isFunction(t))
          return this.each(function (e) {
            J(this).removeClass(t.call(this, e, this.className));
          });
        if (s)
          for (e = (t || "").match(fe) || []; c > l; l++)
            if (
              ((n = this[l]),
              (i =
                1 === n.nodeType &&
                (n.className
                  ? (" " + n.className + " ").replace(ln, " ")
                  : "")))
            ) {
              for (a = 0; (o = e[a++]); )
                for (; i.indexOf(" " + o + " ") >= 0; )
                  i = i.replace(" " + o + " ", " ");
              (r = t ? J.trim(i) : ""), n.className !== r && (n.className = r);
            }
        return this;
      },
      toggleClass: function (t, e) {
        var n = typeof t;
        return "boolean" == typeof e && "string" === n
          ? e
            ? this.addClass(t)
            : this.removeClass(t)
          : this.each(
              J.isFunction(t)
                ? function (n) {
                    J(this).toggleClass(t.call(this, n, this.className, e), e);
                  }
                : function () {
                    if ("string" === n)
                      for (
                        var e, i = 0, o = J(this), a = t.match(fe) || [];
                        (e = a[i++]);

                      )
                        o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else
                      (n === Te || "boolean" === n) &&
                        (this.className &&
                          ve.set(this, "__className__", this.className),
                        (this.className =
                          this.className || t === !1
                            ? ""
                            : ve.get(this, "__className__") || ""));
                  }
            );
      },
      hasClass: function (t) {
        for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
          if (
            1 === this[n].nodeType &&
            (" " + this[n].className + " ").replace(ln, " ").indexOf(e) >= 0
          )
            return !0;
        return !1;
      },
    });
    var cn = /\r/g;
    J.fn.extend({
      val: function (t) {
        var e,
          n,
          i,
          o = this[0];
        return arguments.length
          ? ((i = J.isFunction(t)),
            this.each(function (n) {
              var o;
              1 === this.nodeType &&
                ((o = i ? t.call(this, n, J(this).val()) : t),
                null == o
                  ? (o = "")
                  : "number" == typeof o
                  ? (o += "")
                  : J.isArray(o) &&
                    (o = J.map(o, function (t) {
                      return null == t ? "" : t + "";
                    })),
                (e =
                  J.valHooks[this.type] ||
                  J.valHooks[this.nodeName.toLowerCase()]),
                (e && "set" in e && void 0 !== e.set(this, o, "value")) ||
                  (this.value = o));
            }))
          : o
          ? ((e = J.valHooks[o.type] || J.valHooks[o.nodeName.toLowerCase()]),
            e && "get" in e && void 0 !== (n = e.get(o, "value"))
              ? n
              : ((n = o.value),
                "string" == typeof n ? n.replace(cn, "") : null == n ? "" : n))
          : void 0;
      },
    }),
      J.extend({
        valHooks: {
          option: {
            get: function (t) {
              var e = J.find.attr(t, "value");
              return null != e ? e : J.trim(J.text(t));
            },
          },
          select: {
            get: function (t) {
              for (
                var e,
                  n,
                  i = t.options,
                  o = t.selectedIndex,
                  a = "select-one" === t.type || 0 > o,
                  r = a ? null : [],
                  s = a ? o + 1 : i.length,
                  l = 0 > o ? s : a ? o : 0;
                s > l;
                l++
              )
                if (
                  ((n = i[l]),
                  !(
                    (!n.selected && l !== o) ||
                    (K.optDisabled
                      ? n.disabled
                      : null !== n.getAttribute("disabled")) ||
                    (n.parentNode.disabled &&
                      J.nodeName(n.parentNode, "optgroup"))
                  ))
                ) {
                  if (((e = J(n).val()), a)) return e;
                  r.push(e);
                }
              return r;
            },
            set: function (t, e) {
              for (
                var n, i, o = t.options, a = J.makeArray(e), r = o.length;
                r--;

              )
                (i = o[r]),
                  (i.selected = J.inArray(i.value, a) >= 0) && (n = !0);
              return n || (t.selectedIndex = -1), a;
            },
          },
        },
      }),
      J.each(["radio", "checkbox"], function () {
        (J.valHooks[this] = {
          set: function (t, e) {
            return J.isArray(e)
              ? (t.checked = J.inArray(J(t).val(), e) >= 0)
              : void 0;
          },
        }),
          K.checkOn ||
            (J.valHooks[this].get = function (t) {
              return null === t.getAttribute("value") ? "on" : t.value;
            });
      }),
      J.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (t, e) {
          J.fn[e] = function (t, n) {
            return arguments.length > 0
              ? this.on(e, null, t, n)
              : this.trigger(e);
          };
        }
      ),
      J.fn.extend({
        hover: function (t, e) {
          return this.mouseenter(t).mouseleave(e || t);
        },
        bind: function (t, e, n) {
          return this.on(t, null, e, n);
        },
        unbind: function (t, e) {
          return this.off(t, null, e);
        },
        delegate: function (t, e, n, i) {
          return this.on(e, t, n, i);
        },
        undelegate: function (t, e, n) {
          return 1 === arguments.length
            ? this.off(t, "**")
            : this.off(e, t || "**", n);
        },
      });
    var un = J.now(),
      pn = /\?/;
    (J.parseJSON = function (t) {
      return JSON.parse(t + "");
    }),
      (J.parseXML = function (t) {
        var e, n;
        if (!t || "string" != typeof t) return null;
        try {
          (n = new DOMParser()), (e = n.parseFromString(t, "text/xml"));
        } catch (i) {
          e = void 0;
        }
        return (
          (!e || e.getElementsByTagName("parsererror").length) &&
            J.error("Invalid XML: " + t),
          e
        );
      });
    var dn = /#.*$/,
      fn = /([?&])_=[^&]*/,
      hn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      gn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      mn = /^(?:GET|HEAD)$/,
      vn = /^\/\//,
      yn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      bn = {},
      xn = {},
      wn = "*/".concat("*"),
      _n = t.location.href,
      Cn = yn.exec(_n.toLowerCase()) || [];
    J.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: _n,
        type: "GET",
        isLocal: gn.test(Cn[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": wn,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": J.parseJSON,
          "text xml": J.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, e) {
        return e ? P(P(t, J.ajaxSettings), e) : P(J.ajaxSettings, t);
      },
      ajaxPrefilter: F(bn),
      ajaxTransport: F(xn),
      ajax: function (t, e) {
        function n(t, e, n, r) {
          var l,
            u,
            v,
            y,
            x,
            _ = e;
          2 !== b &&
            ((b = 2),
            s && clearTimeout(s),
            (i = void 0),
            (a = r || ""),
            (w.readyState = t > 0 ? 4 : 0),
            (l = (t >= 200 && 300 > t) || 304 === t),
            n && (y = I(p, w, n)),
            (y = H(p, y, w, l)),
            l
              ? (p.ifModified &&
                  ((x = w.getResponseHeader("Last-Modified")),
                  x && (J.lastModified[o] = x),
                  (x = w.getResponseHeader("etag")),
                  x && (J.etag[o] = x)),
                204 === t || "HEAD" === p.type
                  ? (_ = "nocontent")
                  : 304 === t
                  ? (_ = "notmodified")
                  : ((_ = y.state), (u = y.data), (v = y.error), (l = !v)))
              : ((v = _), (t || !_) && ((_ = "error"), 0 > t && (t = 0))),
            (w.status = t),
            (w.statusText = (e || _) + ""),
            l ? h.resolveWith(d, [u, _, w]) : h.rejectWith(d, [w, _, v]),
            w.statusCode(m),
            (m = void 0),
            c && f.trigger(l ? "ajaxSuccess" : "ajaxError", [w, p, l ? u : v]),
            g.fireWith(d, [w, _]),
            c &&
              (f.trigger("ajaxComplete", [w, p]),
              --J.active || J.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
        var i,
          o,
          a,
          r,
          s,
          l,
          c,
          u,
          p = J.ajaxSetup({}, e),
          d = p.context || p,
          f = p.context && (d.nodeType || d.jquery) ? J(d) : J.event,
          h = J.Deferred(),
          g = J.Callbacks("once memory"),
          m = p.statusCode || {},
          v = {},
          y = {},
          b = 0,
          x = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (2 === b) {
                if (!r)
                  for (r = {}; (e = hn.exec(a)); ) r[e[1].toLowerCase()] = e[2];
                e = r[t.toLowerCase()];
              }
              return null == e ? null : e;
            },
            getAllResponseHeaders: function () {
              return 2 === b ? a : null;
            },
            setRequestHeader: function (t, e) {
              var n = t.toLowerCase();
              return b || ((t = y[n] = y[n] || t), (v[t] = e)), this;
            },
            overrideMimeType: function (t) {
              return b || (p.mimeType = t), this;
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (2 > b) for (e in t) m[e] = [m[e], t[e]];
                else w.always(t[w.status]);
              return this;
            },
            abort: function (t) {
              var e = t || x;
              return i && i.abort(e), n(0, e), this;
            },
          };
        if (
          ((h.promise(w).complete = g.add),
          (w.success = w.done),
          (w.error = w.fail),
          (p.url = ((t || p.url || _n) + "")
            .replace(dn, "")
            .replace(vn, Cn[1] + "//")),
          (p.type = e.method || e.type || p.method || p.type),
          (p.dataTypes = J.trim(p.dataType || "*")
            .toLowerCase()
            .match(fe) || [""]),
          null == p.crossDomain &&
            ((l = yn.exec(p.url.toLowerCase())),
            (p.crossDomain = !(
              !l ||
              (l[1] === Cn[1] &&
                l[2] === Cn[2] &&
                (l[3] || ("http:" === l[1] ? "80" : "443")) ===
                  (Cn[3] || ("http:" === Cn[1] ? "80" : "443")))
            ))),
          p.data &&
            p.processData &&
            "string" != typeof p.data &&
            (p.data = J.param(p.data, p.traditional)),
          N(bn, p, e, w),
          2 === b)
        )
          return w;
        (c = J.event && p.global),
          c && 0 === J.active++ && J.event.trigger("ajaxStart"),
          (p.type = p.type.toUpperCase()),
          (p.hasContent = !mn.test(p.type)),
          (o = p.url),
          p.hasContent ||
            (p.data &&
              ((o = p.url += (pn.test(o) ? "&" : "?") + p.data), delete p.data),
            p.cache === !1 &&
              (p.url = fn.test(o)
                ? o.replace(fn, "$1_=" + un++)
                : o + (pn.test(o) ? "&" : "?") + "_=" + un++)),
          p.ifModified &&
            (J.lastModified[o] &&
              w.setRequestHeader("If-Modified-Since", J.lastModified[o]),
            J.etag[o] && w.setRequestHeader("If-None-Match", J.etag[o])),
          ((p.data && p.hasContent && p.contentType !== !1) || e.contentType) &&
            w.setRequestHeader("Content-Type", p.contentType),
          w.setRequestHeader(
            "Accept",
            p.dataTypes[0] && p.accepts[p.dataTypes[0]]
              ? p.accepts[p.dataTypes[0]] +
                  ("*" !== p.dataTypes[0] ? ", " + wn + "; q=0.01" : "")
              : p.accepts["*"]
          );
        for (u in p.headers) w.setRequestHeader(u, p.headers[u]);
        if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === b))
          return w.abort();
        x = "abort";
        for (u in { success: 1, error: 1, complete: 1 }) w[u](p[u]);
        if ((i = N(xn, p, e, w))) {
          (w.readyState = 1),
            c && f.trigger("ajaxSend", [w, p]),
            p.async &&
              p.timeout > 0 &&
              (s = setTimeout(function () {
                w.abort("timeout");
              }, p.timeout));
          try {
            (b = 1), i.send(v, n);
          } catch (_) {
            if (!(2 > b)) throw _;
            n(-1, _);
          }
        } else n(-1, "No Transport");
        return w;
      },
      getJSON: function (t, e, n) {
        return J.get(t, e, n, "json");
      },
      getScript: function (t, e) {
        return J.get(t, void 0, e, "script");
      },
    }),
      J.each(["get", "post"], function (t, e) {
        J[e] = function (t, n, i, o) {
          return (
            J.isFunction(n) && ((o = o || i), (i = n), (n = void 0)),
            J.ajax({ url: t, type: e, dataType: o, data: n, success: i })
          );
        };
      }),
      (J._evalUrl = function (t) {
        return J.ajax({
          url: t,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      J.fn.extend({
        wrapAll: function (t) {
          var e;
          return J.isFunction(t)
            ? this.each(function (e) {
                J(this).wrapAll(t.call(this, e));
              })
            : (this[0] &&
                ((e = J(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function () {
                    for (var t = this; t.firstElementChild; )
                      t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this);
        },
        wrapInner: function (t) {
          return this.each(
            J.isFunction(t)
              ? function (e) {
                  J(this).wrapInner(t.call(this, e));
                }
              : function () {
                  var e = J(this),
                    n = e.contents();
                  n.length ? n.wrapAll(t) : e.append(t);
                }
          );
        },
        wrap: function (t) {
          var e = J.isFunction(t);
          return this.each(function (n) {
            J(this).wrapAll(e ? t.call(this, n) : t);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              J.nodeName(this, "body") || J(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (J.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0;
      }),
      (J.expr.filters.visible = function (t) {
        return !J.expr.filters.hidden(t);
      });
    var kn = /%20/g,
      Tn = /\[\]$/,
      $n = /\r?\n/g,
      Sn = /^(?:submit|button|image|reset|file)$/i,
      En = /^(?:input|select|textarea|keygen)/i;
    (J.param = function (t, e) {
      var n,
        i = [],
        o = function (t, e) {
          (e = J.isFunction(e) ? e() : null == e ? "" : e),
            (i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
        };
      if (
        (void 0 === e && (e = J.ajaxSettings && J.ajaxSettings.traditional),
        J.isArray(t) || (t.jquery && !J.isPlainObject(t)))
      )
        J.each(t, function () {
          o(this.name, this.value);
        });
      else for (n in t) R(n, t[n], e, o);
      return i.join("&").replace(kn, "+");
    }),
      J.fn.extend({
        serialize: function () {
          return J.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var t = J.prop(this, "elements");
            return t ? J.makeArray(t) : this;
          })
            .filter(function () {
              var t = this.type;
              return (
                this.name &&
                !J(this).is(":disabled") &&
                En.test(this.nodeName) &&
                !Sn.test(t) &&
                (this.checked || !ke.test(t))
              );
            })
            .map(function (t, e) {
              var n = J(this).val();
              return null == n
                ? null
                : J.isArray(n)
                ? J.map(n, function (t) {
                    return { name: e.name, value: t.replace($n, "\r\n") };
                  })
                : { name: e.name, value: n.replace($n, "\r\n") };
            })
            .get();
        },
      }),
      (J.ajaxSettings.xhr = function () {
        try {
          return new XMLHttpRequest();
        } catch (t) {}
      });
    var An = 0,
      Dn = {},
      jn = { 0: 200, 1223: 204 },
      Mn = J.ajaxSettings.xhr();
    t.attachEvent &&
      t.attachEvent("onunload", function () {
        for (var t in Dn) Dn[t]();
      }),
      (K.cors = !!Mn && "withCredentials" in Mn),
      (K.ajax = Mn = !!Mn),
      J.ajaxTransport(function (t) {
        var e;
        return K.cors || (Mn && !t.crossDomain)
          ? {
              send: function (n, i) {
                var o,
                  a = t.xhr(),
                  r = ++An;
                if (
                  (a.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (o in t.xhrFields) a[o] = t.xhrFields[o];
                t.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(t.mimeType),
                  t.crossDomain ||
                    n["X-Requested-With"] ||
                    (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n) a.setRequestHeader(o, n[o]);
                (e = function (t) {
                  return function () {
                    e &&
                      (delete Dn[r],
                      (e = a.onload = a.onerror = null),
                      "abort" === t
                        ? a.abort()
                        : "error" === t
                        ? i(a.status, a.statusText)
                        : i(
                            jn[a.status] || a.status,
                            a.statusText,
                            "string" == typeof a.responseText
                              ? { text: a.responseText }
                              : void 0,
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = e()),
                  (a.onerror = e("error")),
                  (e = Dn[r] = e("abort"));
                try {
                  a.send((t.hasContent && t.data) || null);
                } catch (s) {
                  if (e) throw s;
                }
              },
              abort: function () {
                e && e();
              },
            }
          : void 0;
      }),
      J.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
          "text script": function (t) {
            return J.globalEval(t), t;
          },
        },
      }),
      J.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
      }),
      J.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
          var e, n;
          return {
            send: function (i, o) {
              (e = J("<script>")
                .prop({ async: !0, charset: t.scriptCharset, src: t.url })
                .on(
                  "load error",
                  (n = function (t) {
                    e.remove(),
                      (n = null),
                      t && o("error" === t.type ? 404 : 200, t.type);
                  })
                )),
                Z.head.appendChild(e[0]);
            },
            abort: function () {
              n && n();
            },
          };
        }
      });
    var On = [],
      Ln = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var t = On.pop() || J.expando + "_" + un++;
        return (this[t] = !0), t;
      },
    }),
      J.ajaxPrefilter("json jsonp", function (e, n, i) {
        var o,
          a,
          r,
          s =
            e.jsonp !== !1 &&
            (Ln.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                !(e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
                Ln.test(e.data) &&
                "data");
        return s || "jsonp" === e.dataTypes[0]
          ? ((o = e.jsonpCallback =
              J.isFunction(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
            s
              ? (e[s] = e[s].replace(Ln, "$1" + o))
              : e.jsonp !== !1 &&
                (e.url += (pn.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
            (e.converters["script json"] = function () {
              return r || J.error(o + " was not called"), r[0];
            }),
            (e.dataTypes[0] = "json"),
            (a = t[o]),
            (t[o] = function () {
              r = arguments;
            }),
            i.always(function () {
              (t[o] = a),
                e[o] && ((e.jsonpCallback = n.jsonpCallback), On.push(o)),
                r && J.isFunction(a) && a(r[0]),
                (r = a = void 0);
            }),
            "script")
          : void 0;
      }),
      (J.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && ((n = e), (e = !1)), (e = e || Z);
        var i = re.exec(t),
          o = !n && [];
        return i
          ? [e.createElement(i[1])]
          : ((i = J.buildFragment([t], e, o)),
            o && o.length && J(o).remove(),
            J.merge([], i.childNodes));
      });
    var Fn = J.fn.load;
    (J.fn.load = function (t, e, n) {
      if ("string" != typeof t && Fn) return Fn.apply(this, arguments);
      var i,
        o,
        a,
        r = this,
        s = t.indexOf(" ");
      return (
        s >= 0 && ((i = J.trim(t.slice(s))), (t = t.slice(0, s))),
        J.isFunction(e)
          ? ((n = e), (e = void 0))
          : e && "object" == typeof e && (o = "POST"),
        r.length > 0 &&
          J.ajax({ url: t, type: o, dataType: "html", data: e })
            .done(function (t) {
              (a = arguments),
                r.html(i ? J("<div>").append(J.parseHTML(t)).find(i) : t);
            })
            .complete(
              n &&
                function (t, e) {
                  r.each(n, a || [t.responseText, e, t]);
                }
            ),
        this
      );
    }),
      J.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (t, e) {
          J.fn[e] = function (t) {
            return this.on(e, t);
          };
        }
      ),
      (J.expr.filters.animated = function (t) {
        return J.grep(J.timers, function (e) {
          return t === e.elem;
        }).length;
      });
    var Nn = t.document.documentElement;
    (J.offset = {
      setOffset: function (t, e, n) {
        var i,
          o,
          a,
          r,
          s,
          l,
          c,
          u = J.css(t, "position"),
          p = J(t),
          d = {};
        "static" === u && (t.style.position = "relative"),
          (s = p.offset()),
          (a = J.css(t, "top")),
          (l = J.css(t, "left")),
          (c =
            ("absolute" === u || "fixed" === u) &&
            (a + l).indexOf("auto") > -1),
          c
            ? ((i = p.position()), (r = i.top), (o = i.left))
            : ((r = parseFloat(a) || 0), (o = parseFloat(l) || 0)),
          J.isFunction(e) && (e = e.call(t, n, s)),
          null != e.top && (d.top = e.top - s.top + r),
          null != e.left && (d.left = e.left - s.left + o),
          "using" in e ? e.using.call(t, d) : p.css(d);
      },
    }),
      J.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return void 0 === t
              ? this
              : this.each(function (e) {
                  J.offset.setOffset(this, t, e);
                });
          var e,
            n,
            i = this[0],
            o = { top: 0, left: 0 },
            a = i && i.ownerDocument;
          return a
            ? ((e = a.documentElement),
              J.contains(e, i)
                ? (typeof i.getBoundingClientRect !== Te &&
                    (o = i.getBoundingClientRect()),
                  (n = B(a)),
                  {
                    top: o.top + n.pageYOffset - e.clientTop,
                    left: o.left + n.pageXOffset - e.clientLeft,
                  })
                : o)
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var t,
              e,
              n = this[0],
              i = { top: 0, left: 0 };
            return (
              "fixed" === J.css(n, "position")
                ? (e = n.getBoundingClientRect())
                : ((t = this.offsetParent()),
                  (e = this.offset()),
                  J.nodeName(t[0], "html") || (i = t.offset()),
                  (i.top += J.css(t[0], "borderTopWidth", !0)),
                  (i.left += J.css(t[0], "borderLeftWidth", !0))),
              {
                top: e.top - i.top - J.css(n, "marginTop", !0),
                left: e.left - i.left - J.css(n, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var t = this.offsetParent || Nn;
              t && !J.nodeName(t, "html") && "static" === J.css(t, "position");

            )
              t = t.offsetParent;
            return t || Nn;
          });
        },
      }),
      J.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (e, n) {
          var i = "pageYOffset" === n;
          J.fn[e] = function (o) {
            return me(
              this,
              function (e, o, a) {
                var r = B(e);
                return void 0 === a
                  ? r
                    ? r[n]
                    : e[o]
                  : void (r
                      ? r.scrollTo(i ? t.pageXOffset : a, i ? a : t.pageYOffset)
                      : (e[o] = a));
              },
              e,
              o,
              arguments.length,
              null
            );
          };
        }
      ),
      J.each(["top", "left"], function (t, e) {
        J.cssHooks[e] = _(K.pixelPosition, function (t, n) {
          return n
            ? ((n = w(t, e)), qe.test(n) ? J(t).position()[e] + "px" : n)
            : void 0;
        });
      }),
      J.each({ Height: "height", Width: "width" }, function (t, e) {
        J.each(
          { padding: "inner" + t, content: e, "": "outer" + t },
          function (n, i) {
            J.fn[i] = function (i, o) {
              var a = arguments.length && (n || "boolean" != typeof i),
                r = n || (i === !0 || o === !0 ? "margin" : "border");
              return me(
                this,
                function (e, n, i) {
                  var o;
                  return J.isWindow(e)
                    ? e.document.documentElement["client" + t]
                    : 9 === e.nodeType
                    ? ((o = e.documentElement),
                      Math.max(
                        e.body["scroll" + t],
                        o["scroll" + t],
                        e.body["offset" + t],
                        o["offset" + t],
                        o["client" + t]
                      ))
                    : void 0 === i
                    ? J.css(e, n, r)
                    : J.style(e, n, i, r);
                },
                e,
                a ? i : void 0,
                a,
                null
              );
            };
          }
        );
      }),
      (J.fn.size = function () {
        return this.length;
      }),
      (J.fn.andSelf = J.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return J;
        });
    var Pn = t.jQuery,
      In = t.$;
    return (
      (J.noConflict = function (e) {
        return (
          t.$ === J && (t.$ = In), e && t.jQuery === J && (t.jQuery = Pn), J
        );
      }),
      typeof e === Te && (t.jQuery = t.$ = J),
      J
    );
  }),
  "undefined" == typeof jQuery)
)
  throw new Error("Bootstrap requires jQuery");
+(function (t) {
  "use strict";
  function e() {
    var t = document.createElement("bootstrap"),
      e = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend",
      };
    for (var n in e) if (void 0 !== t.style[n]) return { end: e[n] };
  }
  (t.fn.emulateTransitionEnd = function (e) {
    var n = !1,
      i = this;
    t(this).one(t.support.transition.end, function () {
      n = !0;
    });
    var o = function () {
      n || t(i).trigger(t.support.transition.end);
    };
    return setTimeout(o, e), this;
  }),
    t(function () {
      t.support.transition = e();
    });
})(jQuery),
  +(function (t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
      n = function (n) {
        t(n).on("click", e, this.close);
      };
    n.prototype.close = function (e) {
      function n() {
        a.trigger("closed.bs.alert").remove();
      }
      var i = t(this),
        o = i.attr("data-target");
      o || ((o = i.attr("href")), (o = o && o.replace(/.*(?=#[^\s]*$)/, "")));
      var a = t(o);
      e && e.preventDefault(),
        a.length || (a = i.hasClass("alert") ? i : i.parent()),
        a.trigger((e = t.Event("close.bs.alert"))),
        e.isDefaultPrevented() ||
          (a.removeClass("in"),
          t.support.transition && a.hasClass("fade")
            ? a.one(t.support.transition.end, n).emulateTransitionEnd(150)
            : n());
    };
    var i = t.fn.alert;
    (t.fn.alert = function (e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.alert");
        o || i.data("bs.alert", (o = new n(this))),
          "string" == typeof e && o[e].call(i);
      });
    }),
      (t.fn.alert.Constructor = n),
      (t.fn.alert.noConflict = function () {
        return (t.fn.alert = i), this;
      }),
      t(document).on("click.bs.alert.data-api", e, n.prototype.close);
  })(jQuery),
  +(function (t) {
    "use strict";
    var e = function (n, i) {
      (this.$element = t(n)), (this.options = t.extend({}, e.DEFAULTS, i));
    };
    (e.DEFAULTS = { loadingText: "loading..." }),
      (e.prototype.setState = function (t) {
        var e = "disabled",
          n = this.$element,
          i = n.is("input") ? "val" : "html",
          o = n.data();
        (t += "Text"),
          o.resetText || n.data("resetText", n[i]()),
          n[i](o[t] || this.options[t]),
          setTimeout(function () {
            "loadingText" == t
              ? n.addClass(e).attr(e, e)
              : n.removeClass(e).removeAttr(e);
          }, 0);
      }),
      (e.prototype.toggle = function () {
        var t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
          var e = this.$element
            .find("input")
            .prop("checked", !this.$element.hasClass("active"))
            .trigger("change");
          "radio" === e.prop("type") && t.find(".active").removeClass("active");
        }
        this.$element.toggleClass("active");
      });
    var n = t.fn.button;
    (t.fn.button = function (n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.button"),
          a = "object" == typeof n && n;
        o || i.data("bs.button", (o = new e(this, a))),
          "toggle" == n ? o.toggle() : n && o.setState(n);
      });
    }),
      (t.fn.button.Constructor = e),
      (t.fn.button.noConflict = function () {
        return (t.fn.button = n), this;
      }),
      t(document).on(
        "click.bs.button.data-api",
        "[data-toggle^=button]",
        function (e) {
          var n = t(e.target);
          n.hasClass("btn") || (n = n.closest(".btn")),
            n.button("toggle"),
            e.preventDefault();
        }
      );
  })(jQuery),
  +(function (t) {
    "use strict";
    var e = function (e, n) {
      (this.$element = t(e)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = n),
        (this.paused =
          this.sliding =
          this.interval =
          this.$active =
          this.$items =
            null),
        "hover" == this.options.pause &&
          this.$element
            .on("mouseenter", t.proxy(this.pause, this))
            .on("mouseleave", t.proxy(this.cycle, this));
    };
    (e.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0 }),
      (e.prototype.cycle = function (e) {
        return (
          e || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              t.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (e.prototype.getActiveIndex = function () {
        return (
          (this.$active = this.$element.find(".item.active")),
          (this.$items = this.$active.parent().children()),
          this.$items.index(this.$active)
        );
      }),
      (e.prototype.to = function (e) {
        var n = this,
          i = this.getActiveIndex();
        return e > this.$items.length - 1 || 0 > e
          ? void 0
          : this.sliding
          ? this.$element.one("slid", function () {
              n.to(e);
            })
          : i == e
          ? this.pause().cycle()
          : this.slide(e > i ? "next" : "prev", t(this.$items[e]));
      }),
      (e.prototype.pause = function (e) {
        return (
          e || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            t.support.transition.end &&
            (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (e.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (e.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (e.prototype.slide = function (e, n) {
        var i = this.$element.find(".item.active"),
          o = n || i[e](),
          a = this.interval,
          r = "next" == e ? "left" : "right",
          s = "next" == e ? "first" : "last",
          l = this;
        if (!o.length) {
          if (!this.options.wrap) return;
          o = this.$element.find(".item")[s]();
        }
        (this.sliding = !0), a && this.pause();
        var c = t.Event("slide.bs.carousel", {
          relatedTarget: o[0],
          direction: r,
        });
        if (!o.hasClass("active")) {
          if (
            (this.$indicators.length &&
              (this.$indicators.find(".active").removeClass("active"),
              this.$element.one("slid", function () {
                var e = t(l.$indicators.children()[l.getActiveIndex()]);
                e && e.addClass("active");
              })),
            t.support.transition && this.$element.hasClass("slide"))
          ) {
            if ((this.$element.trigger(c), c.isDefaultPrevented())) return;
            o.addClass(e),
              o[0].offsetWidth,
              i.addClass(r),
              o.addClass(r),
              i
                .one(t.support.transition.end, function () {
                  o.removeClass([e, r].join(" ")).addClass("active"),
                    i.removeClass(["active", r].join(" ")),
                    (l.sliding = !1),
                    setTimeout(function () {
                      l.$element.trigger("slid");
                    }, 0);
                })
                .emulateTransitionEnd(600);
          } else {
            if ((this.$element.trigger(c), c.isDefaultPrevented())) return;
            i.removeClass("active"),
              o.addClass("active"),
              (this.sliding = !1),
              this.$element.trigger("slid");
          }
          return a && this.cycle(), this;
        }
      });
    var n = t.fn.carousel;
    (t.fn.carousel = function (n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.carousel"),
          a = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n),
          r = "string" == typeof n ? n : a.slide;
        o || i.data("bs.carousel", (o = new e(this, a))),
          "number" == typeof n
            ? o.to(n)
            : r
            ? o[r]()
            : a.interval && o.pause().cycle();
      });
    }),
      (t.fn.carousel.Constructor = e),
      (t.fn.carousel.noConflict = function () {
        return (t.fn.carousel = n), this;
      }),
      t(document).on(
        "click.bs.carousel.data-api",
        "[data-slide], [data-slide-to]",
        function (e) {
          var n,
            i = t(this),
            o = t(
              i.attr("data-target") ||
                ((n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            a = t.extend({}, o.data(), i.data()),
            r = i.attr("data-slide-to");
          r && (a.interval = !1),
            o.carousel(a),
            (r = i.attr("data-slide-to")) && o.data("bs.carousel").to(r),
            e.preventDefault();
        }
      ),
      t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
          var e = t(this);
          e.carousel(e.data());
        });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    var e = function (n, i) {
      (this.$element = t(n)),
        (this.options = t.extend({}, e.DEFAULTS, i)),
        (this.transitioning = null),
        this.options.parent && (this.$parent = t(this.options.parent)),
        this.options.toggle && this.toggle();
    };
    (e.DEFAULTS = { toggle: !0 }),
      (e.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height";
      }),
      (e.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var e = t.Event("show.bs.collapse");
          if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
            var n = this.$parent && this.$parent.find("> .panel > .in");
            if (n && n.length) {
              var i = n.data("bs.collapse");
              if (i && i.transitioning) return;
              n.collapse("hide"), i || n.data("bs.collapse", null);
            }
            var o = this.dimension();
            this.$element.removeClass("collapse").addClass("collapsing")[o](0),
              (this.transitioning = 1);
            var a = function () {
              this.$element.removeClass("collapsing").addClass("in")[o]("auto"),
                (this.transitioning = 0),
                this.$element.trigger("shown.bs.collapse");
            };
            if (!t.support.transition) return a.call(this);
            var r = t.camelCase(["scroll", o].join("-"));
            this.$element
              .one(t.support.transition.end, t.proxy(a, this))
              .emulateTransitionEnd(350)
              [o](this.$element[0][r]);
          }
        }
      }),
      (e.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var e = t.Event("hide.bs.collapse");
          if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
            var n = this.dimension();
            this.$element[n](this.$element[n]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse")
                .removeClass("in"),
              (this.transitioning = 1);
            var i = function () {
              (this.transitioning = 0),
                this.$element
                  .trigger("hidden.bs.collapse")
                  .removeClass("collapsing")
                  .addClass("collapse");
            };
            return t.support.transition
              ? void this.$element[n](0)
                  .one(t.support.transition.end, t.proxy(i, this))
                  .emulateTransitionEnd(350)
              : i.call(this);
          }
        }
      }),
      (e.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      });
    var n = t.fn.collapse;
    (t.fn.collapse = function (n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.collapse"),
          a = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
        o || i.data("bs.collapse", (o = new e(this, a))),
          "string" == typeof n && o[n]();
      });
    }),
      (t.fn.collapse.Constructor = e),
      (t.fn.collapse.noConflict = function () {
        return (t.fn.collapse = n), this;
      }),
      t(document).on(
        "click.bs.collapse.data-api",
        "[data-toggle=collapse]",
        function (e) {
          var n,
            i = t(this),
            o =
              i.attr("data-target") ||
              e.preventDefault() ||
              ((n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
            a = t(o),
            r = a.data("bs.collapse"),
            s = r ? "toggle" : i.data(),
            l = i.attr("data-parent"),
            c = l && t(l);
          (r && r.transitioning) ||
            (c &&
              c
                .find('[data-toggle=collapse][data-parent="' + l + '"]')
                .not(i)
                .addClass("collapsed"),
            i[a.hasClass("in") ? "addClass" : "removeClass"]("collapsed")),
            a.collapse(s);
        }
      );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e() {
      t(i).remove(),
        t(o).each(function (e) {
          var i = n(t(this));
          i.hasClass("open") &&
            (i.trigger((e = t.Event("hide.bs.dropdown"))),
            e.isDefaultPrevented() ||
              i.removeClass("open").trigger("hidden.bs.dropdown"));
        });
    }
    function n(e) {
      var n = e.attr("data-target");
      n ||
        ((n = e.attr("href")),
        (n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")));
      var i = n && t(n);
      return i && i.length ? i : e.parent();
    }
    var i = ".dropdown-backdrop",
      o = "[data-toggle=dropdown]",
      a = function (e) {
        t(e).on("click.bs.dropdown", this.toggle);
      };
    (a.prototype.toggle = function (i) {
      var o = t(this);
      if (!o.is(".disabled, :disabled")) {
        var a = n(o),
          r = a.hasClass("open");
        if ((e(), !r)) {
          if (
            ("ontouchstart" in document.documentElement &&
              !a.closest(".navbar-nav").length &&
              t('<div class="dropdown-backdrop"/>')
                .insertAfter(t(this))
                .on("click", e),
            a.trigger((i = t.Event("show.bs.dropdown"))),
            i.isDefaultPrevented())
          )
            return;
          a.toggleClass("open").trigger("shown.bs.dropdown"), o.focus();
        }
        return !1;
      }
    }),
      (a.prototype.keydown = function (e) {
        if (/(38|40|27)/.test(e.keyCode)) {
          var i = t(this);
          if (
            (e.preventDefault(),
            e.stopPropagation(),
            !i.is(".disabled, :disabled"))
          ) {
            var a = n(i),
              r = a.hasClass("open");
            if (!r || (r && 27 == e.keyCode))
              return 27 == e.which && a.find(o).focus(), i.click();
            var s = t("[role=menu] li:not(.divider):visible a", a);
            if (s.length) {
              var l = s.index(s.filter(":focus"));
              38 == e.keyCode && l > 0 && l--,
                40 == e.keyCode && l < s.length - 1 && l++,
                ~l || (l = 0),
                s.eq(l).focus();
            }
          }
        }
      });
    var r = t.fn.dropdown;
    (t.fn.dropdown = function (e) {
      return this.each(function () {
        var n = t(this),
          i = n.data("dropdown");
        i || n.data("dropdown", (i = new a(this))),
          "string" == typeof e && i[e].call(n);
      });
    }),
      (t.fn.dropdown.Constructor = a),
      (t.fn.dropdown.noConflict = function () {
        return (t.fn.dropdown = r), this;
      }),
      t(document)
        .on("click.bs.dropdown.data-api", e)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
          t.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", o, a.prototype.toggle)
        .on(
          "keydown.bs.dropdown.data-api",
          o + ", [role=menu]",
          a.prototype.keydown
        );
  })(jQuery),
  +(function (t) {
    "use strict";
    var e = function (e, n) {
      (this.options = n),
        (this.$element = t(e)),
        (this.$backdrop = this.isShown = null),
        this.options.remote && this.$element.load(this.options.remote);
    };
    (e.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (e.prototype.toggle = function (t) {
        return this[this.isShown ? "hide" : "show"](t);
      }),
      (e.prototype.show = function (e) {
        var n = this,
          i = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(i),
          this.isShown ||
            i.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.escape(),
            this.$element.on(
              "click.dismiss.modal",
              '[data-dismiss="modal"]',
              t.proxy(this.hide, this)
            ),
            this.backdrop(function () {
              var i = t.support.transition && n.$element.hasClass("fade");
              n.$element.parent().length || n.$element.appendTo(document.body),
                n.$element.show(),
                i && n.$element[0].offsetWidth,
                n.$element.addClass("in").attr("aria-hidden", !1),
                n.enforceFocus();
              var o = t.Event("shown.bs.modal", { relatedTarget: e });
              i
                ? n.$element
                    .find(".modal-dialog")
                    .one(t.support.transition.end, function () {
                      n.$element.focus().trigger(o);
                    })
                    .emulateTransitionEnd(300)
                : n.$element.focus().trigger(o);
            }));
      }),
      (e.prototype.hide = function (e) {
        e && e.preventDefault(),
          (e = t.Event("hide.bs.modal")),
          this.$element.trigger(e),
          this.isShown &&
            !e.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            t(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .attr("aria-hidden", !0)
              .off("click.dismiss.modal"),
            t.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one(t.support.transition.end, t.proxy(this.hideModal, this))
                  .emulateTransitionEnd(300)
              : this.hideModal());
      }),
      (e.prototype.enforceFocus = function () {
        t(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            t.proxy(function (t) {
              this.$element[0] === t.target ||
                this.$element.has(t.target).length ||
                this.$element.focus();
            }, this)
          );
      }),
      (e.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keyup.dismiss.bs.modal",
              t.proxy(function (t) {
                27 == t.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
      }),
      (e.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(),
          this.backdrop(function () {
            t.removeBackdrop(), t.$element.trigger("hidden.bs.modal");
          });
      }),
      (e.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (e.prototype.backdrop = function (e) {
        var n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var i = t.support.transition && n;
          if (
            ((this.$backdrop = t(
              '<div class="modal-backdrop ' + n + '" />'
            ).appendTo(document.body)),
            this.$element.on(
              "click.dismiss.modal",
              t.proxy(function (t) {
                t.target === t.currentTarget &&
                  ("static" == this.options.backdrop
                    ? this.$element[0].focus.call(this.$element[0])
                    : this.hide.call(this));
              }, this)
            ),
            i && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
          )
            return;
          i
            ? this.$backdrop
                .one(t.support.transition.end, e)
                .emulateTransitionEnd(150)
            : e();
        } else
          !this.isShown && this.$backdrop
            ? (this.$backdrop.removeClass("in"),
              t.support.transition && this.$element.hasClass("fade")
                ? this.$backdrop
                    .one(t.support.transition.end, e)
                    .emulateTransitionEnd(150)
                : e())
            : e && e();
      });
    var n = t.fn.modal;
    (t.fn.modal = function (n, i) {
      return this.each(function () {
        var o = t(this),
          a = o.data("bs.modal"),
          r = t.extend({}, e.DEFAULTS, o.data(), "object" == typeof n && n);
        a || o.data("bs.modal", (a = new e(this, r))),
          "string" == typeof n ? a[n](i) : r.show && a.show(i);
      });
    }),
      (t.fn.modal.Constructor = e),
      (t.fn.modal.noConflict = function () {
        return (t.fn.modal = n), this;
      }),
      t(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (e) {
          var n = t(this),
            i = n.attr("href"),
            o = t(
              n.attr("data-target") || (i && i.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            a = o.data("modal")
              ? "toggle"
              : t.extend({ remote: !/#/.test(i) && i }, o.data(), n.data());
          e.preventDefault(),
            o.modal(a, this).one("hide", function () {
              n.is(":visible") && n.focus();
            });
        }
      ),
      t(document)
        .on("show.bs.modal", ".modal", function () {
          t(document.body).addClass("modal-open");
        })
        .on("hidden.bs.modal", ".modal", function () {
          t(document.body).removeClass("modal-open");
        });
  })(jQuery),
  +(function (t) {
    "use strict";
    var e = function (t, e) {
      (this.type =
        this.options =
        this.enabled =
        this.timeout =
        this.hoverState =
        this.$element =
          null),
        this.init("tooltip", t, e);
    };
    (e.DEFAULTS = {
      animation: !0,
      placement: "top",
      selector: !1,
      template:
        '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      container: !1,
    }),
      (e.prototype.init = function (e, n, i) {
        (this.enabled = !0),
          (this.type = e),
          (this.$element = t(n)),
          (this.options = this.getOptions(i));
        for (var o = this.options.trigger.split(" "), a = o.length; a--; ) {
          var r = o[a];
          if ("click" == r)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              t.proxy(this.toggle, this)
            );
          else if ("manual" != r) {
            var s = "hover" == r ? "mouseenter" : "focus",
              l = "hover" == r ? "mouseleave" : "blur";
            this.$element.on(
              s + "." + this.type,
              this.options.selector,
              t.proxy(this.enter, this)
            ),
              this.$element.on(
                l + "." + this.type,
                this.options.selector,
                t.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = t.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (e.prototype.getDefaults = function () {
        return e.DEFAULTS;
      }),
      (e.prototype.getOptions = function (e) {
        return (
          (e = t.extend({}, this.getDefaults(), this.$element.data(), e)),
          e.delay &&
            "number" == typeof e.delay &&
            (e.delay = { show: e.delay, hide: e.delay }),
          e
        );
      }),
      (e.prototype.getDelegateOptions = function () {
        var e = {},
          n = this.getDefaults();
        return (
          this._options &&
            t.each(this._options, function (t, i) {
              n[t] != i && (e[t] = i);
            }),
          e
        );
      }),
      (e.prototype.enter = function (e) {
        var n =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget)
                [this.type](this.getDelegateOptions())
                .data("bs." + this.type);
        return (
          clearTimeout(n.timeout),
          (n.hoverState = "in"),
          n.options.delay && n.options.delay.show
            ? void (n.timeout = setTimeout(function () {
                "in" == n.hoverState && n.show();
              }, n.options.delay.show))
            : n.show()
        );
      }),
      (e.prototype.leave = function (e) {
        var n =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget)
                [this.type](this.getDelegateOptions())
                .data("bs." + this.type);
        return (
          clearTimeout(n.timeout),
          (n.hoverState = "out"),
          n.options.delay && n.options.delay.hide
            ? void (n.timeout = setTimeout(function () {
                "out" == n.hoverState && n.hide();
              }, n.options.delay.hide))
            : n.hide()
        );
      }),
      (e.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          if ((this.$element.trigger(e), e.isDefaultPrevented())) return;
          var n = this.tip();
          this.setContent(), this.options.animation && n.addClass("fade");
          var i =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, n[0], this.$element[0])
                : this.options.placement,
            o = /\s?auto?\s?/i,
            a = o.test(i);
          a && (i = i.replace(o, "") || "top"),
            n.detach().css({ top: 0, left: 0, display: "block" }).addClass(i),
            this.options.container
              ? n.appendTo(this.options.container)
              : n.insertAfter(this.$element);
          var r = this.getPosition(),
            s = n[0].offsetWidth,
            l = n[0].offsetHeight;
          if (a) {
            var c = this.$element.parent(),
              u = i,
              p = document.documentElement.scrollTop || document.body.scrollTop,
              d =
                "body" == this.options.container
                  ? window.innerWidth
                  : c.outerWidth(),
              f =
                "body" == this.options.container
                  ? window.innerHeight
                  : c.outerHeight(),
              h = "body" == this.options.container ? 0 : c.offset().left;
            (i =
              "bottom" == i && r.top + r.height + l - p > f
                ? "top"
                : "top" == i && r.top - p - l < 0
                ? "bottom"
                : "right" == i && r.right + s > d
                ? "left"
                : "left" == i && r.left - s < h
                ? "right"
                : i),
              n.removeClass(u).addClass(i);
          }
          var g = this.getCalculatedOffset(i, r, s, l);
          this.applyPlacement(g, i),
            this.$element.trigger("shown.bs." + this.type);
        }
      }),
      (e.prototype.applyPlacement = function (t, e) {
        var n,
          i = this.tip(),
          o = i[0].offsetWidth,
          a = i[0].offsetHeight,
          r = parseInt(i.css("margin-top"), 10),
          s = parseInt(i.css("margin-left"), 10);
        isNaN(r) && (r = 0),
          isNaN(s) && (s = 0),
          (t.top = t.top + r),
          (t.left = t.left + s),
          i.offset(t).addClass("in");
        var l = i[0].offsetWidth,
          c = i[0].offsetHeight;
        if (
          ("top" == e && c != a && ((n = !0), (t.top = t.top + a - c)),
          /bottom|top/.test(e))
        ) {
          var u = 0;
          t.left < 0 &&
            ((u = -2 * t.left),
            (t.left = 0),
            i.offset(t),
            (l = i[0].offsetWidth),
            (c = i[0].offsetHeight)),
            this.replaceArrow(u - o + l, l, "left");
        } else this.replaceArrow(c - a, c, "top");
        n && i.offset(t);
      }),
      (e.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "");
      }),
      (e.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
          t.removeClass("fade in top bottom left right");
      }),
      (e.prototype.hide = function () {
        function e() {
          "in" != n.hoverState && i.detach();
        }
        var n = this,
          i = this.tip(),
          o = t.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(o),
          o.isDefaultPrevented()
            ? void 0
            : (i.removeClass("in"),
              t.support.transition && this.$tip.hasClass("fade")
                ? i.one(t.support.transition.end, e).emulateTransitionEnd(150)
                : e(),
              this.$element.trigger("hidden.bs." + this.type),
              this)
        );
      }),
      (e.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) &&
          t
            .attr("data-original-title", t.attr("title") || "")
            .attr("title", "");
      }),
      (e.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (e.prototype.getPosition = function () {
        var e = this.$element[0];
        return t.extend(
          {},
          "function" == typeof e.getBoundingClientRect
            ? e.getBoundingClientRect()
            : { width: e.offsetWidth, height: e.offsetHeight },
          this.$element.offset()
        );
      }),
      (e.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t
          ? { top: e.top + e.height, left: e.left + e.width / 2 - n / 2 }
          : "top" == t
          ? { top: e.top - i, left: e.left + e.width / 2 - n / 2 }
          : "left" == t
          ? { top: e.top + e.height / 2 - i / 2, left: e.left - n }
          : { top: e.top + e.height / 2 - i / 2, left: e.left + e.width };
      }),
      (e.prototype.getTitle = function () {
        var t,
          e = this.$element,
          n = this.options;
        return (t =
          e.attr("data-original-title") ||
          ("function" == typeof n.title ? n.title.call(e[0]) : n.title));
      }),
      (e.prototype.tip = function () {
        return (this.$tip = this.$tip || t(this.options.template));
      }),
      (e.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (e.prototype.validate = function () {
        this.$element[0].parentNode ||
          (this.hide(), (this.$element = null), (this.options = null));
      }),
      (e.prototype.enable = function () {
        this.enabled = !0;
      }),
      (e.prototype.disable = function () {
        this.enabled = !1;
      }),
      (e.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (e.prototype.toggle = function (e) {
        var n = e
          ? t(e.currentTarget)
              [this.type](this.getDelegateOptions())
              .data("bs." + this.type)
          : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n);
      }),
      (e.prototype.destroy = function () {
        this.hide()
          .$element.off("." + this.type)
          .removeData("bs." + this.type);
      });
    var n = t.fn.tooltip;
    (t.fn.tooltip = function (n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.tooltip"),
          a = "object" == typeof n && n;
        o || i.data("bs.tooltip", (o = new e(this, a))),
          "string" == typeof n && o[n]();
      });
    }),
      (t.fn.tooltip.Constructor = e),
      (t.fn.tooltip.noConflict = function () {
        return (t.fn.tooltip = n), this;
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    var e = function (t, e) {
      this.init("popover", t, e);
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
    })),
      (e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
      (e.prototype.constructor = e),
      (e.prototype.getDefaults = function () {
        return e.DEFAULTS;
      }),
      (e.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle(),
          n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
          t.find(".popover-content")[this.options.html ? "html" : "text"](n),
          t.removeClass("fade top bottom left right in"),
          t.find(".popover-title").html() || t.find(".popover-title").hide();
      }),
      (e.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (e.prototype.getContent = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-content") ||
          ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        );
      }),
      (e.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      }),
      (e.prototype.tip = function () {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip;
      });
    var n = t.fn.popover;
    (t.fn.popover = function (n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.popover"),
          a = "object" == typeof n && n;
        o || i.data("bs.popover", (o = new e(this, a))),
          "string" == typeof n && o[n]();
      });
    }),
      (t.fn.popover.Constructor = e),
      (t.fn.popover.noConflict = function () {
        return (t.fn.popover = n), this;
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(n, i) {
      var o,
        a = t.proxy(this.process, this);
      (this.$element = t(t(n).is("body") ? window : n)),
        (this.$body = t("body")),
        (this.$scrollElement = this.$element.on(
          "scroll.bs.scroll-spy.data-api",
          a
        )),
        (this.options = t.extend({}, e.DEFAULTS, i)),
        (this.selector =
          (this.options.target ||
            ((o = t(n).attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")) ||
            "") + " .nav li > a"),
        (this.offsets = t([])),
        (this.targets = t([])),
        (this.activeTarget = null),
        this.refresh(),
        this.process();
    }
    (e.DEFAULTS = { offset: 10 }),
      (e.prototype.refresh = function () {
        var e = this.$element[0] == window ? "offset" : "position";
        (this.offsets = t([])), (this.targets = t([]));
        var n = this;
        this.$body
          .find(this.selector)
          .map(function () {
            var i = t(this),
              o = i.data("target") || i.attr("href"),
              a = /^#\w/.test(o) && t(o);
            return (
              (a &&
                a.length && [
                  [
                    a[e]().top +
                      (!t.isWindow(n.$scrollElement.get(0)) &&
                        n.$scrollElement.scrollTop()),
                    o,
                  ],
                ]) ||
              null
            );
          })
          .sort(function (t, e) {
            return t[0] - e[0];
          })
          .each(function () {
            n.offsets.push(this[0]), n.targets.push(this[1]);
          });
      }),
      (e.prototype.process = function () {
        var t,
          e = this.$scrollElement.scrollTop() + this.options.offset,
          n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
          i = n - this.$scrollElement.height(),
          o = this.offsets,
          a = this.targets,
          r = this.activeTarget;
        if (e >= i) return r != (t = a.last()[0]) && this.activate(t);
        for (t = o.length; t--; )
          r != a[t] &&
            e >= o[t] &&
            (!o[t + 1] || e <= o[t + 1]) &&
            this.activate(a[t]);
      }),
      (e.prototype.activate = function (e) {
        (this.activeTarget = e),
          t(this.selector).parents(".active").removeClass("active");
        var n =
            this.selector +
            '[data-target="' +
            e +
            '"],' +
            this.selector +
            '[href="' +
            e +
            '"]',
          i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length &&
          (i = i.closest("li.dropdown").addClass("active")),
          i.trigger("activate");
      });
    var n = t.fn.scrollspy;
    (t.fn.scrollspy = function (n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.scrollspy"),
          a = "object" == typeof n && n;
        o || i.data("bs.scrollspy", (o = new e(this, a))),
          "string" == typeof n && o[n]();
      });
    }),
      (t.fn.scrollspy.Constructor = e),
      (t.fn.scrollspy.noConflict = function () {
        return (t.fn.scrollspy = n), this;
      }),
      t(window).on("load", function () {
        t('[data-spy="scroll"]').each(function () {
          var e = t(this);
          e.scrollspy(e.data());
        });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    var e = function (e) {
      this.element = t(e);
    };
    (e.prototype.show = function () {
      var e = this.element,
        n = e.closest("ul:not(.dropdown-menu)"),
        i = e.data("target");
      if (
        (i ||
          ((i = e.attr("href")), (i = i && i.replace(/.*(?=#[^\s]*$)/, ""))),
        !e.parent("li").hasClass("active"))
      ) {
        var o = n.find(".active:last a")[0],
          a = t.Event("show.bs.tab", { relatedTarget: o });
        if ((e.trigger(a), !a.isDefaultPrevented())) {
          var r = t(i);
          this.activate(e.parent("li"), n),
            this.activate(r, r.parent(), function () {
              e.trigger({ type: "shown.bs.tab", relatedTarget: o });
            });
        }
      }
    }),
      (e.prototype.activate = function (e, n, i) {
        function o() {
          a
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active"),
            e.addClass("active"),
            r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu") &&
              e.closest("li.dropdown").addClass("active"),
            i && i();
        }
        var a = n.find("> .active"),
          r = i && t.support.transition && a.hasClass("fade");
        r ? a.one(t.support.transition.end, o).emulateTransitionEnd(150) : o(),
          a.removeClass("in");
      });
    var n = t.fn.tab;
    (t.fn.tab = function (n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.tab");
        o || i.data("bs.tab", (o = new e(this))),
          "string" == typeof n && o[n]();
      });
    }),
      (t.fn.tab.Constructor = e),
      (t.fn.tab.noConflict = function () {
        return (t.fn.tab = n), this;
      }),
      t(document).on(
        "click.bs.tab.data-api",
        '[data-toggle="tab"], [data-toggle="pill"]',
        function (e) {
          e.preventDefault(), t(this).tab("show");
        }
      );
  })(jQuery),
  +(function (t) {
    "use strict";
    var e = function (n, i) {
      (this.options = t.extend({}, e.DEFAULTS, i)),
        (this.$window = t(window)
          .on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            t.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = t(n)),
        (this.affixed = this.unpin = null),
        this.checkPosition();
    };
    (e.RESET = "affix affix-top affix-bottom"),
      (e.DEFAULTS = { offset: 0 }),
      (e.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1);
      }),
      (e.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var n = t(document).height(),
            i = this.$window.scrollTop(),
            o = this.$element.offset(),
            a = this.options.offset,
            r = a.top,
            s = a.bottom;
          "object" != typeof a && (s = r = a),
            "function" == typeof r && (r = a.top()),
            "function" == typeof s && (s = a.bottom());
          var l =
            null != this.unpin && i + this.unpin <= o.top
              ? !1
              : null != s && o.top + this.$element.height() >= n - s
              ? "bottom"
              : null != r && r >= i
              ? "top"
              : !1;
          this.affixed !== l &&
            (this.unpin && this.$element.css("top", ""),
            (this.affixed = l),
            (this.unpin = "bottom" == l ? o.top - i : null),
            this.$element
              .removeClass(e.RESET)
              .addClass("affix" + (l ? "-" + l : "")),
            "bottom" == l &&
              this.$element.offset({
                top: document.body.offsetHeight - s - this.$element.height(),
              }));
        }
      });
    var n = t.fn.affix;
    (t.fn.affix = function (n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.affix"),
          a = "object" == typeof n && n;
        o || i.data("bs.affix", (o = new e(this, a))),
          "string" == typeof n && o[n]();
      });
    }),
      (t.fn.affix.Constructor = e),
      (t.fn.affix.noConflict = function () {
        return (t.fn.affix = n), this;
      }),
      t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
          var e = t(this),
            n = e.data();
          (n.offset = n.offset || {}),
            n.offsetBottom && (n.offset.bottom = n.offsetBottom),
            n.offsetTop && (n.offset.top = n.offsetTop),
            e.affix(n);
        });
      });
  })(jQuery),
  !(function (t, e) {
    (t.MixItUp = function () {
      var e = this;
      e._execAction("_constructor", 0),
        t.extend(e, {
          selectors: { target: ".mix", filter: ".filter", sort: ".sort" },
          animation: {
            enable: !0,
            effects: "fade scale",
            duration: 600,
            easing: "ease",
            perspectiveDistance: "3000",
            perspectiveOrigin: "50% 50%",
            queue: !0,
            queueLimit: 1,
            animateChangeLayout: !1,
            animateResizeContainer: !0,
            animateResizeTargets: !1,
            staggerSequence: !1,
            reverseOut: !1,
          },
          callbacks: {
            onMixLoad: !1,
            onMixStart: !1,
            onMixBusy: !1,
            onMixEnd: !1,
            onMixFail: !1,
            _user: !1,
          },
          controls: {
            enable: !0,
            live: !1,
            toggleFilterButtons: !1,
            toggleLogic: "or",
            activeClass: "active",
          },
          layout: {
            display: "inline-block",
            containerClass: "",
            containerClassFail: "fail",
          },
          load: { filter: "all", sort: !1 },
          _$body: null,
          _$container: null,
          _$targets: null,
          _$parent: null,
          _$sortButtons: null,
          _$filterButtons: null,
          _suckMode: !1,
          _mixing: !1,
          _sorting: !1,
          _clicking: !1,
          _loading: !0,
          _changingLayout: !1,
          _changingClass: !1,
          _changingDisplay: !1,
          _origOrder: [],
          _startOrder: [],
          _newOrder: [],
          _activeFilter: null,
          _toggleArray: [],
          _toggleString: "",
          _activeSort: "default:asc",
          _newSort: null,
          _startHeight: null,
          _newHeight: null,
          _incPadding: !0,
          _newDisplay: null,
          _newClass: null,
          _targetsBound: 0,
          _targetsDone: 0,
          _queue: [],
          _$show: t(),
          _$hide: t(),
        }),
        e._execAction("_constructor", 1);
    }),
      (t.MixItUp.prototype = {
        constructor: t.MixItUp,
        _instances: {},
        _handled: { _filter: {}, _sort: {} },
        _bound: { _filter: {}, _sort: {} },
        _actions: {},
        _filters: {},
        extend: function (e) {
          for (var n in e) t.MixItUp.prototype[n] = e[n];
        },
        addAction: function (e, n, i, o) {
          t.MixItUp.prototype._addHook("_actions", e, n, i, o);
        },
        addFilter: function (e, n, i, o) {
          t.MixItUp.prototype._addHook("_filters", e, n, i, o);
        },
        _addHook: function (e, n, i, o, a) {
          var r = t.MixItUp.prototype[e],
            s = {};
          (a = 1 === a || "post" === a ? "post" : "pre"),
            (s[n] = {}),
            (s[n][a] = {}),
            (s[n][a][i] = o),
            t.extend(!0, r, s);
        },
        _init: function (e, n) {
          var i = this;
          if (
            (i._execAction("_init", 0, arguments),
            n && t.extend(!0, i, n),
            (i._$body = t("body")),
            (i._domNode = e),
            (i._$container = t(e)),
            i._$container.addClass(i.layout.containerClass),
            (i._id = e.id),
            i._platformDetect(),
            (i._brake = i._getPrefixedCSS("transition", "none")),
            i._refresh(!0),
            (i._$parent = i._$targets.parent().length
              ? i._$targets.parent()
              : i._$container),
            i.load.sort &&
              ((i._newSort = i._parseSort(i.load.sort)),
              (i._newSortString = i.load.sort),
              (i._activeSort = i.load.sort),
              i._sort(),
              i._printSort()),
            (i._activeFilter =
              "all" === i.load.filter
                ? i.selectors.target
                : "none" === i.load.filter
                ? ""
                : i.load.filter),
            i.controls.enable && i._bindHandlers(),
            i.controls.toggleFilterButtons)
          ) {
            i._buildToggleArray();
            for (var o = 0; o < i._toggleArray.length; o++)
              i._updateControls(
                { filter: i._toggleArray[o], sort: i._activeSort },
                !0
              );
          } else
            i.controls.enable &&
              i._updateControls({
                filter: i._activeFilter,
                sort: i._activeSort,
              });
          i._filter(),
            (i._init = !0),
            i._$container.data("mixItUp", i),
            i._execAction("_init", 1, arguments),
            i._buildState(),
            i._$targets.css(i._brake),
            i._goMix(i.animation.enable);
        },
        _platformDetect: function () {
          var t = this,
            n = ["Webkit", "Moz", "O", "ms"],
            i = ["webkit", "moz"],
            o = window.navigator.appVersion.match(/Chrome\/(\d+)\./) || !1,
            a = "undefined" != typeof InstallTrigger,
            r = function (t) {
              for (var e = 0; e < n.length; e++)
                if (n[e] + "Transition" in t.style)
                  return {
                    prefix: "-" + n[e].toLowerCase() + "-",
                    vendor: n[e],
                  };
              return "transition" in t.style ? "" : !1;
            },
            s = r(t._domNode);
          t._execAction("_platformDetect", 0),
            (t._chrome = o ? parseInt(o[1], 10) : !1),
            (t._ff = a
              ? parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1])
              : !1),
            (t._prefix = s.prefix),
            (t._vendor = s.vendor),
            (t._suckMode = window.atob && t._prefix ? !1 : !0),
            t._suckMode && (t.animation.enable = !1),
            t._ff && t._ff <= 4 && (t.animation.enable = !1);
          for (var l = 0; l < i.length && !window.requestAnimationFrame; l++)
            window.requestAnimationFrame =
              window[i[l] + "RequestAnimationFrame"];
          "function" != typeof Object.getPrototypeOf &&
            (Object.getPrototypeOf =
              "object" == typeof "test".__proto__
                ? function (t) {
                    return t.__proto__;
                  }
                : function (t) {
                    return t.constructor.prototype;
                  }),
            t._domNode.nextElementSibling === e &&
              Object.defineProperty(Element.prototype, "nextElementSibling", {
                get: function () {
                  for (var t = this.nextSibling; t; ) {
                    if (1 === t.nodeType) return t;
                    t = t.nextSibling;
                  }
                  return null;
                },
              }),
            t._execAction("_platformDetect", 1);
        },
        _refresh: function (t, n) {
          var i = this;
          i._execAction("_refresh", 0, arguments),
            (i._$targets = i._$container.find(i.selectors.target));
          for (var o = 0; o < i._$targets.length; o++) {
            var a = i._$targets[o];
            if (a.dataset === e || n) {
              a.dataset = {};
              for (var r = 0; r < a.attributes.length; r++) {
                var s = a.attributes[r],
                  l = s.name,
                  c = s.nodeValue;
                if (l.indexOf("data-") > -1) {
                  var u = i._helpers._camelCase(l.substring(5, l.length));
                  a.dataset[u] = c;
                }
              }
            }
            a.mixParent === e && (a.mixParent = i._id);
          }
          if (
            (i._$targets.length && t) ||
            (!i._origOrder.length && i._$targets.length)
          ) {
            i._origOrder = [];
            for (var o = 0; o < i._$targets.length; o++) {
              var a = i._$targets[o];
              i._origOrder.push(a);
            }
          }
          i._execAction("_refresh", 1, arguments);
        },
        _bindHandlers: function () {
          var n = this,
            i = t.MixItUp.prototype._bound._filter,
            o = t.MixItUp.prototype._bound._sort;
          n._execAction("_bindHandlers", 0),
            n.controls.live
              ? n._$body
                  .on("click.mixItUp." + n._id, n.selectors.sort, function () {
                    n._processClick(t(this), "sort");
                  })
                  .on(
                    "click.mixItUp." + n._id,
                    n.selectors.filter,
                    function () {
                      n._processClick(t(this), "filter");
                    }
                  )
              : ((n._$sortButtons = t(n.selectors.sort)),
                (n._$filterButtons = t(n.selectors.filter)),
                n._$sortButtons.on("click.mixItUp." + n._id, function () {
                  n._processClick(t(this), "sort");
                }),
                n._$filterButtons.on("click.mixItUp." + n._id, function () {
                  n._processClick(t(this), "filter");
                })),
            (i[n.selectors.filter] =
              i[n.selectors.filter] === e ? 1 : i[n.selectors.filter] + 1),
            (o[n.selectors.sort] =
              o[n.selectors.sort] === e ? 1 : o[n.selectors.sort] + 1),
            n._execAction("_bindHandlers", 1);
        },
        _processClick: function (n, i) {
          var o = this,
            a = function (n, i, a) {
              var r = t.MixItUp.prototype;
              (r._handled["_" + i][o.selectors[i]] =
                r._handled["_" + i][o.selectors[i]] === e
                  ? 1
                  : r._handled["_" + i][o.selectors[i]] + 1),
                r._handled["_" + i][o.selectors[i]] ===
                  r._bound["_" + i][o.selectors[i]] &&
                  (n[(a ? "remove" : "add") + "Class"](o.controls.activeClass),
                  delete r._handled["_" + i][o.selectors[i]]);
            };
          if (
            (o._execAction("_processClick", 0, arguments),
            !o._mixing ||
              (o.animation.queue && o._queue.length < o.animation.queueLimit))
          ) {
            if (((o._clicking = !0), "sort" === i)) {
              var r = n.attr("data-sort");
              (!n.hasClass(o.controls.activeClass) ||
                r.indexOf("random") > -1) &&
                (t(o.selectors.sort).removeClass(o.controls.activeClass),
                a(n, i),
                o.sort(r));
            }
            if ("filter" === i) {
              var s,
                l = n.attr("data-filter"),
                c = "or" === o.controls.toggleLogic ? "," : "";
              o.controls.toggleFilterButtons
                ? (o._buildToggleArray(),
                  n.hasClass(o.controls.activeClass)
                    ? (a(n, i, !0),
                      (s = o._toggleArray.indexOf(l)),
                      o._toggleArray.splice(s, 1))
                    : (a(n, i), o._toggleArray.push(l)),
                  (o._toggleArray = t.grep(o._toggleArray, function (t) {
                    return t;
                  })),
                  (o._toggleString = o._toggleArray.join(c)),
                  o.filter(o._toggleString))
                : n.hasClass(o.controls.activeClass) ||
                  (t(o.selectors.filter).removeClass(o.controls.activeClass),
                  a(n, i),
                  o.filter(l));
            }
            o._execAction("_processClick", 1, arguments);
          } else
            "function" == typeof o.callbacks.onMixBusy &&
              o.callbacks.onMixBusy.call(o._domNode, o._state, o),
              o._execAction("_processClickBusy", 1, arguments);
        },
        _buildToggleArray: function () {
          var t = this,
            e = t._activeFilter.replace(/\s/g, "");
          if (
            (t._execAction("_buildToggleArray", 0, arguments),
            "or" === t.controls.toggleLogic)
          )
            t._toggleArray = e.split(",");
          else {
            (t._toggleArray = e.split(".")),
              !t._toggleArray[0] && t._toggleArray.shift();
            for (var n, i = 0; (n = t._toggleArray[i]); i++)
              t._toggleArray[i] = "." + n;
          }
          t._execAction("_buildToggleArray", 1, arguments);
        },
        _updateControls: function (n, i) {
          var o = this,
            a = { filter: n.filter, sort: n.sort },
            r = function (t, e) {
              i && "filter" == s && "none" !== a.filter && "" !== a.filter
                ? t.filter(e).addClass(o.controls.activeClass)
                : t
                    .removeClass(o.controls.activeClass)
                    .filter(e)
                    .addClass(o.controls.activeClass);
            },
            s = "filter",
            l = null;
          o._execAction("_updateControls", 0, arguments),
            n.filter === e && (a.filter = o._activeFilter),
            n.sort === e && (a.sort = o._activeSort),
            a.filter === o.selectors.target && (a.filter = "all");
          for (var c = 0; 2 > c; c++)
            (l = o.controls.live ? t(o.selectors[s]) : o["_$" + s + "Buttons"]),
              l && r(l, "[data-" + s + '="' + a[s] + '"]'),
              (s = "sort");
          o._execAction("_updateControls", 1, arguments);
        },
        _filter: function () {
          var e = this;
          e._execAction("_filter", 0);
          for (var n = 0; n < e._$targets.length; n++) {
            var i = t(e._$targets[n]);
            i.is(e._activeFilter)
              ? (e._$show = e._$show.add(i))
              : (e._$hide = e._$hide.add(i));
          }
          e._execAction("_filter", 1);
        },
        _sort: function () {
          var t = this,
            e = function (t) {
              for (var e = t.slice(), n = e.length, i = n; i--; ) {
                var o = parseInt(Math.random() * n),
                  a = e[i];
                (e[i] = e[o]), (e[o] = a);
              }
              return e;
            };
          t._execAction("_sort", 0), (t._startOrder = []);
          for (var n = 0; n < t._$targets.length; n++) {
            var i = t._$targets[n];
            t._startOrder.push(i);
          }
          switch (t._newSort[0].sortBy) {
            case "default":
              t._newOrder = t._origOrder;
              break;
            case "random":
              t._newOrder = e(t._startOrder);
              break;
            case "custom":
              t._newOrder = t._newSort[0].order;
              break;
            default:
              t._newOrder = t._startOrder.concat().sort(function (e, n) {
                return t._compare(e, n);
              });
          }
          t._execAction("_sort", 1);
        },
        _compare: function (t, e, n) {
          n = n ? n : 0;
          var i = this,
            o = i._newSort[n].order,
            a = function (t) {
              return t.dataset[i._newSort[n].sortBy] || 0;
            },
            r = isNaN(1 * a(t)) ? a(t).toLowerCase() : 1 * a(t),
            s = isNaN(1 * a(e)) ? a(e).toLowerCase() : 1 * a(e);
          return s > r
            ? "asc" == o
              ? -1
              : 1
            : r > s
            ? "asc" == o
              ? 1
              : -1
            : r == s && i._newSort.length > n + 1
            ? i._compare(t, e, n + 1)
            : 0;
        },
        _printSort: function (t) {
          var e = this,
            n = t ? e._startOrder : e._newOrder,
            i = e._$parent[0].querySelectorAll(e.selectors.target),
            o = i[i.length - 1].nextElementSibling,
            a = document.createDocumentFragment();
          e._execAction("_printSort", 0, arguments);
          for (var r = 0; r < i.length; r++) {
            var s = i[r],
              l = s.nextSibling;
            "absolute" !== s.style.position &&
              (l && "#text" == l.nodeName && e._$parent[0].removeChild(l),
              e._$parent[0].removeChild(s));
          }
          for (var r = 0; r < n.length; r++) {
            var c = n[r];
            if (
              "default" != e._newSort[0].sortBy ||
              "desc" != e._newSort[0].order ||
              t
            )
              a.appendChild(c), a.appendChild(document.createTextNode(" "));
            else {
              var u = a.firstChild;
              a.insertBefore(c, u),
                a.insertBefore(document.createTextNode(" "), c);
            }
          }
          o ? e._$parent[0].insertBefore(a, o) : e._$parent[0].appendChild(a),
            e._execAction("_printSort", 1, arguments);
        },
        _parseSort: function (t) {
          for (
            var e = this,
              n = "string" == typeof t ? t.split(" ") : [t],
              i = [],
              o = 0;
            o < n.length;
            o++
          ) {
            var a = "string" == typeof t ? n[o].split(":") : ["custom", n[o]],
              r = { sortBy: e._helpers._camelCase(a[0]), order: a[1] || "asc" };
            if ((i.push(r), "default" == r.sortBy || "random" == r.sortBy))
              break;
          }
          return e._execFilter("_parseSort", i, arguments);
        },
        _parseEffects: function () {
          var t = this,
            e = { opacity: "", transformIn: "", transformOut: "", filter: "" },
            n = function (e, n) {
              if (t.animation.effects.indexOf(e) > -1) {
                if (n) {
                  var i = t.animation.effects.indexOf(e + "(");
                  if (i > -1) {
                    var o = t.animation.effects.substring(i),
                      a = /\(([^)]+)\)/.exec(o),
                      r = a[1];
                    return { val: r };
                  }
                }
                return !0;
              }
              return !1;
            },
            i = function (t, e) {
              return e
                ? "-" === t.charAt(0)
                  ? t.substr(1, t.length)
                  : "-" + t
                : t;
            },
            o = function (t, o) {
              for (
                var a = [
                    ["scale", ".01"],
                    ["translateX", "20px"],
                    ["translateY", "20px"],
                    ["translateZ", "20px"],
                    ["rotateX", "90deg"],
                    ["rotateY", "90deg"],
                    ["rotateZ", "180deg"],
                  ],
                  r = 0;
                r < a.length;
                r++
              ) {
                var s = a[r][0],
                  l = a[r][1],
                  c = o && "scale" !== s;
                e[t] += n(s) ? s + "(" + i(n(s, !0).val || l, c) + ") " : "";
              }
            };
          return (
            (e.opacity = n("fade") ? n("fade", !0).val || "0" : "1"),
            o("transformIn"),
            t.animation.reverseOut
              ? o("transformOut", !0)
              : (e.transformOut = e.transformIn),
            (e.transition = {}),
            (e.transition = t._getPrefixedCSS(
              "transition",
              "all " +
                t.animation.duration +
                "ms " +
                t.animation.easing +
                ", opacity " +
                t.animation.duration +
                "ms linear"
            )),
            (t.animation.stagger = n("stagger") ? !0 : !1),
            (t.animation.staggerDuration = parseInt(
              n("stagger") && n("stagger", !0).val ? n("stagger", !0).val : 100
            )),
            t._execFilter("_parseEffects", e)
          );
        },
        _buildState: function (t) {
          var e = this,
            n = {};
          return (
            e._execAction("_buildState", 0),
            (n = {
              activeFilter: "" === e._activeFilter ? "none" : e._activeFilter,
              activeSort:
                t && e._newSortString ? e._newSortString : e._activeSort,
              fail: !e._$show.length && "" !== e._activeFilter,
              $targets: e._$targets,
              $show: e._$show,
              $hide: e._$hide,
              totalTargets: e._$targets.length,
              totalShow: e._$show.length,
              totalHide: e._$hide.length,
              display: t && e._newDisplay ? e._newDisplay : e.layout.display,
            }),
            t
              ? e._execFilter("_buildState", n)
              : ((e._state = n), void e._execAction("_buildState", 1))
          );
        },
        _goMix: function (t) {
          var e = this,
            n = function () {
              e._chrome && 31 === e._chrome && a(e._$parent[0]),
                e._setInter(),
                i();
            },
            i = function () {
              var t = window.pageYOffset,
                n = window.pageXOffset;
              document.documentElement.scrollHeight,
                e._getInterMixData(),
                e._setFinal(),
                e._getFinalMixData(),
                window.pageYOffset !== t && window.scrollTo(n, t),
                e._prepTargets(),
                window.requestAnimationFrame
                  ? requestAnimationFrame(o)
                  : setTimeout(function () {
                      o();
                    }, 20);
            },
            o = function () {
              e._animateTargets(), 0 === e._targetsBound && e._cleanUp();
            },
            a = function (t) {
              var e = t.parentElement,
                n = document.createElement("div"),
                i = document.createDocumentFragment();
              e.insertBefore(n, t), i.appendChild(t), e.replaceChild(t, n);
            },
            r = e._buildState(!0);
          e._execAction("_goMix", 0, arguments),
            !e.animation.duration && (t = !1),
            (e._mixing = !0),
            e._$container.removeClass(e.layout.containerClassFail),
            "function" == typeof e.callbacks.onMixStart &&
              e.callbacks.onMixStart.call(e._domNode, e._state, r, e),
            e._$container.trigger("mixStart", [e._state, r, e]),
            e._getOrigMixData(),
            t && !e._suckMode
              ? window.requestAnimationFrame
                ? requestAnimationFrame(n)
                : n()
              : e._cleanUp(),
            e._execAction("_goMix", 1, arguments);
        },
        _getTargetData: function (t, e) {
          var n,
            i = this;
          (t.dataset[e + "PosX"] = t.offsetLeft),
            (t.dataset[e + "PosY"] = t.offsetTop),
            i.animation.animateResizeTargets &&
              ((n = window.getComputedStyle(t)),
              (t.dataset[e + "MarginBottom"] = parseInt(n.marginBottom)),
              (t.dataset[e + "MarginRight"] = parseInt(n.marginRight)),
              (t.dataset[e + "Width"] = t.offsetWidth),
              (t.dataset[e + "Height"] = t.offsetHeight));
        },
        _getOrigMixData: function () {
          var t = this,
            e = t._suckMode
              ? { boxSizing: "" }
              : window.getComputedStyle(t._$parent[0]),
            n = e.boxSizing || e[t._vendor + "BoxSizing"];
          (t._incPadding = "border-box" === n),
            t._execAction("_getOrigMixData", 0),
            !t._suckMode && (t.effects = t._parseEffects()),
            (t._$toHide = t._$hide.filter(":visible")),
            (t._$toShow = t._$show.filter(":hidden")),
            (t._$pre = t._$targets.filter(":visible")),
            (t._startHeight = t._incPadding
              ? t._$parent.outerHeight()
              : t._$parent.height());
          for (var i = 0; i < t._$pre.length; i++) {
            var o = t._$pre[i];
            t._getTargetData(o, "orig");
          }
          t._execAction("_getOrigMixData", 1);
        },
        _setInter: function () {
          var t = this;
          t._execAction("_setInter", 0),
            t._changingLayout && t.animation.animateChangeLayout
              ? (t._$toShow.css("display", t._newDisplay),
                t._changingClass &&
                  t._$container
                    .removeClass(t.layout.containerClass)
                    .addClass(t._newClass))
              : t._$toShow.css("display", t.layout.display),
            t._execAction("_setInter", 1);
        },
        _getInterMixData: function () {
          var t = this;
          t._execAction("_getInterMixData", 0);
          for (var e = 0; e < t._$toShow.length; e++) {
            var n = t._$toShow[e];
            t._getTargetData(n, "inter");
          }
          for (var e = 0; e < t._$pre.length; e++) {
            var n = t._$pre[e];
            t._getTargetData(n, "inter");
          }
          t._execAction("_getInterMixData", 1);
        },
        _setFinal: function () {
          var t = this;
          t._execAction("_setFinal", 0),
            t._sorting && t._printSort(),
            t._$toHide.removeStyle("display"),
            t._changingLayout &&
              t.animation.animateChangeLayout &&
              t._$pre.css("display", t._newDisplay),
            t._execAction("_setFinal", 1);
        },
        _getFinalMixData: function () {
          var t = this;
          t._execAction("_getFinalMixData", 0);
          for (var e = 0; e < t._$toShow.length; e++) {
            var n = t._$toShow[e];
            t._getTargetData(n, "final");
          }
          for (var e = 0; e < t._$pre.length; e++) {
            var n = t._$pre[e];
            t._getTargetData(n, "final");
          }
          (t._newHeight = t._incPadding
            ? t._$parent.outerHeight()
            : t._$parent.height()),
            t._sorting && t._printSort(!0),
            t._$toShow.removeStyle("display"),
            t._$pre.css("display", t.layout.display),
            t._changingClass &&
              t.animation.animateChangeLayout &&
              t._$container
                .removeClass(t._newClass)
                .addClass(t.layout.containerClass),
            t._execAction("_getFinalMixData", 1);
        },
        _prepTargets: function () {
          var e = this,
            n = {
              _in: e._getPrefixedCSS("transform", e.effects.transformIn),
              _out: e._getPrefixedCSS("transform", e.effects.transformOut),
            };
          e._execAction("_prepTargets", 0),
            e.animation.animateResizeContainer &&
              e._$parent.css("height", e._startHeight + "px");
          for (var i = 0; i < e._$toShow.length; i++) {
            var o = e._$toShow[i],
              a = t(o);
            (o.style.opacity = e.effects.opacity),
              (o.style.display =
                e._changingLayout && e.animation.animateChangeLayout
                  ? e._newDisplay
                  : e.layout.display),
              a.css(n._in),
              e.animation.animateResizeTargets &&
                ((o.style.width = o.dataset.finalWidth + "px"),
                (o.style.height = o.dataset.finalHeight + "px"),
                (o.style.marginRight =
                  -(o.dataset.finalWidth - o.dataset.interWidth) +
                  1 * o.dataset.finalMarginRight +
                  "px"),
                (o.style.marginBottom =
                  -(o.dataset.finalHeight - o.dataset.interHeight) +
                  1 * o.dataset.finalMarginBottom +
                  "px"));
          }
          for (var i = 0; i < e._$pre.length; i++) {
            var o = e._$pre[i],
              a = t(o),
              r = {
                x: o.dataset.origPosX - o.dataset.interPosX,
                y: o.dataset.origPosY - o.dataset.interPosY,
              },
              n = e._getPrefixedCSS(
                "transform",
                "translate(" + r.x + "px," + r.y + "px)"
              );
            a.css(n),
              e.animation.animateResizeTargets &&
                ((o.style.width = o.dataset.origWidth + "px"),
                (o.style.height = o.dataset.origHeight + "px"),
                o.dataset.origWidth - o.dataset.finalWidth &&
                  (o.style.marginRight =
                    -(o.dataset.origWidth - o.dataset.interWidth) +
                    1 * o.dataset.origMarginRight +
                    "px"),
                o.dataset.origHeight - o.dataset.finalHeight &&
                  (o.style.marginBottom =
                    -(o.dataset.origHeight - o.dataset.interHeight) +
                    1 * o.dataset.origMarginBottom +
                    "px"));
          }
          e._execAction("_prepTargets", 1);
        },
        _animateTargets: function () {
          var e = this;
          e._execAction("_animateTargets", 0),
            (e._targetsDone = 0),
            (e._targetsBound = 0),
            e._$parent
              .css(
                e._getPrefixedCSS(
                  "perspective",
                  e.animation.perspectiveDistance + "px"
                )
              )
              .css(
                e._getPrefixedCSS(
                  "perspective-origin",
                  e.animation.perspectiveOrigin
                )
              ),
            e.animation.animateResizeContainer &&
              e._$parent
                .css(
                  e._getPrefixedCSS(
                    "transition",
                    "height " + e.animation.duration + "ms ease"
                  )
                )
                .css("height", e._newHeight + "px");
          for (var n = 0; n < e._$toShow.length; n++) {
            var i = e._$toShow[n],
              o = t(i),
              a = {
                x: i.dataset.finalPosX - i.dataset.interPosX,
                y: i.dataset.finalPosY - i.dataset.interPosY,
              },
              r = e._getDelay(n),
              s = {};
            i.style.opacity = "";
            for (var l = 0; 2 > l; l++) {
              var c = 0 === l ? (c = e._prefix) : "";
              e._ff &&
                e._ff <= 20 &&
                ((s[c + "transition-property"] = "all"),
                (s[c + "transition-timing-function"] =
                  e.animation.easing + "ms"),
                (s[c + "transition-duration"] = e.animation.duration + "ms")),
                (s[c + "transition-delay"] = r + "ms"),
                (s[c + "transform"] = "translate(" + a.x + "px," + a.y + "px)");
            }
            (e.effects.transform || e.effects.opacity) && e._bindTargetDone(o),
              e._ff && e._ff <= 20
                ? o.css(s)
                : o.css(e.effects.transition).css(s);
          }
          for (var n = 0; n < e._$pre.length; n++) {
            var i = e._$pre[n],
              o = t(i),
              a = {
                x: i.dataset.finalPosX - i.dataset.interPosX,
                y: i.dataset.finalPosY - i.dataset.interPosY,
              },
              r = e._getDelay(n);
            (i.dataset.finalPosX !== i.dataset.origPosX ||
              i.dataset.finalPosY !== i.dataset.origPosY) &&
              e._bindTargetDone(o),
              o.css(
                e._getPrefixedCSS(
                  "transition",
                  "all " +
                    e.animation.duration +
                    "ms " +
                    e.animation.easing +
                    " " +
                    r +
                    "ms"
                )
              ),
              o.css(
                e._getPrefixedCSS(
                  "transform",
                  "translate(" + a.x + "px," + a.y + "px)"
                )
              ),
              e.animation.animateResizeTargets &&
                (i.dataset.origWidth - i.dataset.finalWidth &&
                  1 * i.dataset.finalWidth &&
                  ((i.style.width = i.dataset.finalWidth + "px"),
                  (i.style.marginRight =
                    -(i.dataset.finalWidth - i.dataset.interWidth) +
                    1 * i.dataset.finalMarginRight +
                    "px")),
                i.dataset.origHeight - i.dataset.finalHeight &&
                  1 * i.dataset.finalHeight &&
                  ((i.style.height = i.dataset.finalHeight + "px"),
                  (i.style.marginBottom =
                    -(i.dataset.finalHeight - i.dataset.interHeight) +
                    1 * i.dataset.finalMarginBottom +
                    "px")));
          }
          e._changingClass &&
            e._$container
              .removeClass(e.layout.containerClass)
              .addClass(e._newClass);
          for (var n = 0; n < e._$toHide.length; n++) {
            for (
              var i = e._$toHide[n],
                o = t(i),
                r = e._getDelay(n),
                u = {},
                l = 0;
              2 > l;
              l++
            ) {
              var c = 0 === l ? (c = e._prefix) : "";
              (u[c + "transition-delay"] = r + "ms"),
                (u[c + "transform"] = e.effects.transformOut),
                (u.opacity = e.effects.opacity);
            }
            o.css(e.effects.transition).css(u),
              (e.effects.transform || e.effects.opacity) &&
                e._bindTargetDone(o);
          }
          e._execAction("_animateTargets", 1);
        },
        _bindTargetDone: function (e) {
          var n = this,
            i = e[0];
          n._execAction("_bindTargetDone", 0, arguments),
            i.dataset.bound ||
              ((i.dataset.bound = !0),
              n._targetsBound++,
              e.on(
                "webkitTransitionEnd.mixItUp transitionend.mixItUp",
                function (o) {
                  (o.originalEvent.propertyName.indexOf("transform") > -1 ||
                    o.originalEvent.propertyName.indexOf("opacity") > -1) &&
                    t(o.originalEvent.target).is(n.selectors.target) &&
                    (e.off(".mixItUp"),
                    delete i.dataset.bound,
                    n._targetDone());
                }
              )),
            n._execAction("_bindTargetDone", 1, arguments);
        },
        _targetDone: function () {
          var t = this;
          t._execAction("_targetDone", 0),
            t._targetsDone++,
            t._targetsDone === t._targetsBound && t._cleanUp(),
            t._execAction("_targetDone", 1);
        },
        _cleanUp: function () {
          var e = this,
            n = e.animation.animateResizeTargets
              ? "transform opacity width height margin-bottom margin-right"
              : "transform opacity";
          (unBrake = function () {
            e._$targets.removeStyle("transition", e._prefix);
          }),
            e._execAction("_cleanUp", 0),
            e._changingLayout
              ? e._$show.css("display", e._newDisplay)
              : e._$show.css("display", e.layout.display),
            e._$targets.css(e._brake),
            e._$targets
              .removeStyle(n, e._prefix)
              .removeAttr(
                "data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom"
              ),
            e._$hide.removeStyle("display"),
            e._$parent.removeStyle(
              "height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin",
              e._prefix
            ),
            e._sorting &&
              (e._printSort(),
              (e._activeSort = e._newSortString),
              (e._sorting = !1)),
            e._changingLayout &&
              (e._changingDisplay &&
                ((e.layout.display = e._newDisplay), (e._changingDisplay = !1)),
              e._changingClass &&
                (e._$parent
                  .removeClass(e.layout.containerClass)
                  .addClass(e._newClass),
                (e.layout.containerClass = e._newClass),
                (e._changingClass = !1)),
              (e._changingLayout = !1)),
            e._refresh(),
            e._buildState(),
            e._state.fail &&
              e._$container.addClass(e.layout.containerClassFail),
            (e._$show = t()),
            (e._$hide = t()),
            window.requestAnimationFrame && requestAnimationFrame(unBrake),
            (e._mixing = !1),
            "function" == typeof e.callbacks._user &&
              e.callbacks._user.call(e._domNode, e._state, e),
            "function" == typeof e.callbacks.onMixEnd &&
              e.callbacks.onMixEnd.call(e._domNode, e._state, e),
            e._$container.trigger("mixEnd", [e._state, e]),
            e._state.fail &&
              ("function" == typeof e.callbacks.onMixFail &&
                e.callbacks.onMixFail.call(e._domNode, e._state, e),
              e._$container.trigger("mixFail", [e._state, e])),
            e._loading &&
              ("function" == typeof e.callbacks.onMixLoad &&
                e.callbacks.onMixLoad.call(e._domNode, e._state, e),
              e._$container.trigger("mixLoad", [e._state, e])),
            e._queue.length &&
              (e._execAction("_queue", 0),
              e.multiMix(e._queue[0][0], e._queue[0][1], e._queue[0][2]),
              e._queue.splice(0, 1)),
            e._execAction("_cleanUp", 1),
            (e._loading = !1);
        },
        _getPrefixedCSS: function (t, e, n) {
          var o = this,
            a = {};
          for (i = 0; 2 > i; i++) {
            var r = 0 === i ? o._prefix : "";
            a[r + t] = n ? r + e : e;
          }
          return o._execFilter("_getPrefixedCSS", a, arguments);
        },
        _getDelay: function (t) {
          var e = this,
            n =
              "function" == typeof e.animation.staggerSequence
                ? e.animation.staggerSequence.call(e._domNode, t, e._state)
                : t,
            i = e.animation.stagger ? n * e.animation.staggerDuration : 0;
          return e._execFilter("_getDelay", i, arguments);
        },
        _parseMultiMixArgs: function (t) {
          for (
            var e = this,
              n = {
                command: null,
                animate: e.animation.enable,
                callback: null,
              },
              i = 0;
            i < t.length;
            i++
          ) {
            var o = t[i];
            null !== o &&
              ("object" == typeof o || "string" == typeof o
                ? (n.command = o)
                : "boolean" == typeof o
                ? (n.animate = o)
                : "function" == typeof o && (n.callback = o));
          }
          return e._execFilter("_parseMultiMixArgs", n, arguments);
        },
        _parseInsertArgs: function (e) {
          for (
            var n = this,
              i = {
                index: 0,
                $object: t(),
                multiMix: { filter: n._state.activeFilter },
                callback: null,
              },
              o = 0;
            o < e.length;
            o++
          ) {
            var a = e[o];
            "number" == typeof a
              ? (i.index = a)
              : "object" == typeof a && a instanceof t
              ? (i.$object = a)
              : "object" == typeof a && n._helpers._isElement(a)
              ? (i.$object = t(a))
              : "object" == typeof a && null !== a
              ? (i.multiMix = a)
              : "boolean" != typeof a || a
              ? "function" == typeof a && (i.callback = a)
              : (i.multiMix = !1);
          }
          return n._execFilter("_parseInsertArgs", i, arguments);
        },
        _execAction: function (t, e, n) {
          var i = this,
            o = e ? "post" : "pre";
          if (!i._actions.isEmptyObject && i._actions.hasOwnProperty(t))
            for (var a in i._actions[t][o]) i._actions[t][o][a].call(i, n);
        },
        _execFilter: function (t, e, n) {
          var i = this;
          if (i._filters.isEmptyObject || !i._filters.hasOwnProperty(t))
            return e;
          for (var o in i._filters[t]) return i._filters[t][o].call(i, n);
        },
        _helpers: {
          _camelCase: function (t) {
            return t.replace(/-([a-z])/g, function (t) {
              return t[1].toUpperCase();
            });
          },
          _isElement: function (t) {
            return window.HTMLElement
              ? t instanceof HTMLElement
              : null !== t && 1 === t.nodeType && "string" === t.nodeName;
          },
        },
        isMixing: function () {
          var t = this;
          return t._execFilter("isMixing", t._mixing);
        },
        filter: function () {
          var t = this,
            e = t._parseMultiMixArgs(arguments);
          t._clicking && (t._toggleString = ""),
            t.multiMix({ filter: e.command }, e.animate, e.callback);
        },
        sort: function () {
          var t = this,
            e = t._parseMultiMixArgs(arguments);
          t.multiMix({ sort: e.command }, e.animate, e.callback);
        },
        changeLayout: function () {
          var t = this,
            e = t._parseMultiMixArgs(arguments);
          t.multiMix({ changeLayout: e.command }, e.animate, e.callback);
        },
        multiMix: function () {
          var t = this,
            n = t._parseMultiMixArgs(arguments);
          if ((t._execAction("multiMix", 0, arguments), t._mixing))
            t.animation.queue && t._queue.length < t.animation.queueLimit
              ? (t._queue.push(arguments),
                t.controls.enable &&
                  !t._clicking &&
                  t._updateControls(n.command),
                t._execAction("multiMixQueue", 1, arguments))
              : ("function" == typeof t.callbacks.onMixBusy &&
                  t.callbacks.onMixBusy.call(t._domNode, t._state, t),
                t._$container.trigger("mixBusy", [t._state, t]),
                t._execAction("multiMixBusy", 1, arguments));
          else {
            t.controls.enable &&
              !t._clicking &&
              (t.controls.toggleFilterButtons && t._buildToggleArray(),
              t._updateControls(n.command, t.controls.toggleFilterButtons)),
              t._queue.length < 2 && (t._clicking = !1),
              delete t.callbacks._user,
              n.callback && (t.callbacks._user = n.callback);
            var i = n.command.sort,
              o = n.command.filter,
              a = n.command.changeLayout;
            t._refresh(),
              i &&
                ((t._newSort = t._parseSort(i)),
                (t._newSortString = i),
                (t._sorting = !0),
                t._sort()),
              o !== e &&
                ((o = "all" === o ? t.selectors.target : o),
                (t._activeFilter = o)),
              t._filter(),
              a &&
                ((t._newDisplay =
                  "string" == typeof a ? a : a.display || t.layout.display),
                (t._newClass = a.containerClass || ""),
                (t._newDisplay !== t.layout.display ||
                  t._newClass !== t.layout.containerClass) &&
                  ((t._changingLayout = !0),
                  (t._changingClass = t._newClass !== t.layout.containerClass),
                  (t._changingDisplay = t._newDisplay !== t.layout.display))),
              t._$targets.css(t._brake),
              t._goMix(
                n.animate ^ t.animation.enable ? n.animate : t.animation.enable
              ),
              t._execAction("multiMix", 1, arguments);
          }
        },
        insert: function () {
          var t = this,
            e = t._parseInsertArgs(arguments),
            n = "function" == typeof e.callback ? e.callback : null,
            i = document.createDocumentFragment(),
            o = (function () {
              return (
                t._refresh(),
                t._$targets.length
                  ? e.index < t._$targets.length || !t._$targets.length
                    ? t._$targets[e.index]
                    : t._$targets[t._$targets.length - 1].nextElementSibling
                  : t._$parent[0].children[0]
              );
            })();
          if ((t._execAction("insert", 0, arguments), e.$object)) {
            for (var a = 0; a < e.$object.length; a++) {
              var r = e.$object[a];
              i.appendChild(r), i.appendChild(document.createTextNode(" "));
            }
            t._$parent[0].insertBefore(i, o);
          }
          t._execAction("insert", 1, arguments),
            "object" == typeof e.multiMix && t.multiMix(e.multiMix, n);
        },
        prepend: function () {
          var t = this,
            e = t._parseInsertArgs(arguments);
          t.insert(0, e.$object, e.multiMix, e.callback);
        },
        append: function () {
          var t = this,
            e = t._parseInsertArgs(arguments);
          t.insert(t._state.totalTargets, e.$object, e.multiMix, e.callback);
        },
        getOption: function (t) {
          var n = this,
            i = function (t, n) {
              for (
                var i = n.split("."),
                  o = i.pop(),
                  a = i.length,
                  r = 1,
                  s = i[0] || n;
                (t = t[s]) && a > r;

              )
                (s = i[r]), r++;
              return t !== e ? (t[o] !== e ? t[o] : t) : void 0;
            };
          return t ? n._execFilter("getOption", i(n, t), arguments) : n;
        },
        setOptions: function (e) {
          var n = this;
          n._execAction("setOptions", 0, arguments),
            "object" == typeof e && t.extend(!0, n, e),
            n._execAction("setOptions", 1, arguments);
        },
        getState: function () {
          var t = this;
          return t._execFilter("getState", t._state, t);
        },
        forceRefresh: function () {
          var t = this;
          t._refresh(!1, !0);
        },
        destroy: function (e) {
          var n = this;
          n._execAction("destroy", 0, arguments),
            n._$body
              .add(t(n.selectors.sort))
              .add(t(n.selectors.filter))
              .off(".mixItUp");
          for (var i = 0; i < n._$targets.length; i++) {
            var o = n._$targets[i];
            e && (o.style.display = ""), delete o.mixParent;
          }
          n._execAction("destroy", 1, arguments),
            delete t.MixItUp.prototype._instances[n._id];
        },
      }),
      (t.fn.mixItUp = function () {
        var n,
          i = arguments,
          o = [],
          a = function (e, n) {
            var i = new t.MixItUp(),
              o = function () {
                return (
                  "00000" + ((16777216 * Math.random()) << 0).toString(16)
                )
                  .substr(-6)
                  .toUpperCase();
              };
            i._execAction("_instantiate", 0, arguments),
              (e.id = e.id ? e.id : "MixItUp" + o()),
              i._instances[e.id] || ((i._instances[e.id] = i), i._init(e, n)),
              i._execAction("_instantiate", 1, arguments);
          };
        return (
          (n = this.each(function () {
            if (i && "string" == typeof i[0]) {
              var n = t.MixItUp.prototype._instances[this.id];
              if ("isLoaded" == i[0]) o.push(n ? !0 : !1);
              else {
                var r = n[i[0]](i[1], i[2], i[3]);
                r !== e && o.push(r);
              }
            } else a(this, i[0]);
          })),
          o.length ? (o.length > 1 ? o : o[0]) : n
        );
      }),
      (t.fn.removeStyle = function (t, n) {
        return (
          (n = n ? n : ""),
          this.each(function () {
            for (var i = this, o = t.split(" "), a = 0; a < o.length; a++)
              for (var r = 0; 2 > r; r++) {
                var s = r ? o[a] : n + o[a];
                if (
                  (i.style[s] !== e &&
                    "unknown" != typeof i.style[s] &&
                    i.style[s].length > 0 &&
                    (i.style[s] = ""),
                  !n)
                )
                  break;
              }
            i.attributes &&
              i.attributes.style &&
              i.attributes.style !== e &&
              "" === i.attributes.style.nodeValue &&
              i.attributes.removeNamedItem("style");
          })
        );
      });
  })(jQuery),
  (function (t, e, n, i) {
    var o = n("html"),
      a = n(t),
      r = n(e),
      s = (n.fancybox = function () {
        s.open.apply(this, arguments);
      }),
      l = navigator.userAgent.match(/msie/i),
      c = null,
      u = e.createTouch !== i,
      p = function (t) {
        return t && t.hasOwnProperty && t instanceof n;
      },
      d = function (t) {
        return t && "string" === n.type(t);
      },
      f = function (t) {
        return d(t) && 0 < t.indexOf("%");
      },
      h = function (t, e) {
        var n = parseInt(t, 10) || 0;
        return e && f(t) && (n *= s.getViewport()[e] / 100), Math.ceil(n);
      },
      g = function (t, e) {
        return h(t, e) + "px";
      };
    n.extend(s, {
      version: "2.1.5",
      defaults: {
        padding: 15,
        margin: 20,
        width: 800,
        height: 600,
        minWidth: 100,
        minHeight: 100,
        maxWidth: 9999,
        maxHeight: 9999,
        pixelRatio: 1,
        autoSize: !0,
        autoHeight: !1,
        autoWidth: !1,
        autoResize: !0,
        autoCenter: !u,
        fitToView: !0,
        aspectRatio: !1,
        topRatio: 0.5,
        leftRatio: 0.5,
        scrolling: "auto",
        wrapCSS: "",
        arrows: !0,
        closeBtn: !0,
        closeClick: !1,
        nextClick: !1,
        mouseWheel: !0,
        autoPlay: !1,
        playSpeed: 3e3,
        preload: 3,
        modal: !1,
        loop: !0,
        ajax: { dataType: "html", headers: { "X-fancyBox": !0 } },
        iframe: { scrolling: "auto", preload: !0 },
        swf: {
          wmode: "transparent",
          allowfullscreen: "true",
          allowscriptaccess: "always",
        },
        keys: {
          next: { 13: "left", 34: "up", 39: "left", 40: "up" },
          prev: { 8: "right", 33: "down", 37: "right", 38: "down" },
          close: [27],
          play: [32],
          toggle: [70],
        },
        direction: { next: "left", prev: "right" },
        scrollOutside: !0,
        index: 0,
        type: null,
        href: null,
        content: null,
        title: null,
        tpl: {
          wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
          image: '<img class="fancybox-image" src="{href}" alt="" />',
          iframe:
            '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
            (l ? ' allowtransparency="true"' : "") +
            "></iframe>",
          error:
            '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
          closeBtn:
            '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
          next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
          prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
        },
        openEffect: "fade",
        openSpeed: 250,
        openEasing: "swing",
        openOpacity: !0,
        openMethod: "zoomIn",
        closeEffect: "fade",
        closeSpeed: 250,
        closeEasing: "swing",
        closeOpacity: !0,
        closeMethod: "zoomOut",
        nextEffect: "elastic",
        nextSpeed: 250,
        nextEasing: "swing",
        nextMethod: "changeIn",
        prevEffect: "elastic",
        prevSpeed: 250,
        prevEasing: "swing",
        prevMethod: "changeOut",
        helpers: { overlay: !0, title: !0 },
        onCancel: n.noop,
        beforeLoad: n.noop,
        afterLoad: n.noop,
        beforeShow: n.noop,
        afterShow: n.noop,
        beforeChange: n.noop,
        beforeClose: n.noop,
        afterClose: n.noop,
      },
      group: {},
      opts: {},
      previous: null,
      coming: null,
      current: null,
      isActive: !1,
      isOpen: !1,
      isOpened: !1,
      wrap: null,
      skin: null,
      outer: null,
      inner: null,
      player: { timer: null, isActive: !1 },
      ajaxLoad: null,
      imgPreload: null,
      transitions: {},
      helpers: {},
      open: function (t, e) {
        return t && (n.isPlainObject(e) || (e = {}), !1 !== s.close(!0))
          ? (n.isArray(t) || (t = p(t) ? n(t).get() : [t]),
            n.each(t, function (o, a) {
              var r,
                l,
                c,
                u,
                f,
                h = {};
              "object" === n.type(a) &&
                (a.nodeType && (a = n(a)),
                p(a)
                  ? ((h = {
                      href: a.data("fancybox-href") || a.attr("href"),
                      title: a.data("fancybox-title") || a.attr("title"),
                      isDom: !0,
                      element: a,
                    }),
                    n.metadata && n.extend(!0, h, a.metadata()))
                  : (h = a)),
                (r = e.href || h.href || (d(a) ? a : null)),
                (l = e.title !== i ? e.title : h.title || ""),
                (u = (c = e.content || h.content) ? "html" : e.type || h.type),
                !u &&
                  h.isDom &&
                  ((u = a.data("fancybox-type")),
                  u ||
                    (u = (u = a.prop("class").match(/fancybox\.(\w+)/))
                      ? u[1]
                      : null)),
                d(r) &&
                  (u ||
                    (s.isImage(r)
                      ? (u = "image")
                      : s.isSWF(r)
                      ? (u = "swf")
                      : "#" === r.charAt(0)
                      ? (u = "inline")
                      : d(a) && ((u = "html"), (c = a))),
                  "ajax" === u &&
                    ((f = r.split(/\s+/, 2)),
                    (r = f.shift()),
                    (f = f.shift()))),
                c ||
                  ("inline" === u
                    ? r
                      ? (c = n(d(r) ? r.replace(/.*(?=#[^\s]+$)/, "") : r))
                      : h.isDom && (c = a)
                    : "html" === u
                    ? (c = r)
                    : !u && !r && h.isDom && ((u = "inline"), (c = a))),
                n.extend(h, {
                  href: r,
                  type: u,
                  content: c,
                  title: l,
                  selector: f,
                }),
                (t[o] = h);
            }),
            (s.opts = n.extend(!0, {}, s.defaults, e)),
            e.keys !== i &&
              (s.opts.keys = e.keys
                ? n.extend({}, s.defaults.keys, e.keys)
                : !1),
            (s.group = t),
            s._start(s.opts.index))
          : void 0;
      },
      cancel: function () {
        var t = s.coming;
        t &&
          !1 !== s.trigger("onCancel") &&
          (s.hideLoading(),
          s.ajaxLoad && s.ajaxLoad.abort(),
          (s.ajaxLoad = null),
          s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null),
          t.wrap && t.wrap.stop(!0, !0).trigger("onReset").remove(),
          (s.coming = null),
          s.current || s._afterZoomOut(t));
      },
      close: function (t) {
        s.cancel(),
          !1 !== s.trigger("beforeClose") &&
            (s.unbindEvents(),
            s.isActive &&
              (s.isOpen && !0 !== t
                ? ((s.isOpen = s.isOpened = !1),
                  (s.isClosing = !0),
                  n(".fancybox-item, .fancybox-nav").remove(),
                  s.wrap.stop(!0, !0).removeClass("fancybox-opened"),
                  s.transitions[s.current.closeMethod]())
                : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(),
                  s._afterZoomOut())));
      },
      play: function (t) {
        var e = function () {
            clearTimeout(s.player.timer);
          },
          n = function () {
            e(),
              s.current &&
                s.player.isActive &&
                (s.player.timer = setTimeout(s.next, s.current.playSpeed));
          },
          i = function () {
            e(),
              r.unbind(".player"),
              (s.player.isActive = !1),
              s.trigger("onPlayEnd");
          };
        !0 === t || (!s.player.isActive && !1 !== t)
          ? s.current &&
            (s.current.loop || s.current.index < s.group.length - 1) &&
            ((s.player.isActive = !0),
            r.bind({
              "onCancel.player beforeClose.player": i,
              "onUpdate.player": n,
              "beforeLoad.player": e,
            }),
            n(),
            s.trigger("onPlayStart"))
          : i();
      },
      next: function (t) {
        var e = s.current;
        e && (d(t) || (t = e.direction.next), s.jumpto(e.index + 1, t, "next"));
      },
      prev: function (t) {
        var e = s.current;
        e && (d(t) || (t = e.direction.prev), s.jumpto(e.index - 1, t, "prev"));
      },
      jumpto: function (t, e, n) {
        var o = s.current;
        o &&
          ((t = h(t)),
          (s.direction = e || o.direction[t >= o.index ? "next" : "prev"]),
          (s.router = n || "jumpto"),
          o.loop &&
            (0 > t && (t = o.group.length + (t % o.group.length)),
            (t %= o.group.length)),
          o.group[t] !== i && (s.cancel(), s._start(t)));
      },
      reposition: function (t, e) {
        var i,
          o = s.current,
          a = o ? o.wrap : null;
        a &&
          ((i = s._getPosition(e)),
          t && "scroll" === t.type
            ? (delete i.position, a.stop(!0, !0).animate(i, 200))
            : (a.css(i), (o.pos = n.extend({}, o.dim, i))));
      },
      update: function (t) {
        var e = t && t.type,
          n = !e || "orientationchange" === e;
        n && (clearTimeout(c), (c = null)),
          s.isOpen &&
            !c &&
            (c = setTimeout(
              function () {
                var i = s.current;
                i &&
                  !s.isClosing &&
                  (s.wrap.removeClass("fancybox-tmp"),
                  (n || "load" === e || ("resize" === e && i.autoResize)) &&
                    s._setDimension(),
                  ("scroll" === e && i.canShrink) || s.reposition(t),
                  s.trigger("onUpdate"),
                  (c = null));
              },
              n && !u ? 0 : 300
            ));
      },
      toggle: function (t) {
        s.isOpen &&
          ((s.current.fitToView =
            "boolean" === n.type(t) ? t : !s.current.fitToView),
          u &&
            (s.wrap.removeAttr("style").addClass("fancybox-tmp"),
            s.trigger("onUpdate")),
          s.update());
      },
      hideLoading: function () {
        r.unbind(".loading"), n("#fancybox-loading").remove();
      },
      showLoading: function () {
        var t, e;
        s.hideLoading(),
          (t = n('<div id="fancybox-loading"><div></div></div>')
            .click(s.cancel)
            .appendTo("body")),
          r.bind("keydown.loading", function (t) {
            27 === (t.which || t.keyCode) && (t.preventDefault(), s.cancel());
          }),
          s.defaults.fixed ||
            ((e = s.getViewport()),
            t.css({
              position: "absolute",
              top: 0.5 * e.h + e.y,
              left: 0.5 * e.w + e.x,
            }));
      },
      getViewport: function () {
        var e = (s.current && s.current.locked) || !1,
          n = { x: a.scrollLeft(), y: a.scrollTop() };
        return (
          e
            ? ((n.w = e[0].clientWidth), (n.h = e[0].clientHeight))
            : ((n.w = u && t.innerWidth ? t.innerWidth : a.width()),
              (n.h = u && t.innerHeight ? t.innerHeight : a.height())),
          n
        );
      },
      unbindEvents: function () {
        s.wrap && p(s.wrap) && s.wrap.unbind(".fb"),
          r.unbind(".fb"),
          a.unbind(".fb");
      },
      bindEvents: function () {
        var t,
          e = s.current;
        e &&
          (a.bind(
            "orientationchange.fb" +
              (u ? "" : " resize.fb") +
              (e.autoCenter && !e.locked ? " scroll.fb" : ""),
            s.update
          ),
          (t = e.keys) &&
            r.bind("keydown.fb", function (o) {
              var a = o.which || o.keyCode,
                r = o.target || o.srcElement;
              return 27 === a && s.coming
                ? !1
                : void !(
                    o.ctrlKey ||
                    o.altKey ||
                    o.shiftKey ||
                    o.metaKey ||
                    (r && (r.type || n(r).is("[contenteditable]"))) ||
                    !n.each(t, function (t, r) {
                      return 1 < e.group.length && r[a] !== i
                        ? (s[t](r[a]), o.preventDefault(), !1)
                        : -1 < n.inArray(a, r)
                        ? (s[t](), o.preventDefault(), !1)
                        : void 0;
                    })
                  );
            }),
          n.fn.mousewheel &&
            e.mouseWheel &&
            s.wrap.bind("mousewheel.fb", function (t, i, o, a) {
              for (
                var r = n(t.target || null), l = !1;
                r.length &&
                !l &&
                !r.is(".fancybox-skin") &&
                !r.is(".fancybox-wrap");

              )
                (l =
                  r[0] &&
                  !(r[0].style.overflow && "hidden" === r[0].style.overflow) &&
                  ((r[0].clientWidth && r[0].scrollWidth > r[0].clientWidth) ||
                    (r[0].clientHeight &&
                      r[0].scrollHeight > r[0].clientHeight))),
                  (r = n(r).parent());
              0 !== i &&
                !l &&
                1 < s.group.length &&
                !e.canShrink &&
                (a > 0 || o > 0
                  ? s.prev(a > 0 ? "down" : "left")
                  : (0 > a || 0 > o) && s.next(0 > a ? "up" : "right"),
                t.preventDefault());
            }));
      },
      trigger: function (t, e) {
        var i,
          o = e || s.coming || s.current;
        if (o) {
          if (
            (n.isFunction(o[t]) &&
              (i = o[t].apply(o, Array.prototype.slice.call(arguments, 1))),
            !1 === i)
          )
            return !1;
          o.helpers &&
            n.each(o.helpers, function (e, i) {
              i &&
                s.helpers[e] &&
                n.isFunction(s.helpers[e][t]) &&
                s.helpers[e][t](n.extend(!0, {}, s.helpers[e].defaults, i), o);
            }),
            r.trigger(t);
        }
      },
      isImage: function (t) {
        return (
          d(t) &&
          t.match(
            /(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i
          )
        );
      },
      isSWF: function (t) {
        return d(t) && t.match(/\.(swf)((\?|#).*)?$/i);
      },
      _start: function (t) {
        var e,
          i,
          o = {};
        if (((t = h(t)), (e = s.group[t] || null), !e)) return !1;
        if (
          ((o = n.extend(!0, {}, s.opts, e)),
          (e = o.margin),
          (i = o.padding),
          "number" === n.type(e) && (o.margin = [e, e, e, e]),
          "number" === n.type(i) && (o.padding = [i, i, i, i]),
          o.modal &&
            n.extend(!0, o, {
              closeBtn: !1,
              closeClick: !1,
              nextClick: !1,
              arrows: !1,
              mouseWheel: !1,
              keys: null,
              helpers: { overlay: { closeClick: !1 } },
            }),
          o.autoSize && (o.autoWidth = o.autoHeight = !0),
          "auto" === o.width && (o.autoWidth = !0),
          "auto" === o.height && (o.autoHeight = !0),
          (o.group = s.group),
          (o.index = t),
          (s.coming = o),
          !1 === s.trigger("beforeLoad"))
        )
          s.coming = null;
        else {
          if (((i = o.type), (e = o.href), !i))
            return (
              (s.coming = null),
              s.current && s.router && "jumpto" !== s.router
                ? ((s.current.index = t), s[s.router](s.direction))
                : !1
            );
          if (
            ((s.isActive = !0),
            ("image" === i || "swf" === i) &&
              ((o.autoHeight = o.autoWidth = !1), (o.scrolling = "visible")),
            "image" === i && (o.aspectRatio = !0),
            "iframe" === i && u && (o.scrolling = "scroll"),
            (o.wrap = n(o.tpl.wrap)
              .addClass(
                "fancybox-" +
                  (u ? "mobile" : "desktop") +
                  " fancybox-type-" +
                  i +
                  " fancybox-tmp " +
                  o.wrapCSS
              )
              .appendTo(o.parent || "body")),
            n.extend(o, {
              skin: n(".fancybox-skin", o.wrap),
              outer: n(".fancybox-outer", o.wrap),
              inner: n(".fancybox-inner", o.wrap),
            }),
            n.each(["Top", "Right", "Bottom", "Left"], function (t, e) {
              o.skin.css("padding" + e, g(o.padding[t]));
            }),
            s.trigger("onReady"),
            "inline" === i || "html" === i)
          ) {
            if (!o.content || !o.content.length) return s._error("content");
          } else if (!e) return s._error("href");
          "image" === i
            ? s._loadImage()
            : "ajax" === i
            ? s._loadAjax()
            : "iframe" === i
            ? s._loadIframe()
            : s._afterLoad();
        }
      },
      _error: function (t) {
        n.extend(s.coming, {
          type: "html",
          autoWidth: !0,
          autoHeight: !0,
          minWidth: 0,
          minHeight: 0,
          scrolling: "no",
          hasError: t,
          content: s.coming.tpl.error,
        }),
          s._afterLoad();
      },
      _loadImage: function () {
        var t = (s.imgPreload = new Image());
        (t.onload = function () {
          (this.onload = this.onerror = null),
            (s.coming.width = this.width / s.opts.pixelRatio),
            (s.coming.height = this.height / s.opts.pixelRatio),
            s._afterLoad();
        }),
          (t.onerror = function () {
            (this.onload = this.onerror = null), s._error("image");
          }),
          (t.src = s.coming.href),
          !0 !== t.complete && s.showLoading();
      },
      _loadAjax: function () {
        var t = s.coming;
        s.showLoading(),
          (s.ajaxLoad = n.ajax(
            n.extend({}, t.ajax, {
              url: t.href,
              error: function (t, e) {
                s.coming && "abort" !== e
                  ? s._error("ajax", t)
                  : s.hideLoading();
              },
              success: function (e, n) {
                "success" === n && ((t.content = e), s._afterLoad());
              },
            })
          ));
      },
      _loadIframe: function () {
        var t = s.coming,
          e = n(t.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
            .attr("scrolling", u ? "auto" : t.iframe.scrolling)
            .attr("src", t.href);
        n(t.wrap).bind("onReset", function () {
          try {
            n(this)
              .find("iframe")
              .hide()
              .attr("src", "//about:blank")
              .end()
              .empty();
          } catch (t) {}
        }),
          t.iframe.preload &&
            (s.showLoading(),
            e.one("load", function () {
              n(this).data("ready", 1),
                u || n(this).bind("load.fb", s.update),
                n(this)
                  .parents(".fancybox-wrap")
                  .width("100%")
                  .removeClass("fancybox-tmp")
                  .show(),
                s._afterLoad();
            })),
          (t.content = e.appendTo(t.inner)),
          t.iframe.preload || s._afterLoad();
      },
      _preloadImages: function () {
        var t,
          e,
          n = s.group,
          i = s.current,
          o = n.length,
          a = i.preload ? Math.min(i.preload, o - 1) : 0;
        for (e = 1; a >= e; e += 1)
          (t = n[(i.index + e) % o]),
            "image" === t.type && t.href && (new Image().src = t.href);
      },
      _afterLoad: function () {
        var t,
          e,
          i,
          o,
          a,
          r = s.coming,
          l = s.current;
        if ((s.hideLoading(), r && !1 !== s.isActive))
          if (!1 === s.trigger("afterLoad", r, l))
            r.wrap.stop(!0).trigger("onReset").remove(), (s.coming = null);
          else {
            switch (
              (l &&
                (s.trigger("beforeChange", l),
                l.wrap
                  .stop(!0)
                  .removeClass("fancybox-opened")
                  .find(".fancybox-item, .fancybox-nav")
                  .remove()),
              s.unbindEvents(),
              (t = r.content),
              (e = r.type),
              (i = r.scrolling),
              n.extend(s, {
                wrap: r.wrap,
                skin: r.skin,
                outer: r.outer,
                inner: r.inner,
                current: r,
                previous: l,
              }),
              (o = r.href),
              e)
            ) {
              case "inline":
              case "ajax":
              case "html":
                r.selector
                  ? (t = n("<div>").html(t).find(r.selector))
                  : p(t) &&
                    (t.data("fancybox-placeholder") ||
                      t.data(
                        "fancybox-placeholder",
                        n('<div class="fancybox-placeholder"></div>')
                          .insertAfter(t)
                          .hide()
                      ),
                    (t = t.show().detach()),
                    r.wrap.bind("onReset", function () {
                      n(this).find(t).length &&
                        t
                          .hide()
                          .replaceAll(t.data("fancybox-placeholder"))
                          .data("fancybox-placeholder", !1);
                    }));
                break;
              case "image":
                t = r.tpl.image.replace("{href}", o);
                break;
              case "swf":
                (t =
                  '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' +
                  o +
                  '"></param>'),
                  (a = ""),
                  n.each(r.swf, function (e, n) {
                    (t += '<param name="' + e + '" value="' + n + '"></param>'),
                      (a += " " + e + '="' + n + '"');
                  }),
                  (t +=
                    '<embed src="' +
                    o +
                    '" type="application/x-shockwave-flash" width="100%" height="100%"' +
                    a +
                    "></embed></object>");
            }
            (!p(t) || !t.parent().is(r.inner)) && r.inner.append(t),
              s.trigger("beforeShow"),
              r.inner.css(
                "overflow",
                "yes" === i ? "scroll" : "no" === i ? "hidden" : i
              ),
              s._setDimension(),
              s.reposition(),
              (s.isOpen = !1),
              (s.coming = null),
              s.bindEvents(),
              s.isOpened
                ? l.prevMethod && s.transitions[l.prevMethod]()
                : n(".fancybox-wrap")
                    .not(r.wrap)
                    .stop(!0)
                    .trigger("onReset")
                    .remove(),
              s.transitions[s.isOpened ? r.nextMethod : r.openMethod](),
              s._preloadImages();
          }
      },
      _setDimension: function () {
        var t,
          e,
          i,
          o,
          a,
          r,
          l,
          c,
          u,
          p = s.getViewport(),
          d = 0,
          m = !1,
          v = !1,
          m = s.wrap,
          y = s.skin,
          b = s.inner,
          x = s.current,
          v = x.width,
          w = x.height,
          _ = x.minWidth,
          C = x.minHeight,
          k = x.maxWidth,
          T = x.maxHeight,
          $ = x.scrolling,
          S = x.scrollOutside ? x.scrollbarWidth : 0,
          E = x.margin,
          A = h(E[1] + E[3]),
          D = h(E[0] + E[2]);
        if (
          (m
            .add(y)
            .add(b)
            .width("auto")
            .height("auto")
            .removeClass("fancybox-tmp"),
          (E = h(y.outerWidth(!0) - y.width())),
          (t = h(y.outerHeight(!0) - y.height())),
          (e = A + E),
          (i = D + t),
          (o = f(v) ? ((p.w - e) * h(v)) / 100 : v),
          (a = f(w) ? ((p.h - i) * h(w)) / 100 : w),
          "iframe" === x.type)
        ) {
          if (((u = x.content), x.autoHeight && 1 === u.data("ready")))
            try {
              u[0].contentWindow.document.location &&
                (b.width(o).height(9999),
                (r = u.contents().find("body")),
                S && r.css("overflow-x", "hidden"),
                (a = r.outerHeight(!0)));
            } catch (j) {}
        } else
          (x.autoWidth || x.autoHeight) &&
            (b.addClass("fancybox-tmp"),
            x.autoWidth || b.width(o),
            x.autoHeight || b.height(a),
            x.autoWidth && (o = b.width()),
            x.autoHeight && (a = b.height()),
            b.removeClass("fancybox-tmp"));
        if (
          ((v = h(o)),
          (w = h(a)),
          (c = o / a),
          (_ = h(f(_) ? h(_, "w") - e : _)),
          (k = h(f(k) ? h(k, "w") - e : k)),
          (C = h(f(C) ? h(C, "h") - i : C)),
          (T = h(f(T) ? h(T, "h") - i : T)),
          (r = k),
          (l = T),
          x.fitToView &&
            ((k = Math.min(p.w - e, k)), (T = Math.min(p.h - i, T))),
          (e = p.w - A),
          (D = p.h - D),
          x.aspectRatio
            ? (v > k && ((v = k), (w = h(v / c))),
              w > T && ((w = T), (v = h(w * c))),
              _ > v && ((v = _), (w = h(v / c))),
              C > w && ((w = C), (v = h(w * c))))
            : ((v = Math.max(_, Math.min(v, k))),
              x.autoHeight &&
                "iframe" !== x.type &&
                (b.width(v), (w = b.height())),
              (w = Math.max(C, Math.min(w, T)))),
          x.fitToView)
        )
          if (
            (b.width(v).height(w),
            m.width(v + E),
            (p = m.width()),
            (A = m.height()),
            x.aspectRatio)
          )
            for (; (p > e || A > D) && v > _ && w > C && !(19 < d++); )
              (w = Math.max(C, Math.min(T, w - 10))),
                (v = h(w * c)),
                _ > v && ((v = _), (w = h(v / c))),
                v > k && ((v = k), (w = h(v / c))),
                b.width(v).height(w),
                m.width(v + E),
                (p = m.width()),
                (A = m.height());
          else
            (v = Math.max(_, Math.min(v, v - (p - e)))),
              (w = Math.max(C, Math.min(w, w - (A - D))));
        S && "auto" === $ && a > w && e > v + E + S && (v += S),
          b.width(v).height(w),
          m.width(v + E),
          (p = m.width()),
          (A = m.height()),
          (m = (p > e || A > D) && v > _ && w > C),
          (v = x.aspectRatio
            ? r > v && l > w && o > v && a > w
            : (r > v || l > w) && (o > v || a > w)),
          n.extend(x, {
            dim: { width: g(p), height: g(A) },
            origWidth: o,
            origHeight: a,
            canShrink: m,
            canExpand: v,
            wPadding: E,
            hPadding: t,
            wrapSpace: A - y.outerHeight(!0),
            skinSpace: y.height() - w,
          }),
          !u && x.autoHeight && w > C && T > w && !v && b.height("auto");
      },
      _getPosition: function (t) {
        var e = s.current,
          n = s.getViewport(),
          i = e.margin,
          o = s.wrap.width() + i[1] + i[3],
          a = s.wrap.height() + i[0] + i[2],
          i = { position: "absolute", top: i[0], left: i[3] };
        return (
          e.autoCenter && e.fixed && !t && a <= n.h && o <= n.w
            ? (i.position = "fixed")
            : e.locked || ((i.top += n.y), (i.left += n.x)),
          (i.top = g(Math.max(i.top, i.top + (n.h - a) * e.topRatio))),
          (i.left = g(Math.max(i.left, i.left + (n.w - o) * e.leftRatio))),
          i
        );
      },
      _afterZoomIn: function () {
        var t = s.current;
        t &&
          ((s.isOpen = s.isOpened = !0),
          s.wrap.css("overflow", "visible").addClass("fancybox-opened"),
          s.update(),
          (t.closeClick || (t.nextClick && 1 < s.group.length)) &&
            s.inner.css("cursor", "pointer").bind("click.fb", function (e) {
              !n(e.target).is("a") &&
                !n(e.target).parent().is("a") &&
                (e.preventDefault(), s[t.closeClick ? "close" : "next"]());
            }),
          t.closeBtn &&
            n(t.tpl.closeBtn)
              .appendTo(s.skin)
              .bind("click.fb", function (t) {
                t.preventDefault(), s.close();
              }),
          t.arrows &&
            1 < s.group.length &&
            ((t.loop || 0 < t.index) &&
              n(t.tpl.prev).appendTo(s.outer).bind("click.fb", s.prev),
            (t.loop || t.index < s.group.length - 1) &&
              n(t.tpl.next).appendTo(s.outer).bind("click.fb", s.next)),
          s.trigger("afterShow"),
          t.loop || t.index !== t.group.length - 1
            ? s.opts.autoPlay &&
              !s.player.isActive &&
              ((s.opts.autoPlay = !1), s.play())
            : s.play(!1));
      },
      _afterZoomOut: function (t) {
        (t = t || s.current),
          n(".fancybox-wrap").trigger("onReset").remove(),
          n.extend(s, {
            group: {},
            opts: {},
            router: !1,
            current: null,
            isActive: !1,
            isOpened: !1,
            isOpen: !1,
            isClosing: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
          }),
          s.trigger("afterClose", t);
      },
    }),
      (s.transitions = {
        getOrigPosition: function () {
          var t = s.current,
            e = t.element,
            n = t.orig,
            i = {},
            o = 50,
            a = 50,
            r = t.hPadding,
            l = t.wPadding,
            c = s.getViewport();
          return (
            !n &&
              t.isDom &&
              e.is(":visible") &&
              ((n = e.find("img:first")), n.length || (n = e)),
            p(n)
              ? ((i = n.offset()),
                n.is("img") && ((o = n.outerWidth()), (a = n.outerHeight())))
              : ((i.top = c.y + (c.h - a) * t.topRatio),
                (i.left = c.x + (c.w - o) * t.leftRatio)),
            ("fixed" === s.wrap.css("position") || t.locked) &&
              ((i.top -= c.y), (i.left -= c.x)),
            (i = {
              top: g(i.top - r * t.topRatio),
              left: g(i.left - l * t.leftRatio),
              width: g(o + l),
              height: g(a + r),
            })
          );
        },
        step: function (t, e) {
          var n,
            i,
            o = e.prop;
          i = s.current;
          var a = i.wrapSpace,
            r = i.skinSpace;
          ("width" === o || "height" === o) &&
            ((n = e.end === e.start ? 1 : (t - e.start) / (e.end - e.start)),
            s.isClosing && (n = 1 - n),
            (i = "width" === o ? i.wPadding : i.hPadding),
            (i = t - i),
            s.skin[o](h("width" === o ? i : i - a * n)),
            s.inner[o](h("width" === o ? i : i - a * n - r * n)));
        },
        zoomIn: function () {
          var t = s.current,
            e = t.pos,
            i = t.openEffect,
            o = "elastic" === i,
            a = n.extend({ opacity: 1 }, e);
          delete a.position,
            o
              ? ((e = this.getOrigPosition()),
                t.openOpacity && (e.opacity = 0.1))
              : "fade" === i && (e.opacity = 0.1),
            s.wrap
              .css(e)
              .animate(a, {
                duration: "none" === i ? 0 : t.openSpeed,
                easing: t.openEasing,
                step: o ? this.step : null,
                complete: s._afterZoomIn,
              });
        },
        zoomOut: function () {
          var t = s.current,
            e = t.closeEffect,
            n = "elastic" === e,
            i = { opacity: 0.1 };
          n &&
            ((i = this.getOrigPosition()), t.closeOpacity && (i.opacity = 0.1)),
            s.wrap.animate(i, {
              duration: "none" === e ? 0 : t.closeSpeed,
              easing: t.closeEasing,
              step: n ? this.step : null,
              complete: s._afterZoomOut,
            });
        },
        changeIn: function () {
          var t,
            e = s.current,
            n = e.nextEffect,
            i = e.pos,
            o = { opacity: 1 },
            a = s.direction;
          (i.opacity = 0.1),
            "elastic" === n &&
              ((t = "down" === a || "up" === a ? "top" : "left"),
              "down" === a || "right" === a
                ? ((i[t] = g(h(i[t]) - 200)), (o[t] = "+=200px"))
                : ((i[t] = g(h(i[t]) + 200)), (o[t] = "-=200px"))),
            "none" === n
              ? s._afterZoomIn()
              : s.wrap
                  .css(i)
                  .animate(o, {
                    duration: e.nextSpeed,
                    easing: e.nextEasing,
                    complete: s._afterZoomIn,
                  });
        },
        changeOut: function () {
          var t = s.previous,
            e = t.prevEffect,
            i = { opacity: 0.1 },
            o = s.direction;
          "elastic" === e &&
            (i["down" === o || "up" === o ? "top" : "left"] =
              ("up" === o || "left" === o ? "-" : "+") + "=200px"),
            t.wrap.animate(i, {
              duration: "none" === e ? 0 : t.prevSpeed,
              easing: t.prevEasing,
              complete: function () {
                n(this).trigger("onReset").remove();
              },
            });
        },
      }),
      (s.helpers.overlay = {
        defaults: {
          closeClick: !0,
          speedOut: 200,
          showEarly: !0,
          css: {},
          locked: !u,
          fixed: !0,
        },
        overlay: null,
        fixed: !1,
        el: n("html"),
        create: function (t) {
          (t = n.extend({}, this.defaults, t)),
            this.overlay && this.close(),
            (this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(
              s.coming ? s.coming.parent : t.parent
            )),
            (this.fixed = !1),
            t.fixed &&
              s.defaults.fixed &&
              (this.overlay.addClass("fancybox-overlay-fixed"),
              (this.fixed = !0));
        },
        open: function (t) {
          var e = this;
          (t = n.extend({}, this.defaults, t)),
            this.overlay
              ? this.overlay.unbind(".overlay").width("auto").height("auto")
              : this.create(t),
            this.fixed ||
              (a.bind("resize.overlay", n.proxy(this.update, this)),
              this.update()),
            t.closeClick &&
              this.overlay.bind("click.overlay", function (t) {
                return n(t.target).hasClass("fancybox-overlay")
                  ? (s.isActive ? s.close() : e.close(), !1)
                  : void 0;
              }),
            this.overlay.css(t.css).show();
        },
        close: function () {
          var t, e;
          a.unbind("resize.overlay"),
            this.el.hasClass("fancybox-lock") &&
              (n(".fancybox-margin").removeClass("fancybox-margin"),
              (t = a.scrollTop()),
              (e = a.scrollLeft()),
              this.el.removeClass("fancybox-lock"),
              a.scrollTop(t).scrollLeft(e)),
            n(".fancybox-overlay").remove().hide(),
            n.extend(this, { overlay: null, fixed: !1 });
        },
        update: function () {
          var t,
            n = "100%";
          this.overlay.width(n).height("100%"),
            l
              ? ((t = Math.max(
                  e.documentElement.offsetWidth,
                  e.body.offsetWidth
                )),
                r.width() > t && (n = r.width()))
              : r.width() > a.width() && (n = r.width()),
            this.overlay.width(n).height(r.height());
        },
        onReady: function (t, e) {
          var i = this.overlay;
          n(".fancybox-overlay").stop(!0, !0),
            i || this.create(t),
            t.locked &&
              this.fixed &&
              e.fixed &&
              (i ||
                (this.margin =
                  r.height() > a.height()
                    ? n("html").css("margin-right").replace("px", "")
                    : !1),
              (e.locked = this.overlay.append(e.wrap)),
              (e.fixed = !1)),
            !0 === t.showEarly && this.beforeShow.apply(this, arguments);
        },
        beforeShow: function (t, e) {
          var i, o;
          e.locked &&
            (!1 !== this.margin &&
              (n("*")
                .filter(function () {
                  return (
                    "fixed" === n(this).css("position") &&
                    !n(this).hasClass("fancybox-overlay") &&
                    !n(this).hasClass("fancybox-wrap")
                  );
                })
                .addClass("fancybox-margin"),
              this.el.addClass("fancybox-margin")),
            (i = a.scrollTop()),
            (o = a.scrollLeft()),
            this.el.addClass("fancybox-lock"),
            a.scrollTop(i).scrollLeft(o)),
            this.open(t);
        },
        onUpdate: function () {
          this.fixed || this.update();
        },
        afterClose: function (t) {
          this.overlay &&
            !s.coming &&
            this.overlay.fadeOut(t.speedOut, n.proxy(this.close, this));
        },
      }),
      (s.helpers.title = {
        defaults: { type: "float", position: "bottom" },
        beforeShow: function (t) {
          var e = s.current,
            i = e.title,
            o = t.type;
          if (
            (n.isFunction(i) && (i = i.call(e.element, e)),
            d(i) && "" !== n.trim(i))
          ) {
            switch (
              ((e = n(
                '<div class="fancybox-title fancybox-title-' +
                  o +
                  '-wrap">' +
                  i +
                  "</div>"
              )),
              o)
            ) {
              case "inside":
                o = s.skin;
                break;
              case "outside":
                o = s.wrap;
                break;
              case "over":
                o = s.inner;
                break;
              default:
                (o = s.skin),
                  e.appendTo("body"),
                  l && e.width(e.width()),
                  e.wrapInner('<span class="child"></span>'),
                  (s.current.margin[2] += Math.abs(h(e.css("margin-bottom"))));
            }
            e["top" === t.position ? "prependTo" : "appendTo"](o);
          }
        },
      }),
      (n.fn.fancybox = function (t) {
        var e,
          i = n(this),
          o = this.selector || "",
          a = function (a) {
            var r,
              l,
              c = n(this).blur(),
              u = e;
            !(
              a.ctrlKey ||
              a.altKey ||
              a.shiftKey ||
              a.metaKey ||
              c.is(".fancybox-wrap") ||
              ((r = t.groupAttr || "data-fancybox-group"),
              (l = c.attr(r)),
              l || ((r = "rel"), (l = c.get(0)[r])),
              l &&
                "" !== l &&
                "nofollow" !== l &&
                ((c = o.length ? n(o) : i),
                (c = c.filter("[" + r + '="' + l + '"]')),
                (u = c.index(this))),
              (t.index = u),
              !1 === s.open(c, t) || !a.preventDefault())
            );
          };
        return (
          (t = t || {}),
          (e = t.index || 0),
          o && !1 !== t.live
            ? r
                .undelegate(o, "click.fb-start")
                .delegate(
                  o + ":not('.fancybox-item, .fancybox-nav')",
                  "click.fb-start",
                  a
                )
            : i.unbind("click.fb-start").bind("click.fb-start", a),
          this.filter("[data-fancybox-start=1]").trigger("click"),
          this
        );
      }),
      r.ready(function () {
        var e, a;
        if (
          (n.scrollbarWidth === i &&
            (n.scrollbarWidth = function () {
              var t = n(
                  '<div style="width:50px;height:50px;overflow:auto"><div/></div>'
                ).appendTo("body"),
                e = t.children(),
                e = e.innerWidth() - e.height(99).innerWidth();
              return t.remove(), e;
            }),
          n.support.fixedPosition === i)
        ) {
          (e = n.support),
            (a = n('<div style="position:fixed;top:20px;"></div>').appendTo(
              "body"
            ));
          var r = 20 === a[0].offsetTop || 15 === a[0].offsetTop;
          a.remove(), (e.fixedPosition = r);
        }
        n.extend(s.defaults, {
          scrollbarWidth: n.scrollbarWidth(),
          fixed: n.support.fixedPosition,
          parent: n("body"),
        }),
          (e = n(t).width()),
          o.addClass("fancybox-lock-test"),
          (a = n(t).width()),
          o.removeClass("fancybox-lock-test"),
          n(
            "<style type='text/css'>.fancybox-margin{margin-right:" +
              (a - e) +
              "px;}</style>"
          ).appendTo("head");
      });
  })(window, document, jQuery),
  (jQuery.easing.jswing = jQuery.easing.swing),
  jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (t, e, n, i, o) {
      return jQuery.easing[jQuery.easing.def](t, e, n, i, o);
    },
    easeInQuad: function (t, e, n, i, o) {
      return i * (e /= o) * e + n;
    },
    easeOutQuad: function (t, e, n, i, o) {
      return -i * (e /= o) * (e - 2) + n;
    },
    easeInOutQuad: function (t, e, n, i, o) {
      return (e /= o / 2) < 1
        ? (i / 2) * e * e + n
        : (-i / 2) * (--e * (e - 2) - 1) + n;
    },
    easeInCubic: function (t, e, n, i, o) {
      return i * (e /= o) * e * e + n;
    },
    easeOutCubic: function (t, e, n, i, o) {
      return i * ((e = e / o - 1) * e * e + 1) + n;
    },
    easeInOutCubic: function (t, e, n, i, o) {
      return (e /= o / 2) < 1
        ? (i / 2) * e * e * e + n
        : (i / 2) * ((e -= 2) * e * e + 2) + n;
    },
    easeInQuart: function (t, e, n, i, o) {
      return i * (e /= o) * e * e * e + n;
    },
    easeOutQuart: function (t, e, n, i, o) {
      return -i * ((e = e / o - 1) * e * e * e - 1) + n;
    },
    easeInOutQuart: function (t, e, n, i, o) {
      return (e /= o / 2) < 1
        ? (i / 2) * e * e * e * e + n
        : (-i / 2) * ((e -= 2) * e * e * e - 2) + n;
    },
    easeInQuint: function (t, e, n, i, o) {
      return i * (e /= o) * e * e * e * e + n;
    },
    easeOutQuint: function (t, e, n, i, o) {
      return i * ((e = e / o - 1) * e * e * e * e + 1) + n;
    },
    easeInOutQuint: function (t, e, n, i, o) {
      return (e /= o / 2) < 1
        ? (i / 2) * e * e * e * e * e + n
        : (i / 2) * ((e -= 2) * e * e * e * e + 2) + n;
    },
    easeInSine: function (t, e, n, i, o) {
      return -i * Math.cos((e / o) * (Math.PI / 2)) + i + n;
    },
    easeOutSine: function (t, e, n, i, o) {
      return i * Math.sin((e / o) * (Math.PI / 2)) + n;
    },
    easeInOutSine: function (t, e, n, i, o) {
      return (-i / 2) * (Math.cos((Math.PI * e) / o) - 1) + n;
    },
    easeInExpo: function (t, e, n, i, o) {
      return 0 == e ? n : i * Math.pow(2, 10 * (e / o - 1)) + n;
    },
    easeOutExpo: function (t, e, n, i, o) {
      return e == o ? n + i : i * (-Math.pow(2, (-10 * e) / o) + 1) + n;
    },
    easeInOutExpo: function (t, e, n, i, o) {
      return 0 == e
        ? n
        : e == o
        ? n + i
        : (e /= o / 2) < 1
        ? (i / 2) * Math.pow(2, 10 * (e - 1)) + n
        : (i / 2) * (-Math.pow(2, -10 * --e) + 2) + n;
    },
    easeInCirc: function (t, e, n, i, o) {
      return -i * (Math.sqrt(1 - (e /= o) * e) - 1) + n;
    },
    easeOutCirc: function (t, e, n, i, o) {
      return i * Math.sqrt(1 - (e = e / o - 1) * e) + n;
    },
    easeInOutCirc: function (t, e, n, i, o) {
      return (e /= o / 2) < 1
        ? (-i / 2) * (Math.sqrt(1 - e * e) - 1) + n
        : (i / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + n;
    },
    easeInElastic: function (t, e, n, i, o) {
      var a = 1.70158,
        r = 0,
        s = i;
      if (0 == e) return n;
      if (1 == (e /= o)) return n + i;
      if ((r || (r = 0.3 * o), s < Math.abs(i))) {
        s = i;
        var a = r / 4;
      } else var a = (r / (2 * Math.PI)) * Math.asin(i / s);
      return (
        -(
          s *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin((2 * (e * o - a) * Math.PI) / r)
        ) + n
      );
    },
    easeOutElastic: function (t, e, n, i, o) {
      var a = 1.70158,
        r = 0,
        s = i;
      if (0 == e) return n;
      if (1 == (e /= o)) return n + i;
      if ((r || (r = 0.3 * o), s < Math.abs(i))) {
        s = i;
        var a = r / 4;
      } else var a = (r / (2 * Math.PI)) * Math.asin(i / s);
      return (
        s * Math.pow(2, -10 * e) * Math.sin((2 * (e * o - a) * Math.PI) / r) +
        i +
        n
      );
    },
    easeInOutElastic: function (t, e, n, i, o) {
      var a = 1.70158,
        r = 0,
        s = i;
      if (0 == e) return n;
      if (2 == (e /= o / 2)) return n + i;
      if ((r || (r = 0.3 * o * 1.5), s < Math.abs(i))) {
        s = i;
        var a = r / 4;
      } else var a = (r / (2 * Math.PI)) * Math.asin(i / s);
      return 1 > e
        ? -0.5 *
            s *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin((2 * (e * o - a) * Math.PI) / r) +
            n
        : s *
            Math.pow(2, -10 * (e -= 1)) *
            Math.sin((2 * (e * o - a) * Math.PI) / r) *
            0.5 +
            i +
            n;
    },
    easeInBack: function (t, e, n, i, o, a) {
      return (
        void 0 == a && (a = 1.70158), i * (e /= o) * e * ((a + 1) * e - a) + n
      );
    },
    easeOutBack: function (t, e, n, i, o, a) {
      return (
        void 0 == a && (a = 1.70158),
        i * ((e = e / o - 1) * e * ((a + 1) * e + a) + 1) + n
      );
    },
    easeInOutBack: function (t, e, n, i, o, a) {
      return (
        void 0 == a && (a = 1.70158),
        (e /= o / 2) < 1
          ? (i / 2) * e * e * (((a *= 1.525) + 1) * e - a) + n
          : (i / 2) * ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) + n
      );
    },
    easeInBounce: function (t, e, n, i, o) {
      return i - jQuery.easing.easeOutBounce(t, o - e, 0, i, o) + n;
    },
    easeOutBounce: function (t, e, n, i, o) {
      return (e /= o) < 1 / 2.75
        ? 7.5625 * i * e * e + n
        : 2 / 2.75 > e
        ? i * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + n
        : 2.5 / 2.75 > e
        ? i * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + n
        : i * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + n;
    },
    easeInOutBounce: function (t, e, n, i, o) {
      return o / 2 > e
        ? 0.5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, o) + n
        : 0.5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, i, o) +
            0.5 * i +
            n;
    },
  });
var img2load = new Array();
img2load.push("img/loading.gif"),
  img2load.push("img/b-a.png"),
  img2load.push("img/b-c.png"),
  img2load.push("img/b-cdehunt.png"),
  img2load.push("img/b-cpu.jpg"),
  img2load.push("img/b-e1.png"),
  img2load.push("img/b-eng.jpg"),
  img2load.push("img/b-fin.jpg"),
  img2load.push("img/b-gue.jpg"),
  img2load.push("img/b-its.jpg"),
  img2load.push("img/b-kb.jpg"),
  img2load.push("img/b-kin.png"),
  img2load.push("img/b-nte.png"),
  img2load.push("img/b-opc.png"),
  img2load.push("img/b-oth.jpg"),
  img2load.push("img/b-pos.jpg"),
  img2load.push("img/b-ppt.jpg"),
  img2load.push("img/b-proj.jpg"),
  img2load.push("img/b-qui.jpg"),
  img2load.push("img/b-s.jpg"),
  img2load.push("img/b-smrt.png"),
  img2load.push("img/b-spy.jpg"),
  img2load.push("img/b-te.png"),
  img2load.push("img/b-w.png"),
  img2load.push("img/b-who.png"),
  img2load.push("img/b-wro.png"),
  img2load.push("img/carousel0.jpg"),
  img2load.push("img/carousel1.jpg"),
  img2load.push("img/contact.png"),
  img2load.push("img/estate.png"),
  img2load.push("img/l-cdehunt.png"),
  img2load.push("img/l-cpu.png"),
  img2load.push("img/l-eng.jpg"),
  img2load.push("img/l-fin.jpg"),
  img2load.push("img/l-geek.png"),
  img2load.push("img/l-gue.jpg"),
  img2load.push("img/l-its.jpg"),
  img2load.push("img/l-key.png"),
  img2load.push("img/l-koc.png"),
  img2load.push("img/l-opc.png"),
  img2load.push("img/l-oth.png"),
  img2load.push("img/l-pd.png"),
  img2load.push("img/l-pe.jpg"),
  img2load.push("img/l-pos.jpg"),
  img2load.push("img/l-ppt.jpg"),
  img2load.push("img/l-proj.jpg"),
  img2load.push("img/l-qui.jpg"),
  img2load.push("img/l-qui.png"),
  img2load.push("img/l-smrt.png"),
  img2load.push("img/l-spy.png"),
  img2load.push("img/l-tnt.png"),
  img2load.push("img/l-who.png"),
  img2load.push("img/l-wro.png"),
  img2load.push("img/logo.png"),
  img2load.push("img/main code.png"),
  img2load.push("img/opc_logo.png"),
  img2load.push("img/s-bg.png"),
  img2load.push("img/s-c.png"),
  img2load.push("img/s-d.png"),
  img2load.push("img/s-dh.png"),
  img2load.push("img/s-gc.png"),
  img2load.push("img/s-i.png"),
  img2load.push("img/s-ncc.png"),
  img2load.push("img/s-pg.png"),
  img2load.push("img/s-sa.png"),
  img2load.push("img/s-sc.png"),
  img2load.push("img/s-sl.png"),
  img2load.push("img/s-sva.png"),
  img2load.push("img/s-v.png"),
  img2load.push("img/s-vi.png");
for (
  var totimg = img2load.length,
    imagesloaded = 0,
    anImageLoaded = function () {
      imagesloaded++,
        (document.getElementById("loading").innerHTML =
          Math.floor((imagesloaded / totimg) * 100) + " %");
    },
    i = 0;
  totimg > i;
  i++
) {
  var s = new Image();
  (s.onload = function () {
    anImageLoaded();
  }),
    (s.onerror = function () {
      anImageLoaded(), console.log("failed to load " + this.src + imagesloaded);
    }),
    (s.src = img2load[i]);
}
var $main = $("#pt-main"),
  $pages = $main.children("div.pt-page"),
  pagesCount = $pages.length,
  current = 0,
  backupnext = 0,
  isAnimating = !1,
  endCurrPage = !1,
  endNextPage = !1,
  inClass = "",
  outClass = "",
  animEndEventNames = {
    WebkitAnimation: "webkitAnimationEnd",
    OAnimation: "oAnimationEnd",
    msAnimation: "MSAnimationEnd",
    animation: "animationend",
  },
  animEndEventName = animEndEventNames[Modernizr.prefixed("animation")],
  support = Modernizr.cssanimations;
$pages.each(function () {
  var t = $(this);
  t.data("originalClassList", t.attr("class"));
});
var loop = 1,
  ss = slideshow();
$pages.eq(current).addClass("pt-page-current"),
  $(window).resize(function () {
    setnavbar();
  }),
  setnavbar(),
  onReady(function () {
    show("navigation", !0), show("pt-main", !0), show("loading", !1);
  }),
  $("#firstpage").scroll(function () {
    $("#firstpage").scrollTop() > 400
      ? $("#navigation").css("background-color", "#008B45")
      : $("#navigation").css("background-color", "rgba(16, 22, 54, 0.2)");
  }),
  onReady(function () {
    $(".project-wrapper").mixItUp(),
      $(".fancybox").fancybox({
        padding: 0,
        type: "image",
        openEffect: "elastic",
        openSpeed: 650,
        closeEffect: "elastic",
        closeSpeed: 550,
        closeClick: !0,
      }),
      show("navigation", !0),
      show("pt-main", !0),
      show("loading", !1);
  });
