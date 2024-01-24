import React, { useState} from "react";
import Formulario from "./Formulario";
import '../Hojas-Estilo/ListaTareas.css'
import Tarea from "./Tarea";
function ListaTareas(){
    const [tareas , setTareas] = useState([]);

    const agregarTarea = tarea => {
        if(tarea.texto.trim()){
            tarea.texto =tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    };
    const eliminarTarea = (id) =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id );
        setTareas(tareasActualizadas);
    }
    const tareaCompletada = (id) => {
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada; 
            }
            return tarea
        })
        setTareas(tareasActualizadas);
    }
    return(
        <>
            <Formulario onSubmit = {agregarTarea}/>
            <div className="lista-tareas-contenedor"> 
                {
                    tareas.map(tarea => (
                        <Tarea 
                            key={tarea.id}
                            id={tarea.id} 
                            texto={tarea.texto}
                            completada={tarea.completada}
                            tareaCompletada={tareaCompletada}
                            eliminarTarea={eliminarTarea}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default ListaTareas;