/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (26.50%)
 * Total Accepted:    479.3K
 * Total Submissions: 1.8M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 *
 * Example 1:
 *
 *
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: "cbbd"
 * Output: "bb"
 *
 *
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let startMax = 0;
  let endMax = 0;
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < s.length; i++) {
      let start = i;
      let end = i + j;

      while (start >= 0 && end < s.length) {
        if (s[start] != s[end]) {
          break;
        } else {
          start--;
          end++;
        }
      }
      start++;
      end--;

      if (endMax - startMax < end - start) {
        startMax = start;
        endMax = end;
      }
    }
  }
  return s.substring(startMax, endMax + 1);
};

if (process.env.local) {
  let input = "babad";
  console.log(JSON.stringify(longestPalindrome(input)));
}
