import { GetServerSideProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io"

type ProductType = {
  available: boolean;
  _id: string;
  name: string;
  urlImage: string;
  price: number;
  discountPrice?: number;
  maker: string;
  categoryId: string;
  description: string;
};

type PropsProduct = {
  product: ProductType;
};

export default function ProductDetail(props: PropsProduct) {
  const { product } = props;

  const { back} = useRouter()


  return (
    <div className="bg-zinc-900 container max-w-[1100px] min-h-screen mx-auto my-auto">
      <button className="text-zinc-500 pb-8" onClick={()=> back()}>&#x25C0; voltar para a página anterior</button>
      <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="w-[375px] h-[500px] bg-zinc-700 py-4 rounded-md flex items-center justify-center ">
          <Image
            src={product.urlImage}
            alt={product.name}
            width={375}
            height={400}
          />
        </div>
        <div className="text-zinc-100 px-4 py-8 md:py-0">
          <h2 className="text-2xl pb-3">{product.name}</h2>
          <h3 className="text-sm ">{product.maker}</h3>
          <div className="py-8">
            {product.discountPrice ? (
              <div>
                <h4 className="line-through text-sm"> R$ {product.price}</h4>
                <h4 className="text-3xl ">R$ {product.discountPrice}</h4>
              </div>
            ) : (
              <h4>{product.price}</h4>
            )}
          </div>
          <small>Descrição</small>
          <p className="text-sm pt-2">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

type Params = {
  id: string;
} & ParsedUrlQuery;

type Props = {
  product?: ProductType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params;

  const response = await fetch(
    `https://api-products-dh-next.vercel.app/product/${id}`
  );
  const product = await response.json();

  //   console.log(product);

  return {
    props: { product },
  };
};
