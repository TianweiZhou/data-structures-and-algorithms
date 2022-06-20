let Stack = function () {
    this.dataStore = [];
    this.count = 0;

    this.push = (element) => {
        this.dataStore[this.count++] = element;
    };

    this.pop = () => {
        if (this.count === 0) {
            return undefined;
        }
        return this.dataStore[--this.count];
    };

    this.peek = () => {
        return this.dataStore[this.count - 1];
    };

    this.size = () => {
        return this.count;
    };

    this.clear = () => {
        this.dataStore = [];
        this.count = 0;
    };
};

module.exports = { Stack: Stack };
