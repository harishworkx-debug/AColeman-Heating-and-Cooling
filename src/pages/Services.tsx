import { Link } from 'react-router-dom';
import {
  Flame,
  Snowflake,
  Wrench,
  ArrowRight,
  Stethoscope,
  Thermometer,
  RefreshCw,
  CheckCircle2,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import { SERVICES, SERVICE_CATEGORIES, BUSINESS, IMAGES } from '@/data/business';

const iconMap: Record<string, typeof Flame> = {
  Flame,
  Snowflake,
  Wrench,
  Stethoscope,
  Thermometer,
  RefreshCw,
};

const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
  warmorange: { bg: 'bg-warmorange-100', text: 'text-warmorange-700', ring: 'ring-warmorange-200' },
  coolblue: { bg: 'bg-coolblue-100', text: 'text-coolblue-700', ring: 'ring-coolblue-200' },
  navy: { bg: 'bg-navy-100', text: 'text-navy-700', ring: 'ring-navy-200' },
};

export default function Services() {
  return (
    <>
      <SEO
        title="HVAC Services in Waukegan IL | AColeman Heating and Cooling"
        description="Professional HVAC services in Waukegan, IL — heating repair, furnace repair, AC repair, AC installation, HVAC maintenance, diagnostics, thermostat services, and system replacement. Call 224-659-6849."
        canonicalPath="/services"
        structuredData={{
          '@type': 'Service',
          name: 'HVAC Services',
          provider: { '@type': 'HVACBusiness', name: BUSINESS.name },
          areaServed: { '@type': 'City', name: 'Waukegan, IL' },
        }}
      />

      {/* Page header */}
      <section className="bg-navy-900 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container-xl">
          <Breadcrumbs crumbs={[{ label: 'Home', path: '/' }, { label: 'Services' }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-5 text-balance">
              HVAC Services in Waukegan, IL
            </h1>
            <p className="text-navy-200 text-lg leading-relaxed">
              AColeman Heating and Cooling provides professional heating, cooling, and HVAC services for homes and businesses in Waukegan, Illinois. From furnace repair to AC installation and ongoing maintenance, we handle the HVAC needs of our community.
            </p>
          </div>
        </div>
      </section>

      {/* Category sections */}
      {SERVICE_CATEGORIES.map((category) => {
        const catServices = SERVICES.filter((s) => (category.services as readonly string[]).includes(s.slug));
        const Icon = iconMap[category.icon] || Wrench;
        const colors = colorMap[category.color];

        return (
          <section key={category.name} className="section-pad odd:bg-white even:bg-navy-50">
            <div className="container-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ring-1 ${colors.ring}`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-900">
                  {category.name} Services
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catServices.map((service) => {
                  const SvcIcon = iconMap[service.icon] || Wrench;
                  return (
                    <div key={service.slug} className="card group">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
                        <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center">
                          <SvcIcon className="w-5 h-5 text-navy-700" />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-display font-bold text-lg text-navy-900 mb-2">
                          {service.name}
                        </h3>
                        <p className="text-navy-600 text-sm leading-relaxed mb-4">
                          {service.shortDescription}
                        </p>
                        <Link
                          to={`/${service.slug}`}
                          className="inline-flex items-center gap-1.5 text-coolblue-700 font-semibold text-sm hover:gap-2.5 transition-all"
                        >
                          {service.cta}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Service overview banner */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-16">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-warmorange-500/20 border border-warmorange-500/30 flex items-center justify-center mx-auto mb-4">
                <Flame className="w-7 h-7 text-warmorange-400" />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">Heating</h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                Furnace repair, heating installation, and heating system troubleshooting for Illinois winters.
              </p>
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-coolblue-500/20 border border-coolblue-500/30 flex items-center justify-center mx-auto mb-4">
                <Snowflake className="w-7 h-7 text-coolblue-400" />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">Cooling</h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                AC repair, AC installation, and cooling troubleshooting for comfortable Illinois summers.
              </p>
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">HVAC</h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                Maintenance, diagnostics, thermostat services, and complete system replacement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
