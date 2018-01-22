var tab = [4,3,6,7,8];
var number = 1;

function schElement(tab,number){
    tab.push(number);

    let i = 0;
    while(tab[i] != number){
        i++;
    }
    if(i == (tab.length-1)){
        return false;
    }else{
        return true;
    };

}

console.log(schElement(tab,number));