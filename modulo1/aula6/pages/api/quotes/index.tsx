import { NextApiRequest, NextApiResponse } from "next";


export type PostType ={
    id: number,
    title: string,
    body: string,
    userId: number
}

//next fornece type para o req res 
const handler = async (req:NextApiRequest, res: NextApiResponse<PostType[]>) => {
    const response  = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data:PostType[] = await response.json()

    res.status(200).json(data)
}

export default handler