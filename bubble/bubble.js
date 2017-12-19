var number = [34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1];
 
 console.log('Table on begining '+ number);
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
 

/*function change(){

  let number = document.getElementById("myTable").value
    console.log(bubbleSort(number));
}
*/

bubbleSort(number);
console.log("Table after " + bubbleSort(number));