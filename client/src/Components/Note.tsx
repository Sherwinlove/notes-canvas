import { motion } from "framer-motion";
import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TaskIcon from "@mui/icons-material/Task";

function Note({ name, priority, index, id, parentRef, dragStart }: any) {
  const [showDelete, setShowDelete] = useState(false);

  const handleCloseNoteOptions = (event: any) => {
    if (event.target.id === noteContainerID) {
      setShowDelete(!showDelete);
    }
    // console.log(event.target.id);
  };

  // console.log(parentRef);
  const noteStyle =
    priority === 1
      ? "border-4 border-purple-300 bg-white hover:border-purple-400 text-bold rounded-full py-4 px-8 shadow-lg"
      : priority === 2
      ? "border-4 border-pink-300 bg-white hover:border-pink-400 text-bold rounded-full py-4 px-8 shadow-lg"
      : "border-4 border-cyan-300 bg-white hover:border-cyan-400 text-bold rounded-full py-4 px-8 shadow-lg";

  const noteOptions = (
    <div className="absolute flex justify-center align-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.2 }}
      >
        <DeleteForeverIcon
          fontSize="large"
          className="text-red-300 hover:text-red-500"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.2 }}
      >
        <TaskIcon
          fontSize="large"
          className="text-green-300 hover:text-green-500"
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
      whileTap={{ scale: 0.9 }}
      onDragStart={(event) => dragStart(event, id)}
      drag
      dragConstraints={parentRef}
      dragMomentum={false}
      onClick={handleCloseNoteOptions}
    >
      {/* {showDelete && noteOptions} */}
      <div
        id="select-note"
        className="m-1"
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
