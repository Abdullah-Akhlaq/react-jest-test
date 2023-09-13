import { render, screen } from "@testing-library/react";

import AntDesignForm from "../components/user-list/form";
import userEvent from "@testing-library/user-event";

test('it show two inputs', () => {
  render(<AntDesignForm />);
  const input = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
 

  expect(input).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('Check element on button submission', ()=>{
  render(<AntDesignForm/>)

  const [inputElement,emailElement]=screen.getAllByRole('textbox');

  
})
