import React from "react";
import ArtPieces from "./art-pieces";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

export default function Favorites({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  const filteredInfoForisFavorite = artPiecesInfo.filter(
    (artInfo) => artInfo.isFavorite === true
  );
  const filteredPieces = pieces.filter((piece) => {
    // Check if piece's slug is included in filteredInfoForIsFavorite's slugs
    return filteredInfoForisFavorite.some((info) => info.slug === piece.slug);
  });

  return (
    <>
      <ArtPieces
        pieces={filteredPieces}
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
