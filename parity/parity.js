

function parity(number){
    var i = number % 2;

    if(i != 0){
        return "Nie parzysta";
    } else {
        return "Parzysta";
    }

}

function change(){

   number = document.getElementById("numParity").value
    console.log(parity(number));
}
