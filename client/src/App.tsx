import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState, useRef } from "react";
import NoteForm from "./Components/NoteForm";
import Toast from "./Components/Toast";
import axios from "axios";
import DeleteNote from "./Components/DeleteNote";
import AddNote from "./Components/AddNote";
import ResetNotesButton from "./Components/ResetNotesButton";
import UserHeaderUI from "./Components/UserHeaderUI";
import { Notes } from "./Components/Notes";
import { toast } from "react-toastify";

declare global {
  interface Window {
    reload: any;
  }
}

export type TNote = {
  name: string;
  priority: number;
  _id?: number | string;
  parentRef?: any;
};

export const URL = "http://localhost:6969";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [notesArray, setNotesArray] = useState<TNote[]>([]);
  const parentRef = useRef<React.LegacyRef<HTMLDivElement> | any>();

  const API = {
    addNote: async (name: string, priority: number) => {
      return await axios.post(`${URL}/api/post`, {
        name,
        priority,
      });
    },
    deleteNote: async (id: string) => {
      return await axios.post(`${URL}/api/delete`, { id });
    },
  };

  const handleShowNoteForm = () => {
    setIsVisible(!isVisible);
  };

  const handleFormOnClose = (event: any) => {
    if (event.target.id === "modal-container") {
      setIsVisible(!isVisible);
    }
  };

  const addNote = (note: any) => {
    setNotesArray((prev) => (prev.length === 0 ? [note] : [...prev, note]));
  };

  const handleToast: any = () => {
    console.log("Toasted");
    toast("📝 New Note Created!");
  };

  // Drags
  const dragOver: any = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.getData("noteId");
    console.log("Over");
  };

  const dragStart: any = (
    event: React.DragEvent<HTMLDivElement>,
    id: string
  ) => {
    // event.dataTransfer.setData('text', id);
    console.log(`Started dragging ${id}.`);
  };

  const dragDrop: any = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("Dropped");
  };

  const init = async () => {
    const data = await axios.get(`${URL}/api/getAll`);
    setNotesArray(data.data);
  };

  useEffect(() => {
    init();
  }, []);

  const form = (
    <div
      id="modal-container"
      onClick={handleFormOnClose}
      className="fixed flex flex-col w-screen h-screen align-center items-center justify-center inset-0 bg-white drop-shadow-xl bg-black bg-opacity-30 backdrop-blur-sm z-70"
    >
      <NoteForm
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        handleToast={handleToast}
        handleAddNote={API.addNote}
        addNote={addNote}
        init={init}
      />
    </div>
  );

  const handleResetNotesPosition: any = () => {
    window.location.reload();
  };

  return (
    <div
      className="App relative p-8 h-screen flex justify-center items-center"
      ref={parentRef}
    >
      <Notes
        notesArray={notesArray}
        parentRef={parentRef}
        dragStart={dragStart}
      />
      <UserHeaderUI
        notesArray={notesArray}
        handleShowNoteForm={handleShowNoteForm}
      />
      {isVisible && form}
      <ResetNotesButton handleResetNotesPosition={handleResetNotesPosition} />
      <Toast />
    </div>
  );
}

export default App;
