const arr = [1,2,3,3,4,5,5,6,6,7];
//console.log([...new Set(arr)]); 

const removeDuplicateSorted = (arr) => {
    let i = 0;
    for(let j = 1; j < arr.length; j++) {
        if(arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return arr.slice(0, i + 1);
}

console.log(removeDuplicateSorted(arr));