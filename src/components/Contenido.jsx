import React from 'react'

//Este es el componente hijo
function Contenido({profesor,materia}) {
  return (
    <>
    <h1>Unlam</h1>
    <div>El profesor ayudante es: {profesor} y la materia es: {materia}</div>
    </>
  )
}

export default Contenido