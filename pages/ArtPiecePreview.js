import React, { Fragment } from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{artist}</p>
      <Image src={image} width={500} height={500} alt={title} />
    </>
  );
}
