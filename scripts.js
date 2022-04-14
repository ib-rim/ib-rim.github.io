function showAbout() {
    var aboutFolder = document.querySelector("#folder--about");
    var portfolioFolder = document.querySelector("#folder--portfolio");
    aboutFolder.style.display = "flex";
    portfolioFolder.style.display = "none";
}

function showPortfolio() {
    var aboutFolder = document.querySelector("#folder--about");
    var portfolioFolder = document.querySelector("#folder--portfolio");
    aboutFolder.style.display = "none";
    portfolioFolder.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function (event) {
    let aboutTab = document.querySelector("#tab--about");
    let portfolioTab = document.querySelector("#tab--portfolio");

    aboutTab.addEventListener("click", function (event) {
        showAbout();
    })

    portfolioTab.addEventListener("click", function (event) {
        showPortfolio();
    })

});