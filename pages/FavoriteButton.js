import React from "react";

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
    <button onClick={() => onToggleFavorite(slug)}>
      {isFavorite ? "💖" : "🤍"}
    </button>
  );
}
