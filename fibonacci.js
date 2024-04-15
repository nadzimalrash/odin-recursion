function fibs(n, recursive = false) {
    if (n >= 1 && n === Math.round(n)) {
        let sequence = [0,1]
        if (n <= 2) {
            sequence.length = n
            return sequence
        } else if (n > 2) {
            if (recursive === false) {
                return fibsIter(sequence, n)
            } else {
                return fibsRec(sequence, n)
            }
        }
    } else {
        return invalidN()
    }
}

function fibsRec(arr, n) {
    if (arr.length <= n-1) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        fibsRec(arr, n)
    }
    return arr
}

function fibsIter(arr, n) {
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr
}

function invalidN() {
    return "N must be a round number of 1 and above"
}