import React, { useEffect, useState } from 'react'
import './AvisoComponent'
import { AvisoComponent } from './AvisoComponent'
export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Arturo Cervantes")
    const [fecha, setFecha] = useState("01-01-1999")
    const [contador, setContador] = useState(0)

    const modUsuario = e => {
        setUsuario(e.target.value);
    }

    const cambiarFecha = e => {
        setFecha(Date.now());
    }

    useEffect(() => {
        console.log("Componente cargado.")
    }, [])

    useEffect(() => {
        
        setContador(contador+1);
        console.log("Cambio de username numero: "+ contador);
    }, [fecha])

    return (
        <div>
            <h1>Hook use Effect</h1>
            <strong className = {contador >= 10 && "Superadas las 20 iteraciones"}>{usuario}</strong>
            <strong>{fecha}</strong>
            <p>
                <input type="text" onChange={modUsuario} placeholder="Cambia el nombre" />
                <button onClick = {cambiarFecha}>Cambia Fecha</button>
            </p>
            {usuario === "JOSE" && <AvisoComponent/>}
        </div>
    )
}
