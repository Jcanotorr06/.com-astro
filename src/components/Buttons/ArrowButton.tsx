import type { Component } from "solid-js";

type Props =  {
    text: string;
    link: string;
    external?: boolean;
}
const ArrowButton: Component<Props> = (props) => {

    const { text, link, external } = props

    return (
        <div id="about-me-button" class="relative z-[1] px-5 py-3 uppercase flex gap-3 items-center justify-center rounded-full overflow-hidden border text-sm border-gray-900 hover:cursor-pointer">
            <span class="mix-blend-difference text-gray-900 text-sm lg:text-base">{text}</span>
            <div id="about-me-arrow" class="w-6 h-6 relative p-2 flex items-center justify-center bg-gray-900 rounded-full flex-grow-0 shrink-0 basis-auto">
                <div>
                    ↴
                </div>
            </div>
            <a
                href={link}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                id="about-me-background"
                class="absolute z-10 backdrop-invert rounded-full"
            />
        </div>
    )
}

export default ArrowButton
