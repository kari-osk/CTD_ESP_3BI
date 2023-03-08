import { TasksType } from "@/utils/types"
import { useRouter } from "next/router"
import { FormEventHandler, useRef } from "react"

type CreatePropsType = {
    url: string
}

export default function Create(props: CreatePropsType) {

    const router = useRouter()
    const item = useRef<HTMLInputElement>(null)

    const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault()

        let task: TasksType = {item: "", completed: false}
        if(null != item.current) {
            task = {item: item.current.value, completed:false} 
        }

        await fetch(props.url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(task)
        })
        router.push("/")
    }
    return (
        <div className="min-h-screen grid content-center justify-center bg-zinc-900">
        <div className="w-[375px] md:w-[500px] min-h-[130px] bg-blue-900 rounded">

            <h1 className="text-xl py-4 px-4">Adicione uma tarefa</h1>
            <form onSubmit={handleSubmit} className="px-2">
                <input type="text" ref={item} className="w-full border bg-blue-300 py-2 border-blue-400"/>
            </form>
            </div>
        </div>
    )
}

export const getStaticProps = (context:any) => {
    return {
        props: {
            url: process.env.API_URL,
        }
    }
}