//this
//1. Global scope
//2. Function (simple fn | arrow gn)
//3. call, apply, bind
//4. function Constructor

//1.
console.log(this)

//2.
const foo = () => {
    console.log(this)
}
foo() //window


//Объект не создает свое лексическое окружение
const car = {
    foo: () => {
        console.log(this)
    }
}
car.foo()//window


function bar() {
    const foo = () => {
        console.log(this)
    }
    foo()
}

bar() //window


let car3 = {
    speed: 200,
    showSpeed() {
        console.log(this.speed)
    }
}
car3.showSpeed() //200

const car4 = car3
car3 = null
car4.showSpeed()//200


const car5 = {
    speed: 200
}
const car6 = {
    speed: 220
}

function showSpeed() {
    console.log(this.speed)
}

car5.f = showSpeed
car6.f = showSpeed

car5.f()//200
car6.f()//220


const car7 = {
    speed: 200,
    showSpeed(a, b) {
        console.log(this.speed + a + b)
    }
}

const car8 = {
    speed: 220
}

car7.showSpeed()
car7.showSpeed.call(car8, 10, 20)
car7.showSpeed.apply(car8, [20, 20]) //A - array
const fn = car7.showSpeed.bind(car8, 20, 20)
fn()


function fn2() {
    console.log(this)
}

fn2.bind({a: 1}).bind({a: 3}).bind({a: 4}).bind({a: 5}).call({a: 2})

//fn2.call({a:2}).bind({a:1})

class Car {
    constructor(color) {
        this.color = color;
    }
}

const car9 = new Car('red')
console.log(car9)


const car10 = {
    speed: 200,
    showSpeed() {
        console.log(this.speed)
    }
}
setTimeout(car10.showSpeed, 1000)
setTimeout(car10.showSpeed.bind(car10), 1000)
setTimeout(() => car10.showSpeed(), 1000)




