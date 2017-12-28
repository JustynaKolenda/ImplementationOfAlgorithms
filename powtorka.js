//średnia arytmetyczna
var arNum = [13,45,6,3,8];

function element() {
    var numAll = 0;
    for (i = 0; i < arNum.length; i++) {
        numAll += arNum[i];
    }
    return(numAll/arNum.length);
};

    console.log(element(arNum));

// test parzystości



function findOut(number){
   var i = number % 2;
   if(i != 0){
       console.log('Nie parzysta liczba');
   } else{
       console.log('Parzysta liczba');
   }
}
function paritty(){

   var number = document.getElementById("numP").value;
   console.log(findOut(number));
}

//sumowanie liczb

let suma = 0;

function sumNum(numSum){
    let dluNum = numSum.toString().length;
    for(i=0; i < dluNum;i++){
        let newNum = numSum.toString()[i];
        console.log(newNum);
        suma = parseInt(newNum) + suma;
    } return(suma);
}

function change(){
    var numSum = document.getElementById("numSum").value;
    console.log(sumNum(numSum));
}