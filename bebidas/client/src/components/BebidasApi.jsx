import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {jwtDecode} from 'jwt-decode'

const BebidasApi = ({ setListaBebidas, login, setLogin , cerrarSesion , setMe}) => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const getDataBebidas = () => {
        const URL = 'http://localhost:8000/api/bebidas';

        axios.get(URL, {
            headers: { token_usuario: localStorage.getItem("token") }
        })
        .then(response => {
            setListaBebidas(response.data);
            setLogin(true);
            setMe(jwtDecode(localStorage.getItem("token")))
        })
        .catch((e => {
                console.log("ERROR COMPLETO:", e);
                if (e.response.status === 401){
                cerrarSesion()
                }    setErrors(e.response.data?.errors);
            }
        ));
    };

    useEffect(() => {
        getDataBebidas();
    }, []);

    return null;
};

export default BebidasApi;