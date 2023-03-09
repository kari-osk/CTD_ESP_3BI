import PageLayout from "@/layouts/Page";
import { GetStaticProps } from "next";
import Head from "next/head";

type ProdutType ={
    product: {
        id: number,
        title: string,
        description: string,
        thumbnail: string,
    }
}

export default function Produto({product}: ProdutType) {
    const {title, description, thumbnail} = product;
  return (
    <>
      <PageLayout title={title} description={description} thumbnail={thumbnail}/>
      <main>
        <h1>produto</h1>

      </main>
    </>
  );
}



export const getStaticProps: GetStaticProps = async (context) => {
    const data = await fetch('https://dummyjson.com/products/1')
    const product = await data.json()
    return {
        props: {
                product
        }
    }
}