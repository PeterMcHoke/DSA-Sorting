const mergeSort = (arr) => {
    if (arr.length <= 1)
        return arr;

    const middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);


    left = mergeSort(left);
    right = mergeSort(right)
    return _merge(left, right, arr)
}

const _merge = (left, right, arr) => {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            arr[outputIndex++] = left[leftIndex++]
        }
        else {
            arr[outputIndex++] = right[rightIndex++]
        }

    }
    for (let i = leftIndex; i < left.length; i++) {
        arr[outputIndex++] = left[i]
    }
    for (let i = rightIndex; i < right.length; i++) {
        arr[outputIndex++] = right[i]
    }
    return arr;
}

module.exports = mergeSort