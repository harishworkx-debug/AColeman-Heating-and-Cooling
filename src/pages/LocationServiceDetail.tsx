import { Link, useParams } from 'react-router-dom';
import {
  Flame,
  Snowflake,
  Wrench,
  ArrowRight,
  Stethoscope,
  Thermometer,
  RefreshCw,
  CheckCircle2,
  ArrowLeft,
  MapPin,
  AlertTriangle,
  HelpCircle,
  Phone,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import CallCTA from '@/components/CallCTA';
import { LOCATIONS, SERVICES, BUSINESS, IMAGES } from '@/data/business';

const iconMap: Record<string, typeof Flame> = {
  Flame,
  Snowflake,
  Wrench,
  Stethoscope,
  Thermometer,
  RefreshCw,
};

export default function LocationServiceDetail() {
  const { locationSlug, serviceSlug } = useParams<{
    locationSlug: string;
    serviceSlug: string;
  }>();

  const location = LOCATIONS.find((l) => l.slug === locationSlug);
  const service = SERVICES.find((s) => s.slug === serviceSlug);

  if (!location || !service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-navy-50">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold text-navy-900 mb-4">Page Not Found</h1>
          <p className="text-navy-600 mb-6">The page you are looking for does not exist.</p>
          <Link to="/service-areas" className="btn-secondary">
            <ArrowLeft className="w-4 h-4" />
            Back to Service Areas
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Wrench;

  const structuredData = {
    '@type': 'Service',
    name: `${service.name} in ${location.name}, ${location.state}`,
    description: `${service.metaDescription} Serving ${location.name}, ${location.state}.`,
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
  };

  return (
    <>
      <SEO
        title={`${service.name} in ${location.name}, ${location.state} | ${BUSINESS.name}`}
        description={`${service.metaDescription} Serving ${location.name}, ${location.state}. Call ${BUSINESS.phone}.`}
        canonicalPath={`/service-areas/${location.slug}/${service.slug}`}
        ogImage={service.image}
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="relative bg-navy-900 pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={service.image}
            alt={service.alt}
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
                { label: `${location.name}, ${location.state}`, path: `/service-areas/${location.slug}` },
                { label: service.shortName },
              ]}
            />
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5" />
                {location.name}, {location.state}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-5 text-balance">
              {service.name} in {location.name}, {location.state}
            </h1>
            <p className="text-navy-200 text-lg leading-relaxed mb-8">
              If you need {service.name.toLowerCase()} in {location.name}, {location.state}, AColeman Heating and Cooling is nearby and ready to help. {service.intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <CallCTA variant="primary" size="lg" />
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-4 rounded-xl hover:bg-white hover:text-navy-900 transition-all duration-300 backdrop-blur-sm text-lg"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems for this location */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy-100 text-navy-700 text-sm font-semibold mb-4">
              Common Problems in {location.name}
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-6">
              {service.name} Issues We Help With in {location.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.problems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-start gap-3 p-4 rounded-xl bg-navy-50"
                >
                  <AlertTriangle className="w-5 h-5 text-warmorange-500 shrink-0 mt-0.5" />
                  <span className="text-navy-700 text-sm leading-relaxed">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms specific to this location */}
      <section className="section-pad bg-navy-50">
        <div className="container-xl">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-coolblue-100 text-coolblue-800 text-sm font-semibold mb-4">
              Signs & Symptoms
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-6">
              Recognizing {service.name} Problems in {location.name}
            </h2>
            <div className="space-y-4">
              {service.symptoms.map((symptom) => (
                <div
                  key={symptom.title}
                  className="bg-white rounded-xl p-5 border border-gray-100"
                >
                  <h3 className="font-display font-semibold text-navy-900 mb-2 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-coolblue-600" />
                    {symptom.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed">
                    {symptom.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-warmorange-100 text-warmorange-800 text-sm font-semibold mb-4">
              Our Process
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-4 text-balance">
              How {service.name} Works in {location.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.process.map((step, i) => (
              <div key={i} className="bg-navy-50 rounded-2xl p-6 border border-gray-100">
                <span className="font-display font-bold text-3xl text-coolblue-200 block mb-3">
                  0{i + 1}
                </span>
                <h3 className="font-display font-bold text-lg text-navy-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
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
                {service.name} FAQs in {location.name}
              </h2>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq) => (
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

      <CTASection
        title={`Need ${service.name} in ${location.name}?`}
        subtitle={`Call AColeman Heating and Cooling at ${BUSINESS.phone}. We provide ${service.name.toLowerCase()} to ${location.name} and the surrounding communities.`}
      />
    </>
  );
}
