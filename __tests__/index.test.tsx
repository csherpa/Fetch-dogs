import { test, expect, jest } from "@jest/globals";
import { api } from "~/utils/api";
import { render } from "@testing-library/react";

const mockQueryData = {
  data: {
    dogObj: [
      {
        id: 1,
        name: "Emory",
        breed: "Pug",
        age: 5,
        zip_code: 75010,
        img: "https://frontend-take-home.fetch.com/dog-images/n02110958-pug/n02110958_8979.jpg",
      },
      {
        id: 2,
        name: "Sparkles",
        breed: "Afghan Hound",
        age: 1,
        zip_code: 75010,
        img: "https://frontend-take-home.fetch.com/dog-images/n02088094-Afghan_hound/n02088094_10263.jpg",
      },
    ],
  },
};
describe("Dog Search Result Cards", () => {
  // let apiDataMock;
  // beforeEach(() => {
  //   apiDataMock = jest
  //     .spyOn(api, "useQueries")
  //     .mockResolvedValue(mockQueryData);
  // });
  // afterEach(() => {
  //   jest.resetAllMocks();
  // });
  test("renders dogs object from the query", () => {});
});
