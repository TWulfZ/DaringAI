import CardStack from "@components/CardStack";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import PageTransition from "@routes/PageTransition";
import type { CardProps } from "@components/Card";

const Board = () => {
  const title = "¿Como funcionan los Hooks en React?";
  const cards: CardProps[] = [
    {
      title: "¿Como usar useState?",
      content:
        "useState es una función que nos permite crear estados en React. Por ejemplo, un estado:",
      language: "tsx",
      code: "const [count, setCount] = useState(0);",
    },
    {
      title: "¿Como usar useEffect?",
      content:
        "useEffect es una función que nos permite crear efectos en React. Por ejemplo, un efecto:",
      language: "tsx",
      code:
        "useEffect(() => {\n  // Código a ejecutar\n}, []);",
    },
    {
      title: "¿Como usar useRef?",
      content:
        "useRef es una función que nos permite crear referencias en React. Por ejemplo, una referencia:",
      language: "tsx",
      code: "javascript\nconst ref = useRef(null);",
    },
  ];

  return (
    <PageTransition>
      <div className="">
        <div className="mb-12 mt-16 text-4xl text-center font-bold text-emerald-50">
          {title}
        </div>
        <div className="flex h-screen text-white">
          {/* Columna izquierda: Ejemplos */}
          <div className="w-1/2 space-y-4 p-4">
            <h2 className="mb-4 text-2xl font-bold">Ejemplos</h2>
            <CardStack cards={cards} />
          </div>

          {/* Columna derecha: Desafíos */}
          <div className="w-1/2 space-y-4 p-4">
            <h2 className="mb-4 text-2xl font-bold">Desafíos</h2>
            <CardStack cards={cards} />
            <button className="btn btn-success w-full text-white">
              <PlusCircleIcon className="mr-2 h-5 w-5" />
              Generar más desafíos
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Board;
