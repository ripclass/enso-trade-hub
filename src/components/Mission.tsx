import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="bento-card p-8 md:p-10"
        >
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Why We Exist
          </p>

          <div className="grid gap-6 text-center md:grid-cols-3">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Trade finance runs the world. $32 trillion in annual global trade
              depends on Letters of Credit, customs compliance, sanctions
              screening, and hundreds of international rules most people have
              never heard of.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              For decades, access to this knowledge has been locked behind
              expensive consultants, proprietary bank systems, and enterprise
              software priced out of reach for the businesses that need it most.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Enso Intelligence exists to change that. We build the tools, rules,
              and intelligence that let any exporter, importer, freight
              forwarder, or compliance team operate with confidence — regardless
              of their size or budget.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
