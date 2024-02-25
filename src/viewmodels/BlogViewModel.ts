import { BlogPostCardModel } from "@/models";
import { NextRouter } from "next/router";

export class BlogViewModel {
    router: NextRouter;
    blogItemData: BlogPostCardModel[] = [
        {
            date: "25\nNov",
            image: "Blog/Blog/image_1.png",
            author: "Rachi Card",
            title: "The Benefits of Vitamin D & How to Get It",
            content: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        },
        {
            date: "25\nNov",
            image: "Blog/Blog/image_2.png",
            author: "Rachi Card",
            title: "Our Favorite Summertime Tomato",
            content: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        }, {
            date: "25\nNov",
            image: "Blog/Blog/image_3.png",
            author: "Rachi Card",
            title: "Benefits of Vitamin C & How to Get It",
            content: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        }, {
            date: "25\nNov",
            image: "Blog/Blog/image_4.png",
            author: "Rachi Card",
            title: "Research More Organic Foods",
            content: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        }, {
            date: "25\nNov",
            image: "Blog/Blog/image_5.png",
            author: "Rachi Card",
            title: "Everyday Fresh Fruites",
            content: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        }, {
            date: "25\nNov",
            image: "Blog/Blog/image_6.png",
            author: "Rachi Card",
            title: "Don't Use Plastic Product! it's Kill Nature",
            content: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        },
    ]
    constructor(router: NextRouter) {
        this.router = router;
    }
};