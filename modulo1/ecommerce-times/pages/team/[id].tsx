import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { TeamsType } from "..";
import { useRouter } from "next/router";


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

  const { back} = useRouter()

  return (
    <div className="bg-zinc-900 min-h-screen min-w-screen container">
      <button className="text-zinc-500 pb-8" onClick={()=> back()}>&#x25C0; voltar para a página anterior</button>
      <h1 className="text-white text-2xl pb-4">{team.name}</h1>
      {products.length < 1 ? (
        <div className="bg-zinc-900 flex items-center justify-center pt-[250px]">
          <h2 className="text-xl text-center text-zinc-200">
            Nenhum produto encontrado 😔
          </h2>
        </div>
      ) : (
        <div>
          <div className="min-h-screen min-w-screen grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map((product) => (
              <Link href={`/product/${product._id}`}>
                <div className="w-[220px] h-[320px] bg-zinc-700 rounded-xl py-4 px-4 text-white text-center">
                  <Image
                    src={product.urlImage}
                    alt={product.name}
                    width={190}
                    height={190}
                  />
                  <h2 className="text-base">{product.name}</h2>
                  {product.discountPrice ? (
                    <div>
                      <small className="font-sm line-through">R$ {product.price}</small>
                      <h4 className="text-base">R$ {product.discountPrice}</h4>
                    </div>
                  ) : (
                    <h4 className="text-base">R$ {product.price}</h4>
                  )}
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
