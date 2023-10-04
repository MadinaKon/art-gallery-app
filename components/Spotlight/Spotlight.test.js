import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";
import { logRoles } from "@testing-library/dom";

test("should render Spotlight component", () => {
  render(<Spotlight />);
  const element = screen.getByRole("img");
  expect(element).toBeInTheDocument();

  // screen.debug();
});
