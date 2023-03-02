import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { TeamsType } from "..";

export type ProductType = {
  available: boolean;
  _id: string;
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
    <div className="bg-gray-900 h-screen w-screen">
      <h1 className="text-white text-2xl">{team.name}</h1>
      {products.length < 1 ? (
        <div className="bg-gray-900 h-full grid items-center">
          <h2 className="text-xl text-center justify-center text-gray-200">
            Nenhum produto encontrado 😔
          </h2>
        </div>
      ) : (
        <div className="">
          <div className="h-screen w-screen grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4  place-items-center">
            {products.map((product) => (
              <Link href={`/product/${product._id}`}>
                <div className="w-[220px] h-[320px] bg-gray-700 rounded-xl py-4 px-4 text-white text-center">
                  <Image
                    src={product.urlImage}
                    alt={product.name}
                    width={200}
                    height={200}
                  />
                  <h2>{product.name}</h2>
                  <small className="line-through">R$ {product.price}</small>
                  <p className="text-xl">R$ {product.discountPrice}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
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
