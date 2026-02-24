import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

const interestOptions = [
  "TRDR Hub",
  "RulHub API",
  "Partnership",
  "Press/Media",
  "Other",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    if (!form.interest) e.interest = "Please select an option";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    // TODO: Wire to Formspree or similar service
    // Example: POST to https://formspree.io/f/YOUR_FORM_ID with form data
    setSubmitted(true);
  };

  const inputClasses =
    "w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors";

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-elevated">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-gold inline-block">
            Get in Touch
          </h2>
          <div className="w-12 h-0.5 bg-primary/40 mb-14" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">General</p>
                <a
                  href="mailto:hello@ensointelligence.com"
                  className="text-foreground hover:text-primary transition-colors text-sm"
                >
                  hello@ensointelligence.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Partnerships</p>
                <a
                  href="mailto:partnerships@ensointelligence.com"
                  className="text-foreground hover:text-primary transition-colors text-sm"
                >
                  partnerships@ensointelligence.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Press</p>
                <a
                  href="mailto:press@ensointelligence.com"
                  className="text-foreground hover:text-primary transition-colors text-sm"
                >
                  press@ensointelligence.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted ? (
              <div className="rounded-lg border border-border bg-card p-8 text-center">
                <p className="text-foreground font-medium">Message sent.</p>
                <p className="text-sm text-muted-foreground mt-2">
                  We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClasses}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClasses}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company (optional)"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    className={inputClasses}
                  />
                </div>
                <div>
                  <select
                    value={form.interest}
                    onChange={(e) =>
                      setForm({ ...form, interest: e.target.value })
                    }
                    className={inputClasses}
                  >
                    <option value="">I'm interested in…</option>
                    {interestOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  {errors.interest && (
                    <p className="text-xs text-destructive mt-1">
                      {errors.interest}
                    </p>
                  )}
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className={inputClasses + " resize-none"}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
                >
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
