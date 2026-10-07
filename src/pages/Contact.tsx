import { useState, FormEvent } from 'react';
import {
  Phone,
  MapPin,
  Navigation,
  Mail,
  Clock,
  CheckCircle2,
  AlertCircle,
  Send,
  User,
  MessageSquare,
  Wrench,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CallCTA from '@/components/CallCTA';
import { BUSINESS, SERVICES } from '@/data/business';

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.phone.trim()) {
      e.phone = 'Please enter your phone number';
    } else if (form.phone.replace(/\D/g, '').length < 10) {
      e.phone = 'Please enter a valid phone number';
    }
    if (!form.email.trim()) {
      e.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address';
    }
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim()) e.message = 'Please describe your HVAC issue';
    return e;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('error');
      return;
    }
    setErrors({});
    setStatus('success');
    setForm({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
    if (status !== 'idle') setStatus('idle');
  };

  return (
    <>
      <SEO
        title="Contact AColeman Heating and Cooling | Waukegan, IL"
        description={`Contact AColeman Heating and Cooling in Waukegan, IL. Call ${BUSINESS.phone} or send us a message about your heating or cooling needs. Located at ${BUSINESS.address}, ${BUSINESS.city}, ${BUSINESS.state} ${BUSINESS.zip}.`}
        canonicalPath="/contact"
        structuredData={{
          '@type': 'ContactPage',
          name: `Contact ${BUSINESS.name}`,
          url: 'https://acolemanhvac.com/contact',
        }}
      />

      <section className="bg-navy-900 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container-xl">
          <div className="text-navy-300 mb-6">
            <Breadcrumbs crumbs={[{ label: 'Home', path: '/' }, { label: 'Contact' }]} />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-5 text-balance">
              Contact AColeman Heating and Cooling
            </h1>
            <p className="text-navy-200 text-lg leading-relaxed">
              Need heating or cooling service in Waukegan, IL? Call us at {BUSINESS.phone} or fill out the form below and we will get back to you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-bold text-navy-900 mb-6">
                Get In Touch
              </h2>
              <div className="space-y-5 mb-8">
                <a href={BUSINESS.phoneLink} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-warmorange-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-warmorange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm mb-0.5">Phone</p>
                    <p className="text-navy-600 group-hover:text-coolblue-700 transition-colors">
                      {BUSINESS.phone}
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-coolblue-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-coolblue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm mb-0.5">Address</p>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      {BUSINESS.name}<br />
                      {BUSINESS.address}<br />
                      {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}<br />
                      {BUSINESS.country}
                    </p>
                  </div>
                </div>
                <a
                  href={BUSINESS.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-coolblue-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-coolblue-700 transition-all duration-300 shadow-lg shadow-coolblue-600/25 hover:-translate-y-0.5"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-xl shadow-navy-900/10">
                <iframe
                  src={BUSINESS.mapsEmbed}
                  style={{ border: 0, width: '100%', height: '320px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title={`Map showing ${BUSINESS.name} at ${BUSINESS.address}, ${BUSINESS.city}, ${BUSINESS.state}`}
                />
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-navy-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-navy-500 text-sm mb-6">
                  Fill out the form below and we will get back to you about your heating or cooling needs.
                </p>

                {status === 'success' && (
                  <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3 animate-fade-in">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-800 text-sm">
                        Message sent successfully
                      </p>
                      <p className="text-green-700 text-sm mt-0.5">
                        Thank you for contacting AColeman Heating and Cooling. We will get back to you as soon as possible. For urgent service, please call {BUSINESS.phone}.
                      </p>
                    </div>
                  </div>
                )}

                {status === 'error' && Object.keys(errors).length > 0 && (
                  <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">
                      Please correct the highlighted fields and try again.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy-700 mb-1.5">
                      Name <span className="text-warmorange-600">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={`input-field pl-10 ${errors.name ? 'border-red-300 ring-2 ring-red-200' : ''}`}
                        placeholder="Your full name"
                        aria-invalid={!!errors.name}
                      />
                    </div>
                    {errors.name && <p className="text-red-600 text-xs mt-1.5">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy-700 mb-1.5">
                        Phone <span className="text-warmorange-600">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className={`input-field pl-10 ${errors.phone ? 'border-red-300 ring-2 ring-red-200' : ''}`}
                          placeholder="224-555-0000"
                          aria-invalid={!!errors.phone}
                        />
                      </div>
                      {errors.phone && <p className="text-red-600 text-xs mt-1.5">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy-700 mb-1.5">
                        Email <span className="text-warmorange-600">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={`input-field pl-10 ${errors.email ? 'border-red-300 ring-2 ring-red-200' : ''}`}
                          placeholder="you@example.com"
                          aria-invalid={!!errors.email}
                        />
                      </div>
                      {errors.email && <p className="text-red-600 text-xs mt-1.5">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-navy-700 mb-1.5">
                      Service Needed <span className="text-warmorange-600">*</span>
                    </label>
                    <div className="relative">
                      <Wrench className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
                      <select
                        id="service"
                        value={form.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                        className={`input-field pl-10 appearance-none ${errors.service ? 'border-red-300 ring-2 ring-red-200' : ''}`}
                        aria-invalid={!!errors.service}
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                        <option value="Other">Other / Not Sure</option>
                      </select>
                    </div>
                    {errors.service && <p className="text-red-600 text-xs mt-1.5">{errors.service}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy-700 mb-1.5">
                      Message <span className="text-warmorange-600">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-4 w-4 h-4 text-navy-400" />
                      <textarea
                        id="message"
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        rows={5}
                        className={`input-field pl-10 resize-none ${errors.message ? 'border-red-300 ring-2 ring-red-200' : ''}`}
                        placeholder="Describe the heating or cooling problem you are experiencing..."
                        aria-invalid={!!errors.message}
                      />
                    </div>
                    {errors.message && <p className="text-red-600 text-xs mt-1.5">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-warmorange-500 text-white font-semibold px-6 py-4 rounded-xl hover:bg-warmorange-600 transition-all duration-300 shadow-lg shadow-warmorange-500/25 hover:shadow-xl hover:shadow-warmorange-500/30 hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call banner */}
      <section className="bg-navy-900 py-14">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Need Immediate Service?
            </h2>
            <p className="text-navy-300 mb-6">
              Call us directly at {BUSINESS.phone} for fastest response.
            </p>
            <CallCTA variant="primary" size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
