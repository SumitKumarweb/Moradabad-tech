// Script to generate top DSA problems file with all problems
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to generate slug
function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Helper function to assign difficulty
function assignDifficulty(category, problemTitle) {
  const title = problemTitle.toLowerCase();
  
  if (title.includes('kadane') || title.includes('kmp') || title.includes('rabin karp') ||
      title.includes('boyer moore') || title.includes('edit distance') || 
      title.includes('longest common subsequence') || title.includes('travelling salesman') ||
      title.includes('dijkstra') || title.includes('bellman ford') || title.includes('floyd warshall') ||
      title.includes('merge intervals') || title.includes('next permutation') ||
      title.includes('trapping rain') || title.includes('median of 2 sorted') ||
      title.includes('word break') || title.includes('knapsack') ||
      title.includes('n-queen') || title.includes('sudoku') ||
      title.includes('graph coloring') || title.includes('topological sort') ||
      title.includes('dynamic programming') || title.includes('[v.imp]') || title.includes('[very imp]')) {
    return 'hard';
  }
  
  if (title.includes('kth') || title.includes('rotate') || title.includes('merge') ||
      title.includes('reverse') || title.includes('subarray') || title.includes('substring') ||
      title.includes('palindrome') || title.includes('anagram') || 
      title.includes('binary search') || title.includes('two pointer') ||
      title.includes('sliding window') || title.includes('heap') ||
      title.includes('tree') || title.includes('linked list') ||
      title.includes('graph') || title.includes('backtrack')) {
    return 'medium';
  }
  
  return 'easy';
}

// Generate test cases
function generateTestCases(category, title) {
  const titleLower = title.toLowerCase();
  
  if (category === 'Array') {
    if (titleLower.includes('reverse')) {
      return [
        { input: { arr: [1, 2, 3, 4, 5] }, expectedOutput: [5, 4, 3, 2, 1] },
        { input: { arr: [1, 2] }, expectedOutput: [2, 1] },
        { input: { arr: [1] }, expectedOutput: [1] }
      ];
    }
    if (titleLower.includes('maximum and minimum')) {
      return [
        { input: { arr: [3, 5, 1, 8, 2] }, expectedOutput: { max: 8, min: 1 } },
        { input: { arr: [1] }, expectedOutput: { max: 1, min: 1 } }
      ];
    }
    if (titleLower.includes('kth')) {
      return [
        { input: { arr: [7, 10, 4, 3, 20, 15], k: 3 }, expectedOutput: 7 },
        { input: { arr: [7, 10, 4, 3, 20, 15], k: 4 }, expectedOutput: 10 }
      ];
    }
    if (titleLower.includes('sort') && titleLower.includes('0') && titleLower.includes('1') && titleLower.includes('2')) {
      return [
        { input: { arr: [2, 0, 2, 1, 1, 0] }, expectedOutput: [0, 0, 1, 1, 2, 2] },
        { input: { arr: [2, 0, 1] }, expectedOutput: [0, 1, 2] }
      ];
    }
    if (titleLower.includes('kadane') || (titleLower.includes('largest sum') && titleLower.includes('subarray'))) {
      return [
        { input: { arr: [-2, 1, -3, 4, -1, 2, 1, -5, 4] }, expectedOutput: 6 },
        { input: { arr: [1] }, expectedOutput: 1 },
        { input: { arr: [5, 4, -1, 7, 8] }, expectedOutput: 23 }
      ];
    }
    return [
      { input: { arr: [1, 2, 3, 4, 5] }, expectedOutput: [1, 2, 3, 4, 5] },
      { input: { arr: [1] }, expectedOutput: [1] }
    ];
  }
  
  if (category === 'String') {
    if (titleLower.includes('reverse')) {
      return [
        { input: { str: "hello" }, expectedOutput: "olleh" },
        { input: { str: "abcd" }, expectedOutput: "dcba" }
      ];
    }
    if (titleLower.includes('palindrome')) {
      return [
        { input: { str: "racecar" }, expectedOutput: true },
        { input: { str: "hello" }, expectedOutput: false }
      ];
    }
    return [
      { input: { str: "test" }, expectedOutput: "test" }
    ];
  }
  
  return [
    { input: {}, expectedOutput: null }
  ];
}

// Generate hint
function generateHint(category, title) {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('reverse')) return 'Use two pointers approach - one from start and one from end, swap elements until they meet.';
  if (titleLower.includes('maximum') || titleLower.includes('minimum')) return 'Iterate through the array and keep track of maximum and minimum values seen so far.';
  if (titleLower.includes('kth')) return 'Use sorting or quickselect algorithm. For better time complexity, use heap or quickselect.';
  if (titleLower.includes('kadane')) return 'Use Kadane\'s algorithm: maintain current sum and maximum sum. Reset current sum to 0 if it becomes negative.';
  if (titleLower.includes('palindrome')) return 'Use two pointers from both ends, compare characters. For longest palindromic substring, use dynamic programming or expand around centers.';
  if (titleLower.includes('duplicate')) return 'Use hash set or hash map to track seen elements. For array of N+1 integers, use Floyd\'s cycle detection.';
  if (titleLower.includes('union') || titleLower.includes('intersection')) return 'Use two pointers for sorted arrays, or use hash sets for unsorted arrays.';
  if (titleLower.includes('binary search')) return 'Use binary search: maintain left and right pointers, calculate mid, and adjust pointers based on comparison.';
  if (titleLower.includes('dynamic programming') || titleLower.includes('dp')) return 'Identify the subproblem and recurrence relation. Build a DP table bottom-up or use memoization for top-down approach.';
  if (titleLower.includes('tree')) return 'Use recursion or iterative approach with stack/queue. For tree problems, think about DFS (depth-first) or BFS (breadth-first) traversal.';
  if (titleLower.includes('graph')) return 'Use BFS or DFS for traversal. For shortest path, consider Dijkstra\'s or BFS. For cycles, use DFS with visited tracking.';
  
  return `Think about the problem step by step. Consider edge cases and optimize your solution.`;
}

// All problems from user's list
const allProblems = [
  // Array (36 problems)
  { category: 'Array', title: 'Reverse the array' },
  { category: 'Array', title: 'Find the maximum and minimum element in an array' },
  { category: 'Array', title: 'Find the "Kth" max and min element of an array' },
  { category: 'Array', title: 'Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo' },
  { category: 'Array', title: 'Move all the negative elements to one side of the array' },
  { category: 'Array', title: 'Find the Union and Intersection of the two sorted arrays' },
  { category: 'Array', title: 'Write a program to cyclically rotate an array by one' },
  { category: 'Array', title: 'find Largest sum contiguous Subarray [V. IMP]' },
  { category: 'Array', title: 'Minimise the maximum difference between heights [V.IMP]' },
  { category: 'Array', title: 'Minimum no. of Jumps to reach end of an array' },
  { category: 'Array', title: 'find duplicate in an array of N+1 Integers' },
  { category: 'Array', title: 'Merge 2 sorted arrays without using Extra space' },
  { category: 'Array', title: 'Kadane\'s Algo [V.V.V.V.V IMP]' },
  { category: 'Array', title: 'Merge Intervals' },
  { category: 'Array', title: 'Next Permutation' },
  { category: 'Array', title: 'Count Inversion' },
  { category: 'Array', title: 'Best time to buy and Sell stock' },
  { category: 'Array', title: 'find all pairs on integer array whose sum is equal to given number' },
  { category: 'Array', title: 'find common elements In 3 sorted arrays' },
  { category: 'Array', title: 'Rearrange the array in alternating positive and negative items with O(1) extra space' },
  { category: 'Array', title: 'Find if there is any subarray with sum equal to 0' },
  { category: 'Array', title: 'Find factorial of a large number' },
  { category: 'Array', title: 'find maximum product subarray' },
  { category: 'Array', title: 'Find longest coinsecutive subsequence' },
  { category: 'Array', title: 'Given an array of size n and a number k, fin all elements that appear more than " n/k " times' },
  { category: 'Array', title: 'Maximum profit by buying and selling a share atmost twice' },
  { category: 'Array', title: 'Find whether an array is a subset of another array' },
  { category: 'Array', title: 'Find the triplet that sum to a given value' },
  { category: 'Array', title: 'Trapping Rain water problem' },
  { category: 'Array', title: 'Chocolate Distribution problem' },
  { category: 'Array', title: 'Smallest Subarray with sum greater than a given value' },
  { category: 'Array', title: 'Three way partitioning of an array around a given value' },
  { category: 'Array', title: 'Minimum swaps required bring elements less equal K together' },
  { category: 'Array', title: 'Minimum no. of operations required to make an array palindrome' },
  { category: 'Array', title: 'Median of 2 sorted arrays of equal size' },
  { category: 'Array', title: 'Median of 2 sorted arrays of different size' },
  
  // Matrix (10 problems)
  { category: 'Matrix', title: 'Spiral traversal on a Matrix' },
  { category: 'Matrix', title: 'Search an element in a matriix' },
  { category: 'Matrix', title: 'Find median in a row wise sorted matrix' },
  { category: 'Matrix', title: 'Find row with maximum no. of 1\'s' },
  { category: 'Matrix', title: 'Print elements in sorted order using row-column wise sorted matrix' },
  { category: 'Matrix', title: 'Maximum size rectangle' },
  { category: 'Matrix', title: 'Find a specific pair in matrix' },
  { category: 'Matrix', title: 'Rotate matrix by 90 degrees' },
  { category: 'Matrix', title: 'Kth smallest element in a row-cpumn wise sorted matrix' },
  { category: 'Matrix', title: 'Common elements in all rows of a given matrix' },
  
  // String (43 problems)
  { category: 'String', title: 'Reverse a String' },
  { category: 'String', title: 'Check whether a String is Palindrome or not' },
  { category: 'String', title: 'Find Duplicate characters in a string' },
  { category: 'String', title: 'Why strings are immutable in Java?' },
  { category: 'String', title: 'Write a Code to check whether one string is a rotation of another' },
  { category: 'String', title: 'Write a Program to check whether a string is a valid shuffle of two strings or not' },
  { category: 'String', title: 'Count and Say problem' },
  { category: 'String', title: 'Write a program to find the longest Palindrome in a string.[ Longest palindromic Substring]' },
  { category: 'String', title: 'Find Longest Recurring Subsequence in String' },
  { category: 'String', title: 'Print all Subsequences of a string' },
  { category: 'String', title: 'Print all the permutations of the given string' },
  { category: 'String', title: 'Split the Binary string into two substring with equal 0\'s and 1\'s' },
  { category: 'String', title: 'Word Wrap Problem [VERY IMP]' },
  { category: 'String', title: 'EDIT Distance [Very Imp]' },
  { category: 'String', title: 'Find next greater number with same set of digits. [Very Very IMP]' },
  { category: 'String', title: 'Balanced Parenthesis problem.[Imp]' },
  { category: 'String', title: 'Word break Problem[ Very Imp]' },
  { category: 'String', title: 'Rabin Karp Algo' },
  { category: 'String', title: 'KMP Algo' },
  { category: 'String', title: 'Convert a Sentence into its equivalent mobile numeric keypad sequence' },
  { category: 'String', title: 'Minimum number of bracket reversals needed to make an expression balanced' },
  { category: 'String', title: 'Count All Palindromic Subsequence in a given String' },
  { category: 'String', title: 'Count of number of given string in 2D character array' },
  { category: 'String', title: 'Search a Word in a 2D Grid of characters' },
  { category: 'String', title: 'Boyer Moore Algorithm for Pattern Searching' },
  { category: 'String', title: 'Converting Roman Numerals to Decimal' },
  { category: 'String', title: 'Longest Common Prefix' },
  { category: 'String', title: 'Number of flips to make binary string alternate' },
  { category: 'String', title: 'Find the first repeated word in string' },
  { category: 'String', title: 'Minimum number of swaps for bracket balancing' },
  { category: 'String', title: 'Find the longest common subsequence between two strings' },
  { category: 'String', title: 'Program to generate all possible valid IP addresses from given  string' },
  { category: 'String', title: 'Write a program tofind the smallest window that contains all characters of string itself' },
  { category: 'String', title: 'Rearrange characters in a string such that no two adjacent are same' },
  { category: 'String', title: 'Minimum characters to be added at front to make string palindrome' },
  { category: 'String', title: 'Given a sequence of words, print all anagrams together' },
  { category: 'String', title: 'Find the smallest window in a string containing all characters of another string' },
  { category: 'String', title: 'Recursively remove all adjacent duplicates' },
  { category: 'String', title: 'String matching where one string contains wildcard characters' },
  { category: 'String', title: 'Function to find Number of customers who could not get a computer' },
  { category: 'String', title: 'Transform One String to Another using Minimum Number of Given Operation' },
  { category: 'String', title: 'Check if two given strings are isomorphic to each other' },
  { category: 'String', title: 'Recursively print all sentences that can be formed from list of word lists' },
  
  // Searching & Sorting (40 problems)
  { category: 'Searching & Sorting', title: 'Find first and last positions of an element in a sorted array' },
  { category: 'Searching & Sorting', title: 'Find a Fixed Point (Value equal to index) in a given array' },
  { category: 'Searching & Sorting', title: 'Search in a rotated sorted array' },
  { category: 'Searching & Sorting', title: 'square root of an integer' },
  { category: 'Searching & Sorting', title: 'Maximum and minimum of an array using minimum number of comparisons' },
  { category: 'Searching & Sorting', title: 'Optimum location of point to minimize total distance' },
  { category: 'Searching & Sorting', title: 'Find the repeating and the missing' },
  { category: 'Searching & Sorting', title: 'find majority element' },
  { category: 'Searching & Sorting', title: 'Searching in an array where adjacent differ by at most k' },
  { category: 'Searching & Sorting', title: 'find a pair with a given difference' },
  { category: 'Searching & Sorting', title: 'find four elements that sum to a given value' },
  { category: 'Searching & Sorting', title: 'maximum sum such that no 2 elements are adjacent' },
  { category: 'Searching & Sorting', title: 'Count triplet with sum smaller than a given value' },
  { category: 'Searching & Sorting', title: 'merge 2 sorted arrays' },
  { category: 'Searching & Sorting', title: 'print all subarrays with 0 sum' },
  { category: 'Searching & Sorting', title: 'Product array Puzzle' },
  { category: 'Searching & Sorting', title: 'Sort array according to count of set bits' },
  { category: 'Searching & Sorting', title: 'minimum no. of swaps required to sort the array' },
  { category: 'Searching & Sorting', title: 'Bishu and Soldiers' },
  { category: 'Searching & Sorting', title: 'Rasta and Kheshtak' },
  { category: 'Searching & Sorting', title: 'Kth smallest number again' },
  { category: 'Searching & Sorting', title: 'Find pivot element in a sorted array' },
  { category: 'Searching & Sorting', title: 'K-th Element of Two Sorted Arrays' },
  { category: 'Searching & Sorting', title: 'Aggressive cows' },
  { category: 'Searching & Sorting', title: 'Book Allocation Problem' },
  { category: 'Searching & Sorting', title: 'EKOSPOJ:' },
  { category: 'Searching & Sorting', title: 'Job Scheduling Algo' },
  { category: 'Searching & Sorting', title: 'Missing Number in AP' },
  { category: 'Searching & Sorting', title: 'Smallest number with atleastn trailing zeroes infactorial' },
  { category: 'Searching & Sorting', title: 'Painters Partition Problem:' },
  { category: 'Searching & Sorting', title: 'ROTI-Prata SPOJ' },
  { category: 'Searching & Sorting', title: 'DoubleHelix SPOJ' },
  { category: 'Searching & Sorting', title: 'Subset Sums' },
  { category: 'Searching & Sorting', title: 'Findthe inversion count' },
  { category: 'Searching & Sorting', title: 'Implement Merge-sort in-place' },
  { category: 'Searching & Sorting', title: 'Partitioning and Sorting Arrays with Many Repeated Entries' },
  
  // LinkedList (40 problems)
  { category: 'LinkedList', title: 'Write a Program to reverse the Linked List. (Both Iterative and recursive)' },
  { category: 'LinkedList', title: 'Reverse a Linked List in group of Given Size. [Very Imp]' },
  { category: 'LinkedList', title: 'Write a program to Detect loop in a linked list' },
  { category: 'LinkedList', title: 'Write a program to Delete loop in a linked list' },
  { category: 'LinkedList', title: 'Find the starting point of the loop' },
  { category: 'LinkedList', title: 'Remove Duplicates in a sorted Linked List' },
  { category: 'LinkedList', title: 'Remove Duplicates in a Un-sorted Linked List' },
  { category: 'LinkedList', title: 'Write a Program to Move the last element to Front in a Linked List' },
  { category: 'LinkedList', title: 'Add "1" to a number represented as a Linked List' },
  { category: 'LinkedList', title: 'Add two numbers represented by linked lists' },
  { category: 'LinkedList', title: 'Intersection of two Sorted Linked List' },
  { category: 'LinkedList', title: 'Intersection Point of two Linked Lists' },
  { category: 'LinkedList', title: 'Merge Sort For Linked lists.[Very Important]' },
  { category: 'LinkedList', title: 'Quicksort for Linked Lists.[Very Important]' },
  { category: 'LinkedList', title: 'Find the middle Element of a linked list' },
  { category: 'LinkedList', title: 'Check if a linked list is a circular linked list' },
  { category: 'LinkedList', title: 'Split a Circular linked list into two halves' },
  { category: 'LinkedList', title: 'Write a Program to check whether the Singly Linked list is a palindrome or not' },
  { category: 'LinkedList', title: 'Deletion from a Circular Linked List' },
  { category: 'LinkedList', title: 'Reverse a Doubly Linked list' },
  { category: 'LinkedList', title: 'Find pairs with a given sum in a DLL' },
  { category: 'LinkedList', title: 'Count triplets in a sorted DLL whose sum is equal to given value "X"' },
  { category: 'LinkedList', title: 'Sort a "k"sorted Doubly Linked list.[Very IMP]' },
  { category: 'LinkedList', title: 'Rotate DoublyLinked list by N nodes' },
  { category: 'LinkedList', title: 'Rotate a Doubly Linked list in group of Given Size.[Very IMP]' },
  { category: 'LinkedList', title: 'Can we reverse a linked list in less than O(n) ?' },
  { category: 'LinkedList', title: 'Why Quicksort is preferred for. Arrays and Merge Sort for LinkedLists ?' },
  { category: 'LinkedList', title: 'Flatten a Linked List' },
  { category: 'LinkedList', title: 'Sort a LL of 0\'s, 1\'s and 2\'s' },
  { category: 'LinkedList', title: 'Clone a linked list with next and random pointer' },
  { category: 'LinkedList', title: 'Merge K sorted Linked list' },
  { category: 'LinkedList', title: 'Multiply 2 no. represented by LL' },
  { category: 'LinkedList', title: 'Delete nodes which have a greater value on right side' },
  { category: 'LinkedList', title: 'Segregate even and odd nodes in a Linked List' },
  { category: 'LinkedList', title: 'Program for n\'th node from the end of a Linked List' },
  { category: 'LinkedList', title: 'Find the first non-repeating character from a stream of characters' },
  
  // Binary Trees (30 problems)
  { category: 'Binary Trees', title: 'level order traversal' },
  { category: 'Binary Trees', title: 'Reverse Level Order traversal' },
  { category: 'Binary Trees', title: 'Height of a tree' },
  { category: 'Binary Trees', title: 'Diameter of a tree' },
  { category: 'Binary Trees', title: 'Mirror of a tree' },
  { category: 'Binary Trees', title: 'Inorder Traversal of a tree both using recursion and Iteration' },
  { category: 'Binary Trees', title: 'Preorder Traversal of a tree both using recursion and Iteration' },
  { category: 'Binary Trees', title: 'Postorder Traversal of a tree both using recursion and Iteration' },
  { category: 'Binary Trees', title: 'Left View of a tree' },
  { category: 'Binary Trees', title: 'Right View of Tree' },
  { category: 'Binary Trees', title: 'Top View of a tree' },
  { category: 'Binary Trees', title: 'Bottom View of a tree' },
  { category: 'Binary Trees', title: 'Zig-Zag traversal of a binary tree' },
  { category: 'Binary Trees', title: 'Check if a tree is balanced or not' },
  { category: 'Binary Trees', title: 'Diagnol Traversal of a Binary tree' },
  { category: 'Binary Trees', title: 'Boundary traversal of a Binary tree' },
  { category: 'Binary Trees', title: 'Construct Binary Tree from String with Bracket Representation' },
  { category: 'Binary Trees', title: 'Convert Binary tree into Doubly Linked List' },
  { category: 'Binary Trees', title: 'Convert Binary tree into Sum tree' },
  { category: 'Binary Trees', title: 'Construct Binary tree from Inorder and preorder traversal' },
  { category: 'Binary Trees', title: 'Find minimum swaps required to convert a Binary tree into BST' },
  { category: 'Binary Trees', title: 'Check if Binary tree is Sum tree or not' },
  { category: 'Binary Trees', title: 'Check if all leaf nodes are at same level or not' },
  { category: 'Binary Trees', title: 'Check if a Binary Tree contains duplicate subtrees of size 2 or more [ IMP ]' },
  { category: 'Binary Trees', title: 'Check if 2 trees are mirror or not' },
  { category: 'Binary Trees', title: 'Sum of Nodes on the Longest path from root to leaf node' },
  { category: 'Binary Trees', title: 'Check if given graph is tree or not.  [ IMP ]' },
  { category: 'Binary Trees', title: 'Find Largest subtree sum in a tree' },
  { category: 'Binary Trees', title: 'Maximum Sum of nodes in Binary tree such that no two are adjacent' },
  { category: 'Binary Trees', title: 'Print all "K" Sum paths in a Binary tree' },
  { category: 'Binary Trees', title: 'Find LCA in a Binary tree' },
  { category: 'Binary Trees', title: 'Find distance between 2 nodes in a Binary tree' },
  { category: 'Binary Trees', title: 'Kth Ancestor of node in a Binary tree' },
  { category: 'Binary Trees', title: 'Find all Duplicate subtrees in a Binary tree [ IMP ]' },
  { category: 'Binary Trees', title: 'Tree Isomorphism Problem' },
  
  // Binary Search Trees (20 problems)
  { category: 'Binary Search Trees', title: 'Fina a value in a BST' },
  { category: 'Binary Search Trees', title: 'Deletion of a node in a BST' },
  { category: 'Binary Search Trees', title: 'Find min and max value in a BST' },
  { category: 'Binary Search Trees', title: 'Find inorder successor and inorder predecessor in a BST' },
  { category: 'Binary Search Trees', title: 'Check if a tree is a BST or not' },
  { category: 'Binary Search Trees', title: 'Populate Inorder successor of all nodes' },
  { category: 'Binary Search Trees', title: 'Find LCA  of 2 nodes in a BST' },
  { category: 'Binary Search Trees', title: 'Construct BST from preorder traversal' },
  { category: 'Binary Search Trees', title: 'Convert Binary tree into BST' },
  { category: 'Binary Search Trees', title: 'Convert a normal BST into a Balanced BST' },
  { category: 'Binary Search Trees', title: 'Merge two BST [ V.V.V>IMP ]' },
  { category: 'Binary Search Trees', title: 'Find Kth largest element in a BST' },
  { category: 'Binary Search Trees', title: 'Find Kth smallest element in a BST' },
  { category: 'Binary Search Trees', title: 'Count pairs from 2 BST whose sum is equal to given value "X"' },
  { category: 'Binary Search Trees', title: 'Find the median of BST in O(n) time and O(1) space' },
  { category: 'Binary Search Trees', title: 'Count BST ndoes that lie in a given range' },
  { category: 'Binary Search Trees', title: 'Replace every element with the least greater element on its right' },
  { category: 'Binary Search Trees', title: 'Given "n" appointments, find the conflicting appointments' },
  { category: 'Binary Search Trees', title: 'Check preorder is valid or not' },
  { category: 'Binary Search Trees', title: 'Check whether BST contains Dead end' },
  { category: 'Binary Search Trees', title: 'Largest BST in a Binary Tree [ V.V.V.V.V IMP ]' },
  { category: 'Binary Search Trees', title: 'Flatten BST to sorted list' },
  
  // Greedy (30 problems)
  { category: 'Greedy', title: 'Activity Selection Problem' },
  { category: 'Greedy', title: 'Job SequencingProblem' },
  { category: 'Greedy', title: 'Huffman Coding' },
  { category: 'Greedy', title: 'Water Connection Problem' },
  { category: 'Greedy', title: 'Fractional Knapsack Problem' },
  { category: 'Greedy', title: 'Greedy Algorithm to find Minimum number of Coins' },
  { category: 'Greedy', title: 'Maximum trains for which stoppage can be provided' },
  { category: 'Greedy', title: 'Minimum Platforms Problem' },
  { category: 'Greedy', title: 'Buy Maximum Stocks if i stocks can be bought on i-th day' },
  { category: 'Greedy', title: 'Find the minimum and maximum amount to buy all N candies' },
  { category: 'Greedy', title: 'Minimize Cash Flow among a given set of friends who have borrowed money from each other' },
  { category: 'Greedy', title: 'Minimum Cost to cut a board into squares' },
  { category: 'Greedy', title: 'Check if it is possible to survive on Island' },
  { category: 'Greedy', title: 'Find maximum meetings in one room' },
  { category: 'Greedy', title: 'Maximum product subset of an array' },
  { category: 'Greedy', title: 'Maximize array sum after K negations' },
  { category: 'Greedy', title: 'Maximize the sum of arr[i]*i' },
  { category: 'Greedy', title: 'Maximum sum of absolute difference of an array' },
  { category: 'Greedy', title: 'Maximize sum of consecutive differences in a circular array' },
  { category: 'Greedy', title: 'Minimum sum of absolute difference of pairs of two arrays' },
  { category: 'Greedy', title: 'Program for Shortest Job First (or SJF) CPU Scheduling' },
  { category: 'Greedy', title: 'Program for Least Recently Used (LRU) Page Replacement algorithm' },
  { category: 'Greedy', title: 'Smallest subset with sum greater than all other elements' },
  { category: 'Greedy', title: 'Chocolate Distribution Problem' },
  { category: 'Greedy', title: 'DEFKIN -Defense of a Kingdom' },
  { category: 'Greedy', title: 'DIEHARD -DIE HARD' },
  { category: 'Greedy', title: 'GERGOVIA -Wine trading in Gergovia' },
  { category: 'Greedy', title: 'Picking Up Chicks' },
  { category: 'Greedy', title: 'CHOCOLA –Chocolate' },
  { category: 'Greedy', title: 'ARRANGE -Arranging Amplifiers' },
  { category: 'Greedy', title: 'K Centers Problem' },
  { category: 'Greedy', title: 'Minimum Cost of ropes' },
  { category: 'Greedy', title: 'Find smallest number with given number of digits and sum of digits' },
  { category: 'Greedy', title: 'Rearrange characters in a string such that no two adjacent are same' },
  { category: 'Greedy', title: 'Find maximum sum possible equal sum of three stacks' },
  
  // BackTracking (20 problems)
  { category: 'BackTracking', title: 'Rat in a maze Problem' },
  { category: 'BackTracking', title: 'Printing all solutions in N-Queen Problem' },
  { category: 'BackTracking', title: 'Word Break Problem using Backtracking' },
  { category: 'BackTracking', title: 'Remove Invalid Parentheses' },
  { category: 'BackTracking', title: 'Sudoku Solver' },
  { category: 'BackTracking', title: 'm Coloring Problem' },
  { category: 'BackTracking', title: 'Print all palindromic partitions of a string' },
  { category: 'BackTracking', title: 'Subset Sum Problem' },
  { category: 'BackTracking', title: 'The Knight\'s tour problem' },
  { category: 'BackTracking', title: 'Tug of War' },
  { category: 'BackTracking', title: 'Find shortest safe route in a path with landmines' },
  { category: 'BackTracking', title: 'Combinational Sum' },
  { category: 'BackTracking', title: 'Find Maximum number possible by doing at-most K swaps' },
  { category: 'BackTracking', title: 'Print all permutations of a string' },
  { category: 'BackTracking', title: 'Find if there is a path of more than k length from a source' },
  { category: 'BackTracking', title: 'Longest Possible Route in a Matrix with Hurdles' },
  { category: 'BackTracking', title: 'Print all possible paths from top left to bottom right of a mXn matrix' },
  { category: 'BackTracking', title: 'Partition of a set intoK subsets with equal sum' },
  { category: 'BackTracking', title: 'Find the K-th Permutation Sequence of first N natural numbers' },
  
  // Stacks & Queues (40 problems)
  { category: 'Stacks & Queues', title: ' Implement Stack from Scratch' },
  { category: 'Stacks & Queues', title: ' Implement Queue from Scratch' },
  { category: 'Stacks & Queues', title: 'Implement 2 stack in an array' },
  { category: 'Stacks & Queues', title: 'find the middle element of a stack' },
  { category: 'Stacks & Queues', title: 'Implement "N" stacks in an Array' },
  { category: 'Stacks & Queues', title: 'Check the expression has valid or Balanced parenthesis or not' },
  { category: 'Stacks & Queues', title: 'Reverse a String using Stack' },
  { category: 'Stacks & Queues', title: 'Design a Stack that supports getMin() in O(1) time and O(1) extra space' },
  { category: 'Stacks & Queues', title: 'Find the next Greater element' },
  { category: 'Stacks & Queues', title: 'The celebrity Problem' },
  { category: 'Stacks & Queues', title: 'Arithmetic Expression evaluation' },
  { category: 'Stacks & Queues', title: 'Evaluation of Postfix expression' },
  { category: 'Stacks & Queues', title: 'Implement a method to insert an element at its bottom without using any other data structure' },
  { category: 'Stacks & Queues', title: 'Reverse a stack using recursion' },
  { category: 'Stacks & Queues', title: 'Sort a Stack using recursion' },
  { category: 'Stacks & Queues', title: 'Merge Overlapping Intervals' },
  { category: 'Stacks & Queues', title: 'Largest rectangular Area in Histogram' },
  { category: 'Stacks & Queues', title: 'Length of the Longest Valid Substring' },
  { category: 'Stacks & Queues', title: 'Expression contains redundant bracket or not' },
  { category: 'Stacks & Queues', title: 'Implement Stack using Queue' },
  { category: 'Stacks & Queues', title: 'Implement Stack using Deque' },
  { category: 'Stacks & Queues', title: 'Stack Permutations (Check if an array is stack permutation of other)' },
  { category: 'Stacks & Queues', title: 'Implement Queue using Stack' },
  { category: 'Stacks & Queues', title: 'Implement "n" queue in an array' },
  { category: 'Stacks & Queues', title: 'Implement a Circular queue' },
  { category: 'Stacks & Queues', title: 'LRU Cache Implementationa' },
  { category: 'Stacks & Queues', title: 'Reverse a Queue using recursion' },
  { category: 'Stacks & Queues', title: 'Reverse the first "K" elements of a queue' },
  { category: 'Stacks & Queues', title: 'Interleave the first half of the queue with second half' },
  { category: 'Stacks & Queues', title: 'Find the first circular tour that visits all Petrol Pumps' },
  { category: 'Stacks & Queues', title: 'Minimum time required to rot all oranges' },
  { category: 'Stacks & Queues', title: 'Distance of nearest cell having 1 in a binary matrix' },
  { category: 'Stacks & Queues', title: 'First negative integer in every window of size "k"' },
  { category: 'Stacks & Queues', title: 'Check if all levels of two trees are anagrams or not' },
  { category: 'Stacks & Queues', title: 'Sum of minimum and maximum elements of all subarrays of size "k"' },
  { category: 'Stacks & Queues', title: 'Minimum sum of squares of character counts in a given string after removing "k" characters' },
  { category: 'Stacks & Queues', title: 'Queue based approach or first non-repeating character in a stream' },
  { category: 'Stacks & Queues', title: 'Next Smaller Element' },
  
  // Heap (20 problems)
  { category: 'Heap', title: 'Implement a Maxheap/MinHeap using arrays and recursion' },
  { category: 'Heap', title: 'Sort an Array using heap. (HeapSort)' },
  { category: 'Heap', title: 'Maximum of all subarrays of size k' },
  { category: 'Heap', title: '"k" largest element in an array' },
  { category: 'Heap', title: 'Kth smallest and largest element in an unsorted array' },
  { category: 'Heap', title: 'Merge "K" sorted arrays. [ IMP ]' },
  { category: 'Heap', title: 'Merge 2 Binary Max Heaps' },
  { category: 'Heap', title: 'Kth largest sum continuous subarrays' },
  { category: 'Heap', title: 'Leetcode- reorganize strings' },
  { category: 'Heap', title: 'Merge "K" Sorted Linked Lists [V.IMP]' },
  { category: 'Heap', title: 'Smallest range in "K" Lists' },
  { category: 'Heap', title: 'Median in a stream of Integers' },
  { category: 'Heap', title: 'Check if a Binary Tree is Heap' },
  { category: 'Heap', title: 'Connect "n" ropes with minimum cost' },
  { category: 'Heap', title: 'Convert BST to Min Heap' },
  { category: 'Heap', title: 'Convert min heap to max heap' },
  { category: 'Heap', title: 'Rearrange characters in a string such that no two adjacent are same' },
  { category: 'Heap', title: 'Minimum sum of two numbers formed from digits of an array' },
  
  // Graph (50 problems)
  { category: 'Graph', title: 'Create a Graph, print it' },
  { category: 'Graph', title: 'Implement BFS algorithm' },
  { category: 'Graph', title: 'Implement DFS Algo' },
  { category: 'Graph', title: 'Detect Cycle in Directed Graph using BFS/DFS Algo' },
  { category: 'Graph', title: 'Detect Cycle in UnDirected Graph using BFS/DFS Algo' },
  { category: 'Graph', title: 'Search in a Maze' },
  { category: 'Graph', title: 'Minimum Step by Knight' },
  { category: 'Graph', title: 'flood fill algo' },
  { category: 'Graph', title: 'Clone a graph' },
  { category: 'Graph', title: 'Making wired Connections' },
  { category: 'Graph', title: 'word Ladder' },
  { category: 'Graph', title: 'Dijkstra algo' },
  { category: 'Graph', title: 'Implement Topological Sort' },
  { category: 'Graph', title: 'Minimum time taken by each job to be completed given by a Directed Acyclic Graph' },
  { category: 'Graph', title: 'Find whether it is possible to finish all tasks or not from given dependencies' },
  { category: 'Graph', title: 'Find the no. of Isalnds' },
  { category: 'Graph', title: 'Given a sorted Dictionary of an Alien Language, find order of characters' },
  { category: 'Graph', title: 'Implement Kruksal\'sAlgorithm' },
  { category: 'Graph', title: 'Implement Prim\'s Algorithm' },
  { category: 'Graph', title: 'Total no. of Spanning tree in a graph' },
  { category: 'Graph', title: 'Implement Bellman Ford Algorithm' },
  { category: 'Graph', title: 'Implement Floyd warshallAlgorithm' },
  { category: 'Graph', title: 'Travelling Salesman Problem' },
  { category: 'Graph', title: 'Graph ColouringProblem' },
  { category: 'Graph', title: 'Snake and Ladders Problem' },
  { category: 'Graph', title: 'Find bridge in a graph' },
  { category: 'Graph', title: 'Count Strongly connected Components(Kosaraju Algo)' },
  { category: 'Graph', title: 'Check whether a graph is Bipartite or Not' },
  { category: 'Graph', title: 'Detect Negative cycle in a graph' },
  { category: 'Graph', title: 'Longest path in a Directed Acyclic Graph' },
  { category: 'Graph', title: 'Journey to the Moon' },
  { category: 'Graph', title: 'Cheapest Flights Within K Stops' },
  { category: 'Graph', title: 'Oliver and the Game' },
  { category: 'Graph', title: 'Water Jug problem using BFS' },
  { category: 'Graph', title: 'Find if there is a path of more thank length from a source' },
  { category: 'Graph', title: 'M-ColouringProblem' },
  { category: 'Graph', title: 'Minimum edges to reverse o make path from source to destination' },
  { category: 'Graph', title: 'Paths to travel each nodes using each edge(Seven Bridges)' },
  { category: 'Graph', title: 'Vertex Cover Problem' },
  { category: 'Graph', title: 'Chinese Postman or Route Inspection' },
  { category: 'Graph', title: 'Number of Triangles in a Directed and Undirected Graph' },
  { category: 'Graph', title: 'Minimise the cashflow among a given set of friends who have borrowed money from each other' },
  { category: 'Graph', title: 'Two Clique Problem' },
  
  // Trie (6 problems)
  { category: 'Trie', title: 'Construct a trie from scratch' },
  { category: 'Trie', title: 'Find shortest unique prefix for every word in a given list' },
  { category: 'Trie', title: 'Word Break Problem | (Trie solution)' },
  { category: 'Trie', title: 'Given a sequence of words, print all anagrams together' },
  { category: 'Trie', title: 'Implement a Phone Directory' },
  { category: 'Trie', title: 'Print unique rows in a given boolean matrix' },
  
  // Dynamic Programming (60 problems)
  { category: 'Dynamic Programming', title: 'Coin ChangeProblem' },
  { category: 'Dynamic Programming', title: 'Knapsack Problem' },
  { category: 'Dynamic Programming', title: 'Binomial CoefficientProblem' },
  { category: 'Dynamic Programming', title: 'Permutation CoefficientProblem' },
  { category: 'Dynamic Programming', title: 'Program for nth Catalan Number' },
  { category: 'Dynamic Programming', title: 'Matrix Chain Multiplication' },
  { category: 'Dynamic Programming', title: 'Edit Distance' },
  { category: 'Dynamic Programming', title: 'Subset Sum Problem' },
  { category: 'Dynamic Programming', title: 'Friends Pairing Problem' },
  { category: 'Dynamic Programming', title: 'Gold Mine Problem' },
  { category: 'Dynamic Programming', title: 'Assembly Line SchedulingProblem' },
  { category: 'Dynamic Programming', title: 'Painting the Fenceproblem' },
  { category: 'Dynamic Programming', title: 'Maximize The Cut Segments' },
  { category: 'Dynamic Programming', title: 'Longest Common Subsequence' },
  { category: 'Dynamic Programming', title: 'Longest Repeated Subsequence' },
  { category: 'Dynamic Programming', title: 'Longest Increasing Subsequence' },
  { category: 'Dynamic Programming', title: 'Space Optimized Solution of LCS' },
  { category: 'Dynamic Programming', title: 'LCS (Longest Common Subsequence) of three strings' },
  { category: 'Dynamic Programming', title: 'Maximum Sum Increasing Subsequence' },
  { category: 'Dynamic Programming', title: 'Count all subsequences having product less than K' },
  { category: 'Dynamic Programming', title: 'Longest subsequence such that difference between adjacent is one' },
  { category: 'Dynamic Programming', title: 'Maximum subsequence sum such that no three are consecutive' },
  { category: 'Dynamic Programming', title: 'Egg Dropping Problem' },
  { category: 'Dynamic Programming', title: 'Maximum Length Chain of Pairs' },
  { category: 'Dynamic Programming', title: 'Maximum size square sub-matrix with all 1s' },
  { category: 'Dynamic Programming', title: 'Maximum sum of pairs with specific difference' },
  { category: 'Dynamic Programming', title: 'Min Cost PathProblem' },
  { category: 'Dynamic Programming', title: 'Maximum difference of zeros and ones in binary string' },
  { category: 'Dynamic Programming', title: 'Minimum number of jumps to reach end' },
  { category: 'Dynamic Programming', title: 'Minimum cost to fill given weight in a bag' },
  { category: 'Dynamic Programming', title: 'Minimum removals from array to make max –min <= K' },
  { category: 'Dynamic Programming', title: 'Longest Common Substring' },
  { category: 'Dynamic Programming', title: 'Count number of ways to reacha given score in a game' },
  { category: 'Dynamic Programming', title: 'Count Balanced Binary Trees of Height h' },
  { category: 'Dynamic Programming', title: 'LargestSum Contiguous Subarray [V>V>V>V IMP ]' },
  { category: 'Dynamic Programming', title: 'Smallest sum contiguous subarray' },
  { category: 'Dynamic Programming', title: 'Unbounded Knapsack (Repetition of items allowed)' },
  { category: 'Dynamic Programming', title: 'Word Break Problem' },
  { category: 'Dynamic Programming', title: 'Largest Independent Set Problem' },
  { category: 'Dynamic Programming', title: 'Partition problem' },
  { category: 'Dynamic Programming', title: 'Longest Palindromic Subsequence' },
  { category: 'Dynamic Programming', title: 'Count All Palindromic Subsequence in a given String' },
  { category: 'Dynamic Programming', title: 'Longest Palindromic Substring' },
  { category: 'Dynamic Programming', title: 'Longest alternating subsequence' },
  { category: 'Dynamic Programming', title: 'Weighted Job Scheduling' },
  { category: 'Dynamic Programming', title: 'Coin game winner where every player has three choices' },
  { category: 'Dynamic Programming', title: 'Count Derangements (Permutation such that no element appears in its original position) [ IMPORTANT ]' },
  { category: 'Dynamic Programming', title: 'Maximum profit by buying and selling a share at most twice [ IMP ]' },
  { category: 'Dynamic Programming', title: 'Optimal Strategy for a Game' },
  { category: 'Dynamic Programming', title: 'Optimal Binary Search Tree' },
  { category: 'Dynamic Programming', title: 'Palindrome PartitioningProblem' },
  { category: 'Dynamic Programming', title: 'Word Wrap Problem' },
  { category: 'Dynamic Programming', title: 'Mobile Numeric Keypad Problem [ IMP ]' },
  { category: 'Dynamic Programming', title: 'Boolean Parenthesization Problem' },
  { category: 'Dynamic Programming', title: 'Largest rectangular sub-matrix whose sum is 0' },
  { category: 'Dynamic Programming', title: 'Largest area rectangular sub-matrix with equal number of 1\'s and 0\'s [ IMP ]' },
  { category: 'Dynamic Programming', title: 'Maximum sum rectangle in a 2D matrix' },
  { category: 'Dynamic Programming', title: 'Maximum profit by buying and selling a share at most k times' },
  { category: 'Dynamic Programming', title: 'Find if a string is interleaved of two other strings' },
  { category: 'Dynamic Programming', title: 'Maximum Length of Pair Chain' },
  
  // Bit Manipulation (10 problems)
  { category: 'Bit Manipulation', title: 'Count set bits in an integer' },
  { category: 'Bit Manipulation', title: 'Find the two non-repeating elements in an array of repeating elements' },
  { category: 'Bit Manipulation', title: 'Count number of bits to be flipped to convert A to B' },
  { category: 'Bit Manipulation', title: 'Count total set bits in all numbers from 1 to n' },
  { category: 'Bit Manipulation', title: 'Program to find whether a no is power of two' },
  { category: 'Bit Manipulation', title: 'Find position of the only set bit' },
  { category: 'Bit Manipulation', title: 'Copy set bits in a range' },
  { category: 'Bit Manipulation', title: 'Divide two integers without using multiplication, division and mod operator' },
  { category: 'Bit Manipulation', title: 'Calculate square of a number without using *, / and pow()' },
  { category: 'Bit Manipulation', title: 'Power Set' },
];

// Generate problem objects
function generateProblemObject(problem, index) {
  const slug = generateSlug(problem.title);
  const difficulty = assignDifficulty(problem.category, problem.title);
  const hint = generateHint(problem.category, problem.title);
  const testCases = generateTestCases(problem.category, problem.title);
  
  // Determine tags
  const tags = [problem.category];
  const titleLower = problem.title.toLowerCase();
  
  if (titleLower.includes('sort') || titleLower.includes('merge')) tags.push('Sorting');
  if (titleLower.includes('search') || titleLower.includes('binary')) tags.push('Binary Search');
  if (titleLower.includes('two pointer') || titleLower.includes('sliding window')) tags.push('Two Pointers');
  if (titleLower.includes('dynamic programming') || titleLower.includes('dp') || titleLower.includes('kadane') || titleLower.includes('subsequence') || titleLower.includes('substring')) tags.push('Dynamic Programming');
  if (titleLower.includes('hash') || titleLower.includes('map') || titleLower.includes('set')) tags.push('Hash Table');
  if (titleLower.includes('tree') || titleLower.includes('bst') || titleLower.includes('binary tree')) tags.push('Tree');
  if (titleLower.includes('graph') || titleLower.includes('bfs') || titleLower.includes('dfs')) tags.push('Graph');
  if (titleLower.includes('greedy')) tags.push('Greedy');
  if (titleLower.includes('backtrack')) tags.push('Backtracking');
  if (titleLower.includes('stack') || titleLower.includes('queue')) {
    tags.push('Stack');
    tags.push('Queue');
  }
  if (titleLower.includes('heap')) tags.push('Heap');
  if (titleLower.includes('trie')) tags.push('Trie');
  if (titleLower.includes('bit')) tags.push('Bit Manipulation');
  if (titleLower.includes('linked list')) tags.push('Linked List');
  
  const description = `Solve the problem: ${problem.title}. This is a ${problem.category} problem of ${difficulty} difficulty.`;
  
  return `  {
    title: ${JSON.stringify(problem.title)},
    description: ${JSON.stringify(description)},
    difficulty: ${JSON.stringify(difficulty)},
    hint: ${JSON.stringify(hint)},
    tags: ${JSON.stringify(tags)},
    playlist: "top dsa questions",
    slug: ${JSON.stringify(slug)},
    testCases: ${JSON.stringify(testCases, null, 6)}
  }`;
}

// Generate file content
let fileContent = `// Top DSA Questions - Comprehensive Problem Set
// This file contains all problems from the "top dsa questions" playlist
// Generated automatically - DO NOT EDIT MANUALLY

export const topDSAProblems = [
`;

allProblems.forEach((problem, index) => {
  fileContent += generateProblemObject(problem, index);
  if (index < allProblems.length - 1) {
    fileContent += ',\n';
  }
});

fileContent += '\n];\n';

// Write to file
const outputPath = path.join(__dirname, '../src/lib/topDSAProblems.js');
fs.writeFileSync(outputPath, fileContent, 'utf8');

console.log(`✅ Generated ${allProblems.length} problems in topDSAProblems.js`);
console.log(`📁 File saved to: ${outputPath}`);
