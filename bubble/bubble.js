var number = [];

function bubbleSort(number)
{
    
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < number.length-1; i++) {
            if (number[i] > number[i+1]) {
                var temp = number[i];
                number[i] = number[i+1];
                number[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return(number);
    
}

function addNumber(){
	let number = document.getElementById("myTable").value;
	window.number.push(number);
    console.log(bubbleSort(number));
}
function change(){

  let number = document.getElementById("myTable").value
    console.log(bubbleSort(window.number));
    
}
