import React from "react";
import ArtPieceDetails from "./ArtPieceDetails";

import { useRouter } from "next/router";

export default function DetailsPage({ pieces }) {
  const router = useRouter();
  console.log("router.query.slug ", router.query.slug);

  const currentPiece = pieces.find((piece) => piece.slug === slug);
  console.log("currentPiece ", currentPiece);

  const { slug } = router.query;
  return <ArtPieceDetails piece={currentPiece} />;
}
