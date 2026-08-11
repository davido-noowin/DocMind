import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home page", () => {
  it("renders the DocMind heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /docmind/i })
    ).toBeInTheDocument();
  });

  it("renders a link to the status page", () => {
    render(<Home />);
    const link = screen.getByRole("link", { name: /view service status/i });
    expect(link).toHaveAttribute("href", "/status");
  });
});
