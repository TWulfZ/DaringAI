import { Link } from "react-router-dom";
import Code from "../Code";

export interface CardProps extends CardDataExample {
  className?: string;
}

const Card = ({ id ,title, content, language, code, className}: CardProps) => {
  return (
    <Link to={`example/${id}`} className={`card w-[80%] border bg-base-100 shadow-xl hover:border-primary-400 border-primary-100 border-opacity-10 transition duration-200 ${className}`}>
      <div className="card-body">
        <h1 className="card-title text-2xl font-bold">{title}</h1>
        <p className="mb-4">{content}</p>
        <Code language={language}>
          {code}
        </Code>
      </div>
    </Link>
  );
};

export default Card;
