import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Product {
  name: string;
  badge: string;
  badgeVariant: "live" | "coming" | "dev";
  tagline: string;
  description: string;
  link?: string;
}

const products: Product[] = [
  {
    name: "TRDR Hub",
    badge: "Live",
    badgeVariant: "live",
    tagline: "Trade Compliance Platform",
    description:
      "15 AI-powered tools for document validation, sanctions screening, HS code classification, container tracking, and more. Built for SME exporters, importers, and freight forwarders. LCopilot validates Letters of Credit in 47 seconds against 3,500+ rules.",
    link: "https://trdrhub.com",
  },
  {
    name: "RulHub",
    badge: "Live",
    badgeVariant: "live",
    tagline: "Global Rules Engine API",
    description:
      "The infrastructure layer. 4,000+ curated trade rulesets covering ICC standards, SWIFT messaging, ISO 20022, FTA agreements, sanctions frameworks, and country-specific regulations across 160 countries. Available via API for banks, fintechs, and compliance platforms.",
    link: "https://rulhub.com",
  },
  {
    name: "RuleGPT",
    badge: "Coming Soon",
    badgeVariant: "coming",
    tagline: "Conversational Trade Compliance",
    description:
      "Ask anything about trade finance rules. UCP600, ISBP745, Incoterms, sanctions, HS codes — get accurate, cited answers powered by the RulHub rules engine. Free tier for SMEs. Enterprise tier for bulk queries.",
  },
  {
    name: "ICE",
    badge: "In Development",
    badgeVariant: "dev",
    tagline: "Intelligent Compliance Engine",
    description:
      "A proprietary large language model trained exclusively on trade finance. Real LC documents, ICC Banking Commission opinions, DOCDEX decisions, bank profiles, fraud patterns. When complete, ICE will power all Enso Intelligence products and be available for licensing.",
  },
];

const badgeStyles: Record<string, string> = {
  live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  coming: "bg-primary/10 text-primary border-primary/20",
  dev: "bg-muted text-muted-foreground border-border",
};

const Products = () => {
  return (
    <section id="products" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-gold inline-block">
            What We Build
          </h2>
          <div className="w-12 h-0.5 bg-primary/40 mb-14" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-lg border border-border bg-card p-8 hover:border-primary/30 transition-colors glow-gold hover:glow-gold"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span
                    className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full border mb-3 ${
                      badgeStyles[p.badgeVariant]
                    }`}
                  >
                    {p.badge}
                  </span>
                  <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
                  <p className="text-sm text-primary font-medium">{p.tagline}</p>
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors mt-1"
                    aria-label={`Visit ${p.name}`}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {p.description}
              </p>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-sm font-medium text-primary hover:underline"
                >
                  {p.link.replace("https://", "")} →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
