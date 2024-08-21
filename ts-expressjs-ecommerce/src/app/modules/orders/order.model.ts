import { Schema, model } from "mongoose"
import { TOrder } from "./order.interface"


//create an Order Schema

const OrderSchema = new Schema<TOrder>({
    email: {
        type: String, 
        required: true
    },
    productId: {
        type: String, 
        required: true
    },
    quantity: {
        type: Number, 
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
})

//create Order model using OrderSchema
export const OrderModel = model('Order', OrderSchema)