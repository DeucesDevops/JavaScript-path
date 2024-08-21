import { Request, Response } from "express"
import ProductValidationSchema from "./product.validation"
import { ProductService } from "./product.service"


//create product
export const createProduct = async (req: Request, res: Response) => {
    try {
        // console.log(req.body)
        const zodParser = ProductValidationSchema.parse(req.body)
        const result = await ProductService.createProductIntoDB(zodParser)
        res.status(200).json({
            success: true,
            message: "Product created successfully",
            data: result
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
            error: error
        })
    }
}

//get all products
export const getAllProducts = async (req: Request, res: Response) => {

    //get a word or name when searched
    const { searchTerm } = req.query
    const result = await ProductService.getProductsFromDB(searchTerm as string)
    res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        data: result
    })
}

//get a single product
export const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params
        const result = await ProductService.getSingleProductFromDB(productId)
        res.status(200).json({
            success: true,
            message:  "Product fetched successfully",
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
            error: error
        })
    }
}

//update a product
export  const updateProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params
        const data = req.body;
        const result = await ProductService.updateProductInDB(productId, data)
        res.status(200).json({
            success: true,
            message:  "Product updated successfully",
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
            error: error
        })
    }
}

//delete product
export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params
        const result = await ProductService.deleteProductFromDB(productId)
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: null
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
            error: error
        })
    }

}

export const ProductControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
}

