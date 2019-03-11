/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (53.02%)
 * Total Accepted:    305.8K
 * Total Submissions: 573.2K
 * Testcase Example:  '3'
 *
 *
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 *
 *
 *
 * For example, given n = 3, a solution set is:
 *
 *
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 *
 */
/**
 * @param {number} n
 * @return {string[]}
 */

var map = {};
var generateParenthesis = function(n) {
    if (n == 1) {
        return ["()"];
    }

    let result = [];
    if (map[n - 1] === undefined) {
        map[n - 1] = generateParenthesis(n - 1);
    }

    for (let m of map[n - 1]) {
        result.push(`(${m})`);
    }

    for (let i = 1; i < n; i++) {
        if (map[n - i] === undefined) {
            map[n - i] = generateParenthesis(n - i);
        }

        if (map[i] === undefined) {
            map[i] = generateParenthesis(i);
        }

        for (const l of map[n - i]) {
            for (const r of map[i]) {
                result.push(`${l}${r}`);
            }
        }
    }
    return [...new Set(result)];
};

if (process.env.local) {
    let n = 5;
    let r = generateParenthesis(n);
    console.log(JSON.stringify(r));
}
