import schedule from "node-schedule"
import SubscriptionModel from "../models/subscription-model"

const startData = new Date()
startData.setHours(23, 59)

function updateLastMessage() {
  schedule.scheduleJob({ start: startData, rule: "*/23 * * *" }, async () => {
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
