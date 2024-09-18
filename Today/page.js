var container = document.getElementById("personalInfo")

var fchild = document.createElement("p")
fchild.innerText = "Name = Roshini"
container.append(fchild)

var schild = document.createElement("p")
schild.innerHTML = "<p>address:123/</p>"
container.append(schild)

var tchild = document.createElement("p")
tchild.innerText="phone no:1234567"
container.appendChild(tchild)

