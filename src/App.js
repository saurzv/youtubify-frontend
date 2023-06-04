import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Pitch } from "./components/Pitch";
export const App = () => {
  return (
    <div className="mx-5 mt-3">
      <div className="h-screen">
        <Header />
        <hr className="border-b-2 mb-5" />
        <Pitch />
      </div>
      <Input />
    </div>
  );
};
