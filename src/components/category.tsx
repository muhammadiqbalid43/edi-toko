import React from "react";

function Category() {
  const cards = [];

  for (let i = 0; i < 5; i++) {
    cards.push(
      <div
        key={i}
        className="bg-white w-1/5 bg-[url('https://plus.unsplash.com/premium_photo-1681284938413-ea2c090c6d14?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-48 lg:h-72 xl:h-80 rounded-lg  relative overflow-hidden"
      >
        <h4 className="font-xl font-bold absolute text-center inset-x-0 bottom-4 ">
          New Arrivals
        </h4>
      </div>,
    );
  }

  return (
    <div className="category bg-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between">
          <h4 className="text-lg font-bold mb-4 text-black">
            Shop by Category
          </h4>
          <a href="#" className="font-semibold text-blue-500">
            Browse all categories &rarr;
          </a>
        </div>
        <div className="cards flex  md:gap-6 lg:gap-8">{cards}</div>
      </div>
    </div>
  );
}

export default Category;
