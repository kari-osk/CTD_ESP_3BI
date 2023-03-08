import mongoose, {Model} from "mongoose";

const { DATABASE_URL} = process.env

export const connectBd = async () => {
    const connect = await mongoose
    .connect(DATABASE_URL as string)
    .catch(error => console.log(error))
    console.log("conexão iniciada com sucesso")

    
    const TaskSchema = new mongoose.Schema({
        item: String,
        completed: Boolean,
    })
    
    const Tasks = mongoose.models.Tasks || mongoose.model("Tasks", TaskSchema)
    return {connect, Tasks} 
}