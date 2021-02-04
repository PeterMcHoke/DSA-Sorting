//we are going to assume there aren't any duplicates
const _swap = (arr, left, right) => {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
}

const bucketSort = (arr, max, min) => {
    let minIndex = arr.indexOf(min);
    let maxIndex = arr.indexOf(max)

    _swap(arr, minIndex, 0)
    _swap(arr, maxIndex, arr.length-1)

    let left = 1
    let right = arr.length - 2;

    while (left < right) {
        if (arr[left] > arr[right])
            _swap(arr, arr[left], arr[right])
        left++
    }
    return arr;
}

module.exports = bucketSort;