import { g as getDefaultExportFromCjs } from "./markdown.Ba9FtS5g.js";
var apexcharts_common$2 = { exports: {} };
/*!
 * ApexCharts v3.54.1
 * (c) 2018-2024 ApexCharts
 * Released under the MIT License.
 */
(function(module, exports) {
  function t(t2, e2) {
    (null == e2 || e2 > t2.length) && (e2 = t2.length);
    for (var i2 = 0, a2 = Array(e2); i2 < e2; i2++) a2[i2] = t2[i2];
    return a2;
  }
  function e(t2) {
    if (void 0 === t2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t2;
  }
  function i(t2, e2) {
    if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
  }
  function a(t2, e2) {
    for (var i2 = 0; i2 < e2.length; i2++) {
      var a2 = e2[i2];
      a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(t2, x(a2.key), a2);
    }
  }
  function s(t2, e2, i2) {
    return e2 && a(t2.prototype, e2), i2 && a(t2, i2), Object.defineProperty(t2, "prototype", { writable: false }), t2;
  }
  function r(t2, e2) {
    var i2 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
    if (!i2) {
      if (Array.isArray(t2) || (i2 = v(t2)) || e2) {
        i2 && (t2 = i2);
        var a2 = 0, s2 = function() {
        };
        return { s: s2, n: function() {
          return a2 >= t2.length ? { done: true } : { done: false, value: t2[a2++] };
        }, e: function(t3) {
          throw t3;
        }, f: s2 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var r2, o2 = true, n2 = false;
    return { s: function() {
      i2 = i2.call(t2);
    }, n: function() {
      var t3 = i2.next();
      return o2 = t3.done, t3;
    }, e: function(t3) {
      n2 = true, r2 = t3;
    }, f: function() {
      try {
        o2 || null == i2.return || i2.return();
      } finally {
        if (n2) throw r2;
      }
    } };
  }
  function o(t2) {
    var i2 = c();
    return function() {
      var a2, s2 = l(t2);
      if (i2) {
        var r2 = l(this).constructor;
        a2 = Reflect.construct(s2, arguments, r2);
      } else a2 = s2.apply(this, arguments);
      return function(t3, i3) {
        if (i3 && ("object" == typeof i3 || "function" == typeof i3)) return i3;
        if (void 0 !== i3) throw new TypeError("Derived constructors may only return object or undefined");
        return e(t3);
      }(this, a2);
    };
  }
  function n(t2, e2, i2) {
    return (e2 = x(e2)) in t2 ? Object.defineProperty(t2, e2, { value: i2, enumerable: true, configurable: true, writable: true }) : t2[e2] = i2, t2;
  }
  function l(t2) {
    return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
      return t3.__proto__ || Object.getPrototypeOf(t3);
    }, l(t2);
  }
  function h(t2, e2) {
    if ("function" != typeof e2 && null !== e2) throw new TypeError("Super expression must either be null or a function");
    t2.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t2, writable: true, configurable: true } }), Object.defineProperty(t2, "prototype", { writable: false }), e2 && u(t2, e2);
  }
  function c() {
    try {
      var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (t3) {
    }
    return (c = function() {
      return !!t2;
    })();
  }
  function d(t2, e2) {
    var i2 = Object.keys(t2);
    if (Object.getOwnPropertySymbols) {
      var a2 = Object.getOwnPropertySymbols(t2);
      e2 && (a2 = a2.filter(function(e3) {
        return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
      })), i2.push.apply(i2, a2);
    }
    return i2;
  }
  function g(t2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var i2 = null != arguments[e2] ? arguments[e2] : {};
      e2 % 2 ? d(Object(i2), true).forEach(function(e3) {
        n(t2, e3, i2[e3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(i2)) : d(Object(i2)).forEach(function(e3) {
        Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(i2, e3));
      });
    }
    return t2;
  }
  function u(t2, e2) {
    return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
      return t3.__proto__ = e3, t3;
    }, u(t2, e2);
  }
  function f(t2, e2) {
    return function(t3) {
      if (Array.isArray(t3)) return t3;
    }(t2) || function(t3, e3) {
      var i2 = null == t3 ? null : "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
      if (null != i2) {
        var a2, s2, r2, o2, n2 = [], l2 = true, h2 = false;
        try {
          if (r2 = (i2 = i2.call(t3)).next, 0 === e3) {
            if (Object(i2) !== i2) return;
            l2 = false;
          } else for (; !(l2 = (a2 = r2.call(i2)).done) && (n2.push(a2.value), n2.length !== e3); l2 = true) ;
        } catch (t4) {
          h2 = true, s2 = t4;
        } finally {
          try {
            if (!l2 && null != i2.return && (o2 = i2.return(), Object(o2) !== o2)) return;
          } finally {
            if (h2) throw s2;
          }
        }
        return n2;
      }
    }(t2, e2) || v(t2, e2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function p(e2) {
    return function(e3) {
      if (Array.isArray(e3)) return t(e3);
    }(e2) || function(t2) {
      if ("undefined" != typeof Symbol && null != t2[Symbol.iterator] || null != t2["@@iterator"]) return Array.from(t2);
    }(e2) || v(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function x(t2) {
    var e2 = function(t3, e3) {
      if ("object" != typeof t3 || !t3) return t3;
      var i2 = t3[Symbol.toPrimitive];
      if (void 0 !== i2) {
        var a2 = i2.call(t3, e3 || "default");
        if ("object" != typeof a2) return a2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e3 ? String : Number)(t3);
    }(t2, "string");
    return "symbol" == typeof e2 ? e2 : e2 + "";
  }
  function b(t2) {
    return b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
      return typeof t3;
    } : function(t3) {
      return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
    }, b(t2);
  }
  function v(e2, i2) {
    if (e2) {
      if ("string" == typeof e2) return t(e2, i2);
      var a2 = {}.toString.call(e2).slice(8, -1);
      return "Object" === a2 && e2.constructor && (a2 = e2.constructor.name), "Map" === a2 || "Set" === a2 ? Array.from(e2) : "Arguments" === a2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a2) ? t(e2, i2) : void 0;
    }
  }
  var m = function() {
    function t2() {
      i(this, t2);
    }
    return s(t2, [{ key: "shadeRGBColor", value: function(t3, e2) {
      var i2 = e2.split(","), a2 = t3 < 0 ? 0 : 255, s2 = t3 < 0 ? -1 * t3 : t3, r2 = parseInt(i2[0].slice(4), 10), o2 = parseInt(i2[1], 10), n2 = parseInt(i2[2], 10);
      return "rgb(" + (Math.round((a2 - r2) * s2) + r2) + "," + (Math.round((a2 - o2) * s2) + o2) + "," + (Math.round((a2 - n2) * s2) + n2) + ")";
    } }, { key: "shadeHexColor", value: function(t3, e2) {
      var i2 = parseInt(e2.slice(1), 16), a2 = t3 < 0 ? 0 : 255, s2 = t3 < 0 ? -1 * t3 : t3, r2 = i2 >> 16, o2 = i2 >> 8 & 255, n2 = 255 & i2;
      return "#" + (16777216 + 65536 * (Math.round((a2 - r2) * s2) + r2) + 256 * (Math.round((a2 - o2) * s2) + o2) + (Math.round((a2 - n2) * s2) + n2)).toString(16).slice(1);
    } }, { key: "shadeColor", value: function(e2, i2) {
      return t2.isColorHex(i2) ? this.shadeHexColor(e2, i2) : this.shadeRGBColor(e2, i2);
    } }], [{ key: "bind", value: function(t3, e2) {
      return function() {
        return t3.apply(e2, arguments);
      };
    } }, { key: "isObject", value: function(t3) {
      return t3 && "object" === b(t3) && !Array.isArray(t3) && null != t3;
    } }, { key: "is", value: function(t3, e2) {
      return Object.prototype.toString.call(e2) === "[object " + t3 + "]";
    } }, { key: "listToArray", value: function(t3) {
      var e2, i2 = [];
      for (e2 = 0; e2 < t3.length; e2++) i2[e2] = t3[e2];
      return i2;
    } }, { key: "extend", value: function(t3, e2) {
      var i2 = this;
      "function" != typeof Object.assign && (Object.assign = function(t4) {
        if (null == t4) throw new TypeError("Cannot convert undefined or null to object");
        for (var e3 = Object(t4), i3 = 1; i3 < arguments.length; i3++) {
          var a3 = arguments[i3];
          if (null != a3) for (var s2 in a3) a3.hasOwnProperty(s2) && (e3[s2] = a3[s2]);
        }
        return e3;
      });
      var a2 = Object.assign({}, t3);
      return this.isObject(t3) && this.isObject(e2) && Object.keys(e2).forEach(function(s2) {
        i2.isObject(e2[s2]) && s2 in t3 ? a2[s2] = i2.extend(t3[s2], e2[s2]) : Object.assign(a2, n({}, s2, e2[s2]));
      }), a2;
    } }, { key: "extendArray", value: function(e2, i2) {
      var a2 = [];
      return e2.map(function(e3) {
        a2.push(t2.extend(i2, e3));
      }), e2 = a2;
    } }, { key: "monthMod", value: function(t3) {
      return t3 % 12;
    } }, { key: "clone", value: function(e2) {
      if (t2.is("Array", e2)) {
        for (var i2 = [], a2 = 0; a2 < e2.length; a2++) i2[a2] = this.clone(e2[a2]);
        return i2;
      }
      if (t2.is("Null", e2)) return null;
      if (t2.is("Date", e2)) return e2;
      if ("object" === b(e2)) {
        var s2 = {};
        for (var r2 in e2) e2.hasOwnProperty(r2) && (s2[r2] = this.clone(e2[r2]));
        return s2;
      }
      return e2;
    } }, { key: "log10", value: function(t3) {
      return Math.log(t3) / Math.LN10;
    } }, { key: "roundToBase10", value: function(t3) {
      return Math.pow(10, Math.floor(Math.log10(t3)));
    } }, { key: "roundToBase", value: function(t3, e2) {
      return Math.pow(e2, Math.floor(Math.log(t3) / Math.log(e2)));
    } }, { key: "parseNumber", value: function(t3) {
      return null === t3 ? t3 : parseFloat(t3);
    } }, { key: "stripNumber", value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      return Number.isInteger(t3) ? t3 : parseFloat(t3.toPrecision(e2));
    } }, { key: "randomId", value: function() {
      return (Math.random() + 1).toString(36).substring(4);
    } }, { key: "noExponents", value: function(t3) {
      var e2 = String(t3).split(/[eE]/);
      if (1 === e2.length) return e2[0];
      var i2 = "", a2 = t3 < 0 ? "-" : "", s2 = e2[0].replace(".", ""), r2 = Number(e2[1]) + 1;
      if (r2 < 0) {
        for (i2 = a2 + "0."; r2++; ) i2 += "0";
        return i2 + s2.replace(/^-/, "");
      }
      for (r2 -= s2.length; r2--; ) i2 += "0";
      return s2 + i2;
    } }, { key: "getDimensions", value: function(t3) {
      var e2 = getComputedStyle(t3, null), i2 = t3.clientHeight, a2 = t3.clientWidth;
      return i2 -= parseFloat(e2.paddingTop) + parseFloat(e2.paddingBottom), [a2 -= parseFloat(e2.paddingLeft) + parseFloat(e2.paddingRight), i2];
    } }, { key: "getBoundingClientRect", value: function(t3) {
      var e2 = t3.getBoundingClientRect();
      return { top: e2.top, right: e2.right, bottom: e2.bottom, left: e2.left, width: t3.clientWidth, height: t3.clientHeight, x: e2.left, y: e2.top };
    } }, { key: "getLargestStringFromArr", value: function(t3) {
      return t3.reduce(function(t4, e2) {
        return Array.isArray(e2) && (e2 = e2.reduce(function(t5, e3) {
          return t5.length > e3.length ? t5 : e3;
        })), t4.length > e2.length ? t4 : e2;
      }, 0);
    } }, { key: "hexToRgba", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "#999999", e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.6;
      "#" !== t3.substring(0, 1) && (t3 = "#999999");
      var i2 = t3.replace("#", "");
      i2 = i2.match(new RegExp("(.{" + i2.length / 3 + "})", "g"));
      for (var a2 = 0; a2 < i2.length; a2++) i2[a2] = parseInt(1 === i2[a2].length ? i2[a2] + i2[a2] : i2[a2], 16);
      return void 0 !== e2 && i2.push(e2), "rgba(" + i2.join(",") + ")";
    } }, { key: "getOpacityFromRGBA", value: function(t3) {
      return parseFloat(t3.replace(/^.*,(.+)\)/, "$1"));
    } }, { key: "rgb2hex", value: function(t3) {
      return (t3 = t3.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t3.length ? "#" + ("0" + parseInt(t3[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t3[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t3[3], 10).toString(16)).slice(-2) : "";
    } }, { key: "isColorHex", value: function(t3) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t3);
    } }, { key: "getPolygonPos", value: function(t3, e2) {
      for (var i2 = [], a2 = 2 * Math.PI / e2, s2 = 0; s2 < e2; s2++) {
        var r2 = {};
        r2.x = t3 * Math.sin(s2 * a2), r2.y = -t3 * Math.cos(s2 * a2), i2.push(r2);
      }
      return i2;
    } }, { key: "polarToCartesian", value: function(t3, e2, i2, a2) {
      var s2 = (a2 - 90) * Math.PI / 180;
      return { x: t3 + i2 * Math.cos(s2), y: e2 + i2 * Math.sin(s2) };
    } }, { key: "escapeString", value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x", i2 = t3.toString().slice();
      return i2 = i2.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi, e2);
    } }, { key: "negToZero", value: function(t3) {
      return t3 < 0 ? 0 : t3;
    } }, { key: "moveIndexInArray", value: function(t3, e2, i2) {
      if (i2 >= t3.length) for (var a2 = i2 - t3.length + 1; a2--; ) t3.push(void 0);
      return t3.splice(i2, 0, t3.splice(e2, 1)[0]), t3;
    } }, { key: "extractNumber", value: function(t3) {
      return parseFloat(t3.replace(/[^\d.]*/g, ""));
    } }, { key: "findAncestor", value: function(t3, e2) {
      for (; (t3 = t3.parentElement) && !t3.classList.contains(e2); ) ;
      return t3;
    } }, { key: "setELstyles", value: function(t3, e2) {
      for (var i2 in e2) e2.hasOwnProperty(i2) && (t3.style.key = e2[i2]);
    } }, { key: "preciseAddition", value: function(t3, e2) {
      var i2 = (String(t3).split(".")[1] || "").length, a2 = (String(e2).split(".")[1] || "").length, s2 = Math.pow(10, Math.max(i2, a2));
      return (Math.round(t3 * s2) + Math.round(e2 * s2)) / s2;
    } }, { key: "isNumber", value: function(t3) {
      return !isNaN(t3) && parseFloat(Number(t3)) === t3 && !isNaN(parseInt(t3, 10));
    } }, { key: "isFloat", value: function(t3) {
      return Number(t3) === t3 && t3 % 1 != 0;
    } }, { key: "isSafari", value: function() {
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    } }, { key: "isFirefox", value: function() {
      return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    } }, { key: "isMsEdge", value: function() {
      var t3 = window.navigator.userAgent, e2 = t3.indexOf("Edge/");
      return e2 > 0 && parseInt(t3.substring(e2 + 5, t3.indexOf(".", e2)), 10);
    } }, { key: "getGCD", value: function(t3, e2) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 7, a2 = Math.pow(10, i2 - Math.floor(Math.log10(Math.max(t3, e2))));
      for (t3 = Math.round(Math.abs(t3) * a2), e2 = Math.round(Math.abs(e2) * a2); e2; ) {
        var s2 = e2;
        e2 = t3 % e2, t3 = s2;
      }
      return t3 / a2;
    } }, { key: "getPrimeFactors", value: function(t3) {
      for (var e2 = [], i2 = 2; t3 >= 2; ) t3 % i2 == 0 ? (e2.push(i2), t3 /= i2) : i2++;
      return e2;
    } }, { key: "mod", value: function(t3, e2) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 7, a2 = Math.pow(10, i2 - Math.floor(Math.log10(Math.max(t3, e2))));
      return (t3 = Math.round(Math.abs(t3) * a2)) % (e2 = Math.round(Math.abs(e2) * a2)) / a2;
    } }]), t2;
  }(), y = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w, this.setEasingFunctions();
    }
    return s(t2, [{ key: "setEasingFunctions", value: function() {
      var t3;
      if (!this.w.globals.easing) {
        switch (this.w.config.chart.animations.easing) {
          case "linear":
            t3 = "-";
            break;
          case "easein":
            t3 = "<";
            break;
          case "easeout":
            t3 = ">";
            break;
          case "easeinout":
          default:
            t3 = "<>";
            break;
          case "swing":
            t3 = function(t4) {
              var e2 = 1.70158;
              return (t4 -= 1) * t4 * ((e2 + 1) * t4 + e2) + 1;
            };
            break;
          case "bounce":
            t3 = function(t4) {
              return t4 < 1 / 2.75 ? 7.5625 * t4 * t4 : t4 < 2 / 2.75 ? 7.5625 * (t4 -= 1.5 / 2.75) * t4 + 0.75 : t4 < 2.5 / 2.75 ? 7.5625 * (t4 -= 2.25 / 2.75) * t4 + 0.9375 : 7.5625 * (t4 -= 2.625 / 2.75) * t4 + 0.984375;
            };
            break;
          case "elastic":
            t3 = function(t4) {
              return t4 === !!t4 ? t4 : Math.pow(2, -10 * t4) * Math.sin((t4 - 0.075) * (2 * Math.PI) / 0.3) + 1;
            };
        }
        this.w.globals.easing = t3;
      }
    } }, { key: "animateLine", value: function(t3, e2, i2, a2) {
      t3.attr(e2).animate(a2).attr(i2);
    } }, { key: "animateMarker", value: function(t3, e2, i2, a2) {
      t3.attr({ opacity: 0 }).animate(e2, i2).attr({ opacity: 1 }).afterAll(function() {
        a2();
      });
    } }, { key: "animateRect", value: function(t3, e2, i2, a2, s2) {
      t3.attr(e2).animate(a2).attr(i2).afterAll(function() {
        return s2();
      });
    } }, { key: "animatePathsGradually", value: function(t3) {
      var e2 = t3.el, i2 = t3.realIndex, a2 = t3.j, s2 = t3.fill, r2 = t3.pathFrom, o2 = t3.pathTo, n2 = t3.speed, l2 = t3.delay, h2 = this.w, c2 = 0;
      h2.config.chart.animations.animateGradually.enabled && (c2 = h2.config.chart.animations.animateGradually.delay), h2.config.chart.animations.dynamicAnimation.enabled && h2.globals.dataChanged && "bar" !== h2.config.chart.type && (c2 = 0), this.morphSVG(e2, i2, a2, "line" !== h2.config.chart.type || h2.globals.comboCharts ? s2 : "stroke", r2, o2, n2, l2 * c2);
    } }, { key: "showDelayedElements", value: function() {
      this.w.globals.delayedElements.forEach(function(t3) {
        var e2 = t3.el;
        e2.classList.remove("apexcharts-element-hidden"), e2.classList.add("apexcharts-hidden-element-shown");
      });
    } }, { key: "animationCompleted", value: function(t3) {
      var e2 = this.w;
      e2.globals.animationEnded || (e2.globals.animationEnded = true, this.showDelayedElements(), "function" == typeof e2.config.chart.events.animationEnd && e2.config.chart.events.animationEnd(this.ctx, { el: t3, w: e2 }));
    } }, { key: "morphSVG", value: function(t3, e2, i2, a2, s2, r2, o2, n2) {
      var l2 = this, h2 = this.w;
      s2 || (s2 = t3.attr("pathFrom")), r2 || (r2 = t3.attr("pathTo"));
      var c2 = function(t4) {
        return "radar" === h2.config.chart.type && (o2 = 1), "M 0 ".concat(h2.globals.gridHeight);
      };
      (!s2 || s2.indexOf("undefined") > -1 || s2.indexOf("NaN") > -1) && (s2 = c2()), (!r2 || r2.indexOf("undefined") > -1 || r2.indexOf("NaN") > -1) && (r2 = c2()), h2.globals.shouldAnimate || (o2 = 1), t3.plot(s2).animate(1, h2.globals.easing, n2).plot(s2).animate(o2, h2.globals.easing, n2).plot(r2).afterAll(function() {
        m.isNumber(i2) ? i2 === h2.globals.series[h2.globals.maxValsInArrayIndex].length - 2 && h2.globals.shouldAnimate && l2.animationCompleted(t3) : "none" !== a2 && h2.globals.shouldAnimate && (!h2.globals.comboCharts && e2 === h2.globals.series.length - 1 || h2.globals.comboCharts) && l2.animationCompleted(t3), l2.showDelayedElements();
      });
    } }]), t2;
  }(), w = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "getDefaultFilter", value: function(t3, e2) {
      var i2 = this.w;
      t3.unfilter(true), new window.SVG.Filter().size("120%", "180%", "-5%", "-40%"), "none" !== i2.config.states.normal.filter ? this.applyFilter(t3, e2, i2.config.states.normal.filter.type, i2.config.states.normal.filter.value) : i2.config.chart.dropShadow.enabled && this.dropShadow(t3, i2.config.chart.dropShadow, e2);
    } }, { key: "addNormalFilter", value: function(t3, e2) {
      var i2 = this.w;
      i2.config.chart.dropShadow.enabled && !t3.node.classList.contains("apexcharts-marker") && this.dropShadow(t3, i2.config.chart.dropShadow, e2);
    } }, { key: "addLightenFilter", value: function(t3, e2, i2) {
      var a2 = this, s2 = this.w, r2 = i2.intensity;
      t3.unfilter(true);
      new window.SVG.Filter();
      t3.filter(function(t4) {
        var i3 = s2.config.chart.dropShadow;
        (i3.enabled ? a2.addShadow(t4, e2, i3) : t4).componentTransfer({ rgb: { type: "linear", slope: 1.5, intercept: r2 } });
      }), t3.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t3.filterer.node);
    } }, { key: "addDarkenFilter", value: function(t3, e2, i2) {
      var a2 = this, s2 = this.w, r2 = i2.intensity;
      t3.unfilter(true);
      new window.SVG.Filter();
      t3.filter(function(t4) {
        var i3 = s2.config.chart.dropShadow;
        (i3.enabled ? a2.addShadow(t4, e2, i3) : t4).componentTransfer({ rgb: { type: "linear", slope: r2 } });
      }), t3.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t3.filterer.node);
    } }, { key: "applyFilter", value: function(t3, e2, i2) {
      var a2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
      switch (i2) {
        case "none":
          this.addNormalFilter(t3, e2);
          break;
        case "lighten":
          this.addLightenFilter(t3, e2, { intensity: a2 });
          break;
        case "darken":
          this.addDarkenFilter(t3, e2, { intensity: a2 });
      }
    } }, { key: "addShadow", value: function(t3, e2, i2) {
      var a2, s2 = this.w, r2 = i2.blur, o2 = i2.top, n2 = i2.left, l2 = i2.color, h2 = i2.opacity;
      if ((null === (a2 = s2.config.chart.dropShadow.enabledOnSeries) || void 0 === a2 ? void 0 : a2.length) > 0 && -1 === s2.config.chart.dropShadow.enabledOnSeries.indexOf(e2)) return t3;
      var c2 = t3.flood(Array.isArray(l2) ? l2[e2] : l2, h2).composite(t3.sourceAlpha, "in").offset(n2, o2).gaussianBlur(r2).merge(t3.source);
      return t3.blend(t3.source, c2);
    } }, { key: "dropShadow", value: function(t3, e2) {
      var i2, a2, s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r2 = e2.top, o2 = e2.left, n2 = e2.blur, l2 = e2.color, h2 = e2.opacity, c2 = e2.noUserSpaceOnUse, d2 = this.w;
      if (t3.unfilter(true), m.isMsEdge() && "radialBar" === d2.config.chart.type) return t3;
      if ((null === (i2 = d2.config.chart.dropShadow.enabledOnSeries) || void 0 === i2 ? void 0 : i2.length) > 0 && -1 === (null === (a2 = d2.config.chart.dropShadow.enabledOnSeries) || void 0 === a2 ? void 0 : a2.indexOf(s2))) return t3;
      return l2 = Array.isArray(l2) ? l2[s2] : l2, t3.filter(function(t4) {
        var e3 = null;
        e3 = m.isSafari() || m.isFirefox() || m.isMsEdge() ? t4.flood(l2, h2).composite(t4.sourceAlpha, "in").offset(o2, r2).gaussianBlur(n2) : t4.flood(l2, h2).composite(t4.sourceAlpha, "in").offset(o2, r2).gaussianBlur(n2).merge(t4.source), t4.blend(t4.source, e3);
      }), c2 || t3.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t3.filterer.node), t3;
    } }, { key: "setSelectionFilter", value: function(t3, e2, i2) {
      var a2 = this.w;
      if (void 0 !== a2.globals.selectedDataPoints[e2] && a2.globals.selectedDataPoints[e2].indexOf(i2) > -1) {
        t3.node.setAttribute("selected", true);
        var s2 = a2.config.states.active.filter;
        "none" !== s2 && this.applyFilter(t3, e2, s2.type, s2.value);
      }
    } }, { key: "_scaleFilterSize", value: function(t3) {
      !function(e2) {
        for (var i2 in e2) e2.hasOwnProperty(i2) && t3.setAttribute(i2, e2[i2]);
      }({ width: "200%", height: "200%", x: "-50%", y: "-50%" });
    } }]), t2;
  }(), k = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "roundPathCorners", value: function(t3, e2) {
      function i2(t4, e3, i3) {
        var s3 = e3.x - t4.x, r3 = e3.y - t4.y, o3 = Math.sqrt(s3 * s3 + r3 * r3);
        return a2(t4, e3, Math.min(1, i3 / o3));
      }
      function a2(t4, e3, i3) {
        return { x: t4.x + (e3.x - t4.x) * i3, y: t4.y + (e3.y - t4.y) * i3 };
      }
      function s2(t4, e3) {
        t4.length > 2 && (t4[t4.length - 2] = e3.x, t4[t4.length - 1] = e3.y);
      }
      function r2(t4) {
        return { x: parseFloat(t4[t4.length - 2]), y: parseFloat(t4[t4.length - 1]) };
      }
      t3.indexOf("NaN") > -1 && (t3 = "");
      var o2 = t3.split(/[,\s]/).reduce(function(t4, e3) {
        var i3 = e3.match("([a-zA-Z])(.+)");
        return i3 ? (t4.push(i3[1]), t4.push(i3[2])) : t4.push(e3), t4;
      }, []).reduce(function(t4, e3) {
        return parseFloat(e3) == e3 && t4.length ? t4[t4.length - 1].push(e3) : t4.push([e3]), t4;
      }, []), n2 = [];
      if (o2.length > 1) {
        var l2 = r2(o2[0]), h2 = null;
        "Z" == o2[o2.length - 1][0] && o2[0].length > 2 && (h2 = ["L", l2.x, l2.y], o2[o2.length - 1] = h2), n2.push(o2[0]);
        for (var c2 = 1; c2 < o2.length; c2++) {
          var d2 = n2[n2.length - 1], g2 = o2[c2], u2 = g2 == h2 ? o2[1] : o2[c2 + 1];
          if (u2 && d2 && d2.length > 2 && "L" == g2[0] && u2.length > 2 && "L" == u2[0]) {
            var f2, p2, x2 = r2(d2), b2 = r2(g2), v2 = r2(u2);
            f2 = i2(b2, x2, e2), p2 = i2(b2, v2, e2), s2(g2, f2), g2.origPoint = b2, n2.push(g2);
            var m2 = a2(f2, b2, 0.5), y2 = a2(b2, p2, 0.5), w2 = ["C", m2.x, m2.y, y2.x, y2.y, p2.x, p2.y];
            w2.origPoint = b2, n2.push(w2);
          } else n2.push(g2);
        }
        if (h2) {
          var k2 = r2(n2[n2.length - 1]);
          n2.push(["Z"]), s2(n2[0], k2);
        }
      } else n2 = o2;
      return n2.reduce(function(t4, e3) {
        return t4 + e3.join(" ") + " ";
      }, "");
    } }, { key: "drawLine", value: function(t3, e2, i2, a2) {
      var s2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "#a8a8a8", r2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, o2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, n2 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "butt";
      return this.w.globals.dom.Paper.line().attr({ x1: t3, y1: e2, x2: i2, y2: a2, stroke: s2, "stroke-dasharray": r2, "stroke-width": o2, "stroke-linecap": n2 });
    } }, { key: "drawRect", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, r2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "#fefefe", o2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1, n2 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, l2 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null, h2 = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0, c2 = this.w.globals.dom.Paper.rect();
      return c2.attr({ x: t3, y: e2, width: i2 > 0 ? i2 : 0, height: a2 > 0 ? a2 : 0, rx: s2, ry: s2, opacity: o2, "stroke-width": null !== n2 ? n2 : 0, stroke: null !== l2 ? l2 : "none", "stroke-dasharray": h2 }), c2.node.setAttribute("fill", r2), c2;
    } }, { key: "drawPolygon", value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#e1e1e1", i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, a2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none";
      return this.w.globals.dom.Paper.polygon(t3).attr({ fill: a2, stroke: e2, "stroke-width": i2 });
    } }, { key: "drawCircle", value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      t3 < 0 && (t3 = 0);
      var i2 = this.w.globals.dom.Paper.circle(2 * t3);
      return null !== e2 && i2.attr(e2), i2;
    } }, { key: "drawPath", value: function(t3) {
      var e2 = t3.d, i2 = void 0 === e2 ? "" : e2, a2 = t3.stroke, s2 = void 0 === a2 ? "#a8a8a8" : a2, r2 = t3.strokeWidth, o2 = void 0 === r2 ? 1 : r2, n2 = t3.fill, l2 = t3.fillOpacity, h2 = void 0 === l2 ? 1 : l2, c2 = t3.strokeOpacity, d2 = void 0 === c2 ? 1 : c2, g2 = t3.classes, u2 = t3.strokeLinecap, f2 = void 0 === u2 ? null : u2, p2 = t3.strokeDashArray, x2 = void 0 === p2 ? 0 : p2, b2 = this.w;
      return null === f2 && (f2 = b2.config.stroke.lineCap), (i2.indexOf("undefined") > -1 || i2.indexOf("NaN") > -1) && (i2 = "M 0 ".concat(b2.globals.gridHeight)), b2.globals.dom.Paper.path(i2).attr({ fill: n2, "fill-opacity": h2, stroke: s2, "stroke-opacity": d2, "stroke-linecap": f2, "stroke-width": o2, "stroke-dasharray": x2, class: g2 });
    } }, { key: "group", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e2 = this.w.globals.dom.Paper.group();
      return null !== t3 && e2.attr(t3), e2;
    } }, { key: "move", value: function(t3, e2) {
      var i2 = ["M", t3, e2].join(" ");
      return i2;
    } }, { key: "line", value: function(t3, e2) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a2 = null;
      return null === i2 ? a2 = [" L", t3, e2].join(" ") : "H" === i2 ? a2 = [" H", t3].join(" ") : "V" === i2 && (a2 = [" V", e2].join(" ")), a2;
    } }, { key: "curve", value: function(t3, e2, i2, a2, s2, r2) {
      var o2 = ["C", t3, e2, i2, a2, s2, r2].join(" ");
      return o2;
    } }, { key: "quadraticCurve", value: function(t3, e2, i2, a2) {
      return ["Q", t3, e2, i2, a2].join(" ");
    } }, { key: "arc", value: function(t3, e2, i2, a2, s2, r2, o2) {
      var n2 = "A";
      arguments.length > 7 && void 0 !== arguments[7] && arguments[7] && (n2 = "a");
      var l2 = [n2, t3, e2, i2, a2, s2, r2, o2].join(" ");
      return l2;
    } }, { key: "renderPaths", value: function(t3) {
      var e2, i2 = t3.j, a2 = t3.realIndex, s2 = t3.pathFrom, r2 = t3.pathTo, o2 = t3.stroke, n2 = t3.strokeWidth, l2 = t3.strokeLinecap, h2 = t3.fill, c2 = t3.animationDelay, d2 = t3.initialSpeed, u2 = t3.dataChangeSpeed, f2 = t3.className, p2 = t3.chartType, x2 = t3.shouldClipToGrid, b2 = void 0 === x2 || x2, v2 = t3.bindEventsOnPaths, m2 = void 0 === v2 || v2, k2 = t3.drawShadow, A2 = void 0 === k2 || k2, S2 = this.w, C2 = new w(this.ctx), L2 = new y(this.ctx), P2 = this.w.config.chart.animations.enabled, M2 = P2 && this.w.config.chart.animations.dynamicAnimation.enabled, I2 = !!(P2 && !S2.globals.resized || M2 && S2.globals.dataChanged && S2.globals.shouldAnimate);
      I2 ? e2 = s2 : (e2 = r2, S2.globals.animationEnded = true);
      var T2 = S2.config.stroke.dashArray, z2 = 0;
      z2 = Array.isArray(T2) ? T2[a2] : S2.config.stroke.dashArray;
      var X2 = this.drawPath({ d: e2, stroke: o2, strokeWidth: n2, fill: h2, fillOpacity: 1, classes: f2, strokeLinecap: l2, strokeDashArray: z2 });
      if (X2.attr("index", a2), b2 && ("bar" === p2 && !S2.globals.isHorizontal || S2.globals.comboCharts ? X2.attr({ "clip-path": "url(#gridRectBarMask".concat(S2.globals.cuid, ")") }) : X2.attr({ "clip-path": "url(#gridRectMask".concat(S2.globals.cuid, ")") })), "none" !== S2.config.states.normal.filter.type) C2.getDefaultFilter(X2, a2);
      else if (S2.config.chart.dropShadow.enabled && A2) {
        var E2 = S2.config.chart.dropShadow;
        C2.dropShadow(X2, E2, a2);
      }
      m2 && (X2.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, X2)), X2.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, X2)), X2.node.addEventListener("mousedown", this.pathMouseDown.bind(this, X2))), X2.attr({ pathTo: r2, pathFrom: s2 });
      var Y2 = { el: X2, j: i2, realIndex: a2, pathFrom: s2, pathTo: r2, fill: h2, strokeWidth: n2, delay: c2 };
      return !P2 || S2.globals.resized || S2.globals.dataChanged ? !S2.globals.resized && S2.globals.dataChanged || L2.showDelayedElements() : L2.animatePathsGradually(g(g({}, Y2), {}, { speed: d2 })), S2.globals.dataChanged && M2 && I2 && L2.animatePathsGradually(g(g({}, Y2), {}, { speed: u2 })), X2;
    } }, { key: "drawPattern", value: function(t3, e2, i2) {
      var a2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#a8a8a8", s2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      return this.w.globals.dom.Paper.pattern(e2, i2, function(r2) {
        "horizontalLines" === t3 ? r2.line(0, 0, i2, 0).stroke({ color: a2, width: s2 + 1 }) : "verticalLines" === t3 ? r2.line(0, 0, 0, e2).stroke({ color: a2, width: s2 + 1 }) : "slantedLines" === t3 ? r2.line(0, 0, e2, i2).stroke({ color: a2, width: s2 }) : "squares" === t3 ? r2.rect(e2, i2).fill("none").stroke({ color: a2, width: s2 }) : "circles" === t3 && r2.circle(e2).fill("none").stroke({ color: a2, width: s2 });
      });
    } }, { key: "drawGradient", value: function(t3, e2, i2, a2, s2) {
      var r2, o2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, n2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, l2 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, h2 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, c2 = this.w;
      e2.length < 9 && 0 === e2.indexOf("#") && (e2 = m.hexToRgba(e2, a2)), i2.length < 9 && 0 === i2.indexOf("#") && (i2 = m.hexToRgba(i2, s2));
      var d2 = 0, g2 = 1, u2 = 1, f2 = null;
      null !== n2 && (d2 = void 0 !== n2[0] ? n2[0] / 100 : 0, g2 = void 0 !== n2[1] ? n2[1] / 100 : 1, u2 = void 0 !== n2[2] ? n2[2] / 100 : 1, f2 = void 0 !== n2[3] ? n2[3] / 100 : null);
      var p2 = !("donut" !== c2.config.chart.type && "pie" !== c2.config.chart.type && "polarArea" !== c2.config.chart.type && "bubble" !== c2.config.chart.type);
      if (r2 = null === l2 || 0 === l2.length ? c2.globals.dom.Paper.gradient(p2 ? "radial" : "linear", function(t4) {
        t4.at(d2, e2, a2), t4.at(g2, i2, s2), t4.at(u2, i2, s2), null !== f2 && t4.at(f2, e2, a2);
      }) : c2.globals.dom.Paper.gradient(p2 ? "radial" : "linear", function(t4) {
        (Array.isArray(l2[h2]) ? l2[h2] : l2).forEach(function(e3) {
          t4.at(e3.offset / 100, e3.color, e3.opacity);
        });
      }), p2) {
        var x2 = c2.globals.gridWidth / 2, b2 = c2.globals.gridHeight / 2;
        "bubble" !== c2.config.chart.type ? r2.attr({ gradientUnits: "userSpaceOnUse", cx: x2, cy: b2, r: o2 }) : r2.attr({ cx: 0.5, cy: 0.5, r: 0.8, fx: 0.2, fy: 0.2 });
      } else "vertical" === t3 ? r2.from(0, 0).to(0, 1) : "diagonal" === t3 ? r2.from(0, 0).to(1, 1) : "horizontal" === t3 ? r2.from(0, 1).to(1, 1) : "diagonal2" === t3 && r2.from(1, 0).to(0, 1);
      return r2;
    } }, { key: "getTextBasedOnMaxWidth", value: function(t3) {
      var e2 = t3.text, i2 = t3.maxWidth, a2 = t3.fontSize, s2 = t3.fontFamily, r2 = this.getTextRects(e2, a2, s2), o2 = r2.width / e2.length, n2 = Math.floor(i2 / o2);
      return i2 < r2.width ? e2.slice(0, n2 - 3) + "..." : e2;
    } }, { key: "drawText", value: function(t3) {
      var e2 = this, i2 = t3.x, a2 = t3.y, s2 = t3.text, r2 = t3.textAnchor, o2 = t3.fontSize, n2 = t3.fontFamily, l2 = t3.fontWeight, h2 = t3.foreColor, c2 = t3.opacity, d2 = t3.maxWidth, u2 = t3.cssClass, f2 = void 0 === u2 ? "" : u2, p2 = t3.isPlainText, x2 = void 0 === p2 || p2, b2 = t3.dominantBaseline, v2 = void 0 === b2 ? "auto" : b2, m2 = this.w;
      void 0 === s2 && (s2 = "");
      var y2 = s2;
      r2 || (r2 = "start"), h2 && h2.length || (h2 = m2.config.chart.foreColor), n2 = n2 || m2.config.chart.fontFamily, l2 = l2 || "regular";
      var w2, k2 = { maxWidth: d2, fontSize: o2 = o2 || "11px", fontFamily: n2 };
      return Array.isArray(s2) ? w2 = m2.globals.dom.Paper.text(function(t4) {
        for (var i3 = 0; i3 < s2.length; i3++) y2 = s2[i3], d2 && (y2 = e2.getTextBasedOnMaxWidth(g({ text: s2[i3] }, k2))), 0 === i3 ? t4.tspan(y2) : t4.tspan(y2).newLine();
      }) : (d2 && (y2 = this.getTextBasedOnMaxWidth(g({ text: s2 }, k2))), w2 = x2 ? m2.globals.dom.Paper.plain(s2) : m2.globals.dom.Paper.text(function(t4) {
        return t4.tspan(y2);
      })), w2.attr({ x: i2, y: a2, "text-anchor": r2, "dominant-baseline": v2, "font-size": o2, "font-family": n2, "font-weight": l2, fill: h2, class: "apexcharts-text " + f2 }), w2.node.style.fontFamily = n2, w2.node.style.opacity = c2, w2;
    } }, { key: "getMarkerPath", value: function(t3, e2, i2, a2) {
      var s2 = "";
      switch (i2) {
        case "cross":
          s2 = "M ".concat(t3 - (a2 /= 1.4), " ").concat(e2 - a2, " L ").concat(t3 + a2, " ").concat(e2 + a2, "  M ").concat(t3 - a2, " ").concat(e2 + a2, " L ").concat(t3 + a2, " ").concat(e2 - a2);
          break;
        case "plus":
          s2 = "M ".concat(t3 - (a2 /= 1.12), " ").concat(e2, " L ").concat(t3 + a2, " ").concat(e2, "  M ").concat(t3, " ").concat(e2 - a2, " L ").concat(t3, " ").concat(e2 + a2);
          break;
        case "star":
        case "sparkle":
          var r2 = 5;
          a2 *= 1.15, "sparkle" === i2 && (a2 /= 1.1, r2 = 4);
          for (var o2 = Math.PI / r2, n2 = 0; n2 <= 2 * r2; n2++) {
            var l2 = n2 * o2, h2 = n2 % 2 == 0 ? a2 : a2 / 2;
            s2 += (0 === n2 ? "M" : "L") + (t3 + h2 * Math.sin(l2)) + "," + (e2 - h2 * Math.cos(l2));
          }
          s2 += "Z";
          break;
        case "triangle":
          s2 = "M ".concat(t3, " ").concat(e2 - a2, " \n             L ").concat(t3 + a2, " ").concat(e2 + a2, " \n             L ").concat(t3 - a2, " ").concat(e2 + a2, " \n             Z");
          break;
        case "square":
        case "rect":
          s2 = "M ".concat(t3 - (a2 /= 1.125), " ").concat(e2 - a2, " \n           L ").concat(t3 + a2, " ").concat(e2 - a2, " \n           L ").concat(t3 + a2, " ").concat(e2 + a2, " \n           L ").concat(t3 - a2, " ").concat(e2 + a2, " \n           Z");
          break;
        case "diamond":
          a2 *= 1.05, s2 = "M ".concat(t3, " ").concat(e2 - a2, " \n             L ").concat(t3 + a2, " ").concat(e2, " \n             L ").concat(t3, " ").concat(e2 + a2, " \n             L ").concat(t3 - a2, " ").concat(e2, " \n            Z");
          break;
        case "line":
          s2 = "M ".concat(t3 - (a2 /= 1.1), " ").concat(e2, " \n           L ").concat(t3 + a2, " ").concat(e2);
          break;
        default:
          a2 *= 2, s2 = "M ".concat(t3, ", ").concat(e2, " \n           m -").concat(a2 / 2, ", 0 \n           a ").concat(a2 / 2, ",").concat(a2 / 2, " 0 1,0 ").concat(a2, ",0 \n           a ").concat(a2 / 2, ",").concat(a2 / 2, " 0 1,0 -").concat(a2, ",0");
      }
      return s2;
    } }, { key: "drawMarkerShape", value: function(t3, e2, i2, a2, s2) {
      var r2 = this.drawPath({ d: this.getMarkerPath(t3, e2, i2, a2, s2), stroke: s2.pointStrokeColor, strokeDashArray: s2.pointStrokeDashArray, strokeWidth: s2.pointStrokeWidth, fill: s2.pointFillColor, fillOpacity: s2.pointFillOpacity, strokeOpacity: s2.pointStrokeOpacity });
      return r2.attr({ cx: t3, cy: e2, shape: s2.shape, class: s2.class ? s2.class : "" }), r2;
    } }, { key: "drawMarker", value: function(t3, e2, i2) {
      t3 = t3 || 0;
      var a2 = i2.pSize || 0;
      return m.isNumber(e2) || (a2 = 0, e2 = 0), this.drawMarkerShape(t3, e2, null == i2 ? void 0 : i2.shape, a2, g(g({}, i2), "line" === i2.shape || "plus" === i2.shape || "cross" === i2.shape ? { pointStrokeColor: i2.pointFillColor, pointStrokeOpacity: i2.pointFillOpacity } : {}));
    } }, { key: "pathMouseEnter", value: function(t3, e2) {
      var i2 = this.w, a2 = new w(this.ctx), s2 = parseInt(t3.node.getAttribute("index"), 10), r2 = parseInt(t3.node.getAttribute("j"), 10);
      if ("function" == typeof i2.config.chart.events.dataPointMouseEnter && i2.config.chart.events.dataPointMouseEnter(e2, this.ctx, { seriesIndex: s2, dataPointIndex: r2, w: i2 }), this.ctx.events.fireEvent("dataPointMouseEnter", [e2, this.ctx, { seriesIndex: s2, dataPointIndex: r2, w: i2 }]), ("none" === i2.config.states.active.filter.type || "true" !== t3.node.getAttribute("selected")) && "none" !== i2.config.states.hover.filter.type && !i2.globals.isTouchDevice) {
        var o2 = i2.config.states.hover.filter;
        a2.applyFilter(t3, s2, o2.type, o2.value);
      }
    } }, { key: "pathMouseLeave", value: function(t3, e2) {
      var i2 = this.w, a2 = new w(this.ctx), s2 = parseInt(t3.node.getAttribute("index"), 10), r2 = parseInt(t3.node.getAttribute("j"), 10);
      "function" == typeof i2.config.chart.events.dataPointMouseLeave && i2.config.chart.events.dataPointMouseLeave(e2, this.ctx, { seriesIndex: s2, dataPointIndex: r2, w: i2 }), this.ctx.events.fireEvent("dataPointMouseLeave", [e2, this.ctx, { seriesIndex: s2, dataPointIndex: r2, w: i2 }]), "none" !== i2.config.states.active.filter.type && "true" === t3.node.getAttribute("selected") || "none" !== i2.config.states.hover.filter.type && a2.getDefaultFilter(t3, s2);
    } }, { key: "pathMouseDown", value: function(t3, e2) {
      var i2 = this.w, a2 = new w(this.ctx), s2 = parseInt(t3.node.getAttribute("index"), 10), r2 = parseInt(t3.node.getAttribute("j"), 10), o2 = "false";
      if ("true" === t3.node.getAttribute("selected")) {
        if (t3.node.setAttribute("selected", "false"), i2.globals.selectedDataPoints[s2].indexOf(r2) > -1) {
          var n2 = i2.globals.selectedDataPoints[s2].indexOf(r2);
          i2.globals.selectedDataPoints[s2].splice(n2, 1);
        }
      } else {
        if (!i2.config.states.active.allowMultipleDataPointsSelection && i2.globals.selectedDataPoints.length > 0) {
          i2.globals.selectedDataPoints = [];
          var l2 = i2.globals.dom.Paper.select(".apexcharts-series path").members, h2 = i2.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members, c2 = function(t4) {
            Array.prototype.forEach.call(t4, function(t5) {
              t5.node.setAttribute("selected", "false"), a2.getDefaultFilter(t5, s2);
            });
          };
          c2(l2), c2(h2);
        }
        t3.node.setAttribute("selected", "true"), o2 = "true", void 0 === i2.globals.selectedDataPoints[s2] && (i2.globals.selectedDataPoints[s2] = []), i2.globals.selectedDataPoints[s2].push(r2);
      }
      if ("true" === o2) {
        var d2 = i2.config.states.active.filter;
        if ("none" !== d2) a2.applyFilter(t3, s2, d2.type, d2.value);
        else if ("none" !== i2.config.states.hover.filter && !i2.globals.isTouchDevice) {
          var g2 = i2.config.states.hover.filter;
          a2.applyFilter(t3, s2, g2.type, g2.value);
        }
      } else if ("none" !== i2.config.states.active.filter.type) if ("none" === i2.config.states.hover.filter.type || i2.globals.isTouchDevice) a2.getDefaultFilter(t3, s2);
      else {
        g2 = i2.config.states.hover.filter;
        a2.applyFilter(t3, s2, g2.type, g2.value);
      }
      "function" == typeof i2.config.chart.events.dataPointSelection && i2.config.chart.events.dataPointSelection(e2, this.ctx, { selectedDataPoints: i2.globals.selectedDataPoints, seriesIndex: s2, dataPointIndex: r2, w: i2 }), e2 && this.ctx.events.fireEvent("dataPointSelection", [e2, this.ctx, { selectedDataPoints: i2.globals.selectedDataPoints, seriesIndex: s2, dataPointIndex: r2, w: i2 }]);
    } }, { key: "rotateAroundCenter", value: function(t3) {
      var e2 = {};
      return t3 && "function" == typeof t3.getBBox && (e2 = t3.getBBox()), { x: e2.x + e2.width / 2, y: e2.y + e2.height / 2 };
    } }, { key: "getTextRects", value: function(t3, e2, i2, a2) {
      var s2 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], r2 = this.w, o2 = this.drawText({ x: -200, y: -200, text: t3, textAnchor: "start", fontSize: e2, fontFamily: i2, foreColor: "#fff", opacity: 0 });
      a2 && o2.attr("transform", a2), r2.globals.dom.Paper.add(o2);
      var n2 = o2.bbox();
      return s2 || (n2 = o2.node.getBoundingClientRect()), o2.remove(), { width: n2.width, height: n2.height };
    } }, { key: "placeTextWithEllipsis", value: function(t3, e2, i2) {
      if ("function" == typeof t3.getComputedTextLength && (t3.textContent = e2, e2.length > 0 && t3.getComputedTextLength() >= i2 / 1.1)) {
        for (var a2 = e2.length - 3; a2 > 0; a2 -= 3) if (t3.getSubStringLength(0, a2) <= i2 / 1.1) return void (t3.textContent = e2.substring(0, a2) + "...");
        t3.textContent = ".";
      }
    } }], [{ key: "setAttrs", value: function(t3, e2) {
      for (var i2 in e2) e2.hasOwnProperty(i2) && t3.setAttribute(i2, e2[i2]);
    } }]), t2;
  }(), A = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "getStackedSeriesTotals", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e2 = this.w, i2 = [];
      if (0 === e2.globals.series.length) return i2;
      for (var a2 = 0; a2 < e2.globals.series[e2.globals.maxValsInArrayIndex].length; a2++) {
        for (var s2 = 0, r2 = 0; r2 < e2.globals.series.length; r2++) void 0 !== e2.globals.series[r2][a2] && -1 === t3.indexOf(r2) && (s2 += e2.globals.series[r2][a2]);
        i2.push(s2);
      }
      return i2;
    } }, { key: "getSeriesTotalByIndex", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      return null === t3 ? this.w.config.series.reduce(function(t4, e2) {
        return t4 + e2;
      }, 0) : this.w.globals.series[t3].reduce(function(t4, e2) {
        return t4 + e2;
      }, 0);
    } }, { key: "getStackedSeriesTotalsByGroups", value: function() {
      var t3 = this, e2 = this.w, i2 = [];
      return e2.globals.seriesGroups.forEach(function(a2) {
        var s2 = [];
        e2.config.series.forEach(function(t4, i3) {
          a2.indexOf(e2.globals.seriesNames[i3]) > -1 && s2.push(i3);
        });
        var r2 = e2.globals.series.map(function(t4, e3) {
          return -1 === s2.indexOf(e3) ? e3 : -1;
        }).filter(function(t4) {
          return -1 !== t4;
        });
        i2.push(t3.getStackedSeriesTotals(r2));
      }), i2;
    } }, { key: "setSeriesYAxisMappings", value: function() {
      var t3 = this.w.globals, e2 = this.w.config, i2 = [], a2 = [], s2 = [], r2 = t3.series.length > e2.yaxis.length || e2.yaxis.some(function(t4) {
        return Array.isArray(t4.seriesName);
      });
      e2.series.forEach(function(t4, e3) {
        s2.push(e3), a2.push(null);
      }), e2.yaxis.forEach(function(t4, e3) {
        i2[e3] = [];
      });
      var o2 = [];
      e2.yaxis.forEach(function(t4, a3) {
        var n3 = false;
        if (t4.seriesName) {
          var l3 = [];
          Array.isArray(t4.seriesName) ? l3 = t4.seriesName : l3.push(t4.seriesName), l3.forEach(function(t5) {
            e2.series.forEach(function(e3, o3) {
              if (e3.name === t5) {
                var l4 = o3;
                a3 === o3 || r2 ? !r2 || s2.indexOf(o3) > -1 ? i2[a3].push([a3, o3]) : console.warn("Series '" + e3.name + "' referenced more than once in what looks like the new style. That is, when using either seriesName: [], or when there are more series than yaxes.") : (i2[o3].push([o3, a3]), l4 = a3), n3 = true, -1 !== (l4 = s2.indexOf(l4)) && s2.splice(l4, 1);
              }
            });
          });
        }
        n3 || o2.push(a3);
      }), i2 = i2.map(function(t4, e3) {
        var i3 = [];
        return t4.forEach(function(t5) {
          a2[t5[1]] = t5[0], i3.push(t5[1]);
        }), i3;
      });
      for (var n2 = e2.yaxis.length - 1, l2 = 0; l2 < o2.length && (n2 = o2[l2], i2[n2] = [], s2); l2++) {
        var h2 = s2[0];
        s2.shift(), i2[n2].push(h2), a2[h2] = n2;
      }
      s2.forEach(function(t4) {
        i2[n2].push(t4), a2[t4] = n2;
      }), t3.seriesYAxisMap = i2.map(function(t4) {
        return t4;
      }), t3.seriesYAxisReverseMap = a2.map(function(t4) {
        return t4;
      }), t3.seriesYAxisMap.forEach(function(t4, i3) {
        t4.forEach(function(t5) {
          e2.series[t5] && void 0 === e2.series[t5].group && (e2.series[t5].group = "apexcharts-axis-".concat(i3.toString()));
        });
      });
    } }, { key: "isSeriesNull", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      return 0 === (null === t3 ? this.w.config.series.filter(function(t4) {
        return null !== t4;
      }) : this.w.config.series[t3].data.filter(function(t4) {
        return null !== t4;
      })).length;
    } }, { key: "seriesHaveSameValues", value: function(t3) {
      return this.w.globals.series[t3].every(function(t4, e2, i2) {
        return t4 === i2[0];
      });
    } }, { key: "getCategoryLabels", value: function(t3) {
      var e2 = this.w, i2 = t3.slice();
      return e2.config.xaxis.convertedCatToNumeric && (i2 = t3.map(function(t4, i3) {
        return e2.config.xaxis.labels.formatter(t4 - e2.globals.minX + 1);
      })), i2;
    } }, { key: "getLargestSeries", value: function() {
      var t3 = this.w;
      t3.globals.maxValsInArrayIndex = t3.globals.series.map(function(t4) {
        return t4.length;
      }).indexOf(Math.max.apply(Math, t3.globals.series.map(function(t4) {
        return t4.length;
      })));
    } }, { key: "getLargestMarkerSize", value: function() {
      var t3 = this.w, e2 = 0;
      return t3.globals.markers.size.forEach(function(t4) {
        e2 = Math.max(e2, t4);
      }), t3.config.markers.discrete && t3.config.markers.discrete.length && t3.config.markers.discrete.forEach(function(t4) {
        e2 = Math.max(e2, t4.size);
      }), e2 > 0 && (t3.config.markers.hover.size > 0 ? e2 = t3.config.markers.hover.size : e2 += t3.config.markers.hover.sizeOffset), t3.globals.markers.largestSize = e2, e2;
    } }, { key: "getSeriesTotals", value: function() {
      var t3 = this.w;
      t3.globals.seriesTotals = t3.globals.series.map(function(t4, e2) {
        var i2 = 0;
        if (Array.isArray(t4)) for (var a2 = 0; a2 < t4.length; a2++) i2 += t4[a2];
        else i2 += t4;
        return i2;
      });
    } }, { key: "getSeriesTotalsXRange", value: function(t3, e2) {
      var i2 = this.w;
      return i2.globals.series.map(function(a2, s2) {
        for (var r2 = 0, o2 = 0; o2 < a2.length; o2++) i2.globals.seriesX[s2][o2] > t3 && i2.globals.seriesX[s2][o2] < e2 && (r2 += a2[o2]);
        return r2;
      });
    } }, { key: "getPercentSeries", value: function() {
      var t3 = this.w;
      t3.globals.seriesPercent = t3.globals.series.map(function(e2, i2) {
        var a2 = [];
        if (Array.isArray(e2)) for (var s2 = 0; s2 < e2.length; s2++) {
          var r2 = t3.globals.stackedSeriesTotals[s2], o2 = 0;
          r2 && (o2 = 100 * e2[s2] / r2), a2.push(o2);
        }
        else {
          var n2 = 100 * e2 / t3.globals.seriesTotals.reduce(function(t4, e3) {
            return t4 + e3;
          }, 0);
          a2.push(n2);
        }
        return a2;
      });
    } }, { key: "getCalculatedRatios", value: function() {
      var t3, e2, i2, a2 = this, s2 = this.w, r2 = s2.globals, o2 = [], n2 = 0, l2 = [], h2 = 0.1, c2 = 0;
      if (r2.yRange = [], r2.isMultipleYAxis) for (var d2 = 0; d2 < r2.minYArr.length; d2++) r2.yRange.push(Math.abs(r2.minYArr[d2] - r2.maxYArr[d2])), l2.push(0);
      else r2.yRange.push(Math.abs(r2.minY - r2.maxY));
      r2.xRange = Math.abs(r2.maxX - r2.minX), r2.zRange = Math.abs(r2.maxZ - r2.minZ);
      for (var g2 = 0; g2 < r2.yRange.length; g2++) o2.push(r2.yRange[g2] / r2.gridHeight);
      if (e2 = r2.xRange / r2.gridWidth, t3 = r2.yRange / r2.gridWidth, i2 = r2.xRange / r2.gridHeight, (n2 = r2.zRange / r2.gridHeight * 16) || (n2 = 1), r2.minY !== Number.MIN_VALUE && 0 !== Math.abs(r2.minY) && (r2.hasNegs = true), s2.globals.seriesYAxisReverseMap.length > 0) {
        var u2 = function(t4, e3) {
          var i3 = s2.config.yaxis[s2.globals.seriesYAxisReverseMap[e3]], r3 = t4 < 0 ? -1 : 1;
          return t4 = Math.abs(t4), i3.logarithmic && (t4 = a2.getBaseLog(i3.logBase, t4)), -r3 * t4 / o2[e3];
        };
        if (r2.isMultipleYAxis) {
          l2 = [];
          for (var f2 = 0; f2 < o2.length; f2++) l2.push(u2(r2.minYArr[f2], f2));
        } else (l2 = []).push(u2(r2.minY, 0)), r2.minY !== Number.MIN_VALUE && 0 !== Math.abs(r2.minY) && (h2 = -r2.minY / t3, c2 = r2.minX / e2);
      } else (l2 = []).push(0), h2 = 0, c2 = 0;
      return { yRatio: o2, invertedYRatio: t3, zRatio: n2, xRatio: e2, invertedXRatio: i2, baseLineInvertedY: h2, baseLineY: l2, baseLineX: c2 };
    } }, { key: "getLogSeries", value: function(t3) {
      var e2 = this, i2 = this.w;
      return i2.globals.seriesLog = t3.map(function(t4, a2) {
        var s2 = i2.globals.seriesYAxisReverseMap[a2];
        return i2.config.yaxis[s2] && i2.config.yaxis[s2].logarithmic ? t4.map(function(t5) {
          return null === t5 ? null : e2.getLogVal(i2.config.yaxis[s2].logBase, t5, a2);
        }) : t4;
      }), i2.globals.invalidLogScale ? t3 : i2.globals.seriesLog;
    } }, { key: "getBaseLog", value: function(t3, e2) {
      return Math.log(e2) / Math.log(t3);
    } }, { key: "getLogVal", value: function(t3, e2, i2) {
      if (e2 <= 0) return 0;
      var a2 = this.w, s2 = 0 === a2.globals.minYArr[i2] ? -1 : this.getBaseLog(t3, a2.globals.minYArr[i2]), r2 = (0 === a2.globals.maxYArr[i2] ? 0 : this.getBaseLog(t3, a2.globals.maxYArr[i2])) - s2;
      return e2 < 1 ? e2 / r2 : (this.getBaseLog(t3, e2) - s2) / r2;
    } }, { key: "getLogYRatios", value: function(t3) {
      var e2 = this, i2 = this.w, a2 = this.w.globals;
      return a2.yLogRatio = t3.slice(), a2.logYRange = a2.yRange.map(function(t4, s2) {
        var r2 = i2.globals.seriesYAxisReverseMap[s2];
        if (i2.config.yaxis[r2] && e2.w.config.yaxis[r2].logarithmic) {
          var o2, n2 = -Number.MAX_VALUE, l2 = Number.MIN_VALUE;
          return a2.seriesLog.forEach(function(t5, e3) {
            t5.forEach(function(t6) {
              i2.config.yaxis[e3] && i2.config.yaxis[e3].logarithmic && (n2 = Math.max(t6, n2), l2 = Math.min(t6, l2));
            });
          }), o2 = Math.pow(a2.yRange[s2], Math.abs(l2 - n2) / a2.yRange[s2]), a2.yLogRatio[s2] = o2 / a2.gridHeight, o2;
        }
      }), a2.invalidLogScale ? t3.slice() : a2.yLogRatio;
    } }, { key: "drawSeriesByGroup", value: function(t3, e2, i2, a2) {
      var s2 = this.w, r2 = [];
      return t3.series.length > 0 && e2.forEach(function(e3) {
        var o2 = [], n2 = [];
        t3.i.forEach(function(i3, a3) {
          s2.config.series[i3].group === e3 && (o2.push(t3.series[a3]), n2.push(i3));
        }), o2.length > 0 && r2.push(a2.draw(o2, i2, n2));
      }), r2;
    } }], [{ key: "checkComboSeries", value: function(t3, e2) {
      var i2 = false, a2 = 0, s2 = 0;
      return void 0 === e2 && (e2 = "line"), t3.length && void 0 !== t3[0].type && t3.forEach(function(t4) {
        "bar" !== t4.type && "column" !== t4.type && "candlestick" !== t4.type && "boxPlot" !== t4.type || a2++, void 0 !== t4.type && t4.type !== e2 && s2++;
      }), s2 > 0 && (i2 = true), { comboBarCount: a2, comboCharts: i2 };
    } }, { key: "extendArrayProps", value: function(t3, e2, i2) {
      var a2, s2, r2, o2, n2, l2;
      (null !== (a2 = e2) && void 0 !== a2 && a2.yaxis && (e2 = t3.extendYAxis(e2, i2)), null !== (s2 = e2) && void 0 !== s2 && s2.annotations) && (e2.annotations.yaxis && (e2 = t3.extendYAxisAnnotations(e2)), null !== (r2 = e2) && void 0 !== r2 && null !== (o2 = r2.annotations) && void 0 !== o2 && o2.xaxis && (e2 = t3.extendXAxisAnnotations(e2)), null !== (n2 = e2) && void 0 !== n2 && null !== (l2 = n2.annotations) && void 0 !== l2 && l2.points && (e2 = t3.extendPointAnnotations(e2)));
      return e2;
    } }]), t2;
  }(), S = function() {
    function t2(e2) {
      i(this, t2), this.w = e2.w, this.annoCtx = e2;
    }
    return s(t2, [{ key: "setOrientations", value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i2 = this.w;
      if ("vertical" === t3.label.orientation) {
        var a2 = null !== e2 ? e2 : 0, s2 = i2.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a2, "']"));
        if (null !== s2) {
          var r2 = s2.getBoundingClientRect();
          s2.setAttribute("x", parseFloat(s2.getAttribute("x")) - r2.height + 4);
          var o2 = "top" === t3.label.position ? r2.width : -r2.width;
          s2.setAttribute("y", parseFloat(s2.getAttribute("y")) + o2);
          var n2 = this.annoCtx.graphics.rotateAroundCenter(s2), l2 = n2.x, h2 = n2.y;
          s2.setAttribute("transform", "rotate(-90 ".concat(l2, " ").concat(h2, ")"));
        }
      }
    } }, { key: "addBackgroundToAnno", value: function(t3, e2) {
      var i2 = this.w;
      if (!t3 || !e2.label.text || !String(e2.label.text).trim()) return null;
      var a2 = i2.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(), s2 = t3.getBoundingClientRect(), r2 = e2.label.style.padding, o2 = r2.left, n2 = r2.right, l2 = r2.top, h2 = r2.bottom;
      if ("vertical" === e2.label.orientation) {
        var c2 = [o2, n2, l2, h2];
        l2 = c2[0], h2 = c2[1], o2 = c2[2], n2 = c2[3];
      }
      var d2 = s2.left - a2.left - o2, g2 = s2.top - a2.top - l2, u2 = this.annoCtx.graphics.drawRect(d2 - i2.globals.barPadForNumericAxis, g2, s2.width + o2 + n2, s2.height + l2 + h2, e2.label.borderRadius, e2.label.style.background, 1, e2.label.borderWidth, e2.label.borderColor, 0);
      return e2.id && u2.node.classList.add(e2.id), u2;
    } }, { key: "annotationsBackground", value: function() {
      var t3 = this, e2 = this.w, i2 = function(i3, a2, s2) {
        var r2 = e2.globals.dom.baseEl.querySelector(".apexcharts-".concat(s2, "-annotations .apexcharts-").concat(s2, "-annotation-label[rel='").concat(a2, "']"));
        if (r2) {
          var o2 = r2.parentNode, n2 = t3.addBackgroundToAnno(r2, i3);
          n2 && (o2.insertBefore(n2.node, r2), i3.label.mouseEnter && n2.node.addEventListener("mouseenter", i3.label.mouseEnter.bind(t3, i3)), i3.label.mouseLeave && n2.node.addEventListener("mouseleave", i3.label.mouseLeave.bind(t3, i3)), i3.label.click && n2.node.addEventListener("click", i3.label.click.bind(t3, i3)));
        }
      };
      e2.config.annotations.xaxis.forEach(function(t4, e3) {
        return i2(t4, e3, "xaxis");
      }), e2.config.annotations.yaxis.forEach(function(t4, e3) {
        return i2(t4, e3, "yaxis");
      }), e2.config.annotations.points.forEach(function(t4, e3) {
        return i2(t4, e3, "point");
      });
    } }, { key: "getY1Y2", value: function(t3, e2) {
      var i2, a2 = this.w, s2 = "y1" === t3 ? e2.y : e2.y2, r2 = false;
      if (this.annoCtx.invertAxis) {
        var o2 = a2.config.xaxis.convertedCatToNumeric ? a2.globals.categoryLabels : a2.globals.labels, n2 = o2.indexOf(s2), l2 = a2.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(".concat(n2 + 1, ")"));
        i2 = l2 ? parseFloat(l2.getAttribute("y")) : (a2.globals.gridHeight / o2.length - 1) * (n2 + 1) - a2.globals.barHeight, void 0 !== e2.seriesIndex && a2.globals.barHeight && (i2 -= a2.globals.barHeight / 2 * (a2.globals.series.length - 1) - a2.globals.barHeight * e2.seriesIndex);
      } else {
        var h2, c2 = a2.globals.seriesYAxisMap[e2.yAxisIndex][0], d2 = a2.config.yaxis[e2.yAxisIndex].logarithmic ? new A(this.annoCtx.ctx).getLogVal(a2.config.yaxis[e2.yAxisIndex].logBase, s2, c2) / a2.globals.yLogRatio[c2] : (s2 - a2.globals.minYArr[c2]) / (a2.globals.yRange[c2] / a2.globals.gridHeight);
        i2 = a2.globals.gridHeight - Math.min(Math.max(d2, 0), a2.globals.gridHeight), r2 = d2 > a2.globals.gridHeight || d2 < 0, !e2.marker || void 0 !== e2.y && null !== e2.y || (i2 = 0), null !== (h2 = a2.config.yaxis[e2.yAxisIndex]) && void 0 !== h2 && h2.reversed && (i2 = d2);
      }
      return "string" == typeof s2 && s2.includes("px") && (i2 = parseFloat(s2)), { yP: i2, clipped: r2 };
    } }, { key: "getX1X2", value: function(t3, e2) {
      var i2 = this.w, a2 = "x1" === t3 ? e2.x : e2.x2, s2 = this.annoCtx.invertAxis ? i2.globals.minY : i2.globals.minX, r2 = this.annoCtx.invertAxis ? i2.globals.maxY : i2.globals.maxX, o2 = this.annoCtx.invertAxis ? i2.globals.yRange[0] : i2.globals.xRange, n2 = false, l2 = this.annoCtx.inversedReversedAxis ? (r2 - a2) / (o2 / i2.globals.gridWidth) : (a2 - s2) / (o2 / i2.globals.gridWidth);
      return "category" !== i2.config.xaxis.type && !i2.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || i2.globals.dataFormatXNumeric || i2.config.chart.sparkline.enabled || (l2 = this.getStringX(a2)), "string" == typeof a2 && a2.includes("px") && (l2 = parseFloat(a2)), null == a2 && e2.marker && (l2 = i2.globals.gridWidth), void 0 !== e2.seriesIndex && i2.globals.barWidth && !this.annoCtx.invertAxis && (l2 -= i2.globals.barWidth / 2 * (i2.globals.series.length - 1) - i2.globals.barWidth * e2.seriesIndex), l2 > i2.globals.gridWidth ? (l2 = i2.globals.gridWidth, n2 = true) : l2 < 0 && (l2 = 0, n2 = true), { x: l2, clipped: n2 };
    } }, { key: "getStringX", value: function(t3) {
      var e2 = this.w, i2 = t3;
      e2.config.xaxis.convertedCatToNumeric && e2.globals.categoryLabels.length && (t3 = e2.globals.categoryLabels.indexOf(t3) + 1);
      var a2 = e2.globals.labels.map(function(t4) {
        return Array.isArray(t4) ? t4.join(" ") : t4;
      }).indexOf(t3), s2 = e2.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(".concat(a2 + 1, ")"));
      return s2 && (i2 = parseFloat(s2.getAttribute("x"))), i2;
    } }]), t2;
  }(), C = function() {
    function t2(e2) {
      i(this, t2), this.w = e2.w, this.annoCtx = e2, this.invertAxis = this.annoCtx.invertAxis, this.helpers = new S(this.annoCtx);
    }
    return s(t2, [{ key: "addXaxisAnnotation", value: function(t3, e2, i2) {
      var a2, s2 = this.w, r2 = this.helpers.getX1X2("x1", t3), o2 = r2.x, n2 = r2.clipped, l2 = true, h2 = t3.label.text, c2 = t3.strokeDashArray;
      if (m.isNumber(o2)) {
        if (null === t3.x2 || void 0 === t3.x2) {
          if (!n2) {
            var d2 = this.annoCtx.graphics.drawLine(o2 + t3.offsetX, 0 + t3.offsetY, o2 + t3.offsetX, s2.globals.gridHeight + t3.offsetY, t3.borderColor, c2, t3.borderWidth);
            e2.appendChild(d2.node), t3.id && d2.node.classList.add(t3.id);
          }
        } else {
          var g2 = this.helpers.getX1X2("x2", t3);
          if (a2 = g2.x, l2 = g2.clipped, !n2 || !l2) {
            if (a2 < o2) {
              var u2 = o2;
              o2 = a2, a2 = u2;
            }
            var f2 = this.annoCtx.graphics.drawRect(o2 + t3.offsetX, 0 + t3.offsetY, a2 - o2, s2.globals.gridHeight + t3.offsetY, 0, t3.fillColor, t3.opacity, 1, t3.borderColor, c2);
            f2.node.classList.add("apexcharts-annotation-rect"), f2.attr("clip-path", "url(#gridRectMask".concat(s2.globals.cuid, ")")), e2.appendChild(f2.node), t3.id && f2.node.classList.add(t3.id);
          }
        }
        if (!n2 || !l2) {
          var p2 = this.annoCtx.graphics.getTextRects(h2, parseFloat(t3.label.style.fontSize)), x2 = "top" === t3.label.position ? 4 : "center" === t3.label.position ? s2.globals.gridHeight / 2 + ("vertical" === t3.label.orientation ? p2.width / 2 : 0) : s2.globals.gridHeight, b2 = this.annoCtx.graphics.drawText({ x: o2 + t3.label.offsetX, y: x2 + t3.label.offsetY - ("vertical" === t3.label.orientation ? "top" === t3.label.position ? p2.width / 2 - 12 : -p2.width / 2 : 0), text: h2, textAnchor: t3.label.textAnchor, fontSize: t3.label.style.fontSize, fontFamily: t3.label.style.fontFamily, fontWeight: t3.label.style.fontWeight, foreColor: t3.label.style.color, cssClass: "apexcharts-xaxis-annotation-label ".concat(t3.label.style.cssClass, " ").concat(t3.id ? t3.id : "") });
          b2.attr({ rel: i2 }), e2.appendChild(b2.node), this.annoCtx.helpers.setOrientations(t3, i2);
        }
      }
    } }, { key: "drawXAxisAnnotations", value: function() {
      var t3 = this, e2 = this.w, i2 = this.annoCtx.graphics.group({ class: "apexcharts-xaxis-annotations" });
      return e2.config.annotations.xaxis.map(function(e3, a2) {
        t3.addXaxisAnnotation(e3, i2.node, a2);
      }), i2;
    } }]), t2;
  }(), L = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    }
    return s(t2, [{ key: "isValidDate", value: function(t3) {
      return "number" != typeof t3 && !isNaN(this.parseDate(t3));
    } }, { key: "getTimeStamp", value: function(t3) {
      return Date.parse(t3) ? this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t3).toISOString().substr(0, 25)).getTime() : new Date(t3).getTime() : t3;
    } }, { key: "getDate", value: function(t3) {
      return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t3).toUTCString()) : new Date(t3);
    } }, { key: "parseDate", value: function(t3) {
      var e2 = Date.parse(t3);
      if (!isNaN(e2)) return this.getTimeStamp(t3);
      var i2 = Date.parse(t3.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
      return i2 = this.getTimeStamp(i2);
    } }, { key: "parseDateWithTimezone", value: function(t3) {
      return Date.parse(t3.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
    } }, { key: "formatDate", value: function(t3, e2) {
      var i2 = this.w.globals.locale, a2 = this.w.config.xaxis.labels.datetimeUTC, s2 = ["\0"].concat(p(i2.months)), r2 = [""].concat(p(i2.shortMonths)), o2 = [""].concat(p(i2.days)), n2 = [""].concat(p(i2.shortDays));
      function l2(t4, e3) {
        var i3 = t4 + "";
        for (e3 = e3 || 2; i3.length < e3; ) i3 = "0" + i3;
        return i3;
      }
      var h2 = a2 ? t3.getUTCFullYear() : t3.getFullYear();
      e2 = (e2 = (e2 = e2.replace(/(^|[^\\])yyyy+/g, "$1" + h2)).replace(/(^|[^\\])yy/g, "$1" + h2.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + h2);
      var c2 = (a2 ? t3.getUTCMonth() : t3.getMonth()) + 1;
      e2 = (e2 = (e2 = (e2 = e2.replace(/(^|[^\\])MMMM+/g, "$1" + s2[0])).replace(/(^|[^\\])MMM/g, "$1" + r2[0])).replace(/(^|[^\\])MM/g, "$1" + l2(c2))).replace(/(^|[^\\])M/g, "$1" + c2);
      var d2 = a2 ? t3.getUTCDate() : t3.getDate();
      e2 = (e2 = (e2 = (e2 = e2.replace(/(^|[^\\])dddd+/g, "$1" + o2[0])).replace(/(^|[^\\])ddd/g, "$1" + n2[0])).replace(/(^|[^\\])dd/g, "$1" + l2(d2))).replace(/(^|[^\\])d/g, "$1" + d2);
      var g2 = a2 ? t3.getUTCHours() : t3.getHours(), u2 = g2 > 12 ? g2 - 12 : 0 === g2 ? 12 : g2;
      e2 = (e2 = (e2 = (e2 = e2.replace(/(^|[^\\])HH+/g, "$1" + l2(g2))).replace(/(^|[^\\])H/g, "$1" + g2)).replace(/(^|[^\\])hh+/g, "$1" + l2(u2))).replace(/(^|[^\\])h/g, "$1" + u2);
      var f2 = a2 ? t3.getUTCMinutes() : t3.getMinutes();
      e2 = (e2 = e2.replace(/(^|[^\\])mm+/g, "$1" + l2(f2))).replace(/(^|[^\\])m/g, "$1" + f2);
      var x2 = a2 ? t3.getUTCSeconds() : t3.getSeconds();
      e2 = (e2 = e2.replace(/(^|[^\\])ss+/g, "$1" + l2(x2))).replace(/(^|[^\\])s/g, "$1" + x2);
      var b2 = a2 ? t3.getUTCMilliseconds() : t3.getMilliseconds();
      e2 = e2.replace(/(^|[^\\])fff+/g, "$1" + l2(b2, 3)), b2 = Math.round(b2 / 10), e2 = e2.replace(/(^|[^\\])ff/g, "$1" + l2(b2)), b2 = Math.round(b2 / 10);
      var v2 = g2 < 12 ? "AM" : "PM";
      e2 = (e2 = (e2 = e2.replace(/(^|[^\\])f/g, "$1" + b2)).replace(/(^|[^\\])TT+/g, "$1" + v2)).replace(/(^|[^\\])T/g, "$1" + v2.charAt(0));
      var m2 = v2.toLowerCase();
      e2 = (e2 = e2.replace(/(^|[^\\])tt+/g, "$1" + m2)).replace(/(^|[^\\])t/g, "$1" + m2.charAt(0));
      var y2 = -t3.getTimezoneOffset(), w2 = a2 || !y2 ? "Z" : y2 > 0 ? "+" : "-";
      if (!a2) {
        var k2 = (y2 = Math.abs(y2)) % 60;
        w2 += l2(Math.floor(y2 / 60)) + ":" + l2(k2);
      }
      e2 = e2.replace(/(^|[^\\])K/g, "$1" + w2);
      var A2 = (a2 ? t3.getUTCDay() : t3.getDay()) + 1;
      return e2 = (e2 = (e2 = (e2 = (e2 = e2.replace(new RegExp(o2[0], "g"), o2[A2])).replace(new RegExp(n2[0], "g"), n2[A2])).replace(new RegExp(s2[0], "g"), s2[c2])).replace(new RegExp(r2[0], "g"), r2[c2])).replace(/\\(.)/g, "$1");
    } }, { key: "getTimeUnitsfromTimestamp", value: function(t3, e2, i2) {
      var a2 = this.w;
      void 0 !== a2.config.xaxis.min && (t3 = a2.config.xaxis.min), void 0 !== a2.config.xaxis.max && (e2 = a2.config.xaxis.max);
      var s2 = this.getDate(t3), r2 = this.getDate(e2), o2 = this.formatDate(s2, "yyyy MM dd HH mm ss fff").split(" "), n2 = this.formatDate(r2, "yyyy MM dd HH mm ss fff").split(" ");
      return { minMillisecond: parseInt(o2[6], 10), maxMillisecond: parseInt(n2[6], 10), minSecond: parseInt(o2[5], 10), maxSecond: parseInt(n2[5], 10), minMinute: parseInt(o2[4], 10), maxMinute: parseInt(n2[4], 10), minHour: parseInt(o2[3], 10), maxHour: parseInt(n2[3], 10), minDate: parseInt(o2[2], 10), maxDate: parseInt(n2[2], 10), minMonth: parseInt(o2[1], 10) - 1, maxMonth: parseInt(n2[1], 10) - 1, minYear: parseInt(o2[0], 10), maxYear: parseInt(n2[0], 10) };
    } }, { key: "isLeapYear", value: function(t3) {
      return t3 % 4 == 0 && t3 % 100 != 0 || t3 % 400 == 0;
    } }, { key: "calculcateLastDaysOfMonth", value: function(t3, e2, i2) {
      return this.determineDaysOfMonths(t3, e2) - i2;
    } }, { key: "determineDaysOfYear", value: function(t3) {
      var e2 = 365;
      return this.isLeapYear(t3) && (e2 = 366), e2;
    } }, { key: "determineRemainingDaysOfYear", value: function(t3, e2, i2) {
      var a2 = this.daysCntOfYear[e2] + i2;
      return e2 > 1 && this.isLeapYear() && a2++, a2;
    } }, { key: "determineDaysOfMonths", value: function(t3, e2) {
      var i2 = 30;
      switch (t3 = m.monthMod(t3), true) {
        case this.months30.indexOf(t3) > -1:
          2 === t3 && (i2 = this.isLeapYear(e2) ? 29 : 28);
          break;
        case this.months31.indexOf(t3) > -1:
        default:
          i2 = 31;
      }
      return i2;
    } }]), t2;
  }(), P = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w, this.tooltipKeyFormat = "dd MMM";
    }
    return s(t2, [{ key: "xLabelFormat", value: function(t3, e2, i2, a2) {
      var s2 = this.w;
      if ("datetime" === s2.config.xaxis.type && void 0 === s2.config.xaxis.labels.formatter && void 0 === s2.config.tooltip.x.formatter) {
        var r2 = new L(this.ctx);
        return r2.formatDate(r2.getDate(e2), s2.config.tooltip.x.format);
      }
      return t3(e2, i2, a2);
    } }, { key: "defaultGeneralFormatter", value: function(t3) {
      return Array.isArray(t3) ? t3.map(function(t4) {
        return t4;
      }) : t3;
    } }, { key: "defaultYFormatter", value: function(t3, e2, i2) {
      var a2 = this.w;
      if (m.isNumber(t3)) if (0 !== a2.globals.yValueDecimal) t3 = t3.toFixed(void 0 !== e2.decimalsInFloat ? e2.decimalsInFloat : a2.globals.yValueDecimal);
      else {
        var s2 = t3.toFixed(0);
        t3 = t3 == s2 ? s2 : t3.toFixed(1);
      }
      return t3;
    } }, { key: "setLabelFormatters", value: function() {
      var t3 = this, e2 = this.w;
      return e2.globals.xaxisTooltipFormatter = function(e3) {
        return t3.defaultGeneralFormatter(e3);
      }, e2.globals.ttKeyFormatter = function(e3) {
        return t3.defaultGeneralFormatter(e3);
      }, e2.globals.ttZFormatter = function(t4) {
        return t4;
      }, e2.globals.legendFormatter = function(e3) {
        return t3.defaultGeneralFormatter(e3);
      }, void 0 !== e2.config.xaxis.labels.formatter ? e2.globals.xLabelFormatter = e2.config.xaxis.labels.formatter : e2.globals.xLabelFormatter = function(t4) {
        if (m.isNumber(t4)) {
          if (!e2.config.xaxis.convertedCatToNumeric && "numeric" === e2.config.xaxis.type) {
            if (m.isNumber(e2.config.xaxis.decimalsInFloat)) return t4.toFixed(e2.config.xaxis.decimalsInFloat);
            var i2 = e2.globals.maxX - e2.globals.minX;
            return i2 > 0 && i2 < 100 ? t4.toFixed(1) : t4.toFixed(0);
          }
          if (e2.globals.isBarHorizontal) {
            if (e2.globals.maxY - e2.globals.minYArr < 4) return t4.toFixed(1);
          }
          return t4.toFixed(0);
        }
        return t4;
      }, "function" == typeof e2.config.tooltip.x.formatter ? e2.globals.ttKeyFormatter = e2.config.tooltip.x.formatter : e2.globals.ttKeyFormatter = e2.globals.xLabelFormatter, "function" == typeof e2.config.xaxis.tooltip.formatter && (e2.globals.xaxisTooltipFormatter = e2.config.xaxis.tooltip.formatter), (Array.isArray(e2.config.tooltip.y) || void 0 !== e2.config.tooltip.y.formatter) && (e2.globals.ttVal = e2.config.tooltip.y), void 0 !== e2.config.tooltip.z.formatter && (e2.globals.ttZFormatter = e2.config.tooltip.z.formatter), void 0 !== e2.config.legend.formatter && (e2.globals.legendFormatter = e2.config.legend.formatter), e2.config.yaxis.forEach(function(i2, a2) {
        void 0 !== i2.labels.formatter ? e2.globals.yLabelFormatters[a2] = i2.labels.formatter : e2.globals.yLabelFormatters[a2] = function(s2) {
          return e2.globals.xyCharts ? Array.isArray(s2) ? s2.map(function(e3) {
            return t3.defaultYFormatter(e3, i2, a2);
          }) : t3.defaultYFormatter(s2, i2, a2) : s2;
        };
      }), e2.globals;
    } }, { key: "heatmapLabelFormatters", value: function() {
      var t3 = this.w;
      if ("heatmap" === t3.config.chart.type) {
        t3.globals.yAxisScale[0].result = t3.globals.seriesNames.slice();
        var e2 = t3.globals.seriesNames.reduce(function(t4, e3) {
          return t4.length > e3.length ? t4 : e3;
        }, 0);
        t3.globals.yAxisScale[0].niceMax = e2, t3.globals.yAxisScale[0].niceMin = e2;
      }
    } }]), t2;
  }(), M = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "getLabel", value: function(t3, e2, i2, a2) {
      var s2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [], r2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "12px", o2 = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6], n2 = this.w, l2 = void 0 === t3[a2] ? "" : t3[a2], h2 = l2, c2 = n2.globals.xLabelFormatter, d2 = n2.config.xaxis.labels.formatter, g2 = false, u2 = new P(this.ctx), f2 = l2;
      o2 && (h2 = u2.xLabelFormat(c2, l2, f2, { i: a2, dateFormatter: new L(this.ctx).formatDate, w: n2 }), void 0 !== d2 && (h2 = d2(l2, t3[a2], { i: a2, dateFormatter: new L(this.ctx).formatDate, w: n2 })));
      var p2, x2;
      e2.length > 0 ? (p2 = e2[a2].unit, x2 = null, e2.forEach(function(t4) {
        "month" === t4.unit ? x2 = "year" : "day" === t4.unit ? x2 = "month" : "hour" === t4.unit ? x2 = "day" : "minute" === t4.unit && (x2 = "hour");
      }), g2 = x2 === p2, i2 = e2[a2].position, h2 = e2[a2].value) : "datetime" === n2.config.xaxis.type && void 0 === d2 && (h2 = ""), void 0 === h2 && (h2 = ""), h2 = Array.isArray(h2) ? h2 : h2.toString();
      var b2 = new k(this.ctx), v2 = {};
      v2 = n2.globals.rotateXLabels && o2 ? b2.getTextRects(h2, parseInt(r2, 10), null, "rotate(".concat(n2.config.xaxis.labels.rotate, " 0 0)"), false) : b2.getTextRects(h2, parseInt(r2, 10));
      var m2 = !n2.config.xaxis.labels.showDuplicates && this.ctx.timeScale;
      return !Array.isArray(h2) && ("NaN" === String(h2) || s2.indexOf(h2) >= 0 && m2) && (h2 = ""), { x: i2, text: h2, textRect: v2, isBold: g2 };
    } }, { key: "checkLabelBasedOnTickamount", value: function(t3, e2, i2) {
      var a2 = this.w, s2 = a2.config.xaxis.tickAmount;
      return "dataPoints" === s2 && (s2 = Math.round(a2.globals.gridWidth / 120)), s2 > i2 || t3 % Math.round(i2 / (s2 + 1)) == 0 || (e2.text = ""), e2;
    } }, { key: "checkForOverflowingLabels", value: function(t3, e2, i2, a2, s2) {
      var r2 = this.w;
      if (0 === t3 && r2.globals.skipFirstTimelinelabel && (e2.text = ""), t3 === i2 - 1 && r2.globals.skipLastTimelinelabel && (e2.text = ""), r2.config.xaxis.labels.hideOverlappingLabels && a2.length > 0) {
        var o2 = s2[s2.length - 1];
        e2.x < o2.textRect.width / (r2.globals.rotateXLabels ? Math.abs(r2.config.xaxis.labels.rotate) / 12 : 1.01) + o2.x && (e2.text = "");
      }
      return e2;
    } }, { key: "checkForReversedLabels", value: function(t3, e2) {
      var i2 = this.w;
      return i2.config.yaxis[t3] && i2.config.yaxis[t3].reversed && e2.reverse(), e2;
    } }, { key: "yAxisAllSeriesCollapsed", value: function(t3) {
      var e2 = this.w.globals;
      return !e2.seriesYAxisMap[t3].some(function(t4) {
        return -1 === e2.collapsedSeriesIndices.indexOf(t4);
      });
    } }, { key: "translateYAxisIndex", value: function(t3) {
      var e2 = this.w, i2 = e2.globals, a2 = e2.config.yaxis;
      return i2.series.length > a2.length || a2.some(function(t4) {
        return Array.isArray(t4.seriesName);
      }) ? t3 : i2.seriesYAxisReverseMap[t3];
    } }, { key: "isYAxisHidden", value: function(t3) {
      var e2 = this.w, i2 = e2.config.yaxis[t3];
      if (!i2.show || this.yAxisAllSeriesCollapsed(t3)) return true;
      if (!i2.showForNullSeries) {
        var a2 = e2.globals.seriesYAxisMap[t3], s2 = new A(this.ctx);
        return a2.every(function(t4) {
          return s2.isSeriesNull(t4);
        });
      }
      return false;
    } }, { key: "getYAxisForeColor", value: function(t3, e2) {
      var i2 = this.w;
      return Array.isArray(t3) && i2.globals.yAxisScale[e2] && this.ctx.theme.pushExtraColors(t3, i2.globals.yAxisScale[e2].result.length, false), t3;
    } }, { key: "drawYAxisTicks", value: function(t3, e2, i2, a2, s2, r2, o2) {
      var n2 = this.w, l2 = new k(this.ctx), h2 = n2.globals.translateY + n2.config.yaxis[s2].labels.offsetY;
      if (n2.globals.isBarHorizontal ? h2 = 0 : "heatmap" === n2.config.chart.type && (h2 += r2 / 2), a2.show && e2 > 0) {
        true === n2.config.yaxis[s2].opposite && (t3 += a2.width);
        for (var c2 = e2; c2 >= 0; c2--) {
          var d2 = l2.drawLine(t3 + i2.offsetX - a2.width + a2.offsetX, h2 + a2.offsetY, t3 + i2.offsetX + a2.offsetX, h2 + a2.offsetY, a2.color);
          o2.add(d2), h2 += r2;
        }
      }
    } }]), t2;
  }(), I = function() {
    function t2(e2) {
      i(this, t2), this.w = e2.w, this.annoCtx = e2, this.helpers = new S(this.annoCtx), this.axesUtils = new M(this.annoCtx);
    }
    return s(t2, [{ key: "addYaxisAnnotation", value: function(t3, e2, i2) {
      var a2, s2 = this.w, r2 = t3.strokeDashArray, o2 = this.helpers.getY1Y2("y1", t3), n2 = o2.yP, l2 = o2.clipped, h2 = true, c2 = false, d2 = t3.label.text;
      if (null === t3.y2 || void 0 === t3.y2) {
        if (!l2) {
          c2 = true;
          var g2 = this.annoCtx.graphics.drawLine(0 + t3.offsetX, n2 + t3.offsetY, this._getYAxisAnnotationWidth(t3), n2 + t3.offsetY, t3.borderColor, r2, t3.borderWidth);
          e2.appendChild(g2.node), t3.id && g2.node.classList.add(t3.id);
        }
      } else {
        if (a2 = (o2 = this.helpers.getY1Y2("y2", t3)).yP, h2 = o2.clipped, a2 > n2) {
          var u2 = n2;
          n2 = a2, a2 = u2;
        }
        if (!l2 || !h2) {
          c2 = true;
          var f2 = this.annoCtx.graphics.drawRect(0 + t3.offsetX, a2 + t3.offsetY, this._getYAxisAnnotationWidth(t3), n2 - a2, 0, t3.fillColor, t3.opacity, 1, t3.borderColor, r2);
          f2.node.classList.add("apexcharts-annotation-rect"), f2.attr("clip-path", "url(#gridRectMask".concat(s2.globals.cuid, ")")), e2.appendChild(f2.node), t3.id && f2.node.classList.add(t3.id);
        }
      }
      if (c2) {
        var p2 = "right" === t3.label.position ? s2.globals.gridWidth : "center" === t3.label.position ? s2.globals.gridWidth / 2 : 0, x2 = this.annoCtx.graphics.drawText({ x: p2 + t3.label.offsetX, y: (null != a2 ? a2 : n2) + t3.label.offsetY - 3, text: d2, textAnchor: t3.label.textAnchor, fontSize: t3.label.style.fontSize, fontFamily: t3.label.style.fontFamily, fontWeight: t3.label.style.fontWeight, foreColor: t3.label.style.color, cssClass: "apexcharts-yaxis-annotation-label ".concat(t3.label.style.cssClass, " ").concat(t3.id ? t3.id : "") });
        x2.attr({ rel: i2 }), e2.appendChild(x2.node);
      }
    } }, { key: "_getYAxisAnnotationWidth", value: function(t3) {
      var e2 = this.w;
      e2.globals.gridWidth;
      return (t3.width.indexOf("%") > -1 ? e2.globals.gridWidth * parseInt(t3.width, 10) / 100 : parseInt(t3.width, 10)) + t3.offsetX;
    } }, { key: "drawYAxisAnnotations", value: function() {
      var t3 = this, e2 = this.w, i2 = this.annoCtx.graphics.group({ class: "apexcharts-yaxis-annotations" });
      return e2.config.annotations.yaxis.forEach(function(e3, a2) {
        e3.yAxisIndex = t3.axesUtils.translateYAxisIndex(e3.yAxisIndex), t3.axesUtils.isYAxisHidden(e3.yAxisIndex) && t3.axesUtils.yAxisAllSeriesCollapsed(e3.yAxisIndex) || t3.addYaxisAnnotation(e3, i2.node, a2);
      }), i2;
    } }]), t2;
  }(), T = function() {
    function t2(e2) {
      i(this, t2), this.w = e2.w, this.annoCtx = e2, this.helpers = new S(this.annoCtx);
    }
    return s(t2, [{ key: "addPointAnnotation", value: function(t3, e2, i2) {
      if (!(this.w.globals.collapsedSeriesIndices.indexOf(t3.seriesIndex) > -1)) {
        var a2 = this.helpers.getX1X2("x1", t3), s2 = a2.x, r2 = a2.clipped, o2 = (a2 = this.helpers.getY1Y2("y1", t3)).yP, n2 = a2.clipped;
        if (m.isNumber(s2) && !n2 && !r2) {
          var l2 = { pSize: t3.marker.size, pointStrokeWidth: t3.marker.strokeWidth, pointFillColor: t3.marker.fillColor, pointStrokeColor: t3.marker.strokeColor, shape: t3.marker.shape, pRadius: t3.marker.radius, class: "apexcharts-point-annotation-marker ".concat(t3.marker.cssClass, " ").concat(t3.id ? t3.id : "") }, h2 = this.annoCtx.graphics.drawMarker(s2 + t3.marker.offsetX, o2 + t3.marker.offsetY, l2);
          e2.appendChild(h2.node);
          var c2 = t3.label.text ? t3.label.text : "", d2 = this.annoCtx.graphics.drawText({ x: s2 + t3.label.offsetX, y: o2 + t3.label.offsetY - t3.marker.size - parseFloat(t3.label.style.fontSize) / 1.6, text: c2, textAnchor: t3.label.textAnchor, fontSize: t3.label.style.fontSize, fontFamily: t3.label.style.fontFamily, fontWeight: t3.label.style.fontWeight, foreColor: t3.label.style.color, cssClass: "apexcharts-point-annotation-label ".concat(t3.label.style.cssClass, " ").concat(t3.id ? t3.id : "") });
          if (d2.attr({ rel: i2 }), e2.appendChild(d2.node), t3.customSVG.SVG) {
            var g2 = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations-custom-svg " + t3.customSVG.cssClass });
            g2.attr({ transform: "translate(".concat(s2 + t3.customSVG.offsetX, ", ").concat(o2 + t3.customSVG.offsetY, ")") }), g2.node.innerHTML = t3.customSVG.SVG, e2.appendChild(g2.node);
          }
          if (t3.image.path) {
            var u2 = t3.image.width ? t3.image.width : 20, f2 = t3.image.height ? t3.image.height : 20;
            h2 = this.annoCtx.addImage({ x: s2 + t3.image.offsetX - u2 / 2, y: o2 + t3.image.offsetY - f2 / 2, width: u2, height: f2, path: t3.image.path, appendTo: ".apexcharts-point-annotations" });
          }
          t3.mouseEnter && h2.node.addEventListener("mouseenter", t3.mouseEnter.bind(this, t3)), t3.mouseLeave && h2.node.addEventListener("mouseleave", t3.mouseLeave.bind(this, t3)), t3.click && h2.node.addEventListener("click", t3.click.bind(this, t3));
        }
      }
    } }, { key: "drawPointAnnotations", value: function() {
      var t3 = this, e2 = this.w, i2 = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations" });
      return e2.config.annotations.points.map(function(e3, a2) {
        t3.addPointAnnotation(e3, i2.node, a2);
      }), i2;
    } }]), t2;
  }();
  var z = { name: "en", options: { months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], toolbar: { exportToSVG: "Download SVG", exportToPNG: "Download PNG", exportToCSV: "Download CSV", menu: "Menu", selection: "Selection", selectionZoom: "Selection Zoom", zoomIn: "Zoom In", zoomOut: "Zoom Out", pan: "Panning", reset: "Reset Zoom" } } }, X = function() {
    function t2() {
      i(this, t2), this.yAxis = { show: true, showAlways: false, showForNullSeries: true, seriesName: void 0, opposite: false, reversed: false, logarithmic: false, logBase: 10, tickAmount: void 0, stepSize: void 0, forceNiceScale: false, max: void 0, min: void 0, floating: false, decimalsInFloat: void 0, labels: { show: true, showDuplicates: false, minWidth: 0, maxWidth: 160, offsetX: 0, offsetY: 0, align: void 0, rotate: 0, padding: 20, style: { colors: [], fontSize: "11px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, formatter: void 0 }, axisBorder: { show: false, color: "#e0e0e0", width: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: false, color: "#e0e0e0", width: 6, offsetX: 0, offsetY: 0 }, title: { text: void 0, rotate: -90, offsetY: 0, offsetX: 0, style: { color: void 0, fontSize: "11px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, tooltip: { enabled: false, offsetX: 0 }, crosshairs: { show: true, position: "front", stroke: { color: "#b6b6b6", width: 1, dashArray: 0 } } }, this.pointAnnotation = { id: void 0, x: 0, y: null, yAxisIndex: 0, seriesIndex: void 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, marker: { size: 4, fillColor: "#fff", strokeWidth: 2, strokeColor: "#333", shape: "circle", offsetX: 0, offsetY: 0, cssClass: "" }, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } }, customSVG: { SVG: void 0, cssClass: void 0, offsetX: 0, offsetY: 0 }, image: { path: void 0, width: 20, height: 20, offsetX: 0, offsetY: 0 } }, this.yAxisAnnotation = { id: void 0, y: 0, y2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, width: "100%", yAxisIndex: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "end", position: "right", offsetX: 0, offsetY: -3, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.xAxisAnnotation = { id: void 0, x: 0, x2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", orientation: "vertical", position: "top", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.text = { x: 0, y: 0, text: "", textAnchor: "start", foreColor: void 0, fontSize: "13px", fontFamily: void 0, fontWeight: 400, appendTo: ".apexcharts-annotations", backgroundColor: "transparent", borderColor: "#c2c2c2", borderRadius: 0, borderWidth: 0, paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2 };
    }
    return s(t2, [{ key: "init", value: function() {
      return { annotations: { yaxis: [this.yAxisAnnotation], xaxis: [this.xAxisAnnotation], points: [this.pointAnnotation], texts: [], images: [], shapes: [] }, chart: { animations: { enabled: true, easing: "easeinout", speed: 800, animateGradually: { delay: 150, enabled: true }, dynamicAnimation: { enabled: true, speed: 350 } }, background: "", locales: [z], defaultLocale: "en", dropShadow: { enabled: false, enabledOnSeries: void 0, top: 2, left: 2, blur: 4, color: "#000", opacity: 0.35 }, events: { animationEnd: void 0, beforeMount: void 0, mounted: void 0, updated: void 0, click: void 0, mouseMove: void 0, mouseLeave: void 0, xAxisLabelClick: void 0, legendClick: void 0, markerClick: void 0, selection: void 0, dataPointSelection: void 0, dataPointMouseEnter: void 0, dataPointMouseLeave: void 0, beforeZoom: void 0, beforeResetZoom: void 0, zoomed: void 0, scrolled: void 0, brushScrolled: void 0 }, foreColor: "#373d3f", fontFamily: "Helvetica, Arial, sans-serif", height: "auto", parentHeightOffset: 15, redrawOnParentResize: true, redrawOnWindowResize: true, id: void 0, group: void 0, nonce: void 0, offsetX: 0, offsetY: 0, selection: { enabled: false, type: "x", fill: { color: "#24292e", opacity: 0.1 }, stroke: { width: 1, color: "#24292e", opacity: 0.4, dashArray: 3 }, xaxis: { min: void 0, max: void 0 }, yaxis: { min: void 0, max: void 0 } }, sparkline: { enabled: false }, brush: { enabled: false, autoScaleYaxis: true, target: void 0, targets: void 0 }, stacked: false, stackOnlyBar: true, stackType: "normal", toolbar: { show: true, offsetX: 0, offsetY: 0, tools: { download: true, selection: true, zoom: true, zoomin: true, zoomout: true, pan: true, reset: true, customIcons: [] }, export: { csv: { filename: void 0, columnDelimiter: ",", headerCategory: "category", headerValue: "value", categoryFormatter: void 0, valueFormatter: void 0 }, png: { filename: void 0 }, svg: { filename: void 0 }, scale: void 0, width: void 0 }, autoSelected: "zoom" }, type: "line", width: "100%", zoom: { enabled: true, type: "x", autoScaleYaxis: false, allowMouseWheelZoom: true, zoomedArea: { fill: { color: "#90CAF9", opacity: 0.4 }, stroke: { color: "#0D47A1", opacity: 0.4, width: 1 } } } }, plotOptions: { line: { isSlopeChart: false }, area: { fillTo: "origin" }, bar: { horizontal: false, columnWidth: "70%", barHeight: "70%", distributed: false, borderRadius: 0, borderRadiusApplication: "around", borderRadiusWhenStacked: "last", rangeBarOverlap: true, rangeBarGroupRows: false, hideZeroBarsWhenGrouped: false, isDumbbell: false, dumbbellColors: void 0, isFunnel: false, isFunnel3d: true, colors: { ranges: [], backgroundBarColors: [], backgroundBarOpacity: 1, backgroundBarRadius: 0 }, dataLabels: { position: "top", maxItems: 100, hideOverflowingLabels: true, orientation: "horizontal", total: { enabled: false, formatter: void 0, offsetX: 0, offsetY: 0, style: { color: "#373d3f", fontSize: "12px", fontFamily: void 0, fontWeight: 600 } } } }, bubble: { zScaling: true, minBubbleRadius: void 0, maxBubbleRadius: void 0 }, candlestick: { colors: { upward: "#00B746", downward: "#EF403C" }, wick: { useFillColor: true } }, boxPlot: { colors: { upper: "#00E396", lower: "#008FFB" } }, heatmap: { radius: 2, enableShades: true, shadeIntensity: 0.5, reverseNegativeShade: false, distributed: false, useFillColorAsStroke: false, colorScale: { inverse: false, ranges: [], min: void 0, max: void 0 } }, treemap: { enableShades: true, shadeIntensity: 0.5, distributed: false, reverseNegativeShade: false, useFillColorAsStroke: false, borderRadius: 4, dataLabels: { format: "scale" }, colorScale: { inverse: false, ranges: [], min: void 0, max: void 0 } }, radialBar: { inverseOrder: false, startAngle: 0, endAngle: 360, offsetX: 0, offsetY: 0, hollow: { margin: 5, size: "50%", background: "transparent", image: void 0, imageWidth: 150, imageHeight: 150, imageOffsetX: 0, imageOffsetY: 0, imageClipped: true, position: "front", dropShadow: { enabled: false, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, track: { show: true, startAngle: void 0, endAngle: void 0, background: "#f2f2f2", strokeWidth: "97%", opacity: 1, margin: 5, dropShadow: { enabled: false, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, dataLabels: { show: true, name: { show: true, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: 0, formatter: function(t3) {
        return t3;
      } }, value: { show: true, fontSize: "14px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 16, formatter: function(t3) {
        return t3 + "%";
      } }, total: { show: false, label: "Total", fontSize: "16px", fontWeight: 600, fontFamily: void 0, color: void 0, formatter: function(t3) {
        return t3.globals.seriesTotals.reduce(function(t4, e2) {
          return t4 + e2;
        }, 0) / t3.globals.series.length + "%";
      } } }, barLabels: { enabled: false, offsetX: 0, offsetY: 0, useSeriesColors: true, fontFamily: void 0, fontWeight: 600, fontSize: "16px", formatter: function(t3) {
        return t3;
      }, onClick: void 0 } }, pie: { customScale: 1, offsetX: 0, offsetY: 0, startAngle: 0, endAngle: 360, expandOnClick: true, dataLabels: { offset: 0, minAngleToShowLabel: 10 }, donut: { size: "65%", background: "transparent", labels: { show: false, name: { show: true, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: -10, formatter: function(t3) {
        return t3;
      } }, value: { show: true, fontSize: "20px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 10, formatter: function(t3) {
        return t3;
      } }, total: { show: false, showAlways: false, label: "Total", fontSize: "16px", fontWeight: 400, fontFamily: void 0, color: void 0, formatter: function(t3) {
        return t3.globals.seriesTotals.reduce(function(t4, e2) {
          return t4 + e2;
        }, 0);
      } } } } }, polarArea: { rings: { strokeWidth: 1, strokeColor: "#e8e8e8" }, spokes: { strokeWidth: 1, connectorColors: "#e8e8e8" } }, radar: { size: void 0, offsetX: 0, offsetY: 0, polygons: { strokeWidth: 1, strokeColors: "#e8e8e8", connectorColors: "#e8e8e8", fill: { colors: void 0 } } } }, colors: void 0, dataLabels: { enabled: true, enabledOnSeries: void 0, formatter: function(t3) {
        return null !== t3 ? t3 : "";
      }, textAnchor: "middle", distributed: false, offsetX: 0, offsetY: 0, style: { fontSize: "12px", fontFamily: void 0, fontWeight: 600, colors: void 0 }, background: { enabled: true, foreColor: "#fff", borderRadius: 2, padding: 4, opacity: 0.9, borderWidth: 1, borderColor: "#fff", dropShadow: { enabled: false, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.45 } }, dropShadow: { enabled: false, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.45 } }, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: true, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] }, image: { src: [], width: void 0, height: void 0 }, pattern: { style: "squares", width: 6, height: 6, strokeWidth: 2 } }, forecastDataPoints: { count: 0, fillOpacity: 0.5, strokeWidth: void 0, dashArray: 4 }, grid: { show: true, borderColor: "#e0e0e0", strokeDashArray: 0, position: "back", xaxis: { lines: { show: false } }, yaxis: { lines: { show: true } }, row: { colors: void 0, opacity: 0.5 }, column: { colors: void 0, opacity: 0.5 }, padding: { top: 0, right: 10, bottom: 0, left: 12 } }, labels: [], legend: { show: true, showForSingleSeries: false, showForNullSeries: true, showForZeroSeries: true, floating: false, position: "bottom", horizontalAlign: "center", inverseOrder: false, fontSize: "12px", fontFamily: void 0, fontWeight: 400, width: void 0, height: void 0, formatter: void 0, tooltipHoverFormatter: void 0, offsetX: -20, offsetY: 4, customLegendItems: [], labels: { colors: void 0, useSeriesColors: false }, markers: { size: 7, fillColors: void 0, strokeWidth: 1, shape: void 0, offsetX: 0, offsetY: 0, customHTML: void 0, onClick: void 0 }, itemMargin: { horizontal: 5, vertical: 4 }, onItemClick: { toggleDataSeries: true }, onItemHover: { highlightDataSeries: true } }, markers: { discrete: [], size: 0, colors: void 0, strokeColors: "#fff", strokeWidth: 2, strokeOpacity: 0.9, strokeDashArray: 0, fillOpacity: 1, shape: "circle", offsetX: 0, offsetY: 0, showNullDataPoints: true, onClick: void 0, onDblClick: void 0, hover: { size: void 0, sizeOffset: 3 } }, noData: { text: void 0, align: "center", verticalAlign: "middle", offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "14px", fontFamily: void 0 } }, responsive: [], series: void 0, states: { normal: { filter: { type: "none", value: 0 } }, hover: { filter: { type: "lighten", value: 0.1 } }, active: { allowMultipleDataPointsSelection: false, filter: { type: "darken", value: 0.5 } } }, title: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 0, floating: false, style: { fontSize: "14px", fontWeight: 900, fontFamily: void 0, color: void 0 } }, subtitle: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 30, floating: false, style: { fontSize: "12px", fontWeight: 400, fontFamily: void 0, color: void 0 } }, stroke: { show: true, curve: "smooth", lineCap: "butt", width: 2, colors: void 0, dashArray: 0, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: true, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] } } }, tooltip: { enabled: true, enabledOnSeries: void 0, shared: true, hideEmptySeries: false, followCursor: false, intersect: false, inverseOrder: false, custom: void 0, fillSeriesColor: false, theme: "light", cssClass: "", style: { fontSize: "12px", fontFamily: void 0 }, onDatasetHover: { highlightDataSeries: false }, x: { show: true, format: "dd MMM", formatter: void 0 }, y: { formatter: void 0, title: { formatter: function(t3) {
        return t3 ? t3 + ": " : "";
      } } }, z: { formatter: void 0, title: "Size: " }, marker: { show: true, fillColors: void 0 }, items: { display: "flex" }, fixed: { enabled: false, position: "topRight", offsetX: 0, offsetY: 0 } }, xaxis: { type: "category", categories: [], convertedCatToNumeric: false, offsetX: 0, offsetY: 0, overwriteCategories: void 0, labels: { show: true, rotate: -45, rotateAlways: false, hideOverlappingLabels: true, trim: false, minHeight: void 0, maxHeight: 120, showDuplicates: true, style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, offsetX: 0, offsetY: 0, format: void 0, formatter: void 0, datetimeUTC: true, datetimeFormatter: { year: "yyyy", month: "MMM 'yy", day: "dd MMM", hour: "HH:mm", minute: "HH:mm:ss", second: "HH:mm:ss" } }, group: { groups: [], style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" } }, axisBorder: { show: true, color: "#e0e0e0", width: "100%", height: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: true, color: "#e0e0e0", height: 6, offsetX: 0, offsetY: 0 }, stepSize: void 0, tickAmount: void 0, tickPlacement: "on", min: void 0, max: void 0, range: void 0, floating: false, decimalsInFloat: void 0, position: "bottom", title: { text: void 0, offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "12px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, crosshairs: { show: true, width: 1, position: "back", opacity: 0.9, stroke: { color: "#b6b6b6", width: 1, dashArray: 3 }, fill: { type: "solid", color: "#B1B9C4", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 } }, dropShadow: { enabled: false, left: 0, top: 0, blur: 1, opacity: 0.4 } }, tooltip: { enabled: true, offsetY: 0, formatter: void 0, style: { fontSize: "12px", fontFamily: void 0 } } }, yaxis: this.yAxis, theme: { mode: "", palette: "palette1", monochrome: { enabled: false, color: "#008FFB", shadeTo: "light", shadeIntensity: 0.65 } } };
    } }]), t2;
  }(), E = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w, this.graphics = new k(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = true), this.helpers = new S(this), this.xAxisAnnotations = new C(this), this.yAxisAnnotations = new I(this), this.pointsAnnotations = new T(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = true), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints;
    }
    return s(t2, [{ key: "drawAxesAnnotations", value: function() {
      var t3 = this.w;
      if (t3.globals.axisCharts && t3.globals.dataPoints) {
        for (var e2 = this.yAxisAnnotations.drawYAxisAnnotations(), i2 = this.xAxisAnnotations.drawXAxisAnnotations(), a2 = this.pointsAnnotations.drawPointAnnotations(), s2 = t3.config.chart.animations.enabled, r2 = [e2, i2, a2], o2 = [i2.node, e2.node, a2.node], n2 = 0; n2 < 3; n2++) t3.globals.dom.elGraphical.add(r2[n2]), !s2 || t3.globals.resized || t3.globals.dataChanged || "scatter" !== t3.config.chart.type && "bubble" !== t3.config.chart.type && t3.globals.dataPoints > 1 && o2[n2].classList.add("apexcharts-element-hidden"), t3.globals.delayedElements.push({ el: o2[n2], index: 0 });
        this.helpers.annotationsBackground();
      }
    } }, { key: "drawImageAnnos", value: function() {
      var t3 = this;
      this.w.config.annotations.images.map(function(e2, i2) {
        t3.addImage(e2, i2);
      });
    } }, { key: "drawTextAnnos", value: function() {
      var t3 = this;
      this.w.config.annotations.texts.map(function(e2, i2) {
        t3.addText(e2, i2);
      });
    } }, { key: "addXaxisAnnotation", value: function(t3, e2, i2) {
      this.xAxisAnnotations.addXaxisAnnotation(t3, e2, i2);
    } }, { key: "addYaxisAnnotation", value: function(t3, e2, i2) {
      this.yAxisAnnotations.addYaxisAnnotation(t3, e2, i2);
    } }, { key: "addPointAnnotation", value: function(t3, e2, i2) {
      this.pointsAnnotations.addPointAnnotation(t3, e2, i2);
    } }, { key: "addText", value: function(t3, e2) {
      var i2 = t3.x, a2 = t3.y, s2 = t3.text, r2 = t3.textAnchor, o2 = t3.foreColor, n2 = t3.fontSize, l2 = t3.fontFamily, h2 = t3.fontWeight, c2 = t3.cssClass, d2 = t3.backgroundColor, g2 = t3.borderWidth, u2 = t3.strokeDashArray, f2 = t3.borderRadius, p2 = t3.borderColor, x2 = t3.appendTo, b2 = void 0 === x2 ? ".apexcharts-svg" : x2, v2 = t3.paddingLeft, m2 = void 0 === v2 ? 4 : v2, y2 = t3.paddingRight, w2 = void 0 === y2 ? 4 : y2, k2 = t3.paddingBottom, A2 = void 0 === k2 ? 2 : k2, S2 = t3.paddingTop, C2 = void 0 === S2 ? 2 : S2, L2 = this.w, P2 = this.graphics.drawText({ x: i2, y: a2, text: s2, textAnchor: r2 || "start", fontSize: n2 || "12px", fontWeight: h2 || "regular", fontFamily: l2 || L2.config.chart.fontFamily, foreColor: o2 || L2.config.chart.foreColor, cssClass: c2 }), M2 = L2.globals.dom.baseEl.querySelector(b2);
      M2 && M2.appendChild(P2.node);
      var I2 = P2.bbox();
      if (s2) {
        var T2 = this.graphics.drawRect(I2.x - m2, I2.y - C2, I2.width + m2 + w2, I2.height + A2 + C2, f2, d2 || "transparent", 1, g2, p2, u2);
        M2.insertBefore(T2.node, P2.node);
      }
    } }, { key: "addImage", value: function(t3, e2) {
      var i2 = this.w, a2 = t3.path, s2 = t3.x, r2 = void 0 === s2 ? 0 : s2, o2 = t3.y, n2 = void 0 === o2 ? 0 : o2, l2 = t3.width, h2 = void 0 === l2 ? 20 : l2, c2 = t3.height, d2 = void 0 === c2 ? 20 : c2, g2 = t3.appendTo, u2 = void 0 === g2 ? ".apexcharts-svg" : g2, f2 = i2.globals.dom.Paper.image(a2);
      f2.size(h2, d2).move(r2, n2);
      var p2 = i2.globals.dom.baseEl.querySelector(u2);
      return p2 && p2.appendChild(f2.node), f2;
    } }, { key: "addXaxisAnnotationExternal", value: function(t3, e2, i2) {
      return this.addAnnotationExternal({ params: t3, pushToMemory: e2, context: i2, type: "xaxis", contextMethod: i2.addXaxisAnnotation }), i2;
    } }, { key: "addYaxisAnnotationExternal", value: function(t3, e2, i2) {
      return this.addAnnotationExternal({ params: t3, pushToMemory: e2, context: i2, type: "yaxis", contextMethod: i2.addYaxisAnnotation }), i2;
    } }, { key: "addPointAnnotationExternal", value: function(t3, e2, i2) {
      return void 0 === this.invertAxis && (this.invertAxis = i2.w.globals.isBarHorizontal), this.addAnnotationExternal({ params: t3, pushToMemory: e2, context: i2, type: "point", contextMethod: i2.addPointAnnotation }), i2;
    } }, { key: "addAnnotationExternal", value: function(t3) {
      var e2 = t3.params, i2 = t3.pushToMemory, a2 = t3.context, s2 = t3.type, r2 = t3.contextMethod, o2 = a2, n2 = o2.w, l2 = n2.globals.dom.baseEl.querySelector(".apexcharts-".concat(s2, "-annotations")), h2 = l2.childNodes.length + 1, c2 = new X(), d2 = Object.assign({}, "xaxis" === s2 ? c2.xAxisAnnotation : "yaxis" === s2 ? c2.yAxisAnnotation : c2.pointAnnotation), g2 = m.extend(d2, e2);
      switch (s2) {
        case "xaxis":
          this.addXaxisAnnotation(g2, l2, h2);
          break;
        case "yaxis":
          this.addYaxisAnnotation(g2, l2, h2);
          break;
        case "point":
          this.addPointAnnotation(g2, l2, h2);
      }
      var u2 = n2.globals.dom.baseEl.querySelector(".apexcharts-".concat(s2, "-annotations .apexcharts-").concat(s2, "-annotation-label[rel='").concat(h2, "']")), f2 = this.helpers.addBackgroundToAnno(u2, g2);
      return f2 && l2.insertBefore(f2.node, u2), i2 && n2.globals.memory.methodsToExec.push({ context: o2, id: g2.id ? g2.id : m.randomId(), method: r2, label: "addAnnotation", params: e2 }), a2;
    } }, { key: "clearAnnotations", value: function(t3) {
      for (var e2 = t3.w, i2 = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations"), a2 = e2.globals.memory.methodsToExec.length - 1; a2 >= 0; a2--) "addText" !== e2.globals.memory.methodsToExec[a2].label && "addAnnotation" !== e2.globals.memory.methodsToExec[a2].label || e2.globals.memory.methodsToExec.splice(a2, 1);
      i2 = m.listToArray(i2), Array.prototype.forEach.call(i2, function(t4) {
        for (; t4.firstChild; ) t4.removeChild(t4.firstChild);
      });
    } }, { key: "removeAnnotation", value: function(t3, e2) {
      var i2 = t3.w, a2 = i2.globals.dom.baseEl.querySelectorAll(".".concat(e2));
      a2 && (i2.globals.memory.methodsToExec.map(function(t4, a3) {
        t4.id === e2 && i2.globals.memory.methodsToExec.splice(a3, 1);
      }), Array.prototype.forEach.call(a2, function(t4) {
        t4.parentElement.removeChild(t4);
      }));
    } }]), t2;
  }(), Y = function(t2) {
    var e2, i2 = t2.isTimeline, a2 = t2.ctx, s2 = t2.seriesIndex, r2 = t2.dataPointIndex, o2 = t2.y1, n2 = t2.y2, l2 = t2.w, h2 = l2.globals.seriesRangeStart[s2][r2], c2 = l2.globals.seriesRangeEnd[s2][r2], d2 = l2.globals.labels[r2], g2 = l2.config.series[s2].name ? l2.config.series[s2].name : "", u2 = l2.globals.ttKeyFormatter, f2 = l2.config.tooltip.y.title.formatter, p2 = { w: l2, seriesIndex: s2, dataPointIndex: r2, start: h2, end: c2 };
    ("function" == typeof f2 && (g2 = f2(g2, p2)), null !== (e2 = l2.config.series[s2].data[r2]) && void 0 !== e2 && e2.x && (d2 = l2.config.series[s2].data[r2].x), i2) || "datetime" === l2.config.xaxis.type && (d2 = new P(a2).xLabelFormat(l2.globals.ttKeyFormatter, d2, d2, { i: void 0, dateFormatter: new L(a2).formatDate, w: l2 }));
    "function" == typeof u2 && (d2 = u2(d2, p2)), Number.isFinite(o2) && Number.isFinite(n2) && (h2 = o2, c2 = n2);
    var x2 = "", b2 = "", v2 = l2.globals.colors[s2];
    if (void 0 === l2.config.tooltip.x.formatter) if ("datetime" === l2.config.xaxis.type) {
      var m2 = new L(a2);
      x2 = m2.formatDate(m2.getDate(h2), l2.config.tooltip.x.format), b2 = m2.formatDate(m2.getDate(c2), l2.config.tooltip.x.format);
    } else x2 = h2, b2 = c2;
    else x2 = l2.config.tooltip.x.formatter(h2), b2 = l2.config.tooltip.x.formatter(c2);
    return { start: h2, end: c2, startVal: x2, endVal: b2, ylabel: d2, color: v2, seriesName: g2 };
  }, R = function(t2) {
    var e2 = t2.color, i2 = t2.seriesName, a2 = t2.ylabel, s2 = t2.start, r2 = t2.end, o2 = t2.seriesIndex, n2 = t2.dataPointIndex, l2 = t2.ctx.tooltip.tooltipLabels.getFormatters(o2);
    s2 = l2.yLbFormatter(s2), r2 = l2.yLbFormatter(r2);
    var h2 = l2.yLbFormatter(t2.w.globals.series[o2][n2]), c2 = '<span class="value start-value">\n  '.concat(s2, '\n  </span> <span class="separator">-</span> <span class="value end-value">\n  ').concat(r2, "\n  </span>");
    return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + e2 + '">' + (i2 || "") + '</span></div><div> <span class="category">' + a2 + ": </span> " + (t2.w.globals.comboCharts ? "rangeArea" === t2.w.config.series[o2].type || "rangeBar" === t2.w.config.series[o2].type ? c2 : "<span>".concat(h2, "</span>") : c2) + " </div></div>";
  }, F = function() {
    function t2(e2) {
      i(this, t2), this.opts = e2;
    }
    return s(t2, [{ key: "hideYAxis", value: function() {
      this.opts.yaxis[0].show = false, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = false, this.opts.yaxis[0].axisTicks.show = false, this.opts.yaxis[0].floating = true;
    } }, { key: "line", value: function() {
      return { chart: { animations: { easing: "swing" } }, dataLabels: { enabled: false }, stroke: { width: 5, curve: "straight" }, markers: { size: 0, hover: { sizeOffset: 6 } }, xaxis: { crosshairs: { width: 1 } } };
    } }, { key: "sparkline", value: function(t3) {
      this.hideYAxis();
      return m.extend(t3, { grid: { show: false, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, legend: { show: false }, xaxis: { labels: { show: false }, tooltip: { enabled: false }, axisBorder: { show: false }, axisTicks: { show: false } }, chart: { toolbar: { show: false }, zoom: { enabled: false } }, dataLabels: { enabled: false } });
    } }, { key: "slope", value: function() {
      return this.hideYAxis(), { chart: { toolbar: { show: false }, zoom: { enabled: false } }, dataLabels: { enabled: true, formatter: function(t3, e2) {
        var i2 = e2.w.config.series[e2.seriesIndex].name;
        return null !== t3 ? i2 + ": " + t3 : "";
      }, background: { enabled: false }, offsetX: -5 }, grid: { xaxis: { lines: { show: true } }, yaxis: { lines: { show: false } } }, xaxis: { position: "top", labels: { style: { fontSize: 14, fontWeight: 900 } }, tooltip: { enabled: false }, crosshairs: { show: false } }, markers: { size: 8, hover: { sizeOffset: 1 } }, legend: { show: false }, tooltip: { shared: false, intersect: true, followCursor: true }, stroke: { width: 5, curve: "straight" } };
    } }, { key: "bar", value: function() {
      return { chart: { stacked: false, animations: { easing: "swing" } }, plotOptions: { bar: { dataLabels: { position: "center" } } }, dataLabels: { style: { colors: ["#fff"] }, background: { enabled: false } }, stroke: { width: 0, lineCap: "round" }, fill: { opacity: 0.85 }, legend: { markers: { shape: "square" } }, tooltip: { shared: false, intersect: true }, xaxis: { tooltip: { enabled: false }, tickPlacement: "between", crosshairs: { width: "barWidth", position: "back", fill: { type: "gradient" }, dropShadow: { enabled: false }, stroke: { width: 0 } } } };
    } }, { key: "funnel", value: function() {
      return this.hideYAxis(), g(g({}, this.bar()), {}, { chart: { animations: { easing: "linear", speed: 800, animateGradually: { enabled: false } } }, plotOptions: { bar: { horizontal: true, borderRadiusApplication: "around", borderRadius: 0, dataLabels: { position: "center" } } }, grid: { show: false, padding: { left: 0, right: 0 } }, xaxis: { labels: { show: false }, tooltip: { enabled: false }, axisBorder: { show: false }, axisTicks: { show: false } } });
    } }, { key: "candlestick", value: function() {
      var t3 = this;
      return { stroke: { width: 1, colors: ["#333"] }, fill: { opacity: 1 }, dataLabels: { enabled: false }, tooltip: { shared: true, custom: function(e2) {
        var i2 = e2.seriesIndex, a2 = e2.dataPointIndex, s2 = e2.w;
        return t3._getBoxTooltip(s2, i2, a2, ["Open", "High", "", "Low", "Close"], "candlestick");
      } }, states: { active: { filter: { type: "none" } } }, xaxis: { crosshairs: { width: 1 } } };
    } }, { key: "boxPlot", value: function() {
      var t3 = this;
      return { chart: { animations: { dynamicAnimation: { enabled: false } } }, stroke: { width: 1, colors: ["#24292e"] }, dataLabels: { enabled: false }, tooltip: { shared: true, custom: function(e2) {
        var i2 = e2.seriesIndex, a2 = e2.dataPointIndex, s2 = e2.w;
        return t3._getBoxTooltip(s2, i2, a2, ["Minimum", "Q1", "Median", "Q3", "Maximum"], "boxPlot");
      } }, markers: { size: 7, strokeWidth: 1, strokeColors: "#111" }, xaxis: { crosshairs: { width: 1 } } };
    } }, { key: "rangeBar", value: function() {
      return { chart: { animations: { animateGradually: false } }, stroke: { width: 0, lineCap: "square" }, plotOptions: { bar: { borderRadius: 0, dataLabels: { position: "center" } } }, dataLabels: { enabled: false, formatter: function(t3, e2) {
        e2.ctx;
        var i2 = e2.seriesIndex, a2 = e2.dataPointIndex, s2 = e2.w, r2 = function() {
          var t4 = s2.globals.seriesRangeStart[i2][a2];
          return s2.globals.seriesRangeEnd[i2][a2] - t4;
        };
        return s2.globals.comboCharts ? "rangeBar" === s2.config.series[i2].type || "rangeArea" === s2.config.series[i2].type ? r2() : t3 : r2();
      }, background: { enabled: false }, style: { colors: ["#fff"] } }, markers: { size: 10 }, tooltip: { shared: false, followCursor: true, custom: function(t3) {
        return t3.w.config.plotOptions && t3.w.config.plotOptions.bar && t3.w.config.plotOptions.bar.horizontal ? function(t4) {
          var e2 = Y(g(g({}, t4), {}, { isTimeline: true })), i2 = e2.color, a2 = e2.seriesName, s2 = e2.ylabel, r2 = e2.startVal, o2 = e2.endVal;
          return R(g(g({}, t4), {}, { color: i2, seriesName: a2, ylabel: s2, start: r2, end: o2 }));
        }(t3) : function(t4) {
          var e2 = Y(t4), i2 = e2.color, a2 = e2.seriesName, s2 = e2.ylabel, r2 = e2.start, o2 = e2.end;
          return R(g(g({}, t4), {}, { color: i2, seriesName: a2, ylabel: s2, start: r2, end: o2 }));
        }(t3);
      } }, xaxis: { tickPlacement: "between", tooltip: { enabled: false }, crosshairs: { stroke: { width: 0 } } } };
    } }, { key: "dumbbell", value: function(t3) {
      var e2, i2;
      return null !== (e2 = t3.plotOptions.bar) && void 0 !== e2 && e2.barHeight || (t3.plotOptions.bar.barHeight = 2), null !== (i2 = t3.plotOptions.bar) && void 0 !== i2 && i2.columnWidth || (t3.plotOptions.bar.columnWidth = 2), t3;
    } }, { key: "area", value: function() {
      return { stroke: { width: 4, fill: { type: "solid", gradient: { inverseColors: false, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } } }, fill: { type: "gradient", gradient: { inverseColors: false, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } }, markers: { size: 0, hover: { sizeOffset: 6 } }, tooltip: { followCursor: false } };
    } }, { key: "rangeArea", value: function() {
      return { stroke: { curve: "straight", width: 0 }, fill: { type: "solid", opacity: 0.6 }, markers: { size: 0 }, states: { hover: { filter: { type: "none" } }, active: { filter: { type: "none" } } }, tooltip: { intersect: false, shared: true, followCursor: true, custom: function(t3) {
        return function(t4) {
          var e2 = Y(t4), i2 = e2.color, a2 = e2.seriesName, s2 = e2.ylabel, r2 = e2.start, o2 = e2.end;
          return R(g(g({}, t4), {}, { color: i2, seriesName: a2, ylabel: s2, start: r2, end: o2 }));
        }(t3);
      } } };
    } }, { key: "brush", value: function(t3) {
      return m.extend(t3, { chart: { toolbar: { autoSelected: "selection", show: false }, zoom: { enabled: false } }, dataLabels: { enabled: false }, stroke: { width: 1 }, tooltip: { enabled: false }, xaxis: { tooltip: { enabled: false } } });
    } }, { key: "stacked100", value: function(t3) {
      t3.dataLabels = t3.dataLabels || {}, t3.dataLabels.formatter = t3.dataLabels.formatter || void 0;
      var e2 = t3.dataLabels.formatter;
      return t3.yaxis.forEach(function(e3, i2) {
        t3.yaxis[i2].min = 0, t3.yaxis[i2].max = 100;
      }), "bar" === t3.chart.type && (t3.dataLabels.formatter = e2 || function(t4) {
        return "number" == typeof t4 && t4 ? t4.toFixed(0) + "%" : t4;
      }), t3;
    } }, { key: "stackedBars", value: function() {
      var t3 = this.bar();
      return g(g({}, t3), {}, { plotOptions: g(g({}, t3.plotOptions), {}, { bar: g(g({}, t3.plotOptions.bar), {}, { borderRadiusApplication: "end", borderRadiusWhenStacked: "last" }) }) });
    } }, { key: "convertCatToNumeric", value: function(t3) {
      return t3.xaxis.convertedCatToNumeric = true, t3;
    } }, { key: "convertCatToNumericXaxis", value: function(t3, e2, i2) {
      t3.xaxis.type = "numeric", t3.xaxis.labels = t3.xaxis.labels || {}, t3.xaxis.labels.formatter = t3.xaxis.labels.formatter || function(t4) {
        return m.isNumber(t4) ? Math.floor(t4) : t4;
      };
      var a2 = t3.xaxis.labels.formatter, s2 = t3.xaxis.categories && t3.xaxis.categories.length ? t3.xaxis.categories : t3.labels;
      return i2 && i2.length && (s2 = i2.map(function(t4) {
        return Array.isArray(t4) ? t4 : String(t4);
      })), s2 && s2.length && (t3.xaxis.labels.formatter = function(t4) {
        return m.isNumber(t4) ? a2(s2[Math.floor(t4) - 1]) : a2(t4);
      }), t3.xaxis.categories = [], t3.labels = [], t3.xaxis.tickAmount = t3.xaxis.tickAmount || "dataPoints", t3;
    } }, { key: "bubble", value: function() {
      return { dataLabels: { style: { colors: ["#fff"] } }, tooltip: { shared: false, intersect: true }, xaxis: { crosshairs: { width: 0 } }, fill: { type: "solid", gradient: { shade: "light", inverse: true, shadeIntensity: 0.55, opacityFrom: 0.4, opacityTo: 0.8 } } };
    } }, { key: "scatter", value: function() {
      return { dataLabels: { enabled: false }, tooltip: { shared: false, intersect: true }, markers: { size: 6, strokeWidth: 1, hover: { sizeOffset: 2 } } };
    } }, { key: "heatmap", value: function() {
      return { chart: { stacked: false }, fill: { opacity: 1 }, dataLabels: { style: { colors: ["#fff"] } }, stroke: { colors: ["#fff"] }, tooltip: { followCursor: true, marker: { show: false }, x: { show: false } }, legend: { position: "top", markers: { shape: "square" } }, grid: { padding: { right: 20 } } };
    } }, { key: "treemap", value: function() {
      return { chart: { zoom: { enabled: false } }, dataLabels: { style: { fontSize: 14, fontWeight: 600, colors: ["#fff"] } }, stroke: { show: true, width: 2, colors: ["#fff"] }, legend: { show: false }, fill: { opacity: 1, gradient: { stops: [0, 100] } }, tooltip: { followCursor: true, x: { show: false } }, grid: { padding: { left: 0, right: 0 } }, xaxis: { crosshairs: { show: false }, tooltip: { enabled: false } } };
    } }, { key: "pie", value: function() {
      return { chart: { toolbar: { show: false } }, plotOptions: { pie: { donut: { labels: { show: false } } } }, dataLabels: { formatter: function(t3) {
        return t3.toFixed(1) + "%";
      }, style: { colors: ["#fff"] }, background: { enabled: false }, dropShadow: { enabled: true } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", stops: [0, 100] } }, tooltip: { theme: "dark", fillSeriesColor: true }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    } }, { key: "donut", value: function() {
      return { chart: { toolbar: { show: false } }, dataLabels: { formatter: function(t3) {
        return t3.toFixed(1) + "%";
      }, style: { colors: ["#fff"] }, background: { enabled: false }, dropShadow: { enabled: true } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", shadeIntensity: 0.35, stops: [80, 100], opacityFrom: 1, opacityTo: 1 } }, tooltip: { theme: "dark", fillSeriesColor: true }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    } }, { key: "polarArea", value: function() {
      return { chart: { toolbar: { show: false } }, dataLabels: { formatter: function(t3) {
        return t3.toFixed(1) + "%";
      }, enabled: false }, stroke: { show: true, width: 2 }, fill: { opacity: 0.7 }, tooltip: { theme: "dark", fillSeriesColor: true }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    } }, { key: "radar", value: function() {
      return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6, { dataLabels: { enabled: false, style: { fontSize: "11px" } }, stroke: { width: 2 }, markers: { size: 5, strokeWidth: 1, strokeOpacity: 1 }, fill: { opacity: 0.2 }, tooltip: { shared: false, intersect: true, followCursor: true }, grid: { show: false, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, xaxis: { labels: { formatter: function(t3) {
        return t3;
      }, style: { colors: ["#a8a8a8"], fontSize: "11px" } }, tooltip: { enabled: false }, crosshairs: { show: false } } };
    } }, { key: "radialBar", value: function() {
      return { chart: { animations: { dynamicAnimation: { enabled: true, speed: 800 } }, toolbar: { show: false } }, fill: { gradient: { shade: "dark", shadeIntensity: 0.4, inverseColors: false, type: "diagonal2", opacityFrom: 1, opacityTo: 1, stops: [70, 98, 100] } }, legend: { show: false, position: "right" }, tooltip: { enabled: false, fillSeriesColor: true }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    } }, { key: "_getBoxTooltip", value: function(t3, e2, i2, a2, s2) {
      var r2 = t3.globals.seriesCandleO[e2][i2], o2 = t3.globals.seriesCandleH[e2][i2], n2 = t3.globals.seriesCandleM[e2][i2], l2 = t3.globals.seriesCandleL[e2][i2], h2 = t3.globals.seriesCandleC[e2][i2];
      return t3.config.series[e2].type && t3.config.series[e2].type !== s2 ? '<div class="apexcharts-custom-tooltip">\n          '.concat(t3.config.series[e2].name ? t3.config.series[e2].name : "series-" + (e2 + 1), ": <strong>").concat(t3.globals.series[e2][i2], "</strong>\n        </div>") : '<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(t3.config.chart.type, '">') + "<div>".concat(a2[0], ': <span class="value">') + r2 + "</span></div>" + "<div>".concat(a2[1], ': <span class="value">') + o2 + "</span></div>" + (n2 ? "<div>".concat(a2[2], ': <span class="value">') + n2 + "</span></div>" : "") + "<div>".concat(a2[3], ': <span class="value">') + l2 + "</span></div>" + "<div>".concat(a2[4], ': <span class="value">') + h2 + "</span></div></div>";
    } }]), t2;
  }(), D = function() {
    function t2(e2) {
      i(this, t2), this.opts = e2;
    }
    return s(t2, [{ key: "init", value: function(t3) {
      var e2 = t3.responsiveOverride, i2 = this.opts, a2 = new X(), s2 = new F(i2);
      this.chartType = i2.chart.type, i2 = this.extendYAxis(i2), i2 = this.extendAnnotations(i2);
      var r2 = a2.init(), o2 = {};
      if (i2 && "object" === b(i2)) {
        var n2, l2, h2, c2, d2, g2, u2, f2, p2, x2, v2 = {};
        v2 = -1 !== ["line", "area", "bar", "candlestick", "boxPlot", "rangeBar", "rangeArea", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"].indexOf(i2.chart.type) ? s2[i2.chart.type]() : s2.line(), null !== (n2 = i2.plotOptions) && void 0 !== n2 && null !== (l2 = n2.bar) && void 0 !== l2 && l2.isFunnel && (v2 = s2.funnel()), i2.chart.stacked && "bar" === i2.chart.type && (v2 = s2.stackedBars()), null !== (h2 = i2.chart.brush) && void 0 !== h2 && h2.enabled && (v2 = s2.brush(v2)), null !== (c2 = i2.plotOptions) && void 0 !== c2 && null !== (d2 = c2.line) && void 0 !== d2 && d2.isSlopeChart && (v2 = s2.slope()), i2.chart.stacked && "100%" === i2.chart.stackType && (i2 = s2.stacked100(i2)), null !== (g2 = i2.plotOptions) && void 0 !== g2 && null !== (u2 = g2.bar) && void 0 !== u2 && u2.isDumbbell && (i2 = s2.dumbbell(i2)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(i2), i2.xaxis = i2.xaxis || window.Apex.xaxis || {}, e2 || (i2.xaxis.convertedCatToNumeric = false), (null !== (f2 = (i2 = this.checkForCatToNumericXAxis(this.chartType, v2, i2)).chart.sparkline) && void 0 !== f2 && f2.enabled || null !== (p2 = window.Apex.chart) && void 0 !== p2 && null !== (x2 = p2.sparkline) && void 0 !== x2 && x2.enabled) && (v2 = s2.sparkline(v2)), o2 = m.extend(r2, v2);
      }
      var y2 = m.extend(o2, window.Apex);
      return r2 = m.extend(y2, i2), r2 = this.handleUserInputErrors(r2);
    } }, { key: "checkForCatToNumericXAxis", value: function(t3, e2, i2) {
      var a2, s2, r2 = new F(i2), o2 = ("bar" === t3 || "boxPlot" === t3) && (null === (a2 = i2.plotOptions) || void 0 === a2 || null === (s2 = a2.bar) || void 0 === s2 ? void 0 : s2.horizontal), n2 = "pie" === t3 || "polarArea" === t3 || "donut" === t3 || "radar" === t3 || "radialBar" === t3 || "heatmap" === t3, l2 = "datetime" !== i2.xaxis.type && "numeric" !== i2.xaxis.type, h2 = i2.xaxis.tickPlacement ? i2.xaxis.tickPlacement : e2.xaxis && e2.xaxis.tickPlacement;
      return o2 || n2 || !l2 || "between" === h2 || (i2 = r2.convertCatToNumeric(i2)), i2;
    } }, { key: "extendYAxis", value: function(t3, e2) {
      var i2 = new X();
      (void 0 === t3.yaxis || !t3.yaxis || Array.isArray(t3.yaxis) && 0 === t3.yaxis.length) && (t3.yaxis = {}), t3.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (t3.yaxis = m.extend(t3.yaxis, window.Apex.yaxis)), t3.yaxis.constructor !== Array ? t3.yaxis = [m.extend(i2.yAxis, t3.yaxis)] : t3.yaxis = m.extendArray(t3.yaxis, i2.yAxis);
      var a2 = false;
      t3.yaxis.forEach(function(t4) {
        t4.logarithmic && (a2 = true);
      });
      var s2 = t3.series;
      return e2 && !s2 && (s2 = e2.config.series), a2 && s2.length !== t3.yaxis.length && s2.length && (t3.yaxis = s2.map(function(e3, a3) {
        if (e3.name || (s2[a3].name = "series-".concat(a3 + 1)), t3.yaxis[a3]) return t3.yaxis[a3].seriesName = s2[a3].name, t3.yaxis[a3];
        var r2 = m.extend(i2.yAxis, t3.yaxis[0]);
        return r2.show = false, r2;
      })), a2 && s2.length > 1 && s2.length !== t3.yaxis.length && console.warn("A multi-series logarithmic chart should have equal number of series and y-axes"), t3;
    } }, { key: "extendAnnotations", value: function(t3) {
      return void 0 === t3.annotations && (t3.annotations = {}, t3.annotations.yaxis = [], t3.annotations.xaxis = [], t3.annotations.points = []), t3 = this.extendYAxisAnnotations(t3), t3 = this.extendXAxisAnnotations(t3), t3 = this.extendPointAnnotations(t3);
    } }, { key: "extendYAxisAnnotations", value: function(t3) {
      var e2 = new X();
      return t3.annotations.yaxis = m.extendArray(void 0 !== t3.annotations.yaxis ? t3.annotations.yaxis : [], e2.yAxisAnnotation), t3;
    } }, { key: "extendXAxisAnnotations", value: function(t3) {
      var e2 = new X();
      return t3.annotations.xaxis = m.extendArray(void 0 !== t3.annotations.xaxis ? t3.annotations.xaxis : [], e2.xAxisAnnotation), t3;
    } }, { key: "extendPointAnnotations", value: function(t3) {
      var e2 = new X();
      return t3.annotations.points = m.extendArray(void 0 !== t3.annotations.points ? t3.annotations.points : [], e2.pointAnnotation), t3;
    } }, { key: "checkForDarkTheme", value: function(t3) {
      t3.theme && "dark" === t3.theme.mode && (t3.tooltip || (t3.tooltip = {}), "light" !== t3.tooltip.theme && (t3.tooltip.theme = "dark"), t3.chart.foreColor || (t3.chart.foreColor = "#f6f7f8"), t3.theme.palette || (t3.theme.palette = "palette4"));
    } }, { key: "handleUserInputErrors", value: function(t3) {
      var e2 = t3;
      if (e2.tooltip.shared && e2.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
      if ("bar" === e2.chart.type && e2.plotOptions.bar.horizontal) {
        if (e2.yaxis.length > 1) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
        e2.yaxis[0].reversed && (e2.yaxis[0].opposite = true), e2.xaxis.tooltip.enabled = false, e2.yaxis[0].tooltip.enabled = false, e2.chart.zoom.enabled = false;
      }
      return "bar" !== e2.chart.type && "rangeBar" !== e2.chart.type || e2.tooltip.shared && "barWidth" === e2.xaxis.crosshairs.width && e2.series.length > 1 && (e2.xaxis.crosshairs.width = "tickWidth"), "candlestick" !== e2.chart.type && "boxPlot" !== e2.chart.type || e2.yaxis[0].reversed && (console.warn("Reversed y-axis in ".concat(e2.chart.type, " chart is not supported.")), e2.yaxis[0].reversed = false), e2;
    } }]), t2;
  }(), H = function() {
    function t2() {
      i(this, t2);
    }
    return s(t2, [{ key: "initGlobalVars", value: function(t3) {
      t3.series = [], t3.seriesCandleO = [], t3.seriesCandleH = [], t3.seriesCandleM = [], t3.seriesCandleL = [], t3.seriesCandleC = [], t3.seriesRangeStart = [], t3.seriesRangeEnd = [], t3.seriesRange = [], t3.seriesPercent = [], t3.seriesGoals = [], t3.seriesX = [], t3.seriesZ = [], t3.seriesNames = [], t3.seriesTotals = [], t3.seriesLog = [], t3.seriesColors = [], t3.stackedSeriesTotals = [], t3.seriesXvalues = [], t3.seriesYvalues = [], t3.labels = [], t3.hasXaxisGroups = false, t3.groups = [], t3.barGroups = [], t3.lineGroups = [], t3.areaGroups = [], t3.hasSeriesGroups = false, t3.seriesGroups = [], t3.categoryLabels = [], t3.timescaleLabels = [], t3.noLabelsProvided = false, t3.resizeTimer = null, t3.selectionResizeTimer = null, t3.lastWheelExecution = 0, t3.delayedElements = [], t3.pointsArray = [], t3.dataLabelsRects = [], t3.isXNumeric = false, t3.skipLastTimelinelabel = false, t3.skipFirstTimelinelabel = false, t3.isDataXYZ = false, t3.isMultiLineX = false, t3.isMultipleYAxis = false, t3.maxY = -Number.MAX_VALUE, t3.minY = Number.MIN_VALUE, t3.minYArr = [], t3.maxYArr = [], t3.maxX = -Number.MAX_VALUE, t3.minX = Number.MAX_VALUE, t3.initialMaxX = -Number.MAX_VALUE, t3.initialMinX = Number.MAX_VALUE, t3.maxDate = 0, t3.minDate = Number.MAX_VALUE, t3.minZ = Number.MAX_VALUE, t3.maxZ = -Number.MAX_VALUE, t3.minXDiff = Number.MAX_VALUE, t3.yAxisScale = [], t3.xAxisScale = null, t3.xAxisTicksPositions = [], t3.yLabelsCoords = [], t3.yTitleCoords = [], t3.barPadForNumericAxis = 0, t3.padHorizontal = 0, t3.xRange = 0, t3.yRange = [], t3.zRange = 0, t3.dataPoints = 0, t3.xTickAmount = 0, t3.multiAxisTickAmount = 0;
    } }, { key: "globalVars", value: function(t3) {
      return { chartID: null, cuid: null, events: { beforeMount: [], mounted: [], updated: [], clicked: [], selection: [], dataPointSelection: [], zoomed: [], scrolled: [] }, colors: [], clientX: null, clientY: null, fill: { colors: [] }, stroke: { colors: [] }, dataLabels: { style: { colors: [] } }, radarPolygons: { fill: { colors: [] } }, markers: { colors: [], size: t3.markers.size, largestSize: 0 }, animationEnded: false, isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints, isDirty: false, isExecCalled: false, initialConfig: null, initialSeries: [], lastXAxis: [], lastYAxis: [], columnSeries: null, labels: [], timescaleLabels: [], noLabelsProvided: false, allSeriesCollapsed: false, collapsedSeries: [], collapsedSeriesIndices: [], ancillaryCollapsedSeries: [], ancillaryCollapsedSeriesIndices: [], risingSeries: [], dataFormatXNumeric: false, capturedSeriesIndex: -1, capturedDataPointIndex: -1, selectedDataPoints: [], invalidLogScale: false, ignoreYAxisIndexes: [], maxValsInArrayIndex: 0, radialSize: 0, selection: void 0, zoomEnabled: "zoom" === t3.chart.toolbar.autoSelected && t3.chart.toolbar.tools.zoom && t3.chart.zoom.enabled, panEnabled: "pan" === t3.chart.toolbar.autoSelected && t3.chart.toolbar.tools.pan, selectionEnabled: "selection" === t3.chart.toolbar.autoSelected && t3.chart.toolbar.tools.selection, yaxis: null, mousedown: false, lastClientPosition: {}, visibleXRange: void 0, yValueDecimal: 0, total: 0, SVGNS: "http://www.w3.org/2000/svg", svgWidth: 0, svgHeight: 0, noData: false, locale: {}, dom: {}, memory: { methodsToExec: [] }, shouldAnimate: true, skipLastTimelinelabel: false, skipFirstTimelinelabel: false, delayedElements: [], axisCharts: true, isDataXYZ: false, isSlopeChart: t3.plotOptions.line.isSlopeChart, resized: false, resizeTimer: null, comboCharts: false, dataChanged: false, previousPaths: [], allSeriesHasEqualX: true, pointsArray: [], dataLabelsRects: [], lastDrawnDataLabelsIndexes: [], hasNullValues: false, easing: null, zoomed: false, gridWidth: 0, gridHeight: 0, rotateXLabels: false, defaultLabels: false, xLabelFormatter: void 0, yLabelFormatters: [], xaxisTooltipFormatter: void 0, ttKeyFormatter: void 0, ttVal: void 0, ttZFormatter: void 0, LINE_HEIGHT_RATIO: 1.618, xAxisLabelsHeight: 0, xAxisGroupLabelsHeight: 0, xAxisLabelsWidth: 0, yAxisLabelsWidth: 0, scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, translateYAxisX: [], yAxisWidths: [], translateXAxisY: 0, translateXAxisX: 0, tooltip: null, niceScaleAllowedMagMsd: [[1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10], [1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10]], niceScaleDefaultTicks: [1, 2, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 12, 12, 12, 12, 12, 12, 12, 12, 12, 24], seriesYAxisMap: [], seriesYAxisReverseMap: [] };
    } }, { key: "init", value: function(t3) {
      var e2 = this.globalVars(t3);
      return this.initGlobalVars(e2), e2.initialConfig = m.extend({}, t3), e2.initialSeries = m.clone(t3.series), e2.lastXAxis = m.clone(e2.initialConfig.xaxis), e2.lastYAxis = m.clone(e2.initialConfig.yaxis), e2;
    } }]), t2;
  }(), O = function() {
    function t2(e2) {
      i(this, t2), this.opts = e2;
    }
    return s(t2, [{ key: "init", value: function() {
      var t3 = new D(this.opts).init({ responsiveOverride: false });
      return { config: t3, globals: new H().init(t3) };
    } }]), t2;
  }(), N = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w, this.opts = null, this.seriesIndex = 0, this.patternIDs = [];
    }
    return s(t2, [{ key: "clippedImgArea", value: function(t3) {
      var e2 = this.w, i2 = e2.config, a2 = parseInt(e2.globals.gridWidth, 10), s2 = parseInt(e2.globals.gridHeight, 10), r2 = a2 > s2 ? a2 : s2, o2 = t3.image, n2 = 0, l2 = 0;
      void 0 === t3.width && void 0 === t3.height ? void 0 !== i2.fill.image.width && void 0 !== i2.fill.image.height ? (n2 = i2.fill.image.width + 1, l2 = i2.fill.image.height) : (n2 = r2 + 1, l2 = r2) : (n2 = t3.width, l2 = t3.height);
      var h2 = document.createElementNS(e2.globals.SVGNS, "pattern");
      k.setAttrs(h2, { id: t3.patternID, patternUnits: t3.patternUnits ? t3.patternUnits : "userSpaceOnUse", width: n2 + "px", height: l2 + "px" });
      var c2 = document.createElementNS(e2.globals.SVGNS, "image");
      h2.appendChild(c2), c2.setAttributeNS(window.SVG.xlink, "href", o2), k.setAttrs(c2, { x: 0, y: 0, preserveAspectRatio: "none", width: n2 + "px", height: l2 + "px" }), c2.style.opacity = t3.opacity, e2.globals.dom.elDefs.node.appendChild(h2);
    } }, { key: "getSeriesIndex", value: function(t3) {
      var e2 = this.w, i2 = e2.config.chart.type;
      return ("bar" === i2 || "rangeBar" === i2) && e2.config.plotOptions.bar.distributed || "heatmap" === i2 || "treemap" === i2 ? this.seriesIndex = t3.seriesNumber : this.seriesIndex = t3.seriesNumber % e2.globals.series.length, this.seriesIndex;
    } }, { key: "fillPath", value: function(t3) {
      var e2 = this.w;
      this.opts = t3;
      var i2, a2, s2, r2 = this.w.config;
      this.seriesIndex = this.getSeriesIndex(t3);
      var o2 = this.getFillColors()[this.seriesIndex];
      void 0 !== e2.globals.seriesColors[this.seriesIndex] && (o2 = e2.globals.seriesColors[this.seriesIndex]), "function" == typeof o2 && (o2 = o2({ seriesIndex: this.seriesIndex, dataPointIndex: t3.dataPointIndex, value: t3.value, w: e2 }));
      var n2 = t3.fillType ? t3.fillType : this.getFillType(this.seriesIndex), l2 = Array.isArray(r2.fill.opacity) ? r2.fill.opacity[this.seriesIndex] : r2.fill.opacity;
      t3.color && (o2 = t3.color), o2 || (o2 = "#fff", console.warn("undefined color - ApexCharts"));
      var h2 = o2;
      if (-1 === o2.indexOf("rgb") ? o2.length < 9 && (h2 = m.hexToRgba(o2, l2)) : o2.indexOf("rgba") > -1 && (l2 = m.getOpacityFromRGBA(o2)), t3.opacity && (l2 = t3.opacity), "pattern" === n2 && (a2 = this.handlePatternFill({ fillConfig: t3.fillConfig, patternFill: a2, fillColor: o2, fillOpacity: l2, defaultColor: h2 })), "gradient" === n2 && (s2 = this.handleGradientFill({ fillConfig: t3.fillConfig, fillColor: o2, fillOpacity: l2, i: this.seriesIndex })), "image" === n2) {
        var c2 = r2.fill.image.src, d2 = t3.patternID ? t3.patternID : "", g2 = "pattern".concat(e2.globals.cuid).concat(t3.seriesNumber + 1).concat(d2);
        -1 === this.patternIDs.indexOf(g2) && (this.clippedImgArea({ opacity: l2, image: Array.isArray(c2) ? t3.seriesNumber < c2.length ? c2[t3.seriesNumber] : c2[0] : c2, width: t3.width ? t3.width : void 0, height: t3.height ? t3.height : void 0, patternUnits: t3.patternUnits, patternID: g2 }), this.patternIDs.push(g2)), i2 = "url(#".concat(g2, ")");
      } else i2 = "gradient" === n2 ? s2 : "pattern" === n2 ? a2 : h2;
      return t3.solid && (i2 = h2), i2;
    } }, { key: "getFillType", value: function(t3) {
      var e2 = this.w;
      return Array.isArray(e2.config.fill.type) ? e2.config.fill.type[t3] : e2.config.fill.type;
    } }, { key: "getFillColors", value: function() {
      var t3 = this.w, e2 = t3.config, i2 = this.opts, a2 = [];
      return t3.globals.comboCharts ? "line" === t3.config.series[this.seriesIndex].type ? Array.isArray(t3.globals.stroke.colors) ? a2 = t3.globals.stroke.colors : a2.push(t3.globals.stroke.colors) : Array.isArray(t3.globals.fill.colors) ? a2 = t3.globals.fill.colors : a2.push(t3.globals.fill.colors) : "line" === e2.chart.type ? Array.isArray(t3.globals.stroke.colors) ? a2 = t3.globals.stroke.colors : a2.push(t3.globals.stroke.colors) : Array.isArray(t3.globals.fill.colors) ? a2 = t3.globals.fill.colors : a2.push(t3.globals.fill.colors), void 0 !== i2.fillColors && (a2 = [], Array.isArray(i2.fillColors) ? a2 = i2.fillColors.slice() : a2.push(i2.fillColors)), a2;
    } }, { key: "handlePatternFill", value: function(t3) {
      var e2 = t3.fillConfig, i2 = t3.patternFill, a2 = t3.fillColor, s2 = t3.fillOpacity, r2 = t3.defaultColor, o2 = this.w.config.fill;
      e2 && (o2 = e2);
      var n2 = this.opts, l2 = new k(this.ctx), h2 = Array.isArray(o2.pattern.strokeWidth) ? o2.pattern.strokeWidth[this.seriesIndex] : o2.pattern.strokeWidth, c2 = a2;
      Array.isArray(o2.pattern.style) ? i2 = void 0 !== o2.pattern.style[n2.seriesNumber] ? l2.drawPattern(o2.pattern.style[n2.seriesNumber], o2.pattern.width, o2.pattern.height, c2, h2, s2) : r2 : i2 = l2.drawPattern(o2.pattern.style, o2.pattern.width, o2.pattern.height, c2, h2, s2);
      return i2;
    } }, { key: "handleGradientFill", value: function(t3) {
      var e2 = t3.fillColor, i2 = t3.fillOpacity, a2 = t3.fillConfig, s2 = t3.i, r2 = this.w.config.fill;
      a2 && (r2 = g(g({}, r2), a2));
      var o2, n2 = this.opts, l2 = new k(this.ctx), h2 = new m(), c2 = r2.gradient.type, d2 = e2, u2 = void 0 === r2.gradient.opacityFrom ? i2 : Array.isArray(r2.gradient.opacityFrom) ? r2.gradient.opacityFrom[s2] : r2.gradient.opacityFrom;
      d2.indexOf("rgba") > -1 && (u2 = m.getOpacityFromRGBA(d2));
      var f2 = void 0 === r2.gradient.opacityTo ? i2 : Array.isArray(r2.gradient.opacityTo) ? r2.gradient.opacityTo[s2] : r2.gradient.opacityTo;
      if (void 0 === r2.gradient.gradientToColors || 0 === r2.gradient.gradientToColors.length) o2 = "dark" === r2.gradient.shade ? h2.shadeColor(-1 * parseFloat(r2.gradient.shadeIntensity), e2.indexOf("rgb") > -1 ? m.rgb2hex(e2) : e2) : h2.shadeColor(parseFloat(r2.gradient.shadeIntensity), e2.indexOf("rgb") > -1 ? m.rgb2hex(e2) : e2);
      else if (r2.gradient.gradientToColors[n2.seriesNumber]) {
        var p2 = r2.gradient.gradientToColors[n2.seriesNumber];
        o2 = p2, p2.indexOf("rgba") > -1 && (f2 = m.getOpacityFromRGBA(p2));
      } else o2 = e2;
      if (r2.gradient.gradientFrom && (d2 = r2.gradient.gradientFrom), r2.gradient.gradientTo && (o2 = r2.gradient.gradientTo), r2.gradient.inverseColors) {
        var x2 = d2;
        d2 = o2, o2 = x2;
      }
      return d2.indexOf("rgb") > -1 && (d2 = m.rgb2hex(d2)), o2.indexOf("rgb") > -1 && (o2 = m.rgb2hex(o2)), l2.drawGradient(c2, d2, o2, u2, f2, n2.size, r2.gradient.stops, r2.gradient.colorStops, s2);
    } }]), t2;
  }(), W = function() {
    function t2(e2, a2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "setGlobalMarkerSize", value: function() {
      var t3 = this.w;
      if (t3.globals.markers.size = Array.isArray(t3.config.markers.size) ? t3.config.markers.size : [t3.config.markers.size], t3.globals.markers.size.length > 0) {
        if (t3.globals.markers.size.length < t3.globals.series.length + 1) for (var e2 = 0; e2 <= t3.globals.series.length; e2++) void 0 === t3.globals.markers.size[e2] && t3.globals.markers.size.push(t3.globals.markers.size[0]);
      } else t3.globals.markers.size = t3.config.series.map(function(e3) {
        return t3.config.markers.size;
      });
    } }, { key: "plotChartMarkers", value: function(t3, e2, i2, a2) {
      var s2, r2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o2 = this.w, n2 = e2, l2 = t3, h2 = null, c2 = new k(this.ctx), d2 = o2.config.markers.discrete && o2.config.markers.discrete.length;
      if ((o2.globals.markers.size[e2] > 0 || r2 || d2) && (h2 = c2.group({ class: r2 || d2 ? "" : "apexcharts-series-markers" })).attr("clip-path", "url(#gridRectMarkerMask".concat(o2.globals.cuid, ")")), Array.isArray(l2.x)) for (var g2 = 0; g2 < l2.x.length; g2++) {
        var u2 = i2;
        1 === i2 && 0 === g2 && (u2 = 0), 1 === i2 && 1 === g2 && (u2 = 1);
        var f2 = "apexcharts-marker";
        if ("line" !== o2.config.chart.type && "area" !== o2.config.chart.type || o2.globals.comboCharts || o2.config.tooltip.intersect || (f2 += " no-pointer-events"), (Array.isArray(o2.config.markers.size) ? o2.globals.markers.size[e2] > 0 : o2.config.markers.size > 0) || r2 || d2) {
          m.isNumber(l2.y[g2]) ? f2 += " w".concat(m.randomId()) : f2 = "apexcharts-nullpoint";
          var p2 = this.getMarkerConfig({ cssClass: f2, seriesIndex: e2, dataPointIndex: u2 });
          o2.config.series[n2].data[u2] && (o2.config.series[n2].data[u2].fillColor && (p2.pointFillColor = o2.config.series[n2].data[u2].fillColor), o2.config.series[n2].data[u2].strokeColor && (p2.pointStrokeColor = o2.config.series[n2].data[u2].strokeColor)), void 0 !== a2 && (p2.pSize = a2), (l2.x[g2] < -o2.globals.markers.largestSize || l2.x[g2] > o2.globals.gridWidth + o2.globals.markers.largestSize || l2.y[g2] < -o2.globals.markers.largestSize || l2.y[g2] > o2.globals.gridHeight + o2.globals.markers.largestSize) && (p2.pSize = 0), (s2 = c2.drawMarker(l2.x[g2], l2.y[g2], p2)).attr("rel", u2), s2.attr("j", u2), s2.attr("index", e2), s2.node.setAttribute("default-marker-size", p2.pSize), new w(this.ctx).setSelectionFilter(s2, e2, u2), this.addEvents(s2), h2 && h2.add(s2);
        } else void 0 === o2.globals.pointsArray[e2] && (o2.globals.pointsArray[e2] = []), o2.globals.pointsArray[e2].push([l2.x[g2], l2.y[g2]]);
      }
      return h2;
    } }, { key: "getMarkerConfig", value: function(t3) {
      var e2 = t3.cssClass, i2 = t3.seriesIndex, a2 = t3.dataPointIndex, s2 = void 0 === a2 ? null : a2, r2 = t3.radius, o2 = void 0 === r2 ? null : r2, n2 = t3.size, l2 = void 0 === n2 ? null : n2, h2 = t3.strokeWidth, c2 = void 0 === h2 ? null : h2, d2 = this.w, g2 = this.getMarkerStyle(i2), u2 = null === l2 ? d2.globals.markers.size[i2] : l2, f2 = d2.config.markers;
      return null !== s2 && f2.discrete.length && f2.discrete.map(function(t4) {
        t4.seriesIndex === i2 && t4.dataPointIndex === s2 && (g2.pointStrokeColor = t4.strokeColor, g2.pointFillColor = t4.fillColor, u2 = t4.size, g2.pointShape = t4.shape);
      }), { pSize: null === o2 ? u2 : o2, pRadius: null !== o2 ? o2 : f2.radius, pointStrokeWidth: null !== c2 ? c2 : Array.isArray(f2.strokeWidth) ? f2.strokeWidth[i2] : f2.strokeWidth, pointStrokeColor: g2.pointStrokeColor, pointFillColor: g2.pointFillColor, shape: g2.pointShape || (Array.isArray(f2.shape) ? f2.shape[i2] : f2.shape), class: e2, pointStrokeOpacity: Array.isArray(f2.strokeOpacity) ? f2.strokeOpacity[i2] : f2.strokeOpacity, pointStrokeDashArray: Array.isArray(f2.strokeDashArray) ? f2.strokeDashArray[i2] : f2.strokeDashArray, pointFillOpacity: Array.isArray(f2.fillOpacity) ? f2.fillOpacity[i2] : f2.fillOpacity, seriesIndex: i2 };
    } }, { key: "addEvents", value: function(t3) {
      var e2 = this.w, i2 = new k(this.ctx);
      t3.node.addEventListener("mouseenter", i2.pathMouseEnter.bind(this.ctx, t3)), t3.node.addEventListener("mouseleave", i2.pathMouseLeave.bind(this.ctx, t3)), t3.node.addEventListener("mousedown", i2.pathMouseDown.bind(this.ctx, t3)), t3.node.addEventListener("click", e2.config.markers.onClick), t3.node.addEventListener("dblclick", e2.config.markers.onDblClick), t3.node.addEventListener("touchstart", i2.pathMouseDown.bind(this.ctx, t3), { passive: true });
    } }, { key: "getMarkerStyle", value: function(t3) {
      var e2 = this.w, i2 = e2.globals.markers.colors, a2 = e2.config.markers.strokeColor || e2.config.markers.strokeColors;
      return { pointStrokeColor: Array.isArray(a2) ? a2[t3] : a2, pointFillColor: Array.isArray(i2) ? i2[t3] : i2 };
    } }]), t2;
  }(), B = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w, this.initialAnim = this.w.config.chart.animations.enabled;
    }
    return s(t2, [{ key: "draw", value: function(t3, e2, i2) {
      var a2 = this.w, s2 = new k(this.ctx), r2 = i2.realIndex, o2 = i2.pointsPos, n2 = i2.zRatio, l2 = i2.elParent, h2 = s2.group({ class: "apexcharts-series-markers apexcharts-series-".concat(a2.config.chart.type) });
      if (h2.attr("clip-path", "url(#gridRectMarkerMask".concat(a2.globals.cuid, ")")), Array.isArray(o2.x)) for (var c2 = 0; c2 < o2.x.length; c2++) {
        var d2 = e2 + 1, g2 = true;
        0 === e2 && 0 === c2 && (d2 = 0), 0 === e2 && 1 === c2 && (d2 = 1);
        var u2 = a2.globals.markers.size[r2];
        if (n2 !== 1 / 0) {
          var f2 = a2.config.plotOptions.bubble;
          u2 = a2.globals.seriesZ[r2][d2], f2.zScaling && (u2 /= n2), f2.minBubbleRadius && u2 < f2.minBubbleRadius && (u2 = f2.minBubbleRadius), f2.maxBubbleRadius && u2 > f2.maxBubbleRadius && (u2 = f2.maxBubbleRadius);
        }
        var p2 = o2.x[c2], x2 = o2.y[c2];
        if (u2 = u2 || 0, null !== x2 && void 0 !== a2.globals.series[r2][d2] || (g2 = false), g2) {
          var b2 = this.drawPoint(p2, x2, u2, r2, d2, e2);
          h2.add(b2);
        }
        l2.add(h2);
      }
    } }, { key: "drawPoint", value: function(t3, e2, i2, a2, s2, r2) {
      var o2 = this.w, n2 = a2, l2 = new y(this.ctx), h2 = new w(this.ctx), c2 = new N(this.ctx), d2 = new W(this.ctx), g2 = new k(this.ctx), u2 = d2.getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: n2, dataPointIndex: s2, radius: "bubble" === o2.config.chart.type || o2.globals.comboCharts && o2.config.series[a2] && "bubble" === o2.config.series[a2].type ? i2 : null }), f2 = c2.fillPath({ seriesNumber: a2, dataPointIndex: s2, color: u2.pointFillColor, patternUnits: "objectBoundingBox", value: o2.globals.series[a2][r2] }), p2 = g2.drawMarker(t3, e2, u2);
      if (o2.config.series[n2].data[s2] && o2.config.series[n2].data[s2].fillColor && (f2 = o2.config.series[n2].data[s2].fillColor), p2.attr({ fill: f2 }), o2.config.chart.dropShadow.enabled) {
        var x2 = o2.config.chart.dropShadow;
        h2.dropShadow(p2, x2, a2);
      }
      if (!this.initialAnim || o2.globals.dataChanged || o2.globals.resized) o2.globals.animationEnded = true;
      else {
        var b2 = o2.config.chart.animations.speed;
        l2.animateMarker(p2, b2, o2.globals.easing, function() {
          window.setTimeout(function() {
            l2.animationCompleted(p2);
          }, 100);
        });
      }
      return p2.attr({ rel: s2, j: s2, index: a2, "default-marker-size": u2.pSize }), h2.setSelectionFilter(p2, a2, s2), d2.addEvents(p2), p2.node.classList.add("apexcharts-marker"), p2;
    } }, { key: "centerTextInBubble", value: function(t3) {
      var e2 = this.w;
      return { y: t3 += parseInt(e2.config.dataLabels.style.fontSize, 10) / 4 };
    } }]), t2;
  }(), G = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "dataLabelsCorrection", value: function(t3, e2, i2, a2, s2, r2, o2) {
      var n2 = this.w, l2 = false, h2 = new k(this.ctx).getTextRects(i2, o2), c2 = h2.width, d2 = h2.height;
      e2 < 0 && (e2 = 0), e2 > n2.globals.gridHeight + d2 && (e2 = n2.globals.gridHeight + d2 / 2), void 0 === n2.globals.dataLabelsRects[a2] && (n2.globals.dataLabelsRects[a2] = []), n2.globals.dataLabelsRects[a2].push({ x: t3, y: e2, width: c2, height: d2 });
      var g2 = n2.globals.dataLabelsRects[a2].length - 2, u2 = void 0 !== n2.globals.lastDrawnDataLabelsIndexes[a2] ? n2.globals.lastDrawnDataLabelsIndexes[a2][n2.globals.lastDrawnDataLabelsIndexes[a2].length - 1] : 0;
      if (void 0 !== n2.globals.dataLabelsRects[a2][g2]) {
        var f2 = n2.globals.dataLabelsRects[a2][u2];
        (t3 > f2.x + f2.width || e2 > f2.y + f2.height || e2 + d2 < f2.y || t3 + c2 < f2.x) && (l2 = true);
      }
      return (0 === s2 || r2) && (l2 = true), { x: t3, y: e2, textRects: h2, drawnextLabel: l2 };
    } }, { key: "drawDataLabel", value: function(t3) {
      var e2 = this, i2 = t3.type, a2 = t3.pos, s2 = t3.i, r2 = t3.j, o2 = t3.isRangeStart, n2 = t3.strokeWidth, l2 = void 0 === n2 ? 2 : n2, h2 = this.w, c2 = new k(this.ctx), d2 = h2.config.dataLabels, g2 = 0, u2 = 0, f2 = r2, p2 = null;
      if (-1 !== h2.globals.collapsedSeriesIndices.indexOf(s2) || !d2.enabled || !Array.isArray(a2.x)) return p2;
      p2 = c2.group({ class: "apexcharts-data-labels" });
      for (var x2 = 0; x2 < a2.x.length; x2++) if (g2 = a2.x[x2] + d2.offsetX, u2 = a2.y[x2] + d2.offsetY + l2, !isNaN(g2)) {
        1 === r2 && 0 === x2 && (f2 = 0), 1 === r2 && 1 === x2 && (f2 = 1);
        var b2 = h2.globals.series[s2][f2];
        "rangeArea" === i2 && (b2 = o2 ? h2.globals.seriesRangeStart[s2][f2] : h2.globals.seriesRangeEnd[s2][f2]);
        var v2 = "", m2 = function(t4) {
          return h2.config.dataLabels.formatter(t4, { ctx: e2.ctx, seriesIndex: s2, dataPointIndex: f2, w: h2 });
        };
        if ("bubble" === h2.config.chart.type) v2 = m2(b2 = h2.globals.seriesZ[s2][f2]), u2 = a2.y[x2], u2 = new B(this.ctx).centerTextInBubble(u2, s2, f2).y;
        else void 0 !== b2 && (v2 = m2(b2));
        var y2 = h2.config.dataLabels.textAnchor;
        h2.globals.isSlopeChart && (y2 = 0 === f2 ? "end" : f2 === h2.config.series[s2].data.length - 1 ? "start" : "middle"), this.plotDataLabelsText({ x: g2, y: u2, text: v2, i: s2, j: f2, parent: p2, offsetCorrection: true, dataLabelsConfig: h2.config.dataLabels, textAnchor: y2 });
      }
      return p2;
    } }, { key: "plotDataLabelsText", value: function(t3) {
      var e2 = this.w, i2 = new k(this.ctx), a2 = t3.x, s2 = t3.y, r2 = t3.i, o2 = t3.j, n2 = t3.text, l2 = t3.textAnchor, h2 = t3.fontSize, c2 = t3.parent, d2 = t3.dataLabelsConfig, g2 = t3.color, u2 = t3.alwaysDrawDataLabel, f2 = t3.offsetCorrection, p2 = t3.className, x2 = null;
      if (Array.isArray(e2.config.dataLabels.enabledOnSeries) && e2.config.dataLabels.enabledOnSeries.indexOf(r2) < 0) return x2;
      var b2 = { x: a2, y: s2, drawnextLabel: true, textRects: null };
      f2 && (b2 = this.dataLabelsCorrection(a2, s2, n2, r2, o2, u2, parseInt(d2.style.fontSize, 10))), e2.globals.zoomed || (a2 = b2.x, s2 = b2.y), b2.textRects && (a2 < -20 - b2.textRects.width || a2 > e2.globals.gridWidth + b2.textRects.width + 30) && (n2 = "");
      var v2 = e2.globals.dataLabels.style.colors[r2];
      (("bar" === e2.config.chart.type || "rangeBar" === e2.config.chart.type) && e2.config.plotOptions.bar.distributed || e2.config.dataLabels.distributed) && (v2 = e2.globals.dataLabels.style.colors[o2]), "function" == typeof v2 && (v2 = v2({ series: e2.globals.series, seriesIndex: r2, dataPointIndex: o2, w: e2 })), g2 && (v2 = g2);
      var m2 = d2.offsetX, y2 = d2.offsetY;
      if ("bar" !== e2.config.chart.type && "rangeBar" !== e2.config.chart.type || (m2 = 0, y2 = 0), e2.globals.isSlopeChart && (0 !== o2 && (m2 = -2 * d2.offsetX + 5), 0 !== o2 && o2 !== e2.config.series[r2].data.length - 1 && (m2 = 0)), b2.drawnextLabel) {
        if ((x2 = i2.drawText({ width: 100, height: parseInt(d2.style.fontSize, 10), x: a2 + m2, y: s2 + y2, foreColor: v2, textAnchor: l2 || d2.textAnchor, text: n2, fontSize: h2 || d2.style.fontSize, fontFamily: d2.style.fontFamily, fontWeight: d2.style.fontWeight || "normal" })).attr({ class: p2 || "apexcharts-datalabel", cx: a2, cy: s2 }), d2.dropShadow.enabled) {
          var A2 = d2.dropShadow;
          new w(this.ctx).dropShadow(x2, A2);
        }
        c2.add(x2), void 0 === e2.globals.lastDrawnDataLabelsIndexes[r2] && (e2.globals.lastDrawnDataLabelsIndexes[r2] = []), e2.globals.lastDrawnDataLabelsIndexes[r2].push(o2);
      }
      return x2;
    } }, { key: "addBackgroundToDataLabel", value: function(t3, e2) {
      var i2 = this.w, a2 = i2.config.dataLabels.background, s2 = a2.padding, r2 = a2.padding / 2, o2 = e2.width, n2 = e2.height, l2 = new k(this.ctx).drawRect(e2.x - s2, e2.y - r2 / 2, o2 + 2 * s2, n2 + r2, a2.borderRadius, "transparent" !== i2.config.chart.background && i2.config.chart.background ? i2.config.chart.background : "#fff", a2.opacity, a2.borderWidth, a2.borderColor);
      a2.dropShadow.enabled && new w(this.ctx).dropShadow(l2, a2.dropShadow);
      return l2;
    } }, { key: "dataLabelsBackground", value: function() {
      var t3 = this.w;
      if ("bubble" !== t3.config.chart.type) for (var e2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), i2 = 0; i2 < e2.length; i2++) {
        var a2 = e2[i2], s2 = a2.getBBox(), r2 = null;
        if (s2.width && s2.height && (r2 = this.addBackgroundToDataLabel(a2, s2)), r2) {
          a2.parentNode.insertBefore(r2.node, a2);
          var o2 = a2.getAttribute("fill");
          t3.config.chart.animations.enabled && !t3.globals.resized && !t3.globals.dataChanged ? r2.animate().attr({ fill: o2 }) : r2.attr({ fill: o2 }), a2.setAttribute("fill", t3.config.dataLabels.background.foreColor);
        }
      }
    } }, { key: "bringForward", value: function() {
      for (var t3 = this.w, e2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), i2 = t3.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"), a2 = 0; a2 < e2.length; a2++) i2 && i2.insertBefore(e2[a2], i2.nextSibling);
    } }]), t2;
  }(), V = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w, this.legendInactiveClass = "legend-mouseover-inactive";
    }
    return s(t2, [{ key: "getAllSeriesEls", value: function() {
      return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series");
    } }, { key: "getSeriesByName", value: function(t3) {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(m.escapeString(t3), "']"));
    } }, { key: "isSeriesHidden", value: function(t3) {
      var e2 = this.getSeriesByName(t3), i2 = parseInt(e2.getAttribute("data:realIndex"), 10);
      return { isHidden: e2.classList.contains("apexcharts-series-collapsed"), realIndex: i2 };
    } }, { key: "addCollapsedClassToSeries", value: function(t3, e2) {
      var i2 = this.w;
      function a2(i3) {
        for (var a3 = 0; a3 < i3.length; a3++) i3[a3].index === e2 && t3.node.classList.add("apexcharts-series-collapsed");
      }
      a2(i2.globals.collapsedSeries), a2(i2.globals.ancillaryCollapsedSeries);
    } }, { key: "toggleSeries", value: function(t3) {
      var e2 = this.isSeriesHidden(t3);
      return this.ctx.legend.legendHelpers.toggleDataSeries(e2.realIndex, e2.isHidden), e2.isHidden;
    } }, { key: "showSeries", value: function(t3) {
      var e2 = this.isSeriesHidden(t3);
      e2.isHidden && this.ctx.legend.legendHelpers.toggleDataSeries(e2.realIndex, true);
    } }, { key: "hideSeries", value: function(t3) {
      var e2 = this.isSeriesHidden(t3);
      e2.isHidden || this.ctx.legend.legendHelpers.toggleDataSeries(e2.realIndex, false);
    } }, { key: "resetSeries", value: function() {
      var t3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a2 = this.w, s2 = m.clone(a2.globals.initialSeries);
      a2.globals.previousPaths = [], i2 ? (a2.globals.collapsedSeries = [], a2.globals.ancillaryCollapsedSeries = [], a2.globals.collapsedSeriesIndices = [], a2.globals.ancillaryCollapsedSeriesIndices = []) : s2 = this.emptyCollapsedSeries(s2), a2.config.series = s2, t3 && (e2 && (a2.globals.zoomed = false, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(s2, a2.config.chart.animations.dynamicAnimation.enabled));
    } }, { key: "emptyCollapsedSeries", value: function(t3) {
      for (var e2 = this.w, i2 = 0; i2 < t3.length; i2++) e2.globals.collapsedSeriesIndices.indexOf(i2) > -1 && (t3[i2].data = []);
      return t3;
    } }, { key: "highlightSeries", value: function(t3) {
      var e2 = this.w, i2 = this.getSeriesByName(t3), a2 = parseInt(null == i2 ? void 0 : i2.getAttribute("data:realIndex"), 10), s2 = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis"), r2 = null, o2 = null, n2 = null;
      if (e2.globals.axisCharts || "radialBar" === e2.config.chart.type) if (e2.globals.axisCharts) {
        r2 = e2.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(a2, "']")), o2 = e2.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(a2, "']"));
        var l2 = e2.globals.seriesYAxisReverseMap[a2];
        n2 = e2.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(l2, "']"));
      } else r2 = e2.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a2 + 1, "']"));
      else r2 = e2.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a2 + 1, "'] path"));
      for (var h2 = 0; h2 < s2.length; h2++) s2[h2].classList.add(this.legendInactiveClass);
      if (r2) e2.globals.axisCharts || r2.parentNode.classList.remove(this.legendInactiveClass), r2.classList.remove(this.legendInactiveClass), null !== o2 && o2.classList.remove(this.legendInactiveClass), null !== n2 && n2.classList.remove(this.legendInactiveClass);
      else for (var c2 = 0; c2 < s2.length; c2++) s2[c2].classList.remove(this.legendInactiveClass);
    } }, { key: "toggleSeriesOnHover", value: function(t3, e2) {
      var i2 = this.w;
      e2 || (e2 = t3.target);
      var a2 = i2.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis");
      if ("mousemove" === t3.type) {
        var s2 = parseInt(e2.getAttribute("rel"), 10) - 1;
        this.highlightSeries(i2.globals.seriesNames[s2]);
      } else if ("mouseout" === t3.type) for (var r2 = 0; r2 < a2.length; r2++) a2[r2].classList.remove(this.legendInactiveClass);
    } }, { key: "highlightRangeInSeries", value: function(t3, e2) {
      var i2 = this, a2 = this.w, s2 = a2.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"), r2 = function(t4) {
        for (var e3 = 0; e3 < s2.length; e3++) s2[e3].classList[t4](i2.legendInactiveClass);
      };
      if ("mousemove" === t3.type) {
        var o2 = parseInt(e2.getAttribute("rel"), 10) - 1;
        r2("add");
        var n2 = a2.config.plotOptions.heatmap.colorScale.ranges;
        !function(t4, e3) {
          for (var a3 = 0; a3 < s2.length; a3++) {
            var r3 = Number(s2[a3].getAttribute("val"));
            r3 >= t4.from && (r3 < t4.to || t4.to === e3 && r3 === e3) && s2[a3].classList.remove(i2.legendInactiveClass);
          }
        }(n2[o2], n2.reduce(function(t4, e3) {
          return Math.max(t4, e3.to);
        }, 0));
      } else "mouseout" === t3.type && r2("remove");
    } }, { key: "getActiveConfigSeriesIndex", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "asc", e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], i2 = this.w, a2 = 0;
      if (i2.config.series.length > 1) {
        for (var s2 = i2.config.series.map(function(t4, a3) {
          return t4.data && t4.data.length > 0 && -1 === i2.globals.collapsedSeriesIndices.indexOf(a3) && (!i2.globals.comboCharts || 0 === e2.length || e2.length && e2.indexOf(i2.config.series[a3].type) > -1) ? a3 : -1;
        }), r2 = "asc" === t3 ? 0 : s2.length - 1; "asc" === t3 ? r2 < s2.length : r2 >= 0; "asc" === t3 ? r2++ : r2--) if (-1 !== s2[r2]) {
          a2 = s2[r2];
          break;
        }
      }
      return a2;
    } }, { key: "getBarSeriesIndices", value: function() {
      return this.w.globals.comboCharts ? this.w.config.series.map(function(t3, e2) {
        return "bar" === t3.type || "column" === t3.type ? e2 : -1;
      }).filter(function(t3) {
        return -1 !== t3;
      }) : this.w.config.series.map(function(t3, e2) {
        return e2;
      });
    } }, { key: "getPreviousPaths", value: function() {
      var t3 = this.w;
      function e2(e3, i3, a3) {
        for (var s3 = e3[i3].childNodes, r2 = { type: a3, paths: [], realIndex: e3[i3].getAttribute("data:realIndex") }, o2 = 0; o2 < s3.length; o2++) if (s3[o2].hasAttribute("pathTo")) {
          var n2 = s3[o2].getAttribute("pathTo");
          r2.paths.push({ d: n2 });
        }
        t3.globals.previousPaths.push(r2);
      }
      t3.globals.previousPaths = [];
      ["line", "area", "bar", "rangebar", "rangeArea", "candlestick", "radar"].forEach(function(i3) {
        for (var a3, s3 = (a3 = i3, t3.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(a3, "-series .apexcharts-series"))), r2 = 0; r2 < s3.length; r2++) e2(s3, r2, i3);
      }), this.handlePrevBubbleScatterPaths("bubble"), this.handlePrevBubbleScatterPaths("scatter");
      var i2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t3.config.chart.type, " .apexcharts-series"));
      if (i2.length > 0) for (var a2 = function(e3) {
        for (var i3 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t3.config.chart.type, " .apexcharts-series[data\\:realIndex='").concat(e3, "'] rect")), a3 = [], s3 = function(t4) {
          var e4 = function(e5) {
            return i3[t4].getAttribute(e5);
          }, s4 = { x: parseFloat(e4("x")), y: parseFloat(e4("y")), width: parseFloat(e4("width")), height: parseFloat(e4("height")) };
          a3.push({ rect: s4, color: i3[t4].getAttribute("color") });
        }, r2 = 0; r2 < i3.length; r2++) s3(r2);
        t3.globals.previousPaths.push(a3);
      }, s2 = 0; s2 < i2.length; s2++) a2(s2);
      t3.globals.axisCharts || (t3.globals.previousPaths = t3.globals.series);
    } }, { key: "handlePrevBubbleScatterPaths", value: function(t3) {
      var e2 = this.w, i2 = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t3, "-series .apexcharts-series"));
      if (i2.length > 0) for (var a2 = 0; a2 < i2.length; a2++) {
        for (var s2 = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t3, "-series .apexcharts-series[data\\:realIndex='").concat(a2, "'] circle")), r2 = [], o2 = 0; o2 < s2.length; o2++) r2.push({ x: s2[o2].getAttribute("cx"), y: s2[o2].getAttribute("cy"), r: s2[o2].getAttribute("r") });
        e2.globals.previousPaths.push(r2);
      }
    } }, { key: "clearPreviousPaths", value: function() {
      var t3 = this.w;
      t3.globals.previousPaths = [], t3.globals.allSeriesCollapsed = false;
    } }, { key: "handleNoData", value: function() {
      var t3 = this.w, e2 = t3.config.noData, i2 = new k(this.ctx), a2 = t3.globals.svgWidth / 2, s2 = t3.globals.svgHeight / 2, r2 = "middle";
      if (t3.globals.noData = true, t3.globals.animationEnded = true, "left" === e2.align ? (a2 = 10, r2 = "start") : "right" === e2.align && (a2 = t3.globals.svgWidth - 10, r2 = "end"), "top" === e2.verticalAlign ? s2 = 50 : "bottom" === e2.verticalAlign && (s2 = t3.globals.svgHeight - 50), a2 += e2.offsetX, s2 = s2 + parseInt(e2.style.fontSize, 10) + 2 + e2.offsetY, void 0 !== e2.text && "" !== e2.text) {
        var o2 = i2.drawText({ x: a2, y: s2, text: e2.text, textAnchor: r2, fontSize: e2.style.fontSize, fontFamily: e2.style.fontFamily, foreColor: e2.style.color, opacity: 1, class: "apexcharts-text-nodata" });
        t3.globals.dom.Paper.add(o2);
      }
    } }, { key: "setNullSeriesToZeroValues", value: function(t3) {
      for (var e2 = this.w, i2 = 0; i2 < t3.length; i2++) if (0 === t3[i2].length) for (var a2 = 0; a2 < t3[e2.globals.maxValsInArrayIndex].length; a2++) t3[i2].push(0);
      return t3;
    } }, { key: "hasAllSeriesEqualX", value: function() {
      for (var t3 = true, e2 = this.w, i2 = this.filteredSeriesX(), a2 = 0; a2 < i2.length - 1; a2++) if (i2[a2][0] !== i2[a2 + 1][0]) {
        t3 = false;
        break;
      }
      return e2.globals.allSeriesHasEqualX = t3, t3;
    } }, { key: "filteredSeriesX", value: function() {
      var t3 = this.w.globals.seriesX.map(function(t4) {
        return t4.length > 0 ? t4 : [];
      });
      return t3;
    } }]), t2;
  }(), _ = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new A(this.ctx);
    }
    return s(t2, [{ key: "isMultiFormat", value: function() {
      return this.isFormatXY() || this.isFormat2DArray();
    } }, { key: "isFormatXY", value: function() {
      var t3 = this.w.config.series.slice(), e2 = new V(this.ctx);
      if (this.activeSeriesIndex = e2.getActiveConfigSeriesIndex(), void 0 !== t3[this.activeSeriesIndex].data && t3[this.activeSeriesIndex].data.length > 0 && null !== t3[this.activeSeriesIndex].data[0] && void 0 !== t3[this.activeSeriesIndex].data[0].x && null !== t3[this.activeSeriesIndex].data[0]) return true;
    } }, { key: "isFormat2DArray", value: function() {
      var t3 = this.w.config.series.slice(), e2 = new V(this.ctx);
      if (this.activeSeriesIndex = e2.getActiveConfigSeriesIndex(), void 0 !== t3[this.activeSeriesIndex].data && t3[this.activeSeriesIndex].data.length > 0 && void 0 !== t3[this.activeSeriesIndex].data[0] && null !== t3[this.activeSeriesIndex].data[0] && t3[this.activeSeriesIndex].data[0].constructor === Array) return true;
    } }, { key: "handleFormat2DArray", value: function(t3, e2) {
      for (var i2 = this.w.config, a2 = this.w.globals, s2 = "boxPlot" === i2.chart.type || "boxPlot" === i2.series[e2].type, r2 = 0; r2 < t3[e2].data.length; r2++) if (void 0 !== t3[e2].data[r2][1] && (Array.isArray(t3[e2].data[r2][1]) && 4 === t3[e2].data[r2][1].length && !s2 ? this.twoDSeries.push(m.parseNumber(t3[e2].data[r2][1][3])) : t3[e2].data[r2].length >= 5 ? this.twoDSeries.push(m.parseNumber(t3[e2].data[r2][4])) : this.twoDSeries.push(m.parseNumber(t3[e2].data[r2][1])), a2.dataFormatXNumeric = true), "datetime" === i2.xaxis.type) {
        var o2 = new Date(t3[e2].data[r2][0]);
        o2 = new Date(o2).getTime(), this.twoDSeriesX.push(o2);
      } else this.twoDSeriesX.push(t3[e2].data[r2][0]);
      for (var n2 = 0; n2 < t3[e2].data.length; n2++) void 0 !== t3[e2].data[n2][2] && (this.threeDSeries.push(t3[e2].data[n2][2]), a2.isDataXYZ = true);
    } }, { key: "handleFormatXY", value: function(t3, e2) {
      var i2 = this.w.config, a2 = this.w.globals, s2 = new L(this.ctx), r2 = e2;
      a2.collapsedSeriesIndices.indexOf(e2) > -1 && (r2 = this.activeSeriesIndex);
      for (var o2 = 0; o2 < t3[e2].data.length; o2++) void 0 !== t3[e2].data[o2].y && (Array.isArray(t3[e2].data[o2].y) ? this.twoDSeries.push(m.parseNumber(t3[e2].data[o2].y[t3[e2].data[o2].y.length - 1])) : this.twoDSeries.push(m.parseNumber(t3[e2].data[o2].y))), void 0 !== t3[e2].data[o2].goals && Array.isArray(t3[e2].data[o2].goals) ? (void 0 === this.seriesGoals[e2] && (this.seriesGoals[e2] = []), this.seriesGoals[e2].push(t3[e2].data[o2].goals)) : (void 0 === this.seriesGoals[e2] && (this.seriesGoals[e2] = []), this.seriesGoals[e2].push(null));
      for (var n2 = 0; n2 < t3[r2].data.length; n2++) {
        var l2 = "string" == typeof t3[r2].data[n2].x, h2 = Array.isArray(t3[r2].data[n2].x), c2 = !h2 && !!s2.isValidDate(t3[r2].data[n2].x);
        if (l2 || c2) if (l2 || i2.xaxis.convertedCatToNumeric) {
          var d2 = a2.isBarHorizontal && a2.isRangeData;
          "datetime" !== i2.xaxis.type || d2 ? (this.fallbackToCategory = true, this.twoDSeriesX.push(t3[r2].data[n2].x), isNaN(t3[r2].data[n2].x) || "category" === this.w.config.xaxis.type || "string" == typeof t3[r2].data[n2].x || (a2.isXNumeric = true)) : this.twoDSeriesX.push(s2.parseDate(t3[r2].data[n2].x));
        } else "datetime" === i2.xaxis.type ? this.twoDSeriesX.push(s2.parseDate(t3[r2].data[n2].x.toString())) : (a2.dataFormatXNumeric = true, a2.isXNumeric = true, this.twoDSeriesX.push(parseFloat(t3[r2].data[n2].x)));
        else h2 ? (this.fallbackToCategory = true, this.twoDSeriesX.push(t3[r2].data[n2].x)) : (a2.isXNumeric = true, a2.dataFormatXNumeric = true, this.twoDSeriesX.push(t3[r2].data[n2].x));
      }
      if (t3[e2].data[0] && void 0 !== t3[e2].data[0].z) {
        for (var g2 = 0; g2 < t3[e2].data.length; g2++) this.threeDSeries.push(t3[e2].data[g2].z);
        a2.isDataXYZ = true;
      }
    } }, { key: "handleRangeData", value: function(t3, e2) {
      var i2 = this.w.globals, a2 = {};
      return this.isFormat2DArray() ? a2 = this.handleRangeDataFormat("array", t3, e2) : this.isFormatXY() && (a2 = this.handleRangeDataFormat("xy", t3, e2)), i2.seriesRangeStart.push(void 0 === a2.start ? [] : a2.start), i2.seriesRangeEnd.push(void 0 === a2.end ? [] : a2.end), i2.seriesRange.push(a2.rangeUniques), i2.seriesRange.forEach(function(t4, e3) {
        t4 && t4.forEach(function(t5, e4) {
          t5.y.forEach(function(e5, i3) {
            for (var a3 = 0; a3 < t5.y.length; a3++) if (i3 !== a3) {
              var s2 = e5.y1, r2 = e5.y2, o2 = t5.y[a3].y1;
              s2 <= t5.y[a3].y2 && o2 <= r2 && (t5.overlaps.indexOf(e5.rangeName) < 0 && t5.overlaps.push(e5.rangeName), t5.overlaps.indexOf(t5.y[a3].rangeName) < 0 && t5.overlaps.push(t5.y[a3].rangeName));
            }
          });
        });
      }), a2;
    } }, { key: "handleCandleStickBoxData", value: function(t3, e2) {
      var i2 = this.w.globals, a2 = {};
      return this.isFormat2DArray() ? a2 = this.handleCandleStickBoxDataFormat("array", t3, e2) : this.isFormatXY() && (a2 = this.handleCandleStickBoxDataFormat("xy", t3, e2)), i2.seriesCandleO[e2] = a2.o, i2.seriesCandleH[e2] = a2.h, i2.seriesCandleM[e2] = a2.m, i2.seriesCandleL[e2] = a2.l, i2.seriesCandleC[e2] = a2.c, a2;
    } }, { key: "handleRangeDataFormat", value: function(t3, e2, i2) {
      var a2 = [], s2 = [], r2 = e2[i2].data.filter(function(t4, e3, i3) {
        return e3 === i3.findIndex(function(e4) {
          return e4.x === t4.x;
        });
      }).map(function(t4, e3) {
        return { x: t4.x, overlaps: [], y: [] };
      });
      if ("array" === t3) for (var o2 = 0; o2 < e2[i2].data.length; o2++) Array.isArray(e2[i2].data[o2]) ? (a2.push(e2[i2].data[o2][1][0]), s2.push(e2[i2].data[o2][1][1])) : (a2.push(e2[i2].data[o2]), s2.push(e2[i2].data[o2]));
      else if ("xy" === t3) for (var n2 = function(t4) {
        var o3 = Array.isArray(e2[i2].data[t4].y), n3 = m.randomId(), l3 = e2[i2].data[t4].x, h2 = { y1: o3 ? e2[i2].data[t4].y[0] : e2[i2].data[t4].y, y2: o3 ? e2[i2].data[t4].y[1] : e2[i2].data[t4].y, rangeName: n3 };
        e2[i2].data[t4].rangeName = n3;
        var c2 = r2.findIndex(function(t5) {
          return t5.x === l3;
        });
        r2[c2].y.push(h2), a2.push(h2.y1), s2.push(h2.y2);
      }, l2 = 0; l2 < e2[i2].data.length; l2++) n2(l2);
      return { start: a2, end: s2, rangeUniques: r2 };
    } }, { key: "handleCandleStickBoxDataFormat", value: function(t3, e2, i2) {
      var a2 = this.w, s2 = "boxPlot" === a2.config.chart.type || "boxPlot" === a2.config.series[i2].type, r2 = [], o2 = [], n2 = [], l2 = [], h2 = [];
      if ("array" === t3) if (s2 && 6 === e2[i2].data[0].length || !s2 && 5 === e2[i2].data[0].length) for (var c2 = 0; c2 < e2[i2].data.length; c2++) r2.push(e2[i2].data[c2][1]), o2.push(e2[i2].data[c2][2]), s2 ? (n2.push(e2[i2].data[c2][3]), l2.push(e2[i2].data[c2][4]), h2.push(e2[i2].data[c2][5])) : (l2.push(e2[i2].data[c2][3]), h2.push(e2[i2].data[c2][4]));
      else for (var d2 = 0; d2 < e2[i2].data.length; d2++) Array.isArray(e2[i2].data[d2][1]) && (r2.push(e2[i2].data[d2][1][0]), o2.push(e2[i2].data[d2][1][1]), s2 ? (n2.push(e2[i2].data[d2][1][2]), l2.push(e2[i2].data[d2][1][3]), h2.push(e2[i2].data[d2][1][4])) : (l2.push(e2[i2].data[d2][1][2]), h2.push(e2[i2].data[d2][1][3])));
      else if ("xy" === t3) for (var g2 = 0; g2 < e2[i2].data.length; g2++) Array.isArray(e2[i2].data[g2].y) && (r2.push(e2[i2].data[g2].y[0]), o2.push(e2[i2].data[g2].y[1]), s2 ? (n2.push(e2[i2].data[g2].y[2]), l2.push(e2[i2].data[g2].y[3]), h2.push(e2[i2].data[g2].y[4])) : (l2.push(e2[i2].data[g2].y[2]), h2.push(e2[i2].data[g2].y[3])));
      return { o: r2, h: o2, m: n2, l: l2, c: h2 };
    } }, { key: "parseDataAxisCharts", value: function(t3) {
      var e2 = this, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.ctx, a2 = this.w.config, s2 = this.w.globals, r2 = new L(i2), o2 = a2.labels.length > 0 ? a2.labels.slice() : a2.xaxis.categories.slice();
      s2.isRangeBar = "rangeBar" === a2.chart.type && s2.isBarHorizontal, s2.hasXaxisGroups = "category" === a2.xaxis.type && a2.xaxis.group.groups.length > 0, s2.hasXaxisGroups && (s2.groups = a2.xaxis.group.groups), t3.forEach(function(t4, e3) {
        void 0 !== t4.name ? s2.seriesNames.push(t4.name) : s2.seriesNames.push("series-" + parseInt(e3 + 1, 10));
      }), this.coreUtils.setSeriesYAxisMappings();
      var n2 = [], l2 = p(new Set(a2.series.map(function(t4) {
        return t4.group;
      })));
      a2.series.forEach(function(t4, e3) {
        var i3 = l2.indexOf(t4.group);
        n2[i3] || (n2[i3] = []), n2[i3].push(s2.seriesNames[e3]);
      }), s2.seriesGroups = n2;
      for (var h2 = function() {
        for (var t4 = 0; t4 < o2.length; t4++) if ("string" == typeof o2[t4]) {
          if (!r2.isValidDate(o2[t4])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
          e2.twoDSeriesX.push(r2.parseDate(o2[t4]));
        } else e2.twoDSeriesX.push(o2[t4]);
      }, c2 = 0; c2 < t3.length; c2++) {
        if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], void 0 === t3[c2].data) return void console.error("It is a possibility that you may have not included 'data' property in series.");
        if ("rangeBar" !== a2.chart.type && "rangeArea" !== a2.chart.type && "rangeBar" !== t3[c2].type && "rangeArea" !== t3[c2].type || (s2.isRangeData = true, "rangeBar" !== a2.chart.type && "rangeArea" !== a2.chart.type || this.handleRangeData(t3, c2)), this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(t3, c2) : this.isFormatXY() && this.handleFormatXY(t3, c2), "candlestick" !== a2.chart.type && "candlestick" !== t3[c2].type && "boxPlot" !== a2.chart.type && "boxPlot" !== t3[c2].type || this.handleCandleStickBoxData(t3, c2), s2.series.push(this.twoDSeries), s2.labels.push(this.twoDSeriesX), s2.seriesX.push(this.twoDSeriesX), s2.seriesGoals = this.seriesGoals, c2 !== this.activeSeriesIndex || this.fallbackToCategory || (s2.isXNumeric = true);
        else {
          "datetime" === a2.xaxis.type ? (s2.isXNumeric = true, h2(), s2.seriesX.push(this.twoDSeriesX)) : "numeric" === a2.xaxis.type && (s2.isXNumeric = true, o2.length > 0 && (this.twoDSeriesX = o2, s2.seriesX.push(this.twoDSeriesX))), s2.labels.push(this.twoDSeriesX);
          var d2 = t3[c2].data.map(function(t4) {
            return m.parseNumber(t4);
          });
          s2.series.push(d2);
        }
        s2.seriesZ.push(this.threeDSeries), void 0 !== t3[c2].color ? s2.seriesColors.push(t3[c2].color) : s2.seriesColors.push(void 0);
      }
      return this.w;
    } }, { key: "parseDataNonAxisCharts", value: function(t3) {
      var e2 = this.w.globals, i2 = this.w.config;
      e2.series = t3.slice(), e2.seriesNames = i2.labels.slice();
      for (var a2 = 0; a2 < e2.series.length; a2++) void 0 === e2.seriesNames[a2] && e2.seriesNames.push("series-" + (a2 + 1));
      return this.w;
    } }, { key: "handleExternalLabelsData", value: function(t3) {
      var e2 = this.w.config, i2 = this.w.globals;
      if (e2.xaxis.categories.length > 0) i2.labels = e2.xaxis.categories;
      else if (e2.labels.length > 0) i2.labels = e2.labels.slice();
      else if (this.fallbackToCategory) {
        if (i2.labels = i2.labels[0], i2.seriesRange.length && (i2.seriesRange.map(function(t4) {
          t4.forEach(function(t5) {
            i2.labels.indexOf(t5.x) < 0 && t5.x && i2.labels.push(t5.x);
          });
        }), i2.labels = Array.from(new Set(i2.labels.map(JSON.stringify)), JSON.parse)), e2.xaxis.convertedCatToNumeric) new F(e2).convertCatToNumericXaxis(e2, this.ctx, i2.seriesX[0]), this._generateExternalLabels(t3);
      } else this._generateExternalLabels(t3);
    } }, { key: "_generateExternalLabels", value: function(t3) {
      var e2 = this.w.globals, i2 = this.w.config, a2 = [];
      if (e2.axisCharts) {
        if (e2.series.length > 0) if (this.isFormatXY()) for (var s2 = i2.series.map(function(t4, e3) {
          return t4.data.filter(function(t5, e4, i3) {
            return i3.findIndex(function(e5) {
              return e5.x === t5.x;
            }) === e4;
          });
        }), r2 = s2.reduce(function(t4, e3, i3, a3) {
          return a3[t4].length > e3.length ? t4 : i3;
        }, 0), o2 = 0; o2 < s2[r2].length; o2++) a2.push(o2 + 1);
        else for (var n2 = 0; n2 < e2.series[e2.maxValsInArrayIndex].length; n2++) a2.push(n2 + 1);
        e2.seriesX = [];
        for (var l2 = 0; l2 < t3.length; l2++) e2.seriesX.push(a2);
        this.w.globals.isBarHorizontal || (e2.isXNumeric = true);
      }
      if (0 === a2.length) {
        a2 = e2.axisCharts ? [] : e2.series.map(function(t4, e3) {
          return e3 + 1;
        });
        for (var h2 = 0; h2 < t3.length; h2++) e2.seriesX.push(a2);
      }
      e2.labels = a2, i2.xaxis.convertedCatToNumeric && (e2.categoryLabels = a2.map(function(t4) {
        return i2.xaxis.labels.formatter(t4);
      })), e2.noLabelsProvided = true;
    } }, { key: "parseData", value: function(t3) {
      var e2 = this.w, i2 = e2.config, a2 = e2.globals;
      if (this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = false, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), a2.axisCharts ? (this.parseDataAxisCharts(t3), this.coreUtils.getLargestSeries()) : this.parseDataNonAxisCharts(t3), i2.chart.stacked) {
        var s2 = new V(this.ctx);
        a2.series = s2.setNullSeriesToZeroValues(a2.series);
      }
      this.coreUtils.getSeriesTotals(), a2.axisCharts && (a2.stackedSeriesTotals = this.coreUtils.getStackedSeriesTotals(), a2.stackedSeriesTotalsByGroups = this.coreUtils.getStackedSeriesTotalsByGroups()), this.coreUtils.getPercentSeries(), a2.dataFormatXNumeric || a2.isXNumeric && ("numeric" !== i2.xaxis.type || 0 !== i2.labels.length || 0 !== i2.xaxis.categories.length) || this.handleExternalLabelsData(t3);
      for (var r2 = this.coreUtils.getCategoryLabels(a2.labels), o2 = 0; o2 < r2.length; o2++) if (Array.isArray(r2[o2])) {
        a2.isMultiLineX = true;
        break;
      }
    } }, { key: "excludeCollapsedSeriesInYAxis", value: function() {
      var t3 = this.w, e2 = [];
      t3.globals.seriesYAxisMap.forEach(function(i2, a2) {
        var s2 = 0;
        i2.forEach(function(e3) {
          -1 !== t3.globals.collapsedSeriesIndices.indexOf(e3) && s2++;
        }), s2 > 0 && s2 == i2.length && e2.push(a2);
      }), t3.globals.ignoreYAxisIndexes = e2.map(function(t4) {
        return t4;
      });
    } }]), t2;
  }(), U = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "scaleSvgNode", value: function(t3, e2) {
      var i2 = parseFloat(t3.getAttributeNS(null, "width")), a2 = parseFloat(t3.getAttributeNS(null, "height"));
      t3.setAttributeNS(null, "width", i2 * e2), t3.setAttributeNS(null, "height", a2 * e2), t3.setAttributeNS(null, "viewBox", "0 0 " + i2 + " " + a2);
    } }, { key: "getSvgString", value: function() {
      var t3 = this;
      return new Promise(function(e2) {
        var i2 = t3.w, a2 = i2.config.chart.toolbar.export.width, s2 = i2.config.chart.toolbar.export.scale || a2 / i2.globals.svgWidth;
        s2 || (s2 = 1);
        var r2 = t3.w.globals.dom.Paper.svg(), o2 = t3.w.globals.dom.Paper.node.cloneNode(true);
        1 !== s2 && t3.scaleSvgNode(o2, s2), t3.convertImagesToBase64(o2).then(function() {
          r2 = new XMLSerializer().serializeToString(o2), e2(r2.replace(/&nbsp;/g, "&#160;"));
        });
      });
    } }, { key: "convertImagesToBase64", value: function(t3) {
      var e2 = this, i2 = t3.getElementsByTagName("image"), a2 = Array.from(i2).map(function(t4) {
        var i3 = t4.getAttributeNS("http://www.w3.org/1999/xlink", "href");
        return i3 && !i3.startsWith("data:") ? e2.getBase64FromUrl(i3).then(function(e3) {
          t4.setAttributeNS("http://www.w3.org/1999/xlink", "href", e3);
        }).catch(function(t5) {
          console.error("Error converting image to base64:", t5);
        }) : Promise.resolve();
      });
      return Promise.all(a2);
    } }, { key: "getBase64FromUrl", value: function(t3) {
      return new Promise(function(e2, i2) {
        var a2 = new Image();
        a2.crossOrigin = "Anonymous", a2.onload = function() {
          var t4 = document.createElement("canvas");
          t4.width = a2.width, t4.height = a2.height, t4.getContext("2d").drawImage(a2, 0, 0), e2(t4.toDataURL());
        }, a2.onerror = i2, a2.src = t3;
      });
    } }, { key: "cleanup", value: function() {
      var t3 = this.w, e2 = t3.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"), i2 = t3.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"), a2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");
      Array.prototype.forEach.call(a2, function(t4) {
        t4.setAttribute("width", 0);
      }), e2 && e2[0] && (e2[0].setAttribute("x", -500), e2[0].setAttribute("x1", -500), e2[0].setAttribute("x2", -500)), i2 && i2[0] && (i2[0].setAttribute("y", -100), i2[0].setAttribute("y1", -100), i2[0].setAttribute("y2", -100));
    } }, { key: "svgUrl", value: function() {
      var t3 = this;
      return new Promise(function(e2) {
        t3.cleanup(), t3.getSvgString().then(function(t4) {
          var i2 = new Blob([t4], { type: "image/svg+xml;charset=utf-8" });
          e2(URL.createObjectURL(i2));
        });
      });
    } }, { key: "dataURI", value: function(t3) {
      var e2 = this;
      return new Promise(function(i2) {
        var a2 = e2.w, s2 = t3 ? t3.scale || t3.width / a2.globals.svgWidth : 1;
        e2.cleanup();
        var r2 = document.createElement("canvas");
        r2.width = a2.globals.svgWidth * s2, r2.height = parseInt(a2.globals.dom.elWrap.style.height, 10) * s2;
        var o2 = "transparent" !== a2.config.chart.background && a2.config.chart.background ? a2.config.chart.background : "#fff", n2 = r2.getContext("2d");
        n2.fillStyle = o2, n2.fillRect(0, 0, r2.width * s2, r2.height * s2), e2.getSvgString().then(function(t4) {
          var e3 = "data:image/svg+xml," + encodeURIComponent(t4), a3 = new Image();
          a3.crossOrigin = "anonymous", a3.onload = function() {
            if (n2.drawImage(a3, 0, 0), r2.msToBlob) {
              var t5 = r2.msToBlob();
              i2({ blob: t5 });
            } else {
              var e4 = r2.toDataURL("image/png");
              i2({ imgURI: e4 });
            }
          }, a3.src = e3;
        });
      });
    } }, { key: "exportToSVG", value: function() {
      var t3 = this;
      this.svgUrl().then(function(e2) {
        t3.triggerDownload(e2, t3.w.config.chart.toolbar.export.svg.filename, ".svg");
      });
    } }, { key: "exportToPng", value: function() {
      var t3 = this, e2 = this.w.config.chart.toolbar.export.scale, i2 = this.w.config.chart.toolbar.export.width, a2 = e2 ? { scale: e2 } : i2 ? { width: i2 } : void 0;
      this.dataURI(a2).then(function(e3) {
        var i3 = e3.imgURI, a3 = e3.blob;
        a3 ? navigator.msSaveOrOpenBlob(a3, t3.w.globals.chartID + ".png") : t3.triggerDownload(i3, t3.w.config.chart.toolbar.export.png.filename, ".png");
      });
    } }, { key: "exportToCSV", value: function(t3) {
      var e2 = this, i2 = t3.series, a2 = t3.fileName, s2 = t3.columnDelimiter, r2 = void 0 === s2 ? "," : s2, o2 = t3.lineDelimiter, n2 = void 0 === o2 ? "\n" : o2, l2 = this.w;
      i2 || (i2 = l2.config.series);
      var h2, c2, d2 = [], g2 = [], u2 = "", f2 = l2.globals.series.map(function(t4, e3) {
        return -1 === l2.globals.collapsedSeriesIndices.indexOf(e3) ? t4 : [];
      }), x2 = function(t4) {
        return "function" == typeof l2.config.chart.toolbar.export.csv.categoryFormatter ? l2.config.chart.toolbar.export.csv.categoryFormatter(t4) : "datetime" === l2.config.xaxis.type && String(t4).length >= 10 ? new Date(t4).toDateString() : m.isNumber(t4) ? t4 : t4.split(r2).join("");
      }, b2 = function(t4) {
        return "function" == typeof l2.config.chart.toolbar.export.csv.valueFormatter ? l2.config.chart.toolbar.export.csv.valueFormatter(t4) : t4;
      }, v2 = Math.max.apply(Math, p(i2.map(function(t4) {
        return t4.data ? t4.data.length : 0;
      }))), y2 = new _(this.ctx), w2 = new M(this.ctx), k2 = function(t4) {
        var i3 = "";
        if (l2.globals.axisCharts) {
          if ("category" === l2.config.xaxis.type || l2.config.xaxis.convertedCatToNumeric) if (l2.globals.isBarHorizontal) {
            var a3 = l2.globals.yLabelFormatters[0], s3 = new V(e2.ctx).getActiveConfigSeriesIndex();
            i3 = a3(l2.globals.labels[t4], { seriesIndex: s3, dataPointIndex: t4, w: l2 });
          } else i3 = w2.getLabel(l2.globals.labels, l2.globals.timescaleLabels, 0, t4).text;
          "datetime" === l2.config.xaxis.type && (l2.config.xaxis.categories.length ? i3 = l2.config.xaxis.categories[t4] : l2.config.labels.length && (i3 = l2.config.labels[t4]));
        } else i3 = l2.config.labels[t4];
        return null === i3 ? "nullvalue" : (Array.isArray(i3) && (i3 = i3.join(" ")), m.isNumber(i3) ? i3 : i3.split(r2).join(""));
      }, A2 = function(t4, e3) {
        if (d2.length && 0 === e3 && g2.push(d2.join(r2)), t4.data) {
          t4.data = t4.data.length && t4.data || p(Array(v2)).map(function() {
            return "";
          });
          for (var a3 = 0; a3 < t4.data.length; a3++) {
            d2 = [];
            var s3 = k2(a3);
            if ("nullvalue" !== s3) {
              if (s3 || (y2.isFormatXY() ? s3 = i2[e3].data[a3].x : y2.isFormat2DArray() && (s3 = i2[e3].data[a3] ? i2[e3].data[a3][0] : "")), 0 === e3) {
                d2.push(x2(s3));
                for (var o3 = 0; o3 < l2.globals.series.length; o3++) {
                  var n3, h3 = y2.isFormatXY() ? null === (n3 = i2[o3].data[a3]) || void 0 === n3 ? void 0 : n3.y : f2[o3][a3];
                  d2.push(b2(h3));
                }
              }
              ("candlestick" === l2.config.chart.type || t4.type && "candlestick" === t4.type) && (d2.pop(), d2.push(l2.globals.seriesCandleO[e3][a3]), d2.push(l2.globals.seriesCandleH[e3][a3]), d2.push(l2.globals.seriesCandleL[e3][a3]), d2.push(l2.globals.seriesCandleC[e3][a3])), ("boxPlot" === l2.config.chart.type || t4.type && "boxPlot" === t4.type) && (d2.pop(), d2.push(l2.globals.seriesCandleO[e3][a3]), d2.push(l2.globals.seriesCandleH[e3][a3]), d2.push(l2.globals.seriesCandleM[e3][a3]), d2.push(l2.globals.seriesCandleL[e3][a3]), d2.push(l2.globals.seriesCandleC[e3][a3])), "rangeBar" === l2.config.chart.type && (d2.pop(), d2.push(l2.globals.seriesRangeStart[e3][a3]), d2.push(l2.globals.seriesRangeEnd[e3][a3])), d2.length && g2.push(d2.join(r2));
            }
          }
        }
      };
      d2.push(l2.config.chart.toolbar.export.csv.headerCategory), "boxPlot" === l2.config.chart.type ? (d2.push("minimum"), d2.push("q1"), d2.push("median"), d2.push("q3"), d2.push("maximum")) : "candlestick" === l2.config.chart.type ? (d2.push("open"), d2.push("high"), d2.push("low"), d2.push("close")) : "rangeBar" === l2.config.chart.type ? (d2.push("minimum"), d2.push("maximum")) : i2.map(function(t4, e3) {
        var i3 = (t4.name ? t4.name : "series-".concat(e3)) + "";
        l2.globals.axisCharts && d2.push(i3.split(r2).join("") ? i3.split(r2).join("") : "series-".concat(e3));
      }), l2.globals.axisCharts || (d2.push(l2.config.chart.toolbar.export.csv.headerValue), g2.push(d2.join(r2))), l2.globals.allSeriesHasEqualX || !l2.globals.axisCharts || l2.config.xaxis.categories.length || l2.config.labels.length ? i2.map(function(t4, e3) {
        l2.globals.axisCharts ? A2(t4, e3) : ((d2 = []).push(x2(l2.globals.labels[e3])), d2.push(b2(f2[e3])), g2.push(d2.join(r2)));
      }) : (h2 = /* @__PURE__ */ new Set(), c2 = {}, i2.forEach(function(t4, e3) {
        null == t4 || t4.data.forEach(function(t5) {
          var a3, s3;
          if (y2.isFormatXY()) a3 = t5.x, s3 = t5.y;
          else {
            if (!y2.isFormat2DArray()) return;
            a3 = t5[0], s3 = t5[1];
          }
          c2[a3] || (c2[a3] = Array(i2.length).fill("")), c2[a3][e3] = b2(s3), h2.add(a3);
        });
      }), d2.length && g2.push(d2.join(r2)), Array.from(h2).sort().forEach(function(t4) {
        g2.push([x2(t4), c2[t4].join(r2)]);
      })), u2 += g2.join(n2), this.triggerDownload("data:text/csv; charset=utf-8," + encodeURIComponent("\uFEFF" + u2), a2 || l2.config.chart.toolbar.export.csv.filename, ".csv");
    } }, { key: "triggerDownload", value: function(t3, e2, i2) {
      var a2 = document.createElement("a");
      a2.href = t3, a2.download = (e2 || this.w.globals.chartID) + i2, document.body.appendChild(a2), a2.click(), document.body.removeChild(a2);
    } }]), t2;
  }(), q = function() {
    function t2(e2, a2) {
      i(this, t2), this.ctx = e2, this.elgrid = a2, this.w = e2.w;
      var s2 = this.w;
      this.axesUtils = new M(e2), this.xaxisLabels = s2.globals.labels.slice(), s2.globals.timescaleLabels.length > 0 && !s2.globals.isBarHorizontal && (this.xaxisLabels = s2.globals.timescaleLabels.slice()), s2.config.xaxis.overwriteCategories && (this.xaxisLabels = s2.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], "top" === s2.config.xaxis.position ? this.offY = 0 : this.offY = s2.globals.gridHeight, this.offY = this.offY + s2.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = "bar" === s2.config.chart.type && s2.config.plotOptions.bar.horizontal, this.xaxisFontSize = s2.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = s2.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = s2.config.xaxis.labels.style.colors, this.xaxisBorderWidth = s2.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = s2.config.yaxis[0].axisBorder.width.toString()), this.xaxisBorderWidth.indexOf("%") > -1 ? this.xaxisBorderWidth = s2.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = s2.config.xaxis.axisBorder.height, this.yaxis = s2.config.yaxis[0];
    }
    return s(t2, [{ key: "drawXaxis", value: function() {
      var t3 = this.w, e2 = new k(this.ctx), i2 = e2.group({ class: "apexcharts-xaxis", transform: "translate(".concat(t3.config.xaxis.offsetX, ", ").concat(t3.config.xaxis.offsetY, ")") }), a2 = e2.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(t3.globals.translateXAxisX, ", ").concat(t3.globals.translateXAxisY, ")") });
      i2.add(a2);
      for (var s2 = [], r2 = 0; r2 < this.xaxisLabels.length; r2++) s2.push(this.xaxisLabels[r2]);
      if (this.drawXAxisLabelAndGroup(true, e2, a2, s2, t3.globals.isXNumeric, function(t4, e3) {
        return e3;
      }), t3.globals.hasXaxisGroups) {
        var o2 = t3.globals.groups;
        s2 = [];
        for (var n2 = 0; n2 < o2.length; n2++) s2.push(o2[n2].title);
        var l2 = {};
        t3.config.xaxis.group.style && (l2.xaxisFontSize = t3.config.xaxis.group.style.fontSize, l2.xaxisFontFamily = t3.config.xaxis.group.style.fontFamily, l2.xaxisForeColors = t3.config.xaxis.group.style.colors, l2.fontWeight = t3.config.xaxis.group.style.fontWeight, l2.cssClass = t3.config.xaxis.group.style.cssClass), this.drawXAxisLabelAndGroup(false, e2, a2, s2, false, function(t4, e3) {
          return o2[t4].cols * e3;
        }, l2);
      }
      if (void 0 !== t3.config.xaxis.title.text) {
        var h2 = e2.group({ class: "apexcharts-xaxis-title" }), c2 = e2.drawText({ x: t3.globals.gridWidth / 2 + t3.config.xaxis.title.offsetX, y: this.offY + parseFloat(this.xaxisFontSize) + ("bottom" === t3.config.xaxis.position ? t3.globals.xAxisLabelsHeight : -t3.globals.xAxisLabelsHeight - 10) + t3.config.xaxis.title.offsetY, text: t3.config.xaxis.title.text, textAnchor: "middle", fontSize: t3.config.xaxis.title.style.fontSize, fontFamily: t3.config.xaxis.title.style.fontFamily, fontWeight: t3.config.xaxis.title.style.fontWeight, foreColor: t3.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + t3.config.xaxis.title.style.cssClass });
        h2.add(c2), i2.add(h2);
      }
      if (t3.config.xaxis.axisBorder.show) {
        var d2 = t3.globals.barPadForNumericAxis, g2 = e2.drawLine(t3.globals.padHorizontal + t3.config.xaxis.axisBorder.offsetX - d2, this.offY, this.xaxisBorderWidth + d2, this.offY, t3.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
        this.elgrid && this.elgrid.elGridBorders && t3.config.grid.show ? this.elgrid.elGridBorders.add(g2) : i2.add(g2);
      }
      return i2;
    } }, { key: "drawXAxisLabelAndGroup", value: function(t3, e2, i2, a2, s2, r2) {
      var o2, n2 = this, l2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {}, h2 = [], c2 = [], d2 = this.w, g2 = l2.xaxisFontSize || this.xaxisFontSize, u2 = l2.xaxisFontFamily || this.xaxisFontFamily, f2 = l2.xaxisForeColors || this.xaxisForeColors, p2 = l2.fontWeight || d2.config.xaxis.labels.style.fontWeight, x2 = l2.cssClass || d2.config.xaxis.labels.style.cssClass, b2 = d2.globals.padHorizontal, v2 = a2.length, m2 = "category" === d2.config.xaxis.type ? d2.globals.dataPoints : v2;
      if (0 === m2 && v2 > m2 && (m2 = v2), s2) {
        var y2 = m2 > 1 ? m2 - 1 : m2;
        o2 = d2.globals.gridWidth / Math.min(y2, v2 - 1), b2 = b2 + r2(0, o2) / 2 + d2.config.xaxis.labels.offsetX;
      } else o2 = d2.globals.gridWidth / m2, b2 = b2 + r2(0, o2) + d2.config.xaxis.labels.offsetX;
      for (var w2 = function(s3) {
        var l3 = b2 - r2(s3, o2) / 2 + d2.config.xaxis.labels.offsetX;
        0 === s3 && 1 === v2 && o2 / 2 === b2 && 1 === m2 && (l3 = d2.globals.gridWidth / 2);
        var y3 = n2.axesUtils.getLabel(a2, d2.globals.timescaleLabels, l3, s3, h2, g2, t3), w3 = 28;
        d2.globals.rotateXLabels && t3 && (w3 = 22), d2.config.xaxis.title.text && "top" === d2.config.xaxis.position && (w3 += parseFloat(d2.config.xaxis.title.style.fontSize) + 2), t3 || (w3 = w3 + parseFloat(g2) + (d2.globals.xAxisLabelsHeight - d2.globals.xAxisGroupLabelsHeight) + (d2.globals.rotateXLabels ? 10 : 0)), y3 = void 0 !== d2.config.xaxis.tickAmount && "dataPoints" !== d2.config.xaxis.tickAmount && "datetime" !== d2.config.xaxis.type ? n2.axesUtils.checkLabelBasedOnTickamount(s3, y3, v2) : n2.axesUtils.checkForOverflowingLabels(s3, y3, v2, h2, c2);
        if (d2.config.xaxis.labels.show) {
          var k3 = e2.drawText({ x: y3.x, y: n2.offY + d2.config.xaxis.labels.offsetY + w3 - ("top" === d2.config.xaxis.position ? d2.globals.xAxisHeight + d2.config.xaxis.axisTicks.height - 2 : 0), text: y3.text, textAnchor: "middle", fontWeight: y3.isBold ? 600 : p2, fontSize: g2, fontFamily: u2, foreColor: Array.isArray(f2) ? t3 && d2.config.xaxis.convertedCatToNumeric ? f2[d2.globals.minX + s3 - 1] : f2[s3] : f2, isPlainText: false, cssClass: (t3 ? "apexcharts-xaxis-label " : "apexcharts-xaxis-group-label ") + x2 });
          if (i2.add(k3), k3.on("click", function(t4) {
            if ("function" == typeof d2.config.chart.events.xAxisLabelClick) {
              var e3 = Object.assign({}, d2, { labelIndex: s3 });
              d2.config.chart.events.xAxisLabelClick(t4, n2.ctx, e3);
            }
          }), t3) {
            var A2 = document.createElementNS(d2.globals.SVGNS, "title");
            A2.textContent = Array.isArray(y3.text) ? y3.text.join(" ") : y3.text, k3.node.appendChild(A2), "" !== y3.text && (h2.push(y3.text), c2.push(y3));
          }
        }
        s3 < v2 - 1 && (b2 += r2(s3 + 1, o2));
      }, k2 = 0; k2 <= v2 - 1; k2++) w2(k2);
    } }, { key: "drawXaxisInversed", value: function(t3) {
      var e2, i2, a2 = this, s2 = this.w, r2 = new k(this.ctx), o2 = s2.config.yaxis[0].opposite ? s2.globals.translateYAxisX[t3] : 0, n2 = r2.group({ class: "apexcharts-yaxis apexcharts-xaxis-inversed", rel: t3 }), l2 = r2.group({ class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g", transform: "translate(" + o2 + ", 0)" });
      n2.add(l2);
      var h2 = [];
      if (s2.config.yaxis[t3].show) for (var c2 = 0; c2 < this.xaxisLabels.length; c2++) h2.push(this.xaxisLabels[c2]);
      e2 = s2.globals.gridHeight / h2.length, i2 = -e2 / 2.2;
      var d2 = s2.globals.yLabelFormatters[0], g2 = s2.config.yaxis[0].labels;
      if (g2.show) for (var u2 = function(o3) {
        var n3 = void 0 === h2[o3] ? "" : h2[o3];
        n3 = d2(n3, { seriesIndex: t3, dataPointIndex: o3, w: s2 });
        var c3 = a2.axesUtils.getYAxisForeColor(g2.style.colors, t3), u3 = 0;
        Array.isArray(n3) && (u3 = n3.length / 2 * parseInt(g2.style.fontSize, 10));
        var f3 = g2.offsetX - 15, p3 = "end";
        a2.yaxis.opposite && (p3 = "start"), "left" === s2.config.yaxis[0].labels.align ? (f3 = g2.offsetX, p3 = "start") : "center" === s2.config.yaxis[0].labels.align ? (f3 = g2.offsetX, p3 = "middle") : "right" === s2.config.yaxis[0].labels.align && (p3 = "end");
        var x3 = r2.drawText({ x: f3, y: i2 + e2 + g2.offsetY - u3, text: n3, textAnchor: p3, foreColor: Array.isArray(c3) ? c3[o3] : c3, fontSize: g2.style.fontSize, fontFamily: g2.style.fontFamily, fontWeight: g2.style.fontWeight, isPlainText: false, cssClass: "apexcharts-yaxis-label " + g2.style.cssClass, maxWidth: g2.maxWidth });
        l2.add(x3), x3.on("click", function(t4) {
          if ("function" == typeof s2.config.chart.events.xAxisLabelClick) {
            var e3 = Object.assign({}, s2, { labelIndex: o3 });
            s2.config.chart.events.xAxisLabelClick(t4, a2.ctx, e3);
          }
        });
        var b3 = document.createElementNS(s2.globals.SVGNS, "title");
        if (b3.textContent = Array.isArray(n3) ? n3.join(" ") : n3, x3.node.appendChild(b3), 0 !== s2.config.yaxis[t3].labels.rotate) {
          var v3 = r2.rotateAroundCenter(x3.node);
          x3.node.setAttribute("transform", "rotate(".concat(s2.config.yaxis[t3].labels.rotate, " 0 ").concat(v3.y, ")"));
        }
        i2 += e2;
      }, f2 = 0; f2 <= h2.length - 1; f2++) u2(f2);
      if (void 0 !== s2.config.yaxis[0].title.text) {
        var p2 = r2.group({ class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed", transform: "translate(" + o2 + ", 0)" }), x2 = r2.drawText({ x: s2.config.yaxis[0].title.offsetX, y: s2.globals.gridHeight / 2 + s2.config.yaxis[0].title.offsetY, text: s2.config.yaxis[0].title.text, textAnchor: "middle", foreColor: s2.config.yaxis[0].title.style.color, fontSize: s2.config.yaxis[0].title.style.fontSize, fontWeight: s2.config.yaxis[0].title.style.fontWeight, fontFamily: s2.config.yaxis[0].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + s2.config.yaxis[0].title.style.cssClass });
        p2.add(x2), n2.add(p2);
      }
      var b2 = 0;
      this.isCategoryBarHorizontal && s2.config.yaxis[0].opposite && (b2 = s2.globals.gridWidth);
      var v2 = s2.config.xaxis.axisBorder;
      if (v2.show) {
        var m2 = r2.drawLine(s2.globals.padHorizontal + v2.offsetX + b2, 1 + v2.offsetY, s2.globals.padHorizontal + v2.offsetX + b2, s2.globals.gridHeight + v2.offsetY, v2.color, 0);
        this.elgrid && this.elgrid.elGridBorders && s2.config.grid.show ? this.elgrid.elGridBorders.add(m2) : n2.add(m2);
      }
      return s2.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(b2, h2.length, s2.config.yaxis[0].axisBorder, s2.config.yaxis[0].axisTicks, 0, e2, n2), n2;
    } }, { key: "drawXaxisTicks", value: function(t3, e2, i2) {
      var a2 = this.w, s2 = t3;
      if (!(t3 < 0 || t3 - 2 > a2.globals.gridWidth)) {
        var r2 = this.offY + a2.config.xaxis.axisTicks.offsetY;
        if (e2 = e2 + r2 + a2.config.xaxis.axisTicks.height, "top" === a2.config.xaxis.position && (e2 = r2 - a2.config.xaxis.axisTicks.height), a2.config.xaxis.axisTicks.show) {
          var o2 = new k(this.ctx).drawLine(t3 + a2.config.xaxis.axisTicks.offsetX, r2 + a2.config.xaxis.offsetY, s2 + a2.config.xaxis.axisTicks.offsetX, e2 + a2.config.xaxis.offsetY, a2.config.xaxis.axisTicks.color);
          i2.add(o2), o2.node.classList.add("apexcharts-xaxis-tick");
        }
      }
    } }, { key: "getXAxisTicksPositions", value: function() {
      var t3 = this.w, e2 = [], i2 = this.xaxisLabels.length, a2 = t3.globals.padHorizontal;
      if (t3.globals.timescaleLabels.length > 0) for (var s2 = 0; s2 < i2; s2++) a2 = this.xaxisLabels[s2].position, e2.push(a2);
      else for (var r2 = i2, o2 = 0; o2 < r2; o2++) {
        var n2 = r2;
        t3.globals.isXNumeric && "bar" !== t3.config.chart.type && (n2 -= 1), a2 += t3.globals.gridWidth / n2, e2.push(a2);
      }
      return e2;
    } }, { key: "xAxisLabelCorrections", value: function() {
      var t3 = this.w, e2 = new k(this.ctx), i2 = t3.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"), a2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"), s2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"), r2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
      if (t3.globals.rotateXLabels || t3.config.xaxis.labels.rotateAlways) for (var o2 = 0; o2 < a2.length; o2++) {
        var n2 = e2.rotateAroundCenter(a2[o2]);
        n2.y = n2.y - 1, n2.x = n2.x + 1, a2[o2].setAttribute("transform", "rotate(".concat(t3.config.xaxis.labels.rotate, " ").concat(n2.x, " ").concat(n2.y, ")")), a2[o2].setAttribute("text-anchor", "end");
        i2.setAttribute("transform", "translate(0, ".concat(-10, ")"));
        var l2 = a2[o2].childNodes;
        t3.config.xaxis.labels.trim && Array.prototype.forEach.call(l2, function(i3) {
          e2.placeTextWithEllipsis(i3, i3.textContent, t3.globals.xAxisLabelsHeight - ("bottom" === t3.config.legend.position ? 20 : 10));
        });
      }
      else !function() {
        for (var i3 = t3.globals.gridWidth / (t3.globals.labels.length + 1), s3 = 0; s3 < a2.length; s3++) {
          var r3 = a2[s3].childNodes;
          t3.config.xaxis.labels.trim && "datetime" !== t3.config.xaxis.type && Array.prototype.forEach.call(r3, function(t4) {
            e2.placeTextWithEllipsis(t4, t4.textContent, i3);
          });
        }
      }();
      if (s2.length > 0) {
        var h2 = s2[s2.length - 1].getBBox(), c2 = s2[0].getBBox();
        h2.x < -20 && s2[s2.length - 1].parentNode.removeChild(s2[s2.length - 1]), c2.x + c2.width > t3.globals.gridWidth && !t3.globals.isBarHorizontal && s2[0].parentNode.removeChild(s2[0]);
        for (var d2 = 0; d2 < r2.length; d2++) e2.placeTextWithEllipsis(r2[d2], r2[d2].textContent, t3.config.yaxis[0].labels.maxWidth - (t3.config.yaxis[0].title.text ? 2 * parseFloat(t3.config.yaxis[0].title.style.fontSize) : 0) - 15);
      }
    } }]), t2;
  }(), Z = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
      var a2 = this.w;
      this.xaxisLabels = a2.globals.labels.slice(), this.axesUtils = new M(e2), this.isRangeBar = a2.globals.seriesRange.length && a2.globals.isBarHorizontal, a2.globals.timescaleLabels.length > 0 && (this.xaxisLabels = a2.globals.timescaleLabels.slice());
    }
    return s(t2, [{ key: "drawGridArea", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e2 = this.w, i2 = new k(this.ctx);
      t3 || (t3 = i2.group({ class: "apexcharts-grid" }));
      var a2 = i2.drawLine(e2.globals.padHorizontal, 1, e2.globals.padHorizontal, e2.globals.gridHeight, "transparent"), s2 = i2.drawLine(e2.globals.padHorizontal, e2.globals.gridHeight, e2.globals.gridWidth, e2.globals.gridHeight, "transparent");
      return t3.add(s2), t3.add(a2), t3;
    } }, { key: "drawGrid", value: function() {
      if (this.w.globals.axisCharts) {
        var t3 = this.renderGrid();
        return this.drawGridArea(t3.el), t3;
      }
      return null;
    } }, { key: "createGridMask", value: function() {
      var t3 = this.w, e2 = t3.globals, i2 = new k(this.ctx), a2 = Array.isArray(t3.config.stroke.width) ? Math.max.apply(Math, p(t3.config.stroke.width)) : t3.config.stroke.width, s2 = function(t4) {
        var i3 = document.createElementNS(e2.SVGNS, "clipPath");
        return i3.setAttribute("id", t4), i3;
      };
      e2.dom.elGridRectMask = s2("gridRectMask".concat(e2.cuid)), e2.dom.elGridRectBarMask = s2("gridRectBarMask".concat(e2.cuid)), e2.dom.elGridRectMarkerMask = s2("gridRectMarkerMask".concat(e2.cuid)), e2.dom.elForecastMask = s2("forecastMask".concat(e2.cuid)), e2.dom.elNonForecastMask = s2("nonForecastMask".concat(e2.cuid));
      var r2 = 0, o2 = 0;
      (["bar", "rangeBar", "candlestick", "boxPlot"].includes(t3.config.chart.type) || t3.globals.comboBarCount > 0) && t3.globals.isXNumeric && !t3.globals.isBarHorizontal && (r2 = Math.max(t3.config.grid.padding.left, e2.barPadForNumericAxis), o2 = Math.max(t3.config.grid.padding.right, e2.barPadForNumericAxis)), e2.dom.elGridRect = i2.drawRect(0, 0, e2.gridWidth, e2.gridHeight, 0, "#fff"), e2.dom.elGridRectBar = i2.drawRect(-a2 / 2 - r2 - 2, -a2 / 2 - 2, e2.gridWidth + a2 + o2 + r2 + 4, e2.gridHeight + a2 + 4, 0, "#fff");
      var n2 = t3.globals.markers.largestSize;
      e2.dom.elGridRectMarker = i2.drawRect(-n2, -n2, e2.gridWidth + 2 * n2, e2.gridHeight + 2 * n2, 0, "#fff"), e2.dom.elGridRectMask.appendChild(e2.dom.elGridRect.node), e2.dom.elGridRectBarMask.appendChild(e2.dom.elGridRectBar.node), e2.dom.elGridRectMarkerMask.appendChild(e2.dom.elGridRectMarker.node);
      var l2 = e2.dom.baseEl.querySelector("defs");
      l2.appendChild(e2.dom.elGridRectMask), l2.appendChild(e2.dom.elGridRectBarMask), l2.appendChild(e2.dom.elGridRectMarkerMask), l2.appendChild(e2.dom.elForecastMask), l2.appendChild(e2.dom.elNonForecastMask);
    } }, { key: "_drawGridLines", value: function(t3) {
      var e2 = t3.i, i2 = t3.x1, a2 = t3.y1, s2 = t3.x2, r2 = t3.y2, o2 = t3.xCount, n2 = t3.parent, l2 = this.w;
      if (!(0 === e2 && l2.globals.skipFirstTimelinelabel || e2 === o2 - 1 && l2.globals.skipLastTimelinelabel && !l2.config.xaxis.labels.formatter || "radar" === l2.config.chart.type)) {
        l2.config.grid.xaxis.lines.show && this._drawGridLine({ i: e2, x1: i2, y1: a2, x2: s2, y2: r2, xCount: o2, parent: n2 });
        var h2 = 0;
        if (l2.globals.hasXaxisGroups && "between" === l2.config.xaxis.tickPlacement) {
          var c2 = l2.globals.groups;
          if (c2) {
            for (var d2 = 0, g2 = 0; d2 < e2 && g2 < c2.length; g2++) d2 += c2[g2].cols;
            d2 === e2 && (h2 = 0.6 * l2.globals.xAxisLabelsHeight);
          }
        }
        new q(this.ctx).drawXaxisTicks(i2, h2, l2.globals.dom.elGraphical);
      }
    } }, { key: "_drawGridLine", value: function(t3) {
      var e2 = t3.i, i2 = t3.x1, a2 = t3.y1, s2 = t3.x2, r2 = t3.y2, o2 = t3.xCount, n2 = t3.parent, l2 = this.w, h2 = n2.node.classList.contains("apexcharts-gridlines-horizontal"), c2 = l2.globals.barPadForNumericAxis, d2 = 0 === a2 && 0 === r2 || 0 === i2 && 0 === s2 || a2 === l2.globals.gridHeight && r2 === l2.globals.gridHeight || l2.globals.isBarHorizontal && (0 === e2 || e2 === o2 - 1), g2 = new k(this).drawLine(i2 - (h2 ? c2 : 0), a2, s2 + (h2 ? c2 : 0), r2, l2.config.grid.borderColor, l2.config.grid.strokeDashArray);
      g2.node.classList.add("apexcharts-gridline"), d2 && l2.config.grid.show ? this.elGridBorders.add(g2) : n2.add(g2);
    } }, { key: "_drawGridBandRect", value: function(t3) {
      var e2 = t3.c, i2 = t3.x1, a2 = t3.y1, s2 = t3.x2, r2 = t3.y2, o2 = t3.type, n2 = this.w, l2 = new k(this.ctx), h2 = n2.globals.barPadForNumericAxis, c2 = n2.config.grid[o2].colors[e2], d2 = l2.drawRect(i2 - ("row" === o2 ? h2 : 0), a2, s2 + ("row" === o2 ? 2 * h2 : 0), r2, 0, c2, n2.config.grid[o2].opacity);
      this.elg.add(d2), d2.attr("clip-path", "url(#gridRectMask".concat(n2.globals.cuid, ")")), d2.node.classList.add("apexcharts-grid-".concat(o2));
    } }, { key: "_drawXYLines", value: function(t3) {
      var e2 = this, i2 = t3.xCount, a2 = t3.tickAmount, s2 = this.w;
      if (s2.config.grid.xaxis.lines.show || s2.config.xaxis.axisTicks.show) {
        var r2, o2 = s2.globals.padHorizontal, n2 = s2.globals.gridHeight;
        s2.globals.timescaleLabels.length ? function(t4) {
          for (var a3 = t4.xC, s3 = t4.x1, r3 = t4.y1, o3 = t4.x2, n3 = t4.y2, l3 = 0; l3 < a3; l3++) s3 = e2.xaxisLabels[l3].position, o3 = e2.xaxisLabels[l3].position, e2._drawGridLines({ i: l3, x1: s3, y1: r3, x2: o3, y2: n3, xCount: i2, parent: e2.elgridLinesV });
        }({ xC: i2, x1: o2, y1: 0, x2: r2, y2: n2 }) : (s2.globals.isXNumeric && (i2 = s2.globals.xAxisScale.result.length), function(t4) {
          for (var a3 = t4.xC, r3 = t4.x1, o3 = t4.y1, n3 = t4.x2, l3 = t4.y2, h3 = 0; h3 < a3 + (s2.globals.isXNumeric ? 0 : 1); h3++) 0 === h3 && 1 === a3 && 1 === s2.globals.dataPoints && (n3 = r3 = s2.globals.gridWidth / 2), e2._drawGridLines({ i: h3, x1: r3, y1: o3, x2: n3, y2: l3, xCount: i2, parent: e2.elgridLinesV }), n3 = r3 += s2.globals.gridWidth / (s2.globals.isXNumeric ? a3 - 1 : a3);
        }({ xC: i2, x1: o2, y1: 0, x2: r2, y2: n2 }));
      }
      if (s2.config.grid.yaxis.lines.show) {
        var l2 = 0, h2 = 0, c2 = s2.globals.gridWidth, d2 = a2 + 1;
        this.isRangeBar && (d2 = s2.globals.labels.length);
        for (var g2 = 0; g2 < d2 + (this.isRangeBar ? 1 : 0); g2++) this._drawGridLine({ i: g2, xCount: d2 + (this.isRangeBar ? 1 : 0), x1: 0, y1: l2, x2: c2, y2: h2, parent: this.elgridLinesH }), h2 = l2 += s2.globals.gridHeight / (this.isRangeBar ? d2 : a2);
      }
    } }, { key: "_drawInvertedXYLines", value: function(t3) {
      var e2 = t3.xCount, i2 = this.w;
      if (i2.config.grid.xaxis.lines.show || i2.config.xaxis.axisTicks.show) for (var a2, s2 = i2.globals.padHorizontal, r2 = i2.globals.gridHeight, o2 = 0; o2 < e2 + 1; o2++) {
        i2.config.grid.xaxis.lines.show && this._drawGridLine({ i: o2, xCount: e2 + 1, x1: s2, y1: 0, x2: a2, y2: r2, parent: this.elgridLinesV }), new q(this.ctx).drawXaxisTicks(s2, 0, i2.globals.dom.elGraphical), a2 = s2 += i2.globals.gridWidth / e2;
      }
      if (i2.config.grid.yaxis.lines.show) for (var n2 = 0, l2 = 0, h2 = i2.globals.gridWidth, c2 = 0; c2 < i2.globals.dataPoints + 1; c2++) this._drawGridLine({ i: c2, xCount: i2.globals.dataPoints + 1, x1: 0, y1: n2, x2: h2, y2: l2, parent: this.elgridLinesH }), l2 = n2 += i2.globals.gridHeight / i2.globals.dataPoints;
    } }, { key: "renderGrid", value: function() {
      var t3 = this.w, e2 = t3.globals, i2 = new k(this.ctx);
      this.elg = i2.group({ class: "apexcharts-grid" }), this.elgridLinesH = i2.group({ class: "apexcharts-gridlines-horizontal" }), this.elgridLinesV = i2.group({ class: "apexcharts-gridlines-vertical" }), this.elGridBorders = i2.group({ class: "apexcharts-grid-borders" }), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), t3.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide(), this.elGridBorders.hide());
      for (var a2 = 0; a2 < e2.seriesYAxisMap.length && e2.ignoreYAxisIndexes.includes(a2); ) a2++;
      a2 === e2.seriesYAxisMap.length && (a2 = 0);
      var s2, r2 = e2.yAxisScale[a2].result.length - 1;
      if (!e2.isBarHorizontal || this.isRangeBar) {
        var o2, n2, l2;
        if (s2 = this.xaxisLabels.length, this.isRangeBar) r2 = e2.labels.length, t3.config.xaxis.tickAmount && t3.config.xaxis.labels.formatter && (s2 = t3.config.xaxis.tickAmount), (null === (o2 = e2.yAxisScale) || void 0 === o2 || null === (n2 = o2[a2]) || void 0 === n2 || null === (l2 = n2.result) || void 0 === l2 ? void 0 : l2.length) > 0 && "datetime" !== t3.config.xaxis.type && (s2 = e2.yAxisScale[a2].result.length - 1);
        this._drawXYLines({ xCount: s2, tickAmount: r2 });
      } else s2 = r2, r2 = e2.xTickAmount, this._drawInvertedXYLines({ xCount: s2, tickAmount: r2 });
      return this.drawGridBands(s2, r2), { el: this.elg, elGridBorders: this.elGridBorders, xAxisTickWidth: e2.gridWidth / s2 };
    } }, { key: "drawGridBands", value: function(t3, e2) {
      var i2, a2, s2 = this, r2 = this.w;
      if ((null === (i2 = r2.config.grid.row.colors) || void 0 === i2 ? void 0 : i2.length) > 0 && function(t4, i3, a3, o3, n3, l3) {
        for (var h3 = 0, c3 = 0; h3 < i3; h3++, c3++) c3 >= r2.config.grid[t4].colors.length && (c3 = 0), s2._drawGridBandRect({ c: c3, x1: a3, y1: o3, x2: n3, y2: l3, type: t4 }), o3 += r2.globals.gridHeight / e2;
      }("row", e2, 0, 0, r2.globals.gridWidth, r2.globals.gridHeight / e2), (null === (a2 = r2.config.grid.column.colors) || void 0 === a2 ? void 0 : a2.length) > 0) {
        var o2 = r2.globals.isBarHorizontal || "on" !== r2.config.xaxis.tickPlacement || "category" !== r2.config.xaxis.type && !r2.config.xaxis.convertedCatToNumeric ? t3 : t3 - 1;
        r2.globals.isXNumeric && (o2 = r2.globals.xAxisScale.result.length - 1);
        for (var n2 = r2.globals.padHorizontal, l2 = r2.globals.padHorizontal + r2.globals.gridWidth / o2, h2 = r2.globals.gridHeight, c2 = 0, d2 = 0; c2 < t3; c2++, d2++) {
          var g2;
          if (d2 >= r2.config.grid.column.colors.length && (d2 = 0), "datetime" === r2.config.xaxis.type) n2 = this.xaxisLabels[c2].position, l2 = ((null === (g2 = this.xaxisLabels[c2 + 1]) || void 0 === g2 ? void 0 : g2.position) || r2.globals.gridWidth) - this.xaxisLabels[c2].position;
          this._drawGridBandRect({ c: d2, x1: n2, y1: 0, x2: l2, y2: h2, type: "column" }), n2 += r2.globals.gridWidth / o2;
        }
      }
    } }]), t2;
  }(), $ = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w, this.coreUtils = new A(this.ctx);
    }
    return s(t2, [{ key: "niceScale", value: function(t3, e2) {
      var i2, a2, s2, r2, o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n2 = 1e-11, l2 = this.w, h2 = l2.globals;
      h2.isBarHorizontal ? (i2 = l2.config.xaxis, a2 = Math.max((h2.svgWidth - 100) / 25, 2)) : (i2 = l2.config.yaxis[o2], a2 = Math.max((h2.svgHeight - 100) / 15, 2)), m.isNumber(a2) || (a2 = 10), s2 = void 0 !== i2.min && null !== i2.min, r2 = void 0 !== i2.max && null !== i2.min;
      var c2 = void 0 !== i2.stepSize && null !== i2.stepSize, d2 = void 0 !== i2.tickAmount && null !== i2.tickAmount, g2 = d2 ? i2.tickAmount : h2.niceScaleDefaultTicks[Math.min(Math.round(a2 / 2), h2.niceScaleDefaultTicks.length - 1)];
      if (h2.isMultipleYAxis && !d2 && h2.multiAxisTickAmount > 0 && (g2 = h2.multiAxisTickAmount, d2 = true), g2 = "dataPoints" === g2 ? h2.dataPoints - 1 : Math.abs(Math.round(g2)), (t3 === Number.MIN_VALUE && 0 === e2 || !m.isNumber(t3) && !m.isNumber(e2) || t3 === Number.MIN_VALUE && e2 === -Number.MAX_VALUE) && (t3 = m.isNumber(i2.min) ? i2.min : 0, e2 = m.isNumber(i2.max) ? i2.max : t3 + g2, h2.allSeriesCollapsed = false), t3 > e2) {
        console.warn("axis.min cannot be greater than axis.max: swapping min and max");
        var u2 = e2;
        e2 = t3, t3 = u2;
      } else t3 === e2 && (t3 = 0 === t3 ? 0 : t3 - 1, e2 = 0 === e2 ? 2 : e2 + 1);
      var f2 = [];
      g2 < 1 && (g2 = 1);
      var p2 = g2, x2 = Math.abs(e2 - t3);
      !s2 && t3 > 0 && t3 / x2 < 0.15 && (t3 = 0, s2 = true), !r2 && e2 < 0 && -e2 / x2 < 0.15 && (e2 = 0, r2 = true);
      var b2 = (x2 = Math.abs(e2 - t3)) / p2, v2 = b2, y2 = Math.floor(Math.log10(v2)), w2 = Math.pow(10, y2), k2 = Math.ceil(v2 / w2);
      if (b2 = v2 = (k2 = h2.niceScaleAllowedMagMsd[0 === h2.yValueDecimal ? 0 : 1][k2]) * w2, h2.isBarHorizontal && i2.stepSize && "datetime" !== i2.type ? (b2 = i2.stepSize, c2 = true) : c2 && (b2 = i2.stepSize), c2 && i2.forceNiceScale) {
        var A2 = Math.floor(Math.log10(b2));
        b2 *= Math.pow(10, y2 - A2);
      }
      if (s2 && r2) {
        var S2 = x2 / p2;
        if (d2) if (c2) if (0 != m.mod(x2, b2)) {
          var C2 = m.getGCD(b2, S2);
          b2 = S2 / C2 < 10 ? C2 : S2;
        } else 0 == m.mod(b2, S2) ? b2 = S2 : (S2 = b2, d2 = false);
        else b2 = S2;
        else if (c2) 0 == m.mod(x2, b2) ? S2 = b2 : b2 = S2;
        else if (0 == m.mod(x2, b2)) S2 = b2;
        else {
          S2 = x2 / (p2 = Math.ceil(x2 / b2));
          var L2 = m.getGCD(x2, b2);
          x2 / L2 < a2 && (S2 = L2), b2 = S2;
        }
        p2 = Math.round(x2 / b2);
      } else {
        if (s2 || r2) {
          if (r2) if (d2) t3 = e2 - b2 * p2;
          else {
            var P2 = t3;
            t3 = b2 * Math.floor(t3 / b2), Math.abs(e2 - t3) / m.getGCD(x2, b2) > a2 && (t3 = e2 - b2 * g2, t3 += b2 * Math.floor((P2 - t3) / b2));
          }
          else if (s2) if (d2) e2 = t3 + b2 * p2;
          else {
            var M2 = e2;
            e2 = b2 * Math.ceil(e2 / b2), Math.abs(e2 - t3) / m.getGCD(x2, b2) > a2 && (e2 = t3 + b2 * g2, e2 += b2 * Math.ceil((M2 - e2) / b2));
          }
        } else if (h2.isMultipleYAxis && d2) {
          var I2 = b2 * Math.floor(t3 / b2), T2 = I2 + b2 * p2;
          T2 < e2 && (b2 *= 2), T2 = e2, e2 = (t3 = I2) + b2 * p2, x2 = Math.abs(e2 - t3), t3 > 0 && t3 < Math.abs(T2 - e2) && (t3 = 0, e2 = b2 * p2), e2 < 0 && -e2 < Math.abs(I2 - t3) && (e2 = 0, t3 = -b2 * p2);
        } else t3 = b2 * Math.floor(t3 / b2), e2 = b2 * Math.ceil(e2 / b2);
        x2 = Math.abs(e2 - t3), b2 = m.getGCD(x2, b2), p2 = Math.round(x2 / b2);
      }
      if (d2 || s2 || r2 || (p2 = Math.ceil((x2 - n2) / (b2 + n2))) > 16 && m.getPrimeFactors(p2).length < 2 && p2++, !d2 && i2.forceNiceScale && 0 === h2.yValueDecimal && p2 > x2 && (p2 = x2, b2 = Math.round(x2 / p2)), p2 > a2 && (!d2 && !c2 || i2.forceNiceScale)) {
        var z2 = m.getPrimeFactors(p2), X2 = z2.length - 1, E2 = p2;
        t: for (var Y2 = 0; Y2 < X2; Y2++) for (var R2 = 0; R2 <= X2 - Y2; R2++) {
          for (var F2 = Math.min(R2 + Y2, X2), D2 = E2, H2 = 1, O2 = R2; O2 <= F2; O2++) H2 *= z2[O2];
          if ((D2 /= H2) < a2) {
            E2 = D2;
            break t;
          }
        }
        b2 = E2 === p2 ? x2 : x2 / E2, p2 = Math.round(x2 / b2);
      }
      h2.isMultipleYAxis && 0 == h2.multiAxisTickAmount && h2.ignoreYAxisIndexes.indexOf(o2) < 0 && (h2.multiAxisTickAmount = p2);
      var N2 = t3 - b2, W2 = b2 * n2;
      do {
        N2 += b2, f2.push(m.stripNumber(N2, 7));
      } while (e2 - N2 > W2);
      return { result: f2, niceMin: f2[0], niceMax: f2[f2.length - 1] };
    } }, { key: "linearScale", value: function(t3, e2) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, a2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0, r2 = Math.abs(e2 - t3), o2 = [];
      if (t3 === e2) return { result: o2 = [t3], niceMin: o2[0], niceMax: o2[o2.length - 1] };
      "dataPoints" === (i2 = this._adjustTicksForSmallRange(i2, a2, r2)) && (i2 = this.w.globals.dataPoints - 1), s2 || (s2 = r2 / i2), s2 = Math.round(10 * (s2 + Number.EPSILON)) / 10, i2 === Number.MAX_VALUE && (i2 = 5, s2 = 1);
      for (var n2 = t3; i2 >= 0; ) o2.push(n2), n2 = m.preciseAddition(n2, s2), i2 -= 1;
      return { result: o2, niceMin: o2[0], niceMax: o2[o2.length - 1] };
    } }, { key: "logarithmicScaleNice", value: function(t3, e2, i2) {
      e2 <= 0 && (e2 = Math.max(t3, i2)), t3 <= 0 && (t3 = Math.min(e2, i2));
      for (var a2 = [], s2 = Math.ceil(Math.log(e2) / Math.log(i2) + 1), r2 = Math.floor(Math.log(t3) / Math.log(i2)); r2 < s2; r2++) a2.push(Math.pow(i2, r2));
      return { result: a2, niceMin: a2[0], niceMax: a2[a2.length - 1] };
    } }, { key: "logarithmicScale", value: function(t3, e2, i2) {
      e2 <= 0 && (e2 = Math.max(t3, i2)), t3 <= 0 && (t3 = Math.min(e2, i2));
      for (var a2 = [], s2 = Math.log(e2) / Math.log(i2), r2 = Math.log(t3) / Math.log(i2), o2 = s2 - r2, n2 = Math.round(o2), l2 = o2 / n2, h2 = 0, c2 = r2; h2 < n2; h2++, c2 += l2) a2.push(Math.pow(i2, c2));
      return a2.push(Math.pow(i2, s2)), { result: a2, niceMin: t3, niceMax: e2 };
    } }, { key: "_adjustTicksForSmallRange", value: function(t3, e2, i2) {
      var a2 = t3;
      if (void 0 !== e2 && this.w.config.yaxis[e2].labels.formatter && void 0 === this.w.config.yaxis[e2].tickAmount) {
        var s2 = Number(this.w.config.yaxis[e2].labels.formatter(1));
        m.isNumber(s2) && 0 === this.w.globals.yValueDecimal && (a2 = Math.ceil(i2));
      }
      return a2 < t3 ? a2 : t3;
    } }, { key: "setYScaleForIndex", value: function(t3, e2, i2) {
      var a2 = this.w.globals, s2 = this.w.config, r2 = a2.isBarHorizontal ? s2.xaxis : s2.yaxis[t3];
      void 0 === a2.yAxisScale[t3] && (a2.yAxisScale[t3] = []);
      var o2 = Math.abs(i2 - e2);
      r2.logarithmic && o2 <= 5 && (a2.invalidLogScale = true), r2.logarithmic && o2 > 5 ? (a2.allSeriesCollapsed = false, a2.yAxisScale[t3] = r2.forceNiceScale ? this.logarithmicScaleNice(e2, i2, r2.logBase) : this.logarithmicScale(e2, i2, r2.logBase)) : i2 !== -Number.MAX_VALUE && m.isNumber(i2) && e2 !== Number.MAX_VALUE && m.isNumber(e2) ? (a2.allSeriesCollapsed = false, a2.yAxisScale[t3] = this.niceScale(e2, i2, t3)) : a2.yAxisScale[t3] = this.niceScale(Number.MIN_VALUE, 0, t3);
    } }, { key: "setXScale", value: function(t3, e2) {
      var i2 = this.w, a2 = i2.globals, s2 = Math.abs(e2 - t3);
      if (e2 !== -Number.MAX_VALUE && m.isNumber(e2)) {
        var r2 = a2.xTickAmount + 1;
        s2 < 10 && s2 > 1 && (r2 = s2), a2.xAxisScale = this.linearScale(t3, e2, r2, 0, i2.config.xaxis.stepSize);
      } else a2.xAxisScale = this.linearScale(0, 10, 10);
      return a2.xAxisScale;
    } }, { key: "scaleMultipleYAxes", value: function() {
      var t3 = this, e2 = this.w.config, i2 = this.w.globals;
      this.coreUtils.setSeriesYAxisMappings();
      var a2 = i2.seriesYAxisMap, s2 = i2.minYArr, r2 = i2.maxYArr;
      i2.allSeriesCollapsed = true, i2.barGroups = [], a2.forEach(function(a3, o2) {
        var n2 = [];
        a3.forEach(function(t4) {
          var i3 = e2.series[t4].group;
          n2.indexOf(i3) < 0 && n2.push(i3);
        }), a3.length > 0 ? function() {
          var l2, h2, c2 = Number.MAX_VALUE, d2 = -Number.MAX_VALUE, g2 = c2, u2 = d2;
          if (e2.chart.stacked) !function() {
            var t4 = new Array(i2.dataPoints).fill(0), s3 = [], r3 = [], f3 = [];
            n2.forEach(function() {
              s3.push(t4.map(function() {
                return Number.MIN_VALUE;
              })), r3.push(t4.map(function() {
                return Number.MIN_VALUE;
              })), f3.push(t4.map(function() {
                return Number.MIN_VALUE;
              }));
            });
            for (var p3 = function(t5) {
              !l2 && e2.series[a3[t5]].type && (l2 = e2.series[a3[t5]].type);
              var c3 = a3[t5];
              h2 = e2.series[c3].group ? e2.series[c3].group : "axis-".concat(o2), !(i2.collapsedSeriesIndices.indexOf(c3) < 0 && i2.ancillaryCollapsedSeriesIndices.indexOf(c3) < 0) || (i2.allSeriesCollapsed = false, n2.forEach(function(t6, a4) {
                if (e2.series[c3].group === t6) for (var o3 = 0; o3 < i2.series[c3].length; o3++) {
                  var n3 = i2.series[c3][o3];
                  n3 >= 0 ? r3[a4][o3] += n3 : f3[a4][o3] += n3, s3[a4][o3] += n3, g2 = Math.min(g2, n3), u2 = Math.max(u2, n3);
                }
              })), "bar" !== l2 && "column" !== l2 || i2.barGroups.push(h2);
            }, x2 = 0; x2 < a3.length; x2++) p3(x2);
            l2 || (l2 = e2.chart.type), "bar" === l2 || "column" === l2 ? n2.forEach(function(t5, e3) {
              c2 = Math.min(c2, Math.min.apply(null, f3[e3])), d2 = Math.max(d2, Math.max.apply(null, r3[e3]));
            }) : (n2.forEach(function(t5, e3) {
              g2 = Math.min(g2, Math.min.apply(null, s3[e3])), u2 = Math.max(u2, Math.max.apply(null, s3[e3]));
            }), c2 = g2, d2 = u2), c2 === Number.MIN_VALUE && d2 === Number.MIN_VALUE && (d2 = -Number.MAX_VALUE);
          }();
          else for (var f2 = 0; f2 < a3.length; f2++) {
            var p2 = a3[f2];
            c2 = Math.min(c2, s2[p2]), d2 = Math.max(d2, r2[p2]), !(i2.collapsedSeriesIndices.indexOf(p2) < 0 && i2.ancillaryCollapsedSeriesIndices.indexOf(p2) < 0) || (i2.allSeriesCollapsed = false);
          }
          void 0 !== e2.yaxis[o2].min && (c2 = "function" == typeof e2.yaxis[o2].min ? e2.yaxis[o2].min(c2) : e2.yaxis[o2].min), void 0 !== e2.yaxis[o2].max && (d2 = "function" == typeof e2.yaxis[o2].max ? e2.yaxis[o2].max(d2) : e2.yaxis[o2].max), i2.barGroups = i2.barGroups.filter(function(t4, e3, i3) {
            return i3.indexOf(t4) === e3;
          }), t3.setYScaleForIndex(o2, c2, d2), a3.forEach(function(t4) {
            s2[t4] = i2.yAxisScale[o2].niceMin, r2[t4] = i2.yAxisScale[o2].niceMax;
          });
        }() : t3.setYScaleForIndex(o2, 0, -Number.MAX_VALUE);
      });
    } }]), t2;
  }(), J = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w, this.scales = new $(e2);
    }
    return s(t2, [{ key: "init", value: function() {
      this.setYRange(), this.setXRange(), this.setZRange();
    } }, { key: "getMinYMaxY", value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -Number.MAX_VALUE, a2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, s2 = this.w.config, r2 = this.w.globals, o2 = -Number.MAX_VALUE, n2 = Number.MIN_VALUE;
      null === a2 && (a2 = t3 + 1);
      var l2 = r2.series, h2 = l2, c2 = l2;
      "candlestick" === s2.chart.type ? (h2 = r2.seriesCandleL, c2 = r2.seriesCandleH) : "boxPlot" === s2.chart.type ? (h2 = r2.seriesCandleO, c2 = r2.seriesCandleC) : r2.isRangeData && (h2 = r2.seriesRangeStart, c2 = r2.seriesRangeEnd);
      var d2 = false;
      if (r2.seriesX.length >= a2) {
        var g2, u2 = null === (g2 = r2.brushSource) || void 0 === g2 ? void 0 : g2.w.config.chart.brush;
        (s2.chart.zoom.enabled && s2.chart.zoom.autoScaleYaxis || null != u2 && u2.enabled && null != u2 && u2.autoScaleYaxis) && (d2 = true);
      }
      for (var f2 = t3; f2 < a2; f2++) {
        r2.dataPoints = Math.max(r2.dataPoints, l2[f2].length);
        var p2 = s2.series[f2].type;
        r2.categoryLabels.length && (r2.dataPoints = r2.categoryLabels.filter(function(t4) {
          return void 0 !== t4;
        }).length), r2.labels.length && "datetime" !== s2.xaxis.type && 0 !== r2.series.reduce(function(t4, e3) {
          return t4 + e3.length;
        }, 0) && (r2.dataPoints = Math.max(r2.dataPoints, r2.labels.length));
        var x2 = 0, b2 = l2[f2].length - 1;
        if (d2) {
          if (s2.xaxis.min) for (; x2 < b2 && r2.seriesX[f2][x2] < s2.xaxis.min; x2++) ;
          if (s2.xaxis.max) for (; b2 > x2 && r2.seriesX[f2][b2] > s2.xaxis.max; b2--) ;
        }
        for (var v2 = x2; v2 <= b2 && v2 < r2.series[f2].length; v2++) {
          var y2 = l2[f2][v2];
          if (null !== y2 && m.isNumber(y2)) {
            switch (void 0 !== c2[f2][v2] && (o2 = Math.max(o2, c2[f2][v2]), e2 = Math.min(e2, c2[f2][v2])), void 0 !== h2[f2][v2] && (e2 = Math.min(e2, h2[f2][v2]), i2 = Math.max(i2, h2[f2][v2])), p2) {
              case "candlestick":
                void 0 !== r2.seriesCandleC[f2][v2] && (o2 = Math.max(o2, r2.seriesCandleH[f2][v2]), e2 = Math.min(e2, r2.seriesCandleL[f2][v2]));
                break;
              case "boxPlot":
                void 0 !== r2.seriesCandleC[f2][v2] && (o2 = Math.max(o2, r2.seriesCandleC[f2][v2]), e2 = Math.min(e2, r2.seriesCandleO[f2][v2]));
            }
            p2 && "candlestick" !== p2 && "boxPlot" !== p2 && "rangeArea" !== p2 && "rangeBar" !== p2 && (o2 = Math.max(o2, r2.series[f2][v2]), e2 = Math.min(e2, r2.series[f2][v2])), i2 = o2, r2.seriesGoals[f2] && r2.seriesGoals[f2][v2] && Array.isArray(r2.seriesGoals[f2][v2]) && r2.seriesGoals[f2][v2].forEach(function(t4) {
              n2 !== Number.MIN_VALUE && (n2 = Math.min(n2, t4.value), e2 = n2), o2 = Math.max(o2, t4.value), i2 = o2;
            }), m.isFloat(y2) && (y2 = m.noExponents(y2), r2.yValueDecimal = Math.max(r2.yValueDecimal, y2.toString().split(".")[1].length)), n2 > h2[f2][v2] && h2[f2][v2] < 0 && (n2 = h2[f2][v2]);
          } else r2.hasNullValues = true;
        }
        "bar" !== p2 && "column" !== p2 || (n2 < 0 && o2 < 0 && (o2 = 0, i2 = Math.max(i2, 0)), n2 === Number.MIN_VALUE && (n2 = 0, e2 = Math.min(e2, 0)));
      }
      return "rangeBar" === s2.chart.type && r2.seriesRangeStart.length && r2.isBarHorizontal && (n2 = e2), "bar" === s2.chart.type && (n2 < 0 && o2 < 0 && (o2 = 0), n2 === Number.MIN_VALUE && (n2 = 0)), { minY: n2, maxY: o2, lowestY: e2, highestY: i2 };
    } }, { key: "setYRange", value: function() {
      var t3 = this.w.globals, e2 = this.w.config;
      t3.maxY = -Number.MAX_VALUE, t3.minY = Number.MIN_VALUE;
      var i2, a2 = Number.MAX_VALUE;
      if (t3.isMultipleYAxis) {
        a2 = Number.MAX_VALUE;
        for (var s2 = 0; s2 < t3.series.length; s2++) i2 = this.getMinYMaxY(s2), t3.minYArr[s2] = i2.lowestY, t3.maxYArr[s2] = i2.highestY, a2 = Math.min(a2, i2.lowestY);
      }
      if (i2 = this.getMinYMaxY(0, a2, null, t3.series.length), "bar" === e2.chart.type ? (t3.minY = i2.minY, t3.maxY = i2.maxY) : (t3.minY = i2.lowestY, t3.maxY = i2.highestY), a2 = i2.lowestY, e2.chart.stacked && this._setStackedMinMax(), "line" === e2.chart.type || "area" === e2.chart.type || "scatter" === e2.chart.type || "candlestick" === e2.chart.type || "boxPlot" === e2.chart.type || "rangeBar" === e2.chart.type && !t3.isBarHorizontal ? t3.minY === Number.MIN_VALUE && a2 !== -Number.MAX_VALUE && a2 !== t3.maxY && (t3.minY = a2) : t3.minY = t3.minY !== Number.MIN_VALUE ? Math.min(i2.minY, t3.minY) : i2.minY, e2.yaxis.forEach(function(e3, i3) {
        void 0 !== e3.max && ("number" == typeof e3.max ? t3.maxYArr[i3] = e3.max : "function" == typeof e3.max && (t3.maxYArr[i3] = e3.max(t3.isMultipleYAxis ? t3.maxYArr[i3] : t3.maxY)), t3.maxY = t3.maxYArr[i3]), void 0 !== e3.min && ("number" == typeof e3.min ? t3.minYArr[i3] = e3.min : "function" == typeof e3.min && (t3.minYArr[i3] = e3.min(t3.isMultipleYAxis ? t3.minYArr[i3] === Number.MIN_VALUE ? 0 : t3.minYArr[i3] : t3.minY)), t3.minY = t3.minYArr[i3]);
      }), t3.isBarHorizontal) {
        ["min", "max"].forEach(function(i3) {
          void 0 !== e2.xaxis[i3] && "number" == typeof e2.xaxis[i3] && ("min" === i3 ? t3.minY = e2.xaxis[i3] : t3.maxY = e2.xaxis[i3]);
        });
      }
      return t3.isMultipleYAxis ? (this.scales.scaleMultipleYAxes(), t3.minY = a2) : (this.scales.setYScaleForIndex(0, t3.minY, t3.maxY), t3.minY = t3.yAxisScale[0].niceMin, t3.maxY = t3.yAxisScale[0].niceMax, t3.minYArr[0] = t3.minY, t3.maxYArr[0] = t3.maxY), t3.barGroups = [], t3.lineGroups = [], t3.areaGroups = [], e2.series.forEach(function(i3) {
        switch (i3.type || e2.chart.type) {
          case "bar":
          case "column":
            t3.barGroups.push(i3.group);
            break;
          case "line":
            t3.lineGroups.push(i3.group);
            break;
          case "area":
            t3.areaGroups.push(i3.group);
        }
      }), t3.barGroups = t3.barGroups.filter(function(t4, e3, i3) {
        return i3.indexOf(t4) === e3;
      }), t3.lineGroups = t3.lineGroups.filter(function(t4, e3, i3) {
        return i3.indexOf(t4) === e3;
      }), t3.areaGroups = t3.areaGroups.filter(function(t4, e3, i3) {
        return i3.indexOf(t4) === e3;
      }), { minY: t3.minY, maxY: t3.maxY, minYArr: t3.minYArr, maxYArr: t3.maxYArr, yAxisScale: t3.yAxisScale };
    } }, { key: "setXRange", value: function() {
      var t3 = this.w.globals, e2 = this.w.config, i2 = "numeric" === e2.xaxis.type || "datetime" === e2.xaxis.type || "category" === e2.xaxis.type && !t3.noLabelsProvided || t3.noLabelsProvided || t3.isXNumeric;
      if (t3.isXNumeric && function() {
        for (var e3 = 0; e3 < t3.series.length; e3++) if (t3.labels[e3]) for (var i3 = 0; i3 < t3.labels[e3].length; i3++) null !== t3.labels[e3][i3] && m.isNumber(t3.labels[e3][i3]) && (t3.maxX = Math.max(t3.maxX, t3.labels[e3][i3]), t3.initialMaxX = Math.max(t3.maxX, t3.labels[e3][i3]), t3.minX = Math.min(t3.minX, t3.labels[e3][i3]), t3.initialMinX = Math.min(t3.minX, t3.labels[e3][i3]));
      }(), t3.noLabelsProvided && 0 === e2.xaxis.categories.length && (t3.maxX = t3.labels[t3.labels.length - 1], t3.initialMaxX = t3.labels[t3.labels.length - 1], t3.minX = 1, t3.initialMinX = 1), t3.isXNumeric || t3.noLabelsProvided || t3.dataFormatXNumeric) {
        var a2 = 10;
        if (void 0 === e2.xaxis.tickAmount) a2 = Math.round(t3.svgWidth / 150), "numeric" === e2.xaxis.type && t3.dataPoints < 30 && (a2 = t3.dataPoints - 1), a2 > t3.dataPoints && 0 !== t3.dataPoints && (a2 = t3.dataPoints - 1);
        else if ("dataPoints" === e2.xaxis.tickAmount) {
          if (t3.series.length > 1 && (a2 = t3.series[t3.maxValsInArrayIndex].length - 1), t3.isXNumeric) {
            var s2 = t3.maxX - t3.minX;
            s2 < 30 && (a2 = s2 - 1);
          }
        } else a2 = e2.xaxis.tickAmount;
        if (t3.xTickAmount = a2, void 0 !== e2.xaxis.max && "number" == typeof e2.xaxis.max && (t3.maxX = e2.xaxis.max), void 0 !== e2.xaxis.min && "number" == typeof e2.xaxis.min && (t3.minX = e2.xaxis.min), void 0 !== e2.xaxis.range && (t3.minX = t3.maxX - e2.xaxis.range), t3.minX !== Number.MAX_VALUE && t3.maxX !== -Number.MAX_VALUE) if (e2.xaxis.convertedCatToNumeric && !t3.dataFormatXNumeric) {
          for (var r2 = [], o2 = t3.minX - 1; o2 < t3.maxX; o2++) r2.push(o2 + 1);
          t3.xAxisScale = { result: r2, niceMin: r2[0], niceMax: r2[r2.length - 1] };
        } else t3.xAxisScale = this.scales.setXScale(t3.minX, t3.maxX);
        else t3.xAxisScale = this.scales.linearScale(0, a2, a2, 0, e2.xaxis.stepSize), t3.noLabelsProvided && t3.labels.length > 0 && (t3.xAxisScale = this.scales.linearScale(1, t3.labels.length, a2 - 1, 0, e2.xaxis.stepSize), t3.seriesX = t3.labels.slice());
        i2 && (t3.labels = t3.xAxisScale.result.slice());
      }
      return t3.isBarHorizontal && t3.labels.length && (t3.xTickAmount = t3.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), { minX: t3.minX, maxX: t3.maxX };
    } }, { key: "setZRange", value: function() {
      var t3 = this.w.globals;
      if (t3.isDataXYZ) {
        for (var e2 = 0; e2 < t3.series.length; e2++) if (void 0 !== t3.seriesZ[e2]) for (var i2 = 0; i2 < t3.seriesZ[e2].length; i2++) null !== t3.seriesZ[e2][i2] && m.isNumber(t3.seriesZ[e2][i2]) && (t3.maxZ = Math.max(t3.maxZ, t3.seriesZ[e2][i2]), t3.minZ = Math.min(t3.minZ, t3.seriesZ[e2][i2]));
      }
    } }, { key: "_handleSingleDataPoint", value: function() {
      var t3 = this.w.globals, e2 = this.w.config;
      if (t3.minX === t3.maxX) {
        var i2 = new L(this.ctx);
        if ("datetime" === e2.xaxis.type) {
          var a2 = i2.getDate(t3.minX);
          e2.xaxis.labels.datetimeUTC ? a2.setUTCDate(a2.getUTCDate() - 2) : a2.setDate(a2.getDate() - 2), t3.minX = new Date(a2).getTime();
          var s2 = i2.getDate(t3.maxX);
          e2.xaxis.labels.datetimeUTC ? s2.setUTCDate(s2.getUTCDate() + 2) : s2.setDate(s2.getDate() + 2), t3.maxX = new Date(s2).getTime();
        } else ("numeric" === e2.xaxis.type || "category" === e2.xaxis.type && !t3.noLabelsProvided) && (t3.minX = t3.minX - 2, t3.initialMinX = t3.minX, t3.maxX = t3.maxX + 2, t3.initialMaxX = t3.maxX);
      }
    } }, { key: "_getMinXDiff", value: function() {
      var t3 = this.w.globals;
      t3.isXNumeric && t3.seriesX.forEach(function(e2, i2) {
        1 === e2.length && e2.push(t3.seriesX[t3.maxValsInArrayIndex][t3.seriesX[t3.maxValsInArrayIndex].length - 1]);
        var a2 = e2.slice();
        a2.sort(function(t4, e3) {
          return t4 - e3;
        }), a2.forEach(function(e3, i3) {
          if (i3 > 0) {
            var s2 = e3 - a2[i3 - 1];
            s2 > 0 && (t3.minXDiff = Math.min(s2, t3.minXDiff));
          }
        }), 1 !== t3.dataPoints && t3.minXDiff !== Number.MAX_VALUE || (t3.minXDiff = 0.5);
      });
    } }, { key: "_setStackedMinMax", value: function() {
      var t3 = this, e2 = this.w.globals;
      if (e2.series.length) {
        var i2 = e2.seriesGroups;
        i2.length || (i2 = [this.w.globals.seriesNames.map(function(t4) {
          return t4;
        })]);
        var a2 = {}, s2 = {};
        i2.forEach(function(i3) {
          a2[i3] = [], s2[i3] = [], t3.w.config.series.map(function(t4, a3) {
            return i3.indexOf(e2.seriesNames[a3]) > -1 ? a3 : null;
          }).filter(function(t4) {
            return null !== t4;
          }).forEach(function(r2) {
            for (var o2 = 0; o2 < e2.series[e2.maxValsInArrayIndex].length; o2++) {
              var n2, l2, h2, c2;
              void 0 === a2[i3][o2] && (a2[i3][o2] = 0, s2[i3][o2] = 0), (t3.w.config.chart.stacked && !e2.comboCharts || t3.w.config.chart.stacked && e2.comboCharts && (!t3.w.config.chart.stackOnlyBar || "bar" === (null === (n2 = t3.w.config.series) || void 0 === n2 || null === (l2 = n2[r2]) || void 0 === l2 ? void 0 : l2.type) || "column" === (null === (h2 = t3.w.config.series) || void 0 === h2 || null === (c2 = h2[r2]) || void 0 === c2 ? void 0 : c2.type))) && null !== e2.series[r2][o2] && m.isNumber(e2.series[r2][o2]) && (e2.series[r2][o2] > 0 ? a2[i3][o2] += parseFloat(e2.series[r2][o2]) + 1e-4 : s2[i3][o2] += parseFloat(e2.series[r2][o2]));
            }
          });
        }), Object.entries(a2).forEach(function(t4) {
          var i3 = f(t4, 1)[0];
          a2[i3].forEach(function(t5, r2) {
            e2.maxY = Math.max(e2.maxY, a2[i3][r2]), e2.minY = Math.min(e2.minY, s2[i3][r2]);
          });
        });
      }
    } }]), t2;
  }(), Q = function() {
    function t2(e2, a2) {
      i(this, t2), this.ctx = e2, this.elgrid = a2, this.w = e2.w;
      var s2 = this.w;
      this.xaxisFontSize = s2.config.xaxis.labels.style.fontSize, this.axisFontFamily = s2.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = s2.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = "bar" === s2.config.chart.type && s2.config.plotOptions.bar.horizontal, this.xAxisoffX = "bottom" === s2.config.xaxis.position ? s2.globals.gridHeight : 0, this.drawnLabels = [], this.axesUtils = new M(e2);
    }
    return s(t2, [{ key: "drawYaxis", value: function(t3) {
      var e2 = this.w, i2 = new k(this.ctx), a2 = e2.config.yaxis[t3].labels.style, s2 = a2.fontSize, r2 = a2.fontFamily, o2 = a2.fontWeight, n2 = i2.group({ class: "apexcharts-yaxis", rel: t3, transform: "translate(".concat(e2.globals.translateYAxisX[t3], ", 0)") });
      if (this.axesUtils.isYAxisHidden(t3)) return n2;
      var l2 = i2.group({ class: "apexcharts-yaxis-texts-g" });
      n2.add(l2);
      var h2 = e2.globals.yAxisScale[t3].result.length - 1, c2 = e2.globals.gridHeight / h2, d2 = e2.globals.yLabelFormatters[t3], g2 = this.axesUtils.checkForReversedLabels(t3, e2.globals.yAxisScale[t3].result.slice());
      if (e2.config.yaxis[t3].labels.show) {
        var u2 = e2.globals.translateY + e2.config.yaxis[t3].labels.offsetY;
        e2.globals.isBarHorizontal ? u2 = 0 : "heatmap" === e2.config.chart.type && (u2 -= c2 / 2), u2 += parseInt(s2, 10) / 3;
        for (var f2 = h2; f2 >= 0; f2--) {
          var p2 = d2(g2[f2], f2, e2), x2 = e2.config.yaxis[t3].labels.padding;
          e2.config.yaxis[t3].opposite && 0 !== e2.config.yaxis.length && (x2 *= -1);
          var b2 = this.getTextAnchor(e2.config.yaxis[t3].labels.align, e2.config.yaxis[t3].opposite), v2 = this.axesUtils.getYAxisForeColor(a2.colors, t3), y2 = Array.isArray(v2) ? v2[f2] : v2, w2 = m.listToArray(e2.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(t3, "'] .apexcharts-yaxis-label tspan"))).map(function(t4) {
            return t4.textContent;
          }), A2 = i2.drawText({ x: x2, y: u2, text: w2.includes(p2) && !e2.config.yaxis[t3].labels.showDuplicates ? "" : p2, textAnchor: b2, fontSize: s2, fontFamily: r2, fontWeight: o2, maxWidth: e2.config.yaxis[t3].labels.maxWidth, foreColor: y2, isPlainText: false, cssClass: "apexcharts-yaxis-label ".concat(a2.cssClass) });
          l2.add(A2), this.addTooltip(A2, p2), 0 !== e2.config.yaxis[t3].labels.rotate && this.rotateLabel(i2, A2, firstLabel, e2.config.yaxis[t3].labels.rotate), u2 += c2;
        }
      }
      return this.addYAxisTitle(i2, n2, t3), this.addAxisBorder(i2, n2, t3, h2, c2), n2;
    } }, { key: "getTextAnchor", value: function(t3, e2) {
      return "left" === t3 ? "start" : "center" === t3 ? "middle" : "right" === t3 ? "end" : e2 ? "start" : "end";
    } }, { key: "addTooltip", value: function(t3, e2) {
      var i2 = document.createElementNS(this.w.globals.SVGNS, "title");
      i2.textContent = Array.isArray(e2) ? e2.join(" ") : e2, t3.node.appendChild(i2);
    } }, { key: "rotateLabel", value: function(t3, e2, i2, a2) {
      var s2 = t3.rotateAroundCenter(i2.node), r2 = t3.rotateAroundCenter(e2.node);
      e2.node.setAttribute("transform", "rotate(".concat(a2, " ").concat(s2.x, " ").concat(r2.y, ")"));
    } }, { key: "addYAxisTitle", value: function(t3, e2, i2) {
      var a2 = this.w;
      if (void 0 !== a2.config.yaxis[i2].title.text) {
        var s2 = t3.group({ class: "apexcharts-yaxis-title" }), r2 = a2.config.yaxis[i2].opposite ? a2.globals.translateYAxisX[i2] : 0, o2 = t3.drawText({ x: r2, y: a2.globals.gridHeight / 2 + a2.globals.translateY + a2.config.yaxis[i2].title.offsetY, text: a2.config.yaxis[i2].title.text, textAnchor: "end", foreColor: a2.config.yaxis[i2].title.style.color, fontSize: a2.config.yaxis[i2].title.style.fontSize, fontWeight: a2.config.yaxis[i2].title.style.fontWeight, fontFamily: a2.config.yaxis[i2].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text ".concat(a2.config.yaxis[i2].title.style.cssClass) });
        s2.add(o2), e2.add(s2);
      }
    } }, { key: "addAxisBorder", value: function(t3, e2, i2, a2, s2) {
      var r2 = this.w, o2 = r2.config.yaxis[i2].axisBorder, n2 = 31 + o2.offsetX;
      if (r2.config.yaxis[i2].opposite && (n2 = -31 - o2.offsetX), o2.show) {
        var l2 = t3.drawLine(n2, r2.globals.translateY + o2.offsetY - 2, n2, r2.globals.gridHeight + r2.globals.translateY + o2.offsetY + 2, o2.color, 0, o2.width);
        e2.add(l2);
      }
      r2.config.yaxis[i2].axisTicks.show && this.axesUtils.drawYAxisTicks(n2, a2, o2, r2.config.yaxis[i2].axisTicks, i2, s2, e2);
    } }, { key: "drawYaxisInversed", value: function(t3) {
      var e2 = this.w, i2 = new k(this.ctx), a2 = i2.group({ class: "apexcharts-xaxis apexcharts-yaxis-inversed" }), s2 = i2.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(e2.globals.translateXAxisX, ", ").concat(e2.globals.translateXAxisY, ")") });
      a2.add(s2);
      var r2 = e2.globals.yAxisScale[t3].result.length - 1, o2 = e2.globals.gridWidth / r2 + 0.1, n2 = o2 + e2.config.xaxis.labels.offsetX, l2 = e2.globals.xLabelFormatter, h2 = this.axesUtils.checkForReversedLabels(t3, e2.globals.yAxisScale[t3].result.slice()), c2 = e2.globals.timescaleLabels;
      if (c2.length > 0 && (this.xaxisLabels = c2.slice(), r2 = (h2 = c2.slice()).length), e2.config.xaxis.labels.show) for (var d2 = c2.length ? 0 : r2; c2.length ? d2 < c2.length : d2 >= 0; c2.length ? d2++ : d2--) {
        var g2 = l2(h2[d2], d2, e2), u2 = e2.globals.gridWidth + e2.globals.padHorizontal - (n2 - o2 + e2.config.xaxis.labels.offsetX);
        if (c2.length) {
          var f2 = this.axesUtils.getLabel(h2, c2, u2, d2, this.drawnLabels, this.xaxisFontSize);
          u2 = f2.x, g2 = f2.text, this.drawnLabels.push(f2.text), 0 === d2 && e2.globals.skipFirstTimelinelabel && (g2 = ""), d2 === h2.length - 1 && e2.globals.skipLastTimelinelabel && (g2 = "");
        }
        var p2 = i2.drawText({ x: u2, y: this.xAxisoffX + e2.config.xaxis.labels.offsetY + 30 - ("top" === e2.config.xaxis.position ? e2.globals.xAxisHeight + e2.config.xaxis.axisTicks.height - 2 : 0), text: g2, textAnchor: "middle", foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t3] : this.xaxisForeColors, fontSize: this.xaxisFontSize, fontFamily: this.xaxisFontFamily, fontWeight: e2.config.xaxis.labels.style.fontWeight, isPlainText: false, cssClass: "apexcharts-xaxis-label ".concat(e2.config.xaxis.labels.style.cssClass) });
        s2.add(p2), p2.tspan(g2), this.addTooltip(p2, g2), n2 += o2;
      }
      return this.inversedYAxisTitleText(a2), this.inversedYAxisBorder(a2), a2;
    } }, { key: "inversedYAxisBorder", value: function(t3) {
      var e2 = this.w, i2 = new k(this.ctx), a2 = e2.config.xaxis.axisBorder;
      if (a2.show) {
        var s2 = 0;
        "bar" === e2.config.chart.type && e2.globals.isXNumeric && (s2 -= 15);
        var r2 = i2.drawLine(e2.globals.padHorizontal + s2 + a2.offsetX, this.xAxisoffX, e2.globals.gridWidth, this.xAxisoffX, a2.color, 0, a2.height);
        this.elgrid && this.elgrid.elGridBorders && e2.config.grid.show ? this.elgrid.elGridBorders.add(r2) : t3.add(r2);
      }
    } }, { key: "inversedYAxisTitleText", value: function(t3) {
      var e2 = this.w, i2 = new k(this.ctx);
      if (void 0 !== e2.config.xaxis.title.text) {
        var a2 = i2.group({ class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed" }), s2 = i2.drawText({ x: e2.globals.gridWidth / 2 + e2.config.xaxis.title.offsetX, y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(e2.config.xaxis.title.style.fontSize) + e2.config.xaxis.title.offsetY + 20, text: e2.config.xaxis.title.text, textAnchor: "middle", fontSize: e2.config.xaxis.title.style.fontSize, fontFamily: e2.config.xaxis.title.style.fontFamily, fontWeight: e2.config.xaxis.title.style.fontWeight, foreColor: e2.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text ".concat(e2.config.xaxis.title.style.cssClass) });
        a2.add(s2), t3.add(a2);
      }
    } }, { key: "yAxisTitleRotate", value: function(t3, e2) {
      var i2 = this.w, a2 = new k(this.ctx), s2 = i2.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t3, "'] .apexcharts-yaxis-texts-g")), r2 = s2 ? s2.getBoundingClientRect() : { width: 0, height: 0 }, o2 = i2.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t3, "'] .apexcharts-yaxis-title text")), n2 = o2 ? o2.getBoundingClientRect() : { width: 0, height: 0 };
      if (o2) {
        var l2 = this.xPaddingForYAxisTitle(t3, r2, n2, e2);
        o2.setAttribute("x", l2.xPos - (e2 ? 10 : 0));
        var h2 = a2.rotateAroundCenter(o2);
        o2.setAttribute("transform", "rotate(".concat(e2 ? -1 * i2.config.yaxis[t3].title.rotate : i2.config.yaxis[t3].title.rotate, " ").concat(h2.x, " ").concat(h2.y, ")"));
      }
    } }, { key: "xPaddingForYAxisTitle", value: function(t3, e2, i2, a2) {
      var s2 = this.w, r2 = 0, o2 = 10;
      return void 0 === s2.config.yaxis[t3].title.text || t3 < 0 ? { xPos: r2, padd: 0 } : (a2 ? r2 = e2.width + s2.config.yaxis[t3].title.offsetX + i2.width / 2 + o2 / 2 : (r2 = -1 * e2.width + s2.config.yaxis[t3].title.offsetX + o2 / 2 + i2.width / 2, s2.globals.isBarHorizontal && (o2 = 25, r2 = -1 * e2.width - s2.config.yaxis[t3].title.offsetX - o2)), { xPos: r2, padd: o2 });
    } }, { key: "setYAxisXPosition", value: function(t3, e2) {
      var i2 = this.w, a2 = 0, s2 = 0, r2 = 18, o2 = 1;
      i2.config.yaxis.length > 1 && (this.multipleYs = true), i2.config.yaxis.forEach(function(n2, l2) {
        var h2 = i2.globals.ignoreYAxisIndexes.includes(l2) || !n2.show || n2.floating || 0 === t3[l2].width, c2 = t3[l2].width + e2[l2].width;
        n2.opposite ? i2.globals.isBarHorizontal ? (s2 = i2.globals.gridWidth + i2.globals.translateX - 1, i2.globals.translateYAxisX[l2] = s2 - n2.labels.offsetX) : (s2 = i2.globals.gridWidth + i2.globals.translateX + o2, h2 || (o2 += c2 + 20), i2.globals.translateYAxisX[l2] = s2 - n2.labels.offsetX + 20) : (a2 = i2.globals.translateX - r2, h2 || (r2 += c2 + 20), i2.globals.translateYAxisX[l2] = a2 + n2.labels.offsetX);
      });
    } }, { key: "setYAxisTextAlignments", value: function() {
      var t3 = this.w;
      m.listToArray(t3.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis")).forEach(function(e2, i2) {
        var a2 = t3.config.yaxis[i2];
        if (a2 && !a2.floating && void 0 !== a2.labels.align) {
          var s2 = t3.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i2, "'] .apexcharts-yaxis-texts-g")), r2 = m.listToArray(t3.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i2, "'] .apexcharts-yaxis-label"))), o2 = s2.getBoundingClientRect();
          r2.forEach(function(t4) {
            t4.setAttribute("text-anchor", a2.labels.align);
          }), "left" !== a2.labels.align || a2.opposite ? "center" === a2.labels.align ? s2.setAttribute("transform", "translate(".concat(o2.width / 2 * (a2.opposite ? 1 : -1), ", 0)")) : "right" === a2.labels.align && a2.opposite && s2.setAttribute("transform", "translate(".concat(o2.width, ", 0)")) : s2.setAttribute("transform", "translate(-".concat(o2.width, ", 0)"));
        }
      });
    } }]), t2;
  }(), K = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w, this.documentEvent = m.bind(this.documentEvent, this);
    }
    return s(t2, [{ key: "addEventListener", value: function(t3, e2) {
      var i2 = this.w;
      i2.globals.events.hasOwnProperty(t3) ? i2.globals.events[t3].push(e2) : i2.globals.events[t3] = [e2];
    } }, { key: "removeEventListener", value: function(t3, e2) {
      var i2 = this.w;
      if (i2.globals.events.hasOwnProperty(t3)) {
        var a2 = i2.globals.events[t3].indexOf(e2);
        -1 !== a2 && i2.globals.events[t3].splice(a2, 1);
      }
    } }, { key: "fireEvent", value: function(t3, e2) {
      var i2 = this.w;
      if (i2.globals.events.hasOwnProperty(t3)) {
        e2 && e2.length || (e2 = []);
        for (var a2 = i2.globals.events[t3], s2 = a2.length, r2 = 0; r2 < s2; r2++) a2[r2].apply(null, e2);
      }
    } }, { key: "setupEventHandlers", value: function() {
      var t3 = this, e2 = this.w, i2 = this.ctx, a2 = e2.globals.dom.baseEl.querySelector(e2.globals.chartClass);
      this.ctx.eventList.forEach(function(t4) {
        a2.addEventListener(t4, function(t5) {
          var a3 = Object.assign({}, e2, { seriesIndex: e2.globals.axisCharts ? e2.globals.capturedSeriesIndex : 0, dataPointIndex: e2.globals.capturedDataPointIndex });
          "mousemove" === t5.type || "touchmove" === t5.type ? "function" == typeof e2.config.chart.events.mouseMove && e2.config.chart.events.mouseMove(t5, i2, a3) : "mouseleave" === t5.type || "touchleave" === t5.type ? "function" == typeof e2.config.chart.events.mouseLeave && e2.config.chart.events.mouseLeave(t5, i2, a3) : ("mouseup" === t5.type && 1 === t5.which || "touchend" === t5.type) && ("function" == typeof e2.config.chart.events.click && e2.config.chart.events.click(t5, i2, a3), i2.ctx.events.fireEvent("click", [t5, i2, a3]));
        }, { capture: false, passive: true });
      }), this.ctx.eventList.forEach(function(i3) {
        e2.globals.dom.baseEl.addEventListener(i3, t3.documentEvent, { passive: true });
      }), this.ctx.core.setupBrushHandler();
    } }, { key: "documentEvent", value: function(t3) {
      var e2 = this.w, i2 = t3.target.className;
      if ("click" === t3.type) {
        var a2 = e2.globals.dom.baseEl.querySelector(".apexcharts-menu");
        a2 && a2.classList.contains("apexcharts-menu-open") && "apexcharts-menu-icon" !== i2 && a2.classList.remove("apexcharts-menu-open");
      }
      e2.globals.clientX = "touchmove" === t3.type ? t3.touches[0].clientX : t3.clientX, e2.globals.clientY = "touchmove" === t3.type ? t3.touches[0].clientY : t3.clientY;
    } }]), t2;
  }(), tt = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "setCurrentLocaleValues", value: function(t3) {
      var e2 = this.w.config.chart.locales;
      window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0 && (e2 = this.w.config.chart.locales.concat(window.Apex.chart.locales));
      var i2 = e2.filter(function(e3) {
        return e3.name === t3;
      })[0];
      if (!i2) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
      var a2 = m.extend(z, i2);
      this.w.globals.locale = a2.options;
    } }]), t2;
  }(), et = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "drawAxis", value: function(t3, e2) {
      var i2, a2, s2 = this, r2 = this.w.globals, o2 = this.w.config, n2 = new q(this.ctx, e2), l2 = new Q(this.ctx, e2);
      r2.axisCharts && "radar" !== t3 && (r2.isBarHorizontal ? (a2 = l2.drawYaxisInversed(0), i2 = n2.drawXaxisInversed(0), r2.dom.elGraphical.add(i2), r2.dom.elGraphical.add(a2)) : (i2 = n2.drawXaxis(), r2.dom.elGraphical.add(i2), o2.yaxis.map(function(t4, e3) {
        if (-1 === r2.ignoreYAxisIndexes.indexOf(e3) && (a2 = l2.drawYaxis(e3), r2.dom.Paper.add(a2), "back" === s2.w.config.grid.position)) {
          var i3 = r2.dom.Paper.children()[1];
          i3.remove(), r2.dom.Paper.add(i3);
        }
      })));
    } }]), t2;
  }(), it = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "drawXCrosshairs", value: function() {
      var t3 = this.w, e2 = new k(this.ctx), i2 = new w(this.ctx), a2 = t3.config.xaxis.crosshairs.fill.gradient, s2 = t3.config.xaxis.crosshairs.dropShadow, r2 = t3.config.xaxis.crosshairs.fill.type, o2 = a2.colorFrom, n2 = a2.colorTo, l2 = a2.opacityFrom, h2 = a2.opacityTo, c2 = a2.stops, d2 = s2.enabled, g2 = s2.left, u2 = s2.top, f2 = s2.blur, p2 = s2.color, x2 = s2.opacity, b2 = t3.config.xaxis.crosshairs.fill.color;
      if (t3.config.xaxis.crosshairs.show) {
        "gradient" === r2 && (b2 = e2.drawGradient("vertical", o2, n2, l2, h2, null, c2, null));
        var v2 = e2.drawRect();
        1 === t3.config.xaxis.crosshairs.width && (v2 = e2.drawLine());
        var y2 = t3.globals.gridHeight;
        (!m.isNumber(y2) || y2 < 0) && (y2 = 0);
        var A2 = t3.config.xaxis.crosshairs.width;
        (!m.isNumber(A2) || A2 < 0) && (A2 = 0), v2.attr({ class: "apexcharts-xcrosshairs", x: 0, y: 0, y2, width: A2, height: y2, fill: b2, filter: "none", "fill-opacity": t3.config.xaxis.crosshairs.opacity, stroke: t3.config.xaxis.crosshairs.stroke.color, "stroke-width": t3.config.xaxis.crosshairs.stroke.width, "stroke-dasharray": t3.config.xaxis.crosshairs.stroke.dashArray }), d2 && (v2 = i2.dropShadow(v2, { left: g2, top: u2, blur: f2, color: p2, opacity: x2 })), t3.globals.dom.elGraphical.add(v2);
      }
    } }, { key: "drawYCrosshairs", value: function() {
      var t3 = this.w, e2 = new k(this.ctx), i2 = t3.config.yaxis[0].crosshairs, a2 = t3.globals.barPadForNumericAxis;
      if (t3.config.yaxis[0].crosshairs.show) {
        var s2 = e2.drawLine(-a2, 0, t3.globals.gridWidth + a2, 0, i2.stroke.color, i2.stroke.dashArray, i2.stroke.width);
        s2.attr({ class: "apexcharts-ycrosshairs" }), t3.globals.dom.elGraphical.add(s2);
      }
      var r2 = e2.drawLine(-a2, 0, t3.globals.gridWidth + a2, 0, i2.stroke.color, 0, 0);
      r2.attr({ class: "apexcharts-ycrosshairs-hidden" }), t3.globals.dom.elGraphical.add(r2);
    } }]), t2;
  }(), at = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "checkResponsiveConfig", value: function(t3) {
      var e2 = this, i2 = this.w, a2 = i2.config;
      if (0 !== a2.responsive.length) {
        var s2 = a2.responsive.slice();
        s2.sort(function(t4, e3) {
          return t4.breakpoint > e3.breakpoint ? 1 : e3.breakpoint > t4.breakpoint ? -1 : 0;
        }).reverse();
        var r2 = new D({}), o2 = function() {
          var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a3 = s2[0].breakpoint, o3 = window.innerWidth > 0 ? window.innerWidth : screen.width;
          if (o3 > a3) {
            var n3 = m.clone(i2.globals.initialConfig);
            n3.series = m.clone(i2.config.series);
            var l2 = A.extendArrayProps(r2, n3, i2);
            t4 = m.extend(l2, t4), t4 = m.extend(i2.config, t4), e2.overrideResponsiveOptions(t4);
          } else for (var h2 = 0; h2 < s2.length; h2++) o3 < s2[h2].breakpoint && (t4 = A.extendArrayProps(r2, s2[h2].options, i2), t4 = m.extend(i2.config, t4), e2.overrideResponsiveOptions(t4));
        };
        if (t3) {
          var n2 = A.extendArrayProps(r2, t3, i2);
          n2 = m.extend(i2.config, n2), o2(n2 = m.extend(n2, t3));
        } else o2({});
      }
    } }, { key: "overrideResponsiveOptions", value: function(t3) {
      var e2 = new D(t3).init({ responsiveOverride: true });
      this.w.config = e2;
    } }]), t2;
  }(), st = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w, this.colors = [], this.isColorFn = false, this.isHeatmapDistributed = this.checkHeatmapDistributed(), this.isBarDistributed = this.checkBarDistributed();
    }
    return s(t2, [{ key: "checkHeatmapDistributed", value: function() {
      var t3 = this.w.config, e2 = t3.chart, i2 = t3.plotOptions;
      return "treemap" === e2.type && i2.treemap && i2.treemap.distributed || "heatmap" === e2.type && i2.heatmap && i2.heatmap.distributed;
    } }, { key: "checkBarDistributed", value: function() {
      var t3 = this.w.config, e2 = t3.chart, i2 = t3.plotOptions;
      return i2.bar && i2.bar.distributed && ("bar" === e2.type || "rangeBar" === e2.type);
    } }, { key: "init", value: function() {
      this.setDefaultColors();
    } }, { key: "setDefaultColors", value: function() {
      var t3 = this.w, e2 = new m();
      t3.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(t3.config.theme.mode));
      var i2 = p(t3.config.colors || t3.config.fill.colors || []);
      t3.globals.colors = this.getColors(i2), this.applySeriesColors(t3.globals.seriesColors, t3.globals.colors), t3.config.theme.monochrome.enabled && (t3.globals.colors = this.getMonochromeColors(t3.config.theme.monochrome, t3.globals.series, e2));
      var a2 = t3.globals.colors.slice();
      this.pushExtraColors(t3.globals.colors), this.applyColorTypes(["fill", "stroke"], a2), this.applyDataLabelsColors(a2), this.applyRadarPolygonsColors(), this.applyMarkersColors(a2);
    } }, { key: "getColors", value: function(t3) {
      var e2 = this, i2 = this.w;
      return t3 && 0 !== t3.length ? Array.isArray(t3) && t3.length > 0 && "function" == typeof t3[0] ? (this.isColorFn = true, i2.config.series.map(function(a2, s2) {
        var r2 = t3[s2] || t3[0];
        return "function" == typeof r2 ? r2({ value: i2.globals.axisCharts ? i2.globals.series[s2][0] || 0 : i2.globals.series[s2], seriesIndex: s2, dataPointIndex: s2, w: e2.w }) : r2;
      })) : t3 : this.predefined();
    } }, { key: "applySeriesColors", value: function(t3, e2) {
      t3.forEach(function(t4, i2) {
        t4 && (e2[i2] = t4);
      });
    } }, { key: "getMonochromeColors", value: function(t3, e2, i2) {
      var a2 = t3.color, s2 = t3.shadeIntensity, r2 = t3.shadeTo, o2 = this.isBarDistributed || this.isHeatmapDistributed ? e2[0].length * e2.length : e2.length, n2 = 1 / (o2 / s2), l2 = 0;
      return Array.from({ length: o2 }, function() {
        var t4 = "dark" === r2 ? i2.shadeColor(-1 * l2, a2) : i2.shadeColor(l2, a2);
        return l2 += n2, t4;
      });
    } }, { key: "applyColorTypes", value: function(t3, e2) {
      var i2 = this, a2 = this.w;
      t3.forEach(function(t4) {
        a2.globals[t4].colors = void 0 === a2.config[t4].colors ? i2.isColorFn ? a2.config.colors : e2 : a2.config[t4].colors.slice(), i2.pushExtraColors(a2.globals[t4].colors);
      });
    } }, { key: "applyDataLabelsColors", value: function(t3) {
      var e2 = this.w;
      e2.globals.dataLabels.style.colors = void 0 === e2.config.dataLabels.style.colors ? t3 : e2.config.dataLabels.style.colors.slice(), this.pushExtraColors(e2.globals.dataLabels.style.colors, 50);
    } }, { key: "applyRadarPolygonsColors", value: function() {
      var t3 = this.w;
      t3.globals.radarPolygons.fill.colors = void 0 === t3.config.plotOptions.radar.polygons.fill.colors ? ["dark" === t3.config.theme.mode ? "#424242" : "none"] : t3.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(t3.globals.radarPolygons.fill.colors, 20);
    } }, { key: "applyMarkersColors", value: function(t3) {
      var e2 = this.w;
      e2.globals.markers.colors = void 0 === e2.config.markers.colors ? t3 : e2.config.markers.colors.slice(), this.pushExtraColors(e2.globals.markers.colors);
    } }, { key: "pushExtraColors", value: function(t3, e2) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a2 = this.w, s2 = e2 || a2.globals.series.length;
      if (null === i2 && (i2 = this.isBarDistributed || this.isHeatmapDistributed || "heatmap" === a2.config.chart.type && a2.config.plotOptions.heatmap && a2.config.plotOptions.heatmap.colorScale.inverse), i2 && a2.globals.series.length && (s2 = a2.globals.series[a2.globals.maxValsInArrayIndex].length * a2.globals.series.length), t3.length < s2) for (var r2 = s2 - t3.length, o2 = 0; o2 < r2; o2++) t3.push(t3[o2]);
    } }, { key: "updateThemeOptions", value: function(t3) {
      t3.chart = t3.chart || {}, t3.tooltip = t3.tooltip || {};
      var e2 = t3.theme.mode, i2 = "dark" === e2 ? "palette4" : "light" === e2 ? "palette1" : t3.theme.palette || "palette1", a2 = "dark" === e2 ? "#f6f7f8" : "light" === e2 ? "#373d3f" : t3.chart.foreColor || "#373d3f";
      return t3.tooltip.theme = e2 || "light", t3.chart.foreColor = a2, t3.theme.palette = i2, t3;
    } }, { key: "predefined", value: function() {
      var t3 = { palette1: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"], palette2: ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"], palette3: ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"], palette4: ["#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"], palette5: ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"], palette6: ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"], palette7: ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"], palette8: ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"], palette9: ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"], palette10: ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"], default: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"] };
      return t3[this.w.config.theme.palette] || t3.default;
    } }]), t2;
  }(), rt = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "draw", value: function() {
      this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle");
    } }, { key: "drawTitleSubtitle", value: function(t3) {
      var e2 = this.w, i2 = "title" === t3 ? e2.config.title : e2.config.subtitle, a2 = e2.globals.svgWidth / 2, s2 = i2.offsetY, r2 = "middle";
      if ("left" === i2.align ? (a2 = 10, r2 = "start") : "right" === i2.align && (a2 = e2.globals.svgWidth - 10, r2 = "end"), a2 += i2.offsetX, s2 = s2 + parseInt(i2.style.fontSize, 10) + i2.margin / 2, void 0 !== i2.text) {
        var o2 = new k(this.ctx).drawText({ x: a2, y: s2, text: i2.text, textAnchor: r2, fontSize: i2.style.fontSize, fontFamily: i2.style.fontFamily, fontWeight: i2.style.fontWeight, foreColor: i2.style.color, opacity: 1 });
        o2.node.setAttribute("class", "apexcharts-".concat(t3, "-text")), e2.globals.dom.Paper.add(o2);
      }
    } }]), t2;
  }(), ot = function() {
    function t2(e2) {
      i(this, t2), this.w = e2.w, this.dCtx = e2;
    }
    return s(t2, [{ key: "getTitleSubtitleCoords", value: function(t3) {
      var e2 = this.w, i2 = 0, a2 = 0, s2 = "title" === t3 ? e2.config.title.floating : e2.config.subtitle.floating, r2 = e2.globals.dom.baseEl.querySelector(".apexcharts-".concat(t3, "-text"));
      if (null !== r2 && !s2) {
        var o2 = r2.getBoundingClientRect();
        i2 = o2.width, a2 = e2.globals.axisCharts ? o2.height + 5 : o2.height;
      }
      return { width: i2, height: a2 };
    } }, { key: "getLegendsRect", value: function() {
      var t3 = this.w, e2 = t3.globals.dom.elLegendWrap;
      t3.config.legend.height || "top" !== t3.config.legend.position && "bottom" !== t3.config.legend.position || (e2.style.maxHeight = t3.globals.svgHeight / 2 + "px");
      var i2 = Object.assign({}, m.getBoundingClientRect(e2));
      return null !== e2 && !t3.config.legend.floating && t3.config.legend.show ? this.dCtx.lgRect = { x: i2.x, y: i2.y, height: i2.height, width: 0 === i2.height ? 0 : i2.width } : this.dCtx.lgRect = { x: 0, y: 0, height: 0, width: 0 }, "left" !== t3.config.legend.position && "right" !== t3.config.legend.position || 1.5 * this.dCtx.lgRect.width > t3.globals.svgWidth && (this.dCtx.lgRect.width = t3.globals.svgWidth / 1.5), this.dCtx.lgRect;
    } }, { key: "getDatalabelsRect", value: function() {
      var t3 = this, e2 = this.w, i2 = [];
      e2.config.series.forEach(function(s3, r3) {
        s3.data.forEach(function(s4, o3) {
          var n2;
          n2 = e2.globals.series[r3][o3], a2 = e2.config.dataLabels.formatter(n2, { ctx: t3.dCtx.ctx, seriesIndex: r3, dataPointIndex: o3, w: e2 }), i2.push(a2);
        });
      });
      var a2 = m.getLargestStringFromArr(i2), s2 = new k(this.dCtx.ctx), r2 = e2.config.dataLabels.style, o2 = s2.getTextRects(a2, parseInt(r2.fontSize), r2.fontFamily);
      return { width: 1.05 * o2.width, height: o2.height };
    } }, { key: "getLargestStringFromMultiArr", value: function(t3, e2) {
      var i2 = t3;
      if (this.w.globals.isMultiLineX) {
        var a2 = e2.map(function(t4, e3) {
          return Array.isArray(t4) ? t4.length : 1;
        }), s2 = Math.max.apply(Math, p(a2));
        i2 = e2[a2.indexOf(s2)];
      }
      return i2;
    } }]), t2;
  }(), nt = function() {
    function t2(e2) {
      i(this, t2), this.w = e2.w, this.dCtx = e2;
    }
    return s(t2, [{ key: "getxAxisLabelsCoords", value: function() {
      var t3, e2 = this.w, i2 = e2.globals.labels.slice();
      if (e2.config.xaxis.convertedCatToNumeric && 0 === i2.length && (i2 = e2.globals.categoryLabels), e2.globals.timescaleLabels.length > 0) {
        var a2 = this.getxAxisTimeScaleLabelsCoords();
        t3 = { width: a2.width, height: a2.height }, e2.globals.rotateXLabels = false;
      } else {
        this.dCtx.lgWidthForSideLegends = "left" !== e2.config.legend.position && "right" !== e2.config.legend.position || e2.config.legend.floating ? 0 : this.dCtx.lgRect.width;
        var s2 = e2.globals.xLabelFormatter, r2 = m.getLargestStringFromArr(i2), o2 = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r2, i2);
        e2.globals.isBarHorizontal && (o2 = r2 = e2.globals.yAxisScale[0].result.reduce(function(t4, e3) {
          return t4.length > e3.length ? t4 : e3;
        }, 0));
        var n2 = new P(this.dCtx.ctx), l2 = r2;
        r2 = n2.xLabelFormat(s2, r2, l2, { i: void 0, dateFormatter: new L(this.dCtx.ctx).formatDate, w: e2 }), o2 = n2.xLabelFormat(s2, o2, l2, { i: void 0, dateFormatter: new L(this.dCtx.ctx).formatDate, w: e2 }), (e2.config.xaxis.convertedCatToNumeric && void 0 === r2 || "" === String(r2).trim()) && (o2 = r2 = "1");
        var h2 = new k(this.dCtx.ctx), c2 = h2.getTextRects(r2, e2.config.xaxis.labels.style.fontSize), d2 = c2;
        if (r2 !== o2 && (d2 = h2.getTextRects(o2, e2.config.xaxis.labels.style.fontSize)), (t3 = { width: c2.width >= d2.width ? c2.width : d2.width, height: c2.height >= d2.height ? c2.height : d2.height }).width * i2.length > e2.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && 0 !== e2.config.xaxis.labels.rotate || e2.config.xaxis.labels.rotateAlways) {
          if (!e2.globals.isBarHorizontal) {
            e2.globals.rotateXLabels = true;
            var g2 = function(t4) {
              return h2.getTextRects(t4, e2.config.xaxis.labels.style.fontSize, e2.config.xaxis.labels.style.fontFamily, "rotate(".concat(e2.config.xaxis.labels.rotate, " 0 0)"), false);
            };
            c2 = g2(r2), r2 !== o2 && (d2 = g2(o2)), t3.height = (c2.height > d2.height ? c2.height : d2.height) / 1.5, t3.width = c2.width > d2.width ? c2.width : d2.width;
          }
        } else e2.globals.rotateXLabels = false;
      }
      return e2.config.xaxis.labels.show || (t3 = { width: 0, height: 0 }), { width: t3.width, height: t3.height };
    } }, { key: "getxAxisGroupLabelsCoords", value: function() {
      var t3, e2 = this.w;
      if (!e2.globals.hasXaxisGroups) return { width: 0, height: 0 };
      var i2, a2 = (null === (t3 = e2.config.xaxis.group.style) || void 0 === t3 ? void 0 : t3.fontSize) || e2.config.xaxis.labels.style.fontSize, s2 = e2.globals.groups.map(function(t4) {
        return t4.title;
      }), r2 = m.getLargestStringFromArr(s2), o2 = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r2, s2), n2 = new k(this.dCtx.ctx), l2 = n2.getTextRects(r2, a2), h2 = l2;
      return r2 !== o2 && (h2 = n2.getTextRects(o2, a2)), i2 = { width: l2.width >= h2.width ? l2.width : h2.width, height: l2.height >= h2.height ? l2.height : h2.height }, e2.config.xaxis.labels.show || (i2 = { width: 0, height: 0 }), { width: i2.width, height: i2.height };
    } }, { key: "getxAxisTitleCoords", value: function() {
      var t3 = this.w, e2 = 0, i2 = 0;
      if (void 0 !== t3.config.xaxis.title.text) {
        var a2 = new k(this.dCtx.ctx).getTextRects(t3.config.xaxis.title.text, t3.config.xaxis.title.style.fontSize);
        e2 = a2.width, i2 = a2.height;
      }
      return { width: e2, height: i2 };
    } }, { key: "getxAxisTimeScaleLabelsCoords", value: function() {
      var t3, e2 = this.w;
      this.dCtx.timescaleLabels = e2.globals.timescaleLabels.slice();
      var i2 = this.dCtx.timescaleLabels.map(function(t4) {
        return t4.value;
      }), a2 = i2.reduce(function(t4, e3) {
        return void 0 === t4 ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : t4.length > e3.length ? t4 : e3;
      }, 0);
      return 1.05 * (t3 = new k(this.dCtx.ctx).getTextRects(a2, e2.config.xaxis.labels.style.fontSize)).width * i2.length > e2.globals.gridWidth && 0 !== e2.config.xaxis.labels.rotate && (e2.globals.overlappingXLabels = true), t3;
    } }, { key: "additionalPaddingXLabels", value: function(t3) {
      var e2 = this, i2 = this.w, a2 = i2.globals, s2 = i2.config, r2 = s2.xaxis.type, o2 = t3.width;
      a2.skipLastTimelinelabel = false, a2.skipFirstTimelinelabel = false;
      var n2 = i2.config.yaxis[0].opposite && i2.globals.isBarHorizontal, l2 = function(t4, n3) {
        s2.yaxis.length > 1 && function(t5) {
          return -1 !== a2.collapsedSeriesIndices.indexOf(t5);
        }(n3) || function(t5) {
          if (e2.dCtx.timescaleLabels && e2.dCtx.timescaleLabels.length) {
            var n4 = e2.dCtx.timescaleLabels[0], l3 = e2.dCtx.timescaleLabels[e2.dCtx.timescaleLabels.length - 1].position + o2 / 1.75 - e2.dCtx.yAxisWidthRight, h2 = n4.position - o2 / 1.75 + e2.dCtx.yAxisWidthLeft, c2 = "right" === i2.config.legend.position && e2.dCtx.lgRect.width > 0 ? e2.dCtx.lgRect.width : 0;
            l3 > a2.svgWidth - a2.translateX - c2 && (a2.skipLastTimelinelabel = true), h2 < -(t5.show && !t5.floating || "bar" !== s2.chart.type && "candlestick" !== s2.chart.type && "rangeBar" !== s2.chart.type && "boxPlot" !== s2.chart.type ? 10 : o2 / 1.75) && (a2.skipFirstTimelinelabel = true);
          } else "datetime" === r2 ? e2.dCtx.gridPad.right < o2 && !a2.rotateXLabels && (a2.skipLastTimelinelabel = true) : "datetime" !== r2 && e2.dCtx.gridPad.right < o2 / 2 - e2.dCtx.yAxisWidthRight && !a2.rotateXLabels && !i2.config.xaxis.labels.trim && (e2.dCtx.xPadRight = o2 / 2 + 1);
        }(t4);
      };
      s2.yaxis.forEach(function(t4, i3) {
        n2 ? (e2.dCtx.gridPad.left < o2 && (e2.dCtx.xPadLeft = o2 / 2 + 1), e2.dCtx.xPadRight = o2 / 2 + 1) : l2(t4, i3);
      });
    } }]), t2;
  }(), lt = function() {
    function t2(e2) {
      i(this, t2), this.w = e2.w, this.dCtx = e2;
    }
    return s(t2, [{ key: "getyAxisLabelsCoords", value: function() {
      var t3 = this, e2 = this.w, i2 = [], a2 = 10, s2 = new M(this.dCtx.ctx);
      return e2.config.yaxis.map(function(r2, o2) {
        var n2 = { seriesIndex: o2, dataPointIndex: -1, w: e2 }, l2 = e2.globals.yAxisScale[o2], h2 = 0;
        if (!s2.isYAxisHidden(o2) && r2.labels.show && void 0 !== r2.labels.minWidth && (h2 = r2.labels.minWidth), !s2.isYAxisHidden(o2) && r2.labels.show && l2.result.length) {
          var c2 = e2.globals.yLabelFormatters[o2], d2 = l2.niceMin === Number.MIN_VALUE ? 0 : l2.niceMin, g2 = l2.result.reduce(function(t4, e3) {
            var i3, a3;
            return (null === (i3 = String(c2(t4, n2))) || void 0 === i3 ? void 0 : i3.length) > (null === (a3 = String(c2(e3, n2))) || void 0 === a3 ? void 0 : a3.length) ? t4 : e3;
          }, d2), u2 = g2 = c2(g2, n2);
          if (void 0 !== g2 && 0 !== g2.length || (g2 = l2.niceMax), e2.globals.isBarHorizontal) {
            a2 = 0;
            var f2 = e2.globals.labels.slice();
            g2 = m.getLargestStringFromArr(f2), g2 = c2(g2, { seriesIndex: o2, dataPointIndex: -1, w: e2 }), u2 = t3.dCtx.dimHelpers.getLargestStringFromMultiArr(g2, f2);
          }
          var p2 = new k(t3.dCtx.ctx), x2 = "rotate(".concat(r2.labels.rotate, " 0 0)"), b2 = p2.getTextRects(g2, r2.labels.style.fontSize, r2.labels.style.fontFamily, x2, false), v2 = b2;
          g2 !== u2 && (v2 = p2.getTextRects(u2, r2.labels.style.fontSize, r2.labels.style.fontFamily, x2, false)), i2.push({ width: (h2 > v2.width || h2 > b2.width ? h2 : v2.width > b2.width ? v2.width : b2.width) + a2, height: v2.height > b2.height ? v2.height : b2.height });
        } else i2.push({ width: 0, height: 0 });
      }), i2;
    } }, { key: "getyAxisTitleCoords", value: function() {
      var t3 = this, e2 = this.w, i2 = [];
      return e2.config.yaxis.map(function(e3, a2) {
        if (e3.show && void 0 !== e3.title.text) {
          var s2 = new k(t3.dCtx.ctx), r2 = "rotate(".concat(e3.title.rotate, " 0 0)"), o2 = s2.getTextRects(e3.title.text, e3.title.style.fontSize, e3.title.style.fontFamily, r2, false);
          i2.push({ width: o2.width, height: o2.height });
        } else i2.push({ width: 0, height: 0 });
      }), i2;
    } }, { key: "getTotalYAxisWidth", value: function() {
      var t3 = this.w, e2 = 0, i2 = 0, a2 = 0, s2 = t3.globals.yAxisScale.length > 1 ? 10 : 0, r2 = new M(this.dCtx.ctx), o2 = function(o3, n2) {
        var l2 = t3.config.yaxis[n2].floating, h2 = 0;
        o3.width > 0 && !l2 ? (h2 = o3.width + s2, function(e3) {
          return t3.globals.ignoreYAxisIndexes.indexOf(e3) > -1;
        }(n2) && (h2 = h2 - o3.width - s2)) : h2 = l2 || r2.isYAxisHidden(n2) ? 0 : 5, t3.config.yaxis[n2].opposite ? a2 += h2 : i2 += h2, e2 += h2;
      };
      return t3.globals.yLabelsCoords.map(function(t4, e3) {
        o2(t4, e3);
      }), t3.globals.yTitleCoords.map(function(t4, e3) {
        o2(t4, e3);
      }), t3.globals.isBarHorizontal && !t3.config.yaxis[0].floating && (e2 = t3.globals.yLabelsCoords[0].width + t3.globals.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = i2, this.dCtx.yAxisWidthRight = a2, e2;
    } }]), t2;
  }(), ht = function() {
    function t2(e2) {
      i(this, t2), this.w = e2.w, this.dCtx = e2;
    }
    return s(t2, [{ key: "gridPadForColumnsInNumericAxis", value: function(t3) {
      var e2 = this.w, i2 = e2.config, a2 = e2.globals;
      if (a2.noData || a2.collapsedSeries.length + a2.ancillaryCollapsedSeries.length === i2.series.length) return 0;
      var s2 = function(t4) {
        return ["bar", "rangeBar", "candlestick", "boxPlot"].includes(t4);
      }, r2 = i2.chart.type, o2 = 0, n2 = s2(r2) ? i2.series.length : 1;
      a2.comboBarCount > 0 && (n2 = a2.comboBarCount), a2.collapsedSeries.forEach(function(t4) {
        s2(t4.type) && (n2 -= 1);
      }), i2.chart.stacked && (n2 = 1);
      var l2 = s2(r2) || a2.comboBarCount > 0, h2 = Math.abs(a2.initialMaxX - a2.initialMinX);
      if (l2 && a2.isXNumeric && !a2.isBarHorizontal && n2 > 0 && 0 !== h2) {
        h2 <= 3 && (h2 = a2.dataPoints);
        var c2 = h2 / t3, d2 = a2.minXDiff && a2.minXDiff / c2 > 0 ? a2.minXDiff / c2 : 0;
        d2 > t3 / 2 && (d2 /= 2), (o2 = d2 * parseInt(i2.plotOptions.bar.columnWidth, 10) / 100) < 1 && (o2 = 1), a2.barPadForNumericAxis = o2;
      }
      return o2;
    } }, { key: "gridPadFortitleSubtitle", value: function() {
      var t3 = this, e2 = this.w, i2 = e2.globals, a2 = this.dCtx.isSparkline || !i2.axisCharts ? 0 : 10;
      ["title", "subtitle"].forEach(function(s3) {
        void 0 !== e2.config[s3].text ? a2 += e2.config[s3].margin : a2 += t3.dCtx.isSparkline || !i2.axisCharts ? 0 : 5;
      }), !e2.config.legend.show || "bottom" !== e2.config.legend.position || e2.config.legend.floating || i2.axisCharts || (a2 += 10);
      var s2 = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"), r2 = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
      i2.gridHeight -= s2.height + r2.height + a2, i2.translateY += s2.height + r2.height + a2;
    } }, { key: "setGridXPosForDualYAxis", value: function(t3, e2) {
      var i2 = this.w, a2 = new M(this.dCtx.ctx);
      i2.config.yaxis.forEach(function(s2, r2) {
        -1 !== i2.globals.ignoreYAxisIndexes.indexOf(r2) || s2.floating || a2.isYAxisHidden(r2) || (s2.opposite && (i2.globals.translateX -= e2[r2].width + t3[r2].width + parseInt(s2.labels.style.fontSize, 10) / 1.2 + 12), i2.globals.translateX < 2 && (i2.globals.translateX = 2));
      });
    } }]), t2;
  }(), ct = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new ot(this), this.dimYAxis = new lt(this), this.dimXAxis = new nt(this), this.dimGrid = new ht(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0;
    }
    return s(t2, [{ key: "plotCoords", value: function() {
      var t3 = this, e2 = this.w, i2 = e2.globals;
      this.lgRect = this.dimHelpers.getLegendsRect(), this.datalabelsCoords = { width: 0, height: 0 };
      var a2 = Array.isArray(e2.config.stroke.width) ? Math.max.apply(Math, p(e2.config.stroke.width)) : e2.config.stroke.width;
      this.isSparkline && ((e2.config.markers.discrete.length > 0 || e2.config.markers.size > 0) && Object.entries(this.gridPad).forEach(function(e3) {
        var i3 = f(e3, 2), a3 = i3[0], s3 = i3[1];
        t3.gridPad[a3] = Math.max(s3, t3.w.globals.markers.largestSize / 1.5);
      }), this.gridPad.top = Math.max(a2 / 2, this.gridPad.top), this.gridPad.bottom = Math.max(a2 / 2, this.gridPad.bottom)), i2.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), i2.gridHeight = i2.gridHeight - this.gridPad.top - this.gridPad.bottom, i2.gridWidth = i2.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft;
      var s2 = this.dimGrid.gridPadForColumnsInNumericAxis(i2.gridWidth);
      i2.gridWidth = i2.gridWidth - 2 * s2, i2.translateX = i2.translateX + this.gridPad.left + this.xPadLeft + (s2 > 0 ? s2 : 0), i2.translateY = i2.translateY + this.gridPad.top;
    } }, { key: "setDimensionsForAxisCharts", value: function() {
      var t3 = this, e2 = this.w, i2 = e2.globals, a2 = this.dimYAxis.getyAxisLabelsCoords(), s2 = this.dimYAxis.getyAxisTitleCoords();
      i2.isSlopeChart && (this.datalabelsCoords = this.dimHelpers.getDatalabelsRect()), e2.globals.yLabelsCoords = [], e2.globals.yTitleCoords = [], e2.config.yaxis.map(function(t4, i3) {
        e2.globals.yLabelsCoords.push({ width: a2[i3].width, index: i3 }), e2.globals.yTitleCoords.push({ width: s2[i3].width, index: i3 });
      }), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth();
      var r2 = this.dimXAxis.getxAxisLabelsCoords(), o2 = this.dimXAxis.getxAxisGroupLabelsCoords(), n2 = this.dimXAxis.getxAxisTitleCoords();
      this.conditionalChecksForAxisCoords(r2, n2, o2), i2.translateXAxisY = e2.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, i2.translateXAxisX = e2.globals.rotateXLabels && e2.globals.isXNumeric && e2.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, e2.globals.isBarHorizontal && (i2.rotateXLabels = false, i2.translateXAxisY = parseInt(e2.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), i2.translateXAxisY = i2.translateXAxisY + e2.config.xaxis.labels.offsetY, i2.translateXAxisX = i2.translateXAxisX + e2.config.xaxis.labels.offsetX;
      var l2 = this.yAxisWidth, h2 = this.xAxisHeight;
      i2.xAxisLabelsHeight = this.xAxisHeight - n2.height, i2.xAxisGroupLabelsHeight = i2.xAxisLabelsHeight - r2.height, i2.xAxisLabelsWidth = this.xAxisWidth, i2.xAxisHeight = this.xAxisHeight;
      var c2 = 10;
      ("radar" === e2.config.chart.type || this.isSparkline) && (l2 = 0, h2 = 0), this.isSparkline && (this.lgRect = { height: 0, width: 0 }), (this.isSparkline || "treemap" === e2.config.chart.type) && (l2 = 0, h2 = 0, c2 = 0), this.isSparkline || "treemap" === e2.config.chart.type || this.dimXAxis.additionalPaddingXLabels(r2);
      var d2 = function() {
        i2.translateX = l2 + t3.datalabelsCoords.width, i2.gridHeight = i2.svgHeight - t3.lgRect.height - h2 - (t3.isSparkline || "treemap" === e2.config.chart.type ? 0 : e2.globals.rotateXLabels ? 10 : 15), i2.gridWidth = i2.svgWidth - l2 - 2 * t3.datalabelsCoords.width;
      };
      switch ("top" === e2.config.xaxis.position && (c2 = i2.xAxisHeight - e2.config.xaxis.axisTicks.height - 5), e2.config.legend.position) {
        case "bottom":
          i2.translateY = c2, d2();
          break;
        case "top":
          i2.translateY = this.lgRect.height + c2, d2();
          break;
        case "left":
          i2.translateY = c2, i2.translateX = this.lgRect.width + l2 + this.datalabelsCoords.width, i2.gridHeight = i2.svgHeight - h2 - 12, i2.gridWidth = i2.svgWidth - this.lgRect.width - l2 - 2 * this.datalabelsCoords.width;
          break;
        case "right":
          i2.translateY = c2, i2.translateX = l2 + this.datalabelsCoords.width, i2.gridHeight = i2.svgHeight - h2 - 12, i2.gridWidth = i2.svgWidth - this.lgRect.width - l2 - 2 * this.datalabelsCoords.width - 5;
          break;
        default:
          throw new Error("Legend position not supported");
      }
      this.dimGrid.setGridXPosForDualYAxis(s2, a2), new Q(this.ctx).setYAxisXPosition(a2, s2);
    } }, { key: "setDimensionsForNonAxisCharts", value: function() {
      var t3 = this.w, e2 = t3.globals, i2 = t3.config, a2 = 0;
      t3.config.legend.show && !t3.config.legend.floating && (a2 = 20);
      var s2 = "pie" === i2.chart.type || "polarArea" === i2.chart.type || "donut" === i2.chart.type ? "pie" : "radialBar", r2 = i2.plotOptions[s2].offsetY, o2 = i2.plotOptions[s2].offsetX;
      if (!i2.legend.show || i2.legend.floating) {
        e2.gridHeight = e2.svgHeight;
        var n2 = e2.dom.elWrap.getBoundingClientRect().width;
        return e2.gridWidth = Math.min(n2, e2.gridHeight), e2.translateY = r2, void (e2.translateX = o2 + (e2.svgWidth - e2.gridWidth) / 2);
      }
      switch (i2.legend.position) {
        case "bottom":
          e2.gridHeight = e2.svgHeight - this.lgRect.height, e2.gridWidth = e2.svgWidth, e2.translateY = r2 - 10, e2.translateX = o2 + (e2.svgWidth - e2.gridWidth) / 2;
          break;
        case "top":
          e2.gridHeight = e2.svgHeight - this.lgRect.height, e2.gridWidth = e2.svgWidth, e2.translateY = this.lgRect.height + r2 + 10, e2.translateX = o2 + (e2.svgWidth - e2.gridWidth) / 2;
          break;
        case "left":
          e2.gridWidth = e2.svgWidth - this.lgRect.width - a2, e2.gridHeight = "auto" !== i2.chart.height ? e2.svgHeight : e2.gridWidth, e2.translateY = r2, e2.translateX = o2 + this.lgRect.width + a2;
          break;
        case "right":
          e2.gridWidth = e2.svgWidth - this.lgRect.width - a2 - 5, e2.gridHeight = "auto" !== i2.chart.height ? e2.svgHeight : e2.gridWidth, e2.translateY = r2, e2.translateX = o2 + 10;
          break;
        default:
          throw new Error("Legend position not supported");
      }
    } }, { key: "conditionalChecksForAxisCoords", value: function(t3, e2, i2) {
      var a2 = this.w, s2 = a2.globals.hasXaxisGroups ? 2 : 1, r2 = i2.height + t3.height + e2.height, o2 = a2.globals.isMultiLineX ? 1.2 : a2.globals.LINE_HEIGHT_RATIO, n2 = a2.globals.rotateXLabels ? 22 : 10, l2 = a2.globals.rotateXLabels && "bottom" === a2.config.legend.position ? 10 : 0;
      this.xAxisHeight = r2 * o2 + s2 * n2 + l2, this.xAxisWidth = t3.width, this.xAxisHeight - e2.height > a2.config.xaxis.labels.maxHeight && (this.xAxisHeight = a2.config.xaxis.labels.maxHeight), a2.config.xaxis.labels.minHeight && this.xAxisHeight < a2.config.xaxis.labels.minHeight && (this.xAxisHeight = a2.config.xaxis.labels.minHeight), a2.config.xaxis.floating && (this.xAxisHeight = 0);
      var h2 = 0, c2 = 0;
      a2.config.yaxis.forEach(function(t4) {
        h2 += t4.labels.minWidth, c2 += t4.labels.maxWidth;
      }), this.yAxisWidth < h2 && (this.yAxisWidth = h2), this.yAxisWidth > c2 && (this.yAxisWidth = c2);
    } }]), t2;
  }(), dt = function() {
    function t2(e2) {
      i(this, t2), this.w = e2.w, this.lgCtx = e2;
    }
    return s(t2, [{ key: "getLegendStyles", value: function() {
      var t3, e2, i2, a2 = document.createElement("style");
      a2.setAttribute("type", "text/css");
      var s2 = (null === (t3 = this.lgCtx.ctx) || void 0 === t3 || null === (e2 = t3.opts) || void 0 === e2 || null === (i2 = e2.chart) || void 0 === i2 ? void 0 : i2.nonce) || this.w.config.chart.nonce;
      s2 && a2.setAttribute("nonce", s2);
      var r2 = document.createTextNode("\n      .apexcharts-flip-y {\n        transform: scaleY(-1) translateY(-100%);\n        transform-origin: top;\n        transform-box: fill-box;\n      }\n      .apexcharts-flip-x {\n        transform: scaleX(-1);\n        transform-origin: center;\n        transform-box: fill-box;\n      }\n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        justify-content: flex-start;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n        justify-content: center;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n        justify-content: flex-end;\n      }\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n        display: flex;\n        align-items: center;\n      }\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n      .apexcharts-legend-marker {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        margin-right: 1px;\n      }\n\n      .apexcharts-legend-series.apexcharts-no-click {\n        cursor: auto;\n      }\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n      .apexcharts-inactive-legend {\n        opacity: 0.45;\n      }");
      return a2.appendChild(r2), a2;
    } }, { key: "getLegendDimensions", value: function() {
      var t3 = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(), e2 = t3.width;
      return { clwh: t3.height, clww: e2 };
    } }, { key: "appendToForeignObject", value: function() {
      this.w.globals.dom.elLegendForeign.appendChild(this.getLegendStyles());
    } }, { key: "toggleDataSeries", value: function(t3, e2) {
      var i2 = this, a2 = this.w;
      if (a2.globals.axisCharts || "radialBar" === a2.config.chart.type) {
        a2.globals.resized = true;
        var s2 = null, r2 = null;
        if (a2.globals.risingSeries = [], a2.globals.axisCharts ? (s2 = a2.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t3, "']")), r2 = parseInt(s2.getAttribute("data:realIndex"), 10)) : (s2 = a2.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t3 + 1, "']")), r2 = parseInt(s2.getAttribute("rel"), 10) - 1), e2) [{ cs: a2.globals.collapsedSeries, csi: a2.globals.collapsedSeriesIndices }, { cs: a2.globals.ancillaryCollapsedSeries, csi: a2.globals.ancillaryCollapsedSeriesIndices }].forEach(function(t4) {
          i2.riseCollapsedSeries(t4.cs, t4.csi, r2);
        });
        else this.hideSeries({ seriesEl: s2, realIndex: r2 });
      } else {
        var o2 = a2.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t3 + 1, "'] path")), n2 = a2.config.chart.type;
        if ("pie" === n2 || "polarArea" === n2 || "donut" === n2) {
          var l2 = a2.config.plotOptions.pie.donut.labels;
          new k(this.lgCtx.ctx).pathMouseDown(o2.members[0], null), this.lgCtx.ctx.pie.printDataLabelsInner(o2.members[0].node, l2);
        }
        o2.fire("click");
      }
    } }, { key: "getSeriesAfterCollapsing", value: function(t3) {
      var e2 = t3.realIndex, i2 = this.w, a2 = i2.globals, s2 = m.clone(i2.config.series);
      if (a2.axisCharts) {
        var r2 = i2.config.yaxis[a2.seriesYAxisReverseMap[e2]], o2 = { index: e2, data: s2[e2].data.slice(), type: s2[e2].type || i2.config.chart.type };
        if (r2 && r2.show && r2.showAlways) a2.ancillaryCollapsedSeriesIndices.indexOf(e2) < 0 && (a2.ancillaryCollapsedSeries.push(o2), a2.ancillaryCollapsedSeriesIndices.push(e2));
        else if (a2.collapsedSeriesIndices.indexOf(e2) < 0) {
          a2.collapsedSeries.push(o2), a2.collapsedSeriesIndices.push(e2);
          var n2 = a2.risingSeries.indexOf(e2);
          a2.risingSeries.splice(n2, 1);
        }
      } else a2.collapsedSeries.push({ index: e2, data: s2[e2] }), a2.collapsedSeriesIndices.push(e2);
      return a2.allSeriesCollapsed = a2.collapsedSeries.length + a2.ancillaryCollapsedSeries.length === i2.config.series.length, this._getSeriesBasedOnCollapsedState(s2);
    } }, { key: "hideSeries", value: function(t3) {
      for (var e2 = t3.seriesEl, i2 = t3.realIndex, a2 = this.w, s2 = this.getSeriesAfterCollapsing({ realIndex: i2 }), r2 = e2.childNodes, o2 = 0; o2 < r2.length; o2++) r2[o2].classList.contains("apexcharts-series-markers-wrap") && (r2[o2].classList.contains("apexcharts-hide") ? r2[o2].classList.remove("apexcharts-hide") : r2[o2].classList.add("apexcharts-hide"));
      this.lgCtx.ctx.updateHelpers._updateSeries(s2, a2.config.chart.animations.dynamicAnimation.enabled);
    } }, { key: "riseCollapsedSeries", value: function(t3, e2, i2) {
      var a2 = this.w, s2 = m.clone(a2.config.series);
      if (t3.length > 0) {
        for (var r2 = 0; r2 < t3.length; r2++) t3[r2].index === i2 && (a2.globals.axisCharts ? s2[i2].data = t3[r2].data.slice() : s2[i2] = t3[r2].data, s2[i2].hidden = false, t3.splice(r2, 1), e2.splice(r2, 1), a2.globals.risingSeries.push(i2));
        s2 = this._getSeriesBasedOnCollapsedState(s2), this.lgCtx.ctx.updateHelpers._updateSeries(s2, a2.config.chart.animations.dynamicAnimation.enabled);
      }
    } }, { key: "_getSeriesBasedOnCollapsedState", value: function(t3) {
      var e2 = this.w, i2 = 0;
      return e2.globals.axisCharts ? t3.forEach(function(a2, s2) {
        e2.globals.collapsedSeriesIndices.indexOf(s2) < 0 && e2.globals.ancillaryCollapsedSeriesIndices.indexOf(s2) < 0 || (t3[s2].data = [], i2++);
      }) : t3.forEach(function(a2, s2) {
        !e2.globals.collapsedSeriesIndices.indexOf(s2) < 0 && (t3[s2] = 0, i2++);
      }), e2.globals.allSeriesCollapsed = i2 === t3.length, t3;
    } }]), t2;
  }(), gt = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = "bar" === this.w.config.chart.type && this.w.config.plotOptions.bar.distributed && 1 === this.w.config.series.length, this.legendHelpers = new dt(this);
    }
    return s(t2, [{ key: "init", value: function() {
      var t3 = this.w, e2 = t3.globals, i2 = t3.config, a2 = i2.legend.showForSingleSeries && 1 === e2.series.length || this.isBarsDistributed || e2.series.length > 1;
      if (this.legendHelpers.appendToForeignObject(), (a2 || !e2.axisCharts) && i2.legend.show) {
        for (; e2.dom.elLegendWrap.firstChild; ) e2.dom.elLegendWrap.removeChild(e2.dom.elLegendWrap.firstChild);
        this.drawLegends(), "bottom" === i2.legend.position || "top" === i2.legend.position ? this.legendAlignHorizontal() : "right" !== i2.legend.position && "left" !== i2.legend.position || this.legendAlignVertical();
      }
    } }, { key: "createLegendMarker", value: function(t3) {
      var e2 = t3.i, i2 = t3.fillcolor, a2 = this.w, s2 = document.createElement("span");
      s2.classList.add("apexcharts-legend-marker");
      var r2 = a2.config.legend.markers.shape || a2.config.markers.shape, o2 = r2;
      Array.isArray(r2) && (o2 = r2[e2]);
      var n2 = Array.isArray(a2.config.legend.markers.size) ? parseFloat(a2.config.legend.markers.size[e2]) : parseFloat(a2.config.legend.markers.size), l2 = Array.isArray(a2.config.legend.markers.offsetX) ? parseFloat(a2.config.legend.markers.offsetX[e2]) : parseFloat(a2.config.legend.markers.offsetX), h2 = Array.isArray(a2.config.legend.markers.offsetY) ? parseFloat(a2.config.legend.markers.offsetY[e2]) : parseFloat(a2.config.legend.markers.offsetY), c2 = Array.isArray(a2.config.legend.markers.strokeWidth) ? parseFloat(a2.config.legend.markers.strokeWidth[e2]) : parseFloat(a2.config.legend.markers.strokeWidth), d2 = s2.style;
      if (d2.height = 2 * (n2 + c2) + "px", d2.width = 2 * (n2 + c2) + "px", d2.left = l2 + "px", d2.top = h2 + "px", a2.config.legend.markers.customHTML) d2.background = "transparent", d2.color = i2[e2], Array.isArray(a2.config.legend.markers.customHTML) ? a2.config.legend.markers.customHTML[e2] && (s2.innerHTML = a2.config.legend.markers.customHTML[e2]()) : s2.innerHTML = a2.config.legend.markers.customHTML();
      else {
        var u2 = new W(this.ctx).getMarkerConfig({ cssClass: "apexcharts-legend-marker apexcharts-marker apexcharts-marker-".concat(o2), seriesIndex: e2, strokeWidth: c2, size: n2 }), f2 = SVG(s2).size("100%", "100%"), p2 = new k(this.ctx).drawMarker(0, 0, g(g({}, u2), {}, { pointFillColor: Array.isArray(i2) ? i2[e2] : u2.pointFillColor, shape: o2 }));
        SVG.select(".apexcharts-legend-marker.apexcharts-marker").members.forEach(function(t4) {
          t4.node.classList.contains("apexcharts-marker-triangle") ? t4.node.style.transform = "translate(50%, 45%)" : t4.node.style.transform = "translate(50%, 50%)";
        }), f2.add(p2);
      }
      return s2;
    } }, { key: "drawLegends", value: function() {
      var t3 = this, e2 = this.w, i2 = e2.config.legend.fontFamily, a2 = e2.globals.seriesNames, s2 = e2.config.legend.markers.fillColors ? e2.config.legend.markers.fillColors.slice() : e2.globals.colors.slice();
      if ("heatmap" === e2.config.chart.type) {
        var r2 = e2.config.plotOptions.heatmap.colorScale.ranges;
        a2 = r2.map(function(t4) {
          return t4.name ? t4.name : t4.from + " - " + t4.to;
        }), s2 = r2.map(function(t4) {
          return t4.color;
        });
      } else this.isBarsDistributed && (a2 = e2.globals.labels.slice());
      e2.config.legend.customLegendItems.length && (a2 = e2.config.legend.customLegendItems);
      for (var o2 = e2.globals.legendFormatter, n2 = e2.config.legend.inverseOrder, l2 = n2 ? a2.length - 1 : 0; n2 ? l2 >= 0 : l2 <= a2.length - 1; n2 ? l2-- : l2++) {
        var h2, c2 = o2(a2[l2], { seriesIndex: l2, w: e2 }), d2 = false, g2 = false;
        if (e2.globals.collapsedSeries.length > 0) for (var u2 = 0; u2 < e2.globals.collapsedSeries.length; u2++) e2.globals.collapsedSeries[u2].index === l2 && (d2 = true);
        if (e2.globals.ancillaryCollapsedSeriesIndices.length > 0) for (var f2 = 0; f2 < e2.globals.ancillaryCollapsedSeriesIndices.length; f2++) e2.globals.ancillaryCollapsedSeriesIndices[f2] === l2 && (g2 = true);
        var p2 = this.createLegendMarker({ i: l2, fillcolor: s2 });
        k.setAttrs(p2, { rel: l2 + 1, "data:collapsed": d2 || g2 }), (d2 || g2) && p2.classList.add("apexcharts-inactive-legend");
        var x2 = document.createElement("div"), b2 = document.createElement("span");
        b2.classList.add("apexcharts-legend-text"), b2.innerHTML = Array.isArray(c2) ? c2.join(" ") : c2;
        var v2 = e2.config.legend.labels.useSeriesColors ? e2.globals.colors[l2] : Array.isArray(e2.config.legend.labels.colors) ? null === (h2 = e2.config.legend.labels.colors) || void 0 === h2 ? void 0 : h2[l2] : e2.config.legend.labels.colors;
        v2 || (v2 = e2.config.chart.foreColor), b2.style.color = v2, b2.style.fontSize = parseFloat(e2.config.legend.fontSize) + "px", b2.style.fontWeight = e2.config.legend.fontWeight, b2.style.fontFamily = i2 || e2.config.chart.fontFamily, k.setAttrs(b2, { rel: l2 + 1, i: l2, "data:default-text": encodeURIComponent(c2), "data:collapsed": d2 || g2 }), x2.appendChild(p2), x2.appendChild(b2);
        var y2 = new A(this.ctx);
        if (!e2.config.legend.showForZeroSeries) 0 === y2.getSeriesTotalByIndex(l2) && y2.seriesHaveSameValues(l2) && !y2.isSeriesNull(l2) && -1 === e2.globals.collapsedSeriesIndices.indexOf(l2) && -1 === e2.globals.ancillaryCollapsedSeriesIndices.indexOf(l2) && x2.classList.add("apexcharts-hidden-zero-series");
        e2.config.legend.showForNullSeries || y2.isSeriesNull(l2) && -1 === e2.globals.collapsedSeriesIndices.indexOf(l2) && -1 === e2.globals.ancillaryCollapsedSeriesIndices.indexOf(l2) && x2.classList.add("apexcharts-hidden-null-series"), e2.globals.dom.elLegendWrap.appendChild(x2), e2.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(e2.config.legend.horizontalAlign)), e2.globals.dom.elLegendWrap.classList.add("apx-legend-position-" + e2.config.legend.position), x2.classList.add("apexcharts-legend-series"), x2.style.margin = "".concat(e2.config.legend.itemMargin.vertical, "px ").concat(e2.config.legend.itemMargin.horizontal, "px"), e2.globals.dom.elLegendWrap.style.width = e2.config.legend.width ? e2.config.legend.width + "px" : "", e2.globals.dom.elLegendWrap.style.height = e2.config.legend.height ? e2.config.legend.height + "px" : "", k.setAttrs(x2, { rel: l2 + 1, seriesName: m.escapeString(a2[l2]), "data:collapsed": d2 || g2 }), (d2 || g2) && x2.classList.add("apexcharts-inactive-legend"), e2.config.legend.onItemClick.toggleDataSeries || x2.classList.add("apexcharts-no-click");
      }
      e2.globals.dom.elWrap.addEventListener("click", t3.onLegendClick, true), e2.config.legend.onItemHover.highlightDataSeries && 0 === e2.config.legend.customLegendItems.length && (e2.globals.dom.elWrap.addEventListener("mousemove", t3.onLegendHovered, true), e2.globals.dom.elWrap.addEventListener("mouseout", t3.onLegendHovered, true));
    } }, { key: "setLegendWrapXY", value: function(t3, e2) {
      var i2 = this.w, a2 = i2.globals.dom.elLegendWrap, s2 = a2.clientHeight, r2 = 0, o2 = 0;
      if ("bottom" === i2.config.legend.position) o2 = i2.globals.svgHeight - Math.min(s2, i2.globals.svgHeight / 2) - 5;
      else if ("top" === i2.config.legend.position) {
        var n2 = new ct(this.ctx), l2 = n2.dimHelpers.getTitleSubtitleCoords("title").height, h2 = n2.dimHelpers.getTitleSubtitleCoords("subtitle").height;
        o2 = (l2 > 0 ? l2 - 10 : 0) + (h2 > 0 ? h2 - 10 : 0);
      }
      a2.style.position = "absolute", r2 = r2 + t3 + i2.config.legend.offsetX, o2 = o2 + e2 + i2.config.legend.offsetY, a2.style.left = r2 + "px", a2.style.top = o2 + "px", "right" === i2.config.legend.position && (a2.style.left = "auto", a2.style.right = 25 + i2.config.legend.offsetX + "px");
      ["width", "height"].forEach(function(t4) {
        a2.style[t4] && (a2.style[t4] = parseInt(i2.config.legend[t4], 10) + "px");
      });
    } }, { key: "legendAlignHorizontal", value: function() {
      var t3 = this.w;
      t3.globals.dom.elLegendWrap.style.right = 0;
      var e2 = new ct(this.ctx), i2 = e2.dimHelpers.getTitleSubtitleCoords("title"), a2 = e2.dimHelpers.getTitleSubtitleCoords("subtitle"), s2 = 0;
      "top" === t3.config.legend.position && (s2 = i2.height + a2.height + t3.config.title.margin + t3.config.subtitle.margin - 10), this.setLegendWrapXY(20, s2);
    } }, { key: "legendAlignVertical", value: function() {
      var t3 = this.w, e2 = this.legendHelpers.getLegendDimensions(), i2 = 0;
      "left" === t3.config.legend.position && (i2 = 20), "right" === t3.config.legend.position && (i2 = t3.globals.svgWidth - e2.clww - 10), this.setLegendWrapXY(i2, 20);
    } }, { key: "onLegendHovered", value: function(t3) {
      var e2 = this.w, i2 = t3.target.classList.contains("apexcharts-legend-series") || t3.target.classList.contains("apexcharts-legend-text") || t3.target.classList.contains("apexcharts-legend-marker");
      if ("heatmap" === e2.config.chart.type || this.isBarsDistributed) {
        if (i2) {
          var a2 = parseInt(t3.target.getAttribute("rel"), 10) - 1;
          this.ctx.events.fireEvent("legendHover", [this.ctx, a2, this.w]), new V(this.ctx).highlightRangeInSeries(t3, t3.target);
        }
      } else !t3.target.classList.contains("apexcharts-inactive-legend") && i2 && new V(this.ctx).toggleSeriesOnHover(t3, t3.target);
    } }, { key: "onLegendClick", value: function(t3) {
      var e2 = this.w;
      if (!e2.config.legend.customLegendItems.length && (t3.target.classList.contains("apexcharts-legend-series") || t3.target.classList.contains("apexcharts-legend-text") || t3.target.classList.contains("apexcharts-legend-marker"))) {
        var i2 = parseInt(t3.target.getAttribute("rel"), 10) - 1, a2 = "true" === t3.target.getAttribute("data:collapsed"), s2 = this.w.config.chart.events.legendClick;
        "function" == typeof s2 && s2(this.ctx, i2, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, i2, this.w]);
        var r2 = this.w.config.legend.markers.onClick;
        "function" == typeof r2 && t3.target.classList.contains("apexcharts-legend-marker") && (r2(this.ctx, i2, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, i2, this.w])), "treemap" !== e2.config.chart.type && "heatmap" !== e2.config.chart.type && !this.isBarsDistributed && e2.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(i2, a2);
      }
    } }]), t2;
  }(), ut = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
      var a2 = this.w;
      this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = a2.globals.minX, this.maxX = a2.globals.maxX;
    }
    return s(t2, [{ key: "createToolbar", value: function() {
      var t3 = this, e2 = this.w, i2 = function() {
        return document.createElement("div");
      }, a2 = i2();
      if (a2.setAttribute("class", "apexcharts-toolbar"), a2.style.top = e2.config.chart.toolbar.offsetY + "px", a2.style.right = 3 - e2.config.chart.toolbar.offsetX + "px", e2.globals.dom.elWrap.appendChild(a2), this.elZoom = i2(), this.elZoomIn = i2(), this.elZoomOut = i2(), this.elPan = i2(), this.elSelection = i2(), this.elZoomReset = i2(), this.elMenuIcon = i2(), this.elMenu = i2(), this.elCustomIcons = [], this.t = e2.config.chart.toolbar.tools, Array.isArray(this.t.customIcons)) for (var s2 = 0; s2 < this.t.customIcons.length; s2++) this.elCustomIcons.push(i2());
      var r2 = [], o2 = function(i3, a3, s3) {
        var o3 = i3.toLowerCase();
        t3.t[o3] && e2.config.chart.zoom.enabled && r2.push({ el: a3, icon: "string" == typeof t3.t[o3] ? t3.t[o3] : s3, title: t3.localeValues[i3], class: "apexcharts-".concat(o3, "-icon") });
      };
      o2("zoomIn", this.elZoomIn, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'), o2("zoomOut", this.elZoomOut, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n');
      var n2 = function(i3) {
        t3.t[i3] && e2.config.chart[i3].enabled && r2.push({ el: "zoom" === i3 ? t3.elZoom : t3.elSelection, icon: "string" == typeof t3.t[i3] ? t3.t[i3] : "zoom" === i3 ? '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>' : '<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>', title: t3.localeValues["zoom" === i3 ? "selectionZoom" : "selection"], class: e2.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-".concat(i3, "-icon") });
      };
      n2("zoom"), n2("selection"), this.t.pan && e2.config.chart.zoom.enabled && r2.push({ el: this.elPan, icon: "string" == typeof this.t.pan ? this.t.pan : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>', title: this.localeValues.pan, class: e2.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-pan-icon" }), o2("reset", this.elZoomReset, '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'), this.t.download && r2.push({ el: this.elMenuIcon, icon: "string" == typeof this.t.download ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>', title: this.localeValues.menu, class: "apexcharts-menu-icon" });
      for (var l2 = 0; l2 < this.elCustomIcons.length; l2++) r2.push({ el: this.elCustomIcons[l2], icon: this.t.customIcons[l2].icon, title: this.t.customIcons[l2].title, index: this.t.customIcons[l2].index, class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[l2].class });
      r2.forEach(function(t4, e3) {
        t4.index && m.moveIndexInArray(r2, e3, t4.index);
      });
      for (var h2 = 0; h2 < r2.length; h2++) k.setAttrs(r2[h2].el, { class: r2[h2].class, title: r2[h2].title }), r2[h2].el.innerHTML = r2[h2].icon, a2.appendChild(r2[h2].el);
      this._createHamburgerMenu(a2), e2.globals.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : e2.globals.panEnabled ? this.elPan.classList.add(this.selectedClass) : e2.globals.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners();
    } }, { key: "_createHamburgerMenu", value: function(t3) {
      this.elMenuItems = [], t3.appendChild(this.elMenu), k.setAttrs(this.elMenu, { class: "apexcharts-menu" });
      for (var e2 = [{ name: "exportSVG", title: this.localeValues.exportToSVG }, { name: "exportPNG", title: this.localeValues.exportToPNG }, { name: "exportCSV", title: this.localeValues.exportToCSV }], i2 = 0; i2 < e2.length; i2++) this.elMenuItems.push(document.createElement("div")), this.elMenuItems[i2].innerHTML = e2[i2].title, k.setAttrs(this.elMenuItems[i2], { class: "apexcharts-menu-item ".concat(e2[i2].name), title: e2[i2].title }), this.elMenu.appendChild(this.elMenuItems[i2]);
    } }, { key: "addToolbarEventListeners", value: function() {
      var t3 = this;
      this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach(function(e3) {
        e3.classList.contains("exportSVG") ? e3.addEventListener("click", t3.handleDownload.bind(t3, "svg")) : e3.classList.contains("exportPNG") ? e3.addEventListener("click", t3.handleDownload.bind(t3, "png")) : e3.classList.contains("exportCSV") && e3.addEventListener("click", t3.handleDownload.bind(t3, "csv"));
      });
      for (var e2 = 0; e2 < this.t.customIcons.length; e2++) this.elCustomIcons[e2].addEventListener("click", this.t.customIcons[e2].click.bind(this, this.ctx, this.ctx.w));
    } }, { key: "toggleZoomSelection", value: function(t3) {
      this.ctx.getSyncedCharts().forEach(function(e2) {
        e2.ctx.toolbar.toggleOtherControls();
        var i2 = "selection" === t3 ? e2.ctx.toolbar.elSelection : e2.ctx.toolbar.elZoom, a2 = "selection" === t3 ? "selectionEnabled" : "zoomEnabled";
        e2.w.globals[a2] = !e2.w.globals[a2], i2.classList.contains(e2.ctx.toolbar.selectedClass) ? i2.classList.remove(e2.ctx.toolbar.selectedClass) : i2.classList.add(e2.ctx.toolbar.selectedClass);
      });
    } }, { key: "getToolbarIconsReference", value: function() {
      var t3 = this.w;
      this.elZoom || (this.elZoom = t3.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = t3.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = t3.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"));
    } }, { key: "enableZoomPanFromToolbar", value: function(t3) {
      this.toggleOtherControls(), "pan" === t3 ? this.w.globals.panEnabled = true : this.w.globals.zoomEnabled = true;
      var e2 = "pan" === t3 ? this.elPan : this.elZoom, i2 = "pan" === t3 ? this.elZoom : this.elPan;
      e2 && e2.classList.add(this.selectedClass), i2 && i2.classList.remove(this.selectedClass);
    } }, { key: "togglePanning", value: function() {
      this.ctx.getSyncedCharts().forEach(function(t3) {
        t3.ctx.toolbar.toggleOtherControls(), t3.w.globals.panEnabled = !t3.w.globals.panEnabled, t3.ctx.toolbar.elPan.classList.contains(t3.ctx.toolbar.selectedClass) ? t3.ctx.toolbar.elPan.classList.remove(t3.ctx.toolbar.selectedClass) : t3.ctx.toolbar.elPan.classList.add(t3.ctx.toolbar.selectedClass);
      });
    } }, { key: "toggleOtherControls", value: function() {
      var t3 = this, e2 = this.w;
      e2.globals.panEnabled = false, e2.globals.zoomEnabled = false, e2.globals.selectionEnabled = false, this.getToolbarIconsReference(), [this.elPan, this.elSelection, this.elZoom].forEach(function(e3) {
        e3 && e3.classList.remove(t3.selectedClass);
      });
    } }, { key: "handleZoomIn", value: function() {
      var t3 = this.w;
      t3.globals.isRangeBar && (this.minX = t3.globals.minY, this.maxX = t3.globals.maxY);
      var e2 = (this.minX + this.maxX) / 2, i2 = (this.minX + e2) / 2, a2 = (this.maxX + e2) / 2, s2 = this._getNewMinXMaxX(i2, a2);
      t3.globals.disableZoomIn || this.zoomUpdateOptions(s2.minX, s2.maxX);
    } }, { key: "handleZoomOut", value: function() {
      var t3 = this.w;
      if (t3.globals.isRangeBar && (this.minX = t3.globals.minY, this.maxX = t3.globals.maxY), !("datetime" === t3.config.xaxis.type && new Date(this.minX).getUTCFullYear() < 1e3)) {
        var e2 = (this.minX + this.maxX) / 2, i2 = this.minX - (e2 - this.minX), a2 = this.maxX - (e2 - this.maxX), s2 = this._getNewMinXMaxX(i2, a2);
        t3.globals.disableZoomOut || this.zoomUpdateOptions(s2.minX, s2.maxX);
      }
    } }, { key: "_getNewMinXMaxX", value: function(t3, e2) {
      var i2 = this.w.config.xaxis.convertedCatToNumeric;
      return { minX: i2 ? Math.floor(t3) : t3, maxX: i2 ? Math.floor(e2) : e2 };
    } }, { key: "zoomUpdateOptions", value: function(t3, e2) {
      var i2 = this.w;
      if (void 0 !== t3 || void 0 !== e2) {
        if (!(i2.config.xaxis.convertedCatToNumeric && (t3 < 1 && (t3 = 1, e2 = i2.globals.dataPoints), e2 - t3 < 2))) {
          var a2 = { min: t3, max: e2 }, s2 = this.getBeforeZoomRange(a2);
          s2 && (a2 = s2.xaxis);
          var r2 = { xaxis: a2 }, o2 = m.clone(i2.globals.initialConfig.yaxis);
          i2.config.chart.group || (r2.yaxis = o2), this.w.globals.zoomed = true, this.ctx.updateHelpers._updateOptions(r2, false, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(a2, o2);
        }
      } else this.handleZoomReset();
    } }, { key: "zoomCallback", value: function(t3, e2) {
      "function" == typeof this.ev.zoomed && this.ev.zoomed(this.ctx, { xaxis: t3, yaxis: e2 });
    } }, { key: "getBeforeZoomRange", value: function(t3, e2) {
      var i2 = null;
      return "function" == typeof this.ev.beforeZoom && (i2 = this.ev.beforeZoom(this, { xaxis: t3, yaxis: e2 })), i2;
    } }, { key: "toggleMenu", value: function() {
      var t3 = this;
      window.setTimeout(function() {
        t3.elMenu.classList.contains("apexcharts-menu-open") ? t3.elMenu.classList.remove("apexcharts-menu-open") : t3.elMenu.classList.add("apexcharts-menu-open");
      }, 0);
    } }, { key: "handleDownload", value: function(t3) {
      var e2 = this.w, i2 = new U(this.ctx);
      switch (t3) {
        case "svg":
          i2.exportToSVG(this.ctx);
          break;
        case "png":
          i2.exportToPng(this.ctx);
          break;
        case "csv":
          i2.exportToCSV({ series: e2.config.series, columnDelimiter: e2.config.chart.toolbar.export.csv.columnDelimiter });
      }
    } }, { key: "handleZoomReset", value: function(t3) {
      this.ctx.getSyncedCharts().forEach(function(t4) {
        var e2 = t4.w;
        if (e2.globals.lastXAxis.min = e2.globals.initialConfig.xaxis.min, e2.globals.lastXAxis.max = e2.globals.initialConfig.xaxis.max, t4.updateHelpers.revertDefaultAxisMinMax(), "function" == typeof e2.config.chart.events.beforeResetZoom) {
          var i2 = e2.config.chart.events.beforeResetZoom(t4, e2);
          i2 && t4.updateHelpers.revertDefaultAxisMinMax(i2);
        }
        "function" == typeof e2.config.chart.events.zoomed && t4.ctx.toolbar.zoomCallback({ min: e2.config.xaxis.min, max: e2.config.xaxis.max }), e2.globals.zoomed = false;
        var a2 = t4.ctx.series.emptyCollapsedSeries(m.clone(e2.globals.initialSeries));
        t4.updateHelpers._updateSeries(a2, e2.config.chart.animations.dynamicAnimation.enabled);
      });
    } }, { key: "destroy", value: function() {
      this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null;
    } }]), t2;
  }(), ft = function(t2) {
    h(a2, ut);
    var e2 = o(a2);
    function a2(t3) {
      var s2;
      return i(this, a2), (s2 = e2.call(this, t3)).ctx = t3, s2.w = t3.w, s2.dragged = false, s2.graphics = new k(s2.ctx), s2.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend", "wheel"], s2.clientX = 0, s2.clientY = 0, s2.startX = 0, s2.endX = 0, s2.dragX = 0, s2.startY = 0, s2.endY = 0, s2.dragY = 0, s2.moveDirection = "none", s2.debounceTimer = null, s2.debounceDelay = 100, s2.wheelDelay = 400, s2;
    }
    return s(a2, [{ key: "init", value: function(t3) {
      var e3 = this, i2 = t3.xyRatios, a3 = this.w, s2 = this;
      this.xyRatios = i2, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = a3.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), a3.globals.dom.elGraphical.add(this.zoomRect), a3.globals.dom.elGraphical.add(this.selectionRect), "x" === a3.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, minY: 0, maxX: a3.globals.gridWidth, maxY: a3.globals.gridHeight }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : "y" === a3.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, maxX: a3.globals.gridWidth }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = a3.globals.dom.baseEl.querySelector("".concat(a3.globals.chartClass, " .apexcharts-svg")), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach(function(t4) {
        e3.hoverArea.addEventListener(t4, s2.svgMouseEvents.bind(s2, i2), { capture: false, passive: true });
      }), a3.config.chart.zoom.allowMouseWheelZoom && this.hoverArea.addEventListener("wheel", s2.mouseWheelEvent.bind(s2), { capture: false, passive: false });
    } }, { key: "destroy", value: function() {
      this.slDraggableRect && (this.slDraggableRect.draggable(false), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null;
    } }, { key: "svgMouseEvents", value: function(t3, e3) {
      var i2 = this.w, a3 = this, s2 = this.ctx.toolbar, r2 = i2.globals.zoomEnabled ? i2.config.chart.zoom.type : i2.config.chart.selection.type, o2 = i2.config.chart.toolbar.autoSelected;
      if (e3.shiftKey ? (this.shiftWasPressed = true, s2.enableZoomPanFromToolbar("pan" === o2 ? "zoom" : "pan")) : this.shiftWasPressed && (s2.enableZoomPanFromToolbar(o2), this.shiftWasPressed = false), e3.target) {
        var n2, l2 = e3.target.classList;
        if (e3.target.parentNode && null !== e3.target.parentNode && (n2 = e3.target.parentNode.classList), !(l2.contains("apexcharts-selection-rect") || l2.contains("apexcharts-legend-marker") || l2.contains("apexcharts-legend-text") || n2 && n2.contains("apexcharts-toolbar"))) {
          if (a3.clientX = "touchmove" === e3.type || "touchstart" === e3.type ? e3.touches[0].clientX : "touchend" === e3.type ? e3.changedTouches[0].clientX : e3.clientX, a3.clientY = "touchmove" === e3.type || "touchstart" === e3.type ? e3.touches[0].clientY : "touchend" === e3.type ? e3.changedTouches[0].clientY : e3.clientY, "mousedown" === e3.type && 1 === e3.which) {
            var h2 = a3.gridRect.getBoundingClientRect();
            a3.startX = a3.clientX - h2.left, a3.startY = a3.clientY - h2.top, a3.dragged = false, a3.w.globals.mousedown = true;
          }
          if (("mousemove" === e3.type && 1 === e3.which || "touchmove" === e3.type) && (a3.dragged = true, i2.globals.panEnabled ? (i2.globals.selection = null, a3.w.globals.mousedown && a3.panDragging({ context: a3, zoomtype: r2, xyRatios: t3 })) : (a3.w.globals.mousedown && i2.globals.zoomEnabled || a3.w.globals.mousedown && i2.globals.selectionEnabled) && (a3.selection = a3.selectionDrawing({ context: a3, zoomtype: r2 }))), "mouseup" === e3.type || "touchend" === e3.type || "mouseleave" === e3.type) {
            var c2, d2 = null === (c2 = a3.gridRect) || void 0 === c2 ? void 0 : c2.getBoundingClientRect();
            d2 && a3.w.globals.mousedown && (a3.endX = a3.clientX - d2.left, a3.endY = a3.clientY - d2.top, a3.dragX = Math.abs(a3.endX - a3.startX), a3.dragY = Math.abs(a3.endY - a3.startY), (i2.globals.zoomEnabled || i2.globals.selectionEnabled) && a3.selectionDrawn({ context: a3, zoomtype: r2 }), i2.globals.panEnabled && i2.config.xaxis.convertedCatToNumeric && a3.delayedPanScrolled()), i2.globals.zoomEnabled && a3.hideSelectionRect(this.selectionRect), a3.dragged = false, a3.w.globals.mousedown = false;
          }
          this.makeSelectionRectDraggable();
        }
      }
    } }, { key: "mouseWheelEvent", value: function(t3) {
      var e3 = this, i2 = this.w;
      t3.preventDefault();
      var a3 = Date.now();
      a3 - i2.globals.lastWheelExecution > this.wheelDelay && (this.executeMouseWheelZoom(t3), i2.globals.lastWheelExecution = a3), this.debounceTimer && clearTimeout(this.debounceTimer), this.debounceTimer = setTimeout(function() {
        a3 - i2.globals.lastWheelExecution > e3.wheelDelay && (e3.executeMouseWheelZoom(t3), i2.globals.lastWheelExecution = a3);
      }, this.debounceDelay);
    } }, { key: "executeMouseWheelZoom", value: function(t3) {
      var e3, i2 = this.w;
      this.minX = i2.globals.isRangeBar ? i2.globals.minY : i2.globals.minX, this.maxX = i2.globals.isRangeBar ? i2.globals.maxY : i2.globals.maxX;
      var a3 = null === (e3 = this.gridRect) || void 0 === e3 ? void 0 : e3.getBoundingClientRect();
      if (a3) {
        var s2, r2, o2, n2 = (t3.clientX - a3.left) / a3.width, l2 = this.minX, h2 = this.maxX, c2 = h2 - l2;
        if (t3.deltaY < 0) {
          var d2 = l2 + n2 * c2;
          r2 = d2 - (s2 = 0.5 * c2) / 2, o2 = d2 + s2 / 2;
        } else r2 = l2 - (s2 = 1.5 * c2) / 2, o2 = h2 + s2 / 2;
        if (!i2.globals.isRangeBar) {
          r2 = Math.max(r2, i2.globals.initialMinX), o2 = Math.min(o2, i2.globals.initialMaxX);
          var g2 = 0.01 * (i2.globals.initialMaxX - i2.globals.initialMinX);
          if (o2 - r2 < g2) {
            var u2 = (r2 + o2) / 2;
            r2 = u2 - g2 / 2, o2 = u2 + g2 / 2;
          }
        }
        var f2 = this._getNewMinXMaxX(r2, o2);
        isNaN(f2.minX) || isNaN(f2.maxX) || this.zoomUpdateOptions(f2.minX, f2.maxX);
      }
    } }, { key: "makeSelectionRectDraggable", value: function() {
      var t3 = this.w;
      if (this.selectionRect) {
        var e3 = this.selectionRect.node.getBoundingClientRect();
        e3.width > 0 && e3.height > 0 && this.slDraggableRect.selectize({ points: "l, r", pointSize: 8, pointType: "rect" }).resize({ constraint: { minX: 0, minY: 0, maxX: t3.globals.gridWidth, maxY: t3.globals.gridHeight } }).on("resizing", this.selectionDragging.bind(this, "resizing"));
      }
    } }, { key: "preselectedSelection", value: function() {
      var t3 = this.w, e3 = this.xyRatios;
      if (!t3.globals.zoomEnabled) {
        if (void 0 !== t3.globals.selection && null !== t3.globals.selection) this.drawSelectionRect(t3.globals.selection);
        else if (void 0 !== t3.config.chart.selection.xaxis.min && void 0 !== t3.config.chart.selection.xaxis.max) {
          var i2 = (t3.config.chart.selection.xaxis.min - t3.globals.minX) / e3.xRatio, a3 = t3.globals.gridWidth - (t3.globals.maxX - t3.config.chart.selection.xaxis.max) / e3.xRatio - i2;
          t3.globals.isRangeBar && (i2 = (t3.config.chart.selection.xaxis.min - t3.globals.yAxisScale[0].niceMin) / e3.invertedYRatio, a3 = (t3.config.chart.selection.xaxis.max - t3.config.chart.selection.xaxis.min) / e3.invertedYRatio);
          var s2 = { x: i2, y: 0, width: a3, height: t3.globals.gridHeight, translateX: 0, translateY: 0, selectionEnabled: true };
          this.drawSelectionRect(s2), this.makeSelectionRectDraggable(), "function" == typeof t3.config.chart.events.selection && t3.config.chart.events.selection(this.ctx, { xaxis: { min: t3.config.chart.selection.xaxis.min, max: t3.config.chart.selection.xaxis.max }, yaxis: {} });
        }
      }
    } }, { key: "drawSelectionRect", value: function(t3) {
      var e3 = t3.x, i2 = t3.y, a3 = t3.width, s2 = t3.height, r2 = t3.translateX, o2 = void 0 === r2 ? 0 : r2, n2 = t3.translateY, l2 = void 0 === n2 ? 0 : n2, h2 = this.w, c2 = this.zoomRect, d2 = this.selectionRect;
      if (this.dragged || null !== h2.globals.selection) {
        var g2 = { transform: "translate(" + o2 + ", " + l2 + ")" };
        h2.globals.zoomEnabled && this.dragged && (a3 < 0 && (a3 = 1), c2.attr({ x: e3, y: i2, width: a3, height: s2, fill: h2.config.chart.zoom.zoomedArea.fill.color, "fill-opacity": h2.config.chart.zoom.zoomedArea.fill.opacity, stroke: h2.config.chart.zoom.zoomedArea.stroke.color, "stroke-width": h2.config.chart.zoom.zoomedArea.stroke.width, "stroke-opacity": h2.config.chart.zoom.zoomedArea.stroke.opacity }), k.setAttrs(c2.node, g2)), h2.globals.selectionEnabled && (d2.attr({ x: e3, y: i2, width: a3 > 0 ? a3 : 0, height: s2 > 0 ? s2 : 0, fill: h2.config.chart.selection.fill.color, "fill-opacity": h2.config.chart.selection.fill.opacity, stroke: h2.config.chart.selection.stroke.color, "stroke-width": h2.config.chart.selection.stroke.width, "stroke-dasharray": h2.config.chart.selection.stroke.dashArray, "stroke-opacity": h2.config.chart.selection.stroke.opacity }), k.setAttrs(d2.node, g2));
      }
    } }, { key: "hideSelectionRect", value: function(t3) {
      t3 && t3.attr({ x: 0, y: 0, width: 0, height: 0 });
    } }, { key: "selectionDrawing", value: function(t3) {
      var e3 = t3.context, i2 = t3.zoomtype, a3 = this.w, s2 = e3, r2 = this.gridRect.getBoundingClientRect(), o2 = s2.startX - 1, n2 = s2.startY, l2 = false, h2 = false, c2 = s2.clientX - r2.left - o2, d2 = s2.clientY - r2.top - n2, g2 = {};
      return Math.abs(c2 + o2) > a3.globals.gridWidth ? c2 = a3.globals.gridWidth - o2 : s2.clientX - r2.left < 0 && (c2 = o2), o2 > s2.clientX - r2.left && (l2 = true, c2 = Math.abs(c2)), n2 > s2.clientY - r2.top && (h2 = true, d2 = Math.abs(d2)), g2 = "x" === i2 ? { x: l2 ? o2 - c2 : o2, y: 0, width: c2, height: a3.globals.gridHeight } : "y" === i2 ? { x: 0, y: h2 ? n2 - d2 : n2, width: a3.globals.gridWidth, height: d2 } : { x: l2 ? o2 - c2 : o2, y: h2 ? n2 - d2 : n2, width: c2, height: d2 }, s2.drawSelectionRect(g2), s2.selectionDragging("resizing"), g2;
    } }, { key: "selectionDragging", value: function(t3, e3) {
      var i2 = this, a3 = this.w, s2 = this.xyRatios, r2 = this.selectionRect, o2 = 0;
      "resizing" === t3 && (o2 = 30);
      var n2 = function(t4) {
        return parseFloat(r2.node.getAttribute(t4));
      }, l2 = { x: n2("x"), y: n2("y"), width: n2("width"), height: n2("height") };
      a3.globals.selection = l2, "function" == typeof a3.config.chart.events.selection && a3.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout(function() {
        var t4, e4, o3, n3, l3 = i2.gridRect.getBoundingClientRect(), h2 = r2.node.getBoundingClientRect();
        a3.globals.isRangeBar ? (t4 = a3.globals.yAxisScale[0].niceMin + (h2.left - l3.left) * s2.invertedYRatio, e4 = a3.globals.yAxisScale[0].niceMin + (h2.right - l3.left) * s2.invertedYRatio, o3 = 0, n3 = 1) : (t4 = a3.globals.xAxisScale.niceMin + (h2.left - l3.left) * s2.xRatio, e4 = a3.globals.xAxisScale.niceMin + (h2.right - l3.left) * s2.xRatio, o3 = a3.globals.yAxisScale[0].niceMin + (l3.bottom - h2.bottom) * s2.yRatio[0], n3 = a3.globals.yAxisScale[0].niceMax - (h2.top - l3.top) * s2.yRatio[0]);
        var c2 = { xaxis: { min: t4, max: e4 }, yaxis: { min: o3, max: n3 } };
        a3.config.chart.events.selection(i2.ctx, c2), a3.config.chart.brush.enabled && void 0 !== a3.config.chart.events.brushScrolled && a3.config.chart.events.brushScrolled(i2.ctx, c2);
      }, o2));
    } }, { key: "selectionDrawn", value: function(t3) {
      var e3 = t3.context, i2 = t3.zoomtype, a3 = this.w, s2 = e3, r2 = this.xyRatios, o2 = this.ctx.toolbar;
      if (s2.startX > s2.endX) {
        var n2 = s2.startX;
        s2.startX = s2.endX, s2.endX = n2;
      }
      if (s2.startY > s2.endY) {
        var l2 = s2.startY;
        s2.startY = s2.endY, s2.endY = l2;
      }
      var h2 = void 0, c2 = void 0;
      a3.globals.isRangeBar ? (h2 = a3.globals.yAxisScale[0].niceMin + s2.startX * r2.invertedYRatio, c2 = a3.globals.yAxisScale[0].niceMin + s2.endX * r2.invertedYRatio) : (h2 = a3.globals.xAxisScale.niceMin + s2.startX * r2.xRatio, c2 = a3.globals.xAxisScale.niceMin + s2.endX * r2.xRatio);
      var d2 = [], g2 = [];
      if (a3.config.yaxis.forEach(function(t4, e4) {
        var i3 = a3.globals.seriesYAxisMap[e4][0];
        d2.push(a3.globals.yAxisScale[e4].niceMax - r2.yRatio[i3] * s2.startY), g2.push(a3.globals.yAxisScale[e4].niceMax - r2.yRatio[i3] * s2.endY);
      }), s2.dragged && (s2.dragX > 10 || s2.dragY > 10) && h2 !== c2) {
        if (a3.globals.zoomEnabled) {
          var u2 = m.clone(a3.globals.initialConfig.yaxis), f2 = m.clone(a3.globals.initialConfig.xaxis);
          if (a3.globals.zoomed = true, a3.config.xaxis.convertedCatToNumeric && (h2 = Math.floor(h2), c2 = Math.floor(c2), h2 < 1 && (h2 = 1, c2 = a3.globals.dataPoints), c2 - h2 < 2 && (c2 = h2 + 1)), "xy" !== i2 && "x" !== i2 || (f2 = { min: h2, max: c2 }), "xy" !== i2 && "y" !== i2 || u2.forEach(function(t4, e4) {
            u2[e4].min = g2[e4], u2[e4].max = d2[e4];
          }), o2) {
            var p2 = o2.getBeforeZoomRange(f2, u2);
            p2 && (f2 = p2.xaxis ? p2.xaxis : f2, u2 = p2.yaxis ? p2.yaxis : u2);
          }
          var x2 = { xaxis: f2 };
          a3.config.chart.group || (x2.yaxis = u2), s2.ctx.updateHelpers._updateOptions(x2, false, s2.w.config.chart.animations.dynamicAnimation.enabled), "function" == typeof a3.config.chart.events.zoomed && o2.zoomCallback(f2, u2);
        } else if (a3.globals.selectionEnabled) {
          var b2, v2 = null;
          b2 = { min: h2, max: c2 }, "xy" !== i2 && "y" !== i2 || (v2 = m.clone(a3.config.yaxis)).forEach(function(t4, e4) {
            v2[e4].min = g2[e4], v2[e4].max = d2[e4];
          }), a3.globals.selection = s2.selection, "function" == typeof a3.config.chart.events.selection && a3.config.chart.events.selection(s2.ctx, { xaxis: b2, yaxis: v2 });
        }
      }
    } }, { key: "panDragging", value: function(t3) {
      var e3 = t3.context, i2 = this.w, a3 = e3;
      if (void 0 !== i2.globals.lastClientPosition.x) {
        var s2 = i2.globals.lastClientPosition.x - a3.clientX, r2 = i2.globals.lastClientPosition.y - a3.clientY;
        Math.abs(s2) > Math.abs(r2) && s2 > 0 ? this.moveDirection = "left" : Math.abs(s2) > Math.abs(r2) && s2 < 0 ? this.moveDirection = "right" : Math.abs(r2) > Math.abs(s2) && r2 > 0 ? this.moveDirection = "up" : Math.abs(r2) > Math.abs(s2) && r2 < 0 && (this.moveDirection = "down");
      }
      i2.globals.lastClientPosition = { x: a3.clientX, y: a3.clientY };
      var o2 = i2.globals.isRangeBar ? i2.globals.minY : i2.globals.minX, n2 = i2.globals.isRangeBar ? i2.globals.maxY : i2.globals.maxX;
      i2.config.xaxis.convertedCatToNumeric || a3.panScrolled(o2, n2);
    } }, { key: "delayedPanScrolled", value: function() {
      var t3 = this.w, e3 = t3.globals.minX, i2 = t3.globals.maxX, a3 = (t3.globals.maxX - t3.globals.minX) / 2;
      "left" === this.moveDirection ? (e3 = t3.globals.minX + a3, i2 = t3.globals.maxX + a3) : "right" === this.moveDirection && (e3 = t3.globals.minX - a3, i2 = t3.globals.maxX - a3), e3 = Math.floor(e3), i2 = Math.floor(i2), this.updateScrolledChart({ xaxis: { min: e3, max: i2 } }, e3, i2);
    } }, { key: "panScrolled", value: function(t3, e3) {
      var i2 = this.w, a3 = this.xyRatios, s2 = m.clone(i2.globals.initialConfig.yaxis), r2 = a3.xRatio, o2 = i2.globals.minX, n2 = i2.globals.maxX;
      i2.globals.isRangeBar && (r2 = a3.invertedYRatio, o2 = i2.globals.minY, n2 = i2.globals.maxY), "left" === this.moveDirection ? (t3 = o2 + i2.globals.gridWidth / 15 * r2, e3 = n2 + i2.globals.gridWidth / 15 * r2) : "right" === this.moveDirection && (t3 = o2 - i2.globals.gridWidth / 15 * r2, e3 = n2 - i2.globals.gridWidth / 15 * r2), i2.globals.isRangeBar || (t3 < i2.globals.initialMinX || e3 > i2.globals.initialMaxX) && (t3 = o2, e3 = n2);
      var l2 = { xaxis: { min: t3, max: e3 } };
      i2.config.chart.group || (l2.yaxis = s2), this.updateScrolledChart(l2, t3, e3);
    } }, { key: "updateScrolledChart", value: function(t3, e3, i2) {
      var a3 = this.w;
      this.ctx.updateHelpers._updateOptions(t3, false, false), "function" == typeof a3.config.chart.events.scrolled && a3.config.chart.events.scrolled(this.ctx, { xaxis: { min: e3, max: i2 } });
    } }]), a2;
  }(), pt = function() {
    function t2(e2) {
      i(this, t2), this.w = e2.w, this.ttCtx = e2, this.ctx = e2.ctx;
    }
    return s(t2, [{ key: "getNearestValues", value: function(t3) {
      var e2 = t3.hoverArea, i2 = t3.elGrid, a2 = t3.clientX, s2 = t3.clientY, r2 = this.w, o2 = i2.getBoundingClientRect(), n2 = o2.width, l2 = o2.height, h2 = n2 / (r2.globals.dataPoints - 1), c2 = l2 / r2.globals.dataPoints, d2 = this.hasBars();
      !r2.globals.comboCharts && !d2 || r2.config.xaxis.convertedCatToNumeric || (h2 = n2 / r2.globals.dataPoints);
      var g2 = a2 - o2.left - r2.globals.barPadForNumericAxis, u2 = s2 - o2.top;
      g2 < 0 || u2 < 0 || g2 > n2 || u2 > l2 ? (e2.classList.remove("hovering-zoom"), e2.classList.remove("hovering-pan")) : r2.globals.zoomEnabled ? (e2.classList.remove("hovering-pan"), e2.classList.add("hovering-zoom")) : r2.globals.panEnabled && (e2.classList.remove("hovering-zoom"), e2.classList.add("hovering-pan"));
      var f2 = Math.round(g2 / h2), p2 = Math.floor(u2 / c2);
      d2 && !r2.config.xaxis.convertedCatToNumeric && (f2 = Math.ceil(g2 / h2), f2 -= 1);
      var x2 = null, b2 = null, v2 = r2.globals.seriesXvalues.map(function(t4) {
        return t4.filter(function(t5) {
          return m.isNumber(t5);
        });
      }), y2 = r2.globals.seriesYvalues.map(function(t4) {
        return t4.filter(function(t5) {
          return m.isNumber(t5);
        });
      });
      if (r2.globals.isXNumeric) {
        var w2 = this.ttCtx.getElGrid().getBoundingClientRect(), k2 = g2 * (w2.width / n2), A2 = u2 * (w2.height / l2);
        x2 = (b2 = this.closestInMultiArray(k2, A2, v2, y2)).index, f2 = b2.j, null !== x2 && (v2 = r2.globals.seriesXvalues[x2], f2 = (b2 = this.closestInArray(k2, v2)).index);
      }
      return r2.globals.capturedSeriesIndex = null === x2 ? -1 : x2, (!f2 || f2 < 1) && (f2 = 0), r2.globals.isBarHorizontal ? r2.globals.capturedDataPointIndex = p2 : r2.globals.capturedDataPointIndex = f2, { capturedSeries: x2, j: r2.globals.isBarHorizontal ? p2 : f2, hoverX: g2, hoverY: u2 };
    } }, { key: "closestInMultiArray", value: function(t3, e2, i2, a2) {
      var s2 = this.w, r2 = 0, o2 = null, n2 = -1;
      s2.globals.series.length > 1 ? r2 = this.getFirstActiveXArray(i2) : o2 = 0;
      var l2 = i2[r2][0], h2 = Math.abs(t3 - l2);
      if (i2.forEach(function(e3) {
        e3.forEach(function(e4, i3) {
          var a3 = Math.abs(t3 - e4);
          a3 <= h2 && (h2 = a3, n2 = i3);
        });
      }), -1 !== n2) {
        var c2 = a2[r2][n2], d2 = Math.abs(e2 - c2);
        o2 = r2, a2.forEach(function(t4, i3) {
          var a3 = Math.abs(e2 - t4[n2]);
          a3 <= d2 && (d2 = a3, o2 = i3);
        });
      }
      return { index: o2, j: n2 };
    } }, { key: "getFirstActiveXArray", value: function(t3) {
      for (var e2 = this.w, i2 = 0, a2 = t3.map(function(t4, e3) {
        return t4.length > 0 ? e3 : -1;
      }), s2 = 0; s2 < a2.length; s2++) if (-1 !== a2[s2] && -1 === e2.globals.collapsedSeriesIndices.indexOf(s2) && -1 === e2.globals.ancillaryCollapsedSeriesIndices.indexOf(s2)) {
        i2 = a2[s2];
        break;
      }
      return i2;
    } }, { key: "closestInArray", value: function(t3, e2) {
      for (var i2 = e2[0], a2 = null, s2 = Math.abs(t3 - i2), r2 = 0; r2 < e2.length; r2++) {
        var o2 = Math.abs(t3 - e2[r2]);
        o2 < s2 && (s2 = o2, a2 = r2);
      }
      return { index: a2 };
    } }, { key: "isXoverlap", value: function(t3) {
      var e2 = [], i2 = this.w.globals.seriesX.filter(function(t4) {
        return void 0 !== t4[0];
      });
      if (i2.length > 0) for (var a2 = 0; a2 < i2.length - 1; a2++) void 0 !== i2[a2][t3] && void 0 !== i2[a2 + 1][t3] && i2[a2][t3] !== i2[a2 + 1][t3] && e2.push("unEqual");
      return 0 === e2.length;
    } }, { key: "isInitialSeriesSameLen", value: function() {
      for (var t3 = true, e2 = this.w.globals.initialSeries, i2 = 0; i2 < e2.length - 1; i2++) if (e2[i2].data.length !== e2[i2 + 1].data.length) {
        t3 = false;
        break;
      }
      return t3;
    } }, { key: "getBarsHeight", value: function(t3) {
      return p(t3).reduce(function(t4, e2) {
        return t4 + e2.getBBox().height;
      }, 0);
    } }, { key: "getElMarkers", value: function(t3) {
      return "number" == typeof t3 ? this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex='".concat(t3, "'] .apexcharts-series-markers-wrap > *")) : this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap > *");
    } }, { key: "getAllMarkers", value: function() {
      var t3 = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");
      (t3 = p(t3)).sort(function(t4, e3) {
        var i2 = Number(t4.getAttribute("data:realIndex")), a2 = Number(e3.getAttribute("data:realIndex"));
        return a2 < i2 ? 1 : a2 > i2 ? -1 : 0;
      });
      var e2 = [];
      return t3.forEach(function(t4) {
        e2.push(t4.querySelector(".apexcharts-marker"));
      }), e2;
    } }, { key: "hasMarkers", value: function(t3) {
      return this.getElMarkers(t3).length > 0;
    } }, { key: "getPathFromPoint", value: function(t3, e2) {
      var i2 = Number(t3.getAttribute("cx")), a2 = Number(t3.getAttribute("cy")), s2 = t3.getAttribute("shape");
      return new k(this.ctx).getMarkerPath(i2, a2, s2, e2);
    } }, { key: "getElBars", value: function() {
      return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series");
    } }, { key: "hasBars", value: function() {
      return this.getElBars().length > 0;
    } }, { key: "getHoverMarkerSize", value: function(t3) {
      var e2 = this.w, i2 = e2.config.markers.hover.size;
      return void 0 === i2 && (i2 = e2.globals.markers.size[t3] + e2.config.markers.hover.sizeOffset), i2;
    } }, { key: "toggleAllTooltipSeriesGroups", value: function(t3) {
      var e2 = this.w, i2 = this.ttCtx;
      0 === i2.allTooltipSeriesGroups.length && (i2.allTooltipSeriesGroups = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
      for (var a2 = i2.allTooltipSeriesGroups, s2 = 0; s2 < a2.length; s2++) "enable" === t3 ? (a2[s2].classList.add("apexcharts-active"), a2[s2].style.display = e2.config.tooltip.items.display) : (a2[s2].classList.remove("apexcharts-active"), a2[s2].style.display = "none");
    } }]), t2;
  }(), xt = function() {
    function t2(e2) {
      i(this, t2), this.w = e2.w, this.ctx = e2.ctx, this.ttCtx = e2, this.tooltipUtil = new pt(e2);
    }
    return s(t2, [{ key: "drawSeriesTexts", value: function(t3) {
      var e2 = t3.shared, i2 = void 0 === e2 || e2, a2 = t3.ttItems, s2 = t3.i, r2 = void 0 === s2 ? 0 : s2, o2 = t3.j, n2 = void 0 === o2 ? null : o2, l2 = t3.y1, h2 = t3.y2, c2 = t3.e, d2 = this.w;
      void 0 !== d2.config.tooltip.custom ? this.handleCustomTooltip({ i: r2, j: n2, y1: l2, y2: h2, w: d2 }) : this.toggleActiveInactiveSeries(i2, r2);
      var g2 = this.getValuesToPrint({ i: r2, j: n2 });
      this.printLabels({ i: r2, j: n2, values: g2, ttItems: a2, shared: i2, e: c2 });
      var u2 = this.ttCtx.getElTooltip();
      this.ttCtx.tooltipRect.ttWidth = u2.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = u2.getBoundingClientRect().height;
    } }, { key: "printLabels", value: function(t3) {
      var e2, i2 = this, a2 = t3.i, s2 = t3.j, r2 = t3.values, o2 = t3.ttItems, n2 = t3.shared, l2 = t3.e, h2 = this.w, c2 = [], d2 = function(t4) {
        return h2.globals.seriesGoals[t4] && h2.globals.seriesGoals[t4][s2] && Array.isArray(h2.globals.seriesGoals[t4][s2]);
      }, u2 = r2.xVal, f2 = r2.zVal, p2 = r2.xAxisTTVal, x2 = "", b2 = h2.globals.colors[a2];
      null !== s2 && h2.config.plotOptions.bar.distributed && (b2 = h2.globals.colors[s2]);
      for (var v2 = function(t4, r3) {
        var v3 = i2.getFormatters(a2);
        x2 = i2.getSeriesName({ fn: v3.yLbTitleFormatter, index: a2, seriesIndex: a2, j: s2 }), "treemap" === h2.config.chart.type && (x2 = v3.yLbTitleFormatter(String(h2.config.series[a2].data[s2].x), { series: h2.globals.series, seriesIndex: a2, dataPointIndex: s2, w: h2 }));
        var m3 = h2.config.tooltip.inverseOrder ? r3 : t4;
        if (h2.globals.axisCharts) {
          var y3 = function(t5) {
            var e3, i3, a3, r4;
            return h2.globals.isRangeData ? v3.yLbFormatter(null === (e3 = h2.globals.seriesRangeStart) || void 0 === e3 || null === (i3 = e3[t5]) || void 0 === i3 ? void 0 : i3[s2], { series: h2.globals.seriesRangeStart, seriesIndex: t5, dataPointIndex: s2, w: h2 }) + " - " + v3.yLbFormatter(null === (a3 = h2.globals.seriesRangeEnd) || void 0 === a3 || null === (r4 = a3[t5]) || void 0 === r4 ? void 0 : r4[s2], { series: h2.globals.seriesRangeEnd, seriesIndex: t5, dataPointIndex: s2, w: h2 }) : v3.yLbFormatter(h2.globals.series[t5][s2], { series: h2.globals.series, seriesIndex: t5, dataPointIndex: s2, w: h2 });
          };
          if (n2) v3 = i2.getFormatters(m3), x2 = i2.getSeriesName({ fn: v3.yLbTitleFormatter, index: m3, seriesIndex: a2, j: s2 }), b2 = h2.globals.colors[m3], e2 = y3(m3), d2(m3) && (c2 = h2.globals.seriesGoals[m3][s2].map(function(t5) {
            return { attrs: t5, val: v3.yLbFormatter(t5.value, { seriesIndex: m3, dataPointIndex: s2, w: h2 }) };
          }));
          else {
            var w2, k2 = null == l2 || null === (w2 = l2.target) || void 0 === w2 ? void 0 : w2.getAttribute("fill");
            k2 && (-1 !== k2.indexOf("url") ? -1 !== k2.indexOf("Pattern") && (b2 = h2.globals.dom.baseEl.querySelector(k2.substr(4).slice(0, -1)).childNodes[0].getAttribute("stroke")) : b2 = k2), e2 = y3(a2), d2(a2) && Array.isArray(h2.globals.seriesGoals[a2][s2]) && (c2 = h2.globals.seriesGoals[a2][s2].map(function(t5) {
              return { attrs: t5, val: v3.yLbFormatter(t5.value, { seriesIndex: a2, dataPointIndex: s2, w: h2 }) };
            }));
          }
        }
        null === s2 && (e2 = v3.yLbFormatter(h2.globals.series[a2], g(g({}, h2), {}, { seriesIndex: a2, dataPointIndex: a2 }))), i2.DOMHandling({ i: a2, t: m3, j: s2, ttItems: o2, values: { val: e2, goalVals: c2, xVal: u2, xAxisTTVal: p2, zVal: f2 }, seriesName: x2, shared: n2, pColor: b2 });
      }, m2 = 0, y2 = h2.globals.series.length - 1; m2 < h2.globals.series.length; m2++, y2--) v2(m2, y2);
    } }, { key: "getFormatters", value: function(t3) {
      var e2, i2 = this.w, a2 = i2.globals.yLabelFormatters[t3];
      return void 0 !== i2.globals.ttVal ? Array.isArray(i2.globals.ttVal) ? (a2 = i2.globals.ttVal[t3] && i2.globals.ttVal[t3].formatter, e2 = i2.globals.ttVal[t3] && i2.globals.ttVal[t3].title && i2.globals.ttVal[t3].title.formatter) : (a2 = i2.globals.ttVal.formatter, "function" == typeof i2.globals.ttVal.title.formatter && (e2 = i2.globals.ttVal.title.formatter)) : e2 = i2.config.tooltip.y.title.formatter, "function" != typeof a2 && (a2 = i2.globals.yLabelFormatters[0] ? i2.globals.yLabelFormatters[0] : function(t4) {
        return t4;
      }), "function" != typeof e2 && (e2 = function(t4) {
        return t4;
      }), { yLbFormatter: a2, yLbTitleFormatter: e2 };
    } }, { key: "getSeriesName", value: function(t3) {
      var e2 = t3.fn, i2 = t3.index, a2 = t3.seriesIndex, s2 = t3.j, r2 = this.w;
      return e2(String(r2.globals.seriesNames[i2]), { series: r2.globals.series, seriesIndex: a2, dataPointIndex: s2, w: r2 });
    } }, { key: "DOMHandling", value: function(t3) {
      t3.i;
      var e2 = t3.t, i2 = t3.j, a2 = t3.ttItems, s2 = t3.values, r2 = t3.seriesName, o2 = t3.shared, n2 = t3.pColor, l2 = this.w, h2 = this.ttCtx, c2 = s2.val, d2 = s2.goalVals, g2 = s2.xVal, u2 = s2.xAxisTTVal, f2 = s2.zVal, p2 = null;
      p2 = a2[e2].children, l2.config.tooltip.fillSeriesColor && (a2[e2].style.backgroundColor = n2, p2[0].style.display = "none"), h2.showTooltipTitle && (null === h2.tooltipTitle && (h2.tooltipTitle = l2.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), h2.tooltipTitle.innerHTML = g2), h2.isXAxisTooltipEnabled && (h2.xaxisTooltipText.innerHTML = "" !== u2 ? u2 : g2);
      var x2 = a2[e2].querySelector(".apexcharts-tooltip-text-y-label");
      x2 && (x2.innerHTML = r2 || "");
      var b2 = a2[e2].querySelector(".apexcharts-tooltip-text-y-value");
      b2 && (b2.innerHTML = void 0 !== c2 ? c2 : ""), p2[0] && p2[0].classList.contains("apexcharts-tooltip-marker") && (l2.config.tooltip.marker.fillColors && Array.isArray(l2.config.tooltip.marker.fillColors) && (n2 = l2.config.tooltip.marker.fillColors[e2]), p2[0].style.backgroundColor = n2), l2.config.tooltip.marker.show || (p2[0].style.display = "none");
      var v2 = a2[e2].querySelector(".apexcharts-tooltip-text-goals-label"), m2 = a2[e2].querySelector(".apexcharts-tooltip-text-goals-value");
      if (d2.length && l2.globals.seriesGoals[e2]) {
        var y2 = function() {
          var t4 = "<div >", e3 = "<div>";
          d2.forEach(function(i3, a3) {
            t4 += ' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(i3.attrs.strokeColor, '; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(i3.attrs.name, "</div>"), e3 += "<div>".concat(i3.val, "</div>");
          }), v2.innerHTML = t4 + "</div>", m2.innerHTML = e3 + "</div>";
        };
        o2 ? l2.globals.seriesGoals[e2][i2] && Array.isArray(l2.globals.seriesGoals[e2][i2]) ? y2() : (v2.innerHTML = "", m2.innerHTML = "") : y2();
      } else v2.innerHTML = "", m2.innerHTML = "";
      null !== f2 && (a2[e2].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = l2.config.tooltip.z.title, a2[e2].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = void 0 !== f2 ? f2 : "");
      if (o2 && p2[0]) {
        if (l2.config.tooltip.hideEmptySeries) {
          var w2 = a2[e2].querySelector(".apexcharts-tooltip-marker"), k2 = a2[e2].querySelector(".apexcharts-tooltip-text");
          0 == parseFloat(c2) ? (w2.style.display = "none", k2.style.display = "none") : (w2.style.display = "block", k2.style.display = "block");
        }
        null == c2 || l2.globals.ancillaryCollapsedSeriesIndices.indexOf(e2) > -1 || l2.globals.collapsedSeriesIndices.indexOf(e2) > -1 || Array.isArray(h2.tConfig.enabledOnSeries) && -1 === h2.tConfig.enabledOnSeries.indexOf(e2) ? p2[0].parentNode.style.display = "none" : p2[0].parentNode.style.display = l2.config.tooltip.items.display;
      } else Array.isArray(h2.tConfig.enabledOnSeries) && -1 === h2.tConfig.enabledOnSeries.indexOf(e2) && (p2[0].parentNode.style.display = "none");
    } }, { key: "toggleActiveInactiveSeries", value: function(t3, e2) {
      var i2 = this.w;
      if (t3) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
      else {
        this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
        var a2 = i2.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group-".concat(e2));
        a2 && (a2.classList.add("apexcharts-active"), a2.style.display = i2.config.tooltip.items.display);
      }
    } }, { key: "getValuesToPrint", value: function(t3) {
      var e2 = t3.i, i2 = t3.j, a2 = this.w, s2 = this.ctx.series.filteredSeriesX(), r2 = "", o2 = "", n2 = null, l2 = null, h2 = { series: a2.globals.series, seriesIndex: e2, dataPointIndex: i2, w: a2 }, c2 = a2.globals.ttZFormatter;
      null === i2 ? l2 = a2.globals.series[e2] : a2.globals.isXNumeric && "treemap" !== a2.config.chart.type ? (r2 = s2[e2][i2], 0 === s2[e2].length && (r2 = s2[this.tooltipUtil.getFirstActiveXArray(s2)][i2])) : r2 = new _(this.ctx).isFormatXY() ? void 0 !== a2.config.series[e2].data[i2] ? a2.config.series[e2].data[i2].x : "" : void 0 !== a2.globals.labels[i2] ? a2.globals.labels[i2] : "";
      var d2 = r2;
      a2.globals.isXNumeric && "datetime" === a2.config.xaxis.type ? r2 = new P(this.ctx).xLabelFormat(a2.globals.ttKeyFormatter, d2, d2, { i: void 0, dateFormatter: new L(this.ctx).formatDate, w: this.w }) : r2 = a2.globals.isBarHorizontal ? a2.globals.yLabelFormatters[0](d2, h2) : a2.globals.xLabelFormatter(d2, h2);
      return void 0 !== a2.config.tooltip.x.formatter && (r2 = a2.globals.ttKeyFormatter(d2, h2)), a2.globals.seriesZ.length > 0 && a2.globals.seriesZ[e2].length > 0 && (n2 = c2(a2.globals.seriesZ[e2][i2], a2)), o2 = "function" == typeof a2.config.xaxis.tooltip.formatter ? a2.globals.xaxisTooltipFormatter(d2, h2) : r2, { val: Array.isArray(l2) ? l2.join(" ") : l2, xVal: Array.isArray(r2) ? r2.join(" ") : r2, xAxisTTVal: Array.isArray(o2) ? o2.join(" ") : o2, zVal: n2 };
    } }, { key: "handleCustomTooltip", value: function(t3) {
      var e2 = t3.i, i2 = t3.j, a2 = t3.y1, s2 = t3.y2, r2 = t3.w, o2 = this.ttCtx.getElTooltip(), n2 = r2.config.tooltip.custom;
      Array.isArray(n2) && n2[e2] && (n2 = n2[e2]), o2.innerHTML = n2({ ctx: this.ctx, series: r2.globals.series, seriesIndex: e2, dataPointIndex: i2, y1: a2, y2: s2, w: r2 });
    } }]), t2;
  }(), bt = function() {
    function t2(e2) {
      i(this, t2), this.ttCtx = e2, this.ctx = e2.ctx, this.w = e2.w;
    }
    return s(t2, [{ key: "moveXCrosshairs", value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i2 = this.ttCtx, a2 = this.w, s2 = i2.getElXCrosshairs(), r2 = t3 - i2.xcrosshairsWidth / 2, o2 = a2.globals.labels.slice().length;
      if (null !== e2 && (r2 = a2.globals.gridWidth / o2 * e2), null === s2 || a2.globals.isBarHorizontal || (s2.setAttribute("x", r2), s2.setAttribute("x1", r2), s2.setAttribute("x2", r2), s2.setAttribute("y2", a2.globals.gridHeight), s2.classList.add("apexcharts-active")), r2 < 0 && (r2 = 0), r2 > a2.globals.gridWidth && (r2 = a2.globals.gridWidth), i2.isXAxisTooltipEnabled) {
        var n2 = r2;
        "tickWidth" !== a2.config.xaxis.crosshairs.width && "barWidth" !== a2.config.xaxis.crosshairs.width || (n2 = r2 + i2.xcrosshairsWidth / 2), this.moveXAxisTooltip(n2);
      }
    } }, { key: "moveYCrosshairs", value: function(t3) {
      var e2 = this.ttCtx;
      null !== e2.ycrosshairs && k.setAttrs(e2.ycrosshairs, { y1: t3, y2: t3 }), null !== e2.ycrosshairsHidden && k.setAttrs(e2.ycrosshairsHidden, { y1: t3, y2: t3 });
    } }, { key: "moveXAxisTooltip", value: function(t3) {
      var e2 = this.w, i2 = this.ttCtx;
      if (null !== i2.xaxisTooltip && 0 !== i2.xcrosshairsWidth) {
        i2.xaxisTooltip.classList.add("apexcharts-active");
        var a2 = i2.xaxisOffY + e2.config.xaxis.tooltip.offsetY + e2.globals.translateY + 1 + e2.config.xaxis.offsetY;
        if (t3 -= i2.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(t3)) {
          t3 += e2.globals.translateX;
          var s2;
          s2 = new k(this.ctx).getTextRects(i2.xaxisTooltipText.innerHTML), i2.xaxisTooltipText.style.minWidth = s2.width + "px", i2.xaxisTooltip.style.left = t3 + "px", i2.xaxisTooltip.style.top = a2 + "px";
        }
      }
    } }, { key: "moveYAxisTooltip", value: function(t3) {
      var e2 = this.w, i2 = this.ttCtx;
      null === i2.yaxisTTEls && (i2.yaxisTTEls = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
      var a2 = parseInt(i2.ycrosshairsHidden.getAttribute("y1"), 10), s2 = e2.globals.translateY + a2, r2 = i2.yaxisTTEls[t3].getBoundingClientRect().height, o2 = e2.globals.translateYAxisX[t3] - 2;
      e2.config.yaxis[t3].opposite && (o2 -= 26), s2 -= r2 / 2, -1 === e2.globals.ignoreYAxisIndexes.indexOf(t3) ? (i2.yaxisTTEls[t3].classList.add("apexcharts-active"), i2.yaxisTTEls[t3].style.top = s2 + "px", i2.yaxisTTEls[t3].style.left = o2 + e2.config.yaxis[t3].tooltip.offsetX + "px") : i2.yaxisTTEls[t3].classList.remove("apexcharts-active");
    } }, { key: "moveTooltip", value: function(t3, e2) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a2 = this.w, s2 = this.ttCtx, r2 = s2.getElTooltip(), o2 = s2.tooltipRect, n2 = null !== i2 ? parseFloat(i2) : 1, l2 = parseFloat(t3) + n2 + 5, h2 = parseFloat(e2) + n2 / 2;
      if (l2 > a2.globals.gridWidth / 2 && (l2 = l2 - o2.ttWidth - n2 - 10), l2 > a2.globals.gridWidth - o2.ttWidth - 10 && (l2 = a2.globals.gridWidth - o2.ttWidth), l2 < -20 && (l2 = -20), a2.config.tooltip.followCursor) {
        var c2 = s2.getElGrid().getBoundingClientRect();
        (l2 = s2.e.clientX - c2.left) > a2.globals.gridWidth / 2 && (l2 -= s2.tooltipRect.ttWidth), (h2 = s2.e.clientY + a2.globals.translateY - c2.top) > a2.globals.gridHeight / 2 && (h2 -= s2.tooltipRect.ttHeight);
      } else a2.globals.isBarHorizontal || o2.ttHeight / 2 + h2 > a2.globals.gridHeight && (h2 = a2.globals.gridHeight - o2.ttHeight + a2.globals.translateY);
      isNaN(l2) || (l2 += a2.globals.translateX, r2.style.left = l2 + "px", r2.style.top = h2 + "px");
    } }, { key: "moveMarkers", value: function(t3, e2) {
      var i2 = this.w, a2 = this.ttCtx;
      if (i2.globals.markers.size[t3] > 0) for (var s2 = i2.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t3, "'] .apexcharts-marker")), r2 = 0; r2 < s2.length; r2++) parseInt(s2[r2].getAttribute("rel"), 10) === e2 && (a2.marker.resetPointsSize(), a2.marker.enlargeCurrentPoint(e2, s2[r2]));
      else a2.marker.resetPointsSize(), this.moveDynamicPointOnHover(e2, t3);
    } }, { key: "moveDynamicPointOnHover", value: function(t3, e2) {
      var i2, a2, s2, r2, o2 = this.w, n2 = this.ttCtx, l2 = new k(this.ctx), h2 = o2.globals.pointsArray, c2 = n2.tooltipUtil.getHoverMarkerSize(e2), d2 = o2.config.series[e2].type;
      if (!d2 || "column" !== d2 && "candlestick" !== d2 && "boxPlot" !== d2) {
        s2 = null === (i2 = h2[e2][t3]) || void 0 === i2 ? void 0 : i2[0], r2 = (null === (a2 = h2[e2][t3]) || void 0 === a2 ? void 0 : a2[1]) || 0;
        var g2 = o2.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e2, "'] .apexcharts-series-markers path"));
        if (g2 && r2 < o2.globals.gridHeight && r2 > 0) {
          var u2 = g2.getAttribute("shape"), f2 = l2.getMarkerPath(s2, r2, u2, 1.5 * c2);
          g2.setAttribute("d", f2);
        }
        this.moveXCrosshairs(s2), n2.fixedTooltip || this.moveTooltip(s2, r2, c2);
      }
    } }, { key: "moveDynamicPointsOnHover", value: function(t3) {
      var e2, i2 = this.ttCtx, a2 = i2.w, s2 = 0, r2 = 0, o2 = a2.globals.pointsArray, n2 = new V(this.ctx), l2 = new k(this.ctx);
      e2 = n2.getActiveConfigSeriesIndex("asc", ["line", "area", "scatter", "bubble"]);
      var h2 = i2.tooltipUtil.getHoverMarkerSize(e2);
      o2[e2] && (s2 = o2[e2][t3][0], r2 = o2[e2][t3][1]);
      var c2 = i2.tooltipUtil.getAllMarkers();
      if (null !== c2) for (var d2 = 0; d2 < a2.globals.series.length; d2++) {
        var g2 = o2[d2];
        if (a2.globals.comboCharts && void 0 === g2 && c2.splice(d2, 0, null), g2 && g2.length) {
          var u2 = o2[d2][t3][1], f2 = void 0;
          c2[d2].setAttribute("cx", s2);
          var p2 = c2[d2].getAttribute("shape");
          if ("rangeArea" === a2.config.chart.type && !a2.globals.comboCharts) {
            var x2 = t3 + a2.globals.series[d2].length;
            f2 = o2[d2][x2][1], u2 -= Math.abs(u2 - f2) / 2;
          }
          if (null !== u2 && !isNaN(u2) && u2 < a2.globals.gridHeight + h2 && u2 + h2 > 0) {
            var b2 = l2.getMarkerPath(s2, u2, p2, h2);
            c2[d2].setAttribute("d", b2);
          } else c2[d2].setAttribute("d", "");
        }
      }
      this.moveXCrosshairs(s2), i2.fixedTooltip || this.moveTooltip(s2, r2 || a2.globals.gridHeight, h2);
    } }, { key: "moveStickyTooltipOverBars", value: function(t3, e2) {
      var i2 = this.w, a2 = this.ttCtx, s2 = i2.globals.columnSeries ? i2.globals.columnSeries.length : i2.globals.series.length, r2 = s2 >= 2 && s2 % 2 == 0 ? Math.floor(s2 / 2) : Math.floor(s2 / 2) + 1;
      i2.globals.isBarHorizontal && (r2 = new V(this.ctx).getActiveConfigSeriesIndex("desc") + 1);
      var o2 = i2.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(r2, "'] path[j='").concat(t3, "'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(r2, "'] path[j='").concat(t3, "'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(r2, "'] path[j='").concat(t3, "'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(r2, "'] path[j='").concat(t3, "']"));
      o2 || "number" != typeof e2 || (o2 = i2.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[data\\:realIndex='".concat(e2, "'] path[j='").concat(t3, "'],\n        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='").concat(e2, "'] path[j='").concat(t3, "'],\n        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='").concat(e2, "'] path[j='").concat(t3, "'],\n        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='").concat(e2, "'] path[j='").concat(t3, "']")));
      var n2 = o2 ? parseFloat(o2.getAttribute("cx")) : 0, l2 = o2 ? parseFloat(o2.getAttribute("cy")) : 0, h2 = o2 ? parseFloat(o2.getAttribute("barWidth")) : 0, c2 = a2.getElGrid().getBoundingClientRect(), d2 = o2 && (o2.classList.contains("apexcharts-candlestick-area") || o2.classList.contains("apexcharts-boxPlot-area"));
      i2.globals.isXNumeric ? (o2 && !d2 && (n2 -= s2 % 2 != 0 ? h2 / 2 : 0), o2 && d2 && i2.globals.comboCharts && (n2 -= h2 / 2)) : i2.globals.isBarHorizontal || (n2 = a2.xAxisTicksPositions[t3 - 1] + a2.dataPointsDividedWidth / 2, isNaN(n2) && (n2 = a2.xAxisTicksPositions[t3] - a2.dataPointsDividedWidth / 2)), i2.globals.isBarHorizontal ? l2 -= a2.tooltipRect.ttHeight : i2.config.tooltip.followCursor ? l2 = a2.e.clientY - c2.top - a2.tooltipRect.ttHeight / 2 : l2 + a2.tooltipRect.ttHeight + 15 > i2.globals.gridHeight && (l2 = i2.globals.gridHeight), i2.globals.isBarHorizontal || this.moveXCrosshairs(n2), a2.fixedTooltip || this.moveTooltip(n2, l2 || i2.globals.gridHeight);
    } }]), t2;
  }(), vt = function() {
    function t2(e2) {
      i(this, t2), this.w = e2.w, this.ttCtx = e2, this.ctx = e2.ctx, this.tooltipPosition = new bt(e2);
    }
    return s(t2, [{ key: "drawDynamicPoints", value: function() {
      var t3 = this.w, e2 = new k(this.ctx), i2 = new W(this.ctx), a2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
      a2 = p(a2), t3.config.chart.stacked && a2.sort(function(t4, e3) {
        return parseFloat(t4.getAttribute("data:realIndex")) - parseFloat(e3.getAttribute("data:realIndex"));
      });
      for (var s2 = 0; s2 < a2.length; s2++) {
        var r2 = a2[s2].querySelector(".apexcharts-series-markers-wrap");
        if (null !== r2) {
          var o2 = void 0, n2 = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4));
          "line" !== t3.config.chart.type && "area" !== t3.config.chart.type || t3.globals.comboCharts || t3.config.tooltip.intersect || (n2 += " no-pointer-events");
          var l2 = i2.getMarkerConfig({ cssClass: n2, seriesIndex: Number(r2.getAttribute("data:realIndex")) });
          (o2 = e2.drawMarker(0, 0, l2)).node.setAttribute("default-marker-size", 0);
          var h2 = document.createElementNS(t3.globals.SVGNS, "g");
          h2.classList.add("apexcharts-series-markers"), h2.appendChild(o2.node), r2.appendChild(h2);
        }
      }
    } }, { key: "enlargeCurrentPoint", value: function(t3, e2) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, s2 = this.w;
      "bubble" !== s2.config.chart.type && this.newPointSize(t3, e2);
      var r2 = e2.getAttribute("cx"), o2 = e2.getAttribute("cy");
      if (null !== i2 && null !== a2 && (r2 = i2, o2 = a2), this.tooltipPosition.moveXCrosshairs(r2), !this.fixedTooltip) {
        if ("radar" === s2.config.chart.type) {
          var n2 = this.ttCtx.getElGrid().getBoundingClientRect();
          r2 = this.ttCtx.e.clientX - n2.left;
        }
        this.tooltipPosition.moveTooltip(r2, o2, s2.config.markers.hover.size);
      }
    } }, { key: "enlargePoints", value: function(t3) {
      for (var e2 = this.w, i2 = this, a2 = this.ttCtx, s2 = t3, r2 = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), o2 = e2.config.markers.hover.size, n2 = 0; n2 < r2.length; n2++) {
        var l2 = r2[n2].getAttribute("rel"), h2 = r2[n2].getAttribute("index");
        if (void 0 === o2 && (o2 = e2.globals.markers.size[h2] + e2.config.markers.hover.sizeOffset), s2 === parseInt(l2, 10)) {
          i2.newPointSize(s2, r2[n2]);
          var c2 = r2[n2].getAttribute("cx"), d2 = r2[n2].getAttribute("cy");
          i2.tooltipPosition.moveXCrosshairs(c2), a2.fixedTooltip || i2.tooltipPosition.moveTooltip(c2, d2, o2);
        } else i2.oldPointSize(r2[n2]);
      }
    } }, { key: "newPointSize", value: function(t3, e2) {
      var i2 = this.w, a2 = i2.config.markers.hover.size, s2 = 0 === t3 ? e2.parentNode.firstChild : e2.parentNode.lastChild;
      if ("0" !== s2.getAttribute("default-marker-size")) {
        var r2 = parseInt(s2.getAttribute("index"), 10);
        void 0 === a2 && (a2 = i2.globals.markers.size[r2] + i2.config.markers.hover.sizeOffset), a2 < 0 && (a2 = 0);
        var o2 = this.ttCtx.tooltipUtil.getPathFromPoint(e2, a2);
        e2.setAttribute("d", o2);
      }
    } }, { key: "oldPointSize", value: function(t3) {
      var e2 = parseFloat(t3.getAttribute("default-marker-size")), i2 = this.ttCtx.tooltipUtil.getPathFromPoint(t3, e2);
      t3.setAttribute("d", i2);
    } }, { key: "resetPointsSize", value: function() {
      for (var t3 = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), e2 = 0; e2 < t3.length; e2++) {
        var i2 = parseFloat(t3[e2].getAttribute("default-marker-size"));
        if (m.isNumber(i2) && i2 >= 0) {
          var a2 = this.ttCtx.tooltipUtil.getPathFromPoint(t3[e2], i2);
          t3[e2].setAttribute("d", a2);
        } else t3[e2].setAttribute("d", "M0,0");
      }
    } }]), t2;
  }(), mt = function() {
    function t2(e2) {
      i(this, t2), this.w = e2.w;
      var a2 = this.w;
      this.ttCtx = e2, this.isVerticalGroupedRangeBar = !a2.globals.isBarHorizontal && "rangeBar" === a2.config.chart.type && a2.config.plotOptions.bar.rangeBarGroupRows;
    }
    return s(t2, [{ key: "getAttr", value: function(t3, e2) {
      return parseFloat(t3.target.getAttribute(e2));
    } }, { key: "handleHeatTreeTooltip", value: function(t3) {
      var e2 = t3.e, i2 = t3.opt, a2 = t3.x, s2 = t3.y, r2 = t3.type, o2 = this.ttCtx, n2 = this.w;
      if (e2.target.classList.contains("apexcharts-".concat(r2, "-rect"))) {
        var l2 = this.getAttr(e2, "i"), h2 = this.getAttr(e2, "j"), c2 = this.getAttr(e2, "cx"), d2 = this.getAttr(e2, "cy"), g2 = this.getAttr(e2, "width"), u2 = this.getAttr(e2, "height");
        if (o2.tooltipLabels.drawSeriesTexts({ ttItems: i2.ttItems, i: l2, j: h2, shared: false, e: e2 }), n2.globals.capturedSeriesIndex = l2, n2.globals.capturedDataPointIndex = h2, a2 = c2 + o2.tooltipRect.ttWidth / 2 + g2, s2 = d2 + o2.tooltipRect.ttHeight / 2 - u2 / 2, o2.tooltipPosition.moveXCrosshairs(c2 + g2 / 2), a2 > n2.globals.gridWidth / 2 && (a2 = c2 - o2.tooltipRect.ttWidth / 2 + g2), o2.w.config.tooltip.followCursor) {
          var f2 = n2.globals.dom.elWrap.getBoundingClientRect();
          a2 = n2.globals.clientX - f2.left - (a2 > n2.globals.gridWidth / 2 ? o2.tooltipRect.ttWidth : 0), s2 = n2.globals.clientY - f2.top - (s2 > n2.globals.gridHeight / 2 ? o2.tooltipRect.ttHeight : 0);
        }
      }
      return { x: a2, y: s2 };
    } }, { key: "handleMarkerTooltip", value: function(t3) {
      var e2, i2, a2 = t3.e, s2 = t3.opt, r2 = t3.x, o2 = t3.y, n2 = this.w, l2 = this.ttCtx;
      if (a2.target.classList.contains("apexcharts-marker")) {
        var h2 = parseInt(s2.paths.getAttribute("cx"), 10), c2 = parseInt(s2.paths.getAttribute("cy"), 10), d2 = parseFloat(s2.paths.getAttribute("val"));
        if (i2 = parseInt(s2.paths.getAttribute("rel"), 10), e2 = parseInt(s2.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, l2.intersect) {
          var g2 = m.findAncestor(s2.paths, "apexcharts-series");
          g2 && (e2 = parseInt(g2.getAttribute("data:realIndex"), 10));
        }
        if (l2.tooltipLabels.drawSeriesTexts({ ttItems: s2.ttItems, i: e2, j: i2, shared: !l2.showOnIntersect && n2.config.tooltip.shared, e: a2 }), "mouseup" === a2.type && l2.markerClick(a2, e2, i2), n2.globals.capturedSeriesIndex = e2, n2.globals.capturedDataPointIndex = i2, r2 = h2, o2 = c2 + n2.globals.translateY - 1.4 * l2.tooltipRect.ttHeight, l2.w.config.tooltip.followCursor) {
          var u2 = l2.getElGrid().getBoundingClientRect();
          o2 = l2.e.clientY + n2.globals.translateY - u2.top;
        }
        d2 < 0 && (o2 = c2), l2.marker.enlargeCurrentPoint(i2, s2.paths, r2, o2);
      }
      return { x: r2, y: o2 };
    } }, { key: "handleBarTooltip", value: function(t3) {
      var e2, i2, a2 = t3.e, s2 = t3.opt, r2 = this.w, o2 = this.ttCtx, n2 = o2.getElTooltip(), l2 = 0, h2 = 0, c2 = 0, d2 = this.getBarTooltipXY({ e: a2, opt: s2 });
      e2 = d2.i;
      var g2 = d2.j;
      r2.globals.capturedSeriesIndex = e2, r2.globals.capturedDataPointIndex = g2, r2.globals.isBarHorizontal && o2.tooltipUtil.hasBars() || !r2.config.tooltip.shared ? (h2 = d2.x, c2 = d2.y, i2 = Array.isArray(r2.config.stroke.width) ? r2.config.stroke.width[e2] : r2.config.stroke.width, l2 = h2) : r2.globals.comboCharts || r2.config.tooltip.shared || (l2 /= 2), isNaN(c2) && (c2 = r2.globals.svgHeight - o2.tooltipRect.ttHeight);
      var u2 = parseInt(s2.paths.parentNode.getAttribute("data:realIndex"), 10);
      if (r2.globals.isMultipleYAxis ? r2.config.yaxis[u2] && r2.config.yaxis[u2].reversed : r2.config.yaxis[0].reversed, h2 + o2.tooltipRect.ttWidth > r2.globals.gridWidth ? h2 -= o2.tooltipRect.ttWidth : h2 < 0 && (h2 = 0), o2.w.config.tooltip.followCursor) {
        var f2 = o2.getElGrid().getBoundingClientRect();
        c2 = o2.e.clientY - f2.top;
      }
      null === o2.tooltip && (o2.tooltip = r2.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), r2.config.tooltip.shared || (r2.globals.comboBarCount > 0 ? o2.tooltipPosition.moveXCrosshairs(l2 + i2 / 2) : o2.tooltipPosition.moveXCrosshairs(l2)), !o2.fixedTooltip && (!r2.config.tooltip.shared || r2.globals.isBarHorizontal && o2.tooltipUtil.hasBars()) && (c2 = c2 + r2.globals.translateY - o2.tooltipRect.ttHeight / 2, n2.style.left = h2 + r2.globals.translateX + "px", n2.style.top = c2 + "px");
    } }, { key: "getBarTooltipXY", value: function(t3) {
      var e2 = this, i2 = t3.e, a2 = t3.opt, s2 = this.w, r2 = null, o2 = this.ttCtx, n2 = 0, l2 = 0, h2 = 0, c2 = 0, d2 = 0, g2 = i2.target.classList;
      if (g2.contains("apexcharts-bar-area") || g2.contains("apexcharts-candlestick-area") || g2.contains("apexcharts-boxPlot-area") || g2.contains("apexcharts-rangebar-area")) {
        var u2 = i2.target, f2 = u2.getBoundingClientRect(), p2 = a2.elGrid.getBoundingClientRect(), x2 = f2.height;
        d2 = f2.height;
        var b2 = f2.width, v2 = parseInt(u2.getAttribute("cx"), 10), m2 = parseInt(u2.getAttribute("cy"), 10);
        c2 = parseFloat(u2.getAttribute("barWidth"));
        var y2 = "touchmove" === i2.type ? i2.touches[0].clientX : i2.clientX;
        r2 = parseInt(u2.getAttribute("j"), 10), n2 = parseInt(u2.parentNode.getAttribute("rel"), 10) - 1;
        var w2 = u2.getAttribute("data-range-y1"), k2 = u2.getAttribute("data-range-y2");
        s2.globals.comboCharts && (n2 = parseInt(u2.parentNode.getAttribute("data:realIndex"), 10));
        var A2 = function(t4) {
          return s2.globals.isXNumeric ? v2 - b2 / 2 : e2.isVerticalGroupedRangeBar ? v2 + b2 / 2 : v2 - o2.dataPointsDividedWidth + b2 / 2;
        }, S2 = function() {
          return m2 - o2.dataPointsDividedHeight + x2 / 2 - o2.tooltipRect.ttHeight / 2;
        };
        o2.tooltipLabels.drawSeriesTexts({ ttItems: a2.ttItems, i: n2, j: r2, y1: w2 ? parseInt(w2, 10) : null, y2: k2 ? parseInt(k2, 10) : null, shared: !o2.showOnIntersect && s2.config.tooltip.shared, e: i2 }), s2.config.tooltip.followCursor ? s2.globals.isBarHorizontal ? (l2 = y2 - p2.left + 15, h2 = S2()) : (l2 = A2(), h2 = i2.clientY - p2.top - o2.tooltipRect.ttHeight / 2 - 15) : s2.globals.isBarHorizontal ? ((l2 = v2) < o2.xyRatios.baseLineInvertedY && (l2 = v2 - o2.tooltipRect.ttWidth), h2 = S2()) : (l2 = A2(), h2 = m2);
      }
      return { x: l2, y: h2, barHeight: d2, barWidth: c2, i: n2, j: r2 };
    } }]), t2;
  }(), yt = function() {
    function t2(e2) {
      i(this, t2), this.w = e2.w, this.ttCtx = e2;
    }
    return s(t2, [{ key: "drawXaxisTooltip", value: function() {
      var t3 = this.w, e2 = this.ttCtx, i2 = "bottom" === t3.config.xaxis.position;
      e2.xaxisOffY = i2 ? t3.globals.gridHeight + 1 : -t3.globals.xAxisHeight - t3.config.xaxis.axisTicks.height + 3;
      var a2 = i2 ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top", s2 = t3.globals.dom.elWrap;
      e2.isXAxisTooltipEnabled && (null === t3.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") && (e2.xaxisTooltip = document.createElement("div"), e2.xaxisTooltip.setAttribute("class", a2 + " apexcharts-theme-" + t3.config.tooltip.theme), s2.appendChild(e2.xaxisTooltip), e2.xaxisTooltipText = document.createElement("div"), e2.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e2.xaxisTooltipText.style.fontFamily = t3.config.xaxis.tooltip.style.fontFamily || t3.config.chart.fontFamily, e2.xaxisTooltipText.style.fontSize = t3.config.xaxis.tooltip.style.fontSize, e2.xaxisTooltip.appendChild(e2.xaxisTooltipText)));
    } }, { key: "drawYaxisTooltip", value: function() {
      for (var t3 = this.w, e2 = this.ttCtx, i2 = 0; i2 < t3.config.yaxis.length; i2++) {
        var a2 = t3.config.yaxis[i2].opposite || t3.config.yaxis[i2].crosshairs.opposite;
        e2.yaxisOffX = a2 ? t3.globals.gridWidth + 1 : 1;
        var s2 = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i2, a2 ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left"), r2 = t3.globals.dom.elWrap;
        null === t3.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i2)) && (e2.yaxisTooltip = document.createElement("div"), e2.yaxisTooltip.setAttribute("class", s2 + " apexcharts-theme-" + t3.config.tooltip.theme), r2.appendChild(e2.yaxisTooltip), 0 === i2 && (e2.yaxisTooltipText = []), e2.yaxisTooltipText[i2] = document.createElement("div"), e2.yaxisTooltipText[i2].classList.add("apexcharts-yaxistooltip-text"), e2.yaxisTooltip.appendChild(e2.yaxisTooltipText[i2]));
      }
    } }, { key: "setXCrosshairWidth", value: function() {
      var t3 = this.w, e2 = this.ttCtx, i2 = e2.getElXCrosshairs();
      if (e2.xcrosshairsWidth = parseInt(t3.config.xaxis.crosshairs.width, 10), t3.globals.comboCharts) {
        var a2 = t3.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
        if (null !== a2 && "barWidth" === t3.config.xaxis.crosshairs.width) {
          var s2 = parseFloat(a2.getAttribute("barWidth"));
          e2.xcrosshairsWidth = s2;
        } else if ("tickWidth" === t3.config.xaxis.crosshairs.width) {
          var r2 = t3.globals.labels.length;
          e2.xcrosshairsWidth = t3.globals.gridWidth / r2;
        }
      } else if ("tickWidth" === t3.config.xaxis.crosshairs.width) {
        var o2 = t3.globals.labels.length;
        e2.xcrosshairsWidth = t3.globals.gridWidth / o2;
      } else if ("barWidth" === t3.config.xaxis.crosshairs.width) {
        var n2 = t3.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
        if (null !== n2) {
          var l2 = parseFloat(n2.getAttribute("barWidth"));
          e2.xcrosshairsWidth = l2;
        } else e2.xcrosshairsWidth = 1;
      }
      t3.globals.isBarHorizontal && (e2.xcrosshairsWidth = 0), null !== i2 && e2.xcrosshairsWidth > 0 && i2.setAttribute("width", e2.xcrosshairsWidth);
    } }, { key: "handleYCrosshair", value: function() {
      var t3 = this.w, e2 = this.ttCtx;
      e2.ycrosshairs = t3.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e2.ycrosshairsHidden = t3.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden");
    } }, { key: "drawYaxisTooltipText", value: function(t3, e2, i2) {
      var a2 = this.ttCtx, s2 = this.w, r2 = s2.globals, o2 = r2.seriesYAxisMap[t3];
      if (a2.yaxisTooltips[t3] && o2.length > 0) {
        var n2 = r2.yLabelFormatters[t3], l2 = a2.getElGrid().getBoundingClientRect(), h2 = o2[0], c2 = 0;
        i2.yRatio.length > 1 && (c2 = h2);
        var d2 = (e2 - l2.top) * i2.yRatio[c2], g2 = r2.maxYArr[h2] - r2.minYArr[h2], u2 = r2.minYArr[h2] + (g2 - d2);
        s2.config.yaxis[t3].reversed && (u2 = r2.maxYArr[h2] - (g2 - d2)), a2.tooltipPosition.moveYCrosshairs(e2 - l2.top), a2.yaxisTooltipText[t3].innerHTML = n2(u2), a2.tooltipPosition.moveYAxisTooltip(t3);
      }
    } }]), t2;
  }(), wt = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
      var a2 = this.w;
      this.tConfig = a2.config.tooltip, this.tooltipUtil = new pt(this), this.tooltipLabels = new xt(this), this.tooltipPosition = new bt(this), this.marker = new vt(this), this.intersect = new mt(this), this.axesTooltip = new yt(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !a2.globals.isBarHorizontal && this.tConfig.shared, this.lastHoverTime = Date.now();
    }
    return s(t2, [{ key: "getElTooltip", value: function(t3) {
      return t3 || (t3 = this), t3.w.globals.dom.baseEl ? t3.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip") : null;
    } }, { key: "getElXCrosshairs", value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs");
    } }, { key: "getElGrid", value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid");
    } }, { key: "drawTooltip", value: function(t3) {
      var e2 = this.w;
      this.xyRatios = t3, this.isXAxisTooltipEnabled = e2.config.xaxis.tooltip.enabled && e2.globals.axisCharts, this.yaxisTooltips = e2.config.yaxis.map(function(t4, i3) {
        return !!(t4.show && t4.tooltip.enabled && e2.globals.axisCharts);
      }), this.allTooltipSeriesGroups = [], e2.globals.axisCharts || (this.showTooltipTitle = false);
      var i2 = document.createElement("div");
      if (i2.classList.add("apexcharts-tooltip"), e2.config.tooltip.cssClass && i2.classList.add(e2.config.tooltip.cssClass), i2.classList.add("apexcharts-theme-".concat(this.tConfig.theme)), e2.globals.dom.elWrap.appendChild(i2), e2.globals.axisCharts) {
        this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
        var a2 = new q(this.ctx);
        this.xAxisTicksPositions = a2.getXAxisTicksPositions();
      }
      if (!e2.globals.comboCharts && !this.tConfig.intersect && "rangeBar" !== e2.config.chart.type || this.tConfig.shared || (this.showOnIntersect = true), 0 !== e2.config.markers.size && 0 !== e2.globals.markers.largestSize || this.marker.drawDynamicPoints(this), e2.globals.collapsedSeries.length !== e2.globals.series.length) {
        this.dataPointsDividedHeight = e2.globals.gridHeight / e2.globals.dataPoints, this.dataPointsDividedWidth = e2.globals.gridWidth / e2.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || e2.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, i2.appendChild(this.tooltipTitle));
        var s2 = e2.globals.series.length;
        (e2.globals.xyCharts || e2.globals.comboCharts) && this.tConfig.shared && (s2 = this.showOnIntersect ? 1 : e2.globals.series.length), this.legendLabels = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(s2), this.addSVGEvents();
      }
    } }, { key: "createTTElements", value: function(t3) {
      for (var e2 = this, i2 = this.w, a2 = [], s2 = this.getElTooltip(), r2 = function(r3) {
        var o3 = document.createElement("div");
        o3.classList.add("apexcharts-tooltip-series-group", "apexcharts-tooltip-series-group-".concat(r3)), o3.style.order = i2.config.tooltip.inverseOrder ? t3 - r3 : r3 + 1;
        var n2 = document.createElement("span");
        n2.classList.add("apexcharts-tooltip-marker"), n2.style.backgroundColor = i2.globals.colors[r3], o3.appendChild(n2);
        var l2 = document.createElement("div");
        l2.classList.add("apexcharts-tooltip-text"), l2.style.fontFamily = e2.tConfig.style.fontFamily || i2.config.chart.fontFamily, l2.style.fontSize = e2.tConfig.style.fontSize, ["y", "goals", "z"].forEach(function(t4) {
          var e3 = document.createElement("div");
          e3.classList.add("apexcharts-tooltip-".concat(t4, "-group"));
          var i3 = document.createElement("span");
          i3.classList.add("apexcharts-tooltip-text-".concat(t4, "-label")), e3.appendChild(i3);
          var a3 = document.createElement("span");
          a3.classList.add("apexcharts-tooltip-text-".concat(t4, "-value")), e3.appendChild(a3), l2.appendChild(e3);
        }), o3.appendChild(l2), s2.appendChild(o3), a2.push(o3);
      }, o2 = 0; o2 < t3; o2++) r2(o2);
      return a2;
    } }, { key: "addSVGEvents", value: function() {
      var t3 = this.w, e2 = t3.config.chart.type, i2 = this.getElTooltip(), a2 = !("bar" !== e2 && "candlestick" !== e2 && "boxPlot" !== e2 && "rangeBar" !== e2), s2 = "area" === e2 || "line" === e2 || "scatter" === e2 || "bubble" === e2 || "radar" === e2, r2 = t3.globals.dom.Paper.node, o2 = this.getElGrid();
      o2 && (this.seriesBound = o2.getBoundingClientRect());
      var n2, l2 = [], h2 = [], c2 = { hoverArea: r2, elGrid: o2, tooltipEl: i2, tooltipY: l2, tooltipX: h2, ttItems: this.ttItems };
      if (t3.globals.axisCharts && (s2 ? n2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : a2 ? n2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area") : "heatmap" !== e2 && "treemap" !== e2 || (n2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), n2 && n2.length)) for (var d2 = 0; d2 < n2.length; d2++) l2.push(n2[d2].getAttribute("cy")), h2.push(n2[d2].getAttribute("cx"));
      if (t3.globals.xyCharts && !this.showOnIntersect || t3.globals.comboCharts && !this.showOnIntersect || a2 && this.tooltipUtil.hasBars() && this.tConfig.shared) this.addPathsEventListeners([r2], c2);
      else if (a2 && !t3.globals.comboCharts || s2 && this.showOnIntersect) this.addDatapointEventsListeners(c2);
      else if (!t3.globals.axisCharts || "heatmap" === e2 || "treemap" === e2) {
        var g2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
        this.addPathsEventListeners(g2, c2);
      }
      if (this.showOnIntersect) {
        var u2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");
        u2.length > 0 && this.addPathsEventListeners(u2, c2), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(c2);
      }
    } }, { key: "drawFixedTooltipRect", value: function() {
      var t3 = this.w, e2 = this.getElTooltip(), i2 = e2.getBoundingClientRect(), a2 = i2.width + 10, s2 = i2.height + 10, r2 = this.tConfig.fixed.offsetX, o2 = this.tConfig.fixed.offsetY, n2 = this.tConfig.fixed.position.toLowerCase();
      return n2.indexOf("right") > -1 && (r2 = r2 + t3.globals.svgWidth - a2 + 10), n2.indexOf("bottom") > -1 && (o2 = o2 + t3.globals.svgHeight - s2 - 10), e2.style.left = r2 + "px", e2.style.top = o2 + "px", { x: r2, y: o2, ttWidth: a2, ttHeight: s2 };
    } }, { key: "addDatapointEventsListeners", value: function(t3) {
      var e2 = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
      this.addPathsEventListeners(e2, t3);
    } }, { key: "addPathsEventListeners", value: function(t3, e2) {
      for (var i2 = this, a2 = function(a3) {
        var s3 = { paths: t3[a3], tooltipEl: e2.tooltipEl, tooltipY: e2.tooltipY, tooltipX: e2.tooltipX, elGrid: e2.elGrid, hoverArea: e2.hoverArea, ttItems: e2.ttItems };
        ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map(function(e3) {
          return t3[a3].addEventListener(e3, i2.onSeriesHover.bind(i2, s3), { capture: false, passive: true });
        });
      }, s2 = 0; s2 < t3.length; s2++) a2(s2);
    } }, { key: "onSeriesHover", value: function(t3, e2) {
      var i2 = this, a2 = Date.now() - this.lastHoverTime;
      a2 >= 100 ? this.seriesHover(t3, e2) : (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout = setTimeout(function() {
        i2.seriesHover(t3, e2);
      }, 100 - a2));
    } }, { key: "seriesHover", value: function(t3, e2) {
      var i2 = this;
      this.lastHoverTime = Date.now();
      var a2 = [], s2 = this.w;
      s2.config.chart.group && (a2 = this.ctx.getGroupedCharts()), s2.globals.axisCharts && (s2.globals.minX === -1 / 0 && s2.globals.maxX === 1 / 0 || 0 === s2.globals.dataPoints) || (a2.length ? a2.forEach(function(a3) {
        var s3 = i2.getElTooltip(a3), r2 = { paths: t3.paths, tooltipEl: s3, tooltipY: t3.tooltipY, tooltipX: t3.tooltipX, elGrid: t3.elGrid, hoverArea: t3.hoverArea, ttItems: a3.w.globals.tooltip.ttItems };
        a3.w.globals.minX === i2.w.globals.minX && a3.w.globals.maxX === i2.w.globals.maxX && a3.w.globals.tooltip.seriesHoverByContext({ chartCtx: a3, ttCtx: a3.w.globals.tooltip, opt: r2, e: e2 });
      }) : this.seriesHoverByContext({ chartCtx: this.ctx, ttCtx: this.w.globals.tooltip, opt: t3, e: e2 }));
    } }, { key: "seriesHoverByContext", value: function(t3) {
      var e2 = t3.chartCtx, i2 = t3.ttCtx, a2 = t3.opt, s2 = t3.e, r2 = e2.w, o2 = this.getElTooltip(e2);
      if (o2) {
        if (i2.tooltipRect = { x: 0, y: 0, ttWidth: o2.getBoundingClientRect().width, ttHeight: o2.getBoundingClientRect().height }, i2.e = s2, i2.tooltipUtil.hasBars() && !r2.globals.comboCharts && !i2.isBarShared) {
          if (this.tConfig.onDatasetHover.highlightDataSeries) new V(e2).toggleSeriesOnHover(s2, s2.target.parentNode);
        }
        i2.fixedTooltip && i2.drawFixedTooltipRect(), r2.globals.axisCharts ? i2.axisChartsTooltips({ e: s2, opt: a2, tooltipRect: i2.tooltipRect }) : i2.nonAxisChartsTooltips({ e: s2, opt: a2, tooltipRect: i2.tooltipRect });
      }
    } }, { key: "axisChartsTooltips", value: function(t3) {
      var e2, i2, a2 = t3.e, s2 = t3.opt, r2 = this.w, o2 = s2.elGrid.getBoundingClientRect(), n2 = "touchmove" === a2.type ? a2.touches[0].clientX : a2.clientX, l2 = "touchmove" === a2.type ? a2.touches[0].clientY : a2.clientY;
      if (this.clientY = l2, this.clientX = n2, r2.globals.capturedSeriesIndex = -1, r2.globals.capturedDataPointIndex = -1, l2 < o2.top || l2 > o2.top + o2.height) this.handleMouseOut(s2);
      else {
        if (Array.isArray(this.tConfig.enabledOnSeries) && !r2.config.tooltip.shared) {
          var h2 = parseInt(s2.paths.getAttribute("index"), 10);
          if (this.tConfig.enabledOnSeries.indexOf(h2) < 0) return void this.handleMouseOut(s2);
        }
        var c2 = this.getElTooltip(), d2 = this.getElXCrosshairs(), g2 = [];
        r2.config.chart.group && (g2 = this.ctx.getSyncedCharts());
        var u2 = r2.globals.xyCharts || "bar" === r2.config.chart.type && !r2.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || r2.globals.comboCharts && this.tooltipUtil.hasBars();
        if ("mousemove" === a2.type || "touchmove" === a2.type || "mouseup" === a2.type) {
          if (r2.globals.collapsedSeries.length + r2.globals.ancillaryCollapsedSeries.length === r2.globals.series.length) return;
          null !== d2 && d2.classList.add("apexcharts-active");
          var f2 = this.yaxisTooltips.filter(function(t4) {
            return true === t4;
          });
          if (null !== this.ycrosshairs && f2.length && this.ycrosshairs.classList.add("apexcharts-active"), u2 && !this.showOnIntersect || g2.length > 1) this.handleStickyTooltip(a2, n2, l2, s2);
          else if ("heatmap" === r2.config.chart.type || "treemap" === r2.config.chart.type) {
            var p2 = this.intersect.handleHeatTreeTooltip({ e: a2, opt: s2, x: e2, y: i2, type: r2.config.chart.type });
            e2 = p2.x, i2 = p2.y, c2.style.left = e2 + "px", c2.style.top = i2 + "px";
          } else this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({ e: a2, opt: s2 }), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({ e: a2, opt: s2, x: e2, y: i2 });
          if (this.yaxisTooltips.length) for (var x2 = 0; x2 < r2.config.yaxis.length; x2++) this.axesTooltip.drawYaxisTooltipText(x2, l2, this.xyRatios);
          r2.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"), s2.tooltipEl.classList.add("apexcharts-active");
        } else "mouseout" !== a2.type && "touchend" !== a2.type || this.handleMouseOut(s2);
      }
    } }, { key: "nonAxisChartsTooltips", value: function(t3) {
      var e2 = t3.e, i2 = t3.opt, a2 = t3.tooltipRect, s2 = this.w, r2 = i2.paths.getAttribute("rel"), o2 = this.getElTooltip(), n2 = s2.globals.dom.elWrap.getBoundingClientRect();
      if ("mousemove" === e2.type || "touchmove" === e2.type) {
        s2.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"), o2.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts({ ttItems: i2.ttItems, i: parseInt(r2, 10) - 1, shared: false });
        var l2 = s2.globals.clientX - n2.left - a2.ttWidth / 2, h2 = s2.globals.clientY - n2.top - a2.ttHeight - 10;
        if (o2.style.left = l2 + "px", o2.style.top = h2 + "px", s2.config.legend.tooltipHoverFormatter) {
          var c2 = r2 - 1, d2 = (0, s2.config.legend.tooltipHoverFormatter)(this.legendLabels[c2].getAttribute("data:default-text"), { seriesIndex: c2, dataPointIndex: c2, w: s2 });
          this.legendLabels[c2].innerHTML = d2;
        }
      } else "mouseout" !== e2.type && "touchend" !== e2.type || (o2.classList.remove("apexcharts-active"), s2.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"), s2.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(t4) {
        var e3 = t4.getAttribute("data:default-text");
        t4.innerHTML = decodeURIComponent(e3);
      }));
    } }, { key: "handleStickyTooltip", value: function(t3, e2, i2, a2) {
      var s2 = this.w, r2 = this.tooltipUtil.getNearestValues({ context: this, hoverArea: a2.hoverArea, elGrid: a2.elGrid, clientX: e2, clientY: i2 }), o2 = r2.j, n2 = r2.capturedSeries;
      s2.globals.collapsedSeriesIndices.includes(n2) && (n2 = null);
      var l2 = a2.elGrid.getBoundingClientRect();
      if (r2.hoverX < 0 || r2.hoverX > l2.width) this.handleMouseOut(a2);
      else if (null !== n2) this.handleStickyCapturedSeries(t3, n2, a2, o2);
      else if (this.tooltipUtil.isXoverlap(o2) || s2.globals.isBarHorizontal) {
        var h2 = s2.globals.series.findIndex(function(t4, e3) {
          return !s2.globals.collapsedSeriesIndices.includes(e3);
        });
        this.create(t3, this, h2, o2, a2.ttItems);
      }
    } }, { key: "handleStickyCapturedSeries", value: function(t3, e2, i2, a2) {
      var s2 = this.w;
      if (!this.tConfig.shared && null === s2.globals.series[e2][a2]) return void this.handleMouseOut(i2);
      if (void 0 !== s2.globals.series[e2][a2]) this.tConfig.shared && this.tooltipUtil.isXoverlap(a2) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(t3, this, e2, a2, i2.ttItems) : this.create(t3, this, e2, a2, i2.ttItems, false);
      else if (this.tooltipUtil.isXoverlap(a2)) {
        var r2 = s2.globals.series.findIndex(function(t4, e3) {
          return !s2.globals.collapsedSeriesIndices.includes(e3);
        });
        this.create(t3, this, r2, a2, i2.ttItems);
      }
    } }, { key: "deactivateHoverFilter", value: function() {
      for (var t3 = this.w, e2 = new k(this.ctx), i2 = t3.globals.dom.Paper.select(".apexcharts-bar-area"), a2 = 0; a2 < i2.length; a2++) e2.pathMouseLeave(i2[a2]);
    } }, { key: "handleMouseOut", value: function(t3) {
      var e2 = this.w, i2 = this.getElXCrosshairs();
      if (e2.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"), t3.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), "bubble" !== e2.config.chart.type && this.marker.resetPointsSize(), null !== i2 && i2.classList.remove("apexcharts-active"), null !== this.ycrosshairs && this.ycrosshairs.classList.remove("apexcharts-active"), this.isXAxisTooltipEnabled && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) {
        null === this.yaxisTTEls && (this.yaxisTTEls = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
        for (var a2 = 0; a2 < this.yaxisTTEls.length; a2++) this.yaxisTTEls[a2].classList.remove("apexcharts-active");
      }
      e2.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(t4) {
        var e3 = t4.getAttribute("data:default-text");
        t4.innerHTML = decodeURIComponent(e3);
      });
    } }, { key: "markerClick", value: function(t3, e2, i2) {
      var a2 = this.w;
      "function" == typeof a2.config.chart.events.markerClick && a2.config.chart.events.markerClick(t3, this.ctx, { seriesIndex: e2, dataPointIndex: i2, w: a2 }), this.ctx.events.fireEvent("markerClick", [t3, this.ctx, { seriesIndex: e2, dataPointIndex: i2, w: a2 }]);
    } }, { key: "create", value: function(t3, e2, i2, a2, s2) {
      var r2, o2, n2, l2, h2, c2, d2, u2, f2, p2, x2, b2, v2, m2, y2, w2, A2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, S2 = this.w, C2 = e2;
      "mouseup" === t3.type && this.markerClick(t3, i2, a2), null === A2 && (A2 = this.tConfig.shared);
      var L2 = this.tooltipUtil.hasMarkers(i2), P2 = this.tooltipUtil.getElBars();
      if (S2.config.legend.tooltipHoverFormatter) {
        var M2 = S2.config.legend.tooltipHoverFormatter, I2 = Array.from(this.legendLabels);
        I2.forEach(function(t4) {
          var e3 = t4.getAttribute("data:default-text");
          t4.innerHTML = decodeURIComponent(e3);
        });
        for (var T2 = 0; T2 < I2.length; T2++) {
          var z2 = I2[T2], X2 = parseInt(z2.getAttribute("i"), 10), E2 = decodeURIComponent(z2.getAttribute("data:default-text")), Y2 = M2(E2, { seriesIndex: A2 ? X2 : i2, dataPointIndex: a2, w: S2 });
          if (A2) z2.innerHTML = S2.globals.collapsedSeriesIndices.indexOf(X2) < 0 ? Y2 : E2;
          else if (z2.innerHTML = X2 === i2 ? Y2 : E2, i2 === X2) break;
        }
      }
      var R2 = g(g({ ttItems: s2, i: i2, j: a2 }, void 0 !== (null === (r2 = S2.globals.seriesRange) || void 0 === r2 || null === (o2 = r2[i2]) || void 0 === o2 || null === (n2 = o2[a2]) || void 0 === n2 || null === (l2 = n2.y[0]) || void 0 === l2 ? void 0 : l2.y1) && { y1: null === (h2 = S2.globals.seriesRange) || void 0 === h2 || null === (c2 = h2[i2]) || void 0 === c2 || null === (d2 = c2[a2]) || void 0 === d2 || null === (u2 = d2.y[0]) || void 0 === u2 ? void 0 : u2.y1 }), void 0 !== (null === (f2 = S2.globals.seriesRange) || void 0 === f2 || null === (p2 = f2[i2]) || void 0 === p2 || null === (x2 = p2[a2]) || void 0 === x2 || null === (b2 = x2.y[0]) || void 0 === b2 ? void 0 : b2.y2) && { y2: null === (v2 = S2.globals.seriesRange) || void 0 === v2 || null === (m2 = v2[i2]) || void 0 === m2 || null === (y2 = m2[a2]) || void 0 === y2 || null === (w2 = y2.y[0]) || void 0 === w2 ? void 0 : w2.y2 });
      if (A2) {
        if (C2.tooltipLabels.drawSeriesTexts(g(g({}, R2), {}, { shared: !this.showOnIntersect && this.tConfig.shared })), L2) S2.globals.markers.largestSize > 0 ? C2.marker.enlargePoints(a2) : C2.tooltipPosition.moveDynamicPointsOnHover(a2);
        else if (this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(P2), this.barSeriesHeight > 0)) {
          var F2 = new k(this.ctx), D2 = S2.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(a2, "']"));
          this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(a2, i2);
          for (var H2 = 0; H2 < D2.length; H2++) F2.pathMouseEnter(D2[H2]);
        }
      } else C2.tooltipLabels.drawSeriesTexts(g({ shared: false }, R2)), this.tooltipUtil.hasBars() && C2.tooltipPosition.moveStickyTooltipOverBars(a2, i2), L2 && C2.tooltipPosition.moveMarkers(i2, a2);
    } }]), t2;
  }(), kt = function() {
    function t2(e2) {
      i(this, t2), this.w = e2.w, this.barCtx = e2, this.totalFormatter = this.w.config.plotOptions.bar.dataLabels.total.formatter, this.totalFormatter || (this.totalFormatter = this.w.config.dataLabels.formatter);
    }
    return s(t2, [{ key: "handleBarDataLabels", value: function(t3) {
      var e2, i2, a2 = t3.x, s2 = t3.y, r2 = t3.y1, o2 = t3.y2, n2 = t3.i, l2 = t3.j, h2 = t3.realIndex, c2 = t3.columnGroupIndex, d2 = t3.series, u2 = t3.barHeight, f2 = t3.barWidth, p2 = t3.barXPosition, x2 = t3.barYPosition, b2 = t3.visibleSeries, v2 = t3.renderedPath, m2 = this.w, y2 = new k(this.barCtx.ctx), w2 = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[h2] : this.barCtx.strokeWidth;
      m2.globals.isXNumeric && !m2.globals.isBarHorizontal ? (e2 = a2 + parseFloat(f2 * (b2 + 1)), i2 = s2 + parseFloat(u2 * (b2 + 1)) - w2) : (e2 = a2 + parseFloat(f2 * b2), i2 = s2 + parseFloat(u2 * b2));
      var A2, S2 = null, C2 = a2, L2 = s2, P2 = {}, M2 = m2.config.dataLabels, I2 = this.barCtx.barOptions.dataLabels, T2 = this.barCtx.barOptions.dataLabels.total;
      void 0 !== x2 && this.barCtx.isRangeBar && (i2 = x2, L2 = x2), void 0 !== p2 && this.barCtx.isVerticalGroupedRangeBar && (e2 = p2, C2 = p2);
      var z2 = M2.offsetX, X2 = M2.offsetY, E2 = { width: 0, height: 0 };
      if (m2.config.dataLabels.enabled) {
        var Y2 = m2.globals.series[n2][l2];
        E2 = y2.getTextRects(m2.config.dataLabels.formatter ? m2.config.dataLabels.formatter(Y2, g(g({}, m2), {}, { seriesIndex: n2, dataPointIndex: l2, w: m2 })) : m2.globals.yLabelFormatters[0](Y2), parseFloat(M2.style.fontSize));
      }
      var R2 = { x: a2, y: s2, i: n2, j: l2, realIndex: h2, columnGroupIndex: c2, renderedPath: v2, bcx: e2, bcy: i2, barHeight: u2, barWidth: f2, textRects: E2, strokeWidth: w2, dataLabelsX: C2, dataLabelsY: L2, dataLabelsConfig: M2, barDataLabelsConfig: I2, barTotalDataLabelsConfig: T2, offX: z2, offY: X2 };
      return P2 = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(R2) : this.calculateColumnsDataLabelsPosition(R2), v2.attr({ cy: P2.bcy, cx: P2.bcx, j: l2, val: m2.globals.series[n2][l2], barHeight: u2, barWidth: f2 }), A2 = this.drawCalculatedDataLabels({ x: P2.dataLabelsX, y: P2.dataLabelsY, val: this.barCtx.isRangeBar ? [r2, o2] : "100%" === m2.config.chart.stackType ? d2[h2][l2] : m2.globals.series[h2][l2], i: h2, j: l2, barWidth: f2, barHeight: u2, textRects: E2, dataLabelsConfig: M2 }), m2.config.chart.stacked && T2.enabled && (S2 = this.drawTotalDataLabels({ x: P2.totalDataLabelsX, y: P2.totalDataLabelsY, barWidth: f2, barHeight: u2, realIndex: h2, textAnchor: P2.totalDataLabelsAnchor, val: this.getStackedTotalDataLabel({ realIndex: h2, j: l2 }), dataLabelsConfig: M2, barTotalDataLabelsConfig: T2 })), { dataLabels: A2, totalDataLabels: S2 };
    } }, { key: "getStackedTotalDataLabel", value: function(t3) {
      var e2 = t3.realIndex, i2 = t3.j, a2 = this.w, s2 = this.barCtx.stackedSeriesTotals[i2];
      return this.totalFormatter && (s2 = this.totalFormatter(s2, g(g({}, a2), {}, { seriesIndex: e2, dataPointIndex: i2, w: a2 }))), s2;
    } }, { key: "calculateColumnsDataLabelsPosition", value: function(t3) {
      var e2 = this.w, i2 = t3.i, a2 = t3.j, s2 = t3.realIndex;
      t3.columnGroupIndex;
      var r2, o2, n2 = t3.y, l2 = t3.bcx, h2 = t3.barWidth, c2 = t3.barHeight, d2 = t3.textRects, g2 = t3.dataLabelsX, u2 = t3.dataLabelsY, f2 = t3.dataLabelsConfig, p2 = t3.barDataLabelsConfig, x2 = t3.barTotalDataLabelsConfig, b2 = t3.strokeWidth, v2 = t3.offX, m2 = t3.offY, y2 = l2;
      c2 = Math.abs(c2);
      var w2 = "vertical" === e2.config.plotOptions.bar.dataLabels.orientation, A2 = this.barCtx.barHelpers.getZeroValueEncounters({ i: i2, j: a2 }).zeroEncounters;
      l2 -= b2 / 2;
      var S2 = e2.globals.gridWidth / e2.globals.dataPoints;
      if (this.barCtx.isVerticalGroupedRangeBar ? g2 += h2 / 2 : (g2 = e2.globals.isXNumeric ? l2 - h2 / 2 + v2 : l2 - S2 + h2 / 2 + v2, A2 > 0 && e2.config.plotOptions.bar.hideZeroBarsWhenGrouped && (g2 -= h2 * A2)), w2) {
        g2 = g2 + d2.height / 2 - b2 / 2 - 2;
      }
      var C2 = e2.globals.series[i2][a2] < 0, L2 = n2;
      switch (this.barCtx.isReversed && (L2 = n2 + (C2 ? c2 : -c2)), p2.position) {
        case "center":
          u2 = w2 ? C2 ? L2 - c2 / 2 + m2 : L2 + c2 / 2 - m2 : C2 ? L2 - c2 / 2 + d2.height / 2 + m2 : L2 + c2 / 2 + d2.height / 2 - m2;
          break;
        case "bottom":
          u2 = w2 ? C2 ? L2 - c2 + m2 : L2 + c2 - m2 : C2 ? L2 - c2 + d2.height + b2 + m2 : L2 + c2 - d2.height / 2 + b2 - m2;
          break;
        case "top":
          u2 = w2 ? C2 ? L2 + m2 : L2 - m2 : C2 ? L2 - d2.height / 2 - m2 : L2 + d2.height + m2;
      }
      if (this.barCtx.lastActiveBarSerieIndex === s2 && x2.enabled) {
        var P2 = new k(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: s2, j: a2 }), f2.fontSize);
        r2 = C2 ? L2 - P2.height / 2 - m2 - x2.offsetY + 18 : L2 + P2.height + m2 + x2.offsetY - 18;
        var M2 = S2;
        o2 = y2 + (e2.globals.isXNumeric ? -h2 * e2.globals.barGroups.length / 2 : e2.globals.barGroups.length * h2 / 2 - (e2.globals.barGroups.length - 1) * h2 - M2) + x2.offsetX;
      }
      return e2.config.chart.stacked || (u2 < 0 ? u2 = 0 + b2 : u2 + d2.height / 3 > e2.globals.gridHeight && (u2 = e2.globals.gridHeight - b2)), { bcx: l2, bcy: n2, dataLabelsX: g2, dataLabelsY: u2, totalDataLabelsX: o2, totalDataLabelsY: r2, totalDataLabelsAnchor: "middle" };
    } }, { key: "calculateBarsDataLabelsPosition", value: function(t3) {
      var e2 = this.w, i2 = t3.x, a2 = t3.i, s2 = t3.j, r2 = t3.realIndex, o2 = t3.bcy, n2 = t3.barHeight, l2 = t3.barWidth, h2 = t3.textRects, c2 = t3.dataLabelsX, d2 = t3.strokeWidth, g2 = t3.dataLabelsConfig, u2 = t3.barDataLabelsConfig, f2 = t3.barTotalDataLabelsConfig, p2 = t3.offX, x2 = t3.offY, b2 = e2.globals.gridHeight / e2.globals.dataPoints;
      l2 = Math.abs(l2);
      var v2, m2, y2 = o2 - (this.barCtx.isRangeBar ? 0 : b2) + n2 / 2 + h2.height / 2 + x2 - 3, w2 = "start", A2 = e2.globals.series[a2][s2] < 0, S2 = i2;
      switch (this.barCtx.isReversed && (S2 = i2 + (A2 ? -l2 : l2), w2 = A2 ? "start" : "end"), u2.position) {
        case "center":
          c2 = A2 ? S2 + l2 / 2 - p2 : Math.max(h2.width / 2, S2 - l2 / 2) + p2;
          break;
        case "bottom":
          c2 = A2 ? S2 + l2 - d2 - p2 : S2 - l2 + d2 + p2;
          break;
        case "top":
          c2 = A2 ? S2 - d2 - p2 : S2 - d2 + p2;
      }
      if (this.barCtx.lastActiveBarSerieIndex === r2 && f2.enabled) {
        var C2 = new k(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: r2, j: s2 }), g2.fontSize);
        A2 ? (v2 = S2 - d2 - p2 - f2.offsetX, w2 = "end") : v2 = S2 + p2 + f2.offsetX + (this.barCtx.isReversed ? -(l2 + d2) : d2), m2 = y2 - h2.height / 2 + C2.height / 2 + f2.offsetY + d2;
      }
      return e2.config.chart.stacked || ("start" === g2.textAnchor ? c2 - h2.width < 0 ? c2 = A2 ? h2.width + d2 : d2 : c2 + h2.width > e2.globals.gridWidth && (c2 = A2 ? e2.globals.gridWidth - d2 : e2.globals.gridWidth - h2.width - d2) : "middle" === g2.textAnchor ? c2 - h2.width / 2 < 0 ? c2 = h2.width / 2 + d2 : c2 + h2.width / 2 > e2.globals.gridWidth && (c2 = e2.globals.gridWidth - h2.width / 2 - d2) : "end" === g2.textAnchor && (c2 < 1 ? c2 = h2.width + d2 : c2 + 1 > e2.globals.gridWidth && (c2 = e2.globals.gridWidth - h2.width - d2))), { bcx: i2, bcy: o2, dataLabelsX: c2, dataLabelsY: y2, totalDataLabelsX: v2, totalDataLabelsY: m2, totalDataLabelsAnchor: w2 };
    } }, { key: "drawCalculatedDataLabels", value: function(t3) {
      var e2 = t3.x, i2 = t3.y, a2 = t3.val, s2 = t3.i, r2 = t3.j, o2 = t3.textRects, n2 = t3.barHeight, l2 = t3.barWidth, h2 = t3.dataLabelsConfig, c2 = this.w, d2 = "rotate(0)";
      "vertical" === c2.config.plotOptions.bar.dataLabels.orientation && (d2 = "rotate(-90, ".concat(e2, ", ").concat(i2, ")"));
      var u2 = new G(this.barCtx.ctx), f2 = new k(this.barCtx.ctx), p2 = h2.formatter, x2 = null, b2 = c2.globals.collapsedSeriesIndices.indexOf(s2) > -1;
      if (h2.enabled && !b2) {
        x2 = f2.group({ class: "apexcharts-data-labels", transform: d2 });
        var v2 = "";
        void 0 !== a2 && (v2 = p2(a2, g(g({}, c2), {}, { seriesIndex: s2, dataPointIndex: r2, w: c2 }))), !a2 && c2.config.plotOptions.bar.hideZeroBarsWhenGrouped && (v2 = "");
        var m2 = c2.globals.series[s2][r2] < 0, y2 = c2.config.plotOptions.bar.dataLabels.position;
        if ("vertical" === c2.config.plotOptions.bar.dataLabels.orientation && ("top" === y2 && (h2.textAnchor = m2 ? "end" : "start"), "center" === y2 && (h2.textAnchor = "middle"), "bottom" === y2 && (h2.textAnchor = m2 ? "end" : "start")), this.barCtx.isRangeBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels) l2 < f2.getTextRects(v2, parseFloat(h2.style.fontSize)).width && (v2 = "");
        c2.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? o2.width / 1.6 > Math.abs(l2) && (v2 = "") : o2.height / 1.6 > Math.abs(n2) && (v2 = ""));
        var w2 = g({}, h2);
        this.barCtx.isHorizontal && a2 < 0 && ("start" === h2.textAnchor ? w2.textAnchor = "end" : "end" === h2.textAnchor && (w2.textAnchor = "start")), u2.plotDataLabelsText({ x: e2, y: i2, text: v2, i: s2, j: r2, parent: x2, dataLabelsConfig: w2, alwaysDrawDataLabel: true, offsetCorrection: true });
      }
      return x2;
    } }, { key: "drawTotalDataLabels", value: function(t3) {
      var e2 = t3.x, i2 = t3.y, a2 = t3.val, s2 = t3.realIndex, r2 = t3.textAnchor, o2 = t3.barTotalDataLabelsConfig;
      this.w;
      var n2, l2 = new k(this.barCtx.ctx);
      return o2.enabled && void 0 !== e2 && void 0 !== i2 && this.barCtx.lastActiveBarSerieIndex === s2 && (n2 = l2.drawText({ x: e2, y: i2, foreColor: o2.style.color, text: a2, textAnchor: r2, fontFamily: o2.style.fontFamily, fontSize: o2.style.fontSize, fontWeight: o2.style.fontWeight })), n2;
    } }]), t2;
  }(), At = function() {
    function t2(e2) {
      i(this, t2), this.w = e2.w, this.barCtx = e2;
    }
    return s(t2, [{ key: "initVariables", value: function(t3) {
      var e2 = this.w;
      this.barCtx.series = t3, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
      for (var i2 = 0; i2 < t3.length; i2++) if (t3[i2].length > 0 && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += t3[i2].length), e2.globals.isXNumeric) for (var a2 = 0; a2 < t3[i2].length; a2++) e2.globals.seriesX[i2][a2] > e2.globals.minX && e2.globals.seriesX[i2][a2] < e2.globals.maxX && this.barCtx.visibleItems++;
      else this.barCtx.visibleItems = e2.globals.dataPoints;
      this.arrBorderRadius = this.createBorderRadiusArr(e2.globals.series), 0 === this.barCtx.seriesLen && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], e2.globals.comboCharts || this.checkZeroSeries({ series: t3 });
    } }, { key: "initialPositions", value: function() {
      var t3, e2, i2, a2, s2, r2, o2, n2, l2 = this.w, h2 = l2.globals.dataPoints;
      this.barCtx.isRangeBar && (h2 = l2.globals.labels.length);
      var c2 = this.barCtx.seriesLen;
      if (l2.config.plotOptions.bar.rangeBarGroupRows && (c2 = 1), this.barCtx.isHorizontal) s2 = (i2 = l2.globals.gridHeight / h2) / c2, l2.globals.isXNumeric && (s2 = (i2 = l2.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen), s2 = s2 * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, -1 === String(this.barCtx.barOptions.barHeight).indexOf("%") && (s2 = parseInt(this.barCtx.barOptions.barHeight, 10)), n2 = this.barCtx.baseLineInvertedY + l2.globals.padHorizontal + (this.barCtx.isReversed ? l2.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), this.barCtx.isFunnel && (n2 = l2.globals.gridWidth / 2), e2 = (i2 - s2 * this.barCtx.seriesLen) / 2;
      else {
        if (a2 = l2.globals.gridWidth / this.barCtx.visibleItems, l2.config.xaxis.convertedCatToNumeric && (a2 = l2.globals.gridWidth / l2.globals.dataPoints), r2 = a2 / c2 * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, l2.globals.isXNumeric) {
          var d2 = this.barCtx.xRatio;
          l2.globals.minXDiff && 0.5 !== l2.globals.minXDiff && l2.globals.minXDiff / d2 > 0 && (a2 = l2.globals.minXDiff / d2), (r2 = a2 / c2 * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1 && (r2 = 1);
        }
        -1 === String(this.barCtx.barOptions.columnWidth).indexOf("%") && (r2 = parseInt(this.barCtx.barOptions.columnWidth, 10)), o2 = l2.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.translationsIndex] - (this.barCtx.isReversed ? l2.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.translationsIndex] : 0), t3 = l2.globals.padHorizontal + (a2 - r2 * this.barCtx.seriesLen) / 2;
      }
      return l2.globals.barHeight = s2, l2.globals.barWidth = r2, { x: t3, y: e2, yDivision: i2, xDivision: a2, barHeight: s2, barWidth: r2, zeroH: o2, zeroW: n2 };
    } }, { key: "initializeStackedPrevVars", value: function(t3) {
      t3.w.globals.seriesGroups.forEach(function(e2) {
        t3[e2] || (t3[e2] = {}), t3[e2].prevY = [], t3[e2].prevX = [], t3[e2].prevYF = [], t3[e2].prevXF = [], t3[e2].prevYVal = [], t3[e2].prevXVal = [];
      });
    } }, { key: "initializeStackedXYVars", value: function(t3) {
      t3.w.globals.seriesGroups.forEach(function(e2) {
        t3[e2] || (t3[e2] = {}), t3[e2].xArrj = [], t3[e2].xArrjF = [], t3[e2].xArrjVal = [], t3[e2].yArrj = [], t3[e2].yArrjF = [], t3[e2].yArrjVal = [];
      });
    } }, { key: "getPathFillColor", value: function(t3, e2, i2, a2) {
      var s2, r2, o2, n2, l2, h2 = this.w, c2 = this.barCtx.ctx.fill, d2 = null, g2 = this.barCtx.barOptions.distributed ? i2 : e2;
      this.barCtx.barOptions.colors.ranges.length > 0 && this.barCtx.barOptions.colors.ranges.map(function(a3) {
        t3[e2][i2] >= a3.from && t3[e2][i2] <= a3.to && (d2 = a3.color);
      });
      return null !== (s2 = h2.config.series[e2].data[i2]) && void 0 !== s2 && s2.fillColor && (d2 = h2.config.series[e2].data[i2].fillColor), c2.fillPath({ seriesNumber: this.barCtx.barOptions.distributed ? g2 : a2, dataPointIndex: i2, color: d2, value: t3[e2][i2], fillConfig: null === (r2 = h2.config.series[e2].data[i2]) || void 0 === r2 ? void 0 : r2.fill, fillType: null !== (o2 = h2.config.series[e2].data[i2]) && void 0 !== o2 && null !== (n2 = o2.fill) && void 0 !== n2 && n2.type ? null === (l2 = h2.config.series[e2].data[i2]) || void 0 === l2 ? void 0 : l2.fill.type : Array.isArray(h2.config.fill.type) ? h2.config.fill.type[a2] : h2.config.fill.type });
    } }, { key: "getStrokeWidth", value: function(t3, e2, i2) {
      var a2 = 0, s2 = this.w;
      return this.barCtx.series[t3][e2] ? this.barCtx.isNullValue = false : this.barCtx.isNullValue = true, s2.config.stroke.show && (this.barCtx.isNullValue || (a2 = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[i2] : this.barCtx.strokeWidth)), a2;
    } }, { key: "createBorderRadiusArr", value: function(t3) {
      var e2 = this.w, i2 = !this.w.config.chart.stacked || "last" !== e2.config.plotOptions.bar.borderRadiusWhenStacked || e2.config.plotOptions.bar.borderRadius <= 0, a2 = t3.length, s2 = t3[0].length, o2 = Array.from({ length: a2 }, function() {
        return Array(s2).fill(i2 ? "top" : "none");
      });
      if (i2) return o2;
      for (var n2 = 0; n2 < s2; n2++) {
        for (var l2 = [], h2 = [], c2 = 0, d2 = 0; d2 < a2; d2++) {
          var g2 = t3[d2][n2];
          g2 > 0 ? (l2.push(d2), c2++) : g2 < 0 && (h2.push(d2), c2++);
        }
        if (l2.length > 0 && 0 === h2.length) if (1 === l2.length) o2[l2[0]][n2] = "both";
        else {
          var u2, f2 = l2[0], p2 = l2[l2.length - 1], x2 = r(l2);
          try {
            for (x2.s(); !(u2 = x2.n()).done; ) {
              var b2 = u2.value;
              o2[b2][n2] = b2 === f2 ? "bottom" : b2 === p2 ? "top" : "none";
            }
          } catch (t4) {
            x2.e(t4);
          } finally {
            x2.f();
          }
        }
        else if (h2.length > 0 && 0 === l2.length) if (1 === h2.length) o2[h2[0]][n2] = "both";
        else {
          var v2, m2 = h2[0], y2 = h2[h2.length - 1], w2 = r(h2);
          try {
            for (w2.s(); !(v2 = w2.n()).done; ) {
              var k2 = v2.value;
              o2[k2][n2] = k2 === m2 ? "bottom" : k2 === y2 ? "top" : "none";
            }
          } catch (t4) {
            w2.e(t4);
          } finally {
            w2.f();
          }
        }
        else if (l2.length > 0 && h2.length > 0) {
          var A2, S2 = l2[l2.length - 1], C2 = r(l2);
          try {
            for (C2.s(); !(A2 = C2.n()).done; ) {
              var L2 = A2.value;
              o2[L2][n2] = L2 === S2 ? "top" : "none";
            }
          } catch (t4) {
            C2.e(t4);
          } finally {
            C2.f();
          }
          var P2, M2 = h2[h2.length - 1], I2 = r(h2);
          try {
            for (I2.s(); !(P2 = I2.n()).done; ) {
              var T2 = P2.value;
              o2[T2][n2] = T2 === M2 ? "bottom" : "none";
            }
          } catch (t4) {
            I2.e(t4);
          } finally {
            I2.f();
          }
        } else if (1 === c2) {
          o2[l2[0] || h2[0]][n2] = "both";
        }
      }
      return o2;
    } }, { key: "barBackground", value: function(t3) {
      var e2 = t3.j, i2 = t3.i, a2 = t3.x1, s2 = t3.x2, r2 = t3.y1, o2 = t3.y2, n2 = t3.elSeries, l2 = this.w, h2 = new k(this.barCtx.ctx), c2 = new V(this.barCtx.ctx).getActiveConfigSeriesIndex();
      if (this.barCtx.barOptions.colors.backgroundBarColors.length > 0 && c2 === i2) {
        e2 >= this.barCtx.barOptions.colors.backgroundBarColors.length && (e2 %= this.barCtx.barOptions.colors.backgroundBarColors.length);
        var d2 = this.barCtx.barOptions.colors.backgroundBarColors[e2], g2 = h2.drawRect(void 0 !== a2 ? a2 : 0, void 0 !== r2 ? r2 : 0, void 0 !== s2 ? s2 : l2.globals.gridWidth, void 0 !== o2 ? o2 : l2.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, d2, this.barCtx.barOptions.colors.backgroundBarOpacity);
        n2.add(g2), g2.node.classList.add("apexcharts-backgroundBar");
      }
    } }, { key: "getColumnPaths", value: function(t3) {
      var e2, i2 = t3.barWidth, a2 = t3.barXPosition, s2 = t3.y1, r2 = t3.y2, o2 = t3.strokeWidth, n2 = t3.isReversed, l2 = t3.series, h2 = t3.seriesGroup, c2 = t3.realIndex, d2 = t3.i, g2 = t3.j, u2 = t3.w, f2 = new k(this.barCtx.ctx);
      (o2 = Array.isArray(o2) ? o2[c2] : o2) || (o2 = 0);
      var p2 = i2, x2 = a2;
      null !== (e2 = u2.config.series[c2].data[g2]) && void 0 !== e2 && e2.columnWidthOffset && (x2 = a2 - u2.config.series[c2].data[g2].columnWidthOffset / 2, p2 = i2 + u2.config.series[c2].data[g2].columnWidthOffset);
      var b2 = o2 / 2, v2 = x2 + b2, m2 = x2 + p2 - b2, y2 = (l2[d2][g2] >= 0 ? 1 : -1) * (n2 ? -1 : 1);
      s2 += 1e-3 - b2 * y2, r2 += 1e-3 + b2 * y2;
      var w2 = f2.move(v2, s2), A2 = f2.move(v2, s2), S2 = f2.line(m2, s2);
      if (u2.globals.previousPaths.length > 0 && (A2 = this.barCtx.getPreviousPath(c2, g2, false)), w2 = w2 + f2.line(v2, r2) + f2.line(m2, r2) + S2 + ("around" === u2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[c2][g2] ? " Z" : " z"), A2 = A2 + f2.line(v2, s2) + S2 + S2 + S2 + S2 + S2 + f2.line(v2, s2) + ("around" === u2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[c2][g2] ? " Z" : " z"), "none" !== this.arrBorderRadius[c2][g2] && (w2 = f2.roundPathCorners(w2, u2.config.plotOptions.bar.borderRadius)), u2.config.chart.stacked) {
        var C2 = this.barCtx;
        (C2 = this.barCtx[h2]).yArrj.push(r2 - b2 * y2), C2.yArrjF.push(Math.abs(s2 - r2 + o2 * y2)), C2.yArrjVal.push(this.barCtx.series[d2][g2]);
      }
      return { pathTo: w2, pathFrom: A2 };
    } }, { key: "getBarpaths", value: function(t3) {
      var e2, i2 = t3.barYPosition, a2 = t3.barHeight, s2 = t3.x1, r2 = t3.x2, o2 = t3.strokeWidth, n2 = t3.isReversed, l2 = t3.series, h2 = t3.seriesGroup, c2 = t3.realIndex, d2 = t3.i, g2 = t3.j, u2 = t3.w, f2 = new k(this.barCtx.ctx);
      (o2 = Array.isArray(o2) ? o2[c2] : o2) || (o2 = 0);
      var p2 = i2, x2 = a2;
      null !== (e2 = u2.config.series[c2].data[g2]) && void 0 !== e2 && e2.barHeightOffset && (p2 = i2 - u2.config.series[c2].data[g2].barHeightOffset / 2, x2 = a2 + u2.config.series[c2].data[g2].barHeightOffset);
      var b2 = o2 / 2, v2 = p2 + b2, m2 = p2 + x2 - b2, y2 = (l2[d2][g2] >= 0 ? 1 : -1) * (n2 ? -1 : 1);
      s2 += 1e-3 + b2 * y2, r2 += 1e-3 - b2 * y2;
      var w2 = f2.move(s2, v2), A2 = f2.move(s2, v2);
      u2.globals.previousPaths.length > 0 && (A2 = this.barCtx.getPreviousPath(c2, g2, false));
      var S2 = f2.line(s2, m2);
      if (w2 = w2 + f2.line(r2, v2) + f2.line(r2, m2) + S2 + ("around" === u2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[c2][g2] ? " Z" : " z"), A2 = A2 + f2.line(s2, v2) + S2 + S2 + S2 + S2 + S2 + f2.line(s2, v2) + ("around" === u2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[c2][g2] ? " Z" : " z"), "none" !== this.arrBorderRadius[c2][g2] && (w2 = f2.roundPathCorners(w2, u2.config.plotOptions.bar.borderRadius)), u2.config.chart.stacked) {
        var C2 = this.barCtx;
        (C2 = this.barCtx[h2]).xArrj.push(r2 + b2 * y2), C2.xArrjF.push(Math.abs(s2 - r2 - o2 * y2)), C2.xArrjVal.push(this.barCtx.series[d2][g2]);
      }
      return { pathTo: w2, pathFrom: A2 };
    } }, { key: "checkZeroSeries", value: function(t3) {
      for (var e2 = t3.series, i2 = this.w, a2 = 0; a2 < e2.length; a2++) {
        for (var s2 = 0, r2 = 0; r2 < e2[i2.globals.maxValsInArrayIndex].length; r2++) s2 += e2[a2][r2];
        0 === s2 && this.barCtx.zeroSerieses.push(a2);
      }
    } }, { key: "getXForValue", value: function(t3, e2) {
      var i2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? e2 : null;
      return null != t3 && (i2 = e2 + t3 / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? t3 / this.barCtx.invertedYRatio : 0)), i2;
    } }, { key: "getYForValue", value: function(t3, e2, i2) {
      var a2 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3] ? e2 : null;
      return null != t3 && (a2 = e2 - t3 / this.barCtx.yRatio[i2] + 2 * (this.barCtx.isReversed ? t3 / this.barCtx.yRatio[i2] : 0)), a2;
    } }, { key: "getGoalValues", value: function(t3, e2, i2, a2, s2, r2) {
      var o2 = this, l2 = this.w, h2 = [], c2 = function(a3, s3) {
        var l3;
        h2.push((n(l3 = {}, t3, "x" === t3 ? o2.getXForValue(a3, e2, false) : o2.getYForValue(a3, i2, r2, false)), n(l3, "attrs", s3), l3));
      };
      if (l2.globals.seriesGoals[a2] && l2.globals.seriesGoals[a2][s2] && Array.isArray(l2.globals.seriesGoals[a2][s2]) && l2.globals.seriesGoals[a2][s2].forEach(function(t4) {
        c2(t4.value, t4);
      }), this.barCtx.barOptions.isDumbbell && l2.globals.seriesRange.length) {
        var d2 = this.barCtx.barOptions.dumbbellColors ? this.barCtx.barOptions.dumbbellColors : l2.globals.colors, u2 = { strokeHeight: "x" === t3 ? 0 : l2.globals.markers.size[a2], strokeWidth: "x" === t3 ? l2.globals.markers.size[a2] : 0, strokeDashArray: 0, strokeLineCap: "round", strokeColor: Array.isArray(d2[a2]) ? d2[a2][0] : d2[a2] };
        c2(l2.globals.seriesRangeStart[a2][s2], u2), c2(l2.globals.seriesRangeEnd[a2][s2], g(g({}, u2), {}, { strokeColor: Array.isArray(d2[a2]) ? d2[a2][1] : d2[a2] }));
      }
      return h2;
    } }, { key: "drawGoalLine", value: function(t3) {
      var e2 = t3.barXPosition, i2 = t3.barYPosition, a2 = t3.goalX, s2 = t3.goalY, r2 = t3.barWidth, o2 = t3.barHeight, n2 = new k(this.barCtx.ctx), l2 = n2.group({ className: "apexcharts-bar-goals-groups" });
      l2.node.classList.add("apexcharts-element-hidden"), this.barCtx.w.globals.delayedElements.push({ el: l2.node }), l2.attr("clip-path", "url(#gridRectMarkerMask".concat(this.barCtx.w.globals.cuid, ")"));
      var h2 = null;
      return this.barCtx.isHorizontal ? Array.isArray(a2) && a2.forEach(function(t4) {
        if (t4.x >= -1 && t4.x <= n2.w.globals.gridWidth + 1) {
          var e3 = void 0 !== t4.attrs.strokeHeight ? t4.attrs.strokeHeight : o2 / 2, a3 = i2 + e3 + o2 / 2;
          h2 = n2.drawLine(t4.x, a3 - 2 * e3, t4.x, a3, t4.attrs.strokeColor ? t4.attrs.strokeColor : void 0, t4.attrs.strokeDashArray, t4.attrs.strokeWidth ? t4.attrs.strokeWidth : 2, t4.attrs.strokeLineCap), l2.add(h2);
        }
      }) : Array.isArray(s2) && s2.forEach(function(t4) {
        if (t4.y >= -1 && t4.y <= n2.w.globals.gridHeight + 1) {
          var i3 = void 0 !== t4.attrs.strokeWidth ? t4.attrs.strokeWidth : r2 / 2, a3 = e2 + i3 + r2 / 2;
          h2 = n2.drawLine(a3 - 2 * i3, t4.y, a3, t4.y, t4.attrs.strokeColor ? t4.attrs.strokeColor : void 0, t4.attrs.strokeDashArray, t4.attrs.strokeHeight ? t4.attrs.strokeHeight : 2, t4.attrs.strokeLineCap), l2.add(h2);
        }
      }), l2;
    } }, { key: "drawBarShadow", value: function(t3) {
      var e2 = t3.prevPaths, i2 = t3.currPaths, a2 = t3.color, s2 = this.w, r2 = e2.x, o2 = e2.x1, n2 = e2.barYPosition, l2 = i2.x, h2 = i2.x1, c2 = i2.barYPosition, d2 = n2 + i2.barHeight, g2 = new k(this.barCtx.ctx), u2 = new m(), f2 = g2.move(o2, d2) + g2.line(r2, d2) + g2.line(l2, c2) + g2.line(h2, c2) + g2.line(o2, d2) + ("around" === s2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[realIndex][j] ? " Z" : " z");
      return g2.drawPath({ d: f2, fill: u2.shadeColor(0.5, m.rgb2hex(a2)), stroke: "none", strokeWidth: 0, fillOpacity: 1, classes: "apexcharts-bar-shadows" });
    } }, { key: "getZeroValueEncounters", value: function(t3) {
      var e2, i2 = t3.i, a2 = t3.j, s2 = this.w, r2 = 0, o2 = 0;
      return (s2.config.plotOptions.bar.horizontal ? s2.globals.series.map(function(t4, e3) {
        return e3;
      }) : (null === (e2 = s2.globals.columnSeries) || void 0 === e2 ? void 0 : e2.i.map(function(t4) {
        return t4;
      })) || []).forEach(function(t4) {
        var e3 = s2.globals.seriesPercent[t4][a2];
        e3 && r2++, t4 < i2 && 0 === e3 && o2++;
      }), { nonZeroColumns: r2, zeroEncounters: o2 };
    } }, { key: "getGroupIndex", value: function(t3) {
      var e2 = this.w, i2 = e2.globals.seriesGroups.findIndex(function(i3) {
        return i3.indexOf(e2.globals.seriesNames[t3]) > -1;
      }), a2 = this.barCtx.columnGroupIndices, s2 = a2.indexOf(i2);
      return s2 < 0 && (a2.push(i2), s2 = a2.length - 1), { groupIndex: i2, columnGroupIndex: s2 };
    } }]), t2;
  }(), St = function() {
    function t2(e2, a2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
      var s2 = this.w;
      this.barOptions = s2.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = s2.config.stroke.width, this.isNullValue = false, this.isRangeBar = s2.globals.seriesRange.length && this.isHorizontal, this.isVerticalGroupedRangeBar = !s2.globals.isBarHorizontal && s2.globals.seriesRange.length && s2.config.plotOptions.bar.rangeBarGroupRows, this.isFunnel = this.barOptions.isFunnel, this.xyRatios = a2, null !== this.xyRatios && (this.xRatio = a2.xRatio, this.yRatio = a2.yRatio, this.invertedXRatio = a2.invertedXRatio, this.invertedYRatio = a2.invertedYRatio, this.baseLineY = a2.baseLineY, this.baseLineInvertedY = a2.baseLineInvertedY), this.yaxisIndex = 0, this.translationsIndex = 0, this.seriesLen = 0, this.pathArr = [];
      var r2 = new V(this.ctx);
      this.lastActiveBarSerieIndex = r2.getActiveConfigSeriesIndex("desc", ["bar", "column"]), this.columnGroupIndices = [];
      var o2 = r2.getBarSeriesIndices(), n2 = new A(this.ctx);
      this.stackedSeriesTotals = n2.getStackedSeriesTotals(this.w.config.series.map(function(t3, e3) {
        return -1 === o2.indexOf(e3) ? e3 : -1;
      }).filter(function(t3) {
        return -1 !== t3;
      })), this.barHelpers = new At(this);
    }
    return s(t2, [{ key: "draw", value: function(t3, e2) {
      var i2 = this.w, a2 = new k(this.ctx), s2 = new A(this.ctx, i2);
      t3 = s2.getLogSeries(t3), this.series = t3, this.yRatio = s2.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t3);
      var r2 = a2.group({ class: "apexcharts-bar-series apexcharts-plot-series" });
      i2.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering - ApexCharts");
      for (var o2 = 0, n2 = 0; o2 < t3.length; o2++, n2++) {
        var l2, h2, c2, d2, u2 = void 0, f2 = void 0, p2 = [], x2 = [], b2 = i2.globals.comboCharts ? e2[o2] : o2, v2 = this.barHelpers.getGroupIndex(b2).columnGroupIndex, y2 = a2.group({ class: "apexcharts-series", rel: o2 + 1, seriesName: m.escapeString(i2.globals.seriesNames[b2]), "data:realIndex": b2 });
        this.ctx.series.addCollapsedClassToSeries(y2, b2), t3[o2].length > 0 && (this.visibleI = this.visibleI + 1);
        var w2 = 0, S2 = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = i2.globals.seriesYAxisReverseMap[b2], this.translationsIndex = b2);
        var C2 = this.translationsIndex;
        this.isReversed = i2.config.yaxis[this.yaxisIndex] && i2.config.yaxis[this.yaxisIndex].reversed;
        var L2 = this.barHelpers.initialPositions();
        f2 = L2.y, w2 = L2.barHeight, h2 = L2.yDivision, d2 = L2.zeroW, u2 = L2.x, S2 = L2.barWidth, l2 = L2.xDivision, c2 = L2.zeroH, this.horizontal || x2.push(u2 + S2 / 2);
        var P2 = a2.group({ class: "apexcharts-datalabels", "data:realIndex": b2 });
        i2.globals.delayedElements.push({ el: P2.node }), P2.node.classList.add("apexcharts-element-hidden");
        var M2 = a2.group({ class: "apexcharts-bar-goals-markers" }), I2 = a2.group({ class: "apexcharts-bar-shadows" });
        i2.globals.delayedElements.push({ el: I2.node }), I2.node.classList.add("apexcharts-element-hidden");
        for (var T2 = 0; T2 < t3[o2].length; T2++) {
          var z2 = this.barHelpers.getStrokeWidth(o2, T2, b2), X2 = null, E2 = { indexes: { i: o2, j: T2, realIndex: b2, translationsIndex: C2, bc: n2 }, x: u2, y: f2, strokeWidth: z2, elSeries: y2 };
          this.isHorizontal ? (X2 = this.drawBarPaths(g(g({}, E2), {}, { barHeight: w2, zeroW: d2, yDivision: h2 })), S2 = this.series[o2][T2] / this.invertedYRatio) : (X2 = this.drawColumnPaths(g(g({}, E2), {}, { xDivision: l2, barWidth: S2, zeroH: c2 })), w2 = this.series[o2][T2] / this.yRatio[C2]);
          var Y2 = this.barHelpers.getPathFillColor(t3, o2, T2, b2);
          if (this.isFunnel && this.barOptions.isFunnel3d && this.pathArr.length && T2 > 0) {
            var R2 = this.barHelpers.drawBarShadow({ color: "string" == typeof Y2 && -1 === (null == Y2 ? void 0 : Y2.indexOf("url")) ? Y2 : m.hexToRgba(i2.globals.colors[o2]), prevPaths: this.pathArr[this.pathArr.length - 1], currPaths: X2 });
            R2 && I2.add(R2);
          }
          this.pathArr.push(X2);
          var F2 = this.barHelpers.drawGoalLine({ barXPosition: X2.barXPosition, barYPosition: X2.barYPosition, goalX: X2.goalX, goalY: X2.goalY, barHeight: w2, barWidth: S2 });
          F2 && M2.add(F2), f2 = X2.y, u2 = X2.x, T2 > 0 && x2.push(u2 + S2 / 2), p2.push(f2), this.renderSeries({ realIndex: b2, pathFill: Y2, j: T2, i: o2, columnGroupIndex: v2, pathFrom: X2.pathFrom, pathTo: X2.pathTo, strokeWidth: z2, elSeries: y2, x: u2, y: f2, series: t3, barHeight: Math.abs(X2.barHeight ? X2.barHeight : w2), barWidth: Math.abs(X2.barWidth ? X2.barWidth : S2), elDataLabelsWrap: P2, elGoalsMarkers: M2, elBarShadows: I2, visibleSeries: this.visibleI, type: "bar" });
        }
        i2.globals.seriesXvalues[b2] = x2, i2.globals.seriesYvalues[b2] = p2, r2.add(y2);
      }
      return r2;
    } }, { key: "renderSeries", value: function(t3) {
      var e2 = t3.realIndex, i2 = t3.pathFill, a2 = t3.lineFill, s2 = t3.j, r2 = t3.i, o2 = t3.columnGroupIndex, n2 = t3.pathFrom, l2 = t3.pathTo, h2 = t3.strokeWidth, c2 = t3.elSeries, d2 = t3.x, g2 = t3.y, u2 = t3.y1, f2 = t3.y2, p2 = t3.series, x2 = t3.barHeight, b2 = t3.barWidth, v2 = t3.barXPosition, m2 = t3.barYPosition, y2 = t3.elDataLabelsWrap, A2 = t3.elGoalsMarkers, S2 = t3.elBarShadows, C2 = t3.visibleSeries, L2 = t3.type, P2 = t3.classes, M2 = this.w, I2 = new k(this.ctx);
      if (!a2) {
        var T2 = "function" == typeof M2.globals.stroke.colors[e2] ? function(t4) {
          var e3, i3 = M2.config.stroke.colors;
          return Array.isArray(i3) && i3.length > 0 && ((e3 = i3[t4]) || (e3 = ""), "function" == typeof e3) ? e3({ value: M2.globals.series[t4][s2], dataPointIndex: s2, w: M2 }) : e3;
        }(e2) : M2.globals.stroke.colors[e2];
        a2 = this.barOptions.distributed ? M2.globals.stroke.colors[s2] : T2;
      }
      M2.config.series[r2].data[s2] && M2.config.series[r2].data[s2].strokeColor && (a2 = M2.config.series[r2].data[s2].strokeColor), this.isNullValue && (i2 = "none");
      var z2 = s2 / M2.config.chart.animations.animateGradually.delay * (M2.config.chart.animations.speed / M2.globals.dataPoints) / 2.4, X2 = I2.renderPaths({ i: r2, j: s2, realIndex: e2, pathFrom: n2, pathTo: l2, stroke: a2, strokeWidth: h2, strokeLineCap: M2.config.stroke.lineCap, fill: i2, animationDelay: z2, initialSpeed: M2.config.chart.animations.speed, dataChangeSpeed: M2.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(L2, "-area ").concat(P2), chartType: L2 });
      X2.attr("clip-path", "url(#gridRectBarMask".concat(M2.globals.cuid, ")"));
      var E2 = M2.config.forecastDataPoints;
      E2.count > 0 && s2 >= M2.globals.dataPoints - E2.count && (X2.node.setAttribute("stroke-dasharray", E2.dashArray), X2.node.setAttribute("stroke-width", E2.strokeWidth), X2.node.setAttribute("fill-opacity", E2.fillOpacity)), void 0 !== u2 && void 0 !== f2 && (X2.attr("data-range-y1", u2), X2.attr("data-range-y2", f2)), new w(this.ctx).setSelectionFilter(X2, e2, s2), c2.add(X2);
      var Y2 = new kt(this).handleBarDataLabels({ x: d2, y: g2, y1: u2, y2: f2, i: r2, j: s2, series: p2, realIndex: e2, columnGroupIndex: o2, barHeight: x2, barWidth: b2, barXPosition: v2, barYPosition: m2, renderedPath: X2, visibleSeries: C2 });
      return null !== Y2.dataLabels && y2.add(Y2.dataLabels), Y2.totalDataLabels && y2.add(Y2.totalDataLabels), c2.add(y2), A2 && c2.add(A2), S2 && c2.add(S2), c2;
    } }, { key: "drawBarPaths", value: function(t3) {
      var e2, i2 = t3.indexes, a2 = t3.barHeight, s2 = t3.strokeWidth, r2 = t3.zeroW, o2 = t3.x, n2 = t3.y, l2 = t3.yDivision, h2 = t3.elSeries, c2 = this.w, d2 = i2.i, g2 = i2.j;
      if (c2.globals.isXNumeric) e2 = (n2 = (c2.globals.seriesX[d2][g2] - c2.globals.minX) / this.invertedXRatio - a2) + a2 * this.visibleI;
      else if (c2.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
        var u2 = 0, f2 = 0;
        c2.globals.seriesPercent.forEach(function(t4, e3) {
          t4[g2] && u2++, e3 < d2 && 0 === t4[g2] && f2++;
        }), u2 > 0 && (a2 = this.seriesLen * a2 / u2), e2 = n2 + a2 * this.visibleI, e2 -= a2 * f2;
      } else e2 = n2 + a2 * this.visibleI;
      this.isFunnel && (r2 -= (this.barHelpers.getXForValue(this.series[d2][g2], r2) - r2) / 2), o2 = this.barHelpers.getXForValue(this.series[d2][g2], r2);
      var p2 = this.barHelpers.getBarpaths({ barYPosition: e2, barHeight: a2, x1: r2, x2: o2, strokeWidth: s2, isReversed: this.isReversed, series: this.series, realIndex: i2.realIndex, i: d2, j: g2, w: c2 });
      return c2.globals.isXNumeric || (n2 += l2), this.barHelpers.barBackground({ j: g2, i: d2, y1: e2 - a2 * this.visibleI, y2: a2 * this.seriesLen, elSeries: h2 }), { pathTo: p2.pathTo, pathFrom: p2.pathFrom, x1: r2, x: o2, y: n2, goalX: this.barHelpers.getGoalValues("x", r2, null, d2, g2), barYPosition: e2, barHeight: a2 };
    } }, { key: "drawColumnPaths", value: function(t3) {
      var e2, i2 = t3.indexes, a2 = t3.x, s2 = t3.y, r2 = t3.xDivision, o2 = t3.barWidth, n2 = t3.zeroH, l2 = t3.strokeWidth, h2 = t3.elSeries, c2 = this.w, d2 = i2.realIndex, g2 = i2.translationsIndex, u2 = i2.i, f2 = i2.j, p2 = i2.bc;
      if (c2.globals.isXNumeric) {
        var x2 = this.getBarXForNumericXAxis({ x: a2, j: f2, realIndex: d2, barWidth: o2 });
        a2 = x2.x, e2 = x2.barXPosition;
      } else if (c2.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
        var b2 = this.barHelpers.getZeroValueEncounters({ i: u2, j: f2 }), v2 = b2.nonZeroColumns, m2 = b2.zeroEncounters;
        v2 > 0 && (o2 = this.seriesLen * o2 / v2), e2 = a2 + o2 * this.visibleI, e2 -= o2 * m2;
      } else e2 = a2 + o2 * this.visibleI;
      s2 = this.barHelpers.getYForValue(this.series[u2][f2], n2, g2);
      var y2 = this.barHelpers.getColumnPaths({ barXPosition: e2, barWidth: o2, y1: n2, y2: s2, strokeWidth: l2, isReversed: this.isReversed, series: this.series, realIndex: d2, i: u2, j: f2, w: c2 });
      return c2.globals.isXNumeric || (a2 += r2), this.barHelpers.barBackground({ bc: p2, j: f2, i: u2, x1: e2 - l2 / 2 - o2 * this.visibleI, x2: o2 * this.seriesLen + l2 / 2, elSeries: h2 }), { pathTo: y2.pathTo, pathFrom: y2.pathFrom, x: a2, y: s2, goalY: this.barHelpers.getGoalValues("y", null, n2, u2, f2, g2), barXPosition: e2, barWidth: o2 };
    } }, { key: "getBarXForNumericXAxis", value: function(t3) {
      var e2 = t3.x, i2 = t3.barWidth, a2 = t3.realIndex, s2 = t3.j, r2 = this.w, o2 = a2;
      return r2.globals.seriesX[a2].length || (o2 = r2.globals.maxValsInArrayIndex), r2.globals.seriesX[o2][s2] && (e2 = (r2.globals.seriesX[o2][s2] - r2.globals.minX) / this.xRatio - i2 * this.seriesLen / 2), { barXPosition: e2 + i2 * this.visibleI, x: e2 };
    } }, { key: "getPreviousPath", value: function(t3, e2) {
      for (var i2, a2 = this.w, s2 = 0; s2 < a2.globals.previousPaths.length; s2++) {
        var r2 = a2.globals.previousPaths[s2];
        r2.paths && r2.paths.length > 0 && parseInt(r2.realIndex, 10) === parseInt(t3, 10) && void 0 !== a2.globals.previousPaths[s2].paths[e2] && (i2 = a2.globals.previousPaths[s2].paths[e2].d);
      }
      return i2;
    } }]), t2;
  }(), Ct = function(t2) {
    h(a2, St);
    var e2 = o(a2);
    function a2() {
      return i(this, a2), e2.apply(this, arguments);
    }
    return s(a2, [{ key: "draw", value: function(t3, e3) {
      var i2 = this, a3 = this.w;
      this.graphics = new k(this.ctx), this.bar = new St(this.ctx, this.xyRatios);
      var s2 = new A(this.ctx, a3);
      t3 = s2.getLogSeries(t3), this.yRatio = s2.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t3), "100%" === a3.config.chart.stackType && (t3 = a3.globals.comboCharts ? e3.map(function(t4) {
        return a3.globals.seriesPercent[t4];
      }) : a3.globals.seriesPercent.slice()), this.series = t3, this.barHelpers.initializeStackedPrevVars(this);
      for (var r2 = this.graphics.group({ class: "apexcharts-bar-series apexcharts-plot-series" }), o2 = 0, n2 = 0, l2 = function(s3, l3) {
        var h3 = void 0, c3 = void 0, d2 = void 0, u2 = void 0, f2 = a3.globals.comboCharts ? e3[s3] : s3, p2 = i2.barHelpers.getGroupIndex(f2), x2 = p2.groupIndex, b2 = p2.columnGroupIndex;
        i2.groupCtx = i2[a3.globals.seriesGroups[x2]];
        var v2 = [], y2 = [], w2 = 0;
        i2.yRatio.length > 1 && (i2.yaxisIndex = a3.globals.seriesYAxisReverseMap[f2][0], w2 = f2), i2.isReversed = a3.config.yaxis[i2.yaxisIndex] && a3.config.yaxis[i2.yaxisIndex].reversed;
        var k2 = i2.graphics.group({ class: "apexcharts-series", seriesName: m.escapeString(a3.globals.seriesNames[f2]), rel: s3 + 1, "data:realIndex": f2 });
        i2.ctx.series.addCollapsedClassToSeries(k2, f2);
        var A2 = i2.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": f2 }), S2 = i2.graphics.group({ class: "apexcharts-bar-goals-markers" }), C2 = 0, L2 = 0, P2 = i2.initialPositions(o2, n2, h3, c3, d2, u2, w2);
        n2 = P2.y, C2 = P2.barHeight, c3 = P2.yDivision, u2 = P2.zeroW, o2 = P2.x, L2 = P2.barWidth, h3 = P2.xDivision, d2 = P2.zeroH, a3.globals.barHeight = C2, a3.globals.barWidth = L2, i2.barHelpers.initializeStackedXYVars(i2), 1 === i2.groupCtx.prevY.length && i2.groupCtx.prevY[0].every(function(t4) {
          return isNaN(t4);
        }) && (i2.groupCtx.prevY[0] = i2.groupCtx.prevY[0].map(function() {
          return d2;
        }), i2.groupCtx.prevYF[0] = i2.groupCtx.prevYF[0].map(function() {
          return 0;
        }));
        for (var M2 = 0; M2 < a3.globals.dataPoints; M2++) {
          var I2 = i2.barHelpers.getStrokeWidth(s3, M2, f2), T2 = { indexes: { i: s3, j: M2, realIndex: f2, translationsIndex: w2, bc: l3 }, strokeWidth: I2, x: o2, y: n2, elSeries: k2, columnGroupIndex: b2, seriesGroup: a3.globals.seriesGroups[x2] }, z2 = null;
          i2.isHorizontal ? (z2 = i2.drawStackedBarPaths(g(g({}, T2), {}, { zeroW: u2, barHeight: C2, yDivision: c3 })), L2 = i2.series[s3][M2] / i2.invertedYRatio) : (z2 = i2.drawStackedColumnPaths(g(g({}, T2), {}, { xDivision: h3, barWidth: L2, zeroH: d2 })), C2 = i2.series[s3][M2] / i2.yRatio[w2]);
          var X2 = i2.barHelpers.drawGoalLine({ barXPosition: z2.barXPosition, barYPosition: z2.barYPosition, goalX: z2.goalX, goalY: z2.goalY, barHeight: C2, barWidth: L2 });
          X2 && S2.add(X2), n2 = z2.y, o2 = z2.x, v2.push(o2), y2.push(n2);
          var E2 = i2.barHelpers.getPathFillColor(t3, s3, M2, f2), Y2 = "";
          a3.globals.isBarHorizontal ? "bottom" === i2.barHelpers.arrBorderRadius[f2][M2] && a3.globals.series[f2][M2] > 0 && (Y2 = "apexcharts-flip-x") : "bottom" === i2.barHelpers.arrBorderRadius[f2][M2] && a3.globals.series[f2][M2] > 0 && (Y2 = "apexcharts-flip-y"), k2 = i2.renderSeries({ realIndex: f2, pathFill: E2, j: M2, i: s3, columnGroupIndex: b2, pathFrom: z2.pathFrom, pathTo: z2.pathTo, strokeWidth: I2, elSeries: k2, x: o2, y: n2, series: t3, barHeight: C2, barWidth: L2, elDataLabelsWrap: A2, elGoalsMarkers: S2, type: "bar", visibleSeries: b2, classes: Y2 });
        }
        a3.globals.seriesXvalues[f2] = v2, a3.globals.seriesYvalues[f2] = y2, i2.groupCtx.prevY.push(i2.groupCtx.yArrj), i2.groupCtx.prevYF.push(i2.groupCtx.yArrjF), i2.groupCtx.prevYVal.push(i2.groupCtx.yArrjVal), i2.groupCtx.prevX.push(i2.groupCtx.xArrj), i2.groupCtx.prevXF.push(i2.groupCtx.xArrjF), i2.groupCtx.prevXVal.push(i2.groupCtx.xArrjVal), r2.add(k2);
      }, h2 = 0, c2 = 0; h2 < t3.length; h2++, c2++) l2(h2, c2);
      return r2;
    } }, { key: "initialPositions", value: function(t3, e3, i2, a3, s2, r2, o2) {
      var n2, l2, h2 = this.w;
      if (this.isHorizontal) {
        a3 = h2.globals.gridHeight / h2.globals.dataPoints;
        var c2 = h2.config.plotOptions.bar.barHeight;
        n2 = -1 === String(c2).indexOf("%") ? parseInt(c2, 10) : a3 * parseInt(c2, 10) / 100, r2 = h2.globals.padHorizontal + (this.isReversed ? h2.globals.gridWidth - this.baseLineInvertedY : this.baseLineInvertedY), e3 = (a3 - n2) / 2;
      } else {
        l2 = i2 = h2.globals.gridWidth / h2.globals.dataPoints;
        var d2 = h2.config.plotOptions.bar.columnWidth;
        h2.globals.isXNumeric && h2.globals.dataPoints > 1 ? l2 = (i2 = h2.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : -1 === String(d2).indexOf("%") ? l2 = parseInt(d2, 10) : l2 *= parseInt(d2, 10) / 100, s2 = this.isReversed ? this.baseLineY[o2] : h2.globals.gridHeight - this.baseLineY[o2], t3 = h2.globals.padHorizontal + (i2 - l2) / 2;
      }
      var g2 = h2.globals.barGroups.length || 1;
      return { x: t3, y: e3, yDivision: a3, xDivision: i2, barHeight: n2 / g2, barWidth: l2 / g2, zeroH: s2, zeroW: r2 };
    } }, { key: "drawStackedBarPaths", value: function(t3) {
      for (var e3, i2 = t3.indexes, a3 = t3.barHeight, s2 = t3.strokeWidth, r2 = t3.zeroW, o2 = t3.x, n2 = t3.y, l2 = t3.columnGroupIndex, h2 = t3.seriesGroup, c2 = t3.yDivision, d2 = t3.elSeries, g2 = this.w, u2 = n2 + l2 * a3, f2 = i2.i, p2 = i2.j, x2 = i2.realIndex, b2 = i2.translationsIndex, v2 = 0, m2 = 0; m2 < this.groupCtx.prevXF.length; m2++) v2 += this.groupCtx.prevXF[m2][p2];
      var y2;
      if ((y2 = h2.indexOf(g2.config.series[x2].name)) > 0) {
        var w2 = r2;
        this.groupCtx.prevXVal[y2 - 1][p2] < 0 ? w2 = this.series[f2][p2] >= 0 ? this.groupCtx.prevX[y2 - 1][p2] + v2 - 2 * (this.isReversed ? v2 : 0) : this.groupCtx.prevX[y2 - 1][p2] : this.groupCtx.prevXVal[y2 - 1][p2] >= 0 && (w2 = this.series[f2][p2] >= 0 ? this.groupCtx.prevX[y2 - 1][p2] : this.groupCtx.prevX[y2 - 1][p2] - v2 + 2 * (this.isReversed ? v2 : 0)), e3 = w2;
      } else e3 = r2;
      o2 = null === this.series[f2][p2] ? e3 : e3 + this.series[f2][p2] / this.invertedYRatio - 2 * (this.isReversed ? this.series[f2][p2] / this.invertedYRatio : 0);
      var k2 = this.barHelpers.getBarpaths({ barYPosition: u2, barHeight: a3, x1: e3, x2: o2, strokeWidth: s2, isReversed: this.isReversed, series: this.series, realIndex: i2.realIndex, seriesGroup: h2, i: f2, j: p2, w: g2 });
      return this.barHelpers.barBackground({ j: p2, i: f2, y1: u2, y2: a3, elSeries: d2 }), n2 += c2, { pathTo: k2.pathTo, pathFrom: k2.pathFrom, goalX: this.barHelpers.getGoalValues("x", r2, null, f2, p2, b2), barXPosition: e3, barYPosition: u2, x: o2, y: n2 };
    } }, { key: "drawStackedColumnPaths", value: function(t3) {
      var e3 = t3.indexes, i2 = t3.x, a3 = t3.y, s2 = t3.xDivision, r2 = t3.barWidth, o2 = t3.zeroH, n2 = t3.columnGroupIndex, l2 = t3.seriesGroup, h2 = t3.elSeries, c2 = this.w, d2 = e3.i, g2 = e3.j, u2 = e3.bc, f2 = e3.realIndex, p2 = e3.translationsIndex;
      if (c2.globals.isXNumeric) {
        var x2 = c2.globals.seriesX[f2][g2];
        x2 || (x2 = 0), i2 = (x2 - c2.globals.minX) / this.xRatio - r2 / 2 * c2.globals.barGroups.length;
      }
      for (var b2, v2 = i2 + n2 * r2, m2 = 0, y2 = 0; y2 < this.groupCtx.prevYF.length; y2++) m2 += isNaN(this.groupCtx.prevYF[y2][g2]) ? 0 : this.groupCtx.prevYF[y2][g2];
      var w2 = d2;
      if (l2 && (w2 = l2.indexOf(c2.globals.seriesNames[f2])), w2 > 0 && !c2.globals.isXNumeric || w2 > 0 && c2.globals.isXNumeric && c2.globals.seriesX[f2 - 1][g2] === c2.globals.seriesX[f2][g2]) {
        var k2, A2, S2, C2 = Math.min(this.yRatio.length + 1, f2 + 1);
        if (void 0 !== this.groupCtx.prevY[w2 - 1] && this.groupCtx.prevY[w2 - 1].length) for (var L2 = 1; L2 < C2; L2++) {
          var P2;
          if (!isNaN(null === (P2 = this.groupCtx.prevY[w2 - L2]) || void 0 === P2 ? void 0 : P2[g2])) {
            S2 = this.groupCtx.prevY[w2 - L2][g2];
            break;
          }
        }
        for (var M2 = 1; M2 < C2; M2++) {
          var I2, T2;
          if ((null === (I2 = this.groupCtx.prevYVal[w2 - M2]) || void 0 === I2 ? void 0 : I2[g2]) < 0) {
            A2 = this.series[d2][g2] >= 0 ? S2 - m2 + 2 * (this.isReversed ? m2 : 0) : S2;
            break;
          }
          if ((null === (T2 = this.groupCtx.prevYVal[w2 - M2]) || void 0 === T2 ? void 0 : T2[g2]) >= 0) {
            A2 = this.series[d2][g2] >= 0 ? S2 : S2 + m2 - 2 * (this.isReversed ? m2 : 0);
            break;
          }
        }
        void 0 === A2 && (A2 = c2.globals.gridHeight), b2 = null !== (k2 = this.groupCtx.prevYF[0]) && void 0 !== k2 && k2.every(function(t4) {
          return 0 === t4;
        }) && this.groupCtx.prevYF.slice(1, w2).every(function(t4) {
          return t4.every(function(t5) {
            return isNaN(t5);
          });
        }) ? o2 : A2;
      } else b2 = o2;
      a3 = this.series[d2][g2] ? b2 - this.series[d2][g2] / this.yRatio[p2] + 2 * (this.isReversed ? this.series[d2][g2] / this.yRatio[p2] : 0) : b2;
      var z2 = this.barHelpers.getColumnPaths({ barXPosition: v2, barWidth: r2, y1: b2, y2: a3, yRatio: this.yRatio[p2], strokeWidth: this.strokeWidth, isReversed: this.isReversed, series: this.series, seriesGroup: l2, realIndex: e3.realIndex, i: d2, j: g2, w: c2 });
      return this.barHelpers.barBackground({ bc: u2, j: g2, i: d2, x1: v2, x2: r2, elSeries: h2 }), { pathTo: z2.pathTo, pathFrom: z2.pathFrom, goalY: this.barHelpers.getGoalValues("y", null, o2, d2, g2), barXPosition: v2, x: c2.globals.isXNumeric ? i2 : i2 + s2, y: a3 };
    } }]), a2;
  }(), Lt = function(t2) {
    h(a2, St);
    var e2 = o(a2);
    function a2() {
      return i(this, a2), e2.apply(this, arguments);
    }
    return s(a2, [{ key: "draw", value: function(t3, e3, i2) {
      var a3 = this, s2 = this.w, r2 = new k(this.ctx), o2 = s2.globals.comboCharts ? e3 : s2.config.chart.type, n2 = new N(this.ctx);
      this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot, this.isHorizontal = s2.config.plotOptions.bar.horizontal;
      var l2 = new A(this.ctx, s2);
      t3 = l2.getLogSeries(t3), this.series = t3, this.yRatio = l2.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t3);
      for (var h2 = r2.group({ class: "apexcharts-".concat(o2, "-series apexcharts-plot-series") }), c2 = function(e4) {
        a3.isBoxPlot = "boxPlot" === s2.config.chart.type || "boxPlot" === s2.config.series[e4].type;
        var o3, l3, c3, d3, u2 = void 0, f2 = void 0, p2 = [], x2 = [], b2 = s2.globals.comboCharts ? i2[e4] : e4, v2 = a3.barHelpers.getGroupIndex(b2).columnGroupIndex, y2 = r2.group({ class: "apexcharts-series", seriesName: m.escapeString(s2.globals.seriesNames[b2]), rel: e4 + 1, "data:realIndex": b2 });
        a3.ctx.series.addCollapsedClassToSeries(y2, b2), t3[e4].length > 0 && (a3.visibleI = a3.visibleI + 1);
        var w2, k2, A2 = 0;
        a3.yRatio.length > 1 && (a3.yaxisIndex = s2.globals.seriesYAxisReverseMap[b2][0], A2 = b2);
        var S2 = a3.barHelpers.initialPositions();
        f2 = S2.y, w2 = S2.barHeight, l3 = S2.yDivision, d3 = S2.zeroW, u2 = S2.x, k2 = S2.barWidth, o3 = S2.xDivision, c3 = S2.zeroH, x2.push(u2 + k2 / 2);
        for (var C2 = r2.group({ class: "apexcharts-datalabels", "data:realIndex": b2 }), L2 = function(i3) {
          var r3 = a3.barHelpers.getStrokeWidth(e4, i3, b2), h3 = null, m2 = { indexes: { i: e4, j: i3, realIndex: b2, translationsIndex: A2 }, x: u2, y: f2, strokeWidth: r3, elSeries: y2 };
          h3 = a3.isHorizontal ? a3.drawHorizontalBoxPaths(g(g({}, m2), {}, { yDivision: l3, barHeight: w2, zeroW: d3 })) : a3.drawVerticalBoxPaths(g(g({}, m2), {}, { xDivision: o3, barWidth: k2, zeroH: c3 })), f2 = h3.y, u2 = h3.x, i3 > 0 && x2.push(u2 + k2 / 2), p2.push(f2), h3.pathTo.forEach(function(o4, l4) {
            var c4 = !a3.isBoxPlot && a3.candlestickOptions.wick.useFillColor ? h3.color[l4] : s2.globals.stroke.colors[e4], d4 = n2.fillPath({ seriesNumber: b2, dataPointIndex: i3, color: h3.color[l4], value: t3[e4][i3] });
            a3.renderSeries({ realIndex: b2, pathFill: d4, lineFill: c4, j: i3, i: e4, pathFrom: h3.pathFrom, pathTo: o4, strokeWidth: r3, elSeries: y2, x: u2, y: f2, series: t3, columnGroupIndex: v2, barHeight: w2, barWidth: k2, elDataLabelsWrap: C2, visibleSeries: a3.visibleI, type: s2.config.chart.type });
          });
        }, P2 = 0; P2 < s2.globals.dataPoints; P2++) L2(P2);
        s2.globals.seriesXvalues[b2] = x2, s2.globals.seriesYvalues[b2] = p2, h2.add(y2);
      }, d2 = 0; d2 < t3.length; d2++) c2(d2);
      return h2;
    } }, { key: "drawVerticalBoxPaths", value: function(t3) {
      var e3 = t3.indexes, i2 = t3.x;
      t3.y;
      var a3 = t3.xDivision, s2 = t3.barWidth, r2 = t3.zeroH, o2 = t3.strokeWidth, n2 = this.w, l2 = new k(this.ctx), h2 = e3.i, c2 = e3.j, d2 = true, g2 = n2.config.plotOptions.candlestick.colors.upward, u2 = n2.config.plotOptions.candlestick.colors.downward, f2 = "";
      this.isBoxPlot && (f2 = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
      var p2 = this.yRatio[e3.translationsIndex], x2 = e3.realIndex, b2 = this.getOHLCValue(x2, c2), v2 = r2, m2 = r2;
      b2.o > b2.c && (d2 = false);
      var y2 = Math.min(b2.o, b2.c), w2 = Math.max(b2.o, b2.c), A2 = b2.m;
      n2.globals.isXNumeric && (i2 = (n2.globals.seriesX[x2][c2] - n2.globals.minX) / this.xRatio - s2 / 2);
      var S2 = i2 + s2 * this.visibleI;
      void 0 === this.series[h2][c2] || null === this.series[h2][c2] ? (y2 = r2, w2 = r2) : (y2 = r2 - y2 / p2, w2 = r2 - w2 / p2, v2 = r2 - b2.h / p2, m2 = r2 - b2.l / p2, A2 = r2 - b2.m / p2);
      var C2 = l2.move(S2, r2), L2 = l2.move(S2 + s2 / 2, y2);
      return n2.globals.previousPaths.length > 0 && (L2 = this.getPreviousPath(x2, c2, true)), C2 = this.isBoxPlot ? [l2.move(S2, y2) + l2.line(S2 + s2 / 2, y2) + l2.line(S2 + s2 / 2, v2) + l2.line(S2 + s2 / 4, v2) + l2.line(S2 + s2 - s2 / 4, v2) + l2.line(S2 + s2 / 2, v2) + l2.line(S2 + s2 / 2, y2) + l2.line(S2 + s2, y2) + l2.line(S2 + s2, A2) + l2.line(S2, A2) + l2.line(S2, y2 + o2 / 2), l2.move(S2, A2) + l2.line(S2 + s2, A2) + l2.line(S2 + s2, w2) + l2.line(S2 + s2 / 2, w2) + l2.line(S2 + s2 / 2, m2) + l2.line(S2 + s2 - s2 / 4, m2) + l2.line(S2 + s2 / 4, m2) + l2.line(S2 + s2 / 2, m2) + l2.line(S2 + s2 / 2, w2) + l2.line(S2, w2) + l2.line(S2, A2) + "z"] : [l2.move(S2, w2) + l2.line(S2 + s2 / 2, w2) + l2.line(S2 + s2 / 2, v2) + l2.line(S2 + s2 / 2, w2) + l2.line(S2 + s2, w2) + l2.line(S2 + s2, y2) + l2.line(S2 + s2 / 2, y2) + l2.line(S2 + s2 / 2, m2) + l2.line(S2 + s2 / 2, y2) + l2.line(S2, y2) + l2.line(S2, w2 - o2 / 2)], L2 += l2.move(S2, y2), n2.globals.isXNumeric || (i2 += a3), { pathTo: C2, pathFrom: L2, x: i2, y: w2, barXPosition: S2, color: this.isBoxPlot ? f2 : d2 ? [g2] : [u2] };
    } }, { key: "drawHorizontalBoxPaths", value: function(t3) {
      var e3 = t3.indexes;
      t3.x;
      var i2 = t3.y, a3 = t3.yDivision, s2 = t3.barHeight, r2 = t3.zeroW, o2 = t3.strokeWidth, n2 = this.w, l2 = new k(this.ctx), h2 = e3.i, c2 = e3.j, d2 = this.boxOptions.colors.lower;
      this.isBoxPlot && (d2 = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
      var g2 = this.invertedYRatio, u2 = e3.realIndex, f2 = this.getOHLCValue(u2, c2), p2 = r2, x2 = r2, b2 = Math.min(f2.o, f2.c), v2 = Math.max(f2.o, f2.c), m2 = f2.m;
      n2.globals.isXNumeric && (i2 = (n2.globals.seriesX[u2][c2] - n2.globals.minX) / this.invertedXRatio - s2 / 2);
      var y2 = i2 + s2 * this.visibleI;
      void 0 === this.series[h2][c2] || null === this.series[h2][c2] ? (b2 = r2, v2 = r2) : (b2 = r2 + b2 / g2, v2 = r2 + v2 / g2, p2 = r2 + f2.h / g2, x2 = r2 + f2.l / g2, m2 = r2 + f2.m / g2);
      var w2 = l2.move(r2, y2), A2 = l2.move(b2, y2 + s2 / 2);
      return n2.globals.previousPaths.length > 0 && (A2 = this.getPreviousPath(u2, c2, true)), w2 = [l2.move(b2, y2) + l2.line(b2, y2 + s2 / 2) + l2.line(p2, y2 + s2 / 2) + l2.line(p2, y2 + s2 / 2 - s2 / 4) + l2.line(p2, y2 + s2 / 2 + s2 / 4) + l2.line(p2, y2 + s2 / 2) + l2.line(b2, y2 + s2 / 2) + l2.line(b2, y2 + s2) + l2.line(m2, y2 + s2) + l2.line(m2, y2) + l2.line(b2 + o2 / 2, y2), l2.move(m2, y2) + l2.line(m2, y2 + s2) + l2.line(v2, y2 + s2) + l2.line(v2, y2 + s2 / 2) + l2.line(x2, y2 + s2 / 2) + l2.line(x2, y2 + s2 - s2 / 4) + l2.line(x2, y2 + s2 / 4) + l2.line(x2, y2 + s2 / 2) + l2.line(v2, y2 + s2 / 2) + l2.line(v2, y2) + l2.line(m2, y2) + "z"], A2 += l2.move(b2, y2), n2.globals.isXNumeric || (i2 += a3), { pathTo: w2, pathFrom: A2, x: v2, y: i2, barYPosition: y2, color: d2 };
    } }, { key: "getOHLCValue", value: function(t3, e3) {
      var i2 = this.w;
      return { o: this.isBoxPlot ? i2.globals.seriesCandleH[t3][e3] : i2.globals.seriesCandleO[t3][e3], h: this.isBoxPlot ? i2.globals.seriesCandleO[t3][e3] : i2.globals.seriesCandleH[t3][e3], m: i2.globals.seriesCandleM[t3][e3], l: this.isBoxPlot ? i2.globals.seriesCandleC[t3][e3] : i2.globals.seriesCandleL[t3][e3], c: this.isBoxPlot ? i2.globals.seriesCandleL[t3][e3] : i2.globals.seriesCandleC[t3][e3] };
    } }]), a2;
  }(), Pt = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "checkColorRange", value: function() {
      var t3 = this.w, e2 = false, i2 = t3.config.plotOptions[t3.config.chart.type];
      return i2.colorScale.ranges.length > 0 && i2.colorScale.ranges.map(function(t4, i3) {
        t4.from <= 0 && (e2 = true);
      }), e2;
    } }, { key: "getShadeColor", value: function(t3, e2, i2, a2) {
      var s2 = this.w, r2 = 1, o2 = s2.config.plotOptions[t3].shadeIntensity, n2 = this.determineColor(t3, e2, i2);
      s2.globals.hasNegs || a2 ? r2 = s2.config.plotOptions[t3].reverseNegativeShade ? n2.percent < 0 ? n2.percent / 100 * (1.25 * o2) : (1 - n2.percent / 100) * (1.25 * o2) : n2.percent <= 0 ? 1 - (1 + n2.percent / 100) * o2 : (1 - n2.percent / 100) * o2 : (r2 = 1 - n2.percent / 100, "treemap" === t3 && (r2 = (1 - n2.percent / 100) * (1.25 * o2)));
      var l2 = n2.color, h2 = new m();
      if (s2.config.plotOptions[t3].enableShades) if ("dark" === this.w.config.theme.mode) {
        var c2 = h2.shadeColor(-1 * r2, n2.color);
        l2 = m.hexToRgba(m.isColorHex(c2) ? c2 : m.rgb2hex(c2), s2.config.fill.opacity);
      } else {
        var d2 = h2.shadeColor(r2, n2.color);
        l2 = m.hexToRgba(m.isColorHex(d2) ? d2 : m.rgb2hex(d2), s2.config.fill.opacity);
      }
      return { color: l2, colorProps: n2 };
    } }, { key: "determineColor", value: function(t3, e2, i2) {
      var a2 = this.w, s2 = a2.globals.series[e2][i2], r2 = a2.config.plotOptions[t3], o2 = r2.colorScale.inverse ? i2 : e2;
      r2.distributed && "treemap" === a2.config.chart.type && (o2 = i2);
      var n2 = a2.globals.colors[o2], l2 = null, h2 = Math.min.apply(Math, p(a2.globals.series[e2])), c2 = Math.max.apply(Math, p(a2.globals.series[e2]));
      r2.distributed || "heatmap" !== t3 || (h2 = a2.globals.minY, c2 = a2.globals.maxY), void 0 !== r2.colorScale.min && (h2 = r2.colorScale.min < a2.globals.minY ? r2.colorScale.min : a2.globals.minY, c2 = r2.colorScale.max > a2.globals.maxY ? r2.colorScale.max : a2.globals.maxY);
      var d2 = Math.abs(c2) + Math.abs(h2), g2 = 100 * s2 / (0 === d2 ? d2 - 1e-6 : d2);
      r2.colorScale.ranges.length > 0 && r2.colorScale.ranges.map(function(t4, e3) {
        if (s2 >= t4.from && s2 <= t4.to) {
          n2 = t4.color, l2 = t4.foreColor ? t4.foreColor : null, h2 = t4.from, c2 = t4.to;
          var i3 = Math.abs(c2) + Math.abs(h2);
          g2 = 100 * s2 / (0 === i3 ? i3 - 1e-6 : i3);
        }
      });
      return { color: n2, foreColor: l2, percent: g2 };
    } }, { key: "calculateDataLabels", value: function(t3) {
      var e2 = t3.text, i2 = t3.x, a2 = t3.y, s2 = t3.i, r2 = t3.j, o2 = t3.colorProps, n2 = t3.fontSize, l2 = this.w.config.dataLabels, h2 = new k(this.ctx), c2 = new G(this.ctx), d2 = null;
      if (l2.enabled) {
        d2 = h2.group({ class: "apexcharts-data-labels" });
        var g2 = l2.offsetX, u2 = l2.offsetY, f2 = i2 + g2, p2 = a2 + parseFloat(l2.style.fontSize) / 3 + u2;
        c2.plotDataLabelsText({ x: f2, y: p2, text: e2, i: s2, j: r2, color: o2.foreColor, parent: d2, fontSize: n2, dataLabelsConfig: l2 });
      }
      return d2;
    } }, { key: "addListeners", value: function(t3) {
      var e2 = new k(this.ctx);
      t3.node.addEventListener("mouseenter", e2.pathMouseEnter.bind(this, t3)), t3.node.addEventListener("mouseleave", e2.pathMouseLeave.bind(this, t3)), t3.node.addEventListener("mousedown", e2.pathMouseDown.bind(this, t3));
    } }]), t2;
  }(), Mt = function() {
    function t2(e2, a2) {
      i(this, t2), this.ctx = e2, this.w = e2.w, this.xRatio = a2.xRatio, this.yRatio = a2.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new Pt(e2), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0;
    }
    return s(t2, [{ key: "draw", value: function(t3) {
      var e2 = this.w, i2 = new k(this.ctx), a2 = i2.group({ class: "apexcharts-heatmap" });
      a2.attr("clip-path", "url(#gridRectMask".concat(e2.globals.cuid, ")"));
      var s2 = e2.globals.gridWidth / e2.globals.dataPoints, r2 = e2.globals.gridHeight / e2.globals.series.length, o2 = 0, n2 = false;
      this.negRange = this.helpers.checkColorRange();
      var l2 = t3.slice();
      e2.config.yaxis[0].reversed && (n2 = true, l2.reverse());
      for (var h2 = n2 ? 0 : l2.length - 1; n2 ? h2 < l2.length : h2 >= 0; n2 ? h2++ : h2--) {
        var c2 = i2.group({ class: "apexcharts-series apexcharts-heatmap-series", seriesName: m.escapeString(e2.globals.seriesNames[h2]), rel: h2 + 1, "data:realIndex": h2 });
        if (this.ctx.series.addCollapsedClassToSeries(c2, h2), e2.config.chart.dropShadow.enabled) {
          var d2 = e2.config.chart.dropShadow;
          new w(this.ctx).dropShadow(c2, d2, h2);
        }
        for (var g2 = 0, u2 = e2.config.plotOptions.heatmap.shadeIntensity, f2 = 0; f2 < l2[h2].length; f2++) {
          var p2 = this.helpers.getShadeColor(e2.config.chart.type, h2, f2, this.negRange), x2 = p2.color, b2 = p2.colorProps;
          if ("image" === e2.config.fill.type) x2 = new N(this.ctx).fillPath({ seriesNumber: h2, dataPointIndex: f2, opacity: e2.globals.hasNegs ? b2.percent < 0 ? 1 - (1 + b2.percent / 100) : u2 + b2.percent / 100 : b2.percent / 100, patternID: m.randomId(), width: e2.config.fill.image.width ? e2.config.fill.image.width : s2, height: e2.config.fill.image.height ? e2.config.fill.image.height : r2 });
          var v2 = this.rectRadius, y2 = i2.drawRect(g2, o2, s2, r2, v2);
          if (y2.attr({ cx: g2, cy: o2 }), y2.node.classList.add("apexcharts-heatmap-rect"), c2.add(y2), y2.attr({ fill: x2, i: h2, index: h2, j: f2, val: t3[h2][f2], "stroke-width": this.strokeWidth, stroke: e2.config.plotOptions.heatmap.useFillColorAsStroke ? x2 : e2.globals.stroke.colors[0], color: x2 }), this.helpers.addListeners(y2), e2.config.chart.animations.enabled && !e2.globals.dataChanged) {
            var A2 = 1;
            e2.globals.resized || (A2 = e2.config.chart.animations.speed), this.animateHeatMap(y2, g2, o2, s2, r2, A2);
          }
          if (e2.globals.dataChanged) {
            var S2 = 1;
            if (this.dynamicAnim.enabled && e2.globals.shouldAnimate) {
              S2 = this.dynamicAnim.speed;
              var C2 = e2.globals.previousPaths[h2] && e2.globals.previousPaths[h2][f2] && e2.globals.previousPaths[h2][f2].color;
              C2 || (C2 = "rgba(255, 255, 255, 0)"), this.animateHeatColor(y2, m.isColorHex(C2) ? C2 : m.rgb2hex(C2), m.isColorHex(x2) ? x2 : m.rgb2hex(x2), S2);
            }
          }
          var L2 = (0, e2.config.dataLabels.formatter)(e2.globals.series[h2][f2], { value: e2.globals.series[h2][f2], seriesIndex: h2, dataPointIndex: f2, w: e2 }), P2 = this.helpers.calculateDataLabels({ text: L2, x: g2 + s2 / 2, y: o2 + r2 / 2, i: h2, j: f2, colorProps: b2, series: l2 });
          null !== P2 && c2.add(P2), g2 += s2;
        }
        o2 += r2, a2.add(c2);
      }
      var M2 = e2.globals.yAxisScale[0].result.slice();
      return e2.config.yaxis[0].reversed ? M2.unshift("") : M2.push(""), e2.globals.yAxisScale[0].result = M2, a2;
    } }, { key: "animateHeatMap", value: function(t3, e2, i2, a2, s2, r2) {
      var o2 = new y(this.ctx);
      o2.animateRect(t3, { x: e2 + a2 / 2, y: i2 + s2 / 2, width: 0, height: 0 }, { x: e2, y: i2, width: a2, height: s2 }, r2, function() {
        o2.animationCompleted(t3);
      });
    } }, { key: "animateHeatColor", value: function(t3, e2, i2, a2) {
      t3.attr({ fill: e2 }).animate(a2).attr({ fill: i2 });
    } }]), t2;
  }(), It = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "drawYAxisTexts", value: function(t3, e2, i2, a2) {
      var s2 = this.w, r2 = s2.config.yaxis[0], o2 = s2.globals.yLabelFormatters[0];
      return new k(this.ctx).drawText({ x: t3 + r2.labels.offsetX, y: e2 + r2.labels.offsetY, text: o2(a2, i2), textAnchor: "middle", fontSize: r2.labels.style.fontSize, fontFamily: r2.labels.style.fontFamily, foreColor: Array.isArray(r2.labels.style.colors) ? r2.labels.style.colors[i2] : r2.labels.style.colors });
    } }]), t2;
  }(), Tt = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
      var a2 = this.w;
      this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = void 0 !== a2.globals.stroke.colors ? a2.globals.stroke.colors : a2.globals.colors, this.defaultSize = Math.min(a2.globals.gridWidth, a2.globals.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = a2.globals.gridWidth / 2, "radialBar" === a2.config.chart.type ? this.fullAngle = 360 : this.fullAngle = Math.abs(a2.config.plotOptions.pie.endAngle - a2.config.plotOptions.pie.startAngle), this.initialAngle = a2.config.plotOptions.pie.startAngle % this.fullAngle, a2.globals.radialSize = this.defaultSize / 2.05 - a2.config.stroke.width - (a2.config.chart.sparkline.enabled ? 0 : a2.config.chart.dropShadow.blur), this.donutSize = a2.globals.radialSize * parseInt(a2.config.plotOptions.pie.donut.size, 10) / 100;
      var s2 = a2.config.plotOptions.pie.customScale, r2 = a2.globals.gridWidth / 2, o2 = a2.globals.gridHeight / 2;
      this.translateX = r2 - r2 * s2, this.translateY = o2 - o2 * s2, this.dataLabelsGroup = new k(this.ctx).group({ class: "apexcharts-datalabels-group", transform: "translate(".concat(this.translateX, ", ").concat(this.translateY, ") scale(").concat(s2, ")") }), this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = [];
    }
    return s(t2, [{ key: "draw", value: function(t3) {
      var e2 = this, i2 = this.w, a2 = new k(this.ctx), s2 = a2.group({ class: "apexcharts-pie" });
      if (i2.globals.noData) return s2;
      for (var r2 = 0, o2 = 0; o2 < t3.length; o2++) r2 += m.negToZero(t3[o2]);
      var n2 = [], l2 = a2.group();
      0 === r2 && (r2 = 1e-5), t3.forEach(function(t4) {
        e2.maxY = Math.max(e2.maxY, t4);
      }), i2.config.yaxis[0].max && (this.maxY = i2.config.yaxis[0].max), "back" === i2.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(s2);
      for (var h2 = 0; h2 < t3.length; h2++) {
        var c2 = this.fullAngle * m.negToZero(t3[h2]) / r2;
        n2.push(c2), "polarArea" === this.chartType ? (n2[h2] = this.fullAngle / t3.length, this.sliceSizes.push(i2.globals.radialSize * t3[h2] / this.maxY)) : this.sliceSizes.push(i2.globals.radialSize);
      }
      if (i2.globals.dataChanged) {
        for (var d2, g2 = 0, u2 = 0; u2 < i2.globals.previousPaths.length; u2++) g2 += m.negToZero(i2.globals.previousPaths[u2]);
        for (var f2 = 0; f2 < i2.globals.previousPaths.length; f2++) d2 = this.fullAngle * m.negToZero(i2.globals.previousPaths[f2]) / g2, this.prevSectorAngleArr.push(d2);
      }
      if (this.donutSize < 0 && (this.donutSize = 0), "donut" === this.chartType) {
        var p2 = a2.drawCircle(this.donutSize);
        p2.attr({ cx: this.centerX, cy: this.centerY, fill: i2.config.plotOptions.pie.donut.background ? i2.config.plotOptions.pie.donut.background : "transparent" }), l2.add(p2);
      }
      var x2 = this.drawArcs(n2, t3);
      if (this.sliceLabels.forEach(function(t4) {
        x2.add(t4);
      }), l2.attr({ transform: "translate(".concat(this.translateX, ", ").concat(this.translateY, ") scale(").concat(i2.config.plotOptions.pie.customScale, ")") }), l2.add(x2), s2.add(l2), this.donutDataLabels.show) {
        var b2 = this.renderInnerDataLabels(this.dataLabelsGroup, this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show });
        s2.add(b2);
      }
      return "front" === i2.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(s2), s2;
    } }, { key: "drawArcs", value: function(t3, e2) {
      var i2 = this.w, a2 = new w(this.ctx), s2 = new k(this.ctx), r2 = new N(this.ctx), o2 = s2.group({ class: "apexcharts-slices" }), n2 = this.initialAngle, l2 = this.initialAngle, h2 = this.initialAngle, c2 = this.initialAngle;
      this.strokeWidth = i2.config.stroke.show ? i2.config.stroke.width : 0;
      for (var d2 = 0; d2 < t3.length; d2++) {
        var g2 = s2.group({ class: "apexcharts-series apexcharts-pie-series", seriesName: m.escapeString(i2.globals.seriesNames[d2]), rel: d2 + 1, "data:realIndex": d2 });
        o2.add(g2), l2 = c2, h2 = (n2 = h2) + t3[d2], c2 = l2 + this.prevSectorAngleArr[d2];
        var u2 = h2 < n2 ? this.fullAngle + h2 - n2 : h2 - n2, f2 = r2.fillPath({ seriesNumber: d2, size: this.sliceSizes[d2], value: e2[d2] }), p2 = this.getChangedPath(l2, c2), x2 = s2.drawPath({ d: p2, stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[d2] : this.lineColorArr, strokeWidth: 0, fill: f2, fillOpacity: i2.config.fill.opacity, classes: "apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(d2) });
        if (x2.attr({ index: 0, j: d2 }), a2.setSelectionFilter(x2, 0, d2), i2.config.chart.dropShadow.enabled) {
          var b2 = i2.config.chart.dropShadow;
          a2.dropShadow(x2, b2, d2);
        }
        this.addListeners(x2, this.donutDataLabels), k.setAttrs(x2.node, { "data:angle": u2, "data:startAngle": n2, "data:strokeWidth": this.strokeWidth, "data:value": e2[d2] });
        var v2 = { x: 0, y: 0 };
        "pie" === this.chartType || "polarArea" === this.chartType ? v2 = m.polarToCartesian(this.centerX, this.centerY, i2.globals.radialSize / 1.25 + i2.config.plotOptions.pie.dataLabels.offset, (n2 + u2 / 2) % this.fullAngle) : "donut" === this.chartType && (v2 = m.polarToCartesian(this.centerX, this.centerY, (i2.globals.radialSize + this.donutSize) / 2 + i2.config.plotOptions.pie.dataLabels.offset, (n2 + u2 / 2) % this.fullAngle)), g2.add(x2);
        var y2 = 0;
        if (!this.initialAnim || i2.globals.resized || i2.globals.dataChanged ? this.animBeginArr.push(0) : (0 === (y2 = u2 / this.fullAngle * i2.config.chart.animations.speed) && (y2 = 1), this.animDur = y2 + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && i2.globals.dataChanged ? this.animatePaths(x2, { size: this.sliceSizes[d2], endAngle: h2, startAngle: n2, prevStartAngle: l2, prevEndAngle: c2, animateStartingPos: true, i: d2, animBeginArr: this.animBeginArr, shouldSetPrevPaths: true, dur: i2.config.chart.animations.dynamicAnimation.speed }) : this.animatePaths(x2, { size: this.sliceSizes[d2], endAngle: h2, startAngle: n2, i: d2, totalItems: t3.length - 1, animBeginArr: this.animBeginArr, dur: y2 }), i2.config.plotOptions.pie.expandOnClick && "polarArea" !== this.chartType && x2.node.addEventListener("mouseup", this.pieClicked.bind(this, d2)), void 0 !== i2.globals.selectedDataPoints[0] && i2.globals.selectedDataPoints[0].indexOf(d2) > -1 && this.pieClicked(d2), i2.config.dataLabels.enabled) {
          var A2 = v2.x, S2 = v2.y, C2 = 100 * u2 / this.fullAngle + "%";
          if (0 !== u2 && i2.config.plotOptions.pie.dataLabels.minAngleToShowLabel < t3[d2]) {
            var L2 = i2.config.dataLabels.formatter;
            void 0 !== L2 && (C2 = L2(i2.globals.seriesPercent[d2][0], { seriesIndex: d2, w: i2 }));
            var P2 = i2.globals.dataLabels.style.colors[d2], M2 = s2.group({ class: "apexcharts-datalabels" }), I2 = s2.drawText({ x: A2, y: S2, text: C2, textAnchor: "middle", fontSize: i2.config.dataLabels.style.fontSize, fontFamily: i2.config.dataLabels.style.fontFamily, fontWeight: i2.config.dataLabels.style.fontWeight, foreColor: P2 });
            if (M2.add(I2), i2.config.dataLabels.dropShadow.enabled) {
              var T2 = i2.config.dataLabels.dropShadow;
              a2.dropShadow(I2, T2);
            }
            I2.node.classList.add("apexcharts-pie-label"), i2.config.chart.animations.animate && false === i2.globals.resized && (I2.node.classList.add("apexcharts-pie-label-delay"), I2.node.style.animationDelay = i2.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(M2);
          }
        }
      }
      return o2;
    } }, { key: "addListeners", value: function(t3, e2) {
      var i2 = new k(this.ctx);
      t3.node.addEventListener("mouseenter", i2.pathMouseEnter.bind(this, t3)), t3.node.addEventListener("mouseleave", i2.pathMouseLeave.bind(this, t3)), t3.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, t3.node, e2)), t3.node.addEventListener("mousedown", i2.pathMouseDown.bind(this, t3)), this.donutDataLabels.total.showAlways || (t3.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t3.node, e2)), t3.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t3.node, e2)));
    } }, { key: "animatePaths", value: function(t3, e2) {
      var i2 = this.w, a2 = e2.endAngle < e2.startAngle ? this.fullAngle + e2.endAngle - e2.startAngle : e2.endAngle - e2.startAngle, s2 = a2, r2 = e2.startAngle, o2 = e2.startAngle;
      void 0 !== e2.prevStartAngle && void 0 !== e2.prevEndAngle && (r2 = e2.prevEndAngle, s2 = e2.prevEndAngle < e2.prevStartAngle ? this.fullAngle + e2.prevEndAngle - e2.prevStartAngle : e2.prevEndAngle - e2.prevStartAngle), e2.i === i2.config.series.length - 1 && (a2 + o2 > this.fullAngle ? e2.endAngle = e2.endAngle - (a2 + o2) : a2 + o2 < this.fullAngle && (e2.endAngle = e2.endAngle + (this.fullAngle - (a2 + o2)))), a2 === this.fullAngle && (a2 = this.fullAngle - 0.01), this.animateArc(t3, r2, o2, a2, s2, e2);
    } }, { key: "animateArc", value: function(t3, e2, i2, a2, s2, r2) {
      var o2, n2 = this, l2 = this.w, h2 = new y(this.ctx), c2 = r2.size;
      (isNaN(e2) || isNaN(s2)) && (e2 = i2, s2 = a2, r2.dur = 0);
      var d2 = a2, g2 = i2, u2 = e2 < i2 ? this.fullAngle + e2 - i2 : e2 - i2;
      l2.globals.dataChanged && r2.shouldSetPrevPaths && r2.prevEndAngle && (o2 = n2.getPiePath({ me: n2, startAngle: r2.prevStartAngle, angle: r2.prevEndAngle < r2.prevStartAngle ? this.fullAngle + r2.prevEndAngle - r2.prevStartAngle : r2.prevEndAngle - r2.prevStartAngle, size: c2 }), t3.attr({ d: o2 })), 0 !== r2.dur ? t3.animate(r2.dur, l2.globals.easing, r2.animBeginArr[r2.i]).afterAll(function() {
        "pie" !== n2.chartType && "donut" !== n2.chartType && "polarArea" !== n2.chartType || this.animate(l2.config.chart.animations.dynamicAnimation.speed).attr({ "stroke-width": n2.strokeWidth }), r2.i === l2.config.series.length - 1 && h2.animationCompleted(t3);
      }).during(function(l3) {
        d2 = u2 + (a2 - u2) * l3, r2.animateStartingPos && (d2 = s2 + (a2 - s2) * l3, g2 = e2 - s2 + (i2 - (e2 - s2)) * l3), o2 = n2.getPiePath({ me: n2, startAngle: g2, angle: d2, size: c2 }), t3.node.setAttribute("data:pathOrig", o2), t3.attr({ d: o2 });
      }) : (o2 = n2.getPiePath({ me: n2, startAngle: g2, angle: a2, size: c2 }), r2.isTrack || (l2.globals.animationEnded = true), t3.node.setAttribute("data:pathOrig", o2), t3.attr({ d: o2, "stroke-width": n2.strokeWidth }));
    } }, { key: "pieClicked", value: function(t3) {
      var e2, i2 = this.w, a2 = this, s2 = a2.sliceSizes[t3] + (i2.config.plotOptions.pie.expandOnClick ? 4 : 0), r2 = i2.globals.dom.Paper.select(".apexcharts-".concat(a2.chartType.toLowerCase(), "-slice-").concat(t3)).members[0];
      if ("true" !== r2.attr("data:pieClicked")) {
        var o2 = i2.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
        Array.prototype.forEach.call(o2, function(t4) {
          t4.setAttribute("data:pieClicked", "false");
          var e3 = t4.getAttribute("data:pathOrig");
          e3 && t4.setAttribute("d", e3);
        }), i2.globals.capturedDataPointIndex = t3, r2.attr("data:pieClicked", "true");
        var n2 = parseInt(r2.attr("data:startAngle"), 10), l2 = parseInt(r2.attr("data:angle"), 10);
        e2 = a2.getPiePath({ me: a2, startAngle: n2, angle: l2, size: s2 }), 360 !== l2 && r2.plot(e2);
      } else {
        r2.attr({ "data:pieClicked": "false" }), this.revertDataLabelsInner(r2.node, this.donutDataLabels);
        var h2 = r2.attr("data:pathOrig");
        r2.attr({ d: h2 });
      }
    } }, { key: "getChangedPath", value: function(t3, e2) {
      var i2 = "";
      return this.dynamicAnim && this.w.globals.dataChanged && (i2 = this.getPiePath({ me: this, startAngle: t3, angle: e2 - t3, size: this.size })), i2;
    } }, { key: "getPiePath", value: function(t3) {
      var e2, i2 = t3.me, a2 = t3.startAngle, s2 = t3.angle, r2 = t3.size, o2 = new k(this.ctx), n2 = a2, l2 = Math.PI * (n2 - 90) / 180, h2 = s2 + a2;
      Math.ceil(h2) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (h2 = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - 0.01), Math.ceil(h2) > this.fullAngle && (h2 -= this.fullAngle);
      var c2 = Math.PI * (h2 - 90) / 180, d2 = i2.centerX + r2 * Math.cos(l2), g2 = i2.centerY + r2 * Math.sin(l2), u2 = i2.centerX + r2 * Math.cos(c2), f2 = i2.centerY + r2 * Math.sin(c2), p2 = m.polarToCartesian(i2.centerX, i2.centerY, i2.donutSize, h2), x2 = m.polarToCartesian(i2.centerX, i2.centerY, i2.donutSize, n2), b2 = s2 > 180 ? 1 : 0, v2 = ["M", d2, g2, "A", r2, r2, 0, b2, 1, u2, f2];
      return e2 = "donut" === i2.chartType ? [].concat(v2, ["L", p2.x, p2.y, "A", i2.donutSize, i2.donutSize, 0, b2, 0, x2.x, x2.y, "L", d2, g2, "z"]).join(" ") : "pie" === i2.chartType || "polarArea" === i2.chartType ? [].concat(v2, ["L", i2.centerX, i2.centerY, "L", d2, g2]).join(" ") : [].concat(v2).join(" "), o2.roundPathCorners(e2, 2 * this.strokeWidth);
    } }, { key: "drawPolarElements", value: function(t3) {
      var e2 = this.w, i2 = new $(this.ctx), a2 = new k(this.ctx), s2 = new It(this.ctx), r2 = a2.group(), o2 = a2.group(), n2 = i2.niceScale(0, Math.ceil(this.maxY), 0), l2 = n2.result.reverse(), h2 = n2.result.length;
      this.maxY = n2.niceMax;
      for (var c2 = e2.globals.radialSize, d2 = c2 / (h2 - 1), g2 = 0; g2 < h2 - 1; g2++) {
        var u2 = a2.drawCircle(c2);
        if (u2.attr({ cx: this.centerX, cy: this.centerY, fill: "none", "stroke-width": e2.config.plotOptions.polarArea.rings.strokeWidth, stroke: e2.config.plotOptions.polarArea.rings.strokeColor }), e2.config.yaxis[0].show) {
          var f2 = s2.drawYAxisTexts(this.centerX, this.centerY - c2 + parseInt(e2.config.yaxis[0].labels.style.fontSize, 10) / 2, g2, l2[g2]);
          o2.add(f2);
        }
        r2.add(u2), c2 -= d2;
      }
      this.drawSpokes(t3), t3.add(r2), t3.add(o2);
    } }, { key: "renderInnerDataLabels", value: function(t3, e2, i2) {
      var a2 = this.w, s2 = new k(this.ctx), r2 = e2.total.show;
      t3.node.innerHTML = "", t3.node.style.opacity = i2.opacity;
      var o2, n2, l2 = i2.centerX, h2 = this.donutDataLabels.total.label ? i2.centerY : i2.centerY - i2.centerY / 6;
      o2 = void 0 === e2.name.color ? a2.globals.colors[0] : e2.name.color;
      var c2 = e2.name.fontSize, d2 = e2.name.fontFamily, g2 = e2.name.fontWeight;
      n2 = void 0 === e2.value.color ? a2.config.chart.foreColor : e2.value.color;
      var u2 = e2.value.formatter, f2 = "", p2 = "";
      if (r2 ? (o2 = e2.total.color, c2 = e2.total.fontSize, d2 = e2.total.fontFamily, g2 = e2.total.fontWeight, p2 = this.donutDataLabels.total.label ? e2.total.label : "", f2 = e2.total.formatter(a2)) : 1 === a2.globals.series.length && (f2 = u2(a2.globals.series[0], a2), p2 = a2.globals.seriesNames[0]), p2 && (p2 = e2.name.formatter(p2, e2.total.show, a2)), e2.name.show) {
        var x2 = s2.drawText({ x: l2, y: h2 + parseFloat(e2.name.offsetY), text: p2, textAnchor: "middle", foreColor: o2, fontSize: c2, fontWeight: g2, fontFamily: d2 });
        x2.node.classList.add("apexcharts-datalabel-label"), t3.add(x2);
      }
      if (e2.value.show) {
        var b2 = e2.name.show ? parseFloat(e2.value.offsetY) + 16 : e2.value.offsetY, v2 = s2.drawText({ x: l2, y: h2 + b2, text: f2, textAnchor: "middle", foreColor: n2, fontWeight: e2.value.fontWeight, fontSize: e2.value.fontSize, fontFamily: e2.value.fontFamily });
        v2.node.classList.add("apexcharts-datalabel-value"), t3.add(v2);
      }
      return t3;
    } }, { key: "printInnerLabels", value: function(t3, e2, i2, a2) {
      var s2, r2 = this.w;
      a2 ? s2 = void 0 === t3.name.color ? r2.globals.colors[parseInt(a2.parentNode.getAttribute("rel"), 10) - 1] : t3.name.color : r2.globals.series.length > 1 && t3.total.show && (s2 = t3.total.color);
      var o2 = r2.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"), n2 = r2.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
      i2 = (0, t3.value.formatter)(i2, r2), a2 || "function" != typeof t3.total.formatter || (i2 = t3.total.formatter(r2));
      var l2 = e2 === t3.total.label;
      e2 = this.donutDataLabels.total.label ? t3.name.formatter(e2, l2, r2) : "", null !== o2 && (o2.textContent = e2), null !== n2 && (n2.textContent = i2), null !== o2 && (o2.style.fill = s2);
    } }, { key: "printDataLabelsInner", value: function(t3, e2) {
      var i2 = this.w, a2 = t3.getAttribute("data:value"), s2 = i2.globals.seriesNames[parseInt(t3.parentNode.getAttribute("rel"), 10) - 1];
      i2.globals.series.length > 1 && this.printInnerLabels(e2, s2, a2, t3);
      var r2 = i2.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
      null !== r2 && (r2.style.opacity = 1);
    } }, { key: "drawSpokes", value: function(t3) {
      var e2 = this, i2 = this.w, a2 = new k(this.ctx), s2 = i2.config.plotOptions.polarArea.spokes;
      if (0 !== s2.strokeWidth) {
        for (var r2 = [], o2 = 360 / i2.globals.series.length, n2 = 0; n2 < i2.globals.series.length; n2++) r2.push(m.polarToCartesian(this.centerX, this.centerY, i2.globals.radialSize, i2.config.plotOptions.pie.startAngle + o2 * n2));
        r2.forEach(function(i3, r3) {
          var o3 = a2.drawLine(i3.x, i3.y, e2.centerX, e2.centerY, Array.isArray(s2.connectorColors) ? s2.connectorColors[r3] : s2.connectorColors);
          t3.add(o3);
        });
      }
    } }, { key: "revertDataLabelsInner", value: function() {
      var t3 = this.w;
      if (this.donutDataLabels.show) {
        var e2 = t3.globals.dom.Paper.select(".apexcharts-datalabels-group").members[0], i2 = this.renderInnerDataLabels(e2, this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show });
        t3.globals.dom.Paper.select(".apexcharts-radialbar, .apexcharts-pie").members[0].add(i2);
      }
    } }]), t2;
  }(), zt = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
      var a2 = this.w;
      this.graphics = new k(this.ctx), this.lineColorArr = void 0 !== a2.globals.stroke.colors ? a2.globals.stroke.colors : a2.globals.colors, this.defaultSize = a2.globals.svgHeight < a2.globals.svgWidth ? a2.globals.gridHeight : a2.globals.gridWidth, this.isLog = a2.config.yaxis[0].logarithmic, this.logBase = a2.config.yaxis[0].logBase, this.coreUtils = new A(this.ctx), this.maxValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, a2.globals.maxY, 0) : a2.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, this.w.globals.minY, 0) : a2.globals.minY, this.polygons = a2.config.plotOptions.radar.polygons, this.strokeWidth = a2.config.stroke.show ? a2.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - a2.config.chart.dropShadow.blur, a2.config.xaxis.labels.show && (this.size = this.size - a2.globals.xAxisLabelsWidth / 1.75), void 0 !== a2.config.plotOptions.radar.size && (this.size = a2.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = [];
    }
    return s(t2, [{ key: "draw", value: function(t3) {
      var e2 = this, i2 = this.w, a2 = new N(this.ctx), s2 = [], r2 = new G(this.ctx);
      t3.length && (this.dataPointsLen = t3[i2.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen;
      var o2 = i2.globals.gridWidth / 2, n2 = i2.globals.gridHeight / 2, l2 = o2 + i2.config.plotOptions.radar.offsetX, h2 = n2 + i2.config.plotOptions.radar.offsetY, c2 = this.graphics.group({ class: "apexcharts-radar-series apexcharts-plot-series", transform: "translate(".concat(l2 || 0, ", ").concat(h2 || 0, ")") }), d2 = [], u2 = null, f2 = null;
      if (this.yaxisLabels = this.graphics.group({ class: "apexcharts-yaxis" }), t3.forEach(function(t4, o3) {
        var n3 = t4.length === i2.globals.dataPoints, l3 = e2.graphics.group().attr({ class: "apexcharts-series", "data:longestSeries": n3, seriesName: m.escapeString(i2.globals.seriesNames[o3]), rel: o3 + 1, "data:realIndex": o3 });
        e2.dataRadiusOfPercent[o3] = [], e2.dataRadius[o3] = [], e2.angleArr[o3] = [], t4.forEach(function(t5, i3) {
          var a3 = Math.abs(e2.maxValue - e2.minValue);
          t5 -= e2.minValue, e2.isLog && (t5 = e2.coreUtils.getLogVal(e2.logBase, t5, 0)), e2.dataRadiusOfPercent[o3][i3] = t5 / a3, e2.dataRadius[o3][i3] = e2.dataRadiusOfPercent[o3][i3] * e2.size, e2.angleArr[o3][i3] = i3 * e2.disAngle;
        }), d2 = e2.getDataPointsPos(e2.dataRadius[o3], e2.angleArr[o3]);
        var h3 = e2.createPaths(d2, { x: 0, y: 0 });
        u2 = e2.graphics.group({ class: "apexcharts-series-markers-wrap apexcharts-element-hidden" }), f2 = e2.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": o3 }), i2.globals.delayedElements.push({ el: u2.node, index: o3 });
        var c3 = { i: o3, realIndex: o3, animationDelay: o3, initialSpeed: i2.config.chart.animations.speed, dataChangeSpeed: i2.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-radar", shouldClipToGrid: false, bindEventsOnPaths: false, stroke: i2.globals.stroke.colors[o3], strokeLineCap: i2.config.stroke.lineCap }, p3 = null;
        i2.globals.previousPaths.length > 0 && (p3 = e2.getPreviousPath(o3));
        for (var x2 = 0; x2 < h3.linePathsTo.length; x2++) {
          var b2 = e2.graphics.renderPaths(g(g({}, c3), {}, { pathFrom: null === p3 ? h3.linePathsFrom[x2] : p3, pathTo: h3.linePathsTo[x2], strokeWidth: Array.isArray(e2.strokeWidth) ? e2.strokeWidth[o3] : e2.strokeWidth, fill: "none", drawShadow: false }));
          l3.add(b2);
          var v2 = a2.fillPath({ seriesNumber: o3 }), y2 = e2.graphics.renderPaths(g(g({}, c3), {}, { pathFrom: null === p3 ? h3.areaPathsFrom[x2] : p3, pathTo: h3.areaPathsTo[x2], strokeWidth: 0, fill: v2, drawShadow: false }));
          if (i2.config.chart.dropShadow.enabled) {
            var k2 = new w(e2.ctx), A2 = i2.config.chart.dropShadow;
            k2.dropShadow(y2, Object.assign({}, A2, { noUserSpaceOnUse: true }), o3);
          }
          l3.add(y2);
        }
        t4.forEach(function(t5, a3) {
          var s3 = new W(e2.ctx).getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: o3, dataPointIndex: a3 }), n4 = e2.graphics.drawMarker(d2[a3].x, d2[a3].y, s3);
          n4.attr("rel", a3), n4.attr("j", a3), n4.attr("index", o3), n4.node.setAttribute("default-marker-size", s3.pSize);
          var h4 = e2.graphics.group({ class: "apexcharts-series-markers" });
          h4 && h4.add(n4), u2.add(h4), l3.add(u2);
          var c4 = i2.config.dataLabels;
          if (c4.enabled) {
            var p4 = c4.formatter(i2.globals.series[o3][a3], { seriesIndex: o3, dataPointIndex: a3, w: i2 });
            r2.plotDataLabelsText({ x: d2[a3].x, y: d2[a3].y, text: p4, textAnchor: "middle", i: o3, j: o3, parent: f2, offsetCorrection: false, dataLabelsConfig: g({}, c4) });
          }
          l3.add(f2);
        }), s2.push(l3);
      }), this.drawPolygons({ parent: c2 }), i2.config.xaxis.labels.show) {
        var p2 = this.drawXAxisTexts();
        c2.add(p2);
      }
      return s2.forEach(function(t4) {
        c2.add(t4);
      }), c2.add(this.yaxisLabels), c2;
    } }, { key: "drawPolygons", value: function(t3) {
      for (var e2 = this, i2 = this.w, a2 = t3.parent, s2 = new It(this.ctx), r2 = i2.globals.yAxisScale[0].result.reverse(), o2 = r2.length, n2 = [], l2 = this.size / (o2 - 1), h2 = 0; h2 < o2; h2++) n2[h2] = l2 * h2;
      n2.reverse();
      var c2 = [], d2 = [];
      n2.forEach(function(t4, i3) {
        var a3 = m.getPolygonPos(t4, e2.dataPointsLen), s3 = "";
        a3.forEach(function(t5, a4) {
          if (0 === i3) {
            var r3 = e2.graphics.drawLine(t5.x, t5.y, 0, 0, Array.isArray(e2.polygons.connectorColors) ? e2.polygons.connectorColors[a4] : e2.polygons.connectorColors);
            d2.push(r3);
          }
          0 === a4 && e2.yaxisLabelsTextsPos.push({ x: t5.x, y: t5.y }), s3 += t5.x + "," + t5.y + " ";
        }), c2.push(s3);
      }), c2.forEach(function(t4, s3) {
        var r3 = e2.polygons.strokeColors, o3 = e2.polygons.strokeWidth, n3 = e2.graphics.drawPolygon(t4, Array.isArray(r3) ? r3[s3] : r3, Array.isArray(o3) ? o3[s3] : o3, i2.globals.radarPolygons.fill.colors[s3]);
        a2.add(n3);
      }), d2.forEach(function(t4) {
        a2.add(t4);
      }), i2.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach(function(t4, i3) {
        var a3 = s2.drawYAxisTexts(t4.x, t4.y, i3, r2[i3]);
        e2.yaxisLabels.add(a3);
      });
    } }, { key: "drawXAxisTexts", value: function() {
      var t3 = this, e2 = this.w, i2 = e2.config.xaxis.labels, a2 = this.graphics.group({ class: "apexcharts-xaxis" }), s2 = m.getPolygonPos(this.size, this.dataPointsLen);
      return e2.globals.labels.forEach(function(r2, o2) {
        var n2 = e2.config.xaxis.labels.formatter, l2 = new G(t3.ctx);
        if (s2[o2]) {
          var h2 = t3.getTextPos(s2[o2], t3.size), c2 = n2(r2, { seriesIndex: -1, dataPointIndex: o2, w: e2 });
          l2.plotDataLabelsText({ x: h2.newX, y: h2.newY, text: c2, textAnchor: h2.textAnchor, i: o2, j: o2, parent: a2, className: "apexcharts-xaxis-label", color: Array.isArray(i2.style.colors) && i2.style.colors[o2] ? i2.style.colors[o2] : "#a8a8a8", dataLabelsConfig: g({ textAnchor: h2.textAnchor, dropShadow: { enabled: false } }, i2), offsetCorrection: false }).on("click", function(i3) {
            if ("function" == typeof e2.config.chart.events.xAxisLabelClick) {
              var a3 = Object.assign({}, e2, { labelIndex: o2 });
              e2.config.chart.events.xAxisLabelClick(i3, t3.ctx, a3);
            }
          });
        }
      }), a2;
    } }, { key: "createPaths", value: function(t3, e2) {
      var i2 = this, a2 = [], s2 = [], r2 = [], o2 = [];
      if (t3.length) {
        s2 = [this.graphics.move(e2.x, e2.y)], o2 = [this.graphics.move(e2.x, e2.y)];
        var n2 = this.graphics.move(t3[0].x, t3[0].y), l2 = this.graphics.move(t3[0].x, t3[0].y);
        t3.forEach(function(e3, a3) {
          n2 += i2.graphics.line(e3.x, e3.y), l2 += i2.graphics.line(e3.x, e3.y), a3 === t3.length - 1 && (n2 += "Z", l2 += "Z");
        }), a2.push(n2), r2.push(l2);
      }
      return { linePathsFrom: s2, linePathsTo: a2, areaPathsFrom: o2, areaPathsTo: r2 };
    } }, { key: "getTextPos", value: function(t3, e2) {
      var i2 = "middle", a2 = t3.x, s2 = t3.y;
      return Math.abs(t3.x) >= 10 ? t3.x > 0 ? (i2 = "start", a2 += 10) : t3.x < 0 && (i2 = "end", a2 -= 10) : i2 = "middle", Math.abs(t3.y) >= e2 - 10 && (t3.y < 0 ? s2 -= 10 : t3.y > 0 && (s2 += 10)), { textAnchor: i2, newX: a2, newY: s2 };
    } }, { key: "getPreviousPath", value: function(t3) {
      for (var e2 = this.w, i2 = null, a2 = 0; a2 < e2.globals.previousPaths.length; a2++) {
        var s2 = e2.globals.previousPaths[a2];
        s2.paths.length > 0 && parseInt(s2.realIndex, 10) === parseInt(t3, 10) && void 0 !== e2.globals.previousPaths[a2].paths[0] && (i2 = e2.globals.previousPaths[a2].paths[0].d);
      }
      return i2;
    } }, { key: "getDataPointsPos", value: function(t3, e2) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.dataPointsLen;
      t3 = t3 || [], e2 = e2 || [];
      for (var a2 = [], s2 = 0; s2 < i2; s2++) {
        var r2 = {};
        r2.x = t3[s2] * Math.sin(e2[s2]), r2.y = -t3[s2] * Math.cos(e2[s2]), a2.push(r2);
      }
      return a2;
    } }]), t2;
  }(), Xt = function(t2) {
    h(r2, Tt);
    var a2 = o(r2);
    function r2(t3) {
      var s2;
      i(this, r2), (s2 = a2.call(this, t3)).ctx = t3, s2.w = t3.w, s2.animBeginArr = [0], s2.animDur = 0;
      var o2 = s2.w;
      return s2.startAngle = o2.config.plotOptions.radialBar.startAngle, s2.endAngle = o2.config.plotOptions.radialBar.endAngle, s2.totalAngle = Math.abs(o2.config.plotOptions.radialBar.endAngle - o2.config.plotOptions.radialBar.startAngle), s2.trackStartAngle = o2.config.plotOptions.radialBar.track.startAngle, s2.trackEndAngle = o2.config.plotOptions.radialBar.track.endAngle, s2.barLabels = s2.w.config.plotOptions.radialBar.barLabels, s2.donutDataLabels = s2.w.config.plotOptions.radialBar.dataLabels, s2.radialDataLabels = s2.donutDataLabels, s2.trackStartAngle || (s2.trackStartAngle = s2.startAngle), s2.trackEndAngle || (s2.trackEndAngle = s2.endAngle), 360 === s2.endAngle && (s2.endAngle = 359.99), s2.margin = parseInt(o2.config.plotOptions.radialBar.track.margin, 10), s2.onBarLabelClick = s2.onBarLabelClick.bind(e(s2)), s2;
    }
    return s(r2, [{ key: "draw", value: function(t3) {
      var e2 = this.w, i2 = new k(this.ctx), a3 = i2.group({ class: "apexcharts-radialbar" });
      if (e2.globals.noData) return a3;
      var s2 = i2.group(), r3 = this.defaultSize / 2, o2 = e2.globals.gridWidth / 2, n2 = this.defaultSize / 2.05;
      e2.config.chart.sparkline.enabled || (n2 = n2 - e2.config.stroke.width - e2.config.chart.dropShadow.blur);
      var l2 = e2.globals.fill.colors;
      if (e2.config.plotOptions.radialBar.track.show) {
        var h2 = this.drawTracks({ size: n2, centerX: o2, centerY: r3, colorArr: l2, series: t3 });
        s2.add(h2);
      }
      var c2 = this.drawArcs({ size: n2, centerX: o2, centerY: r3, colorArr: l2, series: t3 }), d2 = 360;
      e2.config.plotOptions.radialBar.startAngle < 0 && (d2 = this.totalAngle);
      var g2 = (360 - d2) / 360;
      if (e2.globals.radialSize = n2 - n2 * g2, this.radialDataLabels.value.show) {
        var u2 = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
        e2.globals.radialSize += u2 * g2;
      }
      return s2.add(c2.g), "front" === e2.config.plotOptions.radialBar.hollow.position && (c2.g.add(c2.elHollow), c2.dataLabels && c2.g.add(c2.dataLabels)), a3.add(s2), a3;
    } }, { key: "drawTracks", value: function(t3) {
      var e2 = this.w, i2 = new k(this.ctx), a3 = i2.group({ class: "apexcharts-tracks" }), s2 = new w(this.ctx), r3 = new N(this.ctx), o2 = this.getStrokeWidth(t3);
      t3.size = t3.size - o2 / 2;
      for (var n2 = 0; n2 < t3.series.length; n2++) {
        var l2 = i2.group({ class: "apexcharts-radialbar-track apexcharts-track" });
        a3.add(l2), l2.attr({ rel: n2 + 1 }), t3.size = t3.size - o2 - this.margin;
        var h2 = e2.config.plotOptions.radialBar.track, c2 = r3.fillPath({ seriesNumber: 0, size: t3.size, fillColors: Array.isArray(h2.background) ? h2.background[n2] : h2.background, solid: true }), d2 = this.trackStartAngle, g2 = this.trackEndAngle;
        Math.abs(g2) + Math.abs(d2) >= 360 && (g2 = 360 - Math.abs(this.startAngle) - 0.1);
        var u2 = i2.drawPath({ d: "", stroke: c2, strokeWidth: o2 * parseInt(h2.strokeWidth, 10) / 100, fill: "none", strokeOpacity: h2.opacity, classes: "apexcharts-radialbar-area" });
        if (h2.dropShadow.enabled) {
          var f2 = h2.dropShadow;
          s2.dropShadow(u2, f2);
        }
        l2.add(u2), u2.attr("id", "apexcharts-radialbarTrack-" + n2), this.animatePaths(u2, { centerX: t3.centerX, centerY: t3.centerY, endAngle: g2, startAngle: d2, size: t3.size, i: n2, totalItems: 2, animBeginArr: 0, dur: 0, isTrack: true, easing: e2.globals.easing });
      }
      return a3;
    } }, { key: "drawArcs", value: function(t3) {
      var e2 = this.w, i2 = new k(this.ctx), a3 = new N(this.ctx), s2 = new w(this.ctx), r3 = i2.group(), o2 = this.getStrokeWidth(t3);
      t3.size = t3.size - o2 / 2;
      var n2 = e2.config.plotOptions.radialBar.hollow.background, l2 = t3.size - o2 * t3.series.length - this.margin * t3.series.length - o2 * parseInt(e2.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2, h2 = l2 - e2.config.plotOptions.radialBar.hollow.margin;
      void 0 !== e2.config.plotOptions.radialBar.hollow.image && (n2 = this.drawHollowImage(t3, r3, l2, n2));
      var c2 = this.drawHollow({ size: h2, centerX: t3.centerX, centerY: t3.centerY, fill: n2 || "transparent" });
      if (e2.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
        var d2 = e2.config.plotOptions.radialBar.hollow.dropShadow;
        s2.dropShadow(c2, d2);
      }
      var g2 = 1;
      !this.radialDataLabels.total.show && e2.globals.series.length > 1 && (g2 = 0);
      var u2 = null;
      if (this.radialDataLabels.show) {
        var f2 = e2.globals.dom.Paper.select(".apexcharts-datalabels-group").members[0];
        u2 = this.renderInnerDataLabels(f2, this.radialDataLabels, { hollowSize: l2, centerX: t3.centerX, centerY: t3.centerY, opacity: g2 });
      }
      "back" === e2.config.plotOptions.radialBar.hollow.position && (r3.add(c2), u2 && r3.add(u2));
      var p2 = false;
      e2.config.plotOptions.radialBar.inverseOrder && (p2 = true);
      for (var x2 = p2 ? t3.series.length - 1 : 0; p2 ? x2 >= 0 : x2 < t3.series.length; p2 ? x2-- : x2++) {
        var b2 = i2.group({ class: "apexcharts-series apexcharts-radial-series", seriesName: m.escapeString(e2.globals.seriesNames[x2]) });
        r3.add(b2), b2.attr({ rel: x2 + 1, "data:realIndex": x2 }), this.ctx.series.addCollapsedClassToSeries(b2, x2), t3.size = t3.size - o2 - this.margin;
        var v2 = a3.fillPath({ seriesNumber: x2, size: t3.size, value: t3.series[x2] }), y2 = this.startAngle, A2 = void 0, S2 = m.negToZero(t3.series[x2] > 100 ? 100 : t3.series[x2]) / 100, C2 = Math.round(this.totalAngle * S2) + this.startAngle, L2 = void 0;
        e2.globals.dataChanged && (A2 = this.startAngle, L2 = Math.round(this.totalAngle * m.negToZero(e2.globals.previousPaths[x2]) / 100) + A2), Math.abs(C2) + Math.abs(y2) > 360 && (C2 -= 0.01), Math.abs(L2) + Math.abs(A2) > 360 && (L2 -= 0.01);
        var P2 = C2 - y2, M2 = Array.isArray(e2.config.stroke.dashArray) ? e2.config.stroke.dashArray[x2] : e2.config.stroke.dashArray, I2 = i2.drawPath({ d: "", stroke: v2, strokeWidth: o2, fill: "none", fillOpacity: e2.config.fill.opacity, classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + x2, strokeDashArray: M2 });
        if (k.setAttrs(I2.node, { "data:angle": P2, "data:value": t3.series[x2] }), e2.config.chart.dropShadow.enabled) {
          var T2 = e2.config.chart.dropShadow;
          s2.dropShadow(I2, T2, x2);
        }
        if (s2.setSelectionFilter(I2, 0, x2), this.addListeners(I2, this.radialDataLabels), b2.add(I2), I2.attr({ index: 0, j: x2 }), this.barLabels.enabled) {
          var z2 = m.polarToCartesian(t3.centerX, t3.centerY, t3.size, y2), X2 = this.barLabels.formatter(e2.globals.seriesNames[x2], { seriesIndex: x2, w: e2 }), E2 = ["apexcharts-radialbar-label"];
          this.barLabels.onClick || E2.push("apexcharts-no-click");
          var Y2 = this.barLabels.useSeriesColors ? e2.globals.colors[x2] : e2.config.chart.foreColor;
          Y2 || (Y2 = e2.config.chart.foreColor);
          var R2 = z2.x + this.barLabels.offsetX, F2 = z2.y + this.barLabels.offsetY, D2 = i2.drawText({ x: R2, y: F2, text: X2, textAnchor: "end", dominantBaseline: "middle", fontFamily: this.barLabels.fontFamily, fontWeight: this.barLabels.fontWeight, fontSize: this.barLabels.fontSize, foreColor: Y2, cssClass: E2.join(" ") });
          D2.on("click", this.onBarLabelClick), D2.attr({ rel: x2 + 1 }), 0 !== y2 && D2.attr({ "transform-origin": "".concat(R2, " ").concat(F2), transform: "rotate(".concat(y2, " 0 0)") }), b2.add(D2);
        }
        var H2 = 0;
        !this.initialAnim || e2.globals.resized || e2.globals.dataChanged || (H2 = e2.config.chart.animations.speed), e2.globals.dataChanged && (H2 = e2.config.chart.animations.dynamicAnimation.speed), this.animDur = H2 / (1.2 * t3.series.length) + this.animDur, this.animBeginArr.push(this.animDur), this.animatePaths(I2, { centerX: t3.centerX, centerY: t3.centerY, endAngle: C2, startAngle: y2, prevEndAngle: L2, prevStartAngle: A2, size: t3.size, i: x2, totalItems: 2, animBeginArr: this.animBeginArr, dur: H2, shouldSetPrevPaths: true, easing: e2.globals.easing });
      }
      return { g: r3, elHollow: c2, dataLabels: u2 };
    } }, { key: "drawHollow", value: function(t3) {
      var e2 = new k(this.ctx).drawCircle(2 * t3.size);
      return e2.attr({ class: "apexcharts-radialbar-hollow", cx: t3.centerX, cy: t3.centerY, r: t3.size, fill: t3.fill }), e2;
    } }, { key: "drawHollowImage", value: function(t3, e2, i2, a3) {
      var s2 = this.w, r3 = new N(this.ctx), o2 = m.randomId(), n2 = s2.config.plotOptions.radialBar.hollow.image;
      if (s2.config.plotOptions.radialBar.hollow.imageClipped) r3.clippedImgArea({ width: i2, height: i2, image: n2, patternID: "pattern".concat(s2.globals.cuid).concat(o2) }), a3 = "url(#pattern".concat(s2.globals.cuid).concat(o2, ")");
      else {
        var l2 = s2.config.plotOptions.radialBar.hollow.imageWidth, h2 = s2.config.plotOptions.radialBar.hollow.imageHeight;
        if (void 0 === l2 && void 0 === h2) {
          var c2 = s2.globals.dom.Paper.image(n2).loaded(function(e3) {
            this.move(t3.centerX - e3.width / 2 + s2.config.plotOptions.radialBar.hollow.imageOffsetX, t3.centerY - e3.height / 2 + s2.config.plotOptions.radialBar.hollow.imageOffsetY);
          });
          e2.add(c2);
        } else {
          var d2 = s2.globals.dom.Paper.image(n2).loaded(function(e3) {
            this.move(t3.centerX - l2 / 2 + s2.config.plotOptions.radialBar.hollow.imageOffsetX, t3.centerY - h2 / 2 + s2.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(l2, h2);
          });
          e2.add(d2);
        }
      }
      return a3;
    } }, { key: "getStrokeWidth", value: function(t3) {
      var e2 = this.w;
      return t3.size * (100 - parseInt(e2.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (t3.series.length + 1) - this.margin;
    } }, { key: "onBarLabelClick", value: function(t3) {
      var e2 = parseInt(t3.target.getAttribute("rel"), 10) - 1, i2 = this.barLabels.onClick, a3 = this.w;
      i2 && i2(a3.globals.seriesNames[e2], { w: a3, seriesIndex: e2 });
    } }]), r2;
  }(), Et = function(t2) {
    h(a2, St);
    var e2 = o(a2);
    function a2() {
      return i(this, a2), e2.apply(this, arguments);
    }
    return s(a2, [{ key: "draw", value: function(t3, e3) {
      var i2 = this.w, a3 = new k(this.ctx);
      this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = t3, this.seriesRangeStart = i2.globals.seriesRangeStart, this.seriesRangeEnd = i2.globals.seriesRangeEnd, this.barHelpers.initVariables(t3);
      for (var s2 = a3.group({ class: "apexcharts-rangebar-series apexcharts-plot-series" }), r2 = 0; r2 < t3.length; r2++) {
        var o2, n2, l2, h2, c2 = void 0, d2 = void 0, u2 = i2.globals.comboCharts ? e3[r2] : r2, f2 = this.barHelpers.getGroupIndex(u2).columnGroupIndex, p2 = a3.group({ class: "apexcharts-series", seriesName: m.escapeString(i2.globals.seriesNames[u2]), rel: r2 + 1, "data:realIndex": u2 });
        this.ctx.series.addCollapsedClassToSeries(p2, u2), t3[r2].length > 0 && (this.visibleI = this.visibleI + 1);
        var x2 = 0, b2 = 0, v2 = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = i2.globals.seriesYAxisReverseMap[u2][0], v2 = u2);
        var y2 = this.barHelpers.initialPositions();
        d2 = y2.y, h2 = y2.zeroW, c2 = y2.x, b2 = y2.barWidth, x2 = y2.barHeight, o2 = y2.xDivision, n2 = y2.yDivision, l2 = y2.zeroH;
        for (var w2 = a3.group({ class: "apexcharts-datalabels", "data:realIndex": u2 }), A2 = a3.group({ class: "apexcharts-rangebar-goals-markers" }), S2 = 0; S2 < i2.globals.dataPoints; S2++) {
          var C2 = this.barHelpers.getStrokeWidth(r2, S2, u2), L2 = this.seriesRangeStart[r2][S2], P2 = this.seriesRangeEnd[r2][S2], M2 = null, I2 = null, T2 = null, z2 = { x: c2, y: d2, strokeWidth: C2, elSeries: p2 }, X2 = this.seriesLen;
          if (i2.config.plotOptions.bar.rangeBarGroupRows && (X2 = 1), void 0 === i2.config.series[r2].data[S2]) break;
          if (this.isHorizontal) {
            T2 = d2 + x2 * this.visibleI;
            var E2 = (n2 - x2 * X2) / 2;
            if (i2.config.series[r2].data[S2].x) {
              var Y2 = this.detectOverlappingBars({ i: r2, j: S2, barYPosition: T2, srty: E2, barHeight: x2, yDivision: n2, initPositions: y2 });
              x2 = Y2.barHeight, T2 = Y2.barYPosition;
            }
            b2 = (M2 = this.drawRangeBarPaths(g({ indexes: { i: r2, j: S2, realIndex: u2 }, barHeight: x2, barYPosition: T2, zeroW: h2, yDivision: n2, y1: L2, y2: P2 }, z2))).barWidth;
          } else {
            i2.globals.isXNumeric && (c2 = (i2.globals.seriesX[r2][S2] - i2.globals.minX) / this.xRatio - b2 / 2), I2 = c2 + b2 * this.visibleI;
            var R2 = (o2 - b2 * X2) / 2;
            if (i2.config.series[r2].data[S2].x) {
              var F2 = this.detectOverlappingBars({ i: r2, j: S2, barXPosition: I2, srtx: R2, barWidth: b2, xDivision: o2, initPositions: y2 });
              b2 = F2.barWidth, I2 = F2.barXPosition;
            }
            x2 = (M2 = this.drawRangeColumnPaths(g({ indexes: { i: r2, j: S2, realIndex: u2, translationsIndex: v2 }, barWidth: b2, barXPosition: I2, zeroH: l2, xDivision: o2 }, z2))).barHeight;
          }
          var D2 = this.barHelpers.drawGoalLine({ barXPosition: M2.barXPosition, barYPosition: T2, goalX: M2.goalX, goalY: M2.goalY, barHeight: x2, barWidth: b2 });
          D2 && A2.add(D2), d2 = M2.y, c2 = M2.x;
          var H2 = this.barHelpers.getPathFillColor(t3, r2, S2, u2), O2 = i2.globals.stroke.colors[u2];
          this.renderSeries({ realIndex: u2, pathFill: H2, lineFill: O2, j: S2, i: r2, x: c2, y: d2, y1: L2, y2: P2, pathFrom: M2.pathFrom, pathTo: M2.pathTo, strokeWidth: C2, elSeries: p2, series: t3, barHeight: x2, barWidth: b2, barXPosition: I2, barYPosition: T2, columnGroupIndex: f2, elDataLabelsWrap: w2, elGoalsMarkers: A2, visibleSeries: this.visibleI, type: "rangebar" });
        }
        s2.add(p2);
      }
      return s2;
    } }, { key: "detectOverlappingBars", value: function(t3) {
      var e3 = t3.i, i2 = t3.j, a3 = t3.barYPosition, s2 = t3.barXPosition, r2 = t3.srty, o2 = t3.srtx, n2 = t3.barHeight, l2 = t3.barWidth, h2 = t3.yDivision, c2 = t3.xDivision, d2 = t3.initPositions, g2 = this.w, u2 = [], f2 = g2.config.series[e3].data[i2].rangeName, p2 = g2.config.series[e3].data[i2].x, x2 = Array.isArray(p2) ? p2.join(" ") : p2, b2 = g2.globals.labels.map(function(t4) {
        return Array.isArray(t4) ? t4.join(" ") : t4;
      }).indexOf(x2), v2 = g2.globals.seriesRange[e3].findIndex(function(t4) {
        return t4.x === x2 && t4.overlaps.length > 0;
      });
      return this.isHorizontal ? (a3 = g2.config.plotOptions.bar.rangeBarGroupRows ? r2 + h2 * b2 : r2 + n2 * this.visibleI + h2 * b2, v2 > -1 && !g2.config.plotOptions.bar.rangeBarOverlap && (u2 = g2.globals.seriesRange[e3][v2].overlaps).indexOf(f2) > -1 && (a3 = (n2 = d2.barHeight / u2.length) * this.visibleI + h2 * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + n2 * (this.visibleI + u2.indexOf(f2)) + h2 * b2)) : (b2 > -1 && !g2.globals.timescaleLabels.length && (s2 = g2.config.plotOptions.bar.rangeBarGroupRows ? o2 + c2 * b2 : o2 + l2 * this.visibleI + c2 * b2), v2 > -1 && !g2.config.plotOptions.bar.rangeBarOverlap && (u2 = g2.globals.seriesRange[e3][v2].overlaps).indexOf(f2) > -1 && (s2 = (l2 = d2.barWidth / u2.length) * this.visibleI + c2 * (100 - parseInt(this.barOptions.barWidth, 10)) / 100 / 2 + l2 * (this.visibleI + u2.indexOf(f2)) + c2 * b2)), { barYPosition: a3, barXPosition: s2, barHeight: n2, barWidth: l2 };
    } }, { key: "drawRangeColumnPaths", value: function(t3) {
      var e3 = t3.indexes, i2 = t3.x, a3 = t3.xDivision, s2 = t3.barWidth, r2 = t3.barXPosition, o2 = t3.zeroH, n2 = this.w, l2 = e3.i, h2 = e3.j, c2 = e3.realIndex, d2 = e3.translationsIndex, g2 = this.yRatio[d2], u2 = this.getRangeValue(c2, h2), f2 = Math.min(u2.start, u2.end), p2 = Math.max(u2.start, u2.end);
      void 0 === this.series[l2][h2] || null === this.series[l2][h2] ? f2 = o2 : (f2 = o2 - f2 / g2, p2 = o2 - p2 / g2);
      var x2 = Math.abs(p2 - f2), b2 = this.barHelpers.getColumnPaths({ barXPosition: r2, barWidth: s2, y1: f2, y2: p2, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, realIndex: c2, i: c2, j: h2, w: n2 });
      if (n2.globals.isXNumeric) {
        var v2 = this.getBarXForNumericXAxis({ x: i2, j: h2, realIndex: c2, barWidth: s2 });
        i2 = v2.x, r2 = v2.barXPosition;
      } else i2 += a3;
      return { pathTo: b2.pathTo, pathFrom: b2.pathFrom, barHeight: x2, x: i2, y: u2.start < 0 && u2.end < 0 ? f2 : p2, goalY: this.barHelpers.getGoalValues("y", null, o2, l2, h2, d2), barXPosition: r2 };
    } }, { key: "preventBarOverflow", value: function(t3) {
      var e3 = this.w;
      return t3 < 0 && (t3 = 0), t3 > e3.globals.gridWidth && (t3 = e3.globals.gridWidth), t3;
    } }, { key: "drawRangeBarPaths", value: function(t3) {
      var e3 = t3.indexes, i2 = t3.y, a3 = t3.y1, s2 = t3.y2, r2 = t3.yDivision, o2 = t3.barHeight, n2 = t3.barYPosition, l2 = t3.zeroW, h2 = this.w, c2 = e3.realIndex, d2 = e3.j, g2 = this.preventBarOverflow(l2 + a3 / this.invertedYRatio), u2 = this.preventBarOverflow(l2 + s2 / this.invertedYRatio), f2 = this.getRangeValue(c2, d2), p2 = Math.abs(u2 - g2), x2 = this.barHelpers.getBarpaths({ barYPosition: n2, barHeight: o2, x1: g2, x2: u2, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, i: c2, realIndex: c2, j: d2, w: h2 });
      return h2.globals.isXNumeric || (i2 += r2), { pathTo: x2.pathTo, pathFrom: x2.pathFrom, barWidth: p2, x: f2.start < 0 && f2.end < 0 ? g2 : u2, goalX: this.barHelpers.getGoalValues("x", l2, null, c2, d2), y: i2 };
    } }, { key: "getRangeValue", value: function(t3, e3) {
      var i2 = this.w;
      return { start: i2.globals.seriesRangeStart[t3][e3], end: i2.globals.seriesRangeEnd[t3][e3] };
    } }]), a2;
  }(), Yt = function() {
    function t2(e2) {
      i(this, t2), this.w = e2.w, this.lineCtx = e2;
    }
    return s(t2, [{ key: "sameValueSeriesFix", value: function(t3, e2) {
      var i2 = this.w;
      if (("gradient" === i2.config.fill.type || "gradient" === i2.config.fill.type[t3]) && new A(this.lineCtx.ctx, i2).seriesHaveSameValues(t3)) {
        var a2 = e2[t3].slice();
        a2[a2.length - 1] = a2[a2.length - 1] + 1e-6, e2[t3] = a2;
      }
      return e2;
    } }, { key: "calculatePoints", value: function(t3) {
      var e2 = t3.series, i2 = t3.realIndex, a2 = t3.x, s2 = t3.y, r2 = t3.i, o2 = t3.j, n2 = t3.prevY, l2 = this.w, h2 = [], c2 = [];
      if (0 === o2) {
        var d2 = this.lineCtx.categoryAxisCorrection + l2.config.markers.offsetX;
        l2.globals.isXNumeric && (d2 = (l2.globals.seriesX[i2][0] - l2.globals.minX) / this.lineCtx.xRatio + l2.config.markers.offsetX), h2.push(d2), c2.push(m.isNumber(e2[r2][0]) ? n2 + l2.config.markers.offsetY : null), h2.push(a2 + l2.config.markers.offsetX), c2.push(m.isNumber(e2[r2][o2 + 1]) ? s2 + l2.config.markers.offsetY : null);
      } else h2.push(a2 + l2.config.markers.offsetX), c2.push(m.isNumber(e2[r2][o2 + 1]) ? s2 + l2.config.markers.offsetY : null);
      return { x: h2, y: c2 };
    } }, { key: "checkPreviousPaths", value: function(t3) {
      for (var e2 = t3.pathFromLine, i2 = t3.pathFromArea, a2 = t3.realIndex, s2 = this.w, r2 = 0; r2 < s2.globals.previousPaths.length; r2++) {
        var o2 = s2.globals.previousPaths[r2];
        ("line" === o2.type || "area" === o2.type) && o2.paths.length > 0 && parseInt(o2.realIndex, 10) === parseInt(a2, 10) && ("line" === o2.type ? (this.lineCtx.appendPathFrom = false, e2 = s2.globals.previousPaths[r2].paths[0].d) : "area" === o2.type && (this.lineCtx.appendPathFrom = false, i2 = s2.globals.previousPaths[r2].paths[0].d, s2.config.stroke.show && s2.globals.previousPaths[r2].paths[1] && (e2 = s2.globals.previousPaths[r2].paths[1].d)));
      }
      return { pathFromLine: e2, pathFromArea: i2 };
    } }, { key: "determineFirstPrevY", value: function(t3) {
      var e2, i2, a2, s2 = t3.i, r2 = t3.realIndex, o2 = t3.series, n2 = t3.prevY, l2 = t3.lineYPosition, h2 = t3.translationsIndex, c2 = this.w, d2 = c2.config.chart.stacked && !c2.globals.comboCharts || c2.config.chart.stacked && c2.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || "bar" === (null === (e2 = this.w.config.series[r2]) || void 0 === e2 ? void 0 : e2.type) || "column" === (null === (i2 = this.w.config.series[r2]) || void 0 === i2 ? void 0 : i2.type));
      if (void 0 !== (null === (a2 = o2[s2]) || void 0 === a2 ? void 0 : a2[0])) n2 = (l2 = d2 && s2 > 0 ? this.lineCtx.prevSeriesY[s2 - 1][0] : this.lineCtx.zeroY) - o2[s2][0] / this.lineCtx.yRatio[h2] + 2 * (this.lineCtx.isReversed ? o2[s2][0] / this.lineCtx.yRatio[h2] : 0);
      else if (d2 && s2 > 0 && void 0 === o2[s2][0]) {
        for (var g2 = s2 - 1; g2 >= 0; g2--) if (null !== o2[g2][0] && void 0 !== o2[g2][0]) {
          n2 = l2 = this.lineCtx.prevSeriesY[g2][0];
          break;
        }
      }
      return { prevY: n2, lineYPosition: l2 };
    } }]), t2;
  }(), Rt = function(t2) {
    for (var e2, i2, a2, s2, r2 = function(t3) {
      for (var e3 = [], i3 = t3[0], a3 = t3[1], s3 = e3[0] = Ht(i3, a3), r3 = 1, o3 = t3.length - 1; r3 < o3; r3++) i3 = a3, a3 = t3[r3 + 1], e3[r3] = 0.5 * (s3 + (s3 = Ht(i3, a3)));
      return e3[r3] = s3, e3;
    }(t2), o2 = t2.length - 1, n2 = [], l2 = 0; l2 < o2; l2++) a2 = Ht(t2[l2], t2[l2 + 1]), Math.abs(a2) < 1e-6 ? r2[l2] = r2[l2 + 1] = 0 : (s2 = (e2 = r2[l2] / a2) * e2 + (i2 = r2[l2 + 1] / a2) * i2) > 9 && (s2 = 3 * a2 / Math.sqrt(s2), r2[l2] = s2 * e2, r2[l2 + 1] = s2 * i2);
    for (var h2 = 0; h2 <= o2; h2++) s2 = (t2[Math.min(o2, h2 + 1)][0] - t2[Math.max(0, h2 - 1)][0]) / (6 * (1 + r2[h2] * r2[h2])), n2.push([s2 || 0, r2[h2] * s2 || 0]);
    return n2;
  }, Ft = function(t2) {
    var e2 = Rt(t2), i2 = t2[1], a2 = t2[0], s2 = [], r2 = e2[1], o2 = e2[0];
    s2.push(a2, [a2[0] + o2[0], a2[1] + o2[1], i2[0] - r2[0], i2[1] - r2[1], i2[0], i2[1]]);
    for (var n2 = 2, l2 = e2.length; n2 < l2; n2++) {
      var h2 = t2[n2], c2 = e2[n2];
      s2.push([h2[0] - c2[0], h2[1] - c2[1], h2[0], h2[1]]);
    }
    return s2;
  }, Dt = function(t2, e2, i2) {
    var a2 = t2.slice(e2, i2);
    if (e2) {
      if (i2 - e2 > 1 && a2[1].length < 6) {
        var s2 = a2[0].length;
        a2[1] = [2 * a2[0][s2 - 2] - a2[0][s2 - 4], 2 * a2[0][s2 - 1] - a2[0][s2 - 3]].concat(a2[1]);
      }
      a2[0] = a2[0].slice(-2);
    }
    return a2;
  };
  function Ht(t2, e2) {
    return (e2[1] - t2[1]) / (e2[0] - t2[0]);
  }
  var Ot = function() {
    function t2(e2, a2, s2) {
      i(this, t2), this.ctx = e2, this.w = e2.w, this.xyRatios = a2, this.pointsChart = !("bubble" !== this.w.config.chart.type && "scatter" !== this.w.config.chart.type) || s2, this.scatter = new B(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new Yt(this), this.markers = new W(this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0;
    }
    return s(t2, [{ key: "draw", value: function(t3, e2, i2, a2) {
      var s2, r2 = this.w, o2 = new k(this.ctx), n2 = r2.globals.comboCharts ? e2 : r2.config.chart.type, l2 = o2.group({ class: "apexcharts-".concat(n2, "-series apexcharts-plot-series") }), h2 = new A(this.ctx, r2);
      this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, t3 = h2.getLogSeries(t3), this.yRatio = h2.getLogYRatios(this.yRatio), this.prevSeriesY = [];
      for (var c2 = [], d2 = 0; d2 < t3.length; d2++) {
        t3 = this.lineHelpers.sameValueSeriesFix(d2, t3);
        var u2 = r2.globals.comboCharts ? i2[d2] : d2, f2 = this.yRatio.length > 1 ? u2 : 0;
        this._initSerieVariables(t3, d2, u2);
        var p2 = [], x2 = [], b2 = [], v2 = r2.globals.padHorizontal + this.categoryAxisCorrection;
        this.ctx.series.addCollapsedClassToSeries(this.elSeries, u2), r2.globals.isXNumeric && r2.globals.seriesX.length > 0 && (v2 = (r2.globals.seriesX[u2][0] - r2.globals.minX) / this.xRatio), b2.push(v2);
        var m2, y2 = v2, w2 = void 0, S2 = y2, C2 = this.zeroY, L2 = this.zeroY;
        C2 = this.lineHelpers.determineFirstPrevY({ i: d2, realIndex: u2, series: t3, prevY: C2, lineYPosition: 0, translationsIndex: f2 }).prevY, "monotoneCubic" === r2.config.stroke.curve && null === t3[d2][0] ? p2.push(null) : p2.push(C2), m2 = C2;
        "rangeArea" === n2 && (w2 = L2 = this.lineHelpers.determineFirstPrevY({ i: d2, realIndex: u2, series: a2, prevY: L2, lineYPosition: 0, translationsIndex: f2 }).prevY, x2.push(null !== p2[0] ? L2 : null));
        var P2 = this._calculatePathsFrom({ type: n2, series: t3, i: d2, realIndex: u2, translationsIndex: f2, prevX: S2, prevY: C2, prevY2: L2 }), M2 = [p2[0]], I2 = [x2[0]], T2 = { type: n2, series: t3, realIndex: u2, translationsIndex: f2, i: d2, x: v2, y: 1, pX: y2, pY: m2, pathsFrom: P2, linePaths: [], areaPaths: [], seriesIndex: i2, lineYPosition: 0, xArrj: b2, yArrj: p2, y2Arrj: x2, seriesRangeEnd: a2 }, z2 = this._iterateOverDataPoints(g(g({}, T2), {}, { iterations: "rangeArea" === n2 ? t3[d2].length - 1 : void 0, isRangeStart: true }));
        if ("rangeArea" === n2) {
          for (var X2 = this._calculatePathsFrom({ series: a2, i: d2, realIndex: u2, prevX: S2, prevY: L2 }), E2 = this._iterateOverDataPoints(g(g({}, T2), {}, { series: a2, xArrj: [v2], yArrj: M2, y2Arrj: I2, pY: w2, areaPaths: z2.areaPaths, pathsFrom: X2, iterations: a2[d2].length - 1, isRangeStart: false })), Y2 = z2.linePaths.length / 2, R2 = 0; R2 < Y2; R2++) z2.linePaths[R2] = E2.linePaths[R2 + Y2] + z2.linePaths[R2];
          z2.linePaths.splice(Y2), z2.pathFromLine = E2.pathFromLine + z2.pathFromLine;
        } else z2.pathFromArea += "z";
        this._handlePaths({ type: n2, realIndex: u2, i: d2, paths: z2 }), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), c2.push(this.elSeries);
      }
      if (void 0 !== (null === (s2 = r2.config.series[0]) || void 0 === s2 ? void 0 : s2.zIndex) && c2.sort(function(t4, e3) {
        return Number(t4.node.getAttribute("zIndex")) - Number(e3.node.getAttribute("zIndex"));
      }), r2.config.chart.stacked) for (var F2 = c2.length - 1; F2 >= 0; F2--) l2.add(c2[F2]);
      else for (var D2 = 0; D2 < c2.length; D2++) l2.add(c2[D2]);
      return l2;
    } }, { key: "_initSerieVariables", value: function(t3, e2, i2) {
      var a2 = this.w, s2 = new k(this.ctx);
      this.xDivision = a2.globals.gridWidth / (a2.globals.dataPoints - ("on" === a2.config.xaxis.tickPlacement ? 1 : 0)), this.strokeWidth = Array.isArray(a2.config.stroke.width) ? a2.config.stroke.width[i2] : a2.config.stroke.width;
      var r2 = 0;
      this.yRatio.length > 1 && (this.yaxisIndex = a2.globals.seriesYAxisReverseMap[i2], r2 = i2), this.isReversed = a2.config.yaxis[this.yaxisIndex] && a2.config.yaxis[this.yaxisIndex].reversed, this.zeroY = a2.globals.gridHeight - this.baseLineY[r2] - (this.isReversed ? a2.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[r2] : 0), this.areaBottomY = this.zeroY, (this.zeroY > a2.globals.gridHeight || "end" === a2.config.plotOptions.area.fillTo) && (this.areaBottomY = a2.globals.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = s2.group({ class: "apexcharts-series", zIndex: void 0 !== a2.config.series[i2].zIndex ? a2.config.series[i2].zIndex : i2, seriesName: m.escapeString(a2.globals.seriesNames[i2]) }), this.elPointsMain = s2.group({ class: "apexcharts-series-markers-wrap", "data:realIndex": i2 }), this.elDataLabelsWrap = s2.group({ class: "apexcharts-datalabels", "data:realIndex": i2 });
      var o2 = t3[e2].length === a2.globals.dataPoints;
      this.elSeries.attr({ "data:longestSeries": o2, rel: e2 + 1, "data:realIndex": i2 }), this.appendPathFrom = true;
    } }, { key: "_calculatePathsFrom", value: function(t3) {
      var e2, i2, a2, s2, r2 = t3.type, o2 = t3.series, n2 = t3.i, l2 = t3.realIndex, h2 = t3.translationsIndex, c2 = t3.prevX, d2 = t3.prevY, g2 = t3.prevY2, u2 = this.w, f2 = new k(this.ctx);
      if (null === o2[n2][0]) {
        for (var p2 = 0; p2 < o2[n2].length; p2++) if (null !== o2[n2][p2]) {
          c2 = this.xDivision * p2, d2 = this.zeroY - o2[n2][p2] / this.yRatio[h2], e2 = f2.move(c2, d2), i2 = f2.move(c2, this.areaBottomY);
          break;
        }
      } else e2 = f2.move(c2, d2), "rangeArea" === r2 && (e2 = f2.move(c2, g2) + f2.line(c2, d2)), i2 = f2.move(c2, this.areaBottomY) + f2.line(c2, d2);
      if (a2 = f2.move(0, this.zeroY) + f2.line(0, this.zeroY), s2 = f2.move(0, this.zeroY) + f2.line(0, this.zeroY), u2.globals.previousPaths.length > 0) {
        var x2 = this.lineHelpers.checkPreviousPaths({ pathFromLine: a2, pathFromArea: s2, realIndex: l2 });
        a2 = x2.pathFromLine, s2 = x2.pathFromArea;
      }
      return { prevX: c2, prevY: d2, linePath: e2, areaPath: i2, pathFromLine: a2, pathFromArea: s2 };
    } }, { key: "_handlePaths", value: function(t3) {
      var e2 = t3.type, i2 = t3.realIndex, a2 = t3.i, s2 = t3.paths, r2 = this.w, o2 = new k(this.ctx), n2 = new N(this.ctx);
      this.prevSeriesY.push(s2.yArrj), r2.globals.seriesXvalues[i2] = s2.xArrj, r2.globals.seriesYvalues[i2] = s2.yArrj;
      var l2 = r2.config.forecastDataPoints;
      if (l2.count > 0 && "rangeArea" !== e2) {
        var h2 = r2.globals.seriesXvalues[i2][r2.globals.seriesXvalues[i2].length - l2.count - 1], c2 = o2.drawRect(h2, 0, r2.globals.gridWidth, r2.globals.gridHeight, 0);
        r2.globals.dom.elForecastMask.appendChild(c2.node);
        var d2 = o2.drawRect(0, 0, h2, r2.globals.gridHeight, 0);
        r2.globals.dom.elNonForecastMask.appendChild(d2.node);
      }
      this.pointsChart || r2.globals.delayedElements.push({ el: this.elPointsMain.node, index: i2 });
      var u2 = { i: a2, realIndex: i2, animationDelay: a2, initialSpeed: r2.config.chart.animations.speed, dataChangeSpeed: r2.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(e2) };
      if ("area" === e2) for (var f2 = n2.fillPath({ seriesNumber: i2 }), p2 = 0; p2 < s2.areaPaths.length; p2++) {
        var x2 = o2.renderPaths(g(g({}, u2), {}, { pathFrom: s2.pathFromArea, pathTo: s2.areaPaths[p2], stroke: "none", strokeWidth: 0, strokeLineCap: null, fill: f2 }));
        this.elSeries.add(x2);
      }
      if (r2.config.stroke.show && !this.pointsChart) {
        var b2 = null;
        if ("line" === e2) b2 = n2.fillPath({ seriesNumber: i2, i: a2 });
        else if ("solid" === r2.config.stroke.fill.type) b2 = r2.globals.stroke.colors[i2];
        else {
          var v2 = r2.config.fill;
          r2.config.fill = r2.config.stroke.fill, b2 = n2.fillPath({ seriesNumber: i2, i: a2 }), r2.config.fill = v2;
        }
        for (var m2 = 0; m2 < s2.linePaths.length; m2++) {
          var y2 = b2;
          "rangeArea" === e2 && (y2 = n2.fillPath({ seriesNumber: i2 }));
          var w2 = g(g({}, u2), {}, { pathFrom: s2.pathFromLine, pathTo: s2.linePaths[m2], stroke: b2, strokeWidth: this.strokeWidth, strokeLineCap: r2.config.stroke.lineCap, fill: "rangeArea" === e2 ? y2 : "none" }), A2 = o2.renderPaths(w2);
          if (this.elSeries.add(A2), A2.attr("fill-rule", "evenodd"), l2.count > 0 && "rangeArea" !== e2) {
            var S2 = o2.renderPaths(w2);
            S2.node.setAttribute("stroke-dasharray", l2.dashArray), l2.strokeWidth && S2.node.setAttribute("stroke-width", l2.strokeWidth), this.elSeries.add(S2), S2.attr("clip-path", "url(#forecastMask".concat(r2.globals.cuid, ")")), A2.attr("clip-path", "url(#nonForecastMask".concat(r2.globals.cuid, ")"));
          }
        }
      }
    } }, { key: "_iterateOverDataPoints", value: function(t3) {
      var e2, i2, a2 = this, s2 = t3.type, r2 = t3.series, o2 = t3.iterations, n2 = t3.realIndex, l2 = t3.translationsIndex, h2 = t3.i, c2 = t3.x, d2 = t3.y, g2 = t3.pX, u2 = t3.pY, f2 = t3.pathsFrom, p2 = t3.linePaths, x2 = t3.areaPaths, b2 = t3.seriesIndex, v2 = t3.lineYPosition, y2 = t3.xArrj, w2 = t3.yArrj, A2 = t3.y2Arrj, S2 = t3.isRangeStart, C2 = t3.seriesRangeEnd, L2 = this.w, P2 = new k(this.ctx), M2 = this.yRatio, I2 = f2.prevY, T2 = f2.linePath, z2 = f2.areaPath, X2 = f2.pathFromLine, E2 = f2.pathFromArea, Y2 = m.isNumber(L2.globals.minYArr[n2]) ? L2.globals.minYArr[n2] : L2.globals.minY;
      o2 || (o2 = L2.globals.dataPoints > 1 ? L2.globals.dataPoints - 1 : L2.globals.dataPoints);
      var R2 = function(t4, e3) {
        return e3 - t4 / M2[l2] + 2 * (a2.isReversed ? t4 / M2[l2] : 0);
      }, F2 = d2, D2 = L2.config.chart.stacked && !L2.globals.comboCharts || L2.config.chart.stacked && L2.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || "bar" === (null === (e2 = this.w.config.series[n2]) || void 0 === e2 ? void 0 : e2.type) || "column" === (null === (i2 = this.w.config.series[n2]) || void 0 === i2 ? void 0 : i2.type)), H2 = L2.config.stroke.curve;
      Array.isArray(H2) && (H2 = Array.isArray(b2) ? H2[b2[h2]] : H2[h2]);
      for (var O2, N2 = 0, W2 = 0; W2 < o2; W2++) {
        var B2 = void 0 === r2[h2][W2 + 1] || null === r2[h2][W2 + 1];
        if (L2.globals.isXNumeric) {
          var G2 = L2.globals.seriesX[n2][W2 + 1];
          void 0 === L2.globals.seriesX[n2][W2 + 1] && (G2 = L2.globals.seriesX[n2][o2 - 1]), c2 = (G2 - L2.globals.minX) / this.xRatio;
        } else c2 += this.xDivision;
        if (D2) if (h2 > 0 && L2.globals.collapsedSeries.length < L2.config.series.length - 1) {
          v2 = this.prevSeriesY[function(t4) {
            for (var e3 = t4; e3 > 0; e3--) {
              if (!(L2.globals.collapsedSeriesIndices.indexOf((null == b2 ? void 0 : b2[e3]) || e3) > -1)) return e3;
              e3--;
            }
            return 0;
          }(h2 - 1)][W2 + 1];
        } else v2 = this.zeroY;
        else v2 = this.zeroY;
        B2 ? d2 = R2(Y2, v2) : (d2 = R2(r2[h2][W2 + 1], v2), "rangeArea" === s2 && (F2 = R2(C2[h2][W2 + 1], v2))), y2.push(c2), !B2 || "smooth" !== L2.config.stroke.curve && "monotoneCubic" !== L2.config.stroke.curve ? (w2.push(d2), A2.push(F2)) : (w2.push(null), A2.push(null));
        var V2 = this.lineHelpers.calculatePoints({ series: r2, x: c2, y: d2, realIndex: n2, i: h2, j: W2, prevY: I2 }), j2 = this._createPaths({ type: s2, series: r2, i: h2, realIndex: n2, j: W2, x: c2, y: d2, y2: F2, xArrj: y2, yArrj: w2, y2Arrj: A2, pX: g2, pY: u2, pathState: N2, segmentStartX: O2, linePath: T2, areaPath: z2, linePaths: p2, areaPaths: x2, curve: H2, isRangeStart: S2 });
        x2 = j2.areaPaths, p2 = j2.linePaths, g2 = j2.pX, u2 = j2.pY, N2 = j2.pathState, O2 = j2.segmentStartX, z2 = j2.areaPath, T2 = j2.linePath, !this.appendPathFrom || "monotoneCubic" === H2 && "rangeArea" === s2 || (X2 += P2.line(c2, this.zeroY), E2 += P2.line(c2, this.zeroY)), this.handleNullDataPoints(r2, V2, h2, W2, n2), this._handleMarkersAndLabels({ type: s2, pointsPos: V2, i: h2, j: W2, realIndex: n2, isRangeStart: S2 });
      }
      return { yArrj: w2, xArrj: y2, pathFromArea: E2, areaPaths: x2, pathFromLine: X2, linePaths: p2, linePath: T2, areaPath: z2 };
    } }, { key: "_handleMarkersAndLabels", value: function(t3) {
      var e2 = t3.type, i2 = t3.pointsPos, a2 = t3.isRangeStart, s2 = t3.i, r2 = t3.j, o2 = t3.realIndex, n2 = this.w, l2 = new G(this.ctx);
      if (this.pointsChart) this.scatter.draw(this.elSeries, r2, { realIndex: o2, pointsPos: i2, zRatio: this.zRatio, elParent: this.elPointsMain });
      else {
        n2.globals.series[s2].length > 1 && this.elPointsMain.node.classList.add("apexcharts-element-hidden");
        var h2 = this.markers.plotChartMarkers(i2, o2, r2 + 1);
        null !== h2 && this.elPointsMain.add(h2);
      }
      var c2 = l2.drawDataLabel({ type: e2, isRangeStart: a2, pos: i2, i: o2, j: r2 + 1 });
      null !== c2 && this.elDataLabelsWrap.add(c2);
    } }, { key: "_createPaths", value: function(t3) {
      var e2 = t3.type, i2 = t3.series, a2 = t3.i;
      t3.realIndex;
      var s2, r2 = t3.j, o2 = t3.x, n2 = t3.y, l2 = t3.xArrj, h2 = t3.yArrj, c2 = t3.y2, d2 = t3.y2Arrj, g2 = t3.pX, u2 = t3.pY, f2 = t3.pathState, p2 = t3.segmentStartX, x2 = t3.linePath, b2 = t3.areaPath, v2 = t3.linePaths, m2 = t3.areaPaths, y2 = t3.curve, w2 = t3.isRangeStart, A2 = new k(this.ctx), S2 = this.areaBottomY, C2 = "rangeArea" === e2, L2 = "rangeArea" === e2 && w2;
      switch (y2) {
        case "monotoneCubic":
          var P2 = w2 ? h2 : d2;
          switch (f2) {
            case 0:
              if (null === P2[r2 + 1]) break;
              f2 = 1;
            case 1:
              if (!(C2 ? l2.length === i2[a2].length : r2 === i2[a2].length - 2)) break;
            case 2:
              var M2 = w2 ? l2 : l2.slice().reverse(), I2 = w2 ? P2 : P2.slice().reverse(), T2 = (s2 = I2, M2.map(function(t4, e3) {
                return [t4, s2[e3]];
              }).filter(function(t4) {
                return null !== t4[1];
              })), z2 = T2.length > 1 ? Ft(T2) : T2, X2 = [];
              C2 && (L2 ? m2 = T2 : X2 = m2.reverse());
              var E2 = 0, Y2 = 0;
              if (function(t4, e3) {
                for (var i3 = function(t5) {
                  var e4 = [], i4 = 0;
                  return t5.forEach(function(t6) {
                    null !== t6 ? i4++ : i4 > 0 && (e4.push(i4), i4 = 0);
                  }), i4 > 0 && e4.push(i4), e4;
                }(t4), a3 = [], s3 = 0, r3 = 0; s3 < i3.length; r3 += i3[s3++]) a3[s3] = Dt(e3, r3, r3 + i3[s3]);
                return a3;
              }(I2, z2).forEach(function(t4) {
                E2++;
                var e3 = function(t5) {
                  for (var e4 = "", i4 = 0; i4 < t5.length; i4++) {
                    var a4 = t5[i4], s3 = a4.length;
                    s3 > 4 ? (e4 += "C".concat(a4[0], ", ").concat(a4[1]), e4 += ", ".concat(a4[2], ", ").concat(a4[3]), e4 += ", ".concat(a4[4], ", ").concat(a4[5])) : s3 > 2 && (e4 += "S".concat(a4[0], ", ").concat(a4[1]), e4 += ", ".concat(a4[2], ", ").concat(a4[3]));
                  }
                  return e4;
                }(t4), i3 = Y2, a3 = (Y2 += t4.length) - 1;
                L2 ? x2 = A2.move(T2[i3][0], T2[i3][1]) + e3 : C2 ? x2 = A2.move(X2[i3][0], X2[i3][1]) + A2.line(T2[i3][0], T2[i3][1]) + e3 + A2.line(X2[a3][0], X2[a3][1]) : (x2 = A2.move(T2[i3][0], T2[i3][1]) + e3, b2 = x2 + A2.line(T2[a3][0], S2) + A2.line(T2[i3][0], S2) + "z", m2.push(b2)), v2.push(x2);
              }), C2 && E2 > 1 && !L2) {
                var R2 = v2.slice(E2).reverse();
                v2.splice(E2), R2.forEach(function(t4) {
                  return v2.push(t4);
                });
              }
              f2 = 0;
          }
          break;
        case "smooth":
          var F2 = 0.35 * (o2 - g2);
          if (null === i2[a2][r2]) f2 = 0;
          else switch (f2) {
            case 0:
              if (p2 = g2, x2 = L2 ? A2.move(g2, d2[r2]) + A2.line(g2, u2) : A2.move(g2, u2), b2 = A2.move(g2, u2), null === i2[a2][r2 + 1]) {
                v2.push(x2), m2.push(b2);
                break;
              }
              if (f2 = 1, r2 < i2[a2].length - 2) {
                var D2 = A2.curve(g2 + F2, u2, o2 - F2, n2, o2, n2);
                x2 += D2, b2 += D2;
                break;
              }
            case 1:
              if (null === i2[a2][r2 + 1]) x2 += L2 ? A2.line(g2, c2) : A2.move(g2, u2), b2 += A2.line(g2, S2) + A2.line(p2, S2) + "z", v2.push(x2), m2.push(b2), f2 = -1;
              else {
                var H2 = A2.curve(g2 + F2, u2, o2 - F2, n2, o2, n2);
                x2 += H2, b2 += H2, r2 >= i2[a2].length - 2 && (L2 && (x2 += A2.curve(o2, n2, o2, n2, o2, c2) + A2.move(o2, c2)), b2 += A2.curve(o2, n2, o2, n2, o2, S2) + A2.line(p2, S2) + "z", v2.push(x2), m2.push(b2), f2 = -1);
              }
          }
          g2 = o2, u2 = n2;
          break;
        default:
          var O2 = function(t4, e3, i3) {
            var a3 = [];
            switch (t4) {
              case "stepline":
                a3 = A2.line(e3, null, "H") + A2.line(null, i3, "V");
                break;
              case "linestep":
                a3 = A2.line(null, i3, "V") + A2.line(e3, null, "H");
                break;
              case "straight":
                a3 = A2.line(e3, i3);
            }
            return a3;
          };
          if (null === i2[a2][r2]) f2 = 0;
          else switch (f2) {
            case 0:
              if (p2 = g2, x2 = L2 ? A2.move(g2, d2[r2]) + A2.line(g2, u2) : A2.move(g2, u2), b2 = A2.move(g2, u2), null === i2[a2][r2 + 1]) {
                v2.push(x2), m2.push(b2);
                break;
              }
              if (f2 = 1, r2 < i2[a2].length - 2) {
                var N2 = O2(y2, o2, n2);
                x2 += N2, b2 += N2;
                break;
              }
            case 1:
              if (null === i2[a2][r2 + 1]) x2 += L2 ? A2.line(g2, c2) : A2.move(g2, u2), b2 += A2.line(g2, S2) + A2.line(p2, S2) + "z", v2.push(x2), m2.push(b2), f2 = -1;
              else {
                var W2 = O2(y2, o2, n2);
                x2 += W2, b2 += W2, r2 >= i2[a2].length - 2 && (L2 && (x2 += A2.line(o2, c2)), b2 += A2.line(o2, S2) + A2.line(p2, S2) + "z", v2.push(x2), m2.push(b2), f2 = -1);
              }
          }
          g2 = o2, u2 = n2;
      }
      return { linePaths: v2, areaPaths: m2, pX: g2, pY: u2, pathState: f2, segmentStartX: p2, linePath: x2, areaPath: b2 };
    } }, { key: "handleNullDataPoints", value: function(t3, e2, i2, a2, s2) {
      var r2 = this.w;
      if (null === t3[i2][a2] && r2.config.markers.showNullDataPoints || 1 === t3[i2].length) {
        var o2 = this.strokeWidth - r2.config.markers.strokeWidth / 2;
        o2 > 0 || (o2 = 0);
        var n2 = this.markers.plotChartMarkers(e2, s2, a2 + 1, o2, true);
        null !== n2 && this.elPointsMain.add(n2);
      }
    } }]), t2;
  }();
  window.TreemapSquared = {}, window.TreemapSquared.generate = /* @__PURE__ */ function() {
    function t2(e3, i3, a3, s3) {
      this.xoffset = e3, this.yoffset = i3, this.height = s3, this.width = a3, this.shortestEdge = function() {
        return Math.min(this.height, this.width);
      }, this.getCoordinates = function(t3) {
        var e4, i4 = [], a4 = this.xoffset, s4 = this.yoffset, o3 = r2(t3) / this.height, n2 = r2(t3) / this.width;
        if (this.width >= this.height) for (e4 = 0; e4 < t3.length; e4++) i4.push([a4, s4, a4 + o3, s4 + t3[e4] / o3]), s4 += t3[e4] / o3;
        else for (e4 = 0; e4 < t3.length; e4++) i4.push([a4, s4, a4 + t3[e4] / n2, s4 + n2]), a4 += t3[e4] / n2;
        return i4;
      }, this.cutArea = function(e4) {
        var i4;
        if (this.width >= this.height) {
          var a4 = e4 / this.height, s4 = this.width - a4;
          i4 = new t2(this.xoffset + a4, this.yoffset, s4, this.height);
        } else {
          var r3 = e4 / this.width, o3 = this.height - r3;
          i4 = new t2(this.xoffset, this.yoffset + r3, this.width, o3);
        }
        return i4;
      };
    }
    function e2(e3, a3, s3, o3, n2) {
      o3 = void 0 === o3 ? 0 : o3, n2 = void 0 === n2 ? 0 : n2;
      var l2 = i2(function(t3, e4) {
        var i3, a4 = [], s4 = e4 / r2(t3);
        for (i3 = 0; i3 < t3.length; i3++) a4[i3] = t3[i3] * s4;
        return a4;
      }(e3, a3 * s3), [], new t2(o3, n2, a3, s3), []);
      return function(t3) {
        var e4, i3, a4 = [];
        for (e4 = 0; e4 < t3.length; e4++) for (i3 = 0; i3 < t3[e4].length; i3++) a4.push(t3[e4][i3]);
        return a4;
      }(l2);
    }
    function i2(t3, e3, s3, o3) {
      var n2, l2, h2;
      if (0 !== t3.length) return n2 = s3.shortestEdge(), function(t4, e4, i3) {
        var s4;
        if (0 === t4.length) return true;
        (s4 = t4.slice()).push(e4);
        var r3 = a2(t4, i3), o4 = a2(s4, i3);
        return r3 >= o4;
      }(e3, l2 = t3[0], n2) ? (e3.push(l2), i2(t3.slice(1), e3, s3, o3)) : (h2 = s3.cutArea(r2(e3), o3), o3.push(s3.getCoordinates(e3)), i2(t3, [], h2, o3)), o3;
      o3.push(s3.getCoordinates(e3));
    }
    function a2(t3, e3) {
      var i3 = Math.min.apply(Math, t3), a3 = Math.max.apply(Math, t3), s3 = r2(t3);
      return Math.max(Math.pow(e3, 2) * a3 / Math.pow(s3, 2), Math.pow(s3, 2) / (Math.pow(e3, 2) * i3));
    }
    function s2(t3) {
      return t3 && t3.constructor === Array;
    }
    function r2(t3) {
      var e3, i3 = 0;
      for (e3 = 0; e3 < t3.length; e3++) i3 += t3[e3];
      return i3;
    }
    function o2(t3) {
      var e3, i3 = 0;
      if (s2(t3[0])) for (e3 = 0; e3 < t3.length; e3++) i3 += o2(t3[e3]);
      else i3 = r2(t3);
      return i3;
    }
    return function t3(i3, a3, r3, n2, l2) {
      n2 = void 0 === n2 ? 0 : n2, l2 = void 0 === l2 ? 0 : l2;
      var h2, c2, d2 = [], g2 = [];
      if (s2(i3[0])) {
        for (c2 = 0; c2 < i3.length; c2++) d2[c2] = o2(i3[c2]);
        for (h2 = e2(d2, a3, r3, n2, l2), c2 = 0; c2 < i3.length; c2++) g2.push(t3(i3[c2], h2[c2][2] - h2[c2][0], h2[c2][3] - h2[c2][1], h2[c2][0], h2[c2][1]));
      } else g2 = e2(i3, a3, r3, n2, l2);
      return g2;
    };
  }();
  var Nt, Wt, Bt = function() {
    function t2(e2, a2) {
      i(this, t2), this.ctx = e2, this.w = e2.w, this.strokeWidth = this.w.config.stroke.width, this.helpers = new Pt(e2), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = [];
    }
    return s(t2, [{ key: "draw", value: function(t3) {
      var e2 = this, i2 = this.w, a2 = new k(this.ctx), s2 = new N(this.ctx), r2 = a2.group({ class: "apexcharts-treemap" });
      if (i2.globals.noData) return r2;
      var o2 = [];
      return t3.forEach(function(t4) {
        var e3 = t4.map(function(t5) {
          return Math.abs(t5);
        });
        o2.push(e3);
      }), this.negRange = this.helpers.checkColorRange(), i2.config.series.forEach(function(t4, i3) {
        t4.data.forEach(function(t5) {
          Array.isArray(e2.labels[i3]) || (e2.labels[i3] = []), e2.labels[i3].push(t5.x);
        });
      }), window.TreemapSquared.generate(o2, i2.globals.gridWidth, i2.globals.gridHeight).forEach(function(o3, n2) {
        var l2 = a2.group({ class: "apexcharts-series apexcharts-treemap-series", seriesName: m.escapeString(i2.globals.seriesNames[n2]), rel: n2 + 1, "data:realIndex": n2 });
        if (i2.config.chart.dropShadow.enabled) {
          var h2 = i2.config.chart.dropShadow;
          new w(e2.ctx).dropShadow(r2, h2, n2);
        }
        var c2 = a2.group({ class: "apexcharts-data-labels" });
        o3.forEach(function(r3, o4) {
          var h3 = r3[0], c3 = r3[1], d2 = r3[2], g2 = r3[3], u2 = a2.drawRect(h3, c3, d2 - h3, g2 - c3, i2.config.plotOptions.treemap.borderRadius, "#fff", 1, e2.strokeWidth, i2.config.plotOptions.treemap.useFillColorAsStroke ? p2 : i2.globals.stroke.colors[n2]);
          u2.attr({ cx: h3, cy: c3, index: n2, i: n2, j: o4, width: d2 - h3, height: g2 - c3 });
          var f2 = e2.helpers.getShadeColor(i2.config.chart.type, n2, o4, e2.negRange), p2 = f2.color;
          void 0 !== i2.config.series[n2].data[o4] && i2.config.series[n2].data[o4].fillColor && (p2 = i2.config.series[n2].data[o4].fillColor);
          var x2 = s2.fillPath({ color: p2, seriesNumber: n2, dataPointIndex: o4 });
          u2.node.classList.add("apexcharts-treemap-rect"), u2.attr({ fill: x2 }), e2.helpers.addListeners(u2);
          var b2 = { x: h3 + (d2 - h3) / 2, y: c3 + (g2 - c3) / 2, width: 0, height: 0 }, v2 = { x: h3, y: c3, width: d2 - h3, height: g2 - c3 };
          if (i2.config.chart.animations.enabled && !i2.globals.dataChanged) {
            var m2 = 1;
            i2.globals.resized || (m2 = i2.config.chart.animations.speed), e2.animateTreemap(u2, b2, v2, m2);
          }
          if (i2.globals.dataChanged) {
            var y2 = 1;
            e2.dynamicAnim.enabled && i2.globals.shouldAnimate && (y2 = e2.dynamicAnim.speed, i2.globals.previousPaths[n2] && i2.globals.previousPaths[n2][o4] && i2.globals.previousPaths[n2][o4].rect && (b2 = i2.globals.previousPaths[n2][o4].rect), e2.animateTreemap(u2, b2, v2, y2));
          }
          var w2 = e2.getFontSize(r3), k2 = i2.config.dataLabels.formatter(e2.labels[n2][o4], { value: i2.globals.series[n2][o4], seriesIndex: n2, dataPointIndex: o4, w: i2 });
          "truncate" === i2.config.plotOptions.treemap.dataLabels.format && (w2 = parseInt(i2.config.dataLabels.style.fontSize, 10), k2 = e2.truncateLabels(k2, w2, h3, c3, d2, g2));
          var A2 = null;
          i2.globals.series[n2][o4] && (A2 = e2.helpers.calculateDataLabels({ text: k2, x: (h3 + d2) / 2, y: (c3 + g2) / 2 + e2.strokeWidth / 2 + w2 / 3, i: n2, j: o4, colorProps: f2, fontSize: w2, series: t3 })), i2.config.dataLabels.enabled && A2 && e2.rotateToFitLabel(A2, w2, k2, h3, c3, d2, g2), l2.add(u2), null !== A2 && l2.add(A2);
        }), l2.add(c2), r2.add(l2);
      }), r2;
    } }, { key: "getFontSize", value: function(t3) {
      var e2 = this.w;
      var i2, a2, s2, r2, o2 = function t4(e3) {
        var i3, a3 = 0;
        if (Array.isArray(e3[0])) for (i3 = 0; i3 < e3.length; i3++) a3 += t4(e3[i3]);
        else for (i3 = 0; i3 < e3.length; i3++) a3 += e3[i3].length;
        return a3;
      }(this.labels) / function t4(e3) {
        var i3, a3 = 0;
        if (Array.isArray(e3[0])) for (i3 = 0; i3 < e3.length; i3++) a3 += t4(e3[i3]);
        else for (i3 = 0; i3 < e3.length; i3++) a3 += 1;
        return a3;
      }(this.labels);
      return i2 = t3[2] - t3[0], a2 = t3[3] - t3[1], s2 = i2 * a2, r2 = Math.pow(s2, 0.5), Math.min(r2 / o2, parseInt(e2.config.dataLabels.style.fontSize, 10));
    } }, { key: "rotateToFitLabel", value: function(t3, e2, i2, a2, s2, r2, o2) {
      var n2 = new k(this.ctx), l2 = n2.getTextRects(i2, e2);
      if (l2.width + this.w.config.stroke.width + 5 > r2 - a2 && l2.width <= o2 - s2) {
        var h2 = n2.rotateAroundCenter(t3.node);
        t3.node.setAttribute("transform", "rotate(-90 ".concat(h2.x, " ").concat(h2.y, ") translate(").concat(l2.height / 3, ")"));
      }
    } }, { key: "truncateLabels", value: function(t3, e2, i2, a2, s2, r2) {
      var o2 = new k(this.ctx), n2 = o2.getTextRects(t3, e2).width + this.w.config.stroke.width + 5 > s2 - i2 && r2 - a2 > s2 - i2 ? r2 - a2 : s2 - i2, l2 = o2.getTextBasedOnMaxWidth({ text: t3, maxWidth: n2, fontSize: e2 });
      return t3.length !== l2.length && n2 / e2 < 5 ? "" : l2;
    } }, { key: "animateTreemap", value: function(t3, e2, i2, a2) {
      var s2 = new y(this.ctx);
      s2.animateRect(t3, { x: e2.x, y: e2.y, width: e2.width, height: e2.height }, { x: i2.x, y: i2.y, width: i2.width, height: i2.height }, a2, function() {
        s2.animationCompleted(t3);
      });
    } }]), t2;
  }(), Gt = 86400, Vt = 10 / Gt, jt = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC;
    }
    return s(t2, [{ key: "calculateTimeScaleTicks", value: function(t3, e2) {
      var i2 = this, a2 = this.w;
      if (a2.globals.allSeriesCollapsed) return a2.globals.labels = [], a2.globals.timescaleLabels = [], [];
      var s2 = new L(this.ctx), r2 = (e2 - t3) / 864e5;
      this.determineInterval(r2), a2.globals.disableZoomIn = false, a2.globals.disableZoomOut = false, r2 < Vt ? a2.globals.disableZoomIn = true : r2 > 5e4 && (a2.globals.disableZoomOut = true);
      var o2 = s2.getTimeUnitsfromTimestamp(t3, e2, this.utc), n2 = a2.globals.gridWidth / r2, l2 = n2 / 24, h2 = l2 / 60, c2 = h2 / 60, d2 = Math.floor(24 * r2), u2 = Math.floor(1440 * r2), f2 = Math.floor(r2 * Gt), p2 = Math.floor(r2), x2 = Math.floor(r2 / 30), b2 = Math.floor(r2 / 365), v2 = { minMillisecond: o2.minMillisecond, minSecond: o2.minSecond, minMinute: o2.minMinute, minHour: o2.minHour, minDate: o2.minDate, minMonth: o2.minMonth, minYear: o2.minYear }, m2 = { firstVal: v2, currentMillisecond: v2.minMillisecond, currentSecond: v2.minSecond, currentMinute: v2.minMinute, currentHour: v2.minHour, currentMonthDate: v2.minDate, currentDate: v2.minDate, currentMonth: v2.minMonth, currentYear: v2.minYear, daysWidthOnXAxis: n2, hoursWidthOnXAxis: l2, minutesWidthOnXAxis: h2, secondsWidthOnXAxis: c2, numberOfSeconds: f2, numberOfMinutes: u2, numberOfHours: d2, numberOfDays: p2, numberOfMonths: x2, numberOfYears: b2 };
      switch (this.tickInterval) {
        case "years":
          this.generateYearScale(m2);
          break;
        case "months":
        case "half_year":
          this.generateMonthScale(m2);
          break;
        case "months_days":
        case "months_fortnight":
        case "days":
        case "week_days":
          this.generateDayScale(m2);
          break;
        case "hours":
          this.generateHourScale(m2);
          break;
        case "minutes_fives":
        case "minutes":
          this.generateMinuteScale(m2);
          break;
        case "seconds_tens":
        case "seconds_fives":
        case "seconds":
          this.generateSecondScale(m2);
      }
      var y2 = this.timeScaleArray.map(function(t4) {
        var e3 = { position: t4.position, unit: t4.unit, year: t4.year, day: t4.day ? t4.day : 1, hour: t4.hour ? t4.hour : 0, month: t4.month + 1 };
        return "month" === t4.unit ? g(g({}, e3), {}, { day: 1, value: t4.value + 1 }) : "day" === t4.unit || "hour" === t4.unit ? g(g({}, e3), {}, { value: t4.value }) : "minute" === t4.unit ? g(g({}, e3), {}, { value: t4.value, minute: t4.value }) : "second" === t4.unit ? g(g({}, e3), {}, { value: t4.value, minute: t4.minute, second: t4.second }) : t4;
      });
      return y2.filter(function(t4) {
        var e3 = 1, s3 = Math.ceil(a2.globals.gridWidth / 120), r3 = t4.value;
        void 0 !== a2.config.xaxis.tickAmount && (s3 = a2.config.xaxis.tickAmount), y2.length > s3 && (e3 = Math.floor(y2.length / s3));
        var o3 = false, n3 = false;
        switch (i2.tickInterval) {
          case "years":
            "year" === t4.unit && (o3 = true);
            break;
          case "half_year":
            e3 = 7, "year" === t4.unit && (o3 = true);
            break;
          case "months":
            e3 = 1, "year" === t4.unit && (o3 = true);
            break;
          case "months_fortnight":
            e3 = 15, "year" !== t4.unit && "month" !== t4.unit || (o3 = true), 30 === r3 && (n3 = true);
            break;
          case "months_days":
            e3 = 10, "month" === t4.unit && (o3 = true), 30 === r3 && (n3 = true);
            break;
          case "week_days":
            e3 = 8, "month" === t4.unit && (o3 = true);
            break;
          case "days":
            e3 = 1, "month" === t4.unit && (o3 = true);
            break;
          case "hours":
            "day" === t4.unit && (o3 = true);
            break;
          case "minutes_fives":
          case "seconds_fives":
            r3 % 5 != 0 && (n3 = true);
            break;
          case "seconds_tens":
            r3 % 10 != 0 && (n3 = true);
        }
        if ("hours" === i2.tickInterval || "minutes_fives" === i2.tickInterval || "seconds_tens" === i2.tickInterval || "seconds_fives" === i2.tickInterval) {
          if (!n3) return true;
        } else if ((r3 % e3 == 0 || o3) && !n3) return true;
      });
    } }, { key: "recalcDimensionsBasedOnFormat", value: function(t3, e2) {
      var i2 = this.w, a2 = this.formatDates(t3), s2 = this.removeOverlappingTS(a2);
      i2.globals.timescaleLabels = s2.slice(), new ct(this.ctx).plotCoords();
    } }, { key: "determineInterval", value: function(t3) {
      var e2 = 24 * t3, i2 = 60 * e2;
      switch (true) {
        case t3 / 365 > 5:
          this.tickInterval = "years";
          break;
        case t3 > 800:
          this.tickInterval = "half_year";
          break;
        case t3 > 180:
          this.tickInterval = "months";
          break;
        case t3 > 90:
          this.tickInterval = "months_fortnight";
          break;
        case t3 > 60:
          this.tickInterval = "months_days";
          break;
        case t3 > 30:
          this.tickInterval = "week_days";
          break;
        case t3 > 2:
          this.tickInterval = "days";
          break;
        case e2 > 2.4:
          this.tickInterval = "hours";
          break;
        case i2 > 15:
          this.tickInterval = "minutes_fives";
          break;
        case i2 > 5:
          this.tickInterval = "minutes";
          break;
        case i2 > 1:
          this.tickInterval = "seconds_tens";
          break;
        case 60 * i2 > 20:
          this.tickInterval = "seconds_fives";
          break;
        default:
          this.tickInterval = "seconds";
      }
    } }, { key: "generateYearScale", value: function(t3) {
      var e2 = t3.firstVal, i2 = t3.currentMonth, a2 = t3.currentYear, s2 = t3.daysWidthOnXAxis, r2 = t3.numberOfYears, o2 = e2.minYear, n2 = 0, l2 = new L(this.ctx), h2 = "year";
      if (e2.minDate > 1 || e2.minMonth > 0) {
        var c2 = l2.determineRemainingDaysOfYear(e2.minYear, e2.minMonth, e2.minDate);
        n2 = (l2.determineDaysOfYear(e2.minYear) - c2 + 1) * s2, o2 = e2.minYear + 1, this.timeScaleArray.push({ position: n2, value: o2, unit: h2, year: o2, month: m.monthMod(i2 + 1) });
      } else 1 === e2.minDate && 0 === e2.minMonth && this.timeScaleArray.push({ position: n2, value: o2, unit: h2, year: a2, month: m.monthMod(i2 + 1) });
      for (var d2 = o2, g2 = n2, u2 = 0; u2 < r2; u2++) d2++, g2 = l2.determineDaysOfYear(d2 - 1) * s2 + g2, this.timeScaleArray.push({ position: g2, value: d2, unit: h2, year: d2, month: 1 });
    } }, { key: "generateMonthScale", value: function(t3) {
      var e2 = t3.firstVal, i2 = t3.currentMonthDate, a2 = t3.currentMonth, s2 = t3.currentYear, r2 = t3.daysWidthOnXAxis, o2 = t3.numberOfMonths, n2 = a2, l2 = 0, h2 = new L(this.ctx), c2 = "month", d2 = 0;
      if (e2.minDate > 1) {
        l2 = (h2.determineDaysOfMonths(a2 + 1, e2.minYear) - i2 + 1) * r2, n2 = m.monthMod(a2 + 1);
        var g2 = s2 + d2, u2 = m.monthMod(n2), f2 = n2;
        0 === n2 && (c2 = "year", f2 = g2, u2 = 1, g2 += d2 += 1), this.timeScaleArray.push({ position: l2, value: f2, unit: c2, year: g2, month: u2 });
      } else this.timeScaleArray.push({ position: l2, value: n2, unit: c2, year: s2, month: m.monthMod(a2) });
      for (var p2 = n2 + 1, x2 = l2, b2 = 0, v2 = 1; b2 < o2; b2++, v2++) {
        0 === (p2 = m.monthMod(p2)) ? (c2 = "year", d2 += 1) : c2 = "month";
        var y2 = this._getYear(s2, p2, d2);
        x2 = h2.determineDaysOfMonths(p2, y2) * r2 + x2;
        var w2 = 0 === p2 ? y2 : p2;
        this.timeScaleArray.push({ position: x2, value: w2, unit: c2, year: y2, month: 0 === p2 ? 1 : p2 }), p2++;
      }
    } }, { key: "generateDayScale", value: function(t3) {
      var e2 = t3.firstVal, i2 = t3.currentMonth, a2 = t3.currentYear, s2 = t3.hoursWidthOnXAxis, r2 = t3.numberOfDays, o2 = new L(this.ctx), n2 = "day", l2 = e2.minDate + 1, h2 = l2, c2 = function(t4, e3, i3) {
        return t4 > o2.determineDaysOfMonths(e3 + 1, i3) ? (h2 = 1, n2 = "month", g2 = e3 += 1, e3) : e3;
      }, d2 = (24 - e2.minHour) * s2, g2 = l2, u2 = c2(h2, i2, a2);
      0 === e2.minHour && 1 === e2.minDate ? (d2 = 0, g2 = m.monthMod(e2.minMonth), n2 = "month", h2 = e2.minDate) : 1 !== e2.minDate && 0 === e2.minHour && 0 === e2.minMinute && (d2 = 0, l2 = e2.minDate, g2 = l2, u2 = c2(h2 = l2, i2, a2)), this.timeScaleArray.push({ position: d2, value: g2, unit: n2, year: this._getYear(a2, u2, 0), month: m.monthMod(u2), day: h2 });
      for (var f2 = d2, p2 = 0; p2 < r2; p2++) {
        n2 = "day", u2 = c2(h2 += 1, u2, this._getYear(a2, u2, 0));
        var x2 = this._getYear(a2, u2, 0);
        f2 = 24 * s2 + f2;
        var b2 = 1 === h2 ? m.monthMod(u2) : h2;
        this.timeScaleArray.push({ position: f2, value: b2, unit: n2, year: x2, month: m.monthMod(u2), day: b2 });
      }
    } }, { key: "generateHourScale", value: function(t3) {
      var e2 = t3.firstVal, i2 = t3.currentDate, a2 = t3.currentMonth, s2 = t3.currentYear, r2 = t3.minutesWidthOnXAxis, o2 = t3.numberOfHours, n2 = new L(this.ctx), l2 = "hour", h2 = function(t4, e3) {
        return t4 > n2.determineDaysOfMonths(e3 + 1, s2) && (p2 = 1, e3 += 1), { month: e3, date: p2 };
      }, c2 = function(t4, e3) {
        return t4 > n2.determineDaysOfMonths(e3 + 1, s2) ? e3 += 1 : e3;
      }, d2 = 60 - (e2.minMinute + e2.minSecond / 60), g2 = d2 * r2, u2 = e2.minHour + 1, f2 = u2;
      60 === d2 && (g2 = 0, f2 = u2 = e2.minHour);
      var p2 = i2;
      f2 >= 24 && (f2 = 0, p2 += 1, l2 = "day");
      var x2 = h2(p2, a2).month;
      x2 = c2(p2, x2), this.timeScaleArray.push({ position: g2, value: u2, unit: l2, day: p2, hour: f2, year: s2, month: m.monthMod(x2) }), f2++;
      for (var b2 = g2, v2 = 0; v2 < o2; v2++) {
        if (l2 = "hour", f2 >= 24) f2 = 0, l2 = "day", x2 = h2(p2 += 1, x2).month, x2 = c2(p2, x2);
        var y2 = this._getYear(s2, x2, 0);
        b2 = 60 * r2 + b2;
        var w2 = 0 === f2 ? p2 : f2;
        this.timeScaleArray.push({ position: b2, value: w2, unit: l2, hour: f2, day: p2, year: y2, month: m.monthMod(x2) }), f2++;
      }
    } }, { key: "generateMinuteScale", value: function(t3) {
      for (var e2 = t3.currentMillisecond, i2 = t3.currentSecond, a2 = t3.currentMinute, s2 = t3.currentHour, r2 = t3.currentDate, o2 = t3.currentMonth, n2 = t3.currentYear, l2 = t3.minutesWidthOnXAxis, h2 = t3.secondsWidthOnXAxis, c2 = t3.numberOfMinutes, d2 = a2 + 1, g2 = r2, u2 = o2, f2 = n2, p2 = s2, x2 = (60 - i2 - e2 / 1e3) * h2, b2 = 0; b2 < c2; b2++) d2 >= 60 && (d2 = 0, 24 === (p2 += 1) && (p2 = 0)), this.timeScaleArray.push({ position: x2, value: d2, unit: "minute", hour: p2, minute: d2, day: g2, year: this._getYear(f2, u2, 0), month: m.monthMod(u2) }), x2 += l2, d2++;
    } }, { key: "generateSecondScale", value: function(t3) {
      for (var e2 = t3.currentMillisecond, i2 = t3.currentSecond, a2 = t3.currentMinute, s2 = t3.currentHour, r2 = t3.currentDate, o2 = t3.currentMonth, n2 = t3.currentYear, l2 = t3.secondsWidthOnXAxis, h2 = t3.numberOfSeconds, c2 = i2 + 1, d2 = a2, g2 = r2, u2 = o2, f2 = n2, p2 = s2, x2 = (1e3 - e2) / 1e3 * l2, b2 = 0; b2 < h2; b2++) c2 >= 60 && (c2 = 0, ++d2 >= 60 && (d2 = 0, 24 === ++p2 && (p2 = 0))), this.timeScaleArray.push({ position: x2, value: c2, unit: "second", hour: p2, minute: d2, second: c2, day: g2, year: this._getYear(f2, u2, 0), month: m.monthMod(u2) }), x2 += l2, c2++;
    } }, { key: "createRawDateString", value: function(t3, e2) {
      var i2 = t3.year;
      return 0 === t3.month && (t3.month = 1), i2 += "-" + ("0" + t3.month.toString()).slice(-2), "day" === t3.unit ? i2 += "day" === t3.unit ? "-" + ("0" + e2).slice(-2) : "-01" : i2 += "-" + ("0" + (t3.day ? t3.day : "1")).slice(-2), "hour" === t3.unit ? i2 += "hour" === t3.unit ? "T" + ("0" + e2).slice(-2) : "T00" : i2 += "T" + ("0" + (t3.hour ? t3.hour : "0")).slice(-2), "minute" === t3.unit ? i2 += ":" + ("0" + e2).slice(-2) : i2 += ":" + (t3.minute ? ("0" + t3.minute).slice(-2) : "00"), "second" === t3.unit ? i2 += ":" + ("0" + e2).slice(-2) : i2 += ":00", this.utc && (i2 += ".000Z"), i2;
    } }, { key: "formatDates", value: function(t3) {
      var e2 = this, i2 = this.w;
      return t3.map(function(t4) {
        var a2 = t4.value.toString(), s2 = new L(e2.ctx), r2 = e2.createRawDateString(t4, a2), o2 = s2.getDate(s2.parseDate(r2));
        if (e2.utc || (o2 = s2.getDate(s2.parseDateWithTimezone(r2))), void 0 === i2.config.xaxis.labels.format) {
          var n2 = "dd MMM", l2 = i2.config.xaxis.labels.datetimeFormatter;
          "year" === t4.unit && (n2 = l2.year), "month" === t4.unit && (n2 = l2.month), "day" === t4.unit && (n2 = l2.day), "hour" === t4.unit && (n2 = l2.hour), "minute" === t4.unit && (n2 = l2.minute), "second" === t4.unit && (n2 = l2.second), a2 = s2.formatDate(o2, n2);
        } else a2 = s2.formatDate(o2, i2.config.xaxis.labels.format);
        return { dateString: r2, position: t4.position, value: a2, unit: t4.unit, year: t4.year, month: t4.month };
      });
    } }, { key: "removeOverlappingTS", value: function(t3) {
      var e2, i2 = this, a2 = new k(this.ctx), s2 = false;
      t3.length > 0 && t3[0].value && t3.every(function(e3) {
        return e3.value.length === t3[0].value.length;
      }) && (s2 = true, e2 = a2.getTextRects(t3[0].value).width);
      var r2 = 0, o2 = t3.map(function(o3, n2) {
        if (n2 > 0 && i2.w.config.xaxis.labels.hideOverlappingLabels) {
          var l2 = s2 ? e2 : a2.getTextRects(t3[r2].value).width, h2 = t3[r2].position;
          return o3.position > h2 + l2 + 10 ? (r2 = n2, o3) : null;
        }
        return o3;
      });
      return o2 = o2.filter(function(t4) {
        return null !== t4;
      });
    } }, { key: "_getYear", value: function(t3, e2, i2) {
      return t3 + Math.floor(e2 / 12) + i2;
    } }]), t2;
  }(), _t = function() {
    function t2(e2, a2) {
      i(this, t2), this.ctx = a2, this.w = a2.w, this.el = e2;
    }
    return s(t2, [{ key: "setupElements", value: function() {
      var t3 = this.w, e2 = t3.globals, i2 = t3.config, a2 = i2.chart.type;
      e2.axisCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble", "radar", "heatmap", "treemap"].includes(a2), e2.xyCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble"].includes(a2), e2.isBarHorizontal = ["bar", "rangeBar", "boxPlot"].includes(a2) && i2.plotOptions.bar.horizontal, e2.chartClass = ".apexcharts".concat(e2.chartID), e2.dom.baseEl = this.el, e2.dom.elWrap = document.createElement("div"), k.setAttrs(e2.dom.elWrap, { id: e2.chartClass.substring(1), class: "apexcharts-canvas ".concat(e2.chartClass.substring(1)) }), this.el.appendChild(e2.dom.elWrap), e2.dom.Paper = new window.SVG.Doc(e2.dom.elWrap), e2.dom.Paper.attr({ class: "apexcharts-svg", "xmlns:data": "ApexChartsNS", transform: "translate(".concat(i2.chart.offsetX, ", ").concat(i2.chart.offsetY, ")") }), e2.dom.Paper.node.style.background = "dark" !== i2.theme.mode || i2.chart.background ? "light" !== i2.theme.mode || i2.chart.background ? i2.chart.background : "#fff" : "#424242", this.setSVGDimensions(), e2.dom.elLegendForeign = document.createElementNS(e2.SVGNS, "foreignObject"), k.setAttrs(e2.dom.elLegendForeign, { x: 0, y: 0, width: e2.svgWidth, height: e2.svgHeight }), e2.dom.elLegendWrap = document.createElement("div"), e2.dom.elLegendWrap.classList.add("apexcharts-legend"), e2.dom.elLegendWrap.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), e2.dom.elLegendForeign.appendChild(e2.dom.elLegendWrap), e2.dom.Paper.node.appendChild(e2.dom.elLegendForeign), e2.dom.elGraphical = e2.dom.Paper.group().attr({ class: "apexcharts-inner apexcharts-graphical" }), e2.dom.elDefs = e2.dom.Paper.defs(), e2.dom.Paper.add(e2.dom.elGraphical), e2.dom.elGraphical.add(e2.dom.elDefs);
    } }, { key: "plotChartType", value: function(t3, e2) {
      var i2 = this.w, a2 = this.ctx, s2 = i2.config, r2 = i2.globals, o2 = { line: { series: [], i: [] }, area: { series: [], i: [] }, scatter: { series: [], i: [] }, bubble: { series: [], i: [] }, column: { series: [], i: [] }, candlestick: { series: [], i: [] }, boxPlot: { series: [], i: [] }, rangeBar: { series: [], i: [] }, rangeArea: { series: [], seriesRangeEnd: [], i: [] } }, n2 = s2.chart.type || "line", l2 = null, h2 = 0;
      r2.series.forEach(function(e3, a3) {
        var s3 = t3[a3].type || n2;
        o2[s3] ? ("rangeArea" === s3 ? (o2[s3].series.push(r2.seriesRangeStart[a3]), o2[s3].seriesRangeEnd.push(r2.seriesRangeEnd[a3])) : o2[s3].series.push(e3), o2[s3].i.push(a3), "column" !== s3 && "bar" !== s3 || (i2.globals.columnSeries = o2.column)) : ["heatmap", "treemap", "pie", "donut", "polarArea", "radialBar", "radar"].includes(s3) ? l2 = s3 : "bar" === s3 ? (o2.column.series.push(e3), o2.column.i.push(a3)) : console.warn("You have specified an unrecognized series type (".concat(s3, ").")), n2 !== s3 && "scatter" !== s3 && h2++;
      }), h2 > 0 && (l2 && console.warn("Chart or series type ".concat(l2, " cannot appear with other chart or series types.")), o2.column.series.length > 0 && s2.plotOptions.bar.horizontal && (h2 -= o2.column.series.length, o2.column = { series: [], i: [] }, i2.globals.columnSeries = { series: [], i: [] }, console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"))), r2.comboCharts || (r2.comboCharts = h2 > 0);
      var c2 = new Ot(a2, e2), d2 = new Lt(a2, e2);
      a2.pie = new Tt(a2);
      var g2 = new Xt(a2);
      a2.rangeBar = new Et(a2, e2);
      var u2 = new zt(a2), f2 = [];
      if (r2.comboCharts) {
        var x2, b2, v2 = new A(a2);
        if (o2.area.series.length > 0) (x2 = f2).push.apply(x2, p(v2.drawSeriesByGroup(o2.area, r2.areaGroups, "area", c2)));
        if (o2.column.series.length > 0) if (s2.chart.stacked) {
          var m2 = new Ct(a2, e2);
          f2.push(m2.draw(o2.column.series, o2.column.i));
        } else a2.bar = new St(a2, e2), f2.push(a2.bar.draw(o2.column.series, o2.column.i));
        if (o2.rangeArea.series.length > 0 && f2.push(c2.draw(o2.rangeArea.series, "rangeArea", o2.rangeArea.i, o2.rangeArea.seriesRangeEnd)), o2.line.series.length > 0) (b2 = f2).push.apply(b2, p(v2.drawSeriesByGroup(o2.line, r2.lineGroups, "line", c2)));
        if (o2.candlestick.series.length > 0 && f2.push(d2.draw(o2.candlestick.series, "candlestick", o2.candlestick.i)), o2.boxPlot.series.length > 0 && f2.push(d2.draw(o2.boxPlot.series, "boxPlot", o2.boxPlot.i)), o2.rangeBar.series.length > 0 && f2.push(a2.rangeBar.draw(o2.rangeBar.series, o2.rangeBar.i)), o2.scatter.series.length > 0) {
          var y2 = new Ot(a2, e2, true);
          f2.push(y2.draw(o2.scatter.series, "scatter", o2.scatter.i));
        }
        if (o2.bubble.series.length > 0) {
          var w2 = new Ot(a2, e2, true);
          f2.push(w2.draw(o2.bubble.series, "bubble", o2.bubble.i));
        }
      } else switch (s2.chart.type) {
        case "line":
          f2 = c2.draw(r2.series, "line");
          break;
        case "area":
          f2 = c2.draw(r2.series, "area");
          break;
        case "bar":
          if (s2.chart.stacked) f2 = new Ct(a2, e2).draw(r2.series);
          else a2.bar = new St(a2, e2), f2 = a2.bar.draw(r2.series);
          break;
        case "candlestick":
          f2 = new Lt(a2, e2).draw(r2.series, "candlestick");
          break;
        case "boxPlot":
          f2 = new Lt(a2, e2).draw(r2.series, s2.chart.type);
          break;
        case "rangeBar":
          f2 = a2.rangeBar.draw(r2.series);
          break;
        case "rangeArea":
          f2 = c2.draw(r2.seriesRangeStart, "rangeArea", void 0, r2.seriesRangeEnd);
          break;
        case "heatmap":
          f2 = new Mt(a2, e2).draw(r2.series);
          break;
        case "treemap":
          f2 = new Bt(a2, e2).draw(r2.series);
          break;
        case "pie":
        case "donut":
        case "polarArea":
          f2 = a2.pie.draw(r2.series);
          break;
        case "radialBar":
          f2 = g2.draw(r2.series);
          break;
        case "radar":
          f2 = u2.draw(r2.series);
          break;
        default:
          f2 = c2.draw(r2.series);
      }
      return f2;
    } }, { key: "setSVGDimensions", value: function() {
      var t3 = this.w, e2 = t3.globals, i2 = t3.config;
      i2.chart.width = i2.chart.width || "100%", i2.chart.height = i2.chart.height || "auto", e2.svgWidth = i2.chart.width, e2.svgHeight = i2.chart.height;
      var a2 = m.getDimensions(this.el), s2 = i2.chart.width.toString().split(/[0-9]+/g).pop();
      "%" === s2 ? m.isNumber(a2[0]) && (0 === a2[0].width && (a2 = m.getDimensions(this.el.parentNode)), e2.svgWidth = a2[0] * parseInt(i2.chart.width, 10) / 100) : "px" !== s2 && "" !== s2 || (e2.svgWidth = parseInt(i2.chart.width, 10));
      var r2 = String(i2.chart.height).toString().split(/[0-9]+/g).pop();
      if ("auto" !== e2.svgHeight && "" !== e2.svgHeight) if ("%" === r2) {
        var o2 = m.getDimensions(this.el.parentNode);
        e2.svgHeight = o2[1] * parseInt(i2.chart.height, 10) / 100;
      } else e2.svgHeight = parseInt(i2.chart.height, 10);
      else e2.svgHeight = e2.axisCharts ? e2.svgWidth / 1.61 : e2.svgWidth / 1.2;
      if (e2.svgWidth = Math.max(e2.svgWidth, 0), e2.svgHeight = Math.max(e2.svgHeight, 0), k.setAttrs(e2.dom.Paper.node, { width: e2.svgWidth, height: e2.svgHeight }), "%" !== r2) {
        var n2 = i2.chart.sparkline.enabled ? 0 : e2.axisCharts ? i2.chart.parentHeightOffset : 0;
        e2.dom.Paper.node.parentNode.parentNode.style.minHeight = "".concat(e2.svgHeight + n2, "px");
      }
      e2.dom.elWrap.style.width = "".concat(e2.svgWidth, "px"), e2.dom.elWrap.style.height = "".concat(e2.svgHeight, "px");
    } }, { key: "shiftGraphPosition", value: function() {
      var t3 = this.w.globals, e2 = t3.translateY, i2 = t3.translateX;
      k.setAttrs(t3.dom.elGraphical.node, { transform: "translate(".concat(i2, ", ").concat(e2, ")") });
    } }, { key: "resizeNonAxisCharts", value: function() {
      var t3 = this.w, e2 = t3.globals, i2 = 0, a2 = t3.config.chart.sparkline.enabled ? 1 : 15;
      a2 += t3.config.grid.padding.bottom, ["top", "bottom"].includes(t3.config.legend.position) && t3.config.legend.show && !t3.config.legend.floating && (i2 = new gt(this.ctx).legendHelpers.getLegendDimensions().clwh + 7);
      var s2 = t3.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"), r2 = 2.05 * t3.globals.radialSize;
      if (s2 && !t3.config.chart.sparkline.enabled && 0 !== t3.config.plotOptions.radialBar.startAngle) {
        var o2 = m.getBoundingClientRect(s2);
        r2 = o2.bottom;
        var n2 = o2.bottom - o2.top;
        r2 = Math.max(2.05 * t3.globals.radialSize, n2);
      }
      var l2 = Math.ceil(r2 + e2.translateY + i2 + a2);
      e2.dom.elLegendForeign && e2.dom.elLegendForeign.setAttribute("height", l2), t3.config.chart.height && String(t3.config.chart.height).includes("%") || (e2.dom.elWrap.style.height = "".concat(l2, "px"), k.setAttrs(e2.dom.Paper.node, { height: l2 }), e2.dom.Paper.node.parentNode.parentNode.style.minHeight = "".concat(l2, "px"));
    } }, { key: "coreCalculations", value: function() {
      new J(this.ctx).init();
    } }, { key: "resetGlobals", value: function() {
      var t3 = this, e2 = function() {
        return t3.w.config.series.map(function() {
          return [];
        });
      }, i2 = new H(), a2 = this.w.globals;
      i2.initGlobalVars(a2), a2.seriesXvalues = e2(), a2.seriesYvalues = e2();
    } }, { key: "isMultipleY", value: function() {
      return !!(Array.isArray(this.w.config.yaxis) && this.w.config.yaxis.length > 1) && (this.w.globals.isMultipleYAxis = true, true);
    } }, { key: "xySettings", value: function() {
      var t3 = this.w, e2 = null;
      if (t3.globals.axisCharts) {
        if ("back" === t3.config.xaxis.crosshairs.position && new it(this.ctx).drawXCrosshairs(), "back" === t3.config.yaxis[0].crosshairs.position && new it(this.ctx).drawYCrosshairs(), "datetime" === t3.config.xaxis.type && void 0 === t3.config.xaxis.labels.formatter) {
          this.ctx.timeScale = new jt(this.ctx);
          var i2 = [];
          isFinite(t3.globals.minX) && isFinite(t3.globals.maxX) && !t3.globals.isBarHorizontal ? i2 = this.ctx.timeScale.calculateTimeScaleTicks(t3.globals.minX, t3.globals.maxX) : t3.globals.isBarHorizontal && (i2 = this.ctx.timeScale.calculateTimeScaleTicks(t3.globals.minY, t3.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(i2);
        }
        e2 = new A(this.ctx).getCalculatedRatios();
      }
      return e2;
    } }, { key: "updateSourceChart", value: function(t3) {
      this.ctx.w.globals.selection = void 0, this.ctx.updateHelpers._updateOptions({ chart: { selection: { xaxis: { min: t3.w.globals.minX, max: t3.w.globals.maxX } } } }, false, false);
    } }, { key: "setupBrushHandler", value: function() {
      var t3 = this, e2 = this.w;
      if (e2.config.chart.brush.enabled && "function" != typeof e2.config.chart.events.selection) {
        var i2 = Array.isArray(e2.config.chart.brush.targets) ? e2.config.chart.brush.targets : [e2.config.chart.brush.target];
        i2.forEach(function(e3) {
          var i3 = ApexCharts.getChartByID(e3);
          i3.w.globals.brushSource = t3.ctx, "function" != typeof i3.w.config.chart.events.zoomed && (i3.w.config.chart.events.zoomed = function() {
            return t3.updateSourceChart(i3);
          }), "function" != typeof i3.w.config.chart.events.scrolled && (i3.w.config.chart.events.scrolled = function() {
            return t3.updateSourceChart(i3);
          });
        }), e2.config.chart.events.selection = function(t4, e3) {
          i2.forEach(function(t5) {
            ApexCharts.getChartByID(t5).ctx.updateHelpers._updateOptions({ xaxis: { min: e3.xaxis.min, max: e3.xaxis.max } }, false, false, false, false);
          });
        };
      }
    } }]), t2;
  }(), Ut = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "_updateOptions", value: function(t3) {
      var e2 = this, i2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], s2 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], r2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      return new Promise(function(o2) {
        var n2 = [e2.ctx];
        s2 && (n2 = e2.ctx.getSyncedCharts()), e2.ctx.w.globals.isExecCalled && (n2 = [e2.ctx], e2.ctx.w.globals.isExecCalled = false), n2.forEach(function(s3, l2) {
          var h2 = s3.w;
          if (h2.globals.shouldAnimate = a2, i2 || (h2.globals.resized = true, h2.globals.dataChanged = true, a2 && s3.series.getPreviousPaths()), t3 && "object" === b(t3) && (s3.config = new D(t3), t3 = A.extendArrayProps(s3.config, t3, h2), s3.w.globals.chartID !== e2.ctx.w.globals.chartID && delete t3.series, h2.config = m.extend(h2.config, t3), r2 && (h2.globals.lastXAxis = t3.xaxis ? m.clone(t3.xaxis) : [], h2.globals.lastYAxis = t3.yaxis ? m.clone(t3.yaxis) : [], h2.globals.initialConfig = m.extend({}, h2.config), h2.globals.initialSeries = m.clone(h2.config.series), t3.series))) {
            for (var c2 = 0; c2 < h2.globals.collapsedSeriesIndices.length; c2++) {
              var d2 = h2.config.series[h2.globals.collapsedSeriesIndices[c2]];
              h2.globals.collapsedSeries[c2].data = h2.globals.axisCharts ? d2.data.slice() : d2;
            }
            for (var g2 = 0; g2 < h2.globals.ancillaryCollapsedSeriesIndices.length; g2++) {
              var u2 = h2.config.series[h2.globals.ancillaryCollapsedSeriesIndices[g2]];
              h2.globals.ancillaryCollapsedSeries[g2].data = h2.globals.axisCharts ? u2.data.slice() : u2;
            }
            s3.series.emptyCollapsedSeries(h2.config.series);
          }
          return s3.update(t3).then(function() {
            l2 === n2.length - 1 && o2(s3);
          });
        });
      });
    } }, { key: "_updateSeries", value: function(t3, e2) {
      var i2 = this, a2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return new Promise(function(s2) {
        var r2, o2 = i2.w;
        return o2.globals.shouldAnimate = e2, o2.globals.dataChanged = true, e2 && i2.ctx.series.getPreviousPaths(), o2.globals.axisCharts ? (0 === (r2 = t3.map(function(t4, e3) {
          return i2._extendSeries(t4, e3);
        })).length && (r2 = [{ data: [] }]), o2.config.series = r2) : o2.config.series = t3.slice(), a2 && (o2.globals.initialConfig.series = m.clone(o2.config.series), o2.globals.initialSeries = m.clone(o2.config.series)), i2.ctx.update().then(function() {
          s2(i2.ctx);
        });
      });
    } }, { key: "_extendSeries", value: function(t3, e2) {
      var i2 = this.w, a2 = i2.config.series[e2];
      return g(g({}, i2.config.series[e2]), {}, { name: t3.name ? t3.name : null == a2 ? void 0 : a2.name, color: t3.color ? t3.color : null == a2 ? void 0 : a2.color, type: t3.type ? t3.type : null == a2 ? void 0 : a2.type, group: t3.group ? t3.group : null == a2 ? void 0 : a2.group, hidden: void 0 !== t3.hidden ? t3.hidden : null == a2 ? void 0 : a2.hidden, data: t3.data ? t3.data : null == a2 ? void 0 : a2.data, zIndex: void 0 !== t3.zIndex ? t3.zIndex : e2 });
    } }, { key: "toggleDataPointSelection", value: function(t3, e2) {
      var i2 = this.w, a2 = null, s2 = ".apexcharts-series[data\\:realIndex='".concat(t3, "']");
      return i2.globals.axisCharts ? a2 = i2.globals.dom.Paper.select("".concat(s2, " path[j='").concat(e2, "'], ").concat(s2, " circle[j='").concat(e2, "'], ").concat(s2, " rect[j='").concat(e2, "']")).members[0] : void 0 === e2 && (a2 = i2.globals.dom.Paper.select("".concat(s2, " path[j='").concat(t3, "']")).members[0], "pie" !== i2.config.chart.type && "polarArea" !== i2.config.chart.type && "donut" !== i2.config.chart.type || this.ctx.pie.pieClicked(t3)), a2 ? (new k(this.ctx).pathMouseDown(a2, null), a2.node ? a2.node : null) : (console.warn("toggleDataPointSelection: Element not found"), null);
    } }, { key: "forceXAxisUpdate", value: function(t3) {
      var e2 = this.w;
      if (["min", "max"].forEach(function(i3) {
        void 0 !== t3.xaxis[i3] && (e2.config.xaxis[i3] = t3.xaxis[i3], e2.globals.lastXAxis[i3] = t3.xaxis[i3]);
      }), t3.xaxis.categories && t3.xaxis.categories.length && (e2.config.xaxis.categories = t3.xaxis.categories), e2.config.xaxis.convertedCatToNumeric) {
        var i2 = new F(t3);
        t3 = i2.convertCatToNumericXaxis(t3, this.ctx);
      }
      return t3;
    } }, { key: "forceYAxisUpdate", value: function(t3) {
      return t3.chart && t3.chart.stacked && "100%" === t3.chart.stackType && (Array.isArray(t3.yaxis) ? t3.yaxis.forEach(function(e2, i2) {
        t3.yaxis[i2].min = 0, t3.yaxis[i2].max = 100;
      }) : (t3.yaxis.min = 0, t3.yaxis.max = 100)), t3;
    } }, { key: "revertDefaultAxisMinMax", value: function(t3) {
      var e2 = this, i2 = this.w, a2 = i2.globals.lastXAxis, s2 = i2.globals.lastYAxis;
      t3 && t3.xaxis && (a2 = t3.xaxis), t3 && t3.yaxis && (s2 = t3.yaxis), i2.config.xaxis.min = a2.min, i2.config.xaxis.max = a2.max;
      var r2 = function(t4) {
        void 0 !== s2[t4] && (i2.config.yaxis[t4].min = s2[t4].min, i2.config.yaxis[t4].max = s2[t4].max);
      };
      i2.config.yaxis.map(function(t4, a3) {
        i2.globals.zoomed || void 0 !== s2[a3] ? r2(a3) : void 0 !== e2.ctx.opts.yaxis[a3] && (t4.min = e2.ctx.opts.yaxis[a3].min, t4.max = e2.ctx.opts.yaxis[a3].max);
      });
    } }]), t2;
  }();
  Nt = "undefined" != typeof window ? window : void 0, Wt = function(t2, e2) {
    var i2 = (void 0 !== this ? this : t2).SVG = function(t3) {
      if (i2.supported) return t3 = new i2.Doc(t3), i2.parser.draw || i2.prepare(), t3;
    };
    if (i2.ns = "http://www.w3.org/2000/svg", i2.xmlns = "http://www.w3.org/2000/xmlns/", i2.xlink = "http://www.w3.org/1999/xlink", i2.svgjs = "http://svgjs.dev", i2.supported = true, !i2.supported) return false;
    i2.did = 1e3, i2.eid = function(t3) {
      return "Svgjs" + c2(t3) + i2.did++;
    }, i2.create = function(t3) {
      var i3 = e2.createElementNS(this.ns, t3);
      return i3.setAttribute("id", this.eid(t3)), i3;
    }, i2.extend = function() {
      var t3, e3;
      e3 = (t3 = [].slice.call(arguments)).pop();
      for (var a3 = t3.length - 1; a3 >= 0; a3--) if (t3[a3]) for (var s3 in e3) t3[a3].prototype[s3] = e3[s3];
      i2.Set && i2.Set.inherit && i2.Set.inherit();
    }, i2.invent = function(t3) {
      var e3 = "function" == typeof t3.create ? t3.create : function() {
        this.constructor.call(this, i2.create(t3.create));
      };
      return t3.inherit && (e3.prototype = new t3.inherit()), t3.extend && i2.extend(e3, t3.extend), t3.construct && i2.extend(t3.parent || i2.Container, t3.construct), e3;
    }, i2.adopt = function(e3) {
      return e3 ? e3.instance ? e3.instance : ((a3 = "svg" == e3.nodeName ? e3.parentNode instanceof t2.SVGElement ? new i2.Nested() : new i2.Doc() : "linearGradient" == e3.nodeName ? new i2.Gradient("linear") : "radialGradient" == e3.nodeName ? new i2.Gradient("radial") : i2[c2(e3.nodeName)] ? new i2[c2(e3.nodeName)]() : new i2.Element(e3)).type = e3.nodeName, a3.node = e3, e3.instance = a3, a3 instanceof i2.Doc && a3.namespace().defs(), a3.setData(JSON.parse(e3.getAttribute("svgjs:data")) || {}), a3) : null;
      var a3;
    }, i2.prepare = function() {
      var t3 = e2.getElementsByTagName("body")[0], a3 = (t3 ? new i2.Doc(t3) : i2.adopt(e2.documentElement).nested()).size(2, 0);
      i2.parser = { body: t3 || e2.documentElement, draw: a3.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node, poly: a3.polyline().node, path: a3.path().node, native: i2.create("svg") };
    }, i2.parser = { native: i2.create("svg") }, e2.addEventListener("DOMContentLoaded", function() {
      i2.parser.draw || i2.prepare();
    }, false), i2.regex = { numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i, hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, rgb: /rgb\((\d+),(\d+),(\d+)\)/, reference: /#([a-z0-9\-_]+)/i, transforms: /\)\s*,?\s*/, whitespace: /\s/g, isHex: /^#[a-f0-9]{3,6}$/i, isRgb: /^rgb\(/, isCss: /[^:]+:[^;]+;?/, isBlank: /^(\s+)?$/, isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, isPercent: /^-?[\d\.]+%$/, isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i, delimiter: /[\s,]+/, hyphen: /([^e])\-/gi, pathLetters: /[MLHVCSQTAZ]/gi, isPathLetter: /[MLHVCSQTAZ]/i, numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi, dots: /\./g }, i2.utils = { map: function(t3, e3) {
      for (var i3 = t3.length, a3 = [], s3 = 0; s3 < i3; s3++) a3.push(e3(t3[s3]));
      return a3;
    }, filter: function(t3, e3) {
      for (var i3 = t3.length, a3 = [], s3 = 0; s3 < i3; s3++) e3(t3[s3]) && a3.push(t3[s3]);
      return a3;
    }, filterSVGElements: function(e3) {
      return this.filter(e3, function(e4) {
        return e4 instanceof t2.SVGElement;
      });
    } }, i2.defaults = { attrs: { "fill-opacity": 1, "stroke-opacity": 1, "stroke-width": 0, "stroke-linejoin": "miter", "stroke-linecap": "butt", fill: "#000000", stroke: "#000000", opacity: 1, x: 0, y: 0, cx: 0, cy: 0, width: 0, height: 0, r: 0, rx: 0, ry: 0, offset: 0, "stop-opacity": 1, "stop-color": "#000000", "font-size": 16, "font-family": "Helvetica, Arial, sans-serif", "text-anchor": "start" } }, i2.Color = function(t3) {
      var e3, a3;
      this.r = 0, this.g = 0, this.b = 0, t3 && ("string" == typeof t3 ? i2.regex.isRgb.test(t3) ? (e3 = i2.regex.rgb.exec(t3.replace(i2.regex.whitespace, "")), this.r = parseInt(e3[1]), this.g = parseInt(e3[2]), this.b = parseInt(e3[3])) : i2.regex.isHex.test(t3) && (e3 = i2.regex.hex.exec(4 == (a3 = t3).length ? ["#", a3.substring(1, 2), a3.substring(1, 2), a3.substring(2, 3), a3.substring(2, 3), a3.substring(3, 4), a3.substring(3, 4)].join("") : a3), this.r = parseInt(e3[1], 16), this.g = parseInt(e3[2], 16), this.b = parseInt(e3[3], 16)) : "object" === b(t3) && (this.r = t3.r, this.g = t3.g, this.b = t3.b));
    }, i2.extend(i2.Color, { toString: function() {
      return this.toHex();
    }, toHex: function() {
      return "#" + d2(this.r) + d2(this.g) + d2(this.b);
    }, toRgb: function() {
      return "rgb(" + [this.r, this.g, this.b].join() + ")";
    }, brightness: function() {
      return this.r / 255 * 0.3 + this.g / 255 * 0.59 + this.b / 255 * 0.11;
    }, morph: function(t3) {
      return this.destination = new i2.Color(t3), this;
    }, at: function(t3) {
      return this.destination ? (t3 = t3 < 0 ? 0 : t3 > 1 ? 1 : t3, new i2.Color({ r: ~~(this.r + (this.destination.r - this.r) * t3), g: ~~(this.g + (this.destination.g - this.g) * t3), b: ~~(this.b + (this.destination.b - this.b) * t3) })) : this;
    } }), i2.Color.test = function(t3) {
      return t3 += "", i2.regex.isHex.test(t3) || i2.regex.isRgb.test(t3);
    }, i2.Color.isRgb = function(t3) {
      return t3 && "number" == typeof t3.r && "number" == typeof t3.g && "number" == typeof t3.b;
    }, i2.Color.isColor = function(t3) {
      return i2.Color.isRgb(t3) || i2.Color.test(t3);
    }, i2.Array = function(t3, e3) {
      0 == (t3 = (t3 || []).valueOf()).length && e3 && (t3 = e3.valueOf()), this.value = this.parse(t3);
    }, i2.extend(i2.Array, { toString: function() {
      return this.value.join(" ");
    }, valueOf: function() {
      return this.value;
    }, parse: function(t3) {
      return t3 = t3.valueOf(), Array.isArray(t3) ? t3 : this.split(t3);
    } }), i2.PointArray = function(t3, e3) {
      i2.Array.call(this, t3, e3 || [[0, 0]]);
    }, i2.PointArray.prototype = new i2.Array(), i2.PointArray.prototype.constructor = i2.PointArray;
    for (var a2 = { M: function(t3, e3, i3) {
      return e3.x = i3.x = t3[0], e3.y = i3.y = t3[1], ["M", e3.x, e3.y];
    }, L: function(t3, e3) {
      return e3.x = t3[0], e3.y = t3[1], ["L", t3[0], t3[1]];
    }, H: function(t3, e3) {
      return e3.x = t3[0], ["H", t3[0]];
    }, V: function(t3, e3) {
      return e3.y = t3[0], ["V", t3[0]];
    }, C: function(t3, e3) {
      return e3.x = t3[4], e3.y = t3[5], ["C", t3[0], t3[1], t3[2], t3[3], t3[4], t3[5]];
    }, Q: function(t3, e3) {
      return e3.x = t3[2], e3.y = t3[3], ["Q", t3[0], t3[1], t3[2], t3[3]];
    }, S: function(t3, e3) {
      return e3.x = t3[2], e3.y = t3[3], ["S", t3[0], t3[1], t3[2], t3[3]];
    }, Z: function(t3, e3, i3) {
      return e3.x = i3.x, e3.y = i3.y, ["Z"];
    } }, s2 = "mlhvqtcsaz".split(""), r2 = 0, o2 = s2.length; r2 < o2; ++r2) a2[s2[r2]] = /* @__PURE__ */ function(t3) {
      return function(e3, i3, s3) {
        if ("H" == t3) e3[0] = e3[0] + i3.x;
        else if ("V" == t3) e3[0] = e3[0] + i3.y;
        else if ("A" == t3) e3[5] = e3[5] + i3.x, e3[6] = e3[6] + i3.y;
        else for (var r3 = 0, o3 = e3.length; r3 < o3; ++r3) e3[r3] = e3[r3] + (r3 % 2 ? i3.y : i3.x);
        if (a2 && "function" == typeof a2[t3]) return a2[t3](e3, i3, s3);
      };
    }(s2[r2].toUpperCase());
    i2.PathArray = function(t3, e3) {
      i2.Array.call(this, t3, e3 || [["M", 0, 0]]);
    }, i2.PathArray.prototype = new i2.Array(), i2.PathArray.prototype.constructor = i2.PathArray, i2.extend(i2.PathArray, { toString: function() {
      return function(t3) {
        for (var e3 = 0, i3 = t3.length, a3 = ""; e3 < i3; e3++) a3 += t3[e3][0], null != t3[e3][1] && (a3 += t3[e3][1], null != t3[e3][2] && (a3 += " ", a3 += t3[e3][2], null != t3[e3][3] && (a3 += " ", a3 += t3[e3][3], a3 += " ", a3 += t3[e3][4], null != t3[e3][5] && (a3 += " ", a3 += t3[e3][5], a3 += " ", a3 += t3[e3][6], null != t3[e3][7] && (a3 += " ", a3 += t3[e3][7])))));
        return a3 + " ";
      }(this.value);
    }, move: function(t3, e3) {
      var i3 = this.bbox();
      return i3.x, i3.y, this;
    }, at: function(t3) {
      if (!this.destination) return this;
      for (var e3 = this.value, a3 = this.destination.value, s3 = [], r3 = new i2.PathArray(), o3 = 0, n3 = e3.length; o3 < n3; o3++) {
        s3[o3] = [e3[o3][0]];
        for (var l3 = 1, h3 = e3[o3].length; l3 < h3; l3++) s3[o3][l3] = e3[o3][l3] + (a3[o3][l3] - e3[o3][l3]) * t3;
        "A" === s3[o3][0] && (s3[o3][4] = +(0 != s3[o3][4]), s3[o3][5] = +(0 != s3[o3][5]));
      }
      return r3.value = s3, r3;
    }, parse: function(t3) {
      if (t3 instanceof i2.PathArray) return t3.valueOf();
      var e3, s3 = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 };
      t3 = "string" == typeof t3 ? t3.replace(i2.regex.numbersWithDots, l2).replace(i2.regex.pathLetters, " $& ").replace(i2.regex.hyphen, "$1 -").trim().split(i2.regex.delimiter) : t3.reduce(function(t4, e4) {
        return [].concat.call(t4, e4);
      }, []);
      var r3 = [], o3 = new i2.Point(), n3 = new i2.Point(), h3 = 0, c3 = t3.length;
      do {
        i2.regex.isPathLetter.test(t3[h3]) ? (e3 = t3[h3], ++h3) : "M" == e3 ? e3 = "L" : "m" == e3 && (e3 = "l"), r3.push(a2[e3].call(null, t3.slice(h3, h3 += s3[e3.toUpperCase()]).map(parseFloat), o3, n3));
      } while (c3 > h3);
      return r3;
    }, bbox: function() {
      return i2.parser.draw || i2.prepare(), i2.parser.path.setAttribute("d", this.toString()), i2.parser.path.getBBox();
    } }), i2.Number = i2.invent({ create: function(t3, e3) {
      this.value = 0, this.unit = e3 || "", "number" == typeof t3 ? this.value = isNaN(t3) ? 0 : isFinite(t3) ? t3 : t3 < 0 ? -34e37 : 34e37 : "string" == typeof t3 ? (e3 = t3.match(i2.regex.numberAndUnit)) && (this.value = parseFloat(e3[1]), "%" == e3[5] ? this.value /= 100 : "s" == e3[5] && (this.value *= 1e3), this.unit = e3[5]) : t3 instanceof i2.Number && (this.value = t3.valueOf(), this.unit = t3.unit);
    }, extend: { toString: function() {
      return ("%" == this.unit ? ~~(1e8 * this.value) / 1e6 : "s" == this.unit ? this.value / 1e3 : this.value) + this.unit;
    }, toJSON: function() {
      return this.toString();
    }, valueOf: function() {
      return this.value;
    }, plus: function(t3) {
      return t3 = new i2.Number(t3), new i2.Number(this + t3, this.unit || t3.unit);
    }, minus: function(t3) {
      return t3 = new i2.Number(t3), new i2.Number(this - t3, this.unit || t3.unit);
    }, times: function(t3) {
      return t3 = new i2.Number(t3), new i2.Number(this * t3, this.unit || t3.unit);
    }, divide: function(t3) {
      return t3 = new i2.Number(t3), new i2.Number(this / t3, this.unit || t3.unit);
    }, to: function(t3) {
      var e3 = new i2.Number(this);
      return "string" == typeof t3 && (e3.unit = t3), e3;
    }, morph: function(t3) {
      return this.destination = new i2.Number(t3), t3.relative && (this.destination.value += this.value), this;
    }, at: function(t3) {
      return this.destination ? new i2.Number(this.destination).minus(this).times(t3).plus(this) : this;
    } } }), i2.Element = i2.invent({ create: function(t3) {
      this._stroke = i2.defaults.attrs.stroke, this._event = null, this.dom = {}, (this.node = t3) && (this.type = t3.nodeName, this.node.instance = this, this._stroke = t3.getAttribute("stroke") || this._stroke);
    }, extend: { x: function(t3) {
      return this.attr("x", t3);
    }, y: function(t3) {
      return this.attr("y", t3);
    }, cx: function(t3) {
      return null == t3 ? this.x() + this.width() / 2 : this.x(t3 - this.width() / 2);
    }, cy: function(t3) {
      return null == t3 ? this.y() + this.height() / 2 : this.y(t3 - this.height() / 2);
    }, move: function(t3, e3) {
      return this.x(t3).y(e3);
    }, center: function(t3, e3) {
      return this.cx(t3).cy(e3);
    }, width: function(t3) {
      return this.attr("width", t3);
    }, height: function(t3) {
      return this.attr("height", t3);
    }, size: function(t3, e3) {
      var a3 = g2(this, t3, e3);
      return this.width(new i2.Number(a3.width)).height(new i2.Number(a3.height));
    }, clone: function(t3) {
      this.writeDataToDom();
      var e3 = p2(this.node.cloneNode(true));
      return t3 ? t3.add(e3) : this.after(e3), e3;
    }, remove: function() {
      return this.parent() && this.parent().removeElement(this), this;
    }, replace: function(t3) {
      return this.after(t3).remove(), t3;
    }, addTo: function(t3) {
      return t3.put(this);
    }, putIn: function(t3) {
      return t3.add(this);
    }, id: function(t3) {
      return this.attr("id", t3);
    }, show: function() {
      return this.style("display", "");
    }, hide: function() {
      return this.style("display", "none");
    }, visible: function() {
      return "none" != this.style("display");
    }, toString: function() {
      return this.attr("id");
    }, classes: function() {
      var t3 = this.attr("class");
      return null == t3 ? [] : t3.trim().split(i2.regex.delimiter);
    }, hasClass: function(t3) {
      return -1 != this.classes().indexOf(t3);
    }, addClass: function(t3) {
      if (!this.hasClass(t3)) {
        var e3 = this.classes();
        e3.push(t3), this.attr("class", e3.join(" "));
      }
      return this;
    }, removeClass: function(t3) {
      return this.hasClass(t3) && this.attr("class", this.classes().filter(function(e3) {
        return e3 != t3;
      }).join(" ")), this;
    }, toggleClass: function(t3) {
      return this.hasClass(t3) ? this.removeClass(t3) : this.addClass(t3);
    }, reference: function(t3) {
      return i2.get(this.attr(t3));
    }, parent: function(e3) {
      var a3 = this;
      if (!a3.node.parentNode) return null;
      if (a3 = i2.adopt(a3.node.parentNode), !e3) return a3;
      for (; a3 && a3.node instanceof t2.SVGElement; ) {
        if ("string" == typeof e3 ? a3.matches(e3) : a3 instanceof e3) return a3;
        if (!a3.node.parentNode || "#document" == a3.node.parentNode.nodeName) return null;
        a3 = i2.adopt(a3.node.parentNode);
      }
    }, doc: function() {
      return this instanceof i2.Doc ? this : this.parent(i2.Doc);
    }, parents: function(t3) {
      var e3 = [], i3 = this;
      do {
        if (!(i3 = i3.parent(t3)) || !i3.node) break;
        e3.push(i3);
      } while (i3.parent);
      return e3;
    }, matches: function(t3) {
      return function(t4, e3) {
        return (t4.matches || t4.matchesSelector || t4.msMatchesSelector || t4.mozMatchesSelector || t4.webkitMatchesSelector || t4.oMatchesSelector).call(t4, e3);
      }(this.node, t3);
    }, native: function() {
      return this.node;
    }, svg: function(t3) {
      var a3 = e2.createElementNS("http://www.w3.org/2000/svg", "svg");
      if (!(t3 && this instanceof i2.Parent)) return a3.appendChild(t3 = e2.createElementNS("http://www.w3.org/2000/svg", "svg")), this.writeDataToDom(), t3.appendChild(this.node.cloneNode(true)), a3.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
      a3.innerHTML = "<svg>" + t3.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
      for (var s3 = 0, r3 = a3.firstChild.childNodes.length; s3 < r3; s3++) this.node.appendChild(a3.firstChild.firstChild);
      return this;
    }, writeDataToDom: function() {
      return (this.each || this.lines) && (this.each ? this : this.lines()).each(function() {
        this.writeDataToDom();
      }), this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), this;
    }, setData: function(t3) {
      return this.dom = t3, this;
    }, is: function(t3) {
      return function(t4, e3) {
        return t4 instanceof e3;
      }(this, t3);
    } } }), i2.easing = { "-": function(t3) {
      return t3;
    }, "<>": function(t3) {
      return -Math.cos(t3 * Math.PI) / 2 + 0.5;
    }, ">": function(t3) {
      return Math.sin(t3 * Math.PI / 2);
    }, "<": function(t3) {
      return 1 - Math.cos(t3 * Math.PI / 2);
    } }, i2.morph = function(t3) {
      return function(e3, a3) {
        return new i2.MorphObj(e3, a3).at(t3);
      };
    }, i2.Situation = i2.invent({ create: function(t3) {
      this.init = false, this.reversed = false, this.reversing = false, this.duration = new i2.Number(t3.duration).valueOf(), this.delay = new i2.Number(t3.delay).valueOf(), this.start = +/* @__PURE__ */ new Date() + this.delay, this.finish = this.start + this.duration, this.ease = t3.ease, this.loop = 0, this.loops = false, this.animations = {}, this.attrs = {}, this.styles = {}, this.transforms = [], this.once = {};
    } }), i2.FX = i2.invent({ create: function(t3) {
      this._target = t3, this.situations = [], this.active = false, this.situation = null, this.paused = false, this.lastPos = 0, this.pos = 0, this.absPos = 0, this._speed = 1;
    }, extend: { animate: function(t3, e3, a3) {
      "object" === b(t3) && (e3 = t3.ease, a3 = t3.delay, t3 = t3.duration);
      var s3 = new i2.Situation({ duration: t3 || 1e3, delay: a3 || 0, ease: i2.easing[e3 || "-"] || e3 });
      return this.queue(s3), this;
    }, target: function(t3) {
      return t3 && t3 instanceof i2.Element ? (this._target = t3, this) : this._target;
    }, timeToAbsPos: function(t3) {
      return (t3 - this.situation.start) / (this.situation.duration / this._speed);
    }, absPosToTime: function(t3) {
      return this.situation.duration / this._speed * t3 + this.situation.start;
    }, startAnimFrame: function() {
      this.stopAnimFrame(), this.animationFrame = t2.requestAnimationFrame((function() {
        this.step();
      }).bind(this));
    }, stopAnimFrame: function() {
      t2.cancelAnimationFrame(this.animationFrame);
    }, start: function() {
      return !this.active && this.situation && (this.active = true, this.startCurrent()), this;
    }, startCurrent: function() {
      return this.situation.start = +/* @__PURE__ */ new Date() + this.situation.delay / this._speed, this.situation.finish = this.situation.start + this.situation.duration / this._speed, this.initAnimations().step();
    }, queue: function(t3) {
      return ("function" == typeof t3 || t3 instanceof i2.Situation) && this.situations.push(t3), this.situation || (this.situation = this.situations.shift()), this;
    }, dequeue: function() {
      return this.stop(), this.situation = this.situations.shift(), this.situation && (this.situation instanceof i2.Situation ? this.start() : this.situation.call(this)), this;
    }, initAnimations: function() {
      var t3, e3 = this.situation;
      if (e3.init) return this;
      for (var a3 in e3.animations) {
        t3 = this.target()[a3](), Array.isArray(t3) || (t3 = [t3]), Array.isArray(e3.animations[a3]) || (e3.animations[a3] = [e3.animations[a3]]);
        for (var s3 = t3.length; s3--; ) e3.animations[a3][s3] instanceof i2.Number && (t3[s3] = new i2.Number(t3[s3])), e3.animations[a3][s3] = t3[s3].morph(e3.animations[a3][s3]);
      }
      for (var a3 in e3.attrs) e3.attrs[a3] = new i2.MorphObj(this.target().attr(a3), e3.attrs[a3]);
      for (var a3 in e3.styles) e3.styles[a3] = new i2.MorphObj(this.target().style(a3), e3.styles[a3]);
      return e3.initialTransformation = this.target().matrixify(), e3.init = true, this;
    }, clearQueue: function() {
      return this.situations = [], this;
    }, clearCurrent: function() {
      return this.situation = null, this;
    }, stop: function(t3, e3) {
      var i3 = this.active;
      return this.active = false, e3 && this.clearQueue(), t3 && this.situation && (!i3 && this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent();
    }, after: function(t3) {
      var e3 = this.last();
      return this.target().on("finished.fx", function i3(a3) {
        a3.detail.situation == e3 && (t3.call(this, e3), this.off("finished.fx", i3));
      }), this._callStart();
    }, during: function(t3) {
      var e3 = this.last(), a3 = function(a4) {
        a4.detail.situation == e3 && t3.call(this, a4.detail.pos, i2.morph(a4.detail.pos), a4.detail.eased, e3);
      };
      return this.target().off("during.fx", a3).on("during.fx", a3), this.after(function() {
        this.off("during.fx", a3);
      }), this._callStart();
    }, afterAll: function(t3) {
      var e3 = function e4(i3) {
        t3.call(this), this.off("allfinished.fx", e4);
      };
      return this.target().off("allfinished.fx", e3).on("allfinished.fx", e3), this._callStart();
    }, last: function() {
      return this.situations.length ? this.situations[this.situations.length - 1] : this.situation;
    }, add: function(t3, e3, i3) {
      return this.last()[i3 || "animations"][t3] = e3, this._callStart();
    }, step: function(t3) {
      var e3, i3, a3;
      t3 || (this.absPos = this.timeToAbsPos(+/* @__PURE__ */ new Date())), false !== this.situation.loops ? (e3 = Math.max(this.absPos, 0), i3 = Math.floor(e3), true === this.situation.loops || i3 < this.situation.loops ? (this.pos = e3 - i3, a3 = this.situation.loop, this.situation.loop = i3) : (this.absPos = this.situation.loops, this.pos = 1, a3 = this.situation.loop - 1, this.situation.loop = this.situation.loops), this.situation.reversing && (this.situation.reversed = this.situation.reversed != Boolean((this.situation.loop - a3) % 2))) : (this.absPos = Math.min(this.absPos, 1), this.pos = this.absPos), this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos);
      var s3 = this.situation.ease(this.pos);
      for (var r3 in this.situation.once) r3 > this.lastPos && r3 <= s3 && (this.situation.once[r3].call(this.target(), this.pos, s3), delete this.situation.once[r3]);
      return this.active && this.target().fire("during", { pos: this.pos, eased: s3, fx: this, situation: this.situation }), this.situation ? (this.eachAt(), 1 == this.pos && !this.situation.reversed || this.situation.reversed && 0 == this.pos ? (this.stopAnimFrame(), this.target().fire("finished", { fx: this, situation: this.situation }), this.situations.length || (this.target().fire("allfinished"), this.situations.length || (this.target().off(".fx"), this.active = false)), this.active ? this.dequeue() : this.clearCurrent()) : !this.paused && this.active && this.startAnimFrame(), this.lastPos = s3, this) : this;
    }, eachAt: function() {
      var t3, e3 = this, a3 = this.target(), s3 = this.situation;
      for (var r3 in s3.animations) t3 = [].concat(s3.animations[r3]).map(function(t4) {
        return "string" != typeof t4 && t4.at ? t4.at(s3.ease(e3.pos), e3.pos) : t4;
      }), a3[r3].apply(a3, t3);
      for (var r3 in s3.attrs) t3 = [r3].concat(s3.attrs[r3]).map(function(t4) {
        return "string" != typeof t4 && t4.at ? t4.at(s3.ease(e3.pos), e3.pos) : t4;
      }), a3.attr.apply(a3, t3);
      for (var r3 in s3.styles) t3 = [r3].concat(s3.styles[r3]).map(function(t4) {
        return "string" != typeof t4 && t4.at ? t4.at(s3.ease(e3.pos), e3.pos) : t4;
      }), a3.style.apply(a3, t3);
      if (s3.transforms.length) {
        t3 = s3.initialTransformation, r3 = 0;
        for (var o3 = s3.transforms.length; r3 < o3; r3++) {
          var n3 = s3.transforms[r3];
          n3 instanceof i2.Matrix ? t3 = n3.relative ? t3.multiply(new i2.Matrix().morph(n3).at(s3.ease(this.pos))) : t3.morph(n3).at(s3.ease(this.pos)) : (n3.relative || n3.undo(t3.extract()), t3 = t3.multiply(n3.at(s3.ease(this.pos))));
        }
        a3.matrix(t3);
      }
      return this;
    }, once: function(t3, e3, i3) {
      var a3 = this.last();
      return i3 || (t3 = a3.ease(t3)), a3.once[t3] = e3, this;
    }, _callStart: function() {
      return setTimeout((function() {
        this.start();
      }).bind(this), 0), this;
    } }, parent: i2.Element, construct: { animate: function(t3, e3, a3) {
      return (this.fx || (this.fx = new i2.FX(this))).animate(t3, e3, a3);
    }, delay: function(t3) {
      return (this.fx || (this.fx = new i2.FX(this))).delay(t3);
    }, stop: function(t3, e3) {
      return this.fx && this.fx.stop(t3, e3), this;
    }, finish: function() {
      return this.fx && this.fx.finish(), this;
    } } }), i2.MorphObj = i2.invent({ create: function(t3, e3) {
      return i2.Color.isColor(e3) ? new i2.Color(t3).morph(e3) : i2.regex.delimiter.test(t3) ? i2.regex.pathLetters.test(t3) ? new i2.PathArray(t3).morph(e3) : new i2.Array(t3).morph(e3) : i2.regex.numberAndUnit.test(e3) ? new i2.Number(t3).morph(e3) : (this.value = t3, void (this.destination = e3));
    }, extend: { at: function(t3, e3) {
      return e3 < 1 ? this.value : this.destination;
    }, valueOf: function() {
      return this.value;
    } } }), i2.extend(i2.FX, { attr: function(t3, e3, i3) {
      if ("object" === b(t3)) for (var a3 in t3) this.attr(a3, t3[a3]);
      else this.add(t3, e3, "attrs");
      return this;
    }, plot: function(t3, e3, i3, a3) {
      return 4 == arguments.length ? this.plot([t3, e3, i3, a3]) : this.add("plot", new (this.target()).morphArray(t3));
    } }), i2.Box = i2.invent({ create: function(t3, e3, a3, s3) {
      if (!("object" !== b(t3) || t3 instanceof i2.Element)) return i2.Box.call(this, null != t3.left ? t3.left : t3.x, null != t3.top ? t3.top : t3.y, t3.width, t3.height);
      var r3;
      4 == arguments.length && (this.x = t3, this.y = e3, this.width = a3, this.height = s3), null == (r3 = this).x && (r3.x = 0, r3.y = 0, r3.width = 0, r3.height = 0), r3.w = r3.width, r3.h = r3.height, r3.x2 = r3.x + r3.width, r3.y2 = r3.y + r3.height, r3.cx = r3.x + r3.width / 2, r3.cy = r3.y + r3.height / 2;
    } }), i2.BBox = i2.invent({ create: function(t3) {
      if (i2.Box.apply(this, [].slice.call(arguments)), t3 instanceof i2.Element) {
        var a3;
        try {
          if (!e2.documentElement.contains) {
            for (var s3 = t3.node; s3.parentNode; ) s3 = s3.parentNode;
            if (s3 != e2) throw new Error("Element not in the dom");
          }
          a3 = t3.node.getBBox();
        } catch (e3) {
          if (t3 instanceof i2.Shape) {
            i2.parser.draw || i2.prepare();
            var r3 = t3.clone(i2.parser.draw.instance).show();
            r3 && r3.node && "function" == typeof r3.node.getBBox && (a3 = r3.node.getBBox()), r3 && "function" == typeof r3.remove && r3.remove();
          } else a3 = { x: t3.node.clientLeft, y: t3.node.clientTop, width: t3.node.clientWidth, height: t3.node.clientHeight };
        }
        i2.Box.call(this, a3);
      }
    }, inherit: i2.Box, parent: i2.Element, construct: { bbox: function() {
      return new i2.BBox(this);
    } } }), i2.BBox.prototype.constructor = i2.BBox, i2.Matrix = i2.invent({ create: function(t3) {
      var e3 = f2([1, 0, 0, 1, 0, 0]);
      t3 = null === t3 ? e3 : t3 instanceof i2.Element ? t3.matrixify() : "string" == typeof t3 ? f2(t3.split(i2.regex.delimiter).map(parseFloat)) : 6 == arguments.length ? f2([].slice.call(arguments)) : Array.isArray(t3) ? f2(t3) : t3 && "object" === b(t3) ? t3 : e3;
      for (var a3 = v2.length - 1; a3 >= 0; --a3) this[v2[a3]] = null != t3[v2[a3]] ? t3[v2[a3]] : e3[v2[a3]];
    }, extend: { extract: function() {
      var t3 = u2(this, 0, 1);
      u2(this, 1, 0);
      var e3 = 180 / Math.PI * Math.atan2(t3.y, t3.x) - 90;
      return { x: this.e, y: this.f, transformedX: (this.e * Math.cos(e3 * Math.PI / 180) + this.f * Math.sin(e3 * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b), transformedY: (this.f * Math.cos(e3 * Math.PI / 180) + this.e * Math.sin(-e3 * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d), rotation: e3, a: this.a, b: this.b, c: this.c, d: this.d, e: this.e, f: this.f, matrix: new i2.Matrix(this) };
    }, clone: function() {
      return new i2.Matrix(this);
    }, morph: function(t3) {
      return this.destination = new i2.Matrix(t3), this;
    }, multiply: function(t3) {
      return new i2.Matrix(this.native().multiply(function(t4) {
        return t4 instanceof i2.Matrix || (t4 = new i2.Matrix(t4)), t4;
      }(t3).native()));
    }, inverse: function() {
      return new i2.Matrix(this.native().inverse());
    }, translate: function(t3, e3) {
      return new i2.Matrix(this.native().translate(t3 || 0, e3 || 0));
    }, native: function() {
      for (var t3 = i2.parser.native.createSVGMatrix(), e3 = v2.length - 1; e3 >= 0; e3--) t3[v2[e3]] = this[v2[e3]];
      return t3;
    }, toString: function() {
      return "matrix(" + x2(this.a) + "," + x2(this.b) + "," + x2(this.c) + "," + x2(this.d) + "," + x2(this.e) + "," + x2(this.f) + ")";
    } }, parent: i2.Element, construct: { ctm: function() {
      return new i2.Matrix(this.node.getCTM());
    }, screenCTM: function() {
      if (this instanceof i2.Nested) {
        var t3 = this.rect(1, 1), e3 = t3.node.getScreenCTM();
        return t3.remove(), new i2.Matrix(e3);
      }
      return new i2.Matrix(this.node.getScreenCTM());
    } } }), i2.Point = i2.invent({ create: function(t3, e3) {
      var i3;
      i3 = Array.isArray(t3) ? { x: t3[0], y: t3[1] } : "object" === b(t3) ? { x: t3.x, y: t3.y } : null != t3 ? { x: t3, y: null != e3 ? e3 : t3 } : { x: 0, y: 0 }, this.x = i3.x, this.y = i3.y;
    }, extend: { clone: function() {
      return new i2.Point(this);
    }, morph: function(t3, e3) {
      return this.destination = new i2.Point(t3, e3), this;
    } } }), i2.extend(i2.Element, { point: function(t3, e3) {
      return new i2.Point(t3, e3).transform(this.screenCTM().inverse());
    } }), i2.extend(i2.Element, { attr: function(t3, e3, a3) {
      if (null == t3) {
        for (t3 = {}, a3 = (e3 = this.node.attributes).length - 1; a3 >= 0; a3--) t3[e3[a3].nodeName] = i2.regex.isNumber.test(e3[a3].nodeValue) ? parseFloat(e3[a3].nodeValue) : e3[a3].nodeValue;
        return t3;
      }
      if ("object" === b(t3)) for (var s3 in t3) this.attr(s3, t3[s3]);
      else if (null === e3) this.node.removeAttribute(t3);
      else {
        if (null == e3) return null == (e3 = this.node.getAttribute(t3)) ? i2.defaults.attrs[t3] : i2.regex.isNumber.test(e3) ? parseFloat(e3) : e3;
        "stroke-width" == t3 ? this.attr("stroke", parseFloat(e3) > 0 ? this._stroke : null) : "stroke" == t3 && (this._stroke = e3), "fill" != t3 && "stroke" != t3 || (i2.regex.isImage.test(e3) && (e3 = this.doc().defs().image(e3, 0, 0)), e3 instanceof i2.Image && (e3 = this.doc().defs().pattern(0, 0, function() {
          this.add(e3);
        }))), "number" == typeof e3 ? e3 = new i2.Number(e3) : i2.Color.isColor(e3) ? e3 = new i2.Color(e3) : Array.isArray(e3) && (e3 = new i2.Array(e3)), "leading" == t3 ? this.leading && this.leading(e3) : "string" == typeof a3 ? this.node.setAttributeNS(a3, t3, e3.toString()) : this.node.setAttribute(t3, e3.toString()), !this.rebuild || "font-size" != t3 && "x" != t3 || this.rebuild(t3, e3);
      }
      return this;
    } }), i2.extend(i2.Element, { transform: function(t3, e3) {
      var a3;
      return "object" !== b(t3) ? (a3 = new i2.Matrix(this).extract(), "string" == typeof t3 ? a3[t3] : a3) : (a3 = new i2.Matrix(this), e3 = !!e3 || !!t3.relative, null != t3.a && (a3 = e3 ? a3.multiply(new i2.Matrix(t3)) : new i2.Matrix(t3)), this.attr("transform", a3));
    } }), i2.extend(i2.Element, { untransform: function() {
      return this.attr("transform", null);
    }, matrixify: function() {
      return (this.attr("transform") || "").split(i2.regex.transforms).slice(0, -1).map(function(t3) {
        var e3 = t3.trim().split("(");
        return [e3[0], e3[1].split(i2.regex.delimiter).map(function(t4) {
          return parseFloat(t4);
        })];
      }).reduce(function(t3, e3) {
        return "matrix" == e3[0] ? t3.multiply(f2(e3[1])) : t3[e3[0]].apply(t3, e3[1]);
      }, new i2.Matrix());
    }, toParent: function(t3) {
      if (this == t3) return this;
      var e3 = this.screenCTM(), i3 = t3.screenCTM().inverse();
      return this.addTo(t3).untransform().transform(i3.multiply(e3)), this;
    }, toDoc: function() {
      return this.toParent(this.doc());
    } }), i2.Transformation = i2.invent({ create: function(t3, e3) {
      if (arguments.length > 1 && "boolean" != typeof e3) return this.constructor.call(this, [].slice.call(arguments));
      if (Array.isArray(t3)) for (var i3 = 0, a3 = this.arguments.length; i3 < a3; ++i3) this[this.arguments[i3]] = t3[i3];
      else if (t3 && "object" === b(t3)) for (i3 = 0, a3 = this.arguments.length; i3 < a3; ++i3) this[this.arguments[i3]] = t3[this.arguments[i3]];
      this.inversed = false, true === e3 && (this.inversed = true);
    } }), i2.Translate = i2.invent({ parent: i2.Matrix, inherit: i2.Transformation, create: function(t3, e3) {
      this.constructor.apply(this, [].slice.call(arguments));
    }, extend: { arguments: ["transformedX", "transformedY"], method: "translate" } }), i2.extend(i2.Element, { style: function(t3, e3) {
      if (0 == arguments.length) return this.node.style.cssText || "";
      if (arguments.length < 2) if ("object" === b(t3)) for (var a3 in t3) this.style(a3, t3[a3]);
      else {
        if (!i2.regex.isCss.test(t3)) return this.node.style[h2(t3)];
        for (t3 = t3.split(/\s*;\s*/).filter(function(t4) {
          return !!t4;
        }).map(function(t4) {
          return t4.split(/\s*:\s*/);
        }); e3 = t3.pop(); ) this.style(e3[0], e3[1]);
      }
      else this.node.style[h2(t3)] = null === e3 || i2.regex.isBlank.test(e3) ? "" : e3;
      return this;
    } }), i2.Parent = i2.invent({ create: function(t3) {
      this.constructor.call(this, t3);
    }, inherit: i2.Element, extend: { children: function() {
      return i2.utils.map(i2.utils.filterSVGElements(this.node.childNodes), function(t3) {
        return i2.adopt(t3);
      });
    }, add: function(t3, e3) {
      return null == e3 ? this.node.appendChild(t3.node) : t3.node != this.node.childNodes[e3] && this.node.insertBefore(t3.node, this.node.childNodes[e3]), this;
    }, put: function(t3, e3) {
      return this.add(t3, e3), t3;
    }, has: function(t3) {
      return this.index(t3) >= 0;
    }, index: function(t3) {
      return [].slice.call(this.node.childNodes).indexOf(t3.node);
    }, get: function(t3) {
      return i2.adopt(this.node.childNodes[t3]);
    }, first: function() {
      return this.get(0);
    }, last: function() {
      return this.get(this.node.childNodes.length - 1);
    }, each: function(t3, e3) {
      for (var a3 = this.children(), s3 = 0, r3 = a3.length; s3 < r3; s3++) a3[s3] instanceof i2.Element && t3.apply(a3[s3], [s3, a3]), e3 && a3[s3] instanceof i2.Container && a3[s3].each(t3, e3);
      return this;
    }, removeElement: function(t3) {
      return this.node.removeChild(t3.node), this;
    }, clear: function() {
      for (; this.node.hasChildNodes(); ) this.node.removeChild(this.node.lastChild);
      return delete this._defs, this;
    }, defs: function() {
      return this.doc().defs();
    } } }), i2.extend(i2.Parent, { ungroup: function(t3, e3) {
      return 0 === e3 || this instanceof i2.Defs || this.node == i2.parser.draw || (t3 = t3 || (this instanceof i2.Doc ? this : this.parent(i2.Parent)), e3 = e3 || 1 / 0, this.each(function() {
        return this instanceof i2.Defs ? this : this instanceof i2.Parent ? this.ungroup(t3, e3 - 1) : this.toParent(t3);
      }), this.node.firstChild || this.remove()), this;
    }, flatten: function(t3, e3) {
      return this.ungroup(t3, e3);
    } }), i2.Container = i2.invent({ create: function(t3) {
      this.constructor.call(this, t3);
    }, inherit: i2.Parent }), i2.ViewBox = i2.invent({ parent: i2.Container, construct: {} }), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach(function(t3) {
      i2.Element.prototype[t3] = function(e3) {
        return i2.on(this.node, t3, e3), this;
      };
    }), i2.listeners = [], i2.handlerMap = [], i2.listenerId = 0, i2.on = function(t3, e3, a3, s3, r3) {
      var o3 = a3.bind(s3 || t3.instance || t3), n3 = (i2.handlerMap.indexOf(t3) + 1 || i2.handlerMap.push(t3)) - 1, l3 = e3.split(".")[0], h3 = e3.split(".")[1] || "*";
      i2.listeners[n3] = i2.listeners[n3] || {}, i2.listeners[n3][l3] = i2.listeners[n3][l3] || {}, i2.listeners[n3][l3][h3] = i2.listeners[n3][l3][h3] || {}, a3._svgjsListenerId || (a3._svgjsListenerId = ++i2.listenerId), i2.listeners[n3][l3][h3][a3._svgjsListenerId] = o3, t3.addEventListener(l3, o3, r3 || { passive: false });
    }, i2.off = function(t3, e3, a3) {
      var s3 = i2.handlerMap.indexOf(t3), r3 = e3 && e3.split(".")[0], o3 = e3 && e3.split(".")[1], n3 = "";
      if (-1 != s3) if (a3) {
        if ("function" == typeof a3 && (a3 = a3._svgjsListenerId), !a3) return;
        i2.listeners[s3][r3] && i2.listeners[s3][r3][o3 || "*"] && (t3.removeEventListener(r3, i2.listeners[s3][r3][o3 || "*"][a3], false), delete i2.listeners[s3][r3][o3 || "*"][a3]);
      } else if (o3 && r3) {
        if (i2.listeners[s3][r3] && i2.listeners[s3][r3][o3]) {
          for (var l3 in i2.listeners[s3][r3][o3]) i2.off(t3, [r3, o3].join("."), l3);
          delete i2.listeners[s3][r3][o3];
        }
      } else if (o3) for (var h3 in i2.listeners[s3]) for (var n3 in i2.listeners[s3][h3]) o3 === n3 && i2.off(t3, [h3, o3].join("."));
      else if (r3) {
        if (i2.listeners[s3][r3]) {
          for (var n3 in i2.listeners[s3][r3]) i2.off(t3, [r3, n3].join("."));
          delete i2.listeners[s3][r3];
        }
      } else {
        for (var h3 in i2.listeners[s3]) i2.off(t3, h3);
        delete i2.listeners[s3], delete i2.handlerMap[s3];
      }
    }, i2.extend(i2.Element, { on: function(t3, e3, a3, s3) {
      return i2.on(this.node, t3, e3, a3, s3), this;
    }, off: function(t3, e3) {
      return i2.off(this.node, t3, e3), this;
    }, fire: function(e3, a3) {
      return e3 instanceof t2.Event ? this.node.dispatchEvent(e3) : this.node.dispatchEvent(e3 = new i2.CustomEvent(e3, { detail: a3, cancelable: true })), this._event = e3, this;
    }, event: function() {
      return this._event;
    } }), i2.Defs = i2.invent({ create: "defs", inherit: i2.Container }), i2.G = i2.invent({ create: "g", inherit: i2.Container, extend: { x: function(t3) {
      return null == t3 ? this.transform("x") : this.transform({ x: t3 - this.x() }, true);
    } }, construct: { group: function() {
      return this.put(new i2.G());
    } } }), i2.Doc = i2.invent({ create: function(t3) {
      t3 && ("svg" == (t3 = "string" == typeof t3 ? e2.getElementById(t3) : t3).nodeName ? this.constructor.call(this, t3) : (this.constructor.call(this, i2.create("svg")), t3.appendChild(this.node), this.size("100%", "100%")), this.namespace().defs());
    }, inherit: i2.Container, extend: { namespace: function() {
      return this.attr({ xmlns: i2.ns, version: "1.1" }).attr("xmlns:xlink", i2.xlink, i2.xmlns).attr("xmlns:svgjs", i2.svgjs, i2.xmlns);
    }, defs: function() {
      var t3;
      return this._defs || ((t3 = this.node.getElementsByTagName("defs")[0]) ? this._defs = i2.adopt(t3) : this._defs = new i2.Defs(), this.node.appendChild(this._defs.node)), this._defs;
    }, parent: function() {
      return this.node.parentNode && "#document" != this.node.parentNode.nodeName ? this.node.parentNode : null;
    }, remove: function() {
      return this.parent() && this.parent().removeChild(this.node), this;
    }, clear: function() {
      for (; this.node.hasChildNodes(); ) this.node.removeChild(this.node.lastChild);
      return delete this._defs, i2.parser.draw && !i2.parser.draw.parentNode && this.node.appendChild(i2.parser.draw), this;
    }, clone: function(t3) {
      this.writeDataToDom();
      var e3 = this.node, i3 = p2(e3.cloneNode(true));
      return t3 ? (t3.node || t3).appendChild(i3.node) : e3.parentNode.insertBefore(i3.node, e3.nextSibling), i3;
    } } }), i2.extend(i2.Element, {}), i2.Gradient = i2.invent({ create: function(t3) {
      this.constructor.call(this, i2.create(t3 + "Gradient")), this.type = t3;
    }, inherit: i2.Container, extend: { at: function(t3, e3, a3) {
      return this.put(new i2.Stop()).update(t3, e3, a3);
    }, update: function(t3) {
      return this.clear(), "function" == typeof t3 && t3.call(this, this), this;
    }, fill: function() {
      return "url(#" + this.id() + ")";
    }, toString: function() {
      return this.fill();
    }, attr: function(t3, e3, a3) {
      return "transform" == t3 && (t3 = "gradientTransform"), i2.Container.prototype.attr.call(this, t3, e3, a3);
    } }, construct: { gradient: function(t3, e3) {
      return this.defs().gradient(t3, e3);
    } } }), i2.extend(i2.Gradient, i2.FX, { from: function(t3, e3) {
      return "radial" == (this._target || this).type ? this.attr({ fx: new i2.Number(t3), fy: new i2.Number(e3) }) : this.attr({ x1: new i2.Number(t3), y1: new i2.Number(e3) });
    }, to: function(t3, e3) {
      return "radial" == (this._target || this).type ? this.attr({ cx: new i2.Number(t3), cy: new i2.Number(e3) }) : this.attr({ x2: new i2.Number(t3), y2: new i2.Number(e3) });
    } }), i2.extend(i2.Defs, { gradient: function(t3, e3) {
      return this.put(new i2.Gradient(t3)).update(e3);
    } }), i2.Stop = i2.invent({ create: "stop", inherit: i2.Element, extend: { update: function(t3) {
      return ("number" == typeof t3 || t3 instanceof i2.Number) && (t3 = { offset: arguments[0], color: arguments[1], opacity: arguments[2] }), null != t3.opacity && this.attr("stop-opacity", t3.opacity), null != t3.color && this.attr("stop-color", t3.color), null != t3.offset && this.attr("offset", new i2.Number(t3.offset)), this;
    } } }), i2.Pattern = i2.invent({ create: "pattern", inherit: i2.Container, extend: { fill: function() {
      return "url(#" + this.id() + ")";
    }, update: function(t3) {
      return this.clear(), "function" == typeof t3 && t3.call(this, this), this;
    }, toString: function() {
      return this.fill();
    }, attr: function(t3, e3, a3) {
      return "transform" == t3 && (t3 = "patternTransform"), i2.Container.prototype.attr.call(this, t3, e3, a3);
    } }, construct: { pattern: function(t3, e3, i3) {
      return this.defs().pattern(t3, e3, i3);
    } } }), i2.extend(i2.Defs, { pattern: function(t3, e3, a3) {
      return this.put(new i2.Pattern()).update(a3).attr({ x: 0, y: 0, width: t3, height: e3, patternUnits: "userSpaceOnUse" });
    } }), i2.Shape = i2.invent({ create: function(t3) {
      this.constructor.call(this, t3);
    }, inherit: i2.Element }), i2.Symbol = i2.invent({ create: "symbol", inherit: i2.Container, construct: { symbol: function() {
      return this.put(new i2.Symbol());
    } } }), i2.Use = i2.invent({ create: "use", inherit: i2.Shape, extend: { element: function(t3, e3) {
      return this.attr("href", (e3 || "") + "#" + t3, i2.xlink);
    } }, construct: { use: function(t3, e3) {
      return this.put(new i2.Use()).element(t3, e3);
    } } }), i2.Rect = i2.invent({ create: "rect", inherit: i2.Shape, construct: { rect: function(t3, e3) {
      return this.put(new i2.Rect()).size(t3, e3);
    } } }), i2.Circle = i2.invent({ create: "circle", inherit: i2.Shape, construct: { circle: function(t3) {
      return this.put(new i2.Circle()).rx(new i2.Number(t3).divide(2)).move(0, 0);
    } } }), i2.extend(i2.Circle, i2.FX, { rx: function(t3) {
      return this.attr("r", t3);
    }, ry: function(t3) {
      return this.rx(t3);
    } }), i2.Ellipse = i2.invent({ create: "ellipse", inherit: i2.Shape, construct: { ellipse: function(t3, e3) {
      return this.put(new i2.Ellipse()).size(t3, e3).move(0, 0);
    } } }), i2.extend(i2.Ellipse, i2.Rect, i2.FX, { rx: function(t3) {
      return this.attr("rx", t3);
    }, ry: function(t3) {
      return this.attr("ry", t3);
    } }), i2.extend(i2.Circle, i2.Ellipse, { x: function(t3) {
      return null == t3 ? this.cx() - this.rx() : this.cx(t3 + this.rx());
    }, y: function(t3) {
      return null == t3 ? this.cy() - this.ry() : this.cy(t3 + this.ry());
    }, cx: function(t3) {
      return null == t3 ? this.attr("cx") : this.attr("cx", t3);
    }, cy: function(t3) {
      return null == t3 ? this.attr("cy") : this.attr("cy", t3);
    }, width: function(t3) {
      return null == t3 ? 2 * this.rx() : this.rx(new i2.Number(t3).divide(2));
    }, height: function(t3) {
      return null == t3 ? 2 * this.ry() : this.ry(new i2.Number(t3).divide(2));
    }, size: function(t3, e3) {
      var a3 = g2(this, t3, e3);
      return this.rx(new i2.Number(a3.width).divide(2)).ry(new i2.Number(a3.height).divide(2));
    } }), i2.Line = i2.invent({ create: "line", inherit: i2.Shape, extend: { array: function() {
      return new i2.PointArray([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]);
    }, plot: function(t3, e3, a3, s3) {
      return null == t3 ? this.array() : (t3 = void 0 !== e3 ? { x1: t3, y1: e3, x2: a3, y2: s3 } : new i2.PointArray(t3).toLine(), this.attr(t3));
    }, move: function(t3, e3) {
      return this.attr(this.array().move(t3, e3).toLine());
    }, size: function(t3, e3) {
      var i3 = g2(this, t3, e3);
      return this.attr(this.array().size(i3.width, i3.height).toLine());
    } }, construct: { line: function(t3, e3, a3, s3) {
      return i2.Line.prototype.plot.apply(this.put(new i2.Line()), null != t3 ? [t3, e3, a3, s3] : [0, 0, 0, 0]);
    } } }), i2.Polyline = i2.invent({ create: "polyline", inherit: i2.Shape, construct: { polyline: function(t3) {
      return this.put(new i2.Polyline()).plot(t3 || new i2.PointArray());
    } } }), i2.Polygon = i2.invent({ create: "polygon", inherit: i2.Shape, construct: { polygon: function(t3) {
      return this.put(new i2.Polygon()).plot(t3 || new i2.PointArray());
    } } }), i2.extend(i2.Polyline, i2.Polygon, { array: function() {
      return this._array || (this._array = new i2.PointArray(this.attr("points")));
    }, plot: function(t3) {
      return null == t3 ? this.array() : this.clear().attr("points", "string" == typeof t3 ? t3 : this._array = new i2.PointArray(t3));
    }, clear: function() {
      return delete this._array, this;
    }, move: function(t3, e3) {
      return this.attr("points", this.array().move(t3, e3));
    }, size: function(t3, e3) {
      var i3 = g2(this, t3, e3);
      return this.attr("points", this.array().size(i3.width, i3.height));
    } }), i2.extend(i2.Line, i2.Polyline, i2.Polygon, { morphArray: i2.PointArray, x: function(t3) {
      return null == t3 ? this.bbox().x : this.move(t3, this.bbox().y);
    }, y: function(t3) {
      return null == t3 ? this.bbox().y : this.move(this.bbox().x, t3);
    }, width: function(t3) {
      var e3 = this.bbox();
      return null == t3 ? e3.width : this.size(t3, e3.height);
    }, height: function(t3) {
      var e3 = this.bbox();
      return null == t3 ? e3.height : this.size(e3.width, t3);
    } }), i2.Path = i2.invent({ create: "path", inherit: i2.Shape, extend: { morphArray: i2.PathArray, array: function() {
      return this._array || (this._array = new i2.PathArray(this.attr("d")));
    }, plot: function(t3) {
      return null == t3 ? this.array() : this.clear().attr("d", "string" == typeof t3 ? t3 : this._array = new i2.PathArray(t3));
    }, clear: function() {
      return delete this._array, this;
    } }, construct: { path: function(t3) {
      return this.put(new i2.Path()).plot(t3 || new i2.PathArray());
    } } }), i2.Image = i2.invent({ create: "image", inherit: i2.Shape, extend: { load: function(e3) {
      if (!e3) return this;
      var a3 = this, s3 = new t2.Image();
      return i2.on(s3, "load", function() {
        i2.off(s3);
        var t3 = a3.parent(i2.Pattern);
        null !== t3 && (0 == a3.width() && 0 == a3.height() && a3.size(s3.width, s3.height), t3 && 0 == t3.width() && 0 == t3.height() && t3.size(a3.width(), a3.height()), "function" == typeof a3._loaded && a3._loaded.call(a3, { width: s3.width, height: s3.height, ratio: s3.width / s3.height, url: e3 }));
      }), i2.on(s3, "error", function(t3) {
        i2.off(s3), "function" == typeof a3._error && a3._error.call(a3, t3);
      }), this.attr("href", s3.src = this.src = e3, i2.xlink);
    }, loaded: function(t3) {
      return this._loaded = t3, this;
    }, error: function(t3) {
      return this._error = t3, this;
    } }, construct: { image: function(t3, e3, a3) {
      return this.put(new i2.Image()).load(t3).size(e3 || 0, a3 || e3 || 0);
    } } }), i2.Text = i2.invent({ create: function() {
      this.constructor.call(this, i2.create("text")), this.dom.leading = new i2.Number(1.3), this._rebuild = true, this._build = false, this.attr("font-family", i2.defaults.attrs["font-family"]);
    }, inherit: i2.Shape, extend: { x: function(t3) {
      return null == t3 ? this.attr("x") : this.attr("x", t3);
    }, text: function(t3) {
      if (void 0 === t3) {
        t3 = "";
        for (var e3 = this.node.childNodes, a3 = 0, s3 = e3.length; a3 < s3; ++a3) 0 != a3 && 3 != e3[a3].nodeType && 1 == i2.adopt(e3[a3]).dom.newLined && (t3 += "\n"), t3 += e3[a3].textContent;
        return t3;
      }
      if (this.clear().build(true), "function" == typeof t3) t3.call(this, this);
      else {
        a3 = 0;
        for (var r3 = (t3 = t3.split("\n")).length; a3 < r3; a3++) this.tspan(t3[a3]).newLine();
      }
      return this.build(false).rebuild();
    }, size: function(t3) {
      return this.attr("font-size", t3).rebuild();
    }, leading: function(t3) {
      return null == t3 ? this.dom.leading : (this.dom.leading = new i2.Number(t3), this.rebuild());
    }, lines: function() {
      var t3 = (this.textPath && this.textPath() || this).node, e3 = i2.utils.map(i2.utils.filterSVGElements(t3.childNodes), function(t4) {
        return i2.adopt(t4);
      });
      return new i2.Set(e3);
    }, rebuild: function(t3) {
      if ("boolean" == typeof t3 && (this._rebuild = t3), this._rebuild) {
        var e3 = this, a3 = 0, s3 = this.dom.leading * new i2.Number(this.attr("font-size"));
        this.lines().each(function() {
          this.dom.newLined && (e3.textPath() || this.attr("x", e3.attr("x")), "\n" == this.text() ? a3 += s3 : (this.attr("dy", s3 + a3), a3 = 0));
        }), this.fire("rebuild");
      }
      return this;
    }, build: function(t3) {
      return this._build = !!t3, this;
    }, setData: function(t3) {
      return this.dom = t3, this.dom.leading = new i2.Number(t3.leading || 1.3), this;
    } }, construct: { text: function(t3) {
      return this.put(new i2.Text()).text(t3);
    }, plain: function(t3) {
      return this.put(new i2.Text()).plain(t3);
    } } }), i2.Tspan = i2.invent({ create: "tspan", inherit: i2.Shape, extend: { text: function(t3) {
      return null == t3 ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t3 ? t3.call(this, this) : this.plain(t3), this);
    }, dx: function(t3) {
      return this.attr("dx", t3);
    }, dy: function(t3) {
      return this.attr("dy", t3);
    }, newLine: function() {
      var t3 = this.parent(i2.Text);
      return this.dom.newLined = true, this.dy(t3.dom.leading * t3.attr("font-size")).attr("x", t3.x());
    } } }), i2.extend(i2.Text, i2.Tspan, { plain: function(t3) {
      return false === this._build && this.clear(), this.node.appendChild(e2.createTextNode(t3)), this;
    }, tspan: function(t3) {
      var e3 = (this.textPath && this.textPath() || this).node, a3 = new i2.Tspan();
      return false === this._build && this.clear(), e3.appendChild(a3.node), a3.text(t3);
    }, clear: function() {
      for (var t3 = (this.textPath && this.textPath() || this).node; t3.hasChildNodes(); ) t3.removeChild(t3.lastChild);
      return this;
    }, length: function() {
      return this.node.getComputedTextLength();
    } }), i2.TextPath = i2.invent({ create: "textPath", inherit: i2.Parent, parent: i2.Text, construct: { morphArray: i2.PathArray, array: function() {
      var t3 = this.track();
      return t3 ? t3.array() : null;
    }, plot: function(t3) {
      var e3 = this.track(), i3 = null;
      return e3 && (i3 = e3.plot(t3)), null == t3 ? i3 : this;
    }, track: function() {
      var t3 = this.textPath();
      if (t3) return t3.reference("href");
    }, textPath: function() {
      if (this.node.firstChild && "textPath" == this.node.firstChild.nodeName) return i2.adopt(this.node.firstChild);
    } } }), i2.Nested = i2.invent({ create: function() {
      this.constructor.call(this, i2.create("svg")), this.style("overflow", "visible");
    }, inherit: i2.Container, construct: { nested: function() {
      return this.put(new i2.Nested());
    } } });
    var n2 = { stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"], fill: ["color", "opacity", "rule"], prefix: function(t3, e3) {
      return "color" == e3 ? t3 : t3 + "-" + e3;
    } };
    function l2(t3, e3, a3, s3) {
      return a3 + s3.replace(i2.regex.dots, " .");
    }
    function h2(t3) {
      return t3.toLowerCase().replace(/-(.)/g, function(t4, e3) {
        return e3.toUpperCase();
      });
    }
    function c2(t3) {
      return t3.charAt(0).toUpperCase() + t3.slice(1);
    }
    function d2(t3) {
      var e3 = t3.toString(16);
      return 1 == e3.length ? "0" + e3 : e3;
    }
    function g2(t3, e3, i3) {
      if (null == e3 || null == i3) {
        var a3 = t3.bbox();
        null == e3 ? e3 = a3.width / a3.height * i3 : null == i3 && (i3 = a3.height / a3.width * e3);
      }
      return { width: e3, height: i3 };
    }
    function u2(t3, e3, i3) {
      return { x: e3 * t3.a + i3 * t3.c + 0, y: e3 * t3.b + i3 * t3.d + 0 };
    }
    function f2(t3) {
      return { a: t3[0], b: t3[1], c: t3[2], d: t3[3], e: t3[4], f: t3[5] };
    }
    function p2(e3) {
      for (var a3 = e3.childNodes.length - 1; a3 >= 0; a3--) e3.childNodes[a3] instanceof t2.SVGElement && p2(e3.childNodes[a3]);
      return i2.adopt(e3).id(i2.eid(e3.nodeName));
    }
    function x2(t3) {
      return Math.abs(t3) > 1e-37 ? t3 : 0;
    }
    ["fill", "stroke"].forEach(function(t3) {
      var e3 = {};
      e3[t3] = function(e4) {
        if (void 0 === e4) return this;
        if ("string" == typeof e4 || i2.Color.isRgb(e4) || e4 && "function" == typeof e4.fill) this.attr(t3, e4);
        else for (var a3 = n2[t3].length - 1; a3 >= 0; a3--) null != e4[n2[t3][a3]] && this.attr(n2.prefix(t3, n2[t3][a3]), e4[n2[t3][a3]]);
        return this;
      }, i2.extend(i2.Element, i2.FX, e3);
    }), i2.extend(i2.Element, i2.FX, { translate: function(t3, e3) {
      return this.transform({ x: t3, y: e3 });
    }, matrix: function(t3) {
      return this.attr("transform", new i2.Matrix(6 == arguments.length ? [].slice.call(arguments) : t3));
    }, opacity: function(t3) {
      return this.attr("opacity", t3);
    }, dx: function(t3) {
      return this.x(new i2.Number(t3).plus(this instanceof i2.FX ? 0 : this.x()), true);
    }, dy: function(t3) {
      return this.y(new i2.Number(t3).plus(this instanceof i2.FX ? 0 : this.y()), true);
    } }), i2.extend(i2.Path, { length: function() {
      return this.node.getTotalLength();
    }, pointAt: function(t3) {
      return this.node.getPointAtLength(t3);
    } }), i2.Set = i2.invent({ create: function(t3) {
      Array.isArray(t3) ? this.members = t3 : this.clear();
    }, extend: { add: function() {
      for (var t3 = [].slice.call(arguments), e3 = 0, i3 = t3.length; e3 < i3; e3++) this.members.push(t3[e3]);
      return this;
    }, remove: function(t3) {
      var e3 = this.index(t3);
      return e3 > -1 && this.members.splice(e3, 1), this;
    }, each: function(t3) {
      for (var e3 = 0, i3 = this.members.length; e3 < i3; e3++) t3.apply(this.members[e3], [e3, this.members]);
      return this;
    }, clear: function() {
      return this.members = [], this;
    }, length: function() {
      return this.members.length;
    }, has: function(t3) {
      return this.index(t3) >= 0;
    }, index: function(t3) {
      return this.members.indexOf(t3);
    }, get: function(t3) {
      return this.members[t3];
    }, first: function() {
      return this.get(0);
    }, last: function() {
      return this.get(this.members.length - 1);
    }, valueOf: function() {
      return this.members;
    } }, construct: { set: function(t3) {
      return new i2.Set(t3);
    } } }), i2.FX.Set = i2.invent({ create: function(t3) {
      this.set = t3;
    } }), i2.Set.inherit = function() {
      var t3 = [];
      for (var e3 in i2.Shape.prototype) "function" == typeof i2.Shape.prototype[e3] && "function" != typeof i2.Set.prototype[e3] && t3.push(e3);
      for (var e3 in t3.forEach(function(t4) {
        i2.Set.prototype[t4] = function() {
          for (var e4 = 0, a3 = this.members.length; e4 < a3; e4++) this.members[e4] && "function" == typeof this.members[e4][t4] && this.members[e4][t4].apply(this.members[e4], arguments);
          return "animate" == t4 ? this.fx || (this.fx = new i2.FX.Set(this)) : this;
        };
      }), t3 = [], i2.FX.prototype) "function" == typeof i2.FX.prototype[e3] && "function" != typeof i2.FX.Set.prototype[e3] && t3.push(e3);
      t3.forEach(function(t4) {
        i2.FX.Set.prototype[t4] = function() {
          for (var e4 = 0, i3 = this.set.members.length; e4 < i3; e4++) this.set.members[e4].fx[t4].apply(this.set.members[e4].fx, arguments);
          return this;
        };
      });
    }, i2.extend(i2.Element, {}), i2.extend(i2.Element, { remember: function(t3, e3) {
      if ("object" === b(arguments[0])) for (var i3 in t3) this.remember(i3, t3[i3]);
      else {
        if (1 == arguments.length) return this.memory()[t3];
        this.memory()[t3] = e3;
      }
      return this;
    }, forget: function() {
      if (0 == arguments.length) this._memory = {};
      else for (var t3 = arguments.length - 1; t3 >= 0; t3--) delete this.memory()[arguments[t3]];
      return this;
    }, memory: function() {
      return this._memory || (this._memory = {});
    } }), i2.get = function(t3) {
      var a3 = e2.getElementById(function(t4) {
        var e3 = (t4 || "").toString().match(i2.regex.reference);
        if (e3) return e3[1];
      }(t3) || t3);
      return i2.adopt(a3);
    }, i2.select = function(t3, a3) {
      return new i2.Set(i2.utils.map((a3 || e2).querySelectorAll(t3), function(t4) {
        return i2.adopt(t4);
      }));
    }, i2.extend(i2.Parent, { select: function(t3) {
      return i2.select(t3, this.node);
    } });
    var v2 = "abcdef".split("");
    if ("function" != typeof t2.CustomEvent) {
      var m2 = function(t3, i3) {
        i3 = i3 || { bubbles: false, cancelable: false, detail: void 0 };
        var a3 = e2.createEvent("CustomEvent");
        return a3.initCustomEvent(t3, i3.bubbles, i3.cancelable, i3.detail), a3;
      };
      m2.prototype = t2.Event.prototype, i2.CustomEvent = m2;
    } else i2.CustomEvent = t2.CustomEvent;
    return i2;
  }, "object" === b(exports) && true ? module.exports = Nt.document ? Wt(Nt, Nt.document) : function(t2) {
    return Wt(t2, t2.document);
  } : Nt.SVG = Wt(Nt, Nt.document), /*! svg.filter.js - v2.0.2 - 2016-02-24
  * https://github.com/wout/svg.filter.js
  * Copyright (c) 2016 Wout Fierens; Licensed MIT */
  (function() {
    SVG.Filter = SVG.invent({ create: "filter", inherit: SVG.Parent, extend: { source: "SourceGraphic", sourceAlpha: "SourceAlpha", background: "BackgroundImage", backgroundAlpha: "BackgroundAlpha", fill: "FillPaint", stroke: "StrokePaint", autoSetIn: true, put: function(t3, e3) {
      return this.add(t3, e3), !t3.attr("in") && this.autoSetIn && t3.attr("in", this.source), t3.attr("result") || t3.attr("result", t3), t3;
    }, blend: function(t3, e3, i3) {
      return this.put(new SVG.BlendEffect(t3, e3, i3));
    }, colorMatrix: function(t3, e3) {
      return this.put(new SVG.ColorMatrixEffect(t3, e3));
    }, convolveMatrix: function(t3) {
      return this.put(new SVG.ConvolveMatrixEffect(t3));
    }, componentTransfer: function(t3) {
      return this.put(new SVG.ComponentTransferEffect(t3));
    }, composite: function(t3, e3, i3) {
      return this.put(new SVG.CompositeEffect(t3, e3, i3));
    }, flood: function(t3, e3) {
      return this.put(new SVG.FloodEffect(t3, e3));
    }, offset: function(t3, e3) {
      return this.put(new SVG.OffsetEffect(t3, e3));
    }, image: function(t3) {
      return this.put(new SVG.ImageEffect(t3));
    }, merge: function() {
      var t3 = [void 0];
      for (var e3 in arguments) t3.push(arguments[e3]);
      return this.put(new (SVG.MergeEffect.bind.apply(SVG.MergeEffect, t3))());
    }, gaussianBlur: function(t3, e3) {
      return this.put(new SVG.GaussianBlurEffect(t3, e3));
    }, morphology: function(t3, e3) {
      return this.put(new SVG.MorphologyEffect(t3, e3));
    }, diffuseLighting: function(t3, e3, i3) {
      return this.put(new SVG.DiffuseLightingEffect(t3, e3, i3));
    }, displacementMap: function(t3, e3, i3, a3, s3) {
      return this.put(new SVG.DisplacementMapEffect(t3, e3, i3, a3, s3));
    }, specularLighting: function(t3, e3, i3, a3) {
      return this.put(new SVG.SpecularLightingEffect(t3, e3, i3, a3));
    }, tile: function() {
      return this.put(new SVG.TileEffect());
    }, turbulence: function(t3, e3, i3, a3, s3) {
      return this.put(new SVG.TurbulenceEffect(t3, e3, i3, a3, s3));
    }, toString: function() {
      return "url(#" + this.attr("id") + ")";
    } } }), SVG.extend(SVG.Defs, { filter: function(t3) {
      var e3 = this.put(new SVG.Filter());
      return "function" == typeof t3 && t3.call(e3, e3), e3;
    } }), SVG.extend(SVG.Container, { filter: function(t3) {
      return this.defs().filter(t3);
    } }), SVG.extend(SVG.Element, SVG.G, SVG.Nested, { filter: function(t3) {
      return this.filterer = t3 instanceof SVG.Element ? t3 : this.doc().filter(t3), this.doc() && this.filterer.doc() !== this.doc() && this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer;
    }, unfilter: function(t3) {
      return this.filterer && true === t3 && this.filterer.remove(), delete this.filterer, this.attr("filter", null);
    } }), SVG.Effect = SVG.invent({ create: function() {
      this.constructor.call(this);
    }, inherit: SVG.Element, extend: { in: function(t3) {
      return null == t3 ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t3);
    }, result: function(t3) {
      return null == t3 ? this.attr("result") : this.attr("result", t3);
    }, toString: function() {
      return this.result();
    } } }), SVG.ParentEffect = SVG.invent({ create: function() {
      this.constructor.call(this);
    }, inherit: SVG.Parent, extend: { in: function(t3) {
      return null == t3 ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t3);
    }, result: function(t3) {
      return null == t3 ? this.attr("result") : this.attr("result", t3);
    }, toString: function() {
      return this.result();
    } } });
    var t2 = { blend: function(t3, e3) {
      return this.parent() && this.parent().blend(this, t3, e3);
    }, colorMatrix: function(t3, e3) {
      return this.parent() && this.parent().colorMatrix(t3, e3).in(this);
    }, convolveMatrix: function(t3) {
      return this.parent() && this.parent().convolveMatrix(t3).in(this);
    }, componentTransfer: function(t3) {
      return this.parent() && this.parent().componentTransfer(t3).in(this);
    }, composite: function(t3, e3) {
      return this.parent() && this.parent().composite(this, t3, e3);
    }, flood: function(t3, e3) {
      return this.parent() && this.parent().flood(t3, e3);
    }, offset: function(t3, e3) {
      return this.parent() && this.parent().offset(t3, e3).in(this);
    }, image: function(t3) {
      return this.parent() && this.parent().image(t3);
    }, merge: function() {
      return this.parent() && this.parent().merge.apply(this.parent(), [this].concat(arguments));
    }, gaussianBlur: function(t3, e3) {
      return this.parent() && this.parent().gaussianBlur(t3, e3).in(this);
    }, morphology: function(t3, e3) {
      return this.parent() && this.parent().morphology(t3, e3).in(this);
    }, diffuseLighting: function(t3, e3, i3) {
      return this.parent() && this.parent().diffuseLighting(t3, e3, i3).in(this);
    }, displacementMap: function(t3, e3, i3, a3) {
      return this.parent() && this.parent().displacementMap(this, t3, e3, i3, a3);
    }, specularLighting: function(t3, e3, i3, a3) {
      return this.parent() && this.parent().specularLighting(t3, e3, i3, a3).in(this);
    }, tile: function() {
      return this.parent() && this.parent().tile().in(this);
    }, turbulence: function(t3, e3, i3, a3, s3) {
      return this.parent() && this.parent().turbulence(t3, e3, i3, a3, s3).in(this);
    } };
    SVG.extend(SVG.Effect, t2), SVG.extend(SVG.ParentEffect, t2), SVG.ChildEffect = SVG.invent({ create: function() {
      this.constructor.call(this);
    }, inherit: SVG.Element, extend: { in: function(t3) {
      this.attr("in", t3);
    } } });
    var e2 = { blend: function(t3, e3, i3) {
      this.attr({ in: t3, in2: e3, mode: i3 || "normal" });
    }, colorMatrix: function(t3, e3) {
      "matrix" == t3 && (e3 = s2(e3)), this.attr({ type: t3, values: void 0 === e3 ? null : e3 });
    }, convolveMatrix: function(t3) {
      t3 = s2(t3), this.attr({ order: Math.sqrt(t3.split(" ").length), kernelMatrix: t3 });
    }, composite: function(t3, e3, i3) {
      this.attr({ in: t3, in2: e3, operator: i3 });
    }, flood: function(t3, e3) {
      this.attr("flood-color", t3), null != e3 && this.attr("flood-opacity", e3);
    }, offset: function(t3, e3) {
      this.attr({ dx: t3, dy: e3 });
    }, image: function(t3) {
      this.attr("href", t3, SVG.xlink);
    }, displacementMap: function(t3, e3, i3, a3, s3) {
      this.attr({ in: t3, in2: e3, scale: i3, xChannelSelector: a3, yChannelSelector: s3 });
    }, gaussianBlur: function(t3, e3) {
      null != t3 || null != e3 ? this.attr("stdDeviation", function(t4) {
        if (!Array.isArray(t4)) return t4;
        for (var e4 = 0, i3 = t4.length, a3 = []; e4 < i3; e4++) a3.push(t4[e4]);
        return a3.join(" ");
      }(Array.prototype.slice.call(arguments))) : this.attr("stdDeviation", "0 0");
    }, morphology: function(t3, e3) {
      this.attr({ operator: t3, radius: e3 });
    }, tile: function() {
    }, turbulence: function(t3, e3, i3, a3, s3) {
      this.attr({ numOctaves: e3, seed: i3, stitchTiles: a3, baseFrequency: t3, type: s3 });
    } }, i2 = { merge: function() {
      var t3;
      if (arguments[0] instanceof SVG.Set) {
        var e3 = this;
        arguments[0].each(function(t4) {
          this instanceof SVG.MergeNode ? e3.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) && e3.put(new SVG.MergeNode(this));
        });
      } else {
        t3 = Array.isArray(arguments[0]) ? arguments[0] : arguments;
        for (var i3 = 0; i3 < t3.length; i3++) t3[i3] instanceof SVG.MergeNode ? this.put(t3[i3]) : this.put(new SVG.MergeNode(t3[i3]));
      }
    }, componentTransfer: function(t3) {
      if (this.rgb = new SVG.Set(), ["r", "g", "b", "a"].forEach((function(t4) {
        this[t4] = new SVG["Func" + t4.toUpperCase()]("identity"), this.rgb.add(this[t4]), this.node.appendChild(this[t4].node);
      }).bind(this)), t3) for (var e3 in t3.rgb && (["r", "g", "b"].forEach((function(e4) {
        this[e4].attr(t3.rgb);
      }).bind(this)), delete t3.rgb), t3) this[e3].attr(t3[e3]);
    }, diffuseLighting: function(t3, e3, i3) {
      this.attr({ surfaceScale: t3, diffuseConstant: e3, kernelUnitLength: i3 });
    }, specularLighting: function(t3, e3, i3, a3) {
      this.attr({ surfaceScale: t3, diffuseConstant: e3, specularExponent: i3, kernelUnitLength: a3 });
    } }, a2 = { distantLight: function(t3, e3) {
      this.attr({ azimuth: t3, elevation: e3 });
    }, pointLight: function(t3, e3, i3) {
      this.attr({ x: t3, y: e3, z: i3 });
    }, spotLight: function(t3, e3, i3, a3, s3, r3) {
      this.attr({ x: t3, y: e3, z: i3, pointsAtX: a3, pointsAtY: s3, pointsAtZ: r3 });
    }, mergeNode: function(t3) {
      this.attr("in", t3);
    } };
    function s2(t3) {
      return Array.isArray(t3) && (t3 = new SVG.Array(t3)), t3.toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ");
    }
    function r2() {
      var t3 = function() {
      };
      for (var e3 in "function" == typeof arguments[arguments.length - 1] && (t3 = arguments[arguments.length - 1], Array.prototype.splice.call(arguments, arguments.length - 1, 1)), arguments) for (var i3 in arguments[e3]) t3(arguments[e3][i3], i3, arguments[e3]);
    }
    ["r", "g", "b", "a"].forEach(function(t3) {
      a2["Func" + t3.toUpperCase()] = function(t4) {
        switch (this.attr("type", t4), t4) {
          case "table":
            this.attr("tableValues", arguments[1]);
            break;
          case "linear":
            this.attr("slope", arguments[1]), this.attr("intercept", arguments[2]);
            break;
          case "gamma":
            this.attr("amplitude", arguments[1]), this.attr("exponent", arguments[2]), this.attr("offset", arguments[2]);
        }
      };
    }), r2(e2, function(t3, e3) {
      var i3 = e3.charAt(0).toUpperCase() + e3.slice(1);
      SVG[i3 + "Effect"] = SVG.invent({ create: function() {
        this.constructor.call(this, SVG.create("fe" + i3)), t3.apply(this, arguments), this.result(this.attr("id") + "Out");
      }, inherit: SVG.Effect, extend: {} });
    }), r2(i2, function(t3, e3) {
      var i3 = e3.charAt(0).toUpperCase() + e3.slice(1);
      SVG[i3 + "Effect"] = SVG.invent({ create: function() {
        this.constructor.call(this, SVG.create("fe" + i3)), t3.apply(this, arguments), this.result(this.attr("id") + "Out");
      }, inherit: SVG.ParentEffect, extend: {} });
    }), r2(a2, function(t3, e3) {
      var i3 = e3.charAt(0).toUpperCase() + e3.slice(1);
      SVG[i3] = SVG.invent({ create: function() {
        this.constructor.call(this, SVG.create("fe" + i3)), t3.apply(this, arguments);
      }, inherit: SVG.ChildEffect, extend: {} });
    }), SVG.extend(SVG.MergeEffect, { in: function(t3) {
      return t3 instanceof SVG.MergeNode ? this.add(t3, 0) : this.add(new SVG.MergeNode(t3), 0), this;
    } }), SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, { in2: function(t3) {
      return null == t3 ? this.parent() && this.parent().select('[result="' + this.attr("in2") + '"]').get(0) || this.attr("in2") : this.attr("in2", t3);
    } }), SVG.filter = { sepiatone: [0.343, 0.669, 0.119, 0, 0, 0.249, 0.626, 0.13, 0, 0, 0.172, 0.334, 0.111, 0, 0, 0, 0, 0, 1, 0] };
  }).call(void 0), function() {
    function t2(t3, s3, r2, o2, n2, l2, h2) {
      for (var c2 = t3.slice(s3, r2 || h2), d2 = o2.slice(n2, l2 || h2), g2 = 0, u2 = { pos: [0, 0], start: [0, 0] }, f2 = { pos: [0, 0], start: [0, 0] }; ; ) {
        if (c2[g2] = e2.call(u2, c2[g2]), d2[g2] = e2.call(f2, d2[g2]), c2[g2][0] != d2[g2][0] || "M" == c2[g2][0] || "A" == c2[g2][0] && (c2[g2][4] != d2[g2][4] || c2[g2][5] != d2[g2][5]) ? (Array.prototype.splice.apply(c2, [g2, 1].concat(a2.call(u2, c2[g2]))), Array.prototype.splice.apply(d2, [g2, 1].concat(a2.call(f2, d2[g2])))) : (c2[g2] = i2.call(u2, c2[g2]), d2[g2] = i2.call(f2, d2[g2])), ++g2 == c2.length && g2 == d2.length) break;
        g2 == c2.length && c2.push(["C", u2.pos[0], u2.pos[1], u2.pos[0], u2.pos[1], u2.pos[0], u2.pos[1]]), g2 == d2.length && d2.push(["C", f2.pos[0], f2.pos[1], f2.pos[0], f2.pos[1], f2.pos[0], f2.pos[1]]);
      }
      return { start: c2, dest: d2 };
    }
    function e2(t3) {
      switch (t3[0]) {
        case "z":
        case "Z":
          t3[0] = "L", t3[1] = this.start[0], t3[2] = this.start[1];
          break;
        case "H":
          t3[0] = "L", t3[2] = this.pos[1];
          break;
        case "V":
          t3[0] = "L", t3[2] = t3[1], t3[1] = this.pos[0];
          break;
        case "T":
          t3[0] = "Q", t3[3] = t3[1], t3[4] = t3[2], t3[1] = this.reflection[1], t3[2] = this.reflection[0];
          break;
        case "S":
          t3[0] = "C", t3[6] = t3[4], t3[5] = t3[3], t3[4] = t3[2], t3[3] = t3[1], t3[2] = this.reflection[1], t3[1] = this.reflection[0];
      }
      return t3;
    }
    function i2(t3) {
      var e3 = t3.length;
      return this.pos = [t3[e3 - 2], t3[e3 - 1]], -1 != "SCQT".indexOf(t3[0]) && (this.reflection = [2 * this.pos[0] - t3[e3 - 4], 2 * this.pos[1] - t3[e3 - 3]]), t3;
    }
    function a2(t3) {
      var e3 = [t3];
      switch (t3[0]) {
        case "M":
          return this.pos = this.start = [t3[1], t3[2]], e3;
        case "L":
          t3[5] = t3[3] = t3[1], t3[6] = t3[4] = t3[2], t3[1] = this.pos[0], t3[2] = this.pos[1];
          break;
        case "Q":
          t3[6] = t3[4], t3[5] = t3[3], t3[4] = 1 * t3[4] / 3 + 2 * t3[2] / 3, t3[3] = 1 * t3[3] / 3 + 2 * t3[1] / 3, t3[2] = 1 * this.pos[1] / 3 + 2 * t3[2] / 3, t3[1] = 1 * this.pos[0] / 3 + 2 * t3[1] / 3;
          break;
        case "A":
          e3 = function(t4, e4) {
            var i3, a3, s3, r2, o2, n2, l2, h2, c2, d2, g2, u2, f2, p2, x2, b2, v2, m2, y2, w2, k2, A2, S2, C2, L2, P2, M2 = Math.abs(e4[1]), I2 = Math.abs(e4[2]), T2 = e4[3] % 360, z2 = e4[4], X2 = e4[5], E2 = e4[6], Y2 = e4[7], R2 = new SVG.Point(t4), F2 = new SVG.Point(E2, Y2), D2 = [];
            if (0 === M2 || 0 === I2 || R2.x === F2.x && R2.y === F2.y) return [["C", R2.x, R2.y, F2.x, F2.y, F2.x, F2.y]];
            i3 = new SVG.Point((R2.x - F2.x) / 2, (R2.y - F2.y) / 2).transform(new SVG.Matrix().rotate(T2)), (a3 = i3.x * i3.x / (M2 * M2) + i3.y * i3.y / (I2 * I2)) > 1 && (M2 *= a3 = Math.sqrt(a3), I2 *= a3);
            s3 = new SVG.Matrix().rotate(T2).scale(1 / M2, 1 / I2).rotate(-T2), R2 = R2.transform(s3), F2 = F2.transform(s3), r2 = [F2.x - R2.x, F2.y - R2.y], n2 = r2[0] * r2[0] + r2[1] * r2[1], o2 = Math.sqrt(n2), r2[0] /= o2, r2[1] /= o2, l2 = n2 < 4 ? Math.sqrt(1 - n2 / 4) : 0, z2 === X2 && (l2 *= -1);
            h2 = new SVG.Point((F2.x + R2.x) / 2 + l2 * -r2[1], (F2.y + R2.y) / 2 + l2 * r2[0]), c2 = new SVG.Point(R2.x - h2.x, R2.y - h2.y), d2 = new SVG.Point(F2.x - h2.x, F2.y - h2.y), g2 = Math.acos(c2.x / Math.sqrt(c2.x * c2.x + c2.y * c2.y)), c2.y < 0 && (g2 *= -1);
            u2 = Math.acos(d2.x / Math.sqrt(d2.x * d2.x + d2.y * d2.y)), d2.y < 0 && (u2 *= -1);
            X2 && g2 > u2 && (u2 += 2 * Math.PI);
            !X2 && g2 < u2 && (u2 -= 2 * Math.PI);
            for (p2 = Math.ceil(2 * Math.abs(g2 - u2) / Math.PI), b2 = [], v2 = g2, f2 = (u2 - g2) / p2, x2 = 4 * Math.tan(f2 / 4) / 3, k2 = 0; k2 <= p2; k2++) y2 = Math.cos(v2), m2 = Math.sin(v2), w2 = new SVG.Point(h2.x + y2, h2.y + m2), b2[k2] = [new SVG.Point(w2.x + x2 * m2, w2.y - x2 * y2), w2, new SVG.Point(w2.x - x2 * m2, w2.y + x2 * y2)], v2 += f2;
            for (b2[0][0] = b2[0][1].clone(), b2[b2.length - 1][2] = b2[b2.length - 1][1].clone(), s3 = new SVG.Matrix().rotate(T2).scale(M2, I2).rotate(-T2), k2 = 0, A2 = b2.length; k2 < A2; k2++) b2[k2][0] = b2[k2][0].transform(s3), b2[k2][1] = b2[k2][1].transform(s3), b2[k2][2] = b2[k2][2].transform(s3);
            for (k2 = 1, A2 = b2.length; k2 < A2; k2++) S2 = (w2 = b2[k2 - 1][2]).x, C2 = w2.y, L2 = (w2 = b2[k2][0]).x, P2 = w2.y, E2 = (w2 = b2[k2][1]).x, Y2 = w2.y, D2.push(["C", S2, C2, L2, P2, E2, Y2]);
            return D2;
          }(this.pos, t3), t3 = e3[0];
      }
      return t3[0] = "C", this.pos = [t3[5], t3[6]], this.reflection = [2 * t3[5] - t3[3], 2 * t3[6] - t3[4]], e3;
    }
    function s2(t3, e3) {
      if (false === e3) return false;
      for (var i3 = e3, a3 = t3.length; i3 < a3; ++i3) if ("M" == t3[i3][0]) return i3;
      return false;
    }
    SVG.extend(SVG.PathArray, { morph: function(e3) {
      for (var i3 = this.value, a3 = this.parse(e3), r2 = 0, o2 = 0, n2 = false, l2 = false; false !== r2 || false !== o2; ) {
        var h2;
        n2 = s2(i3, false !== r2 && r2 + 1), l2 = s2(a3, false !== o2 && o2 + 1), false === r2 && (r2 = 0 == (h2 = new SVG.PathArray(c2.start).bbox()).height || 0 == h2.width ? i3.push(i3[0]) - 1 : i3.push(["M", h2.x + h2.width / 2, h2.y + h2.height / 2]) - 1), false === o2 && (o2 = 0 == (h2 = new SVG.PathArray(c2.dest).bbox()).height || 0 == h2.width ? a3.push(a3[0]) - 1 : a3.push(["M", h2.x + h2.width / 2, h2.y + h2.height / 2]) - 1);
        var c2 = t2(i3, r2, n2, a3, o2, l2);
        i3 = i3.slice(0, r2).concat(c2.start, false === n2 ? [] : i3.slice(n2)), a3 = a3.slice(0, o2).concat(c2.dest, false === l2 ? [] : a3.slice(l2)), r2 = false !== n2 && r2 + c2.start.length, o2 = false !== l2 && o2 + c2.dest.length;
      }
      return this.value = i3, this.destination = new SVG.PathArray(), this.destination.value = a3, this;
    } });
  }(), /*! svg.draggable.js - v2.2.2 - 2019-01-08
  * https://github.com/svgdotjs/svg.draggable.js
  * Copyright (c) 2019 Wout Fierens; Licensed MIT */
  (function() {
    function t2(t3) {
      t3.remember("_draggable", this), this.el = t3;
    }
    t2.prototype.init = function(t3, e2) {
      var i2 = this;
      this.constraint = t3, this.value = e2, this.el.on("mousedown.drag", function(t4) {
        i2.start(t4);
      }), this.el.on("touchstart.drag", function(t4) {
        i2.start(t4);
      });
    }, t2.prototype.transformPoint = function(t3, e2) {
      var i2 = (t3 = t3 || window.event).changedTouches && t3.changedTouches[0] || t3;
      return this.p.x = i2.clientX - (e2 || 0), this.p.y = i2.clientY, this.p.matrixTransform(this.m);
    }, t2.prototype.getBBox = function() {
      var t3 = this.el.bbox();
      return this.el instanceof SVG.Nested && (t3 = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) && (t3.x = this.el.x(), t3.y = this.el.y()), t3;
    }, t2.prototype.start = function(t3) {
      if ("click" != t3.type && "mousedown" != t3.type && "mousemove" != t3.type || 1 == (t3.which || t3.buttons)) {
        var e2 = this;
        if (this.el.fire("beforedrag", { event: t3, handler: this }), !this.el.event().defaultPrevented) {
          t3.preventDefault(), t3.stopPropagation(), this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc), this.p = this.parent.node.createSVGPoint(), this.m = this.el.node.getScreenCTM().inverse();
          var i2, a2 = this.getBBox();
          if (this.el instanceof SVG.Text) switch (i2 = this.el.node.getComputedTextLength(), this.el.attr("text-anchor")) {
            case "middle":
              i2 /= 2;
              break;
            case "start":
              i2 = 0;
          }
          this.startPoints = { point: this.transformPoint(t3, i2), box: a2, transform: this.el.transform() }, SVG.on(window, "mousemove.drag", function(t4) {
            e2.drag(t4);
          }), SVG.on(window, "touchmove.drag", function(t4) {
            e2.drag(t4);
          }), SVG.on(window, "mouseup.drag", function(t4) {
            e2.end(t4);
          }), SVG.on(window, "touchend.drag", function(t4) {
            e2.end(t4);
          }), this.el.fire("dragstart", { event: t3, p: this.startPoints.point, m: this.m, handler: this });
        }
      }
    }, t2.prototype.drag = function(t3) {
      var e2 = this.getBBox(), i2 = this.transformPoint(t3), a2 = this.startPoints.box.x + i2.x - this.startPoints.point.x, s2 = this.startPoints.box.y + i2.y - this.startPoints.point.y, r2 = this.constraint, o2 = i2.x - this.startPoints.point.x, n2 = i2.y - this.startPoints.point.y;
      if (this.el.fire("dragmove", { event: t3, p: i2, m: this.m, handler: this }), this.el.event().defaultPrevented) return i2;
      if ("function" == typeof r2) {
        var l2 = r2.call(this.el, a2, s2, this.m);
        "boolean" == typeof l2 && (l2 = { x: l2, y: l2 }), true === l2.x ? this.el.x(a2) : false !== l2.x && this.el.x(l2.x), true === l2.y ? this.el.y(s2) : false !== l2.y && this.el.y(l2.y);
      } else "object" == typeof r2 && (null != r2.minX && a2 < r2.minX ? o2 = (a2 = r2.minX) - this.startPoints.box.x : null != r2.maxX && a2 > r2.maxX - e2.width && (o2 = (a2 = r2.maxX - e2.width) - this.startPoints.box.x), null != r2.minY && s2 < r2.minY ? n2 = (s2 = r2.minY) - this.startPoints.box.y : null != r2.maxY && s2 > r2.maxY - e2.height && (n2 = (s2 = r2.maxY - e2.height) - this.startPoints.box.y), null != r2.snapToGrid && (a2 -= a2 % r2.snapToGrid, s2 -= s2 % r2.snapToGrid, o2 -= o2 % r2.snapToGrid, n2 -= n2 % r2.snapToGrid), this.el instanceof SVG.G ? this.el.matrix(this.startPoints.transform).transform({ x: o2, y: n2 }, true) : this.el.move(a2, s2));
      return i2;
    }, t2.prototype.end = function(t3) {
      var e2 = this.drag(t3);
      this.el.fire("dragend", { event: t3, p: e2, m: this.m, handler: this }), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"), SVG.off(window, "touchend.drag");
    }, SVG.extend(SVG.Element, { draggable: function(e2, i2) {
      "function" != typeof e2 && "object" != typeof e2 || (i2 = e2, e2 = true);
      var a2 = this.remember("_draggable") || new t2(this);
      return (e2 = void 0 === e2 || e2) ? a2.init(i2 || {}, e2) : (this.off("mousedown.drag"), this.off("touchstart.drag")), this;
    } });
  }).call(void 0), function() {
    function t2(t3) {
      this.el = t3, t3.remember("_selectHandler", this), this.pointSelection = { isSelected: false }, this.rectSelection = { isSelected: false }, this.pointsList = { lt: [0, 0], rt: ["width", 0], rb: ["width", "height"], lb: [0, "height"], t: ["width", 0], r: ["width", "height"], b: ["width", "height"], l: [0, "height"] }, this.pointCoord = function(t4, e2, i2) {
        var a2 = "string" != typeof t4 ? t4 : e2[t4];
        return i2 ? a2 / 2 : a2;
      }, this.pointCoords = function(t4, e2) {
        var i2 = this.pointsList[t4];
        return { x: this.pointCoord(i2[0], e2, "t" === t4 || "b" === t4), y: this.pointCoord(i2[1], e2, "r" === t4 || "l" === t4) };
      };
    }
    t2.prototype.init = function(t3, e2) {
      var i2 = this.el.bbox();
      this.options = {};
      var a2 = this.el.selectize.defaults.points;
      for (var s2 in this.el.selectize.defaults) this.options[s2] = this.el.selectize.defaults[s2], void 0 !== e2[s2] && (this.options[s2] = e2[s2]);
      var r2 = ["points", "pointsExclude"];
      for (var s2 in r2) {
        var o2 = this.options[r2[s2]];
        "string" == typeof o2 ? o2 = o2.length > 0 ? o2.split(/\s*,\s*/i) : [] : "boolean" == typeof o2 && "points" === r2[s2] && (o2 = o2 ? a2 : []), this.options[r2[s2]] = o2;
      }
      this.options.points = [a2, this.options.points].reduce(function(t4, e3) {
        return t4.filter(function(t5) {
          return e3.indexOf(t5) > -1;
        });
      }), this.options.points = [this.options.points, this.options.pointsExclude].reduce(function(t4, e3) {
        return t4.filter(function(t5) {
          return e3.indexOf(t5) < 0;
        });
      }), this.parent = this.el.parent(), this.nested = this.nested || this.parent.group(), this.nested.matrix(new SVG.Matrix(this.el).translate(i2.x, i2.y)), this.options.deepSelect && -1 !== ["line", "polyline", "polygon"].indexOf(this.el.type) ? this.selectPoints(t3) : this.selectRect(t3), this.observe(), this.cleanup();
    }, t2.prototype.selectPoints = function(t3) {
      return this.pointSelection.isSelected = t3, this.pointSelection.set || (this.pointSelection.set = this.parent.set(), this.drawPoints()), this;
    }, t2.prototype.getPointArray = function() {
      var t3 = this.el.bbox();
      return this.el.array().valueOf().map(function(e2) {
        return [e2[0] - t3.x, e2[1] - t3.y];
      });
    }, t2.prototype.drawPoints = function() {
      for (var t3 = this, e2 = this.getPointArray(), i2 = 0, a2 = e2.length; i2 < a2; ++i2) {
        var s2 = /* @__PURE__ */ function(e3) {
          return function(i3) {
            (i3 = i3 || window.event).preventDefault ? i3.preventDefault() : i3.returnValue = false, i3.stopPropagation();
            var a3 = i3.pageX || i3.touches[0].pageX, s3 = i3.pageY || i3.touches[0].pageY;
            t3.el.fire("point", { x: a3, y: s3, i: e3, event: i3 });
          };
        }(i2), r2 = this.drawPoint(e2[i2][0], e2[i2][1]).addClass(this.options.classPoints).addClass(this.options.classPoints + "_point").on("touchstart", s2).on("mousedown", s2);
        this.pointSelection.set.add(r2);
      }
    }, t2.prototype.drawPoint = function(t3, e2) {
      var i2 = this.options.pointType;
      switch (i2) {
        case "circle":
          return this.drawCircle(t3, e2);
        case "rect":
          return this.drawRect(t3, e2);
        default:
          if ("function" == typeof i2) return i2.call(this, t3, e2);
          throw new Error("Unknown " + i2 + " point type!");
      }
    }, t2.prototype.drawCircle = function(t3, e2) {
      return this.nested.circle(this.options.pointSize).center(t3, e2);
    }, t2.prototype.drawRect = function(t3, e2) {
      return this.nested.rect(this.options.pointSize, this.options.pointSize).center(t3, e2);
    }, t2.prototype.updatePointSelection = function() {
      var t3 = this.getPointArray();
      this.pointSelection.set.each(function(e2) {
        this.cx() === t3[e2][0] && this.cy() === t3[e2][1] || this.center(t3[e2][0], t3[e2][1]);
      });
    }, t2.prototype.updateRectSelection = function() {
      var t3 = this, e2 = this.el.bbox();
      if (this.rectSelection.set.get(0).attr({ width: e2.width, height: e2.height }), this.options.points.length && this.options.points.map(function(i3, a2) {
        var s2 = t3.pointCoords(i3, e2);
        t3.rectSelection.set.get(a2 + 1).center(s2.x, s2.y);
      }), this.options.rotationPoint) {
        var i2 = this.rectSelection.set.length();
        this.rectSelection.set.get(i2 - 1).center(e2.width / 2, 20);
      }
    }, t2.prototype.selectRect = function(t3) {
      var e2 = this, i2 = this.el.bbox();
      function a2(t4) {
        return function(i3) {
          (i3 = i3 || window.event).preventDefault ? i3.preventDefault() : i3.returnValue = false, i3.stopPropagation();
          var a3 = i3.pageX || i3.touches[0].pageX, s3 = i3.pageY || i3.touches[0].pageY;
          e2.el.fire(t4, { x: a3, y: s3, event: i3 });
        };
      }
      if (this.rectSelection.isSelected = t3, this.rectSelection.set = this.rectSelection.set || this.parent.set(), this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(i2.width, i2.height).addClass(this.options.classRect)), this.options.points.length && this.rectSelection.set.length() < 2) {
        this.options.points.map(function(t4, s3) {
          var r3 = e2.pointCoords(t4, i2), o2 = e2.drawPoint(r3.x, r3.y).attr("class", e2.options.classPoints + "_" + t4).on("mousedown", a2(t4)).on("touchstart", a2(t4));
          e2.rectSelection.set.add(o2);
        }), this.rectSelection.set.each(function() {
          this.addClass(e2.options.classPoints);
        });
      }
      if (this.options.rotationPoint && (this.options.points && !this.rectSelection.set.get(9) || !this.options.points && !this.rectSelection.set.get(1))) {
        var s2 = function(t4) {
          (t4 = t4 || window.event).preventDefault ? t4.preventDefault() : t4.returnValue = false, t4.stopPropagation();
          var i3 = t4.pageX || t4.touches[0].pageX, a3 = t4.pageY || t4.touches[0].pageY;
          e2.el.fire("rot", { x: i3, y: a3, event: t4 });
        }, r2 = this.drawPoint(i2.width / 2, 20).attr("class", this.options.classPoints + "_rot").on("touchstart", s2).on("mousedown", s2);
        this.rectSelection.set.add(r2);
      }
    }, t2.prototype.handler = function() {
      var t3 = this.el.bbox();
      this.nested.matrix(new SVG.Matrix(this.el).translate(t3.x, t3.y)), this.rectSelection.isSelected && this.updateRectSelection(), this.pointSelection.isSelected && this.updatePointSelection();
    }, t2.prototype.observe = function() {
      var t3 = this;
      if (MutationObserver) if (this.rectSelection.isSelected || this.pointSelection.isSelected) this.observerInst = this.observerInst || new MutationObserver(function() {
        t3.handler();
      }), this.observerInst.observe(this.el.node, { attributes: true });
      else try {
        this.observerInst.disconnect(), delete this.observerInst;
      } catch (t4) {
      }
      else this.el.off("DOMAttrModified.select"), (this.rectSelection.isSelected || this.pointSelection.isSelected) && this.el.on("DOMAttrModified.select", function() {
        t3.handler();
      });
    }, t2.prototype.cleanup = function() {
      !this.rectSelection.isSelected && this.rectSelection.set && (this.rectSelection.set.each(function() {
        this.remove();
      }), this.rectSelection.set.clear(), delete this.rectSelection.set), !this.pointSelection.isSelected && this.pointSelection.set && (this.pointSelection.set.each(function() {
        this.remove();
      }), this.pointSelection.set.clear(), delete this.pointSelection.set), this.pointSelection.isSelected || this.rectSelection.isSelected || (this.nested.remove(), delete this.nested);
    }, SVG.extend(SVG.Element, { selectize: function(e2, i2) {
      return "object" == typeof e2 && (i2 = e2, e2 = true), (this.remember("_selectHandler") || new t2(this)).init(void 0 === e2 || e2, i2 || {}), this;
    } }), SVG.Element.prototype.selectize.defaults = { points: ["lt", "rt", "rb", "lb", "t", "r", "b", "l"], pointsExclude: [], classRect: "svg_select_boundingRect", classPoints: "svg_select_points", pointSize: 7, rotationPoint: true, deepSelect: false, pointType: "circle" };
  }(), function() {
    (function() {
      function t2(t3) {
        t3.remember("_resizeHandler", this), this.el = t3, this.parameters = {}, this.lastUpdateCall = null, this.p = t3.doc().node.createSVGPoint();
      }
      t2.prototype.transformPoint = function(t3, e2, i2) {
        return this.p.x = t3 - (this.offset.x - window.pageXOffset), this.p.y = e2 - (this.offset.y - window.pageYOffset), this.p.matrixTransform(i2 || this.m);
      }, t2.prototype._extractPosition = function(t3) {
        return { x: null != t3.clientX ? t3.clientX : t3.touches[0].clientX, y: null != t3.clientY ? t3.clientY : t3.touches[0].clientY };
      }, t2.prototype.init = function(t3) {
        var e2 = this;
        if (this.stop(), "stop" !== t3) {
          for (var i2 in this.options = {}, this.el.resize.defaults) this.options[i2] = this.el.resize.defaults[i2], void 0 !== t3[i2] && (this.options[i2] = t3[i2]);
          this.el.on("lt.resize", function(t4) {
            e2.resize(t4 || window.event);
          }), this.el.on("rt.resize", function(t4) {
            e2.resize(t4 || window.event);
          }), this.el.on("rb.resize", function(t4) {
            e2.resize(t4 || window.event);
          }), this.el.on("lb.resize", function(t4) {
            e2.resize(t4 || window.event);
          }), this.el.on("t.resize", function(t4) {
            e2.resize(t4 || window.event);
          }), this.el.on("r.resize", function(t4) {
            e2.resize(t4 || window.event);
          }), this.el.on("b.resize", function(t4) {
            e2.resize(t4 || window.event);
          }), this.el.on("l.resize", function(t4) {
            e2.resize(t4 || window.event);
          }), this.el.on("rot.resize", function(t4) {
            e2.resize(t4 || window.event);
          }), this.el.on("point.resize", function(t4) {
            e2.resize(t4 || window.event);
          }), this.update();
        }
      }, t2.prototype.stop = function() {
        return this.el.off("lt.resize"), this.el.off("rt.resize"), this.el.off("rb.resize"), this.el.off("lb.resize"), this.el.off("t.resize"), this.el.off("r.resize"), this.el.off("b.resize"), this.el.off("l.resize"), this.el.off("rot.resize"), this.el.off("point.resize"), this;
      }, t2.prototype.resize = function(t3) {
        var e2 = this;
        this.m = this.el.node.getScreenCTM().inverse(), this.offset = { x: window.pageXOffset, y: window.pageYOffset };
        var i2 = this._extractPosition(t3.detail.event);
        if (this.parameters = { type: this.el.type, p: this.transformPoint(i2.x, i2.y), x: t3.detail.x, y: t3.detail.y, box: this.el.bbox(), rotation: this.el.transform().rotation }, "text" === this.el.type && (this.parameters.fontSize = this.el.attr()["font-size"]), void 0 !== t3.detail.i) {
          var a2 = this.el.array().valueOf();
          this.parameters.i = t3.detail.i, this.parameters.pointCoords = [a2[t3.detail.i][0], a2[t3.detail.i][1]];
        }
        switch (t3.type) {
          case "lt":
            this.calc = function(t4, e3) {
              var i3 = this.snapToGrid(t4, e3);
              if (this.parameters.box.width - i3[0] > 0 && this.parameters.box.height - i3[1] > 0) {
                if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i3[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i3[0]);
                i3 = this.checkAspectRatio(i3), this.el.move(this.parameters.box.x + i3[0], this.parameters.box.y + i3[1]).size(this.parameters.box.width - i3[0], this.parameters.box.height - i3[1]);
              }
            };
            break;
          case "rt":
            this.calc = function(t4, e3) {
              var i3 = this.snapToGrid(t4, e3, 2);
              if (this.parameters.box.width + i3[0] > 0 && this.parameters.box.height - i3[1] > 0) {
                if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i3[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i3[0]);
                i3 = this.checkAspectRatio(i3, true), this.el.move(this.parameters.box.x, this.parameters.box.y + i3[1]).size(this.parameters.box.width + i3[0], this.parameters.box.height - i3[1]);
              }
            };
            break;
          case "rb":
            this.calc = function(t4, e3) {
              var i3 = this.snapToGrid(t4, e3, 0);
              if (this.parameters.box.width + i3[0] > 0 && this.parameters.box.height + i3[1] > 0) {
                if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i3[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i3[0]);
                i3 = this.checkAspectRatio(i3), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width + i3[0], this.parameters.box.height + i3[1]);
              }
            };
            break;
          case "lb":
            this.calc = function(t4, e3) {
              var i3 = this.snapToGrid(t4, e3, 1);
              if (this.parameters.box.width - i3[0] > 0 && this.parameters.box.height + i3[1] > 0) {
                if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i3[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i3[0]);
                i3 = this.checkAspectRatio(i3, true), this.el.move(this.parameters.box.x + i3[0], this.parameters.box.y).size(this.parameters.box.width - i3[0], this.parameters.box.height + i3[1]);
              }
            };
            break;
          case "t":
            this.calc = function(t4, e3) {
              var i3 = this.snapToGrid(t4, e3, 2);
              if (this.parameters.box.height - i3[1] > 0) {
                if ("text" === this.parameters.type) return;
                this.el.move(this.parameters.box.x, this.parameters.box.y + i3[1]).height(this.parameters.box.height - i3[1]);
              }
            };
            break;
          case "r":
            this.calc = function(t4, e3) {
              var i3 = this.snapToGrid(t4, e3, 0);
              if (this.parameters.box.width + i3[0] > 0) {
                if ("text" === this.parameters.type) return;
                this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + i3[0]);
              }
            };
            break;
          case "b":
            this.calc = function(t4, e3) {
              var i3 = this.snapToGrid(t4, e3, 0);
              if (this.parameters.box.height + i3[1] > 0) {
                if ("text" === this.parameters.type) return;
                this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + i3[1]);
              }
            };
            break;
          case "l":
            this.calc = function(t4, e3) {
              var i3 = this.snapToGrid(t4, e3, 1);
              if (this.parameters.box.width - i3[0] > 0) {
                if ("text" === this.parameters.type) return;
                this.el.move(this.parameters.box.x + i3[0], this.parameters.box.y).width(this.parameters.box.width - i3[0]);
              }
            };
            break;
          case "rot":
            this.calc = function(t4, e3) {
              var i3 = t4 + this.parameters.p.x, a3 = e3 + this.parameters.p.y, s2 = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters.p.x - this.parameters.box.x - this.parameters.box.width / 2), r2 = Math.atan2(a3 - this.parameters.box.y - this.parameters.box.height / 2, i3 - this.parameters.box.x - this.parameters.box.width / 2), o2 = this.parameters.rotation + 180 * (r2 - s2) / Math.PI + this.options.snapToAngle / 2;
              this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(o2 - o2 % this.options.snapToAngle, this.parameters.box.cx, this.parameters.box.cy);
            };
            break;
          case "point":
            this.calc = function(t4, e3) {
              var i3 = this.snapToGrid(t4, e3, this.parameters.pointCoords[0], this.parameters.pointCoords[1]), a3 = this.el.array().valueOf();
              a3[this.parameters.i][0] = this.parameters.pointCoords[0] + i3[0], a3[this.parameters.i][1] = this.parameters.pointCoords[1] + i3[1], this.el.plot(a3);
            };
        }
        this.el.fire("resizestart", { dx: this.parameters.x, dy: this.parameters.y, event: t3 }), SVG.on(window, "touchmove.resize", function(t4) {
          e2.update(t4 || window.event);
        }), SVG.on(window, "touchend.resize", function() {
          e2.done();
        }), SVG.on(window, "mousemove.resize", function(t4) {
          e2.update(t4 || window.event);
        }), SVG.on(window, "mouseup.resize", function() {
          e2.done();
        });
      }, t2.prototype.update = function(t3) {
        if (t3) {
          var e2 = this._extractPosition(t3), i2 = this.transformPoint(e2.x, e2.y), a2 = i2.x - this.parameters.p.x, s2 = i2.y - this.parameters.p.y;
          this.lastUpdateCall = [a2, s2], this.calc(a2, s2), this.el.fire("resizing", { dx: a2, dy: s2, event: t3 });
        } else this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1]);
      }, t2.prototype.done = function() {
        this.lastUpdateCall = null, SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone");
      }, t2.prototype.snapToGrid = function(t3, e2, i2, a2) {
        var s2;
        return void 0 !== a2 ? s2 = [(i2 + t3) % this.options.snapToGrid, (a2 + e2) % this.options.snapToGrid] : (i2 = null == i2 ? 3 : i2, s2 = [(this.parameters.box.x + t3 + (1 & i2 ? 0 : this.parameters.box.width)) % this.options.snapToGrid, (this.parameters.box.y + e2 + (2 & i2 ? 0 : this.parameters.box.height)) % this.options.snapToGrid]), t3 < 0 && (s2[0] -= this.options.snapToGrid), e2 < 0 && (s2[1] -= this.options.snapToGrid), t3 -= Math.abs(s2[0]) < this.options.snapToGrid / 2 ? s2[0] : s2[0] - (t3 < 0 ? -this.options.snapToGrid : this.options.snapToGrid), e2 -= Math.abs(s2[1]) < this.options.snapToGrid / 2 ? s2[1] : s2[1] - (e2 < 0 ? -this.options.snapToGrid : this.options.snapToGrid), this.constraintToBox(t3, e2, i2, a2);
      }, t2.prototype.constraintToBox = function(t3, e2, i2, a2) {
        var s2, r2, o2 = this.options.constraint || {};
        return void 0 !== a2 ? (s2 = i2, r2 = a2) : (s2 = this.parameters.box.x + (1 & i2 ? 0 : this.parameters.box.width), r2 = this.parameters.box.y + (2 & i2 ? 0 : this.parameters.box.height)), void 0 !== o2.minX && s2 + t3 < o2.minX && (t3 = o2.minX - s2), void 0 !== o2.maxX && s2 + t3 > o2.maxX && (t3 = o2.maxX - s2), void 0 !== o2.minY && r2 + e2 < o2.minY && (e2 = o2.minY - r2), void 0 !== o2.maxY && r2 + e2 > o2.maxY && (e2 = o2.maxY - r2), [t3, e2];
      }, t2.prototype.checkAspectRatio = function(t3, e2) {
        if (!this.options.saveAspectRatio) return t3;
        var i2 = t3.slice(), a2 = this.parameters.box.width / this.parameters.box.height, s2 = this.parameters.box.width + t3[0], r2 = this.parameters.box.height - t3[1], o2 = s2 / r2;
        return o2 < a2 ? (i2[1] = s2 / a2 - this.parameters.box.height, e2 && (i2[1] = -i2[1])) : o2 > a2 && (i2[0] = this.parameters.box.width - r2 * a2, e2 && (i2[0] = -i2[0])), i2;
      }, SVG.extend(SVG.Element, { resize: function(e2) {
        return (this.remember("_resizeHandler") || new t2(this)).init(e2 || {}), this;
      } }), SVG.Element.prototype.resize.defaults = { snapToAngle: 0.1, snapToGrid: 1, constraint: {}, saveAspectRatio: false };
    }).call(this);
  }(), void 0 === window.Apex && (window.Apex = {});
  var qt = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "initModules", value: function() {
      this.ctx.publicMethods = ["updateOptions", "updateSeries", "appendData", "appendSeries", "isSeriesHidden", "highlightSeries", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "exportToCSV", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList = ["click", "mousedown", "mousemove", "mouseleave", "touchstart", "touchmove", "touchleave", "mouseup", "touchend"], this.ctx.animations = new y(this.ctx), this.ctx.axes = new et(this.ctx), this.ctx.core = new _t(this.ctx.el, this.ctx), this.ctx.config = new D({}), this.ctx.data = new _(this.ctx), this.ctx.grid = new Z(this.ctx), this.ctx.graphics = new k(this.ctx), this.ctx.coreUtils = new A(this.ctx), this.ctx.crosshairs = new it(this.ctx), this.ctx.events = new K(this.ctx), this.ctx.exports = new U(this.ctx), this.ctx.fill = new N(this.ctx), this.ctx.localization = new tt(this.ctx), this.ctx.options = new X(), this.ctx.responsive = new at(this.ctx), this.ctx.series = new V(this.ctx), this.ctx.theme = new st(this.ctx), this.ctx.formatters = new P(this.ctx), this.ctx.titleSubtitle = new rt(this.ctx), this.ctx.legend = new gt(this.ctx), this.ctx.toolbar = new ut(this.ctx), this.ctx.tooltip = new wt(this.ctx), this.ctx.dimensions = new ct(this.ctx), this.ctx.updateHelpers = new Ut(this.ctx), this.ctx.zoomPanSelection = new ft(this.ctx), this.ctx.w.globals.tooltip = new wt(this.ctx);
    } }]), t2;
  }(), Zt = function() {
    function t2(e2) {
      i(this, t2), this.ctx = e2, this.w = e2.w;
    }
    return s(t2, [{ key: "clear", value: function(t3) {
      var e2 = t3.isUpdating;
      this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar && this.ctx.toolbar.destroy(), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx.zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx.toolbar = null, this.ctx.localization = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({ isUpdating: e2 });
    } }, { key: "killSVG", value: function(t3) {
      t3.each(function() {
        this.removeClass("*"), this.off(), this.stop();
      }, true), t3.ungroup(), t3.clear();
    } }, { key: "clearDomElements", value: function(t3) {
      var e2 = this, i2 = t3.isUpdating, a2 = this.w.globals.dom.Paper.node;
      a2.parentNode && a2.parentNode.parentNode && !i2 && (a2.parentNode.parentNode.style.minHeight = "unset");
      var s2 = this.w.globals.dom.baseEl;
      s2 && this.ctx.eventList.forEach(function(t4) {
        s2.removeEventListener(t4, e2.ctx.events.documentEvent);
      });
      var r2 = this.w.globals.dom;
      if (null !== this.ctx.el) for (; this.ctx.el.firstChild; ) this.ctx.el.removeChild(this.ctx.el.firstChild);
      this.killSVG(r2.Paper), r2.Paper.remove(), r2.elWrap = null, r2.elGraphical = null, r2.elLegendWrap = null, r2.elLegendForeign = null, r2.baseEl = null, r2.elGridRect = null, r2.elGridRectMask = null, r2.elGridRectBarMask = null, r2.elGridRectMarkerMask = null, r2.elForecastMask = null, r2.elNonForecastMask = null, r2.elDefs = null;
    } }]), t2;
  }(), $t = /* @__PURE__ */ new WeakMap();
  var Jt = function() {
    function t2(e2, a2) {
      i(this, t2), this.opts = a2, this.ctx = this, this.w = new O(a2).init(), this.el = e2, this.w.globals.cuid = m.randomId(), this.w.globals.chartID = this.w.config.chart.id ? m.escapeString(this.w.config.chart.id) : this.w.globals.cuid, new qt(this).initModules(), this.create = m.bind(this.create, this), this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this);
    }
    return s(t2, [{ key: "render", value: function() {
      var t3 = this;
      return new Promise(function(e2, i2) {
        if (null !== t3.el) {
          void 0 === Apex._chartInstances && (Apex._chartInstances = []), t3.w.config.chart.id && Apex._chartInstances.push({ id: t3.w.globals.chartID, group: t3.w.config.chart.group, chart: t3 }), t3.setLocale(t3.w.config.chart.defaultLocale);
          var a2 = t3.w.config.chart.events.beforeMount;
          "function" == typeof a2 && a2(t3, t3.w), t3.events.fireEvent("beforeMount", [t3, t3.w]), window.addEventListener("resize", t3.windowResizeHandler), function(t4, e3) {
            var i3 = false;
            if (t4.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
              var a3 = t4.getBoundingClientRect();
              "none" !== t4.style.display && 0 !== a3.width || (i3 = true);
            }
            var s3 = new ResizeObserver(function(a4) {
              i3 && e3.call(t4, a4), i3 = true;
            });
            t4.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Array.from(t4.children).forEach(function(t5) {
              return s3.observe(t5);
            }) : s3.observe(t4), $t.set(e3, s3);
          }(t3.el.parentNode, t3.parentResizeHandler);
          var s2 = t3.el.getRootNode && t3.el.getRootNode(), r2 = m.is("ShadowRoot", s2), o2 = t3.el.ownerDocument, n2 = r2 ? s2.getElementById("apexcharts-css") : o2.getElementById("apexcharts-css");
          if (!n2) {
            var l2;
            (n2 = document.createElement("style")).id = "apexcharts-css", n2.textContent = '@keyframes opaque {\n  0% {\n    opacity: 0\n  }\n\n  to {\n    opacity: 1\n  }\n}\n\n@keyframes resizeanim {\n\n  0%,\n  to {\n    opacity: 0\n  }\n}\n\n.apexcharts-canvas {\n  position: relative;\n  direction: ltr !important;\n  user-select: none\n}\n\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5)\n}\n\n.apexcharts-inner {\n  position: relative\n}\n\n.apexcharts-text tspan {\n  font-family: inherit\n}\n\nrect.legend-mouseover-inactive,\n.legend-mouseover-inactive rect,\n.legend-mouseover-inactive path,\n.legend-mouseover-inactive circle,\n.legend-mouseover-inactive line,\n.legend-mouseover-inactive text.apexcharts-yaxis-title-text,\n.legend-mouseover-inactive text.apexcharts-yaxis-label {\n  transition: .15s ease all;\n  opacity: .2\n}\n\n.apexcharts-legend-text {\n  padding-left: 15px;\n  margin-left: -15px;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, .96)\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30, 30, 30, .8)\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #eceff1;\n  border-bottom: 1px solid #ddd\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, .7);\n  border-bottom: 1px solid #333\n}\n\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  margin-left: 5px;\n  font-weight: 600\n}\n\n.apexcharts-tooltip-text-goals-label:empty,\n.apexcharts-tooltip-text-goals-value:empty,\n.apexcharts-tooltip-text-y-label:empty,\n.apexcharts-tooltip-text-y-value:empty,\n.apexcharts-tooltip-text-z-value:empty,\n.apexcharts-tooltip-title:empty {\n  display: none\n}\n\n.apexcharts-tooltip-text-goals-label,\n.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px\n}\n\n.apexcharts-tooltip-goals-group,\n.apexcharts-tooltip-text-goals-label,\n.apexcharts-tooltip-text-goals-value {\n  display: flex\n}\n\n.apexcharts-tooltip-text-goals-label:not(:empty),\n.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0;\n  margin-right: 10px;\n  border-radius: 50%\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,\n.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px\n}\n\n.apexcharts-custom-tooltip,\n.apexcharts-tooltip-box {\n  padding: 4px 8px\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: 700\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px\n}\n\n.apexcharts-xaxistooltip,\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #eceff1;\n  border: 1px solid #90a4ae\n}\n\n.apexcharts-xaxistooltip {\n  padding: 9px 10px;\n  transition: .15s ease all\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, .7);\n  border: 1px solid rgba(0, 0, 0, .5);\n  color: #fff\n}\n\n.apexcharts-xaxistooltip:after,\n.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-left: -6px\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-left: -7px\n}\n\n.apexcharts-xaxistooltip-bottom:after,\n.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%\n}\n\n.apexcharts-xaxistooltip-top:after,\n.apexcharts-xaxistooltip-top:before {\n  top: 100%\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-yaxistooltip {\n  padding: 4px 10px\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, .7);\n  border: 1px solid rgba(0, 0, 0, .5);\n  color: #fff\n}\n\n.apexcharts-yaxistooltip:after,\n.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-top: -6px\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-top: -7px\n}\n\n.apexcharts-yaxistooltip-left:after,\n.apexcharts-yaxistooltip-left:before {\n  left: 100%\n}\n\n.apexcharts-yaxistooltip-right:after,\n.apexcharts-yaxistooltip-right:before {\n  right: 100%\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none\n}\n\n.apexcharts-xcrosshairs,\n.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: .15s ease all\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,\n.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0\n}\n\n.apexcharts-selection-rect {\n  cursor: move\n}\n\n.svg_select_boundingRect,\n.svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_boundingRect,\n.apexcharts-selection-rect+g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_points_l,\n.apexcharts-selection-rect+g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-menu-icon,\n.apexcharts-pan-icon,\n.apexcharts-reset-icon,\n.apexcharts-selection-icon,\n.apexcharts-toolbar-custom-icon,\n.apexcharts-zoom-icon,\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6e8192;\n  text-align: center\n}\n\n.apexcharts-menu-icon svg,\n.apexcharts-reset-icon svg,\n.apexcharts-zoom-icon svg,\n.apexcharts-zoomin-icon svg,\n.apexcharts-zoomout-icon svg {\n  fill: #6e8192\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(.76)\n}\n\n.apexcharts-theme-dark .apexcharts-menu-icon svg,\n.apexcharts-theme-dark .apexcharts-pan-icon svg,\n.apexcharts-theme-dark .apexcharts-reset-icon svg,\n.apexcharts-theme-dark .apexcharts-selection-icon svg,\n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomin-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomout-icon svg {\n  fill: #f3f4f5\n}\n\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {\n  fill: #008ffb\n}\n\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg,\n.apexcharts-theme-light .apexcharts-reset-icon:hover svg,\n.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,\n.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {\n  fill: #333\n}\n\n.apexcharts-menu-icon,\n.apexcharts-selection-icon {\n  position: relative\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px\n}\n\n.apexcharts-menu-icon,\n.apexcharts-reset-icon,\n.apexcharts-zoom-icon {\n  transform: scale(.85)\n}\n\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  transform: scale(.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px\n}\n\n.apexcharts-pan-icon {\n  transform: scale(.62);\n  position: relative;\n  left: 1px;\n  top: 0\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6e8192;\n  stroke-width: 2\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008ffb\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0 6px 2px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: .15s ease all;\n  pointer-events: none\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: .15s ease all\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0, 0, 0, .7);\n  color: #fff\n}\n\n@media screen and (min-width:768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1\n  }\n}\n\n.apexcharts-canvas .apexcharts-element-hidden,\n.apexcharts-datalabel.apexcharts-element-hidden,\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-hidden-element-shown {\n  opacity: 1;\n  transition: 0.25s ease all;\n}\n\n.apexcharts-datalabel,\n.apexcharts-datalabel-label,\n.apexcharts-datalabel-value,\n.apexcharts-datalabels,\n.apexcharts-pie-label {\n  cursor: default;\n  pointer-events: none\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: .3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease\n}\n\n.apexcharts-radialbar-label {\n  cursor: pointer;\n}\n\n.apexcharts-annotation-rect,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-gridline,\n.apexcharts-line,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-point-annotation-label,\n.apexcharts-radar-series path:not(.apexcharts-marker),\n.apexcharts-radar-series polygon,\n.apexcharts-toolbar svg,\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-xaxis-annotation-label,\n.apexcharts-yaxis-annotation-label,\n.apexcharts-zoom-rect {\n  pointer-events: none\n}\n\n.apexcharts-tooltip-active .apexcharts-marker {\n  transition: .15s ease all\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden\n}\n\n.contract-trigger:before,\n.resize-triggers,\n.resize-triggers>div {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0\n}\n\n.resize-triggers>div {\n  height: 100%;\n  width: 100%;\n  background: #eee;\n  overflow: auto\n}\n\n.contract-trigger:before {\n  overflow: hidden;\n  width: 200%;\n  height: 200%\n}\n\n.apexcharts-bar-goals-markers {\n  pointer-events: none\n}\n\n.apexcharts-bar-shadows {\n  pointer-events: none\n}\n\n.apexcharts-rangebar-goals-markers {\n  pointer-events: none\n}\n';
            var h2 = (null === (l2 = t3.opts.chart) || void 0 === l2 ? void 0 : l2.nonce) || t3.w.config.chart.nonce;
            h2 && n2.setAttribute("nonce", h2), r2 ? s2.prepend(n2) : o2.head.appendChild(n2);
          }
          var c2 = t3.create(t3.w.config.series, {});
          if (!c2) return e2(t3);
          t3.mount(c2).then(function() {
            "function" == typeof t3.w.config.chart.events.mounted && t3.w.config.chart.events.mounted(t3, t3.w), t3.events.fireEvent("mounted", [t3, t3.w]), e2(c2);
          }).catch(function(t4) {
            i2(t4);
          });
        } else i2(new Error("Element not found"));
      });
    } }, { key: "create", value: function(t3, e2) {
      var i2 = this, a2 = this.w;
      new qt(this).initModules();
      var s2 = this.w.globals;
      (s2.noData = false, s2.animationEnded = false, this.responsive.checkResponsiveConfig(e2), a2.config.xaxis.convertedCatToNumeric) && new F(a2.config).convertCatToNumericXaxis(a2.config, this.ctx);
      if (null === this.el) return s2.animationEnded = true, null;
      if (this.core.setupElements(), "treemap" === a2.config.chart.type && (a2.config.grid.show = false, a2.config.yaxis[0].show = false), 0 === s2.svgWidth) return s2.animationEnded = true, null;
      var r2 = t3;
      t3.forEach(function(t4, e3) {
        t4.hidden && (r2 = i2.legend.legendHelpers.getSeriesAfterCollapsing({ realIndex: e3 }));
      });
      var o2 = A.checkComboSeries(r2, a2.config.chart.type);
      s2.comboCharts = o2.comboCharts, s2.comboBarCount = o2.comboBarCount;
      var n2 = r2.every(function(t4) {
        return t4.data && 0 === t4.data.length;
      });
      (0 === r2.length || n2 && s2.collapsedSeries.length < 1) && this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(r2), this.theme.init(), new W(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), s2.noData && s2.collapsedSeries.length !== s2.series.length && !a2.config.legend.showForSingleSeries || this.legend.init(), this.series.hasAllSeriesEqualX(), s2.axisCharts && (this.core.coreCalculations(), "category" !== a2.config.xaxis.type && this.formatters.setLabelFormatters(), this.ctx.toolbar.minX = a2.globals.minX, this.ctx.toolbar.maxX = a2.globals.maxX), this.formatters.heatmapLabelFormatters(), new A(this).getLargestMarkerSize(), this.dimensions.plotCoords();
      var l2 = this.core.xySettings();
      this.grid.createGridMask();
      var h2 = this.core.plotChartType(r2, l2), c2 = new G(this);
      return c2.bringForward(), a2.config.dataLabels.background.enabled && c2.dataLabelsBackground(), this.core.shiftGraphPosition(), { elGraph: h2, xyRatios: l2, dimensions: { plot: { left: a2.globals.translateX, top: a2.globals.translateY, width: a2.globals.gridWidth, height: a2.globals.gridHeight } } };
    } }, { key: "mount", value: function() {
      var t3 = this, e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i2 = this, a2 = i2.w;
      return new Promise(function(s2, r2) {
        if (null === i2.el) return r2(new Error("Not enough data to display or target element not found"));
        (null === e2 || a2.globals.allSeriesCollapsed) && i2.series.handleNoData(), i2.grid = new Z(i2);
        var o2, n2, l2 = i2.grid.drawGrid();
        (i2.annotations = new E(i2), i2.annotations.drawImageAnnos(), i2.annotations.drawTextAnnos(), "back" === a2.config.grid.position) && (l2 && a2.globals.dom.elGraphical.add(l2.el), null != l2 && null !== (o2 = l2.elGridBorders) && void 0 !== o2 && o2.node && a2.globals.dom.elGraphical.add(l2.elGridBorders));
        if (Array.isArray(e2.elGraph)) for (var h2 = 0; h2 < e2.elGraph.length; h2++) a2.globals.dom.elGraphical.add(e2.elGraph[h2]);
        else a2.globals.dom.elGraphical.add(e2.elGraph);
        "front" === a2.config.grid.position && (l2 && a2.globals.dom.elGraphical.add(l2.el), null != l2 && null !== (n2 = l2.elGridBorders) && void 0 !== n2 && n2.node && a2.globals.dom.elGraphical.add(l2.elGridBorders));
        "front" === a2.config.xaxis.crosshairs.position && i2.crosshairs.drawXCrosshairs(), "front" === a2.config.yaxis[0].crosshairs.position && i2.crosshairs.drawYCrosshairs(), "treemap" !== a2.config.chart.type && i2.axes.drawAxis(a2.config.chart.type, l2);
        var c2 = new q(t3.ctx, l2), d2 = new Q(t3.ctx, l2);
        if (null !== l2 && (c2.xAxisLabelCorrections(l2.xAxisTickWidth), d2.setYAxisTextAlignments(), a2.config.yaxis.map(function(t4, e3) {
          -1 === a2.globals.ignoreYAxisIndexes.indexOf(e3) && d2.yAxisTitleRotate(e3, t4.opposite);
        })), i2.annotations.drawAxesAnnotations(), !a2.globals.noData) {
          if (a2.config.tooltip.enabled && !a2.globals.noData && i2.w.globals.tooltip.drawTooltip(e2.xyRatios), a2.globals.axisCharts && (a2.globals.isXNumeric || a2.config.xaxis.convertedCatToNumeric || a2.globals.isRangeBar)) (a2.config.chart.zoom.enabled || a2.config.chart.selection && a2.config.chart.selection.enabled || a2.config.chart.pan && a2.config.chart.pan.enabled) && i2.zoomPanSelection.init({ xyRatios: e2.xyRatios });
          else {
            var g2 = a2.config.chart.toolbar.tools;
            ["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach(function(t4) {
              g2[t4] = false;
            });
          }
          a2.config.chart.toolbar.show && !a2.globals.allSeriesCollapsed && i2.toolbar.createToolbar();
        }
        a2.globals.memory.methodsToExec.length > 0 && a2.globals.memory.methodsToExec.forEach(function(t4) {
          t4.method(t4.params, false, t4.context);
        }), a2.globals.axisCharts || a2.globals.noData || i2.core.resizeNonAxisCharts(), s2(i2);
      });
    } }, { key: "destroy", value: function() {
      var t3, e2;
      window.removeEventListener("resize", this.windowResizeHandler), this.el.parentNode, t3 = this.parentResizeHandler, (e2 = $t.get(t3)) && (e2.disconnect(), $t.delete(t3));
      var i2 = this.w.config.chart.id;
      i2 && Apex._chartInstances.forEach(function(t4, e3) {
        t4.id === m.escapeString(i2) && Apex._chartInstances.splice(e3, 1);
      }), new Zt(this.ctx).clear({ isUpdating: false });
    } }, { key: "updateOptions", value: function(t3) {
      var e2 = this, i2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], s2 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], r2 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], o2 = this.w;
      return o2.globals.selection = void 0, t3.series && (this.series.resetSeries(false, true, false), t3.series.length && t3.series[0].data && (t3.series = t3.series.map(function(t4, i3) {
        return e2.updateHelpers._extendSeries(t4, i3);
      })), this.updateHelpers.revertDefaultAxisMinMax()), t3.xaxis && (t3 = this.updateHelpers.forceXAxisUpdate(t3)), t3.yaxis && (t3 = this.updateHelpers.forceYAxisUpdate(t3)), o2.globals.collapsedSeriesIndices.length > 0 && this.series.clearPreviousPaths(), t3.theme && (t3 = this.theme.updateThemeOptions(t3)), this.updateHelpers._updateOptions(t3, i2, a2, s2, r2);
    } }, { key: "updateSeries", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      return this.series.resetSeries(false), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(t3, e2, i2);
    } }, { key: "appendSeries", value: function(t3) {
      var e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a2 = this.w.config.series.slice();
      return a2.push(t3), this.series.resetSeries(false), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(a2, e2, i2);
    } }, { key: "appendData", value: function(t3) {
      var e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i2 = this;
      i2.w.globals.dataChanged = true, i2.series.getPreviousPaths();
      for (var a2 = i2.w.config.series.slice(), s2 = 0; s2 < a2.length; s2++) if (null !== t3[s2] && void 0 !== t3[s2]) for (var r2 = 0; r2 < t3[s2].data.length; r2++) a2[s2].data.push(t3[s2].data[r2]);
      return i2.w.config.series = a2, e2 && (i2.w.globals.initialSeries = m.clone(i2.w.config.series)), this.update();
    } }, { key: "update", value: function(t3) {
      var e2 = this;
      return new Promise(function(i2, a2) {
        new Zt(e2.ctx).clear({ isUpdating: true });
        var s2 = e2.create(e2.w.config.series, t3);
        if (!s2) return i2(e2);
        e2.mount(s2).then(function() {
          "function" == typeof e2.w.config.chart.events.updated && e2.w.config.chart.events.updated(e2, e2.w), e2.events.fireEvent("updated", [e2, e2.w]), e2.w.globals.isDirty = true, i2(e2);
        }).catch(function(t4) {
          a2(t4);
        });
      });
    } }, { key: "getSyncedCharts", value: function() {
      var t3 = this.getGroupedCharts(), e2 = [this];
      return t3.length && (e2 = [], t3.forEach(function(t4) {
        e2.push(t4);
      })), e2;
    } }, { key: "getGroupedCharts", value: function() {
      var t3 = this;
      return Apex._chartInstances.filter(function(t4) {
        if (t4.group) return true;
      }).map(function(e2) {
        return t3.w.config.chart.group === e2.group ? e2.chart : t3;
      });
    } }, { key: "toggleSeries", value: function(t3) {
      return this.series.toggleSeries(t3);
    } }, { key: "highlightSeriesOnLegendHover", value: function(t3, e2) {
      return this.series.toggleSeriesOnHover(t3, e2);
    } }, { key: "showSeries", value: function(t3) {
      this.series.showSeries(t3);
    } }, { key: "hideSeries", value: function(t3) {
      this.series.hideSeries(t3);
    } }, { key: "highlightSeries", value: function(t3) {
      this.series.highlightSeries(t3);
    } }, { key: "isSeriesHidden", value: function(t3) {
      this.series.isSeriesHidden(t3);
    } }, { key: "resetSeries", value: function() {
      var t3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      this.series.resetSeries(t3, e2);
    } }, { key: "addEventListener", value: function(t3, e2) {
      this.events.addEventListener(t3, e2);
    } }, { key: "removeEventListener", value: function(t3, e2) {
      this.events.removeEventListener(t3, e2);
    } }, { key: "addXaxisAnnotation", value: function(t3) {
      var e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a2 = this;
      i2 && (a2 = i2), a2.annotations.addXaxisAnnotationExternal(t3, e2, a2);
    } }, { key: "addYaxisAnnotation", value: function(t3) {
      var e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a2 = this;
      i2 && (a2 = i2), a2.annotations.addYaxisAnnotationExternal(t3, e2, a2);
    } }, { key: "addPointAnnotation", value: function(t3) {
      var e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a2 = this;
      i2 && (a2 = i2), a2.annotations.addPointAnnotationExternal(t3, e2, a2);
    } }, { key: "clearAnnotations", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, e2 = this;
      t3 && (e2 = t3), e2.annotations.clearAnnotations(e2);
    } }, { key: "removeAnnotation", value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, i2 = this;
      e2 && (i2 = e2), i2.annotations.removeAnnotation(i2, t3);
    } }, { key: "getChartArea", value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner");
    } }, { key: "getSeriesTotalXRange", value: function(t3, e2) {
      return this.coreUtils.getSeriesTotalsXRange(t3, e2);
    } }, { key: "getHighestValueInSeries", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return new J(this.ctx).getMinYMaxY(t3).highestY;
    } }, { key: "getLowestValueInSeries", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return new J(this.ctx).getMinYMaxY(t3).lowestY;
    } }, { key: "getSeriesTotal", value: function() {
      return this.w.globals.seriesTotals;
    } }, { key: "toggleDataPointSelection", value: function(t3, e2) {
      return this.updateHelpers.toggleDataPointSelection(t3, e2);
    } }, { key: "zoomX", value: function(t3, e2) {
      this.ctx.toolbar.zoomUpdateOptions(t3, e2);
    } }, { key: "setLocale", value: function(t3) {
      this.localization.setCurrentLocaleValues(t3);
    } }, { key: "dataURI", value: function(t3) {
      return new U(this.ctx).dataURI(t3);
    } }, { key: "exportToCSV", value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return new U(this.ctx).exportToCSV(t3);
    } }, { key: "paper", value: function() {
      return this.w.globals.dom.Paper;
    } }, { key: "_parentResizeCallback", value: function() {
      this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize();
    } }, { key: "_windowResize", value: function() {
      var t3 = this;
      clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout(function() {
        t3.w.globals.resized = true, t3.w.globals.dataChanged = false, t3.ctx.update();
      }, 150);
    } }, { key: "_windowResizeHandler", value: function() {
      var t3 = this.w.config.chart.redrawOnWindowResize;
      "function" == typeof t3 && (t3 = t3()), t3 && this._windowResize();
    } }], [{ key: "getChartByID", value: function(t3) {
      var e2 = m.escapeString(t3);
      if (Apex._chartInstances) {
        var i2 = Apex._chartInstances.filter(function(t4) {
          return t4.id === e2;
        })[0];
        return i2 && i2.chart;
      }
    } }, { key: "initOnLoad", value: function() {
      for (var e2 = document.querySelectorAll("[data-apexcharts]"), i2 = 0; i2 < e2.length; i2++) {
        new t2(e2[i2], JSON.parse(e2[i2].getAttribute("data-options"))).render();
      }
    } }, { key: "exec", value: function(t3, e2) {
      var i2 = this.getChartByID(t3);
      if (i2) {
        i2.w.globals.isExecCalled = true;
        var a2 = null;
        if (-1 !== i2.publicMethods.indexOf(e2)) {
          for (var s2 = arguments.length, r2 = new Array(s2 > 2 ? s2 - 2 : 0), o2 = 2; o2 < s2; o2++) r2[o2 - 2] = arguments[o2];
          a2 = i2[e2].apply(i2, r2);
        }
        return a2;
      }
    } }, { key: "merge", value: function(t3, e2) {
      return m.extend(t3, e2);
    } }]), t2;
  }();
  module.exports = Jt;
})(apexcharts_common$2, apexcharts_common$2.exports);
var apexcharts_commonExports = apexcharts_common$2.exports;
const apexcharts_common = /* @__PURE__ */ getDefaultExportFromCjs(apexcharts_commonExports);
const apexcharts_common$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: apexcharts_common
}, Symbol.toStringTag, { value: "Module" }));
export {
  apexcharts_common$1 as a
};
