import Code from "./Code";

export interface CardProps {
  title: string;
  content: string;
  language: string;
  code: string;
  className?: string;
}

const Card = ({ title, content, language, code, className }: CardProps) => {
  return (
    <div
      className={`card w-[80%] border border-transparent bg-base-100 shadow-xl hover:border-primary-400 transition duration-200 ${className}`}
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <Code language={language}>
          {code}
        </Code>
      </div>
    </div>
  );
};

export default Card;
