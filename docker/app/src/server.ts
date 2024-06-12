import Express, { Request, Response } from "express";

const app = Express();

// express json
app.use(Express.json());

app.use("/", (req: Request, res: Response) => {
  console.log("We got a message!");
  console.log(req);
  res.sendStatus(200);
});

app.listen(8080, () => {
  console.log("server listening at 8080");
});
