let projects = [
    {
        title: "Mighty Morphle",
        description: "A Power Rangers themed Wordle clone created with vanilla <span class='html'>HTML</span>, <span class='css'>CSS</span> and <span class='js'>JS</span>. The goal is to guess the random power ranger each day using the given clues.",
        src: "/img/mightymorphle.png",
        gitLink: "https://github.com/ib-rim/power-ranger-wordle",
        deployLink: "https://ib-rim.github.io/power-ranger-wordle/",
    },
    {
        title: "Singleplayer Blackjack Web App",
        description: "Created with vanilla <span class='html'>HTML</span>, <span class='css'>CSS</span> and <span class='js'>JS</span>. The goal is to get the value of your hand as close to 21 as possible without going over. If the value goes over 21, you are bust and you lose.",
        src: "/img/blackjack.png",
        gitLink: "https://github.com/ib-rim/blackjack",
        deployLink: "https://ib-rim.github.io/blackjack/",
    },
    {
        title: "CFOP Speedcubing Web App",
        description: "A speedcubing app that teaches you how to solve a Rubik's cube using the CFOP method. This was created using <span class='react'>React</span>, <span class='django'>Django</span> and <span class='unity'>Unity</span> as part of my final year undergraduate project at university (2021/2022).",
        src: "/img/cfop.png",
        gitLink: "https://github.com/ib-rim/learn-CFOP",
        deployLink: "https://ib-rim.github.io/learn-CFOP",
    },
]

let projectFigureElem = document.querySelector(".project__figure");
let projectContentElem = document.querySelector(".project__content");
let leftNavElem = document.querySelector("#js-project__nav--left");
let rightNavElem = document.querySelector("#js-project__nav--right");
let currentProject = 0;

leftNavElem.addEventListener("click", () => {
    if (currentProject === 0) {
        currentProject = projects.length - 1;
    }
    else {
        currentProject -= 1;
    }
    showProject(projects[currentProject]);
})

rightNavElem.addEventListener("click", () => {
    if (currentProject === projects.length - 1) {
        currentProject = 0;
    }
    else {
        currentProject += 1;
    }
    showProject(projects[currentProject]);
})

// casefileLink.addEventListener("click", () => {
//     let title = "Casefile Maker";
//     let text = "Inspired by casefiles in the game 'Control'. An image uploaded for the polaroid can be previewed immediately. The created casefiles can be downloaded in jpeg or png format.";
//     let src = "/img/casefile.png";
//     let gitLink = "https://github.com/ib-rim/casefile-maker";
//     let deployLink = "https://ib-rim.github.io/casefile-maker/";
//     showProject(title, text, src, gitLink, deployLink);
// })

// fourtrialsLink.addEventListener("click", () => {
//     let title = "The Four Trials";
//     let text = "A 2D platforming game created using <span class='unity'>Unity2D</span> and C#. It was made over the course of 12 weeks in a team of 3 people as part of the Multi-Platform Games Development module during my third year of university (2021/2022). I worked on all aspects of the game including game mechanics, level design, lighting, audio, UI design and story. The final submission of the project was graded 100%.";
//     let src = "/img/fourtrials.png";
//     let gitLink = "https://github.com/ib-rim/escape-platformer";
//     let deployLink = "https://ib-rim.github.io/escape-platformer/build/index.html";
//     showProject(title, text, src, gitLink, deployLink);
// })

function showProject(project) {
    triggerAnimation(projectFigureElem, "vertical-wipe");
    triggerAnimation(projectContentElem, "freeze-in-place");

    const titleElem = document.querySelector(".project__title");
    const descriptionElem = document.querySelector(".project__description");
    const imageElem = document.querySelector(".project__image");
    const gitLinkElem = document.querySelector(".project__link--git");
    const deployLinkElem = document.querySelector(".project__link--deploy");

    setTimeout(() => {
        titleElem.textContent = project.title;
        descriptionElem.innerHTML = project.description;
        imageElem.src = project.src;
        gitLinkElem.href = project.gitLink;
        if (project.deployLink) {
            deployLinkElem.style.display = "block";
            deployLinkElem.href = project.deployLink;
            deployLinkElem.textContent = "Try it yourself!";
        }
        else {
            deployLinkElem.style.display = "none";
            deployLinkElem.href = "";
            deployLinkElem.textContent = "";
        }
    }, 700);
}

function triggerAnimation(element, animationClass) {
    element.classList.remove(animationClass);
    void element.offsetWidth; // trigger reflow
    element.classList.add(animationClass);
}