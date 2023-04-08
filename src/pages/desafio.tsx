import React from 'react';

const Desafio: React.FC = () => {
  return (
    <>
    <Navigation></Navigation>  
    <CaixaComImagem></CaixaComImagem>
      <h1 className="text-center py-8 text-[1.40rem]">Designer, Frontend <br /> Developer & Mentor</h1>
      <h2 className="text-center py-4 text-black-500 text-sm text-[1.00rem] font-sans p-2">I design and code beautifully simple things,<br/> and I love what I do.</h2>
    <img className='w-32 mx-auto rounded-full' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d65b5b43-ba00-4e33-8490-41ee63b33721/dembd8x-ddc0b50e-c4be-44b6-9dcb-34a33f0726a9.png/v1/fill/w_894,h_894,strp/trickstar_narkissus_by_mrcat95_dembd8x-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcL2Q2NWI1YjQzLWJhMDAtNGUzMy04NDkwLTQxZWU2M2IzMzcyMVwvZGVtYmQ4eC1kZGMwYjUwZS1jNGJlLTQ0YjYtOWRjYi0zNGEzM2YwNzI2YTkucG5nIiwid2lkdGgiOiI8PTEyMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ykbMNnv0y1LjLEq52kwwCLB3I0dlVO4VJSxfggKj3Z8" 
    alt="Narkissus" />
    <img src="https://img.freepik.com/free-vector/computer-monitor-graphic-animator-creating-video-game-modeling-motion-processing-video-file-using-professional-editor-vector-illustration-graphic-design-art-designer-workplace-concept_74855-13038.jpg" 
    alt="computadores" />
    <h1 className='bg-blue-500 text-center text-white text-[1.42rem]'>Hi, I’m Matt. Nice to meet you.</h1>
    <h1 className='bg-blue-500 text-center text-white text-[1.15rem] font-sans p-4'>Since beginning my journey as a freelance designer over 11 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time</h1>
    <CixaAzul></CixaAzul>
    </>
  );
}




// import { Container } from './styles';

const Navigation: React.FC = () => {
  return <nav className="bg-blue-500 py-2">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between">
    <div className="flex items-center">
      <img src="https://cdn-icons-png.flaticon.com/512/126/126975.png" alt="icone morango" className="w-12 mr-2" />
      <a href="#" className="text-white font-bold text-lg">My Website</a>
    </div>
    <div className="flex">
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
    </div>
  </div>
</nav>
}


// import { Container } from './styles';

const CaixaComImagem: React.FC = () => {
  return <h1 className='text-[1.50rem] h-[10rem] w-[200rem] bg-green-500' >Oi</h1>
}

export default Desafio;


// import { Container } from './styles';

const CixaAzul: React.FC = () => {
  return <h1 className='text-[5rem] w-[20rem] h-[20rem] bg-blue-500'>Tchau</h1>
}
