import React from "react";
import Image from "next/image";

export default function ArtPieceDetails({ piece }) {
  const { imageSource, name, artist, year, genre } = piece;
  return (
    <div>
      <Image src={imageSource} width={500} height={500} alt={name} />
      <ul>
        <li>{name}</li>
        <li>{artist}</li>
        <li>{year}</li>
        <li>{genre}</li>
      </ul>
    </div>
  );
}
