#include <stdio.h>
 
union Data {
   long integer;
   double decimal;
   char string[8];
};
 
void main( ) {
   union Data data;
   printf( "Memory size of data : %ld\n", sizeof(data));
   data.integer = 65;
   printf( "Data.integer set to %ld\n", data.integer);
   printf( "Data.decimal shows: %f\n", data.decimal);
   printf( "Data.string shows: %s\n", data.string);
}