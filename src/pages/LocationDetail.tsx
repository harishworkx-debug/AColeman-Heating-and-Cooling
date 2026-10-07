import { Link, useParams } from 'react-router-dom';
import { MapPin, ArrowRight, Phone, Flame, Snowflake, Wrench, CheckCircle2, ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import CallCTA from '@/components/CallCTA';
import { LOCATIONS, SERVICES, BUSINESS, IMAGES } from '@/data/business';

const iconMap: Record<string, typeof Flame> = {
  Flame,
  Snowflake,
  Wrench,
};

export default function LocationDetail() {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  const location = LOCATIONS.find((l) => l.slug === locationSlug);

  if (!location) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-navy-50">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold text-navy-900 mb-4">Service Area Not Found</h1>
          <p className="text-navy-600 mb-6">The service area page you are looking for does not exist.</p>
          <Link to="/service-areas" className="btn-secondary">
            <ArrowLeft className="w-4 h-4" />
            Back to Service Areas
          </Link>
        </div>
      </div>
    );
  }

  const locationServices = location.services
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <>
      <SEO
        title={`HVAC Services in ${location.name}, ${location.state} | ${BUSINESS.name}`}
        description={`AColeman Heating and Cooling provides heating repair, AC repair, and HVAC maintenance in ${location.name}, ${location.state}. Call ${BUSINESS.phone}.`}
        canonicalPath={`/service-areas/${location.slug}`}
        structuredData={{
          '@type': 'Service',
          name: `HVAC Services in ${location.name}, ${location.state}`,
          provider: {
            '@type': 'HVACBusiness',
            name: BUSINESS.name,
            telephone: BUSINESS.phone,
            address: {
              '@type': 'PostalAddress',
              streetAddress: BUSINESS.address,
              addressLocality: BUSINESS.city,
              addressRegion: BUSINESS.state,
              postalCode: BUSINESS.zip,
              addressCountry: 'US',
            },
          },
          areaServed: { '@type': 'City', name: `${location.name}, ${location.state}` },
        }}
      />

      <section className="relative bg-navy-900 pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={IMAGES.neighborhood}
            alt={`Residential neighborhood in ${location.name}, ${location.state}`}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 to-navy-800/70" />
        <div className="container-xl relative">
          <div className="text-navy-300 mb-6">
            <Breadcrumbs
              crumbs={[
                { label: 'Home', path: '/' },
                { label: 'Service Areas', path: '/service-areas' },
                { label: `${location.name}, ${location.state}` },
              ]}
            />
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-5">
              <MapPin className="w-4 h-4 text-coolblue-400" />
              <span className="text-white text-sm font-medium">{location.name}, {location.state}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-5 text-balance">
              HVAC Services in {location.name}, {location.state}
            </h1>
            <p className="text-navy-200 text-lg leading-relaxed mb-8">
              {location.description}
            </p>
            <CallCTA variant="primary" size="lg" />
          </div>
        </div>
      </section>

      {/* Available services in this location */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-6">
            Available HVAC Services in {location.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locationServices.map((service) => {
              if (!service) return null;
              const Icon = iconMap[service.icon] || Wrench;
              return (
                <div key={service.slug} className="card group">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-5 h-5 text-navy-700" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg text-navy-900 mb-2">
                      {service.name} in {location.name}
                    </h3>
                    <p className="text-navy-600 text-sm leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                    <Link
                      to={`/service-areas/${location.slug}/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-coolblue-700 font-semibold text-sm hover:gap-2.5 transition-all"
                    >
                      {service.name} in {location.name}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-navy-50 py-12">
        <div className="container-xl">
          <div className="rounded-2xl overflow-hidden shadow-xl shadow-navy-900/10">
            <iframe
              src={BUSINESS.mapsEmbed}
              style={{ border: 0, width: '100%', height: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title={`Map of AColeman Heating and Cooling serving ${location.name}, ${location.state}`}
            />
          </div>
        </div>
      </section>

      <CTASection
        title={`Need HVAC Service in ${location.name}?`}
        subtitle={`Call AColeman Heating and Cooling at ${BUSINESS.phone}. We provide heating and cooling services to ${location.name} and the surrounding communities.`}
      />
    </>
  );
}
