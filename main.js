$(document).on('ready', function() {
  
//~!~!~!~!~!~!~!~!~! Part 1. !~!~!~!~!~!~!~!~!~!~\\
// 	var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
// 		this.name 	     = name;
// 		this.calories    = calories;
// 		this.vegan       = vegan;
// 		this.glutenFree  = glutenFree;
// 		this.citrusFree  = citrusFree;
	
// 	};

// 	var roastChicken 	 = new FoodItem('Chicken', 350, false, true, true);
// 	var breakfastBurrito = new FoodItem('Burrito', 250, false, false, true);
// 	var grapeFruit 	 	 = new FoodItem('Grapefruit', 120, true, true, true);

	
// 	FoodItem.prototype.toString = function () {
// 		return 'Name: '+ this.name + '\nCalories: ' + this.calories + '\nVegan: ' + this.isVegan() + 
// 			'\nGluten Free: ' + this.isGlutenFree() + '\nCitrus Free: ' + this.isCitrusFree();


// 	}

// 	FoodItem.prototype.isVegan = function(){
// 			if (this.vegan === true) {
// 			return 'yes';
// 		}
// 		else {
// 			return 'no';
// 		}
// 	}

// 	FoodItem.prototype.isGlutenFree = function() {
// 		if (this.glutenFree === true) {
// 			return 'yes';
// 		}
// 		else {
// 			return 'no';
// 		}
// 	}

// 	FoodItem.prototype.isCitrusFree = function () {
// 			if (this.citrusFree === true) {
// 			return 'yes';
// 		}
// 		else {
// 			return 'no';
// 		}
// 	}

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

var Plate = function(name, description, price, ingredients) {
	this.name 		 = name;
	this.description = description;
	this.price 		 = price;
	this.ingredients = ingredients;
}

var Order = function(plates) {
	this.plates = plates;
}

var Menu = function(plates) {
	this.plates = plates;
}

var Restaurant = function(name, description, menu){
	this.name 		 = name;
	this.description = description;
	this.menu   	 = menu;	
}

var Customer = function(dietaryPreference){
	this.dietaryPreference = dietaryPreference;
}

Drink.prototype.toString = function(){
	return 'Name: ' + this.name + '\nDescription: ' + this.description + '\nPrice: $ ' + this.price +
	'\nIngredients: ' + this.ingredients;
}

Plate.prototype.toString = function() {
	return 'Name: ' + this.name + ' \nDescription: ' + this.description + '\nPrice: $ ' + this.price +
	'\nIngredients: ' + this.ingredients;
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

Order.prototype.toString = function() {
	return 'Plates: ' + this.plates;
}

Menu.prototype.toString = function() {
	return 'Plates: ' + this.plates;
}

Restaurant.prototype.toString = function() {
	return 'Name: ' + this.name + '\nDescription: ' + this.description + '\n Menu: ' + this.menu;
}

Customer.prototype.toString = function() {
	return 'Dietary Preference: ' + this.dietaryPreference;
}

var burritoPlate   		  = new Plate('Burrito', 'green chile', 5.00 , ['tortilla', ' beans', ' cheese', ' green chile']);
var guacamolePlate 		  = new Plate('Guacomole', 'fresh avocado mashed to perfection', 5.00, ['avocado ', ' tomato', ' cumin ', ' onion']);
var margarita      		  = new Drink('House Marg', 'delicious', 5.00, ['tequila', ' lime juice', ' contreau']);


var mexicanMenu    		  = new Menu(burritoPlate, guacamolePlate, margarita)
var mexicanRestaurant     = new Restaurant("Tia Maria's", "Spanish style cuisine", mexicanMenu)

console.log(mexicanRestaurant.toString())



});