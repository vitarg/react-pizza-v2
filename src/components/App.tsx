import React, { useEffect, useState } from "react";
import Header from "./header";
import Categories from "./categories";
import Sort from "./sort";
import PizzaBlock from "./pizza-block";
import "../scss/app.scss";

interface Pizza {
  id: number;
  title: string;
  types: number[];
  sizes: number[];
  imageUrl: string;
  price: number;
  category: number;
  rating: number;
}

const App = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  useEffect(() => {
    fetch("https://619116e741928b001768ff38.mockapi.io/pizzas").then(
      (response) => response.json().then(setPizzas)
    );
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((item) => (
              <PizzaBlock key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
