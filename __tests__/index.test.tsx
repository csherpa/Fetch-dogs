import axios, { AxiosResponse } from "axios";
import { test, expect } from "@jest/globals";

// Mock the axios requests for testing
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Authentication", () => {
  test("check if the user has successfully logged in", () => {
    const mockResponse = {
      data: {},
      status: 200,
      statusText: "ok",
    } as AxiosResponse;
    mockedAxios.get.mockResolvedValue(mockResponse);

    // expect(mockedAxios).toHaveBeenCalledTimes(1);
    // expect(response).toEqual({ data: {}, status: 200, statusText: "ok" });
  });
});
