const input = [3, 2, 1, 13, 8, 5, 0, 1]

function mergeSort(arr) {
    if (arr.length === 1){ // array of 1 number is considered sorted
        return arr
    } else {
        const middle = Math.floor(arr.length / 2)
        const leftArr = arr.slice(0, middle)
        const rightArr = arr.slice(middle)
        return merge(mergeSort(leftArr), mergeSort(rightArr))   
    }
}

function merge(leftArr, rightArr) {
    const output = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            output.push(leftArr.shift())
        } else {
            output.push(rightArr.shift())
        }
    }
    return [...output, ...leftArr, ...rightArr]
}

console.log(mergeSort(input))