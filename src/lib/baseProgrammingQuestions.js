/**
 * Base Programming Questions Data
 * 75 basic programming questions covering:
 * - Prime numbers (10 questions)
 * - Digit questions (15 questions)
 * - Series (15 questions)
 * - Print patterns (15 questions)
 * - Conditionals (20 questions)
 */

export const baseProgrammingQuestions = [
  // ========== PRIME NUMBERS (1-10) ==========
  {
    id: "bp-q1",
    number: 1,
    title: "Check if a number is prime",
    category: "Prime Numbers",
    description: "Write a function to check if a given number is prime. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.",
    difficulty: "Easy",
    hint: "A number is prime if it's only divisible by 1 and itself. Check divisibility from 2 to sqrt(n).",
    testCases: [
      { input: { n: 7 }, expectedOutput: true },
      { input: { n: 10 }, expectedOutput: false },
      { input: { n: 2 }, expectedOutput: true },
      { input: { n: 1 }, expectedOutput: false },
      { input: { n: 17 }, expectedOutput: true }
    ]
  },
  {
    id: "bp-q2",
    number: 2,
    title: "Find all prime numbers up to N",
    category: "Prime Numbers",
    description: "Write a function to find all prime numbers up to a given number N using the Sieve of Eratosthenes algorithm.",
    difficulty: "Easy",
    hint: "Use Sieve of Eratosthenes: mark multiples of each prime number as composite.",
    testCases: [
      { input: { n: 10 }, expectedOutput: [2, 3, 5, 7] },
      { input: { n: 20 }, expectedOutput: [2, 3, 5, 7, 11, 13, 17, 19] },
      { input: { n: 5 }, expectedOutput: [2, 3, 5] },
      { input: { n: 2 }, expectedOutput: [2] },
      { input: { n: 30 }, expectedOutput: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] }
    ]
  },
  {
    id: "bp-q3",
    number: 3,
    title: "Find the nth prime number",
    category: "Prime Numbers",
    description: "Write a function to find the nth prime number. For example, the 1st prime is 2, 2nd is 3, 3rd is 5, etc.",
    difficulty: "Medium",
    hint: "Generate prime numbers sequentially until you reach the nth one.",
    testCases: [
      { input: { n: 1 }, expectedOutput: 2 },
      { input: { n: 5 }, expectedOutput: 11 },
      { input: { n: 10 }, expectedOutput: 29 },
      { input: { n: 3 }, expectedOutput: 5 },
      { input: { n: 7 }, expectedOutput: 17 }
    ]
  },
  {
    id: "bp-q4",
    number: 4,
    title: "Check if two numbers are twin primes",
    category: "Prime Numbers",
    description: "Two prime numbers are called twin primes if they differ by 2. Write a function to check if two given numbers are twin primes.",
    difficulty: "Easy",
    hint: "Check if both numbers are prime and their difference is exactly 2.",
    testCases: [
      { input: { a: 3, b: 5 }, expectedOutput: true },
      { input: { a: 5, b: 7 }, expectedOutput: true },
      { input: { a: 7, b: 11 }, expectedOutput: false },
      { input: { a: 11, b: 13 }, expectedOutput: true },
      { input: { a: 2, b: 3 }, expectedOutput: false }
    ]
  },
  {
    id: "bp-q5",
    number: 5,
    title: "Count prime numbers in a range",
    category: "Prime Numbers",
    description: "Write a function to count the number of prime numbers in a given range [start, end] (inclusive).",
    difficulty: "Easy",
    hint: "Check each number in the range to see if it's prime.",
    testCases: [
      { input: { start: 1, end: 10 }, expectedOutput: 4 },
      { input: { start: 10, end: 20 }, expectedOutput: 4 },
      { input: { start: 20, end: 30 }, expectedOutput: 2 },
      { input: { start: 1, end: 5 }, expectedOutput: 3 },
      { input: { start: 50, end: 60 }, expectedOutput: 2 }
    ]
  },
  {
    id: "bp-q6",
    number: 6,
    title: "Find prime factors of a number",
    category: "Prime Numbers",
    description: "Write a function to find all prime factors of a given number. Return them as an array.",
    difficulty: "Medium",
    hint: "Divide the number by prime factors starting from 2, and continue until the number becomes 1.",
    testCases: [
      { input: { n: 12 }, expectedOutput: [2, 2, 3] },
      { input: { n: 15 }, expectedOutput: [3, 5] },
      { input: { n: 28 }, expectedOutput: [2, 2, 7] },
      { input: { n: 17 }, expectedOutput: [17] },
      { input: { n: 100 }, expectedOutput: [2, 2, 5, 5] }
    ]
  },
  {
    id: "bp-q7",
    number: 7,
    title: "Check if a number is a prime palindrome",
    category: "Prime Numbers",
    description: "Write a function to check if a number is both prime and a palindrome (reads the same forwards and backwards).",
    difficulty: "Medium",
    hint: "Check if the number is prime and if its reverse equals itself.",
    testCases: [
      { input: { n: 131 }, expectedOutput: true },
      { input: { n: 17 }, expectedOutput: false },
      { input: { n: 11 }, expectedOutput: true },
      { input: { n: 13 }, expectedOutput: false },
      { input: { n: 101 }, expectedOutput: true }
    ]
  },
  {
    id: "bp-q8",
    number: 8,
    title: "Sum of all prime numbers up to N",
    category: "Prime Numbers",
    description: "Write a function to calculate the sum of all prime numbers up to a given number N.",
    difficulty: "Easy",
    hint: "Find all primes up to N and sum them.",
    testCases: [
      { input: { n: 10 }, expectedOutput: 17 },
      { input: { n: 20 }, expectedOutput: 77 },
      { input: { n: 5 }, expectedOutput: 10 },
      { input: { n: 15 }, expectedOutput: 41 },
      { input: { n: 30 }, expectedOutput: 129 }
    ]
  },
  {
    id: "bp-q9",
    number: 9,
    title: "Find the largest prime factor",
    category: "Prime Numbers",
    description: "Write a function to find the largest prime factor of a given number.",
    difficulty: "Medium",
    hint: "Find all prime factors and return the maximum.",
    testCases: [
      { input: { n: 12 }, expectedOutput: 3 },
      { input: { n: 15 }, expectedOutput: 5 },
      { input: { n: 28 }, expectedOutput: 7 },
      { input: { n: 100 }, expectedOutput: 5 },
      { input: { n: 17 }, expectedOutput: 17 }
    ]
  },
  {
    id: "bp-q10",
    number: 10,
    title: "Check if a number can be expressed as sum of two primes",
    category: "Prime Numbers",
    description: "Write a function to check if a given even number (greater than 2) can be expressed as the sum of two prime numbers (Goldbach's conjecture).",
    difficulty: "Medium",
    hint: "For each prime p, check if (n - p) is also prime.",
    testCases: [
      { input: { n: 10 }, expectedOutput: true },
      { input: { n: 14 }, expectedOutput: true },
      { input: { n: 20 }, expectedOutput: true },
      { input: { n: 4 }, expectedOutput: true },
      { input: { n: 8 }, expectedOutput: true }
    ]
  },

  // ========== DIGIT QUESTIONS (11-25) ==========
  {
    id: "bp-q11",
    number: 11,
    title: "Count digits in a number",
    category: "Digit Questions",
    description: "Write a function to count the number of digits in a given number.",
    difficulty: "Easy",
    hint: "Repeatedly divide by 10 until the number becomes 0, or convert to string and find length.",
    testCases: [
      { input: { n: 12345 }, expectedOutput: 5 },
      { input: { n: 0 }, expectedOutput: 1 },
      { input: { n: 9 }, expectedOutput: 1 },
      { input: { n: 1000 }, expectedOutput: 4 },
      { input: { n: 999 }, expectedOutput: 3 }
    ]
  },
  {
    id: "bp-q12",
    number: 12,
    title: "Sum of digits of a number",
    category: "Digit Questions",
    description: "Write a function to calculate the sum of all digits in a given number.",
    difficulty: "Easy",
    hint: "Extract each digit using modulo 10 and integer division.",
    testCases: [
      { input: { n: 123 }, expectedOutput: 6 },
      { input: { n: 456 }, expectedOutput: 15 },
      { input: { n: 999 }, expectedOutput: 27 },
      { input: { n: 1000 }, expectedOutput: 1 },
      { input: { n: 0 }, expectedOutput: 0 }
    ]
  },
  {
    id: "bp-q13",
    number: 13,
    title: "Reverse digits of a number",
    category: "Digit Questions",
    description: "Write a function to reverse the digits of a given number. For example, 123 becomes 321.",
    difficulty: "Easy",
    hint: "Extract digits from right to left and build the reversed number.",
    testCases: [
      { input: { n: 123 }, expectedOutput: 321 },
      { input: { n: 456 }, expectedOutput: 654 },
      { input: { n: 1000 }, expectedOutput: 1 },
      { input: { n: 0 }, expectedOutput: 0 },
      { input: { n: 12345 }, expectedOutput: 54321 }
    ]
  },
  {
    id: "bp-q14",
    number: 14,
    title: "Check if a number is palindrome",
    category: "Digit Questions",
    description: "Write a function to check if a number reads the same forwards and backwards.",
    difficulty: "Easy",
    hint: "Reverse the number and compare with original.",
    testCases: [
      { input: { n: 121 }, expectedOutput: true },
      { input: { n: 123 }, expectedOutput: false },
      { input: { n: 1221 }, expectedOutput: true },
      { input: { n: 0 }, expectedOutput: true },
      { input: { n: 12321 }, expectedOutput: true }
    ]
  },
  {
    id: "bp-q15",
    number: 15,
    title: "Find first and last digit of a number",
    category: "Digit Questions",
    description: "Write a function to find the first and last digit of a number. Return as an object with 'first' and 'last' properties.",
    difficulty: "Easy",
    hint: "Last digit: n % 10, First digit: divide until single digit remains.",
    testCases: [
      { input: { n: 12345 }, expectedOutput: { first: 1, last: 5 } },
      { input: { n: 9 }, expectedOutput: { first: 9, last: 9 } },
      { input: { n: 1000 }, expectedOutput: { first: 1, last: 0 } },
      { input: { n: 567 }, expectedOutput: { first: 5, last: 7 } },
      { input: { n: 0 }, expectedOutput: { first: 0, last: 0 } }
    ]
  },
  {
    id: "bp-q16",
    number: 16,
    title: "Product of digits of a number",
    category: "Digit Questions",
    description: "Write a function to calculate the product of all digits in a given number.",
    difficulty: "Easy",
    hint: "Extract each digit and multiply them together.",
    testCases: [
      { input: { n: 123 }, expectedOutput: 6 },
      { input: { n: 456 }, expectedOutput: 120 },
      { input: { n: 999 }, expectedOutput: 729 },
      { input: { n: 1000 }, expectedOutput: 0 },
      { input: { n: 0 }, expectedOutput: 0 }
    ]
  },
  {
    id: "bp-q17",
    number: 17,
    title: "Check if a number is an Armstrong number",
    category: "Digit Questions",
    description: "An Armstrong number is a number that equals the sum of its digits each raised to the power of the number of digits. For example, 153 = 1³ + 5³ + 3³.",
    difficulty: "Medium",
    hint: "Count digits, then raise each digit to that power and sum them.",
    testCases: [
      { input: { n: 153 }, expectedOutput: true },
      { input: { n: 371 }, expectedOutput: true },
      { input: { n: 123 }, expectedOutput: false },
      { input: { n: 9474 }, expectedOutput: true },
      { input: { n: 100 }, expectedOutput: false }
    ]
  },
  {
    id: "bp-q18",
    number: 18,
    title: "Find the largest digit in a number",
    category: "Digit Questions",
    description: "Write a function to find the largest digit in a given number.",
    difficulty: "Easy",
    hint: "Extract each digit and keep track of the maximum.",
    testCases: [
      { input: { n: 12345 }, expectedOutput: 5 },
      { input: { n: 98765 }, expectedOutput: 9 },
      { input: { n: 11111 }, expectedOutput: 1 },
      { input: { n: 0 }, expectedOutput: 0 },
      { input: { n: 456789 }, expectedOutput: 9 }
    ]
  },
  {
    id: "bp-q19",
    number: 19,
    title: "Find the smallest digit in a number",
    category: "Digit Questions",
    description: "Write a function to find the smallest digit in a given number.",
    difficulty: "Easy",
    hint: "Extract each digit and keep track of the minimum.",
    testCases: [
      { input: { n: 12345 }, expectedOutput: 1 },
      { input: { n: 98765 }, expectedOutput: 5 },
      { input: { n: 11111 }, expectedOutput: 1 },
      { input: { n: 0 }, expectedOutput: 0 },
      { input: { n: 456789 }, expectedOutput: 4 }
    ]
  },
  {
    id: "bp-q20",
    number: 20,
    title: "Count even and odd digits in a number",
    category: "Digit Questions",
    description: "Write a function to count the number of even and odd digits in a given number. Return as an object with 'even' and 'odd' properties.",
    difficulty: "Easy",
    hint: "Check each digit if it's divisible by 2.",
    testCases: [
      { input: { n: 12345 }, expectedOutput: { even: 2, odd: 3 } },
      { input: { n: 2468 }, expectedOutput: { even: 4, odd: 0 } },
      { input: { n: 13579 }, expectedOutput: { even: 0, odd: 5 } },
      { input: { n: 0 }, expectedOutput: { even: 1, odd: 0 } },
      { input: { n: 123456 }, expectedOutput: { even: 3, odd: 3 } }
    ]
  },
  {
    id: "bp-q21",
    number: 21,
    title: "Check if all digits are same",
    category: "Digit Questions",
    description: "Write a function to check if all digits in a number are the same.",
    difficulty: "Easy",
    hint: "Compare each digit with the first digit.",
    testCases: [
      { input: { n: 1111 }, expectedOutput: true },
      { input: { n: 2222 }, expectedOutput: true },
      { input: { n: 1234 }, expectedOutput: false },
      { input: { n: 0 }, expectedOutput: true },
      { input: { n: 99999 }, expectedOutput: true }
    ]
  },
  {
    id: "bp-q22",
    number: 22,
    title: "Remove duplicate digits from a number",
    category: "Digit Questions",
    description: "Write a function to remove duplicate digits from a number, keeping only the first occurrence of each digit.",
    difficulty: "Medium",
    hint: "Use a set or array to track seen digits, build result digit by digit.",
    testCases: [
      { input: { n: 112233 }, expectedOutput: 123 },
      { input: { n: 12345 }, expectedOutput: 12345 },
      { input: { n: 11111 }, expectedOutput: 1 },
      { input: { n: 122334455 }, expectedOutput: 12345 },
      { input: { n: 987654321 }, expectedOutput: 987654321 }
    ]
  },
  {
    id: "bp-q23",
    number: 23,
    title: "Find frequency of each digit in a number",
    category: "Digit Questions",
    description: "Write a function to find the frequency of each digit (0-9) in a given number. Return as an object with digit as key and frequency as value.",
    difficulty: "Easy",
    hint: "Use an array or object to count occurrences of each digit.",
    testCases: [
      { input: { n: 112233 }, expectedOutput: { 1: 2, 2: 2, 3: 2, 0: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 } },
      { input: { n: 12345 }, expectedOutput: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 0: 0, 6: 0, 7: 0, 8: 0, 9: 0 } },
      { input: { n: 11111 }, expectedOutput: { 1: 5, 0: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 } },
      { input: { n: 0 }, expectedOutput: { 0: 1, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 } }
    ]
  },
  {
    id: "bp-q24",
    number: 24,
    title: "Check if a number contains specific digit",
    category: "Digit Questions",
    description: "Write a function to check if a given number contains a specific digit.",
    difficulty: "Easy",
    hint: "Extract each digit and compare with the target digit.",
    testCases: [
      { input: { n: 12345, digit: 3 }, expectedOutput: true },
      { input: { n: 12345, digit: 7 }, expectedOutput: false },
      { input: { n: 1000, digit: 0 }, expectedOutput: true },
      { input: { n: 999, digit: 9 }, expectedOutput: true },
      { input: { n: 123, digit: 5 }, expectedOutput: false }
    ]
  },
  {
    id: "bp-q25",
    number: 25,
    title: "Swap first and last digit of a number",
    category: "Digit Questions",
    description: "Write a function to swap the first and last digit of a number.",
    difficulty: "Medium",
    hint: "Extract first and last digits, remove them, then reconstruct the number.",
    testCases: [
      { input: { n: 12345 }, expectedOutput: 52341 },
      { input: { n: 9 }, expectedOutput: 9 },
      { input: { n: 1000 }, expectedOutput: 1 },
      { input: { n: 567 }, expectedOutput: 765 },
      { input: { n: 12 }, expectedOutput: 21 }
    ]
  },

  // ========== SERIES (26-40) ==========
  {
    id: "bp-q26",
    number: 26,
    title: "Fibonacci series - nth term",
    category: "Series",
    description: "Write a function to find the nth term of the Fibonacci series. Fibonacci: F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2).",
    difficulty: "Easy",
    hint: "Use iteration or recursion. For efficiency, use iteration.",
    testCases: [
      { input: { n: 0 }, expectedOutput: 0 },
      { input: { n: 1 }, expectedOutput: 1 },
      { input: { n: 5 }, expectedOutput: 5 },
      { input: { n: 10 }, expectedOutput: 55 },
      { input: { n: 7 }, expectedOutput: 13 }
    ]
  },
  {
    id: "bp-q27",
    number: 27,
    title: "Fibonacci series - first N terms",
    category: "Series",
    description: "Write a function to generate the first N terms of the Fibonacci series.",
    difficulty: "Easy",
    hint: "Generate terms iteratively and store in an array.",
    testCases: [
      { input: { n: 5 }, expectedOutput: [0, 1, 1, 2, 3] },
      { input: { n: 10 }, expectedOutput: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] },
      { input: { n: 1 }, expectedOutput: [0] },
      { input: { n: 2 }, expectedOutput: [0, 1] },
      { input: { n: 7 }, expectedOutput: [0, 1, 1, 2, 3, 5, 8] }
    ]
  },
  {
    id: "bp-q28",
    number: 28,
    title: "Arithmetic progression - nth term",
    category: "Series",
    description: "Write a function to find the nth term of an arithmetic progression. Given first term 'a' and common difference 'd', find T(n) = a + (n-1)*d.",
    difficulty: "Easy",
    hint: "Use the formula: nth term = a + (n-1) * d",
    testCases: [
      { input: { a: 2, d: 3, n: 5 }, expectedOutput: 14 },
      { input: { a: 1, d: 2, n: 10 }, expectedOutput: 19 },
      { input: { a: 5, d: 5, n: 1 }, expectedOutput: 5 },
      { input: { a: 10, d: -2, n: 4 }, expectedOutput: 4 },
      { input: { a: 0, d: 5, n: 6 }, expectedOutput: 25 }
    ]
  },
  {
    id: "bp-q29",
    number: 29,
    title: "Geometric progression - nth term",
    category: "Series",
    description: "Write a function to find the nth term of a geometric progression. Given first term 'a' and common ratio 'r', find T(n) = a * r^(n-1).",
    difficulty: "Easy",
    hint: "Use the formula: nth term = a * r^(n-1)",
    testCases: [
      { input: { a: 2, r: 3, n: 4 }, expectedOutput: 54 },
      { input: { a: 1, r: 2, n: 5 }, expectedOutput: 16 },
      { input: { a: 5, r: 2, n: 1 }, expectedOutput: 5 },
      { input: { a: 3, r: 3, n: 4 }, expectedOutput: 81 },
      { input: { a: 10, r: 0.5, n: 3 }, expectedOutput: 2.5 }
    ]
  },
  {
    id: "bp-q30",
    number: 30,
    title: "Sum of first N natural numbers",
    category: "Series",
    description: "Write a function to calculate the sum of first N natural numbers. Formula: N*(N+1)/2",
    difficulty: "Easy",
    hint: "Use the formula: sum = n * (n + 1) / 2",
    testCases: [
      { input: { n: 5 }, expectedOutput: 15 },
      { input: { n: 10 }, expectedOutput: 55 },
      { input: { n: 100 }, expectedOutput: 5050 },
      { input: { n: 1 }, expectedOutput: 1 },
      { input: { n: 0 }, expectedOutput: 0 }
    ]
  },
  {
    id: "bp-q31",
    number: 31,
    title: "Sum of squares of first N natural numbers",
    category: "Series",
    description: "Write a function to calculate the sum of squares of first N natural numbers. Formula: N*(N+1)*(2N+1)/6",
    difficulty: "Easy",
    hint: "Use the formula: sum = n * (n + 1) * (2*n + 1) / 6",
    testCases: [
      { input: { n: 5 }, expectedOutput: 55 },
      { input: { n: 10 }, expectedOutput: 385 },
      { input: { n: 3 }, expectedOutput: 14 },
      { input: { n: 1 }, expectedOutput: 1 },
      { input: { n: 4 }, expectedOutput: 30 }
    ]
  },
  {
    id: "bp-q32",
    number: 32,
    title: "Sum of cubes of first N natural numbers",
    category: "Series",
    description: "Write a function to calculate the sum of cubes of first N natural numbers. Formula: [N*(N+1)/2]²",
    difficulty: "Easy",
    hint: "Use the formula: sum = [n * (n + 1) / 2]^2",
    testCases: [
      { input: { n: 5 }, expectedOutput: 225 },
      { input: { n: 10 }, expectedOutput: 3025 },
      { input: { n: 3 }, expectedOutput: 36 },
      { input: { n: 1 }, expectedOutput: 1 },
      { input: { n: 4 }, expectedOutput: 100 }
    ]
  },
  {
    id: "bp-q33",
    number: 33,
    title: "Factorial of a number",
    category: "Series",
    description: "Write a function to calculate the factorial of a number N. Factorial of N (N!) = N * (N-1) * (N-2) * ... * 1",
    difficulty: "Easy",
    hint: "Use iteration or recursion. Factorial of 0 is 1.",
    testCases: [
      { input: { n: 5 }, expectedOutput: 120 },
      { input: { n: 0 }, expectedOutput: 1 },
      { input: { n: 1 }, expectedOutput: 1 },
      { input: { n: 4 }, expectedOutput: 24 },
      { input: { n: 7 }, expectedOutput: 5040 }
    ]
  },
  {
    id: "bp-q34",
    number: 34,
    title: "Sum of arithmetic progression",
    category: "Series",
    description: "Write a function to calculate the sum of first N terms of an arithmetic progression. Given first term 'a' and common difference 'd'. Formula: (n/2) * [2a + (n-1)d]",
    difficulty: "Easy",
    hint: "Use the formula: sum = (n/2) * [2*a + (n-1)*d]",
    testCases: [
      { input: { a: 2, d: 3, n: 5 }, expectedOutput: 40 },
      { input: { a: 1, d: 1, n: 10 }, expectedOutput: 55 },
      { input: { a: 5, d: 5, n: 4 }, expectedOutput: 50 },
      { input: { a: 10, d: -2, n: 5 }, expectedOutput: 30 },
      { input: { a: 1, d: 2, n: 1 }, expectedOutput: 1 }
    ]
  },
  {
    id: "bp-q35",
    number: 35,
    title: "Sum of geometric progression",
    category: "Series",
    description: "Write a function to calculate the sum of first N terms of a geometric progression. Given first term 'a' and common ratio 'r'. Formula: a * (r^n - 1) / (r - 1) for r != 1",
    difficulty: "Medium",
    hint: "Use the formula: sum = a * (r^n - 1) / (r - 1) when r != 1, else sum = n * a",
    testCases: [
      { input: { a: 2, r: 3, n: 4 }, expectedOutput: 80 },
      { input: { a: 1, r: 2, n: 5 }, expectedOutput: 31 },
      { input: { a: 5, r: 1, n: 4 }, expectedOutput: 20 },
      { input: { a: 3, r: 2, n: 3 }, expectedOutput: 21 },
      { input: { a: 10, r: 0.5, n: 3 }, expectedOutput: 17.5 }
    ]
  },
  {
    id: "bp-q36",
    number: 36,
    title: "Triangular number series",
    category: "Series",
    description: "Write a function to find the nth triangular number. Triangular numbers: 1, 3, 6, 10, 15... Formula: n*(n+1)/2",
    difficulty: "Easy",
    hint: "Triangular number is the same as sum of first n natural numbers.",
    testCases: [
      { input: { n: 1 }, expectedOutput: 1 },
      { input: { n: 3 }, expectedOutput: 6 },
      { input: { n: 5 }, expectedOutput: 15 },
      { input: { n: 10 }, expectedOutput: 55 },
      { input: { n: 7 }, expectedOutput: 28 }
    ]
  },
  {
    id: "bp-q37",
    number: 37,
    title: "Perfect number check",
    category: "Series",
    description: "Write a function to check if a number is a perfect number. A perfect number equals the sum of its proper divisors (excluding itself). Example: 6 = 1 + 2 + 3",
    difficulty: "Medium",
    hint: "Find all divisors of the number (excluding the number itself) and check if their sum equals the number.",
    testCases: [
      { input: { n: 6 }, expectedOutput: true },
      { input: { n: 28 }, expectedOutput: true },
      { input: { n: 12 }, expectedOutput: false },
      { input: { n: 496 }, expectedOutput: true },
      { input: { n: 10 }, expectedOutput: false }
    ]
  },
  {
    id: "bp-q38",
    number: 38,
    title: "Harmonic series sum",
    category: "Series",
    description: "Write a function to calculate the sum of first N terms of harmonic series: 1 + 1/2 + 1/3 + ... + 1/N",
    difficulty: "Easy",
    hint: "Sum reciprocals from 1 to N.",
    testCases: [
      { input: { n: 1 }, expectedOutput: 1 },
      { input: { n: 2 }, expectedOutput: 1.5 },
      { input: { n: 3 }, expectedOutput: 1.8333333333333333 },
      { input: { n: 5 }, expectedOutput: 2.283333333333333 },
      { input: { n: 10 }, expectedOutput: 2.9289682539682538 }
    ]
  },
  {
    id: "bp-q39",
    number: 39,
    title: "Pascal's triangle - nth row",
    category: "Series",
    description: "Write a function to generate the nth row of Pascal's triangle. Each element is the sum of the two elements above it.",
    difficulty: "Medium",
    hint: "Use combinations: C(n, k) = n! / (k! * (n-k)!)",
    testCases: [
      { input: { n: 0 }, expectedOutput: [1] },
      { input: { n: 1 }, expectedOutput: [1, 1] },
      { input: { n: 3 }, expectedOutput: [1, 3, 3, 1] },
      { input: { n: 4 }, expectedOutput: [1, 4, 6, 4, 1] },
      { input: { n: 5 }, expectedOutput: [1, 5, 10, 10, 5, 1] }
    ]
  },
  {
    id: "bp-q40",
    number: 40,
    title: "Tribonacci series - nth term",
    category: "Series",
    description: "Write a function to find the nth term of Tribonacci series. T(0)=0, T(1)=0, T(2)=1, T(n)=T(n-1)+T(n-2)+T(n-3)",
    difficulty: "Medium",
    hint: "Similar to Fibonacci but sum of last three terms.",
    testCases: [
      { input: { n: 0 }, expectedOutput: 0 },
      { input: { n: 1 }, expectedOutput: 0 },
      { input: { n: 2 }, expectedOutput: 1 },
      { input: { n: 5 }, expectedOutput: 4 },
      { input: { n: 10 }, expectedOutput: 149 }
    ]
  },

  // ========== PRINT PATTERNS (41-55) ==========
  {
    id: "bp-q41",
    number: 41,
    title: "Print right triangle pattern",
    category: "Print Patterns",
    description: "Write a function to print a right triangle pattern with N rows using asterisks. Return as a string with newlines.",
    difficulty: "Easy",
    hint: "For row i, print i asterisks.",
    testCases: [
      { input: { n: 3 }, expectedOutput: "*\n**\n***\n" },
      { input: { n: 5 }, expectedOutput: "*\n**\n***\n****\n*****\n" },
      { input: { n: 1 }, expectedOutput: "*\n" },
      { input: { n: 4 }, expectedOutput: "*\n**\n***\n****\n" }
    ]
  },
  {
    id: "bp-q42",
    number: 42,
    title: "Print inverted right triangle pattern",
    category: "Print Patterns",
    description: "Write a function to print an inverted right triangle pattern with N rows.",
    difficulty: "Easy",
    hint: "For row i, print (n-i+1) asterisks.",
    testCases: [
      { input: { n: 3 }, expectedOutput: "***\n**\n*\n" },
      { input: { n: 5 }, expectedOutput: "*****\n****\n***\n**\n*\n" },
      { input: { n: 1 }, expectedOutput: "*\n" },
      { input: { n: 4 }, expectedOutput: "****\n***\n**\n*\n" }
    ]
  },
  {
    id: "bp-q43",
    number: 43,
    title: "Print pyramid pattern",
    category: "Print Patterns",
    description: "Write a function to print a pyramid pattern with N rows. Each row has spaces and asterisks.",
    difficulty: "Medium",
    hint: "Row i has (n-i) spaces and (2*i-1) asterisks.",
    testCases: [
      { input: { n: 3 }, expectedOutput: "  *\n ***\n*****\n" },
      { input: { n: 5 }, expectedOutput: "    *\n   ***\n  *****\n *******\n*********\n" },
      { input: { n: 1 }, expectedOutput: "*\n" },
      { input: { n: 4 }, expectedOutput: "   *\n  ***\n *****\n*******\n" }
    ]
  },
  {
    id: "bp-q44",
    number: 44,
    title: "Print number triangle pattern",
    category: "Print Patterns",
    description: "Write a function to print a number triangle pattern. Row i contains numbers from 1 to i.",
    difficulty: "Easy",
    hint: "For row i, print numbers 1 to i.",
    testCases: [
      { input: { n: 3 }, expectedOutput: "1\n12\n123\n" },
      { input: { n: 5 }, expectedOutput: "1\n12\n123\n1234\n12345\n" },
      { input: { n: 1 }, expectedOutput: "1\n" },
      { input: { n: 4 }, expectedOutput: "1\n12\n123\n1234\n" }
    ]
  },
  {
    id: "bp-q45",
    number: 45,
    title: "Print diamond pattern",
    category: "Print Patterns",
    description: "Write a function to print a diamond pattern with N rows (N should be odd).",
    difficulty: "Medium",
    hint: "Combine pyramid and inverted pyramid patterns.",
    testCases: [
      { input: { n: 5 }, expectedOutput: "  *\n ***\n*****\n ***\n  *\n" },
      { input: { n: 3 }, expectedOutput: " *\n***\n *\n" },
      { input: { n: 7 }, expectedOutput: "   *\n  ***\n *****\n*******\n *****\n  ***\n   *\n" }
    ]
  },
  {
    id: "bp-q46",
    number: 46,
    title: "Print square pattern",
    category: "Print Patterns",
    description: "Write a function to print a square pattern of NxN asterisks.",
    difficulty: "Easy",
    hint: "Print N rows, each with N asterisks.",
    testCases: [
      { input: { n: 3 }, expectedOutput: "***\n***\n***\n" },
      { input: { n: 5 }, expectedOutput: "*****\n*****\n*****\n*****\n*****\n" },
      { input: { n: 1 }, expectedOutput: "*\n" },
      { input: { n: 4 }, expectedOutput: "****\n****\n****\n****\n" }
    ]
  },
  {
    id: "bp-q47",
    number: 47,
    title: "Print hollow square pattern",
    category: "Print Patterns",
    description: "Write a function to print a hollow square pattern. Only the border has asterisks.",
    difficulty: "Medium",
    hint: "Print asterisks only on first row, last row, first column, and last column.",
    testCases: [
      { input: { n: 3 }, expectedOutput: "***\n* *\n***\n" },
      { input: { n: 5 }, expectedOutput: "*****\n*   *\n*   *\n*   *\n*****\n" },
      { input: { n: 4 }, expectedOutput: "****\n*  *\n*  *\n****\n" }
    ]
  },
  {
    id: "bp-q48",
    number: 48,
    title: "Print number pyramid pattern",
    category: "Print Patterns",
    description: "Write a function to print a number pyramid. Row i contains numbers from 1 to i, centered.",
    difficulty: "Medium",
    hint: "Combine spaces and numbers. Row i has (n-i) spaces and numbers 1 to i.",
    testCases: [
      { input: { n: 3 }, expectedOutput: "  1\n 121\n12321\n" },
      { input: { n: 5 }, expectedOutput: "    1\n   121\n  12321\n 1234321\n123454321\n" },
      { input: { n: 1 }, expectedOutput: "1\n" },
      { input: { n: 4 }, expectedOutput: "   1\n  121\n 12321\n1234321\n" }
    ]
  },
  {
    id: "bp-q49",
    number: 49,
    title: "Print alphabet triangle pattern",
    category: "Print Patterns",
    description: "Write a function to print an alphabet triangle. Row i contains letters from 'A' to the i-th letter.",
    difficulty: "Easy",
    hint: "For row i, print letters from 'A' to char('A' + i - 1).",
    testCases: [
      { input: { n: 3 }, expectedOutput: "A\nAB\nABC\n" },
      { input: { n: 5 }, expectedOutput: "A\nAB\nABC\nABCD\nABCDE\n" },
      { input: { n: 1 }, expectedOutput: "A\n" },
      { input: { n: 4 }, expectedOutput: "A\nAB\nABC\nABCD\n" }
    ]
  },
  {
    id: "bp-q50",
    number: 50,
    title: "Print Floyd's triangle",
    category: "Print Patterns",
    description: "Write a function to print Floyd's triangle. It's a right triangle with consecutive numbers.",
    difficulty: "Easy",
    hint: "Use a counter that increments for each number printed.",
    testCases: [
      { input: { n: 3 }, expectedOutput: "1\n23\n456\n" },
      { input: { n: 5 }, expectedOutput: "1\n23\n456\n78910\n1112131415\n" },
      { input: { n: 1 }, expectedOutput: "1\n" },
      { input: { n: 4 }, expectedOutput: "1\n23\n456\n78910\n" }
    ]
  },
  {
    id: "bp-q51",
    number: 51,
    title: "Print Pascal's triangle pattern",
    category: "Print Patterns",
    description: "Write a function to print Pascal's triangle up to N rows.",
    difficulty: "Hard",
    hint: "Each element is the sum of two elements above it. First and last elements are 1.",
    testCases: [
      { input: { n: 3 }, expectedOutput: "1\n1 1\n1 2 1\n" },
      { input: { n: 5 }, expectedOutput: "1\n1 1\n1 2 1\n1 3 3 1\n1 4 6 4 1\n" },
      { input: { n: 1 }, expectedOutput: "1\n" },
      { input: { n: 4 }, expectedOutput: "1\n1 1\n1 2 1\n1 3 3 1\n" }
    ]
  },
  {
    id: "bp-q52",
    number: 52,
    title: "Print hourglass pattern",
    category: "Print Patterns",
    description: "Write a function to print an hourglass pattern with N rows (N should be odd).",
    difficulty: "Hard",
    hint: "Combine inverted pyramid and pyramid patterns.",
    testCases: [
      { input: { n: 5 }, expectedOutput: "*****\n ***\n  *\n ***\n*****\n" },
      { input: { n: 3 }, expectedOutput: "***\n *\n***\n" },
      { input: { n: 7 }, expectedOutput: "*******\n *****\n  ***\n   *\n  ***\n *****\n*******\n" }
    ]
  },
  {
    id: "bp-q53",
    number: 53,
    title: "Print cross pattern",
    category: "Print Patterns",
    description: "Write a function to print a cross pattern of size N (N should be odd).",
    difficulty: "Medium",
    hint: "Print asterisks where row equals column or row + column equals n+1.",
    testCases: [
      { input: { n: 5 }, expectedOutput: "*   *\n * *\n  *\n * *\n*   *\n" },
      { input: { n: 3 }, expectedOutput: "* *\n *\n* *\n" },
      { input: { n: 7 }, expectedOutput: "*     *\n *   *\n  * *\n   *\n  * *\n *   *\n*     *\n" }
    ]
  },
  {
    id: "bp-q54",
    number: 54,
    title: "Print number square pattern",
    category: "Print Patterns",
    description: "Write a function to print a number square. Each cell contains its row number.",
    difficulty: "Easy",
    hint: "For each row i, print i repeated N times.",
    testCases: [
      { input: { n: 3 }, expectedOutput: "111\n222\n333\n" },
      { input: { n: 5 }, expectedOutput: "11111\n22222\n33333\n44444\n55555\n" },
      { input: { n: 1 }, expectedOutput: "1\n" },
      { input: { n: 4 }, expectedOutput: "1111\n2222\n3333\n4444\n" }
    ]
  },
  {
    id: "bp-q55",
    number: 55,
    title: "Print spiral number pattern",
    category: "Print Patterns",
    description: "Write a function to print a spiral number pattern filling an NxN matrix with numbers 1 to N² in spiral order.",
    difficulty: "Hard",
    hint: "Fill numbers in spiral order: right, down, left, up, repeat.",
    testCases: [
      { input: { n: 3 }, expectedOutput: "123\n894\n765\n" },
      { input: { n: 4 }, expectedOutput: "1234\n1213145\n1116156\n10987\n" }
    ]
  },

  // ========== CONDITIONALS (56-75) ==========
  {
    id: "bp-q56",
    number: 56,
    title: "Find maximum of two numbers",
    category: "Conditionals",
    description: "Write a function to find the maximum of two numbers without using built-in max function.",
    difficulty: "Easy",
    hint: "Use if-else to compare the two numbers.",
    testCases: [
      { input: { a: 5, b: 10 }, expectedOutput: 10 },
      { input: { a: 15, b: 8 }, expectedOutput: 15 },
      { input: { a: -5, b: -10 }, expectedOutput: -5 },
      { input: { a: 0, b: 0 }, expectedOutput: 0 },
      { input: { a: 100, b: 100 }, expectedOutput: 100 }
    ]
  },
  {
    id: "bp-q57",
    number: 57,
    title: "Find maximum of three numbers",
    category: "Conditionals",
    description: "Write a function to find the maximum of three numbers.",
    difficulty: "Easy",
    hint: "Compare all three numbers using nested if-else or multiple conditions.",
    testCases: [
      { input: { a: 5, b: 10, c: 15 }, expectedOutput: 15 },
      { input: { a: 20, b: 8, c: 12 }, expectedOutput: 20 },
      { input: { a: -5, b: -10, c: -1 }, expectedOutput: -1 },
      { input: { a: 0, b: 0, c: 0 }, expectedOutput: 0 },
      { input: { a: 100, b: 200, c: 150 }, expectedOutput: 200 }
    ]
  },
  {
    id: "bp-q58",
    number: 58,
    title: "Check if number is positive, negative, or zero",
    category: "Conditionals",
    description: "Write a function that returns 'positive' if number > 0, 'negative' if number < 0, else 'zero'.",
    difficulty: "Easy",
    hint: "Use if-else if-else structure.",
    testCases: [
      { input: { n: 5 }, expectedOutput: "positive" },
      { input: { n: -5 }, expectedOutput: "negative" },
      { input: { n: 0 }, expectedOutput: "zero" },
      { input: { n: 100 }, expectedOutput: "positive" },
      { input: { n: -100 }, expectedOutput: "negative" }
    ]
  },
  {
    id: "bp-q59",
    number: 59,
    title: "Check if number is even or odd",
    category: "Conditionals",
    description: "Write a function that returns 'even' if number is even, else 'odd'.",
    difficulty: "Easy",
    hint: "Use modulo operator: n % 2 == 0 means even.",
    testCases: [
      { input: { n: 4 }, expectedOutput: "even" },
      { input: { n: 5 }, expectedOutput: "odd" },
      { input: { n: 0 }, expectedOutput: "even" },
      { input: { n: -4 }, expectedOutput: "even" },
      { input: { n: -5 }, expectedOutput: "odd" }
    ]
  },
  {
    id: "bp-q60",
    number: 60,
    title: "Check if year is leap year",
    category: "Conditionals",
    description: "Write a function to check if a year is a leap year. Leap year: divisible by 4, but not by 100 unless also divisible by 400.",
    difficulty: "Easy",
    hint: "Leap year if (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)",
    testCases: [
      { input: { year: 2020 }, expectedOutput: true },
      { input: { year: 2021 }, expectedOutput: false },
      { input: { year: 2000 }, expectedOutput: true },
      { input: { year: 1900 }, expectedOutput: false },
      { input: { year: 2024 }, expectedOutput: true }
    ]
  },
  {
    id: "bp-q61",
    number: 61,
    title: "Check if character is vowel or consonant",
    category: "Conditionals",
    description: "Write a function that returns 'vowel' if character is a vowel (a, e, i, o, u), else 'consonant'. Case insensitive.",
    difficulty: "Easy",
    hint: "Convert to lowercase and check if character is in ['a', 'e', 'i', 'o', 'u'].",
    testCases: [
      { input: { ch: 'a' }, expectedOutput: "vowel" },
      { input: { ch: 'B' }, expectedOutput: "consonant" },
      { input: { ch: 'E' }, expectedOutput: "vowel" },
      { input: { ch: 'z' }, expectedOutput: "consonant" },
      { input: { ch: 'I' }, expectedOutput: "vowel" }
    ]
  },
  {
    id: "bp-q62",
    number: 62,
    title: "Find day of week from number",
    category: "Conditionals",
    description: "Write a function that returns the day name for a number (1=Monday, 2=Tuesday, ..., 7=Sunday).",
    difficulty: "Easy",
    hint: "Use switch-case or if-else to map numbers to day names.",
    testCases: [
      { input: { day: 1 }, expectedOutput: "Monday" },
      { input: { day: 3 }, expectedOutput: "Wednesday" },
      { input: { day: 7 }, expectedOutput: "Sunday" },
      { input: { day: 5 }, expectedOutput: "Friday" },
      { input: { day: 2 }, expectedOutput: "Tuesday" }
    ]
  },
  {
    id: "bp-q63",
    number: 63,
    title: "Check if triangle is valid",
    category: "Conditionals",
    description: "Write a function to check if three sides can form a valid triangle. Sum of any two sides must be greater than the third.",
    difficulty: "Easy",
    hint: "Check: a + b > c && b + c > a && c + a > b",
    testCases: [
      { input: { a: 3, b: 4, c: 5 }, expectedOutput: true },
      { input: { a: 1, b: 2, c: 3 }, expectedOutput: false },
      { input: { a: 5, b: 5, c: 5 }, expectedOutput: true },
      { input: { a: 10, b: 5, c: 3 }, expectedOutput: false },
      { input: { a: 7, b: 10, c: 5 }, expectedOutput: true }
    ]
  },
  {
    id: "bp-q64",
    number: 64,
    title: "Check type of triangle",
    category: "Conditionals",
    description: "Write a function to determine triangle type: 'equilateral' (all sides equal), 'isosceles' (two sides equal), or 'scalene' (all sides different).",
    difficulty: "Easy",
    hint: "First check if valid triangle, then compare sides.",
    testCases: [
      { input: { a: 5, b: 5, c: 5 }, expectedOutput: "equilateral" },
      { input: { a: 5, b: 5, c: 6 }, expectedOutput: "isosceles" },
      { input: { a: 3, b: 4, c: 5 }, expectedOutput: "scalene" },
      { input: { a: 7, b: 7, c: 10 }, expectedOutput: "isosceles" },
      { input: { a: 6, b: 8, c: 10 }, expectedOutput: "scalene" }
    ]
  },
  {
    id: "bp-q65",
    number: 65,
    title: "Calculate grade from marks",
    category: "Conditionals",
    description: "Write a function to calculate grade: A (90-100), B (80-89), C (70-79), D (60-69), F (<60).",
    difficulty: "Easy",
    hint: "Use if-else if chain to check mark ranges.",
    testCases: [
      { input: { marks: 95 }, expectedOutput: "A" },
      { input: { marks: 85 }, expectedOutput: "B" },
      { input: { marks: 75 }, expectedOutput: "C" },
      { input: { marks: 65 }, expectedOutput: "D" },
      { input: { marks: 45 }, expectedOutput: "F" }
    ]
  },
  {
    id: "bp-q66",
    number: 66,
    title: "Check if number is in range",
    category: "Conditionals",
    description: "Write a function to check if a number is within a given range [start, end] (inclusive).",
    difficulty: "Easy",
    hint: "Check if n >= start && n <= end",
    testCases: [
      { input: { n: 5, start: 1, end: 10 }, expectedOutput: true },
      { input: { n: 15, start: 1, end: 10 }, expectedOutput: false },
      { input: { n: 1, start: 1, end: 10 }, expectedOutput: true },
      { input: { n: 10, start: 1, end: 10 }, expectedOutput: true },
      { input: { n: 0, start: 1, end: 10 }, expectedOutput: false }
    ]
  },
  {
    id: "bp-q67",
    number: 67,
    title: "Find absolute value",
    category: "Conditionals",
    description: "Write a function to find absolute value of a number without using built-in abs function.",
    difficulty: "Easy",
    hint: "If number < 0, return -number, else return number.",
    testCases: [
      { input: { n: 5 }, expectedOutput: 5 },
      { input: { n: -5 }, expectedOutput: 5 },
      { input: { n: 0 }, expectedOutput: 0 },
      { input: { n: -100 }, expectedOutput: 100 },
      { input: { n: 100 }, expectedOutput: 100 }
    ]
  },
  {
    id: "bp-q68",
    number: 68,
    title: "Check if number is perfect square",
    category: "Conditionals",
    description: "Write a function to check if a number is a perfect square.",
    difficulty: "Easy",
    hint: "Check if square root of number is an integer, or iterate from 1 to sqrt(n).",
    testCases: [
      { input: { n: 16 }, expectedOutput: true },
      { input: { n: 25 }, expectedOutput: true },
      { input: { n: 14 }, expectedOutput: false },
      { input: { n: 1 }, expectedOutput: true },
      { input: { n: 0 }, expectedOutput: true }
    ]
  },
  {
    id: "bp-q69",
    number: 69,
    title: "Check if number is power of 2",
    category: "Conditionals",
    description: "Write a function to check if a number is a power of 2 (1, 2, 4, 8, 16, ...).",
    difficulty: "Easy",
    hint: "Keep dividing by 2 until you get 1, or use bit manipulation: (n & (n-1)) == 0 for n > 0.",
    testCases: [
      { input: { n: 8 }, expectedOutput: true },
      { input: { n: 16 }, expectedOutput: true },
      { input: { n: 15 }, expectedOutput: false },
      { input: { n: 1 }, expectedOutput: true },
      { input: { n: 0 }, expectedOutput: false }
    ]
  },
  {
    id: "bp-q70",
    number: 70,
    title: "Compare two numbers",
    category: "Conditionals",
    description: "Write a function that returns 'greater', 'lesser', or 'equal' comparing two numbers.",
    difficulty: "Easy",
    hint: "Use if-else if-else to compare a and b.",
    testCases: [
      { input: { a: 5, b: 10 }, expectedOutput: "lesser" },
      { input: { a: 15, b: 8 }, expectedOutput: "greater" },
      { input: { a: 5, b: 5 }, expectedOutput: "equal" },
      { input: { a: -5, b: -10 }, expectedOutput: "greater" },
      { input: { a: 0, b: 0 }, expectedOutput: "equal" }
    ]
  },
  {
    id: "bp-q71",
    number: 71,
    title: "Check if number is divisible by both 3 and 5",
    category: "Conditionals",
    description: "Write a function that returns true if number is divisible by both 3 and 5, else false.",
    difficulty: "Easy",
    hint: "Check if n % 3 == 0 && n % 5 == 0",
    testCases: [
      { input: { n: 15 }, expectedOutput: true },
      { input: { n: 30 }, expectedOutput: true },
      { input: { n: 9 }, expectedOutput: false },
      { input: { n: 10 }, expectedOutput: false },
      { input: { n: 45 }, expectedOutput: true }
    ]
  },
  {
    id: "bp-q72",
    number: 72,
    title: "Find minimum of three numbers",
    category: "Conditionals",
    description: "Write a function to find the minimum of three numbers.",
    difficulty: "Easy",
    hint: "Compare all three numbers using nested if-else or multiple conditions.",
    testCases: [
      { input: { a: 5, b: 10, c: 15 }, expectedOutput: 5 },
      { input: { a: 20, b: 8, c: 12 }, expectedOutput: 8 },
      { input: { a: -5, b: -10, c: -1 }, expectedOutput: -10 },
      { input: { a: 0, b: 0, c: 0 }, expectedOutput: 0 },
      { input: { a: 100, b: 200, c: 150 }, expectedOutput: 100 }
    ]
  },
  {
    id: "bp-q73",
    number: 73,
    title: "Check if number is multiple of another",
    category: "Conditionals",
    description: "Write a function to check if number 'a' is a multiple of number 'b'.",
    difficulty: "Easy",
    hint: "Check if a % b == 0",
    testCases: [
      { input: { a: 15, b: 3 }, expectedOutput: true },
      { input: { a: 20, b: 5 }, expectedOutput: true },
      { input: { a: 17, b: 5 }, expectedOutput: false },
      { input: { a: 0, b: 5 }, expectedOutput: true },
      { input: { a: 10, b: 3 }, expectedOutput: false }
    ]
  },
  {
    id: "bp-q74",
    number: 74,
    title: "Check if number is between two numbers",
    category: "Conditionals",
    description: "Write a function to check if a number is strictly between two other numbers (exclusive).",
    difficulty: "Easy",
    hint: "Check if n > min && n < max",
    testCases: [
      { input: { n: 5, min: 1, max: 10 }, expectedOutput: true },
      { input: { n: 1, min: 1, max: 10 }, expectedOutput: false },
      { input: { n: 10, min: 1, max: 10 }, expectedOutput: false },
      { input: { n: 15, min: 1, max: 10 }, expectedOutput: false },
      { input: { n: 7, min: 5, max: 10 }, expectedOutput: true }
    ]
  },
  {
    id: "bp-q75",
    number: 75,
    title: "Check if three numbers are in ascending order",
    category: "Conditionals",
    description: "Write a function to check if three numbers are in strictly ascending order (a < b < c).",
    difficulty: "Easy",
    hint: "Check if a < b && b < c",
    testCases: [
      { input: { a: 1, b: 2, c: 3 }, expectedOutput: true },
      { input: { a: 5, b: 3, c: 7 }, expectedOutput: false },
      { input: { a: 1, b: 1, c: 3 }, expectedOutput: false },
      { input: { a: 10, b: 20, c: 30 }, expectedOutput: true },
      { input: { a: 5, b: 10, c: 5 }, expectedOutput: false }
    ]
  }
]

// Helper functions
export const getQuestionById = (id) => {
  return baseProgrammingQuestions.find(q => q.id === id)
}

export const getAllQuestions = () => {
  return baseProgrammingQuestions
}

export const getTotalQuestions = () => {
  return baseProgrammingQuestions.length
}

export const getQuestionsByCategory = (category) => {
  return baseProgrammingQuestions.filter(q => q.category === category)
}

export const getQuestionsByDifficulty = (difficulty) => {
  return baseProgrammingQuestions.filter(q => q.difficulty === difficulty)
}

