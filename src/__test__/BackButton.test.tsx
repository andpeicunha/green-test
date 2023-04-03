import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BackButton from "../pages/components/commons/BackButton";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: () => ({ back: jest.fn() }),
}));

describe("Botão Voltar", () => {
  it("Renderiza o botão com o texto 'Voltar'", () => {
    const { getByText } = render(<BackButton />);
    expect(getByText("Voltar")).toBeInTheDocument();
  });
});
