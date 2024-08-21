import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.Interface";

//create Product schema


const VariantSchema = new Schema<TVariant>({
    type: String,
    value: String
}, {_id: false}) 

const InventorySchema = new Schema<TInventory>({
    quantity: Number,
    inStock: Boolean
}, {_id: false}) 

const ProductSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: true,
    },
    description: String,
    price: Number,
    category: String,
    tags: [String],
    variants: [VariantSchema],
    inventory: InventorySchema,
})


//create Product model using ProductSchema
export const Product = model('Product', ProductSchema)