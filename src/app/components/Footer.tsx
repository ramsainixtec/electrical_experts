import { Link } from "react-router";
import { ScrollReveal } from "./ScrollReveal";
import {
  IconZap, IconPhone, IconMail, IconMapPin,
  IconFacebook, IconInstagram, IconTwitter, IconLinkedin, IconYoutube, IconArrowRight,
} from "./Icons";

const socials = [
  { Icon: IconFacebook, label: "Facebook" },
  { Icon: IconInstagram, label: "Instagram" },
  { Icon: IconTwitter, label: "Twitter" },
  { Icon: IconLinkedin, label: "LinkedIn" },
  { Icon: IconYoutube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <IconZap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-lg text-white block leading-tight">SparkPro</span>
                  <span className="text-xs text-primary leading-tight">ELECTRICAL SERVICES</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                Certified electricians delivering safe, reliable, and affordable electrical solutions. Available 24/7 for emergency service.
              </p>
              <a href="tel:+1234567890" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm hover:bg-primary/90 transition">
                <IconPhone className="w-4 h-4" /> Emergency Helpline
              </a>
            </div>

            <div>
              <h4 className="text-primary mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2.5 text-sm text-gray-400">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/services", label: "Services" },
                  { to: "/why-us", label: "Why Choose Us" },
                  { to: "/contact", label: "Contact" },
                ].map((l) => (
                  <Link key={l.to} to={l.to} className="hover:text-primary transition flex items-center gap-1 group">
                    <IconArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-primary mb-4">Our Services</h4>
              <div className="flex flex-col gap-2.5 text-sm text-gray-400">
                {["Wiring & Rewiring", "Lighting Installation", "Fault Detection", "Power Backup", "CCTV & Security", "Emergency Support"].map((s) => (
                  <Link key={s} to="/services" className="hover:text-primary transition flex items-center gap-1 group">
                    <IconArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                    {s}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-primary mb-4">Contact Info</h4>
              <div className="flex flex-col gap-3 text-sm text-gray-400 mb-6">
                <div className="flex items-start gap-2"><IconMapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 123 Main Street, Your City, State 12345</div>
                <div className="flex items-center gap-2"><IconPhone className="w-4 h-4 text-primary shrink-0" /> +1 (234) 567-890</div>
                <div className="flex items-center gap-2"><IconMail className="w-4 h-4 text-primary shrink-0" /> info@sparkpro.com</div>
              </div>

              <h4 className="text-primary mb-3">Follow Us</h4>
              <div className="flex gap-2.5">
                {socials.map(({ Icon, label }) => (
                  <a key={label} href="#" title={label} className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>&copy; 2026 SparkPro Electric. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
