let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

const multiple = someNumbers.some((mul) => {
    return mul % 3 === 0 || mul % 5 === 0 || mul % 60 === 0 || mul % 90 === 0
})
console.log(multiple)

