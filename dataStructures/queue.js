class Queue {
    constructor() {
        this.dataStore = [];
    }

    enqueue(element) {
        this.dataStore.push(element);
    }

    front() {
        return this.dataStore[0];
    }

    dequeue() {
        this.dataStore.shift();
    }

    size() {
        return this.dataStore.length;
    }

    isEmpty() {
        return this.dataStore.length === 0;
    }
}

class PriorityQueue extends Queue {
    enqueue(element) {
        if (this.dataStore.length === 0) {
            this.dataStore.push(element);
        } else {
            let added = false;
            for (let i = 0; i < this.dataStore.length; i++) {
                if (this.dataStore[i][1] < element[1]) {
                    this.dataStore.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.dataStore.push(element);
            }
        }
    }

    front() {
        if (this.dataStore.length === 0) {
            return undefined;
        }
        return this.dataStore[0][0];
    }
}

module.exports = { Queue: Queue, PriorityQueue: PriorityQueue };
