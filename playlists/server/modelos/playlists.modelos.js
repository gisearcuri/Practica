import { mongoose } from "mongoose";
import { cancionesSchema } from "./canciones.modelos.js";

const playlistSchema = mongoose.Schema(
    {
        nombre: {
            type : String,
            required : [true , "El nombre de la Playlist es obligatorio"],
            unique: true
        },
        canciones : [cancionesSchema]
    },
    {timestamps: true}
)

const Playlist = mongoose.model("playlist", playlistSchema)

export default Playlist;