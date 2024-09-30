import express from "express"
import router from "./routers/index.route"

const app = express()

//
app.use("/", router)
export default app
