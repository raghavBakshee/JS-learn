/*
You are given an array arr having unique elements. Your task is to return the type of array.
Note: The array can be categorized into ascending, descending, descending rotated and ascending rotated followed by:

Return 1 if the array is in ascending order
Return 2 if the array is in descending order
Return 3 if the array is in descending rotated order
Return 4 if the array is in ascending rotated order
Examples:

Input: arr[] = [2, 1, 5, 4, 3]
Output: 3
Explanation: Descending rotated, rotate 2 times left.
Input: arr[] = [3, 4, 5, 1, 2]
Output: 4
Explanation: Ascending rotated, rotate 2 times right. 
Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)

Constraints:
3 <= arr.size() <= 105
1 <= arr[i] <= 106

*/

function maxNtype(arr) {
        
    const n = arr.length;
    let min = arr[0];
    let max = arr[0];
    for(let i = 1; i < n; i++){
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i]);
    }
   if(arr[0] === min && arr[n - 1] === max) return 1; // ascending
   if(arr[0] === max && arr[n - 1] === min) return 2; // descending
   
//   let pivot = 0;
//   for(let i = 1; i < n; i++){
//       if(arr[i] < arr[i - 1]){
//           pivot = i;
//           break;
//       }
//   }
   
//   if(arr[0] > arr[pivot]) return 4; // ascending rotatedd
//   else return 3;  // descending rotate

for(let i = 1; i < n; i++){
    if(arr[i - 1] === min && arr[i] === max) return 3;
    else if(arr[i - 1] === max && arr[i] === min) return 4;
}

}