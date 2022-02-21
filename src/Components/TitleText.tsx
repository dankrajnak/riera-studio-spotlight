const TitleText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => (
  <h1
    className={`
    text-5xl 
    font-thin 
    font-serifDisplay
    text-white 
    underline 
    decoration-transparent
    transition
    duration-500
    hover:decoration-white
    group-hover:decoration-white
    ${className ?? ""}`}
  >
    {text}
  </h1>
);

export default TitleText;
