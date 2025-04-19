const arr  = [1,2,2,3,4,4];
const unique = new Set();
const duplicates = [];
for(const a of arr){
    if(unique.has(a)) {
        duplicates.push(a);
    }
    else {
        unique.add(a);
    }
}
console.log(duplicates)

const duplicatesarr = arr.filter((value, index) => 
  arr.indexOf(value) !== index && arr.lastIndexOf(value) === index
)

console.log(duplicatesarr)