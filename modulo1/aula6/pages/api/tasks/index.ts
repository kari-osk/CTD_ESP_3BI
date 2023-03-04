import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

// export default function handler(request:NextApiRequest, response:NextApiResponse) {
//     return response.json({message: "Hello world"})
// }

const handler: NextApiHandler = (request, response) => {
  // console.log(request)

  const method = request.method;

  let result

  switch (method) {
    case "GET":
        result=
      console.log("get");
      break;
    case "POST":
      console.log("POST");
      break;
    default:
      console.log("not allowed");
  }

  // console.log(method)
  return response.json(result);
};

export default handler;
