import mongoose, { Mongoose } from "mongoose";

const bebidasSchema = mongoose.Schema(
    {
        nombre :{
            type : String,
            minlength :[6, "Requerido, entre 5 y 255 caracteres."],
            maxlength :[255, "Requerido, entre 5 y 255 caracteres."],
            required :[true, "¿Como se llama?"],
            unique : true
        },
        descripcion : {
            type: String,
            required : [true, "Decribe la bebida"],
            minlength : [10, "Requerido, entre 10 y 255 caracteres."],
            maxlength : [255, "Requerido, entre 10 y 255 caracteres."]
        },
        ingredientes : {
            type : String,
            required : [true, "¿Una bebida sin ingredientes?"],
            minlentgh : [10, "Requerido, entre 10 y 255 caracteres."],
            maxlength : [1000, "Requerido, entre 10 y 255 caracteres."]
        },
        instrucciones : {
            type: String,
            required : [true, "¿Como se hace? "],
            minlentgh : [10, "Requerido, entre 10 y 255 caracteres."],
            maxlength : [1000, "Requerido, entre 10 y 255 caracteres."]
        },
        url : {
            type : String,
            minlentgh : [10, "Requerido, entre 10 y 255 caracteres."],
            maxlength : [1000, "Requerido, entre 10 y 255 caracteres."],
            required : [true, "La bebida debe tener una imagen de presentacion"],
        }
    },
    {timestamps : true}
)

const Bebidas = mongoose.model('bebidas',bebidasSchema)

export {Bebidas,bebidasSchema};