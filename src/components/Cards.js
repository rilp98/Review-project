import React,{useState} from 'react';

import people from '../data';

const Cards= ()=>{

 const [index,setIndex] = useState(0);
  
 const {id,n} = people[index];

 const next= ()=>{ 
    if(index<=4) {
      setIndex(index+1);
    }
 
    if(index===5) {
      setIndex(0);
    }
   }
 
   const previous= ()=>{ 
 
     if(index<=5) {
       setIndex(index-1);
     }
  
     if(index===0) {
       setIndex(5);
     }
    }

 return(
  <>
    <p>{n}</p>
    <p>{id}</p>
    <button onClick={next}>Siguiente</button>
    <button onClick={previous}>Anterior</button>
  </> 
  );
}

export default Cards;