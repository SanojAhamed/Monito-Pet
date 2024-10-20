// components/Products.js
import React, { useEffect, useState } from "react";
import "./css/Products.css";
import giftIcon from "../assets/icon/icons8-gift.png"; 

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  const fetchProductsData = async () => {
    try {
      const response = await fetch(
        "https://monitor-backend-rust.vercel.app/api/products"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProductsData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

 
  useEffect(() => {
    fetchProductsData();
  }, []);

 
  if (loading) {
    return <div className="text-center">Loading products...</div>;
  }

  
  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6 mt-5">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-l font-semibold text-black">Hard to choose right products for your pets?</h2>
        <button className="text-[#003366] border border-[#003366] rounded-full px-4 py-2 hover:bg-gray-600 font-extrabold button">
          View more &gt;
        </button>
      </div>
      <h3 className="text-3xl mb-4 font-bold dark-blue">
      Our Products
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden card"
          >
            <img src={product.image} alt={product.name} className="w-full" />
            <div className="card-content p-4">
              <h4 className="text-lg font-bold">
                {product.id} - {product.name}
              </h4>
              <p className="text-gray-800 font-bold">{product.price}</p>
              <div className="flex items-center justify-center mt-2 bg-red-300 p-1 rounded h-10">
                <i className="fa-sharp fa-solid fa-gift mr-2"></i>
                <div className="circle"></div>
                <span className="text-sm font-bold ml-2 text-[#003366] ">
                  Free Toy & Free Shaker
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
