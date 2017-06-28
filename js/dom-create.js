document.addEventListener('DOMContentLoaded', function () {
  // THIS LINE STARTS THE PARSING OF THE JSON
  var json = {}

  fetch('../products.json')
  .then(res => res.json())
  .then((data) => {
    // DO NOT REMOVE ANYTHING BEFORE THIS LINE
    console.log('Checkout this JSON! ', data)
// functions to get Items
var itemArr = []

function getItems (wholeSet) {
  wholeSet.items.map(function (e) {
    itemArr.push(e)
  })
  return itemArr
  // console.log(itemArr)
}


function getItemsByBrand (items, brandToMatch) {
  var itemsByBrand = []
  items.map(function (e) {
    var brand = e.product.brand
    if (brand == brandToMatch) { itemsByBrand.push(e) }
  })
  // console.log(itemsByBrand)
  return itemsByBrand
}

function getItemsByAuthor (items, authorToMatch) {
  var itemsByAuthor = []
  items.map(function (e) {
    var author = e.product.author.name
    if (author == authorToMatch) { itemsByAuthor.push(e) }
  })
  return itemsByAuthor
  // console.log(itemsByAuthor)
}

// defining inital stuff
var h1 = document.querySelector('h1')
var cartButton = document.querySelector('#add')
cartButton.addEventListener('click', addToCart)

var searchButton = document.querySelector('#search')
searchButton.addEventListener('click', search)

var searchByAuthorButton = document.querySelector('#searchByAuthor')
searchByAuthorButton.addEventListener('click', searchByAuthor)

var clearCartButton = document.querySelector('#clearCart')
clearCartButton.addEventListener('click', clearCart)

// function to populate shopping list
var cartList = []

function check() {
  cartList = []
  for (var i = 0; i < itemArr.length; i++) {
  var checked = document.getElementById(i).checked
  if (checked === true) {cartList.push(i)}
  }
  // console.log(cartList);
}

function clearCart() {
  var myCartul = document.querySelector('.cart')
  myCartul.innerHTML = ''
}

function loadShopList () {
  getItems(data)
  var shopping = document.querySelector('.shopping')
  // for checkboxes
  for (var i = 0; i < itemArr.length; i++) {
    var allCkbox = document.createElement('input')
    allCkbox.type = 'checkbox'
    allCkbox.id = parseInt(i)
    shopping.appendChild(allCkbox)
    allCkbox.addEventListener('click', check)

    // for items
    var allItems = document.createElement('li')
    allItems.textContent = itemArr[i].product.title
    shopping.appendChild(allItems)
    // console.log(shopping);
  }
}

loadShopList()

// function to clearShopList
function clearShopList () {
  var shopping = document.querySelector('.shopping')
  shopping.innerHTML = ' '
  itemArr = []
}

// function to filter by brand

function search () {
  clearShopList()
  // getting items
  var brandInput = document.getElementById('searchInput').value
  var selected = getItemsByBrand(getItems(data), brandInput)

  // displaying items
  var shopping = document.querySelector('.shopping')
  for (var i = 0; i < selected.length; i++) {
    var allCkbox = document.createElement('input')
    allCkbox.type = 'checkbox'
    allCkbox.id = parseInt(i)
    shopping.appendChild(allCkbox)
    allCkbox.addEventListener('click', check)

    var specificItems = document.createElement('li')
    specificItems.textContent = selected[i].product.title
    shopping.appendChild(specificItems)
  }
}

function searchByAuthor () {
  clearShopList()
  var authorItems = []
  // getting items
  var authorInput = document.getElementById('searchByAuthorInput').value
  authorItems = getItemsByAuthor(getItems(data), authorInput)
  // alert(selectedItems.length)
  // displaying items
  var shopping = document.querySelector('.shopping')
  for (var i = 0; i < authorItems.length; i++) {
    var authorList = document.createElement('li')
    authorList.textContent = authorItems[i].product.title
    shopping.appendChild(authorList)
  }
}

//function to add specific items to cart
function addToCart () {
  //test
  var shoppingList = document.querySelectorAll('.shopping li')
  // console.log(shoppingList.length)

  var myCartul = document.querySelector('.cart')
  for (var i = 0; i < cartList.length; i++) {
    var cartListItem = document.createElement('li')
    console.log(shoppingList[cartList[i]].textContent)
    cartListItem.textContent = shoppingList[cartList[i]].textContent
    myCartul.appendChild(cartListItem)
}
  //for full shopping list
//   var myCartul = document.querySelector('.cart')
//   for (var i = 0; i < cartList.length; i++) {
//     var cartListItem = document.createElement('li')
//     cartListItem.textContent = itemArr[cartList[i]].product.title
//     myCartul.appendChild(cartListItem)
// }
cartList = []
}

//function to add to cart
// function add () {
//   var shoppingList = document.querySelectorAll('.shopping li')
//   var myCartul = document.querySelector('.cart')
//   var lastItem = shoppingList[shoppingList.length - 1]
//   console.log(lastItem)
//   myCartul.appendChild(lastItem)
// }

})
})
