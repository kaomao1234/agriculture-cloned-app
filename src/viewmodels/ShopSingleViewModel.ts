import { ProductCardModel } from "@/models";

export class ShopSingleViewModel {
    productItemCard: ProductCardModel[] = [
        {
            "imageSrc": "ShopSingle/RelatedProduct/image_1.png",
            "productName": "Calabrese Broccoli",
            "currentPrice": "$13.00",
            "originalPrice": "$20.00",
            "rating": 5, // Rating not provided in the HTML
            "categoryTag": "Vegetable"
        },
        {
            "imageSrc": "ShopSingle/RelatedProduct/image_2.png",
            "productName": "Fresh Banana Fruites",
            "currentPrice": "$14.00",
            "originalPrice": "$20.00",
            "rating": 5, // Rating not provided in the HTML
            "categoryTag": "Fresh" // Tag not provided in the HTML
        },
        {
            "imageSrc": "ShopSingle/RelatedProduct/image_3.png",
            "productName": "White Nuts",
            "currentPrice": "$15.00",
            "originalPrice": "$20.00",
            "rating": 5, // Rating not provided in the HTML
            "categoryTag": "Millets"
        },
        {
            "imageSrc": "ShopSingle/RelatedProduct/image_4.png",
            "productName": "Vegan Red Tomato",
            "currentPrice": "$17.00",
            "originalPrice": "$20.00",
            "rating": 5, // Rating not provided in the HTML
            "categoryTag": "Vegetable"
        },
    ]
};