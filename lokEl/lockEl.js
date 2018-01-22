var arrLock = [2,4,6,3,4,7,22];
var num = 14;

function loockingElement(arrLock,num){

    for(var i=0;i < arrLock.length;i++){
        if(arrLock[i] == num){
            return true;
        }  
    };
    
    return false;
}
console.log(loockingElement(arrLock,num));