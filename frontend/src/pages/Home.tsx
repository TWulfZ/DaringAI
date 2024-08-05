import Logo from "@assets/Logo";
import Card from "@components/Home/Card";
import Marketing from "@components/Home/Marketing";
import {
  ArrowRightCircleIcon,
  BookOpenIcon,
  CodeBracketIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/loggin")
  }
  return (
    <div className="bg-gradient-to-bmin-h-screen p-8 text-gray-100">
      <div className="mx-auto max-w-4xl">
        <div className="mb-2 -mt-2 flex items-center justify-center 2xl:mt-32 2xl:mb-8">
          <Logo className="2xl:size-[48rem] size-[36rem]"/>
        </div>
        <p className="mb-8 text-center text-xl text-gray-300 text-muted-foreground sm:text-xl sm:leading-8">
          ¿Cansado de que Midu no te enseña lo que quieres? DaringAI lo hara
          para ti. Tu asistente personal para crear planes de estudio de
          programación personalizados. Comienza tu viaje de aprendizaje.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card
            icon={<CodeBracketIcon className="h-8 w-8 text-primary-400" />}
            title="Define tus objetivos"
            description="Dile a Daring AI qué lenguajes o tecnologías quieres aprender."
          />
          <Card
            icon={<BookOpenIcon className="h-8 w-8 text-primary-400" />}
            title="Obtén tu plan personalizado"
            description="Genera un ejercicios de programación en tu lenguaje favorito."
            delay={0.15}
          />
          <Card
            icon={<UsersIcon className="h-8 w-8 text-primary-400" />}
            title="Únete a la comunidad"
            description="Conecta con otros estudiantes y comparte tu progreso."
            delay={0.3}
          />
          <Card
            icon={<ArrowRightCircleIcon className="h-8 w-8 text-primary-400" />}
            title="Comienza tu aprendizaje"
            description="Sigue tu plan y alcanza tus metas de programación."
            delay={0.45}
          />
        </div>

        <div className="mt-12 flex justify-center">
          <button className="flex items-center rounded-xl bg-primary-500 px-10 py-3 text-xl font-bold text-primary-50 transition duration-300 hover:bg-primary-600"
          onClick={() => handleButton()}>
            ¡Comenzar Ahora!
          </button>
        </div>
      </div>
      <Marketing/>
    </div>
  );
};

export default Home;
