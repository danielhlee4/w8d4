function sum() {
    let total = 0;

    for (i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total;
};

let sum2 = function(num1, num2, ...otherNums) {
    let total = num1 + num2;
    let i = 0;
    while (i < otherNums.length) {
        total += otherNums[i];
        i++
    };
    return total
};

let sum3 = function(num1, num2, ...otherNums) {
    let total = num1 + num2;
    otherNums.forEach(function(num) {
        total += num;
    });
    return total;
};
console.log(sum(6,8,1,4))
console.log(sum2(6,8,1,4))
console.log(sum3(6,8,1,4))




