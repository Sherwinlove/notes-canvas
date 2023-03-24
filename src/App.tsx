import "./App.css";
import { useEffect, useMemo, useState } from "react";
import FloatingInfoBar from "./Components/FloatingInfoBar";
import { notesList } from "./api/notesAPI";
import DescriptionIcon from "@mui/icons-material/Description";
import NoteForm from "./Components/NoteForm";
import { Notes } from "./Components/Notes";

type RawNote = {
  name: string;
  priority: number;
};

export type TNote = {
  name: string;
  priority: number;
  id: number | string;
  startingPosition: {
    x: number | null;
    y: number | null;
  };
  currentPosition: {
    x: number | null;
    y: number | null;
  };
};

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [notesArray, setNotesArray] = useState<TNote[]>([]);
  const handleCreateNote = () => {
    console.log("Note created!");
    setIsVisible(!isVisible);
  };

  const handleOnClose = (e: any): void => {
    if (e.target.id === "modal-container" || e.key === "Escape") {
      setIsVisible(!isVisible);
    }
  };

  useEffect(() => {
    const rawNotes: RawNote[] = notesList;
    const formattedNotes: TNote[] = rawNotes.map((note, index) => ({
      ...note,
      id: index,
      startingPosition: { x: null, y: null },
      currentPosition: { x: 0, y: 0 },
    }));

    // TODO: For every div store starting position

    console.log("your mom lol");
    setNotesArray(formattedNotes);
  }, []);

  const form = (
    <div
      id="modal-container"
      onClick={handleOnClose}
      className="fixed flex flex-col w-screen h-screen align-center items-center justify-center inset-0 bg-white drop-shadow-xl bg-black bg-opacity-30 backdrop-blur-sm z-70"
    >
      <NoteForm />
    </div>
  );

  return (
    <div className="App relative p-8 h-screen flex flex-col justify-center items-center">
      <Notes notes={notesArray} setNotes={setNotesArray} />
      <div className="absolute top-0 flex items-center py-8 justify-center flex-col space-y-8">
        <div className="mx-2">
          <FloatingInfoBar notesArray={notesArray} />
        </div>
        <div>
          <button
            onClick={() => handleCreateNote()}
            className="flex align-center items-center text-bold text-slate-400 hover:text-slate-500 rounded-xl text-xl"
          >
            <DescriptionIcon className="mx-2" />
            Create Task
          </button>
        </div>
      </div>
      {isVisible && form}
      <div className="absolute bottom-0 py-8">
        <button className="flex align-center items-center text-bold text-slate-400 hover:text-slate-500 rounded-xl text-lg">
          Reset tasks position
        </button>
      </div>
    </div>
  );
}

export default App;
