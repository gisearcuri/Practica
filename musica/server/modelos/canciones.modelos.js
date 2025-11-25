import mongoose, { Mongoose } from "mongoose";

const cancionesSchema = mongoose.Schema(
    {
        titulo :{
            type : String,
            minlength :[6, "Requerido, entre 6 y 255 caracteres."],
            maxlength :[255, "Requerido, entre 6 y 255 caracteres."],
            required :[true, "El titulo es obligatorio."],
        },
        artista : {
            type: String,
            required : [true, "Llenar campo."],
            minlength : [10, "Requerido, entre 10 y 255 caracteres."],
            maxlength : [255, "Requerido, entre 10 y 255 caracteres."]
        },
        anioLanzamiento : {
            type : Number,
            required : [true, "Requerido, exactamente 4 dígitos."],
            min : [1900, "Requerido, exactamente 4 dígitos."],
            max : [2025, "Requerido, exactamente 4 dígitos."]
        },
        genero : {
            type: String,
            required : [true, "Requerido. "]
        }
    },
    {timestamps : true}
)

const Canciones = mongoose.model('canciones',cancionesSchema)

export default Canciones;