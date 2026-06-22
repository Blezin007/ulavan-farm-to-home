import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Leaf, Sprout, ShieldCheck, Wheat, HandHeart, Truck, Heart, Phone, Mail, MapPin,
  Star, ShoppingBag, Search, Menu, ArrowRight, Check, Recycle, Sun, Droplets,
} from "lucide-react";
import heroFields from "@/assets/hero-fields.jpg";
import milletsFlatlay from "@/assets/millets-flatlay.jpg";
import farmerHands from "@/assets/farmer-hands.jpg";
import pKambu from "@/assets/p-kambu.jpg";
import pRagi from "@/assets/p-ragi.jpg";
import pMaize from "@/assets/p-maize.jpg";
import pKodo from "@/assets/p-kodo.jpg";
import pLittle from "@/assets/p-little.jpg";
import pFoxtail from "@/assets/p-foxtail.jpg";
import pBarnyard from "@/assets/p-barnyard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ulavan & Co — Traditional Grains. Natural Nutrition." },
      { name: "description", content: "Premium organic millets, grains and rice sourced from trusted Tamil Nadu farms. Farmer-first. Naturally processed. Delivered with care." },
      { property: "og:title", content: "Ulavan & Co — From Farmers to Families" },
      { property: "og:description", content: "Discover premium millets, grains, and rice sourced from trusted farms." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const products = [
  { name: "Pearl Millet", tamil: "கம்பு", img: pKambu, blurb: "Cooling summer grain, hearty and ancient.", benefits: ["High fiber", "Energy rich", "Aids digestion"] },
  { name: "Finger Millet", tamil: "ராகி", img: pRagi, blurb: "Calcium-dense staple of South Indian kitchens.", benefits: ["Rich in calcium", "Bone health", "Nutrient dense"] },
  { name: "Maize Rava", tamil: "மக்காரவை", img: pMaize, blurb: "Golden, versatile and naturally sweet.", benefits: ["Versatile", "Carbohydrate source", "Traditional recipes"] },
  { name: "Kodo Millet", tamil: "வரகரிசி", img: pKodo, blurb: "An antioxidant-rich heirloom millet.", benefits: ["Antioxidants", "High fiber", "Lifestyle choice"] },
  { name: "Little Millet", tamil: "சாமை", img: pLittle, blurb: "Delicate, easy-to-digest daily grain.", benefits: ["Easy digestion", "Nutrient rich", "Everyday meals"] },
  { name: "Foxtail Millet", tamil: "தினை", img: pFoxtail, blurb: "Protein-rich grain of ancient kitchens.", benefits: ["Protein rich", "Healthy diet", "Traditional"] },
  { name: "Barnyard Millet", tamil: "குதிரைவாளி", img: pBarnyard, blurb: "Low-calorie millet for mindful eating.", benefits: ["Low calorie", "High fiber", "Healthy eating"] },
];

const faqs = [
  { q: "Why should I choose millets?", a: "Millets are nutrient-dense ancient grains rich in fiber, minerals and protein. They support digestion, energy and balanced living — a thoughtful daily swap for refined grains." },
  { q: "Are your products organically sourced?", a: "We work directly with trusted farmers practicing natural cultivation. Every batch is quality-checked for purity before it reaches your kitchen." },
  { q: "How are products packaged?", a: "We use food-grade, moisture-resistant packaging that preserves freshness while minimising plastic where possible." },
  { q: "Do you ship across India?", a: "Yes — we deliver pan-India through trusted logistics partners with careful, traceable handling." },
  { q: "How should millets be stored?", a: "Store in an airtight container in a cool, dry place away from direct sunlight. For best flavour, use within six months of opening." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Categories />
      <FeaturedMillets />
      <WhyUs />
      <HealthBenefits />
      <Process />
      {/* <Testimonials /> */}
      <FAQ />
      {/* <Newsletter /> */}
      {/* <Contact /> */}
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <span className="grid place-items-center h-9 w-9 rounded-full bg-primary text-primary-foreground">
            <Sprout className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold tracking-tight">Ulavan <span className="text-gold">&amp;</span> Co</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">From Farmers to Families</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[["Story","#about"],["Categories","#categories"],["Millets","#millets"],["Process","#process"],["Contact","#contact"]].map(([l,h]) => (
            <a key={h} href={h} className="relative text-foreground/80 hover:text-primary transition-colors">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {/* <button className="hidden sm:grid place-items-center h-10 w-10 rounded-full hover:bg-accent transition-colors" aria-label="Search"><Search className="h-4 w-4" /></button>
          <button className="hidden sm:grid place-items-center h-10 w-10 rounded-full hover:bg-accent transition-colors" aria-label="Wishlist"><Heart className="h-4 w-4" /></button>
          <button className="grid place-items-center h-10 w-10 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition" aria-label="Cart"><ShoppingBag className="h-4 w-4" /></button> */}
          <button onClick={() => setOpen(v => !v)} className="md:hidden grid place-items-center h-10 w-10 rounded-full hover:bg-accent" aria-label="Menu"><Menu className="h-4 w-4" /></button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="container-x py-4 flex flex-col gap-3 text-sm">
            {[["Story","#about"],["Categories","#categories"],["Millets","#millets"],["Process","#process"],["Contact","#contact"]].map(([l,h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-2 border-b border-border/40">{l}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroFields} alt="Tamil farmer walking through millet fields at sunrise" width={1920} height={1280}
             className="h-full w-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/10 to-transparent" />
      </div>
      <div className="container-x min-h-[88vh] flex items-center py-24">
        <div className="max-w-2xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-primary">
            <Leaf className="h-3.5 w-3.5" /> Tamil Nadu • Naturally Sourced
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] text-foreground">
            Traditional Grains.<br />
            <span className="text-primary">Natural Nutrition.</span><br />
            <span className="italic font-normal text-earth">From Farmers to Families.</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/75 max-w-xl">
            Discover premium millets, grains, and rice sourced from trusted farms — delivered with purity, heritage, and care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#millets" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-primary/90 transition shadow-soft">
              Shop Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#categories" className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 backdrop-blur px-6 py-3.5 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition">
              Explore Products
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[["120+","Farmer Partners"],["25+","Heritage Grains"],["100%","Quality Checked"]].map(([n,l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-primary">{n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = ["Pearl Millet · Kambu", "Finger Millet · Ragi", "Foxtail · Thinai", "Kodo · Varagu", "Little Millet · Saamai", "Barnyard · Kudhiraivaali", "Maize Rava · Makkaravai"];
  return (
    <div className="border-y border-border/60 bg-primary text-primary-foreground py-4 overflow-hidden">
      <div className="flex gap-10 whitespace-nowrap animate-[float-slow_8s_linear_infinite] [animation-name:none]">
        <div className="flex gap-10 animate-marquee">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="text-xs uppercase tracking-[0.22em] flex items-center gap-10">
              {t} <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}} .animate-marquee{animation:marquee 30s linear infinite}`}</style>
    </div>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const items = [
    { icon: Sprout, t: "Natural Sourcing", d: "Carefully selected from trusted farms across Tamil Nadu." },
    { icon: Wheat,  t: "Traditional Grains", d: "Heritage millets and rice varieties of South India." },
    { icon: ShieldCheck, t: "Quality Assurance", d: "Every batch is hand-checked for purity and freshness." },
    { icon: Recycle, t: "Sustainable Farming", d: "Low-impact cultivation that honours the land." },
    { icon: HandHeart, t: "Farmer-First", d: "Fair partnerships that keep farming families thriving." },
  ];
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
            <img src={farmerHands} alt="Farmer's hands holding millet grains" width={1200} height={1400} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:flex items-center gap-3 bg-background border border-border rounded-2xl px-5 py-4 shadow-soft animate-float-slow">
            <span className="grid place-items-center h-10 w-10 rounded-full bg-gold/20 text-earth"><Leaf className="h-5 w-5" /></span>
            <div className="text-sm">
              <div className="font-semibold">Trusted by 120+ farms</div>
              <div className="text-muted-foreground text-xs">Direct partnerships</div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">Our Story</div>
          <h2 className="mt-3 text-4xl md:text-5xl">Our Farming <em className="text-primary not-italic">Heritage</em></h2>
          <p className="mt-6 text-foreground/75 text-lg leading-relaxed">
            Ulavan &amp; Co brings together traditional farming wisdom and modern healthy living. We source carefully selected grains, millets and rice varieties from trusted farmers — ensuring purity, nutrition and authenticity in every product.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {items.map(({ icon: Icon, t, d }) => (
              <div key={t} className="group flex gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-soft transition">
                <span className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="font-semibold">{t}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CATEGORIES ---------- */
function Categories() {
  const cats = [
    { t: "Rice", d: "Traditional and nutritious rice varieties sourced from trusted farms.", img: pKodo, accent: "from-earth/40" },
    { t: "Grains", d: "Wholesome grains for everyday healthy cooking.", img: milletsFlatlay, accent: "from-primary/40" },
    { t: "Millets", d: "Ancient superfoods packed with nutrition and benefits.", img: pFoxtail, accent: "from-gold/50" },
  ];
  return (
    <section id="categories" className="py-24 md:py-32 bg-secondary/50">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">Shop by Category</div>
            <h2 className="mt-3 text-4xl md:text-5xl max-w-2xl">A pantry rooted in <em className="text-primary not-italic">tradition</em></h2>
          </div>
          <a href="#millets" className="text-sm text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">View all <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cats.map((c, i) => (
            <a key={c.t} href="#millets" className="group relative overflow-hidden rounded-3xl aspect-[4/5] block">
              <img src={c.img} alt={c.t} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className={`absolute inset-0 bg-gradient-to-t ${c.accent} via-transparent to-transparent`} />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-background">
                <div className="text-[10px] uppercase tracking-[0.22em] opacity-70">0{i+1} — Collection</div>
                <h3 className="font-display text-3xl mt-1 text-background">{c.t}</h3>
                <p className="text-sm mt-2 opacity-80 max-w-xs">{c.d}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium border-b border-background/60 pb-1 group-hover:border-gold group-hover:text-gold transition">
                  Explore <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FEATURED ---------- */
function FeaturedMillets() {
  return (
    <section id="millets" className="py-24 md:py-32">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">Featured Collection</div>
          <h2 className="mt-3 text-4xl md:text-5xl">The <em className="text-primary not-italic">Millet</em> Library</h2>
          <p className="mt-4 text-foreground/70">Seven ancient grains — each with its own story, flavour and quiet superpower.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.name} className="group rounded-3xl border border-border bg-card overflow-hidden hover:shadow-elevated hover:-translate-y-1 transition-all duration-500">
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img src={p.img} alt={`${p.name} (${p.tamil})`} loading="lazy" width={800} height={800}
                     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <button className="absolute top-3 right-3 grid place-items-center h-9 w-9 rounded-full bg-background/90 backdrop-blur hover:bg-background transition" aria-label="Wishlist">
                  <Heart className="h-4 w-4" />
                </button>
                <span className="absolute top-3 left-3 rounded-full bg-primary/90 text-primary-foreground text-[10px] uppercase tracking-wider px-2.5 py-1">Organic</span>
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl leading-tight">{p.name}</h3>
                  <span className="text-xs text-earth italic">({p.tamil})</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.benefits.map(b => (
                    <li key={b} className="text-[11px] inline-flex items-center gap-1 rounded-full bg-secondary text-secondary-foreground px-2.5 py-1">
                      <Check className="h-3 w-3 text-primary" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between">
                  <button className="text-sm font-medium text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
                    View Details <ArrowRight className="h-4 w-4" />
                  </button>
                  <button className="grid place-items-center h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-earth transition" aria-label="Add to cart">
                    <ShoppingBag className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
function WhyUs() {
  const features = [
    { icon: ShieldCheck, t: "100% Quality Checked" },
    { icon: Sprout, t: "Direct Farm Sourcing" },
    { icon: Leaf, t: "Naturally Processed" },
    { icon: Wheat, t: "Nutrient Rich Products" },
    { icon: Recycle, t: "Sustainable Agriculture" },
    { icon: HandHeart, t: "Traditional Farming Values" },
  ];
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 grain-texture opacity-30" />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">Why Ulavan &amp; Co</div>
          <h2 className="mt-3 text-4xl md:text-5xl text-primary-foreground">Pure intention.<br /><em className="not-italic text-gold">Honest craft.</em></h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/10 rounded-3xl overflow-hidden">
          {features.map(({ icon: Icon, t }) => (
            <div key={t} className="bg-primary p-8 hover:bg-earth transition-colors group">
              <span className="grid place-items-center h-12 w-12 rounded-full bg-gold/20 text-gold group-hover:bg-gold group-hover:text-earth transition">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl text-primary-foreground">{t}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- HEALTH ---------- */
function HealthBenefits() {
  const stats = [
    { n: "8x", l: "More fibre than rice", icon: Wheat },
    { n: "3x", l: "More calcium (Ragi)", icon: ShieldCheck },
    { n: "Low", l: "Glycemic Index", icon: Droplets },
    { n: "Rich", l: "In essential minerals", icon: Sun },
  ];
  const topics = [
    "Better Digestion", "High Fiber Nutrition", "Rich in Minerals",
    "Diabetic Friendly", "Weight Management", "Heart Healthy",
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">Health Benefits</div>
          <h2 className="mt-3 text-4xl md:text-5xl">Small grain.<br /><em className="text-primary not-italic">Big nourishment.</em></h2>
          <p className="mt-6 text-foreground/75">Millets have nourished generations across South India. Modern nutrition science is rediscovering what our grandmothers always knew.</p>
          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map(({ n, l, icon: Icon }) => (
              <div key={l} className="rounded-2xl border border-border p-5 hover:border-gold/60 hover:bg-gold/5 transition">
                <Icon className="h-5 w-5 text-gold" />
                <div className="font-display text-4xl mt-3 text-primary">{n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {topics.map((t, i) => (
            <div key={t} className={`rounded-2xl p-6 border border-border ${i % 3 === 0 ? "bg-gold/10" : i % 3 === 1 ? "bg-primary/5" : "bg-earth/5"} hover:-translate-y-1 transition-transform`}>
              <div className="grid place-items-center h-10 w-10 rounded-full bg-background border border-border">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div className="font-display text-xl mt-4">{t}</div>
              <div className="text-xs text-muted-foreground mt-1">Supported by ancient grains</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
function Process() {
  const steps = [
    "Trusted Farmers", "Careful Harvesting", "Quality Selection",
    "Natural Processing", "Safe Packaging", "Delivery to Your Home",
  ];
  return (
    <section id="process" className="py-24 md:py-32 bg-secondary/40">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">Farm to Family</div>
          <h2 className="mt-3 text-4xl md:text-5xl">Every grain, <em className="text-primary not-italic">traceable</em>.</h2>
        </div>
        <ol className="relative grid md:grid-cols-3 gap-8">
          <div className="hidden md:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((s, i) => (
            <li key={s} className="relative bg-background border border-border rounded-2xl p-6 hover:shadow-soft transition">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center h-14 w-14 rounded-full bg-primary text-primary-foreground font-display text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Truck className="h-5 w-5 text-gold opacity-60 ml-auto" />
              </div>
              <h3 className="mt-5 font-display text-2xl">{s}</h3>
              <p className="mt-2 text-sm text-muted-foreground">A considered step in our farm-to-family journey.</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    { n: "Priya R.", c: "Chennai", t: "Switching to Ulavan & Co's ragi has been a quiet revolution at home. Pure, fresh and beautifully packaged." },
    { n: "Karthik M.", c: "Coimbatore", t: "Finally, traceable millets I can trust for my family. The kambu flour is exactly like what my grandmother used." },
    { n: "Lakshmi V.", c: "Madurai", t: "Their thinai and saamai are exceptional. You can taste the care from farm to kitchen." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">Customer Stories</div>
            <h2 className="mt-3 text-4xl md:text-5xl max-w-xl">Loved in <em className="text-primary not-italic">kitchens</em> across Tamil Nadu</h2>
          </div>
          <div className="flex items-center gap-1 text-gold">
            {[...Array(5)].map((_,i) => <Star key={i} className="h-5 w-5 fill-gold" />)}
            <span className="ml-2 text-sm text-foreground/70">4.9 / 5 from 2,400+ families</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((r) => (
            <figure key={r.n} className="rounded-3xl border border-border bg-card p-7 hover:shadow-soft transition">
              <div className="flex items-center gap-1 text-gold">{[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-gold"/>)}</div>
              <blockquote className="mt-5 font-display text-xl leading-snug">“{r.t}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid place-items-center h-11 w-11 rounded-full bg-primary/10 text-primary font-display">{r.n[0]}</span>
                <div>
                  <div className="font-medium text-sm">{r.n}</div>
                  <div className="text-xs text-muted-foreground">{r.c}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-16">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">Questions</div>
          <h2 className="mt-3 text-4xl md:text-5xl">Good things,<br /><em className="text-primary not-italic">clearly answered.</em></h2>
          <p className="mt-6 text-muted-foreground">Still curious? Reach out — we love talking grains.</p>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-start justify-between gap-6 py-6 text-left group">
                  <span className="font-display text-xl group-hover:text-primary transition">{f.q}</span>
                  <span className={`mt-1 grid place-items-center h-8 w-8 rounded-full border border-border shrink-0 transition ${isOpen ? "bg-primary text-primary-foreground rotate-45 border-primary" : ""}`}>+</span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden text-foreground/70 pr-12">{f.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- NEWSLETTER ---------- */
function Newsletter() {
  return (
    <section className="py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-earth text-earth-foreground p-10 md:p-16">
          <div className="absolute inset-0 grain-texture opacity-20" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">Newsletter</div>
              <h2 className="mt-3 text-4xl md:text-5xl text-earth-foreground">Stay Connected with <em className="not-italic text-gold">Healthy Living</em></h2>
              <p className="mt-4 text-earth-foreground/80 max-w-md">Recipes, harvest stories and seasonal millet drops — straight to your inbox.</p>
            </div>
            <form className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
              <input type="text" required placeholder="Your name" className="w-full rounded-full bg-background/10 border border-background/30 text-earth-foreground placeholder:text-earth-foreground/60 px-5 py-4 outline-none focus:border-gold transition" />
              <input type="email" required placeholder="Your email" className="w-full rounded-full bg-background/10 border border-background/30 text-earth-foreground placeholder:text-earth-foreground/60 px-5 py-4 outline-none focus:border-gold transition" />
              <button className="rounded-full bg-gold text-gold-foreground font-medium px-6 py-4 hover:bg-background hover:text-earth transition">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-x grid lg:grid-cols-2 gap-12">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">Contact</div>
          <h2 className="mt-3 text-4xl md:text-5xl">Let's talk <em className="text-primary not-italic">grains</em>.</h2>
          <p className="mt-4 text-foreground/70 max-w-md">Bulk orders, partnerships, or simply curious — we'd love to hear from you.</p>
          <ul className="mt-10 space-y-5">
            {[
              { icon: Phone, l: "Phone", v: "+91 98765 43210" },
              { icon: Mail, l: "Email", v: "hello@ulavanandco.com" },
              { icon: MapPin, l: "Address", v: "Madurai, Tamil Nadu, India — 625001" },
            ].map(({ icon: Icon, l, v }) => (
              <li key={l} className="flex items-start gap-4">
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary shrink-0"><Icon className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
                  <div className="font-medium">{v}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 aspect-[16/9] rounded-2xl border border-border bg-secondary grid place-items-center text-muted-foreground text-sm">
            <div className="text-center">
              <MapPin className="h-6 w-6 mx-auto mb-2 text-primary" />
              Google Maps location
            </div>
          </div>
        </div>
        <form className="rounded-3xl border border-border bg-card p-8 md:p-10 grid gap-4" onSubmit={(e) => e.preventDefault()}>
          <h3 className="font-display text-2xl">Send a message</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary" placeholder="Name" />
            <input className="rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary" placeholder="Email" type="email" />
          </div>
          <input className="rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary" placeholder="Subject" />
          <textarea rows={6} className="rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary resize-none" placeholder="Your message" />
          <button className="mt-2 rounded-full bg-primary text-primary-foreground py-4 font-medium hover:bg-earth transition inline-flex items-center justify-center gap-2">
            Send Message <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  const cols = [
    { t: "About", l: ["Our Story", "Farming Heritage", "Sustainability", "Press"] },
    { t: "Categories", l: ["Rice", "Grains", "Millets", "Gift Boxes"] },
    { t: "Quick Links", l: ["Shop", "Recipes", "Wholesale", "Blog"] },
    { t: "Support", l: ["FAQ", "Shipping", "Returns", "Contact"] },
  ];
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-28 md:pb-16 relative overflow-hidden">
      <div className="absolute inset-0 grain-texture opacity-20" />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-[1.5fr_repeat(4,1fr)] gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid place-items-center h-10 w-10 rounded-full bg-gold text-earth"><Sprout className="h-5 w-5" /></span>
              <div className="font-display text-2xl">Ulavan <span className="text-gold">&amp;</span> Co</div>
            </div>
            <p className="mt-5 text-primary-foreground/75 max-w-sm text-sm">
              Tamil Nadu's heritage millets, rice and grains — sourced with intention, delivered with care.
            </p>
            <div className="mt-6 flex gap-2">
              {["IG","FB","YT","X"].map(s => (
                <a key={s} href="#" className="grid place-items-center h-10 w-10 rounded-full border border-primary-foreground/30 hover:bg-gold hover:text-earth hover:border-gold transition text-xs font-semibold">{s}</a>
              ))}
            </div>
          </div>
          {cols.map(c => (
            <div key={c.t}>
              <div className="font-display text-gold text-lg">{c.t}</div>
              <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
                {c.l.map(l => <li key={l}><a href="#" className="hover:text-gold transition">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-wrap items-center justify-between gap-4 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Ulavan &amp; Co. Crafted in Tamil Nadu.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- MOBILE BOTTOM NAV ---------- */
function MobileBottomNav() {
  const items = [
    { icon: Sprout, l: "Home", h: "#top" },
    { icon: Wheat, l: "Shop", h: "#millets" },
    { icon: Search, l: "Search", h: "#categories" },
    { icon: Heart, l: "Wishlist", h: "#about" },
    { icon: ShoppingBag, l: "Cart", h: "#contact" },
  ];
  return (
    <nav className="md:hidden fixed bottom-3 inset-x-3 z-40 rounded-full bg-primary text-primary-foreground shadow-elevated">
      <ul className="grid grid-cols-5">
        {items.map(({ icon: Icon, l, h }) => (
          <li key={l}>
            <a href={h} className="flex flex-col items-center gap-0.5 py-3 text-[10px] uppercase tracking-wider opacity-80 hover:opacity-100">
              <Icon className="h-5 w-5" />
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
