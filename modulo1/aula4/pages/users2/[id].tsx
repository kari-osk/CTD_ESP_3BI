import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

export default function UserDetails(props: any) {
  const { user } = props;
  return (
    <div>
      details
      {JSON.stringify(user)}
    </div>
  );
}

type Params = {
  id: string;
} & ParsedUrlQuery;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params;

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const user = await response.json();

  if (!user?.id) {
    return {
        notFound: true,
    //   redirect: {
    //     destination: "/",
    //     permanent: false,
    //   },
    };
  }

  return {
    props: { user },
  };
};

// informação dos times static get static props  14 times
// loja getServerSideProps e detalhes 
//  https://api-products-dh-next.vercel.app/