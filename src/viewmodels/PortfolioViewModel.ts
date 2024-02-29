import { NextRouter } from "next/router";

export class PortfolioViewModel {
    router: NextRouter;
    portFolioItemData = [
        {
            label: "Green & TastyLemon",
            type: "Fruits",
            image: "Portfolio/Portfolio/image_1.png",
        },
        {
            label: "Organic Carrot",
            type: "Farmer",
            image: "Portfolio/Portfolio/image_2.png",
        },
        {
            label: "Organic Betel Leaf",
            type: "Leaf",
            image: "Portfolio/Portfolio/image_3.png",
        },
        {
            label: "Natural Tommato",
            type: "Fruits",
            image: "Portfolio/Portfolio/image_4.png",
        },
        {
            label: "Black Raspberry",
            type: "Farmer",
            image: "Portfolio/Portfolio/image_5.png",
        },
        {
            label: "Honey Orange",
            type: "Farmer",
            image: "Portfolio/Portfolio/image_6.png",
        },
    ]
    constructor(router: NextRouter) {
        this.router = router;
    }
    onItemTrigger(self: {
        label: string,
        type: string,
        image: string
    }) {
        this.router.push({
            pathname: "/PortfolioSingle"
        })
    }
}