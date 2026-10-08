import { Helmet } from 'react-helmet-async';
import { BUSINESS } from '@/data/business';

type SEOProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  structuredData?: object;
};

export default function SEO({
  title,
  description,
  canonicalPath = '/',
  ogImage,
  structuredData,
}: SEOProps) {
  const canonical = `https://acolemanhvac.com${canonicalPath}`;
  const image = ogImage || 'https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&w=1200';

  const defaultLocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: BUSINESS.name,
    image: image,
    '@id': 'https://acolemanhvac.com',
    url: 'https://acolemanhvac.com',
    telephone: BUSINESS.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      postalCode: BUSINESS.zip,
      addressCountry: BUSINESS.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.336398971075035,
      longitude: -87.86604088827738,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '08:00',
      closes: '17:00',
    },
    sameAs: [
      'https://maps.app.goo.gl/8DXZ7qq5QuxvqXbSA',
      // The user should add their Facebook, Yelp, Birdeye, etc. URLs here to unify citations
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Global LocalBusiness Schema for Citation Consistency */}
      <script type="application/ld+json">
        {JSON.stringify(defaultLocalBusinessSchema)}
      </script>

      {/* Page-Specific Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify({ '@context': 'https://schema.org', ...structuredData })}
        </script>
      )}
    </Helmet>
  );
}
