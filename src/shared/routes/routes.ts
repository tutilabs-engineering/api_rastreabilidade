import { Router } from "express";
import { cpcRouter } from "./cpc.routes";
import { customerRouter } from "./customer.routes";
import { modelRouter } from "./model.routes";
import { packageRouter } from "./package.routes";
import { providerRouter } from "./provider.routes";
import { smeRouter } from "./sme.routes";
import { smmRouter } from "./smm.routes";
import { userRouter } from "./user.routes";

const router = Router();



router.use("/user", userRouter)
router.use("/model", modelRouter)
router.use("/cpc", cpcRouter)
router.use("/package", packageRouter)
router.use("/customer", customerRouter)
router.use("/provider",providerRouter)
router.use("/sme",smeRouter)
router.use("/smm",smmRouter)


export {router}