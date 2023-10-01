function maxLeadersHonor(arr, d) {
    const n = arr.length;
    let maxHonor = -Infinity;

    for (let i = 0; i < n; i++) {
        let currentHonor = 0;

        for (let j = 0; j < d; j++) {
            currentHonor += arr[(i + j * (n / d)) % n];
        }

        maxHonor = Math.max(maxHonor, currentHonor);
    }

    return maxHonor;
}

console.log(maxLeadersHonor([1, 2, 3, 4], 2));
