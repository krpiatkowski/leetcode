/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (27.29%)
 * Total Accepted:    803.6K
 * Total Submissions: 2.9M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 *
 *
 * Example 1:
 *
 *
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 *
 *
 * Example 3:
 *
 *
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 *
 *
 *
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    let usedChars = new Set();
    let localLongest = s[i];
    usedChars.add(localLongest);
    for (let j = i + 1; j < s.length; j++) {
      let char = s.charAt(j);
      if (usedChars.has(char)) {
        break;
      } else {
        usedChars.add(char);
      }
      localLongest = s.substring(i, j + 1);
    }
    if (localLongest.length > longest.length) {
      longest = localLongest;
    }
  }
  return longest.length;
};

if (process.env.local) {
  let input = " ";
  console.log(JSON.stringify(lengthOfLongestSubstring(input)));
}
