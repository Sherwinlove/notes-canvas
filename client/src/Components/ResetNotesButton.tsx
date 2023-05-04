function ResetNotesButton({ handleResetNotesPosition }: any) {
  return (
    <div className="py-4">
      <button
        onClick={handleResetNotesPosition}
        className="flex justify-center text-bold text-slate-400 hover:text-slate-500 rounded-xl text-md m-auto"
      >
        Reset notes position
      </button>
    </div>
  );
}

export default ResetNotesButton;
