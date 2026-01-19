function sayHello(){
    console.log("Hello!");
}

function isAdult(age){
    if (age >= 18){
        return true;
    }
    else{
        return false;
    }
}
function sumArray(arr){
    let total = 0;
    for (let i = 0; i< arr.length;i++){
        total = total + arr[i];
    }
    return total;
}

function reverseString(str){
    let result = "";
    for( let i = str.length - 1; i >=0; i--){
        result += str[i];
    }
    return result;
}

sayHello();
console.log(isAdult(19));
console.log(sumArray([1,2,3,4,5]));
console.log(reverseString("Hello"))
