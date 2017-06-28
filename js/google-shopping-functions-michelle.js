// Create the following functions.
//
// 1.) getItems(objectData)
//
// input: json object
// returns: an array of items
// Create a function called getItems that simply returns the items array from the google product object.
//
// Note all other functions (below) use the return of this function as their input.

var data = require('../products.json')

function getItems(jsonObj){
  var items = jsonObj.items
  return items
}

var items = getItems(data)

// 2.) getItemsByBrand(items, brand)
//
// input: an array of items, a string of a brand to filter with
// returns: an array of items (of a specific brand)
// Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
//
// Test this function by searching for Sony, Canon, Nikon and Panasonic.

function getItemsByBrand(items, brand) {
  var itemsByBrandArr = items.filter(function(item) {
    return (item.product.brand === brand)
  })
  return itemsByBrandArr
}

function getTitlesOfItems(selectedItems) {
  var titlesOfItems = selectedItems.map(function(item) {
    return item.product.title
  })
  return titlesOfItems
}

// console.log(getTitlesOfItems(getItemsByBrand(items, "Canon")))
// console.log(getTitlesOfItems(getItemsByBrand(items, "Panasonic")))

// 3.) getItemsByAuthor(items, author)
// input: an array of items, a string of an author to filter with
// returns: an array of items (of a specific author)
// Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.
// Test this function by searching for Target, CDW, eBay

function getItemsByAuthor (items, author) {
  var itemsByAuthorArr = items.filter (function (item) {
    return (item.product.author.name === author)
  })
  return itemsByAuthorArr
}

// console.log(getTitlesOfItems(getItemsByAuthor(items, 'Target')))

// 4.) getAvailableProducts(items)
//
// input: an array of items
// returns: an array of items (that are available)
// Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)

function getAvailableProducts(items) {
  var availableProductsArr = items.filter(function(item){
    return (item.product.inventories[0].availability === 'inStock')
  })
  return availableProductsArr
}

// console.log(getTitlesOfItems(getAvailableProducts(items)))

// 5.) Use your functions
//
// Use the functions you created in 1 - 5 to ouput (console.log) the following lists of items.
//
// All items made by Sony.
// All items made by Sony that are available.
// All available items by the author "Adorama Camera"
// All items made by Nikon with the author eBay.

console.log(getTitlesOfItems(getItemsByBrand(items, 'Sony')))
console.log(getTitlesOfItems(getItemsByBrand(getAvailableProducts(items), 'Sony')))
console.log(getTitlesOfItems(getItemsByAuthor(getAvailableProducts(items), "Adorama Camera")))
console.log(getTitlesOfItems(getItemsByAuthor(getItemsByBrand(items,'Nikon'), "eBay")))
