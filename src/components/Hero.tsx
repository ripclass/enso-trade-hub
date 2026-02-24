import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(38 92% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(38 92% 50% / 0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, hsl(38 92% 50%), transparent 70%)",
          }}
        />
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-[15%] w-64 h-64 border border-gold-dim/20 rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-[10%] w-96 h-96 border border-gold-dim/10"
          style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
        />
      </div>

      <div className="relative container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8">
            Infrastructure for{" "}
            <span className="text-gradient-gold">Global Trade Intelligence</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            We build AI-powered compliance tools and rules infrastructure that give
            SMEs and trade professionals the same capabilities as the world's
            largest banks — at a fraction of the cost.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://trdrhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Visit TRDR Hub
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="https://rulhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-border text-foreground font-medium hover:bg-secondary transition-colors"
            >
              Explore RulHub API
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-muted-foreground">
            <div><span className="text-foreground font-semibold">4,000+</span> trade rulesets</div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div><span className="text-foreground font-semibold">160</span> countries</div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div><span className="text-foreground font-semibold">47s</span> LC validation</div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div><span className="text-foreground font-semibold">$32T</span> in global trade</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
