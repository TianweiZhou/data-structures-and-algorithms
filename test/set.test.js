const set = require("../dataStructures/set");
const MySet = set.MySet;
let mySet;

beforeAll(() => {
    mySet = new MySet();
});

describe("Set test with integer", () => {
    test("after add 1 to the set it must contain 1", () => {
        mySet.add(1);
        expect(mySet).toBeInstanceOf(MySet);
        expect(mySet.value()).toContain(1);
    });

    test("size of the set must be 1", () => {
        expect(mySet.size()).toBe(1);
    });

    test("after remove 1, size of the set must be 0 and do not contain 1", () => {
        mySet.remove(1);
        expect(mySet.size()).toBe(0);
        expect(mySet.value()).not.toContain(1);
    });

    test("union set {1, 2, 3} and set {2, 3, 4} should contain 1, 2, 3, 4", () => {
        let set1 = new MySet();
        set1.add(1);
        set1.add(2);
        set1.add(3);
        let set2 = new MySet();
        set2.add(2);
        set2.add(3);
        set2.add(4);
        let union = set1.union(set2);
        expect(union.value()).toContain(1);
        expect(union.value()).toContain(2);
        expect(union.value()).toContain(3);
        expect(union.value()).toContain(4);
    });

    test("difference set {1, 2, 3} and set {2, 3, 4} should contain 1", () => {
        let set1 = new MySet();
        set1.add(1);
        set1.add(2);
        set1.add(3);
        let set2 = new MySet();
        set2.add(2);
        set2.add(3);
        set2.add(4);
        let difference = set1.difference(set2);
        expect(difference.value()).toContain(1);
    });

    test("intersection set {1, 2, 3} and set {2, 3, 4} should contain 2 and 3", () => {
        let set1 = new MySet();
        set1.add(1);
        set1.add(2);
        set1.add(3);
        let set2 = new MySet();
        set2.add(2);
        set2.add(3);
        set2.add(4);
        let intersection = set1.intersection(set2);
        expect(intersection.value()).toContain(2);
        expect(intersection.value()).toContain(3);
    });
});
