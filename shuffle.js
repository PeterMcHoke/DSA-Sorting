const swap = (arr,i, j) => {
    const temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp
}

const shuffle = (array, counter=0) => {
    while (counter < array.length) {
        let random = Math.floor(Math.random() * array.length)
        swap(array, counter, random)
        counter++;
        return shuffle(array, counter)
    }
    return array
}



module.exports = shuffle;
