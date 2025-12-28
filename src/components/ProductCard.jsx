import React from "react";
import Button from "./Button";

const ProductCard = ({ product }) => {
  const { title, price, image } = product;

  return (
    <div className="cursor-pointer border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-lg transition bg-gray-100 mx-6">
      <div className="h-40 flex items-center justify-center mb-4">
        <img
          src={image}
          alt={title}
          className="h-full object-contain rounded-xl"
        />
      </div>

      <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 mb-2">
        {title}
      </h3>

      <p className="text-slate-900 font-bold">${price}</p>
      <Button text="View Details"/>
    </div>
  );
};

export default ProductCard;
