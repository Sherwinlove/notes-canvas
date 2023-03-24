import { TNote } from "../App";
import Note from "./Note";

export const Notes = ({
  notes,
  setNotes,
}: {
  notes: TNote[];
  setNotes: React.Dispatch<TNote[]>;
}) => {
  const handleOnDrag = (
    position: { x: number; y: number },
    id: number | string
  ) => {
    const { x, y } = position;
    const updatedNotesArray = [...notes].map((note) =>
      note.id === id ? { ...note, currentPosition: { x, y } } : note
    );

    setNotes(updatedNotesArray);
  };

  console.log("cock");

  return (
    <div className="space-y-2">
      {notes?.map((note: TNote, index: number) => (
        <Note {...note} index={index} handleOnDrag={handleOnDrag} />
      ))}
    </div>
  );
};
