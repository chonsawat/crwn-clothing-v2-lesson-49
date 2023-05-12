import { expectSaga, testSaga } from "redux-saga-test-plan";
import {
  fetchCategoriesAsync,
  onFetchCategories,
  categoriesSaga,
} from "../category.saga";
import { call, throttle } from "typed-redux-saga/macro";
import { CATEGORIES_ACTION_TYPES } from "../category.types";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "../category.action";
import { throwError } from "redux-saga-test-plan/providers";

describe("Category Saga Tests", () => {
  test("categoriesSaga", () => {
    testSaga(categoriesSaga)
      .next()
      .all([call(onFetchCategories)])
      .next()
      .isDone();
  });

  test("onFetchCategories", () => {
    testSaga(onFetchCategories)
      .next()
      .takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
      )
      .next()
      .isDone();
  });

  test("fetchCategoriesAsync success", () => {
    const mockCategoriesArray = [
      { id: 1, name: "Category 1" },
      { id: 2, name: "Category 2" },
    ];
    expectSaga(fetchCategoriesAsync)
      .provide([[call(getCategoriesAndDocuments), mockCategoriesArray]])
      .put(fetchCategoriesSuccess(mockCategoriesArray))
      .run();
  });

  test("fetchCategoriesAsync failure", () => {
    const mockError = new Error("fetchCategoriesFailure");
    expectSaga(fetchCategoriesAsync)
      .provide([[call(getCategoriesAndDocuments), throwError(mockError)]])
      .put(fetchCategoriesFailed(mockError))
      .run();
  });
});
