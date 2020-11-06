//create five H2 elements inside for loop
var H2 = document.createElement("ol")
H2.textContent = "A list of Trees"
document.body.append(H2)

var names = ["Oak Tree", "Sycamore Tree", "Coconut", "European Ash", "Blue Spruce"]


for(var i = 0; i < names.length; i++) {
    var newNames = document.createElement("li")
    //add classList
    newNames.className = "border"
    newNames.textContent = names[i]
    H2.append(newNames)
}

//style elements font size:20px weight:lighter family:sans-serif color:cornflowerblue
document.body.style.backgroundColor = "green"
H2.style.color= "cornflowerblue"
H2.style.fontWeight = "lighter"
H2.style.fontFamily = "sans-serif"
H2.style.fontSize = "20px"

