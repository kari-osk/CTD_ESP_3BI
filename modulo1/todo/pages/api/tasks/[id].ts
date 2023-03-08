import { connectBd } from "@/models/connections"
import { IResponseFunc } from "@/utils/types"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async(req:NextApiRequest, res:NextApiResponse) => {
    const method: keyof IResponseFunc = req.method as keyof IResponseFunc

    const catcher = (error: Error) => res.status(400).json({error})

    const id: string = req.query.id as string

    const handleCase: IResponseFunc = {
        
        GET: async(req:NextApiRequest, res:NextApiResponse) => {
            const { Tasks } = await connectBd()
            res.json(await Tasks.findById(id).catch(catcher))
        },
        PUT: async(req:NextApiRequest, res:NextApiResponse) => {
            const { Tasks } = await connectBd()
            res.json(await Tasks.findByIdAndUpdate(id, req.body, {new: true}).catch(catcher))
        },
        DELETE: async(req:NextApiRequest, res:NextApiResponse) => {
            const { Tasks } = await connectBd()
            res.json(await Tasks.findByIdAndRemove(id).catch(catcher))
        },
    }
    const response = handleCase[method]
    if(response) response(req, res)
    else res.status(400).json({error: "sem responta"})
}
    export default handler