import React from 'react';

const Dashboard: React.FC = () => {
    return (
    <div className="Container Geral flex flex-col items-center">

      
      <div className="Caixa de Texto (Olá) bg-green-300 h-[300px] w-[20rem]
       flex justify-center items-center
        text-white text-4xl font-bold
      rounded-lg shadow-md hover:shadow-lg hover:ring-2 hover:ring-offset-2 hover:ring-indigo-500 text-black">
        Olá
      </div>


      
      <div className="Card do Morango w-full max-w-md mt-8
        rounded-lg shadow-lg overflow-hidden hover:bg-black ">
        <img
          className="w-full h-56 object-cover object-center hover:opacity-50"
          src="https://conteudo.imguol.com.br/c/entretenimento/78/2018/02/28/morango-1519823853148_v2_4x3.jpg"
          alt="Imagem de exemplo"
        />
        <div className="Card do Morango (Descrição) px-6 py-4">
          <div className="Nome do Card do Morango font-bold text-xl mb-2">Nome da Imagem</div>
        <img className="Texte de Imagem da Banana"src="https://www.infoescola.com/wp-content/uploads/2010/04/banana_600797891.jpg" alt="Imagem da Bananinha" />
          <p className="Texto do Card do Morango text-gray-700 text-base">
            Descrição da imagem. Morango é bom!.
          </p>
        </div>
      </div>

      <div className="Bloco de Dados w-full max-w-md mt-8 bg-white rounded-lg shadow-md">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-4">Dados Estatísticos</div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="text-gray-700 font-bold text-lg mb-2">Visitantes Únicos</div>
              <div className="text-gray-700 text-3xl">2,345</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="text-gray-700 font-bold text-lg mb-2">Páginas Visitadas</div>
              <div className="text-gray-700 text-3xl">5,678</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="text-gray-700 font-bold text-lg mb-2">Taxa de Rejeição</div>
              <div className="text-gray-700 text-3xl">32%</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="text-gray-700 font-bold text-lg mb-2">Tempo no Site</div>
              <div className="text-gray-700 text-3xl">4:56</div>
            </div>
          </div>
        </div>
      </div>


      <div className="Card do Macaco flex-col w-full max-w-md mt-8 bg-white-500 flex items-center justify-center">
          <img className="rounded-full overflow-hidden"
          src="https://static.todamateria.com.br/upload/57/34/5734dd91776b4-mico-leao-dourado.jpg" 
          alt="Imagem do MACACO"/>
        <div>Macaco</div>
      </div>

    </div>
  );
};

export default Dashboard;
