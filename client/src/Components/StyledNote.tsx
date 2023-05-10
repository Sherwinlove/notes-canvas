import { motion } from "framer-motion";
import { RefObject } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

export type StyledNoteProps = {
  children: string;
  priority: number;
  parentRef?: RefObject<Element>;
  id?: number | string;
  handleDeleteNote: any;
};

export const StyledNote = ({
  children,
  priority,
  parentRef,
  id,
  handleDeleteNote,
}: StyledNoteProps) => {
  const noteStyle =
    priority === 1
      ? "border-purple-300 hover:border-purple-400"
      : priority === 2
      ? "border-pink-300 hover:border-pink-400"
      : "border-cyan-300 hover:border-cyan-400";

  const noteContainerID = `note-container-${id}`;

  return (
    <motion.div
      id={noteContainerID}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      dragMomentum={false}
      drag
      dragConstraints={parentRef}
      className={`bg-white m-1 border-4 text-bold rounded-full py-2 px-2 shadow-lg ${noteStyle}`}
    >
      <div className="flex items-center justify-between">
        <motion.div
          id="delete-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <CancelIcon
            fontSize="large"
            className="text-red-50 hover:text-red-500"
            onClick={() => handleDeleteNote(id)}
          />
        </motion.div>
        <div className="mx-2">{children}</div>
        <motion.div
          id="complete-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <CheckCircleIcon
            fontSize="large"
            className="text-green-50 hover:text-green-500"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
