// import FormTask from "@/components/FormTask";
// import { GetServerSideProps } from "next";


// type TaskType = {
//     id: string,
//     title: string,
//     category: string,
//     description: string
// }

// type Props = {
//     task: TaskType[]
// }

// export default function EditTask(props: Props) {
//   return (<>
//     <FormTask action="update" dataTask={props.task}/>
//     </>);
// }

// export const getServerSideProps = async (context:any) => {
//   const { id } = context.query;
//   if (id) {
//     const response = await fetch("http://localhost:3000/api/tasks/" + id);
//     const task = await response.json();

//     if (!task) {
//       return {
//         notFound: true,
//       };
//     }
//     return {
//       props: { task },
//     };
//   }
// };
