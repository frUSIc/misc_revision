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
```

## Definitions
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

## Data Structures
---------------------------------------------------------

### Data types
- Primitive: int, char, float, etc.
- User defined: struct, union, enum, etc.
- Abstract (ADT): User defined but abstracted, can only access via exposed functions/interface.
E.g. Stack ADT can be implemented via linked list or array, but interface doesn't change for the 'client'.
Note: Opposite of abstract is concrete.

### List of Structures
- Stack: Last-in-first-out list. Uses push() and pop()
- Queue: First-in-first-out list. Uses enqueue() and dequeue(). Circular queue is a variation
- Priority queue: Highest-priority-out list
- Sets
- Lists
- Trees
- Graphs
- Dictionaries

## Algorithms
---------------------------------------------------------

### Common Running times in order
- Constant
- Logarithmic
- Linear
- N log N
- Quadratic
- Cubic
- Exponential
[Big O Cheat Sheet](https://www.bigocheatsheet.com/)

## Code directory
---------------------------------------------------------
- deref.c: Examples of using \* and &
- array.c: Addresses of different array creation
- threads.c: Creates 5 threads, each printing their own id
