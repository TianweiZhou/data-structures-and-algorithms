const queue = require("../dataStructures/queue");
const Queue = queue.Queue;
const PriorityQueue = queue.PriorityQueue;

let myQueue, myPriorityQueue;
beforeAll(() => {
    myQueue = new Queue();
    myPriorityQueue = new PriorityQueue();
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

describe("Priority Queue test with integer", () => {
    test("enqueue [1, 1] to the priority queue, the front of the queue must be 1", () => {
        myPriorityQueue.enqueue([1, 1]);
        expect(myPriorityQueue.front()).toBe(1);
    });

    test("size of the queue must be 1", () => {
        expect(myPriorityQueue.size()).toBe(1);
    });

    test("isEmpty for the queue must be false", () => {
        expect(myPriorityQueue.isEmpty()).toBe(false);
    });

    test("dequeue the queue, the front of the queue must be undefined", () => {
        myPriorityQueue.dequeue();
        expect(myPriorityQueue.front()).toBe(undefined);
    });

    test("isEmpty for the queue must be true and size must be 0", () => {
        expect(myPriorityQueue.isEmpty()).toBe(true);
        expect(myPriorityQueue.size()).toBe(0);
    });

    test("enqueue [3, 1], [2, 1], [2, 2], [1, 3] to the priority queue, the front of the queue must be 1", () => {
        const elements = [
            [3, 1],
            [2, 1],
            [2, 2],
            [1, 3],
        ];
        for (let i = 0; i < elements.length; i++) {
            myPriorityQueue.enqueue(elements[i]);
        }
        expect(myPriorityQueue.front()).toBe(1);
    });
});
