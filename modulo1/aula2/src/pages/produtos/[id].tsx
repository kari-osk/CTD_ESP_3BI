import { api } from "@/services/api";
import { useRouter} from 'next/router'
import { useEffect, useState } from "react"

type ProductType = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string[];
  };


type QueryType = {
    id: string,
}

export default function ProductsDetailsPage() {
 
    const [product, setProduct] = useState<ProductType | null>()

    const { query, back } = useRouter()

    const {id } = query as QueryType


    useEffect(()=>{
        api
        .get("/products/" + id)
        .then((res)=> setProduct(res.data))
        .catch((error)=> alert(error))
    },[])

    return (
        <div>
            <h1>Detalhe do produto {id}</h1>
            <div key={product?.id}>
                <h2>{product?.title}</h2>
                <p>{product?.description}</p>
                <p>U$ {product?.price}</p>
                <img src={product?.image}></img>
            </div>
            <button onClick={()=> back()}>voltar para a página anterior</button>
        </div>
    )
}