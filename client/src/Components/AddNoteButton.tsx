import DescriptionIcon from "@mui/icons-material/Description";
import { motion } from "framer-motion";

export const AddNoteButton = ({ handleShowNoteForm }: any) => {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleShowNoteForm}
        className="flex align-center m-auto items-center text-bold bg-blue-600 text-white rounded-xl p-4 text-xl"
      >
        <DescriptionIcon className="mr-2" />
        Create Note
      </motion.button>
    </div>
  );
};
