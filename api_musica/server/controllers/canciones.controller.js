import { faker } from "@faker-js/faker"

const cancion = [
    {
        id: faker.string.uuid(),
        titulo: faker.music.songName(),
        artista: faker.music.artist(),
        album: faker.music.album(),
        duracion: `${faker.number.bigInt({ min: 3 , max: 5 })} minutos`,
        genero: faker.music.genre(),
        fechaLanzamiento: faker.date.past()
    }
]

const controladorCancion = {
    verificarCancion : (req,res)=>{
        res.statusMessage = "Todo bien"
        res.status(201).json(cancion)
    }
}

export default controladorCancion;