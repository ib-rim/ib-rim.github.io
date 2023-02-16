import styles from '@/styles/Project.module.scss';
import { useState } from 'react';
import Image from 'next/image';

export default function Project(props) {

    const [projects] = useState(props.projects);
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
                    <p className={styles.description} dangerouslySetInnerHTML={{ __html: projects[currentProject].description }}></p>
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