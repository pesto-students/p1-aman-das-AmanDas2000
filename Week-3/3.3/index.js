function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }

    return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();

log();


// Count is 0 is logged since when createIncrement is called the count is 0 and message variable contains the value as 0 of count and even if the count value has been incremented thrice but the message has the value 0 as message line is outside th scope of log function. the logger can log count as 3 if the message line is moved inside the logger function.