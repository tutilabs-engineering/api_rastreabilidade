import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import "../../../../shared/container"

import { router  } from "../../../routes/routes";


// configurando o swagger
import swaggerUI from "swagger-ui-express";
import { AppError } from "../../../../config/AppError";
// import { VerificarErros } from "../../../middlewares/VerficarErros";
// import swaggerFile from "../swagger.json";

// Configurações do express
const app = express();
const port = process.env.PORT || 7400;

app.use(express.json());
app.use(cors());

// Middlewares
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));


//error handling

app.use((err: Error, req: Request, res: Response, next: NextFunction) =>  {
  if(err instanceof AppError){
    return res.status(err.statusCode).json({message: err.message}).send();
  }
  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
})

app.use('/api',router);
// app.use(VerificarErros);
app.use("/static", express.static(__dirname + "/uploads"));

// Express rodando
app.listen(port, () => {
  console.log("Escutando na porta " + port);
  console.log("Acesse: http://localhost:" + port);
});
