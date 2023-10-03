import ArtPiecePreview from "./ArtPiecePreview";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("renders a list of art pieces", () => {
  const artPieces = [
    { title: "Art Piece 1" },
    { title: "Art Piece 2" },
    { title: "Art Piece 3" },
  ];

  render(<ArtPiecePreview artPieces={artPieces} />);

  const artPieceElements = screen.getAllByRole("listitem");
  expect(artPieceElements).toHaveLength(artPieces.length);

  artPieces.forEach((piece, index) => {
    expect(artPieceElements[index]).toHaveTextContent(piece.title);
  });

  const headingElement = screen.getByText(/Art Gallery/i);
  expect(headingElement).toBeInTheDocument();
});
