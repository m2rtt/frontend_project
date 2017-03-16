class Counter {
    constructor() {
        this.count = 0;
    }
    increase() {
        this.count += 1;
    }
    getCount() {
        return this.count;
    }
}

export default Counter;
