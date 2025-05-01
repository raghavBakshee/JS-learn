const isPalindrome = (str) => {
    // if (str.length < 1) return false;
    // if (str.length === 1) return true;
    
    // return str === str.split('').reverse().join('');

    let left = 0;
    let right = str.length - 1;
    while(left < right) {
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true
}

const str = "naman";
console.log(isPalindrome(str));




