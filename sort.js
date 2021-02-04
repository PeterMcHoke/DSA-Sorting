const mergeSort = require('./merge-sort')
const quickSort = require('./quick-sort')
const bucketSort = require('./bucketSort')
const shuffle = require('./shuffle')

const main = (() => {
    const data = [17, 69, 90, 1, 6, 7, 64, 43, 9, 73]
    const books = [
        'To Kill a Mocking Bird',
        'Hamlet',
        'Ulysses',
        'The Lord of the Rings',
        'Of Mice and Men',
        'The Catcher in the Rye',
        'Odyssey',
        'Harry Potter',
        'Game of Thrones',
        'War and Peace',
        'Catch-22'
    ];
    console.log(mergeSort([...data]))
    console.log(quickSort([...data]))
    console.log(shuffle([...data]))
    console.log(mergeSort([...books]))
    console.log(quickSort([...books]))
})()