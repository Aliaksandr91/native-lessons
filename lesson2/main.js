const students = [
    {
        name: "Bob",   // "Hi, Bob!"
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const getNames = (array) => {
    const result = [];
    const getValuesForResult = (element) => element.name
    for (let i = 0; i < array.length; i++) {
        result[i] = getValuesForResult(array[i])
    }
    return result
}
console.log(getNames(students))

const getUpdatedStudents = (array) => {
    const result = [];
    const getValuesForResult = (element) => ({...element, isStudent: true})
    for (let i = 0; i < array.length; i++) {
        result[i] = getValuesForResult(array[i])
    }
    return result
}
console.log(getUpdatedStudents(students))

const getMappedArray = (array, func) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i])
    }
    return result
}

console.log(getMappedArray(students, (el) => el.name))
console.log(getMappedArray(students, (el) => ({...el, isStudent: true})))

console.log(students.map((el) => el.name))
console.log(students.map((el) => ({...el, isStudent: true})))


const getFilteredArray = (array, func) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            result.push(array[i])
        }
    }
    return result
}

console.log(getFilteredArray(students, st => st.age >= 21))

console.log(students.filter((st => st.age >= 21)))


const myConcat = (array, param) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result.push(array[i])
    }
    if (Array.isArray(param)) {
        for (let i = 0; i < param.length; i++) {
            result.push(param[i])
        }
    } else {
        result.push(param)
    }

    return result
}
console.log(myConcat(students, {}))
console.log(myConcat(students, students))


const myRevers = (array) => {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = temp
    }
    return array
}

//console.log(myRevers(students))

const mySlice = (array, startIndex, endIndex) => {
    const result = [];
    for (let i = startIndex; i < endIndex; i++) {
        result.push(array[i])
    }
    return result
}

console.log(mySlice(students, 1, 3))

const myIncludes = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return true
        }
    }
    return false
}

const myIndexOf = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i
        }
    }
    return -1
}

const myEvery = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === false) {
            return false
        }
    }
    return true
}

console.log(myEvery(students, (st) => st.age >= 18))

const myFlat = (array, level = 1) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            if (level) {
                for (let j = 0; j < array[i].length; j++) {
                    result.push(array[i][j])
                }
            }
            level -= 1
        } else {
            result.push(array[i])
        }

    }
    return result
}

console.log(myFlat([1,2,3,[1,[4,5],2]], 2))