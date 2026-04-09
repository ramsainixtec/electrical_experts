import { Link } from "react-router";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import {
  IconZap, IconLightbulb, IconWrench, IconBattery, IconCamera, IconSiren,
  IconPhone, IconFileText, IconHardHat, IconCheckCircle, IconStar, IconShield,
  IconClock, IconDollar, IconArrowRight, IconHome, IconBuilding, IconUsers,
  IconThumbsUp, IconTrendingUp, IconHeadphones,
} from "../components/Icons";

const heroImg = "https://images.unsplash.com/photo-1660330590022-9f4ff56b63f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjBlbGVjdHJpY2FsJTIwcGFuZWwlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc1NjMwMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const aboutImg = "https://images.unsplash.com/photo-1625148230889-8195e85aae6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHRlYW0lMjB1bmlmb3JtJTIwc2VydmljZSUyMHZhbnxlbnwxfHx8fDE3NzU2MzA3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const homeImg = "https://images.unsplash.com/photo-1774415108927-ab76336ca9c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3IlMjB3ZWxsJTIwbGl0JTIwZXZlbmluZ3xlbnwxfHx8fDE3NzU2MzA3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const services = [
  { icon: IconZap, title: "Electrical Wiring & Rewiring", desc: "Safe and durable wiring solutions for residential and commercial properties. We use premium materials and follow all safety codes." },
  { icon: IconLightbulb, title: "Lighting & Fixture Installation", desc: "From modern LEDs to elegant chandeliers, ceiling fans, and smart lighting systems — professionally installed." },
  { icon: IconWrench, title: "Fault Detection & Repair", desc: "Quick diagnosis and expert fixes for short circuits, tripping breakers, power loss, and all electrical faults." },
  { icon: IconBattery, title: "Inverter & Battery Setup", desc: "Uninterrupted power backup with inverter, UPS, and solar-compatible battery installations." },
  { icon: IconCamera, title: "CCTV & Security Systems", desc: "Professional surveillance solutions including CCTV cameras, DVR/NVR setup, smart doorbells, and alarm systems." },
  { icon: IconSiren, title: "24/7 Emergency Support", desc: "Electrical emergencies don't wait — and neither do we. Round-the-clock rapid response service." },
];

const whyUs = [
  { icon: IconShield, text: "Certified & Experienced Electricians", desc: "Licensed professionals with 10+ years" },
  { icon: IconDollar, text: "Affordable & Transparent Pricing", desc: "No hidden charges, ever" },
  { icon: IconClock, text: "Quick Response Time", desc: "On-site within hours" },
  { icon: IconSiren, text: "24/7 Emergency Support", desc: "Day or night, we're here" },
  { icon: IconCheckCircle, text: "Quality Workmanship Guarantee", desc: "100% satisfaction promised" },
];

const steps = [
  { icon: IconPhone, title: "Book a Service", desc: "Call us or fill out our simple online booking form. It takes less than 2 minutes." },
  { icon: IconFileText, title: "Get a Free Quote", desc: "We provide transparent, no-obligation pricing before any work begins." },
  { icon: IconHardHat, title: "Expert On-Site Work", desc: "Our certified electrician arrives on time with all the right tools and parts." },
  { icon: IconCheckCircle, title: "Quality Check & Guarantee", desc: "We test everything, clean up, and guarantee our work for your peace of mind." },
];

const testimonials = [
  { name: "Ramesh K.", role: "Homeowner", text: "Super quick response and professional service. Fixed our wiring issue within an hour! The team was polite, punctual, and very thorough with their work." },
  { name: "Priya S.", role: "Business Owner", text: "Affordable, honest, and highly skilled. They rewired our entire office without any disruption to our daily operations. Highly recommend!" },
  { name: "Anil M.", role: "Apartment Complex Manager", text: "Installed our CCTV and inverter system perfectly. They handled the entire 50-unit complex efficiently. Great team and outstanding results!" },
  { name: "Sunita D.", role: "Restaurant Owner", text: "Our kitchen electrical system was a mess. SparkPro redesigned and rewired everything. Now it's safe, organized, and up to code." },
  { name: "Vikram T.", role: "Homeowner", text: "Called them at 2 AM for an emergency — they were at our doorstep within 30 minutes. That's the kind of service you can't find easily." },
  { name: "Meera J.", role: "Interior Designer", text: "I recommend SparkPro to all my clients. Their lighting installations are always flawless and they understand modern design aesthetics." },
];

const stats = [
  { value: "5000+", label: "Projects Completed", icon: IconThumbsUp },
  { value: "10+", label: "Years Experience", icon: IconTrendingUp },
  { value: "98%", label: "Customer Satisfaction", icon: IconUsers },
  { value: "24/7", label: "Emergency Support", icon: IconHeadphones },
];

const clientTypes = [
  { icon: IconHome, title: "Residential", desc: "Complete home electrical solutions — wiring, lighting, repairs, smart home setups, and more." },
  { icon: IconBuilding, title: "Commercial", desc: "Office, shop, and warehouse electrical systems — installations, maintenance, and safety upgrades." },
  { icon: IconSiren, title: "Emergency", desc: "Round-the-clock emergency electrical services for urgent breakdowns and safety hazards." },
];

export function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[650px] lg:min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImg} alt="Electrician working" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm mb-6">
              <IconZap className="w-4 h-4" /> Trusted by 5000+ Customers
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl max-w-2xl mb-6 text-white leading-tight">
              Powering Your Home & Business with Trusted Electrical Experts
            </h1>
            <p className="text-lg text-gray-300 max-w-xl mb-8 leading-relaxed">
              Certified electricians delivering safe, reliable, and affordable electrical solutions — 24/7 emergency service available across the city.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-primary text-primary-foreground px-7 py-3.5 rounded-lg hover:bg-primary/90 transition inline-flex items-center gap-2 shadow-lg shadow-primary/20">
              Book a Service <IconArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+1234567890" className="border-2 border-white/30 text-white px-7 py-3.5 rounded-lg hover:bg-white/10 transition inline-flex items-center gap-2">
              <IconPhone className="w-4 h-4" /> Call Now
            </a>
          </motion.div>

          {/* Quick stats in hero */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-primary text-xl">{s.value}</p>
                <p className="text-gray-400 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">About Us</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6">Your Trusted Electrical Service Partner</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide reliable and professional electrical services for homes, offices, and commercial spaces. From small repairs to full-scale installations, our certified electricians ensure every job is done safely, efficiently, and to the highest standards.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With years of experience and a commitment to quality, we're the team you can count on for all your electrical needs. Our technicians are continuously trained on the latest electrical codes, technologies, and safety practices to deliver exceptional results every time.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2"><IconCheckCircle className="w-5 h-5 text-primary" /><span className="text-sm">Licensed & Insured</span></div>
                <div className="flex items-center gap-2"><IconCheckCircle className="w-5 h-5 text-primary" /><span className="text-sm">Free Estimates</span></div>
                <div className="flex items-center gap-2"><IconCheckCircle className="w-5 h-5 text-primary" /><span className="text-sm">Same-Day Service</span></div>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary hover:underline">
                Learn More About Us <IconArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <ImageWithFallback src={aboutImg} alt="Electrician team" className="rounded-2xl w-full h-[400px] object-cover shadow-xl" />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-5 rounded-xl shadow-lg">
                  <p className="text-3xl">10+</p>
                  <p className="text-sm">Years of Experience</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Our Expertise</span>
              <h2 className="text-2xl sm:text-3xl text-white">Who We Serve</h2>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {clientTypes.map((c) => (
              <StaggerItem key={c.title}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition group text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition">
                    <c.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-white mb-3">{c.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Our Services</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">What We Do Best</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">From basic repairs to complex installations, we offer comprehensive electrical services tailored to your needs.</p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <div className="bg-white p-7 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group h-full border border-transparent hover:border-primary/20">
                  <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal delay={0.4}>
            <div className="text-center mt-10">
              <Link to="/services" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition">
                View All Services <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center text-primary-foreground">
                  <s.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                  <p className="text-3xl sm:text-4xl mb-1">{s.value}</p>
                  <p className="text-sm opacity-80">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Our Advantages</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">Why Customers Trust Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We've built our reputation on delivering exceptional electrical services with integrity, skill, and customer-first approach.</p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6" staggerDelay={0.08}>
            {whyUs.map((w) => (
              <StaggerItem key={w.text}>
                <div className="text-center p-5 rounded-xl hover:bg-muted transition group">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <w.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-sm mb-1">{w.text}</p>
                  <p className="text-xs text-muted-foreground">{w.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Our Process</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">Simple Steps to Get the Job Done</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We've streamlined our process to make it as easy as possible for you. From booking to completion, every step is transparent and hassle-free.</p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
            {steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="text-center relative">
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20" />
                  )}
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-5 text-xl relative z-10 shadow-lg shadow-primary/20">
                    {i + 1}
                  </div>
                  <div className="w-10 h-10 mx-auto mb-3">
                    <s.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Testimonials</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Don't just take our word for it — hear from the customers who trust us with their electrical needs.</p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="bg-white border border-border rounded-xl p-7 h-full flex flex-col hover:shadow-md transition">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <IconStar key={i} className="w-4 h-4 text-primary" />)}
                  </div>
                  <p className="text-muted-foreground mb-5 italic flex-1 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-destructive text-destructive-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <motion.div whileInView={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}>
              <IconZap className="w-14 h-14 mx-auto mb-5" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">Electrical Emergency? We're Here 24/7!</h2>
            <p className="mb-8 max-w-lg mx-auto text-lg opacity-90">
              Don't wait when it comes to electrical issues. Our emergency team is ready to respond any time, day or night. Average response time: 30 minutes.
            </p>
            <a href="tel:+1234567890" className="bg-white text-destructive px-8 py-4 rounded-lg inline-flex items-center gap-2 hover:opacity-90 transition shadow-lg text-lg">
              <IconPhone className="w-5 h-5" /> Call Emergency Helpline Now
            </a>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">Ready to Get Started?</h2>
            <p className="max-w-lg mx-auto mb-10 text-gray-300 text-lg leading-relaxed">
              Book your service today and experience safe, reliable, and professional electrical solutions. Let our experts handle the sparks — so you don't have to.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition inline-flex items-center gap-2 text-lg shadow-lg shadow-primary/20">
                Book a Service <IconArrowRight className="w-5 h-5" />
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
