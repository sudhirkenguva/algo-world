let a = [12, 97, 34, 56, -3, 100, 101];

for (let i = 0; i < a.length - 1; i++) {
    for (let j = i+1; j < a.length; j++) {
        if(a[i] > a[j]) {
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}

console.log(a);