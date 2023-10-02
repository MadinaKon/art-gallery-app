import React from "react";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function Spotlight({
  image,
  artist,
  handleToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  return (
    <>
      <Image
        src={image}
        alt="random"
        // width={data[indexRandomArtPiece].dimensions.width}
        // height={data[indexRandomArtPiece].dimensions.height}
        width="140"
        height="140"
      />
      <p>{artist}</p>
      <FavoriteButton
        onToggleFavorite={handleToggleFavorite}
        slug={slug}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
