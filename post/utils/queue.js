class Queue {
    constructor() {
        this.data = [];
    }
    add(record) {
        this.data.unshift(record);
    }
    remove() {
        this.data.pop();
    }

    first() {
        return this.data[0] || null;
    }
    last() {
        return this.data[this.data.length - 1] || null;
    }
    size() {
        return this.data.length;
    }
    toJson(){
        return {data:{...this.data}}
    }
}

module.exports = Queue;
