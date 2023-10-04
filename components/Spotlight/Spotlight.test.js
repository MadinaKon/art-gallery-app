import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";
import { logRoles } from "@testing-library/dom";

test.skip("should render Spotlight component", () => {
  render(<Spotlight />);
  const element = screen.getByRole("img");
  expect(element).toBeInTheDocument();

  // screen.debug();
});
