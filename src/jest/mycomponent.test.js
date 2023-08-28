import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For extending Jest's expect assertions
import MyComponent from "../components/mycomponent";
import userEvent from "@testing-library/user-event";

//describe method indicate this test case is for which component
describe("MyComponent", () => {
  it("renders all elements correctly", () => {
    render(<MyComponent />);

    // Check if the elements are rendered
    expect(screen.getByRole("heading", { name: /title/i })).toBeInTheDocument();
    expect(screen.getByText(/span content/i)).toBeInTheDocument();
    expect(screen.getByText(/paragraph/i)).toBeInTheDocument();

    // expect(screen.getByPlaceholderText(/type something/i)).toBeInTheDocument();
    const inputElement = screen.getByPlaceholderText(/type something/i);

    // Simulate typing into the input
    userEvent.type(inputElement, "Hello, World!");
    // Verify that the input value has been updated
    expect(inputElement).toHaveValue("Hello, World!");

    const selectElement = screen.getByRole("combobox");
    userEvent.selectOptions(selectElement, "option2");
    // Verify that the selected value matches
    expect(selectElement).toHaveValue("option2");



      // Find the image element by its role
  const imageElement = screen.getByRole('img', { name: /an example image/i });

  // Verify src and alt attributes
  expect(imageElement).toHaveAttribute('src', '../../download.jpg');
  expect(imageElement).toHaveAttribute('alt', 'An example image');


    // Find the link element by its text content
    const linkElement = screen.getByText(/click me/i);

    // Verify href attribute
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
  });

  // Add more test cases here if needed
});
