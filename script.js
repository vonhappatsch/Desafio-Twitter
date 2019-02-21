const button = document.querySelector("#send");
const tweet = document.querySelector("textarea");
const tweetBox = document.querySelector("#tweet-box");
const counter = document.querySelector("#counter");
const options = {hour: "numeric", minute: "numeric"};
const chars = 140;

function tweetList(event) {
    let content = tweet.value;
    let listItem = document.createElement("li");

    let time = new Date().toLocaleDateString("pt-BR", options);
    time = (time.slice(-5));
    let listItemContent = document.createTextNode(time + " - " + content);
    listItem.appendChild(listItemContent);

    tweetBox.insertBefore(listItem, tweetBox.childNodes[0]);
    
    clearBox();
    disableButton();
    clearCounter(); 
}

function clearBox() {
    document.querySelector("textarea").value = "";
}

function enableButton() {
    if (tweet !== "") {
        button.disabled = false;
        button.setAttribute("style", "color: black;");
    } 
}

function disableButton() {
    button.disabled = true;
    button.setAttribute("style", "color: grey;");
}

function counting() {
    let tracking = chars - tweet.value.length;
    counter.textContent = tracking;

    if (tracking <= 0) {
        button.disabled = true;
        counter.style.color = "grey";
        button.style.color = "grey";
    } else if (tracking <= 80 && tracking > 70) {
        counter.style.color = "orange"
    } else if (tracking <= 69) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
}

function cleaning(event) {
    if (event.keyCode === 8 && document.activeElement === "") {
        chars = 140;
    }
}

function clearCounter() {
    document.querySelector("#counter").innerHTML = 140;
}

function boxSize() {
    tweet.scrollHeight;
    tweet.css('height', scroll_height + 'px');
}

button.addEventListener("click", tweetList);
tweet.addEventListener("keydown", counting);
tweet.addEventListener("keypress", cleaning);
tweet.addEventListener("oninput", boxSize);
