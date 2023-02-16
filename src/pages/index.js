import Head from 'next/head';
import Image from 'next/image';
import Project from './components/Project';
import Ticker from './components/Ticker';
import { useState } from 'react';
import { Client } from '@notionhq/client';

export async function getStaticProps() {
    const notion = new Client({ auth: process.env.NOTION_KEY });

    const databaseID = process.env.NOTION_SKILLS_DATABASE_ID;
    const response = await notion.databases.query({
        database_id: databaseID,
        "sorts": [
            {
                "property": "Order",
                "direction": "ascending"
            }
        ]
    })

    let skillsList = []
    response.results.forEach((result) => {
        skillsList.push(result.properties.Name.title[0].plain_text)
    })

    return {
        props: {
            skills: skillsList,
        },
    };
}

export default function Home({ skills }) {

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
                            <Ticker items={skills}/>
                        </section>
                    </div>
                    <section className="portfolio">
                        <h2 className="heading">Portfolio</h2>
                        <Project/>
                    </section>
                </div>
            </main>
        </>
    )
}
