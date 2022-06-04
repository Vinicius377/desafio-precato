import { Router } from "express"
import Subscription from "./controllers/subscription-controller"

const routes = Router()

routes.post("/sub", Subscription)

export default routes
