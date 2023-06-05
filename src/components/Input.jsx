import { useState, useEffect } from "react";
import { fetchFromAPI } from "./utils/fetchFromAPI";
import { publish } from "./utils/pubsub";

export const Input = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  const [prevId, setPrevId] = useState("");

  const fetchData = async () => {
    if (prevId !== id && id !== "") {
      fetchFromAPI(id).then((data) => {
        setData(data);
        setPrevId(id);
      });
    }
  };

  useEffect(() => {
    publish("stateChange", data);
  }, [data]);

  return (
    <div className="flex flex-1 justify-center mt-20 md:mt-0 h-screen">
      <div className="flex w-full md:w-1/2 justify-center flex-col">
        <div className="flex justify-center">
          <p className="font-bold text-2xl text-blue-b">
            Enter your Playlist ID below.
          </p>
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            className=" w-1/2 p-2.5 rounded-md font-bold text-xl"
            placeholder="Playlist ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button
            className="w-1/4 p-2.5 bg-green-a rounded-md ml-2 hover:bg-green-b"
            onClick={() => fetchData()}
          >
            <p className="font-bold text-xl">Search</p>
          </button>
        </div>
      </div>
    </div>
  );
};
