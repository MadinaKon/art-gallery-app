import React, { Fragment } from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { StyledDiv, StyledImage, StyledParagraph } from "./Spotlight.styled.js";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function Spotlight({
  image,
  artist,
  handleToggleFavorite,
  slug,
  artPiecesInfo,
  name,
  dimensions,
}) {
  return (
    <>
      <StyledDiv>
        <ArtPiecePreview
          slug={slug}
          image={image}
          title={name}
          artist={artist}
          handleToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
          dimensions={dimensions}
        />
      </StyledDiv>
    </>
  );
}
