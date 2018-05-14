function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
};

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
};

var lGk8 = new Phone("LG", 250, "black");
var iPhone6S = new Phone("Apple", 2250, "silver");
var nokia5510 = new Phone("Nokia", 50, "red");

iPhone6S.printInfo();
lGk8.printInfo();
nokia5510.printInfo();
