import { z } from "zod";


const OrderValidationSchema = z.object({
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    }),
    productId: z.string({
        required_error: "Product ID is required",
        invalid_type_error: "Product ID must be a string of MongoDB _id",
    }),
    quantity: z.string({
        required_error: "Quantity is required",
        invalid_type_error: "Quantity must be a number",
    }),
    price: z.number({
        required_error: "Price is required",
        invalid_type_error: "Price must be a number",
    }).positive(),
});

export default OrderValidationSchema