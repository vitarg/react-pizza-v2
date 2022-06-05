import React from "react";
import Header from "./header";
import Categories from "./categories";
import Sort from "./sort";
import PizzaBlock from "./pizza-block";
import "../scss/app.scss";

const App = () => {
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
            <PizzaBlock title="Чизбургер-Пицца" price={395} />
            <PizzaBlock title="Мексиканская" price={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
