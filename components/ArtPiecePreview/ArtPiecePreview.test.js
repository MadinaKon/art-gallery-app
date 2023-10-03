import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArtPiecePreview from "./ArtPiecePreview";

test("renders ArtPiecePreview component with given props", () => {
  const image = "artwork.jpg";
  const title = "Artwork Title";
  const artist = "Artist Name";

  render(<ArtPiecePreview image={image} title={title} artist={artist} />);

  const imageElement = screen.getByAltText(title);
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute("src", image);

  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();

  const artistElement = screen.getByText(`Artist: ${artist}`);
  expect(artistElement).toBeInTheDocument();
});
