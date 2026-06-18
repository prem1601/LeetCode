/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const mergedList = new ListNode(-1);
    let current = mergedList;

    while(list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 !== null ? list1 : list2;
    
    return mergedList.next;



//    const mergedList = [];
//     let l1 = list1.length - 1;
//     let l2 = list2.length - 1;

//     while(l2>=0){
//         if(l1 >=0 && list1[l1] >= list2[l2]) {
//             mergedList.unshift(list1[l1])
//             l1--;
//         } else {
//             mergedList.unshift(list2[l2])
//             l2--;
//         }
//     }
    
//     return mergedList;
};