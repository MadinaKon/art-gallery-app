import React, { Fragment } from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

import styled from "styled-components";

// export const StyledDiv = styled.section`
//   display: flex;
//   position: relative;
//   padding: 10px;
//   margin-bottom: 40px;
//   flex-direction: column;
//   align-items: center;
// `;

export const StyledDiv = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export const StyledImage = styled(Image)`
  width: 500px;
  height: 500px;
`;

export const StyledParagraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

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
