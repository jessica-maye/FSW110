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


var names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]
names.length

for (var i = 0; i < names.length; i++){
    console.log(names)
}

var peopleWhoWantToSeeMadMaxFuryRoad = [{
    name: "mike",
    age: 12,
    gender: "male"
}
]