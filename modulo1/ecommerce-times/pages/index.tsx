import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { AiFillInfoCircle } from "react-icons/ai";

export type TeamsType = {
  _id: string;
  name: string;
  image: string;
};

export interface ITeamsProps {
  teams: TeamsType[];
}

export default function Home({ teams }: ITeamsProps) {
  return (
    <>
      <Head>
        <title>Ecommerce Times</title>
        <meta name="description" content="Ecommerce Times" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-zinc-900 w-full h-full justify-center">
        <div className="mx-auto my-auto w-fit grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 items-center justify-center">
          {teams.map((team) => (
            <div className="w-[180px] bg-zinc-700 rounded-xl py-4 px-4">
              <div className="relative mb-6">
              <Link className="absolute right-0" href={`/teams/${team._id}`}><AiFillInfoCircle color="gray" size={22}/></Link>
              </div>

              <Link href={`/team/${team._id}`}>
                <Image
                  src={team.image}
                  alt={team.name}
                  width={150}
                  height={150}
                />
                <h2 className="text-center text-white">{team.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      </main>  
    </>
  );
}

type Params = {
  id: string;
} & ParsedUrlQuery;

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch("https://api-products-dh-next.vercel.app/teams");
  const teams = await response.json();

  // console.log(teams);

  return {
    props: { teams },
  };
};
