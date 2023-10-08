// publisher subscriber

//store.subscribe(function subscriber(){}) //изменился store
//button.addEventListener('click', function subscriber(){}) //клик
//useEffect(() => {console.log('react)}, []) // частный случай
setTimeout(function subscriber() {
}, 1000) // прошла секунда
promise.then(function subscriber() {
})// промис зарезолвился
// subscriber === observer === listener === handler === watcher
const button = {
    _subscribers: {
        'click': [],
        'focus': []
    },
    addEventListener(eventName, subscriber) {
        this._subscribers[eventName].push(subscriber)
    },
    click() {
        this._subscribers['click'].forEach((sub) => sub())
    },
    focus() {
        this._subscribers['focus'].forEach((sub) => sub())
    }
}