import axios from 'axios'
import { useEffect } from 'react';

const cancionesApi = ({setListaCanciones})=>{
    const getDataCanciones = () => {
        const URL = 'http://localhost:8000/api/canciones'
        axios(URL).then(response => {
            setListaCanciones(response.data)
        }).catch((e=> console.log(e)))
    }

    useEffect(()=> {
        getDataCanciones()
    },[])

    return (
        <>
        </>
    )

}

export default cancionesApi;