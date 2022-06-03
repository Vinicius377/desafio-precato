import express from "express"
import routes from "./routes"

const PORT = process.env.PORT || 2222
const app = express()

app.use(routes)
app.use(express.json())

app.listen(PORT, () => console.log(`server is runnig at port ${PORT}`))
