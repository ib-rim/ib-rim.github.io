function showAbout() {
    var aboutFolder = document.getElementById("aboutFolder");
    var portfolioFolder = document.getElementById("portfolioFolder");
    aboutFolder.style.display = "flex";
    portfolioFolder.style.display = "none";
}
  
function showPortfolio() {
    var aboutFolder = document.getElementById("aboutFolder");
    var portfolioFolder = document.getElementById("portfolioFolder");
    aboutFolder.style.display = "none";
    portfolioFolder.style.display = "flex";
}