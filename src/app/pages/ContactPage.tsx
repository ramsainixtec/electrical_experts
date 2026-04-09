import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import {
  IconPhone, IconMail, IconMapPin, IconClock, IconSiren, IconCheckCircle,
  IconFacebook, IconInstagram, IconTwitter, IconLinkedin, IconYoutube,
  IconZap, IconArrowRight, IconShield, IconStar, IconUsers,
  IconPlug, IconSwitch, IconLightbulb, IconWrench, IconBattery, IconCamera, IconCalendar,
} from "../components/Icons";
import { toast } from "sonner";

const homeImg = "https://images.unsplash.com/photo-1774415108927-ab76336ca9c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3IlMjB3ZWxsJTIwbGl0JTIwZXZlbmluZ3xlbnwxfHx8fDE3NzU2MzA3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const areas = [
  "Downtown", "Northside", "Westville", "Eastpark", "Southgate",
  "Central District", "Lakewood", "Riverside", "Greenfield", "Hillview",
];

const faqs = [
  { q: "How quickly can you respond to an emergency?", a: "Our average emergency response time is 30 minutes. We have teams strategically positioned across the city for rapid deployment." },
  { q: "Do you offer free estimates?", a: "Yes! We provide free on-site estimates for all services. There's no obligation — you only pay when you approve the work." },
  { q: "Are your electricians licensed?", a: "Absolutely. Every electrician on our team is fully licensed, insured, and background-checked. We maintain all required certifications." },
  { q: "What payment methods do you accept?", a: "We accept cash, credit/debit cards, bank transfers, and UPI payments. Payment is due upon completion of the work." },
  { q: "Do you offer maintenance contracts?", a: "Yes, we offer annual maintenance contracts that include regular inspections, priority scheduling, and discounted rates on repairs." },
];

const serviceOptions = [
  { value: "Wiring & Rewiring", icon: IconPlug },
  { value: "Switchboards & Sockets", icon: IconSwitch },
  { value: "Lighting & Appliance Setup", icon: IconLightbulb },
  { value: "Troubleshooting & Repairs", icon: IconWrench },
  { value: "Power Backup Solutions", icon: IconBattery },
  { value: "Security & Surveillance", icon: IconCamera },
  { value: "Emergency Support", icon: IconSiren },
  { value: "Annual Maintenance", icon: IconCalendar },
  { value: "Other", icon: IconZap },
];

const socials = [
  { Icon: IconFacebook, label: "Facebook", color: "hover:bg-blue-600" },
  { Icon: IconInstagram, label: "Instagram", color: "hover:bg-pink-600" },
  { Icon: IconTwitter, label: "Twitter/X", color: "hover:bg-gray-800" },
  { Icon: IconLinkedin, label: "LinkedIn", color: "hover:bg-blue-700" },
  { Icon: IconYoutube, label: "YouTube", color: "hover:bg-red-600" },
];

export function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [serviceOpen, setServiceOpen] = useState(false);
  const serviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (serviceRef.current && !serviceRef.current.contains(e.target as Node)) {
        setServiceOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your request has been submitted! We'll get back to you within 24 hours.");
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <div>
      {/* Banner */}
      <section className="bg-secondary text-secondary-foreground py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-primary text-sm tracking-widest uppercase mb-3 block">Contact Us</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-white">Get in Touch With Us</h1>
              <p className="text-gray-400 max-w-xl mx-auto text-lg">Have an electrical issue or need a quote? We're here to help — reach out anytime! Our team responds within 24 hours.</p>
            </div>
          </ScrollReveal>

          {/* Quick contact cards */}
          <StaggerContainer className="grid sm:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto" staggerDelay={0.1}>
            {[
              { icon: IconPhone, title: "Call Us", info: "+1 (234) 567-890", sub: "Available 24/7" },
              { icon: IconMail, title: "Email Us", info: "info@sparkpro.com", sub: "Response within 24hrs" },
              { icon: IconMapPin, title: "Visit Us", info: "123 Main Street", sub: "Your City, State 12345" },
            ].map((c) => (
              <StaggerItem key={c.title}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition">
                  <c.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="text-white mb-1">{c.title}</h4>
                  <p className="text-primary text-sm">{c.info}</p>
                  <p className="text-gray-500 text-xs mt-1">{c.sub}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="left">
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Reach Out</span>
              <h2 className="text-2xl sm:text-3xl mb-6">Contact Details</h2>

              <div className="space-y-4 mb-8">
                {[
                  { icon: IconMapPin, label: "Address", text: "123 Main Street, Your City, State 12345" },
                  { icon: IconPhone, label: "Phone", text: "+1 (234) 567-890" },
                  { icon: IconMail, label: "Email", text: "info@sparkpro.com" },
                  { icon: IconClock, label: "Hours", text: "Mon–Sun, 24/7 Emergency Service Available" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{c.label}</p>
                      <p className="text-sm">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency */}
              <div className="bg-destructive text-destructive-foreground rounded-xl p-6 mb-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,.1) 20px, rgba(255,255,255,.1) 40px)" }} />
                </div>
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <motion.div whileInView={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}>
                      <IconSiren className="w-6 h-6" />
                    </motion.div>
                    <h3>Electrical Emergency?</h3>
                  </div>
                  <p className="text-sm mb-4 opacity-90">Don't wait — call our 24/7 emergency helpline now. Average response time: 30 minutes.</p>
                  <a href="tel:+1234567890" className="bg-white text-destructive px-4 py-2 rounded-lg inline-flex items-center gap-2 text-sm hover:opacity-90 transition shadow">
                    <IconPhone className="w-4 h-4" /> Call Emergency Line
                  </a>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="mb-4">Stay Connected</h3>
                <p className="text-muted-foreground text-sm mb-4">Follow us on social media for electrical tips, offers, and updates.</p>
                <div className="flex gap-3">
                  {socials.map(({ Icon, label, color }) => (
                    <a key={label} href="#" title={label} className={`w-10 h-10 bg-accent rounded-full flex items-center justify-center ${color} hover:text-white transition`}>
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
                <h2 className="text-2xl mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-6 text-sm">Fill out the form below and we'll get back to you within 24 hours. All fields marked with * are required.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-1.5 text-sm">Full Name *</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block mb-1.5 text-sm">Phone Number *</label>
                      <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition" placeholder="+1 234 567 890" />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1.5 text-sm">Email Address *</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-sm">Service Needed *</label>
                    <div ref={serviceRef} className="relative">
                      <button
                        type="button"
                        onClick={() => setServiceOpen(!serviceOpen)}
                        className={`w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-left flex items-center justify-between ${form.service ? "text-foreground" : "text-muted-foreground"}`}
                      >
                        <span className="flex items-center gap-2">
                          {form.service ? (
                            <>
                              {(() => { const opt = serviceOptions.find(o => o.value === form.service); return opt ? <opt.icon className="w-4 h-4 text-primary" /> : null; })()}
                              {form.service}
                            </>
                          ) : (
                            "Select a service"
                          )}
                        </span>
                        <svg className={`w-4 h-4 text-muted-foreground transition-transform ${serviceOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                      </button>

                      <AnimatePresence>
                        {serviceOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                            animate={{ opacity: 1, y: 0, scaleY: 1 }}
                            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute z-20 mt-1.5 w-full bg-white rounded-xl border border-border shadow-xl overflow-hidden origin-top"
                          >
                            {serviceOptions.map((opt, idx) => (
                              <motion.button
                                key={opt.value}
                                type="button"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.03 }}
                                onClick={() => { setForm({ ...form, service: opt.value }); setServiceOpen(false); }}
                                className={`w-full px-4 py-3 flex items-center gap-3 text-left text-sm transition hover:bg-accent group ${form.service === opt.value ? "bg-primary/5 text-primary" : "text-foreground"}`}
                              >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition ${form.service === opt.value ? "bg-primary text-primary-foreground" : "bg-accent group-hover:bg-primary/10"}`}>
                                  <opt.icon className={`w-4 h-4 ${form.service === opt.value ? "text-primary-foreground" : "text-primary"}`} />
                                </div>
                                <span>{opt.value}</span>
                                {form.service === opt.value && <IconCheckCircle className="w-4 h-4 text-primary ml-auto" />}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Hidden input for form validation */}
                      <input type="text" required value={form.service} onChange={() => {}} className="sr-only" tabIndex={-1} />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1.5 text-sm">Message / Describe Your Issue *</label>
                    <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full px-4 py-3 bg-input-background rounded-lg border border-border resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition" placeholder="Tell us about your electrical issue or the service you need..." />
                  </div>
                  <button type="submit" className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg hover:bg-primary/90 transition inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                    Submit Request <IconArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-muted-foreground text-center">We respect your privacy. Your information will never be shared with third parties.</p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: IconShield, text: "Licensed & Insured" },
              { icon: IconStar, text: "5-Star Rated" },
              { icon: IconUsers, text: "5000+ Happy Clients" },
              { icon: IconClock, text: "Same-Day Service" },
              { icon: IconCheckCircle, text: "Satisfaction Guaranteed" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-muted-foreground">
                <b.icon className="w-5 h-5 text-primary" />
                <span className="text-sm">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">FAQ</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Got questions? We've got answers. If you don't find what you're looking for, feel free to contact us.</p>
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <ScrollReveal key={f.q} delay={i * 0.05}>
                <div className="bg-white border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="text-sm pr-4">{f.q}</span>
                    <svg className={`w-5 h-5 text-primary shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Coverage</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">Areas We Serve</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">We proudly serve the following areas and surrounding regions. Not sure if we cover your area? Give us a call!</p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="flex flex-wrap justify-center gap-3 mb-8" staggerDelay={0.05}>
            {areas.map((a) => (
              <StaggerItem key={a}>
                <span className="bg-white px-5 py-2.5 rounded-full border border-border shadow-sm hover:border-primary hover:shadow-md transition cursor-default inline-flex items-center gap-2">
                  <IconMapPin className="w-3.5 h-3.5 text-primary" />
                  {a}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal>
            <p className="text-center text-muted-foreground text-sm">
              Not sure if we cover your area? <a href="tel:+1234567890" className="text-primary hover:underline">Give us a call</a> — we're expanding fast and may already serve your location!
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Location</span>
              <h2 className="text-2xl sm:text-3xl mb-4">Find Us Here</h2>
              <p className="text-muted-foreground">Visit our office or service center — we're always happy to meet our customers in person.</p>
            </div>
            <div className="bg-muted rounded-2xl h-80 flex items-center justify-center border border-border">
              <div className="text-center">
                <IconMapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="text-muted-foreground">123 Main Street, Your City, State 12345</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary text-sm mt-2 hover:underline">
                  Open in Google Maps <IconArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <ImageWithFallback src={homeImg} alt="Modern home" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/90 to-secondary/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <ScrollReveal>
            <IconZap className="w-12 h-12 text-primary mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">Let's Light Up Your Space!</h2>
            <p className="text-gray-300 max-w-lg mx-auto mb-10 text-lg leading-relaxed">Whether it's a small repair or a full installation, we're ready to help. Contact us today and experience professional, reliable electrical service.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+1234567890" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition inline-flex items-center gap-2 text-lg shadow-lg shadow-primary/20">
                <IconPhone className="w-5 h-5" /> Call Now
              </a>
              <button onClick={() => window.scrollTo({ top: 400, behavior: "smooth" })} className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition text-lg">
                Request a Quote
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}