//event loop
// const a = () =>{}
// const b = () =>{
//     a()
// }
// const c = () =>{
//     b()
// }
// c()

// console.log(1)
// setTimeout(()=>{
//     console.log(2)
// },0)
// console.log(3)
//---------------------------------------------------
// function a() {
//     console.log('1')
// }
// function b() {
//     console.log('2')
// }
// function c() {
//     console.log('3')
// }
// a()
// new Promise(function (resolve, reject) {
//     console.log('4');
//     setTimeout(function timer(){
//         resolve(console.log('5'))
//     }, 500)
// })
//
// b()
// c()
// 1 4 2 3 5
//---------------------------------------------------

// setTimeout(()=> {
//     console.log(1)
// })
//
// new Promise(function (resolve, reject){
//     console.log(2)
//     resolve()
// }).then(()=>{
//     console.log(3)
// })
// console.log(4)

//2 4 3 1
//---------------------------------------------------

// setTimeout(()=> {
//     console.log('1')
// },0)
//
// setTimeout(()=> {
//     console.log('2')
// },1000)
//
// new Promise(function (resolve, reject) {
//     console.log('3')
//     resolve();
//     console.log('4')
// })
//     .then(()=> {
//         console.log('5')
//     })
// console.log('6')
//
// async function test1() {
//     console.log('7')
//     await test2();
//     console.log('8')
// }
// async function test2(){
//     console.log('9')
// }
//
// test1()
// console.log('10')

//3 4 6 7 9 10 5 8 1 2

//---------------------------------------------------

console.log(1)
setTimeout(()=> {
    console.log(2)
    Promise.resolve().then(()=> {
        console.log(3)
    })
})

new Promise((resolve, reject)=> {
    console.log(4)
    resolve(5)
}).then((data)=> {
    console.log(data)
    Promise.resolve()
        .then(()=>{
            console.log(6)
        })
        .then(()=> {
            console.log(7)
            setTimeout(()=> {
                console.log(8)
            },0)
        })
})
setTimeout(()=> {
    console.log(9)
})
console.log(10)

// 1 4 10 5 6 7 2 3 9 8











