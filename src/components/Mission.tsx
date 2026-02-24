import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-gold inline-block">
            Why We Exist
          </h2>
          <div className="w-12 h-0.5 bg-primary/40 mb-10" />

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Trade finance runs the world. $32 trillion in annual global trade
              depends on Letters of Credit, customs compliance, sanctions
              screening, and hundreds of international rules most people have
              never heard of.
            </p>
            <p>
              For decades, access to this knowledge has been locked behind
              expensive consultants, proprietary bank systems, and enterprise
              software priced out of reach for the businesses that need it most.
            </p>
            <p>
              Enso Intelligence exists to change that. We build the tools, rules,
              and intelligence that let any exporter, importer, freight forwarder,
              or compliance team operate with confidence — regardless of their
              size or budget.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
