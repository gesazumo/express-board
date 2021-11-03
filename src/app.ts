import express from "express";

const app: express.Application = express();

app.get(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send("hello typescript express!");
  }
);

app.listen(3000, ()=> {
  console.log("3000번 포트에서 실행!")
})

export default app;