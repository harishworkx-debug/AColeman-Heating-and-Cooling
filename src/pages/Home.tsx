import { Link } from 'react-router-dom';
import {
  Flame,
  Snowflake,
  Wrench,
  ArrowRight,
  Stethoscope,
  Thermometer,
  RefreshCw,
  ShieldCheck,
  MessageCircle,
  Search,
  Wrench as ToolIcon,
  PhoneCall,
  MapPin,
  CheckCircle2,
  Star,
} from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import CTASection from '@/components/CTASection';
import MapSection from '@/components/MapSection';
import { BUSINESS, SERVICES, IMAGES } from '@/data/business';

const iconMap: Record<string, typeof Flame> = {
  Flame,
  Snowflake,
  Wrench,
  Stethoscope,
  Thermometer,
  RefreshCw,
};

const heatingProblems = [
  'Furnace not heating',
  'Weak airflow',
  'Strange furnace noises',
  'Frequent cycling',
  'Thermostat problems',
  'Uneven heating',
  'System won\'t start',
  'Unexpected heating issues',
];

const coolingProblems = [
  'AC blowing warm air',
  'Weak airflow',
  'Uneven cooling',
  'Strange noises',
  'Frequent cycling',
  'Thermostat problems',
  'System not starting',
  'Cooling performance issues',
];

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: 'Professional HVAC Service',
    description:
      'We approach every heating and cooling job with attention to detail and a focus on identifying the real problem before recommending a solution.',
  },
  {
    icon: MessageCircle,
    title: 'Clear Communication',
    description:
      'We explain what we find in straightforward terms so you understand what is happening with your system and what service is needed.',
  },
  {
    icon: Search,
    title: 'Thorough Troubleshooting',
    description:
      'We work through each system systematically to diagnose the root cause, rather than guessing or replacing parts unnecessarily.',
  },
  {
    icon: Flame,
    title: 'Heating Expertise',
    description:
      'From furnaces and heating systems to thermostats and heat pumps, we service the heating equipment that keeps Waukegan homes warm.',
  },
  {
    icon: Snowflake,
    title: 'Cooling Expertise',
    description:
      'We repair and install air conditioning systems to keep your home comfortable through the hottest Illinois summers.',
  },
  {
    icon: ToolIcon,
    title: 'Attention to Detail',
    description:
      'We test our work, confirm proper operation, and answer your questions before we leave — so you know the job is done right.',
  },
];

const steps = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'Contact',
    description:
      'Call AColeman Heating and Cooling at 224-659-6849 and explain the HVAC issue you are experiencing. We will ask questions to understand the symptoms and schedule a service visit.',
  },
  {
    number: '02',
    icon: Stethoscope,
    title: 'Diagnose',
    description:
      'We inspect your heating or cooling system, identify the cause of the problem, and explain what is happening so you understand the service that is needed.',
  },
  {
    number: '03',
    icon: ToolIcon,
    title: 'Service',
    description:
      'We complete the appropriate repair, installation, or maintenance work, test the system to confirm proper operation, and answer any questions you have.',
  },
];

export default function Home() {
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <>
      <SEO
        title="AColeman Heating and Cooling | Waukegan HVAC Contractor"
        description="AColeman Heating and Cooling provides professional heating repair, AC repair, installation, and HVAC maintenance for homes and businesses in Waukegan, IL. Call 224-659-6849."
        canonicalPath="/"
      />

      {/* Hero */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroTech}
            alt="HVAC technician repairing an air conditioning unit on a rooftop"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/75 to-navy-800/60" />
        </div>
        <div className="container-xl relative py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
              <MapPin className="w-4 h-4 text-warmorange-400" />
              <span className="text-white text-sm font-medium">Waukegan, Illinois HVAC Contractor</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 text-balance leading-tight animate-fade-in-up">
              Reliable Heating & Cooling for Waukegan Homes
            </h1>
            <p className="text-lg md:text-xl text-navy-100 leading-relaxed mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              AColeman Heating and Cooling provides professional HVAC solutions for your heating and cooling needs — from furnace repair to AC installation and ongoing maintenance.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CallCTA variant="primary" size="lg" />
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-4 rounded-xl hover:bg-white hover:text-navy-900 transition-all duration-300 backdrop-blur-sm text-lg"
              >
                Explore HVAC Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-50 to-transparent pointer-events-none" />
      </section>

      {/* Trust / Business Introduction */}
      <section className="section-pad bg-navy-50">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-coolblue-100 text-coolblue-800 text-sm font-semibold mb-4">
                About AColeman Heating and Cooling
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6 text-balance">
                Your Local HVAC Contractor in Waukegan, Illinois
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  AColeman Heating and Cooling is a heating contractor based in Waukegan, Illinois, providing professional HVAC services for homes and businesses in the surrounding communities. We focus on heating, cooling, HVAC repairs, installation, maintenance, and troubleshooting.
                </p>
                <p>
                  Whether your furnace has stopped working during a cold Illinois winter, your air conditioner is blowing warm air on a hot summer day, or you need a complete system installation, we work through the problem methodically to identify the cause and provide the appropriate service.
                </p>
                <p>
                  Our approach is straightforward: clear communication, thorough diagnostics, and attention to detail on every job. We explain what we find and what service is needed so you can make informed decisions about your heating and cooling system.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <CallCTA variant="secondary" />
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-navy-700 font-semibold px-5 py-3.5 rounded-xl hover:bg-navy-100 transition-colors"
                >
                  Learn About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/15">
                <img
                  src={IMAGES.techInspect}
                  alt="HVAC technician inspecting an outdoor air conditioning unit during a service visit"
                  className="w-full h-[400px] lg:h-[480px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 max-w-[240px] hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-warmorange-100 flex items-center justify-center">
                    <Flame className="w-6 h-6 text-warmorange-600" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-navy-900">Heating</p>
                    <p className="text-xs text-navy-500">Furnace & Heating Systems</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[240px] hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-coolblue-100 flex items-center justify-center">
                    <Snowflake className="w-6 h-6 text-coolblue-600" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-navy-900">Cooling</p>
                    <p className="text-xs text-navy-500">AC Repair & Installation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-warmorange-100 text-warmorange-800 text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4 text-balance">
              Professional HVAC Services for Every Season
            </h2>
            <p className="text-navy-600 leading-relaxed">
              From heating repair and furnace service to AC installation and HVAC maintenance, we handle the heating and cooling needs of Waukegan homes and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => {
              const Icon = iconMap[service.icon] || Wrench;
              return (
                <div
                  key={service.slug}
                  className="card group"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-5 h-5 text-navy-700" />
                      </div>
                      <span className="text-white font-semibold text-sm uppercase tracking-wide">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl text-navy-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-navy-600 text-sm leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                    <Link
                      to={`/services/${service.slug}`}
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

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-navy-900 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-navy-800 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              View All HVAC Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Winter Heating Section */}
      <section className="section-pad bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={IMAGES.winterHouse}
            alt="House covered in snow during winter in Illinois"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="container-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warmorange-500/20 text-warmorange-300 text-sm font-semibold mb-4 border border-warmorange-500/30">
                <Flame className="w-4 h-4" />
                Winter Heating
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 text-balance">
                Heating Problems We Can Help With
              </h2>
              <p className="text-navy-200 text-lg leading-relaxed mb-8">
                Illinois winters demand a reliable heating system. If your furnace or heating system is not performing the way it should, we diagnose and repair the problem — from furnaces that will not start to uneven heating across your home.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {heatingProblems.map((problem) => (
                  <div key={problem} className="flex items-center gap-2.5 text-navy-100">
                    <CheckCircle2 className="w-5 h-5 text-warmorange-400 shrink-0" />
                    <span className="text-sm">{problem}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/services/heating-repair"
                className="inline-flex items-center gap-2 bg-warmorange-500 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-warmorange-600 transition-all duration-300 shadow-lg shadow-warmorange-500/25 hover:-translate-y-0.5"
              >
                Get Heating Service
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-950/40">
              <img
                src={IMAGES.furnaceFlame}
                alt="Furnace flame burning in a residential heating system"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Summer Cooling Section */}
      <section className="section-pad bg-coolblue-50">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-coolblue-900/15">
                <img
                  src={IMAGES.acOutdoor}
                  alt="Air conditioner condenser unit outside a residential home"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coolblue-100 text-coolblue-800 text-sm font-semibold mb-4">
                <Snowflake className="w-4 h-4" />
                Summer Cooling
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-6 text-balance">
                AC Problems We Can Solve
              </h2>
              <p className="text-navy-600 text-lg leading-relaxed mb-8">
                When the summer heat arrives in Waukegan, your air conditioner needs to work reliably. If your AC is blowing warm air, short cycling, or not starting at all, we diagnose the problem and perform the repair your system needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {coolingProblems.map((problem) => (
                  <div key={problem} className="flex items-center gap-2.5 text-navy-700">
                    <CheckCircle2 className="w-5 h-5 text-coolblue-600 shrink-0" />
                    <span className="text-sm">{problem}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/services/air-conditioning-repair"
                className="inline-flex items-center gap-2 bg-coolblue-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-coolblue-700 transition-all duration-300 shadow-lg shadow-coolblue-600/25 hover:-translate-y-0.5"
              >
                Get AC Service
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy-100 text-navy-700 text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4 text-balance">
              Professional HVAC Service You Can Trust
            </h2>
            <p className="text-navy-600 leading-relaxed">
              We focus on clear communication, thorough diagnostics, and attention to detail on every heating and cooling job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-navy-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-coolblue-500 to-coolblue-700 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-pad bg-navy-50">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-warmorange-100 text-warmorange-800 text-sm font-semibold mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4 text-balance">
              A Simple 3-Step Process
            </h2>
            <p className="text-navy-600 leading-relaxed">
              From the first call to the completed service, we keep the process straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-coolblue-300 to-transparent" />
                )}
                <div className="relative bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-navy-900 flex items-center justify-center shrink-0">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="font-display font-bold text-4xl text-navy-200">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-navy-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews section */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-coolblue-100 text-coolblue-800 text-sm font-semibold mb-4">
              Customer Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4 text-balance">
              See What Customers Are Saying
            </h2>
            <p className="text-navy-600 leading-relaxed">
              We encourage you to read genuine customer reviews on Google to learn about other customers' experiences with AColeman Heating and Cooling.
            </p>
          </div>
          <div className="max-w-2xl mx-auto text-center bg-navy-50 rounded-2xl p-8 md:p-10">
            <div className="flex items-center justify-center gap-1.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-warmorange-500 fill-warmorange-500" />
              ))}
            </div>
            <p className="text-navy-700 text-lg leading-relaxed mb-6">
              Read real customer reviews on our Google Business listing to see what people say about working with AColeman Heating and Cooling.
            </p>
            <a
              href={BUSINESS.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy-900 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-navy-800 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              <MapPin className="w-4 h-4" />
              View Reviews on Google
            </a>
          </div>
        </div>
      </section>

      <MapSection />
      <CTASection />
    </>
  );
}
