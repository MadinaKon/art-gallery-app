import React from "react";
import ArtPieceDetails from "./ArtPieceDetails";

import { useRouter } from "next/router";

export default function DetailsPage({ pieces }) {
  const router = useRouter();

  const { slug } = router.query;

  const currentPiece = pieces.find((piece) => piece.slug === slug);

  return <ArtPieceDetails piece={currentPiece} />;
}
