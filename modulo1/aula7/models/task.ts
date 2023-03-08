import {Schema, model, models} from 'mongoose'

const TaskSchema = new Schema({
    title: {
        type: String,
        require: [true, "Adicione um título"],
        unique: false, 
        trim: true,
        maxLength: [40, "Máximo de 40 caracteres"],
    },
    // category: {
    //     type: String,
    //     require: [true, "Adicione uma categoria"],
    //     unique: false,
    //     trim: true,
    //     maxLength: [50, "Máximo de 50 caracteres"],
    // },
    // date: {
    //     type: Number,
    //     require: [true, "Adicione uma data"],
    //     unique: false,
    //     trim: true,
    // },
    description: {
        type: String,
        require: [true, "Adicione uma descrição"],
        unique: false,
        trim: true,
        maxLength: [200, "Máximo de 200 caracteres"],
    },
})

const TaskModel = models.Task || model("Task", TaskSchema);

export default TaskModel;