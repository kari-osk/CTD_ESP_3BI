import { Character, GetCharacterResults } from "@/types";
import Image from "next/image";
import { useRouter} from "next/router"; 

function CharacterPage({character}: {
    character: Character
}) {
    const router = useRouter()

    return(
        <div>
            <button type="button" onClick={()=> router.back()}>
                Click here to go back
            </button>
            <h1>Charactes page</h1>
            <h2>{character.name}</h2>
            <Image src={character.image} alt={character.name} width="200" height="200"/>
        </div>
    )
}


export async function getStaticPaths() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const { results }: GetCharacterResults = await res.json();

    return {
        paths: results.map((character) =>{
            return {params: {id: String(character.id)}}
        }),
        fallback: "blocking"
    }
}

export async function getStaticProps({params}: {params: {id: string}})  {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
    const character = await res.json();
    return{
        props: {
            character

        }
    }
}

export default CharacterPage;