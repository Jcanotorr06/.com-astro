import { type Component, createEffect, createSignal, onMount } from "solid-js";
import "../../styles/navbar.css"

const NavBar:Component = () => {

    const [menuOpen, setMenuOpen] = createSignal(false);
    const [colorModeOpen, setColorModeOpen] = createSignal(false);
    const [languageOpen, setLanguageOpen] = createSignal(false);
    const [hidden, setHidden] = createSignal(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen());
        document.body.classList.toggle("overflow-hidden");
    }

    const toggleColorMode = () => {
        setColorModeOpen(!colorModeOpen());
    }

    const setColorMode = (color:"default"|"red"|"green") => {
        // change data-theme on body
        document.body.dataset.theme = color;
    }

    // Hide Navbar on scroll down, show on scroll up
    onMount(() => {
        let scrollPos = window.scrollY;
        window.onscroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > scrollPos) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            scrollPos = currentScrollPos;
        }
    })

    return (
        <nav class={`w-full fixed left-0 z-50 max-w-full px-8 lg:px-24 pt-12 transition-all duration-1000 ease-in-out bg-blend-overlay ${hidden() ? "-top-32" : "top-0"}`}>
            <section class="flex justify-between items-center w-full pb-5 relative z-[51]">
                <article id="nav-left">
                    <a href="/" class=" text-sm lg:text-2xl tracking-tight text-gray-300">
                        Joseph Cano&trade;
                    </a>
                </article>
                <article class="flex justify-end items-center gap-4" id="nav-right">
                    <div
                        role="button"
                        aria-pressed={colorModeOpen()}
                        onClick={toggleColorMode}
                        id="color-mode-button"
                        aria-label="color mode button"
                        class="relative hidden lg:flex overflow-hidden h-11 px-2 py-1 lg:px-4 lg:py-3 justify-end items-center gap-4 rounded-full uppercase hover:cursor-pointer touch-manipulation"
                    >
                        <ul
                            id="color-mode-list"
                            class="relative z-[1] flex gap-2 list-none transition-all"
                        >
                            <li 
                                onClick={() => setColorMode("red")}
                                class="relative flex justify-center items-center w-5 h-5 border border-opacity-20 hover:cursor-pointer rounded-full overflow-hidden bg-gray-100"
                            >
                                <div class="absolute w-full h-full rounded-l-full bg-red-800 transform -translate-x-1/2" />
                            </li>
                            <li 
                                onClick={() => setColorMode("green")}
                                class="relative flex justify-center items-center w-5 h-5 border border-opacity-20 hover:cursor-pointer rounded-full overflow-hidden bg-gray-100"
                            >
                                <div class="absolute w-full h-full rounded-l-full bg-green-800 transform -translate-x-1/2" />
                            </li>
                            <li 
                                onClick={() => setColorMode("default")}
                                class="relative flex justify-center items-center w-5 h-5 border border-opacity-20 hover:cursor-pointer rounded-full overflow-hidden bg-gray-100"
                            >
                                <div class="absolute w-full h-full rounded-l-full bg-blue-800 transform -translate-x-1/2" />
                            </li>
                        </ul>

                        <div class="relative z-[1] text-xs lg:text-base">
                            Color Mode
                        </div>
                        <div
                            id="color-mode-background"
                            class="absolute w-full h-[44px] right-0 bottom-0 z-[0] rounded-full bg-slate-800 shadow-sm"
                        />
                    </div>
                    {/* <div
                        role="combobox"
                        aria-expanded={languageOpen()}
                        aria-controls="language-list"
                        aria-haspopup="listbox"
                        id="language-button"
                        class="relative flex overflow-hidden h-11 px-4 py-1 lg:px-8 lg:py-3 justify-end items-center gap-4 rounded-full uppercase hover:cursor-pointer touch-manipulation"
                    >
                        <div
                            class="relative z-[1] text-xs lg:text-base"
                        >
                            EN
                        </div>
                        <div
                            id="language-background"
                            class="absolute w-full h-[44px] right-0 bottom-0 z-[0] rounded-full bg-slate-800 shadow-sm"
                        />
                    </div> */}
                    {/* <div
                        role="button"
                        aria-pressed={menuOpen()}
                        onClick={toggleMenu}
                        id="menu-button"
                        class="relative flex w-10 h-10 lg:w-14 lg:h-14 flex-col items-center justify-center rounded-full hover:cursor-pointer overflow-hidden"
                    >
                        <div class="menu-line menu-line-top transform -translate-y-1"/>
                        <div class="menu-line menu-line-middle" />
                        <div class="menu-line menu-line-bottom transform translate-y-1"/>
                        <div
                            id="menu-background"
                            class="w-full rounded-full h-full absolute z-0 bg-white transition-all"
                        />
                    </div> */}
                    <div class="menu">
                        <input type="checkbox" id="active" />
                        <label for="active" class="menu-btn">
                            <div class="menu-line"/>
                            <div class="menu-line"/>
                            <div class="menu-line"/>
                        </label>
                        <div class={`menu-wrapper ${hidden() ? "-top-32" : "top-0"}`}>
                            <ul class="w-full h-full flex flex-col items-center justify-center gap-12 lg:gap-24">
                                <li>
                                    <a 
                                        href="/"
                                        class="text-2xl lg:text-5xl font-bold hover:text-gray-600 hover:underline transition-all"
                                    >
                                            Home
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="/about"
                                        class="text-2xl lg:text-5xl font-bold hover:text-gray-600 hover:underline transition-all"
                                    >
                                            About
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="/contact"
                                        class="text-2xl lg:text-5xl font-bold hover:text-gray-600 hover:underline transition-all"
                                    >
                                            Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </section>
        </nav>
    );
}

export default NavBar;