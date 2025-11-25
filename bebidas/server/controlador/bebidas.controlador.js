import {Bebidas} from "../modelos/bebidas.modelos.js";

const bebidasControlador = {
    getAll: async (req, res)=> {
        try{
        const bebidas = await Bebidas.find();
        return res.status (201).json(bebidas)
        }catch (e){
            return res.status(400).json(e)
        }

    },
    createOne : async (req,res)=> {
        const {nombre, descripcion, ingredientes,instrucciones, url} = req.body;
        const nuevoArray = {nombre, descripcion, ingredientes,instrucciones, url}
        try{
            const nuevaBebida = await Bebidas.create(nuevoArray) 
            res.status(201).json(nuevaBebida)
        }catch(e){
            const messages = {};

        if (e.name === "ValidationError") {
            Object.keys(e.errors).forEach(key => {
                messages[key] = e.errors[key].message;
            });
        }
            if(e.code== 11000){
            messages['nombre'] = "La bebida ya existe"
        }
            return res.status(400).json({errors : {...messages}});
        }
    },
    getOne: async (req,res)=> {
        const id = req.params.id;
        try{
            const unaBebida = await Bebidas.findById(id)
            if(!unaBebida){
                return res.status(404).json({message: "El id indicado no existe"})
            }
            res.status(201).json(unaBebida)
        }catch{
            return res.status(400).json({error: "El servidor fallo"})   
        }
    },
    deleteOne: async (req,res)=>{
        const id = req.params.id;
        try{
            const borrarBebida = await Bebidas.findByIdAndDelete(id)
            if(!borrarBebida){
                return res.status(404).json({message: "El id no existe"})
            }
            res.status(201).json({message: "La bebida fue eliminada con exito."})
        }catch(e){
            return res.status(400).json(e)
        }
    },
    updateOne: async (req,res)=>{
        const id = req.params.id;
        const {nombre, descripcion, ingredientes,instrucciones, url} =  req.body;
        const dataTobeUpdated = {};
        if(nombre){
            dataTobeUpdated.nombre = nombre
        }
        if(descripcion){
            dataTobeUpdated.descripcion = descripcion
        }
        if(ingredientes){
            dataTobeUpdated.ingredientes = ingredientes
        }
        if(instrucciones){
            dataTobeUpdated.instrucciones = instrucciones
        }
        if(url){
            dataTobeUpdated.url = url
        }
        try{
            const oneUpdated = await Bebidas.findByIdAndUpdate(id,dataTobeUpdated, {new: true, runValidators: true})
        if(!oneUpdated){
            return res.status(400).json({message: "El id no existe"})
        }
        res.status(201).json(oneUpdated)
        }catch(e){
            const messages = {};

            if(e.name === "ValidationError"){
                Object.keys(e.errors).forEach(key =>{
                    messages[key] = e.errors[key].message;
                })
            }
            if(e.code== 11000){
            messages['nombre'] = "La bebida ya existe"
            }
            return res.status(400).json({errors : {...messages}})
        }
    }
}

export default bebidasControlador;