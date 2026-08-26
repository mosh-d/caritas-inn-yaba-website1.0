import { Helmet } from "react-helmet";

const SEO = ({
  title = "Caritas Inn Yaba | Luxury Accommodation in Sabo, Yaba, Lagos",
  description = "Caritas Inn Yaba on Herbert Macaulay Way offers comfortable, secure rooms in the heart of Sabo, Yaba.",
  keywords = "hotel, lagos, accommodation, caritas inn, yaba, sabo, hebert macaulay, luxury hotel, nigeria, business hotel, vacation",
  image = 'https://yaba.caritasinn.com/caritas-logo-2.webp',
  url = typeof window !== "undefined"
    ? window.location.href
    : "https://yaba.caritasinn.com",
  type = "website",
  noindex = false,
}) => {
  const siteName = "Caritas Inn Yaba";
  const siteUrl = "https://yaba.caritasinn.com";
  const twitterHandle = "@fivecloverhotel";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />
      {/* Viewport should only be in the root HTML */}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" href="/caritas-logo-2.webp" />
      <link rel="apple-touch-icon" href="/caritas-logo-2.webp" />

      {/* Preconnect to important domains */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://maps.googleapis.com" />
    </Helmet>
  );
};

export default SEO;
