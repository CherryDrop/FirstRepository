import React from "react";

// import { Container } from './styles';

const challenge6: React.FC = () => {
  return (
    <main>
      {/* CARD INTEIRO */}
      <div className="bg-orange-200 border-[00.50rem] border-gray-700 rounded w-80 h-100 p-4 relative">
       {/*TITULO COM ATRIVUTO*/}
        <div className="flex justify-between items-center mb-4 ">
          <h1 className="font-bold text-xl">Kaibaman</h1>
          {/* IMAGEM DO ATRIBUTO*/}
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8445259-8599-4d57-a0f9-1fb6161fa7a4/db9y54x-b1d55fee-2aba-476d-80cf-ff3fbde1ce4d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U4NDQ1MjU5LTg1OTktNGQ1Ny1hMGY5LTFmYjYxNjFmYTdhNFwvZGI5eTU0eC1iMWQ1NWZlZS0yYWJhLTQ3NmQtODBjZi1mZjNmYmRlMWNlNGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XlCWVj4zb7FVvRWxpmd7yknjEckscTVfj_ywxfCndEY"
            alt="Icon"
            className="h-6 w-6"
          ></img>
        </div>
        <div className="mb-4">
          {/* IMAGEM DA  ESTRELA */}
          <div className="relative flex flex-row justify-end">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Starball_Red.svg/768px-Starball_Red.svg.png"
            alt="Icon"
            className="w-8 h-8 border-gray-300 border rounded-full p-1 left-2 ml-[0.1rem]"
          ></img>

<img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Starball_Red.svg/768px-Starball_Red.svg.png"
            alt="Icon"
            className="w-8 h-8 border-gray-300 border rounded-full p-1 left-2 ml-[0.1rem]"
          ></img>

<img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Starball_Red.svg/768px-Starball_Red.svg.png"
            alt="Icon"
            className="w-8 h-8 border-gray-300 border rounded-full p-1 left-2 ml-[0.1rem] "
          ></img>
          </div>
        </div>
        <div className="flex items-center justify-center h-48 border border-gray-300 rounded-lg mb-4">
          {/* IMAGEM DO KAIBAMAN */}
          <img
            src="https://i.pinimg.com/originals/8d/fa/96/8dfa961489f9c7815ebca4dc4d384f04.jpg"
            alt="Image"
            className="w-40 h-40 border-[00.50rem] border-gray-700 "
          ></img>
          {/* CAIXA COM AS DESCRIÇÕES */}
        </div>
        <div className="text-center relative flex flex-row">
          <h1 className="font-bold text-sm mb-2 left-1 absolute">Guerreiro/Lindissimo</h1>
          <h1 className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            egestas enim a risus fringilla, in sollicitudin lorem tristique.
            Fusce ut nibh a augue bibendum vehicula. Etiam ac nulla mi.{" "}
          </h1>
        </div>
        <div className="flex items-center justify-center mt-4"></div>
        <div className="bg-orange-400 text-white rounded-full"></div>
      </div>
    </main>
  );
};

export default challenge6;
