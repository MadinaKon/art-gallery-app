import React from "react";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

test('A navigation link labeled "Spotlight" is displayed', () => {
  render(<Navigation />);

  const spotlightLink = screen.getByText("Spotlight");
  expect(spotlightLink).toBeInTheDocument();

  expect(spotlightLink).toHaveAttribute("href", "/");
});

test('A navigation link labeled "Art pieces" is displayed', () => {
  render(<Navigation />);

  const piecesLink = screen.getByText("Art pieces");
  expect(piecesLink).toBeInTheDocument();

  expect(piecesLink).toHaveAttribute("href", "/art-pieces");
});
