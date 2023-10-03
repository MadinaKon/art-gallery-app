import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import Layout from "./Layout";
import { useState } from "react";
import { uid } from "uid";

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
      } else {
        return [...artPiecesInfo, { slug, isFavorite: true, comments: [] }];
      }
    });
  }

  function handleAddComment(newComment, slug) {
    // (event) => event.preventDefault();
    const date = new Date().toLocaleDateString("en-us");
    // const showTime =
    //   date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    const comment = {
      id: uid(),
      commentDate: date,
      // commentTime: showTime,
      commentText: newComment,
    };
    // {
    //   dateStyle: "medium",
    // }
    setArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);

      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug
            ? { ...info, comments: [...info.comments, comment] }
            : info
        );
      } else {
        return [
          ...artPiecesInfo,
          { slug, isFavorite: false, comments: [comment] },
        ];
      }
    });
    // event.target.reset();
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
          handleAddComment={handleAddComment}
        />
      </Layout>
    </>
  );
}
