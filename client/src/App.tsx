import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState, useRef } from "react";
import NoteForm from "./Components/NoteForm";
import Toast from "./Components/Toast";
import axios from "axios";
import ResetNotesButton from "./Components/ResetNotesButton";
import { AddNoteButton } from "./Components/AddNoteButton";
import { NoteCountRender } from "./Components/NoteCountRender";
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
  const parentRef = useRef<HTMLInputElement | null>(null);

  const API = {
    addNote: async (name: string, priority: number) => {
      return await axios.post(`${URL}/api/post`, {
        name,
        priority,
      });
    },
    deleteNote: async (id: string) => {
      console.log({ id });
      const data = await axios.delete(`${URL}/api/delete/${id}`);
      if (data.status === 200) {
        handleDeleteNote(id);
      }
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

  const handleDeleteNote = (id: string) => {
    const filteredArray = [...notesArray].filter((note) => note._id !== id);
    setNotesArray(filteredArray);
  };

  const addNote = (note: TNote) => {
    setNotesArray((prev) => (prev.length === 0 ? [note] : [...prev, note]));
  };

  const handleToast: any = () => {
    console.log("Toasted");
    toast("📝 New Note Created!");
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
      className="fixed flex flex-col w-screen h-screen align-center items-center justify-center inset-0 bg-white drop-shadow-xl bg-black bg-opacity-30 backdrop-blur-sm z-500"
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

  console.log(notesArray);

  return (
    <div
      className="App relative p-8 h-screen flex justify-center items-center"
      ref={parentRef}
    >
      <Toast />
      <NoteCountRender length={notesArray.length} />
      <div className="flex flex-col items-center">
        <Notes
          handleDeleteNote={API.deleteNote}
          notesArray={notesArray}
          parentRef={parentRef}
        />
      </div>
      <div id="button-container" className="absolute bottom-0 pb-8 mt-24">
        <AddNoteButton
          notesArray={notesArray}
          handleShowNoteForm={handleShowNoteForm}
        />
        <ResetNotesButton handleResetNotesPosition={handleResetNotesPosition} />
      </div>
      {isVisible && form}
    </div>
  );
}

export default App;
