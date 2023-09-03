// setTimeout(() => {
//     console.log('hello')
// }, 2000)
//
// fetch('https://library.com/authors', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//         fetch('https://library.com/authors/23', (err, data) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.log(data)
//                 fetch('https://library.com/authors/23/books', (err, data) => {
//                     if (err) {
//                         console.log(err)
//                     } else {
//                         console.log(data)
//                         fetch('https://library.com/authors/23/books/45', (err, data) => {
//                             if (err) {
//                                 console.log(err)
//                             } else {
//                                 console.log(data)
//                                 fetch('https://library.com/authors/23/books/45/256', (err, data) => {
//                                     if (err) {
//                                         console.log(err)
//                                     } else {
//                                         console.log(data)
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })
//
//
// fetch('https://library.com/authors')
//     .then((data) => {
//         return fetch('https://library.com/authors/23')
//     })
//     .then((data) => {
//         return fetch('https://library.com/authors/23/books')
//     })
//     .then((data) => {
//         return fetch('https://library.com/authors/23/books/45')
//     })
//     .then((data) => {
//         return fetch('https://library.com/authors/23/books/45/256')
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//
//
// const server = {
//     getData() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve('Some data')
//                 //reject('Some error')
//             }, 2000)
//         })
//     }
// }
// const promise = server.getData()
//
// //положительная обработка промиса
// promise.then((data) => {
//         console.log(data)
//     },
//     (error) => {
//         console.log(error)//никто не пишет
//     }
// )
//
// promise.catch((error) => {
//     console.log(error)
// })
//
// promise.finally(() => {
//     console.log('finally')
// })
// //console.log('promise: ', promise)
// const something = promise.then((data) => {
//     console.log(data)
// })
// something.then(() => console.log('then in something'))
//
//
// server
//     .getData()
//     .then((data) => {
//         console.log(data)
//     })
//     .then(() => console.log('then in something'))


// Promise.reject('reject')
//     .catch((t) => t + 'catch1')
//     .catch((t) => t + 'catch2')
//     .then((t) => t + 'then1')
//     .finally((t) => t + 'finally')
//     .then((t) => console.log(t))