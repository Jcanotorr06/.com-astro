import type { Component } from "solid-js";
import type { ToolType } from "../../types/Tools";

type Props = {
    tool: ToolType
}

const Tool:Component<Props> = (props:Props) => {
    const { tool } = props;
    return (
        <div class="flex flex-col gap-2">
            <h6 class="font-medium lg:text-2xl">
                {tool.category}
            </h6>
            <p class="text-sm lg:text-lg text-gray-400 font-light">
                {tool.description}
            </p>
        </div>
    )
}

export default Tool;