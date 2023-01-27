let projects = [
    {
        title: "Mighty Morphle",
        description: "Power Rangers themed Wordle clone created with vanilla <span class='u-bold u-html'>HTML</span>, <span class='u-bold u-css'>CSS</span> and <span class='u-bold u-js'>JS</span>. The goal is to guess the random power ranger each day using the given clues.",
        src: "/img/mightymorphle.png",
        alt: "Four by seven grid displaying attempts at guessing the correct Power Ranger for the day. Columns display the guessed rangers' name, colour, season and ownership era. Correct elements have a green border while wrong elements have a red border. The correct answer was Tyler Navarro, the Red Dino Charge ranger from the Neo Saban Era.",
        gitLink: "https://github.com/ib-rim/power-ranger-wordle",
        deployLink: "https://ib-rim.github.io/power-ranger-wordle/",
    },
    {
        title: "Singleplayer Blackjack Web App",
        description: "Created with vanilla <span class='u-bold u-html'>HTML</span>, <span class='u-bold u-css'>CSS</span> and <span class='u-bold u-js'>JS</span>. The goal is to get the value of your hand as close to 21 as possible without going over. If the value goes over 21, you are bust and you lose.",
        src: "/img/blackjack.png",
        alt: "The hand is Eight of Hearts and Ace of Clubs with options to Hit, Stand and Reset.",
        gitLink: "https://github.com/ib-rim/blackjack",
        deployLink: "https://ib-rim.github.io/blackjack/",
    },
    {
        title: "CFOP Speedcubing Web App",
        description: "Speedcubing app that teaches you how to solve a Rubik's cube using the CFOP method. This was created using <span class='u-bold u-react'>React</span>, <span class='u-bold u-django'>Django</span> and <span class='u-bold u-unity'>Unity</span> as part of my final year undergraduate project at university (2021/2022).",
        src: "/img/cfop.png",
        alt: "Page with three columns, the first two are used for selecting the type of algorithm (PLL and Corners Only are currently selected). The Aa Perm, Ab Perm and E Perm algorithms are shown in the third column.",
        gitLink: "https://github.com/ib-rim/learn-CFOP",
        deployLink: "https://ib-rim.github.io/learn-CFOP",
    },
    {
        title: "The Four Trials",
        description: "2D platforming game created using <span class='u-bold u-unity'>Unity2D</span> and C#. It was made over the course of 12 weeks in a team of 3 people as part of the Multi-Platform Games Development module during my third year of university (2021/2022). I worked on all aspects of the game including game mechanics, level design, lighting, audio, UI design and story. The final submission of the project was graded 100%.",
        src: "/img/fourtrials.png",
        alt: "The starting menu of the game which displays Play, Options, Controls and Exit.",
        gitLink: "https://github.com/ib-rim/escape-platformer",
        deployLink: "https://ib-rim.github.io/escape-platformer/build/index.html",
    },
    {
        title: "GiveMeSport World Cup 2022 Design",
        description: "Special Qatar 2022 design that displays only on World Cup related pages using <span class='u-bold u-sass'>Sass</span> and <span class='u-bold u-php'>PHP</span>.",
        src: "/img/gms-worldcuphub.png",
        alt: "The World Cup 2022 hub page for GiveMeSport which uses maroon with background text reading 'Qatar' and custom created images showing famous footballers.",
        gitLink: "",
        deployLink: "https://www.givemesport.com/world-cup-2022",
    },
    {
        title: "Image Reveal WordPress Plugin",
        description: "WordPress plugin created for Snack Media that allows for an image guessing game to be embedded into an article. Fully customisable from the WordPress backend. Created using <span class='u-bold u-react'>React</span>, <span class='u-bold u-sass'>Sass</span> and <span class='u-bold u-php'>PHP</span>.",
        src: "/img/imagereveal.png",
        gitLink: "Three by three grid of blue squares where the middle right, bottom left and bottom center squares have been revealed showing parts of a Manchester United jersey from the image to be guessed.",
        deployLink: "http://image-reveal-dev.surge.sh/",
    },
    {
        title: "Latest Articles Chrome Extension",
        description: "Chrome extension that retrieves the latest articles and quizzes from <a href='https://www.videocelts.com'>Videocelts</a> by calling the WordPress REST API. Created for <a href='https://www.snack-media.com'>Snack Media</a> using <span class='u-bold u-react'>React</span> and <span class='u-bold u-sass'>Sass</span>.",
        src: "/img/snackextension.png",
        gitLink: "List of article names with how long ago they were published underneath. The currently selected tab is Latest News and the unselected tab is Latest Quizzes.",
        deployLink: "https://chrome.google.com/webstore/detail/latest-articles-and-quizz/edefmbdihcklhpgekggbljkcljgehedg",
    }
]

let projectFigureElem = document.querySelector(".project__figure");
let projectContentElem = document.querySelector(".project__content");
let leftNavElem = document.querySelector("#js-project__nav--left");
let rightNavElem = document.querySelector("#js-project__nav--right");
let currentProject = 0;
showProject(projects[currentProject]);

leftNavElem.addEventListener("click",
    debounce(() => {
        if (currentProject === 0) {
            currentProject = projects.length - 1;
        }
        else {
            currentProject -= 1;
        }
        showProject(projects[currentProject]);
    })
)

rightNavElem.addEventListener("click",
    debounce(() => {
        if (currentProject === projects.length - 1) {
            currentProject = 0;
        }
        else {
            currentProject += 1;
        }
        showProject(projects[currentProject]);
    })
)

function showProject() {
    let project = projects[currentProject];
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
        imageElem.alt = project.alt;
        if (project.gitLink) {
            gitLinkElem.style.display = "block";
            gitLinkElem.href = project.gitLink;
        }
        else {
            gitLinkElem.style.display = "none";
            gitLinkElem.href = "";
        }

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

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}