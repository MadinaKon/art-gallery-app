import React from "react";
import styled from "styled-components";

// export const StyledFavoriteButton = styled.button`
//   position: absolute;
//   height: 50px;
//   right: 0;
//   top: -15px;
// `;

export const StyledFavoriteButton = styled.button`
  height: 30px;
  right: 0;
  top: -15px;
`;

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
