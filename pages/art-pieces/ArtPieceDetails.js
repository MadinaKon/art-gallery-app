import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

export default function ArtPieceDetails({
  piece,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  const { imageSource, name, artist, year, genre, slug } = piece;
  return (
    <div>
      <Link href={`/art-pieces`}>
        <button>Back to gallery</button>
      </Link>
      <Image src={imageSource} width={500} height={500} alt={name} />
      <FavoriteButton
        onToggleFavorite={handleToggleFavorite}
        slug={slug}
        artPiecesInfo={artPiecesInfo}
      />
      <ul>
        <li>{name}</li>
        <li>{artist}</li>
        <li>{year}</li>
        <li>{genre}</li>
      </ul>
    </div>
  );
}
