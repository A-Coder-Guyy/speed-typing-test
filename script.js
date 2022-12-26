let speedTypingTestEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let quoteInputEl = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");

alert("Are you ready");
let list = {
    jsvalue: ""
}

let count = 0
let a = setInterval(function() {
    timerEl.textContent = count + "seconds"
    timerEl.classList.add("mt-4", "ml-3");
    count += 1;
}, 1000);

function getrandomquotes() {
    let options = {
        method: "GET"
    }
    url = "https://apis.ccbp.in/random-quote"
    spinnerEl.classList.remove("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            quoteDisplayEl.textContent = jsonData.content;
            list.jsvalue = jsonData.content;
        })
}
getrandomquotes();

submitBtnEl.onclick = function() {
    if (list.jsvalue !== quoteInputEl.value) {
        resultEl.textContent = "You typed incorrect sentence";
    } else {
        clearInterval(a);
        resultEl.textContent = "You typed in " + (count - 1) + " seconds";

    }
}
resetBtnEl.onclick = function() {
    getrandomquotes();
    count = 0;
    resultEl.textContent = "";
};