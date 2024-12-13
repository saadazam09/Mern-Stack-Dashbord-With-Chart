import Product from "../models/Product";
import Product from "../models/Product";
import ProductStat from "../models/ProductStat";

export const getProduct = async (req, res) => {
    try {
        const Product = await Product.find();
        const ProductsWithStats = await Promise.all(
            Product.map(async (Product) => {
                const stat = await ProductStat.find({
                    productId: Product._id,
                })
                return {
                    ...Product._doc,
                    stat,
                }
            })
        )
        res.status(200).json(ProductsWithStats);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};