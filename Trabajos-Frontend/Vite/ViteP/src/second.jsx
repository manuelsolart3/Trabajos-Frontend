//Asi creamos un componente
export const App =()=>{
    //para escribir mas de una linea abrimos <>
    return <> 
    <h1>Hola mundo</h1> 
      <h2>hola colombia</h2>
      </> 
  }

  const mensaje = "Hola popayan"; 
  const arreglo = [1234] ; 

  //para un objeto convertimos con el metodo de json
  const aprendiz = {
    nombre: 'Manuel',
    apellido:'Solarte',
    edad: '21'
  } ; 


  export const  FA =()=>{
    return ( 
        <>
        <h1>{10 + 10 }</h1>
        <h1>{mensaje }</h1>
        <h1>{arreglo}</h1>
        <h1>{JSON.stringify(aprendiz)}</h1>
        
        </>
    )
  }
  
  
  



  