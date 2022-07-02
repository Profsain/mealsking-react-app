import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import "../styles/MealExplore.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MealExplore = () => {
  const location = useLocation();
  const categoryName = location.state;
  const [mealData, setMealData] = useState([]);
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        const dataArr = data.meals;
        setMealData(dataArr)
      })
  }, []);

  const mealContent = mealData.map((items) => {
    return (
      <div className="Meals-item" key={items.idMeal}>
        <img src={items.strMealThumb} alt={items.strMeal} />
        <div className="Meals-headline">
          <h4>{items.strMeal}</h4>
          <FontAwesomeIcon icon="fa-light fa-heart" />
          <FontAwesomeIcon icon="fa-solid fa-heart" />
          <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
        </div>
        <div className="Button-container">
          <button type="button">View</button>
          <button type="button">Comment</button>
        </div>
      </div>
    )
  });

  return (
    <div className="MealExplore-container">
      <Header />
      <h2>{categoryName} Category</h2>
      <div className="Category-list">
        {mealContent}
      </div>
    </div>
  )
}

export default MealExplore;