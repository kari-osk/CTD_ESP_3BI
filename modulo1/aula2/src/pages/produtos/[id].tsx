import { useRouter} from 'next/router'

type QueryType = {
    id: string,
}

export default function ProductsDetailsPage() {
 
    const { query } = useRouter()

    const {id } = query as QueryType

    return (
        <div>
            <h1>Detalhe do produto {id}</h1>
        </div>
    )
}