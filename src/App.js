import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Pitch } from "./components/Pitch";
import { PlaylistDetails } from "./components/PlaylistDetails";
import { useEffect, useState } from "react";
import { subscribe, unsubscribe } from "./components/utils/pubsub";
import { scrollToBottom } from "./components/utils/scrollToBottom";
export const App = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleStateChange = (data) => {
      setData(data);
      if (data) {
        setShow(true);
        scrollToBottom();
      }
    };

    subscribe("stateChange", handleStateChange);

    return () => unsubscribe("stateChange", handleStateChange);
  }, []);

  return (
    <div className="mx-5 mt-3">
      <div className="h-screen">
        <Header />
        <hr className="border-b-2 mb-5" />
        <Pitch />
      </div>
      <Input />
      <div>{show && <PlaylistDetails data={data} />} </div>
    </div>
  );
};
