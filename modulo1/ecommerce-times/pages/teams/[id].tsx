import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";

export type TeamsType = {
  _id: string;
  name: string;
  image: string;
};

export interface ITeamsProps {
  teams: { results: TeamsType[] };
}

export type TeamInfoType = {
  response: {
    id: string;
    name: string;
    image: string;
    description: string;
  };
};

interface ITeamProps {
  team: TeamInfoType;
}

export default function Info(props: ITeamProps) {
  const { team } = props;
  // console.log(team.response.name);

  const { back } = useRouter();

  return (
    <>
      <button className="text-zinc-500 pb-8" onClick={back}>&#x25C0; voltar para a página anterior</button>
      <div className="bg-zinc-900 container max-w-[1100px] min-h-screen mx-auto my-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="bg-zinc-700 w-[375px] h-[550px] py-4 rounded-md flex items-center justify-center ">
          <Image
            src={team.response.image}
            alt={team.response.name}
            width={350}
            height={400}
          />
        </div>
        <div className="text-zinc-100">
          <h1 className="text-2xl ">{team.response.name}</h1>
          <p className="pt-2">{team.response.description}</p>
        </div>
      </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    "https://api-products-dh-next.vercel.app/teams/"
  );
  const teams: TeamsType[] = await response.json();

  // console.log(teams)

  const paths = teams.map((team) => ({
    params: {
      id: team._id,
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

type Params = {
  id: string;
} & ParsedUrlQuery;

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as Params;

  const response = await fetch(
    "https://api-products-dh-next.vercel.app/teams/" + id
  );
  const team = await response.json();

  // console.log(team.response.name);

  return {
    props: { team },
  };
};
