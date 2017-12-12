
var num = [10,11,12,16];

function average() {
    var numAll = 0;
    for (i = 0; i < num.length; i++) {
    numAll += num[i];
    }

    return(numAll/num.length);
};

console.log(average(num));