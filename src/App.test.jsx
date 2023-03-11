import { render, screen } from "@testing-library/react";
import App from "./App";

test("home page renders", () => {
  render(<App />);
  const home = screen.getByText(/home/i);
  expect(home).toBeInTheDocument();
});
