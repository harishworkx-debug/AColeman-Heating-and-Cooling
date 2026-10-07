import { Link } from 'react-router-dom';
import {
  Flame,
  Snowflake,
  Wrench,
  ShieldCheck,
  MessageCircle,
  Search,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import CallCTA from '@/components/CallCTA';
import { BUSINESS, IMAGES } from '@/data/business';

const values = [
  {
    icon: ShieldCheck,
    title: 'Professional Service',
    description:
      'We approach every heating and cooling job with attention to detail and a focus on identifying the real problem before recommending a solution.',
  },
  {
    icon: MessageCircle,
    title: 'Clear Communication',
    description:
      'We explain what we find in straightforward terms so you understand what is happening with your HVAC system and what service is needed.',
  },
  {
    icon: Search,
    title: 'Thorough Diagnostics',
    description:
      'We work through each system systematically to diagnose the root cause, rather than guessing or replacing parts unnecessarily.',
  },
  {
    icon: Wrench,
    title: 'Attention to Detail',
    description:
      'We test our work, confirm proper operation, and answer your questions before we leave — so you know the job is done right.',
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About AColeman Heating and Cooling | Waukegan HVAC Contractor"
        description="Learn about AColeman Heating and Cooling, a heating contractor based in Waukegan, IL. We provide professional heating, cooling, and HVAC services to the surrounding communities."
        canonicalPath="/about"
        structuredData={{
          '@type': 'AboutPage',
          name: `About ${BUSINESS.name}`,
          url: `https://acolemanhvac.com/about`,
        }}
      />

      <section className="bg-navy-900 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container-xl">
          <div className="text-navy-300 mb-6">
            <Breadcrumbs crumbs={[{ label: 'Home', path: '/' }, { label: 'About' }]} />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-5 text-balance">
              About AColeman Heating and Cooling
            </h1>
            <p className="text-navy-200 text-lg leading-relaxed">
              AColeman Heating and Cooling is a heating contractor based in Waukegan, Illinois, providing professional HVAC services for homes and businesses in the surrounding communities.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-coolblue-100 text-coolblue-800 text-sm font-semibold mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6 text-balance">
                A Local Waukegan HVAC Contractor
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  AColeman Heating and Cooling is located at {BUSINESS.address} in {BUSINESS.city}, {BUSINESS.state}. As a local heating contractor, we provide heating, cooling, and HVAC services to homes and businesses in Waukegan and the surrounding communities.
                </p>
                <p>
                  We focus on heating and cooling repair, installation, maintenance, and troubleshooting. Whether your furnace has stopped working during a cold Illinois winter or your air conditioner is not cooling on a hot summer day, we work through the problem methodically to identify the cause and provide the appropriate service.
                </p>
                <p>
                  Our approach is straightforward: clear communication, thorough diagnostics, and attention to detail on every job. We explain what we find and what service is needed so you can make informed decisions about your heating and cooling system.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-xl h-64">
                <img
                  src={IMAGES.techRepair}
                  alt="HVAC technician repairing an air conditioning unit"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl h-64 mt-8">
                <img
                  src={IMAGES.thermostatHand}
                  alt="Hand adjusting a modern smart thermostat on a wall"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl h-64 -mt-4">
                <img
                  src={IMAGES.livingRoom}
                  alt="Comfortable modern living room interior"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl h-64 mt-4">
                <img
                  src={IMAGES.ductwork}
                  alt="HVAC ductwork and ventilation system"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-pad bg-navy-50">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-warmorange-100 text-warmorange-800 text-sm font-semibold mb-4">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4 text-balance">
              Heating and Cooling Expertise
            </h2>
            <p className="text-navy-600 leading-relaxed">
              We provide a full range of HVAC services for residential and commercial properties in Waukegan and the surrounding communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-warmorange-100 flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-warmorange-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900 mb-2">Heating</h3>
              <ul className="space-y-1.5 text-sm text-navy-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-warmorange-500" /> Heating Repair</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-warmorange-500" /> Furnace Repair</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-warmorange-500" /> Heating Installation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-warmorange-500" /> Heating Troubleshooting</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-coolblue-100 flex items-center justify-center mb-4">
                <Snowflake className="w-6 h-6 text-coolblue-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900 mb-2">Cooling</h3>
              <ul className="space-y-1.5 text-sm text-navy-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-coolblue-500" /> AC Repair</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-coolblue-500" /> AC Installation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-coolblue-500" /> Cooling Troubleshooting</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-navy-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900 mb-2">HVAC</h3>
              <ul className="space-y-1.5 text-sm text-navy-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-navy-500" /> HVAC Maintenance</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-navy-500" /> HVAC Diagnostics</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-navy-500" /> Thermostat Services</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-navy-500" /> System Replacement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy-100 text-navy-700 text-sm font-semibold mb-4">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4 text-balance">
              Our Approach to HVAC Service
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-2xl bg-navy-50 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-coolblue-500 to-coolblue-700 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-navy-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-navy-50 py-16">
        <div className="container-xl">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="font-display font-bold text-xl text-navy-900 mb-4">Our Location</h3>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-warmorange-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-navy-800">{BUSINESS.name}</p>
                  <p className="text-navy-600 text-sm">
                    {BUSINESS.address}<br />
                    {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}<br />
                    {BUSINESS.country}
                  </p>
                </div>
              </div>
              <a
                href={BUSINESS.phoneLink}
                className="flex items-center gap-3 mb-2"
              >
                <Phone className="w-5 h-5 text-warmorange-500" />
                <span className="font-semibold text-navy-800">{BUSINESS.phone}</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-coolblue-700 font-semibold text-sm hover:gap-3 transition-all mt-3"
              >
                Contact Page
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="md:col-span-2 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={BUSINESS.mapsEmbed}
                style={{ border: 0, width: '100%', height: '280px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title={`Map showing ${BUSINESS.name} in Waukegan, IL`}
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
