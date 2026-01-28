class Stack{
    constructor(){
        this.stack = []

    }
    push(value){
        this.stack[this.stack.length] = value;
    }

    pop(){
        if(this.stack.length === 0){
            console.log("Stack is empty");
            return null;
        }
        const top = this.stack[this.stack.length - 1];
        this.stack.length--;
        return top;
    }

    printStack(){
        console.log(this.stack);
    }
    
}

const s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.printStack();
console.log(s.pop());
s.printStack();
