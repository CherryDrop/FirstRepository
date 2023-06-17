import React, { useEffect } from "react";
import Image from "next/image";
import styles from"./styles.module.css"

const Navigation: React.FC = () => {
  return (
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
  );
};
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">
          Â© 2023 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
const Header = () => {
  return (
    <div
      className="relative bg-zinc bg-opacity-75 bg-center bg-cover h-[30rem] p-10 flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage: "url(/images/Background_Landing_Page/BG06.png)",
      }}
    >
      <h1 className="text-5xl font-bold text-white mb-4 animate-fadeInDown">
        <i className="fa fa-graduation-cap"></i> Aprenda, Cresça, Realize:
        Transforme sua vida com nossos cursos online!
      </h1>
      <h2 className="text-3xl text-white animate-fadeInUp">
        Acesso a cursos exclusivos ministrados por{" "}
        <span className="text-zinc-light">especialistas do setor</span>.
      </h2>
      <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-zinc via-transparent to-transparent"></div>
    </div>
  );
};
const BannerFinal: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.midjourney.com/7b61c62b-d782-442e-9ebc-fe34154dfe99/0_2.png')",
      }}
    >
      <div className="container mx-auto py-16 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Experience the Best
        </h2>
        <p className="text-white text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};
const PokemonCards: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div className="bg-white shadow-md rounded-md p-4 hover:scale-105">
        <img className="mx-auto h-32" src="pokemon1.png" alt="Pokemon 1" />
        <h2 className="text-xl text-center font-semibold">Pokemon 1</h2>
        <p className="text-gray-500 text-center">Type: Grass</p>
      </div>
      <div className="bg-white shadow-md rounded-md p-4 hover:scale-105">
        <img className="mx-auto h-32" src="pokemon2.png" alt="Pokemon 2" />
        <h2 className="text-xl text-center font-semibold">Pokemon 2</h2>
        <p className="text-gray-500 text-center">Type: Fire</p>
      </div>
      <div className="bg-white shadow-md rounded-md p-4 hover:scale-105">
        <img className="mx-auto h-32" src="pokemon3.png" alt="Pokemon 3" />
        <h2 className="text-xl text-center font-semibold">Pokemon 3</h2>
        <p className="text-gray-500 text-center">Type: Water</p>
      </div>
      <div className="bg-white shadow-md rounded-md p-4 hover:scale-105">
        <img className="mx-auto h-32" src="pokemon4.png" alt="Pokemon 4" />
        <h2 className="text-xl text-center font-semibold">Pokemon 4</h2>
        <p className="text-gray-500 text-center">Type: Electric</p>
      </div>
    </div>
  );
};


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
    name: "Luiza Dantas",
    photo: "/images/Alunos_Rosto/Aluno_Rosto01.png",
    quote:
      "Ótimo curso! Aprendi muito e agora estou preparado para entrar no mercado de trabalho.",
  },
  {
    id: 2,
    name: "Maria Souza",
    photo: "/images/Alunos_Rosto/Aluno_Rosto02.png",
    quote:
      "Excelente experiência de aprendizado. Recomendo a todos os interessados em tecnologia.",
  },
  {
    id: 3,
    name: "Cris Santos",
    photo: "/images/Alunos_Rosto/Aluno_Rosto03.png",
    quote:
      "Os professores são muito qualificados e o conteúdo é bastante prático e relevante.",
  },
  {
    id: 4,
    name: "Ana Oliveira",
    photo: "/images/Alunos_Rosto/Aluno_Rosto04.png",
    quote:
      "O curso superou minhas expectativas. Estou muito satisfeita com o que aprendi.",
  },
  {
    id: 5,
    name: "Lucas Mendes",
    photo: "/images/Alunos_Rosto/Aluno_Rosto05.png",
    quote:
      "Agradeço pela oportunidade de participar desse curso. Foi um investimento que valeu a pena.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {testimonials.map((testimonial) => (
        <div
          className="bg-white shadow-md rounded-md p-4 hover:shadow-lg"
          key={testimonial.id}
        >
          <img
            className="mx-auto h-32"
            src={testimonial.photo}
            alt={testimonial.name}
          />
          <h2 className="text-xl text-center font-semibold">{testimonial.name}</h2>
          <p className="text-gray-500 text-center">{testimonial.quote}</p>
        </div>
      ))}
    </div>
  );
};

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
}) => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-6">Depoimentos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-md rounded-md p-6 hover:shadow-lg"
            >
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
};
const instructorsMock: Instructor[] = [
  {
    id: 1,
    name: "John Doe",
    photo:
      "/images/Professor_Rosto/Professores_Rosto01.png",
    credentials: "Bacharel em Ciência da Computação",
    experience:
      "Atua como desenvolvedor web há 10 anos e ministra cursos de programação há 5 anos.",
    specializations: ["Desenvolvimento Web", "JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    name: "Jaden Smith",
    photo:
      "/images/Professor_Rosto/Professores_Rosto02.png",
    credentials: "Mestre em Engenharia de Software",
    experience:
      "Possui vasta experiência no desenvolvimento de aplicativos móveis e é especialista em UX/UI.",
    specializations: ["Desenvolvimento Mobile", "Flutter", "UI/UX Design"],
  },
  {
    id: 3,
    name: "David Johnson",
    photo:
      "/images/Professor_Rosto/Professores_Rosto03.png",
    credentials: "Doutor em Ciência da Computação",
    experience:
      "Pesquisador na área de Inteligência Artificial e ministra palestras sobre Machine Learning.",
    specializations: ["Inteligência Artificial", "Machine Learning", "Python"],
  },
  {
    id: 4,
    name: "Emily Davis",
    photo:
      "/images/Professor_Rosto/Professores_Rosto04.png",
    credentials: "Especialista em Cibersegurança",
    experience:
      "Trabalhou em importantes empresas na área de segurança cibernética e é certificada em CISSP.",
    specializations: [
      "Cibersegurança",
      "Testes de Penetração",
      "Segurança de Redes",
    ],
  },
  {
    id: 5,
    name: "Michael Wilson",
    photo:
      "/images/Professor_Rosto/Professores_Rosto05.png",
    credentials: "Engenheiro de Dados",
    experience:
      "Atua na área de Big Data e possui ampla experiência em projetos de análise de dados.",
    specializations: ["Big Data", "Apache Spark", "SQL", "Python"],
  },
];
const InstructorsSection: React.FC<InstructorsSectionProps> = ({
  instructors,
}) => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-6">
          Nossos Instrutores
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white shadow-md rounded-md p-6 hover:shadow-lg"
            >
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
                    <li key={specialization} className="text-gray-700">
                      {specialization}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
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
    description:
      "Aprenda os conceitos básicos de desenvolvimento web e construa suas primeiras páginas usando HTML, CSS e JavaScript.",
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
    description:
      "Aprenda a criar aplicativos móveis multiplataforma usando o framework React Native e expanda suas habilidades como desenvolvedor.",
    difficulty: "Intermediário",
    prerequisites: [
      "Conhecimento básico de JavaScript",
      "Familiaridade com React",
    ],
    duration: "6 semanas",
    testimonials: [
      "Esse curso me ajudou a dar um salto na minha carreira como desenvolvedor de aplicativos móveis. Muito bom!",
      "Os exemplos práticos e os projetos do curso me deram confiança para construir meus próprios aplicativos.",
    ],
  },
  {
    id: 3,
    title: "Machine Learning para Iniciantes",
    description:
      "Descubra o mundo da Inteligência Artificial e aprenda a aplicar algoritmos de Machine Learning em problemas do mundo real.",
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
                  <li className="text-gray-700">
                    Aprenda de forma clara e concisa
                  </li>
                  <li className="text-gray-700">
                    Desenvolva habilidades práticas
                  </li>
                  <li className="text-gray-700">Foco nos tópicos principais</li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-1">
                  Tópicos principais:
                </h4>
                <ul className="list-disc list-inside">
                  <li className="text-gray-700">Tópico 1</li>
                  <li className="text-gray-700">Tópico 2</li>
                  <li className="text-gray-700">Tópico 3</li>
                </ul>
              </div>
              <p className="text-gray-700 mt-4">
                Nível de dificuldade: {course.difficulty}
              </p>
              <p className="text-gray-700">
                Requisitos prévios: {course.prerequisites.join(", ")}
              </p>
              <p className="text-gray-700">
                Duração estimada: {course.duration}
              </p>
              <div className="mt-4">
                <h4 className="text-md font-semibold mb-1">Depoimentos:</h4>
                {course.testimonials.map((testimonial, index) => (
                  <p key={index} className="text-gray-700 italic">
                    {testimonial}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const FaqSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl text-center font-bold mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-700 text-center">
            Aqui estão algumas perguntas comuns que recebemos dos nossos alunos.
            Se você não encontrar a resposta que procura, entre em contato com
            nossa equipe de suporte.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-lg font-semibold mb-2">
              Qual é a duração do curso?
            </h3>
            <p className="text-gray-700 mb-4">
              O curso tem uma duração de 8 semanas, com aulas semanais e
              atividades práticas.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-lg font-semibold mb-2">
              Vocês oferecem suporte ao aluno?
            </h3>
            <p className="text-gray-700 mb-4">
              Sim! Nossa equipe de suporte está disponível para ajudar os alunos
              com quaisquer dúvidas ou problemas técnicos que possam surgir
              durante o curso.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-lg font-semibold mb-2">
              Posso compartilhar meu progresso nas redes sociais?
            </h3>
            <p className="text-gray-700 mb-4">
              Com certeza! Você pode compartilhar seu progresso e conquistas nas
              redes sociais para inspirar outros e mostrar seu crescimento como
              profissional de tecnologia.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-3xl text-center font-bold mb-6">
            Compartilhe nas Redes Sociais
          </h2>
          <p className="text-gray-700 text-center mb-4">
            Ajude a espalhar o conhecimento e compartilhe seu entusiasmo pelo
            curso nas redes sociais.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
              Compartilhar no Facebook
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded">
              Compartilhar no Twitter
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded">
              Compartilhar no Instagram
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl text-center font-bold mb-6">
            Sobre a Empresa
          </h2>
          <p className="text-gray-700 text-center">
            Nossa empresa tem um compromisso com a excelência e busca
            constantemente fornecer soluções tecnológicas inovadoras. Conheça
            mais sobre nossa história, valores e equipe.
          </p>
        </div>
        <div className="flex flex-col items-center mb-8">
          <h3 className="text-2xl font-semibold mb-4">História</h3>
          <p className="text-gray-700 text-center">
            Nossa empresa foi fundada em 2010 por um grupo de profissionais
            apaixonados por tecnologia. Ao longo dos anos, nos consolidamos como
            líderes no mercado, oferecendo soluções de ponta para nossos
            clientes.
          </p>
        </div>
        <div className="flex flex-col items-center mb-8">
          <h3 className="text-2xl font-semibold mb-4">Valores</h3>
          <ul className="text-gray-700 text-center list-disc list-inside">
            <li>
              Inovação: Buscamos constantemente novas ideias e soluções para
              superar as expectativas dos nossos clientes.
            </li>
            <li>
              Qualidade: Nosso compromisso é entregar produtos e serviços de
              alta qualidade.
            </li>
            <li>
              Transparência: Valorizamos a honestidade e a clareza em todas as
              nossas interações.
            </li>
            <li>
              Colaboração: Acreditamos no poder do trabalho em equipe e na troca
              de conhecimentos.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center mb-8">
          <h3 className="text-2xl font-semibold mb-4">Missão</h3>
          <p className="text-gray-700 text-center">
            Nossa missão é fornecer soluções tecnológicas inovadoras que
            impulsionem o crescimento e o sucesso de nossos clientes,
            contribuindo para o avanço da sociedade como um todo.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4">Equipe</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-md p-6">
              <h4 className="text-lg font-semibold mb-2">John Doe</h4>
              <p className="text-gray-700 mb-4">
                Co-fundador, Diretor Executivo
              </p>
              <p className="text-gray-700">
                Com mais de 15 anos de experiência na indústria de tecnologia,
                John lidera nossa equipe com paixão e visão estratégica. Sob sua
                liderança, alcançamos importantes conquistas e parcerias
                estratégicas.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6">
              <h4 className="text-lg font-semibold mb-2">Jane Smith</h4>
              <p className="text-gray-700 mb-4">Gerente de Desenvolvimento</p>
              <p className="text-gray-700">
                Jane possui ampla experiência no desenvolvimento de software e
                lidera nossa equipe de desenvolvedores com excelência técnica.
                Sua dedicação e expertise têm sido fundamentais para o sucesso
                de nossos projetos.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6">
              <h4 className="text-lg font-semibold mb-2">Mark Johnson</h4>
              <p className="text-gray-700 mb-4">Especialista em Segurança</p>
              <p className="text-gray-700">
                Com especialização em segurança cibernética, Mark garante a
                proteção dos dados de nossos clientes e a integridade de nossos
                sistemas. Sua experiência é essencial para enfrentar os desafios
                de segurança atuais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl text-center font-bold mb-6">
            Benefícios dos Nossos Cursos
          </h2>
          <p className="text-gray-700 text-center">
            Nossos cursos foram projetados para oferecer a melhor experiência de
            aprendizado e fornecer os seguintes benefícios aos nossos alunos:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-md p-6 flex">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold mb-2">
                Flexibilidade de Horário
              </h3>
              <p className="text-gray-700 mb-4">
                Nossos cursos são totalmente online, permitindo que você estude
                no seu próprio ritmo e de acordo com sua disponibilidade de
                horário.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 flex">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold mb-2">
                Acesso a Especialistas do Setor
              </h3>
              <p className="text-gray-700 mb-4">
                Nossos cursos são ministrados por instrutores experientes e
                especialistas do setor, fornecendo conhecimentos práticos e
                insights valiosos.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 flex">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold mb-2">
                Certificado de Conclusão
              </h3>
              <p className="text-gray-700 mb-4">
                Ao concluir nossos cursos, você receberá um certificado
                reconhecido, que pode ser adicionado ao seu currículo e
                compartilhado com potenciais empregadores.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 flex">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold mb-2">
                Comunidade de Alunos
              </h3>
              <p className="text-gray-700 mb-4">
                Junte-se à nossa comunidade de alunos, onde você poderá
                interagir com outros estudantes, compartilhar conhecimentos e
                receber suporte adicional.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 flex">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold mb-2">
                Plataforma de Aprendizado Móvel
              </h3>
              <p className="text-gray-700 mb-4">
                Acesse nossos cursos de qualquer lugar e a qualquer momento por
                meio da nossa plataforma de aprendizado móvel, compatível com
                dispositivos iOS e Android.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 flex">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold mb-2">Aulas ao Vivo</h3>
              <p className="text-gray-700 mb-4">
                Participe de aulas ao vivo com instrutores, onde você poderá
                fazer perguntas, obter feedback em tempo real e interagir com
                outros alunos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const About = ({ description }) => {
  return (
    <div className="m-6 p-4 bg-zinc-light dark:bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
        <i className="fa fa-info-circle"></i> Sobre a Empresa
      </h3>
      <p className="mt-2 text-xl text-gray-800 dark:text-white">
        {description}
      </p>
    </div>
  );
};

const LearningFlowSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl text-center font-bold mb-6">
            Fluxo de Aprendizado
          </h2>
          <p className="text-gray-700 text-center">
            Descubra como nosso sistema de cursos funciona e prepare-se para uma
            jornada de aprendizado transformadora.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-6 mb-4">
              <i className="fa fa-search text-3xl text-blue-500"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              Descubra os Melhores Cursos
            </h3>
            <p className="text-gray-700 text-center">
              Explore nossa ampla seleção de cursos e encontre os mais adequados
              aos seus objetivos e interesses.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-6 mb-4">
              <i className="fa fa-graduation-cap text-3xl text-blue-500"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              Método de Aprendizado Eficaz
            </h3>
            <p className="text-gray-700 text-center">
              Nossos cursos são projetados para fornecer um método de
              aprendizado eficaz, combinando teoria, prática e exercícios
              interativos.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-6 mb-4">
              <i className="fa fa-book text-3xl text-blue-500"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              Material Especializado
            </h3>
            <p className="text-gray-700 text-center">
              Tenha acesso a materiais especializados, incluindo vídeos,
              tutoriais, exercícios e projetos práticos para aprimorar suas
              habilidades.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-6 mb-4">
              <i className="fa fa-certificate text-3xl text-blue-500"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              Certificação da Plataforma
            </h3>
            <p className="text-gray-700 text-center">
              Ao concluir um curso, você receberá um certificado reconhecido
              para destacar suas habilidades aos empregadores e clientes.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
const PresentationSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl text-center font-bold mb-6">
            Apresentação da Plataforma
          </h2>
          <p className="text-gray-700 text-center mb-10">
            Descubra como nossa plataforma de cursos de tecnologia pode ajudá-lo
            a alcançar seus objetivos profissionais.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-8 flex flex-col items-center justify-center">
            <img
              src="placeholder1.jpg"
              alt="Imagem do Curso 1"
              className="w-32 h-32 mb-4"
            />
            <p className="text-gray-800 text-center">
              Aprenda habilidades de ponta com os melhores instrutores do setor.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 flex flex-col items-center justify-center">
            <img
              src="placeholder2.jpg"
              alt="Imagem do Curso 2"
              className="w-32 h-32 mb-4"
            />
            <p className="text-gray-800 text-center">
              Estude quando e onde quiser com nossa plataforma móvel.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 flex flex-col items-center justify-center">
            <img
              src="placeholder3.jpg"
              alt="Imagem do Curso 3"
              className="w-32 h-32 mb-4"
            />
            <p className="text-gray-800 text-center">
              Tenha acesso a materiais especializados para aprimorar suas
              habilidades técnicas.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 flex flex-col items-center justify-center">
            <img
              src="placeholder4.jpg"
              alt="Imagem do Curso 4"
              className="w-32 h-32 mb-4"
            />
            <p className="text-gray-800 text-center">
              Receba um certificado de conclusão para comprovar suas
              habilidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
const StudentsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl text-center font-bold mb-6">
            Nossos Alunos Felizes
          </h2>
          <p className="text-gray-700 text-center mb-10">
            Veja o que nossos alunos têm a dizer sobre a experiência de
            aprendizado em nossa plataforma.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg overflow-hidden">
            <img
              src="/images/Alunos/Alunos01.png"
              alt="Foto do Aluno 1"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <img
              src="/images/Alunos/Alunos02.png"
              alt="Foto do Aluno 2"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <img
              src="/images/Alunos/Alunos03.png"
              alt="Foto do Aluno 3"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <img
              src="/images/Alunos/Alunos04.png"
              alt="Foto do Aluno 4"
              className="w-full h-56 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
const InstructorsSectionIntroduction: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Uma Equipe Apaixonada Por Ensino</h2>
          <hr className="border-t-2 border-blue-500 w-16 mx-auto mt-4" />
        </div>
        <img src="/images/Professores_Tecnologia/Professores01.png" className="w-full h-[50rem] object-cover object-top" alt="Imagem do professor" />


      </div>
    </section>
  );
};
const SupportSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex items-center flex-col px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Suporte ao Cliente</h2>
          <div className="flex flex-col mt-2 md:flex-row items-center">
            <hr className="border-t-2 border-blue-500 w-16 mx-auto mt-4 md:mt-0" />
          </div>
        </div>
        <div className="md:flex justify-around">
          <img
            src="/images/Atendente/Atendente01.png"
            className="w-full md:w-1/2 lg:w-1/4 mx-auto md:mx-0 mt-4 md:mt-0"
            alt="Suporte ao Cliente"
          />
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center hover:scale-105">
              <svg
                className="w-8 h-8 text-blue-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-lg">Suporte por E-mail</p>
            </div>
            <div className="flex items-center hover:scale-105">
              <svg
                className="w-8 h-8 text-blue-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-lg">Suporte por Chat Online</p>
            </div>
            <div className="flex items-center hover:scale-105">
              <svg
                className="w-8 h-8 text-blue-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-lg">Base de Conhecimento Online</p>
            </div>
            <div className="flex items-center hover:scale-105">
              <svg
                className="w-8 h-8 text-blue-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-lg">Comunidade de Alunos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LandingPage: React.FC = () => {
  useEffect(() => {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animateFadeIn);
        }
      });
    }, { threshold: 0.3 });

    const sections = document.querySelectorAll(`.${styles.section}`);

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);

  return (
    <div className={styles.container}>
      <Navigation />
      <Header />

      <section className={`${styles.section} ${styles.animateFadeIn}`}>
        <PresentationSection />
      </section>

      <section className={`${styles.section} ${styles.animateFadeIn}`}>
        <LearningFlowSection />
      </section>

      <section className={`${styles.section} ${styles.animateFadeIn}`}>
        <BenefitsSection />
      </section>

      <section className={`${styles.section} ${styles.animateFadeIn}`}>
        <CoursesSection courses={coursesMock} />
      </section>

      <section className={`${styles.section} ${styles.animateFadeIn}`}>
        <StudentsSection />
      </section>

      <section className={`${styles.section} ${styles.animateFadeIn}`}>
        <TestimonialsSection testimonials={testimonials} />
      </section>

      <section className={`${styles.section} ${styles.animateFadeIn}`}>
        <InstructorsSectionIntroduction />
      </section>

      <section className={`${styles.section} ${styles.animateFadeIn}`}>
        <InstructorsSection instructors={instructorsMock} />
      </section>

      <section className={`${styles.section} ${styles.animateFadeIn}`}>
        <SupportSection />
      </section>

      <section className={`${styles.section} ${styles.animateFadeIn}`}>
        <FaqSection />
      </section>

      <section className={`${styles.section} ${styles.animateFadeIn}`}>
        <BannerFinal />
      </section>

      <Footer />
    </div>
  );
};
export default LandingPage;
