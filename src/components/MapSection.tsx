import { Link } from 'react-router-dom';
import {
  Phone,
  MapPin,
  Navigation,
  Clock,
} from 'lucide-react';
import { BUSINESS } from '@/data/business';

export default function MapSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`${compact ? 'py-12' : 'section-pad'} bg-navy-50`}>
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-coolblue-100 text-coolblue-800 text-sm font-semibold mb-4">
              Find Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4 text-balance">
              Visit AColeman Heating and Cooling in Waukegan
            </h2>
            <p className="text-navy-600 leading-relaxed mb-6">
              We are located at {BUSINESS.address} in {BUSINESS.city}, {BUSINESS.state}. Whether you need heating repair, AC service, or a full system installation, we are nearby and ready to help.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
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
              <a href={BUSINESS.phoneLink} className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-warmorange-500 shrink-0" />
                <span className="font-semibold text-navy-800 group-hover:text-coolblue-700 transition-colors">
                  {BUSINESS.phone}
                </span>
              </a>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-warmorange-500 shrink-0" />
                <span className="text-navy-600 text-sm">Call to schedule service</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-coolblue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-coolblue-700 transition-all duration-300 shadow-lg shadow-coolblue-600/25 hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href={BUSINESS.phoneLink}
                className="inline-flex items-center gap-2 bg-warmorange-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-warmorange-600 transition-all duration-300 shadow-lg shadow-warmorange-500/25 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/15 ring-1 ring-navy-200/50">
            <iframe
              src={BUSINESS.mapsEmbed}
              width="600"
              height="450"
              style={{ border: 0, width: '100%', height: '450px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title={`Map showing ${BUSINESS.name} location in Waukegan, IL`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
