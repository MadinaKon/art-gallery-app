import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import Comments from "./Comments";
import Commentform from "./Commentform";
import styled from "styled-components";
import Colors from "./Colors";

export const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  list-style-type: none;
`;

export default function ArtPieceDetails({
  piece,
  handleToggleFavorite,
  artPiecesInfo,
  handleAddComment,
}) {
  const { imageSource, name, artist, year, genre, slug, colors } = piece;
  console.log(colors);
  const pieceInfo = artPiecesInfo.find((info) => info.slug === slug);
  return (
    <>
      <StyledSection>
        <Link href={`/art-pieces`}>
          <button>Back to gallery</button>
        </Link>
        <Image src={imageSource} width={500} height={500} alt={name} />
        <FavoriteButton
          onToggleFavorite={handleToggleFavorite}
          slug={slug}
          artPiecesInfo={artPiecesInfo}
        />
      </StyledSection>
      <StyledUl>
        <li>{name}</li>
        <li>{artist}</li>
        <li>{year}</li>
        <li>{genre}</li>
      </StyledUl>
      <Colors colors={colors} />
      <h1>Comments</h1>
      <Commentform onAddComment={handleAddComment} slug={slug} />
      {pieceInfo && <Comments pieceInfo={pieceInfo} />}
    </>
  );
}
