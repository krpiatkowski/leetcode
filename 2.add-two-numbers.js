/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.54%)
 * Total Accepted:    762.6K
 * Total Submissions: 2.5M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Example:
 *
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let result = {};
  let current = result;
  while (true) {
    current.val = (l1 && l1.val ? l1.val : 0) + (l2 && l2.val ? l2.val : 0) + carry;
    carry = current.val > 9 ? 1 : 0;
    if (carry === 1) {
      current.val -= 10;
    }

    l1 = l1 && l1.next ? l1.next : null;
    l2 = l2 && l2.next ? l2.next : null;

    if (l1 || l2 || carry === 1) {
      current.next = {};
      current = current.next;
    } else {
      break;
    }
  }

  return result;
};

if (process.env.local) {
  let input = '{"val":2,"next":{"val":4,"next":{"val":3,"next":null}}}\n{"val":5,"next":{"val":6,"next":{"val":4,"next":null}}}'.split("\n");
  console.log(JSON.stringify(addTwoNumbers(JSON.parse(input[0]), JSON.parse(input[1]))));
}
