import { BouncyButton } from "./BouncyButton";
export const Pitch = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-[70%]">
        <div className="flex flex-[60%]">
          <p className="text-5xl sm:text-[70px] md:text-[90px] lg:text-[100px] font-bold text-green-b">
            Convert your <span className=" text-green-c">Spotify</span> playlist
            into a <span className=" text-green-c">YouTube</span> playlist.
          </p>
        </div>
        <div className="flex flex-auto"></div>
      </div>
      <BouncyButton />
    </div>
  );
};
