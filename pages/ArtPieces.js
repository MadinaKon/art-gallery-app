import React from "react";
import ArtPiecePreview from "./ArtPiecePreview";

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
            <ArtPiecePreview image={imageSource} title={name} artist={artist} />
          </li>
        )
      )}
    </ul>
  );
}
