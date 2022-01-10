import React,{useState} from 'react';

import people from '../data';

const Cards= ()=>{

 const [index,setIndex] = useState(0);
  
 const {image,name,rol,description} = people[index];

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
  <div className=" bg-[#ffffff] w-6/12 h-3/5 flex items-center flex-col ">
    <img src={image} alt={name} className="my-3"/>
    <p>{name}</p>
    <p>{rol}</p>
    <p>{description}</p>
    <button onClick={previous}>Anterior</button>
    <button onClick={next}>Siguiente</button>
  </div> 
  );
}

export default Cards;