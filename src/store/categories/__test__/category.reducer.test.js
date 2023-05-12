import {
  categoriesReducer,
  CATEGORIES_INITIAL_STATE,
} from "../category.reducer";
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "../category.action";

describe("Catefory Reducer Tests", () => {
  test("fetchCategoriesStart", () => {
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: true,
    };

    expect(
      categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesStart())
    ).toEqual(expectedState);
  });

  test("fetchCategoriesSuccess", () => {
    const mockData = [
      {
        title: "mens",
        imageUrl: "test",
        items: [
          { id: 1, name: "Product 1" },
          { id: 2, name: "Product 2" },
        ],
      },
      {
        title: "women",
        imageUrl: "test",
        items: [
          { id: 1, name: "Product 1" },
          { id: 2, name: "Product 2" },
        ],
      },
    ];

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      categories: mockData,
    };

    expect(
      categoriesReducer(
        CATEGORIES_INITIAL_STATE,
        fetchCategoriesSuccess(mockData)
      )
    ).toEqual(expectedState);
  });

  test("fetchCategoriesFailed", () => {
    const mockError = new Error("This is Error");

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      error: mockError,
    };
    expect(
      categoriesReducer(
        CATEGORIES_INITIAL_STATE,
        fetchCategoriesFailed(new Error("This is Error"))
      )
    ).toEqual(expectedState);
  });
});
