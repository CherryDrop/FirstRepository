import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard: React.FC = () => {
  return ( <main className="h-[35rem] bg-gray-800 w-full flex items-center justify-center">





    <div className={styles.profileCard + " h-auto w-[20rem] mx-auto  "}>
      <img
        src="https://pm1.narvii.com/6335/9968a67ab25ff5d9871bc6c56b7abe15341e34c4_hq.jpg"
        alt="Profile"
        className={styles.profileImage}
      />
    </div>

    
  </main>
  );
};

export default ProfileCard;
