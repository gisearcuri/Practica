import { faker } from "@faker-js/faker"

const cancion =  Array.from({ length: 3 }, () => ({
        id: faker.string.uuid(),
        titulo: faker.music.songName(),
        artista: faker.music.artist(),
        album: faker.music.album(),
        duracion: `${faker.number.bigInt({ min: 3 , max: 5 })} minutos`,
        genero: faker.music.genre(),
        fechaLanzamiento: faker.date.past()
    }))

const playList = [
    {
        idPlaylist: faker.string.uuid(),
        nombre: faker.person.jobDescriptor(),
        descripcion: faker.food.description(),
        canciones: [...cancion],
        creador: faker.person.firstName(),
        fechaCreacion: faker.date.past()
    }
]



const controladorPlayList = {
    obtenerPlayList : (req,res)=>{
        res.statusMessage = "Todo bien"
        res.status(201).json(playList)
    }
}



export default controladorPlayList;