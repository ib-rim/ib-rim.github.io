import styles from '@/styles/Project.module.scss';
import { useState } from 'react';
import Image from 'next/image';

export default function Project() {

    const [projects] = useState([
        {
            title: "GiveMeSport World Cup 2022",
            description: <>Special Qatar 2022 design on <a href='https://www.givemesport.com'>GiveMeSport</a> that displays only on World Cup related pages.</>,
            skills: ["Sass", "PHP"],
            src: "/assets/img/gms-worldcuphub.png",
            alt: "The World Cup 2022 hub page for GiveMeSport which uses maroon with background text reading 'Qatar' and custom created images showing famous footballers.",
            gitLink: "",
            deployLink: "https://www.givemesport.com/world-cup-2022",
        },
        {
            title: "Latest Articles Chrome Extension",
            description: <>Chrome extension that retrieves the latest articles and quizzes from <a href='https://www.videocelts.com'>Videocelts</a> by calling the WordPress REST API. Created for <a href='https://www.snack-media.com'>Snack Media</a>.</>,
            skills: ["React", "Sass"],
            src: "/assets/img/snackextension.png",
            alt: "List of article names with how long ago they were published underneath. The currently selected tab is Latest News and the unselected tab is Latest Quizzes.",
            gitLink: "",
            deployLink: "https://chrome.google.com/webstore/detail/latest-articles-and-quizz/edefmbdihcklhpgekggbljkcljgehedg",
        },
        {
            title: "Mighty Morphle",
            description: <>Power Rangers themed Wordle clone. The goal is to guess the random power ranger each day using the given clues.</>,
            skills: ["HTML", "CSS", "JS"],
            src: "/assets/img/mightymorphle.png",
            alt: "Four by seven grid displaying attempts at guessing the correct Power Ranger for the day. Columns display the guessed rangers' name, colour, season and ownership era. Correct elements have a green border while wrong elements have a red border. The correct answer was Tyler Navarro, the Red Dino Charge ranger from the Neo Saban Era.",
            gitLink: "https://github.com/ib-rim/power-ranger-wordle",
            deployLink: "https://ib-rim.github.io/power-ranger-wordle/",
        },
        {
            title: "CFOP Speedcubing Web App",
            description: <>Speedcubing app that teaches you how to solve a Rubik&apos;s cube using the CFOP method. This was created as part of my final year undergraduate project at university.</>,
            skills: ["Unity", "Django", "React"],
            src: "/assets/img/cfop.png",
            alt: "Page with three columns, the first two are used for selecting the type of algorithm (PLL and Corners Only are currently selected). The Aa Perm, Ab Perm and E Perm algorithms are shown in the third column.",
            gitLink: "https://github.com/ib-rim/learn-CFOP",
            deployLink: "https://ib-rim.github.io/learn-CFOP",
        },
        {
            title: "Card Games Web App",
            description: <>Currently only has a singleplayer blackjack game where the goal is to get the value of your hand as close to 21 as possible without going over. If the value goes over 21, you are bust and you lose. Other card games are in progress.</>,
            skills: ["NextJS"],
            src: "/assets/img/blackjack.png",
            alt: "The hand is Eight of Hearts and Ace of Clubs with options to Hit, Stand and Reset.",
            gitLink: "https://github.com/ib-rim/card-games",
            deployLink: "https://ib-rim.github.io/card-games/",
        },
        {
            title: "The Four Trials",
            description: <>2D platforming game made over the course of 12 weeks as part of the Multi-Platform Games Development module at Queen Mary University of London. I worked on all aspects of the game including game mechanics, level design, lighting, audio, UI design and story. The final submission of the project was graded 100%.</>,
            skills: ["Unity", "C#"],
            src: "/assets/img/fourtrials.png",
            alt: "The starting menu of the game which displays Play, Options, Controls and Exit.",
            gitLink: "https://github.com/ib-rim/escape-platformer",
            deployLink: "https://ib-rim.github.io/escape-platformer/build/index.html",
        },
        {
            title: "Image Reveal WordPress Plugin",
            description: <>WordPress plugin created for <a href='https://www.snack-media.com'>Snack Media</a> that allows for an image guessing game to be embedded into an article. Fully customisable from the WordPress backend.</>,
            skills: ["React", "Sass", "PHP"],
            src: "/assets/img/imagereveal.png",
            alt: "Three by three grid of blue squares where the middle right, bottom left and bottom center squares have been revealed showing parts of a Manchester United jersey from the image to be guessed.",
            gitLink: "",
            deployLink: "http://image-reveal-dev.surge.sh/",
        }
    ]);
    const [currentProject, setCurrentProject] = useState(0);
    const [animation, setAnimation] = useState('');
    const [animationLength] = useState(800); //ms

    function previousProject() {
        setAnimation('wipeRight');
        setTimeout(() => {
            setAnimation('');
        }, animationLength);

        setTimeout(() => {
            if (currentProject === 0) {
                setCurrentProject(projects.length - 1);
            }
            else {
                setCurrentProject(currentProject - 1);
            }
        }, animationLength / 2);
    }

    function nextProject() {
        setAnimation('wipeLeft');
        setTimeout(() => {
            setAnimation('');
        }, animationLength);
        setTimeout(() => {
            if (currentProject === projects.length - 1) {
                setCurrentProject(0);
            }
            else {
                setCurrentProject(currentProject + 1);
            }
        }, animationLength / 2);
    }

    function debounce(func, timeout = 300) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }

    return (
        <>
            <div className={styles.project}>
                <figure data-animation={animation} className={styles.figure}>
                    <Image fill sizes="auto" className={styles.image} src={projects[currentProject].src} alt={projects[currentProject].alt} />
                </figure>
                <section data-animation={animation} className={styles.content}>
                    <h2 className={styles.title}>{projects[currentProject].title}</h2>
                    <p className={styles.description}>{projects[currentProject].description}</p>
                    <div className={styles.skills}>
                        {projects[currentProject].skills.map((skill) => (
                            <span className={styles.highlight} key={skill === "C#" ? "c-sharp" : skill.toLowerCase()} data-skill={skill === "C#" ? "c-sharp" : skill.toLowerCase()}>{skill}</span>
                        ))}
                    </div>
                    <div className={styles.links}>
                        {
                            projects[currentProject].deployLink ?
                                <a className={styles.deploy} href={projects[currentProject].deployLink} target="_blank" rel="noopener noreferrer">Try it yourself!</a>
                                :
                                <></>
                        }
                        {
                            projects[currentProject].gitLink ?
                                <a className={styles.git} href={projects[currentProject].gitLink} target="_blank" rel="noopener noreferrer">
                                    <Image fill sizes="48px" src="/assets/img/github4.png" alt="" />
                                </a>
                                :
                                <></>
                        }
                    </div>
                </section>
            </div>
            <div className={styles.navigation}>
                <button onClick={debounce(() => previousProject())}>←</button>
                <button onClick={debounce(() => nextProject())}>→</button>
            </div>
        </>
    )
}