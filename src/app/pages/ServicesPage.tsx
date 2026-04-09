import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import {
  IconPhone, IconCalendar, IconArrowRight, IconCheckCircle, IconPlug, IconSwitch,
  IconLightbulb, IconWrench, IconBattery, IconCamera, IconSiren, IconZap,
  IconStar, IconShield, IconClock, IconDollar,
} from "../components/Icons";

const bannerImg = "https://images.unsplash.com/photo-1553873002-785d775854c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdG9vbHMlMjB3aXJlcyUyMGVxdWlwbWVudCUyMGFycmFuZ2VkfGVufDF8fHx8MTc3NTYzMDc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const lightImg = "https://images.unsplash.com/photo-1690240360920-54ce04d1ff1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMGluc3RhbGxpbmclMjBjZWlsaW5nJTIwbGlnaHR8ZW58MXx8fHwxNzc1NjMwNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const cctvImg = "https://images.unsplash.com/photo-1669049515462-6ab71c151720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQ1RWJTIwc2VjdXJpdHklMjBjYW1lcmElMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzc1NTgyNDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const panelImg = "https://images.unsplash.com/photo-1660330590022-9f4ff56b63f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjBlbGVjdHJpY2FsJTIwcGFuZWwlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc1NjMwMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const testImg = "https://images.unsplash.com/photo-1710194572710-bbd92a2d3f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMG11bHRpbWV0ZXIlMjB0ZXN0aW5nJTIwcGFuZWx8ZW58MXx8fHwxNzc1NjMwNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const safetyImg = "https://images.unsplash.com/photo-1659353586855-83f3bbb6bd90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHNhZmV0eSUyMGdlYXIlMjB3b3JraW5nfGVufDF8fHx8MTc3NTYzMDc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const services = [
  {
    icon: IconPlug,
    title: "Wiring & Rewiring Services",
    desc: "Whether you're building a new home or upgrading an old one, our expert electricians provide safe, code-compliant wiring solutions. We use high-quality materials and proven techniques to ensure your electrical system is reliable for years to come.",
    details: "Our wiring services cover everything from new construction wiring to complete home rewiring. We assess your electrical load requirements, plan the optimal circuit layout, and install using premium-grade copper wiring that meets or exceeds all local building codes.",
    includes: ["New construction wiring", "Complete home rewiring", "Electrical load upgrades", "Panel box updates", "Conduit installation", "Junction box replacement"],
    img: panelImg,
  },
  {
    icon: IconSwitch,
    title: "Switchboards & Sockets",
    desc: "From modular switchboards to modern USB-enabled sockets, we install and upgrade electrical outlets with precision. Get stylish, functional, and safe solutions tailored to your space.",
    details: "We offer a wide range of modular switchboard options from top brands. Our installations include proper earthing, surge protection, and circuit isolation to keep your family safe. We also offer smart switch installations for home automation.",
    includes: ["Modular switchboards", "Power sockets", "USB charging outlets", "Smart switches", "Dimmer switches", "Outdoor weatherproof outlets"],
    img: lightImg,
  },
  {
    icon: IconLightbulb,
    title: "Lighting & Appliance Setup",
    desc: "Need a new ceiling fan, chandelier, or kitchen appliance installed? Our team handles all types of installations quickly and safely — no mess, no stress.",
    details: "From energy-efficient LED panels to decorative chandeliers, we handle all lighting installations with precision. We also wire and install kitchen appliances, water heaters, AC units, and more. Every installation comes with proper load testing.",
    includes: ["Ceiling fans & exhaust fans", "LED panel lights", "Chandeliers & decorative lighting", "Under-cabinet lighting", "Kitchen appliance wiring", "Water heater installation"],
    img: lightImg,
  },
  {
    icon: IconWrench,
    title: "Troubleshooting & Repairs",
    desc: "Experiencing flickering lights, tripping breakers, or sudden power loss? Our experts use advanced diagnostic tools to find and fix electrical faults quickly — restoring your power and peace of mind.",
    details: "Our diagnostic process uses state-of-the-art equipment including thermal imaging cameras, multimeters, and circuit analyzers. We don't just fix the symptom — we identify and address the root cause to prevent future issues.",
    includes: ["Short circuit diagnosis & repair", "Breaker & fuse issues", "Power loss troubleshooting", "Wiring fault detection", "Electrical surge damage repair", "Ground fault correction"],
    img: testImg,
  },
  {
    icon: IconBattery,
    title: "Power Backup Solutions",
    desc: "Never worry about power cuts again. We install and maintain inverters, batteries, and UPS systems to keep your home or office running smoothly during outages.",
    details: "We design custom power backup solutions based on your specific needs. Whether it's a small home inverter or a commercial-grade UPS system, we ensure seamless automatic switchover and optimal battery life through proper installation and configuration.",
    includes: ["Inverter installation & setup", "Battery bank configuration", "UPS systems for offices", "Solar-compatible setups", "Automatic transfer switches", "Battery maintenance plans"],
    img: panelImg,
  },
  {
    icon: IconCamera,
    title: "Security & Surveillance",
    desc: "Protect your property with professionally installed CCTV cameras and security systems. We provide end-to-end solutions, from site survey and planning to installation and ongoing maintenance.",
    details: "Our security team conducts a thorough site assessment to identify optimal camera placements, blind spots, and coverage areas. We handle all wiring, mounting, DVR/NVR configuration, and even set up remote viewing on your smartphone.",
    includes: ["HD & 4K CCTV cameras", "DVR/NVR setup & configuration", "Smart video doorbells", "Motion-activated alarm systems", "Remote monitoring setup", "Intercom & access control"],
    img: cctvImg,
  },
  {
    icon: IconSiren,
    title: "24/7 Maintenance & Emergency Support",
    desc: "Electrical issues don't follow a schedule — and neither do we. Our emergency team is available around the clock for urgent repairs, safety checks, and routine maintenance.",
    details: "Our emergency response team is strategically positioned across the city to ensure rapid arrival times. We carry common replacement parts in our service vehicles so we can resolve most issues in a single visit. Our maintenance plans help prevent emergencies before they happen.",
    includes: ["24/7 emergency callouts", "Annual maintenance contracts", "Safety inspections & audits", "Preventive maintenance checks", "Fire safety compliance", "Electrical system health reports"],
    img: safetyImg,
  },
];

const highlights = [
  { icon: IconShield, text: "All work guaranteed" },
  { icon: IconClock, text: "Same-day service available" },
  { icon: IconDollar, text: "Free estimates" },
  { icon: IconStar, text: "5-star rated" },
];

export function ServicesPage() {
  return (
    <div>
      {/* Banner */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <ImageWithFallback src={bannerImg} alt="Tools" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <ScrollReveal>
            <span className="text-primary text-sm tracking-widest uppercase mb-3 block">What We Offer</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 max-w-2xl">Our Electrical Services</h1>
            <p className="text-gray-300 max-w-xl text-lg">Complete solutions for every electrical need — residential, commercial, and emergency. Professional service you can trust.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="bg-primary py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {highlights.map((h) => (
              <div key={h.text} className="flex items-center gap-2 text-primary-foreground">
                <h.icon className="w-5 h-5" />
                <span className="text-sm">{h.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((s, i) => (
            <div key={s.title} className="mb-20 last:mb-0">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
                <ScrollReveal direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                        <s.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-xl sm:text-2xl">{s.title}</h2>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{s.details}</p>
                    <div className="mb-6">
                      <p className="text-sm mb-3 text-primary">What's Included:</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {s.includes.map((inc) => (
                          <div key={inc} className="flex items-center gap-2">
                            <IconCheckCircle className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-sm text-muted-foreground">{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-primary hover:underline text-sm">
                      Request This Service <IconArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction={i % 2 === 0 ? "right" : "left"}>
                  <ImageWithFallback
                    src={s.img}
                    alt={s.title}
                    className={`rounded-2xl w-full h-72 lg:h-80 object-cover shadow-lg ${i % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}
                  />
                </ScrollReveal>
              </div>
              {i < services.length - 1 && <div className="border-b border-border mt-20" />}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Pricing</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">Transparent & Affordable</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We believe in honest pricing. Every job comes with a free, upfront quote — no hidden fees, no surprises. Here's how our pricing works:</p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {[
              { title: "Diagnostic Visit", price: "FREE", desc: "We'll inspect your electrical issue and provide a detailed quote at no cost.", features: ["On-site inspection", "Problem diagnosis", "Written estimate", "No obligation"] },
              { title: "Standard Service", price: "From $49", desc: "Most common repairs and installations at competitive hourly rates.", features: ["Licensed electrician", "Quality materials", "Workmanship guarantee", "Clean workspace"] },
              { title: "Emergency Service", price: "From $79", desc: "Available 24/7 for urgent electrical emergencies with rapid response.", features: ["30-min response time", "Available 24/7/365", "Priority scheduling", "Same-visit resolution"] },
            ].map((p) => (
              <StaggerItem key={p.title}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition h-full flex flex-col">
                  <h3 className="text-lg mb-1">{p.title}</h3>
                  <p className="text-2xl text-primary mb-3">{p.price}</p>
                  <p className="text-muted-foreground text-sm mb-6">{p.desc}</p>
                  <div className="space-y-2 flex-1">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <IconCheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="mt-6 block text-center bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition">
                    Get Started
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <IconZap className="w-12 h-12 text-primary mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 text-white">Need a Service?</h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg">Contact us today for a free consultation and quote. Our team is standing by to help with all your electrical needs.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+1234567890" className="bg-destructive text-destructive-foreground px-8 py-4 rounded-lg inline-flex items-center gap-2 hover:opacity-90 transition shadow-lg text-lg">
                <IconPhone className="w-5 h-5" /> Call Emergency Line
              </a>
              <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg inline-flex items-center gap-2 hover:bg-primary/90 transition text-lg">
                <IconCalendar className="w-5 h-5" /> Book a Service
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
