import React, { useState } from 'react';

// import { Container } from './styles';

const typescript2: React.FC = () => {
 let [EspacinhoNaRAM,TrocarEspacinhoNaRAM]=useState(0)
  function MinhaFuncao() {
   alert (EspacinhoNaRAM)
  }
  function F2 () {
    TrocarEspacinhoNaRAM(EspacinhoNaRAM+1)
    
  }
  return <main className='h-[100vh] w-[100%] bg-purple-200'>
    <button className='h-[10rem] w-[10rem] bg-black' 
    onClick={MinhaFuncao}
   ></button>
   <button className='h-[10rem] w-[10rem] bg-red-500'
   onClick={F2}></button>
<h1>{
  EspacinhoNaRAM}</h1>
  </main>
}

export default typescript2;