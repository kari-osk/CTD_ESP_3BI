import { api } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductsType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductsType | null>();

  const { query, back} = useRouter()

  useEffect(() => {
    api.get(`/products`).then((response) => {
      setProducts(response.data.products);
    });
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
                <Link href={`/produtos/${product.id}`}>
                    Detalhe do produto
                </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
