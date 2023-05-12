import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import CartIcon from "../cart-icon.component";

describe("Cart Icon tests", () => {
  test("user preload state to render", () => {
    const initialCartItems = [
      { id: 1, name: "Item A", imageUrl: "test", price: 10, quantity: 1 },
      { id: 2, name: "Item B", imageUrl: "test", price: 10, quantity: 2 },
      { id: 3, name: "Item B", imageUrl: "test", price: 10, quantity: 1 },
    ];

    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
        },
      },
    });

    const element = screen.getByText("4");
    expect(element).toBeInTheDocument();
  });
});
