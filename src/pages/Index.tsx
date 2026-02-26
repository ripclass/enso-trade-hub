import { useEffect, useMemo, useRef, useState } from "react";

const STYLE_ID = "enso-bento-animations";

type Theme = "dark" | "light";

type Flow = {
  id: string;
  variant: "orbit" | "relay" | "wave" | "spark" | "loop";
  meta: string;
  title: string;
  description: string;
  statLabel: string;
  statValue: string;
  href?: string;
};

const flows: Flow[] = [
  {
    id: "01",
    variant: "orbit",
    meta: "About",
    title: "Why We Exist",
    description:
      "Trade finance runs the world. $32 trillion in annual global trade depends on Letters of Credit, customs compliance, sanctions screening, and hundreds of international rules most people have never heard of.",
    statLabel: "Global trade",
    statValue: "$32T",
    href: "#about",
  },
  {
    id: "02",
    variant: "relay",
    meta: "Products",
    title: "TRDR Hub",
    description:
      "15 AI-powered tools for document validation, sanctions screening, HS code classification, container tracking, and more. Built for SME exporters, importers, and freight forwarders. LCopilot validates Letters of Credit in 47 seconds against 3,500+ rules.",
    statLabel: "Validation",
    statValue: "47s",
    href: "https://trdrhub.com",
  },
  {
    id: "03",
    variant: "wave",
    meta: "Products",
    title: "RulHub",
    description:
      "The infrastructure layer. 4,000+ curated trade rulesets covering ICC standards, SWIFT messaging, ISO 20022, FTA agreements, sanctions frameworks, and country-specific regulations across 160 countries.",
    statLabel: "Coverage",
    statValue: "160 countries",
    href: "https://rulhub.com",
  },
  {
    id: "04",
    variant: "spark",
    meta: "Team",
    title: "Ripon — Founder & CEO, Enso Intelligence",
    description:
      "Systems engineer, economist, and AI researcher with degrees from universities in Australia, Sweden, and the UK. Built Enso Intelligence to democratize trade finance knowledge.",
    statLabel: "Built from",
    statValue: "Bangladesh",
    href: "#team",
  },
  {
    id: "05",
    variant: "loop",
    meta: "Contact",
    title: "Get in Touch",
    description:
      "General: hello@ensointelligence.com · Partnerships: partnerships@ensointelligence.com · Press: press@ensointelligence.com",
    statLabel: "Action",
    statValue: "Book a demo",
    href: "#contact",
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
    focusGlow: "rgba(255, 255, 255, 0.14)",
    iconStroke: "#f8fafc",
    iconTrail: "rgba(148, 163, 184, 0.55)",
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
    focusGlow: "rgba(15, 23, 42, 0.15)",
    iconStroke: "#111827",
    iconTrail: "rgba(30, 41, 59, 0.42)",
  },
};

const getTheme = (): Theme => {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

const Index = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.innerHTML = `
      @keyframes enso-card-in {0%{opacity:0;transform:translateY(28px) scale(.98);filter:blur(10px)}100%{opacity:1;transform:translateY(0) scale(1);filter:blur(0)}}
      @keyframes enso-flare {0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
      .enso-card{opacity:0;transform:translateY(28px)}
      .enso-card[data-visible='true']{animation:enso-card-in .7s cubic-bezier(.22,.68,0,1) forwards;animation-delay:var(--delay,0ms)}
      .enso-icon{position:relative;display:inline-flex;align-items:center;justify-content:center;height:52px;width:52px;border-radius:9999px;overflow:hidden}
      .enso-icon::before{content:'';position:absolute;inset:8px;border-radius:9999px;border:1px solid var(--trail);opacity:.45}
      .enso-icon span{position:absolute;height:140%;width:2px;background:linear-gradient(180deg,transparent,var(--stroke) 55%,transparent);animation:enso-flare 8s linear infinite}
    `;
    if (!document.getElementById(STYLE_ID)) document.head.appendChild(style);
    return () => style.remove();
  }, []);

  useEffect(() => {
    const next = getTheme();
    setTheme(next);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setVisible(true);
      },
      { threshold: 0.2 }
    );
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
    <div
      className={`relative min-h-screen w-full overflow-hidden transition-colors duration-700 ${palette.surface}`}
      style={{
        ["--stroke" as string]: palette.iconStroke,
        ["--trail" as string]: palette.iconTrail,
      }}
    >
      <div className="absolute inset-0 -z-20" style={{
        backgroundImage: `linear-gradient(to right, ${palette.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${palette.gridColor} 1px, transparent 1px)`,
        backgroundSize: "22px 22px",
      }} />
      <div className="absolute inset-0 -z-10" style={{ background: palette.overlay }} />

      <section ref={sectionRef} className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 py-24 md:gap-16 md:px-10">
        <div className={`flex w-full max-w-4xl flex-wrap items-start justify-start gap-3 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.28em] ${palette.capsule}`}>
          <a href="#about" className="rounded-full border border-current/20 px-3 py-1">About</a>
          <a href="#products" className="rounded-full border border-current/20 px-3 py-1">Products</a>
          <a href="#team" className="rounded-full border border-current/20 px-3 py-1">Team</a>
          <a href="#contact" className="rounded-full border border-current/20 px-3 py-1">Contact</a>
          <button type="button" onClick={toggleTheme} className={`rounded-full border px-3 py-1 ${palette.toggleSurface} ${palette.toggle}`}>
            {theme === "dark" ? "Night" : "Day"} mode
          </button>
        </div>

        <header className="text-left">
          <div className="inline-flex items-center gap-3 rounded-full px-3 py-1 text-xs uppercase tracking-[0.4em]">
            <span className={`h-1 w-14 rounded-full ${palette.headingAccent}`} /> Infrastructure for Global Trade Intelligence
          </div>
          <h1 className={`mt-5 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl ${palette.heading}`}>
            Enso Intelligence
          </h1>
          <p className={`mt-5 max-w-3xl text-sm sm:text-base md:text-lg ${palette.muted}`}>
            We build AI-powered compliance tools and rules infrastructure that give SMEs and trade professionals the same capabilities as the world's largest banks — at a fraction of the cost.
          </p>
        </header>

        <div id="about" className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:gap-8">
          {flows.map((flow, index) => (
            <article
              key={flow.id}
              className={`enso-card group relative overflow-hidden rounded-[28px] border p-6 transition-colors duration-500 ${palette.cardBorder} ${palette.card}`}
              data-visible={visible}
              style={{ ["--delay" as string]: `${index * 90}ms` }}
            >
              <div className="flex flex-col gap-5 text-left">
                <div className="text-xs uppercase tracking-[0.3em] opacity-50">{flow.id}</div>
                <span className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.4em] ${palette.cardBorder} ${palette.muted}`}>
                  {flow.meta}
                </span>
                <h3 className={`text-xl font-semibold leading-tight sm:text-2xl ${palette.heading}`}>{flow.title}</h3>
                <p className={`text-sm leading-relaxed sm:text-base ${palette.muted}`}>{flow.description}</p>
                <div className={`flex h-14 w-14 items-center justify-center rounded-full border ${palette.cardBorder} ${palette.card}`}>
                  <span className="enso-icon"><span /></span>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-2 text-left text-xs uppercase tracking-[0.25em] opacity-70">
                <span>{flow.statLabel}</span>
                <span className="font-semibold">{flow.statValue}</span>
              </div>
            </article>
          ))}
        </div>

        <div id="products" className={`grid grid-cols-1 gap-4 rounded-[28px] border p-6 sm:grid-cols-3 ${palette.cardBorder} ${palette.card}`}>
          {metrics.map((metric) => (
            <div key={metric.label} className={`rounded-[22px] border px-5 py-6 text-left text-xs uppercase tracking-[0.22em] ${palette.metric}`}>
              <span className="block text-[10px] opacity-60">{metric.label}</span>
              <span className="mt-2 block text-base font-semibold tracking-[0.08em]">{metric.value}</span>
            </div>
          ))}
        </div>

        <footer id="contact" className="flex flex-col items-start gap-5 border-t border-dashed border-current/20 pt-8 text-left">
          <span className={`text-xs uppercase tracking-[0.35em] ${palette.muted}`}>Built in Bangladesh. For the world.</span>
          <div className="flex items-center gap-3">
            <a href="mailto:hello@ensointelligence.com" className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${palette.button}`}>Email us</a>
            <a href="https://trdrhub.com" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-[0.35em] underline-offset-4 hover:underline">Visit TRDR Hub</a>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Index;
