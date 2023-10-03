import React from "react";
import ArtPieces from "./art-pieces";
import FavoriteButton from "./FavoriteButton";

export default function Favorites({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  // pieces which are included in artPiecesInfo and have isFavorite
  // console.log("Favorites pieces", pieces);

  // console.log("Favorites artPiecesInfo", artPiecesInfo);

  const filtered = artPiecesInfo.filter(
    (artInfo) => artInfo.isFavorite === true
  );

  console.log("filtered ", filtered);

  return (
    <>
      <ArtPieces
        pieces={filtered}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
      {/* <FavoriteButton
        onToggleFavorite={handleToggleFavorite}
        slug={slug}
        artPiecesInfo={artPiecesInfo}
      /> */}
    </>
  );
}
