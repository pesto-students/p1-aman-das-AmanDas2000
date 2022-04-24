const getNumber = () => {
  const randomNumber = parseInt(Math.random() * 1000);
  console.log('random number is:', randomNumber);
  if (randomNumber % 5 !== 0) return true;
  else return false;
};

const promise = new Promise((resolve, reject) => {
  resolve();
});

function CustomPromise(executor) {
  let onResolve;
  let onReject;
  let fulfilled = false;
  let rejected = false;
  let called = false;
  let value = null;

  function resolve(val) {
    fulfilled = true;
    value = val;

    if (typeof onResolve === 'function') {
      onResolve(val);
      called = true;
    }
  }

  function reject(val) {
    rejected = true;
    value = val;

    if (typeof onReject === 'function') {
      onReject(val);
      called = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;
    if (fulfilled && !called) {
      called = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if (rejected && !called) {
      called = true;
      onReject(value);
    }
    return this;
  };

  executor(resolve, reject);
}

const mypromise = new CustomPromise((resolve, reject) => {
  getNumber() ? setTimeout(() => resolve('Not divisible by 5'), 2000) : setTimeout(() => reject('Divisible by 5'), 3000);
})
  .then((val) => console.log('fullfilled',val))
  .catch((e) => console.log('caught', e));


