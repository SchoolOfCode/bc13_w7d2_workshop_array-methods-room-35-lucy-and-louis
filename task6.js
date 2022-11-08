const broomCupboard = [2, 4, 1, 3, 7, 5, 8, 6, 10, 9, 0];

const sorting = broomCupboard.sort((a, b) => a - b)
console.log(sorting)

const potions = [
  { name: "polyjuice potion", shelf: 2 },
  { name: "draught of living death", shelf: 4 },
  { name: "pepperup potion", shelf: 1 },
  { name: "veritaserum", shelf: 3 },
];

const sortingShelf = potions.sort((b, a) => a.shelf - b.shelf)
console.log(sortingShelf)

const students = [
  "Cedric Diggory",
  "Padma Patil",
  "Lucius Malfoy",
  "Seamus Finnigan",
  "Lavender Brown",
  "Luna Lovegood",
  "Gregory Goyle",
];

const splitting = students[i].split(" ")
//const lastName = students.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
console.log (splitting)

//console.log(lastName)