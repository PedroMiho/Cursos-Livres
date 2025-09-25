#include <stdio.h>

void imprimir(int* w){
    printf("X1: %i\n", w[0] );
    printf("X2: %i\n", w[1] );
    printf("X3: %i\n", w[2] );

    printf("&w: %p\n", &w); //Posição de w na memória
    printf("w: %p\n", w); //Posição do arranjo x na memória
    printf("*w: %i\n", *w); //Primeiro item do arranjo

    w[0] = 21; 
    w[1] = 22; 
    w[2] = 23; 
}

int main() {
    int x[3];
    x[0] = 1;
    x[1] = 2;
    x[2] = 7;
    imprimir(x);
    printf("X1: %i\n", x[0] );
    printf("X2: %i\n", x[1] );
    printf("X3: %i\n", x[2] );
    
}