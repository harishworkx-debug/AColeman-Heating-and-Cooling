import { useParams, Navigate } from 'react-router-dom';
import ServiceDetail from '@/pages/ServiceDetail';
import LocationDetail from '@/pages/LocationDetail';
import LocationServiceDetail from '@/pages/LocationServiceDetail';
import NotFound from '@/pages/NotFound';
import { SERVICES, LOCATIONS } from '@/data/business';

const SERVICE_ALIASES: Record<string, string> = {
  // Variations & high-intent aliases
  'air-conditioning-repair': 'ac-repair',
  'furnace-service': 'furnace-repair',
  'air-conditioning-installation': 'ac-installation',
  // Priority 3 & Blog: Informational and problem-based query aliases
  'furnace-blowing-cold-air': 'furnace-repair',
  'why-is-my-furnace-blowing-cold-air': 'furnace-repair',
  'ac-running-but-not-cooling': 'ac-repair',
  'ac-running-not-cooling': 'ac-repair',
  'why-is-my-ac-running-but-not-cooling': 'ac-repair',
  'when-to-replace-a-furnace': 'furnace-installation',
  'when-should-you-replace-your-furnace': 'furnace-installation',
  'signs-you-need-a-new-furnace': 'furnace-installation',
  'hvac-maintenance-frequency': 'hvac-maintenance',
  'how-often-should-hvac-systems-be-serviced': 'hvac-maintenance',
  'how-often-to-service-air-conditioner': 'hvac-maintenance',
  'how-often-to-service-an-air-conditioner': 'hvac-maintenance',
  'hvac-maintenance-checklist': 'hvac-maintenance',
  'common-thermostat-problems': 'thermostat-services',
  'thermostat-not-working': 'thermostat-services',
  'why-does-my-hvac-system-make-strange-noises': 'hvac-diagnostics',
  'hvac-making-strange-noises': 'hvac-diagnostics',
  'hvac-system-making-strange-noises': 'hvac-diagnostics',
  'strange-hvac-noises': 'hvac-diagnostics',
  'furnace-repair-vs-replacement': 'hvac-system-replacement',
  'furnace-repair-vs-furnace-replacement': 'hvac-system-replacement',
  'when-to-replace-old-hvac-system': 'hvac-system-replacement',
  'when-to-replace-an-old-hvac-system': 'hvac-system-replacement',
  'what-affects-the-cost-of-ac-installation': 'ac-installation',
  'ac-installation-cost': 'ac-installation',
  'signs-your-air-ducts-need-inspection': 'duct-cleaning',
  'signs-air-ducts-need-cleaning': 'duct-cleaning',
  'how-to-prepare-your-hvac-system-for-winter-in-illinois': 'heating-repair',
  'hvac-winter-preparation-illinois': 'heating-repair',
  'furnace-keeps-shutting-off': 'furnace-repair',
  'uneven-heating-in-different-rooms': 'heating-repair',
};

function resolveServiceSlug(raw: string): string {
  return SERVICE_ALIASES[raw] || raw;
}

export default function DynamicRoute() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <NotFound />;

  // 1. Is it a LocationService? (e.g. ac-installation-waukegan-il)
  for (const l of LOCATIONS) {
    if (slug.endsWith(`-${l.slug}`)) {
      const possibleServiceSlug = slug.slice(0, -(l.slug.length + 1));
      const resolvedServiceSlug = resolveServiceSlug(possibleServiceSlug);
      const s = SERVICES.find((s) => s.slug === possibleServiceSlug || s.slug === resolvedServiceSlug);
      if (s) {
        return <LocationServiceDetail resolvedLocationSlug={l.slug} resolvedServiceSlug={s.slug} />;
      }
    }
  }

  // 2. Is it a Location Hub? (e.g. waukegan-il, gurnee-il)
  const location = LOCATIONS.find((l) => l.slug === slug);
  if (location) {
    return <LocationDetail resolvedSlug={slug} />;
  }

  // 3. Is it a bare Service or alias? (e.g. ac-installation)
  // Redirect directly to the primary main location URL (e.g. /ac-installation-waukegan-il)
  const resolvedSlug = resolveServiceSlug(slug);
  const service = SERVICES.find((s) => s.slug === slug || s.slug === resolvedSlug);
  if (service) {
    return <Navigate to={`/${service.slug}-waukegan-il`} replace />;
  }

  return <NotFound />;
}
