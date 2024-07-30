import Input from "@components/Input";
import Logo from "@assets/Logo";
import PageTransition from "routes/PageTransition";

function Home() {
  return (
    <PageTransition>
      <div className="flex h-dvh w-full flex-col items-center justify-center pb-12 2xl:pb-48">
        <Logo />
        <span className="mb-12 mt-16 text-4xl font-bold text-emerald-50">
          ¿Que tema quieres aprender?
        </span>
        <Input />
      </div>
    </PageTransition>
  );
}

export default Home;
