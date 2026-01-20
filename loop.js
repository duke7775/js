function sumBetween(a,b){
    let sum = 0;
    for(let i = a; i <=b; i++ ){
        sum = sum + i;
    }
    return sum;
}

function sumToN(n){
    let sum = 0;
    let i = 1;
    while(i <= n){
        sum += i;
        i++;
    }
    return sum;
}

function aboveAverage(arr){
    let sum = 0;
    for( let num of arr){
        sum += num;
    }
    let avg = sum/ arr.length;
    let result = []
    for( let num of arr){
        if(num > avg){
            result.push(num);
        }
    }
    return result;

}


console.log(sumBetween(1,6));
console.log(sumToN(10));
console.log(aboveAverage([10,20,30,40,50,60]));