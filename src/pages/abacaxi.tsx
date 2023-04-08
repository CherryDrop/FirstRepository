import React from 'react';

const fruits = [
  { name: 'Banana', description: 'Uma fruta rica em potássio.', image: 'https://picsum.photos/200/300' },
  { name: 'Maçã', description: 'Uma fruta suculenta e doce.', image: 'https://picsum.photos/200/300' },
  { name: 'Laranja', description: 'Uma fruta cítrica e refrescante.', image: 'https://picsum.photos/200/300' },
  { name: 'Abacaxi', description: 'Uma fruta tropical e doce.', image: 'https://picsum.photos/200/300' },
{name: 'Morango', description: 'melhor fruta', image: 'https://conteudo.imguol.com.br/c/entretenimento/78/2018/02/28/morango-1519823853148_v2_4x3.jpg'}
];

const FruitList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {fruits.map((fruit, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full h-48 object-cover" src={fruit.image} alt={fruit.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{fruit.name}</div>
            <p className="text-gray-700 text-base">{fruit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FruitList;
