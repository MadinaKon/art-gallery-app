import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

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
      <h1>{title}</h1>
      <p>{artist}</p>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} width={500} height={500} alt={title} />
      </Link>

      <FavoriteButton
        onToggleFavorite={handleToggleFavorite}
        slug={slug}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
