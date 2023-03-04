import { PostType } from "./api/quotes";

type Props = {
  posts: PostType[];
};

export default function Posts(props: Props) {
  const { posts } = props;
  return (
    <>
    {
        posts.map(post =>(
            <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            </div>
        ))
    }
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostType[] = await response.json();
  return {
    props: { posts },
  };
};
