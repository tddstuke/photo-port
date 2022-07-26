import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const mockToggleModal = jest.fn();

const currentPhoto = {
  name: "Grocery aisle",
  category: "commercial",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
  index: 0,
};

afterEach(cleanup);

describe("Modal component", () => {
  it("renders", () => {
    render(<Modal currentPhoto={currentPhoto} />);
  });
});
