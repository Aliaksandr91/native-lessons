//sorting
//sort мутирует массив
const stundents = ['Bob', 'Alex', 'Liza', 'Ivan', 'maksim']
//console.log(stundents.sort())
console.log([...stundents].sort())
console.log(stundents.slice().sort())
console.log(stundents)

const numbers = [234, 645, 100, 1000, -34, -10, -24]
//console.log([...numbers].sort())
console.log(numbers)

const compareFunction = (a, b) => {
    if (a > b) {
        return 123
    } else {
        return -1
    }
}
const newCompareFunction = (a, b) => a - b
console.log(numbers.sort(compareFunction))
console.log(numbers.sort(newCompareFunction))

const studentsObj = [
    {
        name: 'Bob',
        age: 22
    },
    {
        name: 'Alex',
        age: 20
    },
    {
        name: 'Liza',
        age: 22
    },
    {
        name: 'Ivan',
        age: 25
    }
]

// console.log(studentsObj.sort((a, b) => {
//     return a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase());
// }));

console.log(studentsObj.sort((a, b) => {
    return a.age - b.age
}))


//Bubble sorting
let count = 0;
//const numbersArr = [1, 6, 78, 34, 7, 1367, 5, 45, 10, 99, 101, 33333]
const numbersArr = [1, 5, 6, 7, 10, 34, 45, 78, 99, 101, 1367, 33333]

// for (let j = 0; j < numbersArr.length - 1; j++) {
//     count++
//     for (let i = 0; i < numbersArr.length - 1 - j; i++) {
//         count++
//         if (numbersArr[i] > numbersArr[i + 1]) {
//             let temp = numbersArr[i]
//             numbersArr[i] = numbersArr[i + 1]
//             numbersArr[i + 1] = temp
//         }
//     }
// }
let isSorted
for (let j = 0; j < numbersArr.length - 1; j++) {
    count++
    isSorted = true
    for (let i = 0; i < numbersArr.length - 1 - j; i++) {
        count++
        if (numbersArr[i] > numbersArr[i + 1]) {
            isSorted = false
            let temp = numbersArr[i]
            numbersArr[i] = numbersArr[i + 1]
            numbersArr[i + 1] = temp
        }
    }
    if (isSorted) break
}

console.log(numbersArr)
console.log(count)