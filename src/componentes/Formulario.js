import React, { useState } from "react";
import FormularioCss from '../Hojas-Estilo/Formulario.css'
import {v4 as uuidv4} from 'uuid'
function Formulario(props){
    const [input,setInput] = useState('');
    const manejarCambio = e =>{
        setInput(e.target.value);
    }
    const manejarEnvio = e => {
        e.preventDefault();
        const tareaNueva = {
            id : uuidv4(),
            texto : input,
            completada : false  
        };
        props.onSubmit(tareaNueva);
        e.target.children[0].value='';
        setInput('');
    };

    return(
        <form className="formulario"
            onSubmit={manejarEnvio}>
            <input 
            className='tarea-input'
            type="text"
            placeholder="Escribe una tarea"
            name="texto"
            onChange={manejarCambio}/>
            <button 
                className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    );
};

export default Formulario;