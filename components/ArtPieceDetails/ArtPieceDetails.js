import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Comments from "../Comments/Comments";
import Commentform from "../Commentform/Commentform";
import { StyledSection, StyledUl } from "./ArtPieceDetails.styled";

export default function ArtPieceDetails({
  piece,
  handleToggleFavorite,
  artPiecesInfo,
  handleAddComment,
}) {
  const { imageSource, name, artist, year, genre, slug } = piece;
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
      <h1>Comments</h1>
      <Commentform onAddComment={handleAddComment} slug={slug} />
      {pieceInfo && <Comments pieceInfo={pieceInfo} />}
    </>
  );
}
