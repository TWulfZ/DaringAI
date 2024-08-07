import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Card, { CardProps as ECardProps } from "./Card";

interface CardStackExample {
  cards: ECardProps[];
}

const CardStack = ({ cards }: CardStackExample) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : cards.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
  };

  const getCardStyle = (index: number) => {
    const style =
      index === activeIndex
        ? "active"
        : index === activeIndex - 1 ||
            (activeIndex === 0 && index === cards.length - 1)
          ? "left"
          : index === activeIndex + 1 ||
              (activeIndex === cards.length - 1 && index === 0)
            ? "right"
            : "inactive";

    switch (style) {
      case "active":
        return "z-30 scale-100";
      case "left":
        return "z-20 -translate-x-16 scale-90 blur-[2px]";
      case "right":
        return "z-20 translate-x-16 scale-90 blur-[2px]";
      case "inactive":
        return "z-10 scale-90 opacity-50 blur-[2px]";
    }
  };

  return (
    <div className="relative flex h-3/6 w-full items-center justify-center px-24">
      {cards.map((card, index) => (
        <Card
          id={card.id}
          key={index}
          title={card.title}
          language={card.language}
          content={card.content}
          className={`absolute transition-all duration-300 ease-in-out ${getCardStyle(index)}`}
        />
      ))}
      <button
        onClick={handlePrev}
        className="absolute left-4 z-40 h-4/6 w-14 opacity-0 transition-all duration-300 ease-in-out hover:opacity-70 2xl:w-20"
      >
        <ChevronLeftIcon />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 z-40 h-full w-14 opacity-0 transition-all duration-300 ease-in-out hover:opacity-70 2xl:w-20"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default CardStack;
