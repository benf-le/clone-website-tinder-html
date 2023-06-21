var chatContent = document.getElementById("chatContent");
var matchesContent = document.getElementById("matchesContent");
var chatButton = document.getElementById("chatButton");
var matchesButton = document.getElementById("matchesButton");

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