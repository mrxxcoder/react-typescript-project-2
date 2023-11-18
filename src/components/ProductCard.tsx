import { IProduct } from "../interfaces";
import { textSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCart = ({ product }: IProps) => {
  const { title, description, imageURL, price, category } = product;
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border flex flex-col p-2 rounded-md m-2">
      <Image
        imageURL={imageURL}
        alt={title}
        className="rounded-md mb-2 h-52 w-full lg:object-cover"
      />

      <h3 className="text-lg font-semibold">{textSlicer(title, 25)}</h3>
      <p className="text-xs text-gray-500 break-words">
        {textSlicer(description, 120)}
      </p>

      <div className="flex items-center space-x-2 my-4">
        <span className="w-5 h-5 bg-indigo-600 rounded-full" />
        <span className="w-5 h-5 bg-yellow-600 rounded-full" />
        <span className="w-5 h-5 bg-red-600 rounded-full" />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-lg text-indigo-600 font-semibold">${price}</span>
        <Image
          imageURL={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-bottom"
        />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Button className="bg-indigo-700">Edit</Button>
        <Button className="bg-red-700">Delete</Button>
      </div>
    </div>
  );
};

export default ProductCart;
