import PageTransition from "@routes/PageTransition";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}
import "./Card.css"

const Card = ({ icon, title, description, delay }: CardProps) => {
  return (
    <PageTransition delay={delay}>
      <div className="animate-border-c flex items-start rounded-lg bg-gray-800 py-4 p-6 2xl:p-6 shadow-md">
        <div className="mr-4 mt-1">{icon}</div>
        <div>
          <h3 className="mb-2 text-xl font-semibold text-primary-300">
            {title}
          </h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </PageTransition>
  );
};

export default Card;
