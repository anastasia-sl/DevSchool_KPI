class Vector {
    constructor(components) {
        this.components = components;
    }

    add(other) {
        if (this.components.length !== other.components.length) {
            throw new Error('Vectors must have the same length for addition.');
        }

        const result = this.components.map((value, index) => value + other.components[index]);
        return new Vector(result);
    }

    subtract(other) {
        if (this.components.length !== other.components.length) {
            throw new Error('Vectors must have the same length for subtraction.');
        }

        const result = this.components.map((value, index) => value - other.components[index]);
        return new Vector(result);
    }

    dot(other) {
        if (this.components.length !== other.components.length) {
            throw new Error('Vectors must have the same length for dot product.');
        }

        const result = this.components.reduce((acc, value, index) => acc + value * other.components[index], 0);
        return result;
    }

    norm() {
        const result = Math.sqrt(this.components.reduce((acc, value) => acc + value * value, 0));
        return result;
    }

    toString() {
        return `(${this.components.join(',')})`;
    }

    equals(other) {
        return (
            this.components.length === other.components.length &&
            this.components.every((value, index) => value === other.components[index])
        );
    }
}

// Example usage:
var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

console.log(a.add(b).toString());
console.log(a.subtract(b).toString());
console.log(a.dot(b));
console.log(a.equals(c));
