// TypeScript with Express\
import express, {Request, Response} from 'express'

const app = express()
const port = 8000

app.get("/",(request: Request, response: Response)=>{
response.send("Hello, TypeScript with Express!")
})

app.listen(port, ()=> console.log(`Server running on port ${port}`))