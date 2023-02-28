import { GetStaticPaths, GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"

export default function UserDetails(props: any){
    const { user} = props
    return(
        <div>details

        {JSON.stringify(user)}
        </div>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    const alunos = await response.json()

    const paths = alunos.map((aluno: any) => ({
        params: {
            id:aluno.id.toString(),
        },

    }))

    return {
        paths: paths,
        fallback: false,
    }

    // return {
    //     // paths: [
    //     //     {params: {id: "1"}},
    //     //     {params: {id: "2"}},
    //     //     {params: {id: "3"}},
    //     // ], 
    //     // fallback: false,
    // }
}

type Params = {
    id:string;
}& ParsedUrlQuery

export const getStaticProps: GetStaticProps = async (context) => {
    const {id} = context.params as Params

    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
    
    const user = await response.json()

    return {
        props: {user},
        revalidate: 2,
    }
}