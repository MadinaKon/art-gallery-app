import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import Layout from "./Layout";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>failed to load Error</div>;
  if (!data) return;

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);

      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }
    });

    return [...artPiecesInfo, { slug, isFavorite: true }];
  }

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          pieces={data}
          artPiecesInfo={artPiecesInfo}
          handleToggleFavorite={handleToggleFavorite}
        />
      </Layout>
    </>
  );
}
