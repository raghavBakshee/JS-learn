const str1 = "tacobell";
const str2 = "bellocat";

const isValidAnagrams = (str1, str2) => {
    // return str1.split('').sort().join('') === str2.split('').sort().join('');
    if(str1.length !== str2.length) return false;
    let countMap = new Map();
    for(let ch of str1) {
        countMap.set(ch, (countMap.get(ch) || 0) + 1);
    }

    for(let ch of str2) {
        if(!countMap.has(ch) || countMap.get(ch) === 0)
            return false;
        countMap.set(ch, countMap.get(ch) - 1);
    }

    return true;
}

console.log(isValidAnagrams(str1, str2))