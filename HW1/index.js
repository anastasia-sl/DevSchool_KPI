//First task
function multiples(number){
    if(number < 0) {
        return 0;
    }
    let sum =0;
    for(let i = 0; i < number; i++) {
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}

console.log(multiples(10));

//Second task
function towersOfHanoi(disks) {
    function moveDisks(n, source, auxiliary, target) {
        if (n === 1) {
            console.log(`Move disk 1 from rod ${source} to rod ${target}`);
            return;
        }

        moveDisks(n - 1, source, target, auxiliary);

        console.log(`Move disk ${n} from rod ${source} to rod ${target}`);

        moveDisks(n - 1, auxiliary, source, target);
    }

    moveDisks(disks, 1, 2, 3);
}

towersOfHanoi(3);

//Third task
function findNb(m) {
    let n = 1;
    let totalVolume = 0;

    while (totalVolume < m) {
        totalVolume += Math.pow(n, 3);
        n++;

        if (totalVolume === m) {
            return n - 1;
        }
    }

    return -1;
}

console.log(findNb(1071225));

//Fourth task
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    if (num <= 3) {
        return true;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(1));

//Fifth task
function highAndLow(numbers) {
    const numberArray = numbers.split(' ').map(Number);

    const maxNumber = Math.max(...numberArray);
    const minNumber = Math.min(...numberArray);

    return `${maxNumber} ${minNumber}`;
}

console.log(highAndLow("1 2 3 4 5"));

//Sixth task
function descendingOrder(n) {
    const numStr = n.toString();

    const result = parseInt(numStr.split('').sort((a, b) => b - a).join(''));

    return result;
}

console.log(descendingOrder(42145));


