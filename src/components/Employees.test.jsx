import { render, screen } from "@testing-library/react";
import Employees from "./Employees";

test("Employees list of created ones", async () => {
  render(<Employees />);
  const employeeEmails = await screen.findAllByRole("img", { name: /hero/i });
  expect(employeeEmails).toHaveLength(5);
});
