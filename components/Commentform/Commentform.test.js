import { render, screen } from "@testing-library/react";
import Commentform from "./Commentform";

test("should render Commentform component", () => {
  render(<Commentform />);
  const element = screen.getByRole("group");
  expect(element).toBeInTheDocument();
  const commentButton = screen.getByRole("button");
  expect(commentButton).toBeInTheDocument();
});
