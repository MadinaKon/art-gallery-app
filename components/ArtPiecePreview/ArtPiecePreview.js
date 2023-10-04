import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { StyledSection } from "./ArtPiecePreview.styled.js";

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
