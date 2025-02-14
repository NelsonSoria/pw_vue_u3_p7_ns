import axios from 'axios';

const obtenerPorId = async (id) => {
    //http://localhost:8080/matriculaAPI/v1.1/personas/2
    //El await se mantiene, pero axios lo pone implicitamente
    const data = axios.get(`http://localhost:8080/matriculaAPI/v1.1/personas/${id}`).then(r => r.data);
    console.log(data);
    return data;
}

export const obtenerPorIdFachada = async (id) => {
    return await obtenerPorId(id);
}