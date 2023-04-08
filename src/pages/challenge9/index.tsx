import React from "react";
import styles from "./styles.module.css";
// import { Container } from './styles';

function Pokemon ({ src, src2 }: { src: string; src2: string })  {
  return (
    <div
      className={
        " flex flex-row justify-center items-center cursor-pointer relative h-[15rem] w-[14rem] overflow-hidden " +
        styles.caixa
      }
    >
      <img
        src={src}
        alt="fundofofo"
        className="object-cover h-[92%] absolute"
      />

      <img
        src={src2}
        alt="jigglypuff"
        className={
          "h-auto w-[7rem] absolute left-[3.5rem] top-[3rem] " +
          styles.jigglypuff
        }
      />
      <div
        className={
          "  bg-white h-[15rem] w-[7rem] rounded-tl-lg rounded-bl-lg absolute left-0 " +
          styles.esquerda
        }
      ></div>
      <div
        className={
          "bg-white h-[15rem] w-[7rem] rounded-tr-lg rounded-br-lg absolute left-[7rem] " +
          styles.direita
        }
      ></div>
    </div>
  );
};

// import { Container } from './styles';

const challenge9: React.FC = () => {
  return (

    <main>
    <div
      className={
        "h-[30rem] relative w-full flex flex-row items-center justify-center p-[3rem] "
      }
    >
      <Pokemon src="https://img.freepik.com/free-vector/gradient-pastel-sky-background_23-2148917404.jpg?w=360" src2="https://static.pokemonpets.com/images/monsters-images-800-800/39-Jigglypuff.webp"></Pokemon>
      <Pokemon src="https://previews.123rf.com/images/annagolant/annagolant1707/annagolant170700442/82916672-drops-water-splashes-on-blue-background-cute-simple-background-backdrop-top-view-close-up.jpg" src2="https://static.pokemonpets.com/images/monsters-images-800-800/7-Squirtle.webp"></Pokemon>
      <Pokemon src="https://img.freepik.com/premium-vector/cute-endless-seamless-pattern-with-fire-stars-flat-vector-illustration_520335-43.jpg?w=2000"src2="https://i.pinimg.com/originals/7a/f6/0b/7af60b2b6fa202db54f0aa275fee6e17.png"></Pokemon>
      </div>
  </main>
)
}

export default challenge9;
