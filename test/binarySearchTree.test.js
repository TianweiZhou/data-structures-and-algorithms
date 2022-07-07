const BST = require("../dataStructures/binarySearchTree");

let myBinarySearchTree;
beforeAll(() => {
    myBinarySearchTree = new BST();
});

describe("test BST with integer", () => {
    test("add 4, 8, 3, 5, 9, 7, 1 to the tree， find min should be 1 and find max should be 9", () => {
        myBinarySearchTree.add(4);
        myBinarySearchTree.add(8);
        myBinarySearchTree.add(3);
        myBinarySearchTree.add(5);
        myBinarySearchTree.add(9);
        myBinarySearchTree.add(7);
        myBinarySearchTree.add(1);
        expect(myBinarySearchTree.findMin()).toBe(1);
        expect(myBinarySearchTree.findMax()).toBe(9);
    });

    test("find 1 should be true, find 2 should be false", () => {
        expect(myBinarySearchTree.find(1)).toBe(true);
        expect(myBinarySearchTree.find(2)).toBe(false);
    });

    // test("remove 1 then find 1 should be false", () => {
    //     console.log(myBinarySearchTree);
    //     expect(myBinarySearchTree.remove(1));
    //     console.log(myBinarySearchTree);
    //     // expect(myBinarySearchTree.find(1)).toBe(false);
    // });

    test("print inorder of the tree should be [1, 3, 4, 5, 7, 8, 9]", () => {
        expect(myBinarySearchTree.printInorder()).toEqual([1, 3, 4, 5, 7, 8, 9]);
    });

    test("print preorder of the tree should be [4, 3, 1, 8, 5, 7, 9]", () => {
        expect(myBinarySearchTree.printPreorder()).toEqual([4, 3, 1, 8, 5, 7, 9]);
    });

    test("print postorder of the tree should be [1, 3, 7, 5, 9, 8, 4]", () => {
        expect(myBinarySearchTree.printPostorder()).toEqual([1, 3, 7, 5, 9, 8, 4]);
    });
});
