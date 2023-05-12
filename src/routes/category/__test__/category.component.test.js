import { screen } from "@testing-library/react";
import Category from "../category.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ category: "mens" }),
}));

describe("Category tests", () => {
  test("It should render a Spinner if isLoading is true", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: true,
          categories: [],
        },
      },
    });

    const SpinnerElement = screen.getByTestId("spinner");
    expect(SpinnerElement).toBeInTheDocument();
  });

  test("It should no render if isLoading is false", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: [],
        },
      },
    });

    const SpinnerElement = screen.queryByTestId("spinner");
    expect(SpinnerElement).toBeNull();
  });

  test("Should render Categories if isLOading is false", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: [
            {
              title: "mens",
              items: [
                { id: 1, name: "Product 1" },
                { id: 2, name: "Product 2" },
              ],
            },
          ],
        },
      },
    });

    const SpinnerElement = screen.queryByTestId("spinner");
    expect(SpinnerElement).toBeNull();

    const product1Element = screen.getByText(/product 1/i);
    expect(product1Element).toBeInTheDocument();
  });
});
