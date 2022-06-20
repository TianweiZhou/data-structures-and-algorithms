const stack = require("../dataStructures/stack");
const Stack = stack.Stack;

let myStack;
beforeAll(() => {
    myStack = new Stack();
});

describe("Stack test with integer", () => {
    test("push 1 to the stack, peek should be 1", () => {
        myStack.push(1);
        expect(myStack.peek()).toBe(1);
    });

    test("push 2 and 3 to the stack, pop should be 3", () => {
        myStack.push(2);
        myStack.push(3);
        expect(myStack.pop()).toBe(3);
    });

    test("size of the stack should be 2", () => {
        expect(myStack.size()).toBe(2);
    });

    test("clear the stack, size should be 0", () => {
        myStack.clear();
        expect(myStack.size()).toBe(0);
    });
});

describe("Stack test with string", () => {
    test("push 'apple' to the stack, peek should be 'apple'", () => {
        myStack.push("apple");
        expect(myStack.peek()).toBe("apple");
    });

    test("push 'peach' and 'orange' to the stack, pop should be 'orange'", () => {
        myStack.push("peach");
        myStack.push("orange");
        expect(myStack.pop()).toBe("orange");
    });

    test("size of the stack should be 2", () => {
        expect(myStack.size()).toBe(2);
    });

    test("clear the stack, size should be 0", () => {
        myStack.clear();
        expect(myStack.size()).toBe(0);
    });
});
