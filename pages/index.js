import useSWR, { SWRConfig } from "swr";
import ArtPieces from "./ArtPieces";
import Spotlight from "./Spotlight";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>failed to load Error</div>;
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
      <ArtPieces pieces={data} />
    </div>
  );
}
