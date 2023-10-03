import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

import styled from "styled-components";

// export const StyledSection = styled.section`
//   display: flex;
//   position: relative;
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
