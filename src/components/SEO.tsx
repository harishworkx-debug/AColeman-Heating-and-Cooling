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
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify({ '@context': 'https://schema.org', ...structuredData })}
        </script>
      )}
    </Helmet>
  );
}
