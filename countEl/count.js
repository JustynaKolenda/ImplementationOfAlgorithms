var arrCount = [4,5,6,7,8,3,5,4,5,1];
var searchNum = 5;

function countElement(arrCount,searchNum){
    let increment= 0;

    arrCount.forEach((element)=>{

        if(element == searchNum){
            increment ++;
        }
    });
    return increment;

}



console.log("Schearched number",searchNum);
console.log("Array",arrCount);
console.log(countElement(arrCount,searchNum));