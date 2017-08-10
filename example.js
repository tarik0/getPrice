var Price = require("./getprice.js")
//var price = new Price(tag,craft,item,callBack)


Price.getPrice("Vintage","Craftable","Gunslinger",function(price,priceType) {
	console.log("It's " + price + " " + priceType);
}) 