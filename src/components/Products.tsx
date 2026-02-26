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

const badgeStyles: Record<Product["badgeVariant"], string> = {
  live: "border-foreground/30 bg-foreground/10 text-foreground",
  coming: "border-border bg-secondary text-secondary-foreground",
  dev: "border-border bg-muted text-muted-foreground",
};

const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-8"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            What We Build
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Product Layer + Rules Layer
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bento-card bento-card-hover p-6 md:p-7"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <span
                    className={`mb-3 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium ${
                      badgeStyles[p.badgeVariant]
                    }`}
                  >
                    {p.badge}
                  </span>
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.tagline}</p>
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border transition-all hover:border-foreground/30"
                    aria-label={`Visit ${p.name}`}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
