import { render, screen, within } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import ArtPiecePreview from "./ArtPiecePreview";

test.skip("All art pieces are displayed as a list", () => {
  render(<ArtPiecePreview />);

  const artPieces = [
    {
      slug: "orange-red-and-green",
      artist: "Steve Johnson",
      name: "Orange Red and Green Abstract Painting",
      imageSource:
        "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
      year: "2018",
      genre: "Abstract Painting",
      colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
      dimensions: {
        height: 2432,
        width: 1920,
        type: "jpg",
      },
    },
    {
      slug: "blue-and-red",
      artist: "Jung-Hua Lui",
      name: "Blue and Red",
      imageSource:
        "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
      year: "2019",
      genre: "Abstract Painting",
      colors: ["#3f9eab", "#dfa597", "#323f6a", "#88d9ce", "#5a614c"],
      dimensions: {
        height: 2560,
        width: 1920,
        type: "jpg",
      },
    },
  ];

  const { getAllByRole } = render(<ArtPiecePreview items={artPieces} />);
  const listItems = getAllByRole("img");
  expect(listItems).toHaveLength(2);

  screen.debug();

  //   const { getAllByRole } = within(items);

  //   const listItems = getAllByRole("img");
  //   expect(listItems).toBeGreaterThan(5);
  //  // expect(listItems.length).toBe(5);
});

test("trigger some awesome feature when clicking an image", async () => {
  const user = userEvent.setup();
  render(<ArtPiecePreview />);

  // await user.click(screen.getByRole("img", { name: /click me!/i }));
  await user.click(screen.getByRole("img"));
  // expect(history.location.pathname).toEqual("/art-pieces/");

  expect(window.location.pathname).toBe("/art-pieces/");
});
