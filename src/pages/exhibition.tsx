import { motion } from "framer-motion";

const Exhibition = () => (
  <>
    <motion.div layout>
      <motion.div
        style={{
          width: "100vw",
          height: "50vh",
          backgroundColor: "#e1e1e1",
        }}
        layoutId="excard"
      ></motion.div>
    </motion.div>
  </>
);

export default Exhibition;
