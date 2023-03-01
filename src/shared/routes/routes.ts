import { Router } from "express";
import { cpcRouter } from "./cpc.routes";
import { customerRouter } from "./customer.routes";
import { modelRouter } from "./model.routes";
import { packageRouter } from "./package.routes";
import { providerRouter } from "./provider.routes";
import { userRouter } from "./user.routes";

const router = Router();


router.use("/model", modelRouter)
router.use("/cpc", cpcRouter)
router.use("/package", packageRouter)
router.use("/customer", customerRouter)
router.use("/user", userRouter)
router.use("/provider",providerRouter)


export {router}