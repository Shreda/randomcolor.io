var section = document.querySelector(".randomColorSection");
var hextText = document.querySelector("h1");
var colors = ["#FFFFFF"];
var index = 0;//keeps track of the curernt color
var backButton = document.querySelector("#backButton");
var forwardButton = document.querySelector("#forwardButton");
backButton.disabled = true;
forwardButton.disabled = true;


//Listen for button press to change color.
document.querySelector("#colorButton").addEventListener("click", function() {
    index = colors.length;
    forwardButton.disabled = true;
    backButton.disabled = false;
    var futureColor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    colors.push(futureColor);
    console.log(colors);
//    body.style.background = colors[index]
//    hextText.innerHTML = colors[index];
    
    section.style.background = futureColor;
    hextText.innerHTML = futureColor;
});
document.querySelector("#backButton").addEventListener("click", function() {
    if (index > 0) {
        index--;
        if (index === 0) {
            this.disabled = true;
        }
        forwardButton.disabled = false;
        section.style.background = colors[index];
        hextText.innerHTML = colors[index];
    }

});

document.querySelector("#forwardButton").addEventListener("click", function() {
    if (index < colors.length-1) {
        index++;
        if (index === colors.length-1) {
            this.disabled = true;
        }
        backButton.disabled = false;
        section.style.background = colors[index];
        hextText.innerHTML = colors[index];
    }

})

document.querySelector("#colorSearchButton").addEventListener("click", function() {
    var searchInput = document.querySelector("#colorSearchInput");
    console.log(searchInput);
    var futureColor = searchInput.value;
    var re = /[0-9A-Fa-f]{6}/g;
    section.style.background = futureColor
 
    
});