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
  AlertCircle,
  Award,
  Users
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

      {/* Who We Are & Meet the Owner */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-coolblue-100 text-coolblue-800 text-sm font-semibold mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6 text-balance">
                Your Trusted Waukegan HVAC Contractor
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed mb-10">
                <p>
                  AColeman Heating and Cooling is located at {BUSINESS.address} in {BUSINESS.city}, {BUSINESS.state}. As a local, fully licensed, and insured heating contractor, we provide professional heating, cooling, and HVAC services to homes and businesses across Waukegan and the surrounding communities.
                </p>
                <p>
                  We service all major brands of HVAC equipment and bring years of hands-on experience to every job. Our goal is to ensure your home remains comfortable and safe, whether it's the peak of summer or the dead of winter.
                </p>
              </div>

              <span className="inline-block px-4 py-1.5 rounded-full bg-warmorange-100 text-warmorange-800 text-sm font-semibold mb-4">
                Meet the Owner
              </span>
              <h3 className="text-2xl font-display font-bold text-navy-900 mb-4">
                Led by Jamie, Owner & Lead Technician
              </h3>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  AColeman Heating and Cooling is proudly led by Jamie, a highly experienced and bilingual HVAC professional. Jamie is known throughout Waukegan for his unmatched professionalism, quality of work, and commitment to doing things right the first time.
                </p>
                <p>
                  We believe in honest work. When you call AColeman, you are getting a dedicated team that cares about the Waukegan community and stands behind every repair, installation, and maintenance check with solid warranties and guaranteed satisfaction.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:sticky lg:top-8">
              <div className="rounded-2xl overflow-hidden shadow-xl h-64">
                <img
                  src={IMAGES.techRepair}
                  alt="Jamie, Owner of AColeman Heating and Cooling, repairing an AC unit"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl h-64 mt-8">
                <img
                  src={IMAGES.thermostatHand}
                  alt="Professional thermostat installation and testing"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl h-64 -mt-4">
                <img
                  src={IMAGES.livingRoom}
                  alt="Comfortable Waukegan home after HVAC service"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl h-64 mt-4">
                <img
                  src={IMAGES.ductwork}
                  alt="Clean and efficient HVAC ductwork"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 bg-navy-900 text-white border-y border-navy-800">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-warmorange-400" />
              <span className="font-semibold text-sm md:text-base">Licensed & Insured</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Award className="w-8 h-8 text-warmorange-400" />
              <span className="font-semibold text-sm md:text-base">All Brands Serviced</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Wrench className="w-8 h-8 text-warmorange-400" />
              <span className="font-semibold text-sm md:text-base">Expert Workmanship</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Users className="w-8 h-8 text-warmorange-400" />
              <span className="font-semibold text-sm md:text-base">Bilingual Service (English/Spanish)</span>
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
              Our Approach to HVAC Repair
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4 text-balance">
              Why Waukegan Homeowners Choose Us
            </h2>
            <p className="text-navy-600 leading-relaxed">
              When your heating or cooling fails, you need a contractor who works with urgency, honesty, and precision. Here is how we approach every service call.
            </p>
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

      {/* Emergency & Service Area */}
      <section className="section-pad bg-navy-50">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Emergency Service */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-warmorange-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-warmorange-50 rounded-bl-[100px] -z-0"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-warmorange-100 flex items-center justify-center mb-6">
                  <AlertCircle className="w-7 h-7 text-warmorange-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-4">
                  Emergency HVAC Service
                </h2>
                <p className="text-navy-600 leading-relaxed mb-6">
                  HVAC emergencies rarely happen during convenient hours. Whether it's a furnace failure on a freezing Waukegan night or an AC breakdown during a humid summer weekend, we offer emergency repair services to get your home back to a safe, comfortable temperature as quickly as possible.
                </p>
                <CallCTA variant="primary" />
              </div>
            </div>

            {/* Service Area */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-coolblue-100 text-coolblue-800 text-sm font-semibold mb-4">
                Local Coverage
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6 text-balance">
                Our Service Area
              </h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Based in Waukegan, IL, AColeman Heating and Cooling is proud to serve Lake County and the surrounding areas. Because we are locally operated, we can respond to calls quickly and efficiently.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {['Waukegan, IL', 'Gurnee, IL', 'North Chicago, IL', 'Beach Park, IL', 'Zion, IL', 'Park City, IL'].map((city) => (
                  <li key={city} className="flex items-center gap-2 text-navy-700">
                    <MapPin className="w-4 h-4 text-warmorange-500 shrink-0" />
                    <span className="font-medium">{city}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-2 text-coolblue-700 font-semibold hover:gap-3 transition-all"
              >
                View Complete Service Area
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
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
