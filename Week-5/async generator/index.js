function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield new Promise((resolve) => setTimeout(()=>resolve(i), 1000));
  }
}


let generator =generateSequence(1, 5);
const start =async() => {
  for (let el of generator) {
    console.log(await el)
  } 
};

start();





