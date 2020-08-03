(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-4f73875a"], {
		"3a47": function (t, e, i) {
			"use strict";
			var s = i("aab6"),
				r = i.n(s);
			r.a
		},
		4386: function (t, e, i) {
			t.exports = i.p + "img/win.bdcff854.gif"
		},
		6601: function (t, e, i) {
			t.exports = i.p + "media/open.21a3ed38.wav"
		},
		6968: function (t, e, i) {
			"use strict";
			var s = function () {
					var t = this,
						e = t.$createElement,
						s = t._self._c || e;
					return s("div", {
						staticClass: "i-title"
					}, [s("div", {
						staticClass: "line"
					}), s("div", {
						staticClass: "main"
					}, [s("img", {
						attrs: {
							src: i("d5d0")
						}
					}), s("Icon", {
						attrs: {
							type: "icon-arrowleft"
						}
					}), s("span", {
						staticStyle: {
							"white-space": "nowrap"
						}
					}, [t._t("default", [t._v(t._s(t.value))])], 2), s("Icon", {
						attrs: {
							type: "icon-arrowright"
						}
					}), s("img", {
						attrs: {
							src: i("d5d0")
						}
					})], 1), s("div", {
						staticClass: "line"
					})])
				},
				r = [],
				a = {
					data: function () {
						return {
							value: ""
						}
					},
					mounted: function () {
						this.value = this.$el.textContent
					}
				},
				n = a,
				o = (i("3a47"), i("2877")),
				c = Object(o["a"])(n, s, r, !1, null, null, null);
			e["a"] = c.exports
		},
		"73b2": function (t, e, i) {
			"use strict";
			var s = i("b2bb"),
				r = i.n(s);
			r.a
		},
		"80aa": function (t, e, i) {
			t.exports = i.p + "media/win.d28852bb.mp3"
		},
		"8e4d": function (t, e, i) {
			t.exports = i.p + "media/scroll.61a5a761.aac"
		},
		"9ab8": function (t, e, i) {
			"use strict";
			i.r(e);
			var s = function () {
					var t = this,
						e = t.$createElement,
						s = t._self._c || e;
					return s("div", [s("div", {
						staticClass: "process-content layout"
					}, [s("div", {
						staticClass: "send-box"
					}, [s("WaveProcess", {
						staticClass: "open-process",
						attrs: {
							process: t.process
						}
					}), s("div", [s("p", [t._v(t._s(t.$t("open_rewards_txt1")))]), s("p", [t._v(t._s(t.$t("open_rewards_txt2")))])])], 1)]), s("div", {
						staticClass: "open-box"
					}, [s("div", {
						staticClass: "open-box-bg",
						class: {
							blur: 1 !== t.step
						}
					}), s("div", {
						staticClass: "open-preview",
						class: {
							active: 1 === t.step
						}
					}, [s("p", {
						staticClass: "box-name"
					}, [t._v(t._s(t.box.name))]), s("img", {
						attrs: {
							src: t.$imgHost(t.box.background)
						}
					}), s("p", {
						staticClass: "box-price"
					}, [t._v(t._s("$ " + (t.box.price || 0)))]), s("div", {
						staticClass: "ge-btn-1 open-btn",
						on: {
							click: function (e) {
								return t.openBoxFunc()
							}
						}
					}, [t._v(t._s(t.isBoxFree ? "Free" : "Open"))]), s("div", {
						staticClass: "ge-btn-1 open-btn",
						on: {
							click: function (e) {
								return t.openBoxFunc()
							}
						}
					}, [t._v("Free Trial")])]), s("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: 2 === t.step,
							expression: "step === 2"
						}],
						staticClass: "scroll-box layout"
					}, [s("div", {
						staticClass: "scroll-behind"
					}, [s("div", {
						style: t.transStyle
					}, t._l(t.scrollPrize, (function (e, i) {
						return s("div", {
							key: i,
							staticClass: "prize-item",
							class: "rarity-" + e.rarity,
							attrs: {
								id: "behind-item-" + i
							}
						}, [s("img", {
							attrs: {
								src: t.$imgHost(e.image)
							}
						})])
					})), 0)]), s("div", {
						staticClass: "scroll-front"
					}, [s("div", {
						style: t.transStyle
					}, t._l(t.scrollPrize, (function (e, i) {
						return s("div", {
							key: i,
							staticClass: "prize-item",
							class: "rarity-" + e.rarity,
							attrs: {
								id: "front-item-" + i
							}
						}, [s("img", {
							attrs: {
								src: t.$imgHost(e.image),
								id: "item" + i
							}
						})])
					})), 0)])]), s("div", {
						staticClass: "result-box",
						class: {
							active: 3 === t.step
						}
					}, [s("div", {
						staticClass: "result-title",
						class: "border-rarity-" + t.prize.skinsRarity
					}, [t._v(t._s(t.prize.stuffName))]), s("div", {
						staticClass: "img-box",
						style: {
							backgroundImage: "url(" + t.prize.stuffImage + ")"
						}
					}), t.prize.price > t.box.price ? s("img", {
						staticClass: "win-img",
						attrs: {
							src: i("4386")
						}
					}) : t._e(), s("p", {
						staticClass: "result-price"
					}, [t._v(t._s("$ " + t.prize.price))]), s("div", {
						staticClass: "ge-btn-1 result-btn",
						on: {
							click: function (e) {
								return t.continueOpen()
							}
						}
					}, [t._v("Determine")])])]), s("Title", [t._v("Case Contains")]), t.isLoading ? s("Loading") : t._e(), s("div", {
						staticClass: "prize-list layout"
					}, t._l(t.prizeList, (function (e, i) {
						return s("div", {
							key: i,
							staticClass: "skin-box",
							class: "skin-box-" + e.rarity
						}, [e.price > t.box.price ? s("Icon", {
							attrs: {
								type: "icon-fire"
							}
						}) : t._e(), e.exterior ? s("span", {
							staticClass: "tip"
						}, [t._v(t._s(e.exterior))]) : t._e(), s("img", {
							directives: [{
								name: "lazy",
								rawName: "v-lazy",
								value: t.$imgHost(e.image),
								expression: "$imgHost(item.image)"
							}],
							attrs: {
								alt: "item.name"
							}
						}), s("p", {
							staticClass: "name"
						}, [t._v(t._s(e.name1))]), s("p", [t._v(t._s(e.name2))]), s("p", [t._v(t._s(e.exterior))])], 1)
					})), 0), s("audio", {
						ref: "scrollAudio",
						attrs: {
							preload: "auto",
							src: i("8e4d")
						}
					}), s("audio", {
						ref: "openAudio",
						attrs: {
							preload: "auto",
							src: i("6601")
						}
					}), s("audio", {
						ref: "winAudio",
						attrs: {
							preload: "auto",
							src: i("80aa")
						}
					})], 1)
				},
				r = [],
				a = (i("99af"), i("4160"), i("d81d"), i("b0c0"), i("ac1f"), i("466d"), i("1276"), i("159b"), i("5530")),
				n = i("2f62"),
				o = i("6968"),
				c = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i("div", {
						staticClass: "wave-box"
					}, [i("div", {
						staticClass: "container"
					}, [i("div", {
						staticClass: "wave",
						class: "wave-" + t.process
					}), i("div", {
						staticClass: "process"
					}, [t._v(t._s(t.process) + " %")])])])
				},
				l = [],
				u = (i("a9e3"), {
					props: {
						process: {
							type: Number,
							default: 0
						}
					}
				}),
				p = u,
				d = (i("73b2"), i("2877")),
				h = Object(d["a"])(p, c, l, !1, null, "37deab76", null),
				f = h.exports,
				m = {
					data: function () {
						return {
							canOpen: !0,
							playAudio: !this.$isM,
							step: 1,
							pollingCount: 0,
							box: {},
							freeTimes: 9,
							prizeIndex: 0,
							openTimes: 0,
							prizeList: [],
							scrollPrize: [],
							victory: [],
							defeat: [],
							prize: {},
							transStyle: {
								transform: "translateX(0)"
							},
							isLoading: !1,
							isOpenFailed: !1,
							isFreeTry: !1,
							lowestPrize: {}
						}
					},
					created: function () {
						this.getDiscount(), this.getOpenTimes(), this.getPrizeList()
					},
					computed: Object(a["a"])(Object(a["a"])({}, Object(n["d"])(["user"])), {}, {
						isBoxFree: function () {
							return this.freeTimes - this.openTimes === 0
						},
						process: function () {
							return Math.floor(this.openTimes / this.freeTimes * 100)
						}
					}),
					methods: Object(a["a"])(Object(a["a"])(Object(a["a"])({}, Object(n["b"])(["getUserInfo", "updateUserInfo", "getInfo"])), Object(n["c"])(["updateBagNum"])), {}, {
						getDiscount: function () {
							var t = this;
							this.$axios.get("/box/free").then((function (e) {
								t.freeTimes = e.free
							}))
						},
						getOpenTimes: function () {
							var t = this;
							this.$axios({
								method: "get",
								url: "/box/".concat(this.box.id || this.$route.params.boxId, "/count"),
								hideLoad: !0
							}).then((function (e) {
								t.openTimes = e.count
							}))
						},
						openBoxFunc: function () {
							return this.user.id ? 0 === this.prizeList.length ? (this.$notify.info("Open failed", "There is nothing in case"), !1) : 1 !== this.box.status ? (this.$notify.info("Open failed", "Case sold out"), !1) : !!this.canOpen && (!this.isBoxFree && this.box.price > this.user.balance ?  (this.canOpen = !1, void this.openBox(this.box)): (this.$notify.error("Notice", "Balance is not enough"), !1)) : (this.$notify.info("Notice", "Please login first"), this.$login.show(), !1)
						},
						freeTry: function () {
							var t = this;
							this.step = 2, this.isFreeTry = !0;
							var e = .2,
								i = Math.random() <= e;
							0 === this.victory.length && this.prizeList.forEach((function (e) {
								e.price < t.box.price ? t.defeat.push(e) : t.victory.push(e)
							}));
							var s = i ? this.victory : this.defeat,
								r = s[Math.floor(Math.random() * s.length)],
								a = {
									id: r.id,
									stuffName: r.name,
									stuffImage: r.image,
									result: i ? 1 : 0,
									price: r.price,
									skinsRarity: r.rarity
								};
							this.startAnimation(), this.handelPrizeResult(a)
						},
						openBox: function (t) {
							var e = this;
							this.step = 2, this.startAnimation(), this.$axios({
								method: "post",
								url: "/box/".concat(t.id, "/open"),
								data: {
									boxId: t.id
								}
							}).then((function (t) {
								e.pollingCount = 0, e.getPrize(t.orderNo)
							})).catch((function () {
								e.$notify.error("Open failed", "Service error!")
							}))
						},
						getPrize: function (t) {
							var e = this;
							this.pollingCount > 3 ? clearTimeout(this.queryPolling) : (this.pollingCount++, this.queryPolling = setTimeout((function () {
								e.$axios({
									method: "get",
									url: "/box/result/".concat(t)
								}).then((function (t) {
									clearTimeout(e.queryPolling), e.isOpenFailed || e.handelPrizeResult(t)
								})).catch((function () {
									e.getPrize(t)
								}))
							}), 300))
						},
						handleError: function () {
							var t = {
								id: this.lowestPrize.id,
								stuffName: this.lowestPrize.name,
								stuffImage: this.lowestPrize.image,
								price: this.lowestPrize.price,
								skinsRarity: this.lowestPrize.rarity
							};
							this.handelPrizeResult(t)
						},
						handelPrizeResult: function (t) {
							t.price && (this.prize = t, document.querySelector("#behind-item-".concat(this.prizeIndex - 1, " img")).setAttribute("src", t.stuffImage), document.querySelector("#front-item-".concat(this.prizeIndex - 1, " img")).setAttribute("src", t.stuffImage), this.setClass(document.querySelector("#behind-item-".concat(this.prizeIndex - 1)), t.skinsRarity), this.setClass(document.querySelector("#front-item-".concat(this.prizeIndex - 1)), t.skinsRarity))
						},
						setClass: function (t, e) {
							var i = t.getAttribute("class").split(" ")[0];
							t.setAttribute("class", "".concat(i, " rarity-").concat(e))
						},
						showPrize: function () {
							if (!this.prize.price) return this.$notify.error("Open Failed", "Service error!"), this.clearOpenStatus(), this.step = 1, !1;
							this.step = 3, this.prize.price > this.box.price && this.playAudio && this.$refs.winAudio.play(), this.isFreeTry || (this.updateUserInfo(), this.getOpenTimes())
						},
						getPrizeList: function () {
							var t = this;
							this.$axios.get("/box/".concat(this.$route.params.boxId, "/stuff")).then((function (e) {
								t.handleData(e)
							}))
						},
						clearOpenStatus: function () {
							this.transStyle = {
								transform: "translateX(0)"
							}, this.isOpenFailed = !1, this.isFreeTry = !1, this.canOpen = !0
						},
						continueOpen: function () {
							this.clearOpenStatus(), this.step = 1, this.prize = {}
						},
						handleData: function (t) {
							var e = this,
								i = t.stuff,
								s = t.box;
							this.box = s, this.lowestPrize = i[0], this.prizeList = i.map((function (t) {
								t.price < e.lowestPrize.price && (e.lowestPrize = t);
								var i = t.name.split("|"),
									s = i[0],
									r = i[1] ? i[1].split("(")[0] : "",
									n = i[1] ? i[1].match(/\((.*?)\)/) : "",
									o = n ? n[1] : "";
								return Object(a["a"])(Object(a["a"])({}, t), {}, {
									name1: s,
									name2: r,
									exterior: o
								})
							}));
							while (i.length > 0 && i.length < 78) i = i.concat(JSON.parse(JSON.stringify(i)));
							i.sort((function () {
								return Math.random() - .5
							})), this.scrollPrize = i
						}
					}),
					components: {
						Title: o["a"],
						WaveProcess: f
					}
				},
				b = m,
				g = Object(d["a"])(b, s, r, !1, null, null, null);
			e["default"] = g.exports
		},
		aab6: function (t, e, i) {},
		b2bb: function (t, e, i) {},
		d5d0: function (t, e) {
			t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAMAAAApppNLAAACLlBMVEUAAABYsrknQ0IpRUIjOzwwT1AvUVApR0YlPz42XVozWVYqSkctTk8oRkRAbWo8ZmM5Yl8rTE4sTktatLxEdHAnQkA2XVsxU1EzWVswUlUpSEs9aWVEdHA7ZmQsS0soRUcPLS1duLs1XF4rTEkmQ0AxVlkyVVMfMzRAbGorTlAmQD8jOzsnP0BYs7kgNzkiOzooQ0IjOjokOj0fPDwVGhYfPj4lQD5Mf3tJendCcW0gNzgxVlZct7xEf34nQUElPD0pQkEoSUQoQkAvUU4fMi9JkJcXJiYlQUAeNDQiPDw+cXVEcm43XmIxU1A0XGEgODhVs7skOzhSrbQhNzZNpaUoRUcaJSVOnKUlPjwmQD5NmZ9KkpZBfoM1X2EoSUpDfoIiOzssSkcyVVJVr7csSEYgNjhOlJlBgodRnaIsSUY2Wl0gNTVWsLcrRkZHk5c5Z2lMm6ArQEAaHxpPpKQ3YGAnRkZOnbEvUE4sSkg3X2InQ0JVrbYeNTchOTtKl59SpKszV1keNjchOTo8cnEqRkMhOTskPT4eNDcjPDwnPz9csbErRUE0VlE7Y14mOjoxTUcdMDNLnaNKmJtYr7c8ZGA6dW1YsrsoRUM3XVovUFIpRkQnQkEmQUAxVFczVlQxU1EqSEspR0ZBb2pAbWk9aWUtTVAuT000WVYwUlUwUU8rS00sTEoiOz5btbxXsLZGeHQ7Z2M1W14rSUdbt79EdHA6Y18uTkwfNzlXrK00WVhmtr3BAAAAlnRSTlMAgIBmgGaAgICAgICAgICAgICAgICAZmaAgICAZmZmZgSAgIAagICAZmZmYERmW1FORz8VCwj+gICAgGZlZV9XPDYyLSkkFPDEkICAf3hlZGI8MzEqJiAb5tnT0KuMh4B5d3Rza2dmZmVcVUxHQj04NCQYExIQDfn59/b09Onf29ray8K9srGrmYp9dmJfWFNQTkVDQCPaSyJpAAADj0lEQVRIx42UZXPbQBRF16sVSxZYSgxNYnYx5UCZmZmZmZmZuWZ24mCZ/12V1OO6lmX3jD680Zujq5F2LvgPJhqv5hjcX728MMxbWLYZP3qEs5JxdkSg+c805urNf+PHLW9qruTM2IHQ6IHBe/9H/63Szexpjcvw6Xpj/N4AotALbWq+0p/+sQAUWX8Ibxo2DB+jU0aiAEKT0GHgvduf+dSdLjrnjhwYNhnH8fqjZYZ376QAZ7PCwEh8frr3UyIduVfYrFoxah/eWF9X3zizLGQSIiWf1WdfeKOzP9Qb6Y3kHxRWc6eM2j+5Dseahs8qNc40UxT0ud1WacvFxKfuSLoz1ZNcCIrS1Dq8oQEbfrJEOU4gKEk2t23rpi/dnYlId+Jzvif1sLhfM7WuYegQrNH7N2SZm0TIztmkLZeDwUSkM/3rYzjZl1FLvvSQhiFD64fPK4YssZklO2entl4PBoPvNacnGv3+OdSyA/xlVp3mYBMKX37UdtsSwm21+qRt1wac3mS4I/S5LxaLjgAlzMQwrGlwcr42mbb7SMlN2H1Wmdv07t2XVLjr+8dcT6Yl9PzfI4Jhgw85vdtksSyy2212QlpiFgnP5nfv810pLSkci/aV/fVx2OiBn7XbZDJZFlk5K8HZaIFh/Mzmn+HUx45cNhePJ2eUn5Ox4PQKzRhwCM7O+SWSJ1iZRbc7PuRy2WxHviW0DpSxFry0mAaxcoSNoWXtHHhYmYd3vn3Lfv3wtSsUOwX0vBqULBJB04IiEjTBkgGK3Pm4K5z9kMzHL1RywDGTxWVyuUWRYVhBcdAeClLUTnDwfKovE4pnnKASJ7Qkl5/wiwQh02ZBJnke7gHgWSgei2ZaQGWOWVyaI8oyQ4sOReQhTz/Rbh++FIvGNwADTrhcDEPQZke7YG5lIFTZp0Bj5fxYfCMwYs0jf7vZ7NCuxa2LKQqS08EfKWrsgLdL25R2h9CuOAQzTalobKGyNiwAxniXCg5RURa3tpppDw8LDli3rVoPjt/FiEKb0qYIIoXIkeU9aJREM4LSRnOsTME35T0IgEESxxCMh5RVCo3T9aABZ/dAXoVQ5Vluta4HjZiA8SSEkCTVOboeNGTiNJJSoaqSc3Q9aIzzIMWyJA/X6XuwWpIH8lCep+/BaknTEWLZCboerC6NgVBzdD1YnbEkcup6sBYrPboerM1aXQ/WRt+DtdH3oJ7a7/obwpvYUitTwYAAAAAASUVORK5CYII="
		}
	}
]);