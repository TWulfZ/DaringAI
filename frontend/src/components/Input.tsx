import { PaperAirplaneIcon } from "@heroicons/react/16/solid"
import { useGenerateBoard } from "@hooks/useGenerateBoard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Input() {
  const [prompt, setPrompt] = useState("");

  const navigate = useNavigate();
  const generateBoard = useGenerateBoard();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    if(prompt == "") return;
    generateBoard.mutate(prompt, {
      onSuccess: (data) => {
        navigate(`/board/${data.board_id}`)
      }
    })
  }
  return (
    <form className="relative w-3/5 z-0" action="" onSubmit={handleSubmit}>
      { }
      <input type="text" placeholder="Type here" className="input input-bordered w-full py-8 rounded-full pr-16" 
      value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
            <button
        className="h-12 w-12 flex items-center justify-center absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-primary-500 hover:bg-primary-500/80 transition duration-200"
        type="submit"
        disabled={generateBoard.isPending}
      >
        {generateBoard.isPending ? (
          <span className="loading loading-spinner loading-sm text-primary-50 size-8"></span>
        ) : (
          <PaperAirplaneIcon className="size-8 text-primary-50" />
        )}
      </button>
    </form>
  )
}

export default Input
