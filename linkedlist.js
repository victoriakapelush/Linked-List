class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head 
    }

    size() {
        let count = 0;
        let node = this.head
        while (node != null) {
            count++;
            node = node.next;
        }
        return count;
    }

    append(value) {
        let node4 = new Node(value);
        node3.next = node4;
    }
    
    prepend(value) {
        const node5 = new Node(value);
        this.head = node5;
        node5.next = node1;
    }

    lastNode() {
        if (!this.head) {
            return null;
        } 
        let node = this.head;

        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    pop() {
        let current = this.head;
        let previous = null;
        while (current.next != null) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
    }

    contains(value) {
        if (!this.head) return null;
        let pointer = this.head;
        while (pointer.next !== null) {
          if (pointer.value === value) return true;
          pointer = pointer.next;
        }
        // check the tail node as well
        return pointer.value === value ? true : false;
      }

    find (value) {
        if (!this.head) return null;
        let index = 0;
        let pointer = this.head;
        while (pointer.next !== null) {
          if (pointer.value === value) return index;
          pointer = pointer.next;
          index++;
        }
        // check the tail node as well
        return pointer.value === value ? index : null;
      };

    toString() {
        if (!this.head) return null;
        let pointer = this.head;
        let result = "";
        while (pointer.next !== null) {
          result = result.concat(`( ${pointer.value} ) --> `);
          pointer = pointer.next;
        }
        // for the tail
        result = result.concat(`( ${pointer.value} ) --> null`);
        console.log(result);
        return result;
      }
    
      insertAt(v, index) {
        let current = this.head;
        let i = 0;
        while (current) {
          if (i === index - 1) {
            const newNode = new Node(v, current.next);
            current.next = newNode;
          }
          current = current.next;
          i += 1;
        }
      }
    
      removeAt(index) {
        let current = this.head;
        let i = 0;
        while (current) {
          if (i === index - 1) {
            current.next = current.next.next
          }
          i += 1;
          current = current.next;
        }
      }
}

let node1 = new Node(2);
let node2 = new Node(5);
let node3 = new Node(10);
node1.next = node2
node2.next = node3

let list1 = new LinkedList(node1)

list1.append(10);
list1.prepend(1);
console.log(list1.size());
console.log(list1.head.value);
console.log(list1.lastNode().value);
console.log(list1.get(3).value);
console.log(list1.pop());
console.log(list1.contains(15));
console.log(list1.find(10));
console.log(list1.toString());
console.log(list1.insertAt(33, 1));
console.log(list1.removeAt(0));





