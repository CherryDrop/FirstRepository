import React from "react";

// import { Container } from './styles';

const Challenge2: React.FC = () => {
  return (
    <div>
      <div className="QuadradoRoxo relative bg-purple-500 h-[30rem] w-ful mt-[10rem]">
        <h1 className="text-white">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
          <button className="Botão px-2 py-2 text-lg bg-yellow-400 text-white rounded-full hover:bg-yellow-200 hover:cursor-pointer absolute bottom-[0.5rem] cursor-pointer hover:animate-bounce"
          onClick={ ()=>{
            alert("Duel")
          }}>Click</button>

        <div className="GrupoDeCartas absolute w-[100%] h-[20rem] mt-[03rem]">
          <div className="CandinaCARD cursor-pointer hover:animate-bounce inline-block absolute right-[04rem] ">
            <img
              src="https://repositorio.sbrauble.com/arquivos/in/yugioh_bkp/cd/665/8111.jpg"
              alt="Candina"
              className="w-[08rem] "
            />
          </div>

          <div className="Narkissus hover:animate-spin inline-block absolute left-[3rem] tranform rotate-[345deg]">
            <img
              src="https://yugioh.pl/cardimage/TrickstarNarkissus.webp"
              alt="Narkissus"
              className="w-[10rem] cursor-pointer"
            />
          </div>
          <div className="LilyBellCARD cursor-pointer hover:animate-pulse inline-block absolute right-[11rem] bottom-[5rem]">
            <img
              src="https://cdn11.bigcommerce.com/s-641uhzxs7j/products/205022/images/227598/98700941__37188.1587102915.386.513.jpg?c=1"
              alt="LilyBell"
              className="w-[6rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge2;

// https://repositorio.sbrauble.com/arquivos/in/yugioh_bkp/cd/665/8111.jpg
// https://cdn11.bigcommerce.com/s-641uhzxs7j/products/205022/images/227598/98700941__37188.1587102915.386.513.jpg?c=1
// https://yugioh.pl/cardimage/TrickstarNarkissus.webp
