import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

test("displays the art piece image", () => {
  const imageUrl = "path/to/artwork.jpg";
  render(<Spotlight image={imageUrl} artist="Artist Name" />);

  const imageElement = screen.getByAltText("Art Piece");
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute("src", imageUrl);
});

test("displays the art piece artist", () => {
  const artistName = "Artist Name";
  render(<Spotlight image="path/to/artwork.jpg" artist={artistName} />);

  const artistElement = screen.getByText(`Artist: ${artistName}`);
  expect(artistElement).toBeInTheDocument();
});
