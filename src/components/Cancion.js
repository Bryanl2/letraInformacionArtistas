import React,{Fragment} from 'react';

const Cancion = ({letra}) => {

    if(letra.length===0)return null;

    return (  
        <Fragment>
        <div className="pt-8">
             <h2>Letra Canción</h2>
             <p className="letra">{letra}</p>
        </div>
         
     </Fragment>

     )};

 
export default Cancion;