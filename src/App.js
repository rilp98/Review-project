import React,{useState} from 'react';

const REVIEWS = [
  { id:1, name:'Susan', rol:"web developer", description:"Text1"  },
  { id:2, name:'Olvia', rol:"UI/UX", description:"Text2"  },
  { id:3, name:'Robert', rol:"Project manager", description:"Text3"  },
]

function App() {

  const [data,setData] = useState(REVIEWS[0]);
  const [num,setNum] =useState(3);
  
  const handleData= ()=>{ 
    const resultado = REVIEWS.find( item => item.id === num );
    setData(resultado);
  }

  return (
    <div className="App">
      <p>{data.name}</p>
      <p>{data.id}</p>
     <button onClick={handleData}>Siguiente</button>
    </div>
  );
}

export default App;
