import express from 'express';
import cors from 'cors'
import { ProductRoutes } from './app/modules/products/product.routes';


const app = express()

//parsers middleware option;
app.use(express.json())
app.use(cors())



app.get('/', (req, res) => {
  res.send('Ecommerce Inventory Running!')
})

//routes
app.use('/api/products', ProductRoutes)

export default app