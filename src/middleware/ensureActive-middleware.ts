import { Request, Response, NextFunction } from "express"
import SubscriptionModel from "../models/subscription-model"

async function EnsureActive(req: Request, res: Response, next: NextFunction) {
  const { id } = req.body

  if (!id) {
    res.status(400).json({ error: "needed id" })
    return
  }
  const data = await SubscriptionModel.findOne({ where: { id } })

  if (!data?.active) {
    res.status(400).json({ message: "user is not subscribe" })
  } else {
    res.locals.lastMessage = data.last_message
    next()
  }
}

export default EnsureActive
