import { TNote } from "../App";
import { StyledNote } from "./StyledNote";

export const Notes = ({
  notesArray,
  parentRef,
  handleDeleteNote,
}: {
  notesArray: TNote[];
  parentRef: any;
  handleDeleteNote: any;
}) => {
  return (
    <div className="flex flex-row w-2/3 justify-center flex-wrap">
      {notesArray?.map((note: TNote, index: number) => (
        <StyledNote
          key={index}
          priority={note.priority}
          parentRef={parentRef}
          id={note._id}
          handleDeleteNote={handleDeleteNote}
        >
          {note.name}
        </StyledNote>
      ))}
    </div>
  );
};
