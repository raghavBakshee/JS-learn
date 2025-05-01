let arr = [1,2,2,3,4,4];
const value = 2;

const removeElement = (arr, value) => {
   // with extra space
    // return arr.filter((num) => num !== value);

    // Without extra space
    let i = 0;
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] !== value) {
            arr[i] = arr[j];
            i++;
        }
    }
    return arr.slice(0, i);
}

console.log(removeElement(arr, value));