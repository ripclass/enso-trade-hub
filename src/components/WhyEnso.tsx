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
    <section className="py-24 md:py-32 bg-surface-elevated">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-gold inline-block">
            A Different Kind of Trade Tech
          </h2>
          <div className="w-12 h-0.5 bg-primary/40 mb-14" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <p.icon size={28} className="text-primary mb-5" />
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEnso;
