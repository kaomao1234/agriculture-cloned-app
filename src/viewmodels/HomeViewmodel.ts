import { ProductCardModel } from "@/models";

export class HomeViewModel {
    productItemCard: ProductCardModel[] = [
        {
            "imageSrc": "https://via.placeholder.com/335x324",
            "productName": "Calabrese Broccoli",
            "currentPrice": "$13.00",
            "originalPrice": "$20.00",
            "rating": 5, // Rating not provided in the HTML
            "categoryTag": "Vegetable"
        },
        {
            "imageSrc": "https://via.placeholder.com/375x375",
            "productName": "Fresh Banana Fruites",
            "currentPrice": "$14.00",
            "originalPrice": "$20.00",
            "rating": 5, // Rating not provided in the HTML
            "categoryTag": "Fresh" // Tag not provided in the HTML
        },
        {
            "imageSrc": "https://via.placeholder.com/328x328",
            "productName": "White Nuts",
            "currentPrice": "$15.00",
            "originalPrice": "$20.00",
            "rating": 5, // Rating not provided in the HTML
            "categoryTag": "Millets"
        },
        {
            "imageSrc": "https://via.placeholder.com/330x330",
            "productName": "Vegan Red Tomato",
            "currentPrice": "$17.00",
            "originalPrice": "$20.00",
            "rating": 5, // Rating not provided in the HTML
            "categoryTag": "Vegetable"
        },
        {
            "imageSrc": "https://via.placeholder.com/359x359",
            "productName": "Mung Bean",
            "currentPrice": "$11.00",
            "originalPrice": "$20.00",
            "rating": 5, // Rating not provided in the HTML
            "categoryTag": "Health"
        },
        {
            "imageSrc": "https://via.placeholder.com/334x250",
            "productName": "Brown Hazelnut",
            "currentPrice": "$12.00",
            "originalPrice": "$20.00",
            "rating": 5, // Rating not provided in the HTML
            "categoryTag": "Nuts"
        },
        {
            "imageSrc": "https://via.placeholder.com/392x392",
            "productName": "Eggs",
            "currentPrice": "$17.00",
            "originalPrice": "$20.00",
            "rating": 5, // Rating not provided in the HTML
            "categoryTag": "Fresh"
        },
        {
            "imageSrc": "https://via.placeholder.com/362x362",
            "productName": "Zelco Suji Elaichi Rusk",
            "currentPrice": "$15.00",
            "originalPrice": "$20.00",
            "rating": 5, // Rating not provided in the HTML
            "categoryTag": "Fresh"
        }
    ];
    offerData: ProductCardModel[] = [
        {
            "imageSrc": "/Home/Offer/image_1.png",
            "productName": "Mung Bean",
            "currentPrice": "$11.00",
            "originalPrice": "$20.00",
            "rating": 5,
            "categoryTag": "Vegetable"
        },
        {
            "imageSrc": "/Home/Offer/image_2.png",
            "productName": "Brown Hazelnut",
            "currentPrice": "$12.00",
            "originalPrice": "$20.00",
            "rating": 5,
            "categoryTag": "Vegetable"
        },
        {
            "imageSrc": "/Home/Offer/image_3.png",
            "productName": "Onion",
            "currentPrice": "$17.00",
            "originalPrice": "$20.00",
            "rating": 5,
            "categoryTag": "Vegetable"
        },
        {
            "imageSrc": "/Home/Offer/image_4.png",
            "productName": "Cabbage",
            "currentPrice": "$17.00",
            "originalPrice": "$20.00",
            "rating": 5,
            "categoryTag": "Vegetable"
        },
    ];
    galleryData = [
        {
            name: "Organic Juice",
            imageSrc: "/Home/Gallery/image_1.jpg"
        },
        {
            name: "Organic Food",
            imageSrc: "/Home/Gallery/image_2.jpg"
        },
        {
            name: "Nuts Cookis",
            imageSrc: "/Home/Gallery/image_3.jpg"
        }
    ]

    constructor() {

    }
}