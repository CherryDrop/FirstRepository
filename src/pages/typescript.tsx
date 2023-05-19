import { useState } from "react";

const MyPage: React.FC = () => {
  let [MyName, SetMyName] = useState<string>("John");
  let [MyAge, SetMyAge] = useState<number>(25);
  let [MyCity, SetMyCity] = useState<string>("New York");
  let FirstAlert = () => {
    alert("Hello!");
  };
  let [IsCatVisible, SetCatVisibility] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <button
          className="bg-green-300 h-[3rem] w-auto absolute left-[9rem] top-[10rem] rounded-full p-2 cursor-pointer hover:bg-blue-400"
          onClick={() => {
            SetMyAge(MyAge + 1);
            if (MyAge === 30) {
              alert("You are 30 now!");
            }
          }}
        >
          Increment Age
        </button>
        <button
          className="bg-blue-300 h-[3rem] w-auto absolute left-[15rem] top-[10rem] rounded-full p-2 cursor-pointer hover:bg-blue-400"
          onClick={() => {
            SetCatVisibility(true);
            setTimeout(() => {
              SetCatVisibility(false);
            }, 3000);
          }}
        >
          Show Cat
        </button>
      </div>
      <div className="p-4 rounded-md shadow-md bg-gray-100">
        <h1 className="text-xl font-bold text-gray-800 mb-2">
          Personal Information:
        </h1>
        <div className="flex flex-col mb-2">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Name:
          </label>
          <input
            className="rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            type="text"
            value={MyName}
            onChange={(e) => SetMyName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label className="text-sm font-medium text-gray-700 mb-1">Age:</label>
          <input
            className="rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            type="number"
            value={MyAge}
            onChange={(e) => SetMyAge(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label className="text-sm font-medium text-gray-700 mb-1">
            City:
          </label>
          <input
            className="rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            type="text"
            value={MyCity}
            onChange={(e) => SetMyCity(e.target.value)}
          />
          {/* {IsCatVisible ? (
            <div className="w-full fixed h-[100vh] bg-black flex items-center justify-center top-0 left-0">
              <i
                className="mx-auto text-[7rem] animate-bounce text-yellow-400 p-6 fa fa-cat"
               
              ></i>
            </div>
          ) : <div>oi</div>} */}
          {IsCatVisible ? <div>oi</div> : <div>tchau</div>}
          
        </div>
      </div>
    </div>
  );
};

export default MyPage;
