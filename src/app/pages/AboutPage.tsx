import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import {
  IconTarget, IconLightbulb, IconShield, IconGem, IconHandshake, IconClock,
  IconBook, IconCheckCircle, IconStar, IconArrowRight, IconUsers, IconAward,
  IconThumbsUp, IconTrendingUp,
} from "../components/Icons";

const teamImg = "https://images.unsplash.com/photo-1625148230889-8195e85aae6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHRlYW0lMjB1bmlmb3JtJTIwc2VydmljZSUyMHZhbnxlbnwxfHx8fDE3NzU2MzA3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const safetyImg = "https://images.unsplash.com/photo-1659353586855-83f3bbb6bd90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHNhZmV0eSUyMGdlYXIlMjB3b3JraW5nfGVufDF8fHx8MTc3NTYzMDc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const panelImg = "https://images.unsplash.com/photo-1660330590022-9f4ff56b63f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjBlbGVjdHJpY2FsJTIwcGFuZWwlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc1NjMwMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const values = [
  { icon: IconShield, title: "Safety First", desc: "Every job follows strict safety protocols. We never compromise on safety standards." },
  { icon: IconGem, title: "Quality Workmanship", desc: "We use premium materials and proven techniques. No cutting corners, ever." },
  { icon: IconHandshake, title: "Customer Trust", desc: "Honesty and transparency in every interaction. We build lasting relationships." },
  { icon: IconClock, title: "Reliability", desc: "On time, every time. We respect your schedule and deliver as promised." },
  { icon: IconBook, title: "Continuous Learning", desc: "Always up-to-date with the latest electrical tech, codes, and best practices." },
];

const certs = [
  "Licensed Electrical Contractors",
  "10+ Years of Industry Experience",
  "Fully Insured & Bonded",
  "Trained in Latest Safety Standards",
  "5000+ Successful Projects Completed",
  "Background-Checked Professionals",
  "Advanced Diagnostic Equipment",
  "Green Energy Certified",
];

const team = [
  { name: "Rajesh Kumar", role: "Lead Electrician", initials: "RK", exp: "15 years", speciality: "Commercial Wiring" },
  { name: "Sunita Patel", role: "Safety Inspector", initials: "SP", exp: "12 years", speciality: "Safety Compliance" },
  { name: "Vikram Singh", role: "Senior Technician", initials: "VS", exp: "10 years", speciality: "Smart Home Systems" },
  { name: "Deepak Sharma", role: "Project Manager", initials: "DS", exp: "8 years", speciality: "Large Installations" },
];

const timeline = [
  { year: "2014", title: "Founded", desc: "Started as a small local electrical service with 2 technicians." },
  { year: "2016", title: "Growing Strong", desc: "Expanded team to 10 electricians. Launched 24/7 emergency services." },
  { year: "2019", title: "Major Milestone", desc: "Completed 2000+ projects. Added commercial & industrial services." },
  { year: "2022", title: "Industry Leader", desc: "Became the region's most trusted electrical service provider." },
  { year: "2026", title: "Today", desc: "5000+ projects, 50+ team members, serving 20+ areas. Still growing!" },
];

const stats = [
  { value: "5000+", label: "Projects Done", icon: IconThumbsUp },
  { value: "50+", label: "Team Members", icon: IconUsers },
  { value: "98%", label: "Happy Clients", icon: IconStar },
  { value: "20+", label: "Service Areas", icon: IconTrendingUp },
];

export function AboutPage() {
  return (
    <div>
      {/* Banner */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <ImageWithFallback src={teamImg} alt="Team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <ScrollReveal>
            <span className="text-primary text-sm tracking-widest uppercase mb-3 block">About SparkPro</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 max-w-2xl">Meet Your Trusted Electricians</h1>
            <p className="text-gray-300 max-w-xl text-lg">Years of experience. Thousands of satisfied customers. One commitment: quality, safety, and your complete satisfaction.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Bar */}
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

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Our Story</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are a team of experienced and certified electricians dedicated to delivering top-notch electrical solutions for homes, offices, and commercial spaces. What started as a small local service has grown into a trusted name in the industry.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our unwavering focus on safety, quality, and customer satisfaction has been the cornerstone of our growth. Every wire we connect and every switch we install reflects our passion for doing the job right — the first time, every time.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We invest heavily in training, tools, and technology to ensure our team stays at the forefront of the electrical services industry. From traditional wiring to smart home installations, we've evolved with the times while keeping our core values intact.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="relative">
              <ImageWithFallback src={safetyImg} alt="Electrician working" className="rounded-2xl w-full h-[450px] object-cover shadow-xl" />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-xl shadow-lg max-w-[200px]">
                <IconAward className="w-8 h-8 text-primary mb-2" />
                <p className="text-sm">Award-winning service since 2014</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Our Journey</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">How We Got Here</h2>
            </div>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
            {timeline.map((t, i) => (
              <ScrollReveal key={t.year} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
                <div className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:text-${i % 2 === 0 ? "right" : "left"}`}>
                  <div className={`flex-1 hidden md:block ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <p className="text-primary text-lg">{t.year}</p>
                    <h3 className="mb-1">{t.title}</h3>
                    <p className="text-muted-foreground text-sm">{t.desc}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-1 z-10 ring-4 ring-white" />
                  <div className={`flex-1 hidden md:block ${i % 2 === 0 ? "pl-8" : "pr-8"}`} />
                  <div className="md:hidden pl-10">
                    <p className="text-primary text-lg">{t.year}</p>
                    <h3 className="mb-1">{t.title}</h3>
                    <p className="text-muted-foreground text-sm">{t.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Our Purpose</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl">What Drives Us</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="bg-white p-10 rounded-2xl text-center shadow-sm border border-border hover:shadow-md transition h-full">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-5">
                  <IconTarget className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">To provide safe, reliable, and affordable electrical services that make life easier and homes safer for every customer we serve. We strive to set the standard for excellence in the electrical services industry.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-white p-10 rounded-2xl text-center shadow-sm border border-border hover:shadow-md transition h-full">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-5">
                  <IconLightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">To become the most trusted electrical service provider in the region — known for quality, integrity, and innovation. We aim to power every home and business with confidence and care.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Our Values</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl">What We Stand For</h2>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6" staggerDelay={0.08}>
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-md transition h-full group">
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <v.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h4 className="mb-2">{v.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-4">
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Our Team</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">The Experts Behind the Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Our team consists of licensed, background-checked, and highly trained electricians who bring years of field experience to every project. From residential repairs to complex commercial installations, our professionals have the skills to handle it all.</p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12" staggerDelay={0.1}>
            {team.map((t) => (
              <StaggerItem key={t.name}>
                <div className="bg-white rounded-2xl p-7 text-center shadow-sm border border-border hover:shadow-lg transition group">
                  <div className="w-24 h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-5 text-2xl group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                    {t.initials}
                  </div>
                  <h4 className="text-lg">{t.name}</h4>
                  <p className="text-primary text-sm mb-3">{t.role}</p>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>Experience: {t.exp}</p>
                    <p>Speciality: {t.speciality}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Credentials</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6">Certified. Experienced. Trusted.</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">Our team's qualifications and experience set us apart. We maintain the highest standards of professional excellence and continuously invest in our team's development.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {certs.map((c) => (
                  <div key={c} className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm">
                    <IconCheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <ImageWithFallback src={panelImg} alt="Professional work" className="rounded-2xl w-full h-[400px] object-cover shadow-xl" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Client Words</span>
            <h2 className="text-2xl sm:text-3xl mb-10">Trusted by Thousands</h2>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-border">
              <div className="flex gap-1 justify-center mb-4">
                {[...Array(5)].map((_, i) => <IconStar key={i} className="w-5 h-5 text-primary" />)}
              </div>
              <p className="text-lg text-muted-foreground italic leading-relaxed mb-6">
                "Their professionalism is unmatched. From the first call to the final check, everything was smooth. The team arrived on time, explained every step of the process, and left the place cleaner than they found it. We've been using SparkPro for 3 years now and wouldn't trust anyone else with our electrical needs."
              </p>
              <p>— Satisfied Customer</p>
              <p className="text-sm text-muted-foreground">Property Manager, Sunrise Apartments</p>
            </div>
            <p className="text-muted-foreground mt-8 max-w-lg mx-auto leading-relaxed">
              We've earned our reputation the old-fashioned way — through hard work, honest pricing, and consistently excellent results. Every customer matters to us.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 text-white">Ready to Work With Us?</h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg">Experience the difference of working with a truly professional electrical team. Contact us today for a free consultation.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition inline-flex items-center gap-2 text-lg shadow-lg shadow-primary/20">
                Contact Us <IconArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition text-lg">
                Our Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
