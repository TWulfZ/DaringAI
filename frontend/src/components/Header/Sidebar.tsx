import { AcademicCapIcon, PlusCircleIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import useGetHistory from "@hooks/useGetHistory";
import { Link } from "react-router-dom";

const SideBar = () => {
  const boardsHistoryQuery = useGetHistory();
  return (
    <>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-2 text-base-content">
          <li className="menu-title mb-2 flex flex-row items-center justify-between">
            <img src="/logo.svg" className="size-10" />
            <label htmlFor="my-drawer" className="btn btn-ghost">
              <XMarkIcon className="size-6" />
            </label>
          </li>
          <Link to="/chat" className="btn btn-ghost my-1 flex items-center justify-start gap-2 text-primary-500">
            <PlusCircleIcon className="size-6" />
            <span>Nuevo Plan</span>
          </Link>
          <li />
          <li className="menu-title mb-2 flex flex-row items-center gap-2">
            <ClockIcon className="size-6" /> Historial de Planes
          </li>
          {boardsHistoryQuery.isPending ? (
            <li>Loading...</li>
          ) : (
            boardsHistoryQuery.data?.map((board) => (
              <Link
                key={board.board_id}
                to={`/board/${board.board_id}`}
                className="btn btn-ghost my-1 flex items-center justify-start gap-2"
              >
                <AcademicCapIcon className="size-6" />
                <span>{board.title}</span>
              </Link>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
