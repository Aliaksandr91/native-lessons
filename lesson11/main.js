import fetch from 'node-fetch';

// const delay = (time) => {
//     return new Promise((res, rej) => {
//         setTimeout(res, time)
//     })
// }
// delay(3000).then(() => console.log('Hello'))
//
// delay(1000)
//     .then(() => {
//         console.log('Hello world')
//         return 10
//     })
//     .then((data) => {
//         console.log(data)
//     }).catch((err) => console.log(err))
//
//
// fetch('https://google.com/query=js')
//     .then((data) => {
//         console.log(data.url)
//         return 10
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err.message)
//     })
//     .finally(() => {
//         console.log('finally')
//     })
//
//
// fetch('https://google.com/query=js')
//     .then((data) => {
//         console.log('data from google: ', data.url)
//     })
//
// fetch('https://yahoo.com/query=js')
//     .then((data) => {
//         console.log('data from yahoo: ', data.url)
//     })
//
// fetch('https://bing.com/query=js')
//     .then((data) => {
//         console.log('data from bing: ', data.url)
//     })
//
//
// fetch('https://yahoo.com/query=js')
//     .then((data) => {
//         console.log('data from yahoo: ', data.url)
//         return fetch('https://bing.com/query=js')
//     })
//     .then((data) => {
//         console.log('data from bing: ', data.url)
//         return fetch('https://google.com/query=js')
//     })
//     .then((data) => {
//         console.log('data from google: ', data.url)
//     })
//     .catch((err)=> {
//         console.log(err)
//     })


// const asyncFn = async () => {
//     try {
//         const yahooData = await fetch('https://yahoo.com/query=js')
//         console.log('data from yahoo: ', yahooData.url)
//         const googleData = await fetch('https://google.com/query=js')
//         console.log('data from google: ', googleData.url)
//         const bingData = await fetch('https://bing.com/query=js')
//         console.log('data from bing: ', bingData.url)
//     } catch (err) {
//         console.log(err)
//     } finally {
//         console.log('finish')
//     }
//
// }
// asyncFn()


// all race any allSettled

// const pr1 =  fetch('https://google.com/query=js')
// const pr2 =  fetch('https://bing.com/query=js')
// const pr3 =  fetch('https://yahoo.com/query=js')

// const bigPromise = [
//     fetch('https://google.com/query=js'),
//     fetch('https://bing.com/query=js'),
//     fetch('https://yahoo.com/query=js')
// ]



Promise.all([
    fetch('https://yahoo.com/query=js'),
    fetch('https://google.com/query=js'),
    fetch('https://bing.com/query=js')
]).then((data)=>{
    console.log(data.map(el=>el.url))
}).catch(err => console.log(err))




Promise.race([
    fetch('https://yahoo.com/query=js'),
    fetch('https://google.com/query=js'),
    fetch('https://bing.com/query=js')
]).then((data)=>{
    console.log(data.url)
}).catch(err => console.log(err))




Promise.any([
    fetch('https://yahoo.com/query=js'),
    fetch('https://google.com/query=js'),
    fetch('https://bing.com/query=js')
]).then((data)=>{
    console.log(data.url)
}).catch(err => console.log(err))




Promise.allSettled([
    fetch('https://yahoo.com/query=js'),
    fetch('https://google.com/query=js'),
    fetch('https://bing.com/query=js')
]).then((data)=>{
    console.log(data)
}).catch(err => console.log(err))////-----------------------------