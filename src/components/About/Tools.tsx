import type { ToolType } from "../../types/Tools";
import Tool from "./Tool";
const Tools = () => {

    const tools: ToolType[] = [
        {
            category: "Programming Languages",
            description: "JavaScript(ES6+), TypeScript, HTML5, CSS3, Python, SQL"
        },
        {
            category: "Frontend Technologies",
            description: "React, SolidJS, NextJS, Astro, TailwindCSS, Framer Motion, Bootstrap, MaterialUI, SASS, LESS, Vite, Redux, Redux Toolkit, Redux Thunk, Tanstack Query, Zustand, PWA, SEO"
        },
        {
            category: "Backend Technologies",
            description: "NodeJS, ExpressJS, Fastify, Deno, Django, Flask, PostgreSQL, MongoDB, MySQL, REST API, Supabase, Netlify, Vercel"
        },
        {
            category: "Tools",
            description: "Figma, Postman, Git, Github, Docker, NPM, YARN, Notion, Google Analytics"
        },
        {
            category: "Interests",
            description: "Web Development, UI Design, Artificial Intelligence, Machine Learning, E-Commerce"
        }
    ]

    return (
        <article class="flex flex-col gap-4 lg:gap-12 lg:col-span-2 row-start-2 lg:row-start-auto">
            {tools.map(tool => (
                <Tool tool={tool} />
            ))}
        </article>
    )
}

export default Tools;