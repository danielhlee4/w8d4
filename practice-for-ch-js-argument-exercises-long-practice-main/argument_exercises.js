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
// console.log(sum(6,8,1,4))
// console.log(sum2(6,8,1,4))
// console.log(sum3(6,8,1,4))

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

Function.prototype.myBind = function(ctx, ...bArgs) {
    let that = this;
    return function(...cArgs) {
        return that.apply(ctx, bArgs.concat(cArgs));
    }
};
    // let a = markov.says.myBind(pavlov);
    // a("meow", "kush");
// markov.says("meow", "Ned");
// markov.says.myBind(pavlov, "meow", "Kush")();
// let a = markov.says.myBind(pavlov, "meow", "Kush");
// a();



markov.says.myBind(pavlov)("meow", "a tree");
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");