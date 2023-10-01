function findEvenIndex(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        const leftSum = arr.slice(0, i).reduce((acc, curr) => acc + curr, 0);
        const rightSum = arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0);

        if (leftSum === rightSum) {
            return i;
        }
    }

    return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));

