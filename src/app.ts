import express, {Express, Request, Response} from "express";
import productsRoutes from "./routes/product.routes" // import products
// 1. Initialize the express app
const app: Express = express();

// 2. Define Middlewares
// 2.1 Instruct to parse the request
// payload data to be converted
// to json format


app.use(express.json());

app.use("/api/products",productsRoutes) // when we get /api/products  type request  handle into productsRotes

app.get('/',(req : Request, res : Response) => {
    console.log(req.body)
    res.send("Hello World!!")

});
export default app;