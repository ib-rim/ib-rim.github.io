import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {

    const [projects] = useState([
        {
            title: "GiveMeSport World Cup 2022",
            description: <>Special Qatar 2022 design on <a href='https://www.givemesport.com'>GiveMeSport</a> that displays only on World Cup related pages using <span className='u-highlight u-sass'>Sass</span> and <span className='u-highlight u-php'>PHP</span>.</>,
            src: "/assets/img/gms-worldcuphub.png",
            alt: "The World Cup 2022 hub page for GiveMeSport which uses maroon with background text reading 'Qatar' and custom created images showing famous footballers.",
            gitLink: "",
            deployLink: "https://www.givemesport.com/world-cup-2022",
        },
        {
            title: "Latest Articles Chrome Extension",
            description: <>Chrome extension that retrieves the latest articles and quizzes from <a href='https://www.videocelts.com'>Videocelts</a> by calling the WordPress REST API. Created for <a href='https://www.snack-media.com'>Snack Media</a> using <span className='u-highlight u-react'>React</span> and <span className='u-highlight u-sass'>Sass</span>.</>,
            src: "/assets/img/snackextension.png",
            alt: "List of article names with how long ago they were published underneath. The currently selected tab is Latest News and the unselected tab is Latest Quizzes.",
            gitLink: "",
            deployLink: "https://chrome.google.com/webstore/detail/latest-articles-and-quizz/edefmbdihcklhpgekggbljkcljgehedg",
        },
        {
            title: "Mighty Morphle",
            description: <>Power Rangers themed Wordle clone created with vanilla <span className='u-highlight u-html'>HTML</span>, <span className='u-highlight u-css'>CSS</span> and <span className='u-highlight u-js'>JS</span>. The goal is to guess the random power ranger each day using the given clues.</>,
            src: "/assets/img/mightymorphle.png",
            alt: "Four by seven grid displaying attempts at guessing the correct Power Ranger for the day. Columns display the guessed rangers' name, colour, season and ownership era. Correct elements have a green border while wrong elements have a red border. The correct answer was Tyler Navarro, the Red Dino Charge ranger from the Neo Saban Era.",
            gitLink: "https://github.com/ib-rim/power-ranger-wordle",
            deployLink: "https://ib-rim.github.io/power-ranger-wordle/",
        },
        {
            title: "CFOP Speedcubing Web App",
            description: <>Speedcubing app that teaches you how to solve a Rubik&apos;s cube using the CFOP method. This was created using <span className='u-highlight u-react'>React</span>, <span className='u-highlight u-django'>Django</span> and <span className='u-highlight u-unity'>Unity</span> as part of my final year undergraduate project at university.</>,
            src: "/assets/img/cfop.png",
            alt: "Page with three columns, the first two are used for selecting the type of algorithm (PLL and Corners Only are currently selected). The Aa Perm, Ab Perm and E Perm algorithms are shown in the third column.",
            gitLink: "https://github.com/ib-rim/learn-CFOP",
            deployLink: "https://ib-rim.github.io/learn-CFOP",
        },
        {
            title: "Card Games Web App",
            description: <>Created with <span className='u-highlight u-nextjs'>NextJS</span>. Currently only has a singleplayer blackjack game where the goal is to get the value of your hand as close to 21 as possible without going over. If the value goes over 21, you are bust and you lose. Other card games are in progress.</>,
            src: "/assets/img/blackjack.png",
            alt: "The hand is Eight of Hearts and Ace of Clubs with options to Hit, Stand and Reset.",
            gitLink: "https://github.com/ib-rim/card-games",
            deployLink: "https://ib-rim.github.io/card-games/",
        },
        {
            title: "The Four Trials",
            description: <>2D platforming game created using <span className='u-highlight u-unity'>Unity2D</span> and <span className='u-highlight u-c-sharp'>C#</span>. Made over the course of 12 weeks as part of the Multi-Platform Games Development module at Queen Mary University of London. I worked on all aspects of the game including game mechanics, level design, lighting, audio, UI design and story. The final submission of the project was graded 100%.</>,
            src: "/assets/img/fourtrials.png",
            alt: "The starting menu of the game which displays Play, Options, Controls and Exit.",
            gitLink: "https://github.com/ib-rim/escape-platformer",
            deployLink: "https://ib-rim.github.io/escape-platformer/build/index.html",
        },
        {
            title: "Image Reveal WordPress Plugin",
            description: <>WordPress plugin created for <a href='https://www.snack-media.com'>Snack Media</a> that allows for an image guessing game to be embedded into an article. Fully customisable from the WordPress backend. Created using <span className='u-highlight u-react'>React</span>, <span className='u-highlight u-sass'>Sass</span> and <span className='u-highlight u-php'>PHP</span>.</>,
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
        setAnimation('wipeLeft');
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
        setAnimation('wipeRight');
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
            <Head>
                <title>Ibrahim Bashir</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="container">
                    <div className="about-me">
                        <header className="header">
                            <div className="contact">
                                <a className="contact__icon" href="https://uk.linkedin.com/in/ibrahim-bashir-250953197" target="_blank"
                                    rel="noopener noreferrer">
                                    <Image fill src="/assets/img/linked.png" alt="LinkedIn Logo" />
                                </a>
                                <a className="contact__icon" href="mailto:ib.bashir@hotmail.com" target="_blank" rel="noopener noreferrer">
                                    <Image fill src="/assets/img/email.png" alt="Email Icon" />
                                </a>
                                <a className="contact__icon" href="https://github.com/ib-rim" target="_blank" rel="noopener noreferrer">
                                    <Image fill src="/assets/img/github4.png" alt="GitHub Logo" />
                                </a>
                            </div>
                            <p className="name">Ibrahim Bashir</p>
                        </header>
                        <figure className="photo__figure u-circle-border">
                            <Image fill className="u-circle-border" src="/assets/img/me.jpg"
                                alt="Photo of Ibrahim Bashir with glasses on and smiling at the camera" />
                        </figure>
                        <section className="skills-section">
                            <h2 className="heading">Skillset</h2>
                            <div className="ticker-wrap">
                                <div className="ticker">
                                    <div className="ticker__item">React</div>
                                    <div className="ticker__item">Next.js</div>
                                    <div className="ticker__item">Sass</div>
                                    <div className="ticker__item">Vue</div>
                                    <div className="ticker__item">Django</div>
                                    <div className="ticker__item">WordPress</div>
                                    <div className="ticker__item">Google Analytics</div>
                                    <div className="ticker__item">Unity2D</div>
                                    <div className="ticker__item">C#</div>
                                    <div className="ticker__item">Git</div>
                                </div>
                                <div className="ticker ticker2">
                                    <div className="ticker__item">React</div>
                                    <div className="ticker__item">Next.js</div>
                                    <div className="ticker__item">Sass</div>
                                    <div className="ticker__item">Vue</div>
                                    <div className="ticker__item">Django</div>
                                    <div className="ticker__item">WordPress</div>
                                    <div className="ticker__item">Google Analytics</div>
                                    <div className="ticker__item">Unity2D</div>
                                    <div className="ticker__item">C#</div>
                                    <div className="ticker__item">Git</div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section className="portfolio">
                        <h2 className="heading">Portfolio</h2>
                        <div className="project">
                            <figure className={`project__figure ${animation}`}>
                                <Image fill className="project__image" src={projects[currentProject].src} alt={projects[currentProject].alt} />
                            </figure>
                            <section className={`project__content ${animation}`}>
                                <h2 className="project__title">{projects[currentProject].title}</h2>
                                <p className="project__description">{projects[currentProject].description}</p>
                                <div className="project__links">
                                    {
                                        projects[currentProject].gitLink ?
                                            <a className="project__link--git" href={projects[currentProject].gitLink} target="_blank" rel="noopener noreferrer">
                                                <Image fill src="/assets/img/github4.png" alt="" />
                                            </a>
                                            :
                                            <></>
                                    }
                                    {
                                        projects[currentProject].deployLink ?
                                            <a className="project__link--deploy" href={projects[currentProject].deployLink} target="_blank" rel="noopener noreferrer">Try it yourself!</a>
                                            :
                                            <></>
                                    }
                                </div>
                            </section>
                        </div>
                        <div className="project__navs">
                            <button id="js-project__nav--left" className="project__nav" onClick={debounce(() => previousProject())}>←</button>
                            <button id="js-project__nav--right" className="project__nav" onClick={debounce(() => nextProject())}>→</button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
