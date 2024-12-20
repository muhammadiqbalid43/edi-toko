import React from "react";

function Category() {
  const categoryData = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1681284938413-ea2c090c6d14?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "New Arrivals",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1523426366168-ab13c3cccb03?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Productivity",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1603723197143-e2ecc81480a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Workspace",
    },
    {
      id: 4,
      image:
        "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Accessories",
    },
    {
      id: 5,
      image:
        "https://plus.unsplash.com/premium_photo-1668704252725-52cc74ef3f39?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sale",
    },
  ];

  return (
    <div className="category bg-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between">
          <h4 className="text-2xl font-bold mb-4 text-black">
            Shop by Category
          </h4>
          <a href="#" className="font-semibold text-blue-500">
            Browse all categories &rarr;
          </a>
        </div>
        <div className="cards flex  md:gap-6 lg:gap-8">
          {categoryData.map((item) => (
            <div
              key={item.id}
              className={`bg-white w-1/5  h-48 lg:h-72 xl:h-80 rounded-lg  relative overflow-hidden`}
            >
              <img src={item.image} alt={item.title} />
              <h4 className="text-xl drop-shadow-lg font-bold absolute text-center inset-x-0 bottom-4 ">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
