import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-gold inline-block">
            Who We Are
          </h2>
          <div className="w-12 h-0.5 bg-primary/40 mb-14" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="rounded-lg border border-border bg-card p-8 md:p-10">
            {/* Add founder photo here when available — use circular crop, professional but not stuffy */}
            <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-primary">
              R
            </div>

            <h3 className="text-xl font-bold text-foreground">Ripon</h3>
            <p className="text-sm text-primary font-medium mt-1">
              Founder & CEO, Enso Intelligence
            </p>

            <p className="text-muted-foreground mt-5 leading-relaxed text-sm">
              Systems engineer, economist, and AI researcher with degrees from
              universities in Australia, Sweden, and the UK. Built Enso
              Intelligence to democratize trade finance knowledge — the compliance
              infrastructure that $32 trillion in global trade depends on, made
              accessible to everyone.
            </p>

            <div className="flex items-center justify-center gap-4 mt-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hello@ensointelligence.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
