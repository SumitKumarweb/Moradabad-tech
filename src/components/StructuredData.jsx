import { Helmet } from 'react-helmet-async'

// Helper functions to generate schema data
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Moradabads",
  "url": typeof window !== 'undefined' ? window.location.origin : '',
  "logo": typeof window !== 'undefined' ? `${window.location.origin}/websitelogo.png` : '',
  "description": "The premier platform for modern web development education. Master HTML, CSS, JavaScript, and React with our interactive tools and expert guides.",
  "sameAs": [
    "https://github.com",
    "https://twitter.com"
  ]
})

export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Moradabads",
  "url": typeof window !== 'undefined' ? window.location.origin : '',
  "description": "The premier platform for modern web development education.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": typeof window !== 'undefined' ? `${window.location.origin}/articles?search={search_term_string}` : ''
    },
    "query-input": "required name=search_term_string"
  }
})

export const generateArticleSchema = (article) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description || article.excerpt,
  "image": article.image || (typeof window !== 'undefined' ? `${window.location.origin}/websitelogo.png` : ''),
  "author": {
    "@type": "Person",
    "name": article.author || "Moradabads Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Moradabads",
    "logo": {
      "@type": "ImageObject",
      "url": typeof window !== 'undefined' ? `${window.location.origin}/websitelogo.png` : ''
    }
  },
  "datePublished": article.date || new Date().toISOString(),
  "dateModified": article.date || new Date().toISOString(),
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": typeof window !== 'undefined' ? window.location.href : ''
  },
  "articleSection": article.category,
  "keywords": article.tags?.join(', ') || article.category
})

export const generateBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

export const generateCourseSchema = (course) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": course.name,
  "description": course.description,
  "provider": {
    "@type": "Organization",
    "name": "Moradabads",
    "url": typeof window !== 'undefined' ? window.location.origin : ''
  },
  "courseCode": course.code,
  "educationalLevel": course.level || "Beginner",
  "url": typeof window !== 'undefined' ? window.location.href : ''
})

export const generateFAQPageSchema = (questions) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": questions.map(q => ({
    "@type": "Question",
    "name": q.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": q.answer || q.explanation || "Check the options below for the correct answer."
    }
  }))
})

export const generateQuizSchema = (quiz, article) => ({
  "@context": "https://schema.org",
  "@type": "Quiz",
  "name": quiz.title,
  "description": quiz.description,
  "about": {
    "@type": "Article",
    "headline": article?.title || quiz.title,
    "url": article ? (typeof window !== 'undefined' ? `${window.location.origin}/articles/${article.slug}` : '') : ''
  },
  "numberOfQuestions": quiz.questions?.length || 0,
  "educationalLevel": "All Levels",
  "learningResourceType": "Quiz"
})

export const generateHowToSchema = (howTo) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": howTo.name,
  "description": howTo.description,
  "step": howTo.steps?.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name || step.heading,
    "text": step.text || step.description,
    "image": step.image
  })) || []
})

export const generateVideoSchema = (video) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": video.name,
  "description": video.description,
  "thumbnailUrl": video.thumbnailUrl,
  "uploadDate": video.uploadDate,
  "contentUrl": video.contentUrl,
  "embedUrl": video.embedUrl
})

export const generatePersonSchema = (person) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": person.name,
  "email": person.email,
  "jobTitle": person.jobTitle,
  "worksFor": {
    "@type": "Organization",
    "name": "Moradabads"
  },
  "url": person.url
})

export const generateItemListSchema = (list) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": list.name,
  "description": list.description,
  "numberOfItems": list.items?.length || 0,
  "itemListElement": list.items?.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name || item.title,
    "url": item.url,
    "description": item.description
  })) || []
})

export const generateWebPageSchema = (page) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": page.name || page.title,
  "description": page.description,
  "url": typeof window !== 'undefined' ? window.location.href : '',
  "inLanguage": "en-US",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Moradabads",
    "url": typeof window !== 'undefined' ? window.location.origin : ''
  },
  "about": {
    "@type": "Thing",
    "name": page.name || page.title
  }
})

// Schema validation utility
export const validateSchema = (schema) => {
  const errors = []
  
  if (!schema) {
    errors.push("Schema is null or undefined")
    return { valid: false, errors }
  }
  
  // Check required fields
  if (!schema["@context"]) {
    errors.push("Missing @context field")
  } else if (schema["@context"] !== "https://schema.org") {
    errors.push("@context must be 'https://schema.org'")
  }
  
  if (!schema["@type"]) {
    errors.push("Missing @type field")
  }
  
  // Type-specific validations
  if (schema["@type"] === "Article") {
    if (!schema.headline) errors.push("Article schema missing 'headline'")
    if (!schema.author) errors.push("Article schema missing 'author'")
    if (!schema.publisher) errors.push("Article schema missing 'publisher'")
  }
  
  if (schema["@type"] === "BreadcrumbList") {
    if (!schema.itemListElement || !Array.isArray(schema.itemListElement)) {
      errors.push("BreadcrumbList schema missing 'itemListElement' array")
    }
  }
  
  if (schema["@type"] === "ItemList") {
    if (!schema.itemListElement || !Array.isArray(schema.itemListElement)) {
      errors.push("ItemList schema missing 'itemListElement' array")
    }
  }
  
  if (schema["@type"] === "Organization") {
    if (!schema.name) errors.push("Organization schema missing 'name'")
    if (!schema.url) errors.push("Organization schema missing 'url'")
  }
  
  if (schema["@type"] === "WebSite") {
    if (!schema.name) errors.push("WebSite schema missing 'name'")
    if (!schema.url) errors.push("WebSite schema missing 'url'")
  }
  
  if (schema["@type"] === "Quiz") {
    if (!schema.name) errors.push("Quiz schema missing 'name'")
  }
  
  return {
    valid: errors.length === 0,
    errors
  }
}

// Enhanced StructuredData component with validation (optional)
export default function StructuredData({ data, validate = false }) {
  if (!data) return null

  if (validate) {
    const validation = validateSchema(data)
    if (!validation.valid) {
      console.warn("Schema validation errors:", validation.errors)
      console.warn("Schema data:", data)
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data, null, 2)}
      </script>
    </Helmet>
  )
}

