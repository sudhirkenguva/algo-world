function recursiveInsertionSort(arr,startInd) {

    console.log("StartIndex::::::::::::::::; ",startInd);
    console.log("arr.length ",arr.length);
    let temp = arr[startInd];
    let j = startInd-1;
    while(arr[j] > temp) {
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = temp;

    if(startInd == arr.length-1) {
        return arr;
    } else {
        return recursiveInsertionSort(arr, ++startInd)
    }
}
let a = [19, 25, -9, 29, 0, 25, 15, -9];
console.log(recursiveInsertionSort(a,1));