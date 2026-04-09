import { Link } from "react-router";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import {
  IconAward, IconDollar, IconClock, IconSiren, IconCheckCircle, IconShield,
  IconArrowRight, IconStar, IconUsers, IconThumbsUp, IconTrendingUp, IconZap,
  IconPhone, IconHeadphones,
} from "../components/Icons";

const heroImg = "https://images.unsplash.com/photo-1659353586855-83f3bbb6bd90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHNhZmV0eSUyMGdlYXIlMjB3b3JraW5nfGVufDF8fHx8MTc3NTYzMDc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const familyImg = "https://images.unsplash.com/photo-1770587899537-23e617e17767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGxpdmluZyUyMHJvb20lMjB3YXJtJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzc1NjMwNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const panelImg = "https://images.unsplash.com/photo-1660330590022-9f4ff56b63f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjBlbGVjdHJpY2FsJTIwcGFuZWwlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc1NjMwMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const reasons = [
  {
    icon: IconAward,
    title: "Skilled Professionals You Can Trust",
    desc: "Every electrician on our team is fully licensed, certified, and extensively trained. With years of field experience, we bring expertise, precision, and professionalism to every job — big or small.",
    details: ["Licensed & insured electricians", "Continuous professional development", "Background-checked team members", "Industry-recognized certifications"],
  },
  {
    icon: IconDollar,
    title: "Honest Pricing, No Surprises",
    desc: "We believe in transparent pricing with no hidden fees. You'll get a clear, upfront quote before we begin any work — so you always know exactly what you're paying for.",
    details: ["Free on-site estimates", "Written quotes before work begins", "No overtime surcharges", "Price-match guarantee"],
  },
  {
    icon: IconClock,
    title: "Fast, Reliable Service",
    desc: "When you need an electrician, you need them fast. Our team prides itself on quick response times and punctual arrivals — because your time matters.",
    details: ["Same-day service available", "Punctual appointment windows", "Real-time arrival updates", "Efficient job completion"],
  },
  {
    icon: IconSiren,
    title: "Always Available, Day or Night",
    desc: "Electrical problems don't wait — and neither do we. Our 24/7 emergency support ensures help is always just a phone call away, no matter the hour.",
    details: ["24/7/365 availability", "30-minute average response", "Fully equipped service vehicles", "After-hours priority line"],
  },
  {
    icon: IconCheckCircle,
    title: "100% Satisfaction Guaranteed",
    desc: "We stand behind every job we complete. If you're not satisfied with our work, we'll make it right — that's our promise to you.",
    details: ["Written workmanship warranty", "Follow-up quality checks", "Free re-service if needed", "Money-back guarantee"],
  },
  {
    icon: IconShield,
    title: "Your Safety Is Our Priority",
    desc: "From the tools we use to the techniques we apply, safety is built into everything we do. We follow strict safety protocols to protect your family, property, and our team.",
    details: ["Code-compliant installations", "Safety inspection included", "Fire-safe materials only", "Proper grounding & bonding"],
  },
];

const stats = [
  { value: "5000+", label: "Projects Completed", icon: IconThumbsUp },
  { value: "98%", label: "Customer Satisfaction", icon: IconStar },
  { value: "30 min", label: "Avg. Response Time", icon: IconClock },
  { value: "10+", label: "Years Experience", icon: IconTrendingUp },
];

const comparisons = [
  { feature: "Licensed & Insured", us: true, others: false },
  { feature: "Upfront Pricing", us: true, others: false },
  { feature: "24/7 Availability", us: true, others: false },
  { feature: "Free Estimates", us: true, others: false },
  { feature: "Satisfaction Guarantee", us: true, others: false },
  { feature: "Same-Day Service", us: true, others: false },
  { feature: "Background-Checked Team", us: true, others: false },
  { feature: "Follow-Up Quality Check", us: true, others: false },
];

const testimonials = [
  { name: "Ramesh K.", text: "Fixed our wiring issue within an hour. Super professional and affordable!" },
  { name: "Priya S.", text: "The most honest electricians I've ever worked with. Transparent pricing and excellent work." },
  { name: "Anil M.", text: "Emergency service at 2 AM — they were there in 20 minutes. Lifesavers!" },
  { name: "Meera J.", text: "Installed smart lighting throughout my home. Clean work and fantastic results." },
];

export function WhyUsPage() {
  return (
    <div>
      {/* Banner */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImg} alt="Electrician" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <ScrollReveal>
            <span className="text-primary text-sm tracking-widest uppercase mb-3 block">Our Advantages</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 max-w-2xl">Why Choose Us</h1>
            <p className="text-gray-300 max-w-xl text-lg">Here's what makes us the preferred electrical service provider for thousands of happy customers across the region.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center text-primary-foreground">
                  <s.icon className="w-6 h-6 mx-auto mb-2 opacity-80" />
                  <p className="text-2xl sm:text-3xl">{s.value}</p>
                  <p className="text-sm opacity-80">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">What Sets Us Apart</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">The SparkPro Difference</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We don't just fix electrical problems — we deliver peace of mind. Here's why thousands of customers choose us.</p>
            </div>
          </ScrollReveal>

          <div className="space-y-16">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.title} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`grid lg:grid-cols-5 gap-8 items-start ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
                  <div className={`lg:col-span-3 ${i % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center shrink-0">
                        <r.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-xl mb-3">{r.title}</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">{r.desc}</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {r.details.map((d) => (
                            <div key={d} className="flex items-center gap-2">
                              <IconCheckCircle className="w-4 h-4 text-primary shrink-0" />
                              <span className="text-sm text-muted-foreground">{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`lg:col-span-2 ${i % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}>
                    <div className="bg-muted rounded-xl p-6 h-full flex items-center justify-center">
                      <r.icon className="w-20 h-20 text-primary/20" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Comparison</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">SparkPro vs. Others</h2>
              <p className="text-muted-foreground">See how we stack up against the competition.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border">
              <div className="grid grid-cols-3 bg-secondary text-white p-4">
                <span className="text-sm">Feature</span>
                <span className="text-sm text-center text-primary">SparkPro</span>
                <span className="text-sm text-center text-gray-400">Others</span>
              </div>
              {comparisons.map((c, i) => (
                <div key={c.feature} className={`grid grid-cols-3 p-4 items-center ${i % 2 === 0 ? "" : "bg-muted/50"}`}>
                  <span className="text-sm">{c.feature}</span>
                  <div className="text-center">
                    <IconCheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </div>
                  <div className="text-center">
                    <svg className="w-5 h-5 text-red-400 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Reviews</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">What Customers Say</h2>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="bg-white border border-border rounded-xl p-6 h-full flex flex-col hover:shadow-md transition">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => <IconStar key={i} className="w-3.5 h-3.5 text-primary" />)}
                  </div>
                  <p className="text-muted-foreground text-sm italic flex-1 mb-4 leading-relaxed">"{t.text}"</p>
                  <p className="text-sm">— {t.name}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-destructive text-destructive-foreground py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3 mb-3">
                <motion.div whileInView={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}>
                  <IconZap className="w-10 h-10" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl">Need Emergency Help?</h2>
              </div>
              <p className="opacity-90 mb-4">Our 24/7 emergency team responds in an average of 30 minutes. Don't risk it — call us now.</p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="flex flex-wrap gap-4 md:justify-end">
                <a href="tel:+1234567890" className="bg-white text-destructive px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:opacity-90 transition shadow-lg">
                  <IconPhone className="w-5 h-5" /> Call Emergency Line
                </a>
                <a href="tel:+1234567890" className="border-2 border-white text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-white/10 transition">
                  <IconHeadphones className="w-5 h-5" /> 24/7 Support
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <ImageWithFallback src={familyImg} alt="Happy family" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/90 to-secondary/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">Experience the Difference</h2>
            <p className="text-gray-300 max-w-lg mx-auto mb-10 text-lg">Join thousands of satisfied customers who trust us for their electrical needs. Book your service today and see why we're the best choice.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition inline-flex items-center gap-2 text-lg shadow-lg shadow-primary/20">
                Book Now <IconArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition text-lg">
                Get a Free Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
