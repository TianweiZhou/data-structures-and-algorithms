const queue = require("../dataStructures/queue");
const Queue = queue.Queue;

let myQueue;
beforeAll(() => {
    myQueue = new Queue();
});

describe("Queue test with integer", () => {
    test("enqueue 1 to the queue, the front of the queue must be 1", () => {
        myQueue.enqueue(1);
        expect(myQueue.front()).toBe(1);
    });

    test("size of the queue must be 1", () => {
        expect(myQueue.size()).toBe(1);
    });

    test("isEmpty for the queue must be false", () => {
        expect(myQueue.isEmpty()).toBe(false);
    });

    test("dequeue the queue, the front of the queue must be undefined", () => {
        myQueue.dequeue();
        expect(myQueue.front()).toBe(undefined);
    });

    test("isEmpty for the queue must be true and size must be 0", () => {
        expect(myQueue.isEmpty()).toBe(true);
        expect(myQueue.size()).toBe(0);
    });
});
