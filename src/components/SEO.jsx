import { useEffect } from 'react'

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

  useEffect(() => {
    if (typeof document === 'undefined') return

    // Update title
    document.title = fullTitle

    // Helper function to update or create meta tag
    const setMetaTag = (attr, name, content) => {
      if (!content) return
      let element = document.querySelector(`meta[${attr}="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attr, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Helper function to update or create link tag
    const setLinkTag = (rel, href) => {
      if (!href) return
      let element = document.querySelector(`link[rel="${rel}"]`)
      if (!element) {
        element = document.createElement('link')
        element.setAttribute('rel', rel)
        document.head.appendChild(element)
      }
      element.setAttribute('href', href)
    }

    // Primary Meta Tags
    setMetaTag('name', 'title', fullTitle)
    setMetaTag('name', 'description', description)
    if (keywords) setMetaTag('name', 'keywords', keywords)
    setMetaTag('name', 'author', author)
    setMetaTag('name', 'robots', robots)

    // Canonical URL
    setLinkTag('canonical', fullCanonicalUrl)

    // Open Graph / Facebook
    setMetaTag('property', 'og:type', type)
    setMetaTag('property', 'og:url', fullOgUrl)
    setMetaTag('property', 'og:title', fullOgTitle)
    setMetaTag('property', 'og:description', fullOgDescription)
    setMetaTag('property', 'og:image', fullOgImage)
    setMetaTag('property', 'og:site_name', siteName)

    // Twitter
    setMetaTag('name', 'twitter:card', twitterCard)
    setMetaTag('name', 'twitter:title', fullOgTitle)
    setMetaTag('name', 'twitter:description', fullOgDescription)
    setMetaTag('name', 'twitter:image', fullOgImage)

    // Additional Meta Tags
    setMetaTag('name', 'language', 'English')
    setMetaTag('name', 'revisit-after', '7 days')
  }, [fullTitle, description, keywords, author, robots, fullCanonicalUrl, type, fullOgUrl, fullOgTitle, fullOgDescription, fullOgImage, siteName, twitterCard])

  return null
}

