import { Helmet } from 'react-helmet-async'

export default function StructuredData({ data }) {
  if (!data) return null

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data, null, 2)}
      </script>
    </Helmet>
  )
}

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

