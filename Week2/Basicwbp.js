//New H1 text with text 
var newH1 = document.createElement("H1")
newH1.textContent = "I saw 2 caterpillars yesterday"
document.body.prepend(newH1)
//style the H1 
newH1.style.textAlign = "center"


//Create a navbar with links(doesn't need to work)
//insert inside the entire body
var navB =document.createElement("nav")
navB.textContent = "Love them"
document.body.insertBefore(navB, document.body.children[0])

//add at begining of list
var newLi = document.createElement("li")
newLi.textContent = "Monarch"
var list1 = document.getElementById("list1")
list1.append(newLi)
//style the list
list1.style.display= "flex"
list1.style.flexDirection = "column"
list1.style.alignItems= "center"
newLi.style.textAlign = "center"

//Create a Second item in the list
var newLi =document.createElement("li")
newLi.textContent = "Butterflies"
var list1 = document.getElementById("list1")
list1.prepend(newLi)

//New paragraph with text
var newP = document.createElement("p")
newP.textContent = "I wanted to pick up the caterpillars but I did not. I just let the course of life take its place!"
document.body.append(newP)

//style the paragraph text
newP.style.textAlign = "center"
newP.style.fontSize = "10px"

document.body.style.background = "lightblue"

