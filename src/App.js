import React from 'react';

import Cards from './components/Cards';

function App() {

  return (
  <div className="h-screen bg-[#F2F2FB]  flex flex-col items-center">
  <h1 className="text-4xl my-12 text-[#1F87A0] font-bold">Our Reviews</h1>
   <Cards/>

  </div>
  );
}

export default App;
