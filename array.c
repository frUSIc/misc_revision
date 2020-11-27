#include <stdio.h>
#include <stdlib.h>

void main(){
	int a[8] = {0};
	int* b = calloc(8, sizeof(int));
	
	printf("a's address is %p\n", a);
	printf("b's address is %p\n", b);
}