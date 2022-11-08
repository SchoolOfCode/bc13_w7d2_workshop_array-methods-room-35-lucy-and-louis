let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];



const multiple = sevenTimesTable.every((num) => {
    return num % 7 === 0 
})

const ssMultiple = seventySevenTimesTable.every((nums) => {
    return nums % 77 === 0
})

const findBad = seventySevenTimesTable.find((nums) => {
    return nums % 77 != 0
})

const findIndex = seventySevenTimesTable.findIndex((nums) => {return nums % 77 != 0})
console.log(findIndex)