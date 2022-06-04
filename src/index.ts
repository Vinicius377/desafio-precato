import express from "express"
import routes from "./routes"
import db from "./config/db-config"
import updateLastMessage from "./services/updateMessage-service"

const PORT = process.env.PORT || 2222
const app = express()

app.use(routes)
app.use(express.json())
updateLastMessage()
db.sync()
  .then(() => console.log("databse sycronnized"))
  .catch(e => console.log("database error " + e))

app.listen(PORT, () => console.log(`server is runnig at port ${PORT}`))
