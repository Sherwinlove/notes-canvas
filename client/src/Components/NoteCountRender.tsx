import { motion } from "framer-motion";

export type NoteCountRenderProps = {
  length: number;
};

export const NoteCountRender = ({ length }: NoteCountRenderProps) => {
  return (
    <motion.div className="absolute top-20 text-bold text-9xl opacity-10 z-0">
      {length ? length : "Loading"} Notes
    </motion.div>
  );
};
