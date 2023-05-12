import { render, screen } from "@testing-library/react";
import Button, { BUTTON_TYPE_CLASSES } from "../button.component";

describe("Button Component Tests", () => {
  test("should render a button when nothing is passed", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: black");
  });

  test("should render google button when passed google button type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: rgb(66, 133, 244);");
  });

  test("should render inverted button when passed inverted button type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: white");
  });

  test("should be disable if isLoading is true", () => {
    render(<Button isLoading={true} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });
});
