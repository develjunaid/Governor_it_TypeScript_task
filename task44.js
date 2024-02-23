function topping(items) {
    console.log("sandwitch company");
    if (items.length == 0) {
        console.log("0 sandwitch");
    }
    else {
        topping.forEach(function (topping, index) {
            console.log(" - ".concat(index + 1, ". ").concat(topping));
        });
    }
    console.log("\n");
}
topping(null);
topping("Cheese", "Ham", "Lettuce");
topping("Turkey", "Tomato");
