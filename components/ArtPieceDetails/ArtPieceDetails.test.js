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

const mockItem = {
  name: "Item Name",
  description: "Item Description",
};

test("displays favorite button in the details view", () => {
  render(<ArtPieceDetails item={mockItem} />);

  const favoriteButton = screen.getAllByRole(
    "FavoriteButton-styled__StyledFavoriteButton-sc-aee7e3bd-0 ZlMLo"
  );
  expect(favoriteButton).toBeInTheDocument();
  expect(favoriteButton).toHaveClass(
    "FavoriteButton-styled__StyledFavoriteButton-sc-aee7e3bd-0 ZlMLo"
  );
});

test("displays item name and description", () => {
  render(<ArtPieceDetails item={mockItem} />);

  const nameElement = screen.getByText(mockItem.name);
  const descriptionElement = screen.getByText(mockItem.description);

  expect(nameElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});
