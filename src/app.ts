import express, {Express, Request, Response} from "express";
// 1. Initialize the express app
const app: Express = express();

// 2. Define Middlewares
// 2.1 Instruct to parse the request
// payload data to be converted
// to json format


app.use(express.json());

app.get('/',(req : Request, res : Response) => {
    console.log(req.body)
    res.send("Hello World!!")

});
export default app