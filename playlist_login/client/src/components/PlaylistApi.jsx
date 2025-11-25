import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const playlistApi = ({setListaPlaylists, login, setLogin})=>{
    const navigate = useNavigate();
    const getDataPlaylists = () => {
        const URL = 'http://localhost:8000/api/playlist'
        axios(URL, { headers : {token_usuario: localStorage.getItem("token")}}).then(response => {
            setListaPlaylists(response.data)
        }).catch((e=>
        {
            navigate('/login')
            setLogin(false)
        }
        ))
    }

    useEffect(()=> {
        getDataPlaylists()
    },[login])

    return (
        <>
        </>
    )

}

export default playlistApi;