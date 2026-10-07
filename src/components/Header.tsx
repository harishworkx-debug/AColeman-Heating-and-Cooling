import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Menu,
  X,
  Flame,
  Snowflake,
  Wrench,
  ChevronDown,
  MapPin,
  Wind,
  ThermometerSun,
  Stethoscope,
  Thermometer,
  RefreshCw,
} from 'lucide-react';
import { BUSINESS, SERVICES, LOCATIONS } from '@/data/business';

const serviceLinks = SERVICES.map((s) => ({
  to: `/${s.slug}-waukegan-il`,
  label: s.shortName,
  icon: s.icon,
}));

const areaLinks = LOCATIONS.map((l) => ({
  to: `/air-conditioning-repair-${l.slug}`,
  label: `${l.name}, ${l.state}`,
}));

const iconMap: Record<string, typeof Flame> = {
  Flame,
  Snowflake,
  Wrench,
  Wind,
  ThermometerSun,
  Stethoscope,
  Thermometer,
  RefreshCw,
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) setAreasOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (path: string) =>
    location.pathname === path || (path !== '/' && location.pathname.startsWith(path));

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-navy-950 text-white text-sm">
        <div className="container-xl flex items-center justify-between py-2">
          <div className="flex items-center gap-2 text-navy-200">
            <MapPin className="w-4 h-4 text-coolblue-400" />
            <span>{BUSINESS.address}, {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}</span>
          </div>
          <a href={BUSINESS.phoneLink} className="flex items-center gap-2 text-white hover:text-coolblue-300 transition-colors font-medium">
            <Phone className="w-4 h-4 text-warmorange-400" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg shadow-navy-900/5'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-navy-900 flex items-center justify-center group-hover:bg-navy-800 transition-colors">
                <Flame className="w-5 h-5 md:w-6 md:h-6 text-warmorange-500" />
                <Snowflake className="w-4 h-4 md:w-5 md:h-5 text-coolblue-500 -ml-1" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-navy-900 text-base md:text-lg">
                  AColeman
                </span>
                <span className="text-xs text-navy-500 font-medium">
                  Heating & Cooling
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                to="/"
                className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                  isActive('/') && location.pathname === '/'
                    ? 'text-coolblue-700 bg-coolblue-50'
                    : 'text-navy-600 hover:text-coolblue-700 hover:bg-navy-50'
                }`}
              >
                Home
              </Link>

              {/* Services dropdown */}
              <div 
                ref={servicesRef} 
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  onClick={() => { setServicesOpen(!servicesOpen); setAreasOpen(false); }}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                    isActive('/services')
                      ? 'text-coolblue-700 bg-coolblue-50'
                      : 'text-navy-600 hover:text-coolblue-700 hover:bg-navy-50'
                  }`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-[440px]">
                    <div className="max-h-[420px] overflow-y-auto bg-white rounded-2xl shadow-2xl shadow-navy-900/10 border border-gray-100 p-3 animate-slide-down">
                      <div className="grid grid-cols-2 gap-1">
                        {serviceLinks.map((svc) => {
                          const Icon = iconMap[svc.icon] || Wrench;
                          return (
                            <Link
                              key={svc.to}
                              to={svc.to}
                              className="flex items-start gap-2.5 p-3 rounded-xl hover:bg-navy-50 transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-navy-100 flex items-center justify-center shrink-0 group-hover:bg-coolblue-100 transition-colors">
                                <Icon className="w-4 h-4 text-navy-600 group-hover:text-coolblue-700" />
                              </div>
                              <span className="text-sm font-medium text-navy-700 group-hover:text-navy-900 pt-1.5">
                                {svc.label}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                      <Link
                        to="/services"
                        className="block mt-2 py-2.5 text-center text-sm font-semibold text-coolblue-700 hover:bg-coolblue-50 rounded-xl transition-colors"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Service Areas dropdown */}
              <div 
                ref={areasRef} 
                className="relative"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <button
                  onClick={() => { setAreasOpen(!areasOpen); setServicesOpen(false); }}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                    isActive('/service-areas')
                      ? 'text-coolblue-700 bg-coolblue-50'
                      : 'text-navy-600 hover:text-coolblue-700 hover:bg-navy-50'
                  }`}
                >
                  Service Areas
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${areasOpen ? 'rotate-180' : ''}`} />
                </button>
                {areasOpen && (
                  <div className="absolute top-full left-0 pt-2 w-64">
                    <div className="max-h-[380px] overflow-y-auto bg-white rounded-2xl shadow-2xl shadow-navy-900/10 border border-gray-100 p-3 animate-slide-down">
                      {areaLinks.map((area) => (
                        <Link
                          key={area.to}
                          to={area.to}
                          className="flex items-center gap-2.5 p-3 rounded-xl hover:bg-navy-50 transition-colors"
                        >
                          <MapPin className="w-4 h-4 text-coolblue-600" />
                          <span className="text-sm font-medium text-navy-700">{area.label}</span>
                        </Link>
                      ))}
                      <Link
                        to="/service-areas"
                        className="block mt-2 py-2.5 text-center text-sm font-semibold text-coolblue-700 hover:bg-coolblue-50 rounded-xl transition-colors"
                      >
                        View All Service Areas →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                  isActive('/about')
                    ? 'text-coolblue-700 bg-coolblue-50'
                    : 'text-navy-600 hover:text-coolblue-700 hover:bg-navy-50'
                }`}
              >
                About
              </Link>

              <Link
                to="/faqs"
                className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                  isActive('/faqs')
                    ? 'text-coolblue-700 bg-coolblue-50'
                    : 'text-navy-600 hover:text-coolblue-700 hover:bg-navy-50'
                }`}
              >
                FAQs
              </Link>

              <Link
                to="/contact"
                className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                  isActive('/contact')
                    ? 'text-coolblue-700 bg-coolblue-50'
                    : 'text-navy-600 hover:text-coolblue-700 hover:bg-navy-50'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Call button (desktop) */}
            <div className="hidden lg:block">
              <a
                href={BUSINESS.phoneLink}
                className="inline-flex items-center gap-2 bg-warmorange-500 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-warmorange-600 transition-all duration-300 shadow-lg shadow-warmorange-500/25 hover:shadow-xl hover:shadow-warmorange-500/30 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-navy-50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6 text-navy-800" /> : <Menu className="w-6 h-6 text-navy-800" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="container-xl py-4 flex flex-col gap-1">
              <Link
                to="/"
                className="px-4 py-3 rounded-xl font-medium text-navy-700 hover:bg-navy-50 transition-colors"
              >
                Home
              </Link>

              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between px-4 py-3 rounded-xl font-medium text-navy-700 hover:bg-navy-50 transition-colors w-full"
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 flex flex-col gap-0.5 mt-1 mb-2">
                  {serviceLinks.map((svc) => (
                    <Link
                      key={svc.to}
                      to={svc.to}
                      className="px-4 py-2.5 rounded-lg text-sm text-navy-600 hover:bg-coolblue-50 hover:text-coolblue-700 transition-colors"
                    >
                      {svc.label}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="px-4 py-2.5 rounded-lg text-sm font-semibold text-coolblue-700 hover:bg-coolblue-50 transition-colors"
                  >
                    View All Services →
                  </Link>
                </div>
              )}

              <button
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                className="flex items-center justify-between px-4 py-3 rounded-xl font-medium text-navy-700 hover:bg-navy-50 transition-colors w-full"
              >
                Service Areas
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileAreasOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileAreasOpen && (
                <div className="pl-4 flex flex-col gap-0.5 mt-1 mb-2">
                  {areaLinks.map((area) => (
                    <Link
                      key={area.to}
                      to={area.to}
                      className="px-4 py-2.5 rounded-lg text-sm text-navy-600 hover:bg-coolblue-50 hover:text-coolblue-700 transition-colors"
                    >
                      {area.label}
                    </Link>
                  ))}
                  <Link
                    to="/service-areas"
                    className="px-4 py-2.5 rounded-lg text-sm font-semibold text-coolblue-700 hover:bg-coolblue-50 transition-colors"
                  >
                    View All Service Areas →
                  </Link>
                </div>
              )}

              <Link
                to="/about"
                className="px-4 py-3 rounded-xl font-medium text-navy-700 hover:bg-navy-50 transition-colors"
              >
                About
              </Link>
              <Link
                to="/faqs"
                className="px-4 py-3 rounded-xl font-medium text-navy-700 hover:bg-navy-50 transition-colors"
              >
                FAQs
              </Link>
              <Link
                to="/contact"
                className="px-4 py-3 rounded-xl font-medium text-navy-700 hover:bg-navy-50 transition-colors"
              >
                Contact
              </Link>

              <a
                href={BUSINESS.phoneLink}
                className="mt-3 flex items-center justify-center gap-2 bg-warmorange-500 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-warmorange-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS.phone}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile sticky call bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-navy-900 border-t border-navy-800 px-4 py-3 shadow-2xl">
        <a
          href={BUSINESS.phoneLink}
          className="flex items-center justify-center gap-2 bg-warmorange-500 text-white font-semibold px-6 py-3 rounded-xl w-full"
        >
          <Phone className="w-5 h-5" />
          Call {BUSINESS.phone}
        </a>
      </div>
    </>
  );
}
