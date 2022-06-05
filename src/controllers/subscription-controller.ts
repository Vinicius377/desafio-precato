import { Request, Response } from "express"
import SubscriptionModel from "../models/subscription-model"

interface BodyRequest {
  email: string
  name: string
}

async function Subscription(req: Request, res: Response) {
  console.log(req.body)
  const { email, name }: BodyRequest = req.body

  if (!email || !name) {
    res.status(400).json({ error: "insuficient data" })
    return
  }

  const isValidEmail = new RegExp(/@+[a-z]+\.com$/).test(email)
  if (!isValidEmail) {
    res.status(400).json({ error: "invalid email" })
    return
  }

  try {
    const [subscriber, created] = await SubscriptionModel.findOrCreate({
      where: {
        email,
      },
      defaults: {
        email,
        name,
      },
    })
    if (created) {
      res.status(201).json(subscriber)
    } else {
      res.status(400).json({ message: "there is a subscriber with this email" })
    }
  } catch (e) {
    res.status(500).json({ error: "internal error" + e })
  }
}

export default Subscription
