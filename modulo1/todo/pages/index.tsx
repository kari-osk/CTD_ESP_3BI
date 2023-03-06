// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
// import { GetServerSideProps } from "next";
// import { useState } from "react";
// import FormTask from "@/components/FormTask";

import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

// type TaskType = {
//   id: string;
//   title: string;
//   category: string;
//   description: string;
// };

// type Props = {
//   task: TaskType[];
// };

// export default function Home(props: Props) {
//   const [tasks, setTasks] = useState(props.task);

//   const getAll = async () => {
//     const response = await fetch("http://localhost:3000/api/tasks/");
//     const task = await response.json();
//     setTasks(task);
//   };

//   const deleteTask = async (id: TaskType) => {
//     console.log("delete");
//     await fetch("http://localhost:3000/api/tasks/" + id, {
//       method: "DELETE",
//     });
//     getAll();
//   };

//   // const showTask = (tasks:TaskType) => {
//   //   return tasks.map(()=> {
//   //     return(
//   //       <div>
//   //         <h2>{tasks.title}</h2>
//   //       </div>
//   //     )
//   //   })
//   // }

//   return (
//     <>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main>
//         <div>
//           <FormTask action="add" />
//         </div>
//         <div>
//           {tasks.map((task) => (
//             <div key={task.id}>
//               <h2>{task.title}</h2>
//               <p>{task.description}</p>
//             </div>
//           ))}
//         </div>
//       </main>
//     </>
//   );
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const response = await fetch("http://localhost:3000/api/tasks");
//   const task = await response.json();
//   if (!task) {
//     return {
//       notFound: true,
//     };
//   }
//   return { props: { task } };
// };

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <form action="/api/form" method="post">
      <label htmlFor="first">First Name</label>
      <input type="text" id="first" name="first" required />

      <label htmlFor="last">Last Name</label>
      <input type="text" id="last" name="last" required />

      <button type="submit">Submit</button>
    </form>
      </main>
    </>
  );
}
