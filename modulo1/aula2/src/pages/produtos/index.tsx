import { api } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: number;
  title: string;
  description: string;
  image: string[];
};

type ProductListType = ProductType[]

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductListType | []>([]);

  const { query, push} = useRouter()

  useEffect(() => {
    api
    .get("/products")
    .then((response) => setProducts(response.data.products))
    .catch((error) => alert(error));
  }, []);

  return (
    <div>
      <h1>Lista de produtos</h1>
      {products?.map((product) => (
        <div key={product.id}>
          <ul>
            <li>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <Image src={product.image} alt={product.title} />
              <button onClick={()=> push(`/produtos/${product.id}`)}>

                    Detalhe do produto

              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
