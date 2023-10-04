import React from "react";
import ArtPieces from "./art-pieces";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import styled from "styled-components";

const StyledHeader = styled.h1`
  margin-left: 50px;
  margin-top: 50%;
`;

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

  if (filteredPieces.length === 0) {
    return (
      <StyledHeader>please chose your favorites, darling 🖤...</StyledHeader>
    );
  }
  return (
    <>
      <ArtPieces
        pieces={filteredPieces}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
