export interface CardProps extends CardDataChallenge {
  className?: string;
}

const Card = ({ title, content, language, className }: CardProps) => {
  return (
    <div
      className={`card w-[80%] border bg-base-100 shadow-xl hover:border-primary-400 border-primary-100 border-opacity-10 transition duration-200 ${className}`}
    >
      <div className="card-body">
        <h1 className="card-title text-2xl font-bold">{title}</h1>
        <p className="mb-4">{content}</p>
        <p>{language}</p>
      </div>
    </div>
  );
};

export default Card;
