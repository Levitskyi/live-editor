const subscribers = [];

export default {
    subscribe(fn) {
        subscribers.push(fn);
        return subscribers.length - 1;
    },
    notify(value) {
        subscribers.forEach(fn => fn(value));
    }
}
