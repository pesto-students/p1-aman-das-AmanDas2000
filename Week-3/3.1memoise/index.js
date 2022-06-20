const memoise = (fn) => {
  let cache = new Map();
  return function (...args) {
    let key = args.toString();
    if (cache.has(key)) {
        console.log('cached:');
        console.log(cache);
      return cache.get(key);
    }
    cache.set(key, fn(...args));
      console.log('adding to cache:');
      console.log(cache);
    return cache.get(key);
  };
};

const addNumbers = (...args) => {
  let sum = 0;
  for (let i of args) {
    sum = sum + i;
  }
  return sum;
};

const time = (fn) => {
  console.time();
  console.log(fn());
  console.timeEnd();
};

const callBack = memoise(addNumbers);


time(() => callBack(100,100));
time(() => callBack(100));
time(() => callBack(100,200));
time(() => callBack(100, 100));



