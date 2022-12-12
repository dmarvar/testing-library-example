import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.get("/countToThree", (req, res, ctx) => {
    // Persist user's authentication in the session
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.delay(200),
      ctx.json("Great Work!")
    );
  }),
  // Handles a GET /user request
];
