let A = [10, 3, 15, 8, -4, 99, 22];

function recursiveBubbleSort(a, len) {
    if (len > 1) {
        let temp;
        let isSwapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (a[i] > a[i + 1]) {
                isSwapped = true;
                temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
            }
        }
        if(isSwapped)
        return a;
        else 
        return recursiveBubbleSort(a, 1);
    } else {
        return a;
    }
}

console.log(recursiveBubbleSort(A, A.length));