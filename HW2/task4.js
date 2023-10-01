function unpackSausages(truck) {
    let displayCounter = [];
    let sausageCount = 0;
    let rewardCount = 0;

    for (const box of truck) {
        for (const package of box) {
            if (isValidSausagePackage(package)) {
                displayCounter.push(package);
                sausageCount++;

                if (sausageCount % 5 === 0) {
                    rewardCount++;
                    if (rewardCount === 5) {
                        rewardCount = 0;
                        displayCounter.pop();
                    }
                }
            }
        }
    }

    return displayCounter.join(" ");
}

function isValidSausagePackage(package) {
    if (package.startsWith("[") && package.endsWith("]") && package.length % 4 === 0) {
        // Valid sausage package
        return true;
    }
    return false;
}

// Test case
const truck = [
    ["(-)", "[IIII]", "[))))]"],
    ["IuI", "[llll]"],
    ["[@@@@]", "UwU", "[IlII]"],
    ["IuI", "[))))]", "x"],
    []
];

