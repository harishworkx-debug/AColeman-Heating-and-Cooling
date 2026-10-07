import { Link } from 'react-router-dom';
import { HelpCircle, Phone, ArrowRight, Flame, Snowflake, Wrench } from 'lucide-react';
import { useState } from 'react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import CallCTA from '@/components/CallCTA';
import { FAQS, BUSINESS } from '@/data/business';

const categoryIcons: Record<string, typeof Flame> = {
  Heating: Flame,
  Cooling: Snowflake,
  HVAC: Wrench,
  Thermostats: Wrench,
  Troubleshooting: Wrench,
  Scheduling: Phone,
};

const categories = [...new Set(FAQS.map((f) => f.category))];

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredFAQs =
    activeCategory === 'All'
      ? FAQS
      : FAQS.filter((f) => f.category === activeCategory);

  const faqStructuredData = {
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <SEO
        title="HVAC FAQs | AColeman Heating and Cooling - Waukegan, IL"
        description="Frequently asked questions about heating repair, AC repair, furnace repair, HVAC maintenance, installation, thermostats, and scheduling service in Waukegan, IL."
        canonicalPath="/faqs"
        structuredData={faqStructuredData}
      />

      <section className="bg-navy-900 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container-xl">
          <div className="text-navy-300 mb-6">
            <Breadcrumbs crumbs={[{ label: 'Home', path: '/' }, { label: 'FAQs' }]} />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-5 text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-navy-200 text-lg leading-relaxed">
              Answers to common questions about heating repair, AC repair, HVAC maintenance, installation, thermostats, and scheduling service with AColeman Heating and Cooling in Waukegan, IL.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setActiveCategory('All')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeCategory === 'All'
                    ? 'bg-navy-900 text-white'
                    : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                }`}
              >
                All Questions
              </button>
              {categories.map((cat) => {
                const Icon = categoryIcons[cat] || HelpCircle;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      activeCategory === cat
                        ? 'bg-navy-900 text-white'
                        : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* FAQ items */}
            <div className="space-y-3">
              {filteredFAQs.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-navy-50 rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <summary className="flex items-start justify-between p-5 cursor-pointer list-none gap-4">
                    <div className="flex-1">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-coolblue-100 text-coolblue-700 text-xs font-semibold mb-2">
                        {faq.category}
                      </span>
                      <span className="font-semibold text-navy-800 block">
                        {faq.q}
                      </span>
                    </div>
                    <HelpCircle className="w-5 h-5 text-coolblue-500 shrink-0 mt-1 group-open:rotate-180 transition-transform duration-300" />
                  </summary>
                  <div className="px-5 pb-5 text-navy-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 p-8 bg-navy-900 rounded-2xl text-center">
              <h2 className="text-xl font-display font-bold text-white mb-3">
                Still Have Questions?
              </h2>
              <p className="text-navy-300 text-sm mb-5 max-w-md mx-auto">
                Call us at {BUSINESS.phone} and we will be happy to answer any questions you have about your heating or cooling system.
              </p>
              <CallCTA variant="primary" size="md" />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Schedule Service?"
        subtitle={`Call AColeman Heating and Cooling at ${BUSINESS.phone} or visit our contact page to send a message.`}
      />
    </>
  );
}
