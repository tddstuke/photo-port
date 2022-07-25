import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe("Contact is rendering", () => {
  it("renders", () => {
    render(
      <Contact
        contactSelected={mockContactSelected}
        setContactselected={mockSetContactSelected}
      />
    );
  });
});
