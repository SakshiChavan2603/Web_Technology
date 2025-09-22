#include<iostream>
using namespace std;

int main() {
    int *n = new int[10];
    n[0] = 45;
    n[1] = 46;
    for(int i = 2; i < 10; i++) {
        cin>>n[i];
    }

    for(int i = 0; i < 10; i++) {
        cout<<n[i]<<"\t";
    }
}