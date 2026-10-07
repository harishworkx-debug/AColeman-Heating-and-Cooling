import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Phone, Flame, Snowflake, Wrench } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import CallCTA from '@/components/CallCTA';
import { LOCATIONS, SERVICES, BUSINESS } from '@/data/business';

export default function ServiceAreas() {
  return (
    <>
      <SEO
        title="HVAC Service Areas | AColeman Heating and Cooling"
        description="AColeman Heating and Cooling provides HVAC services in Waukegan, IL and surrounding communities. Heating repair, AC repair, installation, and maintenance. Call 224-659-6849."
        canonicalPath="/service-areas"
        structuredData={{
          '@type': 'Service',
          name: 'HVAC Service Areas',
          provider: { '@type': 'HVACBusiness', name: BUSINESS.name },
          areaServed: { '@type': 'City', name: 'Waukegan, IL' },
        }}
      />

      <section className="bg-navy-900 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container-xl">
          <div className="text-navy-300 mb-6">
            <Breadcrumbs crumbs={[{ label: 'Home', path: '/' }, { label: 'Service Areas' }]} />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-5 text-balance">
              HVAC Service Areas
            </h1>
            <p className="text-navy-200 text-lg leading-relaxed">
              AColeman Heating and Cooling is based in Waukegan, Illinois and provides heating and cooling services to the surrounding communities. If you are in or near Waukegan and need HVAC service, give us a call.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LOCATIONS.map((location) => (
              <div key={location.slug} className="card p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-coolblue-100 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-coolblue-700" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-xl text-navy-900">
                      {location.name}, {location.state}
                    </h2>
                    <p className="text-sm text-navy-500">Primary Service Area</p>
                  </div>
                </div>
                <p className="text-navy-600 text-sm leading-relaxed mb-5">
                  {location.description}
                </p>
                <div className="space-y-2 mb-5">
                  {location.services.map((svcSlug) => {
                    const svc = SERVICES.find((s) => s.slug === svcSlug);
                    if (!svc) return null;
                    return (
                      <Link
                        key={svcSlug}
                        to={`/${svcSlug}-${location.slug}`}
                        className="flex items-center gap-2 p-3 rounded-lg bg-navy-50 hover:bg-coolblue-50 transition-colors group"
                      >
                        <span className="text-sm font-medium text-navy-700 group-hover:text-coolblue-700">
                          {svc.name} in {location.name}
                        </span>
                        <ArrowRight className="w-4 h-4 text-navy-400 group-hover:text-coolblue-600 ml-auto transition-all group-hover:translate-x-1" />
                      </Link>
                    );
                  })}
                </div>
                <Link
                  to={`/air-conditioning-repair-${location.slug}`}
                  className="inline-flex items-center gap-2 text-coolblue-700 font-semibold text-sm hover:gap-3 transition-all"
                >
                  View {location.name} Service Area
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 p-8 bg-navy-50 rounded-2xl text-center">
            <h2 className="text-xl font-display font-bold text-navy-900 mb-3">
              Not Sure If We Serve Your Area?
            </h2>
            <p className="text-navy-600 mb-5 max-w-xl mx-auto">
              Give us a call at {BUSINESS.phone} and we will let you know if we can help with your heating or cooling needs.
            </p>
            <CallCTA variant="primary" size="lg" />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
