import HomeInfoPanel from "@myComponents/HomeInfoPanel";
import HomePanel from "@myComponents/HomePanel";

export default function Index() {
   return (
      <div
      style={{
         paddingLeft: '1rem',
         paddingRight: '1rem',
      }}
      >
            <HomePanel/>
            <HomeInfoPanel/>
      </div>
   )
}