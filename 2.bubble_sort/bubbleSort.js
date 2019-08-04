let a = [12, 97, 34, 56, -3, 100, 101];
let temp, i, j;
for (i = a.length-1; i >= 1 ; i--) {
    for (j = 0; j < i; j++) {
        if (a[j] > a[j + 1]) {
            temp = a[j];
            a[j] = a[j + 1];
            a[j + 1] = temp;
        }
    }
}

console.log(a);