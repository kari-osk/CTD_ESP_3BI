import { NextApiRequest, NextApiResponse } from "next"
import { users } from "@/data"

const handler = async (req:NextApiRequest, res:NextApiResponse) => {
    const {email, password } = req.body
    const findUser = users.find(user => user.email === email && user.password === password)

    if(!findUser) {
        res.status(403).send({message: "User not found"})
    } else {
        res.status(200).send({message: "User ok"})
    }
}



export default handler