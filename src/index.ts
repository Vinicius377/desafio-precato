import express from "express"
import routes from "./routes"
import db from "./config/db-config"
import updateLastMessage from "./services/updateMessage-service"
import cors from "cors"

const PORT = process.env.PORT || 2222
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
db.sync()
  .then(() => console.log("database sycronnized"))
  .catch(e => console.log("database error " + e))
updateLastMessage()

app.listen(PORT, () => console.log(`server is runnig at port ${PORT}`))
