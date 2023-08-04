
//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
const repeatString = (str, count, sep) => {
    let temp = `${str} ${sep}`
    return temp.repeat(count-1) + str
}
console.log(repeatString("yo", 3, " "))//"yo yo yo"
console.log(repeatString("yo", 3, ",")) //"yo,yo,yo"
// for или str.repeat()

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
const checkStart = (str, startStr) => {
    return str.toLowerCase().startsWith(startStr.toLowerCase())
}
console.log(checkStart("Incubator", "inc")) // true
console.log(checkStart("Incubator", "yo"))//false
// str.startWith() slice indexOF

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
const truncateString = (str, count) => {
    return str.slice(0, count) + '...'
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10)) // "Всем студе..."

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
const getMinLengthWord = (str) => {
    let temp = str.split(' ').sort((a, b) => a.length - b.length)
    return str.length > 0 ? temp[0] : null
}
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!")) // "Всем"
console.log(getMinLengthWord(""))//null
// split()

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
const setUpperCase = (str) => {
    let tempStr = str.toLowerCase()
    return tempStr.split(' ').map(el => el[0].toUpperCase()+el.slice(1, el.length)).join(' ')
}
console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") )// "Всем Студентам Инкубатора Желаю Удачи!"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке
const isIncludes = (str, subStr) => {
    subStr = subStr.toLowerCase();
    str = str.toLowerCase();
    subStr = removeDuplicates(subStr);
    str = removeDuplicates(str);

    for (let char of subStr) {
        if (!str.includes(char)) {
            return false;
        }
    }
    return true;
}
function removeDuplicates(str) {
    return str.split('').filter((item, index, self) => self.indexOf(item) === index).join('');
}

console.log(isIncludes("Incubator", "Cut"))//true
console.log(isIncludes("Incubator", "table"))//false
console.log(isIncludes("Incubator", "inbba"))//true
console.log(isIncludes("Incubator", "inba"))//true
console.log(isIncludes("Incubator", "Incubatorrr"))//true
