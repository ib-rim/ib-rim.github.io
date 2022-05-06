function showAbout() {
    const aboutFolder = document.querySelector("#folder--about");
    const portfolioFolder = document.querySelector("#folder--portfolio");
    aboutFolder.style.display = "flex";
    portfolioFolder.style.display = "none";
}

function showPortfolio() {
    const aboutFolder = document.querySelector("#folder--about");
    const portfolioFolder = document.querySelector("#folder--portfolio");
    aboutFolder.style.display = "none";
    portfolioFolder.style.display = "flex";
}

function showProject(headerText, descriptionText, imageSrc, gitLink, deployLink) {
    const projectElem = document.querySelector(".project");
    const headerElem = document.querySelector(".project__header");
    const textElem = document.querySelector(".project__text");
    const imageElem = document.querySelector(".project__image");
    const gitLinkElem = document.querySelector(".project__link--git");
    const deployLinkElem = document.querySelector(".project__link--deploy");
    projectElem.style.opacity = "100";
    headerElem.textContent = headerText;
    textElem.innerHTML = descriptionText;
    imageElem.src = imageSrc;
    gitLinkElem.href = gitLink;
    if (deployLink) {
        deployLinkElem.style.display = "block";
        deployLinkElem.href = deployLink;
        deployLinkElem.textContent = "Try it yourself!";
    }
    else {
        deployLinkElem.style.display = "none";
        deployLinkElem.href = "";
        deployLinkElem.textContent = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const aboutTab = document.querySelector("#tab--about");
    const portfolioTab = document.querySelector("#tab--portfolio");
    const blackjackLink = document.querySelector("#blackjack");
    const mightyMorphleLink = document.querySelector("#mighty-morphle");
    const cfopLink = document.querySelector("#cfop");
    const casefileLink = document.querySelector("#casefile");
    const weatherLink = document.querySelector("#weather");
    const calculatorLink = document.querySelector("#calculator");
    const sunnysideLink = document.querySelector("#sunnyside");
    const fourtrialsLink = document.querySelector("#fourtrials");

    aboutTab.addEventListener("click", () => {
        showAbout();
    })

    portfolioTab.addEventListener("click", () => {
        showPortfolio();
    })

    mightyMorphleLink.addEventListener("click", () => {
        let header = "Mighty Morphle";
        let text = "A Power Rangers themed Wordle clone created with vanilla <span class='html'>HTML</span>/<span class='css'>CSS</span>/<span class='js'>JS</span>. The goal is to guess the random power ranger each day using the given clues.";
        let src = "/img/mightymorphle.png";
        let gitLink = "https://github.com/ib-rim/power-ranger-wordle";
        let deployLink = "https://ib-rim.github.io/power-ranger-wordle/";
        showProject(header, text, src, gitLink, deployLink);
    })
    mightyMorphleLink.click();

    blackjackLink.addEventListener("click", () => {
        let header = "Singleplayer Blackjack Web App";
        let text = "Created with vanilla <span class='html'>HTML</span>/<span class='css'>CSS</span>/<span class='js'>JS</span>. The goal is to get the value of your hand as close to 21 as possible without going over. If the value goes over 21, you are bust and you lose.";
        let src = "/img/blackjack.png";
        let gitLink = "https://github.com/ib-rim/blackjack";
        let deployLink = "https://ib-rim.github.io/blackjack/";
        showProject(header, text, src, gitLink, deployLink);
    })

    cfopLink.addEventListener("click", () => {
        let header = "CFOP Speedcubing Web App";
        let text = "A speedcubing app that teaches you how to solve a Rubik's cube using the CFOP method. This was created using <span class='react'>React</span>, <span class='django'>Django</span> and <span class='unity'>Unity</span> as part of my final year undergraduate project at university (2021/2022).";
        let src = "/img/cfop.png";
        let gitLink = "https://github.com/ib-rim/learn-CFOP";
        let deployLink = "https://ib-rim.github.io/learn-CFOP";
        showProject(header, text, src, gitLink, deployLink);
    })

    casefileLink.addEventListener("click", () => {
        let header = "Casefile Maker";
        let text = "Inspired by casefiles in the game 'Control'. An image uploaded for the polaroid can be previewed immediately. The created casefiles can be downloaded in jpeg or png format.";
        let src = "/img/casefile.png";
        let gitLink = "https://github.com/ib-rim/casefile-maker";
        let deployLink = "https://ib-rim.github.io/casefile-maker/";
        showProject(header, text, src, gitLink, deployLink);
    })

    weatherLink.addEventListener("click", () => {
        let header = "Weather App for Kids";
        let text = "My first project using <span class='react'>React</span> as part of the GUI module during my second year of university (2020/2021). It uses the OpenWeather One Call API to retrieve current weather data. The project was graded 92%";
        let src = "/img/weather.png";
        let gitLink = "https://github.com/ib-rim/weather-app";
        let deployLink = "";
        showProject(header, text, src, gitLink, deployLink);
    })

    calculatorLink.addEventListener("click", () => {
        let header = "Calculator App";
        let text = "This is my solution to the Calculator app challenge on Frontend Mentor.";
        let src = "/img/calculator.png";
        let gitLink = "https://github.com/ib-rim/calculator-app";
        let deployLink = "https://ib-rim.github.io/calculator-app/";
        showProject(header, text, src, gitLink, deployLink);
    })

    sunnysideLink.addEventListener("click", () => {
        let header = "Sunnyside Agency Landing Page";
        let text = "This is my solution to the Sunnyside Agency Landing Page challenge on Frontend Mentor.";
        let src = "/img/sunnyside.png";
        let gitLink = "https://github.com/ib-rim/sunnyside-agency";
        let deployLink = "https://ib-rim.github.io/sunnyside-agency/";
        showProject(header, text, src, gitLink, deployLink);
    })

    fourtrialsLink.addEventListener("click", () => {
        let header = "The Four Trials";
        let text = "A 2D platforming game created using <span class='unity'>Unity2D</span> and C#. It was made over the course of 12 weeks in a team of 3 people as part of the Multi-Platform Games Development module during my third year of university (2021/2022). I worked on all aspects of the game including game mechanics, level design, lighting, audio, UI design and story. The final submission of the project was graded 100%.";
        let src = "/img/fourtrials.png";
        let gitLink = "https://github.com/ib-rim/escape-platformer";
        let deployLink = "https://ib-rim.github.io/escape-platformer/build/index.html";
        showProject(header, text, src, gitLink, deployLink);
    })
});