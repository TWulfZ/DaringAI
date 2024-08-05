import { PaperAirplaneIcon } from "@heroicons/react/16/solid"
import { useNavigate } from "react-router-dom";

function Input() {

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate("/board/nestjs-basics")
  }
  return (
    // TODO: Calls API backend
    // TODO: Create loading state when API call is in progress
    <form className="relative w-3/5 z-0" action="" onSubmit={handleSubmit}>
      <input type="text" placeholder="Type here" className="input input-bordered w-full py-8 rounded-full pr-16" />
      <button className="h-12 w-12 flex items-center justify-center absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-primary-500 hover:bg-primary-500/80 transition duration-200" type="submit">
      <PaperAirplaneIcon className="size-8 text-primary-50" />
      </button>
    </form>
  )
}

export default Input
