/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode partition(ListNode head, int x) {
        ListNode left = new ListNode();
        ListNode right = new ListNode();
        ListNode lTail = left;
        ListNode rTail = right;

        while ( head != null ){
            
                if(x > head.val){
                lTail.next = head;
                lTail = head;
                }
                else{
                rTail.next = head;
                rTail = head;
                }
            
            
            head = head.next;
        }

        lTail.next = right.next;
        rTail.next = null;

        
        return left.next;
    }

}

