const BST = require("../dataStructures/binarySearchTree");

let myBinarySearchTree;
beforeAll(() => {
    myBinarySearchTree = new BST();
});

describe("test BST with integer", () => {
    test("add 1, 2, 3 to the tree， find min should be 1 and find max should be 3", () => {
        myBinarySearchTree.add(1);
        myBinarySearchTree.add(2);
        myBinarySearchTree.add(3);
        expect(myBinarySearchTree.findMin()).toBe(1);
        expect(myBinarySearchTree.findMax()).toBe(3);
    });

    test("find 1 should be true, find 4 should be false", () => {
        expect(myBinarySearchTree.find(1)).toBe(true);
        expect(myBinarySearchTree.find(4)).toBe(false);
    });
});
