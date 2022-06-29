import React, { useEffect } from 'react'

export const AvisoComponent = () => {

  useEffect(() => {
    alert("El componente esta cargado");

    return () => {
      alert("Componente desmontado")
    }
  }, [])

  return (
    <div>
      <h1>Saludos Jose</h1>
      <button onClick={
        e => {
          alert("BUUUUUUUUUUUU")
        }
      }>Mostrar alerta.</button>
    </div>
  )
}
