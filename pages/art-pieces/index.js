import React from "react";
import ArtPiecePreview from "../ArtPiecePreview";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import styled from "styled-components";

export const StyledUl = styled.ul`
  list-style-type: none;
`;

export default function ArtPieces({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  return (
    <StyledUl>
      {pieces.map(
        ({
          slug,
          artist,
          name,
          imageSource,
          year,
          genre,
          colors,
          dimensions,
        }) => (
          <li key={slug}>
            {/* <FavoriteButton
              onToggleFavorite={handleToggleFavorite}
              slug={slug}
              artPiecesInfo={artPiecesInfo}
            /> */}
            <ArtPiecePreview
              slug={slug}
              image={imageSource}
              title={name}
              artist={artist}
              handleToggleFavorite={handleToggleFavorite}
              artPiecesInfo={artPiecesInfo}
            />
            {artist}
            {name} {year}
            {genre}
          </li>
        )
      )}
    </StyledUl>
  );
}
