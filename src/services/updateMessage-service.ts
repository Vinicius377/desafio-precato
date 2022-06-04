import schedule from "node-schedule"
import SubscriptionModel from "../models/subscription-model"

const date = new Date()
date.setHours(4)

function updateLastMessage() {
  schedule.scheduleJob(date, async () => {
    try {
      await SubscriptionModel.increment("last_message", {
        where: { active: true },
      })
    } catch (e) {
      console.log(e)
    }
  })
}

export default updateLastMessage
