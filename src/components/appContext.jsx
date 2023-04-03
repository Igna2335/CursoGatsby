import React, { createContext, useState, useEffect } from 'react'

import axios from 'axios';

const ContextProvider = ({children}) => {
  
    const [valor,setValor] = useState([]);

     //Peticiones HTTP:


  useEffect(  () => {
    const peticion =  async () =>{
        const response = await axios.get('http://test.gicaor.com:8081/API_REST_PRUEBA/')
        setValor(response.data.Detail);
    }
    
    peticion();

  }, []);

  useEffect(() => {
    console.log(valor) // 1 3
  }, [valor]);
  

    let objeto = {
        "Saludo" : "HOLA  A TODOS"
    }

    //Aqui se le pasa el valor que se usara en el contexto global para ser accesado por toda la app
    const initialValue = {objeto,valor,setValor}

    return (
     <AppContext.Provider value = {initialValue}>{children}</AppContext.Provider>
  )
}
// GATSBY nos va a pasar "element"
export default ({element}) => <ContextProvider>{element}</ContextProvider>

/* Se pasa el objeto que estara en el contexto global nuevamente y un valor incial de ese objeto, en este caso un objeto vacio */
export const AppContext = createContext({objeto : {},valor : "",setValor : ()=>{}})