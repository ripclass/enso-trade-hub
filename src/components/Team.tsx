import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Team = () => {
  return (
    <section id="team" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl"
        >
          <div className="bento-card p-8 text-center md:p-10">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Who We Are
            </p>

            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-border bg-secondary text-2xl font-bold">
              R
            </div>

            <h3 className="text-xl font-bold">Ripon</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Founder & CEO, Enso Intelligence
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Systems engineer, economist, and AI researcher with degrees from
              universities in Australia, Sweden, and the UK. Built Enso
              Intelligence to democratize trade finance knowledge — the
              compliance infrastructure that $32 trillion in global trade depends
              on, made accessible to everyone.
            </p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href="mailto:hello@ensointelligence.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:-translate-y-0.5 hover:border-foreground/30"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
