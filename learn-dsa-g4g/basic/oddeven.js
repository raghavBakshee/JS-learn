let arr  = [1,2,2,3,4,4];
arr = [...new Set(arr)]
function odd(arr) {
    return arr.filter((num) => num % 2 !== 0);
}

function even(arr) {
    return arr.filter((num) => num % 2 === 0);
}


console.log('Odd ' + odd(arr))
console.log('even ' + even(arr))


