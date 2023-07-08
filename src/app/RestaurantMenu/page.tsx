enum FoodCategory {
  Pizza = "Pizza",
  Pasta = "Pasta",
  Salad = "Salad",
  Dessert = "Dessert",
}

type Dish = {
  name: string;
  price: number;
  weight: number;
  serves: number;
  photo: string;
  category: FoodCategory;
  description: string;
};

const mockDishes: Dish[] = [
  // Pizzas
  {
    name: "Margherita Pizza",
    price: 12.99,
    weight: 800,
    serves: 2,
    photo: "/images/Receitas/Esfihas/esfiha_espinafre.jpg",
    category: FoodCategory.Pizza,
    description: "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
  },
  {
    name: "Pepperoni Pizza",
    price: 13.99,
    weight: 850,
    serves: 2,
    photo: "/images/Receitas/Esfihas/esfiha_frango.jpg",
    category: FoodCategory.Pizza,
    description: "Traditional pizza topped with pepperoni, mozzarella cheese, and tomato sauce.",
  },
  {
    name: "Mushroom Pizza",
    price: 11.99,
    weight: 750,
    serves: 2,
    photo: "/images/Receitas/Esfihas/esfiha_frango.jpg",
    category: FoodCategory.Pizza,
    description: "Delicious pizza topped with mushrooms, mozzarella cheese, and tomato sauce.",
  },
  {
    name: "Four Cheese Pizza",
    price: 14.99,
    weight: 800,
    serves: 2,
    photo: "/images/Receitas/Esfihas/esfiha_espinafre.jpg",
    category: FoodCategory.Pizza,
    description: "Indulgent pizza topped with a blend of four different cheeses.",
  },
  {
    name: "Vegetarian Pizza",
    price: 12.99,
    weight: 800,
    serves: 2,
    photo: "/images/Receitas/Esfihas/esfiha_espinafre.jpg",
    category: FoodCategory.Pizza,
    description: "Vibrant pizza loaded with fresh vegetables and mozzarella cheese.",
  },

  // Pastas
  {
    name: "Spaghetti Carbonara",
    price: 10.99,
    weight: 500,
    serves: 1,
    photo: "/images/Receitas/Esfihas/esfiha_espinafre.jpg",
    category: FoodCategory.Pasta,
    description: "Traditional Italian pasta dish with eggs, cheese, bacon, and black pepper.",
  },
  {
    name: "Lasagna",
    price: 11.99,
    weight: 600,
    serves: 1,
    photo: "/images/Receitas/Esfihas/esfiha_espinafre.jpg",
    category: FoodCategory.Pasta,
    description: "Classic Italian baked pasta dish with layers of pasta, meat sauce, and cheese.",
  },
  {
    name: "Penne Arrabiata",
    price: 9.99,
    weight: 450,
    serves: 1,
    photo: "/images/Receitas/Esfihas/esfiha_espinafre.jpg",
    category: FoodCategory.Pasta,
    description: "Spicy pasta dish with penne, tomato sauce, garlic, and chili peppers.",
  },
  {
    name: "Fettuccine Alfredo",
    price: 10.99,
    weight: 550,
    serves: 1,
    photo: "/images/Receitas/Esfihas/esfiha_espinafre.jpg",
    category: FoodCategory.Pasta,
    description: "Creamy pasta dish with fettuccine, Parmesan cheese, and butter.",
  },
  {
    name: "Ravioli Marinara",
    price: 11.99,
    weight: 500,
    serves: 1,
    photo: "/images/Receitas/Esfihas/esfiha_espinafre.jpg",
    category: FoodCategory.Pasta,
    description: "Stuffed pasta pockets served with a flavorful marinara sauce.",
  },

  // Salads
  {
    name: "Caesar Salad",
    price: 8.99,
    weight: 400,
    serves: 1,
    photo: "/images/Receitas/Esfihas/esfiha_espinafre.jpg",
    category: FoodCategory.Salad,
    description: "Fresh romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
  },
  {
    name: "Greek Salad",
    price: 9.99,
    weight: 450,
    serves: 1,
    photo: "/images/Receitas/Esfihas/esfiha_espinafre.jpg",
    category: FoodCategory.Salad,
    description: "Traditional Greek salad with tomatoes, cucumbers, onions, olives, and feta cheese.",
  },
  {
    name: "Caprese Salad",
    price: 8.99,
    weight: 350,
    serves: 1,
    photo: "/images/Receitas/Esfihas/esfiha_espinafre.jpg",
    category: FoodCategory.Salad,
    description: "Refreshing salad with tomatoes, fresh mozzarella, and basil leaves.",
  },
  {
    name: "Cobb Salad",
    price: 9.99,
    weight: 500,
    serves: 1,
    photo: "/images/Receitas/Esfihas/esfiha_espinafre.jpg",
    category: FoodCategory.Salad,
    description: "Hearty salad with chicken, bacon, avocado, eggs, tomatoes, and blue cheese.",
  },
  {
    name: "Spinach Salad",
    price: 8.99,
    weight: 400,
    serves: 1,
    photo: "/images/Receitas/Esfihas/esfiha_espinafre.jpg",
    category: FoodCategory.Salad,
    description: "Nutritious salad with fresh spinach, strawberries, almonds, and balsamic dressing.",
  },

  // Desserts
  {
    name: "Tiramisu",
    price: 6.99,
    weight: 200,
    serves: 1,
    photo: "/images/Receitas/Esfihas/esfiha_espinafre.jpg",
    category: FoodCategory.Dessert,
    description: "Classic Italian dessert made with ladyfingers, coffee, mascarpone cheese, and cocoa.",
  },
  {
    name: "Cannoli",
    price: 5.99,
    weight: 150,
    serves: 1,
    photo: "/images/Receitas/Esfihas/esfiha_espinafre.jpg",
    category: FoodCategory.Dessert,
    description: "Delightful Italian pastry filled with sweet ricotta cream and chocolate chips.",
  },
  {
    name: "Panna Cotta",
    price: 6.99,
    weight: 200,
    serves: 1,
    photo: "/images/Receitas/Esfihas/esfiha_espinafre.jpg",
    category: FoodCategory.Dessert,
    description: "Creamy Italian dessert made with sweetened cream and topped with fruit sauce.",
  },
  {
    name: "Gelato",
    price: 5.99,
    weight: 200,
    serves: 1,
    photo: "/images/Receitas/Esfihas/esfiha_espinafre.jpg",
    category: FoodCategory.Dessert,
    description: "Traditional Italian frozen dessert available in various flavors.",
  },
  {
    name: "Tartufo",
    price: 6.99,
    weight: 150,
    serves: 1,
    photo: "/images/Receitas/Esfihas/esfiha_espinafre.jpg",
    category: FoodCategory.Dessert,
    description: "Indulgent Italian dessert with a truffle-like shape, filled with gelato and coated in cocoa.",
  },
];

import React from "react";

const Menu: React.FC = () => {
  const DishCard: React.FC<{ dish: Dish }> = ({ dish }) => {
    return (
      <div className="rounded-lg overflow-hidden shadow-lg bg-background-card border-border-dark">
        <div className="flex flex-row py-4 px-2">
          <div className="flex-shrink-0 items-center bg-background-cardSecondary">
            <div className="flex justify-center items-center h-32 py-5 px-2">
              <img className="rounded-lg object-cover w-28 h-28" src={dish.photo} alt={dish.name} />
            </div>
            <div className="flex justify-center items-center mt-2">
              <DishPrice price={dish.price} />
            </div>
          </div>
          <div className="flex-grow bg-background-card px-6">
            <DishName name={dish.name} />
            <DishDescription description={dish.description} />
            <DishDetails weight={dish.weight.toString()} serves={dish.serves} />
          </div>
        </div>
      </div>
    );
  };

  const DishName: React.FC<{ name: string }> = ({ name }) => {
    return (
      <div className="font-bold text-xl mb-2 text-background-titleBox-text bg-background-titleBox rounded-lg p-2">
        {name}
      </div>
    );
  };

  const DishDescription: React.FC<{ description: string }> = ({ description }) => {
    return <p className="text-md font-semibold mb-2 text-background-card-text">{description || "Esqueci"}</p>;
  };

  const DishDetails: React.FC<{ weight: string; serves: number }> = ({ weight, serves }) => {
    return (
      <p className="text-background-card-text">
        {weight}g - Serves {serves} People
      </p>
    );
  };

  const DishPrice: React.FC<{ price: number }> = ({ price }) => {
    return <p className="text-lg text-primary-dark">R${price}</p>;
  };

  return (
    <div className="p-4 bg-white text-background-text w-[100%] mx-auto mt-[-05rem]">
      <img
        className="w-[100%] h-fit"
        src="https://cdn.discordapp.com/attachments/327238569569550338/1127049736101314651/carnes.png"
      />
      {Object.values(FoodCategory).map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-4xl text-background-titleBox-text mb-4">{category}</h2>
          <div className="grid grid-cols-2 gap-4">
            {mockDishes
              .filter((dish) => dish.category === category)
              .map((dish) => (
                <DishCard key={dish.name} dish={dish} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
