import { TNote } from "../App";
import Note from "./Note";

export const Notes = ({
  notesArray,
  parentRef,
  dragStart,
}: {
  notesArray: TNote[];
  parentRef: any;
  dragStart: any;
}) => {
  const testFn = (event: any) => {
    console.log({ x: event.clientX, y: event.clientY });
  };

  // const handleOnDragStart = (event: any) => {
  //   console.log("Dragging these nuts across your browser.");
  // };

  return (
    <div className="flex flex-row w-2/3 justify-center flex-wrap m-auto">
      {notesArray?.map((note: TNote, index: number, _id) => (
        <Note
          {...note}
          index={index}
          priority={note.priority}
          testFn={testFn}
          id={note._id}
          parentRef={parentRef}
          dragStart={dragStart}
        />
      ))}
    </div>
  );
};
