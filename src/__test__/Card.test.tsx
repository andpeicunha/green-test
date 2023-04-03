import { render, fireEvent, getByText } from "@testing-library/react";
import Card from "../pages/components/card/Card";

const mockCards = [
  {
    key: "1",
    id: "1",
    name: "John Smith",
    image: "https://example.com/image.jpg",
    location: "New York",
    onClick: jest.fn(),
    iconActiveFavor: "active",
    index: 0,
  },
  {
    key: "2",
    id: "2",
    name: "Jane Doe",
    image: "https://example.com/image.jpg",
    location: "London",
    onClick: jest.fn(),
    iconActiveFavor: "inactive",
    index: 1,
  },
  {
    key: "3",
    id: "3",
    name: "Bob Johnson",
    image: "https://example.com/image.jpg",
    location: "Sydney",
    onClick: jest.fn(),
    iconActiveFavor: "inactive",
    index: 2,
  },
];

describe("Componente Card", () => {
  it("Renderizar o componente com as Props", () => {
    const { getByText, getByAltText } = render(<Card {...mockCards[0]} />);
    expect(getByText("John Smith")).toBeInTheDocument();
    expect(getByText("New York")).toBeInTheDocument();
    expect(getByAltText("John Smith")).toBeInTheDocument();
  });

  it("Chama a função onClick no botão favorito", () => {
    const { getByTestId } = render(<Card {...mockCards[0]} />);
    fireEvent.click(getByTestId("favorite-button"));
    expect(mockCards[0].onClick).toHaveBeenCalledWith("1", true);
  });

  it("Verifica se a Function i()", () => {
    const { getByText } = render(
      <>
        <Card {...mockCards[0]} />
        <Card {...mockCards[1]} />
        <Card {...mockCards[2]} />
      </>
    );
    expect(getByText("John Smith")).toBeInTheDocument();
    expect(getByText("Jane Doe")).toBeInTheDocument();
    expect(getByText("Bob Johnson")).toBeInTheDocument();
  });
});
