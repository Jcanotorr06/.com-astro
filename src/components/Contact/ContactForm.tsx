import { Component, createEffect } from "solid-js"
import { unwrap } from "solid-js/store"
import useForm from "../../hooks/useForm"

type Props = {
    serviceId: string
    templateId: string
    publicKey: string
}

const ContactForm:Component<Props> = (props:Props) => {
    const { serviceId, templateId, publicKey } = props
    
    const { getForm, updateField, getFormStatus, submit } = useForm()

    createEffect(() => {
        console.table(getFormStatus())
    })
    
    const handleSubmit = (e: Event) => {
        e.preventDefault()
        submit(getForm, serviceId, templateId, publicKey)
    }
    return(
        <section class="w-full px-8 lg:px-24 pt-48 h-screen relative">
            <article>
                <h1 class="text-4xl lg:text-6xl font-bold text-center">Contact</h1>
            </article>
                <form class="w-full h-full grid lg:grid-cols-2 grid-rows-6 gap-4" onSubmit={handleSubmit}>
                    <article class="flex items-center">
                        <div class="w-full px-3">
                            <label 
                                class="block uppercase tracking-wide font-bold mb-2" 
                                for="name"
                            >
                                Name
                            </label>
                            <input 
                                id="name" 
                                type="text"
                                required
                                minLength={3}
                                maxLength={30}
                                placeholder="Your name" 
                                onChange={updateField("from_name")} 
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                            />
                        </div>
                    </article>

                    <article class="flex items-center">
                        <div class="w-full px-3">
                            <label
                                class="block uppercase tracking-wide font-bold mb-2"
                                for="email"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                placeholder="Your email"
                                onChange={updateField("from_email")}
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            />
                        </div>
                    </article>

                    <article class="flex lg:col-span-2 row-span-3">
                        <div class="w-full px-3">
                            <label
                                class="block uppercase tracking-wide font-bold mb-2"
                                for="message"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                required
                                minLength={10}
                                maxLength={500}
                                placeholder="Your message"
                                onChange={updateField("message")}
                                class="appearance-none block w-full h-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white resize-none"
                            ></textarea>
                        </div>
                    </article>

                    <article class="flex items-center">
                        <div class="w-full px-3">   
                            <button
                                type="submit"
                                class="px-16 py-3 border rounded-full text-lg hover:text-gray-400 hover:border-gray-400 transition ease-in-out"
                            >
                                Send
                            </button>
                        </div>
                    </article>
                </form>
        </section>
    )
}

export default ContactForm