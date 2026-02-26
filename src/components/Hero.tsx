import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  ["4,000+", "trade rulesets"],
  ["160", "countries"],
  ["47s", "LC validation"],
  ["$32T", "in global trade"],
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 mono-grid opacity-60" />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 top-24 h-64 w-64 rounded-full border border-border/80"
      />

      <div className="container relative mx-auto px-6 pb-14 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bento-card p-8 md:p-12"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Enso Intelligence
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
            Infrastructure for Global Trade Intelligence
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            We build AI-powered compliance tools and rules infrastructure that give
            SMEs and trade professionals the same capabilities as the world's
            largest banks — at a fraction of the cost.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://trdrhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-foreground bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:opacity-90"
            >
              Visit TRDR Hub
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-foreground/30"
            >
              Book a Demo
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map(([value, label], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="bento-card bento-card-hover p-5"
            >
              <p className="text-xl font-bold md:text-2xl">{value}</p>
              <p className="mt-1 text-xs text-muted-foreground md:text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
