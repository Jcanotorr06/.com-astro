import { createStore, SetStoreFunction, StoreSetter } from "solid-js/store"
import { send } from "@emailjs/browser"
import { createSignal } from "solid-js";
 
type FormFields = {
    from_name: string;
    from_email: string
    message: string;
}

type fieldName = keyof FormFields


const useForm = () => {

    type FormStatus = {
        isSubmitting: boolean;
        isSubmitted: boolean;
        isErrored: boolean;
        isSuccessful: boolean;
    }

    const [getFormStatus, setFormStatus] = createSignal<FormStatus>({
        isSubmitting: false,
        isSubmitted: false,
        isErrored: false,
        isSuccessful: false
    })

    const [getForm, setForm] = createStore<FormFields>({
        from_name: "",
        from_email: "",
        message: ""
    })
    
    const submit = async (values: FormFields, serviceId: string, templateId: string, publicId: string) => {
        const payload = {
            from_name: values.from_name,
            from_email: values.from_email,
            message: values.message
        }
        
        setFormStatus({
            isSubmitting: true,
            isSubmitted: false,
            isErrored: false,
            isSuccessful: false
        })

        await send(
            serviceId,
            templateId,
            payload,
            publicId
        ).then(
            response => {
                setFormStatus({
                    isSubmitting: false,
                    isSubmitted: true,
                    isErrored: false,
                    isSuccessful: true
                })
            },
            error => {
                setFormStatus({
                    isSubmitting: false,
                    isSubmitted: true,
                    isErrored: true,
                    isSuccessful: false
                })
            }
        )
    }

    const clearField = (fieldName: fieldName) => {
        setForm({
            [fieldName]: ""
        })
    }

    const updateField = (fieldName: fieldName) => (event: Event) => {
        const target = event.target as HTMLInputElement
        setForm({
            [fieldName]: target.value
        })
    }

    return {
        getForm,
        getFormStatus,
        submit,
        clearField,
        updateField
    }
}

export default useForm