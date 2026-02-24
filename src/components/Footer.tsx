const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "TRDR Hub", href: "https://trdrhub.com", external: true },
  { label: "RulHub", href: "https://rulhub.com", external: true },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left */}
          <div>
            <p className="font-bold text-foreground">Enso Intelligence</p>
            <p className="text-sm text-muted-foreground mt-1">
              Infrastructure for Global Trade
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="md:text-right">
            <p className="text-sm text-muted-foreground">
              Built in Bangladesh. For the world.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Enso Intelligence. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            TRDR Hub and RulHub are products of Enso Intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
