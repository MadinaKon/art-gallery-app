import React from "react";
import ArtPiecePreview from "../ArtPiecePreview";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

export default function ArtPieces({ pieces, artPiecesInfo }) {
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
            <FavoriteButton
              isFavorite={artPiecesInfo}
              onToggleFavorite={handleToggleFavorite}
            />
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
