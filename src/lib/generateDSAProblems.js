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

