const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "TRDR Hub", href: "https://trdrhub.com", external: true },
  { label: "RulHub", href: "https://rulhub.com", external: true },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 py-10">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3 md:items-center">
          <div>
            <p className="font-bold">Enso Intelligence</p>
            <p className="mt-1 text-sm text-muted-foreground">Infrastructure for Global Trade</p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-center">
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="text-sm text-muted-foreground md:text-right">
            Built in Bangladesh. For the world.
          </div>
        </div>

        <div className="mt-8 border-t border-border/60 pt-5 text-center text-xs text-muted-foreground">
          <p>© {year} Enso Intelligence. All rights reserved.</p>
          <p className="mt-1">TRDR Hub and RulHub are products of Enso Intelligence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
