import React from "react";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import ArtPiecePreview from "./ArtPiecePreview";

export default function Spotlight({
  image,
  artist,
  handleToggleFavorite,
  slug,
  artPiecesInfo,
  name,
}) {
  return (
    <ArtPiecePreview
      slug={slug}
      image={image}
      title={name}
      artist={artist}
      handleToggleFavorite={handleToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
