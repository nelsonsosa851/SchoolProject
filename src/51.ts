// Solution 1: Simple counter example

class Counter {
    count = 0;

    increment() {
        this.count++;
    }

    decrement() {
        if (this.count > 0) {
            this.count--;
        }
    }
}

const counter = new Counter();
counter.increment(); // Output: 1
counter.decrement(); // Output: 0
console.log(counter.count); // Output: 2

// Solution 2: Infinite loop with setTimeout
setTimeout(() => console.log("Counter is at 0"), 1000);

