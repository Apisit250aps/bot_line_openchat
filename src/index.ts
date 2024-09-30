import app from "./app"
import { port } from "./config/index.config"

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`) // Output: Server is running on port 3000
})
