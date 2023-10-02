import React from "react";
import ArtPiecePreview from "../ArtPiecePreview";
import Link from "next/link";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map(
        ({
          slug,
          artist,
          name,
          imageSource,
          year,
          genre,
          colors,
          dimensions,
        }) => (
          <li key={slug}>
            {artist}
            {name} {year}
            {genre}
            <Link href={`/art-pieces/${slug}`}>
              <ArtPiecePreview
                image={imageSource}
                title={name}
                artist={artist}
              />
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
