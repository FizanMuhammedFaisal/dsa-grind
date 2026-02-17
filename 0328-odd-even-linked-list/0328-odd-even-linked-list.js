/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (!head) return head

    let eEven = new ListNode(0)
    const EStart = eEven
    let eOdd = head
    let curr = head

    let i = 1
    while (curr.next) {
        console.log(i)
        if (i % 2 === 0) {
            eOdd.next = curr.next
            eOdd = eOdd.next
        } else {
            eEven.next = curr.next
            eEven = eEven.next
        }
        i++
        curr = curr.next
    }
    console.log(eOdd, eEven)
    eEven.next = null
    eOdd.next = EStart.next


    return head
};