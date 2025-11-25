 const [errors, setErrors] = useState(
        {
        
        }
    )
     {errors.titulo && <p style={{color : "red"}}>{errors.titulo}</p>}

                 <form onSubmit={(e) => agregarCancion(e) }>
                <div>
                    <label htmlFor="titulo">Titulo</label>
                    <input type="text" name="titulo" id="titulo" value={data.titulo} onChange={(e)=>{updateState(e)}}></input>
                </div>
                <div>
                    <label htmlFor="artista">Artista</label>
                    <input type="text" name="artista" id="artista" value={data.artista} onChange={(e)=>{updateState(e)}}></input>
                </div>
                <div>
                    <label htmlFor="anioLanzamiento">Año de lanzamiento</label>
                    <input type="text" name="anioLanzamiento" id="anioLanzamiento" value={data.anioLanzamiento} onChange={(e)=>{updateState(e)}}></input>
                </div>
                <div>
                    <label htmlFor="genero">Genero</label>
                    <input type="text" name="genero" id="genero" value={data.genero} onChange={(e)=>{updateState(e)}}></input>
                </div>
                <button>Enviar</button>
            </form>

                        <form onSubmit={(e) => agregarCancion(e)}>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Titulo</label>
                    <input type="text" className="form-control" id="titulo" name="titulo" value={data.titulo} onChange={(e)=>{updateState(e)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="artista" className="form-label">Artista</label>
                    <input type="text" className="form-control" id="artista" name="artista" value={data.artista} onChange={(e)=>{updateState(e)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="anioLanzamiento" className="form-label">Año de lanzamiento</label>
                    <input type="number" className="form-control" id="anioLanzamiento" name="anioLanzamiento"  value={data.anioLanzamiento} onChange={(e)=>{updateState(e)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="genero" className="form-label">Genero</label>
                    <input type="text" name="genero" id="genero" value={data.genero} onChange={(e)=>{updateState(e)}}></input>
                <div/>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>