import daringLogo from '/daringai.svg'



function Logo({className}: {className?: string}) {
  return (
      <img src={daringLogo} className={`logo drag-none h-32 2xl:h-40 ${className}`} alt="DaringAI logo" />
  );
}

export default Logo;
