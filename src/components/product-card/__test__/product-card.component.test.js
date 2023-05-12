import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import ProductCard from "../product-card.component";

describe("Product Card tests", () => {
  const mockProduct = {
    id: 1,
    name: "test product",
    price: 100,
    imageUrl: "image A",
  };

  test("it should add the product item when Product Card button is clicked", async () => {
    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    const addToCartButtonElement = screen.getByText(/add to cart/i);
    await fireEvent.click(addToCartButtonElement);

    expect(store.getState().cart.cartItems.length).toBe(1);
    expect(addToCartButtonElement).toBeInTheDocument();
  });
});
