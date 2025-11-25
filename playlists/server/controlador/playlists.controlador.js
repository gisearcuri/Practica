import Playlist from "../modelos/playlists.modelos.js";
import { Canciones } from "../modelos/canciones.modelos.js";

const playlistControlador = {
    getAll: async (req,res)=> {
        try{
            const playlistEntera = await Playlist.find();
            return res.status(201).json(playlistEntera)
        }catch(e){
            return res.status(400).json(e)
        }
    },
    createOne : async (req, res)=> {
        const {nombre,canciones} = req.body;
        try{

        const foundCanciones = await Canciones.find({ _id : {$in : canciones}})
        if(foundCanciones.length !== canciones.length){
            return res.status(400).json({message: "Una de las canciones"})
        }
        const nuevoArray = {
            nombre: nombre,
            canciones : foundCanciones
        }
        
        const savedPlaylist = await Playlist.create(nuevoArray)
        res.status(201).json(savedPlaylist)
        }catch(e){
            return res.status(400).json(e)
        }
    },
        getOne: async (req,res)=> {
        const id = req.params.id;
        try{
            const unaPlaylist = await Playlist.findById(id)
            if(!unaPlaylist){
                return res.status(404).json({message: "El id indicado no existe"})
            }
            res.status(201).json(unaPlaylist)
        }catch{
            return res.status(400).json({error: "El servidor fallo"})   
        }
    },
    deleteOne: async (req,res)=>{
        const id = req.params.id;
        try{
            const borrarPlaylist = await Playlist.findByIdAndDelete(id)
            if(!borrarPlaylist){
                return res.status(404).json({message: "El id no existe"})
            }
            res.status(201).json({message: "La cancion fue eliminada con exito."})
        }catch(e){
            return res.status(400).json(e)
        }
    },
    updateOne: async (req, res) => {
    const id = req.params.id;
    const { nombre, canciones } = req.body;

    const dataTobeUpdated = {};

    if (nombre) {
        dataTobeUpdated.nombre = nombre;
    }

    if (canciones) {
        // Verificar que las canciones existan
        const foundCanciones = await Canciones.find({ _id: { $in: canciones } });

        if (foundCanciones.length !== canciones.length) {
            return res.status(400).json({
                message: "Una o más canciones no existen"
            });
        }

        dataTobeUpdated.canciones = foundCanciones;
    }

    try {
        const oneUpdated = await Playlist.findByIdAndUpdate(
            id,
            dataTobeUpdated,
            { new: true, runValidators: true }
        );

        if (!oneUpdated) {
            return res.status(400).json({ message: "El id no existe" });
        }

        res.status(201).json(oneUpdated);

    } catch (e) {
        const messages = {};

        if (e.name === "ValidationError") {
            Object.keys(e.errors).forEach(key => {
                messages[key] = e.errors[key].message;
            });
        }

        return res.status(400).json({ errors: { ...messages } });
    }
}
}

export default playlistControlador;