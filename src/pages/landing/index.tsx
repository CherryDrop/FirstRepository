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

const PokemonCards: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div className="bg-white shadow-md rounded-md p-4">
        <img
          className="mx-auto h-32"
          src="pokemon1.png"
          alt="Pokemon 1"
        />
        <h2 className="text-xl text-center font-semibold">Pokemon 1</h2>
        <p className="text-gray-500 text-center">Type: Grass</p>
      </div>
      <div className="bg-white shadow-md rounded-md p-4">
        <img
          className="mx-auto h-32"
          src="pokemon2.png"
          alt="Pokemon 2"
        />
        <h2 className="text-xl text-center font-semibold">Pokemon 2</h2>
        <p className="text-gray-500 text-center">Type: Fire</p>
      </div>
      <div className="bg-white shadow-md rounded-md p-4">
        <img
          className="mx-auto h-32"
          src="pokemon3.png"
          alt="Pokemon 3"
        />
        <h2 className="text-xl text-center font-semibold">Pokemon 3</h2>
        <p className="text-gray-500 text-center">Type: Water</p>
      </div>
      <div className="bg-white shadow-md rounded-md p-4">
        <img
          className="mx-auto h-32"
          src="pokemon4.png"
          alt="Pokemon 4"
        />
        <h2 className="text-xl text-center font-semibold">Pokemon 4</h2>
        <p className="text-gray-500 text-center">Type: Electric</p>
      </div>
    </div>
  );
}

interface Testimonial {
  id: number;
  name: string;
  photo: string;
  quote: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}
interface Instructor {
  id: number;
  name: string;
  photo: string;
  credentials: string;
  experience: string;
  specializations: string[];
}

interface InstructorsSectionProps {
  instructors: Instructor[];
}
const testimonials = [
  {
    id: 1,
    name: 'João Silva',
    photo: 'https://media.discordapp.net/attachments/327238569569550338/1112839320726945863/image.png?width=273&height=257',
    quote: 'Ótimo curso! Aprendi muito e agora estou preparado para entrar no mercado de trabalho.',
  },
  {
    id: 2,
    name: 'Maria Souza',
    photo: 'https://media.discordapp.net/attachments/327238569569550338/1112839320726945863/image.png?width=273&height=257',
    quote: 'Excelente experiência de aprendizado. Recomendo a todos os interessados em tecnologia.',
  },
  {
    id: 3,
    name: 'Pedro Santos',
    photo: 'https://media.discordapp.net/attachments/327238569569550338/1112839320726945863/image.png?width=273&height=257',
    quote: 'Os professores são muito qualificados e o conteúdo é bastante prático e relevante.',
  },
  {
    id: 4,
    name: 'Ana Oliveira',
    photo: 'https://media.discordapp.net/attachments/327238569569550338/1112839320726945863/image.png?width=273&height=257',
    quote: 'O curso superou minhas expectativas. Estou muito satisfeita com o que aprendi.',
  },
  {
    id: 5,
    name: 'Lucas Mendes',
    photo: 'https://media.discordapp.net/attachments/327238569569550338/1112839320726945863/image.png?width=273&height=257',
    quote: 'Agradeço pela oportunidade de participar desse curso. Foi um investimento que valeu a pena.',
  },
];

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-6">Depoimentos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white shadow-md rounded-md p-6">
              <div className="flex items-center mb-4">
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  src={testimonial.photo}
                  alt={testimonial.name}
                />
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-700 text-center">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const instructorsMock: Instructor[] = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://sites.google.com/a/aebenfica.org/geral/_/rsrc/1608494986430/projetos/pintos/ovo-com-pinto-red.jpg",
    credentials: "Bacharel em Ciência da Computação",
    experience: "Atua como desenvolvedor web há 10 anos e ministra cursos de programação há 5 anos.",
    specializations: ["Desenvolvimento Web", "JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "https://sites.google.com/a/aebenfica.org/geral/_/rsrc/1608494986430/projetos/pintos/ovo-com-pinto-red.jpg",
    credentials: "Mestre em Engenharia de Software",
    experience: "Possui vasta experiência no desenvolvimento de aplicativos móveis e é especialista em UX/UI.",
    specializations: ["Desenvolvimento Mobile", "Flutter", "UI/UX Design"],
  },
  {
    id: 3,
    name: "David Johnson",
    photo: "https://sites.google.com/a/aebenfica.org/geral/_/rsrc/1608494986430/projetos/pintos/ovo-com-pinto-red.jpg",
    credentials: "Doutor em Ciência da Computação",
    experience: "Pesquisador na área de Inteligência Artificial e ministra palestras sobre Machine Learning.",
    specializations: ["Inteligência Artificial", "Machine Learning", "Python"],
  },
  {
    id: 4,
    name: "Emily Davis",
    photo: "https://sites.google.com/a/aebenfica.org/geral/_/rsrc/1608494986430/projetos/pintos/ovo-com-pinto-red.jpg",
    credentials: "Especialista em Cibersegurança",
    experience: "Trabalhou em importantes empresas na área de segurança cibernética e é certificada em CISSP.",
    specializations: ["Cibersegurança", "Testes de Penetração", "Segurança de Redes"],
  },
  {
    id: 5,
    name: "Michael Wilson",
    photo: "https://sites.google.com/a/aebenfica.org/geral/_/rsrc/1608494986430/projetos/pintos/ovo-com-pinto-red.jpg",
    credentials: "Engenheiro de Dados",
    experience: "Atua na área de Big Data e possui ampla experiência em projetos de análise de dados.",
    specializations: ["Big Data", "Apache Spark", "SQL", "Python"],
  },
];
const InstructorsSection: React.FC<InstructorsSectionProps> = ({ instructors }) => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-6">Nossos Instrutores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="bg-white shadow-md rounded-md p-6">
              <img
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                src={instructor.photo}
                alt={instructor.name}
              />
              <h3 className="text-lg font-semibold mb-2">{instructor.name}</h3>
              <p className="text-gray-500 mb-2">{instructor.credentials}</p>
              <p className="text-gray-700 mb-4">{instructor.experience}</p>
              <div>
                <h4 className="text-md font-semibold mb-1">Especializações:</h4>
                <ul className="list-disc list-inside">
                  {instructor.specializations.map((specialization) => (
                    <li key={specialization} className="text-gray-700">{specialization}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
interface Course {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  prerequisites: string[];
  duration: string;
  testimonials: string[];
}

interface CoursesSectionProps {
  courses: Course[];
}
const coursesMock: Course[] = [
  {
    id: 1,
    title: "Introdução ao Desenvolvimento Web",
    description: "Aprenda os conceitos básicos de desenvolvimento web e construa suas primeiras páginas usando HTML, CSS e JavaScript.",
    difficulty: "Iniciante",
    prerequisites: ["Nenhum"],
    duration: "4 semanas",
    testimonials: [
      "O curso me deu uma base sólida para começar a trabalhar como desenvolvedor web. Recomendo!",
      "A abordagem didática do curso facilitou meu aprendizado e me ajudou a progredir rapidamente.",
    ],
  },
  {
    id: 2,
    title: "Desenvolvimento de Aplicativos Móveis com React Native",
    description: "Aprenda a criar aplicativos móveis multiplataforma usando o framework React Native e expanda suas habilidades como desenvolvedor.",
    difficulty: "Intermediário",
    prerequisites: ["Conhecimento básico de JavaScript", "Familiaridade com React"],
    duration: "6 semanas",
    testimonials: [
      "Esse curso me ajudou a dar um salto na minha carreira como desenvolvedor de aplicativos móveis. Muito bom!",
      "Os exemplos práticos e os projetos do curso me deram confiança para construir meus próprios aplicativos.",
    ],
  },
  {
    id: 3,
    title: "Machine Learning para Iniciantes",
    description: "Descubra o mundo da Inteligência Artificial e aprenda a aplicar algoritmos de Machine Learning em problemas do mundo real.",
    difficulty: "Avançado",
    prerequisites: ["Conhecimento de programação", "Familiaridade com Python"],
    duration: "8 semanas",
    testimonials: [
      "Esse curso abriu meus olhos para o potencial do Machine Learning. Aprendi muito e agora posso aplicar esses conhecimentos em projetos pessoais.",
      "O conteúdo do curso é bastante abrangente e os exercícios práticos são desafiadores. Recomendo para quem quer se aprofundar em Machine Learning.",
    ],
  },
];
const CoursesSection: React.FC<CoursesSectionProps> = ({ courses }) => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-6">Nossos Cursos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white shadow-md rounded-md p-6">
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <div>
                <h4 className="text-md font-semibold mb-1">Benefícios:</h4>
                <ul className="list-disc list-inside">
                  <li className="text-gray-700">Aprenda de forma clara e concisa</li>
                  <li className="text-gray-700">Desenvolva habilidades práticas</li>
                  <li className="text-gray-700">Foco nos tópicos principais</li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-1">Tópicos principais:</h4>
                <ul className="list-disc list-inside">
                  <li className="text-gray-700">Tópico 1</li>
                  <li className="text-gray-700">Tópico 2</li>
                  <li className="text-gray-700">Tópico 3</li>
                </ul>
              </div>
              <p className="text-gray-700 mt-4">Nível de dificuldade: {course.difficulty}</p>
              <p className="text-gray-700">Requisitos prévios: {course.prerequisites.join(', ')}</p>
              <p className="text-gray-700">Duração estimada: {course.duration}</p>
              <div className="mt-4">
                <h4 className="text-md font-semibold mb-1">Depoimentos:</h4>
                {course.testimonials.map((testimonial, index) => (
                  <p key={index} className="text-gray-700 italic">{testimonial}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const About = ({description}) => {
  return (
    <div className="m-6 p-4 bg-zinc-light dark:bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white"><i className="fa fa-info-circle"></i> Sobre a Empresa</h3>
      <p className="mt-2 text-xl text-gray-800 dark:text-white">{description}</p>
    </div>
  )
}

const PokemonComponent = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-sm mx-2">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            className="w-full h-40 object-cover"
            src="https://via.placeholder.com/300"
            alt="Pokemon"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Pokemon 1</h2>
            <p className="text-gray-600">Type: Grass</p>
            <p className="text-gray-600">HP: 100</p>
          </div>
        </div>
      </div>

      <div className="max-w-sm mx-2">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            className="w-full h-40 object-cover"
            src="https://via.placeholder.com/300"
            alt="Pokemon"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Pokemon 2</h2>
            <p className="text-gray-600">Type: Fire</p>
            <p className="text-gray-600">HP: 80</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-white shadow">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-500">Your Logo</h1>
          <ul className="flex space-x-4">
            <li className="text-gray-600 hover:text-blue-500">Home</li>
            <li className="text-gray-600 hover:text-blue-500">About</li>
            <li className="text-gray-600 hover:text-blue-500">Services</li>
            <li className="text-gray-600 hover:text-blue-500">Contact</li>
          </ul>
        </nav>
      </header>
      <Header></Header>
      <PokemonCards></PokemonCards>
      <TestimonialsSection testimonials={testimonials}></TestimonialsSection>
      <InstructorsSection instructors={instructorsMock}></InstructorsSection>
      <CoursesSection courses={coursesMock}></CoursesSection>

      <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.midjourney.com/7b61c62b-d782-442e-9ebc-fe34154dfe99/0_2.png')" }}>
        <div className="container mx-auto py-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Experience the Best</h2>
          <p className="text-white text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
      
      <main className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-12">
          <div className="max-w-md space-y-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to Our Company</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vestibulum quam sed quam auctor, in placerat mi ultricies.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Get Started
            </button>
          </div>

          <div className="max-w-md space-y-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vestibulum quam sed quam auctor, in placerat mi ultricies.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Our Services
            </button>
          </div>
        </div>
      </main>

      

      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">Â© 2023 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default LandingPage