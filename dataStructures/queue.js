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

module.exports = { Queue: Queue };
