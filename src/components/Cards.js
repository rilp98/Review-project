import React,{useState} from 'react';

import people from '../data';

import left from '../assets/icons/leftArrow.svg';
import right from '../assets/icons/rightArrow.svg';

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
  <div className="relative w-6/12 h-2/3 bg-[#ffffff] drop-shadow-md rounded-lg flex items-center flex-col ">
    <img src={image} alt={name} className="my-4"/>
    <p className="text-[#5F4890] font-semibold tracking-wider ">{name}</p>
    <p className="text-[#1F87A0] uppercase">{rol}</p>
    <p className="text-[#B0A8B9] my-5 text-center mx-12">{description}</p>

    <div>
    <button  onClick={previous}>
      <img className='w-5 h-5 absolute bottom-12 right-1/2' src={left} alt="left-icon"/>
    </button>

    <button onClick={next}>
    <img className='w-5 h-5 absolute bottom-12' src={right} alt="right-icon"/>
    </button>

    </div>

  </div> 
  );
}

export default Cards;