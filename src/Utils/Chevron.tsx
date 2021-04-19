const Chevron = ({ up }: { up?: boolean }) => {
  const downPath = "M 0 0 L 3 1.7 L 6 0";
  const upPath = "M 0 2 L 3 0.3 L 6 2";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 2"
      width={40}
      height={10}
    >
      <path
        d={up ? upPath : downPath}
        stroke="#FFFFFF"
        stroke-width=".3"
        fill="none"
        stroke-linejoin="miter"
      />
    </svg>
  );
};

export default Chevron;
