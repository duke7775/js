const stack = [];

function push(value){
    stack[stack.length] = value;
}

function pop(){
    if(stack.length === 0){
        console.log("Stack is empty");
        return null;
    }
    const top = stack[stack.length - 1];
    stack.length --;
    return top;

}

function printStack(){
    console.log(stack);
}

push(10);
push(20);
push(30);
printStack();
console.log(pop());
printStack();