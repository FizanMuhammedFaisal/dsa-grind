/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {

    let slow = head
    let fast = head

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    let prev=null
    let curr=slow

    while(curr){

        const next=curr.next

        curr.next=prev

        prev=curr

        curr=next
    }

    let first=head
    let second=prev


    console.log(first,second)

    while(second.next){

        const fnext=first.next
        const snext=second.next

        first.next=second

        second.next=fnext
        
        first=fnext
        second=snext
    }

};