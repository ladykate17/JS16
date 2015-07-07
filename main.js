$(document).on('ready', function() {
  
//~!~!~!~!~!~!~!~!~! Part 1. !~!~!~!~!~!~!~!~!~!~\\
	var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
		this.name 	     = name;
		this.calories    = calories;
		this.vegan       = vegan;
		this.glutenFree  = glutenFree;
		this.citrusFree  = citrusFree;
	
	};

	var roastChicken 	 = new FoodItem('Chicken', 350, false, true, true);
	var breakfastBurrito = new FoodItem('Burrito', 250, false, false, true);
	var grapeFruit 	 	 = new FoodItem('Grapefruit', 120, true, true, true);

	
	FoodItem.prototype.toString = function () {
		return '\tName: '+ this.name + '\nCalories: ' + this.calories + '\nVegan: ' + this.isVegan() + 
			'\nGluten Free: ' + this.isGlutenFree() + '\nCitrus Free: ' + this.isCitrusFree();


	}

	FoodItem.prototype.isVegan = function(){
			if (this.vegan === true) {
			return 'yes';
		}
		else {
			return 'no';
		}
	}

	FoodItem.prototype.isGlutenFree = function() {
		if (this.glutenFree === true) {
			return 'yes';
		}
		else {
			return 'no';
		}
	}

	FoodItem.prototype.isCitrusFree = function () {
			if (this.citrusFree === true) {
			return 'yes';
		}
		else {
			return 'no';
		}
	}

// console.log(roastChicken.toString())
// console.log(breakfastBurrito.toString())
// console.log(grapeFruit.toString())

//~!~!~!~!~!~!~!~!~!~!~ Part 2. ~!~!~!~!~!~!~!~!~!~\\

var Drink = function(name, description, price, ingredients) {
	this.name 		 = name;
	this.description = description;
	this.price 		 = price;
	this.ingredients = ingredients;
}

Drink.prototype.toString = function(){
	var result = ''
	for (var i=0; i < this.ingredients.length; i++){
 		result = result + this.ingredients[i].toString()

	}

	return 'Name: ' + this.name + '\nDescription: ' + this.description + '\nPrice: $ ' + this.price +
	'\nIngredients: ' + result;
}

var Plate = function(name, description, price, ingredients) {
	this.name 		 = name;
	this.description = description;
	this.price 		 = price;
	this.ingredients = ingredients;
}

Plate.prototype.toString = function() {
	var result = ''
	for (var i=0; i < this.ingredients.length; i++){
 		result = result + this.ingredients[i].toString()
 	}


	return 'Name: ' + this.name + ' \nDescription: ' + this.description + '\nPrice: $ ' + this.price +
	'\nIngredients: \n' + this.ingredients;
}


	Plate.prototype.isVegan = function() {
		if (this.isVegan === true) {
			return 'yes';
		}
		else {
			return 'no';
		}
	}

	Plate.prototype.isGlutenFree = function() {
		if (this.isGlutenFree === true) {
			return 'yes';
		}
		else {
			return 'no';
		}
	}


	Plate.prototype.isCitrusFree = function() {
		if (this.isCitrusFree === true) {
			return 'yes';
		}
		else {
			return 'no';
		}
	}

// We need to come back to this
var Menu = function(plates) {
	var result = ''
	for (var i = 0; i < this.menu.length; i++) {
		result = result + this.menu[i].toString()
	}
	return ''
}


Menu.prototype.toString = function() {
	var result = ''
	for (var i = 0; i< this.plates.length; i++) {
		result = result + this.plates[i].toString()
	}



	// var platesToString = this.plate.toString()
	return 'Plates: ' + this.plates;
}



var Order = function(plates) {
	this.plates = plates;
}

Order.prototype.toString = function() {
	return 'Plates: ' + this.plates;
}



var Customer = function(dietaryPreference){
	this.dietaryPreference = dietaryPreference;
}


var Restaurant = function(name, description, menu){
	this.name 		 = name;
	this.description = description;
	this.menu   	 = menu;	
}

Restaurant.prototype.toString = function() {
	var result = ''
	for (var i = 0; i < this.menu.length; i++) {
		result = result + this.menu[i].toString()
	}
	return 'Name: ' + this.name + '\nDescription: ' + this.description + '\n Menu: ' + this.menu;

}

Customer.prototype.toString = function() {
	return 'Dietary Preference: ' + this.dietaryPreference;
}

var tequila 	= new FoodItem('Tequila', 20, true, false, true);
var limeJuice   = new FoodItem("Lime Juice", 40, true, true, false);
var contreau 	= new FoodItem('Contreau', 50, true, true, false);
var avocado 	= new FoodItem('Avocado', 50, true, true, true);
var tomato 	    = new FoodItem('Tomato', 30, true, true, true);
var cumin 	    = new FoodItem('Cumin', 5, true, true, true);
var onion  		= new FoodItem('Onion', 10, true, true, true);
var tortilla 	= new FoodItem('Tortilla', 80, true, false, true);
var beans 		= new FoodItem('Beans', 20, true, true, true);
var cheese		= new FoodItem('Cheese', 50, false, true, true);
var greenChile 	= new FoodItem('Green Chile', 30, true, true, true);


var burritoPlate   		  = new Plate('Burrito', 'green chile', 5.00 , [tortilla, beans, cheese, greenChile]);
var guacamolePlate 		  = new Plate('Guacomole', 'fresh avocado mashed to perfection', 5.00, [avocado, tomato, cumin, onion]);
var margarita      		  = new Drink('House Marg', 'delicious', 5.00, [tequila, limeJuice, contreau]);
console.log(margarita.toString());
console.log(guacamolePlate.toString());
// console.log(burritoPlate.toString());

var mexicanMenu    		  = new Menu(burritoPlate, guacamolePlate, margarita);
var mexicanRestaurant     = new Restaurant("Tia Maria's", "Spanish style cuisine", mexicanMenu);

console.log(mexicanRestaurant.toString())




});