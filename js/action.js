var chatContent = document.getElementById("chatContent");
var matchesContent = document.getElementById("matchesContent");
var chatButton = document.getElementById("chatButton");
var matchesButton = document.getElementById("matchesButton");

var chatDisplay = document.getElementById("chatDisplay");
var swiperDisplay = document.getElementById("swiperDisplay");

function toggleChat() {
    chatContent.style.display = "none";
    matchesContent.style.display = "block";
    matchesButton.style.borderBottom = "solid 4px rgb(243, 33, 33)";
    document.getElementById("chatButton").style.borderBottom = "none";
}

function toggleMatches() {
    matchesContent.style.display = "none";
    chatContent.style.display = "block";
    chatButton.style.borderBottom = "solid 4px rgb(243, 33, 33)";
    document.getElementById("matchesButton").style.borderBottom = "none";
}

function mobileChat() {
    swiperDisplay.style.display = "none";
    chatDisplay.style.display = "block";
    chatDisplay.style.width = "100%";
    chatDisplay.style.height = "100%";

}

function mobileMatches() {
    chatDisplay.style.display = "none";
    swiperDisplay.style.display = "flex";
}