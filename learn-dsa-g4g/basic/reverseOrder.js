const arr  = [7,12,2,2,3,4,4, 23];

// console.log([...arr].reverse())
// console.log(arr)

// Print largest element in an array - 
console.log(Math.max(...arr))
console.log("Sorted elements: " + arr.sort((a,b) => a - b))

// Using Bubble sort - 
let n = arr.length;
for(let i = 0; i < n; i++) {
    for(let j = 0; j < n - i - 1; j++) {
        if(arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
}
console.log(arr)

