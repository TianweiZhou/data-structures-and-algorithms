class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(element) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(element);
        } else {
            const addToTree = (node) => {
                if (node.value > element) {
                    //add to left branch
                    if (node.left === null) {
                        node.left = new Node(element);
                    } else {
                        return addToTree(node.left);
                    }
                } else if (node.value < element) {
                    //add to right branch
                    if (node.right === null) {
                        node.right = new Node(element);
                    } else {
                        return addToTree(node.right);
                    }
                }
            };
            addToTree(node);
        }
    }

    //FIXME:
    remove(element) {
        const removeNode = (node, data) => {
            if (node === null) {
                return null;
            }
            if (node.value === data) {
                //no children
                if ((node.left === null && node, node.right === null)) {
                    return null;
                }
                //no left child
                if (node.left === null) {
                    return node.right;
                }
                //no right child
                if (node.right === null) {
                    return node.left;
                }
                //have both left and right children
                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                //remove the inorder successor
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (node.data > data) {
                node.left = removeNode(node.left, data);
            } else {
                node.right = removeNode(node.right, data);
            }
        };
        this.root = removeNode(this.root, element);
    }

    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.value;
    }

    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.value;
    }

    find(element) {
        const findInTree = (node) => {
            //finish when node is null
            if (node === null) {
                return false;
            }
            if (node.value === element) {
                return true;
            } else if (node.value > element) {
                return findInTree(node.left);
            } else {
                return findInTree(node.right);
            }
        };
        return findInTree(this.root);
    }

    findMaxHeight(node = this.root) {
        if (node === null) {
            return -1;
        }
        return max(this.findMaxHeight(node.left), this.findMaxHeight(node.right)) + 1;
    }

    findMinHeight(node = this.root) {
        if (node === null) {
            return -1;
        }
        return min(this.findMaxHeight(node.left), this.findMaxHeight(node.right)) + 1;
    }

    isBalance() {
        return this.findMinHeight(this.root) >= this.findMaxHeight(this.root) - 1;
    }

    printInorder() {
        if (this.root === null) {
            return null;
        }
        let result = new Array();
        const traverseInorder = (node) => {
            node.left && traverseInorder(node.left);
            result.push(node.value);
            node.right && traverseInorder(node.right);
        };
        traverseInorder(this.root);
        return result;
    }

    printPreorder() {
        if (this.root === null) {
            return null;
        }
        let result = new Array();
        const traversePreorder = (node) => {
            result.push(node.value);
            node.left && traversePreorder(node.left);
            node.right && traversePreorder(node.right);
        };
        traversePreorder(this.root);
        return result;
    }

    printPostorder() {
        if (this.root === null) {
            return null;
        }
        let result = new Array();
        const traversePostorder = (node) => {
            node.left && traversePostorder(node.left);
            node.right && traversePostorder(node.right);
            result.push(node.value);
        };
        traversePostorder(this.root);
        return result;
    }
}

module.exports = BST;

const a = {
    root: {
        value: 4,
        left: { value: 3, left: [Node], right: null },
        right: { value: 8, left: [Node], right: [Node] },
    },
};
