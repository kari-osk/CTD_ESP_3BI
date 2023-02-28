import Link from "next/link";

export default function UsersPage(props: any) {
  const { users } = props;
  return (
    <div>
      users 2
      <div>
        <ul>
          {users.map((user:any) => (
            <Link href={"/users/" + user.id}>
              <li>{user.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
};
