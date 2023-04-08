import React from "react";

// import { Container } from './styles';
import styles from "./animations.module.css";
const challenge7: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black rounded-xl shadow-lg p-8">
  <h2 className="text-3xl font-bold mb-4 text-green-500">Frutas</h2>
  <div className="grid grid-cols-2 gap-4">
    <div className="flex flex-col items-center">
      <img
        src="https://www.calgiant.com/wp-content/uploads/2021/08/berry-iso-straw-1-878x1024.png"
        alt="teu pai"
        className={"h-auto w-[20rem] mx-auto cursor-pointer rounded-md " + styles.objectanimated }
      />
      <p className="mt-2 text-green-500 font-semibold">Morango</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src="https://sherriesestates.com/wp-content/uploads/2020/11/Pitaya.png"
        alt="Fruta Dragão"
        className={"h-auto w-[20rem] mx-auto cursor-pointer rounded-md " + styles.objectanimated }
      />
      <p className="mt-2 text-green-500 font-semibold">Fruta Dragão</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana.png/800px-Banana.png"
        alt="Banana"
        className={"h-auto w-[20rem] mx-auto cursor-pointer rounded-md " + styles.objectanimated }
      />
      <p className="mt-2 text-green-500 font-semibold">Banana</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src="https://www.brookstropicals.com/wp-content/uploads/2020/07/2whole2slicesstarfruit.png"
        alt="Carambola"
        className={"h-auto w-[20rem] mx-auto cursor-pointer rounded-md " + styles.objectanimated }
      />
      <p className="mt-2 text-green-500 font-semibold">Carambola</p>
    </div>
  </div>
</div>

  
  );
};

export default challenge7;
