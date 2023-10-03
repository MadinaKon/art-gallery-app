import React from "react";
import { render, screen } from "@testing-library/react";
import { ArtPieceDetails } from "./ArtPieceDetails";

const artPieces = [
  {
    image: "artwork1.jpg",
    title: "Artwork 1",
    artist: "Artist 1",
  },
  {
    image: "artwork2.jpg",
    title: "Artwork 2",
    artist: "Artist 2",
  },
];

test("renders list of art pieces with images, titles, and artists", () => {
  render(<ArtPieceDetails artPieces={artPieces} />);

  artPieces.forEach((piece) => {
    const imageElement = screen.getByAltText(piece.title);
    expect(imageElement).toBeInTheDocument();

    const titleElement = screen.getByText(piece.title);
    expect(titleElement).toBeInTheDocument();

    const artistElement = screen.getByText(`Artist: ${piece.artist}`);
    expect(artistElement).toBeInTheDocument();
  });
});

test("renders correct number of art pieces", () => {
  render(<ArtPieceDetails artPieces={artPieces} />);

  const artPieceElements = screen.getAllByRole("listitem");
  expect(artPieceElements.length).toBe(artPieces.length);
});
