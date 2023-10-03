import React from "react";
import ArtPiecePreview from "../../components/ArtPiecePreview";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";

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
            <StyledSection>
              {artist}
              {name} {year}
              {genre}
            </StyledSection>
          </li>
        )
      )}
    </StyledUl>
  );
}
