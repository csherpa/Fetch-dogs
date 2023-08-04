// import { NextApiRequest, NextApiResponse } from "next";

import { authRouter } from "~/server/api/routers/authRouter";

// it("should", () => {
//   expect(1).toBe(1);
// });

// describe("API routes testing", () => {
//   it("GET", async () => {
//     console.log(dogsRouter);
//   });
// });

// Test case for successful login
test("Dogs Routes", async () => {
  const loginData = {
    name: "testname",
    email: "testemail",
  };

  // // Call the loginHandler function
  const response = await authRouter;
  console.log({ response });

  // Assert the response, e.g., check if the response contains the expected data
  // expect(response).toHaveProperty("token");
  // expect(response).toHaveProperty("userId");
});
