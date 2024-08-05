const Marketing = () => {
  return (
    <div className="py-16 sm:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h1 className="font-urban animate-fade-up text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Nunca fue tan facil
          </h1>

          <h1 className=" bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl pb-4">
          Estudiar Programación
          </h1>

          <p
            className="animate-fade-up text-muted-foreground mt-2 max-w-[42rem] leading-normal sm:text-xl sm:leading-8"
          >
            DaringAI te ayuda a aprender programación de forma autonoma, con un plan de estudios personalizado y la evaluación de tu aprendizaje.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16"></div>
    </div>
  );
};

export default Marketing;
