let a = 10;
let b = 3.14;
let c = 10;
let arr1 = [1,2,3];
let arr2 = [1,2,3];

let arr3 = arr1;
arr3.push(4);

function changeArr(arr){
    arr = [10,20,30]
}

function changeArr2(arr){
    arr.length = 0;
    arr.push(10,20,30)
}

console.log(typeof a);
console.log(typeof b);
console.log(a === c);
console.log(arr1 === arr2);
console.log(arr1);
console.log(arr3);
console.log(arr1 === arr3);

let list = [40,50,60];
changeArr(list);
console.log(list);

changeArr2(list);
console.log(list);