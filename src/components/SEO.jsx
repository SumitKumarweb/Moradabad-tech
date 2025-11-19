import { Helmet } from 'react-helmet-async'

export default function SEO({
  title,
  description,
  keywords,
  author = "Moradabads",
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard = "summary_large_image",
  canonicalUrl,
  robots = "index, follow",
  type = "website"
}) {
  const siteName = "Moradabads"
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const fullOgTitle = ogTitle || title || siteName
  const fullOgDescription = ogDescription || description
  const fullOgImage = ogImage || `${siteUrl}/websitelogo.png`
  const fullOgUrl = ogUrl || (typeof window !== 'undefined' ? window.location.href : '')
  const fullCanonicalUrl = canonicalUrl || fullOgUrl

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:title" content={fullOgTitle} />
      <meta property="og:description" content={fullOgDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullOgTitle} />
      <meta name="twitter:description" content={fullOgDescription} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  )
}

