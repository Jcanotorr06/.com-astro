// This is a reusable SolidJS button component

import { createSignal, onCleanup } from 'solid-js';

const Button = () => {
    const [count, setCount] = createSignal(0);
    
    const increment = () => {
        setCount(count() + 1);
        console.log("Button clicked")
    };
    
    onCleanup(() => {
        console.log('Button component is unmounted');
    });
    
    return (
        <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={increment}
        >
        Count: {count()}
        </button>
    );
}

export default Button;