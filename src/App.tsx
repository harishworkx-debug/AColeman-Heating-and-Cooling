import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import ServiceAreas from '@/pages/ServiceAreas';
import LocationDetail from '@/pages/LocationDetail';
import LocationServiceDetail from '@/pages/LocationServiceDetail';
import About from '@/pages/About';
import FAQs from '@/pages/FAQs';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/service-areas/:locationSlug" element={<LocationDetail />} />
        <Route
          path="/service-areas/:locationSlug/:serviceSlug"
          element={<LocationServiceDetail />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
