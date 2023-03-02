import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";


export type TeamInfoType = {
    response: {
      id: string;
      name: string;
      image: string;
      description: string;
    }
  }
  
  interface ITeamProps {
    team: TeamInfoType[]
  }

export default function Info(props: ITeamProps) {
    const {team} = props

    return(
        <>
            {team}
        </>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const response= await fetch("https://api-products-dh-next.vercel.app/teams")
    const teams = await response.json()
    const paths = teams.map((team: TeamInfoType) => ({
        params: {
            id:team.response.id
        }
    }))

    return {
        paths: paths,
        fallback: false
    }
}

type Params = {
    id: string;
  } & ParsedUrlQuery;
  
  export const getStaticProps: GetStaticProps = async (context) => {
    const { id} = context.params as Params;
  
    const response= await fetch("https://api-products-dh-next.vercel.app/teams" + id);
    const team = await response.json();
  
    return {
      props: {  team },
    };
  };
  