import React, { Fragment } from "react";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

import styled from "styled-components";

export const StyledDiv = styled.section`
  display: flex;
  position: relative;
  background-color: teal;
  padding: 10px;
  border: 1px solid black;
  margin-bottom: 40px;
  flex-direction: column;
  align-items: center;
`;

export const StyledImage = styled(Image)`
  width: 500px;
  height: 500px;
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
        <p>{artist}</p>
        <FavoriteButton
          onToggleFavorite={handleToggleFavorite}
          slug={slug}
          artPiecesInfo={artPiecesInfo}
        />
      </StyledDiv>
    </>
  );
}
