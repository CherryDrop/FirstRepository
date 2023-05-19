import React from "react";
import styles from "./styles.module.css";

// import { Container } from './styles';

const PaginaPrincipal: React.FC = () => {
  return (
    <>
     
<DivRoxa/>
<Bolinhas/>
      
    </>
  );
};
export default PaginaPrincipal;


// import { Container } from './styles';

const DivRoxa: React.FC = () => {
  return (<>
   <div className="bg-purple-400 h-[30rem] w-full flex flex-col justify-center items-center">
        <div className="flex flex-wrap justify-center items-center">
          <div
            className={
              "w-20 h-20 bg-blue-500 rounded-full mr-8" + " " + styles.bolinha1
            }
          ></div>
          <div
            className={
              "w-20 h-20 bg-red-500 rounded-full" + " " + styles.bolinha2
            }
          ></div>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div
            className={
              "w-20 h-20 bg-green-500 rounded-full mr-8 mt-[3.50rem]" +
              " " +
              styles.bolinha3
            }
          ></div>
          <div
            className={
              "w-20 h-20 bg-yellow-500 rounded-full mt-[3.50rem]" +
              " " +
              styles.bolinha4
            }
          ></div>
        </div>
      </div>
  </>)
}


// import { Container } from './styles';

const Bolinhas: React.FC = () => {
  return (<>
  <div className="bg-yellow-500 h-30rem w-full flex justify-center items-center">
        <div className="bg-white w-80% h-80% rounded-md shadow-xl flex">
          <div className="w-1/2 bg-black flex justify-center items-center relative">
            <img
              src="https://avatars.akamai.steamstatic.com/8d18a03f66131c733fe2ef9cc7047a2eb64d84b1_full.jpg"
              alt="Foto de perfil"
              className={`rounded-full w-40% transition duration-200 transform ${styles.growImage}`}
            />
          </div>
          <div className="w-1/2 p-8">
          <h1 className={"text-2xl font-bold mb-4 hover:text-purple-500" +" " +styles.ColorChange }>Severina</h1>

            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor nulla sit amet ultricies hendrerit. In ac ipsum in eros
              bibendum pulvinar sed eget enim.
            </p>p
          </div>
        </div>
      </div>
  </>)
}
