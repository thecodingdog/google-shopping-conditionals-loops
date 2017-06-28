var items = data.items    // items is an array of objects
//
// // 1.) Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?
// var counterQ1 = 0
// for (var i=0;i<items.length;i++) {
//   if (items[i].kind == "shopping#product") {
//     counterQ1 += 1
//   }
// }
// console.log("there are " + counterQ1+ " objects in the items array with kind == shopping#product")

// 2.) Print the title of all items with a backorder availability in inventories.
// var arrayQ2 = []
// for (var j=0; j<items.length; j++) {
//   if (items[j].product.inventories[0].availability == "backorder") {
//     arrayQ2.push(items[j].product.title)
//   }
// }
// console.log("these are the titles of the " + arrayQ2.length + " items that have backorder availability in inventories: " + arrayQ2)
// // console.log(items[0].product.inventories[0].availability)
// // console.log(items[0].product.inventories)
// // console.log(items[0].product)
// // console.log(items[0])

// 3.) Print the title of all items with more than one image link.
// var arrayQ3 = []
//
// for (var k=0; k<items.length; k++) {
//   if (items[k].product.images.length > 1) {
//     arrayQ3.push(items[k].product.title)
//   }
// }
//
// console.log("these are the titles of the " + arrayQ3.length + " items that have more than 1 image link: " + arrayQ3)

// 4.) Print all "Canon" products in the items (careful with case sensitivity).

// var arrayQ4 = []
//
// for (var l=0; l<items.length; l++) {
//   if (items[l].product.brand == "Canon") {
//     arrayQ4.push(items[l].product.title)
//   }
// }
//
// console.log("these are the titles of the " + arrayQ4.length + " items that are of the brand Canon: " + arrayQ4)

// 5.) Print all items that have an author name of "eBay" and are brand "Canon".

// var arrayQ5 = []
//
// for (var m=0; m<items.length; m++) {
//   if (items[m].product.brand == "Canon" && items[m].product.author.name == "eBay") {
//     arrayQ5.push(items[m].product.title)
//   }
// }
//
// console.log("these are the titles of the " + arrayQ5.length + " items that are of the brand Canon and have eBay as author: " + arrayQ5)

// 6.) Print all the products with their brand, price, and an image link

// var arrayQ6 = []
//
// for (var n=0; n<items.length; n++) {
//     var itemObj = {}
//     itemObj.title = items[n].product.title
//     itemObj.brand = items[n].product.brand
//     itemObj.price = items[n].product.inventories[0].price
//     itemObj.imgLink = items[n].product.images[0].link
//     arrayQ6.push(itemObj)
// }
//
// console.log(arrayQ6)
