import { TNote } from "../App";
import Note from "./Note";

export const Notes = ({
  notesArray,
  setNotes,
}: {
  notesArray: TNote[];
  setNotes: React.Dispatch<TNote[]>;
}) => {
  const handleOnDrag = (
    position: { x: number; y: number },
    id: number | string
  ) => {
    const { x, y } = position;
    const updatedNotesArray = [...notesArray].map((note) =>
      note.id === id ? { ...note, currentPosition: { x, y } } : note
    );

    setNotes(updatedNotesArray);
  };

  console.log(notesArray);

  return (
    <div className="space-y-2">
      {notesArray?.map((note: TNote, index: number) => (
        <Note
          {...note}
          key={index}
          handleOnDrag={handleOnDrag}
          priority={note.priority}
        />
      ))}
    </div>
  );
};
