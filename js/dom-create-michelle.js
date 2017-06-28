var body = document.body
var p = document.querySelector("p")
p.textContent = "This is my shopping list"

var button = document.createElement("button")
button.textContent = "Add new element"
var h2 = document.querySelector("h2")
h2.appendChild(button)

function paraCreator() {
  var newP = document.createElement("p")
  newP.textContent = "This is my new paragraph"
  body.appendChild(newP)
}

button.addEventListener("click", addToCart)

function liCreator() {
  var newLi = document.createElement("li")
  newLi.textContent = "This is what goes into my list element"
  var ul = document.querySelectorAll("ul")
  ul[1].appendChild(newLi)
}

function addToCart() {
  // var shoppingList = document.querySelector("#shoppingList")
  // var allLiElementsInSL = shoppingList.querySelectorAll("li")
  var allLiElementsInSL = shoppingList.querySelectorAll("#shoppingList li")
  var itemToAdd = allLiElementsInSL[allLiElementsInSL.length-1]
  var allTheUls = document.querySelectorAll("ul")
  allTheUls[1].appendChild(itemToAdd)
}
