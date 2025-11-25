import axios from 'axios';
import { useEffect } from "react";
import { useState } from 'react'
const ExtraerData = ({setLista}) =>{
    const[error,setError] = useState({})
    const getData = async ()=>{
        const URL = 'https://api.thecatapi.com/v1/images/search'
        axios(URL).then(
            response=>{
                console.log(response)
                setLista(response.data.results)
            }
        ).catch(
            (e)=> {
                console.log(e)
                setError(e)
            } 
        ).finally(()=>console.log("terminado"))
    }

    useEffect(()=>{
        console.log('Se monto el componente y se ejecuto el useEffect')
        getData()
    },[])

    return(
        <div>
            <button type="button" class="btn btn-info" onClick={getData}>Fetch New Random Image</button>
        </div>
    )
}

export default ExtraerData;