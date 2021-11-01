const autherText = document.querySelector("h4.auther")
const quoteDiv = document.querySelector("#quotes")

function handleAutherVisible(e) {
    const target = e.target.clientHeight;
    autherText.classList.remove("hidden"); 
}

function handleAutherHidden() {
    autherText.classList.add("hidden")
}

quoteDiv.addEventListener("mouseenter", handleAutherVisible)
quoteDiv.addEventListener("mouseleave", handleAutherHidden)