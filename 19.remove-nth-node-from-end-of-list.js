/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (33.96%)
 * Total Accepted:    358.2K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, remove the n-th node from the end of list and return
 * its head.
 *
 * Example:
 *
 *
 * Given linked list: 1->2->3->4->5, and n = 2.
 *
 * After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 *
 *
 * Note:
 *
 * Given n will always be valid.
 *
 * Follow up:
 *
 * Could you do this in one pass?
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let current = head;
    let i = 0;
    let nth = null;
    while (current != null) {
        if (n <= i) {
            if (nth == null) {
                nth = head;
            } else {
                nth = nth.next;
            }
        }
        current = current.next;
        i++;
    }
    if (nth == null) {
        return head.next;
    }

    nth.next = nth.next != null ? nth.next.next : null;
    return head;
};

if (process.env.local) {
    //let head = { val: 1, next: { val: 2, next: null } };
    let head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
    let n = 2;
    console.log(JSON.stringify(removeNthFromEnd(head, n)));
}
