import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { TeamsType } from "..";

export type ProductType = {
  available: boolean,
  _id: string,
  name: string;
  urlImage: string;
  price: number;
  discountPrice: number;
  description: string;
};

type PropsType = {
  products: ProductType[];
  team: TeamsType;
};

export default function TeamProducts(props: PropsType) {
  const { team, products } = props;
  const { name } = team;
  // const {name:teamName = "time", description = "Not Found", image = "Not Found"} = products

  return (
    <>
    
    <h1>{team.name}</h1>
      {products.length < 1 ? (
        <h1>Nenhum produto encontrado 😔</h1>
      ) : (
        <div>
          
          <div>
            {products.map((product) => (
              <Link href={`/product/${product._id}`}>
                <img
                  src={product.urlImage}
                  alt={product.name}
                  width={100}
                  height={100}
                />
                <h2>{product.name}</h2>
                <p>{product.discountPrice}</p>
                <p>{product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>

  );
}

type Params = {
  id: string;
} & ParsedUrlQuery;

type Props = {
  team?: TeamsType;
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const id = context.params?.id;
  const response = await fetch("https://api-products-dh-next.vercel.app/teams");
  const teams = await response.json();
  const team = teams.find((team: TeamsType) => team._id === id);
  // console.log(team)

  const responseProducts = await fetch(
    `https://api-products-dh-next.vercel.app/products/${id}`
  );
  const products = await responseProducts.json();
  // console.log(products);
  
  


  return {
    props: { team, products },
  };
};
