"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

const Nav_Item1 = [
  { index: 0, label: "Women" },
  { index: 1, label: "Men" },
  { index: 2, label: "Company" },
  { index: 3, label: "Stores" },
];

const Nav_Item2 = [
  { index: 0, label: "Search" },
  { index: 1, label: "Help" },
];

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const ITEMS_PER_PAGE = 5;

  // Function to fetch data from API
  const fetchProducts = async (query: string, page: number) => {
    setLoading(true);
    const offset = (page - 1) * ITEMS_PER_PAGE;

    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${query}&skip=${offset}&limit=${ITEMS_PER_PAGE}`,
      );
      const data = await response.json();
      setProducts(data.products || []);
      setTotalPages(Math.ceil(data.total / ITEMS_PER_PAGE));
    } catch (err) {
      console.error("Error fetching data:", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Trigger pencarian setiap kali searchTerm atau currentPagr berubah
  useEffect(() => {
    if (searchTerm) {
      fetchProducts(searchTerm, currentPage);
    } else {
      setProducts([]);
    }
  }, [searchTerm, currentPage]);

  return (
    <>
      <div className="w-full shadow-lg relative">
        <div className="flex bg-cyan-950 p-2 justify-between">
          <div className="text-white">Toko EDI</div>
          <div className="flex gap-4">
            <button className="text-white">Sign In</button>
            <button className="text-white">Create an account</button>
          </div>
        </div>
        {/* Dekstop */}
        <div className="flex justify-between bg-blue-500 p-4">
          <div></div>
          <div className="flex gap-2 md:gap-6">
            {Nav_Item1.map((item) => (
              <button key={item.index} className="">
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2 md:gap-6">
            {Nav_Item2.map((item) => (
              <button key={item.index}>{item.label}</button>
            ))}
            <div className="flex items-center gap-1">
              <Image src="/bag.png" width={20} height={20} alt="" />
              <p>0</p>
            </div>

            <div className="rounded-lg bg-gray-200 text-gray-500">
              <div className="flex">
                <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="pointer-events-none absolute w-5 fill-gray-500 transition"
                  >
                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0"
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // Reset ke halaman pertama setiap kali search term berybah
                  }}
                />
                <input
                  type="button"
                  value="Search"
                  className="bg-blue-600 p-2 crounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800  transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {loading ? (
            <p>Loading...</p>
          ) : products.length > 0 ? (
            <div>
              <ul>
                {products.map((product) => (
                  <li key={product.id}>
                    <strong>{product.title}</strong>
                  </li>
                ))}
              </ul>
              <div className="pagination">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            searchTerm && <p>No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};
