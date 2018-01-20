var arraySum = [4,5,2,1,6];

function sumArray(arraySum){
    let sum = 0;

    arraySum.forEach((element)=> {
        sum += element;

    });
    return sum;
}

console.log(arraySum);
console.log(sumArray(arraySum));