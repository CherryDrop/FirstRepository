import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-zinc bg-opacity-75 bg-center bg-cover h-96 p-10 flex flex-col justify-center items-center text-center" style={{backgroundImage: 'url(/images/Background_Landing_Page/BG06.png)'}}>
      <h1 className="text-5xl font-bold text-white mb-4"><i className="fa fa-graduation-cap"></i> Aprenda, Cresça, Realize: Transforme sua vida com nossos cursos online!</h1>
      <h2 className="text-3xl text-white">Acesso a cursos exclusivos ministrados por <span className="text-zinc-light">especialistas do setor</span>.</h2>
    </div>
  )
}

const CourseCard = ({src, description}) => {
  return (
    <div className="flex flex-col items-center bg-zinc-light dark:bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
      <Image className="h-64 w-full object-cover mb-2 rounded-lg shadow-purple" src={src} alt="Course Image" width={500} height={500} />
      <p className="mt-2 text-xl text-gray-800 dark:text-white">{description}</p>
    </div>
  )
}

const TestimonialCard = ({src, testimonial}) => {
  return (
    <div className="flex items-center bg-zinc-light dark:bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
      <div className="w-1/3">
        <Image className="rounded-full shadow-purple" src={src} alt="Testimonial Image" width={100} height={100} />
      </div>
      <p className="mt-2 text-xl text-gray-800 dark:text-white ml-4"><i className="fa fa-quote-left"></i> {testimonial}</p>
    </div>
  )
}

const InstructorCard = ({src, description}) => {
  return (
    <div className="flex bg-zinc-light dark:bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
      <div className="w-1/2">
        <Image className="h-full object-cover rounded-l-lg shadow-purple" src={src} alt="Instructor Image" width={200} height={200} />
      </div>
      <p className="mt-2 text-xl text-gray-800 dark:text-white ml-4">{description}</p>
    </div>
  )
}

const SignUp = () => {
  return (
    <div className="flex justify-center mb-4">
      <button className="bg-zinc hover:bg-zinc-dark text-white px-4 py-2 rounded-md shadow-lg transition-all duration-200 transform hover:scale-110"><i className="fa fa-envelope"></i> Inscreva-se agora</button>
    </div>
  )
}

const About = ({description}) => {
  return (
    <div className="m-6 p-4 bg-zinc-light dark:bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white"><i className="fa fa-info-circle"></i> Sobre a Empresa</h3>
      <p className="mt-2 text-xl text-gray-800 dark:text-white">{description}</p>
    </div>
  )
}

const Landing = () => {
  return (
    <div className="dark:bg-black dark:text-white min-h-screen" >
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-6">
        <h3 className="col-span-full text-3xl font-bold mb-2 text-white"><i className="fa fa-star"></i> Cursos em Destaque</h3>
        {[...Array(5)].map((_, i) => <CourseCard src={`/images/Background_Landing_Page/BG0${i+1}.png`} description={`Descrição do Curso ${i+1}`} key={i} />)}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-6">
        <h3 className="col-span-full text-3xl font-bold mb-2 text-white"><i className="fa fa-comments"></i> Depoimentos de Alunos</h3>
        {[...Array(5)].map((_, i) => <TestimonialCard src={`/images/Alunos_Rosto/Aluno_Rosto0${i+1}.png`} testimonial={`Depoimento do Aluno ${i+1}`} key={i} />)}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-6">
        <h3 className="col-span-full text-3xl font-bold mb-2 text-white"><i className="fa fa-chalkboard-teacher"></i> Nossos Instrutores</h3>
        {[...Array(5)].map((_, i) => <InstructorCard src={`/images/Professor_Rosto/Professores_Rosto0${i+1}.png`} description={`Descrição do Instrutor ${i+1}`} key={i} />)}
      </div>

      <SignUp />

      <About description="Nós somos uma empresa dedicada a trazer a melhor experiência de aprendizado online. Com uma variedade de cursos ministrados por profissionais experientes e conhecidos na área, você pode ter certeza de que está recebendo a melhor educação possível." />
    </div>
  );
};

export default Landing;