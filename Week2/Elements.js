//end of text
var newLi = document.createElement("li")

newLi.textContent = "These are the top caterpillars in NY"

var myList1 = document.getElementById("my-list1")
myList1.append(newLi)


//New H1 text with text 
var newH1 =document.createElement("H1")
newH1.textContent = "Welcome to my JS site!"
document.body.prepend(newH1)

//New paragraph with text
var newP = document.createElement("p")
newP.textContent = "All of this was created with Javascript!"
document.body.append(newP)

//style the text
newP.style.textAlign = "center"
newP.style.fontSize = "30px"

