//TODO:make class
let Queue = function () {
    this.dataStore = [];

    this.enqueue = (element) => {
        this.dataStore.push(element);
    };

    this.front = () => {
        return this.dataStore[0];
    };

    this.dequeue = () => {
        this.dataStore.shift();
    };

    this.size = () => {
        return this.dataStore.length;
    };

    this.isEmpty = () => {
        return this.dataStore.length === 0;
    };
};

//Implementation with array
let PriorityQueue = function () {
    this.dataStore = [];

    this.enqueue = (element) => {
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
    };

    this.front = () => {
        return this.dataStore[0][0];
    };

    this.dequeue = () => {
        this.dataStore.shift();
    };

    this.size = () => {
        return this.dataStore.length;
    };

    this.isEmpty = () => {
        return this.dataStore.length === 0;
    };
};

module.exports = { Queue: Queue, PriorityQueue: PriorityQueue };
