class Car {
    constructor(brand) {
        this.brand = brand
        this.state = {}
    }

    startEngine() {
        console.log(`Start ${this.brand}`)
    }

    stopEngine = () => {
        console.log(`Stop ${this.brand}`)
    }
    static concatCar() {
        console.log('concat')
    }
}

const car1 = new Car('bmw')
const car2 = new Car('bmw')
console.log('1', car1.brand === car2.brand)// true
console.log('2', car1.state === car2.state)// false
console.log('3', car1.stopEngine === car2.stopEngine)// false
console.log('4', car1.startEngine === car2.startEngine)// true
console.dir(car1)
console.dir(car2)

console.log(car1.__proto__ === Car.prototype) //true

let a = new Array()
console.log(a.__proto__ === Array.prototype) //true
let b = 1
console.log(b.__proto__ === Number.prototype) //true

console.log(Car.__proto__ === Function.prototype) // true

console.log(car1.__proto__ === car2.__proto__) //true Car.prototype

const foo = []
const bar = new Function()
console.log(foo.__proto__ === bar.__proto__) //false

const arr = []
console.log(arr.__proto__.__proto__)

const pr =Promise.resolve(1)
console.log(pr.__proto__.__proto__.__proto__ === null)//true

class Samurai {
    constructor(name) {
        this.name = name
    }
    hello() {
        console.log(this.name)
    }
}
const shogun = new Samurai('Dimych')
console.dir(shogun.__proto__.constructor.__proto__ === Function.prototype)


class SuperCar extends Car {
    constructor(brand,canFly) {
        super(brand);
        this.canFly = canFly

    }
    startFly() {
        console.log(`start fly ${this.brand}`)
    }
}

const superCar1 = new SuperCar('audi', true)
console.log(superCar1)
console.log(superCar1.__proto__.__proto__ === Car.prototype)
SuperCar.concatCar()

