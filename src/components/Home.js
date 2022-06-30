import React, { useEffect, useState } from "react";
import "../styles/Home.css";

const Home = () => {
  const [mealsCategory, setMealCategory] = useState([]);
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php"

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        const dataArr = data.categories;
        setMealCategory(dataArr);
      });
  }, []);

  const categories = mealsCategory.map((items) => {
    return (
      <div className="Meal-card">
        <img src={items.strCategoryThumb} alt={items.strCategory} />
        <h4>{items.strCategory}</h4>
        <button type="button" className="Explore-btn">Explore Meals</button>
      </div>
    )
  });
  const totalCategories = mealsCategory.length;

  return (
    <div className="Home-container">
      <h2 className="Home-title">Checkout ({totalCategories}) Meals in Categories</h2>
      <div className="Category-grid">
        {categories}
      </div>
    </div>
  )
}

export default Home;