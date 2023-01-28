import type { Component } from "solid-js"
import "../../styles/selectedProjects.css"
import ArrowButton from "../Buttons/ArrowButton"


type Project = {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}

const SelectedProjects:Component = () => {

    const projects:Project[] = [
        {
            title: "Ruth Cano —",
            subtitle: "Personal Portfolio",
            description: "A super clean and smooth porfolio website for Ruth Cano - an independent photographer, designer and videographer currently based in Canada.",
            image: "/images/project1.webp",
            link: "https://ruthcano.vercel.app",
            tags: ["Design", "Developement", "Portfolio"]
        },
        {
            title: "Ruth Cano —",
            subtitle: "Personal Portfolio",
            description: "A super clean and smooth porfolio website for Ruth Cano - an independent photographer, designer and videographer currently based in Canada.",
            image: "/images/project1.webp",
            link: "https://ruthcano.vercel.app",
            tags: ["Design", "Developement", "Portfolio"]
        },
        {
            title: "Ruth Cano —",
            subtitle: "Personal Portfolio",
            description: "A super clean and smooth porfolio website for Ruth Cano - an independent photographer, designer and videographer currently based in Canada.",
            image: "/images/project1.webp",
            link: "https://ruthcano.vercel.app",
            tags: ["Design", "Developement", "Portfolio"]
        },
    ]
    
    return (
        <section
            class="relative px-8 w-full"
        >
            <article>
                <h1 class="font-bold text-8xl uppercase select-none">
                    Selected Projects
                </h1>
            </article>
            <article
                role="listbox"
                class="py-16 w-full flex flex-col gap-40 relative"
            >
                {
                    projects.map((project) => (
                        <div class="px-4">
                            <h4 class="text-6xl font-bold select-none">
                                {project.title}{project.subtitle}
                            </h4>
                            <div class="w-full border mt-8"/>
                        </div>
                    ))
                }
            </article>
        </section>
    )
}

export default SelectedProjects