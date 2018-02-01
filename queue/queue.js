function Queue(){
    this.data = [];
};
Queue.prototype.enqueue = function(element){
    this.data.push(element);
};
Queue.prototype.dequeue = function(){
    return this.data.shift();
};
Queue.prototype.viewAll = function(){
    return this.data.join(', ');
};
Queue.prototype.front = function(){
    return this.data[0];
};
Queue.prototype.qeuLength = function(){
    return this.data.length;
};
Queue.prototype.isEmpty = function() {
	if(this.data.length === 0) {
		return true;
	} else {
		return false;
	}
};

var dogs = new Queue;
 
console.log("Is array empty? "+dogs.isEmpty()) 
dogs.enqueue("maja"); 
console.log("schow last add dog: "+ dogs.viewAll()); 
dogs.enqueue("milus");
console.log("add next last add: "+ dogs.viewAll());
console.log("deleted last add: "+ dogs.dequeue()); 
console.log("show array: "+ dogs.viewAll()); 
dogs.enqueue("reks");
dogs.enqueue("buka");
dogs.enqueue("lucky");
console.log("show array after add new: "+ dogs.viewAll()); 
console.log("how many dogs in array: "+ dogs.qeuLength()); 

