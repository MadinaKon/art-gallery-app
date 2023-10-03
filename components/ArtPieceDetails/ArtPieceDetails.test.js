import React from "react";
import { render, screen } from "@testing-library/react";
import { ArtPieceDetails } from "./ArtPieceDetails";
import userEvent from "@testing-library/user-event";

const mockArtPiece = {
  image: "path/to/artwork.jpg",
  title: "Artwork Title",
  artist: "Artist Name",
  year: "2023",
  genre: "Abstract",
};

test("displays art piece details and back button", () => {
  render(<ArtPieceDetails artPiece={mockArtPiece} />);

  const imageElement = screen.getByAltText("Art Piece");
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute("src", mockArtPiece.image);

  const titleElement = screen.getByText(mockArtPiece.title);
  expect(titleElement).toBeInTheDocument();

  const artistElement = screen.getByText(`Artist: ${mockArtPiece.artist}`);
  expect(artistElement).toBeInTheDocument();

  const yearElement = screen.getByText(`Year: ${mockArtPiece.year}`);
  expect(yearElement).toBeInTheDocument();

  const genreElement = screen.getByText(`Genre: ${mockArtPiece.genre}`);
  expect(genreElement).toBeInTheDocument();

  const backButton = screen.getByText("Back to gallery");
  expect(backButton).toBeInTheDocument();
  userEvent.click(backButton);
});
