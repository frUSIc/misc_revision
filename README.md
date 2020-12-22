# Bunch of Miscellaneous Info

### Unsigned max values
- 1 byte (char) = 255
- 2 byte (short) = 65,535
- 4 byte (int) = 4,294,967,295

### Binary to octal/hexadecimal
- 3 binary digits -> 1 octal digit
```
0b111 == 0o7
```
- 4 binary digits -> 1 hexadecimal
```
0b1111 == 0xF
```

### ++i
- ++i will increment i and return the new value
- i++ will increment i but return the original value

### Array creation
- int arr\[n\] = {0}: Initialises array of size n on the stack. Size limited, lifetime limited.
- int\* arr = calloc(n, sizeof(int) ): Initialises array on the heap.
Note: Both versions of arr store an address.

### Pass by reference/value
- By reference: Function called uses the same variable as was passed in.
- By value: Function called uses a copy of the variable that was passed in.
Note: Modern languages tend to hold references. If mutated, same effect as pass by reference. If immutable, only copies can be created, same effect as pass by value.

### Single/double quotes
- 'a' indicates a single character
- "a" indicates a string literal containing 'a' and '\0'

### Bitwise operations
- &: AND
- |: OR
- ^: XOR
- ~: NOT
- <<: Left Shift
- >>: Right Shift

### Function vs Macro
- Macros are preprocessed, faster, and have no type checking. Situational, typically for small things.
- Functions are compiled, slower, and checks for type and compile-time errors.

### Memory layout
- From low memory address (0x00) to high (0xFF): Code, Data, Heap, Stack

### Pointer arithmetic
- Common way of scanning a string
```
char *s = "a string";
char *c;
for (c = s; *c != '\0'; c++) {
	doSomething();
}
```

### Padding
- Structs are padded for alignment, re-order fields to minimise wasted space

### Arrow Functions JavaScript
- Reduces single line function size
```
function (a){
  return a + 100;
}

a => a + 100;
```
### Format Specifiers
- d = int
- u = unsigned int
- f = float AND double
- c = unsigned char
- s = string array
- p = pointer
- x = unsigned hexadecimal

### Python venv Quickstart
```
mkdir env
cd env
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
deactivate
```

### Pipes and Redirects
Pipe: Used to pass output to another program/utility
Redirect: Used to pass output to a file/stream

E.g. run program and redirect its output into file
```
prog > file
```
E.g. run program1 and use its output as the input for program2
```
prog1 | prog2
```

### Conditional/Ternary Operator
If the expression evalues to true, var = trueOpt, otherwise var = falseOpt
```
var = expression ? trueOpt : falseOpt
```

### Git essentials
```
git checkout -b [newbranch]
git push -u origin [newbranch]
git remote set-url origin [neworigin]
```

### Unions
A special data type that allows storing different data types in a single memory location.
E.g. the below union is an 8 byte size of memory that can store a long, double, or string.
Setting the integer to 65 and reading it as a string shows the character 'A', ASCII for 65.
```
union Data {
   long integer;
   double decimal;
   char string[8];
};
```

---------------------------------------------------------
Definitions
---------------------------------------------------------

### Strong/Weak typed
- Strongly-typed: Type constraints during expressions is forced, e.g. Python, Java
- Weakly-typed: Types can be different in an expression, e.g. PHP
```
var = 1;
var = 1 + 'Hello'; // Strong -> error, weak -> no error
```

### Dynamic/Static typed
- Statically-typed: The variable type is known at compilation stage. Once declared, a variable cannot change type. E.g. Java, C
- Dynamically-typed: The variable type is known at run-time. Variables can be reassigned to different types. E.g. JavaScript, Python
```
var = 1;
var = 'Hello'; // Static -> error, dynamic -> no error
```

### Compiled vs Interpreted
- Compiled: Machine code generated before execution. Typically faster but platform dependent. E.g. C, Rust.
- Interpreted: Execute line by line. Just-in-time compilation is closing speed gap. E.g. Python, JavaScript.

### Makefile
- Contains definitions and rules to compile multi-modules programs.
```
CC = gcc
CFLAGS = -Wall -Werror

bm : bm.o Stack.o
	gcc -o bm bm.o Stack.o
	
bm.o : bm.c Stack.h
	gcc -c -Wall -Werror bm.c
	
Stack.o : Stack.c Stack.h
	gcc -c -Wall -Werror Stack.c
```

### Endianness
- Little endian: Least significant byte is stored at the lowest address. Intel.
- Big endian: Most significant byte is stored at lowest address. Network programming/Mac.
e.g. Memory increasing from left to right, storing 0x1234 5678
Little endian:
```
0x78 0x56 0x34 0x12
```
Big endian:
```
0x12 0x34 0x56 0x78
```

### Float/Double
- Represented by setting certain bits as sign, exponent and fraction
- Single precision: 1 sign bit, 8 exponent bits, 23 fraction/mantissa bits
- Double precision: 1 sign bit, 11 exponent bits, 52 fraction/mantissa bits
e.g. 150.75 = 1001 0110.11, where 0.1 == 1/2, 0.01 == 1/4, etc.
1. Normalise 10010110.11 -> 1.001011011 x 2^7
2. Determine sign bit, positive -> 0
3. Determine the exponent, 7 + 127 -> 1000 0110
4. Determine the fraction, 1.001011011 -> 0 0101 1011
Float is 0 100000110 001011011|000000000000000

### Buffered/Unbuffered I/O
- Buffered I/O: Data is stored in cache and gathered, then written in bulk when there is enough data
- Unbuffered I/O: Data is written to disk as soon as requested

### CRUD Operations
- Stands for Create, Read, Update, Delete
- The four functions necessary for persistent databases
- Matches up well with following HTTP methods: POST, GET, PUT/PATCH, DELETE 

### REST (Representative State Transfer)
- A RESTful API is a web app that conforms to principles of REST
- Stateless, all required info is in the HTTP request
- API is called by issuing standard POST, GET, PUT and DELETE
- A web app's RESTful service is exposed through the [url]/api path by convention
- The CRUD operations are performed via HTTP requests to different subpaths of [url]/api
- Is an alternative to SOAP, CORBA, RMI, etc.
```
POST /api/resources
GET /api/resources
PUT /api/resources/text1
DELETE /api/resources/text2
```

---------------------------------------------------------
Data Structures
---------------------------------------------------------

### Data types
- Primitive: int, char, float, etc.
- User defined: struct, union, enum, etc.
- Abstract (ADT): User defined but abstracted, can only access via exposed functions/interface.
ADT's are an approach to implementing data types separating interface from implementation.
E.g. Stack ADT can be implemented via linked list or array, but interface doesn't change for the 'client'.
Note: Opposite of abstract is concrete.

### Abstract Data Types
- Stack: Last-in-first-out list. Uses push() and pop()
- Queue: First-in-first-out list. Uses enqueue() and dequeue(). Circular queue is a variation
- Priority queue: Highest-priority-out list
- Set: List of unique values
- Tree: Collection of nodes and edges. If interlinked, becomes a graph
- Map/Dictionary: Contains sets of keys each with an associated value

### Typical Operations
- Create an empty collection
- Insert one item into collection
- Remove one item from collection
- Find an item in the collection
- Check properties of collection, e.g. size
- Drop the entire collection
- Display the collection

### Common Data Structure Operations
|Data Structure|Time Complexity Access-Search-Insert-Delete (Average/Worst)|Space Complexity (Worst)|
|---|---|---|
|Array|1 - n - n - n / 1 - n - n - n|n|
|Hash Table|1 - 1 - 1 - 1 / n - n - n - n|n|
|Linked List|n - n - 1 - 1 / n - n - 1 - 1|n|
|Skip List|log - log - log - log / n - n - n - n|n log n|
|Binary Search Tree|log - log - log - log / n - n - n - n|n|
|AVL Tree|log - log - log - log / log - log - log - log|n|

[Big O Cheat Sheet](https://www.bigocheatsheet.com)

### Binary Search Tree
- When balanced, access/search/insert/remove is all logarithmic (due to binary search)
- Worst case is when tree is maximally unbalanced, becomes 'linked list', all cases now linear

### Hash Table
- Start with array, however stored data is related to the index via a hash.
- This hash allows significantly faster search, insert, delete compared to a basic array
- Worst case if table is near full, collisions constantly occur, making it slightly worse than a basic array
- Using primes in hash algorithm allows for a more even distribution

### Hash Table Collision Management
- Closed Addressing: On conflicts, items can be stored in separate data structures per element
	- Separate Chaining: Allow array elements to store more than 1 item via linked list/BST/dynamic array
- Open Addressing: All elements stored in the table
	- Linear Probing: Try next slot until reach free slot. Deletion needs extra step
	- Double Hashing: If collision occurs, hash again with 2nd algorithm using a different prime

### Bitmap/Bit-string
Interesting implementation for a set, where an array of bits is stored. To represent a number existing in the set, see if the bit is set at that array index, e.g. to see if the number 6 is part of the set, check the value of the bit at index 6 of the array arr[6]. This does require the array to be the size of the largest item it could store, making it inefficient for sets with few numbers and/or have a wide range. However, bitmaps have O(1) constant time access, search, insert and delete. Another benefit is that bitmaps can be easily compressed.

### Taking advantage of multiple data structure
Hash table is very popular due to its quick average operation times (in idea conditions). However, an O(1) constant search time for a specific object is different from searching for an object's attribute, e.g. the oldest item in a hash table used for caching purposes. Due to the nature of hashing, it would take O(n) linear time to search all the items to find the oldest item.

By pairing with a Maximal Heap Tree, where the root node is always the oldest item, we can find the oldest item in O(1) constant time. A tree structure also allows easy insert compared to a Linked List. In the case where we could be searching for any specific item's attribute rather than the maximal/minimal, a tree structure other than heap tree can be used with a hash table to take advantage of best parts of both structures.

The most frequently used data structures for one-dimensional database indexes are dynamic tree-structured indexes such as B/B+ Trees and hash-based indexes using extendible and linear hashing. - Hammer, J.; Schneider, M.

---------------------------------------------------------
Algorithms
---------------------------------------------------------

### Common Running times in order
- Constant, e.g. array indexing
- Logarithmic, e.g. binary search, where search space halves each iteration
- Linear, e.g. travelling to the end of a linked list, must go through all elements
- N log N, e.g. mergesort, where there are logN splits/merges and each split/merge has N operations
- Quadratic, e.g. iterating through 2D matrix
- Cubic, e.g. iterating through 3D matrix
- Polynomial, includes quadratic, cubic, etc.
- Exponential, typically avoided except for low-medium sized inputs. Intractable/NP-Complete problems.

### Common Array Sorting Algorithms
|Algorithm|Time Complexity (Best/Average/Worst)|Space Complexity (Worst)|
|---|---|---|
|Mergesort|n log n - n log n - n log n|n|
|Quicksort|n log n - n log n - n^2|log|
|Heapsort|n log n - n log n - n log n|1|
|Bubblesort/Insertionsort|n - n^2 - n^2|1|

[Big O Cheat Sheet](https://www.bigocheatsheet.com)

### Binary Search
- Recursive algorithm searching for value in a sorted array
- Logarithmic, as it halves the search space on each iteration

### Binary Tree Recursive Search
- For recursion, have a base case and left/right cases
- Remember that only the 'correct' path is followed in recursion, so if reach the end there is no need to search the other branches.
```
def search(tree, key):
	# Base case, end of path or found value
	if tree is None or tree.val == key: 
        return tree 
	
	# Go left or right depending on if current is smaller or larger
    if tree.val < key: 
        return search(root.right,key)
	else:
		return search(root.left,key) 
```

### Breadth First Search
- Have a queue, add all elements that can be seen from the starting element to the queue
- Visit new elements in order via dequeue, moving to the 'visited' list so its not visited twice
- Eventually visited all nodes or found matching node

### Depth First Search
- Have a stack, add all elements that can be seen from the starting element to the stack
- Visit new elements from last seen via pop, moving to the 'visited' list so its not visited twice
- Since going from top of the stack, newly added nodes from current node is visited first, before moving on to earlier seen nodes
- Eventually visited all nodes or found matching node

### Depth First Search (DFS) vs Breadth First Search (BFS)
- BFS looks at one vertex at a time. Queue based
- DFS looks through one path at a time till the end. Stack based
- BFS used in shortest path of un-weighted graphs, P2P networks and web crawlers
- DFS used in shortest path of weighted graphs/minimum spanning tree, detecting cycles

### Hash Table Algorithms
Common algorithms:
- hash1(key) = key % TABLE_SIZE
- hash2(key) = PRIME – (key % PRIME) 
- Double hashing: (hash1(key) + i \* hash2(key)) % TABLE_SIZE

---------------------------------------------------------
SQL
---------------------------------------------------------
- [Notes](https://www.notion.so/COMP3311-H11A-5d7f0991342f4be3b28bc85cb87a4584)

---------------------------------------------------------
Code Directory
---------------------------------------------------------
- deref.c: Examples of using \* and &
- array.c: Addresses of different array creation
- threads.c: Creates 5 threads, each printing their own id
- speed.py: Compares speed of quadratic and linear algorithms of calculating prefix averages
- union.c: Shows use of a union data type