class EventEmitter {
    constructor() {
        this.eventMap = {}; // Initialize the eventMap in the constructor
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.eventMap.hasOwnProperty(eventName)) {
            this.eventMap[eventName] = new Set();
        }
        this.eventMap[eventName].add(callback);
        return {
            unsubscribe: () => {
                this.eventMap[eventName].delete(callback); // Use eventName here
            },
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const res = [];
        const callbacks = this.eventMap[eventName] || new Set(); // Use eventMap[eventName] here
        callbacks.forEach((callback) => res.push(callback(...args)));
        return res;
    }
}

// Example usage:

// const emitter = new EventEmitter();

// // Subscribe to the onClick event with onClickCallback
// function onClickCallback() {
//     return 99;
// }
// const sub = emitter.subscribe('onClick', onClickCallback);

// console.log(emitter.emit('onClick')); // [99]
// sub.unsubscribe();
// console.log(emitter.emit('onClick')); // []
