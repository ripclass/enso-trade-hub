import { motion } from "framer-motion";
import { Eye, FileCheck, Users } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    title: "Transparent by Design",
    body: "Most trade compliance software hides its rules inside black-box AI. We publish our rulesets, version them, and make them auditable. If our engine flags a discrepancy, you can see exactly which rule triggered it and why.",
  },
  {
    icon: FileCheck,
    title: "Built for the Real World",
    body: "Our validation engine was trained on 2,500 real Letters of Credit — stamped, signed, handwritten, scanned the way they actually arrive. Not clean PDFs. Not synthetic test data. Real documents from real trade.",
  },
  {
    icon: Users,
    title: "SME First, Always",
    body: "Enterprise trade compliance tools cost $500,000+ per year. We built the same capability for $99 per month. The exporter in Dhaka deserves the same compliance intelligence as HSBC. That's not charity — it's just the right architecture.",
  },
];

const WhyEnso = () => {
  return (
    <section className="bg-surface-elevated py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-8 text-center"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            A Different Kind of Trade Tech
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Built for explainability, speed, and access
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bento-card bento-card-hover p-6 text-center"
            >
              <p.icon size={22} className="mx-auto mb-4" />
              <h3 className="mb-3 text-lg font-semibold">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEnso;
