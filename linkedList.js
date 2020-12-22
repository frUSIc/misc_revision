// Implementation of singly linked list in JavaScript
"use strict";

// A node contains a value and reference to next
class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }

    getValue(){
        return this.value;
    }
}

class SinglyList {
    // List contains head, tail and total number of nodes
    // Creation is via `let var = new SinglyList()`
    constructor(){
        this.head = null;
        this.tail = null;
        this.numNodes = 0;
    }

    // Insertion
    insertNode(node){
        // First node special case
        if (this.numNodes == 0){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.numNodes += 1;
    }

    // Deletion
    deleteNode(value){
        // Initialise at top of the list
        let curr = this.head;
        let prev = this.head;
        for (let i = 0; i < this.numNodes; i++){
            if (curr.value == value){
                prev.next = curr.next;
                this.numNodes -= 1;
                break;
            } else {
                prev = curr;
                curr = curr.next;
            }
        }
    }

    // Search for node
    searchNode(value){
        let curr = this.head;
        let ret = null;
        for (let i = 0; i < this.numNodes; i++){
            if (curr.value == value){
                ret = curr;
                break;
            }
            curr = curr.next;
        }
        return ret;
    }

    // Print list
    printList(){
        let curr = this.head;
        let string = '';
        for (let i = 0; i < this.numNodes; i++){
            string = string + ' ' + curr.value.toString();
            curr = curr.next;
        }
        return string;
    }
}

// Creating a linked list
let list = new SinglyList();
let newNode;
// Create a bunch of nodes
for (let i = 0; i < 10; i++){
    newNode = new ListNode(i)
    list.insertNode(newNode);
}
// Full list
console.log('Full list:', list.printList());

// Search for the number 5
console.log('Search for 5:', list.searchNode(5));

// Search for the number 12
console.log('Search for 12:', list.searchNode(12));

// Delete 3 and 7
list.deleteNode(3);
list.deleteNode(7);
console.log('New full list:', list.printList());
console.log('NumNodes:', list.numNodes);