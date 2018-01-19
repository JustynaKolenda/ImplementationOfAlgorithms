var number = [];

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
function addNumber(){
	let number = document.getElementById("quickSort").value;
	window.number.push(parseInt(number));
    console.log(window.number);
}
function change(){

  let number = document.getElementById("quickSort").value
  console.log(quickSort(window.number));
    
}


console.log(number);
console.log(quickSort(number));