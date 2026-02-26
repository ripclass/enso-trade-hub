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
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    if (!form.interest) e.interest = "Please select an option";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(
      `[Enso Website] ${form.interest} inquiry from ${form.name}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Company: ${form.company || "N/A"}`,
        `Interest: ${form.interest}`,
        "",
        "Message:",
        form.message,
      ].join("\n")
    );

    window.location.href = `mailto:hello@ensointelligence.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputClasses =
    "w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:outline-none focus:ring-2 focus:ring-foreground/20";

  return (
    <section id="contact" className="bg-surface-elevated py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-5xl"
        >
          <div className="grid gap-4 md:grid-cols-5">
            <div className="bento-card p-6 text-center md:col-span-2">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Get in Touch
              </p>

              {["General", "Partnerships", "Press"].map((label, i) => {
                const mail =
                  i === 0
                    ? "hello@ensointelligence.com"
                    : i === 1
                      ? "partnerships@ensointelligence.com"
                      : "press@ensointelligence.com";

                return (
                  <div key={label} className="mb-4 flex items-start gap-3 last:mb-0">
                    <Mail size={16} className="mt-1" />
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <a
                        href={`mailto:${mail}`}
                        className="text-sm transition-colors hover:text-foreground"
                      >
                        {mail}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bento-card p-6 md:col-span-3">
              {submitted ? (
                <div className="rounded-xl border border-border bg-card p-6 text-center">
                  <p className="font-medium">Message sent.</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your email app should open with a pre-filled draft.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClasses}
                      />
                      {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClasses}
                      />
                      {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Company (optional)"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className={inputClasses}
                    />
                    <div>
                      <select
                        value={form.interest}
                        onChange={(e) => setForm({ ...form, interest: e.target.value })}
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
                        <p className="mt-1 text-xs text-destructive">{errors.interest}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClasses} resize-none`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl border border-foreground bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:opacity-90"
                  >
                    <Send size={14} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
