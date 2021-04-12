import { motion } from "framer-motion";

const SplitText = ({ children, ...rest }: { children: string }) => {
  const words = children.split(" ");
  return words.map((word, i) => (
    <div
      key={children + i}
      style={{ display: "inline-block", overflow: "hidden" }}
    >
      <motion.h1
        {...rest}
        style={{
          display: "inline-block",
          willChange: "transform",
        }}
        custom={i}
      >
        {word + (i !== words.length - 1 ? "\u00A0" : "")}
      </motion.h1>
    </div>
  ));
};

export default SplitText;
