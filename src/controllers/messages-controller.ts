import { Request, Response } from "express"
import MessageModel from "../models/message-model"
import SubscriptionModel from "../models/subscription-model"

async function Message(req: Request, res: Response) {
  const { id } = req.body
  const { lastMessage } = res.locals

  try {
    const lastDayMessage = await MessageModel.max("position")
    if (lastDayMessage === lastMessage) {
      await SubscriptionModel.update({ active: false }, { where: { id } })
      const message = await MessageModel.findOne({
        where: { position: lastMessage },
      })
      res.status(200).json(message)
      return
    }
  } catch (e) {
    res.status(500).json({ error: "internal error" + e })
  }

  try {
    const message = await MessageModel.findOne({
      where: { position: lastMessage },
    })
    if (!message) {
      res.status(404).json({ message: "message not found" })
      return
    }
    res.status(200).json(message)
  } catch (e) {
    res.status(500).json({ error: "internal error" + e })
  }
}

export default Message
