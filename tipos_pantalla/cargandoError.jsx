import React, { useState, useEffect } from 'react';

const MiComponente = () => {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const exito = true;
        if (exito) {
          resolve('Datos obtenidos correctamente');
        } else {
          reject('Error al obtener datos');
        }
      }, 2000);
    });
  };

  useEffect(() => {
    fetchData()
      .then(response => {
        setDatos(response);
        setCargando(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Datos obtenidos:</h1>
      <p>{datos}</p>
    </div>
  );
};

export default MiComponente;