#include <stdio.h>
#include <unistd.h>
#include <pthread.h>

void* helloWorld(void* vargp){
	int* i = (int*)vargp;
	printf("Hello world, my thread id is %ld\n", *i);
	pthread_exit(NULL);
}

int main(){
	// Thread id 
	pthread_t id;
    // Create threads that take their own id as argument
	for (int i = 0; i < 5; i++){
		pthread_create(&id, NULL, helloWorld, (void*)&id);
	}
	// Exit main now that threads have been created
	printf("All threads created, leaving main\n");
	pthread_exit(NULL);
}