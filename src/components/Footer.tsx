import { Link } from 'react-router-dom';
import {
  Phone,
  MapPin,
  Flame,
  Snowflake,
  Wrench,
  Mail,
  ChevronRight,
} from 'lucide-react';
import { BUSINESS, SERVICES, LOCATIONS } from '@/data/business';

const footerServices = SERVICES.map((s) => ({
  to: `/services/${s.slug}`,
  label: s.shortName,
}));

const footerAreas = LOCATIONS.map((l) => ({
  to: `/service-areas/${l.slug}`,
  label: `${l.name}, ${l.state}`,
}));

const mainLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/service-areas', label: 'Service Areas' },
  { to: '/about', label: 'About' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="container-xl py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-11 h-11 rounded-xl bg-navy-800 flex items-center justify-center">
                <Flame className="w-5 h-5 text-warmorange-500" />
                <Snowflake className="w-4 h-4 text-coolblue-500 -ml-1" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-white text-lg">AColeman</span>
                <span className="text-xs text-navy-400 font-medium">Heating & Cooling</span>
              </div>
            </Link>
            <p className="text-sm text-navy-300 leading-relaxed mb-5">
              Professional heating and cooling services for homes and businesses in Waukegan, IL and the surrounding communities.
            </p>
            <div className="space-y-3">
              <a
                href={BUSINESS.phoneLink}
                className="flex items-center gap-2.5 text-white hover:text-warmorange-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-warmorange-500" />
                <span className="font-medium">{BUSINESS.phone}</span>
              </a>
              <div className="flex items-start gap-2.5 text-navy-300">
                <MapPin className="w-4 h-4 text-coolblue-500 mt-0.5 shrink-0" />
                <span className="text-sm">
                  {BUSINESS.address}<br />
                  {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white text-base mb-5 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-warmorange-500" />
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerServices.map((svc) => (
                <li key={svc.to}>
                  <Link
                    to={svc.to}
                    className="text-sm text-navy-300 hover:text-coolblue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-navy-600 group-hover:text-coolblue-500 transition-colors" />
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display font-semibold text-white text-base mb-5 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-coolblue-500" />
              Service Areas
            </h3>
            <ul className="space-y-2.5 max-h-[280px] overflow-y-auto pr-1">
              {footerAreas.map((area) => (
                <li key={area.to}>
                  <Link
                    to={area.to}
                    className="text-sm text-navy-300 hover:text-coolblue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-navy-600 group-hover:text-coolblue-500 transition-colors shrink-0" />
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-white text-base mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {mainLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-navy-300 hover:text-coolblue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-navy-600 group-hover:text-coolblue-500 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h3 className="font-display font-semibold text-white text-base mb-5">
              Get In Touch
            </h3>
            <p className="text-sm text-navy-300 mb-4 leading-relaxed">
              Need HVAC service? Call us today or visit our contact page to send a message.
            </p>
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center gap-2 bg-warmorange-500 text-white font-semibold px-5 py-3 rounded-xl hover:bg-warmorange-600 transition-all duration-300 shadow-lg shadow-warmorange-500/20 mb-4"
            >
              <Phone className="w-4 h-4" />
              Call {BUSINESS.phone}
            </a>
            <Link
              to="/contact"
              className="block text-sm text-coolblue-400 hover:text-coolblue-300 transition-colors"
            >
              Contact Page →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-navy-400 text-center md:text-left">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-sm text-navy-500">
            {BUSINESS.category} · {BUSINESS.city}, {BUSINESS.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
