const set = require("../dataStructures/set");
let mySet;

beforeAll(() => {
    mySet = set();
});

describe("Set test with integer", () => {
    test("add 1 to the set", () => {
        mySet.add(1);
        expect(mySet).toBe(["1"]);
    });
});
