const EventEmitter = require('events');

class Clock extends EventEmitter {
    constructor() {
        super();
        setInterval(() => {
            this.emit('tick');
        }, 1000);
    }
}

const myClock = new Clock();

myClock.on('tick', () => {
    console.log('wohooo');
});
