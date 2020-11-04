//H1 tag with for loop
var newH1 = document.createElement("H1")
newH1.textContent = "Hello World"
document.body.append(newH1)

for (var i = 0; i < 10; i++){
    var newH1 = document.createElement("H1")
newH1.textContent = "Hello World"
document.body.append(newH1)
    console.log("Hello World")
    newH1.style.color = "red"
}

//create a numhered list
var list1 = document.createElement("ol")
list1.textContent = "A list"
document.body.append(list1)


//add a list of names inside a for loop
var names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]


for(var i = 0; i < names.length; i++) {
    var newNames = document.createElement("li")
    newNames.textContent = names[i]
    list1.append(newNames)
}