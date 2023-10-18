import { rest } from "msw";

export const handlers = [];
rest.get("http://localhost:8080/scoops", (req, res, ctx) => {
  return res(
    ctx.json([
      {
        id: 1,
        firstName: "Madhukar",
        lastName: "Hanumanthu",
        email: "hmk02330@gmail.com",
      },
    ])
  );
});
