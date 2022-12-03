import HomeInfoPanel from "@myComponents/HomeInfoPanel";
import HomePanel from "@myComponents/HomePanel";
import HomeShowList from "@myComponents/HomeShowList";

export default function Index() {
   return (
      <div
      style={{
         paddingLeft: '1rem',
         paddingRight: '1rem',
      }}
      >
            <HomePanel/>
            <HomeShowList/>
            <HomeInfoPanel/>
      </div>
   )
}