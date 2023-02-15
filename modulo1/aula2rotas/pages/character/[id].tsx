import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface ICharacter {
  id: number;
  name: string;
  status: string;
}

const Character = () => {
  const [character, setCharacter] = useState<ICharacter | null>();
   const { query} = useRouter();
   const { id} = query; 
  
  const fetchData = async () => {
    const urlApi = `https://rickandmortyapi.com/api/character/${id}`;
    const response = await fetch(urlApi);
    const data = await response.json();

    setCharacter(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(!character)return "Loading ...";

  
  return (
    <div>
      <ul >
        <li key={character?.id}>
          <h2>{character?.name}</h2>
          <p>{character?.status}</p>
        </li>
      </ul>
    </div>
  );
};

export default Character;
