import React from 'react';

import Cards from './components/Cards';

function App() {

  return (
  <div className="h-screen bg-[#F2F2FB] flex flex-col items-center">
  <h1 className="text-4xl my-12" >Our <span>Reviews</span></h1>
   <Cards/>

  </div>
  );
}

export default App;
