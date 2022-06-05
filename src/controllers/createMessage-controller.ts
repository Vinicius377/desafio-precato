import { Request, Response } from "express"
import MessageModel from "../models/message-model"

async function CreateMessage(req: Request, res: Response) {
  const { template_name, position } = req.body

  if (!template_name) {
    res.status(400).json({ error: "need template_name" })
    return
  }
  try {
    await MessageModel.create({ template_name, position })
    res.status(201).json({ message: "message created" })
  } catch (e) {
    res.status(500).json({ error: "internal error" + e })
  }
}

export default CreateMessage
