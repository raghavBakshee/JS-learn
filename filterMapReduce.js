const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num)=> num > 4)

const newNums2 = myNums.filter((num)=> {
    return num > 4 // Have to add return keyword explicitly
})
// console.log(newNums)
// console.log(newNums2)

const newNums3 = myNums.map((num)=> num  + 1)
//console.log(newNums3)

const initialValue = 0
const sumWithInitial = myNums.reduce((x, y)=> x + y)
console.log(sumWithInitial)