const button = document.querySelector("button");
const tweet = document.querySelector("textarea");
const tweetBody = document.querySelector(".tweet-body");
const counter = document.querySelector("#counter");
const chars = 140;

const buttonHandler = () => {
    tweet.value.length > 0 && tweet.value.length <= 140 ? button.disabled = false : button.disabled = true;
};

const boxSize = () => {
    while (tweet.scrollHeight >= tweet.offsetHeight) {
        tweet.rows += 1;
    }
};

const disabled = () => {
    if (tweet.value === "") button.disabled = true;
};
const clearBox = () => tweet.value = "";

const clearCounter = () => {
    counter.textContent = 140;
    counter.style.color = "black";
};

const counting = () => {
    buttonHandler();

    let tracking = chars - tweet.value.length;
    counter.textContent = tracking;

    if (tracking < 0) {
        counter.style.color = "grey";
    } else if (tracking <= 80 && tracking >= 50) {
        counter.style.color = "orange";
    } else if (tracking <= 59) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
};

const tweetList = () => {
    let holder = document.createElement("article");
    holder.setAttribute("class", "holder");
    let newTweet = document.createElement("p");
    newTweet.setAttribute("class", "tweets");
    let dateSpot = document.createElement("p");
    dateSpot.setAttribute("class", "date");

    let content = tweet.value;
    let tweetContent = document.createTextNode(content);
    newTweet.appendChild(tweetContent);

    let date = new Date();
    let time = date.toLocaleTimeString().slice(0, 5);
    let dateContent = document.createTextNode(time);
    dateSpot.appendChild(dateContent);

    tweetBody.appendChild(holder);
    holder.insertBefore(newTweet, holder.childNodes[0]);
    holder.insertBefore(dateSpot, holder.childNodes[1]);

    clearBox();
    clearCounter();
    disabled();
};

button.addEventListener("click", tweetList);
tweet.addEventListener("keyup", counting);
tweet.addEventListener("keydown", boxSize);