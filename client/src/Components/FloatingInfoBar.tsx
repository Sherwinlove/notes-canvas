function FloatingInfoBar({ notesArray }: any) {
  return (
    <div className="w-96 bg-neutral-800 text-white shadow-xl py-4 px-4 space-y-2 rounded-xl">
      <div className="border-b-2 border-neutral-700 pb-2 text-left font-bold text-4xl">
        Your tasks for today
      </div>
      <div className="flex flex-row space-x-4">
        <span>{notesArray.length}</span>
        <span>Unfinished tasks</span>
      </div>
    </div>
  );
}

export default FloatingInfoBar;
