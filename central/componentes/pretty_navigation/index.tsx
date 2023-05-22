import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { listenerCount } from "process";

const Animations: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
  
    setActiveIndex(index);
  };
  return (
    <main className={styles.main1}>
      {/* <main className="w-full h-[40rem] bg-fuchsia-400 flex flex-col justify-center items-center"> */}

      <div className={styles.navigation + " " + styles.text}>
        <ul>
          {[
            {nome:"Home",nomeDoIcone:"fa-home"},
            {nome:"Profile",nomeDoIcone:"fa-user-circle"},
            {nome:"Mesaages",nomeDoIcone:"fa-comment"},
            {nome:"Photos",nomeDoIcone:"fa-camera"},
            {nome:"Settings",nomeDoIcone:"fa-gear"},
          ].map((objeto,index)=>{
            return(
          <li onClick={()=>{handleClick(index)}} className={styles.list+
            (index===activeIndex ? " " + styles.active : "")}>
            
            <a href="#">
              <span className={styles.icon}>
                <i className={`fa ${objeto.nomeDoIcone}` + " " + styles.morango}></i>
              </span>
              <span className={styles.text}>{objeto.nome}</span>
            </a>
          </li>

            )
          })}
          
          <div className={styles.indicator}></div>
        </ul>
      </div>
      
    </main>
  );
};

export default Animations;
