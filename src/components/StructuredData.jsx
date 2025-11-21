import { useEffect } from 'react'

// Helper functions to generate schema data
export const generateOrganizationSchema = () => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://moradabads.com'
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Moradabads",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/websitelogo.png`,
      "width": 512,
      "height": 512
    },
    "description": "The premier platform for modern web development education. Master HTML, CSS, JavaScript, and React with our interactive tools and expert guides.",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Moradabads Team"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://github.com/SumitKumarweb",
      "https://www.instagram.com/sumitonweb"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/articles?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }
}

export const generateWebSiteSchema = () => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://moradabads.com'
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Moradabads",
    "alternateName": "Moradabads - Learn Web Development",
    "url": siteUrl,
    "description": "The premier platform for modern web development education. Master HTML, CSS, JavaScript, and React with our interactive tools and expert guides.",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Moradabads",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/websitelogo.png`
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/articles?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }
}

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

export const generateCourseSchema = (course) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://moradabads.com'
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": "Moradabads",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/websitelogo.png`
      }
    },
    "courseCode": course.code,
    "educationalLevel": course.level || "Beginner",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "url": typeof window !== 'undefined' ? window.location.href : '',
    "teaches": course.teaches || course.topics || [],
    "learningResourceType": course.learningResourceType || "Course"
  }
}

export const generateLearningResourceSchema = (resource) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://moradabads.com'
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": resource.name || resource.title,
    "description": resource.description,
    "educationalLevel": resource.level || "Beginner",
    "learningResourceType": resource.type || "Tutorial",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "url": typeof window !== 'undefined' ? window.location.href : '',
    "provider": {
      "@type": "Organization",
      "name": "Moradabads",
      "url": siteUrl
    },
    "teaches": resource.teaches || [],
    "about": {
      "@type": "Thing",
      "name": resource.topic || resource.name
    }
  }
}

export const generateEducationalOccupationalProgramSchema = (program) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://moradabads.com'
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "name": program.name,
    "description": program.description,
    "programType": program.programType || "Educational",
    "educationalCredentialAwarded": program.credential || "Certificate",
    "occupationalCategory": "Web Development",
    "provider": {
      "@type": "Organization",
      "name": "Moradabads",
      "url": siteUrl
    },
    "timeRequired": program.duration,
    "educationalLevel": program.level || "Beginner",
    "url": typeof window !== 'undefined' ? window.location.href : ''
  }
}

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
    "description": item.description,
    "item": item.url
  })) || []
})

export const generateCollectionPageSchema = (page) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://moradabads.com'
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": page.name || page.title,
    "description": page.description,
    "url": typeof window !== 'undefined' ? window.location.href : '',
    "isPartOf": {
      "@type": "WebSite",
      "name": "Moradabads",
      "url": siteUrl
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": page.itemCount || 0,
      "itemListElement": page.items?.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name || item.title,
        "url": item.url
      })) || []
    }
  }
}

export const generateWebPageSchema = (page) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://moradabads.com'
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": page.name || page.title,
    "description": page.description,
    "url": typeof window !== 'undefined' ? window.location.href : '',
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Moradabads",
      "url": siteUrl
    },
    "about": {
      "@type": "Thing",
      "name": page.name || page.title
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": page.image || `${siteUrl}/websitelogo.png`
    },
    "breadcrumb": page.breadcrumb ? {
      "@type": "BreadcrumbList",
      "itemListElement": page.breadcrumb.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    } : undefined
  }
}

export const generateSoftwareApplicationSchema = (app) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://moradabads.com'
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": app.name || "Moradabads Code Editor",
    "description": app.description || "Online code editor for web development",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": app.rating ? {
      "@type": "AggregateRating",
      "ratingValue": app.rating.value,
      "ratingCount": app.rating.count
    } : undefined,
    "featureList": app.features || [],
    "url": typeof window !== 'undefined' ? window.location.href : '',
    "publisher": {
      "@type": "Organization",
      "name": "Moradabads",
      "url": siteUrl
    }
  }
}

export const generateQuestionSchema = (question) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://moradabads.com'
  return {
    "@context": "https://schema.org",
    "@type": "Question",
    "name": question.question || question.title,
    "text": question.text || question.description,
    "answerCount": question.answerCount || 1,
    "acceptedAnswer": question.answer ? {
      "@type": "Answer",
      "text": question.answer,
      "author": {
        "@type": "Person",
        "name": question.author || "Moradabads Team"
      }
    } : undefined,
    "suggestedAnswer": question.suggestedAnswers?.map(ans => ({
      "@type": "Answer",
      "text": ans.text,
      "author": {
        "@type": "Person",
        "name": ans.author || "Moradabads Team"
      }
    })) || [],
    "upvoteCount": question.upvotes || 0,
    "dateCreated": question.dateCreated || new Date().toISOString(),
    "author": {
      "@type": "Person",
      "name": question.author || "Moradabads Team"
    }
  }
}

export const generateQAPageSchema = (page) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://moradabads.com'
  return {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": page.question || page.title,
      "text": page.questionText || page.description,
      "answerCount": page.answerCount || 1,
      "acceptedAnswer": page.acceptedAnswer ? {
        "@type": "Answer",
        "text": page.acceptedAnswer,
        "dateCreated": page.answerDate || new Date().toISOString()
      } : undefined,
      "suggestedAnswer": page.suggestedAnswers?.map(ans => ({
        "@type": "Answer",
        "text": ans
      })) || []
    }
  }
}

export const generateReviewSchema = (review) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://moradabads.com'
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Thing",
      "name": review.itemName || "Moradabads Platform"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": review.bestRating || 5,
      "worstRating": review.worstRating || 1
    },
    "author": {
      "@type": "Person",
      "name": review.author || "Anonymous"
    },
    "reviewBody": review.body || review.text,
    "datePublished": review.datePublished || new Date().toISOString()
  }
}

export const generateVideoSchema = (video) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://moradabads.com'
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.name || video.title,
    "description": video.description,
    "thumbnailUrl": video.thumbnailUrl || `${siteUrl}/websitelogo.png`,
    "uploadDate": video.uploadDate || new Date().toISOString(),
    "contentUrl": video.contentUrl,
    "embedUrl": video.embedUrl,
    "duration": video.duration,
    "publisher": {
      "@type": "Organization",
      "name": "Moradabads",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/websitelogo.png`
      }
    }
  }
}

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
  useEffect(() => {
    if (!data || typeof document === 'undefined') return

    if (validate) {
      const validation = validateSchema(data)
      if (!validation.valid) {
        console.warn("Schema validation errors:", validation.errors)
        console.warn("Schema data:", data)
      }
    }

    // Generate a unique ID based on the data content
    const dataString = JSON.stringify(data)
    const dataHash = dataString.split('').reduce((acc, char) => {
      const hash = ((acc << 5) - acc) + char.charCodeAt(0)
      return hash & hash
    }, 0)
    const scriptId = `structured-data-${Math.abs(dataHash)}-${data['@type'] || 'schema'}`

    // Remove existing script with same ID if it exists
    const existingScript = document.getElementById(scriptId)
    if (existingScript) {
      document.head.removeChild(existingScript)
    }

    // Create script tag for structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = dataString
    script.id = scriptId
    
    document.head.appendChild(script)

    // Cleanup function to remove script when component unmounts or data changes
    return () => {
      const scriptElement = document.getElementById(scriptId)
      if (scriptElement) {
        document.head.removeChild(scriptElement)
      }
    }
  }, [data, validate])

  return null
}

