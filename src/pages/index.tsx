import styles from "./styles.module.css";

import React from "react";

// import { Container } from './styles';

const mainpage: React.FC = () => {
  return (
    <main className="mx-auto max-w-[50rem]">
      <Navigation className="w-[100%] relative" />

      <Perfil className="w-[100%] relative" />

      <div className=" bg-blue-100 h-[25rem] relative"></div>
    </main>
  );
};

export default mainpage;

type Props = {
  className: string;
};

const Navigation: React.FC<Props> = ({ className: classNameReceived }) => {
  return (
    <div className={classNameReceived}>
      <div
        className={
          "bg-purple-500 h-[5rem] flex justify-center items-center text-white text-[2rem]" +
          " " +
          styles.objetoanimation +
          " " +
          styles.borderanimation
        }
      >
        Steam
      </div>
    </div>
  );
};

const Perfil: React.FC<Props> = ({ className: classNameReceived }) => {
  return (
    <div className={classNameReceived}>
      <div className="bg-purple-200 relative">
        <CARDcomFOTO className="w-fit h-fit mx-auto relative mt-2" />
      </div>
    </div>
  );
};

const CARDcomFOTO: React.FC<Props> = ({ className: classNameReceived }) => {
  return (
    <div className={classNameReceived}>
      <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
        <div className="flex justify-center items-center h-64 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700">
          <Imagem
            className="w-48 rounded-full overflow-hidden absolute left-2"
            src="https://avatars.akamai.steamstatic.com/8d18a03f66131c733fe2ef9cc7047a2eb64d84b1_full.jpg"
            alt="Person"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Nuxie</div>
          <p className="text-gray-700 text-base mt-6">
            ⠀⠀⠀⠀"Until the game's over, you never know what might happen!"
          </p>
        </div>
        <div className="px-6 py-4 flex items-center justify-end">
          <div className="h-10 w-10 bg-yellow-400 rounded-full flex items-center justify-center absolute top-[5rem] mr-2">
            <span className="text-white font-bold text-xl ">90</span>
          </div>
          <BotaoMensagem className="top-[13rem] right-2 absolute" />
          <div className="top-[3rem] absolute right-[2.1rem]">Nivel</div>
        </div>
        <div className="h-[10rem] w-full bg-purple-400 flex justify-center items-start flex-col">
          <h1 className="text-[1.60rem] text-white font-sans ml-5">Off-line</h1>
          <h1 className="font-sans ml-5">Última vez on-line há 1h, 5 min</h1>
        </div>
      </div>
      <div
        className="w-[100%] grid grid-cols-2 gap-1
      "
      >
        <Grupos className="w-[100%]" />
        <Amigos className="w-[100%]" />
      </div>
      <Conquistas className="" />

      <Platina className="" />
    </div>
  );
};

const Gatinhos: React.FC<Props> = ({ className: classNameReceived }) => {
  return (
    <div className={classNameReceived}>
      <div className="flex justify-center space-x-4">
        <Imagem
          src="https://placekitten.com/100/100"
          alt="Kitten 1"
          className="w-24 h-24 rounded-full shadow-lg"
        />
        <Imagem
          src="https://placekitten.com/100/100"
          alt="Kitten 2"
          className="w-24 h-24 rounded-full shadow-lg"
        />
        <Imagem
          src="https://placekitten.com/100/100"
          alt="Kitten 3"
          className="w-24 h-24 rounded-full shadow-lg"
        />
      </div>
    </div>
  );
};

const Pokemon: React.FC<Props> = ({ className: classNameReceived }) => {
  return (
    <div className={classNameReceived}>
      <div className="flex flex-col items-center justify-center">
        <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
          <Imagem
            className="object-cover w-full h-full"
            src="https://assets.pokemon.com/assets/cms2/Imagem/pokedex/full/007.png"
            alt="Pokemon"
          />
        </div>
        <p className="mt-4 text-xl font-bold text-center">Eu amo Pokemon</p>
      </div>
    </div>
  );
};

const BotaoMensagem: React.FC<Props> = ({ className: classNameReceived }) => {
  return (
    <div className={classNameReceived}>
      <button className="bg-purple-900 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded shadow">
        Enviar Mensagem
      </button>
    </div>
  );
};

const Grupos: React.FC<Props> = ({ className: classNameReceived }) => {
  return (
    <div className={classNameReceived}>
      <div className="h-[20rem] w-[100%] bg-purple-400 text-center text-white font-sans text-[1.50rem] mt-1">
        Grupos
      </div>
    </div>
  );
};

const Amigos: React.FC<Props> = ({ className: classNameReceived }) => {
  return (
    <div className={classNameReceived}>
      <div className="h-[20rem] w-[100%] bg-purple-400 text-center text-white font-sans text-[1.50rem] mt-1">
        Amigos
      </div>
    </div>
  );
};

const Conquistas: React.FC<Props> = ({ className: classNameReceived }) => {
  return (
    <div className={classNameReceived}>
      <div className="h-[15rem] w-full bg-purple-400 text-center text-white font-sans text-[1.50rem] mt-1">
        Destaque de Conquistas
        <div className="flex justify-around mt-5">
          <Imagem
            src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/692850/d37f96a85304cde6440934cfa827c661668ffb15.jpg"
            alt="imagem"
            className="w-[3rem] h-[3rem] "
          />
          <Imagem
            src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/692850/367a2f5586cf6cd6a5da750016847c1702ffe46f.jpg"
            alt="imagem"
            className="w-[3rem] h-[3rem] "
          />
          <Imagem
            src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/692850/110606a6b1aef46aaf9db1620d55d6de17ea669b.jpg"
            alt="imagem"
            className="w-[3rem] h-[3rem] "
          />
          <Imagem
            src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/692850/38e7ebb8a733adea68e55f4e475cbd07eb3e2dfb.jpg"
            alt="imagem"
            className="w-[3rem] h-[3rem] "
          />
          <Imagem
            src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/692850/0bd93cb75124ed5421086a6115fe73e0ed6ce7cd.jpg"
            alt="imagem"
            className="w-[3rem] h-[3rem] "
          />
          <Imagem
            src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/692850/e7665267244426bdc7dc02fb555f6e2ed4955692.jpg"
            alt="imagem"
            className="w-[3rem] h-[3rem] "
          />
          <Imagem
            src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/692850/cc4e8b6e0efed23ffe60ce98b6fa65e7fbf17df0.jpg"
            alt="imagem"
            className="w-[3rem] h-[3rem] "
          />
        </div>
        <div className="flex justify-around mt-10">
          <div className="text-center">
            <div className="text-white text-xl font-bold">10</div>
            <div className="text-gray-500 text-xs font-bold mb-1">
              Conquistas
            </div>
          </div>
          <div className="text-center">
            <div className="text-white text-xl font-bold">5</div>
            <div className="text-gray-500 text-xs font-bold mb-1">
              Jogos perfeitos
            </div>
          </div>
          <div className="text-center">
            <div className="text-white text-xl font-bold">2.5</div>
            <div className="text-gray-500 text-xs font-bold mb-1">
              Média de Conquistas
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Platina: React.FC<Props> = ({ className: classNameReceived }) => {
  return (
    <div className={classNameReceived}>
      <div className="flex flex-col">
        <div className="flex justify-center items-center h-[15rem] w-full mt-1 bg-purple-400">
          <Imagem
            src="https://cdn.akamai.steamstatic.com/steam/apps/692850/header.jpg"
            alt="Imagem 1"
            className="w-[90%]"
          />
        </div>
        <div className="flex justify-center items-center h-[15rem] w-full mt-1 bg-purple-400">
          <Imagem
            src="https://cdn.akamai.steamstatic.com/steam/apps/504230/header.jpg"
            alt="Imagem 2"
            className="w-[90%]"
          />
        </div>
        <div className="flex flex-row items-center justify-center h-[10rem] w-full">
          <div className="text-white text-xl font-bold mr-2">2.5</div>
          <div className="text-gray-500 text-xs font-bold mb-1">
            Jogos perfeitos
          </div>
          <div className="flex flex-row items-center justify-center ml-5">
            <div className="text-white text-xl font-bold mr-2">2.5</div>
            <div className="text-gray-500 text-xs font-bold mb-1">
              Conquistas em jogos Perfeitos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Eleven: React.FC<Props> = ({ className: classNameReceived }) => {
  return <div className={classNameReceived}>hi</div>;
};

const Twelve: React.FC<Props> = ({ className: classNameReceived }) => {
  return <div className={classNameReceived}>hi</div>;
};

const Thirteen: React.FC<Props> = ({ className: classNameReceived }) => {
  return <div className={classNameReceived}>hi</div>;
};

const Fourteen: React.FC<Props> = ({ className: classNameReceived }) => {
  return <div className={classNameReceived}>hi</div>;
};

const Fifteen: React.FC<Props> = ({ className: classNameReceived }) => {
  return <div className={classNameReceived}>hi</div>;
};

type ImagemProps = {
  src: string;
  alt: string;
  className?: string;
};

const Imagem: React.FC<ImagemProps> = ({ src, alt, className }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} className="object-cover h-auto w-[100%]" />
    </div>
  );
};
