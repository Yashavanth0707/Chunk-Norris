import React, { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [selectedBox, setSelectedBox] = useState(null);

  useEffect(() => {
    getAllCategory();
  }, []);

  //get all category name
  const getAllCategory = async () => {
    const data = await fetch("https://api.chucknorris.io/jokes/categories");
    const json = await data.json();
    setCategory(json);
  };

  const handleClick = (item) => {
    fetchJokesFromAPI(item);
  };

  const handleWrong = () => {
    setSelectedBox(null);
  };

  const handleChange = (x) => {
    fetchJokesFromAPI(x);
  };

  //fetching the jokes
  const fetchJokesFromAPI = async (selectedBox) => {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${selectedBox}`
    );
    const data = await response.json();
    setSelectedBox(data);
  };

  return category.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div>
      {selectedBox !== null && (
        <div className="selectbox-cont">
          <div className="ad-container">
            <div className="wrong-mark" onClick={handleWrong}>
              &#10060;
            </div>
            <h1 className="ad-head">{selectedBox.categories[0]}</h1>
            <div className="joke-cont">
              <p>{selectedBox.value}</p>

              <button
                className="ad-btn"
                onClick={() => handleChange(selectedBox.categories[0])}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="category-page">
        {category.map((item, index) => (
          <div
            className="category-box"
            key={index}
            onClick={() => handleClick(item)}
          >
            <h1 className="cat-item">{item}</h1>
            <p>Unlimited Jokes On {item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
