import axios from 'axios'
import { useEffect } from 'react';

const playlistApi = ({setListaPlaylists})=>{
    const getDataPlaylists = () => {
        const URL = 'http://localhost:8000/api/playlist'
        axios(URL).then(response => {
            setListaPlaylists(response.data)
        }).catch((e=> console.log(e)))
    }

    useEffect(()=> {
        getDataPlaylists()
    },[])

    return (
        <>
        </>
    )

}

export default playlistApi;