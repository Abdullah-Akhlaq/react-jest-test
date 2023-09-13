import { fireEvent, render, screen } from "@testing-library/react";

import Counter from "../components/counter";

test("counter increments and decrements", () => {
  render(<Counter />);

  const incrementButton = screen.getByText("Increment");
  const decrementButton = screen.getByText("Decrement");
  const countDisplay = screen.getByTestId("count");

  expect(countDisplay).toHaveTextContent("0");

  fireEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent("1");

  fireEvent.click(decrementButton);
  expect(countDisplay).toHaveTextContent("0");
});
