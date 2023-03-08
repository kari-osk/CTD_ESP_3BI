import mongoose from "mongoose";

const MongoConnect = async () => {
    if (!mongoose.connections[0].readyState){
        console.log("conexão iniciada com sucesso")
        mongoose.connect(process.env.MONGODB_URI!)
    } else {
        console.log("já existe conexão iniciada")
    }
}

export default MongoConnect;