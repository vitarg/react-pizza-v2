import React, {useEffect, useState} from "react";
import Categories from "../components/categories";
import Sort from "../components/sort";
import Skeleton from "../components/pizza-block/Skeleton";
import PizzaBlock from "../components/pizza-block";

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

const Home = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://619116e741928b001768ff38.mockapi.io/pizzas").then(
      (response) => {
        setLoading(false);
        return response.json().then(setPizzas);
      }
    );
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default Home;
