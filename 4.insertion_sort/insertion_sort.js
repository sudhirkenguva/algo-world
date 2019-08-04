let a = [19, 25, -9, 29, 0, 25, 15, -9];
let temp, j;
for (let i = 1; i < a.length; i++) {
    temp = a[i];
    j = i - 1;
    while (a[j] > temp) {
        a[j + 1] = a[j];
        j--;
    }
    a[j + 1] = temp;

}

console.log(a);