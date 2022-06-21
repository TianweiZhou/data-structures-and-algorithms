let MySet = function () {
    this.dataStore = [];

    this.has = (element) => {
        return this.dataStore.indexOf(element) !== -1;
    };

    this.value = () => {
        return this.dataStore;
    };

    this.add = (element) => {
        if (!this.has(element)) {
            this.dataStore.push(element);
        }
    };

    this.remove = (element) => {
        let index = this.dataStore.indexOf(element);
        if (index > -1) {
            this.dataStore.splice(index, 1);
        }
    };

    this.size = () => {
        return this.dataStore.length;
    };

    this.union = (set) => {
        let newSet = new MySet();
        let firstSet = this.dataStore;
        let secondSet = set.dataStore;

        firstSet.forEach((e) => newSet.add(e));
        secondSet.forEach((e) => newSet.add(e));
        return newSet;
    };

    this.difference = (set) => {
        let newSet = new MySet();
        let firstSet = this.dataStore;
        let secondSet = set.dataStore;

        firstSet.forEach((e) => {
            if (!secondSet.includes(e)) {
                newSet.add(e);
            }
        });
        return newSet;
    };

    this.intersection = (set) => {
        let newSet = new MySet();
        let firstSet = this.dataStore;
        let secondSet = set.dataStore;

        firstSet.forEach((e) => {
            if (secondSet.includes(e)) {
                newSet.add(e);
            }
        });
        return newSet;
    };
};

module.exports = { MySet: MySet };
