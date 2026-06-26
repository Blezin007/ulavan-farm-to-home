import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as ShoppingBag, c as Recycle, d as Heart, f as HandHeart, h as ArrowRight, i as Sprout, l as Menu, m as Check, n as Truck, o as ShieldCheck, p as Droplets, r as Sun, s as Search, t as Wheat, u as Leaf } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-pINFpO8a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_fields_default = "/assets/hero-fields-BV62Gua7.jpg";
var millets_flatlay_default = "/assets/millets-flatlay-ClctUHV2.jpg";
var farmer_hands_default = "/assets/farmer-hands-D1nd7Vk1.jpg";
var p_kambu_default = "/assets/p-kambu-BpqujrIv.jpg";
var p_ragi_default = "/assets/p-ragi-DIgZjOOn.jpg";
var p_maize_default = "/assets/p-maize-B6hYOKJX.jpg";
var p_kodo_default = "/assets/p-kodo-DiQbVDCQ.jpg";
var p_little_default = "/assets/p-little-C2gch15A.jpg";
var p_foxtail_default = "/assets/p-foxtail-3mNCd2qt.jpg";
var products = [
	{
		name: "Pearl Millet",
		tamil: "கம்பு",
		img: p_kambu_default,
		blurb: "Cooling summer grain, hearty and ancient.",
		benefits: [
			"High fiber",
			"Energy rich",
			"Aids digestion"
		]
	},
	{
		name: "Finger Millet",
		tamil: "ராகி",
		img: p_ragi_default,
		blurb: "Calcium-dense staple of South Indian kitchens.",
		benefits: [
			"Rich in calcium",
			"Bone health",
			"Nutrient dense"
		]
	},
	{
		name: "Maize Rava",
		tamil: "மக்காரவை",
		img: p_maize_default,
		blurb: "Golden, versatile and naturally sweet.",
		benefits: [
			"Versatile",
			"Carbohydrate source",
			"Traditional recipes"
		]
	},
	{
		name: "Kodo Millet",
		tamil: "வரகரிசி",
		img: p_kodo_default,
		blurb: "An antioxidant-rich heirloom millet.",
		benefits: [
			"Antioxidants",
			"High fiber",
			"Lifestyle choice"
		]
	},
	{
		name: "Little Millet",
		tamil: "சாமை",
		img: p_little_default,
		blurb: "Delicate, easy-to-digest daily grain.",
		benefits: [
			"Easy digestion",
			"Nutrient rich",
			"Everyday meals"
		]
	},
	{
		name: "Foxtail Millet",
		tamil: "தினை",
		img: p_foxtail_default,
		blurb: "Protein-rich grain of ancient kitchens.",
		benefits: [
			"Protein rich",
			"Healthy diet",
			"Traditional"
		]
	},
	{
		name: "Barnyard Millet",
		tamil: "குதிரைவாளி",
		img: "/assets/p-barnyard-DAXEeUDs.jpg",
		blurb: "Low-calorie millet for mindful eating.",
		benefits: [
			"Low calorie",
			"High fiber",
			"Healthy eating"
		]
	}
];
var faqs = [
	{
		q: "Why should I choose millets?",
		a: "Millets are nutrient-dense ancient grains rich in fiber, minerals and protein. They support digestion, energy and balanced living — a thoughtful daily swap for refined grains."
	},
	{
		q: "Are your products organically sourced?",
		a: "We work directly with trusted farmers practicing natural cultivation. Every batch is quality-checked for purity before it reaches your kitchen."
	},
	{
		q: "How are products packaged?",
		a: "We use food-grade, moisture-resistant packaging that preserves freshness while minimising plastic where possible."
	},
	{
		q: "Do you ship across India?",
		a: "Yes — we deliver pan-India through trusted logistics partners with careful, traceable handling."
	},
	{
		q: "How should millets be stored?",
		a: "Store in an airtight container in a cool, dry place away from direct sunlight. For best flavour, use within six months of opening."
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Categories, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedMillets, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HealthBenefits, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBottomNav, {})
		]
	});
}
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex items-center justify-between h-16 md:h-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid place-items-center h-9 w-9 rounded-full bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display text-lg font-semibold tracking-tight",
							children: [
								"Ulavan ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "&"
								}),
								" Co"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
							children: "From Farmers to Families"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-8 text-sm font-medium",
					children: [
						["Story", "#about"],
						["Categories", "#categories"],
						["Millets", "#millets"],
						["Process", "#process"],
						["Contact", "#contact"]
					].map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: h,
						className: "relative text-foreground/80 hover:text-primary transition-colors",
						children: l
					}, h))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen((v) => !v),
						className: "md:hidden grid place-items-center h-10 w-10 rounded-full hover:bg-accent",
						"aria-label": "Menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
					})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden border-t border-border/60 bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x py-4 flex flex-col gap-3 text-sm",
				children: [
					["Story", "#about"],
					["Categories", "#categories"],
					["Millets", "#millets"],
					["Process", "#process"],
					["Contact", "#contact"]
				].map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: h,
					onClick: () => setOpen(false),
					className: "py-2 border-b border-border/40",
					children: l
				}, h))
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 -z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_fields_default,
					alt: "Tamil farmer walking through millet fields at sunrise",
					width: 1920,
					height: 1280,
					className: "h-full w-full object-cover animate-ken-burns"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background/70 via-background/10 to-transparent" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x min-h-[88vh] flex items-center py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl animate-fade-up",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-3.5 w-3.5" }), " Tamil Nadu • Naturally Sourced"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-display text-5xl md:text-7xl leading-[1.02] text-foreground",
						children: [
							"Traditional Grains.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Natural Nutrition."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic font-normal text-earth",
								children: "From Farmers to Families."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg text-foreground/75 max-w-xl",
						children: "Discover premium millets, grains, and rice sourced from trusted farms — delivered with purity, heritage, and care."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#millets",
							className: "group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-primary/90 transition shadow-soft",
							children: ["Shop Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#categories",
							className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 backdrop-blur px-6 py-3.5 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition",
							children: "Explore Products"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid grid-cols-3 gap-6 max-w-md",
						children: [
							["120+", "Farmer Partners"],
							["25+", "Heritage Grains"],
							["100%", "Quality Checked"]
						].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl text-primary",
							children: n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wider text-muted-foreground mt-1",
							children: l
						})] }, l))
					})
				]
			})
		})]
	});
}
function Marquee() {
	const items = [
		"Pearl Millet · Kambu",
		"Finger Millet · Ragi",
		"Foxtail · Thinai",
		"Kodo · Varagu",
		"Little Millet · Saamai",
		"Barnyard · Kudhiraivaali",
		"Maize Rava · Makkaravai"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-y border-border/60 bg-primary text-primary-foreground py-4 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-10 whitespace-nowrap animate-[float-slow_8s_linear_infinite] [animation-name:none]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-10 animate-marquee",
				children: [...items, ...items].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs uppercase tracking-[0.22em] flex items-center gap-10",
					children: [
						t,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: "✦"
						})
					]
				}, i))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}} .animate-marquee{animation:marquee 30s linear infinite}` })]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-24 md:py-32 relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid lg:grid-cols-2 gap-16 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: farmer_hands_default,
						alt: "Farmer's hands holding millet grains",
						width: 1200,
						height: 1400,
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute -bottom-6 -right-6 hidden md:flex items-center gap-3 bg-background border border-border rounded-2xl px-5 py-4 shadow-soft animate-float-slow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid place-items-center h-10 w-10 rounded-full bg-gold/20 text-earth",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold",
							children: "Trusted by 120+ farms"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-muted-foreground text-xs",
							children: "Direct partnerships"
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.22em] text-gold font-semibold",
					children: "Our Story"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 text-4xl md:text-5xl",
					children: ["Our Farming ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "text-primary not-italic",
						children: "Heritage"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-foreground/75 text-lg leading-relaxed",
					children: "Ulavan & Co brings together traditional farming wisdom and modern healthy living. We source carefully selected grains, millets and rice varieties from trusted farmers — ensuring purity, nutrition and authenticity in every product."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid sm:grid-cols-2 gap-4",
					children: [
						{
							icon: Sprout,
							t: "Natural Sourcing",
							d: "Carefully selected from trusted farms across Tamil Nadu."
						},
						{
							icon: Wheat,
							t: "Traditional Grains",
							d: "Heritage millets and rice varieties of South India."
						},
						{
							icon: ShieldCheck,
							t: "Quality Assurance",
							d: "Every batch is hand-checked for purity and freshness."
						},
						{
							icon: Recycle,
							t: "Sustainable Farming",
							d: "Low-impact cultivation that honours the land."
						},
						{
							icon: HandHeart,
							t: "Farmer-First",
							d: "Fair partnerships that keep farming families thriving."
						}
					].map(({ icon: Icon, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-soft transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold",
								children: t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-muted-foreground mt-0.5",
								children: d
							})]
						})]
					}, t))
				})
			] })]
		})
	});
}
function Categories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "categories",
		className: "py-24 md:py-32 bg-secondary/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6 mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.22em] text-gold font-semibold",
					children: "Shop by Category"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 text-4xl md:text-5xl max-w-2xl",
					children: ["A pantry rooted in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "text-primary not-italic",
						children: "tradition"
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#millets",
					className: "text-sm text-primary inline-flex items-center gap-1 hover:gap-2 transition-all",
					children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-3 gap-6",
				children: [
					{
						t: "Rice",
						d: "Traditional and nutritious rice varieties sourced from trusted farms.",
						img: p_kodo_default,
						accent: "from-earth/40"
					},
					{
						t: "Grains",
						d: "Wholesome grains for everyday healthy cooking.",
						img: millets_flatlay_default,
						accent: "from-primary/40"
					},
					{
						t: "Millets",
						d: "Ancient superfoods packed with nutrition and benefits.",
						img: p_foxtail_default,
						accent: "from-gold/50"
					}
				].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#millets",
					className: "group relative overflow-hidden rounded-3xl aspect-[4/5] block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.img,
							alt: c.t,
							className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110",
							loading: "lazy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 bg-gradient-to-t ${c.accent} via-transparent to-transparent` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 p-7 text-background",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] uppercase tracking-[0.22em] opacity-70",
									children: [
										"0",
										i + 1,
										" — Collection"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-3xl mt-1 text-background",
									children: c.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm mt-2 opacity-80 max-w-xs",
									children: c.d
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 inline-flex items-center gap-2 text-sm font-medium border-b border-background/60 pb-1 group-hover:border-gold group-hover:text-gold transition",
									children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							]
						})
					]
				}, c.t))
			})]
		})
	});
}
function FeaturedMillets() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "millets",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.22em] text-gold font-semibold",
						children: "Featured Collection"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 text-4xl md:text-5xl",
						children: [
							"The ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-primary not-italic",
								children: "Millet"
							}),
							" Library"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-foreground/70",
						children: "Seven ancient grains — each with its own story, flavour and quiet superpower."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
				children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group rounded-3xl border border-border bg-card overflow-hidden hover:shadow-elevated hover:-translate-y-1 transition-all duration-500",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square overflow-hidden bg-secondary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: `${p.name} (${p.tamil})`,
								loading: "lazy",
								width: 800,
								height: 800,
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "absolute top-3 right-3 grid place-items-center h-9 w-9 rounded-full bg-background/90 backdrop-blur hover:bg-background transition",
								"aria-label": "Wishlist",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-3 left-3 rounded-full bg-primary/90 text-primary-foreground text-[10px] uppercase tracking-wider px-2.5 py-1",
								children: "Organic"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl leading-tight",
									children: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-earth italic",
									children: [
										"(",
										p.tamil,
										")"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground line-clamp-2",
								children: p.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 flex flex-wrap gap-1.5",
								children: p.benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "text-[11px] inline-flex items-center gap-1 rounded-full bg-secondary text-secondary-foreground px-2.5 py-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-primary" }),
										" ",
										b
									]
								}, b))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "text-sm font-medium text-primary inline-flex items-center gap-1 hover:gap-2 transition-all",
									children: ["View Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "grid place-items-center h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-earth transition",
									"aria-label": "Add to cart",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" })
								})]
							})
						]
					})]
				}, p.name))
			})]
		})
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grain-texture opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.22em] text-gold font-semibold",
					children: "Why Ulavan & Co"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 text-4xl md:text-5xl text-primary-foreground",
					children: [
						"Pure intention.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "not-italic text-gold",
							children: "Honest craft."
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/10 rounded-3xl overflow-hidden",
				children: [
					{
						icon: ShieldCheck,
						t: "100% Quality Checked"
					},
					{
						icon: Sprout,
						t: "Direct Farm Sourcing"
					},
					{
						icon: Leaf,
						t: "Naturally Processed"
					},
					{
						icon: Wheat,
						t: "Nutrient Rich Products"
					},
					{
						icon: Recycle,
						t: "Sustainable Agriculture"
					},
					{
						icon: HandHeart,
						t: "Traditional Farming Values"
					}
				].map(({ icon: Icon, t }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-primary p-8 hover:bg-earth transition-colors group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid place-items-center h-12 w-12 rounded-full bg-gold/20 text-gold group-hover:bg-gold group-hover:text-earth transition",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 font-display text-2xl text-primary-foreground",
						children: t
					})]
				}, t))
			})]
		})]
	});
}
function HealthBenefits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid lg:grid-cols-2 gap-16 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.22em] text-gold font-semibold",
					children: "Health Benefits"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 text-4xl md:text-5xl",
					children: [
						"Small grain.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-primary not-italic",
							children: "Big nourishment."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-foreground/75",
					children: "Millets have nourished generations across South India. Modern nutrition science is rediscovering what our grandmothers always knew."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-2 gap-4",
					children: [
						{
							n: "8x",
							l: "More fibre than rice",
							icon: Wheat
						},
						{
							n: "3x",
							l: "More calcium (Ragi)",
							icon: ShieldCheck
						},
						{
							n: "Low",
							l: "Glycemic Index",
							icon: Droplets
						},
						{
							n: "Rich",
							l: "In essential minerals",
							icon: Sun
						}
					].map(({ n, l, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border p-5 hover:border-gold/60 hover:bg-gold/5 transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-4xl mt-3 text-primary",
								children: n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-wider text-muted-foreground mt-1",
								children: l
							})
						]
					}, l))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [
					"Better Digestion",
					"High Fiber Nutrition",
					"Rich in Minerals",
					"Diabetic Friendly",
					"Weight Management",
					"Heart Healthy"
				].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `rounded-2xl p-6 border border-border ${i % 3 === 0 ? "bg-gold/10" : i % 3 === 1 ? "bg-primary/5" : "bg-earth/5"} hover:-translate-y-1 transition-transform`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid place-items-center h-10 w-10 rounded-full bg-background border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5 text-primary" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-xl mt-4",
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground mt-1",
							children: "Supported by ancient grains"
						})
					]
				}, t))
			})]
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "py-24 md:py-32 bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.22em] text-gold font-semibold",
					children: "Farm to Family"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 text-4xl md:text-5xl",
					children: [
						"Every grain, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-primary not-italic",
							children: "traceable"
						}),
						"."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "relative grid md:grid-cols-3 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" }), [
					"Trusted Farmers",
					"Careful Harvesting",
					"Quality Selection",
					"Natural Processing",
					"Safe Packaging",
					"Delivery to Your Home"
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative bg-background border border-border rounded-2xl p-6 hover:shadow-soft transition",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid place-items-center h-14 w-14 rounded-full bg-primary text-primary-foreground font-display text-xl",
								children: String(i + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-5 w-5 text-gold opacity-60 ml-auto" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-2xl",
							children: s
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "A considered step in our farm-to-family journey."
						})
					]
				}, s))]
			})]
		})
	});
}
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32 bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid lg:grid-cols-[1fr_1.4fr] gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.22em] text-gold font-semibold",
					children: "Questions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 text-4xl md:text-5xl",
					children: [
						"Good things,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-primary not-italic",
							children: "clearly answered."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-muted-foreground",
					children: "Still curious? Reach out — we love talking grains."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-border border-y border-border",
				children: faqs.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(isOpen ? null : i),
						className: "w-full flex items-start justify-between gap-6 py-6 text-left group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl group-hover:text-primary transition",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `mt-1 grid place-items-center h-8 w-8 rounded-full border border-border shrink-0 transition ${isOpen ? "bg-primary text-primary-foreground rotate-45 border-primary" : ""}`,
							children: "+"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden text-foreground/70 pr-12",
							children: f.a
						})
					})] }, f.q);
				})
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-primary text-primary-foreground pt-20 pb-28 md:pb-16 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grain-texture opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-[1.5fr_repeat(4,1fr)] gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid place-items-center h-10 w-10 rounded-full bg-gold text-earth",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display text-2xl",
							children: [
								"Ulavan ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "&"
								}),
								" Co"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-primary-foreground/75 max-w-sm text-sm",
						children: "Tamil Nadu's heritage millets, rice and grains — sourced with intention, delivered with care."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex gap-2",
						children: [
							"IG",
							"FB",
							"YT",
							"X"
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "grid place-items-center h-10 w-10 rounded-full border border-primary-foreground/30 hover:bg-gold hover:text-earth hover:border-gold transition text-xs font-semibold",
							children: s
						}, s))
					})
				] }), [
					{
						t: "About",
						l: [
							"Our Story",
							"Farming Heritage",
							"Sustainability",
							"Press"
						]
					},
					{
						t: "Categories",
						l: [
							"Rice",
							"Grains",
							"Millets",
							"Gift Boxes"
						]
					},
					{
						t: "Quick Links",
						l: [
							"Shop",
							"Recipes",
							"Wholesale",
							"Blog"
						]
					},
					{
						t: "Support",
						l: [
							"FAQ",
							"Shipping",
							"Returns",
							"Contact"
						]
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-gold text-lg",
					children: c.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2.5 text-sm text-primary-foreground/75",
					children: c.l.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-gold transition",
						children: l
					}) }, l))
				})] }, c.t))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 pt-8 border-t border-primary-foreground/20 flex flex-wrap items-center justify-between gap-4 text-xs text-primary-foreground/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Ulavan & Co. Crafted in Tamil Nadu."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-gold",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-gold",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-gold",
							children: "Shipping"
						})
					]
				})]
			})]
		})]
	});
}
function MobileBottomNav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "md:hidden fixed bottom-3 inset-x-3 z-40 rounded-full bg-primary text-primary-foreground shadow-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid grid-cols-5",
			children: [
				{
					icon: Sprout,
					l: "Home",
					h: "#top"
				},
				{
					icon: Wheat,
					l: "Shop",
					h: "#millets"
				},
				{
					icon: Search,
					l: "Search",
					h: "#categories"
				},
				{
					icon: Heart,
					l: "Wishlist",
					h: "#about"
				},
				{
					icon: ShoppingBag,
					l: "Cart",
					h: "#contact"
				}
			].map(({ icon: Icon, l, h }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: h,
				className: "flex flex-col items-center gap-0.5 py-3 text-[10px] uppercase tracking-wider opacity-80 hover:opacity-100",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" }), l]
			}) }, l))
		})
	});
}
//#endregion
export { Home as component };
