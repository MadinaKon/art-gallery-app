import React from "react";
import Image from "next/image";

export default function Spotlight({ image, artist }) {

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
    </>
  );
}
