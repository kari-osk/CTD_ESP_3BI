import TaskModel from "@/models/task";
import MongoConnect from "@/services/mongodb";
import { NextApiHandler } from "next";

MongoConnect();

async function getAllTasks() {
  const tasks = await TaskModel.find();
  return tasks;
}

async function addTask(body: any) {
  try {
    if (body.name && body.description) {
      const response = await TaskModel.create(body);
      return response;
    }
  } catch (error) {
    return error;
  }
}

const handler: NextApiHandler = async (request, response) => {
  const method = request.method;
  const body = request.body;

  let status = 200;

  let result;

  switch (method) {
    case "GET":
      result = await getAllTasks();
      break;

    case "POST":
      result = await addTask(body);
      status = 201;
      break;

    default:
      result = { message: "Method not allowed" };
      status = 405;
  }

  return response.status(status).json(result);
};

export default handler;