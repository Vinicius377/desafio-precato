import { Router } from "express"
import CreateMessage from "./controllers/createMessage-controller"
import Message from "./controllers/messages-controller"
import Subscription from "./controllers/subscription-controller"
import EnsureActive from "./middleware/ensureActive-middleware"

const routes = Router()

routes.post("/sub", Subscription)
routes.post("/message", EnsureActive, Message)
routes.post("/message/create", CreateMessage)

export default routes
