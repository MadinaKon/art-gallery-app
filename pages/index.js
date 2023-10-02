import Spotlight from "./Spotlight";

export default function SpotlightPage({ pieces }) {
  function pickRandomArtPiece(array) {
    // number between 0 and array.length
    return Math.floor(Math.random() * array.length);
  }

  const indexRandomArtPiece = pickRandomArtPiece(pieces);

  return (
    <div>
      <Spotlight
        image={`${pieces[indexRandomArtPiece].imageSource}`}
        artist={pieces[indexRandomArtPiece].artist}
      />
    </div>
  );
}
