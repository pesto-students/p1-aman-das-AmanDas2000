const parenthesisChecker = (str) => {
    let stack = [];
    let ans = false;
    for (let i = 0; i < str.length; i++){
        if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
            stack.push(str[i]);
        } else {
            if ((str[i] == ')' && stack[stack.length - 1] == '(') ||
                (str[i] == '}' && stack[stack.length - 1] == '{') ||
                (str[i] == ']' && stack[stack.length - 1] == '[')) {
                ans = true;
                stack.pop();
            } else return ans = false;
        }
    }

    return ans;
    
}

console.log('parenthesisChecker: ',parenthesisChecker('({([])})'));


const nextGreater = (arr) => {
    let stack = [];
    stack.push(arr[arr.length - 1]);
    let ans = [];
    ans.push(-1);
    // ans.push(arr[arr.length - 1]);
    for (let i = arr.length-2; i >= 0; i--){
        if (arr[i] < stack[stack.length - 1]) {
            ans.push(stack[stack.length - 1]);
            stack.push(arr[i]);
        } else {
            while (stack[stack.length - 1] < arr[i]) {
                stack.pop();
            }
            if (stack.length) ans.push(stack[stack.length - 1])
            else ans.push(-1);
            stack.push(arr[i]);
        }
    }
    return ans.reverse();
}

console.log('nextGreater: ', nextGreater([6, 8, 0, 1, 3]));


//queue with 2 stacks
class queue{
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(value) {
        this.stack1.push(value);
    }

    pop() {
        let count = 0;
        while (count < this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }
        let ans=this.stack2.pop()
        let count2 = 0;
        while (count2 < this.stack2.length) {
            this.stack1.push(this.stack2.pop());
        }
        return ans;
    }
}

let example = new queue();

example.push(1);
example.push(2);
example.push(3);
example.pop();
console.log('pop functionality: ',example.pop());
example.push(5);
console.log('queue with 2 stacks: ',example);