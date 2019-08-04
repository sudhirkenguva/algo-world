// Optimized bubble sort, 
// Here if in any pass there is no swapping, sort (outer loop) will terminate, which limits the best case complexity to O(n)

let a = [ -3, 12, 34, 56, 97, 100, 101 ];
let temp, i, j, isSwampped = true;

for(i = a.length-1; isSwampped && i >= 1; i--) {
    isSwampped = false;
    for(j = 0; j < i; j++) {
        if(a[j] > a[j+1]) {
            temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp;
            isSwampped = true;
        }
    }
}

console.log(a);