async function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield i;
  }
}

const start = async () => {
  let generator = generateSequence(1, 5);
  for await (let value of generator) {
    console.log(value);
  }
};

start();

const doTask1 = () => { console.log('task 1'); doTask2() };
const doTask2 = () => { console.log('task 2'); doTask3() };
const doTask3 = () => console.log('task 3');

doTask1();




