function ResetNotesButton({ handleResetNotesPosition }: any) {
  return (
    <div className="absolute bottom-0 py-8">
      <button
        onClick={handleResetNotesPosition}
        className="flex align-center items-center text-bold text-slate-400 hover:text-slate-500 rounded-xl text-lg"
      >
        Reset notes position
      </button>
    </div>
  );
}

export default ResetNotesButton;
