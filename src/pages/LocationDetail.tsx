import { Link, useParams } from 'react-router-dom';
import { MapPin, ArrowRight, Phone, Flame, Snowflake, Wrench, CheckCircle2, ArrowLeft, HelpCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import CallCTA from '@/components/CallCTA';
import { LOCATIONS, SERVICES, BUSINESS, IMAGES, FAQS } from '@/data/business';

const iconMap: Record<string, typeof Flame> = {
  Flame,
  Snowflake,
  Wrench,
};

export default function LocationDetail({ resolvedSlug }: { resolvedSlug?: string }) {
  const params = useParams<{ locationSlug: string }>();
  const locationSlug = resolvedSlug || params.locationSlug;
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

  // All 10 services are available in every service area.
  // Using global SERVICES array to ensure full internal linking coverage.
  const locationServices = SERVICES;

  return (
    <>
      <SEO
        title={`HVAC Services in ${location.name}, ${location.state} | ${BUSINESS.name}`}
        description={`AColeman Heating and Cooling provides heating repair, AC repair, and HVAC maintenance in ${location.name}, ${location.state}. Call ${BUSINESS.phone}.`}
        canonicalPath={`/${location.slug}`}
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
                      to={`/${service.slug}-${location.slug}`}
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

      {/* Emergency Service & Why Choose Us */}
      <section className="section-pad bg-navy-50">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="bg-white rounded-2xl p-8 border border-warmorange-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-warmorange-50 rounded-bl-[80px] -z-0"></div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-4">
                  Emergency HVAC Service
                </h2>
                <p className="text-navy-600 leading-relaxed mb-6">
                  Heating and cooling emergencies in {location.name} don't wait for convenient business hours. If you need urgent HVAC assistance, our technicians are ready to respond quickly to restore your home's comfort.
                </p>
                <CallCTA variant="primary" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-4 text-balance">
                Why {location.name} Homeowners Choose AColeman
              </h2>
              {location.slug === 'waukegan-il' ? (
                <p className="text-navy-600 leading-relaxed mb-4">
                  As a Waukegan-based business headquartered at <strong>{BUSINESS.address}</strong>, we consider you our neighbors. When you call us, you're getting an honest local contractor who genuinely cares about the Waukegan community.
                </p>
              ) : (
                <p className="text-navy-600 leading-relaxed mb-4">
                  As a locally owned and operated HVAC contractor, we understand the specific heating and cooling challenges homes face in {location.name}, {location.state}.
                </p>
              )}
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-coolblue-600 mt-0.5 shrink-0" />
                  <span className="text-navy-700 text-sm">We provide upfront, straightforward pricing before any work begins.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-coolblue-600 mt-0.5 shrink-0" />
                  <span className="text-navy-700 text-sm">Our technicians are fully licensed, insured, and experienced with all major HVAC brands.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-coolblue-600 mt-0.5 shrink-0" />
                  <span className="text-navy-700 text-sm">We stand behind our work with robust warranties and a commitment to your satisfaction.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Local Projects */}
      <section className="section-pad bg-white border-b border-gray-100">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-warmorange-100 text-warmorange-800 text-sm font-semibold mb-4">
              Recent Work
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4 text-balance">
              Recent HVAC Projects Near {location.name}
            </h2>
            <p className="text-navy-600 leading-relaxed">
              Take a look at some of the recent heating and cooling repairs and installations we've completed for homeowners in and around {location.name}.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy-50 rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-warmorange-100 flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-warmorange-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900 mb-2">Furnace Replacement</h3>
              <p className="text-navy-600 text-sm leading-relaxed mb-4">
                Replaced an aging, inefficient furnace with a new, high-efficiency model, restoring reliable winter heating for a local family.
              </p>
            </div>
            <div className="bg-navy-50 rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-coolblue-100 flex items-center justify-center mb-4">
                <Snowflake className="w-6 h-6 text-coolblue-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900 mb-2">Emergency AC Repair</h3>
              <p className="text-navy-600 text-sm leading-relaxed mb-4">
                Diagnosed and repaired a failed AC compressor during a summer heatwave, quickly restoring cooling and comfort.
              </p>
            </div>
            <div className="bg-navy-50 rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-navy-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900 mb-2">Routine Maintenance</h3>
              <p className="text-navy-600 text-sm leading-relaxed mb-4">
                Performed comprehensive pre-season maintenance on a dual HVAC system to ensure optimal performance and longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad bg-navy-50">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-coolblue-100 text-coolblue-800 text-sm font-semibold mb-4">
                FAQ
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-4 text-balance">
                Common HVAC Questions in {location.name}
              </h2>
            </div>
            <div className="space-y-4">
              {FAQS.slice(0, 5).map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-white rounded-xl border border-gray-100 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="font-semibold text-navy-800 pr-4">{faq.q}</span>
                    <HelpCircle className="w-5 h-5 text-coolblue-500 shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5 text-navy-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
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
