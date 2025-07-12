import express, {Express, Request, Response} from "express";
import productsRoutes from "./routes/product.routes" // import products
import cors from 'cors'
import contactRouter from "./routes/contact.routes";
// 1. Initialize the express app
const app: Express = express();

// 2. Define Middlewares
// 2.1 Instruct to parse the request
// payload data to be converted
// to json format


app.use(express.json());
const allowedOrigins =[
    'http://localhost:5173' // if this only port get request allowed
];

const corsOptions  = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow ?: boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error("Not Allowed by CORS"))
        }
    }

};
app.use(cors(corsOptions));  //Enable / Allow CORS here // middleware

app.use("/api/products",productsRoutes) // when we get /api/products  type request  handle into productsRoutes
app.use("/api/contact",contactRouter)

app.get('/',(req : Request, res : Response) => {
    console.log(req.body)
    res.send("Hello World!!")

});
export default app;