! function(n) {
	n(function() {}), n(window).on("load resize", function() {}), n(window).scroll(
		function() {})
}(jQuery);
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
		def: "easeOutQuad",
		swing: function(t, n, e, r, u) {
			return jQuery.easing[jQuery.easing.def](t, n, e, r, u)
		},
		easeInQuad: function(t, n, e, r, u) {
			return r * (n /= u) * n + e
		},
		easeOutQuad: function(t, n, e, r, u) {
			return -r * (n /= u) * (n - 2) + e
		},
		easeInOutQuad: function(t, n, e, r, u) {
			return (n /= u / 2) < 1 ? r / 2 * n * n + e : -r / 2 * (--n * (n - 2) - 1) +
				e
		},
		easeInCubic: function(t, n, e, r, u) {
			return r * (n /= u) * n * n + e
		},
		easeOutCubic: function(t, n, e, r, u) {
			return r * ((n = n / u - 1) * n * n + 1) + e
		},
		easeInOutCubic: function(t, n, e, r, u) {
			return (n /= u / 2) < 1 ? r / 2 * n * n * n + e : r / 2 * ((n -= 2) * n *
				n + 2) + e
		},
		easeInQuart: function(t, n, e, r, u) {
			return r * (n /= u) * n * n * n + e
		},
		easeOutQuart: function(t, n, e, r, u) {
			return -r * ((n = n / u - 1) * n * n * n - 1) + e
		},
		easeInOutQuart: function(t, n, e, r, u) {
			return (n /= u / 2) < 1 ? r / 2 * n * n * n * n + e : -r / 2 * ((n -= 2) *
				n * n * n - 2) + e
		},
		easeInQuint: function(t, n, e, r, u) {
			return r * (n /= u) * n * n * n * n + e
		},
		easeOutQuint: function(t, n, e, r, u) {
			return r * ((n = n / u - 1) * n * n * n * n + 1) + e
		},
		easeInOutQuint: function(t, n, e, r, u) {
			return (n /= u / 2) < 1 ? r / 2 * n * n * n * n * n + e : r / 2 * ((n -= 2) *
				n * n * n * n + 2) + e
		},
		easeInSine: function(t, n, e, r, u) {
			return -r * Math.cos(n / u * (Math.PI / 2)) + r + e
		},
		easeOutSine: function(t, n, e, r, u) {
			return r * Math.sin(n / u * (Math.PI / 2)) + e
		},
		easeInOutSine: function(t, n, e, r, u) {
			return -r / 2 * (Math.cos(Math.PI * n / u) - 1) + e
		},
		easeInExpo: function(t, n, e, r, u) {
			return 0 == n ? e : r * Math.pow(2, 10 * (n / u - 1)) + e
		},
		easeOutExpo: function(t, n, e, r, u) {
			return n == u ? e + r : r * (-Math.pow(2, -10 * n / u) + 1) + e
		},
		easeInOutExpo: function(t, n, e, r, u) {
			return 0 == n ? e : n == u ? e + r : (n /= u / 2) < 1 ? r / 2 * Math.pow(2,
				10 * (n - 1)) + e : r / 2 * (-Math.pow(2, -10 * --n) + 2) + e
		},
		easeInCirc: function(t, n, e, r, u) {
			return -r * (Math.sqrt(1 - (n /= u) * n) - 1) + e
		},
		easeOutCirc: function(t, n, e, r, u) {
			return r * Math.sqrt(1 - (n = n / u - 1) * n) + e
		},
		easeInOutCirc: function(t, n, e, r, u) {
			return (n /= u / 2) < 1 ? -r / 2 * (Math.sqrt(1 - n * n) - 1) + e : r / 2 *
				(Math.sqrt(1 - (n -= 2) * n) + 1) + e
		},
		easeInElastic: function(t, n, e, r, u) {
			var a = 1.70158,
				i = 0,
				o = r;
			if (0 == n) return e;
			if (1 == (n /= u)) return e + r;
			if (i || (i = .3 * u), o < Math.abs(r)) {
				o = r;
				var a = i / 4
			} else var a = i / (2 * Math.PI) * Math.asin(r / o);
			return -(o * Math.pow(2, 10 * (n -= 1)) * Math.sin(2 * (n * u - a) * Math.PI /
				i)) + e
		},
		easeOutElastic: function(t, n, e, r, u) {
			var a = 1.70158,
				i = 0,
				o = r;
			if (0 == n) return e;
			if (1 == (n /= u)) return e + r;
			if (i || (i = .3 * u), o < Math.abs(r)) {
				o = r;
				var a = i / 4
			} else var a = i / (2 * Math.PI) * Math.asin(r / o);
			return o * Math.pow(2, -10 * n) * Math.sin(2 * (n * u - a) * Math.PI / i) +
				r + e
		},
		easeInOutElastic: function(t, n, e, r, u) {
			var a = 1.70158,
				i = 0,
				o = r;
			if (0 == n) return e;
			if (2 == (n /= u / 2)) return e + r;
			if (i || (i = .3 * u * 1.5), o < Math.abs(r)) {
				o = r;
				var a = i / 4
			} else var a = i / (2 * Math.PI) * Math.asin(r / o);
			return 1 > n ? -.5 * o * Math.pow(2, 10 * (n -= 1)) * Math.sin(2 * (n * u -
				a) * Math.PI / i) + e : o * Math.pow(2, -10 * (n -= 1)) * Math.sin(2 * (
				n * u - a) * Math.PI / i) * .5 + r + e
		},
		easeInBack: function(t, n, e, r, u, a) {
			return void 0 == a && (a = 1.70158), r * (n /= u) * n * ((a + 1) * n - a) +
				e
		},
		easeOutBack: function(t, n, e, r, u, a) {
			return void 0 == a && (a = 1.70158), r * ((n = n / u - 1) * n * ((a + 1) *
				n + a) + 1) + e
		},
		easeInOutBack: function(t, n, e, r, u, a) {
			return void 0 == a && (a = 1.70158), (n /= u / 2) < 1 ? r / 2 * n * n * ((
				(a *= 1.525) + 1) * n - a) + e : r / 2 * ((n -= 2) * n * (((a *= 1.525) +
				1) * n + a) + 2) + e
		},
		easeInBounce: function(t, n, e, r, u) {
			return r - jQuery.easing.easeOutBounce(t, u - n, 0, r, u) + e
		},
		easeOutBounce: function(t, n, e, r, u) {
			return (n /= u) < 1 / 2.75 ? 7.5625 * r * n * n + e : 2 / 2.75 > n ? r * (
				7.5625 * (n -= 1.5 / 2.75) * n + .75) + e : 2.5 / 2.75 > n ? r * (7.5625 *
				(n -= 2.25 / 2.75) * n + .9375) + e : r * (7.5625 * (n -= 2.625 / 2.75) *
				n + .984375) + e
		},
		easeInOutBounce: function(t, n, e, r, u) {
			return u / 2 > n ? .5 * jQuery.easing.easeInBounce(t, 2 * n, 0, r, u) + e :
				.5 * jQuery.easing.easeOutBounce(t, 2 * n - u, 0, r, u) + .5 * r + e
		}
	}), ! function(t) {
		t.fn.tile = function(n) {
			var e, r, u, a, i, o = this.length - 1;
			return n || (n = this.length), this.each(function() {
				i = this.style, i.removeProperty && i.removeProperty("height"), i.removeAttribute &&
					i.removeAttribute("height")
			}), this.each(function(i) {
				u = i % n, 0 == u && (e = []), e[u] = t(this), a = e[u].height(), (0 ==
					u || a > r) && (r = a), (i == o || u == n - 1) && t.each(e, function() {
					this.height(r)
				})
			})
		}
	}(jQuery),
	function(t) {
		t(function() {
			n.hover_opacity(), n.pagetop(), n.rollover(t("img.btn")), n.smoothscroll(),
				t(window).on("load resize", function() {}), t(window).scroll(function() {})
		});
		var n = {
			hover_opacity: function() {
				t(".hover").on({
					mouseenter: function() {
						t(this).stop(!0, !0).fadeTo(200, .75)
					},
					mouseleave: function() {
						t(this).stop(!0, !0).fadeTo(200, 1)
					}
				})
			},
			pagetop: function() {
				var n = t("#pagetop");
				n.hide(), t(window).scroll(function() {
					t(this).scrollTop() > 100 ? n.fadeIn() : n.fadeOut()
				}), n.click(function() {
					return t("body,html").animate({
						scrollTop: 0
					}, 500), !1
				})
			},
			rollover: function(n) {
				var e = n;
				e.on({
					mouseenter: function() {
						for (var n = t(this).attr("src").slice(-4), e = [".gif", ".jpg",
								".png"
							], r = t(this).attr("src"), u = 0, a = e.length; a > u; u++) e[u] !=
							n || (str = r.replace(e[u], "_on"), onSrc = str += n, t(this).attr(
								"src", onSrc))
					},
					mouseleave: function() {
						var n = t(this).attr("src");
						str = n.replace("_on", ""), t(this).attr("src", str)
					}
				})
			},
			smoothscroll: function() {
				t("a[href^=#]").on("click", function() {
					var n = 400,
						e = t(this).attr("href"),
						r = t("#" == e || "" == e ? "html" : e),
						u = r.offset().top;
					return t("body,html").animate({
						scrollTop: u
					}, n, "swing"), !1
				})
			}
		}
	}(jQuery);
