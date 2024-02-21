import { ProductCard } from "@/components";
import { ProductCardModel } from "@/models";
import { FC } from "react";

const RelatedProduct: FC<{
  data:ProductCardModel[]
}> = (props) => {
  return <div className="flex flex-col justify-center gap-10">
    <label className="text-center text-slate-700 text-3xl font-extrabold font-roboto">Related Products</label>
    <div className="grid grid-cols-2 lg:grid-cols-4 px-[20%] gap-10 lg:gap-4 lg:px-0">
      {
        props.data.map((val,index)=><ProductCard key={index} {...val}/>)
      }
    </div>
  </div>;
};
export { RelatedProduct };
