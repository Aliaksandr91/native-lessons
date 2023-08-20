//lexical Environment | Замыкание | Рекурсия


//HOSTING (Всплытие)
let car = 'bmw'

function startEngine() {
    console.log(`Start ${car}`)
}

startEngine() //Start bmw
car = 'audi'
startEngine() //Start audi

console.log(car2)//undefined
var car2 = 'toyota'
console.log(car2) //toyota


const counterCreator = () => {
    let count = 0
    return () => console.log(++count)
}
const counter1 = counterCreator()
counter1()
counter1()
counter1()


const pow = (x, n) => {
    if (n === 1) {
        return x
    }
    return x * pow(x, n - 1)
}
console.log(pow(2,3))

let a = 0;
const func = () => {
    console.log(++a)
    func()
}
//func()