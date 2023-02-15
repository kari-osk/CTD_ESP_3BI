import { useRouter } from "next/router"

type QueryType ={
    name: string;
    matricula: string;
}


export default function AlunoMatriculaPage() {
    const {query} = useRouter();
    const {matricula, name} = query as QueryType;
    return (
        <div>
            <h1>detalhe de matricula do aluno {name} {matricula} </h1>
        </div>
    )
}