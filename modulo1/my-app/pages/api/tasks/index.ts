import { connectBd } from "@/models/connections"
import { IResponseFunc } from "@/utils/types"
import { connect } from "http2"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async(req:NextApiRequest, res:NextApiResponse) => {
    const method: keyof IResponseFunc = req.method as keyof IResponseFunc

    const catcher = (error: Error) => res.status(400).json({error})

    const handleCase: IResponseFunc = {
        GET: async(req:NextApiRequest, res:NextApiResponse)=> {
            const { Tasks } = await connectBd()
            res.json(await Tasks.find({}).catch(catcher))
        },
        POST: async(req:NextApiRequest, res:NextApiResponse)=> {
            const { Tasks } = await connectBd()
            res.json(await Tasks.create(req.body).catch(catcher))
        },
    }
    const response = handleCase[method]
    if(response) response(req, res)
    else res.status(400).json({error: "sem responta"})

}

export default handler