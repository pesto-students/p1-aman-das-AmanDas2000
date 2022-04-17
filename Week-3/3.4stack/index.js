function createStack() {
  let arr = [];
  return {
    items() {
      console.log('stack :', arr);
    },
    push(item) {
        arr.push(item);
        console.log('pushed: ', item);
    },
    pop() {
        const popped=arr.pop();
        console.log('popped: ', popped);
    },
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.push(5);
stack.pop();
stack.items();
