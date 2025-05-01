let arr = [12, 12, 12, 12, 12, 11];

arr = arr.sort((a, b) => b - a);
console.log(arr);
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
        console.log('Answer is ' + arr[i]);
        break;
    }
}

// Without sort - 

function secondLargest(arr) {
    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if(num > first) {
            second = first;
            first = num;
        }
        else if (num > second && num != first) {
            second = num;
        }
    }
    return second;
}

console.log('Without Sort ' + secondLargest([13,13,12, 12, 12, 12, 12, 11]));

// using set 
let unique = [...new Set(arr)];
console.log(typeof(unique) + unique)