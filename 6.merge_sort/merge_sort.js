function mergeSort(Arr, l, r) {
    if (l < r) {
        let m = Math.floor((l + r) / 2);
        mergeSort(Arr, l, m);
        mergeSort(Arr, m + 1, r);
        merge(Arr, l, m, r);
    }
}

function merge(Arr, l, m, r) {
    let L = [];
    let R = [];
    let n1 = m - l + 1;
    let n2 = r - m;

    // copy to temporary arrays
    for (let i = 0; i < n1; i++) {
        L[i] = Arr[l + i];
    }

    for (let j = 0; j < n2; j++) {
        R[j] = Arr[m + 1 + j];
    }

    // Merge the sorted sub arrays into Original array
    let i = 0, j = 0; k = l;

    while (i < n1 && j < n2) {
        if (L[i] < R[j]) {
            Arr[k] = L[i];
            i++;
        } else {
            Arr[k] = R[j];
            j++;
        }
        k++;
    }

    //Copy the remaining items if any
    while (i < n1) {
        Arr[k++] = L[i++];
    }

    while (j < n2) {
        Arr[k++] = R[j++]
    }
}


let Arr = [-3, 4, 95, 0, -100, 55, 45, 95, 55];
mergeSort(Arr, 0, Arr.length-1);
console.log("SortedArray::::::::::::::",Arr);