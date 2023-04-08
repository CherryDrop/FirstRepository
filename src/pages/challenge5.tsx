import React from 'react';

// import { Container } from './styles';

const challenge5: React.FC = () => {
  return(
  <main>
 <div className="flex flex-col justify-between w-[17rem] h-[30rem]  mx-auto shadow-md rounded-lg overflow-hidden">
  <img className="w-full h-48 object-cover" src="https://gamearena.gg/wp-content/uploads/2023/03/image_2023-03-13_153152048.png" 
  alt="Imagem do Card"></img>
  <div className="bg-white p-4">
    <p className="text-xs font-bold text-orange-500 text-center mb-2">Leon best boy@</p>
    <h2 className="text-xl font-bold text-center mb-4">Banana Macia</h2>
    <p className="text-sm text-center text-gray-500">mmmmmmmmmmmmmmmmmmmmmmmm</p>
  </div>
  <div className="bg-orange-500 text-white p-4 flex justify-between">
    <div className="text-center">
      <p className="text-xs font-bold">Visualizações</p>
      <p className="text-lg font-bold">1,234</p>
    </div>
    <div className="text-center">
      <p className="text-xs font-bold">Acessos</p>
      <p className="text-lg font-bold">567</p>
    </div>
    <div className="text-center">
      <p className="text-xs font-bold">Outro número</p>
      <p className="text-lg font-bold">890</p>
    </div>
  </div>
</div>



  </main>
  )
}

export default challenge5;
