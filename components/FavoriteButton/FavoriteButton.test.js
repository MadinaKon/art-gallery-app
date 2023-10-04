import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FavoriteButton } from "./FavoriteButton";
import { ArtPieceDetails } from "../ArtPieceDetails/ArtPieceDetails.js";

test("The favorite-button is displayed in the spotlight view", () => {
  render(<FavoriteButton />);

  const favoriteButton = screen.getAllByRole(
    "FavoriteButton-styled__StyledFavoriteButton-sc-aee7e3bd-0 ZlMLo"
  );
  expect(favoriteButton).toBeInTheDocument();
  expect(favoriteButton).toHaveClass(
    "FavoriteButton-styled__StyledFavoriteButton-sc-aee7e3bd-0 ZlMLo"
  );
});

const mockItems = [{ name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }];

test("displays favorite button in each entry in the list view", () => {
  render(<ArtPieceDetails items={mockItems} />);

  mockItems.forEach((item) => {
    const listItem = screen.getByText(item.name).closest("li");
    expect(listItem).toBeInTheDocument();

    const favoriteButton = within(listItem).getAllByRole(
      "FavoriteButton-styled__StyledFavoriteButton-sc-aee7e3bd-0 ZlMLo"
    );
    expect(favoriteButton).toBeInTheDocument();
    expect(favoriteButton).toHaveClass(
      "FavoriteButton-styled__StyledFavoriteButton-sc-aee7e3bd-0 ZlMLo"
    );
  });
});
