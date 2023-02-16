import Head from 'next/head';
import Image from 'next/image';
import Project from './components/Project';
import Ticker from './components/Ticker';
import { Client } from '@notionhq/client';

export async function getStaticProps() {
    const notion = new Client({ auth: process.env.NOTION_KEY });

    const skillsDatabaseID = process.env.NOTION_SKILLS_DATABASE_ID;
    const skillsResponse = await notion.databases.query({
        database_id: skillsDatabaseID,
        "sorts": [
            {
                "property": "Order",
                "direction": "ascending"
            }
        ]
    })

    let skillsList = []
    skillsResponse.results.forEach((result) => {
        skillsList.push(result.properties.Name.title[0].plain_text)
    })

    const projectsDatabaseID = process.env.NOTION_PROJECTS_DATABASE_ID;
    const projectsResponse = await notion.databases.query({
        database_id: projectsDatabaseID,
        "sorts": [
            {
                "property": "Order",
                "direction": "ascending"
            }
        ]
    })

    let projectsList = [];
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

    return {
        props: {
            skills: skillsList,
            projects: projectsList,
        },
    };
}

export default function Home({ skills, projects }) {

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
                            <Ticker items={skills || []}/>
                        </section>
                    </div>
                    <section className="portfolio">
                        <h2 className="heading">Portfolio</h2>
                        <Project projects={projects || []}/>
                    </section>
                </div>
            </main>
        </>
    )
}
