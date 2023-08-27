import React from "react";

const CartBlog = () => {
  return (
    <div className="mr-2">
      <div className="line-header w-full h-[0.4rem] rounded-lg mb-2"></div>
      <img
        src="https://www.training.com.au/wp-content/uploads/career-in-technology-feature.png"
        className="img-cart w-full h-32"
        alt=""
      />
      <h2 className="text-white title-name my-1">
        Lorem ipsum dolor sit Lorem ipsum dolor sit
      </h2>
      <span className="text-white time mr-2">20.12.3</span>
      <span className="text-white tag">#tag</span>
      <span className="text-white tag">#tag</span>
    </div>
  );
};

export default CartBlog;
