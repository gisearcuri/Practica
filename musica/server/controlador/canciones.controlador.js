import Canciones from "../modelos/canciones.modelos.js";

const cancionesControlador = {
    getAll: async (req, res)=> {
        try{
        const canciones = await Canciones.find();
        return res.status (201).json(canciones)
        }catch (e){
            return res.status(400).json(e)
        }

    },
    createOne : async (req,res)=> {
        const {titulo, artista, anioLanzamiento, genero} = req.body;
        const nuevoArray = {titulo, artista, anioLanzamiento, genero}
        try{
            const nuevaCancion = await Canciones.create(nuevoArray) 
            res.status(201).json(nuevaCancion)
        }catch(e){
            return res.status(400).json(e)
        }
    },
    getOne: async (req,res)=> {
        const id = req.params.id;
        try{
            const unaCancion = await Canciones.findById(id)
            if(!unaCancion){
                return res.status(404).json({message: "El id indicado no existe"})
            }
            res.status(201).json(unaCancion)
        }catch{
            return res.status(400).json({error: "El servidor fallo"})   
        }
    },
    deleteOne: async (req,res)=>{
        const id = req.params.id;
        try{
            const borrarCancion = await Canciones.findByIdAndDelete(id)
            if(!borrarCancion){
                return res.status(404).json({message: "El id no existe"})
            }
            res.status(201).json({message: "La cancion fue eliminada con exito."})
        }catch(e){
            return res.status(400).json(e)
        }
    },
    updateOne: async (req,res)=>{
        const id = req.params.id;
        const {titulo, artista, anioLanzamiento, genero} =  req.body;
        const dataTobeUpdated = {};
        if(titulo){
            dataTobeUpdated.titulo = titulo
        }
        if(artista){
            dataTobeUpdated.artista = artista
        }
        if(anioLanzamiento){
            dataTobeUpdated.anioLanzamiento = anioLanzamiento
        }
        if(genero){
            dataTobeUpdated.genero = genero
        }
        try{
            const oneUpdated = await Canciones.findByIdAndUpdate(id,dataTobeUpdated, {new: true, runValidators: true})
        if(!oneUpdated){
            return res.status(400).json({message: "El id no existe"})
        }
        res.status(201).json(oneUpdated)
        }catch(e){
            return res.status(400).json(e)
        }
    }
}

export default cancionesControlador;