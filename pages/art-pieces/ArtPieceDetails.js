import React from "react";
import Image from "next/image";

export default function ArtPieceDetails({ piece }) {
  const { image, title, artist, year, genre } = piece;
  return (
    <div>
      <Image src={image} width={500} height={500} alt={title} />
    </div>
  );
}
