import { writeFileSync, readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Base URL - Update this with your actual domain
// You can also set it via environment variable: SITE_URL=https://yourdomain.com npm run generate-sitemap
const BASE_URL = process.env.SITE_URL || 'https://yourdomain.com'

// Priority and changefreq settings
const PRIORITY = {
  home: '1.0',
  main: '0.9',
  category: '0.8',
  article: '0.7',
  quiz: '0.7',
  question: '0.6',
  editor: '0.7',
  dsa: '0.7',
  interview: '0.7',
}

const CHANGEFREQ = {
  home: 'daily',
  main: 'weekly',
  category: 'weekly',
  article: 'monthly',
  quiz: 'monthly',
  question: 'monthly',
  editor: 'monthly',
  dsa: 'weekly',
  interview: 'weekly',
}

function extractSlugsFromFile(filePath, pattern) {
  try {
    const content = readFileSync(filePath, 'utf8')
    const matches = content.matchAll(pattern)
    return Array.from(matches, (m) => m[1] || m[0])
  } catch (error) {
    console.warn(`Warning: Could not read ${filePath}:`, error.message)
    return []
  }
}

function generateSitemap() {
  const urls = []
  const now = new Date().toISOString()

  // Helper function to add URL
  function addUrl(path, priority, changefreq, lastmod = now) {
    urls.push({
      loc: `${BASE_URL}${path}`,
      lastmod,
      changefreq,
      priority,
    })
  }

  // Static routes
  addUrl('/', PRIORITY.home, CHANGEFREQ.home)
  addUrl('/articles', PRIORITY.category, CHANGEFREQ.category)
  addUrl('/quizzes', PRIORITY.category, CHANGEFREQ.category)
  addUrl('/javascript-questions', PRIORITY.category, CHANGEFREQ.category)
  addUrl('/interview', PRIORITY.category, CHANGEFREQ.category)
  addUrl('/dsa', PRIORITY.category, CHANGEFREQ.category)
  addUrl('/top-dsa', PRIORITY.category, CHANGEFREQ.category)
  addUrl('/editor', PRIORITY.category, CHANGEFREQ.category)
  addUrl('/login', PRIORITY.main, CHANGEFREQ.main)
  addUrl('/signup', PRIORITY.main, CHANGEFREQ.main)
  addUrl('/profile', PRIORITY.main, CHANGEFREQ.main)

  // Article routes - extract from articles.jsx
  const articlesPath = join(__dirname, '..', 'src', 'lib', 'articles.jsx')
  const articleSlugs = extractSlugsFromFile(
    articlesPath,
    /slug:\s*["']([^"']+)["']/g
  )
  articleSlugs.forEach((slug) => {
    addUrl(`/articles/${slug}`, PRIORITY.article, CHANGEFREQ.article)
  })

  // Quiz routes - extract quiz IDs
  const quizIds = extractSlugsFromFile(
    articlesPath,
    /id:\s*["']([^"']+-quiz)["']/g
  )
  quizIds.forEach((quizId) => {
    addUrl(`/quiz/${quizId}`, PRIORITY.quiz, CHANGEFREQ.quiz)
  })

  // JavaScript Questions routes - extract question IDs
  const jsQuestionsPath = join(
    __dirname,
    '..',
    'src',
    'lib',
    'javascriptQuestions.js'
  )
  const questionIds = extractSlugsFromFile(
    jsQuestionsPath,
    /id:\s*["']([^"']+)["']/g
  )
  questionIds.forEach((questionId) => {
    addUrl(
      `/javascript-questions/${questionId}`,
      PRIORITY.question,
      CHANGEFREQ.question
    )
  })

  // Editor language routes
  const editorLanguages = [
    'javascript',
    'react',
    'angular',
    'vue',
    'node',
    'html',
    'cpp',
    'c',
    'java',
    'python',
  ]
  editorLanguages.forEach((lang) => {
    addUrl(`/editor/${lang}`, PRIORITY.editor, CHANGEFREQ.editor)
  })

  // Interview section routes - extract section IDs
  const interviewPath = join(
    __dirname,
    '..',
    'src',
    'lib',
    'interviewTopics.js'
  )
  const sectionIds = extractSlugsFromFile(
    interviewPath,
    /id:\s*["']([^"']+)["']/g
  )
  // Filter to get only section IDs (js-1, js-2, react-1, etc.)
  const uniqueSectionIds = [
    ...new Set(sectionIds.filter((id) => /^(js|react)-\d+$/.test(id))),
  ]
  uniqueSectionIds.forEach((sectionId) => {
    addUrl(
      `/interview/${sectionId}`,
      PRIORITY.interview,
      CHANGEFREQ.interview
    )

    // Extract topic IDs for this section
    const sectionPattern = new RegExp(
      `"${sectionId}":\\s*\\[([\\s\\S]*?)\\]`,
      'g'
    )
    const sectionContent = readFileSync(interviewPath, 'utf8')
    const sectionMatch = sectionContent.match(
      new RegExp(`"${sectionId}":\\s*\\[([\\s\\S]*?)\\]`, 's')
    )
    if (sectionMatch) {
      const topicIds = extractSlugsFromFile(
        interviewPath,
        new RegExp(`id:\\s*["']([^"']+)["']`, 'g')
      )
      // Get unique topic IDs (excluding section IDs)
      const uniqueTopicIds = [
        ...new Set(
          topicIds.filter(
            (id) => !/^(js|react)-\d+$/.test(id) && id.includes('-')
          )
        ),
      ]
      uniqueTopicIds.forEach((topicId) => {
        // Check if this topic belongs to the current section by checking context
        addUrl(
          `/interview/${sectionId}/${topicId}`,
          PRIORITY.interview,
          CHANGEFREQ.interview
        )
      })
    }
  })

  // Top DSA Problems routes - extract slugs
  const topDSAPath = join(__dirname, '..', 'src', 'lib', 'topDSAProblems.js')
  const dsaSlugs = extractSlugsFromFile(
    topDSAPath,
    /slug:\s*["']([^"']+)["']/g
  )
  dsaSlugs.forEach((slug) => {
    addUrl(`/top-dsa/${slug}`, PRIORITY.dsa, CHANGEFREQ.dsa)
  })

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${url.lastmod.split('T')[0]}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  // Write to public directory
  const outputPath = join(__dirname, '..', 'public', 'sitemap.xml')
  writeFileSync(outputPath, xml, 'utf8')

  console.log(`✅ Sitemap generated successfully!`)
  console.log(`📄 Location: ${outputPath}`)
  console.log(`🔗 Total URLs: ${urls.length}`)
  console.log(`🌐 Base URL: ${BASE_URL}`)
  console.log('\n📊 Breakdown:')
  console.log(`  - Static routes: 11`)
  console.log(`  - Articles: ${articleSlugs.length}`)
  console.log(`  - Quizzes: ${quizIds.length}`)
  console.log(`  - JavaScript Questions: ${questionIds.length}`)
  console.log(`  - Editor Languages: ${editorLanguages.length}`)
  console.log(`  - Interview Sections: ${uniqueSectionIds.length}`)
  console.log(`  - Top DSA Problems: ${dsaSlugs.length}`)
  console.log(
    `\n⚠️  Note: DSA problems from Firebase are not included. Add them manually if needed.`
  )
  console.log(
    `\n💡 To update the base URL, set SITE_URL environment variable:`
  )
  console.log(`   SITE_URL=https://yourdomain.com npm run generate-sitemap`)
}

function escapeXml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// Run the generator
generateSitemap()
