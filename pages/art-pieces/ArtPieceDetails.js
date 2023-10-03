import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

import styled from "styled-components";

// export const StyledSection = styled.section`
//   display: flex;
//   position: relative;
//   background-color: teal;
//   padding: 10px;
//   border: 1px solid black;
//   margin-bottom: 40px;
//   flex-direction: column;
//   align-items: center;
// `;

export const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;
export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  background-color: white;
  display: inline-block;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  width: 11rem;
`;

export default function ArtPieceDetails({
  piece,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  const { imageSource, name, artist, year, genre, slug } = piece;
  return (
    <StyledSection>
      <Link href={`/art-pieces`}>
        <StyledButton>Back to gallery</StyledButton>
      </Link>
      <Image src={imageSource} width={500} height={500} alt={name} />
      <FavoriteButton
        onToggleFavorite={handleToggleFavorite}
        slug={slug}
        artPiecesInfo={artPiecesInfo}
      />
      <Ul>
        <li>{name}</li>
        <li>{artist}</li>
        <li>{year}</li>
        <li>{genre}</li>
      </Ul>
    </StyledSection>
  );
}
