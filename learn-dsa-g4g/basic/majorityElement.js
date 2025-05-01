const arr = [3, 2, 3, 1, 4, 3, 3,1,1,1,1,1]
// Output = 1
const majority = (arr) => {
    const map = new Map();
    let max = -1;
    let ans;
    for (let a of arr) {
           const count = (map.get(a) || 0) + 1;
           map.set(a, count);
           if(count > max) {
            max = count;
            ans = a;
           }
    }
    return ans;
}

console.log(majority(arr));