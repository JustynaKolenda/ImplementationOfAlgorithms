
let sum = 0;


function sharing(number){
    let stringLength = number.toString().length;
    for(i = 0; i<stringLength; i++){
    let y = number.toString()[i];
    console.log(y);
    sum = parseInt(y) + sum;
    }
    return(sum);
}
function change(){

  let number = document.getElementById("numSharing").value
    console.log(sharing(number));
    
}
