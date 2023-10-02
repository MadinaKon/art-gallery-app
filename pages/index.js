import Spotlight from "./Spotlight";

export default function SpotlightPage({ data }) {
  function pickRandomArtPiece(array) {
    // number between 0 and array.length
    return Math.floor(Math.random() * array.length);
  }

  const indexRandomArtPiece = pickRandomArtPiece(data);

  return (
    <div>
      <Spotlight
        image={`${data[indexRandomArtPiece].imageSource}`}
        artist={data[indexRandomArtPiece].artist}
      />
    </div>
  );
}
