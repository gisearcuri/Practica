import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const cancionesApi = ({setListaCanciones, login, setLogin})=>{
    const navigate = useNavigate();
    const getDataCanciones = () => {
        const URL = 'http://localhost:8000/api/canciones'
        axios(URL, { headers : {token_usuario : localStorage.getItem("token")}}).then(response => {
            setListaCanciones(response.data)
            setLogin(true)
        }).catch((e=> 
        {
            navigate('/login')
            setLogin(false)
        }
        ))
    }

    useEffect(()=> {
        getDataCanciones()
    },[login])

    return (
        <>
        </>
    )

}

export default cancionesApi;