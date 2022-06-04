import { Request, Response } from "express"
import MessageModel from "../models/message-model"
import SubscriptionModel from "../models/subscription-model"

async function Message(req: Request, res: Response) {
  const { id } = req.body
  const { lastMessage } = res.locals

  try {
    const message = await MessageModel.findOne({
      where: { position: lastMessage },
    })
    if (!message) {
      await SubscriptionModel.update({ active: false }, { where: { id } })
      res.status(400).json({ message: "user already readed all" })
      return
    }
    res.status(200).json(message)
  } catch (e) {
    res.status(500).json({ error: "internal error" + e })
  }
}

export default Message
