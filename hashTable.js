"use strict";

// A double hashing hash table, stores positive numbers only
class HashTable {
    constructor(){
        this.array = new Array(50).fill(-1);
        this.tableSize = this.array.length;
        this.prime = 23;
    }

    hash1(key){
        return (key % this.tableSize);
    }

    hash2(key){
        return (this.prime - (key % this.prime));
    }

    hash(key){
        let index = this.hash1(key);
        // Check if single hashing causes collision
        if (this.array[index] == -1){
            return index;
        } else {
        // Collision occured
            let i = 1;
            while (this.array[index] != -1){
                index = (this.hash1(key) + i * this.hash2(key)) % this.tableSize;
                i++;
                // Prevent infinite loop
                if (i > 100){
                    return null;
                }
            }
            return index;
        }
    }

    insert(value){
        let index = this.hash(value);
        this.array[index] = value;
    }

    delete(value){
        let index = this.hash(value);
        let i = 0;
        while (this.array[index] != value){
            index = (this.hash1(value) + i * this.hash2(value)) % this.tableSize;
            i++;
            // Prevent infinite loop
            if (i > 100){
                return null;
            }
        }
        this.array[index] = -1;
        
    }

    // Search and access are same in hash table
    search(value){
        let index = this.hash(value);
        let i = 0;
        while (this.array[index] != value){
            index = (this.hash1(value) + i * this.hash2(value)) % this.tableSize;
            i++;
            // Prevent infinite loop
            if (i > 100){
                return null;
            }
        }
        return index;
    }

    printTable(){
        let string = '';
        for (let i = 0; i < this.tableSize; i++){
            string = string + ' ' + this.array[i].toString();
        }
        return string;
    }
}

let hashTable = new HashTable();
for (let i = 0; i < hashTable.tableSize/2; i++){
    hashTable.insert(Math.floor((Math.random() * 500) + 1));
}
hashTable.insert(1337);
console.log(hashTable.printTable());
console.log('Searching, found at:', hashTable.search(1337));
hashTable.delete(1337);
console.log(hashTable.printTable());