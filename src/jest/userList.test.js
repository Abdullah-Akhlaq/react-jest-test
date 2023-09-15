import { render, screen } from "@testing-library/react";
import Usertable from "../components/user-list/user-table";

test("it checked the number of rows in table", () => {
  const users = [
    {
      name: "ASDF",
      email: "ASD",
    },
    {
      name: "ASDDFGS",
      email: "ASDFFSFD",
    },
  ];
  render(<Usertable userValues={users} />);

//   <--        --->
//   screen.logTestingPlaygroundURL();
});
