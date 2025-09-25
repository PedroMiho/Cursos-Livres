#include <stdio.h>
#include <stdlib.h>

int main() {

    int x[3];
    x[0] = 1;
    x[1] = 2;
    x[2] = 7;

    int* y = (int*) malloc(sizeof(int)*3);
    y[0] = 4;
    y[1] = 2;
    y[2] = 4;

    *y = *x;
    
    return 0;
}