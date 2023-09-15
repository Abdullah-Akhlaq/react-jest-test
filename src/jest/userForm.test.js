import { fireEvent, render, screen } from "@testing-library/react";

import AntDesignForm from "../components/user-list/form";
import userEvent from "@testing-library/user-event";

test("it show two inputs", () => {
  render(<AntDesignForm />);
  const input = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(input).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("Check element on button submission", () => {
  //NOT THE BEST Solution

  // const argList = [];
  // const callBack = (...arg) => {
  //   argList.push(arg);
  // };

  // render(<AntDesignForm onUserAdd={callBack} />);

  // expect(argList).toHaveLength(1);
  // expect(argList[0][0]).toEqual({ name: "ABDULLAH", email: "ABV" });

  // <------   ----->

  //mock function have been called to check the moc khave been called at some point with appropriate arguments

  const mock = jest.fn();

  render(<AntDesignForm onUserAdd={mock} />);

  // const [nameElement, emailElement] = screen.getAllByRole("textbox");

  //this way we can check the inputs with any order

  const nameElement = screen.getByRole("textbox", { name: /name/i });
  const emailElement = screen.getByRole("textbox", { name: /email/i });

  userEvent.click(nameElement);

  userEvent.keyboard("ABDULLAH");

  userEvent.click(emailElement);

  userEvent.keyboard("ABV");

  const button = screen.getByRole("button");

  userEvent.click(button);

  expect(mock).toHaveBeenCalled(); //CHECK atleast called once

  expect(mock).toHaveBeenCalledWith({ name: "ABDULLAH", email: "ABV" });
});



test("button is enabled when user enters valid data in both input fields", () => {
  const mock = jest.fn();

  render(<AntDesignForm onUserAdd={mock} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });

  expect(button).toBeEnabled();
});
