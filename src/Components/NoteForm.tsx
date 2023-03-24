function NoteForm() {
  return (
    <div className="flex flex-col text-left spacing-y-2 bg-neutral-900 text-white py-8 px-4 rounded-xl shadow-xl">
      <span className="border-b-2 border-neutral-700 pb-2 mb-4 text-3xl font-bold ">
        New Task
      </span>
      <form className="flex flex-col space-y-4">
        <label className="flex flex-col mb-2">
          <span className="pb-2">Name:</span>
          <input
            className="bg-slate-700 rounded-md py-2 px-2 focus:outline-0"
            type="text"
            name="name"
          />
        </label>
        <input
          className="bg-blue-500 hover:bg-blue-700 text-bold rounded-md py-2 px-4"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default NoteForm;
