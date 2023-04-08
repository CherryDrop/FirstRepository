import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">Restaurante</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">Sobre Nós</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Menu</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Reservas</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};


const AboutUs: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="https://via.placeholder.com/500x500"
            alt="Restaurante"
            className="rounded-full shadow-md"
          />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-4xl font-bold mb-4">Sobre Nós</h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum metus non enim bibendum, quis
            faucibus velit rutrum. Donec ullamcorper lorem sed felis placerat, sit amet dictum arcu fringilla.
          </p>
          <p className="mb-6">
            Aliquam sagittis nisi vel est luctus, id condimentum arcu feugiat. Nam rhoncus felis a nulla consectetur,
            sit amet facilisis libero gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Curabitur interdum libero vel lectus blandit, quis porttitor orci blandit. Fusce
            eget turpis in enim varius consequat.
          </p>
          <button className="bg-green-900 text-white py-3 px-6 rounded-full">
            Reservar
          </button>
        </div>
      </div>
    </section>
  );
};


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center">
          <li className="mx-3">
            <a href="#about" className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm">
              Sobre Nós
            </a>
          </li>
          <li className="mx-3">
            <a href="#menu" className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm">
              Menu
            </a>
          </li>
          <li className="mx-3">
            <a href="#reservations" className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm">
              Reservas
            </a>
          </li>
          <li className="mx-3">
            <a href="#contact" className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm">
              Contato
            </a>
          </li>
        </ul>
        <div className="text-center mt-4">
          <span className="text-gray-600">© 2023 Restaurante Nome. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
};


interface MenuItemProps {
  name: string;
  description: string;
  image: string;
  category: string;
}

interface MenuSectionProps {
  menuItems: MenuItemProps[];
  onViewFullMenu: () => void;
}




const dishes = [
  {
    id: 1,
    category: 'Entradas',
    name: 'Salada Caesar',
    description: 'Alface romana, croutons, queijo parmesão e molho Caesar.',
    imageSrc: 'https://via.placeholder.com/300x200',
    imageAlt: 'Salada Caesar'
  },
  {
    id: 2,
    category: 'Entradas',
    name: 'Carpaccio de Carne',
    description: 'Finas fatias de carne crua, molho de mostarda e mel, queijo parmesão e rúcula.',
    imageSrc: 'https://via.placeholder.com/300x200',
    imageAlt: 'Carpaccio de Carne'
  },
  {
    id: 3,
    category: 'Pratos Principais',
    name: 'Ravióli de Queijo',
    description: 'Massa fresca recheada com queijo ricota e espinafre, servida com molho de tomate.',
    imageSrc: 'https://via.placeholder.com/300x200',
    imageAlt: 'Ravióli de Queijo'
  },
  {
    id: 4,
    category: 'Pratos Principais',
    name: 'Salmão Grelhado',
    description: 'Salmão grelhado com legumes na manteiga e ervas.',
    imageSrc: 'https://via.placeholder.com/300x200',
    imageAlt: 'Salmão Grelhado'
  },
  {
    id: 5,
    category: 'Sobremesas',
    name: 'Cheesecake de Frutas Vermelhas',
    description: 'Cheesecake com cobertura de frutas vermelhas.',
    imageSrc: 'https://via.placeholder.com/300x200',
    imageAlt: 'Cheesecake de Frutas Vermelhas'
  },
  {
    id: 6,
    category: 'Sobremesas',
    name: 'Torta de Limão',
    description: 'Torta de limão com merengue.',
    imageSrc: 'https://via.placeholder.com/300x200',
    imageAlt: 'Torta de Limão'
  }
];

const MenuSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Nosso Menu
        </h2>
        <div className="mt-12">
          {dishes.map((dish) => (
            <Dish key={dish.id} description={dish.description}
            name={dish.name}
            image='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggcx1H_iT4vTBkXJLj-T__RUoLFLe3K-vsJ5ZG6nLq1ZDCHfrs8M40wHFSndP5Zhvcx4b6_QwukYkDUzE1nAlQlR8mmmgpRH1iFrO5IDJV0urT5z_hRWUU0Pi6o3979x2cdJQJ-7iPJ2WIDeOhU6egT8-IbkzLRsDxUlWqpFSJkR4Nrn8ZT7u3b1Mk/s2000/receita-de-sushi.jpg' />
          ))}
          <div className="mt-8">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-700 md:w-auto"
            >
              Ver Menu Completo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


interface DishProps {
  image: string;
  name: string;
  description: string;
}

function Dish ({ image, name, description }:DishProps){
  return (
    <div className="flex flex-col md:flex-row md:items-center mb-8">
      <div className="w-full md:w-1/3">
        <img src={image} alt={name} className="rounded-lg shadow-md mb-4 md:mb-0" />
      </div>
      <div className="w-full md:w-2/3 md:pl-8">
        <h3 className="text-2xl font-medium mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
};


// import { Container } from './styles';

const landingpage: React.FC = () => {
  return (<>
  <Header></Header>
  <MenuSection></MenuSection>
  <Footer></Footer>
  
  </>)
}

export default landingpage;