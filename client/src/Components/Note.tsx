import { motion } from "framer-motion";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

function Note({ name, priority, index, id, parentRef, dragStart }: any) {
  const [showDelete, setShowDelete] = useState(false);

  const handleCloseNoteOptions = (event: any) => {
    if (event.target.id === noteContainerID) {
      setShowDelete(!showDelete);
    }
  };

  const noteStyle =
    priority === 1
      ? `border-4 ${
          showDelete
            ? "bg-neutral-700 border-neutral-700"
            : "transition bg-white border-purple-300 hover:border-purple-400"
        }  text-bold rounded-full py-4 px-8 shadow-lg`
      : priority === 2
      ? `border-4 ${
          showDelete
            ? "bg-neutral-700 border-neutral-700"
            : "bg-white border-pink-300 hover:border-pink-400"
        }  text-bold rounded-full py-4 px-8 shadow-lg`
      : `border-4  ${
          showDelete
            ? "bg-neutral-700 border-neutral-700"
            : "bg-white border-cyan-300 hover:border-cyan-400"
        } text-bold rounded-full py-4 px-8 shadow-lg`;

  const noteOptions = (
    <div className="absolute flex justify-center align-center items-center z-50">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <CancelIcon
          fontSize="large"
          className="transition text-white hover:text-red-500"
        />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <CheckCircleIcon
          fontSize="large"
          className="transition text-white hover:text-green-500"
        />
      </motion.div>
    </div>
  );

  const noteContainerID = `note-container-${id}`;

  return (
    <motion.div
      id={noteContainerID}
      className="relative flex flex-row justify-center items-center"
      key={index}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      onDragStart={(event) => dragStart(event, id)}
      drag
      dragConstraints={parentRef}
      dragMomentum={false}
      onClick={handleCloseNoteOptions}
    >
      {showDelete && noteOptions}
      <div
        id="select-note"
        className={`m-1 ${showDelete && "blur-sm"}`}
        onClick={() => setShowDelete(!showDelete)}
      >
        <div className={noteStyle}>
          <span className="text-xl">{name}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default Note;
