import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { TeamsType } from "..";

type ProductType = {
  available: boolean;
  _id: string;
  name: string;
  urlImage: string;
  price: number;
  discountPrice: number;
  maker: string;
  categoryId: string;
  description: string;
};

type PropsProduct = {
  product: ProductType;
};

export default function ProductDetail(props: PropsProduct) {
  const { product } = props;

  return (
    <>
      <div>
        <img src={product.urlImage} alt={product.name} />
        <div>
          <h2>{product.name}</h2>
          <h3>{product.maker}</h3>
          <h4>{product.discountPrice}</h4>
          <h4>{product.price}</h4>
          <small>Descrição</small>
          <p>{product.description}</p>
        </div>
      </div>
    </>
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
