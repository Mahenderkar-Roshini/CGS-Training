document.getElementById("output")

document.getElementById("input")
document.getElementById("update")
btn.addEventListener("click", changeText)
function changeText(){
    const content = textarea.value;
    output.innerText = content;
}