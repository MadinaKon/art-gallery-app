import React from "react";
import ArtPiecePreview from "../../components/ArtPiecePreview/ArtPiecePreview";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

import styled from "styled-components";

export const StyledUl = styled.ul`
  list-style-type: none;
  width: 100%;
  position: relative;
  padding: 0;
`;

export const StyledLi = styled.li`
  width: 100%;
  margin-left: 0;
  margin-bottom: 300px;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  padding: 20px;
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
          <StyledLi key={slug}>
            <ArtPiecePreview
              slug={slug}
              image={imageSource}
              title={name}
              artist={artist}
              handleToggleFavorite={handleToggleFavorite}
              artPiecesInfo={artPiecesInfo}
              dimensions={dimensions}
            />

            <StyledSection>
              <p>
                {year} {genre}
              </p>
            </StyledSection>
          </StyledLi>
        )
      )}
    </StyledUl>
  );
}
