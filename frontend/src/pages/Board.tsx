import CardsExample from "@components/examples/CardStack";
import CardsChallenge from "@components/challenges/CardStack";
import PageTransition from "@routes/PageTransition";
import { useParams } from "react-router-dom";
import useGetBoard from "@hooks/useGetBoard";

const Board = () => {
  const { boardId } = useParams();
  
  const boardQuery = useGetBoard(boardId);
  const board = boardQuery.data;
  
  if (!board) { return <>Board not found</>; }

  // TODO: Use API IA vercel sdk
  return (
    <PageTransition>
      <div className="h-dvh">
        <div className="pt-16 text-center text-4xl font-bold text-emerald-50">
          {board.title}
        </div>
        <div className="flex h-[80%] text-white">
          {/* Columna izquierda: Ejemplos */}
          <div className="w-1/2 p-4">
            <div className="flex h-28 items-center justify-center">
              <h2 className="items-center text-3xl font-bold">Ejemplos</h2>
            </div>
            <CardsExample cards={board.cards_example}/>
          </div>

          {/* Columna derecha: Desafíos */}
          <div className="w-1/2 p-4">
            <div className="flex h-28 items-center justify-center">
              <h2 className="items-center text-3xl font-bold">Desafios</h2>
            </div>
            <CardsChallenge cards={board.cards_challenge} />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Board;
