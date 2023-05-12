import {
  selectCategories,
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../category.selector";

const mockerState = {
  categories: {
    isLoading: false,
    categories: [
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
    ],
  },
};

describe("Categories selector tests", () => {
  test("selectCategories", () => {
    const categoriesSlice = selectCategories(mockerState);
    expect(categoriesSlice).toEqual(mockerState.categories.categories);
  });

  test("selectCategoriesIsLoading", () => {
    const isLoading = selectCategoriesIsLoading(mockerState);
    expect(isLoading).toEqual(false);
  });

  test("selectCategoriesMap", () => {
    const expectedState = {
      mens: [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
      ],
      women: [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
      ],
    };
    const categoriesMap = selectCategoriesMap(mockerState);
    expect(categoriesMap).toEqual(expectedState);
  });
});
