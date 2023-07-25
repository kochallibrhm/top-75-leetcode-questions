/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }

 Runtime 79ms BEATS 94.15%of users with C#
 Memory 40.02mb BEATS 46.24%of users with C#
 */
public class Solution {
    public ListNode MergeTwoLists(ListNode list1, ListNode list2) {
        ListNode result = new ListNode();
        ListNode temp = result;
        
        while (list1 != null && list2 != null)
        {
            if (list1.val < list2.val)
            {
                temp.next = list1;
                list1 = list1.next; 
            }
            else
            {
                temp.next = list2;
                list2 = list2.next;
            }

            temp = temp.next;
        }
        temp.next = list2 ?? list1;
        return result.next;
    }
}

/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/
