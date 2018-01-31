function Stack(){
    this.data = [];
}

Stack.prototype.add = function(element){
    this.data.push(element)
}
Stack.prototype.remove = function(){
    return this.data.pop();
}
Stack.prototype.view = function(){
    return this.data[(this.data.length)-1];
}
Stack.prototype.reset = function(){
    this.data = [];
}
Stack.prototype.size = function(){
    return this.data.length;
}
Stack.prototype.isPopulated = function() {
	return this.data.length != 0
}

var dogs = new Stack;
 
console.log("Is array empty? "+dogs.isPopulated()) 
dogs.add("maja"); 
console.log("schow last add dog: "+ dogs.view()); 
dogs.add("milus");
console.log("add next last add: "+ dogs.view());
console.log("deleted last add: "+ dogs.remove()); 
console.log("show array: "+ dogs.view()); 
dogs.add("reks");
dogs.add("buka");
dogs.add("lucky");
console.log("show array after add new: "+ dogs.view()); 
console.log("how many dogs in array: "+ dogs.size()); 
dogs.reset();
console.log("reset array: "+ dogs.view()); 
console.log("how many dogs now: "+ dogs.size());