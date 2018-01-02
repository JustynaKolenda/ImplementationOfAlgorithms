var tab = [16, 16, 4, 4, 10, 6, 14, 3, 15, 4, 4, 8, 1, 11, 12, 2, 19, 20, 7, 13, 5, 9, 1, 0, 18, 17];

function quickSort(arr){
    
    if(arr.length <= 1){
        return(arr);
    }
    let first = arr[0]; 
    let smaller = [];
    let equal = [];
    let greater = [];
    
    arr.forEach((x)=> {
        if(x < first){
            smaller.push(x);
        }else if (x == first){
            equal.push(x);
        }else if(x > first){
            greater.push(x);
        }
        
    });

    return quickSort(smaller).concat(equal).concat(quickSort(greater));
 
}

console.log(tab);
console.log(quickSort(tab));