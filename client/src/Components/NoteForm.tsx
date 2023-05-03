import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function NoteForm({
  isVisible,
  setIsVisible,
  handleToast,
  handleAddNote,
  addNote,
  init,
}: {
  isVisible: boolean;
  setIsVisible: React.Dispatch<boolean>;
  handleToast: any;
  handleAddNote: any; // Change this
  addNote: any;
  init: any;
}): any {
  const [noteName, setNoteName] = useState<string>("");
  const [notePriority, setNotePriority] = useState<number | null>(null);

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    if (noteName.length > 1 && notePriority != 0) {
      console.log("note");
      handleAddNote(noteName, notePriority).then(({ data }: any) => {
        if (data != null) {
          addNote(data);
          handleToast();
          init();
          setNoteName("");
          setNotePriority(null);
          setIsVisible(!isVisible);
        }
      });
    } else {
      alert("Please check the required fields.");
    }
  };

  const handleNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoteName(event.target.value);
  };

  const handlePriorityOnChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const priority = Number(event.target.value);
    if (!isNaN(priority)) {
      setNotePriority(priority);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="flex flex-col text-left bg-neutral-900 space-y-4 text-white pt-8 pb-2 px-4 rounded-xl shadow-xl"
      >
        <span className="border-b-2 border-neutral-700 pb-2 text-3xl font-bold ">
          New Task
        </span>
        <form className="flex flex-col" onSubmit={handleFormSubmit}>
          <label className="flex flex-col mb-2">
            <span className="pb-2">Name:</span>
            <input
              className="bg-slate-700 rounded-md py-2 px-2 focus:outline-0"
              type="text"
              maxLength={12}
              onChange={handleNameOnChange}
            />
          </label>
          <label className="flex flex-col mb-2">
            <span className="pb-2">Priority:</span>
            <select
              className="bg-slate-700 rounded-md py-2 px-2 focus:outline-0"
              onChange={handlePriorityOnChange}
            >
              <option value={0}>Select a due date</option>
              <option value={3}>Due today</option>
              <option value={2}>Due this week</option>
              <option value={1}>Due this month</option>
            </select>
          </label>
          <input
            className="bg-blue-500 hover:bg-blue-700 text-bold rounded-md py-2 px-4 my-4"
            type="submit"
            value="Submit"
          />
        </form>
      </motion.div>
    </AnimatePresence>
  );
}

export default NoteForm;
