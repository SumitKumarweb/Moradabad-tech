/**
 * Script to parse JavaScript questions from README markdown format
 * This will extract questions and convert them to structured JSON format
 */

// The questions will be parsed from the markdown content
// This is a helper script - the actual data will be created manually based on the README structure

const fs = require('fs');
const path = require('path');

// Sample structure - you'll need to parse the actual markdown
// This script serves as a template for parsing the questions

function parseJavaScriptQuestions(markdownContent) {
  const questions = [];
  
  // Regex patterns to match question sections
  const questionRegex = /######\s*(\d+)\.\s*What'?s\s+the\s+output\?/gi;
  const codeBlockRegex = /```javascript\n([\s\S]*?)```/g;
  const optionsRegex = /-\s*([A-Z]):\s*(.+)/g;
  const answerRegex = /<details><summary><b>Answer<\/b><\/summary>\s*<p>\s*####\s*Answer:\s*([A-Z])/i;
  const explanationRegex = /<details><summary><b>Answer<\/b><\/summary>\s*<p>[\s\S]*?<\/p>\s*<\/details>/gi;
  
  // Split by question markers
  const questionSections = markdownContent.split(/######\s*\d+\./);
  
  questionSections.forEach((section, index) => {
    if (index === 0) return; // Skip header section
    
    const questionNumber = index;
    let code = '';
    const options = [];
    let correctAnswer = null;
    let explanation = '';
    
    // Extract code block
    const codeMatch = section.match(/```javascript\n([\s\S]*?)```/);
    if (codeMatch) {
      code = codeMatch[1].trim();
    }
    
    // Extract options
    const optionMatches = [...section.matchAll(/-\s*([A-Z]):\s*(.+?)(?=\n-|\n<|$)/gs)];
    optionMatches.forEach(match => {
      const optionLetter = match[1];
      const optionText = match[2].trim();
      options.push({ letter: optionLetter, text: optionText });
    });
    
    // Extract answer
    const answerMatch = section.match(/####\s*Answer:\s*([A-Z])/i);
    if (answerMatch) {
      const answerLetter = answerMatch[1];
      correctAnswer = options.findIndex(opt => opt.letter === answerLetter);
    }
    
    // Extract explanation
    const explanationMatch = section.match(/<details><summary><b>Answer<\/b><\/summary>\s*<p>([\s\S]*?)<\/p>\s*<\/details>/i);
    if (explanationMatch) {
      explanation = explanationMatch[1]
        .replace(/####\s*Answer:\s*[A-Z]\s*/i, '')
        .trim();
    }
    
    if (options.length > 0 && correctAnswer !== null) {
      questions.push({
        id: `js-q${questionNumber}`,
        number: questionNumber,
        question: `What's the output?`,
        code: code || null,
        options: options.map(opt => opt.text),
        correctAnswer: correctAnswer,
        explanation: explanation
      });
    }
  });
  
  return questions;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { parseJavaScriptQuestions };
}

