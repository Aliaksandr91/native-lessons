// Изменение, которое браузер может отследить => событие
// Событие =>  Браузер вызыввает функцию - обработчик
// Обработчик, слушатель, подписчик, handler, listener, subscriber
// Обработчик должен быть назначен
// событие => {...} => handler({...})
// {...} => event, e , ev

const handler = (event) => {
    console.log(event.currentTarget.id)

}

const handler2 = () => {
    alert('!!!')
}

const handler3 = (event) => {
    console.log(event.target.id)
}
const handler4 = (event) => {
    event.stopPropagation();
    if(event.currentTarget.id === 'small') {
        alert("!!!")
    }
}
const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

sm.onclick = handler
sm.onclick = null
sm.onclick = undefined
// sm.onclick = (e) => {
// }

// sm.addEventListener('click', handler4)
// md.addEventListener('click', handler)
// bg.addEventListener('click', handler)
sm.addEventListener('click', handler4)
md.addEventListener('click', (e)=> {
    e.stopPropagation()
    alert('boom')
})
bg.addEventListener('click', ()=>(alert('wow')))


//sm.addEventListener('click', handler2)


const link = document.getElementById('a')
link.addEventListener('click', (e)=> {
    e.preventDefault()
    alert('aa')
})

