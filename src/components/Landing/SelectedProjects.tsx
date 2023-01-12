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
                        <div
                            role="listitem"
                            class="selected-project shadow-md"
                        >  
                            <div
                                class="grid overflow-hidden w-full h-full gap-0 grid-cols-2 rounded-2xl"
                            >
                                <div class="relative flex w-full h-full px-8 pt-12 pb-8 flex-col justify-between items-start bg-white">
                                    <div>
                                        <div>
                                            <h4
                                                class="font-secondary uppercase text-7xl text-gray-900"
                                            >
                                                {project.title}
                                            </h4>
                                        </div>
                                        <div>
                                            <h3
                                                class="font-secondary uppercase text-7xl text-gray-900"
                                            >
                                                {project.subtitle}
                                            </h3>
                                        </div>
                                        <div class="flex gap-4 mt-8">
                                            {
                                                project.tags.map((tag) => (
                                                    <div class="px-6 select-none py-1 rounded-full text-center border border-accent">
                                                        <p class="text-accent">{tag}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-4">
                                        <p class="max-w-md text-gray-900 text-lg">
                                            {project.description}
                                        </p>
                                        <div class="w-fit">
                                            <ArrowButton text="See Project" link={project.link} external/>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative flex w-full h-full flex-col justify-between items-start bg-accent overflow-hidden">
                                    <img src={project.image} class="object-cover w-full h-full"/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </article>
        </section>
    )
}

export default SelectedProjects