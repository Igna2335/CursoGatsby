import React, { useContext, useEffect } from 'react'
import { AppContext } from '../components/appContext';


const Login = () => {
  
  //Importamos valores de el contexto
    const {valor,setValor,objeto} = useContext(AppContext);

   console.log(valor)

  return (
    <div>
      <h1>{objeto.Saludo}</h1>

<ul>
      {valor.map(({Ubicacion, Parte})=> {

        return <li>Ubicacion: {Ubicacion}  Parte: {Parte} </li>
      })}
</ul>
    </div>
  )
}

export default Login

