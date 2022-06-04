import { Router } from "express"
import Message from "./controllers/messages-controller"
import Subscription from "./controllers/subscription-controller"
import EnsureActive from "./middleware/ensureActive-middleware"

const routes = Router()

routes.post("/sub", Subscription)
routes.get("message", EnsureActive, Message)

export default routes
