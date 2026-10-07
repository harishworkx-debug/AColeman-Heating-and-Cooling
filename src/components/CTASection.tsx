import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CallCTA from './CallCTA';
import { BUSINESS } from '@/data/business';

export default function CTASection({
  title = 'Need HVAC Service in Waukegan?',
  subtitle = 'Call AColeman Heating and Cooling today. We diagnose the problem and provide the appropriate repair, installation, or maintenance service.',
  showContact = true,
}: {
  title?: string;
  subtitle?: string;
  showContact?: boolean;
}) {
  return (
    <section className="section-pad bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-coolblue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-warmorange-500 rounded-full blur-3xl" />
      </div>
      <div className="container-xl relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-5 text-balance">
            {title}
          </h2>
          <p className="text-navy-200 text-lg leading-relaxed mb-8">
            {subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CallCTA variant="primary" size="lg" />
            {showContact && (
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-4 rounded-xl hover:bg-white hover:text-navy-900 transition-all duration-300 backdrop-blur-sm text-lg"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
