import React from "react";

// import { Container } from './styles';

const Challenge1: React.FC = () => {
  return (
    <>
      {/* FUNDO RETANGULO AZUL */}
      <div className="FundoAzul h-[20rem] bg-blue-400 w-full flex justify-center items-center mt-10 ">
        {/* GRUPO DE CAMADAS QUE CONTEM A IMAGEM E O CIRCULO VERMELHO */}
        <div className="Circulos relative">
          {/* CIRCULO AMARELO PREENCHIDO COM A IMAGEM DA ROSA AZUL */}
          <div className="CirculoAmarelo bg-yellow-400 hover:animate-spin h-[15rem] w-[15rem] rounded-full relative right-0 overflow-hidden ">
            <img
              src="https://i1.wp.com/files.agro20.com.br/uploads/2019/11/Rosas-azuis-3.jpg?fit=1024%2C676&ssl=1"
              alt="Imagem de rosas azuis"
              className="h-full w-full object-cover"
            />
          </div>

          {/* ICONE DE NOTIFICAÇÃO ENCIMA DA ROSA AZUL */}
          <div className="CirculoVermelho animate-ping h-[3.00rem] w-[3.00rem] bg-red-400 rounded-full absolute top-[00.20rem] right-[00.09rem] flex justify-center items-center text-white text-[1.50rem]">
            3
          </div>
          <div className="CirculoVermelho  h-[3.00rem] w-[3.00rem] bg-red-400 rounded-full absolute top-[00.20rem] right-[00.09rem] flex justify-center items-center text-white text-[1.50rem]">
            3
          </div>


        </div>
      </div>
    </>
  );
};

export default Challenge1;
