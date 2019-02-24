/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (41.85%)
 * Total Accepted:    508.5K
 * Total Submissions: 1.2M
 * Testcase Example:  '121'
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 *
 * Example 1:
 *
 *
 * Input: 121
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 *
 *
 * Example 3:
 *
 *
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a
 * palindrome.
 *
 *
 * Follow up:
 *
 * Coud you solve it without converting the integer to a string?
 *
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let xStr = x.toString();
  let firstHalf = xStr
    .toString()
    .substring(0, Math.ceil(xStr.length / 2))
    .split("");

  let secondHalf = xStr
    .toString()
    .substring(Math.floor(xStr.length / 2), xStr.length)
    .split("")
    .reverse();

  for (let i = 0; i < firstHalf.length; i++) {
    if (firstHalf[i] != secondHalf[i]) {
      return false;
    }
  }
  return true;
};

if (process.env.local) {
  let input = 12121;
  console.log(JSON.stringify(isPalindrome(input)));
}
