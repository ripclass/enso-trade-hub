import { useEffect, useMemo, useRef, useState } from "react";

const STYLE_ID = "enso-bento-animations";

type Theme = "dark" | "light";

type Product = {
  name: string;
  badge: string;
  title: string;
  description: string;
  statLabel: string;
  statValue: string;
  href?: string;
};

const products: Product[] = [
  {
    name: "TRDR Hub",
    badge: "Live",
    title: "Trade Compliance Platform",
    description:
      "15 AI-powered tools for document validation, sanctions screening, HS code classification, container tracking, and more. Built for SME exporters, importers, and freight forwarders. LCopilot validates Letters of Credit in 47 seconds against 3,500+ rules.",
    statLabel: "Validation",
    statValue: "47s",
    href: "https://trdrhub.com",
  },
  {
    name: "RulHub",
    badge: "Live",
    title: "Global Rules Engine API",
    description:
      "The infrastructure layer. 4,000+ curated trade rulesets covering ICC standards, SWIFT messaging, ISO 20022, FTA agreements, sanctions frameworks, and country-specific regulations across 160 countries. Available via API for banks, fintechs, and compliance platforms.",
    statLabel: "Coverage",
    statValue: "160 countries",
    href: "https://rulhub.com",
  },
  {
    name: "RuleGPT",
    badge: "Coming Soon",
    title: "Conversational Trade Compliance",
    description:
      "Ask anything about trade finance rules. UCP600, ISBP745, Incoterms, sanctions, HS codes — get accurate, cited answers powered by the RulHub rules engine. Free tier for SMEs. Enterprise tier for bulk queries.",
    statLabel: "Access",
    statValue: "SME + Enterprise",
  },
  {
    name: "ICE",
    badge: "In Development",
    title: "Intelligent Compliance Engine",
    description:
      "A proprietary large language model trained exclusively on trade finance. Real LC documents, ICC Banking Commission opinions, DOCDEX decisions, bank profiles, fraud patterns. When complete, ICE will power all Enso Intelligence products and be available for licensing.",
    statLabel: "Model",
    statValue: "Trade-native",
  },
];

const pillars = [
  {
    title: "Transparent by Design",
    body: "Most trade compliance software hides its rules inside black-box AI. We publish our rulesets, version them, and make them auditable. If our engine flags a discrepancy, you can see exactly which rule triggered it and why.",
  },
  {
    title: "Built for the Real World",
    body: "Our validation engine was trained on 2,500 real Letters of Credit — stamped, signed, handwritten, scanned the way they actually arrive. Not clean PDFs. Not synthetic test data. Real documents from real trade.",
  },
  {
    title: "SME First, Always",
    body: "Enterprise trade compliance tools cost $500,000+ per year. We built the same capability for $99 per month. The exporter in Dhaka deserves the same compliance intelligence as HSBC. That's not charity — it's just the right architecture.",
  },
];

const metrics = [
  { label: "Trade rulesets", value: "4,000+" },
  { label: "Countries", value: "160" },
  { label: "LC validation", value: "47s" },
];

const palettes = {
  dark: {
    surface: "bg-neutral-950 text-neutral-100",
    heading: "text-white",
    muted: "text-neutral-400",
    capsule: "bg-white/5 border-white/10 text-white/80",
    card: "bg-neutral-900/55",
    cardBorder: "border-white/10",
    metric: "bg-white/5 border-white/10 text-white/70",
    headingAccent: "bg-white/10",
    toggleSurface: "bg-white/10",
    toggle: "border-white/15 text-white",
    button: "border-white/15 text-white hover:border-white/40 hover:bg-white/10",
    gridColor: "rgba(255, 255, 255, 0.06)",
    overlay:
      "linear-gradient(180deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.7) 45%, rgba(10,10,10,0.92) 100%)",
  },
  light: {
    surface: "bg-slate-100 text-neutral-900",
    heading: "text-neutral-900",
    muted: "text-neutral-600",
    capsule: "bg-white/70 border-neutral-200 text-neutral-700",
    card: "bg-white/80",
    cardBorder: "border-neutral-200",
    metric: "bg-white border-neutral-200 text-neutral-600",
    headingAccent: "bg-neutral-900/10",
    toggleSurface: "bg-white",
    toggle: "border-neutral-300 text-neutral-900",
    button:
      "border-neutral-300 text-neutral-900 hover:border-neutral-500 hover:bg-neutral-900/5",
    gridColor: "rgba(17, 17, 17, 0.08)",
    overlay:
      "linear-gradient(180deg, rgba(248,250,252,0.96) 0%, rgba(241,245,249,0.68) 45%, rgba(248,250,252,0.96) 100%)",
  },
};

const getTheme = (): Theme => {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

const SectionHeader = ({
  label,
  title,
  palette,
}: {
  label: string;
  title: string;
  palette: (typeof palettes)[Theme];
}) => (
  <div className="mb-8">
    <p className={`text-xs uppercase tracking-[0.35em] ${palette.muted}`}>{label}</p>
    <h2 className={`mt-3 text-2xl font-semibold sm:text-3xl ${palette.heading}`}>{title}</h2>
  </div>
);

const Index = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [visible, setVisible] = useState(false);
  const pageRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.innerHTML = `
      @keyframes enso-card-in {0%{opacity:0;transform:translateY(26px);filter:blur(8px)}100%{opacity:1;transform:translateY(0);filter:blur(0)}}
      .enso-card{opacity:0;transform:translateY(26px)}
      .enso-card[data-visible='true']{animation:enso-card-in .65s cubic-bezier(.22,.68,0,1) forwards;animation-delay:var(--delay,0ms)}
    `;
    if (!document.getElementById(STYLE_ID)) document.head.appendChild(style);
    return () => style.remove();
  }, []);

  useEffect(() => setTheme(getTheme()), []);

  useEffect(() => {
    const node = pageRef.current;
    if (!node) return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) setVisible(true);
    }, { threshold: 0.1 });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const palette = useMemo(() => palettes[theme], [theme]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next: Theme = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    localStorage.setItem("enso-theme", next);
    setTheme(next);
  };

  return (
    <div className={`relative min-h-screen w-full overflow-hidden transition-colors duration-700 ${palette.surface}`}>
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `linear-gradient(to right, ${palette.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${palette.gridColor} 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute inset-0 -z-10" style={{ background: palette.overlay }} />

      <section ref={pageRef} className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-5 py-20 md:px-10">
        <div className="sticky top-4 z-30 mb-16 flex w-full items-center justify-between gap-4">
          <a href="#" className="text-sm font-semibold tracking-[0.18em] uppercase opacity-90">
            Enso Intelligence
          </a>
          <div className={`flex w-full max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-full border px-6 py-3 backdrop-blur-md md:justify-end ${palette.capsule}`}>
            <a href="#about" className="px-1 text-xs uppercase tracking-[0.24em] hover:opacity-100 opacity-80">About</a>
            <a href="#products" className="px-1 text-xs uppercase tracking-[0.24em] hover:opacity-100 opacity-80">Products</a>
            <a href="#why-enso" className="px-1 text-xs uppercase tracking-[0.24em] hover:opacity-100 opacity-80">Why Enso</a>
            <a href="#team" className="px-1 text-xs uppercase tracking-[0.24em] hover:opacity-100 opacity-80">Team</a>
            <a href="#contact" className="px-1 text-xs uppercase tracking-[0.24em] hover:opacity-100 opacity-80">Contact</a>
            <button type="button" onClick={toggleTheme} className={`ml-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] ${palette.toggleSurface} ${palette.toggle}`}>
              {theme === "dark" ? "Night" : "Day"} mode
            </button>
          </div>
        </div>

        <header className="mb-20">
          <p className={`text-xs uppercase tracking-[0.35em] ${palette.muted}`}>Infrastructure for Global Trade Intelligence</p>
          <h1 className={`mt-4 max-w-5xl text-3xl font-semibold leading-tight sm:text-5xl ${palette.heading}`}>
            Trade compliance intelligence for teams that move global commerce.
          </h1>
          <p className={`mt-7 max-w-3xl text-base leading-8 sm:text-[1.15rem] sm:leading-9 ${palette.muted}`}>
            Enso Intelligence builds AI-powered compliance systems and rules infrastructure so SMEs and trade professionals can operate with the speed, confidence, and control usually reserved for large institutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://trdrhub.com" target="_blank" rel="noreferrer" className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${palette.button}`}>
              Visit TRDR Hub
            </a>
            <a href="#contact" className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${palette.button}`}>
              Book a Demo
            </a>
          </div>
        </header>

        <section id="about" className="mb-20">
          <SectionHeader label="Why We Exist" title="Trade knowledge is critical. Access to it should be universal." palette={palette} />
          <div className="grid gap-5 md:grid-cols-3">
            <article className={`enso-card rounded-[28px] border p-6 ${palette.cardBorder} ${palette.card}`} data-visible={visible} style={{ ["--delay" as string]: "40ms" }}>
              <p className={`text-xs uppercase tracking-[0.28em] ${palette.muted}`}>The Problem</p>
              <p className={`mt-4 text-[0.98rem] leading-8 ${palette.muted}`}>
                $32 trillion in annual trade depends on rules most operating teams can’t easily access or interpret at speed.
              </p>
            </article>
            <article className={`enso-card rounded-[28px] border p-6 ${palette.cardBorder} ${palette.card}`} data-visible={visible} style={{ ["--delay" as string]: "90ms" }}>
              <p className={`text-xs uppercase tracking-[0.28em] ${palette.muted}`}>The Gap</p>
              <p className={`mt-4 text-[0.98rem] leading-8 ${palette.muted}`}>
                Traditional compliance capability is bundled into expensive advisory models and enterprise systems.
              </p>
            </article>
            <article className={`enso-card rounded-[28px] border p-6 ${palette.cardBorder} ${palette.card}`} data-visible={visible} style={{ ["--delay" as string]: "140ms" }}>
              <p className={`text-xs uppercase tracking-[0.28em] ${palette.muted}`}>Our Response</p>
              <p className={`mt-4 text-[0.98rem] leading-8 ${palette.muted}`}>
                We productize trade rules and decision intelligence so any serious team can operate with confidence.
              </p>
            </article>
          </div>
        </section>

        <section id="products" className="mb-20">
          <SectionHeader label="What We Build" title="Product layer + rules layer" palette={palette} />
          <div className="grid gap-5 md:grid-cols-2">
            {products.map((p, i) => (
              <article
                key={p.name}
                className={`enso-card rounded-[28px] border p-6 ${palette.cardBorder} ${palette.card}`}
                data-visible={visible}
                style={{ ["--delay" as string]: `${70 + i * 70}ms` }}
              >
                <span className={`inline-flex rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.3em] ${palette.cardBorder} ${palette.muted}`}>{p.badge}</span>
                <h3 className={`mt-4 text-xl font-semibold ${palette.heading}`}>{p.name}</h3>
                <p className={`mt-1 text-sm ${palette.muted}`}>{p.title}</p>
                <p className={`mt-5 text-[0.98rem] leading-8 ${palette.muted}`}>{p.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className={`text-xs uppercase tracking-[0.25em] ${palette.muted}`}>{p.statLabel}: <b className={palette.heading}>{p.statValue}</b></span>
                  {p.href && (
                    <a href={p.href} target="_blank" rel="noreferrer" className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] ${palette.button}`}>
                      Open
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="why-enso" className="mb-20">
          <SectionHeader label="A Different Kind of Trade Tech" title="Clear rules. Real-world inputs. SME-first economics." palette={palette} />
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((p, i) => (
              <article key={p.title} className={`enso-card rounded-[28px] border p-6 ${palette.cardBorder} ${palette.card}`} data-visible={visible} style={{ ["--delay" as string]: `${110 + i * 70}ms` }}>
                <h3 className={`text-lg font-semibold ${palette.heading}`}>{p.title}</h3>
                <p className={`mt-4 text-sm leading-7 ${palette.muted}`}>{p.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="team" className="mb-20">
          <SectionHeader label="Who We Are" title="Founder-led, research-driven, execution-focused" palette={palette} />
          <article className={`enso-card rounded-[28px] border p-7 sm:p-9 ${palette.cardBorder} ${palette.card}`} data-visible={visible} style={{ ["--delay" as string]: "180ms" }}>
            <h3 className={`text-xl font-semibold ${palette.heading}`}>Ripon — Founder & CEO, Enso Intelligence</h3>
            <p className={`mt-5 max-w-4xl text-[1.02rem] leading-8 ${palette.muted}`}>
              Systems engineer, economist, and AI researcher with degrees from universities in Australia, Sweden, and the UK. Built Enso Intelligence to democratize trade finance knowledge — the compliance infrastructure that $32 trillion in global trade depends on, made accessible to everyone.
            </p>
          </article>
        </section>

        <section id="contact" className="mb-10">
          <SectionHeader label="Contact" title="Let’s build with you" palette={palette} />
          <div className="grid gap-5 md:grid-cols-2">
            <article className={`enso-card rounded-[28px] border p-6 ${palette.cardBorder} ${palette.card}`} data-visible={visible} style={{ ["--delay" as string]: "220ms" }}>
              <p className={`text-xs uppercase tracking-[0.28em] ${palette.muted}`}>Emails</p>
              <div className="mt-4 space-y-2 text-sm">
                <a href="mailto:hello@ensointelligence.com" className="block hover:underline">hello@ensointelligence.com</a>
                <a href="mailto:partnerships@ensointelligence.com" className="block hover:underline">partnerships@ensointelligence.com</a>
                <a href="mailto:press@ensointelligence.com" className="block hover:underline">press@ensointelligence.com</a>
              </div>
            </article>
            <article className={`enso-card rounded-[28px] border p-6 ${palette.cardBorder} ${palette.card}`} data-visible={visible} style={{ ["--delay" as string]: "280ms" }}>
              <p className={`text-xs uppercase tracking-[0.28em] ${palette.muted}`}>Quick stats</p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {metrics.map((m) => (
                  <div key={m.label} className={`rounded-2xl border p-3 ${palette.metric}`}>
                    <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">{m.label}</p>
                    <p className="mt-2 text-sm font-semibold">{m.value}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <footer className="border-t border-dashed border-current/20 pt-7">
          <p className={`text-xs uppercase tracking-[0.28em] ${palette.muted}`}>Built for the world, with trade at its core.</p>
        </footer>
      </section>
    </div>
  );
};

export default Index;
