import React from "react";
import { StyledFavoriteButton } from "./FavoriteButton.styled.js";

export default function FavoriteButton({
  onToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  const artPieceInfoObject = artPiecesInfo?.find(
    (artPieceInfo) => artPieceInfo.slug === slug
  );

  let isFavorite;

  if (artPieceInfoObject) {
    isFavorite = artPieceInfoObject.isFavorite;
  } else {
    isFavorite = false;
  }

  return (
    <StyledFavoriteButton onClick={() => onToggleFavorite(slug)}>
      {isFavorite ? "💖" : "🤍"}
    </StyledFavoriteButton>
  );
}
