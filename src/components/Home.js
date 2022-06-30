import { useEffect, useState } from "react";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php"

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        // throw response;
      })
      .then((data) => {
        setCategories(data);
      })
  }, []);
  console.log(categories)
  return (
    <div className="Home-container">
      <h2>This is Home Page showing Meals categories</h2>
    </div>
  )
}

export default Home;