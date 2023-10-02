import useSWR, { SWRConfig } from "swr";
import ArtPieces from "./ArtPieces";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  console.log("DATA ", data);

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <ArtPieces pieces={data} />
    </SWRConfig>
  );
}
