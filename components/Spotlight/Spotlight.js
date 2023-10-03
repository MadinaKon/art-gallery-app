import React, { Fragment } from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { StyledDiv, StyledImage, StyledParagraph } from "./Spotlight.styled.js";

export default function Spotlight({
  image,
  artist,
  handleToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  return (
    <>
      <StyledDiv>
        <StyledImage
          src={image}
          alt="random"
          // width={data[indexRandomArtPiece].dimensions.width}
          // height={data[indexRandomArtPiece].dimensions.height}
          width="140"
          height="140"
        />
        <FavoriteButton
          onToggleFavorite={handleToggleFavorite}
          slug={slug}
          artPiecesInfo={artPiecesInfo}
        />
      </StyledDiv>
      <StyledParagraph>{artist}</StyledParagraph>
    </>
  );
}
