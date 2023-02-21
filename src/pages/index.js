import Head from 'next/head';
import Image from 'next/image';
import Project from '../components/Project';
import Ticker from '../components/Ticker';
import { Client } from '@notionhq/client';
import ReadingList from '../components/ReadingList';

export async function getStaticProps() {
    const notion = new Client({ auth: process.env.NOTION_KEY });

    let skillsList = [];
    let projectsList = [];
    let booksList = [];

    const skillsDatabaseID = process.env.NOTION_SKILLS_DATABASE_ID;
    try {
        const skillsResponse = await notion.databases.query({
            database_id: skillsDatabaseID,
            "sorts": [
                {
                    "property": "Order",
                    "direction": "ascending"
                }
            ]
        })

        skillsResponse.results.forEach((result) => {
            skillsList.push(result.properties.Name.title[0].plain_text)
        })
    } catch (error) {
        console.log(error);
        skillsList = ['React', 'NextJS', 'Sass', 'Vue', 'Django', 'WordPress', 'Google Analytics', 'Unity2D', 'C#', 'Git'];
    }

    const projectsDatabaseID = process.env.NOTION_PROJECTS_DATABASE_ID;
    try {
        const projectsResponse = await notion.databases.query({
            database_id: projectsDatabaseID,
            "sorts": [
                {
                    "property": "Order",
                    "direction": "ascending"
                }
            ]
        })

        projectsResponse.results.forEach((result) => {
            projectsList.push(
                {
                    title: result.properties.Title.title[0].plain_text,
                    description: result.properties.Description.rich_text[0].plain_text,
                    skills: result.properties.Skills.multi_select.map((skill) => skill.name),
                    src: result.properties.SRC.rich_text[0].plain_text,
                    alt: result.properties.ALT.rich_text[0].plain_text,
                    gitLink: result.properties.GitLink.url,
                    deployLink: result.properties.DeployLink.url,
                })
        })
    } catch (error) {
        console.log(error);
        projectsList = [
            {
                "title": "GiveMeSport World Cup 2022",
                "description": "Special Qatar 2022 design on <a href='https://www.givemesport.com'>GiveMeSport</a> that displays only on World Cup related pages.",
                "skills": [
                    "Sass",
                    "PHP"
                ],
                "src": "/assets/img/gms-worldcuphub.png",
                "alt": "The World Cup 2022 hub page for GiveMeSport which uses maroon with background text reading 'Qatar' and custom created images showing famous footballers.",
                "gitLink": null,
                "deployLink": "https://www.givemesport.com/world-cup-2022"
            },
            {
                "title": "Latest Articles Chrome Extension",
                "description": "Chrome extension that retrieves the latest articles and quizzes from <a href='https://www.videocelts.com'>Videocelts</a> by calling the WordPress REST API. Created for <a href='https://www.snack-media.com'>Snack Media</a>.",
                "skills": [
                    "React",
                    "Sass"
                ],
                "src": "/assets/img/snackextension.png",
                "alt": "List of article names with how long ago they were published underneath. The currently selected tab is Latest News and the unselected tab is Latest Quizzes.",
                "gitLink": null,
                "deployLink": "https://chrome.google.com/webstore/detail/latest-articles-and-quizz/edefmbdihcklhpgekggbljkcljgehedg"
            },
            {
                "title": "Mighty Morphle",
                "description": "Power Rangers themed Wordle clone. The goal is to guess the random power ranger each day using the given clues.",
                "skills": [
                    "HTML",
                    "CSS",
                    "JS"
                ],
                "src": "/assets/img/mightymorphle.png",
                "alt": "Four by seven grid displaying attempts at guessing the correct Power Ranger for the day. Columns display the guessed rangers' name, colour, season and ownership era. Correct elements have a green border while wrong elements have a red border. The correct answer was Tyler Navarro, the Red Dino Charge ranger from the Neo Saban Era.",
                "gitLink": "https://github.com/ib-rim/power-ranger-wordle",
                "deployLink": "https://ib-rim.github.io/power-ranger-wordle/"
            },
            {
                "title": "CFOP Speedcubing Web App",
                "description": "Speedcubing app that teaches you how to solve a Rubik&apos;s cube using the CFOP method. This was created as part of my final year undergraduate project at university.",
                "skills": [
                    "Unity",
                    "Django",
                    "React"
                ],
                "src": "/assets/img/cfop.png",
                "alt": "Page with three columns, the first two are used for selecting the type of algorithm (PLL and Corners Only are currently selected). The Aa Perm, Ab Perm and E Perm algorithms are shown in the third column.",
                "gitLink": "https://github.com/ib-rim/learn-CFOP",
                "deployLink": "https://ib-rim.github.io/learn-CFOP"
            },
            {
                "title": "Card Games Web App",
                "description": "Currently only has a singleplayer blackjack game where the goal is to get the value of your hand as close to 21 as possible without going over. If the value goes over 21, you are bust and you lose. Other card games are in progress.",
                "skills": [
                    "NextJS"
                ],
                "src": "/assets/img/blackjack.png",
                "alt": "The hand is Eight of Hearts and Ace of Clubs with options to Hit, Stand and Reset.",
                "gitLink": "https://github.com/ib-rim/card-games",
                "deployLink": "https://ib-rim.github.io/card-games/"
            },
            {
                "title": "The Four Trials",
                "description": "2D platforming game made over the course of 12 weeks as part of the Multi-Platform Games Development module at Queen Mary University of London. I worked on all aspects of the game including game mechanics, level design, lighting, audio, UI design and story. The final submission of the project was graded 100%.",
                "skills": [
                    "Unity",
                    "C#"
                ],
                "src": "/assets/img/fourtrials.png",
                "alt": "The starting menu of the game which displays Play, Options, Controls and Exit.",
                "gitLink": "https://github.com/ib-rim/escape-platformer",
                "deployLink": "https://ib-rim.github.io/escape-platformer/build/index.html"
            },
            {
                "title": "Image Reveal WordPress Plugin",
                "description": "WordPress plugin created for <a href='https://www.snack-media.com'>Snack Media</a> that allows for an image guessing game to be embedded into an article. Fully customisable from the WordPress backend.",
                "skills": [
                    "React",
                    "Sass",
                    "PHP"
                ],
                "src": "/assets/img/imagereveal.png",
                "alt": "Three by three grid of blue squares where the middle right, bottom left and bottom center squares have been revealed showing parts of a Manchester United jersey from the image to be guessed.",
                "gitLink": null,
                "deployLink": "http://image-reveal-dev.surge.sh/"
            }
        ];
    }

    const booksDatabaseID = process.env.NOTION_BOOKS_DATABASE_ID;
    try {
        const booksResponse = await notion.databases.query({
            database_id: booksDatabaseID,
            "filter": {
                "and": [
                    {
                        "or": [
                            {
                                "property": "Started",
                                "date": {
                                    "after": "2023-01-01T00:00:00"
                                }
                            },
                            {
                                "property": "Status",
                                "select": {
                                    "equals": "Unread"
                                }
                            }
                        ]
                    },
                    {
                        "property": "Public",
                        "checkbox": {
                            "equals": true
                        }
                    }
                ]
            },
            "sorts": [
                {
                    "property": "Started",
                    "direction": "ascending"
                }
            ]
        })

        booksResponse.results.forEach((result) => {
            booksList.push(
                {
                    title: result.properties.Title.title[0].plain_text,
                    status: result.properties.Status.select.name,
                    author: result.properties.Author.rich_text[0].plain_text,
                })
        })
    } catch (error) {
        console.log(error);
        booksList = [
            {
                "title": "Quiet",
                "status": "Read",
                "author": "Susan Cain"
            },
            {
                "title": "Norse Mythology",
                "status": "Read",
                "author": "Neil Gaiman"
            },
            {
                "title": "Digital Transformation at Scale: Why the Strategy Is Delivery\n",
                "status": "Read",
                "author": "Andrew Greenway"
            },
            {
                "title": "Good Services: How to Design Services That Work",
                "status": "Reading",
                "author": "Louise Downe"
            },
            {
                "title": "Content Transformation",
                "status": "Unread",
                "author": "Hinrich Von Haaren"
            },
            {
                "title": "Content Design",
                "status": "Unread",
                "author": "Sarah Winters"
            },
            {
                "title": "The Agile Comms Handbook",
                "status": "Unread",
                "author": "Giles Turnbull"
            },
            {
                "title": "Multiplied: How Digital Transformation Can Deliver More Impact for the Public Sector",
                "status": "Unread",
                "author": "Ben Holliday"
            }
        ];
    }

    return {
        props: {
            skills: skillsList,
            projects: projectsList,
            books: booksList,
        },
    };
}

export default function Home({ skills, projects, books }) {

    return (
        <>
            <Head>
                <title>Ibrahim Bashir</title>
                <meta name="description" content="Ibrahim Bashir's Portfolio Website" />
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
                                    <Image fill sizes="48px" src="/assets/img/linked.png" alt="LinkedIn Logo" />
                                </a>
                                <a className="contact__icon" href="mailto:ib.bashir@hotmail.com" target="_blank" rel="noopener noreferrer">
                                    <Image fill sizes="48px" src="/assets/img/email.png" alt="Email Icon" />
                                </a>
                                <a className="contact__icon" href="https://github.com/ib-rim" target="_blank" rel="noopener noreferrer">
                                    <Image fill sizes="48px" src="/assets/img/github4.png" alt="GitHub Logo" />
                                </a>
                            </div>
                            <p className="name">Ibrahim Bashir</p>
                        </header>
                        <figure className="photo__figure u-circle-border">
                            <Image fill sizes="300px" className="u-circle-border" src="/assets/img/me.jpg"
                                alt="Photo of Ibrahim Bashir with glasses on and smiling at the camera" />
                        </figure>
                        <section className="skills-section">
                            <h2 className="heading">Skillset</h2>
                            <Ticker items={skills} />
                        </section>
                    </div>
                    <section className="portfolio">
                        <h2 className="heading">Portfolio</h2>
                        <Project projects={projects} />
                    </section>
                    <section className="">
                    </section>
                    <section className="personal">
                        <ReadingList books={books} />
                    </section>
                </div>
            </main>
        </>
    )
}
