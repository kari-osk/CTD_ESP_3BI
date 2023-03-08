import { TasksType } from "@/utils/types";
import { useRouter } from "next/router";
import { useState } from "react";


type ShowTaskType = {
    tasks: TasksType,
    url: string
}



const handleDelete = () => {

}

export default function ShowTask(props: ShowTaskType) {
    const router = useRouter()

    const [tasks, setTasks] = useState<TasksType>(props.tasks)

    const handleComplete = async () => {
        if(!tasks.completed) {
            const newTasks: TasksType = {...tasks, completed: true}

            await fetch(props.url + "/" + tasks._id, {
                method: 'put',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTasks)
            })
            setTasks(newTasks)
        }
    }

    const handleDelete = async () => {
        await fetch(props.url + "/" + tasks._id, {
            method: 'delete',
        })
        router.push("/")
    }
    
    return (
        <div>
            <h1>{tasks.item}</h1>
            <h2>{tasks.completed ? "realizada" : "não realizada"}</h2>
            <button onClick={handleComplete}>Concluida</button>
            <button onClick={handleDelete}>Excluir</button>
        </div>
    )
}

export const getServerSideProps = async (context:any) => {
    const response = await fetch(process.env.API_URL + "/" + context.query.id)
    const tasks = response.json()

    return {
        props: {
            tasks, url: process.env.API_URL
        }
    }
}