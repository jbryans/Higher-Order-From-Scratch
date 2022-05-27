//.map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.
let arrayOfItems = [1,2,3,4,5,6]

function manipulated()  {
    return arrayOfItems.map(x => x * 2);
}
console.log(manipulated(arrayOfItems))
//.reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
let foodorders = [1, 2, 3]

let total = foodorders.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});
//.filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.
let fruit = [
{fruit: "Apple", color: "Red"},
{fruit:"Banana" , color: "Yellow" },
{fruit: "Mango" , color: "Yellow"},
{fruit: "Blueberry" , color: "Blue" },
{fruit: "Strawberry", color: "Red"}];

let newArray = fruit.filter(function (col)
{
  return col.color === "Red"
}
  )
         
        console.log(newArray)