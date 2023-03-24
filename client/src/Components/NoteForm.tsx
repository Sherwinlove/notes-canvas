import {
  ChangeEvent,
  ChangeEventHandler,
  DetailedHTMLProps,
  ReactEventHandler,
  SelectHTMLAttributes,
  SyntheticEvent,
  useState,
} from "react";
import { useRecoilState } from "recoil";
import { userNotesStateAtom } from "../recoil/atom/userNotesStateAtom";

export function NoteForm({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: React.Dispatch<boolean>;
}) {
  const [noteName, setNoteName] = useState<string>("");
  const [notePriority, setNotePriority] = useState<number>(0);
  const [_, setNotesList] = useRecoilState(userNotesStateAtom);

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    if (noteName.length > 1) {
      setNotesList((oldNotes: any): any => [
        ...oldNotes,
        { id: Date.now(), name: noteName, priority: notePriority },
      ]);
      setNoteName("");
      setNotePriority(0);
      setIsVisible(!isVisible);
    } else {
      console.log("The name of your task needs to be longer.");
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

  console.log(typeof notePriority);

  return (
    <div className="flex flex-col text-left bg-neutral-900 space-y-4 text-white pt-8 pb-2 px-4 rounded-xl shadow-xl">
      <span className="border-b-2 border-neutral-700 pb-2 text-3xl font-bold ">
        New Task
      </span>
      <form className="flex flex-col" onSubmit={handleFormSubmit}>
        <label className="flex flex-col mb-2">
          <span className="pb-2">Name:</span>
          <input
            className="bg-slate-700 rounded-md py-2 px-2 focus:outline-0"
            type="text"
            onChange={handleNameOnChange}
          />
        </label>
        <label className="flex flex-col mb-2">
          <span className="pb-2">Priority:</span>
          <select
            className="bg-slate-700 rounded-md py-2 px-2 focus:outline-0"
            name="name"
            onChange={handlePriorityOnChange}
          >
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
    </div>
  );
}

export default NoteForm;
