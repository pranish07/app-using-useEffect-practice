import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/products") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            products: [
              {
                name: "Shoes",
                price: 3000,
                desc: "lorem ipsum dolor sit amit",
                src: "https://picsum.photos/200/200",
              },
              {
                name: "Tshirt",
                price: 500,
                inStock: false,
                desc: "lorem ipsum dolor sit amit",
                src: "https://picsum.photos/201/201",
              },
              {
                name: "Trekking Bag",
                price: 2000,
                inStock: true,
                desc: "lorem ipsum dolor sit amit",
                src: "https://picsum.photos/205/205",
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      }
    }, 2000);
  });
};

export default function Product() {
  // Create a React component that calls the product api and has the same number of buttons as the items in product. On Click of each button show the details of that card only. Example: In the below API we have three products and three buttons.

  const [showData, setShowData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    const fetchFakeFetch = async () => {
      const response = await fakeFetch("https://example.com/api/products");
      setShowData(response.data.products);
    };
    fetchFakeFetch();
  }, []);

  const handleClick = (e) => {
    showData.filter((item) => {
      if (item.name === e.target.textContent) {
        setFilteredData(item);
      }
    });
    setLoading(true)

  };
  return (
    <div>
      <h2>Question 1</h2>
      {showData.map(({ name },idx) => (
        <button key={idx} onClick={(e) => handleClick(e)}>{name}</button>
      ))}

  {loading?(
    <div>
          <img src={filteredData.src} alt={filteredData.name}/><br />
          <b>Name: {filteredData.name}</b>
          <p>price:{filteredData.price}</p>
          <p>Desc:{filteredData.desc}</p>
          </div>
  ):<p>click on a button</p>}
    </div>
  );
}
