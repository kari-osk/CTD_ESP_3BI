import { useRouter } from "next/router";
import { useState } from "react";

export default function FormTask(props: any) {
  const router = useRouter();
  const [task, setTask] = useState({
    title: props.dataTask ? props.dataTask.title : "",
    description: props.dataTask ? props.dataTask.description : "",
  });

  const handleChange = (e: any) => {
    setTask((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const storeData = async (e:any) => {
    await fetch("http://localhost:3000/api/tasks/", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    router.push("/");
  };
  const updateData = async (e: any) => {
    await fetch("http://localhost:3000/api/tasks/" + props.dataTask.id, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    router.push("/");
  };

  const handleButton = (action:any) => {
    if (action === 'add') {
        return <a className="rounded text-gray-100 px-3 py-1 bg-red-500 hover:shadow-inner hover:bg-red-700 transition-all duration-300" onClick={storeData}>Submit</a>
    } else if (action === 'update') {
        return <a className="rounded text-gray-100 px-3 py-1 bg-red-500 hover:shadow-inner hover:bg-red-700 transition-all duration-300" onClick={updateData}>Update</a>
    }
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">Título</label>
          <input type="text" 
          value={task.title}
          onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="category">Categoria</label>
          <input type="text" 
          
          onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="title">Data</label>
          <input type="text" 
          onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Descrição</label>
          <input type="text"
          value={task.description}
          onChange={handleChange}/>
        </div>
        {handleButton(props.action)}
      </form>
    </div>
  );
}
