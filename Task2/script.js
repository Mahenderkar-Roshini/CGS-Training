document.getElementById("changeColorButton").addEventListener("click", function() {
    const color = document.getElementById("backgroundColorPicker").value;
    document.body.style.backgroundColor = color;
});
