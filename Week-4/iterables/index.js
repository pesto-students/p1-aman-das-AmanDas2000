const fib = (n) => ({
    [Symbol.iterator]: () => {
        let i = 1;
        let prev = 0;
        let next= 0;
        return {
            next: () => {
                if (i++ <= n) {
                    if (!prev && !next) {
                        prev = 0;
                        next = 1;
                    }
                    else {
                        let temp = prev;
                        prev = next;
                        next = temp + next;
                    }
                    return {
                        value: prev,
                        done: false
                    }
                }
                return {
                    done:true
                }
            }
        }
    }
})

for (let num of fib(7)) {
    console.log(num);
} 