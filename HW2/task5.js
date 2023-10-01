function getRootProperty(obj, target) {
    for (const key in obj) {
        if (Array.isArray(obj[key]) && obj[key].includes(target)) {
            return key; // Found the target in the current object
        } else if (typeof obj[key] === 'object') {
            const result = getRootProperty(obj[key], target);
            if (result !== null) {
                return key + "." + result;
            }
        }
    }
    return null;
}

const object1 = {
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
        }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    }
};

const object2 = {
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
            },
            "fv": [1, 3, 6, 9]
        },
        "rmk": {
            "amr": [50, 50, 100, 150, 250]
        }
    },
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29]
    }
};

console.log(getRootProperty(object2, 116));

