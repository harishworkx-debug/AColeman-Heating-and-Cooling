import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import { BUSINESS } from '@/data/business';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | AColeman Heating and Cooling"
        description="The page you are looking for does not exist. Please visit our homepage or contact us for HVAC service in Waukegan, IL."
        canonicalPath="/404"
      />
      <div className="min-h-[70vh] flex items-center justify-center bg-navy-50">
        <div className="text-center px-4">
          <p className="font-display font-bold text-7xl md:text-9xl text-coolblue-200 mb-4">
            404
          </p>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-3">
            Page Not Found
          </h1>
          <p className="text-navy-600 mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved. Try going back to the homepage or contact us for help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-coolblue-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-coolblue-700 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center gap-2 bg-warmorange-500 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-warmorange-600 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
