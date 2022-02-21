import { motion } from "framer-motion";
import { Variant } from "framer-motion/types/types";
import type { ReactNode } from "react";

type SplitTextAnimationConfig = {
  visible: Variant;
  hidden: Variant;
};

type Props = {
  title: string;
  display?: (word: string) => ReactNode;
  animation?: SplitTextAnimationConfig;
};

export const SplitTextAnimationConfigs = {
  Default: {
    visible: (i: number) => ({
      y: 0,
      transition: {
        delay: i * 0.2,
        ease: "easeOut",
        duration: 1,
      },
    }),
    hidden: (i: number) => ({
      y: "100%",
      transition: {
        delay: i * 0.2,
        ease: "easeOut",
        duration: 1,
      },
    }),
  },
} as const;

/**
 * Applies a transition to each word of a text.
 */
const SplitText = ({ title, animation, display }: Props) => {
  const words = title.split(" ");
  return (
    <>
      <div className="sr-only">title</div>
      <div aria-hidden className="group">
        {words.map((word, i) => {
          const wordWithSpace = word + (i !== words.length - 1 ? "\u00A0" : "");
          return (
            <div key={i} className="inline-block">
              <motion.span
                className="m-0 inline-block will-change-transform mix-blend-difference"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={animation ?? SplitTextAnimationConfigs.Default}
                custom={i}
              >
                {display ? display(wordWithSpace) : wordWithSpace}
              </motion.span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SplitText;
