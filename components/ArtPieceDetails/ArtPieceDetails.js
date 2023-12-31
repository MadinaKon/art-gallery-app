import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Comments from "../Comments/Comments";
import Commentform from "../Commentform/Commentform";
import {
  StyledSection,
  StyledUl,
  StyledContainer,
  StyledBackButton,
} from "./ArtPieceDetails.styled";
import Colors from "../Colors";

export default function ArtPieceDetails({
  piece,
  handleToggleFavorite,
  artPiecesInfo,
  handleAddComment,
}) {
  const { imageSource, name, artist, year, genre, slug, colors, dimensions } =
    piece;
  const aspectRatio = dimensions.width / dimensions.height;
  const calculatedWidth = 500 * aspectRatio;
  const pieceInfo = artPiecesInfo.find((info) => info.slug === slug);
  return (
    <StyledContainer>
      <StyledSection>
        <Link href={`/art-pieces`}>
          <StyledBackButton>Back to gallery</StyledBackButton>
        </Link>
        <Image
          src={imageSource}
          width={calculatedWidth}
          height={500}
          alt={name}
        />
        <FavoriteButton
          onToggleFavorite={handleToggleFavorite}
          slug={slug}
          artPiecesInfo={artPiecesInfo}
        />
      </StyledSection>
      <StyledUl>
        <li>{name}</li> <br />
        <li>{artist}</li>
        <br />
        <li>{year}</li>
        <br />
        <li>{genre}</li>
      </StyledUl>
      <Colors colors={colors} />
      <Commentform onAddComment={handleAddComment} slug={slug} />
      {pieceInfo && <Comments pieceInfo={pieceInfo} />}
    </StyledContainer>
  );
}
