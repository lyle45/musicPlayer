var animal = function(name, type){
	this.name = name;
	this.type = type;
	return this;
}
var dog = function(typeOfDog){
	this = new animal('dogname', 'dog')
	this.typeOfDog = typeOfDog;
}
animal.prototype.speak = function(){
	console.log('animal speak');
}
dog.prototype.bark = function(){
	console.log('bark');
}

var lavrador = new dog('lavrador');

lavrador.speak()
lavrador.bark()
util.util._extend(animal.prototype.speak, function(){
	console.log('bark');
});