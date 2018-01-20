var allNum = [3,5,67,4,2,1];

function smallNumber(allNum){
    let small = null;

    allNum.forEach((element) =>{
        if(small == null || small > element){
            small = element;
        }
    });
    return small;
}
console.log(smallNumber(allNum));