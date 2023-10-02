import React from "react";
import ArtPieceDetails from "./ArtPieceDetails";

import { useRouter } from "next/router";

export default function DetailsPage({
  pieces,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  const router = useRouter();

  const { slug } = router.query;

  const currentPiece = pieces.find((piece) => piece.slug === slug);

  return (
    <ArtPieceDetails
      piece={currentPiece}
      handleToggleFavorite={handleToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
