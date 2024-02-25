interface BlogPostCardModel{
    date: string;
    image: string;
    author: string;
    title: string;
    content: string;
    onTap?:()=>void;
};
export type {BlogPostCardModel};