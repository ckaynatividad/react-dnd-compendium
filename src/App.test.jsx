import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("happy tests", () => {
  test("home page renders", async () => {
    render(<App />);
    const home = await screen.findByRole("heading", { name: /home/i });
    expect(home).toBeInTheDocument();
  });

  test("nav renders", async () => {
    render(<App />);
    const nav = await screen.findByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  test("can go to magic items", async () => {
    render(<App />);
    const link = await screen.findByRole("link", { name: /magic items/i });
    userEvent.click(link);
    const heading = await screen.findByRole("heading", {
      name: /magic items/i,
    });
    const armor = await screen.findByText(/adamantine armor/i);
    expect(heading).toBeInTheDocument();
    expect(armor).toBeInTheDocument();
  });
});
