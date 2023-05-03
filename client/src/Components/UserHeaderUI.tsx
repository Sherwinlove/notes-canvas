import FloatingInfoBar from "./FloatingInfoBar";
import DescriptionIcon from "@mui/icons-material/Description";
import { motion } from "framer-motion";

function UserHeaderUI({ notesArray, handleShowNoteForm }: any) {
  return (
    <div className="absolute top-0 flex items-center py-8 justify-center flex-col space-y-8">
      <div className="mx-2">
        <FloatingInfoBar notesArray={notesArray} />
      </div>
      <div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={handleShowNoteForm}
          className="flex align-center items-center text-bold text-slate-400 hover:text-slate-500 rounded-xl text-xl"
        >
          <DescriptionIcon className="mx-2" />
          Create Task
        </motion.button>
      </div>
    </div>
  );
}

export default UserHeaderUI;
