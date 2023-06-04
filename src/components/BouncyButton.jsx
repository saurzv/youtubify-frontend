import { scrollToBottom } from "./utils/scrollToBottom";

export const BouncyButton = () => {
  return (
    <div className="flex flex-auto mt-[10%] justify-center h-10">
      <button
        className="bg-white hover:bg-green-a py-4 px-2 rounded-full animate-bounce shadow-xl"
        onClick={() => scrollToBottom()}
      >
        <span class="material-symbols-outlined text-blue-c font-bold animate-bounce">
          arrow_downward
        </span>
      </button>
    </div>
  );
};
