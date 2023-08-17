function sum() {
    let total = 0;

    for (i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total;
};



console.log(sum(6,8,1,4))