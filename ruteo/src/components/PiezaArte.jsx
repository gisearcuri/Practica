import { useNavigate, useParams } from "react-router-dom";

const PiezaArte =({listaGaleria}) => {
    const params = useParams(); 
    const idParams = Number(params.id)
    const navigate = useNavigate();

    const piezaArte = listaGaleria.find((arte,index)=> index===idParams )

    return(
        <>
            <h1>{PiezaArte.nombre} </h1>
            <br />
            <img src={piezaArte.img} alt={piezaArte.nombre} />
            <div>
                <button onClick={()=>navigate(`/arte/${idParams-1}`)} className="btn btn-succes" disabled={idParams===0}>Anterior</button>
                <button onClick={()=>navigate('/home')} className="btn btn-succes">Inicio</button>
                <button onClick={()=>navigate(`/arte/${idParams+1}`)} className="btn btn-succes" disabled={idParams===(listaGaleria.length -1)}>Siguiente</button>
            </div>
        </>
        
    )
}
export default PiezaArte;