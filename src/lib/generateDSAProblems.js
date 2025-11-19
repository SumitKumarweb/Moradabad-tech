// Script to generate 50 DSA problems with test cases, hints, and tags
// Run this script to populate Firebase with DSA problems

export const dsaProblems = [
  // Arrays & Two Pointers
  {
    title: "Two Sum",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    difficulty: "easy",
    hint: "Use a hash map to store each number and its index. For each number, check if target - current number exists in the map.",
    tags: ["Array", "Hash Table"],
    testCases: [
      { input: { nums: [2, 7, 11, 15], target: 9 }, expectedOutput: [0, 1] },
      { input: { nums: [3, 2, 4], target: 6 }, expectedOutput: [1, 2] },
      { input: { nums: [3, 3], target: 6 }, expectedOutput: [0, 1] },
      { input: { nums: [1, 5, 3, 9], target: 8 }, expectedOutput: [1, 2] },
      { input: { nums: [-1, -2, -3, -4, -5], target: -8 }, expectedOutput: [2, 4] }
    ]
  },
  {
    title: "Best Time to Buy and Sell Stock",
    description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
    difficulty: "easy",
    hint: "Track the minimum price seen so far and calculate profit for each day. Keep track of maximum profit.",
    tags: ["Array", "Dynamic Programming"],
    testCases: [
      { input: { prices: [7, 1, 5, 3, 6, 4] }, expectedOutput: 5 },
      { input: { prices: [7, 6, 4, 3, 1] }, expectedOutput: 0 },
      { input: { prices: [1, 2, 3, 4, 5] }, expectedOutput: 4 },
      { input: { prices: [2, 4, 1] }, expectedOutput: 2 },
      { input: { prices: [3, 3, 5, 0, 0, 3, 1, 4] }, expectedOutput: 4 }
    ]
  },
  {
    title: "Contains Duplicate",
    description: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    difficulty: "easy",
    hint: "Use a set to track seen numbers. If a number is already in the set, return true.",
    tags: ["Array", "Hash Table"],
    testCases: [
      { input: { nums: [1, 2, 3, 1] }, expectedOutput: true },
      { input: { nums: [1, 2, 3, 4] }, expectedOutput: false },
      { input: { nums: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2] }, expectedOutput: true },
      { input: { nums: [1] }, expectedOutput: false },
      { input: { nums: [] }, expectedOutput: false }
    ]
  },
  {
    title: "Product of Array Except Self",
    description: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operator.",
    difficulty: "medium",
    hint: "Use two passes: first pass to calculate left products, second pass to calculate right products and multiply them.",
    tags: ["Array", "Prefix Sum"],
    testCases: [
      { input: { nums: [1, 2, 3, 4] }, expectedOutput: [24, 12, 8, 6] },
      { input: { nums: [-1, 1, 0, -3, 3] }, expectedOutput: [0, 0, 9, 0, 0] },
      { input: { nums: [2, 3, 4, 5] }, expectedOutput: [60, 40, 30, 24] },
      { input: { nums: [1, 0] }, expectedOutput: [0, 1] },
      { input: { nums: [0, 0] }, expectedOutput: [0, 0] }
    ]
  },
  {
    title: "Maximum Subarray",
    description: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. A subarray is a contiguous part of an array.",
    difficulty: "medium",
    hint: "Use Kadane's algorithm: keep track of current sum and maximum sum. Reset current sum to 0 if it becomes negative.",
    tags: ["Array", "Dynamic Programming"],
    testCases: [
      { input: { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4] }, expectedOutput: 6 },
      { input: { nums: [1] }, expectedOutput: 1 },
      { input: { nums: [5, 4, -1, 7, 8] }, expectedOutput: 23 },
      { input: { nums: [-1] }, expectedOutput: -1 },
      { input: { nums: [-2, -1] }, expectedOutput: -1 }
    ]
  },
  {
    title: "3Sum",
    description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.",
    difficulty: "medium",
    hint: "Sort the array first. Use one pointer fixed, then use two pointers technique for the remaining two numbers.",
    tags: ["Array", "Two Pointers"],
    testCases: [
      { input: { nums: [-1, 0, 1, 2, -1, -4] }, expectedOutput: [[-1, -1, 2], [-1, 0, 1]] },
      { input: { nums: [0, 1, 1] }, expectedOutput: [] },
      { input: { nums: [0, 0, 0] }, expectedOutput: [[0, 0, 0]] },
      { input: { nums: [-2, 0, 1, 1, 2] }, expectedOutput: [[-2, 0, 2], [-2, 1, 1]] },
      { input: { nums: [-1, 0, 1] }, expectedOutput: [[-1, 0, 1]] }
    ]
  },
  {
    title: "Container With Most Water",
    description: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
    difficulty: "medium",
    hint: "Use two pointers from both ends. Always move the pointer with the smaller height, as moving the larger one won't increase the area.",
    tags: ["Array", "Two Pointers"],
    testCases: [
      { input: { height: [1, 8, 6, 2, 5, 4, 8, 3, 7] }, expectedOutput: 49 },
      { input: { height: [1, 1] }, expectedOutput: 1 },
      { input: { height: [4, 3, 2, 1, 4] }, expectedOutput: 16 },
      { input: { height: [1, 2, 1] }, expectedOutput: 2 },
      { input: { height: [2, 3, 4, 5, 18, 17, 6] }, expectedOutput: 17 }
    ]
  },
  {
    title: "Rotate Array",
    description: "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.",
    difficulty: "medium",
    hint: "Reverse the entire array, then reverse the first k elements, then reverse the remaining elements. Or use extra space to store rotated elements.",
    tags: ["Array", "Math"],
    testCases: [
      { input: { nums: [1, 2, 3, 4, 5, 6, 7], k: 3 }, expectedOutput: [5, 6, 7, 1, 2, 3, 4] },
      { input: { nums: [-1, -100, 3, 99], k: 2 }, expectedOutput: [3, 99, -1, -100] },
      { input: { nums: [1, 2], k: 1 }, expectedOutput: [2, 1] },
      { input: { nums: [1], k: 1 }, expectedOutput: [1] },
      { input: { nums: [1, 2, 3], k: 4 }, expectedOutput: [3, 1, 2] }
    ]
  },
  {
    title: "Move Zeroes",
    description: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array.",
    difficulty: "easy",
    hint: "Use two pointers: one to iterate through the array, another to track the position where non-zero elements should be placed.",
    tags: ["Array", "Two Pointers"],
    testCases: [
      { input: { nums: [0, 1, 0, 3, 12] }, expectedOutput: [1, 3, 12, 0, 0] },
      { input: { nums: [0] }, expectedOutput: [0] },
      { input: { nums: [1, 0, 1] }, expectedOutput: [1, 1, 0] },
      { input: { nums: [0, 0, 1] }, expectedOutput: [1, 0, 0] },
      { input: { nums: [1, 2, 3, 4, 5] }, expectedOutput: [1, 2, 3, 4, 5] }
    ]
  },
  {
    title: "Find All Duplicates in Array",
    description: "Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.",
    difficulty: "medium",
    hint: "Use the array itself as a hash map. For each number, mark its corresponding index as negative. If you encounter a negative number, it's a duplicate.",
    tags: ["Array", "Hash Table"],
    testCases: [
      { input: { nums: [4, 3, 2, 7, 8, 2, 3, 1] }, expectedOutput: [2, 3] },
      { input: { nums: [1, 1, 2] }, expectedOutput: [1] },
      { input: { nums: [1] }, expectedOutput: [] },
      { input: { nums: [1, 1] }, expectedOutput: [1] },
      { input: { nums: [2, 2] }, expectedOutput: [2] }
    ]
  },

  // Strings
  {
    title: "Valid Anagram",
    description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    difficulty: "easy",
    hint: "Count the frequency of each character in both strings. They should be equal for anagrams. Or sort both strings and compare.",
    tags: ["String", "Hash Table"],
    testCases: [
      { input: { s: "anagram", t: "nagaram" }, expectedOutput: true },
      { input: { s: "rat", t: "car" }, expectedOutput: false },
      { input: { s: "listen", t: "silent" }, expectedOutput: true },
      { input: { s: "a", t: "a" }, expectedOutput: true },
      { input: { s: "ab", t: "ba" }, expectedOutput: true }
    ]
  },
  {
    title: "Longest Substring Without Repeating Characters",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    difficulty: "medium",
    hint: "Use sliding window technique with a hash map to track character positions. Expand window and shrink when duplicate found.",
    tags: ["String", "Sliding Window"],
    testCases: [
      { input: { s: "abcabcbb" }, expectedOutput: 3 },
      { input: { s: "bbbbb" }, expectedOutput: 1 },
      { input: { s: "pwwkew" }, expectedOutput: 3 },
      { input: { s: "" }, expectedOutput: 0 },
      { input: { s: "dvdf" }, expectedOutput: 3 }
    ]
  },
  {
    title: "Longest Palindromic Substring",
    description: "Given a string s, return the longest palindromic substring in s.",
    difficulty: "medium",
    hint: "For each character, expand around it to check for palindromes (odd and even length). Keep track of the longest palindrome found.",
    tags: ["String", "Dynamic Programming"],
    testCases: [
      { input: { s: "babad" }, expectedOutput: "bab" },
      { input: { s: "cbbd" }, expectedOutput: "bb" },
      { input: { s: "a" }, expectedOutput: "a" },
      { input: { s: "ac" }, expectedOutput: "a" },
      { input: { s: "racecar" }, expectedOutput: "racecar" }
    ]
  },
  {
    title: "Reverse String",
    description: "Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.",
    difficulty: "easy",
    hint: "Use two pointers: one at the start and one at the end. Swap characters and move pointers towards the center.",
    tags: ["String", "Two Pointers"],
    testCases: [
      { input: { s: ["h", "e", "l", "l", "o"] }, expectedOutput: ["o", "l", "l", "e", "h"] },
      { input: { s: ["H", "a", "n", "n", "a", "h"] }, expectedOutput: ["h", "a", "n", "n", "a", "H"] },
      { input: { s: ["a"] }, expectedOutput: ["a"] },
      { input: { s: ["a", "b"] }, expectedOutput: ["b", "a"] },
      { input: { s: [] }, expectedOutput: [] }
    ]
  },
  {
    title: "Valid Parentheses",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: 1) Open brackets must be closed by the same type of brackets. 2) Open brackets must be closed in the correct order. 3) Every close bracket has a corresponding open bracket of the same type.",
    difficulty: "easy",
    hint: "Use a stack. Push opening brackets, pop when encountering closing brackets. Check if popped bracket matches.",
    tags: ["String", "Stack"],
    testCases: [
      { input: { s: "()" }, expectedOutput: true },
      { input: { s: "()[]{}" }, expectedOutput: true },
      { input: { s: "(]" }, expectedOutput: false },
      { input: { s: "([)]" }, expectedOutput: false },
      { input: { s: "{[]}" }, expectedOutput: true }
    ]
  },
  {
    title: "Group Anagrams",
    description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    difficulty: "medium",
    hint: "Use a hash map where key is sorted string (or character count) and value is list of anagrams. Group strings with same key.",
    tags: ["String", "Hash Table"],
    testCases: [
      { input: { strs: ["eat", "tea", "tan", "ate", "nat", "bat"] }, expectedOutput: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]] },
      { input: { strs: [""] }, expectedOutput: [[""]] },
      { input: { strs: ["a"] }, expectedOutput: [["a"]] },
      { input: { strs: ["", ""] }, expectedOutput: [["", ""]] },
      { input: { strs: ["abc", "bca", "cab"] }, expectedOutput: [["abc", "bca", "cab"]] }
    ]
  },
  {
    title: "Longest Common Prefix",
    description: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string \"\".",
    difficulty: "easy",
    hint: "Compare characters at the same position across all strings. Stop when characters don't match or a string ends.",
    tags: ["String", "Trie"],
    testCases: [
      { input: { strs: ["flower", "flow", "flight"] }, expectedOutput: "fl" },
      { input: { strs: ["dog", "racecar", "car"] }, expectedOutput: "" },
      { input: { strs: ["ab", "a"] }, expectedOutput: "a" },
      { input: { strs: ["a"] }, expectedOutput: "a" },
      { input: { strs: ["", "b"] }, expectedOutput: "" }
    ]
  },
  {
    title: "Reverse Words in a String",
    description: "Given an input string s, reverse the order of the words. A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space. Return a string of the words in reverse order concatenated by a single space. Note that s may contain leading or trailing spaces or multiple spaces between two words.",
    difficulty: "medium",
    hint: "Split by spaces, filter empty strings, reverse the array, and join with single space. Or use two pointers to reverse in-place.",
    tags: ["String", "Two Pointers"],
    testCases: [
      { input: { s: "the sky is blue" }, expectedOutput: "blue is sky the" },
      { input: { s: "  hello world  " }, expectedOutput: "world hello" },
      { input: { s: "a good   example" }, expectedOutput: "example good a" },
      { input: { s: "  " }, expectedOutput: "" },
      { input: { s: "a" }, expectedOutput: "a" }
    ]
  },
  {
    title: "Isomorphic Strings",
    description: "Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.",
    difficulty: "easy",
    hint: "Use two hash maps to track character mappings in both directions. Check if mapping is consistent for all characters.",
    tags: ["String", "Hash Table"],
    testCases: [
      { input: { s: "egg", t: "add" }, expectedOutput: true },
      { input: { s: "foo", t: "bar" }, expectedOutput: false },
      { input: { s: "paper", t: "title" }, expectedOutput: true },
      { input: { s: "badc", t: "baba" }, expectedOutput: false },
      { input: { s: "a", t: "a" }, expectedOutput: true }
    ]
  },
  {
    title: "Minimum Window Substring",
    description: "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string \"\".",
    difficulty: "hard",
    hint: "Use sliding window with two pointers. Expand right until all characters are found, then shrink left to minimize window while maintaining all characters.",
    tags: ["String", "Sliding Window"],
    testCases: [
      { input: { s: "ADOBECODEBANC", t: "ABC" }, expectedOutput: "BANC" },
      { input: { s: "a", t: "a" }, expectedOutput: "a" },
      { input: { s: "a", t: "aa" }, expectedOutput: "" },
      { input: { s: "ab", t: "b" }, expectedOutput: "b" },
      { input: { s: "bba", t: "ab" }, expectedOutput: "ba" }
    ]
  },

  // Linked Lists
  {
    title: "Reverse Linked List",
    description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    difficulty: "easy",
    hint: "Use three pointers: previous, current, and next. Iterate through the list, reversing the links as you go.",
    tags: ["Linked List", "Recursion"],
    testCases: [
      { input: { head: [1, 2, 3, 4, 5] }, expectedOutput: [5, 4, 3, 2, 1] },
      { input: { head: [1, 2] }, expectedOutput: [2, 1] },
      { input: { head: [] }, expectedOutput: [] },
      { input: { head: [1] }, expectedOutput: [1] },
      { input: { head: [1, 2, 3] }, expectedOutput: [3, 2, 1] }
    ]
  },
  {
    title: "Merge Two Sorted Lists",
    description: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.",
    difficulty: "easy",
    hint: "Use a dummy node to simplify. Compare nodes from both lists, attach the smaller one, and move the pointer forward.",
    tags: ["Linked List", "Recursion"],
    testCases: [
      { input: { list1: [1, 2, 4], list2: [1, 3, 4] }, expectedOutput: [1, 1, 2, 3, 4, 4] },
      { input: { list1: [], list2: [] }, expectedOutput: [] },
      { input: { list1: [], list2: [0] }, expectedOutput: [0] },
      { input: { list1: [1], list2: [2] }, expectedOutput: [1, 2] },
      { input: { list1: [1, 3, 5], list2: [2, 4, 6] }, expectedOutput: [1, 2, 3, 4, 5, 6] }
    ]
  },
  {
    title: "Linked List Cycle",
    description: "Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.",
    difficulty: "easy",
    hint: "Use Floyd's cycle detection algorithm: two pointers moving at different speeds. If they meet, there's a cycle.",
    tags: ["Linked List", "Two Pointers"],
    testCases: [
      { input: { head: [3, 2, 0, -4], pos: 1 }, expectedOutput: true },
      { input: { head: [1, 2], pos: 0 }, expectedOutput: true },
      { input: { head: [1], pos: -1 }, expectedOutput: false },
      { input: { head: [1, 2, 3], pos: -1 }, expectedOutput: false },
      { input: { head: [], pos: -1 }, expectedOutput: false }
    ]
  },
  {
    title: "Remove Nth Node From End of List",
    description: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
    difficulty: "medium",
    hint: "Use two pointers: move first pointer n steps ahead, then move both pointers until first reaches end. Remove node at second pointer.",
    tags: ["Linked List", "Two Pointers"],
    testCases: [
      { input: { head: [1, 2, 3, 4, 5], n: 2 }, expectedOutput: [1, 2, 3, 5] },
      { input: { head: [1], n: 1 }, expectedOutput: [] },
      { input: { head: [1, 2], n: 1 }, expectedOutput: [1] },
      { input: { head: [1, 2, 3], n: 3 }, expectedOutput: [2, 3] },
      { input: { head: [1, 2, 3, 4], n: 4 }, expectedOutput: [2, 3, 4] }
    ]
  },
  {
    title: "Add Two Numbers",
    description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    difficulty: "medium",
    hint: "Simulate addition digit by digit. Handle carry, and create new nodes for the result. Process both lists until both are exhausted and carry is 0.",
    tags: ["Linked List", "Math"],
    testCases: [
      { input: { l1: [2, 4, 3], l2: [5, 6, 4] }, expectedOutput: [7, 0, 8] },
      { input: { l1: [0], l2: [0] }, expectedOutput: [0] },
      { input: { l1: [9, 9, 9, 9, 9, 9, 9], l2: [9, 9, 9, 9] }, expectedOutput: [8, 9, 9, 9, 0, 0, 0, 1] },
      { input: { l1: [5], l2: [5] }, expectedOutput: [0, 1] },
      { input: { l1: [1, 8], l2: [0] }, expectedOutput: [1, 8] }
    ]
  },

  // Trees
  {
    title: "Maximum Depth of Binary Tree",
    description: "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    difficulty: "easy",
    hint: "Use recursion: return 1 + max of left and right subtree depths. Base case: return 0 for null node.",
    tags: ["Tree", "DFS"],
    testCases: [
      { input: { root: [3, 9, 20, null, null, 15, 7] }, expectedOutput: 3 },
      { input: { root: [1, null, 2] }, expectedOutput: 2 },
      { input: { root: [] }, expectedOutput: 0 },
      { input: { root: [0] }, expectedOutput: 1 },
      { input: { root: [1, 2, 3, 4, 5] }, expectedOutput: 3 }
    ]
  },
  {
    title: "Same Tree",
    description: "Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.",
    difficulty: "easy",
    hint: "Use recursion: check if both nodes are null (same), if one is null (different), if values differ (different), then recursively check left and right subtrees.",
    tags: ["Tree", "DFS"],
    testCases: [
      { input: { p: [1, 2, 3], q: [1, 2, 3] }, expectedOutput: true },
      { input: { p: [1, 2], q: [1, null, 2] }, expectedOutput: false },
      { input: { p: [1, 2, 1], q: [1, 1, 2] }, expectedOutput: false },
      { input: { p: [], q: [] }, expectedOutput: true },
      { input: { p: [1], q: [1] }, expectedOutput: true }
    ]
  },
  {
    title: "Invert Binary Tree",
    description: "Given the root of a binary tree, invert the tree, and return its root.",
    difficulty: "easy",
    hint: "Use recursion: swap left and right children, then recursively invert left and right subtrees.",
    tags: ["Tree", "DFS"],
    testCases: [
      { input: { root: [4, 2, 7, 1, 3, 6, 9] }, expectedOutput: [4, 7, 2, 9, 6, 3, 1] },
      { input: { root: [2, 1, 3] }, expectedOutput: [2, 3, 1] },
      { input: { root: [] }, expectedOutput: [] },
      { input: { root: [1] }, expectedOutput: [1] },
      { input: { root: [1, 2] }, expectedOutput: [1, null, 2] }
    ]
  },
  {
    title: "Binary Tree Level Order Traversal",
    description: "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    difficulty: "medium",
    hint: "Use BFS with a queue. Process nodes level by level, adding children to queue for next level.",
    tags: ["Tree", "BFS"],
    testCases: [
      { input: { root: [3, 9, 20, null, null, 15, 7] }, expectedOutput: [[3], [9, 20], [15, 7]] },
      { input: { root: [1] }, expectedOutput: [[1]] },
      { input: { root: [] }, expectedOutput: [] },
      { input: { root: [1, 2, 3, 4, 5] }, expectedOutput: [[1], [2, 3], [4, 5]] },
      { input: { root: [1, 2, null, 3] }, expectedOutput: [[1], [2], [3]] }
    ]
  },
  {
    title: "Validate Binary Search Tree",
    description: "Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as follows: The left subtree of a node contains only nodes with keys less than the node's key. The right subtree of a node contains only nodes with keys greater than the node's key. Both the left and right subtrees must also be binary search trees.",
    difficulty: "medium",
    hint: "Use recursion with min and max bounds. For each node, check if value is within bounds, then recursively check left (max = node.val) and right (min = node.val) subtrees.",
    tags: ["Tree", "DFS"],
    testCases: [
      { input: { root: [2, 1, 3] }, expectedOutput: true },
      { input: { root: [5, 1, 4, null, null, 3, 6] }, expectedOutput: false },
      { input: { root: [2, 2, 2] }, expectedOutput: false },
      { input: { root: [5, 4, 6, null, null, 3, 7] }, expectedOutput: false },
      { input: { root: [1] }, expectedOutput: true }
    ]
  },
  {
    title: "Path Sum",
    description: "Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum. A leaf is a node with no children.",
    difficulty: "easy",
    hint: "Use recursion: subtract current node value from targetSum. If at leaf and targetSum is 0, return true. Otherwise recursively check left and right subtrees.",
    tags: ["Tree", "DFS"],
    testCases: [
      { input: { root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], targetSum: 22 }, expectedOutput: true },
      { input: { root: [1, 2, 3], targetSum: 5 }, expectedOutput: false },
      { input: { root: [], targetSum: 0 }, expectedOutput: false },
      { input: { root: [1, 2], targetSum: 1 }, expectedOutput: false },
      { input: { root: [1], targetSum: 1 }, expectedOutput: true }
    ]
  },

  // Binary Search
  {
    title: "Binary Search",
    description: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
    difficulty: "easy",
    hint: "Use two pointers (left and right). Calculate mid, compare with target. If equal, return mid. If target < nums[mid], search left half, else search right half.",
    tags: ["Array", "Binary Search"],
    testCases: [
      { input: { nums: [-1, 0, 3, 5, 9, 12], target: 9 }, expectedOutput: 4 },
      { input: { nums: [-1, 0, 3, 5, 9, 12], target: 2 }, expectedOutput: -1 },
      { input: { nums: [5], target: 5 }, expectedOutput: 0 },
      { input: { nums: [1, 2, 3], target: 3 }, expectedOutput: 2 },
      { input: { nums: [1, 2, 3, 4, 5], target: 1 }, expectedOutput: 0 }
    ]
  },
  {
    title: "Search Insert Position",
    description: "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
    difficulty: "easy",
    hint: "Use binary search. If target found, return index. If not found, return left pointer (it will be at insertion position).",
    tags: ["Array", "Binary Search"],
    testCases: [
      { input: { nums: [1, 3, 5, 6], target: 5 }, expectedOutput: 2 },
      { input: { nums: [1, 3, 5, 6], target: 2 }, expectedOutput: 1 },
      { input: { nums: [1, 3, 5, 6], target: 7 }, expectedOutput: 4 },
      { input: { nums: [1, 3, 5, 6], target: 0 }, expectedOutput: 0 },
      { input: { nums: [1], target: 1 }, expectedOutput: 0 }
    ]
  },
  {
    title: "Find First and Last Position of Element in Sorted Array",
    description: "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1].",
    difficulty: "medium",
    hint: "Use binary search twice: once to find first occurrence (search left when found), once to find last occurrence (search right when found).",
    tags: ["Array", "Binary Search"],
    testCases: [
      { input: { nums: [5, 7, 7, 8, 8, 10], target: 8 }, expectedOutput: [3, 4] },
      { input: { nums: [5, 7, 7, 8, 8, 10], target: 6 }, expectedOutput: [-1, -1] },
      { input: { nums: [], target: 0 }, expectedOutput: [-1, -1] },
      { input: { nums: [1], target: 1 }, expectedOutput: [0, 0] },
      { input: { nums: [2, 2], target: 2 }, expectedOutput: [0, 1] }
    ]
  },
  {
    title: "Search in Rotated Sorted Array",
    description: "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is rotated at an unknown pivot index k. Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
    difficulty: "medium",
    hint: "Use modified binary search. Determine which half is sorted, then check if target is in that sorted half. Otherwise search the other half.",
    tags: ["Array", "Binary Search"],
    testCases: [
      { input: { nums: [4, 5, 6, 7, 0, 1, 2], target: 0 }, expectedOutput: 4 },
      { input: { nums: [4, 5, 6, 7, 0, 1, 2], target: 3 }, expectedOutput: -1 },
      { input: { nums: [1], target: 0 }, expectedOutput: -1 },
      { input: { nums: [1], target: 1 }, expectedOutput: 0 },
      { input: { nums: [1, 3], target: 3 }, expectedOutput: 1 }
    ]
  },

  // Dynamic Programming
  {
    title: "Climbing Stairs",
    description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    difficulty: "easy",
    hint: "Use dynamic programming: ways[i] = ways[i-1] + ways[i-2]. This is essentially Fibonacci sequence. Can optimize to O(1) space.",
    tags: ["Math", "Dynamic Programming"],
    testCases: [
      { input: { n: 2 }, expectedOutput: 2 },
      { input: { n: 3 }, expectedOutput: 3 },
      { input: { n: 1 }, expectedOutput: 1 },
      { input: { n: 4 }, expectedOutput: 5 },
      { input: { n: 5 }, expectedOutput: 8 }
    ]
  },
  {
    title: "House Robber",
    description: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
    difficulty: "medium",
    hint: "Use DP: rob[i] = max(rob[i-1], rob[i-2] + nums[i]). Either skip current house (take previous max) or rob current + max from 2 houses ago.",
    tags: ["Array", "Dynamic Programming"],
    testCases: [
      { input: { nums: [1, 2, 3, 1] }, expectedOutput: 4 },
      { input: { nums: [2, 7, 9, 3, 1] }, expectedOutput: 12 },
      { input: { nums: [2, 1, 1, 2] }, expectedOutput: 4 },
      { input: { nums: [1] }, expectedOutput: 1 },
      { input: { nums: [1, 2] }, expectedOutput: 2 }
    ]
  },
  {
    title: "Coin Change",
    description: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
    difficulty: "medium",
    hint: "Use DP: dp[i] = minimum coins needed for amount i. For each coin, update dp[i] = min(dp[i], dp[i-coin] + 1) if i >= coin.",
    tags: ["Array", "Dynamic Programming"],
    testCases: [
      { input: { coins: [1, 2, 5], amount: 11 }, expectedOutput: 3 },
      { input: { coins: [2], amount: 3 }, expectedOutput: -1 },
      { input: { coins: [1], amount: 0 }, expectedOutput: 0 },
      { input: { coins: [1, 2, 5], amount: 100 }, expectedOutput: 20 },
      { input: { coins: [2, 5, 10], amount: 1 }, expectedOutput: -1 }
    ]
  },
  {
    title: "Longest Increasing Subsequence",
    description: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
    difficulty: "medium",
    hint: "Use DP: dp[i] = length of LIS ending at index i. For each i, check all previous j where nums[j] < nums[i] and update dp[i] = max(dp[i], dp[j] + 1).",
    tags: ["Array", "Binary Search"],
    testCases: [
      { input: { nums: [10, 9, 2, 5, 3, 7, 101, 18] }, expectedOutput: 4 },
      { input: { nums: [0, 1, 0, 3, 2, 3] }, expectedOutput: 4 },
      { input: { nums: [7, 7, 7, 7, 7, 7, 7] }, expectedOutput: 1 },
      { input: { nums: [1] }, expectedOutput: 1 },
      { input: { nums: [1, 3, 6, 7, 9, 4, 10, 5, 6] }, expectedOutput: 6 }
    ]
  },
  {
    title: "Unique Paths",
    description: "There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time. Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.",
    difficulty: "medium",
    hint: "Use DP: dp[i][j] = number of paths to reach (i,j). dp[i][j] = dp[i-1][j] + dp[i][j-1]. Can optimize to 1D array.",
    tags: ["Math", "Dynamic Programming"],
    testCases: [
      { input: { m: 3, n: 7 }, expectedOutput: 28 },
      { input: { m: 3, n: 2 }, expectedOutput: 3 },
      { input: { m: 7, n: 3 }, expectedOutput: 28 },
      { input: { m: 3, n: 3 }, expectedOutput: 6 },
      { input: { m: 1, n: 1 }, expectedOutput: 1 }
    ]
  },

  // Hash Tables & Math
  {
    title: "Happy Number",
    description: "Write an algorithm to determine if a number n is happy. A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits. Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy.",
    difficulty: "easy",
    hint: "Use a set to detect cycles. Calculate sum of squares of digits repeatedly. If sum is 1, return true. If sum seen before, return false.",
    tags: ["Hash Table", "Math"],
    testCases: [
      { input: { n: 19 }, expectedOutput: true },
      { input: { n: 2 }, expectedOutput: false },
      { input: { n: 1 }, expectedOutput: true },
      { input: { n: 7 }, expectedOutput: true },
      { input: { n: 4 }, expectedOutput: false }
    ]
  },
  {
    title: "Count Primes",
    description: "Given an integer n, return the number of prime numbers that are strictly less than n.",
    difficulty: "medium",
    hint: "Use Sieve of Eratosthenes: mark multiples of each prime as non-prime. Start from 2, mark all multiples, then move to next unmarked number.",
    tags: ["Array", "Math"],
    testCases: [
      { input: { n: 10 }, expectedOutput: 4 },
      { input: { n: 0 }, expectedOutput: 0 },
      { input: { n: 1 }, expectedOutput: 0 },
      { input: { n: 2 }, expectedOutput: 0 },
      { input: { n: 100 }, expectedOutput: 25 }
    ]
  },
  {
    title: "Power of Two",
    description: "Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two, if there exists an integer x such that n == 2^x.",
    difficulty: "easy",
    hint: "A power of 2 has only one bit set. Check if n > 0 and (n & (n-1)) == 0. Or repeatedly divide by 2 until you get 1 or an odd number.",
    tags: ["Math", "Bit Manipulation"],
    testCases: [
      { input: { n: 1 }, expectedOutput: true },
      { input: { n: 16 }, expectedOutput: true },
      { input: { n: 3 }, expectedOutput: false },
      { input: { n: 4 }, expectedOutput: true },
      { input: { n: 5 }, expectedOutput: false }
    ]
  },
  {
    title: "Missing Number",
    description: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
    difficulty: "easy",
    hint: "Calculate expected sum (n*(n+1)/2) and subtract actual sum. Or use XOR: XOR all numbers from 0 to n with all numbers in array.",
    tags: ["Array", "Math"],
    testCases: [
      { input: { nums: [3, 0, 1] }, expectedOutput: 2 },
      { input: { nums: [0, 1] }, expectedOutput: 2 },
      { input: { nums: [9, 6, 4, 2, 3, 5, 7, 0, 1] }, expectedOutput: 8 },
      { input: { nums: [0] }, expectedOutput: 1 },
      { input: { nums: [1] }, expectedOutput: 0 }
    ]
  },
  {
    title: "Single Number",
    description: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.",
    difficulty: "easy",
    hint: "Use XOR operation: XOR all numbers. Since a XOR a = 0 and a XOR 0 = a, the result will be the single number.",
    tags: ["Array", "Bit Manipulation"],
    testCases: [
      { input: { nums: [2, 2, 1] }, expectedOutput: 1 },
      { input: { nums: [4, 1, 2, 1, 2] }, expectedOutput: 4 },
      { input: { nums: [1] }, expectedOutput: 1 },
      { input: { nums: [1, 1, 2, 2, 3] }, expectedOutput: 3 },
      { input: { nums: [-1, -1, -2] }, expectedOutput: -2 }
    ]
  },

  // Stacks & Queues
  {
    title: "Min Stack",
    description: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. Implement the MinStack class.",
    difficulty: "medium",
    hint: "Use two stacks: one for values, one for minimums. Or store pairs (value, min) in single stack. Or use a variable to track min and handle updates.",
    tags: ["Stack", "Design"],
    testCases: [
      { input: { operations: ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"], values: [[], [-2], [0], [-3], [], [], [], []] }, expectedOutput: [null, null, null, null, -3, null, 0, -2] },
      { input: { operations: ["MinStack", "push", "push", "getMin", "pop", "getMin"], values: [[], [1], [2], [], [], []] }, expectedOutput: [null, null, null, 1, null, 1] }
    ]
  },
  {
    title: "Valid Parentheses",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    difficulty: "easy",
    hint: "Use a stack. Push opening brackets, pop when encountering closing brackets. Check if popped bracket matches the closing bracket.",
    tags: ["String", "Stack"],
    testCases: [
      { input: { s: "()" }, expectedOutput: true },
      { input: { s: "()[]{}" }, expectedOutput: true },
      { input: { s: "(]" }, expectedOutput: false },
      { input: { s: "([)]" }, expectedOutput: false },
      { input: { s: "{[]}" }, expectedOutput: true }
    ]
  },
  {
    title: "Daily Temperatures",
    description: "Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.",
    difficulty: "medium",
    hint: "Use a stack to store indices. For each temperature, pop indices from stack where current temp > stack temp, and calculate difference in indices.",
    tags: ["Array", "Stack"],
    testCases: [
      { input: { temperatures: [73, 74, 75, 71, 69, 72, 76, 73] }, expectedOutput: [1, 1, 4, 2, 1, 1, 0, 0] },
      { input: { temperatures: [30, 40, 50, 60] }, expectedOutput: [1, 1, 1, 0] },
      { input: { temperatures: [30, 60, 90] }, expectedOutput: [1, 1, 0] },
      { input: { temperatures: [30] }, expectedOutput: [0] },
      { input: { temperatures: [70, 69, 68, 67] }, expectedOutput: [0, 0, 0, 0] }
    ]
  },

  // Sliding Window
  {
    title: "Longest Repeating Character Replacement",
    description: "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English letter. You can perform this operation at most k times. Return the length of the longest substring containing the same letter you can get after performing the above operations.",
    difficulty: "medium",
    hint: "Use sliding window. Track frequency of each character. Window is valid if (window_length - max_frequency) <= k. Expand right, shrink left when invalid.",
    tags: ["String", "Sliding Window"],
    testCases: [
      { input: { s: "ABAB", k: 2 }, expectedOutput: 4 },
      { input: { s: "AABABBA", k: 1 }, expectedOutput: 4 },
      { input: { s: "ABAA", k: 0 }, expectedOutput: 2 },
      { input: { s: "A", k: 1 }, expectedOutput: 1 },
      { input: { s: "ABBB", k: 2 }, expectedOutput: 4 }
    ]
  },
  {
    title: "Sliding Window Maximum",
    description: "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.",
    difficulty: "hard",
    hint: "Use a deque (double-ended queue) to store indices. Remove indices outside window from front, remove indices with smaller values from back, add current index to back.",
    tags: ["Array", "Sliding Window"],
    testCases: [
      { input: { nums: [1, 3, -1, -3, 5, 3, 6, 7], k: 3 }, expectedOutput: [3, 3, 5, 5, 6, 7] },
      { input: { nums: [1], k: 1 }, expectedOutput: [1] },
      { input: { nums: [1, -1], k: 1 }, expectedOutput: [1, -1] },
      { input: { nums: [9, 11], k: 2 }, expectedOutput: [11] },
      { input: { nums: [4, -2], k: 2 }, expectedOutput: [4] }
    ]
  },

  // Additional Array Problems
  {
    title: "Merge Sorted Array",
    description: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums2 into nums1 in non-decreasing order.",
    difficulty: "easy",
    hint: "Start from the end of both arrays. Compare elements and place larger ones at the end of nums1, working backwards.",
    tags: ["Array", "Two Pointers"],
    testCases: [
      { input: { nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3 }, expectedOutput: [1, 2, 2, 3, 5, 6] },
      { input: { nums1: [1], m: 1, nums2: [], n: 0 }, expectedOutput: [1] },
      { input: { nums1: [0], m: 0, nums2: [1], n: 1 }, expectedOutput: [1] },
      { input: { nums1: [4, 5, 6, 0, 0, 0], m: 3, nums2: [1, 2, 3], n: 3 }, expectedOutput: [1, 2, 3, 4, 5, 6] },
      { input: { nums1: [1, 2, 0, 0], m: 2, nums2: [3, 4], n: 2 }, expectedOutput: [1, 2, 3, 4] }
    ]
  },
  {
    title: "Remove Duplicates from Sorted Array",
    description: "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.",
    difficulty: "easy",
    hint: "Use two pointers: one to iterate through the array, another to track the position where unique elements should be placed.",
    tags: ["Array", "Two Pointers"],
    testCases: [
      { input: { nums: [1, 1, 2] }, expectedOutput: 2 },
      { input: { nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] }, expectedOutput: 5 },
      { input: { nums: [1, 1, 1] }, expectedOutput: 1 },
      { input: { nums: [1, 2, 3] }, expectedOutput: 3 },
      { input: { nums: [1] }, expectedOutput: 1 }
    ]
  },
  {
    title: "Remove Element",
    description: "Given an integer array nums and an integer val, remove all occurrences of val in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.",
    difficulty: "easy",
    hint: "Use two pointers: one to iterate, another to track position for non-val elements. Copy non-val elements forward.",
    tags: ["Array", "Two Pointers"],
    testCases: [
      { input: { nums: [3, 2, 2, 3], val: 3 }, expectedOutput: 2 },
      { input: { nums: [0, 1, 2, 2, 3, 0, 4, 2], val: 2 }, expectedOutput: 5 },
      { input: { nums: [1], val: 1 }, expectedOutput: 0 },
      { input: { nums: [2, 2, 2], val: 2 }, expectedOutput: 0 },
      { input: { nums: [1, 2, 3, 4], val: 5 }, expectedOutput: 4 }
    ]
  },
  {
    title: "Plus One",
    description: "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading zeros. Increment the large integer by one and return the resulting array of digits.",
    difficulty: "easy",
    hint: "Start from the end. Add 1, handle carry. If carry persists, add new digit at beginning.",
    tags: ["Array", "Math"],
    testCases: [
      { input: { digits: [1, 2, 3] }, expectedOutput: [1, 2, 4] },
      { input: { digits: [4, 3, 2, 1] }, expectedOutput: [4, 3, 2, 2] },
      { input: { digits: [9] }, expectedOutput: [1, 0] },
      { input: { digits: [9, 9, 9] }, expectedOutput: [1, 0, 0, 0] },
      { input: { digits: [1, 9, 9] }, expectedOutput: [2, 0, 0] }
    ]
  },
  {
    title: "Pascal's Triangle",
    description: "Given an integer numRows, return the first numRows of Pascal's triangle. In Pascal's triangle, each number is the sum of the two numbers directly above it.",
    difficulty: "easy",
    hint: "Each row starts and ends with 1. Middle elements are sum of two elements above. Build row by row.",
    tags: ["Array", "Dynamic Programming"],
    testCases: [
      { input: { numRows: 5 }, expectedOutput: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]] },
      { input: { numRows: 1 }, expectedOutput: [[1]] },
      { input: { numRows: 3 }, expectedOutput: [[1], [1, 1], [1, 2, 1]] },
      { input: { numRows: 4 }, expectedOutput: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]] },
      { input: { numRows: 6 }, expectedOutput: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]] }
    ]
  },
  {
    title: "Majority Element",
    description: "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.",
    difficulty: "easy",
    hint: "Use Boyer-Moore Voting Algorithm: maintain a candidate and count. Increment count for candidate, decrement for others. If count is 0, set new candidate.",
    tags: ["Array", "Hash Table"],
    testCases: [
      { input: { nums: [3, 2, 3] }, expectedOutput: 3 },
      { input: { nums: [2, 2, 1, 1, 1, 2, 2] }, expectedOutput: 2 },
      { input: { nums: [1] }, expectedOutput: 1 },
      { input: { nums: [1, 1, 2] }, expectedOutput: 1 },
      { input: { nums: [3, 3, 4] }, expectedOutput: 3 }
    ]
  },
  {
    title: "Trapping Rain Water",
    description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    difficulty: "hard",
    hint: "Use two pointers from both ends. Track max height from left and right. Water trapped = min(maxLeft, maxRight) - height[i].",
    tags: ["Array", "Two Pointers"],
    testCases: [
      { input: { height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] }, expectedOutput: 6 },
      { input: { height: [4, 2, 0, 3, 2, 5] }, expectedOutput: 9 },
      { input: { height: [1, 0, 1] }, expectedOutput: 1 },
      { input: { height: [3, 0, 2, 0, 4] }, expectedOutput: 7 },
      { input: { height: [2, 0, 2] }, expectedOutput: 2 }
    ]
  },
  {
    title: "Jump Game",
    description: "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.",
    difficulty: "medium",
    hint: "Track the farthest position you can reach. For each position, update farthest = max(farthest, i + nums[i]). If i > farthest, return false.",
    tags: ["Array", "Greedy"],
    testCases: [
      { input: { nums: [2, 3, 1, 1, 4] }, expectedOutput: true },
      { input: { nums: [3, 2, 1, 0, 4] }, expectedOutput: false },
      { input: { nums: [1] }, expectedOutput: true },
      { input: { nums: [2, 0] }, expectedOutput: true },
      { input: { nums: [0, 1] }, expectedOutput: false }
    ]
  },
  {
    title: "Jump Game II",
    description: "You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0]. Each element nums[i] represents the maximum length of a forward jump from index i. Return the minimum number of jumps to reach nums[n - 1].",
    difficulty: "medium",
    hint: "Use greedy: track current farthest reach and next farthest reach. When you reach current farthest, increment jumps and update current farthest to next farthest.",
    tags: ["Array", "Greedy"],
    testCases: [
      { input: { nums: [2, 3, 1, 1, 4] }, expectedOutput: 2 },
      { input: { nums: [2, 3, 0, 1, 4] }, expectedOutput: 2 },
      { input: { nums: [1] }, expectedOutput: 0 },
      { input: { nums: [1, 2] }, expectedOutput: 1 },
      { input: { nums: [2, 1] }, expectedOutput: 1 }
    ]
  },
  {
    title: "Rotate Image",
    description: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.",
    difficulty: "medium",
    hint: "Transpose the matrix first (swap matrix[i][j] with matrix[j][i]), then reverse each row. Or rotate layer by layer.",
    tags: ["Array", "Math"],
    testCases: [
      { input: { matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] }, expectedOutput: [[7, 4, 1], [8, 5, 2], [9, 6, 3]] },
      { input: { matrix: [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]] }, expectedOutput: [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]] },
      { input: { matrix: [[1]] }, expectedOutput: [[1]] },
      { input: { matrix: [[1, 2], [3, 4]] }, expectedOutput: [[3, 1], [4, 2]] },
      { input: { matrix: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]] }, expectedOutput: [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]] }
    ]
  },
  {
    title: "Spiral Matrix",
    description: "Given an m x n matrix, return all elements of the matrix in spiral order.",
    difficulty: "medium",
    hint: "Use four boundaries: top, bottom, left, right. Traverse right, down, left, up. Shrink boundaries after each direction.",
    tags: ["Array", "Matrix"],
    testCases: [
      { input: { matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] }, expectedOutput: [1, 2, 3, 6, 9, 8, 7, 4, 5] },
      { input: { matrix: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]] }, expectedOutput: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7] },
      { input: { matrix: [[1]] }, expectedOutput: [1] },
      { input: { matrix: [[1, 2], [3, 4]] }, expectedOutput: [1, 2, 4, 3] },
      { input: { matrix: [[1, 2, 3]] }, expectedOutput: [1, 2, 3] }
    ]
  },
  {
    title: "Set Matrix Zeroes",
    description: "Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's. You must do it in place.",
    difficulty: "medium",
    hint: "Use first row and first column as markers. First pass: mark rows/cols with zeros. Second pass: set zeros based on markers. Handle first row/col separately.",
    tags: ["Array", "Hash Table"],
    testCases: [
      { input: { matrix: [[1, 1, 1], [1, 0, 1], [1, 1, 1]] }, expectedOutput: [[1, 0, 1], [0, 0, 0], [1, 0, 1]] },
      { input: { matrix: [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]] }, expectedOutput: [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]] },
      { input: { matrix: [[1, 0]] }, expectedOutput: [[0, 0]] },
      { input: { matrix: [[1], [0]] }, expectedOutput: [[0], [0]] },
      { input: { matrix: [[1, 2, 3], [4, 0, 6], [7, 8, 9]] }, expectedOutput: [[1, 0, 3], [0, 0, 0], [7, 0, 9]] }
    ]
  },
  {
    title: "Word Search",
    description: "Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.",
    difficulty: "medium",
    hint: "Use DFS/backtracking. For each cell, try to match word character by character. Mark visited cells, backtrack if path doesn't lead to solution.",
    tags: ["Array", "Backtracking"],
    testCases: [
      { input: { board: [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word: "ABCCED" }, expectedOutput: true },
      { input: { board: [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word: "SEE" }, expectedOutput: true },
      { input: { board: [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word: "ABCB" }, expectedOutput: false },
      { input: { board: [["A"]], word: "A" }, expectedOutput: true },
      { input: { board: [["A", "B"], ["C", "D"]], word: "ACDB" }, expectedOutput: true }
    ]
  },
  {
    title: "Longest Consecutive Sequence",
    description: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.",
    difficulty: "hard",
    hint: "Use a set to store all numbers. For each number, if it's the start of a sequence (num-1 not in set), count consecutive numbers forward.",
    tags: ["Array", "Hash Table"],
    testCases: [
      { input: { nums: [100, 4, 200, 1, 3, 2] }, expectedOutput: 4 },
      { input: { nums: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1] }, expectedOutput: 9 },
      { input: { nums: [1] }, expectedOutput: 1 },
      { input: { nums: [] }, expectedOutput: 0 },
      { input: { nums: [1, 3, 5] }, expectedOutput: 1 }
    ]
  },
  {
    title: "Encode and Decode Strings",
    description: "Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.",
    difficulty: "medium",
    hint: "Use length prefix: encode as 'length#string'. When decoding, read length, then read that many characters.",
    tags: ["Array", "String"],
    testCases: [
      { input: { strs: ["neet", "code", "love", "you"] }, expectedOutput: ["neet", "code", "love", "you"] },
      { input: { strs: ["we", "say", ":", "yes"] }, expectedOutput: ["we", "say", ":", "yes"] },
      { input: { strs: [""] }, expectedOutput: [""] },
      { input: { strs: ["hello", "world"] }, expectedOutput: ["hello", "world"] },
      { input: { strs: [] }, expectedOutput: [] }
    ]
  },
  {
    title: "Top K Frequent Elements",
    description: "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    difficulty: "medium",
    hint: "Count frequencies using hash map. Use bucket sort: create array of lists indexed by frequency. Or use heap to get top k.",
    tags: ["Array", "Hash Table"],
    testCases: [
      { input: { nums: [1, 1, 1, 2, 2, 3], k: 2 }, expectedOutput: [1, 2] },
      { input: { nums: [1], k: 1 }, expectedOutput: [1] },
      { input: { nums: [1, 2], k: 2 }, expectedOutput: [1, 2] },
      { input: { nums: [4, 1, -1, 2, -1, 2, 3], k: 2 }, expectedOutput: [-1, 2] },
      { input: { nums: [1, 1, 1, 2, 2, 3, 3, 3], k: 2 }, expectedOutput: [1, 3] }
    ]
  },
  {
    title: "Product of Array Except Self",
    description: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operator.",
    difficulty: "medium",
    hint: "Use two passes: first pass to calculate left products, second pass to calculate right products and multiply them.",
    tags: ["Array", "Prefix Sum"],
    testCases: [
      { input: { nums: [1, 2, 3, 4] }, expectedOutput: [24, 12, 8, 6] },
      { input: { nums: [-1, 1, 0, -3, 3] }, expectedOutput: [0, 0, 9, 0, 0] },
      { input: { nums: [2, 3, 4, 5] }, expectedOutput: [60, 40, 30, 24] },
      { input: { nums: [1, 0] }, expectedOutput: [0, 1] },
      { input: { nums: [0, 0] }, expectedOutput: [0, 0] }
    ]
  },

  // More String Problems
  {
    title: "Implement strStr()",
    description: "Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
    difficulty: "easy",
    hint: "Use sliding window or KMP algorithm. For each position in haystack, check if substring matches needle.",
    tags: ["String", "Two Pointers"],
    testCases: [
      { input: { haystack: "sadbutsad", needle: "sad" }, expectedOutput: 0 },
      { input: { haystack: "leetcode", needle: "leeto" }, expectedOutput: -1 },
      { input: { haystack: "hello", needle: "ll" }, expectedOutput: 2 },
      { input: { haystack: "a", needle: "a" }, expectedOutput: 0 },
      { input: { haystack: "abc", needle: "c" }, expectedOutput: 2 }
    ]
  },
  {
    title: "Longest Common Subsequence",
    description: "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.",
    difficulty: "medium",
    hint: "Use dynamic programming: dp[i][j] = length of LCS of text1[0..i] and text2[0..j]. If chars match, dp[i][j] = 1 + dp[i-1][j-1], else dp[i][j] = max(dp[i-1][j], dp[i][j-1]).",
    tags: ["String", "Dynamic Programming"],
    testCases: [
      { input: { text1: "abcde", text2: "ace" }, expectedOutput: 3 },
      { input: { text1: "abc", text2: "abc" }, expectedOutput: 3 },
      { input: { text1: "abc", text2: "def" }, expectedOutput: 0 },
      { input: { text1: "bl", text2: "yby" }, expectedOutput: 1 },
      { input: { text1: "pmjghexybyrgzczy", text2: "hafcdqbgncrcbihkd" }, expectedOutput: 4 }
    ]
  },
  {
    title: "Edit Distance",
    description: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You have the following three operations permitted on a word: Insert a character, Delete a character, Replace a character.",
    difficulty: "hard",
    hint: "Use DP: dp[i][j] = min operations to convert word1[0..i] to word2[0..j]. If chars match, dp[i][j] = dp[i-1][j-1]. Else, dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]).",
    tags: ["String", "Dynamic Programming"],
    testCases: [
      { input: { word1: "horse", word2: "ros" }, expectedOutput: 3 },
      { input: { word1: "intention", word2: "execution" }, expectedOutput: 5 },
      { input: { word1: "", word2: "" }, expectedOutput: 0 },
      { input: { word1: "a", word2: "b" }, expectedOutput: 1 },
      { input: { word1: "zoologicoarchaeologist", word2: "zoogeologist" }, expectedOutput: 10 }
    ]
  },
  {
    title: "Wildcard Matching",
    description: "Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where '?' matches any single character and '*' matches any sequence of characters (including the empty sequence).",
    difficulty: "hard",
    hint: "Use DP: dp[i][j] = true if s[0..i] matches p[0..j]. Handle '*' by matching zero or more characters, '?' matches any single character.",
    tags: ["String", "Dynamic Programming"],
    testCases: [
      { input: { s: "aa", p: "a" }, expectedOutput: false },
      { input: { s: "aa", p: "*" }, expectedOutput: true },
      { input: { s: "cb", p: "?a" }, expectedOutput: false },
      { input: { s: "adceb", p: "*a*b" }, expectedOutput: true },
      { input: { s: "acdcb", p: "a*c?b" }, expectedOutput: false }
    ]
  },
  {
    title: "Regular Expression Matching",
    description: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where '.' matches any single character and '*' matches zero or more of the preceding element.",
    difficulty: "hard",
    hint: "Use DP: dp[i][j] = true if s[0..i] matches p[0..j]. Handle '*' by matching zero or more of preceding character, '.' matches any character.",
    tags: ["String", "Dynamic Programming"],
    testCases: [
      { input: { s: "aa", p: "a" }, expectedOutput: false },
      { input: { s: "aa", p: "a*" }, expectedOutput: true },
      { input: { s: "ab", p: ".*" }, expectedOutput: true },
      { input: { s: "aab", p: "c*a*b" }, expectedOutput: true },
      { input: { s: "mississippi", p: "mis*is*p*." }, expectedOutput: false }
    ]
  },
  {
    title: "Decode Ways",
    description: "A message containing letters from A-Z can be encoded into numbers using the following mapping: 'A' -> '1', 'B' -> '2', ..., 'Z' -> '26'. Given a string s containing only digits, return the number of ways to decode it.",
    difficulty: "medium",
    hint: "Use DP: dp[i] = ways to decode s[0..i]. If s[i] is valid (1-9), add dp[i-1]. If s[i-1]s[i] is valid (10-26), add dp[i-2].",
    tags: ["String", "Dynamic Programming"],
    testCases: [
      { input: { s: "12" }, expectedOutput: 2 },
      { input: { s: "226" }, expectedOutput: 3 },
      { input: { s: "06" }, expectedOutput: 0 },
      { input: { s: "10" }, expectedOutput: 1 },
      { input: { s: "27" }, expectedOutput: 1 }
    ]
  },
  {
    title: "Word Break",
    description: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
    difficulty: "medium",
    hint: "Use DP: dp[i] = true if s[0..i] can be segmented. For each position, check if any word from dict matches ending at that position and dp[start] is true.",
    tags: ["String", "Dynamic Programming"],
    testCases: [
      { input: { s: "leetcode", wordDict: ["leet", "code"] }, expectedOutput: true },
      { input: { s: "applepenapple", wordDict: ["apple", "pen"] }, expectedOutput: true },
      { input: { s: "catsandog", wordDict: ["cats", "dog", "sand", "and", "cat"] }, expectedOutput: false },
      { input: { s: "a", wordDict: ["a"] }, expectedOutput: true },
      { input: { s: "ab", wordDict: ["a", "b"] }, expectedOutput: true }
    ]
  },
  {
    title: "Word Break II",
    description: "Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.",
    difficulty: "hard",
    hint: "Use backtracking with memoization. For each position, try all words that match starting at that position, recursively solve remaining string.",
    tags: ["String", "Backtracking"],
    testCases: [
      { input: { s: "catsanddog", wordDict: ["cat", "cats", "and", "sand", "dog"] }, expectedOutput: ["cats and dog", "cat sand dog"] },
      { input: { s: "pineapplepenapple", wordDict: ["apple", "pen", "applepen", "pine", "pineapple"] }, expectedOutput: ["pine apple pen apple", "pineapple pen apple", "pine applepen apple"] },
      { input: { s: "catsandog", wordDict: ["cats", "dog", "sand", "and", "cat"] }, expectedOutput: [] },
      { input: { s: "a", wordDict: ["a"] }, expectedOutput: ["a"] },
      { input: { s: "ab", wordDict: ["a", "b"] }, expectedOutput: ["a b"] }
    ]
  },
  {
    title: "Palindrome Partitioning",
    description: "Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.",
    difficulty: "medium",
    hint: "Use backtracking. For each position, check if substring from start to current position is palindrome. If yes, recursively partition remaining string.",
    tags: ["String", "Backtracking"],
    testCases: [
      { input: { s: "aab" }, expectedOutput: [["a", "a", "b"], ["aa", "b"]] },
      { input: { s: "a" }, expectedOutput: [["a"]] },
      { input: { s: "racecar" }, expectedOutput: [["r", "a", "c", "e", "c", "a", "r"], ["r", "a", "cec", "a", "r"], ["r", "aceca", "r"], ["racecar"]] },
      { input: { s: "ab" }, expectedOutput: [["a", "b"]] },
      { input: { s: "aba" }, expectedOutput: [["a", "b", "a"], ["aba"]] }
    ]
  },
  {
    title: "Zigzag Conversion",
    description: "The string 'PAYPALISHIRING' is written in a zigzag pattern on a given number of rows. Write the code that will take a string and make this conversion given a number of rows.",
    difficulty: "medium",
    hint: "Simulate the zigzag pattern. Use an array of strings for each row. Track direction (down/up) and current row. Append characters to appropriate row.",
    tags: ["String"],
    testCases: [
      { input: { s: "PAYPALISHIRING", numRows: 3 }, expectedOutput: "PAHNAPLSIIGYIR" },
      { input: { s: "PAYPALISHIRING", numRows: 4 }, expectedOutput: "PINALSIGYAHRPI" },
      { input: { s: "A", numRows: 1 }, expectedOutput: "A" },
      { input: { s: "AB", numRows: 1 }, expectedOutput: "AB" },
      { input: { s: "ABCD", numRows: 2 }, expectedOutput: "ACBD" }
    ]
  },
  {
    title: "String to Integer (atoi)",
    description: "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).",
    difficulty: "medium",
    hint: "Skip whitespace, check sign, read digits until non-digit or end. Handle overflow by clamping to INT_MAX/INT_MIN.",
    tags: ["String"],
    testCases: [
      { input: { s: "42" }, expectedOutput: 42 },
      { input: { s: "   -42" }, expectedOutput: -42 },
      { input: { s: "4193 with words" }, expectedOutput: 4193 },
      { input: { s: "words and 987" }, expectedOutput: 0 },
      { input: { s: "-91283472332" }, expectedOutput: -2147483648 }
    ]
  },
  {
    title: "Roman to Integer",
    description: "Given a roman numeral, convert it to an integer.",
    difficulty: "easy",
    hint: "Create a map of roman to integer values. If current value < next value, subtract current, else add current.",
    tags: ["String", "Math"],
    testCases: [
      { input: { s: "III" }, expectedOutput: 3 },
      { input: { s: "LVIII" }, expectedOutput: 58 },
      { input: { s: "MCMXCIV" }, expectedOutput: 1994 },
      { input: { s: "IV" }, expectedOutput: 4 },
      { input: { s: "IX" }, expectedOutput: 9 }
    ]
  },
  {
    title: "Integer to Roman",
    description: "Given an integer, convert it to a roman numeral.",
    difficulty: "medium",
    hint: "Create arrays of values and symbols. For each value, subtract as many times as possible and append corresponding symbol.",
    tags: ["String", "Math"],
    testCases: [
      { input: { num: 3 }, expectedOutput: "III" },
      { input: { num: 58 }, expectedOutput: "LVIII" },
      { input: { num: 1994 }, expectedOutput: "MCMXCIV" },
      { input: { num: 4 }, expectedOutput: "IV" },
      { input: { num: 9 }, expectedOutput: "IX" }
    ]
  },
  {
    title: "Count and Say",
    description: "The count-and-say sequence is a sequence of digit strings defined by the recursive formula: countAndSay(1) = '1', countAndSay(n) is the way you would 'say' the digit string from countAndSay(n-1).",
    difficulty: "medium",
    hint: "For each number, group consecutive same digits, then say 'count digit'. Build string iteratively.",
    tags: ["String"],
    testCases: [
      { input: { n: 1 }, expectedOutput: "1" },
      { input: { n: 4 }, expectedOutput: "1211" },
      { input: { n: 5 }, expectedOutput: "111221" },
      { input: { n: 2 }, expectedOutput: "11" },
      { input: { n: 3 }, expectedOutput: "21" }
    ]
  },
  {
    title: "Multiply Strings",
    description: "Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.",
    difficulty: "medium",
    hint: "Simulate multiplication digit by digit. Use array to store result. Multiply each digit of num1 with each digit of num2, add to appropriate position.",
    tags: ["String", "Math"],
    testCases: [
      { input: { num1: "2", num2: "3" }, expectedOutput: "6" },
      { input: { num1: "123", num2: "456" }, expectedOutput: "56088" },
      { input: { num1: "0", num2: "0" }, expectedOutput: "0" },
      { input: { num1: "9", num2: "9" }, expectedOutput: "81" },
      { input: { num1: "999", num2: "999" }, expectedOutput: "998001" }
    ]
  },
  {
    title: "Add Binary",
    description: "Given two binary strings a and b, return their sum as a binary string.",
    difficulty: "easy",
    hint: "Simulate binary addition from right to left. Handle carry. If carry persists, add it at the beginning.",
    tags: ["String", "Math"],
    testCases: [
      { input: { a: "11", b: "1" }, expectedOutput: "100" },
      { input: { a: "1010", b: "1011" }, expectedOutput: "10101" },
      { input: { a: "0", b: "0" }, expectedOutput: "0" },
      { input: { a: "1", b: "1" }, expectedOutput: "10" },
      { input: { a: "1111", b: "1111" }, expectedOutput: "11110" }
    ]
  },
  {
    title: "Simplify Path",
    description: "Given a string path, which is an absolute path to a file or directory in a Unix-style file system, convert it to the simplified canonical path.",
    difficulty: "medium",
    hint: "Split by '/', use stack. Push valid directory names, pop on '..', ignore '.' and empty strings. Join with '/'.",
    tags: ["String", "Stack"],
    testCases: [
      { input: { path: "/home/" }, expectedOutput: "/home" },
      { input: { path: "/../" }, expectedOutput: "/" },
      { input: { path: "/home//foo/" }, expectedOutput: "/home/foo" },
      { input: { path: "/a/./b/../../c/" }, expectedOutput: "/c" },
      { input: { path: "/a/../../b/../c//.//" }, expectedOutput: "/c" }
    ]
  },
  {
    title: "Basic Calculator",
    description: "Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.",
    difficulty: "hard",
    hint: "Use stack to handle parentheses. Track sign and number. When '(' push result and sign, when ')' pop and calculate.",
    tags: ["String", "Stack"],
    testCases: [
      { input: { s: "1 + 1" }, expectedOutput: 2 },
      { input: { s: " 2-1 + 2 " }, expectedOutput: 3 },
      { input: { s: "(1+(4+5+2)-3)+(6+8)" }, expectedOutput: 23 },
      { input: { s: "1" }, expectedOutput: 1 },
      { input: { s: "-2+ 1" }, expectedOutput: -1 }
    ]
  },
  {
    title: "Basic Calculator II",
    description: "Given a string s which represents an expression, evaluate this expression and return its value. The integer division should truncate toward zero.",
    difficulty: "medium",
    hint: "Use stack. Process numbers and operators. For '*' and '/', calculate immediately. For '+' and '-', push to stack. Finally sum stack.",
    tags: ["String", "Stack"],
    testCases: [
      { input: { s: "3+2*2" }, expectedOutput: 7 },
      { input: { s: " 3/2 " }, expectedOutput: 1 },
      { input: { s: " 3+5 / 2 " }, expectedOutput: 5 },
      { input: { s: "1+1" }, expectedOutput: 2 },
      { input: { s: "2*3*4" }, expectedOutput: 24 }
    ]
  },

  // More Linked List Problems
  {
    title: "Copy List with Random Pointer",
    description: "A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null. Construct a deep copy of the list.",
    difficulty: "medium",
    hint: "Use hash map to map original nodes to copies. First pass: create all nodes. Second pass: set next and random pointers.",
    tags: ["Linked List", "Hash Table"],
    testCases: [
      { input: { head: [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]] }, expectedOutput: [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]] },
      { input: { head: [[1, 1], [2, 1]] }, expectedOutput: [[1, 1], [2, 1]] },
      { input: { head: [[3, null], [3, 0], [3, null]] }, expectedOutput: [[3, null], [3, 0], [3, null]] },
      { input: { head: [] }, expectedOutput: [] },
      { input: { head: [[1, null]] }, expectedOutput: [[1, null]] }
    ]
  },
  {
    title: "LRU Cache",
    description: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class.",
    difficulty: "medium",
    hint: "Use hash map + doubly linked list. Map stores key->node. List maintains order (head=most recent, tail=least recent). On get/put, move to head.",
    tags: ["Linked List", "Hash Table"],
    testCases: [
      { input: { operations: ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"], values: [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]] }, expectedOutput: [null, null, null, 1, null, -1, null, -1, 3, 4] },
      { input: { operations: ["LRUCache", "get", "put", "get"], values: [[1], [1], [1, 1], [1]] }, expectedOutput: [null, -1, null, 1] }
    ]
  },
  {
    title: "Intersection of Two Linked Lists",
    description: "Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.",
    difficulty: "easy",
    hint: "Use two pointers. Traverse both lists. When one reaches end, switch to other list. They will meet at intersection or both be null.",
    tags: ["Linked List", "Two Pointers"],
    testCases: [
      { input: { listA: [4, 1, 8, 4, 5], listB: [5, 6, 1, 8, 4, 5], skipA: 2, skipB: 3 }, expectedOutput: 8 },
      { input: { listA: [1, 9, 1, 2, 4], listB: [3, 2, 4], skipA: 3, skipB: 1 }, expectedOutput: 2 },
      { input: { listA: [2, 6, 4], listB: [1, 5], skipA: 3, skipB: 2 }, expectedOutput: null },
      { input: { listA: [1], listB: [1], skipA: 0, skipB: 0 }, expectedOutput: 1 },
      { input: { listA: [1, 2], listB: [3, 4], skipA: 2, skipB: 2 }, expectedOutput: null }
    ]
  },
  {
    title: "Palindrome Linked List",
    description: "Given the head of a singly linked list, return true if it is a palindrome or false otherwise.",
    difficulty: "easy",
    hint: "Find middle using slow/fast pointers. Reverse second half. Compare first half with reversed second half.",
    tags: ["Linked List", "Two Pointers"],
    testCases: [
      { input: { head: [1, 2, 2, 1] }, expectedOutput: true },
      { input: { head: [1, 2] }, expectedOutput: false },
      { input: { head: [1] }, expectedOutput: true },
      { input: { head: [1, 2, 3, 2, 1] }, expectedOutput: true },
      { input: { head: [1, 2, 3] }, expectedOutput: false }
    ]
  },
  {
    title: "Remove Duplicates from Sorted List",
    description: "Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.",
    difficulty: "easy",
    hint: "Iterate through list. If current value equals next value, skip next node by setting current.next = current.next.next.",
    tags: ["Linked List"],
    testCases: [
      { input: { head: [1, 1, 2] }, expectedOutput: [1, 2] },
      { input: { head: [1, 1, 2, 3, 3] }, expectedOutput: [1, 2, 3] },
      { input: { head: [1] }, expectedOutput: [1] },
      { input: { head: [1, 1, 1] }, expectedOutput: [1] },
      { input: { head: [] }, expectedOutput: [] }
    ]
  },
  {
    title: "Swap Nodes in Pairs",
    description: "Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes.",
    difficulty: "medium",
    hint: "Use dummy node. For each pair, swap nodes by adjusting pointers. Move two steps forward after each swap.",
    tags: ["Linked List", "Recursion"],
    testCases: [
      { input: { head: [1, 2, 3, 4] }, expectedOutput: [2, 1, 4, 3] },
      { input: { head: [] }, expectedOutput: [] },
      { input: { head: [1] }, expectedOutput: [1] },
      { input: { head: [1, 2, 3] }, expectedOutput: [2, 1, 3] },
      { input: { head: [1, 2, 3, 4, 5] }, expectedOutput: [2, 1, 4, 3, 5] }
    ]
  },
  {
    title: "Rotate List",
    description: "Given the head of a linked list, rotate the list to the right by k places.",
    difficulty: "medium",
    hint: "Find length and tail. Connect tail to head. Find new tail at (length - k % length - 1). Set new head and break cycle.",
    tags: ["Linked List", "Two Pointers"],
    testCases: [
      { input: { head: [1, 2, 3, 4, 5], k: 2 }, expectedOutput: [4, 5, 1, 2, 3] },
      { input: { head: [0, 1, 2], k: 4 }, expectedOutput: [2, 0, 1] },
      { input: { head: [1], k: 1 }, expectedOutput: [1] },
      { input: { head: [1, 2], k: 1 }, expectedOutput: [2, 1] },
      { input: { head: [1, 2, 3], k: 3 }, expectedOutput: [1, 2, 3] }
    ]
  },
  {
    title: "Partition List",
    description: "Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.",
    difficulty: "medium",
    hint: "Create two dummy lists: one for nodes < x, one for nodes >= x. Traverse list, append to appropriate list. Connect the two lists.",
    tags: ["Linked List", "Two Pointers"],
    testCases: [
      { input: { head: [1, 4, 3, 2, 5, 2], x: 3 }, expectedOutput: [1, 2, 2, 4, 3, 5] },
      { input: { head: [2, 1], x: 2 }, expectedOutput: [1, 2] },
      { input: { head: [1], x: 0 }, expectedOutput: [1] },
      { input: { head: [1, 2, 3], x: 4 }, expectedOutput: [1, 2, 3] },
      { input: { head: [5, 4, 3, 2, 1], x: 3 }, expectedOutput: [2, 1, 5, 4, 3] }
    ]
  },
  {
    title: "Reverse Nodes in k-Group",
    description: "Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.",
    difficulty: "hard",
    hint: "Use recursion or iterative approach. Check if k nodes exist. Reverse k nodes, recursively reverse remaining list, connect them.",
    tags: ["Linked List", "Recursion"],
    testCases: [
      { input: { head: [1, 2, 3, 4, 5], k: 2 }, expectedOutput: [2, 1, 4, 3, 5] },
      { input: { head: [1, 2, 3, 4, 5], k: 3 }, expectedOutput: [3, 2, 1, 4, 5] },
      { input: { head: [1, 2], k: 2 }, expectedOutput: [2, 1] },
      { input: { head: [1], k: 1 }, expectedOutput: [1] },
      { input: { head: [1, 2, 3, 4], k: 2 }, expectedOutput: [2, 1, 4, 3] }
    ]
  },
  {
    title: "Flatten Binary Tree to Linked List",
    description: "Given the root of a binary tree, flatten the tree into a 'linked list' where the 'linked list' uses the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.",
    difficulty: "medium",
    hint: "Use recursion: flatten left and right subtrees. Attach flattened left to root's right, attach flattened right to end of flattened left.",
    tags: ["Tree", "Linked List"],
    testCases: [
      { input: { root: [1, 2, 5, 3, 4, null, 6] }, expectedOutput: [1, null, 2, null, 3, null, 4, null, 5, null, 6] },
      { input: { root: [] }, expectedOutput: [] },
      { input: { root: [0] }, expectedOutput: [0] },
      { input: { root: [1, 2, null, 3] }, expectedOutput: [1, null, 2, null, 3] },
      { input: { root: [1, null, 2, 3] }, expectedOutput: [1, null, 2, null, 3] }
    ]
  },

  // More Tree Problems
  {
    title: "Binary Tree Right Side View",
    description: "Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.",
    difficulty: "medium",
    hint: "Use BFS. For each level, add the last node's value to result. Or use DFS with level tracking, update result for each level.",
    tags: ["Tree", "BFS"],
    testCases: [
      { input: { root: [1, 2, 3, null, 5, null, 4] }, expectedOutput: [1, 3, 4] },
      { input: { root: [1, null, 3] }, expectedOutput: [1, 3] },
      { input: { root: [] }, expectedOutput: [] },
      { input: { root: [1, 2, 3, 4] }, expectedOutput: [1, 3, 4] },
      { input: { root: [1, 2, 3, null, 5] }, expectedOutput: [1, 3, 5] }
    ]
  },
  {
    title: "Count Complete Tree Nodes",
    description: "Given the root of a complete binary tree, return the number of the nodes in the tree.",
    difficulty: "medium",
    hint: "Check left and right heights. If equal, tree is perfect (2^h - 1 nodes). Otherwise, recursively count left and right subtrees.",
    tags: ["Tree", "Binary Search"],
    testCases: [
      { input: { root: [1, 2, 3, 4, 5, 6] }, expectedOutput: 6 },
      { input: { root: [] }, expectedOutput: 0 },
      { input: { root: [1] }, expectedOutput: 1 },
      { input: { root: [1, 2, 3, 4] }, expectedOutput: 4 },
      { input: { root: [1, 2, 3, 4, 5] }, expectedOutput: 5 }
    ]
  },
  {
    title: "Lowest Common Ancestor of a Binary Tree",
    description: "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.",
    difficulty: "medium",
    hint: "Use recursion. If current node is p or q, return it. Recursively search left and right. If both return non-null, current is LCA. Otherwise return non-null one.",
    tags: ["Tree", "DFS"],
    testCases: [
      { input: { root: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p: 5, q: 1 }, expectedOutput: 3 },
      { input: { root: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p: 5, q: 4 }, expectedOutput: 5 },
      { input: { root: [1, 2], p: 1, q: 2 }, expectedOutput: 1 },
      { input: { root: [1, 2, 3], p: 2, q: 3 }, expectedOutput: 1 },
      { input: { root: [1], p: 1, q: 1 }, expectedOutput: 1 }
    ]
  },
  {
    title: "Serialize and Deserialize Binary Tree",
    description: "Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work.",
    difficulty: "hard",
    hint: "Use preorder traversal with null markers. Serialize: visit root, serialize left, serialize right. Deserialize: read value, if null return null, else create node and recursively deserialize left and right.",
    tags: ["Tree", "DFS"],
    testCases: [
      { input: { root: [1, 2, 3, null, null, 4, 5] }, expectedOutput: [1, 2, 3, null, null, 4, 5] },
      { input: { root: [] }, expectedOutput: [] },
      { input: { root: [1] }, expectedOutput: [1] },
      { input: { root: [1, 2] }, expectedOutput: [1, 2] },
      { input: { root: [1, null, 2] }, expectedOutput: [1, null, 2] }
    ]
  },
  {
    title: "Construct Binary Tree from Preorder and Inorder Traversal",
    description: "Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.",
    difficulty: "medium",
    hint: "First element of preorder is root. Find root in inorder. Left of root in inorder is left subtree, right is right subtree. Recursively build subtrees.",
    tags: ["Tree", "Array"],
    testCases: [
      { input: { preorder: [3, 9, 20, 15, 7], inorder: [9, 3, 15, 20, 7] }, expectedOutput: [3, 9, 20, null, null, 15, 7] },
      { input: { preorder: [-1], inorder: [-1] }, expectedOutput: [-1] },
      { input: { preorder: [1, 2], inorder: [2, 1] }, expectedOutput: [1, 2] },
      { input: { preorder: [1, 2, 3], inorder: [3, 2, 1] }, expectedOutput: [1, null, 2, null, 3] },
      { input: { preorder: [1, 2, 3], inorder: [1, 2, 3] }, expectedOutput: [1, null, 2, null, 3] }
    ]
  },
  {
    title: "Kth Smallest Element in a BST",
    description: "Given the root of a binary search tree and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.",
    difficulty: "medium",
    hint: "Use inorder traversal (left-root-right gives sorted order). Keep count, when count equals k, return value.",
    tags: ["Tree", "DFS"],
    testCases: [
      { input: { root: [3, 1, 4, null, 2], k: 1 }, expectedOutput: 1 },
      { input: { root: [5, 3, 6, 2, 4, null, null, 1], k: 3 }, expectedOutput: 3 },
      { input: { root: [1], k: 1 }, expectedOutput: 1 },
      { input: { root: [2, 1], k: 2 }, expectedOutput: 2 },
      { input: { root: [3, 1, 4, null, 2], k: 2 }, expectedOutput: 2 }
    ]
  },
  {
    title: "Binary Tree Maximum Path Sum",
    description: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Return the maximum path sum.",
    difficulty: "hard",
    hint: "Use recursion. For each node, calculate max path through it (node + max left + max right). Also return max single path (node + max(left, right)) for parent.",
    tags: ["Tree", "DFS"],
    testCases: [
      { input: { root: [1, 2, 3] }, expectedOutput: 6 },
      { input: { root: [-10, 9, 20, null, null, 15, 7] }, expectedOutput: 42 },
      { input: { root: [-3] }, expectedOutput: -3 },
      { input: { root: [2, -1] }, expectedOutput: 2 },
      { input: { root: [1, -2, 3] }, expectedOutput: 4 }
    ]
  },
  {
    title: "Diameter of Binary Tree",
    description: "Given the root of a binary tree, return the length of the diameter of the tree. The diameter is the length of the longest path between any two nodes in a tree.",
    difficulty: "easy",
    hint: "For each node, diameter through it = left height + right height. Track maximum diameter seen. Return max(left height, right height) + 1 for parent.",
    tags: ["Tree", "DFS"],
    testCases: [
      { input: { root: [1, 2, 3, 4, 5] }, expectedOutput: 3 },
      { input: { root: [1, 2] }, expectedOutput: 1 },
      { input: { root: [1] }, expectedOutput: 0 },
      { input: { root: [1, 2, 3, null, 4] }, expectedOutput: 3 },
      { input: { root: [1, 2, 3, 4, null, 5] }, expectedOutput: 3 }
    ]
  },
  {
    title: "Symmetric Tree",
    description: "Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
    difficulty: "easy",
    hint: "Use recursion: two trees are symmetric if roots are equal, left of first equals right of second, and right of first equals left of second.",
    tags: ["Tree", "DFS"],
    testCases: [
      { input: { root: [1, 2, 2, 3, 4, 4, 3] }, expectedOutput: true },
      { input: { root: [1, 2, 2, null, 3, null, 3] }, expectedOutput: false },
      { input: { root: [1] }, expectedOutput: true },
      { input: { root: [1, 2, 2] }, expectedOutput: true },
      { input: { root: [1, 2, null] }, expectedOutput: false }
    ]
  },
  {
    title: "Subtree of Another Tree",
    description: "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.",
    difficulty: "easy",
    hint: "For each node in root, check if subtree starting at that node matches subRoot. Use helper function to check if two trees are identical.",
    tags: ["Tree", "DFS"],
    testCases: [
      { input: { root: [3, 4, 5, 1, 2], subRoot: [4, 1, 2] }, expectedOutput: true },
      { input: { root: [3, 4, 5, 1, 2, null, null, null, null, 0], subRoot: [4, 1, 2] }, expectedOutput: false },
      { input: { root: [1], subRoot: [1] }, expectedOutput: true },
      { input: { root: [1, 1], subRoot: [1] }, expectedOutput: true },
      { input: { root: [1, 2, 3], subRoot: [2, 3] }, expectedOutput: false }
    ]
  },
  {
    title: "Binary Tree Zigzag Level Order Traversal",
    description: "Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.",
    difficulty: "medium",
    hint: "Use BFS with level tracking. Reverse order of nodes at odd levels (1-indexed) or use deque to add/remove from appropriate end.",
    tags: ["Tree", "BFS"],
    testCases: [
      { input: { root: [3, 9, 20, null, null, 15, 7] }, expectedOutput: [[3], [20, 9], [15, 7]] },
      { input: { root: [1] }, expectedOutput: [[1]] },
      { input: { root: [] }, expectedOutput: [] },
      { input: { root: [1, 2, 3, 4, null, null, 5] }, expectedOutput: [[1], [3, 2], [4, 5]] },
      { input: { root: [1, 2, 3] }, expectedOutput: [[1], [3, 2]] }
    ]
  },

  // Graph Problems
  {
    title: "Number of Islands",
    description: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
    difficulty: "medium",
    hint: "Use DFS or BFS. For each '1' not visited, do DFS/BFS to mark all connected '1's as visited. Count number of DFS/BFS calls.",
    tags: ["Array", "DFS"],
    testCases: [
      { input: { grid: [["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]] }, expectedOutput: 1 },
      { input: { grid: [["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]] }, expectedOutput: 3 },
      { input: { grid: [["1"]] }, expectedOutput: 1 },
      { input: { grid: [["0"]] }, expectedOutput: 0 },
      { input: { grid: [["1", "0"], ["0", "1"]] }, expectedOutput: 2 }
    ]
  },
  {
    title: "Clone Graph",
    description: "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.",
    difficulty: "medium",
    hint: "Use DFS with hash map. Map original nodes to cloned nodes. For each node, create clone if not exists, then recursively clone neighbors.",
    tags: ["Graph", "Hash Table"],
    testCases: [
      { input: { adjList: [[2, 4], [1, 3], [2, 4], [1, 3]] }, expectedOutput: [[2, 4], [1, 3], [2, 4], [1, 3]] },
      { input: { adjList: [[]] }, expectedOutput: [[]] },
      { input: { adjList: [] }, expectedOutput: [] },
      { input: { adjList: [[2], [1]] }, expectedOutput: [[2], [1]] },
      { input: { adjList: [[2, 3], [1, 3], [1, 2]] }, expectedOutput: [[2, 3], [1, 3], [1, 2]] }
    ]
  },
  {
    title: "Course Schedule",
    description: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return true if you can finish all courses. Otherwise, return false.",
    difficulty: "medium",
    hint: "Use topological sort (Kahn's algorithm) or DFS to detect cycles. Build graph, use in-degree array or DFS with visited/visiting states.",
    tags: ["Graph", "Topological Sort"],
    testCases: [
      { input: { numCourses: 2, prerequisites: [[1, 0]] }, expectedOutput: true },
      { input: { numCourses: 2, prerequisites: [[1, 0], [0, 1]] }, expectedOutput: false },
      { input: { numCourses: 3, prerequisites: [[1, 0], [2, 1]] }, expectedOutput: true },
      { input: { numCourses: 1, prerequisites: [] }, expectedOutput: true },
      { input: { numCourses: 4, prerequisites: [[1, 0], [2, 0], [3, 1], [3, 2]] }, expectedOutput: true }
    ]
  },
  {
    title: "Course Schedule II",
    description: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return the ordering of courses you should take to finish all courses.",
    difficulty: "medium",
    hint: "Use topological sort. Build graph and in-degree array. Process nodes with in-degree 0, add to result, decrease neighbors' in-degrees.",
    tags: ["Graph", "Topological Sort"],
    testCases: [
      { input: { numCourses: 2, prerequisites: [[1, 0]] }, expectedOutput: [0, 1] },
      { input: { numCourses: 4, prerequisites: [[1, 0], [2, 0], [3, 1], [3, 2]] }, expectedOutput: [0, 2, 1, 3] },
      { input: { numCourses: 1, prerequisites: [] }, expectedOutput: [0] },
      { input: { numCourses: 2, prerequisites: [[1, 0], [0, 1]] }, expectedOutput: [] },
      { input: { numCourses: 3, prerequisites: [[1, 0], [2, 1]] }, expectedOutput: [0, 1, 2] }
    ]
  },
  {
    title: "Pacific Atlantic Water Flow",
    description: "There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges. Water can only flow in four directions. Find the list of grid coordinates where water can flow to both the Pacific and Atlantic oceans.",
    difficulty: "medium",
    hint: "Start DFS from Pacific edges (top, left) and Atlantic edges (bottom, right). Mark reachable cells. Return cells reachable from both.",
    tags: ["Array", "DFS"],
    testCases: [
      { input: { heights: [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]] }, expectedOutput: [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] },
      { input: { heights: [[2, 1], [1, 2]] }, expectedOutput: [[0, 0], [0, 1], [1, 0], [1, 1]] },
      { input: { heights: [[1]] }, expectedOutput: [[0, 0]] },
      { input: { heights: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] }, expectedOutput: [[0, 2], [1, 2], [2, 0], [2, 1], [2, 2]] },
      { input: { heights: [[3, 3, 3], [3, 1, 3], [3, 3, 3]] }, expectedOutput: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 2], [2, 0], [2, 1], [2, 2]] }
    ]
  },
  {
    title: "Word Ladder",
    description: "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that every adjacent pair of words differs by a single letter and every si for 1 <= i <= k is in wordList.",
    difficulty: "hard",
    hint: "Use BFS. Start from beginWord. For each word, generate all words that differ by one letter. If word is endWord, return level. Use set for O(1) lookup.",
    tags: ["String", "BFS"],
    testCases: [
      { input: { beginWord: "hit", endWord: "cog", wordList: ["hot", "dot", "dog", "lot", "log", "cog"] }, expectedOutput: 5 },
      { input: { beginWord: "hit", endWord: "cog", wordList: ["hot", "dot", "dog", "lot", "log"] }, expectedOutput: 0 },
      { input: { beginWord: "a", endWord: "c", wordList: ["a", "b", "c"] }, expectedOutput: 2 },
      { input: { beginWord: "hot", endWord: "dog", wordList: ["hot", "dog"] }, expectedOutput: 0 },
      { input: { beginWord: "hit", endWord: "cog", wordList: ["hot", "dot", "tog", "cog"] }, expectedOutput: 0 }
    ]
  },
  {
    title: "Surrounded Regions",
    description: "Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'. A region is captured by flipping all 'O's into 'X's in that surrounded region.",
    difficulty: "medium",
    hint: "Start DFS from border 'O's, mark them as safe. Then flip all unmarked 'O's to 'X'. Or use union-find to group border-connected 'O's.",
    tags: ["Array", "DFS"],
    testCases: [
      { input: { board: [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]] }, expectedOutput: [["X", "X", "X", "X"], ["X", "X", "X", "X"], ["X", "X", "X", "X"], ["X", "O", "X", "X"]] },
      { input: { board: [["X"]] }, expectedOutput: [["X"]] },
      { input: { board: [["O", "O"], ["O", "O"]] }, expectedOutput: [["O", "O"], ["O", "O"]] },
      { input: { board: [["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]] }, expectedOutput: [["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]] },
      { input: { board: [["O", "X", "O"], ["X", "O", "X"], ["O", "X", "O"]] }, expectedOutput: [["O", "X", "O"], ["X", "X", "X"], ["O", "X", "O"]] }
    ]
  },
  {
    title: "Redundant Connection",
    description: "In this problem, a tree is an undirected graph that is connected and has no cycles. You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. Return an edge that can be removed so that the resulting graph is a tree of n nodes.",
    difficulty: "medium",
    hint: "Use Union-Find. For each edge, if both nodes are already in same set, this edge creates cycle, return it. Otherwise, union the sets.",
    tags: ["Graph", "Union Find"],
    testCases: [
      { input: { edges: [[1, 2], [1, 3], [2, 3]] }, expectedOutput: [2, 3] },
      { input: { edges: [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]] }, expectedOutput: [1, 4] },
      { input: { edges: [[1, 2], [2, 3], [1, 3]] }, expectedOutput: [1, 3] },
      { input: { edges: [[1, 2], [1, 3], [2, 3], [3, 4]] }, expectedOutput: [2, 3] },
      { input: { edges: [[1, 2], [2, 3], [3, 1]] }, expectedOutput: [3, 1] }
    ]
  },
  {
    title: "Network Delay Time",
    description: "You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.",
    difficulty: "medium",
    hint: "Use Dijkstra's algorithm. Start from node k, find shortest paths to all nodes. Return maximum distance, or -1 if any node unreachable.",
    tags: ["Graph", "Dijkstra"],
    testCases: [
      { input: { times: [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n: 4, k: 2 }, expectedOutput: 2 },
      { input: { times: [[1, 2, 1]], n: 2, k: 1 }, expectedOutput: 1 },
      { input: { times: [[1, 2, 1]], n: 2, k: 2 }, expectedOutput: -1 },
      { input: { times: [[1, 2, 1], [2, 3, 2], [1, 3, 4]], n: 3, k: 1 }, expectedOutput: 3 },
      { input: { times: [[1, 2, 1], [2, 1, 3]], n: 2, k: 2 }, expectedOutput: 3 }
    ]
  },
  {
    title: "Cheapest Flights Within K Stops",
    description: "There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei. You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops.",
    difficulty: "medium",
    hint: "Use BFS or Bellman-Ford. Track minimum cost to reach each city with at most k stops. Update costs when finding cheaper paths.",
    tags: ["Graph", "Dynamic Programming"],
    testCases: [
      { input: { n: 4, flights: [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], src: 0, dst: 3, k: 1 }, expectedOutput: 700 },
      { input: { n: 3, flights: [[0, 1, 100], [1, 2, 100], [0, 2, 500]], src: 0, dst: 2, k: 1 }, expectedOutput: 200 },
      { input: { n: 3, flights: [[0, 1, 100], [1, 2, 100], [0, 2, 500]], src: 0, dst: 2, k: 0 }, expectedOutput: 500 },
      { input: { n: 4, flights: [[0, 1, 1], [0, 2, 5], [1, 2, 1], [2, 3, 1]], src: 0, dst: 3, k: 1 }, expectedOutput: 6 },
      { input: { n: 2, flights: [[0, 1, 100]], src: 0, dst: 1, k: 0 }, expectedOutput: 100 }
    ]
  },

  // More Dynamic Programming Problems
  {
    title: "Partition Equal Subset Sum",
    description: "Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.",
    difficulty: "medium",
    hint: "If sum is odd, return false. Use DP: dp[i] = true if sum i is achievable. For each number, update dp backwards from target.",
    tags: ["Array", "Dynamic Programming"],
    testCases: [
      { input: { nums: [1, 5, 11, 5] }, expectedOutput: true },
      { input: { nums: [1, 2, 3, 5] }, expectedOutput: false },
      { input: { nums: [1, 1] }, expectedOutput: true },
      { input: { nums: [1, 2, 5] }, expectedOutput: false },
      { input: { nums: [1, 1, 2, 3, 5] }, expectedOutput: true }
    ]
  },
  {
    title: "Target Sum",
    description: "You are given an integer array nums and an integer target. You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.",
    difficulty: "medium",
    hint: "Use DP: dp[i][sum] = ways to achieve sum using first i numbers. Or convert to subset sum: find count of subsets with sum = (target + total) / 2.",
    tags: ["Array", "Dynamic Programming"],
    testCases: [
      { input: { nums: [1, 1, 1, 1, 1], target: 3 }, expectedOutput: 5 },
      { input: { nums: [1], target: 1 }, expectedOutput: 1 },
      { input: { nums: [1, 2, 3], target: 0 }, expectedOutput: 2 },
      { input: { nums: [1, 1], target: 0 }, expectedOutput: 2 },
      { input: { nums: [1, 2, 3, 4, 5], target: 3 }, expectedOutput: 3 }
    ]
  },
  {
    title: "Decode Ways II",
    description: "A message containing letters from A-Z can be encoded into numbers. Given a string s containing digits and the character '*', return the number of ways to decode it. '*' can represent any digit from 1 to 9.",
    difficulty: "hard",
    hint: "Extend decode ways. Handle '*' cases: '*' alone = 9 ways, '*' with digit = various combinations. Use DP with careful case handling.",
    tags: ["String", "Dynamic Programming"],
    testCases: [
      { input: { s: "*" }, expectedOutput: 9 },
      { input: { s: "1*" }, expectedOutput: 18 },
      { input: { s: "2*" }, expectedOutput: 15 },
      { input: { s: "**" }, expectedOutput: 96 },
      { input: { s: "*1" }, expectedOutput: 11 }
    ]
  },
  {
    title: "Burst Balloons",
    description: "You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons. If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins.",
    difficulty: "hard",
    hint: "Use interval DP. dp[i][j] = max coins from bursting balloons in range [i, j]. For each k in [i, j], assume k is last burst: dp[i][j] = max(dp[i][k-1] + dp[k+1][j] + nums[i-1]*nums[k]*nums[j+1]).",
    tags: ["Array", "Dynamic Programming"],
    testCases: [
      { input: { nums: [3, 1, 5, 8] }, expectedOutput: 167 },
      { input: { nums: [1, 5] }, expectedOutput: 10 },
      { input: { nums: [1] }, expectedOutput: 1 },
      { input: { nums: [7, 9, 8, 0, 2] }, expectedOutput: 79 },
      { input: { nums: [2, 3] }, expectedOutput: 9 }
    ]
  },
  {
    title: "Perfect Squares",
    description: "Given an integer n, return the least number of perfect square numbers that sum to n.",
    difficulty: "medium",
    hint: "Use DP: dp[i] = min squares needed for i. For each i, try all perfect squares <= i: dp[i] = min(dp[i], dp[i - j*j] + 1).",
    tags: ["Math", "Dynamic Programming"],
    testCases: [
      { input: { n: 12 }, expectedOutput: 3 },
      { input: { n: 13 }, expectedOutput: 2 },
      { input: { n: 1 }, expectedOutput: 1 },
      { input: { n: 4 }, expectedOutput: 1 },
      { input: { n: 43 }, expectedOutput: 3 }
    ]
  },
  {
    title: "Word Break",
    description: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
    difficulty: "medium",
    hint: "Use DP: dp[i] = true if s[0..i] can be segmented. For each position, check if any word from dict matches ending at that position and dp[start] is true.",
    tags: ["String", "Dynamic Programming"],
    testCases: [
      { input: { s: "leetcode", wordDict: ["leet", "code"] }, expectedOutput: true },
      { input: { s: "applepenapple", wordDict: ["apple", "pen"] }, expectedOutput: true },
      { input: { s: "catsandog", wordDict: ["cats", "dog", "sand", "and", "cat"] }, expectedOutput: false },
      { input: { s: "a", wordDict: ["a"] }, expectedOutput: true },
      { input: { s: "ab", wordDict: ["a", "b"] }, expectedOutput: true }
    ]
  },
  {
    title: "Combination Sum IV",
    description: "Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.",
    difficulty: "medium",
    hint: "Use DP: dp[i] = number of ways to form sum i. For each sum i, try all numbers: if i >= num, dp[i] += dp[i - num].",
    tags: ["Array", "Dynamic Programming"],
    testCases: [
      { input: { nums: [1, 2, 3], target: 4 }, expectedOutput: 7 },
      { input: { nums: [9], target: 3 }, expectedOutput: 0 },
      { input: { nums: [1, 2], target: 3 }, expectedOutput: 3 },
      { input: { nums: [1], target: 1 }, expectedOutput: 1 },
      { input: { nums: [1, 2, 3], target: 5 }, expectedOutput: 13 }
    ]
  },
  {
    title: "Maximal Square",
    description: "Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.",
    difficulty: "medium",
    hint: "Use DP: dp[i][j] = side length of largest square ending at (i,j). If matrix[i][j] == 1, dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]).",
    tags: ["Array", "Dynamic Programming"],
    testCases: [
      { input: { matrix: [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]] }, expectedOutput: 4 },
      { input: { matrix: [["0", "1"], ["1", "0"]] }, expectedOutput: 1 },
      { input: { matrix: [["0"]] }, expectedOutput: 0 },
      { input: { matrix: [["1", "1"], ["1", "1"]] }, expectedOutput: 4 },
      { input: { matrix: [["1", "0", "1", "0"], ["1", "0", "1", "1"], ["1", "0", "1", "1"]] }, expectedOutput: 4 }
    ]
  },
  {
    title: "Longest Palindromic Subsequence",
    description: "Given a string s, find the longest palindromic subsequence's length in s.",
    difficulty: "medium",
    hint: "Use DP: dp[i][j] = length of LPS in s[i..j]. If s[i] == s[j], dp[i][j] = 2 + dp[i+1][j-1]. Else, dp[i][j] = max(dp[i+1][j], dp[i][j-1]).",
    tags: ["String", "Dynamic Programming"],
    testCases: [
      { input: { s: "bbbab" }, expectedOutput: 4 },
      { input: { s: "cbbd" }, expectedOutput: 2 },
      { input: { s: "a" }, expectedOutput: 1 },
      { input: { s: "abc" }, expectedOutput: 1 },
      { input: { s: "racecar" }, expectedOutput: 7 }
    ]
  },
  {
    title: "Edit Distance",
    description: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You have the following three operations permitted on a word: Insert a character, Delete a character, Replace a character.",
    difficulty: "hard",
    hint: "Use DP: dp[i][j] = min operations to convert word1[0..i] to word2[0..j]. If chars match, dp[i][j] = dp[i-1][j-1]. Else, dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]).",
    tags: ["String", "Dynamic Programming"],
    testCases: [
      { input: { word1: "horse", word2: "ros" }, expectedOutput: 3 },
      { input: { word1: "intention", word2: "execution" }, expectedOutput: 5 },
      { input: { word1: "", word2: "" }, expectedOutput: 0 },
      { input: { word1: "a", word2: "b" }, expectedOutput: 1 },
      { input: { word1: "zoologicoarchaeologist", word2: "zoogeologist" }, expectedOutput: 10 }
    ]
  },

  // Backtracking Problems
  {
    title: "Combination Sum",
    description: "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the candidate numbers sum to target.",
    difficulty: "medium",
    hint: "Use backtracking. For each candidate, try including it (can reuse same candidate), recursively solve with reduced target. Backtrack by removing candidate.",
    tags: ["Array", "Backtracking"],
    testCases: [
      { input: { candidates: [2, 3, 6, 7], target: 7 }, expectedOutput: [[2, 2, 3], [7]] },
      { input: { candidates: [2, 3, 5], target: 8 }, expectedOutput: [[2, 2, 2, 2], [2, 3, 3], [3, 5]] },
      { input: { candidates: [2], target: 1 }, expectedOutput: [] },
      { input: { candidates: [1], target: 1 }, expectedOutput: [[1]] },
      { input: { candidates: [1], target: 2 }, expectedOutput: [[1, 1]] }
    ]
  },
  {
    title: "Combination Sum II",
    description: "Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target. Each number in candidates may only be used once in the combination.",
    difficulty: "medium",
    hint: "Sort candidates. Use backtracking, skip duplicates at same level. For each candidate, try including it once, recursively solve, then skip all duplicates.",
    tags: ["Array", "Backtracking"],
    testCases: [
      { input: { candidates: [10, 1, 2, 7, 6, 1, 5], target: 8 }, expectedOutput: [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]] },
      { input: { candidates: [2, 5, 2, 1, 2], target: 5 }, expectedOutput: [[1, 2, 2], [5]] },
      { input: { candidates: [2], target: 1 }, expectedOutput: [] },
      { input: { candidates: [1, 1], target: 2 }, expectedOutput: [[1, 1]] },
      { input: { candidates: [1, 2, 3], target: 4 }, expectedOutput: [[1, 3]] }
    ]
  },
  {
    title: "Subsets",
    description: "Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets.",
    difficulty: "medium",
    hint: "Use backtracking. For each element, two choices: include or exclude. Build subset recursively, add to result at each step.",
    tags: ["Array", "Backtracking"],
    testCases: [
      { input: { nums: [1, 2, 3] }, expectedOutput: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]] },
      { input: { nums: [0] }, expectedOutput: [[], [0]] },
      { input: { nums: [1, 2] }, expectedOutput: [[], [1], [2], [1, 2]] },
      { input: { nums: [1, 2, 3, 4] }, expectedOutput: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3], [4], [1, 4], [2, 4], [1, 2, 4], [3, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4]] },
      { input: { nums: [] }, expectedOutput: [[]] }
    ]
  },
  {
    title: "Subsets II",
    description: "Given an integer array nums that may contain duplicates, return all possible subsets (the power set). The solution set must not contain duplicate subsets.",
    difficulty: "medium",
    hint: "Sort array. Use backtracking, skip duplicates at same level. For each element, include it, recursively solve, then skip all duplicates before including next.",
    tags: ["Array", "Backtracking"],
    testCases: [
      { input: { nums: [1, 2, 2] }, expectedOutput: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]] },
      { input: { nums: [0] }, expectedOutput: [[], [0]] },
      { input: { nums: [1, 1] }, expectedOutput: [[], [1], [1, 1]] },
      { input: { nums: [1, 2, 3] }, expectedOutput: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]] },
      { input: { nums: [4, 4, 4, 1, 4] }, expectedOutput: [[], [1], [1, 4], [1, 4, 4], [1, 4, 4, 4], [1, 4, 4, 4, 4], [4], [4, 4], [4, 4, 4], [4, 4, 4, 4]] }
    ]
  },
  {
    title: "Permutations",
    description: "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
    difficulty: "medium",
    hint: "Use backtracking. Swap current element with each remaining element, recursively permute remaining, swap back.",
    tags: ["Array", "Backtracking"],
    testCases: [
      { input: { nums: [1, 2, 3] }, expectedOutput: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]] },
      { input: { nums: [0, 1] }, expectedOutput: [[0, 1], [1, 0]] },
      { input: { nums: [1] }, expectedOutput: [[1]] },
      { input: { nums: [1, 2] }, expectedOutput: [[1, 2], [2, 1]] },
      { input: { nums: [1, 2, 3, 4] }, expectedOutput: [[1, 2, 3, 4], [1, 2, 4, 3], [1, 3, 2, 4], [1, 3, 4, 2], [1, 4, 2, 3], [1, 4, 3, 2], [2, 1, 3, 4], [2, 1, 4, 3], [2, 3, 1, 4], [2, 3, 4, 1], [2, 4, 1, 3], [2, 4, 3, 1], [3, 1, 2, 4], [3, 1, 4, 2], [3, 2, 1, 4], [3, 2, 4, 1], [3, 4, 1, 2], [3, 4, 2, 1], [4, 1, 2, 3], [4, 1, 3, 2], [4, 2, 1, 3], [4, 2, 3, 1], [4, 3, 1, 2], [4, 3, 2, 1]] }
    ]
  },
  {
    title: "Permutations II",
    description: "Given a collection of numbers, nums, that might have duplicates, return all the unique permutations in any order.",
    difficulty: "medium",
    hint: "Sort array. Use backtracking with visited array. Skip duplicates: if nums[i] == nums[i-1] and nums[i-1] not visited, skip (avoid duplicate at same level).",
    tags: ["Array", "Backtracking"],
    testCases: [
      { input: { nums: [1, 1, 2] }, expectedOutput: [[1, 1, 2], [1, 2, 1], [2, 1, 1]] },
      { input: { nums: [1, 2, 3] }, expectedOutput: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]] },
      { input: { nums: [1, 1] }, expectedOutput: [[1, 1]] },
      { input: { nums: [1] }, expectedOutput: [[1]] },
      { input: { nums: [2, 2, 1, 1] }, expectedOutput: [[1, 1, 2, 2], [1, 2, 1, 2], [1, 2, 2, 1], [2, 1, 1, 2], [2, 1, 2, 1], [2, 2, 1, 1]] }
    ]
  },
  {
    title: "N-Queens",
    description: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle.",
    difficulty: "hard",
    hint: "Use backtracking. For each row, try placing queen in each column. Check if position is valid (no conflict with previous queens). Use sets to track used columns and diagonals.",
    tags: ["Array", "Backtracking"],
    testCases: [
      { input: { n: 4 }, expectedOutput: [[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]] },
      { input: { n: 1 }, expectedOutput: [["Q"]] },
      { input: { n: 2 }, expectedOutput: [] },
      { input: { n: 3 }, expectedOutput: [] },
      { input: { n: 5 }, expectedOutput: [[".Q...", "...Q.", "Q....", "..Q..", "....Q"], ["..Q..", "Q....", "...Q.", ".Q...", "....Q"], ["....Q", ".Q...", "...Q.", "Q....", "..Q.."], ["....Q", "..Q..", "Q....", "...Q.", ".Q..."], [".Q...", "....Q", "..Q..", "Q....", "...Q."], ["..Q..", "....Q", ".Q...", "...Q.", "Q...."], ["Q....", ".Q...", "...Q.", "....Q", "..Q.."], ["Q....", "..Q..", "....Q", "...Q.", ".Q..."], ["...Q.", "Q....", "..Q..", "....Q", ".Q..."], ["...Q.", ".Q...", "....Q", "..Q..", "Q...."]] }
    ]
  },
  {
    title: "Sudoku Solver",
    description: "Write a program to solve a Sudoku puzzle by filling the empty cells. A sudoku solution must satisfy all of the following rules: Each of the digits 1-9 must occur exactly once in each row, column, and 3x3 sub-box.",
    difficulty: "hard",
    hint: "Use backtracking. For each empty cell, try digits 1-9. Check if digit is valid (not in row, column, or box). If valid, place digit and recursively solve. If no solution, backtrack.",
    tags: ["Array", "Backtracking"],
    testCases: [
      { input: { board: [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]] }, expectedOutput: true },
      { input: { board: [["5", "3", "4", "6", "7", "8", "9", "1", "2"], ["6", "7", "2", "1", "9", "5", "3", "4", "8"], ["1", "9", "8", "3", "4", "2", "5", "6", "7"], ["8", "5", "9", "7", "6", "1", "4", "2", "3"], ["4", "2", "6", "8", "5", "3", "7", "9", "1"], ["7", "1", "3", "9", "2", "4", "8", "5", "6"], ["9", "6", "1", "5", "3", "7", "2", "8", "4"], ["2", "8", "7", "4", "1", "9", "6", "3", "5"], ["3", "4", "5", "2", "8", "6", "1", "7", "9"]] }, expectedOutput: true }
    ]
  },

  // Heap/Priority Queue Problems
  {
    title: "Kth Largest Element in an Array",
    description: "Given an integer array nums and an integer k, return the kth largest element in the array.",
    difficulty: "medium",
    hint: "Use min heap of size k. Add elements, if heap size > k, remove smallest. Or use quickselect algorithm.",
    tags: ["Array", "Heap"],
    testCases: [
      { input: { nums: [3, 2, 1, 5, 6, 4], k: 2 }, expectedOutput: 5 },
      { input: { nums: [3, 2, 3, 1, 2, 4, 5, 5, 6], k: 4 }, expectedOutput: 4 },
      { input: { nums: [1], k: 1 }, expectedOutput: 1 },
      { input: { nums: [2, 1], k: 2 }, expectedOutput: 1 },
      { input: { nums: [7, 10, 4, 3, 20, 15], k: 3 }, expectedOutput: 10 }
    ]
  },
  {
    title: "Merge K Sorted Lists",
    description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    difficulty: "hard",
    hint: "Use min heap. Add head of each list to heap. Pop smallest, add to result, push next node from same list. Repeat until heap empty.",
    tags: ["Linked List", "Heap"],
    testCases: [
      { input: { lists: [[1, 4, 5], [1, 3, 4], [2, 6]] }, expectedOutput: [1, 1, 2, 3, 4, 4, 5, 6] },
      { input: { lists: [] }, expectedOutput: [] },
      { input: { lists: [[]] }, expectedOutput: [] },
      { input: { lists: [[1], [2], [3]] }, expectedOutput: [1, 2, 3] },
      { input: { lists: [[1, 2], [3, 4], [5, 6]] }, expectedOutput: [1, 2, 3, 4, 5, 6] }
    ]
  },
  {
    title: "Find Median from Data Stream",
    description: "The median is the middle value in an ordered integer list. Design a data structure that supports the following two operations: void addNum(int num) and double findMedian().",
    difficulty: "hard",
    hint: "Use two heaps: max heap for smaller half, min heap for larger half. Keep heaps balanced (size difference <= 1). Median is top of larger heap or average of both tops.",
    tags: ["Heap", "Design"],
    testCases: [
      { input: { operations: ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"], values: [[], [1], [2], [], [3], []] }, expectedOutput: [null, null, null, 1.5, null, 2.0] },
      { input: { operations: ["MedianFinder", "addNum", "findMedian"], values: [[], [1], []] }, expectedOutput: [null, null, 1.0] }
    ]
  },
  {
    title: "Top K Frequent Words",
    description: "Given an array of strings words and an integer k, return the k most frequent strings. Return the answer sorted by the frequency from highest to lowest.",
    difficulty: "medium",
    hint: "Count frequencies. Use min heap of size k with custom comparator (by frequency, then lexicographically). Or sort by frequency and name.",
    tags: ["String", "Heap"],
    testCases: [
      { input: { words: ["i", "love", "leetcode", "i", "love", "coding"], k: 2 }, expectedOutput: ["i", "love"] },
      { input: { words: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k: 4 }, expectedOutput: ["the", "is", "sunny", "day"] },
      { input: { words: ["a"], k: 1 }, expectedOutput: ["a"] },
      { input: { words: ["a", "b", "a"], k: 2 }, expectedOutput: ["a", "b"] },
      { input: { words: ["i", "love", "leetcode", "i", "love", "coding"], k: 3 }, expectedOutput: ["i", "love", "coding"] }
    ]
  },
  {
    title: "K Closest Points to Origin",
    description: "Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).",
    difficulty: "medium",
    hint: "Calculate distance squared (avoid sqrt). Use max heap of size k. Add points, if heap size > k, remove farthest. Or use quickselect.",
    tags: ["Array", "Heap"],
    testCases: [
      { input: { points: [[1, 3], [-2, 2]], k: 1 }, expectedOutput: [[-2, 2]] },
      { input: { points: [[3, 3], [5, -1], [-2, 4]], k: 2 }, expectedOutput: [[3, 3], [-2, 4]] },
      { input: { points: [[1, 1]], k: 1 }, expectedOutput: [[1, 1]] },
      { input: { points: [[0, 1], [1, 0]], k: 2 }, expectedOutput: [[0, 1], [1, 0]] },
      { input: { points: [[1, 3], [-2, 2], [2, -2]], k: 2 }, expectedOutput: [[-2, 2], [1, 3]] }
    ]
  },

  // Trie Problems
  {
    title: "Implement Trie (Prefix Tree)",
    description: "A trie (pronounced as 'try') or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.",
    difficulty: "medium",
    hint: "Each node has children (array/map) and isEnd flag. Insert: traverse/create nodes, mark last as end. Search: traverse, check isEnd. StartsWith: traverse, return true if path exists.",
    tags: ["String", "Trie"],
    testCases: [
      { input: { operations: ["Trie", "insert", "search", "search", "startsWith", "insert", "search"], values: [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]] }, expectedOutput: [null, null, true, false, true, null, true] },
      { input: { operations: ["Trie", "insert", "search"], values: [[], ["a"], ["a"]] }, expectedOutput: [null, null, true] }
    ]
  },
  {
    title: "Word Search II",
    description: "Given an m x n board of characters and a list of strings words, return all words on the board.",
    difficulty: "hard",
    hint: "Build Trie from words. Use DFS + backtracking on board. For each cell, traverse Trie. If word found, add to result and mark as found in Trie to avoid duplicates.",
    tags: ["Array", "Trie"],
    testCases: [
      { input: { board: [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]], words: ["oath", "pea", "eat", "rain"] }, expectedOutput: ["eat", "oath"] },
      { input: { board: [["a", "b"], ["c", "d"]], words: ["abcb"] }, expectedOutput: [] },
      { input: { board: [["a"]], words: ["a"] }, expectedOutput: ["a"] },
      { input: { board: [["o", "a"], ["e", "t"]], words: ["oat"] }, expectedOutput: ["oat"] },
      { input: { board: [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]], words: ["abc", "def", "ghi"] }, expectedOutput: ["abc", "def", "ghi"] }
    ]
  },

  // More Array & Math Problems
  {
    title: "Next Permutation",
    description: "A permutation of an array of integers is an arrangement of its members into a sequence or linear order. Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.",
    difficulty: "medium",
    hint: "Find rightmost index i where nums[i] < nums[i+1]. Find rightmost j where nums[j] > nums[i]. Swap nums[i] and nums[j]. Reverse nums[i+1..end].",
    tags: ["Array", "Math"],
    testCases: [
      { input: { nums: [1, 2, 3] }, expectedOutput: [1, 3, 2] },
      { input: { nums: [3, 2, 1] }, expectedOutput: [1, 2, 3] },
      { input: { nums: [1, 1, 5] }, expectedOutput: [1, 5, 1] },
      { input: { nums: [1] }, expectedOutput: [1] },
      { input: { nums: [1, 3, 2] }, expectedOutput: [2, 1, 3] }
    ]
  },
  {
    title: "Rotate Array",
    description: "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.",
    difficulty: "medium",
    hint: "Reverse entire array, then reverse first k elements, then reverse remaining elements. Or use extra array to store rotated elements.",
    tags: ["Array", "Math"],
    testCases: [
      { input: { nums: [1, 2, 3, 4, 5, 6, 7], k: 3 }, expectedOutput: [5, 6, 7, 1, 2, 3, 4] },
      { input: { nums: [-1, -100, 3, 99], k: 2 }, expectedOutput: [3, 99, -1, -100] },
      { input: { nums: [1, 2], k: 1 }, expectedOutput: [2, 1] },
      { input: { nums: [1], k: 1 }, expectedOutput: [1] },
      { input: { nums: [1, 2, 3], k: 4 }, expectedOutput: [3, 1, 2] }
    ]
  },
  {
    title: "Gas Station",
    description: "There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i]. You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station.",
    difficulty: "medium",
    hint: "If total gas < total cost, return -1. Start from station 0, track current gas. If current gas < 0, reset start to next station and current gas to 0.",
    tags: ["Array", "Greedy"],
    testCases: [
      { input: { gas: [1, 2, 3, 4, 5], cost: [3, 4, 5, 1, 2] }, expectedOutput: 3 },
      { input: { gas: [2, 3, 4], cost: [3, 4, 3] }, expectedOutput: -1 },
      { input: { gas: [1], cost: [1] }, expectedOutput: 0 },
      { input: { gas: [5, 1, 2, 3, 4], cost: [4, 4, 1, 5, 1] }, expectedOutput: 4 },
      { input: { gas: [3, 1, 1], cost: [1, 2, 2] }, expectedOutput: 0 }
    ]
  },
  {
    title: "Candy",
    description: "There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings. You are giving candies to these children subjected to the following requirements: Each child must have at least one candy. Children with a higher rating get more candies than their neighbors.",
    difficulty: "hard",
    hint: "Two passes: left to right, if rating[i] > rating[i-1], candies[i] = candies[i-1] + 1. Right to left, if rating[i] > rating[i+1], candies[i] = max(candies[i], candies[i+1] + 1).",
    tags: ["Array", "Greedy"],
    testCases: [
      { input: { ratings: [1, 0, 2] }, expectedOutput: 5 },
      { input: { ratings: [1, 2, 2] }, expectedOutput: 4 },
      { input: { ratings: [1] }, expectedOutput: 1 },
      { input: { ratings: [1, 2, 3] }, expectedOutput: 6 },
      { input: { ratings: [3, 2, 1] }, expectedOutput: 6 }
    ]
  },
  {
    title: "Trapping Rain Water II",
    description: "Given an m x n integer matrix heightMap representing the height of each unit cell in a 2D elevation map, return the volume of water it can trap after raining.",
    difficulty: "hard",
    hint: "Use min heap starting from border cells. Process cells in order of height. For each cell, water trapped = max(0, min_height_neighbor - cell_height). Add neighbors to heap.",
    tags: ["Array", "Heap"],
    testCases: [
      { input: { heightMap: [[1, 4, 3, 1, 3, 2], [3, 2, 1, 3, 2, 4], [2, 3, 3, 2, 3, 1]] }, expectedOutput: 4 },
      { input: { heightMap: [[3, 3, 3, 3, 3], [3, 2, 2, 2, 3], [3, 2, 1, 2, 3], [3, 2, 2, 2, 3], [3, 3, 3, 3, 3]] }, expectedOutput: 10 },
      { input: { heightMap: [[1, 1], [1, 1]] }, expectedOutput: 0 },
      { input: { heightMap: [[12, 13, 1, 12], [13, 4, 13, 12], [13, 8, 10, 12], [12, 13, 12, 12], [13, 13, 13, 13]] }, expectedOutput: 14 },
      { input: { heightMap: [[2, 2, 2], [2, 1, 2], [2, 2, 2]] }, expectedOutput: 0 }
    ]
  },
  {
    title: "Find the Duplicate Number",
    description: "Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive, there is exactly one repeated number in nums, return this repeated number.",
    difficulty: "medium",
    hint: "Use Floyd's cycle detection. Treat array as linked list where nums[i] points to nums[nums[i]]. Find cycle start.",
    tags: ["Array", "Two Pointers"],
    testCases: [
      { input: { nums: [1, 3, 4, 2, 2] }, expectedOutput: 2 },
      { input: { nums: [3, 1, 3, 4, 2] }, expectedOutput: 3 },
      { input: { nums: [1, 1] }, expectedOutput: 1 },
      { input: { nums: [1, 1, 2] }, expectedOutput: 1 },
      { input: { nums: [2, 2, 2, 2, 2] }, expectedOutput: 2 }
    ]
  },
  {
    title: "First Missing Positive",
    description: "Given an unsorted integer array nums, return the smallest missing positive integer. You must implement an algorithm that runs in O(n) time and uses O(1) extra space.",
    difficulty: "hard",
    hint: "Use array as hash map. For each number, place it at correct index (nums[i] should be at index nums[i]-1). Then find first index where nums[i] != i+1.",
    tags: ["Array", "Hash Table"],
    testCases: [
      { input: { nums: [1, 2, 0] }, expectedOutput: 3 },
      { input: { nums: [3, 4, -1, 1] }, expectedOutput: 2 },
      { input: { nums: [7, 8, 9, 11, 12] }, expectedOutput: 1 },
      { input: { nums: [1] }, expectedOutput: 2 },
      { input: { nums: [1, 1] }, expectedOutput: 2 }
    ]
  },
  {
    title: "Maximum Product Subarray",
    description: "Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.",
    difficulty: "medium",
    hint: "Track max and min product ending at each position (to handle negatives). maxProd = max(nums[i], maxProd * nums[i], minProd * nums[i]).",
    tags: ["Array", "Dynamic Programming"],
    testCases: [
      { input: { nums: [2, 3, -2, 4] }, expectedOutput: 6 },
      { input: { nums: [-2, 0, -1] }, expectedOutput: 0 },
      { input: { nums: [-2, 3, -4] }, expectedOutput: 24 },
      { input: { nums: [2] }, expectedOutput: 2 },
      { input: { nums: [-2, -3, -4] }, expectedOutput: 12 }
    ]
  },
  {
    title: "Best Time to Buy and Sell Stock with Cooldown",
    description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. Find the maximum profit you can achieve with cooldown: after you sell your stock, you cannot buy stock on the next day.",
    difficulty: "medium",
    hint: "Use DP with states: hold (have stock), sold (just sold, in cooldown), rest (no stock, can buy). hold = max(hold, rest - price), sold = hold + price, rest = max(rest, sold).",
    tags: ["Array", "Dynamic Programming"],
    testCases: [
      { input: { prices: [1, 2, 3, 0, 2] }, expectedOutput: 3 },
      { input: { prices: [1] }, expectedOutput: 0 },
      { input: { prices: [1, 2, 4] }, expectedOutput: 3 },
      { input: { prices: [2, 1] }, expectedOutput: 0 },
      { input: { prices: [1, 2, 3, 4, 5] }, expectedOutput: 4 }
    ]
  },
  {
    title: "Best Time to Buy and Sell Stock III",
    description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. Find the maximum profit you can achieve with at most two transactions.",
    difficulty: "hard",
    hint: "Use DP: track max profit with at most k transactions. buy[i][k] = max profit with k transactions ending with buy. sell[i][k] = max profit with k transactions ending with sell.",
    tags: ["Array", "Dynamic Programming"],
    testCases: [
      { input: { prices: [3, 3, 5, 0, 0, 3, 1, 4] }, expectedOutput: 6 },
      { input: { prices: [1, 2, 3, 4, 5] }, expectedOutput: 4 },
      { input: { prices: [7, 6, 4, 3, 1] }, expectedOutput: 0 },
      { input: { prices: [1] }, expectedOutput: 0 },
      { input: { prices: [2, 4, 1] }, expectedOutput: 2 }
    ]
  }
]

// Function to add all problems to Firebase
export const addProblemsToFirebase = async (createDSAProblem) => {
  try {
    console.log(`Adding ${dsaProblems.length} DSA problems to Firebase...`)
    for (let i = 0; i < dsaProblems.length; i++) {
      const problem = dsaProblems[i]
      await createDSAProblem(problem)
      console.log(`Added problem ${i + 1}/${dsaProblems.length}: ${problem.title}`)
    }
    console.log('All problems added successfully!')
  } catch (error) {
    console.error('Error adding problems:', error)
    throw error
  }
}

