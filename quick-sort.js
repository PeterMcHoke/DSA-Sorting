const quickSort = (array, start=0, end=array.length) => {
    if (start >= end) {
        return array;
    }
    const pivot = array[end-1];
    const pivotIndex = _partition(array, start, end, pivot);
    array = quickSort(array, start, pivotIndex)
    array = quickSort(array, pivotIndex+1, end)
    return array;
}

const _swap = (array, i, j) => {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};


const _partition = (array, low, high, pivot) => {
    let j = low;
    for (let i = low; i < high - 1; i++) {
        if (array[i] <= pivot) {
            _swap(array, i, j)
            j++
        }
    }
    _swap(array, high-1, j)
    return j;
}

module.exports = quickSort