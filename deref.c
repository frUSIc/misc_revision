#include <stdio.h>

int main(int argc, char* argv[]){
	printf("Declared var and p\n\n");
	int var; // Defining variable var which will store an integer
	int* p;  // * is used in the declaration, so we're defining p as a pointer to what will store an integer
	
	printf("uninitialised var is %d\n", var);
	var = 9; // Set var to 9
	printf("initialised var is %d\n", var);
	printf("address &var is %p\n\n", &var);
	
	printf("uninitialised p is %p\n", p);
	p = &var;  // & takes the address of x
	printf("initialised p is %p\n", p);
	printf("address &p is %p\n", &p);
	printf("deref *p is %d\n\n", *p); // * is used outside declaration, so is a dereference
	
	*p = 5;
	printf("var is set through p as %d\n", var);
	return 0; // Note: cannot return &p as it is a stack address, not a malloced heap address
}