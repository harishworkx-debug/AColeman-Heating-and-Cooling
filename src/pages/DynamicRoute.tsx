import { useParams } from 'react-router-dom';
import ServiceDetail from '@/pages/ServiceDetail';
import LocationDetail from '@/pages/LocationDetail';
import LocationServiceDetail from '@/pages/LocationServiceDetail';
import NotFound from '@/pages/NotFound';
import { SERVICES, LOCATIONS } from '@/data/business';

export default function DynamicRoute() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <NotFound />;

  // 1. Is it a Service?
  const service = SERVICES.find(s => s.slug === slug);
  if (service) {
    return <ServiceDetail resolvedSlug={slug} />;
  }

  // 2. Is it a Location?
  const location = LOCATIONS.find(l => l.slug === slug);
  if (location) {
    return <LocationDetail resolvedSlug={slug} />;
  }

  // 3. Is it a LocationService?
  // We can try to split the slug and see if it matches a service + location
  for (const l of LOCATIONS) {
    if (slug.endsWith(`-${l.slug}`)) {
      const possibleServiceSlug = slug.slice(0, -(l.slug.length + 1));
      const s = SERVICES.find(s => s.slug === possibleServiceSlug);
      if (s) {
        return <LocationServiceDetail resolvedLocationSlug={l.slug} resolvedServiceSlug={s.slug} />;
      }
    }
  }

  return <NotFound />;
}
