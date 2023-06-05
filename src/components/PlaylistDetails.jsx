export const PlaylistDetails = ({ data }) => {
  console.log(data);

  return (
    <div className="h-screen">
      <p className="text-8xl font-bold text-green-b mb-5">Playlist Details</p>
      <iframe
        title="Playlist Details"
        height="50%"
        width="70%"
        src={`https://open.spotify.com/embed/playlist/${data.id}?utm_source=generator`}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <button
        className="w-1/6 p-2.5 bg-green-a rounded-md hover:bg-green-b mt-2"
        onClick={() => {}}
      >
        <p className="font-bold text-xl">Convert</p>
      </button>
    </div>
  );
};
