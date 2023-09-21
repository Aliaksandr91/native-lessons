//
// const car1 = {
//     brand: 'bmw',
//     speed: 200,
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
// }
// const car2 = {
//     brand: 'kia',
//     speed: 220,
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
// }
// car1.startEngine()
// car2.startEngine()
// //Фабричные функции (подходят для объектов содержащих свойства)
// function createCar (brand, speed) {
//     return {
//         brand,
//         speed,
//         startEngine() {
//             console.log(`Start ${this.brand}`)
//         }
//     }
// }
// const car3 = createCar('audi', 240)
// const car4 = createCar('toyota', 210)
// console.log(car3)
// console.log(car4)

//--------------------------------
// function Car (brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//     // this.startEngine = function () {
//     //     console.log(`Start ${this.brand}`)
//     // }
//     //return {} неявный
// }
//
// Car.prototype.startEngine = function () {
//     console.log(`Start ${this.brand}`)
// }
//
// const bmw = new Car('bmw', 200)
// const kia = new Car('kia', 220)
// console.log(bmw)
// console.log(kia)
//
// bmw.startEngine()

//---------------------------------------------------------------------
// class Car {
//     constructor(brand, speed) {
//         this.brand = brand
//         this.speed = speed
//     }
//
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
// //так не создавать
//     stopEngine = () => {
//         console.log(`Stop ${this.brand}`)
//     }
// }
//
// const bmw = new Car('bmw', 200)
// const kia = new Car('kia', 220)
// bmw.startEngine()
// console.log(bmw)
// console.log(kia)
//---------------------------------------------
class Car {
    #brand
    constructor(brand, speed) {
        this.#brand = brand
        this.speed = speed
    }

    startEngine() {
        console.log(`Start ${this.#brand}`)
    }
    getBrand() {
        return this.#brand
    }
    setBrand(newBrand) {
        return this.#brand = newBrand
    }

    get brand() {
        return this.#brand
    }
    set brand(newBrand) {
        return this.#brand = newBrand
    }



    static concatCar(car1, car2) {
        return car1.brand + car2.brand
    }


}

const bmw = new Car('bmw', 200)
const kia = new Car('kia', 220)
// bmw.startEngine()
// console.log(bmw)
// console.log(kia)
// //console.log(bmw.#brand) //error private field
// console.log(bmw.getBrand())
// console.log(bmw.setBrand('BMW'))

// console.log(bmw.brand)
// bmw.brand = 'toyota'
// console.log(bmw.brand)


console.log(Car.concatCar(bmw,kia))