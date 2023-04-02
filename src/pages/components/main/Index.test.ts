import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Main from "./Index";

describe("Main", () => {
  it("renders the logo", () => {
    render(<Main />);
    const logo = screen.getByAltText("Rick and Morty");
    expect(logo).toBeInTheDocument();
  });

  it("renders search input", () => {
    render(<Main />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("renders favorite persona filter button", () => {
    render(<Main />);
    const button = screen.getByRole("button", { name: "Filter by favorite persona" });
    expect(button).toBeInTheDocument();
  });

  it("filters by favorite persona when the button is clicked", async () => {
    const { container } = render(<Main />);
    const button = screen.getByRole("button", { name: "Filter by favorite persona" });
    fireEvent.click(button);
    await waitFor(() => {
      const cards = container.querySelectorAll(".card");
      expect(cards.length).toBeGreaterThan(0);
      cards.forEach((card) => {
        expect(card.classList.contains("favorite")).toBe(true);
      });
    });
  });

  it("renders cards for each character", async () => {
    const { container } = render(<Main />);
    await waitFor(() => {
      const cards = container.querySelectorAll(".card");
      expect(cards.length).toBeGreaterThan(0);
    });
  });

  it("renders an error message when the search value is not found", async () => {
    const { container } = render(<Main />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "abc" } });
    await waitFor(() => {
      const error = container.querySelector(".error");
      expect(error).toBeInTheDocument();
    });
  });

  it("adds a character to favorites when the card is clicked", async () => {
    const { container } = render(<Main />);
    const card = container.querySelector(".card");
    fireEvent.click(card);
    await waitFor(() => {
      const favorites = JSON.parse(localStorage.getItem("favoritePersona"));
      expect(favorites.length).toBeGreaterThan(0);
      expect(favorites[0].id).toBe(card.dataset.id);
    });
  });
});
