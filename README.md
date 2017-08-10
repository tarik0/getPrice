# Get Price from BP.TF using Node JS for Bots

Getting price from Backpack.tf with Node JS and returning it to 2 values;
*Value
*Type of Metal (Ref or Keys)

It basically does web scraping to get data from site.
It's on beta and sometimes cant get data correctly but It works fine for now!

# How to Use?

First you must install these modules from npm;

    npm install request
    npm install cheerio

And you need to import the getPrice.js file like that;

    var Price = require("./getprice.js")

Now you need to write a code like this;

    Price.getPrice(tag,craft,itemName,function(price,priceType){
	    console.log("Price: " + price);
	    console.log("Price Type: " + priceType)
    });

* tag : A String that includes your tag like "Vintage","Unique" and "Vintage"

* craft: A String that includes your craft type like "Craftable" or "Non-Craftable"

* itemName: A String that includes your items full name on BP.TF like "Taunt: Kazotsky Kick"

As you can see you need to define a callback too.

* price: Price of item.

* priceType: Type of price. It returns "key" or "ref"

And thats It guys thanks for using my script :)
(and sorry for my grammar if i did some mistakes)

You can donate me [here](http://steamcommunity.com/id/kesinlikletarikdeil/) or add me and ask questions:
