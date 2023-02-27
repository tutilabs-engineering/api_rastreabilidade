import "reflect-metadata";
import express from "express";
import "express-async-errors";
import cors from "cors";
import "../../../../shared/container"

import { router  } from "../../../routes/routes";


// configurando o swagger
import swaggerUI from "swagger-ui-express";
// import { VerificarErros } from "../../../middlewares/VerficarErros";
// import swaggerFile from "../swagger.json";

// Configurações do express
const app = express();
const port = process.env.PORT || 7400;

app.use(express.json());
app.use(cors());

// Middlewares
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use('/api',router);
// app.use(VerificarErros);
app.use("/static", express.static(__dirname + "/uploads"));

// Express rodando
app.listen(port, () => {
  console.log("Escutando na porta " + port);
  console.log("Acesse: http://localhost:" + port);
});
