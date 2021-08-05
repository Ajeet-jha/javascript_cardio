class NumberOperations {
    constructor(number) {
        this.number = number;
    }

    findMaxMin(arr) {
        console.log(this.inRange);
        var max = arr[0];
        var min = arr[0];
        for (let i = 1; i <= arr.length - 1; i++) {
            max < arr[i] ? max = arr[i] : ''
            min > arr[i] ? min = arr[i] : ''
        }
        return { max, min }
    }

    reverseANum() {
        let tempNum = this.number;
        let sum = 0;
        while (tempNum > 0) {
            let remainder = tempNum % 10;
            sum = sum * 10 + remainder;
            tempNum = parseInt(tempNum / 10);
        }
        return sum;
    }

    checkPrime(num) {
        if (num) {
            this.number = num;
        }
        for (let i = 2; i < this.number; i++) {
            if (this.number % i === 0) return false;
        }
        return this.number > 1
    }

    checkPalindromeNumber(num) {
        if (num) {
            this.number = num;
        }
        let localNum = this.number;
        let reverseNum = 0;
        while (localNum > 0) {
            let remainder = localNum % 10;
            reverseNum = reverseNum * 10 + remainder;
            localNum = parseInt(localNum / 10)
        }
        return this.number === reverseNum;
    }

    checkArmstrongNumber(num) {
        if (num) {
            this.number = num;
        }
        let localNum = this.number;
        let sumOfCube = 0;
        while (localNum > 0) {
            let remainder = localNum % 10;
            sumOfCube = sumOfCube + remainder * remainder * remainder;
            localNum = parseInt(localNum / 10);
        }
        return this.number === sumOfCube;
    }

    checkPrimeInInterval(minNum, maxNum) {
        const tempArr = [];
        for (let i = minNum; i <= maxNum; i++) {
            this.checkPrime(i) ? tempArr.push(i) : "";
        }
        return tempArr;
    }

    checkPalindromeNumberInInterval(minNum, maxNum) {
        const palindromeNumberList = [];
        let i = minNum;
        while (i <= maxNum) {
            this.checkPalindromeNumber(i) ? palindromeNumberList.push(i) : "";
            i++;
        }
        return palindromeNumberList;
    }

    checkArmstrongInInterval(minNum, maxNum) {
        const armstrongNumberList = [];
        let i = minNum;
        while (i <= maxNum) {
            this.checkArmstrongNumber(i) ? armstrongNumberList.push(i) : "";
            i++;
        }
        return armstrongNumberList;
    }

    ifIsrange(minNum, maxNum, type) {
        switch (type) {
            case "prime":
                return this.checkPrimeInInterval(minNum, maxNum);
            case "palindromeime":
                return this.checkPalindromeNumberInInterval(minNum, maxNum)
            case "armstrong":
                return this.checkArmstrongInInterval(minNum, maxNum)
            default:
                return [];
        }

    }
}

const number = new NumberOperations(153);

console.log({
    findMaxMin: number.findMaxMin([12, 4, 67, 13])
});

console.log({
    reverseANum: number.reverseANum()
});

console.log({
    checkPrime: number.checkPrime()
});

console.log({
    checkPalindromeNumber: number.checkPalindromeNumber()
});

console.log({
    checkArmstrongNumber: number.checkArmstrongNumber()
});

console.log({
    ifIsrange: number.ifIsrange(1, 100, "prime")
});

console.log({
    ifIsrange: number.ifIsrange(1, 100, "palindromeime")
});

console.log({
    ifIsrange: number.ifIsrange(1, 1000, "armstrong")
});