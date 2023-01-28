import { type Component, createEffect, createSignal, onCleanup } from 'solid-js';
import "../../styles/loader.css"

const Loader:Component = () => {
    const [visible, setVisible] = createSignal(true);
    // hide loader after 5 seconds
    setTimeout(() => setVisible(false), 5400);

    // cleanup
    onCleanup(() => {
        setVisible(false);
    });

    createEffect(() => {
        visible() && document.body.classList.add("overflow-hidden");
        !visible() && document.body.classList.remove("overflow-hidden");
    })

    if(!visible()) return null;
    return (
        <div class="loader w-screen h-screen text-white" hidden={!visible()} aria-hidden>
            <div class="w-full h-full flex p-12 flex-col justify-between items-start">
                <div 
                    id="loader-number-container" 
                    class="overflow-hidden w-full flex pt-1 justify-end items-stretch font-bold leading-[1] h-[96px] text-[90px] lg:h-[256px] lg:text-[250px]"
                >
                    <div class="overflow-hidden flex" id="loader-sub-container">
                        <div class="grid auto-rows-max auto-cols-fr gap-0 text-right" id="loader-hundreds">
                            {/* Hundreds */}
                            <div>0</div>
                            <div>1</div>
                        </div>
                        <div class="grid auto-rows-max auto-cols-fr gap-0 text-right" id="loader-tens">
                            {/* Tens */}
                            {
                                Array.from({ length: 11 }, (_, i) => (
                                    <div>{i > 9 ? 0 : i}</div>
                                ))
                            }
                        </div>
                        <div class="grid auto-rows-max auto-cols-fr gap-0 text-right" id="loader-ones">
                            {/* Ones */}
                            {
                                Array.from({ length: 10 }, (_, i) => (
                                    Array.from({ length: 11 }, (_, j) => (
                                        <div>{j > 9 ? 0 : j}</div>
                                    ))
                                ))
                            }
                        </div>
                        <div class="grid auto-rows-max auto-cols-fr gap-0 text-right">
                            <div>%</div>
                        </div>
                    </div>
                </div>
                <div class="overflow-hidden w-full text-3xl leading-[1] uppercase">
                    <span aria-hidden>
                        Joseph Cano
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Loader