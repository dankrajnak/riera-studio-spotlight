import { IntersectionOptions, useInView } from "react-intersection-observer";
import { motion, useAnimation, Variant } from "framer-motion";
import { useEffect, FunctionComponent } from "react";
import SimpleReactLightbox from "simple-react-lightbox";

type AnimationConfig = {
  visible: Variant;
  hidden: Variant;
  options: IntersectionOptions;
};

type Props = {
  animationConfig?: AnimationConfig | null;
};

export const Transitions = {
  Default: {
    visible: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.85,
    },
    options: {},
  },
} as const;

const AnimateOnScroll: FunctionComponent<Props> = ({
  animationConfig = Transitions.Default,
  children,
}) => {
  const { options, visible, hidden } = animationConfig;
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, ...options });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={{ visible, hidden }}
      animate={controls}
      initial="hidden"
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
