# Bunch of Miscellaneous Info

### Binary to octal/hexadecimal
3 binary digits -> 1 octal digit
```
0b010 == 0o2_8
```
4 binary digits -> 1 hexadecimal
```
0b1111 == 0xF
```

## Strong, Weak, Dynamic, Static Typed
Strong/Weak typed
- Strongly-typed: Type constraints during expressions is forced, e.g. Python, Java
- Weakly-typed: Types can be different in an expression, e.g. PHP
```
var = 1;
var = 1 + 'Hello'; // Strong -> error, weak -> no error
```

Dynamic/Static typed
- Statically-typed: The variable type is known at compilation stage. Once declared, a variable cannot change type. E.g. Java, C
- Dynamically-typed: The variable type is known at run-time. Variables can be reassigned to different types. E.g. JavaScript, Python
```
var = 1;
var = 'Hello'; // Static -> error, dynamic -> no error
```

## Code directory
- deref.c: Looks at difference between \* and &