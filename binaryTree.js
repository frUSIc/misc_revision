// No automatic balancing binary tree
"use strict";

class BSTNode {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BST {
    constructor(value){
        this.root = new BSTNode(value);
        this.nodes = 1; //How to keep track? May need to create insertRecurse function
    }

    // Call via tree = insert(tree, value)
    insert(node, value){
        // Base case
        if (node == null){
            return new BSTNode(value);
        // Right Recurse
        } else if (value > node.value){
            node.right = this.insert(node.right, value);
        // Left Recurse
        } else if (value < node.value){
            node.left = this.insert(node.left, value);
        }
        // Return node to complete recursion
        return node;
    }

    printBFS(){
        let queue = [];
        queue.push(this.root);
    }

    printDFS(){
        return;
    }
}

let tree = new BST(50);
let root = tree.root;
root = tree.insert(root,30);
root = tree.insert(root,20);
root = tree.insert(root,40);
root = tree.insert(root,70);
root = tree.insert(root,60);
root = tree.insert(root,80);
console.log(root.value, root.left.value, root.left.left.value, root.left.right.value);
console.log(root.value, root.right.value, root.right.left.value, root.right.right.value);