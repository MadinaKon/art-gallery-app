import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { StyledSection, StyledContainer } from "./ArtPiecePreview.styled.js";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  handleToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  return (
    <>
      <StyledContainer>
        <h1>{title}</h1>
        <p>{artist}</p>
      </StyledContainer>
      <StyledSection>
        <Link href={`/art-pieces/${slug}`}>
          <Image src={image} width={500} height={500} alt={title} />
        </Link>

        <FavoriteButton
          onToggleFavorite={handleToggleFavorite}
          slug={slug}
          artPiecesInfo={artPiecesInfo}
        />
      </StyledSection>
    </>
  );
}
