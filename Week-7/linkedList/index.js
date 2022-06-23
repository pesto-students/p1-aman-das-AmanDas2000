class linkedList{
    constructor(data) {
        const newNode = {
            value: data,
            next:null
        }
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    append(data) {
        const newNode = {
            value: data,
            next:null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    printList() {
        let currentNode = this.head;
        let result = [];
        result.push(currentNode.value);
        while (currentNode.next!=null) {
            currentNode = currentNode.next;
            result.push(currentNode.value)
        }
        console.log(result)
    }

    prepend(data) {
        const newNode = {
            value: data,
            next:this.head
        }

        this.head = newNode
        this.length++;
    }

    insert(data, index) {
        let before = this.traverse(index-1);
        let after = before.next;

        const newNode={
            value: data,
            next:after
        }
        
        before.next = newNode;
        this.length++;
    }

    traverse(index) {
        let currentNode = this.head;
        let count = 0;
        while (count != index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    reverse() {
        let first = this.head;
        let second = first.next;
        const last = this.tail;
        this.tail = this.head;

        while (second) {
            const temp = second.next;
            second.next = first;

            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = last;
    }

    rotate(number) {
        
        let before = this.traverse(this.length-number);
        let after = before.next;
        
        this.tail.next = this.head;
        before.next = null;
        this.tail = before;
        this.head = after;
    }
}




const list = new linkedList(1); // 1

list.append(2); // 1, 2 
list.append(3); // 1, 2, 3
list.append(4); // 1, 2, 3, 4

list.prepend(0); // 0, 1, 2, 3, 4

list.insert(50, 3); // 0, 1, 2, 50, 3, 4
list.rotate(2); // 4, 0, 1, 2, 50, 3
list.reverse(); // 3, 50, 2, 1, 0, 4


list.printList();


var hasCycle = function(head) {
    let slow=head;
    let fast=head;
    while(fast&&fast.next){
        fast=fast.next.next;
        slow=slow.next;
        if(slow===fast)return true;
    }
    return false;
};
