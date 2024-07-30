import Card from "@components/Card"
import { useState } from "react";

function Test() {
  const [cardContent, setCardContent] = useState("");

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center">
      <div>
        <h1 className="text-3xl">Card</h1>
        <Card content={cardContent} />
      </div>
    </div>
  )
}

export default Test
